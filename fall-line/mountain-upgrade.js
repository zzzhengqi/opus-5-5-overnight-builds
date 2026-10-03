/* 自包含天气与火箭单板扩展，使用原游戏的渲染器、地形和固定步长物理。 */
(() => {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
  const weatherNames = {clear: '晴天', snow: '暴雪', blizzard: '暴雪'};
  let game, engine, snow, rocket, panel, weatherButton, boardButton, timeButton, status, fuelBar, heatBar, engineSound;
  let storm = 0, precipitation = 0, elapsed = 0, padToggleHeld = false, panelKey = '';
  const state = {rocket: false, fuel: 100, heat: 0, throttle: 0, locked: false, rechargeDelay: 0, weather: 'blizzard', snowImpacts: 0, assist: true, assistedLandings: 0};

  // Right click is inert, including the activity handler that normally starts the demo.
  for (const type of ['contextmenu', 'pointerdown', 'pointerup', 'mousedown', 'mouseup', 'auxclick']) {
    window.addEventListener(type, event => {
      if (type === 'contextmenu' || event.button === 2) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, {capture: true});
  }

  function setWeather(value) {
    if (!Object.hasOwn(weatherNames, value)) return;
    game.G.weather = value === 'snow' ? 'blizzard' : value;
    game.ui.popup(`天气：${weatherNames[value]}${value === 'blizzard' ? ' · 阵风与低能见度' : ''}`, 'info');
  }
  function cycleWeather() {
    const order = ['clear', 'blizzard'];
    setWeather(order[(order.indexOf(game.G.weather) + 1) % order.length]);
  }
  function setRocket(value) {
    state.rocket = !!value;
    if (state.rocket && game.G.discipline !== 'snowboard') {
      game.G.discipline = 'snowboard';
      game.phys.setDiscipline('snowboard', game.G.stance);
      game.rider.setDiscipline('snowboard', game.G.stance);
    }
    state.throttle = 0;
    game.G.hintKey = '';
    game.ui.popup(state.rocket ? '火箭单板已装备 · 按住 F 推进，松开冷却' : '已切换至普通单板', 'good');
    attachRocket();
  }
  function addPanel() {
    const css = document.createElement('style');
    css.textContent = `
      .fl-upgrade{position:absolute;bottom:34px;left:50%;transform:translateX(-50%);width:520px;padding:12px 16px;border-top:2px solid #7fe7ff80;background:linear-gradient(125deg,#071421e6,#071421b3);pointer-events:auto;font-style:normal}
      .fl-upgrade-buttons{display:flex;gap:8px}.fl-upgrade button{flex:1;background:#ffffff0a;color:#eaf7ff;border:1px solid #7fe7ff40;padding:8px;font:700 16px var(--fd);cursor:pointer;white-space:nowrap}
      .fl-root.is-modal .fl-upgrade,.fl-root[data-mode=menu] .fl-upgrade,.fl-root[data-mode=results] .fl-upgrade{visibility:hidden;pointer-events:none}
      .fl-sheet{max-height:960px;overflow-y:auto;overscroll-behavior:contain;scrollbar-color:#7fe7ff60 #071421}
      .fl-sheet.is-on{pointer-events:auto}
      .fl-upgrade button:hover,.fl-upgrade button:focus-visible{background:#7fe7ff30;outline:2px solid #7fe7ff}.fl-upgrade button[aria-pressed=true]{border-color:#ff8a52;color:#ffbd8e}
      .fl-upgrade kbd{font:700 12px var(--fd);border:1px solid #ffffff70;padding:1px 4px;border-radius:3px;margin-left:5px}
      .fl-rocket-readout{padding-top:9px;color:#b5d1df;font:600 14px var(--fd)}.fl-rocket-readout[hidden]{display:none}.fl-rocket-bars{display:flex;gap:14px;margin-top:7px}.fl-rocket-bars label{display:flex;align-items:center;gap:7px;flex:1}
      .fl-rocket-track{flex:1;background:#ffffff18;height:5px;overflow:hidden}.fl-rocket-track i{height:100%;display:block;transform-origin:left;background:#7fe7ff}.fl-rocket-track.heat i{background:#ff8a52}
      .fl-rocket-status{color:#eef8fc;letter-spacing:.04em}.fl-upgrade[data-thrust=true]{border-color:#ff8a52;box-shadow:0 0 25px #ff7a201c}
      .fl-assist-hint{padding-top:7px;color:#b5d1df;font:500 13px var(--fd)}
      .fl-hud-panel-shell{position:absolute;bottom:34px;pointer-events:auto}
      .fl-hud-controls-shell{left:44px;width:max-content;min-width:300px}
      .fl-hud-upgrade-shell{left:50%;transform:translateX(-50%);width:520px}
      .fl-hud-panel-shell[data-panel-mode=hidden]{width:auto;min-width:0}
      .fl-hud-panel-shell .fl-controls,.fl-hud-panel-shell .fl-upgrade{position:relative;left:auto;bottom:auto;transform:none}
      .fl-hud-panel-tools{display:flex;align-items:center;gap:8px;padding:7px 10px;background:#071421e6;border:1px solid #7fe7ff40;border-bottom:0}
      .fl-hud-panel-title{flex:1;color:#c9e7f4;font:600 14px var(--fd)}
      .fl-hud-panel-shell .fl-panel-choice,.fl-hud-panel-shell .fl-panel-launcher{color:#eaf7ff;border:1px solid #7fe7ff55;background:#071421df;padding:5px 10px;font:600 14px var(--fd);cursor:pointer}
      .fl-hud-panel-shell .fl-panel-choice[aria-pressed=true]{color:#7fe7ff;border-color:#7fe7ff;background:#7fe7ff18}
      .fl-hud-panel-shell .fl-panel-launcher{padding:9px 14px;color:#bfefff}
      .fl-hud-panel-shell button:hover,.fl-hud-panel-shell button:focus-visible{outline:2px solid #7fe7ff;outline-offset:2px}
      .fl-hud-panel-shell [hidden]{display:none!important}
      .fl-root.is-modal .fl-hud-panel-shell,.fl-root[data-mode=menu] .fl-hud-panel-shell,.fl-root[data-mode=results] .fl-hud-panel-shell{visibility:hidden;pointer-events:none}
    `;
    document.head.appendChild(css);
    panel = document.createElement('div');
    panel.className = 'fl-upgrade';
    panel.innerHTML = `<div class="fl-upgrade-buttons"><button type="button" data-action="weather" aria-label="切换天气">天气：暴雪 <kbd>N</kbd></button><button type="button" data-action="time" aria-label="切换清晨与粉紫晚霞">粉紫晚霞 <kbd>H</kbd></button><button type="button" data-action="board" aria-label="装备火箭单板" aria-pressed="false">普通单板 <kbd>B</kbd></button></div><div class="fl-rocket-readout" hidden><div class="fl-rocket-status">按住 F 火箭推进 · 松开冷却</div><div class="fl-rocket-bars"><label>燃料 <span class="fl-rocket-track"><i></i></span></label><label>温度 <span class="fl-rocket-track heat"><i></i></span></label></div></div><div class="fl-assist-hint">落地辅助已开启 · 松开方向键自动回正</div>`;
    game.ui.$.hud.appendChild(panel);
    weatherButton = panel.querySelector('[data-action=weather]');
    boardButton = panel.querySelector('[data-action=board]');
    timeButton = panel.querySelector('[data-action=time]');
    status = panel.querySelector('.fl-rocket-status');
    [fuelBar, heatBar] = panel.querySelectorAll('.fl-rocket-track i');
    weatherButton.addEventListener('click', cycleWeather);
    timeButton.addEventListener('click', () => game.setTimeOfDay(game.G.tod === 'golden' ? 'morning' : 'golden'));
    boardButton.addEventListener('click', () => setRocket(!state.rocket));
    window.addEventListener('keydown', event => {
      if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
      if (event.code === 'KeyB' && !game.G.menu && !game.G.replay) setRocket(!state.rocket);
      if (event.code === 'KeyF') event.preventDefault();
    });
    const hint = game.ui.setControlsHint.bind(game.ui);
    game.ui.setControlsHint = rows => {
      const extra = game.G.mode !== 'demo' && !game.G.menu ? [[game.input.device === 'gamepad' ? '十字键 →' : 'B', '普通单板 / 火箭单板']] : [];
      if (state.rocket && game.G.discipline === 'snowboard' && extra.length) extra.push([game.input.device === 'gamepad' ? '十字键 ←' : 'F', '按住火箭推进']);
      hint([...rows, ...extra]);
    };
    game.ui.setControlsSheet([...(game.ui._sheet || []), {title: '火箭单板、暴雪与晚霞', rows: [['B', '普通单板 ⇄ 火箭单板'], ['F', '按住推进 · 松开冷却'], ['N', '晴天 ⇄ 暴雪'], ['H', '清晨 ⇄ 粉紫晚霞'], ['松开方向键', '空中自动回正 · 落地辅助'], ['十字键 →（手柄）', '装备 / 卸下火箭单板'], ['十字键 ←（手柄）', '按住火箭推进']]}]);
    addPanelVisibility();
  }

  function addPanelVisibility(){
    const storageKey='fallline.hud-panels.v1';
    let saved={};
    try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};}catch{}
    const modes={controls:saved.controls==='hidden'?'hidden':'fixed',upgrade:saved.upgrade==='hidden'?'hidden':'fixed'};
    for(const [name,node,label] of [['controls',game.ui.$.controls,'按键说明'],['upgrade',panel,'天气与火箭']]){
      const shell=document.createElement('div');
      shell.className=`fl-hud-panel-shell fl-hud-${name}-shell`;
      shell.dataset.panel=name;
      const tools=document.createElement('div');tools.className='fl-hud-panel-tools';
      tools.innerHTML=`<span class="fl-hud-panel-title">${label}</span><button type="button" class="fl-panel-choice" data-panel-action="pin" aria-label="固定显示${label}">固定显示</button><button type="button" class="fl-panel-choice" data-panel-action="hide" aria-label="隐藏${label}">隐藏</button>`;
      const launcher=document.createElement('button');launcher.type='button';launcher.className='fl-panel-launcher';
      launcher.dataset.panelAction='show';launcher.textContent=`显示${label}`;launcher.title='点击恢复固定显示';
      node.id||=`fl-hud-${name}-body`;
      launcher.setAttribute('aria-controls',node.id);
      node.parentNode.insertBefore(shell,node);shell.append(tools,node,launcher);
      const pin=tools.querySelector('[data-panel-action=pin]'),hide=tools.querySelector('[data-panel-action=hide]');
      pin.setAttribute('aria-controls',node.id);hide.setAttribute('aria-controls',node.id);
      const render=()=>{
        const fixed=modes[name]==='fixed';shell.dataset.panelMode=modes[name];
        node.hidden=!fixed;tools.hidden=!fixed;launcher.hidden=fixed;
        pin.setAttribute('aria-pressed',String(fixed));launcher.setAttribute('aria-expanded',String(fixed));
      };
      const choose=(event,mode)=>{
        modes[name]=mode;render();game.input.lastActivity=performance.now();
        try{localStorage.setItem(storageKey,JSON.stringify(modes));}catch{}
        if(event.detail===0)(mode==='fixed'?pin:launcher).focus({preventScroll:true});
        else event.currentTarget.blur();
      };
      pin.addEventListener('click',event=>choose(event,'fixed'));
      hide.addEventListener('click',event=>choose(event,'hidden'));
      launcher.addEventListener('click',event=>choose(event,'fixed'));
      // Panel clicks change presentation only; keyboard riding remains available after a mouse click.
      for(const type of ['pointerdown','pointerup','mousedown','mouseup'])shell.addEventListener(type,event=>{
        if(type==='pointerdown')game.input.lastActivity=performance.now();
        event.stopPropagation();
      });
      for(const type of ['keydown','keyup'])shell.addEventListener(type,event=>{
        if(event.target.tagName==='BUTTON'&&(event.code==='Space'||event.code==='Enter'))event.stopPropagation();
      });
      render();
    }
  }

  // Every flake has a persistent world position, downward terminal velocity and terrain collision.
  // Only flakes leaving the simulation volume respawn; camera motion never moves surviving flakes.
  function createSnow() {
    const count = 6500;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const floors = new Float32Array(count);
    const sampledAt = new Float32Array(count * 2);
    const seeds = new Float32Array(count);
    const geometry = new engine.BufferGeometry();
    for (let i = 0; i < count; i++) { seeds[i] = Math.random(); sizes[i] = .06 + Math.pow(Math.random(), 1.5) * .14; }
    geometry.setAttribute('position', new engine.BufferAttribute(positions, 3));
    geometry.setAttribute('flakeSize', new engine.BufferAttribute(sizes, 1));
    geometry.setAttribute('flakeSeed', new engine.BufferAttribute(seeds, 1));
    const material = new engine.ShaderMaterial({
      uniforms: {uPixels: {value: 900}, uAmount: {value: 0}, uWind: {value: 0}, uStorm: {value: 0}},
      vertexShader: `attribute float flakeSize;attribute float flakeSeed;uniform float uPixels;varying float vDistance;varying float vSeed;
        void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);vDistance=length(mv.xyz);vSeed=flakeSeed;gl_Position=projectionMatrix*mv;gl_PointSize=clamp(flakeSize*uPixels/max(0.5,-mv.z),3.0,14.0);}`,
      fragmentShader: `uniform float uAmount;uniform float uWind;uniform float uStorm;varying float vDistance;varying float vSeed;
        void main(){vec2 p=gl_PointCoord-0.5;float angle=vSeed*6.283; p=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p;
        float r=length(p);float phi=atan(p.y,p.x);float shape=0.34+0.025*cos(phi*6.0+vSeed*9.0)+0.025*sin(phi*3.0+vSeed*15.0);float a=(1.0-smoothstep(shape-0.09,shape+0.06,r))*uAmount;
        a*=smoothstep(0.25,1.4,vDistance)*(1.0-smoothstep(24.0,44.0,vDistance));a*=0.86+vSeed*0.14;if(a<0.01)discard;
        vec3 color=mix(vec3(0.87,0.90,1.0),vec3(1.45),1.0-smoothstep(0.1,0.4,r));gl_FragColor=vec4(color,a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`, transparent: true, depthWrite: false, depthTest: true
    });
    const points = new engine.Points(geometry, material);
    points.name = 'Physical snowfall'; points.frustumCulled = false; points.renderOrder = 4;
    game.scene.add(points);
    function respawn(i, fill) {
      const c = game.camera.position, j = i * 3;
      const x = c.x + (Math.random() - .5) * 52, z = c.z + (Math.random() - .5) * 52;
      const floor = game.world.height(x, z);
      const base = Math.max(floor + .25, c.y - 12);
      const ceiling = Math.max(base + 4, c.y + 16);
      positions[j] = x; positions[j+2] = z;
      positions[j+1] = fill ? base + Math.random() * (ceiling-base) : ceiling + Math.random()*3;
      floors[i] = floor; sampledAt[i*2] = x; sampledAt[i*2+1] = z;
      velocities[j] = 0; velocities[j+1] = -(.8 + seeds[i]*1.5); velocities[j+2] = 0;
    }
    for (let i = 0; i < count; i++) respawn(i, true);
    // Wind-transported powder is attached to the current terrain height, not an airborne glowing cloud.
    const groundCount = 420, groundPositions = new Float32Array(groundCount*3), groundSizes = new Float32Array(groundCount), groundSeeds = new Float32Array(groundCount);
    const groundGeometry = new engine.BufferGeometry();
    for (let i=0; i<groundCount; i++) { groundSizes[i]=.09+Math.random()*.10; groundSeeds[i]=Math.random(); }
    groundGeometry.setAttribute('position',new engine.BufferAttribute(groundPositions,3));
    groundGeometry.setAttribute('flakeSize',new engine.BufferAttribute(groundSizes,1));
    groundGeometry.setAttribute('flakeSeed',new engine.BufferAttribute(groundSeeds,1));
    const groundMaterial = material.clone();
    const ground = new engine.Points(groundGeometry,groundMaterial);ground.frustumCulled=false;ground.name='Terrain-following spindrift';game.scene.add(ground);
    let active = 0, first = true;
    function update(dt, time, windX, windZ) {
      const c=game.camera.position;
      const next=precipitation<.015?0:Math.round(5200+storm*1300);
      if(next>active)for(let i=active;i<next;i++)respawn(i,true);
      active=next;geometry.setDrawRange(0,active);points.visible=active>0;
      const drag=1-Math.exp(-dt*1.6);
      for(let i=0;i<active;i++){
        const j=i*3,seed=seeds[i];
        velocities[j]+=(windX+Math.sin(time*1.8+seed*70)*.55-velocities[j])*drag;
        velocities[j+2]+=(windZ+Math.cos(time*1.3+seed*41)*.45-velocities[j+2])*drag;
        velocities[j+1]=Math.max(-(1.8+seed*2.5),velocities[j+1]-dt*3.2);
        positions[j]+=velocities[j]*dt;positions[j+1]+=velocities[j+1]*dt;positions[j+2]+=velocities[j+2]*dt;
        if(Math.hypot(positions[j]-sampledAt[i*2],positions[j+2]-sampledAt[i*2+1])>1.2 || positions[j+1]<floors[i]+2){
          floors[i]=game.world.height(positions[j],positions[j+2]);sampledAt[i*2]=positions[j];sampledAt[i*2+1]=positions[j+2];
        }
        if(positions[j+1]<=floors[i]+.04){state.snowImpacts++;respawn(i,false);}
        else if(Math.abs(positions[j]-c.x)>32||Math.abs(positions[j+2]-c.z)>32||positions[j+1]>c.y+38||positions[j+1]<c.y-25)respawn(i,true);
      }
      geometry.attributes.position.needsUpdate=true;
      const uniforms=material.uniforms;
      uniforms.uPixels.value=game.renderer.domElement.height*.8;uniforms.uAmount.value=precipitation;uniforms.uStorm.value=storm;uniforms.uWind.value=Math.hypot(windX,windZ);
      ground.visible=storm>.02;
      for(let i=0;i<groundCount;i++){
        const j=i*3;
        if(first||Math.abs(groundPositions[j]-c.x)>42||Math.abs(groundPositions[j+2]-c.z)>42){groundPositions[j]=c.x+(Math.random()-.5)*80;groundPositions[j+2]=c.z+(Math.random()-.5)*80;}
        groundPositions[j]+=windX*dt*.8;groundPositions[j+2]+=windZ*dt*.8;
        groundPositions[j+1]=game.world.height(groundPositions[j],groundPositions[j+2])+.06+.14*(.5+.5*Math.sin(time*3+i));
      }
      first=false;
      groundGeometry.attributes.position.needsUpdate=true;
      groundMaterial.uniforms.uPixels.value=uniforms.uPixels.value;groundMaterial.uniforms.uAmount.value=storm*.65;groundMaterial.uniforms.uWind.value=1;groundMaterial.uniforms.uStorm.value=1;
    }
    return {update,positions,velocities,floors,points,ground,get active(){return active;}};
  }

  function createRocket() {
    const root=new engine.Group();root.name='Twin rocket snowboard engines';
    const metal=new engine.MeshStandardMaterial({color:0x172936,metalness:.7,roughness:.3});
    const trim=new engine.MeshStandardMaterial({color:0xff7629,metalness:.5,roughness:.35});
    const nozzle=new engine.MeshStandardMaterial({color:0x344a57,metalness:.85,roughness:.24});
    const flameMaterial=new engine.MeshBasicMaterial({color:0xff7b2d,transparent:true,opacity:.7,depthWrite:false,blending:2});
    const coreMaterial=new engine.MeshBasicMaterial({color:0x9deeff,transparent:true,opacity:.9,depthWrite:false,blending:2});
    const flames=[];
    for(const z of [-.23,.23]){
      const body=new engine.Mesh(new engine.CylinderGeometry(.085,.085,.46,12),metal);body.rotation.z=Math.PI/2;body.position.set(-.52,.10,z);body.castShadow=true;root.add(body);
      const band=new engine.Mesh(new engine.CylinderGeometry(.09,.09,.055,12),trim);band.rotation.z=Math.PI/2;band.position.set(-.39,.10,z);root.add(band);
      const end=new engine.Mesh(new engine.CylinderGeometry(.066,.095,.13,12,1,true),nozzle);end.rotation.z=Math.PI/2;end.position.set(-.80,.10,z);root.add(end);
      const flame=new engine.Mesh(new engine.ConeGeometry(.09,.85,12,1,true),flameMaterial);flame.rotation.z=Math.PI/2;flame.position.set(-1.23,.10,z);root.add(flame);
      const core=new engine.Mesh(new engine.ConeGeometry(.052,.5,12,1,true),coreMaterial);core.rotation.z=Math.PI/2;core.position.set(-1.06,.10,z);root.add(core);
      flames.push(flame,core);
    }
    const line=new engine.Mesh(new engine.BoxGeometry(1.30,.018,.028),trim);line.position.y=.055;root.add(line);
    const jetCount=240,jetPositions=new Float32Array(jetCount*3),jetAges=new Float32Array(jetCount),jetVel=new Float32Array(jetCount*3);
    jetAges.fill(100);
    const jetGeometry=new engine.BufferGeometry();jetGeometry.setAttribute('position',new engine.BufferAttribute(jetPositions,3));jetGeometry.setAttribute('age',new engine.BufferAttribute(jetAges,1));
    const jetMaterial=new engine.ShaderMaterial({uniforms:{uPixels:{value:900}},vertexShader:`attribute float age;uniform float uPixels;varying float vAge;void main(){vAge=age;vec4 mv=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((.022+age*.025)*uPixels/max(1.0,-mv.z),1.0,7.0);}`,fragmentShader:`varying float vAge;void main(){if(vAge>0.8)discard;float r=length(gl_PointCoord-.5);float a=(1.0-smoothstep(.05,.5,r))*(1.0-vAge/.8)*.5;gl_FragColor=vec4(mix(vec3(.38,.75,1.0),vec3(1.0,.28,.05),clamp(vAge*2.0,0.0,1.0)),a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,transparent:true,depthWrite:false,blending:2});
    const jets=new engine.Points(jetGeometry,jetMaterial);jets.frustumCulled=false;jets.name='Rocket exhaust trail';game.scene.add(jets);
    const worldPos=new engine.Vector3(),direction=new engine.Vector3(),local=new engine.Vector3();
    let head=0,emit=0;
    function update(dt,time){
      root.visible=state.rocket&&game.G.discipline==='snowboard'&&!game.rider.inRagdoll;
      attachRocket();
      const power=state.throttle;
      for(let i=0;i<flames.length;i++){
        const flame=flames[i];flame.visible=power>.025;flame.scale.y=power*(.85+.13*Math.sin(time*80+i));
        flame.position.x=(i%2===0?-.83-.425*flame.scale.y:-.83-.25*flame.scale.y);
      }
      emit+=power*dt*210;
      if(root.visible&&power>.03){
        root.updateWorldMatrix(true,false);
        direction.set(-1,0,0).transformDirection(root.matrixWorld);
        while(emit>=1){emit--;const i=head++%jetCount,j=i*3;local.set(-.85,.10,head%2?-.23:.23);worldPos.copy(local).applyMatrix4(root.matrixWorld);
          jetPositions[j]=worldPos.x;jetPositions[j+1]=worldPos.y;jetPositions[j+2]=worldPos.z;jetAges[i]=0;
          jetVel[j]=direction.x*14+game.phys.v.x*.12;jetVel[j+1]=direction.y*14+game.phys.v.y*.12;jetVel[j+2]=direction.z*14+game.phys.v.z*.12;
        }
      }else emit=0;
      for(let i=0;i<jetCount;i++){const j=i*3;jetAges[i]+=dt;if(jetAges[i]>.8)continue;jetPositions[j]+=jetVel[j]*dt;jetPositions[j+1]+=jetVel[j+1]*dt;jetPositions[j+2]+=jetVel[j+2]*dt;}
      jetGeometry.attributes.position.needsUpdate=true;jetGeometry.attributes.age.needsUpdate=true;jetMaterial.uniforms.uPixels.value=game.renderer.domElement.height*.8;
      jets.visible=game.G.mode!=='results'&&!game.G.replay;
    }
    return {root,update,jets};
  }
  function attachRocket(){
    const board=game.rider.M.board;
    if(rocket&&board&&rocket.root.parent!==board){rocket.root.removeFromParent();board.add(rocket.root);}
  }
  function installLandingAssist(){
    const p=game.phys, air=p._stepAir.bind(p), land=p._land.bind(p);
    const up=new engine.Vector3(),forward=new engine.Vector3(),side=new engine.Vector3();
    const matrix=new engine.Matrix4(),target=new engine.Quaternion();
    let releasedFor=0;
    function targetFor(normal){
      up.set(0,1,0).applyQuaternion(p.q);
      side.set(1,0,0).applyQuaternion(p.q);
      forward.copy(p.v).addScaledVector(normal,-p.v.dot(normal));
      if(forward.lengthSq()<.1)forward.copy(p.f).addScaledVector(normal,-p.f.dot(normal));
      forward.normalize();
      if(forward.dot(side)<0)forward.negate(); // Switch landings remain valid.
      side.crossVectors(forward,normal).normalize();
      forward.crossVectors(normal,side).normalize();
      matrix.makeBasis(forward,normal,side);target.setFromRotationMatrix(matrix);
    }
    p._stepAir=function(dt,controls){
      if(state.assist&&!controls.ai&&game.G.mode!=='demo'){
        const steering=!p.spinBlock&&!p.charging&&Math.abs(controls.x)>.18;
        const flipping=!p.flipBlock&&!p.charging&&Math.abs(controls.y)>.18;
        if(steering||flipping)releasedFor=0;else releasedFor+=dt;
        if(releasedFor>.075){
          p._predictLanding();targetFor(p.landN);
          const clearance=p.p.y-p.world.height(p.p.x,p.p.z);
          const nearGround=clearance<Math.max(1.5,-p.v.y*.30);
          p.q.slerp(target,1-Math.exp(-dt*(nearGround?14:8)));
          p.w.multiplyScalar(Math.exp(-dt*14));
          p.spinLock=true;
        }
      }
      air(dt,controls);
    };
    p._land=function(){
      if(state.assist&&game.G.mode!=='demo'){
        const normal=p._sampleGround().clone();
        up.set(0,1,0).applyQuaternion(p.q);
        const tilt=Math.acos(clamp(up.dot(normal),-1,1)),impact=-p.v.dot(normal);
        // Recover an imperfect approach, while upside-down landings and major impacts can still crash.
        if(tilt<Math.PI*105/180&&impact<23){
          targetFor(normal);p.q.slerp(target,.82);p.w.multiplyScalar(.25);
          if(impact>12.5)p.v.addScaledVector(normal,impact-12.5);
          state.assistedLandings++;
        }
      }
      land();releasedFor=0;
      if(!p.crashed)p.grace=Math.max(p.grace||0,1.7);
    };
  }
  function installPhysics(){
    const step=game.phys.step.bind(game.phys);
    const force=new engine.Vector3();
    game.phys.step=function(dt,controls){
      const p=this;
      const held=game.input.keys.has('KeyF')||!!game.input.pad?.buttons[14]?.pressed;
      const allowed=state.rocket&&game.G.discipline==='snowboard'&&!game.G.menu&&!game.G.replay&&game.G.mode!=='demo'&&!p.crashed&&!p.grind&&controls.y>=-.3;
      if(state.locked&&state.heat<35&&state.fuel>=20)state.locked=false;
      const firing=allowed&&held&&!state.locked&&state.fuel>0;
      const target=firing?1:0;
      state.throttle+=(target-state.throttle)*(1-Math.exp(-dt*(firing?12:25)));
      if(!allowed)state.throttle=0;
      if(firing){state.fuel=Math.max(0,state.fuel-dt*23);state.heat=Math.min(100,state.heat+dt*29);state.rechargeDelay=1.2;}
      else{state.heat=Math.max(0,state.heat-dt*24);state.rechargeDelay=Math.max(0,state.rechargeDelay-dt);if(state.rechargeDelay===0)state.fuel=Math.min(100,state.fuel+dt*18);}
      if(state.heat>=99||state.fuel<=0){state.locked=true;state.throttle=0;}
      if(state.throttle>.01){
        force.copy(p.f).multiplyScalar(p.travelDir);
        if(!p.airborne)force.addScaledVector(p.n,-force.dot(p.n));force.normalize();
        const forward=p.v.dot(force);const accel=24*state.throttle*clamp((58-forward)/12);
        p.v.addScaledVector(force,accel*dt);
        game.rig.shake=Math.max(game.rig.shake||0,.035*state.throttle);
      }
      step(dt,controls);
    };
    // Equipment rebuilding must not dispose the reusable rocket meshes.
    const discipline=game.rider.setDiscipline.bind(game.rider);
    game.rider.setDiscipline=function(...args){rocket.root.removeFromParent();const value=discipline(...args);attachRocket();return value;};
    const reset=game.phys.reset.bind(game.phys);
    game.phys.reset=function(...args){state.throttle=0;return reset(...args);};
    installLandingAssist();
  }
  function install(dbg, nativeEngine){
    game=dbg;engine=nativeEngine;
    game.particles.snowfall.visible=false;game.particles.dust.visible=false;
    game.particles.setSnowfall=function(){this.snowfall.visible=false;};
    snow=createSnow();rocket=createRocket();installPhysics();addPanel();
    window.GAME.upgrades={state,setWeather,cycleWeather,setRocket,snow,rocket};
    game.G.weather='blizzard';game.G.wx=1;storm=1;precipitation=1;
    game.setTimeOfDay('golden');
    game.G.hintKey='';
  }
  function updateEngineSound(){
    const audio=game.audio, ctx=audio?.ctx;
    if(!ctx||!audio._cont)return;
    if(!engineSound){
      const gain=ctx.createGain(),filter=ctx.createBiquadFilter();
      gain.gain.value=0;filter.type='lowpass';filter.frequency.value=260;
      filter.connect(gain);gain.connect(audio._cont);
      const bass=ctx.createOscillator(),rumble=ctx.createOscillator();
      bass.type='sawtooth';rumble.type='triangle';bass.frequency.value=55;rumble.frequency.value=82;
      bass.connect(filter);rumble.connect(filter);bass.start();rumble.start();
      engineSound={gain,filter,bass,rumble};
    }
    const power=state.throttle, now=ctx.currentTime;
    engineSound.gain.gain.setTargetAtTime(power*.055,now,.035);
    engineSound.bass.frequency.setTargetAtTime(55+power*65,now,.08);
    engineSound.rumble.frequency.setTargetAtTime(82+power*85,now,.08);
    engineSound.filter.frequency.setTargetAtTime(260+power*620,now,.06);
  }
  function update(dt,time){
    if(!game)return;
    dt=clamp(dt,0,.05);elapsed+=dt;
    const padHeld=!!game.input.pad?.buttons[15]?.pressed;
    if(padHeld&&!padToggleHeld&&!game.G.menu&&!game.G.replay)setRocket(!state.rocket);
    padToggleHeld=padHeld;
    const weather=game.G.weather||'clear';state.weather=weather;
    storm+=((weather==='blizzard'?1:0)-storm)*(1-Math.exp(-dt*.85));
    precipitation+=((weather==='clear'?0:1)-precipitation)*(1-Math.exp(-dt*.8));
    const gust=.58+.26*Math.sin(elapsed*.65)+.16*Math.sin(elapsed*1.9+.8);
    const windX=1.1+storm*(9+gust*13),windZ=.6+storm*(3+gust*6);
    game.particles.uniforms.uWind.value.set(windX,0,windZ);game.particles.dust.visible=false;
    if(precipitation>.01){
      game.scene.fog.density=(game.G.fogDensity||.000078)*(1-precipitation)+precipitation*(.0009+storm*(.0009+gust*.0005));
      if(game.G.tod==='golden')game.scene.fog.color.setRGB(.83,.59,.77);
      else game.scene.fog.color.setRGB(.65-storm*.13,.72-storm*.13,.79-storm*.12);
      game.sky.uniforms.uOvercast.value=precipitation;
      game.terrain.uniforms.uSparkle.value*=1-storm*.8;
      game.terrain.uniforms.uWind.value.set(windX,windZ);
    }
    game.sky.uniforms.uSunset.value=game.G.tod==='golden'?1:0;
    if(game.G.tod==='golden')game.ambientLight.color.copy(game.G.hemiSky).lerp(game.G.fogBase,storm*.2);
    snow.update(dt,elapsed,windX,windZ);
    if(game.G.menu||game.G.replay||game.phys.crashed)state.throttle=0;
    rocket.update(dt,elapsed);
    updateEngineSound();
    const equipped=state.rocket&&game.G.discipline==='snowboard';
    const nextPanelKey=`${weather}:${equipped}:${game.G.discipline}:${game.G.tod}`;
    if(nextPanelKey!==panelKey){
      weatherButton.innerHTML=`天气：${weatherNames[weather]||'晴天'} <kbd>N</kbd>`;
      boardButton.innerHTML=`${equipped?'火箭单板':game.G.discipline==='ski'?'双板 · 换火箭板':'普通单板'} <kbd>B</kbd>`;
      boardButton.setAttribute('aria-pressed',String(equipped));
      boardButton.setAttribute('aria-label',equipped?'卸下火箭推进器':'装备火箭单板');
      timeButton.innerHTML=`${game.G.tod==='golden'?'粉紫晚霞':'清晨'} <kbd>H</kbd>`;
      panelKey=nextPanelKey;
    }
    panel.querySelector('.fl-rocket-readout').hidden=!equipped;
    fuelBar.style.transform=`scaleX(${state.fuel/100})`;heatBar.style.transform=`scaleX(${state.heat/100})`;
    const boostKey=game.input.device==='gamepad'?'十字键 ←':'F';
    status.textContent=state.locked?'推进器冷却中 · 降温后恢复':state.throttle>.15?`火箭推进中 · 松开 ${boostKey} 冷却`:state.fuel<99?`冷却补给中 · 按住 ${boostKey} 推进`:`按住 ${boostKey} 火箭推进 · 松开冷却`;
    panel.dataset.thrust=String(state.throttle>.15);
    panel.querySelector('.fl-rocket-track').setAttribute('aria-label',`燃料 ${Math.round(state.fuel)}%`);
    if(game.audio?._L?.wind&&game.audio.ctx){
      game.audio._L.wind.amb.gain.setTargetAtTime(.04+storm*.23,game.audio.ctx.currentTime,.3);
    }
  }
  window.FALL_LINE_ENHANCE=Object.freeze({install,update});
})();

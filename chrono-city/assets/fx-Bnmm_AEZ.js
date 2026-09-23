import{$ as e,B as t,C as n,D as r,F as i,G as a,H as o,I as s,L as c,O as l,P as u,V as d,Y as f,_t as p,at as m,bt as h,g,j as _,l as v,n as y,nt as b,ot as x,w as S,yt as C}from"./index-DX8ztiJ7.js";function w(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function T(e,t=32){let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e();let r=e=>e*e*(3-2*e);return(e,i)=>{e*=t,i*=t;let a=Math.floor(e),o=Math.floor(i),s=r(e-a),c=r(i-o),l=(a%t+t)%t,u=(o%t+t)%t,d=(l+1)%t,f=(u+1)%t,p=n[u*t+l],m=n[u*t+d],h=n[f*t+l],g=n[f*t+d];return p+(m-p)*s+(h-p)*c+(p-m-h+g)*s*c}}var E=null;function D(){if(E)return E;let e=new Uint8Array(262144),i=new Float32Array(16384);for(let t=0;t<4;t++){let n=w(1234+t*977),r=T(n,8),a=T(n,16),o=T(n,32),s=[],c=5+t;for(let e=0;e<c;e++){let e=n()*Math.PI*2,t=.06+n()*.14;s.push([.5+Math.cos(e)*t,.5+Math.sin(e)*t*.8+.02,.1+n()*.08,.35+n()*.35])}let l=0;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(t+.5)/128,c=(e+.5)/128,u=Math.hypot(n-.5,c-.5),d=Math.exp(-(u*u)/(.2*.2));for(let e of s){let t=n-e[0],r=c-e[1];d+=e[3]*Math.exp(-(t*t+r*r)/(e[2]*e[2]))}let f=r(n,c)*.5+a(n,c)*.32+o(n,c)*.18;d*=.35+f*1.3,d*=1-O(.26,.5,u),i[e*128+t]=d,d>l&&(l=d)}let u=(t&1)*128,d=(t>>1)*128;for(let t=0;t<128;t++)for(let n=0;n<128;n++){let r=i[t*128+n]/l;r=O(0,.9,r)**1.25;let s=0;for(let e=1;e<=14;e++){let r=Math.round(n-e*1.6),a=Math.round(t-e*3.2);if(r<0||a<0||r>=128)break;s+=i[a*128+r]/l}let c=Math.exp(-s*.42),f=(n+.5)/128,p=(t+.5)/128,m=o(f*2%1,p*2%1)*.6+a(f,p)*.4,h=((d+(127-t))*256+u+n)*4;e[h]=Math.round(255*Math.min(1,c)),e[h+1]=Math.round(255*m),e[h+2]=Math.round(255*Math.min(1,r*(1-r)*4)),e[h+3]=Math.round(255*r)}}return E=new r(e,256,256,b),E.generateMipmaps=!0,E.minFilter=d,E.magFilter=t,E.wrapS=E.wrapT=n,E.needsUpdate=!0,E}function O(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var k=null;function A(){if(k)return k;let e=document.createElement(`canvas`);e.width=256,e.height=128;let n=document.createElement(`canvas`);n.width=256,n.height=128;let i=e.getContext(`2d`),a=n.getContext(`2d`);i.fillStyle=`#9a9a9a`,i.fillRect(0,0,256,128),a.fillStyle=`#000`,a.fillRect(0,0,256,128);let o=w(77);function s(e,t,n){e.save(),e.translate(t%4*64+32,Math.floor(t/4)*64+32),n(e),e.restore()}let c=[e=>{e.beginPath();for(let t=0;t<=10;t++){let n=t%2==0?27:12,r=-Math.PI/2+(t-5)*(Math.PI*.86/5);e.lineTo(Math.cos(r)*n,Math.sin(r)*n+4)}e.lineTo(3,20),e.lineTo(0,29),e.lineTo(-3,20),e.closePath()},e=>{e.beginPath(),e.moveTo(0,-28),e.bezierCurveTo(18,-18,17,14,0,26),e.bezierCurveTo(-17,14,-18,-18,0,-28),e.closePath()},e=>{e.beginPath();for(let t=0;t<=40;t++){let n=t/40*Math.PI*2,r=1-Math.abs(Math.cos(n))*.15,i=1+.22*Math.sin(n*7);e.lineTo(Math.sin(n)*14*i*r,-Math.cos(n)*27)}e.closePath()},e=>{e.beginPath(),e.moveTo(0,-27),e.quadraticCurveTo(24,-4,6,20),e.lineTo(0,27),e.lineTo(-6,20),e.quadraticCurveTo(-24,-4,0,-27),e.closePath()}];for(let e=0;e<4;e++)s(a,e,t=>{c[e](t),t.fillStyle=`#fff`,t.fill()}),s(i,e,t=>{c[e](t),t.lineWidth=10,t.strokeStyle=`#c8c8c8`,t.stroke(),t.fillStyle=`#d4d4d4`,t.fill();for(let e=0;e<40;e++){let e=150+o()*105|0;t.fillStyle=`rgba(${e},${e},${e},0.35)`,t.beginPath(),t.arc((o()-.5)*36,(o()-.5)*48,2+o()*5,0,7),t.fill()}t.strokeStyle=`rgba(120,120,120,0.8)`,t.lineWidth=1.6,t.beginPath(),t.moveTo(0,26),t.lineTo(0,-22),t.stroke(),t.lineWidth=1;for(let e=-3;e<=3;e++)e&&(t.beginPath(),t.moveTo(0,6-Math.abs(e)*5),t.lineTo(Math.sign(e)*14,-6-Math.abs(e)*5),t.stroke())});[{w:44,h:34,bg:`#e9e4d6`,draw:e=>{e.fillStyle=`rgba(60,60,70,0.55)`;for(let t=-12;t<12;t+=4)e.fillRect(-18,t,26+o()*10,1.4)}},{w:36,h:24,bg:`#d9d2c0`,draw:e=>{e.fillStyle=`#b84a3a`,e.fillRect(-18,-12,36,7),e.fillStyle=`#e8c250`,e.fillRect(-18,3,36,4),e.fillStyle=`#3a5a8a`,e.fillRect(-6,-3,12,5)}},{w:28,h:40,bg:`#efe9dc`,draw:e=>{e.fillStyle=`rgba(40,40,40,0.5)`;for(let t=-16;t<16;t+=5)e.fillRect(-10,t,16,1.2);e.fillStyle=`rgba(160,60,50,0.6)`,e.fillRect(-10,12,20,3)}},{w:48,h:40,bg:`#d8d2c3`,draw:e=>{e.fillStyle=`rgba(30,30,30,0.6)`,e.fillRect(-20,-16,40,5),e.fillStyle=`rgba(50,50,50,0.45)`;for(let t=-8;t<16;t+=3)e.fillRect(-20,t,18,1),e.fillRect(2,t,18,1);e.fillStyle=`rgba(90,90,90,0.4)`,e.fillRect(4,-8,16,10)}}].forEach((e,t)=>{let n=4+t,r=t=>{t.beginPath();for(let n=0;n<9;n++){let r=n/9*Math.PI*2+Math.PI/4,i=(o()-.5)*6,a=(o()-.5)*6;t.lineTo(Math.sign(Math.cos(r))*Math.min(1,Math.abs(Math.cos(r))*1.6)*e.w/2+i,Math.sign(Math.sin(r))*Math.min(1,Math.abs(Math.sin(r))*1.6)*e.h/2+a)}t.closePath()},c=w(Math.floor(o()*1e9));s(a,n,e=>{r(e),e.fillStyle=`#fff`,e.fill()}),s(i,n,t=>{t.fillStyle=e.bg,t.fillRect(-30,-30,60,60),e.draw(t),t.fillStyle=`rgba(0,0,0,0.08)`;for(let e=0;e<6;e++)t.fillRect(-30,-20+e*8+c()*3,60,1)})});let l=i.getImageData(0,0,256,128).data,u=a.getImageData(0,0,256,128).data,f=new Uint8Array(131072);for(let e=0;e<128;e++)for(let t=0;t<256;t++){let n=(e*256+t)*4,r=((127-e)*256+t)*4;f[r]=l[n],f[r+1]=l[n+1],f[r+2]=l[n+2],f[r+3]=u[n]}return k=new r(f,256,128,b),k.colorSpace=m,k.generateMipmaps=!0,k.minFilter=d,k.magFilter=t,k.needsUpdate=!0,k}var j=`
float fxHash(float n){ return fract(sin(n) * 43758.5453123); }
float fxNoise1(float x){ float i = floor(x); float f = fract(x); f = f*f*(3.0-2.0*f); return mix(fxHash(i), fxHash(i+1.0), f); }
`,M=`
#include <common>
#include <fog_pars_fragment>
uniform sampler2D uAtlas;
uniform vec3 uKey;      // lit side colour
uniform vec3 uAmb;      // shadow side colour
uniform vec3 uUnder;    // warm city underglow (night)
uniform vec3 uGlowCol;  // street light colour for steam at night
uniform float uNight;
varying vec2 vUv;
varying vec4 vCell;     // atlas cell offset xy, flip, unused
varying float vA;
varying float vErode;
varying vec3 vCol;
varying float vKind;
varying float vSoftY;   // 0..1 ground fade
varying float vGlow;
void main(){
  vec2 uv = vUv;
  if (vCell.z < 0.0) uv.x = 1.0 - uv.x;
  vec4 t = texture2D(uAtlas, vCell.xy + uv * 0.5);
  // erosion: thin parts vanish first as the puff ages -> wispy dissipation
  float d = t.a * (0.72 + 0.56 * t.g);
  float a = smoothstep(vErode, 1.0, d) * vA * vSoftY;
  if (a < 0.002) discard;
  float lit = t.r;
  vec3 light = mix(uAmb, uKey, lit);
  vec3 col = vCol * light;
  col += vCol * uUnder * (1.0 - lit) * uNight;         // city light from below at night
  col += uGlowCol * vGlow * (0.5 + 0.5 * t.b);          // steam lit by street lights
  gl_FragColor = vec4(col, min(a, 1.0));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  gl_FragColor.rgb *= gl_FragColor.a;                   // premultiplied
}
`,N=`
vec4 fxBillboard(vec3 center, float size, float ang, float pull, out float viewDepth){
  vec4 mv = modelViewMatrix * vec4(center, 1.0);
  float dist = -mv.z;
  viewDepth = dist;
  float pd = min(min(pull * size, 3.0), max(dist - 0.35, 0.0) * 0.6);
  float f = dist > 0.001 ? (dist - pd) / dist : 1.0;
  mv.xyz *= f;
  float c = cos(ang), s = sin(ang);
  vec2 p = position.xy;
  vec2 r = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  mv.xy += r * size * f;
  vUv = position.xy + 0.5;
  return projectionMatrix * mv;
}
`,P=`
varying vec2 vUv;
varying vec4 vCell;
varying float vA;
varying float vErode;
varying vec3 vCol;
varying float vKind;
varying vec2 vSoft;
varying float vGlow;
`,F=M.replace(`varying float vSoftY;   // 0..1 ground fade`,`varying vec2 vSoft;`).replace(`* vA * vSoftY;`,`* vA * smoothstep(0.0, vSoft.y, vSoft.x);`),I=`
void fxCell(float h, float flipH){
  float i = floor(h * 4.0);
  vCell = vec4(mod(i, 2.0) * 0.5, floor(i * 0.5) * 0.5, flipH < 0.5 ? -1.0 : 1.0, 0.0);
}
// world-space height of this quad corner (for the soft ground fade)
float fxCornerY(vec3 c, float size, float ang){
  float cs = cos(ang), sn = sin(ang);
  vec2 p = position.xy; vec2 r = vec2(cs * p.x - sn * p.y, sn * p.x + cs * p.y);
  return c.y + (r.x * viewMatrix[1][0] + r.y * viewMatrix[1][1]) * size;
}
`;function L(){let e=new c;return e.setAttribute(`position`,new _([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),e.setIndex([0,1,2,0,2,3]),e}function R(e,t){return new x({vertexShader:e,fragmentShader:F,uniforms:Object.assign(p.clone(g.fog),t),transparent:!0,depthWrite:!1,depthTest:!0,fog:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205})}var z=40,ee=30,te=`
#include <common>
#include <fog_pars_vertex>
${j}
${P}
${N}
${I}
attribute vec3 aOrigin;
attribute vec4 aSrc;   // era, strength, kind (0 smoke, 1 steam), seed
attribute vec4 aRnd;   // phase, r1, r2, r3
uniform float uTime;
uniform float uPresence[5];
uniform vec3 uWind;
uniform vec3 uSmokeCol[5];
uniform vec4 uSmokeP[5];     // life, rise, size, density
uniform float uSmokeGate[5]; // intermittency
uniform vec3 uSteamCol;
uniform vec4 uSteamP;
uniform float uNight;
void main(){
  int era = int(aSrc.x + 0.5);
  float strength = aSrc.y, kind = aSrc.z, seed = aSrc.w;
  bool steam = kind > 0.5;
  vec4 P = steam ? uSteamP : uSmokeP[era];
  float life = P.x;
  float tt = uTime / life + aRnd.x + seed;
  float age = fract(tt);
  float eid = floor(tt);
  float T = age * life;
  float emitT = uTime - T;
  float h1 = fxHash(eid * 1.37 + aRnd.x * 91.7 + seed * 13.1);
  float h2 = fxHash(eid * 2.71 + aRnd.x * 57.3 + seed * 7.3);
  float h3 = fxHash(eid * 0.73 + aRnd.x * 23.9 + seed * 3.9);
  float gateAmt = steam ? 0.55 : uSmokeGate[era];
  float gn = fxNoise1(emitT * (steam ? 0.35 : 0.16) + seed * 37.0) * 0.7 + fxNoise1(emitT * 0.9 + seed * 11.0) * 0.3;
  float gate = mix(1.0, smoothstep(0.32, 0.62, gn), gateAmt);
  float st = clamp(strength, 0.0, 2.0);
  vec3 c = aOrigin;
  float riseK = steam ? 2.8 : 2.0;
  c.y += P.y * (0.55 + 0.45 * min(st, 1.4)) * (1.0 - exp(-riseK * age)) / (1.0 - exp(-riseK));
  float gust = 0.7 + 0.6 * fxNoise1(emitT * 0.06 + seed * 5.0);
  c += uWind * gust * T * (0.3 + 0.7 * age) * (steam ? 0.6 : 1.0);
  float spread = P.z * 0.4 * age * h2;
  float a1 = h1 * 6.2831;
  c.x += cos(a1) * spread; c.z += sin(a1) * spread;
  float wob = P.z * 0.22 * age;
  c.x += sin(T * 0.9 + h3 * 6.28 + emitT * 0.31) * wob;
  c.z += cos(T * 0.75 + h1 * 6.28 + emitT * 0.23) * wob;
  c.y += sin(T * 1.1 + h2 * 6.28) * 0.25 * age * P.z * 0.3;
  if (steam) { c.x += (h1 - 0.5) * 1.1; c.z += (h3 - 0.5) * 1.1; }
  float size = P.z * ((steam ? 0.3 : 0.14) + (steam ? 0.7 : 0.86) * sqrt(age)) * (0.75 + 0.5 * h3) * (0.75 + 0.25 * min(st, 1.4));
  float ang = (h1 - 0.5) * 0.8 + (h2 - 0.5) * 0.7 * age;
  float vd;
  gl_Position = fxBillboard(c, size, ang, steam ? 0.3 : 0.3, vd);
  fxCell(h2, h3);
  float pres = uPresence[era];
  float dens = P.w * min(st, 1.5);
  if (steam) dens *= 1.0 + 0.9 * uNight;
  float a = dens * gate * pres * smoothstep(0.0, steam ? 0.12 : 0.08, age) * pow(1.0 - age, steam ? 1.2 : 1.05 + 0.15 * float(era));
  a *= smoothstep(0.4, 0.4 + size * 0.9, vd);
  vA = a;
  vErode = steam ? mix(0.05, 0.6, age) : mix(0.0, 0.42, age * age);
  vec3 col = steam ? uSteamCol : uSmokeCol[era];
  col *= 0.9 + 0.2 * h1;
  vCol = col;
  vKind = kind;
  float ground = aOrigin.y - (steam ? 0.0 : 0.25);
  vSoft = vec2(fxCornerY(c, size, ang) - ground, max(size * 0.3, 0.05));
  vGlow = steam ? uNight * 0.32 : 0.0;
  #ifdef USE_FOG
  vFogDepth = vd;
  #endif
}
`;function ne(e){let t=3440,n=L(),r=new s(new Float32Array(t*3),3),i=new s(new Float32Array(t*4),4),o=new s(new Float32Array(t*4),4);n.setAttribute(`aOrigin`,r),n.setAttribute(`aSrc`,i),n.setAttribute(`aRnd`,o),n.instanceCount=0;let c=Object.assign({},e,{uSmokeCol:{value:[new C(.16,.145,.13),new C(.34,.33,.32),new C(.52,.51,.5),new C(.7,.7,.71),new C(.82,.83,.86)]},uSmokeP:{value:[new h(14,22,14,.7),new h(12,18,11,.5),new h(8,12,8,.34),new h(7,10,7,.3),new h(6,9,6,.3)]},uSmokeGate:{value:[0,.25,.6,.75,.8]},uSteamCol:{value:new C(.92,.93,.95)},uSteamP:{value:new h(3.2,3.6,3.4,.3)}}),l=R(te,c),u=new a(n,l);u.frustumCulled=!1,u.renderOrder=21,u.name=`fx-plumes`;let d=0,f=0,p=new Float32Array(5);function m(e,a,s,c,l,u){let m=e===0?z:ee;if(d+m>t)return-1;let h=Math.random()*10,g=Math.max(0,Math.min(4,Math.round(l)));for(let t=0;t<m;t++){let n=d+t;r.array[n*3]=a,r.array[n*3+1]=s,r.array[n*3+2]=c,i.array[n*4]=g,i.array[n*4+1]=u,i.array[n*4+2]=e,i.array[n*4+3]=h,o.array[n*4]=(t+Math.random()*.3)/m,o.array[n*4+1]=Math.random(),o.array[n*4+2]=Math.random(),o.array[n*4+3]=Math.random()}return d+=m,n.instanceCount=d,r.needsUpdate=i.needsUpdate=o.needsUpdate=!0,p[g]=1,f++}return{mesh:u,uniforms:c,addSmoke:(e,t,n,r,i=1)=>m(0,e,t,n,r,i),addSteam:(e,t,n)=>m(1,e,.05,t,n,1),update(e){let t=!1;for(let n=0;n<5;n++)p[n]&&e[n]>0&&(t=!0);u.visible=t&&d>0}}}var re=`
#include <common>
#include <fog_pars_vertex>
${j}
${P}
${N}
${I}
attribute vec4 aSpawn; // x y z t0
attribute vec4 aVel;   // vx vy vz size
attribute vec4 aRnd;   // r0 r1 r2 groundY
uniform float uTime;
uniform vec3 uWind;
uniform vec3 uDustCol;
void main(){
  float t = uTime - aSpawn.w;
  float life = 4.2 + 2.0 * aRnd.x;
  if (t < 0.0 || t > life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
  float age = t / life;
  float k = 1.25;
  vec3 c = aSpawn.xyz + aVel.xyz * (1.0 - exp(-k * t)) / k;
  c.y += 0.22 * t * (0.4 + aRnd.y);
  c += uWind * t * 0.55;
  c.x += sin(t * 0.8 + aRnd.z * 6.28) * 0.25 * t;
  c.z += cos(t * 0.7 + aRnd.y * 6.28) * 0.25 * t;
  float size = aVel.w * (0.45 + 0.55 * (1.0 - exp(-1.2 * t))) * (1.0 + 0.3 * age);
  c.y = max(c.y, aRnd.w + size * 0.2);
  float ang = (aRnd.z - 0.5) * 0.8 + (aRnd.x - 0.5) * 0.5 * age;
  float vd;
  gl_Position = fxBillboard(c, size, ang, 0.4, vd);
  fxCell(aRnd.y, aRnd.z);
  float a = 0.55 * smoothstep(0.0, 0.04, age) * (1.0 - smoothstep(0.3, 1.0, age));
  a *= smoothstep(0.4, 0.4 + size * 0.8, vd);
  vA = a;
  vErode = mix(0.0, 0.55, age);
  vCol = uDustCol * (0.82 + 0.3 * aRnd.x) * vec3(1.0, 0.98 + 0.03 * aRnd.z, 0.95 + 0.07 * aRnd.y);
  vKind = 2.0;
  vSoft = vec2(fxCornerY(c, size, ang) - aRnd.w + 0.1, min(size * 0.12, 0.7));
  vGlow = 0.0;
  #ifdef USE_FOG
  vFogDepth = vd;
  #endif
}
`;function ie(e){let t=L(),n=new s(new Float32Array(3200).fill(-1e5),4),r=new s(new Float32Array(3200),4),i=new s(new Float32Array(3200),4);for(let e of[n,r,i])e.setUsage(l);t.setAttribute(`aSpawn`,n),t.setAttribute(`aVel`,r),t.setAttribute(`aRnd`,i),t.instanceCount=0;let o=Object.assign({},e,{uDustCol:{value:new C(.6,.55,.48)}}),c=R(re,o),u=new a(t,c);u.frustumCulled=!1,u.renderOrder=20,u.name=`fx-dust`,u.visible=!1;let d=0,f=!1,p=-1e9,m=0;function h(e,t,a,o,s){let c=Math.max(2,s),l=Math.round(Math.min(48,Math.max(14,c*2.6))),u=c*.5,h=n.array,g=r.array,_=i.array,v=Math.sqrt(c/8);for(let n=0;n<l;n++){let r=d;d=(d+1)%800,m=Math.max(m,r+1);let i=n/l*Math.PI*2+Math.random()*.8,s=Math.sqrt(Math.random())*u,f=Math.cos(i),p=Math.sin(i),y=n%4==0,b=y?Math.random()*c*.8:Math.random()*c*.15;h[r*4]=t+f*s*.4,h[r*4+1]=a+b,h[r*4+2]=o+p*s*.4,h[r*4+3]=e+Math.random()*.3+(y?.15:0);let x=y?.5*v:(1.8+Math.random()*2.6)*v;g[r*4]=f*x,g[r*4+1]=y?.6+Math.random()*1.4:Math.random()*.4,g[r*4+2]=p*x,g[r*4+3]=c*(.6+Math.random()*.4)*(y?1:.85),_[r*4]=Math.random(),_[r*4+1]=Math.random(),_[r*4+2]=Math.random(),_[r*4+3]=a}f=!0,p=e}return{mesh:u,uniforms:o,spawn:h,update(e){f&&=(n.needsUpdate=r.needsUpdate=i.needsUpdate=!0,t.instanceCount=m,!1),u.visible=e-p<7}}}function B(){let e=new i(.5,0),t=e.attributes.position,n=new Map;for(let e=0;e<t.count;e++){let r=`${t.getX(e).toFixed(3)},${t.getY(e).toFixed(3)},${t.getZ(e).toFixed(3)}`;n.has(r)||n.set(r,.7+Math.random()*.5);let i=n.get(r);t.setXYZ(e,t.getX(e)*i,t.getY(e)*i*.8,t.getZ(e)*i)}let r=e.index?e.toNonIndexed():e;r.computeVertexNormals();let a=new c;return a.setAttribute(`position`,r.attributes.position),a.setAttribute(`normal`,r.attributes.normal),a}var V=[[.42,.2,.14],[.5,.25,.17],[.36,.17,.12],[.55,.53,.5],[.46,.45,.43],[.62,.6,.56],[.2,.19,.18],[.28,.24,.2],[.45,.34,.22]];function H(e){let t=B(),n=new s(new Float32Array(1600).fill(-1e5),4),r=new s(new Float32Array(1600),4),i=new s(new Float32Array(1600),4),o=new s(new Float32Array(1200),3),c=new s(new Float32Array(1200),3),u=[n,r,i,o,c];for(let e of u)e.setUsage(l);t.setAttribute(`aSpawn`,n),t.setAttribute(`aVel`,r),t.setAttribute(`aSpin`,i),t.setAttribute(`aShape`,o),t.setAttribute(`aCol`,c),t.instanceCount=0;let d=new f({color:16777215,roughness:.92,metalness:0,flatShading:!0});d.onBeforeCompile=t=>{t.uniforms.uTime=e.uTime,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
        attribute vec4 aSpawn; attribute vec4 aVel; attribute vec4 aSpin; attribute vec3 aShape; attribute vec3 aCol;
        uniform float uTime; varying vec3 vDebCol;
        mat3 fxAxisAngle(vec3 ax, float a){ float c = cos(a), s = sin(a), t = 1.0 - c;
          return mat3(t*ax.x*ax.x + c, t*ax.x*ax.y + s*ax.z, t*ax.x*ax.z - s*ax.y,
                      t*ax.x*ax.y - s*ax.z, t*ax.y*ax.y + c, t*ax.y*ax.z + s*ax.x,
                      t*ax.x*ax.z + s*ax.y, t*ax.y*ax.z - s*ax.x, t*ax.z*ax.z + c); }`).replace(`#include <beginnormal_vertex>`,`
        float fxT = uTime - aSpawn.w;
        float fxLife = aSpin.w;
        float fxAlive = step(0.0, fxT) * step(fxT, fxLife);
        float fxG = 9.81;
        float fxR = 0.35 * max(aShape.y, 0.02);
        float fxH0 = max(aSpawn.y - (aVel.w + fxR), 0.0);
        float fxImp = (aVel.y + sqrt(aVel.y * aVel.y + 2.0 * fxG * fxH0)) / fxG;
        float fxTc = min(max(fxT, 0.0), fxImp);
        float fxTs = max(fxT - fxImp, 0.0);
        vec3 fxC = aSpawn.xyz + aVel.xyz * fxTc; fxC.y -= 0.5 * fxG * fxTc * fxTc;
        fxC.xz += aVel.xz * 0.18 * (1.0 - exp(-5.0 * fxTs));      // skid after landing
        fxC.y += abs(sin(min(fxTs * 7.0, 3.14159))) * 0.12 * length(aVel.xyz) * 0.1 * step(0.0, fxTs); // small bounce
        fxC.y = max(fxC.y, aVel.w + fxR);
        float fxW = length(aSpin.xyz);
        float fxAng = fxW * (fxTc + 0.2 * (1.0 - exp(-5.0 * fxTs)));
        mat3 fxRot = fxAxisAngle(fxW > 0.0 ? aSpin.xyz / fxW : vec3(0.0, 1.0, 0.0), fxAng);
        float fxSc = fxAlive * (1.0 - smoothstep(fxLife - 1.2, fxLife, fxT));
        vDebCol = aCol;
        vec3 objectNormal = fxRot * (normal / aShape);
      `).replace(`#include <begin_vertex>`,`vec3 transformed = fxC + fxRot * (position * aShape) * fxSc;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vDebCol;`).replace(`#include <color_fragment>`,`#include <color_fragment>
 diffuseColor.rgb *= vDebCol;`)},d.customProgramCacheKey=()=>`fx-debris`;let p=new a(t,d);p.frustumCulled=!1,p.name=`fx-debris`,p.visible=!1,p.castShadow=!1,p.receiveShadow=!0;let m=0,h=!1,g=-1e9,_=0;function v(e,t,a,s,l){let u=Math.max(2,l),d=Math.round(Math.min(34,Math.max(6,u*1.7)));for(let l=0;l<d;l++){let l=m;m=(m+1)%400,_=Math.max(_,l+1);let d=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*u*.45,p=Math.cos(d),h=Math.sin(d),g=n.array,v=r.array,y=i.array,b=o.array,x=c.array,S=l*4,C=l*3;g[S]=t+p*f,g[S+1]=a+.3+Math.random()*u*.7,g[S+2]=s+h*f,g[S+3]=e+Math.random()*.5;let w=1.5+Math.random()*4.5;v[S]=p*w,v[S+1]=1.5+Math.random()*5.5,v[S+2]=h*w,v[S+3]=Math.max(0,a);let T=Math.random()-.5,E=Math.random()-.5,D=Math.random()-.5,O=(3+Math.random()*9)/(Math.hypot(T,E,D)||1);y[S]=T*O,y[S+1]=E*O,y[S+2]=D*O,y[S+3]=3.8+Math.random()*2.5;let k=(.08+Math.random()**2.5*.35)*Math.min(1.4,u/10+.5),A=Math.random()<.4;b[C]=k*(A?1.6:1),b[C+1]=k*(A?.45:.8+Math.random()*.4),b[C+2]=k*(.8+Math.random()*.6);let j=V[Math.random()*V.length|0],M=.85+Math.random()*.3;x[C]=j[0]*M,x[C+1]=j[1]*M,x[C+2]=j[2]*M}h=!0,g=e}return{mesh:p,spawn:v,update(e){if(h){for(let e=0;e<u.length;e++)u[e].needsUpdate=!0;t.instanceCount=_,h=!1}p.visible=e-g<7.5}}}var U=`
#include <common>
#include <fog_pars_vertex>
${j}
attribute vec4 aP;   // x, z, y phase (0..1), rise speed
attribute vec4 aR;   // twinkle phase, size, twinkle freq, hue
uniform float uTime;
uniform float uGlow;
uniform float uPix;   // world size of one pixel at 1 m distance
uniform vec3 uBox0; uniform vec3 uBox1;
uniform float uWaveU; uniform vec2 uWaveDir;
varying vec2 vUv;
varying float vA;
varying float vHue;
varying float vStar;
void main(){
  vec3 b0 = uBox0, b1 = uBox1;
  float H = b1.y - b0.y;
  float y = fract(aP.z + uTime * aP.w / H);
  vec3 c = vec3(aP.x, b0.y + y * H, aP.y);
  // during a transformation the motes gather in a band along the sweeping time-front
  if (uWaveU > -1.0) {
    vec2 wd = normalize(uWaveDir);
    float d = dot(c.xz, wd) - (uWaveU - 0.5) * 160.0;
    c.xz -= wd * d * 0.88;
  }
  // lazy swirling drift
  float t = uTime * 0.35 + aR.x * 6.28;
  c.x += sin(t + c.y * 0.15) * 1.6 + sin(t * 2.3 + aR.x * 17.0) * 0.4;
  c.z += cos(t * 0.8 + c.y * 0.12) * 1.6 + cos(t * 1.9 + aR.x * 11.0) * 0.4;
  vec4 mv = modelViewMatrix * vec4(c, 1.0);
  float dist = -mv.z;
  float size = aR.y;
  float minSize = uPix * dist * 3.5;
  float s = max(size, minSize);
  float energy = clamp((size * size) / (s * s), 0.18, 1.0);
  mv.xy += position.xy * s;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  float tw = 0.5 + 0.5 * sin(uTime * aR.z + aR.x * 40.0);
  tw = pow(tw, 3.0);
  float fade = smoothstep(0.0, 0.1, y) * (1.0 - smoothstep(0.75, 1.0, y));
  vA = uGlow * fade * (0.18 + 0.8 * tw) * energy * smoothstep(0.3, 1.2, dist);
  vHue = aR.w;
  vStar = tw;
  #ifdef USE_FOG
  vFogDepth = dist;
  #endif
}
`,W=`
#include <common>
#include <fog_pars_fragment>
uniform vec3 uCol;
varying vec2 vUv;
varying float vA;
varying float vHue;
varying float vStar;
void main(){
  vec2 p = vUv * 2.0;
  float r2 = dot(p, p);
  float core = exp(-r2 * 14.0) * 0.55;
  float halo = exp(-r2 * 4.0) * 0.22;
  float star = max(0.0, 1.0 - abs(p.x) * 10.0) * pow(max(0.0, 1.0 - abs(p.y)), 2.0) + max(0.0, 1.0 - abs(p.y) * 10.0) * pow(max(0.0, 1.0 - abs(p.x)), 2.0);
  float i = (core + halo + star * 0.35 * vStar) * vA;
  if (i < 0.002) discard;
  vec3 col = uCol * mix(vec3(1.0, 0.8, 0.62), vec3(1.0, 1.22, 1.45), vHue);
  // mostly additive; the bright core also slightly occludes what is behind it so motes stay warm on a bright sky
  float occ = clamp((core * 1.6 + star * 0.3 * vStar) * vA, 0.0, 0.85);
  gl_FragColor = vec4(col * i, occ);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    gl_FragColor *= 1.0 - fogFactor;
  #endif
}
`;function G(e,t=1500){let n=new c;n.setAttribute(`position`,new _([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),n.setIndex([0,1,2,0,2,3]);let r=new Float32Array(t*4),i=new Float32Array(t*4);for(let e=0;e<t;e++)r[e*4]=-60+Math.random()*120,r[e*4+1]=-50+Math.random()*105,r[e*4+2]=Math.random(),r[e*4+3]=.6+Math.random()*1.8,i[e*4]=Math.random(),i[e*4+1]=.1+Math.random()**3*.35,i[e*4+2]=1.5+Math.random()*5,i[e*4+3]=Math.random()<.1?.5+Math.random()*.5:Math.random()*.35;n.setAttribute(`aP`,new s(r,4)),n.setAttribute(`aR`,new s(i,4)),n.instanceCount=t;let l=Object.assign(p.clone(g.fog),{uTime:e.uTime,uGlow:{value:0},uPix:{value:.001},uBox0:{value:new C(-60,0,-50)},uBox1:{value:new C(60,40,55)},uCol:{value:new C(1,.55,.22).multiplyScalar(4)},uWaveU:y.uWaveU,uWaveDir:y.uWaveDir}),u=new x({vertexShader:U,fragmentShader:W,uniforms:l,fog:!0,transparent:!0,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201}),d=new a(n,u);d.frustumCulled=!1,d.renderOrder=22,d.name=`fx-motes`,d.visible=!1;let f=0;return{mesh:d,uniforms:l,update(e,t,n,r){if(f+=(t-f)*(1-Math.exp(-e*2.5)),t<=0&&f<.003&&(f=0),l.uGlow.value=f,d.visible=f>.002,d.visible&&n&&n.isPerspectiveCamera){let e=r&&r.domElement.height||1080;l.uPix.value=2*Math.tan(o.degToRad(n.fov)*.5)/e}}}}var K=`
#include <common>
#include <fog_pars_vertex>
${j}
attribute vec4 aLane;   // x0, z0, len (along), width (across)
attribute vec4 aLane2;  // axis (0 x, 1 z), roadLo, roadHi, seed
attribute vec4 aM;      // u0, v0, period, gust duration
attribute vec4 aN;      // distance per gust, size, cell, rank
attribute vec3 aTint;
uniform float uTime;
uniform float uLeafAmt;
uniform float uFallAmt;
uniform float uNewsAmt;
uniform vec3 uWindDir;
varying vec2 vUv;
varying vec3 vTint;
varying vec3 vN;
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rotAxis(vec3 ax, float a){ float c = cos(a), s = sin(a), t = 1.0 - c;
  return mat3(t*ax.x*ax.x + c, t*ax.x*ax.y + s*ax.z, t*ax.x*ax.z - s*ax.y,
              t*ax.x*ax.y - s*ax.z, t*ax.y*ax.y + c, t*ax.y*ax.z + s*ax.x,
              t*ax.x*ax.z + s*ax.y, t*ax.y*ax.z - s*ax.x, t*ax.z*ax.z + c); }
float groundAt(vec3 c){
  // roads are at y = 0, everything else (sidewalks, block interior) at 0.15
  bool road = (c.z > 32.0 && c.z < 48.0) || (c.z > -42.0 && c.z < -32.0) || (c.x > -60.0 && c.x < -48.0) || (c.x > 48.0 && c.x < 60.0);
  return road ? 0.0 : 0.15;
}
void main(){
  float seed = aLane2.w;
  float cell = aN.z;
  bool leaf = cell < 3.5;
  bool news = aN.w < -0.5;
  float show;
  vec3 c;
  mat3 R;
  if (aLane2.x > 1.5) {
    // ---- 1985: leaf falling from a street-tree crown, rocking side to side, then resting on the ground
    show = smoothstep(aN.w - 0.03, aN.w, uFallAmt);
    float P = aM.z, D = aM.w;
    float T = uTime + aM.x * P;
    float k = floor(T / P);
    float s = T - k * P;
    float h1 = fxHash(k * 3.1 + seed * 17.0), h2 = fxHash(k * 1.7 + seed * 5.3), h3 = fxHash(k * 2.3 + seed * 9.1);
    float a0 = h1 * 6.2831, rad = sqrt(h2) * aLane.w;
    vec3 start = vec3(aLane.x + cos(a0) * rad, aLane.z * (0.5 + 0.45 * h3), aLane.y + sin(a0) * rad);
    float sm = min(s, D);
    float f = sm / D;
    vec3 wd = normalize(uWindDir);
    vec3 side = vec3(-wd.z, 0.0, wd.x);
    float rock = sin(sm * 2.3 + seed * 6.0);
    c = start + wd * sm * (0.35 + 0.3 * h2) + side * rock * 0.45 * (0.4 + 0.6 * f);
    float gy = groundAt(c);
    c.y = mix(start.y, gy + 0.02, f) + 0.12 * abs(rock) * (1.0 - f);
    float landed = step(D, s);
    float yaw = seed * 6.2831 + sm * (0.8 + h3);
    R = rotAxis(wd, rock * 0.85 * (1.0 - landed)) * rotAxis(side, 0.35 * cos(sm * 2.3 + seed * 6.0) * (1.0 - landed)) * rotY(yaw);
    show *= smoothstep(0.0, 0.25, s) * (1.0 - smoothstep(P - 0.8, P, s));
  } else {
  show = leaf ? smoothstep(aN.w - 0.03, aN.w, uLeafAmt) : news ? smoothstep(-aN.w - 1.03, -aN.w - 1.0, uNewsAmt) : 1.0;
  float P = aM.z, gd = aM.w;
  float T = uTime + seed * 97.0;
  float k = floor(T / P);
  float s = T - k * P;
  float g = clamp((s - (P - gd)) / gd, 0.0, 1.0);
  float e = mix(g, g * g * (3.0 - 2.0 * g), 0.6);
  float hk1 = fxHash(k * 3.1 + seed * 17.0), hk2 = fxHash(k * 1.7 + seed * 5.3), hk3 = fxHash(k * 2.3 + seed * 9.1);
  float big = step(news ? 0.55 : 0.87, hk1);
  float len = aLane.z, wid = aLane.w;
  float along = mod(aM.x * len + aN.x * (k + e), len);
  float v = clamp(aM.y + 0.1 * sin(along * 0.23 + seed * 6.0) + (hk2 - 0.5) * 0.08 * e, 0.02, 0.98);
  float across = v * wid;
  float acrossCoord;
  vec3 travel;
  if (aLane2.x < 0.5) { c = vec3(aLane.x + along, 0.0, aLane.y + across); acrossCoord = c.z; travel = vec3(1.0, 0.0, 0.0); }
  else { c = vec3(aLane.x + across, 0.0, aLane.y + along); acrossCoord = c.x; travel = vec3(0.0, 0.0, 1.0); }
  float ground = (acrossCoord > aLane2.y && acrossCoord < aLane2.z) ? 0.0 : 0.15;
  float tilt1 = (fxHash(seed * 7.7) - 0.5) * 0.8, tilt2 = (fxHash(seed * 3.3) - 0.5) * 0.7;
  float nh = 1.0 + floor(hk2 * 3.0);
  float hop = abs(sin(g * 3.14159 * nh)) * (0.06 + 0.22 * hk3) * (1.0 - g * 0.4);
  float lift = big * sin(g * 3.14159) * (news ? 0.8 + 2.2 * hk2 : 1.2 + 3.5 * hk2);
  c.y = ground + 0.03 + hop + lift + 0.25 * aN.y * abs(sin(tilt1)) * (news ? 0.2 : 1.0);
  // orientation: resting yaw, flips about the horizontal axis perpendicular to travel
  float yaw = seed * 6.2831 + (k + e) * (1.1 + hk3);
  float nf = 1.0 + floor(hk3 * 2.0) + big * (news ? 1.0 : 3.0);
  float flip = e * 3.14159 * nf;
  float pre = smoothstep(P - gd - 0.9, P - gd, s) * (1.0 - g);
  float flutter = 0.3 * sin(uTime * 17.0 + seed * 30.0) * pre + 0.25 * sin(g * 25.0 + seed) * sin(g * 3.14159);
  if (news) flutter += 0.35 * sin(uTime * 9.0 + seed * 11.0) * sin(g * 3.14159);
  vec3 ax = normalize(cross(vec3(0.0, 1.0, 0.0), travel));
  R = rotAxis(ax, flip + flutter + tilt1 * (news ? 0.2 : 1.0)) * rotAxis(travel, tilt2 * (1.0 - sin(g * 3.14159))) * rotY(yaw);
  }
  float size = aN.y * show;
  vec4 wc = vec4(c, 1.0);
  float dcam = length((modelViewMatrix * wc).xyz);
  size *= 1.0 - smoothstep(70.0, 110.0, dcam);
  vec3 lp = vec3(position.x, 0.0, -position.y);
  float curl = leaf ? 0.32 : news ? 0.05 + 0.06 * fxHash(seed) : 0.1 + 0.12 * fxHash(seed);
  lp.y = curl * (lp.x * lp.x * 2.0 + lp.z * lp.z * (leaf ? 0.5 : 1.0));
  vec3 wp = c + R * (lp * size);
  vec4 mv = modelViewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  float cx = mod(cell, 4.0), cy = floor(cell / 4.0);
  vUv = (vec2(cx, 1.0 - cy) + (position.xy + 0.5)) * vec2(0.25, 0.5);
  vTint = aTint;
  vN = R * vec3(0.0, 1.0, 0.0);
  #ifdef USE_FOG
  vFogDepth = -mv.z;
  #endif
}
`,q=`
#include <common>
#include <fog_pars_fragment>
uniform sampler2D uAtlas;
uniform vec3 uKey;
uniform vec3 uAmb;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vTint;
varying vec3 vN;
void main(){
  vec4 t = texture2D(uAtlas, vUv);
  if (t.a < 0.5) discard;
  vec3 n = normalize(vN);
  float diff = abs(dot(n, uSunDir));
  float trans = 0.25;  // thin leaves let light through
  vec3 col = t.rgb * vTint * (uAmb * 0.9 + uKey * (diff * 0.85 + trans * 0.3));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,J=[`#b8431f`,`#d06a1c`,`#e0a22a`,`#c9861e`,`#8a4a22`,`#6e3b1c`,`#a3281a`,`#d8b640`,`#9a6a2a`],Y=[`#ffffff`,`#f4efe4`,`#ece6da`,`#fffaf0`];function ae(){let e=[[`x`,-47.25,-24,24,11.5],[`x`,47.25,-24,24,11.5],[`z`,-31.25,-38,38,12],[`x`,-60.75,-96,96,14],[`x`,60.75,-96,96,14],[`z`,-42.75,-118,118,13.5]],t=[[-46,-27.6],[27.6,53]],n=[[-64.5,-44],[44,64.5]],r=[],i=1;e.forEach(([e,a,o,s,c],l)=>{for(let u=o;u<=s+.01;u+=c){i++;let o=(i*2654435761>>>0)/4294967296,s=o<.75?.5+o*.1:o>.85?.25:0;if(!s||(l===3||l===4?t:l===5?n:[]).some(([e,t])=>u>e-.8&&u<t+.8))continue;let[c,d]=e===`x`?[a,u]:[u,a];r.push([c,d,11*s+1.5,4*s+.5,s])}});for(let[e,t,n]of[[-22,-3,.85],[-8,.5,1],[3,-4,.35],[16,-1,1.1],[24,1.5,.8]])r.push([e,t,7*n+1.5,3.2*n+.5,n]);return r}function oe(t,{leaves:n=900,litter:r=100,news:i=48,falling:o=800}={}){let l=[[-62,28,124,24,0,32,48,.52],[-48,-32,96,4,0,1e5,1e5,.1],[-75,-45,150,13,0,-42,-32,.12],[-48,-32,64,4,1,1e5,1e5,.08],[44,-32,64,4,1,1e5,1e5,.08],[-63,-60,120,15,1,-60,-48,.06],[48,-60,120,15,1,48,60,.06]],u=ae(),d=u.reduce((e,t)=>e+t[4],0),f=n+r+i+o,m={aLane:new Float32Array(f*4),aLane2:new Float32Array(f*4),aM:new Float32Array(f*4),aN:new Float32Array(f*4),aTint:new Float32Array(f*3)},h=l.reduce((e,t)=>e+t[7],0),_=new S;for(let e=n+r+i;e<f;e++){let t=Math.random()*d,a=u[0];for(let e of u)if(t-=e[4],t<=0){a=e;break}let s=e-(n+r+i);m.aLane.set([a[0],a[1],a[2],a[3]],e*4),m.aLane2.set([2,0,0,Math.random()*10],e*4);let c=a[2]/(.75+Math.random()*.35);m.aM.set([Math.random(),0,c+1.5+Math.random()*4,c],e*4),m.aN.set([0,.17+Math.random()*.1,Math.random()*4|0,s/o],e*4),_.set(J[Math.random()*J.length|0]);let l=(.85+Math.random()*.3)*1.6;m.aTint.set([_.r*l,_.g*l,_.b*l],e*3)}for(let e=0;e<n+r+i;e++){let t=e<n,a=e>=n+r,o=Math.random()*h,s=l[0];for(let e of l)if(o-=e[7],o<=0){s=e;break}m.aLane.set([s[0],s[1],s[2],s[3]],e*4),m.aLane2.set([s[4],s[5],s[6],Math.random()*10],e*4);let c=Math.random(),u=Math.random();if(s[5]<1e4&&u<.4?c=((Math.random()<.5?s[5]:s[6])-(s[4]<.5?s[1]:s[0])+(Math.random()-.5)*1.2)/s[3]:u<.75&&(c=Math.random()<.5?Math.random()*.15:1-Math.random()*.15),a){m.aM.set([Math.random(),c,4+Math.random()*6,1.6+Math.random()*1.6],e*4),m.aN.set([2.5+Math.random()*3.5,.45+Math.random()*.22,7,-1-(e-n-r)/i],e*4),_.set(`#ebe5d3`);let t=.88+Math.random()*.1;m.aTint.set([_.r*t,_.g*t,_.b*t],e*3);continue}m.aM.set([Math.random(),c,(t?3.5:5)+Math.random()*7,(t?.9:1.2)+Math.random()*1.6],e*4),m.aN.set([(t?1.5:2.2)+Math.random()*3.5,t?.16+Math.random()*.12:.22+Math.random()*.2,t?Math.random()*4|0:4+(Math.random()*4|0),t?e/n:0],e*4),_.set(t?J[Math.random()*J.length|0]:Y[Math.random()*Y.length|0]);let d=t?.85+Math.random()*.3:.9+Math.random()*.1;m.aTint.set([_.r*d*(t?1.6:1),_.g*d*(t?1.6:1),_.b*d*(t?1.6:1)],e*3)}let v=new e(1,1,2,2),y=new c;y.setIndex(v.index),y.setAttribute(`position`,v.attributes.position);for(let e of[`aLane`,`aLane2`,`aM`,`aN`])y.setAttribute(e,new s(m[e],4));y.setAttribute(`aTint`,new s(m.aTint,3)),y.instanceCount=f;let b=Object.assign(p.clone(g.fog),{uTime:t.uTime,uKey:t.uKey,uAmb:t.uAmb,uLeafAmt:{value:.1},uFallAmt:{value:0},uNewsAmt:{value:0},uWindDir:{value:new C(1,0,.6).normalize()},uSunDir:{value:new C(.3,.85,.4).normalize()},uAtlas:{value:A()}}),w=new x({vertexShader:K,fragmentShader:q,uniforms:b,fog:!0,side:2,transparent:!1,depthWrite:!0}),T=new a(y,w);return T.frustumCulled=!1,T.name=`fx-leaves`,T.renderOrder=0,{mesh:T,uniforms:b,update(e){b.uLeafAmt.value=.1+.9*e[2],b.uFallAmt.value=e[2],b.uNewsAmt.value=e[0]}}}var se=`
#include <common>
#include <fog_pars_vertex>
${j}
attribute vec4 aP;   // base x,y,z in 0..1, layer (0 camera box, 1 world box)
attribute vec4 aR;   // size (m), fall speed (m/s), phase, sparkle freq
uniform float uTime;
uniform float uAmt;
uniform float uPix;
uniform vec3 uCam;
uniform vec3 uWind;
uniform vec3 uCamBox;
uniform vec3 uWB0;
uniform vec3 uWB1;
varying vec2 vUv;
varying float vA;
varying float vSpark;
varying float vY;
void main(){
  bool camLayer = aP.w < 0.5;
  float t = uTime;
  float ph = aR.z * 6.2831;
  // wind drift + lazy swirl (flakes flutter sideways as they fall)
  vec3 drift = vec3(uWind.x * 0.55, -aR.y, uWind.z * 0.55) * t;
  vec3 sw = vec3(sin(t * 0.9 + ph) * 0.3 + sin(t * 0.31 + ph * 2.0) * 0.6, sin(t * 1.3 + ph) * 0.08,
                 cos(t * 0.7 + ph * 1.3) * 0.3 + cos(t * 0.27 + ph) * 0.6);
  vec3 p;
  float fade;
  vec3 cb = uCamBox;
  if (camLayer) {
    vec3 base = aP.xyz * cb + drift + sw;
    vec3 rel = mod(base - uCam + 0.5 * cb, cb) - 0.5 * cb;
    p = uCam + rel;
    vec3 q = abs(rel) / (0.5 * cb);
    fade = 1.0 - smoothstep(0.65, 1.0, max(max(q.x, q.y), q.z));
  } else {
    vec3 B = uWB1 - uWB0;
    p = uWB0 + mod(aP.xyz * B + drift + sw, B);
    float yy = (p.y - uWB0.y) / B.y;
    fade = smoothstep(0.0, 0.04, yy) * (1.0 - smoothstep(0.8, 1.0, yy));
    // inside the camera box the camera layer takes over (avoids a denser patch around the viewer)
    vec3 q = abs(p - uCam) / (0.5 * cb);
    fade *= smoothstep(0.55, 0.95, max(max(q.x, q.y), q.z));
  }
  if (p.y < 0.0) fade = 0.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  float size = aR.x;
  float minS = uPix * dist * (camLayer ? 1.3 : 2.3);
  float s = max(size, minS);
  float energy = camLayer ? clamp((size * size) / (s * s), 0.0, 1.0) : clamp((size * size) / (s * s), 0.6, 1.0);
  // flakes right in front of the lens would be huge blurry blobs: fade them
  float nearF = smoothstep(0.5, 2.0, dist);
  mv.xy += position.xy * s;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  vA = uAmt * fade * energy * nearF * (camLayer ? 0.9 : 1.0);
  float sp = sin(t * aR.w + ph * 7.0);
  vSpark = smoothstep(0.93, 1.0, sp);
  vY = p.y;
  #ifdef USE_FOG
  vFogDepth = dist;
  #endif
}
`,ce=`
#include <common>
#include <fog_pars_fragment>
uniform vec3 uSnowCol;
uniform vec3 uWarm;
uniform float uNight;
varying vec2 vUv;
varying float vA;
varying float vSpark;
varying float vY;
void main(){
  vec2 p = vUv * 2.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float disc = exp(-r2 * 3.2) * (1.0 - r2);
  float a = disc * vA;
  if (a < 0.002) discard;
  // cool white; warmed by the street lights close to the ground at night
  float low = 1.0 - smoothstep(1.5, 9.0, vY);
  vec3 col = mix(uSnowCol, uWarm, low * uNight * 0.55);
  col *= 1.0 + vSpark * 1.6;
  gl_FragColor = vec4(col, min(a * (1.0 + vSpark * 0.5), 1.0));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  gl_FragColor.rgb *= gl_FragColor.a;
}
`;function le(e,{near:t=6500,far:n=21e3}={}){let r=t+n,i=new c;i.setAttribute(`position`,new _([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),i.setIndex([0,1,2,0,2,3]);let l=new Float32Array(r*4),u=new Float32Array(r*4);for(let e=0;e<r;e++){let n=e<t;l[e*4]=Math.random(),l[e*4+1]=Math.random(),l[e*4+2]=Math.random(),l[e*4+3]=+!n;let r=Math.random();u[e*4]=n?.012+r*r*.03:.09+r*.09,u[e*4+1]=.7+Math.random()*.6,u[e*4+2]=Math.random(),u[e*4+3]=1.5+Math.random()*4}i.setAttribute(`aP`,new s(l,4)),i.setAttribute(`aR`,new s(u,4)),i.instanceCount=r;let d=Object.assign(p.clone(g.fog),{uTime:e.uTime,uWind:e.uWind,uNight:e.uNight,uAmt:{value:0},uPix:{value:7e-4},uCam:{value:new C},uCamBox:{value:new C(34,22,34)},uWB0:{value:new C(-95,0,-85)},uWB1:{value:new C(95,70,95)},uSnowCol:{value:new C(.8,.86,1)},uWarm:{value:new C(1,.8,.55)}}),f=new x({vertexShader:se,fragmentShader:ce,uniforms:d,fog:!0,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205}),m=new a(i,f);m.frustumCulled=!1,m.renderOrder=23,m.name=`fx-snow`,m.visible=!1;let h=new C;return{mesh:m,uniforms:d,update(e,t,n,r){if(d.uAmt.value=e,m.visible=e>.002,m.visible){if(t&&(t.getWorldPosition(h),d.uCam.value.copy(h),t.isPerspectiveCamera)){let e=n&&n.domElement.height||1080;d.uPix.value=2*Math.tan(o.degToRad(t.fov)*.5)/e}r&&d.uSnowCol.value.copy(r)}}}}var ue=`
#include <common>
#include <fog_pars_vertex>
attribute vec4 aA;   // x, z, nx, nz
attribute vec4 aB;   // width, kind, era, seed
attribute vec3 aCol;
uniform float uAmt[5];
uniform float uTime;
varying vec2 vUv;
varying float vKind;
varying vec3 vCol;
varying float vI;
void main(){
  float kind = aB.y;
  int era = int(aB.z + 0.5);
  vec3 n = vec3(aA.z, 0.0, aA.w);
  vec3 t = vec3(-aA.w, 0.0, aA.z);
  vec3 base = vec3(aA.x, 0.0, aA.y);
  float w = aB.x;
  vec2 uv = position.xy + vec2(0.0, 0.5);   // x -0.5..0.5 across, y 0..1
  vec3 p;
  if (kind < 0.5) {            // window pool: spreads wider away from the glass
    float d = 2.7;
    p = base + t * uv.x * (w + 0.4 + uv.y * 1.6) + n * (uv.y * d + 0.02);
    p.y = 0.165;
  } else if (kind < 1.5) {     // glow on the glass plane
    p = base + t * uv.x * (w + 0.2) + n * 0.03;
    p.y = 0.55 + uv.y * 2.6;
  } else if (kind < 2.5) {     // neon halo card in front of the fascia
    p = base + t * uv.x * (w + 1.6) + n * 0.45;
    p.y = 2.95 + uv.y * 1.75;
  } else {                     // neon pool on the sidewalk
    float d = 3.4;
    p = base + t * uv.x * (w + 1.2 + uv.y * 1.4) + n * (uv.y * d + 0.1);
    p.y = 0.168;
  }
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vUv = uv;
  vKind = kind;
  vCol = aCol;
  // neon flicker (rare, subtle) for 1985 signs
  float fl = 1.0;
  if (kind > 1.5 && era == 2) fl = 0.92 + 0.08 * sin(uTime * 7.0 + aB.w * 40.0) * step(0.93, fract(sin(floor(uTime * 3.0 + aB.w * 13.0)) * 43758.5));
  vI = uAmt[era] * fl;
  #ifdef USE_FOG
  vFogDepth = -mv.z;
  #endif
}
`,de=`
#include <common>
#include <fog_pars_fragment>
varying vec2 vUv;
varying float vKind;
varying vec3 vCol;
varying float vI;
void main(){
  float x = vUv.x, y = vUv.y;
  float a;
  if (vKind < 0.5) {
    float across = 1.0 - smoothstep(0.18, 0.5, abs(x));
    float along = pow(1.0 - y, 1.7) * smoothstep(0.0, 0.05, y);
    a = across * along * 0.55;
  } else if (vKind < 1.5) {
    float across = 1.0 - smoothstep(0.3, 0.5, abs(x));
    float up = smoothstep(0.0, 0.25, y) * (1.0 - smoothstep(0.6, 1.0, y));
    a = across * up * 0.16;
  } else if (vKind < 2.5) {
    vec2 q = vec2(x * 2.0, (y - 0.47) * 2.0);
    float r = length(q * vec2(0.8, 1.35));
    a = exp(-r * r * 5.0) * 0.34 * (1.0 - smoothstep(0.5, 1.0, r));
  } else {
    float across = 1.0 - smoothstep(0.12, 0.5, abs(x));
    float along = pow(1.0 - y, 2.0) * smoothstep(0.0, 0.12, y);
    a = across * along * 0.3;
  }
  a *= vI;
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    gl_FragColor.rgb *= 1.0 - fogFactor;
  #endif
}
`,fe=[[1,.72,.45],[1,.8,.6],[1,.6,.5],[.95,.85,.72],[1,.84,.64]],pe={2:[[1,.12,.65],[.15,.85,1],[1,.55,.12],[.85,.2,1],[1,.2,.3]],4:[[1,.86,.66],[1,.8,.58],[.95,.9,.8]]};function X(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function me(){let t=new c,n=new e(1,1);t.setIndex(n.index),t.setAttribute(`position`,n.attributes.position);let r=Object.assign(p.clone(g.fog),{uAmt:{value:new Float32Array(5)},uTime:{value:0}}),i=new x({vertexShader:ue,fragmentShader:de,uniforms:r,fog:!0,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),l=new a(t,i);l.frustumCulled=!1,l.renderOrder=20,l.name=`fx-lightspill`,l.visible=!1;let u=-1,d=0;function f(){let e=[];for(let t of[2,4]){let n=v.displays&&v.displays[t]||[];for(let r of n){let n=X((r.lot||``)+`:`+t+`:`+Math.round(r.x)+`:`+Math.round(r.z)),i=fe[t],a=(.9+.2*n)*(t===4?1.3:1),o=Math.max(.8,r.w||1.5);e.push([r.x,r.z,r.nx,r.nz,o,0,t,n,i[0]*a,i[1]*a,i[2]*a]),e.push([r.x,r.z,r.nx,r.nz,o,1,t,n,i[0],i[1],i[2]]);let s=pe[t],c=X(r.lot||String(Math.round(r.x))),l=s[Math.floor(c*s.length)%s.length],u=t===4?.28:.7,d=t===4?.55:1;e.push([r.x,r.z,r.nx,r.nz,o,2,t,n,l[0]*u,l[1]*u,l[2]*u]),e.push([r.x,r.z,r.nx,r.nz,o,3,t,n,l[0]*d,l[1]*d,l[2]*d])}}let n=e.length,r=new Float32Array(n*4),i=new Float32Array(n*4),a=new Float32Array(n*3);e.forEach((e,t)=>{r.set(e.slice(0,4),t*4),i.set(e.slice(4,8),t*4),a.set(e.slice(8,11),t*3)}),t.setAttribute(`aA`,new s(r,4)),t.setAttribute(`aB`,new s(i,4)),t.setAttribute(`aCol`,new s(a,3)),t.instanceCount=n}function m(){let e=0;if(v.displays)for(let t of[2,4])e+=(v.displays[t]||[]).length;return e}return{mesh:l,uniforms:r,update(e,t){if(d-=t,u<0||d<=0){d=2;let e=m();e!==u&&(u=e,f())}r.uTime.value+=t;let n=e.night||0,i=o.smoothstep(n,.25,.7),a=r.uAmt.value,s=!1;for(let t=0;t<5;t++)a[t]=(e.presence?e.presence[t]:0)*i,(t===2||t===4)&&a[t]>.002&&(s=!0);l.visible=s&&u>0}}}var he=`
#include <common>
#include <fog_pars_vertex>
${j}
attribute vec4 aP;   // along-line 0..1, life, phase, kind
attribute vec4 aR;   // size, height, r1, r2
uniform float uTime;
uniform float uAmt;
uniform float uWaveU;
uniform float uVel;
uniform vec2 uWaveDir;
uniform float uPix;
uniform vec3 uWind;
varying vec2 vUv;
varying float vA;
varying float vKind;
varying vec4 vCell;
varying float vHot;
void main(){
  float kind = aP.w;
  vec2 dir = normalize(uWaveDir);
  vec2 perp = vec2(-dir.y, dir.x);
  float life = aP.y;
  float tt = uTime / life + aP.z;
  float age = fract(tt);
  float cyc = floor(tt);
  float h1 = fxHash(cyc * 1.37 + aP.z * 91.7), h2 = fxHash(cyc * 2.71 + aP.z * 57.3), h3 = fxHash(cyc * 0.73 + aP.z * 23.9);
  float T = age * life;
  vec3 c;
  float a;
  float size;
  if (kind < 0.5) {
    // ---- ember: born on the front line, rises with turbulence, fades
    // 60%: a curtain carried along with the front (trails ~10-16 m behind it); 40%: a wake left where the front passed
    bool carried = aR.w < 0.6;
    float ub = carried ? uWaveU - sign(uVel + 1e-4) * age * (10.0 + 6.0 * h3) / 160.0 : uWaveU - uVel * T;
    float s = (ub - 0.5) * 160.0;
    float l = (fract(aP.x + h1 * 0.37) - 0.5) * 190.0;
    vec2 xz = dir * s + perp * l;
    float H = aR.y * (0.7 + 0.6 * h2);
    float rise = H * (1.0 - pow(1.0 - age, 1.8));
    c = vec3(xz.x, 0.2 + rise, xz.y);
    float tw = T * 2.2 + h3 * 6.28;
    c.x += sin(tw + c.y * 0.4) * 0.6 * age + uWind.x * T * 0.35;
    c.z += cos(tw * 1.3 + c.y * 0.3) * 0.6 * age + uWind.z * T * 0.35;
    bool inBox = abs(xz.x) < 70.0 && abs(xz.y) < 55.0 && ub > -0.02 && ub < 1.02;
    float flick = 0.65 + 0.35 * sin(uTime * (9.0 + h2 * 14.0) + h1 * 30.0);
    a = inBox ? smoothstep(0.0, 0.08, age) * pow(1.0 - age, 1.4) * flick : 0.0;
    size = aR.x * (1.0 - 0.5 * age);
    vHot = 1.0 - age;
  } else {
    // ---- haze: rolling dust sheet just ahead of the front (ahead = direction of travel)
    float ahead = sign(uVel + 1e-4);
    float s = (uWaveU - 0.5) * 160.0 + ahead * (1.0 + aR.z * 7.0);
    float l = (fract(aP.x + uTime * 0.004 * (aR.w - 0.5)) - 0.5) * 190.0;
    vec2 xz = dir * s + perp * l;
    c = vec3(xz.x, 0.5 + aR.y * (0.4 + 0.6 * age), xz.y);
    c.xz += dir * ahead * age * 2.5;   // rolling forward, pushed by the front
    bool inBox = abs(xz.x) < 72.0 && abs(xz.y) < 57.0 && uWaveU > -0.05 && uWaveU < 1.05;
    a = inBox ? smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(0.55, 1.0, age)) : 0.0;
    size = aR.x * (0.8 + 0.5 * age);
    vHot = 0.0;
    float i = floor(h1 * 4.0);
    vCell = vec4(mod(i, 2.0) * 0.5, floor(i * 0.5) * 0.5, h2 < 0.5 ? -1.0 : 1.0, (h3 - 0.5) * 1.2 + age * (aR.w - 0.5) * 1.5);
  }
  vec4 mv = modelViewMatrix * vec4(c, 1.0);
  float dist = -mv.z;
  if (kind < 0.5) {
    float minS = uPix * dist * 3.4;
    float s2 = max(size, minS);
    a *= clamp((size * size) / (s2 * s2), 0.55, 1.0);
    size = s2;
    mv.xy += position.xy * size;
  } else {
    float cs = cos(vCell.w), sn = sin(vCell.w);
    vec2 p = position.xy;
    mv.xy += vec2(cs * p.x - sn * p.y, sn * p.x + cs * p.y) * size * vec2(1.5, 0.75);   // flat, wide sheet
  }
  gl_Position = projectionMatrix * mv;
  vUv = position.xy;
  vA = a * uAmt * smoothstep(0.3, 1.5, dist);
  vKind = kind;
  #ifdef USE_FOG
  vFogDepth = dist;
  #endif
}
`,Z=`
#include <common>
#include <fog_pars_fragment>
uniform sampler2D uAtlas;
uniform vec3 uGlowCol;
uniform vec3 uHaze;
varying vec2 vUv;
varying float vA;
varying float vKind;
varying vec4 vCell;
varying float vHot;
void main(){
  vec4 outc;
  if (vKind < 0.5) {
    vec2 p = vUv * 2.0;
    float r2 = dot(p, p);
    float core = exp(-r2 * 16.0), halo = exp(-r2 * 4.5) * 0.35;
    float i = (core + halo) * vA;
    if (i < 0.003) discard;
    vec3 col = uGlowCol * mix(vec3(1.0, 0.75, 0.55), vec3(1.25, 1.1, 0.9), vHot) * 9.0;
    outc = vec4(col * i, 0.0);   // purely additive
  } else {
    vec2 uv = vUv + 0.5;
    if (vCell.z < 0.0) uv.x = 1.0 - uv.x;
    vec4 t = texture2D(uAtlas, vCell.xy + uv * 0.5);
    float a = t.a * (0.75 + 0.5 * t.g) * vA * 0.2;
    if (a < 0.003) discard;
    vec3 col = uHaze * (0.7 + 0.3 * t.r) + uGlowCol * 0.12 * (1.0 - t.r);
    outc = vec4(col * a, a);
  }
  gl_FragColor = outc;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    gl_FragColor *= 1.0 - fogFactor;
  #endif
}
`;function ge(e,{sparks:t=4200,haze:n=300}={}){let r=t+n,i=new c;i.setAttribute(`position`,new _([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),i.setIndex([0,1,2,0,2,3]);let l=new Float32Array(r*4),u=new Float32Array(r*4);for(let e=0;e<r;e++){let n=e<t;l[e*4]=Math.random(),l[e*4+1]=n?.7+Math.random()*1.1:2.2+Math.random()*1.6,l[e*4+2]=Math.random(),l[e*4+3]=+!n,u[e*4]=n?.1+Math.random()**2*.22:3+Math.random()*3.5,u[e*4+1]=n?3+Math.random()*9:.4+Math.random()*1.2,u[e*4+2]=Math.random(),u[e*4+3]=Math.random()}i.setAttribute(`aP`,new s(l,4)),i.setAttribute(`aR`,new s(u,4)),i.instanceCount=r;let d=Object.assign(p.clone(g.fog),{uTime:e.uTime,uWind:e.uWind,uAtlas:e.uAtlas,uAmt:{value:0},uVel:{value:0},uPix:{value:7e-4},uWaveU:y.uWaveU,uWaveDir:y.uWaveDir,uGlowCol:y.uGlow,uHaze:{value:new C(.62,.56,.5)}}),f=new x({vertexShader:he,fragmentShader:Z,uniforms:d,fog:!0,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201}),m=new a(i,f);m.frustumCulled=!1,m.renderOrder=22,m.name=`fx-front`,m.visible=!1;let h=-9,v=0,b=0;return{mesh:m,uniforms:d,update(e,t,n,r,i){let a=y.uWaveU.value;if(b+=(t-b)*(1-Math.exp(-e*4)),a<-1){h=-9,m.visible=!1,v*=.5;return}if(h>-1&&e>0){let t=(a-h)/e;Math.abs(t)<3&&(v+=(t-v)*Math.min(1,e*6))}if(h=a,d.uVel.value=v,d.uAmt.value=b,m.visible=d.uAmt.value>.003,i&&d.uHaze.value.copy(i),n&&n.isPerspectiveCamera){let e=r&&r.domElement.height||1080;d.uPix.value=2*Math.tan(o.degToRad(n.fov)*.5)/e}}}}var Q=[[1,.78,.56],[1,.97,.92],[1,.6,.46],[.9,.94,1],[.52,.6,.88]],$=[[1,.72,.42],[1,.8,.55],[1,.58,.24],[1,.78,.5],[.8,.88,1]];function _e(e,t){let n=0,r=0,i=0,a=0;for(let t=0;t<5;t++){let o=e?e[t]:+(t===0);n+=Q[t][0]*o,r+=Q[t][1]*o,i+=Q[t][2]*o,a+=o}return a<=0&&(n=r=i=1,a=1),t.setRGB(n/a,r/a,i/a),t}function ve(){let e=new u;e.name=`fx`;let t={uTime:{value:0},uPresence:{value:new Float32Array([1,0,0,0,0])},uWind:{value:new C(1.1,0,.7)},uAtlas:{value:D()},uKey:{value:new C(1,1,1)},uAmb:{value:new C(.5,.55,.62)},uUnder:{value:new C(.12,.08,.05)},uGlowCol:{value:new C(1,.7,.4)},uNight:{value:0}},n=ne(t),r=ie(t),i=H(t),a=G(t),o=oe(t),s=le(t),c=me(),l=ge(t);e.add(o.mesh,i.mesh,r.mesh,n.mesh,a.mesh,s.mesh,c.mesh,l.mesh);let d=new C;for(let[e,t]of[[-20,36],[14,44],[30,-37]])for(let r of[2,3,4])n.addSteam(e,t,r);let f=new C,p={color:new S(1,1,1),night:0,manual:!1},m=new S,h=new S,g=new S,_=0,v=0;function y(e,n){let r=p.night,i=p.color,a=.9*(1-.8*r);t.uKey.value.set(i.r*a+.02*r,i.g*a+.03*r,i.b*a+.06*r),h.setRGB(i.r*.36+.08,i.g*.38+.1,i.b*.4+.13),h.lerp(m.setRGB(.04,.05,.09),r),e&&e.color&&(g.copy(e.color),h.lerp(g.multiplyScalar(.7),.4)),t.uAmb.value.set(h.r,h.g,h.b),t.uNight.value=r;let o=0,s=0,c=0;for(let e=0;e<5;e++){let t=n?n[e]:+(e===0);o+=$[e][0]*t,s+=$[e][1]*t,c+=$[e][2]*t}t.uGlowCol.value.set(o,s,c)}function b(e){let u=Math.min(.1,Math.max(0,e.dt||0));v+=u,t.uTime.value=v;let m=t.uPresence.value;for(let t=0;t<5;t++)m[t]=e.presence?e.presence[t]:+(t===0);p.manual||(_e(e.weights,p.color),p.night=e.night||0),y(e.scene?e.scene.fog:null,e.weights);let h=1+.25*Math.sin(v*.13)+.15*Math.sin(v*.37+1.3);t.uWind.value.set(1.1*h,0,.7*h),n.update(m),r.update(v),i.update(v),a.update(u,_,e.camera,e.renderer),o.update(e.weights||m);let g=e.weights?e.weights[4]:0,b=p.night;f.set(.9,.95,1.08).multiplyScalar(1-.25*b),s.update(g,e.camera,e.renderer,f),c.update(e,u);let x=t.uAmb.value,S=t.uKey.value;d.set(x.x*.6+S.x*.3,x.y*.6+S.y*.28,x.z*.6+S.z*.25),l.update(u,_,e.camera,e.renderer,d)}let x=[0,0,0,0,0];return{group:e,update:b,burst(e,t,n,a=10){r.spawn(v,e,t,n,a),i.spawn(v,e,t,n,a)},addSmokeSource(e,t,r,i,a=1){let o=Math.max(0,Math.min(4,Math.round(i))),s=a;if(t<20){let e=x[o]++,t=Math.random();s*=t<.35?.4:t<.75?.6:.9,e>10&&(s*=.8)}return n.addSmoke(e,t,r,i,s)},addSteamSource(e,t,r){return n.addSteam(e,t,r)},setLight(e,t=0){e&&e.isColor?p.color.copy(e):e&&e.x!==void 0&&p.color.setRGB(e.x,e.y,e.z),p.night=Math.min(1,Math.max(0,t)),p.manual=!0},setTransitionGlow(e){_=Math.min(1,Math.max(0,e||0))}}}export{ve as createFx};
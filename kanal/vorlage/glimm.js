// Glimm: die 3D-Figur von smm.mit.ki. Ein berechnetes Modell (kein Bild) – Posen, Drehung und Bewegung sind Zahlen.
// Die Lampe am Fühler zeigt, wie gut es läuft: aus = schwacher Prompt, Flackern = halb gut, hell = guter Prompt.
// Einsatz:  const g = new Glimm(canvas);  g.zeichne('froh', 900, { uHops: .1 });  oder  Glimm.bild('froh', 900) → PNG-Adresse
const GLIMM_FS = `#version 300 es
precision highp float;
uniform vec2 R;
uniform float uMund, uLid, uBrL, uBrR, uBrH, uLampe, uArmL, uArmR, uSchreck, uDreh, uHops, uStauch, uOhr, uHandy, uVor;
uniform vec3 uPos, uKamZiel, uGrund, uTisch, uLicht, uUmg;
uniform float uKamDreh, uKamHoch, uKamDist, uBrenn, uSet, uKnopf, uAA, uHimmel, uStehlampe, uBildschirm;
out vec4 o;
const vec3 LAMPE = vec3(0., 1.84, .74);
bool nurKoerper = false;
mat2 rot(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
float sdEll(vec3 p, vec3 r){ float k0=length(p/r), k1=length(p/(r*r)); return k0*(k0-1.)/k1; }
float sdCap(vec3 p, vec3 a, vec3 b, float r){ vec3 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.); return length(pa-ba*h)-r; }
float sdBox(vec3 p, vec3 b, float r){ vec3 q=abs(p)-b; return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.)-r; }
float smin(float a, float b, float k){ float h=clamp(.5+.5*(b-a)/k,0.,1.); return mix(b,a,h)-k*h*(1.-h); }
// Welt -> Glimms eigener Raum (Standort, Drehung, Hüpfen, Stauchen)
vec3 lokal(vec3 p){ p-=uPos; p.xz=rot(uDreh)*p.xz; p.y-=uHops; p.y=(p.y+1.3)/(1.+uStauch)-1.3; p.xz/=(1.-uStauch*.5); return p; }
vec3 lampeWelt(){ vec3 l=LAMPE; l.xz*=(1.-uStauch*.5); l.y=(l.y+1.3)*(1.+uStauch)-1.3+uHops; l.xz=rot(-uDreh)*l.xz; return l+uPos; }
vec3 hand(float s){                                    // s = +1 rechte Bildseite, -1 linke
  float arm = s>0. ? uArmR : uArmL;
  vec3 h = vec3(s*(1.36-.2*abs(arm)), -.36+arm*(arm>0.?.84:.5), .45);
  h.x = mix(h.x, s*.5, uVor); h.z += .85*uVor;         // uVor: Hände nach vorn (tippen, drücken)
  if(s>0. && uHandy>.5) h = vec3(.52,-.3,1.04);
  return h;
}
// Material: 1 Körper, 2 Füße/Hände, 3 Augen, 4 Lampe, 5 Mund/Brauen, 6 Bildschirm, 7 Telefon
vec2 glimmMap(vec3 p){
  vec3 q = vec3(abs(p.x), p.y, p.z); float s = sign(p.x);
  float d = sdEll(p-vec3(0.,.62,.05), vec3(1.0,.8,.9));                          // Kopf
  float ru = sdEll(p-vec3(0.,-.42,0.), vec3(1.04,.87,.94));                      // Rumpf: runder Klops
  d = smin(d, ru, .3);
  vec3 f = q-vec3(.9,1.16,-.05); f.xy = rot(-.75+uOhr*s)*f.xy;                   // Ohrflossen
  d = smin(d, sdEll(f, vec3(.5,.2,.13)), .14);
  vec3 hd = hand(s);                                                             // Arme
  d = smin(d, sdCap(p, vec3(s*.86,-.1,.15), hd, .15), .12);
  d = smin(d, sdCap(p, vec3(0.,1.36,0.), vec3(0.,1.9,.16), .055), .12);          // Fühler
  d = smin(d, sdCap(p, vec3(0.,1.9,.16), vec3(0.,1.9,.55), .05), .1);
  d = smin(d, sdCap(p, vec3(0.,-.6,-.75), vec3(0.,-.35,-1.22), .16), .22);       // Schwanzstummel
  vec2 r = vec2(d,1.);
  float fu = sdEll(q-vec3(.46,-1.15,.26), vec3(.32,.17,.43)); if(fu<r.x) r=vec2(fu,2.);
  float ha = smin(length(p-hd)-.2, length(p-hd-vec3(-s*.13,.17,.08))-.085, .07); if(ha<r.x) r=vec2(ha,2.);
  float au = sdEll(q-vec3(.27,.66,.89), vec3(.135,.19,.09)); if(au<r.x) r=vec2(au,3.);
  float la = length(p-LAMPE)-.27; if(la<r.x && !nurKoerper) r=vec2(la,4.);
  float t = s>0. ? uBrR : uBrL;                                                  // Brauen
  float br = sdCap(q, vec3(.13,.95+uBrH-t*.07,.875), vec3(.41,.95+uBrH+t*.07,.81), .036); if(br<r.x) r=vec2(br,5.);
  vec3 m = p; m.y += uMund*.07*(1.-pow(clamp(m.x/.16,-1.,1.),2.));              // Mund
  float mu = mix(sdCap(m, vec3(-.16,.3,.905), vec3(.16,.3,.905), .036), sdEll(p-vec3(0.,.27,.9), vec3(.095,.13,.06)), uSchreck);
  if(mu<r.x) r=vec2(mu,5.);
  if(uHandy>.5){ vec3 t=p-vec3(.52,-.02,1.13); t.yz=rot(-.35)*t.yz; t.xy=rot(.12)*t.xy;
    float te=sdBox(t, vec3(.17,.31,.012), .03); if(te<r.x) r=vec2(te, (t.z>.02 && abs(t.x)<.15 && abs(t.y)<.28) ? 6. : 7.); }
  return r;
}
float sdCyl(vec3 p, float r, float h){ vec2 d=vec2(length(p.xz)-r, abs(p.y)-h); return min(max(d.x,d.y),0.)+length(max(d,0.)); }
// ---------- Glimms Büro ----------
// Ein Zimmer: Boden y=-1.3, Rückwand z=-3.4, Seitenwände x=±4.8. Die Kamera muss innerhalb bleiben.
// Material: 10 Wände/Boden, 13 Bildschirm, 14 Tasse, 15 Knopf, 16 Knopfsockel, 20 weiß, 21 Fenster (Himmel), 22 Bücher, 23 Topf, 24 Blätter,
//           25 Holz, 26 dunkel, 27 koralle, 28 mint, 29 blau, 30 Lampenschirm, 31 Ringlicht
vec2 rueckwand(vec3 p){                                                          // alles an der Rückwand
  if(p.z>-1.2) return vec2(p.z+1.5, 20.);
  vec3 w = p-vec3(-2.0,1.75,-3.4);                                               // Fenster mit Bank
  float d = max(sdBox(w, vec3(1.07,1.17,.1), .02), -sdBox(w, vec3(.95,1.05,.5), 0.));
  d = min(d, min(sdBox(w, vec3(.035,1.05,.05), 0.), sdBox(w, vec3(.95,.035,.05), 0.)));
  d = min(d, sdBox(w-vec3(0.,-1.22,.14), vec3(1.15,.035,.18), .01));
  vec2 r = vec2(d,20.);
  float gl = sdBox(w, vec3(.95,1.05,.01), 0.); if(gl<r.x) r=vec2(gl,21.);
  vec3 s = p-vec3(2.0,0.,-3.2);                                                  // Regal: zwei Bretter
  float br = min(sdBox(s-vec3(0.,1.3,0.), vec3(.9,.035,.2), .01), sdBox(s-vec3(0.,2.25,0.), vec3(.9,.035,.2), .01)); if(br<r.x) r=vec2(br,25.);
  for(int i=0;i<5;i++){ float fi=float(i), h=.27+.05*mod(fi,2.)+.03*mod(fi,3.);
    float bu=sdBox(s-vec3(-.68+.16*fi,1.345+h,0.), vec3(.06,h,.15), .01); if(bu<r.x) r=vec2(bu,22.); }
  vec3 lb=s-vec3(.42,1.345,0.); lb.xy=rot(-.5)*lb.xy; float lbu=sdBox(lb-vec3(0.,.3,0.), vec3(.06,.3,.15), .01); if(lbu<r.x) r=vec2(lbu,22.);
  float st=min(sdBox(s-vec3(-.45,2.34,0.), vec3(.3,.05,.16), .01), sdBox(s-vec3(-.4,2.45,0.), vec3(.24,.045,.15), .01)); if(st<r.x) r=vec2(st,22.);
  vec3 hz=s-vec3(.42,2.56,0.); vec2 hr=rot(.785)*hz.xy;                           // Like-Herz
  float he=min(max(abs(hr.x),abs(hr.y))-.13, min(length(hz.xy-vec2(.092,.092)),length(hz.xy-vec2(-.092,.092)))-.13);
  he=max(he, abs(hz.z)-.06)-.02; if(he<r.x) r=vec2(he,27.);
  float sb=sdBox(s-vec3(0.,-.78,.02), vec3(.9,.42,.26), .03); if(sb<r.x) r=vec2(sb,29.);        // Sideboard
  vec3 k=s-vec3(-.45,-.33,0.);                                                    // Kaffeemaschine mit Tasse
  float km=min(sdBox(k-vec3(0.,.02,.02), vec3(.2,.02,.18), .01), min(sdBox(k-vec3(0.,.3,-.1), vec3(.2,.3,.06), .01), sdBox(k-vec3(0.,.52,.02), vec3(.2,.08,.18), .01)));
  if(km<r.x) r=vec2(km,26.);
  float kc=sdCyl(k-vec3(0.,.12,.06), .07, .07)-.01; if(kc<r.x) r=vec2(kc,14.);
  vec3 kp=s-vec3(.5,-.33,0.); float kt=sdCyl(kp-vec3(0.,.13,0.), .14, .12)-.02; if(kt<r.x) r=vec2(kt,23.);       // kleiner Kaktus
  float ka=sdEll(kp-vec3(0.,.5,0.), vec3(.12,.27,.12)); if(ka<r.x) r=vec2(ka,24.);
  vec3 t = p-vec3(-3.35,-1.3,-2.75);                                             // große Topfpflanze
  float to=max(length(t.xz)-(.28+.1*t.y), abs(t.y-.3)-.3)-.03; if(to<r.x) r=vec2(to,23.);
  for(int i=0;i<6;i++){ vec3 l=t-vec3(0.,.55,0.); l.xz=rot(float(i)*1.047+.3)*l.xz; l.xy=rot(-.42-.12*mod(float(i),2.))*l.xy;
    float bl=sdEll(l-vec3(0.,.62,0.), vec3(.16,.62,.045)); if(bl<r.x) r=vec2(bl,24.); }
  vec3 bs=p-vec3(-1.7,-.84,-2.4);                                                 // Sitzsack mit Kuhle
  float si=sdEll(bs, vec3(.82,.5,.72)); si=-smin(-si, length(bs-vec3(0.,.62,.3))-.5, .2); if(si<r.x) r=vec2(si,28.);
  vec3 la=p-vec3(3.1,0.,-2.3);                                                    // Stehlampe
  float lp=min(sdCap(la, vec3(0.,-1.3,0.), vec3(0.,1.3,0.), .03), sdCyl(la-vec3(0.,-1.27,0.), .26, .03)); if(lp<r.x) r=vec2(lp,26.);
  float ls=sdCyl(la-vec3(0.,1.45,0.), .34, .22)-.02; if(ls<r.x && !nurKoerper) r=vec2(ls,30.);
  return r;
}
vec2 tischgruppe(vec3 p){                                                        // Schreibtisch mit Monitor, Tastatur, Tasse, Stuhl; steht bei uTisch
  vec3 t = p-uTisch;
  float b = sdBox(t-vec3(.4,0.,-.55), vec3(2.7,1.5,1.6), 0.); if(b>.5) return vec2(b,25.);
  vec2 r = vec2(sdBox(t-vec3(0.,-.035,0.), vec3(1.5,.035,.6), .02), 25.);
  vec3 l = vec3(abs(t.x)-1.38, t.y, abs(t.z)-.5);
  float be = sdCap(l, vec3(0.,-.06,0.), vec3(0.,-.66,0.), .045); if(be<r.x) r=vec2(be,26.);
  float ta = sdBox(t-vec3(0.,.03,-.22), vec3(.38,.012,.13), .015); if(ta<r.x) r=vec2(ta,26.);
  vec3 m = t-vec3(-.9,0.,.15); m.xz = rot(.55)*m.xz;                             // Monitor, zu Glimm gedreht
  float mf = min(sdBox(m-vec3(0.,.02,0.), vec3(.2,.012,.14), .01), sdCap(m, vec3(0.,.02,.04), vec3(0.,.4,.04), .03)); if(mf<r.x) r=vec2(mf,26.);
  float ms = sdBox(m-vec3(0.,.64,0.), vec3(.56,.35,.018), .02); if(ms<r.x) r=vec2(ms, m.z<-.012 && abs(m.x)<.52 && abs(m.y-.64)<.31 ? 13. : 26.);
  float cu = sdCyl(t-vec3(1.05,.13,.1), .12, .11)-.02; if(cu<r.x) r=vec2(cu,14.);
  if(uSet>1.5&&uSet<2.5){ vec3 k = t-vec3(.48,0.,-.28);                          // Speichern-Knopf
    float so = sdCyl(k-vec3(0.,.05,0.), .4, .04)-.03; if(so<r.x) r=vec2(so,16.);
    float kn = sdEll(k-vec3(0.,.1+.07*(1.-uKnopf),0.), vec3(.32,.07+.11*(1.-uKnopf),.32)); if(kn<r.x) r=vec2(kn,15.); }
  vec3 c = t-vec3(2.1,0.,-1.3); c.xz = rot(-.5)*c.xz;                            // Bürostuhl
  float sz = min(sdBox(c-vec3(0.,-.1,0.), vec3(.4,.06,.38), .05), sdBox(c-vec3(0.,.5,-.4), vec3(.38,.36,.04), .05)); if(sz<r.x) r=vec2(sz,27.);
  float sg = min(min(sdCap(c, vec3(0.,-.1,-.38), vec3(0.,.3,-.42), .035), sdCap(c, vec3(0.,-.15,0.), vec3(0.,-.6,0.), .04)), sdCyl(c-vec3(0.,-.65,0.), .38, .025)); if(sg<r.x) r=vec2(sg,26.);
  return r;
}
vec2 ringlicht(vec3 p){                                                          // Ringlicht auf Stativ mit Handy
  vec3 o = p-vec3(-2.3,0.,-.8);
  float b = sdCyl(o-vec3(0.,.5,0.), .7, 2.); if(b>.5) return vec2(b,26.);
  vec2 r = vec2(min(sdCap(o, vec3(0.,-1.3,0.), vec3(0.,1.2,0.), .035), sdCyl(o-vec3(0.,-1.27,0.), .3, .03)), 26.);
  vec3 q = o-vec3(0.,1.75,0.); q.xz = rot(-.45)*q.xz;
  float ri = length(vec2(length(q.xy)-.46, q.z))-.065; if(ri<r.x && !nurKoerper) r=vec2(ri,31.);
  float ph = sdBox(q, vec3(.11,.2,.012), .02); if(ph<r.x) r=vec2(ph,26.);
  return r;
}
// Blick aus dem Fenster. uHimmel: 0 Abend, 1 Nacht, 2 Morgen
vec3 himmel(vec2 u){
  bool ab=uHimmel<.5, na=uHimmel>.5&&uHimmel<1.5;
  vec3 c = mix(ab?vec3(1.,.5,.22):na?vec3(.08,.1,.3):vec3(.75,.88,1.), ab?vec3(.36,.33,.75):na?vec3(.02,.03,.12):vec3(.25,.55,1.), smoothstep(-.6,1.,u.y));
  vec2 sp = ab?vec2(.35,-.2):na?vec2(-.4,.5):vec2(.45,.55); float sd=length(u-sp);
  vec3 sf = ab?vec3(1.,.85,.45):na?vec3(.95,.95,.85):vec3(1.,.97,.8);
  c = mix(c, sf, smoothstep(.24,.2,sd)); c += sf*.25*exp(-sd*3.);
  if(na){ vec2 g=floor(u*9.); float h=fract(sin(dot(g,vec2(12.9,78.2)))*43758.5); c+=step(.86,h)*smoothstep(.12,0.,length(fract(u*9.)-.5))*step(-.1,u.y); }
  else { float w=smoothstep(.22,.1,length((u-vec2(-.35,.45))*vec2(.5,1.3)))+smoothstep(.2,.08,length((u-vec2(.1,.12))*vec2(.45,1.4))); c=mix(c, ab?vec3(1.,.72,.62):vec3(1.), clamp(w,0.,1.)*.85); }
  float bx=floor((u.x+1.)*4.), hh=-.72+.5*fract(sin(bx*17.3)*91.7);              // Häuser
  if(u.y<hh){ c = ab?vec3(.2,.13,.3):na?vec3(.015,.02,.07):vec3(.3,.42,.7);
    vec2 f=fract(vec2((u.x+1.)*12., u.y*9.)); float an=step(.5,fract(sin(dot(floor(vec2((u.x+1.)*12., u.y*9.)),vec2(3.1,7.7)))*517.3));
    if(!(!ab&&!na)&&f.x>.25&&f.x<.75&&f.y>.25&&f.y<.75&&an>.5) c=vec3(1.,.8,.35); }
  return c;
}
// Kulisse (uSet): 0 keine (durchsichtiger Grund), 1 Büro, 2 Büro mit Speichern-Knopf auf dem Schreibtisch, 3 Büro (wie 1)
vec2 map(vec3 p){
  vec3 gp = lokal(p); float gb = length(gp-vec3(0.,.35,0.))-2.5;               // weit weg von Glimm: nur Abstand schätzen (spart Rechenzeit)
  vec2 r = gb>.5 ? vec2(gb,1.) : glimmMap(gp);
  if(uSet>.5){
    float ra = min(min(p.y+1.3, p.z+3.4), min(p.x+4.8, 4.8-p.x)); if(ra<r.x) r=vec2(ra,10.);
    vec2 e = rueckwand(p); if(e.x<r.x) r=e;
    e = tischgruppe(p); if(e.x<r.x) r=e;
    e = ringlicht(p); if(e.x<r.x) r=e;
  }
  return r;
}
vec3 normale(vec3 p){ const vec2 k=vec2(1.,-1.); const float e=.0015; return normalize(k.xyy*map(p+k.xyy*e).x + k.yyx*map(p+k.yyx*e).x + k.yxy*map(p+k.yxy*e).x + k.xxx*map(p+k.xxx*e).x); }
float schatten(vec3 ro, vec3 rd){ nurKoerper=true; float s=1., t=.05; for(int i=0;i<24;i++){ float h=map(ro+rd*t).x; s=min(s,9.*h/t); t+=clamp(h,.04,.45); if(s<.01||t>7.) break; } nurKoerper=false; return clamp(s,0.,1.); }
float ao(vec3 p, vec3 n){ float a=0., s=1.; for(int i=1;i<=4;i++){ float h=.07*float(i); a+=(h-map(p+n*h).x)*s; s*=.6; } return clamp(1.-2.2*a,0.,1.); }
vec4 bild(vec2 uv){
  vec3 ro = uKamZiel + uKamDist*vec3(sin(uKamDreh)*cos(uKamHoch), sin(uKamHoch), cos(uKamDreh)*cos(uKamHoch));
  vec3 fw = normalize(uKamZiel-ro), re = normalize(cross(fw,vec3(0.,1.,0.))), ho = cross(re,fw);
  vec3 rd = normalize(uv.x*re + uv.y*ho + uBrenn*fw);
  vec3 L = normalize(vec3(.55,.85,.65)), lpos = lampeWelt();
  const vec3 LILA = vec3(.63,.52,1.);
  float t=1., mat=0., glimm=9.;
  for(int i=0;i<120;i++){ vec3 p=ro+rd*t; vec2 h=map(p); glimm=min(glimm,length(p-lpos)); if(h.x<.0015){ mat=h.y; break; } t+=h.x*.85; if(t>40.) break; }
  vec4 aus=vec4(0.); float schattenA=0.;
  if(mat>0.){
    vec3 p=ro+rd*t, n=normale(p), q=lokal(p);
    vec3 alb=vec3(1.,.955,.87); float glanz=.22, hell=0.;
    if(mat<1.5){
      alb=mix(alb, LILA, smoothstep(.8,1.08,abs(q.x))*step(.85,q.y));                               // Ohren
      alb=mix(alb, LILA, smoothstep(.07,.045,abs(abs(q.x)-.24))*smoothstep(.95,1.12,q.y)*step(q.y,1.5)); // Stirnstreifen
      alb=mix(alb, LILA, smoothstep(1.42,1.75,q.y)*step(abs(q.x),.3));                              // Fühler
      alb=mix(alb, LILA, smoothstep(-.8,-1.1,q.z)*step(q.y,-.1));                                   // Schwanz
      for(int i=0;i<3;i++){ vec2 fl=vec2(.56+.1*float(i), .42-.04*float(i)*float(i)+.07*float(i)); alb=mix(alb, LILA, smoothstep(.05,.035,length(vec2(abs(q.x),q.y)-fl))*step(0.,q.z)); }
      alb=mix(alb, vec3(1.,.985,.95), smoothstep(.55,.1,length((q-vec3(0.,-.45,1.)).xy))*.7*step(0.,q.z)); // Bauch
    } else if(mat<2.5){ alb=vec3(.11,.10,.29); glanz=.45; }
    else if(mat<3.5){ if(q.y > .66+.2*(1.-2.*uLid)){ alb=vec3(.9,.82,.86); } else { alb=vec3(.07,.06,.2); glanz=1.6; } }
    else if(mat<4.5){ alb=mix(vec3(.6,.57,.5), vec3(1.,.88,.29), .2+.8*uLampe); hell=uLampe*.8; }
    else if(mat<5.5){ alb=vec3(.1,.08,.25); glanz=.1; }
    else if(mat<6.5){ alb=vec3(.75,.85,1.); hell=.55; glanz=.6; }
    else if(mat<7.5){ alb=vec3(.1,.09,.2); glanz=.7; }
    else if(mat<10.5){ alb=pow(uGrund,vec3(2.2)); glanz=0.;
      if(p.y<-1.27){                                                               // Holzboden mit Dielen und rundem Teppich
        float v=p.z*2.3, id=floor(v), h=fract(sin(id*12.9)*43758.5); alb=vec3(.52,.3,.14)*(.82+.3*h);
        alb*=1.-.35*smoothstep(.05,0.,fract(v))-.3*smoothstep(.03,0.,abs(fract(p.x*.45+h*7.)-.5));
        float tr=length(p.xz-vec2(0.,-.3)); alb=mix(alb, vec3(.6,.5,1.), smoothstep(2.35,2.3,tr)); alb=mix(alb, vec3(.45,.35,1.), smoothstep(.06,.04,abs(tr-2.05))); }
      else { if(p.y<-1.08) alb=vec3(.85,.8,.74);                                   // Sockelleiste
        if(p.z<-3.3){ vec2 kc=(p.xy-vec2(-.55,.85))/vec2(1.25,1.45);               // Rückwand: Wandkalender = Redaktionsplan, daneben Klebezettel
          if(kc.x>0.&&kc.x<1.&&kc.y>0.&&kc.y<1.){ alb=vec3(.94,.9,.84);
            if(kc.y>.84) alb=vec3(.11,.10,.29);
            else { vec2 z=vec2(kc.x*5., kc.y/.84*4.), zi=floor(z), zf=fract(z); float h=fract(sin(dot(zi,vec2(12.9,78.2)))*43758.5);
              if(zf.x>.14&&zf.x<.86&&zf.y>.16&&zf.y<.84) alb = h<.2 ? vec3(1.,.25,.14) : h<.4 ? vec3(.05,.7,.45) : h<.55 ? vec3(.08,.15,1.) : h<.7 ? vec3(1.,.75,.07) : vec3(.72,.72,.78); } }
          vec2 zc=(p.xy-vec2(.85,1.2))/.34; vec2 zi=floor(zc), zf=fract(zc);
          if(zi.x>=0.&&zi.x<2.&&zi.y>=0.&&zi.y<3.&&zf.x>.1&&zf.x<.9&&zf.y>.1&&zf.y<.9&&mod(zi.x+zi.y*2.,5.)!=4.) alb = mod(zi.x+zi.y,3.)<.5 ? vec3(1.,.75,.07) : mod(zi.x+zi.y,3.)<1.5 ? vec3(1.,.3,.25) : vec3(.1,.75,.5); }
        else if(abs(p.x)>4.7){ vec2 bc=vec2(p.z+2.9, p.y-.9);                       // Seitenwände: zwei gerahmte Bilder
          for(int i=0;i<2;i++){ vec2 q=(bc-vec2(float(i)*1.7,0.))/vec2(1.3,1.6);
            if(q.x>0.&&q.x<1.&&q.y>0.&&q.y<1.){ alb=vec3(.11,.10,.29);
              if(q.x>.07&&q.x<.93&&q.y>.06&&q.y<.94){ alb = i==0 ? vec3(.1,.75,.5) : vec3(.08,.15,1.);
                alb=mix(alb, vec3(1.,.75,.07), smoothstep(.2,.18,length((q-vec2(.62,.66))*vec2(1.,1.25))));
                if(q.y<.3+.12*sin(q.x*7.+float(i)*2.)) alb=vec3(1.,.3,.25); } } } } } }
    else if(mat<13.5){ alb=vec3(.7,.82,1.); hell=.5+.5*uBildschirm; glanz=.3; }
    else if(mat<14.5){ alb=vec3(1.,.97,.93); glanz=.5; }
    else if(mat<15.5){ alb=vec3(1.,.83,.2); glanz=.7; hell=.15; }
    else if(mat<16.5){ alb=vec3(.11,.10,.29); glanz=.4; }
    else if(mat<20.5){ alb=vec3(.95,.92,.88); glanz=.2; }
    else if(mat<21.5){ alb=vec3(0.); }
    else if(mat<22.5){ float bi=mod(floor((p.x-1.24)/.16)+floor(p.y*1.7),5.); glanz=.15;
      alb = bi<.5 ? vec3(1.,.25,.14) : bi<1.5 ? vec3(.05,.7,.45) : bi<2.5 ? vec3(.08,.15,1.) : bi<3.5 ? vec3(1.,.75,.07) : vec3(.48,.36,1.); }
    else if(mat<23.5){ alb=vec3(.95,.9,.85); glanz=.4; }
    else if(mat<24.5){ alb=vec3(.05,.42,.22); glanz=.25; }
    else if(mat<25.5){ alb=vec3(.66,.42,.22); glanz=.2; }
    else if(mat<26.5){ alb=vec3(.07,.065,.2); glanz=.5; }
    else if(mat<27.5){ alb=vec3(1.,.25,.14); glanz=.35; }
    else if(mat<28.5){ alb=vec3(.05,.7,.45); glanz=.1; }
    else if(mat<29.5){ alb=vec3(.1,.17,.85); glanz=.3; }
    else if(mat<30.5){ alb=vec3(1.,.86,.62); hell=.15+1.3*uStehlampe; }
    else { alb=vec3(1.,.97,.9); hell=.9; }
    float dif=clamp(dot(n,L),0.,1.), sh=schatten(p+n*.01,L), occ=ao(p,n);
    float wrap=clamp(dot(n,L)*.5+.5,0.,1.);
    vec3 col=alb*(uLicht*dif*sh*1.05 + uUmg*(vec3(.55,.50,.80)*wrap*.45 + vec3(.45,.5,.9)*clamp(.5+.5*n.y,0.,1.)*.25)*occ);
    if(mat>9.5){ col+=alb*uUmg*.3*occ;                                            // Raum und Möbel: etwas indirektes Licht
      vec3 sp=vec3(3.1,1.45,-2.3)-p; float sd=length(sp); col+=alb*vec3(1.,.7,.36)*uStehlampe*clamp(dot(n,sp/sd)*.6+.4,0.,1.)*3./(1.+.45*sd*sd); }
    if(uSet>.5){ vec3 bp=uTisch+vec3(-.7,.6,-.1)-p; float bd=length(bp); col+=alb*vec3(.45,.62,1.)*uBildschirm*clamp(dot(n,bp/bd)*.8+.2,0.,1.)*1.6/(1.+1.1*bd*bd); }
    vec3 lp=lpos-p; float ld=length(lp);                                         // Lampe leuchtet auf Glimm und Umgebung
    col+=alb*vec3(1.,.8,.15)*uLampe*clamp(dot(n,lp/ld)*.7+.3,0.,1.)*1.5/(1.+2.2*ld*ld);
    vec3 hv=normalize(L-rd); col+=glanz*pow(clamp(dot(n,hv),0.,1.),mat>2.5&&mat<3.5?90.:28.)*sh;
    if(mat<9.5||mat>10.5) col+=vec3(.6,.6,1.)*pow(1.-clamp(dot(n,-rd),0.,1.),3.)*.22*occ;
    col+=alb*hell;
    if(mat>20.5&&mat<21.5) col=pow(himmel((p.xy-vec2(-2.,1.75))/vec2(.95,1.05)),vec3(2.2));
    aus=vec4(col,1.);
  } else if(uSet<.5){
    float tb=(-1.3-ro.y)/rd.y;                                                   // ohne Kulisse: nur Schatten am Boden
    if(tb>0.){ vec3 p=ro+rd*tb; float s=1.-schatten(p,L); float nah=exp(-2.2*max(map(p).x,0.));
      schattenA=clamp(.3*s+.28*nah,0.,.46)*smoothstep(2.6,1.2,length(p.xz-uPos.xz)); }
  } else aus=vec4(pow(uGrund,vec3(2.2)),1.);
  float frei = (mat>0.&&mat<9.5) ? 0. : 1.;
  float g=uLampe*(exp(-max(glimm-.27,0.)*5.5)*.6)*frei;                          // Lichtschein
  if(aus.a>0.) aus.rgb=pow(max(aus.rgb,0.),vec3(1./2.2)); else aus=vec4(vec3(.11,.10,.29)*schattenA,schattenA)*(1.-g);
  if(aus.a>.99) aus.rgb=mix(aus.rgb, vec3(1.,.9,.4), g); else aus+=vec4(vec3(1.,.9,.4)*g,g);
  return aus;
}
void main(){
  vec4 s=vec4(0.); int n=int(uAA);
  for(int i=0;i<n;i++) for(int j=0;j<n;j++){ vec2 fc=gl_FragCoord.xy+(vec2(float(i),float(j))+.5)/float(n)-.5; s+=bild((fc*2.-R)/R.y); }
  o=clamp(s/float(n*n),0.,1.);
}`;

// Brauen: uBrL/uBrR kippen die Braue (plus = innen tiefer, streng; minus = innen höher, besorgt), uBrH hebt beide.
// uArmL/uArmR: -1 hängt, 0 zur Seite, 1 hoch. L = linke Bildseite.
const GLIMM_LAUNEN = {
  froh:      { uMund: 1,   uLid: .05, uBrL: -.2, uBrR: -.2, uBrH: .05,  uLampe: 1,   uArmL: .95, uArmR: .95, uSchreck: 0, uDreh: 0,   uHandy: 0 },
  stolz:     { uMund: .9,  uLid: .45, uBrL: 0,   uBrR: 0,   uBrH: .05,  uLampe: 1,   uArmL: -.5, uArmR: -.5, uSchreck: 0, uDreh: -.3, uHandy: 0 },
  schreck:   { uMund: 0,   uLid: 0,   uBrL: -.9, uBrR: -.9, uBrH: .1,   uLampe: .2,  uArmL: 1,   uArmR: 1,   uSchreck: 1, uDreh: 0,   uHandy: 0 },
  genervt:   { uMund: -.6, uLid: .5,  uBrL: .35, uBrR: .35, uBrH: -.07, uLampe: 0,   uArmL: -1,  uArmR: -1,  uSchreck: 0, uDreh: .25, uHandy: 0 },
  skeptisch: { uMund: -.2, uLid: .3,  uBrL: .7,  uBrR: -.6, uBrH: 0,    uLampe: .45, uArmL: -1,  uArmR: .5,  uSchreck: 0, uDreh: .35, uHandy: 0 },
  zeigt:     { uMund: .8,  uLid: .1,  uBrL: -.2, uBrR: -.2, uBrH: .05,  uLampe: 1,   uArmL: .1,  uArmR: -.6, uSchreck: 0, uDreh: .3,  uHandy: 0 },
  handy:     { uMund: -.1, uLid: .35, uBrL: -.6, uBrR: -.6, uBrH: .02,  uLampe: .3,  uArmL: -1,  uArmR: 0,   uSchreck: 0, uDreh: -.25, uHandy: 1 }
};

// Standard: Glimm allein vor durchsichtigem Grund, Kamera von vorn. Kamera: uKamZiel (Blickpunkt), uKamDreh/uKamHoch (Winkel), uKamDist.
const GLIMM_STANDARD = { uHops: 0, uStauch: 0, uOhr: 0, uVor: 0, uPos: [0, 0, 0], uKamZiel: [0, .7, 0], uKamDreh: 0, uKamHoch: -.04, uKamDist: 7, uBrenn: 2.99,
  uSet: 0, uGrund: [.98, .86, .78], uLicht: [1, .97, .92], uUmg: [1, 1, 1], uHimmel: 2, uStehlampe: 0, uBildschirm: 0, uTisch: [0, -.62, .75], uKnopf: 0, uAA: 2 };

class Glimm {
  constructor(canvas) {
    this.c = canvas || document.createElement('canvas');
    const gl = this.gl = this.c.getContext('webgl2', { premultipliedAlpha: true, preserveDrawingBuffer: true, alpha: true });
    const sh = (t, s) => { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(x); return x; };
    const pr = this.pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, GLIMM_FS));
    gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  }
  // laune: Name aus GLIMM_LAUNEN oder eigenes Objekt; extra überschreibt einzelne Werte (Bewegung, Kamera, Kulisse)
  zeichne(laune, breite = 900, extra = {}, hoehe = breite) {
    const gl = this.gl, c = this.c;
    if (c.width !== breite || c.height !== hoehe) { c.width = breite; c.height = hoehe; }
    gl.viewport(0, 0, breite, hoehe);
    const u = { ...GLIMM_STANDARD, ...(typeof laune === 'string' ? GLIMM_LAUNEN[laune] : laune), ...extra };
    gl.uniform2f(gl.getUniformLocation(this.pr, 'R'), breite, hoehe);
    for (const k in u) { const o = gl.getUniformLocation(this.pr, k); Array.isArray(u[k]) ? gl.uniform3fv(o, u[k]) : gl.uniform1f(o, u[k]); }
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3); gl.finish();
  }
  static bild(laune, groesse = 900, extra = {}) { Glimm._g = Glimm._g || new Glimm(); Glimm._g.zeichne(laune, groesse, extra); return Glimm._g.c.toDataURL('image/png'); }
  // Übergang zwischen zwei Launen, k von 0 bis 1
  static misch(a, b, k) { const A = GLIMM_LAUNEN[a], B = GLIMM_LAUNEN[b], r = {}; for (const x in A) r[x] = A[x] + (B[x] - A[x]) * k; r.uHandy = k < .5 ? A.uHandy : B.uHandy; return r; }
}

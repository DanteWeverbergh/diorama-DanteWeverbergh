(this["webpackJsonpgmd-xr-three"]=this["webpackJsonpgmd-xr-three"]||[]).push([[0],{77:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(33),r=a.n(i),s=(a(77),a(16)),c=a(41),l=a(21),b=a(0),u=a(106),j=a(107),O=a(73),h=a(101),m=a(108),f=a(62),p=a(15),d=a(8),g=a(102),x=a(4),v=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(65280),r=Object(d.a)(i,2),s=r[0],c=r[1];return Object(x.jsxs)("group",{onClick:function(){return c(16711680)},onDoubleClick:function(){return c(255)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)},children:[Object(x.jsxs)("mesh",{children:[Object(x.jsx)("meshBasicMaterial",{color:s,opacity:a?.75:1,transparent:!0}),Object(x.jsx)("planeGeometry",{args:[1,.5]})]}),Object(x.jsx)(g.a,{fontSize:.2,position:[0,0,.01],children:"Click Me!"})]})},y=a(11),S=a(35),C=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),c=s[0],l=s[1],u=Object(n.useState)(16711680),j=Object(d.a)(u,2),O=j[0],h=j[1],m=Object(S.useSpring)({opacity:c?.5:.2,rotation:c?[b.MathUtils.degToRad(-45),0,0]:[0,0,0],scale:o?[1.5,1.25,1]:[1,1,1]}),f=m.opacity,p=m.rotation,v=m.scale;return Object(x.jsxs)(S.animated.group,Object(y.a)(Object(y.a)({},e),{},{onClick:function(){return l(!c)},onDoubleClick:function(){return h(O>>8)},onPointerOut:function(){return i(!1)},onPointerOver:function(){return i(!0)},rotation:p,children:[Object(x.jsxs)(S.animated.mesh,{scale:v,children:[Object(x.jsx)("planeGeometry",{args:[1,.5]}),Object(x.jsx)(S.animated.meshBasicMaterial,{color:16711680,opacity:f,transparent:!0})]}),Object(x.jsx)(g.a,{color:"white",fontSize:.2,position:[0,0,.01],children:"Click Me!"})]}))},L=Object.freeze({Default:"Default",Spring:"Spring"}),R=function(){var e=Object(p.b)("Components",{useButton:{label:"Button",options:L,value:L.Default}}).useButton;function t(t){return e===t}return Object(x.jsxs)(x.Fragment,{children:[t(L.Default)&&Object(x.jsx)(v,{}),t(L.Spring)&&Object(x.jsx)(C,{})]})},M=a(2),H=a(3),T=a(23),D=a(32),w={LEFT:"KeyQ",UP:"KeyZ"},I=-1,A=-1,k=1,z=-1,E=0,P=1,N=1,F={LEFT:"KeyA",UP:"KeyW"},G=Object(D.a)("forwardDirection"),K=Object(D.a)("keyboard"),_=Object(D.a)("rightDirection"),U=Object(D.a)("upDirection"),B=function(){function e(){Object(M.a)(this,e)}return Object(H.a)(e,null,[{key:"forwardDirection",get:function(){return Object(T.a)(this,G)[G]}},{key:"rightDirection",get:function(){return Object(T.a)(this,_)[_]}},{key:"upDirection",get:function(){return Object(T.a)(this,U)[U]}},{key:"keyDownHandler",value:function(t){switch(console.log("KeyboardControls: keyDownHandler","'".concat(t.code,"'")),t.code){case"ArrowDown":case"KeyS":Object(T.a)(e,G)[G]=I;break;case"ArrowLeft":case Object(T.a)(e,K)[K].LEFT:Object(T.a)(e,_)[_]=z;break;case"ArrowRight":case"KeyD":Object(T.a)(e,_)[_]=P;break;case"ArrowUp":case Object(T.a)(e,K)[K].UP:Object(T.a)(e,G)[G]=k;break;case"KeyF":Object(T.a)(e,U)[U]=A;break;case"KeyR":Object(T.a)(e,U)[U]=N}}},{key:"keyUpHandler",value:function(t){switch(console.log("KeyboardControls: keyUpHandler","'".concat(t.code,"'")),t.code){case"ArrowDown":case"ArrowUp":case"KeyS":case Object(T.a)(e,K)[K].UP:Object(T.a)(e,G)[G]=E;break;case"ArrowLeft":case"ArrowRight":case"KeyD":case Object(T.a)(e,K)[K].LEFT:Object(T.a)(e,_)[_]=E;break;case"KeyF":case"KeyR":Object(T.a)(e,U)[U]=E}}},{key:"addEventListeners",value:function(){console.info("KeyboardControls: addEventListeners"),window.addEventListener("keydown",e.keyDownHandler),window.addEventListener("keyup",e.keyUpHandler)}},{key:"removeEventListeners",value:function(){console.info("KeyboardControls: removeEventListeners"),window.removeEventListener("keydown",e.keyDownHandler),window.removeEventListener("keyup",e.keyUpHandler)}},{key:"setKeyboardAzerty",value:function(){console.log(Object(T.a)(this,K)[K]),Object(T.a)(this,K)[K]=w,console.log(Object(T.a)(this,K)[K])}},{key:"setKeyboardQwerty",value:function(){Object(T.a)(this,K)[K]=F}}]),e}();Object.defineProperty(B,G,{writable:!0,value:E}),Object.defineProperty(B,K,{writable:!0,value:F}),Object.defineProperty(B,_,{writable:!0,value:E}),Object.defineProperty(B,U,{writable:!0,value:E});var W=Object(D.a)("radius"),X=Object(D.a)("angle"),Y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(M.a)(this,e),Object.defineProperty(this,W,{writable:!0,value:1}),Object.defineProperty(this,X,{writable:!0,value:0}),Object(T.a)(this,W)[W]=t}return Object(H.a)(e,[{key:"angle",get:function(){return Object(T.a)(this,X)[X]},set:function(e){Object(T.a)(this,X)[X]=b.MathUtils.degToRad(e)}},{key:"getCoordinates",value:function(e){return this.angle=e,{x:Math.cos(this.angle)*Object(T.a)(this,W)[W],y:Math.sin(this.angle)*Object(T.a)(this,W)[W]}}}]),e}(),Z=Y;function V(e){return!(e%5)}var Q=Object.freeze({HAND:{HH:{LENGTH:1.2,WIDTH:.04},MM:{LENGTH:1.4},SS:{COLOR:16764006,LENGTH:1.6},THICKNESS:.04},MARK:{HH:{COLOR:16711680,LENGTH:.2,WIDTH:.04},MM:{COLOR:16777215,LENGTH:.16,WIDTH:.02},OFFSET:.1}}),J=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useRef)(),r=b.MathUtils.degToRad(90);return Object(s.f)((function(){var e=new Date;a.current&&(a.current.rotation.z=b.MathUtils.degToRad(-30*(e.getHours()+e.getMinutes()/60))),o.current&&(o.current.rotation.z=b.MathUtils.degToRad(-6*e.getMinutes())),i.current&&(i.current.rotation.z=b.MathUtils.degToRad(-6*e.getSeconds()))})),Object(x.jsxs)("group",Object(y.a)(Object(y.a)({ref:t},e),{},{children:[Object(x.jsxs)("group",{children:[Object(x.jsx)(g.a,{color:"black",fontSize:.2,position:[0,-.25,.01].map((function(e){return 2*e})),children:"Arteveldehogeschool"}),Array(12).fill(null).map((function(e,t){var a=360*t/12+90,n=new Z(7.5*Q.MARK.HH.LENGTH).getCoordinates(a),o=n.x,i=n.y;return Object(x.jsx)(g.a,{color:Q.HAND.SS.COLOR,fontSize:.2,position:[o,i,.01],scale:Array(3).fill(1),children:(12-t).toString()},t)}))]}),Object(x.jsxs)("group",{rotation:[0,0,r],children:[Object(x.jsxs)("mesh",{receiveShadow:!0,children:[Object(x.jsx)("circleGeometry",{args:[2,60]}),Object(x.jsx)("meshStandardMaterial",{opacity:.25,side:b.DoubleSide,transparent:!0})]}),Object(x.jsxs)("group",{position:[0,0,Q.HAND.THICKNESS/2],children:[Object(x.jsx)("group",{position:[0,0,Q.HAND.THICKNESS/2],ref:a,children:Object(x.jsxs)("mesh",{castShadow:!0,position:[Q.HAND.HH.LENGTH/2,0,0],children:[Object(x.jsx)("boxGeometry",{args:[Q.HAND.HH.LENGTH,.12,Q.HAND.THICKNESS]}),Object(x.jsx)("meshStandardMaterial",{})]})}),Object(x.jsx)("group",{position:[0,0,2*Q.HAND.THICKNESS],ref:o,children:Object(x.jsxs)("mesh",{castShadow:!0,position:[Q.HAND.MM.LENGTH/2,0,0],children:[Object(x.jsx)("boxGeometry",{args:[Q.HAND.MM.LENGTH,.04,Q.HAND.THICKNESS]}),Object(x.jsx)("meshStandardMaterial",{})]})}),Object(x.jsx)("group",{position:[0,0,3*Q.HAND.THICKNESS+Q.HAND.THICKNESS/2],ref:i,children:Object(x.jsxs)("mesh",{castShadow:!0,position:[Q.HAND.SS.LENGTH/2,0,0],children:[Object(x.jsx)("boxGeometry",{args:[Q.HAND.SS.LENGTH,.02,Q.HAND.THICKNESS]}),Object(x.jsx)("meshStandardMaterial",{color:Q.HAND.SS.COLOR})]})})]}),Array(60).fill(null).map((function(e,t){var a=b.MathUtils.degToRad(6*t);return Object(x.jsx)("group",{rotation:[0,0,a],position:[0,0,.005],children:Object(x.jsxs)("mesh",{position:[2-Q.MARK.OFFSET-(V(t)?Q.MARK.HH.LENGTH-.01:Q.MARK.HH.LENGTH)/2,0,0],children:[Object(x.jsx)("boxGeometry",{args:[V(t)?Q.MARK.HH.LENGTH:Q.MARK.MM.LENGTH,V(t)?Q.MARK.HH.WIDTH:Q.MARK.MM.WIDTH,.01]}),Object(x.jsx)("meshStandardMaterial",{color:0===t?255:V(t)?Q.MARK.HH.COLOR:Q.MARK.MM.COLOR})]})},t)})),Object(x.jsxs)("mesh",{castShadow:!0,position:[0,0,.05],rotation:[-90,0,0].map((function(e){return b.MathUtils.degToRad(e)})),children:[Object(x.jsx)("cylinderGeometry",{args:[.1,.05,7*Q.HAND.THICKNESS,36]}),Object(x.jsx)("meshStandardMaterial",{})]})]})]}))},q=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current&&(t.current.rotation.x=b.MathUtils.degToRad(-30))}),[]),Object(s.f)((function(){t.current&&(t.current.text=(new Date).toLocaleTimeString())})),Object(x.jsx)(g.a,Object(y.a)({fontSize:2,ref:t},e))},$=Object.freeze({Analogue:"Analogue",Digital:"Digital"}),ee=function(){var e=Object(p.b)("Components",{useClock:{label:"Clock",options:$,value:$.Analogue}}).useClock,t=function(t){return e===t};return Object(x.jsxs)(x.Fragment,{children:[t($.Analogue)&&Object(x.jsx)(J,{}),t($.Digital)&&Object(x.jsx)(q,{})]})},te=function(e){var t=["#f00","#ff0","#0f0","#0ff","#00f","#f0f"],a=t[Math.floor(Math.random()*t.length)],o=Object(n.useState)(!0),i=Object(d.a)(o,2),r=i[0],s=i[1],c=Object(S.useSpring)({opacity:r?1:.5,position:r?[0,0,0]:[4,4,0].map((function(e){return(2*Math.random()-1)*e}))}),l=c.opacity,b=c.position;return Object(x.jsxs)(S.animated.mesh,Object(y.a)(Object(y.a)({},e),{},{onClick:function(){return s(!r)},position:b,children:[Object(x.jsx)("boxGeometry",{args:[1,1,1]}),Object(x.jsx)(S.animated.meshMatcapMaterial,{color:a,opacity:l,transparent:!0})]}))},ae=a(57),ne=a(98),oe=a.p+"static/media/UV_Grid_Sm.8ab40f71.jpg",ie=function(){var e=Object(ae.a)(oe);return Object(x.jsx)(ne.a,{args:[1,1],children:Object(x.jsx)("meshStandardMaterial",{center:!0,map:e,side:b.DoubleSide})})},re=a.p+"static/media/arteveldehogeschool_logo.6220cd57.svg",se=a.p+"static/media/SVG_logo.31892e95.svg",ce=function(e){var t=.0075;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Qe,{position:[0,0,0],scale:t,source:"https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"}),Object(x.jsx)(Qe,{position:[0,0,-1],scale:t,source:re}),Object(x.jsx)(Qe,{position:[0,0,-2],scale:t,source:se})]})},le=Object.freeze({Default:"Default",Svg:"Svg"}),be=function(){var e=Object(p.b)("Components",{useImages:{label:"Image",options:le,value:le.Default}}).useImages;function t(t){return e===t}return Object(x.jsxs)(x.Fragment,{children:[t(le.Default)&&Object(x.jsx)(ie,{}),t(le.Svg)&&Object(x.jsx)(ce,{})]})},ue=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{color:16777215,intensity:.1}),Object(x.jsx)("directionalLight",{castShadow:!0,color:16777215,intensity:1,position:[4,4,1]}),Object(x.jsx)("hemisphereLight",{castShadow:!0,color:16777215,groundColor:16777215,position:[0,1,0]}),Object(x.jsx)("pointLight",{castShadow:!0,color:16764023,intensity:.5,position:[-4,1,-4]}),Object(x.jsx)("spotLight",{angle:b.MathUtils.degToRad(30),castShadow:!0,color:16764023,intensity:1,penumbra:.5,position:[0,4,0]})]})},je=a(99),Oe=function(){var e=Object(p.b)("Lightings",{"Ambient Light":Object(p.a)({color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:1,min:0,value:.1}})}),t=Object(p.b)("Lightings",{"Directional Light":Object(p.a)({castShadow:{label:"Cast Shadow",value:!0},color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:1,min:0,value:1},position:{label:"Position",value:{x:4,y:4,z:1}}})}),a=Object(p.b)("Lightings",{"Hemisphere Light":Object(p.a)({castShadow:{label:"Cast Shadow",value:!0},color:{label:"Sky Color",value:"#ffffff"},groundColor:{label:"Ground Color",value:"#ffffff"},intensity:{label:"Intensity",max:1,min:0,value:1},position:{label:"Position",value:{x:0,y:1,z:0}}})}),o=Object(p.b)("Lightings",{"Point Light":Object(p.a)({castShadow:{label:"Cast Shadow",value:!0},color:{label:"Color",value:"#ffcc77"},intensity:{label:"Intensity",max:20,min:0,value:.5},position:{label:"Position",value:{x:-4,y:1,z:-4}}})}),i=Object(p.b)("Lightings",{Spotlight:Object(p.a)({castShadow:{label:"Cast Shadow",value:!0},color:{label:"Color",value:"#ffcc77"},intensity:{label:"Intensity",max:20,min:0,value:1},penumbra:{label:"Penumbra",value:.5},position:{label:"Position",value:{x:0,y:4,z:0}},target:{label:"Target",value:{x:0,y:0,z:0}}})}),r=Object(s.h)().scene,c=new b.Object3D;r.add(c);var l=Object(n.useRef)(),u=Object(n.useRef)(),j=Object(n.useRef)(),O=Object(n.useRef)();return Object(je.a)(l,b.DirectionalLightHelper,.5,t.color),Object(je.a)(j,b.PointLightHelper,.5,o.color),Object(je.a)(O,b.SpotLightHelper,i.color),Object(je.a)(u,b.HemisphereLightHelper,.5),Object(s.f)((function(){c.translateX(i.target.x),c.translateZ(i.target.z)})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{color:e.color,intensity:e.intensity}),Object(x.jsx)("directionalLight",{castShadow:t.castShadow,color:t.color,intensity:t.intensity,position:[t.position.x,t.position.y,t.position.z],ref:l}),Object(x.jsx)("hemisphereLight",{castShadow:a.castShadow,color:a.color,groundColor:a.groundColor,intensity:a.intensity,position:[a.position.x,a.position.y,a.position.z],ref:u}),Object(x.jsx)("pointLight",{castShadow:o.castShadow,color:o.color,intensity:o.intensity,position:[o.position.x,o.position.y,o.position.z],ref:j}),Object(x.jsx)("spotLight",{angle:b.MathUtils.degToRad(30),castShadow:i.castShadow,color:i.color,intensity:i.intensity,penumbra:i.penumbra,position:[i.position.x,i.position.y,i.position.z],ref:O,target:c})]})},he=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{intensity:.1}),Object(x.jsx)("directionalLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.4,position:[0,2,4]}),Object(x.jsx)("directionalLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",position:[-4,0,0]}),Object(x.jsx)("directionalLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",position:[4,0,0]})]})},me=function(){var e=Object(p.b)("Lightings",{"Ambient Light":Object(p.a)({ambientLightColor:{label:"Color",value:"hsl(0, 0%, 100%)"},ambientLightIntensity:{label:"Intensity",max:1,min:0,value:.1}}),"Front Light":Object(p.a)({frontLightColor:{label:"Color",value:"hsl(0, 0%, 70%)"},frontLightIntensity:{label:"Intensity",max:2,min:0,value:.4}}),"Left Light":Object(p.a)({leftLightColor:{label:"Color",value:"hsl(210, 100%, 70%)"},leftLightIntensity:{label:"Intensity",max:2,min:0,value:1}}),"Right Light":Object(p.a)({rightLightColor:{label:"Color",value:"hsl(30, 100%, 70%)"},rightLightIntensity:{label:"Intensity",max:2,min:0,value:1}})}),t=e.ambientLightColor,a=e.ambientLightIntensity,o=e.frontLightColor,i=e.frontLightIntensity,r=e.leftLightColor,s=e.leftLightIntensity,c=e.rightLightColor,l=e.rightLightIntensity,u=Object(n.useRef)(),j=Object(n.useRef)(),O=Object(n.useRef)();return Object(je.a)(u,b.DirectionalLightHelper,.5,o),Object(je.a)(j,b.DirectionalLightHelper,.5,r),Object(je.a)(O,b.DirectionalLightHelper,.5,c),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{color:t,intensity:a}),Object(x.jsx)("directionalLight",{castShadow:!0,color:o,intensity:i,position:[0,2,4],ref:u}),Object(x.jsx)("directionalLight",{castShadow:!0,color:r,intensity:s,position:[-4,0,0],ref:j}),Object(x.jsx)("directionalLight",{castShadow:!0,color:c,intensity:l,position:[4,0,0],ref:O})]})},fe=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{intensity:.1}),Object(x.jsx)("spotLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.75,position:[4,2,-4]}),Object(x.jsx)("spotLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",intensity:.75,position:[-4,2,4]}),Object(x.jsx)("spotLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",intensity:.75,position:[4,2,4]})]})},pe=function(){var e=Object(p.b)("Lightings",{"Ambient Light":Object(p.a)({ambientLightColor:{label:"Color",value:"hsl(0, 0%, 100%)"},ambientLightIntensity:{label:"Intensity",max:1,min:0,value:.1}}),"Back Light":Object(p.a)({backLightColor:{label:"Color",value:"hsl(0, 0%, 70%)"},backLightIntensity:{label:"Intensity",max:2,min:0,value:.75}}),"Fill Light":Object(p.a)({fillLightColor:{label:"Color",value:"hsl(210, 100%, 70%)"},fillLightIntensity:{label:"Intensity",max:2,min:0,value:.75}}),"Key Light":Object(p.a)({keyLightColor:{label:"Color",value:"hsl(30, 100%, 70%)"},keyLightIntensity:{label:"Intensity",max:2,min:0,value:.75}})}),t=e.ambientLightColor,a=e.ambientLightIntensity,o=e.backLightColor,i=e.backLightIntensity,r=e.fillLightColor,s=e.fillLightIntensity,c=e.keyLightColor,l=e.keyLightIntensity,u=Object(n.useRef)(),j=Object(n.useRef)(),O=Object(n.useRef)();return Object(je.a)(u,b.SpotLightHelper,o),Object(je.a)(j,b.SpotLightHelper,r),Object(je.a)(O,b.SpotLightHelper,c),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ambientLight",{color:t,intensity:a}),Object(x.jsx)("spotLight",{castShadow:!0,color:o,intensity:i,position:[4,2,-4],ref:u}),Object(x.jsx)("spotLight",{castShadow:!0,color:r,intensity:s,position:[-4,2,4],ref:j}),Object(x.jsx)("spotLight",{castShadow:!0,color:c,intensity:l,position:[4,2,4],ref:O})]})},de=Object.freeze({Demo:"Demo",Studio:"Studio",ThreePoint:"ThreePoint"}),ge=function(){var e=Object(p.b)("Lightings",{useLighting:{label:"Lighting",options:{"Demo       ":de.Demo,"Studio     ":de.Studio,"Three Point":de.ThreePoint},value:de.Studio},useHelpers:{label:"Helpers",value:!1}}),t=e.useHelpers,a=e.useLighting;function n(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a===e&&t===n}return Object(x.jsxs)(x.Fragment,{children:[n(de.Demo)&&Object(x.jsx)(ue,{}),n(de.Demo,!0)&&Object(x.jsx)(Oe,{}),n(de.Studio)&&Object(x.jsx)(he,{}),n(de.Studio,!0)&&Object(x.jsx)(me,{}),n(de.ThreePoint)&&Object(x.jsx)(fe,{}),n(de.ThreePoint,!0)&&Object(x.jsx)(pe,{})]})},xe=a(104),ve=Object.freeze({ARCHITECTS_DAUGHTER:{name:"Architects Daughter",url:"https://fonts.gstatic.com/s/architectsdaughter/v11/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvfY0.woff"},PRESS_START_2P:{name:"Press Start 2P",url:"https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK0nR.woff"},REDACTED_SCRIPT:{name:"Redacted Script",url:"https://fonts.gstatic.com/s/redactedscript/v1/ypvBbXGRglhokR7dcC3d1-R6zmxitm72.woff"},ROBOTO:{name:"Roboto",url:"https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxM.woff"},ROBOTO_SLAB:{name:"Roboto Slab",url:"https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjovoSWaw.woff"},TANGERINE:{name:"Tangerine",url:"https://fonts.gstatic.com/s/tangerine/v12/IurY6Y5j_oScZZow4VOBDQ.woff"}}),ye=Object.freeze({id:{GREEN_CRYSTAL:"2E763A_78A0B7_B3D1CF_14F209",SILVERY:"4C4C4C_D2D2D2_8F8F8F_ACACAC",TITANIUM:"C7C7D7_4C4E5A_818393_6C6C74",WORN_GOLD:"6E5137_E8CA90_271912_B99C74"},size:{XS:64,SM:128,MD:256,LG:512,XL:1024}}),Se=function(){var e=Object(p.b)("Components",{size:{label:"Size",value:.5,min:.1,max:1},string:{label:"String",value:"Lorem ipsum dolor sit amet."}}),t=e.size,a=e.string,n=Object(xe.a)(ye.id.GREEN_CRYSTAL,ye.size.XL),o=Object(d.a)(n,1)[0],i=Object(xe.a)(ye.id.SILVERY,ye.size.XL),r=Object(d.a)(i,1)[0],s=Object(xe.a)(ye.id.WORN_GOLD,ye.size.XL),c=Object(d.a)(s,1)[0];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(g.a,{fontSize:t,position:[0,1,-.2],children:[a,Object(x.jsx)("meshLambertMaterial",{})]}),Object(x.jsxs)(g.a,{font:ve.ROBOTO_SLAB.url,fontSize:t,position:[0,0,0],children:[a,Object(x.jsx)("meshMatcapMaterial",{matcap:c})]}),Object(x.jsx)(g.a,{font:ve.ARCHITECTS_DAUGHTER.url,fontSize:t,opacity:.5,position:[0,-1,.1],text:a,children:Object(x.jsx)("meshMatcapMaterial",{matcap:o})}),Object(x.jsx)(g.a,{color:0,font:ve.PRESS_START_2P.url,fontSize:t,outlineColor:65280,outlineWidth:.04,position:[0,-2,.2],text:a,children:Object(x.jsx)("meshMatcapMaterial",{matcap:r,opacity:.9})})]})},Ce=Object.keys(ve).length,Le=function(){var e=Object(p.b)("Components",{color:{label:"Color",value:"#ffffff"},size:{label:"Size",value:.5,min:.1,max:1},string:{label:"String",value:"Lorem ipsum dolor sit amet."}}),t=e.color,a=e.size,n=e.string,o=-Ce*a/2;return Object(x.jsx)(x.Fragment,{children:Object.keys(ve).map((function(e,i){return Object(x.jsx)(g.a,{color:t,font:ve[e].url,fontSize:a,position:[0,o+i*a,0],children:n},e)}))})},Re=Object.freeze({Default:"Default",Fonts:"Fonts"}),Me=function(){var e=Object(p.b)("Components",{useLoremIpsum:{label:"LoremIpsum",options:Re,value:Re.Default}}).useLoremIpsum;function t(t){return e===t}return Object(x.jsxs)(x.Fragment,{children:[t(Re.Default)&&Object(x.jsx)(Se,{}),t(Re.Fonts)&&Object(x.jsx)(Le,{})]})},He=function(){var e=Object(p.b)("Components",{Icosahedron:Object(p.a)({complexity:{label:"Complexity",max:50,min:0,step:1,value:0},radius:{label:"Radius",max:3,min:.5,step:.1,value:2}}),Material:Object(p.a)({color:{label:"Color",value:"hsl(30, 100%, 70%)"},size:{label:"Size",max:2,min:.05,step:.01,value:1}})}),t=e.color,a=e.complexity,n=e.radius,o=e.size;return Object(x.jsxs)("points",{children:[Object(x.jsx)("icosahedronGeometry",{args:[n,a]}),Object(x.jsx)("pointsMaterial",{color:t,size:o})]})},Te=a.p+"static/media/Arteveldehogeschool_favicon.209a12d1.png",De=function(){var e=Object(p.b)("Components",{Icosahedron:Object(p.a)({complexity:{label:"Complexity",max:50,min:0,step:1,value:0},radius:{label:"Radius",max:3,min:.5,step:.1,value:2}}),Material:Object(p.a)({color:{label:"Color",value:"hsl(30, 100%, 70%)"},opacity:{label:"Opacity",hint:"`transparent` must be `true`",max:1,min:0,step:.01,value:1},size:{label:"Size",max:2,min:.05,step:.01,value:1},transparent:{label:"Transparent",value:!0}})}),t=e.color,a=e.complexity,n=e.opacity,o=e.radius,i=e.size,r=e.transparent,s=Object(ae.a)(Te,!0);return Object(x.jsxs)("points",{children:[Object(x.jsx)("icosahedronGeometry",{args:[o,a]}),Object(x.jsx)("pointsMaterial",{color:t,map:s,opacity:n,size:i,transparent:r})]})},we=Object.freeze({Default:"Default",Sprites:"Sprites"}),Ie=function(){var e=Object(p.b)("Components",{useParticles:{label:"Particles",options:we,value:we.Default}}).useParticles;function t(t){return e===t}return Object(x.jsxs)(x.Fragment,{children:[t(we.Default)&&Object(x.jsx)(He,{}),t(we.Sprites)&&Object(x.jsx)(De,{})]})},Ae=function(){var e=Object(l.g)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),c=s[0],b=s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g.a,{color:o?"hsl(0, 100%, 50%)":"hsl(120, 100%, 70%)",fontSize:1,onClick:function(){return e("/alpha")},onPointerOut:function(){return i(!1)},onPointerOver:function(){return i(!0)},text:"React Router"}),Object(x.jsx)(g.a,{color:c?"hsl(0, 100%, 50%)":"hsl(120, 100%, 70%)",fontSize:.5,onClick:function(){return e("/")},onPointerOut:function(){return b(!1)},onPointerOver:function(){return b(!0)},position:[0,-.75,0],text:"(go back)"})]})},ke=function(){var e=Object(l.g)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],i=a[1];return Object(x.jsx)(g.a,{color:o?"hsl(0, 100%, 50%)":"hsl(120, 100%, 70%)",fontSize:.5,onClick:function(){return e("/omega")},onPointerOut:function(){return i(!1)},onPointerOver:function(){return i(!0)},position:[0,2,0],text:"Path Alpha"})},ze=function(){var e=Object(l.g)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],i=a[1];return Object(x.jsx)(g.a,{color:o?"hsl(0, 100%, 50%)":"hsl(120, 100%, 70%)",fontSize:.5,onClick:function(){return e("/alpha")},onPointerOut:function(){return i(!1)},onPointerOver:function(){return i(!0)},position:[0,-2,0],text:"Path Omega"})},Ee=a(103),Pe=a.p+"static/media/suzanne.f8d5e374.glb",Ne=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),r=Object(d.a)(i,2),c=r[0],l=r[1],b=Object(Ee.a)(Pe,!0),u=b.nodes,j=b.materials,O=Object(n.useRef)(),h=.025;return Object(s.f)((function(){O.current&&(O.current.rotation.x+=h*(c?1:0)*(a?1:-1),O.current.rotation.y+=h*(c?1:0)*(a?1:-1),O.current.rotation.z+=h*(c?1:0)*(a?1:-1))})),Object(x.jsx)("group",{ref:O,onClick:function(){return o(!a)},onDoubleClick:function(){return l(!c)},children:Object(x.jsx)("mesh",{geometry:u.Suzanne.geometry,material:j.Paars})})},Fe=function(){var e=Object(Ee.a)(Pe,!0).nodes,t=Object(xe.a)(ye.id.WORN_GOLD,ye.size.XL),a=Object(d.a)(t,1)[0];return Object(x.jsx)("mesh",{geometry:e.Suzanne.geometry,children:Object(x.jsx)("meshMatcapMaterial",{matcap:a})})},Ge=a(105),Ke=function(){var e=Object(p.b)("Components",{Textures:Object(p.a)({"Normal Map":Object(p.a)({normalAnisotropy:{label:"Anisotropy",step:1,value:8},normalOffset:{label:"Offset",min:-1,max:1,step:.01,value:{x:0,y:0}},normalRepeat:{label:"Repeat",min:-2,max:2,step:.01,value:{x:1,y:1}},normalScale:{label:"Scale",value:1},normalTextureId:{label:"Texture ID",min:0,max:75,step:1,value:8}})})}),t=e.normalAnisotropy,a=e.normalOffset,n=e.normalRepeat,o=e.normalScale,i=e.normalTextureId,r=Object(Ee.a)(Pe,!0).nodes,s=Object(Ge.a)(i,{anisotropy:t,offset:[a.x,a.y],repeat:[n.x,n.y]}),c=Object(d.a)(s,1)[0];return Object(x.jsx)("mesh",{geometry:r.Suzanne.geometry,children:Object(x.jsx)("meshStandardMaterial",{normalMap:c,normalScale:new b.Vector2(o,o)})})},_e=function(){var e=Object(Ee.a)(Pe,!0).nodes,t=Object(p.b)("Components",{Materials:Object(p.a)({Material:Object(p.a)({dithering:{label:"Dithering",value:!1},opacity:{label:"Transparent",max:1,min:0,value:1},transparent:{label:"Transparent",value:!0}}),"Standard Material":Object(p.a)({color:{label:"Color",value:"#ffffff"},emissive:{label:"Emissive",value:"#000000"},emissiveIntensity:{label:"Emissive Intensity",max:5,min:0,value:1},metalness:{label:"Metalness",max:1,min:0,value:0},refractionRatio:{label:"Refraction Ratio",max:2,min:0,value:.98},roughness:{label:"Roughness",max:1,min:0,value:1},wireframe:{label:"Wireframe",value:!1}}),"Physical Material":Object(p.a)({clearcoat:{label:"Clearcoat",max:1,min:0,value:0},clearcoatRoughness:{label:"Clearcoat Roughness",max:1,min:0,value:0},ior:{label:"Index of Refraction",max:2.333,min:1,value:1.5},reflectivity:{label:"Reflectivity",max:1,min:0,value:.5},sheen:{label:"Sheen",max:1,min:0,value:0},sheenColor:{label:"Sheen Color",value:"#ffffff"},sheenRoughness:{label:"Sheen Roughness",max:1,min:0,value:1},specularColor:{label:"Specular Color",value:"#ffffff"},specularIntensity:{label:"Specular Intensity",max:1,min:0,value:1},thickness:{label:"Thickness",max:10,min:0,value:.01},transmission:{label:"Transmission",max:1,min:0,value:0}})})}),a=t.clearcoat,n=t.clearcoatRoughness,o=t.color,i=t.dithering,r=t.emissive,s=t.emissiveIntensity,c=t.ior,l=t.metalness,b=t.opacity,u=t.refractionRatio,j=t.roughness,O=t.sheen,h=t.sheenColor,m=t.sheenRoughness,f=t.specularColor,d=t.specularIntensity,g=t.thickness,v=t.transmission,y=t.transparent,S=t.wireframe;return Object(x.jsx)("mesh",{geometry:e.Suzanne.geometry,children:Object(x.jsx)("meshPhysicalMaterial",{clearcoat:a,clearcoatRoughness:n,color:o,dithering:i,emissive:r,emissiveIntensity:s,ior:c,metalness:l,opacity:b,refractionRatio:u,roughness:j,sheen:O,sheenColor:h,sheenRoughness:m,specularColor:f,specularIntensity:d,thickness:g,transmission:v,transparent:y,wireframe:S})})},Ue=function(){var e=Object(Ee.a)(Pe,!0).nodes,t=Object(p.b)("Components",{Materials:Object(p.a)({Material:Object(p.a)({dithering:{label:"Dithering",value:!1},opacity:{label:"Transparent",max:1,min:0,value:1},transparent:{label:"Transparent",value:!0}}),"Standard Material":Object(p.a)({color:{label:"Color",value:"#ffffff"},emissive:{label:"Emissive",value:"#000000"},emissiveIntensity:{label:"Emissive Intensity",max:5,min:0,value:1},metalness:{label:"Metalness",max:1,min:0,value:0},refractionRatio:{label:"Refraction Ratio",max:2,min:0,value:.98},roughness:{label:"Roughness",max:1,min:0,value:1},wireframe:{label:"Wireframe",value:!1}})})}),a=t.color,n=t.dithering,o=t.emissive,i=t.emissiveIntensity,r=t.metalness,s=t.opacity,c=t.refractionRatio,l=t.roughness,b=t.transparent,u=t.wireframe;return Object(x.jsx)("mesh",{geometry:e.Suzanne.geometry,children:Object(x.jsx)("meshStandardMaterial",{color:a,dithering:n,emissive:o,emissiveIntensity:i,metalness:r,opacity:s,refractionRatio:c,roughness:l,transparent:b,wireframe:u})})},Be=function(){var e=Object(Ee.a)(Pe,!0).nodes;return Object(x.jsx)("mesh",{geometry:e.Suzanne.geometry,children:Object(x.jsx)("meshToonMaterial",{})})},We=Object.freeze({Default:"Default",MatcapMaterial:"MatcapTexture",NormalMap:"NormalTexture",PhysicalMaterial:"PhysicalMaterial",StandardMaterial:"StandardMaterial",ToonMaterial:"ToonMaterial"}),Xe=function(){var e=Object(p.b)("Components",{useSuzanne:{label:"Suzanne",options:{"Default                      ":We.Default,"Standard Material            ":We.StandardMaterial,"Standard Material Normal Map ":We.NormalMap,"Physical Material            ":We.PhysicalMaterial,"Matcap Material              ":We.MatcapMaterial,"Toon Material                ":We.ToonMaterial},value:We.Default}}).useSuzanne;function t(t){return e===t}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(x.Fragment,{children:[t(We.Default)&&Object(x.jsx)(Ne,{}),t(We.MatcapMaterial)&&Object(x.jsx)(Fe,{}),t(We.NormalMap)&&Object(x.jsx)(Ke,{}),t(We.PhysicalMaterial)&&Object(x.jsx)(_e,{}),t(We.StandardMaterial)&&Object(x.jsx)(Ue,{}),t(We.ToonMaterial)&&Object(x.jsx)(Be,{})]}),Object(x.jsx)(ne.a,{args:[2,2],position:[0,0,-1],rotation:[0,0,45].map((function(e){return b.MathUtils.degToRad(e)}))})]})},Ye=a(100),Ze=function(e){var t=e.color,a=e.index,n=e.shape;return Object(x.jsxs)("mesh",{position:[0,0,-.05*a],children:[Object(x.jsx)("shapeGeometry",{args:[n]}),Object(x.jsx)("meshBasicMaterial",{color:t,side:b.DoubleSide})]})},Ve=function(e){var t=e.paths,a=e.position,n=e.scale;return Object(x.jsx)("group",{position:a,rotation:[180,0,0].map((function(e){return b.MathUtils.degToRad(e)})),scale:n,children:t.map((function(e,t){var a=e.toShapes(),n=t;return a.map((function(t,a){return Object(x.jsx)(Ze,{color:e.color,index:a+n,shape:t},a)}))}))})},Qe=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],i=a[1],r=e.position,s=[e.scale,e.scale,e.scale];return Object(n.useEffect)((function(){new Promise((function(t){return(new Ye.a).load(e.source,(function(e){return t(e.paths)}))})).then(i)}),[e]),Object(x.jsx)(Ve,{paths:o,position:r,scale:s})},Je=Object.freeze({Animation:"Animation",Button:"Button",Clock:"Clock",Cube:"Cube",Cube_Positioned:"Cube_Positioned",None:"None",LoremIpsum:"LoremIpsum",Particles:"Particles",ReactRouter:"ReactRouter",Suzanne:"Suzanne"}),qe=Object.freeze({Orbit:"Orbit",Trackball:"Trackball"}),$e=function(){var e=Object(p.b)("General",{enableEffects:{label:"Effects",value:!1},enableStats:{label:"Stats",value:!1},Helpers:Object(p.a)({enableAxesHelper:{label:"Axes",value:!1},enableGizmoHelper:{label:"Gizmo",value:!0},enableGridHelper:{label:"Grid",value:!1}}),"Input Controls":Object(p.a)({useInputControls:{label:"Controls",options:qe,value:qe.Orbit}})}),t=e.enableAxesHelper,a=e.enableEffects,o=e.enableGizmoHelper,i=e.enableGridHelper,r=e.enableStats,s=e.useInputControls,d=Object(p.b)("Components",{useComponent:{label:"Component",options:{"None             ":Je.None,"Button           ":Je.Button,"Clock            ":Je.Clock,"Cube             ":Je.Cube,"Cube (positioned)":Je.Cube_Positioned,"Image            ":Je.Image,"Lorem Ipsum      ":Je.LoremIpsum,"Particles        ":Je.Particles,"React Router     ":Je.ReactRouter,"Suzanne          ":Je.Suzanne},value:Je.Suzanne}}).useComponent;function g(e){return s===e}function v(e){return d===e}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(x.Fragment,{children:[g(qe.Orbit)&&Object(x.jsx)(u.a,{enablePan:!0,enableRotate:!0,enableZoom:!0}),g(qe.Trackball)&&Object(x.jsx)(j.a,{})]}),Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)("axesHelper",{}),o&&Object(x.jsx)(O.a,{alignment:"bottom-right",margin:[80,80],children:Object(x.jsx)(h.a,{axisColors:["hsl(0, 100%, 50%)","hsl(120, 100%, 50%)","hsl(240, 100%, 50%)"],labelColor:"black"})}),i&&Object(x.jsx)("gridHelper",{args:[10,10,16777215,3355443]}),r&&Object(x.jsx)(m.a,{})]}),a&&Object(x.jsx)(f.b,{children:Object(x.jsx)(f.a,{height:500,luminanceThreshold:0,luminanceSmoothing:.9})}),Object(x.jsx)(ge,{}),Object(x.jsxs)(c.a,{children:[Object(x.jsxs)(x.Fragment,{children:[v(Je.Button)&&Object(x.jsx)(R,{}),v(Je.Cube)&&Object(x.jsx)(te,{}),v(Je.Cube_Positioned)&&Object(x.jsx)(te,{position:[1,1,1],rotation:[45,45,45].map((function(e){return b.MathUtils.degToRad(e)}))}),v(Je.ReactRouter)&&Object(x.jsx)(Ae,{}),Object(x.jsxs)(n.Suspense,{fallback:null,children:[v(Je.Clock)&&Object(x.jsx)(ee,{}),v(Je.Image)&&Object(x.jsx)(be,{}),v(Je.LoremIpsum)&&Object(x.jsx)(Me,{}),v(Je.Particles)&&Object(x.jsx)(Ie,{}),v(Je.Suzanne)&&Object(x.jsx)(Xe,{})]})]}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{element:Object(x.jsx)(l.a,{to:"/"}),path:"*"}),Object(x.jsx)(l.b,{element:Object(x.jsx)(ke,{}),path:"alpha"}),Object(x.jsx)(l.b,{element:Object(x.jsx)(ze,{}),path:"omega"}),Object(x.jsx)(l.b,{element:Object(x.jsx)(x.Fragment,{}),path:"/"})]})]})]})},et=function(){return Object(x.jsx)(s.a,{children:Object(x.jsx)($e,{linear:!1,shadows:!0})})},tt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(et,{})}),document.getElementById("root")),tt()}},[[97,1,2]]]);
//# sourceMappingURL=main.aeeb2994.chunk.js.map
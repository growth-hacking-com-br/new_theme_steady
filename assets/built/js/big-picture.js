!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}({30:function(t,e,n){"use strict";let o,r,i,a,c,l,s,p,d,u,f,m,b,g,h,x,y,v,w,_,S,k;n.r(e);const T=[];let M,$,L,A,E,O,C,H,z,D,I,P={};const j="appendChild",N="createElement",q="removeChild";var V=t=>{var e;return r||function(){let t;function e(t){const e=document[N]("button");return e.className=t,e.innerHTML='<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>',e}function n(t,e){const n=document[N]("button");return n.className="bp-lr",n.innerHTML='<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>',Z(n,e),n.onclick=e=>{e.stopPropagation(),B(t)},n}const o=document[N]("STYLE");o.innerHTML="#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}",document.head[j](o),i=document[N]("DIV"),i.id="bp_container",i.onclick=K,f=e("bp-x"),i[j](f),"ontouchstart"in window&&(D=!0,i.ontouchstart=({changedTouches:e})=>{t=e[0].pageX},i.ontouchmove=t=>{t.preventDefault()},i.ontouchend=({changedTouches:e})=>{if(!S)return;const n=e[0].pageX-t;n<-30&&B(1),n>30&&B(-1)});c=document[N]("IMG"),l=document[N]("VIDEO"),l.id="bp_vid",l.setAttribute("playsinline",!0),l.controls=!0,l.loop=!0,s=document[N]("audio"),s.id="bp_aud",s.controls=!0,s.loop=!0,z=document[N]("span"),z.id="bp_count",x=document[N]("DIV"),x.id="bp_caption",w=e("bp-xc"),w.onclick=U.bind(null,!1),x[j](w),y=document[N]("SPAN"),x[j](y),i[j](x),E=n(1,"transform:scalex(-1)"),O=n(-1,"left:0;right:auto"),h=document[N]("DIV"),h.id="bp_loader",h.innerHTML='<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>',p=document[N]("DIV"),p.id="bp_sv",d=document[N]("IFRAME"),d.setAttribute("allowfullscreen",!0),d.allow="autoplay; fullscreen",d.onload=()=>p[q](h),Z(d,"border:0;position:absolute;height:100%;width:100%;left:0;top:0"),p[j](d),c.onload=J,c.onerror=J.bind(null,"image"),window.addEventListener("resize",()=>{S||b&&F(!0),a===p&&R()}),document.addEventListener("keyup",({keyCode:t})=>{27===t&&_&&K(),S&&(39===t&&B(1),37===t&&B(-1),38===t&&B(10),40===t&&B(-10))}),document.addEventListener("keydown",t=>{S&&~[37,38,39,40].indexOf(t.keyCode)&&t.preventDefault()}),document.addEventListener("focus",t=>{_&&!i.contains(t.target)&&(t.stopPropagation(),f.focus())},!0),r=!0}(),b&&(clearTimeout(g),Q()),I=t,m=t.ytSrc||t.vimeoSrc,$=t.animationStart,L=t.animationEnd,A=t.onChangeImage,o=t.el,M=!1,v=o.getAttribute("data-caption"),t.gallery?function(t,e){let n=I.galleryAttribute||"data-bp";if(Array.isArray(t))C=e||0,H=t,v=t[C].caption;else{H=[].slice.call("string"==typeof t?document.querySelectorAll(`${t} [${n}]`):t);const r=H.indexOf(o);C=0===e||e?e:-1!==r?r:0,H=H.map(t=>({el:t,src:t.getAttribute(n),caption:t.getAttribute("data-caption")}))}M=!0,u=H[C].src,!~T.indexOf(u)&&F(!0),H.length>1?(i[j](z),z.innerHTML=`${C+1}/${H.length}`,D||(i[j](E),i[j](O))):H=!1;a=c,a.src=u}(t.gallery,t.position):m||t.iframeSrc?(a=p,function(){let t;I.ytSrc?t=`https://www.youtube${I.ytNoCookie?"-nocookie":""}.com/embed/${m}?html5=1&rel=0&playsinline=1&autoplay=1`:I.vimeoSrc?t=`https://player.vimeo.com/video/${m}?autoplay=1`:I.iframeSrc&&(t=I.iframeSrc);Z(h,""),p[j](h),d.src=t,R(),setTimeout(J,9)}()):t.imgSrc?(M=!0,u=t.imgSrc,!~T.indexOf(u)&&F(!0),a=c,a.src=u):t.audio?(F(!0),a=s,a.src=t.audio,X("audio file")):t.vidSrc?(F(!0),t.dimensions&&Z(l,`width:${t.dimensions[0]}px`),e=t.vidSrc,Array.isArray(e)?(a=l.cloneNode(),e.forEach(t=>{const e=document[N]("SOURCE");e.src=t,e.type="video/"+t.match(/.(\w+)$/)[1],a[j](e)})):(a=l,a.src=e),X("video")):(a=c,a.src="IMG"===o.tagName?o.src:window.getComputedStyle(o).backgroundImage.replace(/^url|[(|)|'|"]/g,"")),i[j](a),document.body[j](i),{close:K,next:()=>B(1),prev:()=>B(-1)}};function W(){const{top:t,left:e,width:n,height:r}=o.getBoundingClientRect();return`transform:translate3D(${e-(i.clientWidth-n)/2}px, ${t-(i.clientHeight-r)/2}px, 0) scale3D(${o.clientWidth/a.clientWidth}, ${o.clientHeight/a.clientHeight}, 0)`}function B(t){const e=H.length-1;if(!b){if(t>0&&C===e||t<0&&!C){if(!I.loop)return Z(c,""),void setTimeout(Z,9,c,`animation:${t>0?"bpl":"bpf"} .3s;transition:transform .35s`);C=t>0?-1:e+1}if(C=Math.max(0,Math.min(C+t,e)),[C-1,C,C+1].forEach(t=>{if(t=Math.max(0,Math.min(t,e)),P[t])return;const n=H[t].src,o=document[N]("IMG");o.addEventListener("load",Y.bind(null,n)),o.src=n,P[t]=o}),P[C].complete)return G(t);b=!0,Z(h,"opacity:.4;"),i[j](h),P[C].onload=()=>{S&&G(t)},P[C].onerror=()=>{H[C]={error:"Error loading image"},S&&G(t)}}}function G(t){b&&(i[q](h),b=!1);const e=H[C];if(e.error)alert(e.error);else{const n=i.querySelector("img:last-of-type");c=a=P[C],Z(c,`animation:${t>0?"bpfl":"bpfr"} .35s;transition:transform .35s`),Z(n,`animation:${t>0?"bpfol":"bpfor"} .35s both`),i[j](c),e.el&&(o=e.el)}z.innerHTML=`${C+1}/${H.length}`,U(H[C].caption),A&&A([c,H[C]])}function R(){let t,e;const n=.95*window.innerHeight,o=.95*window.innerWidth,r=n/o,[i,a]=I.dimensions||[1920,1080],c=a/i;c>r?(t=Math.min(a,n),e=t/c):(e=Math.min(i,o),t=e*c),p.style.cssText+=`width:${e}px;height:${t}px;`}function X(t){~[1,4].indexOf(a.readyState)?(J(),setTimeout(()=>{a.play()},99)):a.error?J(t):g=setTimeout(X,35,t)}function F(t){I.noLoader||(t&&Z(h,`top:${o.offsetTop}px;left:${o.offsetLeft}px;height:${o.clientHeight}px;width:${o.clientWidth}px`),o.parentElement[t?j:q](h),b=t)}function U(t){t&&(y.innerHTML=t),Z(x,"opacity:"+(t?"1;pointer-events:auto":"0"))}function Y(t){!~T.indexOf(t)&&T.push(t)}function J(t){if(b&&F(),$&&$(),"string"==typeof t)return Q(),I.onError?I.onError():alert(`Error: The requested ${t} could not be loaded.`);M&&Y(u),a.style.cssText+=W(),Z(i,"opacity:1;pointer-events:auto"),L&&(L=setTimeout(L,410)),_=!0,S=!!H,setTimeout(()=>{a.style.cssText+="transition:transform .35s;transform:none",v&&setTimeout(U,250,v)},60)}function K(t){const e=t?t.target:i,n=[x,w,l,s,y,O,E,h];e.blur(),k||~n.indexOf(e)||(a.style.cssText+=W(),Z(i,"pointer-events:auto"),setTimeout(Q,350),clearTimeout(L),_=!1,k=!0)}function Q(){if((a===p?d:a).removeAttribute("src"),document.body[q](i),i[q](a),Z(i,""),Z(a,""),U(!1),S){const t=i.querySelectorAll("img");for(let e=0;e<t.length;e++)i[q](t[e]);b&&i[q](h),i[q](z),S=H=!1,P={},D||i[q](E),D||i[q](O),c.onload=J,c.onerror=J.bind(null,"image")}I.onClose&&I.onClose(),k=b=!1}function Z({style:t},e){t.cssText=e}function tt(){for(var t=document.querySelectorAll(".image-container a.gallery-link"),e=0;e<t.length;e++)t[e].addEventListener("click",(function(t){t.preventDefault(),V({el:t.target,gallery:".image-container"})}));for(var n=document.querySelectorAll(".video-container a.gallery-link"),o=0;o<n.length;o++)n[o].addEventListener("click",(function(t){var e=t.target.className;~e.indexOf("htmlvid")?V({el:t.target,vidSrc:t.target.getAttribute("vidSrc")}):~e.indexOf("vimeo")?V({el:t.target,vimeoSrc:t.target.getAttribute("vimeoSrc")}):~e.indexOf("twin-peaks")?V({el:t.target,ytSrc:t.target.getAttribute("ytSrc"),dimensions:[1226,900]}):~e.indexOf("youtube")&&V({el:t.target,ytSrc:t.target.getAttribute("ytSrc")})}))}"complete"===document.readyState||"interactive"===document.readyState?setTimeout(tt,1):document.addEventListener("DOMContentLoaded",tt)},8:function(t,e,n){t.exports=n(30)}});
//# sourceMappingURL=big-picture.js.map
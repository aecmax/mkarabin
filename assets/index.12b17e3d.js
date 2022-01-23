import{o as c,c as l,a as e,r as f,b as r,w as d,p,d as v,e as m,f as u,F as g,g as w,h as y,i as $}from"./vendor.2ef54e98.js";const k=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}};k();var _=(t,n)=>{const s=t.__vccOpts||t;for(const[i,a]of n)s[i]=a;return s};const I={methods:{randomNumber:function(){return Math.floor(Math.random()*17)+1}}},M={id:"stage",class:"absolute inset-0 min-w-full min-h-full overflow-hidden z-[-10] align-center"},A={class:"absolute w-full h-full bg-cover"},N={class:"bg-[#334d3d]/100 inset-0 mix-blend-color w-full h-full"},B=["src"];function S(t,n,s,i,a,o){return c(),l("div",M,[e("div",A,[e("div",N,[e("img",{class:"absolute aspect-auto min-h-full opacity-25",src:"/mkarabin/hero_images/pic_"+o.randomNumber()+".png",alt:""},null,8,B)])])])}var C=_(I,[["render",S]]);const L={},T=t=>(p("data-v-62d6f3d4"),t=t(),v(),t),j={class:"py-5 flex justify-around text-white text-xl w-full text-center text-m bg-[#334d3d]"},F={class:"flex gap-5"},E=T(()=>e("i",{class:"fas fa-info-circle"},null,-1)),O=m('<div class data-v-62d6f3d4>2022 \xA9 mkarabin.com</div><div class data-v-62d6f3d4><ul class="flex gap-5" data-v-62d6f3d4><li class="hover:invert hover:border-t-8" data-v-62d6f3d4><a href="https://www.facebook.com/xkarabin" target="_blank" alt="FaceBook" class="ext" data-v-62d6f3d4><i class="fab fa-facebook" data-v-62d6f3d4></i></a></li><li class="hover:invert hover:border-t-8" data-v-62d6f3d4><a href="https://www.linkedin.com/in/xkarabin" alt="LinkedIn" target="_blank" class="ext" data-v-62d6f3d4><i class="fab fa-linkedin" data-v-62d6f3d4></i></a></li><li class="hover:invert hover:border-t-8" data-v-62d6f3d4><a href="https://twitter.com/XIXMaXXIX" target="_blank" alt="Twitter" class="ext relative" data-v-62d6f3d4><i class="fab fa-twitter" data-v-62d6f3d4></i></a></li></ul></div>',2);function R(t,n){const s=f("router-link");return c(),l("footer",j,[e("div",F,[r(s,{class:"hover:invert hover:border-t-8",to:"/info/",alt:"Info"},{default:d(()=>[E]),_:1})]),O])}var X=_(L,[["render",R],["__scopeId","data-v-62d6f3d4"]]),x="/mkarabin/assets/LogoFinal.1bd13f75.png";const D={},V=t=>(p("data-v-e99867b8"),t=t(),v(),t),H={class:"w-full fixed flex items-center justify-between px-10 text-3xl"},J=V(()=>e("img",{src:x,class:"h-24"},null,-1)),K={class:"flex text-white mix-blend-difference"},W=u("Home"),P=u("About"),q={class:"hidden"},z=u("Burger");function G(t,n){const s=f("router-link");return c(),l("nav",null,[e("div",H,[r(s,{to:"/"},{default:d(()=>[J]),_:1}),e("ul",K,[e("li",null,[r(s,{to:"/"},{default:d(()=>[W]),_:1})]),e("li",null,[r(s,{to:"/about"},{default:d(()=>[P]),_:1})]),e("li",q,[r(s,{to:"/About"},{default:d(()=>[z]),_:1})])])])])}var Q=_(D,[["render",G],["__scopeId","data-v-e99867b8"]]);const U={setup(t){return(n,s)=>{const i=f("router-view");return c(),l(g,null,[r(Q),r(i),r(C),r(X)],64)}}};const Y={},Z={class:"flex flex-col min-h-screen justify-center m-auto items-center"},ee=e("div",null,[e("img",{src:x,class:"w-[75%] m-auto",alt:"Max's Logo, MK in a circle."}),e("div",{class:"w-[50%] p-10 bg-[#334d3d] m-auto"},[e("h2",{class:"text-white text-5xl underline"},"MAXIMILIAN KARABIN"),e("h2",{class:"text-white text-3xl mt-5"},"BIM TINKERER, DESIGNER")])],-1),te=[ee];function ae(t,n){return c(),l("div",Z,te)}var se=_(Y,[["render",ae]]),oe="/mkarabin/assets/me.fd289ad6.png";const ne={},re={class:"min-h-screen dropshadow-5xl"},ie=e("div",{class:"container justify-center grid grid-cols-1 pt-24 w-full h-screen m-auto items-center md:grid-cols-2"},[e("img",{src:oe,class:"border-8 border-white w-full aspect-auto b-full",alt:"Picture of Max"}),e("div",{class:"container text-xl prose text-white p-10 bg-[#334d3d]"},[e("h3",{class:"text-3xl text-white"},"About Max"),e("p",null,"After graduating with a Bachelors of Architecture from New Jersey Institute of Technology, Maximilian began working as an Architectural Designer at CCW. During that time he found that he had a knack for all things Revit while working on projects such as Fresh Direct and Do&Co. He also began to help solidify the office standards and practices which lead him to become the office\u2019s BIM Manager in early 2017."),e("p",null,"For a brief stint as BIM Manager he served as support staff to the Architectural teams, managed both the technical implementation of Cybul Cybul Wilhelm's BIM process and end user I.T. needs. As well as many other aspects of daily business operations."),e("p",null,"Today he works as a detailer at BAMCO Inc. which is an Award-winning leader in the design, fabrication and installation of architectural facades and wall panel systems.")])],-1),ce=[ie];function le(t,n){return c(),l("div",re,ce)}var de=_(ne,[["render",le]]);const _e={},fe={class:"flex flex-col justify-center items-center min-h-screen min-w-screen"},ue=m('<div class="bg-[#334d3d]/75 py-10 px-20 text-center" data-v-464cb0fa><h3 class="text-3xl text-white px-3 py-6" data-v-464cb0fa> Made with <i class="fas fa-heart" data-v-464cb0fa></i> in N.J. using: </h3><ol class="text-xl text-white bullet" data-v-464cb0fa><li data-v-464cb0fa>ViteJS</li><li data-v-464cb0fa>TailwindCSS</li><li data-v-464cb0fa>ThreeJS</li></ol><p class="text-xs text-right text-white" data-v-464cb0fa> * Coming Soon <i class="far fa-smile" data-v-464cb0fa></i></p></div>',1),he=u("Close");function pe(t,n){const s=f("router-link");return c(),l("div",fe,[ue,r(s,{class:"m-12 px-8 py-4 rounded-xl button bg-white hover:invert",to:"/",tag:"button"},{default:d(()=>[he]),_:1})])}var ve=_(_e,[["render",pe],["__scopeId","data-v-464cb0fa"]]);const me=w({history:y(),routes:[{path:"/",component:se},{path:"/about/",component:de},{path:"/info/",component:ve}]}),b=$(U);b.use(me);b.mount("#app");

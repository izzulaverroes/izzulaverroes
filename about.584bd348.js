function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=r.parcelRequire3a9a;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},r.parcelRequire3a9a=n),n.register("27Lyk",function(t,r){"use strict";e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>a,e=>a=e);var o,a,n={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("27Lyk").register(JSON.parse('{"4XWIT":"about.584bd348.js","l2kNW":"1.1f6eac1a.jpg","flOjc":"2.1b1b082a.jpg","3a8n8":"3.3fd503ad.jpg","2a6dA":"4.29929cf5.jpg","5a8hI":"5.4229093a.jpg","2b2ZE":"6.b83d74ee.jpg","3sNES":"7.1670b975.jpg","fD0Rx":"playground.c9bd8be1.js"}'));var i=n("1Emd6"),s=n("3HIuf");t(i).registerPlugin(t(s));let l=t(i).timeline({scrollTrigger:{trigger:".awards-section",start:"top bottom",end:"20% top",scrub:!0}});t(i).set(".description_text-span",{opacity:.2}),t(i).set(".awards__text_span:nth-child(1)",{xPercent:-100}),t(i).set(".awards__text_span:nth-child(2)",{xPercent:100}),l.to(".awards__text_span:nth-child(1)",{xPercent:0}),l.to(".awards__text_span:nth-child(2)",{xPercent:0},"<");var c=n("1qP0P"),d=n("4Bf6G"),u=n("lPptZ"),_=n("frpE1"),p=n("VsODs"),i=n("1Emd6"),f={};f=new URL(n("27Lyk").resolve("l2kNW"),import.meta.url).toString();var g={};g=new URL(n("27Lyk").resolve("flOjc"),import.meta.url).toString();var m={};m=new URL(n("27Lyk").resolve("3a8n8"),import.meta.url).toString();var v={};v=new URL(n("27Lyk").resolve("2a6dA"),import.meta.url).toString();var w={};w=new URL(n("27Lyk").resolve("5a8hI"),import.meta.url).toString();var y={};y=new URL(n("27Lyk").resolve("2b2ZE"),import.meta.url).toString();var S={};S=new URL(n("27Lyk").resolve("3sNES"),import.meta.url).toString();const b=document.querySelector(".awards__links"),E=document.querySelectorAll(".awards__link"),H=document.querySelectorAll(".awards__card"),L=document.querySelector(".awards__card_img"),h=[t(f),t(g),t(m),t(v),t(w),t(y),t(S)],R=t(i).quickTo(H,"top",{duration:.3,ease:"power3"}),x=t(i).quickTo(H,"left",{duration:.3,ease:"power3"});t(i).set(".awards__card",{opacity:0});const k=e=>{R(e.clientY),x(e.clientX),t(i).to(".cursor",{opacity:0})},A=e=>{L.src=h[Number(e.target.dataset.award-1)],t(i).to(".awards__card",{opacity:1}),t(i).to(".awards__card_img",{rotation:t(i).utils.clamp(-30,30,(Math.random()-.5)*60)}),k(e)};var j=n("kTnAw"),F=n("aY5wY"),P=n("gexHD"),q=n("S4my2");(0,c.initScrollSmoother)(),(0,d.timeInit)(),(0,u.initProgressBar)(),(0,_.initCursor)(),(0,p.init3DHoverEffect)(),E.forEach(e=>e.addEventListener("mouseenter",A)),b.addEventListener("mousemove",k),b.addEventListener("mouseleave",()=>{t(i).to(".awards__card",{opacity:0}),t(i).to(".cursor",{opacity:1})}),(0,j.initForm)(),(0,F.initMenu)(),(0,P.initAttractHover)(),(0,q.initScrollTo)();
//# sourceMappingURL=about.584bd348.js.map
/**
 * Rebar
 * Reading Progress Bar for WordPress
 * Exclusively on https://1.envato.market/rebar
 *
 * @encoding        UTF-8
 * @version         2.1.0
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Dmitry Merkulov (dmitry@merkulov.design)
 * @support         help@merkulov.design
 **/
!function(e,o){"use strict";"function"==typeof define&&define.amd?define((function(){return o()})):"object"==typeof exports?module.exports=o:e.scrollProgress=o()}(this,(function(){"use strict";document.body;let e,o,t,n=0,r=!1,d={color:"#0274e6",styles:!0,prefix:"mdp-rebar",events:!0,shadow:!1},c=function(){if(mdpRebarWP.contentSelector&&null!==document.querySelector(mdpRebarWP.contentSelector)){let e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,t=window.innerHeight||document.documentElement.clientHeight;const r=document.querySelector(mdpRebarWP.contentSelector);let d=r.getBoundingClientRect().top-document.body.getBoundingClientRect().top,c=e-(d-t),l=e-(d+r.getBoundingClientRect().height-t);d<t&&(c=e);try{c>=0&&l<=0?n=100*c/r.getBoundingClientRect().height:c<0?n=0:l>100&&(n=100),o.style.width=n+"%"}catch(e){console.error(e)}}else try{let e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;t=i(),n=e/t*100,o.style.width=n+"%"}catch(e){console.error(e)}},l=function(){t=i(),c()},i=function(){return document.body.scrollHeight-(window.innerHeight||document.documentElement.clientHeight)};return{set:function(t){if(r)throw new Error("scrollProgress has already been set!");t&&function(e){if("object"==typeof e)for(var o in d)void 0!==e[o]&&(d[o]=e[o])}(t),e=document.createElement("div"),o=document.createElement("div"),e.id=d.prefix+"-wrapper",e.classList.add("rebar-"+mdpRebarWP.position,mdpRebarWP.style),o.id=d.prefix+"-element",e.appendChild(o),document.body.appendChild(e),o.style.width="0",e.style.width="100%",d.styles&&(o.style.backgroundColor=d.color,d.shadow&&(o.style.boxShadow="0 0 5px "+d.color),e.style.position="fixed",e.style.left="0"),l(),d.events&&(window.onscroll=c,window.onresize=l),r=!0},trigger:c,update:l}})),window.onload=function(){mdpRebarWP.color&&scrollProgress.set({color:mdpRebarWP.color,shadow:mdpRebarWP.shadow}),window.onresize=scrollProgress.update,window.onscroll=scrollProgress.trigger};
"use strict";(globalThis.webpackChunkbbl_nx=globalThis.webpackChunkbbl_nx||[]).push([[559],{97559(e,t,n){n.r(t),n.d(t,{renderDocs:()=>d,unmountDocs:()=>h}),n(95665),n(41539),n(88674);var r=n(67294),o=n(73935),a={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},l={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},c={textAlign:"center"},i=function(){return r.createElement("div",{style:a,className:"sb-nodocs sb-wrapper"},r.createElement("div",{style:l},r.createElement("h1",{style:c},"No Docs"),r.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's\xa0",r.createElement("code",null,"docs")," parameter. If you think this is an error:"),r.createElement("ul",null,r.createElement("li",null,"Please check the story definition."),r.createElement("li",null,"Please check the Storybook config."),r.createElement("li",null,"Try reloading the page.")),r.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function u(e,t,n,r,o,a,l){try{var c=e[a](l),i=c.value}catch(u){n(u);return}c.done?t(i):Promise.resolve(i).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function l(e){u(a,r,o,l,c,"next",e)}function c(e){u(a,r,o,l,c,"throw",e)}l(void 0)})}}function d(e,t,n,r){return m(e,t,n).then(r)}function m(e,t,n){return p.apply(this,arguments)}function p(){return(p=s(regeneratorRuntime.mark(function e(t,n,a){var l,c,u,s,d,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null!=(u=t.parameters.docs)&&u.getPage||null!=u&&u.page)&&!(null!=u&&u.getContainer||null!=u&&u.container))){e.next=3;break}throw Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=u.container,e.t1){e.next=8;break}return e.next=7,null===(l=u.getContainer)||void 0===l?void 0:l.call(u);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(e){var t=e.children;return r.createElement(r.Fragment,null,t)};case 11:if(s=e.t0,e.t3=u.page,e.t3){e.next=17;break}return e.next=16,null===(c=u.getPage)||void 0===c?void 0:c.call(u);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=i;case 20:return d=e.t2,m=r.createElement(s,{key:t.componentId,context:n},r.createElement(d,null)),e.next=24,new Promise(function(e){o.render(m,a,e)});case 24:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){o.unmountComponentAtNode(e)}i.displayName="NoDocs"}}]);
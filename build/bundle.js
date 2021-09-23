var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t){const e={};for(const n of t)e[n.name]=n.value;return e}let p;function $(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const g=[],y=[],b=[],v=[],x=Promise.resolve();let _=!1;function k(t){b.push(t)}let w=!1;const S=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];$(e),C(e.$$)}for($(null),g.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];S.has(e)||(S.add(e),e())}b.length=0}while(g.length);for(;v.length;)v.pop()();_=!1,w=!1,S.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const M=new Set;function T(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(r,s,c,l,u,d,f,h=[-1]){const m=p;$(r);const g=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:s.target||m.$$.root};f&&f(g.root);let y=!1;if(g.ctx=c?c(r,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&T(r,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();s.intro&&((b=r.$$.fragment)&&b.i&&(M.delete(b),b.i(v))),function(t,n,r,s){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,r),s||k((()=>{const n=a.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(k)}(r,s.target,s.anchor,s.customElement),E()}var b,v;$(m)}let H;function A(e){let n,o,i,r,h,p,$,m,g,y,b;return{c(){n=l("div"),o=u(e[2]),i=u(":"),r=u(e[1]),h=u(" "),p=l("div"),$=u(e[2]),m=u(":"),g=u(e[1]),y=u(":"),b=u(e[0]),this.c=t,d(n,"id","visually-hidden-oclock"),d(n,"class","visually-hidden-oclock"),d(n,"role","timer"),d(n,"aria-live","polite"),d(n,"aria-atomic","true"),d(p,"id","visually-oclock"),d(p,"class","visually-oclock"),d(p,"aria-hidden","true")},m(t,e){c(t,n,e),s(n,o),s(n,i),s(n,r),c(t,h,e),c(t,p,e),s(p,$),s(p,m),s(p,g),s(p,y),s(p,b)},p(t,[e]){4&e&&f(o,t[2]),2&e&&f(r,t[1]),4&e&&f($,t[2]),2&e&&f(g,t[1]),1&e&&f(b,t[0])},i:t,o:t,d(t){t&&a(n),t&&a(h),t&&a(p)}}}function D(t,e,n){let o,i,r,s=new Date;return m((()=>{const t=setInterval((()=>{n(3,s=new Date)}),1e3);return()=>{clearInterval(t)}})),t.$$.update=()=>{8&t.$$.dirty&&n(2,o=String(s.getHours()).padStart(2,"0")),8&t.$$.dirty&&n(1,i=String(s.getMinutes()).padStart(2,"0")),8&t.$$.dirty&&n(0,r=String(s.getSeconds()).padStart(2,"0"))},[r,i,o,s]}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class I extends H{constructor(t){super(),this.shadowRoot.innerHTML="<style>.visually-oclock{display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums}.visually-hidden-oclock{position:fixed;top:0px;left:0px;width:4px;height:4px;opacity:0;overflow:hidden;border:none;margin:0;padding:0;display:block;visibility:visible}</style>",j(this,{target:this.shadowRoot,props:h(this.attributes),customElement:!0},D,A,r,{},null),t&&t.target&&c(t.target,this,t.anchor)}}function L(e){let n,o;return{c(){n=l("div"),o=u(e[0]),this.c=t,d(n,"id","visually-seconds"),d(n,"class","visually-seconds"),d(n,"aria-hidden","true")},m(t,e){c(t,n,e),s(n,o)},p(t,[e]){1&e&&f(o,t[0])},i:t,o:t,d(t){t&&a(n)}}}function O(t,e,n){let o,i=new Date;return m((()=>{const t=setInterval((()=>{n(1,i=new Date)}),1e3);return()=>{clearInterval(t)}})),t.$$.update=()=>{2&t.$$.dirty&&n(0,o=String(i.getSeconds()).padStart(2,"0"))},[o,i]}customElements.define("oclock-component",I);class R extends H{constructor(t){super(),this.shadowRoot.innerHTML="<style>.visually-seconds{display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums}</style>",j(this,{target:this.shadowRoot,props:h(this.attributes),customElement:!0},O,L,r,{},null),t&&t.target&&c(t.target,this,t.anchor)}}return customElements.define("seconds-component",R),{Oclock:I,Seconds:R}}();
//# sourceMappingURL=bundle.js.map

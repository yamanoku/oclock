var U=Object.defineProperty;var G=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>G(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function g(){}function D(e){return e()}function I(){return Object.create(null)}function N(e){e.forEach(D)}function R(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function H(e,t,n){const r=W(e);if(!r.getElementById(t)){const s=O("style");s.id=t,s.textContent=n,X(r,s)}}function W(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function X(e,t){return p(e.head||e,t),t.sheet}function E(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function O(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function Y(){return m(" ")}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function tt(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let S;function k(e){S=e}function et(){if(!S)throw new Error("Function called outside component initialization");return S}function T(e){et().$$.on_mount.push(e)}const v=[],M=[];let x=[];const B=[],nt=Promise.resolve();let A=!1;function st(){A||(A=!0,nt.then(F))}function P(e){x.push(e)}const L=new Set;let y=0;function F(){if(y!==0)return;const e=S;do{try{for(;y<v.length;){const t=v[y];y++,k(t),it(t.$$)}}catch(t){throw v.length=0,y=0,t}for(k(null),v.length=0,y=0;M.length;)M.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];L.has(n)||(L.add(n),n())}x.length=0}while(v.length);for(;B.length;)B.pop()();A=!1,L.clear(),k(e)}function it(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function rt(e){const t=[],n=[];x.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),x=t}const ot=new Set;function ct(e,t){e&&e.i&&(ot.delete(e),e.i(t))}function ut(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),P(()=>{const c=e.$$.on_mount.map(D).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...c):N(c),e.$$.on_mount=[]}),s.forEach(P)}function lt(e,t){const n=e.$$;n.fragment!==null&&(rt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(e,t){e.$$.dirty[0]===-1&&(v.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,r,s,c,i=null,o=[-1]){const l=S;k(e);const u=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(e,t.props||{},(f,d,...a)=>{const C=a.length?a[0]:d;return u.ctx&&s(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),_&&ft(e,f)),d}):[],u.update(),_=!0,N(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const f=Z(t.target);u.fragment&&u.fragment.l(f),f.forEach(w)}else u.fragment&&u.fragment.c();t.intro&&ct(e.$$.fragment),ut(e,t.target,t.anchor),F()}k(l)}let V;typeof HTMLElement=="function"&&(V=class extends HTMLElement{constructor(t,n,r){super();$(this,"$$ctor");$(this,"$$s");$(this,"$$c");$(this,"$$cn",!1);$(this,"$$d",{});$(this,"$$r",!1);$(this,"$$p_d",{});$(this,"$$l",{});$(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const s=this.$$c.$on(t,n);this.$$l_u.set(n,s)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const s=this.$$l_u.get(n);s&&(s(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let n=function(i){return()=>{let o;return{c:function(){o=O("slot"),i!=="default"&&h(o,"name",i)},m:function(_,f){E(_,o,f)},d:function(_){_&&w(o)}}}};var t=n;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},s=tt(this);for(const i of this.$$s)i in s&&(r[i]=[n(i)]);for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=j(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$scope:{ctx:[]}}});const c=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const o=j(i,this.$$d[i],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,o)}this.$$r=!1};this.$$c.$$.after_update.push(c),c();for(const i in this.$$l)for(const o of this.$$l[i]){const l=this.$$c.$on(i,o);this.$$l_u.set(o,l)}this.$$l={}}}attributeChangedCallback(t,n,r){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=j(t,r,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function j(e,t,n,r){var c;const s=(c=n[e])==null?void 0:c.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function q(e,t,n,r,s,c){let i=class extends V{constructor(){super(e,n,s),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(o=>(t[o].attribute||o).toLowerCase())}};return Object.keys(t).forEach(o=>{Object.defineProperty(i.prototype,o,{get(){return this.$$c&&o in this.$$c?this.$$c[o]:this.$$d[o]},set(l){var u;l=j(o,l,t),this.$$d[o]=l,(u=this.$$c)==null||u.$set({[o]:l})}})}),r.forEach(o=>{Object.defineProperty(i.prototype,o,{get(){var l;return(l=this.$$c)==null?void 0:l[o]}})}),e.element=i,i}class K{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){lt(this,1),this.$destroy=g}$on(t,n){if(!R(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);function at(e){H(e,"svelte-o6je52",".visually-oclock.svelte-o6je52{display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none}.visually-hidden-oclock.svelte-o6je52{position:fixed;top:0px;left:0px;width:4px;height:4px;opacity:0;overflow:hidden;border:none;margin:0;padding:0;display:block;visibility:visible}")}function $t(e){let t,n,r,s,c,i,o,l,u,_,f;return{c(){t=O("div"),n=m(e[2]),r=m(":"),s=m(e[1]),c=Y(),i=O("div"),o=m(e[2]),l=m(":"),u=m(e[1]),_=m(":"),f=m(e[0]),h(t,"id","visually-hidden-oclock"),h(t,"class","visually-hidden-oclock svelte-o6je52"),h(t,"role","timer"),h(t,"aria-live","polite"),h(t,"aria-atomic","true"),h(i,"id","visually-oclock"),h(i,"class","visually-oclock svelte-o6je52"),h(i,"aria-hidden","true")},m(d,a){E(d,t,a),p(t,n),p(t,r),p(t,s),E(d,c,a),E(d,i,a),p(i,o),p(i,l),p(i,u),p(i,_),p(i,f)},p(d,[a]){a&4&&b(n,d[2]),a&2&&b(s,d[1]),a&4&&b(o,d[2]),a&2&&b(u,d[1]),a&1&&b(f,d[0])},i:g,o:g,d(d){d&&(w(t),w(c),w(i))}}}function ht(e,t,n){let r,s,c,i=new Date;return T(()=>{const o=setInterval(()=>{n(3,i=new Date)},1e3);return()=>{clearInterval(o)}}),e.$$.update=()=>{e.$$.dirty&8&&n(2,r=String(i.getHours()).padStart(2,"0")),e.$$.dirty&8&&n(1,s=String(i.getMinutes()).padStart(2,"0")),e.$$.dirty&8&&n(0,c=String(i.getSeconds()).padStart(2,"0"))},[c,s,r,i]}class pt extends K{constructor(t){super(),J(this,t,ht,$t,z,{},at)}}customElements.define("oclock-component",q(pt,{},[],[],!0));function mt(e){H(e,"svelte-152t239",".visually-seconds.svelte-152t239{display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none}")}function _t(e){let t,n;return{c(){t=O("div"),n=m(e[0]),h(t,"id","visually-seconds"),h(t,"class","visually-seconds svelte-152t239"),h(t,"aria-hidden","true")},m(r,s){E(r,t,s),p(t,n)},p(r,[s]){s&1&&b(n,r[0])},i:g,o:g,d(r){r&&w(t)}}}function gt(e,t,n){let r,s=new Date;return T(()=>{const c=setInterval(()=>{n(1,s=new Date)},1e3);return()=>{clearInterval(c)}}),e.$$.update=()=>{e.$$.dirty&2&&n(0,r=String(s.getSeconds()).padStart(2,"0"))},[r,s]}class yt extends K{constructor(t){super(),J(this,t,gt,_t,z,{},mt)}}customElements.define("seconds-component",q(yt,{},[],[],!0));

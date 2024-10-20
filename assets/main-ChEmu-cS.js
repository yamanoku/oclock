var Re=Object.defineProperty;var Ht=t=>{throw TypeError(t)};var Ae=(t,e,n)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var O=(t,e,n)=>Ae(t,typeof e!="symbol"?e+"":e,n),Bt=(t,e,n)=>e.has(t)||Ht("Cannot "+n);var w=(t,e,n)=>(Bt(t,e,"read from private field"),n?n.call(t):e.get(t)),wt=(t,e,n)=>e.has(t)?Ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Et=(t,e,n,s)=>(Bt(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const De="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(De);const Le=1,Ie=2,Pe="[",je="]",X={},E=Symbol(),zt=!1;function Ct(t){console.warn("hydration_mismatch")}var Jt=Array.isArray,Me=Array.from,dt=Object.keys,_t=Object.defineProperty,U=Object.getOwnPropertyDescriptor,qe=Object.prototype,Fe=Array.prototype,He=Object.getPrototypeOf;function Be(t){for(var e=0;e<t.length;e++)t[e]()}const L=2,Gt=4,$t=8,Rt=16,M=32,mt=64,B=128,ht=256,S=512,j=1024,nt=2048,Zt=4096,rt=8192,Ve=16384,Ye=1<<18,Qt=1<<19,bt=Symbol("$state");function Xt(t){return t===this.v}function Ue(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ke(t){return!Ue(t,this.v)}function We(t){throw new Error("effect_in_teardown")}function ze(){throw new Error("effect_in_unowned_derived")}function Je(t){throw new Error("effect_orphan")}function Ge(){throw new Error("effect_update_depth_exceeded")}function Ze(){throw new Error("hydration_failed")}function Qe(){throw new Error("state_descriptors_fixed")}function Xe(){throw new Error("state_prototype_fixed")}function tn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}function T(t){return{f:0,v:t,reactions:null,equals:Xt,version:0}}function te(t){return rn(T(t))}function nn(t,e=!1){var s;const n=T(t);return e||(n.equals=Ke),$!==null&&$.l!==null&&((s=$.l).s??(s.s=[])).push(n),n}function rn(t){return v!==null&&v.f&L&&(C===null?vn([t]):C.push(t)),t}function N(t,e){return v!==null&&Lt()&&v.f&(L|Rt)&&(C===null||!C.includes(t))&&en(),sn(t,e)}function sn(t,e){return t.equals(e)||(t.v=e,t.version=$e(),ee(t,j),Lt()&&h!==null&&h.f&S&&!(h.f&M)&&(y!==null&&y.includes(t)?(I(h,j),pt(h)):P===null?$n([t]):P.push(t))),e}function ee(t,e){var n=t.reactions;if(n!==null)for(var s=Lt(),r=n.length,i=0;i<r;i++){var l=n[i],u=l.f;u&j||!s&&l===h||(I(l,e),u&(S|B)&&(u&L?ee(l,nt):pt(l)))}}function ot(t){var e=L|j;h===null?e|=B:h.f|=Qt;const n={children:null,deps:null,equals:Xt,f:e,fn:t,reactions:null,v:null,version:0,parent:h};if(v!==null&&v.f&L){var s=v;(s.children??(s.children=[])).push(n)}return n}function ne(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var s=e[n];s.f&L?At(s):it(s)}}}function re(t){var e,n=h;J(t.parent);try{ne(t),e=me(t)}finally{J(n)}return e}function se(t){var e=re(t),n=(Y||t.f&B)&&t.deps!==null?nt:S;I(t,n),t.equals(e)||(t.v=e,t.version=$e())}function At(t){ne(t),et(t,0),I(t,rt),t.v=t.children=t.deps=t.reactions=null}function ln(t){h===null&&v===null&&Je(),v!==null&&v.f&B&&ze(),Dt&&We()}function un(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function st(t,e,n,s=!0){var r=(t&mt)!==0,i=h,l={ctx:$,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|j,first:null,fn:e,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var u=K;try{Vt(!0),It(l),l.f|=Ve}catch(f){throw it(l),f}finally{Vt(u)}}else e!==null&&pt(l);var a=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Qt)===0;if(!a&&!r&&s&&(i!==null&&un(l,i),v!==null&&v.f&L)){var o=v;(o.children??(o.children=[])).push(l)}return l}function ie(t){ln();var e=h!==null&&(h.f&M)!==0&&$!==null&&!$.m;if(e){var n=$;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var s=ue(t);return s}}function le(t){const e=st(mt,t,!0);return()=>{it(e)}}function ue(t){return st(Gt,t,!1)}function on(t){return st($t,t,!0)}function oe(t){return fn(t)}function fn(t,e=0){return st($t|Rt|e,t,!0)}function an(t,e=!0){return st($t|M,t,!0,e)}function fe(t){var e=t.teardown;if(e!==null){const n=Dt,s=v;Yt(!0),z(null);try{e.call(null)}finally{Yt(n),z(s)}}}function ae(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)At(e[n])}}function ce(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var s=n.next;it(n,e),n=s}}function cn(t){for(var e=t.first;e!==null;){var n=e.next;e.f&M||it(e),e=n}}function it(t,e=!0){var n=!1;if((e||t.f&Ye)&&t.nodes_start!==null){var s=t.nodes_start,r=t.nodes_end,i=v,l=h;z(null),J(null);try{for(;s!==null;){var u=s===r?null:Q(s);s.remove(),s=u}}finally{z(i),J(l)}n=!0}ae(t),ce(t,e&&!n),et(t,0),I(t,rt);var a=t.transitions;if(a!==null)for(const f of a)f.stop();fe(t);var o=t.parent;o!==null&&o.first!==null&&de(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function de(t){var e=t.parent,n=t.prev,s=t.next;n!==null&&(n.next=s),s!==null&&(s.prev=n),e!==null&&(e.first===t&&(e.first=s),e.last===t&&(e.last=n))}let vt=!1,St=[];function _e(){vt=!1;const t=St.slice();St=[],Be(t)}function dn(t){vt||(vt=!0,queueMicrotask(_e)),St.push(t)}function _n(){vt&&_e()}const he=0,hn=1;let ft=he,tt=!1,K=!1,Dt=!1;function Vt(t){K=t}function Yt(t){Dt=t}let H=[],W=0;let v=null;function z(t){v=t}let h=null;function J(t){h=t}let C=null;function vn(t){C=t}let y=null,b=0,P=null;function $n(t){P=t}let ve=0,Y=!1,$=null;function $e(){return++ve}function Lt(){return $!==null&&$.l===null}function yt(t){var l,u;var e=t.f;if(e&j)return!0;if(e&nt){var n=t.deps,s=(e&B)!==0;if(n!==null){var r;if(e&ht){for(r=0;r<n.length;r++)((l=n[r]).reactions??(l.reactions=[])).push(t);t.f^=ht}for(r=0;r<n.length;r++){var i=n[r];if(yt(i)&&se(i),s&&h!==null&&!Y&&!((u=i==null?void 0:i.reactions)!=null&&u.includes(t))&&(i.reactions??(i.reactions=[])).push(t),i.version>t.version)return!0}}s||I(t,S)}return!1}function mn(t,e,n){throw t}function me(t){var c;var e=y,n=b,s=P,r=v,i=Y,l=C,u=t.f;y=null,b=0,P=null,v=u&(M|mt)?null:t,Y=!K&&(u&B)!==0,C=null;try{var a=(0,t.fn)(),o=t.deps;if(y!==null){var f;if(et(t,b),o!==null&&b>0)for(o.length=b+y.length,f=0;f<y.length;f++)o[b+f]=y[f];else t.deps=o=y;if(!Y)for(f=b;f<o.length;f++)((c=o[f]).reactions??(c.reactions=[])).push(t)}else o!==null&&b<o.length&&(et(t,b),o.length=b);return a}finally{y=e,b=n,P=s,v=r,Y=i,C=l}}function yn(t,e){let n=e.reactions;if(n!==null){var s=n.indexOf(t);if(s!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[s]=n[r],n.pop())}}n===null&&e.f&L&&(y===null||!y.includes(e))&&(I(e,nt),e.f&(B|ht)||(e.f^=ht),et(e,0))}function et(t,e){var n=t.deps;if(n!==null)for(var s=e;s<n.length;s++)yn(t,n[s])}function It(t){var e=t.f;if(!(e&rt)){I(t,S);var n=h,s=$;h=t,$=t.ctx;try{ae(t),e&Rt?cn(t):ce(t),fe(t);var r=me(t);t.teardown=typeof r=="function"?r:null,t.version=ve}catch(i){mn(i)}finally{h=n,$=s}}}function ye(){W>1e3&&(W=0,Ge()),W++}function pe(t){var e=t.length;if(e!==0){ye();var n=K;K=!0;try{for(var s=0;s<e;s++){var r=t[s];r.f&S||(r.f^=S);var i=[];ge(r,i),pn(i)}}finally{K=n}}}function pn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var s=t[n];!(s.f&(rt|Zt))&&yt(s)&&(It(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null?de(s):s.fn=null))}}function gn(){if(tt=!1,W>1001)return;const t=H;H=[],pe(t),tt||(W=0)}function pt(t){ft===he&&(tt||(tt=!0,queueMicrotask(gn)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(mt|M)){if(!(n&S))return;e.f^=S}}H.push(e)}function ge(t,e){var n=t.first,s=[];t:for(;n!==null;){var r=n.f,i=(r&M)!==0,l=i&&(r&S)!==0;if(!l&&!(r&Zt))if(r&$t){i?n.f^=S:yt(n)&&It(n);var u=n.first;if(u!==null){n=u;continue}}else r&Gt&&s.push(n);var a=n.next;if(a===null){let c=n.parent;for(;c!==null;){if(t===c)break t;var o=c.next;if(o!==null){n=o;continue t}c=c.parent}}n=a}for(var f=0;f<s.length;f++)u=s[f],e.push(u),ge(u,e)}function we(t){var e=ft,n=H;try{ye();const r=[];ft=hn,H=r,tt=!1,pe(n);var s=t==null?void 0:t();return _n(),(H.length>0||r.length>0)&&we(),W=0,s}finally{ft=e,H=n}}function p(t){var u;var e=t.f,n=(e&L)!==0;if(n&&e&rt){var s=re(t);return At(t),s}if(v!==null){C!==null&&C.includes(t)&&tn();var r=v.deps;y===null&&r!==null&&r[b]===t?b++:y===null?y=[t]:y.push(t),P!==null&&h!==null&&h.f&S&&!(h.f&M)&&P.includes(t)&&(I(h,j),pt(h))}else if(n&&t.deps===null){var i=t,l=i.parent;l!==null&&!((u=l.deriveds)!=null&&u.includes(i))&&(l.deriveds??(l.deriveds=[])).push(i)}return n&&(i=t,yt(i)&&se(i)),t.v}const wn=~(j|nt|S);function I(t,e){t.f=t.f&wn|e}function Pt(t,e=!1,n){$={p:$,c:null,e:null,m:!1,s:t,x:null,l:null},e||($.l={s:null,u:null,r1:[],r2:T(!1)})}function jt(t){const e=$;if(e!==null){const l=e.e;if(l!==null){var n=h,s=v;e.e=null;try{for(var r=0;r<l.length;r++){var i=l[r];J(i.effect),z(i.reaction),ue(i.fn)}}finally{J(n),z(s)}}$=e.p,e.m=!0}return{}}function D(t,e=null,n){if(typeof t!="object"||t===null||bt in t)return t;const s=He(t);if(s!==qe&&s!==Fe)return t;var r=new Map,i=Jt(t),l=T(0);i&&r.set("length",T(t.length));var u;return new Proxy(t,{defineProperty(a,o,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Qe();var c=r.get(o);return c===void 0?(c=T(f.value),r.set(o,c)):N(c,D(f.value,u)),!0},deleteProperty(a,o){var f=r.get(o);if(f===void 0)o in a&&r.set(o,T(E));else{if(i&&typeof o=="string"){var c=r.get("length"),d=Number(o);Number.isInteger(d)&&d<c.v&&N(c,d)}N(f,E),Ut(l)}return!0},get(a,o,f){var m;if(o===bt)return t;var c=r.get(o),d=o in a;if(c===void 0&&(!d||(m=U(a,o))!=null&&m.writable)&&(c=T(D(d?a[o]:E,u)),r.set(o,c)),c!==void 0){var _=p(c);return _===E?void 0:_}return Reflect.get(a,o,f)},getOwnPropertyDescriptor(a,o){var f=Reflect.getOwnPropertyDescriptor(a,o);if(f&&"value"in f){var c=r.get(o);c&&(f.value=p(c))}else if(f===void 0){var d=r.get(o),_=d==null?void 0:d.v;if(d!==void 0&&_!==E)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(a,o){var _;if(o===bt)return!0;var f=r.get(o),c=f!==void 0&&f.v!==E||Reflect.has(a,o);if(f!==void 0||h!==null&&(!c||(_=U(a,o))!=null&&_.writable)){f===void 0&&(f=T(c?D(a[o],u):E),r.set(o,f));var d=p(f);if(d===E)return!1}return c},set(a,o,f,c){var Ft;var d=r.get(o),_=o in a;if(i&&o==="length")for(var m=f;m<d.v;m+=1){var R=r.get(m+"");R!==void 0?N(R,E):m in a&&(R=T(E),r.set(m+"",R))}d===void 0?(!_||(Ft=U(a,o))!=null&&Ft.writable)&&(d=T(void 0),N(d,D(f,u)),r.set(o,d)):(_=d.v!==E,N(d,D(f,u)));var q=Reflect.getOwnPropertyDescriptor(a,o);if(q!=null&&q.set&&q.set.call(c,f),!_){if(i&&typeof o=="string"){var F=r.get("length"),gt=Number(o);Number.isInteger(gt)&&gt>=F.v&&N(F,gt+1)}Ut(l)}return!0},ownKeys(a){p(l);var o=Reflect.ownKeys(a).filter(d=>{var _=r.get(d);return _===void 0||_.v!==E});for(var[f,c]of r)c.v!==E&&!(f in a)&&o.push(f);return o},setPrototypeOf(){Xe()}})}function Ut(t,e=1){N(t,t.v+e)}var Kt,Ee,be;function xt(){if(Kt===void 0){Kt=window;var t=Element.prototype,e=Node.prototype;Ee=U(e,"firstChild").get,be=U(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Mt(t=""){return document.createTextNode(t)}function G(t){return Ee.call(t)}function Q(t){return be.call(t)}function Ot(t){if(!k)return G(t);var e=G(g);return e===null&&(e=g.appendChild(Mt())),Z(e),e}function En(t,e){if(!k){var n=G(t);return n instanceof Comment&&n.data===""?Q(n):n}return g}function bn(t,e=1,n=!1){let s=k?g:t;for(;e--;)s=Q(s);if(!k)return s;var r=s.nodeType;if(n&&r!==3){var i=Mt();return s==null||s.before(i),Z(i),i}return Z(s),s}function Sn(t){t.textContent=""}let k=!1;function lt(t){k=t}let g;function Z(t){if(t===null)throw Ct(),X;return g=t}function Se(){return Z(Q(g))}function Tt(t){if(k){if(Q(g)!==null)throw Ct(),X;g=t}}const xn=new Set,Wt=new Set;function ut(t){var q;var e=this,n=e.ownerDocument,s=t.type,r=((q=t.composedPath)==null?void 0:q.call(t))||[],i=r[0]||t.target,l=0,u=t.__root;if(u){var a=r.indexOf(u);if(a!==-1&&(e===document||e===window)){t.__root=e;return}var o=r.indexOf(e);if(o===-1)return;a<=o&&(l=a)}if(i=r[l]||t.target,i!==e){_t(t,"currentTarget",{configurable:!0,get(){return i||n}});try{for(var f,c=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var _=i["__"+s];if(_!==void 0&&!i.disabled)if(Jt(_)){var[m,...R]=_;m.apply(i,[t,...R])}else _.call(i,t)}catch(F){f?c.push(F):f=F}if(t.cancelBubble||d===e||d===null)break;i=d}if(f){for(let F of c)queueMicrotask(()=>{throw F});throw f}}finally{t.__root=e,delete t.currentTarget}}}function On(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function at(t,e){var n=h;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function xe(t,e){var n=(e&Le)!==0,s=(e&Ie)!==0,r,i=!t.startsWith("<!>");return()=>{if(k)return at(g,null),g;r===void 0&&(r=On(i?t:"<!>"+t),n||(r=G(r)));var l=s?document.importNode(r,!0):r.cloneNode(!0);if(n){var u=G(l),a=l.lastChild;at(u,a)}else at(l,l);return l}}function qt(t,e){if(k){h.nodes_end=g,Se();return}t!==null&&t.before(e)}const Tn=["touchstart","touchmove"];function Nn(t){return Tn.includes(t)}function Nt(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function Oe(t,e){return Te(t,e)}function kn(t,e){xt(),e.intro=e.intro??!1;const n=e.target,s=k,r=g;try{for(var i=G(n);i&&(i.nodeType!==8||i.data!==Pe);)i=Q(i);if(!i)throw X;lt(!0),Z(i),Se();const l=Te(t,{...e,anchor:i});if(g===null||g.nodeType!==8||g.data!==je)throw Ct(),X;return lt(!1),l}catch(l){if(l===X)return e.recover===!1&&Ze(),xt(),Sn(n),lt(!1),Oe(t,e);throw l}finally{lt(s),Z(r)}}const V=new Map;function Te(t,{target:e,anchor:n,props:s={},events:r,context:i,intro:l=!0}){xt();var u=new Set,a=c=>{for(var d=0;d<c.length;d++){var _=c[d];if(!u.has(_)){u.add(_);var m=Nn(_);e.addEventListener(_,ut,{passive:m});var R=V.get(_);R===void 0?(document.addEventListener(_,ut,{passive:m}),V.set(_,1)):V.set(_,R+1)}}};a(Me(xn)),Wt.add(a);var o=void 0,f=le(()=>{var c=n??e.appendChild(Mt());return an(()=>{if(i){Pt({});var d=$;d.c=i}r&&(s.$$events=r),k&&at(c,null),o=t(c,s)||{},k&&(h.nodes_end=g),i&&jt()}),()=>{var m;for(var d of u){e.removeEventListener(d,ut);var _=V.get(d);--_===0?(document.removeEventListener(d,ut),V.delete(d)):V.set(d,_)}Wt.delete(a),kt.delete(o),c!==n&&((m=c.parentNode)==null||m.removeChild(c))}});return kt.set(o,f),o}let kt=new WeakMap;function Cn(t){const e=kt.get(t);e&&e()}function Ne(t,e){dn(()=>{var n=t.getRootNode(),s=n.host?n:n.head??n.ownerDocument.head;if(!s.querySelector("#"+e.hash)){const r=document.createElement("style");r.id=e.hash,r.textContent=e.code,s.appendChild(r)}})}function Rn(t){return new An(t)}var A,x;class An{constructor(e){wt(this,A);wt(this,x);var i;var n=new Map,s=(l,u)=>{var a=nn(u);return n.set(l,a),a};const r=new Proxy({...e.props||{},$$events:{}},{get(l,u){return p(n.get(u)??s(u,Reflect.get(l,u)))},has(l,u){return p(n.get(u)??s(u,Reflect.get(l,u))),Reflect.has(l,u)},set(l,u,a){return N(n.get(u)??s(u,a),a),Reflect.set(l,u,a)}});Et(this,x,(e.hydrate?kn:Oe)(e.component,{target:e.target,props:r,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((i=e==null?void 0:e.props)!=null&&i.$$host)||e.sync===!1)&&we(),Et(this,A,r.$$events);for(const l of Object.keys(w(this,x)))l==="$set"||l==="$destroy"||l==="$on"||_t(this,l,{get(){return w(this,x)[l]},set(u){w(this,x)[l]=u},enumerable:!0});w(this,x).$set=l=>{Object.assign(r,l)},w(this,x).$destroy=()=>{Cn(w(this,x))}}$set(e){w(this,x).$set(e)}$on(e,n){w(this,A)[e]=w(this,A)[e]||[];const s=(...r)=>n.call(this,...r);return w(this,A)[e].push(s),()=>{w(this,A)[e]=w(this,A)[e].filter(r=>r!==s)}}$destroy(){w(this,x).$destroy()}}A=new WeakMap,x=new WeakMap;let ke;typeof HTMLElement=="function"&&(ke=class extends HTMLElement{constructor(e,n,s){super();O(this,"$$ctor");O(this,"$$s");O(this,"$$c");O(this,"$$cn",!1);O(this,"$$d",{});O(this,"$$r",!1);O(this,"$$p_d",{});O(this,"$$l",{});O(this,"$$l_u",new Map);O(this,"$$me");this.$$ctor=e,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(e,n,s){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const r=this.$$c.$on(e,n);this.$$l_u.set(n,r)}super.addEventListener(e,n,s)}removeEventListener(e,n,s){if(super.removeEventListener(e,n,s),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let n=function(i){return l=>{const u=document.createElement("slot");i!=="default"&&(u.name=i),qt(l,u)}};var e=n;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const s={},r=Dn(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=n(i),s.default=!0):s[i]=n(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=ct(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Rn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:s,$$host:this}}),this.$$me=le(()=>{on(()=>{var i;this.$$r=!0;for(const l of dt(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const u=ct(l,this.$$d[l],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,u)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const u=this.$$c.$on(i,l);this.$$l_u.set(l,u)}this.$$l={}}}attributeChangedCallback(e,n,s){var r;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ct(e,s,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return dt(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function ct(t,e,n,s){var i;const r=(i=n[t])==null?void 0:i.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!n[t])return e;if(s==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Dn(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Ce(t,e,n,s,r,i){let l=class extends ke{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return dt(e).map(u=>(e[u].attribute||u).toLowerCase())}};return dt(e).forEach(u=>{_t(l.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(a){var c;a=ct(u,a,e),this.$$d[u]=a;var o=this.$$c;if(o){var f=(c=U(o,u))==null?void 0:c.get;f?o[u]=a:o.$set({[u]:a})}}})}),s.forEach(u=>{_t(l.prototype,u,{get(){var a;return(a=this.$$c)==null?void 0:a[u]}})}),t.element=l,l}var Ln=xe('<div id="visually-hidden-oclock" class="visually-hidden-oclock svelte-o6je52" role="timer" aria-live="polite" aria-atomic="true"> </div> <div id="visually-oclock" class="visually-oclock svelte-o6je52" aria-hidden="true"> </div>',1);const In={hash:"svelte-o6je52",code:`
  .visually-oclock.svelte-o6je52 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }

  .visually-hidden-oclock.svelte-o6je52 {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 4px;
    height: 4px;
    opacity: 0;
    overflow: hidden;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
    visibility: visible;
  }
`};function Pn(t,e){Pt(e,!0),Ne(t,In);let n=te(D(new Date)),s=ot(()=>String(p(n).getHours()).padStart(2,"0")),r=ot(()=>String(p(n).getMinutes()).padStart(2,"0")),i=ot(()=>String(p(n).getSeconds()).padStart(2,"0"));ie(()=>{const c=setInterval(()=>{N(n,D(new Date))},1e3);return()=>{clearInterval(c)}});var l=Ln(),u=En(l),a=Ot(u);Tt(u);var o=bn(u,2),f=Ot(o);Tt(o),oe(()=>{Nt(a,`${p(s)??""}:${p(r)??""}`),Nt(f,`${p(s)??""}:${p(r)??""}:${p(i)??""}`)}),qt(t,l),jt()}customElements.define("oclock-component",Ce(Pn,{},[],[],!0));var jn=xe('<div id="visually-seconds" class="visually-seconds svelte-152t239" aria-hidden="true"> </div>');const Mn={hash:"svelte-152t239",code:`
  .visually-seconds.svelte-152t239 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }
`};function qn(t,e){Pt(e,!0),Ne(t,Mn);let n=te(D(new Date)),s=ot(()=>String(p(n).getSeconds()).padStart(2,"0"));ie(()=>{const l=setInterval(()=>{N(n,D(new Date))},1e3);return()=>{clearInterval(l)}});var r=jn(),i=Ot(r);Tt(r),oe(()=>Nt(i,p(s))),qt(t,r),jt()}customElements.define("seconds-component",Ce(qn,{},[],[],!0));

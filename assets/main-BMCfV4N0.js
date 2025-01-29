var je=Object.defineProperty;var zt=t=>{throw TypeError(t)};var Me=(t,e,r)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var N=(t,e,r)=>Me(t,typeof e!="symbol"?e+"":e,r),Gt=(t,e,r)=>e.has(t)||zt("Cannot "+r);var y=(t,e,r)=>(Gt(t,e,"read from private field"),r?r.call(t):e.get(t)),kt=(t,e,r)=>e.has(t)?zt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Ct=(t,e,r,n)=>(Gt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const qe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);const He=1,Ye=2,Be="[",Ve="]",lt={},b=Symbol(),Ue=["touchstart","touchmove"];function Ke(t){return Ue.includes(t)}const At=!1;var ee=Array.isArray,We=Array.prototype.indexOf,ze=Array.from,pt=Object.keys,yt=Object.defineProperty,J=Object.getOwnPropertyDescriptor,Ge=Object.prototype,Je=Array.prototype,Ze=Object.getPrototypeOf;function Qe(t){for(var e=0;e<t.length;e++)t[e]()}const w=2,re=4,Tt=8,Mt=16,M=32,rt=64,gt=128,U=256,wt=512,S=1024,F=2048,K=4096,Et=8192,nt=16384,Xe=32768,tr=65536,er=1<<19,ne=1<<20,Rt=Symbol("$state"),rr=Symbol("legacy props");function se(t){return t===this.v}function nr(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function sr(t){return!nr(t,this.v)}function ir(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ur(t){throw new Error("https://svelte.dev/e/effect_orphan")}function or(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fr(){throw new Error("https://svelte.dev/e/hydration_failed")}function ar(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _r(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vr=!1,hr=!1;function R(t,e){var r={f:0,v:t,reactions:null,equals:se,rv:0,wv:0};return r}function ie(t){return mr(R(t))}function $r(t,e=!1){const r=R(t);return e||(r.equals=sr),r}function mr(t){return v!==null&&!B&&v.f&w&&(A===null?Ir([t]):A.push(t)),t}function k(t,e){return v!==null&&!B&&Se()&&v.f&(w|Mt)&&(A===null||!A.includes(t))&&_r(),pr(t,e)}function pr(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=xe(),le(t,F),h!==null&&h.f&S&&!(h.f&(M|rt))&&(D===null?Fr([t]):D.push(t))),e}function le(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var i=r[s],l=i.f;l&F||(I(i,e),l&(S|U)&&(l&w?le(i,K):Vt(i)))}}function qt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function dt(t){C=t}let p;function V(t){if(t===null)throw qt(),lt;return p=t}function ue(){return V(st(p))}function Dt(t){if(C){if(st(p)!==null)throw qt(),lt;p=t}}function L(t,e=null,r){if(typeof t!="object"||t===null||Rt in t)return t;const n=Ze(t);if(n!==Ge&&n!==Je)return t;var s=new Map,i=ee(t),l=R(0);i&&s.set("length",R(t.length));var u;return new Proxy(t,{defineProperty(f,o,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&ar();var a=s.get(o);return a===void 0?(a=R(d.value),s.set(o,a)):k(a,L(d.value,u)),!0},deleteProperty(f,o){var d=s.get(o);if(d===void 0)o in f&&s.set(o,R(b));else{if(i&&typeof o=="string"){var a=s.get("length"),c=Number(o);Number.isInteger(c)&&c<a.v&&k(a,c)}k(d,b),Jt(l)}return!0},get(f,o,d){var $;if(o===Rt)return t;var a=s.get(o),c=o in f;if(a===void 0&&(!c||($=J(f,o))!=null&&$.writable)&&(a=R(L(c?f[o]:b,u)),s.set(o,a)),a!==void 0){var _=m(a);return _===b?void 0:_}return Reflect.get(f,o,d)},getOwnPropertyDescriptor(f,o){var d=Reflect.getOwnPropertyDescriptor(f,o);if(d&&"value"in d){var a=s.get(o);a&&(d.value=m(a))}else if(d===void 0){var c=s.get(o),_=c==null?void 0:c.v;if(c!==void 0&&_!==b)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return d},has(f,o){var _;if(o===Rt)return!0;var d=s.get(o),a=d!==void 0&&d.v!==b||Reflect.has(f,o);if(d!==void 0||h!==null&&(!a||(_=J(f,o))!=null&&_.writable)){d===void 0&&(d=R(a?L(f[o],u):b),s.set(o,d));var c=m(d);if(c===b)return!1}return a},set(f,o,d,a){var q;var c=s.get(o),_=o in f;if(i&&o==="length")for(var $=d;$<c.v;$+=1){var T=s.get($+"");T!==void 0?k(T,b):$ in f&&(T=R(b),s.set($+"",T))}c===void 0?(!_||(q=J(f,o))!=null&&q.writable)&&(c=R(void 0),k(c,L(d,u)),s.set(o,c)):(_=c.v!==b,k(c,L(d,u)));var W=Reflect.getOwnPropertyDescriptor(f,o);if(W!=null&&W.set&&W.set.call(a,d),!_){if(i&&typeof o=="string"){var ct=s.get("length"),z=Number(o);Number.isInteger(z)&&z>=ct.v&&k(ct,z+1)}Jt(l)}return!0},ownKeys(f){m(l);var o=Reflect.ownKeys(f).filter(c=>{var _=s.get(c);return _===void 0||_.v!==b});for(var[d,a]of s)a.v!==b&&!(d in f)&&o.push(d);return o},setPrototypeOf(){cr()}})}function Jt(t,e=1){k(t,t.v+e)}var Zt,oe,fe;function Pt(){if(Zt===void 0){Zt=window;var t=Element.prototype,e=Node.prototype;oe=J(e,"firstChild").get,fe=J(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function bt(t=""){return document.createTextNode(t)}function X(t){return oe.call(t)}function st(t){return fe.call(t)}function Lt(t,e){if(!C)return X(t);var r=X(p);if(r===null)r=p.appendChild(bt());else if(e&&r.nodeType!==3){var n=bt();return r==null||r.before(n),V(n),n}return V(r),r}function yr(t,e){if(!C){var r=X(t);return r instanceof Comment&&r.data===""?st(r):r}return p}function gr(t,e=1,r=!1){let n=C?p:t;for(var s;e--;)s=n,n=st(n);if(!C)return n;var i=n==null?void 0:n.nodeType;if(r&&i!==3){var l=bt();return n===null?s==null||s.after(l):n.before(l),V(l),l}return V(n),n}function wr(t){t.textContent=""}function ut(t){var e=w|F;h===null?e|=U:h.f|=ne;var r=v!==null&&v.f&w?v:null;return{children:null,ctx:E,deps:null,equals:se,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??h}}function ae(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&w?Ht(n):j(n)}}}function Er(t){for(var e=t.parent;e!==null;){if(!(e.f&w))return e;e=e.parent}return null}function ce(t){var e,r=h;et(Er(t));try{ae(t),e=Oe(t)}finally{et(r)}return e}function de(t){var e=ce(t),r=(Y||t.f&U)&&t.deps!==null?K:S;I(t,r),t.equals(e)||(t.v=e,t.wv=xe())}function Ht(t){ae(t),at(t,0),I(t,nt),t.v=t.children=t.deps=t.ctx=t.reactions=null}function br(t){h===null&&v===null&&ur(),v!==null&&v.f&U&&lr(),Yt&&ir()}function xr(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function it(t,e,r,n=!0){var s=(t&rt)!==0,i=h,l={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|F,first:null,fn:e,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var u=Z;try{Qt(!0),Bt(l),l.f|=Xe}catch(d){throw j(l),d}finally{Qt(u)}}else e!==null&&Vt(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(ne|gt))===0;if(!f&&!s&&n&&(i!==null&&xr(l,i),v!==null&&v.f&w)){var o=v;(o.children??(o.children=[])).push(l)}return l}function _e(t){br();var e=h!==null&&(h.f&M)!==0&&E!==null&&!E.m;if(e){var r=E;(r.e??(r.e=[])).push({fn:t,effect:h,reaction:v})}else{var n=ve(t);return n}}function Sr(t){const e=it(rt,t,!0);return()=>{j(e)}}function Tr(t){const e=it(rt,t,!0);return(r={})=>new Promise(n=>{r.outro?Rr(e,()=>{j(e),n(void 0)}):(j(e),n(void 0))})}function ve(t){return it(re,t,!1)}function Or(t){return it(Tt,t,!0)}function he(t,e=[],r=ut){const n=e.map(r);return Nr(()=>t(...n.map(m)))}function Nr(t,e=0){return it(Tt|Mt|e,t,!0)}function kr(t,e=!0){return it(Tt|M,t,!0,e)}function $e(t){var e=t.teardown;if(e!==null){const r=Yt,n=v;Xt(!0),tt(null);try{e.call(null)}finally{Xt(r),tt(n)}}}function me(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)Ht(e[r])}}function pe(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;j(r,e),r=n}}function Cr(t){for(var e=t.first;e!==null;){var r=e.next;e.f&M||j(e),e=r}}function j(t,e=!0){var r=!1;if((e||t.f&er)&&t.nodes_start!==null){for(var n=t.nodes_start,s=t.nodes_end;n!==null;){var i=n===s?null:st(n);n.remove(),n=i}r=!0}pe(t,e&&!r),me(t),at(t,0),I(t,nt);var l=t.transitions;if(l!==null)for(const f of l)f.stop();$e(t);var u=t.parent;u!==null&&u.first!==null&&ye(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function ye(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Rr(t,e){var r=[];ge(t,r,!0),Ar(r,()=>{j(t),e&&e()})}function Ar(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var s of t)s.out(n)}else e()}function ge(t,e,r){if(!(t.f&Et)){if(t.f^=Et,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&e.push(l);for(var n=t.first;n!==null;){var s=n.next,i=(n.f&tr)!==0||(n.f&M)!==0;ge(n,e,i?r:!1),n=s}}}let xt=!1,It=[];function we(){xt=!1;const t=It.slice();It=[],Qe(t)}function Dr(t){xt||(xt=!0,queueMicrotask(we)),It.push(t)}function Pr(){xt&&we()}const Ee=0,Lr=1;let vt=!1,ht=Ee,ot=!1,ft=null,Z=!1,Yt=!1;function Qt(t){Z=t}function Xt(t){Yt=t}let H=[],Q=0;let v=null,B=!1;function tt(t){v=t}let h=null;function et(t){h=t}let A=null;function Ir(t){A=t}let g=null,x=0,D=null;function Fr(t){D=t}let be=1,St=0,Y=!1,E=null;function xe(){return++be}function Se(){return!vr}function Ot(t){var o;var e=t.f;if(e&F)return!0;if(e&K){var r=t.deps,n=(e&U)!==0;if(r!==null){var s,i,l=(e&wt)!==0,u=n&&h!==null&&!Y,f=r.length;if(l||u){for(s=0;s<f;s++)i=r[s],(l||!((o=i==null?void 0:i.reactions)!=null&&o.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);l&&(t.f^=wt)}for(s=0;s<f;s++)if(i=r[s],Ot(i)&&de(i),i.wv>t.wv)return!0}(!n||h!==null&&!Y)&&I(t,S)}return!1}function jr(t,e){for(var r=e;r!==null;){if(r.f&gt)try{r.fn(t);return}catch{r.f^=gt}r=r.parent}throw vt=!1,t}function Mr(t){return(t.f&nt)===0&&(t.parent===null||(t.parent.f&gt)===0)}function Nt(t,e,r,n){if(vt){if(r===null&&(vt=!1),Mr(e))throw t;return}r!==null&&(vt=!0);{jr(t,e);return}}function Te(t,e,r=0){var n=t.reactions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s];i.f&w?Te(i,e,r+1):e===i&&(r===0?I(i,F):i.f&S&&I(i,K),Vt(i))}}function Oe(t){var _;var e=g,r=x,n=D,s=v,i=Y,l=A,u=E,f=B,o=t.f;g=null,x=0,D=null,v=o&(M|rt)?null:t,Y=!Z&&(o&U)!==0,A=null,E=t.ctx,B=!1,St++;try{var d=(0,t.fn)(),a=t.deps;if(g!==null){var c;if(at(t,x),a!==null&&x>0)for(a.length=x+g.length,c=0;c<g.length;c++)a[x+c]=g[c];else t.deps=a=g;if(!Y)for(c=x;c<a.length;c++)((_=a[c]).reactions??(_.reactions=[])).push(t)}else a!==null&&x<a.length&&(at(t,x),a.length=x);if(Se()&&D!==null&&!(t.f&(w|K|F)))for(c=0;c<D.length;c++)Te(D[c],t);return s!==null&&St++,d}finally{g=e,x=r,D=n,v=s,Y=i,A=l,E=u,B=f}}function qr(t,e){let r=e.reactions;if(r!==null){var n=We.call(r,t);if(n!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[n]=r[s],r.pop())}}r===null&&e.f&w&&(g===null||!g.includes(e))&&(I(e,K),e.f&(U|wt)||(e.f^=wt),at(e,0))}function at(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)qr(t,r[n])}function Bt(t){var e=t.f;if(!(e&nt)){I(t,S);var r=h,n=E;h=t;try{e&Mt?Cr(t):pe(t),me(t),$e(t);var s=Oe(t);t.teardown=typeof s=="function"?s:null,t.wv=be;var i=t.deps,l;At&&hr&&t.f&F}catch(u){Nt(u,t,r,n||t.ctx)}finally{h=r}}}function Ne(){if(Q>1e3){Q=0;try{or()}catch(t){if(ft!==null)Nt(t,ft,null);else throw t}}Q++}function ke(t){var e=t.length;if(e!==0){Ne();var r=Z;Z=!0;try{for(var n=0;n<e;n++){var s=t[n];s.f&S||(s.f^=S);var i=[];Ce(s,i),Hr(i)}}finally{Z=r}}}function Hr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(nt|Et)))try{Ot(n)&&(Bt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ye(n):n.fn=null))}catch(s){Nt(s,n,null,n.ctx)}}}function Yr(){if(ot=!1,Q>1001)return;const t=H;H=[],ke(t),ot||(Q=0,ft=null)}function Vt(t){ht===Ee&&(ot||(ot=!0,queueMicrotask(Yr))),ft=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(rt|M)){if(!(r&S))return;e.f^=S}}H.push(e)}function Ce(t,e){var r=t.first,n=[];t:for(;r!==null;){var s=r.f,i=(s&M)!==0,l=i&&(s&S)!==0,u=r.next;if(!l&&!(s&Et))if(s&Tt){if(i)r.f^=S;else try{Ot(r)&&Bt(r)}catch(a){Nt(a,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else s&re&&n.push(r);if(u===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var o=a.next;if(o!==null){r=o;continue t}a=a.parent}}r=u}for(var d=0;d<n.length;d++)f=n[d],e.push(f),Ce(f,e)}function Re(t){var e=ht,r=H;try{Ne();const s=[];ht=Lr,H=s,ot=!1,ke(r);var n=t==null?void 0:t();return Pr(),(H.length>0||s.length>0)&&Re(),Q=0,ft=null,n}finally{ht=e,H=r}}function m(t){var o,d;var e=t.f,r=(e&w)!==0;if(r&&e&nt){var n=ce(t);return Ht(t),n}if(v!==null&&!B){A!==null&&A.includes(t)&&dr();var s=v.deps;t.rv<St&&(t.rv=St,g===null&&s!==null&&s[x]===t?x++:g===null?g=[t]:g.push(t))}if(r&&t.deps===null&&(v===null||B||v.f&w)){var i=t,l=i.parent;if(l!==null)if(l.f&w){var u=l;(o=u.children)!=null&&o.includes(i)||(u.children??(u.children=[])).push(i)}else{var f=l;(d=f.deriveds)!=null&&d.includes(i)||(f.deriveds??(f.deriveds=[])).push(i)}}return r&&(i=t,Ot(i)&&de(i)),t.v}const Br=~(F|K|S);function I(t,e){t.f=t.f&Br|e}function Ut(t,e=!1,r){E={p:E,c:null,e:null,m:!1,s:t,x:null,l:null}}function Kt(t){const e=E;if(e!==null){const l=e.e;if(l!==null){var r=h,n=v;e.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];et(i.effect),tt(i.reaction),ve(i.fn)}}finally{et(r),tt(n)}}E=e.p,e.m=!0}return{}}const Vr=new Set,te=new Set;function _t(t){var z;var e=this,r=e.ownerDocument,n=t.type,s=((z=t.composedPath)==null?void 0:z.call(t))||[],i=s[0]||t.target,l=0,u=t.__root;if(u){var f=s.indexOf(u);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var o=s.indexOf(e);if(o===-1)return;f<=o&&(l=f)}if(i=s[l]||t.target,i!==e){yt(t,"currentTarget",{configurable:!0,get(){return i||r}});var d=v,a=h;tt(null),et(null);try{for(var c,_=[];i!==null;){var $=i.assignedSlot||i.parentNode||i.host||null;try{var T=i["__"+n];if(T!==void 0&&!i.disabled)if(ee(T)){var[W,...ct]=T;W.apply(i,[t,...ct])}else T.call(i,t)}catch(q){c?_.push(q):c=q}if(t.cancelBubble||$===e||$===null)break;i=$}if(c){for(let q of _)queueMicrotask(()=>{throw q});throw c}}finally{t.__root=e,delete t.currentTarget,tt(d),et(a)}}}function Ur(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function $t(t,e){var r=h;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function Ae(t,e){var r=(e&He)!==0,n=(e&Ye)!==0,s,i=!t.startsWith("<!>");return()=>{if(C)return $t(p,null),p;s===void 0&&(s=Ur(i?t:"<!>"+t),r||(s=X(s)));var l=n?document.importNode(s,!0):s.cloneNode(!0);if(r){var u=X(l),f=l.lastChild;$t(u,f)}else $t(l,l);return l}}function Wt(t,e){if(C){h.nodes_end=p,ue();return}t!==null&&t.before(e)}function Ft(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function De(t,e){return Pe(t,e)}function Kr(t,e){Pt(),e.intro=e.intro??!1;const r=e.target,n=C,s=p;try{for(var i=X(r);i&&(i.nodeType!==8||i.data!==Be);)i=st(i);if(!i)throw lt;dt(!0),V(i),ue();const l=Pe(t,{...e,anchor:i});if(p===null||p.nodeType!==8||p.data!==Ve)throw qt(),lt;return dt(!1),l}catch(l){if(l===lt)return e.recover===!1&&fr(),Pt(),wr(r),dt(!1),De(t,e);throw l}finally{dt(n),V(s)}}const G=new Map;function Pe(t,{target:e,anchor:r,props:n={},events:s,context:i,intro:l=!0}){Pt();var u=new Set,f=a=>{for(var c=0;c<a.length;c++){var _=a[c];if(!u.has(_)){u.add(_);var $=Ke(_);e.addEventListener(_,_t,{passive:$});var T=G.get(_);T===void 0?(document.addEventListener(_,_t,{passive:$}),G.set(_,1)):G.set(_,T+1)}}};f(ze(Vr)),te.add(f);var o=void 0,d=Tr(()=>{var a=r??e.appendChild(bt());return kr(()=>{if(i){Ut({});var c=E;c.c=i}s&&(n.$$events=s),C&&$t(a,null),o=t(a,n)||{},C&&(h.nodes_end=p),i&&Kt()}),()=>{var $;for(var c of u){e.removeEventListener(c,_t);var _=G.get(c);--_===0?(document.removeEventListener(c,_t),G.delete(c)):G.set(c,_)}te.delete(f),a!==r&&(($=a.parentNode)==null||$.removeChild(a))}});return jt.set(o,d),o}let jt=new WeakMap;function Wr(t,e){const r=jt.get(t);return r?(jt.delete(t),r(e)):Promise.resolve()}function Le(t,e){Dr(()=>{var r=t.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,n.appendChild(s)}})}function zr(t){return new Gr(t)}var P,O;class Gr{constructor(e){kt(this,P);kt(this,O);var i;var r=new Map,n=(l,u)=>{var f=$r(u);return r.set(l,f),f};const s=new Proxy({...e.props||{},$$events:{}},{get(l,u){return m(r.get(u)??n(u,Reflect.get(l,u)))},has(l,u){return u===rr?!0:(m(r.get(u)??n(u,Reflect.get(l,u))),Reflect.has(l,u))},set(l,u,f){return k(r.get(u)??n(u,f),f),Reflect.set(l,u,f)}});Ct(this,O,(e.hydrate?Kr:De)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((i=e==null?void 0:e.props)!=null&&i.$$host)||e.sync===!1)&&Re(),Ct(this,P,s.$$events);for(const l of Object.keys(y(this,O)))l==="$set"||l==="$destroy"||l==="$on"||yt(this,l,{get(){return y(this,O)[l]},set(u){y(this,O)[l]=u},enumerable:!0});y(this,O).$set=l=>{Object.assign(s,l)},y(this,O).$destroy=()=>{Wr(y(this,O))}}$set(e){y(this,O).$set(e)}$on(e,r){y(this,P)[e]=y(this,P)[e]||[];const n=(...s)=>r.call(this,...s);return y(this,P)[e].push(n),()=>{y(this,P)[e]=y(this,P)[e].filter(s=>s!==n)}}$destroy(){y(this,O).$destroy()}}P=new WeakMap,O=new WeakMap;let Ie;typeof HTMLElement=="function"&&(Ie=class extends HTMLElement{constructor(e,r,n){super();N(this,"$$ctor");N(this,"$$s");N(this,"$$c");N(this,"$$cn",!1);N(this,"$$d",{});N(this,"$$r",!1);N(this,"$$p_d",{});N(this,"$$l",{});N(this,"$$l_u",new Map);N(this,"$$me");this.$$ctor=e,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(e,r,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(r),this.$$c){const s=this.$$c.$on(e,r);this.$$l_u.set(r,s)}super.addEventListener(e,r,n)}removeEventListener(e,r,n){if(super.removeEventListener(e,r,n),this.$$c){const s=this.$$l_u.get(r);s&&(s(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let r=function(i){return l=>{const u=document.createElement("slot");i!=="default"&&(u.name=i),Wt(l,u)}};var e=r;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Jr(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=r(i),n.default=!0):n[i]=r(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=mt(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=zr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Sr(()=>{Or(()=>{var i;this.$$r=!0;for(const l of pt(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const u=mt(l,this.$$d[l],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,u)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const u=this.$$c.$on(i,l);this.$$l_u.set(l,u)}this.$$l={}}}attributeChangedCallback(e,r,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=mt(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return pt(this.$$p_d).find(r=>this.$$p_d[r].attribute===e||!this.$$p_d[r].attribute&&r.toLowerCase()===e)||e}});function mt(t,e,r,n){var i;const s=(i=r[t])==null?void 0:i.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!r[t])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Jr(t){const e={};return t.childNodes.forEach(r=>{e[r.slot||"default"]=!0}),e}function Fe(t,e,r,n,s,i){let l=class extends Ie{constructor(){super(t,r,s),this.$$p_d=e}static get observedAttributes(){return pt(e).map(u=>(e[u].attribute||u).toLowerCase())}};return pt(e).forEach(u=>{yt(l.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var a;f=mt(u,f,e),this.$$d[u]=f;var o=this.$$c;if(o){var d=(a=J(o,u))==null?void 0:a.get;d?o[u]=f:o.$set({[u]:f})}}})}),n.forEach(u=>{yt(l.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),t.element=l,l}var Zr=Ae('<div id="visually-hidden-oclock" class="visually-hidden-oclock svelte-o6je52" role="timer" aria-live="polite" aria-atomic="true"> </div> <div id="visually-oclock" class="visually-oclock svelte-o6je52" aria-hidden="true"> </div>',1);const Qr={hash:"svelte-o6je52",code:".visually-oclock.svelte-o6je52 {display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none;}.visually-hidden-oclock.svelte-o6je52 {position:fixed;top:0px;left:0px;width:4px;height:4px;opacity:0;overflow:hidden;border:none;margin:0;padding:0;display:block;visibility:visible;}"};function Xr(t,e){Ut(e,!0),Le(t,Qr);let r=ie(L(new Date)),n=ut(()=>String(m(r).getHours()).padStart(2,"0")),s=ut(()=>String(m(r).getMinutes()).padStart(2,"0")),i=ut(()=>String(m(r).getSeconds()).padStart(2,"0"));_e(()=>{const a=setInterval(()=>{k(r,L(new Date))},1e3);return()=>{clearInterval(a)}});var l=Zr(),u=yr(l),f=Lt(u);Dt(u);var o=gr(u,2),d=Lt(o);Dt(o),he(()=>{Ft(f,`${m(n)??""}:${m(s)??""}`),Ft(d,`${m(n)??""}:${m(s)??""}:${m(i)??""}`)}),Wt(t,l),Kt()}customElements.define("oclock-component",Fe(Xr,{},[],[],!0));var tn=Ae('<div id="visually-seconds" class="visually-seconds svelte-152t239" aria-hidden="true"> </div>');const en={hash:"svelte-152t239",code:".visually-seconds.svelte-152t239 {display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none;}"};function rn(t,e){Ut(e,!0),Le(t,en);let r=ie(L(new Date)),n=ut(()=>String(m(r).getSeconds()).padStart(2,"0"));_e(()=>{const l=setInterval(()=>{k(r,L(new Date))},1e3);return()=>{clearInterval(l)}});var s=tn(),i=Lt(s,!0);Dt(s),he(()=>Ft(i,m(n))),Wt(t,s),Kt()}customElements.define("seconds-component",Fe(rn,{},[],[],!0));

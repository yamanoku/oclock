var Pe=Object.defineProperty;var Kt=t=>{throw TypeError(t)};var Le=(t,e,r)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var O=(t,e,r)=>Le(t,typeof e!="symbol"?e+"":e,r),Wt=(t,e,r)=>e.has(t)||Kt("Cannot "+r);var g=(t,e,r)=>(Wt(t,e,"read from private field"),r?r.call(t):e.get(t)),Ot=(t,e,r)=>e.has(t)?Kt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Nt=(t,e,r,n)=>(Wt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Ie="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);const Fe=1,je=2,Me="[",qe="]",nt={},E=Symbol(),He=["touchstart","touchmove"];function Ye(t){return He.includes(t)}const Ct=!1;var Xt=Array.isArray,Be=Array.from,mt=Object.keys,pt=Object.defineProperty,z=Object.getOwnPropertyDescriptor,Ve=Object.prototype,Ue=Array.prototype,Ke=Object.getPrototypeOf;function We(t){for(var e=0;e<t.length;e++)t[e]()}const k=2,te=4,bt=8,jt=16,I=32,ut=64,Rt=128,V=256,yt=512,x=1024,L=2048,ot=4096,gt=8192,tt=16384,ze=32768,Ge=65536,Je=1<<19,ee=1<<20,kt=Symbol("$state"),Ze=Symbol("legacy props");function re(t){return t===this.v}function Qe(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Xe(t){return!Qe(t,this.v)}function tr(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function er(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rr(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sr(){throw new Error("https://svelte.dev/e/hydration_failed")}function ir(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ur(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function or(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let fr=!1,ar=!1;function R(t,e){var r={f:0,v:t,reactions:null,equals:re,version:0};return r}function ne(t){return dr(R(t))}function cr(t,e=!1){const r=R(t);return e||(r.equals=Xe),r}function dr(t){return h!==null&&h.f&k&&(A===null?Rr([t]):A.push(t)),t}function N(t,e){return h!==null&&Dr()&&h.f&(k|jt)&&(A===null||!A.includes(t))&&or(),_r(t,e)}function _r(t,e){return t.equals(e)||(t.v,t.v=e,t.version=Ee(),se(t,L),_!==null&&_.f&x&&!(_.f&I)&&(m!==null&&m.includes(t)?(F(_,L),Tt(_)):j===null?Ar([t]):j.push(t))),e}function se(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,s=0;s<n;s++){var i=r[s],l=i.f;l&L||(F(i,e),l&(x|V)&&(l&k?se(i,ot):Tt(i)))}}function Mt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function at(t){C=t}let y;function B(t){if(t===null)throw Mt(),nt;return y=t}function ie(){return B(et(y))}function At(t){if(C){if(et(y)!==null)throw Mt(),nt;y=t}}function P(t,e=null,r){if(typeof t!="object"||t===null||kt in t)return t;const n=Ke(t);if(n!==Ve&&n!==Ue)return t;var s=new Map,i=Xt(t),l=R(0);i&&s.set("length",R(t.length));var u;return new Proxy(t,{defineProperty(f,o,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ir();var c=s.get(o);return c===void 0?(c=R(a.value),s.set(o,c)):N(c,P(a.value,u)),!0},deleteProperty(f,o){var a=s.get(o);if(a===void 0)o in f&&s.set(o,R(E));else{if(i&&typeof o=="string"){var c=s.get("length"),d=Number(o);Number.isInteger(d)&&d<c.v&&N(c,d)}N(a,E),zt(l)}return!0},get(f,o,a){var $;if(o===kt)return t;var c=s.get(o),d=o in f;if(c===void 0&&(!d||($=z(f,o))!=null&&$.writable)&&(c=R(P(d?f[o]:E,u)),s.set(o,c)),c!==void 0){var v=p(c);return v===E?void 0:v}return Reflect.get(f,o,a)},getOwnPropertyDescriptor(f,o){var a=Reflect.getOwnPropertyDescriptor(f,o);if(a&&"value"in a){var c=s.get(o);c&&(a.value=p(c))}else if(a===void 0){var d=s.get(o),v=d==null?void 0:d.v;if(d!==void 0&&v!==E)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return a},has(f,o){var v;if(o===kt)return!0;var a=s.get(o),c=a!==void 0&&a.v!==E||Reflect.has(f,o);if(a!==void 0||_!==null&&(!c||(v=z(f,o))!=null&&v.writable)){a===void 0&&(a=R(c?P(f[o],u):E),s.set(o,a));var d=p(a);if(d===E)return!1}return c},set(f,o,a,c){var q;var d=s.get(o),v=o in f;if(i&&o==="length")for(var $=a;$<d.v;$+=1){var S=s.get($+"");S!==void 0?N(S,E):$ in f&&(S=R(E),s.set($+"",S))}d===void 0?(!v||(q=z(f,o))!=null&&q.writable)&&(d=R(void 0),N(d,P(a,u)),s.set(o,d)):(v=d.v!==E,N(d,P(a,u)));var U=Reflect.getOwnPropertyDescriptor(f,o);if(U!=null&&U.set&&U.set.call(c,a),!v){if(i&&typeof o=="string"){var ft=s.get("length"),K=Number(o);Number.isInteger(K)&&K>=ft.v&&N(ft,K+1)}zt(l)}return!0},ownKeys(f){p(l);var o=Reflect.ownKeys(f).filter(d=>{var v=s.get(d);return v===void 0||v.v!==E});for(var[a,c]of s)c.v!==E&&!(a in f)&&o.push(a);return o},setPrototypeOf(){lr()}})}function zt(t,e=1){N(t,t.v+e)}var Gt,le,ue;function Dt(){if(Gt===void 0){Gt=window;var t=Element.prototype,e=Node.prototype;le=z(e,"firstChild").get,ue=z(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function wt(t=""){return document.createTextNode(t)}function Z(t){return le.call(t)}function et(t){return ue.call(t)}function Pt(t,e){if(!C)return Z(t);var r=Z(y);if(r===null)r=y.appendChild(wt());else if(e&&r.nodeType!==3){var n=wt();return r==null||r.before(n),B(n),n}return B(r),r}function vr(t,e){if(!C){var r=Z(t);return r instanceof Comment&&r.data===""?et(r):r}return y}function hr(t,e=1,r=!1){let n=C?y:t;for(var s;e--;)s=n,n=et(n);if(!C)return n;var i=n==null?void 0:n.nodeType;if(r&&i!==3){var l=wt();return n===null?s==null||s.after(l):n.before(l),B(l),l}return B(n),n}function $r(t){t.textContent=""}function dt(t){var e=k|L;_===null?e|=V:_.f|=ee;var r=h!==null&&h.f&k?h:null;const n={children:null,ctx:w,deps:null,equals:re,f:e,fn:t,reactions:null,v:null,version:0,parent:r??_};return r!==null&&(r.children??(r.children=[])).push(n),n}function oe(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&k?qt(n):M(n)}}}function mr(t){for(var e=t.parent;e!==null;){if(!(e.f&k))return e;e=e.parent}return null}function fe(t){var e,r=_;X(mr(t));try{oe(t),e=be(t)}finally{X(r)}return e}function ae(t){var e=fe(t),r=(Y||t.f&V)&&t.deps!==null?ot:x;F(t,r),t.equals(e)||(t.v=e,t.version=Ee())}function qt(t){oe(t),lt(t,0),F(t,tt),t.v=t.children=t.deps=t.ctx=t.reactions=null}function pr(t){_===null&&h===null&&rr(),h!==null&&h.f&V&&er(),Ht&&tr()}function yr(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function rt(t,e,r,n=!0){var s=(t&ut)!==0,i=_,l={ctx:w,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|L,first:null,fn:e,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var u=G;try{Jt(!0),Yt(l),l.f|=ze}catch(a){throw M(l),a}finally{Jt(u)}}else e!==null&&Tt(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ee)===0;if(!f&&!s&&n&&(i!==null&&yr(l,i),h!==null&&h.f&k)){var o=h;(o.children??(o.children=[])).push(l)}return l}function ce(t){pr();var e=_!==null&&(_.f&I)!==0&&w!==null&&!w.m;if(e){var r=w;(r.e??(r.e=[])).push({fn:t,effect:_,reaction:h})}else{var n=de(t);return n}}function gr(t){const e=rt(ut,t,!0);return()=>{M(e)}}function wr(t){const e=rt(ut,t,!0);return(r={})=>new Promise(n=>{r.outro?Tr(e,()=>{M(e),n(void 0)}):(M(e),n(void 0))})}function de(t){return rt(te,t,!1)}function Er(t){return rt(bt,t,!0)}function _e(t){return br(t)}function br(t,e=0){return rt(bt|jt|e,t,!0)}function xr(t,e=!0){return rt(bt|I,t,!0,e)}function ve(t){var e=t.teardown;if(e!==null){const r=Ht,n=h;Zt(!0),Q(null);try{e.call(null)}finally{Zt(r),Q(n)}}}function he(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)qt(e[r])}}function $e(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;M(r,e),r=n}}function Sr(t){for(var e=t.first;e!==null;){var r=e.next;e.f&I||M(e),e=r}}function M(t,e=!0){var r=!1;if((e||t.f&Je)&&t.nodes_start!==null){for(var n=t.nodes_start,s=t.nodes_end;n!==null;){var i=n===s?null:et(n);n.remove(),n=i}r=!0}$e(t,e&&!r),he(t),lt(t,0),F(t,tt);var l=t.transitions;if(l!==null)for(const f of l)f.stop();ve(t);var u=t.parent;u!==null&&u.first!==null&&me(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function me(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Tr(t,e){var r=[];pe(t,r,!0),Or(r,()=>{M(t),e&&e()})}function Or(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var s of t)s.out(n)}else e()}function pe(t,e,r){if(!(t.f&gt)){if(t.f^=gt,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&e.push(l);for(var n=t.first;n!==null;){var s=n.next,i=(n.f&Ge)!==0||(n.f&I)!==0;pe(n,e,i?r:!1),n=s}}}let Et=!1,Lt=[];function ye(){Et=!1;const t=Lt.slice();Lt=[],We(t)}function Nr(t){Et||(Et=!0,queueMicrotask(ye)),Lt.push(t)}function kr(){Et&&ye()}const ge=0,Cr=1;let _t=!1,vt=ge,st=!1,it=null,G=!1,Ht=!1;function Jt(t){G=t}function Zt(t){Ht=t}let H=[],J=0;let h=null;function Q(t){h=t}let _=null;function X(t){_=t}let A=null;function Rr(t){A=t}let m=null,b=0,j=null;function Ar(t){j=t}let we=1,Y=!1,w=null;function Ee(){return++we}function Dr(){return!fr}function xt(t){var o;var e=t.f;if(e&L)return!0;if(e&ot){var r=t.deps,n=(e&V)!==0;if(r!==null){var s,i,l=(e&yt)!==0,u=n&&_!==null&&!Y,f=r.length;if(l||u){for(s=0;s<f;s++)i=r[s],(l||!((o=i==null?void 0:i.reactions)!=null&&o.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);l&&(t.f^=yt)}for(s=0;s<f;s++)if(i=r[s],xt(i)&&ae(i),i.version>t.version)return!0}(!n||_!==null&&!Y)&&F(t,x)}return!1}function Pr(t,e){for(var r=e;r!==null;){if(r.f&Rt)try{r.fn(t);return}catch{r.f^=Rt}r=r.parent}throw _t=!1,t}function Lr(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&Rt)===0)}function St(t,e,r,n){if(_t){if(r===null&&(_t=!1),Lr(e))throw t;return}r!==null&&(_t=!0);{Pr(t,e);return}}function be(t){var d;var e=m,r=b,n=j,s=h,i=Y,l=A,u=w,f=t.f;m=null,b=0,j=null,h=f&(I|ut)?null:t,Y=!G&&(f&V)!==0,A=null,w=t.ctx;try{var o=(0,t.fn)(),a=t.deps;if(m!==null){var c;if(lt(t,b),a!==null&&b>0)for(a.length=b+m.length,c=0;c<m.length;c++)a[b+c]=m[c];else t.deps=a=m;if(!Y)for(c=b;c<a.length;c++)((d=a[c]).reactions??(d.reactions=[])).push(t)}else a!==null&&b<a.length&&(lt(t,b),a.length=b);return o}finally{m=e,b=r,j=n,h=s,Y=i,A=l,w=u}}function Ir(t,e){let r=e.reactions;if(r!==null){var n=r.indexOf(t);if(n!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[n]=r[s],r.pop())}}r===null&&e.f&k&&(m===null||!m.includes(e))&&(F(e,ot),e.f&(V|yt)||(e.f^=yt),lt(e,0))}function lt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Ir(t,r[n])}function Yt(t){var e=t.f;if(!(e&tt)){F(t,x);var r=_,n=w;_=t;try{e&jt?Sr(t):$e(t),he(t),ve(t);var s=be(t);t.teardown=typeof s=="function"?s:null,t.version=we;var i=t.deps,l;Ct&&ar&&t.f&L}catch(u){St(u,t,r,n||t.ctx)}finally{_=r}}}function xe(){if(J>1e3){J=0;try{nr()}catch(t){if(it!==null)St(t,it,null);else throw t}}J++}function Se(t){var e=t.length;if(e!==0){xe();var r=G;G=!0;try{for(var n=0;n<e;n++){var s=t[n];s.f&x||(s.f^=x);var i=[];Te(s,i),Fr(i)}}finally{G=r}}}function Fr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(tt|gt)))try{xt(n)&&(Yt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?me(n):n.fn=null))}catch(s){St(s,n,null,n.ctx)}}}function jr(){if(st=!1,J>1001)return;const t=H;H=[],Se(t),st||(J=0,it=null)}function Tt(t){vt===ge&&(st||(st=!0,queueMicrotask(jr))),it=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(ut|I)){if(!(r&x))return;e.f^=x}}H.push(e)}function Te(t,e){var r=t.first,n=[];t:for(;r!==null;){var s=r.f,i=(s&I)!==0,l=i&&(s&x)!==0,u=r.next;if(!l&&!(s&gt))if(s&bt){if(i)r.f^=x;else try{xt(r)&&Yt(r)}catch(c){St(c,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else s&te&&n.push(r);if(u===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var o=c.next;if(o!==null){r=o;continue t}c=c.parent}}r=u}for(var a=0;a<n.length;a++)f=n[a],e.push(f),Te(f,e)}function Oe(t){var e=vt,r=H;try{xe();const s=[];vt=Cr,H=s,st=!1,Se(r);var n=t==null?void 0:t();return kr(),(H.length>0||s.length>0)&&Oe(),J=0,it=null,n}finally{vt=e,H=r}}function p(t){var a;var e=t.f,r=(e&k)!==0;if(r&&e&tt){var n=fe(t);return qt(t),n}if(h!==null){A!==null&&A.includes(t)&&ur();var s=h.deps;m===null&&s!==null&&s[b]===t?b++:m===null?m=[t]:m.push(t),j!==null&&_!==null&&_.f&x&&!(_.f&I)&&j.includes(t)&&(F(_,L),Tt(_))}else if(r&&t.deps===null)for(var i=t,l=i.parent,u=i;l!==null;)if(l.f&k){var f=l;u=f,l=f.parent}else{var o=l;(a=o.deriveds)!=null&&a.includes(u)||(o.deriveds??(o.deriveds=[])).push(u);break}return r&&(i=t,xt(i)&&ae(i)),t.v}const Mr=~(L|ot|x);function F(t,e){t.f=t.f&Mr|e}function Bt(t,e=!1,r){w={p:w,c:null,e:null,m:!1,s:t,x:null,l:null}}function Vt(t){const e=w;if(e!==null){const l=e.e;if(l!==null){var r=_,n=h;e.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];X(i.effect),Q(i.reaction),de(i.fn)}}finally{X(r),Q(n)}}w=e.p,e.m=!0}return{}}const qr=new Set,Qt=new Set;function ct(t){var K;var e=this,r=e.ownerDocument,n=t.type,s=((K=t.composedPath)==null?void 0:K.call(t))||[],i=s[0]||t.target,l=0,u=t.__root;if(u){var f=s.indexOf(u);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var o=s.indexOf(e);if(o===-1)return;f<=o&&(l=f)}if(i=s[l]||t.target,i!==e){pt(t,"currentTarget",{configurable:!0,get(){return i||r}});var a=h,c=_;Q(null),X(null);try{for(var d,v=[];i!==null;){var $=i.assignedSlot||i.parentNode||i.host||null;try{var S=i["__"+n];if(S!==void 0&&!i.disabled)if(Xt(S)){var[U,...ft]=S;U.apply(i,[t,...ft])}else S.call(i,t)}catch(q){d?v.push(q):d=q}if(t.cancelBubble||$===e||$===null)break;i=$}if(d){for(let q of v)queueMicrotask(()=>{throw q});throw d}}finally{t.__root=e,delete t.currentTarget,Q(a),X(c)}}}function Hr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ht(t,e){var r=_;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function Ne(t,e){var r=(e&Fe)!==0,n=(e&je)!==0,s,i=!t.startsWith("<!>");return()=>{if(C)return ht(y,null),y;s===void 0&&(s=Hr(i?t:"<!>"+t),r||(s=Z(s)));var l=n?document.importNode(s,!0):s.cloneNode(!0);if(r){var u=Z(l),f=l.lastChild;ht(u,f)}else ht(l,l);return l}}function Ut(t,e){if(C){_.nodes_end=y,ie();return}t!==null&&t.before(e)}function It(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function ke(t,e){return Ce(t,e)}function Yr(t,e){Dt(),e.intro=e.intro??!1;const r=e.target,n=C,s=y;try{for(var i=Z(r);i&&(i.nodeType!==8||i.data!==Me);)i=et(i);if(!i)throw nt;at(!0),B(i),ie();const l=Ce(t,{...e,anchor:i});if(y===null||y.nodeType!==8||y.data!==qe)throw Mt(),nt;return at(!1),l}catch(l){if(l===nt)return e.recover===!1&&sr(),Dt(),$r(r),at(!1),ke(t,e);throw l}finally{at(n),B(s)}}const W=new Map;function Ce(t,{target:e,anchor:r,props:n={},events:s,context:i,intro:l=!0}){Dt();var u=new Set,f=c=>{for(var d=0;d<c.length;d++){var v=c[d];if(!u.has(v)){u.add(v);var $=Ye(v);e.addEventListener(v,ct,{passive:$});var S=W.get(v);S===void 0?(document.addEventListener(v,ct,{passive:$}),W.set(v,1)):W.set(v,S+1)}}};f(Be(qr)),Qt.add(f);var o=void 0,a=wr(()=>{var c=r??e.appendChild(wt());return xr(()=>{if(i){Bt({});var d=w;d.c=i}s&&(n.$$events=s),C&&ht(c,null),o=t(c,n)||{},C&&(_.nodes_end=y),i&&Vt()}),()=>{var $;for(var d of u){e.removeEventListener(d,ct);var v=W.get(d);--v===0?(document.removeEventListener(d,ct),W.delete(d)):W.set(d,v)}Qt.delete(f),c!==r&&(($=c.parentNode)==null||$.removeChild(c))}});return Ft.set(o,a),o}let Ft=new WeakMap;function Br(t,e){const r=Ft.get(t);return r?(Ft.delete(t),r(e)):Promise.resolve()}function Re(t,e){Nr(()=>{var r=t.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,n.appendChild(s)}})}function Vr(t){return new Ur(t)}var D,T;class Ur{constructor(e){Ot(this,D);Ot(this,T);var i;var r=new Map,n=(l,u)=>{var f=cr(u);return r.set(l,f),f};const s=new Proxy({...e.props||{},$$events:{}},{get(l,u){return p(r.get(u)??n(u,Reflect.get(l,u)))},has(l,u){return u===Ze?!0:(p(r.get(u)??n(u,Reflect.get(l,u))),Reflect.has(l,u))},set(l,u,f){return N(r.get(u)??n(u,f),f),Reflect.set(l,u,f)}});Nt(this,T,(e.hydrate?Yr:ke)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((i=e==null?void 0:e.props)!=null&&i.$$host)||e.sync===!1)&&Oe(),Nt(this,D,s.$$events);for(const l of Object.keys(g(this,T)))l==="$set"||l==="$destroy"||l==="$on"||pt(this,l,{get(){return g(this,T)[l]},set(u){g(this,T)[l]=u},enumerable:!0});g(this,T).$set=l=>{Object.assign(s,l)},g(this,T).$destroy=()=>{Br(g(this,T))}}$set(e){g(this,T).$set(e)}$on(e,r){g(this,D)[e]=g(this,D)[e]||[];const n=(...s)=>r.call(this,...s);return g(this,D)[e].push(n),()=>{g(this,D)[e]=g(this,D)[e].filter(s=>s!==n)}}$destroy(){g(this,T).$destroy()}}D=new WeakMap,T=new WeakMap;let Ae;typeof HTMLElement=="function"&&(Ae=class extends HTMLElement{constructor(e,r,n){super();O(this,"$$ctor");O(this,"$$s");O(this,"$$c");O(this,"$$cn",!1);O(this,"$$d",{});O(this,"$$r",!1);O(this,"$$p_d",{});O(this,"$$l",{});O(this,"$$l_u",new Map);O(this,"$$me");this.$$ctor=e,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(e,r,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(r),this.$$c){const s=this.$$c.$on(e,r);this.$$l_u.set(r,s)}super.addEventListener(e,r,n)}removeEventListener(e,r,n){if(super.removeEventListener(e,r,n),this.$$c){const s=this.$$l_u.get(r);s&&(s(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let r=function(i){return l=>{const u=document.createElement("slot");i!=="default"&&(u.name=i),Ut(l,u)}};var e=r;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Kr(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=r(i),n.default=!0):n[i]=r(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=$t(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Vr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=gr(()=>{Er(()=>{var i;this.$$r=!0;for(const l of mt(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const u=$t(l,this.$$d[l],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,u)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const u=this.$$c.$on(i,l);this.$$l_u.set(l,u)}this.$$l={}}}attributeChangedCallback(e,r,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=$t(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return mt(this.$$p_d).find(r=>this.$$p_d[r].attribute===e||!this.$$p_d[r].attribute&&r.toLowerCase()===e)||e}});function $t(t,e,r,n){var i;const s=(i=r[t])==null?void 0:i.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!r[t])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Kr(t){const e={};return t.childNodes.forEach(r=>{e[r.slot||"default"]=!0}),e}function De(t,e,r,n,s,i){let l=class extends Ae{constructor(){super(t,r,s),this.$$p_d=e}static get observedAttributes(){return mt(e).map(u=>(e[u].attribute||u).toLowerCase())}};return mt(e).forEach(u=>{pt(l.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var c;f=$t(u,f,e),this.$$d[u]=f;var o=this.$$c;if(o){var a=(c=z(o,u))==null?void 0:c.get;a?o[u]=f:o.$set({[u]:f})}}})}),n.forEach(u=>{pt(l.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),t.element=l,l}var Wr=Ne('<div id="visually-hidden-oclock" class="visually-hidden-oclock svelte-o6je52" role="timer" aria-live="polite" aria-atomic="true"> </div> <div id="visually-oclock" class="visually-oclock svelte-o6je52" aria-hidden="true"> </div>',1);const zr={hash:"svelte-o6je52",code:".visually-oclock.svelte-o6je52 {display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none;}.visually-hidden-oclock.svelte-o6je52 {position:fixed;top:0px;left:0px;width:4px;height:4px;opacity:0;overflow:hidden;border:none;margin:0;padding:0;display:block;visibility:visible;}"};function Gr(t,e){Bt(e,!0),Re(t,zr);let r=ne(P(new Date)),n=dt(()=>String(p(r).getHours()).padStart(2,"0")),s=dt(()=>String(p(r).getMinutes()).padStart(2,"0")),i=dt(()=>String(p(r).getSeconds()).padStart(2,"0"));ce(()=>{const c=setInterval(()=>{N(r,P(new Date))},1e3);return()=>{clearInterval(c)}});var l=Wr(),u=vr(l),f=Pt(u);At(u);var o=hr(u,2),a=Pt(o);At(o),_e(()=>{It(f,`${p(n)??""}:${p(s)??""}`),It(a,`${p(n)??""}:${p(s)??""}:${p(i)??""}`)}),Ut(t,l),Vt()}customElements.define("oclock-component",De(Gr,{},[],[],!0));var Jr=Ne('<div id="visually-seconds" class="visually-seconds svelte-152t239" aria-hidden="true"> </div>');const Zr={hash:"svelte-152t239",code:".visually-seconds.svelte-152t239 {display:inline-flex;align-items:center;justify-content:center;font-size:4.5rem;font-variant-numeric:tabular-nums;user-select:none;}"};function Qr(t,e){Bt(e,!0),Re(t,Zr);let r=ne(P(new Date)),n=dt(()=>String(p(r).getSeconds()).padStart(2,"0"));ce(()=>{const l=setInterval(()=>{N(r,P(new Date))},1e3);return()=>{clearInterval(l)}});var s=Jr(),i=Pt(s,!0);At(s),_e(()=>It(i,p(n))),Ut(t,s),Vt()}customElements.define("seconds-component",De(Qr,{},[],[],!0));

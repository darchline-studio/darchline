import{$ as Si,$a as Y,$b as we,A as Zt,Aa as Ei,Ab as An,Ac as Ua,B as ra,Ba as d,Bb as Fo,Bc as Bn,C as Sn,Ca as G,Cb as xa,D as Et,Da as Tn,Db as Pn,Dc as ja,E as ko,Ea as En,Eb as Ta,F as aa,Fa as ya,Fb as No,G as sa,Ga as Jt,Gb as $n,H as la,Ha as Ft,Hb as Ea,I as rt,Ia as Mn,Ib as kt,Ic as Wa,J as ca,Ja as Po,Jb as Ma,K as Oe,Ka as ze,Kb as Oa,L as he,La as M,Lb as $,M as Mt,Ma as le,Mb as Ce,N as ua,Na as _a,Nb as Bo,O as E,Oa as $o,Ob as ka,P as j,Pa as v,Pb as _t,Q as da,Qa as Ia,Qb as Da,R as fe,Ra as y,Rb as Fn,S as Do,Sa as c,Sb as Ra,T as W,Ta as lt,Tb as La,U as _,Ua as yt,Ub as ne,V as Ro,Va as D,Vb as Aa,W as pa,Wa as On,Wb as Oi,X as Ci,Xa as p,Xb as Pa,Y as x,Ya as m,Yb as $a,Z as q,Za as g,Zb as ki,_ as _e,_a as Z,_b as Fa,a as I,aa as ma,ab as Ie,ac as Xt,b as pe,ba as wi,bb as re,bc as ye,c as Jr,ca as pt,cb as V,cc as Le,d as Xr,da as Pe,db as h,dc as Ve,e as To,ea as O,eb as Fe,ec as ue,f as Eo,fa as k,fb as ke,fc as Na,g as Ye,ga as J,gb as Ca,gc as me,h as Je,ha as T,hb as z,hc as Di,i as Tt,ia as ha,ib as De,ic as Ba,j as Be,ja as xi,jb as R,jc as Va,k as F,ka as fa,kb as L,kc as Ha,l as _i,la as K,lb as Xe,lc as Vo,m as ea,ma as ve,mb as S,mc as Ho,n as ta,na as Lo,nb as et,nc as zo,o as oe,oa as Ot,ob as Mi,p as Cn,pa as at,pb as ce,q as He,qa as ga,qb as P,r as Ii,ra as wn,rb as kn,s as ia,sa as ba,sb as ae,t as Mo,ta as $e,tb as tt,tc as za,u as na,ua as Ti,ub as Dn,uc as Ri,v as vt,va as Ao,vb as Sa,vc as Nn,w as Gt,wa as Yt,wb as Re,x as Qt,xa as st,xb as Rn,y as oa,ya as va,yb as wa,z as Oo,za as xn,zb as Ln}from"./chunk-BPWDEUPD.js";var Wo=class extends La{constructor(){super(...arguments),this.supportsDOMEvents=!0}},qo=class t extends Wo{static makeCurrent(){Ra(new t)}onAndCancel(o,e,i){return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.remove()}createElement(o,e){return e=e||this.getDefaultDocument(),e.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return e==="window"?window:e==="document"?o:e==="body"?o.body:null}getBaseHref(o){let e=Fc();return e==null?null:Nc(e)}resetBaseElement(){Li=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return Fa(document.cookie,o)}},Li=null;function Fc(){return Li=Li||document.querySelector("base"),Li?Li.getAttribute("href"):null}function Nc(t){return new URL(t,document.baseURI).pathname}var Ko=class{addToWindow(o){Mt.getAngularTestability=(i,n=!0)=>{let r=o.findTestabilityInTree(i,n);if(r==null)throw new he(5103,!1);return r},Mt.getAllAngularTestabilities=()=>o.getAllTestabilities(),Mt.getAllAngularRootElements=()=>o.getAllRootElements();let e=i=>{let n=Mt.getAllAngularTestabilities(),r=n.length,a=function(){r--,r==0&&i()};n.forEach(s=>{s.whenStable(a)})};Mt.frameworkStabilizers||(Mt.frameworkStabilizers=[]),Mt.frameworkStabilizers.push(e)}findTestabilityInTree(o,e,i){if(e==null)return null;let n=o.getTestability(e);return n??(i?Fn().isShadowRoot(e)?this.findTestabilityInTree(o,e.host,!0):this.findTestabilityInTree(o,e.parentElement,!0):null)}},Bc=(()=>{class t{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Go=new fe(""),Ga=(()=>{class t{constructor(e,i){this._zone=i,this._eventNameToPlugin=new Map,e.forEach(n=>{n.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,i,n){return this._findPluginFor(i).addEventListener(e,i,n)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(r=>r.supports(e)),!i)throw new he(5101,!1);return this._eventNameToPlugin.set(e,i),i}static{this.\u0275fac=function(i){return new(i||t)(W(Go),W(ve))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Vn=class{constructor(o){this._doc=o}},Uo="ng-app-id",Qa=(()=>{class t{constructor(e,i,n,r={}){this.doc=e,this.appId=i,this.nonce=n,this.platformId=r,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Di(r),this.resetHostNodes()}addStyles(e){for(let i of e)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(e){for(let i of e)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(i=>i.remove()),e.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let i of this.getAllStyles())this.addStyleToHost(e,i)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let i of this.hostNodes)this.addStyleToHost(i,e)}onStyleRemoved(e){let i=this.styleRef;i.get(e)?.elements?.forEach(n=>n.remove()),i.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${Uo}="${this.appId}"]`);if(e?.length){let i=new Map;return e.forEach(n=>{n.textContent!=null&&i.set(n.textContent,n)}),i}return null}changeUsageCount(e,i){let n=this.styleRef;if(n.has(e)){let r=n.get(e);return r.usage+=i,r.usage}return n.set(e,{usage:i,elements:[]}),i}getStyleElement(e,i){let n=this.styleNodesInDOM,r=n?.get(i);if(r?.parentNode===e)return n.delete(i),r.removeAttribute(Uo),r;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=i,this.platformIsServer&&a.setAttribute(Uo,this.appId),e.appendChild(a),a}}addStyleToHost(e,i){let n=this.getStyleElement(e,i),r=this.styleRef,a=r.get(i)?.elements;a?a.push(n):r.set(i,{elements:[n],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||t)(W(ne),W(wn),W(Ao,8),W($e))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),jo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zo=/%COMP%/g,Za="%COMP%",Vc=`_nghost-${Za}`,Hc=`_ngcontent-${Za}`,zc=!0,Uc=new fe("",{providedIn:"root",factory:()=>zc});function jc(t){return Hc.replace(Zo,t)}function Wc(t){return Vc.replace(Zo,t)}function Ya(t,o){return o.map(e=>e.replace(Zo,t))}var ei=(()=>{class t{constructor(e,i,n,r,a,s,l,u=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=n,this.removeStylesOnCompDestroy=r,this.doc=a,this.platformId=s,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Di(s),this.defaultRenderer=new Ai(e,a,l,this.platformIsServer)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Ci.ShadowDom&&(i=pe(I({},i),{encapsulation:Ci.Emulated}));let n=this.getOrCreateRenderer(e,i);return n instanceof Hn?n.applyToHost(e):n instanceof Pi&&n.applyStyles(),n}getOrCreateRenderer(e,i){let n=this.rendererByCompId,r=n.get(i.id);if(!r){let a=this.doc,s=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,b=this.platformIsServer;switch(i.encapsulation){case Ci.Emulated:r=new Hn(l,u,i,this.appId,f,a,s,b);break;case Ci.ShadowDom:return new Qo(l,u,e,i,a,s,this.nonce,b);default:r=new Pi(l,u,i,f,a,s,b);break}n.set(i.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||t)(W(Ga),W(Qa),W(wn),W(Uc),W(ne),W($e),W(ve),W(Ao))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Ai=class{constructor(o,e,i,n){this.eventManager=o,this.doc=e,this.ngZone=i,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(o,e){return e?this.doc.createElementNS(jo[e]||e,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,e){(qa(o)?o.content:o).appendChild(e)}insertBefore(o,e,i){o&&(qa(o)?o.content:o).insertBefore(e,i)}removeChild(o,e){e.remove()}selectRootElement(o,e){let i=typeof o=="string"?this.doc.querySelector(o):o;if(!i)throw new he(-5104,!1);return e||(i.textContent=""),i}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,i,n){if(n){e=n+":"+e;let r=jo[n];r?o.setAttributeNS(r,e,i):o.setAttribute(e,i)}else o.setAttribute(e,i)}removeAttribute(o,e,i){if(i){let n=jo[i];n?o.removeAttributeNS(n,e):o.removeAttribute(`${i}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,i,n){n&(Ei.DashCase|Ei.Important)?o.style.setProperty(e,i,n&Ei.Important?"important":""):o.style[e]=i}removeStyle(o,e,i){i&Ei.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,i){o!=null&&(o[e]=i)}setValue(o,e){o.nodeValue=e}listen(o,e,i){if(typeof o=="string"&&(o=Fn().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${e}`);return this.eventManager.addEventListener(o,e,this.decoratePreventDefault(i))}decoratePreventDefault(o){return e=>{if(e==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(e)):o(e))===!1&&e.preventDefault()}}};function qa(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Qo=class extends Ai{constructor(o,e,i,n,r,a,s,l){super(o,r,a,l),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=Ya(n.id,n.styles);for(let f of u){let b=document.createElement("style");s&&b.setAttribute("nonce",s),b.textContent=f,this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,i){return super.insertBefore(this.nodeOrShadowRoot(o),e,i)}removeChild(o,e){return super.removeChild(null,e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Pi=class extends Ai{constructor(o,e,i,n,r,a,s,l){super(o,r,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=n,this.styles=l?Ya(l,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Hn=class extends Pi{constructor(o,e,i,n,r,a,s,l){let u=n+"-"+i.id;super(o,e,i,r,a,s,l,u),this.contentAttr=jc(u),this.hostAttr=Wc(u)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,e){let i=super.createElement(o,e);return super.setAttribute(i,this.contentAttr,""),i}},qc=(()=>{class t extends Vn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,n){return e.addEventListener(i,n,!1),()=>this.removeEventListener(e,i,n)}removeEventListener(e,i,n){return e.removeEventListener(i,n)}static{this.\u0275fac=function(i){return new(i||t)(W(ne))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Ka=["alt","control","meta","shift"],Kc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Gc={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Qc=(()=>{class t extends Vn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,n){let r=t.parseEventName(i),a=t.eventCallback(r.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fn().onAndCancel(e,r.domEventName,a))}static parseEventName(e){let i=e.toLowerCase().split("."),n=i.shift();if(i.length===0||!(n==="keydown"||n==="keyup"))return null;let r=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),Ka.forEach(u=>{let f=i.indexOf(u);f>-1&&(i.splice(f,1),a+=u+".")}),a+=r,i.length!=0||r.length===0)return null;let l={};return l.domEventName=n,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let n=Kc[e.key]||e.key,r="";return i.indexOf("code.")>-1&&(n=e.code,r="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),Ka.forEach(a=>{if(a!==n){let s=Gc[a];s(e)&&(r+=a+".")}}),r+=n,r===i)}static eventCallback(e,i,n){return r=>{t.matchEventFullKeyCode(r,e)&&n.runGuarded(()=>i(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(i){return new(i||t)(W(ne))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function Zc(){qo.makeCurrent()}function Yc(){return new Lo}function Jc(){return ga(document),document}var Xc=[{provide:$e,useValue:Na},{provide:ba,useValue:Zc,multi:!0},{provide:ne,useFactory:Jc,deps:[]}],Ja=Ea(Ma,"browser",Xc),eu=new fe(""),tu=[{provide:Ln,useClass:Ko,deps:[]},{provide:wa,useClass:An,deps:[ve,Fo,Ln]},{provide:An,useClass:An,deps:[ve,Fo,Ln]}],iu=[{provide:ma,useValue:"root"},{provide:Lo,useFactory:Yc,deps:[]},{provide:Go,useClass:qc,multi:!0,deps:[ne,ve,$e]},{provide:Go,useClass:Qc,multi:!0,deps:[ne]},ei,Qa,Ga,{provide:Jt,useExisting:ei},{provide:Va,useClass:Bc,deps:[]},[]],zn=(()=>{class t{constructor(e){}static withServerTransition(e){return{ngModule:t,providers:[{provide:wn,useValue:e.appId}]}}static{this.\u0275fac=function(i){return new(i||t)(W(eu,12))}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=j({providers:[...iu,...tu],imports:[ue,Oa]})}}return t})();var Xa=(()=>{class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(i){return new(i||t)(W(ne))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var H="primary",Qi=Symbol("RouteTitle"),tr=class{constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ai(t){return new tr(t)}function nu(t,o,e){let i=e.path.split("/");if(i.length>t.length||e.pathMatch==="full"&&(o.hasChildren()||i.length<t.length))return null;let n={};for(let r=0;r<i.length;r++){let a=i[r],s=t[r];if(a[0]===":")n[a.substring(1)]=s;else if(a!==s.path)return null}return{consumed:t.slice(0,i.length),posParams:n}}function ou(t,o){if(t.length!==o.length)return!1;for(let e=0;e<t.length;++e)if(!mt(t[e],o[e]))return!1;return!0}function mt(t,o){let e=t?ir(t):void 0,i=o?ir(o):void 0;if(!e||!i||e.length!=i.length)return!1;let n;for(let r=0;r<e.length;r++)if(n=e[r],!ds(t[n],o[n]))return!1;return!0}function ir(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ds(t,o){if(Array.isArray(t)&&Array.isArray(o)){if(t.length!==o.length)return!1;let e=[...t].sort(),i=[...o].sort();return e.every((n,r)=>i[r]===n)}else return t===o}function ps(t){return t.length>0?t[t.length-1]:null}function At(t){return ea(t)?t:xa(t)?Be(Promise.resolve(t)):F(t)}var ru={exact:hs,subset:fs},ms={exact:au,subset:su,ignored:()=>!0};function ts(t,o,e){return ru[e.paths](t.root,o.root,e.matrixParams)&&ms[e.queryParams](t.queryParams,o.queryParams)&&!(e.fragment==="exact"&&t.fragment!==o.fragment)}function au(t,o){return mt(t,o)}function hs(t,o,e){if(!Bt(t.segments,o.segments)||!Wn(t.segments,o.segments,e)||t.numberOfChildren!==o.numberOfChildren)return!1;for(let i in o.children)if(!t.children[i]||!hs(t.children[i],o.children[i],e))return!1;return!0}function su(t,o){return Object.keys(o).length<=Object.keys(t).length&&Object.keys(o).every(e=>ds(t[e],o[e]))}function fs(t,o,e){return gs(t,o,o.segments,e)}function gs(t,o,e,i){if(t.segments.length>e.length){let n=t.segments.slice(0,e.length);return!(!Bt(n,e)||o.hasChildren()||!Wn(n,e,i))}else if(t.segments.length===e.length){if(!Bt(t.segments,e)||!Wn(t.segments,e,i))return!1;for(let n in o.children)if(!t.children[n]||!fs(t.children[n],o.children[n],i))return!1;return!0}else{let n=e.slice(0,t.segments.length),r=e.slice(t.segments.length);return!Bt(t.segments,n)||!Wn(t.segments,n,i)||!t.children[H]?!1:gs(t.children[H],o,r,i)}}function Wn(t,o,e){return o.every((i,n)=>ms[e](t[n].parameters,i.parameters))}var Ct=class{constructor(o=new Q([],{}),e={},i=null){this.root=o,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ai(this.queryParams),this._queryParamMap}toString(){return uu.serialize(this)}},Q=class{constructor(o,e){this.segments=o,this.children=e,this.parent=null,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qn(this)}},Nt=class{constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap??=ai(this.parameters),this._parameterMap}toString(){return vs(this)}};function lu(t,o){return Bt(t,o)&&t.every((e,i)=>mt(e.parameters,o[i].parameters))}function Bt(t,o){return t.length!==o.length?!1:t.every((e,i)=>e.path===o[i].path)}function cu(t,o){let e=[];return Object.entries(t.children).forEach(([i,n])=>{i===H&&(e=e.concat(o(n,i)))}),Object.entries(t.children).forEach(([i,n])=>{i!==H&&(e=e.concat(o(n,i)))}),e}var Zi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:()=>new si,providedIn:"root"})}}return t})(),si=class{parse(o){let e=new or(o);return new Ct(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){let e=`/${$i(o.root,!0)}`,i=mu(o.queryParams),n=typeof o.fragment=="string"?`#${du(o.fragment)}`:"";return`${e}${i}${n}`}},uu=new si;function qn(t){return t.segments.map(o=>vs(o)).join("/")}function $i(t,o){if(!t.hasChildren())return qn(t);if(o){let e=t.children[H]?$i(t.children[H],!1):"",i=[];return Object.entries(t.children).forEach(([n,r])=>{n!==H&&i.push(`${n}:${$i(r,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=cu(t,(i,n)=>n===H?[$i(t.children[H],!1)]:[`${n}:${$i(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[H]!=null?`${qn(t)}/${e[0]}`:`${qn(t)}/(${e.join("//")})`}}function bs(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Un(t){return bs(t).replace(/%3B/gi,";")}function du(t){return encodeURI(t)}function nr(t){return bs(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Kn(t){return decodeURIComponent(t)}function is(t){return Kn(t.replace(/\+/g,"%20"))}function vs(t){return`${nr(t.path)}${pu(t.parameters)}`}function pu(t){return Object.entries(t).map(([o,e])=>`;${nr(o)}=${nr(e)}`).join("")}function mu(t){let o=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(n=>`${Un(e)}=${Un(n)}`).join("&"):`${Un(e)}=${Un(i)}`).filter(e=>e);return o.length?`?${o.join("&")}`:""}var hu=/^[^\/()?;#]+/;function Yo(t){let o=t.match(hu);return o?o[0]:""}var fu=/^[^\/()?;=#]+/;function gu(t){let o=t.match(fu);return o?o[0]:""}var bu=/^[^=?&#]+/;function vu(t){let o=t.match(bu);return o?o[0]:""}var yu=/^[^&#]+/;function _u(t){let o=t.match(yu);return o?o[0]:""}var or=class{constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(i[H]=new Q(o,e)),i}parseSegment(){let o=Yo(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new he(4009,!1);return this.capture(o),new Nt(Kn(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let e=gu(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let n=Yo(this.remaining);n&&(i=n,this.capture(i))}o[Kn(e)]=Kn(i)}parseQueryParam(o){let e=vu(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=_u(this.remaining);a&&(i=a,this.capture(i))}let n=is(e),r=is(i);if(o.hasOwnProperty(n)){let a=o[n];Array.isArray(a)||(a=[a],o[n]=a),a.push(r)}else o[n]=r}parseParens(o){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Yo(this.remaining),n=this.remaining[i.length];if(n!=="/"&&n!==")"&&n!==";")throw new he(4010,!1);let r;i.indexOf(":")>-1?(r=i.slice(0,i.indexOf(":")),this.capture(r),this.capture(":")):o&&(r=H);let a=this.parseChildren();e[r]=Object.keys(a).length===1?a[H]:new Q([],a),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new he(4011,!1)}};function ys(t){return t.segments.length>0?new Q([],{[H]:t}):t}function _s(t){let o={};for(let[i,n]of Object.entries(t.children)){let r=_s(n);if(i===H&&r.segments.length===0&&r.hasChildren())for(let[a,s]of Object.entries(r.children))o[a]=s;else(r.segments.length>0||r.hasChildren())&&(o[i]=r)}let e=new Q(t.segments,o);return Iu(e)}function Iu(t){if(t.numberOfChildren===1&&t.children[H]){let o=t.children[H];return new Q(t.segments.concat(o.segments),o.children)}return t}function Vt(t){return t instanceof Ct}function Cu(t,o,e=null,i=null){let n=Is(t);return Cs(n,o,e,i)}function Is(t){let o;function e(r){let a={};for(let l of r.children){let u=e(l);a[l.outlet]=u}let s=new Q(r.url,a);return r===t&&(o=s),s}let i=e(t.root),n=ys(i);return o??n}function Cs(t,o,e,i){let n=t;for(;n.parent;)n=n.parent;if(o.length===0)return Jo(n,n,n,e,i);let r=Su(o);if(r.toRoot())return Jo(n,n,new Q([],{}),e,i);let a=wu(r,n,t),s=a.processChildren?Bi(a.segmentGroup,a.index,r.commands):ws(a.segmentGroup,a.index,r.commands);return Jo(n,a.segmentGroup,s,e,i)}function Gn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function zi(t){return typeof t=="object"&&t!=null&&t.outlets}function Jo(t,o,e,i,n){let r={};i&&Object.entries(i).forEach(([l,u])=>{r[l]=Array.isArray(u)?u.map(f=>`${f}`):`${u}`});let a;t===o?a=e:a=Ss(t,o,e);let s=ys(_s(a));return new Ct(s,r,n)}function Ss(t,o,e){let i={};return Object.entries(t.children).forEach(([n,r])=>{r===o?i[n]=e:i[n]=Ss(r,o,e)}),new Q(t.segments,i)}var Qn=class{constructor(o,e,i){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=i,o&&i.length>0&&Gn(i[0]))throw new he(4003,!1);let n=i.find(zi);if(n&&n!==ps(i))throw new he(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Su(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Qn(!0,0,t);let o=0,e=!1,i=t.reduce((n,r,a)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let s={};return Object.entries(r.outlets).forEach(([l,u])=>{s[l]=typeof u=="string"?u.split("/"):u}),[...n,{outlets:s}]}if(r.segmentPath)return[...n,r.segmentPath]}return typeof r!="string"?[...n,r]:a===0?(r.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?o++:s!=""&&n.push(s))}),n):[...n,r]},[]);return new Qn(e,o,i)}var ni=class{constructor(o,e,i){this.segmentGroup=o,this.processChildren=e,this.index=i}};function wu(t,o,e){if(t.isAbsolute)return new ni(o,!0,0);if(!e)return new ni(o,!1,NaN);if(e.parent===null)return new ni(e,!0,0);let i=Gn(t.commands[0])?0:1,n=e.segments.length-1+i;return xu(e,n,t.numberOfDoubleDots)}function xu(t,o,e){let i=t,n=o,r=e;for(;r>n;){if(r-=n,i=i.parent,!i)throw new he(4005,!1);n=i.segments.length}return new ni(i,!1,n-r)}function Tu(t){return zi(t[0])?t[0].outlets:{[H]:t}}function ws(t,o,e){if(t??=new Q([],{}),t.segments.length===0&&t.hasChildren())return Bi(t,o,e);let i=Eu(t,o,e),n=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let r=new Q(t.segments.slice(0,i.pathIndex),{});return r.children[H]=new Q(t.segments.slice(i.pathIndex),t.children),Bi(r,0,n)}else return i.match&&n.length===0?new Q(t.segments,{}):i.match&&!t.hasChildren()?rr(t,o,e):i.match?Bi(t,0,n):rr(t,o,e)}function Bi(t,o,e){if(e.length===0)return new Q(t.segments,{});{let i=Tu(e),n={};if(Object.keys(i).some(r=>r!==H)&&t.children[H]&&t.numberOfChildren===1&&t.children[H].segments.length===0){let r=Bi(t.children[H],o,e);return new Q(t.segments,r.children)}return Object.entries(i).forEach(([r,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[r]=ws(t.children[r],o,a))}),Object.entries(t.children).forEach(([r,a])=>{i[r]===void 0&&(n[r]=a)}),new Q(t.segments,n)}}function Eu(t,o,e){let i=0,n=o,r={match:!1,pathIndex:0,commandIndex:0};for(;n<t.segments.length;){if(i>=e.length)return r;let a=t.segments[n],s=e[i];if(zi(s))break;let l=`${s}`,u=i<e.length-1?e[i+1]:null;if(n>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!os(l,u,a))return r;i+=2}else{if(!os(l,{},a))return r;i++}n++}return{match:!0,pathIndex:n,commandIndex:i}}function rr(t,o,e){let i=t.segments.slice(0,o),n=0;for(;n<e.length;){let r=e[n];if(zi(r)){let l=Mu(r.outlets);return new Q(i,l)}if(n===0&&Gn(e[0])){let l=t.segments[o];i.push(new Nt(l.path,ns(e[0]))),n++;continue}let a=zi(r)?r.outlets[H]:`${r}`,s=n<e.length-1?e[n+1]:null;a&&s&&Gn(s)?(i.push(new Nt(a,ns(s))),n+=2):(i.push(new Nt(a,{})),n++)}return new Q(i,{})}function Mu(t){let o={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(o[e]=rr(new Q([],{}),0,i))}),o}function ns(t){let o={};return Object.entries(t).forEach(([e,i])=>o[e]=`${i}`),o}function os(t,o,e){return t==e.path&&mt(o,e.parameters)}var Vi="imperative",xe=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(xe||{}),it=class{constructor(o,e){this.id=o,this.url=e}},Dt=class extends it{constructor(o,e,i="imperative",n=null){super(o,e),this.type=xe.NavigationStart,this.navigationTrigger=i,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},We=class extends it{constructor(o,e,i){super(o,e),this.urlAfterRedirects=i,this.type=xe.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},je=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(je||{}),Zn=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Zn||{}),It=class extends it{constructor(o,e,i,n){super(o,e),this.reason=i,this.code=n,this.type=xe.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Rt=class extends it{constructor(o,e,i,n){super(o,e),this.reason=i,this.code=n,this.type=xe.NavigationSkipped}},Ui=class extends it{constructor(o,e,i,n){super(o,e),this.error=i,this.target=n,this.type=xe.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Yn=class extends it{constructor(o,e,i,n){super(o,e),this.urlAfterRedirects=i,this.state=n,this.type=xe.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ar=class extends it{constructor(o,e,i,n){super(o,e),this.urlAfterRedirects=i,this.state=n,this.type=xe.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sr=class extends it{constructor(o,e,i,n,r){super(o,e),this.urlAfterRedirects=i,this.state=n,this.shouldActivate=r,this.type=xe.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},lr=class extends it{constructor(o,e,i,n){super(o,e),this.urlAfterRedirects=i,this.state=n,this.type=xe.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cr=class extends it{constructor(o,e,i,n){super(o,e),this.urlAfterRedirects=i,this.state=n,this.type=xe.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ur=class{constructor(o){this.route=o,this.type=xe.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},dr=class{constructor(o){this.route=o,this.type=xe.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pr=class{constructor(o){this.snapshot=o,this.type=xe.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mr=class{constructor(o){this.snapshot=o,this.type=xe.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hr=class{constructor(o){this.snapshot=o,this.type=xe.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fr=class{constructor(o){this.snapshot=o,this.type=xe.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jn=class{constructor(o,e,i){this.routerEvent=o,this.position=e,this.anchor=i,this.type=xe.Scroll}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},ji=class{},li=class{constructor(o,e){this.url=o,this.navigationBehaviorOptions=e}};function Ou(t,o){return t.providers&&!t._injector&&(t._injector=$o(t.providers,o,`Route: ${t.path}`)),t._injector??o}function ct(t){return t.outlet||H}function ku(t,o){let e=t.filter(i=>ct(i)===o);return e.push(...t.filter(i=>ct(i)!==o)),e}function Yi(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let o=t.parent;o;o=o.parent){let e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var gr=class{get injector(){return Yi(this.route?.snapshot)??this.rootInjector}set injector(o){}constructor(o){this.rootInjector=o,this.outlet=null,this.route=null,this.children=new Ji(this.rootInjector),this.attachRef=null}},Ji=(()=>{class t{constructor(e){this.rootInjector=e,this.contexts=new Map}onChildOutletCreated(e,i){let n=this.getOrCreateContext(e);n.outlet=i,this.contexts.set(e,n)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new gr(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static{this.\u0275fac=function(i){return new(i||t)(W(wi))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Xn=class{constructor(o){this._root=o}get root(){return this._root.value}parent(o){let e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){let e=br(o,this._root);return e?e.children.map(i=>i.value):[]}firstChild(o){let e=br(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){let e=vr(o,this._root);return e.length<2?[]:e[e.length-2].children.map(n=>n.value).filter(n=>n!==o)}pathFromRoot(o){return vr(o,this._root).map(e=>e.value)}};function br(t,o){if(t===o.value)return o;for(let e of o.children){let i=br(t,e);if(i)return i}return null}function vr(t,o){if(t===o.value)return[o];for(let e of o.children){let i=vr(t,e);if(i.length)return i.unshift(o),i}return[]}var Ue=class{constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}};function ii(t){let o={};return t&&t.children.forEach(e=>o[e.value.outlet]=e),o}var eo=class extends Xn{constructor(o,e){super(o),this.snapshot=e,Er(this,o)}toString(){return this.snapshot.toString()}};function xs(t){let o=Du(t),e=new Je([new Nt("",{})]),i=new Je({}),n=new Je({}),r=new Je({}),a=new Je(""),s=new Ht(e,i,r,a,n,H,t,o.root);return s.snapshot=o.root,new eo(new Ue(s,[]),o)}function Du(t){let o={},e={},i={},n="",r=new oi([],o,i,n,e,H,t,null,{});return new io("",new Ue(r,[]))}var Ht=class{constructor(o,e,i,n,r,a,s,l){this.urlSubject=o,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=n,this.dataSubject=r,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(oe(u=>u[Qi]))??F(void 0),this.url=o,this.params=e,this.queryParams=i,this.fragment=n,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(oe(o=>ai(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(oe(o=>ai(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function to(t,o,e="emptyOnly"){let i,{routeConfig:n}=t;return o!==null&&(e==="always"||n?.path===""||!o.component&&!o.routeConfig?.loadComponent)?i={params:I(I({},o.params),t.params),data:I(I({},o.data),t.data),resolve:I(I(I(I({},t.data),o.data),n?.data),t._resolvedData)}:i={params:I({},t.params),data:I({},t.data),resolve:I(I({},t.data),t._resolvedData??{})},n&&Es(n)&&(i.resolve[Qi]=n.title),i}var oi=class{get title(){return this.data?.[Qi]}constructor(o,e,i,n,r,a,s,l,u){this.url=o,this.params=e,this.queryParams=i,this.fragment=n,this.data=r,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ai(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ai(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${e}')`}},io=class extends Xn{constructor(o,e){super(e),this.url=o,Er(this,e)}toString(){return Ts(this._root)}};function Er(t,o){o.value._routerState=t,o.children.forEach(e=>Er(t,e))}function Ts(t){let o=t.children.length>0?` { ${t.children.map(Ts).join(", ")} } `:"";return`${t.value}${o}`}function Xo(t){if(t.snapshot){let o=t.snapshot,e=t._futureSnapshot;t.snapshot=e,mt(o.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),o.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),mt(o.params,e.params)||t.paramsSubject.next(e.params),ou(o.url,e.url)||t.urlSubject.next(e.url),mt(o.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function yr(t,o){let e=mt(t.params,o.params)&&lu(t.url,o.url),i=!t.parent!=!o.parent;return e&&!i&&(!t.parent||yr(t.parent,o.parent))}function Es(t){return typeof t.title=="string"||t.title===null}var Mr=(()=>{class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=H,this.activateEvents=new K,this.deactivateEvents=new K,this.attachEvents=new K,this.detachEvents=new K,this.parentContexts=_(Ji),this.location=_(Mn),this.changeDetector=_(kt),this.inputBinder=_(so,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:n}=e.name;if(i)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new he(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new he(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new he(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new he(4013,!1);this._activatedRoute=e;let n=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new _r(e,s,n.injector);this.activated=n.createComponent(a,{index:n.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=_e({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Pe]})}}return t})(),_r=class t{__ngOutletInjector(o){return new t(this.route,this.childContexts,o)}constructor(o,e,i){this.route=o,this.childContexts=e,this.parent=i}get(o,e){return o===Ht?this.route:o===Ji?this.childContexts:this.parent.get(o,e)}},so=new fe(""),rs=(()=>{class t{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,n=Cn([i.queryParams,i.params,i.data]).pipe(rt(([r,a,s],l)=>(s=I(I(I({},r),a),s),l===0?F(s):Promise.resolve(s)))).subscribe(r=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let a=Da(i.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,r[s])});this.outletDataSubscriptions.set(e,n)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function Ru(t,o,e){let i=Wi(t,o._root,e?e._root:void 0);return new eo(i,o)}function Wi(t,o,e){if(e&&t.shouldReuseRoute(o.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=o.value;let n=Lu(t,o,e);return new Ue(i,n)}else{if(t.shouldAttach(o.value)){let r=t.retrieve(o.value);if(r!==null){let a=r.route;return a.value._futureSnapshot=o.value,a.children=o.children.map(s=>Wi(t,s)),a}}let i=Au(o.value),n=o.children.map(r=>Wi(t,r));return new Ue(i,n)}}function Lu(t,o,e){return o.children.map(i=>{for(let n of e.children)if(t.shouldReuseRoute(i.value,n.value.snapshot))return Wi(t,i,n);return Wi(t,i)})}function Au(t){return new Ht(new Je(t.url),new Je(t.params),new Je(t.queryParams),new Je(t.fragment),new Je(t.data),t.outlet,t.component,t)}var qi=class{constructor(o,e){this.redirectTo=o,this.navigationBehaviorOptions=e}},Ms="ngNavigationCancelingError";function no(t,o){let{redirectTo:e,navigationBehaviorOptions:i}=Vt(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,n=Os(!1,je.Redirect);return n.url=e,n.navigationBehaviorOptions=i,n}function Os(t,o){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Ms]=!0,e.cancellationCode=o,e}function Pu(t){return ks(t)&&Vt(t.url)}function ks(t){return!!t&&t[Ms]}var $u=(t,o,e,i)=>oe(n=>(new Ir(o,n.targetRouterState,n.currentRouterState,e,i).activate(t),n)),Ir=class{constructor(o,e,i,n,r){this.routeReuseStrategy=o,this.futureState=e,this.currState=i,this.forwardEvent=n,this.inputBindingEnabled=r}activate(o){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,o),Xo(this.futureState.root),this.activateChildRoutes(e,i,o)}deactivateChildRoutes(o,e,i){let n=ii(e);o.children.forEach(r=>{let a=r.value.outlet;this.deactivateRoutes(r,n[a],i),delete n[a]}),Object.values(n).forEach(r=>{this.deactivateRouteAndItsChildren(r,i)})}deactivateRoutes(o,e,i){let n=o.value,r=e?e.value:null;if(n===r)if(n.component){let a=i.getContext(n.outlet);a&&this.deactivateChildRoutes(o,e,a.children)}else this.deactivateChildRoutes(o,e,i);else r&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){let i=e.getContext(o.value.outlet),n=i&&o.value.component?i.children:e,r=ii(o);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,n);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:a,route:o,contexts:s})}}deactivateRouteAndOutlet(o,e){let i=e.getContext(o.value.outlet),n=i&&o.value.component?i.children:e,r=ii(o);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,n);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(o,e,i){let n=ii(e);o.children.forEach(r=>{this.activateRoutes(r,n[r.value.outlet],i),this.forwardEvent(new fr(r.value.snapshot))}),o.children.length&&this.forwardEvent(new mr(o.value.snapshot))}activateRoutes(o,e,i){let n=o.value,r=e?e.value:null;if(Xo(n),n===r)if(n.component){let a=i.getOrCreateContext(n.outlet);this.activateChildRoutes(o,e,a.children)}else this.activateChildRoutes(o,e,i);else if(n.component){let a=i.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Xo(s.route.value),this.activateChildRoutes(o,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(o,null,a.children)}else this.activateChildRoutes(o,null,i)}},oo=class{constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},ri=class{constructor(o,e){this.component=o,this.route=e}};function Fu(t,o,e){let i=t._root,n=o?o._root:null;return Fi(i,n,e,[i.value])}function Nu(t){let o=t.routeConfig?t.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:t,guards:o}}function ui(t,o){let e=Symbol(),i=o.get(t,e);return i===e?typeof t=="function"&&!da(t)?t:o.get(t):i}function Fi(t,o,e,i,n={canDeactivateChecks:[],canActivateChecks:[]}){let r=ii(o);return t.children.forEach(a=>{Bu(a,r[a.value.outlet],e,i.concat([a.value]),n),delete r[a.value.outlet]}),Object.entries(r).forEach(([a,s])=>Hi(s,e.getContext(a),n)),n}function Bu(t,o,e,i,n={canDeactivateChecks:[],canActivateChecks:[]}){let r=t.value,a=o?o.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&r.routeConfig===a.routeConfig){let l=Vu(a,r,r.routeConfig.runGuardsAndResolvers);l?n.canActivateChecks.push(new oo(i)):(r.data=a.data,r._resolvedData=a._resolvedData),r.component?Fi(t,o,s?s.children:null,i,n):Fi(t,o,e,i,n),l&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new ri(s.outlet.component,a))}else a&&Hi(o,s,n),n.canActivateChecks.push(new oo(i)),r.component?Fi(t,null,s?s.children:null,i,n):Fi(t,null,e,i,n);return n}function Vu(t,o,e){if(typeof e=="function")return e(t,o);switch(e){case"pathParamsChange":return!Bt(t.url,o.url);case"pathParamsOrQueryParamsChange":return!Bt(t.url,o.url)||!mt(t.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!yr(t,o)||!mt(t.queryParams,o.queryParams);case"paramsChange":default:return!yr(t,o)}}function Hi(t,o,e){let i=ii(t),n=t.value;Object.entries(i).forEach(([r,a])=>{n.component?o?Hi(a,o.children.getContext(r),e):Hi(a,null,e):Hi(a,o,e)}),n.component?o&&o.outlet&&o.outlet.isActivated?e.canDeactivateChecks.push(new ri(o.outlet.component,n)):e.canDeactivateChecks.push(new ri(null,n)):e.canDeactivateChecks.push(new ri(null,n))}function Xi(t){return typeof t=="function"}function Hu(t){return typeof t=="boolean"}function zu(t){return t&&Xi(t.canLoad)}function Uu(t){return t&&Xi(t.canActivate)}function ju(t){return t&&Xi(t.canActivateChild)}function Wu(t){return t&&Xi(t.canDeactivate)}function qu(t){return t&&Xi(t.canMatch)}function Ds(t){return t instanceof ta||t?.name==="EmptyError"}var jn=Symbol("INITIAL_VALUE");function ci(){return rt(t=>Cn(t.map(o=>o.pipe(Zt(1),la(jn)))).pipe(oe(o=>{for(let e of o)if(e!==!0){if(e===jn)return jn;if(e===!1||Ku(e))return e}return!0}),vt(o=>o!==jn),Zt(1)))}function Ku(t){return Vt(t)||t instanceof qi}function Gu(t,o){return He(e=>{let{targetSnapshot:i,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:a}}=e;return a.length===0&&r.length===0?F(pe(I({},e),{guardsResult:!0})):Qu(a,i,n,t).pipe(He(s=>s&&Hu(s)?Zu(i,r,t,o):F(s)),oe(s=>pe(I({},e),{guardsResult:s})))})}function Qu(t,o,e,i){return Be(t).pipe(He(n=>td(n.component,n.route,e,o,i)),Et(n=>n!==!0,!0))}function Zu(t,o,e,i){return Be(o).pipe(Qt(n=>ia(Ju(n.route.parent,i),Yu(n.route,i),ed(t,n.path,e),Xu(t,n.route,e))),Et(n=>n!==!0,!0))}function Yu(t,o){return t!==null&&o&&o(new hr(t)),F(!0)}function Ju(t,o){return t!==null&&o&&o(new pr(t)),F(!0)}function Xu(t,o,e){let i=o.routeConfig?o.routeConfig.canActivate:null;if(!i||i.length===0)return F(!0);let n=i.map(r=>Mo(()=>{let a=Yi(o)??e,s=ui(r,a),l=Uu(s)?s.canActivate(o,t):pt(a,()=>s(o,t));return At(l).pipe(Et())}));return F(n).pipe(ci())}function ed(t,o,e){let i=o[o.length-1],r=o.slice(0,o.length-1).reverse().map(a=>Nu(a)).filter(a=>a!==null).map(a=>Mo(()=>{let s=a.guards.map(l=>{let u=Yi(a.node)??e,f=ui(l,u),b=ju(f)?f.canActivateChild(i,t):pt(u,()=>f(i,t));return At(b).pipe(Et())});return F(s).pipe(ci())}));return F(r).pipe(ci())}function td(t,o,e,i,n){let r=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!r||r.length===0)return F(!0);let a=r.map(s=>{let l=Yi(o)??n,u=ui(s,l),f=Wu(u)?u.canDeactivate(t,o,e,i):pt(l,()=>u(t,o,e,i));return At(f).pipe(Et())});return F(a).pipe(ci())}function id(t,o,e,i){let n=o.canLoad;if(n===void 0||n.length===0)return F(!0);let r=n.map(a=>{let s=ui(a,t),l=zu(s)?s.canLoad(o,e):pt(t,()=>s(o,e));return At(l)});return F(r).pipe(ci(),Rs(i))}function Rs(t){return Xr(Oe(o=>{if(typeof o!="boolean")throw no(t,o)}),oe(o=>o===!0))}function nd(t,o,e,i){let n=o.canMatch;if(!n||n.length===0)return F(!0);let r=n.map(a=>{let s=ui(a,t),l=qu(s)?s.canMatch(o,e):pt(t,()=>s(o,e));return At(l)});return F(r).pipe(ci(),Rs(i))}var Ki=class{constructor(o){this.segmentGroup=o||null}},Gi=class extends Error{constructor(o){super(),this.urlTree=o}};function ti(t){return _i(new Ki(t))}function od(t){return _i(new he(4e3,!1))}function rd(t){return _i(Os(!1,je.GuardRejected))}var Cr=class{constructor(o,e){this.urlSerializer=o,this.urlTree=e}lineralizeSegments(o,e){let i=[],n=e.root;for(;;){if(i=i.concat(n.segments),n.numberOfChildren===0)return F(i);if(n.numberOfChildren>1||!n.children[H])return od(`${o.redirectTo}`);n=n.children[H]}}applyRedirectCommands(o,e,i,n,r){if(typeof e!="string"){let s=e,{queryParams:l,fragment:u,routeConfig:f,url:b,outlet:C,params:w,data:B,title:U}=n,de=pt(r,()=>s({params:w,data:B,queryParams:l,fragment:u,routeConfig:f,url:b,outlet:C,title:U}));if(de instanceof Ct)throw new Gi(de);e=de}let a=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,i);if(e[0]==="/")throw new Gi(a);return a}applyRedirectCreateUrlTree(o,e,i,n){let r=this.createSegmentGroup(o,e.root,i,n);return new Ct(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){let i={};return Object.entries(o).forEach(([n,r])=>{if(typeof r=="string"&&r[0]===":"){let s=r.substring(1);i[n]=e[s]}else i[n]=r}),i}createSegmentGroup(o,e,i,n){let r=this.createSegments(o,e.segments,i,n),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(o,l,i,n)}),new Q(r,a)}createSegments(o,e,i,n){return e.map(r=>r.path[0]===":"?this.findPosParam(o,r,n):this.findOrReturn(r,i))}findPosParam(o,e,i){let n=i[e.path.substring(1)];if(!n)throw new he(4001,!1);return n}findOrReturn(o,e){let i=0;for(let n of e){if(n.path===o.path)return e.splice(i),n;i++}return o}},Sr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ad(t,o,e,i,n){let r=Ls(t,o,e);return r.matched?(i=Ou(o,i),nd(i,o,e,n).pipe(oe(a=>a===!0?r:I({},Sr)))):F(r)}function Ls(t,o,e){if(o.path==="**")return sd(e);if(o.path==="")return o.pathMatch==="full"&&(t.hasChildren()||e.length>0)?I({},Sr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let n=(o.matcher||nu)(e,t,o);if(!n)return I({},Sr);let r={};Object.entries(n.posParams??{}).forEach(([s,l])=>{r[s]=l.path});let a=n.consumed.length>0?I(I({},r),n.consumed[n.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:n.consumed,remainingSegments:e.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function sd(t){return{matched:!0,parameters:t.length>0?ps(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function as(t,o,e,i){return e.length>0&&ud(t,e,i)?{segmentGroup:new Q(o,cd(i,new Q(e,t.children))),slicedSegments:[]}:e.length===0&&dd(t,e,i)?{segmentGroup:new Q(t.segments,ld(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Q(t.segments,t.children),slicedSegments:e}}function ld(t,o,e,i){let n={};for(let r of e)if(lo(t,o,r)&&!i[ct(r)]){let a=new Q([],{});n[ct(r)]=a}return I(I({},i),n)}function cd(t,o){let e={};e[H]=o;for(let i of t)if(i.path===""&&ct(i)!==H){let n=new Q([],{});e[ct(i)]=n}return e}function ud(t,o,e){return e.some(i=>lo(t,o,i)&&ct(i)!==H)}function dd(t,o,e){return e.some(i=>lo(t,o,i))}function lo(t,o,e){return(t.hasChildren()||o.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pd(t,o,e){return o.length===0&&!t.children[e]}var wr=class{};function md(t,o,e,i,n,r,a="emptyOnly"){return new xr(t,o,e,i,n,a,r).recognize()}var hd=31,xr=class{constructor(o,e,i,n,r,a,s){this.injector=o,this.configLoader=e,this.rootComponentType=i,this.config=n,this.urlTree=r,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.applyRedirects=new Cr(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(o){return new he(4002,`'${o.segmentGroup}'`)}recognize(){let o=as(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(oe(({children:e,rootSnapshot:i})=>{let n=new Ue(i,e),r=new io("",n),a=Cu(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(a),{state:r,tree:a}}))}match(o){let e=new oi([],Object.freeze({}),Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),H,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,H,e).pipe(oe(i=>({children:i,rootSnapshot:e})),Gt(i=>{if(i instanceof Gi)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ki?this.noMatchError(i):i}))}processSegmentGroup(o,e,i,n,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(o,e,i,r):this.processSegment(o,e,i,i.segments,n,!0,r).pipe(oe(a=>a instanceof Ue?[a]:[]))}processChildren(o,e,i,n){let r=[];for(let a of Object.keys(i.children))a==="primary"?r.unshift(a):r.push(a);return Be(r).pipe(Qt(a=>{let s=i.children[a],l=ku(e,a);return this.processSegmentGroup(o,l,s,a,n)}),sa((a,s)=>(a.push(...s),a)),Oo(null),aa(),He(a=>{if(a===null)return ti(i);let s=As(a);return fd(s),F(s)}))}processSegment(o,e,i,n,r,a,s){return Be(e).pipe(Qt(l=>this.processSegmentAgainstRoute(l._injector??o,e,l,i,n,r,a,s).pipe(Gt(u=>{if(u instanceof Ki)return F(null);throw u}))),Et(l=>!!l),Gt(l=>{if(Ds(l))return pd(i,n,r)?F(new wr):ti(i);throw l}))}processSegmentAgainstRoute(o,e,i,n,r,a,s,l){return ct(i)!==a&&(a===H||!lo(n,r,i))?ti(n):i.redirectTo===void 0?this.matchSegmentAgainstRoute(o,n,i,r,a,l):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(o,n,e,i,r,a,l):ti(n)}expandSegmentAgainstRouteUsingRedirect(o,e,i,n,r,a,s){let{matched:l,parameters:u,consumedSegments:f,positionalParamSegments:b,remainingSegments:C}=Ls(e,n,r);if(!l)return ti(e);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>hd&&(this.allowRedirects=!1));let w=new oi(r,u,Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,ss(n),ct(n),n.component??n._loadedComponent??null,n,ls(n)),B=to(w,s,this.paramsInheritanceStrategy);w.params=Object.freeze(B.params),w.data=Object.freeze(B.data);let U=this.applyRedirects.applyRedirectCommands(f,n.redirectTo,b,w,o);return this.applyRedirects.lineralizeSegments(n,U).pipe(He(de=>this.processSegment(o,i,e,de.concat(C),a,!1,s)))}matchSegmentAgainstRoute(o,e,i,n,r,a){let s=ad(e,i,n,o,this.urlSerializer);return i.path==="**"&&(e.children={}),s.pipe(rt(l=>l.matched?(o=i._injector??o,this.getChildConfig(o,i,n).pipe(rt(({routes:u})=>{let f=i._loadedInjector??o,{parameters:b,consumedSegments:C,remainingSegments:w}=l,B=new oi(C,b,Object.freeze(I({},this.urlTree.queryParams)),this.urlTree.fragment,ss(i),ct(i),i.component??i._loadedComponent??null,i,ls(i)),U=to(B,a,this.paramsInheritanceStrategy);B.params=Object.freeze(U.params),B.data=Object.freeze(U.data);let{segmentGroup:de,slicedSegments:Me}=as(e,C,w,u);if(Me.length===0&&de.hasChildren())return this.processChildren(f,u,de,B).pipe(oe(Ze=>new Ue(B,Ze)));if(u.length===0&&Me.length===0)return F(new Ue(B,[]));let Ae=ct(i)===r;return this.processSegment(f,u,de,Me,Ae?H:r,!0,B).pipe(oe(Ze=>new Ue(B,Ze instanceof Ue?[Ze]:[])))}))):ti(e)))}getChildConfig(o,e,i){return e.children?F({routes:e.children,injector:o}):e.loadChildren?e._loadedRoutes!==void 0?F({routes:e._loadedRoutes,injector:e._loadedInjector}):id(o,e,i,this.urlSerializer).pipe(He(n=>n?this.configLoader.loadChildren(o,e).pipe(Oe(r=>{e._loadedRoutes=r.routes,e._loadedInjector=r.injector})):rd(e))):F({routes:[],injector:o})}};function fd(t){t.sort((o,e)=>o.value.outlet===H?-1:e.value.outlet===H?1:o.value.outlet.localeCompare(e.value.outlet))}function gd(t){let o=t.value.routeConfig;return o&&o.path===""}function As(t){let o=[],e=new Set;for(let i of t){if(!gd(i)){o.push(i);continue}let n=o.find(r=>i.value.routeConfig===r.value.routeConfig);n!==void 0?(n.children.push(...i.children),e.add(n)):o.push(i)}for(let i of e){let n=As(i.children);o.push(new Ue(i.value,n))}return o.filter(i=>!e.has(i))}function ss(t){return t.data||{}}function ls(t){return t.resolve||{}}function bd(t,o,e,i,n,r){return He(a=>md(t,o,e,i,a.extractedUrl,n,r).pipe(oe(({state:s,tree:l})=>pe(I({},a),{targetSnapshot:s,urlAfterRedirects:l}))))}function vd(t,o){return He(e=>{let{targetSnapshot:i,guards:{canActivateChecks:n}}=e;if(!n.length)return F(e);let r=new Set(n.map(l=>l.route)),a=new Set;for(let l of r)if(!a.has(l))for(let u of Ps(l))a.add(u);let s=0;return Be(a).pipe(Qt(l=>r.has(l)?yd(l,i,t,o):(l.data=to(l,l.parent,t).resolve,F(void 0))),Oe(()=>s++),ko(1),He(l=>s===a.size?F(e):Tt))})}function Ps(t){let o=t.children.map(e=>Ps(e)).flat();return[t,...o]}function yd(t,o,e,i){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!Es(n)&&(r[Qi]=n.title),_d(r,t,o,i).pipe(oe(a=>(t._resolvedData=a,t.data=to(t,t.parent,e).resolve,null)))}function _d(t,o,e,i){let n=ir(t);if(n.length===0)return F({});let r={};return Be(n).pipe(He(a=>Id(t[a],o,e,i).pipe(Et(),Oe(s=>{if(s instanceof qi)throw no(new si,s);r[a]=s}))),ko(1),ra(r),Gt(a=>Ds(a)?Tt:_i(a)))}function Id(t,o,e,i){let n=Yi(o)??i,r=ui(t,n),a=r.resolve?r.resolve(o,e):pt(n,()=>r(o,e));return At(a)}function er(t){return rt(o=>{let e=t(o);return e?Be(e).pipe(oe(()=>o)):F(o)})}var $s=(()=>{class t{buildTitle(e){let i,n=e.root;for(;n!==void 0;)i=this.getResolvedTitleForRoute(n)??i,n=n.children.find(r=>r.outlet===H);return i}getResolvedTitleForRoute(e){return e.data[Qi]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:()=>_(Cd),providedIn:"root"})}}return t})(),Cd=(()=>{class t extends $s{constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||t)(W(Xa))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),en=new fe("",{providedIn:"root",factory:()=>({})}),Sd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["ng-component"]],standalone:!0,features:[P],decls:1,vars:0,template:function(i,n){i&1&&g(0,"router-outlet")},dependencies:[Mr],encapsulation:2})}}return t})();function Or(t){let o=t.children&&t.children.map(Or),e=o?pe(I({},t),{children:o}):I({},t);return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==H&&(e.component=Sd),e}var ro=new fe(""),kr=(()=>{class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=_($n)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return F(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let i=At(e.loadComponent()).pipe(oe(Fs),Oe(r=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=r}),Sn(()=>{this.componentLoaders.delete(e)})),n=new Eo(i,()=>new Ye).pipe(To());return this.componentLoaders.set(e,n),n}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return F({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=wd(i,this.compiler,e,this.onLoadEndListener).pipe(Sn(()=>{this.childrenLoaders.delete(i)})),a=new Eo(r,()=>new Ye).pipe(To());return this.childrenLoaders.set(i,a),a}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function wd(t,o,e,i){return At(t.loadChildren()).pipe(oe(Fs),He(n=>n instanceof _a||Array.isArray(n)?F(n):Be(o.compileModuleAsync(n))),oe(n=>{i&&i(t);let r,a,s=!1;return Array.isArray(n)?(a=n,s=!0):(r=n.create(e).injector,a=r.get(ro,[],{optional:!0,self:!0}).flat()),{routes:a.map(Or),injector:r}}))}function xd(t){return t&&typeof t=="object"&&"default"in t}function Fs(t){return xd(t)?t.default:t}var Dr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:()=>_(Td),providedIn:"root"})}}return t})(),Td=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ns=new fe(""),Bs=new fe("");function Ed(t,o,e){let i=t.get(Bs),n=t.get(ne);return t.get(ve).runOutsideAngular(()=>{if(!n.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(u=>setTimeout(u));let r,a=new Promise(u=>{r=u}),s=n.startViewTransition(()=>(r(),Md(t))),{onViewTransitionCreated:l}=i;return l&&pt(t,()=>l({transition:s,from:o,to:e})),a})}function Md(t){return new Promise(o=>{Ia({read:()=>setTimeout(o)},{injector:t})})}var Od=new fe(""),Rr=(()=>{class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Ye,this.transitionAbortSubject=new Ye,this.configLoader=_(kr),this.environmentInjector=_(wi),this.urlSerializer=_(Zi),this.rootContexts=_(Ji),this.location=_(ki),this.inputBindingEnabled=_(so,{optional:!0})!==null,this.titleStrategy=_($s),this.options=_(en,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=_(Dr),this.createViewTransition=_(Ns,{optional:!0}),this.navigationErrorHandler=_(Od,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>F(void 0),this.rootComponentType=null;let e=n=>this.events.next(new ur(n)),i=n=>this.events.next(new dr(n));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;this.transitions?.next(pe(I(I({},this.transitions.value),e),{id:i}))}setupNavigations(e,i,n){return this.transitions=new Je({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Vi,restoredState:null,currentSnapshot:n.snapshot,targetSnapshot:null,currentRouterState:n,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(vt(r=>r.id!==0),oe(r=>pe(I({},r),{extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),rt(r=>{let a=!1,s=!1;return F(r).pipe(rt(l=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",je.SupersededByNewNavigation),Tt;this.currentTransition=r,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?pe(I({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&f!=="reload"){let b="";return this.events.next(new Rt(l.id,this.urlSerializer.serialize(l.rawUrl),b,Zn.IgnoredSameUrlNavigation)),l.resolve(!1),Tt}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return F(l).pipe(rt(b=>{let C=this.transitions?.getValue();return this.events.next(new Dt(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),C!==this.transitions?.getValue()?Tt:Promise.resolve(b)}),bd(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),Oe(b=>{r.targetSnapshot=b.targetSnapshot,r.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation=pe(I({},this.currentNavigation),{finalUrl:b.urlAfterRedirects});let C=new Yn(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);this.events.next(C)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:b,extractedUrl:C,source:w,restoredState:B,extras:U}=l,de=new Dt(b,this.urlSerializer.serialize(C),w,B);this.events.next(de);let Me=xs(this.rootComponentType).snapshot;return this.currentTransition=r=pe(I({},l),{targetSnapshot:Me,urlAfterRedirects:C,extras:pe(I({},U),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=C,F(r)}else{let b="";return this.events.next(new Rt(l.id,this.urlSerializer.serialize(l.extractedUrl),b,Zn.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Tt}}),Oe(l=>{let u=new ar(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),oe(l=>(this.currentTransition=r=pe(I({},l),{guards:Fu(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),r)),Gu(this.environmentInjector,l=>this.events.next(l)),Oe(l=>{if(r.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw no(this.urlSerializer,l.guardsResult);let u=new sr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),vt(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",je.GuardRejected),!1)),er(l=>{if(l.guards.canActivateChecks.length)return F(l).pipe(Oe(u=>{let f=new lr(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}),rt(u=>{let f=!1;return F(u).pipe(vd(this.paramsInheritanceStrategy,this.environmentInjector),Oe({next:()=>f=!0,complete:()=>{f||this.cancelNavigationTransition(u,"",je.NoDataFromResolver)}}))}),Oe(u=>{let f=new cr(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}))}),er(l=>{let u=f=>{let b=[];f.routeConfig?.loadComponent&&!f.routeConfig._loadedComponent&&b.push(this.configLoader.loadComponent(f.routeConfig).pipe(Oe(C=>{f.component=C}),oe(()=>{})));for(let C of f.children)b.push(...u(C));return b};return Cn(u(l.targetSnapshot.root)).pipe(Oo(null),Zt(1))}),er(()=>this.afterPreactivation()),rt(()=>{let{currentSnapshot:l,targetSnapshot:u}=r,f=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return f?Be(f).pipe(oe(()=>r)):F(r)}),oe(l=>{let u=Ru(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=r=pe(I({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,r}),Oe(()=>{this.events.next(new ji)}),$u(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Zt(1),Oe({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new We(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),ca(this.transitionAbortSubject.pipe(Oe(l=>{throw l}))),Sn(()=>{!a&&!s&&this.cancelNavigationTransition(r,"",je.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),Gt(l=>{if(s=!0,ks(l))this.events.next(new It(r.id,this.urlSerializer.serialize(r.extractedUrl),l.message,l.cancellationCode)),Pu(l)?this.events.next(new li(l.url,l.navigationBehaviorOptions)):r.resolve(!1);else{let u=new Ui(r.id,this.urlSerializer.serialize(r.extractedUrl),l,r.targetSnapshot??void 0);try{let f=pt(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(f instanceof qi){let{message:b,cancellationCode:C}=no(this.urlSerializer,f);this.events.next(new It(r.id,this.urlSerializer.serialize(r.extractedUrl),b,C)),this.events.next(new li(f.redirectTo,f.navigationBehaviorOptions))}else{this.events.next(u);let b=e.errorHandler(l);r.resolve(!!b)}}catch(f){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(f)}}return Tt}))}))}cancelNavigationTransition(e,i,n){let r=new It(e.id,this.urlSerializer.serialize(e.extractedUrl),i,n);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function kd(t){return t!==Vi}var Dd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:()=>_(Rd),providedIn:"root"})}}return t})(),Tr=class{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}},Rd=(()=>{class t extends Tr{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})()}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Vs=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:()=>_(Ld),providedIn:"root"})}}return t})(),Ld=(()=>{class t extends Vs{constructor(){super(...arguments),this.location=_(ki),this.urlSerializer=_(Zi),this.options=_(en,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=_(Dr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ct,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=xs(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&e(i.url,i.state)})}handleRouterEvent(e,i){if(e instanceof Dt)this.stateMemento=this.createStateMemento();else if(e instanceof Rt)this.rawUrlTree=i.initialUrl;else if(e instanceof Yn){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let n=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??n,i)}}else e instanceof ji?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):e instanceof It&&(e.code===je.GuardRejected||e.code===je.NoDataFromResolver)?this.restoreHistory(i):e instanceof Ui?this.restoreHistory(i,!0):e instanceof We&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let n=e instanceof Ct?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(n)||i.extras.replaceUrl){let r=this.browserPageId,a=I(I({},i.extras.state),this.generateNgRouterState(i.id,r));this.location.replaceState(n,"",a)}else{let r=I(I({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(n,"",r)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,r=this.currentPageId-n;r!==0?this.location.historyGo(r):this.currentUrlTree===e.finalUrl&&r===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})()}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ni=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Ni||{});function Hs(t,o){t.events.pipe(vt(e=>e instanceof We||e instanceof It||e instanceof Ui||e instanceof Rt),oe(e=>e instanceof We||e instanceof Rt?Ni.COMPLETE:(e instanceof It?e.code===je.Redirect||e.code===je.SupersededByNewNavigation:!1)?Ni.REDIRECTING:Ni.FAILED),vt(e=>e!==Ni.REDIRECTING),Zt(1)).subscribe(()=>{o()})}function Ad(t){throw t}var Pd={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$d={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},qe=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=_(Rn),this.stateManager=_(Vs),this.options=_(en,{optional:!0})||{},this.pendingTasks=_(fa),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=_(Rr),this.urlSerializer=_(Zi),this.location=_(ki),this.urlHandlingStrategy=_(Dr),this._events=new Ye,this.errorHandler=this.options.errorHandler||Ad,this.navigated=!1,this.routeReuseStrategy=_(Dd),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=_(ro,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!_(so,{optional:!0}),this.eventsSubscription=new Jr,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let n=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(n!==null&&r!==null){if(this.stateManager.handleRouterEvent(i,r),i instanceof It&&i.code!==je.Redirect&&i.code!==je.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof We)this.navigated=!0;else if(i instanceof li){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,n.currentRawUrl),l=I({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kd(n.source)},a);this.scheduleNavigation(s,Vi,null,l,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}Nd(i)&&this._events.next(i)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",i)},0)})}navigateToSyncWithBrowser(e,i,n){let r={replaceUrl:!0},a=n?.navigationId?n:null;if(n){let l=I({},n);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(r.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,i,a,r)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Or),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:n,queryParams:r,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,u=l?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=I(I({},this.currentUrlTree.queryParams),r);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=r||null}f!==null&&(f=this.removeEmptyProps(f));let b;try{let C=n?n.snapshot:this.routerState.snapshot.root;b=Is(C)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return Cs(b,e,f,u??null)}navigateByUrl(e,i={skipLocationChange:!1}){let n=Vt(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,Vi,null,i)}navigate(e,i={skipLocationChange:!1}){return Fd(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,i){let n;if(i===!0?n=I({},Pd):i===!1?n=I({},$d):n=i,Vt(e))return ts(this.currentUrlTree,e,n);let r=this.parseUrl(e);return ts(this.currentUrlTree,r,n)}removeEmptyProps(e){return Object.entries(e).reduce((i,[n,r])=>(r!=null&&(i[n]=r),i),{})}scheduleNavigation(e,i,n,r,a){if(this.disposed)return Promise.resolve(!1);let s,l,u;a?(s=a.resolve,l=a.reject,u=a.promise):u=new Promise((b,C)=>{s=b,l=C});let f=this.pendingTasks.add();return Hs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:s,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(b=>Promise.reject(b))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Fd(t){for(let o=0;o<t.length;o++)if(t[o]==null)throw new he(4008,!1)}function Nd(t){return!(t instanceof ji)&&!(t instanceof li)}var Lt=(()=>{class t{constructor(e,i,n,r,a,s){this.router=e,this.route=i,this.tabIndexAttribute=n,this.renderer=r,this.el=a,this.locationStrategy=s,this.href=null,this.onChanges=new Ye,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1,this.routerLinkInput=null;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=e.events.subscribe(u=>{u instanceof We&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Vt(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,n,r,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(e!==0||i||n||r||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let i=this.href===null?null:va(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(e,i){let n=this.renderer,r=this.el.nativeElement;i!==null?n.setAttribute(r,e,i):n.removeAttribute(r,e)}get urlTree(){return this.routerLinkInput===null?null:Vt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(i){return new(i||t)(G(qe),G(Ht),ha("tabindex"),G(Ft),G(at),G(Oi))}}static{this.\u0275dir=_e({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,n){i&1&&V("click",function(a){return n.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&y("target",n.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",$],skipLocationChange:[2,"skipLocationChange","skipLocationChange",$],replaceUrl:[2,"replaceUrl","replaceUrl",$],routerLink:"routerLink"},standalone:!0,features:[le,Pe]})}}return t})(),co=(()=>{class t{get isActive(){return this._isActive}constructor(e,i,n,r,a){this.router=e,this.element=i,this.renderer=n,this.cdr=r,this.link=a,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new K,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof We&&this.update()})}ngAfterContentInit(){F(this.links.changes,F(null)).pipe(Ii()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Be(e).pipe(Ii()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(n=>!!n)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=Bd(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return n=>{let r=n.urlTree;return r?e.isActive(r,i):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static{this.\u0275fac=function(i){return new(i||t)(G(qe),G(at),G(Ft),G(kt),G(Lt,8))}}static{this.\u0275dir=_e({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,n,r){if(i&1&&z(r,Lt,5),i&2){let a;R(a=L())&&(n.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[Pe]})}}return t})();function Bd(t){return!!t.paths}var ao=class{};var Vd=(()=>{class t{constructor(e,i,n,r,a){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(vt(e=>e instanceof We),Qt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,i){let n=[];for(let r of i){r.providers&&!r._injector&&(r._injector=$o(r.providers,e,`Route: ${r.path}`));let a=r._injector??e,s=r._loadedInjector??a;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&n.push(this.preloadConfig(a,r)),(r.children||r._loadedRoutes)&&n.push(this.processRoutes(s,r.children??r._loadedRoutes))}return Be(n).pipe(Ii())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{let n;i.loadChildren&&i.canLoad===void 0?n=this.loader.loadChildren(e,i):n=F(null);let r=n.pipe(He(a=>a===null?F(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,this.processRoutes(a.injector??e,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(i);return Be([r,a]).pipe(Ii())}else return r})}static{this.\u0275fac=function(i){return new(i||t)(W(qe),W($n),W(wi),W(ao),W(kr))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),zs=new fe(""),Hd=(()=>{class t{constructor(e,i,n,r,a={}){this.urlSerializer=e,this.transitions=i,this.viewportScroller=n,this.zone=r,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Dt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof We?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Rt&&e.code===Zn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Jn&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Jn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static{this.\u0275fac=function(i){Tn()}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function zd(t){return t.routerState.root}function tn(t,o){return{\u0275kind:t,\u0275providers:o}}function Ud(){let t=_(xi);return o=>{let e=t.get(No);if(o!==e.components[0])return;let i=t.get(qe),n=t.get(Us);t.get(Lr)===1&&i.initialNavigation(),t.get(js,null,Do.Optional)?.setUpPreloading(),t.get(zs,null,Do.Optional)?.init(),i.resetRootComponentType(e.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var Us=new fe("",{factory:()=>new Ye}),Lr=new fe("",{providedIn:"root",factory:()=>1});function jd(){return tn(2,[{provide:Lr,useValue:0},{provide:Pn,multi:!0,deps:[xi],useFactory:o=>{let e=o.get(Aa,Promise.resolve());return()=>e.then(()=>new Promise(i=>{let n=o.get(qe),r=o.get(Us);Hs(n,()=>{i(!0)}),o.get(Rr).afterPreactivation=()=>(i(!0),r.closed?F(void 0):r),n.initialNavigation()}))}}])}function Wd(){return tn(3,[{provide:Pn,multi:!0,useFactory:()=>{let o=_(qe);return()=>{o.setUpLocationChangeListener()}}},{provide:Lr,useValue:2}])}var js=new fe("");function qd(t){return tn(0,[{provide:js,useExisting:Vd},{provide:ao,useExisting:t}])}function Kd(){return tn(8,[rs,{provide:so,useExisting:rs}])}function Gd(t){let o=[{provide:Ns,useValue:Ed},{provide:Bs,useValue:I({skipNextTransition:!!t?.skipInitialTransition},t)}];return tn(9,o)}var cs=new fe("ROUTER_FORROOT_GUARD"),Qd=[ki,{provide:Zi,useClass:si},qe,Ji,{provide:Ht,useFactory:zd,deps:[qe]},kr,[]],St=(()=>{class t{constructor(e){}static forRoot(e,i){return{ngModule:t,providers:[Qd,[],{provide:ro,multi:!0,useValue:e},{provide:cs,useFactory:Xd,deps:[[qe,new Ro,new pa]]},{provide:en,useValue:i||{}},i?.useHash?Yd():Jd(),Zd(),i?.preloadingStrategy?qd(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?ep(i):[],i?.bindToComponentInputs?Kd().\u0275providers:[],i?.enableViewTransitions?Gd().\u0275providers:[],tp()]}}static forChild(e){return{ngModule:t,providers:[{provide:ro,multi:!0,useValue:e}]}}static{this.\u0275fac=function(i){return new(i||t)(W(cs,8))}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=j({})}}return t})();function Zd(){return{provide:zs,useFactory:()=>{let t=_(Ba),o=_(ve),e=_(en),i=_(Rr),n=_(Zi);return e.scrollOffset&&t.setOffset(e.scrollOffset),new Hd(n,i,t,o,e)}}}function Yd(){return{provide:Oi,useClass:$a}}function Jd(){return{provide:Oi,useClass:Pa}}function Xd(t){return"guarded"}function ep(t){return[t.initialNavigation==="disabled"?Wd().\u0275providers:[],t.initialNavigation==="enabledBlocking"?jd().\u0275providers:[]]}var us=new fe("");function tp(){return[{provide:us,useFactory:Ud},{provide:Ta,multi:!0,useExisting:us}]}function zt(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function Ut(t,o){if(t&&o){let e=i=>{zt(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function ip(){return window.innerWidth-document.documentElement.offsetWidth}function Ws(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let i of e?.style)if(t.test(i))return{name:i,value:e.style.getPropertyValue(i).trim()}}catch{}return null}function qs(t="p-overflow-hidden"){let o=Ws(/-scrollbar-width$/);o?.name&&document.body.style.setProperty(o.name,ip()+"px"),Ut(document.body,t)}function jt(t,o){if(t&&o){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function Ks(t="p-overflow-hidden"){let o=Ws(/-scrollbar-width$/);o?.name&&document.body.style.removeProperty(o.name),jt(document.body,t)}function Gs(){let t=window,o=document,e=o.documentElement,i=o.getElementsByTagName("body")[0],n=t.innerWidth||e.clientWidth||i.clientWidth,r=t.innerHeight||e.clientHeight||i.clientHeight;return{width:n,height:r}}function Qs(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Zs(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ft(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function di(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Ys(t){let o=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?o=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?o=t.el.nativeElement:o=t.el)),di(o)?o:void 0}function on(t,o){let e=Ys(t);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function uo(t,o={}){if(di(t)){let e=(i,n)=>{var r,a;let s=(r=t?.$attrs)!=null&&r[i]?[(a=t?.$attrs)==null?void 0:a[i]]:[];return[n].flat().reduce((l,u)=>{if(u!=null){let f=typeof u;if(f==="string"||f==="number")l.push(u);else if(f==="object"){let b=Array.isArray(u)?e(i,u):Object.entries(u).map(([C,w])=>i==="style"&&(w||w===0)?`${C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${w}`:w?C:void 0);l=b.length?l.concat(b.filter(C=>!!C)):l}}return l},s)};Object.entries(o).forEach(([i,n])=>{if(n!=null){let r=i.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),n):i==="p-bind"||i==="pBind"?uo(t,n):(n=i==="class"?[...new Set(e("class",n))].join(" ").trim():i==="style"?e("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=n),t.setAttribute(i,n))}})}}function Js(t,o={},...e){if(t){let i=document.createElement(t);return uo(i,o),i.append(...e),i}}function Xs(t,o){if(t){t.style.opacity="0";let e=+new Date,i="0",n=function(){i=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=i,e=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Wt(t,o){return di(t)?Array.from(t.querySelectorAll(o)):[]}function Ne(t,o){return di(t)?t.matches(o)?t:t.querySelector(o):null}function Se(t,o){t&&document.activeElement!==t&&t.focus(o)}function el(t,o){if(di(t)){let e=t.getAttribute(o);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function tl(t,o=""){let e=Wt(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),i=[];for(let n of e)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&i.push(n);return i}function il(t,o){let e=tl(t,o);return e.length>0?e[0]:null}function Ar(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function nl(t,o){let e=tl(t,o);return e.length>0?e[e.length-1]:null}function ol(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function gt(t,o){if(t){let e=t.offsetHeight;if(o){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function Pr(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function rn(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function rl(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function al(t,o){let e=Ys(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function po(t,o="",e){di(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function sl(){let t=new Map;return{on(o,e){let i=t.get(o);return i?i.push(e):i=[e],t.set(o,i),this},off(o,e){let i=t.get(o);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(o,e){let i=t.get(o);i&&i.slice().map(n=>{n(e)})},clear(){t.clear()}}}function ge(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function np(t){return!!(t&&t.constructor&&t.call&&t.apply)}function A(t){return!ge(t)}function pi(t,o){let e=-1;if(A(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function wt(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function Te(t,...o){return np(t)?t(...o):t}function Pt(t,o=!0){return typeof t=="string"&&(o||t!=="")}function ll(t){return Pt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function mo(t,o="",e={}){let i=ll(o).split("."),n=i.shift();return n?wt(t)?mo(Te(t[Object.keys(t).find(r=>ll(r)===n)||""],e),i.join("."),e):void 0:Te(t,e)}function ho(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function cl(t){return A(t)&&!isNaN(t)}function fo(t=""){return A(t)&&t.length===1&&!!t.match(/\S| /)}function Ke(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function qt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function go(t){return Pt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,e)=>e===0?o:"-"+o.toLowerCase()).toLowerCase():t}function $r(t){return Pt(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}var bo={};function be(t="pui_id_"){return bo.hasOwnProperty(t)||(bo[t]=0),bo[t]++,`${t}${bo[t]}`}function op(){let t=[],o=(a,s,l=999)=>{let u=n(a,s,l),f=u.value+(u.key===a?0:l)+1;return t.push({key:a,value:f}),f},e=a=>{t=t.filter(s=>s.value!==a)},i=(a,s)=>n(a,s).value,n=(a,s,l=0)=>[...t].reverse().find(u=>s?!0:u.key===a)||{key:a,value:l},r=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:r,set:(a,s,l)=>{s&&(s.style.zIndex=String(o(a,!0,l)))},clear:a=>{a&&(e(r(a)),a.style.zIndex="")},getCurrent:a=>i(a,!0)}}var vb=op();var Ee=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ul=["*"],dl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-header"]],ngContentSelectors:ul,decls:1,vars:0,template:function(i,n){i&1&&(Fe(),ke(0))},encapsulation:2})}return t})(),pl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-footer"]],ngContentSelectors:ul,decls:1,vars:0,template:function(i,n){i&1&&(Fe(),ke(0))},encapsulation:2})}return t})(),ml=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(G(En))};static \u0275dir=_e({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),X=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ue]})}return t})();var rp=Object.defineProperty,ap=Object.defineProperties,sp=Object.getOwnPropertyDescriptors,vo=Object.getOwnPropertySymbols,gl=Object.prototype.hasOwnProperty,bl=Object.prototype.propertyIsEnumerable,hl=(t,o,e)=>o in t?rp(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,dt=(t,o)=>{for(var e in o||(o={}))gl.call(o,e)&&hl(t,e,o[e]);if(vo)for(var e of vo(o))bl.call(o,e)&&hl(t,e,o[e]);return t},Fr=(t,o)=>ap(t,sp(o)),xt=(t,o)=>{var e={};for(var i in t)gl.call(t,i)&&o.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&vo)for(var i of vo(t))o.indexOf(i)<0&&bl.call(t,i)&&(e[i]=t[i]);return e};var lp=sl(),nt=lp;function fl(t,o){ho(t)?t.push(...o||[]):wt(t)&&Object.assign(t,o)}function cp(t){return wt(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function up(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Nr(t="",o=""){return up(`${Pt(t,!1)&&Pt(o,!1)?`${t}-`:t}${o}`)}function vl(t="",o=""){return`--${Nr(t,o)}`}function dp(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function yl(t,o="",e="",i=[],n){if(Pt(t)){let r=/{([^}]*)}/g,a=t.trim();if(dp(a))return;if(Ke(a,r)){let s=a.replaceAll(r,f=>{let C=f.replace(/{|}/g,"").split(".").filter(w=>!i.some(B=>Ke(w,B)));return`var(${vl(e,go(C.join("-")))}${A(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return Ke(s.replace(u,"0"),l)?`calc(${s})`:s}return a}else if(cl(t))return t}function pp(t,o,e){Pt(o,!1)&&t.push(`${o}:${e};`)}function mi(t,o){return t?`${t}{${o}}`:""}var hi=(...t)=>mp(se.getTheme(),...t),mp=(t={},o,e,i)=>{if(o){let{variable:n,options:r}=se.defaults||{},{prefix:a,transform:s}=t?.options||r||{},u=Ke(o,/{([^}]*)}/g)?o:`{${o}}`;return i==="value"||ge(i)&&s==="strict"?se.getTokenValue(o):yl(u,void 0,a,[n.excludedKeyRegex],e)}return""};function hp(t,o={}){let e=se.defaults.variable,{prefix:i=e.prefix,selector:n=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,a=(u,f="")=>Object.entries(u).reduce((b,[C,w])=>{let B=Ke(C,r)?Nr(f):Nr(f,go(C)),U=cp(w);if(wt(U)){let{variables:de,tokens:Me}=a(U,B);fl(b.tokens,Me),fl(b.variables,de)}else b.tokens.push((i?B.replace(`${i}-`,""):B).replaceAll("-",".")),pp(b.variables,vl(B),yl(U,B,i,[r]));return b},{variables:[],tokens:[]}),{variables:s,tokens:l}=a(t,i);return{value:s,tokens:l,declarations:s.join(""),css:mi(n,s.join(""))}}var ut={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=o.map(n=>n.resolve(e)).find(n=>n.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,o){return hp(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:i,defaults:n}){var r,a,s,l,u,f,b;let{preset:C,options:w}=o,B,U,de,Me,Ae,Ze,ot;if(A(C)&&w.transform!=="strict"){let{primitive:sn,semantic:ln,extend:cn}=C,bi=ln||{},{colorScheme:un}=bi,dn=xt(bi,["colorScheme"]),pn=cn||{},{colorScheme:mn}=pn,vi=xt(pn,["colorScheme"]),yi=un||{},{dark:hn}=yi,fn=xt(yi,["dark"]),gn=mn||{},{dark:bn}=gn,vn=xt(gn,["dark"]),yn=A(sn)?this._toVariables({primitive:sn},w):{},_n=A(dn)?this._toVariables({semantic:dn},w):{},In=A(fn)?this._toVariables({light:fn},w):{},Gr=A(hn)?this._toVariables({dark:hn},w):{},Qr=A(vi)?this._toVariables({semantic:vi},w):{},Zr=A(vn)?this._toVariables({light:vn},w):{},Yr=A(bn)?this._toVariables({dark:bn},w):{},[bc,vc]=[(r=yn.declarations)!=null?r:"",yn.tokens],[yc,_c]=[(a=_n.declarations)!=null?a:"",_n.tokens||[]],[Ic,Cc]=[(s=In.declarations)!=null?s:"",In.tokens||[]],[Sc,wc]=[(l=Gr.declarations)!=null?l:"",Gr.tokens||[]],[xc,Tc]=[(u=Qr.declarations)!=null?u:"",Qr.tokens||[]],[Ec,Mc]=[(f=Zr.declarations)!=null?f:"",Zr.tokens||[]],[Oc,kc]=[(b=Yr.declarations)!=null?b:"",Yr.tokens||[]];B=this.transformCSS(t,bc,"light","variable",w,i,n),U=vc;let Dc=this.transformCSS(t,`${yc}${Ic}`,"light","variable",w,i,n),Rc=this.transformCSS(t,`${Sc}`,"dark","variable",w,i,n);de=`${Dc}${Rc}`,Me=[...new Set([..._c,...Cc,...wc])];let Lc=this.transformCSS(t,`${xc}${Ec}color-scheme:light`,"light","variable",w,i,n),Ac=this.transformCSS(t,`${Oc}color-scheme:dark`,"dark","variable",w,i,n);Ae=`${Lc}${Ac}`,Ze=[...new Set([...Tc,...Mc,...kc])],ot=Te(C.css,{dt:hi})}return{primitive:{css:B,tokens:U},semantic:{css:de,tokens:Me},global:{css:Ae,tokens:Ze},style:ot}},getPreset({name:t="",preset:o={},options:e,params:i,set:n,defaults:r,selector:a}){var s,l,u;let f,b,C;if(A(o)&&e.transform!=="strict"){let w=t.replace("-directive",""),B=o,{colorScheme:U,extend:de,css:Me}=B,Ae=xt(B,["colorScheme","extend","css"]),Ze=de||{},{colorScheme:ot}=Ze,sn=xt(Ze,["colorScheme"]),ln=U||{},{dark:cn}=ln,bi=xt(ln,["dark"]),un=ot||{},{dark:dn}=un,pn=xt(un,["dark"]),mn=A(Ae)?this._toVariables({[w]:dt(dt({},Ae),sn)},e):{},vi=A(bi)?this._toVariables({[w]:dt(dt({},bi),pn)},e):{},yi=A(cn)?this._toVariables({[w]:dt(dt({},cn),dn)},e):{},[hn,fn]=[(s=mn.declarations)!=null?s:"",mn.tokens||[]],[gn,bn]=[(l=vi.declarations)!=null?l:"",vi.tokens||[]],[vn,yn]=[(u=yi.declarations)!=null?u:"",yi.tokens||[]],_n=this.transformCSS(w,`${hn}${gn}`,"light","variable",e,n,r,a),In=this.transformCSS(w,vn,"dark","variable",e,n,r,a);f=`${_n}${In}`,b=[...new Set([...fn,...bn,...yn])],C=Te(Me,{dt:hi})}return{css:f,tokens:b,style:C}},getPresetC({name:t="",theme:o={},params:e,set:i,defaults:n}){var r;let{preset:a,options:s}=o,l=(r=a?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:s,params:e,set:i,defaults:n})},getPresetD({name:t="",theme:o={},params:e,set:i,defaults:n}){var r;let a=t.replace("-directive",""),{preset:s,options:l}=o,u=(r=s?.directives)==null?void 0:r[a];return this.getPreset({name:a,preset:u,options:l,params:e,set:i,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,i){let{cssLayer:n}=o;return n?`@layer ${Te(n.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:i={},set:n,defaults:r}){let a=this.getCommon({name:t,theme:o,params:e,set:n,defaults:r}),s=Object.entries(i).reduce((l,[u,f])=>l.push(`${u}="${f}"`)&&l,[]).join(" ");return Object.entries(a||{}).reduce((l,[u,f])=>{if(f?.css){let b=qt(f?.css),C=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${C}" ${s}>${b}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:i={},set:n,defaults:r}){var a;let s={name:t,theme:o,params:e,set:n,defaults:r},l=(a=t.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,u=Object.entries(i).reduce((f,[b,C])=>f.push(`${b}="${C}"`)&&f,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${qt(l)}</style>`:""},createTokens(t={},o,e="",i="",n={}){return Object.entries(t).forEach(([r,a])=>{let s=Ke(r,o.variable.excludedKeyRegex)?e:e?`${e}.${$r(r)}`:$r(r),l=i?`${i}.${r}`:r;wt(a)?this.createTokens(a,o,s,l,n):(n[s]||(n[s]={paths:[],computed(u,f={}){var b,C;return this.paths.length===1?(b=this.paths[0])==null?void 0:b.computed(this.paths[0].scheme,f.binding):u&&u!=="none"?(C=this.paths.find(w=>w.scheme===u))==null?void 0:C.computed(u,f.binding):this.paths.map(w=>w.computed(w.scheme,f[w.scheme]))}}),n[s].paths.push({path:l,value:a,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,f={}){let b=/{([^}]*)}/g,C=a;if(f.name=this.path,f.binding||(f.binding={}),Ke(a,b)){let B=a.trim().replaceAll(b,Me=>{var Ae;let Ze=Me.replace(/{|}/g,""),ot=(Ae=n[Ze])==null?void 0:Ae.computed(u,f);return ho(ot)&&ot.length===2?`light-dark(${ot[0].value},${ot[1].value})`:ot?.value}),U=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,de=/var\([^)]+\)/g;C=Ke(B.replace(de,"0"),U)?`calc(${B})`:B}return ge(f.binding)&&delete f.binding,{colorScheme:u,path:this.path,paths:f,value:C.includes("undefined")?void 0:C}}}))}),n},getTokenValue(t,o,e){var i;let r=(l=>l.split(".").filter(f=>!Ke(f.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),a=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(i=t[r])==null?void 0:i.computed(a)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},u)=>{let f=u,{colorScheme:b}=f,C=xt(f,["colorScheme"]);return l[b]=C,l},void 0)},getSelectorRule(t,o,e,i){return e==="class"||e==="attr"?mi(A(o)?`${t}${o},${t} ${o}`:t,i):mi(t,A(o)?mi(o,i):i)},transformCSS(t,o,e,i,n={},r,a,s){if(A(o)){let{cssLayer:l}=n;if(i!=="style"){let u=this.getColorSchemeOption(n,a);o=e==="dark"?u.reduce((f,{type:b,selector:C})=>(A(C)&&(f+=C.includes("[CSS]")?C.replace("[CSS]",o):this.getSelectorRule(C,s,b,o)),f),""):mi(s??":root",o)}if(l){let u={name:"primeui",order:"primeui"};wt(l)&&(u.name=Te(l.name,{name:t,type:i})),A(u.name)&&(o=mi(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},se={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=Fr(dt({},o),{options:dt(dt({},this.defaults.options),o.options)}),this._tokens=ut.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),nt.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Fr(dt({},this.theme),{preset:t}),this._tokens=ut.createTokens(t,this.defaults),this.clearLoadedStyleNames(),nt.emit("preset:change",t),nt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Fr(dt({},this.theme),{options:t}),this.clearLoadedStyleNames(),nt.emit("options:change",t),nt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ut.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return ut.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ut.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ut.getPresetD(e)},getCustomPreset(t="",o,e,i){let n={name:t,preset:o,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ut.getPreset(n)},getLayerOrderCSS(t=""){return ut.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",i){return ut.transformCSS(t,o,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return ut.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return ut.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),nt.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&nt.emit("theme:load"))}};var fp=0,_l=(()=>{class t{document=_(ne);use(e,i={}){let n=!1,r=e,a=null,{immediate:s=!0,manual:l=!1,name:u=`style_${++fp}`,id:f=void 0,media:b=void 0,nonce:C=void 0,first:w=!1,props:B={}}=i;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||this.document.getElementById(f)||this.document.createElement("style"),!a.isConnected){r=e,uo(a,{type:"text/css",media:b,nonce:C});let U=this.document.head;w&&U.firstChild?U.insertBefore(a,U.firstChild):U.appendChild(a),po(a,"data-primeng-style-id",u)}return a.textContent!==r&&(a.textContent=r),{id:f,name:u,el:a,css:r}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},gp=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,bp=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ee=(()=>{class t{name="base";useStyle=_(_l);theme=gp;css=bp;classes={};inlineStyles={};load=(e,i={},n=r=>r)=>{let r=n(Te(e,{dt:hi}));return r?this.useStyle.use(qt(r),I({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(n="")=>se.transformCSS(e.name||this.name,`${n}${i}`));getCommonTheme=e=>se.getCommon(this.name,e);getComponentTheme=e=>se.getComponent(this.name,e);getDirectiveTheme=e=>se.getDirective(this.name,e);getPresetTheme=(e,i,n)=>se.getCustomPreset(this.name,e,i,n);getLayerOrderThemeCSS=()=>se.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let n=Te(this.css,{dt:hi}),r=qt(`${n}${e}`),a=Object.entries(i).reduce((s,[l,u])=>s.push(`${l}="${u}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>se.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let n=[se.getStyleSheet(this.name,e,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,a=Te(this.theme,{dt:hi}),s=qt(se.transformCSS(r,a)),l=Object.entries(i).reduce((u,[f,b])=>u.push(`${f}="${b}"`)&&u,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${s}</style>`)}return n.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vp=(()=>{class t{theme=ze(void 0);isThemeChanged=!1;document=_(ne);baseStyle=_(ee);constructor(){_t(()=>{nt.on("theme:change",e=>{ka(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),_t(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){se.clearLoadedStyleNames(),nt.clear()}onThemeChange(e){se.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!se.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:r}=this.baseStyle.getCommonTheme?.()||{},a={nonce:void 0};this.baseStyle.load(e?.css,I({name:"primitive-variables"},a)),this.baseStyle.load(i?.css,I({name:"semantic-variables"},a)),this.baseStyle.load(n?.css,I({name:"global-variables"},a)),this.baseStyle.loadTheme(I({name:"global-style"},a),r),se.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i}=e||{};i&&this.theme.set(i)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Il=(()=>{class t extends vp{ripple=ze(!1);platformId=_($e);inputStyle=ze("outlined");inputVariant=ze("outlined");overlayOptions={};csp=ze({nonce:void 0});filterMatchModeOptions={text:[Ee.STARTS_WITH,Ee.CONTAINS,Ee.NOT_CONTAINS,Ee.ENDS_WITH,Ee.EQUALS,Ee.NOT_EQUALS],numeric:[Ee.EQUALS,Ee.NOT_EQUALS,Ee.LESS_THAN,Ee.LESS_THAN_OR_EQUAL_TO,Ee.GREATER_THAN,Ee.GREATER_THAN_OR_EQUAL_TO],date:[Ee.DATE_IS,Ee.DATE_IS_NOT,Ee.DATE_BEFORE,Ee.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ye;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=I(I({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:n,inputStyle:r,theme:a,overlayOptions:s,translation:l}=e||{};i&&this.csp.set(i),n&&this.ripple.set(n),r&&this.inputStyle.set(r),s&&(this.overlayOptions=s),l&&this.setTranslation(l),a&&this.setThemeConfig({theme:a})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),u1=new fe("PRIME_NG_CONFIG");var Cl=(()=>{class t extends ee{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),te=(()=>{class t{document=_(ne);platformId=_($e);el=_(at);injector=_(xi);cd=_(kt);renderer=_(Ft);config=_(Il);baseComponentStyle=_(Cl);baseStyle=_(ee);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=be("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",n={}){return mo(e,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}templates;ngAfterContentInit(){this.templates?.forEach(e=>{let i=e.getType(),n=`${i}Template`;this.hasOwnProperty(n)&&(this[n]=e.template),this.hasOwnProperty(`_${n}`)&&(this[`_${n}`]=e.template),this[i]=e.template})}ngOnChanges(e){if(this.document&&!Di(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{fi.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),fi.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!fi.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),fi.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!se.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,I({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,I({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,I({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(I({name:"global-style"},this.styleOptions),r),se.setLoadedStyleName("common")}if(!se.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,I({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(I({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),se.setLoadedStyleName(this.componentStyle?.name)}if(!se.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,I({name:"layer-order",first:!0},this.styleOptions)),se.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,I({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){fi.clearLoadedStyleNames(),nt.on("theme:change",e)}cx(e,i){let n=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:I({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=_e({type:t,contentQueries:function(i,n,r){if(i&1&&z(r,ml,4),i&2){let a;R(a=L())&&(n.templates=a)}},inputs:{dt:"dt"},standalone:!0,features:[ce([Cl,ee]),Pe]})}return t})();var Sl=(()=>{class t extends te{pFocusTrapDisabled=!1;platformId=_($e);document=_(ne);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),me(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&me(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",i=n=>Js("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,r=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?il(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Se(r)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,r=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?nl(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Se(r)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275dir=_e({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",$]},standalone:!0,features:[le,M,Pe]})}return t})();var yp=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,_p=(()=>{class t extends ee{name="baseicon";inlineStyles=yp;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ip=["*"],ie=(()=>{class t extends te{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ge(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",$],styleClass:"styleClass"},standalone:!0,features:[ce([_p]),le,M,P],ngContentSelectors:Ip,decls:1,vars:0,template:function(i,n){i&1&&(Fe(),ke(0))},encapsulation:2,changeDetection:0})}return t})();var yo=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["AngleDownIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var _o=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["AngleRightIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Io=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["BarsIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var wl=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronDownIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var xl=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronLeftIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Tl=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronRightIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var El=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronUpIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Ml=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["EyeIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Ol=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["RefreshIcon"]],standalone:!0,features:[M,P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(J(),p(0,"svg",0)(1,"g"),g(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),g(5,"rect",3),m()()()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),d(),y("clip-path",n.pathId),d(3),c("id",n.pathId))},encapsulation:2})}return t})();var kl=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SearchMinusIcon"]],standalone:!0,features:[M,P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(J(),p(0,"svg",0)(1,"g"),g(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),g(5,"rect",3),m()()()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),d(),y("clip-path",n.pathId),d(3),c("id",n.pathId))},encapsulation:2})}return t})();var Dl=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SearchPlusIcon"]],standalone:!0,features:[M,P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(J(),p(0,"svg",0)(1,"g"),g(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),g(5,"rect",3),m()()()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),d(),y("clip-path",n.pathId),d(3),c("id",n.pathId))},encapsulation:2})}return t})();var Rl=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[M,P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(J(),p(0,"svg",0)(1,"g"),g(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),g(5,"rect",3),m()()()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),d(),y("clip-path",n.pathId),d(3),c("id",n.pathId))},encapsulation:2})}return t})();var Ll=(()=>{class t extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[M,P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(J(),p(0,"svg",0),g(1,"path",1),m()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Al=(()=>{class t extends ie{pathId;ngOnInit(){this.pathId="url(#"+be()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["UndoIcon"]],standalone:!0,features:[M,P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(J(),p(0,"svg",0)(1,"g"),g(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),g(5,"rect",3),m()()()),i&2&&(D(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),d(),y("clip-path",n.pathId),d(3),c("id",n.pathId))},encapsulation:2})}return t})();function Cp(){let t=[],o=(r,a)=>{let s=t.length>0?t[t.length-1]:{key:r,value:a},l=s.value+(s.key===r?0:a)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(a=>a.value!==r)},i=()=>t.length>0?t[t.length-1].value:0,n=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:n,set:(r,a,s)=>{a&&(a.style.zIndex=String(o(r,s)))},clear:r=>{r&&(e(n(r)),r.style.zIndex="")},getCurrent:()=>i()}}var Qe=Cp();var Sp=({dt:t})=>`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${t("image.preview.mask.color")};
    transition: background ${t("image.transition.duration")};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${t("image.preview.mask.background")};
}

.p-image-preview-icon {
    font-size: ${t("image.preview.icon.size")};
    width: ${t("image.preview.icon.size")};
    height: ${t("image.preview.icon.size")};
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: ${t("image.toolbar.position.top")};
    inset-inline-end: ${t("image.toolbar.position.right")};
    inset-inline-start: ${t("image.toolbar.position.left")};
    inset-block-end: ${t("image.toolbar.position.bottom")};
    display: flex;
    z-index: 1;
    padding: ${t("image.toolbar.padding")};
    background: ${t("image.toolbar.background")};
    backdrop-filter: blur(${t("image.toolbar.blur")});
    border-color: ${t("image.toolbar.border.color")};
    border-style: solid;
    border-width: ${t("image.toolbar.border.width")};
    border-radius: ${t("image.toolbar.border.radius")};
    gap: ${t("image.toolbar.gap")};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${t("image.action.color")};
    background: transparent;
    width: ${t("image.action.size")};
    height: ${t("image.action.size")};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${t("image.action.border.radius")};
    outline-color: transparent;
    transition: background ${t("image.transition.duration")}, color ${t("image.transition.duration")}, outline-color ${t("image.transition.duration")}, box-shadow ${t("image.transition.duration")};
}

.p-image-action:hover {
    color: ${t("image.action.hover.color")};
    background: ${t("image.action.hover.background")};
}

.p-image-action:focus-visible {
    box-shadow: ${t("toolbar.action.focus.ring.shadow")};
    outline: ${t("toolbar.action.focus.ring.width")} ${t("toolbar.action.focus.ring.style")} ${t("toolbar.action.focus.ring.color")};
    outline-offset: ${t("toolbar.action.focus.ring.offset")};
}

.p-image-action .p-icon {
    font-size: ${t("image.action.icon.size")};
    width: ${t("image.action.icon.size")};
    height: ${t("image.action.icon.size")};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`,wp={root:({props:t})=>["p-image p-component",{"p-image-preview":t.preview}],previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:({instance:t})=>["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}],zoomInButton:({instance:t})=>["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}],closeButton:"p-image-action p-image-close-button",original:"p-image-original"},Pl=(()=>{class t extends ee{name="image";theme=Sp;classes=wp;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var xp=["indicator"],Tp=["rotaterighticon"],Ep=["rotatelefticon"],Mp=["zoomouticon"],Op=["zoominicon"],kp=["closeicon"],Dp=["preview"],Rp=["image"],Lp=["mask"],Ap=["previewButton"],Pp=["closeButton"],$p=t=>({errorCallback:t}),Fp=(t,o)=>({height:t,width:o}),Np=t=>({"p-image-action p-image-zoom-out-button":!0,"p-disabled":t}),Bp=t=>({"p-image-action p-image-zoom-in-button":!0,"p-disabled":t}),Vp=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Hp=t=>({value:"visible",params:t}),zp=(t,o)=>({class:"p-image-original",style:t,previewCallback:o});function Up(t,o){if(t&1){let e=re();Z(0),p(1,"img",9),V("error",function(n){O(e);let r=h();return k(r.imageError(n))}),m(),Y()}if(t&2){let e=h();d(),D(e.imageClass),c("ngStyle",e.imageStyle),y("src",e.src,st)("srcset",e.srcSet)("sizes",e.sizes)("alt",e.alt)("width",e.width)("height",e.height)("loading",e.loading)}}function jp(t,o){t&1&&Ie(0)}function Wp(t,o){t&1&&Ie(0)}function qp(t,o){if(t&1&&(Z(0),v(1,Wp,1,0,"ng-container",12),Y()),t&2){let e=h(2);d(),c("ngTemplateOutlet",e.indicatorTemplate)}}function Kp(t,o){t&1&&g(0,"EyeIcon",13),t&2&&c("styleClass","p-image-preview-icon")}function Gp(t,o){if(t&1){let e=re();p(0,"button",10,0),V("click",function(){O(e);let n=h();return k(n.onImageClick())}),v(2,qp,2,1,"ng-container",11)(3,Kp,1,1,"ng-template",null,1,Re),m()}if(t&2){let e=Xe(4),i=h();c("ngStyle",tt(4,Fp,i.height+"px",i.width+"px")),y("aria-label",i.zoomImageAriaLabel),d(2),c("ngIf",i.indicatorTemplate)("ngIfElse",e)}}function Qp(t,o){t&1&&g(0,"RefreshIcon")}function Zp(t,o){}function Yp(t,o){t&1&&v(0,Zp,0,0,"ng-template")}function Jp(t,o){t&1&&g(0,"UndoIcon")}function Xp(t,o){}function em(t,o){t&1&&v(0,Xp,0,0,"ng-template")}function tm(t,o){t&1&&g(0,"SearchMinusIcon")}function im(t,o){}function nm(t,o){t&1&&v(0,im,0,0,"ng-template")}function om(t,o){t&1&&g(0,"SearchPlusIcon")}function rm(t,o){}function am(t,o){t&1&&v(0,rm,0,0,"ng-template")}function sm(t,o){t&1&&g(0,"TimesIcon")}function lm(t,o){}function cm(t,o){t&1&&v(0,lm,0,0,"ng-template")}function um(t,o){if(t&1){let e=re();Z(0),p(1,"img",20),V("click",function(){O(e);let n=h(3);return k(n.onPreviewImageClick())}),m(),Y()}if(t&2){let e=h(3);d(),c("ngStyle",e.imagePreviewStyle()),y("src",e.previewImageSrc?e.previewImageSrc:e.src,st)("srcset",e.previewImageSrcSet)("sizes",e.previewImageSizes)}}function dm(t,o){t&1&&Ie(0)}function pm(t,o){if(t&1){let e=re();p(0,"div"),V("@animation.start",function(n){O(e);let r=h(2);return k(r.onAnimationStart(n))})("@animation.done",function(n){O(e);let r=h(2);return k(r.onAnimationEnd(n))}),v(1,um,2,4,"ng-container",5)(2,dm,1,0,"ng-container",6),m()}if(t&2){let e=h(2);c("@animation",ae(7,Hp,tt(4,Vp,e.showTransitionOptions,e.hideTransitionOptions))),d(),c("ngIf",!e.previewTemplate),d(),c("ngTemplateOutlet",e.previewTemplate)("ngTemplateOutletContext",tt(9,zp,e.imagePreviewStyle(),e.onPreviewImageClick.bind(e)))}}function mm(t,o){if(t&1){let e=re();p(0,"div",14,2),V("click",function(){O(e);let n=h();return k(n.onMaskClick())})("keydown",function(n){O(e);let r=h();return k(r.onMaskKeydown(n))}),p(2,"div",15),V("click",function(n){O(e);let r=h();return k(r.handleToolbarClick(n))}),p(3,"button",16),V("click",function(){O(e);let n=h();return k(n.rotateRight())}),v(4,Qp,1,0,"RefreshIcon",5)(5,Yp,1,0,null,12),m(),p(6,"button",17),V("click",function(){O(e);let n=h();return k(n.rotateLeft())}),v(7,Jp,1,0,"UndoIcon",5)(8,em,1,0,null,12),m(),p(9,"button",18),V("click",function(){O(e);let n=h();return k(n.zoomOut())}),v(10,tm,1,0,"SearchMinusIcon",5)(11,nm,1,0,null,12),m(),p(12,"button",18),V("click",function(){O(e);let n=h();return k(n.zoomIn())}),v(13,om,1,0,"SearchPlusIcon",5)(14,am,1,0,null,12),m(),p(15,"button",19,3),V("click",function(){O(e);let n=h();return k(n.closePreview())}),v(17,sm,1,0,"TimesIcon",5)(18,cm,1,0,null,12),m()(),v(19,pm,3,12,"div",5),m()}if(t&2){let e=h();y("aria-modal",e.maskVisible),d(3),y("aria-label",e.rightAriaLabel()),d(),c("ngIf",!e.rotaterighticon),d(),c("ngTemplateOutlet",e.rotaterighticon),d(),y("aria-label",e.leftAriaLabel()),d(),c("ngIf",!e.rotatelefticon),d(),c("ngTemplateOutlet",e.rotatelefticon),d(),c("ngClass",ae(21,Np,e.isZoomOutDisabled))("disabled",e.isZoomOutDisabled),y("aria-label",e.zoomOutAriaLabel()),d(),c("ngIf",!e.zoomouticon),d(),c("ngTemplateOutlet",e.zoomouticon),d(),c("ngClass",ae(23,Bp,e.isZoomOutDisabled))("disabled",e.isZoomInDisabled),y("aria-label",e.zoomInAriaLabel()),d(),c("ngIf",!e.zoominicon),d(),c("ngTemplateOutlet",e.zoominicon),d(),y("aria-label",e.closeAriaLabel()),d(2),c("ngIf",!e.closeicon),d(),c("ngTemplateOutlet",e.closeicon),d(),c("ngIf",e.previewVisible)}}var an=(()=>{class t extends te{imageClass;imageStyle;styleClass;style;src;srcSet;sizes;previewImageSrc;previewImageSrcSet;previewImageSizes;alt;width;height;loading;appendTo;preview=!1;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";onShow=new K;onHide=new K;onImageError=new K;mask;previewButton;closeButton;indicatorTemplate;rotaterighticon;rotatelefticon;zoomouticon;zoominicon;closeicon;previewTemplate;imageTemplate;maskVisible=!1;previewVisible=!1;rotate=0;scale=1;previewClick=!1;container;wrapper;_componentStyle=_(Pl);get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}zoomSettings={default:1,step:.1,max:1.5,min:.5};constructor(){super()}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0,qs())}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onMaskKeydown(e){switch(e.code){case"Escape":this.onMaskClick(),setTimeout(()=>{Se(this.previewButton.nativeElement)},25),e.preventDefault();break;default:break}}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),setTimeout(()=>{Se(this.closeButton.nativeElement)},25);break;case"void":Ut(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":Qe.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({});break}}moveOnTop(){Qe.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.document.body.appendChild(this.wrapper):on(this.appendTo,this.wrapper))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}get zoomImageAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomImage:void 0}containerClass(){return{"p-image p-component":!0,"p-image-preview":this.preview}}handleToolbarClick(e){e.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default,Ks()}imageError(e){this.onImageError.emit(e)}rightAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateRight:void 0}leftAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateLeft:void 0}zoomInAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomIn:void 0}zoomOutAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomOut:void 0}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onKeydownHandler(e){this.previewVisible&&this.closePreview()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-image"]],contentQueries:function(i,n,r){if(i&1&&(z(r,xp,5),z(r,Tp,5),z(r,Ep,5),z(r,Mp,5),z(r,Op,5),z(r,kp,5),z(r,Dp,5),z(r,Rp,5)),i&2){let a;R(a=L())&&(n.indicatorTemplate=a.first),R(a=L())&&(n.rotaterighticon=a.first),R(a=L())&&(n.rotatelefticon=a.first),R(a=L())&&(n.zoomouticon=a.first),R(a=L())&&(n.zoominicon=a.first),R(a=L())&&(n.closeicon=a.first),R(a=L())&&(n.previewTemplate=a.first),R(a=L())&&(n.imageTemplate=a.first)}},viewQuery:function(i,n){if(i&1&&(De(Lp,5),De(Ap,5),De(Pp,5)),i&2){let r;R(r=L())&&(n.mask=r.first),R(r=L())&&(n.previewButton=r.first),R(r=L())&&(n.closeButton=r.first)}},hostBindings:function(i,n){i&1&&V("keydown.escape",function(a){return n.onKeydownHandler(a)},!1,xn)},inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",srcSet:"srcSet",sizes:"sizes",previewImageSrc:"previewImageSrc",previewImageSrcSet:"previewImageSrcSet",previewImageSizes:"previewImageSizes",alt:"alt",width:"width",height:"height",loading:"loading",appendTo:"appendTo",preview:[2,"preview","preview",$],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},standalone:!0,features:[ce([Pl]),le,M,P],decls:5,vars:11,consts:[["previewButton",""],["defaultTemplate",""],["mask",""],["closeButton",""],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-image-preview-mask",3,"ngStyle","click",4,"ngIf"],["class","p-image-mask p-overlay-mask p-overlay-mask-enter","role","dialog","pFocusTrap","",3,"click","keydown",4,"ngIf"],[3,"error","ngStyle"],["type","button",1,"p-image-preview-mask",3,"click","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"styleClass"],["role","dialog","pFocusTrap","",1,"p-image-mask","p-overlay-mask","p-overlay-mask-enter",3,"click","keydown"],[1,"p-image-toolbar",3,"click"],["type","button",1,"p-image-action","p-image-rotate-right-button",3,"click"],["type","button",1,"p-image-action","p-image-rotate-left-button",3,"click"],["type","button",3,"click","ngClass","disabled"],["type","button",1,"p-image-action","p-image-close-button",3,"click"],[1,"p-image-original",3,"click","ngStyle"]],template:function(i,n){i&1&&(p(0,"span",4),v(1,Up,2,10,"ng-container",5)(2,jp,1,0,"ng-container",6)(3,Gp,5,7,"button",7)(4,mm,20,25,"div",8),m()),i&2&&(D(n.styleClass),c("ngClass",n.containerClass())("ngStyle",n.style),d(),c("ngIf",!n.imageTemplate),d(),c("ngTemplateOutlet",n.imageTemplate)("ngTemplateOutletContext",ae(9,$p,n.imageError.bind(n))),d(),c("ngIf",n.preview),d(),c("ngIf",n.maskVisible))},dependencies:[ue,we,ye,Ve,Le,Ol,Ml,Al,kl,Dl,Ll,Sl,X],encapsulation:2,data:{animation:[Ha("animation",[zo("void => visible",[Ho({transform:"scale(0.7)",opacity:0}),Vo("{{showTransitionParams}}")]),zo("visible => void",[Vo("{{hideTransitionParams}}",Ho({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),$l=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[an,X,X]})}return t})();function fm(t,o){t&1&&(p(0,"header",19)(1,"div",2)(2,"div",3)(3,"div",20)(4,"div",21)(5,"h1"),S(6,"About Us"),m()()()()()())}var Co=(()=>{class t{constructor(){this.showHeader=!0}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-about"]],inputs:{showHeader:"showHeader"},decls:47,vars:3,consts:[["class","pages-header bg-img valign parallaxie bg-dark","data-background","img1/inner-banner/our-team.jpg","data-overlay-dark","5","style",`background-image: url('./team.png'); 
background-size: cover; 
background-repeat: no-repeat; 
background-attachment: fixed; 
background-position: center 0px;
background-blend-mode: overlay;`,4,"ngIf"],[1,"about","section-padding"],[1,"container"],[1,"row"],[1,"col-lg-6","valign"],["data-wow-delay",".3s",1,"exp-content","nopat","wow","fadeInUp","animated",2,"visibility","visible","animation-delay","0.3s","animation-name","fadeInUp"],[1,"sub-title"],[1,"mb-20","playfont",2,"font-family","'Roboto', sans-serif"],[2,"color","#302f2e"],[1,"numbers","mt-50"],[1,"col-md-4"],[1,"item"],[1,"nbr","custom-font"],[1,"col-lg-6"],[1,"ab-exp"],["data-wow-delay",".3s",1,"col-md-12","wow","fadeInUp",2,"visibility","visible","animation-delay","0.3s"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","Image","width","550",3,"preview"],["data-wow-delay",".3s",1,"col-md-12","wow","fadeInUp","animated"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg","alt","Image","width","550",3,"preview"],["data-background","img1/inner-banner/our-team.jpg","data-overlay-dark","5",1,"pages-header","bg-img","valign","parallaxie","bg-dark",2,"background-image","url('./team.png')","background-size","cover","background-repeat","no-repeat","background-attachment","fixed","background-position","center 0px","background-blend-mode","overlay"],[1,"col-lg-12"],[1,"cont","text-center","mt-30"]],template:function(i,n){i&1&&(v(0,fm,7,0,"header",0),p(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h6",6),S(7,"About Us"),m(),p(8,"h2",7),S(9,"DARCHLINE Studio"),m(),p(10,"p"),S(11," We are a leading "),p(12,"span",8),S(13," Architectural firms in Gaziabad, Uttar Pradesh "),m(),S(14,", with a mission to provide our clients with innovative designs that meet their needs and exceed their expectations. We are the team of a experienced architects who has a passion for designing buildings that are not only functional but also visually appealing."),m(),p(15,"p"),S(16,"Our mission is to create buildings that enhance the lives of the people who use them. We believes that architecture should not only meet the functional needs of its users but also provide a positive impact on their quality of life."),m(),p(17,"div",9)(18,"div",3)(19,"div",10)(20,"div",11)(21,"h3")(22,"span",12),S(23,"50+"),m()(),p(24,"h6"),S(25,"Projects Completed"),m()()(),p(26,"div",10)(27,"div",11)(28,"h3")(29,"span",12),S(30,"10+"),m()(),p(31,"h6"),S(32,"Expert Professional"),m()()(),p(33,"div",10)(34,"div",11)(35,"h3")(36,"span",12),S(37,"7+"),m()(),p(38,"h6"),S(39,"Years of Expierence"),m()()()()()()(),p(40,"div",13)(41,"div",14)(42,"div",3)(43,"div",15),g(44,"p-image",16),m(),p(45,"div",17),g(46,"p-image",18),m()()()()()()()),i&2&&(c("ngIf",n.showHeader),d(44),c("preview",!0),d(2),c("preview",!0))},dependencies:[an,ye],styles:[".p-image-toolbar[_ngcontent-%COMP%]{position:absolute;inset-block-start:var(--p-image-toolbar-position-top);inset-inline-end:var(--p-image-toolbar-position-right);inset-inline-start:var(--p-image-toolbar-position-left);inset-block-end:var(--p-image-toolbar-position-bottom);display:flex;z-index:1;padding:var(--p-image-toolbar-padding);background:var(--p-image-toolbar-background);-webkit-backdrop-filter:blur(var(--p-image-toolbar-blur));backdrop-filter:blur(var(--p-image-toolbar-blur));border-color:var(--p-image-toolbar-border-color);border-style:solid;border-width:var(--p-image-toolbar-border-width);border-radius:var(--p-image-toolbar-border-radius);gap:var(--p-image-toolbar-gap)}.p-image-preview-mask[_ngcontent-%COMP%]{position:absolute;inset-inline-start:0;inset-block-start:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;border:0 none;padding:0;cursor:pointer;background:transparent;color:var(--p-image-preview-mask-color);transition:background var(--p-image-transition-duration)}"]})}}return t})();var Vr=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let r=0;r<n.length;r++)e.classList.add(n[r])}else{let n=i.split(" ");for(let r=0;r<n.length;r++)e.className+=" "+n[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var r=0;r<i.length;r++){if(i[r]==e)return n;i[r].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],r=0;for(var a=0;a<n.length;a++){if(n[a]==e)return r;n[a].attributes&&n[a].attributes[i]&&n[a].nodeType==1&&r++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let r=Ae=>{if(Ae)return getComputedStyle(Ae).getPropertyValue("position")==="relative"?Ae:r(Ae.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=i.offsetHeight,l=i.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),b=this.getViewport(),w=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*f},B,U;l.top+s+a.height>b.height?(B=l.top-w.top-a.height,e.style.transformOrigin="bottom",l.top+B<0&&(B=-1*l.top)):(B=s+l.top-w.top,e.style.transformOrigin="top");let de=l.left+a.width-b.width,Me=l.left-w.left;a.width>b.width?U=(l.left-w.left)*-1:de>0?U=Me-de:U=l.left-w.left,e.style.top=B+"px",e.style.left=U+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,n=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=r.height,s=r.width,l=i.offsetHeight,u=i.offsetWidth,f=i.getBoundingClientRect(),b=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),w=this.getViewport(),B,U;f.top+l+a>w.height?(B=f.top+b-a,e.style.transformOrigin="bottom",B<0&&(B=b)):(B=l+f.top+b,e.style.transformOrigin="top"),f.left+s>w.width?U=Math.max(0,f.left+C+u-s):U=f.left+C,e.style.top=B+"px",e.style.left=U+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),r=/(auto|scroll)/,a=s=>{let l=window.getComputedStyle(s,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let s of n){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let u=l.split(",");for(let f of u){let b=this.findSingle(s,f);b&&a(b)&&i.push(b)}}s.nodeType!==9&&a(s)&&i.push(s)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,l=e.getBoundingClientRect(),f=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-s,b=e.scrollTop,C=e.clientHeight,w=this.getOuterHeight(i);f<0?e.scrollTop=b+f:f+w>C&&(e.scrollTop=b+f-C+w)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,r=0,a=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,i){var n=1,r=50,a=i,s=r/a;let l=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(l)),e.style.opacity=n},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let r=getComputedStyle(e);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let r=getComputedStyle(e);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,r=i.getElementsByTagName("body")[0],a=e.innerWidth||n.clientWidth||r.clientWidth,s=e.innerHeight||n.clientHeight||r.clientHeight;return{width:a,height:s}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let a of n){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&r.push(a)}return r}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),r=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);i?a==-1||a===0?r=n.length-1:r=a-1:a!=-1&&a!==n.length-1&&(r=a+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...n),r}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(r,a)=>{let s=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[a].flat().reduce((l,u)=>{if(u!=null){let f=typeof u;if(f==="string"||f==="number")l.push(u);else if(f==="object"){let b=Array.isArray(u)?n(r,u):Object.entries(u).map(([C,w])=>r==="style"&&(w||w===0)?`${C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${w}`:w?C:void 0);l=b.length?l.concat(b.filter(C=>!!C)):l}}return l},s)};Object.entries(i).forEach(([r,a])=>{if(a!=null){let s=r.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),a):r==="pBind"?this.setAttributes(e,a):(a=r==="class"?[...new Set(n("class",a))].join(" ").trim():r==="style"?n("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=a),e.setAttribute(r,a))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),So=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Vr.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Fl=(()=>{class t extends te{autofocus=!1;_autofocus=!1;focused=!1;platformId=_($e);document=_(ne);host=_(at);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){me(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Vr.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275dir=_e({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",$],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[le,M]})}return t})();var bm=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,vm={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":A(t.value)&&String(t.value).length===1,"p-badge-dot":ge(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Nl=(()=>{class t extends ee{name="badge";theme=bm;classes=vm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function ym(t,o){if(t&1&&(p(0,"span",1),S(1),m()),t&2){let e=h();D(e.styleClass()),c("ngClass",e.containerClass())("ngStyle",e.style()),d(),et(e.value())}}var Kt=(()=>{class t extends te{styleClass=Ot();style=Ot();badgeSize=Ot();size=Ot();severity=Ot();value=Ot();badgeDisabled=Ot(!1,{transform:$});_componentStyle=_(Nl);containerClass=Bo(()=>({"p-badge p-component":!0,"p-badge-circle":A(this.value())&&String(this.value()).length===1,"p-badge-lg":this.badgeSize()==="large","p-badge-xl":this.badgeSize()==="xlarge","p-badge-sm":this.badgeSize()==="small","p-badge-dot":ge(this.value()),[`p-badge-${this.severity()}`]:this.severity()}));static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-badge"]],inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[ce([Nl]),M,P],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle"],[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&v(0,ym,2,5,"span",0),i&2&&On(n.badgeDisabled()?-1:0)},dependencies:[ue,we,Le,X],encapsulation:2,changeDetection:0})}return t})(),bt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[Kt,X,X]})}return t})();var _m=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Im={root:"p-ink"},Bl=(()=>{class t extends ee{name="ripple";theme=_m;classes=Im;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var $t=(()=>{class t extends te{zone=_(ve);_componentStyle=_(Bl);animationListener;mouseDownListener;timeout;constructor(){super(),_t(()=>{me(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(jt(i,"p-ink-active"),!Ar(i)&&!Pr(i)){let s=Math.max(ft(this.el.nativeElement),gt(this.el.nativeElement));i.style.height=s+"px",i.style.width=s+"px"}let n=ol(this.el.nativeElement),r=e.pageX-n.left+this.document.body.scrollTop-Pr(i)/2,a=e.pageY-n.top+this.document.body.scrollLeft-Ar(i)/2;this.renderer.setStyle(i,"top",a+"px"),this.renderer.setStyle(i,"left",r+"px"),Ut(i,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&jt(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&jt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),jt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,rl(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=_e({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[ce([Bl]),M]})}return t})();var Cm=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Sm={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Vl=(()=>{class t extends ee{name="button";theme=Cm;classes=Sm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var wm=["content"],xm=["loading"],Tm=["icon"],Em=["*"],Hl=t=>({class:t});function Mm(t,o){t&1&&Ie(0)}function Om(t,o){if(t&1&&g(0,"span",8),t&2){let e=h(3);c("ngClass",e.iconClass()),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function km(t,o){if(t&1&&g(0,"SpinnerIcon",9),t&2){let e=h(3);c("styleClass",e.spinnerIconClass())("spin",!0),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Dm(t,o){if(t&1&&(Z(0),v(1,Om,1,3,"span",6)(2,km,1,4,"SpinnerIcon",7),Y()),t&2){let e=h(2);d(),c("ngIf",e.loadingIcon),d(),c("ngIf",!e.loadingIcon)}}function Rm(t,o){}function Lm(t,o){if(t&1&&v(0,Rm,0,0,"ng-template",10),t&2){let e=h(2);c("ngIf",e.loadingicon)}}function Am(t,o){if(t&1&&(Z(0),v(1,Dm,3,2,"ng-container",2)(2,Lm,1,1,null,5),Y()),t&2){let e=h();d(),c("ngIf",!e.loadingicon),d(),c("ngTemplateOutlet",e.loadingicon)("ngTemplateOutletContext",ae(3,Hl,e.iconClass()))}}function Pm(t,o){if(t&1&&g(0,"span",8),t&2){let e=h(2);D(e.icon),c("ngClass",e.iconClass()),y("data-pc-section","icon")}}function $m(t,o){}function Fm(t,o){if(t&1&&v(0,$m,0,0,"ng-template",10),t&2){let e=h(2);c("ngIf",!e.icon&&e.iconTemplate)}}function Nm(t,o){if(t&1&&(Z(0),v(1,Pm,1,4,"span",11)(2,Fm,1,1,null,5),Y()),t&2){let e=h();d(),c("ngIf",e.icon&&!e.iconTemplate),d(),c("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",ae(3,Hl,e.iconClass()))}}function Bm(t,o){if(t&1&&(p(0,"span",12),S(1),m()),t&2){let e=h();y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),d(),et(e.label)}}function Vm(t,o){if(t&1&&g(0,"p-badge",13),t&2){let e=h();c("value",e.badge)("severity",e.badgeSeverity)}}var zr=(()=>{class t extends te{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new K;onFocus=new K;onBlur=new K;content;loadingicon;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ge(this.fluid)?!!i:this.fluid}_componentStyle=_(Vl);ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingicon)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-button"]],contentQueries:function(i,n,r){if(i&1&&(z(r,wm,5),z(r,xm,5),z(r,Tm,5)),i&2){let a;R(a=L())&&(n.content=a.first),R(a=L())&&(n.loadingicon=a.first),R(a=L())&&(n.iconTemplate=a.first)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",$],loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",raised:[2,"raised","raised",$],rounded:[2,"rounded","rounded",$],text:[2,"text","text",$],plain:[2,"plain","plain",$],severity:"severity",outlined:[2,"outlined","outlined",$],link:[2,"link","link",$],tabindex:[2,"tabindex","tabindex",Ce],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",$],fluid:[2,"fluid","fluid",$],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[ce([Vl]),le,M,Pe,P],ngContentSelectors:Em,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(Fe(),p(0,"button",0),V("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),ke(1),v(2,Mm,1,0,"ng-container",1)(3,Am,3,5,"ng-container",2)(4,Nm,3,5,"ng-container",2)(5,Bm,2,3,"span",3)(6,Vm,1,2,"p-badge",4),m()),i&2&&(c("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),y("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),d(2),c("ngTemplateOutlet",n.content),d(),c("ngIf",n.loading),d(),c("ngIf",!n.loading),d(),c("ngIf",!n.content&&n.label),d(),c("ngIf",!n.content&&n.badge))},dependencies:[ue,we,ye,Ve,Le,$t,Fl,Rl,bt,Kt,X],encapsulation:2,changeDetection:0})}return t})(),zl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ue,zr,X,X]})}return t})();var Hm=({dt:t})=>`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: ${t("carousel.content.gap")};
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${t("carousel.indicator.list.padding")};
    gap: ${t("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("carousel.indicator.background")};
    width: ${t("carousel.indicator.width")};
    height: ${t("carousel.indicator.height")};
    border: 0 none;
    transition: background ${t("carousel.transition.duration")}, color ${t("carousel.transition.duration")}, outline-color ${t("carousel.transition.duration")}, box-shadow ${t("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${t("carousel.indicator.focus.ring.shadow")};
    outline: ${t("carousel.indicator.focus.ring.width")} ${t("carousel.indicator.focus.ring.style")} ${t("carousel.indicator.focus.ring.color")};
    outline-offset: ${t("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${t("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${t("carousel.indicator.active.background")};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`,zm={root:({instance:t})=>["p-carousel p-component",{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:t})=>["p-carousel-prev-button",{"p-disabled":t.backwardIsDisabled}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({index:t,value:o,totalShiftedItems:e,d_numVisible:i})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":e*-1===o.length+i,"p-carousel-item-start":t===0,"p-carousel-item-end":o.slice(-1*i).length-1===t}],item:({instance:t,index:o})=>["p-carousel-item",{"p-carousel-item-active":t.firstIndex()<=o&&t.lastIndex()>=o,"p-carousel-item-start":t.firstIndex()===o,"p-carousel-item-end":t.lastIndex()===o}],pcNextButton:({instance:t})=>["p-carousel-next-button",{"p-disabled":t.forwardIsDisabled}],indicatorList:"p-carousel-indicator-list",indicator:({instance:t,index:o})=>["p-carousel-indicator",{"p-carousel-indicator-active":t.d_page===o}],indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},Ul=(()=>{class t extends ee{name="carousel";theme=Hm;classes=zm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Um=["item"],jm=["header"],Wm=["footer"],qm=["previousicon"],Km=["nexticon"],Gm=["itemsContainer"],Qm=["indicatorContent"],Zm=[[["p-header"]],[["p-footer"]]],Ym=["p-header","p-footer"],Jm=(t,o)=>({"p-carousel p-component":!0,"p-carousel-vertical":t,"p-carousel-horizontal":o}),Xm=t=>({height:t}),eh=t=>({"p-carousel-prev-button":!0,"p-disabled":t}),jl=(t,o,e)=>({"p-carousel-item p-carousel-item-clone":!0,"p-carousel-item-active":t,"p-carousel-item-start":o,"p-carousel-item-end":e}),Ur=t=>({$implicit:t}),th=(t,o,e)=>({"p-carousel-item":!0,"p-carousel-item-active":t,"p-carousel-item-start":o,"p-carousel-item-end":e}),ih=t=>({"p-carousel-next-button":!0,"p-disabled":t}),nh=t=>({"p-carousel-indicator":!0,"p-carousel-indicator-active":t});function oh(t,o){t&1&&Ie(0)}function rh(t,o){if(t&1&&(p(0,"div",14),ke(1),v(2,oh,1,0,"ng-container",15),m()),t&2){let e=h();d(2),c("ngTemplateOutlet",e.headerTemplate)}}function ah(t,o){t&1&&g(0,"ChevronLeftIcon",20),t&2&&c("styleClass","carousel-prev-icon")}function sh(t,o){t&1&&g(0,"ChevronUpIcon",20),t&2&&c("styleClass","carousel-prev-icon")}function lh(t,o){if(t&1&&(Z(0),v(1,ah,1,1,"ChevronLeftIcon",19)(2,sh,1,1,"ChevronUpIcon",19),Y()),t&2){let e=h(3);d(),c("ngIf",!e.isVertical()),d(),c("ngIf",e.isVertical())}}function ch(t,o){}function uh(t,o){t&1&&v(0,ch,0,0,"ng-template")}function dh(t,o){if(t&1&&(p(0,"span",21),v(1,uh,1,0,null,15),m()),t&2){let e=h(3);d(),c("ngTemplateOutlet",e.previousicon)}}function ph(t,o){if(t&1&&v(0,lh,3,2,"ng-container",17)(1,dh,2,1,"span",18),t&2){let e=h(2);c("ngIf",!e.previousicon&&!(e.prevButtonProps!=null&&e.prevButtonProps.icon)),d(),c("ngIf",e.previousicon&&!(e.prevButtonProps!=null&&e.prevButtonProps.icon))}}function mh(t,o){if(t&1){let e=re();p(0,"p-button",16),V("click",function(n){O(e);let r=h();return k(r.navBackward(n))}),v(1,ph,2,2,"ng-template",null,1,Re),m()}if(t&2){let e=h();c("ngClass",ae(5,eh,e.isBackwardNavDisabled()))("disabled",e.isBackwardNavDisabled())("text",!0)("buttonProps",e.prevButtonProps),y("aria-label",e.ariaPrevButtonLabel())}}function hh(t,o){t&1&&Ie(0)}function fh(t,o){if(t&1&&(p(0,"div",5),v(1,hh,1,0,"ng-container",22),m()),t&2){let e=o.$implicit,i=o.index,n=h();c("ngClass",Dn(6,jl,n.totalShiftedItems*-1===n.value.length,i===0,n.clonedItemsForStarting.length-1===i)),y("aria-hidden",n.totalShiftedItems*-1!==n.value.length)("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel()),d(),c("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",ae(10,Ur,e))}}function gh(t,o){t&1&&Ie(0)}function bh(t,o){if(t&1&&(p(0,"div",5),v(1,gh,1,0,"ng-container",22),m()),t&2){let e=o.$implicit,i=o.index,n=h();c("ngClass",Dn(6,th,n.firstIndex()<=i&&n.lastIndex()>=i,n.firstIndex()===i,n.lastIndex()===i)),y("aria-hidden",n.totalShiftedItems*-1!==n.value.length)("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel()),d(),c("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",ae(10,Ur,e))}}function vh(t,o){t&1&&Ie(0)}function yh(t,o){if(t&1&&(p(0,"div",5),v(1,vh,1,0,"ng-container",22),m()),t&2){let e=o.$implicit,i=o.index,n=h();c("ngClass",Dn(3,jl,n.totalShiftedItems*-1===n.numVisible,i===0,n.clonedItemsForFinishing.length-1===i)),d(),c("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",ae(7,Ur,e))}}function _h(t,o){t&1&&g(0,"ChevronRightIcon",20),t&2&&c("styleClass","carousel-prev-icon")}function Ih(t,o){t&1&&g(0,"ChevronDownIcon",20),t&2&&c("styleClass","carousel-prev-icon")}function Ch(t,o){if(t&1&&(Z(0),v(1,_h,1,1,"ChevronRightIcon",19)(2,Ih,1,1,"ChevronDownIcon",19),Y()),t&2){let e=h(2);d(),c("ngIf",!e.isVertical()),d(),c("ngIf",e.isVertical())}}function Sh(t,o){}function wh(t,o){t&1&&v(0,Sh,0,0,"ng-template")}function xh(t,o){if(t&1&&(p(0,"span",21),v(1,wh,1,0,null,15),m()),t&2){let e=h(2);d(),c("ngTemplateOutlet",e.nexticon)}}function Th(t,o){if(t&1){let e=re();p(0,"p-button",23),V("click",function(n){O(e);let r=h();return k(r.navForward(n))}),v(1,Ch,3,2,"ng-container",17)(2,xh,2,1,"span",18),m()}if(t&2){let e=h();c("ngClass",ae(7,ih,e.isForwardNavDisabled()))("disabled",e.isForwardNavDisabled())("buttonProps",e.nextButtonProps)("text",!0),y("aria-label",e.ariaNextButtonLabel()),d(),c("ngIf",!e.nexticon&&!(e.nextButtonProps!=null&&e.nextButtonProps.icon)),d(),c("ngIf",e.nexticon&&!(e.nextButtonProps!=null&&e.nextButtonProps.icon))}}function Eh(t,o){if(t&1){let e=re();p(0,"li",5)(1,"button",25),V("click",function(n){let r=O(e).index,a=h(2);return k(a.onDotClick(n,r))}),m()()}if(t&2){let e=o.index,i=h(2);c("ngClass",ae(9,nh,i._page===e)),y("data-pc-section","indicator"),d(),D(i.indicatorStyleClass),c("ngClass","p-carousel-indicator-button")("ngStyle",i.indicatorStyle)("tabindex",i._page===e?0:-1),y("aria-label",i.ariaPageLabel(e+1))("aria-current",i._page===e?"page":void 0)}}function Mh(t,o){if(t&1){let e=re();p(0,"ul",24,2),V("keydown",function(n){O(e);let r=h();return k(r.onIndicatorKeydown(n))}),v(2,Eh,2,11,"li",10),m()}if(t&2){let e=h();D(e.indicatorsContentClass),c("ngClass","p-carousel-indicator-list")("ngStyle",e.indicatorsContentStyle),d(2),c("ngForOf",e.totalDotsArray())}}function Oh(t,o){t&1&&Ie(0)}function kh(t,o){if(t&1&&(p(0,"div",26),ke(1,1),v(2,Oh,1,0,"ng-container",15),m()),t&2){let e=h();d(2),c("ngTemplateOutlet",e.footerTemplate)}}var wo=(()=>{class t extends te{el;zone;get page(){return this._page}set page(e){this.isCreated&&e!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),e>this._page&&e<=this.totalDots()-1?this.step(-1,e):e<this._page&&this.step(1,e)),this._page=e}get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e}get numScroll(){return this._numVisible}set numScroll(e){this._numScroll=e}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(e){this._value=e}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;style;styleClass;prevButtonProps;nextButtonProps;onPage=new K;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousicon;nexticon;window;_componentStyle=_(Ul);constructor(e,i){super(),this.el=e,this.zone=i,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(e){me(this.platformId)&&(e.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(e.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),e.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}ngAfterContentInit(){super.ngAfterContentInit(),this.id=be("pn_id_"),me(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.cd.detectChanges()}ngAfterContentChecked(){if(me(this.platformId)){let e=this.isCircular(),i=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let n=this._page;this.totalDots()!==0&&n>=this.totalDots()&&(n=this.totalDots()-1,this._page=n,this.onPage.emit({page:this.page})),i=n*this._numScroll*-1,e&&(i-=this._numVisible),n===this.totalDots()-1&&this.remainingItems>0?(i+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,i!==this.totalShiftedItems&&(this.totalShiftedItems=i),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}e&&(this.page===0?i=-1*this._numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",po(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle));let e=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((i,n)=>{let r=i.breakpoint,a=n.breakpoint,s=null;return r==null&&a!=null?s=-1:r!=null&&a==null?s=1:r==null&&a==null?s=0:typeof r=="string"&&typeof a=="string"?s=r.localeCompare(a,void 0,{numeric:!0}):s=r<a?-1:r>a?1:0,-1*s});for(let i=0;i<this.responsiveOptions.length;i++){let n=this.responsiveOptions[i];e+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=e}calculatePosition(){if(this.responsiveOptions){let e={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let i=window.innerWidth;for(let n=0;n<this.responsiveOptions.length;n++){let r=this.responsiveOptions[n];parseInt(r.breakpoint,10)>=i&&(e=r)}}if(this._numScroll!==e.numScroll){let i=this._page;i=Math.floor(i*this._numScroll/e.numScroll);let n=e.numScroll*this.page*-1;this.isCircular()&&(n-=e.numVisible),this.totalShiftedItems=n,this._numScroll=e.numScroll,this._page=i,this.onPage.emit({page:this.page})}this._numVisible!==e.numVisible&&(this._numVisible=e.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let e=this.totalDots();return e<=0?[]:Array(e).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(e,i){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,i),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}navBackward(e,i){(this.isCircular()||this._page!==0)&&this.step(1,i),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}onDotClick(e,i){let n=this._page;this.autoplayInterval&&this.stopAutoplay(),i>n?this.navForward(e,i):i<n&&this.navBackward(e,i)}onIndicatorKeydown(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let e=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=e.findIndex(a=>el(a,"data-p-highlight")===!0),n=Ne(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=e.findIndex(a=>a===n.parentElement);e[r].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=Ne(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(n=>n===i.parentElement)}changedFocusedIndicator(e,i){let n=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(e,i){let n=this.totalShiftedItems,r=this.isCircular();if(i!=null)n=this._numScroll*i*-1,r&&(n-=this._numVisible),this.isRemainingItemsAdded=!1;else{n+=this._numScroll*e,this.isRemainingItemsAdded&&(n+=this.remainingItems-this._numScroll*e,this.isRemainingItemsAdded=!1);let a=r?n+this._numVisible:n;i=Math.abs(Math.floor(a/this._numScroll))}r&&this.page===this.totalDots()-1&&e===-1?(n=-1*(this.value.length+this._numVisible),i=0):r&&this.page===0&&e===1?(n=0,i=this.totalDots()-1):i===this.totalDots()-1&&this.remainingItems>0&&(n+=this.remainingItems*-1-this._numScroll*e,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this._numVisible)}%, 0)`:`translate3d(${n*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n,this._page=i,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(e=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,e&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}changePageOnTouch(e,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(e):this.navBackward(e))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(e){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}bindDocumentListeners(){me(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",e=>{this.calculatePosition()})))}unbindDocumentListeners(){me(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(i){return new(i||t)(G(at),G(ve))};static \u0275cmp=x({type:t,selectors:[["p-carousel"]],contentQueries:function(i,n,r){if(i&1&&(z(r,dl,5),z(r,pl,5),z(r,Um,5),z(r,jm,5),z(r,Wm,5),z(r,qm,5),z(r,Km,5)),i&2){let a;R(a=L())&&(n.headerFacet=a.first),R(a=L())&&(n.footerFacet=a.first),R(a=L())&&(n.itemTemplate=a.first),R(a=L())&&(n.headerTemplate=a.first),R(a=L())&&(n.footerTemplate=a.first),R(a=L())&&(n.previousicon=a.first),R(a=L())&&(n.nexticon=a.first)}},viewQuery:function(i,n){if(i&1&&(De(Gm,5),De(Qm,5)),i&2){let r;R(r=L())&&(n.itemsContainer=r.first),R(r=L())&&(n.indicatorContent=r.first)}},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",$],showIndicators:[2,"showIndicators","showIndicators",$],showNavigators:[2,"showNavigators","showNavigators",$],autoplayInterval:[2,"autoplayInterval","autoplayInterval",Ce],style:"style",styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},standalone:!0,features:[ce([Ul]),le,M,Pe,P],ngContentSelectors:Ym,decls:14,vars:23,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],["role","region",3,"ngClass","ngStyle"],["class","p-carousel-header",4,"ngIf"],[3,"ngClass"],[1,"p-carousel-content"],[3,"ngClass","disabled","text","buttonProps","click",4,"ngIf"],[1,"p-carousel-viewport",3,"touchend","touchstart","touchmove","ngStyle"],[1,"p-carousel-item-list",3,"transitionend"],[3,"ngClass",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"ngClass","disabled","buttonProps","text","click",4,"ngIf"],[3,"ngClass","class","ngStyle","keydown",4,"ngIf"],["class","p-carousel-footer",4,"ngIf"],[1,"p-carousel-header"],[4,"ngTemplateOutlet"],[3,"click","ngClass","disabled","text","buttonProps"],[4,"ngIf"],["class","p-carousel-prev-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-carousel-prev-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","pRipple","",3,"click","ngClass","disabled","buttonProps","text"],[3,"keydown","ngClass","ngStyle"],["type","button",3,"click","ngClass","ngStyle","tabindex"],[1,"p-carousel-footer"]],template:function(i,n){if(i&1){let r=re();Fe(Zm),p(0,"div",3),v(1,rh,3,1,"div",4),p(2,"div",5)(3,"div",6),v(4,mh,3,7,"p-button",7),p(5,"div",8),V("touchend",function(s){return O(r),k(n.onTouchEnd(s))})("touchstart",function(s){return O(r),k(n.onTouchStart(s))})("touchmove",function(s){return O(r),k(n.onTouchMove(s))}),p(6,"div",9,0),V("transitionend",function(){return O(r),k(n.onTransitionEnd())}),v(8,fh,2,12,"div",10)(9,bh,2,12,"div",10)(10,yh,2,9,"div",10),m()(),v(11,Th,3,9,"p-button",11),m(),v(12,Mh,3,5,"ul",12),m(),v(13,kh,3,1,"div",13),m()}i&2&&(D(n.styleClass),c("ngClass",tt(18,Jm,n.isVertical(),!n.isVertical()))("ngStyle",n.style),y("id",n.id),d(),c("ngIf",n.headerFacet||n.headerTemplate),d(),D(n.contentClass),c("ngClass","p-carousel-content-container"),d(),y("aria-live",n.allowAutoplay?"polite":"off"),d(),c("ngIf",n.showNavigators),d(),c("ngStyle",ae(21,Xm,n.isVertical()?n.verticalViewPortHeight:"auto")),d(3),c("ngForOf",n.clonedItemsForStarting),d(),c("ngForOf",n.value),d(),c("ngForOf",n.clonedItemsForFinishing),d(),c("ngIf",n.showNavigators),d(),c("ngIf",n.showIndicators),d(),c("ngIf",n.footerFacet||n.footerTemplate))},dependencies:[ue,we,Xt,ye,Ve,Le,$t,Tl,xl,wl,El,zr,X],encapsulation:2,changeDetection:0})}return t})();function Rh(t,o){if(t&1&&(p(0,"div")(1,"div",3)(2,"div",4),g(3,"img",5),m()()()),t&2){let e=o.$implicit;d(3),Ca("src","https://primefaces.org/cdn/primeng/images/demo/product/",e.image,"",st),c("alt",e.name)}}var Wl=(()=>{class t{constructor(){this.images=["./site-1.jpg","./site-2.jpg","./site-3.jpg"],this.currentIndex=0,this.isAnimating=!0,this.products=[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3}]}ngOnInit(){this.startCarousel()}ngOnDestroy(){this.stopCarousel()}startCarousel(){this.autoSlideInterval=setInterval(()=>{this.nextSlide()},3e3)}stopCarousel(){clearInterval(this.autoSlideInterval)}nextSlide(){this.isAnimating=!0,this.currentIndex=(this.currentIndex+1)%this.images.length}prevSlide(){this.isAnimating=!0,this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return"contrast"}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-carousel"]],decls:4,vars:4,consts:[["item",""],[1,"p-2"],["autoplayInterval","3000",3,"value","numVisible","numScroll","circular"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"w-full","rounded-border",3,"src","alt"]],template:function(i,n){i&1&&(p(0,"div",1)(1,"p-carousel",2),v(2,Rh,4,3,"ng-template",null,0,Re),m()()),i&2&&(d(),c("value",n.products)("numVisible",1)("numScroll",1)("circular",!0))},dependencies:[wo],styles:[".carousel-container[_ngcontent-%COMP%]{width:100%;height:300px;overflow:hidden;position:relative;padding:10px 0}.carousel-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.carousel-item[_ngcontent-%COMP%]{min-width:100%;height:100%;display:flex;justify-content:center;align-items:center}.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.carousel-button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);background-color:#00000080;color:#fff;border:none;border-radius:50%;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:10;font-size:20px}.carousel-button.prev[_ngcontent-%COMP%]{left:10px}.carousel-button.next[_ngcontent-%COMP%]{right:10px}.carousel-button[_ngcontent-%COMP%]:hover{background-color:#000000b3}.carousel-wrapper[_ngcontent-%COMP%]{transition:transform .5s ease-in-out}.p-iconwrapper[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;background:#00000080;width:30px;height:30px;border-radius:20px}"]})}}return t})();var ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-landing-page"]],decls:2,vars:1,consts:[[3,"showHeader"]],template:function(i,n){i&1&&g(0,"app-carousel")(1,"app-about",0),i&2&&(d(),c("showHeader",!1))},dependencies:[Co,Wl],styles:[".container[_ngcontent-%COMP%]{min-height:calc(100vh - 160px)}"]})}}return t})();var Kl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-our-team"]],decls:41,vars:0,consts:[["data-background","img1/inner-banner/our-team.jpg","data-overlay-dark","5",1,"pages-header","bg-img","valign","parallaxie","bg-dark",2,"background-image","url('./team.png')","background-size","cover","background-repeat","no-repeat","background-attachment","fixed","background-position","center 0px","background-blend-mode","overlay"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"cont","text-center","mt-30"],[1,"about","section-padding","mt-30"],[1,"col-lg-3","mt-40"],["src","./team.png"],[1,"text-center"],[1,"col-lg-9"],[1,"txt-cont","mt-40"],[1,"mb-20"]],template:function(i,n){i&1&&(p(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1"),S(6,"Our Team"),m()()()()()(),p(7,"section",5)(8,"div",1)(9,"div",2)(10,"div",3)(11,"h3"),S(12,"Principal Architect"),m(),p(13,"div",2)(14,"div",6),g(15,"img",7),p(16,"p",8)(17,"b"),S(18,"Abhishek Gupta"),m(),S(19," ("),p(20,"em"),S(21,"B.Arch"),m(),S(22,")"),m()(),p(23,"div",9)(24,"div",10)(25,"p",11),S(26,"Founder and creative mind behind DArchline Studio, he has built his reputation by designing and building various projects ranging from residences to commercial spaces, hotels to restaurants, heavily rooted on the broadest vision of sustainability that serves the center of the design development; focusing on well-being of spaces, combining emotions, art and architecture with attention to detail and functionality. His organized way of designing, coordination in all phases of project make his work unique that stands out from others."),m()()()(),p(27,"div",2)(28,"div",6),g(29,"img",7),p(30,"p",8)(31,"b"),S(32,"Dheeraj"),m(),S(33,"("),p(34,"em"),S(35,"B.Arch"),m(),S(36,")"),m()(),p(37,"div",9)(38,"div",10)(39,"p",11),S(40,"Co founder and creative mind behind DArchline Studio, he has built his reputation by designing and building various projects ranging from residences to commercial spaces, hotels to restaurants, heavily rooted on the broadest vision of sustainability that serves the center of the design development; focusing on well-being of spaces, combining emotions, art and architecture with attention to detail and functionality. His organized way of designing, coordination in all phases of project make his work unique that stands out from others."),m()()()()()()()())}})}}return t})();var Gl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-contact-us"]],decls:42,vars:0,consts:[["data-background","./contact-us.jpg","data-overlay-dark","5",1,"pages-header","bg-img","valign","parallaxie","bg-dark",2,"background-image","url('./contact-us.jpg')","background-size","cover","background-repeat","no-repeat","background-attachment","fixed","background-position","center 0px","background-blend-mode","overlay"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"cont","text-center","mt-30"],[1,"contact"],[1,"info","bg-gray","pt-80","pb-80"],[1,"col-lg-4"],[1,"item"],["aria-hidden","true",1,"fa","fa-location-arrow",2,"margin-top","5px"],[1,"cont"],[1,"custom-font"],[1,"pi","pi-map-marker",2,"color","#da552f"],["aria-hidden","true",1,"fa","fa-phone",2,"margin-top","5px"],[1,"pi","pi-phone",2,"color","#da552f"],["aria-hidden","true",1,"fa","fa-envelope",2,"margin-top","5px"],[1,"pi","pi-envelope",2,"color","#da552f"],[1,"container-fluid"],[1,"col-lg-12","map-box"]],template:function(i,n){i&1&&(p(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1"),S(6,"Contact Us"),m()()()()()(),p(7,"section",5)(8,"div",6)(9,"div",1)(10,"div",2)(11,"div",7)(12,"div",8),g(13,"i",9),p(14,"div",10)(15,"h6",11),g(16,"i",12),S(17," : Address"),m(),p(18,"p"),S(19," 123 Design Street, NY, USA"),m()()()(),p(20,"div",7)(21,"div",8),g(22,"i",13),p(23,"div",10)(24,"h6",11),g(25,"i",14),S(26," : Call Us"),m(),p(27,"p"),S(28,"+91 8510840769/+91 8700733027"),m(),g(29,"br"),m()()(),p(30,"div",7)(31,"div",8),g(32,"i",15),p(33,"div",10)(34,"h6",11),g(35,"i",16),S(36," : Email Us"),m(),p(37,"p"),S(38,"archlinestudio@gmail.com"),m()()()()()()(),p(39,"div",17)(40,"div",2),g(41,"div",18),m()()())}})}}return t})();var Ah=[{path:"",component:ql},{path:"about",component:Co},{path:"contact-us",component:Gl},{path:"our-team",component:Kl}],Ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=j({imports:[St.forRoot(Ah),St]})}}return t})();var Zl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-footer"]],decls:62,vars:0,consts:[[1,"footer"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],["href","#"],[1,"footer-address"],[1,"pi","pi-map-marker"],[1,"pi","pi-phone"],[1,"pi","pi-envelope"],[1,"pi","pi-globe"],[1,"footer-right"],[1,"social-icons"],["href","https://www.instagram.com/darchline_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==","aria-label","Facebook","target","_blank"],[1,"pi","pi-facebook"],["href","https://www.instagram.com/darchline_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==","aria-label","Instagram","target","_blank"],[1,"pi","pi-instagram"],["href","https://www.instagram.com/darchline_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==","aria-label","LinkedIn","target","_blank"],[1,"pi","pi-linkedin"],["href","https://www.instagram.com/darchline_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==","aria-label","Twitter","target","_blank"],[1,"pi","pi-twitter"],["src","./abhiQR.png",2,"width","200px"],[1,"footer-bottom"]],template:function(i,n){i&1&&(p(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h3"),S(4,"DArchLINE STUDIO"),m(),p(5,"p"),S(6,"ARCHITECTURE & INTERIOR"),m()(),p(7,"div",3)(8,"h4"),S(9,"Quick Links"),m(),p(10,"ul")(11,"li")(12,"a",4),S(13,"Home"),m()(),p(14,"li")(15,"a",4),S(16,"About Us"),m()(),p(17,"li")(18,"a",4),S(19,"Architecture"),m()(),p(20,"li")(21,"a",4),S(22,"Interior"),m()(),p(23,"li")(24,"a",4),S(25,"Services"),m()(),p(26,"li")(27,"a",4),S(28,"Contact Us"),m()()()(),p(29,"div",5)(30,"h4"),S(31,"Contact Us"),m(),p(32,"ul")(33,"li"),g(34,"i",6),S(35," 123 Design Street, NY, USA"),m(),p(36,"li"),g(37,"i",7),S(38," +91 8510840769, +91 8700733027"),m(),p(39,"li"),g(40,"i",8),S(41," archlinestudio@gmail.com"),m(),p(42,"li"),g(43,"i",9),S(44," https://darchline-studio.github.io/darchline/"),m()()(),p(45,"div",10)(46,"h4"),S(47,"Follow Us"),m(),p(48,"div",11)(49,"a",12),g(50,"i",13),m(),p(51,"a",14),g(52,"i",15),m(),p(53,"a",16),g(54,"i",17),m(),p(55,"a",18),g(56,"i",19),m()(),p(57,"div"),g(58,"img",20),m()()(),p(59,"div",21)(60,"p"),S(61,"\xA9 2024 darchline_studio. All Rights Reserved."),m()()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#2c2c2c;color:#fff;padding:40px 20px 10px;font-size:.9rem}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px}.footer-left[_ngcontent-%COMP%], .footer-center[_ngcontent-%COMP%], .footer-right[_ngcontent-%COMP%]{flex:1;min-width:200px}.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.2rem}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#ccc}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;color:#fff;font-size:1.5rem;transition:color .3s}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}.footer-bottom[_ngcontent-%COMP%]{text-align:center;margin-top:20px;border-top:1px solid #444444;padding-top:10px}.footer-address[_ngcontent-%COMP%]{flex:1;min-width:200px}.footer-address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;color:#ccc}.footer-address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.footer-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:1.2rem;color:#f3b43f}.footer-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}.footer-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}"]})}}return t})();var Yl=(()=>{class t{constructor(){this.isFirstDropdownOpen=!1,this.isSecondDropdownOpen=!1,this.isThirdDropdownOpen=!1}toggleDropdown(e,i){e.preventDefault(),i==="first"?(this.isFirstDropdownOpen=!this.isFirstDropdownOpen,this.isSecondDropdownOpen=!1):i==="second"?(this.isSecondDropdownOpen=!this.isSecondDropdownOpen,this.isFirstDropdownOpen=!1):i==="third"&&(this.isThirdDropdownOpen=!this.isThirdDropdownOpen,this.isFirstDropdownOpen=!1)}onDocumentClick(e){let i=e.closest(".dropdown.first"),n=e.closest(".dropdown.second"),r=e.closest(".dropdown.third");!i&&!n&&!r&&(this.isFirstDropdownOpen=!1,this.isSecondDropdownOpen=!1,this.isThirdDropdownOpen=!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-navbar"]],hostBindings:function(i,n){i&1&&V("click",function(a){return n.onDocumentClick(a.target)},!1,xn)},decls:43,vars:12,consts:[[1,"navbar","navbar-expand-lg","navbar-dark"],["href","#",1,"navbar-brand"],["src","./darchline.jpg","alt","Company Logo",2,"height","75px","width","75px","border-radius","20px"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["href","#",1,"nav-link"],[1,"nav-item","dropdown","first"],["href","#","role","button","aria-expanded","false",1,"nav-link","dropdown-toggle",3,"click"],[1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"nav-item","dropdown","second"],["routerLink","/contact-us",1,"nav-link"],["routerLink","/about",1,"dropdown-item"],["routerLink","/our-team",1,"dropdown-item"]],template:function(i,n){i&1&&(p(0,"nav",0)(1,"a",1),g(2,"img",2),m(),p(3,"button",3),g(4,"span",4),m(),p(5,"div",5)(6,"ul",6)(7,"li",7)(8,"a",8),S(9,"Home"),m()(),p(10,"li",9)(11,"a",10),V("click",function(a){return n.toggleDropdown(a,"first")}),S(12," Services "),m(),p(13,"ul",11)(14,"li")(15,"a",12),S(16,"Architecture Design"),m()(),p(17,"li")(18,"a",12),S(19,"Interior Design"),m()()()(),p(20,"li",13)(21,"a",10),V("click",function(a){return n.toggleDropdown(a,"second")}),S(22," Architecture "),m(),p(23,"ul",11)(24,"li")(25,"a",12),S(26,"Apartment"),m()(),p(27,"li")(28,"a",12),S(29,"Commercial"),m()()()(),p(30,"li",7)(31,"a",14),S(32,"Contact Us"),m()(),p(33,"li",13)(34,"a",10),V("click",function(a){return n.toggleDropdown(a,"third")}),S(35," About Us "),m(),p(36,"ul",11)(37,"li")(38,"a",15),S(39,"About"),m()(),p(40,"li")(41,"a",16),S(42,"Our Team"),m()()()()()()()),i&2&&(d(10),lt("show",n.isFirstDropdownOpen),d(3),lt("show",n.isFirstDropdownOpen),d(7),lt("show",n.isSecondDropdownOpen),d(3),lt("show",n.isSecondDropdownOpen),d(10),lt("show",n.isThirdDropdownOpen),d(3),lt("show",n.isThirdDropdownOpen))},dependencies:[Lt],styles:[".navbar[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a;padding:.5rem 1rem;background:#2c2c2c}.dropdown-menu[_ngcontent-%COMP%]{display:none}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.nav-item.dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{cursor:pointer}.logo[_ngcontent-%COMP%]{max-width:100%;height:auto}.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}@media (max-width: 768px){.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30px}}@media (max-width: 576px){.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px}}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f8f9fa}.container[_ngcontent-%COMP%]{margin-top:50px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#343a40}.section[_ngcontent-%COMP%]{margin-bottom:50px}.section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]})}}return t})();function Fh(t,o){t&1&&(p(0,"div",1),g(1,"div",2)(2,"div",3),m())}var Jl=(()=>{class t{constructor(e){this.router=e,this.isLoading=!1}ngOnInit(){this.router.events.subscribe(e=>{e instanceof Dt?this.isLoading=!0:e instanceof We&&setTimeout(()=>this.isLoading=!1,1e3)})}static{this.\u0275fac=function(i){return new(i||t)(G(qe))}}static{this.\u0275cmp=x({type:t,selectors:[["app-loader"]],decls:1,vars:1,consts:[["class","loader-overlay",4,"ngIf"],[1,"loader-overlay"],[1,"spinner"],[1,"spinner-container"]],template:function(i,n){i&1&&v(0,Fh,3,0,"div",0),i&2&&c("ngIf",n.isLoading)},dependencies:[ye],styles:[".loader-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.spinner[_ngcontent-%COMP%]{width:50px;height:50px;border:5px solid rgba(255,255,255,.3);border-top:5px solid #fff;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}}return t})();var Xl=(()=>{class t{constructor(e){this.router=e,this.title="darchline-studio",this.products=[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3},{id:"1003",code:"244wgerg2",name:"Blue T-Shirt",description:"Product Description",image:"blue-t-shirt.jpg",price:29,category:"Clothing",quantity:25,inventoryStatus:"INSTOCK",rating:5}]}ngOnInit(){this.items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}]}static{this.\u0275fac=function(i){return new(i||t)(G(qe))}}static{this.\u0275cmp=x({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,""]],template:function(i,n){i&1&&(g(0,"app-loader"),p(1,"div",0),g(2,"app-navbar")(3,"router-outlet")(4,"app-footer"),m())},dependencies:[Mr,Zl,Yl,Jl],styles:['.custom-menubar[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;padding:10px 20px}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.2rem;font-weight:700}.company-name[_ngcontent-%COMP%]{margin-left:10px;color:#fff}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;cursor:pointer;text-decoration:none;transition:color .3s}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e0e0e0}.hero-section[_ngcontent-%COMP%]{height:100vh;background-image:url("./media/test-ZG24N3WP.jpg");background-size:cover;background-position:center;position:relative}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#0000004d;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:60px}.subheading[_ngcontent-%COMP%]{font-size:1rem;letter-spacing:4px;color:#fff;margin-bottom:10px}.title[_ngcontent-%COMP%]{font-size:4rem;color:#fff;font-weight:700}.scroll-button[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:50%;transform:translate(-50%);background:none;border:2px solid #ffffff;color:#fff;font-size:1.5rem;border-radius:50%;width:50px;height:50px;cursor:pointer}.scroll-button[_ngcontent-%COMP%]:hover{background:#fff;color:#000}.footer[_ngcontent-%COMP%]{background-color:#2c2c2c;color:#fff;padding:40px 20px 10px;font-size:.9rem}.footer-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px}.footer-left[_ngcontent-%COMP%], .footer-center[_ngcontent-%COMP%], .footer-right[_ngcontent-%COMP%]{flex:1;min-width:200px}.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.2rem}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#ccc}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;color:#fff;font-size:1.5rem;transition:color .3s}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}.footer-bottom[_ngcontent-%COMP%]{text-align:center;margin-top:20px;border-top:1px solid #444444;padding-top:10px}.footer-address[_ngcontent-%COMP%]{flex:1;min-width:200px}.footer-address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;color:#ccc}.footer-address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.footer-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:1.2rem;color:#f3b43f}.footer-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}.footer-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f3b43f}.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}']})}}return t})();var Bh=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Vh={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ec=(()=>{class t extends ee{name="tooltip";theme=Bh;classes=Vh;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var xo=(()=>{class t extends te{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:be("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=_(ec);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),me(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=I(I({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(zt(e.relatedTarget,"p-tooltip")||zt(e.relatedTarget,"p-tooltip-text")||zt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?on(this.container,this.el.nativeElement):on(this.getOption("appendTo"),this.container),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),Xs(this.container,250),this.getOption("tooltipZIndex")==="auto"?Qe.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Qe.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof En){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+Qs(),n=e.top+Zs();return{left:i,top:n}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let e=this.activeElement,i=this.getHostOffset(),n=i.left+ft(e),r=i.top+(gt(e)-gt(this.container))/2;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?Ne(this.el.nativeElement,".p-component"):this.el.nativeElement}alignLeft(){this.preAlign("left");let e=this.getHostOffset(),i=e.left-ft(this.container),n=e.top+(gt(this.el.nativeElement)-gt(this.container))/2;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let e=this.getHostOffset(),i=e.left+(ft(this.el.nativeElement)-ft(this.container))/2,n=e.top-gt(this.container);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let e=this.getHostOffset(),i=e.left+(ft(this.el.nativeElement)-ft(this.container))/2,n=e.top+gt(this.el.nativeElement);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=I(I({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return zt(e,"p-inputwrapper")?Ne(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,r=ft(this.container),a=gt(this.container),s=Gs();return n+r>s.width||n<0||i<0||i+a>s.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new So(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):al(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Qe.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(G(ve),G(Mn))};static \u0275dir=_e({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",$],showDelay:[2,"showDelay","showDelay",Ce],hideDelay:[2,"hideDelay","hideDelay",Ce],life:[2,"life","life",Ce],positionTop:[2,"positionTop","positionTop",Ce],positionLeft:[2,"positionLeft","positionLeft",Ce],autoHide:[2,"autoHide","autoHide",$],fitContent:[2,"fitContent","fitContent",$],hideOnEscape:[2,"hideOnEscape","hideOnEscape",$],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[ce([ec]),le,M,Pe]})}return t})(),gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var Hh=({dt:t})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${t("menubar.submenu.mobile.indent")};
}
`;var zh={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ic=(()=>{class t extends ee{name="menubar";theme=Hh;classes=zh;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Uh=["menubar"],jh=(t,o)=>({"p-menubar-submenu":t,"p-menubar-root-list":o}),nc=t=>({"p-menubar-item-link":!0,"p-disabled":t}),Wh=()=>({exact:!1}),qh=(t,o)=>({$implicit:t,root:o}),Kh=t=>({display:t});function Gh(t,o){if(t&1&&g(0,"li",8),t&2){let e=h().$implicit,i=h();yt(i.getItemProp(e,"style")),c("ngClass",i.getSeparatorItemClass(e)),y("id",i.getItemId(e))("data-pc-section","separator")}}function Qh(t,o){if(t&1&&g(0,"span",19),t&2){let e=h(4).$implicit,i=h();c("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),y("data-pc-section","icon")("tabindex",-1)}}function Zh(t,o){if(t&1&&(p(0,"span",20),S(1),m()),t&2){let e=h(4).$implicit,i=h();c("id",i.getItemLabelId(e)),y("data-pc-section","label"),d(),Mi(" ",i.getItemLabel(e)," ")}}function Yh(t,o){if(t&1&&g(0,"span",21),t&2){let e=h(4).$implicit,i=h();c("innerHTML",i.getItemLabel(e),Yt)("id",i.getItemLabelId(e)),y("data-pc-section","label")}}function Jh(t,o){if(t&1&&g(0,"p-badge",22),t&2){let e=h(4).$implicit,i=h();c("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function Xh(t,o){t&1&&g(0,"AngleDownIcon",25),t&2&&y("data-pc-section","submenuicon")}function ef(t,o){t&1&&g(0,"AngleRightIcon",25),t&2&&y("data-pc-section","submenuicon")}function tf(t,o){if(t&1&&(Z(0),v(1,Xh,1,1,"AngleDownIcon",24)(2,ef,1,1,"AngleRightIcon",24),Y()),t&2){let e=h(6);d(),c("ngIf",e.root),d(),c("ngIf",!e.root)}}function nf(t,o){}function of(t,o){t&1&&v(0,nf,0,0,"ng-template",26),t&2&&c("data-pc-section","submenuicon")}function rf(t,o){if(t&1&&(Z(0),v(1,tf,3,2,"ng-container",11)(2,of,1,1,null,23),Y()),t&2){let e=h(5);d(),c("ngIf",!e.submenuiconTemplate),d(),c("ngTemplateOutlet",e.submenuiconTemplate)}}function af(t,o){if(t&1&&(p(0,"a",15),v(1,Qh,1,4,"span",16)(2,Zh,2,3,"span",17)(3,Yh,1,3,"ng-template",null,2,Re)(5,Jh,1,2,"p-badge",18)(6,rf,3,2,"ng-container",11),m()),t&2){let e=Xe(4),i=h(3).$implicit,n=h();c("target",n.getItemProp(i,"target"))("ngClass",ae(11,nc,n.getItemProp(i,"disabled"))),y("href",n.getItemProp(i,"url"),st)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),d(),c("ngIf",n.getItemProp(i,"icon")),d(),c("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),d(3),c("ngIf",n.getItemProp(i,"badge")),d(),c("ngIf",n.isItemGroup(i))}}function sf(t,o){if(t&1&&g(0,"span",19),t&2){let e=h(4).$implicit,i=h();c("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),y("data-pc-section","icon")("tabindex",-1)}}function lf(t,o){if(t&1&&(p(0,"span",29),S(1),m()),t&2){let e=h(4).$implicit,i=h();d(),et(i.getItemLabel(e))}}function cf(t,o){if(t&1&&g(0,"span",30),t&2){let e=h(4).$implicit,i=h();c("innerHTML",i.getItemLabel(e),Yt),y("data-pc-section","label")}}function uf(t,o){if(t&1&&g(0,"p-badge",22),t&2){let e=h(4).$implicit,i=h();c("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function df(t,o){t&1&&g(0,"AngleDownIcon",25),t&2&&y("data-pc-section","submenuicon")}function pf(t,o){t&1&&g(0,"AngleRightIcon",25),t&2&&y("data-pc-section","submenuicon")}function mf(t,o){if(t&1&&(Z(0),v(1,df,1,1,"AngleDownIcon",24)(2,pf,1,1,"AngleRightIcon",24),Y()),t&2){let e=h(6);d(),c("ngIf",e.root),d(),c("ngIf",!e.root)}}function hf(t,o){}function ff(t,o){t&1&&v(0,hf,0,0,"ng-template",26),t&2&&c("data-pc-section","submenuicon")}function gf(t,o){if(t&1&&(Z(0),v(1,mf,3,2,"ng-container",11)(2,ff,1,1,null,23),Y()),t&2){let e=h(5);d(),c("ngIf",!e.submenuiconTemplate),d(),c("ngTemplateOutlet",e.submenuiconTemplate)}}function bf(t,o){if(t&1&&(p(0,"a",27),v(1,sf,1,4,"span",16)(2,lf,2,1,"span",28)(3,cf,1,2,"ng-template",null,3,Re)(5,uf,1,2,"p-badge",18)(6,gf,3,2,"ng-container",11),m()),t&2){let e=Xe(4),i=h(3).$implicit,n=h();c("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||kn(20,Wh))("target",n.getItemProp(i,"target"))("ngClass",ae(21,nc,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),y("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("data-pc-section","action"),d(),c("ngIf",n.getItemProp(i,"icon")),d(),c("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),d(3),c("ngIf",n.getItemProp(i,"badge")),d(),c("ngIf",n.isItemGroup(i))}}function vf(t,o){if(t&1&&(Z(0),v(1,af,7,13,"a",13)(2,bf,7,23,"a",14),Y()),t&2){let e=h(2).$implicit,i=h();d(),c("ngIf",!i.getItemProp(e,"routerLink")),d(),c("ngIf",i.getItemProp(e,"routerLink"))}}function yf(t,o){}function _f(t,o){t&1&&v(0,yf,0,0,"ng-template")}function If(t,o){if(t&1&&(Z(0),v(1,_f,1,0,null,31),Y()),t&2){let e=h(2).$implicit,i=h();d(),c("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",tt(2,qh,e.item,i.root))}}function Cf(t,o){if(t&1){let e=re();p(0,"p-menubarSub",32),V("itemClick",function(n){O(e);let r=h(3);return k(r.itemClick.emit(n))})("itemMouseEnter",function(n){O(e);let r=h(3);return k(r.onItemMouseEnter(n))}),m()}if(t&2){let e=h(2).$implicit,i=h();c("itemTemplate",i.itemTemplate)("items",e.items)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("menuId",i.menuId)("activeItemPath",i.activeItemPath)("focusedItemId",i.focusedItemId)("level",i.level+1)("ariaLabelledBy",i.getItemLabelId(e))("inlineStyles",ae(10,Kh,i.isItemActive(e)?"flex":"none"))}}function Sf(t,o){if(t&1){let e=re();p(0,"li",9,1)(2,"div",10),V("click",function(n){O(e);let r=h().$implicit,a=h();return k(a.onItemClick(n,r))})("mouseenter",function(n){O(e);let r=h().$implicit,a=h();return k(a.onItemMouseEnter({$event:n,processedItem:r}))}),v(3,vf,3,2,"ng-container",11)(4,If,2,5,"ng-container",11),m(),v(5,Cf,1,12,"p-menubarSub",12),m()}if(t&2){let e=h(),i=e.$implicit,n=e.index,r=h();D(r.getItemProp(i,"styleClass")),c("ngStyle",r.getItemProp(i,"style"))("ngClass",r.getItemClass(i))("tooltipOptions",r.getItemProp(i,"tooltipOptions")),y("id",r.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",r.isItemActive(i))("data-p-focused",r.isItemFocused(i))("data-p-disabled",r.isItemDisabled(i))("aria-label",r.getItemLabel(i))("aria-disabled",r.isItemDisabled(i)||void 0)("aria-haspopup",r.isItemGroup(i)&&!r.getItemProp(i,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(i)?r.isItemActive(i):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n)),d(2),y("data-pc-section","content"),d(),c("ngIf",!r.itemTemplate),d(),c("ngIf",r.itemTemplate),d(),c("ngIf",r.isItemVisible(i)&&r.isItemGroup(i))}}function wf(t,o){if(t&1&&v(0,Gh,1,5,"li",6)(1,Sf,6,21,"li",7),t&2){let e=o.$implicit,i=h();c("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),d(),c("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}var xf=["start"],Tf=["end"],Ef=["item"],Mf=["menuicon"],Of=["submenuicon"],kf=["menubutton"],Df=["rootmenu"],Rf=["*"],Lf=(t,o)=>({"p-menubar p-component":!0,"p-menubar-mobile":t,"p-menubar-mobile-active":o});function Af(t,o){t&1&&Ie(0)}function Pf(t,o){if(t&1&&(p(0,"div",8),v(1,Af,1,0,"ng-container",9),m()),t&2){let e=h();d(),c("ngTemplateOutlet",e.startTemplate)}}function $f(t,o){t&1&&g(0,"BarsIcon")}function Ff(t,o){}function Nf(t,o){t&1&&v(0,Ff,0,0,"ng-template")}function Bf(t,o){if(t&1){let e=re();p(0,"a",10,2),V("click",function(n){O(e);let r=h();return k(r.menuButtonClick(n))})("keydown",function(n){O(e);let r=h();return k(r.menuButtonKeydown(n))}),v(2,$f,1,0,"BarsIcon",11)(3,Nf,1,0,null,9),m()}if(t&2){let e=h();y("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),d(2),c("ngIf",!e.menuiconTemplate),d(),c("ngTemplateOutlet",e.menuiconTemplate)}}function Vf(t,o){t&1&&Ie(0)}function Hf(t,o){if(t&1&&(p(0,"div",12),v(1,Vf,1,0,"ng-container",9),m()),t&2){let e=h();d(),c("ngTemplateOutlet",e.endTemplate)}}function zf(t,o){t&1&&(p(0,"div",12),ke(1),m())}var jr=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Ye;mouseLeft$=this.mouseLeaves.pipe(oa(()=>na(this.autoHideDelay)),vt(e=>this.autoHide&&e));static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Uf=(()=>{class t extends te{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new K;itemMouseEnter=new K;menuFocus=new K;menuBlur=new K;menuKeydown=new K;menubarViewChild;mouseLeaveSubscriber;menubarService=_(jr);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}getItemProp(e,i,n=null){return e&&e.item?Te(e.item[i],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemClass(e){return pe(I({},this.getItemProp(e,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return pe(I({},this.getItemProp(e,"class")),{"p-menubar-separator":!0})}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(i=>i.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return A(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(e){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(i,n){if(i&1&&De(Uh,7),i&2){let r;R(r=L())&&(n.menubarViewChild=r.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",$],autoZIndex:[2,"autoZIndex","autoZIndex",$],baseZIndex:[2,"baseZIndex","baseZIndex",Ce],mobileActive:[2,"mobileActive","mobileActive",$],autoDisplay:[2,"autoDisplay","autoDisplay",$],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Ce],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},standalone:!0,features:[le,M,P],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(i,n){if(i&1){let r=re();p(0,"ul",4,0),V("focus",function(s){return O(r),k(n.menuFocus.emit(s))})("blur",function(s){return O(r),k(n.menuBlur.emit(s))})("keydown",function(s){return O(r),k(n.menuKeydown.emit(s))}),v(2,wf,2,2,"ng-template",5),m()}i&2&&(c("ngClass",tt(9,jh,!n.root,n.root))("tabindex",0)("ngStyle",n.inlineStyles),y("data-pc-section","menu")("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.root?n.menuId:null)("aria-activedescendant",n.focusedItemId),d(2),c("ngForOf",n.items))},dependencies:[t,ue,we,Xt,ye,Ve,Le,St,Lt,co,$t,gi,xo,yo,_o,bt,Kt,X],encapsulation:2})}return t})(),Wr=(()=>{class t extends te{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new K;onBlur=new K;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=ze([]);number=ze(0);focusedItemInfo=ze({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=_(ic);_model;get visibleItems(){let e=this.activeItemPath().find(i=>i.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${A(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,i,n,r,a,s){super(),this.document=e,this.platformId=i,this.el=n,this.renderer=r,this.cd=a,this.menubarService=s,_t(()=>{let l=this.activeItemPath();A(l)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||be("pn_id_")}startTemplate;endTemplate;itemTemplate;menuiconTemplate;submenuiconTemplate;createProcessedItems(e,i=0,n={},r=""){let a=[];return e&&e.forEach((s,l)=>{let u=(r!==""?r+"_":"")+l,f={item:s,index:l,level:i,key:u,parent:n,parentKey:r};f.items=this.createProcessedItems(s.items,i+1,f,u),a.push(f)}),a}bindMatchMediaListener(){if(me(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,i){return e?Te(e[i]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:i,processedItem:n}=e,r=this.isProcessedItemGroup(n),a=ge(n.parent);if(this.isSelected(n)){let{index:l,key:u,level:f,parentKey:b,item:C}=n;this.activeItemPath.set(this.activeItemPath().filter(w=>u!==w.key&&u.startsWith(w.key))),this.focusedItemInfo.set({index:l,level:f,parentKey:b,item:C}),this.dirty=!a,Se(this.rootmenu.menubarViewChild.nativeElement)}else if(r)this.onItemChange(e);else{let l=a?n:this.activeItemPath().find(u=>u.parentKey==="");this.hide(i),this.changeFocusedItemIndex(i,l?l.index:-1),this.mobileActive=!1,Se(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(e){rn()||this.mobileActive||this.onItemChange(e)}changeFocusedItemIndex(e,i){let n=this.findVisibleItem(i);if(this.focusedItemInfo().index!==i){let r=this.focusedItemInfo();this.focusedItemInfo.set(pe(I({},r),{item:n.item,index:i})),this.scrollInView()}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=Ne(this.rootmenu.el.nativeElement,`li[id="${i}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(ge(i))return;let{index:r,key:a,level:s,parentKey:l,items:u,item:f}=i,b=A(u),C=this.activeItemPath().filter(w=>w.parentKey!==l&&w.parentKey!==a);b&&C.push(i),this.focusedItemInfo.set({index:r,level:s,parentKey:l,item:f}),this.activeItemPath.set(C),b&&(this.dirty=!0),n&&Se(this.rootmenu.menubarViewChild.nativeElement)}toggle(e){this.mobileActive?(this.mobileActive=!1,Qe.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Qe.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,i){this.mobileActive&&setTimeout(()=>{Se(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),i&&Se(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),Se(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let i=this.findVisibleItem(this.findFirstFocusedItemIndex()),n=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item};this.focusedItemInfo.set(n),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&fo(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return A(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&A(e.items)}isSelected(e){return this.activeItemPath().some(i=>i.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&A(e.items)}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,r=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(i?ge(i.parent):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowRightKey(e));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onArrowRightKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(i?this.activeItemPath().find(r=>r.key===i.parentKey):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowDownKey(e));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onArrowUpKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(ge(i.parent)){if(this.isProccessedItemGroup(i)){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item});let a=this.findLastItemIndex();this.changeFocusedItemIndex(e,a)}}else{let r=this.activeItemPath().find(a=>a.key===i.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:r?r.parentKey:"",item:i.item}),this.searchValue="",this.onArrowLeftKey(e);let a=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a)}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()}onArrowLeftKey(e){let i=this.visibleItems[this.focusedItemInfo().index],n=i?this.activeItemPath().find(r=>r.key===i.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let r=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),e.preventDefault()}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=Ne(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&Ne(i,'a[data-pc-section="action"]');n?n.click():i&&i.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return pi(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?pi(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}bindResizeListener(){me(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{rn()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){me(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let i=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),n=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);i&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(G(ne),G($e),G(at),G(Ft),G(kt),G(jr))};static \u0275cmp=x({type:t,selectors:[["p-menubar"]],contentQueries:function(i,n,r){if(i&1&&(z(r,xf,5),z(r,Tf,5),z(r,Ef,5),z(r,Mf,5),z(r,Of,5)),i&2){let a;R(a=L())&&(n.startTemplate=a.first),R(a=L())&&(n.endTemplate=a.first),R(a=L())&&(n.itemTemplate=a.first),R(a=L())&&(n.menuiconTemplate=a.first),R(a=L())&&(n.submenuiconTemplate=a.first)}},viewQuery:function(i,n){if(i&1&&(De(kf,5),De(Df,5)),i&2){let r;R(r=L())&&(n.menubutton=r.first),R(r=L())&&(n.rootmenu=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",$],baseZIndex:[2,"baseZIndex","baseZIndex",Ce],autoDisplay:[2,"autoDisplay","autoDisplay",$],autoHide:[2,"autoHide","autoHide",$],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",Ce],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[ce([jr,ic]),le,M,P],ngContentSelectors:Rf,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(i,n){if(i&1){let r=re();Fe(),p(0,"div",3),v(1,Pf,2,1,"div",4)(2,Bf,4,7,"a",5),p(3,"p-menubarSub",6,0),V("itemClick",function(s){return O(r),k(n.onItemClick(s))})("menuFocus",function(s){return O(r),k(n.onMenuFocus(s))})("menuBlur",function(s){return O(r),k(n.onMenuBlur(s))})("menuKeydown",function(s){return O(r),k(n.onKeyDown(s))})("itemMouseEnter",function(s){return O(r),k(n.onItemMouseEnter(s))}),m(),v(5,Hf,2,1,"div",7)(6,zf,2,0,"ng-template",null,1,Re),m()}if(i&2){let r=Xe(7);D(n.styleClass),c("ngClass",tt(23,Lf,n.queryMatches,n.mobileActive))("ngStyle",n.style),y("data-pc-section","root")("data-pc-name","menubar"),d(),c("ngIf",n.startTemplate),d(),c("ngIf",n.model&&n.model.length>0),d(),c("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("ariaLabel",n.ariaLabel)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuiconTemplate)("activeItemPath",n.activeItemPath()),d(2),c("ngIf",n.endTemplate)("ngIfElse",r)}},dependencies:[ue,we,ye,Ve,Le,St,Uf,gi,Io,bt,X],encapsulation:2,changeDetection:0})}return t})(),oc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[Wr,X,X]})}return t})();var jf=(()=>{class t extends Bn{constructor(e,i,n){super(e,i,n)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(i){return new(i||t)(W(ne),W(Ri),W(Nn))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function Wf(){return new Ua}function qf(t,o,e){return new Wa(t,o,e)}var ac=[{provide:Nn,useFactory:Wf},{provide:Bn,useClass:jf},{provide:Jt,useFactory:qf,deps:[ei,Bn,ve]}],rc=[{provide:Ri,useFactory:()=>new ja},{provide:Ti,useValue:"BrowserAnimations"},...ac],Kf=[{provide:Ri,useClass:za},{provide:Ti,useValue:"NoopAnimations"},...ac],sc=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Kf:rc}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=j({providers:rc,imports:[zn]})}}return t})();var Gf=({dt:t})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${t("avatar.width")};
    height: ${t("avatar.height")};
    font-size: ${t("avatar.font.size")};
    color: ${t("avatar.color")};
    background: ${t("avatar.background")};
    border-radius: ${t("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${t("avatar.icon.size")};
    width: ${t("avatar.icon.size")};
    height: ${t("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${t("avatar.lg.width")};
    height: ${t("avatar.lg.width")};
    font-size: ${t("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${t("avatar.lg.icon.size")};
    width: ${t("avatar.lg.icon.size")};
    height: ${t("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${t("avatar.xl.width")};
    height: ${t("avatar.xl.width")};
    font-size: ${t("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${t("avatar.xl.font.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${t("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${t("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${t("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${t("avatar.xl.group.offset")};
}
`,Qf={root:({props:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},lc=(()=>{class t extends ee{name="avatar";theme=Gf;classes=Qf;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Zf=["*"];function Yf(t,o){if(t&1&&(p(0,"span",3),S(1),m()),t&2){let e=h();d(),et(e.label)}}function Jf(t,o){if(t&1&&g(0,"span",5),t&2){let e=h(2);D(e.icon),c("ngClass","p-avatar-icon")}}function Xf(t,o){if(t&1&&v(0,Jf,1,3,"span",4),t&2){let e=h(),i=Xe(5);c("ngIf",e.icon)("ngIfElse",i)}}function eg(t,o){if(t&1){let e=re();p(0,"img",7),V("error",function(n){O(e);let r=h(2);return k(r.imageError(n))}),m()}if(t&2){let e=h(2);c("src",e.image,st),y("aria-label",e.ariaLabel)}}function tg(t,o){if(t&1&&v(0,eg,1,2,"img",6),t&2){let e=h();c("ngIf",e.image)}}var ig=(()=>{class t extends te{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new K;_componentStyle=_(lc);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(i,n){i&2&&(y("data-pc-name","avatar")("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),yt(n.style),D(n.hostClass),lt("p-avatar",!0)("p-component",!0)("p-avatar-circle",n.shape==="circle")("p-avatar-lg",n.size==="large")("p-avatar-xl",n.size==="xlarge")("p-avatar-image",n.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},standalone:!0,features:[ce([lc]),M,P],ngContentSelectors:Zf,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,n){if(i&1&&(Fe(),ke(0),v(1,Yf,2,1,"span",2)(2,Xf,1,2,"ng-template",null,0,Re)(4,tg,1,1,"ng-template",null,1,Re)),i&2){let r=Xe(3);d(),c("ngIf",n.label)("ngIfElse",r)}},dependencies:[ue,we,ye,X],encapsulation:2,changeDetection:0})}return t})(),cc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ig,X,X]})}return t})();var uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var ng=({dt:t})=>`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${t("megamenu.background")};
    border: 1px solid ${t("megamenu.border.color")};
    border-radius: ${t("megamenu.border.radius")};
    color: ${t("megamenu.color")};
    gap: ${t("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${t("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumega-item-content {
    border-radius: ${t("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${t("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${t("megamenu.transition.duration")}, color ${t("megamenu.transition.duration")};
    border-radius: ${t("megamenu.item.border.radius")};
    color: ${t("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("megamenu.item.padding")};
    gap: ${t("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.color")};
    font-size: ${t("megamenu.submenu.icon.size")};
    width: ${t("megamenu.submenu.icon.size")};
    height: ${t("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${t("megamenu.item.focus.color")};
    background: ${t("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${t("megamenu.item.focus.color")};
    background: ${t("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${t("megamenu.item.active.color")};
    background: ${t("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${t("megamenu.overlay.padding")};
    background: ${t("megamenu.overlay.background")};
    color: ${t("megamenu.overlay.color")};
    border: 1px solid ${t("megamenu.overlay.border.color")};
    border-radius: ${t("megamenu.overlay.border.radius")};
    box-shadow: ${t("megamenu.overlay.shadow")};
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${t("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${t("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${t("megamenu.submenu.label.padding")};
    color: ${t("megamenu.submenu.label.color")};
    font-weight: ${t("megamenu.submenu.label.font.weight")};
    background: ${t("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-top: 1px solid ${t("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${t("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${t("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${t("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active >.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${t("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("megamenu.mobile.button.size")};
    height: ${t("megamenu.mobile.button.size")};
    position: relative;
    color: ${t("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("megamenu.mobile.button.border.radius")};
    transition: background ${t("megamenu.transition.duration")}, color ${t("megamenu.transition.duration")}, outline-color ${t("megamenu.transition.duration")}, ox-shadow ${t("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${t("megamenu.mobile.button.hover.color")};
    background: ${t("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${t("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${t("megamenu.mobile.button.focus.ring.width")} ${t("megamenu.mobile.button.focus.ring.style")} ${t("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${t("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${t("megamenu.submenu.padding")};
    gap: ${t("megamenu.submenu.gap")};
    background: ${t("megamenu.overlay.background")};
    border: 1px solid ${t("megamenu.overlay.border.color")};
    box-shadow: ${t("megamenu.overlay.shadow")};
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}

/* For PrimeNG */
.p-megamenu-submenu-icon.p-iconwrapper {
    margin-left: auto;
}
`;var og={root:({instance:t})=>["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:t,processedItem:o})=>["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(o)}],item:({instance:t,processedItem:o})=>["p-megamenu-item",{"p-megamenu-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:t,processedItem:o})=>{let e=t.isItemGroup(o)?o.items.length:0,i;if(t.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(e){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},dc=(()=>{class t extends ee{name="megamenu";theme=ng;classes=og;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var rg=["menubar"],ag=t=>({"max-height":t,overflow:"auto"}),sg=(t,o)=>({"p-megamenu-root-list":t,"p-megamenu-submenu":o}),pc=t=>({"p-megamenu-item-link":!0,"p-disabled":t}),lg=()=>({exact:!1}),cg=t=>({$implicit:t});function ug(t,o){if(t&1&&(p(0,"li",8),S(1),m()),t&2){let e=h(2);yt(e.getItemProp(e.submenu,"style")),c("ngClass",e.getSubmenuHeaderClass(e.submenu)),d(),Mi(" ",e.getItemLabel(e.submenu)," ")}}function dg(t,o){if(t&1&&g(0,"li",11),t&2){let e=h().$implicit,i=h(2);yt(i.getItemProp(e,"style")),c("ngClass",i.getSeparatorItemClass(e)),y("id",i.getItemId(e))("data-pc-section","separator")}}function pg(t,o){if(t&1&&g(0,"span",22),t&2){let e=h(4).$implicit,i=h(2);c("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),y("data-pc-section","icon")("tabindex",-1)}}function mg(t,o){if(t&1&&(p(0,"span",23),S(1),m()),t&2){let e=h(4).$implicit,i=h(2);y("data-pc-section","label"),d(),Mi(" ",i.getItemLabel(e)," ")}}function hg(t,o){if(t&1&&g(0,"span",24),t&2){let e=h(4).$implicit,i=h(2);c("innerHTML",i.getItemLabel(e),Yt),y("data-pc-section","label")}}function fg(t,o){if(t&1&&g(0,"p-badge",25),t&2){let e=h(4).$implicit,i=h(2);c("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function gg(t,o){t&1&&g(0,"AngleDownIcon",27),t&2&&(c("ngClass","p-megamenu-submenu-icon"),y("data-pc-section","submenuicon")("aria-hidden",!0))}function bg(t,o){t&1&&g(0,"AngleRightIcon",27),t&2&&(c("ngClass","p-megamenu-submenu-icon"),y("data-pc-section","submenuicon")("aria-hidden",!0))}function vg(t,o){if(t&1&&v(0,bg,1,3,"AngleRightIcon",28),t&2){let e=h(8);c("ngIf",e.orientation==="vertical")}}function yg(t,o){if(t&1&&(Z(0),v(1,gg,1,3,"AngleDownIcon",27)(2,vg,1,1,"AngleRightIcon",27),Y()),t&2){let e=h(7);d(),On(e.orientation==="horizontal"||e.mobileActive?1:2)}}function _g(t,o){}function Ig(t,o){t&1&&v(0,_g,0,0,"ng-template",29),t&2&&c("data-pc-section","submenuicon")("aria-hidden",!0)}function Cg(t,o){if(t&1&&(Z(0),v(1,yg,3,1,"ng-container",14)(2,Ig,1,2,null,26),Y()),t&2){let e=h(6);d(),c("ngIf",!e.megaMenu.submenuiconTemplate),d(),c("ngTemplateOutlet",e.megaMenu.submenuiconTemplate)}}function Sg(t,o){if(t&1&&(p(0,"a",18),v(1,pg,1,4,"span",19)(2,mg,2,2,"span",20)(3,hg,1,2,"ng-template",null,2,Re)(5,fg,1,2,"p-badge",21)(6,Cg,3,2,"ng-container",14),m()),t&2){let e=Xe(4),i=h(3).$implicit,n=h(2);c("target",n.getItemProp(i,"target"))("ngClass",ae(11,pc,n.getItemProp(i,"disabled"))),y("href",n.getItemProp(i,"url"),st)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),d(),c("ngIf",n.getItemProp(i,"icon")),d(),c("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),d(3),c("ngIf",n.getItemProp(i,"badge")),d(),c("ngIf",n.isItemGroup(i))}}function wg(t,o){if(t&1&&g(0,"span",22),t&2){let e=h(4).$implicit,i=h(2);c("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),y("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function xg(t,o){if(t&1&&(p(0,"span",23),S(1),m()),t&2){let e=h(4).$implicit,i=h(2);d(),et(i.getItemLabel(e))}}function Tg(t,o){if(t&1&&g(0,"span",24),t&2){let e=h(4).$implicit,i=h(2);c("innerHTML",i.getItemLabel(e),Yt),y("data-pc-section","label")}}function Eg(t,o){if(t&1&&g(0,"p-badge",25),t&2){let e=h(4).$implicit,i=h(2);c("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function Mg(t,o){t&1&&g(0,"AngleDownIcon",32),t&2&&(c("styleClass","p-megamenu-submenu-icon"),y("data-pc-section","submenuicon")("aria-hidden",!0))}function Og(t,o){t&1&&g(0,"AngleRightIcon",32),t&2&&(c("styleClass","p-megamenu-submenu-icon"),y("data-pc-section","submenuicon")("aria-hidden",!0))}function kg(t,o){if(t&1&&(Z(0),v(1,Mg,1,3,"AngleDownIcon",31)(2,Og,1,3,"AngleRightIcon",31),Y()),t&2){let e=h(7);d(),c("ngIf",e.orientation==="horizontal"),d(),c("ngIf",e.orientation==="vertical")}}function Dg(t,o){}function Rg(t,o){t&1&&v(0,Dg,0,0,"ng-template",29),t&2&&c("data-pc-section","submenuicon")("aria-hidden",!0)}function Lg(t,o){if(t&1&&(Z(0),v(1,kg,3,2,"ng-container",14)(2,Rg,1,2,null,26),Y()),t&2){let e=h(6);d(),c("ngIf",!e.megaMenu.submenuiconTemplate),d(),c("ngTemplateOutlet",e.megaMenu.submenuiconTemplate)}}function Ag(t,o){if(t&1&&(p(0,"a",30),v(1,wg,1,5,"span",19)(2,xg,2,1,"span",20)(3,Tg,1,2,"ng-template",null,3,Re)(5,Eg,1,2,"p-badge",21)(6,Lg,3,2,"ng-container",14),m()),t&2){let e=Xe(4),i=h(3).$implicit,n=h(2);c("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||kn(21,lg))("target",n.getItemProp(i,"target"))("ngClass",ae(22,pc,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),y("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("aria-hidden",!0)("data-pc-section","action"),d(),c("ngIf",n.getItemProp(i,"icon")),d(),c("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),d(3),c("ngIf",n.getItemProp(i,"badge")),d(),c("ngIf",n.isItemGroup(i))}}function Pg(t,o){if(t&1&&(Z(0),v(1,Sg,7,13,"a",16)(2,Ag,7,24,"a",17),Y()),t&2){let e=h(2).$implicit,i=h(2);d(),c("ngIf",!i.getItemProp(e,"routerLink")),d(),c("ngIf",i.getItemProp(e,"routerLink"))}}function $g(t,o){}function Fg(t,o){t&1&&v(0,$g,0,0,"ng-template")}function Ng(t,o){if(t&1&&(Z(0),v(1,Fg,1,0,null,33),Y()),t&2){let e=h(2).$implicit,i=h(2);d(),c("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",ae(2,cg,e.item))}}function Bg(t,o){if(t&1){let e=re();p(0,"p-megamenu-sub",38),V("itemClick",function(n){O(e);let r=h(6);return k(r.itemClick.emit(n))})("itemMouseEnter",function(n){O(e);let r=h(6);return k(r.onItemMouseEnter(n))}),m()}if(t&2){let e=o.$implicit,i=h(6);c("id",i.getSubListId(e))("submenu",e)("items",e.items)("itemTemplate",i.itemTemplate)("mobileActive",i.mobileActive)("menuId",i.menuId)("focusedItemId",i.focusedItemId)("level",i.level+1)("root",!1)}}function Vg(t,o){if(t&1&&(p(0,"div",27),v(1,Bg,1,9,"p-megamenu-sub",37),m()),t&2){let e=o.$implicit,i=h(3).$implicit,n=h(2);c("ngClass",n.getColumnClass(i)),d(),c("ngForOf",e)}}function Hg(t,o){if(t&1&&(p(0,"div",34)(1,"div",35),v(2,Vg,2,2,"div",36),m()()),t&2){let e=h(2).$implicit;y("data-pc-section","panel"),d(),y("data-pc-section","grid"),d(),c("ngForOf",e.items)}}function zg(t,o){if(t&1){let e=re();p(0,"li",12,1)(2,"div",13),V("click",function(n){O(e);let r=h().$implicit,a=h(2);return k(a.onItemClick(n,r))})("mouseenter",function(n){O(e);let r=h().$implicit,a=h(2);return k(a.onItemMouseEnter({$event:n,processedItem:r}))}),v(3,Pg,3,2,"ng-container",14)(4,Ng,2,4,"ng-container",14),m(),v(5,Hg,3,3,"div",15),m()}if(t&2){let e=h(),i=e.$implicit,n=e.index,r=h(2);D(r.getItemProp(i,"styleClass")),c("ngStyle",r.getItemProp(i,"style"))("ngClass",r.getItemClass(i))("tooltipOptions",r.getItemProp(i,"tooltipOptions")),y("id",r.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",r.isItemActive(i))("data-p-focused",r.isItemFocused(i))("data-p-disabled",r.isItemDisabled(i))("aria-label",r.getItemLabel(i))("aria-disabled",r.isItemDisabled(i)||void 0)("aria-haspopup",r.isItemGroup(i)&&!r.getItemProp(i,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(i)?r.isItemActive(i):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n)),d(2),y("data-pc-section","content"),d(),c("ngIf",!r.itemTemplate),d(),c("ngIf",r.itemTemplate),d(),c("ngIf",r.isItemVisible(i)&&r.isItemGroup(i))}}function Ug(t,o){if(t&1&&v(0,dg,1,5,"li",9)(1,zg,6,21,"li",10),t&2){let e=o.$implicit,i=h(2);c("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),d(),c("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}function jg(t,o){if(t&1){let e=re();p(0,"ul",5,0),V("keydown",function(n){O(e);let r=h();return k(r.menuKeydown.emit(n))})("focus",function(n){O(e);let r=h();return k(r.menuFocus.emit(n))})("blur",function(n){O(e);let r=h();return k(r.menuBlur.emit(n))}),v(2,ug,2,4,"li",6)(3,Ug,2,2,"ng-template",7),m()}if(t&2){let e=h();yt(ae(11,ag,e.scrollHeight)),c("ngClass",tt(13,sg,e.root,!e.root))("tabindex",e.tabindex),y("role",e.root?"menubar":"menu")("id",e.id)("aria-orientation",e.orientation)("aria-activedescendant",e.focusedItemId)("data-pc-section",e.root?"root":"submenu"),d(2),c("ngIf",e.submenu),d(),c("ngForOf",e.items)}}var Wg=["start"],qg=["end"],Kg=["menuicon"],Gg=["submenuicon"],Qg=["item"],Zg=["button"],Yg=["buttonicon"],Jg=["menubutton"],Xg=["rootmenu"],e0=["container"],t0=t=>({flexDirection:t}),i0=(t,o,e,i)=>({"p-megamenu p-component":!0,"p-megamenu-mobile":t,"p-megamenu-mobile-active":o,"p-megamenu-horizontal":e,"p-megamenu-vertical":i});function n0(t,o){t&1&&Ie(0)}function o0(t,o){if(t&1&&(p(0,"div",9),v(1,n0,1,0,"ng-container",6),m()),t&2){let e=h();d(),c("ngTemplateOutlet",e.startTemplate)}}function r0(t,o){t&1&&(Z(0),g(1,"BarsIcon"),Y())}function a0(t,o){if(t&1){let e=re();p(0,"a",11,2),V("click",function(n){O(e);let r=h(2);return k(r.menuButtonClick(n))})("keydown",function(n){O(e);let r=h(2);return k(r.menuButtonKeydown(n))}),v(2,r0,2,0,"ng-container",5),m()}if(t&2){let e=h(2);y("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),d(2),c("ngIf",!e.buttonTemplate)}}function s0(t,o){if(t&1&&(Z(0),v(1,a0,3,5,"a",10),Y()),t&2){let e=h();d(),c("ngIf",e.model&&e.model.length>0)}}function l0(t,o){t&1&&Ie(0)}function c0(t,o){t&1&&Ie(0)}function u0(t,o){if(t&1&&(p(0,"div",12),v(1,c0,1,0,"ng-container",6),m()),t&2){let e=h();d(),c("ngTemplateOutlet",e.endTemplate)}}var d0=(()=>{class t extends te{id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new K;itemMouseEnter=new K;menuFocus=new K;menuBlur=new K;menuKeydown=new K;menubarViewChild;megaMenu=_(ua(()=>qr));onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}getItemProp(e,i,n=null){return e&&e.item?Te(e.item[i],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemClass(e){return pe(I({},this.getItemProp(e,"class")),{"p-megamenu-item":!0,"p-megamenu-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return pe(I({},this.getItemProp(e,"class")),{"p-megamenu-separator":!0})}getColumnClass(e){let i=this.isItemGroup(e)?e.items.length:0,n;if(this.queryMatches)n="p-megamenu-col-12";else switch(i){case 2:n="p-megamenu-col-6";break;case 3:n="p-megamenu-col-4";break;case 4:n="p-megamenu-col-3";break;case 6:n="p-megamenu-col-2";break;default:n="p-megamenu-col-12";break}return n}getSubmenuHeaderClass(e){return I({"p-megamenu-submenu-label":!0,"p-disabled":this.isItemDisabled(e)},this.getItemProp(e,"class"))}isSubmenuVisible(e){return this.submenu&&!this.root?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return A(this.activeItem)?this.activeItem.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return A(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemMouseEnter(e){let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-megaMenuSub"],["p-megamenu-sub"]],viewQuery:function(i,n){if(i&1&&De(rg,7),i&2){let r;R(r=L())&&(n.menubarViewChild=r.first)}},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Ce],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",$],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",$],mobileActive:[2,"mobileActive","mobileActive",$],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",Ce],root:[2,"root","root",$]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},standalone:!0,features:[le,M,P],decls:1,vars:1,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngClass","style","tabindex","keydown","focus","blur",4,"ngIf"],[3,"keydown","focus","blur","ngClass","tabindex"],["role","presentation",3,"ngClass","style",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"ngClass"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-megamenu-item-content",3,"click","mouseenter"],[4,"ngIf"],["class","p-megamenu-overlay",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-megamenu-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-megamenu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-megamenu-item-icon",3,"ngClass","ngStyle"],[1,"p-megamenu-item-label"],[1,"p-megamenu-item-label",3,"innerHTML"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass",4,"ngIf"],[3,"data-pc-section","aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-megamenu-overlay"],[1,"p-megamenu-grid"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],[3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root"]],template:function(i,n){i&1&&v(0,jg,4,16,"ul",4),i&2&&c("ngIf",n.isSubmenuVisible(n.submenu))},dependencies:[t,ue,we,Xt,ye,Ve,Le,St,Lt,co,$t,gi,xo,yo,_o,bt,Kt,X],encapsulation:2})}return t})(),qr=(()=>{class t extends te{set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuiconTemplate;submenuiconTemplate;itemTemplate;buttonTemplate;buttoniconTemplate;menubuttonViewChild;rootmenu;container;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ze(null);focusedItemInfo=ze({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=_(dc);matchMediaListener;query;queryMatches=!1;mobileActive=!1;get visibleItems(){let e=A(this.activeItem())?this.activeItem():null;return e?e.items.reduce((i,n)=>(n.forEach(r=>{r.items.forEach(a=>{i.push(a)})}),i),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:A(e.key)?`${this.id}_${e.key}`:null}constructor(){super(),_t(()=>{let e=this.activeItem();A(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.id=this.id||be("pn_id_")}bindMatchMediaListener(){if(me(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,i=0,n={},r="",a){let s=[];return e&&e.forEach((l,u)=>{let f=(r!==""?r+"_":"")+(a!==void 0?a+"_":"")+u,b={item:l,index:u,level:i,key:f,parent:n,parentKey:r,columnIndex:a!==void 0?a:n.columnIndex!==void 0?n.columnIndex:u};b.items=i===0&&l.items&&l.items.length>0?l.items.map((C,w)=>this.createProcessedItems(C,i+1,b,f,w)):this.createProcessedItems(l.items,i+1,b,f),s.push(b)}),s}getItemProp(e,i){return e?Te(e[i]):void 0}onItemClick(e){let{originalEvent:i,processedItem:n}=e,r=this.isProcessedItemGroup(n),a=ge(n.parent);if(this.isSelected(n)){let{index:l,key:u,parentKey:f,item:b}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:l,key:u,parentKey:f,item:b}),this.dirty=!a,this.mobileActive||Se(this.rootmenu?.menubarViewChild?.nativeElement,{preventScroll:!0})}else r?this.onItemChange(e):this.hide(i)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,Qe.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Qe.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),Se(this.rootmenu?.el.nativeElement)}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n;i===null&&this.queryMatches?n=this.menubuttonViewChild.nativeElement:n=Ne(this.rootmenu?.menubarViewChild?.nativeElement,`li[id="${i}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(ge(i))return;let{index:r,key:a,parentKey:s,items:l,item:u}=i,f=A(l);f&&this.activeItem.set(i),this.focusedItemInfo.set({index:r,key:a,parentKey:s,item:u}),f&&(this.dirty=!0),n&&Se(this.rootmenu?.menubarViewChild?.nativeElement)}hide(e,i){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{Se(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),i&&Se(this.rootmenu?.menubarViewChild?.nativeElement),this.dirty=!1}onMenuFocus(e){if(this.focused=!0,this.focusedItemInfo().index===-1){let i=this.findFirstFocusedItemIndex(),n=this.findVisibleItem(i);this.focusedItemInfo.set({index:i,key:n.key,parentKey:n.parentKey,item:n.item})}}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&fo(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&A(e.items)}isSelected(e){return A(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&A(e.items)}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,r=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}changeFocusedItemInfo(e,i){let n=this.findVisibleItem(i);if(A(n)){let{key:r,parentKey:a,item:s}=n;this.focusedItemInfo.set({index:i,key:r||"",parentKey:a,item:s})}this.scrollInView()}onArrowDownKey(e){if(this.orientation==="horizontal")if(A(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:r}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:r})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:a,key:s,item:l}=n;this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,key:s,parentKey:a,item:l}),this.searchValue=""}}let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}onArrowRightKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="vertical")if(A(this.activeItem())&&this.activeItem().key===i.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:i.item});else{let a=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(a)&&(this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo.set({index:-1,key:a.key,parentKey:a.parentKey,item:a.item}),this.searchValue="")}let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r)}else{let r=i.columnIndex+1,a=this.visibleItems.findIndex(s=>s.columnIndex===r);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&A(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}}onArrowLeftKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="horizontal"){let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.orientation==="vertical"&&A(this.activeItem())&&i.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null));let r=i.columnIndex-1,a=this.visibleItems.findIndex(s=>s.columnIndex===r);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){A(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=Ne(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&Ne(i,'a[data-pc-section="action"]');n?n.click():i&&i.click();let r=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(r)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return A(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return pi(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?pi(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{rn()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){me(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{this.container?.nativeElement!==e.target&&!this.container?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}ngOnDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(i,n,r){if(i&1&&(z(r,Wg,5),z(r,qg,5),z(r,Kg,5),z(r,Gg,5),z(r,Qg,5),z(r,Zg,5),z(r,Yg,5)),i&2){let a;R(a=L())&&(n.startTemplate=a.first),R(a=L())&&(n.endTemplate=a.first),R(a=L())&&(n.menuiconTemplate=a.first),R(a=L())&&(n.submenuiconTemplate=a.first),R(a=L())&&(n.itemTemplate=a.first),R(a=L())&&(n.buttonTemplate=a.first),R(a=L())&&(n.buttoniconTemplate=a.first)}},viewQuery:function(i,n){if(i&1&&(De(Jg,5),De(Xg,5),De(e0,5)),i&2){let r;R(r=L())&&(n.menubuttonViewChild=r.first),R(r=L())&&(n.rootmenu=r.first),R(r=L())&&(n.container=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",$],tabindex:[2,"tabindex","tabindex",Ce]},standalone:!0,features:[ce([dc]),le,M,P],decls:8,vars:36,consts:[["container",""],["rootmenu",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-megamenu-start",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight"],["class","p-megamenu-end",4,"ngIf"],[1,"p-megamenu-start"],["role","button","tabindex","0","class","p-megamenu-button",3,"click","keydown",4,"ngIf"],["role","button","tabindex","0",1,"p-megamenu-button",3,"click","keydown"],[1,"p-megamenu-end"]],template:function(i,n){if(i&1){let r=re();p(0,"div",3,0),v(2,o0,2,1,"div",4)(3,s0,2,1,"ng-container",5)(4,l0,1,0,"ng-container",6),p(5,"p-megamenu-sub",7,1),V("itemClick",function(s){return O(r),k(n.onItemClick(s))})("menuFocus",function(s){return O(r),k(n.onMenuFocus(s))})("menuBlur",function(s){return O(r),k(n.onMenuBlur(s))})("menuKeydown",function(s){return O(r),k(n.onKeyDown(s))})("itemMouseEnter",function(s){return O(r),k(n.onItemMouseEnter(s))}),m(),v(7,u0,2,1,"div",8),m()}i&2&&(yt(ae(29,t0,n.orientation=="vertical"&&n.queryMatches?"row":"")),D(n.styleClass),c("ngClass",Sa(31,i0,n.queryMatches,n.mobileActive,n.orientation=="horizontal",n.orientation=="vertical"))("ngStyle",n.style),y("data-pc-section","root")("data-pc-name","megamenu")("id",n.id),d(2),c("ngIf",n.startTemplate),d(),c("ngIf",!n.buttonTemplate),d(),c("ngTemplateOutlet",n.buttonTemplate),d(),c("itemTemplate",n.itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches)("scrollHeight",n.scrollHeight),y("id",n.id+"_list"),d(2),c("ngIf",n.endTemplate))},dependencies:[ue,we,ye,Ve,Le,St,d0,gi,Io,bt,X],encapsulation:2,changeDetection:0})}return t})();var p0=({dt:t})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${t("tag.primary.background")};
    color: ${t("tag.primary.color")};
    font-size: ${t("tag.font.size")};
    font-weight: ${t("tag.font.weight")};
    padding: ${t("tag.padding")};
    border-radius: ${t("tag.border.radius")};
    gap: ${t("tag.gap")};
}

.p-tag-icon {
    font-size: ${t("tag.icon.size")};
    width: ${t("tag.icon.size")};
    height:${t("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${t("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${t("tag.success.background")};
    color: ${t("tag.success.color")};
}

.p-tag-info {
    background: ${t("tag.info.background")};
    color: ${t("tag.info.color")};
}

.p-tag-warn {
    background: ${t("tag.warn.background")};
    color: ${t("tag.warn.color")};
}

.p-tag-danger {
    background: ${t("tag.danger.background")};
    color: ${t("tag.danger.color")};
}

.p-tag-secondary {
    background: ${t("tag.secondary.background")};
    color: ${t("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${t("tag.contrast.background")};
    color: ${t("tag.contrast.color")};
}
`,m0={root:({props:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},mc=(()=>{class t extends ee{name="tag";theme=p0;classes=m0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var h0=["*"];function f0(t,o){if(t&1&&g(0,"span",5),t&2){let e=h(2);c("ngClass",e.icon)}}function g0(t,o){if(t&1&&(Z(0),v(1,f0,1,1,"span",4),Y()),t&2){let e=h();d(),c("ngIf",e.icon)}}function b0(t,o){}function v0(t,o){t&1&&v(0,b0,0,0,"ng-template")}function y0(t,o){if(t&1&&(p(0,"span",6),v(1,v0,1,0,null,7),m()),t&2){let e=h();d(),c("ngTemplateOutlet",e.iconTemplate)}}var hc=(()=>{class t extends te{get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;_style;_componentStyle=_(mc);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this.iconTemplate=e.template;break}})}containerClass(){return{"p-tag p-component":!0,[`p-tag-${this.severity}`]:this.severity,"p-tag-rounded":this.rounded}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tag"]],inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",$]},standalone:!0,features:[ce([mc]),le,M,P],ngContentSelectors:h0,decls:6,vars:7,consts:[[3,"ngClass","ngStyle"],[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(Fe(),p(0,"span",0),ke(1),v(2,g0,2,1,"ng-container",1)(3,y0,2,1,"span",2),p(4,"span",3),S(5),m()()),i&2&&(D(n.styleClass),c("ngClass",n.containerClass())("ngStyle",n.style),d(2),c("ngIf",!n.iconTemplate),d(),c("ngIf",n.iconTemplate),d(2),et(n.value))},dependencies:[ue,we,ye,Ve,Le,X],encapsulation:2,changeDetection:0})}return t})();var _0="@",I0=(()=>{class t{constructor(e,i,n,r,a){this.doc=e,this.delegate=i,this.zone=n,this.animationType=r,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=_(ya,{optional:!0}),this.loadingSchedulerFn=_(C0,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-DVXIDBHM.js").then(n=>n),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(n=>{throw new he(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let n=this.delegate.createRenderer(e,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new Kr(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,i);r.use(s),this.scheduler?.notify(10)}).catch(a=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(i){Tn()}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Kr=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,i,n){this.delegate.insertBefore(o,e,i,n)}removeChild(o,e,i){this.delegate.removeChild(o,e,i)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,i,n){this.delegate.setAttribute(o,e,i,n)}removeAttribute(o,e,i){this.delegate.removeAttribute(o,e,i)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,i,n){this.delegate.setStyle(o,e,i,n)}removeStyle(o,e,i){this.delegate.removeStyle(o,e,i)}setProperty(o,e,i){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,i)),this.delegate.setProperty(o,e,i)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,i){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(o,e,i)),this.delegate.listen(o,e,i)}shouldReplay(o){return this.replay!==null&&o.startsWith(_0)}},C0=new fe("");function fc(t="animations"){return Po("NgAsyncAnimations"),Si([{provide:Jt,useFactory:(o,e,i)=>new I0(o,e,i,t),deps:[ne,ei,ve]},{provide:Ti,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var gc=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=q({type:t,bootstrap:[Xl]})}static{this.\u0275inj=j({providers:[fc()],imports:[qr,wo,hc,an,$l,bt,cc,uc,ue,Wr,oc,zn,zl,sc,Ql]})}}return t})();Ja().bootstrapModule(gc,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
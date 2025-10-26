import{$ as kn,$a as f,A as Bo,Aa as st,Ab as Db,B as nt,Ba as Co,Bb as ht,C as go,Ca as y,Cb as Mb,D as $b,Da as Cb,E as In,Ea as qn,Eb as Xo,F as Rn,Fa as at,Fb as Eb,G as Tn,Ga as Zn,Gb as oe,H as io,Ha as _b,I as On,Ia as O,J as V,Ja as Wo,K as A,Ka as P,L as mo,La as so,M as g,Ma as qo,N as Ho,Na as Kn,O as Nn,Oa as lt,P as D,Pa as Yn,Q as gb,Qa as Qn,R as m,Ra as Ce,S as h,Sa as R,T as it,Ta as _e,U as xn,Ua as Jn,V as me,Va as Zo,W as po,Wa as ct,X as vo,Xa as Xn,Y as U,Ya as Ko,Z as z,Za as Yo,_ as Pn,_a as d,a as c,aa as ro,ab as T,b as E,ba as Ln,bb as oi,ca as Go,cb as I,d as _n,da as Vn,db as Oo,e as Sn,ea as Fn,eb as ei,f as cb,fa as jn,fb as ti,g as ub,ga as eo,gb as bi,h as q,ha as yo,hb as ni,i as X,ia as mb,ib as ii,j as ho,ja as B,jb as ut,k as j,ka as wo,kb as ri,l as p,la as H,lb as No,m as ge,ma as Un,mb as C,n as Dn,na as vb,nb as xo,o as Mn,oa as zn,ob as Sb,p as S,pa as ve,pb as _o,q as db,qa as Bn,qb as si,r as Z,ra as yb,rb as ai,s as hb,sa as Hn,sb as Qo,t as En,ta as wb,tb as li,u as pb,ua as ye,ub as Jo,v as An,va as rt,vb as Po,w as Ro,wa as Gn,wb as G,x as To,xa as Wn,xb as dt,y as zo,ya as w,z as fb,za as we}from"./chunk-W4JD4XBZ.js";var k=new D("");var di=null;function oo(){return di}function Ab(e){di??=e}var Se=class{},Ib=(()=>{class e{historyGo(o){throw new Error("")}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h(hi),providedIn:"platform"})}return e})();var hi=(()=>{class e extends Ib{_location;_history;_doc=h(k);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return oo().getBaseHref(this._doc)}onPopState(o){let b=oo().getGlobalEventTarget(this._doc,"window");return b.addEventListener("popstate",o,!1),()=>b.removeEventListener("popstate",o)}onHashChange(o){let b=oo().getGlobalEventTarget(this._doc,"window");return b.addEventListener("hashchange",o,!1),()=>b.removeEventListener("hashchange",o)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(o){this._location.pathname=o}pushState(o,b,n){this._history.pushState(o,b,n)}replaceState(o,b,n){this._history.replaceState(o,b,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(o=0){this._history.go(o)}getState(){return this._history.state}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function pi(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function ci(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function So(e){return e&&e[0]!=="?"?`?${e}`:e}var ee=(()=>{class e{historyGo(o){throw new Error("")}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h($i),providedIn:"root"})}return e})(),fi=new D(""),$i=(()=>{class e extends ee{_platformLocation;_baseHref;_removeListenerFns=[];constructor(o,b){super(),this._platformLocation=o,this._baseHref=b??this._platformLocation.getBaseHrefFromDOM()??h(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(o){this._removeListenerFns.push(this._platformLocation.onPopState(o),this._platformLocation.onHashChange(o))}getBaseHref(){return this._baseHref}prepareExternalUrl(o){return pi(this._baseHref,o)}path(o=!1){let b=this._platformLocation.pathname+So(this._platformLocation.search),n=this._platformLocation.hash;return n&&o?`${b}${n}`:b}pushState(o,b,n,i){let r=this.prepareExternalUrl(n+So(i));this._platformLocation.pushState(o,b,r)}replaceState(o,b,n,i){let r=this.prepareExternalUrl(n+So(i));this._platformLocation.replaceState(o,b,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(o=0){this._platformLocation.historyGo?.(o)}static \u0275fac=function(b){return new(b||e)(m(Ib),m(fi,8))};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Do=(()=>{class e{_subject=new q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(o){this._locationStrategy=o;let b=this._locationStrategy.getBaseHref();this._basePath=Jr(ci(ui(b))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(o=!1){return this.normalize(this._locationStrategy.path(o))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(o,b=""){return this.path()==this.normalize(o+So(b))}normalize(o){return e.stripTrailingSlash(Qr(this._basePath,ui(o)))}prepareExternalUrl(o){return o&&o[0]!=="/"&&(o="/"+o),this._locationStrategy.prepareExternalUrl(o)}go(o,b="",n=null){this._locationStrategy.pushState(n,"",o,b),this._notifyUrlChangeListeners(this.prepareExternalUrl(o+So(b)),n)}replaceState(o,b="",n=null){this._locationStrategy.replaceState(n,"",o,b),this._notifyUrlChangeListeners(this.prepareExternalUrl(o+So(b)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(o=0){this._locationStrategy.historyGo?.(o)}onUrlChange(o){return this._urlChangeListeners.push(o),this._urlChangeSubscription??=this.subscribe(b=>{this._notifyUrlChangeListeners(b.url,b.state)}),()=>{let b=this._urlChangeListeners.indexOf(o);this._urlChangeListeners.splice(b,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(o="",b){this._urlChangeListeners.forEach(n=>n(o,b))}subscribe(o,b,n){return this._subject.subscribe({next:o,error:b??void 0,complete:n??void 0})}static normalizeQueryParams=So;static joinWithSlash=pi;static stripTrailingSlash=ci;static \u0275fac=function(b){return new(b||e)(m(ee))};static \u0275prov=g({token:e,factory:()=>Yr(),providedIn:"root"})}return e})();function Yr(){return new Do(m(ee))}function Qr(e,t){if(!e||!t.startsWith(e))return t;let o=t.substring(e.length);return o===""||["/",";","?","#"].includes(o[0])?o:t}function ui(e){return e.replace(/\/index.html$/,"")}function Jr(e){if(new RegExp("^(https?:)?//").test(e)){let[,o]=e.split(/\/\/[^\/]+/);return o}return e}function Rb(e,t){t=encodeURIComponent(t);for(let o of e.split(";")){let b=o.indexOf("="),[n,i]=b==-1?[o,""]:[o.slice(0,b),o.slice(b+1)];if(n.trim()===t)return decodeURIComponent(i)}return null}var Tb="browser",gi="server";function pt(e){return e===gi}var De=class{};var gt=new D(""),Pb=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(o,b){this._zone=b,o.forEach(n=>{n.manager=this}),this._plugins=o.slice().reverse()}addEventListener(o,b,n,i){return this._findPluginFor(b).addEventListener(o,b,n,i)}getZone(){return this._zone}_findPluginFor(o){let b=this._eventNameToPlugin.get(o);if(b)return b;if(b=this._plugins.find(i=>i.supports(o)),!b)throw new A(5101,!1);return this._eventNameToPlugin.set(o,b),b}static \u0275fac=function(b){return new(b||e)(m(gt),m(yo))};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),Me=class{_doc;constructor(t){this._doc=t}manager},ft="ng-app-id";function mi(e){for(let t of e)t.remove()}function vi(e,t){let o=t.createElement("style");return o.textContent=e,o}function os(e,t,o,b){let n=e.head?.querySelectorAll(`style[${ft}="${t}"],link[${ft}="${t}"]`);if(n)for(let i of n)i.removeAttribute(ft),i instanceof HTMLLinkElement?b.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&o.set(i.textContent,{usage:0,elements:[i]})}function Nb(e,t){let o=t.createElement("link");return o.setAttribute("rel","stylesheet"),o.setAttribute("href",e),o}var kb=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(o,b,n,i={}){this.doc=o,this.appId=b,this.nonce=n,this.isServer=pt(i),os(o,b,this.inline,this.external),this.hosts.add(o.head)}addStyles(o,b){for(let n of o)this.addUsage(n,this.inline,vi);b?.forEach(n=>this.addUsage(n,this.external,Nb))}removeStyles(o,b){for(let n of o)this.removeUsage(n,this.inline);b?.forEach(n=>this.removeUsage(n,this.external))}addUsage(o,b,n){let i=b.get(o);i?i.usage++:b.set(o,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,n(o,this.doc)))})}removeUsage(o,b){let n=b.get(o);n&&(n.usage--,n.usage<=0&&(mi(n.elements),b.delete(o)))}ngOnDestroy(){for(let[,{elements:o}]of[...this.inline,...this.external])mi(o);this.hosts.clear()}addHost(o){this.hosts.add(o);for(let[b,{elements:n}]of this.inline)n.push(this.addElement(o,vi(b,this.doc)));for(let[b,{elements:n}]of this.external)n.push(this.addElement(o,Nb(b,this.doc)))}removeHost(o){this.hosts.delete(o)}addElement(o,b){return this.nonce&&b.setAttribute("nonce",this.nonce),this.isServer&&b.setAttribute(ft,this.appId),o.appendChild(b)}static \u0275fac=function(b){return new(b||e)(m(k),m(vb),m(yb,8),m(ve))};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),Ob={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Lb=/%COMP%/g;var wi="%COMP%",es=`_nghost-${wi}`,ts=`_ngcontent-${wi}`,bs=!0,ns=new D("",{providedIn:"root",factory:()=>bs});function is(e){return ts.replace(Lb,e)}function rs(e){return es.replace(Lb,e)}function Ci(e,t){return t.map(o=>o.replace(Lb,e))}var Ie=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(o,b,n,i,r,s,a,l=null,u=null){this.eventManager=o,this.sharedStylesHost=b,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=r,this.platformId=s,this.ngZone=a,this.nonce=l,this.tracingService=u,this.platformIsServer=pt(s),this.defaultRenderer=new Ee(o,r,a,this.platformIsServer,this.tracingService)}createRenderer(o,b){if(!o||!b)return this.defaultRenderer;this.platformIsServer&&b.encapsulation===ye.ShadowDom&&(b=E(c({},b),{encapsulation:ye.Emulated}));let n=this.getOrCreateRenderer(o,b);return n instanceof $t?n.applyToHost(o):n instanceof Ae&&n.applyStyles(),n}getOrCreateRenderer(o,b){let n=this.rendererByCompId,i=n.get(b.id);if(!i){let r=this.doc,s=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,_=this.platformIsServer,M=this.tracingService;switch(b.encapsulation){case ye.Emulated:i=new $t(a,l,b,this.appId,u,r,s,_,M);break;case ye.ShadowDom:return new xb(a,l,o,b,r,s,this.nonce,_,M);default:i=new Ae(a,l,b,u,r,s,_,M);break}n.set(b.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(o){this.rendererByCompId.delete(o)}static \u0275fac=function(b){return new(b||e)(m(Pb),m(kb),m(vb),m(ns),m(k),m(ve),m(yo),m(yb),m(Hn,8))};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),Ee=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,o,b,n,i){this.eventManager=t,this.doc=o,this.ngZone=b,this.platformIsServer=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,o){return o?this.doc.createElementNS(Ob[o]||o,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,o){(yi(t)?t.content:t).appendChild(o)}insertBefore(t,o,b){t&&(yi(t)?t.content:t).insertBefore(o,b)}removeChild(t,o){o.remove()}selectRootElement(t,o){let b=typeof t=="string"?this.doc.querySelector(t):t;if(!b)throw new A(-5104,!1);return o||(b.textContent=""),b}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,o,b,n){if(n){o=n+":"+o;let i=Ob[n];i?t.setAttributeNS(i,o,b):t.setAttribute(o,b)}else t.setAttribute(o,b)}removeAttribute(t,o,b){if(b){let n=Ob[b];n?t.removeAttributeNS(n,o):t.removeAttribute(`${b}:${o}`)}else t.removeAttribute(o)}addClass(t,o){t.classList.add(o)}removeClass(t,o){t.classList.remove(o)}setStyle(t,o,b,n){n&(we.DashCase|we.Important)?t.style.setProperty(o,b,n&we.Important?"important":""):t.style[o]=b}removeStyle(t,o,b){b&we.DashCase?t.style.removeProperty(o):t.style[o]=""}setProperty(t,o,b){t!=null&&(t[o]=b)}setValue(t,o){t.nodeValue=o}listen(t,o,b,n){if(typeof t=="string"&&(t=oo().getGlobalEventTarget(this.doc,t),!t))throw new A(5102,!1);let i=this.decoratePreventDefault(b);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,o,i)),this.eventManager.addEventListener(t,o,i,n)}decoratePreventDefault(t){return o=>{if(o==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(o)):t(o))===!1&&o.preventDefault()}}};function yi(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var xb=class extends Ee{sharedStylesHost;hostEl;shadowRoot;constructor(t,o,b,n,i,r,s,a,l){super(t,i,r,a,l),this.sharedStylesHost=o,this.hostEl=b,this.shadowRoot=b.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=Ci(n.id,u);for(let M of u){let N=document.createElement("style");s&&N.setAttribute("nonce",s),N.textContent=M,this.shadowRoot.appendChild(N)}let _=n.getExternalStyles?.();if(_)for(let M of _){let N=Nb(M,i);s&&N.setAttribute("nonce",s),this.shadowRoot.appendChild(N)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,o){return super.appendChild(this.nodeOrShadowRoot(t),o)}insertBefore(t,o,b){return super.insertBefore(this.nodeOrShadowRoot(t),o,b)}removeChild(t,o){return super.removeChild(null,o)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ae=class extends Ee{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,o,b,n,i,r,s,a,l){super(t,i,r,s,a),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n;let u=b.styles;this.styles=l?Ci(l,u):u,this.styleUrls=b.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},$t=class extends Ae{contentAttr;hostAttr;constructor(t,o,b,n,i,r,s,a,l){let u=n+"-"+b.id;super(t,o,b,i,r,s,a,l,u),this.contentAttr=is(u),this.hostAttr=rs(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,o){let b=super.createElement(t,o);return super.setAttribute(b,this.contentAttr,""),b}};var mt=class e extends Se{supportsDOMEvents=!0;static makeCurrent(){Ab(new e)}onAndCancel(t,o,b,n){return t.addEventListener(o,b,n),()=>{t.removeEventListener(o,b,n)}}dispatchEvent(t,o){t.dispatchEvent(o)}remove(t){t.remove()}createElement(t,o){return o=o||this.getDefaultDocument(),o.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,o){return o==="window"?window:o==="document"?t:o==="body"?t.body:null}getBaseHref(t){let o=ss();return o==null?null:as(o)}resetBaseElement(){Re=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Rb(document.cookie,t)}},Re=null;function ss(){return Re=Re||document.head.querySelector("base"),Re?Re.getAttribute("href"):null}function as(e){return new URL(e,document.baseURI).pathname}var ls=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),Si=(()=>{class e extends Me{constructor(o){super(o)}supports(o){return!0}addEventListener(o,b,n,i){return o.addEventListener(b,n,i),()=>this.removeEventListener(o,b,n,i)}removeEventListener(o,b,n,i){return o.removeEventListener(b,n,i)}static \u0275fac=function(b){return new(b||e)(m(k))};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),_i=["alt","control","meta","shift"],cs={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},us={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Di=(()=>{class e extends Me{constructor(o){super(o)}supports(o){return e.parseEventName(o)!=null}addEventListener(o,b,n,i){let r=e.parseEventName(b),s=e.eventCallback(r.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oo().onAndCancel(o,r.domEventName,s,i))}static parseEventName(o){let b=o.toLowerCase().split("."),n=b.shift();if(b.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(b.pop()),r="",s=b.indexOf("code");if(s>-1&&(b.splice(s,1),r="code."),_i.forEach(l=>{let u=b.indexOf(l);u>-1&&(b.splice(u,1),r+=l+".")}),r+=i,b.length!=0||i.length===0)return null;let a={};return a.domEventName=n,a.fullKey=r,a}static matchEventFullKeyCode(o,b){let n=cs[o.key]||o.key,i="";return b.indexOf("code.")>-1&&(n=o.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),_i.forEach(r=>{if(r!==n){let s=us[r];s(o)&&(i+=r+".")}}),i+=n,i===b)}static eventCallback(o,b,n){return i=>{e.matchEventFullKeyCode(i,o)&&n.runGuarded(()=>b(i))}}static _normalizeKey(o){return o==="esc"?"escape":o}static \u0275fac=function(b){return new(b||e)(m(k))};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})();function Vb(e,t,o){return li(c({rootComponent:e,platformRef:o?.platformRef},ds(t)))}function ds(e){return{appProviders:[...gs,...e?.providers??[]],platformProviders:$s}}function hs(){mt.makeCurrent()}function ps(){return new mb}function fs(){return Un(document),document}var $s=[{provide:ve,useValue:Tb},{provide:zn,useValue:hs,multi:!0},{provide:k,useFactory:fs}];var gs=[{provide:xn,useValue:"root"},{provide:mb,useFactory:ps},{provide:gt,useClass:Si,multi:!0,deps:[k]},{provide:gt,useClass:Di,multi:!0,deps:[k]},Ie,kb,Pb,{provide:st,useExisting:Ie},{provide:De,useClass:ls},[]];var Mi=(()=>{class e{_doc;constructor(o){this._doc=o}getTitle(){return this._doc.title}setTitle(o){this._doc.title=o||""}static \u0275fac=function(b){return new(b||e)(m(k))};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var $="primary",He=Symbol("RouteTitle"),Bb=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let o=this.params[t];return Array.isArray(o)?o[0]:o}return null}getAll(t){if(this.has(t)){let o=this.params[t];return Array.isArray(o)?o:[o]}return[]}get keys(){return Object.keys(this.params)}};function Vo(e){return new Bb(e)}function xi(e,t,o){let b=o.path.split("/");if(b.length>e.length||o.pathMatch==="full"&&(t.hasChildren()||b.length<e.length))return null;let n={};for(let i=0;i<b.length;i++){let r=b[i],s=e[i];if(r[0]===":")n[r.substring(1)]=s;else if(r!==s.path)return null}return{consumed:e.slice(0,b.length),posParams:n}}function vs(e,t){if(e.length!==t.length)return!1;for(let o=0;o<e.length;++o)if(!ao(e[o],t[o]))return!1;return!0}function ao(e,t){let o=e?Hb(e):void 0,b=t?Hb(t):void 0;if(!o||!b||o.length!=b.length)return!1;let n;for(let i=0;i<o.length;i++)if(n=o[i],!Pi(e[n],t[n]))return!1;return!0}function Hb(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pi(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let o=[...e].sort(),b=[...t].sort();return o.every((n,i)=>b[i]===n)}else return e===t}function ki(e){return e.length>0?e[e.length-1]:null}function Ao(e){return Dn(e)?e:lt(e)?j(Promise.resolve(e)):p(e)}var ys={exact:Vi,subset:Fi},Li={exact:ws,subset:Cs,ignored:()=>!0};function Ei(e,t,o){return ys[o.paths](e.root,t.root,o.matrixParams)&&Li[o.queryParams](e.queryParams,t.queryParams)&&!(o.fragment==="exact"&&e.fragment!==t.fragment)}function ws(e,t){return ao(e,t)}function Vi(e,t,o){if(!ko(e.segments,t.segments)||!wt(e.segments,t.segments,o)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let b in t.children)if(!e.children[b]||!Vi(e.children[b],t.children[b],o))return!1;return!0}function Cs(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(o=>Pi(e[o],t[o]))}function Fi(e,t,o){return ji(e,t,t.segments,o)}function ji(e,t,o,b){if(e.segments.length>o.length){let n=e.segments.slice(0,o.length);return!(!ko(n,o)||t.hasChildren()||!wt(n,o,b))}else if(e.segments.length===o.length){if(!ko(e.segments,o)||!wt(e.segments,o,b))return!1;for(let n in t.children)if(!e.children[n]||!Fi(e.children[n],t.children[n],b))return!1;return!0}else{let n=o.slice(0,e.segments.length),i=o.slice(e.segments.length);return!ko(e.segments,n)||!wt(e.segments,n,b)||!e.children[$]?!1:ji(e.children[$],t,i,b)}}function wt(e,t,o){return t.every((b,n)=>Li[o](e[n].parameters,b.parameters))}var co=class{root;queryParams;fragment;_queryParamMap;constructor(t=new v([],{}),o={},b=null){this.root=t,this.queryParams=o,this.fragment=b}get queryParamMap(){return this._queryParamMap??=Vo(this.queryParams),this._queryParamMap}toString(){return Ds.serialize(this)}},v=class{segments;children;parent=null;constructor(t,o){this.segments=t,this.children=o,Object.values(o).forEach(b=>b.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ct(this)}},Mo=class{path;parameters;_parameterMap;constructor(t,o){this.path=t,this.parameters=o}get parameterMap(){return this._parameterMap??=Vo(this.parameters),this._parameterMap}toString(){return zi(this)}};function _s(e,t){return ko(e,t)&&e.every((o,b)=>ao(o.parameters,t[b].parameters))}function ko(e,t){return e.length!==t.length?!1:e.every((o,b)=>o.path===t[b].path)}function Ss(e,t){let o=[];return Object.entries(e.children).forEach(([b,n])=>{b===$&&(o=o.concat(t(n,b)))}),Object.entries(e.children).forEach(([b,n])=>{b!==$&&(o=o.concat(t(n,b)))}),o}var Ge=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>new Fo,providedIn:"root"})}return e})(),Fo=class{parse(t){let o=new Wb(t);return new co(o.parseRootSegment(),o.parseQueryParams(),o.parseFragment())}serialize(t){let o=`/${Te(t.root,!0)}`,b=As(t.queryParams),n=typeof t.fragment=="string"?`#${Ms(t.fragment)}`:"";return`${o}${b}${n}`}},Ds=new Fo;function Ct(e){return e.segments.map(t=>zi(t)).join("/")}function Te(e,t){if(!e.hasChildren())return Ct(e);if(t){let o=e.children[$]?Te(e.children[$],!1):"",b=[];return Object.entries(e.children).forEach(([n,i])=>{n!==$&&b.push(`${n}:${Te(i,!1)}`)}),b.length>0?`${o}(${b.join("//")})`:o}else{let o=Ss(e,(b,n)=>n===$?[Te(e.children[$],!1)]:[`${n}:${Te(b,!1)}`]);return Object.keys(e.children).length===1&&e.children[$]!=null?`${Ct(e)}/${o[0]}`:`${Ct(e)}/(${o.join("//")})`}}function Ui(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vt(e){return Ui(e).replace(/%3B/gi,";")}function Ms(e){return encodeURI(e)}function Gb(e){return Ui(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _t(e){return decodeURIComponent(e)}function Ai(e){return _t(e.replace(/\+/g,"%20"))}function zi(e){return`${Gb(e.path)}${Es(e.parameters)}`}function Es(e){return Object.entries(e).map(([t,o])=>`;${Gb(t)}=${Gb(o)}`).join("")}function As(e){let t=Object.entries(e).map(([o,b])=>Array.isArray(b)?b.map(n=>`${vt(o)}=${vt(n)}`).join("&"):`${vt(o)}=${vt(b)}`).filter(o=>o);return t.length?`?${t.join("&")}`:""}var Is=/^[^\/()?;#]+/;function Fb(e){let t=e.match(Is);return t?t[0]:""}var Rs=/^[^\/()?;=#]+/;function Ts(e){let t=e.match(Rs);return t?t[0]:""}var Os=/^[^=?&#]+/;function Ns(e){let t=e.match(Os);return t?t[0]:""}var xs=/^[^&#]+/;function Ps(e){let t=e.match(xs);return t?t[0]:""}var Wb=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new v([],{}):new v([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let o={};this.peekStartsWith("/(")&&(this.capture("/"),o=this.parseParens(!0));let b={};return this.peekStartsWith("(")&&(b=this.parseParens(!1)),(t.length>0||Object.keys(o).length>0)&&(b[$]=new v(t,o)),b}parseSegment(){let t=Fb(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(t),new Mo(_t(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let o=Ts(this.remaining);if(!o)return;this.capture(o);let b="";if(this.consumeOptional("=")){let n=Fb(this.remaining);n&&(b=n,this.capture(b))}t[_t(o)]=_t(b)}parseQueryParam(t){let o=Ns(this.remaining);if(!o)return;this.capture(o);let b="";if(this.consumeOptional("=")){let r=Ps(this.remaining);r&&(b=r,this.capture(b))}let n=Ai(o),i=Ai(b);if(t.hasOwnProperty(n)){let r=t[n];Array.isArray(r)||(r=[r],t[n]=r),r.push(i)}else t[n]=i}parseParens(t){let o={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let b=Fb(this.remaining),n=this.remaining[b.length];if(n!=="/"&&n!==")"&&n!==";")throw new A(4010,!1);let i;b.indexOf(":")>-1?(i=b.slice(0,b.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=$);let r=this.parseChildren();o[i]=Object.keys(r).length===1?r[$]:new v([],r),this.consumeOptional("//")}return o}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new A(4011,!1)}};function Bi(e){return e.segments.length>0?new v([],{[$]:e}):e}function Hi(e){let t={};for(let[b,n]of Object.entries(e.children)){let i=Hi(n);if(b===$&&i.segments.length===0&&i.hasChildren())for(let[r,s]of Object.entries(i.children))t[r]=s;else(i.segments.length>0||i.hasChildren())&&(t[b]=i)}let o=new v(e.segments,t);return ks(o)}function ks(e){if(e.numberOfChildren===1&&e.children[$]){let t=e.children[$];return new v(e.segments.concat(t.segments),t.children)}return e}function Eo(e){return e instanceof co}function Gi(e,t,o=null,b=null){let n=Wi(e);return qi(n,t,o,b)}function Wi(e){let t;function o(i){let r={};for(let a of i.children){let l=o(a);r[a.outlet]=l}let s=new v(i.url,r);return i===e&&(t=s),s}let b=o(e.root),n=Bi(b);return t??n}function qi(e,t,o,b){let n=e;for(;n.parent;)n=n.parent;if(t.length===0)return jb(n,n,n,o,b);let i=Ls(t);if(i.toRoot())return jb(n,n,new v([],{}),o,b);let r=Vs(i,n,e),s=r.processChildren?Ne(r.segmentGroup,r.index,i.commands):Ki(r.segmentGroup,r.index,i.commands);return jb(n,r.segmentGroup,s,o,b)}function Dt(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Pe(e){return typeof e=="object"&&e!=null&&e.outlets}function jb(e,t,o,b,n){let i={};b&&Object.entries(b).forEach(([a,l])=>{i[a]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let r;e===t?r=o:r=Zi(e,t,o);let s=Bi(Hi(r));return new co(s,i,n)}function Zi(e,t,o){let b={};return Object.entries(e.children).forEach(([n,i])=>{i===t?b[n]=o:b[n]=Zi(i,t,o)}),new v(e.segments,b)}var Mt=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,o,b){if(this.isAbsolute=t,this.numberOfDoubleDots=o,this.commands=b,t&&b.length>0&&Dt(b[0]))throw new A(4003,!1);let n=b.find(Pe);if(n&&n!==ki(b))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ls(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Mt(!0,0,e);let t=0,o=!1,b=e.reduce((n,i,r)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let s={};return Object.entries(i.outlets).forEach(([a,l])=>{s[a]=typeof l=="string"?l.split("/"):l}),[...n,{outlets:s}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:r===0?(i.split("/").forEach((s,a)=>{a==0&&s==="."||(a==0&&s===""?o=!0:s===".."?t++:s!=""&&n.push(s))}),n):[...n,i]},[]);return new Mt(o,t,b)}var ne=class{segmentGroup;processChildren;index;constructor(t,o,b){this.segmentGroup=t,this.processChildren=o,this.index=b}};function Vs(e,t,o){if(e.isAbsolute)return new ne(t,!0,0);if(!o)return new ne(t,!1,NaN);if(o.parent===null)return new ne(o,!0,0);let b=Dt(e.commands[0])?0:1,n=o.segments.length-1+b;return Fs(o,n,e.numberOfDoubleDots)}function Fs(e,t,o){let b=e,n=t,i=o;for(;i>n;){if(i-=n,b=b.parent,!b)throw new A(4005,!1);n=b.segments.length}return new ne(b,!1,n-i)}function js(e){return Pe(e[0])?e[0].outlets:{[$]:e}}function Ki(e,t,o){if(e??=new v([],{}),e.segments.length===0&&e.hasChildren())return Ne(e,t,o);let b=Us(e,t,o),n=o.slice(b.commandIndex);if(b.match&&b.pathIndex<e.segments.length){let i=new v(e.segments.slice(0,b.pathIndex),{});return i.children[$]=new v(e.segments.slice(b.pathIndex),e.children),Ne(i,0,n)}else return b.match&&n.length===0?new v(e.segments,{}):b.match&&!e.hasChildren()?qb(e,t,o):b.match?Ne(e,0,n):qb(e,t,o)}function Ne(e,t,o){if(o.length===0)return new v(e.segments,{});{let b=js(o),n={};if(Object.keys(b).some(i=>i!==$)&&e.children[$]&&e.numberOfChildren===1&&e.children[$].segments.length===0){let i=Ne(e.children[$],t,o);return new v(e.segments,i.children)}return Object.entries(b).forEach(([i,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[i]=Ki(e.children[i],t,r))}),Object.entries(e.children).forEach(([i,r])=>{b[i]===void 0&&(n[i]=r)}),new v(e.segments,n)}}function Us(e,t,o){let b=0,n=t,i={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(b>=o.length)return i;let r=e.segments[n],s=o[b];if(Pe(s))break;let a=`${s}`,l=b<o.length-1?o[b+1]:null;if(n>0&&a===void 0)break;if(a&&l&&typeof l=="object"&&l.outlets===void 0){if(!Ri(a,l,r))return i;b+=2}else{if(!Ri(a,{},r))return i;b++}n++}return{match:!0,pathIndex:n,commandIndex:b}}function qb(e,t,o){let b=e.segments.slice(0,t),n=0;for(;n<o.length;){let i=o[n];if(Pe(i)){let a=zs(i.outlets);return new v(b,a)}if(n===0&&Dt(o[0])){let a=e.segments[t];b.push(new Mo(a.path,Ii(o[0]))),n++;continue}let r=Pe(i)?i.outlets[$]:`${i}`,s=n<o.length-1?o[n+1]:null;r&&s&&Dt(s)?(b.push(new Mo(r,Ii(s))),n+=2):(b.push(new Mo(r,{})),n++)}return new v(b,{})}function zs(e){let t={};return Object.entries(e).forEach(([o,b])=>{typeof b=="string"&&(b=[b]),b!==null&&(t[o]=qb(new v([],{}),0,b))}),t}function Ii(e){let t={};return Object.entries(e).forEach(([o,b])=>t[o]=`${b}`),t}function Ri(e,t,o){return e==o.path&&ao(t,o.parameters)}var St="imperative",L=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(L||{}),Y=class{id;url;constructor(t,o){this.id=t,this.url=o}},jo=class extends Y{type=L.NavigationStart;navigationTrigger;restoredState;constructor(t,o,b="imperative",n=null){super(t,o),this.navigationTrigger=b,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},bo=class extends Y{urlAfterRedirects;type=L.NavigationEnd;constructor(t,o,b){super(t,o),this.urlAfterRedirects=b}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},W=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(W||{}),ke=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(ke||{}),lo=class extends Y{reason;code;type=L.NavigationCancel;constructor(t,o,b,n){super(t,o),this.reason=b,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},fo=class extends Y{reason;code;type=L.NavigationSkipped;constructor(t,o,b,n){super(t,o),this.reason=b,this.code=n}},re=class extends Y{error;target;type=L.NavigationError;constructor(t,o,b,n){super(t,o),this.error=b,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Le=class extends Y{urlAfterRedirects;state;type=L.RoutesRecognized;constructor(t,o,b,n){super(t,o),this.urlAfterRedirects=b,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Et=class extends Y{urlAfterRedirects;state;type=L.GuardsCheckStart;constructor(t,o,b,n){super(t,o),this.urlAfterRedirects=b,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},At=class extends Y{urlAfterRedirects;state;shouldActivate;type=L.GuardsCheckEnd;constructor(t,o,b,n,i){super(t,o),this.urlAfterRedirects=b,this.state=n,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},It=class extends Y{urlAfterRedirects;state;type=L.ResolveStart;constructor(t,o,b,n){super(t,o),this.urlAfterRedirects=b,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rt=class extends Y{urlAfterRedirects;state;type=L.ResolveEnd;constructor(t,o,b,n){super(t,o),this.urlAfterRedirects=b,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tt=class{route;type=L.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ot=class{route;type=L.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Nt=class{snapshot;type=L.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xt=class{snapshot;type=L.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pt=class{snapshot;type=L.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},kt=class{snapshot;type=L.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ve=class{},se=class{url;navigationBehaviorOptions;constructor(t,o){this.url=t,this.navigationBehaviorOptions=o}};function Bs(e,t){return e.providers&&!e._injector&&(e._injector=_b(e.providers,t,`Route: ${e.path}`)),e._injector??t}function to(e){return e.outlet||$}function Hs(e,t){let o=e.filter(b=>to(b)===t);return o.push(...e.filter(b=>to(b)!==t)),o}function We(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let o=t.routeConfig;if(o?._loadedInjector)return o._loadedInjector;if(o?._injector)return o._injector}return null}var Lt=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return We(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new ce(this.rootInjector)}},ce=(()=>{class e{rootInjector;contexts=new Map;constructor(o){this.rootInjector=o}onChildOutletCreated(o,b){let n=this.getOrCreateContext(o);n.outlet=b,this.contexts.set(o,n)}onChildOutletDestroyed(o){let b=this.getContext(o);b&&(b.outlet=null,b.attachRef=null)}onOutletDeactivated(){let o=this.contexts;return this.contexts=new Map,o}onOutletReAttached(o){this.contexts=o}getOrCreateContext(o){let b=this.getContext(o);return b||(b=new Lt(this.rootInjector),this.contexts.set(o,b)),b}getContext(o){return this.contexts.get(o)||null}static \u0275fac=function(b){return new(b||e)(m(me))};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Vt=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let o=this.pathFromRoot(t);return o.length>1?o[o.length-2]:null}children(t){let o=Zb(t,this._root);return o?o.children.map(b=>b.value):[]}firstChild(t){let o=Zb(t,this._root);return o&&o.children.length>0?o.children[0].value:null}siblings(t){let o=Kb(t,this._root);return o.length<2?[]:o[o.length-2].children.map(n=>n.value).filter(n=>n!==t)}pathFromRoot(t){return Kb(t,this._root).map(o=>o.value)}};function Zb(e,t){if(e===t.value)return t;for(let o of t.children){let b=Zb(e,o);if(b)return b}return null}function Kb(e,t){if(e===t.value)return[t];for(let o of t.children){let b=Kb(e,o);if(b.length)return b.unshift(t),b}return[]}var K=class{value;children;constructor(t,o){this.value=t,this.children=o}toString(){return`TreeNode(${this.value})`}};function be(e){let t={};return e&&e.children.forEach(o=>t[o.value.outlet]=o),t}var Fe=class extends Vt{snapshot;constructor(t,o){super(t),this.snapshot=o,bn(this,t)}toString(){return this.snapshot.toString()}};function Yi(e){let t=Gs(e),o=new X([new Mo("",{})]),b=new X({}),n=new X({}),i=new X({}),r=new X(""),s=new no(o,b,i,r,n,$,e,t.root);return s.snapshot=t.root,new Fe(new K(s,[]),t)}function Gs(e){let t={},o={},b={},n="",i=new Lo([],t,b,n,o,$,e,null,{});return new je("",new K(i,[]))}var no=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,o,b,n,i,r,s,a){this.urlSubject=t,this.paramsSubject=o,this.queryParamsSubject=b,this.fragmentSubject=n,this.dataSubject=i,this.outlet=r,this.component=s,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(S(l=>l[He]))??p(void 0),this.url=t,this.params=o,this.queryParams=b,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(S(t=>Vo(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(S(t=>Vo(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ft(e,t,o="emptyOnly"){let b,{routeConfig:n}=e;return t!==null&&(o==="always"||n?.path===""||!t.component&&!t.routeConfig?.loadComponent)?b={params:c(c({},t.params),e.params),data:c(c({},t.data),e.data),resolve:c(c(c(c({},e.data),t.data),n?.data),e._resolvedData)}:b={params:c({},e.params),data:c({},e.data),resolve:c(c({},e.data),e._resolvedData??{})},n&&Ji(n)&&(b.resolve[He]=n.title),b}var Lo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[He]}constructor(t,o,b,n,i,r,s,a,l){this.url=t,this.params=o,this.queryParams=b,this.fragment=n,this.data=i,this.outlet=r,this.component=s,this.routeConfig=a,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Vo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Vo(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(b=>b.toString()).join("/"),o=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${o}')`}},je=class extends Vt{url;constructor(t,o){super(o),this.url=t,bn(this,o)}toString(){return Qi(this._root)}};function bn(e,t){t.value._routerState=e,t.children.forEach(o=>bn(e,o))}function Qi(e){let t=e.children.length>0?` { ${e.children.map(Qi).join(", ")} } `:"";return`${e.value}${t}`}function Ub(e){if(e.snapshot){let t=e.snapshot,o=e._futureSnapshot;e.snapshot=o,ao(t.queryParams,o.queryParams)||e.queryParamsSubject.next(o.queryParams),t.fragment!==o.fragment&&e.fragmentSubject.next(o.fragment),ao(t.params,o.params)||e.paramsSubject.next(o.params),vs(t.url,o.url)||e.urlSubject.next(o.url),ao(t.data,o.data)||e.dataSubject.next(o.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Yb(e,t){let o=ao(e.params,t.params)&&_s(e.url,t.url),b=!e.parent!=!t.parent;return o&&!b&&(!e.parent||Yb(e.parent,t.parent))}function Ji(e){return typeof e.title=="string"||e.title===null}var Xi=new D(""),qe=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=$;activateEvents=new eo;deactivateEvents=new eo;attachEvents=new eo;detachEvents=new eo;routerOutletData=B(void 0);parentContexts=h(ce);location=h(qn);changeDetector=h(Qo);inputBinder=h(Bt,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(o){if(o.name){let{firstChange:b,previousValue:n}=o.name;if(b)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(o){return this.parentContexts.getContext(o)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let o=this.parentContexts.getContext(this.name);o?.route&&(o.attachRef?this.attach(o.attachRef,o.route):this.activateWith(o.route,o.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let o=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(o.instance),o}attach(o,b){this.activated=o,this._activatedRoute=b,this.location.insert(o.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(o.instance)}deactivate(){if(this.activated){let o=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(o)}}activateWith(o,b){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=o;let n=this.location,r=o.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,a=new Qb(o,s,n.injector,this.routerOutletData);this.activated=n.createComponent(r,{index:n.length,injector:a,environmentInjector:b}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(b){return new(b||e)};static \u0275dir=P({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[vo]})}return e})(),Qb=class{route;childContexts;parent;outletData;constructor(t,o,b,n){this.route=t,this.childContexts=o,this.parent=b,this.outletData=n}get(t,o){return t===no?this.route:t===ce?this.childContexts:t===Xi?this.outletData:this.parent.get(t,o)}},Bt=new D("");var nn=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275cmp=O({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(b,n){b&1&&T(0,"router-outlet")},dependencies:[qe],encapsulation:2})}return e})();function rn(e){let t=e.children&&e.children.map(rn),o=t?E(c({},e),{children:t}):c({},e);return!o.component&&!o.loadComponent&&(t||o.loadChildren)&&o.outlet&&o.outlet!==$&&(o.component=nn),o}function Ws(e,t,o){let b=Ue(e,t._root,o?o._root:void 0);return new Fe(b,t)}function Ue(e,t,o){if(o&&e.shouldReuseRoute(t.value,o.value.snapshot)){let b=o.value;b._futureSnapshot=t.value;let n=qs(e,t,o);return new K(b,n)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let r=i.route;return r.value._futureSnapshot=t.value,r.children=t.children.map(s=>Ue(e,s)),r}}let b=Zs(t.value),n=t.children.map(i=>Ue(e,i));return new K(b,n)}}function qs(e,t,o){return t.children.map(b=>{for(let n of o.children)if(e.shouldReuseRoute(b.value,n.value.snapshot))return Ue(e,b,n);return Ue(e,b)})}function Zs(e){return new no(new X(e.url),new X(e.params),new X(e.queryParams),new X(e.fragment),new X(e.data),e.outlet,e.component,e)}var ae=class{redirectTo;navigationBehaviorOptions;constructor(t,o){this.redirectTo=t,this.navigationBehaviorOptions=o}},or="ngNavigationCancelingError";function jt(e,t){let{redirectTo:o,navigationBehaviorOptions:b}=Eo(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,n=er(!1,W.Redirect);return n.url=o,n.navigationBehaviorOptions=b,n}function er(e,t){let o=new Error(`NavigationCancelingError: ${e||""}`);return o[or]=!0,o.cancellationCode=t,o}function Ks(e){return tr(e)&&Eo(e.url)}function tr(e){return!!e&&e[or]}var Ys=(e,t,o,b)=>S(n=>(new Jb(t,n.targetRouterState,n.currentRouterState,o,b).activate(e),n)),Jb=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,o,b,n,i){this.routeReuseStrategy=t,this.futureState=o,this.currState=b,this.forwardEvent=n,this.inputBindingEnabled=i}activate(t){let o=this.futureState._root,b=this.currState?this.currState._root:null;this.deactivateChildRoutes(o,b,t),Ub(this.futureState.root),this.activateChildRoutes(o,b,t)}deactivateChildRoutes(t,o,b){let n=be(o);t.children.forEach(i=>{let r=i.value.outlet;this.deactivateRoutes(i,n[r],b),delete n[r]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,b)})}deactivateRoutes(t,o,b){let n=t.value,i=o?o.value:null;if(n===i)if(n.component){let r=b.getContext(n.outlet);r&&this.deactivateChildRoutes(t,o,r.children)}else this.deactivateChildRoutes(t,o,b);else i&&this.deactivateRouteAndItsChildren(o,b)}deactivateRouteAndItsChildren(t,o){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,o):this.deactivateRouteAndOutlet(t,o)}detachAndStoreRouteSubtree(t,o){let b=o.getContext(t.value.outlet),n=b&&t.value.component?b.children:o,i=be(t);for(let r of Object.values(i))this.deactivateRouteAndItsChildren(r,n);if(b&&b.outlet){let r=b.outlet.detach(),s=b.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:r,route:t,contexts:s})}}deactivateRouteAndOutlet(t,o){let b=o.getContext(t.value.outlet),n=b&&t.value.component?b.children:o,i=be(t);for(let r of Object.values(i))this.deactivateRouteAndItsChildren(r,n);b&&(b.outlet&&(b.outlet.deactivate(),b.children.onOutletDeactivated()),b.attachRef=null,b.route=null)}activateChildRoutes(t,o,b){let n=be(o);t.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],b),this.forwardEvent(new kt(i.value.snapshot))}),t.children.length&&this.forwardEvent(new xt(t.value.snapshot))}activateRoutes(t,o,b){let n=t.value,i=o?o.value:null;if(Ub(n),n===i)if(n.component){let r=b.getOrCreateContext(n.outlet);this.activateChildRoutes(t,o,r.children)}else this.activateChildRoutes(t,o,b);else if(n.component){let r=b.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),r.children.onOutletReAttached(s.contexts),r.attachRef=s.componentRef,r.route=s.route.value,r.outlet&&r.outlet.attach(s.componentRef,s.route.value),Ub(s.route.value),this.activateChildRoutes(t,null,r.children)}else r.attachRef=null,r.route=n,r.outlet&&r.outlet.activateWith(n,r.injector),this.activateChildRoutes(t,null,r.children)}else this.activateChildRoutes(t,null,b)}},Ut=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},ie=class{component;route;constructor(t,o){this.component=t,this.route=o}};function Qs(e,t,o){let b=e._root,n=t?t._root:null;return Oe(b,n,o,[b.value])}function Js(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function ue(e,t){let o=Symbol(),b=t.get(e,o);return b===o?typeof e=="function"&&!Nn(e)?e:t.get(e):b}function Oe(e,t,o,b,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=be(t);return e.children.forEach(r=>{Xs(r,i[r.value.outlet],o,b.concat([r.value]),n),delete i[r.value.outlet]}),Object.entries(i).forEach(([r,s])=>xe(s,o.getContext(r),n)),n}function Xs(e,t,o,b,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,r=t?t.value:null,s=o?o.getContext(e.value.outlet):null;if(r&&i.routeConfig===r.routeConfig){let a=oa(r,i,i.routeConfig.runGuardsAndResolvers);a?n.canActivateChecks.push(new Ut(b)):(i.data=r.data,i._resolvedData=r._resolvedData),i.component?Oe(e,t,s?s.children:null,b,n):Oe(e,t,o,b,n),a&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new ie(s.outlet.component,r))}else r&&xe(t,s,n),n.canActivateChecks.push(new Ut(b)),i.component?Oe(e,null,s?s.children:null,b,n):Oe(e,null,o,b,n);return n}function oa(e,t,o){if(typeof o=="function")return o(e,t);switch(o){case"pathParamsChange":return!ko(e.url,t.url);case"pathParamsOrQueryParamsChange":return!ko(e.url,t.url)||!ao(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Yb(e,t)||!ao(e.queryParams,t.queryParams);case"paramsChange":default:return!Yb(e,t)}}function xe(e,t,o){let b=be(e),n=e.value;Object.entries(b).forEach(([i,r])=>{n.component?t?xe(r,t.children.getContext(i),o):xe(r,null,o):xe(r,t,o)}),n.component?t&&t.outlet&&t.outlet.isActivated?o.canDeactivateChecks.push(new ie(t.outlet.component,n)):o.canDeactivateChecks.push(new ie(null,n)):o.canDeactivateChecks.push(new ie(null,n))}function Ze(e){return typeof e=="function"}function ea(e){return typeof e=="boolean"}function ta(e){return e&&Ze(e.canLoad)}function ba(e){return e&&Ze(e.canActivate)}function na(e){return e&&Ze(e.canActivateChild)}function ia(e){return e&&Ze(e.canDeactivate)}function ra(e){return e&&Ze(e.canMatch)}function br(e){return e instanceof Mn||e?.name==="EmptyError"}var yt=Symbol("INITIAL_VALUE");function le(){return io(e=>db(e.map(t=>t.pipe(Bo(1),Tn(yt)))).pipe(S(t=>{for(let o of t)if(o!==!0){if(o===yt)return yt;if(o===!1||sa(o))return o}return!0}),Ro(t=>t!==yt),Bo(1)))}function sa(e){return Eo(e)||e instanceof ae}function aa(e,t){return Z(o=>{let{targetSnapshot:b,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:r}}=o;return r.length===0&&i.length===0?p(E(c({},o),{guardsResult:!0})):la(r,b,n,e).pipe(Z(s=>s&&ea(s)?ca(b,i,e,t):p(s)),S(s=>E(c({},o),{guardsResult:s})))})}function la(e,t,o,b){return j(e).pipe(Z(n=>fa(n.component,n.route,o,t,b)),go(n=>n!==!0,!0))}function ca(e,t,o,b){return j(t).pipe(zo(n=>En(da(n.route.parent,b),ua(n.route,b),pa(e,n.path,o),ha(e,n.route,o))),go(n=>n!==!0,!0))}function ua(e,t){return e!==null&&t&&t(new Pt(e)),p(!0)}function da(e,t){return e!==null&&t&&t(new Nt(e)),p(!0)}function ha(e,t,o){let b=t.routeConfig?t.routeConfig.canActivate:null;if(!b||b.length===0)return p(!0);let n=b.map(i=>pb(()=>{let r=We(t)??o,s=ue(i,r),a=ba(s)?s.canActivate(t,e):po(r,()=>s(t,e));return Ao(a).pipe(go())}));return p(n).pipe(le())}function pa(e,t,o){let b=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(r=>Js(r)).filter(r=>r!==null).map(r=>pb(()=>{let s=r.guards.map(a=>{let l=We(r.node)??o,u=ue(a,l),_=na(u)?u.canActivateChild(b,e):po(l,()=>u(b,e));return Ao(_).pipe(go())});return p(s).pipe(le())}));return p(i).pipe(le())}function fa(e,t,o,b,n){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return p(!0);let r=i.map(s=>{let a=We(t)??n,l=ue(s,a),u=ia(l)?l.canDeactivate(e,t,o,b):po(a,()=>l(e,t,o,b));return Ao(u).pipe(go())});return p(r).pipe(le())}function $a(e,t,o,b){let n=t.canLoad;if(n===void 0||n.length===0)return p(!0);let i=n.map(r=>{let s=ue(r,e),a=ta(s)?s.canLoad(t,o):po(e,()=>s(t,o));return Ao(a)});return p(i).pipe(le(),nr(b))}function nr(e){return Sn(V(t=>{if(typeof t!="boolean")throw jt(e,t)}),S(t=>t===!0))}function ga(e,t,o,b){let n=t.canMatch;if(!n||n.length===0)return p(!0);let i=n.map(r=>{let s=ue(r,e),a=ra(s)?s.canMatch(t,o):po(e,()=>s(t,o));return Ao(a)});return p(i).pipe(le(),nr(b))}var ze=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Be=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function te(e){return ge(new ze(e))}function ma(e){return ge(new A(4e3,!1))}function va(e){return ge(er(!1,W.GuardRejected))}var Xb=class{urlSerializer;urlTree;constructor(t,o){this.urlSerializer=t,this.urlTree=o}lineralizeSegments(t,o){let b=[],n=o.root;for(;;){if(b=b.concat(n.segments),n.numberOfChildren===0)return p(b);if(n.numberOfChildren>1||!n.children[$])return ma(`${t.redirectTo}`);n=n.children[$]}}applyRedirectCommands(t,o,b,n,i){if(typeof o!="string"){let s=o,{queryParams:a,fragment:l,routeConfig:u,url:_,outlet:M,params:N,data:x,title:Q}=n,J=po(i,()=>s({params:N,data:x,queryParams:a,fragment:l,routeConfig:u,url:_,outlet:M,title:Q}));if(J instanceof co)throw new Be(J);o=J}let r=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,b);if(o[0]==="/")throw new Be(r);return r}applyRedirectCreateUrlTree(t,o,b,n){let i=this.createSegmentGroup(t,o.root,b,n);return new co(i,this.createQueryParams(o.queryParams,this.urlTree.queryParams),o.fragment)}createQueryParams(t,o){let b={};return Object.entries(t).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let s=i.substring(1);b[n]=o[s]}else b[n]=i}),b}createSegmentGroup(t,o,b,n){let i=this.createSegments(t,o.segments,b,n),r={};return Object.entries(o.children).forEach(([s,a])=>{r[s]=this.createSegmentGroup(t,a,b,n)}),new v(i,r)}createSegments(t,o,b,n){return o.map(i=>i.path[0]===":"?this.findPosParam(t,i,n):this.findOrReturn(i,b))}findPosParam(t,o,b){let n=b[o.path.substring(1)];if(!n)throw new A(4001,!1);return n}findOrReturn(t,o){let b=0;for(let n of o){if(n.path===t.path)return o.splice(b),n;b++}return t}},on={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ya(e,t,o,b,n){let i=ir(e,t,o);return i.matched?(b=Bs(t,b),ga(b,t,o,n).pipe(S(r=>r===!0?i:c({},on)))):p(i)}function ir(e,t,o){if(t.path==="**")return wa(o);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||o.length>0)?c({},on):{matched:!0,consumedSegments:[],remainingSegments:o,parameters:{},positionalParamSegments:{}};let n=(t.matcher||xi)(o,e,t);if(!n)return c({},on);let i={};Object.entries(n.posParams??{}).forEach(([s,a])=>{i[s]=a.path});let r=n.consumed.length>0?c(c({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:o.slice(n.consumed.length),parameters:r,positionalParamSegments:n.posParams??{}}}function wa(e){return{matched:!0,parameters:e.length>0?ki(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Ti(e,t,o,b){return o.length>0&&Sa(e,o,b)?{segmentGroup:new v(t,_a(b,new v(o,e.children))),slicedSegments:[]}:o.length===0&&Da(e,o,b)?{segmentGroup:new v(e.segments,Ca(e,o,b,e.children)),slicedSegments:o}:{segmentGroup:new v(e.segments,e.children),slicedSegments:o}}function Ca(e,t,o,b){let n={};for(let i of o)if(Ht(e,t,i)&&!b[to(i)]){let r=new v([],{});n[to(i)]=r}return c(c({},b),n)}function _a(e,t){let o={};o[$]=t;for(let b of e)if(b.path===""&&to(b)!==$){let n=new v([],{});o[to(b)]=n}return o}function Sa(e,t,o){return o.some(b=>Ht(e,t,b)&&to(b)!==$)}function Da(e,t,o){return o.some(b=>Ht(e,t,b))}function Ht(e,t,o){return(e.hasChildren()||t.length>0)&&o.pathMatch==="full"?!1:o.path===""}function Ma(e,t,o){return t.length===0&&!e.children[o]}var en=class{};function Ea(e,t,o,b,n,i,r="emptyOnly"){return new tn(e,t,o,b,n,r,i).recognize()}var Aa=31,tn=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,o,b,n,i,r,s){this.injector=t,this.configLoader=o,this.rootComponentType=b,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=r,this.urlSerializer=s,this.applyRedirects=new Xb(this.urlSerializer,this.urlTree)}noMatchError(t){return new A(4002,`'${t.segmentGroup}'`)}recognize(){let t=Ti(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(S(({children:o,rootSnapshot:b})=>{let n=new K(b,o),i=new je("",n),r=Gi(b,[],this.urlTree.queryParams,this.urlTree.fragment);return r.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(r),{state:i,tree:r}}))}match(t){let o=new Lo([],Object.freeze({}),Object.freeze(c({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),$,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,$,o).pipe(S(b=>({children:b,rootSnapshot:o})),To(b=>{if(b instanceof Be)return this.urlTree=b.urlTree,this.match(b.urlTree.root);throw b instanceof ze?this.noMatchError(b):b}))}processSegmentGroup(t,o,b,n,i){return b.segments.length===0&&b.hasChildren()?this.processChildren(t,o,b,i):this.processSegment(t,o,b,b.segments,n,!0,i).pipe(S(r=>r instanceof K?[r]:[]))}processChildren(t,o,b,n){let i=[];for(let r of Object.keys(b.children))r==="primary"?i.unshift(r):i.push(r);return j(i).pipe(zo(r=>{let s=b.children[r],a=Hs(o,r);return this.processSegmentGroup(t,a,s,r,n)}),Rn((r,s)=>(r.push(...s),r)),fb(null),In(),Z(r=>{if(r===null)return te(b);let s=rr(r);return Ia(s),p(s)}))}processSegment(t,o,b,n,i,r,s){return j(o).pipe(zo(a=>this.processSegmentAgainstRoute(a._injector??t,o,a,b,n,i,r,s).pipe(To(l=>{if(l instanceof ze)return p(null);throw l}))),go(a=>!!a),To(a=>{if(br(a))return Ma(b,n,i)?p(new en):te(b);throw a}))}processSegmentAgainstRoute(t,o,b,n,i,r,s,a){return to(b)!==r&&(r===$||!Ht(n,i,b))?te(n):b.redirectTo===void 0?this.matchSegmentAgainstRoute(t,n,b,i,r,a):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(t,n,o,b,i,r,a):te(n)}expandSegmentAgainstRouteUsingRedirect(t,o,b,n,i,r,s){let{matched:a,parameters:l,consumedSegments:u,positionalParamSegments:_,remainingSegments:M}=ir(o,n,i);if(!a)return te(o);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Aa&&(this.allowRedirects=!1));let N=new Lo(i,l,Object.freeze(c({},this.urlTree.queryParams)),this.urlTree.fragment,Oi(n),to(n),n.component??n._loadedComponent??null,n,Ni(n)),x=Ft(N,s,this.paramsInheritanceStrategy);N.params=Object.freeze(x.params),N.data=Object.freeze(x.data);let Q=this.applyRedirects.applyRedirectCommands(u,n.redirectTo,_,N,t);return this.applyRedirects.lineralizeSegments(n,Q).pipe(Z(J=>this.processSegment(t,b,o,J.concat(M),r,!1,s)))}matchSegmentAgainstRoute(t,o,b,n,i,r){let s=ya(o,b,n,t,this.urlSerializer);return b.path==="**"&&(o.children={}),s.pipe(io(a=>a.matched?(t=b._injector??t,this.getChildConfig(t,b,n).pipe(io(({routes:l})=>{let u=b._loadedInjector??t,{parameters:_,consumedSegments:M,remainingSegments:N}=a,x=new Lo(M,_,Object.freeze(c({},this.urlTree.queryParams)),this.urlTree.fragment,Oi(b),to(b),b.component??b._loadedComponent??null,b,Ni(b)),Q=Ft(x,r,this.paramsInheritanceStrategy);x.params=Object.freeze(Q.params),x.data=Object.freeze(Q.data);let{segmentGroup:J,slicedSegments:lb}=Ti(o,M,N,l);if(lb.length===0&&J.hasChildren())return this.processChildren(u,l,J,x).pipe(S(bt=>new K(x,bt)));if(l.length===0&&lb.length===0)return p(new K(x,[]));let Kr=to(b)===i;return this.processSegment(u,l,J,lb,Kr?$:i,!0,x).pipe(S(bt=>new K(x,bt instanceof K?[bt]:[])))}))):te(o)))}getChildConfig(t,o,b){return o.children?p({routes:o.children,injector:t}):o.loadChildren?o._loadedRoutes!==void 0?p({routes:o._loadedRoutes,injector:o._loadedInjector}):$a(t,o,b,this.urlSerializer).pipe(Z(n=>n?this.configLoader.loadChildren(t,o).pipe(V(i=>{o._loadedRoutes=i.routes,o._loadedInjector=i.injector})):va(o))):p({routes:[],injector:t})}};function Ia(e){e.sort((t,o)=>t.value.outlet===$?-1:o.value.outlet===$?1:t.value.outlet.localeCompare(o.value.outlet))}function Ra(e){let t=e.value.routeConfig;return t&&t.path===""}function rr(e){let t=[],o=new Set;for(let b of e){if(!Ra(b)){t.push(b);continue}let n=t.find(i=>b.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...b.children),o.add(n)):t.push(b)}for(let b of o){let n=rr(b.children);t.push(new K(b.value,n))}return t.filter(b=>!o.has(b))}function Oi(e){return e.data||{}}function Ni(e){return e.resolve||{}}function Ta(e,t,o,b,n,i){return Z(r=>Ea(e,t,o,b,r.extractedUrl,n,i).pipe(S(({state:s,tree:a})=>E(c({},r),{targetSnapshot:s,urlAfterRedirects:a}))))}function Oa(e,t){return Z(o=>{let{targetSnapshot:b,guards:{canActivateChecks:n}}=o;if(!n.length)return p(o);let i=new Set(n.map(a=>a.route)),r=new Set;for(let a of i)if(!r.has(a))for(let l of sr(a))r.add(l);let s=0;return j(r).pipe(zo(a=>i.has(a)?Na(a,b,e,t):(a.data=Ft(a,a.parent,e).resolve,p(void 0))),V(()=>s++),$b(1),Z(a=>s===r.size?p(o):ho))})}function sr(e){let t=e.children.map(o=>sr(o)).flat();return[e,...t]}function Na(e,t,o,b){let n=e.routeConfig,i=e._resolve;return n?.title!==void 0&&!Ji(n)&&(i[He]=n.title),xa(i,e,t,b).pipe(S(r=>(e._resolvedData=r,e.data=Ft(e,e.parent,o).resolve,null)))}function xa(e,t,o,b){let n=Hb(e);if(n.length===0)return p({});let i={};return j(n).pipe(Z(r=>Pa(e[r],t,o,b).pipe(go(),V(s=>{if(s instanceof ae)throw jt(new Fo,s);i[r]=s}))),$b(1),S(()=>i),To(r=>br(r)?ho:ge(r)))}function Pa(e,t,o,b){let n=We(t)??b,i=ue(e,n),r=i.resolve?i.resolve(t,o):po(n,()=>i(t,o));return Ao(r)}function zb(e){return io(t=>{let o=e(t);return o?j(o).pipe(S(()=>t)):p(t)})}var sn=(()=>{class e{buildTitle(o){let b,n=o.root;for(;n!==void 0;)b=this.getResolvedTitleForRoute(n)??b,n=n.children.find(i=>i.outlet===$);return b}getResolvedTitleForRoute(o){return o.data[He]}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h(ar),providedIn:"root"})}return e})(),ar=(()=>{class e extends sn{title;constructor(o){super(),this.title=o}updateTitle(o){let b=this.buildTitle(o);b!==void 0&&this.title.setTitle(b)}static \u0275fac=function(b){return new(b||e)(m(Mi))};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ke=new D("",{providedIn:"root",factory:()=>({})}),Ye=new D(""),lr=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(si);loadComponent(o){if(this.componentLoaders.get(o))return this.componentLoaders.get(o);if(o._loadedComponent)return p(o._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(o);let b=Ao(o.loadComponent()).pipe(S(ur),V(i=>{this.onLoadEndListener&&this.onLoadEndListener(o),o._loadedComponent=i}),nt(()=>{this.componentLoaders.delete(o)})),n=new ub(b,()=>new q).pipe(cb());return this.componentLoaders.set(o,n),n}loadChildren(o,b){if(this.childrenLoaders.get(b))return this.childrenLoaders.get(b);if(b._loadedRoutes)return p({routes:b._loadedRoutes,injector:b._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(b);let i=cr(b,this.compiler,o,this.onLoadEndListener).pipe(nt(()=>{this.childrenLoaders.delete(b)})),r=new ub(i,()=>new q).pipe(cb());return this.childrenLoaders.set(b,r),r}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function cr(e,t,o,b){return Ao(e.loadChildren()).pipe(S(ur),Z(n=>n instanceof Zn||Array.isArray(n)?p(n):j(t.compileModuleAsync(n))),S(n=>{b&&b(e);let i,r,s=!1;return Array.isArray(n)?(r=n,s=!0):(i=n.create(o).injector,r=i.get(Ye,[],{optional:!0,self:!0}).flat()),{routes:r.map(rn),injector:i}}))}function ka(e){return e&&typeof e=="object"&&"default"in e}function ur(e){return ka(e)?e.default:e}var Gt=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h(La),providedIn:"root"})}return e})(),La=(()=>{class e{shouldProcessUrl(o){return!0}extract(o){return o}merge(o,b){return o}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),dr=new D("");var hr=new D(""),pr=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new q;transitionAbortSubject=new q;configLoader=h(lr);environmentInjector=h(me);destroyRef=h(Vn);urlSerializer=h(Ge);rootContexts=h(ce);location=h(Do);inputBindingEnabled=h(Bt,{optional:!0})!==null;titleStrategy=h(sn);options=h(Ke,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Gt);createViewTransition=h(dr,{optional:!0});navigationErrorHandler=h(hr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let o=n=>this.events.next(new Tt(n)),b=n=>this.events.next(new Ot(n));this.configLoader.onLoadEndListener=b,this.configLoader.onLoadStartListener=o,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(o){let b=++this.navigationId;this.transitions?.next(E(c({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:b}))}setupNavigations(o){return this.transitions=new X(null),this.transitions.pipe(Ro(b=>b!==null),io(b=>{let n=!1,i=!1;return p(b).pipe(io(r=>{if(this.navigationId>b.id)return this.cancelNavigationTransition(b,"",W.SupersededByNewNavigation),ho;this.currentTransition=b,this.currentNavigation={id:r.id,initialUrl:r.rawUrl,extractedUrl:r.extractedUrl,targetBrowserUrl:typeof r.extras.browserUrl=="string"?this.urlSerializer.parse(r.extras.browserUrl):r.extras.browserUrl,trigger:r.source,extras:r.extras,previousNavigation:this.lastSuccessfulNavigation?E(c({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let s=!o.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=r.extras.onSameUrlNavigation??o.onSameUrlNavigation;if(!s&&a!=="reload"){let l="";return this.events.next(new fo(r.id,this.urlSerializer.serialize(r.rawUrl),l,ke.IgnoredSameUrlNavigation)),r.resolve(!1),ho}if(this.urlHandlingStrategy.shouldProcessUrl(r.rawUrl))return p(r).pipe(io(l=>(this.events.next(new jo(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?ho:Promise.resolve(l))),Ta(this.environmentInjector,this.configLoader,this.rootComponentType,o.config,this.urlSerializer,this.paramsInheritanceStrategy),V(l=>{b.targetSnapshot=l.targetSnapshot,b.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=E(c({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Le(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(r.currentRawUrl)){let{id:l,extractedUrl:u,source:_,restoredState:M,extras:N}=r,x=new jo(l,this.urlSerializer.serialize(u),_,M);this.events.next(x);let Q=Yi(this.rootComponentType).snapshot;return this.currentTransition=b=E(c({},r),{targetSnapshot:Q,urlAfterRedirects:u,extras:E(c({},N),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,p(b)}else{let l="";return this.events.next(new fo(r.id,this.urlSerializer.serialize(r.extractedUrl),l,ke.IgnoredByUrlHandlingStrategy)),r.resolve(!1),ho}}),V(r=>{let s=new Et(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot);this.events.next(s)}),S(r=>(this.currentTransition=b=E(c({},r),{guards:Qs(r.targetSnapshot,r.currentSnapshot,this.rootContexts)}),b)),aa(this.environmentInjector,r=>this.events.next(r)),V(r=>{if(b.guardsResult=r.guardsResult,r.guardsResult&&typeof r.guardsResult!="boolean")throw jt(this.urlSerializer,r.guardsResult);let s=new At(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot,!!r.guardsResult);this.events.next(s)}),Ro(r=>r.guardsResult?!0:(this.cancelNavigationTransition(r,"",W.GuardRejected),!1)),zb(r=>{if(r.guards.canActivateChecks.length!==0)return p(r).pipe(V(s=>{let a=new It(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),io(s=>{let a=!1;return p(s).pipe(Oa(this.paramsInheritanceStrategy,this.environmentInjector),V({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",W.NoDataFromResolver)}}))}),V(s=>{let a=new Rt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),zb(r=>{let s=a=>{let l=[];a.routeConfig?.loadComponent&&!a.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(a.routeConfig).pipe(V(u=>{a.component=u}),S(()=>{})));for(let u of a.children)l.push(...s(u));return l};return db(s(r.targetSnapshot.root)).pipe(fb(null),Bo(1))}),zb(()=>this.afterPreactivation()),io(()=>{let{currentSnapshot:r,targetSnapshot:s}=b,a=this.createViewTransition?.(this.environmentInjector,r.root,s.root);return a?j(a).pipe(S(()=>b)):p(b)}),S(r=>{let s=Ws(o.routeReuseStrategy,r.targetSnapshot,r.currentRouterState);return this.currentTransition=b=E(c({},r),{targetRouterState:s}),this.currentNavigation.targetRouterState=s,b}),V(()=>{this.events.next(new Ve)}),Ys(this.rootContexts,o.routeReuseStrategy,r=>this.events.next(r),this.inputBindingEnabled),Bo(1),V({next:r=>{n=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new bo(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects))),this.titleStrategy?.updateTitle(r.targetRouterState.snapshot),r.resolve(!0)},complete:()=>{n=!0}}),On(this.transitionAbortSubject.pipe(V(r=>{throw r}))),nt(()=>{!n&&!i&&this.cancelNavigationTransition(b,"",W.SupersededByNewNavigation),this.currentTransition?.id===b.id&&(this.currentNavigation=null,this.currentTransition=null)}),To(r=>{if(this.destroyed)return b.resolve(!1),ho;if(i=!0,tr(r))this.events.next(new lo(b.id,this.urlSerializer.serialize(b.extractedUrl),r.message,r.cancellationCode)),Ks(r)?this.events.next(new se(r.url,r.navigationBehaviorOptions)):b.resolve(!1);else{let s=new re(b.id,this.urlSerializer.serialize(b.extractedUrl),r,b.targetSnapshot??void 0);try{let a=po(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof ae){let{message:l,cancellationCode:u}=jt(this.urlSerializer,a);this.events.next(new lo(b.id,this.urlSerializer.serialize(b.extractedUrl),l,u)),this.events.next(new se(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),r}catch(a){this.options.resolveNavigationPromiseOnError?b.resolve(!1):b.reject(a)}}return ho}))}))}cancelNavigationTransition(o,b,n){let i=new lo(o.id,this.urlSerializer.serialize(o.extractedUrl),b,n);this.events.next(i),o.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let o=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),b=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return o.toString()!==b?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Va(e){return e!==St}var fr=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h(Fa),providedIn:"root"})}return e})(),zt=class{shouldDetach(t){return!1}store(t,o){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,o){return t.routeConfig===o.routeConfig}},Fa=(()=>{class e extends zt{static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),$r=(()=>{class e{urlSerializer=h(Ge);options=h(Ke,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Do);urlHandlingStrategy=h(Gt);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new co;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:o,initialUrl:b,targetBrowserUrl:n}){let i=o!==void 0?this.urlHandlingStrategy.merge(o,b):b,r=n??i;return r instanceof co?this.urlSerializer.serialize(r):r}commitTransition({targetRouterState:o,finalUrl:b,initialUrl:n}){b&&o?(this.currentUrlTree=b,this.rawUrlTree=this.urlHandlingStrategy.merge(b,n),this.routerState=o):this.rawUrlTree=n}routerState=Yi(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:o}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,o??this.rawUrlTree)}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:()=>h(ja),providedIn:"root"})}return e})(),ja=(()=>{class e extends $r{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(o){return this.location.subscribe(b=>{b.type==="popstate"&&setTimeout(()=>{o(b.url,b.state,"popstate")})})}handleRouterEvent(o,b){o instanceof jo?this.updateStateMemento():o instanceof fo?this.commitTransition(b):o instanceof Le?this.urlUpdateStrategy==="eager"&&(b.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(b),b)):o instanceof Ve?(this.commitTransition(b),this.urlUpdateStrategy==="deferred"&&!b.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(b),b)):o instanceof lo&&(o.code===W.GuardRejected||o.code===W.NoDataFromResolver)?this.restoreHistory(b):o instanceof re?this.restoreHistory(b,!0):o instanceof bo&&(this.lastSuccessfulId=o.id,this.currentPageId=this.browserPageId)}setBrowserUrl(o,{extras:b,id:n}){let{replaceUrl:i,state:r}=b;if(this.location.isCurrentPathEqualTo(o)||i){let s=this.browserPageId,a=c(c({},r),this.generateNgRouterState(n,s));this.location.replaceState(o,"",a)}else{let s=c(c({},r),this.generateNgRouterState(n,this.browserPageId+1));this.location.go(o,"",s)}}restoreHistory(o,b=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===o.finalUrl&&i===0&&(this.resetInternalState(o),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(b&&this.resetInternalState(o),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(o,b){return this.canceledNavigationResolution==="computed"?{navigationId:o,\u0275routerPageId:b}:{navigationId:o}}static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function an(e,t){e.events.pipe(Ro(o=>o instanceof bo||o instanceof lo||o instanceof re||o instanceof fo),S(o=>o instanceof bo||o instanceof fo?0:(o instanceof lo?o.code===W.Redirect||o.code===W.SupersededByNewNavigation:!1)?2:1),Ro(o=>o!==2),Bo(1)).subscribe(()=>{t()})}var Ua={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},za={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},de=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(Kn);stateManager=h($r);options=h(Ke,{optional:!0})||{};pendingTasks=h(jn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h(pr);urlSerializer=h(Ge);location=h(Do);urlHandlingStrategy=h(Gt);_events=new q;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(fr);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(Ye,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(Bt,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:o=>{this.console.warn(o)}}),this.subscribeToNavigationEvents()}eventsSubscription=new _n;subscribeToNavigationEvents(){let o=this.navigationTransitions.events.subscribe(b=>{try{let n=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(b,i),b instanceof lo&&b.code!==W.Redirect&&b.code!==W.SupersededByNewNavigation)this.navigated=!0;else if(b instanceof bo)this.navigated=!0;else if(b instanceof se){let r=b.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(b.url,n.currentRawUrl),a=c({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Va(n.source)},r);this.scheduleNavigation(s,St,null,a,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}Ha(b)&&this._events.next(b)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(o)}resetRootComponentType(o){this.routerState.root.component=o,this.navigationTransitions.rootComponentType=o}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),St,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((o,b,n)=>{this.navigateToSyncWithBrowser(o,n,b)})}navigateToSyncWithBrowser(o,b,n){let i={replaceUrl:!0},r=n?.navigationId?n:null;if(n){let a=c({},n);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(i.state=a)}let s=this.parseUrl(o);this.scheduleNavigation(s,b,r,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(o){this.config=o.map(rn),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(o,b={}){let{relativeTo:n,queryParams:i,fragment:r,queryParamsHandling:s,preserveFragment:a}=b,l=a?this.currentUrlTree.fragment:r,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=c(c({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let _;try{let M=n?n.snapshot:this.routerState.snapshot.root;_=Wi(M)}catch{(typeof o[0]!="string"||o[0][0]!=="/")&&(o=[]),_=this.currentUrlTree.root}return qi(_,o,u,l??null)}navigateByUrl(o,b={skipLocationChange:!1}){let n=Eo(o)?o:this.parseUrl(o),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,St,null,b)}navigate(o,b={skipLocationChange:!1}){return Ba(o),this.navigateByUrl(this.createUrlTree(o,b),b)}serializeUrl(o){return this.urlSerializer.serialize(o)}parseUrl(o){try{return this.urlSerializer.parse(o)}catch{return this.urlSerializer.parse("/")}}isActive(o,b){let n;if(b===!0?n=c({},Ua):b===!1?n=c({},za):n=b,Eo(o))return Ei(this.currentUrlTree,o,n);let i=this.parseUrl(o);return Ei(this.currentUrlTree,i,n)}removeEmptyProps(o){return Object.entries(o).reduce((b,[n,i])=>(i!=null&&(b[n]=i),b),{})}scheduleNavigation(o,b,n,i,r){if(this.disposed)return Promise.resolve(!1);let s,a,l;r?(s=r.resolve,a=r.reject,l=r.promise):l=new Promise((_,M)=>{s=_,a=M});let u=this.pendingTasks.add();return an(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:b,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:o,extras:i,resolve:s,reject:a,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(_=>Promise.reject(_))}static \u0275fac=function(b){return new(b||e)};static \u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ba(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new A(4008,!1)}function Ha(e){return!(e instanceof Ve)&&!(e instanceof se)}var Io=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new q;constructor(o,b,n,i,r,s){this.router=o,this.route=b,this.tabIndexAttribute=n,this.renderer=i,this.el=r,this.locationStrategy=s;let a=r.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=o.events.subscribe(l=>{l instanceof bo&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(o){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",o)}ngOnChanges(o){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(o){o==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Eo(o)?this.routerLinkInput=o:this.routerLinkInput=Array.isArray(o)?o:[o],this.setTabIndexIfNotOnNativeEl("0"))}onClick(o,b,n,i,r){let s=this.urlTree;if(s===null||this.isAnchorElement&&(o!==0||b||n||i||r||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let o=this.urlTree;this.href=o!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(o)):null;let b=this.href===null?null:Gn(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",b)}applyAttributeValue(o,b){let n=this.renderer,i=this.el.nativeElement;b!==null?n.setAttribute(i,o,b):n.removeAttribute(i,o)}get urlTree(){return this.routerLinkInput===null?null:Eo(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(b){return new(b||e)(y(de),y(no),Ln("tabindex"),y(Co),y(wo),y(ee))};static \u0275dir=P({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(b,n){b&1&&I("click",function(r){return n.onClick(r.button,r.ctrlKey,r.shiftKey,r.altKey,r.metaKey)}),b&2&&Ce("target",n.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Jo],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Jo],replaceUrl:[2,"replaceUrl","replaceUrl",Jo],routerLink:"routerLink"},features:[vo]})}return e})(),ln=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new eo;constructor(o,b,n,i,r){this.router=o,this.element=b,this.renderer=n,this.cdr=i,this.link=r,this.routerEventsSubscription=o.events.subscribe(s=>{s instanceof bo&&this.update()})}ngAfterContentInit(){p(this.links.changes,p(null)).pipe(hb()).subscribe(o=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let o=[...this.links.toArray(),this.link].filter(b=>!!b).map(b=>b.onChanges);this.linkInputChangesSubscription=j(o).pipe(hb()).subscribe(b=>{this._isActive!==this.isLinkActive(this.router)(b)&&this.update()})}set routerLinkActive(o){let b=Array.isArray(o)?o:o.split(" ");this.classes=b.filter(n=>!!n)}ngOnChanges(o){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let o=this.hasActiveLinks();this.classes.forEach(b=>{o?this.renderer.addClass(this.element.nativeElement,b):this.renderer.removeClass(this.element.nativeElement,b)}),o&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==o&&(this._isActive=o,this.cdr.markForCheck(),this.isActiveChange.emit(o))})}isLinkActive(o){let b=Wa(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return n=>{let i=n.urlTree;return i?o.isActive(i,b):!1}}hasActiveLinks(){let o=this.isLinkActive(this.router);return this.link&&o(this.link)||this.links.some(o)}static \u0275fac=function(b){return new(b||e)(y(de),y(wo),y(Co),y(Qo),y(Io,8))};static \u0275dir=P({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(b,n,i){if(b&1&&bi(i,Io,5),b&2){let r;ni(r=ii())&&(n.links=r)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[vo]})}return e})();function Wa(e){return!!e.paths}var qa=new D("");function cn(e,...t){return it([{provide:Ye,multi:!0,useValue:e},[],{provide:no,useFactory:Za,deps:[de]},{provide:Yn,multi:!0,useFactory:Ka},t.map(o=>o.\u0275providers)])}function Za(e){return e.routerState.root}function Ka(){let e=h(Go);return t=>{let o=e.get(Qn);if(t!==o.components[0])return;let b=e.get(de),n=e.get(Ya);e.get(Qa)===1&&b.initialNavigation(),e.get(Ja,null,gb.Optional)?.setUpPreloading(),e.get(qa,null,gb.Optional)?.init(),b.resetRootComponentType(o.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var Ya=new D("",{factory:()=>new q}),Qa=new D("",{providedIn:"root",factory:()=>1});var Ja=new D("");var Xa=["*"],uo=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["lone-div"]],ngContentSelectors:Xa,decls:2,vars:0,template:function(o,b){o&1&&(ei(),d(0,"div"),ti(1),f())},styles:["div[_ngcontent-%COMP%]{display:inline-block;padding:10px;background-color:var(--lone-div-bg, #333333);border-radius:5px;border-width:5px;border-style:solid;border-color:#101010 #9a2d28 #eda93c #88c1b0;color:#f8f6e7}"]})};var Wt=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(o,b){o&1&&(d(0,"lone-div"),C(1," Software developer based in Parma, Italy "),f())},dependencies:[uo],styles:["lone-div[_ngcontent-%COMP%]{display:block;margin:20px;font-size:20px}"]})};function o2(e,t){if(e&1&&(d(0,"a",1),T(1,"img",3),f()),e&2){let o=Oo().$implicit;R("routerLink",o.link),w(),R("src",o.badge,rt)("alt",o.alt)}}function e2(e,t){if(e&1&&(d(0,"a",2),T(1,"img",3),f()),e&2){let o=Oo().$implicit;R("href",o.link,rt),w(),R("src",o.badge,rt)("alt",o.alt)}}function t2(e,t){if(e&1&&qo(0,o2,2,3,"a",1)(1,e2,2,3,"a",2),e&2){let o=t.$implicit;Zo(o.is_route?0:1)}}var qt=class e{project=B.required();title=G(()=>this.project().title);body=G(()=>this.project().body);buttons=G(()=>this.project().buttons);static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-project"]],inputs:{project:[1,"project"]},decls:8,vars:2,consts:[[1,"buttons"],[3,"routerLink"],[3,"href"],[3,"src","alt"]],template:function(o,b){o&1&&(d(0,"lone-div")(1,"h1"),C(2),f(),d(3,"p"),C(4),f(),d(5,"div",0),Ko(6,t2,2,1,null,null,ct),f()()),o&2&&(w(2),xo(b.title()),w(2),xo(b.body()),w(2),Yo(b.buttons()))},dependencies:[uo,Io],styles:["lone-div[_ngcontent-%COMP%]    >div{display:flex;flex-direction:column;height:100%;font-size:20px}lone-div[_ngcontent-%COMP%]    >div .buttons{display:flex;justify-content:flex-end;margin-top:auto;margin-bottom:0}lone-div[_ngcontent-%COMP%]    >div .buttons a, lone-div[_ngcontent-%COMP%]    >div .buttons a:active{margin:0 10px;color:#333}lone-div[_ngcontent-%COMP%]    >div .buttons a img, lone-div[_ngcontent-%COMP%]    >div .buttons a:active img{border:1px solid #101010;border-radius:5px}"]})};var gr=[{title:"Daniele ti fa il CV",body:"A windows only (for now) application to create and manage a curriculum vitae using Electron. The app works by starting a local backend server (written in ASP.NET) on startup which manages an API to generate the PDF file for the CV and to manipulate user data. The data is displayed and can be modified by the user via the UI (written in Angular)",buttons:[{link:"https://github.com/Astgenne4922/Daniele-ti-fa-il-CV",is_route:!1,badge:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}]},{title:"Angular Game of Life Background",body:"An angular 19+ component that plays Conway's Game of Life while sitting in the background of the page",buttons:[{link:"/ng-game-of-life",is_route:!0,badge:"https://img.shields.io/badge/Demo-grey.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImJvcmRlci1yYWRpdXM6IDVweDsiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iODAiIGZpbGw9IiMxMDEwMTAiIC8+CiAgICA8cmVjdCB4PSIwIiB5PSI4MCIgd2lkdGg9IjMzIiBoZWlnaHQ9IjIwIiBmaWxsPSIjODhjMWIwIiAvPgogICAgPHJlY3QgeD0iMzMiIHk9IjgwIiB3aWR0aD0iMzMiIGhlaWdodD0iMjAiIGZpbGw9IiNlZGE5M2MiIC8+CiAgICA8cmVjdCB4PSI2NiIgeT0iODAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzlhMmQyOCIgLz4KCjwvc3ZnPg==",alt:"Demo"},{link:"https://github.com/Astgenne4922/angular-game-of-life",is_route:!1,badge:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}]}];function i2(e,t){if(e&1&&T(0,"app-project",1),e&2){let o=t.$implicit;R("project",o)}}var Zt=class e{projects=gr;static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-projects"]],decls:3,vars:0,consts:[["id","grid-container"],[3,"project"]],template:function(o,b){o&1&&(d(0,"div",0),Ko(1,i2,1,1,"app-project",1,ct),f()),o&2&&(w(),Yo(b.projects))},dependencies:[qt],styles:["#grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;gap:20px;margin:20px}#grid-container[_ngcontent-%COMP%]   app-project[_ngcontent-%COMP%]:nth-child(3n+1){--lone-div-bg: #8a8da1}#grid-container[_ngcontent-%COMP%]   app-project[_ngcontent-%COMP%]:nth-child(3n+2){--lone-div-bg: #84b5ac}#grid-container[_ngcontent-%COMP%]   app-project[_ngcontent-%COMP%]:nth-child(3n+3){--lone-div-bg: #cacb74}"]})};var Kt=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-about"]],decls:15,vars:0,consts:[["id","github"],["href","https://github.com/Astgenne4922"],["src","https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white","alt","Github"],["id","chat"],["href","https://discordapp.com/users/astgenne_"],["src","https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white","alt","Discord"],["href","https://t.me/Astgenne"],["src","https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white","alt","Telegram"],["id","mail"],["href","mailto:danicandido02@gmail.com"]],template:function(o,b){o&1&&(d(0,"lone-div",0),C(1," All my projects are on "),d(2,"a",1),T(3,"img",2),f()(),d(4,"lone-div",3),C(5," I'm also available on "),d(6,"a",4),T(7,"img",5),f(),C(8," and "),d(9,"a",6),T(10,"img",7),f()(),d(11,"lone-div",8),C(12," You can mail me at "),d(13,"a",9),C(14,"danicandido02@gmail.com"),f()())},dependencies:[uo],styles:["lone-div[_ngcontent-%COMP%]{display:block;margin:15vh 20px;font-size:20px}lone-div#github[_ngcontent-%COMP%]{--lone-div-bg: #8a8da1}lone-div#chat[_ngcontent-%COMP%]{--lone-div-bg: #84b5ac}lone-div#mail[_ngcontent-%COMP%]{--lone-div-bg: #cacb74}lone-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], lone-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{color:#333}lone-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], lone-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active   img[_ngcontent-%COMP%]{vertical-align:middle;border:1px solid #101010;border-radius:5px}"]})};var Er=(()=>{class e{_renderer;_elementRef;onChange=o=>{};onTouched=()=>{};constructor(o,b){this._renderer=o,this._elementRef=b}setProperty(o,b){this._renderer.setProperty(this._elementRef.nativeElement,o,b)}registerOnTouched(o){this.onTouched=o}registerOnChange(o){this.onChange=o}setDisabledState(o){this.setProperty("disabled",o)}static \u0275fac=function(b){return new(b||e)(y(Co),y(wo))};static \u0275dir=P({type:e})}return e})(),ob=(()=>{class e extends Er{static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,features:[so]})}return e})(),tt=new D("");var r2={provide:tt,useExisting:mo(()=>eb),multi:!0};function s2(){let e=oo()?oo().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var a2=new D(""),eb=(()=>{class e extends Er{_compositionMode;_composing=!1;constructor(o,b,n){super(o,b),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!s2())}writeValue(o){let b=o??"";this.setProperty("value",b)}_handleInput(o){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(o)}_compositionStart(){this._composing=!0}_compositionEnd(o){this._composing=!1,this._compositionMode&&this.onChange(o)}static \u0275fac=function(b){return new(b||e)(y(Co),y(wo),y(a2,8))};static \u0275dir=P({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(b,n){b&1&&I("input",function(r){return n._handleInput(r.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(r){return n._compositionEnd(r.target.value)})},standalone:!1,features:[_o([r2]),so]})}return e})();var fn=new D(""),l2=new D("");function c2(e){return t=>{if(t.value==null||e==null)return null;let o=parseFloat(t.value);return!isNaN(o)&&o<e?{min:{min:e,actual:t.value}}:null}}function u2(e){return t=>{if(t.value==null||e==null)return null;let o=parseFloat(t.value);return!isNaN(o)&&o>e?{max:{max:e,actual:t.value}}:null}}function mr(e){return null}function Ar(e){return e!=null}function Ir(e){return lt(e)?j(e):e}function Rr(e){let t={};return e.forEach(o=>{t=o!=null?c(c({},t),o):t}),Object.keys(t).length===0?null:t}function Tr(e,t){return t.map(o=>o(e))}function d2(e){return!e.validate}function Or(e){return e.map(t=>d2(t)?t:o=>t.validate(o))}function h2(e){if(!e)return null;let t=e.filter(Ar);return t.length==0?null:function(o){return Rr(Tr(o,t))}}function Nr(e){return e!=null?h2(Or(e)):null}function p2(e){if(!e)return null;let t=e.filter(Ar);return t.length==0?null:function(o){let b=Tr(o,t).map(Ir);return An(b).pipe(S(Rr))}}function xr(e){return e!=null?p2(Or(e)):null}function vr(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function f2(e){return e._rawValidators}function $2(e){return e._rawAsyncValidators}function un(e){return e?Array.isArray(e)?e:[e]:[]}function Qt(e,t){return Array.isArray(e)?e.includes(t):e===t}function yr(e,t){let o=un(t);return un(e).forEach(n=>{Qt(o,n)||o.push(n)}),o}function wr(e,t){return un(t).filter(o=>!Qt(e,o))}var Jt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Nr(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=xr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,o){return this.control?this.control.hasError(t,o):!1}getError(t,o){return this.control?this.control.getError(t,o):null}},dn=class extends Jt{name;get formDirective(){return null}get path(){return null}},et=class extends Jt{_parent=null;name=null;valueAccessor=null},hn=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},g2={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Tu=E(c({},g2),{"[class.ng-submitted]":"isSubmitted"}),Pr=(()=>{class e extends hn{constructor(o){super(o)}static \u0275fac=function(b){return new(b||e)(y(et,2))};static \u0275dir=P({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(b,n){b&2&&Jn("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[so]})}return e})();var Qe="VALID",Yt="INVALID",he="PENDING",Je="DISABLED",fe=class{},Xt=class extends fe{value;source;constructor(t,o){super(),this.value=t,this.source=o}},Xe=class extends fe{pristine;source;constructor(t,o){super(),this.pristine=t,this.source=o}},ot=class extends fe{touched;source;constructor(t,o){super(),this.touched=t,this.source=o}},pe=class extends fe{status;source;constructor(t,o){super(),this.status=t,this.source=o}};function m2(e){return(tb(e)?e.validators:e)||null}function v2(e){return Array.isArray(e)?Nr(e):e||null}function y2(e,t){return(tb(t)?t.asyncValidators:e)||null}function w2(e){return Array.isArray(e)?xr(e):e||null}function tb(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var pn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,o){this._assignValidators(t),this._assignAsyncValidators(o)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Po(this.statusReactive)}set status(t){Po(()=>this.statusReactive.set(t))}_status=G(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===Qe}get invalid(){return this.status===Yt}get pending(){return this.status==he}get disabled(){return this.status===Je}get enabled(){return this.status!==Je}errors;get pristine(){return Po(this.pristineReactive)}set pristine(t){Po(()=>this.pristineReactive.set(t))}_pristine=G(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return Po(this.touchedReactive)}set touched(t){Po(()=>this.touchedReactive.set(t))}_touched=G(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(yr(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(yr(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(wr(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(wr(t,this._rawAsyncValidators))}hasValidator(t){return Qt(this._rawValidators,t)}hasAsyncValidator(t){return Qt(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let o=this.touched===!1;this.touched=!0;let b=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(E(c({},t),{sourceControl:b})),o&&t.emitEvent!==!1&&this._events.next(new ot(!0,b))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(o=>o.markAllAsTouched(t))}markAsUntouched(t={}){let o=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let b=t.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:b})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,b),o&&t.emitEvent!==!1&&this._events.next(new ot(!1,b))}markAsDirty(t={}){let o=this.pristine===!0;this.pristine=!1;let b=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(E(c({},t),{sourceControl:b})),o&&t.emitEvent!==!1&&this._events.next(new Xe(!1,b))}markAsPristine(t={}){let o=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let b=t.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,b),o&&t.emitEvent!==!1&&this._events.next(new Xe(!0,b))}markAsPending(t={}){this.status=he;let o=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new pe(this.status,o)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(E(c({},t),{sourceControl:o}))}disable(t={}){let o=this._parentMarkedDirty(t.onlySelf);this.status=Je,this.errors=null,this._forEachChild(n=>{n.disable(E(c({},t),{onlySelf:!0}))}),this._updateValue();let b=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Xt(this.value,b)),this._events.next(new pe(this.status,b)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(E(c({},t),{skipPristineCheck:o}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){let o=this._parentMarkedDirty(t.onlySelf);this.status=Qe,this._forEachChild(b=>{b.enable(E(c({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(E(c({},t),{skipPristineCheck:o}),this),this._onDisabledChange.forEach(b=>b(!1))}_updateAncestors(t,o){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},o),this._parent._updateTouched({},o))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let b=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qe||this.status===he)&&this._runAsyncValidator(b,t.emitEvent)}let o=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Xt(this.value,o)),this._events.next(new pe(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(E(c({},t),{sourceControl:o}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(o=>o._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Je:Qe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,o){if(this.asyncValidator){this.status=he,this._hasOwnPendingAsyncValidator={emitEvent:o!==!1};let b=Ir(this.asyncValidator(this));this._asyncValidationSubscription=b.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:o,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,o={}){this.errors=t,this._updateControlsErrors(o.emitEvent!==!1,this,o.shouldHaveEmitted)}get(t){let o=t;return o==null||(Array.isArray(o)||(o=o.split(".")),o.length===0)?null:o.reduce((b,n)=>b&&b._find(n),this)}getError(t,o){let b=o?this.get(o):this;return b&&b.errors?b.errors[t]:null}hasError(t,o){return!!this.getError(t,o)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,o,b){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||b)&&this._events.next(new pe(this.status,o)),this._parent&&this._parent._updateControlsErrors(t,o,b)}_initObservables(){this.valueChanges=new eo,this.statusChanges=new eo}_calculateStatus(){return this._allControlsDisabled()?Je:this.errors?Yt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(he)?he:this._anyControlsHaveStatus(Yt)?Yt:Qe}_anyControlsHaveStatus(t){return this._anyControls(o=>o.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,o){let b=!this._anyControlsDirty(),n=this.pristine!==b;this.pristine=b,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,o),n&&this._events.next(new Xe(this.pristine,o))}_updateTouched(t={},o){this.touched=this._anyControlsTouched(),this._events.next(new ot(this.touched,o)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,o)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){tb(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let o=this._parent&&this._parent.dirty;return!t&&!!o&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=v2(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=w2(this._rawAsyncValidators)}};var kr=new D("",{providedIn:"root",factory:()=>$n}),$n="always";function C2(e,t){return[...t.path,e]}function _2(e,t,o=$n){D2(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||o==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),M2(e,t),A2(e,t),E2(e,t),S2(e,t)}function Cr(e,t){e.forEach(o=>{o.registerOnValidatorChange&&o.registerOnValidatorChange(t)})}function S2(e,t){if(t.valueAccessor.setDisabledState){let o=b=>{t.valueAccessor.setDisabledState(b)};e.registerOnDisabledChange(o),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(o)})}}function D2(e,t){let o=f2(e);t.validator!==null?e.setValidators(vr(o,t.validator)):typeof o=="function"&&e.setValidators([o]);let b=$2(e);t.asyncValidator!==null?e.setAsyncValidators(vr(b,t.asyncValidator)):typeof b=="function"&&e.setAsyncValidators([b]);let n=()=>e.updateValueAndValidity();Cr(t._rawValidators,n),Cr(t._rawAsyncValidators,n)}function M2(e,t){t.valueAccessor.registerOnChange(o=>{e._pendingValue=o,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Lr(e,t)})}function E2(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Lr(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function Lr(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function A2(e,t){let o=(b,n)=>{t.valueAccessor.writeValue(b),n&&t.viewToModelUpdate(b)};e.registerOnChange(o),t._registerOnDestroy(()=>{e._unregisterOnChange(o)})}function I2(e,t){if(!e.hasOwnProperty("model"))return!1;let o=e.model;return o.isFirstChange()?!0:!Object.is(t,o.currentValue)}function R2(e){return Object.getPrototypeOf(e.constructor)===ob}function T2(e,t){if(!t)return null;Array.isArray(t);let o,b,n;return t.forEach(i=>{i.constructor===eb?o=i:R2(i)?b=i:n=i}),n||b||o||null}function _r(e,t){let o=e.indexOf(t);o>-1&&e.splice(o,1)}function Sr(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var O2=class extends pn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,o,b){super(m2(o),y2(b,o)),this._applyFormState(t),this._setUpdateStrategy(o),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),tb(o)&&(o.nonNullable||o.initialValueIsDefault)&&(Sr(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,o={}){this.value=this._pendingValue=t,this._onChange.length&&o.emitModelToViewChange!==!1&&this._onChange.forEach(b=>b(this.value,o.emitViewToModelChange!==!1)),this.updateValueAndValidity(o)}patchValue(t,o={}){this.setValue(t,o)}reset(t=this.defaultValue,o={}){this._applyFormState(t),this.markAsPristine(o),this.markAsUntouched(o),this.setValue(this.value,o),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){_r(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){_r(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Sr(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var N2={provide:et,useExisting:mo(()=>gn)},Dr=Promise.resolve(),gn=(()=>{class e extends et{_changeDetectorRef;callSetDisabledState;control=new O2;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new eo;constructor(o,b,n,i,r,s){super(),this._changeDetectorRef=r,this.callSetDisabledState=s,this._parent=o,this._setValidators(b),this._setAsyncValidators(n),this.valueAccessor=T2(this,i)}ngOnChanges(o){if(this._checkForErrors(),!this._registered||"name"in o){if(this._registered&&(this._checkName(),this.formDirective)){let b=o.name.previousValue;this.formDirective.removeControl({name:b,path:this._getPath(b)})}this._setUpControl()}"isDisabled"in o&&this._updateDisabled(o),I2(o,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(o){this.viewModel=o,this.update.emit(o)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_2(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(o){Dr.then(()=>{this.control.setValue(o,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(o){let b=o.isDisabled.currentValue,n=b!==0&&Jo(b);Dr.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(o){return this._parent?C2(o,this._parent):[o]}static \u0275fac=function(b){return new(b||e)(y(dn,9),y(fn,10),y(l2,10),y(tt,10),y(Qo,8),y(kr,8))};static \u0275dir=P({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[_o([N2]),so,vo]})}return e})();var x2={provide:tt,useExisting:mo(()=>mn),multi:!0},mn=(()=>{class e extends ob{writeValue(o){let b=o??"";this.setProperty("value",b)}registerOnChange(o){this.onChange=b=>{o(b==""?null:parseFloat(b))}}static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(b,n){b&1&&I("input",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[_o([x2]),so]})}return e})();var P2={provide:tt,useExisting:mo(()=>bb),multi:!0};function Vr(e,t){return e==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function k2(e){return e.split(":")[0]}var bb=(()=>{class e extends ob{value;_optionMap=new Map;_idCounter=0;set compareWith(o){this._compareWith=o}_compareWith=Object.is;writeValue(o){this.value=o;let b=this._getOptionId(o),n=Vr(b,o);this.setProperty("value",n)}registerOnChange(o){this.onChange=b=>{this.value=this._getOptionValue(b),o(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(o){for(let b of this._optionMap.keys())if(this._compareWith(this._optionMap.get(b),o))return b;return null}_getOptionValue(o){let b=k2(o);return this._optionMap.has(b)?this._optionMap.get(b):o}static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(b,n){b&1&&I("change",function(r){return n.onChange(r.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[_o([P2]),so]})}return e})(),Fr=(()=>{class e{_element;_renderer;_select;id;constructor(o,b,n){this._element=o,this._renderer=b,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(o){this._select!=null&&(this._select._optionMap.set(this.id,o),this._setElementValue(Vr(this.id,o)),this._select.writeValue(this._select.value))}set value(o){this._setElementValue(o),this._select&&this._select.writeValue(this._select.value)}_setElementValue(o){this._renderer.setProperty(this._element.nativeElement,"value",o)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(b){return new(b||e)(y(wo),y(Co),y(bb,9))};static \u0275dir=P({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})(),L2={provide:tt,useExisting:mo(()=>jr),multi:!0};function Mr(e,t){return e==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${e}: ${t}`.slice(0,50))}function V2(e){return e.split(":")[0]}var jr=(()=>{class e extends ob{value;_optionMap=new Map;_idCounter=0;set compareWith(o){this._compareWith=o}_compareWith=Object.is;writeValue(o){this.value=o;let b;if(Array.isArray(o)){let n=o.map(i=>this._getOptionId(i));b=(i,r)=>{i._setSelected(n.indexOf(r.toString())>-1)}}else b=(n,i)=>{n._setSelected(!1)};this._optionMap.forEach(b)}registerOnChange(o){this.onChange=b=>{let n=[],i=b.selectedOptions;if(i!==void 0){let r=i;for(let s=0;s<r.length;s++){let a=r[s],l=this._getOptionValue(a.value);n.push(l)}}else{let r=b.options;for(let s=0;s<r.length;s++){let a=r[s];if(a.selected){let l=this._getOptionValue(a.value);n.push(l)}}}this.value=n,o(n)}}_registerOption(o){let b=(this._idCounter++).toString();return this._optionMap.set(b,o),b}_getOptionId(o){for(let b of this._optionMap.keys())if(this._compareWith(this._optionMap.get(b)._value,o))return b;return null}_getOptionValue(o){let b=V2(o);return this._optionMap.has(b)?this._optionMap.get(b)._value:o}static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(b,n){b&1&&I("change",function(r){return n.onChange(r.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[_o([L2]),so]})}return e})(),Ur=(()=>{class e{_element;_renderer;_select;id;_value;constructor(o,b,n){this._element=o,this._renderer=b,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(o){this._select!=null&&(this._value=o,this._setElementValue(Mr(this.id,o)),this._select.writeValue(this._select.value))}set value(o){this._select?(this._value=o,this._setElementValue(Mr(this.id,o)),this._select.writeValue(this._select.value)):this._setElementValue(o)}_setElementValue(o){this._renderer.setProperty(this._element.nativeElement,"value",o)}_setSelected(o){this._renderer.setProperty(this._element.nativeElement,"selected",o)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(b){return new(b||e)(y(wo),y(Co),y(jr,9))};static \u0275dir=P({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return e})();function zr(e){return typeof e=="number"?e:parseFloat(e)}var Br=(()=>{class e{_validator=mr;_onChange;_enabled;ngOnChanges(o){if(this.inputName in o){let b=this.normalizeInput(o[this.inputName].currentValue);this._enabled=this.enabled(b),this._validator=this._enabled?this.createValidator(b):mr,this._onChange&&this._onChange()}}validate(o){return this._validator(o)}registerOnValidatorChange(o){this._onChange=o}enabled(o){return o!=null}static \u0275fac=function(b){return new(b||e)};static \u0275dir=P({type:e,features:[vo]})}return e})(),F2={provide:fn,useExisting:mo(()=>vn),multi:!0},vn=(()=>{class e extends Br{max;inputName="max";normalizeInput=o=>zr(o);createValidator=o=>u2(o);static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(b,n){b&2&&Ce("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[_o([F2]),so]})}return e})(),j2={provide:fn,useExisting:mo(()=>yn),multi:!0},yn=(()=>{class e extends Br{min;inputName="min";normalizeInput=o=>zr(o);createValidator=o=>c2(o);static \u0275fac=(()=>{let o;return function(n){return(o||(o=ro(e)))(n||e)}})();static \u0275dir=P({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(b,n){b&2&&Ce("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[_o([j2]),so]})}return e})();var U2=(()=>{class e{static \u0275fac=function(b){return new(b||e)};static \u0275mod=Wo({type:e});static \u0275inj=Ho({})}return e})();var Hr=(()=>{class e{static withConfig(o){return{ngModule:e,providers:[{provide:kr,useValue:o.callSetDisabledState??$n}]}}static \u0275fac=function(b){return new(b||e)};static \u0275mod=Wo({type:e});static \u0275inj=Ho({imports:[U2]})}return e})();var B2=["game_of_life_grid"],H2=["game_of_life_board"],G2=["game_of_life_bg"];function W2(e,t){if(e&1&&(d(0,"span",5),C(1),f()),e&2){let o=Oo();_e("z-index",-997)("background-color",o.cellColor()+(o.showGrid()?"":"77")),w(),xo(o.preset())}}var $e={101:{cellSize:30,fps:15,isToroidal:!1,rle:`#N 101
#O Achim Flammenkamp
#C A period 5 oscillator that was found in August 1994.
#C The name was suggested by Bill Gosper, noting that the phase shown 
#C below displays the period in binary.
x = 18, y = 12, rule = B3/S23
4b2o6b2o4b$3bobo6bobo3b$3bo10bo3b$2obo10bob2o$2obobo2b2o2bobob2o$3bobo
bo2bobobo3b$3bobobo2bobobo3b$2obobo2b2o2bobob2o$2obo10bob2o$3bo10bo3b$
3bobo6bobo3b$4b2o6b2o!`},"103p4h1v0":{cellSize:30,fps:20,isToroidal:!0,rle:`#N 103p4h1v0.rle
#C https://conwaylife.com/wiki/C/4_orthogonal
#C https://www.conwaylife.com/patterns/103p4h1v0.rle
x = 27, y = 15, rule = B3/S23
10b2o$5b3o2b3o$7bo2b2obobo4bo$5b2o5b3o6bo$b2o2bo2b3obo3b4obo4bo$2ob2o
5bo4b2o3b3obobo$bo3bo9bo8bobo$2o3bo$bo3bo9bo8bobo$2ob2o5bo4b2o3b3obobo
$b2o2bo2b3obo3b4obo4bo$5b2o5b3o6bo$7bo2b2obobo4bo$5b3o2b3o$10b2o!`},"103p69":{cellSize:20,fps:15,isToroidal:!1,rle:`#N 103p69.rle
#C https://conwaylife.com/wiki/55P23
#C https://www.conwaylife.com/patterns/103p69.rle
x = 27, y = 28, rule = B3/S23
23bo$22bobo$21bobobo$21bo3bo$13b2o4b2ob2ob2o$13bo2bobobo3bo$15b2obo3bo
bo$16bobo2b2ob2o$4bo10b2o3bo2bo$4b3o4b2o4b2ob2obo$7bo3b2o6bo2bo$6b2o
13bo$22b3o$18b2o4bo$2b2o14bo$2bo13bobo$4bo11b2o$3b2o6bo$2bo6b3o$bob2o
4bobo$o2bobo5bo$2o2bo2$15b2o$8b2o5bobo$9bo7bo$6b3o8b2o$6bo!`},"104p177":{cellSize:12,fps:30,isToroidal:!1,rle:`#N 104P177
#O Karel Suhajda
#C A period 177 oscillator discovered by Karel Suhajda in June 2007
#C https://www.conwaylife.com/wiki/index.php?title=104P177
x = 46, y = 46, rule = b3/s23
16bo12bo16b$9b2o24b2o9b$8b3o3b2o14b2o3b3o8b$14b2ob2o8b2ob2o14b$16bo12b
o16b4$2bo40bo2b$b2o40b2ob$b2o40b2ob4$2b2o38b2o2b$2b2o38b2o2b$o3bo36bo
3bo$3bo38bo3b$3bo38bo3b9$3bo38bo3b$3bo38bo3b$o3bo36bo3bo$2b2o38b2o2b$
2b2o38b2o2b4$b2o40b2ob$b2o40b2ob$2bo40bo2b4$16bo12bo16b$14b2ob2o8b2ob
2o14b$8b3o3b2o14b2o3b3o8b$9b2o24b2o9b$16bo12bo!`},"104p32":{cellSize:20,fps:30,isToroidal:!1,rle:`#N 104p32.rle
#C https://conwaylife.com/wiki/P32_honey_farm_hassler
#C https://www.conwaylife.com/patterns/104p32.rle
x = 49, y = 17, rule = B3/S23
6bo35bo$5bob2o12b2o3b2o12b2obo$4bo3bo12bobobobo12bo3bo$4bo5bo12bobo12b
o5bo$bo2bo5bo11b2ob2o11bo5bo2bo$obo7bo27bo7bobo$b2o2b4o11bo7bo11b4o2b
2o$19bobo5bobo$b2o2b4o9bo3bo3bo3bo9b4o2b2o$obo7bo7bo3bo3bo3bo7bo7bobo$
bo2bo5bo7bo3bo3bo3bo7bo5bo2bo$4bo5bo8bobo5bobo8bo5bo$4bo3bo11bo7bo11bo
3bo$5bob2o31b2obo$6bo35bo$13b2o19b2o$13b2o19b2o!`},"106p135":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 106P135
#C The smallest known period-135 oscillator.
#C https://conwaylife.com/wiki/106P135
x = 54, y = 29, rule = B3/S23
26b2o$26b2o$6bo4bo30bo4bo$4b2ob4ob2o26b2ob4ob2o$6bo4bo30bo4bo5$25bo2bo
$23bobo2bobo$24b2o2b2o$2bo2bo4bo2bo26bo2bo4bo2bo$3o2b6o2b3o22b3o2b6o2b
3o$2bo2bo4bo2bo12b2o12bo2bo4bo2bo$26b2o4$21bo10bo$21bo10bo$20bobo8bobo
$21bo10bo$21bo10bo$21bo10bo$21bo10bo$20bobo8bobo$21bo10bo$21bo10bo!
`},"108p59":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 108p59.rle
#O Mitchell Riley, 2022
#C https://conwaylife.com/wiki/108P59
#C https://www.conwaylife.com/patterns/108p59.rle
x = 41, y = 41, rule = B3/S23
20b2o9bo$21bo7b3o$21bobo4bo$22b2o4b2o4$25bo$24bobo$2o22bobo$bo23bo$bob
o17b2o$2b2o16bobo$20bobo$8b2o11bo$7bo2bo$8b2o$2b2o$3bo7b3o$3o8bo2bo$o
11b2o13b2o11bo$26bo2bo8b3o$27b3o7bo$37b2o$31b2o$30bo2bo$19bo11b2o$18bo
bo$18bobo16b2o$18b2o17bobo$15bo23bo$14bobo22b2o$14bobo$15bo4$11b2o4b2o
$12bo4bobo$9b3o7bo$9bo9b2o!`},"110p62":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 110P62
#C The smallest known period-62 oscillator.
#C https://conwaylife.com/wiki/110P62
x = 41, y = 26, rule = B3/S23
28b2o7b2o$28b2o7b2o$2b2o7b2o$2b2o7b2o3$27b2o9b2o$29bo7bo$bo11bo14b2o7b
2o$b2o9b2o12bob2o7b2obo$ob2o7b2obo5bo5bo13bo$20bo$2o11b2o5bo$bo11bo12b
o13bo$bo11bo6bo5bob2o7b2obo$2o11b2o5bo7b2o7b2o$20bo8bo7bo$ob2o7b2obo
12b2o9b2o$b2o9b2o$bo11bo3$28b2o7b2o$28b2o7b2o$2b2o7b2o$2b2o7b2o!
`},"112p15":{cellSize:20,fps:15,isToroidal:!1,rle:`#N 112P15
#O thunk
#C https://conwaylife.com/wiki/112P15
#C https://conwaylife.com/patterns/112p15.rle
x = 25, y = 25, rule = B3/S23
6bo11bo$7b2o7b2o$3bobob2o7b2obobo$2bobo15bobo$3bo17bo$2bo19bo$o9b2ob2o
9bo$b2o8bobo8b2o$b2o6bobobobo6b2o$8bobo3bobo$6bo2bo5bo2bo$6b3o7b3o2$6b
3o7b3o$6bo2bo5bo2bo$8bobo3bobo$b2o6bobobobo6b2o$b2o8bobo8b2o$o9b2ob2o
9bo$2bo19bo$3bo17bo$2bobo15bobo$3bobob2o7b2obobo$7b2o7b2o$6bo11bo!`},"112p51":{cellSize:20,fps:15,isToroidal:!1,rle:`#N 112P51
#O Nicolay Beluchenko
#C The first true period 51 oscillator found. Discovered in March 2009.
#C www.conwaylife.com/wiki/index.php?title=112P51
x = 37, y = 37, rule = 23/3
15b2o3b2o15b3$6b2o21b2o6b$6b2o21b2o6b2$3b2o27b2o3b$3b2o9b2o5b2o9b2o3b$
9b3ob2o7b2ob3o9b$8bobo15bobo8b$8b2o17b2o8b$8bo19bo8b2$8bo19bo8b$7b2o
19b2o7b$o6bo21bo6bo$o35bo4$o35bo$o6bo21bo6bo$7b2o19b2o7b$8bo19bo8b2$8b
o19bo8b$8b2o17b2o8b$8bobo15bobo8b$9b3ob2o7b2ob3o9b$3b2o9b2o5b2o9b2o3b$
3b2o27b2o3b2$6b2o21b2o6b$6b2o21b2o6b3$15b2o3b2o!`},"114p6h1v0pushalong2":{cellSize:10,fps:60,isToroidal:!0,rle:`#N 114P6H1V0 pushalongs
#O Josh Ball
#C Pushalongs for the c/6 orthogonal period 6 spaceship 114P6H1V0.
#C https://www.conwaylife.com/wiki/114P6H1V0
x = 63, y = 60, rule = B3/S23
27b5o$26bo2bo2bo$26b2obobo$30bo$29bo$28b2o$28b2obo$29bo$30bobo$31bo2$
29b3o$4b3o20b2ob2o$7bob3o15b2obo$3bo3bo18b2o2bo$3bo3bo20bo18b3o8b3o$
27bo5bo12b2ob2o6b2ob2o$7bo24b3o12bobo8bobo$5b2o20b3o17bo12bo$5bo23b3o
15bob4o2b4obo$6b3o21b2o14bo2b2ob4ob2o2bo$5bobobo20b5o17b4o$6bob3o21bo
15bo10bo$8bobo21bo12b3o2bo6bo2b3o$8b2o22bo16bo3b2o3bo$7bobo21bo17bobo
4bobo3$4bo6bo15bo6bo15bo6bo$3bobob2obobo13bobob2obobo13bobob2obobo$3b
2o2b2o2b2o13b2o2b2o2b2o13b2o2b2o2b2o$7b2o21b2o21b2o2$5b2o2b2o17b2o2b2o
17b2o2b2o$5b2o2b2o17b2o2b2o17b2o2b2o$6b4o19b4o19b4o$6bo2bo19bo2bo19bo
2bo$5bo4bo17bo4bo17bo4bo$5bo4bo17bo4bo17bo4bo$5bob2obo17bob2obo17bob2o
bo$6bo2bo19bo2bo19bo2bo$6bo2bo19bo2bo19bo2bo2$o14bo7bo14bo7bo14bo$2o4b
o2bo4b2o7b2o4bo2bo4b2o7b2o4bo2bo4b2o$o5b4o5bo7bo5b4o5bo7bo5b4o5bo$b2o
4b2o4b2o9b2o4b2o4b2o9b2o4b2o4b2o$2bo10bo11bo10bo11bo10bo$obo10bobo7bob
o10bobo7bobo10bobo$b5o4b5o9b5o4b5o9b5o4b5o$3bo2b4o2bo13bo2b4o2bo13bo2b
4o2bo$2bo4b2o4bo11bo4b2o4bo11bo4b2o4bo$6bo2bo19bo2bo19bo2bo$7b2o21b2o
21b2o$4b2ob2ob2o15b2ob2ob2o15b2ob2ob2o2$3bo8bo13bo8bo13bo8bo$2b3o6b3o
11b3o6b3o11b3o6b3o$2bo2bo4bo2bo11bo2bo4bo2bo11bo2bo4bo2bo$b2o10b2o9b2o
10b2o9b2o10b2o!
`},"1308p7":{cellSize:7,fps:20,isToroidal:!1,rle:`#N 1308p7.rle
#C https://conwaylife.com/wiki/754P7
#C https://www.conwaylife.com/patterns/1308p7.rle
x = 195, y = 24, rule = Life
10b2o2b2o40b2o79b2o40b2o2b2o$10bo3bo5bo10bo12b2o9bo2bo77bo2bo9b2o12bo
10bo5bo3bo$7b2obobobo4bobo7b3o2b2o9bo9b3o3b2o69b2o3b3o9bo9b2o2b3o7bobo
4bobobob2o$7bobobobo5bo2bob2o2bo6bo3b2ob3o16bobo3b2o16bo6b2o7b2o6bo16b
2o3bobo16b3ob2o3bo6bo2b2obo2bo5bobobobo$4b2obo3bo6b2ob2obo4b6o3bobobo
5b2o3b7obobo3bo5b2o9bobo5bo9bo5bobo9b2o5bo3bobob7o3b2o5bobobo3b6o4bob
2ob2o6bo3bob2o$5bob2o2b2o2b2o4bo3b4o6b4obo7bobobo6b2obob2obo4bobo10bob
ob2obo9bob2obobo10bobo4bob2obob2o6bobobo7bob4o6b4o3bo4b2o2b2o2b2obo$5b
o9b2ob2o3b2o3bobo3bo6bo8bob2obob2o3bobobob2o2bo9b3o2b2obob2o7b2obob2o
2b3o9bo2b2obobobo3b2obob2obo8bo6bo3bobo3b2o3b2ob2o9bo$3b2ob3o2b4obobob
3o2bo3b2o3b2obob3o2b2o4bobo5bo2bo4bobobobo9bo2b2o21b2o2bo9bobobobo4bo
2bo5bobo4b2o2b3obob2o3b2o3bo2b3obobob4o2b3ob2o$3ob3o2bob4obobobo2bobob
obo2b2o2bo6bo5bo2bo4bo6bobo2b2obo3b3o5bo2bob5ob2ob2ob5obo2bo5b3o3bob2o
2bobo6bo4bo2bo5bo6bo2b2o2bobobobo2bobobob4obo2b3ob3o$o3bo2b3obo6bob2o
5b2ob2o7b2o4b3ob2obobob2obo3b2obobobo3bo2b2o3bo2bobo5bo2bobo2bo5bobo2b
o3b2o2bo3bobobob2o3bob2obobob2ob3o4b2o7b2ob2o5b2obo6bob3o2bo3bo$bobo8b
o2b3obo2bo15b3o4b3o2b2o4bobo4b3o5bobo4bo3b2obobob5ob2ob2ob5obobob2o3bo
4bobo5b3o4bobo4b2o2b3o4b3o15bo2bob3o2bo8bobo$2bo2bo7bobob3o16b2o13bob
2o4bo6bo2bob3o14b2o2b2o2bobo2b2o2b2o14b3obo2bo6bo4b2obo13b2o16b3obobo
7bo2bo$2bo2bo7bobob3o16b2o13bob2o4bo6bo2bob3o14b2o2b2o2bobo2b2o2b2o14b
3obo2bo6bo4b2obo13b2o16b3obobo7bo2bo$bobo8bo2b3obo2bo15b3o4b3o2b2o4bob
o4b3o5bobo4bo3b2obobob5ob2ob2ob5obobob2o3bo4bobo5b3o4bobo4b2o2b3o4b3o
15bo2bob3o2bo8bobo$o3bo2b3obo6bob2o5b2ob2o7b2o4b3ob2obobob2obo3b2obobo
bo3bo2b2o3bo2bobo5bo2bobo2bo5bobo2bo3b2o2bo3bobobob2o3bob2obobob2ob3o
4b2o7b2ob2o5b2obo6bob3o2bo3bo$3ob3o2bob4obobobo2bobobobo2b2o2bo6bo5bo
2bo4bo6bobo2b2obo3b3o5bo2bob5ob2ob2ob5obo2bo5b3o3bob2o2bobo6bo4bo2bo5b
o6bo2b2o2bobobobo2bobobob4obo2b3ob3o$3b2ob3o2b4obobob3o2bo3b2o3b2obob
3o2b2o4bobo5bo2bo4bobobobo9bo2b2o21b2o2bo9bobobobo4bo2bo5bobo4b2o2b3ob
ob2o3b2o3bo2b3obobob4o2b3ob2o$5bo9b2ob2o3b2o3bobo3bo6bo8bob2obob2o3bob
obob2o2bo9b3o2b2obob2o7b2obob2o2b3o9bo2b2obobobo3b2obob2obo8bo6bo3bobo
3b2o3b2ob2o9bo$5bob2o2b2o2b2o4bo3b4o6b4obo7bobobo6b2obob2obo4bobo10bob
ob2obo9bob2obobo10bobo4bob2obob2o6bobobo7bob4o6b4o3bo4b2o2b2o2b2obo$4b
2obo3bo6b2ob2obo4b6o3bobobo5b2o3b7obobo3bo5b2o9bobo5bo9bo5bobo9b2o5bo
3bobob7o3b2o5bobobo3b6o4bob2ob2o6bo3bob2o$7bobobobo5bo2bob2o2bo6bo3b2o
b3o16bobo3b2o16bo6b2o7b2o6bo16b2o3bobo16b3ob2o3bo6bo2b2obo2bo5bobobobo
$7b2obobobo4bobo7b3o2b2o9bo9b3o3b2o69b2o3b3o9bo9b2o2b3o7bobo4bobobob2o
$10bo3bo5bo10bo12b2o9bo2bo77bo2bo9b2o12bo10bo5bo3bo$10b2o2b2o40b2o79b
2o40b2o2b2o!`},"132p37":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 132P37
#O Nicolay Beluchenko
#C The second unique p37 oscillator to be found.
#C https://www.conwaylife.com/wiki/index.php?title=132P37
x = 47, y = 47, rule = b3/s23
18bo28b$18b3o26b$21bo25b$20b2o25b2$32b2o13b$32b2o13b$26bobo18b$28bo18b
2$22b3o22b$15b2o5bo2bo21b$15b2o5bo3bo20b$5b2o19bo20b$5b2o15bo3bo20b$
22bo2bo8b2o11b$22b3o9b2o11b2$7b2o36b2o$45bob$7bo4b3o28bobob$11bo3bo27b
2o2b$10bo5bo13b3ob3o10b$10bo5bo13bo5bo10b$10b3ob3o13bo5bo10b$2b2o27bo
3bo11b$bobo28b3o4bo7b$bo45b$2o36b2o7b2$11b2o9b3o22b$11b2o8bo2bo22b$20b
o3bo15b2o5b$20bo19b2o5b$20bo3bo5b2o15b$21bo2bo5b2o15b$22b3o22b2$18bo
28b$18bobo26b$13b2o32b$13b2o32b2$25b2o20b$25bo21b$26b3o18b$28bo!`},"186p24":{cellSize:20,fps:15,isToroidal:!1,rle:`#N 186P24
#O Bill Gosper
#C One of the first period 24 oscillators to be found. Discovered in 1994.
#C www.conwaylife.com/wiki/index.php?title=186P24
x = 58, y = 26, rule = b3/s23
22bo10bo24b$21bobo8bobo23b$22bo10bo24b2$3ob3o12bo5bo4bo5bo12b3ob3o2b$
3bo6bo3bo4bo5bo4bo5bo4bo3bo6bo5b$2o3b2o3bob3o3bo7bo2bo7bo3b3obo3b2o3b
2o2b$3bo6bo3bo4bo5bo4bo5bo4bo3bo6bo5b$3ob3o12bo5bo4bo5bo12b3ob3o2b2$
22bo35b$20b3o9b3o23b$19bo7b3o7b2o19b$19b2o7b3o7bo19b$23b3o9b3o20b$35bo
22b2$2b3ob3o12bo5bo4bo5bo12b3ob3o$5bo6bo3bo4bo5bo4bo5bo4bo3bo6bo3b$2b
2o3b2o3bob3o3bo7bo2bo7bo3b3obo3b2o3b2o$5bo6bo3bo4bo5bo4bo5bo4bo3bo6bo
3b$2b3ob3o12bo5bo4bo5bo12b3ob3o2$24bo10bo22b$23bobo8bobo21b$24bo10bo!`},"204p41":{cellSize:10,fps:30,isToroidal:!1,rle:`#N 204P41
#O Nico Brown
#C Discovered on July 21, 2023
#C This was the first period-41 oscillator to be found.
#C https://conwaylife.com/wiki/204P41
x = 73, y = 61, rule = B3/S23
34bo$32b3o$31bo$16b2o13b2o$17bo$17bobo$18b2o$28bo$27bo$29bo$27b3o4$40b
o$5b2o24b2o5bobo$6bo24bo7b2o$4bo13b2o12b3o$2b4o15b2o11bo$bo14b2obo$o2b
3o10b2o3bob2o$b2o2bo10b2obo3b2o$3b2o16bob2o$3bo14b2o$4bo6b3o7b2o26bo$b
3o7bo38b2o$bo5b2o3bo11bo24b2o$8bo14bobo$5b3o15b2o$5bo2$67bo$48b2o15b3o
$47bobo14bo$22b2o24bo11bo3b2o5bo$21b2o38bo7b3o$23bo26b2o7b3o6bo$53b2o
14bo$48b2obo16b2o$48b2o3bob2o10bo2b2o$48b2obo3b2o10b3o2bo$53bob2o14bo$
38bo11b2o15b4o$38b3o12b2o13bo$32b2o7bo24bo$32bobo5b2o24b2o$32bo4$43b3o
$43bo$45bo$44bo$53b2o$53bobo$55bo$40b2o13b2o$41bo$38b3o$38bo!
`},"246p41":{cellSize:10,fps:40,isToroidal:!1,rle:`#N 246p41.rle
#O Nico Brown, 2023
#C https://conwaylife.com/wiki/246P41
#C https://www.conwaylife.com/patterns/246p41.rle
x = 74, y = 74, rule = B3/S23
37bo$35b3o$34bo$19b2o5bo2b2o3b2o$20bo$20bobo$21b2o$32bo$30b2o$30b3o$
31bo4$41bobo$34b2o6b2o12bo$34bo7bo11b3o$16b2o17b3o15bo$17bo19bo15b2o
15bo$17bobo48b3o$18b2o47bo$26bo40b2o$25b3o$24bo2bo22b2o$25b2o5b2o7b2o
6bob2o$32bobo6b2o6bo3bo$34bo15b3o$34b2o15bo2$64bo$15bo46b2obo$15b2o8b
2o21b2o13b2o$14bobo8b2o22bo$46b3o8b2o11b2o$46bo9bobo11bobo$56bo15bo$
55b2o15b2o$2o15b2o$bo15bo$bobo11bobo9bo$2b2o11b2o8b3o$24bo22b2o8bobo$
9b2o13b2o21b2o8b2o$8bob2o46bo$9bo2$22bo15b2o$21b3o15bo$20bo3bo6b2o6bob
o$21b2obo6b2o7b2o5b2o$22b2o22bo2bo$46b3o$5b2o40bo$6bo47b2o$3b3o48bobo$
3bo15b2o15bo19bo$20bo15b3o17b2o$17b3o11bo7bo$17bo12b2o6b2o$30bobo4$42b
o$41b3o$42b2o$41bo$51b2o$51bobo$53bo$38b2o3b2o2bo5b2o$39bo$36b3o$36bo!`},"255p132":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 255p132.rle
#O Christopher D'Agostino, 2022
#C https://conwaylife.com/wiki/255P132
#C https://www.conwaylife.com/patterns/255p132.rle
x = 46, y = 46, rule = B3/S23
32bo$30b3o$29bo$24b2o4bo$7bo2b2o12b2o5bo$7b4o6bo9b3obo$12b2obobobo5bo
bob2o$9b2ob3o4bo5bob2o11b2o$9bo9bo20bo$10b3o3b2o9bo9b2obo$12bo13b3o7b
obob2o$16bo19bobo2bo$13b3o19b2o3bo$2o32bo2b2o$bo2b2o22bo4b4obo$bobo2b
o20bobo4b3o$2bob2obo21bo5b2o2b2o$4bo2b4o12b2o2bo$5bob5o11b3o11bo2bo$4b
o3b3o13b2o12bo$3b3o32bo$3b3o21b3o$27b3o$26bobo12bo$26b2o13bo$7bo31bob
o$7bo27bo2b2obo$5bo2bo24b3o2b2o$10bo24bo$5b2o3bo28b2o2bo$11b2o26bo2bo
bo$7bo3b3o26b2o2bo$11bo18b2o12b2o$5b3ob2o$4bo2bobo7b3o12bo$4b2obobo19b
3obo$5bob2o7bo3bo7bo4b3o$5bo20bo5bo3bo$4b2o10bo2bo6bo5b5o$15bo2b2o6bo
bobo2bo$14bobobo2bo6bo4bob4o$14bob3o3bo11b2o2bo$15bobobobo$16bo$13b3o
$13bo!`},"2c5greyshipwflatfrontandwick":{cellSize:5,fps:60,isToroidal:!0,rle:`#N 2c5greyshipwflatfrontandwick.rle
#C https://conwaylife.com/wiki/Greyship
#C https://www.conwaylife.com/patterns/2c5greyshipwflatfrontandwick.rle
x = 152, y = 129, rule = B3/S23
7b2obo$7b5o$6bo3b2o$7b2o$7b2o12b2o$2b4o$2bo3bo4b2ob2o4b2o2bo$2b2o2b2o
3b2ob3ob2o2bobo$4bo3bo9b2o5bo$5b12obo6b2o$16b2o6bo4bo$3b12ob2o5b2o4bo$
2bo11bob2o6b5o$2ob10o12bo$o2bo$6o3bobo$4b2obo2bo$8b3o2$8b3o$4b2obo2bo
33b2o$6o3bobo30bobo3bo$o2bo37bo2bob2o$2ob10o15b2o2b2o6bo3b3o$2bo12bo
11b2o11bo7bo2bo$3b13o12bob2o3b3ob10o2bo$31bo3bo2bo14bob2o$3b13o19b2ob
19o$2bo12bo9b2o3bo29bo$2ob10o7b2o2bo12b25o$o2bo15bob4obobo3bo3bo25bo2b
o$6o3bobo6b2o2bobo7b2o3b29o$4b2obo2bo8bobo6bo6bo31bo2bo$8b3o9bob4o2b
43o3bo$75bo2bo$8b3o7b58o2bo$4b2obo2bo6bo62bob2o$6o3bobo4bo3b5ob2o3b2ob
ob48o$o2bo12bo3bo3bobo5bob2obo49bo$2ob10o3bo4b2o4b5o2b2o3b50o$2bo11bob
obo2bo7bo2bo3bo2bobo47bo2bo$3b12ob2o3b4o2bo3b2ob2obobob52o$20bo7bobo4b
2ob2obobo2bo47bo2bo$5b15o6bo14bo6b50o3bo$5bo20bo5bo7b3o4bo54bo2bo$5b
15o6bo14bo6b55o2bo$20bo7bobo4b2ob2obobo2bo60bob2o$3b12ob2o3b4o2bo3b2ob
2obobob70o$2bo11bobobo2bo7bo2bo3bo2bobo72bo$2ob10o3bo4b2o4b5o2b2o3b77o
$o2bo12bo3bo3bobo5bob2obo78bo2bo$6o3bobo4bo3b5ob2o3b2obob84o$4b2obo2bo
6bo103bo2bo$8b3o7b107o3bo$129bo2bo$8b3o7b112o2bo$4b2obo2bo6bo116bob2o$
6o3bobo4bo3b5ob2o3b2obob102o$o2bo12bo3bo3bobo5bob2obo103bo$2ob10o3bo4b
2o4b5o2b2o3b104o$2bo11bobobo2bo7bo2bo3bo2bobo101bo2bo$3b12ob2o3b4o2bo
3b2ob2obobob8o3bob6o3bob6o3bob6o3bob6o3bob49o$20bo7bobo4b2ob2obobo2bob
obob3o2bobobob3o2bobobob3o2bobobob3o2bobobob3o2bo46bo2bo$5b15o6bo14bo
9bo10bo10bo10bo10bo7b49o$5bo20bo5bo7b3o59bo$5b15o6bo14bo9bo10bo10bo10b
o10bo7b49o$20bo7bobo4b2ob2obobo2bobobob3o2bobobob3o2bobobob3o2bobobob
3o2bobobob3o2bo46bo2bo$3b12ob2o3b4o2bo3b2ob2obobob8o3bob6o3bob6o3bob6o
3bob6o3bob49o$2bo11bobobo2bo7bo2bo3bo2bobo101bo2bo$2ob10o3bo4b2o4b5o2b
2o3b104o$o2bo12bo3bo3bobo5bob2obo103bo$6o3bobo4bo3b5ob2o3b2obob102o$4b
2obo2bo6bo116bob2o$8b3o7b112o2bo$129bo2bo$8b3o7b107o3bo$4b2obo2bo6bo
103bo2bo$6o3bobo4bo3b5ob2o3b2obob84o$o2bo12bo3bo3bobo5bob2obo78bo2bo$
2ob10o3bo4b2o4b5o2b2o3b77o$2bo11bobobo2bo7bo2bo3bo2bobo72bo$3b12ob2o3b
4o2bo3b2ob2obobob70o$20bo7bobo4b2ob2obobo2bo60bob2o$5b15o6bo14bo6b55o
2bo$5bo20bo5bo7b3o4bo54bo2bo$5b15o6bo14bo6b50o3bo$20bo7bobo4b2ob2obobo
2bo47bo2bo$3b12ob2o3b4o2bo3b2ob2obobob52o$2bo11bobobo2bo7bo2bo3bo2bobo
47bo2bo$2ob10o3bo4b2o4b5o2b2o3b50o$o2bo12bo3bo3bobo5bob2obo49bo$6o3bob
o4bo3b5ob2o3b2obob48o$4b2obo2bo6bo62bob2o$8b3o7b58o2bo$75bo2bo$8b3o9bo
b4o2b43o3bo$4b2obo2bo8bobo6bo6bo31bo2bo$6o3bobo6b2o2bobo7b2o3b29o$o2bo
15bob4obobo3bo3bo25bo2bo$2ob10o7b2o2bo12b25o$2bo12bo9b2o3bo29bo$3b13o
19b2ob19o$31bo3bo2bo14bob2o$3b13o12bob2o3b3ob10o2bo$2bo12bo11b2o11bo7b
o2bo$2ob10o15b2o2b2o6bo3b3o$o2bo37bo2bob2o$6o3bobo30bobo3bo$4b2obo2bo
33b2o$8b3o2$8b3o$4b2obo2bo$6o3bobo$o2bo$2ob10o12bo$2bo11bob2o6b5o$3b
12ob2o5b2o4bo$16b2o6bo4bo$5b12obo6b2o$4bo3bo9b2o5bo$2b2o2b2o3b2ob3ob2o
2bobo$2bo3bo4b2ob2o4b2o2bo$2b4o$7b2o12b2o$7b2o$6bo3b2o$7b5o$7b2obo!`},"33p3.1bumper":{cellSize:7,fps:30,isToroidal:!1,rle:`#N 33p3.1bumper.rle
#C https://conwaylife.com/wiki/33P3.1
#C https://conwaylife.com/patterns/33p3.1bumper.rle
x = 99, y = 99, rule = B3/S23
36b2o5b2o$36bobo2bo3bo7b2o$38bo2bo2b2o8b2obo$38bo2bo12b6o$39b2o8bo9bo$
41bo6bobo3b3ob3o$37b3o8bo2bo4bo3bo$36bo2b2o8b2o8b2o$35bobo3bo18b2o$35b
obo2bobo18b2o$36bo3bobo18bo$41bo3b2o15b3o$46b2o16bo$45bo3$57bo$58b2o$
57b2o7$31b2o$30bobo$32bo3$72bo$73bo$71b3o2$11b2o$11bo77b2o$9bobo76bo2b
o5b2o$8b3o78b2obo5bo$5b4o83bo2b3o$3b3obo9bo73b2obo$3bobo11b2o69b2obo2b
o$2b2o12bobo68bo2bo2bob3o$3bob2o81b2o$2b2obo92bo$b3obo90bobo$bo83bobo
8b2o$86b2o$6bo79bo$5bobo84b2o$4bo2bo83bo2bo$5b2o84bobo$12bo79bo$11b2o$
b2o8bobo83bo$obo90bob3o$o92bob2o$9b2o81b2obo$b3obo2bo2bo68bobo12b2o$4b
o2bob2o69b2o11bobo$4bob2o73bo9bob3o$b3o2bo83b4o$o5bob2o78b3o$2o5bo2bo
76bobo$8b2o77bo$86b2o2$25b3o$25bo$26bo3$66bo$66bobo$66b2o7$40b2o$39b2o
$41bo3$53bo$34bo16b2o$34b3o15b2o3bo$37bo18bobo3bo$36b2o18bobo2bobo$37b
2o18bo3bobo$38b2o8b2o8b2o2bo$38bo3bo4bo2bo8b3o$38b3ob3o3bobo6bo$39bo9b
o8b2o$39b6o12bo2bo$41bob2o8b2o2bo2bo$44b2o7bo3bo2bobo$54b2o5b2o!`},"387p132pattern":{cellSize:10,fps:30,isToroidal:!1,rle:`#N 387p132pattern.rle
#C https://conwaylife.com/wiki/255P132
#C https://www.conwaylife.com/patterns/387p132pattern.rle
x = 50, y = 50, rule = B3/S23
15b2o$11b2obobo$12bobo19bo$12bo2bo16b3o$11b2obobob2ob2o8bo$10bo3b2o3b
obo4b2o4bo$11b3o5bobo4b2o5bo$14b5obo8b3obo$11b2obo2bo9bobob2o$10bobob
2o2b5o4bob2o$10bo3bo3bo4bo15b2o3bo$11b3ob2obob3o6bo8bo2bobobo2bo$13bo
6bo7b3o7bob2obob4o$37b2obo2bo$14bo4bo17bo4bob2ob2o$2b2o12b2o19b2o3bob
obo2bo$3bo2b2o22bo6b2obobo2bo2b2o$3bobo2bo20bobo5b2obobo$4bob2obo21bo
5b2obobo2bo$6bo2b4o12b2o2bo7bo2bo2b3o$7bob5o11b3o9b2obobo$6bo3b3o13b2o
10bobo2b3o$5b3o30bobo4bo$5b3o21b3o7bo$29b3o$28bobo12bo$10bo17b2o13bo$
4bo4bobo29bobo$4b3o2bobo25bo2b2obo$7bobob2o22b3o2b2o$4b3o2bo2bo24bo$4b
o2bobob2o28b2o2bo$7bobob2o28bo2bobo$2o2bo2bobob2o29b2o2bo$o2bobobo3b2o
19b2o12b2o$b2ob2obo4bo17bo4bo$6bo2bob2o6b3o$b4obob2obo17bo6bo$bo2bobo
bo2bo6bo3bo4b3obob2ob3o$5bo3b2o15bo4bo3bo3bo$18bo2bo5b5o2b2obobo$17bo
2b2o10bo2bob2o$16bobobo2bo5bob5o$16bob3o3bo3bobo5b3o$17bobobobo4bobo3b
2o3bo$18bo8b2ob2obobob2o$15b3o16bo2bo$15bo19bobo$33bobob2o$33b2o!`},"394p132":{cellSize:10,fps:30,isToroidal:!1,rle:`#N 394p132.rle
#C https://conwaylife.com/wiki/255P132
#C https://www.conwaylife.com/patterns/394p132.rle
x = 50, y = 50, rule = B3/S23
15b2o$11b2obobo$12bobo$12bo2bo$11b2obobob2ob2o$10bo3b2o3bobo7bo$11b3o
5bobo7b3o$14b5obo5bo5bo$11b2obo2bo8b6obo$10bobob2o2b5o8bobo$10bo3bo3b
o4bo2b2obo3b2o4b2o3bo$11b3ob2obob3o3b2o4bo5bo2bobobo2bo$13bo6bo7b2o2b
o5bob2obob4o$30b2o5b2obo2bo$14bo4bo17bo4bob2ob2o$10bo5b2o19b2o3bobobo
2bo$8b3o18bo7b2obobo2bo2b2o$7bo3b2o15bob2o5b2obobo$6bob2obobo13b2ob2o
5b2obobo2bo$6bobobobo12b5o7bo2bo2b3o$5b2obo16b3o9b2obobo$8bo2bo14b2o10b
obo2b3o$8bobo27bobo4bo$7b2ob2o17b3o7bo$29b3o$28bobo$10bo17b2o8b2ob2o$
4bo4bobo27bobo$4b3o2bobo26bo2bo$7bobob2o28bob2o$4b3o2bo2bo24bobobobo$
4bo2bobob2o23bobob2obo$7bobob2o24b2o3bo$2o2bo2bobob2o26b3o$o2bobobo3b
2o19b2o5bo$b2ob2obo4bo17bo4bo$6bo2bob2o5b2o$b4obob2obo5bo2b2o7bo6bo$b
o2bobobo2bo5bo4b2o3b3obob2ob3o$5bo3b2o4b2o3bob2o2bo4bo3bo3bo$16bobo8b
5o2b2obobo$16bob6o8bo2bob2o$17bo5bo5bob5o$18b3o7bobo5b3o$20bo7bobo3b2o3bo$27b2ob2obobob2o$34bo2bo$35bobo$33bobob2o$33b2o!`},"3cellpuffsuppressorspaceship":{cellSize:15,fps:30,isToroidal:!0,rle:`#N 3cellpuffsuppressorspaceship.rle
#C https://conwaylife.com/wiki/Puff_suppressor
#C https://www.conwaylife.com/patterns/3cellpuffsuppressorspaceship.rle
x = 33, y = 25, rule = B3/S23
12bo$10b2obo$10b2o3bo$8bo3b2obo5bo$8b4ob2o3b4o7bobo$6bo6bo4b3o5bobo2bo
$6b7o3bo3bo4bo2bo$3bobo6b2o2bo3bobob2o4bo$2b9o5bo2b2o8bo$b2o14bob2ob4o
3bo2bo$2o4b2obo10bo3bo2bobo$b2o4bo8b3o6bobobo2bo$9bo6b2o6bo4b2o$b2o4bo
8b3o6bobobo2bo$2o4b2obo10bo3bo2bobo$b2o14bob2ob4o3bo2bo$2b9o5bo2b2o8bo
$3bobo6b2o2bo3bobob2o4bo$6b7o3bo3bo4bo2bo$6bo6bo4b3o5bobo2bo$8b4ob2o3b
4o7bobo$8bo3b2obo5bo$10b2o3bo$10b2obo$12bo!
`},"400p49":{cellSize:10,fps:30,isToroidal:!1,rle:`#N 400P49
#C A small period 49 oscillator based off of Noam Elkies' reflector te
#C chnology
#C www.conwaylife.com/wiki/index.php?title=400P49
x = 65, y = 65, rule = b3/s23
21b2o42b$20bo2bo41b$17bo3bobo41b$15b6obo42b$14bo5bo44b$14bob2obo2bo42b
$15bo3bob2o42b$17bobo45b$16b2o3b2o42b$15bo2b2obo43b$13bo2bo3bo2bo9bo
31b$13b2obo3bob2o7b3o31b$14bobob2obo8bo34b$14bob3o2bo8b2o33b$15bo3bob
2o42b$16b4o2bo5bo36b$20bo6bobo35b$16b4o2bo5b2o2b2o31b$16bo2bob2o9b2o
31b$21bo43b$19bobo31b2o10b$19b2o6bo23b3o5b2o4b$25b2o23bo4bo2bo2bo3b$
26b2o18b2obob4obo2bobo3b$10b2o5b2o28bobobo4b2obob2o2b$11bo5b2o28bobob
2o2bo5bo3b$11bobo29b2ob2ob2obo2bob3obo3b$12b2o29bo4bo4b2o5b2obob$16b2o
26b3o3b3o2b2obo3bobo$15bobo20b2o6b2ob2o2bo2bob2obo2bo$16bo20b2o14b2o7b
2ob$39bo25b2$25bo39b$b2o7b2o14b2o20bo16b$o2bob2obo2bo2b2ob2o6b2o20bobo
15b$obo3bob2o2b3o3b3o26b2o16b$bob2o5b2o4bo4bo29b2o12b$3bob3obo2bob2ob
2ob2o29bobo11b$3bo5bo2b2obobo28b2o5bo11b$2b2obob2o4bobobo28b2o5b2o10b$
3bobo2bob4obob2o18b2o26b$3bo2bo2bo4bo23b2o25b$4b2o5b3o23bo6b2o19b$10b
2o31bobo19b$43bo21b$31b2o9b2obo2bo16b$31b2o2b2o5bo2b4o16b$35bobo6bo20b
$36bo5bo2b4o16b$42b2obo3bo15b$33b2o8bo2b3obo14b$34bo8bob2obobo14b$31b
3o7b2obo3bob2o13b$31bo9bo2bo3bo2bo13b$43bob2o2bo15b$42b2o3b2o16b$45bob
o17b$42b2obo3bo15b$42bo2bob2obo14b$44bo5bo14b$42bob6o15b$41bobo3bo17b$
41bo2bo20b$42b2o!`},"440p49.1":{cellSize:10,fps:30,isToroidal:!1,rle:`#N 440P49.1
#O Noam Elkies
#C The first period 49 oscillator to be discovered. Found on August 1,
#C 1999.
#C www.conwaylife.com/wiki/index.php?title=440P49.1
x = 65, y = 65, rule = b3/s23
14bo2bo2bo44b$14b7o2bo41b$21b3o41b$16b4o45b$15bobo2b2o43b$15bo6bo42b$
14b2ob5obo41b$15bo5bobo41b$15bobo2bo2b2o40b$13bobo2bobobo42b$13b2ob2o
2bobo10bo31b$16bo3bob2o7b3o31b$16bob2obo8bo34b$13b2obo4bo8b2o33b$13bob
o3bob2o42b$16b4o2bo5bo36b$20b2o5bobo35b$16b4o2bo5b2o2b2o31b$16bo2bob2o
9b2o31b$21bo43b$19bobo28b2o2b2o9b$19b2o5bo24bo2bo3bo4b2o$25bo24bo4b6o
2bob$25b3o18b2obob4o6bobob$10b2o5b2o28bobo4bobobob2ob2o$11bo5b2o28bobo
2bo2bo2bo2bobob$11bobo29b2ob2ob2obo5bo2bobob$12b2o29bo4bo4b4obobo2b2o$
16b2o26b3obob3o4b2obobo2b$15bobo19b3o6b2ob2o2b3o3bo2bo2b$16bo20bo15bo
2b3o3b2ob$38bo17bo8b2$8bo17bo38b$b2o3b3o2bo15bo20bo16b$2bo2bo3b3o2b2ob
2o6b3o19bobo15b$2bobob2o4b3obob3o26b2o16b$2o2bobob4o4bo4bo29b2o12b$bob
o2bo5bob2ob2ob2o29bobo11b$bobo2bo2bo2bo2bobo28b2o5bo11b$2ob2obobobo4bo
bo28b2o5b2o10b$bobo6b4obob2o18b3o25b$bo2b6o4bo24bo25b$2o4bo3bo2bo24bo
5b2o19b$9b2o2b2o28bobo19b$43bo21b$31b2o9b2obo2bo16b$31b2o2b2o5bo2b4o
16b$35bobo5b2o20b$36bo5bo2b4o16b$42b2obo3bobo13b$33b2o8bo4bob2o13b$34b
o8bob2obo16b$31b3o7b2obo3bo16b$31bo10bobo2b2ob2o13b$42bobobo2bobo13b$
40b2o2bo2bobo15b$41bobo5bo15b$41bob5ob2o14b$42bo6bo15b$43b2o2bobo15b$
45b4o16b$41b3o21b$41bo2b7o14b$44bo2bo2bo!`},"44p10":{cellSize:30,fps:10,isToroidal:!1,rle:`#N 44p10.rle
#O Matthias Merzenich, 2010
#C https://conwaylife.com/wiki/44P10
#C https://www.conwaylife.com/patterns/44p10.rle
x = 14, y = 14, rule = B3/S23
12bo$3o7bobo$5bo4bobo$b2obob2o$4bo4b2o$6bo4bo$3bo4bobo$3bobo4bo$2bo4bo
$3b2o4bo$6b2obob2o$bobo4bo$bobo7b3o$bo!`},"44p12.3":{cellSize:30,fps:20,isToroidal:!1,rle:`#N 44p12.3.rle
#O Nicolay Beluchenko
#C https://conwaylife.com/wiki/44P12.3
#C https://www.conwaylife.com/patterns/44p12.3.rle
x = 14, y = 14, rule = B3/S23
7bo$6b2o$5b2o$4bo$3bob4o$2bobo4bo$b2obob2obo2b2o$2o2bob2obob2o$4bo4bob
o$5b4obo$9bo$7b2o$6b2o$6bo!`},"44p5h2v0tagalongs":{cellSize:15,fps:30,isToroidal:!0,rle:`#N 44P5H2V0
#O Dean Hickerson
#C The first 2c/5 orthogonal spaceship, discovered on July 23, 1991
#C https://www.conwaylife.com/wiki/44P5H2V0
#C https://www.conwaylife.com/patterns/44p5h2v0tagalongs.rle
x = 66, y = 35, rule = B3/S23
6bobo19bobo23bobo$3bo4bo16bo4bo20bo4bo$2b3o4bo14b3o4bo18b3o4bo$bobo19b
obo23bobo$2o2b2o4bo11b2o2b2o4bo15b2o2b2o4bo$b2o2b5o13b2o2b5o17b2o2b5o
4$b2o2b5o13b2o2b5o17b2o2b5o$2o2b2o4bo11b2o2b2o4bo15b2o2b2o4bo$bobo19bo
bo23bobo$2b3o4bo14b3o4bo18b3o4bo$3bo4bo16bo4bo20bo4bo$6bobo19bobo23bob
o$11bo21bo25bo4b2o$11bobo19bobo23bobo2b2o$10bo2bo18bo2bo2b3o17bo2bo$
11bobo19bobo2b2o19bobo2b2o$11bo21bo25bo4b2o$6bobo19bobo23bobo$3bo4bo
16bo4bo20bo4bo$2b3o4bo14b3o4bo18b3o4bo$bobo19bobo23bobo$2o2b2o4bo11b2o
2b2o4bo15b2o2b2o4bo$b2o2b5o13b2o2b5o17b2o2b5o4$b2o2b5o13b2o2b5o17b2o2b
5o$2o2b2o4bo11b2o2b2o4bo15b2o2b2o4bo$bobo19bobo23bobo$2b3o4bo14b3o4bo
18b3o4bo$3bo4bo16bo4bo20bo4bo$6bobo19bobo23bobo!`},"44x44255p132":{cellSize:15,fps:25,isToroidal:!1,rle:`#N 44x44255p132.rle
#C https://conwaylife.com/wiki/255P132
#C https://www.conwaylife.com/patterns/44x44255p132.rle
x = 44, y = 44, rule = B3/S23
29b2o$28bo2bobo2bo$23b2o4bobob4o$6bo2b2o12b2o5bobo$6b4o6bo9b3obobobo$
11b2obobobo5bobob2o3b2o$8b2ob3o4bo5bob2o11b2o$b2o5bo9bo20bo$2bo6b3o3b
2o9bo9b2obo$2bob2o5bo13b3o7bobob2o$b2o2bo9bo19bobo2bo$3b2o7b3o19b2o3b
o$b2o30bo2b2o$o2b2o22bo4b4obo$obo2bo20bobo4b3o$bob2obo21bo5b2o2b2o$3b
o2b4o12b2o2bo$4bob5o11b3o11bo2bo$3bo3b3o13b2o12bo$2b3o32bo$2b3o21b3o$
26b3o$25bobo12bo$25b2o13bo$6bo31bobo$6bo27bo2b2obo$4bo2bo24b3o2b2o$9b
o24bo$4b2o3bo28b2o2bo$10b2o26bo2bobo$6bo3b3o26b2o2bo$10bo18b2o10b2o$4b
3ob2o29b2o$3bo2bobo7b3o12bo6bo2b2o$3b2obobo19b3obo5b2obo$4bob2o7bo3bo
7bo4b3o6bo$4bo20bo5bo3bo5b2o$3b2o10bo2bo6bo5b5o$9b2o3bo2b2o6bobobo2bo
$9bobobobobo2bo6bo4bob4o$11bobob3o3bo11b2o2bo$7b4obobobobobo$7bo2bobo2bo$13b2o!`},"45p56original":{cellSize:25,fps:20,isToroidal:!1,rle:`#N 45p56original.rle
#C https://conwaylife.com/wiki/P56_B-heptomino_shuttle
#C https://www.conwaylife.com/patterns/45p56original.rle
x = 41, y = 21, rule = B3/S23
32b4o$31bo4bob2o$31bo4bo3bo$34b2o4bo$14b2o15b2o4bo2bo$14b2o14bo2bo3bo
2bo$30bo2bo4b2o$30bo4b2o$30bo3bo4bo$14bo16b2obo4bo$7b2o4bob2o18b4o$4bo
8bo2bo$3bobo2b2o6bo$bobob3o2bo$bo2b6o$4b2ob2o17b2o$3b6o2bo14b2o$2bo2b
3obobo$3b2o2bobo$8bo$4b2o!`},"48p22.1":{cellSize:30,fps:15,isToroidal:!1,rle:`#N 48P22.1
#O Nicolay Beluchenko, 4 March 2009
#C https://conwaylife.com/wiki/48P22.1
#C https://conwaylife.com/patterns/48p221.rle
x = 16, y = 16, rule = B3/S23
3b2o$3bobo$2bo4bo5bo$3bobob2o2b2ob2o$3bo3bo7bo$12bobo2$3bo7b3o$2b3o7bo
2$bobo$o7bo3bo$2ob2o2b2obobo$2bo5bo4bo$10bobo$11b2o!`},"50p20h10v0.1":{cellSize:25,fps:20,isToroidal:!0,rle:`#N 50p20h10v0.1.rle
#C https://conwaylife.com/wiki/Heavyweight_spaceship
#C https://www.conwaylife.com/patterns/50p20h10v0.1.rle
x = 10, y = 17, rule = B3/S23
6b2o$4bo4bo$3bo$3bo5bo$3b6o4$b2o$2ob7o$b9o$2b8o$6b2o$4bo4bo$3bo$3bo5bo
$3b6o!
`},"51p20h10v0":{cellSize:25,fps:20,isToroidal:!0,rle:`#N 51p20h10v0.rle
#C https://conwaylife.com/wiki/51P20H10V0
#C https://www.conwaylife.com/patterns/51p20h10v0.rle
x = 10, y = 18, rule = B3/S23
6b2o$4bo4bo$3bo$3bo5bo$3b6o4$b2o$2ob7o$b8o$2b6o2$6b2o$4bo4bo$3bo$3bo5b
o$3b6o!`},"54p12h6v0":{cellSize:20,fps:30,isToroidal:!0,rle:`#N 54p12h6v0.rle
#O Charity Engine, 2022
#C https://conwaylife.com/wiki/54P12H6V0
#C https://www.conwaylife.com/patterns/54p12h6v0.rle
x = 25, y = 9, rule = B3/S23
b3o5bo5bo5b3o$o2bo4b3o3b3o4bo2bo$3bo3bo2b2ob2o2bo3bo$3bo3bo3bobo3bo3bo
$obo6bobobobo6bobo$5bo3b2o3b2o3bo$5b2o11b2o2$6b2o9b2o!`},"54p94":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 54p94.rle
#O Nico Brown, 2022
#C https://conwaylife.com/wiki/54P94
#C https://www.conwaylife.com/patterns/54p94.rle
x = 37, y = 28, rule = B3/S23
13b2o$13b2o5$29b2o$29b2o$35b2o$3b2o30bo$3bo7b3o19bobo$13b2o18b2o$11bo
2bo$12b2o$23b2o$22bo2bo$2b2o18b2o$bobo19b3o7bo$bo30b2o$2o$6b2o$6b2o5$
22b2o$22b2o!`},"56p27":{cellSize:20,fps:30,isToroidal:!1,rle:`#N 56P27
#O Nicolay Beluchenko
#C A period-27 oscillator discovered in May, 2010
#C https://www.conwaylife.com/wiki/index.php?title=56P27
x = 30, y = 30, rule = b3/s23
15b2o13b$15b2o13b5$13b2o15b$14b2o14b$10bo4bo14b$10bo3bo15b$10b2o7b3o8b
$19bo10b2$2o21bo6b$2o5b2o11bob2o6b$6b2obo11b2o5b2o$6bo21b2o2$10bo19b$
8b3o7b2o10b$15bo3bo10b$14bo4bo10b$14b2o14b$15b2o13b5$13b2o15b$13b2o!`},"60p312":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 60p312.rle
#O Dave Greene, 2004
#C https://conwaylife.com/wiki/60P312
#C https://www.conwaylife.com/patterns/60p312.rle
x = 42, y = 42, rule = B3/S23
20b2o$20b2o4$9b2o$8bo2bo10b2o$9b2o11bo$22bo12bo$23bo10bobo$34bobo$35bo
7$32bo2bo$33b3o$2o38b2o$2o38b2o$6b3o$6bo2bo7$6bo$5bobo$5bobo10bo$6bo
12bo$19bo11b2o$18b2o10bo2bo$31b2o4$20b2o$20b2o!`},"62p7supportedp28honeyfarmhassler":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 62p7supportedp28honeyfarmhassler.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/62p7supportedp28honeyfarmhassler.rle
x = 48, y = 46, rule = B3/S23
8b2o12b2o$8bobo4b2o4bobo$10bo3bo2bo3bo$10b2o3b2o3b2o$12bo6bo$10b3ob4ob
3o$9bo12bo$7bo2bo10bo2bo$7b2obo10bob2o$8bob12obo$8bobo10bobo$9bo12bo2$
39b2o$37b3o6b2o$7b2o27bo4bo5bo$2o6b3o26b4obob3o$o5bo4bo5b3o20bobobo$b
3obob4o5bo3bo16bobobo2bo$3bobobo7bo5bo14bo3bo$3bo2bobobo4bo5bo14bo4bo
3bo$7bo3bo3bo5bo14bo4bo2bobo$2bo3bo4bo4bo3bo7b3o5bo4bo2bobo$bobo2bo4bo
5b3o7bo3bo4bo4bo3bo$bobo2bo4bo14bo5bo3bo3bo$2bo3bo4bo14bo5bo4bobobo2bo
$7bo3bo14bo5bo7bobobo$3bo2bobobo16bo3bo5b4obob3o$3bobobo20b3o5bo4bo5bo
$b3obob4o26b3o6b2o$o5bo4bo27b2o$2o6b3o$7b2o2$25bo12bo$24bobo10bobo$24b
ob12obo$23b2obo10bob2o$23bo2bo10bo2bo$25bo12bo$26b3ob4ob3o$28bo6bo$26b
2o3b2o3b2o$26bo3bo2bo3bo$24bobo4b2o4bobo$24b2o12b2o!`},"66p5h2v0":{cellSize:25,fps:30,isToroidal:!0,rle:`#N 66p5h2v0.rle
#C https://conwaylife.com/wiki/66P5H2V0
#C https://www.conwaylife.com/patterns/66p5h2v0.rle
x = 19, y = 16, rule = B3/S23
2bo13bo$2ob2o9b2ob2o$3b2o9b2o2$obob2o7b2obobo$b2ob2o2b3o2b2ob2o$8bobo$
5b2obobob2o$6b7o$8bobo$7bo3bo$6bobobobo$8bobo$8bobo$8bobo$7b2ob2o!`},"68p32.1":{cellSize:25,fps:20,isToroidal:!1,rle:`#N 68p32.1.rle
#O Matthias Merzenich, 2010
#C https://conwaylife.com/wiki/68P32.1
#C https://www.conwaylife.com/patterns/68p32.1.rle
x = 19, y = 19, rule = B3/S23
2b2o11b2o$2b2o11b2o$bo2bo9bo2bo$2bobo9bobo2$b3o11b3o$bo2bo9bo2bo$o2bo
11bo2bo$b2o13b2o2$b2o13b2o$o2bo11bo2bo$bo2bo9bo2bo$b3o11b3o2$2bobo9bob
o$bo2bo9bo2bo$2b2o11b2o$2b2o11b2o!`},"72p119":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 72p119.rle
#O Mitchell Riley, 2023
#C https://conwaylife.com/wiki/72P119
#C https://www.conwaylife.com/patterns/72p119.rle
x = 51, y = 32, rule = B3/S23
24b2o$24b2o$19bo$17b3o$16bo25b2o$16b2o24b2o3$2b2o$2b2o$25bo$24b3o$23bo
3bo$23b2ob2o19b2o$47bobo$2o47bo$bo47b2o$bobo$2b2o19b2ob2o$23bo3bo$24b
3o$25bo$47b2o$47b2o3$7b2o24b2o$7b2o25bo$31b3o$31bo$25b2o$25b2o!`},"72p21":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 72p21.rle
#O David Raucci, 2021
#C https://conwaylife.com/wiki/72P21
#C https://www.conwaylife.com/patterns/72p21.rle
x = 34, y = 34, rule = B3/S23
19bo$17b3o$16bo$16b2o2$13b2o$13bobo$14b2o6$17b2o8b2o$2o14bobo7bobo$bo
11b2obo9b2o$bobo9bo4b2o10b2o$2b2o10b2o4bo9bobo$6b2o9bob2o11bo$5bobo7bo
bo14b2o$5b2o8b2o6$18b2o$18bobo$19b2o2$16b2o$17bo$14b3o$14bo!`},"74p127":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 74p127.rle
#O Luke Kiernan, 2022
#C https://conwaylife.com/wiki/74P127
#C https://www.conwaylife.com/patterns/74p127.rle
x = 38, y = 39, rule = B3/S23
13bo$13b3o$16bo$15b2o3$7b2o20bo$7b2o8b3o8bobo$17b3o9bo$17bo$20bo2$17b
5o$19bo2b2o$21b2o$21bo14b2o$36b2o6$2o$2o14bo$15b2o$14b2o2bo$16b5o2$17b
o$20bo$8bo9b3o$7bobo8b3o8b2o$8bo20b2o3$21b2o$21bo$22b3o$24bo!`},"76p86":{cellSize:15,fps:25,isToroidal:!1,rle:`#N 76p86.rle
#O Open Science Grid, 2022
#C https://conwaylife.com/wiki/76P86
#C https://www.conwaylife.com/patterns/76p86.rle
x = 32, y = 40, rule = B3/S23
12b2o4b2o$12b2o4b2o7$2o28b2o$bo28bo$bobo6b3o6b3o6bobo$2b2o6bobo6bobo6b2o$10b
3o6b3o15$10b3o6b3o$2b2o6bobo6bobo6b2o$bobo6b3o6b3o6bobo$bo28bo$2o28b2o7$12b2o
4b2o$12b2o4b2o!`},"77p6h1v1":{cellSize:15,fps:30,isToroidal:!0,rle:`#N 77P6H1V1
#O Josh Ball
#C The smallest known c/6 diagonal spaceship; found in March, 2011
#C https://www.conwaylife.com/wiki/index.php?title=77P6H1V1
x = 36, y = 36, rule = b3/s23
34bob$33bobo$31b2o2bo2$30bo5b$27b2o2b2o3b$27b2o7b$27bo8b$25bobo8b$25b
2o9b$23bo2bo9b$22bo4bo8b$21bo5bo8b$18bo3bo13b$17bobo3b2o11b$16b2ob2o
15b$15b2o4bobo12b$14b2o7bo12b$13bo9bo12b$14b2o20b$15bo20b$12bo3bo19b$
11bobo22b$10bo3bob3o17b$14bo21b$8b2o26b$9b2o25b$5b4o2b2o23b$5b2o29b2$
4bo31b$2bo2bo30b$2bo2bo30b$bo34b$o35b$b2o!`},"78p70":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 78P70
#O Karel Suhajda
#C A small non-trivial period 70 oscillator, discovered on
#C June 17, 2007
#C www.conwaylife.com/wiki/index.php?title=78P70
x = 31, y = 25, rule = b3/s23
5bo19bo5b$5b3o15b3o5b$8bo13bo8b$7b2o13b2o7b2$2o27b2o$bo11b2o14bob$bobo
9b2o12bobob$2b2o23b2o2b$19bobo9b$18bo2bo9b$18bo2bo9b$11bo7bo11b$9bo2bo
18b$9bo2bo18b$9bobo19b$2b2o23b2o2b$bobo12b2o9bobob$bo14b2o11bob$2o27b
2o2$7b2o13b2o7b$8bo13bo8b$5b3o15b3o5b$5bo19bo!`},"80x41p47gun":{cellSize:10,fps:40,isToroidal:!1,rle:`#N 80x41p47gun.rle
#C https://conwaylife.com/wiki/Period-47_glider_gun
#C https://www.conwaylife.com/patterns/80x41p47gun.rle
x = 80, y = 41, rule = B3/S23
17b2o$5bo11bo$5b3o6b2obo$8bo4bo2bo$7b2o4b2o45bo7bo$59bobo5bobo$28b2o
30bo7bo$22b2o5bo$22bobob3o$24bobo$23bobo6b2o21bo17bo$24bo7bo22bo17bo$
10bo19bobo22bo5bo5bo5bo$9b3o18b2o19b2o7b3o3b3o7b2o$8bo3bo30b2o5bobo6b
2ob2ob2ob2o6bobo$8b2ob2o30bo6bo9b3o3b3o9bo$21b2ob2o15bobo5b2o10bo5bo
10b2o$21bo3bo15b2o$2b2o18b3o31b2o13b2o$bobo19bo13bo18b2o13b2o$bo7bo26b
obo$2o6bobo24bo3bo9b2o10bo5bo10b2o$7bobo26bobo11bo9b3o3b3o9bo$5b3obobo
25bo12bobo6b2ob2ob2ob2o6bobo$4bo5b2o39b2o7b3o3b3o7b2o$4b2o28b2o19bo5bo
5bo5bo$35bo19bo17bo$19b2o4b2o5b3o20bo17bo$17bo2bo4bo6bo$16bob2o6b3o$
16bo11bo16b2o$15b2o27bo2bo12bo7bo$44b3o12bobo5bobo$60bo7bo4$42b2o$43bo
$40b3o5b2o$40bo7b2o!`},"83p7h1v1":{cellSize:15,fps:40,isToroidal:!0,rle:`#N Lobster (spaceship)
#O Matthias Merzenich
#C https://conwaylife.com/wiki/Lobster_(spaceship)
#C https://conwaylife.com/patterns/83p7h1v1.rle
x = 26, y = 26, rule = B3/S23
11b3o$13bo$8b2o2bo$8b2o$12b2o$11b2o$10bo2bo2$8bo2bo$7bo3bo$6bob3o$5bo$
5bo13bobo2b2o$6bo13b2obobo$b2o13b2o2bo4bo$o2b2o2b2o6bo3bo$5bo2bo6bo6b
2o$9b2o4bobo4b2o$2bo3bo3bo5bo$6b2o4bo2bo$bobo5bo3b2o$2o8bo$5bo4bo$7bo
3bo$4b2o5bo$4bo5bo!`},"84p199":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 84p199.rle
#O Mitchell Riley, 2022
#C https://conwaylife.com/wiki/84P199
#C https://www.conwaylife.com/patterns/84p199.rle
x = 52, y = 45, rule = B3/S23
16b2o16b2o$16b2o7b2o7b2o$25b2o5$2o48b2o$2o48b2o3$18bo14bo$18b3o10b3o2$
19b3o8b3o5$8b2o32b2o$8b2o32b2o4$8b2o32b2o$8b2o32b2o5$19b3o8b3o2$18b3o
10b3o$18bo14bo3$2o48b2o$2o48b2o5$25b2o$16b2o7b2o7b2o$16b2o16b2o!`},"86p118":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 86p118.rle
#O Period1GliderGun, 2024
#C https://conwaylife.com/wiki/86P118
#C https://www.conwaylife.com/patterns/86p118.rle
x = 41, y = 48, rule = B3/S23
30bo$30bobo$29bobo$31bo3$28bo$27bobo$27bobo$28bo6$7b2o8bo$7bo8bobo13b
2o$5bobo2b3o4bo12bo2bo$4bobo4b3o16bobo$2o3bo24b3o$2o7$39b2o$8b3o24bo3b
2o$8bobo16b3o4bobo$7bo2bo12bo4b3o2bobo$7b2o13bobo8bo$23bo8b2o6$12bo$11b
obo$11bobo$12bo3$9bo$9bobo$8bobo$10bo!`},"86p5h1v1":{cellSize:15,fps:60,isToroidal:!0,rle:`#N 86P5H1V1
#O Jason Summers
#C The second c/5 diagonal spaceship to be discovered
#C https://www.conwaylife.com/wiki/index.php?title=86P5H1V1
x = 23, y = 23, rule = b3/s23
9b3o11b$8bo14b$7bo15b$11b2o10b$8b2obo11b$14b3o6b$11bo2b2o2b2o3b$2bo8b
2obo3b2o3b$bo2bo6bo2b2o7b$o3bo18b$o11bo2bo7b$o2b2ob3o3bo3b2ob2o2b$3bo
3bo2b2o2bo2bo5b$17b2o2bob$5b4o3bo5bo3bo$5b2obobo10bob$5bo5bo6b2o3b$11b
3o9b$6b2o5b2obo6b$6b2o3bo4bo6b$11bo11b$13bobo7b$14bo!`},"88p28":{cellSize:15,fps:20,isToroidal:!1,rle:`#N 88P28
#O Karel Suhajda
#C A period 28 oscillator discovered on June 12, 2007
#C www.conwaylife.com/wiki/index.php?title=88P28
x = 36, y = 36, rule = b3/s23
10b2o12b2o10b$10b2o12b2o10b5$12b2o8b2o12b$11bo2bo6bo2bo11b$11bo12bo11b
$11bo12bo11b$2o10bo10bo10b2o$2o5b3o16b3o5b2o$6bo3bo14bo3bo6b$6bo22bo6b
$7bo20bo7b7$7bo20bo7b$6bo22bo6b$6bo3bo14bo3bo6b$2o5b3o16b3o5b2o$2o10bo
10bo10b2o$11bo12bo11b$11bo12bo11b$11bo2bo6bo2bo11b$12b2o8b2o12b5$10b2o
12b2o10b$10b2o12b2o!`},"92p128":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 92p128.rle
#C https://conwaylife.com/wiki/P8_glider_reflector
#C https://www.conwaylife.com/patterns/92p128.rle
x = 31, y = 36, rule = B3/S23
5b2o8b2o$5b2o8bo$16bo$15b2o$5bo8bo$4b3o3b2o2b3o$2b2ob2o3b2o5bo$bo2bo
11b2o$4bo2$o2bo$b2o3b2o$6b2o4$5b2o19b2o$4bobo19bo$4bo9bo9bobo$3b2o10bo
8b2o$13b3o3$23b2o$23b2o3b2o$27bo2bo2$26bo$13b2o11bo2bo$13bo5b2o3b2ob2o
$14b3o2b2o3b3o$16bo8bo$14b2o$14bo$15bo8b2o$14b2o8b2o!`},"92p156":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 92P156
#O Jason Summers, 31 October 2004
#C Oscillator, or actually an eight-barrelled glider gun,
#C discovered in a RandomAgar search. Also known as "Jason's p156".
#C https://www.conwaylife.com/wiki/92P156
x = 42, y = 42, rule = B3/S23
20b2o$20b2o4$8b2o22b2o$9bo12b2o8bo$9bobo10bo7bobo$5bo4b2o10bo7b2o4bo$
5b3o15bo10b3o$8bo24bo$7b2o24b2o7$32bo2bo$33b3o$2o38b2o$2o38b2o$6b3o$6b
o2bo7$7b2o24b2o$8bo24bo$5b3o10bo15b3o$5bo4b2o7bo10b2o4bo$9bobo7bo10bob
o$9bo8b2o12bo$8b2o22b2o4$20b2o$20b2o!
#C [[ WIDTH 560 HEIGHT 560 GPS 30 ZOOM 12 AUTOSTART ]]
`},"92p23":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 92p23.rle
#O Mitchell Riley, 2022
#C https://conwaylife.com/wiki/92P23
#C https://www.conwaylife.com/patterns/92p23.rle
x = 38, y = 38, rule = B3/S23
13bo$12bobo$13bo4$22bo$22b3o$25bo$13b3o8b2o$13bobo$13bo2bo$8b2o4b2o20b
o$7bobo16b3o6bobo$7bo17bo2bo7bo$6b2o10b3o4bob2o$17b2o7bo$15bo2bo2bo$15b
o4b3o$15b3o4bo$16bo2bo2bo$11bo7b2o$9b2obo4b3o10b2o$bo7bo2bo17bo$obo6b
3o16bobo$bo20b2o4b2o$21bo2bo$22bobo$12b2o8b3o$12bo$13b3o$15bo4$24bo$23b
obo$24bo!`},"92p59":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 92p59.rle
#O Mitchell Riley, 2022
#C https://conwaylife.com/wiki/92P59
#C https://www.conwaylife.com/patterns/92p59.rle
x = 43, y = 43, rule = B3/S23
21b2o$22bo$22bobo$23b2o2b3o5$26bo$25bobo$25bobo$26bo$22b2o$3bo17bobo$
3bo17bobo$3bo5b2o11bo$8bo2bo$9b2o$2b2o$3bo8b3o$3o9bo2bo$o12b2o13b2o12b
o$27bo2bo9b3o$28b3o8bo$39b2o$32b2o$31bo2bo$20bo11b2o5bo$19bobo17bo$19b
obo17bo$19b2o$16bo$15bobo$15bobo$16bo5$13b3o2b2o$18bobo$20bo$20b2o!`},"94p27.1":{cellSize:20,fps:20,isToroidal:!1,rle:`#N 94P27.1
#O Jason Summers
#C The smallest known period 27 oscillator as of April 2009. Found in 
#C August 2005.
#C www.conwaylife.com/wiki/index.php?title=94P27.1
x = 32, y = 18, rule = b3/s23
5b2o25b$5b2o25b$17bo14b$3b6o6bo2bo13b$2bo5bo10bo12b$3bo3bo6bo4bo4b2o6b
$3o17bo3bobo5b$o2b5o7bo3bo6bo2b2ob$3bo3bo9b2o6b2obobob$bobob2o6b2o9bo
3bo3b$b2o2bo6bo3bo7b5o2bo$5bobo3bo17b3o$6b2o4bo4bo6bo3bo3b$12bo10bo5bo
2b$13bo2bo6b6o3b$14bo17b$25b2o5b$25b2o!`},"94p53":{cellSize:15,fps:30,isToroidal:!1,rle:`#N 94p53.rle
#O Mitchell Riley, 2023
#C https://conwaylife.com/wiki/94P53
#C https://www.conwaylife.com/patterns/94p53.rle
x = 51, y = 36, rule = B3/S23
24bo$24b3o$27bo$26b2o2$29b2o$28bobo$5b2o21b2o$5bo$6b3o$2o6bo$bo6bobo8b
2o3bo$bobo5b2o8b2o2bobo$2b2o18bo$6b2o15bobo$5bobo$5b2o3$44b2o$43bobo$
25bobo15b2o$28bo18b2o$25bobo2b2o8b2o5bobo$26bo3b2o8bobo6bo$42bo6b2o$
42b3o$45bo$21b2o21b2o$20bobo$20b2o2$23b2o$23bo$24b3o$26bo!`},achimsotherp16:{cellSize:15,fps:20,isToroidal:!1,rle:`#N Achim's other p16
#O Achim Flammenkamp
#C https://conwaylife.com/wiki/Achim%27s_other_p16
#C https://conwaylife.com/patterns/achimsotherp16.rle
x = 35, y = 35, rule = B3/S23
9bo15bo$9b2o13b2o$9b2o13b2o$10bo13bo5$12b2o7b2o$3o10b2o5b2o10b3o$b3o
10b2o3b2o10b3o2$8bo17bo$8b2o15b2o$9b2o13b2o$10bo13bo4$10bo13bo$9b2o13b
2o$8b2o15b2o$8bo17bo2$b3o10b2o3b2o10b3o$3o10b2o5b2o10b3o$12b2o7b2o5$
10bo13bo$9b2o13b2o$9b2o13b2o$9bo15bo!`},achimsotherp16variant:{cellSize:15,fps:20,isToroidal:!1,rle:`#N achimsotherp16variant.rle
#C https://conwaylife.com/wiki/Achim%27s_other_p16
#C https://www.conwaylife.com/patterns/achimsotherp16variant.rle
x = 47, y = 47, rule = B3/S23
16b2o11b2o$16b2o11b2o2$16bo13bo$15bobo11bobo$14bo3bo9bo3bo$14bo2bo11bo
2bo4$19b2o5b2o4$5b2o11b3o5b3o11b2o$4bo13bo2bo3bo2bo13bo$2obo15b3o3b3o
15bob2o$2o2bobo33bobo2b2o$5bo8b2o15b2o8bo$10bo3bobo13bobo3bo$10bo3bobo
13bobo3bo$15b2o13b2o4$15b2o13b2o$10bo3bobo13bobo3bo$10bo3bobo13bobo3bo
$5bo8b2o15b2o8bo$2o2bobo33bobo2b2o$2obo15b3o3b3o15bob2o$4bo13bo2bo3bo
2bo13bo$5b2o11b3o5b3o11b2o4$19b2o5b2o4$14bo2bo11bo2bo$14bo3bo9bo3bo$
15bobo11bobo$16bo13bo2$16b2o11b2o$16b2o11b2o!`},ak94:{cellSize:15,fps:60,isToroidal:!1,rle:`#N AK-94
#O Mike Playle
#C The smallest known true p94 gun, found in May 2013.
#C www.conwaylife.com/wiki/AK-94
x = 38, y = 25, rule = B3/S23
7bo7bo7b2o$7b3o5b3o5b2o$10bo7bo$9b2o6b2o16b2o$30b2o2bo2bo$30bobo2b2o$
33b2o$5bo28bo$5b3o26bob2o$8bo22b2obo2bo$7b2o22b2ob2o3$17bo$2b2ob2o9bob
o10b2o$o2bob2o8bo3bo9bo$2obo11bo3bo10b3o$3bo11bo3bo12bo$3b2o11bobo$b2o
2bobo9bo$o2bo2b2o$b2o16b2o$19bo$13b2o5b3o$13b2o7bo!
`},alternatepiorbital:{cellSize:10,fps:40,isToroidal:!1,rle:`#N Alternate pi orbital
#O Nicolay Beluchenko
#C An alternate version of pi orbital using a period 12 sparker found 
#C by Nicolay Beluchenko
#C https://www.conwaylife.com/wiki/index.php?title=Pi_orbital
x = 63, y = 61, rule = b3/s23
20b2o41b$18b2o2bo40b$18b5o40b$22bo40b$15b2o2b4o40b$15b2obo4b4o36b$14bo
bobob2obobobo35b$14bobobob2obobobo35b$15b4o4bob2o13b2o21b$19b4o2b2o13b
2o21b$19bo43b$19b5o39b$19bo2b2o39b$20b2o34bo6b$55bo2bo4b$55bo2bo4b$55b
o2bo4b$53bo3bob3ob$53b4obo4b$37b2o12b2o4bo4bo$9b2o26bobo12bob2obob3ob$
9b2o28b2o7b3obob2obo5b$37bobo7bo4bo4b2o4b$22b2o13b2o12bob4o6b$25bobo
20b3obo3bo6b$27bo23bo2bo8b$25bo25bo2bo8b$21bo29bo2bo8b$22b2o29bo9b4$9b
o53b$8bo2bo51b$8bo2bo51b$8bo2bo51b$6bo3bob3o48b$6b4obo51b$4b2o4bo4bo
47b$5bob2obob3o37b2o9b$b3obob2obo41b2o9b$o4bo4b2o51b$4bob4o53b$b3obo3b
o53b$4bo2bo55b$4bo2bo55b$4bo2bo55b$6bo34b2o20b$39b2o2bo19b$39b5o19b$
43bo19b$21b2o13b2o2b4o19b$21b2o13b2obo4b4o15b$35bobobob2obobobo14b$35b
obobob2obobobo14b$36b4o4bob2o15b$40b4o2b2o15b$40bo22b$40b5o18b$40bo2b
2o18b$41b2o!`},apps:{cellSize:10,fps:60,isToroidal:!0,rle:`#N Asymmetric pre-pulsar spaceship
#O Alan Hensel
#C An asymmetric version of the period 30 orthogonal c/5 pre-pulsar spaceship, in which two spiders push a pre-pulsar. Found in May 1998.
#C www.conwaylife.com/wiki/index.php?title=Pre-pulsar_spaceship
x = 69, y = 15, rule = b3/s23
37bo31b$36b3o30b$31bo37b$30b3o36b2$44b2o5b2o5b2o5b2o2b$42bo3bo3bo2bo3b
o2bo3bo3bo$2b2o5b2o5b2o5b2o17bo3bobob3o5b3obobo3bo$o3bo3bo2bo3bo2bo3bo
3bo15bo5b2o2b3ob3o2b2o5bo$o3bobob3o5b3obobo3bo15b2ob3o15b3ob2o$o5b2o2b
3ob3o2b2o5bo15bo25bo$2ob3o15b3ob2o16bo3bo15bo3bob$o25bo17bo2bo15bo2bo
2b$bo3bo15bo3bo43b$2bo2bo15bo2bo!`},b52bomber:{cellSize:10,fps:40,isToroidal:!1,rle:`#N B-52 bomber
#O Noam Elkies
#C A true period 104 double-barrelled glider gun. It uses a B-heptomino and
#C emits one glider every 52 generations.
#C www.conwaylife.com/wiki/index.php?title=B-52_bomber
x = 39, y = 21, rule = B3/S23
b2o36b$b2o17bo18b$19bobo12bobo2b$20bo12bo5b$2o7b2o23bo2bob$2obo5b2o23b
obobo$3bo23bo7bo2bo$3bo23b2o7b2ob$o2bo17b2o5bo10b$b2o18bo17b$21b3o15b$
36b2ob$36b2ob$b2o36b$o2bo35b$obobo16bobo4b2o5b2o2b$bo2bo17b2o4b2o5b2ob
o$5bo12bo3bo15bo$2bobo12bobo18bo$18bo16bo2bo$36b2o!`},barge2extended:{cellSize:7,fps:40,isToroidal:!0,rle:`#N Barge 2 (extended)
#O Hartmut Holzwart
#C A c/2 period 2 orthogonal spaceship.
#C www.conwaylife.com/wiki/index.php?title=Barge_2_(spaceship)
x = 105, y = 50, rule = b3/s23
14b3ob3o63b3ob3o14b$13bo2bobo2bo5b3o5b3o5b3o5b3o5b3o5b3o5b3o5bo2bobo2b
o13b$12bo3bobo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bo3bobo3bo
12b$7b3obo2bobobobo2bobo5bobo5bobo5bobo5bobo5bobo5bobo5bobo2bobobobo2b
ob3o7b$6bo2bobo4bobo4bobo5bobo5bobo5bobo5bobo5bobo5bobo5bobo4bobo4bobo
2bo6b$5bo3bobobobo3bobobobob3obobob3obobob3obobob3obobob3obobob3obobob
3obobobobo3bobobobo3bo5b$5bo21bobo5bobo5bobo5bobo5bobo5bobo5bobo21bo5b
$7bo89bo7b$4bobo19b2ob2o3b2ob2o3b2ob2o3b2ob2o3b2ob2o3b2ob2o3b2ob2o19bo
bo4b$3b2obob3o83b3obob2o3b$2bobobo3bo21b9o7b9o7b9o21bo3bobobo2b$b2obo
25b2obo5bob2o3b2obo5bob2o3b2obo5bob2o25bob2ob$o3bo5b2o18bo11bo3bo11bo
3bo11bo18b2o5bo3bo$32bo2bobo2bo7bo2bobo2bo7bo2bobo2bo32b$2ob2o24b2o2bo
2bo2bo2b2ob2o2bo2bo2bo2b2ob2o2bo2bo2bo2b2o24b2ob2o$33bobobobo9bobobobo
9bobobobo33b$26b3o3bo2bobo2bo3bo3bo2bobo2bo3bo3bo2bobo2bo3b3o26b$26bo
17bo15bo17bo26b$34b2ob2o11b2ob2o11b2ob2o34b$25b2o51b2o25b$32b9o7b9o7b
9o32b$30b2obo5bob2o3b2obo5bob2o3b2obo5bob2o30b$30bo11bo3bo11bo3bo11bo
30b$32bo2bobo2bo7bo2bobo2bo7bo2bobo2bo32b$29b2o2bo2bo2bo2b2ob2o2bo2bo
2bo2b2ob2o2bo2bo2bo2b2o29b$33bobobobo9bobobobo9bobobobo33b$26b3o3bo2bo
bo2bo3bo3bo2bobo2bo3bo3bo2bobo2bo3b3o26b$26bo17bo15bo17bo26b$34b2ob2o
11b2ob2o11b2ob2o34b$25b2o51b2o25b$32b9o7b9o7b9o32b$30b2obo5bob2o3b2obo
5bob2o3b2obo5bob2o30b$30bo11bo3bo11bo3bo11bo30b$32bo2bobo2bo7bo2bobo2b
o7bo2bobo2bo32b$29b2o2bo2bo2bo2b2ob2o2bo2bo2bo2b2ob2o2bo2bo2bo2b2o29b$
33bobobobo9bobobobo9bobobobo33b$26b3o3bo2bobo2bo3bo3bo2bobo2bo3bo3bo2b
obo2bo3b3o26b$26bo17bo15bo17bo26b$34b2ob2o11b2ob2o11b2ob2o34b$25b2o51b
2o25b$32b9o7b9o7b9o32b$30b2obo5bob2o3b2obo5bob2o3b2obo5bob2o30b$30bo
11bo3bo11bo3bo11bo30b$32bo2bobo2bo7bo2bobo2bo7bo2bobo2bo32b$29b2o2bo2b
o2bo2b2ob2o2bo2bo2bo2b2ob2o2bo2bo2bo2b2o29b$33bobobobo9bobobobo9bobobo
bo33b$26b3o3bo2bobo2bo3bo3bo2bobo2bo3bo3bo2bobo2bo3b3o26b$26bo17bo15bo
17bo26b$34b2ob2o11b2ob2o11b2ob2o34b$25b2o51b2o!`},beluchenkosp37:{cellSize:15,fps:20,isToroidal:!1,rle:`#N beluchenkosp37.rle
#O Nicolay Beluchenko, April 2009
#C The first period 37 oscillator to be found.  Also called 124P37.
#C https://conwaylife.com/wiki/Beluchenko%27s_p37
#C https://www.conwaylife.com/patterns/beluchenkosp37.rle
x = 37, y = 37, rule = 23/3
11b2o11b2o11b$11b2o11b2o11b3$6bo23bo6b$5bobo5bo9bo5bobo5b$4bo2bo5bob2o
3b2obo5bo2bo4b$5b2o10bobo10b2o5b$15bobobobo15b$16bo3bo16b2$2o33b2o$2o
33b2o$5b2o23b2o5b2$6bobo19bobo6b$6bo2bo17bo2bo6b$7b2o19b2o7b2$7b2o19b
2o7b$6bo2bo17bo2bo6b$6bobo19bobo6b2$5b2o23b2o5b$2o33b2o$2o33b2o2$16bo
3bo16b$15bobobobo15b$5b2o10bobo10b2o5b$4bo2bo5bob2o3b2obo5bo2bo4b$5bob
o5bo9bo5bobo5b$6bo23bo6b3$11b2o11b2o11b$11b2o11b2o!`},beluchenkosp37shasslingbeehiveandblock:{cellSize:15,fps:20,isToroidal:!1,rle:`#N beluchenkosp37shasslingbeehiveandblock.rle
#C https://conwaylife.com/wiki/Beluchenko%27s_p37
#C https://www.conwaylife.com/patterns/beluchenkosp37shasslingbeehiveandblock.rle
x = 72, y = 44, rule = b3/s23
46b2o11b2o11b$46b2o11b2o11b3$41bo4b3o9b3o4bo6b$40bobo3bobo9bobo3bobo5b
$39bo2bo21bo2bo4b$11b2o11b2o14b2o5bo2b2o3b2o2bo5b2o5b$11b2o11b2o25bo3b
o16b$47bo3bo3bo3bo12b$48bo9bo13b$6bo23bo4b2o2b2o25b2o2b2o$5bobo4bo11bo
4bobo3b2o2bo2bobo17bobo2bo2b2o$4bo2bo4b2o9b2o4bo2bo6b2o4bo15bo4b2o4b$
5b2o23b2o40b$13bo2bo3bo2bo18bo21bo7b$13bo2bo3bo2bo18b3o17b3o7b$14b3o3b
3o49b$2o33b2o35b$2o3b2o23b2o2bo2bo34b$6bob2o17b2obo4b2o5b3o17b3o7b$10b
o15bo15bo21bo7b$10bo15bo45b$8b3o15b3o10b2o4bo15bo4b2o4b$35b2o2bo2bobo
17bobo2bo2b2o$35b2o2b2o25b2o2b2o$48bo9bo13b$8b3o15b3o18bo3bo3bo3bo12b$
10bo15bo24bo3bo16b$10bo15bo13b2o5bo2b2o3b2o2bo5b2o5b$6bob2o17b2obo8bo
2bo21bo2bo4b$2o3b2o23b2o3b2o3bobo3bobo9bobo3bobo5b$2o33b2o4bo4b3o9b3o
4bo6b$14b3o3b3o49b$13bo2bo3bo2bo48b$13bo2bo3bo2bo22b2o11b2o11b$5b2o23b
2o14b2o11b2o11b$4bo2bo4b2o9b2o4bo2bo39b$5bobo4bo11bo4bobo40b$6bo23bo
41b3$11b2o11b2o46b$11b2o11b2o!`},beluchenkosp51:{cellSize:15,fps:20,isToroidal:!1,rle:`#N beluchenkosp51.rle
#O Nicolay Beluchenko, 2009
#C https://conwaylife.com/wiki/Beluchenko%27s_p51
#C https://conwaylife.com/patterns/beluchenkosp51.rle
x = 31, y = 31, rule = B3/S23
3b2o21b2o$3b2o21b2o2$2o27b2o$2o5bo2b3o5b3o2bo5b2o$6b3ob3o5b3ob3o$5bo2bo13bo2b
o$4b2o19b2o$5b2o17b2o2$4b2o19b2o$4b2o19b2o$4b2o19b2o6$4b2o19b2o$4b2o19b2o$4b
2o19b2o2$5b2o17b2o$4b2o19b2o$5bo2bo13bo2bo$6b3ob3o5b3ob3o$2o5bo2b3o5b3o2bo5b
2o$2o27b2o2$3b2o21b2o$3b2o21b2o!`},bigun_synth:{cellSize:10,fps:30,isToroidal:!1,rle:`#N Bi-gun_synth
#O Ian07
#C Glider synthesis of bi-gun.
#C www.conwaylife.com/wiki/index.php?title=Bi-gun
x = 82, y = 47, rule = B3/S23
59bobo$59b2o$60bo3$obo$b2o$bo11$47bobo$48b2o$48bo$32b2o$27bo4bobo18bob
o$27b2o3bo16bo3b2o$26bobo18bobo4bo$48b2o$33bo$32b2o$32bobo11$80bo$79b
2o$79bobo3$21bo$21b2o$20bobo!`},bookendpaircatalysts:{cellSize:12,fps:20,isToroidal:!1,rle:`#N bookendpaircatalysts.rle
#C https://conwaylife.com/wiki/Cis-mirrored_bookend
#C https://www.conwaylife.com/patterns/bookendpaircatalysts.rle
x = 91, y = 52, rule = B3/S23
70b2o3b2o$70bobobobo$12b2o3b2o38b2o13bobo13b2o$12bobobobo38b2obo10b2ob
2o10bob2o$14bobo44bo23bo$13b2ob2o40bo29bo$bo27bo29bob2o21b2obo$obo3b3o
13b3o3bobo30b2o6b3o3b3o6b2o$bo4bobo13bobo4bo39bobo3bobo$6b3o13b3o44b3o
3b3o4$6b3o13b3o35b3o21b3o$bo4bobo13bobo4bo33bo19bo$obo3b3o13b3o3bobo
28bo3bo19bo3bo$bo27bo28bobo2bo19bo2bobo$13b2ob2o38bo2bobo23bobo2bo$14b
obo39bo3bo10b2ob2o10bo3bo$12bobobobo37bo15bobo15bo$12b2o3b2o38b3o10bob
obobo10b3o$70b2o3b2o14$26bo2bo31bo2bo$25bo4bo11b2o3b2o11bo4bo$24bo5bo
11bobobobo11bo5bo$23b2ob2o16bobo16b2ob2o$22bo7bo12b2ob2o12bo7bo$21bo2b
3obobo29bobob3o2bo$22b3obob2o10b3o5b3o10b2obob3o$39bo3bo3bo3bo$22b3obo
b2o8bo5bobo5bo8b2obob3o$21bo2b3obobo7bo5bobo5bo7bobob3o2bo$22bo7bo7bo
5bobo5bo7bo7bo$23b2ob2o11bo3bo3bo3bo11b2ob2o$24bo5bo9b3o5b3o9bo5bo$25b
o4bo29bo4bo$26bo2bo31bo2bo$34b2o19b2o$34b2o19b2o!`},canadagrey:{cellSize:15,fps:30,isToroidal:!0,rle:`#N canadagrey.rle
#C https://conwaylife.com/wiki/Canada_Grey
#C https://www.conwaylife.com/patterns/canadagrey.rle
x = 41, y = 28, rule = B3/S23
16b3o3b3o$15bo2bo3bo2bo$18bo3bo$14bo3bo3bo3bo$14bo3bo3bo3bo$18bo3bo$18bo3bo2$
16b3o3b3o$17bo5bo$17b7o$16bo7bo$15b11o$14bo11bo$13b15o$12bo15bo$11b19o$10bo
19bo$3o6b23o6b3o$o2bo4bo23bo4bo2bo$o6b27o6bo$o3bobo11bobobo11bobo3bo$o5b7obo
11bob7o5bo$o4b2o3bobobo11bobobo3b2o4bo$bo3bo29bo3bo$5bo29bo$3b3o29b3o$4b2o29b
2o!`},cappedp140gun:{cellSize:12,fps:30,isToroidal:!1,rle:`#N cappedp140gun.rle
#C https://conwaylife.com/wiki/R-pentomino_hasslers
#C https://www.conwaylife.com/patterns/cappedp140gun.rle
x = 50, y = 48, rule = B3/S23
19b2o$20bo$20bobo10b2o$21b2o10b2o11$28b2o$7b2o19bobo$2o6b3o16bo2bo$o5b
o4bo10bo5b2o$b3obob4o10bobo4bo$3bobo14b2o$4b2o2b3o$4b2o2b3o$2bobo3b3o
$bobob2ob3o$bobob2ob3o$2bobo3b3o$4b2o2b3o$4b2o2b3o$3bobo$b3obob4o$o5b
o4bo$2o6b3o$7b2o$40bo$27b3o11bo$26bo12b3o$25b2o3bo$23b3obo8b2o$11b2o9b
2obobobo4bo2bo$12bo8bobo2bo9bo$12bobo8b2o5bo5bo2b2o5b2o$13b2o2bo5bo5b
2o8bobo4bobo$17bo9bo2bobo8bo6bo$16bo2bo4bobobob2o9b2o5b2o$16b2o8bob3o
$23bo3b2o$27bo$24b3o!`},cappedp260glidergun:{cellSize:10,fps:40,isToroidal:!1,rle:`#N cappedp260glidergun.rle
#C https://conwaylife.com/wiki/Pi-heptomino_hasslers
#C https://www.conwaylife.com/patterns/cappedp260glidergun.rle
x = 75, y = 47, rule = B3/S23
4b2o$4bo$o4b3o6b2o$3o4bo8bo$3bo9bo$2b2o6b2o2b2o$7b7o6b2o$7b4ob2o6bo34b
2o$3b2o3b2ob2o5bobo34bo$3b2o8bo4b2o7bo25bobo5b2o$27b3o23b2o7bo$7bob2o
19bo28b3o$7bob2o18b2o27bo3b3o$9bo2bo44bob3o2bo$17b2o38bobobobo$12bobob
o2bo36b2obo$2b2o10bobo39bo2bob2o$2bo2bo10bo3bo26b2o7b2obo$3b3o9b2o2b2o
25bo2bo6b2o$8bo8b2o27bo2bo6bo2bo$5b4o37bo2bo6b2ob3o$5bo41b2o8bo4bo$6bo
50bob3o$5b2o8b2o41b2o8b2o$13b3obo15bo8b2o24bo$12bo4bo13b2o8bobo25bo$
13b3ob2o13b2o7bo24b4o$15bo2bo22bobo22bo$17b2o23b2o25b3o$15bob2o43b2o5b
o2bo$12b2obo2bo46b2o4b2o$15bob2o41b2obo$11bobobobo42b2o3bob2o$10bo2b3o
bo42b2obo3b2o$10b3o3bo27b2o19bob2o$13b3o28bo17b2o$12bo7b2o23b3o17b2o$
12b2o5bobo25bo7b2o13b2o$19bo34bobo13b2o$18b2o34bo$53b2o$59b2o10b2o$61b
o9bo$58bo8bo4b3o$59b2o6b3o4bo$70bo$69b2o!`},cappedp27gun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N cappedp27gun.rle
#C https://conwaylife.com/wiki/Honey_farm_hassler
#C https://www.conwaylife.com/patterns/cappedp27gun.rle
x = 65, y = 40, rule = B3/S23
48b2o$48b2o3$49bo$27bo20b3o$27b3o10bo6b2o2bo$21bo8bo7b3o6b2ob3o$21b3o
5b2o6bo9b6obo$24bo12b2o5b2obobo2b2obo$13b2o8b2o6b3o9bo2bo6bobo$13b2o
15bo3bo9b2o8bo$29bo5bo6b3o10b4o$29bo5bo5b3o12b4o3b2o$14bo14bo5bo4bob2o
11b2o2b2o2b2o$13b3o14bo3bo4b2o2b2o11b2obo$12b2o2bo14b3o6b4o12b3o$12b2o
b3o23b4o10b3o$12b6obo25bo8b2o$9b2obobo2b2obo23bobo6bo2bo$8bo2bo6bobo
23bob2o2bobob2o$9b2o8bo25bob6o$7b3o10b4o23b3ob2o$6b3o12b4o6b3o14bo2b2o
$5bob2o11b2o2b2o4bo3bo14b3o$2o2b2o2b2o11b2obo4bo5bo14bo$2o3b4o12b3o5bo
5bo$6b4o10b3o6bo5bo$10bo8b2o9bo3bo15b2o$9bobo6bo2bo9b3o6b2o8b2o$9bob2o
2bobob2o5b2o12bo$10bob6o9bo6b2o5b3o$12b3ob2o6b3o7bo8bo$13bo2b2o6bo10b
3o$14b3o20bo$15bo3$15b2o$15b2o!`},cappedp30nonqbglidergun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N cappedp30nonqbglidergun.rle
#C https://conwaylife.com/wiki/Period-30_honey_farm_hasslers
#C https://www.conwaylife.com/patterns/cappedp30nonqbglidergun.rle
x = 46, y = 28, rule = B3/S23
30b2o$17b2o6b2o3b2o$18bo7bo$18bob2ob3o$19bobobo$12b2o$15b2o$16bo13b3o$
14b3o12bo3bo$28bo5bo$10b3o15bo5bo$10bo17bo5bo$10b2o17bo3bo$13b2o15b3o$
2obobobo14b3o$ob2ob2obo13b3o8b2o7b2o$8bo14bo9bo8bobo$8b2o13bo10b3o7bo$
23bo12bo7b2o$22bobo3$22bobo$23bo$23bo$23bo$22b3o$22b3o!`},cappedp37gun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N cappedp37gun.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/cappedp37gun.rle
x = 55, y = 45, rule = B3/S23
36bo$36b3o14b2o$39bo13bo$38b2o11bobo$51b2o2$46b2o$45bo2bo$45bo2bo$28b
2o14bo2b2o$29bo14bobo$29bobo12b3o4b2o$30b2o4b3o12bobo$36bobo14bo$34b2o
2bo14b2o$34bo2bo$34bo2bo$35b2o3$19b2o22b2o$8bo11bo22bo$8b3o9bobo21b3o$
11bo9b2o8b3o12bo$10bo19bo3bo$10bo2bo15bo5bo$29bo5bo$11bo17bo5bo$11b3o
2bo13bo3bo2b2o$14b2obo13b3o3bobo$2o12b2obo21bo$bo14bo22b2o$bobo19b2o$
2b2o19bobo$10bo14bo9b2o$9bob2o12b2o8bobo$9bob2o24bo$10bo2b3o21b2o$15bo
2$2b2o9bo2bo$bobo12bo$bo13bo$2o14b3o$18bo!`},cappedp43glidergun:{cellSize:20,fps:20,isToroidal:!1,rle:`#N cappedp43glidergun.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/cappedp43glidergun.rle
x = 32, y = 25, rule = B3/S23
10b2o$2b2o6bobob2o$3bo8bobobo7bo$3bobo5bo2bo2bo5bobo$4b2o5b2o2b2o7bo3$
2o$bo$bobo3b3o12b3o$2b2o2bo3bo10bo3bo$5bo5bo8bo5bo$5bo5bo8bo5bo$5bo5b
o8bo5bo$6bo3bo10bo3bo2b2o$7b3o12b3o3bobo$30bo$30b2o3$7bo7b2o2b2o5b2o$
6bobo5bo2bo2bo5bobo$7bo7bobobo8bo$16b2obobo6b2o$20b2o!`},cappedp74gun:{cellSize:10,fps:40,isToroidal:!1,rle:`#N cappedp74gun.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/cappedp74gun.rle
x = 53, y = 50, rule = B3/S23
20b2o$20b2o5b2o$28bo$28bob2o$13b2o14bobo$12bo2bo15bob2obo$12bob2o14b2o
bob2o$11b2o$10bo3b2o$11b3o2bo4b3o$14b2obo2bo3bo8b2o6bo$13bo2bo2bo5bo7b
2o5bobo$13b2o4bo5bo14bob3o$5b2o12bo5bo11b2obo4bo$6bo13bo3bo12bobobobob
o$5bo4b2o9b3o15bobob2o4b2o$5b2o3b2o26bobo8bo$39bo7bobo$3b4o40b2o$3bo2b
o19bobo7b3o$4bo21bobo6bo3bo$b3o15b3o6bo5bo5bo$bo32bo5bo$19b2o13bo5bo$
11b3o21bo3bo$10bo3bo21b3o$9bo5bo13b2o18b2o$9bo5bo33bo$2o7bo5bo5bo6b3o
19b3o$2o8bo3bo6bobo21b2o5bo$11b3o7bobo19bo2bo$43b3o$10bo$9bobo26b2o3b
2obob2o$5b2obobo15b3o9b2o4bob2obo$4bobobobobo12bo3bo14bo$4bo4bob2o11bo
5bo12b2o$5b3obo14bo5bo4b2o$7bobo5b2o7bo5bo2bo2bo$8bo6b2o8bo3bo2bob2o$
26b3o4bo2b3o$34b2o3bo$37b2o$13b2obob2o14b2obo$13bob2obo15bo2bo$18bobo
14b2o$18b2obo$21bo$21b2o5b2o$28b2o!`},cappedp87gun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N cappedp87gun.rle
#C https://conwaylife.com/wiki/Pi-heptomino_hasslers
#C https://www.conwaylife.com/patterns/cappedp87gun.rle
x = 49, y = 34, rule = B3/S23
44bo$43bobo$43bo2bo$39b2ob2ob2o$24b2o13b2obo2bo$25bo9b2o7bo2bo$13bo11b
obo7b2o8b3o$12bobo11b2o14b3o$13bo27bo3bo$35b3o3bob2obo$35bo2bo3bo3bo$
39bo4b2ob2o$35bo2bo6bobo$35b3o7bobo$46bo5$2bo$bobo7b3o$bobo6bo2bo$2ob
2o4bo$2bo3bo3bo2bo$2bob2obo3b3o$3bo3bo27bo$4b3o14b2o11bobo$b3o8b2o7bo
bo11bo$bo2bo7b2o9bo$3bo2bob2o13b2o$2b2ob2ob2o$2bo2bo$3bobo$4bo!`},cappedp91gun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N cappedp91gun.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/cappedp91gun.rle
x = 54, y = 37, rule = B3/S23
31bo7b2o$31b3o5b2o$25bo8bo$25b3o5b2o16b2o$28bo17b2o2bo2bo$27b2o6b3o8b
obo2b2o$34bo3bo10b2o$33bo5bo10bo$33bo5bo10bob2o$14b2o17bo5bo7b2obo2bo
$15bo18bo3bo8b2ob2o$15bobo17b3o$16b2o2$46b2o$12b2o32bobo$13bo34bo$13b
obo32b2o$14b2o22b2o$4b2o32bobo$5bo34bo$5bobo32b2o$6b2o2$36b2o$16b3o17b
obo$2b2ob2o8bo3bo18bo$o2bob2o7bo5bo17b2o$2obo10bo5bo$3bo10bo5bo$3b2o10b
o3bo$b2o2bobo8b3o6b2o$o2bo2b2o17bo$b2o16b2o5b3o$19bo8bo$13b2o5b3o$13b2o7bo!`},cappeduturnerp380gun:{cellSize:10,fps:30,isToroidal:!1,rle:`#N cappeduturnerp380gun.rle
#C https://conwaylife.com/wiki/U-turner_hasslers
#C https://www.conwaylife.com/patterns/cappeduturnerp380gun.rle
x = 65, y = 62, rule = B3/S23
18bo$18b3o$21bo5b2o$20b2o4bob3o16bo$26bo4bo5b2o6b3o$23b2obob3o6b2o5bo
$23bo2bobo15b2o$24b2o5$59bo$13bob2o42bo3b2o$13b2obo42bo4bo$62b2o$22b2o
$22b2o33b2ob2o$56bobob2o$57b3o$59bob2o$58b2ob2o$59b3o$53bo8bo$11bo20b
2o18b3o6bobo$10bobo19bo18b2ob2o6bo$10bobo17bobo17b3ob3o$9b2ob2o16b2o19b
2ob2o2b2o$7bo44b3o4bo$7b4ob2o39bo3bo2b2o$2b2o6bob2o38b2o3b3o2bo$2bo2b
3o43b2obo6b2o$3b2o2bo43b2ob4o$5bo51bo$5b2o3b2o21b2o16b2ob2o$9bobo20bo
bo17bobo$2bo5bo23bo19bobo$bobo7bo19b2o20bo$2bo8bo$3b3o2bobo$2b2ob2o$2b
2obo16b3o$5b3o14b3o$3b2obobo12bobo$3b2ob2o13b2o18b2o$41b2o$b2o$o4bo42b
ob2o$2o3bo42b2obo$5bo5$39b2o$19b2o15bobo2bo$20bo5b2o6b3obob2o$17b3o6b
2o5bo4bo$17bo16b3obo4b2o$36b2o5bo$44b3o$46bo!`},carnivalshuttle:{cellSize:25,fps:20,isToroidal:!1,rle:`#N Carnival shuttle
#O Robert Wainwright
#C A period 12 oscillator.
#C www.conwaylife.com/wiki/index.php?title=Carnival_shuttle
x = 38, y = 7, rule = B3/S23
33bo3bo$2o3b2o26b5o$bobobo3bo2bo6b2o3bo2bo7bo2b$b2ob2o2b2o3b2o4b2o2b2o
3b2o4bobob$bobobo3bo2bo6b2o3bo2bo7bo2b$2o3b2o26b5o$33bo3bo!`},carnivalshuttle2:{cellSize:15,fps:20,isToroidal:!1,rle:`#N carnivalshuttle2.rle
#C https://conwaylife.com/wiki/Carnival_shuttle
#C https://conwaylife.com/patterns/carnivalshuttle2.rle
x = 80, y = 34, rule = B3/S23
42b2ob2o$41bobobobo$41bobobobo20b2o$42bobobo20bobo$44bo20b3o$3ob3o19bo
bo13bo2bo18bo3bo$3bo6bo3bo3bo3bo3bobo4bo3bo7bo4bo3bo5bo3b5o$2o3b2o3bob
3o3b3obo6bo3b3obo3bo3bo4b3obo3b3o3b2o$3bo6bo3bo3bo3bo3bobo4bo3bo7bo4bo
3bo5bo3b5o$3ob3o19bobo13bo2bo18bo3bo$44bo20b3o$42bobobo20bobo$41bobobo
bo20b2o$2b3o36bobobobo26b2o$3bo38b2ob2o27b2o$3bo$72b6o$2b3o50bo15bo3bo
2bo$22bo10bo9b2o9bobo15b2o3b2o$21bobo8bobo8b2o10bo17bo$22bo10bo5bo33bo
bo$bobobo35bo5bo4bo5bobo12bobo$bobobo11bobo5bo4bo5bo4bo4bo6bo4bobo3bo
3bo3bo5bo$bo3bo3bo3bo3bobo4bo6bo3bo6bo3bo6bo3bo6bob3o3bo4bobo$2bobo4b
3obo6bo3bo6bo3bo6bo3bo6bo4bobo3bo3bo3bo5bo$bo3bo3bo3bo3bobo4bo6bo4bo4b
o5bo4bo5bobo12bobo$bobobo11bobo5bo4bo5bo36bobo$bobobo32bo5bo10bo17bo$
22bo10b2o8bobo8bobo15b2o3b2o$21bobo9b2o9bo10bo15bo3bo2bo$22bo49b6o2$
74b2o$74b2o!`},catereron44p38:{cellSize:15,fps:30,isToroidal:!1,rle:`#N catereron44p38.rle
#C https://conwaylife.com/wiki/44P38
#C https://www.conwaylife.com/patterns/catereron44p38.rle
x = 44, y = 23, rule = B3/S23
24bo$23bobo2$23bo$23b2o$20b5o$20b2ob2o$23bo3$5bo32bo$5b2o30b2o2$6bobo
3b2o16b2o3bobo$b3o2bobo2bo2bo14bo2bo2bobo2b3o$12bobo14bobo$13b2o14b2o
3$2b2o36b2o$3bo36bo$3o38b3o$o42bo!`},catereron84p199:{cellSize:15,fps:30,isToroidal:!1,rle:`#N catereron84p199.rle
#C https://conwaylife.com/wiki/84P199
#C https://www.conwaylife.com/patterns/catereron84p199.rle
x = 61, y = 45, rule = B3/S23
16b2o16b2o$16b2o7b2o7b2o$25b2o5$2o48b2o$2o48b2o2$55bo$18bo14bo19bo3b4o
$18b3o10b3o19bo3bo$53bo$19b3o8b3o23bo$54b2o4$8b2o32b2o$8b2o32b2o4$8b2o
32b2o$8b2o32b2o5$19b3o8b3o2$18b3o10b3o$18bo14bo3$2o48b2o$2o48b2o5$25b
2o$16b2o7b2o7b2o$16b2o16b2o!`},centinalreflector:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Centinal reflector
#O Bill Gosper
#C Centinal about to reflect a glider 90 degrees
#C https://www.conwaylife.com/wiki/index.php?title=Centinal
x = 52, y = 22, rule = b3/s23
25bo26b$23b2o27b$24b2o26b3$2o48b2o$bo48bob$bobo36bo7bobob$2b2o7b2o5b2o
13bo5bo2bo5b2o2b$18bobo11b2o5bo12b$12b2o6bo10b2o10bo8b$8bobo2bo4b3o11b
2o4b2o3bo8b$9b3obo24b5o9b2$9b3obo24b5o9b$8bobo2bo4b3o11b2o4b2o3bo8b$
12b2o6bo10b2o10bo8b$18bobo11b2o5bo12b$2b2o7b2o5b2o13bo5bo2bo5b2o2b$bob
o36bo7bobob$bo48bob$2o48b2o!`},charitysp25:{cellSize:15,fps:20,isToroidal:!1,rle:`#N charitysp25.rle
#O Charity Engine, 2023
#C https://conwaylife.com/wiki/Charity%27s_p25
#C https://www.conwaylife.com/patterns/charitysp25.rle
x = 37, y = 37, rule = B3/S23
13b3o5b3o3$10bo15bo$9b2o15b2o$10bo2bo9bo2bo$11b2o11b2o3$4bo27bo$3b3o
25b3o$6bo5bob3o3b3obo5bo$6bo4bo3bo5bo3bo4bo$o4bo8bo7bo8bo4bo$o10bobo9b
obo10bo$o10b2o11b2o10bo$11bo13bo4$11bo13bo$o10b2o11b2o10bo$o10bobo9bob
o10bo$o4bo8bo7bo8bo4bo$6bo4bo3bo5bo3bo4bo$6bo5bob3o3b3obo5bo$3b3o25b3o
$4bo27bo3$11b2o11b2o$10bo2bo9bo2bo$9b2o15b2o$10bo15bo3$13b3o5b3o!`},cribbage:{cellSize:25,fps:20,isToroidal:!1,rle:`#N Cribbage
#O Mitchell Riley
#C Discovered on July 14, 2023
#C This was the first period-19 oscillator to be found.
#C https://conwaylife.com/wiki/Cribbage
x = 32, y = 21, rule = B3/S23
4b2o$4bo$b2obo10bo$bo2b2o9b3o$3bo2bo11bo$bob3obo9b2o$obo4bo$o2b3o15bo$
b2o2bo5bo8b2o7b2o$3b2o6bo16bobo$3bo7bo8bo7bo$bobo16bo6b2o$b2o7b2o8bo5b
o2b2o$10bo15b3o2bo$24bo4bobo$13b2o9bob3obo$13bo11bo2bo$14b3o9b2o2bo$
16bo10bob2o$27bo$26b2o!
`},dragon:{cellSize:20,fps:60,isToroidal:!0,rle:`#N Dragon
#O Paul Tooke
#C An orthogonal period 6 spaceship. The first c/6 spaceship to be constructed.
#C www.conwaylife.com/wiki/index.php?title=Dragon
x = 29, y = 18, rule = B3/S23
12bo16b$12b2o14bo$10bob2o5bobo4b2ob$5bo3bo3b3o2bo4bo5b$2o3bo2bo6bobo5b
3o2bo$2o3bob2o6bo3bobobo5b$2o3bo10bobo7b2ob$5b2o14bo6bo$7bo12bobo6b$7b
o12bobo6b$5b2o14bo6bo$2o3bo10bobo7b2ob$2o3bob2o6bo3bobobo5b$2o3bo2bo6b
obo5b3o2bo$5bo3bo3b3o2bo4bo5b$10bob2o5bobo4b2ob$12b2o14bo$12bo!`},dragonflotillae:{cellSize:15,fps:60,isToroidal:!0,rle:`#N Dragon flotillae
#C Flotillae involving the c/6 orthogonal period 6 dragon.
#C www.conwaylife.com/wiki/index.php?title=Dragon
x = 62, y = 30, rule = b3/s23
28b3o4b3o24b$4b3o4b3o14b3o4b3o10b3o4b3o4b$4b3o4b3o34b3o4b3o4b3$27b5o2b
5o23b$3b5o2b5o16bo2bo12b5o2b5o3b$7bo2bo18bo2b2o2bo14bo2bo7b$5bo2b2o2bo
15b2o6b2o11bo2b2o2bo5b$4b2o6b2o13bo10bo9b2o6b2o4b$3bo10bo11bo12bo7bo
10bo3b$2bo12bo30bo12bo2b$24b3o12b3o20b$3o12b3o3bo3b3o10b3o3b3o12b3o$b
3o10b3o3b2o5bo10bo6b3o10b3ob$3bo10bo5b2o5b3o6b3o8bo10bo3b$3b3o6b3o5bo
9bo4bo11b3o6b3o3b$6bo4bo16bo8bo12bo4bo6b$4bo8bo13bo2bo4bo2bo9bo8bo4b$
3bo2bo4bo2bo11bo2bo6bo2bo7bo2bo4bo2bo3b$2bo2bo6bo2bo16b2o8b2o2bo2bo6bo
2bo2b$8b2o16bo2bobo2bobo2bobo10b2o8b$2bo2bobo2bobo2bo16b2o10bobo2bobo
2bobo2bo2b$8b2o17b3o6b3o3b2o8b2o8b$3b3o6b3o13bo8bo9b3o6b3o3b$4bo8bo14b
o8bo10bo8bo4b$4bo8bo12bo3bo4bo3bo8bo8bo4b$2bo3bo4bo3bo10bo3bo4bo3bo6bo
3bo4bo3bo2b$2bo3bo4bo3bo9bo2bo2bo2bo2bo2bo5bo3bo4bo3bo2b$bo2bo2bo2bo2b
o2bo28bo2bo2bo2bo2bo2bo!`},duelingbanjosp24gun:{cellSize:15,fps:20,isToroidal:!1,rle:`#N duelingbanjosp24gun.rle
#C https://conwaylife.com/wiki/Dueling_banjos
#C https://conwaylife.com/patterns/duelingbanjosp24gun.rle
x = 40, y = 31, rule = B3/S23
5b2ob2o15b2ob2o$5b2obo17bob2o$8bo5bo5bo5bo$8b2o4b2o3b2o4b2o$14bobobobo
$3bobo9b2ob2o13b3o$b3ob3o24b6o$o7bo23bob3obo$2ob4obo22bo3bob2o$bo3bo
25b4ob4o$bobo2b2o4b2obo3bob2o6b2o4bob3o$2bobob2o5b3o3b3o5b2obob2obo2b
2o$3bob3o6bo5bo5b2o2bob2obob2o$5b3o18b3obo4b2o$5b3o18b4ob4o$5b3o19b2ob
o3bo$6b2o19bob3obo$7bo20b6o$5bobobo4b3o13b3o$4bobob2o12bobo$4bobo6bobo
bo5b2o$5b2o4b3obob3o3bo$10bo5bo3bo$9bobob2o2b2obo$9bob2o2b2o2bo$8b2o4b
o2b2o9bobo$6bo2bobobo2bo12b2o$6b2o2b2ob4o12bo$12bo$12bobo$13b2o!`},duelingbanjostetramer:{cellSize:15,fps:30,isToroidal:!1,rle:`#N duelingbanjostetramer.rle
#C https://conwaylife.com/wiki/Dueling_banjos
#C https://conwaylife.com/patterns/duelingbanjostetramer.rle
x = 39, y = 39, rule = B3/S23
10b2o15b2o$10bo17bo$7b2obo5bo5bo5bob2o$7b2ob2o4b2o3b2o4b2ob2o$16bobobo
bo$17b2ob2o2$2b2o31b2o$2b2o31b2o2$4o10b2obo3bob2o10b4o$o2bo11b3o3b3o
11bo2bo$16bo5bo2$10bo17bo$10b2o15b2o$2b3o6b2o13b2o6b3o$3bobo4b2o15b2o
4bobo$4b2o27b2o2$4b2o27b2o$3bobo4b2o15b2o4bobo$2b3o6b2o13b2o6b3o$10b2o
15b2o$10bo17bo2$16bo5bo$o2bo11b3o3b3o11bo2bo$4o10b2obo3bob2o10b4o2$2b
2o31b2o$2b2o31b2o2$17b2ob2o$16bobobobo$7b2ob2o4b2o3b2o4b2ob2o$7b2obo5b
o5bo5bob2o$10bo17bo$10b2o15b2o!`},electricfence:{cellSize:20,fps:30,isToroidal:!1,rle:`#N Electric fence
#O Dean Hickerson
#C A stabilization of ants that is a period 5 oscillator. https://www.c
#C onwaylife.com/wiki/index.php?title=Electric_fence
x = 61, y = 15, rule = B3/S23
10bo50b$9bobo24b2o23b$2bo4b3obo5bo19bo3bo2bo6bo5b2o2b$bobo2bo4b2o3bobo
18bob3o2b3o3bobo4bo3b$bobo2bob2o7bo20bo3b2o3bobo2bo6bob$2ob2obobob5o5b
o18b2o3bo2bobob2ob2o2b2ob$bobo2bo3bo2bo2bo7b2o3b2o3b2o4b2ob2o2bobo2bob
obo4b$bo2b2o4b2o6b3ob2o3b2o3b2o3b3o5b4ob3obo3b2ob$2bo2b3o2bo2bob4o3b2o
3b2o3b2o3b3ob2o2bo4bobo4bo2bo$3b2o3bobo2bo5b2o3b2o3b2o3b2o6bo12bo3b2o$
5b2obob2obob2o2bo22bo8b2obo6b$5bob2obo2bob2o4bo17b2obobo16b$11b2o7b2o
18bo2b2o16b$38bobo20b$38b2o!`},enterprise:{cellSize:20,fps:30,isToroidal:!0,rle:`#N Enterprise
#O Dean Hickerson
#C A period 4 diagonal spaceship with speed c/4 found in March 1993.
#C www.conwaylife.com/wiki/index.php?title=Enterprise
x = 21, y = 21, rule = B3/S23
8bo12b$6b2obo11b$4b2o3bo11b$3bo3b2o12b$2bo4b2obo10b$bo2b2ob3obo9b$bo
19b$3bobo3b2o10b$2o3bobo13b$o3bo3b2o11b$bo2b2o2bo2bo9b$4b2o3bo8bo2b$
10bobo3bobobo$12b2ob3o2bo$12b2o4b2ob$13bob2o4b2$11bobo7b$11bo9b$11b3o
7b$12bobo!`},extended68p9:{cellSize:20,fps:20,isToroidal:!1,rle:`#N extended68p9.rle
#C https://conwaylife.com/wiki/68P9
#C https://www.conwaylife.com/patterns/extended68p9.rle
x = 40, y = 17, rule = B3/S23
b2o34b2o$obo34bobo$3o34b3o2$b2o34b2o$4o32b4o$o3bo6b2o6b2o6b2o6bo3bo$5b
o4bo2bo4bo2bo4bo2bo4bo$2bo2bo3bo4bo2bo4bo2bo4bo3bo2bo$5bo4bo2bo4bo2bo
4bo2bo4bo$o3bo6b2o6b2o6b2o6bo3bo$4o32b4o$b2o34b2o2$3o34b3o$obo34bobo$b
2o34b2o!`},figureeighton44p38:{cellSize:15,fps:20,isToroidal:!1,rle:`#N figureeighton44p38.rle
#C https://conwaylife.com/wiki/44P38
#C https://www.conwaylife.com/patterns/figureeighton44p38.rle
x = 44, y = 24, rule = B3/S23
15b2o2$13bo3bo$13bo4bo$15bobobo$16bobobo$17bo4bo$18bo3bo2$19b2o2$5bo
32bo$5b2o30b2o2$6bobo3b2o16b2o3bobo$b3o2bobo2bo2bo14bo2bo2bobo2b3o$12b
obo14bobo$13b2o14b2o3$2b2o36b2o$3bo36bo$3o38b3o$o42bo!`},figureeighton74p127:{cellSize:15,fps:30,isToroidal:!1,rle:`#N figureeighton74p127.rle
#C https://conwaylife.com/wiki/74P127
#C https://www.conwaylife.com/patterns/figureeighton74p127.rle
x = 43, y = 39, rule = B3/S23
29bo$27b3o$26bo$26b2o$2o$2obo$4bo8bo10bo9b2o$bo10bobo8b2o9b2o$2bob2o7b
o7b2o$4b2o13b2o2bo$23bo2bo$25bo$19bobo3bo$20b3o4bo2$5b2o$5b2o6$41b2o$
41b2o2$20bo4b3o$22bo3bobo$22bo$21bo2bo$24bo2b2o$25b2o7bo$12b2o9b2o8bob
o$12b2o9bo10bo3$20b2o$21bo$18b3o$18bo!`},fireshipfireship:{cellSize:10,fps:60,isToroidal:!0,rle:`#N fireship_fireship.rle
#C https://conwaylife.com/wiki/Fireship
#C https://www.conwaylife.com/patterns/fireship_fireship.rle
x = 82, y = 57, rule = B3/S23
4$10b2o14b2o14b2o14b2o14b2o$10b2o14b2o14b2o14b2o14b2o$9bo2bo12bo2bo12b
o2bo12bo2bo12bo2bo$9b4o12b4o12b4o12b4o12b4o$8bob2obo10bob2obo10bob2ob
o10bob2obo10bob2obo$9bo2bo12bo2bo12bo2bo12bo2bo12bo2bo2$8b2o2b2o10b2o
2b2o10b2o2b2o10b2o2b2o10b2o2b2o$7bo6bo8bo6bo8bo6bo8bo6bo8bo6bo2$8bo4b
o10bo4bo10bo4bo10bo4bo10bo4bo$9bo2bo12bo2bo12bo2bo12bo2bo12bo2bo$10b2o
14b2o14b2o14b2o14b2o2$7b2o4b2o8b2o4b2o8b2o4b2o8b2o4b2o8b2o4b2o$6bo2bo
2bo2bo6bo2bo2bo2bo6bo2bo2bo2bo6bo2bo2bo2bo6bo2bo2bo2bo$7b2o4b2o8b2o4b
2o8b2o4b2o8b2o4b2o8b2o4b2o$8bo4bo10bo4bo10bo4bo10bo4bo10bo4bo$18b2o14b
2o14b2o14b2o$17bo2bo12bo2bo12bo2bo12bo2bo2$16bo4bo10bo4bo10bo4bo10bo4b
o$15b2o4b2o8b2o4b2o8b2o4b2o8b2o4b2o$14bo2bo2bo2bo6bo2bo2bo2bo6bo2bo2b
o2bo6bo2bo2bo2bo$14b2ob4ob2o6b2ob4ob2o6b2ob4ob2o6b2ob4ob2o$16bo4bo10b
o4bo10bo4bo10bo4bo$26b2o14b2o14b2o$26b2o14b2o14b2o$26b2o14b2o14b2o$24b
o4bo10bo4bo10bo4bo$22b3o4b3o6b3o4b3o6b3o4b3o$21b3o6b3o4b3o6b3o4b3o6b3o
$21b2o8b2o4b2o8b2o4b2o8b2o$22b10o6b10o6b10o$23b8o3b2o3b8o3b2o3b8o$25b
4o5b2o5b4o5b2o5b4o2$31b2o4b2o8b2o4b2o$31b2o4b2o8b2o4b2o$31b2o4b2o8b2o
4b2o2$33bo2bo5b2o5bo2bo$41bo2bo$41bo2bo2$39b2o4b2o$38bo2bo2bo2bo$38bo
2bo2bo2bo$39bobo2bobo!`},fireshiptagalong:{cellSize:20,fps:60,isToroidal:!0,rle:`#N fireshiptagalong.rle
#C https://conwaylife.com/wiki/Fireship
#C https://www.conwaylife.com/patterns/fireshiptagalong.rle
x = 34, y = 23, rule = B3/S23
4b2o10b2o10b2o$4b2o10b2o10b2o$3bo2bo8bo2bo8bo2bo$3b4o8b4o8b4o$2bob2obo
6bob2obo6bob2obo$3bo2bo8bo2bo8bo2bo2$2b2o2b2o6b2o2b2o6b2o2b2o$bo6bo4bo
6bo4bo6bo2$2bo4bo6bo4bo6bo4bo$3bo2bo8bo2bo8bo2bo$4b2o10b2o10b2o2$b2o4b
2o4b2o4b2o4b2o4b2o$o2bo2bo2bo2bo2bo2bo2bo2bo2bo2bo2bo$b2o4b2o4b2o4b2o
4b2o4b2o$2bo4bo6bo4bo6bo4bo2$14bo2$17b3o$17bo!`},fly:{cellSize:15,fps:30,isToroidal:!0,rle:`#N Fly
#O David Bell
#C A tagalong for an orthogonal period 3 c/3 edge-repair spaceship that was found in April 1992.
#C www.conwaylife.com/wiki/index.php?title=Fly
x = 34, y = 20, rule = 23/3
2bo31b$bobo30b$bobo22bobo3bob$bo23b2obobo2bo$11b3o8bo9bob$2o9b2o2bob2o
3bo2b4o5b$bobo9b4o2bobo2b2o4b2o2b$b2o8bo2bo3b3o5b3o5b$2bo7bo4bo2b2o2b
2o2bo2bo4b$3bo2bo3bo4bo2b3obobo4b2o3b$7bob2o4bo2b4o5bo6b$4b2o3b2o4bo2b
4o5bo6b$4bobo3bo4bo2b3obobo4b2o3b$3b2o5bo4bo2b2o2b2o2bo2bo4b$4bobo4bo
2bo3b3o5b3o5b$5bo7b4o2bobo2b2o4b2o2b$11b2o2bob2o3bo2b4o5b$11b3o8bo9bob
$25b2obobo2bo$26bobo3bo!`},flybydeletionpond2:{cellSize:10,fps:30,isToroidal:!0,rle:`#N flybydeletionpond2.rle
#C https://conwaylife.com/wiki/Fly-by_deletion
#C https://www.conwaylife.com/patterns/flybydeletionpond2.rle
x = 84, y = 20, rule = B3/S23
7b2o$6bo2bo$6bo2bo$7b2o4$17bo9bo$16b3o7b3o$15bo2b2o5b2o2bo5b3o3b3o$16b
4o5bo2b3o4bo2bo2bo2bo12b3o$14bo2bo2bo4bobo3bo2bo3bo2bo2bo12bo2bo13b3o$
14b2o5b3obo3b7ob2o3bo7bo6bo7b3o5bo2bo4b3o$13bo3bo4b2obobo15b3o3b3o5bo
3bo2bo2bo8bo3bo2bo$13bobo2bo8bo2bob4ob2obo5bobo2b2o2bobo3bo6bo3bo3bo6b
o$bo12b2o3b5o6bo4bobobo3b4obobobob3o4bobo6b3o3bo6bo$3o11bo2b3o4bo5bo
12b2ob5o3bo7b3o5b2o2b3ob2o2bo$ob2o10bo4b11o10bo8b3o4bo3bo4b2o4bo6bo$b
3o18b2o4bo2bo6b2o11bo5bo16bo2bo$b2o11b2o3b2o4b2o47bo!`},fourfoldbuddleia:{cellSize:15,fps:20,isToroidal:!1,rle:`#N fourfoldbuddleia.rle
#C https://conwaylife.com/wiki/Buddleia
#C https://www.conwaylife.com/patterns/fourfoldbuddleia.rle
x = 32, y = 32, rule = B3/S23
13bo4bo$5b2o4b2ob4ob2o4b2o$4b2o7bo4bo7b2o$4bo2bo16bo2bo$2b2ob2o18b2ob
2o$b2obo22bob2o$bo2bo22bo2bo$3bo24bo4$bo28bo$bo28bo$obo26bobo$bo28bo$b
o28bo$bo28bo$bo28bo$obo26bobo$bo28bo$bo28bo4$3bo24bo$bo2bo22bo2bo$b2ob
o22bob2o$2b2ob2o18b2ob2o$4bo2bo16bo2bo$4b2o7bo4bo7b2o$5b2o4b2ob4ob2o4b
2o$13bo4bo!`},fourreagents:{cellSize:15,fps:10,isToroidal:!1,rle:`#N fourreagents.rle
#C https://conwaylife.com/wiki/Grin_reagent
#C https://www.conwaylife.com/patterns/fourreagents.rle
x = 32, y = 32, rule = B3/S23
18b2o$19bo$18bo$12b2o4b2o$13bo2b2o3bo$13bobo2b4o$14bobobo$16bob4o$15bo
2bo2bo$11b2o2bob4o$4b2ob2o2bo$5bobobobo4b2ob4o$2obobo3bob2o3b2obo2bo5b
o$ob2ob2o2bo16b3o$4bo2bobob2o12bo$4bob2obob2o2b2o5b2o2bo$5bo2bo5bo2bo
2bo3b2obo$6bo12bo2bobo2bo$3b3o8bo5bobo2b2ob2obo$3bo5bo2bo3bo2b2obo3bob
ob2o$9b5obo4bobobobo$20bo2b2ob2o$11b5o3b2o$10bo5bo$10b2o2b2o$13bobobo$
10b4o2bobo$10bo3b2o2bo$12b2o4b2o$13bo$12bo$12b2o!`},gabrielsp138:{cellSize:22,fps:30,isToroidal:!1,rle:`#N Gabriel's p138
#O Gabriel Nivasch
#C A small period 138 oscillator, discovered on October 13, 2002
#C www.conwaylife.com/wiki/index.php?title=Gabriel's_p138
x = 21, y = 21, rule = b3/s23
8b3o10b$7bo2bo10b$7bo2bo10b$7b2o12b4$17b3ob$17bo2bo$20bo$3o15b3o$o20b$
o2bo17b$b3o17b4$12b2o7b$10bo2bo7b$10bo2bo7b$10b3o!`},gabrielsp138variant:{cellSize:20,fps:30,isToroidal:!1,rle:`#N gabrielsp138variant.rle
#C https://conwaylife.com/wiki/Gabriel%27s_p138
#C https://www.conwaylife.com/patterns/gabrielsp138variant.rle
x = 29, y = 29, rule = B3/S23
5b2o$5b2o3$12b3o$11bo2bo12b2o$11bo2bo12b2o$11b2o4$21b3o$21bo2bo$24bo$
4b3o15b3o$4bo$4bo2bo$5b3o4$16b2o$2o12bo2bo$2o12bo2bo$14b3o3$22b2o$22b
2o!
`},gallus:{cellSize:15,fps:30,isToroidal:!1,rle:`#N gallus.rle
#O Jeremy Tan, 2021
#C https://conwaylife.com/wiki/Gallus
#C https://www.conwaylife.com/patterns/gallus.rle
x = 39, y = 23, rule = B3/S23
12b2o4bo$12b2o3bobo12b2o$18bo5b2o5bob2o2b2o$24b2o5bobo3b2o$31bo$5b2o2b
2o18bo$5b2o2b2o5bo$14bobo12bo$15b2o14bo$24b2o5bobo3b2o$24b2o5bob2o2b2o
$8b2o22b2o$2o5bob2o2b2o$2o5bobo3b2o$7bo$5bo$28b2o2b2o$5bo22b2o2b2o$7bo
$2o5bobo3b2o$2o5bob2o2b2o5bo$8b2o9bobo3b2o$20bo4b2o!`},gliderduplicator1:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Glider duplicator 1
#C A glider duplicator made up of two Gosper glider guns.
#C www.conwaylife.com/wiki/index.php?title=Glider_duplicator
x = 50, y = 47, rule = b3/s23
44b2o4b$44b2o4b9$41b2obob2o2b2$41bo5bo2b2$42b2ob2o3b$44bo5b3$38b2o6bo
3b$37bobo5bobo2b$12bo26bo4bo3bob$13bo30b5ob$11b3o29b2o3b2o$44b5ob$45b
3o2b$46bo3b$24b2o4b3o17b$24b2o6bo17b$31bo18b5$23b2o25b$22bobo21b2o2b$
24bo21b2o2b$13bo36b$12b4o34b$11b2obobo6bobo24b$2o8b3obo2bo3bo3bo24b$2o
9b2obobo4bo28b$12b4o4bo4bo24b$13bo7bo28b$21bo3bo6b2o16b$23bobo6bobo15b
$34bo15b$34b2o!`},glideremulator:{cellSize:15,fps:60,isToroidal:!0,rle:`#N Glider emulator
#O Gabriel Nivasch
#C P4 tagalong for two big gliders, discovered in January 1999.
#C https://www.conwaylife.com/patterns/longcanadagoose.rle
#C https://www.conwaylife.com/wiki/Glider_emulator
#C https://www.conwaylife.com/patterns/glideremulator.rle
x = 30, y = 28, rule = B3/S23
14b2o$13b2o3bo$15bob2o$11bo5b3o$10b2o5bo$10bobo6b2o$20b3o$12b3o5bo3bo$
11b3o7bo2bo$5bo7bobo6b2ob2o$4b5o6b3o7b2o$4bo2b2o7bobo4bo2bo$6b2obo6bo
2bo6bob2o$b2o16bobo2b3o$2o7bobo5b2o4bo$bobo6b2o7b2o2bo$b3o6b3o6b5o$b2o
10b2o$3bobo9bo6bo$6b2o7bo6bo$5b3o5b2o2b2o$7bo6bob3o4b2o$8bo2bo3bo6b3o$
8bo2b2o5bo2b3o$9b2o2bo$12bo$11b2o$11b2obo!`},goban:{cellSize:20,fps:20,isToroidal:!1,rle:`#N goban.rle
#O iNoMed, 2024
#C https://conwaylife.com/wiki/Goban
#C https://www.conwaylife.com/patterns/goban.rle
x = 33, y = 32, rule = B3/S23
10b2o$10bobo$13bo2b2o$11b2obo2bo$10bobob2o$11bo$21b2o$21bo$6bo5b3o4bobo$5bobo3bo3bo3b2o4bo$5b2o3bo5bo7bobo$3b2o5bo5bo7bobo$2bo2b2o3bo5bo6b2ob3o$bobo2bo4bo3bo13bo$o2b2o7b3o8b2ob3o$2o21b2obo$6bob2o21b2o$4b3ob2o8b3o7b2o2bo$3bo13bo3bo4bo2bobo$4b3ob2o6bo5bo3b2o2bo$6bobo7bo5bo5b2o$6bobo7bo5bo3b2o$7bo4b2o3bo3bo3bobo$11bobo4b3o5bo$11bo$10b2o$21bo$17b2obobo$15bo2bob2o$15b2o2bo$20bobo$21b2o!`},gosperglidergun:{cellSize:25,fps:30,isToroidal:!1,rle:`#N Gosper glider gun
#O Bill Gosper
#C A true period 30 glider gun.
#C The first known gun and the first known finite pattern with unbounded growth.
#C www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
x = 36, y = 9, rule = B3/S23
24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8b
o3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!`},gunstar2:{cellSize:5,fps:60,isToroidal:!1,rle:`#N Gunstar 2
#O David Buckingham
#C A four-barrelled true period 168 glider gun.
#C www.conwaylife.com/wiki/index.php?title=Gunstar_2
x = 119, y = 119, rule = b3/s23
75bo43b$73b3o43b$72bo46b$72b2o45b$77b2o40b$77bo41b$75bobo41b$44b2o29b
2o42b$41bobo2bob2o69b$40b2o2bo4bo69b$45bo6b2o65b$46bo5bo66b2$77b2o40b$
76bo2bo39b$76bo42b$76bo42b$76bobo40b$63b2o13b2o39b$64bo54b2$23b2o52b2o
40b$23bo54bo13bo3bo22b$88b2o2b2o3bo21b$23bo2bo62bo7bo21b$22bo2bo43b3o
21b4o22b$22bobo44bo49b$23bo44b3o48b2$23b2o94b$23bo95b9$17b2o100b$4bo8b
2obo2bob2o86b2o8b$4b3o6bo4bo2bo5b2o18bo62bo8b$7bo9bo9bo9b3o6b2obo69b$
2o4b2o8bo20bo2bo9bo68b$bo39bo5bo28b2o32bo8b$bobo34bo2bo6bob2o56bob2o7b
$2b2o34b2o10bo24bo3bo28bo10b$38b2o34bo4bo28bo10b$36bob2o33bobobo30bo2b
o7b$36b3o33bobobo32b2o8b$37bo32bo4bo43b$70bo3bo44b$107b2o10b$72b2o34bo
10b8$106b2o11b$103b2o2bo11b$103bo2bo12b$104b3o12b$10bo108b$10b2o33bo
73b$44bobo72b$43bo3bo71b$8bo33bo3bo72b$8b2o31bo3bo73b$40bo3bo22b3o49b$
41bobo22bo48b2o2b$9bo32bo23bo3bo44bobob$7bob2o55bo2bobo45bob$7bo60bobo
2bo37b2o4b2o$7bo61bo3bo26b2o9bo7b$7bo2bo14b2o3bo42bo22b2obo2bob2o6b3o
4b$8b2o15b2ob2ob2o37b3o23bo4bo2bo9bo4b$25bo7bo66bo18b$24b2o6bo66bo19b$
25b2o2b2o88b$25b2o3bo88b6$94b2o23b$94bo24b$41bo31bo45b$41b2o29b2o20bo
2bo21b$93bo2bo22b$25bo3bo63bobo23b$21bo3b2o3bo63bo24b$21b2o7bo88b$26b
4o10b2o52b2o23b$39bo2bo51bo24b$39bo35bo43b$39bo29bo4b2o43b$39bobo26b2o
49b$41b2o24b2o50b$68b2o49b2$40bo78b$40b2o77b2$66bo52b$65b2o6b2o44b$70b
obo2bob2o40b$69b2o2bo4bo40b$42b2o30bo44b$41bobo31bo43b$41bo77b$40b2o
77b$45b2o72b$46bo72b$43b3o73b$43bo!`},hectic:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Hectic
#O Robert Wainwright
#C A period 30 oscillator found in September 1984.
#C www.conwaylife.com/wiki/index.php?title=Hectic
x = 39, y = 39, rule = B3/S23
22b2o15b$22b2o15b11$9bo10b2o3b2o12b$7bobo12b3o14b$6bobo12bo3bo13b$2o3b
o2bo13bobo14b$2o4bobo14bo15b$7bobo6bobo20b$9bo6b2o21b$17bo3bo17b$21b2o
6bo9b$20bobo6bobo7b$15bo14bobo4b2o$14bobo13bo2bo3b2o$13bo3bo12bobo6b$
14b3o12bobo7b$12b2o3b2o10bo9b11$15b2o22b$15b2o!`},honeyring:{cellSize:7,fps:30,isToroidal:!1,rle:`#N honeyring.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/honeyring.rle
x = 82, y = 82, rule = B3/S23
28b2o22b2o$29bo22bo$29bobo18bobo$30b2o18b2o2$33bo14bo$26b2o26b2o$27bo
26bo$27bobo3b3o10b3o3bobo$28b2o2bo3bo8bo3bo2b2o$31bo5bo6bo5bo$31bo5bo
6bo5bo$22b2o7bo5bo6bo5bo7b2o$22bo9bo3bo8bo3bo9bo$19b2obo10b3o10b3o10bo
b2o$18bobob2o5b2o20b2o5b2obobo$17bo11b2o20b2o11bo$16bo4b3o10b2o10b2o
10b3o4bo$15bo4bo2bo10b2o10b2o10bo2bo4bo$14bo4bobo7b3o18b3o7bobo4bo$14b
2o2bobo7bo3bo16bo3bo7bobo2b2o$17bobo7bo5bo14bo5bo7bobo$12b4obo9bo5bo
14bo5bo9bob4o$12bo2bob2o8bo5bo14bo5bo8b2obo2bo$28bo3bo2b2o8b2o2bo3bo$
29b3o3bobo6bobo3b3o$6bo30bo6bo30bo$6b3o12b3o13b2o4b2o13b3o12b3o$o8bo
10bo3bo32bo3bo10bo8bo$3o5b2o5b2o2bo5bo30bo5bo2b2o5b2o5b3o$3bo11b2o2bo
5bo30bo5bo2b2o11bo$2b2o6b3o6bo5bo30bo5bo6b3o6b2o$9bo3bo6bo3bo32bo3bo6b
o3bo$5bo2bo5bo6b3o34b3o6bo5bo2bo$8bo5bo2b2o44b2o2bo5bo$8bo5bo2b2o5b2o
30b2o5b2o2bo5bo$9bo3bo10bo32bo10bo3bo$10b3o12b3o26b3o12b3o$27bo26bo5$
27bo26bo$10b3o12b3o26b3o12b3o$9bo3bo10bo32bo10bo3bo$8bo5bo2b2o5b2o30b
2o5b2o2bo5bo$8bo5bo2b2o44b2o2bo5bo$5bo2bo5bo6b3o34b3o6bo5bo2bo$9bo3bo
6bo3bo32bo3bo6bo3bo$2b2o6b3o6bo5bo30bo5bo6b3o6b2o$3bo11b2o2bo5bo30bo5b
o2b2o11bo$3o5b2o5b2o2bo5bo30bo5bo2b2o5b2o5b3o$o8bo10bo3bo32bo3bo10bo8b
o$6b3o12b3o13b2o4b2o13b3o12b3o$6bo30bo6bo30bo$29b3o3bobo6bobo3b3o$28bo
3bo2b2o8b2o2bo3bo$12bo2bob2o8bo5bo14bo5bo8b2obo2bo$12b4obo9bo5bo14bo5b
o9bob4o$17bobo7bo5bo14bo5bo7bobo$14b2o2bobo7bo3bo16bo3bo7bobo2b2o$14bo
4bobo7b3o18b3o7bobo4bo$15bo4bo2bo10b2o10b2o10bo2bo4bo$16bo4b3o10b2o10b
2o10b3o4bo$17bo11b2o20b2o11bo$18bobob2o5b2o20b2o5b2obobo$19b2obo10b3o
10b3o10bob2o$22bo9bo3bo8bo3bo9bo$22b2o7bo5bo6bo5bo7b2o$31bo5bo6bo5bo$
31bo5bo6bo5bo$28b2o2bo3bo8bo3bo2b2o$27bobo3b3o10b3o3bobo$27bo26bo$26b
2o26b2o$33bo14bo2$30b2o18b2o$29bobo18bobo$29bo22bo$28b2o22b2o!`},jasonsp156:{cellSize:15,fps:30,isToroidal:!1,rle:`#N jasonsp156.rle
#O Jason Summers, 31 October 2004
#C Oscillator, or actually an eight-barrelled glider gun,
#C discovered in a RandomAgar search. Also known as "92p156".
#C https://conwaylife.com/wiki/Jason%27s_p156
#C https://conwaylife.com/patterns/jasonsp156.rle
x = 42, y = 42, rule = B3/S23
20b2o$20b2o4$8b2o22b2o$9bo12b2o8bo$9bobo10bo7bobo$5bo4b2o10bo7b2o4bo$
5b3o15bo10b3o$8bo24bo$7b2o24b2o7$32bo2bo$33b3o$2o38b2o$2o38b2o$6b3o$6b
o2bo7$7b2o24b2o$8bo24bo$5b3o10bo15b3o$5bo4b2o7bo10b2o4bo$9bobo7bo10bob
o$9bo8b2o12bo$8b2o22b2o4$20b2o$20b2o!`},"jasonsp33.1":{cellSize:15,fps:20,isToroidal:!1,rle:`#N jasonsp33.1.rle
#C https://conwaylife.com/wiki/Jason%27s_p33
#C https://www.conwaylife.com/patterns/jasonsp33.1.rle
x = 34, y = 30, rule = B3/S23
21bo$4bo2bo3b5o2b3obo$4bo2bo7bo2bo2bo$bob2o2b5o3bo2bo$obo$bo7$6bobo3b
4o$6bo2bo2bo2bo$6bo5b3o10b2o$7b2o10b3o5bo$18bo2bo2bo2bo$18b4o3bobo7$
32bo$31bobo$15bo2bo3b5o2b2obo$12bo2bo2bo7bo2bo$11bob3o2b5o3bo2bo$12bo!
`},karelsp177:{cellSize:10,fps:30,isToroidal:!1,rle:`#N karelsp177.rle
#O Karel Suhajda, 2007
#C https://conwaylife.com/wiki/Karel%27s_p177
#C https://www.conwaylife.com/patterns/karelsp177.rle
x = 46, y = 46, rule = B3/S23
16bo12bo$9b2o24b2o$8b3o3b2o14b2o3b3o$14b2ob2o8b2ob2o$16bo12bo4$2bo40bo
$b2o40b2o$b2o40b2o4$2b2o38b2o$2b2o38b2o$o3bo36bo3bo$3bo38bo$3bo38bo9$
3bo38bo$3bo38bo$o3bo36bo3bo$2b2o38b2o$2b2o38b2o4$b2o40b2o$b2o40b2o$2bo
40bo4$16bo12bo$14b2ob2o8b2ob2o$8b3o3b2o14b2o3b3o$9b2o24b2o$16bo12bo!`},koksgalaxy:{cellSize:30,fps:10,isToroidal:!1,rle:`#N Kok's galaxy
#O Jan Kok
#C A period 8 oscillator that was found in 1971.
#C www.conwaylife.com/wiki/index.php?title=Kok's_galaxy
x = 9, y = 9, rule = 23/3
2bo2bobob$2obob3ob$bo6bo$2o5bob2$bo5b2o$o6bob$b3obob2o$bobo2bo!`},lightspeedoscillator1:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Light speed oscillator 1
#O Josh Ball
#C A period 5 extensible oscillator.
#C www.conwaylife.com/wiki/Light_Speed_Oscillator_1
x = 69, y = 19, rule = b3/s23
22b2o19bo2bo22b$22bobo18b4o22b$24bo3bo2bo2bo2bo2bo6b2o15b2o3b$23b2ob
21o2bob2obo2bo2bo3bo4b$18b2o2bo2bo22bo3bob4o2b3obo4b$14b2obobo2b2o2b3o
2b3o2b3o2b3o2b2ob2o7b2o3bob2o2b$b2o2b2o3b2o3bobo6b2o4b2o3b2o3b2o5bobob
5o2bo2bo3bo2bo$bo3bobo2bo3bo3bo3b2o2b2o3b3o2b3o2b3ob2o3bo3bo4bob2o2bob
2o$2b3o2bo3bo2b5o2bo4bo19bo5b4o2bo5b2o3b$4bobob4o5b2o3bobob2o3b3o2b3o
2b3ob2o3bo3bo4bob2o2bob2o$6bobo3b5o2bo2bo7b2o3b2o3b2o5bobob5o2bo2bo3bo
2bo$6bo2bobo6bobob7o2b3o2b3o2b3o2b2ob2o7b2o3bob2o2b$3bo2bo2bo2bobo2b4o
bo25bo3bob4o2b3obo4b$3b2obob2o4bo7bob23o2bob2obo2bo2bo3bo4b$3bobo3bobo
4b6obo4bo2bo2bo2bo2bo6b2o15b2o3b$bobobob2o2b5o5bobobo17b4o22b$obo3bo2b
2o4bob2o2bo2b2o17bo2bo22b$bo5bobo2bo3b2obobo47b$8bo2b2o7bo!`},lightspeedoscillator2:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Light speed oscillator 2
#O Josh Ball
#C A period 5 extensible oscillator.
#C www.conwaylife.com/wiki/Light_Speed_Oscillator_2
x = 85, y = 25, rule = b3/s23
58b2o2b2o21b$58bobo2b3o19b$52bob2o4b2o4bo8b2o8b$25b2o2b2ob2o15bo2b2obo
3bo2b2o2bo7bo2bo7b$24bo2bo2bobo16b3o4b2o2bo3bob2o5bo2b2o7b$23bob2o3bo
3bo2bo2bo2bo2bo6b2obob2ob2obobo5bob2o2b2o5b$24bo2b3ob22obo4bobob2o2bo
4bo3bo3bo4b$22bobobo2bobo23bo3bo2b2obo3b2obo3b3o2bo3b$22b2o2bobo4b2o2b
3o2b3o2b3o2b3o3b2o2bo6b2o5b2obobo2bo$26bobo2bob3o3b2o3b2o3b2o7b2o2b2o
13b3o2b3o$4bo17b4o4bo3bo2b3o2b3o2b3o3bo3bo5bo13bo2b2o3b$3bobo16bo3b5o
22bo3b2o18b3o2bo2b$2bobo20bo2bo2bob19obo2bo2bo20bobo2b$2bo2b3o18b2o3bo
22b5o3bo16bobo3b$3b2o2bo13bo5bo3bo3b3o2b3o2b3o2bo3bo4b4o17bo4b$3o2b3o
13b2o2b2o7b2o3b2o3b2o3b3obo2bobo26b$o2bobob2o5b2o6bo2b2o3b3o2b3o2b3o2b
3o2b2o4bobo2b2o22b$3bo2b3o3bob2o3bob2o2bo3bo23bobo2bobobo22b$4bo3bo3bo
4bo2b2obobo4bob22ob3o2bo24b$5b2o2b2obo5bobob2ob2obob2o6bo2bo2bo2bo2bo
3bo3b2obo23b$7b2o2bo5b2obo3bo2b2o4b3o16bobo2bo2bo24b$7bo2bo7bo2b2o2bo
3bob2o2bo15b2ob2o2b2o25b$8b2o8bo4b2o4b2obo52b$19b3o2bobo58b$21b2o2b2o!
`},lightspeedoscillator3:{cellSize:10,fps:30,isToroidal:!1,rle:`#N Light speed oscillator 3
#O Josh Ball
#C A period 5 extensible oscillator.
#C www.conwaylife.com/wiki/Light_Speed_Oscillator_3
x = 73, y = 73, rule = b3/s23
61bo11b$59b3o11b$56bobo3b2o9b$54b3ob4o2bob2o5b$53bo7bob2obo6b$52bob5ob
o2bo2bo2bo3b$14b2o36b2o3bob2o2bobob3o3b$14b2o34b2o3bo8bobo6b$49bobob2o
bo8bo2b2o3b$14b4o3b2o26bo2bobobo5bo3b3obo2b$14bo3bo2bo28bobo2b2o4bobo
6bo2b$17bobobo29bo2b2o6bo5b2ob2o$17b3obobo22b2o6b3o9b2obobob$19bob2obo
21bobo5b2o10bo2bobob$6b2ob2o7bo5bo23bo2b2o14bob2o2b$6b2obo7b2ob5ob2o
17bo2b5o13b2o5b$9bo16b2o17b3o4bo7bob3o2bob2o2b$9bob2o2bo4bob3o5bo2bo2b
o2bo2bo5bo2bo7b4o2bobobo3b$10bobob2o3bo5b23obo9b3ob2o2bobo3b$11b3o4bo
6bo25bo12bobobo4b$15bobo4bo3bo2b3o2b3o2b3o2b5o2b2o3b3o3b2o2b2o5b$9b5ob
o6bo3b2o3b2o3b2o3b2o4bo4b2obob2o2bo2b2o7b$9bo3bobobo2b2o2b3o2b3o2b3o2b
3o2b5o8bo4bo2bo7b$12bo2bobo6bo29bo2bo5b2o8b$13b3obo4b2ob23o2bobo2bob3o
13b$18b2o2bobo2bo2bo2bo2bo2bo2bo2bo2bob3obobo3bo12b$15b2obob3obo23bobo
bobobo2b2o12b$15b2obo2bo2b2o21b2obobobob2o15b$18bo5bo23bobobobo18b$18b
obobobo23bo5bo18b$17b2obobob2o21b2o2bo2b2o17b$18bob3obo23bob3obo18b$
18bo2bo2bo23bobobobo18b$17b2o5b2o21b2obobob2o17b$18bobobobo23bo5bo18b$
18bobobobo23bo2bo2bo18b$17b2ob3ob2o21b2ob3ob2o17b$18bo2bo2bo23bobobobo
18b$18bo5bo23bobobobo18b$17b2obobob2o21b2o5b2o17b$18bobobobo23bo2bo2bo
18b$18bob3obo23bob3obo18b$17b2o2bo2b2o21b2obobob2o17b$18bo5bo23bobobob
o18b$18bobobobo23bo5bo18b$15b2obobobob2o21b2o2bo2bob2o15b$12b2o2bobobo
bobo23bob3obob2o15b$12bo3bobob3obo2bo2bo2bo2bo2bo2bo2bo2bobo2b2o18b$
13b3obo2bobo2b23ob2o4bob3o13b$8b2o5bo2bo29bo6bobo2bo12b$7bo2bo4bo8b5o
2b3o2b3o2b3o2b3o2b2o2bobobo3bo9b$7b2o2bo2b2obob2o4bo4b2o3b2o3b2o3b2o3b
o6bob5o9b$5b2o2b2o3b3o3b2o2b5o2b3o2b3o2b3o2bo3bo4bobo15b$4bobobo12bo
25bo6bo4b3o11b$3bobo2b2ob3o9bob23o5bo3b2obobo10b$3bobobo2b4o7bo2bo5bo
2bo2bo2bo2bo5b3obo4bo2b2obo9b$2b2obo2b3obo7bo4b3o17b2o16bo9b$5b2o13b5o
2bo17b2ob5ob2o7bob2o6b$2b2obo14b2o2bo23bo5bo7b2ob2o6b$bobo2bo10b2o5bob
o21bob2obo19b$bobob2o9b3o6b2o22bobob3o17b$2ob2o5bo6b2o2bo29bobobo17b$
2bo6bobo4b2o2bobo28bo2bo3bo14b$2bob3o3bo5bobobo2bo26b2o3b4o14b$3b2o2bo
8bob2obobo49b$6bobo8bo3b2o34b2o14b$3b3obobo2b2obo3b2o36b2o14b$3bo2bo2b
o2bob5obo52b$6bob2obo7bo53b$5b2obo2b4ob3o54b$9b2o3bobo56b$11b3o59b$11b
o!`},loaflipflop:{cellSize:15,fps:30,isToroidal:!1,rle:`#N Loaflipflop
#O Robert Wainwright
#C www.conwaylife.com/wiki/Loaflipflop
x = 34, y = 34, rule = B3/S23
16bo$15b3o3$15b3o2$15bobo$15bobo2$15b3o3$15b3o$16bo2$bo2bob2obo2bo15b
2o$2o2bo4bo2b2o3b2o7bo4bo$bo2bob2obo2bo3bo2bo5bo6bo$16bobo5bo8bo$17bo
6bo8bo$24bo8bo$25bo6bo$26bo4bo$28b2o$18b3o$17bo3bo$16bo5bo2$15bo7bo$
15bo7bo2$16bo5bo$17bo3bo$18b3o!`},lonedotagar:{cellSize:15,fps:10,isToroidal:!1,rle:`#C Example stabilization of a finite patch of lone dot agar, creating a period-2 oscillator.
#O Dean Hickerson and Alan W. Hensel, 1995
x = 38, y = 38, rule = B3/S23
4b2o2b2o2b2o2b2o2b2o2b2o2b2o2b2o$4bo2bobo2bo2bobo2bo2bobo2bo2bobo$5bo
7bo7bo7bo$8bo7bo7bo7bo$2o2bobo5bobo5bobo5bobo5b2o$obo5bobo5bobo5bobo5b
obo2bo$4bo7bo7bo7bo7bo$bo7bo7bo7bo7bo$o2bobo5bobo5bobo5bobo5bobo$2o5bo
bo5bobo5bobo5bobo2b2o$5bo7bo7bo7bo$8bo7bo7bo7bo$2o2bobo5bobo5bobo5bobo
5b2o$obo5bobo5bobo5bobo5bobo2bo$4bo7bo7bo7bo7bo$bo7bo7bo7bo7bo$o2bobo
5bobo5bobo5bobo5bobo$2o5bobo5bobo5bobo5bobo2b2o$5bo7bo7bo7bo$8bo7bo7bo
7bo$2o2bobo5bobo5bobo5bobo5b2o$obo5bobo5bobo5bobo5bobo2bo$4bo7bo7bo7bo
7bo$bo7bo7bo7bo7bo$o2bobo5bobo5bobo5bobo5bobo$2o5bobo5bobo5bobo5bobo2b
2o$5bo7bo7bo7bo$8bo7bo7bo7bo$2o2bobo5bobo5bobo5bobo5b2o$obo5bobo5bobo
5bobo5bobo2bo$4bo7bo7bo7bo7bo$bo7bo7bo7bo7bo$o2bobo5bobo5bobo5bobo5bob
o$2o5bobo5bobo5bobo5bobo2b2o$5bo7bo7bo7bo$8bo7bo7bo7bo$4bobo2bo2bobo2b
o2bobo2bo2bobo2bo$4b2o2b2o2b2o2b2o2b2o2b2o2b2o2b2o!
`},longcanadagoose:{cellSize:10,fps:60,isToroidal:!0,rle:`#N Long Canada goose
#O Gabriel Nivasch
#C A Canada goose with a longer front end.
#C www.conwaylife.com/wiki/index.php?title=Canada_goose
x = 35, y = 34, rule = b3/s23
14b2o19b$13b2o3bo16b$15bob2o16b$11bo5b3o15b$10b2o5bo17b$10bobo6b2o14b$
20b3o12b$12b3o5bo3bo10b$11b3o7bo2bo10b$5bo7bobo6b2ob2o8b$4b5o6b3o7b2o
8b$4bo2b2o7bobo4bo2bo8b$6b2obo6bo2bo6bob2o5b$b2o16bobo2b3o8b$2o7bobo5b
2o4bo11b$bobo6b2o7b2o2bo11b$b3o6b3o6b5o11b$b2o10b2o20b$3bobo9bo6bo12b$
6b2o7bo6bo12b$5b3o5b2o2b2o16b$7bo6bob3o4b2o10b$8bo2bo3bo6b3o10b$8bo2b
2o5bo2b3o8b2ob$9b2o2bo16b3obo$12bo12b2o2b2o4b$11b2o13bo8b$11b2obo15bo
4b$26b2o3bo3b$25bobob2o4b$25bobo2bob2ob$24bo4b2o4b$24b2o9b$24b2o!`},lwssgun1:{cellSize:15,fps:30,isToroidal:!1,rle:`#N lwssgun1.rle
#C https://conwaylife.com/wiki/Gliderless_gun
#C https://conwaylife.com/patterns/lwssgun1.rle
x = 40, y = 42, rule = B3/S23
23b2o$23bo$17b2ob2obo$15bo2bobobo$15b2o4bo13bo$33b3o$32bo$32b2o2$12b2o
$11bobo5b2ob2o7b2o$10bo7b2o3b2o6b2o$9bo9b2ob2o$9b2o9b3o$21bo$3b2o$4bo$
2bo$2b2o2$2b2o7bobo2bobo11bo2bo$2bobo6bo2bo3bo15bo$3bo5b2o3bobobo11bo
3bo$3o7b3obo16b4o$o6b2o5b2o$7b2o4b2o$7b2o3bo$7b2obobo$7b2obobo2$24b3o
8b2o$10b2o12bobo8b2o$6b2o2b2o5b2o5bobo$5bobo8bobo$5bo10bo19b2o$4b2o9b
2o19bo$37b3o$19b2o4bo13bo$19bo2bobobo$21b2ob2obo$27bo$27b2o!`},lwsstagalong:{cellSize:20,fps:30,isToroidal:!0,rle:`#N LWSS tagalong
#O David Bell
#C A tagalong for two lightweight, middleweight, or heavyweight spaces
#C hips.
#C www.conwaylife.com/wiki/index.php?title=Lightweight_spaceship
x = 25, y = 19, rule = b3/s23
21bo3b$18b4o3b$13bo2bob2o5b$13bo11b$4o8bo3bob2o5b$o3bo5b2ob2obobob5o$o
9b2obobobo2b5o$bo2bo2b2o2bo3b3o2bob2ob$6bo2bob2o12b$6bo4b2o12b$6bo2bob
2o12b$bo2bo2b2o2bo3b3o2bob2ob$o9b2obobobo2b5o$o3bo5b2ob2obobob5o$4o8bo
3bob2o5b$13bo11b$13bo2bob2o5b$18b4o3b$21bo!`},meatball:{cellSize:30,fps:10,isToroidal:!1,rle:`#N meatball.rle
#O Charity Engine, 2022
#C https://conwaylife.com/wiki/Meatball
#C https://www.conwaylife.com/patterns/meatball.rle
x = 11, y = 11, rule = B3/S23
8bo$3b2o4b2o$b3ob2o2b2o$o8bo$bob2o$bobo3bobo$6b2obo$bo8bo$2o2b2ob3o$2o
4b2o$2bo!`},merzenichsp64shasslingoctagon2:{cellSize:15,fps:20,isToroidal:!1,rle:`#N merzenichsp64shasslingoctagon2.rle
#C https://conwaylife.com/wiki/Octagon_2
#C https://www.conwaylife.com/patterns/merzenichsp64shasslingoctagon2.rle
x = 46, y = 46, rule = B3/S23
13b2o$13b2o4$27b2o$27b2o$17bo$16bobo5bo5b2o$19bo3b2o5b2o$13bo2bo3bo2bo
$12b2o3bo$12bo5bobo12b2o$19bo14b2o8b2o$8b2o34b2o$8b2o$35bobo$5b2o27bo
3bo$5b2o26bo3bo$21bo2bo7bo3bo$21bo2bo8bobo$8b2o9b2ob2ob2o$9b2o10bo2bo$
21bo2bo10b2o$19b2ob2ob2o9b2o$10bobo8bo2bo$9bo3bo7bo2bo$8bo3bo26b2o$7bo
3bo27b2o$8bobo$36b2o$2o34b2o$2o8b2o14bo$11b2o12bobo5bo$28bo3b2o$22bo2b
o3bo2bo$14b2o5b2o3bo$14b2o5bo5bobo$28bo$17b2o$17b2o4$31b2o$31b2o!
`},metamorphosisii:{cellSize:12,fps:25,isToroidal:!1,rle:`#N metamorphosisii.rle
#O Robert Wainwright, 1994
#C https://conwaylife.com/wiki/Metamorphosis_II
#C https://www.conwaylife.com/patterns/metamorphosisii.rle
x = 53, y = 51, rule = B3/S23
20b2o9b2o$20b2o9b2o3$20b3o7b3o$20b3o7b3o4$18b2o3b2o3b2o3b2o$19b5o5b5o$
20b3o7b3o$21bo9bo$8bo35bo$7bobo33bobo$6bob2o33b2obo$2o3b2ob2o33b2ob2o
3b2o$2o4bob2o33b2obo4b2o$7bobo33bobo$8bo35bo$23bobo$22bo$22bo$22bo2bo$
22b3o2$22b3o$22bo2bo$22bo$22bo$23bobo$8bo35bo$7bobo33bobo$2o4bob2o33b
2obo4b2o$2o3b2ob2o33b2ob2o3b2o$6bob2o33b2obo$7bobo33bobo$8bo35bo$21bo
9bo$20b3o7b3o$19b5o5b5o$18b2o3b2o3b2o3b2o4$20b3o7b3o$20b3o7b3o3$20b2o
9b2o$20b2o9b2o!`},moldon84p199:{cellSize:15,fps:30,isToroidal:!1,rle:`#N moldon84p199.rle
#C https://conwaylife.com/wiki/84P199
#C https://www.conwaylife.com/patterns/moldon84p199.rle
x = 56, y = 45, rule = B3/S23
16b2o16b2o$16b2o7b2o7b2o$25b2o5$2o48b2o$2o48b2o3$18bo14bo$18b3o10b3o
18bobo$55bo$19b3o8b3o18bo2bo$50bobobo$50bo2bo$51b2o2$8b2o32b2o$8b2o32b
2o4$8b2o32b2o$8b2o32b2o5$19b3o8b3o2$18b3o10b3o$18bo14bo3$2o48b2o$2o48b
2o5$25b2o$16b2o7b2o7b2o$16b2o16b2o!`},moldon86p118:{cellSize:15,fps:20,isToroidal:!1,rle:`#N moldon86p118.rle
#C https://conwaylife.com/wiki/86P118
#C https://www.conwaylife.com/patterns/moldon86p118.rle
x = 45, y = 48, rule = B3/S23
30bo$30bobo$29bobo$31bo3$28bo$27bobo$27bobo$28bo6$7b2o8bo$7bo8bobo13b
2o$5bobo2b3o4bo12bo2bo$4bobo4b3o16bobo9b2o$2o3bo24b3o8bo2bo$2o40bobo$
40b2obo$40b3o$40b2o4$39b2o$8b3o24bo3b2o$8bobo16b3o4bobo$7bo2bo12bo4b3o
2bobo$7b2o13bobo8bo$23bo8b2o6$12bo$11bobo$11bobo$12bo3$9bo$9bobo$8bob
o$10bo!`},newshuttle:{cellSize:15,fps:15,isToroidal:!1,rle:`#N Newshuttle
#O David Buckingham
#C The first known period-28 oscillator
#C Discovered in 1973
#C https://www.conwaylife.com/wiki/Newshuttle
x = 51, y = 51, rule = B3/S23
26b2o$20bo3bo2bo2bo$18b3o3b3o3b3o$8b2o7bo15bo7b2o$9bo7b2o5b3o5b2o7bo$
9bobo11bo3bo11bobo$10b2o11b2ob2o11b2o2$3bo10b3o17b3o10bo$3b3o9bo19bo9b
3o$6bo13b3o5b3o13bo$5b2o14bo7bo14b2o3$8bo33bo$8b2o31b2o$8bo33bo$3b2o
18b2ob2o18b2o$2bobo18bo3bo18bobo$2bo21b3o21bo$b2o7bo15bobo11bo7b2o$10b
2o15b2o10b2o$10bo9b2o18bo$2o3b2o10b2o2bo10b2o10b2o$obobobo10bob2o10bob
o10bobob2o$2bobo14bo11bo14bobo$b2obobo10bobo10b2obo10bobobobo$5b2o10b
2o10bo2b2o10b2o3b2o$10bo18b2o9bo$10b2o10b2o15b2o$b2o7bo11bobo15bo7b2o$
2bo21b3o21bo$2bobo18bo3bo18bobo$3b2o18b2ob2o18b2o$8bo33bo$8b2o31b2o$8b
o33bo3$5b2o14bo7bo14b2o$6bo13b3o5b3o13bo$3b3o9bo19bo9b3o$3bo10b3o17b3o
10bo2$10b2o11b2ob2o11b2o$9bobo11bo3bo11bobo$9bo7b2o5b3o5b2o7bo$8b2o7bo
15bo7b2o$18b3o3b3o3b3o$20bo2bo2bo3bo$23b2o!`},octominop52glidergun:{cellSize:15,fps:30,isToroidal:!1,rle:`#N octominop52glidergun.rle
#C https://conwaylife.com/wiki/Period-52_glider_gun
#C https://www.conwaylife.com/patterns/octominop52glidergun.rle
x = 33, y = 26, rule = B3/S23
22b2o$22bo2b2o$23b2ob3o$2o27bo$bo21b2ob3o$bobo13b2o4b2obo$2b2o13bobo$
17bo11bo$28bobo$12bo15bobo$11b3o13b2ob2o$2o9bobo17bo$obob2o7b2o12b2obo
$2bob2o12b2o7b2obobo$bo17bobo9b2o$b2ob2o13b3o$2bobo15bo$2bobo$3bo11bo$
13bobo13b2o$6bob2o4b2o13bobo$4b3ob2o21bo$3bo27b2o$4b3ob2o$6b2o2bo$9b2o!`},originalp36guns:{cellSize:7,fps:40,isToroidal:!1,rle:`#N originalp36guns.rle
#C https://conwaylife.com/wiki/Period-36_glider_gun
#C https://www.conwaylife.com/patterns/originalp36guns.rle
#N original p36 glider guns
#O Jason Summers, 23 July 2004
#C These were the first p36 glider guns assembled using Jason's p36
x = 161, y = 77, rule = B3/S23
31bo79bo$31b3o77b3o$34bo79bo$33b2o78b2o2$116bo$115b3o$114bo2b2o$114bo
3bo$36bo79bobo$35b3o7b2o78b2o$34bo2b2o5bo2bo65b2ob2o6bo2bo$34b2ob2o4bo
bobo67bo6bo2bobo$33b3o2bo2b3o2bo75bo3bo$34b2obo84bo$35bo7b2o69b3o8bo$
35bo3bo4bo70b2o6b2o$36bobo76b2o$37bo2$40bo$39bobo79b2o$31b2o5bo3bo70b
2o6b2o$30bo2bo8bo69bo8b3o$30bobobo5bob2o71bo$31bo2b3o2bo2b3o66bo3bo$
26b2o11b2ob2o24b2o40bobo2bo6bo25b2o$2o23bo2bo4b2o4b2o2bo23bo2bo39bo2bo
6b2ob2o22bo2bo$bo24bobo4bo6b3o25bobo40b2o35bobo$bobo9bo8b2o3bo13bo22b
4obo49bobo22b2o3bo$2b2o7b4o8bob2o27b3o7b2ob2o50bo3bo6b4o3bobo5bob2o$
10bob5o8bo27b2o3bo8bo51b2o2bo5b2o2bo2bo3bo6bo$9b2o6bo7bo26b2o2bobo38b
2o21b3o5b2o2bo4bo9bo$10b3obo3bo34bo5bo6bo29bo2bo21bo7bo2bo6b2o$11b3o3b
o4bo31b2o2bo5bo31bobo2bo28b2o$16bo4bo3b3o30bo5bo2b2o28bo4bo48b2o$20bo
3bob3o27bo6bo5bo32bo6b2o3bo27b2o6bo2bo$13bo7bo6b2o34bobo2b2o27b3o6b3o
4b2o19bo9bo4bo2b2o$13bo8b5obo14bo11bo8bo3b2o36bo2bo5b2o6bo11bo6bo3bo2b
o2b2o$12b2obo8b4o16bo9b2ob2o7b3o8b2o27bo7b2o8bo9b2obo5bobo3b4o4b2o$11b
o3b2o8bo16b3o8bob4o18bobo26b2o14b3o8bo3b2o18bobo$10bobo39bobo24bo23b2o
27bobo24bo$10bo2bo38bo2bo23b2o14b2o7bo27bo2bo23b2o$11b2o40b2o39b2o5bo
2bo28b2o$95b2o4b3o6b3o$88b2o6bo3b2o6bo$87bobo18bo4bo$52bo34bo21bo2bobo
17bo$32bo8b2o10bo32b2o23bo2bo18bo$31b3o6bo2bo7b3o58b2o17b3o$30b2o2bo4b
obobo$30bo3bo3b3obo$30bobo3bo3bo$39b2o$31b2ob2o3b2o$33bo4$36bo$29b2o3b
2ob2o$29b2o$29bo3bo3bobo$27bob3o3bo3bo$26bobobo4bo2b2o$26bo2bo6b3o$27b
2o8bo7$39b2o$39bo$40b3o$42bo!`},originalp44piheptominohassler:{cellSize:15,fps:20,isToroidal:!1,rle:`#N Original p44 pi-heptomino hassler
#O David Buckingham
#C The original form of p44 pi-heptomino hassler
x = 31, y = 44, rule = b3/s23
9b2o10b2o8b$8bo2bo8bo2bo7b$8b3o10b3o7b$11b10o10b$10bo2b6o2bo9b$10b2o2b
4o2b2o9b4$20b2o9b$20b2o9b$12b2o17b6$2o12b3o12b2o$2o11bo3bo11b2o$13b2ob
2o13b5$13b2ob2o13b$2o11bo3bo11b2o$2o12b3o12b2o6$12b2o17b$20b2o9b$20b2o
9b4$10b2o2b4o2b2o9b$10bo2b6o2bo9b$11b10o10b$8b3o10b3o7b$8bo2bo8bo2bo7b
$9b2o10b2o!`},originalp48glidergun:{cellSize:15,fps:20,isToroidal:!1,rle:`#N originalp48glidergun.rle
#C https://conwaylife.com/wiki/Period-48_glider_gun
#C https://www.conwaylife.com/patterns/originalp48glidergun.rle
x = 47, y = 41, rule = B3/S23
17b2o11b2o$16bo2bo9bo2bo$16bobo3b2ob2o3bobo$14b2o2bobo7bobo2b2o$15bobo
bo4bo4bobobo$14bo2b2o2b7o2b2o2bo$14b2o5bobobobo5b2o$23bobo$5bo2b2o9b3o
5b3o$4bobo2bo2bo5bobobo3bobobo$4bob2obobobo4b2o2b5o2b2o$3b2obo2bobo2bo
$3bo2bob2o2bo$4b3obobo3b3o$6b2obo5b2o$2bobo2bobo3bo2bo4bobobo$2b2o2b2o
bob2o2b3o4b3o13b2o$8b2obo3b2o6bo13bo2bo$2b5o4bo24b2o$bo4bob3o17b2o5b3o
5bo$bob2obobo6b2o7bo3bobo4bo2bo3bobo$2obo2bo6b4o8bo4bo5b3o3b2o$bobobob
o5b2o2bo5b3o4b2o$bobob2obo2bo24b3o3b2o$2ob2o2b2o3b4o19bo2bo3bobo$3bo2b
3o2bo2b2o4bo14b3o5bo$3bobob2o5bo4bobo8bo5b2o$2b2obo2b2obo2bo3bo3bo8bo
5bo2bo$4bo3b2o2bo2bo3bobo7b3o6b2o$4bobo7bo5bo$3b2ob2o10b3o$10b2o4b7o4b
2o$10bo2bo2b2obob2o2bo2bo$11b2ob4o3b4ob2o$8b3o2bo11bo2b3o$7bo3b2ob2o7b
2ob2o3bo$7b2obo3b2o7b2o3bob2o$8bob3o3bo5bo3b3obo$7bo6b2o7b2o6bo10bo$8b
6o11b6o12bo$10bo2bo11bo2bo12b3o!`},originalp49glidershuttle:{cellSize:10,fps:30,isToroidal:!1,rle:`#N originalp49glidershuttle.rle
#C https://conwaylife.com/wiki/P49_glider_shuttle
#C https://www.conwaylife.com/patterns/originalp49glidershuttle.rle
x = 65, y = 65, rule = B3/S23
14bo2bo2bo$14b7o2bo$21b3o$16b4o$15bobo2b2o$15bo6bo$14b2ob5obo$15bo5bob
o$15bobo2bo2b2o$13bobo2bobobo$13b2ob2o2bobo10bo$16bo3bob2o7b3o$16bob2o
bo8bo$13b2obo4bo8b2o$13bobo3bob2o$16b4o2bo5bo$20b2o5bobo$16b4o2bo5b2o
2b2o$16bo2bob2o9b2o$21bo$19bobo28b2o2b2o$19b2o5bo24bo2bo3bo4b2o$25bo
24bo4b6o2bo$25b3o18b2obob4o6bobo$10b2o5b2o28bobo4bobobob2ob2o$11bo5b2o
28bobo2bo2bo2bo2bobo$11bobo29b2ob2ob2obo5bo2bobo$12b2o29bo4bo4b4obobo
2b2o$16b2o26b3obob3o4b2obobo$15bobo19b3o6b2ob2o2b3o3bo2bo$16bo20bo15bo
2b3o3b2o$38bo17bo2$8bo17bo$b2o3b3o2bo15bo20bo$2bo2bo3b3o2b2ob2o6b3o19b
obo$2bobob2o4b3obob3o26b2o$2o2bobob4o4bo4bo29b2o$bobo2bo5bob2ob2ob2o
29bobo$bobo2bo2bo2bo2bobo28b2o5bo$2ob2obobobo4bobo28b2o5b2o$bobo6b4obo
b2o18b3o$bo2b6o4bo24bo$2o4bo3bo2bo24bo5b2o$9b2o2b2o28bobo$43bo$31b2o9b
2obo2bo$31b2o2b2o5bo2b4o$35bobo5b2o$36bo5bo2b4o$42b2obo3bobo$33b2o8bo
4bob2o$34bo8bob2obo$31b3o7b2obo3bo$31bo10bobo2b2ob2o$42bobobo2bobo$40b
2o2bo2bobo$41bobo5bo$41bob5ob2o$42bo6bo$43b2o2bobo$45b4o$41b3o$41bo2b
7o$44bo2bo2bo!
`},originalp56bheptominoshuttle:{cellSize:25,fps:15,isToroidal:!1,rle:`#N Original P56 B-heptomino shuttle
#O David Buckingham
#C The original form of P56 B-heptomino shuttle, discovered sometime b
#C efore May, 1991
x = 40, y = 21, rule = b3/s23
31b4o5b$30bo4bob2ob$30bo4bo3bo$33b2o4bo$13b2o15b2o4bo2bo$13b2o14bo2bo
3bo2bo$29bo2bo4b2ob$29bo4b2o4b$29bo3bo4bob$13bo16b2obo4bob$6b2o4bob2o
18b4o2b$3bo8bo2bo24b$2bobo2b2o6bo24b$obob3o2bo30b$o2b6o31b$3b2ob2o17b
2o13b$2b6o2bo14b2o13b$bo2b3obobo29b$2b2o2bobo31b$7bo32b$3b2o!`},originalprepulsarshuttle26:{cellSize:17,fps:15,isToroidal:!1,rle:`#N originalprepulsarshuttle26.rle
#C https://conwaylife.com/wiki/P26_pre-pulsar_shuttle
#C https://www.conwaylife.com/patterns/originalprepulsarshuttle26.rle
x = 40, y = 39, rule = B3/S23
17b2o3b2o$16bo2bobo2bo$12b2o3b2o3b2o3b2o$12bo15bo$9b2obo15bob2o$8bobob
2o13b2obobo$8bobo5b3o3b3o5bobo$6b2o2bo5bobo3bobo5bo2b2o$5bo4b2o4b3o3b
3o4b2o4bo$5b5o21b5o$9bo21bo$3b4o27b4o$3bo2bo27bo2bo2$17b2o3b2o$2bo4b3o
8bo3bo8b3o4bo$bobo3bobo5bo9bo5bobo3bobo$bobo3b3o5b2o7b2o5b3o3bobo$2bo
35bo2$2bo35bo$bobo3b3o5b2o7b2o5b3o3bobo$bobo3bobo5bo9bo5bobo3bobo$2bo
4b3o8bo3bo8b3o4bo$17b2o3b2o2$3bo2bo27bo2bo$3b4o27b4o$9bo21bo$5b5o21b5o
$5bo4b2o4b3o3b3o4b2o4bo$6b2o2bo5bobo3bobo5bo2b2o$8bobo5b3o3b3o5bobo$8b
obob2o13b2obobo$9b2obo15bob2o$12bo15bo$12b2o3b2o3b2o3b2o$16bo2bobo2bo$
17b2o3b2o!`},oscp43plus:{cellSize:10,fps:30,isToroidal:!1,rle:`#C This pattern demonstrates the existence of oscillators of all
#C periods greater than or equal to 43.
#C This pattern is period 43. To increase the period by N:
#C 1. Remove the gliders
#C 2. Move the two northwest reflectors to the northwest by N cells
#C 3. Repopulate the glider stream with a separation of 43+N
#C    generations between gliders
x = 65, y = 65, rule = B3/S23
20b2o$20bobo$22bo4b2o$18b4ob2o2bo2bo$18bo2bobobobob2o$21bobobobo$22b2o
bobo$26bo2$12b2o$13bo7b2o$13bobo5b2o$14b2o2$27bobo$28b2o$28bo$18b2o$
17bobo$19bo4b2o$3b2o19bo$4bo20b3o$2bo24bo$2b5o14b2o$7bo13bo17bo$4b3o
12bobo18bo$3bo15b2o17b3o14bo$3b4o7b2o37b3o$b2o3bo3b2ob2o37bo$o2b3o4b2o
3bo36b2o$2obo$3bo$3b2o55b2o$61bo$61bob2o$11b2o36bo3b2o4b3o2bo$12bo37b
2ob2o3bo3b2o$9b3o37b2o7b4o$9bo14b3o17b2o15bo$24bo18bobo12b3o$25bo17bo
13bo$42b2o14b5o$37bo24bo$37b3o20bo$40bo19b2o$39b2o4bo$45bobo$45b2o$36b
o$35b2o$35bobo2$49b2o$42b2o5bobo$42b2o7bo$51b2o2$38bo$37bobob2o$37bobo
bobo$34b2obobobobo2bo$34bo2bo2b2ob4o$36b2o4bo$42bobo$43b2o!`},p100honeyfarmhassler:{cellSize:15,fps:20,isToroidal:!1,rle:`#N p100honeyfarmhassler.rle
#C https://conwaylife.com/wiki/Honey_farm_hassler
#C https://www.conwaylife.com/patterns/p100honeyfarmhassler.rle
x = 39, y = 40, rule = B3/S23
25b2o$15b2o7bo2bo4bo$15bo9b3o3bobo$16b9o6bobo$13b3o2b5o2bo4b2obob2o$
13bo2bo2b3o2b2o3bo3bobo2bo$14b2o13bob3o3b2o$34bo$29b2ob3o$30bo$31b4o$
35bo$17b3o11b4o$16bo3bo9bo$15bo5bo7b2ob3o$15bo5bo12bo$15bo5bo7bob3o3b
2o$16bo3bo8bo3bobo2bo$6bo10b3o10b2obob2o$5bobo23bobo$5bobo23bobo$2b2ob
ob2o10b3o10bo$o2bobo3bo8bo3bo$2o3b3obo7bo5bo$4bo12bo5bo$4b3ob2o7bo5bo$
8bo9bo3bo$4b4o11b3o$3bo$4b4o$8bo$4b3ob2o$4bo$2o3b3obo13b2o$o2bobo3bo3b
2o2b3o2bo2bo$2b2obob2o4bo2b5o2b3o$5bobo6b9o$5bobo3b3o9bo$6bo4bo2bo7b2o
$12b2o!
`},p100lumpsofmuckhassler2:{cellSize:12,fps:15,isToroidal:!1,rle:`#N p100lumpsofmuckhassler2.rle
#C https://conwaylife.com/wiki/Lumps_of_muck_hasslers
#C https://www.conwaylife.com/patterns/p100lumpsofmuckhassler2.rle
x = 61, y = 61, rule = B3/S23
27bo$27bo$27bo2$29b3o2$22b2o3bo$21bobo3bo$21bo5bo$20b2o3$21bo$20bo2bo
$20bo2bo20b2o$14bo7bo8b3o10bo$14b3o14bobo8bobo$17bo12bo2bo8b2o$16b2o12b
obo$30b3o$46b2o3bo$48bo2b3o$45bo8bo$46b2o5b2o4$15b3o34b3o3b3o$15bo2b2o
$4bo10b2o2bo36bo$4bo12b3o21b3o12bo$4bo36bo2b2o10bo$41b2o2bo$3o3b3o34b
3o4$6b2o5b2o$6bo8bo$7b3o2bo$9bo3b2o$28b3o$28bobo12b2o$17b2o8bo2bo12bo
$16bobo8bobo14b3o$16bo10b3o8bo7bo$15b2o20bo2bo$37bo2bo$39bo3$39b2o$33b
o5bo$33bo3bobo$33bo3b2o2$29b3o2$33bo$33bo$33bo!`},p102honeyfarmhassler:{cellSize:15,fps:20,isToroidal:!1,rle:`#N p102honeyfarmhassler.rle
#C https://conwaylife.com/wiki/Honey_farm_hasslers
#C https://www.conwaylife.com/patterns/p102honeyfarmhassler.rle
x = 35, y = 40, rule = B3/S23
14b2o$14b2o4b2o4b2o$20b2o4b2o2$7b2o24b2o$6bo2bo23bo$6bob2o21bobo$5b2o
24b2o$4bo3b2o$5b3o2bo4b3o$8b2obo2bo3bo$7bo2bo2bo5bo$7b2o4bo5bo$13bo5b
o$14bo3bo$15b3o2$30b2o$30bobo$b2o29bo$2bo29b2o$2bobo$3b2o2$17b3o$16bo
3bo$15bo5bo$15bo5bo4b2o$15bo5bo2bo2bo$16bo3bo2bob2o$17b3o4bo2b3o$25b2o
3bo$2b2o24b2o$bobo21b2obo$bo23bo2bo$2o24b2o2$7b2o4b2o$7b2o4b2o4b2o$19b
2o!`},p104lumpsofmuckhassler2:{cellSize:15,fps:20,isToroidal:!1,rle:`#N p104lumpsofmuckhassler2.rle
#C https://conwaylife.com/wiki/Lumps_of_muck_hasslers
#C https://www.conwaylife.com/patterns/p104lumpsofmuckhassler2.rle
x = 35, y = 35, rule = B3/S23
b2o24b2o$b2o24b2o3$2obo23b3o$bobo4bo19b2o$2bo5bobo14b2o$b2o4bobo15b3o$
b2o6bo16bobo$b2o24b2o6$19b3o$11b3o5bo2b2o$11bo2b2o3b2o2bo$11b2o2bo5b3o
$13b3o6$6b2o24b2o$6bobo16bo6b2o$7b3o15bobo4b2o$8b2o14bobo5bo$5b2o19bo
4bobo$5b3o23bob2o3$6b2o24b2o$6b2o24b2o!`},p104lumpsofmuckshuttle:{cellSize:15,fps:15,isToroidal:!1,rle:`#N p104lumpsofmuckshuttle.rle
#C https://conwaylife.com/wiki/Lumps_of_muck_hasslers
#C https://www.conwaylife.com/patterns/p104lumpsofmuckshuttle.rle
x = 54, y = 41, rule = B3/S23
18b2o$17b4o$16bob2ob2obo$21b2o2bo$16b2o2b2o2b3o7b3o$16b4obo2b3o10bo$
15bo2bo3bo2bo7bo3bo$14b3o2bob4o7bobo2bo$14b3o2b2o2b2o5bo2bobo9b2o$15bo
2b2o10bo3bo10bobo$16bob2ob2obo5bo17bo$20b4o7b3o8bo3b2obob2o$21b2o19bo
4bob2obo$40b2obob2obo$33bo6bo5bo3b2o$25b3o5bo4b2o8bo2bo$25bobo9b3o9b2o
$4b2o6b2o10bo2bo9b3o6bobo2b3o$4b2o5bobo10bobo10b3o6b2o2bo2bo$11bobob2o
7b3o10b3o11b2o$12bobobo21b2o$14bo24bo$14b2o21bobobo$b2o11b3o20b2obobo$
o2bo2b2o6b3o23bobo5b2o$3o2bobo6b3o23b2o6b2o$3b2o9b3o$2bo2bo8b2o$2b2o3b
o5bo$5bob2obob2o$bob2obo4bo$b2obob2o3bo$5bo15b2o8bo2bobo$6bobo10bob2o
6b2obob3o$7b2o9bo11bo6bo$21bo7b2o5bo$17b2obo$17b2o11bo5b2o$29bo6bo$30b
3obob2o$30bobo2bo!`},p104piheptominohassler:{cellSize:10,fps:20,isToroidal:!1,rle:`#N p104piheptominohassler.rle
#C https://conwaylife.com/wiki/Pi-heptomino_hasslers
#C https://www.conwaylife.com/patterns/p104piheptominohassler.rle
x = 69, y = 69, rule = B3/S23
32bo$32b3o$35bo$34b2o2$29bo7b2o$29b3o4bobo$32bo3b2o8b2o$31b2o13bo$44b
obo$42bob2o$42bo$22bo24bo$22b3o22bobo$25bo20bobo$24b2o22bo$34b3o$33bo
2bo$32bo$33bo2bo18bo$34b3o16b2o$55b2o4bo$12b2o40bo4b3o$13bo44bo$13bob
o42b2o$14b2o$57b2o3$5b2o$6bo55b2o$6bobo52bobo$2o5b2o9bo29b2ob2o8b2o$b
o15bobo28bo3bo12b2o$bobo12bo3bo27bo3bo12bobo$2b2o12bo3bo28bobo15bo$6b
2o8b2ob2o29bo9b2o5b2o$5bobo52bobo$5b2o55bo$62b2o3$10b2o$53b2o$9b2o42b
obo$10bo44bo$7b3o4bo40b2o$7bo4b2o$14b2o16b3o$13bo18bo2bo$36bo$32bo2bo
$32b3o$20bo22b2o$20bobo20bo$19bobo22b3o$21bo24bo$26bo$23b2obo$22bobo$
22bo13b2o$21b2o8b2o3bo$30bobo4b3o$30b2o7bo2$33b2o$33bo$34b3o$36bo!`},p105rpentominohassler:{cellSize:15,fps:10,isToroidal:!1,rle:`#N p105rpentominohassler.rle
#C https://conwaylife.com/wiki/R-pentomino_hasslers
#C https://www.conwaylife.com/patterns/p105rpentominohassler.rle
x = 42, y = 42, rule = B3/S23
19b6o$18bo6bo$17bo8bo$8b3o7bo6bo$8bobo8b6o$8b3o$8b3o$8b3o$8b3o20b8o$8b
obo20bob4obo$8b3o20b8o4$21bo$2bo17b3o$bobo16bo$o3bo34bo$o3bo33bobo$o3b
o10bo21bo3bo$o3bo9b2o9b2o10bo3bo$o3bo10b2o9b2o9bo3bo$o3bo21bo10bo3bo$b
obo33bo3bo$2bo34bo3bo$21bo16bobo$19b3o17bo$20bo4$3b8o20b3o$3bob4obo20b
obo$3b8o20b3o$31b3o$31b3o$31b3o$17b6o8bobo$16bo6bo7b3o$15bo8bo$16bo6bo
$17b6o!`},p108piwinghassler:{cellSize:15,fps:20,isToroidal:!1,rle:`#N p108piwinghassler.rle
#C https://conwaylife.com/wiki/Pi-heptomino_hasslers
#C https://www.conwaylife.com/patterns/p108piwinghassler.rle
x = 80, y = 45, rule = B3/S23
37bo$28bo7bobo$28b3o5bobo$31bo3b2o2b2o19b2o$30bo2bo3b2o2bo14b2obobo$
30bob3obo2b3o7b2o6bobo$31b2o3b3o9bo2bo5bob2o$34b2o3bo11bo4b2obobob2ob
2o$37bobo11bo3bo3b2o3bobo$36b3o6bo3bobo4b3o3bobobo$26b2o16bo3bobo8b7o$
22b2o2b2o16bo4bo6b2obo$22b2o2bob2o15b4o6bob2o3b6o$27b3o25bo3b2o7bo$3b
2o51b3o6b3o$3bo54bo6bo$5bo21b2o8bo21b6o6b2o$4b4o19b2o8bo32bo2bo$3bo4bo
7b2o20bo31bobobo$3b5obo9b2o20b2ob2o23b2obobo$b2o4bobo4b2obo23bo3bo13bo
b3o5bo3bob2o$o2bo5b2o8bob2o19b3o12b2o3bobo4b3obo2bo$2obobobo2bo3b2o2bo
2b2o34b2o2bo2b2o3bo2bobobob2o$3bo2bob3o4bobo3b2o12b3o19b2obo8b2o5bo2bo
$3b2obo3bo5b3obo13bo3bo23bob2o4bobo4b2o$5bobob2o23b2ob2o20b2o9bob5o$5b
obobo31bo20b2o7bo4bo$6bo2bo32bo8b2o19b4o$7b2o6b6o21bo8b2o21bo$14bo6bo
54bo$12b3o6b3o51b2o$11bo7b2o3bo25b3o$12b6o3b2obo6b4o15b2obo2b2o$20bob
2o6bo4bo16b2o2b2o$14b7o8bobo3bo16b2o$13bobobo3b3o4bobo3bo6b3o$13bobo3b
2o3bo3bo11bobo$12b2ob2obobob2o4bo11bo3b2o$19b2obo5bo2bo9b3o3b2o$20bobo
6b2o7b3o2bob3obo$18bobob2o14bo2b2o3bo2bo$18b2o19b2o2b2o3bo$41bobo5b3o$
41bobo7bo$42bo!`},p10honeyfarmhassler:{cellSize:15,fps:15,isToroidal:!1,rle:`#N p10honeyfarmhassler.rle
#C https://conwaylife.com/wiki/Honey_farm_hassler
#C https://www.conwaylife.com/patterns/p10honeyfarmhassler.rle
x = 45, y = 41, rule = B3/S23
10b2o6b2o$6b2obobo6bobob2o$4bo2bobo10bobo2bo$4b2o4bo8bo4b2o$8b3o8b3o2$
11b3o2b3o2$14b2o$7b2obo8bob2o$7b2obo8bob2o$11bo6bo$12b6o7bo6b2o$23b3o
2bo4bo$22bo3b3o2bo$3b2ob2o14bo2bo3b4o7b2o$3bo17b2obob3o7b2o3bo$4b2o2bo
5bo6bo2bobo3b3ob2o3bobob2o$5b3o4b2ob2o4b2ob2obo3bo3bo3bobo2bo$5b3o4b2o
b2o4b2o2bo6bo2bobobob2o$4b2o2bo3b2ob2o4b2o8bo4bo2bo$3bo10bo6bo3b4o4bob
obobo$3b2ob2o13bo5bobo2b2obob2o$21bo4b2obo3bobo$22b3obobobo2bobo$26bob
2obob2o$4bo14bo2b4obo3bo$2b3o2b2o6b2o2b4o2bo2bob2o$bo7b6o11b2o$bob2o3b
2o4b2o3b2o$2obo16bo$bo2b5o6b5o$bo8bo2bo$2b3ob2obo4bob2o$4bobo2b2o2b2o
2bo$4bo2bobob2obobo$5bobobo4bobobob2o$4b2obobo4bobob2obo$7bo8bo$7bobo
4bobo$8b2o4b2o!`}},wn={CELL:"#FFFFFF",GRID:"#000000",BACKGROUND:"#001a44"},q2=!1,Z2=5,K2=60,Y2=!0,Q2=.3,J2=!0,$o=Object.keys($e),nb=class e{cells;width;height;isToroidal;constructor(t,o,b=!0){this.width=t,this.height=o,this.cells=new Uint8Array(t*o),this.isToroidal=b}next(){let t=new Uint8Array(this.cells);for(let o=0;o<t.length;o++){let b=t[o]&1,n=t[o]>>>1;if(!(b||n))continue;let i=n===3?1:n===2?b:0;i!==b&&(i?this.spawnCellbyIndex(o):this.killCellbyIndex(o))}}draw(t,o,b){for(let n=0;n<this.cells.length;n++){if(!(this.cells[n]&1))continue;let{x:i,y:r}=this.translate1dto2d(n);o>=10&&(t.beginPath(),t.fillStyle="#000000FF",t.rect(i*o,r*o,o,o),t.stroke()),t.fillStyle=b,t.fillRect(i*o,r*o,o,o)}}spawnCellbyCoord(t,o){this.spawnCellbyIndex(this.translate2dto1d(t,o))}spawnCellbyIndex(t){this.cells[t]|=1;let{x:o,y:b}=this.translate1dto2d(t);for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)n===0&&i===0||!this.isToroidal&&(o+n<0||o+n===this.width||b+i<0||b+i===this.height)||(this.cells[this.translate2dto1d(o+n,b+i)]+=2)}killCellbyCoord(t,o){this.killCellbyIndex(this.translate2dto1d(t,o))}killCellbyIndex(t){this.cells[t]&=-2;let{x:o,y:b}=this.translate1dto2d(t);for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)n===0&&i===0||!this.isToroidal&&(o+n<0||o+n===this.width||b+i<0||b+i===this.height)||(this.cells[this.translate2dto1d(o+n,b+i)]-=2)}translate1dto2d(t){return t=(t%(this.width*this.height)+this.width*this.height)%(this.width*this.height),{x:Math.floor(t/this.height),y:t%this.height}}translate2dto1d(t,o){return(t%this.width+this.width)%this.width*this.height+(o%this.height+this.height)%this.height}static random(t,o,{spawnRate:b=.3,isToroidal:n=!0}={}){let i=new e(t,o,n);for(let r=0;r<i.cells.length;r++)Math.random()<b&&i.spawnCellbyIndex(r);return i}static fromRLE(t,o,b,n){let i=/(?:^#.*\n)*^x\s?=\s?(\d+),\s?y\s?=\s?(\d+).*\n((?:.+\n?)+)/gm,r=/\d*[bo$]/gm,[,s,a,l]=i.exec(b),u=new e(t,o,n),_=Math.floor((o-parseInt(a))/2),M=Math.floor((t-parseInt(s))/2),N=l.match(r);for(let x of N){let Q=x.length===1?1:parseInt(x.slice(0,-1));switch(x.at(-1)){case"b":M+=Q;break;case"o":for(let J=0;J<Q;J++)u.spawnCellbyCoord(M++,_);break;case"$":M=Math.floor((t-parseInt(s))/2),_+=Q;break}}return u}},ib=(()=>{class e{gridCanvas=at.required("game_of_life_grid");gridContext=G(()=>this.gridCanvas().nativeElement.getContext("2d"));boardCanvas=at.required("game_of_life_board");boardContext=G(()=>this.boardCanvas().nativeElement.getContext("2d"));bgCanvas=at.required("game_of_life_bg");bgContext=G(()=>this.bgCanvas().nativeElement.getContext("2d",{alpha:!1}));board;showGrid=B(q2);gridColor=B(wn.GRID);backgroundColor=B(wn.BACKGROUND);userCellSize=B(void 0,{alias:"cellSize"});cellSize=G(()=>this.userCellSize()!==void 0?this.userCellSize():this.preset()!=="random"?$e[this.preset()].cellSize:Z2);cellColor=B(wn.CELL);userFps=B(void 0,{alias:"fps"});fps=G(()=>this.userFps()!==void 0?this.userFps():this.preset()!=="random"?$e[this.preset()].fps:K2);userIsToroidal=B(void 0,{alias:"isToroidal"});isToroidal=G(()=>this.userIsToroidal()!==void 0?this.userIsToroidal():this.preset()!=="random"?$e[this.preset()].isToroidal:Y2);spawnRate=B(Q2);advanceGame=B(J2);preset=B("",{transform:o=>Object.hasOwn($e,o)?o:"random"});constructor(){dt(()=>{this.showGrid()?this.drawGrid():this.gridContext().clearRect(0,0,this.width(),this.height())}),dt(()=>{this.resetBoard()}),dt(()=>{this.bgContext().fillStyle=this.backgroundColor(),this.bgContext().fillRect(0,0,this.width(),this.height())})}ngAfterViewInit(){this.onResize(),this.update()}onResize(){let o=this.width(),b=this.height();this.bgCanvas().nativeElement.width=o,this.bgCanvas().nativeElement.height=b,this.boardCanvas().nativeElement.width=o,this.boardCanvas().nativeElement.height=b,this.gridCanvas().nativeElement.width=o,this.gridCanvas().nativeElement.height=b,this.bgContext().fillStyle=this.backgroundColor(),this.bgContext().fillRect(0,0,o,b),this.showGrid()&&this.drawGrid(),this.resetBoard()}update(){let o=window.performance.now(),b=n=>{window.requestAnimationFrame(b);let i=n-o,r=1e3/this.fps();i<r||(o=n-i%r,this.advanceGame()&&this.board.next(),this.boardContext().clearRect(0,0,this.width(),this.height()),this.board.draw(this.boardContext(),this.cellSize(),this.cellColor()))};window.requestAnimationFrame(b)}drawGrid(){let o=this.width(),b=this.height(),n=this.cellSize(),i=this.gridContext();i.clearRect(0,0,o,b),i.beginPath(),i.strokeStyle=this.gridColor();for(let r=0;r<o;r+=n)i.moveTo(r,0),i.lineTo(r,b);for(let r=0;r<b;r+=n)i.moveTo(0,r),i.lineTo(o,r);i.stroke()}resetBoard(){let o=Math.ceil(this.width()/this.cellSize()),b=Math.ceil(this.height()/this.cellSize()),n=this.preset();n==="random"?this.board=nb.random(o,b,{spawnRate:this.spawnRate(),isToroidal:this.isToroidal()}):this.board=nb.fromRLE(o,b,$e[n].rle,this.isToroidal())}width(){return window.innerWidth}height(){return window.innerHeight}static \u0275fac=function(b){return new(b||e)};static \u0275cmp=O({type:e,selectors:[["ngx-game-of-life-bg"]],viewQuery:function(b,n){b&1&&(ut(n.gridCanvas,B2,5),ut(n.boardCanvas,H2,5),ut(n.bgCanvas,G2,5)),b&2&&ri(3)},hostBindings:function(b,n){b&1&&I("resize",function(){return n.onResize()},!1,Wn)},inputs:{showGrid:[1,"showGrid"],gridColor:[1,"gridColor"],backgroundColor:[1,"backgroundColor"],userCellSize:[1,"cellSize","userCellSize"],cellColor:[1,"cellColor"],userFps:[1,"fps","userFps"],userIsToroidal:[1,"isToroidal","userIsToroidal"],spawnRate:[1,"spawnRate"],advanceGame:[1,"advanceGame"],preset:[1,"preset"]},decls:7,vars:7,consts:[["game_of_life_grid",""],["game_of_life_board",""],["game_of_life_bg",""],[1,"pattern_name",3,"z-index","background-color"],[1,"gol_canvas"],[1,"pattern_name"]],template:function(b,n){b&1&&(qo(0,W2,2,5,"span",3),T(1,"canvas",4,0)(3,"canvas",4,1)(5,"canvas",4,2)),b&2&&(Zo(n.preset()!=="random"?0:-1),w(),_e("z-index",-998),w(2),_e("z-index",-999),w(2),_e("z-index",-1e3))},styles:["canvas.gol_canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}span.pattern_name[_ngcontent-%COMP%]{position:fixed;bottom:5px;right:5px;padding:5px;border-radius:2px;font-size:16px;font-family:Arial,Helvetica,sans-serif}"]})}return e})();function X2(e,t){if(e&1&&(d(0,"option",8),C(1),f()),e&2){let o=t.$implicit;R("value",o),w(),xo(o)}}var rb=class e{PATTERNS=$o;showGrid=H(!1);gridColor=H("#f8f6e7");backgroundColor=H("#000000");cellSize=H(void 0);cellColor=H("#f8f6e7");fps=H(void 0);isToroidal=H(void 0);spawnRate=H(.3);advanceGame=H(!0);preset=H($o[Math.floor(Math.random()*$o.length)]);fpsUp(t){this.fps.update(o=>(o===void 0&&(o=t),o+5>60?60:o+5))}fpsDown(t){this.fps.update(o=>(o===void 0&&(o=t),o-5<5?5:o-5))}sizeUp(t){this.cellSize.update(o=>(o===void 0&&(o=t),o+5>50?50:o+5))}sizeDown(t){this.fps.update(o=>(o===void 0&&(o=t),o-5<5?5:o-5))}changePattern(t){this.preset.set(t??$o[Math.floor(Math.random()*$o.length)]),this.fps.set(void 0),this.cellSize.set(void 0),this.isToroidal.set(void 0)}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-game-of-life-demo"]],decls:38,vars:20,consts:[["gol",""],[3,"showGrid","gridColor","backgroundColor","cellSize","cellColor","fps","isToroidal","spawnRate","advanceGame","preset"],["id","grid"],["type","button","value","+",3,"click"],["type","button","value","-",3,"click"],["type","button",3,"click","value"],["type","color",3,"ngModelChange","ngModel"],["name","patterns","id","patterns",3,"ngModelChange","ngModel"],[3,"value"],["type","button","value","RANDOM PATTERN",3,"click"],["type","number","name","rate","id","rate","min","0","step","0.1","max","1",3,"ngModelChange","ngModel"],["type","button","value","RANDOM BOARD",3,"click"]],template:function(o,b){if(o&1){let n=oi();T(0,"ngx-game-of-life-bg",1,0),d(2,"div",2)(3,"lone-div")(4,"span"),C(5," FPS: "),d(6,"input",3),I("click",function(){U(n);let r=No(1);return z(b.fpsUp(r.fps()))}),f(),C(7),d(8,"input",4),I("click",function(){U(n);let r=No(1);return z(b.fpsDown(r.fps()))}),f()(),d(9,"span"),C(10," CELL SIZE: "),d(11,"input",3),I("click",function(){U(n);let r=No(1);return z(b.sizeUp(r.cellSize()))}),f(),C(12),d(13,"input",4),I("click",function(){U(n);let r=No(1);return z(b.sizeDown(r.cellSize()))}),f()(),d(14,"input",5),I("click",function(){return U(n),z(b.advanceGame.set(!b.advanceGame()))}),f()(),d(15,"lone-div")(16,"span"),C(17," CELL COLOR: "),d(18,"input",6),I("ngModelChange",function(r){return U(n),z(b.cellColor.set(r))}),f()(),d(19,"span"),C(20," GRID: "),d(21,"input",5),I("click",function(){return U(n),z(b.showGrid.set(!b.showGrid()))}),f()(),d(22,"span"),C(23," GRID COLOR: "),d(24,"input",6),I("ngModelChange",function(r){return U(n),z(b.gridColor.set(r))}),f()(),d(25,"span"),C(26," BACKGROUND COLOR: "),d(27,"input",6),I("ngModelChange",function(r){return U(n),z(b.backgroundColor.set(r))}),f()()(),d(28,"lone-div")(29,"select",7),I("ngModelChange",function(r){return U(n),z(b.changePattern(r))}),Ko(30,X2,2,2,"option",8,Xn),f(),d(32,"input",9),I("click",function(){return U(n),z(b.changePattern())}),f(),d(33,"input",5),I("click",function(){U(n);let r=No(1);return z(b.isToroidal.set(!r.isToroidal()))}),f(),d(34,"span"),C(35," SPAWN RATE: "),d(36,"input",10),I("ngModelChange",function(r){return U(n),z(b.spawnRate.set(r))}),f()(),d(37,"input",11),I("click",function(){return U(n),z(b.preset.set("random"))}),f()()()}if(o&2){let n=No(1);R("showGrid",b.showGrid())("gridColor",b.gridColor())("backgroundColor",b.backgroundColor())("cellSize",b.cellSize())("cellColor",b.cellColor())("fps",b.fps())("isToroidal",b.isToroidal())("spawnRate",b.spawnRate())("advanceGame",b.advanceGame())("preset",b.preset()),w(7),Sb(" ",n.fps()," "),w(5),Sb(" ",n.cellSize()," "),w(2),R("value",b.advanceGame()?"STOP":"RUN"),w(4),R("ngModel",b.cellColor()),w(3),R("value",b.showGrid()?"HIDE":"SHOW"),w(3),R("ngModel",b.gridColor()),w(3),R("ngModel",b.backgroundColor()),w(2),R("ngModel",b.preset()),w(),Yo(b.PATTERNS),w(3),R("value",n.isToroidal()?"DISCONNECT SIDES":"CONNECT SIDES"),w(3),R("ngModel",b.spawnRate())}},dependencies:[ib,uo,Hr,Fr,Ur,eb,mn,bb,Pr,yn,vn,gn],styles:["#grid[_ngcontent-%COMP%]{display:grid;height:90vh;grid-template-columns:auto auto;justify-content:space-between;align-content:space-between}lone-div[_ngcontent-%COMP%]{display:inline-flex;margin:20px;font-size:20px}lone-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{vertical-align:middle;margin:10px 0;padding:5px 10px;background-color:#f06733;border:2px solid #101010;border-radius:3px;color:#f8f6e7;font-size:18px;font-family:inherit}lone-div[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active{transform:translateY(2px)}lone-div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{appearance:base-select}lone-div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::picker(select){appearance:base-select}lone-div[_ngcontent-%COMP%]    >div{display:inline-flex;flex-direction:column;justify-content:space-around}"]})};var Gr=[{path:"home",component:Wt},{path:"projects",component:Zt},{path:"about",component:Kt},{path:"ng-game-of-life",component:rb},{path:"**",redirectTo:"home"}];var ol="@",el=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=h(Go);loadingSchedulerFn=h(tl,{optional:!0});_engine;constructor(o,b,n,i,r){this.doc=o,this.delegate=b,this.zone=n,this.animationType=i,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let o=()=>this.moduleImpl??import("./chunk-S3HFMCT6.js").then(n=>n),b;return this.loadingSchedulerFn?b=this.loadingSchedulerFn(o):b=o(),b.catch(n=>{throw new A(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let r=new i(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(o,b){let n=this.delegate.createRenderer(o,b);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new Cn(n);return b?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let s=r.createRenderer(o,b);i.use(s),this.scheduler??=this.injector.get(Fn,null,{optional:!0}),this.scheduler?.notify(10)}).catch(r=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(o){this._engine?.flush(),this.delegate.componentReplaced?.(o)}static \u0275fac=function(b){Cb()};static \u0275prov=g({token:e,factory:e.\u0275fac})}return e})(),Cn=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,b,n){this.delegate.insertBefore(t,o,b,n)}removeChild(t,o,b){this.delegate.removeChild(t,o,b)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,b,n){this.delegate.setAttribute(t,o,b,n)}removeAttribute(t,o,b){this.delegate.removeAttribute(t,o,b)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,b,n){this.delegate.setStyle(t,o,b,n)}removeStyle(t,o,b){this.delegate.removeStyle(t,o,b)}setProperty(t,o,b){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(t,o,b)),this.delegate.setProperty(t,o,b)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,b,n){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(t,o,b,n)),this.delegate.listen(t,o,b,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(ol)}},tl=new D("");function Wr(e="animations"){return wb("NgAsyncAnimations"),it([{provide:st,useFactory:(t,o,b)=>new el(t,o,b,e),deps:[k,Ie,yo]},{provide:Bn,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var qr={providers:[ai({eventCoalescing:!0}),cn(Gr),Wr()]};var Zr=Db("slideLeftInLeftOut",[Eb("* => *",[oe(":enter, :leave",[Xo({position:"absolute"})],{optional:!0}),oe(":enter",[Xo({translate:"-100%"})],{optional:!0}),Mb([oe(":leave",[ht("0.5s ease",Xo({translate:"-100%"}))],{optional:!0}),oe(":enter",[ht("0.5s ease",Xo({translate:"0%"}))],{optional:!0})])])]);var sb=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-navbar"]],decls:16,vars:0,consts:[[1,"title"],["href","/"],["x","0","y","8","width","40","height","12.5","fill","#88c1b0"],["x","0","y","20.5","width","40","height","12.5","fill","#eda93c"],["x","0","y","33","width","40","height","12.5","fill","#9a2d28"],["x","37","y","45","font-size","50px","fill","#f8f6e7"],[1,"links"],["routerLink","/home","routerLinkActive","active"],["routerLink","/projects","routerLinkActive","active"],["routerLink","/about","routerLinkActive","active"]],template:function(o,b){o&1&&(d(0,"nav")(1,"div",0)(2,"a",1),Pn(),d(3,"svg"),T(4,"rect",2)(5,"rect",3)(6,"rect",4),d(7,"text",5),C(8," Daniele Candido "),f()()()(),kn(),d(9,"div",6)(10,"a",7),C(11,"Home"),f(),d(12,"a",8),C(13,"Projects"),f(),d(14,"a",9),C(15,"About"),f()()())},dependencies:[Io,ln],styles:["nav[_ngcontent-%COMP%]{position:sticky;top:0;display:flex;justify-content:space-between;background-color:#101010;font-size:24px}nav[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:50px;width:500px}nav[_ngcontent-%COMP%]   div.links[_ngcontent-%COMP%]{display:flex;flex-direction:row}nav[_ngcontent-%COMP%]   div.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:14px 16px;text-align:center;text-decoration:none;color:#f8f6e7}nav[_ngcontent-%COMP%]   div.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#eda93c}nav[_ngcontent-%COMP%]   div.links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#88c1b0}"]})};function bl(e,t){if(e&1&&T(0,"ngx-game-of-life-bg",0),e&2){let o=Oo();R("preset",o.pattern)}}var ab=class e{route=h(no);location=h(Do);pattern=$o[Math.floor(Math.random()*$o.length)];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=O({type:e,selectors:[["app-root"]],decls:4,vars:2,consts:[["cellColor","#f8f6e7","backgroundColor","#000000",3,"preset"],[2,"display","contents"]],template:function(o,b){o&1&&(T(0,"app-navbar"),qo(1,bl,1,1,"ngx-game-of-life-bg",0),d(2,"div",1),T(3,"router-outlet"),f()),o&2&&(w(),Zo(b.location.path()!=="/ng-game-of-life"?1:-1),w(),R("@slideLeftInLeftOut",b.route.snapshot.data))},dependencies:[qe,sb,ib],encapsulation:2,data:{animation:[Zr]}})};Vb(ab,qr).catch(e=>console.error(e));

/* Copyright 2015-2026 Quantum Metric, Inc. All rights reserved. For US patents see https://www.quantummetric.com/legal/patents/. For EULA see https://www.quantummetric.com/legal/eula. 1.35.36 86b1a1a103c133c73bb4660c32468c7a089e54a8 */
(function() {
var setInterval = window['__zone_symbol__setInterval'] || window.setInterval;
var clearInterval = window['__zone_symbol__clearInterval'] || window.clearInterval;
var setTimeout = window['__zone_symbol__setTimeout'] || window.setTimeout;
var console = window['console'];
var clearTimeout = window['__zone_symbol__clearTimeout'] || window.clearTimeout;
var MutationObserver = window['__zone_symbol__MutationObserver'] || window.MutationObserver;
var queueMicrotask = window['__zone_symbol__queueMicrotask'] || window.queueMicrotask;
var Promise = window['__zone_symbol__Promise'] || window.Promise; var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this);
function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};g[0]===""&&(c.lastIndex+=1);return{value:g,done:!1}}};f[Symbol.iterator]=function(){return f};return f}});
da("Object.fromEntries",function(a){return a?a:function(b){var c={};if(!(Symbol.iterator in b))throw new TypeError(""+b+" is not iterable");b=b[Symbol.iterator].call(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;if(Object(d)!==d)throw new TypeError("iterable for fromEntries should yield objects");c[d[0]]=d[1]}return c}});function ea(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length-1;d>=0;d--){var e=a[d];if(b.call(c,e,d,a))return{Ge:d,Nh:e}}return{Ge:-1,Nh:void 0}}
da("Array.prototype.findLastIndex",function(a){return a?a:function(b,c){return ea(this,b,c).Ge}});function fa(a){return a?a:function(b,c){return ea(this,b,c).Ge}}da("Int8Array.prototype.findLastIndex",fa);da("Uint8Array.prototype.findLastIndex",fa);da("Uint8ClampedArray.prototype.findLastIndex",fa);da("Int16Array.prototype.findLastIndex",fa);da("Uint16Array.prototype.findLastIndex",fa);da("Int32Array.prototype.findLastIndex",fa);da("Uint32Array.prototype.findLastIndex",fa);
da("Float32Array.prototype.findLastIndex",fa);da("Float64Array.prototype.findLastIndex",fa);function ha(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b}var ia=ha([83,72,65,45,50,53,54]),ja=ha([65,69,83,45,67,66,67]),ka=ha([82,83,65,45,79,65,69,80]),la=ha([82,83,65,45,79,65,69,80,45,50,53,54]),ma=ha([65,50,53,54,67,66,67]);
const na={utm_source:-56,utm_medium:-57,utm_campaign:-58,utm_term:-59,utm_content:-60,utm_id:-61},oa=/cvv|cvc|month|year|birth|cid|csc|cvn|sensitive|security|ccnumber|card.*identification|verification|^aba$|^tin$|routing|ssn|itin|account.*number|acct.*num|card.*num|card.*#|card.*no|cc.*num|nummer|n.m.ro|credito|\u4fe1\u7528\u5361|\uce74\ub4dc|\u30ab\u30fc\u30c9\u756a|\u041d\u043e\u043c\u0435\u0440.*\u043a\u0430\u0440\u0442\u044b/i,pa=[{re:{p:"/b/ss/([^/]+)/(\\d+)/([^/]+)/.+",f:""},rep:"/b/ss/$1/$2/$3/{id}"},
{re:{p:"/akam/.+",f:""},rep:"/akam/{pixel}"},{re:{p:"(http[s]?://)[^\\.]+\\.safeframe\\.googlesyndication\\.com",f:""},rep:"$1REPLACED.safeframe.googlesyndication.com"}],qa=/zoom|toggle|prev|next|forward|backward|qty|down|up|right|left|arrow|plus|minus|increase|decrease|carousel|quantity|chevron/i,ra=()=>{},sa=new Set("button fieldset optgroup option select textarea input".split(" ")),ta=new Set("onabort onautocomplete onautocompleteerror onblur oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncuechange ondblclick ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus oninput oninvalid onkeydown onkeypress onkeyup onload onloadeddata onloadedmetadata onloadstart onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onpause onplay onplaying onprogress onratechange onreset onresize onscroll onseeked onseeking onselect onshow onsort onstalled onsubmit onsuspend ontimeupdate ontoggle onvolumechange onwaiting onwheel".split(" ")),
y=Object.freeze({NONE:0,fe:1,ge:2,de:4,ERROR:8,he:16,Wh:32,$c:64});function ua(a,b,c,d){b&&c&&b!=c&&(d[b.toUpperCase()]&&d[c.toUpperCase()]?(a=d[c.toUpperCase()]/d[b.toUpperCase()]*a,a=D(a*100)/100):a="QM%20Conversion:%20"+b+"%20to%20"+c);return a}
function va(a){var b=RegExp("\\D","g"),c=RegExp("(?:([,.]?(?:[0-9]+[,.]?)+[0-9]*))([^_\\-0-9]|$)").exec(a);if(c&&!(c.length<2)&&(a=c[1],a.length>0&&a[a.length-1]=="."&&(a=a.substring(0,a.length-1)),c=!1,a.lastIndexOf(",")!=a.length-3&&a.lastIndexOf(".")!=a.length-3||a.length==2||(c=!0),a=a.replace(b,"")))return b=parseFloat(a),Math.floor(c?b:b*100)}function wa(a,b){return a?Object.getOwnPropertyDescriptor(a,b)||wa(Object.getPrototypeOf(a),b):null}
async function xa(a){let b="";const c=window.TextDecoder&&new window.TextDecoder;try{const d=a.getReader();for(;;){const {value:e,done:f}=await d.read();if(f)break;a="";if(c)a=c.decode(e);else for(let g=0;g<e.length;g++)a+=String.fromCharCode(parseInt(e[g],10));b+=a}}catch(d){}return b}function E(a,b,c){return typeof b==="string"?b in a?a[b]:c:Array.isArray(b)&&typeof a!=="undefined"?b.length===0?a:a?E(a[b[0]],b.slice(1),c):c:c}
function ya(a,b,c){try{if(typeof b=="string")return a[b]=c,!0;if(!Array.isArray(b))return console.warn("QM: cannot call `set` when path is not an array"),!1;let d=-1,{length:e}=b,f=e-1;for(;a!=null&&++d<e;){const g=b[d];let h=c;if(d!=f){const k=a[g];h=typeof k=="object"?k:isFinite(b[d+1])?[]:{}}a[g]=h;a=a[g]}return!0}catch(d){return!1}}
function za(a,b){try{if(typeof b=="string")return delete a[b],!0;if(!Array.isArray(b))return console.warn("QM: cannot call `unset` when path is not an array"),!1;const c=b.pop(),d=E(a,b,null);if(!d)return!1;delete d[c];return!0}catch(c){return!1}}const Aa=()=>{let a=1;return()=>a++},Ca=(a,b=a.length)=>{const c=Array(b);for(let d=0;d<a.length&&d<b;++d)c[d]=a[d];return c};function D(a,b=0){return Number(`${Math.round(Number(`${a}e${b}`))}e-${b}`)}
const Da=a=>a.reduce((b,c)=>{if(typeof c==="string")return b.global.add(c),b;b.selected.push(c);return b},{global:new window.Set,selected:[]}),Ea=()=>{let a=(new Date).getTime();const b=window.performance;let c=b&&b.now&&b.now()*1E3||0;return"xxxxxxxxxxxx4xxxxxxxxxxxxxxxxxxx".replace(/x/g,function(d){var e=Math.random()*16;a>0?(e=(a+e)%16|0,a=Math.floor(a/16)):(e=(c+e)%16|0,c=Math.floor(c/16));return(d==="x"?e:e&3|8).toString(16)})},Fa=a=>{let b="",c=!0;for(const d in a)a.hasOwnProperty(d)&&(c?c=
!1:b+="&",b+=encodeURIComponent(d)+"="+encodeURIComponent(a[d]));return b},Ga=a=>Object.entries(a).reduce((b,c)=>{const d=c[0];c=c[1];d.startsWith("event:")?b.E.push(c):b[d]=c;return b},{E:[]}),Ha=a=>typeof a==="string"&&a!=="s"&&a!=="exp",La=a=>{if(!a||typeof a!=="object")return!1;for(const b in a)if(Ha(b))return!0},Ma=(a,b)=>{if(!a||typeof a!=="string")return a;b.forEach(c=>{Array.from(a.matchAll(c)).reverse().forEach(d=>{d.indices.forEach((e,f,g)=>{e&&!f^g.length>1&&(a=a.slice(0,e[0])+"*****"+
a.slice(e[1]))})})});return a},Na=a=>a===null||a===void 0?"":a=a.toString().replace(/"|\r?\n|\r|\t|\\/g,"").replace(/[\u0000-\u001F]+/g,"").replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").trim(),Oa=a=>a.split(/;\s*/).reduce((b,c)=>{const d=c.indexOf("="),e=c.slice(0,d).trim();c=c.slice(d+1).trim();e&&(b[e]=c);return b},{}),Pa=a=>{let b=0;for(;a.parentNode;)++b,a=a.parentNode,a.nodeType===11&&(a=a.host);return b},Qa=a=>{let b=5381;for(const c of a)b=(b<<5)+b+c.codePointAt(0);return b>>>0};function Ra(a){if(typeof a==="string"&&a.length>0){try{return new URL(a)}catch(b){}try{return new URL(a,window.location.origin)}catch(b){}}throw Error(`Invalid URL: ${a}`);}
function Sa(a,b,c){if(c.protocol.startsWith("data:"))return c.toString();if(c.search!==""){for(var d="_";c.searchParams.has(d);)d+="_";c.searchParams.set(d,"");c.searchParams.delete(d)}if(a.size&&c.search!==""){d=c.searchParams;let e=new URLSearchParams;for(let [f,g]of d.entries())a.has(f.toLowerCase())&&(g="*****"),e.append(f,g);c.search=e.toString()}a=c.toString();for(c=0;c<b.length;++c)try{const e=b[c];a=a.replace(e[0],e[1])}catch(e){}return a};function Ta(a){try{return typeof window.QuantumMetricOnNewPageTitle=="function"?window.QuantumMetricOnNewPageTitle(a):a}catch(b){}}
class Ua{constructor(a,b){const c=Ra(window.location.href);this.timestamp=a.g.W.Z();this.navigationType=b;this.Ga=c;this.M=Sa(a.D.R.Sb,a.D.R.Wb,c);a:{a=this.M;try{var d=typeof window.QuantumMetricOnNewPageUrl=="function"?window.QuantumMetricOnNewPageUrl(a):a;break a}catch(e){}d=void 0}this.mb=d;this.K=document.title;this.B=""}Ed(){this.K!==document.title?(this.K=document.title,this.B=Ta(this.K)):this.B||(this.B=Ta(this.K));return this.B}};const Va=(a,b)=>{try{return new RegExp(a,b)}catch(c){}},H=a=>a.reduce((b,c)=>{const d=b.find(e=>e.f===c.f);if(!d)return b.push({...c}),b;d.p=d.p+"|"+c.p;return b},[]).flatMap(b=>Va(b.p,b.f)||[]),K=(a,b)=>{for(let c=0;c<b.length;c++)if(b[c].test(a))return!0;return!1};function Wa(a,b=-1){a.M=b>=0?b:a.ba.now();return a.M}
class Xa{constructor(a,b,c=null){this.J=a;this.ba=a.ra;this.origin=c;this.K=b;this.Mb=!1;this.B={};this.da=this.duration=this.M=0;this.L=this.J.g.W.Z();this.pa=[1,16,4,2,8,64];this.B.t="s";this.B["@"]=["w"];this.J.Ih=window.screen?window.screen.width:void 0;this.J.Hh=window.screen?window.screen.height:void 0;this.B.x=this.J.Ih;this.B.y=this.J.Hh;this.J.Xb=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;this.J.Fb=window.innerHeight||document.documentElement.clientHeight||
document.body.clientHeight;this.B.w=this.J.Xb;this.B.h=this.J.Fb}gd(){return this.pa.includes(this.K.navigationType)}vf(a){this.duration=a}rd(){}Ee(a){a&&(this.Mb=!0);this.B.re=this.J.Ka;this.B[")"]=this.J.Jc>=5242880?"max-page-size-exceeded":this.J.bc;this.B.s=this.J.Jc;a=this.K.Ed();K(this.K.mb,this.J.D.R.kf)?this.B.pt=this.K.mb:this.B.pt=a;this.B.url=this.K.mb;this.B.ourl=this.K.M;this.J.customElements.size&&(this.B.cea=Array.from(this.J.customElements));if(a=window.navigator.connection||window.navigator.mozConnection||
window.navigator.webkitConnection)a.effectiveType&&(this.B.ce=a.effectiveType),a.downlink&&(this.B.cd=D(a.downlink)),a.rtt&&(this.B.cr=a.rtt);this.uf();this.B.z=this.J.Kd;this.J.frameId&&(this.B.QF=this.J.frameId);window.screen.orientation?({orientation:a}=window.screen,a=a.angle):a=window.orientation;this.B.o=a;this.gd()&&!this.Mb?(this.B.spa_d=this.duration?parseInt(this.duration,10):null,a=this.ba.timeOrigin&&this.ba.getEntriesByType("navigation")[0]?this.J.g.W.tb+this.M:this.L,this.B.pto=D(a),
this.origin&&(this.B.r=this.origin.mb)):(Ya(this.J,this.B),this.B.n={type:Za(this.J,"type"),redirectCount:Za(this.J,"redirectCount")},document.referrer&&(a=Sa(this.J.D.R.Sb,this.J.D.R.Wb,Ra(document.referrer)),this.B.r=a,this.J.fa.set("lastUrl",Ra(a).toString())));this.J.Ec&&(this.B.ctx=this.J.Ec);this.B.f=document.hasFocus();return this.B}qd(a){this.B.c=a}uf(){this.B.els=this.da}};function $a(a){return a.B[a.Pa]}function bb(a){if(a.Pa>0){if($a(a))return!0;a.Pa=0}return!1}function cb(a){if(bb(a))return Wa($a(a));a.M=a.J.ra.now();return a.M}function db(a){return eb(a,a.Va,a.K)}function eb(a,b,c){a.Pa=a.J.g.W.Z();b=new Xa(a.J,b,c);b.rd(a.ba);a.ba="";a.B[a.Pa]=b;a.M>=0&&(Wa(b,a.M),a.M=-1);return a.Pa}function fb(a){a.Va=new Ua(a.J,32);const b=eb(a,a.Va,a.K);a.get(b).Mb=!0;return b}
function gb(a,b){delete a.B[b];if(a.Pa===b){b=Object.keys(a.B);let c=Number.parseInt(b[0],void 0);if(b.length>1)for(let d=1;d<b.length;d++){let e=Number.parseInt(b[d],void 0);e>c&&(c=e)}a.Pa=c||0}}function hb(a){return a.K?a.K.Ga:null}function ib(a,b){a.K=a.Va;a.Va=b;return db(a)}
function jb(a,b){const c=a.Va,d=b.Ga.pathname===c.Ga.pathname&&b.Ga.search===c.Ga.search&&b.Ga.hash!==c.Ga.hash;if(b.navigationType===4&&d||K(b.Ga.href,a.J.D.R.Mh)||b.navigationType===16&&!a.J.D.config.monitorAllHashChanges)return!1;a=c.Ga.origin===b.Ga.origin&&c.Ga.pathname===b.Ga.pathname&&c.Ga.search===b.Ga.search&&c.Ga.hash===b.Ga.hash;return b.navigationType===1||!a&&c.mb!==b.mb?!0:!1}
class kb{constructor(a){this.J=a;this.Va=new Ua(a,32);this.K=null;this.B={};this.Pa=0;this.ba="";this.M=-1;this.da=!1}gd(a){return bb(this)?(a=this.get(a))?a.gd():!1:!1}Mb(a){return this.get(a)?this.get(a).Mb:!1}get(a){return this.B[a]}rd(a){bb(this)?$a(this).rd(a):this.ba=a}vf(a){bb(this)&&$a(this).vf(a)}uf(a){bb(this)&&($a(this).da=a)}qd(a,b){this.get(a).qd(b)}Ee(a){var b=this.B[a];gb(this,a);a=b.Ee(!this.da);this.da=!0;b=this.J.g.W.Z()-1E4;for(let d of Object.keys(this.B))if(d<=b){delete this.B[d];
var c=Number.parseInt(d,void 0);this.Pa===c&&(this.Pa=0)}return a}Ed(){return this.Va.Ed()}};const ob=Aa();function pb(a,b){return function(){b.na.get(this)||qb(b,this);return a.apply(this,arguments)}}function qb(a,b){const c=b.effect.getKeyframes(),d=b.effect.getTiming(),e=ob(),f=a.J.aa(b.effect.target).ea;a.na.set(b,e);b.effect&&a.na.set(b.effect,e);a.log({t:"wa",v:"c",I:f,i:e,a:[c,d]});rb(a,b,e)}
function sb(a){const b=Object.getOwnPropertyDescriptor(Element.prototype,"animate"),c=Object.getOwnPropertyDescriptor(Animation.prototype,"play"),d=Object.getOwnPropertyDescriptor(Animation.prototype,"pause"),e=Object.getOwnPropertyDescriptor(Animation.prototype,"reverse"),f=Object.getOwnPropertyDescriptor(Animation.prototype,"cancel"),g=Object.getOwnPropertyDescriptor(Animation.prototype,"finish"),h=Object.getOwnPropertyDescriptor(Animation.prototype,"updatePlaybackRate"),k=Object.getOwnPropertyDescriptor(Animation.prototype,
"currentTime"),l=Object.getOwnPropertyDescriptor(Animation.prototype,"effect"),m=Object.getOwnPropertyDescriptor(Animation.prototype,"startTime"),n=Object.getOwnPropertyDescriptor(Animation.prototype,"playbackRate"),q=Object.getOwnPropertyDescriptor(window,"Animation"),t=Object.getOwnPropertyDescriptor(KeyframeEffect.prototype,"setKeyframes"),C=Object.getOwnPropertyDescriptor(KeyframeEffect.prototype,"target"),B=Object.getOwnPropertyDescriptor(KeyframeEffect.prototype,"composite"),w=Object.getOwnPropertyDescriptor(KeyframeEffect.prototype,
"pseudoElement"),z=Object.getOwnPropertyDescriptor(window.AnimationEffect.prototype,"updateTiming");if(b&&b.configurable){const u=b.value;Object.defineProperty(Element.prototype,"animate",{...b,value:function(){const r=u.apply(this,arguments);try{const p=ob(),A=a.J.aa(this).ea;a.na.set(r,p);a.na.set(r.effect,p);a.log({t:"wa",v:"c",I:A,i:p,a:Array.prototype.slice.apply(arguments)})}catch(p){}return r}})}if(c&&c.configurable){const u=c.value;Object.defineProperty(Animation.prototype,"play",{...c,value:pb(function(){const r=
u.apply(this,arguments);try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"p",i:p})}catch(p){}return r},a)})}if(d&&d.configurable){const u=d.value;Object.defineProperty(Animation.prototype,"pause",{...d,value:pb(function(){const r=u.apply(this,arguments);try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"s",i:p})}catch(p){}return r},a)})}if(e&&e.configurable){const u=e.value;Object.defineProperty(Animation.prototype,"reverse",{...e,value:pb(function(){const r=u.apply(this,arguments);
try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"r",i:p})}catch(p){}return r},a)})}if(f&&f.configurable){const u=f.value;Object.defineProperty(Animation.prototype,"cancel",{...f,value:pb(function(){const r=u.apply(this,arguments);try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"x",i:p})}catch(p){}return r},a)})}if(g&&g.configurable){const u=g.value;Object.defineProperty(Animation.prototype,"finish",{...g,value:pb(function(){const r=u.apply(this,arguments);try{const p=a.na.get(this);
if(!p)return r;a.log({t:"wa",v:"f",i:p})}catch(p){}return r},a)})}if(h&&h.writable){const u=h.value;Object.defineProperty(Animation.prototype,"updatePlaybackRate",{...h,value:pb(function(r){const p=this.currentTime,A=u.apply(this,arguments);try{const x=a.na.get(this);if(!x)return A;const G=this.currentTime;a.log({t:"wa",v:"a",i:x,p:"playbackRate",n:r});p!==G&&a.log({t:"wa",v:"a",i:x,p:"currentTime",n:G});this.playState!=="running"&&a.log({t:"wa",v:"s",i:x});this.playState==="running"&&a.log({t:"wa",
v:"p",i:x})}catch(x){}return A},a)})}if(k&&k.configurable){const u=k.set;Object.defineProperty(Animation.prototype,"currentTime",{...k,set:pb(function(r){const p=u.call(this,r);try{const A=a.na.get(this);if(!A)return p;a.log({t:"wa",v:"a",i:A,p:"currentTime",n:r})}catch(A){}return p},a)})}if(l&&l.configurable){const u=l.set;Object.defineProperty(Animation.prototype,"effect",{...l,set:pb(function(r){const p=this.effect,A=u.call(this,r);try{const x=a.na.get(this);if(!x)return A;a.na.set(r,x);a.na.delete(p);
const G=a.J.aa(r.target).ea,L=[r.getKeyframes(),r.getTiming()];a.log({t:"wa",v:"e",i:x,I:G,a:L});this.effect.pseudoElement&&a.log({t:"wa",v:":",i:x,n:this.effect.pseudoElement})}catch(x){}return A},a)})}if(m&&m.configurable){const u=m.set;Object.defineProperty(Animation.prototype,"startTime",{...m,set:pb(function(r){r=u.call(this,r);try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"a",i:p,p:"currentTime",n:this.currentTime})}catch(p){}return r},a)})}if(n&&n.configurable){const u=n.set;Object.defineProperty(Animation.prototype,
"playbackRate",{...n,set:pb(function(r){const p=u.call(this,r);try{const A=a.na.get(this);if(!A)return p;a.log({t:"wa",v:"a",i:A,p:"playbackRate",n:r})}catch(A){}return p},a)})}if(q&&q.configurable){const u=window.Animation;Object.defineProperty(window,"Animation",{...q,value:function(...r){r=new u(...r);try{const p=ob(),A=r.effect?a.J.aa(r.effect.target).ea:"",x=r.effect?[r.effect.getKeyframes(),r.effect.getTiming()]:[];a.na.set(r,p);r.effect&&a.na.set(r.effect,p);a.log({t:"wa",v:"c",I:A,i:p,a:x,
p:"c"});r.effect&&r.effect.pseudoElement&&a.log({t:"wa",v:":",i:p,n:r.effect.pseudoElement})}catch(p){}return r}})}if(t&&t.configurable){const u=t.value;Object.defineProperty(KeyframeEffect.prototype,"setKeyframes",{...t,value:function(){const r=u.apply(this,arguments);try{const p=a.na.get(this);if(!p)return r;a.log({t:"wa",v:"k",i:p,a:Array.prototype.slice.apply(arguments)})}catch(p){}return r}})}if(C&&C.configurable){const u=C.set;Object.defineProperty(KeyframeEffect.prototype,"target",{...C,set:function(r){const p=
u.call(this,r);try{const A=a.na.get(this);if(!A)return p;const x=a.J.aa(r).ea;a.log({t:"wa",v:"@",i:A,I:x})}catch(A){}return p}})}if(B&&B.configurable){const u=B.set;Object.defineProperty(KeyframeEffect.prototype,"composite",{...B,set:function(r){const p=u.call(this,r);try{const A=a.na.get(this);if(!A)return p;a.log({t:"wa",v:"=",i:A,n:r})}catch(A){}return p}})}if(w&&w.configurable){const u=w.set;Object.defineProperty(KeyframeEffect.prototype,"pseudoElement",{...w,set:function(r){const p=u.call(this,
r);try{const A=a.na.get(this);if(!A)return p;a.log({t:"wa",v:":",i:A,n:r})}catch(A){}return p}})}if(z&&z.configurable){const u=z.value;Object.defineProperty(window.AnimationEffect.prototype,"updateTiming",{...z,value:function(){const r=u.apply(this,arguments);try{const p=a.na.get(this);a.log({t:"wa",v:"u",i:p,a:Array.prototype.slice.apply(arguments)})}catch(p){}return r}})}}
function rb(a,b,c){const d=b.playbackRate,e=b.playState;a.log({t:"wa",v:"a",i:c,p:"currentTime",n:b.currentTime});d!==1&&a.log({t:"wa",v:"a",i:c,p:"playbackRate",n:d});e==="paused"&&a.log({t:"wa",v:"s",i:c})}class tb{constructor(a){this.J=a;this.na=new this.J.g.G.ma.contentWindow.WeakMap}log(a){N(this.J,a)}};function ub(a,b){return typeof a.reportURL==="string"&&a.reportURL.length>0?a.reportURL:a.ingestBaseURL+"/horizon/"+b}function vb(a){return typeof a.hashResourceURL==="string"&&a.hashResourceURL.length>0?a.hashResourceURL:a.ingestBaseURL+"/resource-loader"};class wb{constructor(){this.reject=this.resolve=null;this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}};const xb=/content:\s+"?(.+?)"?;/,yb=/[^\u0000-\u00ff]/,Ab=(a,b,c=0)=>{if(c>10)return[];let d=[];try{if(!b.cache.has(a)||b.cache.get(a).length!==a.cssRules.length){const e=a.cssRules;for(let f=0;f<e.length;++f){const g=e[f],h=b.th(g).replace(xb,zb);if(g instanceof window.CSSImportRule){let k=[];try{g.styleSheet&&g.styleSheet.cssRules&&(k=Ab(g.styleSheet,b,c+1))}catch(l){k=[h]}d=d.concat(k)}else d.push(h)}b.cache.set(a,d)}}catch(e){b.cache.set(a,[])}return b.cache.get(a)},zb=(a,b)=>yb.test(b)?`content: "\\${b.charCodeAt(0).toString(16)}";`:
a;const Bb=a=>a.cssText,Cb=a=>{var b=a.cssText;if(a instanceof window.CSSStyleRule&&(b.includes("grid-template:")&&a.style.gridTemplateAreas||a.style.all)){b=a.selectorText;a=a.style;var c="";for(let d=0;d<a.length;++d){const e=a[d],f=a.getPropertyValue(e),g=a.getPropertyPriority(e);c+=`${e}:${f}${g?" !important":""};`}return`${b} { ${c} }`}if(a instanceof window.CSSMediaRule&&b.includes("grid-template:")){b="";for(c=0;c<a.cssRules.length;c++)b+=Cb(a.cssRules[c]);return`@media ${a.conditionText} { ${b} }`}if(a instanceof
window.CSSSupportsRule&&b.includes("grid-template:")){b="";for(c=0;c<a.cssRules.length;c++)b+=Cb(a.cssRules[c]);return`@supports ${a.conditionText} { ${b} }`}if(window.CSSLayerBlockRule&&a instanceof window.CSSLayerBlockRule&&b.includes("grid-template:")){b="";for(c=0;c<a.cssRules.length;c++)b+=Cb(a.cssRules[c]);return`@layer ${a.name} { ${b} }`}return b},Db=a=>Cb(a),Eb=a=>Cb(a),Fb=a=>Cb(a).replace(/(?<=\[[^=\]"]*)(?<!\\)(:)/g,"\\:");function Gb(a,b){const c=a.$.D.config;return typeof c.hashResourceURL==="string"&&c.hashResourceURL.length>0?`${c.hashResourceURL}/${b}`:`${vb(c)}/${b}/${a.$.sub}`}function Hb(a,b,c){c=c.map(d=>({hash:d,data:b[d],contentType:"text/css"}));a.$.g.G.ma.contentWindow.fetch(Gb(a,"hashes"),{method:"POST",headers:{"Content-Type":"application/json"},body:a.$.g.G.stringify(c),credentials:"omit"})}
function Ib(a,b){const c=Object.keys(b);c.length!==0&&a.$.g.G.ma.contentWindow.fetch(Gb(a,"hash-check"),{method:"POST",headers:{"Content-Type":"application/json"},body:a.$.g.G.stringify(c),credentials:"omit"}).then(async function(d){try{if(d.status==200){var e=await d.json();e.length&&Hb(a,b,e)}}catch(f){}})}function Jb(a,b,c){a.K[b]=c;a.B||(a.B=setTimeout(async()=>{try{const d={...a.K};a.K=Object.create(null);Ib(a,d)}catch(d){}finally{a.B=null}},a.$.D.config.resourceUploadDelay))}
class Kb{constructor(a){this.K=Object.create(null);this.B=null;this.$=a}};const Lb=a=>new Promise(b=>{function c(l){e||(e=!0,clearTimeout(f),f=null,a.removeEventListener("load",h,!1),a.removeEventListener("error",k,!1),b(l))}function d(){if(a.sheet)return c("polling");g++;g<10?f=setTimeout(d,500):c(!1)}let e=!1,f,g=0;const h=()=>{c(a.sheet?"node.addEventListener":!1)},k=()=>c(!1);a.addEventListener("load",h,!1);a.addEventListener("error",k,!1);f=setTimeout(d,500)});const Mb=/\//g,Nb=Aa();function Ob(a){a.$.Ya.ob==="Safari"&&parseInt(a.$.Ya.version,10)<17?a.B=Fb:a.$.Ya.ob==="Safari"&&(a.B=Eb);a.$.Ya.ob==="Chrome"&&(a.B=Db)}async function Pb(a){return(await Qb(a)).replace(Mb,"~")}
async function Rb(a,b){const c=a.register(b);let d=c.ud;d||b.ownerNode||(d=c.ud=Nb());b.ownerNode&&a.register(b.ownerNode,c);var e=Ab(b,{th:a.B,cache:a.M});if(!e.length)return{v:"",i:d};e=e.join("");if(!vb(a.$.D.config)||a.$.D.R.lg&&b.ownerNode&&a.$.g.ga.matchesSelector(b.ownerNode,a.$.D.R.lg))return c.Jh=e,{v:e,i:d};c.hash=await Pb(e);(b.ownerNode?a.$.D.R.Sc||a.$.D.R.Dd&&a.$.g.ga.matchesSelector(b.ownerNode,a.$.D.R.Dd):a.$.D.R.Sc)&&Jb(a.ba,c.hash,e);return{h:c.hash,i:d}}
async function Sb(a,b){const c=a.$.g.G.ma.contentDocument,d=c.adoptNode(b.cloneNode(!0));d.setAttribute("crossorigin","anonymous");d.removeAttribute("onload");d.addEventListener("error",()=>Tb(a.$,"CORS_LINK",encodeURIComponent(b.href)));c.head.appendChild(d);if(!await Lb(d))return{v:""};const e=await Rb(a,d.sheet);c.head.removeChild(d);return e}
async function Ub(a,b){if(a.$.D.R.Gd&&a.$.g.ga.matchesSelector(b,a.$.D.R.Gd)||!await Lb(b))a={v:""};else{try{var c=!b.sheet.cssRules}catch(d){c=!0}a=c?Sb(a,b):Rb(a,b.sheet)}return a}function Vb(a,b){const c=a.register(b);c.Ad||(c.Ad=new wb,a.K.push(b));return c.Ad.promise}
function Wb(a){const b=a.K;a.K=[];const c=[];b.forEach(d=>{const e=a.na.get(d).Ad;c.push(e.promise);a.Ha(d).then(e.resolve).catch(f=>{N(a.$,{t:"dbg",msg:"CSS serialization failed, stylesheet skipped",err:f&&f.message||String(f)});e.resolve({v:""})})});return Promise.all(c)}
class Xb{constructor(a){this.$=a;this.na=new this.$.g.G.ma.contentWindow.WeakMap;this.K=[];this.M=new this.$.g.G.ma.contentWindow.WeakMap;this.B=Bb;this.ba=new Kb(a)}register(a,b={}){this.na.has(a)||this.na.set(a,b);return this.na.get(a)}unregister(a){this.M.delete(a);delete this.register(a).Ad;a.ownerNode&&this.unregister(a.ownerNode)}Ha(a){const b=a.ownerNode?a.ownerNode.ownerDocument:a.ownerDocument||document;return a instanceof b.defaultView.CSSStyleSheet?Rb(this,a):a instanceof b.defaultView.HTMLLinkElement?
Ub(this,a):Promise.resolve({v:""})}};function Yb(a,b){try{const c=a({test:[{age:100,old:!0,s:'[id="t"]'}]});return c!='{"test":[{"age":100,"old":true,"s":"[id=\\"t\\"]"}]}'?!1:b(c).test[0].age==100?!0:!1}catch(c){return!1}}
const Zb=(a,b)=>Array.isArray(b)||b===null||b===void 0||typeof b==="number"||typeof b==="string"||typeof b==="boolean"?b:Object.fromEntries(Object.keys(b).sort().map(c=>[c,Zb(c,b[c])])),$b=a=>{if(a===null||a===void 0)return!0;a=typeof a;return a==="boolean"||a==="number"||a==="string"},ac=a=>a.replace(/~1/g,"/").replace(/~0/g,"~"),O=Symbol(),bc=(a,b,c)=>{if(b.length===0&&c(a))return a;if(a===null||typeof a!=="object")return O;if(b.length===0)for(var d in a){var e=bc(a[d],b,c);if(e!==O)return e}const [f,
...g]=b;for(const k in a){if(k!==f){d=bc(a[k],b,c);if(d===O)continue;return d}a:{var h=a[k];d=g;e=c;if(d.length!==0||e(h))if(d.length===0)d=h;else{for(const l of d){if(typeof h!=="object"||h===null||!(l in h)){d=O;break a}h=h[l]}d=e(h)?h:O}else d=O}if(d===O){d=bc(a[k],b,c);if(d===O)continue;return d}return d}return O};function cc(a){var b={HTMLElement:null,Element:null,Node:null,Document:null,DocumentFragment:null,ShadowRoot:null,MutationObserver:null,JSON:null,XMLHttpRequest:null,EventTarget:null,Event:null,Window:null,Date:null};const c=a.ma.contentWindow;for(const v of Object.keys(b))b[v]=c[v];const d=(Object.getOwnPropertyDescriptor(b.Element.prototype,"innerHTML")||{}).get;a.innerHTML=v=>d.call(v);const e=(Object.getOwnPropertyDescriptor(b.HTMLElement.prototype,"innerText")||{}).get;a.innerText=v=>e.call(v);
const f=(Object.getOwnPropertyDescriptor(b.Element.prototype,"children")||Object.getOwnPropertyDescriptor(b.HTMLElement.prototype,"children")||{}).get;a.children=v=>v.children&&f.call(v)||void 0;const g=(Object.getOwnPropertyDescriptor(b.Element.prototype,"shadowRoot")||{}).get||function(){return null};a.shadowRoot=v=>g.call(v);const h=(Object.getOwnPropertyDescriptor(b.Document.prototype,"adoptedStyleSheets")||{}).get;if(h)if(b.ShadowRoot){const v=(Object.getOwnPropertyDescriptor(b.ShadowRoot.prototype,
"adoptedStyleSheets")||{}).get;a.ba=I=>{if(dc(a,I))return v.call(I);if(I instanceof Document)return h.call(I)}}else a.ba=v=>{if(v instanceof Document)return h.call(v)};const k=b.Element.prototype.matches;a.matches=(v,I)=>I&&I.length>0?k.call(v,I):!1;const l=b.Element.prototype.querySelector,m=b.Document.prototype.querySelector,n=b.DocumentFragment.prototype.querySelector;a.L=(v,I)=>I?v instanceof window.Document||v instanceof window.HTMLDocument?m.call(v,I):v instanceof window.DocumentFragment?n.call(v,
I):l.call(v,I):null;const q=b.Element.prototype.querySelectorAll,t=b.Document.prototype.querySelectorAll,C=b.DocumentFragment.prototype.querySelectorAll;a.lb=(v,I)=>I?v instanceof window.Document||v instanceof window.HTMLDocument?t.call(v,I):v instanceof window.DocumentFragment?C.call(v,I):q.call(v,I):t.call(document,null);const B=b.Document.prototype.createNodeIterator;a.ka=(v,I,Ba,Ia)=>{B.call(v,I,Ba,Ia)};const w=(Object.getOwnPropertyDescriptor(b.Node.prototype,"isConnected")||{}).get;w&&(a.isConnected=
v=>w.call(v));const z=(Object.getOwnPropertyDescriptor(b.Node.prototype,"parentNode")||{}).get;a.parentNode=v=>z.call(v);const u=(Object.getOwnPropertyDescriptor(b.Node.prototype,"parentElement")||Object.getOwnPropertyDescriptor(b.HTMLElement.prototype,"parentElement")||{}).get;a.parentElement=v=>u.call(v);const r=(Object.getOwnPropertyDescriptor(b.Node.prototype,"childNodes")||{}).get;a.childNodes=v=>r.call(v);Object.getOwnPropertyDescriptor(b.Node.prototype,"firstChild");Object.getOwnPropertyDescriptor(b.Node.prototype,
"lastChild");const p=(Object.getOwnPropertyDescriptor(b.Node.prototype,"textContent")||{}).get;a.textContent=v=>p.call(v);const A=b.Node.prototype.appendChild;a.appendChild=(v,I)=>A.call(v,I);const x=(Object.getOwnPropertyDescriptor(b.Node.prototype,"nextSibling")||{}).get;a.nextSibling=v=>x.call(v);Object.getOwnPropertyDescriptor(b.Node.prototype,"previousSibling");const G=(Object.getOwnPropertyDescriptor(b.Node.prototype,"nodeName")||{}).get;a.nodeName=v=>G.call(v);const L=b.Element.prototype.contains||
b.HTMLElement.prototype.contains;a.contains=(v,I)=>L.call(v,I);const F=b.Node.prototype.getRootNode;a.getRootNode=v=>F.call(v);a.MutationObserver=b.MutationObserver;if(b.EventTarget){const v=b.EventTarget.prototype.addEventListener;a.addEventListener=(I,Ba,Ia,lb,mb)=>{try{return v.call(I,Ba,Ia,lb,mb)}catch(rc){return I.addEventListener(Ba,Ia,lb,mb)}}}else{const v=b.Window.prototype.addEventListener,I=b.Node.prototype.addEventListener;a.addEventListener=(Ba,Ia,lb,mb,rc)=>Ba instanceof Window?v.call(Ba,
Ia,lb,mb,rc):I.call(Ba,Ia,lb,mb,rc)}const S=(Object.getOwnPropertyDescriptor(b.Event.prototype,"target")||{}).get;a.K=v=>S.call(v);const M=(Object.getOwnPropertyDescriptor(b.Event.prototype,"composed")||{}).get;a.ta=v=>M.call(v);const T=b.Event.prototype.composedPath;a.Ba=v=>T.call(v);const J=(Object.getOwnPropertyDescriptor(b.Element.prototype,"tagName")||{}).get;a.tagName=v=>v&&v.nodeType===1?(v=J.call(v),typeof v=="string"?v:""):"";const Ja=Object.getOwnPropertyDescriptor(c,"parent").get;Ja&&(a.M=
v=>Ja.call(v));const nb=c.Object.prototype.toString;a.pa=v=>nb.call(v);const ab=Object.getOwnPropertyDescriptor(c.Document.prototype,"cookie");a.qa.set=v=>ab.set.call(document,v);a.qa.get=()=>ab.get.call(document);ec(a);a.createElement=v=>c.document.createElement(v);const Ka=Object.getOwnPropertyDescriptor(b.Document.prototype,"readyState");Ka&&typeof Ka.get==="function"&&(a.readyState=v=>Ka.get.call(v));if(b=c.Date.now)a.Z=b}
function fc(a){a.Ra=new window.MutationObserver(function(b){if(!b.every(d=>d.removedNodes.length===0)&&(b=!1,a.isConnected(a.B)||(document.documentElement.appendChild(a.B),b=!0),a.isConnected(a.ma)||(a.B.appendChild(a.ma),b=!0),b)){cc(a);hc(a);a.Na.qb("clean-iframe-re-attached");var c=Array.from(a.da.values());b=a.Z();a.da.clear();for(const {uh:d,ms:e,Xa:f,oh:g}of c){c=Math.max(0,e-(b-g));try{a.setTimeout(d,c,...f)}catch(h){}}}});a.Ra.observe(document.documentElement,{childList:!0});a.Ra.observe(a.B,
{childList:!0,subtree:!0})}function ec(a){a.Storage.setItem=a.ma.contentWindow.Storage.prototype.setItem;a.Storage.getItem=a.ma.contentWindow.Storage.prototype.getItem;a.Storage.removeItem=a.ma.contentWindow.Storage.prototype.removeItem}function ic(a){const b=a.ma.contentWindow,c=a.stringify=b.JSON.stringify,d=a.Ma=b.JSON.parse,e=b.structuredClone||(f=>f);Yb(c,d)||(a.stringify=f=>c(e(f)))}
function hc(a){a.ma.contentWindow!==window&&(a.setTimeout=(b,c,...d)=>{const e=()=>{a.da.delete(f);b.apply(window,d)},f=a.ma.contentWindow.setTimeout(e,c);a.da.set(f,{di:e,uh:b,ms:c,Xa:d,oh:a.Z()});return f},a.clearTimeout=b=>{a.ma.contentWindow.clearTimeout(b);a.da.delete(b)})}function dc(a,b){return window.ShadowRoot?a.pa(b).indexOf("ShadowRoot")>-1:!1}
class jc{constructor(a){this.MutationObserver=this.Ma=this.stringify=this.ma=this.Ra=this.B=null;this.Storage={setItem:null,getItem:null,removeItem:null};this.qa={set:null,get:null};this.Na=a;this.da=new Map;this.setTimeout=setTimeout;this.clearTimeout=clearTimeout;this.B=document.createElement("b");this.B.style.position="absolute";this.B.style.left="-1000px";this.B.tabIndex=-1;this.B.ariaHidden="true";document.documentElement.appendChild(this.B);this.ma=document.createElement("iframe");this.ma.style.display=
"none";this.B.appendChild(this.ma);try{this.ma.contentWindow.scroll(0,0)}catch(b){Object.defineProperties(this.ma,{contentWindow:{value:window},contentDocument:{value:document}}),this.ma.setAttribute("data-qm-cross-origin","")}cc(this);fc(this);ec(this);ic(this);hc(this)}innerHTML(a){return a.innerHTML}innerText(a){return a.innerText}children(a){return a.children}shadowRoot(a){return a.shadowRoot}ba(a){return a.adoptedStyleSheets}L(a,b){return a.querySelector(b)}lb(a,b){return a.querySelectorAll(b)}ka(a,
b,c,d){a.createNodeIterator(b,c,d)}isConnected(a){var b=a.isConnected;b===void 0&&(b=document,b=b===null?!this.contains(document.documentElement,a):this.contains(b.documentElement||b,a));return b}parentNode(a){return a.parentNode}parentElement(a){return a.parentElement}childNodes(a){return a.childNodes}textContent(a){return a.textContent}appendChild(a,b){return a.appendChild(b)}matches(a,b){return b&&b.length>0&&a.matches?a.matches(b):!1}nextSibling(a){return a.nextSibling}contains(a,b){return a.contains(b)}getRootNode(a){return a.getRootNode()}addEventListener(a,
b,c,d,e){return a.addEventListener(b,c,d,e)}pa(a){return Object.prototype.toString.call(a)}K(a){return a.target}ta(a){return a.composed}Ba(a){return a.composedPath()}tagName(a){return a.tagName}nodeName(a){return a.nodeName}M(a){return a.parent}createElement(a){return window.document.createElement(a)}readyState(a){return a.readyState}Z(){return Date.now()}};const lc=a=>{const {operator:b}=a;if(b==="and")return kc(a.contents.map(lc));if(b==="or")return mc(a.contents.map(lc));if(b==="not")return nc(lc(a.contents));if(b==="contains")return oc(a);if(b==="equals")return pc(a);if(b==="starts_with")return qc(a);if(b==="ends_with")return sc(a);if(b==="regex")return tc(a);if(b==="default")return uc();throw Error(`Unrecognized operator "${b}"`);},kc=a=>b=>a.every(c=>c(b)),mc=a=>b=>a.some(c=>c(b)),nc=a=>b=>!a(b),oc=a=>b=>b[a.facet].includes(a.value),pc=a=>b=>b[a.facet]===
a.value,qc=a=>b=>b[a.facet].startsWith(a.value),sc=a=>b=>b[a.facet].endsWith(a.value),tc=a=>{const b=new RegExp(a.value);return c=>b.test(c[a.facet])},uc=()=>()=>!0;const vc=a=>a[a.length-1],wc=a=>"value"in a?{pred:lc(a.pred),value:a.value}:{pred:lc(a.pred),rules:a.rules.map(wc)},xc=(a,b)=>"value"in a?a.value:a.rules.reduce((c,d)=>d.pred(b)?c.concat(d.value):c,[]);function yc(a){var b={url:window.location.href};const c={};for(const d in a.B){const e=a.B[d].find(({pred:f})=>f(b))||vc(a.B[d]);c[d]=xc(e,b)}return c}function zc(a){a.config=a.L({...a.M,...yc(a),...a.da},a.sub);a.ba(a.config,a.R,a.fa)}
class Ac{constructor(a,b,c,d,e,f,g){this.K=a;this.M=b;this.da=c;this.R=d;this.L=e;this.ba=f;this.sub=g||"";this.fa=null;this.config={};b={};for(const h in a)a=h,b[a]=this.K[a].map(wc);this.B=b}};function Bc(a){a.B=Cc(a).then(b=>{b.mf?a.W.tb+=b.Uc:P(a.ca,"clock-sync-failed",{reason:b.error},"warn")}).catch(b=>{P(a.ca,"clock-sync-error",{error:b.message},"error")}).finally(()=>{})}
async function Cc(a){try{const b=ub(a.D.config,a.sub);if(!b)return Dc("no-report-url","No reportURL configured");let c;try{c=(new URL("/horizon/d",b)).href}catch(e){return Dc("invalid-report-url",`Cannot parse reportURL: ${b}`)}const d=await Ec(a,c);d.mf&&(a.Uc=d.Uc,a.roundTripTime=d.roundTripTime);return d}catch(b){return Dc("unexpected-error",b.message)}}function Dc(a,b){return{mf:!1,Uc:0,roundTripTime:0,error:`${a}: ${b}`}}
async function Ec(a,b){const c=new AbortController,d=setTimeout(()=>c.abort(),1E3);try{const e=a.W.Oa.ma,f=e.contentWindow.fetch,g=e.contentWindow.performance,h=g.now(),k=await f(b,{method:"HEAD",signal:c.signal,credentials:"omit",cache:"no-store"}),l=g.now();clearTimeout(d);if(!k.ok)return Dc("http-error",`HTTP ${k.status}`);const m=k.headers.get("Date");if(!m)return Dc("no-date-header","Missing Date header");const n=(new Date(m)).getTime();return isNaN(n)?Dc("invalid-date",`Invalid Date: ${m}`):
{mf:!0,Uc:n-(g.timeOrigin+(h+l)/2),roundTripTime:l-h}}catch(e){return clearTimeout(d),e.name==="AbortError"?Dc("timeout","Timeout after 1000ms"):e.name==="TypeError"&&e.message.includes("fetch")?Dc("network-error",e.message):e.message&&e.message.toLowerCase().includes("cors")?Dc("cors-error",e.message):Dc("fetch-error",e.message)}}class Fc{constructor(a,b,c,d){this.W=a;this.D=b;this.ca=c;this.sub=d;this.roundTripTime=this.Uc=0;this.B=Promise.resolve();Bc(this)}};function Gc(a){const b=window.performance,c=b&&typeof b.now==="function",d=b&&typeof b.timeOrigin==="number";a.tb=d?b.timeOrigin:0;a.Z=c&&d?()=>Math.floor(a.tb+b.now()):a.Oa.Z}function Hc(a,b,c,d){a.B=new Fc(a,b,c,d)}function Ic(a){return a.B?a.B.B:Promise.resolve()}class Jc{constructor(a){this.Oa=a;this.Z=Date.now;this.tb=0;this.B=null}};function Kc(a){a.interval&&(clearInterval(a.interval),a.interval=null);a.interval=setInterval(()=>{a.B.forEach((b,c)=>{Lc(a,c)})},1E3)}function Mc(a,b){b&&!a.B.has(b)&&(a.B.set(b,{nb:new window.Set,Za:null}),Kc(a))}
function Lc(a,b){Nc(a,b);try{const c=a.J.g.W.Z(),d=a.B.get(b);d.nb.forEach(e=>{const f=a.J.aa(e);let g;typeof f.Yd=="undefined"&&(f.Yd=c);const h=(c-f.Yd)/1E3;a.J.g.G.isConnected(e)&&a.J.g.ga.matchesSelector(e,a.J.D.R.lf)?!f.Xd&&h>=a.J.D.config.spinnerMaxSeconds&&(g=`${Oc(a.J,e,0,0)}: Load exceeded ${a.J.D.config.spinnerMaxSeconds} seconds`,f.Xd=!0,delete f.Yd,d.nb.delete(e)):(f.Xd||(h>=a.J.D.config.spinnerMaxSeconds?(g=`${Oc(a.J,e,0,0)}: Load exceeded ${a.J.D.config.spinnerMaxSeconds} seconds`,f.Xd=
!0):h>=a.J.D.config.spinnerMinimumThreshold&&(g=`${Oc(a.J,e,0,0)}: ${D(h,0)} spin seconds`,f.Xd=!0)),delete f.Yd,d.nb.delete(e));g&&Q(a.J,-22,g)});Kc(a)}catch(c){}Pc(a)}function Qc(a,b){const c=a.B.get(b);c&&(a.K(c),c.Za=setTimeout(()=>{Lc(a,b)},300))}function Rc(a){a.B.forEach(a.K);a.B.clear()}function Pc(a){const b=[];a.B.forEach((c,d)=>{a.J.g.G.isConnected(d)||b.push(d)});b.forEach(c=>{a.B.delete(c)})}
function Nc(a,b){const c=a.B.get(b);c&&a.J.g.ga.querySelectorAll(b,a.J.D.R.lf).forEach(d=>{c.nb.add(d)})}class Sc{constructor(a){this.J=a;this.B=new window.Map;this.interval=null}K(a){a.Za&&(clearTimeout(a.Za),a.Za=null)}};function Tc(a,b,c){let d;try{d=Ra(b)}catch(e){return}b=Sa(a.J.D.R.Sb,a.J.D.R.Wb,d).slice(-a.J.bi);R(a.J.O,{id:c,ja:2,flags:0,la:a.J.g.W.Z()},b)}function Uc(a,b){if(b.complete&&b.naturalHeight===0){const c=b.loading==="lazy",d=a.J.ra.getEntriesByName(b.src).length>0;c&&!d||Tc(a,b.src,-62)}else a.J.ra.getEntriesByName(b.src).forEach(c=>{c.duration>a.J.D.config.slowLoadingImageThreshold&&Tc(a,b.src,-63)})}
class Vc{constructor(a){this.J=a;this.lc=this.lc.bind(this);this.B=this.B.bind(this)}B(a){Tc(this,a.target.src||(a.target.srcset?a.target.srcset.split(", ")[0]:""),-62)}lc(a){Uc(this,a.target)}};const Wc=[/^(query|mutation)\s+?([\w\d]+)/,/^(query|mutation).*?{\s*?([\w\d]+)/,/^(?!query|mutation)\{([\w\d]+)[\s{(]+/];function Xc(a,b){return Object.keys(b).find(c=>a.has(c))}function Yc({Dh:a,Qd:b}){return[a,b].filter(c=>c).join("/")}function Zc(a){if(typeof a==="string")try{return JSON.parse(a)}catch(b){}else if(typeof a==="object")return a}
function $c(a,[b,c]){if(a=Zc(a))if(b=Xc(b,a))for(b=a[b],Array.isArray(b)||(b=[b]),a=0;a<b.length;a++){var d=Xc(c,b[a]);if(d&&(d=parseInt(b[a][d],10),!isNaN(d)))return d}}function ad(a,[b,c]){if(a=Zc(a)){if(b=Xc(b,a))for(let d=0;d<Wc.length;d++){const e=Wc[d].exec(a[b]);if(e&&!(e.length<=1)){if(e.length===2)return{Qd:e[1]};const [f,g]=e.slice(1);if(g&&f)return{Qd:g,Dh:f};return}}if(c=Xc(c,a))return{Qd:a[c]}}};const bd=[{path:/(graphql|gql)/i,parse:function(a,b,c){const d=new window.Set(["query"]),e=new window.Set(["operationName"]),f=new window.Set(["error","errors"]),g=new window.Set(["status","code","errorCode"]);a={};b&&(b=$c(b,[f,g]))&&(a.status=b);c&&(c=ad(c,[d,e])||{},c.Qd&&Object.assign(a,{...c,path:Yc(c)}));return a}}];function cd(a=""){return a.split("?")[0]}function dd(a,b=[]){a.B=[].concat(b,bd)}
function ed(a,b){const c=cd(b);let d=a.cache.get(c);d||(d=a.B.find(e=>b.match(e.path)))&&a.cache.set(c,d);return d}class fd{constructor(){this.B=[];this.cache=new window.Map}};let gd;const hd=String.fromCharCode(115,104,111,112,105,102,121),id=String.fromCharCode(113,109,45)+hd,jd=id+String.fromCharCode(45,99,104,101,99,107,111,117,116);window.addEventListener(id,()=>{window!==window.top&&(kd(),gd=document.body.appendChild(document.createElement(jd)))},{once:!0});
window.addEventListener(id,a=>{if(window!==window.top){var {name:b,context:c,data:d}=a.detail;switch(b){case "page_viewed":document.title=c.document.title;gd.setAttribute("title",c.document.title);history.pushState("","",c.window.location.pathname);gd.removeAttribute("input-id");break;case "input_focused":case "input_changed":gd.setAttribute("input-id",d.element.id)}}});
function kd(){const a=new Worker(URL.createObjectURL(new Blob(["onmessage=e=>setTimeout(p=>p.postMessage(null),e.data,e.ports[0])"])));setTimeout=(b,c,...d)=>{const e=new MessageChannel;e.port1.onmessage=()=>{b instanceof Function&&b(...d)};a.postMessage(0|c,[e.port2]);return 0}}
class ld{constructor(a){var b=window[String.fromCharCode(81,117,97,110,116,117,109,77,101,116,114,105,99,83,104,111,112,105,102,121,65,112,105)];this.B=a;if(this.oa=b){if(!/checkout/.test(this.oa.init.context.window.location.pathname))return this.B.stop();kd();this.B.start();setTimeout(()=>this.start(),50)}}start(){let a=document.createElement(jd);this.oa.analytics.subscribe("page_viewed",b=>{document.title=b.context.document.title;a.setAttribute("title",b.context.document.title);a.removeAttribute("input-id");
history.pushState("","",b.context.window.location.pathname)});this.oa.analytics.subscribe("input_focused",b=>{a.setAttribute("input-id",b.data.element.id)});this.oa.analytics.subscribe("input_changed",b=>{a.setAttribute("input-id",b.data.element.id)});this.oa.analytics.subscribe("all_events",b=>{N(this.B,{t:"shp",I:b.name});md(this.B.oa,hd,{name:b.name,data:b.data})});document.body.appendChild(a)}};const nd=a=>a.reduce((b,c)=>b+String.fromCharCode(c),"");const od={publishInterval:3500,sendInterval:1E3,sendRetries:10,reportURL:"",hashResourceURL:"",ingestBaseURL:nd([104,116,116,112,115,58,47,47,105,110,103,101,115,116,46,113,117,97,110,116,117,109,109,101,116,114,105,99,46,99,111,109]),hashUploadPercent:1,resourceUploadDelay:2E3,urlMonitorBlacklist:[],ingestURLProvider:null,sessionTimeoutMinutes:30,maxSessionDuration:0,cookieDomain:null,sessionCookieName:"QuantumMetricSessionID",sessionVar:null,userCookieName:"QuantumMetricUserID",sessionStoreNamespace:"QM_S",
userStoreNamespace:"QM_U",sessionPersistenceMediums:["cookie","localStorage"],userPersistenceMediums:["cookie","localStorage"],publicKeyString:null,dataScrubRE:[],dataScrubWhiteList:["[data-qm-allow]"],dataScrubBlackList:["*"],scrubDocumentTitlePatterns:[],dataEncryptWhiteList:["[data-qm-allow]"],encryptScrubList:["[data-qm-encrypt]"],maskSensitiveWindowDialogs:[],maskSensitiveJSErrors:[],encryptSensitiveWindowDialogs:[],excludeDOMList:[],apiDefinitions:[],xhrHookWhiteListDetails:[],xhrHookBlackListDetails:[],
xhrPerformanceWhitelistDetails:[],xhrPerformanceSlow:3E3,encryptXHR:!0,checkBlankPages:!0,pbpThreshold:3E3,xhrHookWhiteList:[],xhrHookBlackList:[],xhrErrorBlacklist:[{p:"appdynamics",f:"i"},{p:"aws-origin",f:"i"},{p:"bam",f:"i"},{p:"bam-cell",f:"i"},{p:"cdnbasket",f:"i"},{p:"cdnwidget",f:"i"},{p:"chtbl",f:"i"},{p:"clarity",f:"i"},{p:"clearbit",f:"i"},{p:"demdex",f:"i"},{p:"doubleclick",f:"i"},{p:"facebook",f:"i"},{p:"google",f:"i"},{p:"google-analytics",f:"i"},{p:"hotjar",f:"i"},{p:"instagram",f:"i"},
{p:"iperceptions",f:"i"},{p:"litix",f:"i"},{p:"omtrdc",f:"i"},{p:"pinterest",f:"i"},{p:"snowplowanalytics",f:"i"},{p:"tealium",f:"i"},{p:"tvpixel",f:"i"},{p:"yimg",f:"i"},{p:"linkedin",f:"i"}],dataScrubXHRRegExes:[{p:'"firstName":"?([^,"}]+)"?,?',f:"i"},{p:'"lastName":"?([^,"}]+)"?,?',f:"i"},{p:'"cvv_code":"?([^,"}]+)"?,?,?',f:"i"},{p:'"cvvCode":"?([^,"}]+)"?,?,?',f:"i"},{p:'"expiration_date":"?([^,"}]+)"?,?',f:"i"},{p:'"expirationDate":"?([^,"}]+)"?,?',f:"i"},{p:'"account_no":"?([^,"}]+)"?,?',f:"i"},
{p:'"routingNumber":"?([^,"}]+)"?,?',f:"i"},{p:'"date_of_birth":"?([^,"}]+)"?,?',f:"i"},{p:'"dateOfBirth":"?([^,"}]+)"?,?',f:"i"},{p:'"countryOfBirth":"?([^,"}]+)"?,?',f:"i"},{p:'"new_password":"?([^,"}]+)"?,?',f:"i"},{p:'"gender":"?([^,"}]+)"?,?',f:"i"},{p:'"accountNo":"?([^,"}]+)"?,?',f:"i"},{p:'"accountNumber":"?([^,"}]+)"?,?',f:"i"},{p:'"confirm_password":"?([^,"}]+)"?,?',f:"i"},{p:'"confirmPassword":"?([^,"}]+)"?,?',f:"i"},{p:'"addr_Line1":"?([^,"}]+)"?,?',f:"i"},{p:'"addr_Line2":"?([^,"}]+)"?,?',
f:"i"},{p:'"addrLine1":"?([^,"}]+)"?,?',f:"i"},{p:'"addrLine2":"?([^,"}]+)"?,?',f:"i"},{p:'"password":"?([^,"}]+)"?,?',f:"i"},{p:'"dob":"?([^,"}]+)"?,?',f:"i"},{p:'"newPassword":"?([^,"}]+)"?,?',f:"i"},{p:'"loginToken":"?([^,"}]+)"?,?',f:"i"},{p:'"card_number":"?([^,"}]+)"?,?,?',f:"i"},{p:'"address":"?([^,"}]+)"?,?',f:"i"},{p:'"name":"?([^,"}]+)"?,?',f:"i"},{p:'"nationality":"?([^,"}]+)"?,?',f:"i"},{p:'"routing_number":"?([^,"}]+)"?,?',f:"i"},{p:'"account_number":"?([^,"}]+)"?,?',f:"i"},{p:'"givenName":"?([^,"}]+)"?,?',
f:"i"},{p:'"familyName":"?([^,"}]+)"?,?',f:"i"}],isPivot:!1,visibleURL:nd([104,116,116,112,115,58,47,47,101,120,116,101,114,110,97,108,46,113,117,97,110,116,117,109,109,101,116,114,105,99,46,99,111,109,47,118,105,115,105,98,108,101,47,108,97,116,101,115,116,47,98,111,111,116,115,116,114,97,112,46,98,117,110,100,108,101,46,106,115]),visibleQueryParamName:"qm-visible",surveyPreview:{url:nd([104,116,116,112,115,58,47,47,101,120,116,101,114,110,97,108,46,113,117,97,110,116,117,109,109,101,116,114,105,
99,46,99,111,109,47,115,117,114,118,101,121,45,112,114,101,118,105,101,119,47,108,97,116,101,115,116,47,115,117,114,118,101,121,45,112,114,101,118,105,101,119,46,98,117,110,100,108,101,46,106,115]),queryParamName:"qm_action",queryParamValue:"survey_preview"},bookmarkToolbarURL:nd([104,116,116,112,115,58,47,47,101,120,116,101,114,110,97,108,46,113,117,97,110,116,117,109,109,101,116,114,105,99,46,99,111,109,47,105,110,116,101,114,97,99,116,105,111,110,115,45,114,101,99,111,114,100,101,114,47,108,97,
116,101,115,116,47,98,117,110,100,108,101,46,106,115]),bookmarkToolbarQueryParamName:"qm-bookmark-toolbar-id",bookmarkServiceURL:nd([104,116,116,112,115,58,47,47,114,108,46,113,117,97,110,116,117,109,109,101,116,114,105,99,46,99,111,109,47,117,47,114,101,112,108,97,121]),excludeRageRE:[{p:"\\bzoom\\b",f:"i"},{p:"\\btoggle\\b",f:"i"},{p:"\\bprev\\b",f:"i"},{p:"\\bnext\\b",f:"i"},{p:"\\bforward\\b",f:"i"},{p:"\\bbackward\\b",f:"i"},{p:"\\bqty\\b",f:"i"},{p:"\\bdown\\b",f:"i"},{p:"\\bup\\b",f:"i"},{p:"\\bright\\b",
f:"i"},{p:"\\bleft\\b",f:"i"},{p:"\\barrow\\b",f:"i"},{p:"\\bplus\\b",f:"i"},{p:"\\bminus\\b",f:"i"},{p:"\\bincrease\\b",f:"i"},{p:"\\bdecrease\\b",f:"i"},{p:"\\bcarousel\\b",f:"i"},{p:"\\bquantity\\b",f:"i"},{p:"\\bchevron\\b",f:"i"}],excludeRageCSS:[],replaceURLRegExes:[],enableWorkerCompression:!0,enableCompression:!0,urlTransforms:[],monitorAllHashChanges:!1,maskInputs:!1,abnSegmentCookie:"",ignoreChangesList:[],blacklistedURLs:[],whitelistedURLs:[],disableFormSubmitFields:!1,scrubInputAttributes:["defaultValue",
"placeholder"],forceDeferFetchAborts:!1,monitorXHRSetCookies:!1,maxXHRDataLength:20480,excludeXHRHeaderRegEx:[{p:"Authorization",f:"i"}],percentSampling:null,enabledCookie:"QuantumMetricEnabled",logReqCookiesForXHR:!1,spinnerMaxSeconds:6,spinnerMinimumThreshold:3,spinnerSelectorList:["[class*=spinner]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])","[class*=loading]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])","[class*=loader]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])"],
stripHTMLComments:!1,maxNumOOBEventsPerHit:5E3,targetCurrency:"USD",startOffset:0,startImmediatePathPatterns:[],allowClearCookies:!1,captureCookiesReplay:!0,waitForSessionIdPathPatterns:[],startWithoutParentPathPatterns:[],maxIframeSyncRetries:10,waitForParentMaxRetries:20,waitForParentRetryDelay:250,maxWaitForSessionIdRetries:2E4,queryParamForSessionId:"",queryParamForUserId:"",nestedStitchingQueryParams:[],logResourcePercent:0,autoDetectSDK:!1,customWebviewUserAgentPatterns:[],maxResourcesPerHit:500,
allowedResourceTypes:"css img script link iframe xmlhttprequest fetch".split(" "),maxStoredEventLength:255,hookPrompt:!0,blockFrequentReloads:[],domChangedThrottleDuration:100,spaTransitionStartMarkerName:"QuantumMetricTransitionStart",spaTransitionStopMarkerName:"QuantumMetricTransitionStop",spaLocationChangedTimeout:1E3,ignoreAttributes:"data-city data-postal-code data-email data-accountnumber data-phone data-address data-address1 data-last-name data-first-name data-user-firstname data-user-lastname data-user-email data-addressone data-addresstwo data-postalcode data-countrycode taxidnumber accountnumber lastname middlename firstname address address1 address2 city statecode zip ssn taxId consumerID birthdate personalemail businessemail idnumber email user-info password data-user-phonenumber data-user-birthdate account-number account-alias".split(" "),
transformAttributesForNodesList:[],webVitalsSnapshotBuffer:1E3,resourcePathBlacklist:[{p:"googleads.g.doubleclick.net",f:"i"}],sampleReplay:0,replayEnabled:!0,hookFetch:!0,sameSiteFlag:"None",disableErrorHooking:!1,xhrEncryptWhiteListDetails:[],xhrEncryptBlackListDetails:[],encryptNodeAttributes:[],syncEndpointsWithSDK:[],maskSensitiveQueryParams:"user userid user-id username alias clientid accountnumber invoicenumber id accountid customer_id customerid authcode authtoken bankclearingcode bankcountry ordertoken token passcode password vin confirmationno confirmation-number confirmationnumber confirmation dateofbirth email email_address emailaddress emailid loginemail loginid login_hint loginhint title name fname sname gname first_name firstname last_name lastname surname location address address1 address2 orderemail password phone phonenumber phone_number po postcode referrerid routingnumber state transactionid transid txtpassword txtuserid utm_email ssn".split(" "),
forceElementCSSUpload:["[data-fela-type]","[data-emotion]"],forceElementCSSInline:[],ignoreElementCSSSerialization:[],reportFailedImages:!0,slowLoadingImageThreshold:2500,useFallbackSDKSync:!1,imageTrackingIgnoreList:'img[alt*="tracking"] img[alt*="pixel"] img[alt*="beacon"] img[alt*="analytics"] img[alt*="spy"] img[alt*="tracker"] img[alt*="conversion"] img[alt*="1x1"] img[src*="utm_"] img[src*="google-analytics.com/"] img[src*="doubleclick.net/"] img[src*="facebook.com/tr/"] img[height="1"] [width="1"] img[height="0"] [width="0"] img[src=""] img[src*="blank.gif"]'.split(" "),
waitForNativeCapture:!0,elementVeinAttributes:"aria-label data-testid alt title data-id id name class".split(" "),temp:{cleanAPIUrls:!0},maxMDELength:20480,maxSDKWaitTime:6E3,clickTextMapping:[],excludeLegacyHttp:[],sdkCommTimeout:3E3,sdkCommRetryCount:5,sdkCommRetryDelay:500,zones:[],console:{error:[{re:{p:".*",f:""}}]},flutterViews:[{root:"flutter-view",attr:"flt-view-id",render:"flt-glass-pane S# canvas"}]},pd={};function qd(a){if(!a.M){const b=new URLSearchParams(window.location.search),c=a.B.fa.get("isRecording",!1);a.K=b.get(a.B.D.config.bookmarkToolbarQueryParamName)||c;a.K&&(pd.hashUploadPercent=100,pd.percentSampling=100,pd.sampleReplay=100,pd.publishInterval=500)}}function rd(a,b){const c=b.action;if(c)switch(c){case "recorder-cleanup":a.M=!0;sd(a.B);setTimeout(()=>{window.close()},350);break;default:console.warn("QM: Unknown recorder action")}else console.warn("QM: Missing recorder action:",b)}
class td{constructor(a){this.B=a;this.K=this.M=!1}start(){if(this.K){var a=document.createElement(this.B.Ud);a.src=this.B.D.config.bookmarkToolbarURL;a.crossOrigin="anonymous";document.head.appendChild(a);this.B.fa.set("isRecording",!0);this.B.oa.getSessionVar("sst",null)||this.B.oa.setSessionVar("sst",this.B.g.W.Z())}}};const ud=["log","warn","error","info","debug"];function vd(a,b,c=0){if(!b)b=new Set;else if(b.has(a))return new wd("[Circular Reference]");for(const d of xd._handlers)if(d.ub(a)){const e=d===yd||d===zd;if(e){if(c>5)return new wd("[Max Depth Reached]");b.add(a);c++}try{return new d(a,b,c)}catch(f){}finally{e&&b.delete(a)}}return new wd(a)}function Ad(a){xd._handlers.find(b=>b===a)||xd._handlers.push(a)}class xd{}xd._handlers=[];
class wd{constructor(a){this.B=a}static ub(){return!1}Ha(){return String(this.B)}matches(a){return a.test(String(this.B))}replace(){}ab(){return String(this.B).length+2}}class Bd extends wd{static ub(a){return typeof a==="string"}constructor(a){super(a.substring(0,501))}Ha(){return this.B.length>500?this.B.substring(0,500)+"...":this.B}replace(a,b){this.B=this.B.substring(0,503).replace(a,b)}ab(){return this.B.length+2}}
class Cd extends wd{static ub(a){return typeof a==="number"}Ha(){return Number.isFinite(this.B)?this.B:{t:"number",v:this.B.toString()}}replace(a,b){a=Number(String(this.B).replace(a,b));Number.isFinite(a)&&(this.B=a)}ab(){return Number.isFinite(this.B)?String(this.B).length:20+String(this.B).length}}class Dd extends wd{static ub(a){return typeof a==="boolean"}Ha(){return this.B}ab(){return this.B?4:5}}
class Ed extends wd{static ub(a){return a instanceof Error}Ha(){return{t:"error",v:{m:this.B.message||"N/A",s:this.B.stack&&this.B.stack.length>500?`${this.B.stack.substring(0,500)} ...`:this.B.stack||""}}}replace(a,b){this.B.message&&(this.B.message=this.B.message.replace(a,b))}ab(){return 30+(this.B.message?this.B.message.length:3)+(this.B.stack?Math.min(this.B.stack.length,500):0)}}
class Fd extends wd{static ub(a){return typeof a==="bigint"}Ha(){return{t:"bigint",v:this.B.toString()}}replace(a,b){try{const c=String(this.B).replace(a,b);this.B=BigInt(c)}catch(c){}}ab(){return 25+String(this.B).length}}
class zd extends wd{static ub(a){return!!a&&typeof a==="object"}constructor(a,...b){super(a);this.K=Object.entries(a).slice(0,50).reduce((c,[d,e])=>{c[d]=vd(e,...b);return c},{});this.B=void 0}Ha(){const a={};let b=2;for(const [c,d]of Object.entries(this.K)){const e=c.length+4+d.ab();b+e>5120||(a[c]=d.Ha(),b+=e)}return a}ab(){let a=2;for(const [b,c]of Object.entries(this.K))a+=b.length+4+c.ab();return a}matches(a){return Object.values(this.K).some(b=>b.matches(a))}replace(a,b){Object.values(this.K).forEach(c=>
c.replace(a,b))}}class yd extends wd{static ub(a){return Array.isArray(a)}constructor(a,...b){super(a);this.K=a.slice(0,50).map(c=>vd(c,...b));this.B=void 0}Ha(){const a=[];let b=2;for(const c of this.K){const d=c.ab()+1;b+d>5120||(a.push(c.Ha()),b+=d)}return a}ab(){return 2+this.K.reduce((a,b)=>a+b.ab()+1,0)}matches(a){return this.K.some(b=>b.matches(a))}replace(a,b){this.K.forEach(c=>c.replace(a,b))}};function Gd(a){return Object.entries(a||{}).reduce((b,[c,d=[]])=>{b[c]=[];d.forEach(e=>{if(e.re){try{e.fb=new RegExp(e.re.p,e.re.f||"g")}catch(f){console.warn("QM ConsoleModule: invalid regex pattern",f);return}b[c].push(e)}else console.warn("QM ConsoleModule: regex is required")});return b},{})}function Hd(a,b=[]){let c=!1;b.forEach(d=>{a.forEach(e=>{e.matches(d.fb)&&(c=!0,d.rep&&e.replace(d.fb,d.rep))})});return c}Ad(Bd);Ad(Cd);Ad(Fd);Ad(Dd);Ad(Ed);Ad(yd);Ad(zd);
function Id(a){if(!a.M){a.M=!0;var b=window.console;ud.forEach(c=>{const d=wa(b,c);d&&d.configurable&&Object.defineProperty(b,c,{value:(...e)=>{d.value.apply(b,e);try{Jd(a,a.B[c],c,e)}catch(f){}},writable:d.writable,enumerable:d.enumerable,configurable:d.configurable})})}}function Kd(a,b={}){a.B={};a.K=0;a.B=Gd(b.console)}function Jd(a,b,c,d){!d.length||a.K>=1E3||(d=d.slice(0,5).map(e=>vd(e)),b=Hd(d,b),d=d.map(e=>e.Ha()),a.ba({m:c,a:d,h:Qa(a.da.stringify(d))},b),a.K++)}
class Ld{constructor(a,b=()=>{}){this.B={};this.ba=b;this.M=!1;this.K=0;this.da=a;Id(this)}};function Md(a){let b="";for(let c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]<<8|a[c+1]);return b}function Nd(a){let b=new Uint8Array(a.length*2);for(let c=0;c<a.length;c++){let d=a.charCodeAt(c),e=c*2;b[e]=d>>8&255;b[e+1]=d&255}return b}function Od(a){a=new Uint8Array(a);let b="";for(let c=0;c<=a.length;c+=65E3)b+=String.fromCharCode.apply(null,a.slice(c,c+65E3));return btoa(b)}function Pd(a){a=atob(a).split("").map(b=>b.charCodeAt(0));return new Uint8Array(a)}
function Qd(a){return a.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")};/*
 MIT
*/
class Rd{constructor(a){this.M=a;this.K=this.B=null;this.iv=new Uint8Array(16);this.importKey()}async importKey(){if(this.M&&!this.K){Qd(Od(this.M));var a=this;this.B=new Promise(b=>{try{Sd.importKey("raw",this.M,ja,!1,["encrypt"]).then(c=>{a.K=c;b()}).catch(()=>{b()})}catch(c){b()}})}}async encrypt(a){!this.K&&this.B&&await this.B;try{!this.K&&this.B&&(await this.B,this.B=null);if(this.K){const b=Nd(a);return await Sd.encrypt({name:ja,iv:this.iv},this.K,b)}return new ArrayBuffer(0)}catch(b){return new ArrayBuffer(0)}}}
;var Td=null,Sd=null;class Ud{constructor(a,b,c,d){Object.defineProperties(this,{gh:{value:a},type:{value:a.type,enumerable:!0},extractable:{value:c===void 0?a.extractable:c,enumerable:!0},algorithm:{value:b===void 0?a.algorithm:b,enumerable:!0},usages:{value:d===void 0?a.usages:d,enumerable:!0}})}}
function Vd(a){function b(m){var n={name:(m.name||m||"").toUpperCase().replace("V","v")};switch(n.name){case ia:break;case ja:m.length&&(n.length=m.length);break;case ka:m.hash&&(n.hash=b(m.hash)),m.publicExponent&&(n.publicExponent=new Uint8Array(m.publicExponent)),m.modulusLength&&(n.modulusLength=m.modulusLength)}return n}function c(m){if(m instanceof ArrayBuffer||m instanceof Uint8Array)m=JSON.parse(decodeURIComponent(escape(Md(m))));var n={kty:m.kty,alg:m.alg,ext:m.ext||m.extractable};switch(n.kty){case "oct":n.k=
m.k;case "RSA":"n e d p q dp dq qi oth".split(" ").forEach(function(q){q in m&&(n[q]=m[q])})}return n}function d(m){m=c(m);k&&(m.extractable=m.ext,delete m.ext);m=unescape(encodeURIComponent(JSON.stringify(m)));for(var n=new Uint8Array(m.length),q=0,t=m.length;q<t;q++)n[q]=m.charCodeAt(q);return n.buffer}var e=window.crypto||window.msCrypto;if(e){var f=e.subtle||e.webkitSubtle;if(f){var g=window.Crypto||e.constructor||Object,h=window.navigator.userAgent.indexOf("Edge/")>-1,k=!!window.msCrypto&&!h;
h=!e.subtle&&!!e.webkitSubtle;if(k||h){P(a.ca,"test-setupCryptoShim",{userAgent:window.navigator.userAgent},"debug");["generateKey","importKey"].forEach(function(m){var n=f[m];f[m]=function(q,t,C){var B=[].slice.call(arguments);switch(m){case "generateKey":var w=b(q);var z=t;var u=C;break;case "importKey":w=b(C),z=B[3],u=B[4],q==="jwk"&&(t=c(t),t.alg||(t.alg={Uh:{Vh:la},Th:{256:ma}}[w.name][(w.hash||{}).name||w.length||""]),B[1]=d(t))}try{var r=n.apply(f,B)}catch(p){return Promise.resolve()}k&&(r=
new Promise(function(p,A){r.onabort=r.onerror=function(x){A(x)};r.oncomplete=function(x){p(x.target.result)}}));return r=r.then(function(p){w.name.search("RSA")==0&&(w.modulusLength||(w.modulusLength=(p.publicKey||p).algorithm.modulusLength),w.publicExponent||(w.publicExponent=(p.publicKey||p).algorithm.publicExponent));p.publicKey&&p.privateKey?p={publicKey:new Ud(p.publicKey,w,z,!1),privateKey:new Ud(p.privateKey,w,z,!1)}:p=new Ud(p,w,z,u);return p})}});["encrypt"].forEach(function(m){var n=f[m];
f[m]=function(q,t,C,B){var w=[].slice.call(arguments);b(q);k&&t.algorithm.hash&&(w[0].hash=w[0].hash||t.algorithm.hash);w[1]=t.gh;try{var z=n.apply(f,w)}catch(u){return Promise.reject(u)}k&&(z=new Promise(function(u,r){z.onabort=z.onerror=function(p){r(p)};z.oncomplete=function(p){u(p.target.result)}}));return z}});if(k){var l=f.digest;f.digest=function(m,n){try{var q=l.call(f,m,n)}catch(t){return Promise.reject(t)}return q=new Promise(function(t,C){q.onabort=q.onerror=function(B){C(B)};q.oncomplete=
function(B){t(B.target.result)}})};Td=Object.create(e,{getRandomValues:{value:function(m){return e.getRandomValues(m)}},subtle:{value:f}})}h&&(e.subtle=f,Td=g)}}}}function Qb(a){if(typeof msCrypto=="object")var b=new Promise(c=>{var d=Wd(a);d=msCrypto.subtle.digest("SHA-256",d);c(d)});else b="TextEncoder"in window?(new TextEncoder).encode(a):Wd(a),b=crypto.subtle.digest("SHA-256",b);return b.then(c=>btoa(String.fromCharCode.apply(null,new Uint8Array(c,0,8))))}
async function Xd(a){if(window.crypto||Td)Td=window.crypto||Td,Sd=Td.subtle;if(Sd){a.supports=!0;if(!a.B||a.B.length!=32){a.B=new Uint8Array(32);Td.getRandomValues(a.B);try{var b=JSON.parse(atob(a.K)).map(Pd)}catch(c){}a.ba=await (new Yd(b)).encrypt(a.B);a.Oe=await Zd(a,a.K)}a.M=new Rd(a.B);a.da&&(a.L(),a.da=!1)}}async function Zd(a,b){return b&&a.supports?(a=await Sd.digest("SHA-256",Nd(b.toString().toLowerCase())),Od(a)):""}function $d(a){return a.ba&&a.K?"v2:"+Od(a.ba):""}
function Wd(a){a=unescape(encodeURIComponent(a));const b=new Uint8Array(a.length);for(let c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b}
class ae{constructor(a,b,c){a&&(this.J=c,Vd(c),this.K=a,this.M=this.ba=this.B=this.publicKey=null,this.L=b,this.Oe="",this.da=!0,this.supports=!1,this.pa=Xd(this))}async encrypt(a){if(!a||a.trim().length==0)return"";if(!this.K||!this.supports)return"*";try{if(this.M||await this.pa,a&&typeof a=="string"&&this.M){try{var b=await this.M.encrypt(a)}catch(c){}return Od(b)}}catch(c){}return"*"}};class Yd{constructor(a){this.M=a;this.K=this.B=null;this.importKey()}async importKey(){try{if(this.M&&!this.K){var a={kty:"RSA",alg:la,ext:!1,key_ops:["encrypt"],e:"AQAB",n:Qd(Od(this.M[0]))},b=this;this.B=new Promise((c,d)=>{try{Sd.importKey("jwk",a,{name:ka,hash:{name:ia}},!1,["encrypt"]).then(e=>{b.K=e;c(e)}).catch(e=>{d(e)})}catch(e){d(e)}})}}catch(c){}}async encrypt(a){!this.K&&this.B&&await this.B;try{if(!this.K&&this.B&&(await this.B,this.B=null),this.K)try{return await Sd.encrypt({name:ka},
this.K,a)}catch(b){return new ArrayBuffer(0)}}catch(b){return new ArrayBuffer(0)}}};class be{constructor(a,b,c){this.J=a;this.M=c;this.Oa=b;this.B=this.B.bind(this);this.K=this.K.bind(this);this.J.Le||window.addEventListener("storage",this.K);window.addEventListener("pagehide",this.B)}K(a){a.key==="QEventChannel"&&a.newValue&&this.M(this.Oa.Ma(a.newValue))}B(){try{this.Oa.Storage.removeItem.call(window.localStorage,"QEventChannel")}catch(a){}}me(){window.removeEventListener("storage",this.K);window.removeEventListener("pagehide",this.B)}};class ce{constructor(){this.J=null}};function de(a){for(var b={},c=0;c<arguments.length;++c){var d=U(arguments[c]),e;for(e in d)b[e]=d[e]}return b}function U(a){var b=a.Ba;return b?b:a.Ba=a.ha()}function V(a,b){U(a)[b]&&(a.pa=void 0,a.K(b))}function ee(a,b,c){a.da(b,c)}class W extends ce{constructor(){super();this.pa=void 0;this.Ba=null}evaluate(){var a=this.pa;return a!==void 0?a:this.pa=this.B()}B(){return null}ha(){return{}}K(){}ba(){}M(){}da(){}};class fe extends W{};class ge extends fe{constructor(a,b,c){super();this.L=b;this.Xa=[];for(var d=2;d<arguments.length;++d)this.Xa.push(arguments[d])}B(){if(this.L==he)return!this.Xa[0].evaluate();if(this.L==ie){for(var a=0;a<this.Xa.length;++a)if(!this.Xa[a].evaluate())return!1;return!0}for(a=0;a<this.Xa.length;++a)if(this.Xa[a].evaluate())return!0;return!1}ha(){return de(...this.Xa)}K(a){for(var b=0;b<this.Xa.length;++b)V(this.Xa[b],a)}}var he=0,ie=1;class je extends ce{evaluate(){return!1}};class ke extends fe{constructor(a,b,c){super();this.value=b;this.L=c}B(){return this.L.evaluate(this.value.evaluate())}ha(){return U(this.value)}K(a){V(this.value,a)}};class le extends W{constructor(a,b,c){super();this.L=b;this.value=c}B(){var a=this.L.evaluate();return a?{Ia:a,value:this.value.B()}:{Ia:a,value:""}}ha(){return de(this.L)}K(a){V(this.L,a);V(this.value,a)}da(a,b){this.L.da(a,b)}ba(){this.L.ba()}M(){this.L.M()}};class me extends fe{constructor(a,b){super();this.event=b}B(){return this.event.evaluate().Ia}ha(){return U(this.event)}K(a){V(this.event,a)}};class ne extends fe{constructor(a,b){super();this.O=a;this.L=b}B(){var a=this.L;return this.O.hb.some(function(b){return b.id==a})}ha(){return{eventinfo:!0,event:!0}}};class oe extends W{constructor(a,b){super();this.event=b}B(){return this.event.evaluate().value}ha(){return U(this.event)}K(a){V(this.event,a)}};class pe extends W{B(){return{Ia:!0,value:""}}ha(){return{eventinfo:!0}}};class qe extends W{constructor(a,b,c){super();this.key=b;this.value=c}B(){return this.value.evaluate()[this.key]}ha(){return U(this.value)}K(a){V(this.value,a)}};class re extends W{constructor(a,b){super();this.value=b}B(){for(var a=this.value.evaluate(),b=0,c=0;c<a.length;++c)try{b+=parseFloat(a[c])}catch(d){}return b}ha(){return U(this.value)}K(a){V(this.value,a)}};class se extends W{constructor(a,b){super();this.value=b}B(){return this.value}};class te extends W{constructor(a,b,c,d){super();this.src=b;this.ka=new RegExp(b);this.L=c;this.value=d}B(){var a=this.ka.exec(this.value.evaluate());return a?(a=a[this.L])?a:"":""}ha(){return U(this.value)}K(a){V(this.value,a)}};class ue extends W{constructor(a,b){super();this.value=b}B(){try{return parseFloat(this.value.evaluate())}catch(a){return NaN}}ha(){return U(this.value)}K(a){V(this.value,a)}};class ve extends W{constructor(a,b,c){super();this.O=a;this.L=c;this.value=b}B(){try{var a=this.value.evaluate();var b=va(a);if(this.L){var c=this.L.evaluate();if(c){let d=ua(b,c,this.O.J.D.config.targetCurrency,this.O.J.yd);if(typeof d==="string"){Tb(this.O.J,"currency_conversion",d);return}b=d}}}catch(d){return}return typeof b==="number"?D(b):void 0}ha(){return Object.assign({},U(this.value),this.L?U(this.L):{})}K(a){V(this.value,a);this.L&&V(this.L,a)}};class we extends je{constructor(a,b){super();this.B=b}evaluate(a){return!this.B.evaluate(a)}}class xe extends je{constructor(a,b){super();this.value=b}evaluate(a){return a==this.value}}class ye extends je{constructor(a,b){super();this.value=b}evaluate(a){return a&&a!="undefined"?a.indexOf(this.value)!=-1:!1}}
class ze extends je{constructor(a,b,c){super();this.B=b;this.value=c}evaluate(a){return typeof a!=="string"?!1:this.B===Ae?a.startsWith(this.value):this.B===Be?a.includes(this.value):this.B===Ce?a.endsWith(this.value):!1}}var Ae=0,Be=1,Ce=2;class De extends je{constructor(a,b,c){super();this.start=b;this.end=c}evaluate(a){return this.start<=a&&a<=this.end}}
class Ee extends je{constructor(a,b,c){super();this.B=b;this.value=c}evaluate(a){return this.B==Fe?a<this.value:this.B==Ge?a<=this.value:this.B==He?a>=this.value:a>this.value}}var Fe=0,Ge=1,He=2;class Ie extends je{evaluate(a){return!!a}}class Je extends je{evaluate(a){return a!=null&&a.length!=0}}class Ke extends je{constructor(a,b){super();this.key=b}evaluate(a){return a[this.key]!==void 0}}
class Le extends je{constructor(a,b){super();this.Ea=b}evaluate(a){try{if(!(a instanceof Element))return!1}catch(b){}return this.J.g.ga.matchesSelector(a,this.Ea)}}class Me extends je{constructor(a,b,c){super();this.key=b;this.B=c}evaluate(a){try{var b=a[this.key];b||this.key!="value"||(b=a.innerText);b=b?b.trim().toLowerCase():b;return b===(this.B?this.B.toLowerCase():this.B)}catch(c){return a[this.key]===this.B}}}class Ne extends je{evaluate(a){return a!==void 0&&a!==null}};class Oe extends W{constructor(a){super();this.O=a;this.J=a.J}};class Pe extends Oe{B(){return this.O.Se}ha(){return{formSubmitted:!0}}}class Qe extends Oe{B(){return this.O.Qe.filled?this.O.Qe.name:null}ha(){return{form:!0}}}class Re extends Oe{constructor(a,b){super(a);this.Ea=b}B(){var a=this.O.Se,b=a.elements;if(a)for(a=0;a<b.length;++a)if(this.J.g.ga.matchesSelector(b[a],this.Ea))return b[a].value;return null}ha(){return{formSubmitted:!0}}};class Se extends Oe{constructor(a,b){super(a);this.L=b;this.ka={eventinfo:!0,event:!0}}B(){for(var a=this.L,b=this.O.hb,c=b.length-1;c>=0;--c){var d=b[c];if(d.id==a)return d.value}}ha(){return this.ka}}class Te extends Oe{constructor(a,b){super(a);this.L=b}B(){for(var a=this.L,b=this.O.hb,c=b.length-1;c>=0;--c){var d=b[c];if(d.id==a)return d.timeStamp}}ha(){return{eventinfo:!0,event:!0}}}class Ue extends Oe{B(){return this.O.kb&&this.O.kb.s}ha(){return{eventinfo:!0}}}
class Ve extends Oe{B(){var a=this.O.kb;if(a)return a.e+D(this.J.Vc/1E3)}ha(){return{eventinfo:!0,engagement:!0}}};class We extends fe{constructor(a,b){super();this.O=a;this.Ea=b}B(){if(this.O.Pe)return this.J.g.ga.matchesSelector(this.O.Pe,this.Ea)}ha(){return{fieldFilled:!0}}};class Xe extends Oe{B(){return this.O.tg}ha(){return{clicked:!0}}};class Ye extends Oe{B(){return this.O.Qb}ha(){return{clicked:!0}}};class Ze extends fe{constructor(a,b){super();this.O=a;this.Ea=b}B(){return!!this.O.J.g.ga.querySelector(document,this.Ea)}ha(){return{pageready:!0,dom:!0,eventinfo:!0}}};class $e extends Oe{constructor(a,b){super(a);this.Ea=b}B(){var a=this.J.g.ga.querySelector(document,this.Ea);if(a)return a.nodeName!="INPUT"&&a.nodeName!="SELECT"&&a.nodeName!="TEXTAREA"||!a.value?this.J.g.G.textContent(a):a.value}ha(){return{dom:!0,pageready:!0,eventinfo:!0,clicked:!0,formSubmitted:!0,fieldFilled:!0}}};class af extends Oe{constructor(a,b){super(a);this.Ea=b}B(){var a=this.J.g.ga.querySelector(document,this.Ea);if(a)return a.value}ha(){return{dom:!0,pageready:!0,clicked:!0,formSubmitted:!0,eventinfo:!0}}};class bf extends fe{constructor(a,b){super();this.O=a;this.L=b}B(){return this.O.J.qa.get(this.L)}ha(){return{eventinfo:!0}}};class cf extends W{constructor(a,b){super();this.O=a;this.L=b}B(){return this.O.J.qa.get(this.L)}ha(){return{eventinfo:!0}}};const df=async(a,b,c)=>{if(typeof c==="string")return c;a=((a.reqHeaders||"").toLowerCase().split("\r\n").find(d=>d.startsWith("content-type"))||"").slice(14);return c instanceof window.FormData||a.startsWith("multipart/form-data")?await (new Request("",{method:b,body:c})).text():c instanceof Uint8Array?c instanceof Uint8Array&&(a.startsWith("application/json")||a.startsWith("text/"))?String.fromCodePoint.apply(null,c):c:c},ef=a=>a.split("\r\n").reduce((b,c)=>{if(c==="")return b;const [d,e]=c.split(/:\s*/);
b[d.toLowerCase()]=e;return b},{});class ff extends W{constructor(a,b){super();this.O=a;this.L=b}B(){var a="";try{if(typeof this.L==="object"&&this.L!==null&&this.L.hasOwnProperty("fn")){const b=this.O.J,c=b.oa,d={api:c,utils:{get:E,set:ya,JSON:{parse:b.g.G.Ma,stringify:b.g.G.stringify},getSessionVar:c.getSessionVar.bind(c),setSessionVar:c.setSessionVar.bind(c),currencyConvertFromToValue:c.currencyConvertFromToValue.bind(c)},userID:b.wa,sessionID:b.ia};if(this.O.td){const e=this.O.td;let f=e.qresponse;try{f=this.O.J.g.G.Ma(f)}catch(h){}let g=
e.qrequest;try{g=this.O.J.g.G.Ma(g)}catch(h){}d.http={response:f,request:g,status:e.qstatus,method:e.qmethod,url:e.qurl,duration:e.qduration};e.qreqheaders&&(d.http.requestHeaders=ef(e.qreqheaders));e.qrespheaders&&(d.http.responseHeaders=ef(e.qrespheaders))}this.O.sd&&(d.lastClicked=this.O.sd);return this.L.fn.call(d)}a=window[this.J.Kf](this.L)}catch(b){console.error("QTM: JSEvent: ",b,this.L),P(this.J.ca,"JSValue:eval-error",{eventId:this.O.oe,message:b.message,stack:b.stack?b.stack.toString().substring(0,
500):""},"error")}return a}ha(){return{pageready:!0,eventinfo:!0}}};class gf extends ff{ha(){return{pageready:!0,eventinfo:!0,dom:!0,clicked:!0,xhr:!0}}};class hf extends Oe{constructor(a,b){super(a);this.L=new RegExp(b)}B(){if(this.O.Fa)return this.L.test(this.O.Fa.responseURL)?this.O.Fa.data:void 0}ha(){return{xhr:!0}}};class jf extends Oe{constructor(a,b){super(a);this.L=new RegExp(b)}B(){if(this.O.Fa&&this.L.test(this.O.Fa.qurl))return this.O.Fa.qresponse}ha(){return{xhr:!0}}};function kf(a){const b={};return a&&typeof a==="string"?a.split("\r\n").slice(0,-1).reduce((c,d)=>{const [e,f]=d.split(": ");d=e.toLowerCase();d in c||(c[d]=[]);c[d].push(...f.split(/, */g));return c},b):b}function lf(a,b){return b&&a.name in b?a.ka?b[a.name].some(c=>a.ka.evaluate(c)):!0:!1}
class mf extends Oe{constructor(a,b,c,d){super(a);this.L=new RegExp(b);this.name=c;this.ka=d}B(){const a=this.O.Fa;if(a&&this.L.test(a.responseURL)){var b=a.af;if(!b){const c=a.getAllResponseHeaders();c&&(b=kf(c),a.af=b)}return lf(this,b)}}ha(){return{xhr:!0}}};class nf extends mf{B(){const a=this.O.Fa;if(a&&this.L.test(a.responseURL)){var b=a.bf;if(!b){const c=a.reqHeaders;c&&(b=kf(c),a.bf=b)}return lf(this,b)}}};const of=/^\d+$/;class pf extends W{constructor(a,b,c){super();this.key=b;this.ka=this.key.split(".");this.L=c}B(){var a=this.L.evaluate();if(a&&typeof a=="string")try{for(var b=this.ka,c=0;c<b.length;c++){let e=b[c];if(!of.test(e)&&a.indexOf(e)<0)return}var d=JSON.parse(a);for(c=0;c<b.length&&(d=d[b[c]],d!==void 0);c++);return d}catch(e){}}ha(){return U(this.L)}K(a){V(this.L,a)}};class qf extends pf{constructor(a,b,c,d){super(a,b,d);this.value=c}B(){var a=super.B();if(typeof a!=="undefined")return a==this.value}};class rf extends W{constructor(a,b,c,d){super();this.L=b;this.value=c;this.Sa=d}B(){const a=this.L.evaluate();return a?{Ia:a,value:this.value.B(),Sa:this.Sa.B()}:{Ia:a,value:"",Sa:null}}ha(){return de(this.L)}K(a){V(this.L,a);V(this.value,a);V(this.Sa,a)}da(a,b){this.L.da(a,b)}ba(){this.L.ba()}M(){this.L.M()}};class sf extends W{transform(){}};class tf extends W{constructor(a,b,...c){super();this.value=b;this.L=c}B(){const a=this.value.evaluate();return this.L.reduce((b,c)=>c.transform(b),a)}ha(){const a=this.L.reduce((b,c)=>Object.assign(b,U(c)),{});return Object.assign(a,U(this.value))}K(a){V(this.value,a);this.L.forEach(b=>V(b,a))}};class uf extends sf{constructor(a,b){super();this.L=b}transform(a){typeof a!=="string"&&(a=String(a));return this.L==="u"?a.toUpperCase():this.L==="l"?a.toLowerCase():a}}class vf extends sf{constructor(a,b,c){super();this.fb=Va(b.p,b.f);this.Td=c}transform(a){typeof a!=="string"&&(a=String(a));return this.fb?a.replace(this.fb,this.Td):""}}class wf extends sf{constructor(a){super();this.O=a}transform(a){if(typeof a==="string")try{return this.O.J.g.G.Ma(a)}catch(b){}}}
class xf extends sf{constructor(a,...b){super();this.O=a;this.keys=b}transform(a){if(typeof a==="object"&&a!==null)return this.keys.reduce((b,c)=>{if(Array.isArray(c)){var d=c[0];c=c[1]}else d=c;d=a[d];d!==void 0&&(b[c]=d);return b},{})}}class yf extends sf{constructor(a,b){super();this.target=b}transform(a){if(typeof a==="object"&&a!==null){var b=this.target.evaluate();if(typeof b==="object"&&b!==null)return{...a,...b}}}ha(){return U(this.target)}K(a){V(this.target,a)}};class zf extends W{constructor(a,b,c,d){super();this.object=b;this.path=c;this.ka=c.split("/").slice(1).map(ac);this.L=d}B(){var a=this.object.evaluate();if(a===void 0)return!1;a=this.path===""?a:E(a,this.ka,O);return a==O?!1:this.L?this.L.evaluate(a):!0}ha(){return U(this.object)}K(a){V(this.object,a)}};class Af extends W{B(){return window}ha(){return{eventinfo:!0,pageready:!0}}};class Bf extends zf{B(){var a=this.object.evaluate();if(a!==void 0){a=this.path===""?a:E(a,this.ka,O);if(!this.L)return a===O?void 0:a;if(a!=O&&this.L.evaluate(a))return a}}};class Cf extends W{constructor(a,b,c,d){super();this.L=b;this.path=c;this.ta=c.split("/").slice(1).map(ac);this.ka=d}B(){const a=this.L.evaluate();if(a===void 0)return!1;const b=this.ka?c=>this.ka.evaluate(c):()=>!0;return this.path===""?b(a):bc(a,this.ta,b)!==O}ha(){return U(this.L)}K(a){V(this.L,a)}};class Df extends W{constructor(a,b,c,d){super();this.L=b;this.path=c;this.ta=c.split("/").slice(1).map(ac);this.ka=d}B(){var a=this.L.evaluate();if(a===void 0)return!1;const b=this.ka?c=>this.ka.evaluate(c):()=>!0;if(this.path===""&&b(a))return a;a=bc(a,this.ta,b);return a!==O?a:void 0}ha(){return U(this.L)}K(a){V(this.L,a)}};class Ef extends mf{constructor(a,b,c){super(a,b,c,null)}B(){const a=this.O.Fa;if(a&&this.L.test(a.responseURL)){var b=a.af;if(!b){const c=a.getAllResponseHeaders();c&&(b=kf(c),a.af=b)}return b[this.name]}}};class Ff extends nf{constructor(a,b,c){super(a,b,c,null)}B(){const a=this.O.Fa;if(a&&this.L.test(a.responseURL)){var b=a.bf;if(!b){const c=a.reqHeaders;c&&(b=kf(c),a.bf=b)}return b[this.name]}}};class Gf extends W{constructor(a,b,c,...d){super();this.ta=b;this.ka=Math.max(Math.min(c,d.length-1),0);this.L=d}B(){var a=this.L.map(e=>e.evaluate());let b=!1,c="",d=null;this.ta===Hf&&a.every(e=>e.Ia)&&(b=!0,c=a[this.ka].value,d=a[this.ka].Sa);this.ta===If&&a.some(e=>e.Ia)&&(a=a.find(e=>e.Ia)||{Ia:!1,value:""},b=!0,c=a.value,d=a.Sa);b?this.L.forEach(e=>{e.M()}):this.L.forEach(e=>{e.ba()});return{Ia:b,value:c,Sa:d}}ha(){return this.L.reduce((a,b)=>({...U(b),...a}),{})}K(a){this.L.forEach(b=>V(b,
a))}da(a,b){this.L.forEach(c=>{c.da(a,b)})}ba(){this.L.forEach(a=>{a.ba()})}M(){this.L.forEach(a=>{a.M()})}}var Hf=0,If=1;class Jf extends Oe{constructor(a,b){super(a);this.L=new RegExp(b)}B(){if(this.O.Fa&&this.L.test(this.O.Fa.qurl))return this.O.Fa}ha(){return{xhr:!0}}};class Kf extends W{constructor(a,b){super();this.O=a;this.Ea=b}B(){return this.O.J.g.ga.querySelector(document,this.Ea)}};class Lf extends W{constructor(a,b){super();this.O=a;this.element=b}B(){const a=this.element.evaluate();if(a)return this.O.J.g.G.innerHTML(a)}};class Mf extends W{constructor(a,b,c){super();this.element=b;this.wd=c}B(){const a=this.element.evaluate();if(a)return a.getAttribute(this.wd)}};class Nf extends W{constructor(a,b){super();this.href=b}B(){const a=this.href.evaluate();try{return new URL(a)}catch(b){}}ha(){return U(this.href)}K(a){V(this.href,a)}};class Of extends Nf{constructor(a,b,c){super(a,b);this.ta=c}B(){const a=super.B();if(a)return a[this.ta]}};class Pf extends Of{constructor(a,b,c,d){super(a,b,"searchParams");this.ka=c;this.L=d}B(){var a=super.B();if(a&&(a=a.getAll(this.ka))&&a.length!==0)return this.L?a.find(b=>this.L.evaluate(b)):a.map(encodeURIComponent).join("&")}};class Qf extends Oe{B(){return this.O.Mc?this.O.Mc.a.join(" "):""}ha(){return{console:!0}}};class Rf extends W{constructor(a,b,c,d){super();this.O=a;this.method=b;this.fb=Va(c,d?"i":"")}B(){if(!this.O.Mc)return!1;const {m:a,a:b}=this.O.Mc;return a!==this.method?!1:b.some(this.fb.test.bind(this.fb))}ha(){return{console:!0}}};class Sf extends W{constructor(a,b){super();this.L=b}B(){return{Ia:this.L.evaluate(),pg:!0}}ha(){return de(this.L)}K(a){V(this.L,a)}da(a,b){this.L.da(a,b)}ba(){this.L.ba()}M(){this.L.M()}};const Tf=(a,b)=>{if(typeof b==="number"||typeof b==="string"||typeof b==="boolean"||b===null)return b;if("$p"in b)return b=b.$p.split("/").slice(1).map(ac),E(a,b,O);throw Error(`Unsupported descriptor "${JSON.stringify(a)}"`);},Uf=(a,b)=>c=>{const d=Tf(c,a);if(d===O)return!1;c=Tf(c,b);return c===O?!1:d===c};
class Vf extends W{constructor(a,b){super();this.O=a;Qa(JSON.stringify(b,Zb));if(b.o==="eq")a=Uf(...b.a);else throw Error(`unsupported operation "${b.o}"`);this.L=a;this.state={Md:-1,$b:-1}}B(){const a=this.O.hb||[],b=a.slice(this.state.$b+1).some(this.L);b&&(this.state.Md=this.state.$b,this.state.$b=a.length-1);return b}ha(){return{timeline:!0}}ba(){this.state.$b=this.state.Md}M(){this.state.Md=this.state.$b}da(a,{hb:b}){b=b.findLastIndex(({id:c})=>a.id===c);this.state={Md:b,$b:b}}};class Wf extends W{constructor(a,b,c,...d){super();this.ka=b;this.L=d}B(){const a=this.L.map(c=>c.evaluate());let b=!1;this.ka===Xf&&a.every(c=>c.Ia)&&(b=!0);this.ka===Yf&&a.some(c=>c.Ia)&&(b=!0);b?this.L.forEach(c=>{c.M()}):this.L.forEach(c=>{c.ba()});return{Ia:b,pg:!0}}ha(){return this.L.reduce((a,b)=>({...U(b),...a}),{})}K(a){this.L.forEach(b=>V(b,a))}da(a,b){this.L.forEach(c=>{c.da(a,b)})}ba(){this.L.forEach(a=>{a.ba()})}M(){this.L.forEach(a=>{a.M()})}}var Xf=0,Yf=1;var Zf={LogicalClause:ge,ValueClause:ke,EventClause:me,SessionEventClause:ne,EventValue:oe,NE:Sf,E:le,MDE:rf,HE:pe,MAE:Gf,MNE:Wf,Not:we,Is:xe,Contains:ye,StrCmp:ze,Between:De,Compare:Ee,IsTrue:Ie,IsNotNull:Je,HasKey:Ke,KeyValue:Me,Matches:Le,Exists:Ne,DV:qe,Sum:re,V:se,RE:te,PF:ue,CV:ve,FormSubmitted:Pe,FormFieldFilled:Qe,FormFieldSubmittedValue:Re,FieldFilledNode:We,SEventValue:Se,EventTimestamp:Te,FirstHit:Ue,SessionEngagementTime:Ve,ElementClicked:Xe,ElementClickedNode:Ye,CookiePresent:bf,CookieValue:cf,
JSValue:ff,JSValueEx:gf,XHR:Jf,XHRRequest:hf,XHRResponse:jf,XHRResponseHeader:mf,XHRRequestHeader:nf,XHRResponseHeaderValue:Ef,XHRRequestHeaderValue:Ff,JSONPath:pf,JSONPathValue:qf,ObjPath:zf,ObjPathValue:Bf,ObjSearch:Cf,ObjSearchValue:Df,WV:Af,SelectorPresent:Ze,SelectorElement:Kf,SelectorHtml:Lf,SelectorAttribute:Mf,SelectorText:$e,SelectorValue:af,URLValue:Nf,URLPropValue:Of,URLParamsValue:Pf,VXF:tf,XFCC:uf,XFRR:vf,XFJPar:wf,XFPK:xf,XFMG:yf,ConsoleMatch:Rf,Console:Qf,Timeline:Vf};
const $f=new window.Map([[-56,{ja:2}],[-57,{ja:2}],[-58,{ja:2}],[-59,{ja:2}],[-60,{ja:2}],[-61,{ja:2}],[-65,{ja:2}],[-82,{ja:1,xa:1}],[-83,{ja:1,xa:1}],[-84,{ja:1,xa:1}],[-85,{ja:1,xa:1}],[-86,{ja:1,xa:1}],[-87,{ja:1,xa:1}],[-88,{ja:1,xa:1}]]);
function R(a,b,c,d=null,e=!1){b.id!==0&&(c=Na(c).substring(0,a.J.D.config.maxStoredEventLength));if(b.rh&&!c)return!1;if(b.Qc&&!a.kb)return a.ba.push({event:b,value:c,Tb:d}),!1;var f=b.id;b.Pd&&(f=b.Pd);var g={i:f,f:b.flags,v:c,t:b.la?b.la:a.J.g.W.Z()},h=d?d.hash:c;ag(a,b)&&(h=Qa(h),g.c=h);if(f!==0&&a.M.has(`${f}:${h}`)||c===null&&a.M.has(`${f}:`)||f!==0&&a.B[f]&&(a.B[f].x===1||a.B[f][h]))return!1;b.xa?b.xa==2&&(a.B[f]||(a.B[f]={}),a.B[f][h]=1):(bg(a,b),a.B[f]={x:1});if(b.ja)b.ja===2&&a.M.add(`${f}:${h}`);
else{if(a.ka[f])return!1;a.ka[f]=1}if(b.id!=0){h={id:f,value:c,timeStamp:b.la};d!==null&&(h.hash=d.hash);a.hb.push(h);f=a.ta;try{f.Oa.Storage.setItem.call(window.localStorage,"QEventChannel",f.Oa.stringify(h))}catch(k){}}d!==null&&(g.h=d.hash,g.ev=d.value);(b.flags&64)>0?a.J.fa.set("cv",c):(b.flags&128)>0&&a.kb&&(a.kb.abn=c);(b.flags&1)>0&&a.J.fa.set("cv",null);cg(a,b,g,c,e);return!0}
function dg(a,b){var c=b.t;const d=b.v;if(!c||!d)return b;b=[a];for(let e=0;e<d.length;++e)b.push(dg(a,d[e]));c=new Zf[c](...b);c.J=a.J;return c}function bg(a,b){var c=b.id,d;for(d in b.Ig)b.Ig.hasOwnProperty(d)&&delete a.L[d][c];delete a.K[c]}
function eg(a,b,c,d=null){var e=b.id;b.Pd&&(e=b.Pd);if(a.ka[e]!==1){if(e<0&&$f.has(e)){var f=$f.get(e);f.ja!==void 0&&(b.ja=f.ja);f.xa!==void 0&&(b.xa=f.xa)}if(b.Qc&&b.event){f=b.event;var g=null,h=f.ha();for(k in h)h.hasOwnProperty(k)&&(g=k);V(f,g);var k=f.evaluate();k.Ia&&(c=Na(k.value))}return a.M.has(`${e}:${d?d.hash:c}`)||c===null&&a.M.has(`${e}:`)?!1:R(a,b,c,d)}}function fg(a){for(var b=0;b<a.ba.length;b++)eg(a,a.ba[b].event,a.ba[b].value,a.ba[b].Tb)}
function gg(a,b){var c=null;a.hb.forEach(function(d){d.id==b&&(c=d)});return c}
async function hg(a,b,c){let d=null;const e=a.L[b];if(e){var f=!1,g;for(g in e)try{if(e.hasOwnProperty(g)){var h=e[g];d=g;if(!h.Qc||a.kb){var k=h.event;V(k,b);h.la=!h.la||h.la<c?c:h.la;a.oe=g;var l=k.evaluate();a.oe=null;l.Ia&&(l.Sa&&(l.Sa={hash:await Qb(a.J.g.G.stringify(l.Sa,Zb)),value:l.Sa}),R(a,h,l.value,l.Sa,l.pg)&&(f=!0))}}}catch(n){if(!a.Ba){a.Ba=!0;console.error(`Error evaluating Quantum Event${d?` (id: ${d})`:""}: `,n);var m=Error();ig(a.J,"EventEngine--"+n+":"+b+":EventId="+d+"\n"+(m.stack?
m.stack.toString():""))}}if(f){for(g in a.K)a.K.hasOwnProperty(g)&&a.K[g]&&V(a.K[g].event,"event");b!=="timeline"&&hg(a,"timeline",a.J.g.W.Z())}}}
function jg(a,b){const c=new Set;a.kb=b;b.E.forEach(function(d){d={id:d.i,value:d.v,timeStamp:d.t,Rg:d.c,hash:d.h};a.hb.push(d);var e=d.id,f=a.pa[e];f&&c.add(f);!f&&e<0&&$f.has(e)&&(f=Object.assign(d,$f.get(e)));if(f&&!f.ja||!f)f&&bg(a,f),a.ka[e]=1;f&&f.ja===2&&a.M.add(`${e}:${d.hash||d.Rg||d.value}`);f&&f.xa===2&&(a.B[e]||(a.B[e]={}),a.B[e][d.hash||d.Rg||d.value]=1)});for(const d of c)ee(d.event,d,{hb:a.hb});fg(a);hg(a,"eventinfo",a.J.Cb)}
function kg(a,b){a.tg=(b.id?"#"+b.id:b instanceof window.HTMLElement&&a.J.g.G.innerText(b))||a.J.g.G.textContent(b);a.Qb=b;a.sd=b;a.J.oa.lastClicked=b;hg(a,"clicked",a.J.g.W.Z());a.sd=null}function lg(a,b){a.Pe=b;a.J.oa.lastField=b;hg(a,"fieldFilled",a.J.g.W.Z())}function ag(a,b){return a.J.Ua&&(b.flags&2||b.flags&4||b.flags&8||b.flags&16||b.flags&131072||b.flags&256)?!0:!1}
async function cg(a,b,c,d,e=!1){if(ag(a,b)){var f=await a.J.ua.encrypt(d);d=await Zd(a.J.ua,d);f&&(c.qenc=f,c.v=d)}a.J.Ja.qb(`event-engine:${b.id}`,c);e?mg(a.J,{i:c.i,t:c.t,f:0,v:""}):X(a.J,"E",c)}
class ng{constructor(a,b){this.kb=this.oe=null;this.hb=[];this.J=a;this.L={};this.K={};this.pa={};this.Mc=this.td=this.Fa=this.Qe=this.Se=this.Pe=this.sd=this.Qb=this.tg=null;this.M=new Set;this.B=[];this.ba=[];this.ka={};this.Ba=!1;this.da={};this.Na=b;this.ta=new be(this.J,this.J.g.G,this.Wa.bind(this));this.load(this.J.Ca,this.Na)}me(){this.ta.me()}load(a,b){if(b=b.events)for(let c=0;c<b.length;++c){let d;try{d=b[c];if(!d)continue;if(this.da[d.u]&&this.da[d.u]==="n")continue;if(!this.da[d.u]&&
!(new RegExp(d.u)).test(a)){this.da[d.u]="n";continue}this.da[d.u]="y";const e=d.i,f={id:e,Pd:d.oid,xa:!!d.m,ja:d.s,flags:d.f,Qc:d.sessionInfoReq,Yh:d.evalAlways?!d.evalAlways:!0,rh:d.excludeBlank,Zh:0,event:dg(this,d.v)};if(f.ja==2||f.ja==0)f.Qc=!0;f.xa>0&&f.ja==2&&(f.xa=2);const g=f.Ig=U(f.event);for(const h in g){if(!g.hasOwnProperty(h))continue;let k=this.L[h];k||(k=this.L[h]={});k[e]=f}this.K[e]=f;this.pa[e]=f}catch(e){console.error(`QM: failed to load event${d&&d.i?` (id: ${d.i})`:""}:`,e)}}}cf(){hg(this,
"pageready",this.J.Cb);hg(this,"dom",this.J.Cb)}jb(){hg(this,"engagement",this.J.g.W.Z())}Wa(a){this.hb.push(a)}};function og(a,b){"persist"in a.B||(a.B.persist=[]);a.B.persist.push(b)}class pg{constructor(){this.B={}}qb(a,b){a in this.B&&this.B[a].forEach(c=>c(b))}};function qg(a,b){a.B={};try{const c=rg(a);for(let d=0;d<c.length;d++){const e=a.Oa.Storage.getItem.call(window[c[d]],b);if(e){a.B=a.Oa.Ma(e);break}}}catch(c){}sg(a,a.B)&&a.clear()}function tg(a){try{window.addEventListener("storage",b=>{b.key==a.K&&qg(a,a.K)})}catch(b){}}function sg(a,b){if(b=E(b,["exp"],!1))if(b=new a.Oa.ma.contentWindow.Date(b),a.J.g.W.Z()>b.getTime())return!0;return!1}function rg(a){return a.J.D.config[a.ba].filter(b=>b=="localStorage"||b=="sessionStorage")}
function ug(a,b,c=null,d=!0){try{const e=a.Oa.stringify(a.B),f=rg(a);for(let g=0;g<f.length;g++)a.Oa.Storage.setItem.call(window[f[g]],c||a.K,e);d&&a.M.qb("persist",b)}catch(e){}}
class vg{constructor(a,b,c,d){this.J=a;this.K=b;this.ba=c;this.B=null;this.M=new pg;this.Oa=d;qg(this,this.K);tg(this)}get(a,b){sg(this,this.B)&&this.clear();return E(this.B,a,b)}set(a,b){if(typeof a!=="string")throw Error("path must be a string");ya(this.B,a,b);ug(this,{t:"set",path:a,value:b});return!0}ib(a){za(this.B,a)&&ug(this,{t:"set",path:a,value:null})}import(a){this.B={...this.B,...a};ug(this,"import")}clear(){this.B={};ug(this,"clear")}archive(a){ug(this,"archive",a,!1)}restore(a){qg(this,
a);ug(this,"restore",this.K,!0)}};function wg(a,b,c){return new Promise(function(d,e){function f(q){d({Ld:q})}async function g(){try{await navigator.storage.getDirectory(),f(!1)}catch(q){const t=(q instanceof Error&&typeof q.message==="string"?q.message:String(q)).includes("unknown transient reason");f(t)}}function h(){const q=String(Math.random());try{const t=indexedDB.open(q,1);t.onupgradeneeded=C=>{C=C.target.result;try{C.createObjectStore("t",{autoIncrement:!0}).put(new Blob),f(!1)}catch(B){(B instanceof Error&&typeof B.message===
"string"?B.message:String(B)).includes("are not yet supported")?f(!0):f(!1)}finally{C.close(),indexedDB.deleteDatabase(q)}};t.onerror=()=>f(!1)}catch(t){f(!1)}}async function k(){var q;if(typeof((q=navigator.storage)==null?void 0:q.getDirectory)==="function")await g();else if(navigator.maxTouchPoints!==void 0)h();else a:{q=window.openDatabase;const t=window.localStorage;try{q(null,null,null,null)}catch(C){f(!0);break a}try{t.setItem("test","1"),t.removeItem("test")}catch(C){f(!0);break a}f(!1)}}function l(){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(q,
t){q=Math.round(t/1048576);t=Math;var C=t.round;let B,w,z;var u=(z=window==null?void 0:(B=window.performance)==null?void 0:(w=B.memory)==null?void 0:w.jsHeapSizeLimit)!=null?z:1073741824;f(q<C.call(t,u/1048576)*2)},function(q){e(Error("detectIncognito somehow failed to query storage quota: "+q.message))})}function m(){const q=window.webkitRequestFileSystem;q(0,1,function(){f(!1)},function(){f(!0)})}async function n(){var q;if(typeof((q=navigator.storage)==null?void 0:q.getDirectory)==="function")try{await navigator.storage.getDirectory(),
f(!1)}catch(t){q=(t instanceof Error&&typeof t.message==="string"?t.message:String(t)).includes("Security error"),f(q)}else{const t=indexedDB.open("inPrivate");t.onerror=C=>{t.error&&t.error.name==="InvalidStateError"&&C.preventDefault();f(!0)};t.onsuccess=()=>{indexedDB.deleteDatabase("inPrivate");f(!1)}}}a?k():b?self.Promise!==void 0&&self.Promise.allSettled!==void 0?l():m():c?n():navigator.msSaveBlob!==void 0?f(window.indexedDB===void 0):e(Error("detectIncognito cannot determine the browser"))})}
;function P(a,b,c,d="info"){b={t:"m",ctx:a.De(),sub:a.sub,n:b,v:c,l:d};a.log(b)}class xg{constructor({G:a,D:b,sub:c,De:d}){this.G=a;this.B="";this.sub=c;this.De=d;b.config.ingestBaseURL&&(this.B=b.config.ingestBaseURL.replace(/\/+$/,"")+"/lgs/api/v1/logs")}log(a){return this.B?window.navigator.sendBeacon(this.B,this.G.stringify(a)):!1}};class yg{constructor(a,b){this.$=b;this.B=a}transform(a,b){if(!a.hasAttribute(b))return null;const c=a.getAttribute(b),d=this.B.find(({wd:e,Ea:f})=>e===b&&this.$.g.ga.matchesSelector(a,f));return d?{name:d.Bg||b,value:c.replace(d.fb,d.Td)}:{name:b,value:c}}};const zg=":checked :empty :host :invalid :last-child :modal :nth-child(n) :only-child :read-only".split(" ").sort(),Ag={'"':"&quot;",">":"&gt;",":":"&#58;","\u00a7":"&sect;","[":"&#91;","]":"&#93;","&":"&amp;"},Bg=/:|>|"|\u00a7|\[|]|&/g;
function Cg(a,b,c){if(b===document)return"html";var d=new yg(c.jh,a.$);const e=Y(a.$,b).toLowerCase();var f=a.$.g.G.parentNode(b);let g=a.$.g.G.parentElement(b),h=">";g||(g=f&&f.host)&&(h=">\u00a7>");f=g?Array.from(a.$.g.G.children(g)):[b];const k=f.indexOf(b);let l=e;var m={};for(let n=0;n<c.Yf.length;++n){const q=c.Yf[n];if(b.hasAttribute(q)&&!Dg(a.$,b,q))switch(q){case "class":if(b.classList.length===0)continue;const {name:t,value:C}=d.transform(b,q);if(t==="class"){a.B.setAttribute("class",C);
m[t]=Array.from(a.B.classList).sort().join(" ").replace(Bg,function(z){return Ag[z]});continue}m[t]=C.replace(Bg,function(z){return Ag[z]});break;default:const {name:B,value:w}=d.transform(b,q);m[B]=w.replace(Bg,function(z){return Ag[z]})}}Object.entries(m).sort(([n],[q])=>n<q?-1:1).forEach(([n,q])=>{l+=`[${n}="${q}"]`});for(d=0;d<zg.length;++d)switch(m=zg[d],m){case ":checked":b.checked===!0&&(l+=m);break;case ":empty":a.$.g.ga.matchesSelector(b,":empty")&&(l+=m);break;case ":host":b.shadowRoot&&
(l+=m);break;case ":invalid":try{b.validity&&!b.validity.valid&&(l+=m)}catch(n){}break;case ":last-child":f.length-1===k&&(l+=m);break;case ":modal":e==="dialog"&&a.$.g.supports.Xe&&a.$.g.ga.matchesSelector(b,":modal")&&(l+=m);break;case ":nth-child(n)":l+=`:nth-child(${k+1})`;break;case ":only-child":f.length===1&&(l+=m);break;case ":read-only":["input","textarea"].includes(e)&&a.$.g.ga.matchesSelector(b,m)&&(l+=m)}return g?`${Cg(a,g,c)}${h}${l}`:l}
function Eg(a,b){return Cg(a,b,{Yf:a.$.D.config.elementVeinAttributes,jh:a.$.D.R.Eb})}class Fg{constructor(a){this.$=a;this.B=a.g.G.createElement("div")}};const Gg=/[^\s]/g,Hg=a=>typeof a!=="string"?a:a?a.replace(Gg,"*"):"";const Ig=/(?:\s{2,}|\n|\t|\r)/g;
function Jg(a,b){const c=a.$;let d="";d=(c.g.G.tagName(b).toLowerCase()==="slot"?b.assignedNodes():[b]).reduce((e,f)=>{if(e.length>100)return e;if(f.nodeType===3){var g=a.$,h=g.g.G.textContent(f);f.nodeType===3&&(Kg(g,f)||Lg(g,f))&&(h=Hg(h));return`${e} ${h}`}for(f=document.createTreeWalker(f,window.NodeFilter.SHOW_TEXT);f.nextNode()&&e.length<100;)if(g=f.currentNode,h=Y(c,c.g.G.parentNode(g)),h!=="style"&&h!=="script"){h=c.g.G.textContent(g);if(Kg(c,g)||Lg(c,g))h=Hg(h);h.length&&(e=`${e} ${h}`)}return e},
"");d=d.replace(Ig," ").trim().substring(0,100);return Na(d)}class Mg{constructor(a){this.$=a}};const Ng=new Map,Og=/,(?!(?:[^[\]]+\])|(?:[^()]+\)))\s*/g,Pg=/(?:^|\s)S#(?:\s|$)/,Qg=a=>{Ng.has(a)||Ng.set(a,a.split(Og));return Ng.get(a)},Rg=(a,b="")=>{if(a.parentRule){const c=Array.from(a.parentRule.cssRules).indexOf(a);b=b?`${c} ${b}`:c+"";return Rg(a.parentRule,b)}a=Array.from(a.parentStyleSheet.cssRules).indexOf(a);return b?`${a} ${b}`:a+""};function Sg(a,b){a.B.push(b);return a.B.length-1}function Tg(a){return a.mode[a.mode.length-1]}function Ug(a,b){const c=Tg(a);if(b.nodeType!==1)var d=null;else d=a.na.get(b)||{},d=d.Pc===!1?!1:a.Od||d.Pc===!0?!0:a.Hb(b);if(d)a.mode.push("scrub");else{const e=a.na.get(b)||{};b=e.encrypt===!0?!0:e.encrypt===!1?!1:a.Gb(b);c==="scrub"&&d===!1?b?a.mode.push("encrypt"):a.mode.push(null):b&&c!=="scrub"?a.mode.push("encrypt"):c==="encrypt"&&b===!1?a.mode.push(null):a.mode.push(c)}}
class Vg{constructor(a){this.G=a.G;this.na=a.na;this.Od=a.Od;this.Ie=a.Ie;this.Wd=a.Wd;this.Vd=a.Vd;this.url=a.url;this.ae=a.ae;this.Hb=a.Hb;this.Gb=a.Gb;this.rb=a.rb;this.supports=a.supports;this.aa=a.aa;this.ea=a.ea;this.mode=[null];this.Bb=0;this.namespaceURI=null;this.B=[];this.Zd=[]}};const Xg=(a,b)=>{const c=[];for(let d=0;d<a.length;++d){const e=Wg(a[d],b);e!==null&&c.push(e)}return c},Yg=(a,b)=>{const c=b.namespaceURI;Ug(b,a);var d=Tg(b);const e=b.na.get(a)||{};var f=!1;let g=null;a instanceof window.HTMLElement||a.namespaceURI==="http://www.w3.org/1999/xhtml"||(g=a.namespaceURI);const h=g?b.G.tagName(a):b.G.tagName(a).toUpperCase(),k={n:h,q:b.aa(a).ea};h==="SCRIPT"&&(f=!0);h==="DIALOG"&&b.supports.Xe&&b.G.matches(a,":modal")&&(k.m=!0);a.hasAttribute("popover")&&b.supports.Eg&&
b.G.matches(a,":popover-open")&&(k.pop=!0);(h==="STYLE"&&a.sheet&&a.sheet.cssRules.length||h==="LINK")&&b.Zd.push({node:a,gb:k});g!==c&&(b.namespaceURI=g,k.N=g);b.$e=h;k.a=f?[]:Xg(a.attributes,b);b.$e=null;h==="IFRAME"&&typeof b.jc==="string"&&k.a.push({2:{n:"qframe",v:b.jc}});f={};if(h==="INPUT"){const l=a.type.toLowerCase();if(l==="checkbox"||l==="radio"){const m=a.getAttribute("checked"),n=a.checked;m!==null&&n===!1&&(f.checked=!1);m===null&&n===!0&&(f.checked=!0)}if(l==="date"||l==="datetime-local"||
l==="month"||l==="number"||l==="time"||l==="week"){for(const m of k.a)if(m[2].n.toLowerCase()==="type"){m[2].v="text";break}k.a.push({2:{n:"data-qm-original-type",v:l}})}}(h==="STYLE"&&!g||h==="LINK")&&a.disabled&&(f.disabled=!0);Object.keys(f).length&&(k.po=f);"value"in a&&$b(a.value)&&(d==="scrub"?k.vm=Hg(a.value):d==="encrypt"?(k.vm=Hg(a.value),k.ve=Sg(b,a.value)):k.v=a.value);(d=b.G.shadowRoot(a))&&(k.sr=Wg(d,b));d=b.G.childNodes(a);d.length&&!e.qh&&(h==="TITLE"&&b.Vd&&(d=[document.createTextNode(b.url)]),
k.C=Xg(d,b));h==="SLOT"&&b.G.getRootNode(a).slotAssignment==="manual"&&(a=a.assignedNodes({flatten:!0}).map(l=>b.Ie(l)).filter(Boolean),a.length&&(k.sn=a));b.namespaceURI=c;b.mode.pop();return k},Zg=(a,b)=>{const c=Tg(b),d={q:b.aa(a).ea};a.nodeValue&&(c==="scrub"?d.vm=Hg(a.nodeValue):c==="encrypt"?(d.vm=Hg(a.nodeValue),d.ve=Sg(b,a.nodeValue)):d.v=a.nodeValue);return d},$g=(a,b)=>{const c={q:b.aa(a).ea};b.Zd.push({node:a,gb:c});a=b.G.childNodes(a);a.length&&(c.C=Xg(a,b));return c},Wg=(a,b)=>{var c=
a.nodeType;if(c===1||c===3||c===8||c===9||c===11)b.aa(a).ea=b.ea();var d=b.ae[c];d&&(c===1&&b.Bb++,d(a,b));switch(a.nodeType){case 1:return{1:Yg(a,b)};case 2:{c=Tg(b);d=b.na.get(a.ownerElement)||{};let f=a.name,g=a.value,h=f.toLowerCase();if(b.rb.has(f)||ta.has(h)||d.rb&&d.rb.includes(f)||b.$e==="IFRAME"&&(h==="sandbox"||h==="srcdoc"))a=null;else{b.$e==="IFRAME"&&f==="src"&&(f="data-original-src");var e=d.pf||[];for(const {wd:k,fb:l,Td:m,Bg:n}of e)f===k&&(n&&(f=n,h=f.toLowerCase()),g=g.replace(l,
m));e={n:f};if(h==="integrity")e.v="";else{if(g){let k=!0;h==="data-select-value"||h==="placeholder"||h==="value"||h==="label"?c==="scrub"?(e.vm=Hg(g),k=!1):c==="encrypt"&&(e.ve=Sg(b,g),k=!1):d.Cd&&d.Cd.includes(f)&&(e.ve=Sg(b,g),k=!1);k&&(e.v=g)}a.namespaceURI&&(e.N=a.namespaceURI)}a=e}}return a===null?null:{2:a};case 3:return{3:b.G.tagName(b.G.parentNode(a))==="SCRIPT"?{v:" "}:Zg(a,b)};case 4:return{4:Zg(a,b)};case 5:return{5:{}};case 6:return{6:{p:a.publicId,s:a.systemId}};case 7:return{7:{t:a.target,
d:a.data}};case 8:return{8:b.Wd?{v:"",q:b.aa(a).ea}:Zg(a,b)};case 9:return{9:$g(a,b)};case 10:return b={n:a.name,p:a.publicId,s:a.systemId},a.Ah&&(b.is=a.Ah),{a:b};case 11:return b=$g(a,b),b.sa=a.slotAssignment,{b};case 12:return c={p:a.publicId,s:a.systemId},a=b.G.childNodes(a),a.length&&(c.C=Xg(a,b)),{c}}};class ah{constructor(){this.Eg=this.Xe=!0;try{document.documentElement.matches(":modal")}catch(a){this.Xe=!1}try{document.documentElement.matches(":popover-open")}catch(a){this.Eg=!1}}};class bh{constructor(a){this.G=a}matchesSelector(a,b){if(a.nodeType!==1)return!1;if(!a.getRootNode)return this.G.matches(a,b);b=Qg(b);for(const c of b){a:{b=a;const d=c.split(Pg);for(let e=d.length-1;e>=0;--e){if(!this.G.matches(b,d[e])){b=!1;break a}b=this.G.getRootNode(b).host;if(!b&&e!==0){b=!1;break a}}b=!0}if(b)return!0}return!1}querySelector(a,b){return this.querySelectorAll(a,b)[0]}querySelectorAll(a,b){var c=Qg(b);b=[];const d=[];for(const e of c){c=e.split(Pg);if(c.length<2){d.push(e);continue}let f=
[...this.G.lb(a,c[0])];for(let g=1;g<c.length;++g){const h=c[g];f=[].concat(...f.map(k=>this.G.shadowRoot(k)?[...this.G.lb(this.G.shadowRoot(k),h)]:[]))}b=b.concat(f)}d.length>0&&(b=b.concat([...this.G.lb(a,d.join(","))]));return b}closest(a,b){return b?Qg(b).map(c=>({node:a,Be:c.split(Pg)})).sort((c,d)=>d.Be.length-c.Be.length).map(({node:c,Be:d})=>{var e=c;c=d.length-1;a:for(;e;){let f=e.closest(d[c]);if(f){--c;for(e=f;c>=0;){e=e.getRootNode?e.getRootNode().host:null;if(!e)return null;if(!this.G.matches(e,
d[c])){c=d.length-1;continue a}--c}e=f;break}else e=e.getRootNode?e.getRootNode().host:null}return e}).reduce((c,d)=>{if(!d)return c;if(!c)return{node:d,depth:Pa(d)};const e=Pa(d);return e>c.depth?{node:d,depth:e}:c},{node:null,depth:0}).node:null}};class ch{constructor(a,b){this.G=a;this.D=b}domain(){try{var a=this.D.config.cookieDomain;if(a!==null&&a!==void 0)return this.D.config.cookieDomain;var b=this.G.Storage.getItem.call(window.sessionStorage,"qmd");if(b!==null&&b!==void 0)return this.D.config.cookieDomain=b;const c=window.location.host.split(":")[0].split(".");a=null;for(b=2;b<=c.length;b++){const d=c.slice(Math.max(c.length-b,0)).join(".");this.set({["qm-rc"]:"",domain:d});if(this.getAll().indexOf("qm-rc")>-1){a=d;break}}if(a!==null)return this.ib({["qm-rc"]:"",
domain:a}),this.G.Storage.setItem.call(window.sessionStorage,"qmd",a),this.D.config.cookieDomain=a}catch(c){}return window.location.host}set(a){a.path="/";if(!a.domain){var b=this.domain();a.domain=b}b=[];for(let c in a)a.hasOwnProperty(c)&&b.push(`${c}=${a[c]}`);window.location.protocol=="https:"&&(b.push("secure"),b.push(`samesite=${this.D.config.sameSiteFlag}`));b.push("");this.G.qa.set(b.join(";"))}ib(a){this.set({...a,expires:"Thu, 01 Jan 1970 00:00:00 GMT"})}get(a){var b=this.getAll();b=Object.entries(Oa(b));
for(let [c,d]of b)if(decodeURIComponent(c)===a)return decodeURIComponent(d);return null}getAll(){return this.G.qa.get()}};class dh extends Error{constructor(a){super(a)}}class eh extends Error{constructor(a){super(a)}}class fh extends Error{constructor(){super()}}
function gh(a,b,c,d,e){a.B>0&&(c.E=a.B);let f=ub(a.D.config,a.sub);f+=`?${Fa(c)}`;f=new URL(f,window.location.href);var g={};e&&(g["Content-Type"]=e);g=new a.G.ma.contentWindow.Request(f.href,{method:b,headers:g,body:d,credentials:"omit"});return a.G.ma.contentWindow.fetch(g).then(h=>{if(h.status!==200){const k=f.searchParams;throw new dh("XHR_STATUS="+h.status+"-for-"+k.get("b")+"-"+k.get("S")+"-"+k.get("u")+"-"+`Q:${k.get("Q")||"-"}`+"-"+h.status||"NA");}a.B=0;return h}).catch(h=>new Promise((k,
l)=>{if(a.B<a.D.config.sendRetries)++a.B,setTimeout(()=>{gh(a,b,c,d,e).then(k).catch(l)},1500*a.B);else{var m=d?d.byteLength||d.size||d.length||"?":0;l(new eh(h instanceof dh?h.message:`FETCH_ERROR=${h.name}:${h.message}-SIZE=${m}`))}}))}function hh(a,b,c){return gh(a,"PATCH",b,c,"application/json")}class ih{constructor(a,b,c){this.G=a;this.D=b;this.sub=c;this.B=0}get(a){return gh(this,"GET",a)}};async function jh(a,b){b=(new TextEncoder).encode(b);const {readable:c,writable:d}=new window.CompressionStream("deflate"),e=d.getWriter();e.write(b);e.close();return new Uint8Array(await (new a.G.ma.contentWindow.Response(c)).arrayBuffer())}
class kh{constructor(a,b,c,d,e){this.J=a;this.D=c;this.G=e;this.ba=d;this.K=this.B=0;this.M=b}async send(a){const b=this,c=this.B++;var d=a;const e=a.length,f=this.M(c);f.S=this.K;f.b=e;f.z=2;if(this.D.config.enableCompression&&"CompressionStream"in window&&"TextEncoder"in window&&!b.J.jb)try{d=await jh(this,d),f.z=1}catch(g){}if(b.J.jb)d=Fa(f),window.navigator.sendBeacon(ub(b.D.config,b.J.sub)+"?"+d,a)||Tb(b.J,"DATA_LOSS",`sendBeacon failed to send ${e/1E3}kb on unload`);else return gh(b.ba,"POST",
f,d,"text/plain").then(async g=>{if(c===0&&!f.Q){g=await g.text();if(g==="<>")throw new fh;return g}b.K+=e})}};const lh=a=>a.toLowerCase().split("/").filter(b=>b);function mh(a){window.addEventListener("message",async b=>{var c=b.data;if(c&&typeof c=="object"&&c.namespace==="quantum"&&c.messageId!==void 0){const {method:e,url:f,body:g,messageId:h,response:k,error:l}=c;var d=lh(f);if(d[d.length-1]==="connect"||c.scope===a.sub)if(a.B.size>50&&P(a.ca,"MessageHandler: high message count",{size:a.B.size},"warn"),k){if(g&&!g.ack&&P(a.ca,"MessageHandler:missing ack",{method:e,url:f},"error"),c=a.B.get(h))l?c.reject(l):c.resolve(g),a.B.delete(h)}else{d=b.source;let m=
void 0,n=void 0;try{n=await nh(a,{method:e,url:f,body:g,context:{frame:()=>oh(a,b),sender:d,scope:c.scope}})}catch(q){m=q}n===void 0&&m===void 0||d.postMessage({messageId:h,method:e,url:f,body:n,response:!0,error:m,namespace:"quantum",scope:a.sub},"*")}}},!1)}function ph(a,b,c){a=a.G.lb(b,"iframe, frame");for(const d of a)if(d.contentWindow===c)return d;return null}
function oh(a,b){return new Promise(c=>{const d=(e=0)=>{if(e>a.Ab)c(null);else{var f=ph(a,document,b.source);if(f)return c(f),f;for(const g of a.Vb)if(f=ph(a,g,b.source))return c(f),f;setTimeout(d,a.Db,e+1)}};d()})}async function nh(a,b){const c=b.method;var d=b.url;const e=b.body;b=b.context;if(typeof c!=="string"||typeof d!=="string")throw Error("MessageHandler:400");d=lh(d);a=E(a.cb,[c.toUpperCase(),...d],null);if(a===null)throw Error("MessageHandler:404");return await a(e,b)}
function qh(a,b,{method:c,url:d,body:e}){const f=Ea(),g=new wb;a.B.set(f,g);const h=(k=0)=>{try{b.postMessage({messageId:f,method:c,url:d,body:e,namespace:"quantum",scope:a.sub},"*")}catch(l){P(a.ca,"MessageHandler: unable to post message",{message:l.message,url:d,method:c},"error")}setTimeout(()=>{if(a.B.get(f)){const l=k+1;l>a.Ab?(g.reject(Error("MessageHandler:timeout")),a.B.delete(f)):h(l)}},a.Db)};h();return g.promise}
class rh{constructor(a={}){this.ca=a.ca;this.sub=a.sub;this.G=a.G;this.cb=a.cb;this.Vb=a.Vb;this.Ab=a.Ab||5;this.Db=a.Db||500;this.B=new Map;mh(this)}};function sh(a){typeof a.La.handleAndroidMessage==="undefined"&&(a.La.handleAndroidMessage=b=>{window.dispatchEvent(new CustomEvent("qm-android-sdk-message",{detail:{message:b}}))});window.addEventListener("qm-android-sdk-message",b=>{({detail:{message:b}}=b);const c=a.G.Ma(b);if(c&&typeof c=="object"&&c.namespace==="quantum"&&c.messageId!==void 0){const {method:d,url:e,body:f,messageId:g,response:h,error:k}=c;b=lh(e);if(b[b.length-1]==="connect"||c.scope===a.sub)if(a.B.size>50&&P(a.ca,"AndroidHandler:high message count",
{size:a.B.size}),h){if(f.ack||P(a.ca,"AndroidHandler:missing ack",{method:d,url:e}),b=a.B.get(g))k?b.reject(k):b.resolve(f),a.B.delete(g)}else(async()=>{let l=void 0,m=void 0;try{m=await th(a,{method:d,url:e,body:f,context:{scope:c.scope}})}catch(n){l=n.message}m===void 0&&l===void 0||a.La.postMessage(a.G.stringify({messageId:g,method:d,url:e,body:m,response:!0,error:l,namespace:"quantum",scope:a.sub}))})()}else P(a.ca,"AndroidHandler:invalid message")})}
async function th(a,b){const c=b.method;var d=b.url;const e=b.body;b=b.context;if(typeof c!=="string"||typeof d!=="string")throw Error("AndroidHandler:400");d=lh(d);a=E(a.cb,[c.toUpperCase(),...d],null);if(a===null)throw Error("AndroidHandler:404");return await a(e,b)}
function uh(a,{method:b,url:c,body:d}){const e=Ea(),f=new wb;a.B.set(e,f);a.La.postMessage(a.G.stringify({messageId:e,method:b,url:c,body:d,namespace:"quantum",scope:a.sub}));setTimeout(()=>{a.B.get(e)&&(f.reject(Error("AndroidInterface:timeout")),a.B.delete(e))},a.timeout);return f.promise}class vh{constructor(a={}){this.ca=a.ca;this.sub=a.sub;this.G=a.G;this.cb=a.cb;this.La=a.La;this.timeout=a.timeout||3E3;this.B=new Map;sh(this)}};function wh(a,{method:b,url:c,body:d}){const e=Ea(),f=new wb;if(!a.La)return f.reject(Error("IosInterface:404")),f.promise;a.La[e]=({body:g,error:h})=>{h?f.reject(h):f.resolve(g);delete a.La[e]};a.La.postMessage({messageId:e,scope:a.sub,method:b,url:c,body:d});setTimeout(()=>{a.La[e]&&f.reject(Error("IosInterface:timeout"))},a.timeout);return f.promise}class xh{constructor(a={}){this.La=a.La;this.ca=a.ca;this.sub=a.sub;this.timeout=a.timeout||3E3}};class yh{constructor(){this.B=[]}addEventListener(a,b,c={}){let d=this.B[a];d||(d=this.B[a]=[]);({once:a=!1}=c);d.push({ag:b,once:a})}removeEventListener(a,b){const c=this.B[a];c&&(this.B[a]=c.filter(function({ag:d}){return d!=b}))}qb(a,b){const c=this.B[a];c&&c.forEach(({ag:d,once:e})=>{d(b);e&&this.removeEventListener(a,d)})}};class zh{sample(a,b){const c=d=>{if(Math.random()<a)try{d()}catch(e){}};return b?c(b):c}};const Ah=(a,b)=>{switch(b){case "n":a=parseFloat(a);break;case "i":a=parseInt(a,10);break;case "s":a=`${a}`;break;case "b":a=a==="true"?!0:a==="false"?!1:a===1||a==="1"?!0:a===0||a==="0"?!1:!!a;break;case "d":b=new Date(a);isNaN(b.getTime())||(a=b.toISOString().slice(0,10));break;case "dt":b=new Date(a),isNaN(b.getTime())||(a=b.toISOString())}return a};const Bh={namespace:"alloy",tenant:null,prefix:null,mapping:{}},Ch=a=>{if(a.mapping){const {datastreamId:b,map:c,namespace:d}=a.mapping;a.datastreamId=b;a.mapping=c||Bh.mapping;a.namespace=d||Bh.namespace}return a};function Dh(a){if(a.K!==null&&a.ia!==null&&a.wa!==null){a.M={ecid:a.K,qmUserIdCookie:a.wa,qmSessionIdCookie:a.ia,qmSessionReplayLink:a.J.oa.getReplay()};for(const [b,c,d,e]of a.buffer)try{Eh(a,b,c,d,e)}catch(f){console.warn("Could not send buffered event")}a.buffer=[]}}function Fh(a,b=0){const c=window[a.B.config.namespace];c?(a.ba=c,c("getIdentity").then(d=>{a.K=d.identity.ECID;Dh(a)})):b>10?a.disabled=!0:setTimeout(()=>{Fh(a,b++)},500)}function Gh(a,b){a.ia=b;Dh(a)}
function Hh(a,b){a.wa=b;Dh(a)}function Eh(a,b,c,d,e){if(a.M===null)a.buffer.push([b,c,d,e]);else{var f=Ih(a);c=Jh(a,c,d,e);d=[a.da,a.B.config.prefix,"qmMetadata"].filter(Boolean);ya(b.xdm,d,{...a.M,...f,...c});a.B.config.datastreamId&&(b.edgeConfigOverrides={datastreamId:a.B.config.datastreamId});a.ba("sendEvent",b).catch(g=>{console.warn("QM: Unable to send mapped data to Adobe:",g.message);P(a.J.ca,"ADOBE:send-failure",{message:g.message})})}}
function Ih(a){a=a.J.Ca;const b=new URL(a);return{url:`${b.origin}${b.pathname}`,urlFull:a,urlPath:b.pathname,urlParameters:b.searchParams.toString()}}function Jh(a,b,c,d){a=a.J.we[b.toString()]||"UNKNOWN";return{eventName:d?"":a,eventValue:d?"":c.toString(),errorName:d?a:"",errorValue:d?c.toString():""}}
function Kh(a,{object:b,Fg:c,handle:d,event:e,wh:f=null,recursive:g=!1}){for(const k of c){const {q:l,a:m,"a-":n,t:q,v:t,s:C,p:B}=k;t!==void 0?c=t:l.startsWith("$")?(c=f,c=E(c,l.substring(2).split("."),O)):(c=e,c=E(c,l.split("."),O));if(c!==null&&c!=="")if(c===O)P(a.J.ca,"ADOBE:mapping-failure",{item:d,key:l,issue:"key not found"});else{var h=void 0;if(q==="a"){if(C===void 0&&B===void 0){P(a.J.ca,"ADOBE:schema-failure",{item:d,key:l,issue:"schema|primitive missing for array handling"});continue}if((C||
B)&&!Array.isArray(c)){P(a.J.ca,"ADOBE:array-failure",{item:d,key:l,issue:"Cannot create mapped array from a non-array event value"});continue}if(B)h=c.map(w=>Ah(w,B));else if(C){h=[];for(const w of c)try{c={},Kh(a,{object:c,Fg:C,handle:d,event:e,wh:w,recursive:!0}),h.push(c)}catch(z){P(a.J.ca,"ADOBE:array-mapping-failure",{item:d,key:l,message:z.message})}}}else h=Ah(c,q);typeof n==="string"?c=[...n.split(".")].filter(w=>w):(c=g?[]:[a.da,a.B.config.prefix],c=c.concat(...m.split(".")).filter(w=>w));
ya(b,c,h)}}}class Lh{constructor(a,b){this.J=a;this.B=new Ac(b,Bh,{},{},Ch,ra);zc(this.B);this.wa=this.ia=this.K=this.M=this.ba=null;this.disabled=!1;this.buffer=[]}get da(){const a=this.B.config.tenant;return a?a.startsWith("_")?a:`_${a}`:a}};function Mh(a){a.Aa.forEach(b=>{b.$a.forEach((c,d)=>{c.interval&&(Nh(a,b,c),a.K.add(d))})})}function Oh(a){a.K.forEach(b=>{for(const [,c]of a.Aa)if(c.$a.has(b)){b=c.$a.get(b);b.Nc=a.J.g.G.ma.contentWindow.Date.now();Ph(a,c,b);break}});a.K.clear()}
function Qh(a,b){a.B.get(b)&&(a.J.D.config.zones.forEach(c=>{const {sel:d,name:e,threshold:f}=c;c=a.J.g.ga.querySelectorAll(b,d);c.length>1&&!e.includes("#")&&!e.includes("[")&&P(a.J.ca,"zones: multiple nodes found with non-placeholder name",{sel:d,name:e,count:c.length},"warn");(c.length>1&&!e.includes("#")&&!e.includes("[")?[c[0]]:c).forEach((g,h)=>{var k=e;if(k.includes("#"))k=k.replace("#",h+1);else if(k.includes("[")){a:{k=k.split("[").pop().split("]").shift();let l=g.getAttribute(k);if(!l){const m=
g.querySelector(`[${k}]`);if(m&&(l=m.getAttribute(k),!l)){k=!1;break a}}k=l}k||(P(a.J.ca,"zones: unable to get zone name from attribute",{sel:d,name:e},"warn"),k=`${k}[${h+1}]`)}h=Eg(a.J.g.Wc,g);a.Aa.has(k)||a.Aa.set(k,{name:k,threshold:f,$a:new Map,ne:0,Hd:0,Ic:!1,ue:h,Mg:d,Id:null});k=a.Aa.get(k);k.$a.has(g)||(h={ue:h,interval:null,Nc:null,Ra:null,isIntersecting:!1},k.$a.set(g,h),Rh(a,g,k,h))})}),a.Aa.forEach(c=>{const d=[];c.$a.forEach((e,f)=>{a.J.g.G.isConnected(f)||c.Ic||(Nh(a,c,e),e.Ra&&(e.Ra.disconnect(),
e.Ra=null),d.push(f))});d.forEach(e=>{c.$a.delete(e)})}))}function Sh(a){const b=[],c=[];a.Aa.forEach((d,e)=>{d.Ic&&(b.push({n:e,t:d.Hd,c:d.ne,ev:d.ue,ss:d.Mg,d:d.Id}),c.push({n:e,t:d.Hd,c:d.ne,ev:d.ue,ss:d.Mg,d:d.Id}));d.Ic=!1});b.length>0&&X(a.J,"z",b);c.length>0&&N(a.J,{t:"z",z:c})}
function Th(a,b){try{let c=a.B.get(b);c||(a.B.set(b,{Za:null}),c=a.B.get(b));c.Za||(c.Za=setTimeout(()=>{Qh(a,b);c.Za=null},300));a.M===null&&(a.M=setInterval(()=>{Sh(a)},a.J.D.config.publishInterval))}catch(c){P(a.J.ca,"zones: error finding zones in document",{error:c},"error")}}function Nh(a,b,c){c.interval&&(clearInterval(c.interval),c.interval=null);Uh(a,b,c)}function Vh(a){a.Aa.forEach(b=>{b.$a.forEach(c=>{Nh(a,b,c)})});Sh(a)}
function Wh(a){a.Aa.forEach(b=>{b.$a.forEach(c=>{c.Ra&&(c.Ra.disconnect(),c.Ra=null);c.interval&&(clearInterval(c.interval),c.interval=null)})});a.Aa.clear();a.B.forEach(b=>{b.Za&&(clearTimeout(b.Za),b.Za=null)});a.B.clear();a.M!==null&&(clearInterval(a.M),a.M=null);a.K.clear()}
function Rh(a,b,c,d){!d.Ra&&window.IntersectionObserver&&(d.Ra=new window.IntersectionObserver(e=>{e.forEach(f=>{try{({isIntersecting:f}=f);if(f&&!d.isIntersecting&&(d.Nc=a.J.g.G.ma.contentWindow.Date.now(),Ph(a,c,d),c.Id===null)){const [,g]=Xh(a.J,document);c.Id=g}!f&&d.isIntersecting&&(Nh(a,c,d),a.K.delete(b));d.isIntersecting=f}catch(g){P(a.J.ca,"zones: error observing zone",{error:g},"error")}})},{root:null,threshold:c.threshold}),d.Ra.observe(b))}
function Ph(a,b,c){c.interval||(c.interval=setInterval(()=>{Uh(a,b,c)},a.J.D.config.publishInterval))}function Uh(a,b,c){c.Nc&&(a=a.J.g.G.ma.contentWindow.Date.now(),b.Hd+=D(a-c.Nc),b.Ic=!0,c.Nc=a)}class Yh{constructor(a){this.J=a;this.Aa=new Map;this.B=new Map;this.M=null;this.K=new Set;this.J.g.G.addEventListener(document,"visibilitychange",()=>{document.hidden?Mh(this):Oh(this)},!0)}};function Zh(a){let b=[],c=null;return a===null||a===void 0?function(d){if(this.$.Ka)try{$h(this,d)}catch(e){}}:function(d){this.$.Ka&&(b.push(d),c||(c=setTimeout(()=>{const e=b;b=[];c=null;$h(this,e.flat())},a)))}};function $h(a,b){a.K=a.$.g.W.Z();const c=new Set;c.add(document);a.D.R.Je.length>0&&(b=ai(a,b));const {Ub:d,...e}=bi(a,b),f=a.ba.bind(a,e);d.forEach(g=>{if(f(g)){var h=g.target;if(g.type==="attributes"){const k=h.getAttribute(g.attributeName),l=ci(a.$,h,g.attributeName,k);let m;a.G.tagName(h).toUpperCase()==="LINK"&&h.href&&h.rel.toLowerCase().includes("stylesheet")&&a.G.isConnected(h)&&g.attributeName==="href"&&(m=a.$.g.ya.Ha(h).then(n=>{n.h&&(l.v=`${vb(a.D.config)}/hashes/${a.$.sub}/${n.h}`)}));
l&&N(a.$,l,void 0,m)}else if(g.type==="characterData")(g=di(a.$,h))&&N(a.$,g);else if(g.type==="childList"&&g.action==="added")if(g.node.nodeType===3&&a.G.tagName(g.target)==="STYLE"){a.$.g.ya.unregister(g.target.sheet);const k={t:"SR",I:a.$.aa(g.target).ea};g=a.$.g.ya.Ha(g.target.sheet).then(l=>{k.v=l});N(a.$,k,void 0,g)}else h=a.$.addedNodes(g.node),N(a.$,h),ei(a.$,g.node);else if(g.type==="childList"&&g.action==="removed")if(g.node.nodeType===3&&a.G.tagName(g.target)==="STYLE"){a.$.g.ya.unregister(g.target.sheet);
const k={t:"SR",I:a.$.aa(g.target).ea};g=a.$.g.ya.Ha(g.target.sheet).then(l=>{k.v=l});N(a.$,k,void 0,g)}else(g=a.$.removedNodes(g.node))&&N(a.$,g)}});c.forEach(g=>{Qc(a.$.g.nb,g);Th(a.$.g.Aa,g)});fi(a.$)}function gi(a){const b=a.B.takeRecords();a.M(b);a.B.disconnect();a.B=null;a.observe(document);a.$.Vb.forEach(c=>{a.observe(c)})}function ai(a,b){const c=[];b.forEach(d=>{let e=!1;d.target.nodeType===1&&a.$.g.ga.matchesSelector(d.target,a.D.R.Je)&&(e=!0);e||c.push(d)});return c}
function bi(a,b){const c=new Map,d=new Map,e=new Map,f=new a.G.ma.contentWindow.WeakMap;b=b.reduce((g,h)=>{var k=h.target;if(h.type==="attributes"){var l=h.attributeName;c.has(k)||c.set(k,{});var m=c.get(k);if(!(l in m)){var n=h.oldValue;k=k.getAttribute(l);m[l]=n!==k}g.push(h);return g}if(h.type==="characterData")return d.has(k)||d.set(k,h.oldValue!==k.nodeValue),g.push(h),g;e.has(k)||e.set(k,new Map);k=e.get(k);for(m of h.addedNodes)k.has(m)||k.set(m,{je:0,Sd:0,first:null,finished:!1}),n=k.get(m),
n.first===null&&(n.first=h.addedNodes.length?"add":"remove"),hi(a,m,f),n.je++,g.push({type:h.type,target:h.target,action:"added",node:m});for(l of h.removedNodes)k.has(l)||k.set(l,{je:0,Sd:0,first:null,finished:!1}),m=k.get(l),m.first===null&&(m.first=h.addedNodes.length?"add":"remove"),hi(a,l,f),m.Sd++,g.push({type:h.type,target:h.target,action:"removed",node:l});return g},[]);return{kh:c,mh:d,nh:e,Kh:f,Ub:b}}
function hi(a,b,c){if(c.get(b)!==1){c.set(b,1);var d=a.G.childNodes(b)||[];for(let e=0;e<d.length;++e)hi(a,d[e],c);if(b.nodeType===1&&(d=a.G.shadowRoot(b)))for(c.set(d,1),d=a.G.childNodes(d)||[],b=0;b<d.length;++b)hi(a,d[b],c)}}
class ii{constructor(a,b,c,d,e){this.$=a;this.G=b;this.Ja=c;this.ca=d;this.D=e;this.M=Zh(e.config.mutationThrottle);this.B=null;this.K=0}observe(a=document){this.B||(this.B=new this.G.MutationObserver(b=>{this.$.va===y.NONE&&(this.M(b),this.Ja.qb("mutations-observed",b))}),this.Ja.addEventListener("clean-iframe-re-attached",()=>{gi(this);P(this.ca,"cleanIframeReattached",!0)},{once:!0}));this.B.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0})}ba({kh:a,
mh:b,nh:c,Kh:d},e){var f=e.target;if(e.type==="attributes"){if(this.G.tagName(f).toLowerCase()==="script"||this.G.tagName(f).toLowerCase()==="iframe"&&e.attributeName==="srcdoc"||e.attributeName==="muted"||this.D.R.ac.length>0&&this.$.g.ga.matchesSelector(f,this.D.R.ac))return!1;b=a.get(f);e=e.attributeName;(f=b[e]&&!d.has(f))&&(b[e]=!1);return f}if(e.type==="characterData")return(d=b.get(f)&&!d.has(f))&&b.set(f,!1),d;if(d.has(f))return!1;f=c.get(f).get(e.node);if(f.finished)return!1;if(f.je!==f.Sd)return f.finished=
!0;if(f.first==="add")return f.finished=!0,!1;f.Sd=0;return!0}};const ji=(a,b)=>{b.pe=a.dataScrubRE.length>0?H(a.dataScrubRE):[oa];b.kf=H(a.scrubDocumentTitlePatterns);b.Mh=H(a.urlMonitorBlacklist);b.$f=H(a.blacklistedURLs);b.Tc=H(a.startImmediatePathPatterns);b.tf=H(a.waitForSessionIdPathPatterns);b.Og=H(a.startWithoutParentPathPatterns);b.Rc=a.dataScrubBlackList.includes("*");b.zd=a.dataScrubBlackList.join(",");b.Gc=a.dataScrubWhiteList.join(",");b.Ib=a.encryptScrubList.join(",");b.Fc=a.dataEncryptWhiteList.join(",");b.Ve=H(a.maskSensitiveWindowDialogs);b.fg=
H(a.encryptSensitiveWindowDialogs);b.yg=H(a.maskSensitiveJSErrors);a.excludeDOMList&&a.excludeDOMList.length>0&&(b.ac=a.excludeDOMList.join(","));b.Zg=H(a.xhrHookWhiteListDetails);b.Xg=H(a.xhrHookBlackListDetails);b.$g=H(a.xhrPerformanceWhitelistDetails);b.Yg=H(a.xhrHookWhiteList);b.Wg=H(a.xhrHookBlackList);b.Vg=H(a.xhrErrorBlacklist);b.qe=a.dataScrubXHRRegExes.reduce((f,g)=>{const h="d"+(g.f.includes("g")?g.f:g.f+"g");(g=Va(g.p,h))&&f.push(g);return f},[]);var c=H(a.excludeRageRE);b.hg=c.length?
c:[qa];b.xe=a.excludeRageCSS.join(",");b.gf=H(a.replaceURLRegExes.map(f=>({...f,f:f.f.includes("g")?f.f:f.f+"g"})));c=pa.concat(a.urlTransforms);var d=[];for(var e=0;e<c.length;e++){const {re:f,rep:g}=c[e],h=Va(f.p,f.f);h&&d.push([h,g])}b.Wb=d;b.Je=a.ignoreChangesList.join(",");b.ye=H(a.excludeXHRHeaderRegEx);b.lf=a.spinnerSelectorList.join(",");b.Sc=(new Date).getTime()%100<a.hashUploadPercent;b.Eb=[];for(c=0;c<a.transformAttributesForNodesList.length;++c){const {sel:f,attr:g,re:{p:h,f:k},rep:l,
newAttr:m}=a.transformAttributesForNodesList[c];(d=Va(h,k))&&b.Eb.push({Ea:f,wd:g,fb:d,Td:l,Bg:m})}b.hf=H(a.resourcePathBlacklist);c=Da(a.ignoreAttributes);b.mg=c.global;b.Kg=c.selected;b.Fd=!b.qg&&a.hookFetch;b.Ug=H(a.xhrEncryptWhiteListDetails);b.Tg=H(a.xhrEncryptBlackListDetails);for(c=0;c<od.forceElementCSSUpload.length;++c)d=od.forceElementCSSUpload[c],a.forceElementCSSUpload.includes(d)||a.forceElementCSSUpload.push(d);b.Dd=a.forceElementCSSUpload.join(",");b.lg=a.forceElementCSSInline.join(",");
b.Gd=a.ignoreElementCSSSerialization.join(",");b.Sb=new window.Set(a.maskSensitiveQueryParams.map(f=>f.toLowerCase()));b.Sg=H(a.whitelistedURLs);c=Array.from(new window.Set(a.imageTrackingIgnoreList.concat(od.imageTrackingIgnoreList)));b.Ke=c.join(",");c=[];for(d=0;d<a.blockFrequentReloads.length;++d){const {re:f,count:g}=a.blockFrequentReloads[d];(e=Va(f.p,f.f))&&c.push({re:e,count:g})}b.xd=c;b.Qg=H(a.syncEndpointsWithSDK);a.sessionPersistenceMediums.indexOf("localStorage")<0&&a.sessionPersistenceMediums.indexOf("sessionStorage")<
0&&a.sessionPersistenceMediums.push("localStorage");b.sh=H(a.excludeLegacyHttp);b.ph=H(a.customWebviewUserAgentPatterns)};const ki=a=>{a={...a};if(a.ingestURLProvider)try{const {medium:d,path:e}=a.ingestURLProvider;if(d==="window")var b=E(window,e,void 0);else if(d==="localStorage"||d==="sessionStorage")b=window[d].getItem(e);typeof b==="string"&&b.length>0&&(a.ingestBaseURL=b)}catch(d){}if(typeof a.ingestBaseURL==="string"&&a.ingestBaseURL.length>0)try{var c=new URL(a.ingestBaseURL,window.location.origin);a.ingestBaseURL=c.href.replace(/\/+$/,"")}catch(d){}b=new window.Set(a.excludeXHRHeaderRegEx.map(d=>d.p+"|"+d.f));
c=Ca(od.excludeXHRHeaderRegEx);for(let d=0;d<c.length;++d){const e=c[d];b.has(e.p+"|"+e.f)||a.excludeXHRHeaderRegEx.push(e)}return a};const li=a=>{a=new URL(a,window.location.href);const b=document.createElement("script");b.async=!0;b.src=a.href;document.head.appendChild(b)};class mi{constructor(a,b){this.B=[];a=Object.entries(a).flatMap(([c,d])=>d.map(e=>[c,e]));for(const [,c]of a){const {surveyUrl:d,eventDetails:e}=c;({i:a}=e);b.addEventListener(`event-engine:${a}`,li.bind(null,d));this.B.push(e)}}};function ni(a){window.addEventListener("message",async b=>{if((b=b.data)&&typeof b=="object"&&b.namespace==="quantum_flutter"&&b.messageId!==void 0){var {method:c,url:d,body:e,messageId:f,response:g,error:h}=b;a.B.size>50&&P(a.ca,"FlutterMessageHandler: high message count",{size:a.B.size},"warn");if(g){if(e&&!e.ack&&P(a.ca,"FlutterMessageHandler:missing ack",{method:c,url:d},"error"),b=a.B.get(f))h?b.reject(h):b.resolve(e),a.B.delete(f)}else{let k=void 0,l=void 0;try{l=await oi(a,{method:c,url:d,
body:e,context:{scope:b.scope,view:b.view}})}catch(m){k=m}l===void 0&&k===void 0||window.postMessage({messageId:f,method:c,url:d,body:l,response:!0,error:k,namespace:"quantum_flutter_web",scope:a.sub},"*")}}},!1)}
async function oi(a,b){var c=b.method,d=b.url;const e=b.body;b=b.context;if(typeof c!=="string"||typeof d!=="string")throw Error("FlutterMessageHandler:400");d=lh(d);c=E(a.cb,[c.toUpperCase(),...d],null);if(c===null)throw Error("FlutterMessageHandler:404");d[d.length-1]==="child-ready"&&(a.K++,a.M.resolve());return await c(e,b)}
function pi(a,{method:b,url:c,body:d}){if(!a.K)return Promise.resolve();const e=Ea(),f=new wb;a.B.set(e,f);const g=(h=0)=>{try{window.postMessage({messageId:e,method:b,url:c,body:d,namespace:"quantum_flutter_web",scope:a.sub},"*")}catch(k){P(a.ca,"FlutterMessageHandler: unable to post message",{message:k.message,url:c,method:b},"error")}setTimeout(()=>{if(a.B.get(e)){const k=h+1;k>a.Ab?(f.reject(Error("FlutterMessageHandler:timeout")),a.B.delete(e)):g(k)}},a.Db)};g();return f.promise}
class qi{constructor(a){this.ca=a.ca;this.sub=a.sub;this.cb=a.cb;this.Ab=a.Ab||5;this.Db=a.Db||500;this.B=new Map;ni(this);this.M=new wb;this.K=0}}var ri=new Set("b T rn a L nsc C F B".split(" "));function si(a){let b=[];a.D.config.flutterViews.forEach(c=>{const {root:d,attr:e,render:f}=c;a.ba.querySelectorAll(document,d).forEach(g=>{var h=a.find(g);if(!h||!h[1].canvas){h=a.ba.querySelector(g,f);var k=g.getAttribute(e);a.B.set(+k,{root:g,id:k,canvas:h});h&&b.push(k)}})});return b.length?b:null}function ti(a,b){for(const {root:c}of a.B.values())if(c.contains(b))return!0;return!1}
async function ui(a,b,c){var d=a.B.get(+b),e=d.canvas;if(b=a.$.aa(e).ea){d.ea=a.$.ea();d={1:{n:"DIV",C:[],sr:{b:{C:[c],S:[{v:"div{position:absolute;pointer-events:none;z-index:0;width:calc(var(--w)*1px);height:calc(var(--h)*1px);}.cl{pointer-events:all;}",i:"flutter-injected"}],q:d.ea}},a:[{2:{n:"style",v:e.style.cssText}}],q:a.$.ea()}};if(e=c.E)delete c.E,d.E=await a.$.ua.encrypt(a.G.stringify(e));return{t:"%",I:b,j:d}}}
class vi{constructor(a,b,c,d,e,f){this.D=a;this.ba=b;this.G=c;this.M=e;this.$=f;this.B=new Map;this.K=this.ready=!1;d.addEventListener("html-snapshot",this.L.bind(this));d.addEventListener("mutations-observed",this.da.bind(this))}find(a){for(const b of this.B.entries())if(b[1].root===a)return b;return null}async L(){this.K||(this.K=!0,await this.M.M.promise,this.$.va!==y.NONE?this.K=!1:(this.ready=!0,pi(this.M,{method:"GET",url:"/v1/snapshot",body:{}}).then(async({html:a})=>{for(const b in a){const c=
await ui(this,b,a[b]);c&&N(this.$,c)}this.K=!1})))}da(a){if(a.some(c=>c.addedNodes.length>0)){var b=si(this);b&&this.ready&&pi(this.M,{method:"GET",url:"/v1/snapshot",body:{}}).then(async({html:c})=>{b.forEach(async d=>{(d=await ui(this,d,c[d]))&&N(this.$,d)})})}}};function wi(a,b){if(a.B.length===0)a.B.push(b);else{var c=a.B[a.B.length-1];c[1].length>0||c[1].length===0&&b[1].length===0?(c[0]=c[0].concat(b[0]),c[1]=c[1].concat(b[1])):a.B.push(b)}}async function xi(a,b){a.M=!0;const c=a.B.shift();c[1].length?await b(c):b(c);a.B.length>0?setTimeout(()=>xi(a,b),0):(a.M=!1,a.qb("done",!0))}function yi(a,b){a.M||xi(a,b)}function zi(a,b){a.K.done&&a.K.done.push(b)}function Ai(a,b){a.K.done&&(a.K.done=a.K.done.filter(c=>b!==c))}
class Bi{constructor(){this.B=[];this.M=!1;this.K={done:[]}}qb(a,b){this.K[a].forEach(c=>{c(b)})}}
function Ya(a,b){var c=window.location.href.indexOf("about:srcdoc")>-1;if(a.ra.timing&&!c){let d=b.p={};const e=Ci(a);if(e){c=Di(a)?a.g.W.tb:e.navigationStart;b.pto=D(c);for(const g in a.pa)if(a.pa.hasOwnProperty(g)){d[a.pa[g]]=null;try{let h=e[g];typeof h==="number"&&(h>0?(Di(a)||(h=Math.max(h-c,0)),h<14E6?d[a.pa[g]]=Math.max(D(h),0):Tb(a,"hit_network_timing_offset",{url:encodeURIComponent(b.url),value:h,key:g})):a.hc.push(g))}catch(h){}}let f=!1;a.ig.forEach((g,h)=>{h!==0&&(h=d[a.pa[a.ig[h-1]]]||
0,g=d[a.pa[g]],g!==null&&h!==null&&g<h&&(f=!0))});if(f){d={};for(const g in a.pa)a.pa.hasOwnProperty(g)&&(d[a.pa[g]]=null);b.p=d;return}}try{if(a.ra.getEntriesByType){if(!d[a.pa["first-paint"]]){const f=new window.PerformanceObserver(g=>{g=g.getEntries();for(let k=0;k<g.length;k++){var h=g[k];h.name=="first-paint"&&(h=D(h.startTime),h<14E6&&Ei(a,h)&&Fi(a,"mt",65536,{u:h}),f.disconnect())}});f.observe({type:"paint",buffered:!0})}if(!d[a.pa["first-contentful-paint"]]){const f=new window.PerformanceObserver(g=>
{g=g.getEntries();for(let k=0;k<g.length;k++){var h=g[k];h.name=="first-contentful-paint"&&(h=D(h.startTime),h<14E6&&Ei(a,h)&&Fi(a,"mt",65536,{v:h}),f.disconnect())}});f.observe({type:"paint",buffered:!0})}}}catch(f){}}}
function Za(a,b){if(!a.ra)return null;let c=null;a.ra&&a.ra.navigation&&b in a.ra.navigation&&(c=a.ra.navigation[b]);if(c==void 0&&a.ra.getEntriesByType){const d=a.ra.getEntriesByType("navigation");for(let e=0;e<d.length;++e){const f=d[e];if(b in f&&f.hasOwnProperty(b))return f[b]}}switch(b){case "type":return a.Sh[c];default:return c}}function N(a,b,c=!1,d=null){a.pb&&(a.Ka||c)&&(d&&a.L.push(d),Gi(a,b),a.ka.push(b),Hi(a,a.ka,a.L))}
function Tb(a,b,c){a.ca&&P(a.ca,b,{value:c,s:a.ia,h:a.za,u:a.Ca},"warning")}function Oc(a,b,c,d){const e=new yg(a.D.R.Eb,a);let f=a.D.config.elementVeinAttributes.reduce((g,h)=>{if(g||Dg(a,b,h))return g;h=e.transform(b,h);return h===null?g:h.value},null);f||(f=`${c}x${d}`);return`${b.nodeName}[${f}]`}function Q(a,b,c="",d=0,e=a.g.W.Z()){X(a,"E",{i:b,f:d,v:c,t:e})}function sd(a){Ii(a);a.pd=!0;Z(a,function(){Ji(a,db(a.B),!0,!1)})}
function ig(a,b){if(!a.Bc&&!a.Nf){a.Nf=!0;Q(a,-39,"QuantumError: "+Na(b.toString()));Ki(a);try{a.ca&&P(a.ca,"QUANTUM_ERROR",{error:b.toString().substring(0,1E3),h:a.za,s:a.ia,u:a.Ca,v:"86b1a1a10"},"error"),md(a.oa,"error",{error:b.toString(),version:"86b1a1a10",session:a.ia,hit:a.za,pageURL:a.Ca})}catch(c){}}}
function mg(a,b){var c=b.f;if(b.i!==0&&(c&512)<=0&&(c&1024)<=0&&(c&2048)<=0&&(c&4096)<=0&&(c&65536)<=0&&typeof b.i!=="undefined"&&typeof b.v!=="undefined"&&typeof b.t!=="undefined"&&(a.fd.push({i:b.i,v:b.v.toString().substring(0,a.D.config.maxStoredEventLength),t:b.t,h:b.h,c:b.c}),a.O&&a.O.kb!==null)){for(b=0;b<a.fd.length;++b)c=a.fd[b],a.fa.set(`event:${Ea()}`,c);a.fd=[]}}
function X(a,b,c){if(a.pb)if(b=="E"){if(!(a.eg++>a.D.config.maxNumOOBEventsPerHit)){a.Kb=!0;var d;b in a.da?d=a.da.E:a.da.E=d=[];d.push(c);md(a.oa,c.i,c);N(a,{...c,t:"oe"},!0);b=a.g.Zb;d={id:c.i,value:c.v,ts:c.t,i:c.i,v:c.v,ev:c.ev};if(!b.disabled&&b.B.config.mapping){var e=b.B.config.mapping;for(const [g,h]of Object.entries(e))try{if(d.i.toString()===g){var f=b.J.gg.includes(d.i);e={xdm:{producedBy:"quantum-metric"},type:`qm.${f?"error":"event"}`};Kh(b,{object:e.xdm,Fg:h,handle:g,event:d});Eh(b,
e,g,d.value,f)}}catch(k){console.warn("Could not map event:",g)}}mg(a,c)}}else{switch(b){case "qc":case "x":f=[];b in a.da?f=a.da[b]:a.da[b]=f=[];f.push(c);break;case "mt":f={};b in a.da?f=a.da[b]:a.da[b]=f={};Object.assign(f,c);N(a,{v:c,t:"mt"},!0);break;case "qr":f=[];b in a.da?f=a.da[b]:a.da[b]=f=[];f.push(...c);N(a,{v:c,t:"qr"},!0);break;default:a.da[b]=c}a.Kb=!0}}function Y(a,b){return a.g.G.nodeName(b).toLowerCase()}
function Dg(a,b,c){for(let d=0;d<a.D.config.ignoreAttributes.length;d++){const e=a.D.config.ignoreAttributes[d];if(typeof e==="string"){if(e===c)return!0}else if(e.attrs.indexOf(c)!==-1&&a.g.ga.matchesSelector(b,e.sel))return!0}return!1}function Kg(a,b){return(b=a.g.G.parentNode(b))?a.eb(b):!1}function Lg(a,b){b=a.g.G.parentNode(b);if(!b||!a.D.R.Ib)return!1;b.nodeType===11&&(b=b.host);return a.Lb(b)}
function Xh(a,b){let c=0,d=0,e=0,f=0;if(b)try{b==document?a.Sf?(c=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollWidth||document.body.scrollWidth,f=document.documentElement.scrollHeight||document.body.scrollHeight):(c=document.body.scrollLeft,d=document.body.scrollTop,e=document.body.scrollWidth,f=document.body.scrollHeight):(c=b.scrollLeft,d=b.scrollTop,e=b.scrollWidth,f=b.scrollHeight)}catch(g){}return[c,
d,e,f]}
function ci(a,b,c,d){var e=a.aa(b).ea;if(e===void 0)return null;let f={t:"T",I:e,n:c,v:d};var g=c.toLowerCase();e=!1;if(Dg(a,b,c))return null;(g=g=="data-select-value"||g=="placeholder"||g=="value"||g=="label")&&a.eb(b)&&(d=Hg(d),e=!0);g&&!e&&a.Ua&&a.D.R.Ib&&!Li(a,b)&&a.g.ga.matchesSelector(b,`${a.D.R.Ib},input,select`)&&(e=a.ua.encrypt(d),d=" ",a.L.push(e),e.then(h=>{f.v=h}),e=!0);if(g=(new yg(a.D.R.Eb,a)).transform(b,f.n))f.n=g.name,d=e?d:g.value;if(a.Ua&&!e)for(e=0;e<a.D.config.encryptNodeAttributes.length;++e){const {sel:h,attrs:k}=
a.D.config.encryptNodeAttributes[e];a.g.ga.matchesSelector(b,h)&&k.forEach(l=>{l===c&&(l=a.ua.encrypt(d),a.L.push(l),l.then(m=>{f.v=m}))})}f.v=d;return f}function di(a,b){var c=a.aa(b).ea;if(c===void 0)return null;var d=b.data,e=a.g.G.parentNode(b),f={t:"t",I:c,v:d};e&&(c=Mi(a,e),c==="scrub"&&(d=Hg(d)),c==="encrypt"&&(b=a.ua.encrypt(b.data),a.L.push(b),d=" ",b.then(g=>{f.v=g}),f.etn="1"));f.v=d;return f}
function ei(a,b){if(b&&b.nodeType===1){var c=Y(a,b);if(c=="option"&&b.selected){c=a.aa(b).ea;if(c===void 0)return;N(a,{t:"_",I:c})}else if(c=="input"&&b.checked){c=a.aa(b).ea;if(c===void 0)return;a.aa(b).Lc=!0;N(a,{t:"_",I:c})}if(b=a.g.G.children(b))for(c=0;c<b.length;++c)ei(a,b[c])}}function fi(a){a.O&&!a.cc&&(a.cc=setTimeout(()=>{var b=a.O;hg(b,"dom",b.J.g.W.Z());a.cc=null},a.D.config.domChangedThrottleDuration))}function Ni(a,b){a=a.aa(b);b=a.Oc;b||(b=a.Oc={});return b}
function Oi(a,b,c=!1){var d,e=a.jd.get(b);e&&(c?d=e.Oc:e.Oc&&e.Oc.Eh&&a.He.delete(b),d&&a.jd.set(b,{Oc:d}));if(d=a.g.G.childNodes(b))for(e=0;e<d.length;++e)Oi(a,d[e],c);b.nodeType===1&&(b=a.g.G.shadowRoot(b))&&Oi(a,b,c)}function Pi(a){const b=a.g.G.stringify({ekey:$d(a.ua),kid:a.ua.Oe||""});X(a,"ekey",{ekey:b})}function Qi(a){var b=a.da.form;b||(a.da.form=b={});a.Kb=!0;return b}
function Gi(a,b){if(!b.hasOwnProperty("d")){const c=b.t=="s",d=a.g.W.Z();c?(b.d=d,a.yc=d):a.yc>0?(b.d=d-a.yc,a.yc=d):b.d=1}}async function Hi(a,b,c=a.L){!a.bc||b.length===0&&c.length===0||(wi(a.Dc,[[...b],[...c]]),b.length=0,c.length=0,yi(a.Dc,async function(d){const e=d[0];d=d[1];d.length&&await Promise.all(d);e.forEach(f=>Ri(a,f))}))}function Ri(a,b){if(a.pb){var c=b.t=="s";Gi(a,b);a.dd&&(b.ekey=$d(a.ua),b.kid=a.ua.Oe||"",a.dd=!1);c?a.ta.unshift(b):a.ta.push(b)}}
function Si(a,b){var c=Ti(a,b);c={G:a.g.G,na:c,Od:a.D.R.Rc,ae:{[1]:(f,g)=>{if(a.Kc(f)){var h=f.localName;!a.customElements.has(h)&&window.customElements.get(h)&&(a.customElements.add(h),N(a,{t:"CE",n:h}))}switch(a.g.G.tagName(f).toUpperCase()){case "INPUT":if(g=f.type.toLowerCase(),g==="checkbox"||g==="radio")a.aa(f).Lc=f.checked;case "SELECT":case "TEXTAREA":Ui(a,f);break;case "IMG":if(!(!a.D.config.reportFailedImages||a.D.R.Ke&&a.g.ga.matchesSelector(f,a.D.R.Ke))){g=a.g.ng;var k=f.ownerDocument.location.href;
h=f.complete;var l=f.srcset?f.srcset.split(", "):[];const m=l.length===1?l[0].split(" ")[0]:"";l=f.src!==k;k=!!f.src||m!==k;h=(f.src||f.srcset)&&l&&k&&h;f.removeEventListener("error",g.B);f.removeEventListener("load",g.lc);h&&Uc(g,f);g.J.g.G.addEventListener(f,"error",g.B);g.J.g.G.addEventListener(f,"load",g.lc)}break;case "IFRAME":f=a.aa(f),f.jc?g.jc=f.jc.toString():g.jc=null}},[11]:f=>{Vi(a,f.host);Mc(a.g.nb,f.host)}},Ie:a.Ba.bind(a),rb:a.D.R.mg,Hb:a.Hb.bind(a),Gb:f=>!!a.Ua&&a.Gb(f),Wd:a.D.config.stripHTMLComments,
Vd:K(a.Ca,a.D.R.kf),url:a.Ca,supports:a.g.supports,aa:a.aa.bind(a),ea:a.ea};c=new Vg(c);c.mode=[Mi(a,b)];const {gb:d,Bb:e}={gb:Wg(b,c),Bb:c.Bb};b=c.B.length?a.ua.encrypt(a.g.G.stringify(c.B)):null;c.Zd.forEach(({node:f,gb:g})=>{f.nodeType===11?(f=(a.g.G.ba(f)||[]).map(h=>Vb(a.g.ya,h)),Promise.all(f).then(h=>{g.S=h})):(a.g.G.tagName(f)==="STYLE"&&Vb(a.g.ya,f.sheet).then(h=>{g.S=h;g.C=[]}),a.g.G.tagName(f)==="LINK"&&f.getAttribute("href")&&f.rel.toLowerCase().includes("stylesheet")&&Vb(a.g.ya,f).then(h=>
{if(h.v!==""){for(let k=0;k<g.a.length;++k){const l=g.a[k];l[2].n==="href"&&(l[2].n="data-original-src");l[2].n==="data-original-src"&&l[2].v.startsWith("data:")&&(l[2].v="")}g.S=h}}))});b=Promise.all([b,Wb(a.g.ya)]).then(f=>{d.E=f[0]});return{gb:d,Bb:e,Ae:b}}function Wi(a,b){a=a.g.G.parentNode(b);if(!a)return null;if(a.nodeType===1)return a;if(a.nodeType===11)return a.host}
function Mi(a,b){if(!b)return null;if(b.nodeType===3||b.nodeType===8)b=Wi(a,b);const {eb:c,Lb:d}=a.aa(b);return c!==null&&c!==void 0||d!==null&&d!==void 0?c?"scrub":d&&c===!1?"encrypt":d?Mi(a,Wi(a,b))==="scrub"?"scrub":"encrypt":null:a.D.R.Rc?"scrub":Mi(a,Wi(a,b))}function Xi(a,b,c,d){(b=ci(a,b,c,d))&&N(a,b)}function Li(a,b){return a.D.R.Fc&&a.g.ga.matchesSelector(b,a.D.R.Fc)?!0:!1}function Yi(a){const b=a.D.config.sessionTimeoutMinutes*60*1E3;return new a.g.G.ma.contentWindow.Date(a.g.W.Z()+b)}
function Zi(a,b){if(b){const c=Yi(a);a.D.config.sessionPersistenceMediums.forEach(d=>{try{switch(d){case "cookie":a.qa.set({[a.D.config.sessionCookieName]:b,expires:c.toUTCString()});break;default:const f=a.fa.get("s");f&&f!==b&&a.fa.clear();a.fa.set("s",b);var e=a.fa;e.B.exp=c.getTime();ug(e,"exp")}}catch(f){}})}}function Z(a,b){try{++a.uc,b(),--a.uc}catch(c){$i(a,c)}}
function aj(a){if([a.K.Da].includes(a.M)&&a.jf===null){a.jf=setTimeout(()=>{a.jf=null},1E3);a.rf&&a.g.G.clearTimeout(a.rf);var b=a.D.config.sessionTimeoutMinutes*60*1E3;Zi(a,a.ia);a.rf=a.g.G.setTimeout(function(){Z(a,function(){a.mc=!0;a.Ob&&a.Ob.disconnect();a.nc&&clearTimeout(a.nc);a.Wa&&clearTimeout(a.Wa)})},b)}}function bj(a){[a.K.Yb].includes(a.M)?cj(a,{method:"POST",url:"/v1/new-session",body:{}}):[a.K.Zc,a.K.ad].includes(a.M)||sd(a)}
function dj(a){if([a.K.Da].includes(a.M)){if(a.D.config.maxSessionDuration>0){a.nd!==null&&(md(a.oa,"max-session-duration-exceeded",{sessionID:a.nd}),a.nd=null);const {Bh:b,Ch:c}=ej(a);if(b>a.D.config.maxSessionDuration)return a.nd=a.ia,Ki(a),bj(a),!0;a.Wa&&(clearTimeout(a.Wa),a.Wa=null);a.Wa=setTimeout(()=>{dj(a)},c)}return!1}}
function fj(a){[,e]=a.hd;var b=document.documentElement.scrollHeight;if(b!=0){var c=e+a.Fb;c>a.zc&&(a.zc=c,X(a,"sd",a.zc));var d=a.g.W.Z();c=d-a.ec;if(c>1E3){a.ec=d;d=Math.floor(e/b*10);var e=Math.floor((e+a.Fb)/b*10);e==10&&(e=9);for(b=d;b<=e&&!(a.zb[b]+=c,b<0||b>10);b++);a.zb.totalTime+=c;gj(a)}}}
async function cj(a,b){const {method:c,url:d}=b;if(!a.ee&&([y.$c,y.NONE].includes(a.va)||![a.K.Zc,a.K.ad].includes(a.M))){if([a.K.Zc].includes(a.M))return uh(a.g.vd,b).catch(e=>{P(a.ca,"sdkcomm: (android) issue sending message to parent",{message:e.message,method:c,url:d},"error")});if([a.K.ad].includes(a.M))return wh(a.g.Jd,b).catch(e=>{P(a.ca,"sdkcomm: (ios) issue sending message to parent",{message:e.message,method:c,url:d},"error")});if([a.K.Yb].includes(a.M)){const e=window.opener!==null&&window!==
window.opener?window.opener:a.g.G.M(window);return qh(a.g.fc,e,b).catch(f=>{P(a.ca,"sdkcomm: (iframe) issue sending message to parent",{message:f.message,method:c,url:d},"error")})}P(a.ca,"sdkcomm: unable to send message to unknown parent context",{method:c,url:d,mode:a.M},"error")}}
function hj(a){a.mc?(a.mc=!1,bj(a)):a.wb||((dj(a),a.wc)?[a.K.Da].includes(a.M)?a.wb=setTimeout(b=>{a.wb=null;let c=b-a.wc;c>6E4&&(c=6E4);a.Vc+=c;X(a,"e",D(a.Vc/1E3));a.wc=b;aj(a);fj(a)},500,a.g.W.Z()):a.va===y.NONE&&(a.wb=1,cj(a,{method:"POST",url:"/v1/engaged",body:{}}).finally(()=>{a.wb=setTimeout(()=>{a.wb=null},500)})):a.wc=a.Cb)}function Ii(a){a.qa.ib({[a.D.config.sessionCookieName]:""});a.fa.clear()}
async function Ji(a,b,c=!0,d=!0){a.B.Pa!==b?gb(a.B,b):!a.nf&&a.Vf&&(a.nf=!0,Hi(a,a.ka,a.L),a.Dc.M&&await new Promise(e=>{const f=()=>{Ai(a.Dc,f);e()};zi(a.Dc,f)}),ij(a),c&&(a.Ob&&a.Ob.disconnect(),a.oc&&a.oc(),Vh(a.g.Aa),gj(a,!0),jj(a),Ki(a)),Oi(a,document.documentElement,!0),a.ta=[],a.ka.length=0,a.ka=[],a.da={},a.Kb=!1,a.ed.B=0,a.Ze.B=0,a.za=void 0,[a.K.Da].includes(a.M)&&(a.ia=void 0,a.wa=void 0),a.qc=!1,a.od=void 0,a.bc=null,a.Cc=null,a.Rb=0,a.Gg=0,a.Ac=0,a.yb=0,a.Nb=0,a.Pb=!1,a.xb&&(clearTimeout(a.xb),
a.xb=null),a.cc&&(clearTimeout(a.cc),a.cc=null),a.Wa&&(clearTimeout(a.Wa),a.Wa=null),a.sc&&(clearTimeout(a.sc),a.sc=null),a.yc=0,a.Ff=0,a.hd=[0,0],a.Jb=null,a.mc=!1,a.Cb=void 0,a.jb=void 0,a.Bc=void 0,a.wc=0,a.xc=null,a.wb&&clearTimeout(a.wb),a.wb=null,a.Vc=0,kj(a),a.Me=0,a.Na.B=0,a.eg=0,a.Ye=0,a.hc=[],lj(a),Rc(a.g.nb),Wh(a.g.Aa),a.g.Ub.K=0,a.ea=Aa(),c=null,a.O!==null&&(c=a.O.Fa,a.O.me()),await mj(a,b,d,c),a.nf=!1)}
function nj(a,b,c=50){const d=new yg(a.D.R.Eb,a);if(c==0||!b)return"";var e=dc(a.g.G,a.g.G.parentNode(b));if(!a.aa(b).Ng){var f=Y(a,b),g=a.g.G.parentElement(b);if(!g)if(e)g=a.g.G.parentNode(b).host;else return f=="html"?"html":"";var h=e?a.g.G.shadowRoot(g).children:a.g.G.children(g);const k=e?" S# ":" > ";function l(){for(var q=0,t=0,C=h.length;t<C&&q<=1&&t<100;t++)a.g.G.tagName(h[t]).toLowerCase()==f&&(q+=1);if(q==1)return nj(a,g,c-1)+k+f}function m(){var q=0,t=b.classList;if(t.length!==0){var {name:C,
value:B}=d.transform(b,"class");t=B.split(" ");for(let r=0;r<t.length;r++){for(var w=`${f}[${C}~="${t[r].trim()}"]`,z=0,u=h.length;z<u&&q<=1&&z<c;z++)a.g.ga.matchesSelector(h[z],w)&&(q+=1);if(q==1)return nj(a,g,c-1)+k+w}}}function n(){for(var q=0,t=0,C=h.length;t<C&&t<100;t++)if(h[t]==b){q=t+1;break}return nj(a,g,c-1)+k+f+":nth-child("+q+")"}e=function(){var q=a.g.G.getRootNode(b);if(f=="head"||f=="body"||f=="html")return f;const t=dc(a.g.G,q);if(b.id&&!/"|'|&|object /.test(b.id)&&a.g.G.lb(q,`[id="${b.id}"]`).length===
1){const {name:C,value:B}=d.transform(b,"id"),w=`[${C}="${B}"]`,z=a.g.G.lb(q,w).length===1;if(t&&z)return nj(a,q.host,c-1)+" S# "+w;if(z)return w}if(b.attributes&&b.attributes.name){const {name:C,value:B}=d.transform(b,"name");q=`${f}[${C}="${B}"]`;return t?nj(a,g,c-1)+k+q:q}}()||l()||m()||n();a.aa(b).Ng=e}return a.aa(b).Ng}function oj(a,b,c,d){hj(a);b=a.aa(b).ea;b!==void 0&&(a.xc=b,N(a,{t:"O",I:b,x:c,y:d}))}
function pj(a,b,c,d){hj(a);b=a.aa(b).ea;b!==void 0&&(a.xc=null,N(a,{t:"X",I:b,x:c,y:d}))}function qj(a,b,c){return K(c,a.D.R.hg)||a.D.R.xe&&a.g.ga.matchesSelector(b,a.D.R.xe)?!1:!0}function rj(a,b){return a.replace(b,function(c){let d="";for(let e=0;e<c.length;++e)d+="*";return d})}function sj(a,b){const c=a.g.W.Z();b=Na(b);for(let d=0;d<a.D.R.yg.length;++d)b=rj(b,a.D.R.yg[d]);c-a.vc<100?Q(a,-4,b):a.Wf[b]||(Q(a,-18,b),a.Wf[b]=1)}
function tj(a,b,c,d){var e=Y(a,b);if(e==="select"){var f=Array.from(b.selectedIndex<0?b.options:b.selectedOptions,k=>tj(a,k,c,d)).join(" ").trim();if(f!=="")return f}f=a.g.ga.matchesSelector(b,a.D.R.zd)||a.g.ga.matchesSelector(b,a.D.R.Ib);e=e=="input"||e=="textarea";const g=Li(a,b)||a.D.R.Gc&&a.g.ga.matchesSelector(b,a.D.R.Gc);if((f||e)&&!g)return Oc(a,b,c,d);f=b;for(var h of a.D.config.clickTextMapping){const {target:k,parent:l}=h;if(a.g.ga.matchesSelector(b,k)&&(e=a.g.ga.closest(b,l),e!==null)){f=
e;break}}h=Jg(a.fh,f);return h.length?h:Oc(a,b,c,d)}function Ki(a){a.be&&uj(a)}
function vj(a,b,c,d){if(b&&!ti(a.g.bb,b)){hj(a);++a.Rb;X(a,"c",a.Rb);kg(a.O,b);var e=a.aa(b).ea;if(Y(a,b)=="input"){var f=a.aa(b);!!f.Lc!=b.checked&&(Xi(a,b,"checked",b.checked),f.Lc=b.checked)}var g=Oc(a,b,c,d);f=tj(a,b,c,d);N(a,{t:"b",I:a.Ka?e:null,v:f},!0);var h=a.g.W.Z(),k=!1;a.Qb==b&&h-a.vc<2E3&&a.g.Ub.K<a.vc?++a.Mf==3&&(g&&qj(a,b,g)&&(k=!0,Q(a,-5,f)),a.ef=10):a.Mf=0;k||(a.Qb==b&&Math.abs(a.Ne-c)<30&&Math.abs(a.Ue-d)<30&&h-a.vc<2E3?++a.ef==3&&g&&qj(a,b,g)&&Q(a,-2,f):a.ef=0);a.Qb=b;a.vc=h;a.Ne=
c;a.Ue=d;a.jb&&a.Gg++==1&&(Q(a,-9,f),Ki(a));g="";try{g=nj(a,b)}catch(n){Tb(a,"stable_selector",n.message)}k=b.getBoundingClientRect();h=c-(k.left+window.pageXOffset);var l=d-(k.top+window.pageYOffset);h=k.width==0?0:Math.min(100,h/k.width*100);l=k.height==0?0:Math.min(100,l/k.height*100);var m=a.g.W.Z()-a.Cb;k=Eg(a.g.Wc,b);h={t:"H",n:f,x:D(h),y:D(l),tc:m,ts:a.g.W.Z()};g.length?h.P=g:Tb(a,"STABLE_PATH",`Could not generate stable selector: ${a.Ba(b)}`);k.length?h.ev=k:Tb(a,"ELEMENT_VEIN",`Could not generate element vein: ${a.Ba(b)}`);
X(a,"qc",h);a.Kb=!0;c={t:"L",I:a.Ka?e:null,P:g||"",ev:k,x:c,y:d,v:f};if(a.D.config.zones){d=[];for(const n of a.D.config.zones)if(e=a.g.ga.closest(b,n.sel)){f=null;for(const [,q]of a.g.Aa.Aa)if(q.$a.has(e)){f=q;break}if(f){d.push(f.name);f=a.g.Aa;for(const [,q]of f.Aa)if(q.$a.has(e)){q.ne++;q.Ic=!0;break}}}d.length&&(c.z=d)}N(a,c,!0)}}function uj(a){a.Jb&&(wj(a,a.Jb),xj(a,a.Jb));a.jb&&yj(a);zj(a);Aj(a)}
function Bj(a,b,c,d){if(!d)return 0;b=Math.abs(b-d[0])/a.Xb;a=Math.abs(c-d[1])/a.Fb;return Math.sqrt(b*b+a*a)}function Cj(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function Dj(a,b){return a.D.config.temp.cleanAPIUrls===!1?b:Ej(a,b)}function gj(a,b=!1){var c=a.ec-a.We;if(c>=3E4||c>0&&b)for(a.We=a.ec,b=a.zb.totalTime,c=0;c<10;c++)X(a,"sd"+c,D(a.zb[c]/b*100))}
function Fj(a,b,c=!1){c&&hj(a);var d;[c,d]=Xh(a,b);if(b===document){b="";var e=Bj(a,c,d,a.hd);e&&(a.yb+=e,X(a,"s",a.yb));a.hd=[c,d];if(a.Kd&&(e=c,a.Kd&&e>0)){var f=Cj();a.Zf==f?a.bg!=e&&a.Xb==f&&a.Qh++==5&&Q(a,-6,Dj(a,a.Ca)):a.Zf=f;a.bg=e}fj(a)}else if(b=a.aa(b).ea,b===void 0)return;N(a,{t:"S",I:b,x:c,y:d})}
function Gj(a,b){const c=b.pageX,d=b.pageY,e=b.clientX;b=b.clientY;const f=a.g.W.Z();if(f-a.yf<100)a.te&&clearTimeout(a.te),a.te=setTimeout(function(){N(a,{t:"m",x:c,y:d})},100);else{var g=Bj(a,e,b,a.Xf);g&&(a.Ac+=g,X(a,"m",a.Ac));a.Xf=[e,b];a.yf=f;N(a,{t:"m",x:c,y:d})}}
async function Hj(a,b){if(b.type!=="hidden"){if(!a.Qa(b)){var c=a.Ta(b);c.state===1&&(c.state=2,++c.jg,Ij(a,b,c));!b.value&&c.filled?(c.filled=!1,Ij(a,b,c)):b.value&&!c.filled&&(c.filled=!0,Ij(a,b,c));if(c=Jj(a,b)){c=a.Ta(c);var d=c.dg;c.dg=b;d!=b&&(d&&Ij(a,d,a.Ta(d)),Ij(a,b,a.Ta(b)))}}c=a.aa(b).ea;if(c!==void 0&&a.Ka){c={t:"C",I:c};if(b.getAttribute("type")==="checkbox"||b.getAttribute("type")==="radio")c.v=b.checked.toString();else{d=Kj(b);if(a.Qa(b)&&b.value.length>0){d="****";var e=!0}else[d,
e]=Lj(d,a.eb(b))||[];!a.Ua||e||Li(a,b)?c.v=d:(c.qenc=await a.ua.encrypt(d),c.v=Hg(d))}N(a,c)}}}
function Mj(a,b){if(typeof b.selectionStart=="number"&&typeof b.selectionEnd=="number")return[b.selectionStart,b.selectionEnd-b.selectionStart];var c=document.selection.createRange();if(!c||a.g.G.parentNode(c)&&a.g.G.parentNode(c)!=b)return[0,0];a=b.value.length;var d=b.createTextRange();d.moveToBookmark(c.getBookmark());c=b.createTextRange();c.collapse(!1);if(d.compareEndPoints("StartToEnd",c)>-1)return[a,0];b=b.value.replace(/\r\n/g,"\n");var e=-d.moveStart("character",-a);e+=b.slice(0,e).split("\n").length-
1;if(d.compareEndPoints("EndToEnd",c)>-1)return[e,a-e];a=-d.moveEnd("character",-a);a+=b.slice(0,a).split("\n").length-1;return[e,a-e]}function Nj(a,b,c){if(!a.Qa(b)){var d=a.aa(b).ea;if(d!==void 0)try{c||(c=Mj(a,b)),a.aa(b).ff=c,N(a,{t:"*",I:d,s:c[0],l:c[1]})}catch(e){}}}function Oj(a,b){hj(a);if(!a.Qa(b)){var c=Y(a,b);if(c=="input"||c=="textarea")if(c=a.aa(b),c.sb!=b.value&&(c.sb=b.value,Hj(a,b)),c.ea!==void 0)try{var d=Mj(a,b);c.ff&&c.ff[0]==d[0]&&c.ff[1]==d[1]||Nj(a,b,d)}catch(e){}}}
function Pj(a,b){var c=a.Ta(b);c.state=1;c.Re=a.g.W.Z();c.Cg=!1;a.Jb=b;setTimeout(function(){wj(a,b)},10)}function Qj(a,b){a.Ta(b).state=0;a.Jb==b&&(a.Jb=null);var c=b.value;if(!a.Qa(b)&&a.og.test(c)&&!a.Gf&&!a.eb(b)){a.Gf=!0;const d=a.Ua&&Rj(a,b)?256:0;d?a.ua.encrypt(c).then(e=>{Q(a,-8,e,d)}):Q(a,-8,c,d)}setTimeout(function(){wj(a,b)},1E3);lg(a.O,b);xj(a,b)}function Kj(a){const b=a.getAttribute("type");a=b=="checkbox"||b=="radio"?a.checked.toString():a.value;return a==null?"":a}
function wj(a,b){if(!ti(a.g.bb,b)){var c=a.aa(b),d=Kj(b);d!=c.sb&&(c.sb=d,Hj(a,b))}}
function Sj(a){if(!a.Bf){function e(f){return function(g){if(g){g=g.toString().replace(/"|\r?\n|\r|\t/g,"").replace(a.Ph,"").trim();for(var h=0;h<a.D.R.Ve.length;++h){const m=a.D.R.Ve[h];if(m.test(g)){g=rj(g,m);break}}h=K(g,a.D.R.fg);g=[g,h]}else g=["",!1];const [k,l]=g;a&&a.O&&R(a.O,{id:f,ja:1,xa:1,flags:l?256:0,la:a.g.W.Z()},k)}}var b=window.alert;window.alert=function(f){Z(a,function(){e(-23)(f)});return b.apply(window,arguments)};var c=window.confirm;window.confirm=function(f){Z(a,function(){e(-47)(f)});
return c.apply(window,arguments)};if(a.D.config.hookPrompt&&!window.location.href.indexOf("capacitor:")==0){var d=window.prompt;window.prompt=function(f){Z(a,function(){e(-48)(f)});return d.apply(window,arguments)}}a.Bf=!0}}function Tj(a,b="input"){b=a.g.G.lb(document,b);for(var c=0;c<b.length;++c)a.sg(b[c]);a.He.forEach(a.sg.bind(a))}function Lj(a,b=!1){return b?[Hg(a),!0]:[a,!1]}function Uj(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}
function Vj(a,b,c,d){hj(a);c=a.aa(c).ea;if(c!==void 0&&d.touches!==void 0){for(var e=[],f=0;f<d.touches.length;++f){var g=d.touches[f];e.push({p:[g.pageX,g.pageY],r:[g.radiusX,g.radiusY],a:g.rotationAngle,f:g.force})}N(a,{t:b,I:c,T:e})}}
function Wj(a,b){if(b.getAttribute){var c=b.getAttribute("id");if(c){try{var d=a.g.G.lb(document,'label[for="'+c.replace(/"/g,'\\"')+'"]')}catch(f){}if(d&&d.length>0&&(d=a.g.G.textContent(d[0])||a.g.G.innerText(d[0]))&&(d=d.trim(),d.length<30))return d}if((d=b.getAttribute("title"))||(d=b.getAttribute("name")))return d;if(d=b.getAttribute("placeholder"))return"'"+d+"'";if(Y(a,b)=="form"&&b.querySelector){var e=a.g.G.L(b,"input[type=submit]");e&&(d=e.value);if(d)return"|"+d}if(d=c)return"#"+d;if(d=
b.getAttribute("class"))return"."+d;if(d=b.getAttribute("action"))return"!"+d}return(d=a.Ba(b))?"@"+d:""}function Jj(a,b){for(b=a.g.G.parentNode(b);b;){if(b.nodeName.toLowerCase()=="form"||b==document)return b;b=a.g.G.parentNode(b)}return null}function Rj(a,b){return Mi(a,b)==="encrypt"?!0:a.Gb(b)}function xj(a,b){var c=a.Ta(b);if(!c.Cg){var d=a.g.W.Z();c.kg=(c.kg||0)+(d-c.Re);Ij(a,b,c);c.state==1?c.Re=d:c.Cg=!0}}
async function Ij(a,b,c){if(!a.eb(b)){var d=Jj(a,b);if(d){var e=a.Ta(d);e.xg||Xj(a,d,e);d={c:c.jg||0,"?":!!c.filled,d:b==e.dg,t:c.kg||0};(b=b.value||"")&&b.length>100&&(b=b.substring(0,99));a.Ua?(d.qenc=await a.ua.encrypt(b),d.v=await Zd(a.ua,b)):d.v=b;if(!(a.D.config.disableFormSubmitFields||c.sb&&c.sb==d.v)){var f=Qi(a);(b=f.f)||(f.f=b={});(f=b[e.id])||(b[e.id]=f={});f[c.name]=d;c.sb=d.v}a=a.O;a.Qe=c;hg(a,"form",a.J.g.W.Z())}}}
function Xj(a,b,c){c.id=++a.Ff;if(!a.D.config.disableFormSubmitFields){var d=Qi(a),e=d.F;e||(d.F=e=[]);c.xg=!0;b=b.getAttribute&&Dj(a,b.getAttribute("action"))||"";e.push({i:c.id,n:c.name,a:b,ts:a.g.W.Z()})}}function $i(a,b,c=!0){var d=b.toString();b.stack&&(d+="\n"+b.stack.toString());ig(a,d);c&&(a.va=y.ERROR,a.ta=[],a.da={})}
async function Yj(a,b){const c={flags:0,id:-65,la:a.g.W.Z(),ja:2,Qc:!0},d={blockedURI:b.blockedURI,columnNumber:b.columnNumber,disposition:b.disposition,documentURI:b.documentURI,effectiveDirective:b.effectiveDirective,lineNumber:b.lineNumber,originalPolicy:b.originalPolicy,referrer:b.referrer,sample:b.sample,sourceFile:b.sourceFile,statusCode:b.statusCode};var e=a.g.G.stringify(d,Zb);e=await Qb(e);R(a.O,c,b.effectiveDirective,{hash:e,value:d})}
function Zj(a,b,c=!1){var d=Ni(a,b);if(!d.yh&&(d.yh=!0,d={wheel:function(e){const f=a.g.G.ma.contentWindow.Date.now();({deltaY:e}=e);e>0?(f-a.ba.ug>2500&&(a.ba.se=0,a.ba.Bd=0),a.ba.ug=f,a.ba.Nd==1&&a.ba.se++,a.ba.Bd+=Math.abs(e),a.ba.Nd=-1):e<0&&(f-a.ba.vg>2500&&(a.ba.sf=0,a.ba.$d=0),a.ba.vg=f,a.ba.Nd==-1&&a.ba.sf++,a.ba.$d+=Math.abs(e),a.ba.Nd=1);Math.abs(e)&&a.ba.sf>=3&&a.ba.se>=3&&a.ba.$d>=50&&a.ba.Bd>=50&&(!a.ba.Te||f-a.ba.Te>=5E3)&&(e={flags:0,id:-64,la:a.g.W.Z(),ja:1,xa:1},R(a.O,e,""),a.ba.Te=
f)},click:function(e){if(ak(e)){let g=e.pageX;var f=e.pageY;e.pointerType===""&&(f=e.target.getBoundingClientRect(),g=f.left+window.scrollX+f.width/2,f=f.top+window.scrollY+f.height/2);vj(a,bk(a,e),g,f)}},dblclick:function(e){vj(a,bk(a,e),e.pageX,e.pageY)},contextmenu:function(e){var f=bk(a,e),g=e.pageX;e=e.pageY;hj(a);f=a.aa(f).ea;f!==void 0&&N(a,{t:"R",I:f,x:g,y:e})},mousedown:function(e){var f=bk(a,e),g=e.pageX;e=e.pageY;hj(a);f=a.aa(f).ea;f!==void 0&&N(a,{t:"D",I:f,x:g,y:e})},mouseup:function(e){var f=
bk(a,e),g=e.pageX;e=e.pageY;hj(a);f=a.aa(f).ea;f!==void 0&&N(a,{t:"U",I:f,x:g,y:e})},pointerup:function(e){var f=bk(a,e);if(ak(e)&&f!=document){var g=e.pageX;e=e.pageY;var h=Y(a,f);h=sa.has(h)&&f.disabled;var k=f.closest&&f.closest("[disabled]");k=k&&sa.has(Y(a,k));f.nodeType==1&&(h||k)&&(f=tj(a,f,g,e),Q(a,-49,f))}},keypress:function(e){e=bk(a,e);a.g.G.tagName(e)&&(ti(a.g.bb,e)||Oj(a,e))},keyup:function(e){const f=bk(a,e);e instanceof KeyboardEvent&&f&&a.g.G.tagName(f)&&!ti(a.g.bb,f)&&(++a.Nb,X(a,
"k",a.Nb),Oj(a,f))},paste:function(e){e=bk(a,e);var f={flags:0,s:2,id:-28,la:a.g.W.Z()};R(a.O,f,Oc(a,e,0,0))},cut:function(e){ck(a,bk(a,e))},copy:function(e){ck(a,bk(a,e))},touchstart:function(e){var f=bk(a,e);Vj(a,"!",f,e)},touchmove:function(e){var f=bk(a,e);Vj(a,"@",f,e)},touchend:function(e){var f=bk(a,e);Vj(a,"#",f,e)},touchcancel:function(e){var f=bk(a,e);Vj(a,"$",f,e)}},dk(a,b,{scroll:function(e){e=a.g.G.K(e);a.g.G.tagName(e)&&Fj(a,e,!1)},select:function(e){e=a.g.G.K(e);var f=Y(a,e);f!="input"&&
f!="textarea"||Nj(a,e)},play:function(e){ek(a,a.g.G.K(e),!0)},pause:function(e){ek(a,a.g.G.K(e),!1)},reset:function(e){e=a.g.G.K(e);Y(a,e)!="form"||a.Qa(e)||(e=a.aa(e).ea,e!==void 0&&N(a,{t:"E",I:e}))},change:function(e){e=a.g.G.K(e);var f=Y(a,e);f!="input"&&f!="textarea"&&f!="select"&&f!="option"||wj(a,e)},submit:function(e){e=a.g.G.K(e);if(Y(a,e)=="form"){if(!a.D.config.disableFormSubmitFields){var f=a.Ta(e);f.xg||Xj(a,e,f);if(!a.D.config.disableFormSubmitFields){var g=Qi(a),h=g.S;h||(g.S=h={});
h[f.id]=a.g.W.Z()}f=a.O;f.Se=e;hg(f,"formSubmitted",f.J.g.W.Z())}e=a.aa(e).ea;e!==void 0&&N(a,{t:"SU",I:e});uj(a)}},focus:function(e){a.Ka&&(e=e.composedPath?e.composedPath():[e.target],(e.find(f=>dc(a.g.G,f))||document)===b&&e.filter((f,g)=>g===0||dc(a.g.G,f)).forEach(f=>{dc(a.g.G,f)&&(f=f.host);if(f){var g=Y(a,f);g!="input"&&g!="textarea"||Pj(a,f);f=a.aa(f).ea;f!==void 0&&N(a,{t:"F",I:f})}}))},blur:function(e){a.Ka&&(e=e.composedPath?e.composedPath():[e.target],(e.find(f=>dc(a.g.G,f))||document)===
b&&e.filter((f,g)=>g===0||dc(a.g.G,f)).forEach(f=>{dc(a.g.G,f)&&(f=f.host);if(f){var g=Y(a,f);g!="input"&&g!="textarea"||Qj(a,f);f=a.aa(f).ea;f!==void 0&&N(a,{t:"B",I:f})}}))},mouseover:function(e){((e.composedPath?e.composedPath():[e.target]).find(f=>dc(a.g.G,f))||document)===b&&oj(a,bk(a,e),e.pageX,e.pageY)},mouseout:function(e){((e.composedPath?e.composedPath():[e.target]).find(f=>dc(a.g.G,f))||document)===b&&pj(a,bk(a,e),e.pageX,e.pageY)}}),!c)){dk(a,b,d);a.g.G.addEventListener(window,"focus",
function(){setTimeout(()=>{N(a,{t:"wf"})},0)},!0);let e=null;a.g.G.addEventListener(window,"blur",function(){e===null&&(e=setTimeout(()=>{e=null;var f=document.activeElement;Y(a,f)=="iframe"&&(X(a,"c",++a.Rb),kg(a.O,f),f={flags:0,id:-1,la:a.g.W.Z(),ja:1,xa:1},R(a.O,f,""),uj(a));N(a,{t:"wb"})},0))},!0);a.g.G.addEventListener(window,"unhandledrejection",function(f){try{a.D.config.disableErrorHooking||sj(a,"Unhandled rejection (promise: "+f.promise+", reason: "+f.reason+").")}catch(g){}},!0)}}
function fk(a){a.Uf||(a.Uf=!0,document.addEventListener&&a.g.G.addEventListener(document,"mousemove",function(b){Z(a,function(){Gj(a,b)})},!1),window.addEventListener&&(a.g.G.addEventListener(window,"load",function(){Z(a,function(){N(a,{t:"~"})})},!1),a.g.G.addEventListener(window,"DOMContentLoaded",function(){Z(a,function(){N(a,{t:"`"})})},!1),a.g.G.addEventListener(window,"resize",function(){Z(a,function(){hj(a);a.Xb=Cj();a.Fb=Uj();N(a,{t:"+",w:a.Xb,h:a.Fb});Fj(a,document)})},!1),a.g.G.addEventListener(window,
"pagehide",()=>{Z(a,function(){if(!a.jb){Hi(a,a.ka,a.L);a.oc&&a.oc();a.jb=a.g.W.Z();gj(a,!0);jj(a);Vh(a.g.Aa);var b=a.O.Qb;if(b){const d=tj(a,b,a.Ne,a.Ue);var c="";try{c=nj(a,b)}catch(e){}b=gk(a,b);X(a,"out",{t:"OUT",u:b||"",n:d,P:c||"",ts:a.g.W.Z()})}a.Bc=a.g.W.Z();N(a,{t:"f"});Ki(a)}})},!1),a.g.G.addEventListener(window,"pageshow",b=>{b.persisted&&a.jb&&(a.jb=void 0,Ji(a,fb(a.B)))},!1),a.g.G.addEventListener(window,"orientationchange",function(){Z(a,function(){try{let b;if(window.screen.orientation){const {orientation:c}=
window.screen;b=c.angle}else b=window.orientation;hj(a);N(a,{t:"/",o:b});Q(a,-41,b);Fj(a,document)}catch(b){}})},!1),a.g.G.addEventListener(window,"scroll",function(){Z(a,function(){Fj(a,document,!0)})},!1),a.g.G.addEventListener(window,"securitypolicyviolation",b=>{Z(a,function(){Yj(a,b)})},!1),"ReportingObserver"in window&&(new window.ReportingObserver((b,c)=>{for(const {body:d}of b)Yj(a,{blockedURI:d.blockedURL,columnNumber:d.columnNumber,disposition:d.disposition,documentURI:d.documentURL,effectiveDirective:d.effectiveDirective,
lineNumber:d.lineNumber,originalPolicy:d.originalPolicy,referrer:d.referrer,sample:d.sample,sourceFile:d.sourceFile,statusCode:d.statusCode});c.disconnect()},{types:["csp-violation"],buffered:!0})).observe()),Zj(a,document))}function ek(a,b,c){b=a.aa(b).ea;b!==void 0&&N(a,{t:"M",I:b,p:c})}function ck(a,b){var c={flags:0,s:2,id:-29,la:a.g.W.Z()};R(a.O,c,Oc(a,b,0,0))}function ak(a){return a.isTrusted!==!1||a.forwardedTouchEvent&&a.forwardedTouchEvent==1||a.isIonicTap&&a.isIonicTap==1?!0:!1}
function dk(a,b,c){for(const d of Object.keys(c))a.g.G.addEventListener(b,d,function(e){Z(a,function(){c[d](e)})},!0)}function bk(a,b){return!a.g.G.ta(b)||a.Le?a.g.G.K(b):(a=a.g.G.Ba(b))&&a.length?a[0]:null}function hk(a,b){return b?Y(a,b)==="select"?b:hk(a,a.g.G.parentNode(b)):null}function Ci(a){return Di(a)?a.ra.getEntriesByType("navigation")[0]:a.ra.timing}function Di(a){return!!a.ra.timeOrigin&&!!a.ra.getEntriesByType("navigation")[0]}
function ik(a){a.Jf=document.visibilityState==="visible";if(!a.Jf&&a.ra){var b=Ci(a);b=Di(a)?a.g.W.tb:b.navigationStart;a.If=a.g.W.Z()-b}}function jk(a,b,c){if(!b||b==-5){if(b!=-5){if(a.uc>0)throw Error(c);ig(a,c+"\n"+Error().stack.toString())}a.va=y.ERROR;a.ta=[];a.da={}}}function kk(a,b,c=!0){if(b instanceof fh)jk(a,-5,"conn4");else if(b instanceof dh)$i(a,b,c);else if(b instanceof eh)$i(a,`Maximum retries reached:${b.message}`,c);else throw b;}
function lk(a,b,c=!1){try{var d=b.split("/");if(d.length!==3||b.indexOf("DOCTYPE")>-1)throw Error("Invalid session response");[a.K.Da].includes(a.M)&&(a.ia=d[0],a.wa=d[1]);a.za=d[2];a.Ja.qb("start-event",{ia:a.ia,wa:a.wa,za:a.za,url:a.B.Va.mb})}catch(e){jk(a,!1,`BSR:${b}`)}Gh(a.g.Zb,a.ia);Hh(a.g.Zb,a.wa);mk(a);nk(a,c);a.pd&&ok(a,{method:"POST",url:"/v1/set-context",body:pk(a)}).then(()=>ok(a,{method:"POST",url:"/v1/reset",body:{}})).then(()=>{a.pd=!1});a.Xc.length&&(Fi(a,"qr",4096,a.Xc),a.Xc=[])}
function qk(a){a.od||(a.od=setTimeout(function(){rk(a)},a.D.config.publishInterval))}function Aj(a){if(a.ta.length!=0&&a.qc){var b=a.ed.B==0&&a.qc;if(a.ia&&a.za||b)b=a.g.G.stringify(a.ta),a.ed.send(b).then(c=>{c&&(lk(a,c,!!a.ia),a.za&&md(a.oa,"start",{sessionID:a.ia,userID:a.wa,hitID:a.za,url:a.B.Va.mb}))}).catch(c=>{kk(a,c)}),a.Me++,a.ta=[]}qk(a)}function sk(a){a.nc&&clearTimeout(a.nc);a.nc=setTimeout(function(){Z(a,function(){X(a,"p",1);a.nc=null;a.mc||sk(a)})},3E4)}
function zj(a){if(a.Kb&&a.za){var b=a.g.G.stringify(a.da);a.Ze.send(b).catch(c=>{kk(a,c)});a.da={};sk(a);a.Kb=!1}}function mk(a){try{Zi(a,a.ia),tk(a,a.wa)}catch(f){}try{if(a.D.config.sessionVar)for(var b=window,c=a.D.config.sessionVar.split("."),d=0;d<c.length;d++){var e=c[d];if(d==c.length-1)b[e]=a.ia;else if(b=b[e],!b){console.error(" - QM (extra) session failed - "+e+".  Object path doesn't exist: "+a.D.config.sessionVar);break}}}catch(f){}try{uk(a)}catch(f){}}
function nk(a,b=!1){const c=async()=>{try{await vk(a)}catch(B){Tb(a,"network_interceptor_bridge_error",B.message)}if(a.D.config.abnSegmentCookie){var e=a.qa.get(a.D.config.abnSegmentCookie);if(e&&e&&wk(a)!=e){var f={flags:128,id:-100,la:a.g.W.Z()};R(a.O,f,e)}}try{var g=window.doNotTrack||window.navigator.doNotTrack||window.navigator.msDoNotTrack;if(g){e=!1;switch(typeof g){case "number":g==1&&(e=!0);break;case "string":e=g.charAt(0)==="1"||g==="yes"}if(e){const B={flags:0,id:-45,la:a.g.W.Z(),xa:0};
R(a.O,B,"")}}}catch(B){}R(a.O,{id:-9998,xa:0,flags:512,ja:2,la:a.g.W.Z()},"1.35.36");N(a,{t:"git",v:"86b1a1a10"});[a.K.Da].includes(a.M)&&R(a.O,{id:-9997,xa:0,ja:0,flags:1024,la:a.g.W.Z()},"web");if(window.location&&typeof window.location.search=="string")var h=window.location.search;if(h!==void 0&&h.indexOf("utm_")!==-1){g=a.g.W.Z();h=new URLSearchParams(h);for(const [B,w]of h.entries())h=na[B],h!==void 0&&R(a.O,{id:h,ja:2,flags:0,la:g},w)}Za(a,"type")!="reload"||a.Pb?Za(a,"type")!="back_forward"||
a.Pb?!a.Pb&&a.wf&&(h={flags:0,id:-30,ja:!0,la:a.g.W.Z()},R(a.O,h,a.Ca),a.Pb=!0,a.wf=!1):(h={flags:0,id:-30,ja:!0,la:a.g.W.Z()},R(a.O,h,a.Ca),a.Pb=!0):(h={flags:0,id:-10,ja:!0,la:a.g.W.Z()},R(a.O,h,a.Ca),a.Pb=!0);h=a.fa.get("slr",null);h===null&&(h=a.D.config.logResourcePercent?a.g.W.Z()%100<a.D.config.logResourcePercent:!1,a.fa.set("slr",h));a.zg=h;a.Of||(a.Of=!0,xk(a),yk(a),a.D.config.spaTransitionStartMarkerName&&a.D.config.spaTransitionStopMarkerName&&zk(a));a.Ld&&(h={flags:0,id:-26,la:a.g.W.Z(),
ja:0},R(a.O,h,""));if(a.D.config.checkBlankPages)try{if(typeof window.sessionStorage==="object"&&a.ra){var k=window.location.hostname;if(document.referrer&&document.referrer.indexOf(k)>=0){var l=a.g.G.Storage.getItem.call(window.sessionStorage,"qm_last_page"),m=a.g.G.Storage.getItem.call(window.sessionStorage,"qm_last_period");if(m){var n=a.g.W.Z(),q=n-parseInt(m,10)-(a.ra&&a.ra.timing.navigationStart?n-a.ra.timing.navigationStart:5E3);if(q>a.D.config.pbpThreshold&&q<6E4){var t=Za(a,"type")=="reload";
k=!1;l&&l.indexOf(document.referrer)>=0&&(k=!0);l="Gap";t&&(l+=" Reload");k&&(l+=" Ref_Match");var C={flags:0,s:1,id:-27,la:a.g.W.Z()};R(a.O,C,l)}}}a.g.G.Storage.setItem.call(window.sessionStorage,"qm_last_page",document.location.toString());a.g.G.Storage.removeItem.call(window.sessionStorage,"qm_last_period")}}catch(B){}!a.qa.get(a.D.config.sessionCookieName)&&a.ie&&(t={flags:0,id:-55,la:a.g.W.Z(),ja:0},R(a.O,t,""));a.ie||(t={flags:0,id:-33,la:a.g.W.Z(),ja:0},R(a.O,t,""));a.fa.set("eSync",!0);uj(a)};
if(b){b=a.fa.get("eSync",!1);var d=a.fa.get([],{});if(b&&La(d)&&(b=Ga(d),a.Rf||document.referrer&&(new URL(document.referrer)).host===window.location.host||!document.referrer&&!a.D.config.temp.enableKVS)){jg(a.O,b);c();return}a.D.config.temp.enableKVS?a.Na.get({s:a.ia,Q:5}).then(e=>{Z(a,async function(){let f,g,h=await e.text();h=h.replace(/[\u0000-\u001F\f]/gm,"");if(h==="")jg(a.O,{E:[]});else{try{f=a.g.G.Ma(h)}catch(k){g=k.toString()}jk(a,f,"BEI-"+g+"-"+h);a.fa.import(f);f=Ga(f);jg(a.O,f)}c()})}).catch(()=>
{Z(a,function(){jg(a.O,{E:[]});c()})}):(jg(a.O,{E:[]}),c())}else jg(a.O,{E:[]}),c()}function ok(a,{method:b,url:c,body:d},e=ra){const f=[],g=[];a.Yc.forEach(h=>{try{if(a.g.G.isConnected(h)){const k=qh(a.g.fc,h.contentWindow,{method:b,url:c,body:d}).then(l=>{e(l,h)}).catch(l=>{P(a.ca,"sdkcomm: issue sending message to child",{message:l.message,method:b,url:c},"error")});g.push(k)}else f.push(h)}catch(k){f.push(h)}});f.forEach(h=>{a.Yc.delete(h)});return Promise.all(g)}
function pk(a){return{session:a.ia,user:a.wa,state:a.fa.get([],{}),parentHitId:a.za,contextId:a.Ec,replayEnabled:a.Ka}}function Fi(a,b,c,d){R(a.O,{id:0,flags:c,ja:1,xa:null,la:a.g.W.Z()},d);X(a,b,d)}function kj(a){a.ed=new kh(a,a.le.bind(a),a.D,a.Na,a.g.G);a.Ze=new kh(a,a.Lh.bind(a),a.D,a.Na,a.g.G);a.Qf=new kh(a,a.Gh.bind(a),a.D,a.Na,a.g.G)}function rk(a){Z(a,function(){a.od=void 0;Aj(a);zj(a)})}function jj(a){X(a,"c",a.Rb);X(a,"m",a.Ac);X(a,"s",a.yb);X(a,"k",a.Nb)}
function Ej(a,b){if(b){b=b.split("?")[0];for(var c=0;c<a.D.R.gf.length;c++)b=b.replace(a.D.R.gf[c],"");return b}return""}function Ak(a,b){return typeof b!=="string"?null:b.split("\r\n").reduce((c,d)=>{if(!d)return c;const e=d.split(":")[0];for(let f=0;f<a.D.R.ye.length;++f)if(a.D.R.ye[f].test(e))return c;return c+d+"\r\n"},"")}
async function Bk(a,b){var c=null;try{c=b.qresponse&&b.qresponse.length?b.qresponse:b.responseType==""||b.responseType=="text"?b.responseText:b.response,b.responseType==="blob"&&b.getResponseHeader("Content-Type")==="application/json"&&(c=await c.text().then(a.g.G.Ma)),b.responseType==="arraybuffer"&&b.getResponseHeader("Content-Type").startsWith("application/json")&&(c=String.fromCodePoint.apply(null,new Uint8Array(c))),typeof c=="object"&&(c=a.g.G.stringify(c))}catch(d){}return c}
async function Ck(a,b,c,d,e,f,g){try{if(!(c.indexOf("data:")>-1)){var h=g.qend||a.g.W.Z(),k=!1,l;if(l=c&&typeof c==="string"){var m=c;l=K(m,a.D.R.Yg)||!K(m,a.D.R.Wg)}if(l){a:{var n=a.g.oa,q=Ra(c).href;l=f;var t=g.response;if(q&&q.length){var C=ed(n,q);if(C){var B=C.parse(q,t,l);const S=B.path,M=B.status;n={};M&&(n.status=M);if(S){const [T,J]=q.split("?");n.url=`${T}${T.endsWith("/")?"":"/"}${S}${J?`?${J}`:""}`}var w=n;break a}}w=void 0}w&&(w.url&&(c=w.url),w.status&&(b=w.status));c=Sa(a.D.R.Sb,a.D.R.Wb,
Ra(c));if(!(c.indexOf("quantummetric.com")>=0)||a.D.config.isPivot){var z=await Bk(a,g)||"";try{var u=g.getAllResponseHeaders()}catch(S){}var r=Ak(a,u),p=Ak(a,g.reqHeaders);f=await df(g,e,f);g.qrequest=f;g.qurl=c;g.qstatus=b;g.qreqheaders=g.reqHeaders;g.qrespheaders=u;g.qresponse=z;g.qmethod=e;g.qduration=h-d;"responseURL"in g||(g.responseURL=c);u=c;if(!K(u,a.D.R.Xg)&&K(u,a.D.R.Zg)&&a.Ka){var A={t:"xhr",m:e,u:c,st:b,s:d,r:h-d},x=f?f.toString():"";w=u=!1;x.length>a.D.config.maxXHRDataLength?u=!0:x=
Ma(x,a.D.R.qe);z.length>a.D.config.maxXHRDataLength?w=!0:z=Ma(z,a.D.R.qe);var G;q=c;(G=!a.Ua||K(q,a.D.R.Ug)?!1:K(q,a.D.R.Tg)?!0:a.D.config.encryptXHR)?(A.resHeaders_enc=await a.ua.encrypt(r),x&&(u?A.req="QM: Too much data ("+x.length+") to encrypt request":A.req_enc=await a.ua.encrypt(x)),z&&(w?A.res="QM: Too much data ("+z.length+") to encrypt response":A.res_enc=await a.ua.encrypt(z))):(A.resHeaders=r,A.req=u?"QM: XHR Req data too long ("+x.length+")":x,A.res=w?"QM: XHR Res data too long ("+z.length+
")":z);k=!0;a.D.config.logReqCookiesForXHR&&(new RegExp(window.location.hostname,"i")).test(c)&&(p||(p=""),p+="cookie: "+a.qa.getAll()+"\r\n");p&&(G?A.reqHeaders_enc=await a.ua.encrypt(p):A.reqHeaders=p);md(a.oa,"api",A,g);N(a,A)}var L=K(c,a.D.R.$g);K(c,a.D.R.Vg)||(b>=500?Q(a,-3,Dj(a,c)):b==403||b==401?Q(a,-13,Dj(a,c)):b==404?Q(a,-14,Dj(a,c)):b>=400?Q(a,-15,Dj(a,c)):b==310?Q(a,-16,Dj(a,c)):b>=300?Q(a,-17,Dj(a,c)):b==0&&g&&g.qtimedOut&&Q(a,-11,Dj(a,c)));L&&(A={m:e,u:Dj(a,c),c:b,st:b,s:f?f.length:0,
S:z?z.length:0,r:h-d,ts:D(a.g.W.Z()/1E3)},X(a,"x",A),h-d>a.D.config.xhrPerformanceSlow&&a.eh++<=3&&Q(a,-7,Dj(a,c)),k||(A.t="xhr",N(a,A,!0),md(a.oa,"api",A,g)));if(a.O){g.data=f?f.toString():"";var F=a.O;F.Fa=g;F.td=g;hg(F,"xhr",F.J.g.W.Z());F.td=null;k||L||md(a.oa,"api",{m:e,u:c,st:b,r:h-d},g)}}}}}catch(S){Tb(a,"xhr_listener_error",S.message.slice(-256))}}
function Dk(a,b){b=Oa(b);a=Oa(a.qa.getAll());var c="",d;for(d in a)a.hasOwnProperty(d)&&(b[d]&&b[d]==a[d]||(c+="set-cookie: "+d+"="+decodeURIComponent(a[d])+"\r\n"));return c}function Ek(a,b,c,d){b={t:"pc",I:a.aa(b).ea,p:c,v:d};N(a,b)}function Fk(a){if(!a.Ag){a.Ag=!0;var b=wa(window.HTMLStyleElement.prototype,"disabled");b.configurable&&Object.defineProperty(window.HTMLStyleElement.prototype,"disabled",{...b,set:function(c){try{Ek(a,this,"disabled",c)}catch(d){}return b.set.call(this,c)}})}}
function Gk(a,b,c="",d=null,e=0,f=null,g=null){return new Promise((h,k)=>{try{if(typeof b=="object"&&b.constructor&&b.constructor.name==="Response"&&!b.hh){let l={response:""};l._qmResponseType=b.type;l.getAllResponseHeaders=function(){let m="";if(b.headers&&typeof b.headers.entries=="function"){const n=b.headers.entries();let q=0,t=n.next();for(;!t.done&&q<1E3;)m+=`${t.value[0]}: ${t.value[1]}\r\n`,t=n.next(),q++}a.D.config.monitorXHRSetCookies&&g&&(m+=Dk(a,g));return m};f&&(l.reqHeaders=f);if(b.text&&
typeof b.clone==="function"){const m=b.clone();if(b.type==="opaque"||b.type==="opaqueredirect")return l.response="QM: Unable to track opaque response",Ck(a,m.status,b.ih,e,c,d,l),h();m.text().then(function(n){l.response=n;Ck(a,m.status,m.url,e,c,d,l)}).catch(n=>{n.name==="AbortError"&&(l.response=a.Af,Ck(a,m.status,m.url,e,c,d,l))}).finally(h)}b.hh=1}}catch(l){k(l)}})}
function Hk(a){if(a.kc===null&&window.fetch&&a.D.R.Fd&&!a.Lf){a.Lf=!0;var b=window._o_Fetch||window.fetch;window.fetch=function(c,d){a.g.G.pa(c)==="[object URL]"&&(c=String(c));try{if(a.Fe)return Tb(a,"recursive_fetch",window.location.href),a.g.G.ma.contentWindow.fetch.apply(this,arguments);a.Fe=!0;var e=a.g.W.Z();let m;try{m=c instanceof Request?c:new Request(c,d);var f=m.method,g=null,h=null,k=null;function r(p){var A=null;try{if(p)if(A="",typeof p.entries=="function"){const x=p.entries();let G=
x.next();for(p=0;!G.done&&p<1E3;)A+=`${G.value[0]}: ${G.value[1]}\r\n`,G=x.next(),p++}else for(let x in p)p.hasOwnProperty(x)&&(A+=`${x}: ${p.get?p.get(x):p[x]}\r\n`)}catch(x){}return A}if(typeof c==="string")typeof d==="object"&&(g=d.body,h=r(m.headers));else if(typeof c==="object"&&c.constructor&&c.constructor.name==="Request"&&typeof c.clone==="function"){var l=c.clone();d&&d.body&&typeof d.body=="string"&&d.body.length?g=d.body:window.ReadableStream&&l.body instanceof window.ReadableStream?xa(l.body).then(p=>
g=p):l.text().then(function(p){g=p});h=r(d&&d.headers||l.headers)}a.D.config.monitorXHRSetCookies&&(k=a.qa.getAll())}catch(r){}let n=!1,q=!1,t=!1,C,B=d&&d.signal&&d.signal instanceof AbortSignal;try{B&&(C=new AbortController,d.signal.addEventListener("abort",function(){q=!0;z()}),d.signal=C.signal)}catch(r){}let w=!1;const z=()=>{w||!q||n&&!t||(C.abort(),w=!0)};let u=b.apply(this,arguments);try{u.then(function(r){try{if(a.D.config.forceDeferFetchAborts&&(n=!0),!r.qmre_f){r.qmre_f=1;let p=r.clone();
(r.type==="opaque"||r.type==="opaqueredirect")&&m&&m.url&&(p.ih=m.url);Gk(a,p,f,g,e,h,k).finally(()=>{t=!0;z()})}}catch(p){}B&&["arrayBuffer","blob","formData","json","text"].forEach((p=>A=>{const x=p[A];p[A]=function(){n=!0;return x.call(this,arguments)}})(r));return r}).catch(r=>{r.name==="AbortError"&&m&&(r={response:"",getAllResponseHeaders:function(){let p="";a.D.config.monitorXHRSetCookies&&k&&(p+=Dk(a,k));return p}},h&&(r.reqHeaders=h),r.response=a.Af,Ck(a,-1,m.url,e,f,g,r))})}catch(r){}return u}finally{a.Fe=
!1}};window._o_Fetch&&(window.QuantumMetricFetch=window.fetch)}}function Ik(a,b,c){var d=a.aa(b),e=d.url,f=d.method,g=a.g.W.Z();if(b.readyState===4)Ck(a,b.status,e,g,f,c,b);else{var h=function(){Z(a,function(){e=e||b.responseURL;b.readyState==4&&(b.qresponse=b.response,Ck(a,b.status,e,g,f,c,b),b.removeEventListener&&b.removeEventListener("readystatechange",h))})};b.addEventListener&&a.g.G.addEventListener(b,"readystatechange",h,!1)}}
function Jk(a){function b(m,n){var q=this;Z(f,function(){var t=f.aa(q);t.method=m;t.url=n});return g.apply(this,arguments)}function c(m){var n=this;Z(f,function(){n.addEventListener("abort",function(){n.qaborted=!0},!1);n.addEventListener("error",function(){n.qnetworkError=!0},!1);n.addEventListener("timeout",function(){n.qnetworkError=!0;n.qtimedOut=!0},!1)});Z(f,()=>{setTimeout(function(){Ik(f,n,m)},0)});return h.apply(this,arguments)}function d(m,n){try{this.reqHeaders=(this.reqHeaders||"")+(m+
": "+n+"\r\n")}catch(q){}return k.apply(this,arguments)}function e(){var m=this;Z(f,function(){m.qaborted=!0});return l.apply(this,arguments)}var f=a;if(a.kc===null){a=window.XMLHttpRequest.prototype;var g=a.open,h=a.send,k=a.setRequestHeader,l=a.abort;if(g&&h&&k&&(a.open=b,a.send=c,a.setRequestHeader=d,a.abort=e,a.open!=b))try{Object.defineProperty(a,"open",{value:b,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(a,"send",{value:c,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(a,
"setRequestHeader",{value:d,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(a,"abort",{value:e,writable:!0,enumerable:!0,configurable:!0})}catch(m){}}}
function Kk(a){if(a.ia!==void 0)return a.ia;for(let b=0;b<a.D.config.sessionPersistenceMediums.length;b++){const c=a.D.config.sessionPersistenceMediums[b];try{switch(c){case "cookie":const d=Oa(a.qa.getAll())[a.D.config.sessionCookieName].trim();if(d&&d.length<=100)return d;break;default:const e=a.fa.get("s",!1);if(e&&e.length<=100)return e}}catch(d){}}return null}
function Lk(a){a.Cb=a.g.W.Z();if([a.K.Da].includes(a.M))try{a.md&&(a.ia=a.md,a.md=void 0,a.fa.restore(`${"QM:s:"}${a.ia}`));a.ia=Kk(a);a:{for(let c=0;c<a.D.config.userPersistenceMediums.length;c++){const d=a.D.config.userPersistenceMediums[c];try{switch(d){case "cookie":const e=Oa(a.qa.getAll())[a.D.config.userCookieName];if(e&&e.length<=100){var b=e.trim();break a}break;default:const f=a.rc.get("u",!1);if(f&&f.length<=100){b=f;break a}}}catch(e){}}b=null}a.wa=b;a.fa.get("s",null)&&a.fa.get("s")!==
a.ia&&a.fa.clear()}catch(c){}}function tk(a,b){if(b){const c=new a.g.G.ma.contentWindow.Date(a.g.W.Z()+31536E6);a.D.config.userPersistenceMediums.forEach(d=>{try{switch(d){case "cookie":a.qa.set({[a.D.config.userCookieName]:b,expires:c.toUTCString()});break;default:a.rc.set("u",b);var e=a.rc;e.B.exp=c.getTime();ug(e,"exp")}}catch(f){}})}}async function uk(a){a.Cc&&a.ia&&Mk(a,a.Cc)}
function Nk(a,b){if(a.pb)try{const f=a.ra.timing.domInteractive-a.ra.timing.requestStart;let g=[];a:for(let h=0;h<b.length&&!(a.Ye>a.D.config.maxResourcesPerHit);h++){const k=b[h],l=k.initiatorType;if(a.D.config.allowedResourceTypes.indexOf(l)>-1){const m={};try{let n=Sa(a.D.R.Sb,a.D.R.Wb,Ra(k.name));const q=vb(a.D.config),t=ub(a.D.config,a.sub);if(q&&n.indexOf(q)>-1||t&&n.indexOf(t)>-1||n.indexOf("quantummetric.com")>-1&&!a.D.config.isPivot||K(n,a.D.R.hf))continue a;for(const B in a.df)if(a.df.hasOwnProperty(B)){const w=
a.df[B];m[w]=null;if(typeof k[B]!=="undefined"){let z=k[B];if(typeof z=="number"){if(a.Rh.indexOf(B)>-1&&(z-=a.ke,z>14E6))continue a;z=Math.max(D(z),0)}m[w]=z}}m.st=[];if(k.serverTiming){const B=k.serverTiming;for(var c=0;c<B.length;c++){const w=B[c];try{m.st.push({d:w.description,n:w.name,v:w.duration})}catch(z){}}}m.cr=l!=="xmlhttprequest"&&k.requestStart<f?1:0;m.xo=!n.match(a.Ef);if(l=="script"){c=!1;var d=a.g.G.L(document,"script[src='"+k.name+"']");!d||d.getAttribute("async")==null&&d.getAttribute("defer")==
null||(c=!0);var e=c?1:0}else e=null;m.as=e;m.co=l=="css"||l=="script"?k.decodedBodySize>k.transferSize*1.1?1:0:null;let C=E(k,["duration"],!1);C!=0?C=C<10?1:0:C=null;m.c=C;n&&n.length>1024&&(n=n.substring(0,1024));m.p=n;g.push(m);a.Ye++}catch(n){}}}g.length&&(a.pb?Fi(a,"qr",4096,g):a.Xc=a.Xc.concat(g))}catch(f){console.error("QM:: could not process resource timings:",f)}}
function xk(a){if(a.ra.getEntriesByType)try{a.rg=new window.PerformanceObserver(function(b){const c=a.D.R.sh;b=b.getEntries();var d=b.filter(e=>{const f=e.nextHopProtocol.startsWith("http/"),g=c.some(h=>h.test(e.name));return f&&!g});if(d.length>0){const e=d.length.toString();d=d.map(f=>Ej(a,Sa(a.D.R.Sb,a.D.R.Wb,Ra(f.name)))).filter(f=>!K(f,a.D.R.hf));d={hash:Ea(),value:{violations:d}};R(a.O,{flags:0,id:-67,la:a.g.W.Z(),ja:0},e,d)}a.zg&&Nk(a,b)}),a.rg.observe({type:"resource",buffered:!0})}catch(b){}}
function zk(a){try{a.cg=new window.PerformanceObserver(function(b){b=b.getEntries();for(let c=0;c<b.length;c++){const d=b[c],e=d.name;e==a.D.config.spaTransitionStartMarkerName&&(a.B.rd(a.D.config.spaTransitionStopMarkerName),a.xf=!0,a.ke=cb(a.B),a.xb&&clearTimeout(a.xb),a.D.config.temp.stopLoggingSpaMarkers||P(a.ca,"spaMarker",!0));if(e==a.D.config.spaTransitionStopMarkerName){const f=a.ra.getEntriesByName(String(a.D.config.spaTransitionStartMarkerName));a.xf=!1;f&&f.length&&bb(a.B)&&setTimeout(()=>
{Z(a,function(){a.B.vf(d.startTime-f[f.length-1].startTime);Ji(a,a.B.Pa,!0)})},0)}}}),a.cg.observe({type:"mark",buffered:!0})}catch(b){}}
function Ok(a){if(!a.Ob){var b,c="pointerdown keydown click touchstart visibilitychange pagehide".split(" "),d=g=>b=D(g.startTime,3),e=new window.PerformanceObserver(g=>g.getEntries().forEach(d)),f=g=>{g.isTrusted&&b&&document.visibilityState!=="hidden"&&(e.takeRecords().forEach(d),Fi(a,"mt",65536,{[a.pa["largest-contentful-paint"]]:b}),a.Ob.disconnect())};e.observe({type:"largest-contentful-paint",buffered:!0});c.forEach(g=>a.g.G.addEventListener(window,g,f,{once:!0}));a.Ob={disconnect(){e.disconnect();
c.forEach(g=>window.removeEventListener(g,f))}}}}function Ei(a,b){const c=Ci(a).loadEventEnd||Infinity;return b<a.If&&b<c}
function Pk(a){Ok(a);const b=new Promise(d=>{let e;const f=new window.PerformanceObserver(g=>{let h=null;for(const k of g.getEntries())Ei(a,k.processingStart)&&(h=k.processingStart-k.startTime);clearTimeout(e);d(h);f.disconnect()});f.observe({type:"first-input",buffered:!0});e=setTimeout(()=>{d(null);f.disconnect()},200)}),c=new Promise(d=>{if(!window.PerformanceObserver.supportedEntryTypes.includes("layout-shift"))return d(null);let e;const f=new window.PerformanceObserver(g=>{let h=0;for(const k of g.getEntries())!k.hadRecentInput&&
Ei(a,k.startTime)&&(h+=k.value);clearTimeout(e);d(h);f.disconnect()});f.observe({type:"layout-shift",buffered:!0});e=setTimeout(()=>{d(null);f.disconnect()},200)});Promise.all([b,c]).then(([d,e])=>{d={"first-input-delay":d?D(d,3):null,"cumulative-layout-shift":e?D(e,3):null};e={};for(const f in d)d.hasOwnProperty(f)&&(e[a.pa[f]]=d[f]);Fi(a,"mt",65536,e)}).catch(()=>{})}
function yk(a){if(!a.oc)try{const b=new window.Map,c=({interactionId:e,duration:f,target:g})=>{if(e){f=D(f,0);var h=b.get(e);h&&f<h.duration||(g=nj(a,g),b.set(e,{duration:f,Ea:g}))}},d=new window.PerformanceObserver(e=>{e.getEntries().forEach(c)});d.observe({type:"event",buffered:!0,durationThreshold:16});a.oc=()=>{d.takeRecords().forEach(c);var e=[...b.values()].sort((h,k)=>h.duration-k.duration);if(e.length!==0){var {duration:f,Ea:g}=e[Math.min(e.length-1,Math.ceil(.98*e.length)-1)];f>0&&(e={v:f,
sel:g},X(a,"inp",e),N(a,{t:"inp",v:e},!0));b.clear()}}}catch(b){}}function Qk(a){if(a.hc&&a.hc.length)try{let b={};const c=Ci(a),d=Di(a)?a.g.W.tb:c.navigationStart;let e=[];a.hc.forEach(f=>{let g=c[f];typeof g==="number"&&(Di(a)||(g=Math.max(g-d,0)),g>0&&g<14E6?b[a.pa[f]]=D(g):e.push(f))});Fi(a,"mt",65536,b);a.hc=e}catch(b){}}async function Rk(a){var b=await a.ua.encrypt(a.qa.getAll());N(a,{t:"c",encrypted_cookies:b})}
function Sk(a){if(!a.Ya){a.Ya={};try{var b=function(){var c=window.navigator.userAgent,d=c.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(d[1])){var e=/\brv[ :]+(\d+)/g.exec(c)||[];return"IE "+(e[1]||"")}if(d[1]==="Chrome"&&(e=c.match(/\b(OPR|Edge)\/(\d+)/),e!=null))return e.slice(1).join(" ").replace("OPR","Opera");d=d[2]?[d[1],d[2]]:[window.navigator.appName,window.navigator.appVersion,"-?"];(e=c.match(/version\/(\d+)/i))!=null&&d.splice(1,1,e[1]);return d.join(" ")}().split(" ");
b.length==2&&(a.Ya.ob=b[0],a.Ya.version=b[1])}catch(c){}}return a.Ya}async function Tk(a){try{const b=Sk(a),{Ld:c}=await wg(b.ob=="Safari",b.ob=="Chrome",b.ob=="Firefox");a.Ld=c}catch(b){}}async function Uk(a){if(window.navigator.storage&&window.navigator.storage.estimate){var b=await navigator.storage.estimate();b.usage/b.quota<.95||R(a.O,{flags:0,id:-68,la:a.g.W.Z(),ja:0},"")}}
function Vk(a,b){a.D.config.captureCookiesReplay?a.Ua&&!a.D.config.allowClearCookies?setTimeout(()=>{Rk(a)},1E3):a.B.qd(b,a.qa.getAll()):a.B.qd(b,"");if(!a.B.gd(b)){var c=Ci(a),d=c.domComplete;c=Di(a)?a.g.W.tb:c.navigationStart;d=D(c+d+a.D.config.webVitalsSnapshotBuffer,0);d=a.g.W.Z()-d;setTimeout(()=>{Pk(a)},Math.abs(Math.min(d,0)))}b=a.B.Ee(b);a.qc=!0;Ri(a,b);[,b]=Xh(a,document);b!=0&&Fj(a,document);[a.K.Yb].includes(a.M)||a.g.Rd.start()}
function gk(a,b,c=0){return b&&a.g.G.tagName(b)&&a.g.G.tagName(b).toLowerCase()=="a"&&b.getAttribute("href")?b.getAttribute("href"):a.g.G.parentNode(b)&&c++<10?gk(a,a.g.G.parentNode(b),c):null}
function yj(a){a.ta=a.ta.map(b=>{switch(b.t){case "T":if(b.n==="qframe")return b;case "r":case "a":case "t":return null;case "]":case "[":case "}":case "*":case "C":case "F":case "B":case "_":return null;case "SA":case "CE":case "sc":return null;case "as":case "SI":case "SD":case "SR":return null;case "DO":case "po":return null;case "co":return null;case "O":case "X":case "R":case "D":case "U":case "m":case "!":case "@":case "#":case "$":return null;case "S":return null;case "M":return null;case "xhr":return b.req=
b.res="Omitted due to page unload",delete b.req_enc,delete b.res_enc,delete b.reqHeaders,delete b.resHeaders,delete b.reqHeaders_enc,delete b.resHeaders_enc,b;default:return b}}).filter(Boolean)}async function Mk(a,b){a.ia?(a.Cc="",a.Qf.send(b).catch(c=>{kk(a,c,!1)}).finally(()=>{a.kd=""})):a.Cc=b}
function Wk(){var a=document.doctype,b="";a&&(b="<!DOCTYPE",a.name&&(b+=" "+a.name.toString()),a.publicId&&(b+=' PUBLIC "'+a.publicId.toString()+'"'),a.systemId&&(b+=' "'+a.systemId.toString()+'"'),b+=">");return b}function Xk(a,b){const c=wa(b,"checked");c&&c.configurable&&Object.defineProperty(b,"checked",{...c,set:function(){const d=c.set.apply(this,arguments),e=arguments[0];try{const f=a.aa(b);if(f.Lc===e)return d;f.Lc=e;Ek(a,b,"checked",e)}catch(f){}return d}})}
function Yk(a,b){try{wj(a,b)}catch(c){}}function Zk(a,b){const c=a.g.G.lb(b,"option");for(let e=0;e<c.length;e++)$k(a,c[e]);const d=wa(b,"selectedIndex");Object.defineProperty(b,"selectedIndex",{...d,set(e){e=d.set.call(this,e);Yk(a,b);return e}})}
function Ui(a,b){const c=Ni(a,b);if(!c.xh){b.type.toLowerCase()!=="checkbox"&&b.type.toLowerCase()!=="radio"||Xk(a,b);b.nodeName.toLowerCase()==="select"&&Zk(a,b);var d=!0,e=!0,f=wa(b,"value");f&&!f.configurable&&(e=!1);if(f&&e)try{Object.defineProperty(b,"value",{configurable:!0,set:function(){const g=f.set.apply(this,arguments);Yk(a,b);return g},get:function(){return f.get.apply(this)}}),d=!1}catch(g){}d&&(c.Eh=!0,a.He.add(b));b.addEventListener("input",()=>{Yk(a,b)});c.xh=!0}}
function $k(a,b){let c=wa(b,"selected");Object.defineProperty(b,"selected",{...c,set(d){c.set.call(this,d);(d=hk(a,b))&&Yk(a,d)}})}async function al(a,b){const c=a.aa(b).ea;var d=[];if(b=a.g.G.ba(b)){for(let f=0;f<b.length;++f)try{d.push(Vb(a.g.ya,b[f]))}catch(g){}d=Promise.all(d);a.L.push(d);Wb(a.g.ya);const e={t:"as",I:c,S:[]};d.then(f=>{e.S=f});N(a,e)}}
function bl(a,b){const c=Ni(a,b);if(!c.zh){var d=wa(b,"adoptedStyleSheets");d&&d.configurable&&(Object.defineProperty(b,"adoptedStyleSheets",{set:function(){const e=d.set.apply(this,arguments);try{al(a,b)}catch(f){}return e},get:function(){return d.get.apply(this)},enumerable:d.enumerable,configurable:!0}),c.zh=!0)}}
function cl(a,b=window){Ni(a,b).Fh||(Ni(a,b).Fh=!0,a.g.G.addEventListener(b,"toggle",c=>{if(a.va===y.NONE&&c.newState!==c.oldState){var d=a.Ba(c.target);d&&(d={t:"po",I:d,o:c.newState==="open"},c.source&&(d.s=a.Ba(c.source)),N(a,d))}},{capture:!0}))}
function Vi(a,b){const c=a.aa(b);b=a.g.G.shadowRoot(b);c.Lg||(bl(a,b),Zj(a,b,!0),cl(a,b),c.Lg=!0,a.Vb.add(b),b&&b.slotAssignment==="manual"&&b.addEventListener("slotchange",d=>{const e=a.Ba(d.target);e&&(d=(d.target.assignedNodes({flatten:!0})||[]).map(f=>a.Ba(f)).filter(Boolean),N(a,{t:"sc",I:e,A:d}))}));a.g.Ub.observe(b)}
async function dl(a){var b=new Vg({na:new WeakMap,Od:!1,ae:{},rb:new Set,Hb:()=>!1,Gb:()=>!1,Wd:!1,Vd:!1,url:a.Ca,G:a.g.G,supports:a.g.supports,aa:a.aa.bind(a),ea:a.ea});const {gb:c}={gb:Wg(document.documentElement,b),Bb:b.Bb},d=new Xb({g:{ga:a.g.ga,G:a.g.G},D:{R:{Gd:"*",Dd:"",Sc:!1},config:{hashResourceURL:""}},Ya:{ob:a.Ya.ob}});b.Zd.forEach(({node:h,gb:k})=>{h.nodeType===11?(h=a.g.G.ba(h).map(l=>Vb(d,l)),Promise.all(h).then(l=>{k.S=l})):(a.g.G.tagName(h)==="STYLE"&&Vb(d,h.sheet).then(l=>{k.S=l;
k.C=[]}),a.g.G.tagName(h)==="LINK"&&h.getAttribute("href")&&Vb(d,h))});b=Wb(d);const e=await Promise.all(Array.from(a.Yc).map((h,k)=>{const l=new wb;cj(a,{method:"POST",url:"/v1/page-freeze",body:{id:k}}).then(m=>{l.resolve({dom:m.dom,qf:m.qf,hoveredElement:m.hoveredElement})},m=>{P(a.ca,"issue with page-freeze",{message:m.message},"error")});return Promise.race([l.promise,new Promise(m=>{setTimeout(m,5E3,{})})])})),f=e.find(h=>h.hoveredElement),g=a.xc&&[a.xc];g&&f&&f.hoveredElement&&g.push(...f.hoveredElement);
return b.then(()=>({json:c,iframes:e,hoveredElement:g}))}
function Ti(a,b){const c=new a.g.G.ma.contentWindow.WeakMap;if(b.nodeType!==1&&b.nodeType!==9)return c;var d=a.D.R.Rc;if(a.Ua){var e=a.g.ga.querySelectorAll(b,a.D.R.Ib);a.g.ga.matchesSelector(b,a.D.R.Ib)&&e.push(b);e.forEach(f=>{c.set(f,{encrypt:!0});a.aa(f).Lb=!0});e=a.g.ga.querySelectorAll(b,a.D.R.Fc);a.g.ga.matchesSelector(b,a.D.R.Fc)&&e.push(b);e.forEach(f=>{c.has(f)||c.set(f,{});const g=c.get(f);g.encrypt=!1;a.aa(f).Lb=g.encrypt});a.D.config.encryptNodeAttributes.forEach(f=>{const {sel:g,attrs:h}=
f;f=a.g.ga.querySelectorAll(b,g);a.g.ga.matchesSelector(b,g)&&f.push(b);f.forEach(k=>{c.has(k)||c.set(k,{});k=c.get(k);k.Cd=k.Cd?k.Cd.concat(h):h})})}d||(d=a.g.ga.querySelectorAll(b,a.D.R.zd),a.g.ga.matchesSelector(b,a.D.R.zd)&&d.push(b),d.forEach(f=>{c.has(f)||c.set(f,{});const g=c.get(f);g.Pc=!0;a.aa(f).eb=g.Pc}));d=a.g.ga.querySelectorAll(b,a.D.R.Gc);a.g.ga.matchesSelector(b,a.D.R.Gc)&&d.push(b);d.forEach(f=>{c.has(f)||c.set(f,{});const g=c.get(f);g.Pc=!1;a.aa(f).eb=g.Pc});a.D.R.Kg.forEach(f=>
{const {sel:g,attrs:h}=f;f=a.g.ga.querySelectorAll(b,g);a.g.ga.matchesSelector(b,g)&&f.push(b);f.forEach(k=>{c.has(k)||c.set(k,{});k=c.get(k);k.rb=k.rb?k.rb.concat(h):h})});a.D.R.Eb.forEach(f=>{const g=f.Ea,h=a.g.ga.querySelectorAll(b,g);a.g.ga.matchesSelector(b,g)&&h.push(b);h.forEach(k=>{c.has(k)||c.set(k,{});k=c.get(k);k.pf?k.pf.push(f):k.pf=[f]})});a.D.R.ac&&(d=a.g.ga.querySelectorAll(b,a.D.R.ac),a.g.ga.matchesSelector(b,a.D.R.ac)&&d.push(b),d.forEach(f=>{c.has(f)||c.set(f,{});c.get(f).qh=!0}));
return c}function el(a,b){b<25E3||setTimeout(()=>{Tb(a,"DOM_SIZE",b)},1)}async function fl(a){const {gb:b,Bb:c,Ae:d}=Si(a,document);var e=a.g.G.ba(document)||[];e=Promise.all(e.map(f=>a.g.ya.Ha(f))).then(f=>{b.S=f});el(a,c);a.B.uf(c);await Promise.all([d,e]);return`${Wk()}<html><head></head><body><!--QMJSONHTML:${a.g.G.stringify(b).replace(/--\x3e/g,"QMCOMMENTEND->")}--></body></html>`}function gl(a){Z(a,function(){a.Jc<5242880?Mk(a,a.kd):Tb(a,"ZSYNC_2LG",{htmlSize:a.Jc,pageURL:a.Ca})})}
function hl(a){a.Pf||(a.Pf=!0,window.addEventListener("error",b=>{const c=b.message,d=b.filename,e=b.lineno,f=b.colno;b=b.error;const g=[];c&&g.push(c);d&&g.push(d);e&&g.push(e);f&&g.push(f);b&&b.stack&&g.push(b.stack);sj(a,g.toString())}))}
function il(a){if(!a.Hf&&(a.Hf=!0,window.HTMLDialogElement!=void 0)){const b=window.HTMLDialogElement.prototype.showModal;window.HTMLDialogElement.prototype.showModal=function(){try{const c=a.aa(this).ea;N(a,{t:"DO",I:c});Hi(a,a.ka,a.L)}catch(c){}return b.call(this)}}}function jl(a,b,c,d,e){c={t:"SI",i:d,v:c,p:e};b.ownerNode?c.I=a.aa(b.ownerNode).ea:(d=a.g.ya.register(b),c["I+"]=d.ud);if(c.I||c["I+"])a.g.ya.unregister(b),N(a,c),Hi(a,a.ka,a.L)}
function kl(a,b,c,d){c={t:"SD",i:c,p:d};b.ownerNode?c.I=a.aa(b.ownerNode).ea:(d=a.g.ya.register(b),c["I+"]=d.ud);if(c.I||c["I+"])a.g.ya.unregister(b),N(a,c),Hi(a,a.ka,a.L)}
function ll(a){if(!a.Dg&&(a.Dg=!0,typeof window.CSSStyleSheet!=="undefined")){var b=window.CSSStyleSheet.prototype.insertRule;b&&(window.CSSStyleSheet.prototype.insertRule=function(e,f){const g=b.call(this,e,f);try{a.va===y.NONE&&jl(a,this,e,f)}catch(h){}return g});var c=window.CSSStyleSheet.prototype.deleteRule;c&&(window.CSSStyleSheet.prototype.deleteRule=function(e){const f=c.call(this,e);try{a.va===y.NONE&&kl(a,this,e)}catch(g){}return f});var d=window.CSSStyleSheet.prototype.replaceSync;d&&(window.CSSStyleSheet.prototype.replaceSync=
function(e){const f=d.call(this,e);try{if(a.va===y.NONE){e={t:"SR",v:{v:e}};if(this.ownerNode)e.I=a.aa(this.ownerNode).ea;else{const g=a.g.ya.register(this);e["I+"]=g.ud}if(e.I||e["I+"])a.g.ya.unregister(this),N(a,e),Hi(a,a.ka,a.L)}}catch(g){}return f});"CSSStyleRule CSSMediaRule CSSSupportsRule CSSStartingStyleRule CSSPageRule CSSLayerBlockRule".split(" ").forEach(e=>{const f=window[e]&&window[e].prototype.insertRule;f&&(window[e].prototype.insertRule=function(h,k){const l=f.call(this,h,k);try{a.va===
y.NONE&&jl(a,this.parentStyleSheet,h,k,Rg(this))}catch(m){}return l});const g=window[e]&&window[e].prototype.deleteRule;g&&(window[e].prototype.deleteRule=function(h){const k=g.call(this,h);try{a.va===y.NONE&&kl(a,this.parentStyleSheet,h,Rg(this))}catch(l){}return k})})}}
function ml(a,b){const c=new Ua(a,b);if(b===4||b===1)a.wf=!0;if(c.navigationType===64||jb(a.B,c)){const d=ib(a.B,c);a.fa.set("lastUrl",hb(a.B).toString());a.ke=cb(a.B);a.xf||(a.stop(y.ge),a.xb&&clearTimeout(a.xb),a.xb=setTimeout(function(){Ji(a,d,!0)},c.navigationType===64?0:a.D.config.spaLocationChangedTimeout))}}
function nl(a){function b(k){try{ml(c,k)}catch(l){}}if(!a.Tf){a.Tf=!0;var c=a,d=a.g.G;d.addEventListener(window,"hashchange",function(){ml(c,16)},!1);var e=window.history,f=e.go;a=e.pushState;var g=e.replaceState;e.go=function(){var k=f.apply(e,arguments);b(1);return k};var h=(k,l)=>(...m)=>{try{return k.apply(e,m)}catch(n){if(n.name!=="DataCloneError"&&typeof m[0]!=="object")throw n;m[0]=d.Ma(d.stringify(m[0]));return k.apply(e,m)}finally{b(l)}};e.pushState=h(a,2);e.replaceState=h(g,8);d.addEventListener(window,
"popstate",function(){b(4)},!1)}}function wk(a){if(a=a.O.kb)return a.abn}function ej(a){let b=a.fa.get("sst",!1);b||(b=a.g.W.Z(),a.fa.set("sst",b));b=parseInt(b,10);const c=a.g.W.Z();return{Bh:Math.ceil((c-b)/6E4),Ch:a.D.config.maxSessionDuration*60*1E3-(c-b)}}function vk(a){if(a.kc!==null&&!a.Cf){var b=a.D.R.Fd,c=a.kc.getEntries(),d=async e=>{(e.type!=="fetch"||b)&&await Ck(a,...e.args)};a.kc.onAPI(d);a.Cf=!0;return Promise.all(c.map(d))}}
function ol(a){a.g.G.addEventListener(window,"load",function(){setTimeout(function(){Qk(a)},5)});if(K(window.location.href,a.D.R.Tc))setTimeout(function(){a.start()},0);else if(a.g.G.readyState(document)==="complete")setTimeout(function(){a.start()},a.D.config.startOffset||0);else{var b=!1,c=function(d){try{b||d.type==="readystatechange"&&a.g.G.readyState(document)!=="complete"||(b=!0,setTimeout(function(){a.start()},a.D.config.startOffset||0))}catch(e){}};a.g.G.addEventListener(document,"DOMContentLoaded",
c,!1);a.g.G.addEventListener(document,"readystatechange",c,!1)}}function pl(a){return K(a.Ca,a.D.R.Sg)?!1:K(a.Ca,a.D.R.$f)}function ij(a){if(JSON&&JSON.stringify&&!a.Ce){a.Ce=!0;ol(a);try{window.navigator.vendor&&window.navigator.vendor.indexOf("Apple")==0&&typeof document.hasStorageAccess=="function"&&document.requestStorageAccess().then(function(){},function(){a.ie=!1})}catch(b){}}}function lj(a){a.ua?(a.dd=!0,Pi(a)):a.ua=new ae(a.Ua,function(){a.dd=!0;Pi(a)},a)}
function ql(a,b){a.oa&&(b?(a.fa.set("visible",!0),P(a.ca,"visibleInstalled",!0),a.oa.freeze=()=>dl(a)):(a.fa.ib("visible"),delete a.oa.freeze))}function rl(a){const b=document.createElement(a.Ud);b.src=a.D.config.visibleURL;b.crossOrigin="anonymous";document.head.appendChild(b);ql(a,!0)}function sl(a,b,c={}){a={namespace:"quantum",scope:a.sub,type:"page-freeze-complete"};for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);b.postMessage(a,"*")}
function tl(a){window.addEventListener("message",function(b){var c=b.data;if(c&&typeof c=="object"&&c.namespace=="quantum"&&c.scope===a.sub)try{const d=b.data;if(d.type)switch(d.type){case "qm-visible":const e=d.action;if(e)switch(e){case "close":ql(a,!1);break;case "install":rl(a);break;case "start":ql(a,!0)}else console.warn("Invalid visible action:",d);break;case "qm-recorder":rd(a.g.Rd,d);break;default:P(a.ca,"unknown qframe message",{type:d.type},"error")}}catch(d){}},!1)}
function ul(a){var b=[];document.visibilityState==="visible"?setTimeout(a,0,...b):a(...b)}function vl(a,b){const c=()=>{try{const d=b.shift();d&&(d(),ul(c))}catch(d){$i(a,d)}};ul(c)}
async function mj(a,b,c=!0,d=null){try{if(zc(a.D),zc(a.g.Zb.B),a.fa.set("configReplayEnabled",a.D.config.replayEnabled),a.Ca=a.B.Va.mb,a.B.Ed(),pl(a))gb(a.B,b),a.stop(y.de);else if(wl(a)){switch(a.va){case y.NONE:break;case y.de:case y.ge:a.stop(y.NONE);break;default:return}if(!a.qc&&a.pb){await Ic(a.g.W);Lk(a);aj(a);Tj(a,"input, select, option, textarea");a.O=new ng(a,a.ze);a.O.load(a.Ca,{events:a.g.Pg.B});a.O.Fa=d;Mc(a.g.nb,document);Th(a.g.Aa,document);si(a.g.bb);Uk(a);a.bc=Ea();if(a.Ka){const f=
fl(a);bl(a,document);xl(a);ei(a,document.documentElement);a.g.Ub.observe(document);ll(a);il(a);cl(a);const g=a.g.W.Z();a.kd=await f.catch(h=>{Tb(a,"SYNC_ERR",h.message);return""});a.Ja.qb("html-snapshot",null);a.g.Jg.sample(.01,()=>{const h=a.g.W.Z();P(a.ca,"snapshotDuration",h-g)});a.Jc=(new TextEncoder).encode(a.kd).length;gl(a);if(a.B.Pa!==b){a.B.Mb(b)&&($a(a.B).Mb=!0);gb(a.B,b);return}}a.O.cf();[a.K.Da].includes(a.M)||window.opener!==null&&window!==window.opener||a.ee||(a.frameId=a.g.W.Z());Vk(a,
b);a.frameId&&cj(a,{method:"POST",url:"/v1/set-child-frame-id",body:{id:a.frameId}});c&&yl(a);Xi(a,document.documentElement,"class",document.documentElement.className);a.D.config.disableErrorHooking||hl(a);fk(a);sk(a);a.wg||(a.wg=setInterval(a.ah.bind(a),1E3));a.sc=setTimeout(()=>{if(a.va===y.NONE){var f=a.g.G.innerText(document.body);typeof f=="string"&&f.length<100&&f.replace(/\s/g,"").length==0&&(f={flags:0,id:-46,la:a.g.W.Z()},R(a.O,f,a.Ca));a.sc=null}},6E3);a.oa.cf();try{window.dispatchEvent(new Event("QM-PAGE-READY"))}catch(f){}zl(a);
Kd(a.g.console,a.D.config);a.ua.da=!0;Hi(a,a.ka,a.L);var e=Uj();e&&(a.zc=e,X(a,"sd",e));uj(a);hj(a)}}else a.stop(y.he)}catch(f){$i(a,f)}}function zl(a){for(var b=0;b<10;b++)a.zb[b]=0;a.zb.totalTime=0;a.zc=0;a.ec=a.g.W.Z();a.We=a.ec}
function wl(a){var b=!0;if(![a.K.Da].includes(a.M))return!0;var c=a.qa.get(a.D.config.enabledCookie);c?c==="false"&&(b=!1):a.D.config.percentSampling&&a.D.config.percentSampling<100&&(c=!0,a.D.config.percentSampling&&a.D.config.percentSampling<100&&(c=a.g.W.Z()%100<a.D.config.percentSampling),c||(b=!1),a.qa.set({[a.D.config.enabledCookie]:b}));return b}
function xl(a){if(!a.zf){var b=window.Element.prototype.attachShadow;window.Element.prototype.attachShadow=function(c){const d=b.call(this,c);if(c.mode==="closed")return d;try{const e=a.aa(this);if(a.g.G.isConnected(this)&&!e.Lg){const f=e.ea;if(!f)return d;const g=a.g.G.shadowRoot(this),h=a.aa(g);h.ea=a.ea();const k={t:"SA",p:f,q:h.ea,sa:c.slotAssignment},{gb:l,Ae:m}=Si(a,g);a.L.push(m.then(()=>{k.v=l}));N(a,k);Hi(a,a.ka,a.L);Vi(a,this)}}catch(e){console.error(e)}return d};window.Element.prototype.attachShadow.toString=
()=>"[native code]";if(window.customElements&&window.customElements.define){const c=Object.getPrototypeOf(window.customElements),d=c.define;c.define=function(e,f,g){const h=d.apply(this,arguments);a.customElements.add(e);N(a,{t:"CE",n:e});return h}}a.zf=!0}}
function yl(a){a.Ja.addEventListener("start-event",async()=>{await ok(a,{method:"GET",url:"/v1/frame-id",body:{}},async(b,c)=>{({id:b}=b);b!==void 0&&(N(a,{t:"rnh",v:b}),await Al(a,c.contentWindow,{method:"POST",url:"/v1/set-parent-id",body:{replayId:a.bc,parentHitId:a.za}}))})},{once:!0})}function Bl(a){const b=window.navigator.userAgent;return a.D.R.ph.some(c=>c.test(b))}
function Cl(a){if(E(window,["webkit","messageHandlers","QMSDKv5"],!1)!==!1||Bl(a))return!0;a=window.navigator.standalone;var b=window.navigator.userAgent.toLowerCase(),c=/safari/.test(b);if(/iphone|ipod|ipad/.test(b)){if(!a&&c||a&&!c)return!1;if(!a&&!c)return!0}else return!1}function Dl(a){if(Bl(a))return!0;a=window.navigator.userAgent;return a.indexOf("Android")>-1&&(a.indexOf("; wv)")>-1||RegExp("Version/[0-9]+.[0-9]+").test(a))?!0:!1}function El(a){return Cl(a)||Dl(a)}
async function Fl(a,b){[a.K.Da].includes(a.M)?(a.qa.set({[a.D.config.enabledCookie]:b}),b?(await a.stop(y.NONE),await Ji(a,db(a.B),!1),ok(a,{method:"POST",url:"/v1/reset",body:{}})):a.stop(y.fe)):cj(a,{method:"POST",url:"/v1/enable-session",body:{enabled:b}})}async function Gl(a,b){a.fa.set("apiReplayEnabled",b);N(a,{t:"re",v:b});ok(a,{method:"POST",url:"/v1/enable-replay",body:{enabled:b}});b&&ml(a,64)}
async function Hl(a,b){if([a.K.Da].includes(a.M))try{b?(a.qa.set({[a.D.config.enabledCookie]:!b,expires:"Fri, 31 Dec 2099 23:59:59 GMT"}),a.stop(y.he)):(a.qa.ib({[a.D.config.enabledCookie]:!b}),await a.stop(y.NONE),Ji(a,db(a.B)).then(()=>ok(a,{method:"POST",url:"/v1/reset",body:{}})))}catch(c){}else cj(a,{method:"POST",url:`/v1/${b?"opt-out":"opt-in"}`,body:{}})}function Il(a,b){if(b!==0){var c=a.fa.get("sampleReplayEnabled",null);c===null&&(c=a.g.W.Z()%100<b,a.fa.set("sampleReplayEnabled",c))}}
function Jl(a){a.ee=!0;a.qa.ib({[a.D.config.enabledCookie]:!0})}function Al(a,b,{method:c,url:d,body:e}){return qh(a.g.fc,b,{method:c,url:d,body:e}).then(ra).catch(f=>{P(a.ca,"sdkcomm: issue sending message to child",{message:f.message,method:c,url:d},"error")})}function Kl(a,b){const c=async()=>{await Al(a,b,{method:"POST",url:"/v1/set-context",body:pk(a)});await Al(a,b,{method:"POST",url:"/v1/new-page",body:{}})};a.ia&&a.za?c():a.Ja.addEventListener("start-event",c,{once:!0})}
function Ll(a){for(a=a.getRootNode();a.nodeType===Node.DOCUMENT_FRAGMENT_NODE;)a=a.host.getRootNode();return a===document}
function Ml(a){const b={ack:!0},c={GET:{v1:{connect:(e,f)=>{if(f.scope===a.sub)return b},"frame-id":()=>({id:a.frameId,...b})}},POST:{v1:{engaged:()=>{hj(a);return b},"opt-out":()=>{Hl(a,!0);return b},"opt-in":()=>{Hl(a,!1);return b},"set-context":e=>{const {session:f,user:g,state:h,parentHitId:k,replayEnabled:l,contextId:m}=e;f.length<=100&&g.length<=100?(a.ia&&a.za&&(gj(a,!0),jj(a),Ki(a),a.za=void 0),a.ia=f,a.wa=g,a.ld=k,h&&(a.fa.import(h),a.Rf=!0),typeof l==="boolean"&&(a.Df=l),a.Ec=m,mk(a),nl(a),
ok(a,{method:"POST",url:"/v1/set-context",body:pk(a)})):P(a.ca,"sdkcomm: invalid context issued",{s:f,u:g},"error");return b},"child-ready":async(e,f)=>{({"from-frame":e}=e);e&&(e=await f.frame(),a.Yc.add(e));Kl(a,f.sender);return b},"set-child-frame-id":async(e,f)=>{f=await f.frame();if(!f)return b;({id:e}=e);a.aa(f).jc=e;a.qc||await new Promise(h=>a.Ja.addEventListener("start-event",h,{once:!0}));let g=5;do{const h=a.g.G.isConnected(f),k=Ll(f),l=a.aa(f).ea;if(h&&k&&l)return N(a,{t:"T",I:l,n:"qframe",
v:e}),b;await new Promise(m=>setTimeout(m,50))}while(g--);P(a.ca,"qframe: unable to resolve nodeIdentifier",{attempts:5},"warn");return b},"set-parent-id":e=>{const {replayId:f,parentHitId:g}=e;a.ld=g;N(a,{t:"chr",p:f});return b},"sub-frame-size":async(e,f)=>{const {w:g,h}=e;a.Ka&&(e=await f.frame(),e=a.aa(e).ea,N(a,{t:"i+",w:g,$h:h,I:e}));return b},"new-session":()=>{[a.K.Yb].includes(a.M)?cj(a,{method:"POST",url:"/v1/new-session",body:{}}):[a.K.Da].includes(a.M)&&bj(a);return b},"enable-session":e=>
{[a.K.Yb].includes(a.M)?cj(a,{method:"POST",url:"/v1/enable-session",body:e}):[a.K.Da].includes(a.M)&&Fl(a,e.enabled);return b},"enable-replay":e=>{e=e.enabled;Gl(a,e);ok(a,{method:"POST",url:"v1/enable-replay",body:{enabled:e}});return b},"new-page":()=>{a.va=y.NONE;Ji(a,db(a.B),!0,!1);return b},reset:()=>{a.Ja.addEventListener("start-event",()=>{ok(a,{method:"POST",url:"/v1/set-context",body:pk(a)}).then(()=>ok(a,{method:"POST",url:"/v1/reset",body:{}}))},{once:!0});Ji(a,db(a.B),!0,!1);return b},
stop:e=>{e=e.reason;a.stop(e);ok(a,{method:"POST",url:"/v1/stop",body:{reason:e}});return b},"page-freeze":e=>{dl(a).then(({hoveredElement:f,...g})=>{sl(a,a.g.G.M(window),{dom:g,id:e.id,qf:a.frameId?a.frameId.toString():a.frameId,hoveredElement:f})})}}}};a.g.fc=new rh({ca:a.ca,sub:a.sub,G:a.g.G,cb:c,Vb:a.Vb,Db:a.D.config.sdkCommRetryDelay,Ab:a.D.config.sdkCommRetryCount});a.g.Hc=new qi({ca:a.ca,sub:a.sub,cb:{GET:{v1:{connect:()=>({...b,config:a.g.G.stringify({flutter:a.bb,exchange_rates:a.yd}),enabled:wl(a)})}},
POST:{v1:{"child-ready":()=>{const e=async()=>{await pi(a.g.Hc,{method:"POST",url:"/v1/set-context",body:pk(a)})};a.ia&&a.za?e():a.Ja.addEventListener("start-event",e,{once:!0});return b},event:async(e,f)=>{f=f.view;var g=a.g.bb.B.get(f||0);if(!g||!g.canvas)return P(a.ca,"flutter-missing-view",f,"error"),b;f=g.canvas;g=g.ea;const h=e.t;if(!ri.has(h)||!g)return b;if(h==="L")return f=Eg(a.g.Wc,f.parentElement),f+=`>div:last-child:nth-child(1):only-child>\u00a7>${e.ev}`,e.I=[g,e.I],e.ev=f,N(a,{t:"b",
I:e.I,v:e.v}),N(a,e),b;if(h==="T"||h==="nsc"||h==="C"||h==="F"||h==="B")e.I=[g,e.I];h==="rn"&&(e.c=[g,e.c]);h==="a"&&(e.p=e.p.startsWith("<")?e.p:[g,e.p],(f=e.j?e.j[0].E:null)&&(e.j[0].E=await a.ua.encrypt(a.g.G.stringify(f))));N(a,e);return b},oob:(e,f)=>{var g=e.k;e=e.v;if(g!==null&&e!==null)switch(g){case "s":f=e.delta;e=e.isV;f&&(a.yb+=e?f/a.Fb:f/a.Xb,X(a,"s",a.yb));break;case "qc":f=f.view;g=a.g.bb.B.get(f||0);if(!g||!g.canvas){P(a.ca,"flutter-missing-view",f,"error");break}f=g.canvas;g=Eg(a.g.Wc,
f.parentElement);g+=`>div:last-child:nth-child(1):only-child>\u00a7>${e.ev}`;e.ev=g;f=nj(a,f.parentElement);f+=`>div S# ${e.P}`;e.P=f;++a.Rb;X(a,"c",a.Rb);hj(a);X(a,"qc",e);break;case "k":if(e=e.charsTyped)a.Nb+=e,X(a,"k",a.Nb)}return b},encrypt:async e=>{let f;e=(f=e.v)!=null?f:"";return{v:await a.ua.encrypt(e),...b}},"trigger-event":async e=>{const {id:f,v:g,f:h,j:k}=e;if(e=k)e=a.g.G.Ma(e),e={hash:await Qb(a.g.G.stringify(e,Zb)),value:e};const l=a.O.K[f]||{id:f,flags:h,la:a.g.W.Z()};eg(a.O,l,g,
e);return b},stop:async e=>{if(a.va!==y.NONE)return b;e=e.endSession;await Fl(a,!1);e&&(Ii(a),a.pd=!0,a.ia=void 0);return b},start:async()=>{if(a.va===y.NONE)return b;await Fl(a,!0);return b}}}},Db:a.D.config.sdkCommRetryDelay,Ab:a.D.config.sdkCommRetryCount});const d=Cl(a);Dl(a)&&window.QMSDKv5&&(a.g.vd=new vh({La:window.QMSDKv5,ca:a.ca,sub:a.sub,G:a.g.G,timeout:a.D.config.sdkCommTimeout,cb:c}));E(window,["webkit","messageHandlers","QMSDKv5"],!1)&&d&&(a.g.Jd=new xh({La:window.webkit.messageHandlers.QMSDKv5,
ca:a.ca,sub:a.sub,timeout:a.D.config.sdkCommTimeout}))}
function Nl(a,b={}){let {eventDefinitions:c,sub:d,publicKeyString:e,ipEncryption:f,eventNameMap:g,errorIds:h,adobe:k,surveys:l,flutter:m,...n}=b;"capture"in n&&(n=n.capture);a.bb=m;a.Ua=e;a.we=g||{};a.gg=h||[];if(!window[`QuantumMetricAPI_${d}`])if(window.location.protocol=="data:")console.warn("QM blocked in data: protocol environments");else{a.oa=new Ol(a);window.QuantumMetricAPI=a.oa;[`QuantumMetricAPI_${d}`].forEach(u=>{Object.defineProperty(window,u,{configurable:!1,enumerable:!0,get:()=>a.oa,
set:()=>{Tb(a,"api_tamper",encodeURIComponent(Error().stack.toString()))}})});var q=!1,t=a.g.G.ma.contentWindow.Date.now()%100<10;b=new URLSearchParams(window.location.search);if(b.has("web-vitals-buffer")){q=!0;var C=b.get("web-vitals-buffer");pd.webVitalsSnapshotBuffer=parseInt(C,10)}C=typeof n.reportURL==="string"?n.reportURL:"";Gc(a.g.W);a.D=new Ac(n,od,pd,{Gc:"",Ib:"",Fc:"",Rc:!1,zd:"",pe:[oa],kf:[],$f:[],Sg:[],Qg:[],Dd:"",Gd:"",Sc:!1,Xh:[],Tc:[],tf:[],Og:[],xd:[],Ve:[],fg:[],ac:"",hg:[qa],xe:null,
Zg:[],Xg:[],Ug:[],Tg:[],$g:[],Yg:[],Wg:[],Vg:[],qe:[],gf:[],Wb:[],lf:".loading,.loader,.spinner",ye:[],Fd:!0,mg:null,Kg:null,Eb:[],Ke:"",ai:!0,hf:[],Ka:!0,Je:"",Sb:new window.Set},ki,ji,d);zc(a.D);a.Na=new ih(a.g.G,a.D,d);var B=ub(a.D.config,d);try{var w=Ra(B);if(w.href!==B&&w.href!==B+"/"&&w.pathname!==B)throw Error("URL is malformed");}catch(u){console.error("QM: reportURL is malformed");return}a.fa=new vg(a,a.D.config.sessionStoreNamespace,"sessionPersistenceMediums",a.g.G);a.D.fa=a.fa;a.rc=new vg(a,
a.D.config.userStoreNamespace,"userPersistenceMediums",a.g.G);w=()=>{let u={},r=null,p=0;const A=x=>{if(a.ia&&Object.keys(u).length){var G={s:a.ia,Q:5},L=Fa(G);L=ub(a.D.config,a.sub)+"?"+L;var F={...u};u={};r=null;switch(x){case 0:hh(a.Na,G,a.g.G.stringify(F)).then(()=>{p=0}).catch(()=>{u={...F,...u};!r&&p<5&&(p++,r=setTimeout(A,a.D.config.publishInterval,0))});break;case 1:window.navigator.sendBeacon(L,a.g.G.stringify(F))}}};a.g.G.addEventListener(document,"visibilitychange",()=>{document.visibilityState==
"hidden"&&(clearTimeout(r),A(1))});return x=>{x&&typeof x==="object"&&x.t==="set"&&Ha(x.path)&&(u[x.path]=x.value,r||(r=setTimeout(A,a.D.config.publishInterval,0)))}};a.D.config.temp.enableKVS&&og(a.fa.M,w());a.sub=d;a.ca=new xg({G:a.g.G,D:a.D,sub:a.sub,De:()=>a.Ec});Hc(a.g.W,a.D,a.ca,a.sub);qd(a.g.Rd);a.qa=new ch(a.g.G,a.D);a.g.Zb=new Lh(a,k);Fh(a.g.Zb);a.g.Ub=new ii(a,a.g.G,a.Ja,a.ca,a.D);a.g.Pg=new mi(l||{},a.Ja);a.B=new kb(a);Ml(a);tl(a);a.g.bb=new vi(a.D,a.g.ga,a.g.G,a.Ja,a.g.Hc,a);C&&P(a.ca,
"dep-cfg",C);t&&q&&P(a.ca,"wo","web-vitals-buffer");a.og=new RegExp(ha(a.bh),"i");q=Sk(a);a.qg=q.ob=="Safari"&&q.version<=11;Il(a,a.D.config.sampleReplay);a.ze=c||a.ze;try{a.g.G.ka(document,document.documentElement,window.NodeFilter.SHOW_ALL,null)}catch(u){}a.Ef=new RegExp(window.location.host);try{++a.uc;a.ra=window.performance;ik(a);Ob(a.g.ya);dd(a.g.oa,a.D.config.apiDefinitions);try{const x=window.location.href;var z=a.fa.get("lru",null);a.D.R.xd.length&&(z?z!==window.location.href&&a.fa.ib("lru"):
a.fa.set("lru",window.location.href));if(Za(a,"type")=="reload"||window.location.href==document.referrer||window.location.href==z)for(z=0;z<a.D.R.xd.length;++z){const {re:G,count:L}=a.D.R.xd[z],F=["bfr",G.source].join(":");if(G.test(x)){const S=a.fa.get(F,0);if(S>=L)return;a.fa.set(F,S+1)}else a.fa.ib(F)}else a.fa.ib(["bfr"])}catch(x){console.warn("QM: issue handling `blockFrequentReloads` config.")}a.g.G.addEventListener(document,"visibilitychange",()=>{Z(a,()=>{ik(a)})},!0);function u(){ij(a);--a.uc}
const r=b.get(a.D.config.bookmarkToolbarQueryParamName);try{if(typeof r=="string"){const x=r.replace(/-/g,"");x.length<=100?(a.ia=x,mk(a)):console.warn("QM: bookmark recording ID is incorrect format")}}catch(x){console.error("QM: unable to initialize recorder:",x)}const p=window.QM_SDK_USER_ID||window.QM_USER_ID;p&&p.length<=100&&(a.wa=p.toString());const A=window.QM_SDK_SESSION_ID||window.QM_SESSION_ID;A&&A.length<=100&&(a.ia=A.toString(),mk(a));try{for(const x of a.D.config.nestedStitchingQueryParams){let G=
x;const L=Ra(window.location.href);let F=!1;G.reduce((S,M,T)=>{try{if(S){var J=null,Ja=(new URLSearchParams(S.search)).get(M);Ja&&(J=Ra(Ja));if(J&&T==G.length-1){const nb=new URLSearchParams(J.search),ab=nb.get(a.D.config.queryParamForSessionId),Ka=nb.get(a.D.config.queryParamForUserId);if(ab&&Ka&&ab.length<=100&&Ka.length<=100)return a.ia=ab,a.wa=Ka,mk(a),F=!0,null}return J}}catch(nb){}},L);if(F)break}}catch(x){}if(a.D.config.queryParamForSessionId||a.D.config.queryParamForUserId){const x=new URLSearchParams(window.location.search),
G=x.get(a.D.config.queryParamForSessionId),L=x.get(a.D.config.queryParamForUserId);G&&L&&G.length<=100&&L.length<=100&&(a.ia=G,a.wa=L,mk(a))}if(r||a.fa.get("isRecording"))a.D.R.Tc=[/(?:)/],a.D.config.startOffset=0;else if(a.g.G.M(window)!==window||window.opener!==null&&window!==window.opener){const x=window.location.href;let G;a.D.R.tf.length?(P(a.ca,"@deprecated: waitForSessionIdPathPatterns",!0,"warn"),G=K(x,a.D.R.tf)?!0:!1):G=K(x,a.D.R.Og)?!1:!0;if(G&&!a.ia){const L=window.opener?window.opener:
a.g.G.M(window);qh(a.g.fc,L,{method:"GET",url:"/v1/connect",body:{}}).then(()=>{a.M=a.K.Yb;a.va=y.$c}).catch(F=>{P(a.ca,"sdkcomm: connect to parent timed out",{message:F.message},"warn")}).finally(()=>{u()});return}}else if(El(a)){const x=Cl(a),G=Dl(a),L={iosWebview:x,androidWebview:G,waitForNativeCapture:a.D.config.waitForNativeCapture,autoDetectSDK:a.D.config.autoDetectSDK,useFallbackSDKSync:a.D.config.useFallbackSDKSync};if(window.QMSDKv5&&G){uh(a.g.vd,{method:"GET",url:"/v1/connect",body:{sub:a.sub}}).then(()=>
{a.M=a.K.Zc;a.va=y.$c;a.D.R.Tc=[/(?:)/]}).finally(()=>{u()});return}if(E(window,["webkit","messageHandlers","QMSDKv5"],!1)&&x){wh(a.g.Jd,{method:"GET",url:"/v1/connect",body:{}}).then(()=>{a.M=a.K.ad;a.va=y.$c;a.D.R.Tc=[/(?:)/]}).finally(()=>{u()});return}if(!a.D.config.autoDetectSDK){setTimeout(u,0);return}"QMFrameId"in window&&(a.frameId=window.QMFrameId);Object.defineProperty(window,"QMFrameId",{set:function(F){return a.frameId=F},get:function(){return a.frameId}});if(a.D.config.useFallbackSDKSync){P(a.ca,
"QMSDK:usesFallbackSDKSync",L,"warn");"QMFrameId"in window&&(a.frameId=window.QMFrameId);const F=Kk(a);if(F&&a.frameId){a.ia=F;Jl(a);mk(a);setTimeout(u,0);return}let S=0;const M=Math.floor(a.D.config.maxWaitForSessionIdRetries/250),T=setInterval(function(){S++;S>M&&(console.warn("QM:: Timed out trying to get session & frameId from SDK. Continuing on with new session"),T&&clearInterval(T),u());const J=Kk(a);J&&a.frameId&&(Jl(a),a.ia=J,mk(a),setTimeout(u,0),T&&clearInterval(T))},250);return}(async function(){var F=
window.QMSDK;let S=window.QMSDKv4;if(!S)try{S=window.webkit.messageHandlers.QMSDKv4}catch(T){P(a.ca,"QMSDK:v4-not-present-ahead-of-time",{message:T.message,...L},"error")}if(F||S||a.D.config.waitForNativeCapture){if(F)if(F.sync){P(a.ca,"QMSDK:v2-sync",L,"warn");var M=F.sync();typeof M==="string"&&(M=a.g.G.Ma(M))}else F.config&&F.config.reportURL||(M=F);M||(M=await Promise.race([new Promise(T=>{window.addEventListener("qm_sdk_start",({detail:J})=>{T({sessionId:J.sessionId,userId:J.userId,frameId:J.frameId,
config:{reportURL:J.config&&J.config.reportURL?J.config.reportURL:J.reportURL}})},{once:!0});window.dispatchEvent(new CustomEvent("qm_sdk_ready"))}),new Promise(async T=>{S||(S=await new Promise(J=>{Object.defineProperty(window,"QMSDKv4",{set:Ja=>{J(Ja)}})}));S.start=J=>{T(J)};S.postMessage(a.g.G.stringify({}))}),new Promise((T,J)=>{T=a.D.config.maxSDKWaitTime;setTimeout(J,T,Error(`SDK not loaded within ${T}ms.`))})]));if(M){F=M.sessionId;const T=M.userId,J=M.frameId;F&&T&&J?(Jl(a),a.ia=F,a.wa=T,
a.frameId=window.QMFrameId=J,mk(a),(M=M.config)&&M.reportURL&&K(M.reportURL,a.D.R.Qg)&&(pd.reportURL=a.D.config.reportURL=M.reportURL)):P(a.ca,"QMSDK:v4-bad-payload",{payload:a.g.G.stringify(M),...L},"error")}else P(a.ca,"QMSDK:v4-possible-bad-payload",{"payload-type":typeof M,payload:a.g.G.stringify(M),...L},"error")}})().catch(F=>{P(a.ca,"QMSDK:v4-sync-catch",{message:F.message,...L},"error")}).then(u);return}u()}catch(u){$i(a,u)}}}
class Pl{constructor(){this.Ya=null;this.Me=0;this.oa=this.Ua=null;this.yd={};this.Qb=null;this.Kd=this.Mf=this.ef=this.vc=this.Ue=this.Ne=0;this.zb=[];this.Qh=this.bg=this.Zf=this.ec=this.We=this.zc=0;this.O=null;this.ze={events:[]};this.bb=null;this.Dc=new Bi;this.L=[];this.ka=[];this.He=new window.Set;this.ra=null;this.Sh={0:"navigate",1:"reload",2:"back_forward"};this.wf=this.Pb=!1;this.xb=null;this.Fe=!1;this.Af="QM: fetch aborted.";this.Hf=this.Dg=this.Ag=this.Bf=this.Lf=!1;this.Ef=null;this.df=
{connectStart:"cs",connectEnd:"ce",decodedBodySize:"dbs",domainLookupStart:"dls",domainLookupEnd:"dle",encodedBodySize:"ebs",fetchStart:"fs",initiatorType:"it",nextHopProtocol:"nhp",redirectStart:"rds",redirectEnd:"rde",requestStart:"rqs",responseStart:"rps",responseEnd:"rpe",secureConnectionStart:"scs",transferSize:"tz",workerStart:"ws"};this.Rh="connectStart connectEnd domainLookupStart domainLookupEnd fetchStart redirectStart redirectEnd requestStart responseStart responseEnd secureConnectionStart workerStart".split(" ");
this.pa={connectStart:"a",connectEnd:"b",domComplete:"c",domContentLoadedEventStart:"d",domContentLoadedEventEnd:"e",domInteractive:"f",domainLookupStart:"g",domainLookupEnd:"h",fetchStart:"i",loadEventStart:"j",loadEventEnd:"k",redirectStart:"l",redirectEnd:"m",requestStart:"n",responseStart:"o",responseEnd:"p",secureConnectionStart:"q",transferSize:"r",encodedBodySize:"s",decodedBodySize:"t","first-paint":"u","first-contentful-paint":"v","largest-contentful-paint":"w","first-input-delay":"x","cumulative-layout-shift":"y"};
this.ig="redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd requestStart responseStart responseEnd domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" ");this.Ce=!1;this.ie=!0;this.be=!1;this.va=y.NONE;this.ke=this.eg=0;this.zg=!1;this.oc=this.Ob=this.cg=this.rg=null;this.Ye=0;this.Of=this.xf=!1;this.Xc=[];this.hc=[];this.Jf=!1;this.If=Infinity;this.uc=0;this.Nf=!1;this.Wf=[];this.ta=[];this.fd=
[];this.da={};this.Kb=!1;this.Ca="";this.B=null;this.ia=void 0;this.nf=this.Ld=this.qc=!1;this.za=this.wa=void 0;this.ee=!1;this.K={Da:0,Yb:1,ad:2,Zc:3};this.Df=!0;this.Vb=new Set;this.M=this.K.Da;this.Cb=0;this.nc=this.od=this.Bc=this.jb=void 0;this.pd=!1;this.md=void 0;this.Vc=this.wc=this.yf=0;this.jf=this.rf=this.Wa=null;this.mc=!1;this.Gg=this.Rb=0;this.Yc=new window.Set;this.ld=null;this.Fb=this.Xb=this.Nb=this.yb=this.Ac=0;this.xc=this.Xf=null;this.ba={vg:null,ug:null,Nd:0,$d:0,Bd:0,sf:0,se:0,
Te:null};this.hd=[0,0];this.Jb=null;this.yc=this.Ff=0;this.Sf=!1;this.te=void 0;this.Qf=this.Ze=this.ed=null;this.Hg=!1;this.kd="";this.bc=null;this.Cc="";this.Jc=0;this.dd=!1;this.sc=this.ua=null;this.customElements=new window.Set;this.Ph=/\n|\r|\f|[\u0000-\u001F]+/g;this.bh=[100,105,99,107,115,104,105,116,124,102,117,99,107,124,106,97,99,107,97,115,115,124,99,117,110,116,124,112,117,115,115,121,124,100,111,117,99,104,101,124,115,108,117,116,124,98,97,115,116,97,114,100,124,119,104,111,114,101,124,
98,105,116,99,104,124,97,115,115,104,111,108,101,124,115,116,117,112,105,100,124,100,117,109,98,97,115,115];this.Oh=[101,118,97,108];this.dh=[115,99,114,105,112,116];this.Ud=this.Kf="";this.og=null;this.Gf=!1;this.eh=0;this.rc=this.fa=this.dc=this.wg=null;this.zf=!1;this.cc=this.nd=null;this.Pf=this.Tf=this.Uf=this.qg=!1;this.sub="";this.frameId=void 0;this.Ec=Ea();this.Ja=new yh;this.D=null;this.g={G:null,W:null,animation:null,ya:null,console:null,nb:null,ng:null,oa:null,Wc:null,Rd:null,supports:null,
ga:null,fc:null,vd:null,Jd:null,Hc:null,Aa:null,Zb:null,Jg:null,Ub:null,Pg:null,bb:null};this.g.G=new jc(this.Ja);this.g.W=new Jc(this.g.G);this.g.animation=new tb(this);this.g.ya=new Xb(this);this.g.nb=new Sc(this);this.g.ng=new Vc(this);this.g.oa=new fd;this.g.Wc=new Fg(this);this.g.Rd=new td(this);this.g.supports=new ah;this.g.ga=new bh(this.g.G);this.g.fc=null;this.g.vd=null;this.g.Jd=null;this.g.Aa=new Yh(this);this.g.console=new Ld(this.g.G,(b,c)=>{c&&N(this,{t:"co",...b});this.O&&(c=this.O,
c.Mc=b,hg(c,"console",c.J.g.W.Z()))});this.qa=null;this.g.Jg=new zh;console=this.g.G.ma.contentWindow.console;this.g.ci=new ld(this);this.jd=new this.g.G.ma.contentWindow.WeakMap;const a=String.fromCharCode(76,105,103,104,116,110,105,110,103,32,87,101,98,32,83,101,99,117,114,105,116,121);this.Le=!1;try{URL.revokeObjectURL(URL.createObjectURL(new Blob([],{type:"text/javascript"})))}catch(b){this.Le=b.message.includes(a)}this.Na=null;this.bd=this.bd.bind(this);this.kc=null;this.Vf=this.Cf=!1;this.ca=
null;this.Rf=!1;this.fh=new Mg(this);this.we={};this.gg=[];this.ea=Aa()}aa(a){if(!a)return{};let b=this.jd.get(a);b||(b={},this.jd.set(a,b));return b}Ba(a){if(a){if(a===document)return"^";if(a==document.documentElement)return"";if(a.nodeType==11)return(a=this.Ba(a.host))?`${a} S#`:void 0;if(a.nodeType==1){var b=this.g.G.tagName(a).toLowerCase();if((b=="body"&&a===document.body||b=="head"||b=="html")&&(!a.getRootNode||this.g.G.getRootNode(a)===document))return"<"+b.toUpperCase();this.aa(a)}if(this.g.G.parentNode(a)){var c=
this.g.G.parentNode(a);b=this.Ba(c);if(b!==void 0&&(a=Array.prototype.indexOf.call(c.childNodes,a),a!==void 0))return b+" "+a}}}removedNodes(a){a=this.aa(a).ea;return a===void 0?null:{t:"r",I:a}}addedNodes(a){const b={t:"a"};let c=a.nextSibling;for(;c&&!this.aa(c).ea;)c=c.nextSibling;c?b[">"]=this.aa(c).ea:b["p+"]=this.aa(a.parentNode).ea;const {gb:d,Ae:e}=Si(this,a);b.j=[d];this.L.push(e);return b}get pb(){return this.mc?!1:this.va===y.ge?!0:this.va===y.NONE}sg(a){if(a.type!="hidden"){const b=this.aa(a);
b.sb==void 0||b.sb==null?b.sb=Kj(a):wj(this,a)}}ah(){var a=this;Z(a,function(){a.D.config.maskInputs||Tj(a);if(a.D.config.checkBlankPages)try{typeof window.sessionStorage==="object"&&a.g.G.Storage.setItem.call(window.sessionStorage,"qm_last_period",a.g.W.Z().toString())}catch(b){}})}Ta(a){var b=this.aa(a);return b.Ta?b.Ta:b.Ta={jg:0,Re:this.g.W.Z(),name:Wj(this,a)}}le(a){var b={T:"B",u:this.Ca,t:this.Cb,v:this.g.W.Z()};this.frameId&&(b.QF=this.frameId);this.za&&(b.H=this.za);this.ia&&(b.s=this.ia);
a===0&&this.wa&&(b.U=this.wa);this.Bc&&(b.f=this.Bc);b.P=this.Me;this.Na.B>0&&(b.E=this.Na.B);b.N=a;a===0&&this.ld&&(b.pid=this.ld);return b}Lh(a){a=this.le(a);a.Q=2;delete a.P;delete a.E;return a}Gh(){const a=this.le();a.Q=1;a.Y=1;a.X=this.bc;delete a.P;delete a.E;delete a.N;delete a.pid;return a}Gb(a){a=Y(this,a);return a==="input"||a==="textarea"?!0:null}Lb(a){const b=this.aa(a);b.Lb===void 0&&(b.Lb=Rj(this,a));return b.Lb}eb(a){var b=this.aa(a);b.eb===void 0&&(a=a.nodeType!==1?null:Mi(this,a)===
"scrub"?!0:this.Hb(a),b.eb=a);return b.eb}Hb(a){var b=Y(this,a);b=b==="input"||b==="select"||b==="textarea";if(!b)return null;if(this.D.R.Rc||this.D.config.maskInputs&&b||this.Qa(a))return!0;if(b=a.getAttribute("autocomplete"))if(b=b.toLowerCase(),b==="cc-number"||b==="cc-csc")return!0;if(b=a.getAttribute("x-autocompletetype"))if(b=b.toLowerCase(),b==="cc-number"||b==="cc-csc")return!0;b=a.getAttribute("title");if(!(a.id||a.name||b||a.className))return null;for(let c=0;c<this.D.R.pe.length;++c){const d=
this.D.R.pe[c];if(a.id&&d.test(a.id)||a.name&&d.test(a.name)||b&&d.test(b)||a.className&&d.test(a.className))return!0}return null}Qa(a){var b=this.aa(a);if(b.Qa===void 0)try{if(b.Qa=a.type&&a.type.toLowerCase()=="password",!b.Qa&&Y(this,a)=="input"){var c=a.className||"";a.attributes.name&&a.attributes.name.value&&(c+=a.attributes.name.value);a.id&&(c+=a.id);c.toLowerCase().indexOf("password")>=0&&(b.Qa=!0)}}catch(d){b.Qa=!1}return b.Qa}bd(){var a=this;if(!a.dc){var b=0;a.dc=setInterval(()=>{b++;
b>40?clearInterval(a.dc):cj(this,{method:"POST",url:"/v1/sub-frame-size",body:{w:Cj(),h:Uj()}}).finally(()=>{a.dc&&(clearInterval(a.dc),a.dc=null)})},500)}}start(){this.be||(this.be=!0,vl(this,[()=>{this.Kf=ha(this.Oh);this.Ud=ha(this.dh)},()=>{const a=window.QuantumMetricNetworkInterceptor;a&&(this.kc=a)},()=>lj(this),()=>{!this.Hg&&this.D.R.Fd&&(jk(this,typeof XMLHttpRequest!=="undefined","XMLHttpRequest must exist."),Jk(this),this.Hg=!0)},()=>Hk(this),()=>Fk(this),()=>{const a=window.navigator.userAgent,
b=!!a.match(/WebKit/i);(a.match(/iPad/i)||a.match(/iPhone/i))&&b&&!a.match(/CriOS/i)&&this.g.G.M(window)!==window&&(this.bd(),this.g.G.addEventListener(window,"resize",this.bd,!0))},()=>{var a=window.navigator.userAgent||window.navigator.vendor||window.opera;this.Kd=/uiwebview|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0,
4))?!0:!1},()=>kj(this),()=>Tk(this),()=>{this.oa.lc()},()=>Sj(this),()=>{if(window.Element.prototype.animate&&document.getAnimations){var a=this.g.animation;const d=document.getAnimations();try{for(let e=0;e<d.length;e++){const f=d[e];if(f instanceof window.CSSTransition||f.constructor.name==="CSSTransition"){var b=a,c=f.transitionProperty;const g=ob(),h=b.J.aa(f.effect.target).ea;b.na.set(f,g);b.log({t:"wa",v:">",I:h,p:c,i:g});rb(b,f,g);break}if(f instanceof window.CSSAnimation||f.constructor.name===
"CSSAnimation"){c=a;b=f.animationName;const g=ob(),h=c.J.aa(f.effect.target).ea;c.na.set(f,g);c.log({t:"wa",v:">",I:h,a:b,i:g});rb(c,f,g);break}qb(a,f)}}catch(e){}sb(this.g.animation)}},()=>{const a=(new URLSearchParams(window.location.search)).get(this.D.config.visibleQueryParamName);if(a!==null&&a=="true"||this.fa.get("visible"))return rl(this)},()=>{if((new URLSearchParams(window.location.search)).get(this.D.config.surveyPreview.queryParamName)===this.D.config.surveyPreview.queryParamValue){const a=
this.g.G.createElement(this.Ud);a.src=this.D.config.surveyPreview.url;a.crossOrigin="anonymous";document.head.appendChild(a)}},()=>{this.Vf=!0;this.Sf=document.compatMode=="CSS1Compat";!dj(this)&&[this.K.Da].includes(this.M)&&mj(this,fb(this.B),!1);for(let b=0;b<this.D.config.sessionPersistenceMediums.length;b++){const c=this.D.config.sessionPersistenceMediums[b];if(c!=="cookie")for(var a in window[c])if(a.indexOf("QM:s:")==0){const d=this.g.G.Ma(this.g.G.Storage.getItem.call(window[c],a));sg(this.fa,
d)&&window[c].removeItem(a)}}},()=>{[this.K.Da].includes(this.M)?nl(this):cj(this,{method:"POST",url:"/v1/child-ready",body:{"from-frame":this.g.G.M(window)!==window}})}]))}get Ka(){const a=this.fa.get("apiReplayEnabled",null);return a!==null?a:this.Df===!1||this.fa.get("sampleReplayEnabled",null)===!1||this.fa.get("configReplayEnabled",null)===!1?!1:!0}stop(a){this.va=a;if([y.NONE,y.fe,y.he,y.de].includes(a)){const b=ok(this,{method:"POST",url:"/v1/stop",body:{reason:a}});a=this.g.Hc?pi(this.g.Hc,
{method:"POST",url:`/v1/${a===y.NONE?"start":"stop"}`,body:{reason:a}}).catch(ra):Promise.resolve();return Promise.all([b,a])}}Kc(a){const b=this.aa(a);if(b.Kc===void 0)try{b.Kc=a instanceof window.HTMLElement&&window.customElements.get(a.localName)}catch(c){b.Kc=!1}return b.Kc}}typeof window!=="undefined"&&(window.QuantumMetricInstrumentationStart=function(a){Nl(new Pl,a)});const Ql={rage:-2,frustration:-5};function md(a,b,c,d){if(a.J.pb){var e=a.K[b];if(e){typeof b==="number"?c={id:c.i,value:c.v,ts:c.t,i:c.i,v:c.v,ev:c.ev,name:a.J.we[c.i]||"UNKNOWN"}:b==="api"&&(c={url:c.u,method:c.m,status:c.st,responseTime:c.r,xhr:d});for(var f=0;f<e.length;f++)try{e[f](c,b)}catch(g){Rl||(Rl=!0,console.warn("QM: API Listener caught exception: "+g))}}typeof b==="number"&&md(a,"event",c,d)}}function Sl(a,b,c){a.J.pb&&R(b,{id:0,ja:1,flags:6,la:a.J.g.W.Z()},c)}
async function Tl(a,b,c="",d=null){if(a.J.pb){var e=a.J.O;if(e){var f=e.pa[b.id];if(f)f.la=b.la,b=f;else if(b.id>0){Tb(a.J,"unsupported_event",b.id);return}d!==null&&(f=a.J.g.G.stringify(d,Zb),f.length>a.J.D.config.maxMDELength&&(d={error:"Too much data"},f=a.J.g.G.stringify(d,Zb)),d={hash:await Qb(f),value:d});eg(e,b,c,d)&&hg(e,"timeline",a.J.g.W.Z())}else a.M.push({event:b,value:c,Tb:d})}}
class Ol{constructor(a){function b(c,d="",e=50,f=200){let g=0,h=null,k=!1;return function(){h||(h=setTimeout(()=>{g=0;h=null;k=!1},f));g++;if(g>e)k||(k=!0,Tb(this.J,"RATE_LIM",`API calls to ${d} exceeded configured rate limits.`));else return c.apply(this,arguments)}}this.J=a;this.B=null;this.M=[];this.K=[];["sendEvent"].forEach(c=>{this[c]=b(this[c],c)})}lc(){const a=window.QuantumMetricOnload;if(a)if(a instanceof Array)for(let b=0;b<a.length;b++){if(typeof a[b]==="function")try{a[b](this)}catch(c){}}else if(typeof a===
"function")try{a(this)}catch(b){}}lastUrl(){const a=this.J.fa.get("lastUrl",!1);return a?new URL(a):!1}get(a,b,c){return E(a,b,c)}getSessionVar(a,b){return a?this.J.fa.get(`${"ext"}.${a}`,b):b}setSessionVar(a,b){if(a)return this.J.fa.set(`${"ext"}.${a}`,b)}addEventListener(a,b){if(a instanceof Array)for(var c=0;c<a.length;c++)this.addEventListener(a[c],b);else a=Ql[a]||a,(c=this.K[a])||(c=this.K[a]=[]),c.push(b);a==="start"&&this.J.za&&b({sessionID:this.J.ia,userID:this.J.wa,hitID:this.J.za,url:this.J.B.Va.mb},
a)}removeEventListener(a,b){try{var c=this.K[a];c&&(this.K[a]=c.filter(function(d){return d!=b}))}catch(d){}}identifyUser(a){var b=this.J.O;b?(Sl(this,b,a),this.B=null):this.B=a}sendEvent(a,b=0,c="",d=null){Tl(this,{id:a,flags:b,la:this.J.g.W.Z()},c,d)}setUserFirst(a){Tl(this,{id:0,ja:1,flags:8,la:this.J.g.W.Z()},a)}setUserLast(a){Tl(this,{id:0,ja:1,flags:16,la:this.J.g.W.Z()},a)}setUserIdentifier(a){Tl(this,{id:0,ja:1,flags:131072,la:this.J.g.W.Z()},a)}getPrevEventData(a){var b=this.J.O;return b?
gg(b,a):null}getCartValue(){return this.J.fa.get("cv",null)}setCart(a){String(a).indexOf(".")!==-1?Tl(this,{id:-18,flags:0,la:this.J.g.W.Z()},"Invalid cart value format: "+a):Tl(this,{id:0,ja:2,flags:64,la:this.J.g.W.Z()},a)}getSessionID(){return this.J.ia}getSession(){return this.getSessionID()}getUserID(){return this.J.wa}getConfig(){return this.J.D.config}getRawConfig(){return this.J.D.K}_localOverride(a,b){switch(a){case "transformAttributesForNodesList":this.J.D.R.Eb=b;break;default:console.warn("invalid local override")}}getReplay(){const a=
this.getSub(),b=this.getSessionID();if(!b)return"";var c=D(this.J.g.W.Z()/1E3);return`https://${a}.quantummetric.com/#/replay/cookie:${b}?ts=${c-43200}-${c+43200}`}getSub(){return this.J.sub}setMVTCampaignAndValue(a,b){Tl(this,{id:-20,flags:0,la:this.J.g.W.Z()},a);Tl(this,{id:-21,flags:0,la:this.J.g.W.Z()},b)}setApplicationVersion(a){Tl(this,{id:-9999,ja:1,flags:2048,la:this.J.g.W.Z()},a)}setABNSegment(a){Tl(this,{id:-100,flags:128,la:this.J.g.W.Z()},a)}getABNSegment(){return wk(this.J)}get conversionRates(){return this.J.yd}set conversionRates(a){this.J.yd=
a}currencyConvertFromToValue(a,b,c){this.J.g.W.Z()%100<10&&P(this.J.ca,"currencyConvertFromToValue",!0);b=ua(a,b,c,this.conversionRates);typeof b==="string"?Tb(this.J,"currency_conversion",b):a=b;return D(a)}getCurrencyValue(a){this.J.g.W.Z()%100<10&&P(this.J.ca,"getCurrencyValue",!0);return va(a)}get targetCurrency(){return this.J.D.config.targetCurrency}get lastXHR(){return this.J.O?this.J.O.Fa:null}newSession(){bj(this.J)}newUser(){try{const a=this.J.D&&this.J.D.config&&this.J.D.config.userCookieName;
a&&this.J.qa.ib({[a]:""});this.J.rc&&this.J.rc.clear();this.J.wa=void 0;this.B=null}catch(a){}this.newSession()}switchSession(a){var b=this.J;[b.K.Da].includes(b.M)?a.length<=100&&(b.fa.archive(`${"QM:s:"}${b.ia}`),b.md=a,bj(b)):P(b.ca,"switchSession",!0)}newPage(){ml(this.J,64)}stopPage(){this.J.stop(y.fe)}stopSession(){Fl(this.J,!1)}startSession(){Fl(this.J,!0)}optInUser(){Hl(this.J,!1)}optOutUser(){Hl(this.J,!0)}isOn(){var a=this.J;return a.Ce&&a.va===y.NONE}isUserEnabled(){return wl(this.J)}uploadRL(){this.J.D.R.Sc=
!0;this.J.g.ya.na=new this.J.g.G.ma.contentWindow.WeakMap;fl(this.J)}querySelectorCrossingShadowDOM(a,b){return this.J.g.ga.querySelector(a,b)}querySelectorAllCrossingShadowDOM(a,b){return this.J.g.ga.querySelectorAll(a,b)}installQMVisible(){return rl(this.J)}async cf(){this.B&&Sl(this,this.J.O,this.B);this.B=null;if(this.M.length>0){for(var a=0;a<this.M.length;a++){const d=this.M[a];var b=d.event,c=this.J.O.pa[b.id];if(c)b=c;else if(b.id>0){Tb(this.J,"unsupported_event",b.id);return}d.Tb&&(d.Tb=
{hash:await Qb(this.J.g.G.stringify(d.Tb,Zb)),value:d.Tb});eg(this.J.O,b,d.value,d.Tb)}this.M=[]}}enableReplay(a){typeof a!=="boolean"&&(console.warn("QM: enableReplay called with non-boolean value",a),P(this.J.ca,"enableReplay called with non-boolean value",!0));a=!!a;[this.J.K.Da].includes(this.J.M)&&a!==this.J.Ka&&Gl(this.J,a)}}var Rl=!1;})();

window.QuantumMetricInstrumentationStart({"dataEncryptWhiteList":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["[data-qm-allow]","[placeholder=\"Search\"]","[data-testid=\"product-quantity\"]",".pdp-quantity__control","[data-testid=\"promo-code-input\"]"]}]}],"dataScrubBlackList":[{"pred":{"operator":"default"},"rules":[{"pred":{"facet":"url","operator":"contains","value":"/checkout"},"value":["[data-testid=\"card-number-input\"]","[data-testid=\"card-expiry\"]","[data-testid=\"card-security-code\"]","[aria-label=\"Credit card icon\"]"]},{"pred":{"operator":"default"},"value":["[name=\"cardNumber\"]","[name=\"expiration\"]","[name=\"cvv\"]","[name=\"giftCardNumber\"]","[name=\"giftCardPinNumber\"]","[data-testid=\"session-email\"]","[id*=\"password\"]","[data-testid=\"ocp-customer-email\"]","[data-testid=\"ocp-shipping-address\"]","[data-testid=\"ocp-summary-greeting\"]",".fs-exclude"]}]}],"dataScrubRE":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"cvv|cvc|month|year|birth|cid|csc|cvn|sensitive|security|ccnumber|card.*identification|verification|^aba$|^tin$|routing|ssn|itin|account.*number|acct.*num|card.*num|card.*#|card.*no|cc.*num|nummer|n.m.ro|credito|信用卡|카드|カード番|Номер.*карты"}]}]}],"dataScrubXHRRegExes":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"\"firstName\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"lastName\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"cvv_code\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"cvvCode\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"expiration_date\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"expirationDate\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"account_no\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"routingNumber\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"date_of_birth\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"dateOfBirth\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"countryOfBirth\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"new_password\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"gender\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"accountNo\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"accountNumber\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"confirm_password\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"confirmPassword\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"addr_Line1\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"addr_Line2\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"addrLine1\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"addrLine2\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"password\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"dob\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"newPassword\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"loginToken\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"card_number\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"address\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"routing_number\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"nationality\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"account_number\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"givenName\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"familyName\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"plaintext\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"last_four\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"card_type\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"credit_card\":\"?([^,\"}]+)\"?,?"},{"f":"i","p":"\"billing_address\":\"?([^,\"}]+)\"?,?"}]}]}],"elementVeinAttributes":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["data-testid","aria-labelledby","alt","aria-label","id","name","class"]}]}],"encryptScrubList":[{"pred":{"operator":"default"},"rules":[{"pred":{"facet":"url","operator":"contains","value":"/checkout/thankyou/"},"value":["[data-testid=\"ocp-shipping-address\"]","[data-testid=\"ocp-summary-greeting\"]"]},{"pred":{"facet":"url","operator":"contains","value":"/shopping-bag"},"value":[".promo-desc-wrapper p","[data-testid=\"change-store\"] span button"]},{"pred":{"facet":"url","operator":"contains","value":"/checkout"},"value":["[data-testid=\"shipping-form-state\"]","[data-testid*=\"email\"]","[data-testid*=\"promo-desc\"] p","[data-testid=\"shipping-address-item\"]","div.pac-item"]},{"pred":{"operator":"default"},"value":["[data-qm-encrypt]","[data-testid=\"session-email\"]",".fs-mask","#sitewide-account-button-greeting",".store-name","#namePlace","ol[aria-label=\"Chat messages\"]"]}]}],"excludeDOMList":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["[aria-label=\"Credit card icon\"]"]}]}],"excludeRageCSS":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["button[id*=\"carousel_chevron\"]","section[class*=\"carousel\"] span.pr-caret-icon","[aria-label=\"Zip Code\"] input",".pr-caret-icon","[data-testid=\"button_icon_carousel_chevron_next\"]","[data-testid=\"button_icon_carousel_chevron_prev\"]","polyline"]}]}],"horizonEnabled":[{"pred":{"operator":"default"},"value":true}],"maxXHRDataLength":[{"pred":{"operator":"default"},"value":200000}],"reportURL":[{"pred":{"operator":"default"},"value":"https://ingest.quantummetric.com/horizon/gap"}],"spinnerSelectorList":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["button [data-testid=\"loading-animation\"]"]}]}],"startImmediatePathPatterns":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"shopping-bag"},{"f":"i","p":"thankyou"}]}]}],"urlMonitorBlacklist":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"\\/product\\.do"}]}]}],"xhrHookWhiteListDetails":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"\\/complete-the-look"},{"f":"i","p":"\\/reviews"},{"f":"i","p":"\\/personalization"},{"f":"i","p":"api\\.gap\\.com"},{"f":"i","p":"sierra\\.chat"}]}]}],"xhrPerformanceWhitelistDetails":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"\\/complete-the-look"},{"f":"i","p":"\\/reviews"},{"f":"i","p":"\\/personalization"},{"f":"i","p":"api\\.gap\\.com"},{"f":"i","p":"sierra\\.chat"}]}]}],"zones":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"name":"Make an Entrance Banner","sel":"img[alt=\"Make an entrance.\"]","threshold":1},{"name":"Find Mine Container","sel":"[class*=\"FindmineMainContent\"]","threshold":1},{"name":"You May Also Like","sel":"[aria-label=\"You May Also Like\"]","threshold":0.5},{"name":"Customers Also Viewed","sel":"[aria-label=\"Customers Also Viewed\"]","threshold":0.5},{"name":"Seo Tags","sel":".seo-tags","threshold":1},{"name":"Reviews Container","sel":".review-container","threshold":0.1},{"name":"Footer","sel":"#footer","threshold":0.1},{"name":"Granify Widget Container","sel":".granify-widget-container","threshold":1},{"name":"New Arrivals Banner","sel":"[aria-label=\"New Arrivals\"]","threshold":0.5},{"name":"Shop the Party Edit","sel":"[aria-label=\"Shop the Party Edit\"]","threshold":0.1},{"name":"Reviews","sel":"#pr-review-display .pr-review","threshold":1}]}]}],"adobe":{"prefix":[{"pred":{"operator":"default"},"value":"qm"}],"tenant":[{"pred":{"operator":"default"},"value":"quantummetricexchange"}]},"errorIds":[-68,-67,-65,-64,-63,-62,-52,-49,-46,-44,-43,-42,-39,-38,-34,-27,-25,-24,-23,-22,-19,-18,-17,-16,-15,-14,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,1,2,12,15,23,25,40,59,62,64,65,73,75,103,113],"eventDefinitions":{"events":[{"f":0,"i":1,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false}}]}]},"x":"QJS","sessionInfoReq":false,"excludeBlank":false},{"f":0,"i":2,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false;}}]}]},"x":"QJS","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":3,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[class*=\"size-guide-button\"],[class*=\"size-guide-button\"] *"]}]},{"t":"SelectorText","v":[".pdp-product-title"]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Size Guide Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":5,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".productInfoContainer .fds_accordion .fds_panel button[aria-expanded=\"false\"],.productInfoContainer .fds_accordion .fds_panel button[aria-expanded=\"false\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try { return (this.api || QuantumMetricAPI).lastClicked ? (this.api || QuantumMetricAPI).lastClicked.innerText : ""; } catch (e) {}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qPage = QuantumMetricAPI.getSessionVar("Page :: Data");
    var qClk = {
        "accordion_name": QuantumMetricAPI.lastClicked.innerText,
        "total_accordions": document?.querySelector('.pdp-accordionWrapper')?.childNodes?.length
    };

    var qAcrd = QuantumMetricAPI.lastClicked.closest('.fds_panel');
    var qAcrds = Array.from(document.querySelectorAll('.pdp-accordionWrapper .fds_panel'));
    qClk.page_position = qAcrds.indexOf(qAcrd) + 1;
    qClk.position_description = "Clicked accordion " + qClk.page_position + " out of " + qClk.total_accordions;
  
    qClk.product = QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
    return qClk;

} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Information Accordion Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":6,"f":0,"m":0,"s":0,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["#findmine-app-container a.quick-add,#findmine-app-container a.quick-add *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    if (QuantumMetricAPI?.lastClicked?.closest('a')?.getAttribute('data-item')?.title) {
        return JSON.parse(QuantumMetricAPI.lastClicked.closest('a').getAttribute('data-item')).title;
    } else {
        return QuantumMetricAPI.lastClicked.closest('a').querySelector('[class*="FindmineItemTitle"]').innerText;
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Find Mine Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    if (!!QuantumMetricAPI?.lastClicked?.closest('a')?.getAttribute('data-item')) {
        var qFindMine = JSON.parse(QuantumMetricAPI.lastClicked.closest('a').getAttribute('data-item'));
        qFindMine.regular_price = qFindMine.details.regular_price;
        qFindMine.regular_price = qFindMine.regular_price / 100;
        qFindMine.price = qFindMine.price / 100;
        qFindMine.pid = qFindMine.item_url.replace(/.*pid\=/g, '').replace(/&.*/, '');
        qFindMine.product_id = qFindMine.item_url.replace(/.*pid\=/g, '').replace(/&.*/, '').substring(0, 6);
        delete qFindMine.details;
        delete qFindMine.image_url;
        delete qFindMine.item_id;
    } else {
        var qFindMine = {};
        qFindMine.title = QuantumMetricAPI.lastClicked.closest('a').querySelector('[class*="FindmineItemTitle"]').innerText;
        qFindMine.pid = QuantumMetricAPI.lastClicked.closest('a').href.replace(/.*pid\=/g, '').replace(/&.*/, '');
        qFindMine.product_id = QuantumMetricAPI.lastClicked.closest('a').href.replace(/.*pid\=/g, '').replace(/&.*/, '').substring(0, 6);
    }
    return qFindMine;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Find Mine Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":7,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"recommended-product-card\"],.recommended-product,.recs-carousel-product-card,.recommendations-list .product-card,.recs-grid-product-card,[data-testid=\"recommended-product-card\"] *,.recommended-product *,.recs-carousel-product-card *,.recommendations-list .product-card *,.recs-grid-product-card *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qCard = QuantumMetricAPI.lastClicked.closest('[data-testid="recommended-product-card"], .recommended-product, .recs-carousel-product-card, .recommendations-list .product-card, .recs-grid-product-card');
    var qItem = {};
    qItem.pid = qCard?.querySelector('a')?.href?.indexOf('pid=') >= 0 ? window.decodeURIComponent(qCard.querySelector('a').href.replace(/.*pid\=/g, '').replace(/&.*/, '')) : undefined;
    qItem.product_name = !!qCard?.querySelector('img')?.alt ? qCard.querySelector('img').alt : undefined;
    qItem.origional_price = !!qCard?.querySelector('.fds__core-web-original-price')?.innerText ? qCard.querySelector('.fds__core-web-original-price').innerText : undefined;
    qItem.current_price = !!qCard?.querySelector('.recs-product-card--price-normal, .recs-product-card--price-black-promo')?.innerText ? qCard.querySelector('.recs-product-card--price-normal, .recs-product-card--price-black-promo').innerText : undefined;
    qItem.merchandising_flag = !!qCard?.querySelector('.fds__merchandising-marketing-flag')?.innerText ? qCard.querySelector('.fds__merchandising-marketing-flag').innerText : undefined;
    qItem.pageType = !!gap?.pageType ? gap.pageType : undefined;
    qItem.atbModal = !!qCard.closest('.atb-confirmation-modal__section-wrapper') ? true : false;

    if (!!qCard?.closest('.recs-section[aria-label], #product-recs-grid[aria-label]')?.getAttribute('aria-label')) {
        qItem.recommendation_section = qCard.closest('.recs-section[aria-label], #product-recs-grid[aria-label]').getAttribute('aria-label').toLowerCase();
    } else if (!!qCard?.closest('.product-recommendations, #mui-certona-recs-container, section')?.querySelector('h2')?.innerText) {
        qItem.recommendation_section = qCard.closest('#product-recommendations, #mui-certona-recs-container, section').querySelector('h2').innerText.toLowerCase();
    } else {
        qItem.recommendation_section = undefined;
    }

    QuantumMetricAPI.setSessionVar("Recommendations :: Product Click", qItem);
    return qItem.recommendation_section;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Recommendations :: Product Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Recommendations :: Product Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Recommendations :: Product Click (attributes): " + qErr);
}}}]}]}},{"f":0,"i":8,"evalAlways":false,"m":1,"s":1,"u":"/product\\.do","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".pr-rd-review-header-contents .pr-multiselect-item[aria-selected=\"false\"],.pr-rd-review-header-contents .pr-multiselect-item[aria-selected=\"false\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.lastClicked.closest('.pr-multiselect').querySelector('.pr-multiselect-button-label').innerText;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Filter Reviews Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qFitler = {
        "category": QuantumMetricAPI?.lastClicked?.closest('.pr-multiselect')?.querySelector('.pr-multiselect-button-label')?.innerText,
        "value": QuantumMetricAPI?.lastClicked?.closest('li')?.innerText.split('(')[0].trim()
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Filter Reviews Click (attributes)): " + qErr);
}}}]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":9,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[class*=\"smart-crosslinks\"] a,[class*=\"smart-crosslinks\"] a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try { return (this.api || QuantumMetricAPI).lastClicked ? (this.api || QuantumMetricAPI).lastClicked.innerText : ""; } catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":10,"f":0,"m":0,"s":0,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".fds_star-ratings,.fds_star-ratings *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.product?.product_name;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: View Ratings Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: View Ratings Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":11,"f":0,"m":0,"s":1,"u":"/product\\.do","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":[".buy-box .low-stock-message,.low-stock"]},{"t":"SelectorText","v":[".buy-box .low-stock-message,.low-stock"]}]}},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":false,"i":12,"f":0,"m":1,"s":2,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["[role=\"alert\"]:not(.visually-hidden),[kind=\"warning\"]:not(.visually-hidden)"]},{"t":"SelectorText","v":["[role=\"alert\"]:not(.visually-hidden),[kind=\"warning\"]:not(.visually-hidden)"]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":13,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["attn\\.tv\\/unrenderedCreative"]},{"t":"XFJPar","v":[]}]},"/targets/overlay/immediately/renderingFields/creativeId"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse).targets.overlay.immediately.renderingFields;
    qRESP.creativeConfig = JSON.parse(qRESP.creativeConfig);
    var qAttn = {
        "anonymousId": qRESP?.anonymousId,
        "companyName": qRESP?.companyName,
        "country": qRESP?.country,
        "creativeConfig": {
            "devTemplateId": qRESP?.creativeConfig.devTemplateId,
            "prodTemplateId": qRESP?.creativeConfig.prodTemplateId,
            "subType": qRESP?.creativeConfig.subType,
            "creativeName": qRESP?.creativeConfig.base.fields.creativeName,
            "pageTitle": qRESP?.creativeConfig.base.fields.pageTitle,
            "smsBody": qRESP?.creativeConfig.base.fields.smsBody
        },
        "creativeId": qRESP?.creativeId,
        "displayName": qRESP?.displayName,
        "triggerType": qRESP?.displayTrigger.triggerType,
        "environment": qRESP?.environment,
        "impressionId": qRESP?.impressionId,
        "isSubscriber": qRESP?.isSubscriber,
        "language": qRESP?.language,
        "pageview": qRESP?.pageview,
        "pageviewRuleLowerBound": qRESP?.pageviewRuleLowerBound,
        "showEmail": qRESP?.showEmail,
        "templateId": qRESP?.templateId,
        "userId": qRESP?.userId
    };

    QuantumMetricAPI.setSessionVar("Attentive :: API", qAttn);
    return qAttn.creativeConfig.creativeName;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Attentive :: API (value): " + qErr);
}}}]},{"t":"VXF","v":[{"t":"XHR","v":["attn\\.tv\\/unrenderedCreative"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Attentive :: API");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Attentive :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":15,"f":0,"m":0,"s":1,"u":"/product\\.do","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":[".sold-out-message,.product-page .out-of-stock-page,.pdp-oos-image"]},{"t":"JSValueEx","v":[{"fn":function () {return window?.QuantumMetricAPI?.getSessionVar("Page :: Data")?.product.product_name;}}]},{"t":"JSValue","v":[{"fn":function () {return window?.QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;}}]}]}},{"f":0,"i":17,"evalAlways":true,"m":0,"s":1,"u":".*","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!window?.gap?.pageType && !!window?.adobeConsoleData?.page_name) {
        if (!!window.gap.pageType.match(/^(?!.*\b(product|shoppingbag|checkout|order)\b).*$/)) {
            return true;
        } else if (window.gap.pageType === "product" && !document.querySelector('.pdp-reviews-widget .gapLoaderPlaceholder') && !!document.querySelector('.pr-review-snapshot, .pr-rd-no-reviews')) {
            return true;
        } else if (window.gap.pageType === "shoppingbag" && !!window.QuantumMetricAPI.getSessionVar("Shopping Bag")) {
            return true;
        }
        /*else if (window.gap.pageType === "checkout" && !!window.QuantumMetricAPI.getSessionVar("Checkout :: API")) {return true;}*/
        else if (window?.gap?.pageType === "checkout" && !!document.location.pathname.match(/\/thankyou.*/) && !!window.QuantumMetricAPI.getSessionVar("Shopping Bag")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Page :: Data (trigger): " + qErr);
}}}]},{"t":"JSValueEx","v":[{"fn":function () {function safeClone(obj) {
    if (typeof window !== 'undefined' && typeof window.structuredClone === 'function') {
        return window.structuredClone(obj);
    }
    try {
        return obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));
    } catch (e) {
        // If JSON cloning fails (circular refs), return the original object to avoid throwing.
        return obj;
    }
}

try {
    const pt = safeClone(window?.gap?.pageType);
    return (typeof pt === 'string') ? pt.replaceAll('&amp;', '&'): pt;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Page :: Data (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    // ----- helpers -----
    function safeClone(obj) {
        if (typeof window !== "undefined" && typeof window.structuredClone === "function") {
            return window.structuredClone(obj);
        }
        try {
            return obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));
        } catch (e) {
            return obj; // last resort (e.g., circular refs)
        }
    }

    function decodeParam(name) {
        // pulls a single query param value from the current URL
        try {
            return new URL(window.location.href).searchParams.get(name) ?? undefined;
        } catch (e) {
            return undefined;
        }
    }

    function decodeNavFromHref(href) {
        if (!href || href.indexOf("nav=") < 0) return undefined;
        return window
            .decodeURIComponent(href.replace(/.*nav\=/g, "").replace(/&.*/, ""))
            .replaceAll("+", " ")
            .split("#")[0];
    }

    function htmlAmpFix(v) {
        const c = safeClone(v);
        return typeof c === "string" ? c.replaceAll("&amp;", "&") : c;
    }

    function numFromText(text) {
        const n = parseFloat((text || "").replace(/[^0-9.]/g, ""));
        return Number.isFinite(n) ? n : undefined;
    }

    function intFromText(text) {
        const n = parseInt((text || "").replace(/[^0-9]/g, ""), 10);
        return Number.isFinite(n) ? n : undefined;
    }

    function buildFiltersFromChips(chipSelector) {
        const chips = document.querySelectorAll(chipSelector);
        if (!chips || chips.length === 0) return undefined;

        const filterObj = Array.from(chips)
            .map((btn) => btn.getAttribute("aria-label") || "")
            .map((label) => label.split("Remove ")[1] || "")
            .map((s) => s.replace(" filter ", "="))
            .reduce((acc, item) => {
                const i = item.indexOf("=");
                if (i === -1) return acc;
                const key = item.slice(0, i).trim();
                const value = item.slice(i + 1).trim();
                if (!key) return acc;
                (acc[key] ||= []).push(value);
                return acc;
            }, {});

        return filterObj;
    }

    function enrichSortAndBopis(filters) {
        if (!filters) return;

        const sortByField = decodeParam("sortByField");
        const sortByDir = decodeParam("sortByDir");
        if (sortByField) filters.sortByField = sortByField.replaceAll("+", " ");
        if (sortByDir) filters.sortByDir = sortByDir.replaceAll("+", " ");

        // BOPIS
        const storeId = decodeParam("storeId");
        if (!storeId) return;

        let bopis;
        try {
            bopis = JSON.parse(localStorage?.bopis || "null");
        } catch (e) {
            bopis = null;
        }

        if (!bopis?.selectedStore?.storeId) return;

        filters.bopisEnabled = true;
        filters.bopisData = {
            bopisPostalCode: bopis.postalCode || undefined,
            selectedStore: {
                storeAddress: bopis.selectedStore.storeAddress || undefined,
                storeDistance: bopis.selectedStore.storeDistance || undefined,
                storeId: bopis.selectedStore.storeId || undefined,
                storeName: bopis.selectedStore.storeName || undefined
            }
        };
    }

    // ----- base page -----
    const href = window?.location?.href;
    const pageType = window?.gap?.pageType;

    var qPage = {
        appName: window?.gap?.appName,
        brand: window?.gap?.brand,
        breakpoint: window?.gap?.breakpoint,
        business_id: window?.tealValidation?.data?.op_view?.business_id,
        business_unit_id: !!window?.tealValidation?.data?.op_view?.business_unit_id ? htmlAmpFix(window.tealValidation.data.op_view.business_unit_id) : undefined,
        business_unit_abbr_name: window?.tealValidation?.data?.op_view?.business_unit_abbr_name,
        business_unit_description: window?.tealValidation?.data?.op_view?.business_unit_description,
        channel: !!window?.tealValidation?.data?.op_view?.channel ? htmlAmpFix(window.tealValidation.data.op_view.channel) : undefined,
        components: window?.gap?.components,
        data_source_name: "web",
        granify_group: window?.GRANIFY_OPTLY_USER,
        last_page_type: QuantumMetricAPI.getSessionVar("last_page_type"),
        locale: window?.gap?.locale,
        market: window?.gap?.market,
        next: window?.gap?.next,
        nextApp: window?.gap?.buildVersion?.nextApp,
        nextUpgrade: window?.gap?.nextUpgrade,
        page_name: window?.adobeConsoleData?.page_name ? htmlAmpFix(window.adobeConsoleData.page_name) : undefined,
        page_title: document?.title,
        page_type: pageType ? htmlAmpFix(pageType) : undefined,
        nav: decodeNavFromHref(href),
        screen_size: window?.screen?.width && window?.screen?.height ? window.screen.width + "x" + window.screen.height : undefined,
        window_size: (window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth) +
            "x" +
            (window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight),
        url: document?.location?.href,
        url_hostname: document?.location?.hostname,
        url_path: document?.location?.pathname,
        url_hash: document?.location?.hash,
        url_parameters: window?.qUrlParameters,
        mlink_parameters: !!window?.qUrlParameters?.mlink ? window.qUrlParameters.mlink.split(',') : undefined,
        url_referrer: QuantumMetricAPI?.lastUrl()?.href || document?.referrer,
        user_agent: window?.navigator?.userAgent
    };

    // brandMarketInfo (clone + sanitize)
    var qBrandMarketInfo = safeClone(window?.brandMarketInfo);
    if (qBrandMarketInfo) {
        delete qBrandMarketInfo.marketAwareReportSuite;
        delete qBrandMarketInfo.marketAwareReportSuiteTest;
        delete qBrandMarketInfo.marketAwareTrackingSecureServer;
        delete qBrandMarketInfo.marketAwareTrackingServer;
    }
    qPage.brandMarketInfo = qBrandMarketInfo;

    QuantumMetricAPI.setSessionVar("last_page_type", qPage.last_page_type);
    QuantumMetricAPI.setSessionVar("Page :: Data", qPage);

    // ----- Product Pages -----
    if (pageType === "product") {
        QuantumMetricAPI.setSessionVar("Product :: Page :: Swatch Click Count", undefined);

        const pid = decodeParam("pid");
        const cid = decodeParam("cid");

        var qPDP = {
            pid: pid,
            cid: cid ? cid.split("#")[0] : undefined,
            recommended_product: (href || "").indexOf("rrec=true") >= 0,
            product_id: pid ? window.decodeURIComponent(pid).substring(0, 6) : undefined,
            product_name: document?.querySelector("h1")?.innerText,
            current_price: numFromText(document?.querySelector('[class*="purchase-price"]')?.innerText),
            origional_price: numFromText(document?.querySelector('[class*="price-purchase-strikethrough"]')?.innerText),
            product_message: document?.querySelector(".pdp-title-box .label-message, [data-testid=\"color-marketing-flag\"], [data-testid=\"pdp-excluded-from-promotions\"]")
                ?.innerText || undefined,
            star_ratings_count: intFromText(document?.querySelector(".pr-snippet-rating-count")?.innerText) || 0,
            average_star_rating: (function() {
                const label = document?.querySelector(".pr-review-snapshot-snippets .pr-snippet-stars")?.ariaLabel;
                if (!label) return undefined;
                const m = label.match(/Rated\s+([0-9.]+)/i);
                return m ? parseFloat(m[1]) : undefined;
            })(),
            product_reviews_count: intFromText(document?.querySelector(".pr-rd-review-total")?.innerText) || 0,
            color: document?.querySelector('[data-testid="pdp-color-value"]')?.innerText,
            fit: document?.querySelector(".pdp_variant-selector-container__items input:checked")?.labels?.[0]?.innerText,
            size_dimension_1: document?.querySelector('.pdp_size-selector-container[data-testid="dimension-group-1"] input:checked')?.labels?.[0]?.innerText,
            size_dimension_2: document?.querySelector('.pdp_size-selector-container[data-testid="dimension-group-2"] input:checked')?.labels?.[0]?.innerText,
            size_dimension_3: document?.querySelector('.pdp_size-selector-container[data-testid="dimension-group-3"] input:checked')?.labels?.[0]?.innerText,
            fulfillment_options_count: document?.querySelectorAll(".pdp_fulfillment-container input")?.length,
            fulfillment_options: Array.from(document?.querySelectorAll(".pdp_fulfillment-container input") || []).map((el) => el.id)
        };

        // stock status (shipping)
        const shipStatus = document?.querySelector('label[for="shipping"] .availability-status')?.innerText;
        if (shipStatus === "In stock" || document?.querySelector('label[for="shipping"] .availability-status.in-stock-msg')) {
            qPDP.stock_status_shipping = "In stock";
        } else if (shipStatus === "Out of stock" || document?.querySelector('label[for="shipping"] .availability-status.out-stock-msg')) {
            qPDP.stock_status_shipping = "Out of stock";
        }

        // stock status (pickup)
        const pickupStatus = document?.querySelector('label[for="pickup"] .availability-status')?.innerText;
        const pickupLabelText = document?.querySelector('label[for="pickup"]')?.innerText || "";
        if (pickupStatus === "In stock" || document?.querySelector('label[for="pickup"] .in-stock-msg')) {
            qPDP.stock_status_store = "In stock";
        } else if (pickupStatus === "Out of stock" || document?.querySelector('label[for="pickup"] .out-stock-msg') || pickupLabelText.indexOf("Out of stock") > -1) {
            qPDP.stock_status_store = "Out of stock";
        }

        qPage.product = qPDP;
    }

    // ----- Category Pages -----
    if (pageType === "category" && /\/browse\//.test(document.location.href)) {
        var qCatPage = {
            category: document?.location?.href?.split("?")[0]?.split("browse/")?.[1]?.replaceAll("/", " / ").replaceAll("-", " "),
            breadcrumbs: document?.querySelector(".plp_breadcrumbs")?.innerText
        };

        const filters = buildFiltersFromChips('.plp_chips-and-clear-all button[aria-label]');
        if (filters) {
            enrichSortAndBopis(filters);
            qCatPage.filters = filters;
        }

        const displayed = document?.querySelectorAll(".plp_product-list--grid .plp_product-card")?.length;
        if (typeof displayed === "number") qCatPage.numberOfItemsDisplayed = displayed;

        qPage.category = qCatPage;
    }

    // ----- Search Pages -----
    if (pageType === "search") {
        var qSrchPage = {};

        const filters = buildFiltersFromChips('.plp_chips-and-clear-all button[aria-label]');
        if (filters) {
            enrichSortAndBopis(filters);
            qSrchPage.filters = filters;
        }

        const displayed = document?.querySelectorAll(".plp_product-list--grid .plp_product-card")?.length;
        if (typeof displayed === "number") qSrchPage.numberOfItemsDisplayed = displayed;

        const total = intFromText(document?.querySelector(".plp_grid-header__items-count")?.innerText);
        if (total !== undefined) qSrchPage.numberOfItemsTotal = total;

        const searchText = decodeParam("searchText");
        if (searchText) qSrchPage.searchTerm = searchText;

        qPage.search = qSrchPage;
    }

    // ----- Shopping Bag Page -----
    if (pageType === "shoppingbag" && window?.QuantumMetricAPI?.getSessionVar("Shopping Bag")) {
        qPage.shoppingBag = window.QuantumMetricAPI.getSessionVar("Shopping Bag");
    }

    // Checkout Page
    /* if (window?.gap?.pageType === "checkout" && document.location.pathname === "/checkout" && !!window.QuantumMetricAPI.getSessionVar("Checkout :: API")) {
        qPage.checkout = window.QuantumMetricAPI.getSessionVar("Checkout :: API");
    } */

    // ----- Order Confirmation Page -----
    if (pageType === "checkout" && /\/thankyou.*/.test(document.location.pathname) && window?.QuantumMetricAPI?.getSessionVar("Shopping Bag")) {
        qPage.order = window.QuantumMetricAPI.getSessionVar("Shopping Bag");
    }

    window.QuantumMetricAPI.setSessionVar("Page :: Data", qPage);
    return qPage;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Page :: Data (attributes): " + qErr);
}}}]}]},"x":"QJS","sessionInfoReq":true,"excludeBlank":false},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":20,"f":0,"m":0,"s":0,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[class*=\"granify-close-button\"],[class*=\"granify-close-button\"] *"]}]},{"t":"V","v":[""]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":21,"f":0,"m":0,"s":0,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[class*=\"granify-cta-message\"],[class*=\"granify-cta-message\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.lastClicked.getAttribute('granify-i18n');
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Granify - CTA Click (value): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":23,"f":0,"m":0,"s":0,"u":"/InternalServerError\\.do","x":"QHE","v":{"t":"HE","v":[]}},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":false,"i":24,"f":0,"m":0,"s":1,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!window?.optimizely?.get) {
        const campaignStates = window?.optimizely
            ?.get('state')
            ?.getCampaignStates({
                isActive: true
            });

        return !!(campaignStates && Object.keys(campaignStates).length);
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Optimizely - Campaigns & Variations (trigger): " + qErr);
}}}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var campaignStates = window.optimizely.get('state').getCampaignStates({
        'isActive': true
    });
    var combinedCampaignVariation = "";
    var oCampaigns = {
        "Campaigns": []
    };
    for (var campaignId in campaignStates) {
        if (Object.prototype.hasOwnProperty.call(campaignStates, campaignId)) {
            var c = campaignStates[campaignId];
            if ("isInCampaignHoldback" in c && c.isInCampaignHoldback !== true) {
                if (!!c.campaignName && !!c.id && !!c.variation && !!c.variation.name && !!c.variation.id) {
                    var campaignName = c.campaignName;
                    var campaignID = c.id;
                    var variationName = c.variation.name;
                    var variationId = c.variation.id;
                    combinedCampaignVariation = (c.campaignName + "(" + c.id + ") | " + c.variation.name + "(" + c.variation.id + ")").trim();
                }
                var campaign = {};
                campaign.name = campaignName;
                campaign.id = campaignID;
                campaign.variation_name = variationName;
                campaign.variation_id = variationId;
                oCampaigns.Campaigns.push(campaign);
            }
        }
    }
    window.QuantumMetricAPI.setSessionVar("Optimizely :: Campaigns & Variations", oCampaigns);
    return oCampaigns.Campaigns.length;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Optimizely :: Campaigns & Variations (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return window.QuantumMetricAPI.getSessionVar("Optimizely :: Campaigns & Variations");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Optimizely :: Campaigns & Variations (attributes): " + qErr);
}}}]}]}},{"f":0,"i":25,"evalAlways":true,"m":1,"s":2,"u":".*","v":{"t":"E","v":[{"t":"SelectorPresent","v":["[kind=\"error\"],.hui-general-error .cb-base-default,.fds_notification .notification--content,.text-cb-textColor-error[role=\"alert\"]"]},{"t":"SelectorText","v":["[kind=\"error\"],.hui-general-error .cb-base-default,.fds_notification .notification--content,.text-cb-textColor-error[role=\"alert\"]"]}]},"x":"QCC","sessionInfoReq":true,"excludeBlank":false},{"sessionInfoReq":false,"evalAlways":true,"excludeBlank":false,"i":26,"f":0,"m":0,"s":1,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {return window?.certona?.filter?.category?.length > 0 && !!window.certonaCache && !!Object.keys(window.certonaCache)[0];}}]},{"t":"VXF","v":[{"t":"JSValueEx","v":[{"fn":function () {return Object.keys(window.certonaCache)[0];}}]},{"t":"XFCC","v":["u"]}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qCertona = {
        "page_type": Object.keys(window.certonaCache)[0],
        "schemes": Object.values(window.certonaCache)[0].resonance.schemes
    };

    var qFilters = new Object(window.certona.filter);

    qFilters.CLU = qFilters.CLUS.split(';');
    qFilters.SPU = qFilters.SPUS.split(';');
    if (!!qFilters.category) {
        qFilters.categories = qFilters.category;
        delete qFilters.category;
        qFilters.category = qFilters.categories.split(';');
        qCertona.filter = qFilters;
    }
    return qCertona;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Recommendations :: Data Layer (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":true,"excludeBlank":true,"i":27,"f":0,"m":0,"s":1,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":[".modal[style*=\"block\"] [class*=\"_title\"]"]},{"t":"SelectorText","v":[".modal[style*=\"block\"] [class*=\"_title\"]"]}]}},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":false,"i":29,"f":0,"m":0,"s":2,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {return !!window?.personalizationData?.customerUUID;}}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qPD =
        typeof structuredClone === "function" ?
        structuredClone(window.personalizationData) :
        JSON.parse(JSON.stringify(window.personalizationData));

    if (!!qPD?.marketingMessageInfo?.geoLocation) {
        var qGeoData = Object.fromEntries(
            qPD.marketingMessageInfo.geoLocation.split(',').map(pair => {
                const [key, value] = pair.split('=');
                return [key, value];
            })
        );
        qPD.marketingMessageInfo.geoLocationData = qGeoData;
      
        if (!!qGeoData?.zip) {
            var qZips = qGeoData.zip.split('+');
            qPD.marketingMessageInfo.geoLocationData.zips = qZips;
        }
    }

    qPD.unknownShopperId = document?.cookie?.split('unknownShopperId=')[1]?.split(';')[0]?.replace(/\|+$/, '');
    qPD.cam = document?.cookie?.split('cam=')[1]?.split(';')[0]?.replace(/\|+$/, '');

    QuantumMetricAPI.setSessionVar("Personalization :: User :: Data", qPD);
    return qPD.customerUUID;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(671, 0, "Personalization :: User : Data (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Personalization :: User :: Data");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Personalization :: User : Data (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":30,"f":64,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/shopping-bags\\/items\\/summary"]},{"t":"XFJPar","v":[]}]},"/charges/subTotal"]},{"t":"CV","v":[{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/shopping-bags\\/items\\/summary"]},{"t":"XFJPar","v":[]}]},"/charges/subTotal"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return JSON.parse(QuantumMetricAPI.lastXHR.qresponse).currencyCode;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Add to Bag :: API (currency code): " + qErr);
}}}]}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/shopping-bags\\/items\\/summary"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qREQ = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qAtB = {
        "request": qREQ,
        "response": qRESP
    };
    QuantumMetricAPI.setSessionVar("Add to Bag :: API", qAtB);
    return qAtB;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Add to Bag :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":31,"f":64,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/ui_composite_bags\\/v1"]},{"t":"XFJPar","v":[]}]},"/order_summary/estimated_total"]},{"t":"CV","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qBag = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    window.QuantumMetricAPI.setSessionVar("Shopping Bag :: API", qBag);
    if (qBag.order_summary.estimated_total > 0) {
        window.QuantumMetricAPI.setSessionVar("Shopping Bag", qBag);
    } else {
        window.QuantumMetricAPI.setSessionVar("Shopping Bag", undefined);
    }
    return parseFloat(qBag.order_summary.estimated_total).toFixed(2);
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: API (value): " + qErr);
}}}]}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/ui_composite_bags\\/v1"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return window.QuantumMetricAPI.getSessionVar("Shopping Bag :: API");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":32,"f":64,"m":1,"s":1,"u":"/checkout","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/ui_composite_checkouts\\/v1$"]},{"t":"XFJPar","v":[]}]},"/order_summary/subtotal_after_savings"]},{"t":"CV","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    //var qREQ = JSON.parse(QuantumMetricAPI.lastXHR.qrequest);
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    //var qURL = QuantumMetricAPI.lastXHR.qurl;
    var qCheckout = {
        "customer": qRESP?.customer,
        "delivery_groups": {
            "default": qRESP?.delivery_groups[0]?.default,
            "group_id": qRESP?.delivery_groups[0]?.group_id,
            "group_type": qRESP?.delivery_groups[0]?.group_type,
            "shipping_methods": qRESP?.delivery_groups[0]?.shipping_methods
        },
        "draft_order_id": qRESP?.draft_order_id,
        "error_messages": qRESP?.error_messages,
        "order_details": qRESP?.order_details,
        "order_summary": qRESP?.order_summary,
        "promotions": qRESP?.promotions,
        "rewards": qRESP?.rewards,
        "shopping_bag": qRESP?.shopping_bag
    };

    window.QuantumMetricAPI.setSessionVar("Checkout :: API", qCheckout);
    return parseFloat(qCheckout.order_summary.subtotal_after_savings).toFixed(2);
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: API (value): " + qErr);
}}}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return window.QuantumMetricAPI.getSessionVar("Shopping Bag :: API").order_summary.currency_code;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: API (currency code): " + qErr);
}}}]}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/ui_composite_checkouts\\/v1$"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {function mergeBagsBySku(qBagCart, qBagCheckout) {
    try {
        const cartBySku = new Map(
            qBagCart.map(c => [String(c.product?.sku), c])
        );

        const merged = qBagCheckout.map(chk => {
            const sku = String(chk.sku);
            const cart = cartBySku.get(sku) || {};
            cartBySku.delete(sku);

            // Separate nested objects so we can deep-merge them intentionally
            const cartProduct = cart.product || {};
            const chkProduct = chk.product || {};

            const cartPrice = cart.price || {};
            const chkPrice = chk.price || {};

            const cartBrand = cart.brand || cartProduct.brand || {};
            const chkBrand = chk.brand || chkProduct.brand || {};

            // Merge top-level first, then overwrite nested fields with deep merges
            const out = {
                ...cart,
                ...chk,

                // ensure sku is present & consistent
                sku,

                // deep-merge nested objects (checkout wins on conflicts)
                product: {
                    ...cartProduct,
                    ...chkProduct
                },
                price: {
                    ...cartPrice,
                    ...chkPrice
                },
                brand: {
                    ...cartBrand,
                    ...chkBrand
                },
            };

            // OPTIONAL: avoid losing cart.item_id when chk has `id` (keep both; if you don't want both, delete one)
            if (cart.item_id && chk.id) {
                out.item_id = cart.item_id; // cart id
                out.id = chk.id; // checkout id
            }

            return out;
        });

        // Add cart-only items (not present in checkout)
        for (const cart of cartBySku.values()) {
            merged.push({
                ...cart,
                sku: String(cart.product?.sku),
                product: {
                    ...(cart.product || {})
                },
                price: {
                    ...(cart.price || {})
                },
                brand: {
                    ...(cart.brand || cart.product?.brand || {})
                },
            });
        }

        return merged;
    } catch (qErr) {
        QuantumMetricAPI.sendEvent(2, 0, "Checkout :: API (attributes - mergeBagsBySku): " + qErr);
    }
}

// Merge the Carts from Shopping Bag and Checkout APIs
try {
    var qBagCart = QuantumMetricAPI.getSessionVar('Shopping Bag :: API').items;
    var qBagCheckout = QuantumMetricAPI.getSessionVar('Checkout :: API').shopping_bag.items;
    const result = mergeBagsBySku(qBagCart, qBagCheckout);
    QuantumMetricAPI.setSessionVar("Shopping Bag Items", result);

    return window.QuantumMetricAPI.getSessionVar("Checkout :: API");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":33,"f":0,"m":1,"s":2,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["shopping-bags.*\\/card_savings"]},{"t":"XFJPar","v":[]}]},"/promo_code"]},{"t":"ObjSearchValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["shopping-bags.*\\/card_savings"]},{"t":"XFJPar","v":[]}]},"/promo_code"]},{"t":"VXF","v":[{"t":"XHR","v":["shopping-bags.*\\/card_savings"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Card Saving :: API (attributes #1): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":34,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_bags\\/v1\\/bags.*\\/promotions"]},{"t":"XFJPar","v":[]}]},"/promo_codes/0"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_bags\\/v1\\/bags.*\\/promotions"]},{"t":"XFJPar","v":[]}]},"/promo_codes"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/ui_composite_bags\\/v1\\/bags.*\\/promotions"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
  var qREQ = JSON.parse(window.QuantumMetricAPI.lastXHR.qrequest);
  var qRESP = JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
  delete qRESP.delivery_groups;
  delete qRESP.payment_methods;
  delete qRESP.shipping_addresses;
  return {...qREQ, ...qRESP};
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Promotions :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":35,"f":0,"m":1,"s":1,"u":"\\/shopping-bag|\\/checkout","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_checkouts\\/v1\\/delivery_groups.*\\/shipping_methods"]},{"t":"XFJPar","v":[]}]},"/shipping_method_id"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_checkouts\\/v1\\/delivery_groups.*\\/shipping_methods"]},{"t":"XFJPar","v":[]}]},"/shipping_method_id"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/ui_composite_checkouts\\/v1\\/delivery_groups.*\\/shipping_methods"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qREQ = JSON.parse(window.QuantumMetricAPI.lastXHR.qrequest);
    var qRESP = JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
    delete qRESP.payment_methods;
    delete qRESP.shipping_addresses;
    qRESP.delivery_groups.forEach(group => {
        delete group.shipping_address;
    });
    return {
        ...qREQ,
        ...qRESP
    };
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shipping Methods :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":36,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/loyalty_customer_benefits\\/v1"]},{"t":"XFJPar","v":[]}]},"/customer_info/customer_tier"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/loyalty_customer_benefits\\/v1"]},{"t":"XFJPar","v":[]}]},"/customer_info/customer_tier"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/loyalty_customer_benefits\\/v1"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qREQ = JSON.parse(window.QuantumMetricAPI.lastXHR.qrequest);
    var qRESP = JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
    var qLoyalty = {...qREQ, ...qRESP};
    return qLoyalty;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Loyalty Customer Benefits :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":38,"f":0,"m":1,"s":2,"u":".*","x":"QXJ,QXJ","v":{"t":"MAE","v":[1,0,{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["matching\\.granify\\.com\\/match"]},{"t":"XFJPar","v":[]}]},"/campaign/outcome/headline"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qGranify = {
        "campaign_type": qRESP?.campaign?.campaign_type || qRESP?.mm_campaign?.campaign_type,
        "experiment": qRESP?.campaign?.experiment || qRESP?.mm_campaign?.experiment,
        "mobile_display_type": qRESP?.campaign?.mobile_display_type || qRESP?.mm_campaign?.mobile_display_type,
        "offer_id": qRESP?.campaign?.offer_id || qRESP?.mm_campaign?.offer_id,
        "outcome": qRESP?.campaign?.outcome || qRESP?.mm_campaign?.outcome,
        "shared_data": qRESP?.campaign?.shared_data || qRESP?.mm_campaign?.shared_data
    };

    if (qGranify?.shared_data?.slots?.length > 0) {
        var recsArray = Object.entries(qGranify.shared_data.slots)
            .sort((a, b) => {
                const indexA = Number(a[0].match(/\((\d+)\)/)[1]);
                const indexB = Number(b[0].match(/\((\d+)\)/)[1]);
                return indexA - indexB;
            })
            .map(([_, value]) => value);
        qGranify.shared_data.slots = recsArray;
    }

    QuantumMetricAPI.setSessionVar("Granify :: API", qGranify);
    return qGranify.outcome.headline;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Granify :: API (value #1): " + qErr);
}}}]},{"t":"VXF","v":[{"t":"XHR","v":["matching\\.granify\\.com\\/match"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Granify :: API");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Granify :: API (attributes #1): " + qErr);
}}}]}]}]}]},{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["matching\\.granify\\.com\\/match"]},{"t":"XFJPar","v":[]}]},"/mm_campaign/outcome/headline"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qGranify = {
        "campaign_type": qRESP?.campaign?.campaign_type || qRESP?.mm_campaign?.campaign_type,
        "experiment": qRESP?.campaign?.experiment || qRESP?.mm_campaign?.experiment,
        "mobile_display_type": qRESP?.campaign?.mobile_display_type || qRESP?.mm_campaign?.mobile_display_type,
        "offer_id": qRESP?.campaign?.offer_id || qRESP?.mm_campaign?.offer_id,
        "outcome": qRESP?.campaign?.outcome || qRESP?.mm_campaign?.outcome,
        "shared_data": qRESP?.campaign?.shared_data || qRESP?.mm_campaign?.shared_data
    };

    if (qGranify?.shared_data?.slots?.length > 0) {
        var recsArray = Object.entries(qGranify.shared_data.slots)
            .sort((a, b) => {
                const indexA = Number(a[0].match(/\((\d+)\)/)[1]);
                const indexB = Number(b[0].match(/\((\d+)\)/)[1]);
                return indexA - indexB;
            })
            .map(([_, value]) => value);
        qGranify.shared_data.slots = recsArray;
    }

    QuantumMetricAPI.setSessionVar("Granify :: API", qGranify);
    return qGranify.outcome.headline;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Granify :: API (value #2): " + qErr);
}}}]},{"t":"VXF","v":[{"t":"XHR","v":["matching\\.granify\\.com\\/match"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Granify :: API");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Granify :: API (attributes #2): " + qErr);
}}}]}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":39,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/address_verifications\\/v1"]},{"t":"XFJPar","v":[]}]},"/match_accuracy"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/address_verifications\\/v1"]},{"t":"XFJPar","v":[]}]},"/match_accuracy"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/address_verifications\\/v1"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qAddress = {
        "Request": JSON.parse(QuantumMetricAPI.lastXHR.qrequest),
        "Response": JSON.parse(QuantumMetricAPI.lastXHR.qresponse)
    };
    return qAddress;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Address Validation :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":40,"f":0,"m":0,"s":1,"u":"PageNotFound\\.do","x":"QHE","v":{"t":"HE","v":[]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":41,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["#pdp-atb-btn:not([disabled]),#pdp-atb-btn:not([disabled]) *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try { return (this.api || QuantumMetricAPI).lastClicked ? (this.api || QuantumMetricAPI).lastClicked.innerText : ""; } catch (e) {}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qATB = QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
    if (qATB) {
        qATB.button_text = QuantumMetricAPI?.lastClicked?.innerText || '';
        qATB.quantity = parseInt(document?.querySelector('#pdp-quantity-selector')?.innerText);
    }
    return qATB;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Add to Bag Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":true,"excludeBlank":false,"i":42,"f":0,"m":0,"s":1,"u":".*","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":["[data-testid=\"dynamic-modal-content\"] .first_copy"]},{"t":"SelectorText","v":["[data-testid=\"dynamic-modal-content\"] .first_copy"]},{"t":"JSValue","v":[{"fn":function () {try {
    var qModal = {
        "first_copy": document?.querySelector('[data-testid="dynamic-modal-content"] .first_copy')?.innerText,
        "second_copy": document?.querySelector('[data-testid="dynamic-modal-content"] .second_copy')?.innerText,
        "cta_button": document?.querySelector('[data-testid="dynamic-modal-content"] [class*="button')?.innerText
    };
    return qModal;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Dynamic Modal :: Impression (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":43,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/product_recommendations\\/v1"]},{"t":"XFJPar","v":[]}]},"/recommendation_containers/0/model_copy"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse).recommendation_containers.length;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Recommendations :: API (value): " + qErr);
}}}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/product_recommendations\\/v1"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = new URL(QuantumMetricAPI.lastXHR.qurl);
    var qREQ = Object.fromEntries(qURL.searchParams.entries());
    var qRESP = JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
    var qREQ_RESP = {...qREQ, ...qRESP};
    QuantumMetricAPI.setSessionVar("Recommendations :: API", qREQ_RESP);
    return qREQ_RESP;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Recommendations :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":44,"f":0,"m":0,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/complete-the-look"]},{"t":"XFJPar","v":[]}]},"/pdp_item/title"]},{"t":"ObjSearchValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/complete-the-look"]},{"t":"XFJPar","v":[]}]},"/pdp_item/title"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/complete-the-look"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = new URL(QuantumMetricAPI.lastXHR.qurl);
    var qREQ = Object.fromEntries(qURL.searchParams.entries());

    var qRESP = JSON.parse(window.QuantumMetricAPI.lastXHR.qresponse);
    // Update looks
    qRESP.looks.forEach(look => {
        delete look.order;

        look.items.forEach(item => {
            // price → number, divided by 100
            if (item.price != null) {
                item.price = Number(item.price) / 100;
            }

            // product_price → number ONLY (no division)
            if (item.product_price != null) {
                item.product_price = Number(item.product_price);
            }

            // promote regular_price → number, divided by 100
            if (item.details?.regular_price != null) {
                item.regular_price = Number(item.details.regular_price) / 100;
            }

            delete item.details;
        });
    });

    // Update pdp_item
    if (qRESP.pdp_item) {
        if (qRESP.pdp_item.price != null) {
            qRESP.pdp_item.price = Number(qRESP.pdp_item.price) / 100;
        }

        if (qRESP.pdp_item.details?.regular_price != null) {
            qRESP.pdp_item.regular_price =
                Number(qRESP.pdp_item.details.regular_price) / 100;
        }

        delete qRESP.pdp_item.details;
    }
    
    // product_price → number
    if (qREQ?.product_price != null) {
        qREQ.product_price =
            Number(qREQ.product_price);
    }
  
    return {...qREQ, ...qRESP};
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Find Mine :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":45,"f":0,"m":0,"s":1,"u":"/shopping-bag","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["#empty-bag [data-testid=\"global_notifications\"]"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    QuantumMetricAPI.setSessionVar("Shopping Bag", undefined);
    QuantumMetricAPI.setSessionVar("Shopping Bag :: API", undefined);
    QuantumMetricAPI.setSessionVar("Shopping Bag :: Page", undefined);
    return document.querySelector('#empty-bag [data-testid="global_notifications"]').innerText;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Empty (value): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":46,"f":0,"m":1,"s":1,"u":"/shopping-bag","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"checkout-button\"],[data-testid=\"paypal-button\"],[data-testid*=\"apple-pay-button\"],[data-testid=\"checkout-button\"] *,[data-testid=\"paypal-button\"] *,[data-testid*=\"apple-pay-button\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid').split('-button')[0];
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: CTA Click (value): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":49,"f":0,"m":1,"s":1,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":50,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[aria-label=\"My offers\"] button[aria-expanded=\"false\"],[aria-label=\"My offers\"] button[aria-expanded=\"false\"] *"]}]},{"t":"V","v":[""]}]}},{"f":0,"i":51,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[aria-label=\"My offers\"] button[aria-expanded=\"true\"],[aria-label=\"My offers\"] button[aria-expanded=\"true\"] *"]}]},{"t":"V","v":[""]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":52,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".promoDrawer__content__item a.pd_atag-wrapper,.promoDrawer__content__item a.pd_four-cta_button,.promoDrawer__content__item__msg button,.promoDrawer__content__item a.pd_atag-wrapper *,.promoDrawer__content__item a.pd_four-cta_button *,.promoDrawer__content__item__msg button *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qLastClick = QuantumMetricAPI.lastClicked;
    var qLastClickParent = QuantumMetricAPI.lastClicked.closest('.promoDrawer__content__item');

    var qPromo = {
        "banner": qLastClickParent.querySelector('a img').alt,
        "text": qLastClick.innerText,
        "message": qLastClickParent?.querySelector('.promoDrawer__content__item__msg > span')?.innerText
    };
    qPromo.banner = qPromo.banner.replaceAll('  ', ' ');

    if (qLastClick?.className?.indexOf('cta_button') > -1) {
        qPromo.clickedElement = "CTA Button";
    } else if (qLastClick?.closest('a.pd_atag-wrapper')?.className?.indexOf("wrapper") > -1) {
        qPromo.clickedElement = "Banner";
    } else if (qLastClick?.getAttribute('aria-controls')?.indexOf("detailButton") > -1) {
        qPromo.clickedElement = "Details Button";
    }

    QuantumMetricAPI.setSessionVar("Promo Drawer :: Item Click", qPromo);
    return qPromo.banner + " || " + qPromo.clickedElement;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Promo Drawer :: Item Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Promo Drawer :: Item Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Promo Drawer :: Item Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":53,"f":0,"m":1,"s":1,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":54,"f":0,"m":1,"s":1,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/forms\\/\\d*\\/formData.*.json"]},{"t":"XFJPar","v":[]}]},"/name"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/forms\\/\\d*\\/formData.*.json"]},{"t":"XFJPar","v":[]}]},"/name"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/forms\\/\\d*\\/formData.*.json"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qForm = {
        "id": qRESP.id,
        "name": qRESP.name,
        "propertyType": qRESP.propertyType
    };
    QuantumMetricAPI.setSessionVar("Medallia :: Form Data API", qForm);
    return qForm;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Medallia :: Form Data API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":56,"f":0,"m":1,"s":1,"u":"^(?!.*(\\.do)).*\\/browse\\/.*$","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".plp_product-card a,.plp_product-card a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!QuantumMetricAPI?.lastClicked?.closest('.plp_product-card')?.querySelector('.plp_product-info')) {
        var qClick = QuantumMetricAPI.lastClicked.closest('.plp_product-card').querySelector('.plp_product-info');
        var qClickImg = QuantumMetricAPI.lastClicked.closest('.plp_product-card').querySelector('.plp_product-image');
        var qItem = {};

        qClick?.href?.indexOf('pid=') >= 0 ? qItem.pid = window.decodeURIComponent(qClick.href.replace(/.*pid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('pcid=') >= 0 ? qItem.pcid = window.decodeURIComponent(qClick.href.replace(/.*pcid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('cid=') >= 0 ? qItem.cid = window.decodeURIComponent(qClick.href.replace(/.*cid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('nav=') >= 0 ? qItem.nav = window.decodeURIComponent(qClick.href.replace(/.*nav\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        !!qClick?.querySelector('.plp_product-card-name')?.innerText ? qItem.productName = qClick.querySelector('.plp_product-card-name').innerText : undefined;
        !!qClick?.querySelector('[aria-label*="Original price"]') ? qItem.origionalPrice = qClick.querySelector('[aria-label*="Original price"]').getAttribute('aria-label').split(': ')[1] : undefined;
        !!qClick?.querySelector('[aria-label*="Current price"]') ? qItem.currentPrice = qClick.querySelector('[aria-label*="Current price"]').getAttribute('aria-label').split(': ')[1] : undefined;
        !!qClick?.querySelector('.plp_product-card-marketing-flag')?.innerText ? qItem.marketingFlag = qClick.querySelector('.plp_product-card-marketing-flag').innerText : undefined;
        !!qClickImg?.querySelector('.plp_product-image__badge') ? qItem.merchandisingBadge = qClickImg.querySelector('.plp_product-image__badge').innerText : undefined;

        qItem.category = QuantumMetricAPI?.getSessionVar("Page :: Data")?.category;
        qItem.subCategoryTitle = qClick?.closest('.plp_product-list--grid')?.previousElementSibling?.querySelector('.plp_product-list--subcategory-title')?.innerText;
        qItem.totalItems = QuantumMetricAPI?.getSessionVar("Page :: Data")?.category?.numberOfItemsDisplayed;
        var qCard = QuantumMetricAPI.lastClicked.closest('.plp_product-card');
        var qItems = Array.from(document.querySelectorAll('.plp_product-card'));
        qItem.positionNumber = qItems.indexOf(qCard) + 1;
        qItem.positionDescription = "Clicked card " + qItem.positionNumber + " out of " + qItem.totalItems;

        QuantumMetricAPI.setSessionVar("Category :: Page :: Item Click", qItem);
        return qItem.productName;
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Item Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Category :: Page :: Item Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Item Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":57,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["input#shipping,input#pickup,input#shipping *,input#pickup *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!QuantumMetricAPI?.lastClicked) {
        return QuantumMetricAPI.lastClicked.id;
    } else {
        return "N/A";
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Fulfillment Click (value): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":58,"f":0,"m":1,"s":1,"u":"/checkout","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"placeOrderBtn\"],[data-testid=\"paypal-button\"],[data-testid=\"after-pay\"] button,[data-testid=\"klarna-payment\"] button,[data-testid=\"apple-pay-button-new\"],[data-testid=\"placeOrderBtn\"] *,[data-testid=\"paypal-button\"] *,[data-testid=\"after-pay\"] button *,[data-testid=\"klarna-payment\"] button *,[data-testid=\"apple-pay-button-new\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try{
    return QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid').split('-button')[0].split('-payment')[0];
} catch (qErr) {
        QuantumMetricAPI.sendEvent(2, 0, "Checkout :: CTA Click (value): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":59,"f":0,"m":0,"s":0,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["api\\.gap\\.com"]},{"t":"XFJPar","v":[]}]},"/error_messages/0/message"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["api\\.gap\\.com"]},{"t":"XFJPar","v":[]}]},"/error_messages/0/message"]},{"t":"VXF","v":[{"t":"XHR","v":["api\\.gap\\.com"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qError = {};
    qError.error_messages = JSON.parse(QuantumMetricAPI.lastXHR.qresponse).error_messages;
    return qError;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "API :: Error Message (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":60,"f":1,"m":1,"s":1,"u":"/checkout","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/commerce_orders\\/graphql"]},{"t":"XFJPar","v":[]}]},"/data/order/summaryOfCharges/merchandiseTotal"]},{"t":"CV","v":[{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/commerce_orders\\/graphql"]},{"t":"XFJPar","v":[]}]},"/data/order/summaryOfCharges/merchandiseTotal"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return window.QuantumMetricAPI.getSessionVar("Shopping Bag :: API").order_summary.currency_code;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Order :: API (currency code): " + qErr);
}}}]}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/commerce_orders\\/graphql"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qOrder = JSON.parse(QuantumMetricAPI.lastXHR.qresponse).data.order;
    qOrder.shoppingBag = QuantumMetricAPI.getSessionVar("Shopping Bag Items");
    QuantumMetricAPI.setSessionVar("Checkout :: Order :: API", qOrder);
    return qOrder;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Order :: API (attributes): " + qErr);
}}}]}]}]}]}},{"f":0,"i":61,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"autosuggest\"] li a,[data-testid=\"autosuggest-item\"],[data-testid=\"department-suggest\"] button,[data-testid=\"autosuggest\"] li a *,[data-testid=\"autosuggest-item\"] *,[data-testid=\"department-suggest\"] button *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qSection = QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid');
    qSection === "tappable-area" ? qSection = "visual-item" : undefined;
    qSection === "tag-link" ? qSection = "department-suggest" : undefined;

    var qClicked = {
        "section": qSection,
        "searchInputText": document?.querySelector('input[name="searchText"]')?.value,
        "aria-label": QuantumMetricAPI.lastClicked.closest('[aria-label]').getAttribute('aria-label')
    };

    !!QuantumMetricAPI?.lastClicked?.closest('.product-card')?.querySelector('.product-card > a')?.innerText ? qClicked.clickedText = QuantumMetricAPI.lastClicked.closest('.product-card').querySelector('.product-card > a').innerText : qClicked.clickedText = QuantumMetricAPI.lastClicked.closest('[aria-label]').innerText;

    QuantumMetricAPI.setSessionVar("Search :: Autosuggest Click", qClicked);
    return qClicked.section;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Autosuggest Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Search :: Autosuggest Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Autosuggest Click (attributes): " + qErr);
}}}]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":62,"f":0,"m":1,"s":2,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/autosuggest"]},{"t":"XFJPar","v":[]}]},"/found",{"t":"Is","v":[0]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = QuantumMetricAPI.lastXHR.qurl;
    var qParams = Object.fromEntries(
        new URL(qURL).searchParams.entries()
    );
    QuantumMetricAPI.setSessionVar("Autosuggest :: No Items Found", qParams);
    if (!!qParams.q){
        return qParams.q;
    } else {return '';}
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Autosuggest :: No Items Found (value): " + qErr);
}}}]},{"t":"VXF","v":[{"t":"XHR","v":["\\/search\\/autosuggest"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Autosuggest :: No Items Found");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Autosuggest :: No Items Found (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":64,"f":0,"m":0,"s":1,"u":"/search\\.do","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":["[data-testid=\"no-product-message\"]"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qSrchPage = {};

    if (!!document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')) {
        var qFilterChips = document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')
        var qFilterArray = [];
        for (var i = 0; i < qFilterChips.length; i++) {
            qFilterArray.push(qFilterChips[i].getAttribute('aria-label').split('Remove ')[1].replace(' filter ', '='));
        }

        var qFilterObj = qFilterArray.reduce((acc, item) => {
            const i = item.indexOf("=");
            if (i === -1) return acc; // skip malformed entries like "foo"
            const key = item.slice(0, i).trim();
            const value = item.slice(i + 1).trim();
            if (!key) return acc;

            (acc[key] ??= []).push(value); // initialize array then push
            return acc;
        }, {});
        qSrchPage.filters = qFilterObj;
    }

    !!document.location.href.match(/sortByField=/) ? qSrchPage.filters.sortByField = window.decodeURIComponent(window.location.href.replace(/.*sortByField\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    !!document.location.href.match(/sortByDir=/) ? qSrchPage.filters.sortByDir = window.decodeURIComponent(window.location.href.replace(/.*sortByDir\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    if (!!document.location.href.match(/storeId=\d/) && !!JSON.parse(localStorage?.bopis)?.selectedStore?.storeId) {
        qSrchPage.filters.bopisEnabled = true;
        var qBopis = JSON.parse(localStorage.bopis);
        qSrchPage.filters.bopisData = {};
        qSrchPage.filters.bopisData.selectedStore = {};
        !!qBopis.postalCode ? qSrchPage.filters.bopisData.bopisPostalCode = qBopis.postalCode : undefined;
        !!qBopis.selectedStore.storeAddress ? qSrchPage.filters.bopisData.selectedStore.storeAddress = qBopis.selectedStore.storeAddress : undefined;
        !!qBopis.selectedStore.storeDistance ? qSrchPage.filters.bopisData.selectedStore.storeDistance = qBopis.selectedStore.storeDistance : undefined;
        !!qBopis.selectedStore.storeId ? qSrchPage.filters.bopisData.selectedStore.storeId = qBopis.selectedStore.storeId : undefined;
        !!qBopis.selectedStore.storeName ? qSrchPage.filters.bopisData.selectedStore.storeName = qBopis.selectedStore.storeName : undefined;
    }

    document?.querySelectorAll('.plp_product-list--grid .plp_product-card')?.length > -1 ? qSrchPage.numberOfItemsDisplayed = document.querySelectorAll('.plp_product-list--grid .plp_product-card').length : undefined;
    if (window?.location?.href?.indexOf('searchText=') >= 0) {
        var qURL = new URL(document.location.href);
        qSrchPage.searchText = qURL.searchParams.get("searchText");
    }
    QuantumMetricAPI.setSessionVar("Search :: Page :: No Items Found", qSrchPage);
    return qSrchPage.searchText;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: No Items Found (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Search :: Page :: No Items Found");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: No Items Found (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":65,"f":0,"m":0,"s":0,"u":".*","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":["[aria-label*=\"no products\"]"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qCatPage = {
        "category": document?.location?.href?.split('?')[0]?.split('browse/')[1]?.replaceAll('/', ' / ').replaceAll('-', ' '),
        "breadcrumbs": document?.querySelector('.plp_breadcrumbs')?.innerText
    };

    if (!!document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')) {
        var qFilterChips = document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')
        var qFilterArray = [];
        for (var i = 0; i < qFilterChips.length; i++) {
            qFilterArray.push(qFilterChips[i].getAttribute('aria-label').split('Remove ')[1].replace(' filter ', '='));
        }

        var qFilterObj = qFilterArray.reduce((acc, item) => {
            const i = item.indexOf("=");
            if (i === -1) return acc; // skip malformed entries like "foo"
            const key = item.slice(0, i).trim();
            const value = item.slice(i + 1).trim();
            if (!key) return acc;

            (acc[key] ??= []).push(value); // initialize array then push
            return acc;
        }, {});
        qCatPage.filters = qFilterObj;
    }

    !!document.location.href.match(/sortByField=/) ? qCatPage.filters.sortByField = window.decodeURIComponent(window.location.href.replace(/.*sortByField\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    !!document.location.href.match(/sortByDir=/) ? qCatPage.filters.sortByDir = window.decodeURIComponent(window.location.href.replace(/.*sortByDir\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    if (!!document.location.href.match(/storeId=\d/) && !!JSON.parse(localStorage?.bopis)?.selectedStore?.storeId) {
        qCatPage.filters.bopisEnabled = true;
        var qBopis = JSON.parse(localStorage.bopis);
        qCatPage.filters.bopisData = {};
        qCatPage.filters.bopisData.selectedStore = {};
        !!qBopis.postalCode ? qCatPage.filters.bopisData.bopisPostalCode = qBopis.postalCode : undefined;
        !!qBopis.selectedStore.storeAddress ? qCatPage.filters.bopisData.selectedStore.storeAddress = qBopis.selectedStore.storeAddress : undefined;
        !!qBopis.selectedStore.storeDistance ? qCatPage.filters.bopisData.selectedStore.storeDistance = qBopis.selectedStore.storeDistance : undefined;
        !!qBopis.selectedStore.storeId ? qCatPage.filters.bopisData.selectedStore.storeId = qBopis.selectedStore.storeId : undefined;
        !!qBopis.selectedStore.storeName ? qCatPage.filters.bopisData.selectedStore.storeName = qBopis.selectedStore.storeName : undefined;
    }

    document?.querySelectorAll('.plp_product-list--grid .plp_product-card')?.length > -1 ? qCatPage.numberOfItemsDisplayed = document.querySelectorAll('.plp_product-list--grid .plp_product-card').length : undefined;

    QuantumMetricAPI.setSessionVar("Category :: Page :: No Items Found", qCatPage);
    return qCatPage.category;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: No Items Found (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try{
    return QuantumMetricAPI.getSessionVar("Category :: Page :: No Items Found");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: No Items Found (attributes): " + qErr);
}}}]}]}},{"f":0,"i":66,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".sw_footer a,.sw_footer a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI?.lastClicked?.closest('a')?.innerText || QuantumMetricAPI?.lastClicked?.closest('img')?.alt;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Footer :: Click (value): " + qErr);
}}}]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":69,"f":0,"m":1,"s":1,"u":"/search\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".plp_product-card,.plp_product-card *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!QuantumMetricAPI?.lastClicked?.closest('.plp_product-card')?.querySelector('.plp_product-info')) {
        var qClick = QuantumMetricAPI.lastClicked.closest('.plp_product-card').querySelector('.plp_product-info');
        var qClickImg = QuantumMetricAPI.lastClicked.closest('.plp_product-card').querySelector('.plp_product-image');
        var qItem = {};

        qClick?.href?.indexOf('pid=') >= 0 ? qItem.pid = window.decodeURIComponent(qClick.href.replace(/.*pid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('pcid=') >= 0 ? qItem.pcid = window.decodeURIComponent(qClick.href.replace(/.*pcid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('cid=') >= 0 ? qItem.cid = window.decodeURIComponent(qClick.href.replace(/.*cid\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        qClick?.href?.indexOf('nav=') >= 0 ? qItem.nav = window.decodeURIComponent(qClick.href.replace(/.*nav\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
        !!qClick?.querySelector('.plp_product-card-name')?.innerText ? qItem.productName = qClick.querySelector('.plp_product-card-name').innerText : undefined;
        !!qClick?.querySelector('[aria-label*="Original price"]') ? qItem.origionalPrice = qClick.querySelector('[aria-label*="Original price"]').getAttribute('aria-label').split(': ')[1] : undefined;
        !!qClick?.querySelector('[aria-label*="Current price"]') ? qItem.currentPrice = qClick.querySelector('[aria-label*="Current price"]').getAttribute('aria-label').split(': ')[1] : undefined;
        !!qClick?.querySelector('.plp_product-card-marketing-flag')?.innerText ? qItem.marketingFlag = qClick.querySelector('.plp_product-card-marketing-flag').innerText : undefined;
        !!qClickImg?.querySelector('.plp_product-image__badge') ? qItem.merchandisingBadge = qClickImg.querySelector('.plp_product-image__badge').innerText : undefined;

        qItem.search = QuantumMetricAPI?.getSessionVar("Page :: Data")?.search;
        qItem.totalItems = QuantumMetricAPI?.getSessionVar("Page :: Data")?.search?.numberOfItemsDisplayed;
        var qCard = QuantumMetricAPI.lastClicked.closest('.plp_product-card');
        var qItems = Array.from(document.querySelectorAll('.plp_product-card'));
        qItem.positionNumber = qItems.indexOf(qCard) + 1;
        qItem.positionDescription = "Clicked card " + qItem.positionNumber + " out of " + qItem.totalItems;

        QuantumMetricAPI.setSessionVar("Search :: Page :: Item Click", qItem);
        return qItem.productName;
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: Item Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Search :: Page :: Item Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: Item Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":true,"i":70,"f":0,"m":1,"s":2,"u":".*","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":["[aria-labelledby=\"fui-modal-undefined\"] iframe"]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qSrc = document?.querySelector('[aria-labelledby="fui-modal-undefined"] iframe')?.src;
    var qModal = {
        "src": qSrc,
        "promoId": qSrc?.split('?promoId=')[1]?.split('&')[0],
        "page": qSrc.split('?')[0].split('/')[qSrc.split('?')[0].split('/').length - 1],
        "locale": qSrc?.split('locale=')[1]?.split('&')[0],
        "title": !!document?.querySelector('[data-testid="iframeModal"]')?.contentDocument?.body?.innerText ? document.querySelector('[data-testid="iframeModal"]').contentDocument.body.innerText.split('\n\n')[0] : undefined
    };
    QuantumMetricAPI.setSessionVar('Undefined Modal :: Impression', qModal);
    return qModal.title;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Dynamic Modal :: Impression (attributes): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar('Undefined Modal :: Impression');
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Dynamic Modal :: Impression (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":71,"f":0,"m":1,"s":1,"u":"/shopping-bag","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"delete-bag-item\"],[data-testid=\"stepper-minus\"],[data-testid=\"stepper-plus\"],[data-testid=\"save-for-later\"],[data-testid=\"change-store-modal\"],[data-testid=\"edit-bag\"],[data-testid=\"move-to-active-bag\"],[data-testid=\"delete-saved-item\"],[data-testid=\"delete-bag-item\"] *,[data-testid=\"stepper-minus\"] *,[data-testid=\"stepper-plus\"] *,[data-testid=\"save-for-later\"] *,[data-testid=\"change-store-modal\"] *,[data-testid=\"edit-bag\"] *,[data-testid=\"move-to-active-bag\"] *,[data-testid=\"delete-saved-item\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid');
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Edit Item (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qCard = QuantumMetricAPI?.lastClicked?.closest('[data-testid*="active-item-"], [data-testid*="saved-item-"]');
    var qItem = {
        "action": QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid'),
        "name": qCard?.querySelector('[data-testid="product-name"]')?.innerText,
        "pid": qCard?.querySelector('[data-testid="product-image"] a, #saved-bag-image a')?.href?.replace(/.*pid\=/g, '')?.replace(/&.*/, ''),
        "size": qCard?.querySelector('[data-testid="product-size"]')?.innerText,
        "color": qCard?.querySelector('[data-testid="product-color"]')?.innerText,
        "origionalPrice": parseFloat(qCard?.querySelector('[data-testid="product-price"] .line-through')?.innerText.replace(/[^0-9,.]/g, "")),
        "currentPrice": parseFloat(qCard?.querySelector('[data-testid="product-price"] span:not(.line-through)')?.innerText.replace(/[^0-9,.]/g, "")),
        "savings": parseFloat(qCard?.querySelector('[data-testid="product-savings"]')?.innerText?.split(' ')[1].replace(/[^0-9,.]/g, "")) || "",
        "fullfillment": qCard?.querySelector('input')?.closest('[data-testid]')?.getAttribute('data-testid')
    };
    return qItem;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Edit Item (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":72,"f":0,"m":1,"s":1,"u":".*","x":"QXJ,QXJ,QXJ","v":{"t":"MAE","v":[1,0,{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/products\\/v2\\/style"]},{"t":"XFJPar","v":[]}]},"/totalProducts"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/products\\/v2\\/style"]},{"t":"XFJPar","v":[]}]},"/totalProducts"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/search\\/products\\/v2\\/style"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = new URL(QuantumMetricAPI.lastXHR.qurl);
    var qREQ = Object.fromEntries(qURL.searchParams.entries());
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qProducts = qRESP.products.map(({
        styleId,
        styleName,
        webProductType
    }) => ({
        styleId,
        styleName,
        webProductType,
    }));
    qRESP.products = qProducts;

    qRESP.categories.forEach(cat => {
        delete cat.ccList;
    });

    if (!!qRESP?.totalColors && parseInt(qRESP.totalColors) > -1) {
        qRESP.totalColors = parseInt(qRESP.totalColors);
    }

    if (!!qRESP?.totalProducts && parseInt(qRESP.totalProducts) > -1) {
        qRESP.totalProducts = parseInt(qRESP.totalProducts);
    }

    var qSearch = {
        "url": qURL.href.split('?')[0],
        "request": qREQ,
        "response": qRESP
    };

    QuantumMetricAPI.setSessionVar("Search :: Products :: API", qSearch);
    return qSearch;

} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Products :: API (attributes #1): " + qErr);
}}}]}]}]}]},{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/products\\/v2\\/cc"]},{"t":"XFJPar","v":[]}]},"/totalColors"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/products\\/v2\\/cc"]},{"t":"XFJPar","v":[]}]},"/totalColors"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/search\\/products\\/v2\\/cc"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = new URL(QuantumMetricAPI.lastXHR.qurl);
    var qREQ = Object.fromEntries(qURL.searchParams.entries());
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qProducts = qRESP.products.map(({
        styleId,
        styleName,
        webProductType
    }) => ({
        styleId,
        styleName,
        webProductType,
    }));
    qRESP.products = qProducts;

    qRESP.categories.forEach(cat => {
        delete cat.ccList;
    });

    if (!!qRESP?.totalColors && parseInt(qRESP.totalColors) > -1) {
        qRESP.totalColors = parseInt(qRESP.totalColors);
    }

    if (!!qRESP?.totalProducts && parseInt(qRESP.totalProducts) > -1) {
        qRESP.totalProducts = parseInt(qRESP.totalProducts);
    }

    var qSearch = {
        "url": qURL.href.split('?')[0],
        "request": qREQ,
        "response": qRESP
    };

    QuantumMetricAPI.setSessionVar("Search :: Products :: API", qSearch);
    return qSearch;

} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Products :: API (attributes #2): " + qErr);
}}}]}]}]}]},{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/v2\\/product_listings"]},{"t":"XFJPar","v":[]}]},"/totalProducts"]},{"t":"ObjSearchValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/search\\/v2\\/product_listings"]},{"t":"XFJPar","v":[]}]},"/totalProducts"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/search\\/v2\\/product_listings"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qURL = new URL(QuantumMetricAPI.lastXHR.qurl);
    var qREQ = Object.fromEntries(qURL.searchParams.entries());
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
    var qProducts = qRESP.products.map(({
        id,
        name,
        webProductType
    }) => ({
        id,
        name,
        webProductType,
    }));
    qRESP.products = qProducts;

    if (!!qRESP.categories) {
        qRESP.categories.forEach(cat => {
            delete cat.ccList;
        });
    }

    if (!!qRESP?.totalColors && parseInt(qRESP.totalColors) > -1) {
        qRESP.totalColors = parseInt(qRESP.totalColors);
    }

    if (!!qRESP?.totalProducts && parseInt(qRESP.totalProducts) > -1) {
        qRESP.totalProducts = parseInt(qRESP.totalProducts);
    }

    var qSearch = {
        "url": qURL.href.split('?')[0],
        "request": qREQ,
        "response": qRESP
    };

    QuantumMetricAPI.setSessionVar("Search :: Products :: API", qSearch);
    return qSearch;

} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Products :: API (attributes #3): " + qErr);
}}}]}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":73,"f":0,"m":1,"s":1,"u":"\\/shopping-bag|\\/checkout","x":"QXJ,QXJ","v":{"t":"MAE","v":[1,0,{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/promotions"]},{"t":"XFJPar","v":[]}]},"/promotions/promotion_notifications/0/error_code"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/promotions"]},{"t":"XFJPar","v":[]}]},"/promotions/promotion_notifications/0/promo_code"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/promotions"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qAttr = JSON.parse(QuantumMetricAPI.lastXHR.qresponse).promotions.promotion_notifications[0];
    qAttr.pageType = window.gap.pageType;
    return qAttr;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Promo Code :: Invalid (attributes #1): " + qErr);
}}}]}]}]}]},{"t":"MDE","v":[{"t":"ObjSearch","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/promotions"]},{"t":"XFJPar","v":[]}]},"/error_messages/0/message"]},{"t":"ObjSearchValue","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/promotions"]},{"t":"XFJPar","v":[]}]},"/promo_codes/0"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/promotions"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qREQ = {};
    qREQ.promo_codes = JSON.parse(QuantumMetricAPI.lastXHR.qrequest).promo_codes[0];
    var qRESP = JSON.parse(QuantumMetricAPI.lastXHR.qresponse).error_messages[0];
    var qMessageObj = JSON.parse(qRESP.message.replaceAll('\\', '').split('  ')[1]);
    qRESP.messageDetails = qMessageObj;

    var qAttr = {};
    qAttr = {
        ...qREQ,
        ...qRESP
    };
    console.log("qAttr", qAttr);
    qAttr.promo_code = qAttr.messageDetails.code;
    qAttr.error_code = qAttr.messageDetails.errorCode;
    qAttr.message = qAttr.error_details[0].message;
    qAttr.pageType = window.gap.pageType;
  
    return qAttr;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Promo Code :: Invalid (attributes #2): " + qErr);
}}}]}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":74,"f":0,"m":1,"s":1,"u":"/checkout","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"KeyValue","v":["value","[data-testid=\"brand-logo-gap\"],[data-testid=\"brand-logo-on\"],[data-testid=\"brand-logo-br\"],[data-testid=\"brand-logo-at\"]"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qClk = QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid');
    if (qClk.indexOf('-on') > 0) {
        return "Old Navy";
    } else if (qClk.indexOf('-gap') > 0) {
        return "Gap";
    } else if (qClk.indexOf('-br') > 0) {
        return "Banana Republic";
    } else if (qClk.indexOf('-at') > 0) {
        return "Athleta";
    }
} catch (err) {
    QuantumMetricAPI.sendEvent(671, 0, "Checkout :: Header :: Sister Brand Click (attributes)" + err);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":75,"f":0,"m":0,"s":1,"u":"/GeneralNoResults\\.do","x":"QHE","v":{"t":"HE","v":[]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":76,"f":0,"m":1,"s":1,"u":"\\/shopping-bag|\\/checkout","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_bags\\/v1.*\\/rewards"]},{"t":"XFJPar","v":[]}]},"/reward_details/loyalty_event_type"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRRequest","v":["\\/ui_composite_bags\\/v1.*\\/rewards"]},{"t":"XFJPar","v":[]}]},"/reward_details/loyalty_event_type"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/ui_composite_bags\\/v1.*\\/rewards"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qRewards = JSON.parse(QuantumMetricAPI?.lastXHR?.qrequest)?.reward_details;
    qRewards.rewards = JSON.parse(QuantumMetricAPI?.lastXHR?.qresponse)?.rewards;
    QuantumMetricAPI.setSessionVar("Rewards :: API", qRewards);
    return qRewards;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Rewards :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":77,"f":0,"m":0,"s":1,"u":"/product\\.do","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/writereview"]},{"t":"XFJPar","v":[]}]},"/status_code",{"t":"Is","v":["200"]}]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["\\/writereview"]},{"t":"XFJPar","v":[]}]},"/context_information/product_id"]},{"t":"VXF","v":[{"t":"XHR","v":["\\/writereview"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return JSON.parse(QuantumMetricAPI.lastXHR.qresponse);
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Review :: Write :: API (attributes): " + qErr);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":78,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".topNavLink,.catnav--header--content,.catnav--item--link,.sw_ham-nav__list-item-btn,.hamnav-item-list button[aria-expanded=\"false\"],.sw_ham-nav__list-item--category-v2 a,.topNavLink *,.catnav--header--content *,.catnav--item--link *,.sw_ham-nav__list-item-btn *,.hamnav-item-list button[aria-expanded=\"false\"] *,.sw_ham-nav__list-item--category-v2 a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qClick = QuantumMetricAPI.lastClicked;
    var qMenu = {};
    qMenu.topNav = "";
    qMenu.category = "";
    qMenu.item = "";

    // Top Nav click
    if (!!qClick?.getAttribute('data-divisionname')) { // Desktop
        qMenu.topNav = qClick.getAttribute('data-divisionname');
    } else if (!!qClick?.closest('button')?.innerText) { // Mobile
        qMenu.topNav = qClick.closest('button').innerText;
    }

    // Category click
    if (!!qClick?.closest('[data-testid*="section"]')?.querySelector('button')?.innerText) { // Mobile
        qMenu.category = qClick.closest('[data-testid*="section"]').querySelector('button')?.innerText;
        qMenu.topNav = qClick.closest('#hamnavScrollHolder').querySelector('#hamburger-nav-title').innerText
    } else if (!!qClick?.className?.toString()?.match(/catnav--header--content/) && !!qClick?.getAttribute('aria-label') && !!qClick?.href) { // Desktop
        qMenu.category = qClick.getAttribute('aria-label');
        qMenu.topNav = qClick.closest('.topNavLink').querySelector('[data-divisionname]').getAttribute('data-divisionname');
    }

    // Item Click
    if (!!qClick?.href && !!qClick?.innerText && !!qClick.closest('.hamnav-item-list')) { // Mobile
        qMenu.item = qClick.innerText;
        qMenu.category = qClick.closest('[id*="-panel"]').querySelector('button').title;
        qMenu.topNav = qClick.closest('#hamnavScrollHolder').querySelector('#hamburger-nav-title').innerText;
    } else if (!!qClick?.closest('a.catnav--item--link')?.textContent) {
        qMenu.topNav = qClick.closest('.topNavLink').querySelector('[data-divisionname]').getAttribute('data-divisionname');
        qMenu.category = qClick.closest('.catnav--header').querySelector('.catnav--header--content').getAttribute('aria-label');
        qMenu.item = qClick.closest('a.catnav--item--link').textContent;
    }

    qMenu.value = qMenu.topNav + ":" + qMenu.category + ":" + qMenu.item;
    QuantumMetricAPI.setSessionVar("Menu :: Click", qMenu);
    return qMenu.value;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Menu :: Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Menu :: Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Menu :: Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":80,"f":0,"m":1,"s":1,"u":"^(?!.*(\\.do)).*\\/browse\\/.*$","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"plp-category-banner-container\"] a,[data-testid=\"plp-category-banner-container\"] a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return window.QuantumMetricAPI?.lastClicked?.closest('a')?.innerText;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Banner Card Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qClick = window.QuantumMetricAPI?.lastClicked?.closest('.slick-slide');
    var qCard = {
        "title": qClick?.innerText,
        "totalNumberCards": document?.querySelectorAll('[data-testid="plp-category-banner-container"] a, .product-cards-carousel .slick-slide').length,
        "cardPosition": parseInt(qClick?.closest('[data-index]')?.getAttribute('data-index')) + 1,
        "href": qClick?.querySelector('a')?.href,
        "category": QuantumMetricAPI?.getSessionVar("Page :: Data")?.category
    }
    qCard.cardPositionDesc = "Clicked card " + qCard.cardPosition + " out of " + qCard.totalNumberCards;
    return qCard;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Banner Card Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":true,"excludeBlank":false,"i":81,"f":1,"m":0,"s":1,"u":"\\/thankyou\\/.*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return !!window?.QuantumMetricAPI?.getSessionVar("Shopping Bag")?.order_summary?.estimated_total;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Order Confirmation (trigger): " + qErr);
}}}]},{"t":"CV","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    return window.QuantumMetricAPI.getSessionVar("Shopping Bag").order_summary.estimated_total.toFixed(2);
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Order Confirmation (value): " + qErr);
}}}]}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qOrder = window.QuantumMetricAPI.getSessionVar("Shopping Bag");
    qOrder.orderNumber = document.location.href.match(/thankyou\/([^/?]+)/)?.[1];
    window.QuantumMetricAPI.setSessionVar("Checkout :: Order Confirmation", qOrder);
    window.QuantumMetricAPI.setSessionVar("Shopping Bag :: API", undefined);
    window.QuantumMetricAPI.setSessionVar("Shopping Bag :: Page", undefined);
    window.QuantumMetricAPI.setSessionVar("Shopping Bag", undefined);
    return qOrder;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Order Confirmation (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":false,"i":85,"f":64,"m":0,"s":1,"u":"/shopping-bag","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValueEx","v":[{"fn":function () {return (!!document.querySelector('[data-testid*="active-item"]') || !!document.querySelector('[data-testid*="oos-item"]')) && !document.querySelector('[data-testid="empty-bag"]');}}]},{"t":"CV","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qSBag = QuantumMetricAPI.getSessionVar("Shopping Bag");
    if (!!qSBag) {
        QuantumMetricAPI.setSessionVar("Shopping Bag :: Page", qSBag);
        return qSBag.order_summary.estimated_total;
    } else {
        var qBag = {};

        qBag.order_summary = {
            base_total: parseFloat(
                (document?.querySelector('[data-testid="subtotal-value"]')?.innerText ?? '')
                .replace(/[^0-9,.]/g, '')
            ),
            estimated_total: parseFloat(
                (document?.querySelector('[data-testid="est-total-value"]')?.innerText ?? '')
                .replace(/[^0-9,.]/g, '')
            ),
            estimated_tax: (() => {
                const txt = document?.querySelector('[data-testid="estTax-value"]')?.innerText ?? '';
                return txt.replace(/[^0-9,.]/g, '') ? parseFloat(txt.replace(/[^0-9,.]/g, '')) : undefined;
            })(),
        };

        qBag.order_summary.savings_summary = {
            savings: parseFloat(
                (document?.querySelector('[data-testid="savings-value"]')?.innerText ?? '')
                .replace(/[^0-9,.]/g, '') || 0
            ),
            reward_savings: (() => {
                const txt = document?.querySelector('[data-testid="rewards-value"]')?.innerText ?? '';
                return txt.replace(/[^0-9,.]/g, '') ? parseFloat(txt.replace(/[^0-9,.]/g, '')) : 0;
            })()
        }

        // Better check for "FREE" (compare the actual text, not boolean-coerced value)
        const shippingText = document?.querySelector('[data-testid="shipping-value"]')?.innerText?.trim() ?? '';
        if (shippingText.toUpperCase() === "FREE") {
            qBag.order_summary.retail_delivery_fee = 0;
        } else if (shippingText.replace(/[^0-9,.]/g, '')) {
            qBag.order_summary.retail_delivery_fee = parseFloat(shippingText.replace(/[^0-9,.]/g, ''));
        } else {
            qBag.order_summary.retail_delivery_fee = undefined;
        }

        qBag.items = [];
        var qItems = document.querySelectorAll('[data-testid*="active-item"]') ?? [];

        for (var i = 0; i < qItems.length; i++) {
            var qItem = {};
            // quantity should come from the active items list, not the oos list
            const qtyText = qItems[i]?.querySelector('[data-testid="product-quantity"]')?.innerText ?? '';
            qItem.quantity = qtyText ? parseInt(qtyText, 10) : undefined;

            qItem.product = {};
            qItem.product.name = qItems[i]?.querySelector('[data-testid="product-name"]')?.innerText ?? '';
            // guard for missing anchor or href
            const productAnchor = qItems[i]?.querySelector('[data-testid="product-name"] a');
            qItem.product.sku = productAnchor?.href ? new URL(productAnchor.href).searchParams.get('pid') : '';
            qItem.product.size = qItems[i]?.querySelector('[data-testid="product-size"]')?.innerText ?? '';
            qItem.product.color = qItems[i]?.querySelector('[data-testid="product-color"]')?.innerText ?? '';

            qItem.price = {};
            if (!!qItems[i]?.querySelector('[data-testid="product-price"] span.line-through[class*="text"]')) {
                qItem.price.regular_price = parseFloat(
                    (qItems[i]?.querySelector('[data-testid="product-price"] span.line-through')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
                qItem.price.sale_price = parseFloat(
                    (qItems[i]?.querySelector('[data-testid="product-price"] span[class*="textColor-error"]:not(.line-through)')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
            } else {
                qItem.price.regular_price = parseFloat(
                    (qItems[i]?.querySelector('[data-testid="product-price"] span:not(.line-through)')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
            }

            qItem.savings = {};
            if (qItem?.price?.regular_price > qItem?.price?.sale_price) {
                qItem.savings.markdown_savings = Math.round((qItem.price.regular_price - qItem.price.sale_price) * 100) / 100;
            } else {
                qItem.savings.markdown_savings = 0;
            }

            qBag.items.push(qItem);
        }

        qBag.out_of_stock_items = [];
        var qOosItems = document.querySelectorAll('[data-testid*="oos-item"]') ?? [];

        for (var j = 0; j < qOosItems.length; j++) {
            var qOosItem = {};
            // selectors used in original — keep them but guard with ?? ''
            const oosAnchor = qOosItems[j]?.querySelector('[data-testid="oos-item-0"] a:not([target])');
            qOosItem.name = oosAnchor?.innerText ?? '';
            qOosItem.sku = oosAnchor?.href ? new URL(oosAnchor.href).searchParams.get('pid') : undefined;
            qOosItem.attributes = qOosItems[j]?.querySelector('[data-testid="oos-item-0"] #oos-product-attributes span.capitalize')?.innerText ?? '';
            qOosItem.price = {};
            if (qOosItems[j]?.querySelector('#oos-product-price span.line-through')) {
                qOosItem.price.regular_price = parseFloat(
                    (qOosItems[j]?.querySelector('#oos-product-price span.line-through')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
                qOosItem.price.sale_price = parseFloat(
                    (qOosItems[j]?.querySelector('#oos-product-price span:not(.line-through)')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
            } else {
                qOosItem.price.regular_price = parseFloat(
                    (qOosItems[j]?.querySelector('#oos-product-price span:not(.line-through)')?.innerText ?? '')
                    .replace(/[^0-9,.]/g, '')
                );
            }

            qOosItem.savings = {};
            if (qOosItem?.price?.regular_price > qOosItem?.price?.sale_price) {
                qOosItem.savings.markdown_savings = Math.round((qOosItem.price.regular_price - qOosItem.price.sale_price) * 100) / 100;
            } else {
                qOosItem.savings.markdown_savings = 0;
            }

            qBag.out_of_stock_items.push(qOosItem);
        }

        if (!QuantumMetricAPI.getSessionVar("Shopping Bag")) {
            QuantumMetricAPI.setSessionVar("Shopping Bag", qBag);
        }
        QuantumMetricAPI.setSessionVar("Shopping Bag :: Page", qBag);
        return qBag.order_summary.estimated_total;
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Page (value): " + qErr);
}}}]}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Shopping Bag :: Page");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Page (attibutes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":86,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".sw_sister-brand-links__container a,.sw_sister-brand-links__container a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return window?.QuantumMetricAPI?.lastClicked?.closest('a')?.getAttribute('aria-label');
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Header :: Sister Brand Click (trigger): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":87,"f":131072,"m":0,"s":0,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"ObjPath","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["/personalization/"]},{"t":"XFJPar","v":[]}]},"/personalizationInfoV1/customerUUID"]},{"t":"ObjPathValue","v":[{"t":"VXF","v":[{"t":"XHRResponse","v":["/personalization/"]},{"t":"XFJPar","v":[]}]},"/personalizationInfoV1/customerUUID"]},{"t":"VXF","v":[{"t":"XHR","v":["/personalization/"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {return {};}}]}]}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":88,"f":6,"m":0,"s":0,"u":"/sign-in","x":"QFL","v":{"t":"E","v":[{"t":"FieldFilledNode","v":["#verify-email-input"]},{"t":"SelectorText","v":["#verify-email-input,[data-testid=\"entered-email\"]"]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":89,"f":0,"m":0,"s":1,"u":"^(?!.*(\\.do)).*\\/browse\\/.*$","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"ism-content\"] a,[data-testid=\"ism-content\"] a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qClick = QuantumMetricAPI.lastClicked.closest('[data-testid="ism-content"] a');
    var qCard = {
        "href": qClick?.closest('a')?.href,
        "text": qClick?.closest('[data-testid="ism-content"]')?.innerText.replaceAll('\n\n', ' ').replaceAll('\n', ' ') || undefined,
        "button": qClick?.closest('a')?.innerText || undefined,
        "type": !!qClick?.closest('[data-testid="ism-content"]')?.querySelector('[data-testid="videocomponent-container"]') ? "video" : "image"
    };
    QuantumMetricAPI.setSessionVar("Category :: Page :: Promocard Click", qCard);
    return qCard?.text;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Promocard Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("PLP - Promocard Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: Promocard Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":90,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".pdp-photo-brick-image img,button[aria-label*=\"Zoom\"],img[data-testid*=\"pdp-zoom-modal-main-image\"],[data-testid*=\"pdp-zoom-modal-main-image\"] img,button[data-testid*=\"pdp-zoom-modal-image-thumbnail\"],.fds_modal__content button[aria-label*=\"Click to close\"],.pdp-photo-brick-image img *,button[aria-label*=\"Zoom\"] *,img[data-testid*=\"pdp-zoom-modal-main-image\"] *,[data-testid*=\"pdp-zoom-modal-main-image\"] img *,button[data-testid*=\"pdp-zoom-modal-image-thumbnail\"] *,.fds_modal__content button[aria-label*=\"Click to close\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qProd = {};
    qProd.product = QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
    qProd['data-testid'] = QuantumMetricAPI?.lastClicked?.closest('[data-testid]')?.getAttribute('data-testid');
    qProd.alt = QuantumMetricAPI?.lastClicked?.closest('[alt]')?.getAttribute('alt') || QuantumMetricAPI?.lastClicked?.querySelector('[alt]')?.getAttribute('alt')
    qProd['aria-label'] = QuantumMetricAPI?.lastClicked?.closest('[aria-label]')?.getAttribute('aria-label');

    QuantumMetricAPI.setSessionVar("Product :: Page :: Image Click", qProd);
    return qProd['data-testid'];
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Image Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Product :: Page :: Image Click");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Image Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":91,"f":0,"m":1,"s":1,"u":"/search\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".plp_product-list--view-more button,.plp_product-list--view-more button *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.search?.searchTerm;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: Load More Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.search;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Search :: Page :: Load More Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":92,"f":0,"m":0,"s":1,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["#onetrust-banner-sdk:not([style*=\"none\"]):not([style*=\"hidden\"])"]},{"t":"V","v":[""]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":93,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["#onetrust-banner-sdk a,.ot-sdk-show-settings,#onetrust-banner-sdk .ot-close-icon,#onetrust-banner-sdk a *,.ot-sdk-show-settings *,#onetrust-banner-sdk .ot-close-icon *"]}]},{"t":"JSValueEx","v":[{"fn":function () {return QuantumMetricAPI.lastClicked.tagName === "BUTTON" ? QuantumMetricAPI.lastClicked.getAttribute('aria-label') : QuantumMetricAPI.lastClicked.innerText;}}]}]}},{"sessionInfoReq":false,"evalAlways":true,"excludeBlank":false,"i":94,"f":0,"m":0,"s":1,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["#onetrust-pc-sdk:not(.ot-hide)"]},{"t":"V","v":[""]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":95,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".save-preference-btn-handler,.save-preference-btn-handler *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    var qButton = QuantumMetricAPI.lastClicked.innerText || QuantumMetricAPI.lastClicked.getAttribute('aria-label');
    if (qButton === "Submit" && document?.querySelector('.category-switch-handler')?.checked === false) {
        var qOptInOut = {
            "opt-out": true,
            "opt-in": false,
            "button": qButton
        };
        QuantumMetricAPI.setSessionVar("OneTrust :: Opt-In / Opt-Out", qOptInOut);
        return "opt-out";
    } else if (qButton === "Submit" && document?.querySelector('.category-switch-handler')?.checked === true) {
        var qOptInOut = {
            "opt-out": false,
            "opt-in": true,
            "button": qButton
        };
        QuantumMetricAPI.setSessionVar("OneTrust :: Opt-In / Opt-Out", qOptInOut);
        return "opt-in";
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "OneTrust :: Privacy Preference :: Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("OneTrust :: Opt-In / Opt-Out");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "OneTrust :: Privacy Preference :: Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":96,"f":0,"m":1,"s":1,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["input[name=\"searchText\"],input#search-input,input[aria-label=\"search\"],input[name=\"searchText\"] *,input#search-input *,input[aria-label=\"search\"] *"]}]},{"t":"V","v":[""]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":97,"f":0,"m":1,"s":1,"u":"/product\\.do","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".pdp-color-picker-swatch-container [data-testid=\"swatch-inner\"],.pdp-color-picker-swatch-container [data-testid=\"swatch-inner\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    if (!!QuantumMetricAPI?.lastClicked?.closest('.fds_selector-swatch__input-container')?.querySelector('input')?.id?.match(/-merge|-mark|-reg/)) {
        var qSwatches = {};
        var qNumber = QuantumMetricAPI.lastClicked.closest('.fds_selector-swatch__input-container')?.querySelector('[data-testid="swatch-inner"]')?.style?.backgroundImage.split('/cn')[1]?.split('.')[0];
        var qColor = QuantumMetricAPI.lastClicked.closest('.fds_selector-swatch__input-container').querySelector('input').id.split('--')[1].split(/-merge|-mark|-reg/)[0]?.replaceAll('-', ' ')?.toLowerCase();
        if (qColor) {
            qColor = qColor.charAt(0).toUpperCase() + qColor.slice(1);
        }
        if (!QuantumMetricAPI?.getSessionVar("Product :: Page :: Color Swatch Data")) {
            qSwatches.swatches_clicked_total = 1;
            qSwatches.swatch_colors = [qColor];
            qSwatches.swatch_numbers = [qNumber];
            QuantumMetricAPI.setSessionVar("Product :: Page :: Color Swatch Data", qSwatches);
            return qColor;
        } else {
            qSwatches = QuantumMetricAPI?.getSessionVar("Product :: Page :: Color Swatch Data");
            qSwatches.swatches_clicked_total = qSwatches.swatches_clicked_total + 1;
            if (!qSwatches.swatch_colors.includes(qColor)) {
                qSwatches.swatch_colors.push(qColor);
            }
            if (!qSwatches.swatch_numbers.includes(qNumber)) {
                qSwatches.swatch_numbers.push(qNumber);
            }
            QuantumMetricAPI.setSessionVar("Product :: Page :: Color Swatch Data", qSwatches);
            return qColor;
        }
    } else {
        return "";
    }
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Color Swatch Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.product;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Product :: Page :: Color Swatch Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":98,"f":0,"m":0,"s":1,"u":"\\/product\\.do","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {}}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":99,"f":131072,"m":0,"s":2,"u":".*","x":"QCK","v":{"t":"E","v":[{"t":"CookiePresent","v":["cam"]},{"t":"CookieValue","v":["cam"]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":100,"f":131072,"m":0,"s":0,"u":".*","x":"QCK","v":{"t":"E","v":[{"t":"CookiePresent","v":["unknownShopperId"]},{"t":"CookieValue","v":["unknownShopperId"]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":102,"f":0,"m":1,"s":1,"u":"^(?!.*(\\.do)).*\\/browse\\/.*$","x":"QCE","v":{"t":"MDE","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-testid=\"drawer-results-cta-button\"],[data-testid=\"drawer-results-cta-button\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_name;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: See Filtered Results Click (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    var qCatPage = {
        "category": document?.location?.href?.split('?')[0]?.split('browse/')[1]?.replaceAll('/', ' / ').replaceAll('-', ' '),
        "breadcrumbs": document?.querySelector('.plp_breadcrumbs')?.innerText
    };

    if (!!document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')) {
        var qFilterChips = document.querySelectorAll('.plp_chips-and-clear-all button[aria-label]')
        var qFilterArray = [];
        for (var i = 0; i < qFilterChips.length; i++) {
            qFilterArray.push(qFilterChips[i].getAttribute('aria-label').split(/Remove |Eliminar filtro de /)[1].replace(' filter ', '='));
        }

        var qFilterObj = qFilterArray.reduce((acc, item) => {
            const i = item.indexOf("=");
            if (i === -1) return acc; // skip malformed entries like "foo"
            const key = item.slice(0, i).trim();
            const value = item.slice(i + 1).trim();
            if (!key) return acc;

            (acc[key] ??= []).push(value); // initialize array then push
            return acc;
        }, {});
        qCatPage.filters = qFilterObj;
    }

    !!document.location.href.match(/sortByField=/) ? qCatPage.filters.sortByField = window.decodeURIComponent(window.location.href.replace(/.*sortByField\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    !!document.location.href.match(/sortByDir=/) ? qCatPage.filters.sortByDir = window.decodeURIComponent(window.location.href.replace(/.*sortByDir\=/g, '').replace(/&.*/, '')).replaceAll('+', ' ') : undefined;
    if (!!document.location.href.match(/storeId=\d/) && !!JSON.parse(localStorage?.bopis)?.selectedStore?.storeId) {
        qCatPage.filters.bopisEnabled = true;
        var qBopis = JSON.parse(localStorage.bopis);
        qCatPage.filters.bopisData = {};
        qCatPage.filters.bopisData.selectedStore = {};
        !!qBopis.postalCode ? qCatPage.filters.bopisData.bopisPostalCode = qBopis.postalCode : undefined;
        !!qBopis.selectedStore.storeAddress ? qCatPage.filters.bopisData.selectedStore.storeAddress = qBopis.selectedStore.storeAddress : undefined;
        !!qBopis.selectedStore.storeDistance ? qCatPage.filters.bopisData.selectedStore.storeDistance = qBopis.selectedStore.storeDistance : undefined;
        !!qBopis.selectedStore.storeId ? qCatPage.filters.bopisData.selectedStore.storeId = qBopis.selectedStore.storeId : undefined;
        !!qBopis.selectedStore.storeName ? qCatPage.filters.bopisData.selectedStore.storeName = qBopis.selectedStore.storeName : undefined;
    }

    document?.querySelectorAll('.plp_product-list--grid .plp_product-card')?.length > -1 ? qCatPage.numberOfItemsDisplayed = document.querySelectorAll('.plp_product-list--grid .plp_product-card').length : undefined;

    qCatPage.page_name = QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_name;
    return qCatPage;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Category :: Page :: See Filtered Results Click (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":103,"f":0,"m":0,"s":1,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["[aria-label*=\"technical problem\"]"]},{"t":"SelectorText","v":["[aria-label*=\"technical problem\"]"]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":104,"f":0,"m":1,"s":1,"u":"/checkout","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["button[data-testid*=\"add-\"],button[data-testid*=\"add-\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return QuantumMetricAPI.lastClicked.closest('[data-testid]').getAttribute('data-testid');
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Checkout :: Add Link Click (value): " + qErr);
}}}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":105,"f":0,"m":1,"s":2,"u":".*","x":"QXJ","v":{"t":"MDE","v":[{"t":"XHRRequestHeader","v":["gap.com\\/|oldnavy.com\\/|banarepublic.com\\/|athleta.com\\/","traceparent"]},{"t":"XHRRequestHeaderValue","v":["gap.com\\/|oldnavy.com\\/|banarepublic.com\\/|athleta.com\\/","traceparent"]},{"t":"VXF","v":[{"t":"XHR","v":["gap.com\\/|oldnavy.com\\/|banarepublic.com\\/|athleta.com\\/"]},{"t":"XFPK","v":[["qurl","url"],["qstatus","statusCode"]]},{"t":"XFMG","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
    var qReqHeaders = QuantumMetricAPI?.lastXHR?.qreqheaders;
    var headersObj = {};

    qReqHeaders
        .split(/\r?\n/)
        .forEach(function(line) {
            if (!line.trim()) return;

            var index = line.indexOf(":");
            if (index === -1) return;

            var key = line.slice(0, index).trim();
            var value = line.slice(index + 1).trim();

            headersObj[key] = value;
        });
    var qHeaders = {
        "traceparent": headersObj?.traceparent,
        "traceid": headersObj?.traceparent?.split('-')[1],
        "spanid": headersObj?.traceparent?.split('-')[2],
        "tracestate": headersObj?.tracestate,
        "X-NewRelic-ID": headersObj['X-NewRelic-ID'],
        "url": QuantumMetricAPI?.lastXHR?.qurl,
        "statusCode": QuantumMetricAPI?.lastXHR?.qstatus
    };

    return qHeaders;
} catch (err) {
    QuantumMetricAPI.sendEvent(671, 0, "New Relic :: Trace Parent ID (attributes)" + err);
}}}]}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":106,"f":0,"m":0,"s":1,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".fixed-h-holder a[title],.fixed-h-holder a[title] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {return QuantumMetricAPI?.lastClicked?.closest('[title]')?.title;}}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":107,"f":0,"m":0,"s":0,"u":".*","x":"QCE","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":[".ot-close-icon,.ot-close-icon *"]}]},{"t":"V","v":[""]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":109,"f":0,"m":0,"s":0,"u":"/checkout","x":"QHE","v":{"t":"HE","v":[]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":false,"i":110,"f":0,"m":0,"s":1,"u":".*","x":"QJS","v":{"t":"MDE","v":[{"t":"JSValue","v":[{"fn":function () {try {
    return !!QuantumMetricAPI?.getSessionVar("Previous Page :: Data")?.page_type?.match(/product|other_page_types/);  
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Previous Page :: Data (trigger): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Previous Page :: Data").page_type;  
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Previous Page :: Data (value): " + qErr);
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
    return QuantumMetricAPI.getSessionVar("Previous Page :: Data");
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Previous Page :: Data (attributes): " + qErr);
}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":111,"f":0,"m":0,"s":1,"u":".*","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":function () {return false;}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":113,"f":0,"m":0,"s":0,"u":".*","x":"QCC","v":{"t":"MDE","v":[{"t":"SelectorPresent","v":["#shopping-bag-error-fallback h1"]},{"t":"SelectorText","v":["#shopping-bag-error-fallback h1"]},{"t":"JSValue","v":[{"fn":function () {try {
    var qData = {
        "shoppingBag": window.QuantumMetricAPI.getSessionVar("Shopping Bag"),
        "errorTitle": document?.querySelector('#shopping-bag-error-fallback h1')?.innerText,
        "errorMessage": document?.querySelector('#shopping-bag-error-fallback [class*="text"]')?.innerText.replaceAll('\n\n', ' ').replaceAll('\n', ' ')
    };
    return qData;
} catch (qErr) {
    QuantumMetricAPI.sendEvent(2, 0, "Shopping Bag :: Oh no! We hit a snag (value): " + qErr);
}}}]}]}}]},"eventNameMap":{"1":"Console Error","2":"QM JS Error","3":"Product :: Page :: Size Guide Click","5":"pdp_accordion_click","6":"Product :: Page :: Find Mine Click","7":"Recommendations :: Product Click","8":"Product :: Page :: Filter Reviews Click","9":"Product :: Page :: Smart Crosslink Click","10":"Product :: Page :: View Ratings Click","11":"Product :: Page :: Low Stock Message","12":"Alert Message","13":"Attentive :: API","15":"Product :: Page :: Sold Out","17":"Page :: Data","20":"Granify :: Close Click","21":"Granify :: CTA Click","23":"Internal Sever Error Page","24":"Optimizely :: Campaigns & Variations","25":"Error Message","26":"Recommendations :: Data Layer","27":"Modal :: Impression","29":"Personalization :: User :: Data","30":"Add to Bag :: API","31":"Shopping Bag :: API","32":"Checkout :: API","33":"Card Savings :: API","34":"Promotions :: API","35":"Shipping Methods :: API","36":"Loyalty Customer Benefits :: API","38":"Granify :: API","39":"Address Verification :: API","40":"Page_Not_Found","41":"Product :: Page :: Add to Bag Click","42":"Dynamic Modal :: Impression","43":"Recommendations :: API","44":"Find Mine :: API","45":"Shopping Bag :: Empty","46":"initiate_checkout","49":"Chat :: Event :: API","50":"Promo Drawer :: Open Click","51":"Promo Drawer :: Close Click","52":"Promo Drawer :: Item Click","53":"Medallia :: Event","54":"Medallia :: Form Data API","56":"Category :: Page :: Item Click","57":"Product :: Page :: Fulfillment Click","58":"Checkout :: CTA Click","59":"API :: Error","60":"Checkout :: Order :: API","61":"Search :: Autosuggest :: Item Click","62":"Autosuggest :: No Items Found","64":"Search :: Page :: No Items Found","65":"Category :: Page :: No Items Found","66":"Footer :: Click","69":"Search :: Page :: Item Click","70":"Undefined Modal :: Impression","71":"Shopping Bag :: Edit Item","72":"Search :: Products :: API","73":"Promo Code :: Invalid","74":"Checkout :: Header :: Sister Brand Click","75":"Search :: General No Results","76":"Rewards :: API","77":"Reviews :: Write :: API","78":"Menu :: Click","80":"Category :: Page :: Category Card Click","81":"Checkout :: Order Confirmation","85":"Shopping Bag :: Page","86":"Header :: Sister Brand Click","87":"Customer UUID","88":"Customer Email","89":"Category :: Page :: Promocard Click","90":"Product :: Page :: Image :: Interaction","91":"Search :: Page :: Load More Click","92":"OneTrust :: Consent Banner :: Displayed","93":"OneTrust :: Consent Banner :: Click","94":"OneTrust :: Privacy Preferences :: Page","95":"oneTrust_optInOut_submit","96":"search_bar_click","97":"Product :: Page :: Color Swatch Click","98":"Page :: Exit Data","99":"CAM ID","100":"Unknown Shopper ID","102":"Category :: Page :: See Filtered Results Click","103":"Technical Error","104":"Checkout :: Add Link Click","105":"New Relic :: Trace Parent ID","106":"Old Navy Banner Click","107":"OneTrust :: Close Click","109":"Checkout :: Entered","110":"Previous Page :: Data","111":"pdp_reco_carousel_impression","113":"Shopping Bag :: Oh no! We hit a snag","-88":"Survey Suppressed","-87":"Survey Submitted","-86":"Survey Closed","-85":"Survey Answer","-84":"Survey Started","-83":"Survey Dismissed","-82":"Survey Shown","-81":"AI Detected","-80":"NPS","-68":"Storage Quota Warning","-67":"HTTP1.1 resource","-66":"Felix AI Summary Triggered","-65":"CSP Violation","-64":"Rage Scroll","-63":"Slow Image Load","-62":"Failed Image Load","-61":"UTM Campaign ID","-60":"UTM Content","-59":"UTM Term","-58":"UTM Campaign","-57":"UTM Medium","-56":"UTM Source","-55":"No Storage Access","-54":"Accessibility Font Size","-53":"Native Network Status","-52":"Application Not Responding","-51":"Accessibility Mode Enabled","-50":"Offline Session","-49":"Disabled Input Clicked","-48":"Window Alert Prompt","-47":"Window Alert Confirm","-46":"Empty Page","-45":"Do Not Track","-44":"Mobile App Crash","-43":"Modified Device","-42":"Null Text Displayed","-41":"Rotation Event","-40":"App Launched in Background","-39":"Replay Disabled","-38":"Slow Rendering","-37":"Screenshot Taken","-36":"App Terminated","-35":"App Sub-Page","-34":"Low Memory","-33":"Local Storage Disabled","-32":"Cookies Disabled","-30":"Back Button Used","-29":"Field Cut","-28":"Field Pasted","-27":"Possible Blank Page","-26":"Private Browsing","-25":"Cookie Length Warning","-24":"Cookie Count Warning","-23":"Window Alert","-22":"Long Running Spinner","-21":"App Resume","-20":"App Suspend","-19":"Frozen UI","-18":"Uncaught Exception","-17":"API 30X","-16":"API Too Many Redirects","-15":"API 40X","-14":"API Not Found","-13":"API Forbidden/Unauthorized","-11":"API Timeout","-10":"Reload Page","-9":"Frustrated/Slow Navigation","-8":"Profanity Detected","-7":"Slow API Call","-6":"Mobile Horizontal Scroll","-5":"Possible Frustration","-4":"Click JS Error","-3":"API 500 Error","-2":"Rage Click","-1":"iFrame (Ad) Click"},"publicKeyString":"WyJ1L0NJVGtsQUZBK1UvdFNzdklWYVpuSUluc0NpQVNBM0haSTZDQ0c1ZzNoNDVNbjN0QmVrVFUxZXl2ZzZqN1ZoQUJzYUJrcGJOdGJLcjl6Ui9QSTN1ZmRCSXd6R0xmS0VqK0pReEFEaTQ5RVlaTlprQnNVWTF3TDRiakpXc2U5SW9IOXBPU0M4dTViUUpEOHpwN21KRWZVZUpnQmpGeTE3S0ROOCs3RjdvbXgwMk5mRkJkaENOVG5pSmdnU3l4elpibFRERnV5empIdTZVRFY5bWhnZDRPelpRZVRRdDV1L29Fc0J1Qmk3dVgvU1VjaER4dVNLQitaWkJiLzFHblpPL2VBMkJXTU1UbDVOR1ZUd3VvY3lTWm1VNUpQL0JUZkc1Zmh6KzJMOTZGUnpWSnROQU0yTU5TN3ZxSnk4elRlR24wMXlOYjZGTitzcDJ0TDZqWjBiT3c9PSIsIkFRQUIiXQ==","sub":"gap"}); function getUrlParams(e){try{const t=new URL(e),a=e=>Object.fromEntries([...e.entries()].filter((([e,t])=>""!==t&&null!==t))),r=a(t.searchParams),n=t.hash.slice(1),i=n.includes("=")?a(new URLSearchParams(n)):{};return{...r,...i}}catch(e){QmJsError("QM ADMIN :: URL Parameters",e)}}if(window.qUrlParameters="",window.qUrlParameters=getUrlParams(document.location.href),(()=>{try{let t=0;var e=0;const a=()=>{const e=document.documentElement,t=e.scrollTop||document.body.scrollTop||0,a=window.innerHeight||e.clientHeight||0,r=Math.max(e.scrollHeight,document.body.scrollHeight);return r?Math.min(100,Math.max(0,(t+a)/r*100)):0},r=()=>{(e=a())>t&&(t=e)},n=setInterval(r,1e3);window.getMaxScrollPercent=()=>Math.round(t),window.addEventListener("pagehide",(()=>{r(),clearInterval(n);const a=QuantumMetricAPI?.getSessionVar?.("Page :: Data")??{},i={max_scroll_depth_percentage:Math.round(t),exit_scroll_depth_percentage:Math.round(e),page_name:a?.page_name,page_type:a?.page_type,page_title:a?.page_title,url:a?.url,url_referrer:a?.url_referrer,url_hostname:a?.url_hostname,url_path:a?.url_path,url_hash:a.url_hash,url_parameters:a?.url_parameters};"product"===window?.gap?.pageType&&(i.product={},QuantumMetricAPI?.getSessionVar("Product :: Page :: Color Swatch Data")?(i.product.swatches=QuantumMetricAPI.getSessionVar("Product :: Page :: Color Swatch Data"),QuantumMetricAPI?.setSessionVar("Product :: Page :: Color Swatch Data",void 0)):(i.product.swatches={},i.product.swatches.swatches_clicked_total=0),i.product.pid=QuantumMetricAPI.getSessionVar("Page :: Data")?.product?.pid,i.product.product_id=QuantumMetricAPI.getSessionVar("Page :: Data")?.product?.product_id,i.product.product_name=QuantumMetricAPI.getSessionVar("Page :: Data")?.product?.product_name),QuantumMetricAPI?.setSessionVar?.("Previous Page :: Data",i),QuantumMetricAPI?.sendEvent?.(98,0,i.page_type,i)}))}catch(e){QmJsError("QM ADMIN :: Page :: Exit Data",e)}})(),function(){try{[{urlRegex:/\/product\.do/gi,selectors:["[aria-label='You May Also Like'], [aria-label='you may also like']"],value:"you may also like",threshold:.5,eventId:111}].forEach((function(e){if(e.urlRegex instanceof RegExp&&window.location.href.match(e.urlRegex))var t=0,a=setInterval((function(){(t=++t)>=10&&clearInterval(a);var r=e.selectors.join(","),n=document.querySelector(r);if(n){var i={threshold:e.threshold||.5},o=new IntersectionObserver((function(t){!function(e,t){try{e.forEach((function(e){e.isIntersecting&&window.QuantumMetricAPI.sendEvent(t.eventId,0,t.value)}))}catch(e){QmJsError("QM ADMIN :: Impressions Capture",e)}}(t,e)}),i);o.observe(n),clearInterval(a)}}),1e3)}))}catch(e){QmJsError("QM ADMIN :: Impressions Capture",e)}}(),window.console&&console.error&&!window.consoleError){window.consoleError=console.error;var qmErrString="";console.error=function(){try{if(window.qmConsoleErrCount=window.qmConsoleErrCount?window.qmConsoleErrCount+1:1,arguments&&window.qmConsoleErrCount<30){for(var e=0;e<arguments.length;e++)arguments[e]&&arguments[e].message?(qmErrString=0===e?arguments[e].message:qmErrString+" || "+arguments[e].message)&&qmErrString.replace&&(qmErrString=qmErrString.replace(/\"/g,"").replace(/\'/g,"").replace(/\`/g,"")):"string"==typeof arguments[e]?(qmErrString=0===e?arguments[e]:qmErrString+" || "+arguments[e])&&qmErrString.replace&&(qmErrString=qmErrString.replace(/\"/g,"").replace(/\'/g,"").replace(/\`/g,"")):(qmErrString=0===e?JSON.stringify(arguments[e]):qmErrString+" || "+JSON.stringify(arguments[e]))&&qmErrString.replace&&(qmErrString=qmErrString.replace(/\"/g,"").replace(/\'/g,"").replace(/\`/g,""));""!==qmErrString&&(qmErrString=qmErrString.substring(0,300),QuantumMetricAPI.sendEvent(1,0,qmErrString))}}catch(e){QmJsError("QM ADMIN :: Console Errors",e)}window.consoleError.apply(this,arguments)}}QuantumMetricAPI.addEventListener("api",(function(e){try{if(e.url.match(/\/api\/chat/)&&e.xhr.qrequest){const t=JSON.parse(e.xhr.qrequest);if(!t?.clientEvent?.type)return;t.clientEvent.message?.attachments?(t.clientEvent.message.attachments.forEach((e=>{e.data&&(e.data=JSON.parse(e.data))})),t.clientEvent.message.attachments.some((e=>e?.data?.responses&&Object.keys(e.data.responses).length>0))&&QuantumMetricAPI.sendEvent(49,0,t.clientEvent.type,t)):QuantumMetricAPI.sendEvent(49,0,t.clientEvent.type,t)}}catch(e){QmJsError("QM ADMIN :: Chat Events",e)}}));try{!function(e){function t(t,a){e.addEventListener(t,(function(t){var r=t.detail||{},n={action:a,form_id:r.Form_ID||null,form_type:r.Form_Type||null,feedback_uuid:r.Feedback_UUID||null,content:r.Content||null};if(null!==n.content&&(n.content=n.content.filter((e=>""!==e.value))),QuantumMetricAPI.getSessionVar("Medallia :: Form Data API")){var i=QuantumMetricAPI.getSessionVar("Medallia :: Form Data API");n.form_name=i.name,n.property_type=i.propertyType}n.content&&n.content.forEach((e=>{const t=e.value;"string"!=typeof t&&"number"!=typeof t||(e.value={value:String(t)})})),"Feedback submitted"===n.action&&Array.isArray(n.content)&&n.content.length>0&&n.content.forEach((e=>{const t=e?.value?.value;if(null!=t&&""!==t){const a=parseInt(t,10);isNaN(a)||("nps"===e.type&&(n.NPS=a),e.unique_name?.match(/osat/i)&&(n.OSAT=a))}})),QuantumMetricAPI.setSessionVar("Medallia :: Event",n),QuantumMetricAPI.sendEvent(53,0,n.action,n),e.qmMedalliaDataLayer=e.qmMedalliaDataLayer||[],e.qmMedalliaDataLayer.push(n)}))}t("MDigital_Invite_Displayed","Invite displayed"),t("MDigital_Invite_Accepted","Invite accepted"),t("MDigital_Invite_Declined","Invite declined"),t("MDigital_Invite_Skipped","Invite skipped"),t("MDigital_ShowForm_Called","Form call triggered"),t("MDigital_Form_Displayed","Form displayed"),t("MDigital_Form_Page_Displayed","Form page displayed"),t("MDigital_Form_Next_Page","Form next page"),t("MDigital_Form_Back_Page","Form back page"),t("MDigital_Form_Close_Submitted","Form closed after submission"),t("MDigital_Form_Close_No_Submit","Form closed without submission"),t("MDigital_Submit_Feedback","Feedback submitted"),t("MDigital_Feedback_Button_Clicked","Feedback button clicked"),t("MDigital_ThankYou_Displayed","Thank you displayed"),t("MDigital_ThankYou_Close","Thank you closed"),t("MDigital_CaptureButton_Clicked","Screen capture started"),t("MDigital_CaptureButton_Taken","Screen capture taken"),t("MDigital_CaptureButton_Cancel","Screen capture canceled")}(window)}catch(e){QmJsError("QM ADMIN :: Medallia Events",e)}try{if(window.QuantumMetricAPI_gap)startQmEventListener();else{var onLoad=Array.isArray(window.QuantumMetricOnload)?window.QuantumMetricOnload:[];"function"==typeof window.QuantumMetricOnload&&onLoad.push(window.QuantumMetricOnload),onLoad.push(startQmEventListener),window.QuantumMetricOnload=onLoad}}catch(e){QmJsError("QM ADMIN :: Tealium Integration - Init",e)}function startQmEventListener(){try{window.QuantumMetricAPI_gap.eventListenerRegistered=!0,window.QuantumMetricAPI_gap.addEventListener([5,46,95,96,110],(function(e){110===e.id&&"product"===QuantumMetricAPI?.getSessionVar("Previous Page :: Data")?.page_type&&(e.name="pdp_summary",e.value=QuantumMetricAPI?.getSessionVar("Previous Page :: Data")?.page_name),console.log("QM - utag.link() - EVENT",{event_name:e.name,event_value:String(e.value),event_attributes:e.ev,platform_name:"quantum_metric",business_unit_id:QuantumMetricAPI?.getSessionVar("Page :: Data")?.business_unit_id,business_unit_abbr_name:QuantumMetricAPI?.getSessionVar("Page :: Data")?.business_unit_abbr_name,page_type:QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_type,page_name:QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_name}),window.utag.link({event_name:e.name,event_value:String(e.value),event_attributes:e.ev,platform_name:"quantum_metric",business_unit_id:QuantumMetricAPI?.getSessionVar("Page :: Data")?.business_unit_id,business_unit_abbr_name:QuantumMetricAPI?.getSessionVar("Page :: Data")?.business_unit_abbr_name,page_type:QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_type,page_name:QuantumMetricAPI?.getSessionVar("Page :: Data")?.page_name})}))}catch(e){QmJsError("QM ADMIN :: Tealium Integration - Listeners",e)}}function QmJsError(e,t){QuantumMetricAPI.sendEvent(2,0,e+" - "+t)};
(function(){if(window.QuantumMetricAPI) window.QuantumMetricAPI.conversionRates = {"AED":3.6725,"AFN":63.999997,"ALL":82.19691,"AMD":376.258666,"ANG":1.79,"AOA":912.131,"ARS":1387.0001,"AUD":1.422686,"AWG":1.8,"AZN":1.7,"BAM":1.671981,"BBD":2,"BDT":122.815368,"BGN":1.677021,"BHD":0.377507,"BIF":2970.318934,"BMD":1,"BND":1.273995,"BOB":6.905365,"BRL":5.1064,"BSD":1,"BTC":0.000014086811,"BTN":92.260674,"BWP":13.408103,"BYN":2.916946,"BZD":2.009908,"CAD":1.38561,"CDF":2301,"CHF":0.790987,"CLF":0.02281,"CLP":897.24,"CNH":6.837478,"CNY":6.8378,"COP":3686.387097,"CRC":464.865799,"CUC":1,"CUP":25.75,"CVE":94.85,"CZK":20.9229,"DJF":177.646667,"DKK":6.407106,"DOP":60.51794,"DZD":132.459,"EGP":53.3299,"ERN":15,"ETB":155.886409,"EUR":0.857412,"FJD":2.2149,"FKP":0.746645,"GBP":0.746645,"GEL":2.685,"GGP":0.746645,"GHS":11.007557,"GIP":0.746645,"GMD":73.000001,"GNF":8780,"GTQ":7.645223,"GYD":209.079398,"HKD":7.833555,"HNL":26.620001,"HRK":6.460301,"HTG":131.013318,"HUF":324.003851,"IDR":17089.623507,"ILS":3.090805,"IMP":0.746645,"INR":92.784168,"IQD":1310,"IRR":1315000,"ISK":123.3,"JEP":0.746645,"JMD":157.315659,"JOD":0.709,"JPY":158.971625,"KES":129.25,"KGS":87.45,"KHR":4008.004994,"KMF":424.499799,"KPW":900,"KRW":1481.218812,"KWD":0.30894,"KYD":0.832781,"KZT":477.7976,"LAK":22011.148879,"LBP":89548.433885,"LKR":315.007441,"LRD":184.135545,"LSL":16.489334,"LYD":6.345,"MAD":9.300474,"MDL":17.26976,"MGA":4146.145179,"MKD":52.867652,"MMK":2099.81,"MNT":3569.47,"MOP":8.062591,"MRU":39.97206,"MUR":46.580001,"MVR":15.46,"MWK":1734.512054,"MXN":17.46745,"MYR":3.9865,"MZN":63.959999,"NAD":16.487334,"NGN":1378.84,"NIO":36.757593,"NOK":9.538422,"NPR":147.619406,"NZD":1.715229,"OMR":0.384505,"PAB":1,"PEN":3.415775,"PGK":4.356871,"PHP":59.764997,"PKR":278.882933,"PLN":3.653833,"PYG":6482.578951,"QAR":3.646,"RON":4.3681,"RSD":100.624213,"RUB":78.249959,"RWF":1462.031413,"SAR":3.752669,"SBD":8.04851,"SCR":13.771515,"SDG":601,"SEK":9.305415,"SGD":1.275238,"SHP":0.746645,"SLE":24.65,"SLL":20969.5,"SOS":571.277923,"SRD":37.554,"SSP":130.26,"STD":22281.8,"STN":21.44,"SVC":8.744604,"SYP":13002,"SZL":16.615,"THB":32.062,"TJS":9.498763,"TMT":3.5,"TND":2.89728,"TOP":2.40776,"TRY":44.585918,"TTD":6.778082,"TWD":31.815501,"TZS":2605,"UAH":43.307787,"UGX":3697.193537,"USD":1,"UYU":40.582397,"UZS":12230,"VES":474.416785,"VND":26320.5,"VUV":119.389,"WST":2.74422,"XAF":562.425379,"XAG":0.013494,"XAU":0.00021164,"XCD":2.70255,"XCG":1.8011,"XDR":0.698977,"XOF":562.425379,"XPD":0.00064033,"XPF":102.316463,"XPT":0.00049802,"YER":238.575078,"ZAR":16.461162,"ZMW":19.112504,"ZWG":25.3626,"ZWL":322}})(); 
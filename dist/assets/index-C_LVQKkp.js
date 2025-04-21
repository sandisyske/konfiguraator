(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},ks=[],Vn=()=>{},Lg=()=>!1,Ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hu=n=>n.startsWith("onUpdate:"),Gt=Object.assign,du=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dg=Object.prototype.hasOwnProperty,lt=(n,e)=>Dg.call(n,e),Fe=Array.isArray,Hs=n=>ba(n)==="[object Map]",zd=n=>ba(n)==="[object Set]",Ve=n=>typeof n=="function",Rt=n=>typeof n=="string",ki=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Vd=n=>(xt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Gd=Object.prototype.toString,ba=n=>Gd.call(n),Ug=n=>ba(n).slice(8,-1),Wd=n=>ba(n)==="[object Object]",pu=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Lr=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ng=/-(\w)/g,Sn=Aa(n=>n.replace(Ng,(e,t)=>t?t.toUpperCase():"")),Og=/\B([A-Z])/g,Hi=Aa(n=>n.replace(Og,"-$1").toLowerCase()),wa=Aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),$a=Aa(n=>n?`on${wa(n)}`:""),Ui=(n,e)=>!Object.is(n,e),jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},$l=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ff;const Ra=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mu(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Hg(i):mu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||xt(n))return n}const Fg=/;(?![^(]*\))/g,Bg=/:([^]+)/,kg=/\/\*[^]*?\*\//g;function Hg(n){const e={};return n.replace(kg,"").split(Fg).forEach(t=>{if(t){const i=t.split(Bg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wr(n){let e="";if(Rt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Wr(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vg=fu(zg);function jd(n){return!!n||n===""}const qd=n=>!!(n&&n.__v_isRef===!0),_n=n=>Rt(n)?n:n==null?"":Fe(n)||xt(n)&&(n.toString===Gd||!Ve(n.toString))?qd(n)?_n(n.value):JSON.stringify(n,Kd,2):String(n),Kd=(n,e)=>qd(e)?Kd(n,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Qa(i,r)+" =>"]=s,t),{})}:zd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qa(t))}:ki(e)?Qa(e):xt(e)&&!Fe(e)&&!Wd(e)?String(e):e,Qa=(n,e="")=>{var t;return ki(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jd(n){return new Yd(n)}function Zd(){return Kt}function Gg(n,e=!1){Kt&&Kt.cleanups.push(n)}let mt;const el=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),tp(this);const e=mt,t=Ln;mt=this,Ln=!0;try{return this.fn()}finally{np(this),mt=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xu(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let Qd=0,Dr,Ur;function ep(n,e=!1){if(n.flags|=8,e){n.next=Ur,Ur=n;return}n.next=Dr,Dr=n}function gu(){Qd++}function _u(){if(--Qd>0)return;if(Ur){let e=Ur;for(Ur=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function tp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),xu(i),Wg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ql(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ip(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr))return;n.globalVersion=Xr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ql(n)){n.flags&=-3;return}const t=mt,i=Ln;mt=n,Ln=!0;try{tp(n);const s=n.fn(n._value);(e.version===0||Ui(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{mt=t,Ln=i,np(n),n.flags&=-3}}function xu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)xu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const sp=[];function zi(){sp.push(Ln),Ln=!1}function Vi(){const n=sp.pop();Ln=n===void 0?!0:n}function hf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let Xr=0;class Xg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!mt||!Ln||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new Xg(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,rp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=i)}return t}trigger(e){this.version++,Xr++,this.notify(e)}notify(e){gu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_u()}}}function rp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ca=new WeakMap,cs=Symbol(""),ec=Symbol(""),jr=Symbol("");function Ht(n,e,t){if(Ln&&mt){let i=ca.get(n);i||ca.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new vu),s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const o=ca.get(n);if(!o){Xr++;return}const a=l=>{l&&l.trigger()};if(gu(),e==="clear")o.forEach(a);else{const l=Fe(n),c=l&&pu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===jr||!ki(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(jr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Hs(n)&&a(o.get(ec)));break;case"delete":l||(a(o.get(cs)),Hs(n)&&a(o.get(ec)));break;case"set":Hs(n)&&a(o.get(cs));break}}_u()}function jg(n,e){const t=ca.get(n);return t&&t.get(e)}function xs(n){const e=it(n);return e===n?e:(Ht(e,"iterate",jr),yn(n)?e:e.map(zt))}function Ca(n){return Ht(n=it(n),"iterate",jr),n}const qg={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,zt)},concat(...n){return xs(this).concat(...n.map(e=>Fe(e)?xs(e):e))},entries(){return tl(this,"entries",n=>(n[1]=zt(n[1]),n))},every(n,e){return $n(this,"every",n,e,void 0,arguments)},filter(n,e){return $n(this,"filter",n,e,t=>t.map(zt),arguments)},find(n,e){return $n(this,"find",n,e,zt,arguments)},findIndex(n,e){return $n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $n(this,"findLast",n,e,zt,arguments)},findLastIndex(n,e){return $n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $n(this,"forEach",n,e,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return xs(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,e){return $n(this,"map",n,e,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...e){return df(this,"reduce",n,e)},reduceRight(n,...e){return df(this,"reduceRight",n,e)},shift(){return gr(this,"shift")},some(n,e){return $n(this,"some",n,e,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return xs(this).toReversed()},toSorted(n){return xs(this).toSorted(n)},toSpliced(...n){return xs(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return tl(this,"values",zt)}};function tl(n,e,t){const i=Ca(n),s=i[e]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Kg=Array.prototype;function $n(n,e,t,i,s,r){const o=Ca(n),a=o!==n&&!yn(n),l=o[e];if(l!==Kg[e]){const f=l.apply(n,r);return a?zt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,zt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function df(n,e,t,i){const s=Ca(n);let r=t;return s!==n&&(yn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,zt(a),l,n)}),s[e](r,...i)}function nl(n,e,t){const i=it(n);Ht(i,"iterate",jr);const s=i[e](...t);return(s===-1||s===!1)&&Mu(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function gr(n,e,t=[]){zi(),gu();const i=it(n)[e].apply(n,t);return _u(),Vi(),i}const Yg=fu("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ki));function Jg(n){ki(n)||(n=String(n));const e=it(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class ap{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?o_:fp:r?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!s){let l;if(o&&(l=qg[t]))return l;if(t==="hasOwnProperty")return Jg}const a=Reflect.get(e,t,bt(e)?e:i);return(ki(t)?op.has(t):Yg(t))||(s||Ht(e,"get",t),r)?a:bt(a)?o&&pu(t)?a:a.value:xt(a)?s?dp(a):so(a):a}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=hs(r);if(!yn(i)&&!hs(i)&&(r=it(r),i=it(i)),!Fe(e)&&bt(r)&&!bt(i))return l?!1:(r.value=i,!0)}const o=Fe(e)&&pu(t)?Number(t)<e.length:lt(e,t),a=Reflect.set(e,t,i,bt(e)?e:s);return e===it(s)&&(o?Ui(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),a}deleteProperty(e,t){const i=lt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ki(t)||!op.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",Fe(e)?"length":cs),Reflect.ownKeys(e)}}class Zg extends ap{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $g=new lp,Qg=new Zg,e_=new lp(!0);const tc=n=>n,go=n=>Reflect.getPrototypeOf(n);function t_(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=Hs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tc:e?nc:zt;return!e&&Ht(r,"iterate",l?ec:cs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function _o(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function n_(n,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);n||(Ui(s,a)&&Ht(o,"get",s),Ht(o,"get",a));const{has:l}=go(o),c=e?tc:n?nc:zt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ht(it(s),"iterate",cs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=it(r),a=it(s);return n||(Ui(s,a)&&Ht(o,"has",s),Ht(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?tc:n?nc:zt;return!n&&Ht(l,"iterate",cs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Gt(t,n?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(s){!e&&!yn(s)&&!hs(s)&&(s=it(s));const r=it(this);return go(r).has.call(r,s)||(r.add(s),ci(r,"add",s,s)),this},set(s,r){!e&&!yn(r)&&!hs(r)&&(r=it(r));const o=it(this),{has:a,get:l}=go(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ui(r,u)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=go(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=t_(s,n,e)}),t}function yu(n,e){const t=n_(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(lt(t,s)&&s in i?t:i,s,r)}const i_={get:yu(!1,!1)},s_={get:yu(!1,!0)},r_={get:yu(!0,!1)};const cp=new WeakMap,up=new WeakMap,fp=new WeakMap,o_=new WeakMap;function a_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function l_(n){return n.__v_skip||!Object.isExtensible(n)?0:a_(Ug(n))}function so(n){return hs(n)?n:Su(n,!1,$g,i_,cp)}function hp(n){return Su(n,!1,e_,s_,up)}function dp(n){return Su(n,!0,Qg,r_,fp)}function Su(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=l_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ni(n){return hs(n)?Ni(n.__v_raw):!!(n&&n.__v_isReactive)}function hs(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Mu(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Eu(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&Xd(n,"__v_skip",!0),n}const zt=n=>xt(n)?so(n):n,nc=n=>xt(n)?dp(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function wn(n){return pp(n,!1)}function c_(n){return pp(n,!0)}function pp(n,e){return bt(n)?n:new u_(n,e)}class u_{constructor(e,t){this.dep=new vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||hs(e);e=i?e:it(e),Ui(e,t)&&(this._rawValue=e,this._value=i?e:zt(e),this.dep.trigger())}}function zs(n){return bt(n)?n.value:n}const f_={get:(n,e,t)=>e==="__v_raw"?n:zs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return bt(s)&&!bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function mp(n){return Ni(n)?n:new Proxy(n,f_)}function h_(n){const e=Fe(n)?new Array(n.length):{};for(const t in n)e[t]=p_(n,t);return e}class d_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jg(it(this._object),this._key)}}function p_(n,e,t){const i=n[e];return bt(i)?i:new d_(n,e,t)}class m_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function g_(n,e,t=!1){let i,s;return Ve(n)?i=n:(i=n.get,s=n.set),new m_(i,s,t)}const xo={},ua=new WeakMap;let ts;function __(n,e=!1,t=ts){if(t){let i=ua.get(t);i||ua.set(t,i=[]),i.push(n)}}function x_(n,e,t=dt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:yn(y)||s===!1||s===0?ui(y,1):ui(y);let u,f,h,d,g=!1,_=!1;if(bt(n)?(f=()=>n.value,g=yn(n)):Ni(n)?(f=()=>c(n),g=!0):Fe(n)?(_=!0,g=n.some(y=>Ni(y)||yn(y)),f=()=>n.map(y=>{if(bt(y))return y.value;if(Ni(y))return c(y);if(Ve(y))return l?l(y,2):y()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){zi();try{h()}finally{Vi()}}const y=ts;ts=u;try{return l?l(n,3,[d]):n(d)}finally{ts=y}}:f=Vn,e&&s){const y=f,C=s===!0?1/0:s;f=()=>ui(y(),C)}const m=Zd(),p=()=>{u.stop(),m&&m.active&&du(m.effects,u)};if(r&&e){const y=e;e=(...C)=>{y(...C),p()}}let b=_?new Array(n.length).fill(xo):xo;const M=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const C=u.run();if(s||g||(_?C.some((I,P)=>Ui(I,b[P])):Ui(C,b))){h&&h();const I=ts;ts=u;try{const P=[C,b===xo?void 0:_&&b[0]===xo?[]:b,d];l?l(e,3,P):e(...P),b=C}finally{ts=I}}}else u.run()};return a&&a(M),u=new $d(f),u.scheduler=o?()=>o(M,!1):M,d=y=>__(y,!1,u),h=u.onStop=()=>{const y=ua.get(u);if(y){if(l)l(y,4);else for(const C of y)C();ua.delete(u)}},e?i?M(!0):b=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,bt(n))ui(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(zd(n)||Hs(n))n.forEach(i=>{ui(i,e,t)});else if(Wd(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(n,e,t,i){try{return i?n(...i):n()}catch(s){Pa(s,e,t)}}function Wn(n,e,t,i){if(Ve(n)){const s=ro(n,e,t,i);return s&&Vd(s)&&s.catch(r=>{Pa(r,e,t)}),s}if(Fe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Wn(n[r],e,t,i));return s}}function Pa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){zi(),ro(r,null,10,[n,l,c]),Vi();return}}v_(n,t,s,i,o)}function v_(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Yt=[];let kn=-1;const Vs=[];let wi=null,Ns=0;const gp=Promise.resolve();let fa=null;function Ia(n){const e=fa||gp;return n?e.then(this?n.bind(this):n):e}function y_(n){let e=kn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=qr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Tu(n){if(!(n.flags&1)){const e=qr(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=qr(t)?Yt.push(n):Yt.splice(y_(e),0,n),n.flags|=1,_p()}}function _p(){fa||(fa=gp.then(vp))}function S_(n){Fe(n)?Vs.push(...n):wi&&n.id===-1?wi.splice(Ns+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),_p()}function pf(n,e,t=kn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function xp(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,i)=>qr(t)-qr(i));if(Vs.length=0,wi){wi.push(...e);return}for(wi=e,Ns=0;Ns<wi.length;Ns++){const t=wi[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}wi=null,Ns=0}}const qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vp(n){try{for(kn=0;kn<Yt.length;kn++){const e=Yt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<Yt.length;kn++){const e=Yt[kn];e&&(e.flags&=-2)}kn=-1,Yt.length=0,xp(),fa=null,(Yt.length||Vs.length)&&vp()}}let tn=null,yp=null;function ha(n){const e=tn;return tn=n,yp=n&&n.type.__scopeId||null,e}function bu(n,e=tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Tf(-1);const r=ha(e);let o;try{o=n(...s)}finally{ha(r),i._d&&Tf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qo(n,e){if(tn===null)return n;const t=Na(tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=dt]=e[s];r&&(Ve(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ji(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(zi(),Wn(l,t,8,[n.el,a,n,e]),Vi())}}const M_=Symbol("_vte"),E_=n=>n.__isTeleport;function Au(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Au(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sp(n,e){return Ve(n)?Gt({name:n.name},e,{setup:n}):n}function Mp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function da(n,e,t,i,s=!1){if(Fe(n)){n.forEach((g,_)=>da(g,e&&(Fe(e)?e[_]:e),t,i,s));return}if(Nr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&da(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Na(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=it(f),d=f===dt?()=>!1:g=>lt(h,g);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,d(c)&&(f[c]=null)):bt(c)&&(c.value=null)),Ve(l))ro(l,a,12,[o,u]);else{const g=Rt(l),_=bt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;s?Fe(p)&&du(p,r):Fe(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,cn(m,t)):m()}}}Ra().requestIdleCallback;Ra().cancelIdleCallback;const Nr=n=>!!n.type.__asyncLoader,Ep=n=>n.type.__isKeepAlive;function T_(n,e){Tp(n,"a",e)}function b_(n,e){Tp(n,"da",e)}function Tp(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(La(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ep(s.parent.vnode)&&A_(i,e,t,s),s=s.parent}}function A_(n,e,t,i){const s=La(e,n,i,!0);Ap(()=>{du(i[e],s)},t)}function La(n,e,t=Ot,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{zi();const a=oo(t),l=Wn(e,t,n,o);return a(),Vi(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=Ot)=>{(!Jr||n==="sp")&&La(n,(...i)=>e(...i),t)},w_=_i("bm"),bp=_i("m"),R_=_i("bu"),C_=_i("u"),P_=_i("bum"),Ap=_i("um"),I_=_i("sp"),L_=_i("rtg"),D_=_i("rtc");function U_(n,e=Ot){La("ec",n,e)}const N_="components";function wu(n,e){return F_(N_,n,!0,e)||n}const O_=Symbol.for("v-ndc");function F_(n,e,t=!0,i=!1){const s=tn||Ot;if(s){const r=s.type;{const a=Tx(r,!1);if(a&&(a===e||a===Sn(e)||a===wa(Sn(e))))return r}const o=mf(s[n]||r[n],e)||mf(s.appContext[n],e);return!o&&i?r:o}}function mf(n,e){return n&&(n[e]||n[Sn(e)]||n[wa(Sn(e))])}function il(n,e,t,i){let s;const r=t,o=Fe(n);if(o||Rt(n)){const a=o&&Ni(n);let l=!1;a&&(l=!yn(n),n=Ca(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?zt(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ic=n=>n?Kp(n)?Na(n):ic(n.parent):null,Or=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ic(n.parent),$root:n=>ic(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Rp(n),$forceUpdate:n=>n.f||(n.f=()=>{Tu(n.update)}),$nextTick:n=>n.n||(n.n=Ia.bind(n.proxy)),$watch:n=>rx.bind(n)}),sl=(n,e)=>n!==dt&&!n.__isScriptSetup&&lt(n,e),B_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(sl(i,e))return o[e]=1,i[e];if(s!==dt&&lt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&lt(c,e))return o[e]=3,r[e];if(t!==dt&&lt(t,e))return o[e]=4,t[e];sc&&(o[e]=0)}}const u=Or[e];let f,h;if(u)return e==="$attrs"&&Ht(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==dt&&lt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,lt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return sl(s,e)?(s[e]=t,!0):i!==dt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==dt&&lt(n,o)||sl(e,o)||(a=r[0])&&lt(a,o)||lt(i,o)||lt(Or,o)||lt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gf(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sc=!0;function k_(n){const e=Rp(n),t=n.proxy,i=n.ctx;sc=!1,e.beforeCreate&&_f(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:y,render:C,renderTracked:I,renderTriggered:P,errorCaptured:D,serverPrefetch:A,expose:E,inheritAttrs:U,components:$,directives:V,filters:ie}=e;if(c&&H_(c,i,null),o)for(const te in o){const z=o[te];Ve(z)&&(i[te]=z.bind(t))}if(s){const te=s.call(t,t);xt(te)&&(n.data=so(te))}if(sc=!0,r)for(const te in r){const z=r[te],ge=Ve(z)?z.bind(t,t):Ve(z.get)?z.get.bind(t,t):Vn,Se=!Ve(z)&&Ve(z.set)?z.set.bind(t):Vn,Re=Tt({get:ge,set:Se});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ie=>Re.value=Ie})}if(a)for(const te in a)wp(a[te],i,t,te);if(l){const te=Ve(l)?l.call(t):l;Reflect.ownKeys(te).forEach(z=>{Ko(z,te[z])})}u&&_f(u,n,"c");function q(te,z){Fe(z)?z.forEach(ge=>te(ge.bind(t))):z&&te(z.bind(t))}if(q(w_,f),q(bp,h),q(R_,d),q(C_,g),q(T_,_),q(b_,m),q(U_,D),q(D_,I),q(L_,P),q(P_,b),q(Ap,y),q(I_,A),Fe(E))if(E.length){const te=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(te,z,{get:()=>t[z],set:ge=>t[z]=ge})})}else n.exposed||(n.exposed={});C&&n.render===Vn&&(n.render=C),U!=null&&(n.inheritAttrs=U),$&&(n.components=$),V&&(n.directives=V),A&&Mp(n)}function H_(n,e,t=Vn){Fe(n)&&(n=rc(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=Dn(s.from||i,s.default,!0):r=Dn(s.from||i):r=Dn(s),bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function _f(n,e,t){Wn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function wp(n,e,t,i){let s=i.includes(".")?Vp(t,i):()=>t[i];if(Rt(n)){const r=e[n];Ve(r)&&Gs(s,r)}else if(Ve(n))Gs(s,n.bind(t));else if(xt(n))if(Fe(n))n.forEach(r=>wp(r,e,t,i));else{const r=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(r)&&Gs(s,r,n)}}function Rp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),xt(e)&&r.set(e,l),l}function pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&pa(n,r,t,!0),s&&s.forEach(o=>pa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=z_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const z_={data:xf,props:vf,emits:vf,methods:Cr,computed:Cr,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Cr,directives:Cr,watch:G_,provide:xf,inject:V_};function xf(n,e){return e?n?function(){return Gt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function V_(n,e){return Cr(rc(n),rc(e))}function rc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function Cr(n,e){return n?Gt(Object.create(null),n,e):e}function vf(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Gt(Object.create(null),gf(n),gf(e??{})):e}function G_(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function Cp(){return{app:null,config:{isNativeTag:Lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function X_(n,e){return function(i,s=null){Ve(i)||(i=Gt({},i)),s!=null&&!xt(s)&&(s=null);const r=Cp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:W_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ax,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Lt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Na(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Wn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=us;us=c;try{return u()}finally{us=f}}};return c}}let us=null;function Ko(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Dn(n,e,t=!1){const i=Ot||tn;if(i||us){const s=us?us._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function j_(){return!!(Ot||tn||us)}const Pp={},Ip=()=>Object.create(Pp),Lp=n=>Object.getPrototypeOf(n)===Pp;function q_(n,e,t,i=!1){const s={},r=Ip();n.propsDefaults=Object.create(null),Dp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:hp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function K_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Da(n.emitsOptions,h))continue;const d=e[h];if(l)if(lt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Sn(h);s[g]=oc(l,a,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Dp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=Hi(f))===f||!lt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=oc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!lt(e,f))&&(delete r[f],c=!0)}c&&ci(n.attrs,"set","")}function Dp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;s&&lt(s,u=Sn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(t),c=a||dt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=oc(s,l,f,c[f],n,!lt(c,f))}}return o}function oc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=oo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Hi(t))&&(i=!0))}return i}const Y_=new WeakMap;function Up(n,e,t=!1){const i=t?Y_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,d]=Up(f,e,!0);Gt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,ks),ks;if(Fe(r))for(let u=0;u<r.length;u++){const f=Sn(r[u]);yf(f)&&(o[f]=dt)}else if(r)for(const u in r){const f=Sn(u);if(yf(f)){const h=r[u],d=o[f]=Fe(h)||Ve(h)?{type:h}:Gt({},h),g=d.type;let _=!1,m=!0;if(Fe(g))for(let p=0;p<g.length;++p){const b=g[p],M=Ve(b)&&b.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=Ve(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||lt(d,"default"))&&a.push(f)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function yf(n){return n[0]!=="$"&&!Lr(n)}const Np=n=>n[0]==="_"||n==="$stable",Ru=n=>Fe(n)?n.map(Hn):[Hn(n)],J_=(n,e,t)=>{if(e._n)return e;const i=bu((...s)=>Ru(e(...s)),t);return i._c=!1,i},Op=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Np(s))continue;const r=n[s];if(Ve(r))e[s]=J_(s,r,i);else if(r!=null){const o=Ru(r);e[s]=()=>o}}},Fp=(n,e)=>{const t=Ru(e);n.slots.default=()=>t},Bp=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Z_=(n,e,t)=>{const i=n.slots=Ip();if(n.vnode.shapeFlag&32){const s=e._;s?(Bp(i,e,t),t&&Xd(i,"_",s,!0)):Op(e,i)}else e&&Fp(n,e)},$_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Bp(s,e,t):(r=!e.$stable,Op(e,s)),o=e}else e&&(Fp(n,e),o={default:1});if(r)for(const a in s)!Np(a)&&o[a]==null&&delete s[a]},cn=hx;function Q_(n){return ex(n)}function ex(n,e){const t=Ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Vn,insertStaticContent:g}=n,_=(w,R,v,ne=null,Y=null,X=null,Q=void 0,ue=null,J=!!R.dynamicChildren)=>{if(w===R)return;w&&!_r(w,R)&&(ne=N(w),Ie(w,Y,X,!0),w=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:S,ref:x,shapeFlag:L}=R;switch(S){case Ua:m(w,R,v,ne);break;case ds:p(w,R,v,ne);break;case Yo:w==null&&b(R,v,ne,Q);break;case xn:$(w,R,v,ne,Y,X,Q,ue,J);break;default:L&1?C(w,R,v,ne,Y,X,Q,ue,J):L&6?V(w,R,v,ne,Y,X,Q,ue,J):(L&64||L&128)&&S.process(w,R,v,ne,Y,X,Q,ue,J,ce)}x!=null&&Y&&da(x,w&&w.ref,X,R||w,!R)},m=(w,R,v,ne)=>{if(w==null)i(R.el=a(R.children),v,ne);else{const Y=R.el=w.el;R.children!==w.children&&c(Y,R.children)}},p=(w,R,v,ne)=>{w==null?i(R.el=l(R.children||""),v,ne):R.el=w.el},b=(w,R,v,ne)=>{[w.el,w.anchor]=g(w.children,R,v,ne,w.el,w.anchor)},M=({el:w,anchor:R},v,ne)=>{let Y;for(;w&&w!==R;)Y=h(w),i(w,v,ne),w=Y;i(R,v,ne)},y=({el:w,anchor:R})=>{let v;for(;w&&w!==R;)v=h(w),s(w),w=v;s(R)},C=(w,R,v,ne,Y,X,Q,ue,J)=>{R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),w==null?I(R,v,ne,Y,X,Q,ue,J):A(w,R,Y,X,Q,ue,J)},I=(w,R,v,ne,Y,X,Q,ue)=>{let J,S;const{props:x,shapeFlag:L,transition:H,dirs:j}=w;if(J=w.el=o(w.type,X,x&&x.is,x),L&8?u(J,w.children):L&16&&D(w.children,J,null,ne,Y,rl(w,X),Q,ue),j&&ji(w,null,ne,"created"),P(J,w,w.scopeId,Q,ne),x){for(const me in x)me!=="value"&&!Lr(me)&&r(J,me,null,x[me],X,ne);"value"in x&&r(J,"value",null,x.value,X),(S=x.onVnodeBeforeMount)&&Fn(S,ne,w)}j&&ji(w,null,ne,"beforeMount");const G=tx(Y,H);G&&H.beforeEnter(J),i(J,R,v),((S=x&&x.onVnodeMounted)||G||j)&&cn(()=>{S&&Fn(S,ne,w),G&&H.enter(J),j&&ji(w,null,ne,"mounted")},Y)},P=(w,R,v,ne,Y)=>{if(v&&d(w,v),ne)for(let X=0;X<ne.length;X++)d(w,ne[X]);if(Y){let X=Y.subTree;if(R===X||Wp(X.type)&&(X.ssContent===R||X.ssFallback===R)){const Q=Y.vnode;P(w,Q,Q.scopeId,Q.slotScopeIds,Y.parent)}}},D=(w,R,v,ne,Y,X,Q,ue,J=0)=>{for(let S=J;S<w.length;S++){const x=w[S]=ue?Ri(w[S]):Hn(w[S]);_(null,x,R,v,ne,Y,X,Q,ue)}},A=(w,R,v,ne,Y,X,Q)=>{const ue=R.el=w.el;let{patchFlag:J,dynamicChildren:S,dirs:x}=R;J|=w.patchFlag&16;const L=w.props||dt,H=R.props||dt;let j;if(v&&qi(v,!1),(j=H.onVnodeBeforeUpdate)&&Fn(j,v,R,w),x&&ji(R,w,v,"beforeUpdate"),v&&qi(v,!0),(L.innerHTML&&H.innerHTML==null||L.textContent&&H.textContent==null)&&u(ue,""),S?E(w.dynamicChildren,S,ue,v,ne,rl(R,Y),X):Q||z(w,R,ue,null,v,ne,rl(R,Y),X,!1),J>0){if(J&16)U(ue,L,H,v,Y);else if(J&2&&L.class!==H.class&&r(ue,"class",null,H.class,Y),J&4&&r(ue,"style",L.style,H.style,Y),J&8){const G=R.dynamicProps;for(let me=0;me<G.length;me++){const fe=G[me],_e=L[fe],Ne=H[fe];(Ne!==_e||fe==="value")&&r(ue,fe,_e,Ne,Y,v)}}J&1&&w.children!==R.children&&u(ue,R.children)}else!Q&&S==null&&U(ue,L,H,v,Y);((j=H.onVnodeUpdated)||x)&&cn(()=>{j&&Fn(j,v,R,w),x&&ji(R,w,v,"updated")},ne)},E=(w,R,v,ne,Y,X,Q)=>{for(let ue=0;ue<R.length;ue++){const J=w[ue],S=R[ue],x=J.el&&(J.type===xn||!_r(J,S)||J.shapeFlag&70)?f(J.el):v;_(J,S,x,null,ne,Y,X,Q,!0)}},U=(w,R,v,ne,Y)=>{if(R!==v){if(R!==dt)for(const X in R)!Lr(X)&&!(X in v)&&r(w,X,R[X],null,Y,ne);for(const X in v){if(Lr(X))continue;const Q=v[X],ue=R[X];Q!==ue&&X!=="value"&&r(w,X,ue,Q,Y,ne)}"value"in v&&r(w,"value",R.value,v.value,Y)}},$=(w,R,v,ne,Y,X,Q,ue,J)=>{const S=R.el=w?w.el:a(""),x=R.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:j}=R;j&&(ue=ue?ue.concat(j):j),w==null?(i(S,v,ne),i(x,v,ne),D(R.children||[],v,x,Y,X,Q,ue,J)):L>0&&L&64&&H&&w.dynamicChildren?(E(w.dynamicChildren,H,v,Y,X,Q,ue),(R.key!=null||Y&&R===Y.subTree)&&kp(w,R,!0)):z(w,R,v,x,Y,X,Q,ue,J)},V=(w,R,v,ne,Y,X,Q,ue,J)=>{R.slotScopeIds=ue,w==null?R.shapeFlag&512?Y.ctx.activate(R,v,ne,Q,J):ie(R,v,ne,Y,X,Q,J):oe(w,R,J)},ie=(w,R,v,ne,Y,X,Q)=>{const ue=w.component=vx(w,ne,Y);if(Ep(w)&&(ue.ctx.renderer=ce),yx(ue,!1,Q),ue.asyncDep){if(Y&&Y.registerDep(ue,q,Q),!w.el){const J=ue.subTree=Lt(ds);p(null,J,R,v)}}else q(ue,w,R,v,Y,X,Q)},oe=(w,R,v)=>{const ne=R.component=w.component;if(ux(w,R,v))if(ne.asyncDep&&!ne.asyncResolved){te(ne,R,v);return}else ne.next=R,ne.update();else R.el=w.el,ne.vnode=R},q=(w,R,v,ne,Y,X,Q)=>{const ue=()=>{if(w.isMounted){let{next:L,bu:H,u:j,parent:G,vnode:me}=w;{const ye=Hp(w);if(ye){L&&(L.el=me.el,te(w,L,Q)),ye.asyncDep.then(()=>{w.isUnmounted||ue()});return}}let fe=L,_e;qi(w,!1),L?(L.el=me.el,te(w,L,Q)):L=me,H&&jo(H),(_e=L.props&&L.props.onVnodeBeforeUpdate)&&Fn(_e,G,L,me),qi(w,!0);const Ne=Mf(w),he=w.subTree;w.subTree=Ne,_(he,Ne,f(he.el),N(he),w,Y,X),L.el=Ne.el,fe===null&&fx(w,Ne.el),j&&cn(j,Y),(_e=L.props&&L.props.onVnodeUpdated)&&cn(()=>Fn(_e,G,L,me),Y)}else{let L;const{el:H,props:j}=R,{bm:G,m:me,parent:fe,root:_e,type:Ne}=w,he=Nr(R);qi(w,!1),G&&jo(G),!he&&(L=j&&j.onVnodeBeforeMount)&&Fn(L,fe,R),qi(w,!0);{_e.ce&&_e.ce._injectChildStyle(Ne);const ye=w.subTree=Mf(w);_(null,ye,v,ne,w,Y,X),R.el=ye.el}if(me&&cn(me,Y),!he&&(L=j&&j.onVnodeMounted)){const ye=R;cn(()=>Fn(L,fe,ye),Y)}(R.shapeFlag&256||fe&&Nr(fe.vnode)&&fe.vnode.shapeFlag&256)&&w.a&&cn(w.a,Y),w.isMounted=!0,R=v=ne=null}};w.scope.on();const J=w.effect=new $d(ue);w.scope.off();const S=w.update=J.run.bind(J),x=w.job=J.runIfDirty.bind(J);x.i=w,x.id=w.uid,J.scheduler=()=>Tu(x),qi(w,!0),S()},te=(w,R,v)=>{R.component=w;const ne=w.vnode.props;w.vnode=R,w.next=null,K_(w,R.props,ne,v),$_(w,R.children,v),zi(),pf(w),Vi()},z=(w,R,v,ne,Y,X,Q,ue,J=!1)=>{const S=w&&w.children,x=w?w.shapeFlag:0,L=R.children,{patchFlag:H,shapeFlag:j}=R;if(H>0){if(H&128){Se(S,L,v,ne,Y,X,Q,ue,J);return}else if(H&256){ge(S,L,v,ne,Y,X,Q,ue,J);return}}j&8?(x&16&&Me(S,Y,X),L!==S&&u(v,L)):x&16?j&16?Se(S,L,v,ne,Y,X,Q,ue,J):Me(S,Y,X,!0):(x&8&&u(v,""),j&16&&D(L,v,ne,Y,X,Q,ue,J))},ge=(w,R,v,ne,Y,X,Q,ue,J)=>{w=w||ks,R=R||ks;const S=w.length,x=R.length,L=Math.min(S,x);let H;for(H=0;H<L;H++){const j=R[H]=J?Ri(R[H]):Hn(R[H]);_(w[H],j,v,null,Y,X,Q,ue,J)}S>x?Me(w,Y,X,!0,!1,L):D(R,v,ne,Y,X,Q,ue,J,L)},Se=(w,R,v,ne,Y,X,Q,ue,J)=>{let S=0;const x=R.length;let L=w.length-1,H=x-1;for(;S<=L&&S<=H;){const j=w[S],G=R[S]=J?Ri(R[S]):Hn(R[S]);if(_r(j,G))_(j,G,v,null,Y,X,Q,ue,J);else break;S++}for(;S<=L&&S<=H;){const j=w[L],G=R[H]=J?Ri(R[H]):Hn(R[H]);if(_r(j,G))_(j,G,v,null,Y,X,Q,ue,J);else break;L--,H--}if(S>L){if(S<=H){const j=H+1,G=j<x?R[j].el:ne;for(;S<=H;)_(null,R[S]=J?Ri(R[S]):Hn(R[S]),v,G,Y,X,Q,ue,J),S++}}else if(S>H)for(;S<=L;)Ie(w[S],Y,X,!0),S++;else{const j=S,G=S,me=new Map;for(S=G;S<=H;S++){const xe=R[S]=J?Ri(R[S]):Hn(R[S]);xe.key!=null&&me.set(xe.key,S)}let fe,_e=0;const Ne=H-G+1;let he=!1,ye=0;const Pe=new Array(Ne);for(S=0;S<Ne;S++)Pe[S]=0;for(S=j;S<=L;S++){const xe=w[S];if(_e>=Ne){Ie(xe,Y,X,!0);continue}let Be;if(xe.key!=null)Be=me.get(xe.key);else for(fe=G;fe<=H;fe++)if(Pe[fe-G]===0&&_r(xe,R[fe])){Be=fe;break}Be===void 0?Ie(xe,Y,X,!0):(Pe[Be-G]=S+1,Be>=ye?ye=Be:he=!0,_(xe,R[Be],v,null,Y,X,Q,ue,J),_e++)}const Oe=he?nx(Pe):ks;for(fe=Oe.length-1,S=Ne-1;S>=0;S--){const xe=G+S,Be=R[xe],ze=xe+1<x?R[xe+1].el:ne;Pe[S]===0?_(null,Be,v,ze,Y,X,Q,ue,J):he&&(fe<0||S!==Oe[fe]?Re(Be,v,ze,2):fe--)}}},Re=(w,R,v,ne,Y=null)=>{const{el:X,type:Q,transition:ue,children:J,shapeFlag:S}=w;if(S&6){Re(w.component.subTree,R,v,ne);return}if(S&128){w.suspense.move(R,v,ne);return}if(S&64){Q.move(w,R,v,ce);return}if(Q===xn){i(X,R,v);for(let L=0;L<J.length;L++)Re(J[L],R,v,ne);i(w.anchor,R,v);return}if(Q===Yo){M(w,R,v);return}if(ne!==2&&S&1&&ue)if(ne===0)ue.beforeEnter(X),i(X,R,v),cn(()=>ue.enter(X),Y);else{const{leave:L,delayLeave:H,afterLeave:j}=ue,G=()=>i(X,R,v),me=()=>{L(X,()=>{G(),j&&j()})};H?H(X,G,me):me()}else i(X,R,v)},Ie=(w,R,v,ne=!1,Y=!1)=>{const{type:X,props:Q,ref:ue,children:J,dynamicChildren:S,shapeFlag:x,patchFlag:L,dirs:H,cacheIndex:j}=w;if(L===-2&&(Y=!1),ue!=null&&da(ue,null,v,w,!0),j!=null&&(R.renderCache[j]=void 0),x&256){R.ctx.deactivate(w);return}const G=x&1&&H,me=!Nr(w);let fe;if(me&&(fe=Q&&Q.onVnodeBeforeUnmount)&&Fn(fe,R,w),x&6)pe(w.component,v,ne);else{if(x&128){w.suspense.unmount(v,ne);return}G&&ji(w,null,R,"beforeUnmount"),x&64?w.type.remove(w,R,v,ce,ne):S&&!S.hasOnce&&(X!==xn||L>0&&L&64)?Me(S,R,v,!1,!0):(X===xn&&L&384||!Y&&x&16)&&Me(J,R,v),ne&&Ze(w)}(me&&(fe=Q&&Q.onVnodeUnmounted)||G)&&cn(()=>{fe&&Fn(fe,R,w),G&&ji(w,null,R,"unmounted")},v)},Ze=w=>{const{type:R,el:v,anchor:ne,transition:Y}=w;if(R===xn){se(v,ne);return}if(R===Yo){y(w);return}const X=()=>{s(v),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:Q,delayLeave:ue}=Y,J=()=>Q(v,X);ue?ue(w.el,X,J):J()}else X()},se=(w,R)=>{let v;for(;w!==R;)v=h(w),s(w),w=v;s(R)},pe=(w,R,v)=>{const{bum:ne,scope:Y,job:X,subTree:Q,um:ue,m:J,a:S}=w;Sf(J),Sf(S),ne&&jo(ne),Y.stop(),X&&(X.flags|=8,Ie(Q,w,R,v)),ue&&cn(ue,R),cn(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Me=(w,R,v,ne=!1,Y=!1,X=0)=>{for(let Q=X;Q<w.length;Q++)Ie(w[Q],R,v,ne,Y)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),v=R&&R[M_];return v?h(v):R};let re=!1;const le=(w,R,v)=>{w==null?R._vnode&&Ie(R._vnode,null,null,!0):_(R._vnode||null,w,R,null,null,null,v),R._vnode=w,re||(re=!0,pf(),xp(),re=!1)},ce={p:_,um:Ie,m:Re,r:Ze,mt:ie,mc:D,pc:z,pbc:E,n:N,o:n};return{render:le,hydrate:void 0,createApp:X_(le)}}function rl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function tx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kp(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ri(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&kp(o,a)),a.type===Ua&&(a.el=o.el)}}function nx(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Hp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}function Sf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const ix=Symbol.for("v-scx"),sx=()=>Dn(ix);function Gs(n,e,t){return zp(n,e,t)}function zp(n,e,t=dt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Gt({},t),l=e&&i||!e&&r!=="post";let c;if(Jr){if(r==="sync"){const d=sx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Vn,d.resume=Vn,d.pause=Vn,d}}const u=Ot;a.call=(d,g,_)=>Wn(d,u,g,_);let f=!1;r==="post"?a.scheduler=d=>{cn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Tu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=x_(n,e,a);return Jr&&(c?c.push(h):l&&h()),h}function rx(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Vp(i,n):()=>i[n]:n.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,t=e);const o=oo(this),a=zp(s,r.bind(i),t);return o(),a}function Vp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const ox=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Sn(e)}Modifiers`]||n[`${Hi(e)}Modifiers`];function ax(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let s=t;const r=e.startsWith("update:"),o=r&&ox(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map($l)));let a,l=i[a=$a(e)]||i[a=$a(Sn(e))];!l&&r&&(l=i[a=$a(Hi(e))]),l&&Wn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Wn(c,n,6,s)}}function Gp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Gp(c,e,!0);u&&(a=!0,Gt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xt(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>o[l]=null):Gt(o,r),xt(n)&&i.set(n,o),o)}function Da(n,e){return!n||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,Hi(e))||lt(n,e))}function Mf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ha(n);let p,b;try{if(t.shapeFlag&4){const y=s||i,C=y;p=Hn(c.call(C,y,u,f,d,h,g)),b=a}else{const y=e;p=Hn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),b=e.props?a:lx(a)}}catch(y){Fr.length=0,Pa(y,n,1),p=Lt(ds)}let M=p;if(b&&_!==!1){const y=Object.keys(b),{shapeFlag:C}=M;y.length&&C&7&&(r&&y.some(hu)&&(b=cx(b,r)),M=Ks(M,b,!1,!0))}return t.dirs&&(M=Ks(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Au(M,t.transition),p=M,ha(m),p}const lx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ta(t))&&((e||(e={}))[t]=n[t]);return e},cx=(n,e)=>{const t={};for(const i in n)(!hu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ux(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ef(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Da(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ef(i,o,c):!0:!!o;return!1}function Ef(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Da(t,r))return!0}return!1}function fx({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wp=n=>n.__isSuspense;function hx(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):S_(n)}const xn=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),ds=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),Fr=[];let un=null;function gt(n=!1){Fr.push(un=n?null:[])}function dx(){Fr.pop(),un=Fr[Fr.length-1]||null}let Kr=1;function Tf(n,e=!1){Kr+=n,n<0&&un&&e&&(un.hasOnce=!0)}function Xp(n){return n.dynamicChildren=Kr>0?un||ks:null,dx(),Kr>0&&un&&un.push(n),n}function vt(n,e,t,i,s,r){return Xp(tt(n,e,t,i,s,r,!0))}function ac(n,e,t,i,s){return Xp(Lt(n,e,t,i,s,!0))}function ma(n){return n?n.__v_isVNode===!0:!1}function _r(n,e){return n.type===e.type&&n.key===e.key}const jp=({key:n})=>n??null,Jo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||bt(n)||Ve(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function tt(n,e=null,t=null,i=0,s=null,r=n===xn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jp(e),ref:e&&Jo(e),scopeId:yp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return a?(Pu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Kr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Lt=px;function px(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===O_)&&(n=ds),ma(n)){const a=Ks(n,e,!0);return t&&Pu(a,t),Kr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(bx(n)&&(n=n.__vccOpts),e){e=mx(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Wr(a)),xt(l)&&(Mu(l)&&!Fe(l)&&(l=Gt({},l)),e.style=mu(l))}const o=Rt(n)?1:Wp(n)?128:E_(n)?64:xt(n)?4:Ve(n)?2:0;return tt(n,e,t,i,s,o,r,!0)}function mx(n){return n?Mu(n)||Lp(n)?Gt({},n):n:null}function Ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?gx(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jp(c),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Jo(e)):[r,Jo(e)]:Jo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ks(n.ssContent),ssFallback:n.ssFallback&&Ks(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Au(u,l.clone(u)),u}function Cu(n=" ",e=0){return Lt(Ua,null,n,e)}function qp(n,e){const t=Lt(Yo,null,n);return t.staticCount=e,t}function Yr(n="",e=!1){return e?(gt(),ac(ds,null,n)):Lt(ds,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Lt(ds):Fe(n)?Lt(xn,null,n.slice()):ma(n)?Ri(n):Lt(Ua,null,String(n))}function Ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ks(n)}function Pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Lp(e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[Cu(e)]):t=8);n.children=e,n.shapeFlag|=t}function gx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Wr([e.class,i.class]));else if(s==="style")e.style=mu([e.style,i.style]);else if(Ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Fn(n,e,t,i=null){Wn(n,e,7,[t,i])}const _x=Cp();let xx=0;function vx(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||_x,r={uid:xx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(i,s),emitsOptions:Gp(i,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ax.bind(null,r),n.ce&&n.ce(r),r}let Ot=null,ga,lc;{const n=Ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ga=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),lc=e("__VUE_SSR_SETTERS__",t=>Jr=t)}const oo=n=>{const e=Ot;return ga(n),n.scope.on(),()=>{n.scope.off(),ga(e)}},bf=()=>{Ot&&Ot.scope.off(),ga(null)};function Kp(n){return n.vnode.shapeFlag&4}let Jr=!1;function yx(n,e=!1,t=!1){e&&lc(e);const{props:i,children:s}=n.vnode,r=Kp(n);q_(n,i,r,e),Z_(n,s,t);const o=r?Sx(n,e):void 0;return e&&lc(!1),o}function Sx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,B_);const{setup:i}=t;if(i){zi();const s=n.setupContext=i.length>1?Ex(n):null,r=oo(n),o=ro(i,n,0,[n.props,s]),a=Vd(o);if(Vi(),r(),(a||n.sp)&&!Nr(n)&&Mp(n),a){if(o.then(bf,bf),e)return o.then(l=>{Af(n,l)}).catch(l=>{Pa(l,n,0)});n.asyncDep=o}else Af(n,o)}else Yp(n)}function Af(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=mp(e)),Yp(n)}function Yp(n,e,t){const i=n.type;n.render||(n.render=i.render||Vn);{const s=oo(n);zi();try{k_(n)}finally{Vi(),s()}}}const Mx={get(n,e){return Ht(n,"get",""),n[e]}};function Ex(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Mx),slots:n.slots,emit:n.emit,expose:e}}function Na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(mp(Eu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function Tx(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function bx(n){return Ve(n)&&"__vccOpts"in n}const Tt=(n,e)=>g_(n,e,Jr);function Jp(n,e,t){const i=arguments.length;return i===2?xt(e)&&!Fe(e)?ma(e)?Lt(n,null,[e]):Lt(n,e):Lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ma(t)&&(t=[t]),Lt(n,e,t))}const Ax="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const wf=typeof window<"u"&&window.trustedTypes;if(wf)try{cc=wf.createPolicy("vue",{createHTML:n=>n})}catch{}const Zp=cc?n=>cc.createHTML(n):n=>n,wx="http://www.w3.org/2000/svg",Rx="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,Rf=ai&&ai.createElement("template"),Cx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ai.createElementNS(wx,n):e==="mathml"?ai.createElementNS(Rx,n):t?ai.createElement(n,{is:t}):ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Rf.innerHTML=Zp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Rf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Px=Symbol("_vtc");function Ix(n,e,t){const i=n[Px];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Cf=Symbol("_vod"),Lx=Symbol("_vsh"),Dx=Symbol(""),Ux=/(^|;)\s*display\s*:/;function Nx(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Zo(i,a,"")}else for(const o in e)t[o]==null&&Zo(i,o,"");for(const o in t)o==="display"&&(r=!0),Zo(i,o,t[o])}else if(s){if(e!==t){const o=i[Dx];o&&(t+=";"+o),i.cssText=t,r=Ux.test(t)}}else e&&n.removeAttribute("style");Cf in n&&(n[Cf]=r?i.display:"",n[Lx]&&(i.display="none"))}const Pf=/\s*!important$/;function Zo(n,e,t){if(Fe(t))t.forEach(i=>Zo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ox(n,e);Pf.test(t)?n.setProperty(Hi(i),t.replace(Pf,""),"important"):n[i]=t}}const If=["Webkit","Moz","ms"],ol={};function Ox(n,e){const t=ol[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return ol[e]=i;i=wa(i);for(let s=0;s<If.length;s++){const r=If[s]+i;if(r in n)return ol[e]=r}return e}const Lf="http://www.w3.org/1999/xlink";function Df(n,e,t,i,s,r=Vg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Lf,e.slice(6,e.length)):n.setAttributeNS(Lf,e,t):t==null||r&&!jd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ki(t)?String(t):t)}function Uf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=jd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Os(n,e,t,i){n.addEventListener(e,t,i)}function Fx(n,e,t,i){n.removeEventListener(e,t,i)}const Nf=Symbol("_vei");function Bx(n,e,t,i,s=null){const r=n[Nf]||(n[Nf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=kx(e);if(i){const c=r[e]=Vx(i,s);Os(n,a,c,l)}else o&&(Fx(n,a,o,l),r[e]=void 0)}}const Of=/(?:Once|Passive|Capture)$/;function kx(n){let e;if(Of.test(n)){e={};let i;for(;i=n.match(Of);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hi(n.slice(2)),e]}let al=0;const Hx=Promise.resolve(),zx=()=>al||(Hx.then(()=>al=0),al=Date.now());function Vx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Wn(Gx(i,t.value),e,5,[i])};return t.value=n,t.attached=zx(),t}function Gx(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ff=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Wx=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Ix(n,i,o):e==="style"?Nx(n,t,i):Ta(e)?hu(e)||Bx(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xx(n,e,i,o))?(Uf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Df(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?Uf(n,Sn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Df(n,e,i,o))};function Xx(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ff(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ff(e)&&Rt(t)?!1:e in n}const Bf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>jo(e,t):e};function jx(n){n.target.composing=!0}function kf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ll=Symbol("_assign"),$o={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[ll]=Bf(s);const r=i||s.props&&s.props.type==="number";Os(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=$l(a)),n[ll](a)}),t&&Os(n,"change",()=>{n.value=n.value.trim()}),e||(Os(n,"compositionstart",jx),Os(n,"compositionend",kf),Os(n,"change",kf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ll]=Bf(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?$l(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},qx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Kx=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Hi(s.key);if(e.some(o=>o===r||qx[o]===r))return n(s)})},Yx=Gt({patchProp:Wx},Cx);let Hf;function Jx(){return Hf||(Hf=Q_(Yx))}const Zx=(...n)=>{const e=Jx().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Qx(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,$x(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $x(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qx(n){return Rt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof document<"u";function $p(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ev(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$p(n.default)}const at=Object.assign;function cl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Nn(s)?s.map(n):n(s)}return t}const Br=()=>{},Nn=Array.isArray,Qp=/#/g,tv=/&/g,nv=/\//g,iv=/=/g,sv=/\?/g,em=/\+/g,rv=/%5B/g,ov=/%5D/g,tm=/%5E/g,av=/%60/g,nm=/%7B/g,lv=/%7C/g,im=/%7D/g,cv=/%20/g;function Iu(n){return encodeURI(""+n).replace(lv,"|").replace(rv,"[").replace(ov,"]")}function uv(n){return Iu(n).replace(nm,"{").replace(im,"}").replace(tm,"^")}function uc(n){return Iu(n).replace(em,"%2B").replace(cv,"+").replace(Qp,"%23").replace(tv,"%26").replace(av,"`").replace(nm,"{").replace(im,"}").replace(tm,"^")}function fv(n){return uc(n).replace(iv,"%3D")}function hv(n){return Iu(n).replace(Qp,"%23").replace(sv,"%3F")}function dv(n){return n==null?"":hv(n).replace(nv,"%2F")}function Zr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const pv=/\/$/,mv=n=>n.replace(pv,"");function ul(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=vv(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Zr(o)}}function gv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function zf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _v(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ys(e.matched[i],t.matched[s])&&sm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ys(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!xv(n[t],e[t]))return!1;return!0}function xv(n,e){return Nn(n)?Vf(n,e):Nn(e)?Vf(e,n):n===e}function Vf(n,e){return Nn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function vv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $r;(function(n){n.pop="pop",n.push="push"})($r||($r={}));var kr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(kr||(kr={}));function yv(n){if(!n)if(Fs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mv(n)}const Sv=/^[^#]+#/;function Mv(n,e){return n.replace(Sv,"#")+e}function Ev(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function Tv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Ev(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gf(n,e){return(history.state?history.state.position-e:-1)+n}const fc=new Map;function bv(n,e){fc.set(n,e)}function Av(n){const e=fc.get(n);return fc.delete(n),e}let wv=()=>location.protocol+"//"+location.host;function rm(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),zf(l,"")}return zf(t,n)+i+s}function Rv(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=rm(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:$r.pop,direction:m?m>0?kr.forward:kr.back:kr.unknown})})};function l(){o=t.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(at({},h.state,{scroll:Oa()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Wf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Oa():null}}function Cv(n){const{history:e,location:t}=window,i={value:rm(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:wv()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=at({},e.state,Wf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=at({},s.value,e.state,{forward:l,scroll:Oa()});r(u.current,u,!0);const f=at({},Wf(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Pv(n){n=yv(n);const e=Cv(n),t=Rv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=at({location:"",base:n,go:i,createHref:Mv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Iv(n){return typeof n=="string"||n&&typeof n=="object"}function om(n){return typeof n=="string"||typeof n=="symbol"}const am=Symbol("");var Xf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Xf||(Xf={}));function Js(n,e){return at(new Error,{type:n,[am]:!0},e)}function Qn(n,e){return n instanceof Error&&am in n&&(e==null||!!(n.type&e))}const jf="[^/]+?",Lv={sensitive:!1,strict:!1,start:!0,end:!0},Dv=/[.+*?^${}()[\]/\\]/g;function Uv(n,e){const t=at({},Lv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Dv,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;r.push({name:g,repeatable:_,optional:m});const b=p||jf;if(b!==jf){d+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let M=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,d+=20,m&&(d+=-8),_&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Nn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Nn(p)?p.join("/"):p;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Nv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Nv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(qf(i))return 1;if(qf(s))return-1}return s.length-i.length}function qf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Ov={type:0,value:""},Fv=/[a-zA-Z0-9_]/;function Bv(n){if(!n)return[[]];if(n==="/")return[[Ov]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Fv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function kv(n,e,t){const i=Uv(Bv(n.path),t),s=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hv(n,e){const t=[],i=new Map;e=Zf({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,d){const g=!d,_=Yf(f);_.aliasOf=d&&d.record;const m=Zf(e,f),p=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of y)p.push(Yf(at({},_,{components:d?d.record.components:_.components,path:C,aliasOf:d?d.record:_})))}let b,M;for(const y of p){const{path:C}=y;if(h&&C[0]!=="/"){const I=h.record.path,P=I[I.length-1]==="/"?"":"/";y.path=h.record.path+(C&&P+C)}if(b=kv(y,h,m),d?d.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),g&&f.name&&!Jf(b)&&o(f.name)),cm(b)&&l(b),_.children){const I=_.children;for(let P=0;P<I.length;P++)r(I[P],b,d&&d.children[P])}d=d||b}return M?()=>{o(M)}:Br}function o(f){if(om(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Gv(f,t);t.splice(h,0,f),f.record.name&&!Jf(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Js(1,{location:f});m=d.record.name,g=at(Kf(h.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Kf(f.params,d.keys.map(M=>M.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(M=>M.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(M=>M.re.test(h.path)),!d)throw Js(1,{location:f,currentLocation:h});m=d.record.name,g=at({},h.params,f.params),_=d.stringify(g)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:_,params:g,matched:p,meta:Vv(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Kf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Yf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:zv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Jf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Vv(n){return n.reduce((e,t)=>at(e,t.meta),{})}function Zf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Gv(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;lm(n,e[r])<0?i=r:t=r+1}const s=Wv(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Wv(n){let e=n;for(;e=e.parent;)if(cm(e)&&lm(n,e)===0)return e}function cm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Xv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(em," "),o=r.indexOf("="),a=Zr(o<0?r:r.slice(0,o)),l=o<0?null:Zr(r.slice(o+1));if(a in e){let c=e[a];Nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $f(n){let e="";for(let t in n){const i=n[t];if(t=fv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Nn(i)?i.map(r=>r&&uc(r)):[i&&uc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function jv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Nn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const qv=Symbol(""),Qf=Symbol(""),Lu=Symbol(""),Du=Symbol(""),hc=Symbol("");function xr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ci(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Js(4,{from:t,to:e})):h instanceof Error?l(h):Iv(h)?l(Js(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function fl(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($p(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ci(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ev(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ci(d,t,i,o,a,s)()}))}}return r}function eh(n){const e=Dn(Lu),t=Dn(Du),i=Tt(()=>{const l=zs(n.to);return e.resolve(l)}),s=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ys.bind(null,u));if(h>-1)return h;const d=th(l[c-2]);return c>1&&th(u)===d&&f[f.length-1].path!==d?f.findIndex(Ys.bind(null,l[c-2])):h}),r=Tt(()=>s.value>-1&&$v(t.params,i.value.params)),o=Tt(()=>s.value>-1&&s.value===t.matched.length-1&&sm(t.params,i.value.params));function a(l={}){if(Zv(l)){const c=e[zs(n.replace)?"replace":"push"](zs(n.to)).catch(Br);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Kv(n){return n.length===1?n[0]:n}const Yv=Sp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eh,setup(n,{slots:e}){const t=so(eh(n)),{options:i}=Dn(Lu),s=Tt(()=>({[nh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[nh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&Kv(e.default(t));return n.custom?r:Jp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Jv=Yv;function Zv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $v(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Nn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function th(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const nh=(n,e,t)=>n??e??t,Qv=Sp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Dn(hc),s=Tt(()=>n.route||i.value),r=Dn(Qf,0),o=Tt(()=>{let c=zs(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Tt(()=>s.value.matched[o.value]);Ko(Qf,Tt(()=>o.value+1)),Ko(qv,a),Ko(hc,s);const l=wn();return Gs(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ys(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return ih(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Jp(h,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ih(t.default,{Component:m,route:c})||m}}});function ih(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const e0=Qv;function t0(n){const e=Hv(n.routes,n),t=n.parseQuery||Xv,i=n.stringifyQuery||$f,s=n.history,r=xr(),o=xr(),a=xr(),l=c_(xi);let c=xi;Fs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cl.bind(null,N=>""+N),f=cl.bind(null,dv),h=cl.bind(null,Zr);function d(N,re){let le,ce;return om(N)?(le=e.getRecordMatcher(N),ce=re):ce=N,e.addRoute(ce,le)}function g(N){const re=e.getRecordMatcher(N);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,re){if(re=at({},re||l.value),typeof N=="string"){const v=ul(t,N,re.path),ne=e.resolve({path:v.path},re),Y=s.createHref(v.fullPath);return at(v,ne,{params:h(ne.params),hash:Zr(v.hash),redirectedFrom:void 0,href:Y})}let le;if(N.path!=null)le=at({},N,{path:ul(t,N.path,re.path).path});else{const v=at({},N.params);for(const ne in v)v[ne]==null&&delete v[ne];le=at({},N,{params:f(v)}),re.params=f(re.params)}const ce=e.resolve(le,re),Ue=N.hash||"";ce.params=u(h(ce.params));const w=gv(i,at({},N,{hash:uv(Ue),path:ce.path})),R=s.createHref(w);return at({fullPath:w,hash:Ue,query:i===$f?jv(N.query):N.query||{}},ce,{redirectedFrom:void 0,href:R})}function b(N){return typeof N=="string"?ul(t,N,l.value.path):at({},N)}function M(N,re){if(c!==N)return Js(8,{from:re,to:N})}function y(N){return P(N)}function C(N){return y(at(b(N),{replace:!0}))}function I(N){const re=N.matched[N.matched.length-1];if(re&&re.redirect){const{redirect:le}=re;let ce=typeof le=="function"?le(N):le;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),at({query:N.query,hash:N.hash,params:ce.path!=null?{}:N.params},ce)}}function P(N,re){const le=c=p(N),ce=l.value,Ue=N.state,w=N.force,R=N.replace===!0,v=I(le);if(v)return P(at(b(v),{state:typeof v=="object"?at({},Ue,v.state):Ue,force:w,replace:R}),re||le);const ne=le;ne.redirectedFrom=re;let Y;return!w&&_v(i,ce,le)&&(Y=Js(16,{to:ne,from:ce}),Re(ce,ce,!0,!1)),(Y?Promise.resolve(Y):E(ne,ce)).catch(X=>Qn(X)?Qn(X,2)?X:Se(X):z(X,ne,ce)).then(X=>{if(X){if(Qn(X,2))return P(at({replace:R},b(X.to),{state:typeof X.to=="object"?at({},Ue,X.to.state):Ue,force:w}),re||ne)}else X=$(ne,ce,!0,R,Ue);return U(ne,ce,X),X})}function D(N,re){const le=M(N,re);return le?Promise.reject(le):Promise.resolve()}function A(N){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(N):N()}function E(N,re){let le;const[ce,Ue,w]=n0(N,re);le=fl(ce.reverse(),"beforeRouteLeave",N,re);for(const v of ce)v.leaveGuards.forEach(ne=>{le.push(Ci(ne,N,re))});const R=D.bind(null,N,re);return le.push(R),Me(le).then(()=>{le=[];for(const v of r.list())le.push(Ci(v,N,re));return le.push(R),Me(le)}).then(()=>{le=fl(Ue,"beforeRouteUpdate",N,re);for(const v of Ue)v.updateGuards.forEach(ne=>{le.push(Ci(ne,N,re))});return le.push(R),Me(le)}).then(()=>{le=[];for(const v of w)if(v.beforeEnter)if(Nn(v.beforeEnter))for(const ne of v.beforeEnter)le.push(Ci(ne,N,re));else le.push(Ci(v.beforeEnter,N,re));return le.push(R),Me(le)}).then(()=>(N.matched.forEach(v=>v.enterCallbacks={}),le=fl(w,"beforeRouteEnter",N,re,A),le.push(R),Me(le))).then(()=>{le=[];for(const v of o.list())le.push(Ci(v,N,re));return le.push(R),Me(le)}).catch(v=>Qn(v,8)?v:Promise.reject(v))}function U(N,re,le){a.list().forEach(ce=>A(()=>ce(N,re,le)))}function $(N,re,le,ce,Ue){const w=M(N,re);if(w)return w;const R=re===xi,v=Fs?history.state:{};le&&(ce||R?s.replace(N.fullPath,at({scroll:R&&v&&v.scroll},Ue)):s.push(N.fullPath,Ue)),l.value=N,Re(N,re,le,R),Se()}let V;function ie(){V||(V=s.listen((N,re,le)=>{if(!pe.listening)return;const ce=p(N),Ue=I(ce);if(Ue){P(at(Ue,{replace:!0,force:!0}),ce).catch(Br);return}c=ce;const w=l.value;Fs&&bv(Gf(w.fullPath,le.delta),Oa()),E(ce,w).catch(R=>Qn(R,12)?R:Qn(R,2)?(P(at(b(R.to),{force:!0}),ce).then(v=>{Qn(v,20)&&!le.delta&&le.type===$r.pop&&s.go(-1,!1)}).catch(Br),Promise.reject()):(le.delta&&s.go(-le.delta,!1),z(R,ce,w))).then(R=>{R=R||$(ce,w,!1),R&&(le.delta&&!Qn(R,8)?s.go(-le.delta,!1):le.type===$r.pop&&Qn(R,20)&&s.go(-1,!1)),U(ce,w,R)}).catch(Br)}))}let oe=xr(),q=xr(),te;function z(N,re,le){Se(N);const ce=q.list();return ce.length?ce.forEach(Ue=>Ue(N,re,le)):console.error(N),Promise.reject(N)}function ge(){return te&&l.value!==xi?Promise.resolve():new Promise((N,re)=>{oe.add([N,re])})}function Se(N){return te||(te=!N,ie(),oe.list().forEach(([re,le])=>N?le(N):re()),oe.reset()),N}function Re(N,re,le,ce){const{scrollBehavior:Ue}=n;if(!Fs||!Ue)return Promise.resolve();const w=!le&&Av(Gf(N.fullPath,0))||(ce||!le)&&history.state&&history.state.scroll||null;return Ia().then(()=>Ue(N,re,w)).then(R=>R&&Tv(R)).catch(R=>z(R,N,re))}const Ie=N=>s.go(N);let Ze;const se=new Set,pe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:y,replace:C,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:ge,install(N){const re=this;N.component("RouterLink",Jv),N.component("RouterView",e0),N.config.globalProperties.$router=re,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>zs(l)}),Fs&&!Ze&&l.value===xi&&(Ze=!0,y(s.location).catch(Ue=>{}));const le={};for(const Ue in xi)Object.defineProperty(le,Ue,{get:()=>l.value[Ue],enumerable:!0});N.provide(Lu,re),N.provide(Du,hp(le)),N.provide(hc,l);const ce=N.unmount;se.add(N),N.unmount=function(){se.delete(N),se.size<1&&(c=xi,V&&V(),V=null,l.value=xi,Ze=!1,te=!1),ce()}}};function Me(N){return N.reduce((re,le)=>re.then(()=>A(le)),Promise.resolve())}return pe}function n0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ys(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ys(c,l))||s.push(l))}return[t,i,s]}function i0(n){return Dn(Du)}const s0=""+new URL("long_avrame_logo-BYaz6cu2.png",import.meta.url).href,um=""+new URL("help_icon-BOAbaq6e.png",import.meta.url).href,Fa=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},r0={},o0={class:"navbar home-navbar"};function a0(n,e){return gt(),vt("nav",o0,e[0]||(e[0]=[qp('<div class="left-section" data-v-7bfcc847><img src="'+s0+'" alt="Logo" class="big-logo" data-v-7bfcc847></div><div class="right-section" data-v-7bfcc847><button class="nav-btn" data-v-7bfcc847>Log In</button><button class="icon-btn" data-v-7bfcc847><img src="'+um+'" alt="Help" data-v-7bfcc847></button></div>',2)]))}const l0=Fa(r0,[["render",a0],["__scopeId","data-v-7bfcc847"]]),c0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABfCAYAAAAEY4K0AAAAAXNSR0IArs4c6QAAC/tJREFUeF7tnXlQFFcex78MIAhDAgKKiCesi1d0oxV1EVFLjTHBezWlmBAride6ioiRpDAkQQOCGE3KK65ivBDdZKNJBKNCRCEEIyiKaBQVBwiHcs4AA8NsvQljEVft34w90z1T01X81b/u9/r36c/8Xr8+sIJlEXUGrETdO0vnYAEk8pPAAsgCSOQZEHn3LAZZAIk8AyLvnsUgCyCRZ0Dk3bMYZAEkSAa0J55akNZ5bNQcDbL1ckXn3p7wyb2DK3V1qALQymPOjLorswLk5AS3TYsQ+8ZEBLeq0SorR9EHuxB+OA1JpgrJbAC5uOD5tXPxydJpWNb+FK+sQcWCWAQnZ+EHo576PDVmLoBs/PpjROpmpD+aF2ZSQREKAkIxqqZG83NnUotZAHruOXTaFYIvp43CjMdlv0aOmvX78cmmo9hoUnQAs5jNfqI9WhjMohtFKPA3QYtM3iAue7SQ2lkUD8Bkht+mDojTnvYWFRTh2uiVGF1biwem8lNn0oA09qzErml+mE5JeHU9qj89gChTqkWmDIhsjxZeiwot2deQFRCCMQBaKFCFjjFZQLrao010ZS0qQz7HssNpSBQ6+ZT2TRWQ9bC+GJr+OTLYQUqsILGyoo1INRYVICtghWlYZKqArHp5oOeW5dhqawXbAb0x0O15uNlYw4ZyVpqSRaYKqD0HSe+u6B67CJtfG4FAiQQSLkjMol+u4ecxIRgHoJkrXsj15gBIk78uUnQ+HofkId74GyWhbI5uxVYsTzqDQ5R4oWLMBhAAu+l+ePXgWiRZS2DNldB2I7qxYrbInADBQwr3Ax/hiP8LCOACxNabgkVmBeihRRFIsramWZR1DT+PFXEtMjdAOltUUY2KVduw/JBIa5HZAdJadCAChynDbrGP6MwRkMaifZFIChisuRjlXJhFoVuxIjEVBzmDjRxgloD0sSgrH5ljV2I8AKWRGTy1OXMFpI9F5SHbsEJs10WmAojNDrA/lQ432zTXRdRapGyG8kwOTk/5AFPENNMtdkCsf45Onk7d7Lo6+tSXVF9pLG38HUAT5WeIzS4c/OO6aDQlvuQ+Suavw9z0PPxEiTdGjJgBWcEJroPmDI7s+Yr3UqihbqpqKL2RmL/27um7+4mQHJdMwVvxS7GZMkfXqETj8Ux8Oy8KQWKxSMyAHH3nDfzAZ0bf8PZnaouiufbqnrwV987cSaD83HV3g+fJOPzk3Q0+lDO+pBLF89djnlgsEisgibSHtJ//p+Myre1tnP6UWLVarShXFGaFnfOTy+VlhKTralHD8Qwcm7cO88UwRydWQE4D3hm8vvck738+DoCqsaX+5jfXY347en0dxSIvV3Q7uRGpPt3wFwJQlFRCFhyD+Wm5SKPEGzJGjIAk0u7S/v7R4zL+zx5tJtRQK8rqb2WtPj/KEBYplGj4PhPH5kUJb5EYAUkHvT04WjMweMrS0thSf0tXi+KQ6uNFs6i4EsVvxSBIaIvEBujJtedRWJpaJC/M+vD8KHmFnA29uRZtLfpMQrhfxCz6LgPHggSuRWIDRLJHS8LQFpVUQBa8QdhaJCZA3LXncRaVyW9lRZ73p1q0eBoWxC/GJspdV0VTWy0S0CIxAZIOendwdM+Xn157HmXUzqIort84tr5bJ3id3oS0Pp7wpsQLbZFYAGlrz8/W9jZSSuIexqjVanmp4rfUZSlDADRwbcte9AqdjjVhr+M9yrN0QtcisQCSDnp3SHTPl/s8deT2pOQ31ytr8vdeCbl35s4eLkBs0rV/D/Q7GYfTnV3QhRAPWQXuLdiAN4QY0YkBkLb2sFkD3expy666Va2qu12dc3Z1KpsU5d0ieSPkSak4tDAei9pm1ClceYkRAyCHge8Mie01qc+SZzmiZnlzdX5C3kpdLEqJw6kuLvCgtHu7FLenhmNSQTFuUOL5ihEakFVH146eY7ZMKNDXnoeTCzpa5OwM59CZWL16DtZQalGdArUJydgdug2rjGmR0IDsfGb4rvSd1389H2ccs6hgz+XQu6l3dxP2p6lFybE45dGJZlFhKQqnrsHk6yW4Ttg/LyFCArJycHPw8IsOuGDn0tGTj6NpV4vYg4sKrn0yi1bNwHvUEV2tArV7jWyRkIB4tUcLQ1eL+nmjf8p6/ChWi4QCxOzp6hcdkM2XPe1rUe3tqovpq9PYI1cki8Jm/nFdxGUcW29si4QCZBB7HlpU31xVsO/yqrunSLXIZuRAvHQiGj862MGBAqmwBLemhuNVY9QiIQC11Z4xv9q52HelJETXGFaL2ixiby7Iubb3dIJb1ELEBb2MN7lijW2REIAMak97i/L35oUSr4tsRgzA8ORonHSwp1l0qwQ3p36IwBt3UECBqm+MsQG11Z4xFwxlz8NapGptfpB/Pz0zMn0y5Qkg9rjwusXYMH8iginJrJWjdm+K4a+LjA3Iru8M35V9ebru4UqksrapIvez7Pnll8pTuGIBiNIiYwIyeO15FEJrc2tTRW55SnZ0xmyqResXIVaPWhRmqOfojAmog8/0v4b4Bg2IJpzNvIXoahH7rNl3MUh2tIcjpRM3i/Hb9PcRaKgRnfEASaXuYz/1O+fo6diXcuB8xTCLynPLUy5EZ8wB0Mi1X1aLdLGoqg5V247hi8gERBriq47GAmTj5d/j9SErhu3jSpAh1itrlOU5X2S9WXGxIpmwf80nZqgWtbai9XIhcmdGIPBeJUoI+9cpxDiAnODqHzEu5Xlv56E69Y6n4Ha1iGQRe+g+Zik2zh2veUabc7lfi8r4w4iNTUIc3xYZA5Ctl3+POULZo82ujhbZz/DHawlrsM++A+y5CDGLcm8h5x9rMYVviwwPyAlu/hHjkoWyR5tcTS3KKUu+EJP5OqUWsYfud4QhYfyLmMAFiK1nn5eJP4K4uETE8mmRoQEJWnseTWxTjbI8l16L9LJoVgSmyu6jmAKVEmNYQALXnsddF+liEXvofmcY9owfSrdoE8+1yJCARGWPFlZTdVPZpS3Zb5RfKj9JOIMFt8hwgERmjxaGSqlqKM0s+Tp3Szabc+P86qI+FvFZiwwFSJT2aCE1Pmgozvzo7CtymTyPYtGsAATuXo2vdBnR8VWLDANIpPY8tKhJJZelFe3P25nDXhAjWbQjDLsnDMVEAlBeR3SGAGTjNdpr9pDlLx2gHIxQMU33G2QZH5+dTLSo46wAvJbwHvZ3sEUHrj6z66KLN3Fx9lpMe9YRnSEAOY38ePRx1wFupE+CcR2sodarmlrksrP39udtz2H/jIPzq4t9PNHjq3AkveSL4ZQ+seuithHdBkr8k2L4BiRx7+c+aniUv2i+M/C05DCLMqPSJ9UX1V/lSqIb4DR7Ct6MW4JNlI80MYuyr+OX6f/CxEqgjmv/xgJk92LY8AOeI7rN1LdDxtyOvdJ/+0ThlusHr0ZQ2vXpDO9jG3CC+jKyrAKyNdsRmnRW8/+L9Fr4NqjjuM8nXnLwlJLeptarxzxu1Nqsavz9wu/fX4zLmkXZbefO6BIdjJigCbSHS9itiJ3HsT1iD96n7P9xMXwDcpycOLVSYmvNOcGob4f53I49/VNzsyr7XHjaSMp+2b2i8AWIXBwI0oP+dQrUJZ7BgaWbsZiyf2MAsh+1LuC0s6/r3/XtkDG3UzWqFMXnZIcub/v1bUq77u7wiF2AWOptCPYduo1HsCH+j9sQei18G2TbZ0rfZb5z+60TvUXs2z8PGoqv7c9bIzsro1wS2Pq9gBFJEfiPuzPcubKtaoUq5yZy3o5BcH4ROAchxhokaD6ANGzhiB3Ovp1GdnC0dZF0ENnPnRpqlVKlYHNyZTmlP1z98tKf/ufdkxLF3m1NeB9fBQwGexjyiQsbvdU1oO52KQr//QN27TiOrVwwn7aeb4O0bdl0H9MrqMswj0AHT0fSR4ye5SB02Vbdom6uK6q7Uppd/E1ZVsm31G17dkHvrz/Gf7niG5RoOH8F54+mIjH7BrK54rnWGwoQV7uW9cQMWAAREyVUmAWQUJkntmsBREyUUGEWQEJlntiuBRAxUUKFWQAJlXliuxZAxEQJFWYBJFTmie1aABETJVSYBZBQmSe2awFETJRQYf8DwEc7q/Mh9xcAAAAASUVORK5CYII=",u0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAADTRJREFUeJztnXuMXFUBh7/ttgilpdSYImAhQlvKy6gtRVEISqGYICrGBz6AAiIaFY0KrWg0iKAxQSvBf1SwvAKJkhCjgGALUSwURUqjltaCIqI8grYLYl87/nF2szPbmdl7z/ve+/uSk21g7tzfuXO+OfdxzhkQQgghhBBCCCFEFgymDiBEFwaBa4F9gXWJswiRFYPA9UALGAbOThtHiHxol2O0SBIh6C6HJBGC/nIklWQg9g4DMRk4BDhspMwHZgPTx5Vp5HFj4iLgmtQhMmEQuA74aIHXtoClwMqgiWrAvsDpwHcxdzm20//bJ7fyKf+HpJIU6Tmy6EmqwFHAN4C1wC7SN3IJ4oaNHO2SnBM9cYbsB3wWeJj0jVqC+MNFDkkCHAfcDuwkfWOWIH7xIUcjJRkAFgOrSd+AJUgYfMrRKElOBh4gfcOVIOEIIUftJZkN/IT0DVaChCWkHLWUZArwBeBF0jdWCRKWGHLUSpLXAetJ30glSHhiytEuydIYlfPNAHAB8DLpG2jq0gRBUshRWUmmAzeTvmHmUuouSEo5KifJfGAj6RtlTqXugryX9Me4EpIcCzxP+gOVW6m7IAPA5aQ/zs6STLbdsABLgNuAqQH30YudwGZgE/ACMDRSXhr5f6lZkzpAYFrAV0b+fWnKIBhZfzTy7+tSBmnnw8AO4n1LrAdWAGcA8zC3kUV6atOT+ORM4lT2Hsw97/2i1ErYkpsk54atbn+WELbneBJYjnkCL9IzCBxQ4HWSBFhEuCfjmzCV2iNabcREDAI3YL60Di3w+kZLMp8wd6v+BZxF2JsJojyjcrT37JKkB9OADZ7D7wK+B8yIUQFRivFySJIJKtvtYLmUDcCCkKGFNb3kkCQ9OM9z2BswPZLIj4nkkCTjOBp/Aw+3Y2SryzJEdaOoHFWWZFnpo9KHycAjnoINYabaijwpK0cVJfEqB5iFz3wEexZY6Duc8IatHFWSxLscBwBbPQR7DnN7WOSJqxxVkMS7HOBnXscQ6jlyxpccOUtySemjUoATPQTbjq45csa3HDlKEkQOgPs8hLsgVDjhTCg5cpIkmBzHewh3M7qVmyuh5chBkmByANzpGG4jZm66yI9YcqSU5OLSR6UECx3DDWNG+4r8iC1HCkmCygFwq2PA74cOKKxIJUdMSYLLMRPYZhmuhXkYODN0SFGaQeBG0skRQ5LgcgB8vGSo8eX8GCFFKXKRI6QkUeQAuL9goG7lCbSAQm7kJkcISb5Y+qhYMmeCIBOVT8QKKgqRqxw+JYkmB5i1jWwr+zSwZ8ywoi+5y+FDkqhygNuT88tihxU9qYocLpJEl2Mqbj+vPCd2YNGVqslhI8nxpY+KBxZjX7n7E+QVu1NVOcpKkoQrsK/YhQnyik6qLkf2kqzBvlIHJ8grxqiLHNlKMoCZ1GRTmc0J8oox6iZHlpIciH1FfpAgrzDUVY52SaIuJjipx393mSt+n8O2wp5BYCXmpyfqytXAltQhAD6JveWvT5C36dS952iR4DlHP1ZgX5G9E+RtMpIjAbdhV5EnU4RtMJIjEXdjV5lVKcI2lEHgJtI34MbJAfAAdhX6aYqwDURyJOaP2FXqxwmyNg3JkQFPYlexq1OEbRCSIxNewK5yV6YI2xAkR0b8B7sKXp4ibAOQHJkhQfJBcmSIBMkDyZEpEiQ9kiNjJEhaJEfmSJB0SI4KIEHSIDkqggSJTxPkiLYcaGgkSFwkR8WQIPGQHBVEgsRhMpKjkkiQ8EiOCiNBwiI5Ko4ECYfkqAESJAySoyZIEP9IjhohQfwiOWqGBPGH5KghEsQPkqOmSBB3JEeNkSBuSI6aI0HskRwNQILYITkaggQpTxPkuMTb0ao4EqQckqNhSJDiSI4GIkGKMQDcQPoGLDkC0es3CkUxWsDqkb91ZBnwrdQhckQ9SDnOBYZJ/22vniMSEqQ8dZJEckyABLGjDpJIjgJIEHuqLInkKIgE6WQScA3w5oKvr6IkkqMEEmSMScBKTP22UE9JJEdJJMgYl9JZx7pJIjkskCBjrGb3etZFEslhiQQxTAK20r2uVZdEchRgcuoAmXMEML3H/9sHuBM4FVgzwftcO/L3h5jhKampyxPyhcBpltteAWy33bF6EMN5TFznqvUkdeo5LsT+OEwrsgONxerPsQVeM9qTvKnAa68Fzsd8QClYTj16jmhIkP4UEQSMJHeRtyTLgW9G3mdt0SkW7A3spFz9t1BMEoh7urXM5gBUAJ1iJWQB5sdtypBjT6KewwEJ0puip1fjyUkSyeGIBOmNrSCQhySSwwMSpDeLHLdPKYnkCEzTL9L3x98FcuwL97pekHdDF+mJcDm9Gs9oT1LkPV17EvUcnpEg3fEpCBhJflnwfW0lkRwBkCDd8S0IhJVEckSmydcg/Ubw+romKSpgkWuSJl1zjEfXIAk4nN4jeH3gsydRzxEYCbI7IU6vxuNDEskRAQmyOzEEATdJJEckNGFqd2IJAmO3gJcAD07w2tFJV7OQHNGQIJ1MBY6KvM8ZlJdEREKnWJ3YjOD1wagkMXsvUQAJ0knKBipJMkSCdJK6cUqSzJAgnbiO4PWBJMkICTLGq4GDUocYYQZwXOoQQoK0k9M39nLgO6lDCN3mbSelIC1gI+Y27x3ALQmziDYkyBgxBXkeI8NoeQj4d8T9i4JIEMMkzDKWIfgf8AfGZFgLPB5oX8IzEsQwHzPsw5UWsInO3mEdsMPDe4sESBCD7emVTpVqjgQxFBFkG52nSg+iU6XaI0EM4wVpP1Vay9ipkvVy+aKaSBDYC/OQ8Bd0XkjrVElIEMxdpv1ThxB5oifp4dbFFTVAggjRBwkiRB8kiBB96CXIsOX7pZiuKpqLS3sr1MZ7CfKi5U4LrVYnhCdsF/gbBl4u8sJeggxZ7jjkioRCjMd2/Nzo0rITIkFElbFtb4Xbt29BZlpuJ4QNtu3NWZCtljueY7mdEDbMtdzOWZCnLHc8G/P74kKEZgAzj8eGvxd9YS9BHrPcMdhbLUQZ9sP+Ir1w++4lyAbLHUP8tW1FMznSYdvC7TtED3KCw7ZCFOVEh21d2jdgzu+GsPtpq7+47lyIAtyP/c+v+Vh/gN86BDjYRwAhejANsxCGTdv8a5kd9RuseG+5zB28w2FbISZiMfaT/VaXeXE/QVZZBgD4iMO2QkyES/tyadcdTMWs5GF7mnWoryBCtDETt3b5mjI769eD/BdYUy57B2c5bCtEL94P7GG57UbsH4J35cvYm/o0sKfPMKLxTALWY98mr/Ed6FCHMC3gQt+BRKN5N27t8a0hQv3GIdATwJQQoUTjGAB+h31bfHzkPbxzgUOoFnBuiFCicZyGWzv8WqhgMzGLq9kGewbNExFu7IkZoeEiSNCpGLc4hvN+cSQaxVdxa3+/Dh1wgWPAYeCY0CFFLZmD2xlMC3hnjKB3OIZ8DM1ZF+XYA7OQuEu7e4RAF+fjeYtj0BZwU6ywohZchXube1/MwPd6CPyxmIFFZXkX7m1tA5EXMzzBQ+jtwEkxQ4vKsQD7+Ujt5YOxg4M5TXINPgS8MXZwUQnmAs/i3sZWkeh0fn9gS8mw3cqzwLzI2UXeHIB54u3atnYAh0fO3sGnu4SyKc+gnkQY5mKGJvloV1dGzr4bk4GH8VOZrcDb48YXmbEQP6dVLeBvZLI225GYOSM+KrUNM2ZLt4Cbx3vwc0HeAnaR2ao6S/FTsdFyPfoJhabwCmAFftvPl6LWoAADwEr8VvLPwBtiVkJEZx7wEH7bzV1k+otp0zCN2mdld2G+XWZErIcIz1Tg67jNKe9WngZmRaxHaeYBz+G30i3gn5i57fppt2ozgLnWeAL/beQlYFG8qthzDOan23wfgBZmsv1SNDuxagxiFllYR5h2sQM4NVptPHAKZihJiIPRwqyKdwkll24R0ZkFfAYzFipUW2hR0fXXzsTM/wh5YIaBe4Czyfzcs0G8EvgA8DPslwUtUz4fp1ph+BBxDtJoWY+5qD8D80TWdllKUYxB4BDMPPFvA78n/Jdie/lc+CoaQj6YOwW4jTRPNXcAm4FNwAuYp/VDI2VngjxVZRBzl3IfzGS3mZgZfnMxzzFisxM4BzNgthYsIszdLZXmlReBJdSQwwh/saZS7/IUNV/TYDpwI+kPtEr1ys+BV9EABoDzgJdJf9BV8i87gYvJdPhISI4GHiX9B6CSb3kcs0hIY5mCuY/ta5izSj3KNuAyYC8EAAcCt5L+g1FJX+7C3D4WXViM+bGe1B+SSvzyKOYBrybLTcAAZurtKtJ/aCrhy1rgdBp4Ee6D44DbMXcyUn+QKv7KMHA3cDLqMbwwC7gIM9Yn9YerYl/+BCwDZlMxqmTxkZhBkIsxq2Coa86bdcCvgJsZWwGnclRJkHZmYFavOAl4G3AEGsGbkmHMpLbVmGvIe4HnUwbyRVUFGc8U4LWYcV/zR/4ehBniss+4v+p5itNibBR0+4jof2DG1z028ncz5hmGEEIIIYQQQgghRBj+DwqMOYE3Ut55AAAAAElFTkSuQmCC",f0=""+new URL("download_icon-CJog9AWk.png",import.meta.url).href,h0={class:"navbar"},d0={class:"left-section"},p0={class:"editable-title"},m0={key:0},g0={__name:"NavBar",setup(n){const e=wn("My Project"),t=wn(!1),i=()=>{t.value=!t.value};return(s,r)=>{const o=wu("router-link");return gt(),vt("nav",h0,[tt("div",d0,[Lt(o,{to:"/"},{default:bu(()=>r[1]||(r[1]=[tt("img",{src:c0,alt:"Logo",class:"logo"},null,-1)])),_:1}),tt("div",p0,[t.value?Yr("",!0):(gt(),vt("span",m0,_n(e.value),1)),t.value?qo((gt(),vt("input",{key:1,"onUpdate:modelValue":r[0]||(r[0]=a=>e.value=a),type:"text",onBlur:i,onKeyup:Kx(i,["enter"])},null,544)),[[$o,e.value]]):Yr("",!0),tt("img",{src:u0,position:"absolute",alt:"Modify Title",onClick:i,class:"modify-icon"})])]),r[2]||(r[2]=qp('<div class="right-section" data-v-083c0f0d><button class="icon-btn" data-v-083c0f0d><img src="'+f0+'" alt="Save" data-v-083c0f0d></button><button class="icon-btn" data-v-083c0f0d><img src="'+um+'" alt="Help" data-v-083c0f0d></button></div>',1))])}}},_0=Fa(g0,[["__scopeId","data-v-083c0f0d"]]),x0={__name:"AppNavBar",setup(n){const e=i0(),t=Tt(()=>e.path==="/");return(i,s)=>(gt(),vt("div",null,[t.value?(gt(),ac(l0,{key:0})):(gt(),ac(_0,{key:1}))]))}},v0={id:"app"},y0={__name:"App",setup(n){return(e,t)=>{const i=wu("router-view");return gt(),vt("div",v0,[Lt(x0),Lt(i)])}}},S0={},M0={class:"home-container"};function E0(n,e){const t=wu("router-link");return gt(),vt("div",null,[tt("div",M0,[e[1]||(e[1]=tt("h2",null,"Welcome to House Configurator",-1)),e[2]||(e[2]=tt("p",null,"Customize your home designs with ease!",-1)),Lt(t,{to:"/project",class:"start-button"},{default:bu(()=>e[0]||(e[0]=[Cu("Start New Project")])),_:1})])])}const T0=Fa(S0,[["render",E0],["__scopeId","data-v-e5195cac"]]);function fm(n,e){return function(){return n.apply(e,arguments)}}const{toString:b0}=Object.prototype,{getPrototypeOf:Uu}=Object,Ba=(n=>e=>{const t=b0.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),On=n=>(n=n.toLowerCase(),e=>Ba(e)===n),ka=n=>e=>typeof e===n,{isArray:lr}=Array,Qr=ka("undefined");function A0(n){return n!==null&&!Qr(n)&&n.constructor!==null&&!Qr(n.constructor)&&hn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const hm=On("ArrayBuffer");function w0(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&hm(n.buffer),e}const R0=ka("string"),hn=ka("function"),dm=ka("number"),Ha=n=>n!==null&&typeof n=="object",C0=n=>n===!0||n===!1,Qo=n=>{if(Ba(n)!=="object")return!1;const e=Uu(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},P0=On("Date"),I0=On("File"),L0=On("Blob"),D0=On("FileList"),U0=n=>Ha(n)&&hn(n.pipe),N0=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||hn(n.append)&&((e=Ba(n))==="formdata"||e==="object"&&hn(n.toString)&&n.toString()==="[object FormData]"))},O0=On("URLSearchParams"),[F0,B0,k0,H0]=["ReadableStream","Request","Response","Headers"].map(On),z0=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ao(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),lr(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function pm(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const as=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mm=n=>!Qr(n)&&n!==as;function dc(){const{caseless:n}=mm(this)&&this||{},e={},t=(i,s)=>{const r=n&&pm(e,s)||s;Qo(e[r])&&Qo(i)?e[r]=dc(e[r],i):Qo(i)?e[r]=dc({},i):lr(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&ao(arguments[i],t);return e}const V0=(n,e,t,{allOwnKeys:i}={})=>(ao(e,(s,r)=>{t&&hn(s)?n[r]=fm(s,t):n[r]=s},{allOwnKeys:i}),n),G0=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),W0=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},X0=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Uu(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},j0=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},q0=n=>{if(!n)return null;if(lr(n))return n;let e=n.length;if(!dm(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},K0=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Uu(Uint8Array)),Y0=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},J0=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Z0=On("HTMLFormElement"),$0=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),sh=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Q0=On("RegExp"),gm=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};ao(t,(s,r)=>{let o;(o=e(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},ey=n=>{gm(n,(e,t)=>{if(hn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(hn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ty=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return lr(n)?i(n):i(String(n).split(e)),t},ny=()=>{},iy=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function sy(n){return!!(n&&hn(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const ry=n=>{const e=new Array(10),t=(i,s)=>{if(Ha(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=lr(i)?[]:{};return ao(i,(o,a)=>{const l=t(o,s+1);!Qr(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return t(n,0)},oy=On("AsyncFunction"),ay=n=>n&&(Ha(n)||hn(n))&&hn(n.then)&&hn(n.catch),_m=((n,e)=>n?setImmediate:e?((t,i)=>(as.addEventListener("message",({source:s,data:r})=>{s===as&&r===t&&i.length&&i.shift()()},!1),s=>{i.push(s),as.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",hn(as.postMessage)),ly=typeof queueMicrotask<"u"?queueMicrotask.bind(as):typeof process<"u"&&process.nextTick||_m,Z={isArray:lr,isArrayBuffer:hm,isBuffer:A0,isFormData:N0,isArrayBufferView:w0,isString:R0,isNumber:dm,isBoolean:C0,isObject:Ha,isPlainObject:Qo,isReadableStream:F0,isRequest:B0,isResponse:k0,isHeaders:H0,isUndefined:Qr,isDate:P0,isFile:I0,isBlob:L0,isRegExp:Q0,isFunction:hn,isStream:U0,isURLSearchParams:O0,isTypedArray:K0,isFileList:D0,forEach:ao,merge:dc,extend:V0,trim:z0,stripBOM:G0,inherits:W0,toFlatObject:X0,kindOf:Ba,kindOfTest:On,endsWith:j0,toArray:q0,forEachEntry:Y0,matchAll:J0,isHTMLForm:Z0,hasOwnProperty:sh,hasOwnProp:sh,reduceDescriptors:gm,freezeMethods:ey,toObjectSet:ty,toCamelCase:$0,noop:ny,toFiniteNumber:iy,findKey:pm,global:as,isContextDefined:mm,isSpecCompliantForm:sy,toJSONObject:ry,isAsyncFn:oy,isThenable:ay,setImmediate:_m,asap:ly};function We(n,e,t,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}Z.inherits(We,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const xm=We.prototype,vm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{vm[n]={value:n}});Object.defineProperties(We,vm);Object.defineProperty(xm,"isAxiosError",{value:!0});We.from=(n,e,t,i,s,r)=>{const o=Object.create(xm);return Z.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),We.call(o,n.message,e,t,i,s),o.cause=n,o.name=n.name,r&&Object.assign(o,r),o};const cy=null;function pc(n){return Z.isPlainObject(n)||Z.isArray(n)}function ym(n){return Z.endsWith(n,"[]")?n.slice(0,-2):n}function rh(n,e,t){return n?n.concat(e).map(function(s,r){return s=ym(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function uy(n){return Z.isArray(n)&&!n.some(pc)}const fy=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function za(n,e,t){if(!Z.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=Z.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!Z.isUndefined(m[_])});const i=t.metaTokens,s=t.visitor||u,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(s))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Z.isDate(g))return g.toISOString();if(!l&&Z.isBlob(g))throw new We("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(g)||Z.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let p=g;if(g&&!m&&typeof g=="object"){if(Z.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(Z.isArray(g)&&uy(g)||(Z.isFileList(g)||Z.endsWith(_,"[]"))&&(p=Z.toArray(g)))return _=ym(_),p.forEach(function(M,y){!(Z.isUndefined(M)||M===null)&&e.append(o===!0?rh([_],y,r):o===null?_:_+"[]",c(M))}),!1}return pc(g)?!0:(e.append(rh(m,_,r),c(g)),!1)}const f=[],h=Object.assign(fy,{defaultVisitor:u,convertValue:c,isVisitable:pc});function d(g,_){if(!Z.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),Z.forEach(g,function(p,b){(!(Z.isUndefined(p)||p===null)&&s.call(e,p,Z.isString(b)?b.trim():b,_,h))===!0&&d(p,_?_.concat(b):[b])}),f.pop()}}if(!Z.isObject(n))throw new TypeError("data must be an object");return d(n),e}function oh(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Nu(n,e){this._pairs=[],n&&za(n,this,e)}const Sm=Nu.prototype;Sm.append=function(e,t){this._pairs.push([e,t])};Sm.toString=function(e){const t=e?function(i){return e.call(this,i,oh)}:oh;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function hy(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mm(n,e,t){if(!e)return n;const i=t&&t.encode||hy;Z.isFunction(t)&&(t={serialize:t});const s=t&&t.serialize;let r;if(s?r=s(e,t):r=Z.isURLSearchParams(e)?e.toString():new Nu(e,t).toString(i),r){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+r}return n}class ah{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Em={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dy=typeof URLSearchParams<"u"?URLSearchParams:Nu,py=typeof FormData<"u"?FormData:null,my=typeof Blob<"u"?Blob:null,gy={isBrowser:!0,classes:{URLSearchParams:dy,FormData:py,Blob:my},protocols:["http","https","file","blob","url","data"]},Ou=typeof window<"u"&&typeof document<"u",mc=typeof navigator=="object"&&navigator||void 0,_y=Ou&&(!mc||["ReactNative","NativeScript","NS"].indexOf(mc.product)<0),xy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vy=Ou&&window.location.href||"http://localhost",yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ou,hasStandardBrowserEnv:_y,hasStandardBrowserWebWorkerEnv:xy,navigator:mc,origin:vy},Symbol.toStringTag,{value:"Module"})),Vt={...yy,...gy};function Sy(n,e){return za(n,new Vt.classes.URLSearchParams,Object.assign({visitor:function(t,i,s,r){return Vt.isNode&&Z.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function My(n){return Z.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ey(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function Tm(n){function e(t,i,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&Z.isArray(s)?s.length:o,l?(Z.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!Z.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&Z.isArray(s[o])&&(s[o]=Ey(s[o])),!a)}if(Z.isFormData(n)&&Z.isFunction(n.entries)){const t={};return Z.forEachEntry(n,(i,s)=>{e(My(i),s,t,0)}),t}return null}function Ty(n,e,t){if(Z.isString(n))try{return(e||JSON.parse)(n),Z.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const lo={transitional:Em,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=Z.isObject(e);if(r&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return s?JSON.stringify(Tm(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Sy(e,this.formSerializer).toString();if((a=Z.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return za(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(t.setContentType("application/json",!1),Ty(e)):e}],transformResponse:[function(e){const t=this.transitional||lo.transitional,i=t&&t.forcedJSONParsing,s=this.responseType==="json";if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(i&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?We.from(a,We.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],n=>{lo.headers[n]={}});const by=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ay=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&by[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},lh=Symbol("internals");function vr(n){return n&&String(n).trim().toLowerCase()}function ea(n){return n===!1||n==null?n:Z.isArray(n)?n.map(ea):String(n)}function wy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Ry=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function hl(n,e,t,i,s){if(Z.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!Z.isString(e)){if(Z.isString(i))return e.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(e)}}function Cy(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Py(n,e){const t=Z.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let sn=class{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const u=vr(l);if(!u)throw new Error("header name must be a non-empty string");const f=Z.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=ea(a))}const o=(a,l)=>Z.forEach(a,(c,u)=>r(c,u,l));if(Z.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(Z.isString(e)&&(e=e.trim())&&!Ry(e))o(Ay(e),t);else if(Z.isHeaders(e))for(const[a,l]of e.entries())r(l,a,i);else e!=null&&r(t,e,i);return this}get(e,t){if(e=vr(e),e){const i=Z.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return wy(s);if(Z.isFunction(t))return t.call(this,s,i);if(Z.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=vr(e),e){const i=Z.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||hl(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=vr(o),o){const a=Z.findKey(i,o);a&&(!t||hl(i,i[a],a,t))&&(delete i[a],s=!0)}}return Z.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||hl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return Z.forEach(this,(s,r)=>{const o=Z.findKey(i,r);if(o){t[o]=ea(s),delete t[r];return}const a=e?Cy(r):String(r).trim();a!==r&&delete t[r],t[a]=ea(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Z.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&Z.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[lh]=this[lh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=vr(o);i[a]||(Py(s,o),i[a]=!0)}return Z.isArray(e)?e.forEach(r):r(e),this}};sn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(sn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});Z.freezeMethods(sn);function dl(n,e){const t=this||lo,i=e||t,s=sn.from(i.headers);let r=i.data;return Z.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function bm(n){return!!(n&&n.__CANCEL__)}function cr(n,e,t){We.call(this,n??"canceled",We.ERR_CANCELED,e,t),this.name="CanceledError"}Z.inherits(cr,We,{__CANCEL__:!0});function Am(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new We("Request failed with status code "+t.status,[We.ERR_BAD_REQUEST,We.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Iy(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Ly(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),t[s]=l,i[s]=c;let f=r,h=0;for(;f!==s;)h+=t[f++],f=f%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const d=u&&c-u;return d?Math.round(h*1e3/d):void 0}}function Dy(n,e){let t=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{t=u,s=null,r&&(clearTimeout(r),r=null),n.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const _a=(n,e,t=3)=>{let i=0;const s=Ly(50,250);return Dy(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-i,c=s(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(f)},t)},ch=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},uh=n=>(...e)=>Z.asap(()=>n(...e)),Uy=Vt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Vt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Vt.origin),Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent)):()=>!0,Ny=Vt.hasStandardBrowserEnv?{write(n,e,t,i,s,r){const o=[n+"="+encodeURIComponent(e)];Z.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),Z.isString(i)&&o.push("path="+i),Z.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Oy(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Fy(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function wm(n,e,t){let i=!Oy(e);return n&&i||t==!1?Fy(n,e):e}const fh=n=>n instanceof sn?{...n}:n;function ps(n,e){e=e||{};const t={};function i(c,u,f,h){return Z.isPlainObject(c)&&Z.isPlainObject(u)?Z.merge.call({caseless:h},c,u):Z.isPlainObject(u)?Z.merge({},u):Z.isArray(u)?u.slice():u}function s(c,u,f,h){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c,f,h)}else return i(c,u,f,h)}function r(c,u){if(!Z.isUndefined(u))return i(void 0,u)}function o(c,u){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(fh(c),fh(u),f,!0)};return Z.forEach(Object.keys(Object.assign({},n,e)),function(u){const f=l[u]||s,h=f(n[u],e[u],u);Z.isUndefined(h)&&f!==a||(t[u]=h)}),t}const Rm=n=>{const e=ps({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=sn.from(o),e.url=Mm(wm(e.baseURL,e.url),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(t)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Vt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(e)),i||i!==!1&&Uy(e.url))){const c=s&&r&&Ny.read(r);c&&o.set(s,c)}return e},By=typeof XMLHttpRequest<"u",ky=By&&function(n){return new Promise(function(t,i){const s=Rm(n);let r=s.data;const o=sn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,h,d,g;function _(){d&&d(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const M=sn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:M,config:n,request:m};Am(function(P){t(P),_()},function(P){i(P),_()},C),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new We("Request aborted",We.ECONNABORTED,n,m)),m=null)},m.onerror=function(){i(new We("Network Error",We.ERR_NETWORK,n,m)),m=null},m.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||Em;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new We(y,C.clarifyTimeoutError?We.ETIMEDOUT:We.ECONNABORTED,n,m)),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&Z.forEach(o.toJSON(),function(y,C){m.setRequestHeader(C,y)}),Z.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([h,g]=_a(c,!0),m.addEventListener("progress",h)),l&&m.upload&&([f,d]=_a(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",d)),(s.cancelToken||s.signal)&&(u=M=>{m&&(i(!M||M.type?new cr(null,n,m):M),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const b=Iy(s.url);if(b&&Vt.protocols.indexOf(b)===-1){i(new We("Unsupported protocol "+b+":",We.ERR_BAD_REQUEST,n));return}m.send(r||null)})},Hy=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof We?u:new cr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new We(`timeout ${e} of ms exceeded`,We.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),n=null)};n.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>Z.asap(a),l}},zy=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,s;for(;i<t;)s=i+e,yield n.slice(i,s),i=s},Vy=async function*(n,e){for await(const t of Gy(n))yield*zy(t,e)},Gy=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},hh=(n,e,t,i)=>{const s=Vy(n,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(t){let h=r+=f;t(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Va=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Cm=Va&&typeof ReadableStream=="function",Wy=Va&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Pm=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Xy=Cm&&Pm(()=>{let n=!1;const e=new Request(Vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),dh=64*1024,gc=Cm&&Pm(()=>Z.isReadableStream(new Response("").body)),xa={stream:gc&&(n=>n.body)};Va&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!xa[e]&&(xa[e]=Z.isFunction(n[e])?t=>t[e]():(t,i)=>{throw new We(`Response type '${e}' is not supported`,We.ERR_NOT_SUPPORT,i)})})})(new Response);const jy=async n=>{if(n==null)return 0;if(Z.isBlob(n))return n.size;if(Z.isSpecCompliantForm(n))return(await new Request(Vt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(n)||Z.isArrayBuffer(n))return n.byteLength;if(Z.isURLSearchParams(n)&&(n=n+""),Z.isString(n))return(await Wy(n)).byteLength},qy=async(n,e)=>{const t=Z.toFiniteNumber(n.getContentLength());return t??jy(e)},Ky=Va&&(async n=>{let{url:e,method:t,data:i,signal:s,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:h}=Rm(n);c=c?(c+"").toLowerCase():"text";let d=Hy([s,r&&r.toAbortSignal()],o),g;const _=d&&d.unsubscribe&&(()=>{d.unsubscribe()});let m;try{if(l&&Xy&&t!=="get"&&t!=="head"&&(m=await qy(u,i))!==0){let C=new Request(e,{method:"POST",body:i,duplex:"half"}),I;if(Z.isFormData(i)&&(I=C.headers.get("content-type"))&&u.setContentType(I),C.body){const[P,D]=ch(m,_a(uh(l)));i=hh(C.body,dh,P,D)}}Z.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...h,signal:d,method:t.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let b=await fetch(g);const M=gc&&(c==="stream"||c==="response");if(gc&&(a||M&&_)){const C={};["status","statusText","headers"].forEach(A=>{C[A]=b[A]});const I=Z.toFiniteNumber(b.headers.get("content-length")),[P,D]=a&&ch(I,_a(uh(a),!0))||[];b=new Response(hh(b.body,dh,P,()=>{D&&D(),_&&_()}),C)}c=c||"text";let y=await xa[Z.findKey(xa,c)||"text"](b,n);return!M&&_&&_(),await new Promise((C,I)=>{Am(C,I,{data:y,headers:sn.from(b.headers),status:b.status,statusText:b.statusText,config:n,request:g})})}catch(p){throw _&&_(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new We("Network Error",We.ERR_NETWORK,n,g),{cause:p.cause||p}):We.from(p,p&&p.code,n,g)}}),_c={http:cy,xhr:ky,fetch:Ky};Z.forEach(_c,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ph=n=>`- ${n}`,Yy=n=>Z.isFunction(n)||n===null||n===!1,Im={getAdapter:n=>{n=Z.isArray(n)?n:[n];const{length:e}=n;let t,i;const s={};for(let r=0;r<e;r++){t=n[r];let o;if(i=t,!Yy(t)&&(i=_c[(o=String(t)).toLowerCase()],i===void 0))throw new We(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(ph).join(`
`):" "+ph(r[0]):"as no adapter specified";throw new We("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:_c};function pl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new cr(null,n)}function mh(n){return pl(n),n.headers=sn.from(n.headers),n.data=dl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Im.getAdapter(n.adapter||lo.adapter)(n).then(function(i){return pl(n),i.data=dl.call(n,n.transformResponse,i),i.headers=sn.from(i.headers),i},function(i){return bm(i)||(pl(n),i&&i.response&&(i.response.data=dl.call(n,n.transformResponse,i.response),i.response.headers=sn.from(i.response.headers))),Promise.reject(i)})}const Lm="1.8.2",Ga={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Ga[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const gh={};Ga.transitional=function(e,t,i){function s(r,o){return"[Axios v"+Lm+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new We(s(o," has been removed"+(t?" in "+t:"")),We.ERR_DEPRECATED);return t&&!gh[o]&&(gh[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};Ga.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Jy(n,e,t){if(typeof n!="object")throw new We("options must be an object",We.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new We("option "+r+" must be "+l,We.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new We("Unknown option "+r,We.ERR_BAD_OPTION)}}const ta={assertOptions:Jy,validators:Ga},Bn=ta.validators;let fs=class{constructor(e){this.defaults=e,this.interceptors={request:new ah,response:new ah}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ps(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&ta.assertOptions(i,{silentJSONParsing:Bn.transitional(Bn.boolean),forcedJSONParsing:Bn.transitional(Bn.boolean),clarifyTimeoutError:Bn.transitional(Bn.boolean)},!1),s!=null&&(Z.isFunction(s)?t.paramsSerializer={serialize:s}:ta.assertOptions(s,{encode:Bn.function,serialize:Bn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ta.assertOptions(t,{baseUrl:Bn.spelling("baseURL"),withXsrfToken:Bn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&Z.merge(r.common,r[t.method]);r&&Z.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),t.headers=sn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,h;if(!l){const g=[mh.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),h=g.length,u=Promise.resolve(t);f<h;)u=u.then(g[f++],g[f++]);return u}h=a.length;let d=t;for(f=0;f<h;){const g=a[f++],_=a[f++];try{d=g(d)}catch(m){_.call(this,m);break}}try{u=mh.call(this,d)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=ps(this.defaults,e);const t=wm(e.baseURL,e.url,e.allowAbsoluteUrls);return Mm(t,e.params,e.paramsSerializer)}};Z.forEach(["delete","get","head","options"],function(e){fs.prototype[e]=function(t,i){return this.request(ps(i||{},{method:e,url:t,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function t(i){return function(r,o,a){return this.request(ps(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}fs.prototype[e]=t(),fs.prototype[e+"Form"]=t(!0)});let Zy=class Dm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new cr(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Dm(function(s){e=s}),cancel:e}}};function $y(n){return function(t){return n.apply(null,t)}}function Qy(n){return Z.isObject(n)&&n.isAxiosError===!0}const xc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xc).forEach(([n,e])=>{xc[e]=n});function Um(n){const e=new fs(n),t=fm(fs.prototype.request,e);return Z.extend(t,fs.prototype,e,{allOwnKeys:!0}),Z.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Um(ps(n,s))},t}const Et=Um(lo);Et.Axios=fs;Et.CanceledError=cr;Et.CancelToken=Zy;Et.isCancel=bm;Et.VERSION=Lm;Et.toFormData=za;Et.AxiosError=We;Et.Cancel=Et.CanceledError;Et.all=function(e){return Promise.all(e)};Et.spread=$y;Et.isAxiosError=Qy;Et.mergeConfig=ps;Et.AxiosHeaders=sn;Et.formToJSON=n=>Tm(Z.isHTMLForm(n)?new FormData(n):n);Et.getAdapter=Im.getAdapter;Et.HttpStatusCode=xc;Et.default=Et;const{Axios:TC,AxiosError:bC,CanceledError:AC,isCancel:wC,CancelToken:RC,VERSION:CC,all:PC,Cancel:IC,isAxiosError:LC,spread:DC,toFormData:UC,AxiosHeaders:NC,HttpStatusCode:OC,formToJSON:FC,getAdapter:BC,mergeConfig:kC}=Et,eS={class:"auth-container"},tS={key:0},nS={__name:"Auth",setup(n){const e=wn(""),t=wn(""),i=wn(""),s=wn(!0),r=wn(localStorage.getItem("token"));async function o(){var l;try{if(!s.value&&(!i.value||!e.value||!t.value)){alert("Please fill out all fields");return}let c;if(s.value)c=await Et.post("http://localhost:5000/api/login",{email:e.value,password:t.value});else{console.log("Sending registration data:",{username:i.value,email:e.value,password:t.value}),c=await Et.post("http://localhost:5000/api/register",{username:i.value,email:e.value,password:t.value}),console.log("Registration response:",c.data),alert("User registered! Now login."),s.value=!0;return}localStorage.setItem("token",c.data.token),r.value=c.data.token}catch(c){console.error("Frontend Error:",c.response||c.message),alert("Error: "+(((l=c.response)==null?void 0:l.data.error)||c.message))}}function a(){localStorage.removeItem("token"),r.value=null}return(l,c)=>(gt(),vt("div",eS,[tt("h1",null,_n(s.value?"Login":"Register"),1),s.value?Yr("",!0):(gt(),vt("div",tS,[qo(tt("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),placeholder:"Username"},null,512),[[$o,i.value]])])),qo(tt("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>e.value=u),placeholder:"Email",type:"email"},null,512),[[$o,e.value]]),qo(tt("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>t.value=u),placeholder:"Password",type:"password"},null,512),[[$o,t.value]]),tt("button",{onClick:o},_n(s.value?"Login":"Register"),1),tt("p",{onClick:c[3]||(c[3]=u=>s.value=!s.value)},_n(s.value?"Create an account":"Already have an account? Login"),1),r.value?(gt(),vt("button",{key:1,onClick:a},"Logout")):Yr("",!0)]))}};/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Nm;const Wa=n=>Nm=n,Om=Symbol();function vc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Hr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Hr||(Hr={}));function iS(){const n=Jd(!0),e=n.run(()=>wn({}));let t=[],i=[];const s=Eu({install(r){Wa(s),s._a=r,r.provide(Om,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Fm=()=>{};function _h(n,e,t,i=Fm){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Zd()&&Gg(s),s}function vs(n,...e){n.slice().forEach(t=>{t(...e)})}const sS=n=>n(),xh=Symbol(),ml=Symbol();function yc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];vc(s)&&vc(i)&&n.hasOwnProperty(t)&&!bt(i)&&!Ni(i)?n[t]=yc(s,i):n[t]=i}return n}const rS=Symbol();function oS(n){return!vc(n)||!n.hasOwnProperty(rS)}const{assign:Ai}=Object;function aS(n){return!!(bt(n)&&n.effect)}function lS(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=h_(t.state.value[n]);return Ai(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=Eu(Tt(()=>{Wa(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=Bm(n,c,e,t,i,!0),l}function Bm(n,e,t={},i,s,r){let o;const a=Ai({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),wn({});let _;function m(D){let A;c=u=!1,typeof D=="function"?(D(i.state.value[n]),A={type:Hr.patchFunction,storeId:n,events:d}):(yc(i.state.value[n],D),A={type:Hr.patchObject,payload:D,storeId:n,events:d});const E=_=Symbol();Ia().then(()=>{_===E&&(c=!0)}),u=!0,vs(f,A,i.state.value[n])}const p=r?function(){const{state:A}=t,E=A?A():{};this.$patch(U=>{Ai(U,E)})}:Fm;function b(){o.stop(),f=[],h=[],i._s.delete(n)}const M=(D,A="")=>{if(xh in D)return D[ml]=A,D;const E=function(){Wa(i);const U=Array.from(arguments),$=[],V=[];function ie(te){$.push(te)}function oe(te){V.push(te)}vs(h,{args:U,name:E[ml],store:C,after:ie,onError:oe});let q;try{q=D.apply(this&&this.$id===n?this:C,U)}catch(te){throw vs(V,te),te}return q instanceof Promise?q.then(te=>(vs($,te),te)).catch(te=>(vs(V,te),Promise.reject(te))):(vs($,q),q)};return E[xh]=!0,E[ml]=A,E},y={_p:i,$id:n,$onAction:_h.bind(null,h),$patch:m,$reset:p,$subscribe(D,A={}){const E=_h(f,D,A.detached,()=>U()),U=o.run(()=>Gs(()=>i.state.value[n],$=>{(A.flush==="sync"?u:c)&&D({storeId:n,type:Hr.direct,events:d},$)},Ai({},l,A)));return E},$dispose:b},C=so(y);i._s.set(n,C);const P=(i._a&&i._a.runWithContext||sS)(()=>i._e.run(()=>(o=Jd()).run(()=>e({action:M}))));for(const D in P){const A=P[D];if(bt(A)&&!aS(A)||Ni(A))r||(g&&oS(A)&&(bt(A)?A.value=g[D]:yc(A,g[D])),i.state.value[n][D]=A);else if(typeof A=="function"){const E=M(A,D);P[D]=E,a.actions[D]=A}}return Ai(C,P),Ai(it(C),P),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:D=>{m(A=>{Ai(A,D)})}}),i._p.forEach(D=>{Ai(C,o.run(()=>D({store:C,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(C.$state,g),c=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function cS(n,e,t){let i;const s=typeof e=="function";i=s?t:e;function r(o,a){const l=j_();return o=o||(l?Dn(Om,null):null),o&&Wa(o),o=Nm,o._s.has(n)||(s?Bm(n,e,i,o):lS(n,i,o)),o._s.get(n)}return r.$id=n,r}const uS=cS("configurator",{state:()=>({currentStep:0,menuItems:[{name:"Select House Model",subItems:[{name:"Solo+ series",subItems:[{name:"Solo+ 42"},{name:"Solo+ 75"},{name:"Solo+ 100"}]},{name:"Duo series",subItems:[{name:"Duo 57"},{name:"Duo 75"},{name:"Duo 100"},{name:"Duo 120"}]},{name:"Trio series",subItems:[{name:"Trio 57"},{name:"Trio 75"},{name:"Trio 100"},{name:"Trio 120"},{name:"Trio 150"}]}]},{name:"Layout",subItems:[{name:"Walls"},{name:"Windows"}]},{name:"Customize",subItems:[{name:"Wall color"},{name:"Roofing"}]},{name:"Save/Export"}],selectedSeries:null,selectedModel:null}),actions:{updateStep(n){this.currentStep=n},selectSeries(n){this.selectedSeries=n},selectModel(n){this.selectedModel=n.name}}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="174",fS=0,vh=1,hS=2,km=1,dS=2,oi=3,mi=0,rn=1,Rn=2,Oi=0,Ws=1,yh=2,Sh=3,Mh=4,pS=5,rs=100,mS=101,gS=102,_S=103,xS=104,vS=200,yS=201,SS=202,MS=203,Sc=204,Mc=205,ES=206,TS=207,bS=208,AS=209,wS=210,RS=211,CS=212,PS=213,IS=214,Ec=0,Tc=1,bc=2,Zs=3,Ac=4,wc=5,Rc=6,Cc=7,Hm=0,LS=1,DS=2,Fi=0,US=1,NS=2,OS=3,FS=4,BS=5,kS=6,HS=7,Eh="attached",zS="detached",zm=300,$s=301,Qs=302,Pc=303,Ic=304,Xa=306,er=1e3,Ii=1001,va=1002,Zt=1003,Vm=1004,Pr=1005,fn=1006,na=1007,fi=1008,gi=1009,Gm=1010,Wm=1011,eo=1012,Bu=1013,ms=1014,In=1015,co=1016,ku=1017,Hu=1018,tr=1020,Xm=35902,jm=1021,qm=1022,vn=1023,Km=1024,Ym=1025,Xs=1026,nr=1027,zu=1028,Vu=1029,Jm=1030,Gu=1031,Wu=1033,ia=33776,sa=33777,ra=33778,oa=33779,Lc=35840,Dc=35841,Uc=35842,Nc=35843,Oc=36196,Fc=37492,Bc=37496,kc=37808,Hc=37809,zc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,jc=37815,qc=37816,Kc=37817,Yc=37818,Jc=37819,Zc=37820,$c=37821,aa=36492,Qc=36494,eu=36495,Zm=36283,tu=36284,nu=36285,iu=36286,to=2300,no=2301,gl=2302,Th=2400,bh=2401,Ah=2402,VS=2500,GS=0,$m=1,su=2,WS=3200,XS=3201,Qm=0,jS=1,Pi="",Nt="srgb",Qt="srgb-linear",ya="linear",ht="srgb",ys=7680,wh=519,qS=512,KS=513,YS=514,eg=515,JS=516,ZS=517,$S=518,QS=519,ru=35044,Rh="300 es",hi=2e3,Sa=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const zr=Math.PI/180,ir=180/Math.PI;function Un(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Xu(n,e){return(n%e+e)%e}function eM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tM(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function nM(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function iM(n,e=1){return e-Math.abs(Xu(n,e*2)-e)}function sM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function oM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function aM(n,e){return n+Math.random()*(e-n)}function lM(n){return n*(.5-Math.random())}function cM(n){n!==void 0&&(Ch=n);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uM(n){return n*zr}function fM(n){return n*ir}function hM(n){return(n&n-1)===0&&n!==0}function dM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gM={DEG2RAD:zr,RAD2DEG:ir,generateUUID:Un,clamp:Ye,euclideanModulo:Xu,mapLinear:eM,inverseLerp:tM,lerp:Vr,damp:nM,pingpong:iM,smoothstep:sM,smootherstep:rM,randInt:oM,randFloat:aM,randFloatSpread:lM,seededRandom:cM,degToRad:uM,radToDeg:fM,isPowerOfTwo:hM,ceilPowerOfTwo:dM,floorPowerOfTwo:pM,setQuaternionFromProperEuler:mM,normalize:ut,denormalize:Cn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],y=s[7],C=s[2],I=s[5],P=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*m+a*M+l*I,r[6]=o*p+a*y+l*P,r[1]=c*_+u*b+f*C,r[4]=c*m+u*M+f*I,r[7]=c*p+u*y+f*P,r[2]=h*_+d*b+g*C,r[5]=h*m+d*M+g*I,r[8]=h*p+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new je;function tg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _M(){const n=io("canvas");return n.style.display="block",n}const Ph={};function ns(n){n in Ph||(Ph[n]=!0,console.warn(n))}function xM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function vM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ih=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SM(){const n={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?ya:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qt]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),n}const $e=SM();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ss;class MM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=io("canvas")),Ss.width=e.width,Ss.height=e.height;const i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ss}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EM=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xl(s[o].image)):r.push(xl(s[o]))}else r=xl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?MM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TM=0;class Dt extends ur{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Ii,s=Ii,r=fn,o=fi,a=vn,l=gi,c=Dt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Un(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=zm;Dt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,C=(p+1)/2,I=(u+h)/4,P=(f+_)/4,D=(g+m)/4;return M>y&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=I/i,r=P/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=D/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bM extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ju(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends bM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ng extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),I=Math.atan2(C,p*b);m=Math.sin(m*I)/C,a=Math.sin(a*I)/C}const y=a*b;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new B,Dh=new Gi;class jn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),yo.subVectors(this.max,yr),Ms.subVectors(e.a,yr),Es.subVectors(e.b,yr),Ts.subVectors(e.c,yr),vi.subVectors(Es,Ms),yi.subVectors(Ts,Es),Ki.subVectors(Ms,Ts);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ki.z,Ki.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ki.z,0,-Ki.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ki.y,Ki.x,0];return!yl(t,Ms,Es,Ts,yo)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Ms,Es,Ts,yo))?!1:(So.crossVectors(vi,yi),t=[So.x,So.y,So.z],yl(t,Ms,Es,Ts,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],Tn=new B,vo=new jn,Ms=new B,Es=new B,Ts=new B,vi=new B,yi=new B,Ki=new B,yr=new B,yo=new B,So=new B,Yi=new B;function yl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yi.fromArray(n,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wM=new jn,Sr=new B,Sl=new B;class qn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Sl)),this.expandByPoint(Sr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,Ml=new B,Mo=new B,Si=new B,El=new B,Eo=new B,Tl=new B;class ja{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=Si.dot(this.direction),l=-Si.dot(Mo),c=Si.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ml).addScaledVector(Mo,h),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){El.subVectors(t,e),Eo.subVectors(i,e),Tl.crossVectors(El,Eo);let o=this.direction.dot(Tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(Eo.crossVectors(Si,Eo));if(l<0)return null;const c=a*this.direction.dot(El.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(Tl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,CM)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Mi.crossVectors(i,an),Mi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Mi.crossVectors(i,an)),Mi.normalize(),To.crossVectors(an,Mi),s[0]=Mi.x,s[4]=To.x,s[8]=an.x,s[1]=Mi.y,s[5]=To.y,s[9]=an.y,s[2]=Mi.z,s[6]=To.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],M=i[7],y=i[11],C=i[15],I=s[0],P=s[4],D=s[8],A=s[12],E=s[1],U=s[5],$=s[9],V=s[13],ie=s[2],oe=s[6],q=s[10],te=s[14],z=s[3],ge=s[7],Se=s[11],Re=s[15];return r[0]=o*I+a*E+l*ie+c*z,r[4]=o*P+a*U+l*oe+c*ge,r[8]=o*D+a*$+l*q+c*Se,r[12]=o*A+a*V+l*te+c*Re,r[1]=u*I+f*E+h*ie+d*z,r[5]=u*P+f*U+h*oe+d*ge,r[9]=u*D+f*$+h*q+d*Se,r[13]=u*A+f*V+h*te+d*Re,r[2]=g*I+_*E+m*ie+p*z,r[6]=g*P+_*U+m*oe+p*ge,r[10]=g*D+_*$+m*q+p*Se,r[14]=g*A+_*V+m*te+p*Re,r[3]=b*I+M*E+y*ie+C*z,r[7]=b*P+M*U+y*oe+C*ge,r[11]=b*D+M*$+y*q+C*Se,r[15]=b*A+M*V+y*te+C*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+_*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,M=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,I=t*b+i*M+s*y+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=b*P,e[1]=(_*h*r-f*m*r-_*s*d+i*m*d+f*s*p-i*h*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*P,e[4]=M*P,e[5]=(u*m*r-g*h*r+g*s*d-t*m*d-u*s*p+t*h*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(g*f*r-u*_*r-g*i*d+t*_*d+u*i*p-t*f*p)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=C*P,e[13]=(u*_*s-g*f*s+g*i*h-t*_*h-u*i*m+t*f*m)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,b=l*c,M=l*u,y=l*f,C=i.x,I=i.y,P=i.z;return s[0]=(1-(_+p))*C,s[1]=(d+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(d-y)*I,s[5]=(1-(h+p))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(g+M)*P,s[9]=(m-b)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const c=1/r,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=hi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let d,g;if(a===hi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,d=(i+s)*u;let g,_;if(a===hi)g=(o+r)*f,_=-2*f;else if(a===Sa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bs=new B,bn=new qe,RM=new B(0,0,0),CM=new B(1,1,1),Mi=new B,To=new B,an=new B,Uh=new qe,Nh=new Gi;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PM=0;const Oh=new B,As=new Gi,ni=new qe,bo=new B,Mr=new B,IM=new B,LM=new Gi,Fh=new B(1,0,0),Bh=new B(0,1,0),kh=new B(0,0,1),Hh={type:"added"},DM={type:"removed"},ws={type:"childadded",child:null},bl={type:"childremoved",child:null};class yt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new B,t=new Xn,i=new Gi,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new je}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Mr,bo,this.up):ni.lookAt(bo,Mr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DM),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new B(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new B,ii=new B,Al=new B,si=new B,Rs=new B,Cs=new B,zh=new B,wl=new B,Rl=new B,Cl=new B,Pl=new st,Il=new st,Ll=new st;class Pn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),ii.subVectors(i,t),Al.subVectors(e,t);const o=An.dot(An),a=An.dot(ii),l=An.dot(Al),c=ii.dot(ii),u=ii.dot(Al),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Pl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),ii.subVectors(e,t),An.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),An.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),wl.subVectors(e,i);const l=Rs.dot(wl),c=Cs.dot(wl);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,s);const u=Rs.dot(Rl),f=Cs.dot(Rl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Rs,o);Cl.subVectors(e,r);const d=Rs.dot(Cl),g=Cs.dot(Cl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return zh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(zh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Xu(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dl(o,r,e+1/3),this.g=Dl(o,r,e),this.b=Dl(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=sg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return $e.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ye(kt.r*255,0,255))*65536+Math.round(Ye(kt.g*255,0,255))*256+Math.round(Ye(kt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Nt){$e.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Ao);const i=Vr(Ei.h,Ao.h,t),s=Vr(Ei.s,Ao.s,t),r=Vr(Ei.l,Ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ge;Ge.NAMES=sg;let UM=0;class Gn extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Ws,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Mc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sc&&(i.blendSrc=this.blendSrc),this.blendDst!==Mc&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ls extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new B,wo=new Qe;let NM=0;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}}class rg extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class og extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let OM=0;const mn=new qe,Ul=new yt,Ps=new B,ln=new jn,Er=new jn,It=new B;class Kn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?og:rg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(ln.min,Er.min),ln.expandByPoint(It),It.addVectors(ln.max,Er.max),ln.expandByPoint(It)):(ln.expandByPoint(Er.min),ln.expandByPoint(Er.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),It.add(Ps)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new B,l[D]=new B;const c=new B,u=new B,f=new B,h=new Qe,d=new Qe,g=new Qe,_=new B,m=new B;function p(D,A,E){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,E),h.fromBufferAttribute(r,D),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[D].add(_),a[A].add(_),a[E].add(_),l[D].add(m),l[A].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,A=b.length;D<A;++D){const E=b[D],U=E.start,$=E.count;for(let V=U,ie=U+$;V<ie;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new B,y=new B,C=new B,I=new B;function P(D){C.fromBufferAttribute(s,D),I.copy(C);const A=a[D];M.copy(A),M.sub(C.multiplyScalar(C.dot(A))).normalize(),y.crossVectors(I,A);const U=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,U)}for(let D=0,A=b.length;D<A;++D){const E=b[D],U=E.start,$=E.count;for(let V=U,ie=U+$;V<ie;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new $t(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new qe,Ji=new ja,Ro=new qn,Gh=new B,Co=new B,Po=new B,Io=new B,Nl=new B,Lo=new B,Wh=new B,Do=new B;class nn extends yt{constructor(e=new Kn,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Nl.fromBufferAttribute(f,e),o?Lo.addScaledVector(Nl,u):Lo.addScaledVector(Nl.sub(t),u))}t.add(Lo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Ro.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ro,Gh)===null||Ji.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,C=M;y<C;y+=3){const I=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=Uo(this,p,e,i,c,u,f,I,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Uo(this,o,e,i,c,u,f,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,C=M;y<C;y+=3){const I=y,P=y+1,D=y+2;s=Uo(this,p,e,i,c,u,f,I,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,y=m+2;s=Uo(this,o,e,i,c,u,f,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function FM(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:n}}function Uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Po),n.getVertexPosition(c,Io);const u=FM(n,e,t,i,Co,Po,Io,Wh);if(u){const f=new B;Pn.getBarycoord(Wh,Co,Po,Io,f),s&&(u.uv=Pn.getInterpolatedAttribute(s,a,l,c,f,new Qe)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,a,l,c,f,new Qe)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Pn.getNormal(Co,Po,Io,h.normal),u.face=h,u.barycoord=f}return u}class uo extends Kn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(f,2));function g(_,m,p,b,M,y,C,I,P,D,A){const E=y/P,U=C/D,$=y/2,V=C/2,ie=I/2,oe=P+1,q=D+1;let te=0,z=0;const ge=new B;for(let Se=0;Se<q;Se++){const Re=Se*U-V;for(let Ie=0;Ie<oe;Ie++){const Ze=Ie*E-$;ge[_]=Ze*b,ge[m]=Re*M,ge[p]=ie,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[p]=I>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ie/P),f.push(1-Se/D),te+=1}}for(let Se=0;Se<D;Se++)for(let Re=0;Re<P;Re++){const Ie=h+Re+oe*Se,Ze=h+Re+oe*(Se+1),se=h+(Re+1)+oe*(Se+1),pe=h+(Re+1)+oe*Se;l.push(Ie,Ze,pe),l.push(Ze,se,pe),z+=6}a.addGroup(d,z,A),d+=z,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const s in i)e[s]=i[s]}return e}function BM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ag(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const kM={clone:sr,merge:qt};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lg extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new B,Xh=new Qe,jh=new Qe;class Jt extends lg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,jh),t.subVectors(jh,Xh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ls=1;class VM extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(Is,Ls,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Is,Ls,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Is,Ls,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Is,Ls,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Is,Ls,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cg extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GM extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uo(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Oi});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=fn),new VM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Li extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class XM extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new B;class qu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qh=new B,Kh=new st,Yh=new st,qM=new B,Jh=new qe,No=new B,Fl=new qn,Zh=new qe,Bl=new ja;class KM extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(Zh.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(Zh),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Kh.fromBufferAttribute(s.attributes.skinIndex,e),Yh.fromBufferAttribute(s.attributes.skinWeight,e),qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Yh.getComponent(r);if(o!==0){const a=Kh.getComponent(r);Jh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(qM.copy(qh).applyMatrix4(Jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ug extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fg extends Dt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new qe,YM=new qe;class Ku{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:YM;$h.multiplyMatrices(a,t[r]),$h.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new fg(t,e,e,vn,In);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ug),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class ou extends $t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new qe,Qh=new qe,Oo=[],ed=new jn,JM=new qe,Tr=new nn,br=new qn;class ZM extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,JM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),ed.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ed)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),br.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Qh.multiplyMatrices(i,Ds),Tr.matrixWorld=Qh,Tr.raycast(e,Oo);for(let o=0,a=Oo.length;o<a;o++){const l=Oo[o];l.instanceId=r,l.object=this,t.push(l)}Oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(s*this.count),s,this.count,zu,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kl=new B,$M=new B,QM=new je;class is{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=kl.subVectors(i,t).cross($M.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||QM.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new qn,Fo=new B;class Yu{constructor(e=new is,t=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,m-d,y-p).normalize(),i[1].setComponents(l+r,h+c,m+d,y+p).normalize(),i[2].setComponents(l+o,h+u,m+g,y+b).normalize(),i[3].setComponents(l-o,h-u,m-g,y-b).normalize(),i[4].setComponents(l-a,h-f,m-_,y-M).normalize(),t===hi)i[5].setComponents(l+a,h+f,m+_,y+M).normalize();else if(t===Sa)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hg extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ma=new B,Ea=new B,td=new qe,Ar=new ja,Bo=new qn,Hl=new B,nd=new B;class Ju extends yt{constructor(e=new Kn,t=new hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ma.fromBufferAttribute(t,s-1),Ea.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ma.distanceTo(Ea);e.setAttribute("lineDistance",new pi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;td.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),M=ko(this,e,Ar,l,p,b,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ko(this,e,Ar,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ko(this,e,Ar,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ko(this,e,Ar,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ko(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ma.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),t.distanceSqToSegment(Ma,Ea,Hl,nd)>i)return;Hl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hl);if(!(c<e.near||c>e.far))return{distance:c,point:nd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const id=new B,sd=new B;class eE extends Ju{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)id.fromBufferAttribute(t,s),sd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+id.distanceTo(sd);e.setAttribute("lineDistance",new pi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tE extends Ju{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dg extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rd=new qe,au=new ja,Ho=new qn,zo=new B;class nE extends yt{constructor(e=new Kn,t=new dg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;rd.copy(s).invert(),au.copy(e.ray).applyMatrix4(rd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);zo.fromBufferAttribute(f,m),od(zo,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)zo.fromBufferAttribute(f,g),od(zo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function od(n,e,t,i,s,r,o){const a=au.distanceSqToPoint(n);if(a<t){const l=new B;au.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pg extends Dt{constructor(e,t,i,s,r,o,a,l,c,u=Xs){if(u!==Xs&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=ms),i===void 0&&u===nr&&(i=tr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fo extends Kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let M=0;M<c;M++){const y=M*f-r;g.push(y,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,y=b+c*(p+1),C=b+1+c*(p+1),I=b+1+c*p;d.push(M,y,I),d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new pi(g,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}class qa extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qm,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iE extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function oE(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ad(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function mg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class ho{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aE extends ho{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=e,l=2*i-t;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+b*o[c+C]+M*o[l+C]+y*o[f+C];return r}}class lE extends ho{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class cE extends ho{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rE(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=no;class fr extends Jn{constructor(e,t,i){super(e,t,i)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=to;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class gg extends Jn{}gg.prototype.ValueTypeName="color";class rr extends Jn{}rr.prototype.ValueTypeName="number";class uE extends ho{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class or extends Jn{InterpolantFactoryMethodLinear(e){return new uE(this.times,this.values,this.getValueSize(),e)}}or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Jn{constructor(e,t,i){super(e,t,i)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=to;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Jn{}ar.prototype.ValueTypeName="vector";class fE{constructor(e="",t=-1,i=[],s=VS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dE(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Jn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=oE(l);l=ad(l,1,u),c=ad(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new rr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];mg(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let b=0;b!==h[g].morphTargets.length;++b){const M=h[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new rr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(ar,d+".position",h,"pos",s),i(or,d+".quaternion",h,"rot",s),i(ar,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return gg;case"quaternion":return or;case"bool":case"boolean":return fr;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hE(n.type);if(n.times===void 0){const t=[],i=[];mg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Di={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class pE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const mE=new pE;class dr{constructor(e){this.manager=e!==void 0?e:mE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class gE extends Error{constructor(e,t){super(e),this.response=t}}class _g extends dr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:i,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ri[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:M,value:y})=>{if(M)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let I=0,P=u.length;I<P;I++){const D=u[I];D.onProgress&&D.onProgress(C)}p.enqueue(y),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new gE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Di.add(e,c);const u=ri[e];delete ri[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _E extends dr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=io("img");function l(){u(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class xE extends dr{constructor(e){super(e)}load(e,t,i,s){const r=new Dt,o=new _E(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ka extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zl=new qe,ld=new B,cd=new B;class Zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vE extends Zu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yE extends Ka{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ud=new qe,wr=new B,Vl=new B;class SE extends Zu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(wr),Vl.copy(i.position),Vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vl),i.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}}class ME extends Ka{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new SE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $u extends lg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EE extends Zu{constructor(){super(new $u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new EE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TE extends Ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bE extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,l),r.manager.itemStart(e)}}class AE extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Qu="\\[\\]\\.:\\/",wE=new RegExp("["+Qu+"]","g"),ef="[^"+Qu+"]",RE="[^"+Qu.replace("\\.","")+"]",CE=/((?:WC+[\/:])*)/.source.replace("WC",ef),PE=/(WCOD+)?/.source.replace("WCOD",RE),IE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),LE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),DE=new RegExp("^"+CE+PE+IE+LE+"$"),UE=["material","materials","bones","map"];class NE{constructor(e,t,i){const s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wE,"")}static parseTrackName(e){const t=DE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);UE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=NE;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fd(n,e,t,i){const s=OE(i);switch(t){case jm:return n*e;case Km:return n*e;case Ym:return n*e*2;case zu:return n*e/s.components*s.byteLength;case Vu:return n*e/s.components*s.byteLength;case Jm:return n*e*2/s.components*s.byteLength;case Gu:return n*e*2/s.components*s.byteLength;case qm:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Wu:return n*e*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Nc:return Math.max(n,16)*Math.max(e,8)/4;case Lc:case Uc:return Math.max(n,8)*Math.max(e,8)/2;case Oc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case aa:case Qc:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zm:case tu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OE(n){switch(n){case gi:case Gm:return{byteLength:1,components:1};case eo:case Wm:case co:return{byteLength:2,components:1};case ku:case Hu:return{byteLength:2,components:4};case ms:case Bu:case In:return{byteLength:4,components:1};case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function FE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$E=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pT="gl_FragColor = linearToOutputTexel( gl_FragColor );",mT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ST=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ET=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:BE,alphahash_pars_fragment:kE,alphamap_fragment:HE,alphamap_pars_fragment:zE,alphatest_fragment:VE,alphatest_pars_fragment:GE,aomap_fragment:WE,aomap_pars_fragment:XE,batching_pars_vertex:jE,batching_vertex:qE,begin_vertex:KE,beginnormal_vertex:YE,bsdfs:JE,iridescence_fragment:ZE,bumpmap_pars_fragment:$E,clipping_planes_fragment:QE,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:tT,clipping_planes_vertex:nT,color_fragment:iT,color_pars_fragment:sT,color_pars_vertex:rT,color_vertex:oT,common:aT,cube_uv_reflection_fragment:lT,defaultnormal_vertex:cT,displacementmap_pars_vertex:uT,displacementmap_vertex:fT,emissivemap_fragment:hT,emissivemap_pars_fragment:dT,colorspace_fragment:pT,colorspace_pars_fragment:mT,envmap_fragment:gT,envmap_common_pars_fragment:_T,envmap_pars_fragment:xT,envmap_pars_vertex:vT,envmap_physical_pars_fragment:PT,envmap_vertex:yT,fog_vertex:ST,fog_pars_vertex:MT,fog_fragment:ET,fog_pars_fragment:TT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:AT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:IT,lights_toon_pars_fragment:LT,lights_phong_fragment:DT,lights_phong_pars_fragment:UT,lights_physical_fragment:NT,lights_physical_pars_fragment:OT,lights_fragment_begin:FT,lights_fragment_maps:BT,lights_fragment_end:kT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:zT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:GT,map_fragment:WT,map_pars_fragment:XT,map_particle_fragment:jT,map_particle_pars_fragment:qT,metalnessmap_fragment:KT,metalnessmap_pars_fragment:YT,morphinstance_vertex:JT,morphcolor_vertex:ZT,morphnormal_vertex:$T,morphtarget_pars_vertex:QT,morphtarget_vertex:eb,normal_fragment_begin:tb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:sb,normal_vertex:rb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:ub,opaque_fragment:fb,packing:hb,premultiplied_alpha_fragment:db,project_vertex:pb,dithering_fragment:mb,dithering_pars_fragment:gb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:yb,shadowmap_vertex:Sb,shadowmask_pars_fragment:Mb,skinbase_vertex:Eb,skinning_pars_vertex:Tb,skinning_vertex:bb,skinnormal_vertex:Ab,specularmap_fragment:wb,specularmap_pars_fragment:Rb,tonemapping_fragment:Cb,tonemapping_pars_fragment:Pb,transmission_fragment:Ib,transmission_pars_fragment:Lb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Nb,worldpos_vertex:Ob,background_vert:Fb,background_frag:Bb,backgroundCube_vert:kb,backgroundCube_frag:Hb,cube_vert:zb,cube_frag:Vb,depth_vert:Gb,depth_frag:Wb,distanceRGBA_vert:Xb,distanceRGBA_frag:jb,equirect_vert:qb,equirect_frag:Kb,linedashed_vert:Yb,linedashed_frag:Jb,meshbasic_vert:Zb,meshbasic_frag:$b,meshlambert_vert:Qb,meshlambert_frag:eA,meshmatcap_vert:tA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:sA,meshphong_vert:rA,meshphong_frag:oA,meshphysical_vert:aA,meshphysical_frag:lA,meshtoon_vert:cA,meshtoon_frag:uA,points_vert:fA,points_frag:hA,shadow_vert:dA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},ve={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};zn.physical={uniforms:qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Go={r:0,b:0,g:0},$i=new Xn,_A=new qe;function xA(n,e,t,i,s,r,o){const a=new Ge(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const C=g(M);C===null?p(a,l):C&&C.isColor&&(p(C,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Xa)?(u===void 0&&(u=new nn(new uo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:sr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler($i)),u.material.toneMapped=$e.getTransfer(C.colorSpace)!==ht,(f!==C||h!==C.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new nn(new fo(2,2),new Bi({name:"BackgroundMaterial",uniforms:sr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Go,ag(n)),i.buffers.color.setClear(Go.r,Go.g,Go.b,y,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:b}}function vA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(E,U,$,V,ie){let oe=!1;const q=f(V,$,U);r!==q&&(r=q,c(r.object)),oe=d(E,V,$,ie),oe&&g(E,V,$,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,y(E,U,$,V),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,U,$){const V=$.wireframe===!0;let ie=i[E.id];ie===void 0&&(ie={},i[E.id]=ie);let oe=ie[U.id];oe===void 0&&(oe={},ie[U.id]=oe);let q=oe[V];return q===void 0&&(q=h(l()),oe[V]=q),q}function h(E){const U=[],$=[],V=[];for(let ie=0;ie<t;ie++)U[ie]=0,$[ie]=0,V[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:V,object:E,attributes:{},index:null}}function d(E,U,$,V){const ie=r.attributes,oe=U.attributes;let q=0;const te=$.getAttributes();for(const z in te)if(te[z].location>=0){const Se=ie[z];let Re=oe[z];if(Re===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(E,U,$,V){const ie={},oe=U.attributes;let q=0;const te=$.getAttributes();for(const z in te)if(te[z].location>=0){let Se=oe[z];Se===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),ie[z]=Re,q++}r.attributes=ie,r.attributesNum=q,r.index=V}function _(){const E=r.newAttributes;for(let U=0,$=E.length;U<$;U++)E[U]=0}function m(E){p(E,0)}function p(E,U){const $=r.newAttributes,V=r.enabledAttributes,ie=r.attributeDivisors;$[E]=1,V[E]===0&&(n.enableVertexAttribArray(E),V[E]=1),ie[E]!==U&&(n.vertexAttribDivisor(E,U),ie[E]=U)}function b(){const E=r.newAttributes,U=r.enabledAttributes;for(let $=0,V=U.length;$<V;$++)U[$]!==E[$]&&(n.disableVertexAttribArray($),U[$]=0)}function M(E,U,$,V,ie,oe,q){q===!0?n.vertexAttribIPointer(E,U,$,ie,oe):n.vertexAttribPointer(E,U,$,V,ie,oe)}function y(E,U,$,V){_();const ie=V.attributes,oe=$.getAttributes(),q=U.defaultAttributeValues;for(const te in oe){const z=oe[te];if(z.location>=0){let ge=ie[te];if(ge===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const Se=ge.normalized,Re=ge.itemSize,Ie=e.get(ge);if(Ie===void 0)continue;const Ze=Ie.buffer,se=Ie.type,pe=Ie.bytesPerElement,Me=se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===Bu;if(ge.isInterleavedBufferAttribute){const N=ge.data,re=N.stride,le=ge.offset;if(N.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce,N.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ce=0;ce<z.locationSize;ce++)M(z.location+ce,Re/z.locationSize,se,Se,re*pe,(le+Re/z.locationSize*ce)*pe,Me)}else{if(ge.isInstancedBufferAttribute){for(let N=0;N<z.locationSize;N++)p(z.location+N,ge.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let N=0;N<z.locationSize;N++)m(z.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let N=0;N<z.locationSize;N++)M(z.location+N,Re/z.locationSize,se,Se,Re*pe,Re/z.locationSize*N*pe,Me)}}else if(q!==void 0){const Se=q[te];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(z.location,Se);break;case 3:n.vertexAttrib3fv(z.location,Se);break;case 4:n.vertexAttrib4fv(z.location,Se);break;default:n.vertexAttrib1fv(z.location,Se)}}}}b()}function C(){D();for(const E in i){const U=i[E];for(const $ in U){const V=U[$];for(const ie in V)u(V[ie].object),delete V[ie];delete U[$]}delete i[E]}}function I(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const $ in U){const V=U[$];for(const ie in V)u(V[ie].object),delete V[ie];delete U[$]}delete i[E.id]}function P(E){for(const U in i){const $=i[U];if($[E.id]===void 0)continue;const V=$[E.id];for(const ie in V)u(V[ie].object),delete V[ie];delete $[E.id]}}function D(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function yA(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SA(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:I}}function MA(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new is,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,M=b*4;let y=p.clippingState||null;l.value=y,y=u(g,h,M,d);for(let C=0;C!==M;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EA(n){let e=new WeakMap;function t(o,a){return a===Pc?o.mapping=$s:a===Ic&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new GM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Bs=4,hd=[.125,.215,.35,.446,.526,.582],os=20,Gl=new $u,dd=new Ge;let Wl=null,Xl=0,jl=0,ql=!1;const ss=(1+Math.sqrt(5))/2,Us=1/ss,pd=[new B(-ss,Us,0),new B(ss,Us,0),new B(-Us,0,ss),new B(Us,0,ss),new B(0,ss,-Us),new B(0,ss,Us),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],TA=new B;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=TA}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,jl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:co,format:vn,colorSpace:Qt,depthBuffer:!1},s=gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(r)),this._blurMaterial=AA(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,i,s,r){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(dd),f.toneMapping=Fi,f.autoClear=!1;const g=new ls({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new nn(new uo,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(dd),m=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const y=this._cubeSize;Wo(s,M*y,b>2?y:0,y,y),f.setRenderTarget(s),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$s||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(s-r-1)%pd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new nn(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let b=0;for(let P=0;P<os;++P){const D=P/_,A=Math.exp(-D*D/2);p.push(A),P===0?b+=A:P<m&&(b+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const y=this._sizeLods[s],C=3*y*(s>M-Bs?s-M+Bs:0),I=4*(this._cubeSize-y);Wo(t,C,I,3*y,2*y),l.setRenderTarget(t),l.render(f,Gl)}}function bA(n){const e=[],t=[],i=[];let s=n;const r=n-Bs+1+hd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Bs?l=hd[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let I=0;I<d;I++){const P=I%3*2/3-1,D=I>2?0:-1,A=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];b.set(A,_*g*I),M.set(h,m*g*I);const E=[I,I,I,I,I,I];y.set(E,p*g*I)}const C=new Kn;C.setAttribute("position",new $t(b,_)),C.setAttribute("uv",new $t(M,m)),C.setAttribute("faceIndex",new $t(y,p)),e.push(C),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gd(n,e,t){const i=new gs(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function AA(n,e,t){const i=new Float32Array(os),s=new B(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function _d(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function xd(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pc||l===Ic,u=l===$s||l===Qs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new md(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new md(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function CA(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let M=0,y=b.length;M<y;M+=3){const C=b[M+0],I=b[M+1],P=b[M+2];h.push(C,I,I,P,P,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const C=M+0,I=M+1,P=M+2;h.push(C,I,I,P,P,C)}}else return;const m=new(tg(h)?og:rg)(h,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function PA(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function IA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function LA(n,e,t){const i=new WeakMap,s=new st;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*C*4*f),P=new ng(I,y,C,f);P.type=In,P.needsUpdate=!0;const D=M*4;for(let E=0;E<f;E++){const U=m[E],$=p[E],V=b[E],ie=y*C*4*E;for(let oe=0;oe<U.count;oe++){const q=oe*D;d===!0&&(s.fromBufferAttribute(U,oe),I[ie+q+0]=s.x,I[ie+q+1]=s.y,I[ie+q+2]=s.z,I[ie+q+3]=0),g===!0&&(s.fromBufferAttribute($,oe),I[ie+q+4]=s.x,I[ie+q+5]=s.y,I[ie+q+6]=s.z,I[ie+q+7]=0),_===!0&&(s.fromBufferAttribute(V,oe),I[ie+q+8]=s.x,I[ie+q+9]=s.y,I[ie+q+10]=s.z,I[ie+q+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Qe(y,C)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function DA(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const yg=new Dt,vd=new pg(1,1),Sg=new ng,Mg=new AM,Eg=new cg,yd=[],Sd=[],Md=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function BA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Td.set(i),n.uniformMatrix2fv(this.addr,!1,Td),Pt(t,i)}}function kA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ed.set(i),n.uniformMatrix3fv(this.addr,!1,Ed),Pt(t,i)}}function HA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),Pt(t,i)}}function zA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function XA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function YA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vd.compareFunction=eg,r=vd):r=yg,t.setTexture2D(e||r,s)}function JA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mg,s)}function ZA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Eg,s)}function $A(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sg,s)}function QA(n){switch(n){case 5126:return UA;case 35664:return NA;case 35665:return OA;case 35666:return FA;case 35674:return BA;case 35675:return kA;case 35676:return HA;case 5124:case 35670:return zA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return jA;case 36295:return qA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return $A}}function ew(n,e){n.uniform1fv(this.addr,e)}function tw(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function nw(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function iw(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function sw(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rw(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ow(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aw(n,e){n.uniform1iv(this.addr,e)}function lw(n,e){n.uniform2iv(this.addr,e)}function cw(n,e){n.uniform3iv(this.addr,e)}function uw(n,e){n.uniform4iv(this.addr,e)}function fw(n,e){n.uniform1uiv(this.addr,e)}function hw(n,e){n.uniform2uiv(this.addr,e)}function dw(n,e){n.uniform3uiv(this.addr,e)}function pw(n,e){n.uniform4uiv(this.addr,e)}function mw(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yg,r[o])}function gw(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mg,r[o])}function _w(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Eg,r[o])}function xw(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sg,r[o])}function vw(n){switch(n){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return rw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return fw;case 36294:return hw;case 36295:return dw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return xw}}class yw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QA(t.type)}}class Sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vw(t.type)}}class Mw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function bd(n,e){n.seq.push(e),n.map[e.id]=e}function Ew(n,e,t){const i=n.name,s=i.length;for(Kl.lastIndex=0;;){const r=Kl.exec(i),o=Kl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(t,c===void 0?new yw(a,n,e):new Sw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Mw(a),bd(t,f)),t=f}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ew(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tw=37297;let bw=0;function Aw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const wd=new je;function ww(n){$e._getMatrix(wd,$e.workingColorSpace,n);const e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Aw(n.getShaderSource(e),o)}else return s}function Rw(n,e){const t=ww(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cw(n,e){let t;switch(e){case US:t="Linear";break;case NS:t="Reinhard";break;case OS:t="Cineon";break;case FS:t="ACESFilmic";break;case kS:t="AgX";break;case HS:t="Neutral";break;case BS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xo=new B;function Pw(){$e.getLuminanceCoefficients(Xo);const n=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Lw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function Cd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(Uw,Ow)}const Nw=new Map;function Ow(n,e){let t=Ke[e];if(t===void 0){const i=Nw.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(n){return n.replace(Fw,Bw)}function Bw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Hw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Qs:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Vw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hm:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ww(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kw(t),c=Hw(t),u=zw(t),f=Vw(t),h=Gw(t),d=Iw(t),g=Lw(r),_=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Rw("linearToOutputTexel",t.outputColorSpace),Pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=lu(o),o=Cd(o,t),o=Pd(o,t),a=lu(a),a=Cd(a,t),a=Pd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,y=b+p+a,C=Ad(s,s.VERTEX_SHADER,M),I=Ad(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(C).trim(),ie=s.getShaderInfoLog(I).trim();let oe=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,I);else{const te=Rd(s,C,"vertex"),z=Rd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+te+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(V===""||ie==="")&&(q=!1);q&&(U.diagnostics={runnable:oe,programLog:$,vertexShader:{log:V,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(C),s.deleteShader(I),D=new la(s,_),A=Dw(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Tw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=I,this}let Xw=0;class jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qw(e),t.set(e,i)),i}}class qw{constructor(e){this.id=Xw++,this.code=e,this.usedTimes=0}}function Kw(n,e,t,i,s,r,o){const a=new ig,l=new jw,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,U,$,V){const ie=$.fog,oe=V.geometry,q=A.isMeshStandardMaterial?$.environment:null,te=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),z=te&&te.mapping===Xa?te.image.height:null,ge=g[A.type];A.precision!==null&&(d=s.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const Se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Re=Se!==void 0?Se.length:0;let Ie=0;oe.morphAttributes.position!==void 0&&(Ie=1),oe.morphAttributes.normal!==void 0&&(Ie=2),oe.morphAttributes.color!==void 0&&(Ie=3);let Ze,se,pe,Me;if(ge){const ct=zn[ge];Ze=ct.vertexShader,se=ct.fragmentShader}else Ze=A.vertexShader,se=A.fragmentShader,l.update(A),pe=l.getVertexShaderID(A),Me=l.getFragmentShaderID(A);const N=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),le=V.isInstancedMesh===!0,ce=V.isBatchedMesh===!0,Ue=!!A.map,w=!!A.matcap,R=!!te,v=!!A.aoMap,ne=!!A.lightMap,Y=!!A.bumpMap,X=!!A.normalMap,Q=!!A.displacementMap,ue=!!A.emissiveMap,J=!!A.metalnessMap,S=!!A.roughnessMap,x=A.anisotropy>0,L=A.clearcoat>0,H=A.dispersion>0,j=A.iridescence>0,G=A.sheen>0,me=A.transmission>0,fe=x&&!!A.anisotropyMap,_e=L&&!!A.clearcoatMap,Ne=L&&!!A.clearcoatNormalMap,he=L&&!!A.clearcoatRoughnessMap,ye=j&&!!A.iridescenceMap,Pe=j&&!!A.iridescenceThicknessMap,Oe=G&&!!A.sheenColorMap,xe=G&&!!A.sheenRoughnessMap,Be=!!A.specularMap,ze=!!A.specularColorMap,pt=!!A.specularIntensityMap,O=me&&!!A.transmissionMap,Ee=me&&!!A.thicknessMap,ee=!!A.gradientMap,ae=!!A.alphaMap,Ae=A.alphaTest>0,be=!!A.alphaHash,Xe=!!A.extensions;let St=Fi;A.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(St=n.toneMapping);const Ft={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Ze,fragmentShader:se,defines:A.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:ce,batchingColor:ce&&V._colorsTexture!==null,instancing:le,instancingColor:le&&V.instanceColor!==null,instancingMorph:le&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qt,alphaToCoverage:!!A.alphaToCoverage,map:Ue,matcap:w,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:z,aoMap:v,lightMap:ne,bumpMap:Y,normalMap:X,displacementMap:h&&Q,emissiveMap:ue,normalMapObjectSpace:X&&A.normalMapType===jS,normalMapTangentSpace:X&&A.normalMapType===Qm,metalnessMap:J,roughnessMap:S,anisotropy:x,anisotropyMap:fe,clearcoat:L,clearcoatMap:_e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:he,dispersion:H,iridescence:j,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:G,sheenColorMap:Oe,sheenRoughnessMap:xe,specularMap:Be,specularColorMap:ze,specularIntensityMap:pt,transmission:me,transmissionMap:O,thicknessMap:Ee,gradientMap:ee,opaque:A.transparent===!1&&A.blending===Ws&&A.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:be,combine:A.combine,mapUv:Ue&&_(A.map.channel),aoMapUv:v&&_(A.aoMap.channel),lightMapUv:ne&&_(A.lightMap.channel),bumpMapUv:Y&&_(A.bumpMap.channel),normalMapUv:X&&_(A.normalMap.channel),displacementMapUv:Q&&_(A.displacementMap.channel),emissiveMapUv:ue&&_(A.emissiveMap.channel),metalnessMapUv:J&&_(A.metalnessMap.channel),roughnessMapUv:S&&_(A.roughnessMap.channel),anisotropyMapUv:fe&&_(A.anisotropyMap.channel),clearcoatMapUv:_e&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(A.sheenRoughnessMap.channel),specularMapUv:Be&&_(A.specularMap.channel),specularColorMapUv:ze&&_(A.specularColorMap.channel),specularIntensityMapUv:pt&&_(A.specularIntensityMap.channel),transmissionMapUv:O&&_(A.transmissionMap.channel),thicknessMapUv:Ee&&_(A.thicknessMap.channel),alphaMapUv:ae&&_(A.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(X||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!oe.attributes.uv&&(Ue||ae),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:V.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:Ue&&A.map.isVideoTexture===!0&&$e.getTransfer(A.map.colorSpace)===ht,decodeVideoTextureEmissive:ue&&A.emissiveMap.isVideoTexture===!0&&$e.getTransfer(A.emissiveMap.colorSpace)===ht,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Rn,flipSided:A.side===rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Xe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&A.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const U in A.defines)E.push(U),E.push(A.defines[U]);return A.isRawShaderMaterial===!1&&(b(E,A),M(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function b(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function M(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const E=g[A.type];let U;if(E){const $=zn[E];U=kM.clone($.uniforms)}else U=A.uniforms;return U}function C(A,E){let U;for(let $=0,V=u.length;$<V;$++){const ie=u[$];if(ie.cacheKey===E){U=ie,++U.usedTimes;break}}return U===void 0&&(U=new Ww(n,E,A,r),u.push(U)),U}function I(A){if(--A.usedTimes===0){const E=u.indexOf(A);u[E]=u[u.length-1],u.pop(),A.destroy()}}function P(A){l.remove(A)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:D}}function Yw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Jw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ud(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Jw),i.length>1&&i.sort(h||Dd),s.length>1&&s.sort(h||Dd)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Zw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ud,n.set(i,[o])):s>=r.length?(o=new Ud,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $w(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ge};break;case"SpotLight":t={position:new B,direction:new B,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Qw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eR=0;function tR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nR(n){const e=new $w,t=Qw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new qe,o=new qe;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,M=0,y=0,C=0,I=0,P=0;c.sort(tR);for(let A=0,E=c.length;A<E;A++){const U=c[A],$=U.color,V=U.intensity,ie=U.distance,oe=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=$.r*V,f+=$.g*V,h+=$.b*V;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],V);P++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,z=t.get(U);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=oe,i.directionalShadowMatrix[d]=U.shadow.matrix,b++}i.directional[d]=q,d++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy($).multiplyScalar(V),q.distance=ie,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[_]=q;const te=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,te.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[_]=te.matrix,U.castShadow){const z=t.get(U);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=oe,y++}_++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy($).multiplyScalar(V),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=q,m++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const te=U.shadow,z=t.get(U);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=U.shadow.matrix,M++}i.point[g]=q,g++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(V),q.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=P,i.version=eR++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Nd(n){const e=new nR(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function iR(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Nd(n),e.set(s,[a])):r>=o.length?(a=new Nd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oR(n,e,t){let i=new Yu;const s=new Qe,r=new Qe,o=new st,a=new iE({depthPacking:XS}),l=new sE,c={},u=t.maxTextureSize,f={[mi]:rn,[rn]:mi,[Rn]:Rn},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:sR,fragmentShader:rR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let p=this.type;this.render=function(I,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const A=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Oi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=p!==oi&&this.type===oi,ie=p===oi&&this.type!==oi;for(let oe=0,q=I.length;oe<q;oe++){const te=I[oe],z=te.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ge=z.getFrameExtents();if(s.multiply(ge),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,z.mapSize.y=r.y)),z.map===null||V===!0||ie===!0){const Re=this.type!==oi?{minFilter:Zt,magFilter:Zt}:{};z.map!==null&&z.map.dispose(),z.map=new gs(s.x,s.y,Re),z.map.texture.name=te.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Se=z.getViewportCount();for(let Re=0;Re<Se;Re++){const Ie=z.getViewport(Re);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),$.viewport(o),z.updateMatrices(te,Re),i=z.getFrustum(),y(P,D,z.camera,te,this.type)}z.isPointLightShadow!==!0&&this.type===oi&&b(z,D),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,E,U)};function b(I,P){const D=e.update(_);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gs(s.x,s.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,D,h,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,D,d,_,null)}function M(I,P,D,A){let E=null;const U=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=E.uuid,V=P.uuid;let ie=c[$];ie===void 0&&(ie={},c[$]=ie);let oe=ie[V];oe===void 0&&(oe=E.clone(),ie[V]=oe,P.addEventListener("dispose",C)),E=oe}if(E.visible=P.visible,E.wireframe=P.wireframe,A===oi?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=n.properties.get(E);$.light=D}return E}function y(I,P,D,A,E){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===oi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const V=e.update(I),ie=I.material;if(Array.isArray(ie)){const oe=V.groups;for(let q=0,te=oe.length;q<te;q++){const z=oe[q],ge=ie[z.materialIndex];if(ge&&ge.visible){const Se=M(I,ge,A,E);I.onBeforeShadow(n,I,P,D,V,Se,z),n.renderBufferDirect(D,null,V,Se,I,z),I.onAfterShadow(n,I,P,D,V,Se,z)}}}else if(ie.visible){const oe=M(I,ie,A,E);I.onBeforeShadow(n,I,P,D,V,oe,null),n.renderBufferDirect(D,null,V,oe,I,null),I.onAfterShadow(n,I,P,D,V,oe,null)}}const $=I.children;for(let V=0,ie=$.length;V<ie;V++)y($[V],P,D,A,E)}function C(I){I.target.removeEventListener("dispose",C);for(const D in c){const A=c[D],E=I.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const aR={[Ec]:Tc,[bc]:Rc,[Ac]:Cc,[Zs]:wc,[Tc]:Ec,[Rc]:bc,[Cc]:Ac,[wc]:Zs};function lR(n,e){function t(){let O=!1;const Ee=new st;let ee=null;const ae=new st(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,be,Xe,St,Ft){Ft===!0&&(Ae*=St,be*=St,Xe*=St),Ee.set(Ae,be,Xe,St),ae.equals(Ee)===!1&&(n.clearColor(Ae,be,Xe,St),ae.copy(Ee))},reset:function(){O=!1,ee=null,ae.set(-1,0,0,0)}}}function i(){let O=!1,Ee=!1,ee=null,ae=null,Ae=null;return{setReversed:function(be){if(Ee!==be){const Xe=e.get("EXT_clip_control");Ee?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const St=Ae;Ae=null,this.setClear(St)}Ee=be},getReversed:function(){return Ee},setTest:function(be){be?N(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(be){ee!==be&&!O&&(n.depthMask(be),ee=be)},setFunc:function(be){if(Ee&&(be=aR[be]),ae!==be){switch(be){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Ac:n.depthFunc(n.EQUAL);break;case wc:n.depthFunc(n.GEQUAL);break;case Rc:n.depthFunc(n.GREATER);break;case Cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=be}},setLocked:function(be){O=be},setClear:function(be){Ae!==be&&(Ee&&(be=1-be),n.clearDepth(be),Ae=be)},reset:function(){O=!1,ee=null,ae=null,Ae=null,Ee=!1}}}function s(){let O=!1,Ee=null,ee=null,ae=null,Ae=null,be=null,Xe=null,St=null,Ft=null;return{setTest:function(ct){O||(ct?N(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ct){Ee!==ct&&!O&&(n.stencilMask(ct),Ee=ct)},setFunc:function(ct,Mn,Zn){(ee!==ct||ae!==Mn||Ae!==Zn)&&(n.stencilFunc(ct,Mn,Zn),ee=ct,ae=Mn,Ae=Zn)},setOp:function(ct,Mn,Zn){(be!==ct||Xe!==Mn||St!==Zn)&&(n.stencilOp(ct,Mn,Zn),be=ct,Xe=Mn,St=Zn)},setLocked:function(ct){O=ct},setClear:function(ct){Ft!==ct&&(n.clearStencil(ct),Ft=ct)},reset:function(){O=!1,Ee=null,ee=null,ae=null,Ae=null,be=null,Xe=null,St=null,Ft=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,C=null,I=null,P=new Ge(0,0,0),D=0,A=!1,E=null,U=null,$=null,V=null,ie=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=te>=1):z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=te>=2);let ge=null,Se={};const Re=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Ze=new st().fromArray(Re),se=new st().fromArray(Ie);function pe(O,Ee,ee,ae){const Ae=new Uint8Array(4),be=n.createTexture();n.bindTexture(O,be),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ee;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Ee+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return be}const Me={};Me[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(Zs),Y(!1),X(vh),N(n.CULL_FACE),v(Oi);function N(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function le(O,Ee){return f[O]!==Ee?(n.bindFramebuffer(O,Ee),f[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ce(O,Ee){let ee=d,ae=!1;if(O){ee=h.get(Ee),ee===void 0&&(ee=[],h.set(Ee,ee));const Ae=O.textures;if(ee.length!==Ae.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Xe=Ae.length;be<Xe;be++)ee[be]=n.COLOR_ATTACHMENT0+be;ee.length=Ae.length,ae=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ae=!0);ae&&n.drawBuffers(ee)}function Ue(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const w={[rs]:n.FUNC_ADD,[mS]:n.FUNC_SUBTRACT,[gS]:n.FUNC_REVERSE_SUBTRACT};w[_S]=n.MIN,w[xS]=n.MAX;const R={[vS]:n.ZERO,[yS]:n.ONE,[SS]:n.SRC_COLOR,[Sc]:n.SRC_ALPHA,[wS]:n.SRC_ALPHA_SATURATE,[bS]:n.DST_COLOR,[ES]:n.DST_ALPHA,[MS]:n.ONE_MINUS_SRC_COLOR,[Mc]:n.ONE_MINUS_SRC_ALPHA,[AS]:n.ONE_MINUS_DST_COLOR,[TS]:n.ONE_MINUS_DST_ALPHA,[RS]:n.CONSTANT_COLOR,[CS]:n.ONE_MINUS_CONSTANT_COLOR,[PS]:n.CONSTANT_ALPHA,[IS]:n.ONE_MINUS_CONSTANT_ALPHA};function v(O,Ee,ee,ae,Ae,be,Xe,St,Ft,ct){if(O===Oi){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(N(n.BLEND),_=!0),O!==pS){if(O!==m||ct!==A){if((p!==rs||y!==rs)&&(n.blendEquation(n.FUNC_ADD),p=rs,y=rs),ct)switch(O){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,C=null,I=null,P.set(0,0,0),D=0,m=O,A=ct}return}Ae=Ae||Ee,be=be||ee,Xe=Xe||ae,(Ee!==p||Ae!==y)&&(n.blendEquationSeparate(w[Ee],w[Ae]),p=Ee,y=Ae),(ee!==b||ae!==M||be!==C||Xe!==I)&&(n.blendFuncSeparate(R[ee],R[ae],R[be],R[Xe]),b=ee,M=ae,C=be,I=Xe),(St.equals(P)===!1||Ft!==D)&&(n.blendColor(St.r,St.g,St.b,Ft),P.copy(St),D=Ft),m=O,A=!1}function ne(O,Ee){O.side===Rn?re(n.CULL_FACE):N(n.CULL_FACE);let ee=O.side===rn;Ee&&(ee=!ee),Y(ee),O.blending===Ws&&O.transparent===!1?v(Oi):v(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ae=O.stencilWrite;a.setTest(ae),ae&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function X(O){O!==fS?(N(n.CULL_FACE),O!==U&&(O===vh?n.cullFace(n.BACK):O===hS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),U=O}function Q(O){O!==$&&(q&&n.lineWidth(O),$=O)}function ue(O,Ee,ee){O?(N(n.POLYGON_OFFSET_FILL),(V!==Ee||ie!==ee)&&(n.polygonOffset(Ee,ee),V=Ee,ie=ee)):re(n.POLYGON_OFFSET_FILL)}function J(O){O?N(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+oe-1),ge!==O&&(n.activeTexture(O),ge=O)}function x(O,Ee,ee){ee===void 0&&(ge===null?ee=n.TEXTURE0+oe-1:ee=ge);let ae=Se[ee];ae===void 0&&(ae={type:void 0,texture:void 0},Se[ee]=ae),(ae.type!==O||ae.texture!==Ee)&&(ge!==ee&&(n.activeTexture(ee),ge=ee),n.bindTexture(O,Ee||Me[O]),ae.type=O,ae.texture=Ee)}function L(){const O=Se[ge];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){Ze.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ze.copy(O))}function xe(O){se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Be(O,Ee){let ee=c.get(Ee);ee===void 0&&(ee=new WeakMap,c.set(Ee,ee));let ae=ee.get(O);ae===void 0&&(ae=n.getUniformBlockIndex(Ee,O.name),ee.set(O,ae))}function ze(O,Ee){const ae=c.get(Ee).get(O);l.get(Ee)!==ae&&(n.uniformBlockBinding(Ee,ae,O.__bindingPointIndex),l.set(Ee,ae))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,Se={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,C=null,I=null,P=new Ge(0,0,0),D=0,A=!1,E=null,U=null,$=null,V=null,ie=null,Ze.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:re,bindFramebuffer:le,drawBuffers:ce,useProgram:Ue,setBlending:v,setMaterial:ne,setFlipSided:Y,setCullFace:X,setLineWidth:Q,setPolygonOffset:ue,setScissorTest:J,activeTexture:S,bindTexture:x,unbindTexture:L,compressedTexImage2D:H,compressedTexImage3D:j,texImage2D:ye,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:he,texSubImage2D:G,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Oe,viewport:xe,reset:pt}}function cR(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return d?new OffscreenCanvas(S,x):io("canvas")}function _(S,x,L){let H=1;const j=J(S);if((j.width>L||j.height>L)&&(H=L/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(H*j.width),me=Math.floor(H*j.height);f===void 0&&(f=g(G,me));const fe=x?g(G,me):f;return fe.width=G,fe.height=me,fe.getContext("2d").drawImage(S,0,0,G,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+me+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,x,L,H,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=x;if(x===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),x===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),x===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),x===n.RGBA){const me=j?ya:$e.getTransfer(H);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=me===ht?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(S,x){let L;return S?x===null||x===ms||x===tr?L=n.DEPTH24_STENCIL8:x===In?L=n.DEPTH32F_STENCIL8:x===eo&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ms||x===tr?L=n.DEPTH_COMPONENT24:x===In?L=n.DEPTH_COMPONENT32F:x===eo&&(L=n.DEPTH_COMPONENT16),L}function C(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Zt&&S.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){const x=S.target;x.removeEventListener("dispose",I),D(x),x.isVideoTexture&&u.delete(x)}function P(S){const x=S.target;x.removeEventListener("dispose",P),E(x)}function D(S){const x=i.get(S);if(x.__webglInit===void 0)return;const L=S.source,H=h.get(L);if(H){const j=H[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(S),Object.keys(H).length===0&&h.delete(L)}i.remove(S)}function A(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const L=S.source,H=h.get(L);delete H[x.__cacheKey],o.memory.textures--}function E(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let j=0;j<x.__webglFramebuffer[H].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[H][j]);else n.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)n.deleteFramebuffer(x.__webglFramebuffer[H]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=S.textures;for(let H=0,j=L.length;H<j;H++){const G=i.get(L[H]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(L[H])}i.remove(S)}let U=0;function $(){U=0}function V(){const S=U;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),U+=1,S}function ie(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function oe(S,x){const L=i.get(S);if(S.isVideoTexture&&Q(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(L,S,x);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function q(S,x){const L=i.get(S);if(S.version>0&&L.__version!==S.version){se(L,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function te(S,x){const L=i.get(S);if(S.version>0&&L.__version!==S.version){se(L,S,x);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function z(S,x){const L=i.get(S);if(S.version>0&&L.__version!==S.version){pe(L,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const ge={[er]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[va]:n.MIRRORED_REPEAT},Se={[Zt]:n.NEAREST,[Vm]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},Re={[qS]:n.NEVER,[QS]:n.ALWAYS,[KS]:n.LESS,[eg]:n.LEQUAL,[YS]:n.EQUAL,[$S]:n.GEQUAL,[JS]:n.GREATER,[ZS]:n.NOTEQUAL};function Ie(S,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===na||x.magFilter===Pr||x.magFilter===fi||x.minFilter===fn||x.minFilter===na||x.minFilter===Pr||x.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Se[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==Pr&&x.minFilter!==fi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(S,x){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const H=x.source;let j=h.get(H);j===void 0&&(j={},h.set(H,j));const G=ie(x);if(G!==S.__cacheKey){j[G]===void 0&&(j[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[G].usedTimes++;const me=j[S.__cacheKey];me!==void 0&&(j[S.__cacheKey].usedTimes--,me.usedTimes===0&&A(x)),S.__cacheKey=G,S.__webglTexture=j[G].texture}return L}function se(S,x,L){let H=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=n.TEXTURE_3D);const j=Ze(S,x),G=x.source;t.bindTexture(H,S.__webglTexture,n.TEXTURE0+L);const me=i.get(G);if(G.version!==me.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const fe=$e.getPrimaries($e.workingColorSpace),_e=x.colorSpace===Pi?null:$e.getPrimaries(x.colorSpace),Ne=x.colorSpace===Pi||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let he=_(x.image,!1,s.maxTextureSize);he=ue(x,he);const ye=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Oe=M(x.internalFormat,ye,Pe,x.colorSpace,x.isVideoTexture);Ie(H,x);let xe;const Be=x.mipmaps,ze=x.isVideoTexture!==!0,pt=me.__version===void 0||j===!0,O=G.dataReady,Ee=C(x,he);if(x.isDepthTexture)Oe=y(x.format===nr,x.type),pt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Oe,he.width,he.height,0,ye,Pe,null));else if(x.isDataTexture)if(Be.length>0){ze&&pt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,Be[0].width,Be[0].height);for(let ee=0,ae=Be.length;ee<ae;ee++)xe=Be[ee],ze?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,ye,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,ee,Oe,xe.width,xe.height,0,ye,Pe,xe.data);x.generateMipmaps=!1}else ze?(pt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,he.width,he.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ye,Pe,he.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,he.width,he.height,0,ye,Pe,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Oe,Be[0].width,Be[0].height,he.depth);for(let ee=0,ae=Be.length;ee<ae;ee++)if(xe=Be[ee],x.format!==vn)if(ye!==null)if(ze){if(O)if(x.layerUpdates.size>0){const Ae=fd(xe.width,xe.height,x.format,x.type);for(const be of x.layerUpdates){const Xe=xe.data.subarray(be*Ae/xe.data.BYTES_PER_ELEMENT,(be+1)*Ae/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,be,xe.width,xe.height,1,ye,Xe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,he.depth,ye,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Oe,xe.width,xe.height,he.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,he.depth,ye,Pe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Oe,xe.width,xe.height,he.depth,0,ye,Pe,xe.data)}else{ze&&pt&&t.texStorage2D(n.TEXTURE_2D,Ee,Oe,Be[0].width,Be[0].height);for(let ee=0,ae=Be.length;ee<ae;ee++)xe=Be[ee],x.format!==vn?ye!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,ye,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,ee,Oe,xe.width,xe.height,0,ye,Pe,xe.data)}else if(x.isDataArrayTexture)if(ze){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Oe,he.width,he.height,he.depth),O)if(x.layerUpdates.size>0){const ee=fd(he.width,he.height,x.format,x.type);for(const ae of x.layerUpdates){const Ae=he.data.subarray(ae*ee/he.data.BYTES_PER_ELEMENT,(ae+1)*ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,ye,Pe,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Pe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,ye,Pe,he.data);else if(x.isData3DTexture)ze?(pt&&t.texStorage3D(n.TEXTURE_3D,Ee,Oe,he.width,he.height,he.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Pe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,ye,Pe,he.data);else if(x.isFramebufferTexture){if(pt)if(ze)t.texStorage2D(n.TEXTURE_2D,Ee,Oe,he.width,he.height);else{let ee=he.width,ae=he.height;for(let Ae=0;Ae<Ee;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Oe,ee,ae,0,ye,Pe,null),ee>>=1,ae>>=1}}else if(Be.length>0){if(ze&&pt){const ee=J(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Oe,ee.width,ee.height)}for(let ee=0,ae=Be.length;ee<ae;ee++)xe=Be[ee],ze?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye,Pe,xe):t.texImage2D(n.TEXTURE_2D,ee,Oe,ye,Pe,xe);x.generateMipmaps=!1}else if(ze){if(pt){const ee=J(he);t.texStorage2D(n.TEXTURE_2D,Ee,Oe,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Pe,he)}else t.texImage2D(n.TEXTURE_2D,0,Oe,ye,Pe,he);m(x)&&p(H),me.__version=G.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function pe(S,x,L){if(x.image.length!==6)return;const H=Ze(S,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const G=i.get(j);if(j.version!==G.__version||H===!0){t.activeTexture(n.TEXTURE0+L);const me=$e.getPrimaries($e.workingColorSpace),fe=x.colorSpace===Pi?null:$e.getPrimaries(x.colorSpace),_e=x.colorSpace===Pi||me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!Ne&&!he?ye[ae]=_(x.image[ae],!0,s.maxCubemapSize):ye[ae]=he?x.image[ae].image:x.image[ae],ye[ae]=ue(x,ye[ae]);const Pe=ye[0],Oe=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),Be=M(x.internalFormat,Oe,xe,x.colorSpace),ze=x.isVideoTexture!==!0,pt=G.__version===void 0||H===!0,O=j.dataReady;let Ee=C(x,Pe);Ie(n.TEXTURE_CUBE_MAP,x);let ee;if(Ne){ze&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){ee=ye[ae].mipmaps;for(let Ae=0;Ae<ee.length;Ae++){const be=ee[Ae];x.format!==vn?Oe!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,be.width,be.height,Oe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,be.width,be.height,Oe,xe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Be,be.width,be.height,0,Oe,xe,be.data)}}}else{if(ee=x.mipmaps,ze&&pt){ee.length>0&&Ee++;const ae=J(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Oe,xe,ye[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Be,ye[ae].width,ye[ae].height,0,Oe,xe,ye[ae].data);for(let Ae=0;Ae<ee.length;Ae++){const Xe=ee[Ae].image[ae].image;ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Xe.width,Xe.height,Oe,xe,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Be,Xe.width,Xe.height,0,Oe,xe,Xe.data)}}else{ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,xe,ye[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Be,Oe,xe,ye[ae]);for(let Ae=0;Ae<ee.length;Ae++){const be=ee[Ae];ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Oe,xe,be.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Be,Oe,xe,be.image[ae])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),G.__version=j.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Me(S,x,L,H,j,G){const me=r.convert(L.format,L.colorSpace),fe=r.convert(L.type),_e=M(L.internalFormat,me,fe,L.colorSpace),Ne=i.get(x),he=i.get(L);if(he.__renderTarget=x,!Ne.__hasExternalTextures){const ye=Math.max(1,x.width>>G),Pe=Math.max(1,x.height>>G);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,G,_e,ye,Pe,x.depth,0,me,fe,null):t.texImage2D(j,G,_e,ye,Pe,0,me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),X(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,j,he.__webglTexture,0,Y(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,j,he.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(S,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const H=x.depthTexture,j=H&&H.isDepthTexture?H.type:null,G=y(x.stencilBuffer,j),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Y(x);X(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,G,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,G,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,S)}else{const H=x.textures;for(let j=0;j<H.length;j++){const G=H[j],me=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),_e=M(G.internalFormat,me,fe,G.colorSpace),Ne=Y(x);L&&X(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,_e,x.width,x.height):X(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,_e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe(x.depthTexture,0);const j=H.__webglTexture,G=Y(x);if(x.depthTexture.format===Xs)X(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===nr)X(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function le(S){const x=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=H}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");re(x.__webglFramebuffer,S)}else if(L){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=n.createRenderbuffer(),N(x.__webglDepthbuffer[H],S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),N(x.__webglDepthbuffer,S,!1);else{const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(S,x,L){const H=i.get(S);x!==void 0&&Me(H.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&le(S)}function Ue(S){const x=S.texture,L=i.get(S),H=i.get(x);S.addEventListener("dispose",P);const j=S.textures,G=S.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=x.version,o.memory.textures++),G){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let _e=0;_e<x.mipmaps.length;_e++)L.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else L.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)L.__webglFramebuffer[fe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let fe=0,_e=j.length;fe<_e;fe++){const Ne=i.get(j[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&X(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const _e=j[fe];L.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);const Ne=r.convert(_e.format,_e.colorSpace),he=r.convert(_e.type),ye=M(_e.internalFormat,Ne,he,_e.colorSpace,S.isXRRenderTarget===!0),Pe=Y(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),N(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)Me(L.__webglFramebuffer[fe][_e],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Me(L.__webglFramebuffer[fe],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,_e=j.length;fe<_e;fe++){const Ne=j[fe],he=i.get(Ne);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Ie(n.TEXTURE_2D,Ne),Me(L.__webglFramebuffer,S,Ne,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Ie(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)Me(L.__webglFramebuffer[_e],S,x,n.COLOR_ATTACHMENT0,fe,_e);else Me(L.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&p(fe),t.unbindTexture()}S.depthBuffer&&le(S)}function w(S){const x=S.textures;for(let L=0,H=x.length;L<H;L++){const j=x[L];if(m(j)){const G=b(S),me=i.get(j).__webglTexture;t.bindTexture(G,me),p(G),t.unbindTexture()}}}const R=[],v=[];function ne(S){if(S.samples>0){if(X(S)===!1){const x=S.textures,L=S.width,H=S.height;let j=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(S),fe=x.length>1;if(fe)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ne=i.get(x[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,L,H,0,0,L,H,j,n.NEAREST),l===!0&&(R.length=0,v.length=0,R.push(n.COLOR_ATTACHMENT0+_e),S.depthBuffer&&S.resolveDepthBuffer===!1&&(R.push(G),v.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ne=i.get(x[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Y(S){return Math.min(s.maxSamples,S.samples)}function X(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function ue(S,x){const L=S.colorSpace,H=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Qt&&L!==Pi&&($e.getTransfer(L)===ht?(H!==vn||j!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}function J(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=ce,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=X}function uR(n,e){function t(i,s=Pi){let r;const o=$e.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gm)return n.BYTE;if(i===Wm)return n.SHORT;if(i===eo)return n.UNSIGNED_SHORT;if(i===Bu)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===jm)return n.ALPHA;if(i===qm)return n.RGB;if(i===vn)return n.RGBA;if(i===Km)return n.LUMINANCE;if(i===Ym)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===Vu)return n.RED_INTEGER;if(i===Jm)return n.RG;if(i===Gu)return n.RG_INTEGER;if(i===Wu)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lc||i===Dc||i===Uc||i===Nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===Fc||i===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oc||i===Fc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kc||i===Hc||i===zc||i===Vc||i===Gc||i===Wc||i===Xc||i===jc||i===qc||i===Kc||i===Yc||i===Jc||i===Zc||i===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zm||i===tu||i===nu||i===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bi({vertexShader:fR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pR extends ur{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new dR,m=t.getContextAttributes();let p=null,b=null;const M=[],y=[],C=new Qe;let I=null;const P=new Jt;P.viewport=new st;const D=new Jt;D.viewport=new st;const A=[P,D],E=new AE;let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=M[se];return pe===void 0&&(pe=new Ol,M[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=M[se];return pe===void 0&&(pe=new Ol,M[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=M[se];return pe===void 0&&(pe=new Ol,M[se]=pe),pe.getHandSpace()};function V(se){const pe=y.indexOf(se.inputSource);if(pe===-1)return;const Me=M[pe];Me!==void 0&&(Me.update(se.inputSource,se.frame,c||o),Me.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",oe);for(let se=0;se<M.length;se++){const pe=y[se];pe!==null&&(y[se]=null,M[se].disconnect(pe))}U=null,$=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,N=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?nr:Xs,N=m.stencil?tr:ms);const le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new gs(h.textureWidth,h.textureHeight,{format:vn,type:gi,depthTexture:new pg(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new gs(d.framebufferWidth,d.framebufferHeight,{format:vn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(se){for(let pe=0;pe<se.removed.length;pe++){const Me=se.removed[pe],N=y.indexOf(Me);N>=0&&(y[N]=null,M[N].disconnect(Me))}for(let pe=0;pe<se.added.length;pe++){const Me=se.added[pe];let N=y.indexOf(Me);if(N===-1){for(let le=0;le<M.length;le++)if(le>=y.length){y.push(Me),N=le;break}else if(y[le]===null){y[le]=Me,N=le;break}if(N===-1)break}const re=M[N];re&&re.connect(Me)}}const q=new B,te=new B;function z(se,pe,Me){q.setFromMatrixPosition(pe.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const N=q.distanceTo(te),re=pe.projectionMatrix.elements,le=Me.projectionMatrix.elements,ce=re[14]/(re[10]-1),Ue=re[14]/(re[10]+1),w=(re[9]+1)/re[5],R=(re[9]-1)/re[5],v=(re[8]-1)/re[0],ne=(le[8]+1)/le[0],Y=ce*v,X=ce*ne,Q=N/(-v+ne),ue=Q*-v;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ue),se.translateZ(Q),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const J=ce+Q,S=Ue+Q,x=Y-ue,L=X+(N-ue),H=w*Ue/S*J,j=R*Ue/S*J;se.projectionMatrix.makePerspective(x,L,H,j,J,S),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ge(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let pe=se.near,Me=se.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),E.near=D.near=P.near=pe,E.far=D.far=P.far=Me,(U!==E.near||$!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,$=E.far),P.layers.mask=se.layers.mask|2,D.layers.mask=se.layers.mask|4,E.layers.mask=P.layers.mask|D.layers.mask;const N=se.parent,re=E.cameras;ge(E,N);for(let le=0;le<re.length;le++)ge(re[le],N);re.length===2?z(E,P,D):E.projectionMatrix.copy(P.projectionMatrix),Se(se,E,N)};function Se(se,pe,Me){Me===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(Me.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=ir*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Re=null;function Ie(se,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let N=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,N=!0);for(let ce=0;ce<Me.length;ce++){const Ue=Me[ce];let w=null;if(d!==null)w=d.getViewport(Ue);else{const v=f.getViewSubImage(h,Ue);w=v.viewport,ce===0&&(e.setRenderTargetTextures(b,v.colorTexture,h.ignoreDepthValues?void 0:v.depthStencilTexture),e.setRenderTarget(b))}let R=A[ce];R===void 0&&(R=new Jt,R.layers.enable(ce),R.viewport=new st,A[ce]=R),R.matrix.fromArray(Ue.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ue.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ce===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),N===!0&&E.cameras.push(R)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(Me[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,s.renderState)}}for(let Me=0;Me<M.length;Me++){const N=y[Me],re=M[Me];N!==null&&re!==void 0&&re.update(N,pe,c||o)}Re&&Re(se,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ze=new vg;Ze.setAnimationLoop(Ie),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Qi=new Xn,mR=new qe;function gR(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ag(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,Qi.copy(y),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(Qi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _R(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const y=M.program;i.uniformBlockBinding(b,y)}function c(b,M){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(b,C);const I=e.render.frame;r[b.id]!==I&&(h(b),r[b.id]=I)}function u(b){const M=f();b.__bindingPointIndex=M;const y=n.createBuffer(),C=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const M=s[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=y.length;I<P;I++){const D=Array.isArray(y[I])?y[I]:[y[I]];for(let A=0,E=D.length;A<E;A++){const U=D[A];if(d(U,I,A,C)===!0){const $=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let ie=0;for(let oe=0;oe<V.length;oe++){const q=V[oe],te=_(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,$+ie,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,ie),ie+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,M,y,C){const I=b.value,P=M+"_"+y;if(C[P]===void 0)return typeof I=="number"||typeof I=="boolean"?C[P]=I:C[P]=I.clone(),!0;{const D=C[P];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return C[P]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function g(b){const M=b.uniforms;let y=0;const C=16;for(let P=0,D=M.length;P<D;P++){const A=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,U=A.length;E<U;E++){const $=A[E],V=Array.isArray($.value)?$.value:[$.value];for(let ie=0,oe=V.length;ie<oe;ie++){const q=V[ie],te=_(q),z=y%C,ge=z%te.boundary,Se=z+ge;y+=ge,Se!==0&&C-Se<te.storage&&(y+=C-Se),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=te.storage}}}const I=y%C;return I>0&&(y+=C-I),b.__size=y,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class xR{constructor(e={}){const{canvas:t=_M(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Fi,this.toneMappingExposure=1;const y=this;let C=!1,I=0,P=0,D=null,A=-1,E=null;const U=new st,$=new st;let V=null;const ie=new Ge(0);let oe=0,q=t.width,te=t.height,z=1,ge=null,Se=null;const Re=new st(0,0,q,te),Ie=new st(0,0,q,te);let Ze=!1;const se=new Yu;let pe=!1,Me=!1;this.transmissionResolutionScale=1;const N=new qe,re=new qe,le=new B,ce=new st,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return D===null?z:1}let v=i;function ne(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",be,!1),v===null){const F="webgl2";if(v=ne(F,T),v===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,X,Q,ue,J,S,x,L,H,j,G,me,fe,_e,Ne,he,ye,Pe,Oe,xe,Be,ze,pt,O;function Ee(){Y=new RA(v),Y.init(),ze=new uR(v,Y),X=new SA(v,Y,e,ze),Q=new lR(v,Y),X.reverseDepthBuffer&&h&&Q.buffers.depth.setReversed(!0),ue=new IA(v),J=new Yw,S=new cR(v,Y,Q,J,X,ze,ue),x=new EA(y),L=new wA(y),H=new FE(v),pt=new vA(v,H),j=new CA(v,H,ue,pt),G=new DA(v,j,H,ue),Oe=new LA(v,X,S),he=new MA(J),me=new Kw(y,x,L,Y,X,pt,he),fe=new gR(y,J),_e=new Zw,Ne=new iR(Y),Pe=new xA(y,x,L,Q,G,d,l),ye=new oR(y,G,X),O=new _R(v,ue,X,Q),xe=new yA(v,Y,ue),Be=new PA(v,Y,ue),ue.programs=me.programs,y.capabilities=X,y.extensions=Y,y.properties=J,y.renderLists=_e,y.shadowMap=ye,y.state=Q,y.info=ue}Ee();const ee=new pR(y,v);this.xr=ee,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(q,te,!1))},this.getSize=function(T){return T.set(q,te)},this.setSize=function(T,F,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,te=F,t.width=Math.floor(T*z),t.height=Math.floor(F*z),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*z,te*z).floor()},this.setDrawingBufferSize=function(T,F,W){q=T,te=F,z=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Re)},this.setViewport=function(T,F,W,K){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,F,W,K),Q.viewport(U.copy(Re).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,F,W,K){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,F,W,K),Q.scissor($.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){Q.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let K=0;if(T){let k=!1;if(D!==null){const de=D.texture.format;k=de===Wu||de===Gu||de===Vu}if(k){const de=D.texture.type,Te=de===gi||de===ms||de===eo||de===tr||de===ku||de===Hu,we=Pe.getClearColor(),Ce=Pe.getClearAlpha(),ke=we.r,He=we.g,Le=we.b;Te?(g[0]=ke,g[1]=He,g[2]=Le,g[3]=Ce,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=ke,_[1]=He,_[2]=Le,_[3]=Ce,v.clearBufferiv(v.COLOR,0,_))}else K|=v.COLOR_BUFFER_BIT}F&&(K|=v.DEPTH_BUFFER_BIT),W&&(K|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Pe.dispose(),_e.dispose(),Ne.dispose(),J.dispose(),x.dispose(),L.dispose(),G.dispose(),pt.dispose(),O.dispose(),me.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",sf),ee.removeEventListener("sessionend",rf),Wi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ue.autoReset,F=ye.enabled,W=ye.autoUpdate,K=ye.needsUpdate,k=ye.type;Ee(),ue.autoReset=T,ye.enabled=F,ye.autoUpdate=W,ye.needsUpdate=K,ye.type=k}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const F=T.target;F.removeEventListener("dispose",Xe),St(F)}function St(T){Ft(T),J.remove(T)}function Ft(T){const F=J.get(T).programs;F!==void 0&&(F.forEach(function(W){me.releaseProgram(W)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,K,k,de){F===null&&(F=Ue);const Te=k.isMesh&&k.matrixWorld.determinant()<0,we=Ag(T,F,W,K,k);Q.setMaterial(K,Te);let Ce=W.index,ke=1;if(K.wireframe===!0){if(Ce=j.getWireframeAttribute(W),Ce===void 0)return;ke=2}const He=W.drawRange,Le=W.attributes.position;let et=He.start*ke,rt=(He.start+He.count)*ke;de!==null&&(et=Math.max(et,de.start*ke),rt=Math.min(rt,(de.start+de.count)*ke)),Ce!==null?(et=Math.max(et,0),rt=Math.min(rt,Ce.count)):Le!=null&&(et=Math.max(et,0),rt=Math.min(rt,Le.count));const At=rt-et;if(At<0||At===1/0)return;pt.setup(k,K,we,W,Ce);let Mt,nt=xe;if(Ce!==null&&(Mt=H.get(Ce),nt=Be,nt.setIndex(Mt)),k.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*R()),nt.setMode(v.LINES)):nt.setMode(v.TRIANGLES);else if(k.isLine){let De=K.linewidth;De===void 0&&(De=1),Q.setLineWidth(De*R()),k.isLineSegments?nt.setMode(v.LINES):k.isLineLoop?nt.setMode(v.LINE_LOOP):nt.setMode(v.LINE_STRIP)}else k.isPoints?nt.setMode(v.POINTS):k.isSprite&&nt.setMode(v.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Ut=k._multiDrawCounts,ot=k._multiDrawCount,En=Ce?H.get(Ce).bytesPerElement:1,_s=J.get(K).currentProgram.getUniforms();for(let on=0;on<ot;on++)_s.setValue(v,"_gl_DrawID",on),nt.render(De[on]/En,Ut[on])}else if(k.isInstancedMesh)nt.renderInstances(et,At,k.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ut=Math.min(W.instanceCount,De);nt.renderInstances(et,At,Ut)}else nt.render(et,At)};function ct(T,F,W){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,mo(T,F,W),T.side=mi,T.needsUpdate=!0,mo(T,F,W),T.side=Rn):mo(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),p=Ne.get(W),p.init(F),M.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const K=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let Te=0;Te<de.length;Te++){const we=de[Te];ct(we,W,k),K.add(we)}else ct(de,W,k),K.add(de)}),p=M.pop(),K},this.compileAsync=function(T,F,W=null){const K=this.compile(T,F,W);return new Promise(k=>{function de(){if(K.forEach(function(Te){J.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){k(T);return}setTimeout(de,10)}Y.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Mn=null;function Zn(T){Mn&&Mn(T)}function sf(){Wi.stop()}function rf(){Wi.start()}const Wi=new vg;Wi.setAnimationLoop(Zn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(T){Mn=T,ee.setAnimationLoop(T),T===null?Wi.stop():Wi.start()},ee.addEventListener("sessionstart",sf),ee.addEventListener("sessionend",rf),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,D),p=Ne.get(T,M.length),p.init(F),M.push(p),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),se.setFromProjectionMatrix(re),Me=this.localClippingEnabled,pe=he.init(this.clippingPlanes,Me),m=_e.get(T,b.length),m.init(),b.push(m),ee.enabled===!0&&ee.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&Ja(de,F,-1/0,y.sortObjects)}Ja(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ge,Se),w=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,w&&Pe.addToRenderList(m,T),this.info.render.frame++,pe===!0&&he.beginShadows();const W=p.state.shadowsArray;ye.render(W,T,F),pe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){const de=F.cameras;if(k.length>0)for(let Te=0,we=de.length;Te<we;Te++){const Ce=de[Te];af(K,k,T,Ce)}w&&Pe.render(T);for(let Te=0,we=de.length;Te<we;Te++){const Ce=de[Te];of(m,T,Ce,Ce.viewport)}}else k.length>0&&af(K,k,T,F),w&&Pe.render(T),of(m,T,F);D!==null&&P===0&&(S.updateMultisampleRenderTarget(D),S.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,F),pt.resetDefaultState(),A=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],pe===!0&&he.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ja(T,F,W,K){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){K&&ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const Te=G.update(T),we=T.material;we.visible&&m.push(T,Te,we,W,ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const Te=G.update(T),we=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ce.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ce.copy(Te.boundingSphere.center)),ce.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Ce=Te.groups;for(let ke=0,He=Ce.length;ke<He;ke++){const Le=Ce[ke],et=we[Le.materialIndex];et&&et.visible&&m.push(T,Te,et,W,ce.z,Le)}}else we.visible&&m.push(T,Te,we,W,ce.z,null)}}const de=T.children;for(let Te=0,we=de.length;Te<we;Te++)Ja(de[Te],F,W,K)}function of(T,F,W,K){const k=T.opaque,de=T.transmissive,Te=T.transparent;p.setupLightsView(W),pe===!0&&he.setGlobalState(y.clippingPlanes,W),K&&Q.viewport(U.copy(K)),k.length>0&&po(k,F,W),de.length>0&&po(de,F,W),Te.length>0&&po(Te,F,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function af(T,F,W,K){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new gs(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?co:gi,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const de=p.state.transmissionRenderTarget[K.id],Te=K.viewport||U;de.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);const we=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(ie),oe=y.getClearAlpha(),oe<1&&y.setClearColor(16777215,.5),y.clear(),w&&Pe.render(W);const Ce=y.toneMapping;y.toneMapping=Fi;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),pe===!0&&he.setGlobalState(y.clippingPlanes,K),po(T,W,K),S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de),Y.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Le=0,et=F.length;Le<et;Le++){const rt=F[Le],At=rt.object,Mt=rt.geometry,nt=rt.material,De=rt.group;if(nt.side===Rn&&At.layers.test(K.layers)){const Ut=nt.side;nt.side=rn,nt.needsUpdate=!0,lf(At,W,K,Mt,nt,De),nt.side=Ut,nt.needsUpdate=!0,He=!0}}He===!0&&(S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de))}y.setRenderTarget(we),y.setClearColor(ie,oe),ke!==void 0&&(K.viewport=ke),y.toneMapping=Ce}function po(T,F,W){const K=F.isScene===!0?F.overrideMaterial:null;for(let k=0,de=T.length;k<de;k++){const Te=T[k],we=Te.object,Ce=Te.geometry,ke=K===null?Te.material:K,He=Te.group;we.layers.test(W.layers)&&lf(we,F,W,Ce,ke,He)}}function lf(T,F,W,K,k,de){T.onBeforeRender(y,F,W,K,k,de),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,F,W,K,T,de),k.transparent===!0&&k.side===Rn&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,y.renderBufferDirect(W,F,K,k,T,de),k.side=mi,k.needsUpdate=!0,y.renderBufferDirect(W,F,K,k,T,de),k.side=Rn):y.renderBufferDirect(W,F,K,k,T,de),T.onAfterRender(y,F,W,K,k,de)}function mo(T,F,W){F.isScene!==!0&&(F=Ue);const K=J.get(T),k=p.state.lights,de=p.state.shadowsArray,Te=k.state.version,we=me.getParameters(T,k.state,de,F,W),Ce=me.getProgramCacheKey(we);let ke=K.programs;K.environment=T.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(T.isMeshStandardMaterial?L:x).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Xe),ke=new Map,K.programs=ke);let He=ke.get(Ce);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Te)return uf(T,we),He}else we.uniforms=me.getUniforms(T),T.onBeforeCompile(we,y),He=me.acquireProgram(we,Ce),ke.set(Ce,He),K.uniforms=we.uniforms;const Le=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=he.uniform),uf(T,we),K.needsLights=Rg(T),K.lightsStateVersion=Te,K.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function cf(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=la.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function uf(T,F){const W=J.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ag(T,F,W,K,k){F.isScene!==!0&&(F=Ue),S.resetTextureUnits();const de=F.fog,Te=K.isMeshStandardMaterial?F.environment:null,we=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qt,Ce=(K.isMeshStandardMaterial?L:x).get(K.envMap||Te),ke=K.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let At=Fi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=y.toneMapping);const Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=Mt!==void 0?Mt.length:0,De=J.get(K),Ut=p.state.lights;if(pe===!0&&(Me===!0||T!==E)){const Wt=T===E&&K.id===A;he.setState(K,T,Wt)}let ot=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ut.state.version||De.outputColorSpace!==we||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Ce||K.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==He||De.morphTargets!==Le||De.morphNormals!==et||De.morphColors!==rt||De.toneMapping!==At||De.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,De.__version=K.version);let En=De.currentProgram;ot===!0&&(En=mo(K,F,k));let _s=!1,on=!1,mr=!1;const _t=En.getUniforms(),dn=De.uniforms;if(Q.useProgram(En.program)&&(_s=!0,on=!0,mr=!0),K.id!==A&&(A=K.id,on=!0),_s||E!==T){Q.buffers.depth.getReversed()?(N.copy(T.projectionMatrix),vM(N),yM(N),_t.setValue(v,"projectionMatrix",N)):_t.setValue(v,"projectionMatrix",T.projectionMatrix),_t.setValue(v,"viewMatrix",T.matrixWorldInverse);const en=_t.map.cameraPosition;en!==void 0&&en.setValue(v,le.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&_t.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_t.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,on=!0,mr=!0)}if(k.isSkinnedMesh){_t.setOptional(v,k,"bindMatrix"),_t.setOptional(v,k,"bindMatrixInverse");const Wt=k.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(v,"boneTexture",Wt.boneTexture,S))}k.isBatchedMesh&&(_t.setOptional(v,k,"batchingTexture"),_t.setValue(v,"batchingTexture",k._matricesTexture,S),_t.setOptional(v,k,"batchingIdTexture"),_t.setValue(v,"batchingIdTexture",k._indirectTexture,S),_t.setOptional(v,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(v,"batchingColorTexture",k._colorsTexture,S));const pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Oe.update(k,W,En),(on||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,_t.setValue(v,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(dn.envMap.value=Ce,dn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),on&&(_t.setValue(v,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&wg(dn,mr),de&&K.fog===!0&&fe.refreshFogUniforms(dn,de),fe.refreshMaterialUniforms(dn,K,z,te,p.state.transmissionRenderTarget[T.id]),la.upload(v,cf(De),dn,S)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(la.upload(v,cf(De),dn,S),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_t.setValue(v,"center",k.center),_t.setValue(v,"modelViewMatrix",k.modelViewMatrix),_t.setValue(v,"normalMatrix",k.normalMatrix),_t.setValue(v,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Wt=K.uniformsGroups;for(let en=0,Za=Wt.length;en<Za;en++){const Xi=Wt[en];O.update(Xi,En),O.bind(Xi,En)}}return En}function wg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Rg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,F,W){J.get(T.texture).__webglTexture=F,J.get(T.depthTexture).__webglTexture=W;const K=J.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=W===void 0,K.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=J.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Cg=v.createFramebuffer();this.setRenderTarget=function(T,F=0,W=0){D=T,I=F,P=W;let K=!0,k=null,de=!1,Te=!1;if(T){const Ce=J.get(T);if(Ce.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(v.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(Ce.__hasExternalTextures)S.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(Ce.__boundDepthTexture!==Le){if(Le!==null&&J.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Te=!0);const He=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?k=He[F][W]:k=He[F],de=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?k=J.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[W]:k=He,U.copy(T.viewport),$.copy(T.scissor),V=T.scissorTest}else U.copy(Re).multiplyScalar(z).floor(),$.copy(Ie).multiplyScalar(z).floor(),V=Ze;if(W!==0&&(k=Cg),Q.bindFramebuffer(v.FRAMEBUFFER,k)&&K&&Q.drawBuffers(T,k),Q.viewport(U),Q.scissor($),Q.setScissorTest(V),de){const Ce=J.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,W)}else if(Te){const Ce=J.get(T.texture),ke=F;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ce.__webglTexture,W,ke)}else if(T!==null&&W!==0){const Ce=J.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ce.__webglTexture,W)}A=-1},this.readRenderTargetPixels=function(T,F,W,K,k,de,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){Q.bindFramebuffer(v.FRAMEBUFFER,we);try{const Ce=T.texture,ke=Ce.format,He=Ce.type;if(!X.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-K&&W>=0&&W<=T.height-k&&v.readPixels(F,W,K,k,ze.convert(ke),ze.convert(He),de)}finally{const Ce=D!==null?J.get(D).__webglFramebuffer:null;Q.bindFramebuffer(v.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,K,k,de,Te){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){const Ce=T.texture,ke=Ce.format,He=Ce.type;if(!X.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-K&&W>=0&&W<=T.height-k){Q.bindFramebuffer(v.FRAMEBUFFER,we);const Le=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.bufferData(v.PIXEL_PACK_BUFFER,de.byteLength,v.STREAM_READ),v.readPixels(F,W,K,k,ze.convert(ke),ze.convert(He),0);const et=D!==null?J.get(D).__webglFramebuffer:null;Q.bindFramebuffer(v.FRAMEBUFFER,et);const rt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await xM(v,rt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,de),v.deleteBuffer(Le),v.deleteSync(rt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-W),k=Math.floor(T.image.width*K),de=Math.floor(T.image.height*K),Te=F!==null?F.x:0,we=F!==null?F.y:0;S.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,W,0,0,Te,we,k,de),Q.unbindTexture()};const Pg=v.createFramebuffer(),Ig=v.createFramebuffer();this.copyTextureToTexture=function(T,F,W=null,K=null,k=0,de=null){T.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],F=arguments[2],de=arguments[3]||0,W=null),de===null&&(k!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=k,k=0):de=0);let Te,we,Ce,ke,He,Le,et,rt,At;const Mt=T.isCompressedTexture?T.mipmaps[de]:T.image;if(W!==null)Te=W.max.x-W.min.x,we=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,He=W.min.y,Le=W.isBox3?W.min.z:0;else{const pn=Math.pow(2,-k);Te=Math.floor(Mt.width*pn),we=Math.floor(Mt.height*pn),T.isDataArrayTexture?Ce=Mt.depth:T.isData3DTexture?Ce=Math.floor(Mt.depth*pn):Ce=1,ke=0,He=0,Le=0}K!==null?(et=K.x,rt=K.y,At=K.z):(et=0,rt=0,At=0);const nt=ze.convert(F.format),De=ze.convert(F.type);let Ut;F.isData3DTexture?(S.setTexture3D(F,0),Ut=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Ut=v.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Ut=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=v.getParameter(v.UNPACK_ROW_LENGTH),En=v.getParameter(v.UNPACK_IMAGE_HEIGHT),_s=v.getParameter(v.UNPACK_SKIP_PIXELS),on=v.getParameter(v.UNPACK_SKIP_ROWS),mr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Mt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Mt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ke),v.pixelStorei(v.UNPACK_SKIP_ROWS,He),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Le);const _t=T.isDataArrayTexture||T.isData3DTexture,dn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const pn=J.get(T),Wt=J.get(F),en=J.get(pn.__renderTarget),Za=J.get(Wt.__renderTarget);Q.bindFramebuffer(v.READ_FRAMEBUFFER,en.__webglFramebuffer),Q.bindFramebuffer(v.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let Xi=0;Xi<Ce;Xi++)_t&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,J.get(T).__webglTexture,k,Le+Xi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,J.get(F).__webglTexture,de,At+Xi)),v.blitFramebuffer(ke,He,Te,we,et,rt,Te,we,v.DEPTH_BUFFER_BIT,v.NEAREST);Q.bindFramebuffer(v.READ_FRAMEBUFFER,null),Q.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||J.has(T)){const pn=J.get(T),Wt=J.get(F);Q.bindFramebuffer(v.READ_FRAMEBUFFER,Pg),Q.bindFramebuffer(v.DRAW_FRAMEBUFFER,Ig);for(let en=0;en<Ce;en++)_t?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,pn.__webglTexture,k,Le+en):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,pn.__webglTexture,k),dn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Wt.__webglTexture,de,At+en):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Wt.__webglTexture,de),k!==0?v.blitFramebuffer(ke,He,Te,we,et,rt,Te,we,v.COLOR_BUFFER_BIT,v.NEAREST):dn?v.copyTexSubImage3D(Ut,de,et,rt,At+en,ke,He,Te,we):v.copyTexSubImage2D(Ut,de,et,rt,ke,He,Te,we);Q.bindFramebuffer(v.READ_FRAMEBUFFER,null),Q.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else dn?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(Ut,de,et,rt,At,Te,we,Ce,nt,De,Mt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(Ut,de,et,rt,At,Te,we,Ce,nt,Mt.data):v.texSubImage3D(Ut,de,et,rt,At,Te,we,Ce,nt,De,Mt):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,de,et,rt,Te,we,nt,De,Mt.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,de,et,rt,Mt.width,Mt.height,nt,Mt.data):v.texSubImage2D(v.TEXTURE_2D,de,et,rt,Te,we,nt,De,Mt);v.pixelStorei(v.UNPACK_ROW_LENGTH,ot),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,En),v.pixelStorei(v.UNPACK_SKIP_PIXELS,_s),v.pixelStorei(v.UNPACK_SKIP_ROWS,on),v.pixelStorei(v.UNPACK_SKIP_IMAGES,mr),de===0&&F.generateMipmaps&&v.generateMipmap(Ut),Q.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,K=null,k=0){return T.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,K=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,W,K,k)},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){I=0,P=0,D=null,Q.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Od(n,e){if(e===GS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===su||e===$m){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===su)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class vR extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new TR(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new BR(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Gr.extractUrlBase(e);o=Gr.resolveURL(c,this.path)}else o=Gr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _g(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tg){try{o[Je.KHR_BINARY_GLTF]=new kR(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $R(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new MR;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new HR(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new zR;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new VR;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function yR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SR{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ME(u),c.distance=f;break;case"spot":c=new yE(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class MR{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ls}extendParams(e,t,i){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}}class ER{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class TR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(a,a)}return Promise.all(r)}}class bR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class AR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class RR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class CR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}}class PR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class IR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}}class LR{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class DR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class UR{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class NR{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OR{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FR{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class BR{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new qe,m=new B,p=new Gi,b=new B(1,1,1),M=new ZM(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,_.compose(m,p,b));for(const y in l)if(y==="_COLOR_0"){const C=l[y];M.instanceColor=new ou(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Tg="glTF",Rr=12,Fd={JSON:1313821514,BIN:5130562};class kR{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Rr,r=new DataView(e,Rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Fd.JSON){const c=new Uint8Array(e,Rr+o,a);this.content=i.decode(c)}else if(l===Fd.BIN){const c=Rr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=cu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=cu[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=qs[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(d)},a,c,Qt,h)})})}}class zR{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class VR{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class bg extends ho{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,b=1-m,M=p-h+f;for(let y=0;y!==a;y++){const C=o[_+y+a],I=o[_+y+l]*u,P=o[g+y+a],D=o[g+y]*u;r[y]=b*C+M*I+m*P+p*D}return r}}const GR=new Gi;class WR extends bg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return GR.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:Zt,9729:fn,9984:Vm,9985:na,9986:Pr,9987:fi},kd={33071:Ii,33648:va,10497:er},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XR={CUBICSPLINE:void 0,LINEAR:no,STEP:to},Jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new qa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),n.DefaultMaterial}function es(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function li(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qR(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function KR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YR(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zl(t.attributes):e=n.indices+":"+Zl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Zl(n.targets[i]);return e}function Zl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function uu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ZR=new qe;class $R{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new xE(this.options.manager):this.textureLoader=new bE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _g(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return es(r,a,s),li(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Gr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Yl[s.type],a=qs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new $t(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Yl[s.type],c=qs[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(b);M||(_=new c(a,p*d,s.count*d/u),M=new jM(_,d/u),t.cache.add(b,M)),m=new qu(M,l,h%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new $t(_,l,g);if(s.sparse!==void 0){const p=Yl.SCALAR,b=qs[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new b(o[1],M,s.sparse.count*p),I=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,D=C.length;P<D;P++){const A=C[P];if(m.setX(A,I[P*l]),l>=2&&m.setY(A,I[P*l+1]),l>=3&&m.setZ(A,I[P*l+2]),l>=4&&m.setW(A,I[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Bd[h.magFilter]||fn,u.minFilter=Bd[h.minFilter]||fi,u.wrapS=kd[h.wrapS]||er,u.wrapT=kd[h.wrapT]||er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,h(m)}),t.load(Gr.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),li(f,o),f.userData.mimeType=o.mimeType||JR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new dg,Gn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new hg,Gn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return qa}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const f=s[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Qt),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Nt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rn);const u=r.alphaMode||Jl.OPAQUE;if(u===Jl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ls&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ls&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ls){const f=r.emissiveFactor;a.emissive=new Ge().setRGB(f[0],f[1],f[2],Qt)}return r.emissiveTexture!==void 0&&o!==ls&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),li(f,r),t.associations.set(f,{materials:e}),r.extensions&&es(s,f,r),f})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=YR(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Hd(new Kn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?jR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const b=c[d];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new KM(_,b):new nn(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=Od(p.geometry,$m):m.mode===gn.TRIANGLE_FAN&&(p.geometry=Od(p.geometry,su));else if(m.mode===gn.LINES)p=new eE(_,b);else if(m.mode===gn.LINE_STRIP)p=new Ju(_,b);else if(m.mode===gn.LINE_LOOP)p=new tE(_,b);else if(m.mode===gn.POINTS)p=new nE(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&KR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),li(p,r),m.extensions&&es(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&es(s,f[0],r),f[0];const h=new Li;r.extensions&&es(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(gM.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new $u(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),li(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new qe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ku(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let b=0,M=h.length;b<M;b++){const y=h[b],C=d[b],I=g[b],P=_[b],D=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=i._createAnimationTracks(y,C,I,P,D);if(A)for(let E=0;E<A.length;E++)p.push(A[E])}return new fE(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,ZR)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ug:c.length>1?u=new Li:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),li(u,r),r.extensions&&es(i,u,r),r.matrix!==void 0){const f=new qe;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Li;i.name&&(r.name=s.createUniqueName(i.name)),li(r,i),i.extensions&&es(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof Gn||h instanceof Dt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];bi[r.path]===bi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(bi[r.path]){case bi.weights:c=rr;break;case bi.rotation:c=or;break;case bi.position:case bi.scale:c=ar;break;default:switch(i.itemSize){case 1:c=rr;break;case 2:case 3:default:c=ar;break}break}const u=s.interpolation!==void 0?XR[s.interpolation]:no,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+bi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof or?WR:bg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QR(n,e,t){const i=e.attributes,s=new jn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=uu(qs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=uu(qs[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Hd(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=cu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return $e.workingColorSpace!==Qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),li(n,e),QR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qR(n,e.targets,t):n})}const eC={class:"configurator-container"},tC={class:"stepper"},nC=["onClick"],iC={class:"step-number"},sC={class:"step-name"},rC={key:0,class:"step-line"},oC={class:"main-content"},aC={key:0,class:"step-content"},lC={key:0,class:"series-buttons-row"},cC=["onClick"],uC={key:1,class:"models-row"},fC={class:"models-container"},hC=["onClick"],dC={key:1,class:"step-content"},pC={class:"viewer-area"},mC={key:2,class:"step-content"},gC={class:"toolbar"},_C=["disabled"],xC={__name:"ConfiguratorPage",setup(n){const e=uS(),t=Tt(()=>e.currentStep),i=Tt(()=>e.menuItems[0].subItems),s=Tt(()=>e.selectedSeries),r=Tt(()=>e.selectedModel),o=Tt(()=>e.currentStep===e.menuItems.length-1);Tt(()=>s.value&&(o.value||r.value));const a=M=>{e.selectSeries(M)},l=M=>{e.selectModel(M)},c=()=>{e.currentStep>0&&e.updateStep(e.currentStep-1)},u=Tt(()=>e.menuItems);Tt(()=>t.value!==null?u.value[t.value]:null);const f=()=>{o.value?console.log("Save configuration:",e.selectedSeries,e.selectedModel):e.updateStep(e.currentStep+1)},h=wn(null);let d,g,_,m;const p=()=>{const M=h.value;if(!M)return;d=new XM;const y=M.clientWidth/M.clientHeight;g=new Jt(75,y,.1,1e3),g.position.set(4,5,11),_=new xR({antialias:!0}),_.setSize(M.clientWidth,M.clientHeight),_.setPixelRatio(window.devicePixelRatio),M.appendChild(_.domElement);const C=new TE(16777215,.8);d.add(C);const I=new xg(16777215,1);I.position.set(10,10,10),d.add(I);const P=new fo(20,20);P.rotateX(-Math.PI/2);const D=new qa({color:10066329,side:Rn}),A=new nn(P,D);d.add(A),new vR().load("models/TRIO120/model.glb",U=>{m=U.scene;const $=new Li;d.add($),$.add(m);const V=.5;m.scale.set(V,V,V);const ie=new jn().setFromObject(m),oe=new B;ie.getCenter(oe),m.position.set(-oe.x,-ie.min.y,-oe.z),console.log("Model scaled and centered for rotation:",m.scale,m.position);const q=()=>{requestAnimationFrame(q),$.rotation.y+=.005,_.render(d,g)};q(),b()},void 0,U=>{console.error("Error loading model:",U)}),b()},b=()=>{requestAnimationFrame(b),_.render(d,g)};return Gs(t,async M=>{M===1&&(await Ia(),p())}),bp(()=>{t.value===1&&p()}),(M,y)=>(gt(),vt("div",eC,[tt("div",tC,[(gt(!0),vt(xn,null,il(u.value,(C,I)=>(gt(),vt("div",{key:I,class:Wr(["step",{active:I===t.value,completed:I<=M.lastCompletedStep}]),onClick:P=>M.toggleStep(I)},[tt("span",iC,_n(I+1),1),tt("span",sC,_n(C.name),1),I<u.value.length-1?(gt(),vt("span",rC)):Yr("",!0)],10,nC))),128))]),tt("div",oC,[t.value===0?(gt(),vt("div",aC,[y[0]||(y[0]=tt("h2",null,"Select Your House Series",-1)),s.value?(gt(),vt("div",uC,[tt("h3",null,"Available Models in "+_n(s.value.name),1),tt("div",fC,[(gt(!0),vt(xn,null,il(s.value.subItems,C=>(gt(),vt("button",{key:C.name,class:Wr({selected:r.value===C.name}),onClick:I=>l(C)},_n(C.name),11,hC))),128))])])):(gt(),vt("div",lC,[(gt(!0),vt(xn,null,il(i.value,C=>(gt(),vt("div",{key:C.name,class:"series-box",onClick:I=>a(C)},[tt("h3",null,_n(C.name),1)],8,cC))),128))]))])):t.value===1?(gt(),vt("div",dC,[tt("div",pC,[tt("div",{ref_key:"viewer",ref:h,class:"model-viewer"},null,512)])])):(gt(),vt("div",mC,[tt("p",null,"Placeholder content for "+_n(u.value[t.value].name),1)])),y[1]||(y[1]=tt("div",{class:"price-box"},[tt("p",null,[Cu("Price: "),tt("strong",null,"€21,000")]),tt("button",{class:"details-btn"},"Show Details")],-1))]),tt("div",gC,[tt("button",{class:"toolbar-btn back-btn",disabled:t.value===0,onClick:c}," Back ",8,_C),tt("button",{class:"toolbar-btn next-btn",onClick:f},_n(o.value?"Save":"Next"),1)])]))}},vC=Fa(xC,[["__scopeId","data-v-4847e06c"]]),yC=[{path:"/",name:"home",component:T0},{path:"/auth",name:"auth",component:nS},{path:"/project",name:"projectConfigurator",component:vC}],SC=t0({history:Pv(),routes:yC}),nf=Zx(y0);nf.use(iS());nf.use(SC);nf.mount("#app");

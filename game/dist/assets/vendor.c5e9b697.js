function ip(e){var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){return r.reject(t)})})}function op(e){var r=this;return new r(function(t,n){if(!(e&&typeof e.length!="undefined"))return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(e);if(i.length===0)return t([]);var o=i.length;function s(u,l){if(l&&(typeof l=="object"||typeof l=="function")){var h=l.then;if(typeof h=="function"){h.call(l,function(f){s(u,f)},function(f){i[u]={status:"rejected",reason:f},--o==0&&t(i)});return}}i[u]={status:"fulfilled",value:l},--o==0&&t(i)}for(var a=0;a<i.length;a++)s(a,i[a])})}var sp=setTimeout,bu=typeof setImmediate!="undefined"?setImmediate:null;function Tu(e){return Boolean(e&&typeof e.length!="undefined")}function ap(){}function up(e,r){return function(){e.apply(r,arguments)}}function It(e){if(!(this instanceof It))throw new TypeError("Promises must be constructed via new");if(typeof e!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Eu(e,this)}function wu(e,r){for(;e._state===3;)e=e._value;if(e._state===0){e._deferreds.push(r);return}e._handled=!0,It._immediateFn(function(){var t=e._state===1?r.onFulfilled:r.onRejected;if(t===null){(e._state===1?yo:an)(r.promise,e._value);return}var n;try{n=t(e._value)}catch(i){an(r.promise,i);return}yo(r.promise,n)})}function yo(e,r){try{if(r===e)throw new TypeError("A promise cannot be resolved with itself.");if(r&&(typeof r=="object"||typeof r=="function")){var t=r.then;if(r instanceof It){e._state=3,e._value=r,xo(e);return}else if(typeof t=="function"){Eu(up(t,r),e);return}}e._state=1,e._value=r,xo(e)}catch(n){an(e,n)}}function an(e,r){e._state=2,e._value=r,xo(e)}function xo(e){e._state===2&&e._deferreds.length===0&&It._immediateFn(function(){e._handled||It._unhandledRejectionFn(e._value)});for(var r=0,t=e._deferreds.length;r<t;r++)wu(e,e._deferreds[r]);e._deferreds=null}function lp(e,r,t){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof r=="function"?r:null,this.promise=t}function Eu(e,r){var t=!1;try{e(function(n){t||(t=!0,yo(r,n))},function(n){t||(t=!0,an(r,n))})}catch(n){if(t)return;t=!0,an(r,n)}}It.prototype.catch=function(e){return this.then(null,e)};It.prototype.then=function(e,r){var t=new this.constructor(ap);return wu(this,new lp(e,r,t)),t};It.prototype.finally=ip;It.all=function(e){return new It(function(r,t){if(!Tu(e))return t(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(n.length===0)return r([]);var i=n.length;function o(a,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var l=u.then;if(typeof l=="function"){l.call(u,function(h){o(a,h)},t);return}}n[a]=u,--i==0&&r(n)}catch(h){t(h)}}for(var s=0;s<n.length;s++)o(s,n[s])})};It.allSettled=op;It.resolve=function(e){return e&&typeof e=="object"&&e.constructor===It?e:new It(function(r){r(e)})};It.reject=function(e){return new It(function(r,t){t(e)})};It.race=function(e){return new It(function(r,t){if(!Tu(e))return t(new TypeError("Promise.race accepts an array"));for(var n=0,i=e.length;n<i;n++)It.resolve(e[n]).then(r,t)})};It._immediateFn=typeof bu=="function"&&function(e){bu(e)}||function(e){sp(e,0)};It._unhandledRejectionFn=function(r){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",r)};var ye=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Cu=Object.getOwnPropertySymbols,hp=Object.prototype.hasOwnProperty,fp=Object.prototype.propertyIsEnumerable;function cp(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function dp(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(o){return r[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var pp=dp()?Object.assign:function(e,r){for(var t,n=cp(e),i,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var s in t)hp.call(t,s)&&(n[s]=t[s]);if(Cu){i=Cu(t);for(var a=0;a<i.length;a++)fp.call(t,i[a])&&(n[i[a]]=t[i[a]])}}return n};/*!
 * @pixi/polyfill - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */self.Promise||(self.Promise=It);Object.assign||(Object.assign=pp);var vp=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(self.performance&&self.performance.now)){var _p=Date.now();self.performance||(self.performance={}),self.performance.now=function(){return Date.now()-_p}}var bo=Date.now(),Pu=["ms","moz","webkit","o"];for(var To=0;To<Pu.length&&!self.requestAnimationFrame;++To){var wo=Pu[To];self.requestAnimationFrame=self[wo+"RequestAnimationFrame"],self.cancelAnimationFrame=self[wo+"CancelAnimationFrame"]||self[wo+"CancelRequestAnimationFrame"]}self.requestAnimationFrame||(self.requestAnimationFrame=function(e){if(typeof e!="function")throw new TypeError(e+"is not a function");var r=Date.now(),t=vp+bo-r;return t<0&&(t=0),bo=r,self.setTimeout(function(){bo=Date.now(),e(performance.now())},t)});self.cancelAnimationFrame||(self.cancelAnimationFrame=function(e){return clearTimeout(e)});Math.sign||(Math.sign=function(r){return r=Number(r),r===0||isNaN(r)?r:r>0?1:-1});Number.isInteger||(Number.isInteger=function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r});self.ArrayBuffer||(self.ArrayBuffer=Array);self.Float32Array||(self.Float32Array=Array);self.Uint32Array||(self.Uint32Array=Array);self.Uint16Array||(self.Uint16Array=Array);self.Uint8Array||(self.Uint8Array=Array);self.Int32Array||(self.Int32Array=Array);var Eo=/iPhone/i,Iu=/iPod/i,Ru=/iPad/i,Ou=/\biOS-universal(?:.+)Mac\b/i,Co=/\bAndroid(?:.+)Mobile\b/i,Au=/Android/i,Or=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Wn=/Silk/i,Ae=/Windows Phone/i,Su=/\bWindows(?:.+)ARM\b/i,Nu=/BlackBerry/i,Fu=/BB10/i,Uu=/Opera Mini/i,Lu=/\b(CriOS|Chrome)(?:.+)Mobile/i,Mu=/Mobile(?:.+)Firefox\b/i,Gu=function(e){return typeof e!="undefined"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream=="undefined"};function mp(e){return function(r){return r.test(e)}}function gp(e){var r={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator!="undefined"?r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?r.userAgent=e:e&&e.userAgent&&(r={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});var t=r.userAgent,n=t.split("[FBAN");typeof n[1]!="undefined"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]!="undefined"&&(t=n[0]);var i=mp(t),o={apple:{phone:i(Eo)&&!i(Ae),ipod:i(Iu),tablet:!i(Eo)&&(i(Ru)||Gu(r))&&!i(Ae),universal:i(Ou),device:(i(Eo)||i(Iu)||i(Ru)||i(Ou)||Gu(r))&&!i(Ae)},amazon:{phone:i(Or),tablet:!i(Or)&&i(Wn),device:i(Or)||i(Wn)},android:{phone:!i(Ae)&&i(Or)||!i(Ae)&&i(Co),tablet:!i(Ae)&&!i(Or)&&!i(Co)&&(i(Wn)||i(Au)),device:!i(Ae)&&(i(Or)||i(Wn)||i(Co)||i(Au))||i(/\bokhttp\b/i)},windows:{phone:i(Ae),tablet:i(Su),device:i(Ae)||i(Su)},other:{blackberry:i(Nu),blackberry10:i(Fu),opera:i(Uu),firefox:i(Mu),chrome:i(Lu),device:i(Nu)||i(Fu)||i(Uu)||i(Mu)||i(Lu)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var xe=gp(self.navigator);function yp(e){var r=!0;if(xe.tablet||xe.phone){if(xe.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var n=parseInt(t[1],10);n<11&&(r=!1)}}if(xe.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var n=parseInt(t[1],10);n<7&&(r=!1)}}}return r?e:4}function xp(){return!xe.apple.device}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Bu;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(Bu||(Bu={}));var Du;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(Du||(Du={}));var ku;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(ku||(ku={}));var ju;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(ju||(ju={}));var Xu;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Xu||(Xu={}));var Hu;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Hu||(Hu={}));var zu;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(zu||(zu={}));var Vu;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(Vu||(Vu={}));var $u;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})($u||($u={}));var Po;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Po||(Po={}));var Io;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Io||(Io={}));var Ro;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(Ro||(Ro={}));var Wu;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Wu||(Wu={}));var qu;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(qu||(qu={}));var Oo;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Oo||(Oo={}));var un;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(un||(un={}));var Yu;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(Yu||(Yu={}));var Ao;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Ao||(Ao={}));var Ku;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Ku||(Ku={}));var k={MIPMAP_TEXTURES:Ro.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:Ao.NONE,SPRITE_MAX_TEXTURES:yp(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:Oo.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:Io.CLAMP,SCALE_MODE:Po.LINEAR,PRECISION_VERTEX:un.HIGH,PRECISION_FRAGMENT:xe.apple.device?un.HIGH:un.MEDIUM,CAN_UPLOAD_SAME_BUFFER:xp(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},Zu={exports:{}};(function(e){var r=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(u,l,h){this.fn=u,this.context=l,this.once=h||!1}function o(u,l,h,f,c){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new i(h,f||u,c),p=t?t+l:l;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],d]:u._events[p].push(d):(u._events[p]=d,u._eventsCount++),u}function s(u,l){--u._eventsCount==0?u._events=new n:delete u._events[l]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],h,f;if(this._eventsCount===0)return l;for(f in h=this._events)r.call(h,f)&&l.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},a.prototype.listeners=function(l){var h=t?t+l:l,f=this._events[h];if(!f)return[];if(f.fn)return[f.fn];for(var c=0,d=f.length,p=new Array(d);c<d;c++)p[c]=f[c].fn;return p},a.prototype.listenerCount=function(l){var h=t?t+l:l,f=this._events[h];return f?f.fn?1:f.length:0},a.prototype.emit=function(l,h,f,c,d,p){var v=t?t+l:l;if(!this._events[v])return!1;var _=this._events[v],g=arguments.length,b,w;if(_.fn){switch(_.once&&this.removeListener(l,_.fn,void 0,!0),g){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,h),!0;case 3:return _.fn.call(_.context,h,f),!0;case 4:return _.fn.call(_.context,h,f,c),!0;case 5:return _.fn.call(_.context,h,f,c,d),!0;case 6:return _.fn.call(_.context,h,f,c,d,p),!0}for(w=1,b=new Array(g-1);w<g;w++)b[w-1]=arguments[w];_.fn.apply(_.context,b)}else{var E=_.length,T;for(w=0;w<E;w++)switch(_[w].once&&this.removeListener(l,_[w].fn,void 0,!0),g){case 1:_[w].fn.call(_[w].context);break;case 2:_[w].fn.call(_[w].context,h);break;case 3:_[w].fn.call(_[w].context,h,f);break;case 4:_[w].fn.call(_[w].context,h,f,c);break;default:if(!b)for(T=1,b=new Array(g-1);T<g;T++)b[T-1]=arguments[T];_[w].fn.apply(_[w].context,b)}}return!0},a.prototype.on=function(l,h,f){return o(this,l,h,f,!1)},a.prototype.once=function(l,h,f){return o(this,l,h,f,!0)},a.prototype.removeListener=function(l,h,f,c){var d=t?t+l:l;if(!this._events[d])return this;if(!h)return s(this,d),this;var p=this._events[d];if(p.fn)p.fn===h&&(!c||p.once)&&(!f||p.context===f)&&s(this,d);else{for(var v=0,_=[],g=p.length;v<g;v++)(p[v].fn!==h||c&&!p[v].once||f&&p[v].context!==f)&&_.push(p[v]);_.length?this._events[d]=_.length===1?_[0]:_:s(this,d)}return this},a.prototype.removeAllListeners=function(l){var h;return l?(h=t?t+l:l,this._events[h]&&s(this,h)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,e.exports=a})(Zu);var be=Zu.exports,So={exports:{}};So.exports=qn;So.exports.default=qn;function qn(e,r,t){t=t||2;var n=r&&r.length,i=n?r[0]*t:e.length,o=Ju(e,0,i,t,!0),s=[];if(!o||o.next===o.prev)return s;var a,u,l,h,f,c,d;if(n&&(o=Cp(e,r,o,t)),e.length>80*t){a=l=e[0],u=h=e[1];for(var p=t;p<i;p+=t)f=e[p],c=e[p+1],f<a&&(a=f),c<u&&(u=c),f>l&&(l=f),c>h&&(h=c);d=Math.max(l-a,h-u),d=d!==0?1/d:0}return ln(o,s,t,a,u,d),s}function Ju(e,r,t,n,i){var o,s;if(i===Uo(e,r,t,n)>0)for(o=r;o<t;o+=n)s=el(o,e[o],e[o+1],s);else for(o=t-n;o>=r;o-=n)s=el(o,e[o],e[o+1],s);return s&&Yn(s,s.next)&&(fn(s),s=s.next),s}function je(e,r){if(!e)return e;r||(r=e);var t=e,n;do if(n=!1,!t.steiner&&(Yn(t,t.next)||Tt(t.prev,t,t.next)===0)){if(fn(t),t=r=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==r);return r}function ln(e,r,t,n,i,o,s){if(!!e){!s&&o&&Ap(e,n,i,o);for(var a=e,u,l;e.prev!==e.next;){if(u=e.prev,l=e.next,o?Tp(e,n,i,o):bp(e)){r.push(u.i/t),r.push(e.i/t),r.push(l.i/t),fn(e),e=l.next,a=l.next;continue}if(e=l,e===a){s?s===1?(e=wp(je(e),r,t),ln(e,r,t,n,i,o,2)):s===2&&Ep(e,r,t,n,i,o):ln(je(e),r,t,n,i,o,1);break}}}}function bp(e){var r=e.prev,t=e,n=e.next;if(Tt(r,t,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(Ar(r.x,r.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Tt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Tp(e,r,t,n){var i=e.prev,o=e,s=e.next;if(Tt(i,o,s)>=0)return!1;for(var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,l=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,h=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,f=No(a,u,r,t,n),c=No(l,h,r,t,n),d=e.prevZ,p=e.nextZ;d&&d.z>=f&&p&&p.z<=c;){if(d!==e.prev&&d!==e.next&&Ar(i.x,i.y,o.x,o.y,s.x,s.y,d.x,d.y)&&Tt(d.prev,d,d.next)>=0||(d=d.prevZ,p!==e.prev&&p!==e.next&&Ar(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&Tt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=f;){if(d!==e.prev&&d!==e.next&&Ar(i.x,i.y,o.x,o.y,s.x,s.y,d.x,d.y)&&Tt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=c;){if(p!==e.prev&&p!==e.next&&Ar(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function wp(e,r,t){var n=e;do{var i=n.prev,o=n.next.next;!Yn(i,o)&&Qu(i,n,n.next,o)&&hn(i,o)&&hn(o,i)&&(r.push(i.i/t),r.push(n.i/t),r.push(o.i/t),fn(n),fn(n.next),n=e=o),n=n.next}while(n!==e);return je(n)}function Ep(e,r,t,n,i,o){var s=e;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&Fp(s,a)){var u=tl(s,a);s=je(s,s.next),u=je(u,u.next),ln(s,r,t,n,i,o),ln(u,r,t,n,i,o);return}a=a.next}s=s.next}while(s!==e)}function Cp(e,r,t,n){var i=[],o,s,a,u,l;for(o=0,s=r.length;o<s;o++)a=r[o]*n,u=o<s-1?r[o+1]*n:e.length,l=Ju(e,a,u,n,!1),l===l.next&&(l.steiner=!0),i.push(Np(l));for(i.sort(Pp),o=0;o<i.length;o++)t=Ip(i[o],t),t=je(t,t.next);return t}function Pp(e,r){return e.x-r.x}function Ip(e,r){var t=Rp(e,r);if(!t)return r;var n=tl(t,e),i=je(t,t.next);return je(n,n.next),r===t?i:r}function Rp(e,r){var t=r,n=e.x,i=e.y,o=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>o){if(o=a,a===n){if(i===t.y)return t;if(i===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==r);if(!s)return null;if(n===o)return s;var u=s,l=s.x,h=s.y,f=1/0,c;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&Ar(i<h?n:o,i,l,h,i<h?o:n,i,t.x,t.y)&&(c=Math.abs(i-t.y)/(n-t.x),hn(t,e)&&(c<f||c===f&&(t.x>s.x||t.x===s.x&&Op(s,t)))&&(s=t,f=c)),t=t.next;while(t!==u);return s}function Op(e,r){return Tt(e.prev,e,r.prev)<0&&Tt(r.next,e,e.next)<0}function Ap(e,r,t,n){var i=e;do i.z===null&&(i.z=No(i.x,i.y,r,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Sp(i)}function Sp(e){var r,t,n,i,o,s,a,u,l=1;do{for(t=e,e=null,o=null,s=0;t;){for(s++,n=t,a=0,r=0;r<l&&(a++,n=n.nextZ,!!n);r++);for(u=l;a>0||u>0&&n;)a!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:e=i,i.prevZ=o,o=i;t=n}o.nextZ=null,l*=2}while(s>1);return e}function No(e,r,t,n,i){return e=32767*(e-t)*i,r=32767*(r-n)*i,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e|r<<1}function Np(e){var r=e,t=e;do(r.x<t.x||r.x===t.x&&r.y<t.y)&&(t=r),r=r.next;while(r!==e);return t}function Ar(e,r,t,n,i,o,s,a){return(i-s)*(r-a)-(e-s)*(o-a)>=0&&(e-s)*(n-a)-(t-s)*(r-a)>=0&&(t-s)*(o-a)-(i-s)*(n-a)>=0}function Fp(e,r){return e.next.i!==r.i&&e.prev.i!==r.i&&!Up(e,r)&&(hn(e,r)&&hn(r,e)&&Lp(e,r)&&(Tt(e.prev,e,r.prev)||Tt(e,r.prev,r))||Yn(e,r)&&Tt(e.prev,e,e.next)>0&&Tt(r.prev,r,r.next)>0)}function Tt(e,r,t){return(r.y-e.y)*(t.x-r.x)-(r.x-e.x)*(t.y-r.y)}function Yn(e,r){return e.x===r.x&&e.y===r.y}function Qu(e,r,t,n){var i=Zn(Tt(e,r,t)),o=Zn(Tt(e,r,n)),s=Zn(Tt(t,n,e)),a=Zn(Tt(t,n,r));return!!(i!==o&&s!==a||i===0&&Kn(e,t,r)||o===0&&Kn(e,n,r)||s===0&&Kn(t,e,n)||a===0&&Kn(t,r,n))}function Kn(e,r,t){return r.x<=Math.max(e.x,t.x)&&r.x>=Math.min(e.x,t.x)&&r.y<=Math.max(e.y,t.y)&&r.y>=Math.min(e.y,t.y)}function Zn(e){return e>0?1:e<0?-1:0}function Up(e,r){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==r.i&&t.next.i!==r.i&&Qu(t,t.next,e,r))return!0;t=t.next}while(t!==e);return!1}function hn(e,r){return Tt(e.prev,e,e.next)<0?Tt(e,r,e.next)>=0&&Tt(e,e.prev,r)>=0:Tt(e,r,e.prev)<0||Tt(e,e.next,r)<0}function Lp(e,r){var t=e,n=!1,i=(e.x+r.x)/2,o=(e.y+r.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==e);return n}function tl(e,r){var t=new Fo(e.i,e.x,e.y),n=new Fo(r.i,r.x,r.y),i=e.next,o=r.prev;return e.next=r,r.prev=e,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function el(e,r,t,n){var i=new Fo(e,r,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fn(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Fo(e,r,t){this.i=e,this.x=r,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}qn.deviation=function(e,r,t,n){var i=r&&r.length,o=i?r[0]*t:e.length,s=Math.abs(Uo(e,0,o,t));if(i)for(var a=0,u=r.length;a<u;a++){var l=r[a]*t,h=a<u-1?r[a+1]*t:e.length;s-=Math.abs(Uo(e,l,h,t))}var f=0;for(a=0;a<n.length;a+=3){var c=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;f+=Math.abs((e[c]-e[p])*(e[d+1]-e[c+1])-(e[c]-e[d])*(e[p+1]-e[c+1]))}return s===0&&f===0?0:Math.abs((f-s)/s)};function Uo(e,r,t,n){for(var i=0,o=r,s=t-n;o<t;o+=n)i+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return i}qn.flatten=function(e){for(var r=e[0][0].length,t={vertices:[],holes:[],dimensions:r},n=0,i=0;i<e.length;i++){for(var o=0;o<e[i].length;o++)for(var s=0;s<r;s++)t.vertices.push(e[i][o][s]);i>0&&(n+=e[i-1].length,t.holes.push(n))}return t};var rl=So.exports,Lo={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(e,r){(function(t){var n=r&&!r.nodeType&&r,i=e&&!e.nodeType&&e,o=typeof ye=="object"&&ye;(o.global===o||o.window===o||o.self===o)&&(t=o);var s,a=2147483647,u=36,l=1,h=26,f=38,c=700,d=72,p=128,v="-",_=/^xn--/,g=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},E=u-l,T=Math.floor,x=String.fromCharCode,I;function U(S){throw RangeError(w[S])}function C(S,H){for(var Z=S.length,rt=[];Z--;)rt[Z]=H(S[Z]);return rt}function N(S,H){var Z=S.split("@"),rt="";Z.length>1&&(rt=Z[0]+"@",S=Z[1]),S=S.replace(b,".");var lt=S.split("."),gt=C(lt,H).join(".");return rt+gt}function L(S){for(var H=[],Z=0,rt=S.length,lt,gt;Z<rt;)lt=S.charCodeAt(Z++),lt>=55296&&lt<=56319&&Z<rt?(gt=S.charCodeAt(Z++),(gt&64512)==56320?H.push(((lt&1023)<<10)+(gt&1023)+65536):(H.push(lt),Z--)):H.push(lt);return H}function B(S){return C(S,function(H){var Z="";return H>65535&&(H-=65536,Z+=x(H>>>10&1023|55296),H=56320|H&1023),Z+=x(H),Z}).join("")}function D(S){return S-48<10?S-22:S-65<26?S-65:S-97<26?S-97:u}function et(S,H){return S+22+75*(S<26)-((H!=0)<<5)}function F(S,H,Z){var rt=0;for(S=Z?T(S/c):S>>1,S+=T(S/H);S>E*h>>1;rt+=u)S=T(S/E);return T(rt+(E+1)*S/(S+f))}function A(S){var H=[],Z=S.length,rt,lt=0,gt=p,ht=d,yt,Et,pt,xt,ot,vt,tt,Gt,At;for(yt=S.lastIndexOf(v),yt<0&&(yt=0),Et=0;Et<yt;++Et)S.charCodeAt(Et)>=128&&U("not-basic"),H.push(S.charCodeAt(Et));for(pt=yt>0?yt+1:0;pt<Z;){for(xt=lt,ot=1,vt=u;pt>=Z&&U("invalid-input"),tt=D(S.charCodeAt(pt++)),(tt>=u||tt>T((a-lt)/ot))&&U("overflow"),lt+=tt*ot,Gt=vt<=ht?l:vt>=ht+h?h:vt-ht,!(tt<Gt);vt+=u)At=u-Gt,ot>T(a/At)&&U("overflow"),ot*=At;rt=H.length+1,ht=F(lt-xt,rt,xt==0),T(lt/rt)>a-gt&&U("overflow"),gt+=T(lt/rt),lt%=rt,H.splice(lt++,0,gt)}return B(H)}function K(S){var H,Z,rt,lt,gt,ht,yt,Et,pt,xt,ot,vt=[],tt,Gt,At,nt;for(S=L(S),tt=S.length,H=p,Z=0,gt=d,ht=0;ht<tt;++ht)ot=S[ht],ot<128&&vt.push(x(ot));for(rt=lt=vt.length,lt&&vt.push(v);rt<tt;){for(yt=a,ht=0;ht<tt;++ht)ot=S[ht],ot>=H&&ot<yt&&(yt=ot);for(Gt=rt+1,yt-H>T((a-Z)/Gt)&&U("overflow"),Z+=(yt-H)*Gt,H=yt,ht=0;ht<tt;++ht)if(ot=S[ht],ot<H&&++Z>a&&U("overflow"),ot==H){for(Et=Z,pt=u;xt=pt<=gt?l:pt>=gt+h?h:pt-gt,!(Et<xt);pt+=u)nt=Et-xt,At=u-xt,vt.push(x(et(xt+nt%At,0))),Et=T(nt/At);vt.push(x(et(Et,0))),gt=F(Z,Gt,rt==lt),Z=0,++rt}++Z,++H}return vt.join("")}function bt(S){return N(S,function(H){return _.test(H)?A(H.slice(4).toLowerCase()):H})}function Mt(S){return N(S,function(H){return g.test(H)?"xn--"+K(H):H})}if(s={version:"1.3.2",ucs2:{decode:L,encode:B},decode:A,encode:K,toASCII:Mt,toUnicode:bt},n&&i)if(e.exports==n)i.exports=s;else for(I in s)s.hasOwnProperty(I)&&(n[I]=s[I]);else t.punycode=s})(ye)})(Lo,Lo.exports);var Mp={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}},cn={};function Gp(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var Bp=function(e,r,t,n){r=r||"&",t=t||"=";var i={};if(typeof e!="string"||e.length===0)return i;var o=/\+/g;e=e.split(r);var s=1e3;n&&typeof n.maxKeys=="number"&&(s=n.maxKeys);var a=e.length;s>0&&a>s&&(a=s);for(var u=0;u<a;++u){var l=e[u].replace(o,"%20"),h=l.indexOf(t),f,c,d,p;h>=0?(f=l.substr(0,h),c=l.substr(h+1)):(f=l,c=""),d=decodeURIComponent(f),p=decodeURIComponent(c),Gp(i,d)?Array.isArray(i[d])?i[d].push(p):i[d]=[i[d],p]:i[d]=p}return i},dn=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},Dp=function(e,r,t,n){return r=r||"&",t=t||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(i){var o=encodeURIComponent(dn(i))+t;return Array.isArray(e[i])?e[i].map(function(s){return o+encodeURIComponent(dn(s))}).join(r):o+encodeURIComponent(dn(e[i]))}).join(r):n?encodeURIComponent(dn(n))+t+encodeURIComponent(dn(e)):""};cn.decode=cn.parse=Bp;cn.encode=cn.stringify=Dp;var kp=Lo.exports,Te=Mp,jp=Jn,Xp=Qp,Hp=Jp;function se(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var zp=/^([a-z0-9.+-]+:)/i,Vp=/:[0-9]*$/,$p=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Wp=["<",">",'"',"`"," ","\r",`
`,"	"],qp=["{","}","|","\\","^","`"].concat(Wp),Mo=["'"].concat(qp),nl=["%","/","?",";","#"].concat(Mo),il=["/","?","#"],Yp=255,ol=/^[+a-z0-9A-Z_-]{0,63}$/,Kp=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Zp={javascript:!0,"javascript:":!0},Go={javascript:!0,"javascript:":!0},Sr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Bo=cn;function Jn(e,r,t){if(e&&Te.isObject(e)&&e instanceof se)return e;var n=new se;return n.parse(e,r,t),n}se.prototype.parse=function(e,r,t){if(!Te.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),i=n!==-1&&n<e.indexOf("#")?"?":"#",o=e.split(i),s=/\\/g;o[0]=o[0].replace(s,"/"),e=o.join(i);var a=e;if(a=a.trim(),!t&&e.split("#").length===1){var u=$p.exec(a);if(u)return this.path=a,this.href=a,this.pathname=u[1],u[2]?(this.search=u[2],r?this.query=Bo.parse(this.search.substr(1)):this.query=this.search.substr(1)):r&&(this.search="",this.query={}),this}var l=zp.exec(a);if(l){l=l[0];var h=l.toLowerCase();this.protocol=h,a=a.substr(l.length)}if(t||l||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var f=a.substr(0,2)==="//";f&&!(l&&Go[l])&&(a=a.substr(2),this.slashes=!0)}if(!Go[l]&&(f||l&&!Sr[l])){for(var c=-1,d=0;d<il.length;d++){var p=a.indexOf(il[d]);p!==-1&&(c===-1||p<c)&&(c=p)}var v,_;c===-1?_=a.lastIndexOf("@"):_=a.lastIndexOf("@",c),_!==-1&&(v=a.slice(0,_),a=a.slice(_+1),this.auth=decodeURIComponent(v)),c=-1;for(var d=0;d<nl.length;d++){var p=a.indexOf(nl[d]);p!==-1&&(c===-1||p<c)&&(c=p)}c===-1&&(c=a.length),this.host=a.slice(0,c),a=a.slice(c),this.parseHost(),this.hostname=this.hostname||"";var g=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!g)for(var b=this.hostname.split(/\./),d=0,w=b.length;d<w;d++){var E=b[d];if(!!E&&!E.match(ol)){for(var T="",x=0,I=E.length;x<I;x++)E.charCodeAt(x)>127?T+="x":T+=E[x];if(!T.match(ol)){var U=b.slice(0,d),C=b.slice(d+1),N=E.match(Kp);N&&(U.push(N[1]),C.unshift(N[2])),C.length&&(a="/"+C.join(".")+a),this.hostname=U.join(".");break}}}this.hostname.length>Yp?this.hostname="":this.hostname=this.hostname.toLowerCase(),g||(this.hostname=kp.toASCII(this.hostname));var L=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+L,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),a[0]!=="/"&&(a="/"+a))}if(!Zp[h])for(var d=0,w=Mo.length;d<w;d++){var D=Mo[d];if(a.indexOf(D)!==-1){var et=encodeURIComponent(D);et===D&&(et=escape(D)),a=a.split(D).join(et)}}var F=a.indexOf("#");F!==-1&&(this.hash=a.substr(F),a=a.slice(0,F));var A=a.indexOf("?");if(A!==-1?(this.search=a.substr(A),this.query=a.substr(A+1),r&&(this.query=Bo.parse(this.query)),a=a.slice(0,A)):r&&(this.search="",this.query={}),a&&(this.pathname=a),Sr[h]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var L=this.pathname||"",K=this.search||"";this.path=L+K}return this.href=this.format(),this};function Jp(e){return Te.isString(e)&&(e=Jn(e)),e instanceof se?e.format():se.prototype.format.call(e)}se.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var r=this.protocol||"",t=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&Te.isObject(this.query)&&Object.keys(this.query).length&&(o=Bo.stringify(this.query));var s=this.search||o&&"?"+o||"";return r&&r.substr(-1)!==":"&&(r+=":"),this.slashes||(!r||Sr[r])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),s&&s.charAt(0)!=="?"&&(s="?"+s),t=t.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),s=s.replace("#","%23"),r+i+t+s+n};function Qp(e,r){return Jn(e,!1,!0).resolve(r)}se.prototype.resolve=function(e){return this.resolveObject(Jn(e,!1,!0)).format()};se.prototype.resolveObject=function(e){if(Te.isString(e)){var r=new se;r.parse(e,!1,!0),e=r}for(var t=new se,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];t[o]=this[o]}if(t.hash=e.hash,e.href==="")return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var s=Object.keys(e),a=0;a<s.length;a++){var u=s[a];u!=="protocol"&&(t[u]=e[u])}return Sr[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!Sr[e.protocol]){for(var l=Object.keys(e),h=0;h<l.length;h++){var f=l[h];t[f]=e[f]}return t.href=t.format(),t}if(t.protocol=e.protocol,!e.host&&!Go[e.protocol]){for(var w=(e.pathname||"").split("/");w.length&&!(e.host=w.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),w[0]!==""&&w.unshift(""),w.length<2&&w.unshift(""),t.pathname=w.join("/")}else t.pathname=e.pathname;if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var c=t.pathname||"",d=t.search||"";t.path=c+d}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var p=t.pathname&&t.pathname.charAt(0)==="/",v=e.host||e.pathname&&e.pathname.charAt(0)==="/",_=v||p||t.host&&e.pathname,g=_,b=t.pathname&&t.pathname.split("/")||[],w=e.pathname&&e.pathname.split("/")||[],E=t.protocol&&!Sr[t.protocol];if(E&&(t.hostname="",t.port=null,t.host&&(b[0]===""?b[0]=t.host:b.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(w[0]===""?w[0]=e.host:w.unshift(e.host)),e.host=null),_=_&&(w[0]===""||b[0]==="")),v)t.host=e.host||e.host===""?e.host:t.host,t.hostname=e.hostname||e.hostname===""?e.hostname:t.hostname,t.search=e.search,t.query=e.query,b=w;else if(w.length)b||(b=[]),b.pop(),b=b.concat(w),t.search=e.search,t.query=e.query;else if(!Te.isNullOrUndefined(e.search)){if(E){t.hostname=t.host=b.shift();var T=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;T&&(t.auth=T.shift(),t.host=t.hostname=T.shift())}return t.search=e.search,t.query=e.query,(!Te.isNull(t.pathname)||!Te.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!b.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var x=b.slice(-1)[0],I=(t.host||e.host||b.length>1)&&(x==="."||x==="..")||x==="",U=0,C=b.length;C>=0;C--)x=b[C],x==="."?b.splice(C,1):x===".."?(b.splice(C,1),U++):U&&(b.splice(C,1),U--);if(!_&&!g)for(;U--;U)b.unshift("..");_&&b[0]!==""&&(!b[0]||b[0].charAt(0)!=="/")&&b.unshift(""),I&&b.join("/").substr(-1)!=="/"&&b.push("");var N=b[0]===""||b[0]&&b[0].charAt(0)==="/";if(E){t.hostname=t.host=N?"":b.length?b.shift():"";var T=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;T&&(t.auth=T.shift(),t.host=t.hostname=T.shift())}return _=_||t.host&&b.length,_&&!N&&b.unshift(""),b.length?t.pathname=b.join("/"):(t.pathname=null,t.path=null),(!Te.isNull(t.pathname)||!Te.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t};se.prototype.parseHost=function(){var e=this.host,r=Vp.exec(e);r&&(r=r[0],r!==":"&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)};/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Se;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(Se||(Se={}));var pn;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(pn||(pn={}));var Qn;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(Qn||(Qn={}));var z;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(z||(z={}));var ae;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(ae||(ae={}));var G;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(G||(G={}));var ir;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(ir||(ir={}));var q;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(q||(q={}));var ti;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(ti||(ti={}));var re;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(re||(re={}));var Ne;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Ne||(Ne={}));var we;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(we||(we={}));var Ee;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Ee||(Ee={}));var Xe;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(Xe||(Xe={}));var Do;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Do||(Do={}));var Ce;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(Ce||(Ce={}));var zt;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(zt||(zt={}));var Ut;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Ut||(Ut={}));var Pe;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Pe||(Pe={}));/*!
 * @pixi/utils - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Nr={parse:jp,format:Hp,resolve:Xp};k.RETINA_PREFIX=/@([0-9\.]+)x/;k.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var sl=!1,al="6.2.2";function tv(e){var r;if(!sl){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+al+" - \u2730 "+e+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(r=self.console).log.apply(r,t)}else self.console&&self.console.log("PixiJS "+al+" - "+e+" - http://www.pixijs.com/");sl=!0}}var ko;function ev(){return typeof ko=="undefined"&&(ko=function(){var r={stencil:!0,failIfMajorPerformanceCaveat:k.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!self.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),n=t.getContext("webgl",r)||t.getContext("experimental-webgl",r),i=!!(n&&n.getContextAttributes().stencil);if(n){var o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,i}catch{return!1}}()),ko}var rv="#f0f8ff",nv="#faebd7",iv="#00ffff",ov="#7fffd4",sv="#f0ffff",av="#f5f5dc",uv="#ffe4c4",lv="#000000",hv="#ffebcd",fv="#0000ff",cv="#8a2be2",dv="#a52a2a",pv="#deb887",vv="#5f9ea0",_v="#7fff00",mv="#d2691e",gv="#ff7f50",yv="#6495ed",xv="#fff8dc",bv="#dc143c",Tv="#00ffff",wv="#00008b",Ev="#008b8b",Cv="#b8860b",Pv="#a9a9a9",Iv="#006400",Rv="#a9a9a9",Ov="#bdb76b",Av="#8b008b",Sv="#556b2f",Nv="#ff8c00",Fv="#9932cc",Uv="#8b0000",Lv="#e9967a",Mv="#8fbc8f",Gv="#483d8b",Bv="#2f4f4f",Dv="#2f4f4f",kv="#00ced1",jv="#9400d3",Xv="#ff1493",Hv="#00bfff",zv="#696969",Vv="#696969",$v="#1e90ff",Wv="#b22222",qv="#fffaf0",Yv="#228b22",Kv="#ff00ff",Zv="#dcdcdc",Jv="#f8f8ff",Qv="#daa520",t_="#ffd700",e_="#808080",r_="#008000",n_="#adff2f",i_="#808080",o_="#f0fff0",s_="#ff69b4",a_="#cd5c5c",u_="#4b0082",l_="#fffff0",h_="#f0e68c",f_="#fff0f5",c_="#e6e6fa",d_="#7cfc00",p_="#fffacd",v_="#add8e6",__="#f08080",m_="#e0ffff",g_="#fafad2",y_="#d3d3d3",x_="#90ee90",b_="#d3d3d3",T_="#ffb6c1",w_="#ffa07a",E_="#20b2aa",C_="#87cefa",P_="#778899",I_="#778899",R_="#b0c4de",O_="#ffffe0",A_="#00ff00",S_="#32cd32",N_="#faf0e6",F_="#ff00ff",U_="#800000",L_="#66cdaa",M_="#0000cd",G_="#ba55d3",B_="#9370db",D_="#3cb371",k_="#7b68ee",j_="#00fa9a",X_="#48d1cc",H_="#c71585",z_="#191970",V_="#f5fffa",$_="#ffe4e1",W_="#ffe4b5",q_="#ffdead",Y_="#000080",K_="#fdf5e6",Z_="#808000",J_="#6b8e23",Q_="#ffa500",tm="#ff4500",em="#da70d6",rm="#eee8aa",nm="#98fb98",im="#afeeee",om="#db7093",sm="#ffefd5",am="#ffdab9",um="#cd853f",lm="#ffc0cb",hm="#dda0dd",fm="#b0e0e6",cm="#800080",dm="#663399",pm="#ff0000",vm="#bc8f8f",_m="#4169e1",mm="#8b4513",gm="#fa8072",ym="#f4a460",xm="#2e8b57",bm="#fff5ee",Tm="#a0522d",wm="#c0c0c0",Em="#87ceeb",Cm="#6a5acd",Pm="#708090",Im="#708090",Rm="#fffafa",Om="#00ff7f",Am="#4682b4",Sm="#d2b48c",Nm="#008080",Fm="#d8bfd8",Um="#ff6347",Lm="#40e0d0",Mm="#ee82ee",Gm="#f5deb3",Bm="#ffffff",Dm="#f5f5f5",km="#ffff00",jm="#9acd32",Xm={aliceblue:rv,antiquewhite:nv,aqua:iv,aquamarine:ov,azure:sv,beige:av,bisque:uv,black:lv,blanchedalmond:hv,blue:fv,blueviolet:cv,brown:dv,burlywood:pv,cadetblue:vv,chartreuse:_v,chocolate:mv,coral:gv,cornflowerblue:yv,cornsilk:xv,crimson:bv,cyan:Tv,darkblue:wv,darkcyan:Ev,darkgoldenrod:Cv,darkgray:Pv,darkgreen:Iv,darkgrey:Rv,darkkhaki:Ov,darkmagenta:Av,darkolivegreen:Sv,darkorange:Nv,darkorchid:Fv,darkred:Uv,darksalmon:Lv,darkseagreen:Mv,darkslateblue:Gv,darkslategray:Bv,darkslategrey:Dv,darkturquoise:kv,darkviolet:jv,deeppink:Xv,deepskyblue:Hv,dimgray:zv,dimgrey:Vv,dodgerblue:$v,firebrick:Wv,floralwhite:qv,forestgreen:Yv,fuchsia:Kv,gainsboro:Zv,ghostwhite:Jv,goldenrod:Qv,gold:t_,gray:e_,green:r_,greenyellow:n_,grey:i_,honeydew:o_,hotpink:s_,indianred:a_,indigo:u_,ivory:l_,khaki:h_,lavenderblush:f_,lavender:c_,lawngreen:d_,lemonchiffon:p_,lightblue:v_,lightcoral:__,lightcyan:m_,lightgoldenrodyellow:g_,lightgray:y_,lightgreen:x_,lightgrey:b_,lightpink:T_,lightsalmon:w_,lightseagreen:E_,lightskyblue:C_,lightslategray:P_,lightslategrey:I_,lightsteelblue:R_,lightyellow:O_,lime:A_,limegreen:S_,linen:N_,magenta:F_,maroon:U_,mediumaquamarine:L_,mediumblue:M_,mediumorchid:G_,mediumpurple:B_,mediumseagreen:D_,mediumslateblue:k_,mediumspringgreen:j_,mediumturquoise:X_,mediumvioletred:H_,midnightblue:z_,mintcream:V_,mistyrose:$_,moccasin:W_,navajowhite:q_,navy:Y_,oldlace:K_,olive:Z_,olivedrab:J_,orange:Q_,orangered:tm,orchid:em,palegoldenrod:rm,palegreen:nm,paleturquoise:im,palevioletred:om,papayawhip:sm,peachpuff:am,peru:um,pink:lm,plum:hm,powderblue:fm,purple:cm,rebeccapurple:dm,red:pm,rosybrown:vm,royalblue:_m,saddlebrown:mm,salmon:gm,sandybrown:ym,seagreen:xm,seashell:bm,sienna:Tm,silver:wm,skyblue:Em,slateblue:Cm,slategray:Pm,slategrey:Im,snow:Rm,springgreen:Om,steelblue:Am,tan:Sm,teal:Nm,thistle:Fm,tomato:Um,turquoise:Lm,violet:Mm,wheat:Gm,white:Bm,whitesmoke:Dm,yellow:km,yellowgreen:jm};function kt(e,r){return r===void 0&&(r=[]),r[0]=(e>>16&255)/255,r[1]=(e>>8&255)/255,r[2]=(e&255)/255,r}function ul(e){var r=e.toString(16);return r="000000".substr(0,6-r.length)+r,"#"+r}function ll(e){return typeof e=="string"&&(e=Xm[e.toLowerCase()]||e,e[0]==="#"&&(e=e.substr(1))),parseInt(e,16)}function ue(e){return(e[0]*255<<16)+(e[1]*255<<8)+(e[2]*255|0)}function Hm(){for(var e=[],r=[],t=0;t<32;t++)e[t]=t,r[t]=t;e[z.NORMAL_NPM]=z.NORMAL,e[z.ADD_NPM]=z.ADD,e[z.SCREEN_NPM]=z.SCREEN,r[z.NORMAL]=z.NORMAL_NPM,r[z.ADD]=z.ADD_NPM,r[z.SCREEN]=z.SCREEN_NPM;var n=[];return n.push(r),n.push(e),n}var hl=Hm();function fl(e,r){return hl[r?1:0][e]}function zm(e,r,t,n){return t=t||new Float32Array(4),n||n===void 0?(t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r):(t[0]=e[0],t[1]=e[1],t[2]=e[2]),t[3]=r,t}function jo(e,r){if(r===1)return(r*255<<24)+e;if(r===0)return 0;var t=e>>16&255,n=e>>8&255,i=e&255;return t=t*r+.5|0,n=n*r+.5|0,i=i*r+.5|0,(r*255<<24)+(t<<16)+(n<<8)+i}function cl(e,r,t,n){return t=t||new Float32Array(4),t[0]=(e>>16&255)/255,t[1]=(e>>8&255)/255,t[2]=(e&255)/255,(n||n===void 0)&&(t[0]*=r,t[1]*=r,t[2]*=r),t[3]=r,t}function Vm(e,r){r===void 0&&(r=null);var t=e*6;if(r=r||new Uint16Array(t),r.length!==t)throw new Error("Out buffer length is incorrect, got "+r.length+" and expected "+t);for(var n=0,i=0;n<t;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n+4]=i+2,r[n+5]=i+3;return r}function dl(e){if(e.BYTES_PER_ELEMENT===4)return e instanceof Float32Array?"Float32Array":e instanceof Uint32Array?"Uint32Array":"Int32Array";if(e.BYTES_PER_ELEMENT===2){if(e instanceof Uint16Array)return"Uint16Array"}else if(e.BYTES_PER_ELEMENT===1&&e instanceof Uint8Array)return"Uint8Array";return null}function ei(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function pl(e){return!(e&e-1)&&!!e}function vl(e){var r=(e>65535?1:0)<<4;e>>>=r;var t=(e>255?1:0)<<3;return e>>>=t,r|=t,t=(e>15?1:0)<<2,e>>>=t,r|=t,t=(e>3?1:0)<<1,e>>>=t,r|=t,r|e>>1}function Fr(e,r,t){var n=e.length,i;if(!(r>=n||t===0)){t=r+t>n?n-r:t;var o=n-t;for(i=r;i<o;++i)e[i]=e[i+t];e.length=o}}function Ur(e){return e===0?0:e<0?-1:1}var $m=0;function or(){return++$m}var _l={};function sr(e,r,t){if(t===void 0&&(t=3),!_l[r]){var n=new Error().stack;typeof n=="undefined"?console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+e):(n=n.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",r+`
Deprecated since v`+e),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+e),console.warn(n))),_l[r]=!0}}var ml={},Fe=Object.create(null),ar=Object.create(null),gl=function(){function e(r,t,n){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=n||k.RESOLUTION,this.resize(r,t)}return e.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},e.prototype.resize=function(r,t){this.canvas.width=Math.round(r*this.resolution),this.canvas.height=Math.round(t*this.resolution)},e.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.canvas.width},set:function(r){this.canvas.width=Math.round(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.canvas.height},set:function(r){this.canvas.height=Math.round(r)},enumerable:!1,configurable:!0}),e}();function Wm(e){var r=e.width,t=e.height,n=e.getContext("2d"),i=n.getImageData(0,0,r,t),o=i.data,s=o.length,a={top:null,left:null,right:null,bottom:null},u=null,l,h,f;for(l=0;l<s;l+=4)o[l+3]!==0&&(h=l/4%r,f=~~(l/4/r),a.top===null&&(a.top=f),(a.left===null||h<a.left)&&(a.left=h),(a.right===null||a.right<h)&&(a.right=h+1),(a.bottom===null||a.bottom<f)&&(a.bottom=f));return a.top!==null&&(r=a.right-a.left,t=a.bottom-a.top+1,u=n.getImageData(a.left,a.top,r,t)),{height:t,width:r,data:u}}var ri;function qm(e,r){if(r===void 0&&(r=self.location),e.indexOf("data:")===0)return"";r=r||self.location,ri||(ri=document.createElement("a")),ri.href=e;var t=Nr.parse(ri.href),n=!t.port&&r.port===""||t.port===r.port;return t.hostname!==r.hostname||!n||t.protocol!==r.protocol?"anonymous":""}function ni(e,r){var t=k.RETINA_PREFIX.exec(e);return t?parseFloat(t[1]):r!==void 0?r:1}/*!
 * @pixi/math - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ii=Math.PI*2,Ym=180/Math.PI,ur=Math.PI/180,St;(function(e){e[e.POLY=0]="POLY",e[e.RECT=1]="RECT",e[e.CIRC=2]="CIRC",e[e.ELIP=3]="ELIP",e[e.RREC=4]="RREC"})(St||(St={}));var it=function(){function e(r,t,n,i){r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=Number(r),this.y=Number(t),this.width=Number(n),this.height=Number(i),this.type=St.RECT}return Object.defineProperty(e.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EMPTY",{get:function(){return new e(0,0,0,0)},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e.prototype.copyFrom=function(r){return this.x=r.x,this.y=r.y,this.width=r.width,this.height=r.height,this},e.prototype.copyTo=function(r){return r.x=this.x,r.y=this.y,r.width=this.width,r.height=this.height,r},e.prototype.contains=function(r,t){return this.width<=0||this.height<=0?!1:r>=this.x&&r<this.x+this.width&&t>=this.y&&t<this.y+this.height},e.prototype.pad=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),this.x-=r,this.y-=t,this.width+=r*2,this.height+=t*2,this},e.prototype.fit=function(r){var t=Math.max(this.x,r.x),n=Math.min(this.x+this.width,r.x+r.width),i=Math.max(this.y,r.y),o=Math.min(this.y+this.height,r.y+r.height);return this.x=t,this.width=Math.max(n-t,0),this.y=i,this.height=Math.max(o-i,0),this},e.prototype.ceil=function(r,t){r===void 0&&(r=1),t===void 0&&(t=.001);var n=Math.ceil((this.x+this.width-t)*r)/r,i=Math.ceil((this.y+this.height-t)*r)/r;return this.x=Math.floor((this.x+t)*r)/r,this.y=Math.floor((this.y+t)*r)/r,this.width=n-this.x,this.height=i-this.y,this},e.prototype.enlarge=function(r){var t=Math.min(this.x,r.x),n=Math.max(this.x+this.width,r.x+r.width),i=Math.min(this.y,r.y),o=Math.max(this.y+this.height,r.y+r.height);return this.x=t,this.width=n-t,this.y=i,this.height=o-i,this},e.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},e}(),Km=function(){function e(r,t,n){r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=r,this.y=t,this.radius=n,this.type=St.CIRC}return e.prototype.clone=function(){return new e(this.x,this.y,this.radius)},e.prototype.contains=function(r,t){if(this.radius<=0)return!1;var n=this.radius*this.radius,i=this.x-r,o=this.y-t;return i*=i,o*=o,i+o<=n},e.prototype.getBounds=function(){return new it(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},e.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},e}(),Zm=function(){function e(r,t,n,i){r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=r,this.y=t,this.width=n,this.height=i,this.type=St.ELIP}return e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e.prototype.contains=function(r,t){if(this.width<=0||this.height<=0)return!1;var n=(r-this.x)/this.width,i=(t-this.y)/this.height;return n*=n,i*=i,n+i<=1},e.prototype.getBounds=function(){return new it(this.x-this.width,this.y-this.height,this.width,this.height)},e.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},e}(),oi=function(){function e(){for(var r=arguments,t=[],n=0;n<arguments.length;n++)t[n]=r[n];var i=Array.isArray(t[0])?t[0]:t;if(typeof i[0]!="number"){for(var o=[],s=0,a=i.length;s<a;s++)o.push(i[s].x,i[s].y);i=o}this.points=i,this.type=St.POLY,this.closeStroke=!0}return e.prototype.clone=function(){var r=this.points.slice(),t=new e(r);return t.closeStroke=this.closeStroke,t},e.prototype.contains=function(r,t){for(var n=!1,i=this.points.length/2,o=0,s=i-1;o<i;s=o++){var a=this.points[o*2],u=this.points[o*2+1],l=this.points[s*2],h=this.points[s*2+1],f=u>t!=h>t&&r<(l-a)*((t-u)/(h-u))+a;f&&(n=!n)}return n},e.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(r,t){return r+", "+t},"")+"]")},e}(),Jm=function(){function e(r,t,n,i,o){r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),o===void 0&&(o=20),this.x=r,this.y=t,this.width=n,this.height=i,this.radius=o,this.type=St.RREC}return e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height,this.radius)},e.prototype.contains=function(r,t){if(this.width<=0||this.height<=0)return!1;if(r>=this.x&&r<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+n&&t<=this.y+this.height-n||r>=this.x+n&&r<=this.x+this.width-n)return!0;var i=r-(this.x+n),o=t-(this.y+n),s=n*n;if(i*i+o*o<=s||(i=r-(this.x+this.width-n),i*i+o*o<=s)||(o=t-(this.y+this.height-n),i*i+o*o<=s)||(i=r-(this.x+n),i*i+o*o<=s))return!0}return!1},e.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},e}(),at=function(){function e(r,t){r===void 0&&(r=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=r,this.y=t}return e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.copyFrom=function(r){return this.set(r.x,r.y),this},e.prototype.copyTo=function(r){return r.set(this.x,this.y),r},e.prototype.equals=function(r){return r.x===this.x&&r.y===this.y},e.prototype.set=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),this.x=r,this.y=t,this},e.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},e}(),lr=function(){function e(r,t,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this._x=n,this._y=i,this.cb=r,this.scope=t}return e.prototype.clone=function(r,t){return r===void 0&&(r=this.cb),t===void 0&&(t=this.scope),new e(r,t,this._x,this._y)},e.prototype.set=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),(this._x!==r||this._y!==t)&&(this._x=r,this._y=t,this.cb.call(this.scope)),this},e.prototype.copyFrom=function(r){return(this._x!==r.x||this._y!==r.y)&&(this._x=r.x,this._y=r.y,this.cb.call(this.scope)),this},e.prototype.copyTo=function(r){return r.set(this._x,this._y),r},e.prototype.equals=function(r){return r.x===this._x&&r.y===this._y},e.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(r){this._x!==r&&(this._x=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(r){this._y!==r&&(this._y=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),e}(),Nt=function(){function e(r,t,n,i,o,s){r===void 0&&(r=1),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=0),s===void 0&&(s=0),this.array=null,this.a=r,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=s}return e.prototype.fromArray=function(r){this.a=r[0],this.b=r[1],this.c=r[3],this.d=r[4],this.tx=r[2],this.ty=r[5]},e.prototype.set=function(r,t,n,i,o,s){return this.a=r,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=s,this},e.prototype.toArray=function(r,t){this.array||(this.array=new Float32Array(9));var n=t||this.array;return r?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},e.prototype.apply=function(r,t){t=t||new at;var n=r.x,i=r.y;return t.x=this.a*n+this.c*i+this.tx,t.y=this.b*n+this.d*i+this.ty,t},e.prototype.applyInverse=function(r,t){t=t||new at;var n=1/(this.a*this.d+this.c*-this.b),i=r.x,o=r.y;return t.x=this.d*n*i+-this.c*n*o+(this.ty*this.c-this.tx*this.d)*n,t.y=this.a*n*o+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,t},e.prototype.translate=function(r,t){return this.tx+=r,this.ty+=t,this},e.prototype.scale=function(r,t){return this.a*=r,this.d*=t,this.c*=r,this.b*=t,this.tx*=r,this.ty*=t,this},e.prototype.rotate=function(r){var t=Math.cos(r),n=Math.sin(r),i=this.a,o=this.c,s=this.tx;return this.a=i*t-this.b*n,this.b=i*n+this.b*t,this.c=o*t-this.d*n,this.d=o*n+this.d*t,this.tx=s*t-this.ty*n,this.ty=s*n+this.ty*t,this},e.prototype.append=function(r){var t=this.a,n=this.b,i=this.c,o=this.d;return this.a=r.a*t+r.b*i,this.b=r.a*n+r.b*o,this.c=r.c*t+r.d*i,this.d=r.c*n+r.d*o,this.tx=r.tx*t+r.ty*i+this.tx,this.ty=r.tx*n+r.ty*o+this.ty,this},e.prototype.setTransform=function(r,t,n,i,o,s,a,u,l){return this.a=Math.cos(a+l)*o,this.b=Math.sin(a+l)*o,this.c=-Math.sin(a-u)*s,this.d=Math.cos(a-u)*s,this.tx=r-(n*this.a+i*this.c),this.ty=t-(n*this.b+i*this.d),this},e.prototype.prepend=function(r){var t=this.tx;if(r.a!==1||r.b!==0||r.c!==0||r.d!==1){var n=this.a,i=this.c;this.a=n*r.a+this.b*r.c,this.b=n*r.b+this.b*r.d,this.c=i*r.a+this.d*r.c,this.d=i*r.b+this.d*r.d}return this.tx=t*r.a+this.ty*r.c+r.tx,this.ty=t*r.b+this.ty*r.d+r.ty,this},e.prototype.decompose=function(r){var t=this.a,n=this.b,i=this.c,o=this.d,s=r.pivot,a=-Math.atan2(-i,o),u=Math.atan2(n,t),l=Math.abs(a+u);return l<1e-5||Math.abs(ii-l)<1e-5?(r.rotation=u,r.skew.x=r.skew.y=0):(r.rotation=0,r.skew.x=a,r.skew.y=u),r.scale.x=Math.sqrt(t*t+n*n),r.scale.y=Math.sqrt(i*i+o*o),r.position.x=this.tx+(s.x*t+s.y*i),r.position.y=this.ty+(s.x*n+s.y*o),r},e.prototype.invert=function(){var r=this.a,t=this.b,n=this.c,i=this.d,o=this.tx,s=r*i-t*n;return this.a=i/s,this.b=-t/s,this.c=-n/s,this.d=r/s,this.tx=(n*this.ty-i*o)/s,this.ty=-(r*this.ty-t*o)/s,this},e.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},e.prototype.clone=function(){var r=new e;return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},e.prototype.copyTo=function(r){return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},e.prototype.copyFrom=function(r){return this.a=r.a,this.b=r.b,this.c=r.c,this.d=r.d,this.tx=r.tx,this.ty=r.ty,this},e.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(e,"IDENTITY",{get:function(){return new e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TEMP_MATRIX",{get:function(){return new e},enumerable:!1,configurable:!0}),e}(),hr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],fr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],cr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],dr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Xo=[],yl=[],si=Math.sign;function Qm(){for(var e=0;e<16;e++){var r=[];Xo.push(r);for(var t=0;t<16;t++)for(var n=si(hr[e]*hr[t]+cr[e]*fr[t]),i=si(fr[e]*hr[t]+dr[e]*fr[t]),o=si(hr[e]*cr[t]+cr[e]*dr[t]),s=si(fr[e]*cr[t]+dr[e]*dr[t]),a=0;a<16;a++)if(hr[a]===n&&fr[a]===i&&cr[a]===o&&dr[a]===s){r.push(a);break}}for(var e=0;e<16;e++){var u=new Nt;u.set(hr[e],fr[e],cr[e],dr[e],0,0),yl.push(u)}}Qm();var wt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(e){return hr[e]},uY:function(e){return fr[e]},vX:function(e){return cr[e]},vY:function(e){return dr[e]},inv:function(e){return e&8?e&15:-e&7},add:function(e,r){return Xo[e][r]},sub:function(e,r){return Xo[e][wt.inv(r)]},rotate180:function(e){return e^4},isVertical:function(e){return(e&3)==2},byDirection:function(e,r){return Math.abs(e)*2<=Math.abs(r)?r>=0?wt.S:wt.N:Math.abs(r)*2<=Math.abs(e)?e>0?wt.E:wt.W:r>0?e>0?wt.SE:wt.SW:e>0?wt.NE:wt.NW},matrixAppendRotationInv:function(e,r,t,n){t===void 0&&(t=0),n===void 0&&(n=0);var i=yl[wt.inv(r)];i.tx=t,i.ty=n,e.append(i)}},xl=function(){function e(){this.worldTransform=new Nt,this.localTransform=new Nt,this.position=new lr(this.onChange,this,0,0),this.scale=new lr(this.onChange,this,1,1),this.pivot=new lr(this.onChange,this,0,0),this.skew=new lr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return e.prototype.onChange=function(){this._localID++},e.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},e.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},e.prototype.updateLocalTransform=function(){var r=this.localTransform;this._localID!==this._currentLocalID&&(r.a=this._cx*this.scale.x,r.b=this._sx*this.scale.x,r.c=this._cy*this.scale.y,r.d=this._sy*this.scale.y,r.tx=this.position.x-(this.pivot.x*r.a+this.pivot.y*r.c),r.ty=this.position.y-(this.pivot.x*r.b+this.pivot.y*r.d),this._currentLocalID=this._localID,this._parentID=-1)},e.prototype.updateTransform=function(r){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==r._worldID){var n=r.worldTransform,i=this.worldTransform;i.a=t.a*n.a+t.b*n.c,i.b=t.a*n.b+t.b*n.d,i.c=t.c*n.a+t.d*n.c,i.d=t.c*n.b+t.d*n.d,i.tx=t.tx*n.a+t.ty*n.c+n.tx,i.ty=t.tx*n.b+t.ty*n.d+n.ty,this._parentID=r._worldID,this._worldID++}},e.prototype.setFromMatrix=function(r){r.decompose(this),this._localID++},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._rotation},set:function(r){this._rotation!==r&&(this._rotation=r,this.updateSkew())},enumerable:!1,configurable:!0}),e.IDENTITY=new e,e}();/*!
 * @pixi/display - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */k.SORTABLE_CHILDREN=!1;var vn=function(){function e(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return e.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},e.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},e.prototype.getRectangle=function(r){return this.minX>this.maxX||this.minY>this.maxY?it.EMPTY:(r=r||new it(0,0,1,1),r.x=this.minX,r.y=this.minY,r.width=this.maxX-this.minX,r.height=this.maxY-this.minY,r)},e.prototype.addPoint=function(r){this.minX=Math.min(this.minX,r.x),this.maxX=Math.max(this.maxX,r.x),this.minY=Math.min(this.minY,r.y),this.maxY=Math.max(this.maxY,r.y)},e.prototype.addPointMatrix=function(r,t){var n=r.a,i=r.b,o=r.c,s=r.d,a=r.tx,u=r.ty,l=n*t.x+o*t.y+a,h=i*t.x+s*t.y+u;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,h),this.maxY=Math.max(this.maxY,h)},e.prototype.addQuad=function(r){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY,s=r[0],a=r[1];t=s<t?s:t,n=a<n?a:n,i=s>i?s:i,o=a>o?a:o,s=r[2],a=r[3],t=s<t?s:t,n=a<n?a:n,i=s>i?s:i,o=a>o?a:o,s=r[4],a=r[5],t=s<t?s:t,n=a<n?a:n,i=s>i?s:i,o=a>o?a:o,s=r[6],a=r[7],t=s<t?s:t,n=a<n?a:n,i=s>i?s:i,o=a>o?a:o,this.minX=t,this.minY=n,this.maxX=i,this.maxY=o},e.prototype.addFrame=function(r,t,n,i,o){this.addFrameMatrix(r.worldTransform,t,n,i,o)},e.prototype.addFrameMatrix=function(r,t,n,i,o){var s=r.a,a=r.b,u=r.c,l=r.d,h=r.tx,f=r.ty,c=this.minX,d=this.minY,p=this.maxX,v=this.maxY,_=s*t+u*n+h,g=a*t+l*n+f;c=_<c?_:c,d=g<d?g:d,p=_>p?_:p,v=g>v?g:v,_=s*i+u*n+h,g=a*i+l*n+f,c=_<c?_:c,d=g<d?g:d,p=_>p?_:p,v=g>v?g:v,_=s*t+u*o+h,g=a*t+l*o+f,c=_<c?_:c,d=g<d?g:d,p=_>p?_:p,v=g>v?g:v,_=s*i+u*o+h,g=a*i+l*o+f,c=_<c?_:c,d=g<d?g:d,p=_>p?_:p,v=g>v?g:v,this.minX=c,this.minY=d,this.maxX=p,this.maxY=v},e.prototype.addVertexData=function(r,t,n){for(var i=this.minX,o=this.minY,s=this.maxX,a=this.maxY,u=t;u<n;u+=2){var l=r[u],h=r[u+1];i=l<i?l:i,o=h<o?h:o,s=l>s?l:s,a=h>a?h:a}this.minX=i,this.minY=o,this.maxX=s,this.maxY=a},e.prototype.addVertices=function(r,t,n,i){this.addVerticesMatrix(r.worldTransform,t,n,i)},e.prototype.addVerticesMatrix=function(r,t,n,i,o,s){o===void 0&&(o=0),s===void 0&&(s=o);for(var a=r.a,u=r.b,l=r.c,h=r.d,f=r.tx,c=r.ty,d=this.minX,p=this.minY,v=this.maxX,_=this.maxY,g=n;g<i;g+=2){var b=t[g],w=t[g+1],E=a*b+l*w+f,T=h*w+u*b+c;d=Math.min(d,E-o),v=Math.max(v,E+o),p=Math.min(p,T-s),_=Math.max(_,T+s)}this.minX=d,this.minY=p,this.maxX=v,this.maxY=_},e.prototype.addBounds=function(r){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY;this.minX=r.minX<t?r.minX:t,this.minY=r.minY<n?r.minY:n,this.maxX=r.maxX>i?r.maxX:i,this.maxY=r.maxY>o?r.maxY:o},e.prototype.addBoundsMask=function(r,t){var n=r.minX>t.minX?r.minX:t.minX,i=r.minY>t.minY?r.minY:t.minY,o=r.maxX<t.maxX?r.maxX:t.maxX,s=r.maxY<t.maxY?r.maxY:t.maxY;if(n<=o&&i<=s){var a=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=n<a?n:a,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=s>h?s:h}},e.prototype.addBoundsMatrix=function(r,t){this.addFrameMatrix(t,r.minX,r.minY,r.maxX,r.maxY)},e.prototype.addBoundsArea=function(r,t){var n=r.minX>t.x?r.minX:t.x,i=r.minY>t.y?r.minY:t.y,o=r.maxX<t.x+t.width?r.maxX:t.x+t.width,s=r.maxY<t.y+t.height?r.maxY:t.y+t.height;if(n<=o&&i<=s){var a=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=n<a?n:a,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=s>h?s:h}},e.prototype.pad=function(r,t){r===void 0&&(r=0),t===void 0&&(t=r),this.isEmpty()||(this.minX-=r,this.maxX+=r,this.minY-=t,this.maxY+=t)},e.prototype.addFramePad=function(r,t,n,i,o,s){r-=o,t-=s,n+=o,i+=s,this.minX=this.minX<r?this.minX:r,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>i?this.maxY:i},e}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ho=function(e,r){return Ho=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ho(e,r)};function zo(e,r){Ho(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ft=function(e){zo(r,e);function r(){var t=e.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new xl,t.alpha=1,t.visible=!0,t.renderable=!0,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new vn,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return r.mixin=function(t){for(var n=Object.keys(t),i=0;i<n.length;++i){var o=n[i];Object.defineProperty(r.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(r.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),r.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},r.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},r.prototype.getBounds=function(t,n){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new it),n=this._boundsRect),this._bounds.getRectangle(n)},r.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new it),t=this._localBoundsRect),this._localBounds||(this._localBounds=new vn);var n=this.transform,i=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,s=this._boundsID;this._bounds=this._localBounds;var a=this.getBounds(!1,t);return this.parent=i,this.transform=n,this._bounds=o,this._bounds.updateID+=this._boundsID-s,a},r.prototype.toGlobal=function(t,n,i){return i===void 0&&(i=!1),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,n)},r.prototype.toLocal=function(t,n,i,o){return n&&(t=n.toGlobal(t,i,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,i)},r.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},r.prototype.setTransform=function(t,n,i,o,s,a,u,l,h){return t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=1),s===void 0&&(s=0),a===void 0&&(a=0),u===void 0&&(u=0),l===void 0&&(l=0),h===void 0&&(h=0),this.position.x=t,this.position.y=n,this.scale.x=i||1,this.scale.y=o||1,this.rotation=s,this.skew.x=a,this.skew.y=u,this.pivot.x=l,this.pivot.y=h,this},r.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(r.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new bl),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),r.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},r.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(r.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.transform.rotation*Ym},set:function(t){this.transform.rotation=t*ur},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var n=this._mask.maskObject||this._mask;n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1)}if(this._mask=t,this._mask){var n=this._mask.maskObject||this._mask;n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++}}},enumerable:!1,configurable:!0}),r}(be),bl=function(e){zo(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.sortDirty=null,t}return r}(Ft);Ft.prototype.displayObjectUpdateTransform=Ft.prototype.updateTransform;/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Tl;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(Tl||(Tl={}));var wl;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(wl||(wl={}));var El;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(El||(El={}));var Cl;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(Cl||(Cl={}));var Pl;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Pl||(Pl={}));var Il;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Il||(Il={}));var Rl;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Rl||(Rl={}));var Ol;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(Ol||(Ol={}));var Al;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(Al||(Al={}));var Sl;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Sl||(Sl={}));var Nl;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Nl||(Nl={}));var Fl;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(Fl||(Fl={}));var Ul;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Ul||(Ul={}));var Ll;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(Ll||(Ll={}));var Ml;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Ml||(Ml={}));var Gl;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(Gl||(Gl={}));var Vo;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(Vo||(Vo={}));var Bl;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Bl||(Bl={}));var Dl;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Dl||(Dl={}));function t0(e,r){return e.zIndex===r.zIndex?e._lastSortedIndex-r._lastSortedIndex:e.zIndex-r.zIndex}var Ie=function(e){zo(r,e);function r(){var t=e.call(this)||this;return t.children=[],t.sortableChildren=k.SORTABLE_CHILDREN,t.sortDirty=!1,t}return r.prototype.onChildrenChange=function(t){},r.prototype.addChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.addChild(n[o]);else{var s=n[0];s.parent&&s.parent.removeChild(s),s.parent=this,this.sortDirty=!0,s.transform._parentID=-1,this.children.push(s),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",s,this,this.children.length-1),s.emit("added",this)}return n[0]},r.prototype.addChildAt=function(t,n){if(n<0||n>this.children.length)throw new Error(t+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(n,0,t),this._boundsID++,this.onChildrenChange(n),t.emit("added",this),this.emit("childAdded",t,this,n),t},r.prototype.swapChildren=function(t,n){if(t!==n){var i=this.getChildIndex(t),o=this.getChildIndex(n);this.children[i]=n,this.children[o]=t,this.onChildrenChange(i<o?i:o)}},r.prototype.getChildIndex=function(t){var n=this.children.indexOf(t);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},r.prototype.setChildIndex=function(t,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var i=this.getChildIndex(t);Fr(this.children,i,1),this.children.splice(n,0,t),this.onChildrenChange(n)},r.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},r.prototype.removeChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.removeChild(n[o]);else{var s=n[0],a=this.children.indexOf(s);if(a===-1)return null;s.parent=null,s.transform._parentID=-1,Fr(this.children,a,1),this._boundsID++,this.onChildrenChange(a),s.emit("removed",this),this.emit("childRemoved",s,this,a)}return n[0]},r.prototype.removeChildAt=function(t){var n=this.getChildAt(t);return n.parent=null,n.transform._parentID=-1,Fr(this.children,t,1),this._boundsID++,this.onChildrenChange(t),n.emit("removed",this),this.emit("childRemoved",n,this,t),n},r.prototype.removeChildren=function(t,n){t===void 0&&(t=0),n===void 0&&(n=this.children.length);var i=t,o=n,s=o-i,a;if(s>0&&s<=o){a=this.children.splice(i,s);for(var u=0;u<a.length;++u)a[u].parent=null,a[u].transform&&(a[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<a.length;++u)a[u].emit("removed",this),this.emit("childRemoved",a[u],this,u);return a}else if(s===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},r.prototype.sortChildren=function(){for(var t=!1,n=0,i=this.children.length;n<i;++n){var o=this.children[n];o._lastSortedIndex=n,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(t0),this.sortDirty=!1},r.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,n=this.children.length;t<n;++t){var i=this.children[t];i.visible&&i.updateTransform()}},r.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var n=this.children[t];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var i=n._mask.maskObject||n._mask;i.calculateBounds(),this._bounds.addBoundsMask(n._bounds,i._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},r.prototype.getLocalBounds=function(t,n){n===void 0&&(n=!1);var i=e.prototype.getLocalBounds.call(this,t);if(!n)for(var o=0,s=this.children.length;o<s;++o){var a=this.children[o];a.visible&&a.updateTransform()}return i},r.prototype._calculateBounds=function(){},r.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);for(var n=0,i=this.children.length;n<i;++n)this.children[n].render(t)}},r.prototype.renderAdvanced=function(t){var n=this.filters,i=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<n.length;o++)n[o].enabled&&this._enabledFilters.push(n[o])}var s=n&&this._enabledFilters&&this._enabledFilters.length||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==Vo.NONE));s&&t.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),i&&t.mask.push(this,this._mask),this._render(t);for(var o=0,a=this.children.length;o<a;o++)this.children[o].render(t);s&&t.batch.flush(),i&&t.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},r.prototype._render=function(t){},r.prototype.destroy=function(t){e.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof t=="boolean"?t:t&&t.children,i=this.removeChildren(0,this.children.length);if(n)for(var o=0;o<i.length;++o)i[o].destroy(t)},Object.defineProperty(r.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var n=this.getLocalBounds().width;n!==0?this.scale.x=t/n:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var n=this.getLocalBounds().height;n!==0?this.scale.y=t/n:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),r}(Ft);Ie.prototype.containerUpdateTransform=Ie.prototype.updateTransform;/*!
 * @pixi/accessibility - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var e0={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};Ft.mixin(e0);var r0=9,ai=100,n0=0,i0=0,kl=2,jl=1,o0=-1e3,s0=-1e3,a0=2,u0=function(){function e(r){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(xe.tablet||xe.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=ai+"px",t.style.height=ai+"px",t.style.position="absolute",t.style.top=n0+"px",t.style.left=i0+"px",t.style.zIndex=kl.toString(),this.div=t,this.renderer=r,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),self.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(e.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),e.prototype.createTouchHook=function(){var r=this,t=document.createElement("button");t.style.width=jl+"px",t.style.height=jl+"px",t.style.position="absolute",t.style.top=o0+"px",t.style.left=s0+"px",t.style.zIndex=a0.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){r._isMobileAccessibility=!0,r.activate(),r.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},e.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},e.prototype.activate=function(){var r;this._isActive||(this._isActive=!0,self.document.addEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(r=this.renderer.view.parentNode)===null||r===void 0||r.appendChild(this.div))},e.prototype.deactivate=function(){var r;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(r=this.div.parentNode)===null||r===void 0||r.removeChild(this.div))},e.prototype.updateAccessibleObjects=function(r){if(!(!r.visible||!r.accessibleChildren)){r.accessible&&r.interactive&&(r._accessibleActive||this.addChild(r),r.renderId=this.renderId);var t=r.children;if(t)for(var n=0;n<t.length;n++)this.updateAccessibleObjects(t[n])}},e.prototype.update=function(){var r=performance.now();if(!(xe.android.device&&r<this.androidUpdateCount)&&(this.androidUpdateCount=r+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),n=t.left,i=t.top,o=t.width,s=t.height,a=this.renderer,u=a.width,l=a.height,h=a.resolution,f=o/u*h,c=s/l*h,d=this.div;d.style.left=n+"px",d.style.top=i+"px",d.style.width=u+"px",d.style.height=l+"px";for(var p=0;p<this.children.length;p++){var v=this.children[p];if(v.renderId!==this.renderId)v._accessibleActive=!1,Fr(this.children,p,1),this.div.removeChild(v._accessibleDiv),this.pool.push(v._accessibleDiv),v._accessibleDiv=null,p--;else{d=v._accessibleDiv;var _=v.hitArea,g=v.worldTransform;v.hitArea?(d.style.left=(g.tx+_.x*g.a)*f+"px",d.style.top=(g.ty+_.y*g.d)*c+"px",d.style.width=_.width*g.a*f+"px",d.style.height=_.height*g.d*c+"px"):(_=v.getBounds(),this.capHitArea(_),d.style.left=_.x*f+"px",d.style.top=_.y*c+"px",d.style.width=_.width*f+"px",d.style.height=_.height*c+"px",d.title!==v.accessibleTitle&&v.accessibleTitle!==null&&(d.title=v.accessibleTitle),d.getAttribute("aria-label")!==v.accessibleHint&&v.accessibleHint!==null&&d.setAttribute("aria-label",v.accessibleHint)),(v.accessibleTitle!==d.title||v.tabIndex!==d.tabIndex)&&(d.title=v.accessibleTitle,d.tabIndex=v.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},e.prototype.updateDebugHTML=function(r){r.innerHTML="type: "+r.type+"</br> title : "+r.title+"</br> tabIndex: "+r.tabIndex},e.prototype.capHitArea=function(r){r.x<0&&(r.width+=r.x,r.x=0),r.y<0&&(r.height+=r.y,r.y=0);var t=this.renderer,n=t.width,i=t.height;r.x+r.width>n&&(r.width=n-r.x),r.y+r.height>i&&(r.height=i-r.y)},e.prototype.addChild=function(r){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=ai+"px",t.style.height=ai+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=kl.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=r.accessiblePointerEvents,t.type=r.accessibleType,r.accessibleTitle&&r.accessibleTitle!==null?t.title=r.accessibleTitle:(!r.accessibleHint||r.accessibleHint===null)&&(t.title="displayObject "+r.tabIndex),r.accessibleHint&&r.accessibleHint!==null&&t.setAttribute("aria-label",r.accessibleHint),this.debug&&this.updateDebugHTML(t),r._accessibleActive=!0,r._accessibleDiv=t,t.displayObject=r,this.children.push(r),this.div.appendChild(r._accessibleDiv),r._accessibleDiv.tabIndex=r.tabIndex},e.prototype._onClick=function(r){var t=this.renderer.plugins.interaction,n=r.target.displayObject,i=t.eventData;t.dispatchEvent(n,"click",i),t.dispatchEvent(n,"pointertap",i),t.dispatchEvent(n,"tap",i)},e.prototype._onFocus=function(r){r.target.getAttribute("aria-live")||r.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,n=r.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseover",i)},e.prototype._onFocusOut=function(r){r.target.getAttribute("aria-live")||r.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,n=r.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseout",i)},e.prototype._onKeyDown=function(r){r.keyCode===r0&&this.activate()},e.prototype._onMouseMove=function(r){r.movementX===0&&r.movementY===0||this.deactivate()},e.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},e}();/*!
 * @pixi/ticker - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */k.TARGET_FPMS=.06;var Ue;(function(e){e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY"})(Ue||(Ue={}));var $o=function(){function e(r,t,n,i){t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=r,this.context=t,this.priority=n,this.once=i}return e.prototype.match=function(r,t){return t===void 0&&(t=null),this.fn===r&&this.context===t},e.prototype.emit=function(r){this.fn&&(this.context?this.fn.call(this.context,r):this.fn(r));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},e.prototype.connect=function(r){this.previous=r,r.next&&(r.next.previous=this),this.next=r.next,r.next=this},e.prototype.destroy=function(r){r===void 0&&(r=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=r?null:t,this.previous=null,t},e}(),Rt=function(){function e(){var r=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new $o(null,null,1/0),this.deltaMS=1/k.TARGET_FPMS,this.elapsedMS=1/k.TARGET_FPMS,this._tick=function(t){r._requestId=null,r.started&&(r.update(t),r.started&&r._requestId===null&&r._head.next&&(r._requestId=requestAnimationFrame(r._tick)))}}return e.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},e.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},e.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},e.prototype.add=function(r,t,n){return n===void 0&&(n=Ue.NORMAL),this._addListener(new $o(r,t,n))},e.prototype.addOnce=function(r,t,n){return n===void 0&&(n=Ue.NORMAL),this._addListener(new $o(r,t,n,!0))},e.prototype._addListener=function(r){var t=this._head.next,n=this._head;if(!t)r.connect(n);else{for(;t;){if(r.priority>t.priority){r.connect(n);break}n=t,t=t.next}r.previous||r.connect(n)}return this._startIfPossible(),this},e.prototype.remove=function(r,t){for(var n=this._head.next;n;)n.match(r,t)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(e.prototype,"count",{get:function(){if(!this._head)return 0;for(var r=0,t=this._head;t=t.next;)r++;return r},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},e.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},e.prototype.destroy=function(){if(!this._protected){this.stop();for(var r=this._head.next;r;)r=r.destroy(!0);this._head.destroy(),this._head=null}},e.prototype.update=function(r){r===void 0&&(r=performance.now());var t;if(r>this.lastTime){if(t=this.elapsedMS=r-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var n=r-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=r-n%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*k.TARGET_FPMS;for(var i=this._head,o=i.next;o;)o=o.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=r},Object.defineProperty(e.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(r){var t=Math.min(this.maxFPS,r),n=Math.min(Math.max(0,t)/1e3,k.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(r){if(r===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,r);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"shared",{get:function(){if(!e._shared){var r=e._shared=new e;r.autoStart=!0,r._protected=!0}return e._shared},enumerable:!1,configurable:!0}),Object.defineProperty(e,"system",{get:function(){if(!e._system){var r=e._system=new e;r.autoStart=!0,r._protected=!0}return e._system},enumerable:!1,configurable:!0}),e}(),l0=function(){function e(){}return e.init=function(r){var t=this;r=Object.assign({autoStart:!0,sharedTicker:!1},r),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,Ue.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=r.sharedTicker?Rt.shared:new Rt,r.autoStart&&this.start()},e.destroy=function(){if(this._ticker){var r=this._ticker;this.ticker=null,r.destroy()}},e}();/*!
 * @pixi/interaction - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Xl=function(){function e(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new at,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(e.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),e.prototype.getLocalPosition=function(r,t,n){return r.worldTransform.applyInverse(n||this.global,t)},e.prototype.copyEvent=function(r){"isPrimary"in r&&r.isPrimary&&(this.isPrimary=!0),this.button="button"in r&&r.button;var t="buttons"in r&&r.buttons;this.buttons=Number.isInteger(t)?t:"which"in r&&r.which,this.width="width"in r&&r.width,this.height="height"in r&&r.height,this.tiltX="tiltX"in r&&r.tiltX,this.tiltY="tiltY"in r&&r.tiltY,this.pointerType="pointerType"in r&&r.pointerType,this.pressure="pressure"in r&&r.pressure,this.rotationAngle="rotationAngle"in r&&r.rotationAngle,this.twist="twist"in r&&r.twist||0,this.tangentialPressure="tangentialPressure"in r&&r.tangentialPressure||0},e.prototype.reset=function(){this.isPrimary=!1},e}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Wo=function(e,r){return Wo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Wo(e,r)};function h0(e,r){Wo(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var f0=function(){function e(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return e.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},e.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},e}(),qo=function(){function e(r){this._pointerId=r,this._flags=e.FLAGS.NONE}return e.prototype._doSet=function(r,t){t?this._flags=this._flags|r:this._flags=this._flags&~r},Object.defineProperty(e.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"flags",{get:function(){return this._flags},set:function(r){this._flags=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"none",{get:function(){return this._flags===e.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"over",{get:function(){return(this._flags&e.FLAGS.OVER)!=0},set:function(r){this._doSet(e.FLAGS.OVER,r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightDown",{get:function(){return(this._flags&e.FLAGS.RIGHT_DOWN)!=0},set:function(r){this._doSet(e.FLAGS.RIGHT_DOWN,r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftDown",{get:function(){return(this._flags&e.FLAGS.LEFT_DOWN)!=0},set:function(r){this._doSet(e.FLAGS.LEFT_DOWN,r)},enumerable:!1,configurable:!0}),e.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),e}(),c0=function(){function e(){this._tempPoint=new at}return e.prototype.recursiveFindHit=function(r,t,n,i,o){if(!t||!t.visible)return!1;var s=r.data.global;o=t.interactive||o;var a=!1,u=o,l=!0;if(t.hitArea?(i&&(t.worldTransform.applyInverse(s,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?a=!0:(i=!1,l=!1)),u=!1):t._mask&&i&&(t._mask.containsPoint&&t._mask.containsPoint(s)||(i=!1)),l&&t.interactiveChildren&&t.children)for(var h=t.children,f=h.length-1;f>=0;f--){var c=h[f],d=this.recursiveFindHit(r,c,n,i,u);if(d){if(!c.parent)continue;u=!1,d&&(r.target&&(i=!1),a=!0)}}return o&&(i&&!r.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(s)&&(a=!0),t.interactive&&(a&&!r.target&&(r.target=t),n&&n(r,t,!!a))),a},e.prototype.findHit=function(r,t,n,i){this.recursiveFindHit(r,t,n,i,!1)},e}(),d0={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(e){e?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};Ft.mixin(d0);var ui=1,li={target:null,data:{global:null}},p0=function(e){h0(r,e);function r(t,n){var i=e.call(this)||this;return n=n||{},i.renderer=t,i.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new Xl,i.mouse.identifier=ui,i.mouse.global.set(-999999),i.activeInteractionData={},i.activeInteractionData[ui]=i.mouse,i.interactionDataPool=[],i.eventData=new f0,i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.tickerAdded=!1,i.mouseOverRenderer=!("PointerEvent"in self),i.supportsTouchEvents="ontouchstart"in self,i.supportsPointerEvents=!!self.PointerEvent,i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerCancel=i.onPointerCancel.bind(i),i.processPointerCancel=i.processPointerCancel.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.cursorStyles={default:"inherit",pointer:"pointer"},i.currentCursorMode=null,i.cursor=null,i.resolution=1,i.delayedEvents=[],i.search=new c0,i._tempDisplayObject=new bl,i._eventListenerOptions={capture:!0,passive:!1},i._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return Object.defineProperty(r.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),r.prototype.hitTest=function(t,n){return li.target=null,li.data.global=t,n||(n=this.lastObjectRendered),this.processInteractive(li,n,null,!0),li.target},r.prototype.setTargetElement=function(t,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=n,this.addEvents(),this.addTickerListener()},r.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Rt.system.add(this.tickerUpdate,this,Ue.INTERACTION),this.tickerAdded=!0)},r.prototype.removeTickerListener=function(){!this.tickerAdded||(Rt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},r.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(self.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},r.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(self.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},r.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},r.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var n=this.activeInteractionData[t];if(n.originalEvent&&n.pointerType!=="touch"){var i=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(i,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},r.prototype.setCursorMode=function(t){t=t||"default";var n=!0;if(self.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var i=this.cursorStyles[t];if(i)switch(typeof i){case"string":n&&(this.interactionDOMElement.style.cursor=i);break;case"function":i(t);break;case"object":n&&Object.assign(this.interactionDOMElement.style,i);break}else n&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},r.prototype.dispatchEvent=function(t,n,i){(!i.stopPropagationHint||t===i.stopsPropagatingAt)&&(i.currentTarget=t,i.type=n,t.emit(n,i),t[n]&&t[n](i))},r.prototype.delayDispatchEvent=function(t,n,i){this.delayedEvents.push({displayObject:t,eventString:n,eventData:i})},r.prototype.mapPositionToPoint=function(t,n,i){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var s=1/this.resolution;t.x=(n-o.left)*(this.interactionDOMElement.width/o.width)*s,t.y=(i-o.top)*(this.interactionDOMElement.height/o.height)*s},r.prototype.processInteractive=function(t,n,i,o){var s=this.search.findHit(t,n,i,o),a=this.delayedEvents;if(!a.length)return s;t.stopPropagationHint=!1;var u=a.length;this.delayedEvents=[];for(var l=0;l<u;l++){var h=a[l],f=h.displayObject,c=h.eventString,d=h.eventData;d.stopsPropagatingAt===f&&(d.stopPropagationHint=!0),this.dispatchEvent(f,c,d)}return s},r.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);if(this.autoPreventDefault&&n[0].isNormalized){var i=t.cancelable||!("cancelable"in t);i&&t.preventDefault()}for(var o=n.length,s=0;s<o;s++){var a=n[s],u=this.getInteractionDataForPointerId(a),l=this.configureInteractionEventForDOMEvent(this.eventData,a,u);if(l.data.originalEvent=t,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),a.pointerType==="touch")this.emit("touchstart",l);else if(a.pointerType==="mouse"||a.pointerType==="pen"){var h=a.button===2;this.emit(h?"rightdown":"mousedown",this.eventData)}}}},r.prototype.processPointerDown=function(t,n,i){var o=t.data,s=t.data.identifier;if(i){if(n.trackedPointers[s]||(n.trackedPointers[s]=new qo(s)),this.dispatchEvent(n,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(n,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var a=o.button===2;a?n.trackedPointers[s].rightDown=!0:n.trackedPointers[s].leftDown=!0,this.dispatchEvent(n,a?"rightdown":"mousedown",t)}}},r.prototype.onPointerComplete=function(t,n,i){for(var o=this.normalizeToPointerData(t),s=o.length,a=t.target!==this.interactionDOMElement?"outside":"",u=0;u<s;u++){var l=o[u],h=this.getInteractionDataForPointerId(l),f=this.configureInteractionEventForDOMEvent(this.eventData,l,h);if(f.data.originalEvent=t,this.processInteractive(f,this.lastObjectRendered,i,n||!a),this.emit(n?"pointercancel":"pointerup"+a,f),l.pointerType==="mouse"||l.pointerType==="pen"){var c=l.button===2;this.emit(c?"rightup"+a:"mouseup"+a,f)}else l.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+a,f),this.releaseInteractionDataForPointerId(l.pointerId))}},r.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},r.prototype.processPointerCancel=function(t,n){var i=t.data,o=t.data.identifier;n.trackedPointers[o]!==void 0&&(delete n.trackedPointers[o],this.dispatchEvent(n,"pointercancel",t),i.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",t))},r.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},r.prototype.processPointerUp=function(t,n,i){var o=t.data,s=t.data.identifier,a=n.trackedPointers[s],u=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen",h=!1;if(l){var f=o.button===2,c=qo.FLAGS,d=f?c.RIGHT_DOWN:c.LEFT_DOWN,p=a!==void 0&&a.flags&d;i?(this.dispatchEvent(n,f?"rightup":"mouseup",t),p&&(this.dispatchEvent(n,f?"rightclick":"click",t),h=!0)):p&&this.dispatchEvent(n,f?"rightupoutside":"mouseupoutside",t),a&&(f?a.rightDown=!1:a.leftDown=!1)}i?(this.dispatchEvent(n,"pointerup",t),u&&this.dispatchEvent(n,"touchend",t),a&&((!l||h)&&this.dispatchEvent(n,"pointertap",t),u&&(this.dispatchEvent(n,"tap",t),a.over=!1))):a&&(this.dispatchEvent(n,"pointerupoutside",t),u&&this.dispatchEvent(n,"touchendoutside",t)),a&&a.none&&delete n.trackedPointers[s]},r.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var i=n.length,o=0;o<i;o++){var s=n[o],a=this.getInteractionDataForPointerId(s),u=this.configureInteractionEventForDOMEvent(this.eventData,s,a);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),s.pointerType==="touch"&&this.emit("touchmove",u),(s.pointerType==="mouse"||s.pointerType==="pen")&&this.emit("mousemove",u)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},r.prototype.processPointerMove=function(t,n,i){var o=t.data,s=o.pointerType==="touch",a=o.pointerType==="mouse"||o.pointerType==="pen";a&&this.processPointerOverOut(t,n,i),(!this.moveWhenInside||i)&&(this.dispatchEvent(n,"pointermove",t),s&&this.dispatchEvent(n,"touchmove",t),a&&this.dispatchEvent(n,"mousemove",t))},r.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t),i=n[0];i.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);s.data.originalEvent=i,this.processInteractive(s,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",s),i.pointerType==="mouse"||i.pointerType==="pen"?this.emit("mouseout",s):this.releaseInteractionDataForPointerId(o.identifier)}},r.prototype.processPointerOverOut=function(t,n,i){var o=t.data,s=t.data.identifier,a=o.pointerType==="mouse"||o.pointerType==="pen",u=n.trackedPointers[s];i&&!u&&(u=n.trackedPointers[s]=new qo(s)),u!==void 0&&(i&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(n,"pointerover",t),a&&this.delayDispatchEvent(n,"mouseover",t)),a&&this.cursor===null&&(this.cursor=n.cursor)):u.over&&(u.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),a&&this.dispatchEvent(n,"mouseout",t),u.none&&delete n.trackedPointers[s]))},r.prototype.onPointerOver=function(t){var n=this.normalizeToPointerData(t),i=n[0],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);s.data.originalEvent=i,i.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",s),(i.pointerType==="mouse"||i.pointerType==="pen")&&this.emit("mouseover",s)},r.prototype.getInteractionDataForPointerId=function(t){var n=t.pointerId,i;return n===ui||t.pointerType==="mouse"?i=this.mouse:this.activeInteractionData[n]?i=this.activeInteractionData[n]:(i=this.interactionDataPool.pop()||new Xl,i.identifier=n,this.activeInteractionData[n]=i),i.copyEvent(t),i},r.prototype.releaseInteractionDataForPointerId=function(t){var n=this.activeInteractionData[t];n&&(delete this.activeInteractionData[t],n.reset(),this.interactionDataPool.push(n))},r.prototype.configureInteractionEventForDOMEvent=function(t,n,i){return t.data=i,this.mapPositionToPoint(i.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=i.global.x,n.globalY=i.global.y),i.originalEvent=n,t.reset(),t},r.prototype.normalizeToPointerData=function(t){var n=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var i=0,o=t.changedTouches.length;i<o;i++){var s=t.changedTouches[i];typeof s.button=="undefined"&&(s.button=t.touches.length?1:0),typeof s.buttons=="undefined"&&(s.buttons=t.touches.length?1:0),typeof s.isPrimary=="undefined"&&(s.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof s.width=="undefined"&&(s.width=s.radiusX||1),typeof s.height=="undefined"&&(s.height=s.radiusY||1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="touch"),typeof s.pointerId=="undefined"&&(s.pointerId=s.identifier||0),typeof s.pressure=="undefined"&&(s.pressure=s.force||.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),typeof s.layerX=="undefined"&&(s.layerX=s.offsetX=s.clientX),typeof s.layerY=="undefined"&&(s.layerY=s.offsetY=s.clientY),s.isNormalized=!0,n.push(s)}else if(!self.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof self.PointerEvent))){var a=t;typeof a.isPrimary=="undefined"&&(a.isPrimary=!0),typeof a.width=="undefined"&&(a.width=1),typeof a.height=="undefined"&&(a.height=1),typeof a.tiltX=="undefined"&&(a.tiltX=0),typeof a.tiltY=="undefined"&&(a.tiltY=0),typeof a.pointerType=="undefined"&&(a.pointerType="mouse"),typeof a.pointerId=="undefined"&&(a.pointerId=ui),typeof a.pressure=="undefined"&&(a.pressure=.5),typeof a.twist=="undefined"&&(a.twist=0),typeof a.tangentialPressure=="undefined"&&(a.tangentialPressure=0),a.isNormalized=!0,n.push(a)}else n.push(t);return n},r.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},r}(be);/*!
 * @pixi/runner - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Vt=function(){function e(r){this.items=[],this._name=r,this._aliasCount=0}return e.prototype.emit=function(r,t,n,i,o,s,a,u){if(arguments.length>8)throw new Error("max arguments reached");var l=this,h=l.name,f=l.items;this._aliasCount++;for(var c=0,d=f.length;c<d;c++)f[c][h](r,t,n,i,o,s,a,u);return f===this.items&&this._aliasCount--,this},e.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},e.prototype.add=function(r){return r[this._name]&&(this.ensureNonAliasedItems(),this.remove(r),this.items.push(r)),this},e.prototype.remove=function(r){var t=this.items.indexOf(r);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},e.prototype.contains=function(r){return this.items.indexOf(r)!==-1},e.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},e.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(e.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),e}();Object.defineProperties(Vt.prototype,{dispatch:{value:Vt.prototype.emit},run:{value:Vt.prototype.emit}});/*!
 * @pixi/core - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */k.PREFER_ENV=xe.any?Se.WEBGL:Se.WEBGL2;k.STRICT_TEXTURE_CACHE=!1;var hi=[];function Yo(e,r){if(!e)return null;var t="";if(typeof e=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(e);n&&(t=n[1].toLowerCase())}for(var i=hi.length-1;i>=0;--i){var o=hi[i];if(o.test&&o.test(e,t))return new o(e,r)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ko=function(e,r){return Ko=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ko(e,r)};function mt(e,r){Ko(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Zo=function(){return Zo=Object.assign||function(r){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Zo.apply(this,arguments)};function v0(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&(t[n[i]]=e[n[i]]);return t}var Lr=function(){function e(r,t){r===void 0&&(r=0),t===void 0&&(t=0),this._width=r,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Vt("setRealSize"),this.onUpdate=new Vt("update"),this.onError=new Vt("onError")}return e.prototype.bind=function(r){this.onResize.add(r),this.onUpdate.add(r),this.onError.add(r),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},e.prototype.unbind=function(r){this.onResize.remove(r),this.onUpdate.remove(r),this.onError.remove(r)},e.prototype.resize=function(r,t){(r!==this._width||t!==this._height)&&(this._width=r,this._height=t,this.onResize.emit(r,t))},Object.defineProperty(e.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),e.prototype.update=function(){this.destroyed||this.onUpdate.emit()},e.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),e.prototype.style=function(r,t,n){return!1},e.prototype.dispose=function(){},e.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},e.test=function(r,t){return!1},e}(),_n=function(e){mt(r,e);function r(t,n){var i=this,o=n||{},s=o.width,a=o.height;if(!s||!a)throw new Error("BufferResource width or height invalid");return i=e.call(this,s,a)||this,i.data=t,i}return r.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Ee.UNPACK);var s=n.realWidth,a=n.realHeight;return i.width===s&&i.height===a?o.texSubImage2D(n.target,0,0,0,s,a,n.format,i.type,this.data):(i.width=s,i.height=a,o.texImage2D(n.target,0,i.internalFormat,s,a,0,n.format,i.type,this.data)),!0},r.prototype.dispose=function(){this.data=null},r.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},r}(Lr),_0={scaleMode:re.NEAREST,format:G.RGBA,alphaMode:Ee.NPM},ut=function(e){mt(r,e);function r(t,n){t===void 0&&(t=null),n===void 0&&(n=null);var i=e.call(this)||this;n=n||{};var o=n.alphaMode,s=n.mipmap,a=n.anisotropicLevel,u=n.scaleMode,l=n.width,h=n.height,f=n.wrapMode,c=n.format,d=n.type,p=n.target,v=n.resolution,_=n.resourceOptions;return t&&!(t instanceof Lr)&&(t=Yo(t,_),t.internal=!0),i.resolution=v||k.RESOLUTION,i.width=Math.round((l||0)*i.resolution)/i.resolution,i.height=Math.round((h||0)*i.resolution)/i.resolution,i._mipmap=s!==void 0?s:k.MIPMAP_TEXTURES,i.anisotropicLevel=a!==void 0?a:k.ANISOTROPIC_LEVEL,i._wrapMode=f||k.WRAP_MODE,i._scaleMode=u!==void 0?u:k.SCALE_MODE,i.format=c||G.RGBA,i.type=d||q.UNSIGNED_BYTE,i.target=p||ir.TEXTURE_2D,i.alphaMode=o!==void 0?o:Ee.UNPACK,i.uid=or(),i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=l>0&&h>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,i.setResource(t),i}return Object.defineProperty(r.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),r.prototype.setStyle=function(t,n){var i;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,i=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,i=!0),i&&this.dirtyStyleId++,this},r.prototype.setSize=function(t,n,i){return i=i||this.resolution,this.setRealSize(t*i,n*i,i)},r.prototype.setRealSize=function(t,n,i){return this.resolution=i||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},r.prototype._refreshPOT=function(){this.isPowerOfTwo=pl(this.realWidth)&&pl(this.realHeight)},r.prototype.setResolution=function(t){var n=this.resolution;return n===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*n)/t,this.height=Math.round(this.height*n)/t,this.emit("update",this)),this._refreshPOT(),this)},r.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},r.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},r.prototype.onError=function(t){this.emit("error",this,t)},r.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete ar[this.cacheId],delete Fe[this.cacheId],this.cacheId=null),this.dispose(),r.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},r.prototype.dispose=function(){this.emit("dispose",this)},r.prototype.castToBaseTexture=function(){return this},r.from=function(t,n,i){i===void 0&&(i=k.STRICT_TEXTURE_CACHE);var o=typeof t=="string",s=null;if(o)s=t;else{if(!t._pixiId){var a=n&&n.pixiIdPrefix||"pixiid";t._pixiId=a+"_"+or()}s=t._pixiId}var u=ar[s];if(o&&i&&!u)throw new Error('The cacheId "'+s+'" does not exist in BaseTextureCache.');return u||(u=new r(t,n),u.cacheId=s,r.addToCache(u,s)),u},r.fromBuffer=function(t,n,i,o){t=t||new Float32Array(n*i*4);var s=new _n(t,{width:n,height:i}),a=t instanceof Float32Array?q.FLOAT:q.UNSIGNED_BYTE;return new r(s,Object.assign(_0,o||{width:n,height:i,type:a}))},r.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),ar[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),ar[n]=t)},r.removeFromCache=function(t){if(typeof t=="string"){var n=ar[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete ar[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete ar[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},r._globalBatch=0,r}(be),Jo=function(e){mt(r,e);function r(t,n){var i=this,o=n||{},s=o.width,a=o.height;i=e.call(this,s,a)||this,i.items=[],i.itemDirtyIds=[];for(var u=0;u<t;u++){var l=new ut;i.items.push(l),i.itemDirtyIds.push(-2)}return i.length=t,i._load=null,i.baseTexture=null,i}return r.prototype.initFromArray=function(t,n){for(var i=0;i<this.length;i++)!t[i]||(t[i].castToBaseTexture?this.addBaseTextureAt(t[i].castToBaseTexture(),i):t[i]instanceof Lr?this.addResourceAt(t[i],i):this.addResourceAt(Yo(t[i],n),i))},r.prototype.dispose=function(){for(var t=0,n=this.length;t<n;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},r.prototype.addResourceAt=function(t,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[n].setResource(t),this},r.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");e.prototype.bind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=t,this.items[n].on("update",t.update,t)},r.prototype.unbind=function(t){e.prototype.unbind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",t.update,t)},r.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.items.map(function(o){return o.resource}).filter(function(o){return o}),i=n.map(function(o){return o.load()});return this._load=Promise.all(i).then(function(){var o=t.items[0],s=o.realWidth,a=o.realHeight;return t.resize(s,a),Promise.resolve(t)}),this._load},r}(Lr),Hl=function(e){mt(r,e);function r(t,n){var i=this,o=n||{},s=o.width,a=o.height,u,l;return Array.isArray(t)?(u=t,l=t.length):l=t,i=e.call(this,l,{width:s,height:a})||this,u&&i.initFromArray(u,n),i}return r.prototype.addBaseTextureAt=function(t,n){if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},r.prototype.bind=function(t){e.prototype.bind.call(this,t),t.target=ir.TEXTURE_2D_ARRAY},r.prototype.upload=function(t,n,i){var o=this,s=o.length,a=o.itemDirtyIds,u=o.items,l=t.gl;i.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,i.internalFormat,this._width,this._height,s,0,n.format,i.type,null);for(var h=0;h<s;h++){var f=u[h];a[h]<f.dirtyId&&(a[h]=f.dirtyId,f.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,h,f.resource.width,f.resource.height,1,n.format,i.type,f.resource.source))}return!0},r}(Jo),Le=function(e){mt(r,e);function r(t){var n=this,i=t,o=i.naturalWidth||i.videoWidth||i.width,s=i.naturalHeight||i.videoHeight||i.height;return n=e.call(this,o,s)||this,n.source=t,n.noSubImage=!1,n}return r.crossOrigin=function(t,n,i){i===void 0&&n.indexOf("data:")!==0?t.crossOrigin=qm(n):i!==!1&&(t.crossOrigin=typeof i=="string"?i:"anonymous")},r.prototype.upload=function(t,n,i,o){var s=t.gl,a=n.realWidth,u=n.realHeight;return o=o||this.source,s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Ee.UNPACK),!this.noSubImage&&n.target===s.TEXTURE_2D&&i.width===a&&i.height===u?s.texSubImage2D(s.TEXTURE_2D,0,0,0,n.format,i.type,o):(i.width=a,i.height=u,s.texImage2D(n.target,0,i.internalFormat,n.format,i.type,o)),!0},r.prototype.update=function(){if(!this.destroyed){var t=this.source,n=t.naturalWidth||t.videoWidth||t.width,i=t.naturalHeight||t.videoHeight||t.height;this.resize(n,i),e.prototype.update.call(this)}},r.prototype.dispose=function(){this.source=null},r}(Lr),Qo=function(e){mt(r,e);function r(t){return e.call(this,t)||this}return r.test=function(t){var n=self.OffscreenCanvas;return n&&t instanceof n?!0:self.HTMLCanvasElement&&t instanceof HTMLCanvasElement},r}(Le),zl=function(e){mt(r,e);function r(t,n){var i=this,o=n||{},s=o.width,a=o.height,u=o.autoLoad,l=o.linkBaseTexture;if(t&&t.length!==r.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");i=e.call(this,6,{width:s,height:a})||this;for(var h=0;h<r.SIDES;h++)i.items[h].target=ir.TEXTURE_CUBE_MAP_POSITIVE_X+h;return i.linkBaseTexture=l!==!1,t&&i.initFromArray(t,n),u!==!1&&i.load(),i}return r.prototype.bind=function(t){e.prototype.bind.call(this,t),t.target=ir.TEXTURE_CUBE_MAP},r.prototype.addBaseTextureAt=function(t,n,i){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=ir.TEXTURE_CUBE_MAP_POSITIVE_X+n,t.parentTextureArray=this.baseTexture,this.items[n]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[n]=t,this},r.prototype.upload=function(t,n,i){for(var o=this.itemDirtyIds,s=0;s<r.SIDES;s++){var a=this.items[s];o[s]<a.dirtyId&&(a.valid&&a.resource?(a.resource.upload(t,a,i),o[s]=a.dirtyId):o[s]<-1&&(t.gl.texImage2D(a.target,0,i.internalFormat,n.realWidth,n.realHeight,0,n.format,i.type,null),o[s]=-1))}return!0},r.test=function(t){return Array.isArray(t)&&t.length===r.SIDES},r.SIDES=6,r}(Jo),ts=function(e){mt(r,e);function r(t,n){var i=this;if(n=n||{},!(t instanceof HTMLImageElement)){var o=new Image;Le.crossOrigin(o,t,n.crossorigin),o.src=t,t=o}return i=e.call(this,t)||this,!t.complete&&!!i._width&&!!i._height&&(i._width=0,i._height=0),i.url=t.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(n.createBitmap!==void 0?n.createBitmap:k.CREATE_IMAGE_BITMAP)&&!!self.createImageBitmap,i.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,i.bitmap=null,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(t){var n=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(i,o){var s=n.source;n.url=s.src;var a=function(){n.destroyed||(s.onload=null,s.onerror=null,n.resize(s.width,s.height),n._load=null,n.createBitmap?i(n.process()):i(n))};s.complete&&s.src?a():(s.onload=a,s.onerror=function(u){o(u),n.onError.emit(u)})}),this._load)},r.prototype.process=function(){var t=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!self.createImageBitmap)return Promise.resolve(this);var i=self.createImageBitmap,o=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:o?"cors":"no-cors"}).then(function(s){return s.blob()}).then(function(s){return i(s,0,0,n.width,n.height,{premultiplyAlpha:t.alphaMode===Ee.UNPACK?"premultiply":"none"})}).then(function(s){return t.destroyed?Promise.reject():(t.bitmap=s,t.update(),t._process=null,Promise.resolve(t))}),this._process},r.prototype.upload=function(t,n,i){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return e.prototype.upload.call(this,t,n,i);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(e.prototype.upload.call(this,t,n,i,this.bitmap),!this.preserveBitmap){var o=!0,s=n._glTextures;for(var a in s){var u=s[a];if(u!==i&&u.dirtyId!==n.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},r.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,e.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},r.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},r}(Le),Vl=function(e){mt(r,e);function r(t,n){var i=this;return n=n||{},i=e.call(this,document.createElement("canvas"))||this,i._width=0,i._height=0,i.svg=t,i.scale=n.scale||1,i._overrideWidth=n.width,i._overrideHeight=n.height,i._resolve=null,i._crossorigin=n.crossorigin,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(n){if(t._resolve=function(){t.resize(t.source.width,t.source.height),n(t)},r.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},r.prototype._loadSvg=function(){var t=this,n=new Image;Le.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(i){!t._resolve||(n.onerror=null,t.onError.emit(i))},n.onload=function(){if(!!t._resolve){var i=n.width,o=n.height;if(!i||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var s=i*t.scale,a=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(s=t._overrideWidth||t._overrideHeight/o*i,a=t._overrideHeight||t._overrideWidth/i*o),s=Math.round(s),a=Math.round(a);var u=t.source;u.width=s,u.height=a,u._pixiId="canvas_"+or(),u.getContext("2d").drawImage(n,0,0,i,o,0,0,s,a),t._resolve(),t._resolve=null}}},r.getSize=function(t){var n=r.SVG_SIZE.exec(t),i={};return n&&(i[n[1]]=Math.round(parseFloat(n[3])),i[n[5]]=Math.round(parseFloat(n[7]))),i},r.prototype.dispose=function(){e.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},r.test=function(t,n){return n==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&r.SVG_XML.test(t)},r.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,r}(Le),$l=function(e){mt(r,e);function r(t,n){var i=this;if(n=n||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var s=t[0].src||t[0];Le.crossOrigin(o,s,n.crossorigin);for(var a=0;a<t.length;++a){var u=document.createElement("source"),l=t[a],h=l.src,f=l.mime;h=h||t[a];var c=h.split("?").shift().toLowerCase(),d=c.substr(c.lastIndexOf(".")+1);f=f||r.MIME_TYPES[d]||"video/"+d,u.src=h,u.type=f,o.appendChild(u)}t=o}return i=e.call(this,t)||this,i.noSubImage=!0,i._autoUpdate=!0,i._isConnectedToTicker=!1,i._updateFPS=n.updateFPS||0,i._msToNextUpdate=0,i.autoPlay=n.autoPlay!==!1,i._load=null,i._resolve=null,i._onCanPlay=i._onCanPlay.bind(i),i._onError=i._onError.bind(i),n.autoLoad!==!1&&i.load(),i}return r.prototype.update=function(t){if(!this.destroyed){var n=Rt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(e.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},r.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(i){t.valid?i(t):(t._resolve=i,n.load())}),this._load},r.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},r.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},r.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},r.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Rt.shared.add(this.update,this),this._isConnectedToTicker=!0)},r.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Rt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},r.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(t.videoWidth,t.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},r.prototype.dispose=function(){this._isConnectedToTicker&&(Rt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),e.prototype.dispose.call(this)},Object.defineProperty(r.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Rt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Rt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),r.test=function(t,n){return self.HTMLVideoElement&&t instanceof HTMLVideoElement||r.TYPES.indexOf(n)>-1},r.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],r.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},r}(Le),Wl=function(e){mt(r,e);function r(t){return e.call(this,t)||this}return r.test=function(t){return!!self.createImageBitmap&&t instanceof ImageBitmap},r}(Le);hi.push(ts,Wl,Qo,$l,Vl,_n,zl,Hl);var ql={__proto__:null,Resource:Lr,BaseImageResource:Le,INSTALLED:hi,autoDetectResource:Yo,AbstractMultiResource:Jo,ArrayResource:Hl,BufferResource:_n,CanvasResource:Qo,CubeResource:zl,ImageResource:ts,SVGResource:Vl,VideoResource:$l,ImageBitmapResource:Wl},m0=function(e){mt(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Ee.UNPACK);var s=n.realWidth,a=n.realHeight;return i.width===s&&i.height===a?o.texSubImage2D(n.target,0,0,0,s,a,n.format,i.type,this.data):(i.width=s,i.height=a,o.texImage2D(n.target,0,i.internalFormat,s,a,0,n.format,i.type,this.data)),!0},r}(_n),es=function(){function e(r,t){this.width=Math.round(r||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Vt("disposeFramebuffer"),this.multisample=Ut.NONE}return Object.defineProperty(e.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),e.prototype.addColorTexture=function(r,t){return r===void 0&&(r=0),this.colorTextures[r]=t||new ut(null,{scaleMode:re.NEAREST,resolution:1,mipmap:we.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},e.prototype.addDepthTexture=function(r){return this.depthTexture=r||new ut(new m0(null,{width:this.width,height:this.height}),{scaleMode:re.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:we.OFF,format:G.DEPTH_COMPONENT,type:q.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},e.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},e.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},e.prototype.resize=function(r,t){if(r=Math.round(r),t=Math.round(t),!(r===this.width&&t===this.height)){this.width=r,this.height=t,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var i=this.colorTextures[n],o=i.resolution;i.setSize(r/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(r/o,t/o)}}},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},e}(),Yl=function(e){mt(r,e);function r(t){var n=this;if(typeof t=="number"){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];t={width:i,height:o,scaleMode:s,resolution:a}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:Ut.NONE,n=e.call(this,null,t)||this,n.mipmap=we.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new es(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=t.multisample,n.maskStack=[],n.filterStack=[{}],n}return r.prototype.resize=function(t,n){this.framebuffer.resize(t*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},r.prototype.dispose=function(){this.framebuffer.dispose(),e.prototype.dispose.call(this)},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},r}(ut),Kl=function(){function e(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return e.prototype.set=function(r,t,n){var i=t.width,o=t.height;if(n){var s=r.width/2/i,a=r.height/2/o,u=r.x/i+s,l=r.y/o+a;n=wt.add(n,wt.NW),this.x0=u+s*wt.uX(n),this.y0=l+a*wt.uY(n),n=wt.add(n,2),this.x1=u+s*wt.uX(n),this.y1=l+a*wt.uY(n),n=wt.add(n,2),this.x2=u+s*wt.uX(n),this.y2=l+a*wt.uY(n),n=wt.add(n,2),this.x3=u+s*wt.uX(n),this.y3=l+a*wt.uY(n)}else this.x0=r.x/i,this.y0=r.y/o,this.x1=(r.x+r.width)/i,this.y1=r.y/o,this.x2=(r.x+r.width)/i,this.y2=(r.y+r.height)/o,this.x3=r.x/i,this.y3=(r.y+r.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},e.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},e}(),Zl=new Kl,W=function(e){mt(r,e);function r(t,n,i,o,s,a){var u=e.call(this)||this;if(u.noFrame=!1,n||(u.noFrame=!0,n=new it(0,0,1,1)),t instanceof r&&(t=t.baseTexture),u.baseTexture=t,u._frame=n,u.trim=o,u.valid=!1,u._uvs=Zl,u.uvMatrix=null,u.orig=i||n,u._rotate=Number(s||0),s===!0)u._rotate=2;else if(u._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=a?new at(a.x,a.y):new at(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=n:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return r.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},r.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},r.prototype.destroy=function(t){if(this.baseTexture){if(t){var n=this.baseTexture.resource;n&&n.url&&Fe[n.url]&&r.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,r.removeFromCache(this),this.textureCacheIds=null},r.prototype.clone=function(){var t=this._frame.clone(),n=this._frame===this.orig?t:this.orig.clone(),i=new r(this.baseTexture,!this.noFrame&&t,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=t),i},r.prototype.updateUvs=function(){this._uvs===Zl&&(this._uvs=new Kl),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},r.from=function(t,n,i){n===void 0&&(n={}),i===void 0&&(i=k.STRICT_TEXTURE_CACHE);var o=typeof t=="string",s=null;if(o)s=t;else if(t instanceof ut){if(!t.cacheId){var a=n&&n.pixiIdPrefix||"pixiid";t.cacheId=a+"-"+or(),ut.addToCache(t,t.cacheId)}s=t.cacheId}else{if(!t._pixiId){var a=n&&n.pixiIdPrefix||"pixiid";t._pixiId=a+"_"+or()}s=t._pixiId}var u=Fe[s];if(o&&i&&!u)throw new Error('The cacheId "'+s+'" does not exist in TextureCache.');return!u&&!(t instanceof ut)?(n.resolution||(n.resolution=ni(t)),u=new r(new ut(t,n)),u.baseTexture.cacheId=s,ut.addToCache(u.baseTexture,s),r.addToCache(u,s)):!u&&t instanceof ut&&(u=new r(t),r.addToCache(u,s)),u},r.fromURL=function(t,n){var i=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),o=r.from(t,Object.assign({resourceOptions:i},n),!1),s=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):s.load().then(function(){return Promise.resolve(o)})},r.fromBuffer=function(t,n,i,o){return new r(ut.fromBuffer(t,n,i,o))},r.fromLoader=function(t,n,i,o){var s=new ut(t,Object.assign({scaleMode:k.SCALE_MODE,resolution:ni(n)},o)),a=s.resource;a instanceof ts&&(a.url=n);var u=new r(s);return i||(i=n),ut.addToCache(u.baseTexture,i),r.addToCache(u,i),i!==n&&(ut.addToCache(u.baseTexture,n),r.addToCache(u,n)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(l){u.baseTexture.once("loaded",function(){return l(u)})})},r.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),Fe[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),Fe[n]=t)},r.removeFromCache=function(t){if(typeof t=="string"){var n=Fe[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete Fe[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)Fe[t.textureCacheIds[o]]===t&&delete Fe[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(r.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var n=t.x,i=t.y,o=t.width,s=t.height,a=n+o>this.baseTexture.width,u=i+s>this.baseTexture.height;if(a||u){var l=a&&u?"and":"or",h="X: "+n+" + "+o+" = "+(n+o)+" > "+this.baseTexture.width,f="Y: "+i+" + "+s+" = "+(i+s)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(h+" "+l+" "+f))}this.valid=o&&s&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),r.prototype.castToBaseTexture=function(){return this.baseTexture},r}(be);function g0(){var e=document.createElement("canvas");e.width=16,e.height=16;var r=e.getContext("2d");return r.fillStyle="white",r.fillRect(0,0,16,16),new W(new ut(new Qo(e)))}function fi(e){e.destroy=function(){},e.on=function(){},e.once=function(){},e.emit=function(){}}W.EMPTY=new W(new ut);fi(W.EMPTY);fi(W.EMPTY.baseTexture);W.WHITE=g0();fi(W.WHITE);fi(W.WHITE.baseTexture);var pr=function(e){mt(r,e);function r(t,n){var i=e.call(this,t,n)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return Object.defineProperty(r.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),r.prototype.resize=function(t,n,i){i===void 0&&(i=!0);var o=this.baseTexture.resolution,s=Math.round(t*o)/o,a=Math.round(n*o)/o;this.valid=s>0&&a>0,this._frame.width=this.orig.width=s,this._frame.height=this.orig.height=a,i&&this.baseTexture.resize(s,a),this.updateUvs()},r.prototype.setResolution=function(t){var n=this.baseTexture;n.resolution!==t&&(n.setResolution(t),this.resize(n.width,n.height,!1))},r.create=function(t){for(var n=arguments,i=[],o=1;o<arguments.length;o++)i[o-1]=n[o];return typeof t=="number"&&(sr("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:i[0],scaleMode:i[1],resolution:i[2]}),new r(new Yl(t))},r}(W),y0=function(){function e(r){this.texturePool={},this.textureOptions=r||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return e.prototype.createTexture=function(r,t,n){n===void 0&&(n=Ut.NONE);var i=new Yl(Object.assign({width:r,height:t,resolution:1,multisample:n},this.textureOptions));return new pr(i)},e.prototype.getOptimalTexture=function(r,t,n,i){n===void 0&&(n=1),i===void 0&&(i=Ut.NONE);var o;r=Math.ceil(r*n),t=Math.ceil(t*n),!this.enableFullScreen||r!==this._pixelsWidth||t!==this._pixelsHeight?(r=ei(r),t=ei(t),o=((r&65535)<<16|t&65535)>>>0,i>1&&(o+=i*4294967296)):o=i>1?-i:-1,this.texturePool[o]||(this.texturePool[o]=[]);var s=this.texturePool[o].pop();return s||(s=this.createTexture(r,t,i)),s.filterPoolKey=o,s.setResolution(n),s},e.prototype.getFilterTexture=function(r,t,n){var i=this.getOptimalTexture(r.width,r.height,t||r.resolution,n||Ut.NONE);return i.filterFrame=r.filterFrame,i},e.prototype.returnTexture=function(r){var t=r.filterPoolKey;r.filterFrame=null,this.texturePool[t].push(r)},e.prototype.returnFilterTexture=function(r){this.returnTexture(r)},e.prototype.clear=function(r){if(r=r!==!1,r)for(var t in this.texturePool){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}},e.prototype.setScreenSize=function(r){if(!(r.width===this._pixelsWidth&&r.height===this._pixelsHeight)){this.enableFullScreen=r.width>0&&r.height>0;for(var t in this.texturePool)if(Number(t)<0){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=r.width,this._pixelsHeight=r.height}},e.SCREEN_KEY=-1,e}(),Jl=function(){function e(r,t,n,i,o,s,a){t===void 0&&(t=0),n===void 0&&(n=!1),i===void 0&&(i=q.FLOAT),this.buffer=r,this.size=t,this.normalized=n,this.type=i,this.stride=o,this.start=s,this.instance=a}return e.prototype.destroy=function(){this.buffer=null},e.from=function(r,t,n,i,o){return new e(r,t,n,i,o)},e}(),x0=0,Bt=function(){function e(r,t,n){t===void 0&&(t=!0),n===void 0&&(n=!1),this.data=r||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=t,this.id=x0++,this.disposeRunner=new Vt("disposeBuffer")}return e.prototype.update=function(r){r instanceof Array&&(r=new Float32Array(r)),this.data=r||this.data,this._updateID++},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(e.prototype,"index",{get:function(){return this.type===Pe.ELEMENT_ARRAY_BUFFER},set:function(r){this.type=r?Pe.ELEMENT_ARRAY_BUFFER:Pe.ARRAY_BUFFER},enumerable:!1,configurable:!0}),e.from=function(r){return r instanceof Array&&(r=new Float32Array(r)),new e(r)},e}(),b0={Float32Array,Uint32Array,Int32Array,Uint8Array};function T0(e,r){for(var t=0,n=0,i={},o=0;o<e.length;o++)n+=r[o],t+=e[o].length;for(var s=new ArrayBuffer(t*4),a=null,u=0,o=0;o<e.length;o++){var l=r[o],h=e[o],f=dl(h);i[f]||(i[f]=new b0[f](s)),a=i[f];for(var c=0;c<h.length;c++){var d=(c/l|0)*n+u,p=c%l;a[d+p]=h[c]}u+=l}return new Float32Array(s)}var Ql={5126:4,5123:2,5121:1},w0=0,E0={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},mn=function(){function e(r,t){r===void 0&&(r=[]),t===void 0&&(t={}),this.buffers=r,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=w0++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Vt("disposeGeometry"),this.refCount=0}return e.prototype.addAttribute=function(r,t,n,i,o,s,a,u){if(n===void 0&&(n=0),i===void 0&&(i=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof Bt||(t instanceof Array&&(t=new Float32Array(t)),t=new Bt(t));var l=r.split("|");if(l.length>1){for(var h=0;h<l.length;h++)this.addAttribute(l[h],t,n,i,o);return this}var f=this.buffers.indexOf(t);return f===-1&&(this.buffers.push(t),f=this.buffers.length-1),this.attributes[r]=new Jl(f,n,i,o,s,a,u),this.instanced=this.instanced||u,this},e.prototype.getAttribute=function(r){return this.attributes[r]},e.prototype.getBuffer=function(r){return this.buffers[this.getAttribute(r).buffer]},e.prototype.addIndex=function(r){return r instanceof Bt||(r instanceof Array&&(r=new Uint16Array(r)),r=new Bt(r)),r.type=Pe.ELEMENT_ARRAY_BUFFER,this.indexBuffer=r,this.buffers.indexOf(r)===-1&&this.buffers.push(r),this},e.prototype.getIndex=function(){return this.indexBuffer},e.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var r=[],t=[],n=new Bt,i;for(i in this.attributes){var o=this.attributes[i],s=this.buffers[o.buffer];r.push(s.data),t.push(o.size*Ql[o.type]/4),o.buffer=0}for(n.data=T0(r,t),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},e.prototype.getSize=function(){for(var r in this.attributes){var t=this.attributes[r],n=this.buffers[t.buffer];return n.data.length/(t.stride/4||t.size)}return 0},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},e.prototype.clone=function(){for(var r=new e,t=0;t<this.buffers.length;t++)r.buffers[t]=new Bt(this.buffers[t].data.slice(0));for(var t in this.attributes){var n=this.attributes[t];r.attributes[t]=new Jl(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(r.indexBuffer=r.buffers[this.buffers.indexOf(this.indexBuffer)],r.indexBuffer.type=Pe.ELEMENT_ARRAY_BUFFER),r},e.merge=function(r){for(var t=new e,n=[],i=[],o=[],s,a=0;a<r.length;a++){s=r[a];for(var u=0;u<s.buffers.length;u++)i[u]=i[u]||0,i[u]+=s.buffers[u].data.length,o[u]=0}for(var a=0;a<s.buffers.length;a++)n[a]=new E0[dl(s.buffers[a].data)](i[a]),t.buffers[a]=new Bt(n[a]);for(var a=0;a<r.length;a++){s=r[a];for(var u=0;u<s.buffers.length;u++)n[u].set(s.buffers[u].data,o[u]),o[u]+=s.buffers[u].data.length}if(t.attributes=s.attributes,s.indexBuffer){t.indexBuffer=t.buffers[s.buffers.indexOf(s.indexBuffer)],t.indexBuffer.type=Pe.ELEMENT_ARRAY_BUFFER;for(var l=0,h=0,f=0,c=0,a=0;a<s.buffers.length;a++)if(s.buffers[a]!==s.indexBuffer){c=a;break}for(var a in s.attributes){var d=s.attributes[a];(d.buffer|0)===c&&(h+=d.size*Ql[d.type]/4)}for(var a=0;a<r.length;a++){for(var p=r[a].indexBuffer.data,u=0;u<p.length;u++)t.indexBuffer.data[u+f]+=l;l+=r[a].buffers[c].data.length/h,f+=p.length}}return t},e}(),C0=function(e){mt(r,e);function r(){var t=e.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return r}(mn),th=function(e){mt(r,e);function r(){var t=e.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new Bt(t.vertices),t.uvBuffer=new Bt(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return r.prototype.map=function(t,n){var i=0,o=0;return this.uvs[0]=i,this.uvs[1]=o,this.uvs[2]=i+n.width/t.width,this.uvs[3]=o,this.uvs[4]=i+n.width/t.width,this.uvs[5]=o+n.height/t.height,this.uvs[6]=i,this.uvs[7]=o+n.height/t.height,i=n.x,o=n.y,this.vertices[0]=i,this.vertices[1]=o,this.vertices[2]=i+n.width,this.vertices[3]=o,this.vertices[4]=i+n.width,this.vertices[5]=o+n.height,this.vertices[6]=i,this.vertices[7]=o+n.height,this.invalidate(),this},r.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},r}(mn),P0=0,vr=function(){function e(r,t,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=P0++,this.static=!!t,this.ubo=!!n,r instanceof Bt?(this.buffer=r,this.buffer.type=Pe.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=r,this.ubo&&(this.buffer=new Bt(new Float32Array(1)),this.buffer.type=Pe.UNIFORM_BUFFER,this.autoManage=!0))}return e.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},e.prototype.add=function(r,t,n){if(!this.ubo)this.uniforms[r]=new e(t,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},e.from=function(r,t,n){return new e(r,t,n)},e.uboFrom=function(r,t){return new e(r,t!=null?t:!0,!0)},e}(),I0=function(){function e(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=Ut.NONE,this.sourceFrame=new it,this.destinationFrame=new it,this.bindingSourceFrame=new it,this.bindingDestinationFrame=new it,this.filters=[],this.transform=null}return e.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},e}(),ci=[new at,new at,new at,new at],rs=new Nt,eh=function(){function e(r){this.renderer=r,this.defaultFilterStack=[{}],this.texturePool=new y0,this.texturePool.setScreenSize(r.view),this.statePool=[],this.quad=new C0,this.quadUv=new th,this.tempRect=new it,this.activeState={},this.globalUniforms=new vr({outputFrame:new it,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return e.prototype.push=function(r,t){for(var n,i,o=this.renderer,s=this.defaultFilterStack,a=this.statePool.pop()||new I0,u=this.renderer.renderTexture,l=t[0].resolution,h=t[0].multisample,f=t[0].padding,c=t[0].autoFit,d=(n=t[0].legacy)!==null&&n!==void 0?n:!0,p=1;p<t.length;p++){var v=t[p];l=Math.min(l,v.resolution),h=Math.min(h,v.multisample),f=this.useMaxPadding?Math.max(f,v.padding):f+v.padding,c=c&&v.autoFit,d=d||((i=v.legacy)!==null&&i!==void 0?i:!0)}if(s.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),s.push(a),a.resolution=l,a.multisample=h,a.legacy=d,a.target=r,a.sourceFrame.copyFrom(r.filterArea||r.getBounds(!0)),a.sourceFrame.pad(f),c){var _=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(rs.copyFrom(o.projection.transform).invert(),_),a.sourceFrame.fit(_)}this.roundFrame(a.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),a.renderTexture=this.getOptimalFilterTexture(a.sourceFrame.width,a.sourceFrame.height,l,h),a.filters=t,a.destinationFrame.width=a.renderTexture.width,a.destinationFrame.height=a.renderTexture.height;var g=this.tempRect;g.x=0,g.y=0,g.width=a.sourceFrame.width,g.height=a.sourceFrame.height,a.renderTexture.filterFrame=a.sourceFrame,a.bindingSourceFrame.copyFrom(u.sourceFrame),a.bindingDestinationFrame.copyFrom(u.destinationFrame),a.transform=o.projection.transform,o.projection.transform=null,u.bind(a.renderTexture,a.sourceFrame,g),o.framebuffer.clear(0,0,0,0)},e.prototype.pop=function(){var r=this.defaultFilterStack,t=r.pop(),n=t.filters;this.activeState=t;var i=this.globalUniforms.uniforms;i.outputFrame=t.sourceFrame,i.resolution=t.resolution;var o=i.inputSize,s=i.inputPixel,a=i.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],s[0]=Math.round(o[0]*t.resolution),s[1]=Math.round(o[1]*t.resolution),s[2]=1/s[0],s[3]=1/s[1],a[0]=.5*s[2],a[1]=.5*s[3],a[2]=t.sourceFrame.width*o[2]-.5*s[2],a[3]=t.sourceFrame.height*o[3]-.5*s[3],t.legacy){var u=i.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var l=r[r.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,t.renderTexture,l.renderTexture,Xe.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var h=t.renderTexture,f=this.getOptimalFilterTexture(h.width,h.height,t.resolution);f.filterFrame=h.filterFrame;var c=0;for(c=0;c<n.length-1;++c){c===1&&t.multisample>1&&(f=this.getOptimalFilterTexture(h.width,h.height,t.resolution),f.filterFrame=h.filterFrame),n[c].apply(this,h,f,Xe.CLEAR,t);var d=h;h=f,f=d}n[c].apply(this,h,l.renderTexture,Xe.BLEND,t),c>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(f)}t.clear(),this.statePool.push(t)},e.prototype.bindAndClear=function(r,t){t===void 0&&(t=Xe.CLEAR);var n=this.renderer,i=n.renderTexture,o=n.state;if(r===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,r&&r.filterFrame){var s=this.tempRect;s.x=0,s.y=0,s.width=r.filterFrame.width,s.height=r.filterFrame.height,i.bind(r,r.filterFrame,s)}else r!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(r):this.renderer.renderTexture.bind(r,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var a=o.stateId&1||this.forceClear;(t===Xe.CLEAR||t===Xe.BLIT&&a)&&this.renderer.framebuffer.clear(0,0,0,0)},e.prototype.applyFilter=function(r,t,n,i){var o=this.renderer;o.state.set(r.state),this.bindAndClear(n,i),r.uniforms.uSampler=t,r.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(r),r.legacy=!!r.program.attributeData.aTextureCoord,r.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(ae.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(ae.TRIANGLE_STRIP))},e.prototype.calculateSpriteMatrix=function(r,t){var n=this.activeState,i=n.sourceFrame,o=n.destinationFrame,s=t._texture.orig,a=r.set(o.width,0,0,o.height,i.x,i.y),u=t.worldTransform.copyTo(Nt.TEMP_MATRIX);return u.invert(),a.prepend(u),a.scale(1/s.width,1/s.height),a.translate(t.anchor.x,t.anchor.y),a},e.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},e.prototype.getOptimalFilterTexture=function(r,t,n,i){return n===void 0&&(n=1),i===void 0&&(i=Ut.NONE),this.texturePool.getOptimalTexture(r,t,n,i)},e.prototype.getFilterTexture=function(r,t,n){if(typeof r=="number"){var i=r;r=t,t=i}r=r||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(r.width,r.height,t||r.resolution,n||Ut.NONE);return o.filterFrame=r.filterFrame,o},e.prototype.returnFilterTexture=function(r){this.texturePool.returnTexture(r)},e.prototype.emptyPool=function(){this.texturePool.clear(!0)},e.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},e.prototype.transformAABB=function(r,t){var n=ci[0],i=ci[1],o=ci[2],s=ci[3];n.set(t.left,t.top),i.set(t.left,t.bottom),o.set(t.right,t.top),s.set(t.right,t.bottom),r.apply(n,n),r.apply(i,i),r.apply(o,o),r.apply(s,s);var a=Math.min(n.x,i.x,o.x,s.x),u=Math.min(n.y,i.y,o.y,s.y),l=Math.max(n.x,i.x,o.x,s.x),h=Math.max(n.y,i.y,o.y,s.y);t.x=a,t.y=u,t.width=l-a,t.height=h-u},e.prototype.roundFrame=function(r,t,n,i,o){if(!(r.width<=0||r.height<=0||n.width<=0||n.height<=0)){if(o){var s=o.a,a=o.b,u=o.c,l=o.d;if((Math.abs(a)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(s)>1e-4||Math.abs(l)>1e-4))return}o=o?rs.copyFrom(o):rs.identity(),o.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(o,r),r.ceil(t),this.transformAABB(o.invert(),r)}},e}(),di=function(){function e(r){this.renderer=r}return e.prototype.flush=function(){},e.prototype.destroy=function(){this.renderer=null},e.prototype.start=function(){},e.prototype.stop=function(){this.flush()},e.prototype.render=function(r){},e}(),rh=function(){function e(r){this.renderer=r,this.emptyRenderer=new di(r),this.currentRenderer=this.emptyRenderer}return e.prototype.setObjectRenderer=function(r){this.currentRenderer!==r&&(this.currentRenderer.stop(),this.currentRenderer=r,this.currentRenderer.start())},e.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.copyBoundTextures=function(r,t){for(var n=this.renderer.texture.boundTextures,i=t-1;i>=0;--i)r[i]=n[i]||null,r[i]&&(r[i]._batchLocation=i)},e.prototype.boundArray=function(r,t,n,i){for(var o=r.elements,s=r.ids,a=r.count,u=0,l=0;l<a;l++){var h=o[l],f=h._batchLocation;if(f>=0&&f<i&&t[f]===h){s[l]=f;continue}for(;u<i;){var c=t[u];if(c&&c._batchEnabled===n&&c._batchLocation===u){u++;continue}s[l]=u,h._batchLocation=u,t[u]=h;break}}},e.prototype.destroy=function(){this.renderer=null},e}(),nh=0,ih=function(){function e(r){this.renderer=r,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),r.view.addEventListener("webglcontextlost",this.handleContextLost,!1),r.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(e.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),e.prototype.contextChange=function(r){this.gl=r,this.renderer.gl=r,this.renderer.CONTEXT_UID=nh++,r.isContextLost()&&r.getExtension("WEBGL_lose_context")&&r.getExtension("WEBGL_lose_context").restoreContext()},e.prototype.initFromContext=function(r){this.gl=r,this.validateContext(r),this.renderer.gl=r,this.renderer.CONTEXT_UID=nh++,this.renderer.runners.contextChange.emit(r)},e.prototype.initFromOptions=function(r){var t=this.createContext(this.renderer.view,r);this.initFromContext(t)},e.prototype.createContext=function(r,t){var n;if(k.PREFER_ENV>=Se.WEBGL2&&(n=r.getContext("webgl2",t)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=r.getContext("webgl",t)||r.getContext("experimental-webgl",t),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},e.prototype.getExtensions=function(){var r=this.gl,t={anisotropicFiltering:r.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),s3tc:r.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:r.getExtension("WEBGL_compressed_texture_etc"),etc1:r.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:r.getExtension("WEBGL_compressed_texture_atc"),astc:r.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:r.getExtension("WEBGL_draw_buffers"),depthTexture:r.getExtension("WEBGL_depth_texture"),loseContext:r.getExtension("WEBGL_lose_context"),vertexArrayObject:r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:r.getExtension("OES_element_index_uint"),floatTexture:r.getExtension("OES_texture_float"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),textureHalfFloat:r.getExtension("OES_texture_half_float"),textureHalfFloatLinear:r.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:r.getExtension("EXT_color_buffer_float")})},e.prototype.handleContextLost=function(r){r.preventDefault()},e.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},e.prototype.destroy=function(){var r=this.renderer.view;this.renderer=null,r.removeEventListener("webglcontextlost",this.handleContextLost),r.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},e.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},e.prototype.validateContext=function(r){var t=r.getContextAttributes(),n="WebGL2RenderingContext"in self&&r instanceof self.WebGL2RenderingContext;n&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=n||!!r.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},e}(),R0=function(){function e(r){this.framebuffer=r,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=Ut.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return e}(),O0=new it,oh=function(){function e(r){this.renderer=r,this.managedFramebuffers=[],this.unknownFramebuffer=new es(10,10),this.msaaSamples=null}return e.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new it,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;k.PREFER_ENV===Se.WEBGL_LEGACY&&(t=null,n=null),t?r.drawBuffers=function(i){return t.drawBuffersWEBGL(i)}:(this.hasMRT=!1,r.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA8,r.SAMPLES)},e.prototype.bind=function(r,t,n){n===void 0&&(n=0);var i=this.gl;if(r){var o=r.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(r);this.current!==r&&(this.current=r,i.bindFramebuffer(i.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==n&&(r.dirtyId++,r.dirtyFormat++,o.mipLevel=n),o.dirtyId!==r.dirtyId&&(o.dirtyId=r.dirtyId,o.dirtyFormat!==r.dirtyFormat?(o.dirtyFormat=r.dirtyFormat,o.dirtySize=r.dirtySize,this.updateFramebuffer(r,n)):o.dirtySize!==r.dirtySize&&(o.dirtySize=r.dirtySize,this.resizeFramebuffer(r)));for(var s=0;s<r.colorTextures.length;s++){var a=r.colorTextures[s];this.renderer.texture.unbind(a.parentTextureArray||a)}if(r.depthTexture&&this.renderer.texture.unbind(r.depthTexture),t){var u=t.width>>n,l=t.height>>n,h=u/t.width;this.setViewport(t.x*h,t.y*h,u,l)}else{var u=r.width>>n,l=r.height>>n;this.setViewport(0,0,u,l)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},e.prototype.setViewport=function(r,t,n,i){var o=this.viewport;r=Math.round(r),t=Math.round(t),n=Math.round(n),i=Math.round(i),(o.width!==n||o.height!==i||o.x!==r||o.y!==t)&&(o.x=r,o.y=t,o.width=n,o.height=i,this.gl.viewport(r,t,n,i))},Object.defineProperty(e.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),e.prototype.clear=function(r,t,n,i,o){o===void 0&&(o=Qn.COLOR|Qn.DEPTH);var s=this.gl;s.clearColor(r,t,n,i),s.clear(o)},e.prototype.initFramebuffer=function(r){var t=this.gl,n=new R0(t.createFramebuffer());return n.multisample=this.detectSamples(r.multisample),r.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(r),r.disposeRunner.add(this),n},e.prototype.resizeFramebuffer=function(r){var t=this.gl,n=r.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,n.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.RGBA8,r.width,r.height)),n.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,n.stencil),n.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.DEPTH24_STENCIL8,r.width,r.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,r.width,r.height));var i=r.colorTextures,o=i.length;t.drawBuffers||(o=Math.min(o,1));for(var s=0;s<o;s++){var a=i[s],u=a.parentTextureArray||a;this.renderer.texture.bind(u,0)}r.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(r.depthTexture,0)},e.prototype.updateFramebuffer=function(r,t){var n=this.gl,i=r.glFramebuffers[this.CONTEXT_UID],o=r.colorTextures,s=o.length;n.drawBuffers||(s=Math.min(s,1)),i.multisample>1&&this.canMultisampleFramebuffer(r)?(i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.RGBA8,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var a=[],u=0;u<s;u++){var l=o[u],h=l.parentTextureArray||l;this.renderer.texture.bind(h,0),!(u===0&&i.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+u,l.target,h._glTextures[this.CONTEXT_UID].texture,t),a.push(n.COLOR_ATTACHMENT0+u))}if(a.length>1&&n.drawBuffers(a),r.depthTexture){var f=this.writeDepthTexture;if(f){var c=r.depthTexture;this.renderer.texture.bind(c,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,c._glTextures[this.CONTEXT_UID].texture,t)}}(r.stencil||r.depth)&&!(r.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,r.width,r.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)},e.prototype.canMultisampleFramebuffer=function(r){return this.renderer.context.webGLVersion!==1&&r.colorTextures.length<=1&&!r.depthTexture},e.prototype.detectSamples=function(r){var t=this.msaaSamples,n=Ut.NONE;if(r<=1||t===null)return n;for(var i=0;i<t.length;i++)if(t[i]<=r){n=t[i];break}return n===1&&(n=Ut.NONE),n},e.prototype.blit=function(r,t,n){var i=this,o=i.current,s=i.renderer,a=i.gl,u=i.CONTEXT_UID;if(s.context.webGLVersion===2&&!!o){var l=o.glFramebuffers[u];if(!!l){if(!r){if(!l.msaaBuffer)return;var h=o.colorTextures[0];if(!h)return;l.blitFramebuffer||(l.blitFramebuffer=new es(o.width,o.height),l.blitFramebuffer.addColorTexture(0,h)),r=l.blitFramebuffer,r.colorTextures[0]!==h&&(r.colorTextures[0]=h,r.dirtyId++,r.dirtyFormat++),(r.width!==o.width||r.height!==o.height)&&(r.width=o.width,r.height=o.height,r.dirtyId++,r.dirtySize++)}t||(t=O0,t.width=o.width,t.height=o.height),n||(n=t);var f=t.width===n.width&&t.height===n.height;this.bind(r),a.bindFramebuffer(a.READ_FRAMEBUFFER,l.framebuffer),a.blitFramebuffer(t.x,t.y,t.width,t.height,n.x,n.y,n.width,n.height,a.COLOR_BUFFER_BIT,f?a.NEAREST:a.LINEAR)}}},e.prototype.disposeFramebuffer=function(r,t){var n=r.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!!n){delete r.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(r);o>=0&&this.managedFramebuffers.splice(o,1),r.disposeRunner.remove(this),t||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},e.prototype.disposeAll=function(r){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<t.length;n++)this.disposeFramebuffer(t[n],r)},e.prototype.forceStencil=function(){var r=this.current;if(!!r){var t=r.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){r.stencil=!0;var n=r.width,i=r.height,o=this.gl,s=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,s),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,n,i):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,n,i),t.stencil=s,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,s)}}},e.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new it},e.prototype.destroy=function(){this.renderer=null},e}(),ns={5126:4,5123:2,5121:1},sh=function(){function e(r){this.renderer=r,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return e.prototype.contextChange=function(){this.disposeAll(!0);var r=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;k.PREFER_ENV===Se.WEBGL_LEGACY&&(n=null),n?(r.createVertexArray=function(){return n.createVertexArrayOES()},r.bindVertexArray=function(o){return n.bindVertexArrayOES(o)},r.deleteVertexArray=function(o){return n.deleteVertexArrayOES(o)}):(this.hasVao=!1,r.createVertexArray=function(){return null},r.bindVertexArray=function(){return null},r.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var i=r.getExtension("ANGLE_instanced_arrays");i?(r.vertexAttribDivisor=function(o,s){return i.vertexAttribDivisorANGLE(o,s)},r.drawElementsInstanced=function(o,s,a,u,l){return i.drawElementsInstancedANGLE(o,s,a,u,l)},r.drawArraysInstanced=function(o,s,a,u){return i.drawArraysInstancedANGLE(o,s,a,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},e.prototype.bind=function(r,t){t=t||this.renderer.shader.shader;var n=this.gl,i=r.glVertexArrayObjects[this.CONTEXT_UID],o=!1;i||(this.managedGeometries[r.id]=r,r.disposeRunner.add(this),r.glVertexArrayObjects[this.CONTEXT_UID]=i={},o=!0);var s=i[t.program.id]||this.initGeometryVao(r,t,o);this._activeGeometry=r,this._activeVao!==s&&(this._activeVao=s,this.hasVao?n.bindVertexArray(s):this.activateVao(r,t.program)),this.updateBuffers()},e.prototype.reset=function(){this.unbind()},e.prototype.updateBuffers=function(){for(var r=this._activeGeometry,t=this.renderer.buffer,n=0;n<r.buffers.length;n++){var i=r.buffers[n];t.update(i)}},e.prototype.checkCompatibility=function(r,t){var n=r.attributes,i=t.attributeData;for(var o in i)if(!n[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},e.prototype.getSignature=function(r,t){var n=r.attributes,i=t.attributeData,o=["g",r.id];for(var s in n)i[s]&&o.push(s,i[s].location);return o.join("-")},e.prototype.initGeometryVao=function(r,t,n){n===void 0&&(n=!0);var i=this.gl,o=this.CONTEXT_UID,s=this.renderer.buffer,a=t.program;a.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(r,a);var u=this.getSignature(r,a),l=r.glVertexArrayObjects[this.CONTEXT_UID],h=l[u];if(h)return l[a.id]=h,h;var f=r.buffers,c=r.attributes,d={},p={};for(var v in f)d[v]=0,p[v]=0;for(var v in c)!c[v].size&&a.attributeData[v]?c[v].size=a.attributeData[v].size:c[v].size||console.warn("PIXI Geometry attribute '"+v+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[c[v].buffer]+=c[v].size*ns[c[v].type];for(var v in c){var _=c[v],g=_.size;_.stride===void 0&&(d[_.buffer]===g*ns[_.type]?_.stride=0:_.stride=d[_.buffer]),_.start===void 0&&(_.start=p[_.buffer],p[_.buffer]+=g*ns[_.type])}h=i.createVertexArray(),i.bindVertexArray(h);for(var b=0;b<f.length;b++){var w=f[b];s.bind(w),n&&w._glBuffers[o].refCount++}return this.activateVao(r,a),this._activeVao=h,l[a.id]=h,l[u]=h,h},e.prototype.disposeGeometry=function(r,t){var n;if(!!this.managedGeometries[r.id]){delete this.managedGeometries[r.id];var i=r.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,s=r.buffers,a=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(r.disposeRunner.remove(this),!!i){if(a)for(var u=0;u<s.length;u++){var l=s[u]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!t&&a.dispose(s[u],t))}if(!t){for(var h in i)if(h[0]==="g"){var f=i[h];this._activeVao===f&&this.unbind(),o.deleteVertexArray(f)}}delete r.glVertexArrayObjects[this.CONTEXT_UID]}}},e.prototype.disposeAll=function(r){for(var t=Object.keys(this.managedGeometries),n=0;n<t.length;n++)this.disposeGeometry(this.managedGeometries[t[n]],r)},e.prototype.activateVao=function(r,t){var n=this.gl,i=this.CONTEXT_UID,o=this.renderer.buffer,s=r.buffers,a=r.attributes;r.indexBuffer&&o.bind(r.indexBuffer);var u=null;for(var l in a){var h=a[l],f=s[h.buffer],c=f._glBuffers[i];if(t.attributeData[l]){u!==c&&(o.bind(f),u=c);var d=t.attributeData[l].location;if(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,h.size,h.type||n.FLOAT,h.normalized,h.stride,h.start),h.instance)if(this.hasInstance)n.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},e.prototype.draw=function(r,t,n,i){var o=this.gl,s=this._activeGeometry;if(s.indexBuffer){var a=s.indexBuffer.data.BYTES_PER_ELEMENT,u=a===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;a===2||a===4&&this.canUseUInt32ElementIndex?s.instanced?o.drawElementsInstanced(r,t||s.indexBuffer.data.length,u,(n||0)*a,i||1):o.drawElements(r,t||s.indexBuffer.data.length,u,(n||0)*a):console.warn("unsupported index buffer type: uint32")}else s.instanced?o.drawArraysInstanced(r,n,t||s.getSize(),i||1):o.drawArrays(r,n,t||s.getSize());return this},e.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},e.prototype.destroy=function(){this.renderer=null},e}(),A0=function(){function e(r){r===void 0&&(r=null),this.type=zt.NONE,this.autoDetect=!0,this.maskObject=r||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=k.FILTER_MULTISAMPLE,this.enabled=!0,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._target=null}return Object.defineProperty(e.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(r){r?this._filters?this._filters[0]=r:this._filters=[r]:this._filters=null},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=zt.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},e.prototype.copyCountersOrReset=function(r){r?(this._stencilCounter=r._stencilCounter,this._scissorCounter=r._scissorCounter,this._scissorRect=r._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},e}();function ah(e,r,t){var n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),n}function uh(e,r){var t=e.getShaderSource(r).split(`
`).map(function(l,h){return h+": "+l}),n=e.getShaderInfoLog(r),i=n.split(`
`),o={},s=i.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!o[l]?(o[l]=!0,!0):!1}),a=[""];s.forEach(function(l){t[l-1]="%c"+t[l-1]+"%c",a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);a[0]=u,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,a),console.groupEnd()}function S0(e,r,t,n){e.getProgramParameter(r,e.LINK_STATUS)||(e.getShaderParameter(t,e.COMPILE_STATUS)||uh(e,t),e.getShaderParameter(n,e.COMPILE_STATUS)||uh(e,n),console.error("PixiJS Error: Could not initialize shader."),e.getProgramInfoLog(r)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",e.getProgramInfoLog(r)))}function is(e){for(var r=new Array(e),t=0;t<r.length;t++)r[t]=!1;return r}function lh(e,r){switch(e){case"float":return 0;case"vec2":return new Float32Array(2*r);case"vec3":return new Float32Array(3*r);case"vec4":return new Float32Array(4*r);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*r);case"ivec3":return new Int32Array(3*r);case"ivec4":return new Int32Array(4*r);case"uvec2":return new Uint32Array(2*r);case"uvec3":return new Uint32Array(3*r);case"uvec4":return new Uint32Array(4*r);case"bool":return!1;case"bvec2":return is(2*r);case"bvec3":return is(3*r);case"bvec4":return is(4*r);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var hh={},gn=hh;function N0(){if(gn===hh||gn&&gn.isContextLost()){var e=document.createElement("canvas"),r=void 0;k.PREFER_ENV>=Se.WEBGL2&&(r=e.getContext("webgl2",{})),r||(r=e.getContext("webgl",{})||e.getContext("experimental-webgl",{}),r?r.getExtension("WEBGL_draw_buffers"):r=null),gn=r}return gn}var pi;function F0(){if(!pi){pi=Ce.MEDIUM;var e=N0();if(e&&e.getShaderPrecisionFormat){var r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT);pi=r.precision?Ce.HIGH:Ce.MEDIUM}}return pi}function fh(e,r,t){if(e.substring(0,9)!=="precision"){var n=r;return r===Ce.HIGH&&t!==Ce.HIGH&&(n=Ce.MEDIUM),"precision "+n+` float;
`+e}else if(t!==Ce.HIGH&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}var U0={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function ch(e){return U0[e]}var vi=null,dh={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function ph(e,r){if(!vi){var t=Object.keys(dh);vi={};for(var n=0;n<t.length;++n){var i=t[n];vi[e[i]]=dh[i]}}return vi[r]}var Mr=[{test:function(e){return e.type==="float"&&e.size===1},code:function(e){return`
            if(uv["`+e+'"] !== ud["'+e+`"].value)
            {
                ud["`+e+'"].value = uv["'+e+`"]
                gl.uniform1f(ud["`+e+'"].location, uv["'+e+`"])
            }
            `}},{test:function(e){return(e.type==="sampler2D"||e.type==="samplerCube"||e.type==="sampler2DArray")&&e.size===1&&!e.isArray},code:function(e){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+e+`"], t);

            if(ud["`+e+`"].value !== t)
            {
                ud["`+e+`"].value = t;
                gl.uniform1i(ud["`+e+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(e,r){return e.type==="mat3"&&e.size===1&&r.a!==void 0},code:function(e){return`
            gl.uniformMatrix3fv(ud["`+e+'"].location, false, uv["'+e+`"].toArray(true));
            `},codeUbo:function(e){return`
                var `+e+"_matrix = uv."+e+`.toArray(true);

                data[offset] = `+e+`_matrix[0];
                data[offset+1] = `+e+`_matrix[1];
                data[offset+2] = `+e+`_matrix[2];
        
                data[offset + 4] = `+e+`_matrix[3];
                data[offset + 5] = `+e+`_matrix[4];
                data[offset + 6] = `+e+`_matrix[5];
        
                data[offset + 8] = `+e+`_matrix[6];
                data[offset + 9] = `+e+`_matrix[7];
                data[offset + 10] = `+e+`_matrix[8];
            `}},{test:function(e,r){return e.type==="vec2"&&e.size===1&&r.x!==void 0},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+e+`"].location, v.x, v.y);
                }`},codeUbo:function(e){return`
                v = uv.`+e+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(e){return e.type==="vec2"&&e.size===1},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+e+`"].location, v[0], v[1]);
                }
            `}},{test:function(e,r){return e.type==="vec4"&&e.size===1&&r.width!==void 0},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+e+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(e){return`
                    v = uv.`+e+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(e){return e.type==="vec4"&&e.size===1},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+e+`"].location, v[0], v[1], v[2], v[3])
                }`}}],L0={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},M0={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function G0(e,r){var t,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var i in e.uniforms){var o=r[i];if(!o){((t=e.uniforms[i])===null||t===void 0?void 0:t.group)&&(e.uniforms[i].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+i+", '"+i+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+i+`, syncData);
                    `));continue}for(var s=e.uniforms[i],a=!1,u=0;u<Mr.length;u++)if(Mr[u].test(o,s)){n.push(Mr[u].code(i,s)),a=!0;break}if(!a){var l=o.size===1?L0:M0,h=l[o.type].replace("location",'ud["'+i+'"].location');n.push(`
            cu = ud["`+i+`"];
            cv = cu.value;
            v = uv["`+i+`"];
            `+h+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var B0=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function D0(e){for(var r="",t=0;t<e;++t)t>0&&(r+=`
else `),t<e-1&&(r+="if(test == "+t+".0){}");return r}function k0(e,r){if(e===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=r.createShader(r.FRAGMENT_SHADER);;){var n=B0.replace(/%forloop%/gi,D0(e));if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS))e=e/2|0;else break}return e}var yn;function j0(){if(typeof yn=="boolean")return yn;try{var e=new Function("param1","param2","param3","return param1[param2] === param3;");yn=e({a:"b"},"a","b")===!0}catch{yn=!1}return yn}var X0=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,H0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,z0=0,_i={},xn=function(){function e(r,t,n){n===void 0&&(n="pixi-shader"),this.id=z0++,this.vertexSrc=r||e.defaultVertexSrc,this.fragmentSrc=t||e.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),_i[n]?(_i[n]++,n+="-"+_i[n]):_i[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=fh(this.vertexSrc,k.PRECISION_VERTEX,Ce.HIGH),this.fragmentSrc=fh(this.fragmentSrc,k.PRECISION_FRAGMENT,F0())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(e,"defaultVertexSrc",{get:function(){return H0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return X0},enumerable:!1,configurable:!0}),e.from=function(r,t,n){var i=r+t,o=ml[i];return o||(ml[i]=o=new e(r,t,n)),o},e}(),He=function(){function e(r,t){this.uniformBindCount=0,this.program=r,t?t instanceof vr?this.uniformGroup=t:this.uniformGroup=new vr(t):this.uniformGroup=new vr({})}return e.prototype.checkUniformExists=function(r,t){if(t.uniforms[r])return!0;for(var n in t.uniforms){var i=t.uniforms[n];if(i.group&&this.checkUniformExists(r,i))return!0}return!1},e.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(e.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),e.from=function(r,t,n){var i=xn.from(r,t);return new e(i,n)},e}(),os=0,ss=1,as=2,us=3,ls=4,hs=5,_r=function(){function e(){this.data=0,this.blendMode=z.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(e.prototype,"blend",{get:function(){return!!(this.data&1<<os)},set:function(r){!!(this.data&1<<os)!==r&&(this.data^=1<<os)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return!!(this.data&1<<ss)},set:function(r){!!(this.data&1<<ss)!==r&&(this.data^=1<<ss)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"culling",{get:function(){return!!(this.data&1<<as)},set:function(r){!!(this.data&1<<as)!==r&&(this.data^=1<<as)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"depthTest",{get:function(){return!!(this.data&1<<us)},set:function(r){!!(this.data&1<<us)!==r&&(this.data^=1<<us)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"depthMask",{get:function(){return!!(this.data&1<<hs)},set:function(r){!!(this.data&1<<hs)!==r&&(this.data^=1<<hs)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<ls)},set:function(r){!!(this.data&1<<ls)!==r&&(this.data^=1<<ls)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this._blendMode},set:function(r){this.blend=r!==z.NONE,this._blendMode=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(r){this.offsets=!!r,this._polygonOffset=r},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},e.for2d=function(){var r=new e;return r.depthTest=!1,r.blend=!0,r},e}(),V0=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,$0=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,J=function(e){mt(r,e);function r(t,n,i){var o=this,s=xn.from(t||r.defaultVertexSrc,n||r.defaultFragmentSrc);return o=e.call(this,s,i)||this,o.padding=0,o.resolution=k.FILTER_RESOLUTION,o.multisample=k.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new _r,o}return r.prototype.apply=function(t,n,i,o,s){t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultVertexSrc",{get:function(){return V0},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return $0},enumerable:!1,configurable:!0}),r}(He),W0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,q0=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,vh=new Nt,fs=function(){function e(r,t){this._texture=r,this.mapCoord=new Nt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(r){this._texture=r,this._textureID=-1},enumerable:!1,configurable:!0}),e.prototype.multiplyUvs=function(r,t){t===void 0&&(t=r);for(var n=this.mapCoord,i=0;i<r.length;i+=2){var o=r[i],s=r[i+1];t[i]=o*n.a+s*n.c+n.tx,t[i+1]=o*n.b+s*n.d+n.ty}return t},e.prototype.update=function(r){var t=this._texture;if(!t||!t.valid||!r&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var n=t._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var i=t.orig,o=t.trim;o&&(vh.set(i.width/o.width,0,0,i.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(vh));var s=t.baseTexture,a=this.uClampFrame,u=this.clampMargin/s.resolution,l=this.clampOffset;return a[0]=(t._frame.x+u+l)/s.width,a[1]=(t._frame.y+u+l)/s.height,a[2]=(t._frame.x+t._frame.width-u+l)/s.width,a[3]=(t._frame.y+t._frame.height-u+l)/s.height,this.uClampOffset[0]=l/s.realWidth,this.uClampOffset[1]=l/s.realHeight,this.isSimple=t._frame.width===s.width&&t._frame.height===s.height&&t.rotate===0,!0},e}(),Y0=function(e){mt(r,e);function r(t,n,i){var o=this,s=null;return typeof t!="string"&&n===void 0&&i===void 0&&(s=t,t=void 0,n=void 0,i=void 0),o=e.call(this,t||W0,n||q0,i)||this,o.maskSprite=s,o.maskMatrix=new Nt,o}return Object.defineProperty(r.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),r.prototype.apply=function(t,n,i,o){var s=this._maskSprite,a=s._texture;!a.valid||(a.uvMatrix||(a.uvMatrix=new fs(a,0)),a.uvMatrix.update(),this.uniforms.npmAlpha=a.baseTexture.alphaMode?0:1,this.uniforms.mask=a,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,s).prepend(a.uvMatrix.mapCoord),this.uniforms.alpha=s.worldAlpha,this.uniforms.maskClamp=a.uvMatrix.uClampFrame,t.applyFilter(this,n,i,o))},r}(J),_h=function(){function e(r){this.renderer=r,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return e.prototype.setMaskStack=function(r){this.maskStack=r,this.renderer.scissor.setMaskStack(r),this.renderer.stencil.setMaskStack(r)},e.prototype.push=function(r,t){var n=t;if(!n.isMaskData){var i=this.maskDataPool.pop()||new A0;i.pooled=!0,i.maskObject=t,n=i}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(o),n.autoDetect&&this.detect(n),n._target=r,n.type!==zt.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case zt.SCISSOR:this.renderer.scissor.push(n);break;case zt.STENCIL:this.renderer.stencil.push(n);break;case zt.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break}n.type===zt.SPRITE&&this.maskStack.push(n)},e.prototype.pop=function(r){var t=this.maskStack.pop();if(!(!t||t._target!==r)){if(t.enabled)switch(t.type){case zt.SCISSOR:this.renderer.scissor.pop();break;case zt.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case zt.SPRITE:this.popSpriteMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===zt.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},e.prototype.detect=function(r){var t=r.maskObject;t.isSprite?r.type=zt.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(r)?r.type=zt.SCISSOR:r.type=zt.STENCIL},e.prototype.pushSpriteMask=function(r){var t,n,i=r.maskObject,o=r._target,s=r._filters;s||(s=this.alphaMaskPool[this.alphaMaskIndex],s||(s=this.alphaMaskPool[this.alphaMaskIndex]=[new Y0]));var a=this.renderer,u=a.renderTexture,l,h;if(u.current){var f=u.current;l=r.resolution||f.resolution,h=(t=r.multisample)!==null&&t!==void 0?t:f.multisample}else l=r.resolution||a.resolution,h=(n=r.multisample)!==null&&n!==void 0?n:a.multisample;s[0].resolution=l,s[0].multisample=h,s[0].maskSprite=i;var c=o.filterArea;o.filterArea=i.getBounds(!0),a.filter.push(o,s),o.filterArea=c,r._filters||this.alphaMaskIndex++},e.prototype.popSpriteMask=function(r){this.renderer.filter.pop(),r._filters?r._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},e.prototype.destroy=function(){this.renderer=null},e}(),mh=function(){function e(r){this.renderer=r,this.maskStack=[],this.glConst=0}return e.prototype.getStackLength=function(){return this.maskStack.length},e.prototype.setMaskStack=function(r){var t=this.renderer.gl,n=this.getStackLength();this.maskStack=r;var i=this.getStackLength();i!==n&&(i===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},e.prototype._useCurrent=function(){},e.prototype.destroy=function(){this.renderer=null,this.maskStack=null},e}(),gh=new Nt,yh=function(e){mt(r,e);function r(t){var n=e.call(this,t)||this;return n.glConst=WebGLRenderingContext.SCISSOR_TEST,n}return r.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},r.prototype.calcScissorRect=function(t){if(!t._scissorRectLocal){var n=t._scissorRect,i=t.maskObject,o=this.renderer,s=o.renderTexture;i.renderable=!0;var a=i.getBounds();this.roundFrameToPixels(a,s.current?s.current.resolution:o.resolution,s.sourceFrame,s.destinationFrame,o.projection.transform),i.renderable=!1,n&&a.fit(n),t._scissorRectLocal=a}},r.isMatrixRotated=function(t){if(!t)return!1;var n=t.a,i=t.b,o=t.c,s=t.d;return(Math.abs(i)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(s)>1e-4)},r.prototype.testScissor=function(t){var n=t.maskObject;if(!n.isFastRect||!n.isFastRect()||r.isMatrixRotated(n.worldTransform)||r.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var i=t._scissorRectLocal;return i.width>0&&i.height>0},r.prototype.roundFrameToPixels=function(t,n,i,o,s){r.isMatrixRotated(s)||(s=s?gh.copyFrom(s):gh.identity(),s.translate(-i.x,-i.y).scale(o.width/i.width,o.height/i.height).translate(o.x,o.y),this.renderer.filter.transformAABB(s,t),t.fit(o),t.x=Math.round(t.x*n),t.y=Math.round(t.y*n),t.width=Math.round(t.width*n),t.height=Math.round(t.height*n))},r.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var n=this.renderer.gl;t._scissorRect||n.enable(n.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},r.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},r.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=t.y:n=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,n,t.width,t.height)},r}(mh),xh=function(e){mt(r,e);function r(t){var n=e.call(this,t)||this;return n.glConst=WebGLRenderingContext.STENCIL_TEST,n}return r.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},r.prototype.push=function(t){var n=t.maskObject,i=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),i.clearStencil(0),i.clear(i.STENCIL_BUFFER_BIT),i.enable(i.STENCIL_TEST)),t._stencilCounter++,i.colorMask(!1,!1,!1,!1),i.stencilFunc(i.EQUAL,o,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,this._useCurrent()},r.prototype.pop=function(t){var n=this.renderer.gl;this.getStackLength()===0?n.disable(n.STENCIL_TEST):(n.colorMask(!1,!1,!1,!1),n.stencilOp(n.KEEP,n.KEEP,n.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},r.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},r}(mh),bh=function(){function e(r){this.renderer=r,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Nt,this.transform=null}return e.prototype.update=function(r,t,n,i){this.destinationFrame=r||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||r,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},e.prototype.calculateProjection=function(r,t,n,i){var o=this.projectionMatrix,s=i?-1:1;o.identity(),o.a=1/t.width*2,o.d=s*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-s-t.y*o.d},e.prototype.setTransform=function(r){},e.prototype.destroy=function(){this.renderer=null},e}(),mr=new it,bn=new it,Th=function(){function e(r){this.renderer=r,this.clearColor=r._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new it,this.destinationFrame=new it,this.viewportFrame=new it}return e.prototype.bind=function(r,t,n){r===void 0&&(r=null);var i=this.renderer;this.current=r;var o,s,a;r?(o=r.baseTexture,a=o.resolution,t||(mr.width=r.frame.width,mr.height=r.frame.height,t=mr),n||(bn.x=r.frame.x,bn.y=r.frame.y,bn.width=t.width,bn.height=t.height,n=bn),s=o.framebuffer):(a=i.resolution,t||(mr.width=i.screen.width,mr.height=i.screen.height,t=mr),n||(n=mr,n.width=t.width,n.height=t.height));var u=this.viewportFrame;u.x=n.x*a,u.y=n.y*a,u.width=n.width*a,u.height=n.height*a,r||(u.y=i.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(s,u),this.renderer.projection.update(n,t,a,!s),r?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(n)},e.prototype.clear=function(r,t){this.current?r=r||this.current.baseTexture.clearColor:r=r||this.clearColor;var n=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,o=n.width!==i.width||n.height!==i.height;if(o){var s=this.viewportFrame,a=s.x,u=s.y,l=s.width,h=s.height;a=Math.round(a),u=Math.round(u),l=Math.round(l),h=Math.round(h),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(a,u,l,h)}this.renderer.framebuffer.clear(r[0],r[1],r[2],r[3],t),o&&this.renderer.scissor.pop()},e.prototype.resize=function(){this.bind(null)},e.prototype.reset=function(){this.bind(null)},e.prototype.destroy=function(){this.renderer=null},e}();function K0(e,r,t,n,i){t.buffer.update(i)}var Z0={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},wh={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function J0(e){for(var r=e.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,n=0,i=0,o=0;o<r.length;o++){var s=r[o];if(t=wh[s.data.type],s.data.size>1&&(t=Math.max(t,16)*s.data.size),s.dataLen=t,n%t!=0&&n<16){var a=n%t%16;n+=a,i+=a}n+t>16?(i=Math.ceil(i/16)*16,s.offset=i,i+=t,n=t):(s.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:r,size:i}}function Q0(e,r){var t=[];for(var n in e)r[n]&&t.push(r[n]);return t.sort(function(i,o){return i.index-o.index}),t}function tg(e,r){if(!e.autoManage)return{size:0,syncFunc:K0};for(var t=Q0(e.uniforms,r),n=J0(t),i=n.uboElements,o=n.size,s=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],a=0;a<i.length;a++){for(var u=i[a],l=e.uniforms[u.data.name],h=u.data.name,f=!1,c=0;c<Mr.length;c++){var d=Mr[c];if(d.codeUbo&&d.test(u.data,l)){s.push("offset = "+u.offset/4+";",Mr[c].codeUbo(u.data.name,l)),f=!0;break}}if(!f)if(u.data.size>1){var p=ch(u.data.type),v=Math.max(wh[u.data.type]/16,1),_=p/v,g=(4-_%4)%4;s.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*v+`; i++)
                {
                    for(var j = 0; j < `+_+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+g+`;
                }

                `)}else{var b=Z0[u.data.type];s.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;
                `+b+`;
                `)}}return s.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",s.join(`
`))}}var eg=function(){function e(r,t){this.program=r,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return e.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},e}();function rg(e,r){for(var t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=r.getActiveAttrib(e,i);if(o.name.indexOf("gl_")!==0){var s=ph(r,o.type),a={type:s,name:o.name,size:ch(s),location:r.getAttribLocation(e,o.name)};t[o.name]=a}}return t}function ng(e,r){for(var t={},n=r.getProgramParameter(e,r.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=r.getActiveUniform(e,i),s=o.name.replace(/\[.*?\]$/,""),a=!!o.name.match(/\[.*?\]$/),u=ph(r,o.type);t[s]={name:s,index:i,type:u,size:o.size,isArray:a,value:lh(u,o.size)}}return t}function ig(e,r){var t=ah(e,e.VERTEX_SHADER,r.vertexSrc),n=ah(e,e.FRAGMENT_SHADER,r.fragmentSrc),i=e.createProgram();if(e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)||S0(e,i,t,n),r.attributeData=rg(i,e),r.uniformData=ng(i,e),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(r.vertexSrc)){var o=Object.keys(r.attributeData);o.sort(function(h,f){return h>f?1:-1});for(var s=0;s<o.length;s++)r.attributeData[o[s]].location=s,e.bindAttribLocation(i,s,o[s]);e.linkProgram(i)}e.deleteShader(t),e.deleteShader(n);var a={};for(var s in r.uniformData){var u=r.uniformData[s];a[s]={location:e.getUniformLocation(i,s),value:lh(u.type,u.size)}}var l=new eg(i,a);return l}var og=0,mi={textureCount:0,uboCount:0},Eh=function(){function e(r){this.destroyed=!1,this.renderer=r,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=og++}return e.prototype.systemCheck=function(){if(!j0())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},e.prototype.contextChange=function(r){this.gl=r,this.reset()},e.prototype.bind=function(r,t){r.uniforms.globals=this.renderer.globalUniforms;var n=r.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(r);return this.shader=r,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),t||(mi.textureCount=0,mi.uboCount=0,this.syncUniformGroup(r.uniformGroup,mi)),i},e.prototype.setUniforms=function(r){var t=this.shader.program,n=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(n.uniformData,r,this.renderer)},e.prototype.syncUniformGroup=function(r,t){var n=this.getGlProgram();(!r.static||r.dirtyId!==n.uniformDirtyGroups[r.id])&&(n.uniformDirtyGroups[r.id]=r.dirtyId,this.syncUniforms(r,n,t))},e.prototype.syncUniforms=function(r,t,n){var i=r.syncUniforms[this.shader.program.id]||this.createSyncGroups(r);i(t.uniformData,r.uniforms,this.renderer,n)},e.prototype.createSyncGroups=function(r){var t=this.getSignature(r,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=G0(r,this.shader.program.uniformData)),r.syncUniforms[this.shader.program.id]=this.cache[t],r.syncUniforms[this.shader.program.id]},e.prototype.syncUniformBufferGroup=function(r,t){var n=this.getGlProgram();if(!r.static||r.dirtyId!==0||!n.uniformGroups[r.id]){r.dirtyId=0;var i=n.uniformGroups[r.id]||this.createSyncBufferGroup(r,n,t);r.buffer.update(),i(n.uniformData,r.uniforms,this.renderer,mi,r.buffer)}this.renderer.buffer.bindBufferBase(r.buffer,n.uniformBufferBindings[t])},e.prototype.createSyncBufferGroup=function(r,t,n){var i=this.renderer.gl;this.renderer.buffer.bind(r.buffer);var o=this.gl.getUniformBlockIndex(t.program,n);t.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var s=this.getSignature(r,this.shader.program.uniformData,"ubo"),a=this._uboCache[s];if(a||(a=this._uboCache[s]=tg(r,this.shader.program.uniformData)),r.autoManage){var u=new Float32Array(a.size/4);r.buffer.update(u)}return t.uniformGroups[r.id]=a.syncFunc,t.uniformGroups[r.id]},e.prototype.getSignature=function(r,t,n){var i=r.uniforms,o=[n+"-"];for(var s in i)o.push(s),t[s]&&o.push(t[s].type);return o.join("-")},e.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},e.prototype.generateProgram=function(r){var t=this.gl,n=r.program,i=ig(t,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i},e.prototype.reset=function(){this.program=null,this.shader=null},e.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},e}();function sg(e,r){return r===void 0&&(r=[]),r[z.NORMAL]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.ADD]=[e.ONE,e.ONE],r[z.MULTIPLY]=[e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.SCREEN]=[e.ONE,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.OVERLAY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.DARKEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.LIGHTEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.COLOR_DODGE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.COLOR_BURN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.HARD_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.SOFT_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.DIFFERENCE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.EXCLUSION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.HUE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.SATURATION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.COLOR]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.LUMINOSITY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.NONE]=[0,0],r[z.NORMAL_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.ADD_NPM]=[e.SRC_ALPHA,e.ONE,e.ONE,e.ONE],r[z.SCREEN_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[z.SRC_IN]=[e.DST_ALPHA,e.ZERO],r[z.SRC_OUT]=[e.ONE_MINUS_DST_ALPHA,e.ZERO],r[z.SRC_ATOP]=[e.DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],r[z.DST_OVER]=[e.ONE_MINUS_DST_ALPHA,e.ONE],r[z.DST_IN]=[e.ZERO,e.SRC_ALPHA],r[z.DST_OUT]=[e.ZERO,e.ONE_MINUS_SRC_ALPHA],r[z.DST_ATOP]=[e.ONE_MINUS_DST_ALPHA,e.SRC_ALPHA],r[z.XOR]=[e.ONE_MINUS_DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],r[z.SUBTRACT]=[e.ONE,e.ONE,e.ONE,e.ONE,e.FUNC_REVERSE_SUBTRACT,e.FUNC_ADD],r}var ag=0,ug=1,lg=2,hg=3,fg=4,cg=5,Ch=function(){function e(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=z.NONE,this._blendEq=!1,this.map=[],this.map[ag]=this.setBlend,this.map[ug]=this.setOffset,this.map[lg]=this.setCullFace,this.map[hg]=this.setDepthTest,this.map[fg]=this.setFrontFace,this.map[cg]=this.setDepthMask,this.checks=[],this.defaultState=new _r,this.defaultState.blend=!0}return e.prototype.contextChange=function(r){this.gl=r,this.blendModes=sg(r),this.set(this.defaultState),this.reset()},e.prototype.set=function(r){if(r=r||this.defaultState,this.stateId!==r.data){for(var t=this.stateId^r.data,n=0;t;)t&1&&this.map[n].call(this,!!(r.data&1<<n)),t=t>>1,n++;this.stateId=r.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,r)},e.prototype.forceState=function(r){r=r||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(r.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,r);this.stateId=r.data},e.prototype.setBlend=function(r){this.updateCheck(e.checkBlendMode,r),this.gl[r?"enable":"disable"](this.gl.BLEND)},e.prototype.setOffset=function(r){this.updateCheck(e.checkPolygonOffset,r),this.gl[r?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},e.prototype.setDepthTest=function(r){this.gl[r?"enable":"disable"](this.gl.DEPTH_TEST)},e.prototype.setDepthMask=function(r){this.gl.depthMask(r)},e.prototype.setCullFace=function(r){this.gl[r?"enable":"disable"](this.gl.CULL_FACE)},e.prototype.setFrontFace=function(r){this.gl.frontFace(this.gl[r?"CW":"CCW"])},e.prototype.setBlendMode=function(r){if(r!==this.blendMode){this.blendMode=r;var t=this.blendModes[r],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},e.prototype.setPolygonOffset=function(r,t){this.gl.polygonOffset(r,t)},e.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},e.prototype.updateCheck=function(r,t){var n=this.checks.indexOf(r);t&&n===-1?this.checks.push(r):!t&&n!==-1&&this.checks.splice(n,1)},e.checkBlendMode=function(r,t){r.setBlendMode(t.blendMode)},e.checkPolygonOffset=function(r,t){r.setPolygonOffset(1,t.polygonOffset)},e.prototype.destroy=function(){this.gl=null},e}(),Ph=function(){function e(r){this.renderer=r,this.count=0,this.checkCount=0,this.maxIdle=k.GC_MAX_IDLE,this.checkCountMax=k.GC_MAX_CHECK_COUNT,this.mode=k.GC_MODE}return e.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==Do.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},e.prototype.run=function(){for(var r=this.renderer.texture,t=r.managedTextures,n=!1,i=0;i<t.length;i++){var o=t[i];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(r.destroyTexture(o,!0),t[i]=null,n=!0)}if(n){for(var s=0,i=0;i<t.length;i++)t[i]!==null&&(t[s++]=t[i]);t.length=s}},e.prototype.unload=function(r){var t=this.renderer.texture,n=r._texture;n&&!n.framebuffer&&t.destroyTexture(n);for(var i=r.children.length-1;i>=0;i--)this.unload(r.children[i])},e.prototype.destroy=function(){this.renderer=null},e}();function dg(e){var r,t,n,i,o,s,a,u,l,h,f,c,d,p,v,_,g,b,w,E,T,x,I;return"WebGL2RenderingContext"in self&&e instanceof self.WebGL2RenderingContext?I=(r={},r[q.UNSIGNED_BYTE]=(t={},t[G.RGBA]=e.RGBA8,t[G.RGB]=e.RGB8,t[G.RG]=e.RG8,t[G.RED]=e.R8,t[G.RGBA_INTEGER]=e.RGBA8UI,t[G.RGB_INTEGER]=e.RGB8UI,t[G.RG_INTEGER]=e.RG8UI,t[G.RED_INTEGER]=e.R8UI,t[G.ALPHA]=e.ALPHA,t[G.LUMINANCE]=e.LUMINANCE,t[G.LUMINANCE_ALPHA]=e.LUMINANCE_ALPHA,t),r[q.BYTE]=(n={},n[G.RGBA]=e.RGBA8_SNORM,n[G.RGB]=e.RGB8_SNORM,n[G.RG]=e.RG8_SNORM,n[G.RED]=e.R8_SNORM,n[G.RGBA_INTEGER]=e.RGBA8I,n[G.RGB_INTEGER]=e.RGB8I,n[G.RG_INTEGER]=e.RG8I,n[G.RED_INTEGER]=e.R8I,n),r[q.UNSIGNED_SHORT]=(i={},i[G.RGBA_INTEGER]=e.RGBA16UI,i[G.RGB_INTEGER]=e.RGB16UI,i[G.RG_INTEGER]=e.RG16UI,i[G.RED_INTEGER]=e.R16UI,i[G.DEPTH_COMPONENT]=e.DEPTH_COMPONENT16,i),r[q.SHORT]=(o={},o[G.RGBA_INTEGER]=e.RGBA16I,o[G.RGB_INTEGER]=e.RGB16I,o[G.RG_INTEGER]=e.RG16I,o[G.RED_INTEGER]=e.R16I,o),r[q.UNSIGNED_INT]=(s={},s[G.RGBA_INTEGER]=e.RGBA32UI,s[G.RGB_INTEGER]=e.RGB32UI,s[G.RG_INTEGER]=e.RG32UI,s[G.RED_INTEGER]=e.R32UI,s[G.DEPTH_COMPONENT]=e.DEPTH_COMPONENT24,s),r[q.INT]=(a={},a[G.RGBA_INTEGER]=e.RGBA32I,a[G.RGB_INTEGER]=e.RGB32I,a[G.RG_INTEGER]=e.RG32I,a[G.RED_INTEGER]=e.R32I,a),r[q.FLOAT]=(u={},u[G.RGBA]=e.RGBA32F,u[G.RGB]=e.RGB32F,u[G.RG]=e.RG32F,u[G.RED]=e.R32F,u[G.DEPTH_COMPONENT]=e.DEPTH_COMPONENT32F,u),r[q.HALF_FLOAT]=(l={},l[G.RGBA]=e.RGBA16F,l[G.RGB]=e.RGB16F,l[G.RG]=e.RG16F,l[G.RED]=e.R16F,l),r[q.UNSIGNED_SHORT_5_6_5]=(h={},h[G.RGB]=e.RGB565,h),r[q.UNSIGNED_SHORT_4_4_4_4]=(f={},f[G.RGBA]=e.RGBA4,f),r[q.UNSIGNED_SHORT_5_5_5_1]=(c={},c[G.RGBA]=e.RGB5_A1,c),r[q.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[G.RGBA]=e.RGB10_A2,d[G.RGBA_INTEGER]=e.RGB10_A2UI,d),r[q.UNSIGNED_INT_10F_11F_11F_REV]=(p={},p[G.RGB]=e.R11F_G11F_B10F,p),r[q.UNSIGNED_INT_5_9_9_9_REV]=(v={},v[G.RGB]=e.RGB9_E5,v),r[q.UNSIGNED_INT_24_8]=(_={},_[G.DEPTH_STENCIL]=e.DEPTH24_STENCIL8,_),r[q.FLOAT_32_UNSIGNED_INT_24_8_REV]=(g={},g[G.DEPTH_STENCIL]=e.DEPTH32F_STENCIL8,g),r):I=(b={},b[q.UNSIGNED_BYTE]=(w={},w[G.RGBA]=e.RGBA,w[G.RGB]=e.RGB,w[G.ALPHA]=e.ALPHA,w[G.LUMINANCE]=e.LUMINANCE,w[G.LUMINANCE_ALPHA]=e.LUMINANCE_ALPHA,w),b[q.UNSIGNED_SHORT_5_6_5]=(E={},E[G.RGB]=e.RGB,E),b[q.UNSIGNED_SHORT_4_4_4_4]=(T={},T[G.RGBA]=e.RGBA,T),b[q.UNSIGNED_SHORT_5_5_5_1]=(x={},x[G.RGBA]=e.RGBA,x),b),I}var cs=function(){function e(r){this.texture=r,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=q.UNSIGNED_BYTE,this.internalFormat=G.RGBA,this.samplerType=0}return e}(),Ih=function(){function e(r){this.renderer=r,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new ut,this.hasIntegerTextures=!1}return e.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=dg(r);var t=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var n=0;n<t;n++)this.boundTextures[n]=null;this.emptyTextures={};var i=new cs(r.createTexture());r.bindTexture(r.TEXTURE_2D,i.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[r.TEXTURE_2D]=i,this.emptyTextures[r.TEXTURE_CUBE_MAP]=new cs(r.createTexture()),r.bindTexture(r.TEXTURE_CUBE_MAP,this.emptyTextures[r.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},e.prototype.bind=function(r,t){t===void 0&&(t=0);var n=this.gl;if(r=r==null?void 0:r.castToBaseTexture(),r&&r.valid&&!r.parentTextureArray){r.touched=this.renderer.textureGC.count;var i=r._glTextures[this.CONTEXT_UID]||this.initTexture(r);this.boundTextures[t]!==r&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(r.target,i.texture)),i.dirtyId!==r.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),this.updateTexture(r)),this.boundTextures[t]=r}else this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[t]=null},e.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var r=0;r<this.boundTextures.length;r++)this.boundTextures[r]=this.unknownTexture},e.prototype.unbind=function(r){var t=this,n=t.gl,i=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<i.length;o++)i[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<i.length;o++)i[o]===r&&(this.currentLocation!==o&&(n.activeTexture(n.TEXTURE0+o),this.currentLocation=o),n.bindTexture(r.target,this.emptyTextures[r.target].texture),i[o]=null)},e.prototype.ensureSamplerType=function(r){var t=this,n=t.boundTextures,i=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!i)for(var s=r-1;s>=0;--s){var a=n[s];if(a){var u=a._glTextures[o];u.samplerType!==ti.FLOAT&&this.renderer.texture.unbind(a)}}},e.prototype.initTexture=function(r){var t=new cs(this.gl.createTexture());return t.dirtyId=-1,r._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(r),r.on("dispose",this.destroyTexture,this),t},e.prototype.initTextureType=function(r,t){var n,i;t.internalFormat=(i=(n=this.internalFormats[r.type])===null||n===void 0?void 0:n[r.format])!==null&&i!==void 0?i:r.format,this.webGLVersion===2&&r.type===q.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=r.type},e.prototype.updateTexture=function(r){var t=r._glTextures[this.CONTEXT_UID];if(!!t){var n=this.renderer;if(this.initTextureType(r,t),r.resource&&r.resource.upload(n,r,t))t.samplerType!==ti.FLOAT&&(this.hasIntegerTextures=!0);else{var i=r.realWidth,o=r.realHeight,s=n.gl;(t.width!==i||t.height!==o||t.dirtyId<0)&&(t.width=i,t.height=o,s.texImage2D(r.target,0,t.internalFormat,i,o,0,r.format,t.type,null))}r.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(r),t.dirtyId=r.dirtyId}},e.prototype.destroyTexture=function(r,t){var n=this.gl;if(r=r.castToBaseTexture(),r._glTextures[this.CONTEXT_UID]&&(this.unbind(r),n.deleteTexture(r._glTextures[this.CONTEXT_UID].texture),r.off("dispose",this.destroyTexture,this),delete r._glTextures[this.CONTEXT_UID],!t)){var i=this.managedTextures.indexOf(r);i!==-1&&Fr(this.managedTextures,i,1)}},e.prototype.updateTextureStyle=function(r){var t=r._glTextures[this.CONTEXT_UID];!t||((r.mipmap===we.POW2||this.webGLVersion!==2)&&!r.isPowerOfTwo?t.mipmap=!1:t.mipmap=r.mipmap>=1,this.webGLVersion!==2&&!r.isPowerOfTwo?t.wrapMode=Ne.CLAMP:t.wrapMode=r.wrapMode,r.resource&&r.resource.style(this.renderer,r,t)||this.setStyle(r,t),t.dirtyStyleId=r.dirtyStyleId)},e.prototype.setStyle=function(r,t){var n=this.gl;if(t.mipmap&&r.mipmap!==we.ON_MANUAL&&n.generateMipmap(r.target),n.texParameteri(r.target,n.TEXTURE_WRAP_S,t.wrapMode),n.texParameteri(r.target,n.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===re.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&r.anisotropicLevel>0&&r.scaleMode===re.LINEAR){var o=Math.min(r.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(r.target,i.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===re.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(r.target,n.TEXTURE_MAG_FILTER,r.scaleMode===re.LINEAR?n.LINEAR:n.NEAREST)},e.prototype.destroy=function(){this.renderer=null},e}(),Rh={__proto__:null,FilterSystem:eh,BatchSystem:rh,ContextSystem:ih,FramebufferSystem:oh,GeometrySystem:sh,MaskSystem:_h,ScissorSystem:yh,StencilSystem:xh,ProjectionSystem:bh,RenderTextureSystem:Th,ShaderSystem:Eh,StateSystem:Ch,TextureGCSystem:Ph,TextureSystem:Ih},ds=new Nt,pg=function(e){mt(r,e);function r(t,n){t===void 0&&(t=pn.UNKNOWN);var i=e.call(this)||this;return n=Object.assign({},k.RENDER_OPTIONS,n),i.options=n,i.type=t,i.screen=new it(0,0,n.width,n.height),i.view=n.view||document.createElement("canvas"),i.resolution=n.resolution||k.RESOLUTION,i.useContextAlpha=n.useContextAlpha,i.autoDensity=!!n.autoDensity,i.preserveDrawingBuffer=n.preserveDrawingBuffer,i.clearBeforeRender=n.clearBeforeRender,i._backgroundColor=0,i._backgroundColorRgba=[0,0,0,1],i._backgroundColorString="#000000",i.backgroundColor=n.backgroundColor||i._backgroundColor,i.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(sr("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=n.transparent,i.backgroundAlpha=n.transparent?0:1),i._lastObjectRendered=null,i.plugins={},i}return r.prototype.initPlugins=function(t){for(var n in t)this.plugins[n]=new t[n](this)},Object.defineProperty(r.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),r.prototype.resize=function(t,n){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(n*this.resolution);var i=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=i,this.screen.height=o,this.autoDensity&&(this.view.style.width=i+"px",this.view.style.height=o+"px"),this.emit("resize",i,o)},r.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={}),typeof n=="number"&&(sr("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:i,region:o});var s=n.region,a=v0(n,["region"]);o=s||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=pr.create(Zo({width:o.width,height:o.height},a));return ds.tx=-o.x,ds.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:ds,skipUpdateTransform:!!t.parent}),u},r.prototype.destroy=function(t){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var i=this;i.plugins=null,i.type=pn.UNKNOWN,i.view=null,i.screen=null,i._tempDisplayObjectParent=null,i.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(r.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=ul(t),kt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),r}(be),vg=function(){function e(r){this.buffer=r||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return e}(),_g=function(){function e(r){this.renderer=r,this.managedBuffers={},this.boundBufferBases={}}return e.prototype.destroy=function(){this.renderer=null},e.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},e.prototype.bind=function(r){var t=this,n=t.gl,i=t.CONTEXT_UID,o=r._glBuffers[i]||this.createGLBuffer(r);n.bindBuffer(r.type,o.buffer)},e.prototype.bindBufferBase=function(r,t){var n=this,i=n.gl,o=n.CONTEXT_UID;if(this.boundBufferBases[t]!==r){var s=r._glBuffers[o]||this.createGLBuffer(r);this.boundBufferBases[t]=r,i.bindBufferBase(i.UNIFORM_BUFFER,t,s.buffer)}},e.prototype.bindBufferRange=function(r,t,n){var i=this,o=i.gl,s=i.CONTEXT_UID;n=n||0;var a=r._glBuffers[s]||this.createGLBuffer(r);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,a.buffer,n*256,256)},e.prototype.update=function(r){var t=this,n=t.gl,i=t.CONTEXT_UID,o=r._glBuffers[i];if(r._updateID!==o.updateID)if(o.updateID=r._updateID,n.bindBuffer(r.type,o.buffer),o.byteLength>=r.data.byteLength)n.bufferSubData(r.type,0,r.data);else{var s=r.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;o.byteLength=r.data.byteLength,n.bufferData(r.type,r.data,s)}},e.prototype.dispose=function(r,t){if(!!this.managedBuffers[r.id]){delete this.managedBuffers[r.id];var n=r._glBuffers[this.CONTEXT_UID],i=this.gl;r.disposeRunner.remove(this),!!n&&(t||i.deleteBuffer(n.buffer),delete r._glBuffers[this.CONTEXT_UID])}},e.prototype.disposeAll=function(r){for(var t=Object.keys(this.managedBuffers),n=0;n<t.length;n++)this.dispose(this.managedBuffers[t[n]],r)},e.prototype.createGLBuffer=function(r){var t=this,n=t.CONTEXT_UID,i=t.gl;return r._glBuffers[n]=new vg(i.createBuffer()),this.managedBuffers[r.id]=r,r.disposeRunner.add(this),r._glBuffers[n]},e}(),ze=function(e){mt(r,e);function r(t){var n=e.call(this,pn.WEBGL,t)||this;return t=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new Vt("destroy"),contextChange:new Vt("contextChange"),reset:new Vt("reset"),update:new Vt("update"),postrender:new Vt("postrender"),prerender:new Vt("prerender"),resize:new Vt("resize")},n.runners.contextChange.add(n),n.globalUniforms=new vr({projectionMatrix:new Nt},!0),n.addSystem(_h,"mask").addSystem(ih,"context").addSystem(Ch,"state").addSystem(Eh,"shader").addSystem(Ih,"texture").addSystem(_g,"buffer").addSystem(sh,"geometry").addSystem(oh,"framebuffer").addSystem(yh,"scissor").addSystem(xh,"stencil").addSystem(bh,"projection").addSystem(Ph,"textureGC").addSystem(eh,"filter").addSystem(Th,"renderTexture").addSystem(rh,"batch"),n.initPlugins(r.__plugins),n.multisample=void 0,t.context?n.context.initFromContext(t.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:t.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,tv(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return r.create=function(t){if(ev())return new r(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},r.prototype.contextChange=function(){var t=this.gl,n;if(this.context.webGLVersion===1){var i=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,i)}else{var i=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,i)}n>=Ut.HIGH?this.multisample=Ut.HIGH:n>=Ut.MEDIUM?this.multisample=Ut.MEDIUM:n>=Ut.LOW?this.multisample=Ut.LOW:this.multisample=Ut.NONE},r.prototype.addSystem=function(t,n){var i=new t(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=i;for(var o in this.runners)this.runners[o].add(i);return this},r.prototype.render=function(t,n){var i,o,s,a;if(n&&(n instanceof pr?(sr("6.0.0","Renderer#render arguments changed, use options instead."),i=n,o=arguments[2],s=arguments[3],a=arguments[4]):(i=n.renderTexture,o=n.clear,s=n.transform,a=n.skipUpdateTransform)),this.renderingToScreen=!i,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=s,!this.context.isLost){if(i||(this._lastObjectRendered=t),!a){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(i),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),i&&i.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},r.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={});var s=e.prototype.generateTexture.call(this,t,n,i,o);return this.framebuffer.blit(),s},r.prototype.resize=function(t,n){e.prototype.resize.call(this,t,n),this.runners.resize.emit(this.screen.height,this.screen.width)},r.prototype.reset=function(){return this.runners.reset.emit(),this},r.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},r.prototype.destroy=function(t){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();e.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(r.prototype,"extract",{get:function(){return sr("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),r.registerPlugin=function(t,n){r.__plugins=r.__plugins||{},r.__plugins[t]=n},r}(pg);function mg(e){return ze.create(e)}var gg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,yg=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,xg=gg,Oh=yg,ps=function(){function e(){this.texArray=null,this.blend=0,this.type=ae.TRIANGLES,this.start=0,this.size=0,this.data=null}return e}(),vs=function(){function e(){this.elements=[],this.ids=[],this.count=0}return e.prototype.clear=function(){for(var r=0;r<this.count;r++)this.elements[r]=null;this.count=0},e}(),_s=function(){function e(r){typeof r=="number"?this.rawBinaryData=new ArrayBuffer(r):r instanceof Uint8Array?this.rawBinaryData=r.buffer:this.rawBinaryData=r,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(e.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),e.prototype.view=function(r){return this[r+"View"]},e.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},e.sizeOf=function(r){switch(r){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(r+" isn't a valid view type")}},e}(),bg=function(e){mt(r,e);function r(t){var n=e.call(this,t)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=_r.for2d(),n.size=k.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),t.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return r.prototype.contextChange=function(){var t=this.renderer.gl;k.PREFER_ENV===Se.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),k.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=k0(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},r.prototype.initFlushBuffers=function(){for(var t=r._drawCallPool,n=r._textureArrayPool,i=this.size/4,o=Math.floor(i/this.MAX_TEXTURES)+1;t.length<i;)t.push(new ps);for(;n.length<o;)n.push(new vs);for(var s=0;s<this.MAX_TEXTURES;s++)this._tempBoundTextures[s]=null},r.prototype.onPrerender=function(){this._flushId=0},r.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},r.prototype.buildTexturesAndDrawCalls=function(){var t=this,n=t._bufferedTextures,i=t.MAX_TEXTURES,o=r._textureArrayPool,s=this.renderer.batch,a=this._tempBoundTextures,u=this.renderer.textureGC.count,l=++ut._globalBatch,h=0,f=o[0],c=0;s.copyBoundTextures(a,i);for(var d=0;d<this._bufferSize;++d){var p=n[d];n[d]=null,p._batchEnabled!==l&&(f.count>=i&&(s.boundArray(f,a,l,i),this.buildDrawCalls(f,c,d),c=d,f=o[++h],++l),p._batchEnabled=l,p.touched=u,f.elements[f.count++]=p)}f.count>0&&(s.boundArray(f,a,l,i),this.buildDrawCalls(f,c,this._bufferSize),++h,++l);for(var d=0;d<a.length;d++)a[d]=null;ut._globalBatch=l},r.prototype.buildDrawCalls=function(t,n,i){var o=this,s=o._bufferedElements,a=o._attributeBuffer,u=o._indexBuffer,l=o.vertexSize,h=r._drawCallPool,f=this._dcIndex,c=this._aIndex,d=this._iIndex,p=h[f];p.start=this._iIndex,p.texArray=t;for(var v=n;v<i;++v){var _=s[v],g=_._texture.baseTexture,b=hl[g.alphaMode?1:0][_.blendMode];s[v]=null,n<v&&p.blend!==b&&(p.size=d-p.start,n=v,p=h[++f],p.texArray=t,p.start=d),this.packInterleavedGeometry(_,a,u,c,d),c+=_.vertexData.length/2*l,d+=_.indices.length,p.blend=b}n<i&&(p.size=d-p.start,++f),this._dcIndex=f,this._aIndex=c,this._iIndex=d},r.prototype.bindAndClearTexArray=function(t){for(var n=this.renderer.texture,i=0;i<t.count;i++)n.bind(t.elements[i],t.ids[i]),t.elements[i]=null;t.count=0},r.prototype.updateGeometry=function(){var t=this,n=t._packedGeometries,i=t._attributeBuffer,o=t._indexBuffer;k.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},r.prototype.drawBatches=function(){for(var t=this._dcIndex,n=this.renderer,i=n.gl,o=n.state,s=r._drawCallPool,a=null,u=0;u<t;u++){var l=s[u],h=l.texArray,f=l.type,c=l.size,d=l.start,p=l.blend;a!==h&&(a=h,this.bindAndClearTexArray(h)),this.state.blendMode=p,o.set(this.state),i.drawElements(f,c,i.UNSIGNED_SHORT,d*2)}},r.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},r.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),k.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},r.prototype.stop=function(){this.flush()},r.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),e.prototype.destroy.call(this)},r.prototype.getAttributeBuffer=function(t){var n=ei(Math.ceil(t/8)),i=vl(n),o=n*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);var s=this._aBuffers[o];return s||(this._aBuffers[o]=s=new _s(o*this.vertexSize*4)),s},r.prototype.getIndexBuffer=function(t){var n=ei(Math.ceil(t/12)),i=vl(n),o=n*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);var s=this._iBuffers[i];return s||(this._iBuffers[i]=s=new Uint16Array(o)),s},r.prototype.packInterleavedGeometry=function(t,n,i,o,s){for(var a=n.uint32View,u=n.float32View,l=o/this.vertexSize,h=t.uvs,f=t.indices,c=t.vertexData,d=t._texture.baseTexture._batchLocation,p=Math.min(t.worldAlpha,1),v=p<1&&t._texture.baseTexture.alphaMode?jo(t._tintRGB,p):t._tintRGB+(p*255<<24),_=0;_<c.length;_+=2)u[o++]=c[_],u[o++]=c[_+1],u[o++]=h[_],u[o++]=h[_+1],a[o++]=v,u[o++]=d;for(var _=0;_<f.length;_++)i[s++]=l+f[_]},r._drawCallPool=[],r._textureArrayPool=[],r}(di),Tg=function(){function e(r,t){if(this.vertexSrc=r,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return e.prototype.generateShader=function(r){if(!this.programCache[r]){for(var t=new Int32Array(r),n=0;n<r;n++)t[n]=n;this.defaultGroupCache[r]=vr.from({uSamplers:t},!0);var i=this.fragTemplate;i=i.replace(/%count%/gi,""+r),i=i.replace(/%forloop%/gi,this.generateSampleSrc(r)),this.programCache[r]=new xn(this.vertexSrc,i)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new Nt,default:this.defaultGroupCache[r]};return new He(this.programCache[r],o)},e.prototype.generateSampleSrc=function(r){var t="";t+=`
`,t+=`
`;for(var n=0;n<r;n++)n>0&&(t+=`
else `),n<r-1&&(t+="if(vTextureId < "+n+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},e}(),Ah=function(e){mt(r,e);function r(t){t===void 0&&(t=!1);var n=e.call(this)||this;return n._buffer=new Bt(null,t,!1),n._indexBuffer=new Bt(null,t,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,q.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,q.FLOAT).addAttribute("aColor",n._buffer,4,!0,q.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,q.FLOAT).addIndex(n._indexBuffer),n}return r}(mn),Sh=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Nh=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,wg=function(){function e(){}return e.create=function(r){var t=Object.assign({vertex:Sh,fragment:Nh,geometryClass:Ah,vertexSize:6},r),n=t.vertex,i=t.fragment,o=t.vertexSize,s=t.geometryClass;return function(a){mt(u,a);function u(l){var h=a.call(this,l)||this;return h.shaderGenerator=new Tg(n,i),h.geometryClass=s,h.vertexSize=o,h}return u}(bg)},Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Sh},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentTemplate",{get:function(){return Nh},enumerable:!1,configurable:!0}),e}(),Eg=wg.create(),Cg={},Pg=function(e){Object.defineProperty(Cg,e,{get:function(){return sr("6.0.0","PIXI.systems."+e+" has moved to PIXI."+e),ql[e]}})};for(var ms in ql)Pg(ms);var Ig={},Rg=function(e){Object.defineProperty(Ig,e,{get:function(){return sr("6.0.0","PIXI.resources."+e+" has moved to PIXI."+e),Rh[e]}})};for(var ms in Rh)Rg(ms);/*!
 * @pixi/app - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gs=function(){function e(r){var t=this;this.stage=new Ie,r=Object.assign({forceCanvas:!1},r),this.renderer=mg(r),e._plugins.forEach(function(n){n.init.call(t,r)})}return e.registerPlugin=function(r){e._plugins.push(r)},e.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(e.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),e.prototype.destroy=function(r,t){var n=this,i=e._plugins.slice(0);i.reverse(),i.forEach(function(o){o.destroy.call(n)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(r),this.renderer=null},e._plugins=[],e}(),Og=function(){function e(){}return e.init=function(r){var t=this;Object.defineProperty(this,"resizeTo",{set:function(n){self.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(self.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!t._resizeTo||(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(!!t._resizeTo){t.cancelResize();var n,i;if(t._resizeTo===self)n=self.innerWidth,i=self.innerHeight;else{var o=t._resizeTo,s=o.clientWidth,a=o.clientHeight;n=s,i=a}t.renderer.resize(n,i)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=r.resizeTo||null},e.destroy=function(){self.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},e}();gs.registerPlugin(Og);/*!
 * @pixi/extract - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Fh=new it,Uh=4,Ag=function(){function e(r){this.renderer=r}return e.prototype.image=function(r,t,n){var i=new Image;return i.src=this.base64(r,t,n),i},e.prototype.base64=function(r,t,n){return this.canvas(r).toDataURL(t,n)},e.prototype.canvas=function(r){var t=this.renderer,n,i,o=!1,s,a=!1;r&&(r instanceof pr?s=r:(s=this.renderer.generateTexture(r),a=!0)),s?(n=s.baseTexture.resolution,i=s.frame,o=!1,t.renderTexture.bind(s)):(n=this.renderer.resolution,o=!0,i=Fh,i.width=this.renderer.width,i.height=this.renderer.height,t.renderTexture.bind(null));var u=Math.floor(i.width*n+1e-4),l=Math.floor(i.height*n+1e-4),h=new gl(u,l,1),f=new Uint8Array(Uh*u*l),c=t.gl;c.readPixels(i.x*n,i.y*n,u,l,c.RGBA,c.UNSIGNED_BYTE,f);var d=h.context.getImageData(0,0,u,l);if(e.arrayPostDivide(f,d.data),h.context.putImageData(d,0,0),o){var p=new gl(h.width,h.height,1);p.context.scale(1,-1),p.context.drawImage(h.canvas,0,-l),h.destroy(),h=p}return a&&s.destroy(!0),h.canvas},e.prototype.pixels=function(r){var t=this.renderer,n,i,o,s=!1;r&&(r instanceof pr?o=r:(o=this.renderer.generateTexture(r),s=!0)),o?(n=o.baseTexture.resolution,i=o.frame,t.renderTexture.bind(o)):(n=t.resolution,i=Fh,i.width=t.width,i.height=t.height,t.renderTexture.bind(null));var a=i.width*n,u=i.height*n,l=new Uint8Array(Uh*a*u),h=t.gl;return h.readPixels(i.x*n,i.y*n,a,u,h.RGBA,h.UNSIGNED_BYTE,l),s&&o.destroy(!0),e.arrayPostDivide(l,l),l},e.prototype.destroy=function(){this.renderer=null},e.arrayPostDivide=function(r,t){for(var n=0;n<r.length;n+=4){var i=t[n+3]=r[n+3];i!==0?(t[n]=Math.round(Math.min(r[n]*255/i,255)),t[n+1]=Math.round(Math.min(r[n+1]*255/i,255)),t[n+2]=Math.round(Math.min(r[n+2]*255/i,255))):(t[n]=r[n],t[n+1]=r[n+1],t[n+2]=r[n+2])}},e}();/*!
 * @pixi/loaders - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gi=function(){function e(r,t,n){t===void 0&&(t=!1),this._fn=r,this._once=t,this._thisArg=n,this._next=this._prev=this._owner=null}return e.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},e}();function Lh(e,r){return e._head?(e._tail._next=r,r._prev=e._tail,e._tail=r):(e._head=r,e._tail=r),r._owner=e,r}var Me=function(){function e(){this._head=this._tail=void 0}return e.prototype.handlers=function(r){r===void 0&&(r=!1);var t=this._head;if(r)return!!t;for(var n=[];t;)n.push(t),t=t._next;return n},e.prototype.has=function(r){if(!(r instanceof gi))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return r._owner===this},e.prototype.dispatch=function(){for(var r=arguments,t=[],n=0;n<arguments.length;n++)t[n]=r[n];var i=this._head;if(!i)return!1;for(;i;)i._once&&this.detach(i),i._fn.apply(i._thisArg,t),i=i._next;return!0},e.prototype.add=function(r,t){if(t===void 0&&(t=null),typeof r!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return Lh(this,new gi(r,!1,t))},e.prototype.once=function(r,t){if(t===void 0&&(t=null),typeof r!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return Lh(this,new gi(r,!0,t))},e.prototype.detach=function(r){if(!(r instanceof gi))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return r._owner!==this?this:(r._prev&&(r._prev._next=r._next),r._next&&(r._next._prev=r._prev),r===this._head?(this._head=r._next,r._next===null&&(this._tail=null)):r===this._tail&&(this._tail=r._prev,this._tail._next=null),r._owner=null,this)},e.prototype.detachAll=function(){var r=this._head;if(!r)return this;for(this._head=this._tail=null;r;)r._owner=null,r=r._next;return this},e}();function Mh(e,r){r=r||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=t.parser[r.strictMode?"strict":"loose"].exec(e),i={},o=14;o--;)i[t.key[o]]=n[o]||"";return i[t.q.name]={},i[t.key[12]].replace(t.q.parser,function(s,a,u){a&&(i[t.q.name][a]=u)}),i}var Sg=!!(self.XDomainRequest&&!("withCredentials"in new XMLHttpRequest)),yi=null,Ng=0,Gh=200,Fg=204,Ug=1223,Lg=2;function Bh(){}function Dh(e,r,t){r&&r.indexOf(".")===0&&(r=r.substring(1)),!!r&&(e[r]=t)}function ys(e){return e.toString().replace("object ","")}var ft=function(){function e(r,t,n){if(this._dequeue=Bh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof r!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(e.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=r,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=e.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Bh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new Me,this.onProgress=new Me,this.onComplete=new Me,this.onAfterMiddleware=new Me}return e.setExtensionLoadType=function(r,t){Dh(e._loadTypeMap,r,t)},e.setExtensionXhrType=function(r,t){Dh(e._xhrTypeMap,r,t)},Object.defineProperty(e.prototype,"isDataUrl",{get:function(){return this._hasFlag(e.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isComplete",{get:function(){return this._hasFlag(e.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isLoading",{get:function(){return this._hasFlag(e.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),e.prototype.complete=function(){this._clearEvents(),this._finish()},e.prototype.abort=function(r){if(!this.error){if(this.error=new Error(r),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=e.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},e.prototype.load=function(r){var t=this;if(!this.isLoading){if(this.isComplete){r&&setTimeout(function(){return r(t)},1);return}else r&&this.onComplete.once(r);switch(this._setFlag(e.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case e.LOAD_TYPE.IMAGE:this.type=e.TYPE.IMAGE,this._loadElement("image");break;case e.LOAD_TYPE.AUDIO:this.type=e.TYPE.AUDIO,this._loadSourceElement("audio");break;case e.LOAD_TYPE.VIDEO:this.type=e.TYPE.VIDEO,this._loadSourceElement("video");break;case e.LOAD_TYPE.XHR:default:Sg&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},e.prototype._hasFlag=function(r){return(this._flags&r)!=0},e.prototype._setFlag=function(r,t){this._flags=t?this._flags|r:this._flags&~r},e.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},e.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(e.STATUS_FLAGS.COMPLETE,!0),this._setFlag(e.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},e.prototype._loadElement=function(r){this.metadata.loadElement?this.data=this.metadata.loadElement:r==="image"&&typeof self.Image!="undefined"?this.data=new Image:this.data=document.createElement(r),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},e.prototype._loadSourceElement=function(r){if(this.metadata.loadElement?this.data=this.metadata.loadElement:r==="audio"&&typeof self.Audio!="undefined"?this.data=new Audio:this.data=document.createElement(r),this.data===null){this.abort("Unsupported element: "+r);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(r,this.url[n],Array.isArray(t)?t[n]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(r,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},e.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var r=this.xhr=new XMLHttpRequest;r.open("GET",this.url,!0),r.timeout=this.timeout,this.xhrType===e.XHR_RESPONSE_TYPE.JSON||this.xhrType===e.XHR_RESPONSE_TYPE.DOCUMENT?r.responseType=e.XHR_RESPONSE_TYPE.TEXT:r.responseType=this.xhrType,r.addEventListener("error",this._boundXhrOnError,!1),r.addEventListener("timeout",this._boundXhrOnTimeout,!1),r.addEventListener("abort",this._boundXhrOnAbort,!1),r.addEventListener("progress",this._boundOnProgress,!1),r.addEventListener("load",this._boundXhrOnLoad,!1),r.send()},e.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var r=this.xhr=new self.XDomainRequest;r.timeout=this.timeout||5e3,r.onerror=this._boundXhrOnError,r.ontimeout=this._boundXhrOnTimeout,r.onprogress=this._boundOnProgress,r.onload=this._boundXhrOnLoad,r.open("GET",this.url,!0),setTimeout(function(){return r.send()},1)},e.prototype._createSource=function(r,t,n){n||(n=r+"/"+this._getExtension(t));var i=document.createElement("source");return i.src=t,i.type=n,i},e.prototype._onError=function(r){this.abort("Failed to load element using: "+r.target.nodeName)},e.prototype._onProgress=function(r){r&&r.lengthComputable&&this.onProgress.dispatch(this,r.loaded/r.total)},e.prototype._onTimeout=function(){this.abort("Load timed out.")},e.prototype._xhrOnError=function(){var r=this.xhr;this.abort(ys(r)+" Request failed. Status: "+r.status+', text: "'+r.statusText+'"')},e.prototype._xhrOnTimeout=function(){var r=this.xhr;this.abort(ys(r)+" Request timed out.")},e.prototype._xhrOnAbort=function(){var r=this.xhr;this.abort(ys(r)+" Request was aborted by the user.")},e.prototype._xhrOnLoad=function(){var r=this.xhr,t="",n=typeof r.status=="undefined"?Gh:r.status;(r.responseType===""||r.responseType==="text"||typeof r.responseType=="undefined")&&(t=r.responseText),n===Ng&&(t.length>0||r.responseType===e.XHR_RESPONSE_TYPE.BUFFER)?n=Gh:n===Ug&&(n=Fg);var i=n/100|0;if(i===Lg)if(this.xhrType===e.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=e.TYPE.TEXT;else if(this.xhrType===e.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=e.TYPE.JSON}catch(a){this.abort("Error trying to parse loaded json: "+a);return}else if(this.xhrType===e.XHR_RESPONSE_TYPE.DOCUMENT)try{if(self.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var s=document.createElement("div");s.innerHTML=t,this.data=s}this.type=e.TYPE.XML}catch(a){this.abort("Error trying to parse loaded xml: "+a);return}else this.data=r.response||t;else{this.abort("["+r.status+"] "+r.statusText+": "+r.responseURL);return}this.complete()},e.prototype._determineCrossOrigin=function(r,t){if(r.indexOf("data:")===0)return"";if(self.origin!==self.location.origin)return"anonymous";t=t||self.location,yi||(yi=document.createElement("a")),yi.href=r;var n=Mh(yi.href,{strictMode:!0}),i=!n.port&&t.port===""||n.port===t.port,o=n.protocol?n.protocol+":":"";return n.host!==t.hostname||!i||o!==t.protocol?"anonymous":""},e.prototype._determineXhrType=function(){return e._xhrTypeMap[this.extension]||e.XHR_RESPONSE_TYPE.TEXT},e.prototype._determineLoadType=function(){return e._loadTypeMap[this.extension]||e.LOAD_TYPE.XHR},e.prototype._getExtension=function(r){r===void 0&&(r=this.url);var t="";if(this.isDataUrl){var n=r.indexOf("/");t=r.substring(n+1,r.indexOf(";",n))}else{var i=r.indexOf("?"),o=r.indexOf("#"),s=Math.min(i>-1?i:r.length,o>-1?o:r.length);r=r.substring(0,s),t=r.substring(r.lastIndexOf(".")+1)}return t.toLowerCase()},e.prototype._getMimeFromXhrType=function(r){switch(r){case e.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case e.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case e.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case e.XHR_RESPONSE_TYPE.JSON:return"application/json";case e.XHR_RESPONSE_TYPE.DEFAULT:case e.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},e}();(function(e){(function(r){r[r.NONE=0]="NONE",r[r.DATA_URL=1]="DATA_URL",r[r.COMPLETE=2]="COMPLETE",r[r.LOADING=4]="LOADING"})(e.STATUS_FLAGS||(e.STATUS_FLAGS={})),function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.JSON=1]="JSON",r[r.XML=2]="XML",r[r.IMAGE=3]="IMAGE",r[r.AUDIO=4]="AUDIO",r[r.VIDEO=5]="VIDEO",r[r.TEXT=6]="TEXT"}(e.TYPE||(e.TYPE={})),function(r){r[r.XHR=1]="XHR",r[r.IMAGE=2]="IMAGE",r[r.AUDIO=3]="AUDIO",r[r.VIDEO=4]="VIDEO"}(e.LOAD_TYPE||(e.LOAD_TYPE={})),function(r){r.DEFAULT="text",r.BUFFER="arraybuffer",r.BLOB="blob",r.DOCUMENT="document",r.JSON="json",r.TEXT="text"}(e.XHR_RESPONSE_TYPE||(e.XHR_RESPONSE_TYPE={})),e._loadTypeMap={gif:e.LOAD_TYPE.IMAGE,png:e.LOAD_TYPE.IMAGE,bmp:e.LOAD_TYPE.IMAGE,jpg:e.LOAD_TYPE.IMAGE,jpeg:e.LOAD_TYPE.IMAGE,tif:e.LOAD_TYPE.IMAGE,tiff:e.LOAD_TYPE.IMAGE,webp:e.LOAD_TYPE.IMAGE,tga:e.LOAD_TYPE.IMAGE,svg:e.LOAD_TYPE.IMAGE,"svg+xml":e.LOAD_TYPE.IMAGE,mp3:e.LOAD_TYPE.AUDIO,ogg:e.LOAD_TYPE.AUDIO,wav:e.LOAD_TYPE.AUDIO,mp4:e.LOAD_TYPE.VIDEO,webm:e.LOAD_TYPE.VIDEO},e._xhrTypeMap={xhtml:e.XHR_RESPONSE_TYPE.DOCUMENT,html:e.XHR_RESPONSE_TYPE.DOCUMENT,htm:e.XHR_RESPONSE_TYPE.DOCUMENT,xml:e.XHR_RESPONSE_TYPE.DOCUMENT,tmx:e.XHR_RESPONSE_TYPE.DOCUMENT,svg:e.XHR_RESPONSE_TYPE.DOCUMENT,tsx:e.XHR_RESPONSE_TYPE.DOCUMENT,gif:e.XHR_RESPONSE_TYPE.BLOB,png:e.XHR_RESPONSE_TYPE.BLOB,bmp:e.XHR_RESPONSE_TYPE.BLOB,jpg:e.XHR_RESPONSE_TYPE.BLOB,jpeg:e.XHR_RESPONSE_TYPE.BLOB,tif:e.XHR_RESPONSE_TYPE.BLOB,tiff:e.XHR_RESPONSE_TYPE.BLOB,webp:e.XHR_RESPONSE_TYPE.BLOB,tga:e.XHR_RESPONSE_TYPE.BLOB,json:e.XHR_RESPONSE_TYPE.JSON,text:e.XHR_RESPONSE_TYPE.TEXT,txt:e.XHR_RESPONSE_TYPE.TEXT,ttf:e.XHR_RESPONSE_TYPE.BUFFER,otf:e.XHR_RESPONSE_TYPE.BUFFER},e.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(ft||(ft={}));function gr(){}function Mg(e){return function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(e===null)throw new Error("Callback was already called.");var o=e;e=null,o.apply(this,n)}}var Gg=function(){function e(r,t){this.data=r,this.callback=t}return e}(),xs=function(){function e(r,t){var n=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=gr,this.unsaturated=gr,this.empty=gr,this.drain=gr,this.error=gr,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(i,o,s){if(s&&typeof s!="function")throw new Error("task callback must be a function");if(n.started=!0,i==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var a=new Gg(i,typeof s=="function"?s:gr);o?n._tasks.unshift(a):n._tasks.push(a),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var i=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(i.data,Mg(n._next(i)))}},this._worker=r,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return e.prototype._next=function(r){var t=this;return function(){for(var n=arguments,i=[],o=0;o<arguments.length;o++)i[o]=n[o];t.workers-=1,r.callback.apply(r,i),i[0]!=null&&t.error(i[0],r.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},e.prototype.push=function(r,t){this._insert(r,!1,t)},e.prototype.kill=function(){this.workers=0,this.drain=gr,this.started=!1,this._tasks=[]},e.prototype.unshift=function(r,t){this._insert(r,!0,t)},e.prototype.length=function(){return this._tasks.length},e.prototype.running=function(){return this.workers},e.prototype.idle=function(){return this._tasks.length+this.workers===0},e.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},e.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var r=1;r<=this.concurrency;r++)this.process()}},e.eachSeries=function(r,t,n,i){var o=0,s=r.length;function a(u){if(u||o===s){n&&n(u);return}i?setTimeout(function(){t(r[o++],a)},1):t(r[o++],a)}a()},e.queue=function(r,t){return new e(r,t)},e}(),bs=100,Bg=/(#[\w-]+)?$/,le=function(){function e(r,t){var n=this;r===void 0&&(r=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this.resources={},this.baseUrl=r,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this._queue=xs.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new Me,this.onError=new Me,this.onLoad=new Me,this.onStart=new Me,this.onComplete=new Me;for(var i=0;i<e._plugins.length;++i){var o=e._plugins[i],s=o.pre,a=o.use;s&&this.pre(s),a&&this.use(a)}this._protected=!1}return e.prototype._add=function(r,t,n,i){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[r])throw new Error('Resource named "'+r+'" already exists.');if(t=this._prepareUrl(t),this.resources[r]=new ft(r,t,n),typeof i=="function"&&this.resources[r].onAfterMiddleware.once(i),this.loading){for(var o=n.parentResource,s=[],a=0;a<o.children.length;++a)o.children[a].isComplete||s.push(o.children[a]);var u=o.progressChunk*(s.length+1),l=u/(s.length+2);o.children.push(this.resources[r]),o.progressChunk=l;for(var a=0;a<s.length;++a)s[a].progressChunk=l;this.resources[r].progressChunk=l}return this._queue.push(this.resources[r]),this},e.prototype.pre=function(r){return this._beforeMiddleware.push(r),this},e.prototype.use=function(r){return this._afterMiddleware.push(r),this},e.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var r in this.resources){var t=this.resources[r];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},e.prototype.load=function(r){if(typeof r=="function"&&this.onComplete.once(r),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,n=bs/t,i=0;i<this._queue._tasks.length;++i)this._queue._tasks[i].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(e.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(r){this._queue.concurrency=r},enumerable:!1,configurable:!0}),e.prototype._prepareUrl=function(r){var t=Mh(r,{strictMode:!0}),n;if(t.protocol||!t.path||r.indexOf("//")===0?n=r:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&r.charAt(0)!=="/"?n=this.baseUrl+"/"+r:n=this.baseUrl+r,this.defaultQueryString){var i=Bg.exec(n)[0];n=n.substr(0,n.length-i.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=i}return n},e.prototype._loadResource=function(r,t){var n=this;r._dequeue=t,xs.eachSeries(this._beforeMiddleware,function(i,o){i.call(n,r,function(){o(r.isComplete?{}:null)})},function(){r.isComplete?n._onLoad(r):(r._onLoadBinding=r.onComplete.once(n._onLoad,n),r.load())},!0)},e.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},e.prototype._onComplete=function(){this.progress=bs,this.loading=!1,this.onComplete.dispatch(this,this.resources)},e.prototype._onLoad=function(r){var t=this;r._onLoadBinding=null,this._resourcesParsing.push(r),r._dequeue(),xs.eachSeries(this._afterMiddleware,function(n,i){n.call(t,r,i)},function(){r.onAfterMiddleware.dispatch(r),t.progress=Math.min(bs,t.progress+r.progressChunk),t.onProgress.dispatch(t,r),r.error?t.onError.dispatch(r.error,t,r):t.onLoad.dispatch(t,r),t._resourcesParsing.splice(t._resourcesParsing.indexOf(r),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},e.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(e,"shared",{get:function(){var r=e._shared;return r||(r=new e,r._protected=!0,e._shared=r),r},enumerable:!1,configurable:!0}),e.registerPlugin=function(r){return e._plugins.push(r),r.add&&r.add(),e},e._plugins=[],e}();le.prototype.add=function(r,t,n,i){if(Array.isArray(r)){for(var o=0;o<r.length;++o)this.add(r[o]);return this}if(typeof r=="object"&&(n=r,i=t||n.callback||n.onComplete,t=n.url,r=n.name||n.key||n.url),typeof t!="string"&&(i=n,n=t,t=r),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(i=n,n=null),this._add(r,t,n,i)};var Dg=function(){function e(){}return e.init=function(r){r=Object.assign({sharedLoader:!1},r),this.loader=r.sharedLoader?le.shared:new le},e.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},e}(),kg=function(){function e(){}return e.add=function(){ft.setExtensionLoadType("svg",ft.LOAD_TYPE.XHR),ft.setExtensionXhrType("svg",ft.XHR_RESPONSE_TYPE.TEXT)},e.use=function(r,t){if(r.data&&(r.type===ft.TYPE.IMAGE||r.extension==="svg")){var n=r.data,i=r.url,o=r.name,s=r.metadata;W.fromLoader(n,i,o,s).then(function(a){r.texture=a,t()}).catch(t)}else t()},e}(),jg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Xg(e){for(var r="",t=0;t<e.length;){for(var n=[0,0,0],i=[0,0,0,0],o=0;o<n.length;++o)t<e.length?n[o]=e.charCodeAt(t++)&255:n[o]=0;i[0]=n[0]>>2,i[1]=(n[0]&3)<<4|n[1]>>4,i[2]=(n[1]&15)<<2|n[2]>>6,i[3]=n[2]&63;var s=t-(e.length-1);switch(s){case 2:i[3]=64,i[2]=64;break;case 1:i[3]=64;break}for(var o=0;o<i.length;++o)r+=jg.charAt(i[o])}return r}var kh=self.URL||self.webkitURL;function Hg(e,r){if(!e.data){r();return}if(e.xhr&&e.xhrType===ft.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof e.data=="string"){var t=e.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){e.data=new Image,e.data.src="data:"+t+";base64,"+Xg(e.xhr.responseText),e.type=ft.TYPE.IMAGE,e.data.onload=function(){e.data.onload=null,r()};return}}else if(e.data.type.indexOf("image")===0){var n=kh.createObjectURL(e.data);e.blob=e.data,e.data=new Image,e.data.src=n,e.type=ft.TYPE.IMAGE,e.data.onload=function(){kh.revokeObjectURL(n),e.data.onload=null,r()};return}}r()}le.registerPlugin({use:Hg});le.registerPlugin(kg);/*!
 * @pixi/compressed-textures - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var dt,Q;(function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",e[e.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})(Q||(Q={}));var xi=(dt={},dt[Q.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,dt[Q.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,dt[Q.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,dt[Q.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,dt[Q.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,dt[Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,dt[Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,dt[Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,dt[Q.COMPRESSED_R11_EAC]=.5,dt[Q.COMPRESSED_SIGNED_R11_EAC]=.5,dt[Q.COMPRESSED_RG11_EAC]=1,dt[Q.COMPRESSED_SIGNED_RG11_EAC]=1,dt[Q.COMPRESSED_RGB8_ETC2]=.5,dt[Q.COMPRESSED_RGBA8_ETC2_EAC]=1,dt[Q.COMPRESSED_SRGB8_ETC2]=.5,dt[Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,dt[Q.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,dt[Q.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,dt[Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,dt[Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,dt[Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,dt[Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,dt[Q.COMPRESSED_RGB_ETC1_WEBGL]=.5,dt[Q.COMPRESSED_RGB_ATC_WEBGL]=.5,dt[Q.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,dt[Q.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,dt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ts=function(e,r){return Ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ts(e,r)};function jh(e,r){Ts(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function zg(e,r,t,n){return new(t||(t=Promise))(function(i,o){function s(l){try{u(n.next(l))}catch(h){o(h)}}function a(l){try{u(n.throw(l))}catch(h){o(h)}}function u(l){l.done?i(l.value):new t(function(h){h(l.value)}).then(s,a)}u((n=n.apply(e,r||[])).next())})}function Vg(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(h){return u([l,h])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=r.call(e,t)}catch(h){l=[6,h],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var $g=function(e){jh(r,e);function r(t,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var i=this,o,s;return typeof t=="string"?(o=t,s=new Uint8Array):(o=null,s=t),i=e.call(this,s,n)||this,i.origin=o,i.buffer=s?new _s(s):null,i.origin&&n.autoLoad!==!1&&i.load(),s&&s.length&&(i.loaded=!0,i.onBlobLoaded(i.buffer.rawBinaryData)),i}return r.prototype.onBlobLoaded=function(t){},r.prototype.load=function(){return zg(this,void 0,Promise,function(){var t,n,i;return Vg(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return n=o.sent(),[4,n.arrayBuffer()];case 3:return i=o.sent(),this.data=new Uint32Array(i),this.buffer=new _s(i),this.loaded=!0,this.onBlobLoaded(i),this.update(),[2,this]}})})},r}(_n),ws=function(e){jh(r,e);function r(t,n){var i=e.call(this,t,n)||this;return i.format=n.format,i.levels=n.levels||1,i._width=n.width,i._height=n.height,i._extension=r._formatToExtension(i.format),(n.levelBuffers||i.buffer)&&(i._levelBuffers=n.levelBuffers||r._createLevelBuffers(t instanceof Uint8Array?t:i.buffer.uint8View,i.format,i.levels,4,4,i.width,i.height)),i}return r.prototype.upload=function(t,n,i){var o=t.gl,s=t.context.extensions[this._extension];if(!s)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var a=0,u=this.levels;a<u;a++){var l=this._levelBuffers[a],h=l.levelID,f=l.levelWidth,c=l.levelHeight,d=l.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,h,this.format,f,c,0,d)}return!0},r.prototype.onBlobLoaded=function(){this._levelBuffers=r._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},r._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},r._createLevelBuffers=function(t,n,i,o,s,a,u){for(var l=new Array(i),h=t.byteOffset,f=a,c=u,d=f+o-1&~(o-1),p=c+s-1&~(s-1),v=d*p*xi[n],_=0;_<i;_++)l[_]={levelID:_,levelWidth:i>1?f:d,levelHeight:i>1?c:p,levelBuffer:new Uint8Array(t.buffer,h,v)},h+=v,f=f>>1||1,c=c>>1||1,d=f+o-1&~(o-1),p=c+s-1&~(s-1),v=d*p*xi[n];return l},r}($g),Wg=function(){function e(){}return e.use=function(r,t){var n=r.data,i=this;if(r.type===ft.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var o=n.textures,s=void 0,a=void 0,u=0,l=o.length;u<l;u++){var h=o[u],f=h.src,c=h.format;if(c||(a=f),e.textureFormats[c]){s=f;break}}if(s=s||a,!s){t(new Error("Cannot load compressed-textures in "+r.url+", make sure you provide a fallback"));return}if(s===r.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:r.crossOrigin,metadata:r.metadata.imageMetadata,parentResource:r},p=Nr.resolve(r.url.replace(i.baseUrl,""),s),v=n.cacheID;i.add(v,p,d,function(_){if(_.error){t(_.error);return}var g=_.texture,b=g===void 0?null:g,w=_.textures,E=w===void 0?{}:w;Object.assign(r,{texture:b,textures:E}),t()})}else t()},e.add=function(){var r=document.createElement("canvas"),t=r.getContext("webgl");if(!t){console.warn("WebGL not available for compressed textures. Silently failing.");return}var n={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};e.textureExtensions=n,e.textureFormats={};for(var i in n){var o=n[i];!o||Object.assign(e.textureFormats,Object.getPrototypeOf(o))}},e}();function Xh(e,r,t){var n={textures:{},texture:null};if(!r)return n;var i=r.map(function(o){return new W(new ut(o,Object.assign({mipmap:we.OFF,alphaMode:Ee.NO_PREMULTIPLIED_ALPHA},t)))});return i.forEach(function(o,s){var a=o.baseTexture,u=e+"-"+(s+1);ut.addToCache(a,u),W.addToCache(o,u),s===0&&(ut.addToCache(a,e),W.addToCache(o,e),n.texture=o),n.textures[u]=o}),n}var Tn,he;ft.setExtensionXhrType("dds",ft.XHR_RESPONSE_TYPE.BUFFER);var Es=4,bi=124,qg=32,Hh=20,Yg=542327876,Ti={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Kg={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},wi={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},fe;(function(e){e[e.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",e[e.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",e[e.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",e[e.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",e[e.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",e[e.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",e[e.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",e[e.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",e[e.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",e[e.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",e[e.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",e[e.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",e[e.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",e[e.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",e[e.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",e[e.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",e[e.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",e[e.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",e[e.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",e[e.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",e[e.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",e[e.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",e[e.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",e[e.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",e[e.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",e[e.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",e[e.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",e[e.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",e[e.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",e[e.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",e[e.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",e[e.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",e[e.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",e[e.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",e[e.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",e[e.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",e[e.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",e[e.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",e[e.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",e[e.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",e[e.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",e[e.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",e[e.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",e[e.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",e[e.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",e[e.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",e[e.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",e[e.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",e[e.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",e[e.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",e[e.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",e[e.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",e[e.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",e[e.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",e[e.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",e[e.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",e[e.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",e[e.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",e[e.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",e[e.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",e[e.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",e[e.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",e[e.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",e[e.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",e[e.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",e[e.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",e[e.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",e[e.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",e[e.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",e[e.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",e[e.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",e[e.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",e[e.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",e[e.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",e[e.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",e[e.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",e[e.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",e[e.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",e[e.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",e[e.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",e[e.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",e[e.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",e[e.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",e[e.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",e[e.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",e[e.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",e[e.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",e[e.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",e[e.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",e[e.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",e[e.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",e[e.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",e[e.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",e[e.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",e[e.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",e[e.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",e[e.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",e[e.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",e[e.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",e[e.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",e[e.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",e[e.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",e[e.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",e[e.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",e[e.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",e[e.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",e[e.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",e[e.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",e[e.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",e[e.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",e[e.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",e[e.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",e[e.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",e[e.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",e[e.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",e[e.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",e[e.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",e[e.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",e[e.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",e[e.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(fe||(fe={}));var Cs;(function(e){e[e.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",e[e.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",e[e.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(Cs||(Cs={}));var Zg=1,Jg=2,Qg=4,ty=64,ey=512,ry=131072,ny=827611204,iy=861165636,oy=894720068,sy=808540228,ay=4,uy=(Tn={},Tn[ny]=Q.COMPRESSED_RGBA_S3TC_DXT1_EXT,Tn[iy]=Q.COMPRESSED_RGBA_S3TC_DXT3_EXT,Tn[oy]=Q.COMPRESSED_RGBA_S3TC_DXT5_EXT,Tn),ly=(he={},he[fe.DXGI_FORMAT_BC1_TYPELESS]=Q.COMPRESSED_RGBA_S3TC_DXT1_EXT,he[fe.DXGI_FORMAT_BC1_UNORM]=Q.COMPRESSED_RGBA_S3TC_DXT1_EXT,he[fe.DXGI_FORMAT_BC2_TYPELESS]=Q.COMPRESSED_RGBA_S3TC_DXT3_EXT,he[fe.DXGI_FORMAT_BC2_UNORM]=Q.COMPRESSED_RGBA_S3TC_DXT3_EXT,he[fe.DXGI_FORMAT_BC3_TYPELESS]=Q.COMPRESSED_RGBA_S3TC_DXT5_EXT,he[fe.DXGI_FORMAT_BC3_UNORM]=Q.COMPRESSED_RGBA_S3TC_DXT5_EXT,he[fe.DXGI_FORMAT_BC1_UNORM_SRGB]=Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,he[fe.DXGI_FORMAT_BC2_UNORM_SRGB]=Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,he[fe.DXGI_FORMAT_BC3_UNORM_SRGB]=Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,he),hy=function(){function e(){}return e.use=function(r,t){if(r.extension==="dds"&&r.data)try{Object.assign(r,Xh(r.name||r.url,e.parse(r.data),r.metadata))}catch(n){t(n);return}t()},e.parse=function(r){var t=new Uint32Array(r),n=t[0];if(n!==Yg)throw new Error("Invalid DDS file magic word");var i=new Uint32Array(r,0,bi/Uint32Array.BYTES_PER_ELEMENT),o=i[Ti.HEIGHT],s=i[Ti.WIDTH],a=i[Ti.MIPMAP_COUNT],u=new Uint32Array(r,Ti.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,qg/Uint32Array.BYTES_PER_ELEMENT),l=u[Zg];if(l&Qg){var h=u[Kg.FOURCC];if(h!==sy){var f=uy[h],c=Es+bi,d=new Uint8Array(r,c),p=new ws(d,{format:f,width:s,height:o,levels:a});return[p]}var v=Es+bi,_=new Uint32Array(t.buffer,v,Hh/Uint32Array.BYTES_PER_ELEMENT),g=_[wi.DXGI_FORMAT],b=_[wi.RESOURCE_DIMENSION],w=_[wi.MISC_FLAG],E=_[wi.ARRAY_SIZE],T=ly[g];if(T===void 0)throw new Error("DDSLoader cannot parse texture data with DXGI format "+g);if(w===ay)throw new Error("DDSLoader does not support cubemap textures");if(b===Cs.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSLoader does not supported 3D texture data");var x=new Array,I=Es+bi+Hh;if(E===1)x.push(new Uint8Array(r,I));else{for(var U=xi[T],C=0,N=s,L=o,B=0;B<a;B++){var D=Math.max(1,N+3&~3),et=Math.max(1,L+3&~3),F=D*et*U;C+=F,N=N>>>1,L=L>>>1}for(var A=I,B=0;B<E;B++)x.push(new Uint8Array(r,A,C)),A+=C}return x.map(function(K){return new ws(K,{format:T,width:s,height:o,levels:a})})}throw l&ty?new Error("DDSLoader does not support uncompressed texture data."):l&ey?new Error("DDSLoader does not supported YUV uncompressed texture data."):l&ry?new Error("DDSLoader does not support single-channel (lumninance) texture data!"):l&Jg?new Error("DDSLoader does not support single-channel (alpha) texture data!"):new Error("DDSLoader failed to load a texture file due to an unknown reason!")},e}(),Gr,yr,wn;ft.setExtensionXhrType("ktx",ft.XHR_RESPONSE_TYPE.BUFFER);var zh=[171,75,84,88,32,49,49,187,13,10,26,10],fy=67305985,ce={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},cy=64,Vh=(Gr={},Gr[q.UNSIGNED_BYTE]=1,Gr[q.UNSIGNED_SHORT]=2,Gr[q.FLOAT]=4,Gr[q.HALF_FLOAT]=8,Gr),dy=(yr={},yr[G.RGBA]=4,yr[G.RGB]=3,yr[G.LUMINANCE]=1,yr[G.LUMINANCE_ALPHA]=2,yr[G.ALPHA]=1,yr),py=(wn={},wn[q.UNSIGNED_SHORT_4_4_4_4]=2,wn[q.UNSIGNED_SHORT_5_5_5_1]=2,wn[q.UNSIGNED_SHORT_5_6_5]=2,wn),vy=function(){function e(){}return e.use=function(r,t){if(r.extension==="ktx"&&r.data)try{var n=r.name||r.url;Object.assign(r,Xh(n,e.parse(n,r.data),r.metadata))}catch(i){t(i);return}t()},e.parse=function(r,t){var n=new DataView(t);if(!e.validate(r,n))return null;var i=n.getUint32(ce.ENDIANNESS,!0)===fy,o=n.getUint32(ce.GL_TYPE,i),s=n.getUint32(ce.GL_FORMAT,i),a=n.getUint32(ce.GL_INTERNAL_FORMAT,i),u=n.getUint32(ce.PIXEL_WIDTH,i),l=n.getUint32(ce.PIXEL_HEIGHT,i)||1,h=n.getUint32(ce.PIXEL_DEPTH,i)||1,f=n.getUint32(ce.NUMBER_OF_ARRAY_ELEMENTS,i)||1,c=n.getUint32(ce.NUMBER_OF_FACES,i),d=n.getUint32(ce.NUMBER_OF_MIPMAP_LEVELS,i),p=n.getUint32(ce.BYTES_OF_KEY_VALUE_DATA,i);if(l===0||h!==1)throw new Error("Only 2D textures are supported");if(c!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(f!==1)throw new Error("WebGL does not support array textures");var v=4,_=4,g=u+3&~3,b=l+3&~3,w=new Array(f),E=u*l;o===0&&(E=g*b);var T;if(o!==0?Vh[o]?T=Vh[o]*dy[s]:T=py[o]:T=xi[a],T===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var x=E*T,I=x,U=u,C=l,N=g,L=b,B=cy+p,D=0;D<d;D++){for(var et=n.getUint32(B,i),F=B+4,A=0;A<f;A++){var K=w[A];K||(K=w[A]=new Array(d)),K[D]={levelID:D,levelWidth:d>1?U:N,levelHeight:d>1?C:L,levelBuffer:new Uint8Array(t,F,I)},F+=I}B+=et+4,B=B%4!=0?B+4-B%4:B,U=U>>1||1,C=C>>1||1,N=U+v-1&~(v-1),L=C+_-1&~(_-1),I=N*L*T}if(o!==0)throw new Error("TODO: Uncompressed");return w.map(function(bt){return new ws(null,{format:a,width:u,height:l,levels:d,levelBuffers:bt})})},e.validate=function(r,t){for(var n=0;n<zh.length;n++)if(t.getUint8(n)!==zh[n])return console.error(r+" is not a valid *.ktx file!"),!1;return!0},e}();/*!
 * @pixi/particle-container - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ps=function(e,r){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ps(e,r)};function $h(e,r){Ps(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}(function(e){$h(r,e);function r(t,n,i,o){t===void 0&&(t=1500),i===void 0&&(i=16384),o===void 0&&(o=!1);var s=e.call(this)||this,a=16384;return i>a&&(i=a),s._properties=[!1,!0,!1,!1,!1],s._maxSize=t,s._batchSize=i,s._buffers=null,s._bufferUpdateIDs=[],s._updateID=0,s.interactiveChildren=!1,s.blendMode=z.NORMAL,s.autoResize=o,s.roundPixels=!0,s.baseTexture=null,s.setProperties(n),s._tint=0,s.tintRgb=new Float32Array(4),s.tint=16777215,s}return r.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},r.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,kt(t,this.tintRgb)},enumerable:!1,configurable:!0}),r.prototype.render=function(t){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},r.prototype.onChildrenChange=function(t){for(var n=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},r.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},r.prototype.destroy=function(t){e.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},r})(Ie);var Wh=function(){function e(r,t,n){this.geometry=new mn,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<r.length;++i){var o=r[i];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||q.FLOAT,offset:o.offset},t[i]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return e.prototype.initBuffers=function(){var r=this.geometry,t=0;this.indexBuffer=new Bt(Vm(this.size),!0,!0),r.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];i.offset=t,t+=i.size,this.dynamicStride+=i.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new Bt(this.dynamicData,!1,!1);var s=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];i.offset=s,s+=i.size,this.staticStride+=i.size}var a=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(a),this.staticDataUint32=new Uint32Array(a),this.staticBuffer=new Bt(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];r.addAttribute(i.attributeName,this.dynamicBuffer,0,i.type===q.UNSIGNED_BYTE,i.type,this.dynamicStride*4,i.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];r.addAttribute(i.attributeName,this.staticBuffer,0,i.type===q.UNSIGNED_BYTE,i.type,this.staticStride*4,i.offset*4)}},e.prototype.uploadDynamic=function(r,t,n){for(var i=0;i<this.dynamicProperties.length;i++){var o=this.dynamicProperties[i];o.uploadFunction(r,t,n,o.type===q.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},e.prototype.uploadStatic=function(r,t,n){for(var i=0;i<this.staticProperties.length;i++){var o=this.staticProperties[i];o.uploadFunction(r,t,n,o.type===q.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},e.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},e}(),_y=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,my=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,gy=function(e){$h(r,e);function r(t){var n=e.call(this,t)||this;return n.shader=null,n.properties=null,n.tempMatrix=new Nt,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:q.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=He.from(my,_y,{}),n.state=_r.for2d(),n}return r.prototype.render=function(t){var n=t.children,i=t._maxSize,o=t._batchSize,s=this.renderer,a=n.length;if(a!==0){a>i&&!t.autoResize&&(a=i);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var l=n[0]._texture.baseTexture;this.state.blendMode=fl(t.blendMode,l.alphaMode),s.state.set(this.state);var h=s.gl,f=t.worldTransform.copyTo(this.tempMatrix);f.prepend(s.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=zm(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,l.alphaMode),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var c=!1,d=0,p=0;d<a;d+=o,p+=1){var v=a-d;v>o&&(v=o),p>=u.length&&u.push(this._generateOneMoreBuffer(t));var _=u[p];_.uploadDynamic(n,d,v);var g=t._bufferUpdateIDs[p]||0;c=c||_._updateID<g,c&&(_._updateID=t._updateID,_.uploadStatic(n,d,v)),s.geometry.bind(_.geometry),h.drawElements(h.TRIANGLES,v*6,h.UNSIGNED_SHORT,0)}}},r.prototype.generateBuffers=function(t){for(var n=[],i=t._maxSize,o=t._batchSize,s=t._properties,a=0;a<i;a+=o)n.push(new Wh(this.properties,s,o));return n},r.prototype._generateOneMoreBuffer=function(t){var n=t._batchSize,i=t._properties;return new Wh(this.properties,i,n)},r.prototype.uploadVertices=function(t,n,i,o,s,a){for(var u=0,l=0,h=0,f=0,c=0;c<i;++c){var d=t[n+c],p=d._texture,v=d.scale.x,_=d.scale.y,g=p.trim,b=p.orig;g?(l=g.x-d.anchor.x*b.width,u=l+g.width,f=g.y-d.anchor.y*b.height,h=f+g.height):(u=b.width*(1-d.anchor.x),l=b.width*-d.anchor.x,h=b.height*(1-d.anchor.y),f=b.height*-d.anchor.y),o[a]=l*v,o[a+1]=f*_,o[a+s]=u*v,o[a+s+1]=f*_,o[a+s*2]=u*v,o[a+s*2+1]=h*_,o[a+s*3]=l*v,o[a+s*3+1]=h*_,a+=s*4}},r.prototype.uploadPosition=function(t,n,i,o,s,a){for(var u=0;u<i;u++){var l=t[n+u].position;o[a]=l.x,o[a+1]=l.y,o[a+s]=l.x,o[a+s+1]=l.y,o[a+s*2]=l.x,o[a+s*2+1]=l.y,o[a+s*3]=l.x,o[a+s*3+1]=l.y,a+=s*4}},r.prototype.uploadRotation=function(t,n,i,o,s,a){for(var u=0;u<i;u++){var l=t[n+u].rotation;o[a]=l,o[a+s]=l,o[a+s*2]=l,o[a+s*3]=l,a+=s*4}},r.prototype.uploadUvs=function(t,n,i,o,s,a){for(var u=0;u<i;++u){var l=t[n+u]._texture._uvs;l?(o[a]=l.x0,o[a+1]=l.y0,o[a+s]=l.x1,o[a+s+1]=l.y1,o[a+s*2]=l.x2,o[a+s*2+1]=l.y2,o[a+s*3]=l.x3,o[a+s*3+1]=l.y3,a+=s*4):(o[a]=0,o[a+1]=0,o[a+s]=0,o[a+s+1]=0,o[a+s*2]=0,o[a+s*2+1]=0,o[a+s*3]=0,o[a+s*3+1]=0,a+=s*4)}},r.prototype.uploadTint=function(t,n,i,o,s,a){for(var u=0;u<i;++u){var l=t[n+u],h=l._texture.baseTexture.alphaMode>0,f=l.alpha,c=f<1&&h?jo(l._tintRGB,f):l._tintRGB+(f*255<<24);o[a]=c,o[a+s]=c,o[a+s*2]=c,o[a+s*3]=c,a+=s*4}},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},r}(di);/*!
 * @pixi/graphics - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ve;(function(e){e.MITER="miter",e.BEVEL="bevel",e.ROUND="round"})(Ve||(Ve={}));var $e;(function(e){e.BUTT="butt",e.ROUND="round",e.SQUARE="square"})($e||($e={}));var En={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(e,r){if(r===void 0&&(r=20),!this.adaptive||!e||isNaN(e))return r;var t=Math.ceil(e/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},qh=function(){function e(){this.color=16777215,this.alpha=1,this.texture=W.WHITE,this.matrix=null,this.visible=!1,this.reset()}return e.prototype.clone=function(){var r=new e;return r.color=this.color,r.alpha=this.alpha,r.texture=this.texture,r.matrix=this.matrix,r.visible=this.visible,r},e.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=W.WHITE,this.matrix=null,this.visible=!1},e.prototype.destroy=function(){this.texture=null,this.matrix=null},e}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Is=function(e,r){return Is=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Is(e,r)};function Rs(e,r){Is(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Yh={build:function(e){e.points=e.shape.points.slice()},triangulate:function(e,r){var t=e.points,n=e.holes,i=r.points,o=r.indices;if(t.length>=6){for(var s=[],a=0;a<n.length;a++){var u=n[a];s.push(t.length/2),t=t.concat(u.points)}var l=rl(t,s,2);if(!l)return;for(var h=i.length/2,a=0;a<l.length;a+=3)o.push(l[a]+h),o.push(l[a+1]+h),o.push(l[a+2]+h);for(var a=0;a<t.length;a++)i.push(t[a])}}},Kh={build:function(e){var r=e.shape,t=e.points,n=r.x,i=r.y,o,s;if(t.length=0,e.type===St.CIRC)o=r.radius,s=r.radius;else{var a=e.shape;o=a.width,s=a.height}if(!(o===0||s===0)){var u=Math.floor(30*Math.sqrt(r.radius))||Math.floor(15*Math.sqrt(o+s));u/=2.3;for(var l=Math.PI*2/u,h=0;h<u-.5;h++)t.push(n+Math.sin(-l*h)*o,i+Math.cos(-l*h)*s);t.push(t[0],t[1])}},triangulate:function(e,r){var t=e.points,n=r.points,i=r.indices,o=n.length/2,s=o,a=e.shape,u=e.matrix,l=a.x,h=a.y;n.push(e.matrix?u.a*l+u.c*h+u.tx:l,e.matrix?u.b*l+u.d*h+u.ty:h);for(var f=0;f<t.length;f+=2)n.push(t[f],t[f+1]),i.push(o++,s,o)}},yy={build:function(e){var r=e.shape,t=r.x,n=r.y,i=r.width,o=r.height,s=e.points;s.length=0,s.push(t,n,t+i,n,t+i,n+o,t,n+o)},triangulate:function(e,r){var t=e.points,n=r.points,i=n.length/2;n.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),r.indices.push(i,i+1,i+2,i+1,i+2,i+3)}};function Br(e,r,t){var n=r-e;return e+n*t}function Ei(e,r,t,n,i,o,s){s===void 0&&(s=[]);for(var a=20,u=s,l=0,h=0,f=0,c=0,d=0,p=0,v=0,_=0;v<=a;++v)_=v/a,l=Br(e,t,_),h=Br(r,n,_),f=Br(t,i,_),c=Br(n,o,_),d=Br(l,f,_),p=Br(h,c,_),!(v===0&&u[u.length-2]===d&&u[u.length-1]===p)&&u.push(d,p);return u}var xy={build:function(e){var r=e.shape,t=e.points,n=r.x,i=r.y,o=r.width,s=r.height,a=Math.max(0,Math.min(r.radius,Math.min(o,s)/2));t.length=0,a?(Ei(n,i+a,n,i,n+a,i,t),Ei(n+o-a,i,n+o,i,n+o,i+a,t),Ei(n+o,i+s-a,n+o,i+s,n+o-a,i+s,t),Ei(n+a,i+s,n,i+s,n,i+s-a,t)):t.push(n,i,n+o,i,n+o,i+s,n,i+s)},triangulate:function(e,r){for(var t=e.points,n=r.points,i=r.indices,o=n.length/2,s=rl(t,null,2),a=0,u=s.length;a<u;a+=3)i.push(s[a]+o),i.push(s[a+1]+o),i.push(s[a+2]+o);for(var a=0,u=t.length;a<u;a++)n.push(t[a],t[++a])}};function Zh(e,r,t,n,i,o,s,a){var u=e-t*i,l=r-n*i,h=e+t*o,f=r+n*o,c,d;s?(c=n,d=-t):(c=-n,d=t);var p=u+c,v=l+d,_=h+c,g=f+d;return a.push(p,v),a.push(_,g),2}function Dr(e,r,t,n,i,o,s,a){var u=t-e,l=n-r,h=Math.atan2(u,l),f=Math.atan2(i-e,o-r);a&&h<f?h+=Math.PI*2:!a&&h>f&&(f+=Math.PI*2);var c=h,d=f-h,p=Math.abs(d),v=Math.sqrt(u*u+l*l),_=(15*p*Math.sqrt(v)/Math.PI>>0)+1,g=d/_;if(c+=g,a){s.push(e,r),s.push(t,n);for(var b=1,w=c;b<_;b++,w+=g)s.push(e,r),s.push(e+Math.sin(w)*v,r+Math.cos(w)*v);s.push(e,r),s.push(i,o)}else{s.push(t,n),s.push(e,r);for(var b=1,w=c;b<_;b++,w+=g)s.push(e+Math.sin(w)*v,r+Math.cos(w)*v),s.push(e,r);s.push(i,o),s.push(e,r)}return _*2}function by(e,r){var t=e.shape,n=e.points||t.points.slice(),i=r.closePointEps;if(n.length!==0){var o=e.lineStyle,s=new at(n[0],n[1]),a=new at(n[n.length-2],n[n.length-1]),u=t.type!==St.POLY||t.closeStroke,l=Math.abs(s.x-a.x)<i&&Math.abs(s.y-a.y)<i;if(u){n=n.slice(),l&&(n.pop(),n.pop(),a.set(n[n.length-2],n[n.length-1]));var h=(s.x+a.x)*.5,f=(a.y+s.y)*.5;n.unshift(h,f),n.push(h,f)}var c=r.points,d=n.length/2,p=n.length,v=c.length/2,_=o.width/2,g=_*_,b=o.miterLimit*o.miterLimit,w=n[0],E=n[1],T=n[2],x=n[3],I=0,U=0,C=-(E-x),N=w-T,L=0,B=0,D=Math.sqrt(C*C+N*N);C/=D,N/=D,C*=_,N*=_;var et=o.alignment,F=(1-et)*2,A=et*2;u||(o.cap===$e.ROUND?p+=Dr(w-C*(F-A)*.5,E-N*(F-A)*.5,w-C*F,E-N*F,w+C*A,E+N*A,c,!0)+2:o.cap===$e.SQUARE&&(p+=Zh(w,E,C,N,F,A,!0,c))),c.push(w-C*F,E-N*F),c.push(w+C*A,E+N*A);for(var K=1;K<d-1;++K){w=n[(K-1)*2],E=n[(K-1)*2+1],T=n[K*2],x=n[K*2+1],I=n[(K+1)*2],U=n[(K+1)*2+1],C=-(E-x),N=w-T,D=Math.sqrt(C*C+N*N),C/=D,N/=D,C*=_,N*=_,L=-(x-U),B=T-I,D=Math.sqrt(L*L+B*B),L/=D,B/=D,L*=_,B*=_;var bt=T-w,Mt=E-x,S=T-I,H=U-x,Z=Mt*S-H*bt,rt=Z<0;if(Math.abs(Z)<.1){c.push(T-C*F,x-N*F),c.push(T+C*A,x+N*A);continue}var lt=(-C+w)*(-N+x)-(-C+T)*(-N+E),gt=(-L+I)*(-B+x)-(-L+T)*(-B+U),ht=(bt*gt-S*lt)/Z,yt=(H*lt-Mt*gt)/Z,Et=(ht-T)*(ht-T)+(yt-x)*(yt-x),pt=T+(ht-T)*F,xt=x+(yt-x)*F,ot=T-(ht-T)*A,vt=x-(yt-x)*A,tt=Math.min(bt*bt+Mt*Mt,S*S+H*H),Gt=rt?F:A,At=tt+Gt*Gt*g,nt=Et<=At;nt?o.join===Ve.BEVEL||Et/g>b?(rt?(c.push(pt,xt),c.push(T+C*A,x+N*A),c.push(pt,xt),c.push(T+L*A,x+B*A)):(c.push(T-C*F,x-N*F),c.push(ot,vt),c.push(T-L*F,x-B*F),c.push(ot,vt)),p+=2):o.join===Ve.ROUND?rt?(c.push(pt,xt),c.push(T+C*A,x+N*A),p+=Dr(T,x,T+C*A,x+N*A,T+L*A,x+B*A,c,!0)+4,c.push(pt,xt),c.push(T+L*A,x+B*A)):(c.push(T-C*F,x-N*F),c.push(ot,vt),p+=Dr(T,x,T-C*F,x-N*F,T-L*F,x-B*F,c,!1)+4,c.push(T-L*F,x-B*F),c.push(ot,vt)):(c.push(pt,xt),c.push(ot,vt)):(c.push(T-C*F,x-N*F),c.push(T+C*A,x+N*A),o.join===Ve.BEVEL||Et/g>b||(o.join===Ve.ROUND?rt?p+=Dr(T,x,T+C*A,x+N*A,T+L*A,x+B*A,c,!0)+2:p+=Dr(T,x,T-C*F,x-N*F,T-L*F,x-B*F,c,!1)+2:(rt?(c.push(ot,vt),c.push(ot,vt)):(c.push(pt,xt),c.push(pt,xt)),p+=2)),c.push(T-L*F,x-B*F),c.push(T+L*A,x+B*A),p+=2)}w=n[(d-2)*2],E=n[(d-2)*2+1],T=n[(d-1)*2],x=n[(d-1)*2+1],C=-(E-x),N=w-T,D=Math.sqrt(C*C+N*N),C/=D,N/=D,C*=_,N*=_,c.push(T-C*F,x-N*F),c.push(T+C*A,x+N*A),u||(o.cap===$e.ROUND?p+=Dr(T-C*(F-A)*.5,x-N*(F-A)*.5,T-C*F,x-N*F,T+C*A,x+N*A,c,!1)+2:o.cap===$e.SQUARE&&(p+=Zh(T,x,C,N,F,A,!1,c)));for(var ee=r.indices,De=En.epsilon*En.epsilon,K=v;K<p+v-2;++K)w=c[K*2],E=c[K*2+1],T=c[(K+1)*2],x=c[(K+1)*2+1],I=c[(K+2)*2],U=c[(K+2)*2+1],!(Math.abs(w*(x-U)+T*(U-E)+I*(E-x))<De)&&ee.push(K,K+1,K+2)}}function Ty(e,r){var t=0,n=e.shape,i=e.points||n.points,o=n.type!==St.POLY||n.closeStroke;if(i.length!==0){var s=r.points,a=r.indices,u=i.length/2,l=s.length/2,h=l;for(s.push(i[0],i[1]),t=1;t<u;t++)s.push(i[t*2],i[t*2+1]),a.push(h,h+1),h++;o&&a.push(h,l)}}function Jh(e,r){e.lineStyle.native?Ty(e,r):by(e,r)}var Qh=function(){function e(){}return e.curveTo=function(r,t,n,i,o,s){var a=s[s.length-2],u=s[s.length-1],l=u-t,h=a-r,f=i-t,c=n-r,d=Math.abs(l*c-h*f);if(d<1e-8||o===0)return(s[s.length-2]!==r||s[s.length-1]!==t)&&s.push(r,t),null;var p=l*l+h*h,v=f*f+c*c,_=l*f+h*c,g=o*Math.sqrt(p)/d,b=o*Math.sqrt(v)/d,w=g*_/p,E=b*_/v,T=g*c+b*h,x=g*f+b*l,I=h*(b+w),U=l*(b+w),C=c*(g+E),N=f*(g+E),L=Math.atan2(U-x,I-T),B=Math.atan2(N-x,C-T);return{cx:T+r,cy:x+t,radius:o,startAngle:L,endAngle:B,anticlockwise:h*f>c*l}},e.arc=function(r,t,n,i,o,s,a,u,l){for(var h=a-s,f=En._segmentsCount(Math.abs(h)*o,Math.ceil(Math.abs(h)/ii)*40),c=h/(f*2),d=c*2,p=Math.cos(c),v=Math.sin(c),_=f-1,g=_%1/_,b=0;b<=_;++b){var w=b+g*b,E=c+s+d*w,T=Math.cos(E),x=-Math.sin(E);l.push((p*T+v*x)*o+n,(p*-x+v*T)*o+i)}},e}(),wy=function(){function e(){}return e.curveLength=function(r,t,n,i,o,s,a,u){for(var l=10,h=0,f=0,c=0,d=0,p=0,v=0,_=0,g=0,b=0,w=0,E=0,T=r,x=t,I=1;I<=l;++I)f=I/l,c=f*f,d=c*f,p=1-f,v=p*p,_=v*p,g=_*r+3*v*f*n+3*p*c*o+d*a,b=_*t+3*v*f*i+3*p*c*s+d*u,w=T-g,E=x-b,T=g,x=b,h+=Math.sqrt(w*w+E*E);return h},e.curveTo=function(r,t,n,i,o,s,a){var u=a[a.length-2],l=a[a.length-1];a.length-=2;var h=En._segmentsCount(e.curveLength(u,l,r,t,n,i,o,s)),f=0,c=0,d=0,p=0,v=0;a.push(u,l);for(var _=1,g=0;_<=h;++_)g=_/h,f=1-g,c=f*f,d=c*f,p=g*g,v=p*g,a.push(d*u+3*c*g*r+3*f*p*n+v*o,d*l+3*c*g*t+3*f*p*i+v*s)},e}(),Ey=function(){function e(){}return e.curveLength=function(r,t,n,i,o,s){var a=r-2*n+o,u=t-2*i+s,l=2*n-2*r,h=2*i-2*t,f=4*(a*a+u*u),c=4*(a*l+u*h),d=l*l+h*h,p=2*Math.sqrt(f+c+d),v=Math.sqrt(f),_=2*f*v,g=2*Math.sqrt(d),b=c/v;return(_*p+v*c*(p-g)+(4*d*f-c*c)*Math.log((2*v+b+p)/(b+g)))/(4*_)},e.curveTo=function(r,t,n,i,o){for(var s=o[o.length-2],a=o[o.length-1],u=En._segmentsCount(e.curveLength(s,a,r,t,n,i)),l=0,h=0,f=1;f<=u;++f){var c=f/u;l=s+(r-s)*c,h=a+(t-a)*c,o.push(l+(r+(n-r)*c-l)*c,h+(t+(i-t)*c-h)*c)}},e}(),Cy=function(){function e(){this.reset()}return e.prototype.begin=function(r,t,n){this.reset(),this.style=r,this.start=t,this.attribStart=n},e.prototype.end=function(r,t){this.attribSize=t-this.attribStart,this.size=r-this.start},e.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},e}(),xr,Os=(xr={},xr[St.POLY]=Yh,xr[St.CIRC]=Kh,xr[St.ELIP]=Kh,xr[St.RECT]=yy,xr[St.RREC]=xy,xr),tf=[],Ci=[];function Py(e){for(var r=e.points,t=0,n=0;n<r.length-2;n+=2)t+=(r[n+2]-r[n])*(r[n+3]+r[n+1]);return t>0}var ef=function(){function e(r,t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=null),this.points=[],this.holes=[],this.shape=r,this.lineStyle=n,this.fillStyle=t,this.matrix=i,this.type=r.type}return e.prototype.clone=function(){return new e(this.shape,this.fillStyle,this.lineStyle,this.matrix)},e.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},e}(),kr=new at,Iy=new vn,Ry=function(e){Rs(r,e);function r(){var t=e.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new vn,t.boundsDirty=-1,t}return Object.defineProperty(r.prototype,"bounds",{get:function(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),r.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),Ci.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var n=this.batches[t];n.reset(),tf.push(n)}this.batches.length=0},r.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},r.prototype.drawShape=function(t,n,i,o){n===void 0&&(n=null),i===void 0&&(i=null),o===void 0&&(o=null);var s=new ef(t,n,i,o);return this.graphicsData.push(s),this.dirty++,this},r.prototype.drawHole=function(t,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var i=new ef(t,null,null,n),o=this.graphicsData[this.graphicsData.length-1];return i.lineStyle=o.lineStyle,o.holes.push(i),this.dirty++,this},r.prototype.destroy=function(){e.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},r.prototype.containsPoint=function(t){for(var n=this.graphicsData,i=0;i<n.length;++i){var o=n[i];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,kr):kr.copyFrom(t),o.shape.contains(kr.x,kr.y))){var s=!1;if(o.holes)for(var a=0;a<o.holes.length;a++){var u=o.holes[a];if(u.shape.contains(kr.x,kr.y)){s=!0;break}}if(!s)return!0}}return!1},r.prototype.updateBatches=function(t){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var n=this.uvs,i=this.graphicsData,o=null,s=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],s=o.style);for(var a=this.shapeIndex;a<i.length;a++){this.shapeIndex++;var u=i[a],l=u.fillStyle,h=u.lineStyle,f=Os[u.type];f.build(u),u.matrix&&this.transformPoints(u.points,u.matrix);for(var c=0;c<2;c++){var d=c===0?l:h;if(!!d.visible){var p=d.texture.baseTexture,v=this.indices.length,_=this.points.length/2;p.wrapMode=Ne.REPEAT,c===0?this.processFill(u):this.processLine(u);var g=this.points.length/2-_;g!==0&&(o&&!this._compareStyles(s,d)&&(o.end(v,_),o=null),o||(o=tf.pop()||new Cy,o.begin(d,v,_),this.batches.push(o),s=d),this.addUvs(this.points,n,d.texture,_,g,d.matrix))}}}var b=this.indices.length,w=this.points.length/2;if(o&&o.end(b,w),this.batches.length===0){this.batchable=!0;return}if(this.indicesUint16&&this.indices.length===this.indicesUint16.length)this.indicesUint16.set(this.indices);else{var E=w>65535&&t;this.indicesUint16=E?new Uint32Array(this.indices):new Uint16Array(this.indices)}this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},r.prototype._compareStyles=function(t,n){return!(!t||!n||t.texture.baseTexture!==n.texture.baseTexture||t.color+t.alpha!==n.color+n.alpha||!!t.native!=!!n.native)},r.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,n=this.graphicsData.length;t<n;t++){var i=this.graphicsData[t],o=i.fillStyle,s=i.lineStyle;if(o&&!o.texture.baseTexture.valid||s&&!s.texture.baseTexture.valid)return!1}return!0},r.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,n=0,i=t.length;n<i;n++)for(var o=t[n],s=0;s<o.size;s++){var a=o.start+s;this.indicesUint16[a]=this.indicesUint16[a]-o.attribStart}},r.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,n=0;n<t.length;n++)if(t[n].style.native)return!1;return this.points.length<r.BATCHABLE_SIZE*2},r.prototype.buildDrawCalls=function(){for(var t=++ut._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),Ci.push(this.drawCalls[n]);this.drawCalls.length=0;var i=this.colors,o=this.textureIds,s=Ci.pop();s||(s=new ps,s.texArray=new vs),s.texArray.count=0,s.start=0,s.size=0,s.type=ae.TRIANGLES;var a=0,u=null,l=0,h=!1,f=ae.TRIANGLES,c=0;this.drawCalls.push(s);for(var n=0;n<this.batches.length;n++){var d=this.batches[n],p=8,v=d.style,_=v.texture.baseTexture;h!==!!v.native&&(h=!!v.native,f=h?ae.LINES:ae.TRIANGLES,u=null,a=p,t++),u!==_&&(u=_,_._batchEnabled!==t&&(a===p&&(t++,a=0,s.size>0&&(s=Ci.pop(),s||(s=new ps,s.texArray=new vs),this.drawCalls.push(s)),s.start=c,s.size=0,s.texArray.count=0,s.type=f),_.touched=1,_._batchEnabled=t,_._batchLocation=a,_.wrapMode=Ne.REPEAT,s.texArray.elements[s.texArray.count++]=_,a++)),s.size+=d.size,c+=d.size,l=_._batchLocation,this.addColors(i,v.color,v.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,l,d.attribSize,d.attribStart)}ut._globalBatch=t,this.packAttributes()},r.prototype.packAttributes=function(){for(var t=this.points,n=this.uvs,i=this.colors,o=this.textureIds,s=new ArrayBuffer(t.length*3*4),a=new Float32Array(s),u=new Uint32Array(s),l=0,h=0;h<t.length/2;h++)a[l++]=t[h*2],a[l++]=t[h*2+1],a[l++]=n[h*2],a[l++]=n[h*2+1],u[l++]=i[h],a[l++]=o[h];this._buffer.update(s),this._indexBuffer.update(this.indicesUint16)},r.prototype.processFill=function(t){if(t.holes.length)this.processHoles(t.holes),Yh.triangulate(t,this);else{var n=Os[t.type];n.triangulate(t,this)}},r.prototype.processLine=function(t){Jh(t,this);for(var n=0;n<t.holes.length;n++)Jh(t.holes[n],this)},r.prototype.processHoles=function(t){for(var n=0;n<t.length;n++){var i=t[n],o=Os[i.type];o.build(i),i.matrix&&this.transformPoints(i.points,i.matrix)}},r.prototype.calculateBounds=function(){var t=this._bounds,n=Iy,i=Nt.IDENTITY;this._bounds.clear(),n.clear();for(var o=0;o<this.graphicsData.length;o++){var s=this.graphicsData[o],a=s.shape,u=s.type,l=s.lineStyle,h=s.matrix||Nt.IDENTITY,f=0;if(l&&l.visible){var c=l.alignment;f=l.width,u===St.POLY?Py(a)?f=f*(1-c):f=f*c:f=f*Math.max(0,c)}if(i!==h&&(n.isEmpty()||(t.addBoundsMatrix(n,i),n.clear()),i=h),u===St.RECT||u===St.RREC){var d=a;n.addFramePad(d.x,d.y,d.x+d.width,d.y+d.height,f,f)}else if(u===St.CIRC){var p=a;n.addFramePad(p.x,p.y,p.x,p.y,p.radius+f,p.radius+f)}else if(u===St.ELIP){var v=a;n.addFramePad(v.x,v.y,v.x,v.y,v.width+f,v.height+f)}else{var _=a;t.addVerticesMatrix(i,_.points,0,_.points.length,f,f)}}n.isEmpty()||t.addBoundsMatrix(n,i),t.pad(this.boundsPadding,this.boundsPadding)},r.prototype.transformPoints=function(t,n){for(var i=0;i<t.length/2;i++){var o=t[i*2],s=t[i*2+1];t[i*2]=n.a*o+n.c*s+n.tx,t[i*2+1]=n.b*o+n.d*s+n.ty}},r.prototype.addColors=function(t,n,i,o,s){s===void 0&&(s=0);var a=(n>>16)+(n&65280)+((n&255)<<16),u=jo(a,i);t.length=Math.max(t.length,s+o);for(var l=0;l<o;l++)t[s+l]=u},r.prototype.addTextureIds=function(t,n,i,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+i);for(var s=0;s<i;s++)t[o+s]=n},r.prototype.addUvs=function(t,n,i,o,s,a){a===void 0&&(a=null);for(var u=0,l=n.length,h=i.frame;u<s;){var f=t[(o+u)*2],c=t[(o+u)*2+1];if(a){var d=a.a*f+a.c*c+a.tx;c=a.b*f+a.d*c+a.ty,f=d}u++,n.push(f/h.width,c/h.height)}var p=i.baseTexture;(h.width<p.width||h.height<p.height)&&this.adjustUvs(n,i,l,s)},r.prototype.adjustUvs=function(t,n,i,o){for(var s=n.baseTexture,a=1e-6,u=i+o*2,l=n.frame,h=l.width/s.width,f=l.height/s.height,c=l.x/l.width,d=l.y/l.height,p=Math.floor(t[i]+a),v=Math.floor(t[i+1]+a),_=i+2;_<u;_+=2)p=Math.min(p,Math.floor(t[_]+a)),v=Math.min(v,Math.floor(t[_+1]+a));c-=p,d-=v;for(var _=i;_<u;_+=2)t[_]=(t[_]+c)*h,t[_+1]=(t[_+1]+d)*f},r.BATCHABLE_SIZE=100,r}(Ah),Oy=function(e){Rs(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=$e.BUTT,t.join=Ve.MITER,t.miterLimit=10,t}return r.prototype.clone=function(){var t=new r;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},r.prototype.reset=function(){e.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},r}(qh),Ay=new Float32Array(3),As={},rf=function(e){Rs(r,e);function r(t){t===void 0&&(t=null);var n=e.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new qh,n._lineStyle=new Oy,n._matrix=null,n._holeMode=!1,n.state=_r.for2d(),n._geometry=t||new Ry,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=z.NORMAL,n}return Object.defineProperty(r.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return this.finishPoly(),new r(this._geometry)},Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),r.prototype.lineStyle=function(t,n,i,o,s){return t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=.5),s===void 0&&(s=!1),typeof t=="number"&&(t={width:t,color:n,alpha:i,alignment:o,native:s}),this.lineTextureStyle(t)},r.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:W.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:$e.BUTT,join:Ve.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var n=t.width>0&&t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:n},t)):this._lineStyle.reset(),this},r.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new oi,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[n-2],t[n-1]))}else this.currentPath=new oi,this.currentPath.closeStroke=!1},r.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},r.prototype.moveTo=function(t,n){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=n,this},r.prototype.lineTo=function(t,n){this.currentPath||this.moveTo(0,0);var i=this.currentPath.points,o=i[i.length-2],s=i[i.length-1];return(o!==t||s!==n)&&i.push(t,n),this},r.prototype._initCurve=function(t,n){t===void 0&&(t=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,n]):this.moveTo(t,n)},r.prototype.quadraticCurveTo=function(t,n,i,o){this._initCurve();var s=this.currentPath.points;return s.length===0&&this.moveTo(0,0),Ey.curveTo(t,n,i,o,s),this},r.prototype.bezierCurveTo=function(t,n,i,o,s,a){return this._initCurve(),wy.curveTo(t,n,i,o,s,a,this.currentPath.points),this},r.prototype.arcTo=function(t,n,i,o,s){this._initCurve(t,n);var a=this.currentPath.points,u=Qh.curveTo(t,n,i,o,s,a);if(u){var l=u.cx,h=u.cy,f=u.radius,c=u.startAngle,d=u.endAngle,p=u.anticlockwise;this.arc(l,h,f,c,d,p)}return this},r.prototype.arc=function(t,n,i,o,s,a){if(a===void 0&&(a=!1),o===s)return this;!a&&s<=o?s+=ii:a&&o<=s&&(o+=ii);var u=s-o;if(u===0)return this;var l=t+Math.cos(o)*i,h=n+Math.sin(o)*i,f=this._geometry.closePointEps,c=this.currentPath?this.currentPath.points:null;if(c){var d=Math.abs(c[c.length-2]-l),p=Math.abs(c[c.length-1]-h);d<f&&p<f||c.push(l,h)}else this.moveTo(l,h),c=this.currentPath.points;return Qh.arc(l,h,t,n,i,o,s,a,c),this},r.prototype.beginFill=function(t,n){return t===void 0&&(t=0),n===void 0&&(n=1),this.beginTextureFill({texture:W.WHITE,color:t,alpha:n})},r.prototype.beginTextureFill=function(t){t=Object.assign({texture:W.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var n=t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:n},t)):this._fillStyle.reset(),this},r.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},r.prototype.drawRect=function(t,n,i,o){return this.drawShape(new it(t,n,i,o))},r.prototype.drawRoundedRect=function(t,n,i,o,s){return this.drawShape(new Jm(t,n,i,o,s))},r.prototype.drawCircle=function(t,n,i){return this.drawShape(new Km(t,n,i))},r.prototype.drawEllipse=function(t,n,i,o){return this.drawShape(new Zm(t,n,i,o))},r.prototype.drawPolygon=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];var o,s=!0,a=n[0];a.points?(s=a.closeStroke,o=a.points):Array.isArray(n[0])?o=n[0]:o=n;var u=new oi(o);return u.closeStroke=s,this.drawShape(u),this},r.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},r.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},r.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===St.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},r.prototype._render=function(t){this.finishPoly();var n=this._geometry,i=t.context.supports.uint32Indices;n.updateBatches(i),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},r.prototype._populateBatches=function(){var t=this._geometry,n=this.blendMode,i=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=i,this.vertexData=new Float32Array(t.points);for(var o=0;o<i;o++){var s=t.batches[o],a=s.style.color,u=new Float32Array(this.vertexData.buffer,s.attribStart*4*2,s.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,s.attribStart*4*2,s.attribSize*2),h=new Uint16Array(t.indicesUint16.buffer,s.start*2,s.size),f={vertexData:u,blendMode:n,indices:h,uvs:l,_batchRGB:kt(a),_tintRGB:a,_texture:s.style.texture,alpha:s.style.alpha,worldAlpha:1};this.batches[o]=f}},r.prototype._renderBatched=function(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,i=this.batches.length;n<i;n++){var o=this.batches[n];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},r.prototype._renderDirect=function(t){var n=this._resolveDirectShader(t),i=this._geometry,o=this.tint,s=this.worldAlpha,a=n.uniforms,u=i.drawCalls;a.translationMatrix=this.transform.worldTransform,a.tint[0]=(o>>16&255)/255*s,a.tint[1]=(o>>8&255)/255*s,a.tint[2]=(o&255)/255*s,a.tint[3]=s,t.shader.bind(n),t.geometry.bind(i,n),t.state.set(this.state);for(var l=0,h=u.length;l<h;l++)this._renderDrawCallDirect(t,i.drawCalls[l])},r.prototype._renderDrawCallDirect=function(t,n){for(var i=n.texArray,o=n.type,s=n.size,a=n.start,u=i.count,l=0;l<u;l++)t.texture.bind(i.elements[l],l);t.geometry.draw(o,s,a)},r.prototype._resolveDirectShader=function(t){var n=this.shader,i=this.pluginName;if(!n){if(!As[i]){for(var o=t.plugins.batch.MAX_TEXTURES,s=new Int32Array(o),a=0;a<o;a++)s[a]=a;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new Nt,default:vr.from({uSamplers:s},!0)},l=t.plugins[i]._shader.program;As[i]=new He(l,u)}n=As[i]}return n},r.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(!!t.graphicsData.length){var n=t.bounds,i=n.minX,o=n.minY,s=n.maxX,a=n.maxY;this._bounds.addFrame(this.transform,i,o,s,a)}},r.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,r._TEMP_POINT),this._geometry.containsPoint(r._TEMP_POINT)},r.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=kt(this.tint,Ay),n=0;n<this.batches.length;n++){var i=this.batches[n],o=i._batchRGB,s=t[0]*o[0]*255,a=t[1]*o[1]*255,u=t[2]*o[2]*255,l=(s<<16)+(a<<8)+(u|0);i._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},r.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var n=this.transform.worldTransform,i=n.a,o=n.b,s=n.c,a=n.d,u=n.tx,l=n.ty,h=this._geometry.points,f=this.vertexData,c=0,d=0;d<h.length;d+=2){var p=h[d],v=h[d+1];f[c++]=i*p+s*v+u,f[c++]=a*v+o*p+l}}},r.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},r.prototype.setMatrix=function(t){return this._matrix=t,this},r.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},r.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},r.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,e.prototype.destroy.call(this,t)},r._TEMP_POINT=new at,r}(Ie);/*!
 * @pixi/sprite - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ss=function(e,r){return Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ss(e,r)};function Sy(e,r){Ss(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Cn=new at,Ny=new Uint16Array([0,1,2,0,2,3]),Pn=function(e){Sy(r,e);function r(t){var n=e.call(this)||this;return n._anchor=new lr(n._onAnchorUpdate,n,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=z.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=t||W.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=Ny,n.pluginName="batch",n.isSprite=!0,n._roundPixels=k.ROUND_PIXELS,n}return r.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=Ur(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=Ur(this.scale.y)*this._height/this._texture.orig.height)},r.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},r.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var n=this.transform.worldTransform,i=n.a,o=n.b,s=n.c,a=n.d,u=n.tx,l=n.ty,h=this.vertexData,f=t.trim,c=t.orig,d=this._anchor,p=0,v=0,_=0,g=0;if(f?(v=f.x-d._x*c.width,p=v+f.width,g=f.y-d._y*c.height,_=g+f.height):(v=-d._x*c.width,p=v+c.width,g=-d._y*c.height,_=g+c.height),h[0]=i*v+s*g+u,h[1]=a*g+o*v+l,h[2]=i*p+s*g+u,h[3]=a*g+o*p+l,h[4]=i*p+s*_+u,h[5]=a*_+o*p+l,h[6]=i*v+s*_+u,h[7]=a*_+o*v+l,this._roundPixels)for(var b=k.RESOLUTION,w=0;w<h.length;++w)h[w]=Math.round((h[w]*b|0)/b)}},r.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,n=this.vertexTrimmedData,i=t.orig,o=this._anchor,s=this.transform.worldTransform,a=s.a,u=s.b,l=s.c,h=s.d,f=s.tx,c=s.ty,d=-o._x*i.width,p=d+i.width,v=-o._y*i.height,_=v+i.height;n[0]=a*d+l*v+f,n[1]=h*v+u*d+c,n[2]=a*p+l*v+f,n[3]=h*v+u*p+c,n[4]=a*p+l*_+f,n[5]=h*_+u*p+c,n[6]=a*d+l*_+f,n[7]=h*_+u*d+c},r.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},r.prototype._calculateBounds=function(){var t=this._texture.trim,n=this._texture.orig;!t||t.width===n.width&&t.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},r.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new vn),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new it),t=this._localBoundsRect),this._localBounds.getRectangle(t)):e.prototype.getLocalBounds.call(this,t)},r.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Cn);var n=this._texture.orig.width,i=this._texture.orig.height,o=-n*this.anchor.x,s=0;return!!(Cn.x>=o&&Cn.x<o+n&&(s=-i*this.anchor.y,Cn.y>=s&&Cn.y<s+i))},r.prototype.destroy=function(t){e.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof t=="boolean"?t:t&&t.texture;if(n){var i=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!i)}this._texture=null},r.from=function(t,n){var i=t instanceof W?t:W.from(t,n);return new r(i)},Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var n=Ur(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var n=Ur(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||W.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),r}(Ie);/*!
 * @pixi/text - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ns=function(e,r){return Ns=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ns(e,r)};function Fy(e,r){Ns(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var In;(function(e){e[e.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",e[e.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(In||(In={}));var Fs={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:In.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},Uy=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],jr=function(){function e(r){this.styleID=0,this.reset(),Ls(this,r,r)}return e.prototype.clone=function(){var r={};return Ls(r,this,Fs),new e(r)},e.prototype.reset=function(){Ls(this,Fs,Fs)},Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(r){this._align!==r&&(this._align=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"breakWords",{get:function(){return this._breakWords},set:function(r){this._breakWords!==r&&(this._breakWords=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(r){this._dropShadow!==r&&(this._dropShadow=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(r){this._dropShadowAlpha!==r&&(this._dropShadowAlpha=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(r){this._dropShadowAngle!==r&&(this._dropShadowAngle=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(r){this._dropShadowBlur!==r&&(this._dropShadowBlur=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(r){var t=Us(r);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(r){this._dropShadowDistance!==r&&(this._dropShadowDistance=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fill},set:function(r){var t=Us(r);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(r){this._fillGradientType!==r&&(this._fillGradientType=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(r){Ly(this._fillGradientStops,r)||(this._fillGradientStops=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(r){this.fontFamily!==r&&(this._fontFamily=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(r){this._fontSize!==r&&(this._fontSize=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(r){this._fontStyle!==r&&(this._fontStyle=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(r){this._fontVariant!==r&&(this._fontVariant=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(r){this._fontWeight!==r&&(this._fontWeight=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(r){this._letterSpacing!==r&&(this._letterSpacing=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(r){this._lineHeight!==r&&(this._lineHeight=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leading",{get:function(){return this._leading},set:function(r){this._leading!==r&&(this._leading=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(r){this._lineJoin!==r&&(this._lineJoin=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(r){this._miterLimit!==r&&(this._miterLimit=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"padding",{get:function(){return this._padding},set:function(r){this._padding!==r&&(this._padding=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stroke",{get:function(){return this._stroke},set:function(r){var t=Us(r);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(r){this._strokeThickness!==r&&(this._strokeThickness=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(r){this._textBaseline!==r&&(this._textBaseline=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trim",{get:function(){return this._trim},set:function(r){this._trim!==r&&(this._trim=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(r){this._whiteSpace!==r&&(this._whiteSpace=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(r){this._wordWrap!==r&&(this._wordWrap=r,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(r){this._wordWrapWidth!==r&&(this._wordWrapWidth=r,this.styleID++)},enumerable:!1,configurable:!0}),e.prototype.toFontString=function(){var r=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var n=t.length-1;n>=0;n--){var i=t[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&Uy.indexOf(i)<0&&(i='"'+i+'"'),t[n]=i}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+r+" "+t.join(",")},e}();function nf(e){return typeof e=="number"?ul(e):(typeof e=="string"&&e.indexOf("0x")===0&&(e=e.replace("0x","#")),e)}function Us(e){if(Array.isArray(e)){for(var r=0;r<e.length;++r)e[r]=nf(e[r]);return e}else return nf(e)}function Ly(e,r){if(!Array.isArray(e)||!Array.isArray(r)||e.length!==r.length)return!1;for(var t=0;t<e.length;++t)if(e[t]!==r[t])return!1;return!0}function Ls(e,r,t){for(var n in t)Array.isArray(r[n])?e[n]=r[n].slice():e[n]=r[n]}var ne=function(){function e(r,t,n,i,o,s,a,u,l){this.text=r,this.style=t,this.width=n,this.height=i,this.lines=o,this.lineWidths=s,this.lineHeight=a,this.maxLineWidth=u,this.fontProperties=l}return e.measureText=function(r,t,n,i){i===void 0&&(i=e._canvas),n=n==null?t.wordWrap:n;var o=t.toFontString(),s=e.measureFont(o);s.fontSize===0&&(s.fontSize=t.fontSize,s.ascent=t.fontSize);var a=i.getContext("2d");a.font=o;for(var u=n?e.wordWrap(r,t,i):r,l=u.split(/(?:\r\n|\r|\n)/),h=new Array(l.length),f=0,c=0;c<l.length;c++){var d=a.measureText(l[c]).width+(l[c].length-1)*t.letterSpacing;h[c]=d,f=Math.max(f,d)}var p=f+t.strokeThickness;t.dropShadow&&(p+=t.dropShadowDistance);var v=t.lineHeight||s.fontSize+t.strokeThickness,_=Math.max(v,s.fontSize+t.strokeThickness)+(l.length-1)*(v+t.leading);return t.dropShadow&&(_+=t.dropShadowDistance),new e(r,t,p,_,l,h,v+t.leading,f,s)},e.wordWrap=function(r,t,n){n===void 0&&(n=e._canvas);for(var i=n.getContext("2d"),o=0,s="",a="",u=Object.create(null),l=t.letterSpacing,h=t.whiteSpace,f=e.collapseSpaces(h),c=e.collapseNewlines(h),d=!f,p=t.wordWrapWidth+l,v=e.tokenize(r),_=0;_<v.length;_++){var g=v[_];if(e.isNewline(g)){if(!c){a+=e.addLine(s),d=!f,s="",o=0;continue}g=" "}if(f){var b=e.isBreakingSpace(g),w=e.isBreakingSpace(s[s.length-1]);if(b&&w)continue}var E=e.getFromCache(g,l,u,i);if(E>p)if(s!==""&&(a+=e.addLine(s),s="",o=0),e.canBreakWords(g,t.breakWords))for(var T=e.wordWrapSplit(g),x=0;x<T.length;x++){for(var I=T[x],U=1;T[x+U];){var C=T[x+U],N=I[I.length-1];if(!e.canBreakChars(N,C,g,x,t.breakWords))I+=C;else break;U++}x+=I.length-1;var L=e.getFromCache(I,l,u,i);L+o>p&&(a+=e.addLine(s),d=!1,s="",o=0),s+=I,o+=L}else{s.length>0&&(a+=e.addLine(s),s="",o=0);var B=_===v.length-1;a+=e.addLine(g,!B),d=!1,s="",o=0}else E+o>p&&(d=!1,a+=e.addLine(s),s="",o=0),(s.length>0||!e.isBreakingSpace(g)||d)&&(s+=g,o+=E)}return a+=e.addLine(s,!1),a},e.addLine=function(r,t){return t===void 0&&(t=!0),r=e.trimRight(r),r=t?r+`
`:r,r},e.getFromCache=function(r,t,n,i){var o=n[r];if(typeof o!="number"){var s=r.length*t;o=i.measureText(r).width+s,n[r]=o}return o},e.collapseSpaces=function(r){return r==="normal"||r==="pre-line"},e.collapseNewlines=function(r){return r==="normal"},e.trimRight=function(r){if(typeof r!="string")return"";for(var t=r.length-1;t>=0;t--){var n=r[t];if(!e.isBreakingSpace(n))break;r=r.slice(0,-1)}return r},e.isNewline=function(r){return typeof r!="string"?!1:e._newlines.indexOf(r.charCodeAt(0))>=0},e.isBreakingSpace=function(r,t){return typeof r!="string"?!1:e._breakingSpaces.indexOf(r.charCodeAt(0))>=0},e.tokenize=function(r){var t=[],n="";if(typeof r!="string")return t;for(var i=0;i<r.length;i++){var o=r[i],s=r[i+1];if(e.isBreakingSpace(o,s)||e.isNewline(o)){n!==""&&(t.push(n),n=""),t.push(o);continue}n+=o}return n!==""&&t.push(n),t},e.canBreakWords=function(r,t){return t},e.canBreakChars=function(r,t,n,i,o){return!0},e.wordWrapSplit=function(r){return r.split("")},e.measureFont=function(r){if(e._fonts[r])return e._fonts[r];var t={ascent:0,descent:0,fontSize:0},n=e._canvas,i=e._context;i.font=r;var o=e.METRICS_STRING+e.BASELINE_SYMBOL,s=Math.ceil(i.measureText(o).width),a=Math.ceil(i.measureText(e.BASELINE_SYMBOL).width),u=Math.ceil(e.HEIGHT_MULTIPLIER*a);a=a*e.BASELINE_MULTIPLIER|0,n.width=s,n.height=u,i.fillStyle="#f00",i.fillRect(0,0,s,u),i.font=r,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(o,0,a);var l=i.getImageData(0,0,s,u).data,h=l.length,f=s*4,c=0,d=0,p=!1;for(c=0;c<a;++c){for(var v=0;v<f;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d+=f;else break}for(t.ascent=a-c,d=h-f,p=!1,c=u;c>a;--c){for(var v=0;v<f;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d-=f;else break}return t.descent=c-a,t.fontSize=t.ascent+t.descent,e._fonts[r]=t,t},e.clearMetrics=function(r){r===void 0&&(r=""),r?delete e._fonts[r]:e._fonts={}},e}(),Pi=function(){try{var e=new OffscreenCanvas(0,0),r=e.getContext("2d");return r&&r.measureText?e:document.createElement("canvas")}catch{return document.createElement("canvas")}}();Pi.width=Pi.height=10;ne._canvas=Pi;ne._context=Pi.getContext("2d");ne._fonts={};ne.METRICS_STRING="|\xC9q\xC5";ne.BASELINE_SYMBOL="M";ne.BASELINE_MULTIPLIER=1.4;ne.HEIGHT_MULTIPLIER=2;ne._newlines=[10,13];ne._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var My={texture:!0,children:!1,baseTexture:!0},of=function(e){Fy(r,e);function r(t,n,i){var o=this,s=!1;i||(i=document.createElement("canvas"),s=!0),i.width=3,i.height=3;var a=W.from(i);return a.orig=new it,a.trim=new it,o=e.call(this,a)||this,o._ownCanvas=s,o.canvas=i,o.context=o.canvas.getContext("2d"),o._resolution=k.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=n,o.localStyleID=-1,o}return r.prototype.updateText=function(t){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var i=this.context,o=ne.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),s=o.width,a=o.height,u=o.lines,l=o.lineHeight,h=o.lineWidths,f=o.maxLineWidth,c=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,s)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,a)+n.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=n.strokeThickness,i.textBaseline=n.textBaseline,i.lineJoin=n.lineJoin,i.miterLimit=n.miterLimit;for(var d,p,v=n.dropShadow?2:1,_=0;_<v;++_){var g=n.dropShadow&&_===0,b=g?Math.ceil(Math.max(1,a)+n.padding*2):0,w=b*this._resolution;if(g){i.fillStyle="black",i.strokeStyle="black";var E=n.dropShadowColor,T=kt(typeof E=="number"?E:ll(E)),x=n.dropShadowBlur*this._resolution,I=n.dropShadowDistance*this._resolution;i.shadowColor="rgba("+T[0]*255+","+T[1]*255+","+T[2]*255+","+n.dropShadowAlpha+")",i.shadowBlur=x,i.shadowOffsetX=Math.cos(n.dropShadowAngle)*I,i.shadowOffsetY=Math.sin(n.dropShadowAngle)*I+w}else i.fillStyle=this._generateFillStyle(n,u,o),i.strokeStyle=n.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;var U=(l-c.fontSize)/2;(!r.nextLineHeightBehavior||l-c.fontSize<0)&&(U=0);for(var C=0;C<u.length;C++)d=n.strokeThickness/2,p=n.strokeThickness/2+C*l+c.ascent+U,n.align==="right"?d+=f-h[C]:n.align==="center"&&(d+=(f-h[C])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(u[C],d+n.padding,p+n.padding-b,!0),n.fill&&this.drawLetterSpacing(u[C],d+n.padding,p+n.padding-b)}this.updateTexture()}},r.prototype.drawLetterSpacing=function(t,n,i,o){o===void 0&&(o=!1);var s=this._style,a=s.letterSpacing,u="letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype;if(a===0||u){u&&(this.context.letterSpacing=a,this.context.textLetterSpacing=a),o?this.context.strokeText(t,n,i):this.context.fillText(t,n,i);return}for(var l=n,h=Array.from?Array.from(t):t.split(""),f=this.context.measureText(t).width,c=0,d=0;d<h.length;++d){var p=h[d];o?this.context.strokeText(p,l,i):this.context.fillText(p,l,i);for(var v="",_=d+1;_<h.length;++_)v+=h[_];c=this.context.measureText(v).width,l+=f-c+a,f=c}},r.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var n=Wm(t);n.data&&(t.width=n.width,t.height=n.height,this.context.putImageData(n.data,0,0))}var i=this._texture,o=this._style,s=o.trim?0:o.padding,a=i.baseTexture;i.trim.width=i._frame.width=t.width/this._resolution,i.trim.height=i._frame.height=t.height/this._resolution,i.trim.x=-s,i.trim.y=-s,i.orig.width=i._frame.width-s*2,i.orig.height=i._frame.height-s*2,this._onTextureUpdate(),a.setRealSize(t.width,t.height,this._resolution),i.updateUvs(),this._recursivePostUpdateTransform(),this.dirty=!1},r.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),e.prototype._render.call(this,t)},r.prototype.getLocalBounds=function(t){return this.updateText(!0),e.prototype.getLocalBounds.call(this,t)},r.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},r.prototype._generateFillStyle=function(t,n,i){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var s,a=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,l=this.canvas.width/this._resolution-a-u*2,h=this.canvas.height/this._resolution-a-u*2,f=o.slice(),c=t.fillGradientStops.slice();if(!c.length)for(var d=f.length+1,p=1;p<d;++p)c.push(p/d);if(f.unshift(o[0]),c.unshift(0),f.push(o[o.length-1]),c.push(1),t.fillGradientType===In.LINEAR_VERTICAL){s=this.context.createLinearGradient(l/2,u,l/2,h+u);for(var v=i.fontProperties.fontSize+t.strokeThickness,p=0;p<n.length;p++){var _=i.lineHeight*(p-1)+v,g=i.lineHeight*p,b=g;p>0&&_>g&&(b=(g+_)/2);var w=g+v,E=i.lineHeight*(p+1),T=w;p+1<n.length&&E<w&&(T=(w+E)/2);for(var x=(T-b)/h,I=0;I<f.length;I++){var U=0;typeof c[I]=="number"?U=c[I]:U=I/f.length;var C=Math.min(1,Math.max(0,b/h+U*x));C=Number(C.toFixed(5)),s.addColorStop(C,f[I])}}}else{s=this.context.createLinearGradient(u,h/2,l+u,h/2);for(var N=f.length+1,L=1,p=0;p<f.length;p++){var B=void 0;typeof c[p]=="number"?B=c[p]:B=L/N,s.addColorStop(B,f[p]),L++}}return s},r.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},My,t),e.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var n=Ur(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var n=Ur(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof jr?this._style=t:this._style=new jr(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),r.nextLineHeightBehavior=!1,r}(Pn);/*!
 * @pixi/prepare - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */k.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ms=function(e,r){return Ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ms(e,r)};function Gy(e,r){Ms(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var By=function(){function e(r){this.maxItemsPerFrame=r,this.itemsLeft=0}return e.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},e.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},e}();function Dy(e,r){var t=!1;if(e&&e._textures&&e._textures.length){for(var n=0;n<e._textures.length;n++)if(e._textures[n]instanceof W){var i=e._textures[n].baseTexture;r.indexOf(i)===-1&&(r.push(i),t=!0)}}return t}function ky(e,r){if(e.baseTexture instanceof ut){var t=e.baseTexture;return r.indexOf(t)===-1&&r.push(t),!0}return!1}function jy(e,r){if(e._texture&&e._texture instanceof W){var t=e._texture.baseTexture;return r.indexOf(t)===-1&&r.push(t),!0}return!1}function Xy(e,r){return r instanceof of?(r.updateText(!0),!0):!1}function Hy(e,r){if(r instanceof jr){var t=r.toFontString();return ne.measureFont(t),!0}return!1}function zy(e,r){if(e instanceof of){r.indexOf(e.style)===-1&&r.push(e.style),r.indexOf(e)===-1&&r.push(e);var t=e._texture.baseTexture;return r.indexOf(t)===-1&&r.push(t),!0}return!1}function Vy(e,r){return e instanceof jr?(r.indexOf(e)===-1&&r.push(e),!0):!1}var $y=function(){function e(r){var t=this;this.limiter=new By(k.UPLOADS_PER_FRAME),this.renderer=r,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!t.queue||t.prepareItems()},this.registerFindHook(zy),this.registerFindHook(Vy),this.registerFindHook(Dy),this.registerFindHook(ky),this.registerFindHook(jy),this.registerUploadHook(Xy),this.registerUploadHook(Hy)}return e.prototype.upload=function(r,t){typeof r=="function"&&(t=r,r=null),r&&this.add(r),this.queue.length?(t&&this.completes.push(t),this.ticking||(this.ticking=!0,Rt.system.addOnce(this.tick,this,Ue.UTILITY))):t&&t()},e.prototype.tick=function(){setTimeout(this.delayedTick,0)},e.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var r=this.queue[0],t=!1;if(r&&!r._destroyed){for(var n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this.uploadHookHelper,r)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)Rt.system.addOnce(this.tick,this,Ue.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var n=0,i=o.length;n<i;n++)o[n]()}},e.prototype.registerFindHook=function(r){return r&&this.addHooks.push(r),this},e.prototype.registerUploadHook=function(r){return r&&this.uploadHooks.push(r),this},e.prototype.add=function(r){for(var t=0,n=this.addHooks.length;t<n&&!this.addHooks[t](r,this.queue);t++);if(r instanceof Ie)for(var t=r.children.length-1;t>=0;t--)this.add(r.children[t]);return this},e.prototype.destroy=function(){this.ticking&&Rt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},e}();function sf(e,r){return r instanceof ut?(r._glTextures[e.CONTEXT_UID]||e.texture.bind(r),!0):!1}function Wy(e,r){if(!(r instanceof rf))return!1;var t=r.geometry;r.finishPoly(),t.updateBatches();for(var n=t.batches,i=0;i<n.length;i++){var o=n[i].style.texture;o&&sf(e,o.baseTexture)}return t.batchable||e.geometry.bind(t,r._resolveDirectShader(e)),!0}function qy(e,r){return e instanceof rf?(r.push(e),!0):!1}var Yy=function(e){Gy(r,e);function r(t){var n=e.call(this,t)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(qy),n.registerUploadHook(sf),n.registerUploadHook(Wy),n}return r}($y);/*!
 * @pixi/spritesheet - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ky=function(){function e(r,t,n){n===void 0&&(n=null),this._texture=r instanceof W?r:null,this.baseTexture=r instanceof ut?r:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var i=this.baseTexture.resource;this.resolution=this._updateResolution(n||(i?i.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return e.prototype._updateResolution=function(r){r===void 0&&(r=null);var t=this.data.meta.scale,n=ni(r,null);return n===null&&(n=t!==void 0?parseFloat(t):1),n!==1&&this.baseTexture.setResolution(n),n},e.prototype.parse=function(r){this._batchIndex=0,this._callback=r,this._frameKeys.length<=e.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},e.prototype._processFrames=function(r){for(var t=r,n=e.BATCH_SIZE;t-r<n&&t<this._frameKeys.length;){var i=this._frameKeys[t],o=this._frames[i],s=o.frame;if(s){var a=null,u=null,l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,h=new it(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?a=new it(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):a=new it(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new it(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[i]=new W(this.baseTexture,a,h,u,o.rotated?2:0,o.anchor),W.addToCache(this.textures[i],i)}t++}},e.prototype._processAnimations=function(){var r=this.data.animations||{};for(var t in r){this.animations[t]=[];for(var n=0;n<r[t].length;n++){var i=r[t][n];this.animations[t].push(this.textures[i])}}},e.prototype._parseComplete=function(){var r=this._callback;this._callback=null,this._batchIndex=0,r.call(this,this.textures)},e.prototype._nextBatch=function(){var r=this;this._processFrames(this._batchIndex*e.BATCH_SIZE),this._batchIndex++,setTimeout(function(){r._batchIndex*e.BATCH_SIZE<r._frameKeys.length?r._nextBatch():(r._processAnimations(),r._parseComplete())},0)},e.prototype.destroy=function(r){var t;r===void 0&&(r=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,r&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},e.BATCH_SIZE=1e3,e}(),Zy=function(){function e(){}return e.use=function(r,t){var n,i,o=this,s=r.name+"_image";if(!r.data||r.type!==ft.TYPE.JSON||!r.data.frames||o.resources[s]){t();return}var a=(i=(n=r.data)===null||n===void 0?void 0:n.meta)===null||i===void 0?void 0:i.related_multi_packs;if(Array.isArray(a))for(var u=function(p){if(typeof p!="string")return"continue";var v=p.replace(".json",""),_=Nr.resolve(r.url.replace(o.baseUrl,""),p);if(o.resources[v]||Object.values(o.resources).some(function(b){return Nr.format(Nr.parse(b.url))===_}))return"continue";var g={crossOrigin:r.crossOrigin,loadType:ft.LOAD_TYPE.XHR,xhrType:ft.XHR_RESPONSE_TYPE.JSON,parentResource:r,metadata:r.metadata};o.add(v,_,g)},l=0,h=a;l<h.length;l++){var f=h[l];u(f)}var c={crossOrigin:r.crossOrigin,metadata:r.metadata.imageMetadata,parentResource:r},d=e.getResourcePath(r,o.baseUrl);o.add(s,d,c,function(v){if(v.error){t(v.error);return}var _=new Ky(v.texture,r.data,r.url);_.parse(function(){r.spritesheet=_,r.textures=_.textures,t()})})},e.getResourcePath=function(r,t){return r.isDataUrl?r.data.meta.image:Nr.resolve(r.url.replace(t,""),r.data.meta.image)},e}();/*!
 * @pixi/sprite-tiling - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Gs=function(e,r){return Gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Gs(e,r)};function af(e,r){Gs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Rn=new at;(function(e){af(r,e);function r(t,n,i){n===void 0&&(n=100),i===void 0&&(i=100);var o=e.call(this,t)||this;return o.tileTransform=new xl,o._width=n,o._height=i,o.uvMatrix=o.texture.uvMatrix||new fs(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(r.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),r.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},r.prototype._render=function(t){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},r.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,n=this._height*-this._anchor._y,i=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,n,i,o)},r.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new it),t=this._localBoundsRect),this._bounds.getRectangle(t)):e.prototype.getLocalBounds.call(this,t)},r.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Rn);var n=this._width,i=this._height,o=-n*this.anchor._x;if(Rn.x>=o&&Rn.x<o+n){var s=-i*this.anchor._y;if(Rn.y>=s&&Rn.y<s+i)return!0}return!1},r.prototype.destroy=function(t){e.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},r.from=function(t,n){var i=t instanceof W?t:W.from(t,n);return new r(i,n.width,n.height)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),r})(Pn);var Jy=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,uf=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,Qy=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,tx=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,ex=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,Ii=new Nt,rx=function(e){af(r,e);function r(t){var n=e.call(this,t)||this;return t.runners.contextChange.add(n),n.quad=new th,n.state=_r.for2d(),n}return r.prototype.contextChange=function(){var t=this.renderer,n={globals:t.globalUniforms};this.simpleShader=He.from(uf,Jy,n),this.shader=t.context.webGLVersion>1?He.from(tx,ex,n):He.from(uf,Qy,n)},r.prototype.render=function(t){var n=this.renderer,i=this.quad,o=i.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var s=t.uvRespectAnchor?t.anchor.x:0,a=t.uvRespectAnchor?t.anchor.y:0;o=i.uvs,o[0]=o[6]=-s,o[1]=o[3]=-a,o[2]=o[4]=1-s,o[5]=o[7]=1-a,i.invalidate();var u=t._texture,l=u.baseTexture,h=t.tileTransform.localTransform,f=t.uvMatrix,c=l.isPowerOfTwo&&u.frame.width===l.width&&u.frame.height===l.height;c&&(l._glTextures[n.CONTEXT_UID]?c=l.wrapMode!==Ne.CLAMP:l.wrapMode===Ne.CLAMP&&(l.wrapMode=Ne.REPEAT));var d=c?this.simpleShader:this.shader,p=u.width,v=u.height,_=t._width,g=t._height;Ii.set(h.a*p/_,h.b*p/g,h.c*v/_,h.d*v/g,h.tx/_,h.ty/g),Ii.invert(),c?Ii.prepend(f.mapCoord):(d.uniforms.uMapCoord=f.mapCoord.toArray(!0),d.uniforms.uClampFrame=f.uClampFrame,d.uniforms.uClampOffset=f.uClampOffset),d.uniforms.uTransform=Ii.toArray(!0),d.uniforms.uColor=cl(t.tint,t.worldAlpha,d.uniforms.uColor,l.alphaMode),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=u,n.shader.bind(d),n.geometry.bind(i),this.state.blendMode=fl(t.blendMode,l.alphaMode),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},r}(di);/*!
 * @pixi/mesh - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Bs=function(e,r){return Bs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Bs(e,r)};function Ds(e,r){Bs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var nx=function(){function e(r,t){this.uvBuffer=r,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return e.prototype.update=function(r){if(!(!r&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},e}(),ks=new at,lf=new oi,On=function(e){Ds(r,e);function r(t,n,i,o){o===void 0&&(o=ae.TRIANGLES);var s=e.call(this)||this;return s.geometry=t,s.shader=n,s.state=i||_r.for2d(),s.drawMode=o,s.start=0,s.size=0,s.uvs=null,s.indices=null,s.vertexData=new Float32Array(1),s.vertexDirty=-1,s._transformID=-1,s._roundPixels=k.ROUND_PIXELS,s.batchUvs=null,s}return Object.defineProperty(r.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),r.prototype._render=function(t){var n=this.geometry.buffers[0].data,i=this.shader;i.batchable&&this.drawMode===ae.TRIANGLES&&n.length<r.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},r.prototype._renderDefault=function(t){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),t.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(n),t.state.set(this.state),t.geometry.bind(this.geometry,n),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},r.prototype._renderToBatch=function(t){var n=this.geometry,i=this.shader;i.uvMatrix&&(i.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=i._tintRGB,this._texture=i.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},r.prototype.calculateVertices=function(){var t=this.geometry,n=t.buffers[0],i=n.data,o=n._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==i.length&&(this.vertexData=new Float32Array(i.length));for(var s=this.transform.worldTransform,a=s.a,u=s.b,l=s.c,h=s.d,f=s.tx,c=s.ty,d=this.vertexData,p=0;p<d.length/2;p++){var v=i[p*2],_=i[p*2+1];d[p*2]=a*v+l*_+f,d[p*2+1]=u*v+h*_+c}if(this._roundPixels)for(var g=k.RESOLUTION,p=0;p<d.length;++p)d[p]=Math.round((d[p]*g|0)/g);this.vertexDirty=o}},r.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new nx(t,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},r.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},r.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,ks);for(var n=this.geometry.getBuffer("aVertexPosition").data,i=lf.points,o=this.geometry.getIndex().data,s=o.length,a=this.drawMode===4?3:1,u=0;u+2<s;u+=a){var l=o[u]*2,h=o[u+1]*2,f=o[u+2]*2;if(i[0]=n[l],i[1]=n[l+1],i[2]=n[h],i[3]=n[h+1],i[4]=n[f],i[5]=n[f+1],lf.contains(ks.x,ks.y))return!0}return!1},r.prototype.destroy=function(t){e.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},r.BATCHABLE_SIZE=100,r}(Ie),ix=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,ox=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,An=function(e){Ds(r,e);function r(t,n){var i=this,o={uSampler:t,alpha:1,uTextureMatrix:Nt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(o,n.uniforms),i=e.call(this,n.program||xn.from(ox,ix),o)||this,i._colorDirty=!1,i.uvMatrix=new fs(t),i.batchable=n.program===void 0,i.pluginName=n.pluginName,i.tint=n.tint,i.alpha=n.alpha,i}return Object.defineProperty(r.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),r.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;cl(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},r}(He),Ri=function(e){Ds(r,e);function r(t,n,i){var o=e.call(this)||this,s=new Bt(t),a=new Bt(n,!0),u=new Bt(i,!0,!0);return o.addAttribute("aVertexPosition",s,2,!1,q.FLOAT).addAttribute("aTextureCoord",a,2,!1,q.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(r.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),r}(mn);/*!
 * @pixi/text-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var js=function(e,r){return js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},js(e,r)};function sx(e,r){js(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Oi=function(){function e(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return e}(),ax=function(){function e(){}return e.test=function(r){return typeof r=="string"&&r.indexOf("info face=")===0},e.parse=function(r){var t=r.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var i in t){var o=t[i].match(/^[a-z]+/gm)[0],s=t[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),a={};for(var u in s){var l=s[u].split("="),h=l[0],f=l[1].replace(/"/gm,""),c=parseFloat(f),d=isNaN(c)?f:c;a[h]=d}n[o].push(a)}var p=new Oi;return n.info.forEach(function(v){return p.info.push({face:v.face,size:parseInt(v.size,10)})}),n.common.forEach(function(v){return p.common.push({lineHeight:parseInt(v.lineHeight,10)})}),n.page.forEach(function(v){return p.page.push({id:parseInt(v.id,10),file:v.file})}),n.char.forEach(function(v){return p.char.push({id:parseInt(v.id,10),page:parseInt(v.page,10),x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xoffset:parseInt(v.xoffset,10),yoffset:parseInt(v.yoffset,10),xadvance:parseInt(v.xadvance,10)})}),n.kerning.forEach(function(v){return p.kerning.push({first:parseInt(v.first,10),second:parseInt(v.second,10),amount:parseInt(v.amount,10)})}),n.distanceField.forEach(function(v){return p.distanceField.push({distanceRange:parseInt(v.distanceRange,10),fieldType:v.fieldType})}),p},e}(),Xs=function(){function e(){}return e.test=function(r){return r instanceof XMLDocument&&r.getElementsByTagName("page").length&&r.getElementsByTagName("info")[0].getAttribute("face")!==null},e.parse=function(r){for(var t=new Oi,n=r.getElementsByTagName("info"),i=r.getElementsByTagName("common"),o=r.getElementsByTagName("page"),s=r.getElementsByTagName("char"),a=r.getElementsByTagName("kerning"),u=r.getElementsByTagName("distanceField"),l=0;l<n.length;l++)t.info.push({face:n[l].getAttribute("face"),size:parseInt(n[l].getAttribute("size"),10)});for(var l=0;l<i.length;l++)t.common.push({lineHeight:parseInt(i[l].getAttribute("lineHeight"),10)});for(var l=0;l<o.length;l++)t.page.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});for(var l=0;l<s.length;l++){var h=s[l];t.char.push({id:parseInt(h.getAttribute("id"),10),page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xoffset:parseInt(h.getAttribute("xoffset"),10),yoffset:parseInt(h.getAttribute("yoffset"),10),xadvance:parseInt(h.getAttribute("xadvance"),10)})}for(var l=0;l<a.length;l++)t.kerning.push({first:parseInt(a[l].getAttribute("first"),10),second:parseInt(a[l].getAttribute("second"),10),amount:parseInt(a[l].getAttribute("amount"),10)});for(var l=0;l<u.length;l++)t.distanceField.push({fieldType:u[l].getAttribute("fieldType"),distanceRange:parseInt(u[l].getAttribute("distanceRange"),10)});return t},e}(),ux=function(){function e(){}return e.test=function(r){if(typeof r=="string"&&r.indexOf("<font>")>-1){var t=new self.DOMParser().parseFromString(r,"text/xml");return Xs.test(t)}return!1},e.parse=function(r){var t=new self.DOMParser().parseFromString(r,"text/xml");return Xs.parse(t)},e}(),Hs=[ax,Xs,ux];function hf(e){for(var r=0;r<Hs.length;r++)if(Hs[r].test(e))return Hs[r];return null}function lx(e,r,t,n,i,o){var s=t.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;var a,u=t.dropShadow?t.dropShadowDistance:0,l=t.padding||0,h=e.width/n-u-l*2,f=e.height/n-u-l*2,c=s.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var p=c.length+1,v=1;v<p;++v)d.push(v/p);if(c.unshift(s[0]),d.unshift(0),c.push(s[s.length-1]),d.push(1),t.fillGradientType===In.LINEAR_VERTICAL){a=r.createLinearGradient(h/2,l,h/2,f+l);for(var _=0,g=o.fontProperties.fontSize+t.strokeThickness,b=g/f,v=0;v<i.length;v++)for(var w=o.lineHeight*v,E=0;E<c.length;E++){var T=0;typeof d[E]=="number"?T=d[E]:T=E/c.length;var x=w/f+T*b,I=Math.max(_,x);I=Math.min(I,1),a.addColorStop(I,c[E]),_=I}}else{a=r.createLinearGradient(l,f/2,h+l,f/2);for(var U=c.length+1,C=1,v=0;v<c.length;v++){var N=void 0;typeof d[v]=="number"?N=d[v]:N=C/U,a.addColorStop(N,c[v]),C++}}return a}function hx(e,r,t,n,i,o,s){var a=t.text,u=t.fontProperties;r.translate(n,i),r.scale(o,o);var l=s.strokeThickness/2,h=-(s.strokeThickness/2);if(r.font=s.toFontString(),r.lineWidth=s.strokeThickness,r.textBaseline=s.textBaseline,r.lineJoin=s.lineJoin,r.miterLimit=s.miterLimit,r.fillStyle=lx(e,r,s,o,[a],t),r.strokeStyle=s.stroke,s.dropShadow){var f=s.dropShadowColor,c=kt(typeof f=="number"?f:ll(f)),d=s.dropShadowBlur*o,p=s.dropShadowDistance*o;r.shadowColor="rgba("+c[0]*255+","+c[1]*255+","+c[2]*255+","+s.dropShadowAlpha+")",r.shadowBlur=d,r.shadowOffsetX=Math.cos(s.dropShadowAngle)*p,r.shadowOffsetY=Math.sin(s.dropShadowAngle)*p}else r.shadowColor="black",r.shadowBlur=0,r.shadowOffsetX=0,r.shadowOffsetY=0;s.stroke&&s.strokeThickness&&r.strokeText(a,l,h+t.lineHeight-u.descent),s.fill&&r.fillText(a,l,h+t.lineHeight-u.descent),r.setTransform(1,0,0,1,0,0),r.fillStyle="rgba(0, 0, 0, 0)"}function ff(e){return Array.from?Array.from(e):e.split("")}function fx(e){typeof e=="string"&&(e=[e]);for(var r=[],t=0,n=e.length;t<n;t++){var i=e[t];if(Array.isArray(i)){if(i.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+i.length+".");var o=i[0].charCodeAt(0),s=i[1].charCodeAt(0);if(s<o)throw new Error("[BitmapFont]: Invalid character range.");for(var a=o,u=s;a<=u;a++)r.push(String.fromCharCode(a))}else r.push.apply(r,ff(i))}if(r.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return r}function Ai(e){return e.codePointAt?e.codePointAt(0):e.charCodeAt(0)}var Xr=function(){function e(r,t,n){var i,o,s=r.info[0],a=r.common[0],u=r.page[0],l=r.distanceField[0],h=ni(u.file),f={};this._ownsTextures=n,this.font=s.face,this.size=s.size,this.lineHeight=a.lineHeight/h,this.chars={},this.pageTextures=f;for(var c=0;c<r.page.length;c++){var d=r.page[c],p=d.id,v=d.file;f[p]=t instanceof Array?t[c]:t[v],(l==null?void 0:l.fieldType)&&l.fieldType!=="none"&&(f[p].baseTexture.alphaMode=Ee.NO_PREMULTIPLIED_ALPHA)}for(var c=0;c<r.char.length;c++){var _=r.char[c],p=_.id,g=_.page,b=r.char[c],w=b.x,E=b.y,T=b.width,x=b.height,I=b.xoffset,U=b.yoffset,C=b.xadvance;w/=h,E/=h,T/=h,x/=h,I/=h,U/=h,C/=h;var N=new it(w+f[g].frame.x/h,E+f[g].frame.y/h,T,x);this.chars[p]={xOffset:I,yOffset:U,xAdvance:C,kerning:{},texture:new W(f[g].baseTexture,N),page:g}}for(var c=0;c<r.kerning.length;c++){var L=r.kerning[c],B=L.first,D=L.second,et=L.amount;B/=h,D/=h,et/=h,this.chars[D]&&(this.chars[D].kerning[B]=et)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(o=(i=l==null?void 0:l.fieldType)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"none"}return e.prototype.destroy=function(){for(var r in this.chars)this.chars[r].texture.destroy(),this.chars[r].texture=null;for(var r in this.pageTextures)this._ownsTextures&&this.pageTextures[r].destroy(!0),this.pageTextures[r]=null;this.chars=null,this.pageTextures=null},e.install=function(r,t,n){var i;if(r instanceof Oi)i=r;else{var o=hf(r);if(!o)throw new Error("Unrecognized data format for font.");i=o.parse(r)}t instanceof W&&(t=[t]);var s=new e(i,t,n);return e.available[s.font]=s,s},e.uninstall=function(r){var t=e.available[r];if(!t)throw new Error("No font found named '"+r+"'");t.destroy(),delete e.available[r]},e.from=function(r,t,n){if(!r)throw new Error("[BitmapFont] Property `name` is required.");var i=Object.assign({},e.defaultOptions,n),o=i.chars,s=i.padding,a=i.resolution,u=i.textureWidth,l=i.textureHeight,h=fx(o),f=t instanceof jr?t:new jr(t),c=u,d=new Oi;d.info[0]={face:f.fontFamily,size:f.fontSize},d.common[0]={lineHeight:f.fontSize};for(var p=0,v=0,_,g,b,w=0,E=[],T=0;T<h.length;T++){_||(_=document.createElement("canvas"),_.width=u,_.height=l,g=_.getContext("2d"),b=new ut(_,{resolution:a}),E.push(new W(b)),d.page.push({id:E.length-1,file:""}));var x=ne.measureText(h[T],f,!1,_),I=x.width,U=Math.ceil(x.height),C=Math.ceil((f.fontStyle==="italic"?2:1)*I);if(v>=l-U*a){if(v===0)throw new Error("[BitmapFont] textureHeight "+l+"px is "+("too small for "+f.fontSize+"px fonts"));--T,_=null,g=null,b=null,v=0,p=0,w=0;continue}if(w=Math.max(U+x.fontProperties.descent,w),C*a+p>=c){--T,v+=w*a,v=Math.ceil(v),p=0,w=0;continue}hx(_,g,x,p,v,a,f);var N=Ai(x.text);d.char.push({id:N,page:E.length-1,x:p/a,y:v/a,width:C,height:U,xoffset:0,yoffset:0,xadvance:Math.ceil(I-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0))}),p+=(C+2*s)*a,p=Math.ceil(p)}for(var T=0,L=h.length;T<L;T++)for(var B=h[T],D=0;D<L;D++){var et=h[D],F=g.measureText(B).width,A=g.measureText(et).width,K=g.measureText(B+et).width,bt=K-(F+A);bt&&d.kerning.push({first:Ai(B),second:Ai(et),amount:bt})}var Mt=new e(d,E,!0);return e.available[r]!==void 0&&e.uninstall(r),e.available[r]=Mt,Mt},e.ALPHA=[["a","z"],["A","Z"]," "],e.NUMERIC=[["0","9"]],e.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],e.ASCII=[[" ","~"]],e.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:e.ALPHANUMERIC},e.available={},e}(),cx=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,dx=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,px=[],vx=[],cf=[];(function(e){sx(r,e);function r(t,n){n===void 0&&(n={});var i=e.call(this)||this;i._tint=16777215;var o=Object.assign({},r.styleDefaults,n),s=o.align,a=o.tint,u=o.maxWidth,l=o.letterSpacing,h=o.fontName,f=o.fontSize;if(!Xr.available[h])throw new Error('Missing BitmapFont "'+h+'"');return i._activePagesMeshData=[],i._textWidth=0,i._textHeight=0,i._align=s,i._tint=a,i._fontName=h,i._fontSize=f||Xr.available[h].size,i._text=t,i._maxWidth=u,i._maxLineHeight=0,i._letterSpacing=l,i._anchor=new lr(function(){i.dirty=!0},i,0,0),i._roundPixels=k.ROUND_PIXELS,i.dirty=!0,i._textureCache={},i}return r.prototype.updateText=function(){for(var t,n=Xr.available[this._fontName],i=this._fontSize/n.size,o=new at,s=[],a=[],u=[],l=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",h=ff(l),f=this._maxWidth*n.size/this._fontSize,c=n.distanceFieldType==="none"?px:vx,d=null,p=0,v=0,_=0,g=-1,b=0,w=0,E=0,T=0,x=0;x<h.length;x++){var I=h[x],U=Ai(I);if(/(?:\s)/.test(I)&&(g=x,b=p,T++),I==="\r"||I===`
`){a.push(p),u.push(-1),v=Math.max(v,p),++_,++w,o.x=0,o.y+=n.lineHeight,d=null,T=0;continue}var C=n.chars[U];if(!!C){d&&C.kerning[d]&&(o.x+=C.kerning[d]);var N=cf.pop()||{texture:W.EMPTY,line:0,charCode:0,prevSpaces:0,position:new at};N.texture=C.texture,N.line=_,N.charCode=U,N.position.x=o.x+C.xOffset+this._letterSpacing/2,N.position.y=o.y+C.yOffset,N.prevSpaces=T,s.push(N),p=N.position.x+C.texture.orig.width,o.x+=C.xAdvance+this._letterSpacing,E=Math.max(E,C.yOffset+C.texture.height),d=U,g!==-1&&f>0&&o.x>f&&(++w,Fr(s,1+g-w,1+x-g),x=g,g=-1,a.push(b),u.push(s.length>0?s[s.length-1].prevSpaces:0),v=Math.max(v,b),_++,o.x=0,o.y+=n.lineHeight,d=null,T=0)}}var L=h[h.length-1];L!=="\r"&&L!==`
`&&(/(?:\s)/.test(L)&&(p=b),a.push(p),v=Math.max(v,p),u.push(-1));for(var B=[],x=0;x<=_;x++){var D=0;this._align==="right"?D=v-a[x]:this._align==="center"?D=(v-a[x])/2:this._align==="justify"&&(D=u[x]<0?0:(v-a[x])/u[x]),B.push(D)}for(var et=s.length,F={},A=[],K=this._activePagesMeshData,x=0;x<K.length;x++)c.push(K[x]);for(var x=0;x<et;x++){var bt=s[x].texture,Mt=bt.baseTexture.uid;if(!F[Mt]){var S=c.pop();if(!S){var H=new Ri,Z=void 0,rt=void 0;n.distanceFieldType==="none"?(Z=new An(W.EMPTY),rt=z.NORMAL):(Z=new An(W.EMPTY,{program:xn.from(dx,cx),uniforms:{uFWidth:0}}),rt=z.NORMAL_NPM);var lt=new On(H,Z);lt.blendMode=rt,S={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:lt,vertices:null,uvs:null,indices:null}}S.index=0,S.indexCount=0,S.vertexCount=0,S.uvsCount=0,S.total=0;var gt=this._textureCache;gt[Mt]=gt[Mt]||new W(bt.baseTexture),S.mesh.texture=gt[Mt],S.mesh.tint=this._tint,A.push(S),F[Mt]=S}F[Mt].total++}for(var x=0;x<K.length;x++)A.indexOf(K[x])===-1&&this.removeChild(K[x].mesh);for(var x=0;x<A.length;x++)A[x].mesh.parent!==this&&this.addChild(A[x].mesh);this._activePagesMeshData=A;for(var x in F){var S=F[x],ht=S.total;if(!(((t=S.indices)===null||t===void 0?void 0:t.length)>6*ht)||S.vertices.length<On.BATCHABLE_SIZE*2)S.vertices=new Float32Array(4*2*ht),S.uvs=new Float32Array(4*2*ht),S.indices=new Uint16Array(6*ht);else for(var yt=S.total,Et=S.vertices,pt=yt*4*2;pt<Et.length;pt++)Et[pt]=0;S.mesh.size=6*ht}for(var x=0;x<et;x++){var I=s[x],xt=I.position.x+B[I.line]*(this._align==="justify"?I.prevSpaces:1);this._roundPixels&&(xt=Math.round(xt));var ot=xt*i,vt=I.position.y*i,bt=I.texture,tt=F[bt.baseTexture.uid],Gt=bt.frame,At=bt._uvs,nt=tt.index++;tt.indices[nt*6+0]=0+nt*4,tt.indices[nt*6+1]=1+nt*4,tt.indices[nt*6+2]=2+nt*4,tt.indices[nt*6+3]=0+nt*4,tt.indices[nt*6+4]=2+nt*4,tt.indices[nt*6+5]=3+nt*4,tt.vertices[nt*8+0]=ot,tt.vertices[nt*8+1]=vt,tt.vertices[nt*8+2]=ot+Gt.width*i,tt.vertices[nt*8+3]=vt,tt.vertices[nt*8+4]=ot+Gt.width*i,tt.vertices[nt*8+5]=vt+Gt.height*i,tt.vertices[nt*8+6]=ot,tt.vertices[nt*8+7]=vt+Gt.height*i,tt.uvs[nt*8+0]=At.x0,tt.uvs[nt*8+1]=At.y0,tt.uvs[nt*8+2]=At.x1,tt.uvs[nt*8+3]=At.y1,tt.uvs[nt*8+4]=At.x2,tt.uvs[nt*8+5]=At.y2,tt.uvs[nt*8+6]=At.x3,tt.uvs[nt*8+7]=At.y3}this._textWidth=v*i,this._textHeight=(o.y+n.lineHeight)*i;for(var x in F){var S=F[x];if(this.anchor.x!==0||this.anchor.y!==0)for(var ee=0,De=this._textWidth*this.anchor.x,Ir=this._textHeight*this.anchor.y,zn=0;zn<S.total;zn++)S.vertices[ee++]-=De,S.vertices[ee++]-=Ir,S.vertices[ee++]-=De,S.vertices[ee++]-=Ir,S.vertices[ee++]-=De,S.vertices[ee++]-=Ir,S.vertices[ee++]-=De,S.vertices[ee++]-=Ir;this._maxLineHeight=E*i;var sn=S.mesh.geometry.getBuffer("aVertexPosition"),Vn=S.mesh.geometry.getBuffer("aTextureCoord"),$n=S.mesh.geometry.getIndex();sn.data=S.vertices,Vn.data=S.uvs,$n.data=S.indices,sn.update(),Vn.update(),$n.update()}for(var x=0;x<s.length;x++)cf.push(s[x])},r.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},r.prototype._render=function(t){var n=Xr.available[this._fontName],i=n.distanceFieldRange,o=n.distanceFieldType,s=n.size;if(o!=="none")for(var a=this.worldTransform,u=a.a,l=a.b,h=a.c,f=a.d,c=Math.sqrt(u*u+l*l),d=Math.sqrt(h*h+f*f),p=(Math.abs(c)+Math.abs(d))/2,v=this._fontSize/s,_=0,g=this._activePagesMeshData;_<g.length;_++){var b=g[_];b.mesh.shader.uniforms.uFWidth=p*i*v*t.resolution}e.prototype._render.call(this,t)},r.prototype.getLocalBounds=function(){return this.validate(),e.prototype.getLocalBounds.call(this)},r.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(r.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!Xr.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),r.prototype.destroy=function(t){var n=this._textureCache;for(var i in n){var o=n[i];o.destroy(),delete n[i]}this._textureCache=null,e.prototype.destroy.call(this,t)},r.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},r})(Ie);var _x=function(){function e(){}return e.add=function(){ft.setExtensionXhrType("fnt",ft.XHR_RESPONSE_TYPE.TEXT)},e.use=function(r,t){var n=hf(r.data);if(!n){t();return}for(var i=e.getBaseUrl(this,r),o=n.parse(r.data),s={},a=function(v){s[v.metadata.pageFile]=v.texture,Object.keys(s).length===o.page.length&&(r.bitmapFont=Xr.install(o,s,!0),t())},u=0;u<o.page.length;++u){var l=o.page[u].file,h=i+l,f=!1;for(var c in this.resources){var d=this.resources[c];if(d.url===h){d.metadata.pageFile=l,d.texture?a(d):d.onAfterMiddleware.add(a),f=!0;break}}if(!f){var p={crossOrigin:r.crossOrigin,loadType:ft.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},r.metadata.imageMetadata),parentResource:r};this.add(h,p,a)}}},e.getBaseUrl=function(r,t){var n=t.isDataUrl?"":e.dirname(t.url);return t.isDataUrl&&(n==="."&&(n=""),r.baseUrl&&n&&r.baseUrl.charAt(r.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(r.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},e.dirname=function(r){var t=r.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===r?".":t===""?"/":t},e}();/*!
 * @pixi/filter-alpha - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var zs=function(e,r){return zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},zs(e,r)};function mx(e,r){zs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var gx=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,df=function(e){mx(r,e);function r(t){t===void 0&&(t=1);var n=e.call(this,xg,gx,{uAlpha:1})||this;return n.alpha=t,n}return Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),r}(J);/*!
 * @pixi/filter-blur - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Vs=function(e,r){return Vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Vs(e,r)};function pf(e,r){Vs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var yx=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function xx(e,r){var t=Math.ceil(e/2),n=yx,i="",o;r?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var s=0;s<e;s++){var a=o.replace("%index%",s.toString());a=a.replace("%sampleIndex%",s-(t-1)+".0"),i+=a,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",e.toString()),n}var bx={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Tx=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function wx(e){for(var r=bx[e],t=r.length,n=Tx,i="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",s,a=0;a<e;a++){var u=o.replace("%index%",a.toString());s=a,a>=t&&(s=e-a-1),u=u.replace("%value%",r[s].toString()),i+=u,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",e.toString()),n}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var vf;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(vf||(vf={}));var _f;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(_f||(_f={}));var mf;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(mf||(mf={}));var gf;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(gf||(gf={}));var yf;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(yf||(yf={}));var xf;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(xf||(xf={}));var bf;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(bf||(bf={}));var Tf;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(Tf||(Tf={}));var wf;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(wf||(wf={}));var Ef;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Ef||(Ef={}));var Cf;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Cf||(Cf={}));var Pf;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(Pf||(Pf={}));var If;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(If||(If={}));var Sn;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(Sn||(Sn={}));var Rf;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Rf||(Rf={}));var Of;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(Of||(Of={}));var Af;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(Af||(Af={}));var Sf;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Sf||(Sf={}));var Nf;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Nf||(Nf={}));var Nn=function(e){pf(r,e);function r(t,n,i,o,s){n===void 0&&(n=8),i===void 0&&(i=4),o===void 0&&(o=k.FILTER_RESOLUTION),s===void 0&&(s=5);var a=this,u=xx(s,t),l=wx(s);return a=e.call(this,u,l)||this,a.horizontal=t,a.resolution=o,a._quality=0,a.quality=i,a.blur=n,a}return r.prototype.apply=function(t,n,i,o){if(i?this.horizontal?this.uniforms.strength=1/i.width*(i.width/n.width):this.uniforms.strength=1/i.height*(i.height/n.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/n.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,n,i,o);else{var s=t.getFilterTexture(),a=t.renderer,u=n,l=s;this.state.blend=!1,t.applyFilter(this,u,l,Sn.CLEAR);for(var h=1;h<this.passes-1;h++){t.bindAndClear(u,Sn.BLIT),this.uniforms.uSampler=l;var f=l;l=u,u=f,a.shader.bind(this),a.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,i,o),t.returnFilterTexture(s)}},Object.defineProperty(r.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),r}(J),Ex=function(e){pf(r,e);function r(t,n,i,o){t===void 0&&(t=8),n===void 0&&(n=4),i===void 0&&(i=k.FILTER_RESOLUTION),o===void 0&&(o=5);var s=e.call(this)||this;return s.blurXFilter=new Nn(!0,t,n,i,o),s.blurYFilter=new Nn(!1,t,n,i,o),s.resolution=i,s.quality=n,s.blur=t,s.repeatEdgePixels=!1,s}return r.prototype.apply=function(t,n,i,o){var s=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(s&&a){var u=t.getFilterTexture();this.blurXFilter.apply(t,n,u,Sn.CLEAR),this.blurYFilter.apply(t,u,i,o),t.returnFilterTexture(u)}else a?this.blurYFilter.apply(t,n,i,o):this.blurXFilter.apply(t,n,i,o)},r.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),r}(J);/*!
 * @pixi/filter-color-matrix - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var $s=function(e,r){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},$s(e,r)};function Cx(e,r){$s(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Px=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,Ws=function(e){Cx(r,e);function r(){var t=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=e.call(this,Oh,Px,n)||this,t.alpha=1,t}return r.prototype._loadMatrix=function(t,n){n===void 0&&(n=!1);var i=t;n&&(this._multiply(i,this.uniforms.m,t),i=this._colorMatrix(i)),this.uniforms.m=i},r.prototype._multiply=function(t,n,i){return t[0]=n[0]*i[0]+n[1]*i[5]+n[2]*i[10]+n[3]*i[15],t[1]=n[0]*i[1]+n[1]*i[6]+n[2]*i[11]+n[3]*i[16],t[2]=n[0]*i[2]+n[1]*i[7]+n[2]*i[12]+n[3]*i[17],t[3]=n[0]*i[3]+n[1]*i[8]+n[2]*i[13]+n[3]*i[18],t[4]=n[0]*i[4]+n[1]*i[9]+n[2]*i[14]+n[3]*i[19]+n[4],t[5]=n[5]*i[0]+n[6]*i[5]+n[7]*i[10]+n[8]*i[15],t[6]=n[5]*i[1]+n[6]*i[6]+n[7]*i[11]+n[8]*i[16],t[7]=n[5]*i[2]+n[6]*i[7]+n[7]*i[12]+n[8]*i[17],t[8]=n[5]*i[3]+n[6]*i[8]+n[7]*i[13]+n[8]*i[18],t[9]=n[5]*i[4]+n[6]*i[9]+n[7]*i[14]+n[8]*i[19]+n[9],t[10]=n[10]*i[0]+n[11]*i[5]+n[12]*i[10]+n[13]*i[15],t[11]=n[10]*i[1]+n[11]*i[6]+n[12]*i[11]+n[13]*i[16],t[12]=n[10]*i[2]+n[11]*i[7]+n[12]*i[12]+n[13]*i[17],t[13]=n[10]*i[3]+n[11]*i[8]+n[12]*i[13]+n[13]*i[18],t[14]=n[10]*i[4]+n[11]*i[9]+n[12]*i[14]+n[13]*i[19]+n[14],t[15]=n[15]*i[0]+n[16]*i[5]+n[17]*i[10]+n[18]*i[15],t[16]=n[15]*i[1]+n[16]*i[6]+n[17]*i[11]+n[18]*i[16],t[17]=n[15]*i[2]+n[16]*i[7]+n[17]*i[12]+n[18]*i[17],t[18]=n[15]*i[3]+n[16]*i[8]+n[17]*i[13]+n[18]*i[18],t[19]=n[15]*i[4]+n[16]*i[9]+n[17]*i[14]+n[18]*i[19]+n[19],t},r.prototype._colorMatrix=function(t){var n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},r.prototype.brightness=function(t,n){var i=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.tint=function(t,n){var i=t>>16&255,o=t>>8&255,s=t&255,a=[i/255,0,0,0,0,0,o/255,0,0,0,0,0,s/255,0,0,0,0,0,1,0];this._loadMatrix(a,n)},r.prototype.greyscale=function(t,n){var i=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.blackAndWhite=function(t){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.hue=function(t,n){t=(t||0)/180*Math.PI;var i=Math.cos(t),o=Math.sin(t),s=Math.sqrt,a=1/3,u=s(a),l=i+(1-i)*a,h=a*(1-i)-u*o,f=a*(1-i)+u*o,c=a*(1-i)+u*o,d=i+a*(1-i),p=a*(1-i)-u*o,v=a*(1-i)-u*o,_=a*(1-i)+u*o,g=i+a*(1-i),b=[l,h,f,0,0,c,d,p,0,0,v,_,g,0,0,0,0,0,1,0];this._loadMatrix(b,n)},r.prototype.contrast=function(t,n){var i=(t||0)+1,o=-.5*(i-1),s=[i,0,0,0,o,0,i,0,0,o,0,0,i,0,o,0,0,0,1,0];this._loadMatrix(s,n)},r.prototype.saturate=function(t,n){t===void 0&&(t=0);var i=t*2/3+1,o=(i-1)*-.5,s=[i,o,o,0,0,o,i,o,0,0,o,o,i,0,0,0,0,0,1,0];this._loadMatrix(s,n)},r.prototype.desaturate=function(){this.saturate(-1)},r.prototype.negative=function(t){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.sepia=function(t){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.technicolor=function(t){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.polaroid=function(t){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.toBGR=function(t){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.kodachrome=function(t){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.browni=function(t){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.vintage=function(t){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.colorTone=function(t,n,i,o,s){t=t||.2,n=n||.15,i=i||16770432,o=o||3375104;var a=(i>>16&255)/255,u=(i>>8&255)/255,l=(i&255)/255,h=(o>>16&255)/255,f=(o>>8&255)/255,c=(o&255)/255,d=[.3,.59,.11,0,0,a,u,l,t,0,h,f,c,n,0,a-h,u-f,l-c,0,0];this._loadMatrix(d,s)},r.prototype.night=function(t,n){t=t||.1;var i=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.predator=function(t,n){var i=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(i,n)},r.prototype.lsd=function(t){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)},r.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(r.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),r}(J);Ws.prototype.grayscale=Ws.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var qs=function(e,r){return qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},qs(e,r)};function Ix(e,r){qs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Rx=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,Ox=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,Ax=function(e){Ix(r,e);function r(t,n){var i=this,o=new Nt;return t.renderable=!1,i=e.call(this,Ox,Rx,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,i.maskSprite=t,i.maskMatrix=o,n==null&&(n=20),i.scale=new at(n,n),i}return r.prototype.apply=function(t,n,i,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var s=this.maskSprite.worldTransform,a=Math.sqrt(s.a*s.a+s.b*s.b),u=Math.sqrt(s.c*s.c+s.d*s.d);a!==0&&u!==0&&(this.uniforms.rotation[0]=s.a/a,this.uniforms.rotation[1]=s.b/a,this.uniforms.rotation[2]=s.c/u,this.uniforms.rotation[3]=s.d/u),t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),r}(J);/*!
 * @pixi/filter-fxaa - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ys=function(e,r){return Ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ys(e,r)};function Sx(e,r){Ys(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Nx=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,Fx=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,Ux=function(e){Sx(r,e);function r(){return e.call(this,Nx,Fx)||this}return r}(J);/*!
 * @pixi/filter-noise - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ks=function(e,r){return Ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ks(e,r)};function Lx(e,r){Ks(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Mx=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`,Gx=function(e){Lx(r,e);function r(t,n){t===void 0&&(t=.5),n===void 0&&(n=Math.random());var i=e.call(this,Oh,Mx,{uNoise:0,uSeed:0})||this;return i.noise=t,i.seed=n,i}return Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),r}(J);/*!
 * @pixi/mixin-cache-as-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ff;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(Ff||(Ff={}));var Uf;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(Uf||(Uf={}));var Lf;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(Lf||(Lf={}));var Mf;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(Mf||(Mf={}));var Gf;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Gf||(Gf={}));var Bf;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Bf||(Bf={}));var Df;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Df||(Df={}));var kf;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(kf||(kf={}));var jf;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(jf||(jf={}));var Xf;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Xf||(Xf={}));var Hf;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Hf||(Hf={}));var zf;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(zf||(zf={}));var Vf;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Vf||(Vf={}));var $f;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})($f||($f={}));var Wf;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Wf||(Wf={}));var qf;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(qf||(qf={}));var Yf;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(Yf||(Yf={}));var Zs;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Zs||(Zs={}));var Kf;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Kf||(Kf={}));var Zf=new Nt;Ft.prototype._cacheAsBitmap=!1;Ft.prototype._cacheData=null;Ft.prototype._cacheAsBitmapResolution=null;Ft.prototype._cacheAsBitmapMultisample=Zs.NONE;var Bx=function(){function e(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return e}();Object.defineProperties(Ft.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(e){e!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(e){e!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(e){if(this._cacheAsBitmap!==e){this._cacheAsBitmap=e;var r;e?(this._cacheData||(this._cacheData=new Bx),r=this._cacheData,r.originalRender=this.render,r.originalRenderCanvas=this.renderCanvas,r.originalUpdateTransform=this.updateTransform,r.originalCalculateBounds=this.calculateBounds,r.originalGetLocalBounds=this.getLocalBounds,r.originalDestroy=this.destroy,r.originalContainsPoint=this.containsPoint,r.originalMask=this._mask,r.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(r=this._cacheData,r.sprite&&this._destroyCachedDisplayObject(),this.render=r.originalRender,this.renderCanvas=r.originalRenderCanvas,this.calculateBounds=r.originalCalculateBounds,this.getLocalBounds=r.originalGetLocalBounds,this.destroy=r.originalDestroy,this.updateTransform=r.originalUpdateTransform,this.containsPoint=r.originalContainsPoint,this._mask=r.originalMask,this.filterArea=r.originalFilterArea)}}}});Ft.prototype._renderCached=function(r){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(r),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(r))};Ft.prototype._initCachedDisplayObject=function(r){var t;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,r.batch.flush();var i=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;i.pad(o)}i.ceil(k.RESOLUTION);var s=r.renderTexture.current,a=r.renderTexture.sourceFrame.clone(),u=r.renderTexture.destinationFrame.clone(),l=r.projection.transform,h=pr.create({width:i.width,height:i.height,resolution:this.cacheAsBitmapResolution||r.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:r.multisample}),f="cacheAsBitmap_"+or();this._cacheData.textureCacheId=f,ut.addToCache(h.baseTexture,f),W.addToCache(h,f);var c=this.transform.localTransform.copyTo(Zf).invert().translate(-i.x,-i.y);this.render=this._cacheData.originalRender,r.render(this,{renderTexture:h,clear:!0,transform:c,skipUpdateTransform:!1}),r.framebuffer.blit(),r.projection.transform=l,r.renderTexture.bind(s,a,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var d=new Pn(h);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(i.x/i.width),d.anchor.y=-(i.y/i.height),d.alpha=n,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};Ft.prototype._renderCachedCanvas=function(r){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(r),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(r))};Ft.prototype._initCachedDisplayObjectCanvas=function(r){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var i=r.context,o=r._projTransform;t.ceil(k.RESOLUTION);var s=pr.create({width:t.width,height:t.height}),a="cacheAsBitmap_"+or();this._cacheData.textureCacheId=a,ut.addToCache(s.baseTexture,a),W.addToCache(s,a);var u=Zf;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,r.render(this,{renderTexture:s,clear:!0,transform:u,skipUpdateTransform:!1}),r.context=i,r._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var l=new Pn(s);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(t.x/t.width),l.anchor.y=-(t.y/t.height),l.alpha=n,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=r._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};Ft.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};Ft.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};Ft.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,ut.removeFromCache(this._cacheData.textureCacheId),W.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};Ft.prototype._cacheAsBitmapDestroy=function(r){this.cacheAsBitmap=!1,this.destroy(r)};/*!
 * @pixi/mixin-get-child-by-name - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Ft.prototype.name=null;Ie.prototype.getChildByName=function(r,t){for(var n=0,i=this.children.length;n<i;n++)if(this.children[n].name===r)return this.children[n];if(t)for(var n=0,i=this.children.length;n<i;n++){var o=this.children[n];if(!!o.getChildByName){var s=this.children[n].getChildByName(r,!0);if(s)return s}}return null};/*!
 * @pixi/mixin-get-global-position - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Ft.prototype.getGlobalPosition=function(r,t){return r===void 0&&(r=new at),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,r,t):(r.x=this.position.x,r.y=this.position.y),r};/*!
 * @pixi/mesh-extras - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Js=function(e,r){return Js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Js(e,r)};function Hr(e,r){Js(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Dx=function(e){Hr(r,e);function r(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=100),i===void 0&&(i=10),o===void 0&&(o=10);var s=e.call(this)||this;return s.segWidth=i,s.segHeight=o,s.width=t,s.height=n,s.build(),s}return r.prototype.build=function(){for(var t=this.segWidth*this.segHeight,n=[],i=[],o=[],s=this.segWidth-1,a=this.segHeight-1,u=this.width/s,l=this.height/a,h=0;h<t;h++){var f=h%this.segWidth,c=h/this.segWidth|0;n.push(f*u,c*l),i.push(f/s,c/a)}for(var d=s*a,h=0;h<d;h++){var p=h%s,v=h/s|0,_=v*this.segWidth+p,g=v*this.segWidth+p+1,b=(v+1)*this.segWidth+p,w=(v+1)*this.segWidth+p+1;o.push(_,g,b,g,w,b)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},r}(Ri),kx=function(e){Hr(r,e);function r(t,n,i){t===void 0&&(t=200),i===void 0&&(i=0);var o=e.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return o.points=n,o._width=t,o.textureScale=i,o.build(),o}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),r.prototype.build=function(){var t=this.points;if(!!t){var n=this.getBuffer("aVertexPosition"),i=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){n.data.length/4!==t.length&&(n.data=new Float32Array(t.length*4),i.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var s=i.data,a=o.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;for(var u=0,l=t[0],h=this._width*this.textureScale,f=t.length,c=0;c<f;c++){var d=c*4;if(this.textureScale>0){var p=l.x-t[c].x,v=l.y-t[c].y,_=Math.sqrt(p*p+v*v);l=t[c],u+=_/h}else u=c/(f-1);s[d]=u,s[d+1]=0,s[d+2]=u,s[d+3]=1}for(var g=0,c=0;c<f-1;c++){var d=c*2;a[g++]=d,a[g++]=d+1,a[g++]=d+2,a[g++]=d+2,a[g++]=d+1,a[g++]=d+3}i.update(),o.update(),this.updateVertices()}}},r.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var n=t[0],i,o=0,s=0,a=this.buffers[0].data,u=t.length,l=0;l<u;l++){var h=t[l],f=l*4;l<t.length-1?i=t[l+1]:i=h,s=-(i.x-n.x),o=i.y-n.y;var c=Math.sqrt(o*o+s*s),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=c,s/=c,o*=d,s*=d,a[f]=h.x+o,a[f+1]=h.y+s,a[f+2]=h.x-o,a[f+3]=h.y-s,n=h}this.buffers[0].update()}},r.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},r}(Ri);(function(e){Hr(r,e);function r(t,n,i){i===void 0&&(i=0);var o=this,s=new kx(t.height,n,i),a=new An(t);return i>0&&(t.baseTexture.wrapMode=Ne.REPEAT),o=e.call(this,s,a)||this,o.autoUpdate=!0,o}return r.prototype._render=function(t){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),e.prototype._render.call(this,t)},r})(On);var jx=function(e){Hr(r,e);function r(t,n,i){var o=this,s=new Dx(t.width,t.height,n,i),a=new An(W.WHITE);return o=e.call(this,s,a)||this,o.texture=t,o.autoResize=!0,o}return r.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,n=this.shader.texture,i=n.width,o=n.height;this.autoResize&&(t.width!==i||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(r.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),r.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),e.prototype._render.call(this,t)},r.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),e.prototype.destroy.call(this,t)},r}(On);(function(e){Hr(r,e);function r(t,n,i,o,s){t===void 0&&(t=W.EMPTY);var a=this,u=new Ri(n,i,o);u.getBuffer("aVertexPosition").static=!1;var l=new An(t);return a=e.call(this,u,l,null,s)||this,a.autoUpdate=!0,a}return Object.defineProperty(r.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),r.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),e.prototype._render.call(this,t)},r})(On);var Si=10,zE=function(e){Hr(r,e);function r(t,n,i,o,s){n===void 0&&(n=Si),i===void 0&&(i=Si),o===void 0&&(o=Si),s===void 0&&(s=Si);var a=e.call(this,W.WHITE,4,4)||this;return a._origWidth=t.orig.width,a._origHeight=t.orig.height,a._width=a._origWidth,a._height=a._origHeight,a._leftWidth=n,a._rightWidth=o,a._topHeight=i,a._bottomHeight=s,a.texture=t,a}return r.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(r.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),r.prototype.updateHorizontalVertices=function(){var t=this.vertices,n=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*n,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*n,t[25]=t[27]=t[29]=t[31]=this._height},r.prototype.updateVerticalVertices=function(){var t=this.vertices,n=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*n,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*n,t[6]=t[14]=t[22]=t[30]=this._width},r.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,n=this._width>t?1:this._width/t,i=this._topHeight+this._bottomHeight,o=this._height>i?1:this._height/i,s=Math.min(n,o);return s},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),r.prototype._refresh=function(){var t=this.texture,n=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var i=1/this._origWidth,o=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=i*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-i*this._rightWidth,n[9]=n[11]=n[13]=n[15]=o*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},r}(jx);/*!
 * @pixi/sprite-animated - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Qs=function(e,r){return Qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Qs(e,r)};function Xx(e,r){Qs(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}(function(e){Xx(r,e);function r(t,n){n===void 0&&(n=!0);var i=e.call(this,t[0]instanceof W?t[0]:t[0].texture)||this;return i._textures=null,i._durations=null,i._autoUpdate=n,i._isConnectedToTicker=!1,i.animationSpeed=1,i.loop=!0,i.updateAnchor=!1,i.onComplete=null,i.onFrameChange=null,i.onLoop=null,i._currentTime=0,i._playing=!1,i._previousFrame=null,i.textures=t,i}return r.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Rt.shared.remove(this.update,this),this._isConnectedToTicker=!1))},r.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Rt.shared.add(this.update,this,Ue.HIGH),this._isConnectedToTicker=!0))},r.prototype.gotoAndStop=function(t){this.stop();var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture()},r.prototype.gotoAndPlay=function(t){var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture(),this.play()},r.prototype.update=function(t){if(!!this._playing){var n=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=n/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var s=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*s,this._currentTime+=s;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i?this.onLoop():this.animationSpeed<0&&this.currentFrame>i&&this.onLoop()),this.updateTexture())}},r.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},r.prototype.destroy=function(t){this.stop(),e.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},r.fromFrames=function(t){for(var n=[],i=0;i<t.length;++i)n.push(W.from(t[i]));return new r(n)},r.fromImages=function(t){for(var n=[],i=0;i<t.length;++i)n.push(W.from(t[i]));return new r(n)},Object.defineProperty(r.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof W)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<t.length;n++)this._textures.push(t[n].texture),this._durations.push(t[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Rt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Rt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),r})(Pn);/*!
 * pixi.js - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ze.registerPlugin("accessibility",u0);ze.registerPlugin("extract",Ag);ze.registerPlugin("interaction",p0);ze.registerPlugin("particle",gy);ze.registerPlugin("prepare",Yy);ze.registerPlugin("batch",Eg);ze.registerPlugin("tilingSprite",rx);le.registerPlugin(_x);le.registerPlugin(Wg);le.registerPlugin(hy);le.registerPlugin(vy);le.registerPlugin(Zy);gs.registerPlugin(l0);gs.registerPlugin(Dg);var VE={AlphaFilter:df,BlurFilter:Ex,BlurFilterPass:Nn,ColorMatrixFilter:Ws,DisplacementFilter:Ax,FXAAFilter:Ux,NoiseFilter:Gx},Hx={exports:{}};(function(e){(function(){function r(m,y,R){return m.call.apply(m.bind,arguments)}function t(m,y,R){if(!m)throw Error();if(2<arguments.length){var P=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,P),m.apply(y,M)}}return function(){return m.apply(y,arguments)}}function n(m,y,R){return n=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?r:t,n.apply(null,arguments)}var i=Date.now||function(){return+new Date};function o(m,y){this.a=m,this.o=y||m,this.c=this.o.document}var s=!!window.FontFace;function a(m,y,R,P){if(y=m.c.createElement(y),R)for(var M in R)R.hasOwnProperty(M)&&(M=="style"?y.style.cssText=R[M]:y.setAttribute(M,R[M]));return P&&y.appendChild(m.c.createTextNode(P)),y}function u(m,y,R){m=m.c.getElementsByTagName(y)[0],m||(m=document.documentElement),m.insertBefore(R,m.lastChild)}function l(m){m.parentNode&&m.parentNode.removeChild(m)}function h(m,y,R){y=y||[],R=R||[];for(var P=m.className.split(/\s+/),M=0;M<y.length;M+=1){for(var j=!1,$=0;$<P.length;$+=1)if(y[M]===P[$]){j=!0;break}j||P.push(y[M])}for(y=[],M=0;M<P.length;M+=1){for(j=!1,$=0;$<R.length;$+=1)if(P[M]===R[$]){j=!0;break}j||y.push(P[M])}m.className=y.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(m,y){for(var R=m.className.split(/\s+/),P=0,M=R.length;P<M;P++)if(R[P]==y)return!0;return!1}function c(m){return m.o.location.hostname||m.a.location.hostname}function d(m,y,R){function P(){st&&M&&j&&(st($),st=null)}y=a(m,"link",{rel:"stylesheet",href:y,media:"all"});var M=!1,j=!0,$=null,st=R||null;s?(y.onload=function(){M=!0,P()},y.onerror=function(){M=!0,$=Error("Stylesheet failed to load"),P()}):setTimeout(function(){M=!0,P()},0),u(m,"head",y)}function p(m,y,R,P){var M=m.c.getElementsByTagName("head")[0];if(M){var j=a(m,"script",{src:y}),$=!1;return j.onload=j.onreadystatechange=function(){$||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||($=!0,R&&R(null),j.onload=j.onreadystatechange=null,j.parentNode.tagName=="HEAD"&&M.removeChild(j))},M.appendChild(j),setTimeout(function(){$||($=!0,R&&R(Error("Script load timeout")))},P||5e3),j}return null}function v(){this.a=0,this.c=null}function _(m){return m.a++,function(){m.a--,b(m)}}function g(m,y){m.c=y,b(m)}function b(m){m.a==0&&m.c&&(m.c(),m.c=null)}function w(m){this.a=m||"-"}w.prototype.c=function(m){for(var y=[],R=0;R<arguments.length;R++)y.push(arguments[R].replace(/[\W_]+/g,"").toLowerCase());return y.join(this.a)};function E(m,y){this.c=m,this.f=4,this.a="n";var R=(y||"n4").match(/^([nio])([1-9])$/i);R&&(this.a=R[1],this.f=parseInt(R[2],10))}function T(m){return U(m)+" "+(m.f+"00")+" 300px "+x(m.c)}function x(m){var y=[];m=m.split(/,\s*/);for(var R=0;R<m.length;R++){var P=m[R].replace(/['"]/g,"");P.indexOf(" ")!=-1||/^\d/.test(P)?y.push("'"+P+"'"):y.push(P)}return y.join(",")}function I(m){return m.a+m.f}function U(m){var y="normal";return m.a==="o"?y="oblique":m.a==="i"&&(y="italic"),y}function C(m){var y=4,R="n",P=null;return m&&((P=m.match(/(normal|oblique|italic)/i))&&P[1]&&(R=P[1].substr(0,1).toLowerCase()),(P=m.match(/([1-9]00|normal|bold)/i))&&P[1]&&(/bold/i.test(P[1])?y=7:/[1-9]00/.test(P[1])&&(y=parseInt(P[1].substr(0,1),10)))),R+y}function N(m,y){this.c=m,this.f=m.o.document.documentElement,this.h=y,this.a=new w("-"),this.j=y.events!==!1,this.g=y.classes!==!1}function L(m){m.g&&h(m.f,[m.a.c("wf","loading")]),D(m,"loading")}function B(m){if(m.g){var y=f(m.f,m.a.c("wf","active")),R=[],P=[m.a.c("wf","loading")];y||R.push(m.a.c("wf","inactive")),h(m.f,R,P)}D(m,"inactive")}function D(m,y,R){m.j&&m.h[y]&&(R?m.h[y](R.c,I(R)):m.h[y]())}function et(){this.c={}}function F(m,y,R){var P=[],M;for(M in y)if(y.hasOwnProperty(M)){var j=m.c[M];j&&P.push(j(y[M],R))}return P}function A(m,y){this.c=m,this.f=y,this.a=a(this.c,"span",{"aria-hidden":"true"},this.f)}function K(m){u(m.c,"body",m.a)}function bt(m){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(m.c)+";"+("font-style:"+U(m)+";font-weight:"+(m.f+"00")+";")}function Mt(m,y,R,P,M,j){this.g=m,this.j=y,this.a=P,this.c=R,this.f=M||3e3,this.h=j||void 0}Mt.prototype.start=function(){var m=this.c.o.document,y=this,R=i(),P=new Promise(function($,st){function ct(){i()-R>=y.f?st():m.fonts.load(T(y.a),y.h).then(function(Ct){1<=Ct.length?$():setTimeout(ct,25)},function(){st()})}ct()}),M=null,j=new Promise(function($,st){M=setTimeout(st,y.f)});Promise.race([j,P]).then(function(){M&&(clearTimeout(M),M=null),y.g(y.a)},function(){y.j(y.a)})};function S(m,y,R,P,M,j,$){this.v=m,this.B=y,this.c=R,this.a=P,this.s=$||"BESbswy",this.f={},this.w=M||3e3,this.u=j||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),m=new E(this.a.c+",serif",I(this.a)),m=bt(m),this.g.a.style.cssText=m,m=new E(this.a.c+",sans-serif",I(this.a)),m=bt(m),this.h.a.style.cssText=m,m=new E("serif",I(this.a)),m=bt(m),this.j.a.style.cssText=m,m=new E("sans-serif",I(this.a)),m=bt(m),this.m.a.style.cssText=m,K(this.g),K(this.h),K(this.j),K(this.m)}var H={D:"serif",C:"sans-serif"},Z=null;function rt(){if(Z===null){var m=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);Z=!!m&&(536>parseInt(m[1],10)||parseInt(m[1],10)===536&&11>=parseInt(m[2],10))}return Z}S.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),gt(this)};function lt(m,y,R){for(var P in H)if(H.hasOwnProperty(P)&&y===m.f[H[P]]&&R===m.f[H[P]])return!0;return!1}function gt(m){var y=m.g.a.offsetWidth,R=m.h.a.offsetWidth,P;(P=y===m.f.serif&&R===m.f["sans-serif"])||(P=rt()&&lt(m,y,R)),P?i()-m.A>=m.w?rt()&&lt(m,y,R)&&(m.u===null||m.u.hasOwnProperty(m.a.c))?yt(m,m.v):yt(m,m.B):ht(m):yt(m,m.v)}function ht(m){setTimeout(n(function(){gt(this)},m),50)}function yt(m,y){setTimeout(n(function(){l(this.g.a),l(this.h.a),l(this.j.a),l(this.m.a),y(this.a)},m),0)}function Et(m,y,R){this.c=m,this.a=y,this.f=0,this.m=this.j=!1,this.s=R}var pt=null;Et.prototype.g=function(m){var y=this.a;y.g&&h(y.f,[y.a.c("wf",m.c,I(m).toString(),"active")],[y.a.c("wf",m.c,I(m).toString(),"loading"),y.a.c("wf",m.c,I(m).toString(),"inactive")]),D(y,"fontactive",m),this.m=!0,xt(this)},Et.prototype.h=function(m){var y=this.a;if(y.g){var R=f(y.f,y.a.c("wf",m.c,I(m).toString(),"active")),P=[],M=[y.a.c("wf",m.c,I(m).toString(),"loading")];R||P.push(y.a.c("wf",m.c,I(m).toString(),"inactive")),h(y.f,P,M)}D(y,"fontinactive",m),xt(this)};function xt(m){--m.f==0&&m.j&&(m.m?(m=m.a,m.g&&h(m.f,[m.a.c("wf","active")],[m.a.c("wf","loading"),m.a.c("wf","inactive")]),D(m,"active")):B(m.a))}function ot(m){this.j=m,this.a=new et,this.h=0,this.f=this.g=!0}ot.prototype.load=function(m){this.c=new o(this.j,m.context||this.j),this.g=m.events!==!1,this.f=m.classes!==!1,tt(this,new N(this.c,m),m)};function vt(m,y,R,P,M){var j=--m.h==0;(m.f||m.g)&&setTimeout(function(){var $=M||null,st=P||null||{};if(R.length===0&&j)B(y.a);else{y.f+=R.length,j&&(y.j=j);var ct,Ct=[];for(ct=0;ct<R.length;ct++){var Pt=R[ct],Wt=st[Pt.c],oe=y.a,Rr=Pt;if(oe.g&&h(oe.f,[oe.a.c("wf",Rr.c,I(Rr).toString(),"loading")]),D(oe,"fontloading",Rr),oe=null,pt===null)if(window.FontFace){var Rr=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),np=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);pt=Rr?42<parseInt(Rr[1],10):!np}else pt=!1;pt?oe=new Mt(n(y.g,y),n(y.h,y),y.c,Pt,y.s,Wt):oe=new S(n(y.g,y),n(y.h,y),y.c,Pt,y.s,$,Wt),Ct.push(oe)}for(ct=0;ct<Ct.length;ct++)Ct[ct].start()}},0)}function tt(m,y,R){var P=[],M=R.timeout;L(y);var P=F(m.a,R,m.c),j=new Et(m.c,y,M);for(m.h=P.length,y=0,R=P.length;y<R;y++)P[y].load(function($,st,ct){vt(m,j,$,st,ct)})}function Gt(m,y){this.c=m,this.a=y}Gt.prototype.load=function(m){function y(){if(j["__mti_fntLst"+P]){var $=j["__mti_fntLst"+P](),st=[],ct;if($)for(var Ct=0;Ct<$.length;Ct++){var Pt=$[Ct].fontfamily;$[Ct].fontStyle!=null&&$[Ct].fontWeight!=null?(ct=$[Ct].fontStyle+$[Ct].fontWeight,st.push(new E(Pt,ct))):st.push(new E(Pt))}m(st)}else setTimeout(function(){y()},50)}var R=this,P=R.a.projectId,M=R.a.version;if(P){var j=R.c.o;p(this.c,(R.a.api||"https://fast.fonts.net/jsapi")+"/"+P+".js"+(M?"?v="+M:""),function($){$?m([]):(j["__MonotypeConfiguration__"+P]=function(){return R.a},y())}).id="__MonotypeAPIScript__"+P}else m([])};function At(m,y){this.c=m,this.a=y}At.prototype.load=function(m){var y,R,P=this.a.urls||[],M=this.a.families||[],j=this.a.testStrings||{},$=new v;for(y=0,R=P.length;y<R;y++)d(this.c,P[y],_($));var st=[];for(y=0,R=M.length;y<R;y++)if(P=M[y].split(":"),P[1])for(var ct=P[1].split(","),Ct=0;Ct<ct.length;Ct+=1)st.push(new E(P[0],ct[Ct]));else st.push(new E(P[0]));g($,function(){m(st,j)})};function nt(m,y){m?this.c=m:this.c=ee,this.a=[],this.f=[],this.g=y||""}var ee="https://fonts.googleapis.com/css";function De(m,y){for(var R=y.length,P=0;P<R;P++){var M=y[P].split(":");M.length==3&&m.f.push(M.pop());var j="";M.length==2&&M[1]!=""&&(j=":"),m.a.push(M.join(j))}}function Ir(m){if(m.a.length==0)throw Error("No fonts to load!");if(m.c.indexOf("kit=")!=-1)return m.c;for(var y=m.a.length,R=[],P=0;P<y;P++)R.push(m.a[P].replace(/ /g,"+"));return y=m.c+"?family="+R.join("%7C"),0<m.f.length&&(y+="&subset="+m.f.join(",")),0<m.g.length&&(y+="&text="+encodeURIComponent(m.g)),y}function zn(m){this.f=m,this.a=[],this.c={}}var sn={latin:"BESbswy","latin-ext":"\xE7\xF6\xFC\u011F\u015F",cyrillic:"\u0439\u044F\u0416",greek:"\u03B1\u03B2\u03A3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Vn={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},$n={i:"i",italic:"i",n:"n",normal:"n"},tp=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function ep(m){for(var y=m.f.length,R=0;R<y;R++){var P=m.f[R].split(":"),M=P[0].replace(/\+/g," "),j=["n4"];if(2<=P.length){var $,st=P[1];if($=[],st)for(var st=st.split(","),ct=st.length,Ct=0;Ct<ct;Ct++){var Pt;if(Pt=st[Ct],Pt.match(/^[\w-]+$/)){var Wt=tp.exec(Pt.toLowerCase());if(Wt==null)Pt="";else{if(Pt=Wt[2],Pt=Pt==null||Pt==""?"n":$n[Pt],Wt=Wt[1],Wt==null||Wt=="")Wt="4";else var oe=Vn[Wt],Wt=oe||(isNaN(Wt)?"4":Wt.substr(0,1));Pt=[Pt,Wt].join("")}}else Pt="";Pt&&$.push(Pt)}0<$.length&&(j=$),P.length==3&&(P=P[2],$=[],P=P?P.split(","):$,0<P.length&&(P=sn[P[0]])&&(m.c[M]=P))}for(m.c[M]||(P=sn[M])&&(m.c[M]=P),P=0;P<j.length;P+=1)m.a.push(new E(M,j[P]))}}function mu(m,y){this.c=m,this.a=y}var rp={Arimo:!0,Cousine:!0,Tinos:!0};mu.prototype.load=function(m){var y=new v,R=this.c,P=new nt(this.a.api,this.a.text),M=this.a.families;De(P,M);var j=new zn(M);ep(j),d(R,Ir(P),_(y)),g(y,function(){m(j.a,j.c,rp)})};function gu(m,y){this.c=m,this.a=y}gu.prototype.load=function(m){var y=this.a.id,R=this.c.o;y?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+y+".js",function(P){if(P)m([]);else if(R.Typekit&&R.Typekit.config&&R.Typekit.config.fn){P=R.Typekit.config.fn;for(var M=[],j=0;j<P.length;j+=2)for(var $=P[j],st=P[j+1],ct=0;ct<st.length;ct++)M.push(new E($,st[ct]));try{R.Typekit.load({events:!1,classes:!1,async:!0})}catch{}m(M)}},2e3):m([])};function yu(m,y){this.c=m,this.f=y,this.a=[]}yu.prototype.load=function(m){var y=this.f.id,R=this.c.o,P=this;y?(R.__webfontfontdeckmodule__||(R.__webfontfontdeckmodule__={}),R.__webfontfontdeckmodule__[y]=function(M,j){for(var $=0,st=j.fonts.length;$<st;++$){var ct=j.fonts[$];P.a.push(new E(ct.name,C("font-weight:"+ct.weight+";font-style:"+ct.style)))}m(P.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+c(this.c)+"/"+y+".js",function(M){M&&m([])})):m([])};var ke=new ot(window);ke.a.c.custom=function(m,y){return new At(y,m)},ke.a.c.fontdeck=function(m,y){return new yu(y,m)},ke.a.c.monotype=function(m,y){return new Gt(y,m)},ke.a.c.typekit=function(m,y){return new gu(y,m)},ke.a.c.google=function(m,y){return new mu(y,m)};var xu={load:n(ke.load,ke)};e.exports?e.exports=xu:(window.WebFont=xu,window.WebFontConfig&&ke.load(window.WebFontConfig))})()})(Hx);/*!
 * @pixi/filter-adjustment - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ta=function(e,r){return ta=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ta(e,r)};function zx(e,r){ta(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Vx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$x=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(e){zx(r,e);function r(t){var n=e.call(this,Vx,$x)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,t),n}return r.prototype.apply=function(t,n,i,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},r})(J);/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ea=function(e,r){return ea=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ea(e,r)};function Wx(e,r){ea(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var qx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yx=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,Kx=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Ni=function(e){Wx(r,e);function r(t,n,i){t===void 0&&(t=4),n===void 0&&(n=3),i===void 0&&(i=!1);var o=e.call(this,qx,i?Kx:Yx)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new at,o.pixelSize=1,o._clamp=i,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=n),o}return r.prototype.apply=function(t,n,i,o){var s=this._pixelSize.x/n._frame.width,a=this._pixelSize.y/n._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,n,i,o);else{for(var l=t.getFilterTexture(),h=n,f=l,c=void 0,d=this._quality-1,p=0;p<d;p++)u=this._kernels[p]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,h,f,1),c=h,h=f,f=c;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,h,i,o),t.returnFilterTexture(l)}},r.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,n){return t+n+.5},0))},r.prototype._generateKernels=function(){var t=this._blur,n=this._quality,i=[t];if(t>0)for(var o=t,s=t/n,a=1;a<n;a++)o-=s,i.push(o);this._kernels=i,this._updatePadding()},Object.defineProperty(r.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof at?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),r}(J);/*!
 * @pixi/filter-advanced-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ra=function(e,r){return ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ra(e,r)};function Jf(e,r){ra(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Qf=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zx=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Jx=function(e){Jf(r,e);function r(t){t===void 0&&(t=.5);var n=e.call(this,Qf,Zx)||this;return n.threshold=t,n}return Object.defineProperty(r.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),r}(J),Qx=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(e){Jf(r,e);function r(t){var n=e.call(this,Qf,Qx)||this;n.bloomScale=1,n.brightness=1,n._resolution=k.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var i=Object.assign(r.defaults,t);n.bloomScale=i.bloomScale,n.brightness=i.brightness;var o=i.kernels,s=i.blur,a=i.quality,u=i.pixelSize,l=i.resolution;return n._extractFilter=new Jx(i.threshold),n._extractFilter.resolution=l,n._blurFilter=o?new Ni(o):new Ni(s,a),n.pixelSize=u,n.resolution=l,n}return r.prototype.apply=function(t,n,i,o,s){var a=t.getFilterTexture();this._extractFilter.apply(t,n,a,1,s);var u=t.getFilterTexture();this._blurFilter.apply(t,a,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,n,i,o),t.returnFilterTexture(u),t.returnFilterTexture(a)},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),r.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:k.FILTER_RESOLUTION},r})(J);/*!
 * @pixi/filter-ascii - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var na=function(e,r){return na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},na(e,r)};function t1(e,r){na(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var e1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,r1=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(e){t1(r,e);function r(t){t===void 0&&(t=8);var n=e.call(this,e1,r1)||this;return n.size=t,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-bevel - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ia=function(e,r){return ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ia(e,r)};function n1(e,r){ia(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var i1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,o1=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(e){n1(r,e);function r(t){var n=e.call(this,i1,o1)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),n.padding=1,n}return r.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._angle/ur},set:function(t){this._angle=t*ur,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightColor",{get:function(){return ue(this.uniforms.lightColor)},set:function(t){kt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowColor",{get:function(){return ue(this.uniforms.shadowColor)},set:function(t){kt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var oa=function(e,r){return oa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},oa(e,r)};function s1(e,r){oa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}(function(e){s1(r,e);function r(t,n,i,o){t===void 0&&(t=2),n===void 0&&(n=4),i===void 0&&(i=k.FILTER_RESOLUTION),o===void 0&&(o=5);var s=e.call(this)||this,a,u;return typeof t=="number"?(a=t,u=t):t instanceof at?(a=t.x,u=t.y):Array.isArray(t)&&(a=t[0],u=t[1]),s.blurXFilter=new Nn(!0,a,n,i,o),s.blurYFilter=new Nn(!1,u,n,i,o),s.blurYFilter.blendMode=z.SCREEN,s.defaultFilter=new df,s}return r.prototype.apply=function(t,n,i,o){var s=t.getFilterTexture();this.defaultFilter.apply(t,n,i,o),this.blurXFilter.apply(t,n,s,1),this.blurYFilter.apply(t,s,i,0),t.returnFilterTexture(s)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-bulge-pinch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sa=function(e,r){return sa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},sa(e,r)};function a1(e,r){sa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var u1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,l1=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(e){a1(r,e);function r(t){var n=e.call(this,u1,l1)||this;return n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var s=n.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),r.defaults={center:[.5,.5],radius:100,strength:1},r})(J);/*!
 * @pixi/filter-color-map - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var aa=function(e,r){return aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},aa(e,r)};function h1(e,r){aa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var f1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,c1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(e){h1(r,e);function r(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=1);var o=e.call(this,f1,c1)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=n,o.mix=i,o.colorMap=t,o}return r.prototype.apply=function(t,n,i,o){this.uniforms._mix=this.mix,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var n;!t||(t instanceof W||(t=W.from(t)),((n=t)===null||n===void 0?void 0:n.baseTexture)&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=we.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?re.NEAREST:re.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=we.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),r.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},r.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},r})(J);/*!
 * @pixi/filter-color-overlay - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ua=function(e,r){return ua=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ua(e,r)};function d1(e,r){ua(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var p1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,v1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(e){d1(r,e);function r(t,n){t===void 0&&(t=0),n===void 0&&(n=1);var i=e.call(this,p1,v1)||this;return i._color=0,i._alpha=1,i.uniforms.color=new Float32Array(3),i.color=t,i.alpha=n,i}return Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.color;typeof t=="number"?(kt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._color=ue(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var la=function(e,r){return la=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},la(e,r)};function _1(e,r){la(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var m1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,g1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(e){_1(r,e);function r(t,n,i){t===void 0&&(t=16711680),n===void 0&&(n=0),i===void 0&&(i=.4);var o=e.call(this,m1,g1)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=n,o.epsilon=i,o}return Object.defineProperty(r.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var n=this.uniforms.originalColor;typeof t=="number"?(kt(t,n),this._originalColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._originalColor=ue(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var n=this.uniforms.newColor;typeof t=="number"?(kt(t,n),this._newColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._newColor=ue(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-convolution - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ha=function(e,r){return ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ha(e,r)};function y1(e,r){ha(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var x1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,b1=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(e){y1(r,e);function r(t,n,i){n===void 0&&(n=200),i===void 0&&(i=200);var o=e.call(this,x1,b1)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=n,o.height=i,o}return Object.defineProperty(r.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var n=this;t.forEach(function(i,o){n.uniforms.matrix[o]=i})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-cross-hatch - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fa=function(e,r){return fa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},fa(e,r)};function T1(e,r){fa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var w1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,E1=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(e){T1(r,e);function r(){return e.call(this,w1,E1)||this}return r})(J);/*!
 * @pixi/filter-crt - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ca=function(e,r){return ca=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ca(e,r)};function C1(e,r){ca(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var P1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,I1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy - vec2(0.5, 0.5)) * filterArea.xy / dimensions;

    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(e){C1(r,e);function r(t){var n=e.call(this,P1,I1)||this;return n.time=0,n.seed=0,n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var s=n.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),r.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},r})(J);/*!
 * @pixi/filter-dot - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var da=function(e,r){return da=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},da(e,r)};function R1(e,r){da(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var O1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,A1=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(e){R1(r,e);function r(t,n){t===void 0&&(t=1),n===void 0&&(n=5);var i=e.call(this,O1,A1)||this;return i.scale=t,i.angle=n,i}return Object.defineProperty(r.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-drop-shadow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pa=function(e,r){return pa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},pa(e,r)};function S1(e,r){pa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Fi=function(){return Fi=Object.assign||function(r){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Fi.apply(this,arguments)},N1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,F1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,$E=function(e){S1(r,e);function r(t){var n=e.call(this)||this;n.angle=45,n._distance=5,n._resolution=k.FILTER_RESOLUTION;var i=t?Fi(Fi({},r.defaults),t):r.defaults,o=i.kernels,s=i.blur,a=i.quality,u=i.pixelSize,l=i.resolution;n._tintFilter=new J(N1,F1),n._tintFilter.uniforms.color=new Float32Array(4),n._tintFilter.uniforms.shift=new at,n._tintFilter.resolution=l,n._blurFilter=o?new Ni(o):new Ni(s,a),n.pixelSize=u,n.resolution=l;var h=i.shadowOnly,f=i.rotation,c=i.distance,d=i.alpha,p=i.color;return n.shadowOnly=h,n.rotation=f,n.distance=c,n.alpha=d,n.color=p,n._updatePadding(),n}return r.prototype.apply=function(t,n,i,o){var s=t.getFilterTexture();this._tintFilter.apply(t,n,s,1),this._blurFilter.apply(t,s,i,o),this.shadowOnly!==!0&&t.applyFilter(this,n,i,0),t.returnFilterTexture(s)},r.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},r.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.angle/ur},set:function(t){this.angle=t*ur,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return ue(this._tintFilter.uniforms.color)},set:function(t){kt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),r.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:k.FILTER_RESOLUTION},r}(J);/*!
 * @pixi/filter-emboss - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var va=function(e,r){return va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},va(e,r)};function U1(e,r){va(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var L1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,M1=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(e){U1(r,e);function r(t){t===void 0&&(t=5);var n=e.call(this,L1,M1)||this;return n.strength=t,n}return Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-glitch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _a=function(e,r){return _a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},_a(e,r)};function G1(e,r){_a(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var B1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,D1=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(e){G1(r,e);function r(t){var n=e.call(this,B1,D1)||this;return n.offset=100,n.fillMode=r.TRANSPARENT,n.average=!1,n.seed=0,n.minSize=8,n.sampleSize=512,n._slices=0,n._offsets=new Float32Array(1),n._sizes=new Float32Array(1),n._direction=-1,n.uniforms.dimensions=new Float32Array(2),n._canvas=document.createElement("canvas"),n._canvas.width=4,n._canvas.height=n.sampleSize,n.texture=W.from(n._canvas,{scaleMode:re.NEAREST}),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var s=n.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/a,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,n,i,o)},r.prototype._randomizeSizes=function(){var t=this._sizes,n=this._slices-1,i=this.sampleSize,o=Math.min(this.minSize/i,.9/this._slices);if(this.average){for(var s=this._slices,a=1,u=0;u<n;u++){var l=a/(s-u),h=Math.max(l*(1-Math.random()*.6),o);t[u]=h,a-=h}t[n]=a}else{for(var a=1,f=Math.sqrt(1/this._slices),u=0;u<n;u++){var h=Math.max(f*a*Math.random(),o);t[u]=h,a-=h}t[n]=a}this.shuffle()},r.prototype.shuffle=function(){for(var t=this._sizes,n=this._slices-1,i=n;i>0;i--){var o=Math.random()*i>>0,s=t[i];t[i]=t[o],t[o]=s}},r.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var t=this.sampleSize,n=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);for(var o,s=0,a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);var u=this._sizes[a]*t,l=o>0?o:0,h=o<0?-o:0;i.fillStyle="rgba("+l+", "+h+", 0, 1)",i.fillRect(0,s>>0,t,u+1>>0),s+=u}n.baseTexture.update(),this.uniforms.displacementMap=n},Object.defineProperty(r.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._sizes[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._offsets[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var n=t*ur;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},r.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},r.TRANSPARENT=0,r.ORIGINAL=1,r.LOOP=2,r.CLAMP=3,r.MIRROR=4,r})(J);/*!
 * @pixi/filter-glow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ma=function(e,r){return ma=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ma(e,r)};function k1(e,r){ma(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var j1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,X1=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`,WE=function(e){k1(r,e);function r(t){var n=this,i=Object.assign({},r.defaults,t),o=i.outerStrength,s=i.innerStrength,a=i.color,u=i.knockout,l=i.quality,h=Math.round(i.distance);return n=e.call(this,j1,X1.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/h).toFixed(7)).replace(/__DIST__/gi,h.toFixed(0)+".0"))||this,n.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(n,{color:a,outerStrength:o,innerStrength:s,padding:h,knockout:u}),n}return Object.defineProperty(r.prototype,"color",{get:function(){return ue(this.uniforms.glowColor)},set:function(t){kt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),r.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},r}(J);/*!
 * @pixi/filter-godray - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ga=function(e,r){return ga=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ga(e,r)};function H1(e,r){ga(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var z1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,V1=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,$1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(e){H1(r,e);function r(t){var n=e.call(this,z1,$1.replace("${perlin}",V1))||this;n.parallel=!0,n.time=0,n._angle=0,n.uniforms.dimensions=new Float32Array(2);var i=Object.assign(r.defaults,t);return n._angleLight=new at,n.angle=i.angle,n.gain=i.gain,n.lacunarity=i.lacunarity,n.alpha=i.alpha,n.parallel=i.parallel,n.center=i.center,n.time=i.time,n}return r.prototype.apply=function(t,n,i,o){var s=n.filterFrame,a=s.width,u=s.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/a,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var n=t*ur;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),r.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},r})(J);/*!
 * @pixi/filter-motion-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ya=function(e,r){return ya=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ya(e,r)};function W1(e,r){ya(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var q1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Y1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){W1(r,e);function r(t,n,i){t===void 0&&(t=[0,0]),n===void 0&&(n=5),i===void 0&&(i=0);var o=e.call(this,q1,Y1)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new lr(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=n,o.offset=i,o}return r.prototype.apply=function(t,n,i,o){var s=this.velocity,a=s.x,u=s.y;this.uniforms.uKernelSize=a!==0||u!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),r.prototype.setVelocity=function(t){if(Array.isArray(t)){var n=t[0],i=t[1];this._velocity.set(n,i)}else this._velocity.copyFrom(t)},r.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-multi-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xa=function(e,r){return xa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},xa(e,r)};function K1(e,r){xa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Z1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,J1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(e){K1(r,e);function r(t,n,i){n===void 0&&(n=.05),i===void 0&&(i=t.length);var o=e.call(this,Z1,J1.replace(/%maxColors%/g,i.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=n,o._maxColors=i,o.uniforms.originalColors=new Float32Array(i*3),o.uniforms.targetColors=new Float32Array(i*3),o.replacements=t,o}return Object.defineProperty(r.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var n=this.uniforms.originalColors,i=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");n[o*3]=-1;for(var s=0;s<o;s++){var a=t[s],u=a[0];typeof u=="number"?u=kt(u):a[0]=ue(u),n[s*3]=u[0],n[s*3+1]=u[1],n[s*3+2]=u[2];var l=a[1];typeof l=="number"?l=kt(l):a[1]=ue(l),i[s*3]=l[0],i[s*3+1]=l[1],i[s*3+2]=l[2]}this._replacements=t},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(r.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-old-film - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ba=function(e,r){return ba=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ba(e,r)};function Q1(e,r){ba(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var tb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,eb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(e){Q1(r,e);function r(t,n){n===void 0&&(n=0);var i=e.call(this,tb,eb)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(i.seed=t,t=void 0):i.seed=n,Object.assign(i,r.defaults,t),i}return r.prototype.apply=function(t,n,i,o){var s,a;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=n.filterFrame)===null||a===void 0?void 0:a.height,this.uniforms.seed=this.seed,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),r.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},r})(J);/*!
 * @pixi/filter-outline - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ta=function(e,r){return Ta=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ta(e,r)};function rb(e,r){Ta(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var nb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ib=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(e){rb(r,e);function r(t,n,i){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=.1);var o=e.call(this,nb,ib.replace(/\$\{angleStep\}/,r.getAngleStep(i)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:n,quality:i}),o}return r.getAngleStep=function(t){var n=Math.max(t*r.MAX_SAMPLES,r.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},r.prototype.apply=function(t,n,i,o){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"color",{get:function(){return ue(this.uniforms.outlineColor)},set:function(t){kt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),r.MIN_SAMPLES=1,r.MAX_SAMPLES=100,r})(J);/*!
 * @pixi/filter-pixelate - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wa=function(e,r){return wa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},wa(e,r)};function ob(e,r){wa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var sb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ab=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(e){ob(r,e);function r(t){t===void 0&&(t=10);var n=e.call(this,sb,ab)||this;return n.size=t,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-radial-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ea=function(e,r){return Ea=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ea(e,r)};function ub(e,r){Ea(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var lb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){ub(r,e);function r(t,n,i,o){t===void 0&&(t=0),n===void 0&&(n=[0,0]),i===void 0&&(i=5),o===void 0&&(o=-1);var s=e.call(this,lb,hb)||this;return s._angle=0,s.angle=t,s.center=n,s.kernelSize=i,s.radius=o,s}return r.prototype.apply=function(t,n,i,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-reflection - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ca=function(e,r){return Ca=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ca(e,r)};function fb(e,r){Ca(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var cb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,db=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(e){fb(r,e);function r(t){var n=e.call(this,cb,db)||this;return n.time=0,n.uniforms.amplitude=new Float32Array(2),n.uniforms.waveLength=new Float32Array(2),n.uniforms.alpha=new Float32Array(2),n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var s,a;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=n.filterFrame)===null||a===void 0?void 0:a.height,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),r.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},r})(J);/*!
 * @pixi/filter-rgb-split - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Pa=function(e,r){return Pa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Pa(e,r)};function pb(e,r){Pa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var vb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_b=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(e){pb(r,e);function r(t,n,i){t===void 0&&(t=[-10,0]),n===void 0&&(n=[0,10]),i===void 0&&(i=[0,0]);var o=e.call(this,vb,_b)||this;return o.red=t,o.green=n,o.blue=i,o}return Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-shockwave - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ia=function(e,r){return Ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ia(e,r)};function mb(e,r){Ia(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var gb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,yb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(e){mb(r,e);function r(t,n,i){t===void 0&&(t=[0,0]),i===void 0&&(i=0);var o=e.call(this,gb,yb)||this;return o.center=t,Object.assign(o,r.defaults,n),o.time=i,o}return r.prototype.apply=function(t,n,i,o){this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),r.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},r})(J);/*!
 * @pixi/filter-simple-lightmap - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ra=function(e,r){return Ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ra(e,r)};function xb(e,r){Ra(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var bb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Tb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(e){xb(r,e);function r(t,n,i){n===void 0&&(n=0),i===void 0&&(i=1);var o=e.call(this,bb,Tb)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,i]),o.texture=t,o.color=n,o}return r.prototype.apply=function(t,n,i,o){var s,a;this.uniforms.dimensions[0]=(s=n.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=n.filterFrame)===null||a===void 0?void 0:a.height,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.ambientColor;typeof t=="number"?(kt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],this._color=ue(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-tilt-shift - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Oa=function(e,r){return Oa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Oa(e,r)};function Ui(e,r){Oa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var wb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Eb=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,tc=function(e){Ui(r,e);function r(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var s=e.call(this,wb,Eb)||this;return s.uniforms.blur=t,s.uniforms.gradientBlur=n,s.uniforms.start=i||new at(0,window.innerHeight/2),s.uniforms.end=o||new at(600,window.innerHeight/2),s.uniforms.delta=new at(30,30),s.uniforms.texSize=new at(window.innerWidth,window.innerHeight),s.updateDelta(),s}return r.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(r.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),r}(J),Cb=function(e){Ui(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=t/i,this.uniforms.delta.y=n/i},r}(tc),Pb=function(e){Ui(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=-n/i,this.uniforms.delta.y=t/i},r}(tc);(function(e){Ui(r,e);function r(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var s=e.call(this)||this;return s.tiltShiftXFilter=new Cb(t,n,i,o),s.tiltShiftYFilter=new Pb(t,n,i,o),s}return r.prototype.apply=function(t,n,i,o){var s=t.getFilterTexture();this.tiltShiftXFilter.apply(t,n,s,1),this.tiltShiftYFilter.apply(t,s,i,o),t.returnFilterTexture(s)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),r})(J);/*!
 * @pixi/filter-twist - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Aa=function(e,r){return Aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Aa(e,r)};function Ib(e,r){Aa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Rb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ob=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(e){Ib(r,e);function r(t){var n=e.call(this,Rb,Ob)||this;return Object.assign(n,r.defaults,t),n}return Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),r.defaults={radius:200,angle:4,padding:20,offset:new at},r})(J);/*!
 * @pixi/filter-zoom-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Sa=function(e,r){return Sa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Sa(e,r)};function Ab(e,r){Sa(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function Sb(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]]);return t}var Nb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Fb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(e){Ab(r,e);function r(t){var n=this,i=Object.assign(r.defaults,t),o=i.maxKernelSize,s=Sb(i,["maxKernelSize"]);return n=e.call(this,Nb,Fb.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(n,s),n}return Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),r.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},r})(J);function Ub(e,r){const t=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return r?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Lb={},Fn=()=>{},Un=Object.assign,Mb=(e,r)=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)},Gb=Object.prototype.hasOwnProperty,Li=(e,r)=>Gb.call(e,r),Jt=Array.isArray,Ln=e=>Mi(e)==="[object Map]",Bb=e=>Mi(e)==="[object Set]",Ge=e=>typeof e=="function",ec=e=>typeof e=="string",Na=e=>typeof e=="symbol",zr=e=>e!==null&&typeof e=="object",Db=e=>zr(e)&&Ge(e.then)&&Ge(e.catch),kb=Object.prototype.toString,Mi=e=>kb.call(e),jb=e=>Mi(e).slice(8,-1),Xb=e=>Mi(e)==="[object Object]",Fa=e=>ec(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gi=(e,r)=>!Object.is(e,r),Hb=(e,r,t)=>{Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:t})};let zb;function Vb(e,r){r=r||zb,r&&r.active&&r.effects.push(e)}const rc=e=>{const r=new Set(e);return r.w=0,r.n=0,r},nc=e=>(e.w&We)>0,ic=e=>(e.n&We)>0,$b=({deps:e})=>{if(e.length)for(let r=0;r<e.length;r++)e[r].w|=We},Wb=e=>{const{deps:r}=e;if(r.length){let t=0;for(let n=0;n<r.length;n++){const i=r[n];nc(i)&&!ic(i)?i.delete(e):r[t++]=i,i.w&=~We,i.n&=~We}r.length=t}},Ua=new WeakMap;let Mn=0,We=1;const La=30,Vr=[];let br;const Tr=Symbol(""),Ma=Symbol("");class qb{constructor(r,t=null,n){this.fn=r,this.scheduler=t,this.active=!0,this.deps=[],Vb(this,n)}run(){if(!this.active)return this.fn();if(!Vr.length||!Vr.includes(this))try{return Vr.push(br=this),Kb(),We=1<<++Mn,Mn<=La?$b(this):oc(this),this.fn()}finally{Mn<=La&&Wb(this),We=1<<--Mn,sc(),Vr.pop();const r=Vr.length;br=r>0?Vr[r-1]:void 0}}stop(){this.active&&(oc(this),this.onStop&&this.onStop(),this.active=!1)}}function oc(e){const{deps:r}=e;if(r.length){for(let t=0;t<r.length;t++)r[t].delete(e);r.length=0}}let $r=!0;const Ga=[];function Yb(){Ga.push($r),$r=!1}function Kb(){Ga.push($r),$r=!0}function sc(){const e=Ga.pop();$r=e===void 0?!0:e}function de(e,r,t){if(!Zb())return;let n=Ua.get(e);n||Ua.set(e,n=new Map);let i=n.get(t);i||n.set(t,i=rc()),Jb(i)}function Zb(){return $r&&br!==void 0}function Jb(e,r){let t=!1;Mn<=La?ic(e)||(e.n|=We,t=!nc(e)):t=!e.has(br),t&&(e.add(br),br.deps.push(e))}function qe(e,r,t,n,i,o){const s=Ua.get(e);if(!s)return;let a=[];if(r==="clear")a=[...s.values()];else if(t==="length"&&Jt(e))s.forEach((u,l)=>{(l==="length"||l>=n)&&a.push(u)});else switch(t!==void 0&&a.push(s.get(t)),r){case"add":Jt(e)?Fa(t)&&a.push(s.get("length")):(a.push(s.get(Tr)),Ln(e)&&a.push(s.get(Ma)));break;case"delete":Jt(e)||(a.push(s.get(Tr)),Ln(e)&&a.push(s.get(Ma)));break;case"set":Ln(e)&&a.push(s.get(Tr));break}if(a.length===1)a[0]&&ac(a[0]);else{const u=[];for(const l of a)l&&u.push(...l);ac(rc(u))}}function ac(e,r){for(const t of Jt(e)?e:[...e])(t!==br||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Qb=Ub("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Na)),tT=hc(),eT=hc(!0),lc=rT();function rT(){const e={};return["includes","indexOf","lastIndexOf"].forEach(r=>{e[r]=function(...t){const n=Ot(this);for(let o=0,s=this.length;o<s;o++)de(n,"get",o+"");const i=n[r](...t);return i===-1||i===!1?n[r](...t.map(Ot)):i}}),["push","pop","shift","unshift","splice"].forEach(r=>{e[r]=function(...t){Yb();const n=Ot(this)[r].apply(this,t);return sc(),n}}),e}function hc(e=!1,r=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return r;if(i==="__v_raw"&&o===(e?r?gT:mc:r?mT:_c).get(n))return n;const s=Jt(n);if(!e&&s&&Li(lc,i))return Reflect.get(lc,i,o);const a=Reflect.get(n,i,o);return(Na(i)?uc.has(i):Qb(i))||(e||de(n,"get",i),r)?a:pe(a)?!s||!Fa(i)?a.value:a:zr(a)?e?gc(a):Da(a):a}}const nT=iT();function iT(e=!1){return function(t,n,i,o){let s=t[n];if(zi(s)&&pe(s)&&!pe(i))return!1;if(!e&&!zi(i)&&(xc(i)||(i=Ot(i),s=Ot(s)),!Jt(t)&&pe(s)&&!pe(i)))return s.value=i,!0;const a=Jt(t)&&Fa(n)?Number(n)<t.length:Li(t,n),u=Reflect.set(t,n,i,o);return t===Ot(o)&&(a?Gi(i,s)&&qe(t,"set",n,i):qe(t,"add",n,i)),u}}function oT(e,r){const t=Li(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&t&&qe(e,"delete",r,void 0),n}function sT(e,r){const t=Reflect.has(e,r);return(!Na(r)||!uc.has(r))&&de(e,"has",r),t}function aT(e){return de(e,"iterate",Jt(e)?"length":Tr),Reflect.ownKeys(e)}const uT={get:tT,set:nT,deleteProperty:oT,has:sT,ownKeys:aT},lT={get:eT,set(e,r){return!0},deleteProperty(e,r){return!0}},Ba=e=>e,Bi=e=>Reflect.getPrototypeOf(e);function Di(e,r,t=!1,n=!1){e=e.__v_raw;const i=Ot(e),o=Ot(r);r!==o&&!t&&de(i,"get",r),!t&&de(i,"get",o);const{has:s}=Bi(i),a=n?Ba:t?ja:ka;if(s.call(i,r))return a(e.get(r));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(r)}function ki(e,r=!1){const t=this.__v_raw,n=Ot(t),i=Ot(e);return e!==i&&!r&&de(n,"has",e),!r&&de(n,"has",i),e===i?t.has(e):t.has(e)||t.has(i)}function ji(e,r=!1){return e=e.__v_raw,!r&&de(Ot(e),"iterate",Tr),Reflect.get(e,"size",e)}function fc(e){e=Ot(e);const r=Ot(this);return Bi(r).has.call(r,e)||(r.add(e),qe(r,"add",e,e)),this}function cc(e,r){r=Ot(r);const t=Ot(this),{has:n,get:i}=Bi(t);let o=n.call(t,e);o||(e=Ot(e),o=n.call(t,e));const s=i.call(t,e);return t.set(e,r),o?Gi(r,s)&&qe(t,"set",e,r):qe(t,"add",e,r),this}function dc(e){const r=Ot(this),{has:t,get:n}=Bi(r);let i=t.call(r,e);i||(e=Ot(e),i=t.call(r,e)),n&&n.call(r,e);const o=r.delete(e);return i&&qe(r,"delete",e,void 0),o}function pc(){const e=Ot(this),r=e.size!==0,t=e.clear();return r&&qe(e,"clear",void 0,void 0),t}function Xi(e,r){return function(n,i){const o=this,s=o.__v_raw,a=Ot(s),u=r?Ba:e?ja:ka;return!e&&de(a,"iterate",Tr),s.forEach((l,h)=>n.call(i,u(l),u(h),o))}}function Hi(e,r,t){return function(...n){const i=this.__v_raw,o=Ot(i),s=Ln(o),a=e==="entries"||e===Symbol.iterator&&s,u=e==="keys"&&s,l=i[e](...n),h=t?Ba:r?ja:ka;return!r&&de(o,"iterate",u?Ma:Tr),{next(){const{value:f,done:c}=l.next();return c?{value:f,done:c}:{value:a?[h(f[0]),h(f[1])]:h(f),done:c}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...r){return e==="delete"?!1:this}}function hT(){const e={get(o){return Di(this,o)},get size(){return ji(this)},has:ki,add:fc,set:cc,delete:dc,clear:pc,forEach:Xi(!1,!1)},r={get(o){return Di(this,o,!1,!0)},get size(){return ji(this)},has:ki,add:fc,set:cc,delete:dc,clear:pc,forEach:Xi(!1,!0)},t={get(o){return Di(this,o,!0)},get size(){return ji(this,!0)},has(o){return ki.call(this,o,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Xi(!0,!1)},n={get(o){return Di(this,o,!0,!0)},get size(){return ji(this,!0)},has(o){return ki.call(this,o,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Hi(o,!1,!1),t[o]=Hi(o,!0,!1),r[o]=Hi(o,!1,!0),n[o]=Hi(o,!0,!0)}),[e,t,r,n]}const[fT,cT,dT,pT]=hT();function vc(e,r){const t=r?e?pT:dT:e?cT:fT;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Li(t,i)&&i in n?t:n,i,o)}const vT={get:vc(!1,!1)},_T={get:vc(!0,!1)},_c=new WeakMap,mT=new WeakMap,mc=new WeakMap,gT=new WeakMap;function yT(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xT(e){return e.__v_skip||!Object.isExtensible(e)?0:yT(jb(e))}function Da(e){return zi(e)?e:yc(e,!1,uT,vT,_c)}function gc(e){return yc(e,!0,lT,_T,mc)}function yc(e,r,t,n,i){if(!zr(e)||e.__v_raw&&!(r&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=xT(e);if(s===0)return e;const a=new Proxy(e,s===2?n:t);return i.set(e,a),a}function Gn(e){return zi(e)?Gn(e.__v_raw):!!(e&&e.__v_isReactive)}function zi(e){return!!(e&&e.__v_isReadonly)}function xc(e){return!!(e&&e.__v_isShallow)}function Ot(e){const r=e&&e.__v_raw;return r?Ot(r):e}function bT(e){return Hb(e,"__v_skip",!0),e}const ka=e=>zr(e)?Da(e):e,ja=e=>zr(e)?gc(e):e;function pe(e){return Boolean(e&&e.__v_isRef===!0)}function TT(e){return pe(e)?e.value:e}const wT={get:(e,r,t)=>TT(Reflect.get(e,r,t)),set:(e,r,t,n)=>{const i=e[r];return pe(i)&&!pe(t)?(i.value=t,!0):Reflect.set(e,r,t,n)}};function ET(e){return Gn(e)?e:new Proxy(e,wT)}Promise.resolve();function Wr(e,r,t,n){let i;try{i=n?e(...n):e()}catch(o){bc(o,r,t)}return i}function Vi(e,r,t,n){if(Ge(e)){const o=Wr(e,r,t,n);return o&&Db(o)&&o.catch(s=>{bc(s,r,t)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(Vi(e[o],r,t,n));return i}function bc(e,r,t,n=!0){const i=r?r.vnode:null;if(r){let o=r.parent;const s=r.proxy,a=t;for(;o;){const l=o.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](e,s,a)===!1)return}o=o.parent}const u=r.appContext.config.errorHandler;if(u){Wr(u,null,10,[e,s,a]);return}}CT(e,t,i,n)}function CT(e,r,t,n=!0){console.error(e)}let $i=!1,Xa=!1;const ve=[];let Ke=0;const Bn=[];let Dn=null,qr=0;const kn=[];let Ze=null,Yr=0;const Tc=Promise.resolve();let Ha=null,za=null;function PT(e){const r=Ha||Tc;return e?r.then(this?e.bind(this):e):r}function IT(e){let r=Ke+1,t=ve.length;for(;r<t;){const n=r+t>>>1;jn(ve[n])<e?r=n+1:t=n}return r}function RT(e){(!ve.length||!ve.includes(e,$i&&e.allowRecurse?Ke+1:Ke))&&e!==za&&(e.id==null?ve.push(e):ve.splice(IT(e.id),0,e),wc())}function wc(){!$i&&!Xa&&(Xa=!0,Ha=Tc.then(Pc))}function Ec(e,r,t,n){Jt(e)?t.push(...e):(!r||!r.includes(e,e.allowRecurse?n+1:n))&&t.push(e),wc()}function OT(e){Ec(e,Dn,Bn,qr)}function AT(e){Ec(e,Ze,kn,Yr)}function Cc(e,r=null){if(Bn.length){for(za=r,Dn=[...new Set(Bn)],Bn.length=0,qr=0;qr<Dn.length;qr++)Dn[qr]();Dn=null,qr=0,za=null,Cc(e,r)}}function ST(e){if(kn.length){const r=[...new Set(kn)];if(kn.length=0,Ze){Ze.push(...r);return}for(Ze=r,Ze.sort((t,n)=>jn(t)-jn(n)),Yr=0;Yr<Ze.length;Yr++)Ze[Yr]();Ze=null,Yr=0}}const jn=e=>e.id==null?1/0:e.id;function Pc(e){Xa=!1,$i=!0,Cc(e),ve.sort((t,n)=>jn(t)-jn(n));const r=Fn;try{for(Ke=0;Ke<ve.length;Ke++){const t=ve[Ke];t&&t.active!==!1&&Wr(t,null,14)}}finally{Ke=0,ve.length=0,ST(),$i=!1,Ha=null,(ve.length||Bn.length||kn.length)&&Pc(e)}}let NT=null;function FT(e,r){r&&r.pendingBranch?Jt(e)?r.effects.push(...e):r.effects.push(e):AT(e)}function UT(e,r,t=!1){const n=Er||NT;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&Ge(r)?r.call(n.proxy):r}}const Ic={};function Rc(e,r,t){return Oc(e,r,t)}function Oc(e,r,{immediate:t,deep:n,flush:i,onTrack:o,onTrigger:s}=Lb){const a=Er;let u,l=!1,h=!1;if(pe(e)?(u=()=>e.value,l=xc(e)):Gn(e)?(u=()=>e,n=!0):Jt(e)?(h=!0,l=e.some(Gn),u=()=>e.map(g=>{if(pe(g))return g.value;if(Gn(g))return Kr(g);if(Ge(g))return Wr(g,a,2)})):Ge(e)?r?u=()=>Wr(e,a,2):u=()=>{if(!(a&&a.isUnmounted))return f&&f(),Vi(e,a,3,[c])}:u=Fn,r&&n){const g=u;u=()=>Kr(g())}let f,c=g=>{f=_.onStop=()=>{Wr(g,a,4)}};if(HT)return c=Fn,r?t&&Vi(r,a,3,[u(),h?[]:void 0,c]):u(),Fn;let d=h?[]:Ic;const p=()=>{if(!!_.active)if(r){const g=_.run();(n||l||(h?g.some((b,w)=>Gi(b,d[w])):Gi(g,d)))&&(f&&f(),Vi(r,a,3,[g,d===Ic?void 0:d,c]),d=g)}else _.run()};p.allowRecurse=!!r;let v;i==="sync"?v=p:i==="post"?v=()=>Nc(p,a&&a.suspense):v=()=>{!a||a.isMounted?OT(p):p()};const _=new qb(u,v);return r?t?p():d=_.run():i==="post"?Nc(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Mb(a.scope.effects,_)}}function LT(e,r,t){const n=this.proxy,i=ec(e)?e.includes(".")?MT(n,e):()=>n[e]:e.bind(n,n);let o;Ge(r)?o=r:(o=r.handler,t=r);const s=Er;Uc(this);const a=Oc(i,o.bind(n),t);return s?Uc(s):jT(),a}function MT(e,r){const t=r.split(".");return()=>{let n=e;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Kr(e,r){if(!zr(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),pe(e))Kr(e.value,r);else if(Jt(e))for(let t=0;t<e.length;t++)Kr(e[t],r);else if(Bb(e)||Ln(e))e.forEach(t=>{Kr(t,r)});else if(Xb(e))for(const t in e)Kr(e[t],r);return e}function GT(e){const r=e.type,{mixins:t,extends:n}=r,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(r);let u;return a?u=a:!i.length&&!t&&!n?u=r:(u={},i.length&&i.forEach(l=>Wi(u,l,s,!0)),Wi(u,r,s)),o.set(r,u),u}function Wi(e,r,t,n=!1){const{mixins:i,extends:o}=r;o&&Wi(e,o,t,!0),i&&i.forEach(s=>Wi(e,s,t,!0));for(const s in r)if(!(n&&s==="expose")){const a=BT[s]||t&&t[s];e[s]=a?a(e[s],r[s]):r[s]}return e}const BT={data:Ac,props:wr,emits:wr,methods:wr,computed:wr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:wr,directives:wr,watch:kT,provide:Ac,inject:DT};function Ac(e,r){return r?e?function(){return Un(Ge(e)?e.call(this,this):e,Ge(r)?r.call(this,this):r)}:r:e}function DT(e,r){return wr(Sc(e),Sc(r))}function Sc(e){if(Jt(e)){const r={};for(let t=0;t<e.length;t++)r[e[t]]=e[t];return r}return e}function qt(e,r){return e?[...new Set([].concat(e,r))]:r}function wr(e,r){return e?Un(Un(Object.create(null),e),r):r}function kT(e,r){if(!e)return r;if(!r)return e;const t=Un(Object.create(null),e);for(const n in r)t[n]=qt(e[n],r[n]);return t}const Nc=FT,Va=e=>e?XT(e)?zT(e)||e.proxy:Va(e.parent):null,Fc=Un(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Va(e.parent),$root:e=>Va(e.root),$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?GT(e):e.type,$forceUpdate:e=>()=>RT(e.update),$nextTick:e=>PT.bind(e.proxy),$watch:e=>__VUE_OPTIONS_API__?LT.bind(e):Fn});let Er=null;const Uc=e=>{Er=e,e.scope.on()},jT=()=>{Er&&Er.scope.off(),Er=null};function XT(e){return e.vnode.shapeFlag&4}let HT=!1;function zT(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ET(bT(e.exposed)),{get(r,t){if(t in r)return r[t];if(t in Fc)return Fc[t](e)}}))}function VT(){return Lc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Lc(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const $T=typeof Proxy=="function",WT="devtools-plugin:setup",qT="plugin:settings:set";class YT{constructor(r,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=r,this.hook=t;const n={};if(r.settings)for(const s in r.settings){const a=r.settings[s];n[s]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${r.id}`;let o=Object.assign({},n);try{const s=localStorage.getItem(i),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(i,JSON.stringify(s))}catch{}o=s}},t&&t.on(qT,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...u)=>{this.onQueue.push({method:a,args:u})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...u)=>(this.targetQueue.push({method:a,args:u,resolve:()=>{}}),this.fallbacks[a](...u)):(...u)=>new Promise(l=>{this.targetQueue.push({method:a,args:u,resolve:l})})})}async setRealTarget(r){this.target=r;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function KT(e,r){const t=Lc(),n=VT(),i=$T&&e.enableEarlyProxy;if(n&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))n.emit(WT,e,r);else{const o=i?new YT(e,n):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:r,proxy:o}),o&&r(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var $a="store";function ZT(e){return e===void 0&&(e=null),UT(e!==null?e:$a)}function JT(e,r){return e.filter(r)[0]}function Wa(e,r){if(r===void 0&&(r=[]),e===null||typeof e!="object")return e;var t=JT(r,function(i){return i.original===e});if(t)return t.copy;var n=Array.isArray(e)?[]:{};return r.push({original:e,copy:n}),Object.keys(e).forEach(function(i){n[i]=Wa(e[i],r)}),n}function Zr(e,r){Object.keys(e).forEach(function(t){return r(e[t],t)})}function Mc(e){return e!==null&&typeof e=="object"}function QT(e){return e&&typeof e.then=="function"}function t2(e,r){return function(){return e(r)}}function Gc(e,r,t){return r.indexOf(e)<0&&(t&&t.prepend?r.unshift(e):r.push(e)),function(){var n=r.indexOf(e);n>-1&&r.splice(n,1)}}function Bc(e,r){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var t=e.state;qi(e,t,[],e._modules.root,!0),qa(e,t,r)}function qa(e,r,t){var n=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};Zr(i,function(s,a){o[a]=t2(s,e),Object.defineProperty(e.getters,a,{get:function(){return o[a]()},enumerable:!0})}),e._state=Da({data:r}),e.strict&&o2(e),n&&t&&e._withCommit(function(){n.data=null})}function qi(e,r,t,n,i){var o=!t.length,s=e._modules.getNamespace(t);if(n.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=n),!o&&!i){var a=Ya(r,t.slice(0,-1)),u=t[t.length-1];e._withCommit(function(){a[u]=n.state})}var l=n.context=e2(e,s,t);n.forEachMutation(function(h,f){var c=s+f;r2(e,c,h,l)}),n.forEachAction(function(h,f){var c=h.root?f:s+f,d=h.handler||h;n2(e,c,d,l)}),n.forEachGetter(function(h,f){var c=s+f;i2(e,c,h,l)}),n.forEachChild(function(h,f){qi(e,r,t.concat(f),h,i)})}function e2(e,r,t){var n=r==="",i={dispatch:n?e.dispatch:function(o,s,a){var u=Yi(o,s,a),l=u.payload,h=u.options,f=u.type;return(!h||!h.root)&&(f=r+f),e.dispatch(f,l)},commit:n?e.commit:function(o,s,a){var u=Yi(o,s,a),l=u.payload,h=u.options,f=u.type;(!h||!h.root)&&(f=r+f),e.commit(f,l,h)}};return Object.defineProperties(i,{getters:{get:n?function(){return e.getters}:function(){return Dc(e,r)}},state:{get:function(){return Ya(e.state,t)}}}),i}function Dc(e,r){if(!e._makeLocalGettersCache[r]){var t={},n=r.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,n)===r){var o=i.slice(n);Object.defineProperty(t,o,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[r]=t}return e._makeLocalGettersCache[r]}function r2(e,r,t,n){var i=e._mutations[r]||(e._mutations[r]=[]);i.push(function(s){t.call(e,n.state,s)})}function n2(e,r,t,n){var i=e._actions[r]||(e._actions[r]=[]);i.push(function(s){var a=t.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},s);return QT(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(u){throw e._devtoolHook.emit("vuex:error",u),u}):a})}function i2(e,r,t,n){e._wrappedGetters[r]||(e._wrappedGetters[r]=function(o){return t(n.state,n.getters,o.state,o.getters)})}function o2(e){Rc(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Ya(e,r){return r.reduce(function(t,n){return t[n]},e)}function Yi(e,r,t){return Mc(e)&&e.type&&(t=r,r=e,e=e.type),{type:e,payload:r,options:t}}var s2="vuex bindings",kc="vuex:mutations",Ka="vuex:actions",Jr="vuex",a2=0;function u2(e,r){KT({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[s2]},function(t){t.addTimelineLayer({id:kc,label:"Vuex Mutations",color:jc}),t.addTimelineLayer({id:Ka,label:"Vuex Actions",color:jc}),t.addInspector({id:Jr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(n){if(n.app===e&&n.inspectorId===Jr)if(n.filter){var i=[];Vc(i,r._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[zc(r._modules.root,"")]}),t.on.getInspectorState(function(n){if(n.app===e&&n.inspectorId===Jr){var i=n.nodeId;Dc(r,i),n.state=f2(d2(r._modules,i),i==="root"?r.getters:r._makeLocalGettersCache,i)}}),t.on.editInspectorState(function(n){if(n.app===e&&n.inspectorId===Jr){var i=n.nodeId,o=n.path;i!=="root"&&(o=i.split("/").filter(Boolean).concat(o)),r._withCommit(function(){n.set(r._state.data,o,n.state.value)})}}),r.subscribe(function(n,i){var o={};n.payload&&(o.payload=n.payload),o.state=i,t.notifyComponentUpdate(),t.sendInspectorTree(Jr),t.sendInspectorState(Jr),t.addTimelineEvent({layerId:kc,event:{time:Date.now(),title:n.type,data:o}})}),r.subscribeAction({before:function(n,i){var o={};n.payload&&(o.payload=n.payload),n._id=a2++,n._time=Date.now(),o.state=i,t.addTimelineEvent({layerId:Ka,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:o}})},after:function(n,i){var o={},s=Date.now()-n._time;o.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},n.payload&&(o.payload=n.payload),o.state=i,t.addTimelineEvent({layerId:Ka,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:o}})}})})}var jc=8702998,l2=6710886,h2=16777215,Xc={label:"namespaced",textColor:h2,backgroundColor:l2};function Hc(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function zc(e,r){return{id:r||"root",label:Hc(r),tags:e.namespaced?[Xc]:[],children:Object.keys(e._children).map(function(t){return zc(e._children[t],r+t+"/")})}}function Vc(e,r,t,n){n.includes(t)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:r.namespaced?[Xc]:[]}),Object.keys(r._children).forEach(function(i){Vc(e,r._children[i],t,n+i+"/")})}function f2(e,r,t){r=t==="root"?r:r[t];var n=Object.keys(r),i={state:Object.keys(e.state).map(function(s){return{key:s,editable:!0,value:e.state[s]}})};if(n.length){var o=c2(r);i.getters=Object.keys(o).map(function(s){return{key:s.endsWith("/")?Hc(s):s,editable:!1,value:Za(function(){return o[s]})}})}return i}function c2(e){var r={};return Object.keys(e).forEach(function(t){var n=t.split("/");if(n.length>1){var i=r,o=n.pop();n.forEach(function(s){i[s]||(i[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),i=i[s]._custom.value}),i[o]=Za(function(){return e[t]})}else r[t]=Za(function(){return e[t]})}),r}function d2(e,r){var t=r.split("/").filter(function(n){return n});return t.reduce(function(n,i,o){var s=n[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+r+'".');return o===t.length-1?s:s._children},r==="root"?e:e.root._children)}function Za(e){try{return e()}catch(r){return r}}var _e=function(r,t){this.runtime=t,this._children=Object.create(null),this._rawModule=r;var n=r.state;this.state=(typeof n=="function"?n():n)||{}},$c={namespaced:{configurable:!0}};$c.namespaced.get=function(){return!!this._rawModule.namespaced};_e.prototype.addChild=function(r,t){this._children[r]=t};_e.prototype.removeChild=function(r){delete this._children[r]};_e.prototype.getChild=function(r){return this._children[r]};_e.prototype.hasChild=function(r){return r in this._children};_e.prototype.update=function(r){this._rawModule.namespaced=r.namespaced,r.actions&&(this._rawModule.actions=r.actions),r.mutations&&(this._rawModule.mutations=r.mutations),r.getters&&(this._rawModule.getters=r.getters)};_e.prototype.forEachChild=function(r){Zr(this._children,r)};_e.prototype.forEachGetter=function(r){this._rawModule.getters&&Zr(this._rawModule.getters,r)};_e.prototype.forEachAction=function(r){this._rawModule.actions&&Zr(this._rawModule.actions,r)};_e.prototype.forEachMutation=function(r){this._rawModule.mutations&&Zr(this._rawModule.mutations,r)};Object.defineProperties(_e.prototype,$c);var Cr=function(r){this.register([],r,!1)};Cr.prototype.get=function(r){return r.reduce(function(t,n){return t.getChild(n)},this.root)};Cr.prototype.getNamespace=function(r){var t=this.root;return r.reduce(function(n,i){return t=t.getChild(i),n+(t.namespaced?i+"/":"")},"")};Cr.prototype.update=function(r){Wc([],this.root,r)};Cr.prototype.register=function(r,t,n){var i=this;n===void 0&&(n=!0);var o=new _e(t,n);if(r.length===0)this.root=o;else{var s=this.get(r.slice(0,-1));s.addChild(r[r.length-1],o)}t.modules&&Zr(t.modules,function(a,u){i.register(r.concat(u),a,n)})};Cr.prototype.unregister=function(r){var t=this.get(r.slice(0,-1)),n=r[r.length-1],i=t.getChild(n);!i||!i.runtime||t.removeChild(n)};Cr.prototype.isRegistered=function(r){var t=this.get(r.slice(0,-1)),n=r[r.length-1];return t?t.hasChild(n):!1};function Wc(e,r,t){if(r.update(t),t.modules)for(var n in t.modules){if(!r.getChild(n))return;Wc(e.concat(n),r.getChild(n),t.modules[n])}}function p2(e){return new Yt(e)}var Yt=function(r){var t=this;r===void 0&&(r={});var n=r.plugins;n===void 0&&(n=[]);var i=r.strict;i===void 0&&(i=!1);var o=r.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Cr(r),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,u=a.dispatch,l=a.commit;this.dispatch=function(c,d){return u.call(s,c,d)},this.commit=function(c,d,p){return l.call(s,c,d,p)},this.strict=i;var h=this._modules.root.state;qi(this,h,[],this._modules.root),qa(this,h),n.forEach(function(f){return f(t)})},Ja={state:{configurable:!0}};Yt.prototype.install=function(r,t){r.provide(t||$a,this),r.config.globalProperties.$store=this;var n=this._devtools!==void 0?this._devtools:__VUE_PROD_DEVTOOLS__;n&&u2(r,this)};Ja.state.get=function(){return this._state.data};Ja.state.set=function(e){};Yt.prototype.commit=function(r,t,n){var i=this,o=Yi(r,t,n),s=o.type,a=o.payload,u={type:s,payload:a},l=this._mutations[s];!l||(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(h){return h(u,i.state)}))};Yt.prototype.dispatch=function(r,t){var n=this,i=Yi(r,t),o=i.type,s=i.payload,a={type:o,payload:s},u=this._actions[o];if(!!u){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(a,n.state)})}catch{}var l=u.length>1?Promise.all(u.map(function(h){return h(s)})):u[0](s);return new Promise(function(h,f){l.then(function(c){try{n._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,n.state)})}catch{}h(c)},function(c){try{n._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,n.state,c)})}catch{}f(c)})})}};Yt.prototype.subscribe=function(r,t){return Gc(r,this._subscribers,t)};Yt.prototype.subscribeAction=function(r,t){var n=typeof r=="function"?{before:r}:r;return Gc(n,this._actionSubscribers,t)};Yt.prototype.watch=function(r,t,n){var i=this;return Rc(function(){return r(i.state,i.getters)},t,Object.assign({},n))};Yt.prototype.replaceState=function(r){var t=this;this._withCommit(function(){t._state.data=r})};Yt.prototype.registerModule=function(r,t,n){n===void 0&&(n={}),typeof r=="string"&&(r=[r]),this._modules.register(r,t),qi(this,this.state,r,this._modules.get(r),n.preserveState),qa(this,this.state)};Yt.prototype.unregisterModule=function(r){var t=this;typeof r=="string"&&(r=[r]),this._modules.unregister(r),this._withCommit(function(){var n=Ya(t.state,r.slice(0,-1));delete n[r[r.length-1]]}),Bc(this)};Yt.prototype.hasModule=function(r){return typeof r=="string"&&(r=[r]),this._modules.isRegistered(r)};Yt.prototype.hotUpdate=function(r){this._modules.update(r),Bc(this,!0)};Yt.prototype._withCommit=function(r){var t=this._committing;this._committing=!0,r(),this._committing=t};Object.defineProperties(Yt.prototype,Ja);var qc=Zi(function(e,r){var t={};return Ki(r).forEach(function(n){var i=n.key,o=n.val;t[i]=function(){var a=this.$store.state,u=this.$store.getters;if(e){var l=Ji(this.$store,"mapState",e);if(!l)return;a=l.context.state,u=l.context.getters}return typeof o=="function"?o.call(this,a,u):a[o]},t[i].vuex=!0}),t}),Yc=Zi(function(e,r){var t={};return Ki(r).forEach(function(n){var i=n.key,o=n.val;t[i]=function(){for(var a=[],u=arguments.length;u--;)a[u]=arguments[u];var l=this.$store.commit;if(e){var h=Ji(this.$store,"mapMutations",e);if(!h)return;l=h.context.commit}return typeof o=="function"?o.apply(this,[l].concat(a)):l.apply(this.$store,[o].concat(a))}}),t}),Kc=Zi(function(e,r){var t={};return Ki(r).forEach(function(n){var i=n.key,o=n.val;o=e+o,t[i]=function(){if(!(e&&!Ji(this.$store,"mapGetters",e)))return this.$store.getters[o]},t[i].vuex=!0}),t}),Zc=Zi(function(e,r){var t={};return Ki(r).forEach(function(n){var i=n.key,o=n.val;t[i]=function(){for(var a=[],u=arguments.length;u--;)a[u]=arguments[u];var l=this.$store.dispatch;if(e){var h=Ji(this.$store,"mapActions",e);if(!h)return;l=h.context.dispatch}return typeof o=="function"?o.apply(this,[l].concat(a)):l.apply(this.$store,[o].concat(a))}}),t}),v2=function(e){return{mapState:qc.bind(null,e),mapGetters:Kc.bind(null,e),mapMutations:Yc.bind(null,e),mapActions:Zc.bind(null,e)}};function Ki(e){return _2(e)?Array.isArray(e)?e.map(function(r){return{key:r,val:r}}):Object.keys(e).map(function(r){return{key:r,val:e[r]}}):[]}function _2(e){return Array.isArray(e)||Mc(e)}function Zi(e){return function(r,t){return typeof r!="string"?(t=r,r=""):r.charAt(r.length-1)!=="/"&&(r+="/"),e(r,t)}}function Ji(e,r,t){var n=e._modulesNamespaceMap[t];return n}function m2(e){e===void 0&&(e={});var r=e.collapsed;r===void 0&&(r=!0);var t=e.filter;t===void 0&&(t=function(h,f,c){return!0});var n=e.transformer;n===void 0&&(n=function(h){return h});var i=e.mutationTransformer;i===void 0&&(i=function(h){return h});var o=e.actionFilter;o===void 0&&(o=function(h,f){return!0});var s=e.actionTransformer;s===void 0&&(s=function(h){return h});var a=e.logMutations;a===void 0&&(a=!0);var u=e.logActions;u===void 0&&(u=!0);var l=e.logger;return l===void 0&&(l=console),function(h){var f=Wa(h.state);typeof l!="undefined"&&(a&&h.subscribe(function(c,d){var p=Wa(d);if(t(c,f,p)){var v=td(),_=i(c),g="mutation "+c.type+v;Jc(l,g,r),l.log("%c prev state","color: #9E9E9E; font-weight: bold",n(f)),l.log("%c mutation","color: #03A9F4; font-weight: bold",_),l.log("%c next state","color: #4CAF50; font-weight: bold",n(p)),Qc(l)}f=p}),u&&h.subscribeAction(function(c,d){if(o(c,d)){var p=td(),v=s(c),_="action "+c.type+p;Jc(l,_,r),l.log("%c action","color: #03A9F4; font-weight: bold",v),Qc(l)}}))}}function Jc(e,r,t){var n=t?e.groupCollapsed:e.group;try{n.call(e,r)}catch{e.log(r)}}function Qc(e){try{e.groupEnd()}catch{e.log("\u2014\u2014 log end \u2014\u2014")}}function td(){var e=new Date;return" @ "+Qi(e.getHours(),2)+":"+Qi(e.getMinutes(),2)+":"+Qi(e.getSeconds(),2)+"."+Qi(e.getMilliseconds(),3)}function g2(e,r){return new Array(r+1).join(e)}function Qi(e,r){return g2("0",r-e.toString().length)+e}var y2={version:"4.0.2",Store:Yt,storeKey:$a,createStore:p2,useStore:ZT,mapState:qc,mapMutations:Yc,mapGetters:Kc,mapActions:Zc,createNamespacedHelpers:v2,createLogger:m2},qE=y2,Qa={exports:{}},ed=function(r,t){return function(){for(var i=new Array(arguments.length),o=0;o<i.length;o++)i[o]=arguments[o];return r.apply(t,i)}},x2=ed,Je=Object.prototype.toString;function tu(e){return Array.isArray(e)}function eu(e){return typeof e=="undefined"}function b2(e){return e!==null&&!eu(e)&&e.constructor!==null&&!eu(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function rd(e){return Je.call(e)==="[object ArrayBuffer]"}function T2(e){return Je.call(e)==="[object FormData]"}function w2(e){var r;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&rd(e.buffer),r}function E2(e){return typeof e=="string"}function C2(e){return typeof e=="number"}function nd(e){return e!==null&&typeof e=="object"}function to(e){if(Je.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function P2(e){return Je.call(e)==="[object Date]"}function I2(e){return Je.call(e)==="[object File]"}function R2(e){return Je.call(e)==="[object Blob]"}function id(e){return Je.call(e)==="[object Function]"}function O2(e){return nd(e)&&id(e.pipe)}function A2(e){return Je.call(e)==="[object URLSearchParams]"}function S2(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function N2(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ru(e,r){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),tu(e))for(var t=0,n=e.length;t<n;t++)r.call(null,e[t],t,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.call(null,e[i],i,e)}function nu(){var e={};function r(i,o){to(e[o])&&to(i)?e[o]=nu(e[o],i):to(i)?e[o]=nu({},i):tu(i)?e[o]=i.slice():e[o]=i}for(var t=0,n=arguments.length;t<n;t++)ru(arguments[t],r);return e}function F2(e,r,t){return ru(r,function(i,o){t&&typeof i=="function"?e[o]=x2(i,t):e[o]=i}),e}function U2(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var Kt={isArray:tu,isArrayBuffer:rd,isBuffer:b2,isFormData:T2,isArrayBufferView:w2,isString:E2,isNumber:C2,isObject:nd,isPlainObject:to,isUndefined:eu,isDate:P2,isFile:I2,isBlob:R2,isFunction:id,isStream:O2,isURLSearchParams:A2,isStandardBrowserEnv:N2,forEach:ru,merge:nu,extend:F2,trim:S2,stripBOM:U2},Qr=Kt;function od(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var sd=function(r,t,n){if(!t)return r;var i;if(n)i=n(t);else if(Qr.isURLSearchParams(t))i=t.toString();else{var o=[];Qr.forEach(t,function(u,l){u===null||typeof u=="undefined"||(Qr.isArray(u)?l=l+"[]":u=[u],Qr.forEach(u,function(f){Qr.isDate(f)?f=f.toISOString():Qr.isObject(f)&&(f=JSON.stringify(f)),o.push(od(l)+"="+od(f))}))}),i=o.join("&")}if(i){var s=r.indexOf("#");s!==-1&&(r=r.slice(0,s)),r+=(r.indexOf("?")===-1?"?":"&")+i}return r},L2=Kt;function eo(){this.handlers=[]}eo.prototype.use=function(r,t,n){return this.handlers.push({fulfilled:r,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};eo.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};eo.prototype.forEach=function(r){L2.forEach(this.handlers,function(n){n!==null&&r(n)})};var M2=eo,G2=Kt,B2=function(r,t){G2.forEach(r,function(i,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(r[t]=i,delete r[o])})},ad=function(r,t,n,i,o){return r.config=t,n&&(r.code=n),r.request=i,r.response=o,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},D2=ad,ud=function(r,t,n,i,o){var s=new Error(r);return D2(s,t,n,i,o)},k2=ud,j2=function(r,t,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?r(n):t(k2("Request failed with status code "+n.status,n.config,null,n.request,n))},ro=Kt,X2=ro.isStandardBrowserEnv()?function(){return{write:function(t,n,i,o,s,a){var u=[];u.push(t+"="+encodeURIComponent(n)),ro.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),ro.isString(o)&&u.push("path="+o),ro.isString(s)&&u.push("domain="+s),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),H2=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},z2=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},V2=H2,$2=z2,W2=function(r,t){return r&&!V2(t)?$2(r,t):t},iu=Kt,q2=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Y2=function(r){var t={},n,i,o;return r&&iu.forEach(r.split(`
`),function(a){if(o=a.indexOf(":"),n=iu.trim(a.substr(0,o)).toLowerCase(),i=iu.trim(a.substr(o+1)),n){if(t[n]&&q2.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([i]):t[n]=t[n]?t[n]+", "+i:i}}),t},ld=Kt,K2=ld.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function i(o){var s=o;return r&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(s){var a=ld.isString(s)?i(s):s;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function ou(e){this.message=e}ou.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ou.prototype.__CANCEL__=!0;var no=ou,io=Kt,Z2=j2,J2=X2,Q2=sd,tw=W2,ew=Y2,rw=K2,su=ud,nw=so,iw=no,hd=function(r){return new Promise(function(n,i){var o=r.data,s=r.headers,a=r.responseType,u;function l(){r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}io.isFormData(o)&&delete s["Content-Type"];var h=new XMLHttpRequest;if(r.auth){var f=r.auth.username||"",c=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";s.Authorization="Basic "+btoa(f+":"+c)}var d=tw(r.baseURL,r.url);h.open(r.method.toUpperCase(),Q2(d,r.params,r.paramsSerializer),!0),h.timeout=r.timeout;function p(){if(!!h){var _="getAllResponseHeaders"in h?ew(h.getAllResponseHeaders()):null,g=!a||a==="text"||a==="json"?h.responseText:h.response,b={data:g,status:h.status,statusText:h.statusText,headers:_,config:r,request:h};Z2(function(E){n(E),l()},function(E){i(E),l()},b),h=null}}if("onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(p)},h.onabort=function(){!h||(i(su("Request aborted",r,"ECONNABORTED",h)),h=null)},h.onerror=function(){i(su("Network Error",r,null,h)),h=null},h.ontimeout=function(){var g=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded",b=r.transitional||nw.transitional;r.timeoutErrorMessage&&(g=r.timeoutErrorMessage),i(su(g,r,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},io.isStandardBrowserEnv()){var v=(r.withCredentials||rw(d))&&r.xsrfCookieName?J2.read(r.xsrfCookieName):void 0;v&&(s[r.xsrfHeaderName]=v)}"setRequestHeader"in h&&io.forEach(s,function(g,b){typeof o=="undefined"&&b.toLowerCase()==="content-type"?delete s[b]:h.setRequestHeader(b,g)}),io.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),a&&a!=="json"&&(h.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&h.addEventListener("progress",r.onDownloadProgress),typeof r.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",r.onUploadProgress),(r.cancelToken||r.signal)&&(u=function(_){!h||(i(!_||_&&_.type?new iw("canceled"):_),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u))),o||(o=null),h.send(o)})},jt=Kt,fd=B2,ow=ad,sw={"Content-Type":"application/x-www-form-urlencoded"};function cd(e,r){!jt.isUndefined(e)&&jt.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function aw(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=hd),e}function uw(e,r,t){if(jt.isString(e))try{return(r||JSON.parse)(e),jt.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(e)}var oo={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:aw(),transformRequest:[function(r,t){return fd(t,"Accept"),fd(t,"Content-Type"),jt.isFormData(r)||jt.isArrayBuffer(r)||jt.isBuffer(r)||jt.isStream(r)||jt.isFile(r)||jt.isBlob(r)?r:jt.isArrayBufferView(r)?r.buffer:jt.isURLSearchParams(r)?(cd(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString()):jt.isObject(r)||t&&t["Content-Type"]==="application/json"?(cd(t,"application/json"),uw(r)):r}],transformResponse:[function(r){var t=this.transitional||oo.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&this.responseType==="json";if(o||i&&jt.isString(r)&&r.length)try{return JSON.parse(r)}catch(s){if(o)throw s.name==="SyntaxError"?ow(s,this,"E_JSON_PARSE"):s}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};jt.forEach(["delete","get","head"],function(r){oo.headers[r]={}});jt.forEach(["post","put","patch"],function(r){oo.headers[r]=jt.merge(sw)});var so=oo,lw=Kt,hw=so,fw=function(r,t,n){var i=this||hw;return lw.forEach(n,function(s){r=s.call(i,r,t)}),r},dd=function(r){return!!(r&&r.__CANCEL__)},pd=Kt,au=fw,cw=dd,dw=so,pw=no;function uu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pw("canceled")}var vw=function(r){uu(r),r.headers=r.headers||{},r.data=au.call(r,r.data,r.headers,r.transformRequest),r.headers=pd.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),pd.forEach(["delete","get","head","post","put","patch","common"],function(i){delete r.headers[i]});var t=r.adapter||dw.adapter;return t(r).then(function(i){return uu(r),i.data=au.call(r,i.data,i.headers,r.transformResponse),i},function(i){return cw(i)||(uu(r),i&&i.response&&(i.response.data=au.call(r,i.response.data,i.response.headers,r.transformResponse))),Promise.reject(i)})},Qt=Kt,vd=function(r,t){t=t||{};var n={};function i(h,f){return Qt.isPlainObject(h)&&Qt.isPlainObject(f)?Qt.merge(h,f):Qt.isPlainObject(f)?Qt.merge({},f):Qt.isArray(f)?f.slice():f}function o(h){if(Qt.isUndefined(t[h])){if(!Qt.isUndefined(r[h]))return i(void 0,r[h])}else return i(r[h],t[h])}function s(h){if(!Qt.isUndefined(t[h]))return i(void 0,t[h])}function a(h){if(Qt.isUndefined(t[h])){if(!Qt.isUndefined(r[h]))return i(void 0,r[h])}else return i(void 0,t[h])}function u(h){if(h in t)return i(r[h],t[h]);if(h in r)return i(void 0,r[h])}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return Qt.forEach(Object.keys(r).concat(Object.keys(t)),function(f){var c=l[f]||o,d=c(f);Qt.isUndefined(d)&&c!==u||(n[f]=d)}),n},_d={version:"0.25.0"},_w=_d.version,lu={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){lu[e]=function(n){return typeof n===e||"a"+(r<1?"n ":" ")+e}});var md={};lu.transitional=function(r,t,n){function i(o,s){return"[Axios v"+_w+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return function(o,s,a){if(r===!1)throw new Error(i(s," has been removed"+(t?" in "+t:"")));return t&&!md[s]&&(md[s]=!0,console.warn(i(s," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(o,s,a):!0}};function mw(e,r,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=r[o];if(s){var a=e[o],u=a===void 0||s(a,o,e);if(u!==!0)throw new TypeError("option "+o+" must be "+u);continue}if(t!==!0)throw Error("Unknown option "+o)}}var gw={assertOptions:mw,validators:lu},gd=Kt,yw=sd,yd=M2,xd=vw,ao=vd,bd=gw,tn=bd.validators;function Xn(e){this.defaults=e,this.interceptors={request:new yd,response:new yd}}Xn.prototype.request=function(r,t){if(typeof r=="string"?(t=t||{},t.url=r):t=r||{},!t.url)throw new Error("Provided config url is not valid");t=ao(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&bd.assertOptions(n,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1);var i=[],o=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(o=o&&d.synchronous,i.unshift(d.fulfilled,d.rejected))});var s=[];this.interceptors.response.forEach(function(d){s.push(d.fulfilled,d.rejected)});var a;if(!o){var u=[xd,void 0];for(Array.prototype.unshift.apply(u,i),u=u.concat(s),a=Promise.resolve(t);u.length;)a=a.then(u.shift(),u.shift());return a}for(var l=t;i.length;){var h=i.shift(),f=i.shift();try{l=h(l)}catch(c){f(c);break}}try{a=xd(l)}catch(c){return Promise.reject(c)}for(;s.length;)a=a.then(s.shift(),s.shift());return a};Xn.prototype.getUri=function(r){if(!r.url)throw new Error("Provided config url is not valid");return r=ao(this.defaults,r),yw(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};gd.forEach(["delete","get","head","options"],function(r){Xn.prototype[r]=function(t,n){return this.request(ao(n||{},{method:r,url:t,data:(n||{}).data}))}});gd.forEach(["post","put","patch"],function(r){Xn.prototype[r]=function(t,n,i){return this.request(ao(i||{},{method:r,url:t,data:n}))}});var xw=Xn,bw=no;function en(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(i){r=i});var t=this;this.promise.then(function(n){if(!!t._listeners){var i,o=t._listeners.length;for(i=0;i<o;i++)t._listeners[i](n);t._listeners=null}}),this.promise.then=function(n){var i,o=new Promise(function(s){t.subscribe(s),i=s}).then(n);return o.cancel=function(){t.unsubscribe(i)},o},e(function(i){t.reason||(t.reason=new bw(i),r(t.reason))})}en.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};en.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]};en.prototype.unsubscribe=function(r){if(!!this._listeners){var t=this._listeners.indexOf(r);t!==-1&&this._listeners.splice(t,1)}};en.source=function(){var r,t=new en(function(i){r=i});return{token:t,cancel:r}};var Tw=en,ww=function(r){return function(n){return r.apply(null,n)}},Ew=Kt,Cw=function(r){return Ew.isObject(r)&&r.isAxiosError===!0},Td=Kt,Pw=ed,uo=xw,Iw=vd,Rw=so;function wd(e){var r=new uo(e),t=Pw(uo.prototype.request,r);return Td.extend(t,uo.prototype,r),Td.extend(t,r),t.create=function(i){return wd(Iw(e,i))},t}var Re=wd(Rw);Re.Axios=uo;Re.Cancel=no;Re.CancelToken=Tw;Re.isCancel=dd;Re.VERSION=_d.version;Re.all=function(r){return Promise.all(r)};Re.spread=ww;Re.isAxiosError=Cw;Qa.exports=Re;Qa.exports.default=Re;var YE=Qa.exports,Ed={exports:{}};(function(e){(function(r,t,n){function i(u){var l=this,h=a();l.next=function(){var f=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=f-(l.c=f|0)},l.c=1,l.s0=h(" "),l.s1=h(" "),l.s2=h(" "),l.s0-=h(u),l.s0<0&&(l.s0+=1),l.s1-=h(u),l.s1<0&&(l.s1+=1),l.s2-=h(u),l.s2<0&&(l.s2+=1),h=null}function o(u,l){return l.c=u.c,l.s0=u.s0,l.s1=u.s1,l.s2=u.s2,l}function s(u,l){var h=new i(u),f=l&&l.state,c=h.next;return c.int32=function(){return h.next()*4294967296|0},c.double=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.quick=c,f&&(typeof f=="object"&&o(f,h),c.state=function(){return o(h,{})}),c}function a(){var u=4022871197,l=function(h){h=String(h);for(var f=0;f<h.length;f++){u+=h.charCodeAt(f);var c=.02519603282416938*u;u=c>>>0,c-=u,c*=u,u=c>>>0,c-=u,u+=c*4294967296}return(u>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.alea=s})(ye,e,!1)})(Ed);var Cd={exports:{}};(function(e){(function(r,t,n){function i(a){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},a===(a|0)?u.x=a:l+=a;for(var h=0;h<l.length+64;h++)u.x^=l.charCodeAt(h)|0,u.next()}function o(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u}function s(a,u){var l=new i(a),h=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(c+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&o(h,l),f.state=function(){return o(l,{})}),f}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xor128=s})(ye,e,!1)})(Cd);var Pd={exports:{}};(function(e){(function(r,t,n){function i(a){var u=this,l="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(f^f<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,a===(a|0)?u.x=a:l+=a;for(var h=0;h<l.length+64;h++)u.x^=l.charCodeAt(h)|0,h==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function o(a,u){return u.x=a.x,u.y=a.y,u.z=a.z,u.w=a.w,u.v=a.v,u.d=a.d,u}function s(a,u){var l=new i(a),h=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(c+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&o(h,l),f.state=function(){return o(l,{})}),f}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xorwow=s})(ye,e,!1)})(Pd);var Id={exports:{}};(function(e){(function(r,t,n){function i(a){var u=this;u.next=function(){var h=u.x,f=u.i,c,d;return c=h[f],c^=c>>>7,d=c^c<<24,c=h[f+1&7],d^=c^c>>>10,c=h[f+3&7],d^=c^c>>>3,c=h[f+4&7],d^=c^c<<7,c=h[f+7&7],c=c^c<<13,d^=c^c<<9,h[f]=d,u.i=f+1&7,d};function l(h,f){var c,d=[];if(f===(f|0))d[0]=f;else for(f=""+f,c=0;c<f.length;++c)d[c&7]=d[c&7]<<15^f.charCodeAt(c)+d[c+1&7]<<13;for(;d.length<8;)d.push(0);for(c=0;c<8&&d[c]===0;++c);for(c==8&&(d[7]=-1),h.x=d,h.i=0,c=256;c>0;--c)h.next()}l(u,a)}function o(a,u){return u.x=a.x.slice(),u.i=a.i,u}function s(a,u){a==null&&(a=+new Date);var l=new i(a),h=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(c+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,h&&(h.x&&o(h,l),f.state=function(){return o(l,{})}),f}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xorshift7=s})(ye,e,!1)})(Id);var Rd={exports:{}};(function(e){(function(r,t,n){function i(a){var u=this;u.next=function(){var h=u.w,f=u.X,c=u.i,d,p;return u.w=h=h+1640531527|0,p=f[c+34&127],d=f[c=c+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=f[c]=p^d,u.i=c,p+(h^h>>>16)|0};function l(h,f){var c,d,p,v,_,g=[],b=128;for(f===(f|0)?(d=f,f=null):(f=f+"\0",d=0,b=Math.max(b,f.length)),p=0,v=-32;v<b;++v)f&&(d^=f.charCodeAt((v+32)%f.length)),v===0&&(_=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,v>=0&&(_=_+1640531527|0,c=g[v&127]^=d+_,p=c==0?p+1:0);for(p>=128&&(g[(f&&f.length||0)&127]=-1),p=127,v=4*128;v>0;--v)d=g[p+34&127],c=g[p=p+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,g[p]=d^c;h.w=_,h.X=g,h.i=p}l(u,a)}function o(a,u){return u.i=a.i,u.w=a.w,u.X=a.X.slice(),u}function s(a,u){a==null&&(a=+new Date);var l=new i(a),h=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(c+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,h&&(h.X&&o(h,l),f.state=function(){return o(l,{})}),f}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xor4096=s})(ye,e,!1)})(Rd);var Od={exports:{}};(function(e){(function(r,t,n){function i(a){var u=this,l="";u.next=function(){var f=u.b,c=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^c,c=c-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^c,u.c=c=c-d|0,u.d=d<<16^c>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=2654435769|0,u.d=1367130551,a===Math.floor(a)?(u.a=a/4294967296|0,u.b=a|0):l+=a;for(var h=0;h<l.length+20;h++)u.b^=l.charCodeAt(h)|0,u.next()}function o(a,u){return u.a=a.a,u.b=a.b,u.c=a.c,u.d=a.d,u}function s(a,u){var l=new i(a),h=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(c+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,h&&(typeof h=="object"&&o(h,l),f.state=function(){return o(l,{})}),f}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.tychei=s})(ye,e,!1)})(Od);var Ad={exports:{}};(function(e){(function(r,t,n){var i=256,o=6,s=52,a="random",u=n.pow(i,o),l=n.pow(2,s),h=l*2,f=i-1,c;function d(E,T,x){var I=[];T=T==!0?{entropy:!0}:T||{};var U=g(_(T.entropy?[E,w(t)]:E==null?b():E,3),I),C=new p(I),N=function(){for(var L=C.g(o),B=u,D=0;L<l;)L=(L+D)*i,B*=i,D=C.g(1);for(;L>=h;)L/=2,B/=2,D>>>=1;return(L+D)/B};return N.int32=function(){return C.g(4)|0},N.quick=function(){return C.g(4)/4294967296},N.double=N,g(w(C.S),t),(T.pass||x||function(L,B,D,et){return et&&(et.S&&v(et,C),L.state=function(){return v(C,{})}),D?(n[a]=L,B):L})(N,U,"global"in T?T.global:this==n,T.state)}function p(E){var T,x=E.length,I=this,U=0,C=I.i=I.j=0,N=I.S=[];for(x||(E=[x++]);U<i;)N[U]=U++;for(U=0;U<i;U++)N[U]=N[C=f&C+E[U%x]+(T=N[U])],N[C]=T;(I.g=function(L){for(var B,D=0,et=I.i,F=I.j,A=I.S;L--;)B=A[et=f&et+1],D=D*i+A[f&(A[et]=A[F=f&F+B])+(A[F]=B)];return I.i=et,I.j=F,D})(i)}function v(E,T){return T.i=E.i,T.j=E.j,T.S=E.S.slice(),T}function _(E,T){var x=[],I=typeof E,U;if(T&&I=="object")for(U in E)try{x.push(_(E[U],T-1))}catch{}return x.length?x:I=="string"?E:E+"\0"}function g(E,T){for(var x=E+"",I,U=0;U<x.length;)T[f&U]=f&(I^=T[f&U]*19)+x.charCodeAt(U++);return w(T)}function b(){try{var E;return c&&(E=c.randomBytes)?E=E(i):(E=new Uint8Array(i),(r.crypto||r.msCrypto).getRandomValues(E)),w(E)}catch{var T=r.navigator,x=T&&T.plugins;return[+new Date,r,x,r.screen,w(t)]}}function w(E){return String.fromCharCode.apply(0,E)}if(g(n.random(),t),e.exports){e.exports=d;try{c=require("crypto")}catch{}}else n["seed"+a]=d})(typeof self!="undefined"?self:ye,[],Math)})(Ad);var Ow=Ed.exports,Aw=Cd.exports,Sw=Pd.exports,Nw=Id.exports,Fw=Rd.exports,Uw=Od.exports,Pr=Ad.exports;Pr.alea=Ow;Pr.xor128=Aw;Pr.xorwow=Sw;Pr.xorshift7=Nw;Pr.xor4096=Fw;Pr.tychei=Uw;var KE=Pr;let lo;const Lw=new Uint8Array(16);function Mw(){if(!lo&&(lo=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!lo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return lo(Lw)}const Xt=[];for(let e=0;e<256;++e)Xt.push((e+256).toString(16).slice(1));function Gw(e,r=0){return Xt[e[r+0]]+Xt[e[r+1]]+Xt[e[r+2]]+Xt[e[r+3]]+"-"+Xt[e[r+4]]+Xt[e[r+5]]+"-"+Xt[e[r+6]]+Xt[e[r+7]]+"-"+Xt[e[r+8]]+Xt[e[r+9]]+"-"+Xt[e[r+10]]+Xt[e[r+11]]+Xt[e[r+12]]+Xt[e[r+13]]+Xt[e[r+14]]+Xt[e[r+15]]}const Bw=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Sd={randomUUID:Bw};function ZE(e,r,t){if(Sd.randomUUID&&!r&&!e)return Sd.randomUUID();e=e||{};const n=e.random||(e.rng||Mw)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){t=t||0;for(let i=0;i<16;++i)r[t+i]=n[i];return r}return Gw(n)}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var rn=9e15,Qe=1e9,hu="0123456789abcdef",ho="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",fo="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",fu={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-rn,maxE:rn,crypto:!1},Nd,Be,Y=!0,co="[DecimalError] ",tr=co+"Invalid argument: ",Fd=co+"Precision limit exceeded",Ud=co+"crypto unavailable",Ld="[object Decimal]",$t=Math.floor,Dt=Math.pow,Dw=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,kw=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,jw=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Md=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,me=1e7,V=7,Xw=9007199254740991,Hw=ho.length-1,cu=fo.length-1,O={toStringTag:Ld};O.absoluteValue=O.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),X(e)};O.ceil=function(){return X(new this.constructor(this),this.e+1,2)};O.clampedTo=O.clamp=function(e,r){var t,n=this,i=n.constructor;if(e=new i(e),r=new i(r),!e.s||!r.s)return new i(NaN);if(e.gt(r))throw Error(tr+r);return t=n.cmp(e),t<0?e:n.cmp(r)>0?r:new i(n)};O.comparedTo=O.cmp=function(e){var r,t,n,i,o=this,s=o.d,a=(e=new o.constructor(e)).d,u=o.s,l=e.s;if(!s||!a)return!u||!l?NaN:u!==l?u:s===a?0:!s^u<0?1:-1;if(!s[0]||!a[0])return s[0]?u:a[0]?-l:0;if(u!==l)return u;if(o.e!==e.e)return o.e>e.e^u<0?1:-1;for(n=s.length,i=a.length,r=0,t=n<i?n:i;r<t;++r)if(s[r]!==a[r])return s[r]>a[r]^u<0?1:-1;return n===i?0:n>i^u<0?1:-1};O.cosine=O.cos=function(){var e,r,t=this,n=t.constructor;return t.d?t.d[0]?(e=n.precision,r=n.rounding,n.precision=e+Math.max(t.e,t.sd())+V,n.rounding=1,t=zw(n,Xd(n,t)),n.precision=e,n.rounding=r,X(Be==2||Be==3?t.neg():t,e,r,!0)):new n(1):new n(NaN)};O.cubeRoot=O.cbrt=function(){var e,r,t,n,i,o,s,a,u,l,h=this,f=h.constructor;if(!h.isFinite()||h.isZero())return new f(h);for(Y=!1,o=h.s*Dt(h.s*h,1/3),!o||Math.abs(o)==1/0?(t=Ht(h.d),e=h.e,(o=(e-t.length+1)%3)&&(t+=o==1||o==-2?"0":"00"),o=Dt(t,1/3),e=$t((e+1)/3)-(e%3==(e<0?-1:2)),o==1/0?t="5e"+e:(t=o.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new f(t),n.s=h.s):n=new f(o.toString()),s=(e=f.precision)+3;;)if(a=n,u=a.times(a).times(a),l=u.plus(h),n=_t(l.plus(h).times(a),l.plus(u),s+2,1),Ht(a.d).slice(0,s)===(t=Ht(n.d)).slice(0,s))if(t=t.slice(s-3,s+1),t=="9999"||!i&&t=="4999"){if(!i&&(X(a,e+1,0),a.times(a).times(a).eq(h))){n=a;break}s+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(X(n,e+1,1),r=!n.times(n).times(n).eq(h));break}return Y=!0,X(n,e,f.rounding,r)};O.decimalPlaces=O.dp=function(){var e,r=this.d,t=NaN;if(r){if(e=r.length-1,t=(e-$t(this.e/V))*V,e=r[e],e)for(;e%10==0;e/=10)t--;t<0&&(t=0)}return t};O.dividedBy=O.div=function(e){return _t(this,new this.constructor(e))};O.dividedToIntegerBy=O.divToInt=function(e){var r=this,t=r.constructor;return X(_t(r,new t(e),0,1,1),t.precision,t.rounding)};O.equals=O.eq=function(e){return this.cmp(e)===0};O.floor=function(){return X(new this.constructor(this),this.e+1,3)};O.greaterThan=O.gt=function(e){return this.cmp(e)>0};O.greaterThanOrEqualTo=O.gte=function(e){var r=this.cmp(e);return r==1||r===0};O.hyperbolicCosine=O.cosh=function(){var e,r,t,n,i,o=this,s=o.constructor,a=new s(1);if(!o.isFinite())return new s(o.s?1/0:NaN);if(o.isZero())return a;t=s.precision,n=s.rounding,s.precision=t+Math.max(o.e,o.sd())+4,s.rounding=1,i=o.d.length,i<32?(e=Math.ceil(i/3),r=(1/mo(4,e)).toString()):(e=16,r="2.3283064365386962890625e-10"),o=nn(s,1,o.times(r),new s(1),!0);for(var u,l=e,h=new s(8);l--;)u=o.times(o),o=a.minus(u.times(h.minus(u.times(h))));return X(o,s.precision=t,s.rounding=n,!0)};O.hyperbolicSine=O.sinh=function(){var e,r,t,n,i=this,o=i.constructor;if(!i.isFinite()||i.isZero())return new o(i);if(r=o.precision,t=o.rounding,o.precision=r+Math.max(i.e,i.sd())+4,o.rounding=1,n=i.d.length,n<3)i=nn(o,2,i,i,!0);else{e=1.4*Math.sqrt(n),e=e>16?16:e|0,i=i.times(1/mo(5,e)),i=nn(o,2,i,i,!0);for(var s,a=new o(5),u=new o(16),l=new o(20);e--;)s=i.times(i),i=i.times(a.plus(s.times(u.times(s).plus(l))))}return o.precision=r,o.rounding=t,X(i,r,t,!0)};O.hyperbolicTangent=O.tanh=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+7,n.rounding=1,_t(t.sinh(),t.cosh(),n.precision=e,n.rounding=r)):new n(t.s)};O.inverseCosine=O.acos=function(){var e,r=this,t=r.constructor,n=r.abs().cmp(1),i=t.precision,o=t.rounding;return n!==-1?n===0?r.isNeg()?ge(t,i,o):new t(0):new t(NaN):r.isZero()?ge(t,i+4,o).times(.5):(t.precision=i+6,t.rounding=1,r=r.asin(),e=ge(t,i+4,o).times(.5),t.precision=i,t.rounding=o,e.minus(r))};O.inverseHyperbolicCosine=O.acosh=function(){var e,r,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(e=n.precision,r=n.rounding,n.precision=e+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,Y=!1,t=t.times(t).minus(1).sqrt().plus(t),Y=!0,n.precision=e,n.rounding=r,t.ln()):new n(t)};O.inverseHyperbolicSine=O.asinh=function(){var e,r,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,Y=!1,t=t.times(t).plus(1).sqrt().plus(t),Y=!0,n.precision=e,n.rounding=r,t.ln())};O.inverseHyperbolicTangent=O.atanh=function(){var e,r,t,n,i=this,o=i.constructor;return i.isFinite()?i.e>=0?new o(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=o.precision,r=o.rounding,n=i.sd(),Math.max(n,e)<2*-i.e-1?X(new o(i),e,r,!0):(o.precision=t=n-i.e,i=_t(i.plus(1),new o(1).minus(i),t+e,1),o.precision=e+4,o.rounding=1,i=i.ln(),o.precision=e,o.rounding=r,i.times(.5))):new o(NaN)};O.inverseSine=O.asin=function(){var e,r,t,n,i=this,o=i.constructor;return i.isZero()?new o(i):(r=i.abs().cmp(1),t=o.precision,n=o.rounding,r!==-1?r===0?(e=ge(o,t+4,n).times(.5),e.s=i.s,e):new o(NaN):(o.precision=t+6,o.rounding=1,i=i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(),o.precision=t,o.rounding=n,i.times(2)))};O.inverseTangent=O.atan=function(){var e,r,t,n,i,o,s,a,u,l=this,h=l.constructor,f=h.precision,c=h.rounding;if(l.isFinite()){if(l.isZero())return new h(l);if(l.abs().eq(1)&&f+4<=cu)return s=ge(h,f+4,c).times(.25),s.s=l.s,s}else{if(!l.s)return new h(NaN);if(f+4<=cu)return s=ge(h,f+4,c).times(.5),s.s=l.s,s}for(h.precision=a=f+10,h.rounding=1,t=Math.min(28,a/V+2|0),e=t;e;--e)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(Y=!1,r=Math.ceil(a/V),n=1,u=l.times(l),s=new h(l),i=l;e!==-1;)if(i=i.times(u),o=s.minus(i.div(n+=2)),i=i.times(u),s=o.plus(i.div(n+=2)),s.d[r]!==void 0)for(e=r;s.d[e]===o.d[e]&&e--;);return t&&(s=s.times(2<<t-1)),Y=!0,X(s,h.precision=f,h.rounding=c,!0)};O.isFinite=function(){return!!this.d};O.isInteger=O.isInt=function(){return!!this.d&&$t(this.e/V)>this.d.length-2};O.isNaN=function(){return!this.s};O.isNegative=O.isNeg=function(){return this.s<0};O.isPositive=O.isPos=function(){return this.s>0};O.isZero=function(){return!!this.d&&this.d[0]===0};O.lessThan=O.lt=function(e){return this.cmp(e)<0};O.lessThanOrEqualTo=O.lte=function(e){return this.cmp(e)<1};O.logarithm=O.log=function(e){var r,t,n,i,o,s,a,u,l=this,h=l.constructor,f=h.precision,c=h.rounding,d=5;if(e==null)e=new h(10),r=!0;else{if(e=new h(e),t=e.d,e.s<0||!t||!t[0]||e.eq(1))return new h(NaN);r=e.eq(10)}if(t=l.d,l.s<0||!t||!t[0]||l.eq(1))return new h(t&&!t[0]?-1/0:l.s!=1?NaN:t?0:1/0);if(r)if(t.length>1)o=!0;else{for(i=t[0];i%10==0;)i/=10;o=i!==1}if(Y=!1,a=f+d,s=rr(l,a),n=r?_o(h,a+10):rr(e,a),u=_t(s,n,a,1),Hn(u.d,i=f,c))do if(a+=10,s=rr(l,a),n=r?_o(h,a+10):rr(e,a),u=_t(s,n,a,1),!o){+Ht(u.d).slice(i+1,i+15)+1==1e14&&(u=X(u,f+1,0));break}while(Hn(u.d,i+=10,c));return Y=!0,X(u,f,c)};O.minus=O.sub=function(e){var r,t,n,i,o,s,a,u,l,h,f,c,d=this,p=d.constructor;if(e=new p(e),!d.d||!e.d)return!d.s||!e.s?e=new p(NaN):d.d?e.s=-e.s:e=new p(e.d||d.s!==e.s?d:NaN),e;if(d.s!=e.s)return e.s=-e.s,d.plus(e);if(l=d.d,c=e.d,a=p.precision,u=p.rounding,!l[0]||!c[0]){if(c[0])e.s=-e.s;else if(l[0])e=new p(d);else return new p(u===3?-0:0);return Y?X(e,a,u):e}if(t=$t(e.e/V),h=$t(d.e/V),l=l.slice(),o=h-t,o){for(f=o<0,f?(r=l,o=-o,s=c.length):(r=c,t=h,s=l.length),n=Math.max(Math.ceil(a/V),s)+2,o>n&&(o=n,r.length=1),r.reverse(),n=o;n--;)r.push(0);r.reverse()}else{for(n=l.length,s=c.length,f=n<s,f&&(s=n),n=0;n<s;n++)if(l[n]!=c[n]){f=l[n]<c[n];break}o=0}for(f&&(r=l,l=c,c=r,e.s=-e.s),s=l.length,n=c.length-s;n>0;--n)l[s++]=0;for(n=c.length;n>o;){if(l[--n]<c[n]){for(i=n;i&&l[--i]===0;)l[i]=me-1;--l[i],l[n]+=me}l[n]-=c[n]}for(;l[--s]===0;)l.pop();for(;l[0]===0;l.shift())--t;return l[0]?(e.d=l,e.e=vo(l,t),Y?X(e,a,u):e):new p(u===3?-0:0)};O.modulo=O.mod=function(e){var r,t=this,n=t.constructor;return e=new n(e),!t.d||!e.s||e.d&&!e.d[0]?new n(NaN):!e.d||t.d&&!t.d[0]?X(new n(t),n.precision,n.rounding):(Y=!1,n.modulo==9?(r=_t(t,e.abs(),0,3,1),r.s*=e.s):r=_t(t,e,0,n.modulo,1),r=r.times(e),Y=!0,t.minus(r))};O.naturalExponential=O.exp=function(){return du(this)};O.naturalLogarithm=O.ln=function(){return rr(this)};O.negated=O.neg=function(){var e=new this.constructor(this);return e.s=-e.s,X(e)};O.plus=O.add=function(e){var r,t,n,i,o,s,a,u,l,h,f=this,c=f.constructor;if(e=new c(e),!f.d||!e.d)return!f.s||!e.s?e=new c(NaN):f.d||(e=new c(e.d||f.s===e.s?f:NaN)),e;if(f.s!=e.s)return e.s=-e.s,f.minus(e);if(l=f.d,h=e.d,a=c.precision,u=c.rounding,!l[0]||!h[0])return h[0]||(e=new c(f)),Y?X(e,a,u):e;if(o=$t(f.e/V),n=$t(e.e/V),l=l.slice(),i=o-n,i){for(i<0?(t=l,i=-i,s=h.length):(t=h,n=o,s=l.length),o=Math.ceil(a/V),s=o>s?o+1:s+1,i>s&&(i=s,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(s=l.length,i=h.length,s-i<0&&(i=s,t=h,h=l,l=t),r=0;i;)r=(l[--i]=l[i]+h[i]+r)/me|0,l[i]%=me;for(r&&(l.unshift(r),++n),s=l.length;l[--s]==0;)l.pop();return e.d=l,e.e=vo(l,n),Y?X(e,a,u):e};O.precision=O.sd=function(e){var r,t=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(tr+e);return t.d?(r=Gd(t.d),e&&t.e+1>r&&(r=t.e+1)):r=NaN,r};O.round=function(){var e=this,r=e.constructor;return X(new r(e),e.e+1,r.rounding)};O.sine=O.sin=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+Math.max(t.e,t.sd())+V,n.rounding=1,t=$w(n,Xd(n,t)),n.precision=e,n.rounding=r,X(Be>2?t.neg():t,e,r,!0)):new n(NaN)};O.squareRoot=O.sqrt=function(){var e,r,t,n,i,o,s=this,a=s.d,u=s.e,l=s.s,h=s.constructor;if(l!==1||!a||!a[0])return new h(!l||l<0&&(!a||a[0])?NaN:a?s:1/0);for(Y=!1,l=Math.sqrt(+s),l==0||l==1/0?(r=Ht(a),(r.length+u)%2==0&&(r+="0"),l=Math.sqrt(r),u=$t((u+1)/2)-(u<0||u%2),l==1/0?r="5e"+u:(r=l.toExponential(),r=r.slice(0,r.indexOf("e")+1)+u),n=new h(r)):n=new h(l.toString()),t=(u=h.precision)+3;;)if(o=n,n=o.plus(_t(s,o,t+2,1)).times(.5),Ht(o.d).slice(0,t)===(r=Ht(n.d)).slice(0,t))if(r=r.slice(t-3,t+1),r=="9999"||!i&&r=="4999"){if(!i&&(X(o,u+1,0),o.times(o).eq(s))){n=o;break}t+=4,i=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(X(n,u+1,1),e=!n.times(n).eq(s));break}return Y=!0,X(n,u,h.rounding,e)};O.tangent=O.tan=function(){var e,r,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(e=n.precision,r=n.rounding,n.precision=e+10,n.rounding=1,t=t.sin(),t.s=1,t=_t(t,new n(1).minus(t.times(t)).sqrt(),e+10,0),n.precision=e,n.rounding=r,X(Be==2||Be==4?t.neg():t,e,r,!0)):new n(NaN)};O.times=O.mul=function(e){var r,t,n,i,o,s,a,u,l,h=this,f=h.constructor,c=h.d,d=(e=new f(e)).d;if(e.s*=h.s,!c||!c[0]||!d||!d[0])return new f(!e.s||c&&!c[0]&&!d||d&&!d[0]&&!c?NaN:!c||!d?e.s/0:e.s*0);for(t=$t(h.e/V)+$t(e.e/V),u=c.length,l=d.length,u<l&&(o=c,c=d,d=o,s=u,u=l,l=s),o=[],s=u+l,n=s;n--;)o.push(0);for(n=l;--n>=0;){for(r=0,i=u+n;i>n;)a=o[i]+d[n]*c[i-n-1]+r,o[i--]=a%me|0,r=a/me|0;o[i]=(o[i]+r)%me|0}for(;!o[--s];)o.pop();return r?++t:o.shift(),e.d=o,e.e=vo(o,t),Y?X(e,f.precision,f.rounding):e};O.toBinary=function(e,r){return vu(this,2,e,r)};O.toDecimalPlaces=O.toDP=function(e,r){var t=this,n=t.constructor;return t=new n(t),e===void 0?t:(Zt(e,0,Qe),r===void 0?r=n.rounding:Zt(r,0,8),X(t,e+t.e+1,r))};O.toExponential=function(e,r){var t,n=this,i=n.constructor;return e===void 0?t=Oe(n,!0):(Zt(e,0,Qe),r===void 0?r=i.rounding:Zt(r,0,8),n=X(new i(n),e+1,r),t=Oe(n,!0,e+1)),n.isNeg()&&!n.isZero()?"-"+t:t};O.toFixed=function(e,r){var t,n,i=this,o=i.constructor;return e===void 0?t=Oe(i):(Zt(e,0,Qe),r===void 0?r=o.rounding:Zt(r,0,8),n=X(new o(i),e+i.e+1,r),t=Oe(n,!1,e+n.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};O.toFraction=function(e){var r,t,n,i,o,s,a,u,l,h,f,c,d=this,p=d.d,v=d.constructor;if(!p)return new v(d);if(l=t=new v(1),n=u=new v(0),r=new v(n),o=r.e=Gd(p)-d.e-1,s=o%V,r.d[0]=Dt(10,s<0?V+s:s),e==null)e=o>0?r:l;else{if(a=new v(e),!a.isInt()||a.lt(l))throw Error(tr+a);e=a.gt(r)?o>0?r:l:a}for(Y=!1,a=new v(Ht(p)),h=v.precision,v.precision=o=p.length*V*2;f=_t(a,r,0,1,1),i=t.plus(f.times(n)),i.cmp(e)!=1;)t=n,n=i,i=l,l=u.plus(f.times(i)),u=i,i=r,r=a.minus(f.times(i)),a=i;return i=_t(e.minus(t),n,0,1,1),u=u.plus(i.times(l)),t=t.plus(i.times(n)),u.s=l.s=d.s,c=_t(l,n,o,1).minus(d).abs().cmp(_t(u,t,o,1).minus(d).abs())<1?[l,n]:[u,t],v.precision=h,Y=!0,c};O.toHexadecimal=O.toHex=function(e,r){return vu(this,16,e,r)};O.toNearest=function(e,r){var t=this,n=t.constructor;if(t=new n(t),e==null){if(!t.d)return t;e=new n(1),r=n.rounding}else{if(e=new n(e),r===void 0?r=n.rounding:Zt(r,0,8),!t.d)return e.s?t:e;if(!e.d)return e.s&&(e.s=t.s),e}return e.d[0]?(Y=!1,t=_t(t,e,0,r,1).times(e),Y=!0,X(t)):(e.s=t.s,t=e),t};O.toNumber=function(){return+this};O.toOctal=function(e,r){return vu(this,8,e,r)};O.toPower=O.pow=function(e){var r,t,n,i,o,s,a=this,u=a.constructor,l=+(e=new u(e));if(!a.d||!e.d||!a.d[0]||!e.d[0])return new u(Dt(+a,l));if(a=new u(a),a.eq(1))return a;if(n=u.precision,o=u.rounding,e.eq(1))return X(a,n,o);if(r=$t(e.e/V),r>=e.d.length-1&&(t=l<0?-l:l)<=Xw)return i=Bd(u,a,t,n),e.s<0?new u(1).div(i):X(i,n,o);if(s=a.s,s<0){if(r<e.d.length-1)return new u(NaN);if((e.d[r]&1)==0&&(s=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=s,a}return t=Dt(+a,l),r=t==0||!isFinite(t)?$t(l*(Math.log("0."+Ht(a.d))/Math.LN10+a.e+1)):new u(t+"").e,r>u.maxE+1||r<u.minE-1?new u(r>0?s/0:0):(Y=!1,u.rounding=a.s=1,t=Math.min(12,(r+"").length),i=du(e.times(rr(a,n+t)),n),i.d&&(i=X(i,n+5,1),Hn(i.d,n,o)&&(r=n+10,i=X(du(e.times(rr(a,r+t)),r),r+5,1),+Ht(i.d).slice(n+1,n+15)+1==1e14&&(i=X(i,n+1,0)))),i.s=s,Y=!0,u.rounding=o,X(i,n,o))};O.toPrecision=function(e,r){var t,n=this,i=n.constructor;return e===void 0?t=Oe(n,n.e<=i.toExpNeg||n.e>=i.toExpPos):(Zt(e,1,Qe),r===void 0?r=i.rounding:Zt(r,0,8),n=X(new i(n),e,r),t=Oe(n,e<=n.e||n.e<=i.toExpNeg,e)),n.isNeg()&&!n.isZero()?"-"+t:t};O.toSignificantDigits=O.toSD=function(e,r){var t=this,n=t.constructor;return e===void 0?(e=n.precision,r=n.rounding):(Zt(e,1,Qe),r===void 0?r=n.rounding:Zt(r,0,8)),X(new n(t),e,r)};O.toString=function(){var e=this,r=e.constructor,t=Oe(e,e.e<=r.toExpNeg||e.e>=r.toExpPos);return e.isNeg()&&!e.isZero()?"-"+t:t};O.truncated=O.trunc=function(){return X(new this.constructor(this),this.e+1,1)};O.valueOf=O.toJSON=function(){var e=this,r=e.constructor,t=Oe(e,e.e<=r.toExpNeg||e.e>=r.toExpPos);return e.isNeg()?"-"+t:t};function Ht(e){var r,t,n,i=e.length-1,o="",s=e[0];if(i>0){for(o+=s,r=1;r<i;r++)n=e[r]+"",t=V-n.length,t&&(o+=er(t)),o+=n;s=e[r],n=s+"",t=V-n.length,t&&(o+=er(t))}else if(s===0)return"0";for(;s%10==0;)s/=10;return o+s}function Zt(e,r,t){if(e!==~~e||e<r||e>t)throw Error(tr+e)}function Hn(e,r,t,n){var i,o,s,a;for(o=e[0];o>=10;o/=10)--r;return--r<0?(r+=V,i=0):(i=Math.ceil((r+1)/V),r%=V),o=Dt(10,V-r),a=e[i]%o|0,n==null?r<3?(r==0?a=a/100|0:r==1&&(a=a/10|0),s=t<4&&a==99999||t>3&&a==49999||a==5e4||a==0):s=(t<4&&a+1==o||t>3&&a+1==o/2)&&(e[i+1]/o/100|0)==Dt(10,r-2)-1||(a==o/2||a==0)&&(e[i+1]/o/100|0)==0:r<4?(r==0?a=a/1e3|0:r==1?a=a/100|0:r==2&&(a=a/10|0),s=(n||t<4)&&a==9999||!n&&t>3&&a==4999):s=((n||t<4)&&a+1==o||!n&&t>3&&a+1==o/2)&&(e[i+1]/o/1e3|0)==Dt(10,r-3)-1,s}function po(e,r,t){for(var n,i=[0],o,s=0,a=e.length;s<a;){for(o=i.length;o--;)i[o]*=r;for(i[0]+=hu.indexOf(e.charAt(s++)),n=0;n<i.length;n++)i[n]>t-1&&(i[n+1]===void 0&&(i[n+1]=0),i[n+1]+=i[n]/t|0,i[n]%=t)}return i.reverse()}function zw(e,r){var t,n,i;if(r.isZero())return r;n=r.d.length,n<32?(t=Math.ceil(n/3),i=(1/mo(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),e.precision+=t,r=nn(e,1,r.times(i),new e(1));for(var o=t;o--;){var s=r.times(r);r=s.times(s).minus(s).times(8).plus(1)}return e.precision-=t,r}var _t=function(){function e(n,i,o){var s,a=0,u=n.length;for(n=n.slice();u--;)s=n[u]*i+a,n[u]=s%o|0,a=s/o|0;return a&&n.unshift(a),n}function r(n,i,o,s){var a,u;if(o!=s)u=o>s?1:-1;else for(a=u=0;a<o;a++)if(n[a]!=i[a]){u=n[a]>i[a]?1:-1;break}return u}function t(n,i,o,s){for(var a=0;o--;)n[o]-=a,a=n[o]<i[o]?1:0,n[o]=a*s+n[o]-i[o];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,o,s,a,u){var l,h,f,c,d,p,v,_,g,b,w,E,T,x,I,U,C,N,L,B,D=n.constructor,et=n.s==i.s?1:-1,F=n.d,A=i.d;if(!F||!F[0]||!A||!A[0])return new D(!n.s||!i.s||(F?A&&F[0]==A[0]:!A)?NaN:F&&F[0]==0||!A?et*0:et/0);for(u?(d=1,h=n.e-i.e):(u=me,d=V,h=$t(n.e/d)-$t(i.e/d)),L=A.length,C=F.length,g=new D(et),b=g.d=[],f=0;A[f]==(F[f]||0);f++);if(A[f]>(F[f]||0)&&h--,o==null?(x=o=D.precision,s=D.rounding):a?x=o+(n.e-i.e)+1:x=o,x<0)b.push(1),p=!0;else{if(x=x/d+2|0,f=0,L==1){for(c=0,A=A[0],x++;(f<C||c)&&x--;f++)I=c*u+(F[f]||0),b[f]=I/A|0,c=I%A|0;p=c||f<C}else{for(c=u/(A[0]+1)|0,c>1&&(A=e(A,c,u),F=e(F,c,u),L=A.length,C=F.length),U=L,w=F.slice(0,L),E=w.length;E<L;)w[E++]=0;B=A.slice(),B.unshift(0),N=A[0],A[1]>=u/2&&++N;do c=0,l=r(A,w,L,E),l<0?(T=w[0],L!=E&&(T=T*u+(w[1]||0)),c=T/N|0,c>1?(c>=u&&(c=u-1),v=e(A,c,u),_=v.length,E=w.length,l=r(v,w,_,E),l==1&&(c--,t(v,L<_?B:A,_,u))):(c==0&&(l=c=1),v=A.slice()),_=v.length,_<E&&v.unshift(0),t(w,v,E,u),l==-1&&(E=w.length,l=r(A,w,L,E),l<1&&(c++,t(w,L<E?B:A,E,u))),E=w.length):l===0&&(c++,w=[0]),b[f++]=c,l&&w[0]?w[E++]=F[U]||0:(w=[F[U]],E=1);while((U++<C||w[0]!==void 0)&&x--);p=w[0]!==void 0}b[0]||b.shift()}if(d==1)g.e=h,Nd=p;else{for(f=1,c=b[0];c>=10;c/=10)f++;g.e=f+h*d-1,X(g,a?o+g.e+1:o,s,p)}return g}}();function X(e,r,t,n){var i,o,s,a,u,l,h,f,c,d=e.constructor;t:if(r!=null){if(f=e.d,!f)return e;for(i=1,a=f[0];a>=10;a/=10)i++;if(o=r-i,o<0)o+=V,s=r,h=f[c=0],u=h/Dt(10,i-s-1)%10|0;else if(c=Math.ceil((o+1)/V),a=f.length,c>=a)if(n){for(;a++<=c;)f.push(0);h=u=0,i=1,o%=V,s=o-V+1}else break t;else{for(h=a=f[c],i=1;a>=10;a/=10)i++;o%=V,s=o-V+i,u=s<0?0:h/Dt(10,i-s-1)%10|0}if(n=n||r<0||f[c+1]!==void 0||(s<0?h:h%Dt(10,i-s-1)),l=t<4?(u||n)&&(t==0||t==(e.s<0?3:2)):u>5||u==5&&(t==4||n||t==6&&(o>0?s>0?h/Dt(10,i-s):0:f[c-1])%10&1||t==(e.s<0?8:7)),r<1||!f[0])return f.length=0,l?(r-=e.e+1,f[0]=Dt(10,(V-r%V)%V),e.e=-r||0):f[0]=e.e=0,e;if(o==0?(f.length=c,a=1,c--):(f.length=c+1,a=Dt(10,V-o),f[c]=s>0?(h/Dt(10,i-s)%Dt(10,s)|0)*a:0),l)for(;;)if(c==0){for(o=1,s=f[0];s>=10;s/=10)o++;for(s=f[0]+=a,a=1;s>=10;s/=10)a++;o!=a&&(e.e++,f[0]==me&&(f[0]=1));break}else{if(f[c]+=a,f[c]!=me)break;f[c--]=0,a=1}for(o=f.length;f[--o]===0;)f.pop()}return Y&&(e.e>d.maxE?(e.d=null,e.e=NaN):e.e<d.minE&&(e.e=0,e.d=[0])),e}function Oe(e,r,t){if(!e.isFinite())return jd(e);var n,i=e.e,o=Ht(e.d),s=o.length;return r?(t&&(n=t-s)>0?o=o.charAt(0)+"."+o.slice(1)+er(n):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(e.e<0?"e":"e+")+e.e):i<0?(o="0."+er(-i-1)+o,t&&(n=t-s)>0&&(o+=er(n))):i>=s?(o+=er(i+1-s),t&&(n=t-i-1)>0&&(o=o+"."+er(n))):((n=i+1)<s&&(o=o.slice(0,n)+"."+o.slice(n)),t&&(n=t-s)>0&&(i+1===s&&(o+="."),o+=er(n))),o}function vo(e,r){var t=e[0];for(r*=V;t>=10;t/=10)r++;return r}function _o(e,r,t){if(r>Hw)throw Y=!0,t&&(e.precision=t),Error(Fd);return X(new e(ho),r,1,!0)}function ge(e,r,t){if(r>cu)throw Error(Fd);return X(new e(fo),r,t,!0)}function Gd(e){var r=e.length-1,t=r*V+1;if(r=e[r],r){for(;r%10==0;r/=10)t--;for(r=e[0];r>=10;r/=10)t++}return t}function er(e){for(var r="";e--;)r+="0";return r}function Bd(e,r,t,n){var i,o=new e(1),s=Math.ceil(n/V+4);for(Y=!1;;){if(t%2&&(o=o.times(r),Hd(o.d,s)&&(i=!0)),t=$t(t/2),t===0){t=o.d.length-1,i&&o.d[t]===0&&++o.d[t];break}r=r.times(r),Hd(r.d,s)}return Y=!0,o}function Dd(e){return e.d[e.d.length-1]&1}function kd(e,r,t){for(var n,i=new e(r[0]),o=0;++o<r.length;)if(n=new e(r[o]),n.s)i[t](n)&&(i=n);else{i=n;break}return i}function du(e,r){var t,n,i,o,s,a,u,l=0,h=0,f=0,c=e.constructor,d=c.rounding,p=c.precision;if(!e.d||!e.d[0]||e.e>17)return new c(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(r==null?(Y=!1,u=p):u=r,a=new c(.03125);e.e>-2;)e=e.times(a),f+=5;for(n=Math.log(Dt(2,f))/Math.LN10*2+5|0,u+=n,t=o=s=new c(1),c.precision=u;;){if(o=X(o.times(e),u,1),t=t.times(++h),a=s.plus(_t(o,t,u,1)),Ht(a.d).slice(0,u)===Ht(s.d).slice(0,u)){for(i=f;i--;)s=X(s.times(s),u,1);if(r==null)if(l<3&&Hn(s.d,u-n,d,l))c.precision=u+=10,t=o=a=new c(1),h=0,l++;else return X(s,c.precision=p,d,Y=!0);else return c.precision=p,s}s=a}}function rr(e,r){var t,n,i,o,s,a,u,l,h,f,c,d=1,p=10,v=e,_=v.d,g=v.constructor,b=g.rounding,w=g.precision;if(v.s<0||!_||!_[0]||!v.e&&_[0]==1&&_.length==1)return new g(_&&!_[0]?-1/0:v.s!=1?NaN:_?0:v);if(r==null?(Y=!1,h=w):h=r,g.precision=h+=p,t=Ht(_),n=t.charAt(0),Math.abs(o=v.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)v=v.times(e),t=Ht(v.d),n=t.charAt(0),d++;o=v.e,n>1?(v=new g("0."+t),o++):v=new g(n+"."+t.slice(1))}else return l=_o(g,h+2,w).times(o+""),v=rr(new g(n+"."+t.slice(1)),h-p).plus(l),g.precision=w,r==null?X(v,w,b,Y=!0):v;for(f=v,u=s=v=_t(v.minus(1),v.plus(1),h,1),c=X(v.times(v),h,1),i=3;;){if(s=X(s.times(c),h,1),l=u.plus(_t(s,new g(i),h,1)),Ht(l.d).slice(0,h)===Ht(u.d).slice(0,h))if(u=u.times(2),o!==0&&(u=u.plus(_o(g,h+2,w).times(o+""))),u=_t(u,new g(d),h,1),r==null)if(Hn(u.d,h-p,b,a))g.precision=h+=p,l=s=v=_t(f.minus(1),f.plus(1),h,1),c=X(v.times(v),h,1),i=a=1;else return X(u,g.precision=w,b,Y=!0);else return g.precision=w,u;u=l,i+=2}}function jd(e){return String(e.s*e.s/0)}function pu(e,r){var t,n,i;for((t=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length),n=0;r.charCodeAt(n)===48;n++);for(i=r.length;r.charCodeAt(i-1)===48;--i);if(r=r.slice(n,i),r){if(i-=n,e.e=t=t-n-1,e.d=[],n=(t+1)%V,t<0&&(n+=V),n<i){for(n&&e.d.push(+r.slice(0,n)),i-=V;n<i;)e.d.push(+r.slice(n,n+=V));r=r.slice(n),n=V-r.length}else n-=i;for(;n--;)r+="0";e.d.push(+r),Y&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Vw(e,r){var t,n,i,o,s,a,u,l,h;if(r.indexOf("_")>-1){if(r=r.replace(/(\d)_(?=\d)/g,"$1"),Md.test(r))return pu(e,r)}else if(r==="Infinity"||r==="NaN")return+r||(e.s=NaN),e.e=NaN,e.d=null,e;if(kw.test(r))t=16,r=r.toLowerCase();else if(Dw.test(r))t=2;else if(jw.test(r))t=8;else throw Error(tr+r);for(o=r.search(/p/i),o>0?(u=+r.slice(o+1),r=r.substring(2,o)):r=r.slice(2),o=r.indexOf("."),s=o>=0,n=e.constructor,s&&(r=r.replace(".",""),a=r.length,o=a-o,i=Bd(n,new n(t),o,o*2)),l=po(r,t,me),h=l.length-1,o=h;l[o]===0;--o)l.pop();return o<0?new n(e.s*0):(e.e=vo(l,h),e.d=l,Y=!1,s&&(e=_t(e,i,a*4)),u&&(e=e.times(Math.abs(u)<54?Dt(2,u):go.pow(2,u))),Y=!0,e)}function $w(e,r){var t,n=r.d.length;if(n<3)return r.isZero()?r:nn(e,2,r,r);t=1.4*Math.sqrt(n),t=t>16?16:t|0,r=r.times(1/mo(5,t)),r=nn(e,2,r,r);for(var i,o=new e(5),s=new e(16),a=new e(20);t--;)i=r.times(r),r=r.times(o.plus(i.times(s.times(i).minus(a))));return r}function nn(e,r,t,n,i){var o,s,a,u,l=e.precision,h=Math.ceil(l/V);for(Y=!1,u=t.times(t),a=new e(n);;){if(s=_t(a.times(u),new e(r++*r++),l,1),a=i?n.plus(s):n.minus(s),n=_t(s.times(u),new e(r++*r++),l,1),s=a.plus(n),s.d[h]!==void 0){for(o=h;s.d[o]===a.d[o]&&o--;);if(o==-1)break}o=a,a=n,n=s,s=o}return Y=!0,s.d.length=h+1,s}function mo(e,r){for(var t=e;--r;)t*=e;return t}function Xd(e,r){var t,n=r.s<0,i=ge(e,e.precision,1),o=i.times(.5);if(r=r.abs(),r.lte(o))return Be=n?4:1,r;if(t=r.divToInt(i),t.isZero())Be=n?3:2;else{if(r=r.minus(t.times(i)),r.lte(o))return Be=Dd(t)?n?2:3:n?4:1,r;Be=Dd(t)?n?1:4:n?3:2}return r.minus(i).abs()}function vu(e,r,t,n){var i,o,s,a,u,l,h,f,c,d=e.constructor,p=t!==void 0;if(p?(Zt(t,1,Qe),n===void 0?n=d.rounding:Zt(n,0,8)):(t=d.precision,n=d.rounding),!e.isFinite())h=jd(e);else{for(h=Oe(e),s=h.indexOf("."),p?(i=2,r==16?t=t*4-3:r==8&&(t=t*3-2)):i=r,s>=0&&(h=h.replace(".",""),c=new d(1),c.e=h.length-s,c.d=po(Oe(c),10,i),c.e=c.d.length),f=po(h,10,i),o=u=f.length;f[--u]==0;)f.pop();if(!f[0])h=p?"0p+0":"0";else{if(s<0?o--:(e=new d(e),e.d=f,e.e=o,e=_t(e,c,t,n,0,i),f=e.d,o=e.e,l=Nd),s=f[t],a=i/2,l=l||f[t+1]!==void 0,l=n<4?(s!==void 0||l)&&(n===0||n===(e.s<0?3:2)):s>a||s===a&&(n===4||l||n===6&&f[t-1]&1||n===(e.s<0?8:7)),f.length=t,l)for(;++f[--t]>i-1;)f[t]=0,t||(++o,f.unshift(1));for(u=f.length;!f[u-1];--u);for(s=0,h="";s<u;s++)h+=hu.charAt(f[s]);if(p){if(u>1)if(r==16||r==8){for(s=r==16?4:3,--u;u%s;u++)h+="0";for(f=po(h,i,r),u=f.length;!f[u-1];--u);for(s=1,h="1.";s<u;s++)h+=hu.charAt(f[s])}else h=h.charAt(0)+"."+h.slice(1);h=h+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)h="0"+h;h="0."+h}else if(++o>u)for(o-=u;o--;)h+="0";else o<u&&(h=h.slice(0,o)+"."+h.slice(o))}h=(r==16?"0x":r==2?"0b":r==8?"0o":"")+h}return e.s<0?"-"+h:h}function Hd(e,r){if(e.length>r)return e.length=r,!0}function Ww(e){return new this(e).abs()}function qw(e){return new this(e).acos()}function Yw(e){return new this(e).acosh()}function Kw(e,r){return new this(e).plus(r)}function Zw(e){return new this(e).asin()}function Jw(e){return new this(e).asinh()}function Qw(e){return new this(e).atan()}function tE(e){return new this(e).atanh()}function eE(e,r){e=new this(e),r=new this(r);var t,n=this.precision,i=this.rounding,o=n+4;return!e.s||!r.s?t=new this(NaN):!e.d&&!r.d?(t=ge(this,o,1).times(r.s>0?.25:.75),t.s=e.s):!r.d||e.isZero()?(t=r.s<0?ge(this,n,i):new this(0),t.s=e.s):!e.d||r.isZero()?(t=ge(this,o,1).times(.5),t.s=e.s):r.s<0?(this.precision=o,this.rounding=1,t=this.atan(_t(e,r,o,1)),r=ge(this,o,1),this.precision=n,this.rounding=i,t=e.s<0?t.minus(r):t.plus(r)):t=this.atan(_t(e,r,o,1)),t}function rE(e){return new this(e).cbrt()}function nE(e){return X(e=new this(e),e.e+1,2)}function iE(e,r,t){return new this(e).clamp(r,t)}function oE(e){if(!e||typeof e!="object")throw Error(co+"Object expected");var r,t,n,i=e.defaults===!0,o=["precision",1,Qe,"rounding",0,8,"toExpNeg",-rn,0,"toExpPos",0,rn,"maxE",0,rn,"minE",-rn,0,"modulo",0,9];for(r=0;r<o.length;r+=3)if(t=o[r],i&&(this[t]=fu[t]),(n=e[t])!==void 0)if($t(n)===n&&n>=o[r+1]&&n<=o[r+2])this[t]=n;else throw Error(tr+t+": "+n);if(t="crypto",i&&(this[t]=fu[t]),(n=e[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Ud);else this[t]=!1;else throw Error(tr+t+": "+n);return this}function sE(e){return new this(e).cos()}function aE(e){return new this(e).cosh()}function zd(e){var r,t,n;function i(o){var s,a,u,l=this;if(!(l instanceof i))return new i(o);if(l.constructor=i,Vd(o)){l.s=o.s,Y?!o.d||o.e>i.maxE?(l.e=NaN,l.d=null):o.e<i.minE?(l.e=0,l.d=[0]):(l.e=o.e,l.d=o.d.slice()):(l.e=o.e,l.d=o.d?o.d.slice():o.d);return}if(u=typeof o,u==="number"){if(o===0){l.s=1/o<0?-1:1,l.e=0,l.d=[0];return}if(o<0?(o=-o,l.s=-1):l.s=1,o===~~o&&o<1e7){for(s=0,a=o;a>=10;a/=10)s++;Y?s>i.maxE?(l.e=NaN,l.d=null):s<i.minE?(l.e=0,l.d=[0]):(l.e=s,l.d=[o]):(l.e=s,l.d=[o]);return}else if(o*0!=0){o||(l.s=NaN),l.e=NaN,l.d=null;return}return pu(l,o.toString())}else if(u!=="string")throw Error(tr+o);return(a=o.charCodeAt(0))===45?(o=o.slice(1),l.s=-1):(a===43&&(o=o.slice(1)),l.s=1),Md.test(o)?pu(l,o):Vw(l,o)}if(i.prototype=O,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=oE,i.clone=zd,i.isDecimal=Vd,i.abs=Ww,i.acos=qw,i.acosh=Yw,i.add=Kw,i.asin=Zw,i.asinh=Jw,i.atan=Qw,i.atanh=tE,i.atan2=eE,i.cbrt=rE,i.ceil=nE,i.clamp=iE,i.cos=sE,i.cosh=aE,i.div=uE,i.exp=lE,i.floor=hE,i.hypot=fE,i.ln=cE,i.log=dE,i.log10=vE,i.log2=pE,i.max=_E,i.min=mE,i.mod=gE,i.mul=yE,i.pow=xE,i.random=bE,i.round=TE,i.sign=wE,i.sin=EE,i.sinh=CE,i.sqrt=PE,i.sub=IE,i.sum=RE,i.tan=OE,i.tanh=AE,i.trunc=SE,e===void 0&&(e={}),e&&e.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],r=0;r<n.length;)e.hasOwnProperty(t=n[r++])||(e[t]=this[t]);return i.config(e),i}function uE(e,r){return new this(e).div(r)}function lE(e){return new this(e).exp()}function hE(e){return X(e=new this(e),e.e+1,3)}function fE(){var e,r,t=new this(0);for(Y=!1,e=0;e<arguments.length;)if(r=new this(arguments[e++]),r.d)t.d&&(t=t.plus(r.times(r)));else{if(r.s)return Y=!0,new this(1/0);t=r}return Y=!0,t.sqrt()}function Vd(e){return e instanceof go||e&&e.toStringTag===Ld||!1}function cE(e){return new this(e).ln()}function dE(e,r){return new this(e).log(r)}function pE(e){return new this(e).log(2)}function vE(e){return new this(e).log(10)}function _E(){return kd(this,arguments,"lt")}function mE(){return kd(this,arguments,"gt")}function gE(e,r){return new this(e).mod(r)}function yE(e,r){return new this(e).mul(r)}function xE(e,r){return new this(e).pow(r)}function bE(e){var r,t,n,i,o=0,s=new this(1),a=[];if(e===void 0?e=this.precision:Zt(e,1,Qe),n=Math.ceil(e/V),this.crypto)if(crypto.getRandomValues)for(r=crypto.getRandomValues(new Uint32Array(n));o<n;)i=r[o],i>=429e7?r[o]=crypto.getRandomValues(new Uint32Array(1))[0]:a[o++]=i%1e7;else if(crypto.randomBytes){for(r=crypto.randomBytes(n*=4);o<n;)i=r[o]+(r[o+1]<<8)+(r[o+2]<<16)+((r[o+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(r,o):(a.push(i%1e7),o+=4);o=n/4}else throw Error(Ud);else for(;o<n;)a[o++]=Math.random()*1e7|0;for(n=a[--o],e%=V,n&&e&&(i=Dt(10,V-e),a[o]=(n/i|0)*i);a[o]===0;o--)a.pop();if(o<0)t=0,a=[0];else{for(t=-1;a[0]===0;t-=V)a.shift();for(n=1,i=a[0];i>=10;i/=10)n++;n<V&&(t-=V-n)}return s.e=t,s.d=a,s}function TE(e){return X(e=new this(e),e.e+1,this.rounding)}function wE(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function EE(e){return new this(e).sin()}function CE(e){return new this(e).sinh()}function PE(e){return new this(e).sqrt()}function IE(e,r){return new this(e).sub(r)}function RE(){var e=0,r=arguments,t=new this(r[e]);for(Y=!1;t.s&&++e<r.length;)t=t.plus(r[e]);return Y=!0,X(t,this.precision,this.rounding)}function OE(e){return new this(e).tan()}function AE(e){return new this(e).tanh()}function SE(e){return X(e=new this(e),e.e+1,1)}O[Symbol.for("nodejs.util.inspect.custom")]=O.toString;O[Symbol.toStringTag]="Decimal";var go=O.constructor=zd(fu);ho=new go(ho);fo=new go(fo);/*!
 * @pixi/sound - v4.2.0
 * https://github.com/pixijs/pixi-sound
 * Compiled Wed, 05 Jan 2022 14:56:00 UTC
 *
 * @pixi/sound is licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license
 */var $d;function Lt(){return $d}var Wd=function(e,r){return(Wd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(e,r)};function te(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Wd(e,r),e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var on=function(){return(on=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},_u=["mp3","ogg","oga","opus","mpeg","wav","m4a","aiff","wma","mid","caf"],qd={};function NE(e){var r=on({m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},e||{}),t=document.createElement("audio"),n={},i=/^no$/;_u.forEach(function(o){var s=t.canPlayType("audio/".concat(o)).replace(i,""),a=r[o]?t.canPlayType(r[o]).replace(i,""):"";n[o]=!!s||!!a}),Object.assign(qd,n)}NE();var FE=/\.(\{([^\}]+)\})(\?.*)?$/;function Yd(e){var r=FE,t=typeof e=="string"?e:e.url;if(!r.test(t))return t;for(var n=r.exec(t),i=n[2].split(","),o=i[i.length-1],s=0,a=i.length;s<a;s++){var u=i[s];if(qd[u]){o=u;break}}var l=t.replace(n[1],o);if(typeof e!="string"){var h=e;h.extension=o,h.url=l}return l}var Kd=function(){function e(){}return e.add=function(){e.setLegacy(Lt().useLegacy)},e.setLegacy=function(r){var t=_u;r?t.forEach(function(n){ft.setExtensionXhrType(n,ft.XHR_RESPONSE_TYPE.DEFAULT),ft.setExtensionLoadType(n,ft.LOAD_TYPE.AUDIO)}):t.forEach(function(n){ft.setExtensionXhrType(n,ft.XHR_RESPONSE_TYPE.BUFFER),ft.setExtensionLoadType(n,ft.LOAD_TYPE.XHR)})},e.pre=function(r,t){Yd(r),t()},e.use=function(r,t){r.data&&_u.indexOf(r.extension)>-1?r.sound=Lt().add(r.name,{loaded:t,preload:!0,url:r.url,source:r.data}):t()},e}(),UE=0,LE=function(e){function r(t){var n=e.call(this)||this;return n.id=UE++,n.init(t),n}return te(r,e),r.prototype.set=function(t,n){if(this[t]===void 0)throw new Error("Property with name ".concat(t," does not exist."));switch(t){case"speed":this.speed=n;break;case"volume":this.volume=n;break;case"paused":this.paused=n;break;case"loop":this.loop=n;break;case"muted":this.muted=n}return this},Object.defineProperty(r.prototype,"progress",{get:function(){return this._source.currentTime/this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"paused",{get:function(){return this._paused},set:function(t){this._paused=t,this.refreshPaused()},enumerable:!1,configurable:!0}),r.prototype._onPlay=function(){this._playing=!0},r.prototype._onPause=function(){this._playing=!1},r.prototype.init=function(t){this._playing=!1,this._duration=t.source.duration;var n=this._source=t.source.cloneNode(!1);n.src=t.parent.url,n.onplay=this._onPlay.bind(this),n.onpause=this._onPause.bind(this),t.context.on("refresh",this.refresh,this),t.context.on("refreshPaused",this.refreshPaused,this),this._media=t},r.prototype._internalStop=function(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())},r.prototype.stop=function(){this._internalStop(),this._source&&this.emit("stop")},Object.defineProperty(r.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"filters",{get:function(){return null},set:function(t){},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){var t=this._media.context,n=this._media.parent;this._source.loop=this._loop||n.loop;var i=t.volume*(t.muted?0:1),o=n.volume*(n.muted?0:1),s=this._volume*(this._muted?0:1);this._source.volume=s*i*o,this._source.playbackRate=this._speed*t.speed*n.speed},r.prototype.refreshPaused=function(){var t=this._media.context,n=this._media.parent,i=this._paused||n.paused||t.paused;i!==this._pausedReal&&(this._pausedReal=i,i?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",i))},r.prototype.play=function(t){var n=this,i=t.start,o=t.end,s=t.speed,a=t.loop,u=t.volume,l=t.muted;this._speed=s,this._volume=u,this._loop=!!a,this._muted=l,this.refresh(),this.loop&&o!==null&&(this.loop=!1),this._start=i,this._end=o||this._duration,this._start=Math.max(0,this._start-r.PADDING),this._end=Math.min(this._end+r.PADDING,this._duration),this._source.onloadedmetadata=function(){n._source&&(n._source.currentTime=i,n._source.onloadedmetadata=null,n.emit("progress",i,n._duration),Rt.shared.add(n._onUpdate,n))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")},r.prototype._onUpdate=function(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()},r.prototype._onComplete=function(){Rt.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)},r.prototype.destroy=function(){Rt.shared.remove(this._onUpdate,this),this.removeAllListeners();var t=this._source;t&&(t.onended=null,t.onplay=null,t.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)},r.prototype.toString=function(){return"[HTMLAudioInstance id=".concat(this.id,"]")},r.PADDING=.1,r}(be),ME=function(e){function r(){return e!==null&&e.apply(this,arguments)||this}return te(r,e),r.prototype.init=function(t){this.parent=t,this._source=t.options.source||new Audio,t.url&&(this._source.src=t.url)},r.prototype.create=function(){return new LE(this)},Object.defineProperty(r.prototype,"isPlayable",{get:function(){return!!this._source&&this._source.readyState===4},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"duration",{get:function(){return this._source.duration},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"context",{get:function(){return this.parent.context},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"filters",{get:function(){return null},set:function(t){},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)},Object.defineProperty(r.prototype,"source",{get:function(){return this._source},enumerable:!1,configurable:!0}),r.prototype.load=function(t){var n=this._source,i=this.parent;if(n.readyState!==4)if(i.url){n.src=i.url;var o=function(){u(),i.isLoaded=!0;var h=i.autoPlayStart();t&&t(null,i,h)},s=function(){u(),t&&t(new Error("Sound loading has been aborted"))},a=function(){u();var h="Failed to load audio element (code: ".concat(n.error.code,")");t&&t(new Error(h))},u=function(){n.removeEventListener("canplaythrough",o),n.removeEventListener("load",o),n.removeEventListener("abort",s),n.removeEventListener("error",a)};n.addEventListener("canplaythrough",o,!1),n.addEventListener("load",o,!1),n.addEventListener("abort",s,!1),n.addEventListener("error",a,!1),n.load()}else t(new Error("sound.url or sound.source must be set"));else{i.isLoaded=!0;var l=i.autoPlayStart();t&&setTimeout(function(){t(null,i,l)},0)}},r}(be),GE=function(){function e(r,t){this.parent=r,Object.assign(this,t),this.duration=this.end-this.start}return e.prototype.play=function(r){return this.parent.play({complete:r,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})},e.prototype.destroy=function(){this.parent=null},e}(),ie=function(){function e(){}return e.setParamValue=function(r,t){if(r.setValueAtTime){var n=Lt().context;r.setValueAtTime(t,n.audioContext.currentTime)}else r.value=t;return t},e}(),BE=0,DE=function(e){function r(t){var n=e.call(this)||this;return n.id=BE++,n._media=null,n._paused=!1,n._muted=!1,n._elapsed=0,n.init(t),n}return te(r,e),r.prototype.set=function(t,n){if(this[t]===void 0)throw new Error("Property with name ".concat(t," does not exist."));switch(t){case"speed":this.speed=n;break;case"volume":this.volume=n;break;case"muted":this.muted=n;break;case"loop":this.loop=n;break;case"paused":this.paused=n}return this},r.prototype.stop=function(){this._source&&(this._internalStop(),this.emit("stop"))},Object.defineProperty(r.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t,this.refresh(),this._update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"filters",{get:function(){return this._filters},set:function(t){var n;this._filters&&((n=this._filters)===null||n===void 0||n.filter(function(i){return i}).forEach(function(i){return i.disconnect()}),this._filters=null,this._source.connect(this._gain)),this._filters=(t==null?void 0:t.length)?t.slice(0):null,this.refresh()},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){if(this._source){var t=this._media.context,n=this._media.parent;this._source.loop=this._loop||n.loop;var i=t.volume*(t.muted?0:1),o=n.volume*(n.muted?0:1),s=this._volume*(this._muted?0:1);ie.setParamValue(this._gain.gain,s*o*i),ie.setParamValue(this._source.playbackRate,this._speed*n.speed*t.speed),this.applyFilters()}},r.prototype.applyFilters=function(){var t;if((t=this._filters)===null||t===void 0?void 0:t.length){this._source.disconnect();var n=this._source;this._filters.forEach(function(i){n.connect(i.destination),n=i}),n.connect(this._gain)}},r.prototype.refreshPaused=function(){var t=this._media.context,n=this._media.parent,i=this._paused||n.paused||t.paused;i!==this._pausedReal&&(this._pausedReal=i,i?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",i))},r.prototype.play=function(t){var n=t.start,i=t.end,o=t.speed,s=t.loop,a=t.volume,u=t.muted,l=t.filters;this._paused=!1;var h=this._media.nodes.cloneBufferSource(),f=h.source,c=h.gain;this._source=f,this._gain=c,this._speed=o,this._volume=a,this._loop=!!s,this._muted=u,this._filters=l,this.refresh();var d=this._source.buffer.duration;this._duration=d,this._end=i,this._lastUpdate=this._now(),this._elapsed=n,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=i,this._source.loopStart=n,this._source.start(0,n)):i?this._source.start(0,n,i-n):this._source.start(0,n),this.emit("start"),this._update(!0),this.enableTicker(!0)},r.prototype.enableTicker=function(t){Rt.shared.remove(this._updateListener,this),t&&Rt.shared.add(this._updateListener,this)},Object.defineProperty(r.prototype,"progress",{get:function(){return this._progress},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"paused",{get:function(){return this._paused},set:function(t){this._paused=t,this.refreshPaused()},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var t;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(t=this._filters)===null||t===void 0||t.forEach(function(n){return n.disconnect()}),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1},r.prototype.toString=function(){return"[WebAudioInstance id=".concat(this.id,"]")},r.prototype._now=function(){return this._media.context.audioContext.currentTime},r.prototype._updateListener=function(){this._update()},r.prototype._update=function(t){if(t===void 0&&(t=!1),this._source){var n=this._now(),i=n-this._lastUpdate;if(i>0||t){var o=this._source.playbackRate.value;this._elapsed+=i*o,this._lastUpdate=n;var s=this._duration,a=void 0;if(this._source.loopStart){var u=this._source.loopEnd-this._source.loopStart;a=(this._source.loopStart+this._elapsed%u)/s}else a=this._elapsed%s/s;this._progress=a,this.emit("progress",this._progress,s)}}},r.prototype.init=function(t){this._media=t,t.context.events.on("refresh",this.refresh,this),t.context.events.on("refreshPaused",this.refreshPaused,this)},r.prototype._internalStop=function(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch{}this._source=null}},r.prototype._onComplete=function(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch{}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)},r}(be),Zd=function(){function e(r,t){this._output=t,this._input=r}return Object.defineProperty(e.prototype,"destination",{get:function(){return this._input},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return this._filters},set:function(r){var t=this;if(this._filters&&(this._filters.forEach(function(i){i&&i.disconnect()}),this._filters=null,this._input.connect(this._output)),r&&r.length){this._filters=r.slice(0),this._input.disconnect();var n=null;r.forEach(function(i){n===null?t._input.connect(i.destination):n.connect(i.destination),n=i}),n.connect(this._output)}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.filters=null,this._input=null,this._output=null},e}(),kE=function(e){function r(t){var n=this,i=t.audioContext,o=i.createBufferSource(),s=i.createGain(),a=i.createAnalyser();return o.connect(a),a.connect(s),s.connect(t.destination),(n=e.call(this,a,s)||this).context=t,n.bufferSource=o,n.gain=s,n.analyser=a,n}return te(r,e),Object.defineProperty(r.prototype,"script",{get:function(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(r.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){e.prototype.destroy.call(this),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null},r.prototype.cloneBufferSource=function(){var t=this.bufferSource,n=this.context.audioContext.createBufferSource();n.buffer=t.buffer,ie.setParamValue(n.playbackRate,t.playbackRate.value),n.loop=t.loop;var i=this.context.audioContext.createGain();return n.connect(i),i.connect(this.destination),{source:n,gain:i}},Object.defineProperty(r.prototype,"bufferSize",{get:function(){return this.script.bufferSize},enumerable:!1,configurable:!0}),r.BUFFER_SIZE=0,r}(Zd),jE=function(){function e(){}return e.prototype.init=function(r){this.parent=r,this._nodes=new kE(this.context),this._source=this._nodes.bufferSource,this.source=r.options.source},e.prototype.destroy=function(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch{}this._source=null,this.source=null},e.prototype.create=function(){return new DE(this)},Object.defineProperty(e.prototype,"context",{get:function(){return this.parent.context},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isPlayable",{get:function(){return!!this._source&&!!this._source.buffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return this._nodes.filters},set:function(r){this._nodes.filters=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._source.buffer.duration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this._source.buffer},set:function(r){this._source.buffer=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nodes",{get:function(){return this._nodes},enumerable:!1,configurable:!0}),e.prototype.load=function(r){this.source?this._decode(this.source,r):this.parent.url?this._loadUrl(r):r&&r(new Error("sound.url or sound.source must be set"))},e.prototype._loadUrl=function(r){var t=this,n=new XMLHttpRequest,i=this.parent.url;n.open("GET",i,!0),n.responseType="arraybuffer",n.onload=function(){t.source=n.response,t._decode(n.response,r)},n.send()},e.prototype._decode=function(r,t){var n=this,i=function(o,s){if(o)t&&t(o);else{n.parent.isLoaded=!0,n.buffer=s;var a=n.parent.autoPlayStart();t&&t(null,n.parent,a)}};r instanceof AudioBuffer?i(null,r):this.parent.context.decode(r,i)},e}(),Jd=function(){function e(r,t){this.media=r,this.options=t,this._instances=[],this._sprites={},this.media.init(this);var n=t.complete;this._autoPlayOptions=n?{complete:n}:null,this.isLoaded=!1,this.isPlaying=!1,this.autoPlay=t.autoPlay,this.singleInstance=t.singleInstance,this.preload=t.preload||this.autoPlay,this.url=t.url,this.speed=t.speed,this.volume=t.volume,this.loop=t.loop,t.sprites&&this.addSprites(t.sprites),this.preload&&this._preload(t.loaded)}return e.from=function(r){var t={};return typeof r=="string"?t.url=r:r instanceof ArrayBuffer||r instanceof AudioBuffer||r instanceof HTMLAudioElement?t.source=r:t=r,(t=on({autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1},t)).url&&(t.url=Yd(t.url)),Object.freeze(t),new e(Lt().useLegacy?new ME:new jE,t)},Object.defineProperty(e.prototype,"context",{get:function(){return Lt().context},enumerable:!1,configurable:!0}),e.prototype.pause=function(){return this.isPlaying=!1,this.paused=!0,this},e.prototype.resume=function(){return this.isPlaying=this._instances.length>0,this.paused=!1,this},Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(r){this._paused=r,this.refreshPaused()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._speed},set:function(r){this._speed=r,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return this.media.filters},set:function(r){this.media.filters=r},enumerable:!1,configurable:!0}),e.prototype.addSprites=function(r,t){if(typeof r=="object"){var n={};for(var i in r)n[i]=this.addSprites(i,r[i]);return n}var o=new GE(this,t);return this._sprites[r]=o,o},e.prototype.destroy=function(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null},e.prototype.removeSprites=function(r){if(r){var t=this._sprites[r];t!==void 0&&(t.destroy(),delete this._sprites[r])}else for(var n in this._sprites)this.removeSprites(n);return this},Object.defineProperty(e.prototype,"isPlayable",{get:function(){return this.isLoaded&&this.media&&this.media.isPlayable},enumerable:!1,configurable:!0}),e.prototype.stop=function(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(var r=this._instances.length-1;r>=0;r--)this._instances[r].stop();return this},e.prototype.play=function(r,t){var n,i=this;if(typeof r=="string"?n={sprite:s=r,loop:this.loop,complete:t}:typeof r=="function"?(n={}).complete=r:n=r,(n=on({complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1},n||{})).sprite){var o=n.sprite,s=this._sprites[o];n.start=s.start+(n.start||0),n.end=s.end,n.speed=s.speed||1,n.loop=s.loop||n.loop,delete n.sprite}if(n.offset&&(n.start=n.offset),!this.isLoaded)return new Promise(function(u,l){i.autoPlay=!0,i._autoPlayOptions=n,i._preload(function(h,f,c){h?l(h):(n.loaded&&n.loaded(h,f,c),u(c))})});(this.singleInstance||n.singleInstance)&&this._removeInstances();var a=this._createInstance();return this._instances.push(a),this.isPlaying=!0,a.once("end",function(){n.complete&&n.complete(i),i._onComplete(a)}),a.once("stop",function(){i._onComplete(a)}),a.play(n),a},e.prototype.refresh=function(){for(var r=this._instances.length,t=0;t<r;t++)this._instances[t].refresh()},e.prototype.refreshPaused=function(){for(var r=this._instances.length,t=0;t<r;t++)this._instances[t].refreshPaused()},Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},set:function(r){this._volume=r,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._muted},set:function(r){this._muted=r,this.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loop",{get:function(){return this._loop},set:function(r){this._loop=r,this.refresh()},enumerable:!1,configurable:!0}),e.prototype._preload=function(r){this.media.load(r)},Object.defineProperty(e.prototype,"instances",{get:function(){return this._instances},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sprites",{get:function(){return this._sprites},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this.media.duration},enumerable:!1,configurable:!0}),e.prototype.autoPlayStart=function(){var r;return this.autoPlay&&(r=this.play(this._autoPlayOptions)),r},e.prototype._removeInstances=function(){for(var r=this._instances.length-1;r>=0;r--)this._poolInstance(this._instances[r]);this._instances.length=0},e.prototype._onComplete=function(r){if(this._instances){var t=this._instances.indexOf(r);t>-1&&this._instances.splice(t,1),this.isPlaying=this._instances.length>0}this._poolInstance(r)},e.prototype._createInstance=function(){if(e._pool.length>0){var r=e._pool.pop();return r.init(this.media),r}return this.media.create()},e.prototype._poolInstance=function(r){r.destroy(),e._pool.indexOf(r)<0&&e._pool.push(r)},e._pool=[],e}(),XE=function(e){function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.speed=1,t.muted=!1,t.volume=1,t.paused=!1,t}return te(r,e),r.prototype.refresh=function(){this.emit("refresh")},r.prototype.refreshPaused=function(){this.emit("refreshPaused")},Object.defineProperty(r.prototype,"filters",{get:function(){return null},set:function(t){},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"audioContext",{get:function(){return null},enumerable:!1,configurable:!0}),r.prototype.toggleMute=function(){return this.muted=!this.muted,this.refresh(),this.muted},r.prototype.togglePause=function(){return this.paused=!this.paused,this.refreshPaused(),this.paused},r.prototype.destroy=function(){this.removeAllListeners()},r}(be),Qd=function(e){function r(){var t=this,n=window,i=new r.AudioContext,o=i.createDynamicsCompressor(),s=i.createAnalyser();return s.connect(o),o.connect(i.destination),(t=e.call(this,s,o)||this)._ctx=i,t._offlineCtx=new r.OfflineAudioContext(1,2,n.OfflineAudioContext?i.sampleRate:44100),t._unlocked=!1,t.compressor=o,t.analyser=s,t.events=new be,t.volume=1,t.speed=1,t.muted=!1,t.paused=!1,i.state!=="running"&&(t._unlock(),t._unlock=t._unlock.bind(t),document.addEventListener("mousedown",t._unlock,!0),document.addEventListener("touchstart",t._unlock,!0),document.addEventListener("touchend",t._unlock,!0)),t}return te(r,e),r.prototype._unlock=function(){this._unlocked||(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._unlocked=!0))},r.prototype.playEmptySound=function(){var t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0),t.context.state==="suspended"&&t.context.resume()},Object.defineProperty(r,"AudioContext",{get:function(){var t=window;return t.AudioContext||t.webkitAudioContext||null},enumerable:!1,configurable:!0}),Object.defineProperty(r,"OfflineAudioContext",{get:function(){var t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){e.prototype.destroy.call(this);var t=this._ctx;t.close!==void 0&&t.close(),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null},Object.defineProperty(r.prototype,"audioContext",{get:function(){return this._ctx},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offlineContext",{get:function(){return this._offlineCtx},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"paused",{get:function(){return this._paused},set:function(t){t&&this._ctx.state==="running"?this._ctx.suspend():t||this._ctx.state!=="suspended"||this._ctx.resume(),this._paused=t},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){this.events.emit("refresh")},r.prototype.refreshPaused=function(){this.events.emit("refreshPaused")},r.prototype.toggleMute=function(){return this.muted=!this.muted,this.refresh(),this.muted},r.prototype.togglePause=function(){return this.paused=!this.paused,this.refreshPaused(),this._paused},r.prototype.decode=function(t,n){var i=function(s){n(new Error(s.message||"Unable to decode file"))},o=this._offlineCtx.decodeAudioData(t,function(s){n(null,s)},i);o&&o.catch(i)},r}(Zd),HE=function(){function e(){this.init()}return e.prototype.init=function(){return this.supported&&(this._webAudioContext=new Qd),this._htmlAudioContext=new XE,this._sounds={},this.useLegacy=!this.supported,this},Object.defineProperty(e.prototype,"context",{get:function(){return this._context},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filtersAll",{get:function(){return this.useLegacy?[]:this._context.filters},set:function(r){this.useLegacy||(this._context.filters=r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"supported",{get:function(){return Qd.AudioContext!==null},enumerable:!1,configurable:!0}),e.prototype.add=function(r,t){if(typeof r=="object"){var n={};for(var i in r){var o=this._getOptions(r[i],t);n[i]=this.add(i,o)}return n}if(t instanceof Jd)return this._sounds[r]=t,t;var s=this._getOptions(t),a=Jd.from(s);return this._sounds[r]=a,a},e.prototype._getOptions=function(r,t){var n;return n=typeof r=="string"?{url:r}:r instanceof ArrayBuffer||r instanceof AudioBuffer||r instanceof HTMLAudioElement?{source:r}:r,n=on(on({},n),t||{})},Object.defineProperty(e.prototype,"useLegacy",{get:function(){return this._useLegacy},set:function(r){Kd.setLegacy(r),this._useLegacy=r,this._context=!r&&this.supported?this._webAudioContext:this._htmlAudioContext},enumerable:!1,configurable:!0}),e.prototype.remove=function(r){return this.exists(r,!0),this._sounds[r].destroy(),delete this._sounds[r],this},Object.defineProperty(e.prototype,"volumeAll",{get:function(){return this._context.volume},set:function(r){this._context.volume=r,this._context.refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speedAll",{get:function(){return this._context.speed},set:function(r){this._context.speed=r,this._context.refresh()},enumerable:!1,configurable:!0}),e.prototype.togglePauseAll=function(){return this._context.togglePause()},e.prototype.pauseAll=function(){return this._context.paused=!0,this._context.refreshPaused(),this},e.prototype.resumeAll=function(){return this._context.paused=!1,this._context.refreshPaused(),this},e.prototype.toggleMuteAll=function(){return this._context.toggleMute()},e.prototype.muteAll=function(){return this._context.muted=!0,this._context.refresh(),this},e.prototype.unmuteAll=function(){return this._context.muted=!1,this._context.refresh(),this},e.prototype.removeAll=function(){for(var r in this._sounds)this._sounds[r].destroy(),delete this._sounds[r];return this},e.prototype.stopAll=function(){for(var r in this._sounds)this._sounds[r].stop();return this},e.prototype.exists=function(r,t){return!!this._sounds[r]},e.prototype.find=function(r){return this.exists(r,!0),this._sounds[r]},e.prototype.play=function(r,t){return this.find(r).play(t)},e.prototype.stop=function(r){return this.find(r).stop()},e.prototype.pause=function(r){return this.find(r).pause()},e.prototype.resume=function(r){return this.find(r).resume()},e.prototype.volume=function(r,t){var n=this.find(r);return t!==void 0&&(n.volume=t),n.volume},e.prototype.speed=function(r,t){var n=this.find(r);return t!==void 0&&(n.speed=t),n.speed},e.prototype.duration=function(r){return this.find(r).duration},e.prototype.close=function(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this},e}(),nr=function(){function e(r,t){this.init(r,t)}return e.prototype.init=function(r,t){this.destination=r,this.source=t||r},e.prototype.connect=function(r){this.source.connect(r)},e.prototype.disconnect=function(){this.source.disconnect()},e.prototype.destroy=function(){this.disconnect(),this.destination=null,this.source=null},e}();(function(e){function r(t,n,i,o,s,a,u,l,h,f){t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),o===void 0&&(o=0),s===void 0&&(s=0),a===void 0&&(a=0),u===void 0&&(u=0),l===void 0&&(l=0),h===void 0&&(h=0),f===void 0&&(f=0);var c=this;if(!Lt().useLegacy){var d=[{f:r.F32,type:"lowshelf",gain:t},{f:r.F64,type:"peaking",gain:n},{f:r.F125,type:"peaking",gain:i},{f:r.F250,type:"peaking",gain:o},{f:r.F500,type:"peaking",gain:s},{f:r.F1K,type:"peaking",gain:a},{f:r.F2K,type:"peaking",gain:u},{f:r.F4K,type:"peaking",gain:l},{f:r.F8K,type:"peaking",gain:h},{f:r.F16K,type:"highshelf",gain:f}].map(function(_){var g=Lt().context.audioContext.createBiquadFilter();return g.type=_.type,ie.setParamValue(g.Q,1),g.frequency.value=_.f,ie.setParamValue(g.gain,_.gain),g});(c=e.call(this,d[0],d[d.length-1])||this).bands=d,c.bandsMap={};for(var p=0;p<c.bands.length;p++){var v=c.bands[p];p>0&&c.bands[p-1].connect(v),c.bandsMap[v.frequency.value]=v}return c}c=e.call(this,null)||this}return te(r,e),r.prototype.setGain=function(t,n){if(n===void 0&&(n=0),!this.bandsMap[t])throw new Error("No band found for frequency ".concat(t));ie.setParamValue(this.bandsMap[t].gain,n)},r.prototype.getGain=function(t){if(!this.bandsMap[t])throw new Error("No band found for frequency ".concat(t));return this.bandsMap[t].gain.value},Object.defineProperty(r.prototype,"f32",{get:function(){return this.getGain(r.F32)},set:function(t){this.setGain(r.F32,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f64",{get:function(){return this.getGain(r.F64)},set:function(t){this.setGain(r.F64,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f125",{get:function(){return this.getGain(r.F125)},set:function(t){this.setGain(r.F125,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f250",{get:function(){return this.getGain(r.F250)},set:function(t){this.setGain(r.F250,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f500",{get:function(){return this.getGain(r.F500)},set:function(t){this.setGain(r.F500,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f1k",{get:function(){return this.getGain(r.F1K)},set:function(t){this.setGain(r.F1K,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f2k",{get:function(){return this.getGain(r.F2K)},set:function(t){this.setGain(r.F2K,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f4k",{get:function(){return this.getGain(r.F4K)},set:function(t){this.setGain(r.F4K,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f8k",{get:function(){return this.getGain(r.F8K)},set:function(t){this.setGain(r.F8K,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"f16k",{get:function(){return this.getGain(r.F16K)},set:function(t){this.setGain(r.F16K,t)},enumerable:!1,configurable:!0}),r.prototype.reset=function(){this.bands.forEach(function(t){ie.setParamValue(t.gain,0)})},r.prototype.destroy=function(){this.bands.forEach(function(t){t.disconnect()}),this.bands=null,this.bandsMap=null},r.F32=32,r.F64=64,r.F125=125,r.F250=250,r.F500=500,r.F1K=1e3,r.F2K=2e3,r.F4K=4e3,r.F8K=8e3,r.F16K=16e3,r})(nr),function(e){function r(t){t===void 0&&(t=0);var n=this;if(!Lt().useLegacy){var i=Lt().context.audioContext.createWaveShaper();return(n=e.call(this,i)||this)._distortion=i,n.amount=t,n}n=e.call(this,null)||this}return te(r,e),Object.defineProperty(r.prototype,"amount",{get:function(){return this._amount},set:function(t){this._amount=t;for(var n,i=1e3*t,o=44100,s=new Float32Array(o),a=Math.PI/180,u=0;u<o;++u)n=2*u/o-1,s[u]=(3+i)*n*20*a/(Math.PI+i*Math.abs(n));this._distortion.curve=s,this._distortion.oversample="4x"},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){this._distortion=null,e.prototype.destroy.call(this)},r}(nr),function(e){function r(t){t===void 0&&(t=0);var n=this;if(!Lt().useLegacy){var i,o,s,a=Lt().context.audioContext;return a.createStereoPanner?s=i=a.createStereoPanner():((o=a.createPanner()).panningModel="equalpower",s=o),(n=e.call(this,s)||this)._stereo=i,n._panner=o,n.pan=t,n}n=e.call(this,null)||this}return te(r,e),Object.defineProperty(r.prototype,"pan",{get:function(){return this._pan},set:function(t){this._pan=t,this._stereo?ie.setParamValue(this._stereo.pan,t):this._panner.setPosition(t,0,1-Math.abs(t))},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){e.prototype.destroy.call(this),this._stereo=null,this._panner=null},r}(nr),function(e){function r(t,n,i){t===void 0&&(t=3),n===void 0&&(n=2),i===void 0&&(i=!1);var o=this;if(!Lt().useLegacy)return(o=e.call(this,null)||this)._seconds=o._clamp(t,1,50),o._decay=o._clamp(n,0,100),o._reverse=i,o._rebuild(),o;o=e.call(this,null)||this}return te(r,e),r.prototype._clamp=function(t,n,i){return Math.min(i,Math.max(n,t))},Object.defineProperty(r.prototype,"seconds",{get:function(){return this._seconds},set:function(t){this._seconds=this._clamp(t,1,50),this._rebuild()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"decay",{get:function(){return this._decay},set:function(t){this._decay=this._clamp(t,0,100),this._rebuild()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"reverse",{get:function(){return this._reverse},set:function(t){this._reverse=t,this._rebuild()},enumerable:!1,configurable:!0}),r.prototype._rebuild=function(){for(var t,n=Lt().context.audioContext,i=n.sampleRate,o=i*this._seconds,s=n.createBuffer(2,o,i),a=s.getChannelData(0),u=s.getChannelData(1),l=0;l<o;l++)t=this._reverse?o-l:l,a[l]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay),u[l]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay);var h=Lt().context.audioContext.createConvolver();h.buffer=s,this.init(h)},r}(nr),function(e){function r(){var t=this;if(!Lt().useLegacy){var n=Lt().context.audioContext,i=n.createChannelSplitter(),o=n.createChannelMerger();return o.connect(i),(t=e.call(this,o,i)||this)._merger=o,t}t=e.call(this,null)||this}return te(r,e),r.prototype.destroy=function(){this._merger.disconnect(),this._merger=null,e.prototype.destroy.call(this)},r}(nr),function(e){function r(){var t=this;if(!Lt().useLegacy){var n=Lt().context.audioContext,i=n.createMediaStreamDestination(),o=n.createMediaStreamSource(i.stream);return(t=e.call(this,i,o)||this)._stream=i.stream,t}t=e.call(this,null)||this}return te(r,e),Object.defineProperty(r.prototype,"stream",{get:function(){return this._stream},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){this._stream=null,e.prototype.destroy.call(this)},r}(nr),function(e){function r(){if(!Lt().useLegacy){var t=Lt().context.audioContext,n=t.createBiquadFilter(),i=t.createBiquadFilter(),o=t.createBiquadFilter(),s=t.createBiquadFilter();return n.type="lowpass",ie.setParamValue(n.frequency,2e3),i.type="lowpass",ie.setParamValue(i.frequency,2e3),o.type="highpass",ie.setParamValue(o.frequency,500),s.type="highpass",ie.setParamValue(s.frequency,500),n.connect(i),i.connect(o),o.connect(s),e.call(this,n,s)||this}e.call(this,null)}return te(r,e),r}(nr);var JE=function(e){return $d=e,e}(new HE);le.registerPlugin(Kd);export{gs as A,Ie as C,go as D,WE as G,JE as I,zE as N,pr as R,Pn as S,of as T,qE as V,YE as a,$E as b,rf as c,tv as d,VE as f,ev as i,KE as s,ZE as v,Hx as w};

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HMap", [], factory);
	else if(typeof exports === 'object')
		exports["HMap"] = factory();
	else
		root["HMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;
var sign = __webpack_require__(4);

module.exports = function(x) {
  return (Math.abs(x) <= SPI) ? x : (x - (sign(x) * TWO_PI));
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / (Math.sqrt(1 - con * con));
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var sign = __webpack_require__(4);

module.exports = function(x) {
  return (Math.abs(x) < HALF_PI) ? x : (x - (sign(x) * Math.PI));
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(x) {
  if (Math.abs(x) > 1) {
    x = (x > 1) ? 1 : -1;
  }
  return Math.asin(x);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return x<0 ? -1 : 1;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (0.05859375 * x * x * (1 + 0.75 * x));
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (x * x * x * (35 / 3072));
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(e0, e1, e2, e3, phi) {
  return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;
module.exports = function(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = HALF_PI - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = HALF_PI - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;

module.exports = function(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow(((1 - con) / (1 + con)), com);
  return (Math.tan(0.5 * (HALF_PI - phi)) / con);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;var require;var require;var require;var require;var require;var require;// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.0.0
;(function (root, factory) {
  if (true) {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var k,aa=this;function t(a,b){var c=OPENLAYERS,d=a.split("."),c=c||aa;d[0]in c||!c.execScript||c.execScript("var "+d[0]);for(var e;d.length&&(e=d.shift());)d.length||void 0===b?c[e]?c=c[e]:c=c[e]={}:c[e]=b};var ba,ca;function da(a,b){return a>b?1:a<b?-1:0}function ea(a,b){return 0<=a.indexOf(b)}function fa(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1}function ga(a,b){var c,d=Array.isArray(b)?b:[b],e=d.length;for(c=0;c<e;c++)a[a.length]=d[c]}
function ha(a,b){for(var c=a.length>>>0,d,e=0;e<c;e++)if(d=a[e],b(d,e,a))return d;return null}function ia(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}function ja(a){var b=ka,c=a.length,d=Array(a.length),e;for(e=0;e<c;e++)d[e]={index:e,value:a[e]};d.sort(function(a,c){return b(a.value,c.value)||a.index-c.index});for(e=0;e<a.length;e++)a[e]=d[e].value}function la(a,b){var c;return a.every(function(d,e){c=e;return!b(d,e,a)})?-1:c}
function ma(a,b){var c=b||da;return a.every(function(b,e){if(!e)return!0;var d=c(a[e-1],b);return!(0<d||0===d)})};function u(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function na(){}function w(a){return a.ko||(a.ko=++oa)}var oa=0;function pa(a){this.message="Assertion failed. See https://openlayers.org/en/v4.0.0/doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}u(pa,Error);function qa(a,b){if(!a)throw new pa(b);};function sa(a,b,c,d){this.da=a;this.ba=b;this.fa=c;this.ja=d}function ta(a,b,c){return a.da<=b&&b<=a.ba&&a.fa<=c&&c<=a.ja}function ua(a,b){return a.da==b.da&&a.fa==b.fa&&a.ba==b.ba&&a.ja==b.ja}function va(a,b){return a.da<=b.ba&&a.ba>=b.da&&a.fa<=b.ja&&a.ja>=b.fa};function wa(a,b,c){return Math.min(Math.max(a,b),c)}var xa=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();function ya(a){qa(0<a,29);return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function za(a,b,c,d,e,f){var g=e-c,h=f-d;if(g||h){var l=((a-c)*g+(b-d)*h)/(g*g+h*h);1<l?(c=e,d=f):0<l&&(c+=g*l,d+=h*l)}return Aa(a,b,c,d)}function Aa(a,b,c,d){a=c-a;b=d-b;return a*a+b*b}function Ba(a){return a*Math.PI/180}
function Ca(a,b){var c=a%b;return 0>c*b?c+b:c}function Da(a,b,c){return a+c*(b-a)};function Ea(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]+2*b;c[1]=a[1]+2*b;return c}function Fa(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]*b+.5|0;c[1]=a[1]*b+.5|0;return c}function Ga(a,b){if(Array.isArray(a))return a;void 0===b?b=[a,a]:b[0]=b[1]=a;return b};function Ha(a){for(var b=Ia(),c=0,d=a.length;c<d;++c)Ja(b,a[c]);return b}function Ka(a,b,c){return c?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}function Na(a,b){return b?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function Oa(a,b,c){b=b<a[0]?a[0]-b:a[2]<b?b-a[2]:0;a=c<a[1]?a[1]-c:a[3]<c?c-a[3]:0;return b*b+a*a}function Qa(a,b){return Sa(a,b[0],b[1])}function Ta(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}
function Sa(a,b,c){return a[0]<=b&&b<=a[2]&&a[1]<=c&&c<=a[3]}function Ua(a,b){var c=a[1],d=a[2],e=a[3],f=b[0],g=b[1],h=0;f<a[0]?h|=16:f>d&&(h|=4);g<c?h|=8:g>e&&(h|=2);h||(h=1);return h}function Ia(){return[Infinity,Infinity,-Infinity,-Infinity]}function Va(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function Wa(a,b){var c=a[0],d=a[1];return Va(c,d,c,d,b)}function Xa(a,b,c,d,e){e=Va(Infinity,Infinity,-Infinity,-Infinity,e);return Ya(e,a,b,c,d)}
function Za(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function $a(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3]);return a}function Ja(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])}function Ya(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}
function ab(a,b,c){var d;return(d=b.call(c,bb(a)))||(d=b.call(c,cb(a)))||(d=b.call(c,db(a)))?d:(d=b.call(c,eb(a)))?d:!1}function fb(a){var b=0;gb(a)||(b=hb(a)*ib(a));return b}function bb(a){return[a[0],a[1]]}function cb(a){return[a[2],a[1]]}function jb(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}
function kb(a,b,c,d,e){var f=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);var g=Math.sin(c);c=f*b;f*=g;b*=d;var h=d*g,l=a[0],m=a[1];a=l-c+h;d=l-c-h;g=l+c-h;c=l+c+h;var h=m-f-b,l=m-f+b,p=m+f+b,f=m+f-b;return Va(Math.min(a,d,g,c),Math.min(h,l,p,f),Math.max(a,d,g,c),Math.max(h,l,p,f),e)}function ib(a){return a[3]-a[1]}function lb(a,b,c){c=c?c:Ia();mb(a,b)&&(c[0]=a[0]>b[0]?a[0]:b[0],c[1]=a[1]>b[1]?a[1]:b[1],c[2]=a[2]<b[2]?a[2]:b[2],c[3]=a[3]<b[3]?a[3]:b[3]);return c}function eb(a){return[a[0],a[3]]}
function db(a){return[a[2],a[3]]}function hb(a){return a[2]-a[0]}function mb(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]}function gb(a){return a[2]<a[0]||a[3]<a[1]}function nb(a,b){var c=(a[2]-a[0])/2*(b-1),d=(a[3]-a[1])/2*(b-1);a[0]-=c;a[2]+=c;a[1]-=d;a[3]+=d}
function ob(a,b,c){a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);var d=[a[0],a[2],a[4],a[6]],e=[a[1],a[3],a[5],a[7]];b=Math.min.apply(null,d);a=Math.min.apply(null,e);d=Math.max.apply(null,d);e=Math.max.apply(null,e);return Va(b,a,d,e,c)};var pb="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function qb(a){for(var b in a)delete a[b]}function rb(a){var b=[],c;for(c in a)b.push(a[c]);return b}function sb(a){for(var b in a)return!1;return!b};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function tb(a){this.radius=a}tb.prototype.a=function(a){for(var b=0,c=a.length,d=a[c-1][0],e=a[c-1][1],f=0;f<c;f++)var g=a[f][0],h=a[f][1],b=b+Ba(g-d)*(2+Math.sin(Ba(e))+Math.sin(Ba(h))),d=g,e=h;return b*this.radius*this.radius/2};tb.prototype.b=function(a,b){var c=Ba(a[1]),d=Ba(b[1]),e=(d-c)/2,f=Ba(b[0]-a[0])/2,c=Math.sin(e)*Math.sin(e)+Math.sin(f)*Math.sin(f)*Math.cos(c)*Math.cos(d);return 2*this.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))};
tb.prototype.offset=function(a,b,c){var d=Ba(a[1]);b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(Ba(a[0])+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var ub=new tb(6370997);var vb={};vb.degrees=2*Math.PI*ub.radius/360;vb.ft=.3048;vb.m=1;vb["us-ft"]=1200/3937;var wb=null;function yb(a){this.nb=a.code;this.i=a.units;this.c=void 0!==a.extent?a.extent:null;this.g=void 0!==a.worldExtent?a.worldExtent:null;this.b=void 0!==a.axisOrientation?a.axisOrientation:"enu";this.f=void 0!==a.global?a.global:!1;this.a=!(!this.f||!this.c);this.j=a.getPointResolution;this.l=null;this.o=a.metersPerUnit;var b=a.code,c=wb||window.proj4;"function"==typeof c&&(b=c.defs(b),void 0!==b&&(void 0!==b.axis&&void 0===a.axisOrientation&&(this.b=b.axis),void 0===a.metersPerUnit&&(this.o=b.to_meter),
void 0===a.units&&(this.i=b.units)))}k=yb.prototype;k.nk=function(){return this.nb};k.D=function(){return this.c};k.Jb=function(){return this.i};k.sc=function(){return this.o||vb[this.i]};k.Zk=function(){return this.g};k.Kl=function(){return this.f};k.pp=function(a){this.f=a;this.a=!(!a||!this.c)};k.ln=function(a){this.c=a;this.a=!(!this.f||!a)};k.xp=function(a){this.g=a};k.op=function(a){this.j=a};var zb={};var Ab={};function Bb(a,b,c){a=a.nb;b=b.nb;a in Ab||(Ab[a]={});Ab[a][b]=c}function Db(a,b){var c;a in Ab&&b in Ab[a]&&(c=Ab[a][b]);return c};function Eb(a,b,c){var d=a.j;d?b=d(b,c):"degrees"!=a.Jb()&&(d=Fb(a,Gb("EPSG:4326")),b=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],b=d(b,b,2),b=(ub.b(b.slice(0,2),b.slice(2,4))+ub.b(b.slice(4,6),b.slice(6,8)))/2,a=a.sc(),void 0!==a&&(b/=a));return b}function Hb(a){Ib(a);a.forEach(function(b){a.forEach(function(a){b!==a&&Bb(b,a,Jb)})})}function Kb(){var a=Lb,b=Mb,c=Nb;Ob.forEach(function(d){a.forEach(function(a){Bb(d,a,b);Bb(a,d,c)})})}function Pb(a){zb[a.nb]=a;Bb(a,a,Jb)}
function Ib(a){var b=[];a.forEach(function(a){b.push(Pb(a))})}function Qb(a){return a?"string"===typeof a?Gb(a):a:Gb("EPSG:3857")}function Rb(a,b,c,d){a=Gb(a);b=Gb(b);Bb(a,b,Sb(c));Bb(b,a,Sb(d))}function Sb(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function Gb(a){var b=null;if(a instanceof yb)b=a;else if("string"===typeof a){var b=zb[a]||null,c=wb||window.proj4;b||"function"!=typeof c||void 0===c.defs(a)||(b=new yb({code:a}),Pb(b))}return b}function Tb(a,b){if(a===b)return!0;var c=a.Jb()===b.Jb();return a.nb===b.nb?c:Fb(a,b)===Jb&&c}function Ub(a,b){var c=Gb(a),d=Gb(b);return Fb(c,d)}
function Fb(a,b){var c=a.nb,d=b.nb,e=Db(c,d);if(!e){var f=wb||window.proj4;if("function"==typeof f){var g=f.defs(c),h=f.defs(d);void 0!==g&&void 0!==h&&(g===h?Hb([b,a]):(e=f(d,c),Rb(b,a,e.forward,e.inverse)),e=Db(c,d))}}e||(e=Vb);return e}function Vb(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function Jb(a,b){var c;if(void 0!==b){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c}function Wb(a,b,c){return Ub(b,c)(a,void 0,a.length)}
function Xb(a,b,c){b=Ub(b,c);return ob(a,b)};function Yb(a,b,c,d){return void 0!==d?(d[0]=a,d[1]=b,d[2]=c,d):[a,b,c]}function Zb(a){var b=a[0],c=Array(b),d=1<<b-1,e,f;for(e=0;e<b;++e)f=48,a[1]&d&&(f+=1),a[2]&d&&(f+=2),c[e]=String.fromCharCode(f),d>>=1;return c.join("")};function $b(a){this.minZoom=void 0!==a.minZoom?a.minZoom:0;this.b=a.resolutions;qa(ma(this.b,function(a,b){return b-a}),17);this.maxZoom=this.b.length-1;this.f=void 0!==a.origin?a.origin:null;this.c=null;void 0!==a.origins&&(this.c=a.origins,qa(this.c.length==this.b.length,20));var b=a.extent;void 0===b||this.f||this.c||(this.f=eb(b));qa(!this.f&&this.c||this.f&&!this.c,18);this.i=null;void 0!==a.tileSizes&&(this.i=a.tileSizes,qa(this.i.length==this.b.length,19));this.g=void 0!==a.tileSize?a.tileSize:
this.i?null:256;qa(!this.g&&this.i||this.g&&!this.i,22);this.v=void 0!==b?b:null;this.a=null;this.l=[0,0];void 0!==a.sizes?this.a=a.sizes.map(function(a){return new sa(Math.min(0,a[0]),Math.max(a[0]-1,-1),Math.min(0,a[1]),Math.max(a[1]-1,-1))},this):b&&ac(this,b)}var bc=[0,0,0];k=$b.prototype;k.eh=function(a,b,c){a=cc(this,a,b);for(var d=a.da,e=a.ba;d<=e;++d)for(var f=a.fa,g=a.ja;f<=g;++f)c([b,d,f])};
function ec(a,b,c,d,e){e=a.Ta(b,e);for(b=b[0]-1;b>=a.minZoom;){if(c.call(null,b,cc(a,e,b,d)))return!0;--b}return!1}k.D=function(){return this.v};k.oh=function(){return this.maxZoom};k.ph=function(){return this.minZoom};k.Qc=function(a){return this.f?this.f:this.c[a]};k.La=function(a){return this.b[a]};k.oi=function(){return this.b};function fc(a,b,c,d){return b[0]<a.maxZoom?(d=a.Ta(b,d),cc(a,d,b[0]+1,c)):null}
function gc(a,b,c,d){hc(a,b[0],b[1],c,!1,bc);var e=bc[1],f=bc[2];hc(a,b[2],b[3],c,!0,bc);a=bc[1];b=bc[2];void 0!==d?(d.da=e,d.ba=a,d.fa=f,d.ja=b):d=new sa(e,a,f,b);return d}function cc(a,b,c,d){return gc(a,b,a.La(c),d)}function ic(a,b){var c=a.Qc(b[0]),d=a.La(b[0]),e=Ga(a.fb(b[0]),a.l);return[c[0]+(b[1]+.5)*e[0]*d,c[1]+(b[2]+.5)*e[1]*d]}k.Ta=function(a,b){var c=this.Qc(a[0]),d=this.La(a[0]),e=Ga(this.fb(a[0]),this.l),f=c[0]+a[1]*e[0]*d,c=c[1]+a[2]*e[1]*d;return Va(f,c,f+e[0]*d,c+e[1]*d,b)};
k.we=function(a,b,c){return hc(this,a[0],a[1],b,!1,c)};function hc(a,b,c,d,e,f){var g=a.Mc(d),h=d/a.La(g),l=a.Qc(g);a=Ga(a.fb(g),a.l);b=h*Math.floor((b-l[0])/d+(e?.5:0))/a[0];c=h*Math.floor((c-l[1])/d+(e?0:.5))/a[1];e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));return Yb(g,b,c,f)}k.Pf=function(a,b,c){return hc(this,a[0],a[1],this.La(b),!1,c)};k.fb=function(a){return this.g?this.g:this.i[a]};k.Mc=function(a,b){return wa(fa(this.b,a,b||0),this.minZoom,this.maxZoom)};
function ac(a,b){for(var c=a.b.length,d=Array(c),e=a.minZoom;e<c;++e)d[e]=cc(a,b,e);a.a=d};function jc(a){var b=a.l;if(!b){var b=kc(a),c=lc(b,void 0,void 0),b=new $b({extent:b,origin:eb(b),resolutions:c,tileSize:void 0});a.l=b}return b}function mc(a){var b={};pb(b,a?a:{});void 0===b.extent&&(b.extent=Gb("EPSG:3857").D());b.resolutions=lc(b.extent,b.maxZoom,b.tileSize);delete b.maxZoom;return new $b(b)}function lc(a,b,c){b=void 0!==b?b:42;var d=ib(a);a=hb(a);c=Ga(void 0!==c?c:256);c=Math.max(a/c[0],d/c[1]);b+=1;d=Array(b);for(a=0;a<b;++a)d[a]=c/Math.pow(2,a);return d}
function kc(a){a=Gb(a);var b=a.D();b||(a=180*vb.degrees/a.sc(),b=Va(-a,-a,a,a));return b};function nc(a){this.b=a.html;this.a=a.tileRanges?a.tileRanges:null}nc.prototype.f=function(){return this.b};function oc(a){return function(b){if(b)return[wa(b[0],a[0],a[2]),wa(b[1],a[1],a[3])]}}function pc(a){return a};function qc(a){function b(b){var c=a.listener,e=a.Vg||a.target;a.Xg&&rc(a);return c.call(e,b)}return a.Wg=b}function sc(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.Vg===c)return d&&(e.deleteIndex=f),e}function tc(a,b){var c=a.eb;return c?c[b]:void 0}function uc(a){var b=a.eb;b||(b=a.eb={});return b}
function vc(a,b){var c=tc(a,b);if(c){for(var d=0,e=c.length;d<e;++d)a.removeEventListener(b,c[d].Wg),qb(c[d]);c.length=0;if(c=a.eb)delete c[b],Object.keys(c).length||delete a.eb}}function B(a,b,c,d,e){var f=uc(a),g=f[b];g||(g=f[b]=[]);(f=sc(g,c,d,!1))?e||(f.Xg=!1):(f={Vg:d,Xg:!!e,listener:c,target:a,type:b},a.addEventListener(b,qc(f)),g.push(f));return f}function wc(a,b,c,d){return B(a,b,c,d,!0)}function xc(a,b,c,d){(a=tc(a,b))&&(c=sc(a,c,d,!0))&&rc(c)}
function rc(a){if(a&&a.target){a.target.removeEventListener(a.type,a.Wg);var b=tc(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);b.length||vc(a.target,a.type)}qb(a)}}function yc(a){var b=uc(a),c;for(c in b)vc(a,c)};function zc(){}zc.prototype.Zb=!1;function Ac(a){a.Zb||(a.Zb=!0,a.ra())}zc.prototype.ra=na;function Bc(a){this.type=a;this.target=null}Bc.prototype.preventDefault=Bc.prototype.stopPropagation=function(){this.Fo=!0};function Cc(a){a.stopPropagation()};function Dc(){this.$a={};this.ta={};this.qa={}}u(Dc,zc);Dc.prototype.addEventListener=function(a,b){var c=this.qa[a];c||(c=this.qa[a]=[]);-1===c.indexOf(b)&&c.push(b)};
Dc.prototype.b=function(a){var b="string"===typeof a?new Bc(a):a;a=b.type;b.target=this;var c=this.qa[a],d;if(c){a in this.ta||(this.ta[a]=0,this.$a[a]=0);++this.ta[a];for(var e=0,f=c.length;e<f;++e)if(!1===c[e].call(this,b)||b.Fo){d=!1;break}--this.ta[a];if(!this.ta[a]){b=this.$a[a];for(delete this.$a[a];b--;)this.removeEventListener(a,na);delete this.ta[a]}return d}};Dc.prototype.ra=function(){yc(this)};function Ec(a,b){return b?b in a.qa:0<Object.keys(a.qa).length}
Dc.prototype.removeEventListener=function(a,b){var c=this.qa[a];if(c){var d=c.indexOf(b);a in this.$a?(c[d]=na,++this.$a[a]):(c.splice(d,1),c.length||delete this.qa[a])}};function Fc(){Dc.call(this);this.f=0}u(Fc,Dc);k=Fc.prototype;k.s=function(){++this.f;this.b("change")};k.L=function(){return this.f};k.J=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=B(this,a[f],b,c);return e}return B(this,a,b,c)};k.once=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=wc(this,a[f],b,c);return e}return wc(this,a,b,c)};
k.K=function(a,b,c){if(Array.isArray(a))for(var d=0,e=a.length;d<e;++d)xc(this,a[d],b,c);else xc(this,a,b,c)};function Gc(a){Fc.call(this);w(this);this.I={};void 0!==a&&this.H(a)}u(Gc,Fc);var Hc={};function Ic(a){return Hc.hasOwnProperty(a)?Hc[a]:Hc[a]="change:"+a}k=Gc.prototype;k.get=function(a){var b;this.I.hasOwnProperty(a)&&(b=this.I[a]);return b};k.O=function(){return Object.keys(this.I)};k.N=function(){return pb({},this.I)};function Jc(a,b,c){var d;d=Ic(b);a.b(new Kc(d,b,c));a.b(new Kc("propertychange",b,c))}k.set=function(a,b,c){c?this.I[a]=b:(c=this.I[a],this.I[a]=b,c!==b&&Jc(this,a,c))};
k.H=function(a,b){for(var c in a)this.set(c,a[c],b)};k.P=function(a,b){if(a in this.I){var c=this.I[a];delete this.I[a];b||Jc(this,a,c)}};function Kc(a,b,c){Bc.call(this,a);this.key=b;this.oldValue=c}u(Kc,Bc);function D(a){Gc.call(this);this.a=a?a:[];Lc(this)}u(D,Gc);k=D.prototype;k.clear=function(){for(;0<this.ec();)this.pop()};k.Tf=function(a){var b,c;b=0;for(c=a.length;b<c;++b)this.push(a[b]);return this};k.forEach=function(a,b){this.a.forEach(a,b)};k.am=function(){return this.a};k.item=function(a){return this.a[a]};k.ec=function(){return this.get(Mc)};k.Be=function(a,b){this.a.splice(a,0,b);Lc(this);this.b(new Nc("add",b))};k.pop=function(){return this.tg(this.ec()-1)};
k.push=function(a){var b=this.ec();this.Be(b,a);return this.ec()};k.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return this.tg(c)};k.tg=function(a){var b=this.a[a];this.a.splice(a,1);Lc(this);this.b(new Nc("remove",b));return b};k.mp=function(a,b){var c=this.ec();if(a<c)c=this.a[a],this.a[a]=b,this.b(new Nc("remove",c)),this.b(new Nc("add",b));else{for(;c<a;++c)this.Be(c,void 0);this.Be(a,b)}};function Lc(a){a.set(Mc,a.a.length)}var Mc="length";
function Nc(a,b){Bc.call(this,a);this.element=b}u(Nc,Bc);var Oc=/^#(?:[0-9a-f]{3}){1,2}$/i,Pc=/^([a-z]*)$/i;function Qc(a){return Array.isArray(a)?a:Rc(a)}function Sc(a){if("string"!==typeof a){var b=a[0];b!=(b|0)&&(b=b+.5|0);var c=a[1];c!=(c|0)&&(c=c+.5|0);var d=a[2];d!=(d|0)&&(d=d+.5|0);a="rgba("+b+","+c+","+d+","+(void 0===a[3]?1:a[3])+")"}return a}
var Rc=function(){var a={},b=0;return function(c){var d;if(a.hasOwnProperty(c))d=a[c];else{if(1024<=b){d=0;for(var e in a)d++&3||(delete a[e],--b)}d=c;var f;Pc.exec(d)&&(e=document.createElement("div"),e.style.color=d,document.body.appendChild(e),d=getComputedStyle(e).color,document.body.removeChild(e));if(Oc.exec(d)){f=d.length-1;qa(3==f||6==f,54);var g=3==f?1:2;f=parseInt(d.substr(1+0*g,g),16);e=parseInt(d.substr(1+1*g,g),16);d=parseInt(d.substr(1+2*g,g),16);1==g&&(f=(f<<4)+f,e=(e<<4)+e,d=(d<<4)+
d);f=[f,e,d,1]}else d.indexOf("rgba(")?d.indexOf("rgb(")?qa(!1,14):(d=d.slice(4,-1).split(",").map(Number),d.push(1),f=Uc(d)):(d=d.slice(5,-1).split(",").map(Number),f=Uc(d));d=f;a[c]=d;++b}return d}}();function Uc(a){var b=[];b[0]=wa(a[0]+.5|0,0,255);b[1]=wa(a[1]+.5|0,0,255);b[2]=wa(a[2]+.5|0,0,255);b[3]=wa(a[3],0,1);return b};function Vc(a){return"string"===typeof a||a instanceof CanvasPattern||a instanceof CanvasGradient?a:Sc(a)};function Wc(a,b,c){this.center=a;this.resolution=b;this.rotation=c};function Xc(a,b){var c=document.createElement("CANVAS");a&&(c.width=a);b&&(c.height=b);return c.getContext("2d")}function Yc(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function Zc(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function ad(a){Gc.call(this);this.element=a.element?a.element:null;this.a=this.S=null;this.v=[];this.render=a.render?a.render:na;a.target&&this.i(a.target)}u(ad,Gc);ad.prototype.ra=function(){Zc(this.element);Gc.prototype.ra.call(this)};ad.prototype.g=function(){return this.a};
ad.prototype.setMap=function(a){this.a&&Zc(this.element);for(var b=0,c=this.v.length;b<c;++b)rc(this.v[b]);this.v.length=0;if(this.a=a)(this.S?this.S:a.u).appendChild(this.element),this.render!==na&&this.v.push(B(a,"postrender",this.render,this)),a.render()};ad.prototype.i=function(a){this.S="string"===typeof a?document.getElementById(a):a};function bd(a){a=a?a:{};this.R=document.createElement("UL");this.u=document.createElement("LI");this.R.appendChild(this.u);this.u.style.display="none";this.c=void 0!==a.collapsed?a.collapsed:!0;this.j=void 0!==a.collapsible?a.collapsible:!0;this.j||(this.c=!1);var b=void 0!==a.className?a.className:"ol-attribution",c=void 0!==a.tipLabel?a.tipLabel:"Attributions",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00bb";"string"===typeof d?(this.A=document.createElement("span"),this.A.textContent=d):this.A=
d;d=void 0!==a.label?a.label:"i";"string"===typeof d?(this.C=document.createElement("span"),this.C.textContent=d):this.C=d;var e=this.j&&!this.c?this.A:this.C,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);B(d,"click",this.ym,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.c&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible");c.appendChild(this.R);c.appendChild(d);ad.call(this,{element:c,render:a.render?
a.render:cd,target:a.target});this.G=!0;this.o={};this.l={};this.Y={}}u(bd,ad);
function cd(a){if(a=a.frameState){var b,c,d,e,f,g,h,l,m,p,n,q=a.layerStatesArray,r=pb({},a.attributions),v={},x={},y=a.viewState.projection;c=0;for(b=q.length;c<b;c++)if(g=q[c].layer.la())if(p=w(g).toString(),m=g.l)for(d=0,e=m.length;d<e;d++)if(h=m[d],l=w(h).toString(),!(l in r)){if(f=a.usedTiles[p]){var z=g.Ib(y);a:{n=void 0;var A,V,Pa=h,ra=z,La=y;if(Pa.a){for(n in f)if(n in Pa.a){var z=f[n],C;V=0;for(A=Pa.a[n].length;V<A;++V){C=Pa.a[n][V];if(va(C,z)){n=!0;break a}var Ma=cc(ra,kc(La),parseInt(n,
10)),xb=Ma.ba-Ma.da+1;if(z.da<Ma.da||z.ba>Ma.ba)if(va(C,new sa(Ca(z.da,xb),Ca(z.ba,xb),z.fa,z.ja))||z.ba-z.da+1>xb&&va(C,Ma)){n=!0;break a}}}n=!1}else n=!0}}else n=!1;n?(l in v&&delete v[l],n=h.b,n in x||(x[n]=!0,r[l]=h)):v[l]=h}b=[r,v];c=b[0];b=b[1];for(var Z in this.o)Z in c?(this.l[Z]||(this.o[Z].style.display="",this.l[Z]=!0),delete c[Z]):Z in b?(this.l[Z]&&(this.o[Z].style.display="none",delete this.l[Z]),delete b[Z]):(Zc(this.o[Z]),delete this.o[Z],delete this.l[Z]);for(Z in c)d=document.createElement("LI"),
d.innerHTML=c[Z].b,this.R.appendChild(d),this.o[Z]=d,this.l[Z]=!0;for(Z in b)d=document.createElement("LI"),d.innerHTML=b[Z].b,d.style.display="none",this.R.appendChild(d),this.o[Z]=d;Z=!sb(this.l)||!sb(a.logos);this.G!=Z&&(this.element.style.display=Z?"":"none",this.G=Z);Z&&sb(this.l)?this.element.classList.add("ol-logo-only"):this.element.classList.remove("ol-logo-only");var Ra;a=a.logos;Z=this.Y;for(Ra in Z)Ra in a||(Zc(Z[Ra]),delete Z[Ra]);for(var Cb in a)b=a[Cb],b instanceof HTMLElement&&(this.u.appendChild(b),
Z[Cb]=b),Cb in Z||(Ra=new Image,Ra.src=Cb,""===b?c=Ra:(c=document.createElement("a"),c.href=b,c.appendChild(Ra)),this.u.appendChild(c),Z[Cb]=c);this.u.style.display=sb(a)?"none":""}else this.G&&(this.element.style.display="none",this.G=!1)}k=bd.prototype;k.ym=function(a){a.preventDefault();dd(this)};function dd(a){a.element.classList.toggle("ol-collapsed");a.c?Yc(a.A,a.C):Yc(a.C,a.A);a.c=!a.c}k.xm=function(){return this.j};
k.Am=function(a){this.j!==a&&(this.j=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.c&&dd(this))};k.zm=function(a){this.j&&this.c!==a&&dd(this)};k.wm=function(){return this.c};function ed(a){return Math.pow(a,3)}function fd(a){return 1-ed(1-a)}function gd(a){return 3*a*a-2*a*a*a}function hd(a){return a};function id(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-rotate",c=void 0!==a.label?a.label:"\u21e7";this.c=null;"string"===typeof c?(this.c=document.createElement("span"),this.c.className="ol-compass",this.c.textContent=c):(this.c=c,this.c.classList.add("ol-compass"));var d=a.tipLabel?a.tipLabel:"Reset rotation",c=document.createElement("button");c.className=b+"-reset";c.setAttribute("type","button");c.title=d;c.appendChild(this.c);B(c,"click",id.prototype.A,this);d=document.createElement("div");
d.className=b+" ol-unselectable ol-control";d.appendChild(c);b=a.render?a.render:jd;this.j=a.resetNorth?a.resetNorth:void 0;ad.call(this,{element:d,render:b,target:a.target});this.o=void 0!==a.duration?a.duration:250;this.l=void 0!==a.autoHide?a.autoHide:!0;this.u=void 0;this.l&&this.element.classList.add("ol-hidden")}u(id,ad);
id.prototype.A=function(a){a.preventDefault();if(this.j)this.j();else if(a=this.a.$()){var b=a.Va();void 0!==b&&(0<this.o?(b%=2*Math.PI,a.animate({rotation:0,duration:this.o,easing:fd})):a.He(0))}};
function jd(a){if(a=a.frameState){a=a.viewState.rotation;if(a!=this.u){var b="rotate("+a+"rad)";if(this.l){var c=this.element.classList.contains("ol-hidden");c||a?c&&a&&this.element.classList.remove("ol-hidden"):this.element.classList.add("ol-hidden")}this.c.style.msTransform=b;this.c.style.webkitTransform=b;this.c.style.transform=b}this.u=a}};function kd(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-zoom",c=void 0!==a.delta?a.delta:1,d=void 0!==a.zoomInLabel?a.zoomInLabel:"+",e=void 0!==a.zoomOutLabel?a.zoomOutLabel:"\u2212",f=void 0!==a.zoomInTipLabel?a.zoomInTipLabel:"Zoom in",g=void 0!==a.zoomOutTipLabel?a.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=b+"-in";h.setAttribute("type","button");h.title=f;h.appendChild("string"===typeof d?document.createTextNode(d):d);B(h,"click",kd.prototype.l.bind(this,
c));d=document.createElement("button");d.className=b+"-out";d.setAttribute("type","button");d.title=g;d.appendChild("string"===typeof e?document.createTextNode(e):e);B(d,"click",kd.prototype.l.bind(this,-c));c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(h);c.appendChild(d);ad.call(this,{element:c,target:a.target});this.c=void 0!==a.duration?a.duration:250}u(kd,ad);
kd.prototype.l=function(a,b){b.preventDefault();var c=this.a.$();if(c){var d=c.Ua();d&&(d=c.constrainResolution(d,a),0<this.c?(0<ld(c)[0]&&md(c),c.animate({resolution:d,duration:this.c,easing:fd})):c.Xc(d))}};function nd(a){a=a?a:{};var b=new D;(void 0!==a.zoom?a.zoom:1)&&b.push(new kd(a.zoomOptions));(void 0!==a.rotate?a.rotate:1)&&b.push(new id(a.rotateOptions));(void 0!==a.attribution?a.attribution:1)&&b.push(new bd(a.attributionOptions));return b};function od(a){a=a?a:{};this.c=void 0!==a.className?a.className:"ol-full-screen";var b=void 0!==a.label?a.label:"\u2922";this.j="string"===typeof b?document.createTextNode(b):b;b=void 0!==a.labelActive?a.labelActive:"\u00d7";this.o="string"===typeof b?document.createTextNode(b):b;var c=a.tipLabel?a.tipLabel:"Toggle full-screen",b=document.createElement("button");b.className=this.c+"-"+pd();b.setAttribute("type","button");b.title=c;b.appendChild(this.j);B(b,"click",this.C,this);c=document.createElement("div");
c.className=this.c+" ol-unselectable ol-control "+(qd()?"":"ol-unsupported");c.appendChild(b);ad.call(this,{element:c,target:a.target});this.A=void 0!==a.keys?a.keys:!1;this.l=a.source}u(od,ad);
od.prototype.C=function(a){a.preventDefault();qd()&&(a=this.a)&&(pd()?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(a=this.l?"string"===typeof this.l?document.getElementById(this.l):this.l:a.Kc(),this.A?a.mozRequestFullScreenWithKeys?a.mozRequestFullScreenWithKeys():a.webkitRequestFullscreen?a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):
rd(a):rd(a)))};od.prototype.u=function(){var a=this.element.firstElementChild,b=this.a;pd()?(a.className=this.c+"-true",Yc(this.o,this.j)):(a.className=this.c+"-false",Yc(this.j,this.o));b&&b.xd()};od.prototype.setMap=function(a){ad.prototype.setMap.call(this,a);a&&this.v.push(B(document,sd(),this.u,this))};
function qd(){var a=document.body;return!!(a.webkitRequestFullscreen||a.mozRequestFullScreen&&document.mozFullScreenEnabled||a.msRequestFullscreen&&document.msFullscreenEnabled||a.requestFullscreen&&document.fullscreenEnabled)}function pd(){return!!(document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement)}
function rd(a){a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}var sd=function(){var a;return function(){if(!a){var b=document.body;b.webkitRequestFullscreen?a="webkitfullscreenchange":b.mozRequestFullScreen?a="mozfullscreenchange":b.msRequestFullscreen?a="MSFullscreenChange":b.requestFullscreen&&(a="fullscreenchange")}return a}}();function td(a){a=a?a:{};var b=document.createElement("DIV");b.className=void 0!==a.className?a.className:"ol-mouse-position";ad.call(this,{element:b,render:a.render?a.render:ud,target:a.target});B(this,Ic(vd),this.Bm,this);a.coordinateFormat&&this.Fi(a.coordinateFormat);a.projection&&this.Mh(Gb(a.projection));this.u=void 0!==a.undefinedHTML?a.undefinedHTML:"";this.o=b.innerHTML;this.j=this.l=this.c=null}u(td,ad);
function ud(a){a=a.frameState;a?this.c!=a.viewState.projection&&(this.c=a.viewState.projection,this.l=null):this.c=null;wd(this,this.j)}k=td.prototype;k.Bm=function(){this.l=null};k.ih=function(){return this.get(xd)};k.Lh=function(){return this.get(vd)};k.rl=function(a){this.j=this.a.te(a);wd(this,this.j)};k.sl=function(){wd(this,null);this.j=null};k.setMap=function(a){ad.prototype.setMap.call(this,a);a&&(a=a.c,this.v.push(B(a,"mousemove",this.rl,this),B(a,"mouseout",this.sl,this)))};
k.Fi=function(a){this.set(xd,a)};k.Mh=function(a){this.set(vd,a)};function wd(a,b){var c=a.u;if(b&&a.c){if(!a.l){var d=a.Lh();a.l=d?Fb(a.c,d):Vb}if(d=a.a.Za(b))a.l(d,d),c=(c=a.ih())?c(d):d.toString()}a.o&&c==a.o||(a.element.innerHTML=c,a.o=c)}var vd="projection",xd="coordinateFormat";function yd(a,b,c){Bc.call(this,a);this.map=b;this.frameState=void 0!==c?c:null}u(yd,Bc);function zd(a,b,c,d,e){yd.call(this,a,b,e);this.originalEvent=c;this.pixel=b.te(c);this.coordinate=b.Za(this.pixel);this.dragging=void 0!==d?d:!1}u(zd,yd);zd.prototype.preventDefault=function(){yd.prototype.preventDefault.call(this);this.originalEvent.preventDefault()};zd.prototype.stopPropagation=function(){yd.prototype.stopPropagation.call(this);this.originalEvent.stopPropagation()};var Ad={Xp:"singleclick",Mp:"click",Np:"dblclick",Qp:"pointerdrag",Tp:"pointermove",Pp:"pointerdown",Wp:"pointerup",Vp:"pointerover",Up:"pointerout",Rp:"pointerenter",Sp:"pointerleave",Op:"pointercancel"};function Bd(a,b,c,d,e){zd.call(this,a,b,c.b,d,e);this.b=c}u(Bd,zd);var Cd=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function Dd(a,b){var c,d,e=Cd.length;for(d=0;d<e;++d)try{if(c=a.getContext(Cd[d],b))return c}catch(f){}return null};var Ed,Fd="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"",Gd=-1!==Fd.indexOf("firefox"),Hd=-1!==Fd.indexOf("safari")&&-1==Fd.indexOf("chrom"),Id=-1!==Fd.indexOf("webkit")&&-1==Fd.indexOf("edge"),Jd=-1!==Fd.indexOf("macintosh"),Kd=window.devicePixelRatio||1,Ld=!1,Md=function(){if(!("HTMLCanvasElement"in window))return!1;try{var a=document.createElement("CANVAS").getContext("2d");return a?(void 0!==a.setLineDash&&(Ld=!0),!0):!1}catch(b){return!1}}(),Nd="DeviceOrientationEvent"in
window,Od="geolocation"in navigator,Pd="ontouchstart"in window,Qd="PointerEvent"in window,Rd=!!navigator.msPointerEnabled,Sd=!1,Td,Ud=[];if("WebGLRenderingContext"in window)try{var Vd=Dd(document.createElement("CANVAS"),{failIfMajorPerformanceCaveat:!0});Vd&&(Sd=!0,Td=Vd.getParameter(Vd.MAX_TEXTURE_SIZE),Ud=Vd.getSupportedExtensions())}catch(a){}Ed=Sd;ca=Ud;ba=Td;function Wd(a,b){this.b=a;this.i=b};function Xd(a){Wd.call(this,a,{mousedown:this.Ml,mousemove:this.Nl,mouseup:this.Ql,mouseover:this.Pl,mouseout:this.Ol});this.a=a.f;this.f=[]}u(Xd,Wd);function Yd(a,b){for(var c=a.f,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var l=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=l)return!0}return!1}function Zd(a){var b=ae(a,a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.isPrimary=!0;b.pointerType="mouse";return b}k=Xd.prototype;
k.Ml=function(a){if(!Yd(this,a)){(1).toString()in this.a&&this.cancel(a);var b=Zd(a);this.a[(1).toString()]=a;be(this.b,"pointerdown",b,a)}};k.Nl=function(a){if(!Yd(this,a)){var b=Zd(a);be(this.b,"pointermove",b,a)}};k.Ql=function(a){if(!Yd(this,a)){var b=this.a[(1).toString()];b&&b.button===a.button&&(b=Zd(a),be(this.b,"pointerup",b,a),delete this.a[(1).toString()])}};k.Pl=function(a){if(!Yd(this,a)){var b=Zd(a);ce(this.b,b,a)}};k.Ol=function(a){if(!Yd(this,a)){var b=Zd(a);de(this.b,b,a)}};
k.cancel=function(a){var b=Zd(a);this.b.cancel(b,a);delete this.a[(1).toString()]};function ee(a){Wd.call(this,a,{MSPointerDown:this.Vl,MSPointerMove:this.Wl,MSPointerUp:this.Zl,MSPointerOut:this.Xl,MSPointerOver:this.Yl,MSPointerCancel:this.Ul,MSGotPointerCapture:this.Sl,MSLostPointerCapture:this.Tl});this.a=a.f;this.f=["","unavailable","touch","pen","mouse"]}u(ee,Wd);function fe(a,b){var c=b;"number"===typeof b.pointerType&&(c=ae(b,b),c.pointerType=a.f[b.pointerType]);return c}k=ee.prototype;
k.Vl=function(a){this.a[a.pointerId.toString()]=a;var b=fe(this,a);be(this.b,"pointerdown",b,a)};k.Wl=function(a){var b=fe(this,a);be(this.b,"pointermove",b,a)};k.Zl=function(a){var b=fe(this,a);be(this.b,"pointerup",b,a);delete this.a[a.pointerId.toString()]};k.Xl=function(a){var b=fe(this,a);de(this.b,b,a)};k.Yl=function(a){var b=fe(this,a);ce(this.b,b,a)};k.Ul=function(a){var b=fe(this,a);this.b.cancel(b,a);delete this.a[a.pointerId.toString()]};
k.Tl=function(a){this.b.b(new ge("lostpointercapture",a,a))};k.Sl=function(a){this.b.b(new ge("gotpointercapture",a,a))};function he(a){Wd.call(this,a,{pointerdown:this.xo,pointermove:this.yo,pointerup:this.Bo,pointerout:this.zo,pointerover:this.Ao,pointercancel:this.wo,gotpointercapture:this.al,lostpointercapture:this.Ll})}u(he,Wd);k=he.prototype;k.xo=function(a){ie(this.b,a)};k.yo=function(a){ie(this.b,a)};k.Bo=function(a){ie(this.b,a)};k.zo=function(a){ie(this.b,a)};k.Ao=function(a){ie(this.b,a)};k.wo=function(a){ie(this.b,a)};k.Ll=function(a){ie(this.b,a)};k.al=function(a){ie(this.b,a)};function ge(a,b,c){Bc.call(this,a);this.b=b;a=c?c:{};this.buttons=je(a);this.pressure=ke(a,this.buttons);this.bubbles="bubbles"in a?a.bubbles:!1;this.cancelable="cancelable"in a?a.cancelable:!1;this.view="view"in a?a.view:null;this.detail="detail"in a?a.detail:null;this.screenX="screenX"in a?a.screenX:0;this.screenY="screenY"in a?a.screenY:0;this.clientX="clientX"in a?a.clientX:0;this.clientY="clientY"in a?a.clientY:0;this.button="button"in a?a.button:0;this.relatedTarget="relatedTarget"in a?a.relatedTarget:
null;this.pointerId="pointerId"in a?a.pointerId:0;this.width="width"in a?a.width:0;this.height="height"in a?a.height:0;this.pointerType="pointerType"in a?a.pointerType:"";this.isPrimary="isPrimary"in a?a.isPrimary:!1;b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}u(ge,Bc);function je(a){if(a.buttons||le)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}
function ke(a,b){var c=0;a.pressure?c=a.pressure:c=b?.5:0;return c}var le=!1;try{le=1===(new MouseEvent("click",{buttons:1})).buttons}catch(a){};function me(a,b){Wd.call(this,a,{touchstart:this.Dp,touchmove:this.Cp,touchend:this.Bp,touchcancel:this.Ap});this.a=a.f;this.l=b;this.f=void 0;this.g=0;this.c=void 0}u(me,Wd);k=me.prototype;k.Di=function(){this.g=0;this.c=void 0};
function ne(a,b,c){b=ae(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.g;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.pressure=c.webkitForce||c.force||.5;b.isPrimary=a.f===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function oe(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=ne(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
k.Dp=function(a){var b=a.touches,c=Object.keys(this.a),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.a[g];var l;if(!(l=1==g))a:{for(var m=b.length,p=0;p<m;p++)if(l=b[p],l.identifier===g-2){l=!0;break a}l=!1}l||e.push(h.out)}for(f=0;f<e.length;++f)this.zf(a,e[f])}b=a.changedTouches[0];c=Object.keys(this.a).length;if(!c||1===c&&(1).toString()in this.a)this.f=b.identifier,void 0!==this.c&&clearTimeout(this.c);pe(this,a);this.g++;oe(this,a,this.so)};
k.so=function(a,b){this.a[b.pointerId]={target:b.target,out:b,pi:b.target};var c=this.b;b.bubbles=!0;be(c,"pointerover",b,a);c=this.b;b.bubbles=!1;be(c,"pointerenter",b,a);be(this.b,"pointerdown",b,a)};k.Cp=function(a){a.preventDefault();oe(this,a,this.Rl)};
k.Rl=function(a,b){var c=this.a[b.pointerId];if(c){var d=c.out,e=c.pi;be(this.b,"pointermove",b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(de(this.b,d,a),ce(this.b,b,a)):(b.target=e,b.relatedTarget=null,this.zf(a,b)));c.out=b;c.pi=b.target}};k.Bp=function(a){pe(this,a);oe(this,a,this.Ep)};
k.Ep=function(a,b){be(this.b,"pointerup",b,a);this.b.out(b,a);qe(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.f=void 0,this.c=setTimeout(this.Di.bind(this),200))};k.Ap=function(a){oe(this,a,this.zf)};k.zf=function(a,b){this.b.cancel(b,a);this.b.out(b,a);qe(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.f=void 0,this.c=setTimeout(this.Di.bind(this),200))};
function pe(a,b){var c=a.l.f,d=b.changedTouches[0];if(a.f===d.identifier){var e=[d.clientX,d.clientY];c.push(e);setTimeout(function(){var a=c.indexOf(e);-1<a&&c.splice(a,1)},2500)}};function re(a){Dc.call(this);this.g=a;this.f={};this.i={};this.a=[];Qd?se(this,new he(this)):Rd?se(this,new ee(this)):(a=new Xd(this),se(this,a),Pd&&se(this,new me(this,a)));a=this.a.length;for(var b,c=0;c<a;c++)b=this.a[c],te(this,Object.keys(b.i))}u(re,Dc);function se(a,b){var c=Object.keys(b.i);c&&(c.forEach(function(a){var c=b.i[a];c&&(this.i[a]=c.bind(b))},a),a.a.push(b))}re.prototype.c=function(a){var b=this.i[a.type];b&&b(a)};
function te(a,b){b.forEach(function(a){B(this.g,a,this.c,this)},a)}function ve(a,b){b.forEach(function(a){xc(this.g,a,this.c,this)},a)}function ae(a,b){for(var c={},d,e=0,f=we.length;e<f;e++)d=we[e][0],c[d]=a[d]||b[d]||we[e][1];return c}function qe(a,b,c){b.bubbles=!1;be(a,"pointerleave",b,c)}re.prototype.out=function(a,b){a.bubbles=!0;be(this,"pointerout",a,b)};re.prototype.cancel=function(a,b){be(this,"pointercancel",a,b)};
function de(a,b,c){a.out(b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||qe(a,b,c)}function ce(a,b,c){b.bubbles=!0;be(a,"pointerover",b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||(b.bubbles=!1,be(a,"pointerenter",b,c))}function be(a,b,c,d){a.b(new ge(b,d,c))}function ie(a,b){a.b(new ge(b.type,b,b))}re.prototype.ra=function(){for(var a=this.a.length,b,c=0;c<a;c++)b=this.a[c],ve(this,Object.keys(b.i));Dc.prototype.ra.call(this)};
var we=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",!1],["type",""],["target",null],["currentTarget",null],["which",0]];function xe(a){Dc.call(this);this.c=a;this.l=0;this.j=!1;this.i=[];this.f=null;a=this.c.c;this.u=0;this.I={};this.g=new re(a);this.a=null;this.o=B(this.g,"pointerdown",this.ul,this);this.v=B(this.g,"pointermove",this.$o,this)}u(xe,Dc);function ye(a,b){var c=new Bd("click",a.c,b);a.b(c);a.l?(clearTimeout(a.l),a.l=0,c=new Bd("dblclick",a.c,b),a.b(c)):a.l=setTimeout(function(){this.l=0;var a=new Bd("singleclick",this.c,b);this.b(a)}.bind(a),250)}
function ze(a,b){"pointerup"==b.type||"pointercancel"==b.type?delete a.I[b.pointerId]:"pointerdown"==b.type&&(a.I[b.pointerId]=!0);a.u=Object.keys(a.I).length}k=xe.prototype;k.vh=function(a){ze(this,a);var b=new Bd("pointerup",this.c,a);this.b(b);this.j||a.button||ye(this,this.f);this.u||(this.i.forEach(rc),this.i.length=0,this.j=!1,this.f=null,Ac(this.a),this.a=null)};
k.ul=function(a){ze(this,a);var b=new Bd("pointerdown",this.c,a);this.b(b);this.f=a;this.i.length||(this.a=new re(document),this.i.push(B(this.a,"pointermove",this.om,this),B(this.a,"pointerup",this.vh,this),B(this.g,"pointercancel",this.vh,this)))};k.om=function(a){if(a.clientX!=this.f.clientX||a.clientY!=this.f.clientY){this.j=!0;var b=new Bd("pointerdrag",this.c,a,this.j);this.b(b)}a.preventDefault()};
k.$o=function(a){this.b(new Bd(a.type,this.c,a,!(!this.f||a.clientX==this.f.clientX&&a.clientY==this.f.clientY)))};k.ra=function(){this.v&&(rc(this.v),this.v=null);this.o&&(rc(this.o),this.o=null);this.i.forEach(rc);this.i.length=0;this.a&&(Ac(this.a),this.a=null);this.g&&(Ac(this.g),this.g=null);Dc.prototype.ra.call(this)};function Ae(a,b){this.o=a;this.c=b;this.b=[];this.f=[];this.a={}}Ae.prototype.clear=function(){this.b.length=0;this.f.length=0;qb(this.a)};function Be(a){var b=a.b,c=a.f,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Ce(a,0));b=a.c(d);delete a.a[b];return d}Ae.prototype.i=function(a){qa(!(this.c(a)in this.a),31);var b=this.o(a);return Infinity!=b?(this.b.push(a),this.f.push(b),this.a[this.c(a)]=!0,De(this,0,this.b.length-1),!0):!1};
function Ce(a,b){for(var c=a.b,d=a.f,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var l=2*b+1,m=2*b+2,l=m<e&&d[m]<d[l]?m:l;c[b]=c[l];d[b]=d[l];b=l}c[b]=f;d[b]=g;De(a,h,b)}function De(a,b,c){var d=a.b;a=a.f;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Ee(a){var b=a.o,c=a.b,d=a.f,e=0,f=c.length,g,h,l;for(h=0;h<f;++h)g=c[h],l=b(g),Infinity==l?delete a.a[a.c(g)]:(d[e]=l,c[e++]=g);c.length=e;d.length=e;for(b=(a.b.length>>1)-1;0<=b;b--)Ce(a,b)};function Fe(a,b){Ae.call(this,function(b){return a.apply(null,b)},function(a){return a[0].ib()});this.v=b;this.l=0;this.g={}}u(Fe,Ae);Fe.prototype.i=function(a){var b=Ae.prototype.i.call(this,a);b&&B(a[0],"change",this.j,this);return b};Fe.prototype.j=function(a){a=a.target;var b=a.V();if(2===b||3===b||4===b||5===b)xc(a,"change",this.j,this),a=a.ib(),a in this.g&&(delete this.g[a],--this.l),this.v()};
function Ge(a,b,c){for(var d=0,e,f;a.l<b&&d<c&&0<a.b.length;)e=Be(a)[0],f=e.ib(),0!==e.V()||f in a.g||(a.g[f]=!0,++a.l,++d,e.load())};function He(a){return function(b,c,d){if(void 0!==b)return b=fa(a,b,d),b=wa(b+c,0,a.length-1),c=Math.floor(b),b!=c&&c<a.length-1?a[c]/Math.pow(a[c]/a[c+1],b-c):a[c]}}function Ie(a,b,c){return function(d,e,f){if(void 0!==d)return d=Math.max(Math.floor(Math.log(b/d)/Math.log(a)+(-f/2+.5))+e,0),void 0!==c&&(d=Math.min(d,c)),b/Math.pow(a,d)}};function Ke(a){if(void 0!==a)return 0}function Le(a,b){if(void 0!==a)return a+b}function Me(a){var b=2*Math.PI/a;return function(a,d){if(void 0!==a)return a=Math.floor((a+d)/b+.5)*b}}function Ne(){var a=Ba(5);return function(b,c){if(void 0!==b)return Math.abs(b+c)<=a?0:b+c}};function Oe(a,b){var c=void 0!==b?a.toFixed(b):""+a,d=c.indexOf("."),d=-1===d?c.length:d;return 2<d?c:Array(3-d).join("0")+c}function Pe(a){a=(""+a).split(".");for(var b=["1","3"],c=0;c<Math.max(a.length,b.length);c++){var d=parseInt(a[c]||"0",10),e=parseInt(b[c]||"0",10);if(d>e)return 1;if(e>d)return-1}return 0};function Qe(a,b){a[0]+=b[0];a[1]+=b[1];return a}function Re(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],g=e[0],e=e[1],h=f[0],f=f[1],l=h-g,m=f-e,c=l||m?(l*(c-g)+m*(d-e))/(l*l+m*m||0):0;0>=c||(1<=c?(g=h,e=f):(g+=c*l,e+=c*m));return[g,e]}
function Se(a,b,c){a=Ca(a+180,360)-180;var d=Math.abs(3600*a);c=c||0;var e=Math.pow(10,c),f=Math.floor(d/3600),g=Math.floor((d-3600*f)/60),d=Math.ceil((d-3600*f-60*g)*e)/e;60<=d&&(d=0,g+=1);60<=g&&(g=0,f+=1);return f+"\u00b0 "+Oe(g)+"\u2032 "+Oe(d,c)+"\u2033 "+b.charAt(0>a?1:0)}function Te(a,b,c){return a?b.replace("{x}",a[0].toFixed(c)).replace("{y}",a[1].toFixed(c)):""}function Ue(a,b){for(var c=!0,d=a.length-1;0<=d;--d)if(a[d]!=b[d]){c=!1;break}return c}
function Ve(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e;return a}function We(a,b){a[0]*=b;a[1]*=b}function Xe(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function Ye(a,b){return Math.sqrt(Xe(a,b))}function Ze(a,b){return Xe(a,Re(a,b))}function $e(a,b){return Te(a,"{x}, {y}",b)};function af(){return!0}function bf(){return!1};function cf(){Gc.call(this);this.o=Ia();this.v=-1;this.i={};this.j=this.g=0}u(cf,Gc);k=cf.prototype;k.Ab=function(a,b){var c=b?b:[NaN,NaN];this.Gb(a[0],a[1],c,Infinity);return c};k.sb=function(a){return this.Oc(a[0],a[1])};k.Oc=bf;k.D=function(a){this.v!=this.f&&(this.o=this.ne(this.o),this.v=this.f);var b=this.o;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};k.Pb=function(a){return this.Qd(a*a)};k.tb=function(a,b){this.Dc(Ub(a,b));return this};function df(a,b,c,d,e,f){for(var g=f?f:[],h=0;b<c;b+=d){var l=a[b],m=a[b+1];g[h++]=e[0]*l+e[2]*m+e[4];g[h++]=e[1]*l+e[3]*m+e[5]}f&&g.length!=h&&(g.length=h);return g}function ef(a,b,c,d,e,f){var g=f?f:[],h=0,l,m;for(l=0;l<b;l+=c)for(g[h++]=a[l]+d,g[h++]=a[l+1]+e,m=l+2;m<l+c;++m)g[h++]=a[m];f&&g.length!=h&&(g.length=h);return g};function ff(){cf.call(this);this.ka="XY";this.a=2;this.B=null}u(ff,cf);function gf(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}k=ff.prototype;k.Oc=bf;k.ne=function(a){return Xa(this.B,0,this.B.length,this.a,a)};k.bc=function(){return this.B.slice(0,this.a)};k.ha=function(){return this.B};k.cc=function(){return this.B.slice(this.B.length-this.a)};k.dc=function(){return this.ka};
k.Qd=function(a){this.j!=this.f&&(qb(this.i),this.g=0,this.j=this.f);if(0>a||this.g&&a<=this.g)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=this.kd(a);if(c.ha().length<this.B.length)return this.i[b]=c;this.g=a;return this};k.kd=function(){return this};k.sa=function(){return this.a};function hf(a,b,c){a.a=gf(b);a.ka=b;a.B=c}
function jf(a,b,c,d){if(b)c=gf(b);else{for(b=0;b<d;++b)if(c.length)c=c[0];else{a.ka="XY";a.a=2;return}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.ka=b;a.a=c}k.Dc=function(a){this.B&&(a(this.B,this.B,this.a),this.s())};
k.rotate=function(a,b){var c=this.ha();if(c){for(var d=c.length,e=this.sa(),f=c?c:[],g=Math.cos(a),h=Math.sin(a),l=b[0],m=b[1],p=0,n=0;n<d;n+=e){var q=c[n]-l,r=c[n+1]-m;f[p++]=l+q*g-r*h;f[p++]=m+q*h+r*g;for(q=n+2;q<n+e;++q)f[p++]=c[q]}c&&f.length!=p&&(f.length=p);this.s()}};
k.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=jb(this.D()));if(c=this.ha()){b=c.length;for(var f=this.sa(),g=c?c:[],h=e[0],e=e[1],l=0,m=0;m<b;m+=f){var p=c[m]-h,n=c[m+1]-e;g[l++]=h+a*p;g[l++]=e+d*n;for(p=m+2;p<m+f;++p)g[l++]=c[p]}c&&g.length!=l&&(g.length=l);this.s()}};k.translate=function(a,b){var c=this.ha();c&&(ef(c,c.length,this.sa(),a,b,c),this.s())};function kf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(g*h-f*l),f=h,g=l;return e/2}function lf(a,b,c,d){var e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],e=e+kf(a,b,h,d);b=h}return e};function mf(a,b,c,d,e,f,g){var h=a[b],l=a[b+1],m=a[c]-h,p=a[c+1]-l;if(m||p)if(f=((e-h)*m+(f-l)*p)/(m*m+p*p),1<f)b=c;else if(0<f){for(e=0;e<d;++e)g[e]=Da(a[b+e],a[c+e],f);g.length=d;return}for(e=0;e<d;++e)g[e]=a[b+e];g.length=d}function nf(a,b,c,d,e){var f=a[b],g=a[b+1];for(b+=d;b<c;b+=d){var h=a[b],l=a[b+1],f=Aa(f,g,h,l);f>e&&(e=f);f=h;g=l}return e}function of(a,b,c,d,e){var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];e=nf(a,b,h,d,e);b=h}return e}
function pf(a,b,c,d,e,f,g,h,l,m,p){if(b==c)return m;var n;if(!e){n=Aa(g,h,a[b],a[b+1]);if(n<m){for(p=0;p<d;++p)l[p]=a[b+p];l.length=d;return n}return m}for(var q=p?p:[NaN,NaN],r=b+d;r<c;)if(mf(a,r-d,r,d,g,h,q),n=Aa(g,h,q[0],q[1]),n<m){m=n;for(p=0;p<d;++p)l[p]=q[p];l.length=d;r+=d}else r+=d*Math.max((Math.sqrt(n)-Math.sqrt(m))/e|0,1);if(f&&(mf(a,c-d,b,d,g,h,q),n=Aa(g,h,q[0],q[1]),n<m)){m=n;for(p=0;p<d;++p)l[p]=q[p];l.length=d}return m}
function qf(a,b,c,d,e,f,g,h,l,m,p){p=p?p:[NaN,NaN];var n,q;n=0;for(q=c.length;n<q;++n){var r=c[n];m=pf(a,b,r,d,e,f,g,h,l,m,p);b=r}return m};function rf(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function sf(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function tf(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=sf(a,b,c[g],d),e[f++]=b;e.length=f;return e};function uf(a,b,c,d,e){e=void 0!==e?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function vf(a,b,c,d,e){e=void 0!==e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var l=c[g];e[f++]=uf(a,b,l,d,e[f]);b=l}e.length=f;return e};function wf(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var l=Array(h);l[0]=1;l[h-1]=1;c=[b,c-d];for(var m=0,p;0<c.length;){var n=c.pop(),q=c.pop(),r=0,v=a[q],x=a[q+1],y=a[n],z=a[n+1];for(p=q+d;p<n;p+=d){var A=za(a[p],a[p+1],v,x,y,z);A>r&&(m=p,r=A)}r>e&&(l[(m-b)/d]=1,q+d<m&&c.push(q,m),m+d<n&&c.push(m,n))}for(p=0;p<h;++p)l[p]&&(f[g++]=a[b+p*d],f[g++]=a[b+p*d+1]);return g}
function xf(a,b,c,d,e,f,g,h){var l,m;l=0;for(m=c.length;l<m;++l){var p=c[l];a:{var n,q=a,r=p,v=d,x=e,y=f,z=g;if(b!=r){var A=x*Math.round(q[b]/x),V=x*Math.round(q[b+1]/x);b+=v;y[z++]=A;y[z++]=V;do if(n=x*Math.round(q[b]/x),g=x*Math.round(q[b+1]/x),b+=v,b==r){y[z++]=n;y[z++]=g;g=z;break a}while(n==A&&g==V);for(;b<r;){var Pa,ra;Pa=x*Math.round(q[b]/x);ra=x*Math.round(q[b+1]/x);b+=v;if(Pa!=n||ra!=g){var La=n-A,C=g-V,Ma=Pa-A,xb=ra-V;La*xb==C*Ma&&(0>La&&Ma<La||La==Ma||0<La&&Ma>La)&&(0>C&&xb<C||C==xb||0<
C&&xb>C)||(y[z++]=n,y[z++]=g,A=n,V=g);n=Pa;g=ra}}y[z++]=n;y[z++]=g}g=z}h.push(g);b=p}return g};function yf(a,b){ff.call(this);this.c=this.l=-1;this.pa(a,b)}u(yf,ff);k=yf.prototype;k.clone=function(){var a=new yf(null);zf(a,this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.c!=this.f&&(this.l=Math.sqrt(nf(this.B,0,this.B.length,this.a,0)),this.c=this.f);return pf(this.B,0,this.B.length,this.a,this.l,!0,a,b,c,d)};k.Km=function(){return kf(this.B,0,this.B.length,this.a)};k.X=function(){return uf(this.B,0,this.B.length,this.a)};
k.kd=function(a){var b=[];b.length=wf(this.B,0,this.B.length,this.a,a,b,0);a=new yf(null);zf(a,"XY",b);return a};k.T=function(){return"LinearRing"};k.Xa=function(){};k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):zf(this,"XY",null)};function zf(a,b,c){hf(a,b,c);a.s()};function E(a,b){ff.call(this);this.pa(a,b)}u(E,ff);k=E.prototype;k.clone=function(){var a=new E(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){var e=this.B;a=Aa(a,b,e[0],e[1]);if(a<d){d=this.a;for(b=0;b<d;++b)c[b]=e[b];c.length=d;return a}return d};k.X=function(){return this.B?this.B.slice():[]};k.ne=function(a){return Wa(this.B,a)};k.T=function(){return"Point"};k.Xa=function(a){return Sa(a,this.B[0],this.B[1])};
k.pa=function(a,b){a?(jf(this,b,a,0),this.B||(this.B=[]),this.B.length=rf(this.B,a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function Af(a,b,c,d,e){return!ab(e,function(e){return!Bf(a,b,c,d,e[0],e[1])})}function Bf(a,b,c,d,e,f){for(var g=0,h=a[c-d],l=a[c-d+1];b<c;b+=d){var m=a[b],p=a[b+1];l<=f?p>f&&0<(m-h)*(f-l)-(e-h)*(p-l)&&g++:p<=f&&0>(m-h)*(f-l)-(e-h)*(p-l)&&g--;h=m;l=p}return!!g}function Cf(a,b,c,d,e,f){if(!c.length||!Bf(a,b,c[0],d,e,f))return!1;var g;b=1;for(g=c.length;b<g;++b)if(Bf(a,c[b-1],c[b],d,e,f))return!1;return!0};function Df(a,b,c,d,e,f,g){var h,l,m,p,n,q=e[f+1],r=[],v=c[0];m=a[v-d];n=a[v-d+1];for(h=b;h<v;h+=d){p=a[h];l=a[h+1];if(q<=n&&l<=q||n<=q&&q<=l)m=(q-n)/(l-n)*(p-m)+m,r.push(m);m=p;n=l}v=NaN;n=-Infinity;r.sort(da);m=r[0];h=1;for(l=r.length;h<l;++h){p=r[h];var x=Math.abs(p-m);x>n&&(m=(m+p)/2,Cf(a,b,c,d,m,q)&&(v=m,n=x));m=p}isNaN(v)&&(v=e[f]);return g?(g.push(v,q),g):[v,q]};function Ef(a,b,c,d,e,f){for(var g=[a[b],a[b+1]],h=[],l;b+d<c;b+=d){h[0]=a[b+d];h[1]=a[b+d+1];if(l=e.call(f,g,h))return l;g[0]=h[0];g[1]=h[1]}return!1};function Ff(a,b,c,d,e){var f=Ya(Ia(),a,b,c,d);return mb(e,f)?Ta(e,f)||f[0]>=e[0]&&f[2]<=e[2]||f[1]>=e[1]&&f[3]<=e[3]?!0:Ef(a,b,c,d,function(a,b){var c=!1,d=Ua(e,a),f=Ua(e,b);if(1===d||1===f)c=!0;else{var g=e[0],h=e[1],r=e[2],v=e[3],x=b[0],y=b[1],z=(y-a[1])/(x-a[0]);f&2&&!(d&2)&&(c=x-(y-v)/z,c=c>=g&&c<=r);c||!(f&4)||d&4||(c=y-(x-r)*z,c=c>=h&&c<=v);c||!(f&8)||d&8||(c=x-(y-h)/z,c=c>=g&&c<=r);c||!(f&16)||d&16||(c=y-(x-g)*z,c=c>=h&&c<=v)}return c}):!1}
function Gf(a,b,c,d,e){var f=c[0];if(!(Ff(a,b,f,d,e)||Bf(a,b,f,d,e[0],e[1])||Bf(a,b,f,d,e[0],e[3])||Bf(a,b,f,d,e[2],e[1])||Bf(a,b,f,d,e[2],e[3])))return!1;if(1===c.length)return!0;b=1;for(f=c.length;b<f;++b)if(Af(a,c[b-1],c[b],d,e))return!1;return!0};function Hf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(h-f)*(l+g),f=h,g=l;return 0<e}function If(a,b,c,d){var e=0;d=void 0!==d?d:!1;var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],e=Hf(a,e,h,c);if(!f){if(d&&e||!d&&!e)return!1}else if(d&&!e||!d&&e)return!1;e=h}return!0}
function Jf(a,b,c,d,e){e=void 0!==e?e:!1;var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=Hf(a,b,h,d);if(f?e&&!l||!e&&l:e&&l||!e&&!l)for(var l=a,m=h,p=d;b<m-p;){var n;for(n=0;n<p;++n){var q=l[b+n];l[b+n]=l[m-p+n];l[m-p+n]=q}b+=p;m-=p}b=h}return b}function Kf(a,b,c,d){var e=0,f,g;f=0;for(g=b.length;f<g;++f)e=Jf(a,e,b[f],c,d);return e};function F(a,b){ff.call(this);this.c=[];this.u=-1;this.A=null;this.R=this.C=this.G=-1;this.l=null;this.pa(a,b)}u(F,ff);k=F.prototype;k.Vj=function(a){this.B?ga(this.B,a.ha()):this.B=a.ha().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new F(null);a.ca(this.ka,this.B.slice(),this.c.slice());return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.C!=this.f&&(this.G=Math.sqrt(of(this.B,0,this.c,this.a,0)),this.C=this.f);return qf(this.B,0,this.c,this.a,this.G,!0,a,b,c,d)};k.Oc=function(a,b){return Cf(this.fc(),0,this.c,this.a,a,b)};k.Nm=function(){return lf(this.fc(),0,this.c,this.a)};k.X=function(a){var b;void 0!==a?(b=this.fc().slice(),Jf(b,0,this.c,this.a,a)):b=this.B;return vf(b,0,this.c,this.a)};k.Rb=function(){return this.c};
function Lf(a){if(a.u!=a.f){var b=jb(a.D());a.A=Df(a.fc(),0,a.c,a.a,b,0);a.u=a.f}return a.A}k.yk=function(){return new E(Lf(this))};k.Ek=function(){return this.c.length};k.nh=function(a){if(0>a||this.c.length<=a)return null;var b=new yf(null);zf(b,this.ka,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};k.jd=function(){var a=this.ka,b=this.B,c=this.c,d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=new yf(null);zf(l,a,b.slice(e,h));d.push(l);e=h}return d};
k.fc=function(){if(this.R!=this.f){var a=this.B;If(a,this.c,this.a)?this.l=a:(this.l=a.slice(),this.l.length=Jf(this.l,0,this.c,this.a));this.R=this.f}return this.l};k.kd=function(a){var b=[],c=[];b.length=xf(this.B,0,this.c,this.a,Math.sqrt(a),b,0,c);a=new F(null);a.ca("XY",b,c);return a};k.T=function(){return"Polygon"};k.Xa=function(a){return Gf(this.fc(),0,this.c,this.a,a)};
k.pa=function(a,b){if(a){jf(this,b,a,2);this.B||(this.B=[]);var c=tf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){hf(this,a,b);this.c=c;this.s()};function Mf(a,b,c,d){var e=d?d:32;d=[];var f;for(f=0;f<e;++f)ga(d,a.offset(b,c,2*Math.PI*f/e));d.push(d[0],d[1]);a=new F(null);a.ca("XY",d,[d.length]);return a}
function Nf(a){var b=a[0],c=a[1],d=a[2];a=a[3];b=[b,c,b,a,d,a,d,c,b,c];c=new F(null);c.ca("XY",b,[b.length]);return c}function Of(a,b,c){var d=b?b:32,e=a.sa();b=a.ka;for(var f=new F(null,b),d=e*(d+1),e=Array(d),g=0;g<d;g++)e[g]=0;f.ca(b,e,[e.length]);Pf(f,a.Ba(),a.Vd(),c);return f}function Pf(a,b,c,d){var e=a.ha(),f=a.ka,g=a.sa(),h=a.Rb(),l=e.length/g-1;d=d?d:0;for(var m,p,n=0;n<=l;++n)p=n*g,m=d+2*Ca(n,l)*Math.PI/l,e[p]=b[0]+c*Math.cos(m),e[p+1]=b[1]+c*Math.sin(m);a.ca(f,e,h)};function Qf(a){Gc.call(this);a=a||{};this.l=[0,0];this.c=[];this.lf=this.lf.bind(this);var b={};b.center=void 0!==a.center?a.center:null;this.o=Qb(a.projection);var c,d,e,f=void 0!==a.minZoom?a.minZoom:0;c=void 0!==a.maxZoom?a.maxZoom:28;var g=void 0!==a.zoomFactor?a.zoomFactor:2;if(void 0!==a.resolutions)c=a.resolutions,d=c[0],e=c[c.length-1],c=He(c);else{d=Qb(a.projection);e=d.D();var h=(e?Math.max(hb(e),ib(e)):360*vb.degrees/d.sc())/256/Math.pow(2,0),l=h/Math.pow(2,28);d=a.maxResolution;void 0!==
d?f=0:d=h/Math.pow(g,f);e=a.minResolution;void 0===e&&(e=void 0!==a.maxZoom?void 0!==a.maxResolution?d/Math.pow(g,c):h/Math.pow(g,c):l);c=f+Math.floor(Math.log(d/e)/Math.log(g));e=d/Math.pow(g,c-f);c=Ie(g,d,c-f)}this.a=d;this.i=e;this.A=g;this.g=a.resolutions;this.j=f;(void 0!==a.enableRotation?a.enableRotation:1)?(f=a.constrainRotation,f=void 0===f||!0===f?Ne():!1===f?Le:"number"===typeof f?Me(f):Le):f=Ke;this.u=new Wc(void 0!==a.extent?oc(a.extent):pc,c,f);void 0!==a.resolution?b.resolution=a.resolution:
void 0!==a.zoom&&(b.resolution=this.constrainResolution(this.a,a.zoom-this.j));b.rotation=void 0!==a.rotation?a.rotation:0;this.H(b)}u(Qf,Gc);k=Qf.prototype;
k.animate=function(a){var b=Date.now(),c=this.Ba().slice(),d=this.Ua(),e=this.Va(),f=arguments.length,g;1<f&&"function"===typeof arguments[f-1]&&(g=arguments[f-1],--f);for(var h=[],l=0;l<f;++l){var m=arguments[l],p={start:b,complete:!1,anchor:m.anchor,duration:void 0!==m.duration?m.duration:1E3,easing:m.easing||gd};m.center&&(p.Bg=c,p.Dg=m.center,c=p.Dg);void 0!==m.zoom?(p.hf=d,p.jf=this.constrainResolution(this.a,m.zoom-this.j,0),d=p.jf):m.resolution&&(p.hf=d,p.jf=m.resolution,d=p.jf);void 0!==m.rotation&&
(p.Cg=e,p.Xi=m.rotation,e=p.Xi);p.fd=g;b+=p.duration;h.push(p)}this.c.push(h);Rf(this,0,1);this.lf()};function md(a){Rf(a,0,-ld(a)[0]);for(var b=0,c=a.c.length;b<c;++b){var d=a.c[b];d[0].fd&&d[0].fd(!1)}a.c.length=0}
k.lf=function(){void 0!==this.v&&(cancelAnimationFrame(this.v),this.v=void 0);if(0<ld(this)[0]){for(var a=Date.now(),b=!1,c=this.c.length-1;0<=c;--c){for(var d=this.c[c],e=!0,f=0,g=d.length;f<g;++f){var h=d[f];if(!h.complete){b=a-h.start;b=0<h.duration?b/h.duration:1;1<=b?(h.complete=!0,b=1):e=!1;b=h.easing(b);if(h.Bg){var l=h.Bg[0],m=h.Bg[1];this.set("center",[l+b*(h.Dg[0]-l),m+b*(h.Dg[1]-m)])}h.hf&&(l=h.hf+b*(h.jf-h.hf),h.anchor&&this.set("center",Sf(this,l,h.anchor)),this.set("resolution",l));
void 0!==h.Cg&&(b=h.Cg+b*(h.Xi-h.Cg),h.anchor&&this.set("center",Tf(this,b,h.anchor)),this.set("rotation",b));b=!0;if(!h.complete)break}}e&&(this.c[c]=null,Rf(this,0,-1),(d=d[0].fd)&&d(!0))}this.c=this.c.filter(Boolean);b&&void 0===this.v&&(this.v=requestAnimationFrame(this.lf))}};function Tf(a,b,c){var d,e=a.Ba();void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],Ve(d,b-a.Va()),Qe(d,c));return d}
function Sf(a,b,c){var d,e=a.Ba();a=a.Ua();void 0!==e&&void 0!==a&&(d=[c[0]-b*(c[0]-e[0])/a,c[1]-b*(c[1]-e[1])/a]);return d}function Uf(a){var b=[100,100];a='.ol-viewport[data-view="'+w(a)+'"]';if(a=document.querySelector(a))a=getComputedStyle(a),b[0]=parseInt(a.width,10),b[1]=parseInt(a.height,10);return b}k.Ec=function(a){return this.u.center(a)};k.constrainResolution=function(a,b,c){return this.u.resolution(a,b||0,c||0)};k.constrainRotation=function(a,b){return this.u.rotation(a,b||0)};k.Ba=function(){return this.get("center")};
function ld(a,b){return void 0!==b?(b[0]=a.l[0],b[1]=a.l[1],b):a.l.slice()}k.ed=function(a){a=a||Uf(this);var b=this.Ba();qa(b,1);var c=this.Ua();qa(void 0!==c,2);var d=this.Va();qa(void 0!==d,3);return kb(b,c,d,a)};k.sm=function(){return this.a};k.tm=function(){return this.i};k.um=function(){return this.o};k.Ua=function(){return this.get("resolution")};k.vm=function(){return this.g};function Vf(a,b){return Math.max(hb(a)/b[0],ib(a)/b[1])}
function Wf(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return b/Math.pow(2,a*c)}}k.Va=function(){return this.get("rotation")};function Xf(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return Math.log(b/a)/Math.log(2)/c}}k.V=function(){var a=this.Ba(),b=this.o,c=this.Ua(),d=this.Va();return{center:a.slice(),projection:void 0!==b?b:null,resolution:c,rotation:d}};
k.$k=function(){var a,b=this.Ua();if(void 0!==b&&b>=this.i&&b<=this.a){a=this.j||0;var c,d;if(this.g){d=fa(this.g,b,1);a+=d;if(d==this.g.length-1)return a;c=this.g[d];d=c/this.g[d+1]}else c=this.a,d=this.A;a+=Math.log(c/b)/Math.log(d)}return a};
k.Ff=function(a,b){var c=b||{},d=c.size;d||(d=Uf(this));var e;a instanceof ff?"Circle"===a.T()?(a=a.D(),e=Nf(a),e.rotate(this.Va(),jb(a))):e=a:(qa(Array.isArray(a),24),qa(!gb(a),25),e=Nf(a));var f=c.padding?c.padding:[0,0,0,0],g=void 0!==c.constrainResolution?c.constrainResolution:!0,h=void 0!==c.nearest?c.nearest:!1,l;void 0!==c.minResolution?l=c.minResolution:void 0!==c.maxZoom?l=this.constrainResolution(this.a,c.maxZoom-this.j,0):l=0;var m=e.ha(),p=this.Va(),n=Math.cos(-p),p=Math.sin(-p),q=Infinity,
r=Infinity,v=-Infinity,x=-Infinity;e=e.sa();for(var y=0,z=m.length;y<z;y+=e)var A=m[y]*n-m[y+1]*p,V=m[y]*p+m[y+1]*n,q=Math.min(q,A),r=Math.min(r,V),v=Math.max(v,A),x=Math.max(x,V);d=Vf([q,r,v,x],[d[0]-f[1]-f[3],d[1]-f[0]-f[2]]);d=isNaN(d)?l:Math.max(d,l);g&&(g=this.constrainResolution(d,0,0),!h&&g<d&&(g=this.constrainResolution(g,-1,0)),d=g);p=-p;h=(q+v)/2+(f[1]-f[3])/2*d;f=(r+x)/2+(f[0]-f[2])/2*d;n=[h*n-f*p,f*n+h*p];void 0!==c.duration?this.animate({resolution:d,center:n,duration:c.duration,easing:c.easing}):
(this.Xc(d),this.wb(n))};k.$j=function(a,b,c){var d=this.Va(),e=Math.cos(-d),d=Math.sin(-d),f=a[0]*e-a[1]*d;a=a[1]*e+a[0]*d;var g=this.Ua(),f=f+(b[0]/2-c[0])*g;a+=(c[1]-b[1]/2)*g;d=-d;this.wb([f*e-a*d,a*e+f*d])};function Yf(a){return!!a.Ba()&&void 0!==a.Ua()}k.rotate=function(a,b){if(void 0!==b){var c=Tf(this,a,b);this.wb(c)}this.He(a)};k.wb=function(a){this.set("center",a);0<ld(this)[0]&&md(this)};function Rf(a,b,c){a.l[b]+=c;a.s()}k.Xc=function(a){this.set("resolution",a);0<ld(this)[0]&&md(this)};
k.He=function(a){this.set("rotation",a);0<ld(this)[0]&&md(this)};k.yp=function(a){a=this.constrainResolution(this.a,a-this.j,0);this.Xc(a)};function Zf(a,b,c){this.i=a;this.c=b;this.g=c;this.b=[];this.a=this.f=0};function $f(a){Gc.call(this);this.v=null;this.Ia(!0);this.handleEvent=a.handleEvent}u($f,Gc);$f.prototype.c=function(){return this.get("active")};$f.prototype.i=function(){return this.v};$f.prototype.Ia=function(a){this.set("active",a)};$f.prototype.setMap=function(a){this.v=a};function ag(a,b,c,d){if(void 0!==b){var e=a.Va(),f=a.Ba();void 0!==e&&f&&0<d?a.animate({rotation:b,anchor:c,duration:d,easing:fd}):a.rotate(b,c)}}
function bg(a,b,c,d){var e=a.Ua();b=a.constrainResolution(e,b,0);if(c&&void 0!==b&&b!==e){var f=a.Ba();c=Sf(a,b,c);c=a.Ec(c);c=[(b*f[0]-e*c[0])/(b-e),(b*f[1]-e*c[1])/(b-e)]}cg(a,b,c,d)}function cg(a,b,c,d){if(b){var e=a.Ua(),f=a.Ba();void 0!==e&&f&&b!==e&&d?a.animate({resolution:b,anchor:c,duration:d,easing:fd}):(c&&(c=Sf(a,b,c),a.wb(c)),a.Xc(b))}};function dg(a){a=a?a:{};this.a=a.delta?a.delta:1;$f.call(this,{handleEvent:eg});this.g=void 0!==a.duration?a.duration:250}u(dg,$f);function eg(a){var b=!1,c=a.originalEvent;if("dblclick"==a.type){var b=a.coordinate,c=c.shiftKey?-this.a:this.a,d=a.map.$();bg(d,c,b,this.g);a.preventDefault();b=!0}return!b};function fg(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}function gg(a){a=a.originalEvent;return!a.button&&!(Id&&Jd&&a.ctrlKey)}function hg(a){return"pointermove"==a.type}function ig(a){return"singleclick"==a.type}function jg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey}function kg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}
function lg(a){a=a.originalEvent.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function mg(a){qa(a.b,56);return"mouse"==a.b.pointerType}function ng(a){a=a.b;return a.isPrimary&&0===a.button};function og(a){a=a?a:{};$f.call(this,{handleEvent:a.handleEvent?a.handleEvent:pg});this.sf=a.handleDownEvent?a.handleDownEvent:bf;this.pf=a.handleDragEvent?a.handleDragEvent:na;this.xf=a.handleMoveEvent?a.handleMoveEvent:na;this.yf=a.handleUpEvent?a.handleUpEvent:bf;this.A=!1;this.Y={};this.l=[]}u(og,$f);function qg(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}
function pg(a){if(!(a instanceof Bd))return!0;var b=!1,c=a.type;if("pointerdown"===c||"pointerdrag"===c||"pointerup"===c)c=a.b,"pointerup"==a.type?delete this.Y[c.pointerId]:"pointerdown"==a.type?this.Y[c.pointerId]=c:c.pointerId in this.Y&&(this.Y[c.pointerId]=c),this.l=rb(this.Y);this.A?"pointerdrag"==a.type?this.pf(a):"pointerup"==a.type&&(this.A=this.yf(a)&&0<this.l.length):"pointerdown"==a.type?(this.A=a=this.sf(a),b=this.Zc(a)):"pointermove"==a.type&&this.xf(a);return!b}og.prototype.Zc=function(a){return a};function rg(a){og.call(this,{handleDownEvent:sg,handleDragEvent:tg,handleUpEvent:ug});a=a?a:{};this.a=a.kinetic;this.g=null;this.o=a.condition?a.condition:jg;this.j=!1}u(rg,og);function tg(a){var b=qg(this.l);this.a&&this.a.b.push(b[0],b[1],Date.now());if(this.g){var c=this.g[0]-b[0],d=b[1]-this.g[1];a=a.map.$();var e=a.V(),c=[c,d];We(c,e.resolution);Ve(c,e.rotation);Qe(c,e.center);c=a.Ec(c);a.wb(c)}this.g=b}
function ug(a){var b=a.map;a=b.$();if(this.l.length)return this.a&&(a=this.a,a.b.length=0,a.f=0,a.a=0),this.g=null,!0;var c;if(c=!this.j&&this.a)if(c=this.a,6>c.b.length)c=!1;else{var d=Date.now()-c.g,e=c.b.length-3;if(c.b[e+2]<d)c=!1;else{for(var f=e-3;0<f&&c.b[f+2]>d;)f-=3;var d=c.b[e+2]-c.b[f+2],g=c.b[e]-c.b[f],e=c.b[e+1]-c.b[f+1];c.f=Math.atan2(e,g);c.a=Math.sqrt(g*g+e*e)/d;c=c.a>c.c}}c&&(c=this.a,c=(c.c-c.a)/c.i,e=this.a.f,f=a.Ba(),f=b.Ka(f),b=b.Za([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),a.animate({center:a.Ec(b),
duration:500,easing:fd}));Rf(a,1,-1);return!1}function sg(a){if(0<this.l.length&&this.o(a)){var b=a.map.$();this.g=null;this.A||Rf(b,1,1);ld(b)[0]&&b.wb(a.frameState.viewState.center);this.a&&(a=this.a,a.b.length=0,a.f=0,a.a=0);this.j=1<this.l.length;return!0}return!1}rg.prototype.Zc=bf;function vg(a){a=a?a:{};og.call(this,{handleDownEvent:wg,handleDragEvent:xg,handleUpEvent:yg});this.g=a.condition?a.condition:fg;this.a=void 0;this.j=void 0!==a.duration?a.duration:250}u(vg,og);function xg(a){if(mg(a)){var b=a.map,c=b.Mb();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(void 0!==this.a){a=c-this.a;var b=b.$(),d=b.Va();ag(b,d-a)}this.a=c}}function yg(a){if(!mg(a))return!0;a=a.map.$();Rf(a,1,-1);var b=a.Va(),c=this.j,b=a.constrainRotation(b,0);ag(a,b,void 0,c);return!1}
function wg(a){return mg(a)&&gg(a)&&this.g(a)?(Rf(a.map.$(),1,1),this.a=void 0,!0):!1}vg.prototype.Zc=bf;function zg(a){this.Gc=null;this.a=document.createElement("div");this.a.style.position="absolute";this.a.className="ol-box "+a;this.f=this.c=this.b=null}u(zg,zc);zg.prototype.ra=function(){this.setMap(null)};function Ag(a){var b=a.c,c=a.f;a=a.a.style;a.left=Math.min(b[0],c[0])+"px";a.top=Math.min(b[1],c[1])+"px";a.width=Math.abs(c[0]-b[0])+"px";a.height=Math.abs(c[1]-b[1])+"px"}
zg.prototype.setMap=function(a){if(this.b){this.b.A.removeChild(this.a);var b=this.a.style;b.left=b.top=b.width=b.height="inherit"}(this.b=a)&&this.b.A.appendChild(this.a)};function Bg(a){var b=a.c,c=a.f,b=[b,[b[0],c[1]],c,[c[0],b[1]]].map(a.b.Za,a.b);b[4]=b[0].slice();a.Gc?a.Gc.pa([b]):a.Gc=new F([b])}zg.prototype.U=function(){return this.Gc};function Cg(a){og.call(this,{handleDownEvent:Dg,handleDragEvent:Eg,handleUpEvent:Fg});a=a?a:{};this.a=new zg(a.className||"ol-dragbox");this.g=null;this.u=a.condition?a.condition:af;this.o=a.boxEndCondition?a.boxEndCondition:Gg}u(Cg,og);function Gg(a,b,c){a=c[0]-b[0];b=c[1]-b[1];return 64<=a*a+b*b}function Eg(a){if(mg(a)){var b=this.a,c=a.pixel;b.c=this.g;b.f=c;Bg(b);Ag(b);this.b(new Hg(Ig,a.coordinate,a))}}Cg.prototype.U=function(){return this.a.U()};Cg.prototype.j=na;
function Fg(a){if(!mg(a))return!0;this.a.setMap(null);this.o(a,this.g,a.pixel)&&(this.j(a),this.b(new Hg(Jg,a.coordinate,a)));return!1}function Dg(a){if(mg(a)&&gg(a)&&this.u(a)){this.g=a.pixel;this.a.setMap(a.map);var b=this.a,c=this.g;b.c=this.g;b.f=c;Bg(b);Ag(b);this.b(new Hg(Kg,a.coordinate,a));return!0}return!1}var Kg="boxstart",Ig="boxdrag",Jg="boxend";function Hg(a,b,c){Bc.call(this,a);this.coordinate=b;this.mapBrowserEvent=c}u(Hg,Bc);function Lg(a){a=a?a:{};var b=a.condition?a.condition:kg;this.C=void 0!==a.duration?a.duration:200;this.G=void 0!==a.out?a.out:!1;Cg.call(this,{condition:b,className:a.className||"ol-dragzoom"})}u(Lg,Cg);
Lg.prototype.j=function(){var a=this.v,b=a.$(),c=a.Mb(),d=this.U().D();if(this.G){var e=b.ed(c),d=[a.Ka(bb(d)),a.Ka(db(d))],a=Va(Infinity,Infinity,-Infinity,-Infinity,void 0),f,g;f=0;for(g=d.length;f<g;++f)Ja(a,d[f]);nb(e,1/Vf(a,c));d=e}c=b.constrainResolution(Vf(d,c));e=jb(d);e=b.Ec(e);b.animate({resolution:c,center:e,duration:this.C,easing:fd})};function Mg(a){$f.call(this,{handleEvent:Ng});a=a||{};this.a=function(a){return jg(a)&&lg(a)};this.g=a.condition?a.condition:this.a;this.l=void 0!==a.duration?a.duration:100;this.j=void 0!==a.pixelDelta?a.pixelDelta:128}u(Mg,$f);
function Ng(a){var b=!1;if("keydown"==a.type){var c=a.originalEvent.keyCode;if(this.g(a)&&(40==c||37==c||39==c||38==c)){var b=a.map.$(),d=b.Ua()*this.j,e=0,f=0;40==c?f=-d:37==c?e=-d:39==c?e=d:f=d;d=[e,f];Ve(d,b.Va());c=this.l;if(e=b.Ba())d=b.Ec([e[0]+d[0],e[1]+d[1]]),c?b.animate({duration:c,easing:hd,center:d}):b.wb(d);a.preventDefault();b=!0}}return!b};function Og(a){$f.call(this,{handleEvent:Pg});a=a?a:{};this.g=a.condition?a.condition:lg;this.a=a.delta?a.delta:1;this.l=void 0!==a.duration?a.duration:100}u(Og,$f);function Pg(a){var b=!1;if("keydown"==a.type||"keypress"==a.type){var c=a.originalEvent.charCode;!this.g(a)||43!=c&&45!=c||(b=43==c?this.a:-this.a,c=a.map.$(),bg(c,b,void 0,this.l),a.preventDefault(),b=!0)}return!b};function Qg(a){$f.call(this,{handleEvent:Rg});a=a||{};this.l=0;this.R=void 0!==a.duration?a.duration:250;this.Y=void 0!==a.timeout?a.timeout:80;this.A=void 0!==a.useAnchor?a.useAnchor:!0;this.a=null;this.o=this.j=this.u=this.g=void 0}u(Qg,$f);
function Rg(a){var b=a.type;if("wheel"!==b&&"mousewheel"!==b)return!0;a.preventDefault();var b=a.map,c=a.originalEvent;this.A&&(this.a=a.coordinate);var d;"wheel"==a.type?(d=c.deltaY,Gd&&c.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(d/=Kd),c.deltaMode===WheelEvent.DOM_DELTA_LINE&&(d*=40)):"mousewheel"==a.type&&(d=-c.wheelDeltaY,Hd&&(d/=3));if(0===d)return!1;a=Date.now();void 0===this.g&&(this.g=a);if(!this.j||400<a-this.g)this.j=4>Math.abs(d)?Sg:Tg;if(this.j===Sg){b=b.$();this.o?clearTimeout(this.o):
Rf(b,1,1);this.o=setTimeout(this.C.bind(this),400);d=b.Ua()*Math.pow(2,d/300);var c=b.i,e=b.a,f=0;d<c?(d=Math.max(d,c/1.5),f=1):d>e&&(d=Math.min(d,1.5*e),f=-1);if(this.a){var g=Sf(b,d,this.a);b.wb(b.Ec(g))}b.Xc(d);0<f?b.animate({resolution:c,easing:fd,anchor:this.a,duration:500}):0>f&&b.animate({resolution:e,easing:fd,anchor:this.a,duration:500});this.g=a;return!1}this.l+=d;a=Math.max(this.Y-(a-this.g),0);clearTimeout(this.u);this.u=setTimeout(this.G.bind(this,b),a);return!1}
Qg.prototype.C=function(){this.o=void 0;Rf(this.v.$(),1,-1)};Qg.prototype.G=function(a){a=a.$();0<ld(a)[0]&&md(a);bg(a,-wa(this.l,-1,1),this.a,this.R);this.j=void 0;this.l=0;this.a=null;this.u=this.g=void 0};Qg.prototype.S=function(a){this.A=a;a||(this.a=null)};var Sg="trackpad",Tg="wheel";function Ug(a){og.call(this,{handleDownEvent:Vg,handleDragEvent:Wg,handleUpEvent:Xg});a=a||{};this.g=null;this.j=void 0;this.a=!1;this.o=0;this.C=void 0!==a.threshold?a.threshold:.3;this.u=void 0!==a.duration?a.duration:250}u(Ug,og);
function Wg(a){var b=0,c=this.l[0],d=this.l[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);void 0!==this.j&&(b=c-this.j,this.o+=b,!this.a&&Math.abs(this.o)>this.C&&(this.a=!0));this.j=c;a=a.map;c=a.c.getBoundingClientRect();d=qg(this.l);d[0]-=c.left;d[1]-=c.top;this.g=a.Za(d);this.a&&(c=a.$(),d=c.Va(),a.render(),ag(c,d+b,this.g))}function Xg(a){if(2>this.l.length){a=a.map.$();Rf(a,1,-1);if(this.a){var b=a.Va(),c=this.g,d=this.u,b=a.constrainRotation(b,0);ag(a,b,c,d)}return!1}return!0}
function Vg(a){return 2<=this.l.length?(a=a.map,this.g=null,this.j=void 0,this.a=!1,this.o=0,this.A||Rf(a.$(),1,1),!0):!1}Ug.prototype.Zc=bf;function Yg(a){og.call(this,{handleDownEvent:Zg,handleDragEvent:$g,handleUpEvent:ah});a=a?a:{};this.o=a.constrainResolution||!1;this.g=null;this.u=void 0!==a.duration?a.duration:400;this.a=void 0;this.j=1}u(Yg,og);
function $g(a){var b=1,c=this.l[0],d=this.l[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);void 0!==this.a&&(b=this.a/e);this.a=e;a=a.map;var e=a.$(),d=e.Ua(),f=e.a,g=e.i,c=d*b;c>f?(b=f/d,c=f):c<g&&(b=g/d,c=g);1!=b&&(this.j=b);b=a.c.getBoundingClientRect();d=qg(this.l);d[0]-=b.left;d[1]-=b.top;this.g=a.Za(d);a.render();cg(e,c,this.g)}
function ah(a){if(2>this.l.length){a=a.map.$();Rf(a,1,-1);var b=a.Ua();if(this.o||b<a.i||b>a.a){var c=this.g,d=this.u,b=a.constrainResolution(b,0,this.j-1);cg(a,b,c,d)}return!1}return!0}function Zg(a){return 2<=this.l.length?(a=a.map,this.g=null,this.a=void 0,this.j=1,this.A||Rf(a.$(),1,1),!0):!1}Yg.prototype.Zc=bf;function bh(a){a=a?a:{};var b=new D,c=new Zf(-.005,.05,100);(void 0!==a.altShiftDragRotate?a.altShiftDragRotate:1)&&b.push(new vg);(void 0!==a.doubleClickZoom?a.doubleClickZoom:1)&&b.push(new dg({delta:a.zoomDelta,duration:a.zoomDuration}));(void 0!==a.dragPan?a.dragPan:1)&&b.push(new rg({kinetic:c}));(void 0!==a.pinchRotate?a.pinchRotate:1)&&b.push(new Ug);(void 0!==a.pinchZoom?a.pinchZoom:1)&&b.push(new Yg({duration:a.zoomDuration}));if(void 0!==a.keyboard?a.keyboard:1)b.push(new Mg),b.push(new Og({delta:a.zoomDelta,
duration:a.zoomDuration}));(void 0!==a.mouseWheelZoom?a.mouseWheelZoom:1)&&b.push(new Qg({duration:a.zoomDuration}));(void 0!==a.shiftDragZoom?a.shiftDragZoom:1)&&b.push(new Lg({duration:a.zoomDuration}));return b};function ch(a){Gc.call(this);var b=pb({},a);b.opacity=void 0!==a.opacity?a.opacity:1;b.visible=void 0!==a.visible?a.visible:!0;b.zIndex=void 0!==a.zIndex?a.zIndex:0;b.maxResolution=void 0!==a.maxResolution?a.maxResolution:Infinity;b.minResolution=void 0!==a.minResolution?a.minResolution:0;this.H(b);this.a={layer:this,De:!0}}u(ch,Gc);
function dh(a){a.a.opacity=wa(a.ic(),0,1);a.a.Ui=a.Nf();a.a.visible=a.Kb();a.a.extent=a.D();a.a.zIndex=a.za();a.a.maxResolution=a.gc();a.a.minResolution=Math.max(a.hc(),0);return a.a}k=ch.prototype;k.D=function(){return this.get("extent")};k.gc=function(){return this.get("maxResolution")};k.hc=function(){return this.get("minResolution")};k.ic=function(){return this.get("opacity")};k.Kb=function(){return this.get("visible")};k.za=function(){return this.get("zIndex")};
k.uc=function(a){this.set("extent",a)};k.zc=function(a){this.set("maxResolution",a)};k.Ac=function(a){this.set("minResolution",a)};k.vc=function(a){this.set("opacity",a)};k.wc=function(a){this.set("visible",a)};k.Wb=function(a){this.set("zIndex",a)};function eh(a){var b=a||{};a=pb({},b);delete a.layers;b=b.layers;ch.call(this,a);this.i=[];this.c={};B(this,Ic(fh),this.nl,this);b?Array.isArray(b)?b=new D(b.slice()):qa(b instanceof D,43):b=new D;this.Sh(b)}u(eh,ch);k=eh.prototype;k.Dd=function(){};k.ze=function(){this.Kb()&&this.s()};
k.nl=function(){this.i.forEach(rc);this.i.length=0;var a=this.od();this.i.push(B(a,"add",this.ml,this),B(a,"remove",this.ol,this));for(var b in this.c)this.c[b].forEach(rc);qb(this.c);var a=a.a,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.c[w(d).toString()]=[B(d,"propertychange",this.ze,this),B(d,"change",this.ze,this)];this.s()};k.ml=function(a){a=a.element;var b=w(a).toString();this.c[b]=[B(a,"propertychange",this.ze,this),B(a,"change",this.ze,this)];this.s()};
k.ol=function(a){a=w(a.element).toString();this.c[a].forEach(rc);delete this.c[a];this.s()};k.od=function(){return this.get(fh)};k.Sh=function(a){this.set(fh,a)};
k.Lf=function(a){var b=void 0!==a?a:[],c=b.length;this.od().forEach(function(a){a.Lf(b)});a=dh(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.opacity*=a.opacity,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution),void 0!==a.extent&&(e.extent=void 0!==e.extent?lb(e.extent,a.extent):a.extent);return b};k.Nf=function(){return"ready"};var fh="layers";function gh(a){yb.call(this,{code:a,units:"m",extent:hh,global:!0,worldExtent:ih,getPointResolution:function(a,c){return a/xa(c[1]/6378137)}})}u(gh,yb);var jh=6378137*Math.PI,hh=[-jh,-jh,jh,jh],ih=[-180,-85,180,85],Lb="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new gh(a)});
function Mb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=jh*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>jh?f=jh:f<-jh&&(f=-jh);b[e+1]=f}return b}function Nb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/jh,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var kh=new tb(6378137);function mh(a,b){yb.call(this,{code:a,units:"degrees",extent:nh,axisOrientation:b,global:!0,metersPerUnit:oh,worldExtent:nh})}u(mh,yb);var nh=[-180,-90,180,90],oh=Math.PI*kh.radius/180,Ob=[new mh("CRS:84"),new mh("EPSG:4326","neu"),new mh("urn:ogc:def:crs:EPSG::4326","neu"),new mh("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new mh("urn:ogc:def:crs:OGC:1.3:CRS84"),new mh("urn:ogc:def:crs:OGC:2:84"),new mh("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new mh("urn:x-ogc:def:crs:EPSG:4326","neu")];function ph(){Hb(Lb);Hb(Ob);Kb()};function qh(a){var b=pb({},a);delete b.source;ch.call(this,b);this.u=this.o=this.j=null;a.map&&this.setMap(a.map);B(this,Ic("source"),this.Al,this);this.Yc(a.source?a.source:null)}u(qh,ch);function rh(a,b){return a.visible&&b>=a.minResolution&&b<a.maxResolution}k=qh.prototype;k.Lf=function(a){a=a?a:[];a.push(dh(this));return a};k.la=function(){return this.get("source")||null};k.Nf=function(){var a=this.la();return a?a.V():"undefined"};k.kn=function(){this.s()};
k.Al=function(){this.u&&(rc(this.u),this.u=null);var a=this.la();a&&(this.u=B(a,"change",this.kn,this));this.s()};k.setMap=function(a){this.j&&(rc(this.j),this.j=null);a||this.s();this.o&&(rc(this.o),this.o=null);a&&(this.j=B(a,"precompose",function(a){var b=dh(this);b.De=!1;b.zIndex=Infinity;a.frameState.layerStatesArray.push(b);a.frameState.layerStates[w(this)]=b},this),this.o=B(this,"change",a.render,a),this.s())};k.Yc=function(a){this.set("source",a)};function sh(){this.b={};this.a=0}sh.prototype.clear=function(){this.b={};this.a=0};sh.prototype.get=function(a,b,c){a=b+":"+a+":"+(c?Sc(c):"null");return a in this.b?this.b[a]:null};sh.prototype.set=function(a,b,c,d){this.b[b+":"+a+":"+(c?Sc(c):"null")]=d;++this.a};var th=new sh;var uh=Array(6);function vh(){return[1,0,0,1,0,0]}function wh(a){return xh(a,1,0,0,1,0,0)}function yh(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=b[0],m=b[1],p=b[2],n=b[3],q=b[4],r=b[5];a[0]=c*l+e*m;a[1]=d*l+f*m;a[2]=c*p+e*n;a[3]=d*p+f*n;a[4]=c*q+e*r+g;a[5]=d*q+f*r+h;return a}function xh(a,b,c,d,e,f,g){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;return a}function zh(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}
function Ah(a,b){var c=b[0],d=b[1];b[0]=a[0]*c+a[2]*d+a[4];b[1]=a[1]*c+a[3]*d+a[5];return b}function Bh(a,b){var c=Math.cos(b),d=Math.sin(b);yh(a,xh(uh,c,d,-d,c,0,0))}function Ch(a,b,c){return yh(a,xh(uh,b,0,0,c,0,0))}function Dh(a,b,c){yh(a,xh(uh,1,0,0,1,b,c))}function Eh(a,b,c,d,e,f,g,h){var l=Math.sin(f);f=Math.cos(f);a[0]=d*f;a[1]=e*l;a[2]=-d*l;a[3]=e*f;a[4]=g*d*f-h*d*l+b;a[5]=g*e*l+h*e*f+c;return a}
function Fh(a){var b=a[0]*a[3]-a[1]*a[2];qa(!!b,32);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5];a[0]=f/b;a[1]=-d/b;a[2]=-e/b;a[3]=c/b;a[4]=(e*h-f*g)/b;a[5]=-(c*h-d*g)/b;return a};function Gh(a,b){this.j=b;this.c={};this.v={}}u(Gh,zc);function Hh(a){var b=a.viewState,c=a.coordinateToPixelTransform,d=a.pixelToCoordinateTransform;Eh(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);Fh(zh(d,c))}k=Gh.prototype;k.ra=function(){for(var a in this.c)Ac(this.c[a])};function Ih(){if(32<th.a){var a=0,b,c;for(b in th.b)c=th.b[b],a++&3||Ec(c)||(delete th.b[b],--th.a)}}
k.Aa=function(a,b,c,d,e,f,g){function h(a,c){var f=w(a).toString(),g=b.layerStates[w(c)].De;if(!(f in b.skippedFeatureUids)||g)return d.call(e,a,g?c:null)}var l,m=b.viewState,p=m.resolution,n=m.projection,m=a;if(n.a){var n=n.D(),q=hb(n),r=a[0];if(r<n[0]||r>n[2])m=[r+q*Math.ceil((n[0]-r)/q),a[1]]}n=b.layerStatesArray;for(q=n.length-1;0<=q;--q){var v=n[q],r=v.layer;if(rh(v,p)&&f.call(g,r)&&(v=Jh(this,r),r.la()&&(l=v.Aa(r.la().G?m:a,b,c,h,e)),l))return l}};
k.Zh=function(a,b,c,d,e){return void 0!==this.Aa(a,b,c,af,this,d,e)};function Jh(a,b){var c=w(b).toString();if(c in a.c)return a.c[c];var d=b.Dd(a);a.c[c]=d;a.v[c]=B(d,"change",a.ll,a);return d}k.ll=function(){this.j.render()};k.vg=na;k.gp=function(a,b){for(var c in this.c)if(!(b&&c in b.layerStates)){var d=c,e=this.c[d];delete this.c[d];rc(this.v[d]);delete this.v[d];Ac(e)}};function Kh(a,b){for(var c in a.c)if(!(c in b.layerStates)){b.postRenderFunctions.push(a.gp.bind(a));break}}
function ka(a,b){return a.zIndex-b.zIndex};function Lh(a,b,c,d,e){Bc.call(this,a);this.vectorContext=b;this.frameState=c;this.context=d;this.glContext=e}u(Lh,Bc);var Mh=[0,0,0,1],Nh=[],Oh=[0,0,0,1];function Ph(a,b,c,d){b&&(a.translate(c,d),a.rotate(b),a.translate(-c,-d))};function Qh(){}k=Qh.prototype;k.mc=function(){};k.pd=function(){};k.$b=function(){};k.oe=function(){};k.pe=function(){};k.Qb=function(){};k.nc=function(){};k.oc=function(){};k.pc=function(){};k.qc=function(){};k.rc=function(){};k.xc=function(){};k.Na=function(){};k.Vb=function(){};k.Tb=function(){};function Rh(a,b,c,d,e){this.f=a;this.I=b;this.c=c;this.u=d;this.mb=e;this.M=this.b=this.a=this.$a=this.S=this.R=null;this.eb=this.Y=this.o=this.G=this.C=this.A=0;this.ea=!1;this.i=this.ia=0;this.oa=!1;this.qa=0;this.Fa="";this.Ja=this.Zb=0;this.Ha=!1;this.l=this.Oa=0;this.ta=this.j=this.g=null;this.v=[];this.lb=vh()}u(Rh,Qh);
function Sh(a,b,c){if(a.M){b=df(b,0,c,2,a.u,a.v);c=a.f;var d=a.lb,e=c.globalAlpha;1!=a.o&&(c.globalAlpha=e*a.o);var f=a.ia;a.ea&&(f+=a.mb);var g,h;g=0;for(h=b.length;g<h;g+=2){var l=b[g]-a.A,m=b[g+1]-a.C;a.oa&&(l=Math.round(l),m=Math.round(m));if(f||1!=a.i){var p=l+a.A,n=m+a.C;Eh(d,p,n,a.i,a.i,f,-p,-n);c.setTransform.apply(c,d)}c.drawImage(a.M,a.Y,a.eb,a.qa,a.G,l,m,a.qa,a.G)}(f||1!=a.i)&&c.setTransform(1,0,0,1,0,0);1!=a.o&&(c.globalAlpha=e)}}
function Th(a,b,c,d){var e=0;if(a.ta&&""!==a.Fa){a.g&&Uh(a,a.g);a.j&&Vh(a,a.j);var f=a.ta,g=a.f,h=a.$a;h?(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline)):(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.$a={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});b=df(b,e,c,d,a.u,a.v);f=a.f;g=a.Oa;for(a.Ha&&(g+=a.mb);e<c;e+=d){var h=b[e]+
a.Zb,l=b[e+1]+a.Ja;if(g||1!=a.l){var m=Eh(a.lb,h,l,a.l,a.l,g,-h,-l);f.setTransform.apply(f,m)}a.j&&f.strokeText(a.Fa,h,l);a.g&&f.fillText(a.Fa,h,l)}(g||1!=a.l)&&f.setTransform(1,0,0,1,0,0)}}function Wh(a,b,c,d,e,f){var g=a.f;a=df(b,c,d,e,a.u,a.v);g.moveTo(a[0],a[1]);b=a.length;f&&(b-=2);for(c=2;c<b;c+=2)g.lineTo(a[c],a[c+1]);f&&g.closePath();return d}function Xh(a,b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f)c=Wh(a,b,c,d[f],e,!0);return c}k=Rh.prototype;
k.$b=function(a){if(mb(this.c,a.D())){if(this.a||this.b){this.a&&Uh(this,this.a);this.b&&Vh(this,this.b);var b;b=this.u;var c=this.v,d=a.ha();b=d?df(d,0,d.length,a.sa(),b,c):null;c=b[2]-b[0];d=b[3]-b[1];c=Math.sqrt(c*c+d*d);d=this.f;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);this.a&&d.fill();this.b&&d.stroke()}""!==this.Fa&&Th(this,a.Ba(),2,2)}};k.pd=function(a){this.Na(a.Ca(),a.Da());this.Vb(a.Z());this.Tb(a.Pa())};
k.mc=function(a){switch(a.T()){case "Point":this.qc(a);break;case "LineString":this.Qb(a);break;case "Polygon":this.rc(a);break;case "MultiPoint":this.oc(a);break;case "MultiLineString":this.nc(a);break;case "MultiPolygon":this.pc(a);break;case "GeometryCollection":this.pe(a);break;case "Circle":this.$b(a)}};k.oe=function(a,b){var c=(0,b.Ra)(a);c&&mb(this.c,c.D())&&(this.pd(b),this.mc(c))};k.pe=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.mc(a[b])};
k.qc=function(a){var b=a.ha();a=a.sa();this.M&&Sh(this,b,b.length);""!==this.Fa&&Th(this,b,b.length,a)};k.oc=function(a){var b=a.ha();a=a.sa();this.M&&Sh(this,b,b.length);""!==this.Fa&&Th(this,b,b.length,a)};k.Qb=function(a){if(mb(this.c,a.D())){if(this.b){Vh(this,this.b);var b=this.f,c=a.ha();b.beginPath();Wh(this,c,0,c.length,a.sa(),!1);b.stroke()}""!==this.Fa&&(a=Yh(a),Th(this,a,2,2))}};
k.nc=function(a){var b=a.D();if(mb(this.c,b)){if(this.b){Vh(this,this.b);var b=this.f,c=a.ha(),d=0,e=a.Rb(),f=a.sa();b.beginPath();var g,h;g=0;for(h=e.length;g<h;++g)d=Wh(this,c,d,e[g],f,!1);b.stroke()}""!==this.Fa&&(a=Zh(a),Th(this,a,a.length,2))}};k.rc=function(a){if(mb(this.c,a.D())){if(this.b||this.a){this.a&&Uh(this,this.a);this.b&&Vh(this,this.b);var b=this.f;b.beginPath();Xh(this,a.fc(),0,a.Rb(),a.sa());this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=Lf(a),Th(this,a,2,2))}};
k.pc=function(a){if(mb(this.c,a.D())){if(this.b||this.a){this.a&&Uh(this,this.a);this.b&&Vh(this,this.b);var b=this.f,c=$h(a),d=0,e=a.c,f=a.sa(),g,h;b.beginPath();g=0;for(h=e.length;g<h;++g)d=Xh(this,c,d,e[g],f);this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=ai(a),Th(this,a,a.length,2))}};function Uh(a,b){var c=a.f,d=a.R;d?d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle):(c.fillStyle=b.fillStyle,a.R={fillStyle:b.fillStyle})}
function Vh(a,b){var c=a.f,d=a.S;d?(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),Ld&&!ia(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle)):(c.lineCap=b.lineCap,Ld&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=
b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.S={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle})}
k.Na=function(a,b){if(a){var c=a.b;this.a={fillStyle:Vc(c?c:Mh)}}else this.a=null;if(b){var c=b.a,d=b.i,e=b.f,f=b.g,g=b.l,h=b.c,l=b.j;this.b={lineCap:void 0!==d?d:"round",lineDash:e?e:Nh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:this.I*(void 0!==h?h:1),miterLimit:void 0!==l?l:10,strokeStyle:Vc(c?c:Oh)}}else this.b=null};
k.Vb=function(a){if(a){var b=a.Hc(),c=a.Z(1),d=a.Pc(),e=a.jc();this.A=b[0];this.C=b[1];this.G=e[1];this.M=c;this.o=a.g;this.Y=d[0];this.eb=d[1];this.ea=a.o;this.ia=a.l;this.i=a.c;this.oa=a.v;this.qa=e[0]}else this.M=null};
k.Tb=function(a){if(a){var b=a.Ca();b?(b=b.b,this.g={fillStyle:Vc(b?b:Mh)}):this.g=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.f,f=c.g,g=c.l,h=c.c,c=c.j;this.j={lineCap:void 0!==d?d:"round",lineDash:e?e:Nh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:void 0!==h?h:1,miterLimit:void 0!==c?c:10,strokeStyle:Vc(b?b:Oh)}}else this.j=null;var b=a.a,d=a.f,e=a.c,f=a.j,g=a.i,h=a.b,c=a.Pa(),l=a.g;a=a.l;this.ta={font:void 0!==b?b:"10px sans-serif",textAlign:void 0!==l?l:"center",textBaseline:void 0!==
a?a:"middle"};this.Fa=void 0!==c?c:"";this.Zb=void 0!==d?this.I*d:0;this.Ja=void 0!==e?this.I*e:0;this.Ha=void 0!==f?f:!1;this.Oa=void 0!==g?g:0;this.l=this.I*(void 0!==h?h:1)}else this.Fa=""};function bi(a,b){Gh.call(this,0,b);this.f=Xc();this.b=this.f.canvas;this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.a=!0;this.i=vh()}u(bi,Gh);
function ci(a,b,c){var d=a.j,e=a.f;if(Ec(d,b)){var f=c.extent,g=c.pixelRatio,h=c.viewState.rotation,l=c.viewState,m=c.pixelRatio/l.resolution;a=Eh(a.i,a.b.width/2,a.b.height/2,m,-m,-l.rotation,-l.center[0],-l.center[1]);d.b(new Lh(b,new Rh(e,g,f,a,h),c,e,null))}}bi.prototype.T=function(){return"canvas"};
bi.prototype.vg=function(a){if(a){var b=this.f,c=a.pixelRatio,d=Math.round(a.size[0]*c),e=Math.round(a.size[1]*c);this.b.width!=d||this.b.height!=e?(this.b.width=d,this.b.height=e):b.clearRect(0,0,d,e);c=a.viewState.rotation;Hh(a);ci(this,"precompose",a);var f=a.layerStatesArray;ja(f);c&&(b.save(),Ph(b,c,d/2,e/2));var d=a.viewState.resolution,g,h,l,e=0;for(g=f.length;e<g;++e)l=f[e],h=l.layer,h=Jh(this,h),rh(l,d)&&"ready"==l.Ui&&h.qd(a,l)&&h.I(a,l,b);c&&b.restore();ci(this,"postcompose",a);this.a||
(this.b.style.display="",this.a=!0);Kh(this,a);a.postRenderFunctions.push(Ih)}else this.a&&(this.b.style.display="none",this.a=!1)};bi.prototype.Yh=function(a,b,c,d,e,f){var g,h=b.viewState.resolution,l=b.layerStatesArray,m=l.length;a=Ah(b.pixelToCoordinateTransform,a.slice());for(--m;0<=m;--m){g=l[m];var p=g.layer;if(rh(g,h)&&e.call(f,p)&&(g=Jh(this,p).v(a,b,c,d)))return g}};var di=["Polygon","Circle","LineString","Image","Text"];function ei(){};function fi(a){this.b=a};function gi(a){this.b=a}u(gi,fi);gi.prototype.T=function(){return 35632};function hi(a){this.b=a}u(hi,fi);hi.prototype.T=function(){return 35633};function ii(){this.b="precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"}
u(ii,gi);var ji=new ii;
function ki(){this.b="varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"}
u(ki,hi);var li=new ki;function mi(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"l");this.f=a.getUniformLocation(b,"h");this.R=a.getUniformLocation(b,"p");this.S=a.getUniformLocation(b,"o");this.l=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e");this.u=a.getAttribLocation(b,"g")};function ni(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function oi(a,b){a[0]=b[0];a[1]=b[1];a[4]=b[2];a[5]=b[3];a[12]=b[4];a[13]=b[5];return a};function pi(a,b){this.origin=jb(b);this.mb=vh();this.Oa=vh();this.lb=vh();this.Ja=ni();this.b=[];this.o=null;this.f=[];this.g=[];this.a=[];this.v=null;this.l=void 0}u(pi,Qh);
pi.prototype.i=function(a,b,c,d,e,f,g,h,l,m,p){var n=a.b,q,r,v,x,y,z,A,V;this.l&&(q=n.isEnabled(n.STENCIL_TEST),r=n.getParameter(n.STENCIL_FUNC),v=n.getParameter(n.STENCIL_VALUE_MASK),x=n.getParameter(n.STENCIL_REF),y=n.getParameter(n.STENCIL_WRITEMASK),z=n.getParameter(n.STENCIL_FAIL),A=n.getParameter(n.STENCIL_PASS_DEPTH_PASS),V=n.getParameter(n.STENCIL_PASS_DEPTH_FAIL),n.enable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.stencilMask(255),n.stencilFunc(n.ALWAYS,1,255),n.stencilOp(n.KEEP,n.KEEP,
n.REPLACE),this.l.i(a,b,c,d,e,f,g,h,l,m,p),n.stencilMask(0),n.stencilFunc(n.NOTEQUAL,1,255));qi(a,34962,this.v);qi(a,34963,this.o);f=this.ff(n,a,e,f);var Pa=wh(this.mb);Ch(Pa,2/(c*e[0]),2/(c*e[1]));Bh(Pa,-d);Dh(Pa,-(b[0]-this.origin[0]),-(b[1]-this.origin[1]));b=wh(this.lb);Ch(b,2/e[0],2/e[1]);e=wh(this.Oa);d&&Bh(e,-d);n.uniformMatrix4fv(f.f,!1,oi(this.Ja,Pa));n.uniformMatrix4fv(f.i,!1,oi(this.Ja,b));n.uniformMatrix4fv(f.c,!1,oi(this.Ja,e));n.uniform1f(f.a,g);var ra;l?(m?a=this.qe(n,a,h,l,p):(n.clear(n.COLOR_BUFFER_BIT|
n.DEPTH_BUFFER_BIT),this.Md(n,a,h,!0),a=(a=l(null))?a:void 0),ra=a):this.Md(n,a,h,!1);this.gf(n,f);this.l&&(q||n.disable(n.STENCIL_TEST),n.clear(n.STENCIL_BUFFER_BIT),n.stencilFunc(r,x,v),n.stencilMask(y),n.stencilOp(z,V,A));return ra};function ri(a,b,c,d){a.drawElements(4,d-c,b.g?5125:5123,c*(b.g?4:2))};var si=[0,0,0,1],ti=[],ui=[0,0,0,1];function vi(a,b,c,d,e,f){a=(c-a)*(f-b)-(e-a)*(d-b);return a<=wi&&a>=-wi?void 0:0<a}var wi=Number.EPSILON||2.220446049250313E-16;function xi(a){this.b=void 0!==a?a:[];this.a=yi}var yi=35044;function zi(a,b){pi.call(this,0,b);this.I=null;this.j=[];this.u=[];this.A=0;this.c={fillColor:null,strokeColor:null,lineDash:null,lineDashOffset:void 0,lineWidth:void 0,s:!1}}u(zi,pi);k=zi.prototype;
k.$b=function(a,b){var c=a.Vd(),d=a.sa();if(c){this.f.push(this.b.length);this.g.push(b);this.c.s&&(this.u.push(this.b.length),this.c.s=!1);this.A=c;var c=a.ha(),c=ef(c,2,d,-this.origin[0],-this.origin[1]),e=this.a.length,f=this.b.length,g=e/4,h;for(h=0;2>h;h+=d)this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=0,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=1,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=2,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+
1],this.a[e++]=3,this.a[e++]=this.A,this.b[f++]=g,this.b[f++]=g+1,this.b[f++]=g+2,this.b[f++]=g+2,this.b[f++]=g+3,this.b[f++]=g,g+=4}else this.c.s&&(this.j.pop(),this.j.length&&(d=this.j[this.j.length-1],this.c.fillColor=d[0],this.c.strokeColor=d[1],this.c.lineWidth=d[2],this.c.s=!1))};k.Bb=function(){this.v=new xi(this.a);this.o=new xi(this.b);this.f.push(this.b.length);!this.u.length&&0<this.j.length&&(this.j=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.v,c=this.o;return function(){Ai(a,b);Ai(a,c)}};k.ff=function(a,b,c,d){var e=Bi(b,ji,li),f;this.I?f=this.I:this.I=f=new mi(a,e);b.Rc(e);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,16,0);a.enableVertexAttribArray(f.l);a.vertexAttribPointer(f.l,1,5126,!1,16,8);a.enableVertexAttribArray(f.u);a.vertexAttribPointer(f.u,1,5126,!1,16,12);a.uniform2fv(f.R,c);a.uniform1f(f.ta,d);return f};
k.gf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.l);a.disableVertexAttribArray(b.u)};
k.Md=function(a,b,c){if(sb(c)){var d,e,f;e=this.f[this.f.length-1];for(c=this.u.length-1;0<=c;--c)d=this.u[c],f=this.j[c],a.uniform4fv(this.I.G,f[0]),Ci(this,a,f[1],f[2]),ri(a,b,d,e),e=d}else{var g,h,l,m;l=this.f.length-2;f=e=this.f[l+1];for(d=this.u.length-1;0<=d;--d){g=this.j[d];a.uniform4fv(this.I.G,g[0]);Ci(this,a,g[1],g[2]);for(g=this.u[d];0<=l&&this.f[l]>=g;)m=this.f[l],h=this.g[l],h=w(h).toString(),c[h]&&(e!==f&&ri(a,b,e,f),f=m),l--,e=m;e!==f&&ri(a,b,e,f);e=f=g}}};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.u.length-1;0<=f;--f)for(g=this.j[f],a.uniform4fv(this.I.G,g[0]),Ci(this,a,g[1],g[2]),l=this.u[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ri(a,b,g,h),h=d(m)))return h;n--;h=g}};function Ci(a,b,c,d){b.uniform4fv(a.I.S,c);b.uniform1f(a.I.qa,d)}
k.Na=function(a,b){var c,d;b?(c=b.f,this.c.lineDash=c?c:ti,c=b.g,this.c.lineDashOffset=c?c:0,c=b.a,c instanceof CanvasGradient||c instanceof CanvasPattern?c=ui:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||ui,d=b.c,d=void 0!==d?d:1):(c=[0,0,0,0],d=0);var e=a?a.b:[0,0,0,0];e instanceof CanvasGradient||e instanceof CanvasPattern?e=si:e=Qc(e).map(function(a,b){return 3!=b?a/255:a})||si;this.c.strokeColor&&ia(this.c.strokeColor,c)&&this.c.fillColor&&ia(this.c.fillColor,e)&&this.c.lineWidth===d||(this.c.s=
!0,this.c.fillColor=e,this.c.strokeColor=c,this.c.lineWidth=d,this.j.push([e,c,d]))};function Di(){this.b="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Di,gi);var Ei=new Di;
function Fi(){this.b="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"}u(Fi,hi);var Gi=new Fi;
function Hi(a,b){this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"k");this.f=a.getUniformLocation(b,"h");this.v=a.getAttribLocation(b,"e");this.I=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"c");this.A=a.getAttribLocation(b,"g");this.C=a.getAttribLocation(b,"d")};function Ii(a,b){this.l=a;this.b=b;this.a={};this.c={};this.f={};this.o=this.v=this.i=this.j=null;(this.g=ea(ca,"OES_element_index_uint"))&&b.getExtension("OES_element_index_uint");B(this.l,"webglcontextlost",this.mo,this);B(this.l,"webglcontextrestored",this.no,this)}u(Ii,zc);
function qi(a,b,c){var d=a.b,e=c.b,f=String(w(c));if(f in a.a)d.bindBuffer(b,a.a[f].buffer);else{var g=d.createBuffer();d.bindBuffer(b,g);var h;34962==b?h=new Float32Array(e):34963==b&&(h=a.g?new Uint32Array(e):new Uint16Array(e));d.bufferData(b,h,c.a);a.a[f]={lc:c,buffer:g}}}function Ai(a,b){var c=a.b,d=String(w(b)),e=a.a[d];c.isContextLost()||c.deleteBuffer(e.buffer);delete a.a[d]}k=Ii.prototype;
k.ra=function(){yc(this.l);var a=this.b;if(!a.isContextLost()){for(var b in this.a)a.deleteBuffer(this.a[b].buffer);for(b in this.f)a.deleteProgram(this.f[b]);for(b in this.c)a.deleteShader(this.c[b]);a.deleteFramebuffer(this.i);a.deleteRenderbuffer(this.o);a.deleteTexture(this.v)}};k.lo=function(){return this.b};
function Ji(a){if(!a.i){var b=a.b,c=b.createFramebuffer();b.bindFramebuffer(b.FRAMEBUFFER,c);var d=Ki(b,1,1),e=b.createRenderbuffer();b.bindRenderbuffer(b.RENDERBUFFER,e);b.renderbufferStorage(b.RENDERBUFFER,b.DEPTH_COMPONENT16,1,1);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d,0);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,e);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,null);a.i=c;
a.v=d;a.o=e}return a.i}function Li(a,b){var c=String(w(b));if(c in a.c)return a.c[c];var d=a.b,e=d.createShader(b.T());d.shaderSource(e,b.b);d.compileShader(e);return a.c[c]=e}function Bi(a,b,c){var d=w(b)+"/"+w(c);if(d in a.f)return a.f[d];var e=a.b,f=e.createProgram();e.attachShader(f,Li(a,b));e.attachShader(f,Li(a,c));e.linkProgram(f);return a.f[d]=f}k.mo=function(){qb(this.a);qb(this.c);qb(this.f);this.o=this.v=this.i=this.j=null};k.no=function(){};
k.Rc=function(a){if(a==this.j)return!1;this.b.useProgram(a);this.j=a;return!0};function Mi(a,b,c){var d=a.createTexture();a.bindTexture(a.TEXTURE_2D,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);void 0!==b&&a.texParameteri(3553,10242,b);void 0!==c&&a.texParameteri(3553,10243,c);return d}function Ki(a,b,c){var d=Mi(a,void 0,void 0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,b,c,0,a.RGBA,a.UNSIGNED_BYTE,null);return d}
function Ni(a,b){var c=Mi(a,33071,33071);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);return c};function Oi(a,b){pi.call(this,0,b);this.G=this.C=void 0;this.A=[];this.I=[];this.ta=void 0;this.j=[];this.c=[];this.S=this.R=void 0;this.qa=null;this.oa=this.ia=this.ea=this.eb=this.Y=this.$a=void 0;this.Ha=[];this.u=[];this.Zb=void 0}u(Oi,pi);k=Oi.prototype;k.Cb=function(a){var b=this.v,c=this.o,d=this.Ha,e=this.u,f=a.b;return function(){if(!f.isContextLost()){var g,h;g=0;for(h=d.length;g<h;++g)f.deleteTexture(d[g]);g=0;for(h=e.length;g<h;++g)f.deleteTexture(e[g])}Ai(a,b);Ai(a,c)}};
function Pi(a,b,c,d){var e=a.C,f=a.G,g=a.ta,h=a.R,l=a.S,m=a.$a,p=a.Y,n=a.eb,q=a.ea?1:0,r=-a.ia,v=a.oa,x=a.Zb,y=Math.cos(r),r=Math.sin(r),z=a.b.length,A=a.a.length,V,Pa,ra,La,C,Ma;for(V=0;V<c;V+=d)C=b[V]-a.origin[0],Ma=b[V+1]-a.origin[1],Pa=A/8,ra=-v*e,La=-v*(g-f),a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=p/l,a.a[A++]=(n+g)/h,a.a[A++]=m,a.a[A++]=q,ra=v*(x-e),La=-v*(g-f),a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=(p+x)/l,a.a[A++]=(n+g)/h,a.a[A++]=
m,a.a[A++]=q,ra=v*(x-e),La=v*f,a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=(p+x)/l,a.a[A++]=n/h,a.a[A++]=m,a.a[A++]=q,ra=-v*e,La=v*f,a.a[A++]=C,a.a[A++]=Ma,a.a[A++]=ra*y-La*r,a.a[A++]=ra*r+La*y,a.a[A++]=p/l,a.a[A++]=n/h,a.a[A++]=m,a.a[A++]=q,a.b[z++]=Pa,a.b[z++]=Pa+1,a.b[z++]=Pa+2,a.b[z++]=Pa,a.b[z++]=Pa+2,a.b[z++]=Pa+3}k.oc=function(a,b){this.f.push(this.b.length);this.g.push(b);var c=a.ha();Pi(this,c,c.length,a.sa())};
k.qc=function(a,b){this.f.push(this.b.length);this.g.push(b);var c=a.ha();Pi(this,c,c.length,a.sa())};k.Bb=function(a){a=a.b;this.A.push(this.b.length);this.I.push(this.b.length);this.v=new xi(this.a);this.o=new xi(this.b);var b={};Qi(this.Ha,this.j,b,a);Qi(this.u,this.c,b,a);this.ta=this.G=this.C=void 0;this.c=this.j=null;this.S=this.R=void 0;this.b=null;this.oa=this.ia=this.ea=this.eb=this.Y=this.$a=void 0;this.a=null;this.Zb=void 0};
function Qi(a,b,c,d){var e,f,g,h=b.length;for(g=0;g<h;++g)e=b[g],f=w(e).toString(),f in c?e=c[f]:(e=Ni(d,e),c[f]=e),a[g]=e}
k.ff=function(a,b){var c=Bi(b,Ei,Gi),d;this.qa?d=this.qa:this.qa=d=new Hi(a,c);b.Rc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,32,0);a.enableVertexAttribArray(d.v);a.vertexAttribPointer(d.v,2,5126,!1,32,8);a.enableVertexAttribArray(d.C);a.vertexAttribPointer(d.C,2,5126,!1,32,16);a.enableVertexAttribArray(d.I);a.vertexAttribPointer(d.I,1,5126,!1,32,24);a.enableVertexAttribArray(d.A);a.vertexAttribPointer(d.A,1,5126,!1,32,28);return d};
k.gf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.v);a.disableVertexAttribArray(b.C);a.disableVertexAttribArray(b.I);a.disableVertexAttribArray(b.A)};
k.Md=function(a,b,c,d){var e=d?this.u:this.Ha;d=d?this.I:this.A;if(sb(c)){var f,g;c=0;f=e.length;for(g=0;c<f;++c){a.bindTexture(3553,e[c]);var h=d[c];ri(a,b,g,h);g=h}}else for(g=f=0,h=e.length;g<h;++g){a.bindTexture(3553,e[g]);for(var l=0<g?d[g-1]:0,m=d[g],p=l;f<this.f.length&&this.f[f]<=m;){var n=w(this.g[f]).toString();void 0!==c[n]?(p!==l&&ri(a,b,p,l),l=p=f===this.f.length-1?m:this.f[f+1]):l=f===this.f.length-1?m:this.f[f+1];f++}p!==l&&ri(a,b,p,l)}};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n=this.f.length-1;for(f=this.u.length-1;0<=f;--f)for(a.bindTexture(3553,this.u[f]),g=0<f?this.I[f-1]:0,l=this.I[f];0<=n&&this.f[n]>=g;){h=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ri(a,b,h,l),l=d(m)))return l;l=h;n--}};
k.Vb=function(a){var b=a.Hc(),c=a.Z(1),d=a.ue(),e=a.cg(1),f=a.g,g=a.Pc(),h=a.o,l=a.l,m=a.jc();a=a.c;var p;this.j.length?(p=this.j[this.j.length-1],w(p)!=w(c)&&(this.A.push(this.b.length),this.j.push(c))):this.j.push(c);this.c.length?(p=this.c[this.c.length-1],w(p)!=w(e)&&(this.I.push(this.b.length),this.c.push(e))):this.c.push(e);this.C=b[0];this.G=b[1];this.ta=m[1];this.R=d[1];this.S=d[0];this.$a=f;this.Y=g[0];this.eb=g[1];this.ia=l;this.ea=h;this.oa=a;this.Zb=m[0]};function Ri(a,b,c){var d=b-c;return a[0]===a[d]&&a[1]===a[d+1]&&3<(b-0)/c?!!kf(a,0,b,c):!1};function Si(){this.b="precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Si,gi);var Ti=new Si;
function Ui(){this.b="varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"}
u(Ui,hi);var Vi=new Ui;function Wi(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.S=a.getUniformLocation(b,"l");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"p");this.f=a.getUniformLocation(b,"h");this.R=a.getUniformLocation(b,"o");this.g=a.getAttribLocation(b,"g");this.j=a.getAttribLocation(b,"d");this.o=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e")};function Xi(a,b){pi.call(this,0,b);this.I=null;this.u=[];this.j=[];this.c={strokeColor:null,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0,s:!1}}u(Xi,pi);
function Yi(a,b,c,d){var e,f=a.a.length,g=a.b.length,h="bevel"===a.c.lineJoin?0:"miter"===a.c.lineJoin?1:2,l="butt"===a.c.lineCap?0:"square"===a.c.lineCap?1:2,m=Ri(b,c,d),p,n,q,r=g,v=1,x,y,z;for(e=0;e<c;e+=d){q=f/7;x=y;y=z||[b[e],b[e+1]];if(e)if(e===c-d){m?z=p:(x=x||[0,0],f=Zi(a,x,y,[0,0],v*$i*(l||1),f),f=Zi(a,x,y,[0,0],-v*$i*(l||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,l&&(f=Zi(a,x,y,[0,0],v*aj*l,f),f=Zi(a,x,y,[0,0],-v*aj*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+
1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2));break}else z=[b[e+d],b[e+d+1]];else{z=[b[e+d],b[e+d+1]];if(c-0===2*d&&ia(y,z))break;if(m)x=[b[c-2*d],b[c-2*d+1]],p=z;else{l&&(f=Zi(a,[0,0],y,z,v*bj*l,f),f=Zi(a,[0,0],y,z,-v*bj*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2);f=Zi(a,[0,0],y,z,v*cj*(l||1),f);f=Zi(a,[0,0],y,z,-v*cj*(l||1),f);r=f/7-1;continue}}n=vi(x[0],x[1],y[0],y[1],z[0],z[1])?-1:1;f=Zi(a,x,y,z,n*dj*(h||1),f);f=Zi(a,x,y,z,n*ej*(h||1),f);f=Zi(a,x,y,z,-n*fj*(h||
1),f);0<e&&(a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=0<v*n?r:r-1);a.b[g++]=q;a.b[g++]=q+2;a.b[g++]=q+1;r=q+2;v=n;h&&(f=Zi(a,x,y,z,n*gj*h,f),a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q)}m&&(q=q||f/7,n=Hf([x[0],x[1],y[0],y[1],z[0],z[1]],0,6,2)?1:-1,f=Zi(a,x,y,z,n*dj*(h||1),f),Zi(a,x,y,z,-n*fj*(h||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,a.b[g++]=0<v*n?r:r-1)}
function Zi(a,b,c,d,e,f){a.a[f++]=b[0];a.a[f++]=b[1];a.a[f++]=c[0];a.a[f++]=c[1];a.a[f++]=d[0];a.a[f++]=d[1];a.a[f++]=e;return f}function hj(a,b,c){b-=0;return b<2*c?!1:b===2*c?!ia([a[0],a[1]],[a[0+c],a[c+1]]):!0}k=Xi.prototype;k.Qb=function(a,b){var c=a.ha(),d=a.sa();hj(c,c.length,d)&&(c=ef(c,c.length,d,-this.origin[0],-this.origin[1]),this.c.s&&(this.j.push(this.b.length),this.c.s=!1),this.f.push(this.b.length),this.g.push(b),Yi(this,c,c.length,d))};
k.nc=function(a,b){var c=this.b.length,d=a.hd(),e,f;e=0;for(f=d.length;e<f;++e){var g=d[e].ha(),h=d[e].sa();hj(g,g.length,h)&&(g=ef(g,g.length,h,-this.origin[0],-this.origin[1]),Yi(this,g,g.length,h))}this.b.length>c&&(this.f.push(c),this.g.push(b),this.c.s&&(this.j.push(c),this.c.s=!1))};
function ij(a,b,c,d){Ri(b,b.length,d)||(b.push(b[0]),b.push(b[1]));Yi(a,b,b.length,d);if(c.length){var e;b=0;for(e=c.length;b<e;++b)Ri(c[b],c[b].length,d)||(c[b].push(c[b][0]),c[b].push(c[b][1])),Yi(a,c[b],c[b].length,d)}}function jj(a,b,c){c=void 0===c?a.b.length:c;a.f.push(c);a.g.push(b);a.c.s&&(a.j.push(c),a.c.s=!1)}k.Bb=function(){this.v=new xi(this.a);this.o=new xi(this.b);this.f.push(this.b.length);!this.j.length&&0<this.u.length&&(this.u=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.v,c=this.o;return function(){Ai(a,b);Ai(a,c)}};k.ff=function(a,b,c,d){var e=Bi(b,Ti,Vi),f;this.I?f=this.I:this.I=f=new Wi(a,e);b.Rc(e);a.enableVertexAttribArray(f.j);a.vertexAttribPointer(f.j,2,5126,!1,28,0);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,28,8);a.enableVertexAttribArray(f.o);a.vertexAttribPointer(f.o,2,5126,!1,28,16);a.enableVertexAttribArray(f.g);a.vertexAttribPointer(f.g,1,5126,!1,28,24);a.uniform2fv(f.R,c);a.uniform1f(f.ta,d);return f};
k.gf=function(a,b){a.disableVertexAttribArray(b.j);a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.o);a.disableVertexAttribArray(b.g)};
k.Md=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(sb(c)){var g,h,l;h=this.f[this.f.length-1];for(c=this.j.length-1;0<=c;--c)g=this.j[c],l=this.u[c],kj(this,a,l[0],l[1],l[2]),ri(a,b,g,h),a.clear(a.DEPTH_BUFFER_BIT),h=g}else{var m,p,n,q;n=this.f.length-2;l=h=this.f[n+1];for(g=this.j.length-1;0<=g;--g){m=this.u[g];kj(this,a,m[0],m[1],m[2]);for(m=this.j[g];0<=n&&this.f[n]>=m;)q=this.f[n],
p=this.g[n],p=w(p).toString(),c[p]&&(h!==l&&(ri(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),n--,h=q;h!==l&&(ri(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.j.length-1;0<=f;--f)for(g=this.u[f],kj(this,a,g[0],g[1],g[2]),l=this.j[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ri(a,b,g,h),h=d(m)))return h;n--;h=g}};function kj(a,b,c,d,e){b.uniform4fv(a.I.G,c);b.uniform1f(a.I.qa,d);b.uniform1f(a.I.S,e)}
k.Na=function(a,b){var c=b.i;this.c.lineCap=void 0!==c?c:"round";c=b.f;this.c.lineDash=c?c:ti;c=b.g;this.c.lineDashOffset=c?c:0;c=b.l;this.c.lineJoin=void 0!==c?c:"round";c=b.a;c instanceof CanvasGradient||c instanceof CanvasPattern?c=ui:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||ui;var d=b.c,d=void 0!==d?d:1,e=b.j,e=void 0!==e?e:10;this.c.strokeColor&&ia(this.c.strokeColor,c)&&this.c.lineWidth===d&&this.c.miterLimit===e||(this.c.s=!0,this.c.strokeColor=c,this.c.lineWidth=d,this.c.miterLimit=
e,this.u.push([c,d,e]))};var cj=3,$i=5,bj=7,aj=11,dj=13,ej=17,fj=19,gj=23;function lj(){this.b="precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(lj,gi);var mj=new lj;function nj(){this.b="attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"}u(nj,hi);var oj=new nj;
function pj(a,b){this.G=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"c");this.a=a.getUniformLocation(b,"f");this.f=a.getUniformLocation(b,"b");this.b=a.getAttribLocation(b,"a")};function qj(a){a=a||{};this.a=void 0!==a.color?a.color:null;this.i=a.lineCap;this.f=void 0!==a.lineDash?a.lineDash:null;this.g=a.lineDashOffset;this.l=a.lineJoin;this.j=a.miterLimit;this.c=a.width;this.b=void 0}k=qj.prototype;k.clone=function(){var a=this.a;return new qj({color:a&&a.slice?a.slice():a||void 0,lineCap:this.i,lineDash:this.f?this.f.slice():void 0,lineDashOffset:this.g,lineJoin:this.l,miterLimit:this.j,width:this.c})};k.ao=function(){return this.a};k.Ak=function(){return this.i};
k.bo=function(){return this.f};k.Bk=function(){return this.g};k.Ck=function(){return this.l};k.Hk=function(){return this.j};k.co=function(){return this.c};k.eo=function(a){this.a=a;this.b=void 0};k.qp=function(a){this.i=a;this.b=void 0};k.setLineDash=function(a){this.f=a;this.b=void 0};k.rp=function(a){this.g=a;this.b=void 0};k.sp=function(a){this.l=a;this.b=void 0};k.tp=function(a){this.j=a;this.b=void 0};k.wp=function(a){this.c=a;this.b=void 0};function rj(a){this.b=this.a=this.f=void 0;this.i=void 0===a?!0:a;this.c=0}function sj(a){var b=a.b;if(b){var c=b.next,d=b.ub;c&&(c.ub=d);d&&(d.next=c);a.b=c||d;a.f===a.a?(a.b=void 0,a.f=void 0,a.a=void 0):a.f===b?a.f=a.b:a.a===b&&(a.a=d?a.b.ub:a.b);a.c--}}function tj(a){a.b=a.f;if(a.b)return a.b.data}function uj(a){if(a.b&&a.b.next)return a.b=a.b.next,a.b.data}function vj(a){if(a.b&&a.b.next)return a.b.next.data}function wj(a){if(a.b&&a.b.ub)return a.b=a.b.ub,a.b.data}
function xj(a){if(a.b&&a.b.ub)return a.b.ub.data}function yj(a){if(a.b)return a.b.data}rj.prototype.concat=function(a){if(a.b){if(this.b){var b=this.b.next;this.b.next=a.f;a.f.ub=this.b;b.ub=a.a;a.a.next=b;this.c+=a.c}else this.b=a.b,this.f=a.f,this.a=a.a,this.c=a.c;a.b=void 0;a.f=void 0;a.a=void 0;a.c=0}};var zj,Aj,Bj,Cj;
(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.cq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return require(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b,f,g,q){f=f||0;g=g||a.length-1;for(q=q||h;g>f;){if(600<g-f){var l=g-f+1,m=b-f+1,p=Math.log(l),n=.5*Math.exp(2*p/3),p=.5*Math.sqrt(p*n*(l-n)/l)*(0>m-l/2?-1:1);d(a,b,Math.max(f,Math.floor(b-m*n/l+p)),Math.min(g,Math.floor(b+(l-m)*n/l+p)),q)}l=a[b];m=f;n=g;e(a,f,b);for(0<q(a[g],l)&&e(a,f,g);m<n;){e(a,m,n);m++;for(n--;0>q(a[m],l);)m++;
for(;0<q(a[n],l);)n--}0===q(a[f],l)?e(a,f,n):(n++,e(a,n,g));n<=b&&(f=n+1);b<=n&&(g=n-1)}}function e(a,b,d){var e=a[b];a[b]=a[d];a[d]=e}function h(a,b){return a<b?-1:a>b?1:0}b.ma=d},{}],2:[function(a,b){function d(a,b){if(!(this instanceof d))return new d(a,b);this.wf=Math.max(4,a||9);this.Pg=Math.max(2,Math.ceil(.4*this.wf));b&&this.Lj(b);this.clear()}function e(a,b){h(a,0,a.children.length,b,a)}function h(a,b,d,e,f){f||(f=x(null));f.da=Infinity;f.fa=Infinity;f.ba=-Infinity;f.ja=-Infinity;for(var g;b<
d;b++)g=a.children[b],l(f,a.hb?e(g):g);return f}function l(a,b){a.da=Math.min(a.da,b.da);a.fa=Math.min(a.fa,b.fa);a.ba=Math.max(a.ba,b.ba);a.ja=Math.max(a.ja,b.ja)}function m(a,b){return a.da-b.da}function p(a,b){return a.fa-b.fa}function n(a){return(a.ba-a.da)*(a.ja-a.fa)}function q(a){return a.ba-a.da+(a.ja-a.fa)}function r(a,b){return a.da<=b.da&&a.fa<=b.fa&&b.ba<=a.ba&&b.ja<=a.ja}function v(a,b){return b.da<=a.ba&&b.fa<=a.ja&&b.ba>=a.da&&b.ja>=a.fa}function x(a){return{children:a,height:1,hb:!0,
da:Infinity,fa:Infinity,ba:-Infinity,ja:-Infinity}}function y(a,b,d,e,f){for(var g=[b,d],h;g.length;)d=g.pop(),b=g.pop(),d-b<=e||(h=b+Math.ceil((d-b)/e/2)*e,z(a,h,b,d,f),g.push(b,h,h,d))}b.ma=d;var z=a("quickselect");d.prototype={all:function(){return this.Kg(this.data,[])},search:function(a){var b=this.data,d=[],e=this.yb;if(!v(a,b))return d;for(var f=[],g,h,l,m;b;){g=0;for(h=b.children.length;g<h;g++)l=b.children[g],m=b.hb?e(l):l,v(a,m)&&(b.hb?d.push(l):r(a,m)?this.Kg(l,d):f.push(l));b=f.pop()}return d},
load:function(a){if(!a||!a.length)return this;if(a.length<this.Pg){for(var b=0,d=a.length;b<d;b++)this.Ea(a[b]);return this}a=this.Mg(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this.Rg(this.data,a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this.Og(a,this.data.height-a.height-1,!0)):this.data=a;return this},Ea:function(a){a&&this.Og(a,this.data.height-1);return this},clear:function(){this.data=x([]);return this},remove:function(a,b){if(!a)return this;
for(var d=this.data,e=this.yb(a),f=[],g=[],h,l,m,n;d||f.length;){d||(d=f.pop(),l=f[f.length-1],h=g.pop(),n=!0);if(d.hb){a:{m=a;var p=d.children,q=b;if(q){for(var v=0;v<p.length;v++)if(q(m,p[v])){m=v;break a}m=-1}else m=p.indexOf(m)}if(-1!==m){d.children.splice(m,1);f.push(d);this.Jj(f);break}}n||d.hb||!r(d,e)?l?(h++,d=l.children[h],n=!1):d=null:(f.push(d),g.push(h),h=0,l=d,d=d.children[0])}return this},yb:function(a){return a},Af:m,Bf:p,toJSON:function(){return this.data},Kg:function(a,b){for(var d=
[];a;)a.hb?b.push.apply(b,a.children):d.push.apply(d,a.children),a=d.pop();return b},Mg:function(a,b,d,f){var g=d-b+1,h=this.wf,l;if(g<=h)return l=x(a.slice(b,d+1)),e(l,this.yb),l;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));l=x([]);l.hb=!1;l.height=f;var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),m,n,p;for(y(a,b,d,h,this.Af);b<=d;b+=h)for(n=Math.min(b+h-1,d),y(a,b,n,g,this.Bf),m=b;m<=n;m+=g)p=Math.min(m+g-1,n),l.children.push(this.Mg(a,m,p,f-1));e(l,this.yb);return l},
Ij:function(a,b,d,e){for(var f,g,h,l,m,p,q,r;;){e.push(b);if(b.hb||e.length-1===d)break;q=r=Infinity;f=0;for(g=b.children.length;f<g;f++)h=b.children[f],m=n(h),p=(Math.max(h.ba,a.ba)-Math.min(h.da,a.da))*(Math.max(h.ja,a.ja)-Math.min(h.fa,a.fa))-m,p<r?(r=p,q=m<q?m:q,l=h):p===r&&m<q&&(q=m,l=h);b=l||b.children[0]}return b},Og:function(a,b,d){var e=this.yb;d=d?a:e(a);var e=[],f=this.Ij(d,this.data,b,e);f.children.push(a);for(l(f,d);0<=b;)if(e[b].children.length>this.wf)this.Qj(e,b),b--;else break;this.Fj(d,
e,b)},Qj:function(a,b){var d=a[b],f=d.children.length,g=this.Pg;this.Gj(d,g,f);f=this.Hj(d,g,f);f=x(d.children.splice(f,d.children.length-f));f.height=d.height;f.hb=d.hb;e(d,this.yb);e(f,this.yb);b?a[b-1].children.push(f):this.Rg(d,f)},Rg:function(a,b){this.data=x([a,b]);this.data.height=a.height+1;this.data.hb=!1;e(this.data,this.yb)},Hj:function(a,b,d){var e,f,g,l,m,p,q;m=p=Infinity;for(e=b;e<=d-b;e++)f=h(a,0,e,this.yb),g=h(a,e,d,this.yb),l=Math.max(0,Math.min(f.ba,g.ba)-Math.max(f.da,g.da))*Math.max(0,
Math.min(f.ja,g.ja)-Math.max(f.fa,g.fa)),f=n(f)+n(g),l<m?(m=l,q=e,p=f<p?f:p):l===m&&f<p&&(p=f,q=e);return q},Gj:function(a,b,d){var e=a.hb?this.Af:m,f=a.hb?this.Bf:p,g=this.Lg(a,b,d,e);b=this.Lg(a,b,d,f);g<b&&a.children.sort(e)},Lg:function(a,b,d,e){a.children.sort(e);e=this.yb;var f=h(a,0,b,e),g=h(a,d-b,d,e),m=q(f)+q(g),p,n;for(p=b;p<d-b;p++)n=a.children[p],l(f,a.hb?e(n):n),m+=q(f);for(p=d-b-1;p>=b;p--)n=a.children[p],l(g,a.hb?e(n):n),m+=q(g);return m},Fj:function(a,b,d){for(;0<=d;d--)l(b[d],a)},
Jj:function(a){for(var b=a.length-1,d;0<=b;b--)0===a[b].children.length?0<b?(d=a[b-1].children,d.splice(d.indexOf(a[b]),1)):this.clear():e(a[b],this.yb)},Lj:function(a){var b=["return a"," - b",";"];this.Af=new Function("a","b",b.join(a[0]));this.Bf=new Function("a","b",b.join(a[1]));this.yb=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}}},{quickselect:1}]},{},[2])(2)});zj=b.ma})();function Dj(a){this.b=zj(a);this.a={}}k=Dj.prototype;k.Ea=function(a,b){var c={da:a[0],fa:a[1],ba:a[2],ja:a[3],value:b};this.b.Ea(c);this.a[w(b)]=c};k.load=function(a,b){for(var c=Array(b.length),d=0,e=b.length;d<e;d++){var f=a[d],g=b[d],f={da:f[0],fa:f[1],ba:f[2],ja:f[3],value:g};c[d]=f;this.a[w(g)]=f}this.b.load(c)};k.remove=function(a){a=w(a);var b=this.a[a];delete this.a[a];return null!==this.b.remove(b)};
function Ej(a,b,c){var d=a.a[w(c)];Za([d.da,d.fa,d.ba,d.ja],b)||(a.remove(c),a.Ea(b,c))}function Fj(a){return a.b.all().map(function(a){return a.value})}function Gj(a,b){return a.b.search({da:b[0],fa:b[1],ba:b[2],ja:b[3]}).map(function(a){return a.value})}k.forEach=function(a,b){return Hj(Fj(this),a,b)};function Ij(a,b,c,d){return Hj(Gj(a,b),c,d)}function Hj(a,b,c){for(var d,e=0,f=a.length;e<f&&!(d=b.call(c,a[e]));e++);return d}k.clear=function(){this.b.clear();this.a={}};
k.D=function(){var a=this.b.data;return[a.da,a.fa,a.ba,a.ja]};function Jj(a,b){pi.call(this,0,b);this.l=new Xi(0,b);this.I=null;this.u=[];this.c=[];this.j={fillColor:null,s:!1}}u(Jj,pi);function Kj(a,b,c,d){var e=new rj,f=new Dj;b=Lj(a,b,d,e,f,!0);if(c.length){var g,h,l=[];g=0;for(h=c.length;g<h;++g){var m={list:new rj,ba:void 0};l.push(m);m.ba=Lj(a,c[g],d,m.list,f,!1)}l.sort(function(a,b){return b.ba-a.ba});for(g=0;g<l.length;++g)Mj(l[g].list,l[g].ba,e,b,f)}Nj(e,f,!1);Oj(a,e,f)}
function Lj(a,b,c,d,e,f){var g,h,l=a.a.length/2,m,p,n,q=[],r=[];if(f===Hf(b,0,b.length,c))for(p=m=Pj(a,b[0],b[1],l++),f=b[0],g=c,h=b.length;g<h;g+=c)n=Pj(a,b[g],b[g+1],l++),r.push(Qj(p,n,d)),q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]),f=b[g]>f?b[g]:f,p=n;else for(g=b.length-c,p=m=Pj(a,b[g],b[g+1],l++),f=b[g],g-=c,h=0;g>=h;g-=c)n=Pj(a,b[g],b[g+1],l++),r.push(Qj(p,n,d)),q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]),f=b[g]>f?b[g]:
f,p=n;r.push(Qj(n,m,d));q.push([Math.min(p.x,n.x),Math.min(p.y,n.y),Math.max(p.x,n.x),Math.max(p.y,n.y)]);e.load(q,r);return f}function Nj(a,b,c){var d=tj(a),e=d,f=uj(a),g=!1;do{var h=c?vi(f.W.x,f.W.y,e.W.x,e.W.y,e.aa.x,e.aa.y):vi(e.aa.x,e.aa.y,e.W.x,e.W.y,f.W.x,f.W.y);void 0===h?(Rj(e,f,a,b),g=!0,f===d&&(d=vj(a)),f=e,wj(a)):e.W.vb!==h&&(e.W.vb=h,g=!0);e=f;f=uj(a)}while(e!==d);return g}
function Mj(a,b,c,d,e){Nj(a,e,!0);for(var f=tj(a);f.W.x!==b;)f=uj(a);b=f.W;d={x:d,y:b.y,gb:-1};var g=Infinity,h,l,m,p;m=Sj({aa:b,W:d},e,!0);h=0;for(l=m.length;h<l;++h){var n=m[h];if(void 0===n.aa.vb){var q=Tj(b,d,n.aa,n.W,!0),r=Math.abs(b.x-q[0]);r<g&&(g=r,p={x:q[0],y:q[1],gb:-1},f=n)}}if(Infinity!==g){m=f.W;if(0<g&&(f=Uj(b,p,f.W,e),f.length))for(p=Infinity,h=0,l=f.length;h<l;++h)if(g=f[h],n=Math.atan2(b.y-g.y,d.x-g.x),n<p||n===p&&g.x<m.x)p=n,m=g;for(f=tj(c);f.W!==m;)f=uj(c);d={x:b.x,y:b.y,gb:b.gb,
vb:void 0};h={x:f.W.x,y:f.W.y,gb:f.W.gb,vb:void 0};vj(a).aa=d;Qj(b,f.W,a,e);Qj(h,d,a,e);f.W=h;a.i&&a.b&&(a.f=a.b,a.a=a.b.ub);c.concat(a)}}
function Oj(a,b,c){for(var d=!1,e=Vj(b,c);3<b.c;)if(e){if(!Wj(a,b,c,e,d)&&!Nj(b,c,d)&&!Xj(a,b,c,!0))break}else if(!Wj(a,b,c,e,d)&&!Nj(b,c,d)&&!Xj(a,b,c))if(e=Vj(b,c)){var d=b,f=2*d.c,g=Array(f),h=tj(d),l=h,m=0;do g[m++]=l.aa.x,g[m++]=l.aa.y,l=uj(d);while(l!==h);d=!Hf(g,0,f,2);Nj(b,c,d)}else{e=a;d=b;f=g=tj(d);do{h=Sj(f,c);if(h.length){g=h[0];h=Tj(f.aa,f.W,g.aa,g.W);h=Pj(e,h[0],h[1],e.a.length/2);l=new rj;m=new Dj;Qj(h,f.W,l,m);f.W=h;Ej(c,[Math.min(f.aa.x,h.x),Math.min(f.aa.y,h.y),Math.max(f.aa.x,h.x),
Math.max(f.aa.y,h.y)],f);for(f=uj(d);f!==g;)Qj(f.aa,f.W,l,m),c.remove(f),sj(d),f=yj(d);Qj(g.aa,h,l,m);g.aa=h;Ej(c,[Math.min(g.W.x,h.x),Math.min(g.W.y,h.y),Math.max(g.W.x,h.x),Math.max(g.W.y,h.y)],g);Nj(d,c,!1);Oj(e,d,c);Nj(l,m,!1);Oj(e,l,m);break}f=uj(d)}while(f!==g);break}3===b.c&&(e=a.b.length,a.b[e++]=xj(b).aa.gb,a.b[e++]=yj(b).aa.gb,a.b[e++]=vj(b).aa.gb)}
function Wj(a,b,c,d,e){var f=a.b.length,g=tj(b),h=xj(b),l=g,m=uj(b),p=vj(b),n,q,r,v=!1;do{n=l.aa;q=l.W;r=m.W;if(!1===q.vb){var x=e?Yj(p.W,r,q,n,h.aa):Yj(h.aa,n,q,r,p.W);!d&&Sj({aa:n,W:r},c).length||!x||Uj(n,q,r,c,!0).length||!d&&!1!==n.vb&&!1!==r.vb&&Hf([h.aa.x,h.aa.y,n.x,n.y,q.x,q.y,r.x,r.y,p.W.x,p.W.y],0,10,2)!==!e||(a.b[f++]=n.gb,a.b[f++]=q.gb,a.b[f++]=r.gb,Rj(l,m,b,c),m===g&&(g=p),v=!0)}h=xj(b);l=yj(b);m=uj(b);p=vj(b)}while(l!==g&&3<b.c);return v}
function Xj(a,b,c,d){var e=tj(b);uj(b);var f=e,g=uj(b),h=!1;do{var l=Tj(f.aa,f.W,g.aa,g.W,d);if(l){var m,h=a.b.length,p=a.a.length/2,n=wj(b);sj(b);c.remove(n);m=n===e;d?(l[0]===f.aa.x&&l[1]===f.aa.y?(wj(b),l=f.aa,g.aa=l,c.remove(f),m=m||f===e):(l=g.W,f.W=l,c.remove(g),m=m||g===e),sj(b)):(l=Pj(a,l[0],l[1],p),f.W=l,g.aa=l,Ej(c,[Math.min(f.aa.x,f.W.x),Math.min(f.aa.y,f.W.y),Math.max(f.aa.x,f.W.x),Math.max(f.aa.y,f.W.y)],f),Ej(c,[Math.min(g.aa.x,g.W.x),Math.min(g.aa.y,g.W.y),Math.max(g.aa.x,g.W.x),Math.max(g.aa.y,
g.W.y)],g));a.b[h++]=n.aa.gb;a.b[h++]=n.W.gb;a.b[h++]=l.gb;h=!0;if(m)break}f=xj(b);g=uj(b)}while(f!==e);return h}function Vj(a,b){var c=tj(a),d=c;do{if(Sj(d,b).length)return!1;d=uj(a)}while(d!==c);return!0}function Pj(a,b,c,d){var e=a.a.length;a.a[e++]=b;a.a[e++]=c;return{x:b,y:c,gb:d,vb:void 0}}
function Qj(a,b,c,d){var e={aa:a,W:b},f={ub:void 0,next:void 0,data:e},g=c.b;if(g){var h=g.next;f.ub=g;f.next=h;g.next=f;h&&(h.ub=f);g===c.a&&(c.a=f)}else c.f=f,c.a=f,c.i&&(f.next=f,f.ub=f);c.b=f;c.c++;d&&d.Ea([Math.min(a.x,b.x),Math.min(a.y,b.y),Math.max(a.x,b.x),Math.max(a.y,b.y)],e);return e}function Rj(a,b,c,d){yj(c)===b&&(sj(c),a.W=b.W,d.remove(b),Ej(d,[Math.min(a.aa.x,a.W.x),Math.min(a.aa.y,a.W.y),Math.max(a.aa.x,a.W.x),Math.max(a.aa.y,a.W.y)],a))}
function Uj(a,b,c,d,e){var f,g,h,l=[],m=Gj(d,[Math.min(a.x,b.x,c.x),Math.min(a.y,b.y,c.y),Math.max(a.x,b.x,c.x),Math.max(a.y,b.y,c.y)]);d=0;for(f=m.length;d<f;++d)for(g in m[d])h=m[d][g],"object"!==typeof h||e&&!h.vb||h.x===a.x&&h.y===a.y||h.x===b.x&&h.y===b.y||h.x===c.x&&h.y===c.y||-1!==l.indexOf(h)||!Bf([a.x,a.y,b.x,b.y,c.x,c.y],0,6,2,h.x,h.y)||l.push(h);return l}
function Sj(a,b,c){var d=a.aa,e=a.W;b=Gj(b,[Math.min(d.x,e.x),Math.min(d.y,e.y),Math.max(d.x,e.x),Math.max(d.y,e.y)]);var f=[],g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];a!==l&&(c||l.aa!==e||l.W!==d)&&Tj(d,e,l.aa,l.W,c)&&f.push(l)}return f}
function Tj(a,b,c,d,e){var f=(d.y-c.y)*(b.x-a.x)-(d.x-c.x)*(b.y-a.y);if(f&&(d=((d.x-c.x)*(a.y-c.y)-(d.y-c.y)*(a.x-c.x))/f,c=((b.x-a.x)*(a.y-c.y)-(b.y-a.y)*(a.x-c.x))/f,!e&&d>wi&&d<1-wi&&c>wi&&c<1-wi||e&&0<=d&&1>=d&&0<=c&&1>=c))return[a.x+d*(b.x-a.x),a.y+d*(b.y-a.y)]}
function Yj(a,b,c,d,e){if(void 0===b.vb||void 0===d.vb)return!1;var f=(c.x-d.x)*(b.y-d.y)>(c.y-d.y)*(b.x-d.x);e=(e.x-d.x)*(b.y-d.y)<(e.y-d.y)*(b.x-d.x);a=(a.x-b.x)*(d.y-b.y)>(a.y-b.y)*(d.x-b.x);c=(c.x-b.x)*(d.y-b.y)<(c.y-b.y)*(d.x-b.x);b=b.vb?c||a:c&&a;return(d.vb?e||f:e&&f)&&b}k=Jj.prototype;
k.pc=function(a,b){var c=a.Od(),d=a.sa(),e=this.b.length,f=this.l.b.length,g,h,l,m;g=0;for(h=c.length;g<h;++g){var p=c[g].jd();if(0<p.length){var n=p[0].ha(),n=ef(n,n.length,d,-this.origin[0],-this.origin[1]),q=[],r;l=1;for(m=p.length;l<m;++l)r=p[l].ha(),r=ef(r,r.length,d,-this.origin[0],-this.origin[1]),q.push(r);ij(this.l,n,q,d);Kj(this,n,q,d)}}this.b.length>e&&(this.f.push(e),this.g.push(b),this.j.s&&(this.c.push(e),this.j.s=!1));this.l.b.length>f&&jj(this.l,b,f)};
k.rc=function(a,b){var c=a.jd(),d=a.sa();if(0<c.length){this.f.push(this.b.length);this.g.push(b);this.j.s&&(this.c.push(this.b.length),this.j.s=!1);jj(this.l,b);var e=c[0].ha(),e=ef(e,e.length,d,-this.origin[0],-this.origin[1]),f=[],g,h,l;g=1;for(h=c.length;g<h;++g)l=c[g].ha(),l=ef(l,l.length,d,-this.origin[0],-this.origin[1]),f.push(l);ij(this.l,e,f,d);Kj(this,e,f,d)}};
k.Bb=function(a){this.v=new xi(this.a);this.o=new xi(this.b);this.f.push(this.b.length);this.l.Bb(a);!this.c.length&&0<this.u.length&&(this.u=[]);this.b=this.a=null};k.Cb=function(a){var b=this.v,c=this.o,d=this.l.Cb(a);return function(){Ai(a,b);Ai(a,c);d()}};k.ff=function(a,b){var c=Bi(b,mj,oj),d;this.I?d=this.I:this.I=d=new pj(a,c);b.Rc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,8,0);return d};k.gf=function(a,b){a.disableVertexAttribArray(b.b)};
k.Md=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(sb(c)){var g,h,l;h=this.f[this.f.length-1];for(c=this.c.length-1;0<=c;--c)g=this.c[c],l=this.u[c],a.uniform4fv(this.I.G,l),ri(a,b,g,h),h=g}else{var m,p,n,q;n=this.f.length-2;l=h=this.f[n+1];for(g=this.c.length-1;0<=g;--g){m=this.u[g];a.uniform4fv(this.I.G,m);for(m=this.c[g];0<=n&&this.f[n]>=m;)q=this.f[n],p=this.g[n],p=w(p).toString(),
c[p]&&(h!==l&&(ri(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),n--,h=q;h!==l&&(ri(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.qe=function(a,b,c,d,e){var f,g,h,l,m,p,n;n=this.f.length-2;h=this.f[n+1];for(f=this.c.length-1;0<=f;--f)for(g=this.u[f],a.uniform4fv(this.I.G,g),l=this.c[f];0<=n&&this.f[n]>=l;){g=this.f[n];m=this.g[n];p=w(m).toString();if(void 0===c[p]&&m.U()&&(void 0===e||mb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ri(a,b,g,h),h=d(m)))return h;n--;h=g}};
k.Na=function(a,b){var c=a?a.b:[0,0,0,0];c instanceof CanvasGradient||c instanceof CanvasPattern?c=si:c=Qc(c).map(function(a,b){return 3!=b?a/255:a})||si;this.j.fillColor&&ia(c,this.j.fillColor)||(this.j.fillColor=c,this.j.s=!0,this.u.push(c));b?this.l.Na(null,b):this.l.Na(null,new qj({color:[0,0,0,0],lineWidth:0}))};function Zj(){}Zj.prototype.i=function(){};function ak(a,b,c){this.g=b;this.l=a;this.c=c;this.a={}}u(ak,ei);function bk(a,b){var c=[],d;for(d in a.a){var e=a.a[d],f;for(f in e)c.push(e[f].Cb(b))}return function(){for(var a=c.length,b,d=0;d<a;d++)b=c[d].apply(this,arguments);return b}}function ck(a,b){for(var c in a.a){var d=a.a[c],e;for(e in d)d[e].Bb(b)}}ak.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new dk[b](this.l,this.g),d[b]=c);return c};
ak.prototype.f=function(){return sb(this.a)};ak.prototype.i=function(a,b,c,d,e,f,g,h){var l=Object.keys(this.a).map(Number);l.sort(da);var m,p,n,q,r,v;m=0;for(p=l.length;m<p;++m)for(r=this.a[l[m].toString()],n=0,q=di.length;n<q;++n)v=r[di[n]],void 0!==v&&v.i(a,b,c,d,e,f,g,h,void 0,!1)};
function ek(a,b,c,d,e,f,g,h,l,m,p){var n=fk,q=Object.keys(a.a).map(Number);q.sort(function(a,b){return b-a});var r,v,x,y,z;r=0;for(v=q.length;r<v;++r)for(y=a.a[q[r].toString()],x=di.length-1;0<=x;--x)if(z=y[di[x]],void 0!==z&&(z=z.i(b,c,d,e,n,f,g,h,l,m,p)))return z}
ak.prototype.Aa=function(a,b,c,d,e,f,g,h,l,m){var p=b.b;p.bindFramebuffer(p.FRAMEBUFFER,Ji(b));var n;void 0!==this.c&&(n=Ka(Wa(a),d*this.c));return ek(this,b,a,d,e,g,h,l,function(a){var b=new Uint8Array(4);p.readPixels(0,0,1,1,p.RGBA,p.UNSIGNED_BYTE,b);if(0<b[3]&&(a=m(a)))return a},!0,n)};
function gk(a,b,c,d,e,f,g,h){var l=c.b;l.bindFramebuffer(l.FRAMEBUFFER,Ji(c));return void 0!==ek(a,c,b,d,e,f,g,h,function(){var a=new Uint8Array(4);l.readPixels(0,0,1,1,l.RGBA,l.UNSIGNED_BYTE,a);return 0<a[3]},!1)}var fk=[1,1],dk={Circle:zi,Image:Oi,LineString:Xi,Polygon:Jj,Text:Zj};function hk(a,b,c,d,e,f,g){this.b=a;this.f=b;this.a=f;this.c=g;this.l=e;this.g=d;this.i=c;this.j=this.o=this.v=null}u(hk,Qh);k=hk.prototype;k.pd=function(a){this.Na(a.Ca(),a.Da());this.Vb(a.Z())};
k.mc=function(a){switch(a.T()){case "Point":this.qc(a,null);break;case "LineString":this.Qb(a,null);break;case "Polygon":this.rc(a,null);break;case "MultiPoint":this.oc(a,null);break;case "MultiLineString":this.nc(a,null);break;case "MultiPolygon":this.pc(a,null);break;case "GeometryCollection":this.pe(a,null);break;case "Circle":this.$b(a,null)}};k.oe=function(a,b){var c=(0,b.Ra)(a);c&&mb(this.a,c.D())&&(this.pd(b),this.mc(c))};k.pe=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.mc(a[b])};
k.qc=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"Image");d.Vb(this.v);d.qc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.oc=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"Image");d.Vb(this.v);d.oc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.Qb=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"LineString");d.Na(null,this.j);d.Qb(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.nc=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"LineString");d.Na(null,this.j);d.nc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.rc=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"Polygon");d.Na(this.o,this.j);d.rc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.pc=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"Polygon");d.Na(this.o,this.j);d.pc(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};
k.$b=function(a,b){var c=this.b,d=(new ak(1,this.a)).b(0,"Circle");d.Na(this.o,this.j);d.$b(a,b);d.Bb(c);d.i(this.b,this.f,this.i,this.g,this.l,this.c,1,{},void 0,!1);d.Cb(c)()};k.Vb=function(a){this.v=a};k.Na=function(a,b){this.o=a;this.j=b};function ik(){this.c=0;this.b={};this.f=this.a=null}k=ik.prototype;k.clear=function(){this.c=0;this.b={};this.f=this.a=null};k.forEach=function(a,b){for(var c=this.a;c;)a.call(b,c.$c,c.tc,this),c=c.Lb};k.get=function(a){a=this.b[a];qa(!!a,15);if(a===this.f)return a.$c;a===this.a?(this.a=this.a.Lb,this.a.td=null):(a.Lb.td=a.td,a.td.Lb=a.Lb);a.Lb=null;a.td=this.f;this.f=this.f.Lb=a;return a.$c};
k.pop=function(){var a=this.a;delete this.b[a.tc];a.Lb&&(a.Lb.td=null);this.a=a.Lb;this.a||(this.f=null);--this.c;return a.$c};k.replace=function(a,b){this.get(a);this.b[a].$c=b};k.set=function(a,b){qa(!(a in this.b),16);var c={tc:a,Lb:null,td:this.f,$c:b};this.f?this.f.Lb=c:this.a=c;this.f=c;this.b[a]=c;++this.c};function jk(a,b){Gh.call(this,0,b);this.b=document.createElement("CANVAS");this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.u=this.A=0;this.C=Xc();this.o=!0;this.f=Dd(this.b,{antialias:!0,depth:!0,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.i=new Ii(this.b,this.f);B(this.b,"webglcontextlost",this.nn,this);B(this.b,"webglcontextrestored",this.pn,this);
this.a=new ik;this.I=null;this.l=new Ae(function(a){var b=a[1];a=a[2];var c=b[0]-this.I[0],b=b[1]-this.I[1];return 65536*Math.log(a)+Math.sqrt(c*c+b*b)/a}.bind(this),function(a){return a[0].ib()});this.G=function(){if(this.l.b.length){Ee(this.l);var a=Be(this.l);kk(this,a[0],a[3],a[4])}return!1}.bind(this);this.g=0;lk(this)}u(jk,Gh);
function kk(a,b,c,d){var e=a.f,f=b.ib();if(a.a.b.hasOwnProperty(f))a=a.a.get(f),e.bindTexture(3553,a.Fb),9729!=a.Bh&&(e.texParameteri(3553,10240,9729),a.Bh=9729),9729!=a.Dh&&(e.texParameteri(3553,10241,9729),a.Dh=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.C.canvas,l=a.C;a.A!==c[0]||a.u!==c[1]?(h.width=c[0],h.height=c[1],a.A=c[0],a.u=c[1]):l.clearRect(0,0,c[0],c[1]);l.drawImage(b.Z(),d,d,c[0],c[1],0,0,c[0],c[1]);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,
0,6408,6408,5121,b.Z());e.texParameteri(3553,10240,9729);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);a.a.set(f,{Fb:g,Bh:9729,Dh:9729})}}function mk(a,b,c){var d=a.j;if(Ec(d,b)){a=a.i;var e=c.viewState;d.b(new Lh(b,new hk(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))}}k=jk.prototype;k.ra=function(){var a=this.f;a.isContextLost()||this.a.forEach(function(b){b&&a.deleteTexture(b.Fb)});Ac(this.i);Gh.prototype.ra.call(this)};
k.bk=function(a,b){for(var c=this.f,d;1024<this.a.c-this.g;){if(d=this.a.a.$c)c.deleteTexture(d.Fb);else if(+this.a.a.tc==b.index)break;else--this.g;this.a.pop()}};k.T=function(){return"webgl"};k.nn=function(a){a.preventDefault();this.a.clear();this.g=0;a=this.c;for(var b in a)a[b].$f()};k.pn=function(){lk(this);this.j.render()};function lk(a){a=a.f;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
k.vg=function(a){var b=this.i,c=this.f;if(c.isContextLost())return!1;if(!a)return this.o&&(this.b.style.display="none",this.o=!1),!1;this.I=a.focus;this.a.set((-a.index).toString(),null);++this.g;mk(this,"precompose",a);var d=[],e=a.layerStatesArray;ja(e);var f=a.viewState.resolution,g,h,l,m;g=0;for(h=e.length;g<h;++g)m=e[g],rh(m,f)&&"ready"==m.Ui&&(l=Jh(this,m.layer),l.ag(a,m,b)&&d.push(m));e=a.size[0]*a.pixelRatio;f=a.size[1]*a.pixelRatio;if(this.b.width!=e||this.b.height!=f)this.b.width=e,this.b.height=
f;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.b.width,this.b.height);g=0;for(h=d.length;g<h;++g)m=d[g],l=Jh(this,m.layer),l.ai(a,m,b);this.o||(this.b.style.display="",this.o=!0);Hh(a);1024<this.a.c-this.g&&a.postRenderFunctions.push(this.bk.bind(this));this.l.b.length&&(a.postRenderFunctions.push(this.G),a.animate=!0);mk(this,"postcompose",a);Kh(this,a);a.postRenderFunctions.push(Ih)};
k.Aa=function(a,b,c,d,e,f,g){var h;if(this.f.isContextLost())return!1;var l=b.viewState,m=b.layerStatesArray,p;for(p=m.length-1;0<=p;--p){h=m[p];var n=h.layer;if(rh(h,l.resolution)&&f.call(g,n)&&(h=Jh(this,n).Aa(a,b,c,d,e)))return h}};k.Zh=function(a,b,c,d,e){c=!1;if(this.f.isContextLost())return!1;var f=b.viewState,g=b.layerStatesArray,h;for(h=g.length-1;0<=h;--h){var l=g[h],m=l.layer;if(rh(l,f.resolution)&&d.call(e,m)&&(c=Jh(this,m).Ke(a,b)))return!0}return c};
k.Yh=function(a,b,c,d,e){if(this.f.isContextLost())return!1;var f=b.viewState,g,h=b.layerStatesArray,l;for(l=h.length-1;0<=l;--l){g=h[l];var m=g.layer;if(rh(g,f.resolution)&&e.call(d,m)&&(g=Jh(this,m).Zf(a,b,c,d)))return g}};var nk=["canvas","webgl"];
function G(a){Gc.call(this);var b=ok(a);this.rf=void 0!==a.loadTilesWhileAnimating?a.loadTilesWhileAnimating:!1;this.sf=void 0!==a.loadTilesWhileInteracting?a.loadTilesWhileInteracting:!1;this.xf=void 0!==a.pixelRatio?a.pixelRatio:Kd;this.pf=b.logos;this.ia=function(){this.g=void 0;this.hp.call(this,Date.now())}.bind(this);this.mb=vh();this.yf=vh();this.Bd=0;this.a=null;this.lb=Ia();this.G=this.R=this.S=null;this.c=document.createElement("DIV");this.c.className="ol-viewport"+(Pd?" ol-touch":"");this.c.style.position=
"relative";this.c.style.overflow="hidden";this.c.style.width="100%";this.c.style.height="100%";this.c.style.msTouchAction="none";this.c.style.touchAction="none";this.A=document.createElement("DIV");this.A.className="ol-overlaycontainer";this.c.appendChild(this.A);this.u=document.createElement("DIV");this.u.className="ol-overlaycontainer-stopevent";a="click dblclick mousedown touchstart mspointerdown pointerdown mousewheel wheel".split(" ");for(var c=0,d=a.length;c<d;++c)B(this.u,a[c],Cc);this.c.appendChild(this.u);
this.Ja=new xe(this);for(var e in Ad)B(this.Ja,Ad[e],this.uh,this);this.oa=b.keyboardEventTarget;this.v=null;B(this.c,"wheel",this.ld,this);B(this.c,"mousewheel",this.ld,this);this.j=b.controls;this.l=b.interactions;this.o=b.overlays;this.dg={};this.C=new b.jp(this.c,this);this.Y=null;this.Oa=[];this.Ha=new Fe(this.Wk.bind(this),this.Cl.bind(this));this.ea={};B(this,Ic("layergroup"),this.kl,this);B(this,Ic("view"),this.Dl,this);B(this,Ic("size"),this.zl,this);B(this,Ic("target"),this.Bl,this);this.H(b.values);
this.j.forEach(function(a){a.setMap(this)},this);B(this.j,"add",function(a){a.element.setMap(this)},this);B(this.j,"remove",function(a){a.element.setMap(null)},this);this.l.forEach(function(a){a.setMap(this)},this);B(this.l,"add",function(a){a.element.setMap(this)},this);B(this.l,"remove",function(a){a.element.setMap(null)},this);this.o.forEach(this.Ug,this);B(this.o,"add",function(a){this.Ug(a.element)},this);B(this.o,"remove",function(a){var b=a.element.g;void 0!==b&&delete this.dg[b.toString()];
a.element.setMap(null)},this)}u(G,Gc);k=G.prototype;k.Rj=function(a){this.j.push(a)};k.Sj=function(a){this.l.push(a)};k.Sg=function(a){this.Jc().od().push(a)};k.Tg=function(a){this.o.push(a)};k.Ug=function(a){var b=a.g;void 0!==b&&(this.dg[b.toString()]=a);a.setMap(this)};
k.ra=function(){Ac(this.Ja);Ac(this.C);xc(this.c,"wheel",this.ld,this);xc(this.c,"mousewheel",this.ld,this);this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0);this.g&&(cancelAnimationFrame(this.g),this.g=void 0);this.Fe(null);Gc.prototype.ra.call(this)};k.re=function(a,b,c){if(this.a)return a=this.Za(a),c=c?c:{},this.C.Aa(a,this.a,void 0!==c.hitTolerance?c.hitTolerance*this.a.pixelRatio:0,b,null,c.layerFilter?c.layerFilter:af,null)};
k.pm=function(a,b,c,d,e){if(this.a)return this.C.Yh(a,this.a,b,void 0!==c?c:null,d?d:af,void 0!==e?e:null)};k.El=function(a,b){if(!this.a)return!1;var c=this.Za(a);b=b?b:{};return this.C.Zh(c,this.a,void 0!==b.hitTolerance?b.hitTolerance*this.a.pixelRatio:0,b.layerFilter?b.layerFilter:af,null)};k.sk=function(a){return this.Za(this.te(a))};k.te=function(a){var b=this.c.getBoundingClientRect();a=a.changedTouches?a.changedTouches[0]:a;return[a.clientX-b.left,a.clientY-b.top]};k.Of=function(){return this.get("target")};
k.Kc=function(){var a=this.Of();return void 0!==a?"string"===typeof a?document.getElementById(a):a:null};k.Za=function(a){var b=this.a;return b?Ah(b.pixelToCoordinateTransform,a.slice()):null};k.qk=function(){return this.j};k.Lk=function(){return this.o};k.Kk=function(a){a=this.dg[a.toString()];return void 0!==a?a:null};k.xk=function(){return this.l};k.Jc=function(){return this.get("layergroup")};k.Jh=function(){return this.Jc().od()};
k.Ka=function(a){var b=this.a;return b?Ah(b.coordinateToPixelTransform,a.slice(0,2)):null};k.Mb=function(){return this.get("size")};k.$=function(){return this.get("view")};k.Yk=function(){return this.c};k.Wk=function(a,b,c,d){var e=this.a;if(!(e&&b in e.wantedTiles&&e.wantedTiles[b][a.ib()]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};k.ld=function(a,b){var c=new zd(b||a.type,this,a);this.uh(c)};
k.uh=function(a){if(this.a){this.Y=a.coordinate;a.frameState=this.a;var b=this.l.a,c;if(!1!==this.b(a))for(c=b.length-1;0<=c;c--){var d=b[c];if(d.c()&&!d.handleEvent(a))break}}};k.xl=function(){var a=this.a,b=this.Ha;if(b.b.length){var c=16,d=c;if(a){var e=a.viewHints;e[0]&&(c=this.rf?8:0,d=2);e[1]&&(c=this.sf?8:0,d=2)}b.l<c&&(Ee(b),Ge(b,c,d))}b=this.Oa;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};k.zl=function(){this.render()};
k.Bl=function(){var a;this.Of()&&(a=this.Kc());if(this.v){for(var b=0,c=this.v.length;b<c;++b)rc(this.v[b]);this.v=null}a?(a.appendChild(this.c),a=this.oa?this.oa:a,this.v=[B(a,"keydown",this.ld,this),B(a,"keypress",this.ld,this)],this.i||(this.i=this.xd.bind(this),window.addEventListener("resize",this.i,!1))):(Zc(this.c),this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0));this.xd()};k.Cl=function(){this.render()};k.xh=function(){this.render()};
k.Dl=function(){this.S&&(rc(this.S),this.S=null);this.R&&(rc(this.R),this.R=null);var a=this.$();a&&(this.c.setAttribute("data-view",w(a)),this.S=B(a,"propertychange",this.xh,this),this.R=B(a,"change",this.xh,this));this.render()};k.kl=function(){this.G&&(this.G.forEach(rc),this.G=null);var a=this.Jc();a&&(this.G=[B(a,"propertychange",this.render,this),B(a,"change",this.render,this)]);this.render()};k.ip=function(){this.g&&cancelAnimationFrame(this.g);this.ia()};
k.render=function(){void 0===this.g&&(this.g=requestAnimationFrame(this.ia))};k.ap=function(a){return this.j.remove(a)};k.bp=function(a){return this.l.remove(a)};k.ep=function(a){return this.Jc().od().remove(a)};k.fp=function(a){return this.o.remove(a)};
k.hp=function(a){var b,c,d=this.Mb(),e=this.$(),f=Ia(),g=null;if(void 0!==d&&0<d[0]&&0<d[1]&&e&&Yf(e)){var g=ld(e,this.a?this.a.viewHints:void 0),h=this.Jc().Lf(),l={};b=0;for(c=h.length;b<c;++b)l[w(h[b].layer)]=h[b];b=e.V();g={animate:!1,attributions:{},coordinateToPixelTransform:this.mb,extent:f,focus:this.Y?this.Y:b.center,index:this.Bd++,layerStates:l,layerStatesArray:h,logos:pb({},this.pf),pixelRatio:this.xf,pixelToCoordinateTransform:this.yf,postRenderFunctions:[],size:d,skippedFeatureUids:this.ea,
tileQueue:this.Ha,time:a,usedTiles:{},viewState:b,viewHints:g,wantedTiles:{}}}g&&(g.extent=kb(b.center,b.resolution,b.rotation,g.size,f));this.a=g;this.C.vg(g);g&&(g.animate&&this.render(),Array.prototype.push.apply(this.Oa,g.postRenderFunctions),g.viewHints[0]||g.viewHints[1]||Za(g.extent,this.lb)||(this.b(new yd("moveend",this,g)),Na(g.extent,this.lb)));this.b(new yd("postrender",this,g));setTimeout(this.xl.bind(this),0)};k.Li=function(a){this.set("layergroup",a)};
k.Ag=function(a){this.set("size",a)};k.Fe=function(a){this.set("target",a)};k.vp=function(a){this.set("view",a)};k.Ti=function(a){a=w(a).toString();this.ea[a]=!0;this.render()};k.xd=function(){var a=this.Kc();if(a){var b=getComputedStyle(a);this.Ag([a.offsetWidth-parseFloat(b.borderLeftWidth)-parseFloat(b.paddingLeft)-parseFloat(b.paddingRight)-parseFloat(b.borderRightWidth),a.offsetHeight-parseFloat(b.borderTopWidth)-parseFloat(b.paddingTop)-parseFloat(b.paddingBottom)-parseFloat(b.borderBottomWidth)])}else this.Ag(void 0)};
k.Zi=function(a){a=w(a).toString();delete this.ea[a];this.render()};
function ok(a){var b=null;void 0!==a.keyboardEventTarget&&(b="string"===typeof a.keyboardEventTarget?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d={};if(void 0===a.logo||"boolean"===typeof a.logo&&a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]="https://openlayers.org/";
else{var e=a.logo;"string"===typeof e?d[e]="":e instanceof HTMLElement?d[w(e).toString()]=e:e&&(qa("string"==typeof e.href,44),qa("string"==typeof e.src,45),d[e.src]=e.href)}e=a.layers instanceof eh?a.layers:new eh({layers:a.layers});c.layergroup=e;c.target=a.target;c.view=void 0!==a.view?a.view:new Qf;var e=Gh,f;void 0!==a.renderer?(Array.isArray(a.renderer)?f=a.renderer:"string"===typeof a.renderer?f=[a.renderer]:qa(!1,46),0<=f.indexOf("dom")&&(f=f.concat(nk))):f=nk;var g,h;g=0;for(h=f.length;g<
h;++g){var l=f[g];if("canvas"==l){if(Md){e=bi;break}}else if("webgl"==l&&Ed){e=jk;break}}void 0!==a.controls?Array.isArray(a.controls)?f=new D(a.controls.slice()):(qa(a.controls instanceof D,47),f=a.controls):f=nd();void 0!==a.interactions?Array.isArray(a.interactions)?g=new D(a.interactions.slice()):(qa(a.interactions instanceof D,48),g=a.interactions):g=bh();void 0!==a.overlays?Array.isArray(a.overlays)?a=new D(a.overlays.slice()):(qa(a.overlays instanceof D,49),a=a.overlays):a=new D;return{controls:f,
interactions:g,keyboardEventTarget:b,logos:d,overlays:a,jp:e,values:c}}ph();function pk(a){Gc.call(this);this.g=a.id;this.o=void 0!==a.insertFirst?a.insertFirst:!0;this.v=void 0!==a.stopEvent?a.stopEvent:!0;this.c=document.createElement("DIV");this.c.className="ol-overlay-container";this.c.style.position="absolute";this.autoPan=void 0!==a.autoPan?a.autoPan:!1;this.l=a.autoPanAnimation||{};this.j=void 0!==a.autoPanMargin?a.autoPanMargin:20;this.a={me:"",Ce:"",bf:"",kf:"",visible:!0};this.i=null;B(this,Ic(qk),this.fl,this);B(this,Ic(rk),this.pl,this);B(this,Ic(sk),this.tl,
this);B(this,Ic(tk),this.vl,this);B(this,Ic(uk),this.wl,this);void 0!==a.element&&this.Gi(a.element);this.Ni(void 0!==a.offset?a.offset:[0,0]);this.Qi(void 0!==a.positioning?a.positioning:"top-left");void 0!==a.position&&this.Wf(a.position)}u(pk,Gc);k=pk.prototype;k.se=function(){return this.get(qk)};k.qm=function(){return this.g};k.Ge=function(){return this.get(rk)};k.qh=function(){return this.get(sk)};k.Kh=function(){return this.get(tk)};k.rh=function(){return this.get(uk)};
k.fl=function(){for(var a=this.c;a.lastChild;)a.removeChild(a.lastChild);(a=this.se())&&this.c.appendChild(a)};k.pl=function(){this.i&&(Zc(this.c),rc(this.i),this.i=null);var a=this.Ge();a&&(this.i=B(a,"postrender",this.render,this),vk(this),a=this.v?a.u:a.A,this.o?a.insertBefore(this.c,a.childNodes[0]||null):a.appendChild(this.c))};k.render=function(){vk(this)};k.tl=function(){vk(this)};
k.vl=function(){vk(this);if(this.get(tk)&&this.autoPan){var a=this.Ge();if(a&&a.Kc()){var b=wk(a.Kc(),a.Mb()),c=this.se(),d=c.offsetWidth,e=c.currentStyle||getComputedStyle(c),d=d+(parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)),e=c.offsetHeight,f=c.currentStyle||getComputedStyle(c),e=e+(parseInt(f.marginTop,10)+parseInt(f.marginBottom,10)),g=wk(c,[d,e]),c=this.j;Ta(b,g)||(d=g[0]-b[0],e=b[2]-g[2],f=g[1]-b[1],g=b[3]-g[3],b=[0,0],0>d?b[0]=d-c:0>e&&(b[0]=Math.abs(e)+c),0>f?b[1]=f-c:0>g&&(b[1]=
Math.abs(g)+c),0===b[0]&&0===b[1])||(c=a.$().Ba(),c=a.Ka(c),b=[c[0]+b[0],c[1]+b[1]],a.$().animate({center:a.Za(b),duration:this.l.duration,easing:this.l.easing}))}}};k.wl=function(){vk(this)};k.Gi=function(a){this.set(qk,a)};k.setMap=function(a){this.set(rk,a)};k.Ni=function(a){this.set(sk,a)};k.Wf=function(a){this.set(tk,a)};function wk(a,b){var c=a.getBoundingClientRect(),d=c.left+window.pageXOffset,c=c.top+window.pageYOffset;return[d,c,d+b[0],c+b[1]]}k.Qi=function(a){this.set(uk,a)};
function xk(a,b){a.a.visible!==b&&(a.c.style.display=b?"":"none",a.a.visible=b)}
function vk(a){var b=a.Ge(),c=a.Kh();if(b&&b.a&&c){var c=b.Ka(c),d=b.Mb(),b=a.c.style,e=a.qh(),f=a.rh(),g=e[0],e=e[1];if("bottom-right"==f||"center-right"==f||"top-right"==f)""!==a.a.Ce&&(a.a.Ce=b.left=""),g=Math.round(d[0]-c[0]-g)+"px",a.a.bf!=g&&(a.a.bf=b.right=g);else{""!==a.a.bf&&(a.a.bf=b.right="");if("bottom-center"==f||"center-center"==f||"top-center"==f)g-=a.c.offsetWidth/2;g=Math.round(c[0]+g)+"px";a.a.Ce!=g&&(a.a.Ce=b.left=g)}if("bottom-left"==f||"bottom-center"==f||"bottom-right"==f)""!==
a.a.kf&&(a.a.kf=b.top=""),c=Math.round(d[1]-c[1]-e)+"px",a.a.me!=c&&(a.a.me=b.bottom=c);else{""!==a.a.me&&(a.a.me=b.bottom="");if("center-left"==f||"center-center"==f||"center-right"==f)e-=a.c.offsetHeight/2;c=Math.round(c[1]+e)+"px";a.a.kf!=c&&(a.a.kf=b.top=c)}xk(a,!0)}else xk(a,!1)}var qk="element",rk="map",sk="offset",tk="position",uk="positioning";function yk(a){a=a?a:{};this.l=void 0!==a.collapsed?a.collapsed:!0;this.j=void 0!==a.collapsible?a.collapsible:!0;this.j||(this.l=!1);var b=void 0!==a.className?a.className:"ol-overviewmap",c=void 0!==a.tipLabel?a.tipLabel:"Overview map",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00ab";"string"===typeof d?(this.o=document.createElement("span"),this.o.textContent=d):this.o=d;d=void 0!==a.label?a.label:"\u00bb";"string"===typeof d?(this.u=document.createElement("span"),this.u.textContent=d):this.u=
d;var e=this.j&&!this.l?this.o:this.u,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);B(d,"click",this.Em,this);this.C=document.createElement("DIV");this.C.className="ol-overviewmap-map";var f=this.c=new G({controls:new D,interactions:new D,view:a.view});a.layers&&a.layers.forEach(function(a){f.Sg(a)},this);c=document.createElement("DIV");c.className="ol-overviewmap-box";c.style.boxSizing="border-box";this.A=new pk({position:[0,0],positioning:"bottom-left",
element:c});this.c.Tg(this.A);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.l&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible");c.appendChild(this.C);c.appendChild(d);ad.call(this,{element:c,render:a.render?a.render:zk,target:a.target})}u(yk,ad);k=yk.prototype;
k.setMap=function(a){var b=this.a;a!==b&&(b&&((b=b.$())&&xc(b,Ic("rotation"),this.Ae,this),this.c.Fe(null)),ad.prototype.setMap.call(this,a),a&&(this.c.Fe(this.C),this.v.push(B(a,"propertychange",this.ql,this)),this.c.Jh().ec()||this.c.Li(a.Jc()),a=a.$()))&&(B(a,Ic("rotation"),this.Ae,this),Yf(a)&&(this.c.xd(),Ak(this)))};k.ql=function(a){"view"===a.key&&((a=a.oldValue)&&xc(a,Ic("rotation"),this.Ae,this),a=this.a.$(),B(a,Ic("rotation"),this.Ae,this))};k.Ae=function(){this.c.$().He(this.a.$().Va())};
function zk(){var a=this.a,b=this.c;if(a.a&&b.a){var c=a.Mb(),a=a.$().ed(c),d=b.Mb(),c=b.$().ed(d),e=b.Ka(eb(a)),f=b.Ka(cb(a)),b=Math.abs(e[0]-f[0]),e=Math.abs(e[1]-f[1]),f=d[0],d=d[1];b<.1*f||e<.1*d||b>.75*f||e>.75*d?Ak(this):Ta(c,a)||(a=this.c,c=this.a.$(),a.$().wb(c.Ba()))}Bk(this)}function Ak(a){var b=a.a;a=a.c;var c=b.Mb(),b=b.$().ed(c);a=a.$();nb(b,1/(.1*Math.pow(2,Math.log(7.5)/Math.LN2/2)));a.Ff(b)}
function Bk(a){var b=a.a,c=a.c;if(b.a&&c.a){var d=b.Mb(),e=b.$(),f=c.$(),c=e.Va(),b=a.A,g=a.A.se(),h=e.ed(d),d=f.Ua(),e=bb(h),f=db(h),l;if(a=a.a.$().Ba())l=[e[0]-a[0],e[1]-a[1]],Ve(l,c),Qe(l,a);b.Wf(l);g&&(g.style.width=Math.abs((e[0]-f[0])/d)+"px",g.style.height=Math.abs((f[1]-e[1])/d)+"px")}}k.Em=function(a){a.preventDefault();Ck(this)};
function Ck(a){a.element.classList.toggle("ol-collapsed");a.l?Yc(a.o,a.u):Yc(a.u,a.o);a.l=!a.l;var b=a.c;a.l||b.a||(b.xd(),Ak(a),wc(b,"postrender",function(){Bk(this)},a))}k.Dm=function(){return this.j};k.Gm=function(a){this.j!==a&&(this.j=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.l&&Ck(this))};k.Fm=function(a){this.j&&this.l!==a&&Ck(this)};k.Cm=function(){return this.l};k.Mk=function(){return this.c};function Dk(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-scale-line";this.j=document.createElement("DIV");this.j.className=b+"-inner";this.c=document.createElement("DIV");this.c.className=b+" ol-unselectable";this.c.appendChild(this.j);this.u=null;this.o=void 0!==a.minWidth?a.minWidth:64;this.l=!1;this.C=void 0;this.A="";ad.call(this,{element:this.c,render:a.render?a.render:Ek,target:a.target});B(this,Ic(Fk),this.R,this);this.G(a.units||"metric")}u(Dk,ad);var Gk=[1,2,5];
Dk.prototype.Jb=function(){return this.get(Fk)};function Ek(a){(a=a.frameState)?this.u=a.viewState:this.u=null;Hk(this)}Dk.prototype.R=function(){Hk(this)};Dk.prototype.G=function(a){this.set(Fk,a)};
function Hk(a){var b=a.u;if(b){var c=b.projection,d=c.sc(),b=Eb(c,b.resolution,b.center)*d,d=a.o*b,c="",e=a.Jb();"degrees"==e?(c=vb.degrees,b/=c,d<c/60?(c="\u2033",b*=3600):d<c?(c="\u2032",b*=60):c="\u00b0"):"imperial"==e?.9144>d?(c="in",b/=.0254):1609.344>d?(c="ft",b/=.3048):(c="mi",b/=1609.344):"nautical"==e?(b/=1852,c="nm"):"metric"==e?1>d?(c="mm",b*=1E3):1E3>d?c="m":(c="km",b/=1E3):"us"==e?.9144>d?(c="in",b*=39.37):1609.344>d?(c="ft",b/=.30480061):(c="mi",b/=1609.3472):qa(!1,33);for(var e=3*Math.floor(Math.log(a.o*
b)/Math.log(10)),f;;){f=Gk[(e%3+3)%3]*Math.pow(10,Math.floor(e/3));d=Math.round(f/b);if(isNaN(d)){a.c.style.display="none";a.l=!1;return}if(d>=a.o)break;++e}b=f+" "+c;a.A!=b&&(a.j.innerHTML=b,a.A=b);a.C!=d&&(a.j.style.width=d+"px",a.C=d);a.l||(a.c.style.display="",a.l=!0)}else a.l&&(a.c.style.display="none",a.l=!1)}var Fk="units";function Ik(a){a=a?a:{};this.c=void 0;this.l=Jk;this.A=this.o=0;this.R=null;this.ea=!1;this.Y=void 0!==a.duration?a.duration:200;var b=void 0!==a.className?a.className:"ol-zoomslider",c=document.createElement("button");c.setAttribute("type","button");c.className=b+"-thumb ol-unselectable";var d=document.createElement("div");d.className=b+" ol-unselectable ol-control";d.appendChild(c);this.j=new re(d);B(this.j,"pointerdown",this.el,this);B(this.j,"pointermove",this.cl,this);B(this.j,"pointerup",this.dl,
this);B(d,"click",this.bl,this);B(c,"click",Cc);ad.call(this,{element:d,render:a.render?a.render:Kk})}u(Ik,ad);Ik.prototype.ra=function(){Ac(this.j);ad.prototype.ra.call(this)};var Jk=0;k=Ik.prototype;k.setMap=function(a){ad.prototype.setMap.call(this,a);a&&a.render()};
function Kk(a){if(a.frameState){if(!this.ea){var b=this.element,c=b.offsetWidth,d=b.offsetHeight,e=b.firstElementChild,f=getComputedStyle(e),b=e.offsetWidth+parseFloat(f.marginRight)+parseFloat(f.marginLeft),e=e.offsetHeight+parseFloat(f.marginTop)+parseFloat(f.marginBottom);this.R=[b,e];c>d?(this.l=1,this.A=c-b):(this.l=Jk,this.o=d-e);this.ea=!0}a=a.frameState.viewState.resolution;a!==this.c&&(this.c=a,Lk(this,a))}}
k.bl=function(a){var b=this.a.$();a=Mk(this,wa(1===this.l?(a.offsetX-this.R[0]/2)/this.A:(a.offsetY-this.R[1]/2)/this.o,0,1));b.animate({resolution:b.constrainResolution(a),duration:this.Y,easing:fd})};k.el=function(a){this.u||a.b.target!==this.element.firstElementChild||(Rf(this.a.$(),1,1),this.C=a.clientX,this.G=a.clientY,this.u=!0)};
k.cl=function(a){if(this.u){var b=this.element.firstElementChild;this.c=Mk(this,wa(1===this.l?(a.clientX-this.C+parseInt(b.style.left,10))/this.A:(a.clientY-this.G+parseInt(b.style.top,10))/this.o,0,1));this.a.$().Xc(this.c);Lk(this,this.c);this.C=a.clientX;this.G=a.clientY}};k.dl=function(){if(this.u){var a=this.a.$();Rf(a,1,-1);a.animate({resolution:a.constrainResolution(this.c),duration:this.Y,easing:fd});this.u=!1;this.G=this.C=void 0}};
function Lk(a,b){var c;c=1-Xf(a.a.$())(b);var d=a.element.firstElementChild;1==a.l?d.style.left=a.A*c+"px":d.style.top=a.o*c+"px"}function Mk(a,b){return Wf(a.a.$())(1-b)};function Nk(a){a=a?a:{};this.c=a.extent?a.extent:null;var b=void 0!==a.className?a.className:"ol-zoom-extent",c=void 0!==a.label?a.label:"E",d=void 0!==a.tipLabel?a.tipLabel:"Fit to extent",e=document.createElement("button");e.setAttribute("type","button");e.title=d;e.appendChild("string"===typeof c?document.createTextNode(c):c);B(e,"click",this.l,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(e);ad.call(this,{element:c,target:a.target})}u(Nk,ad);
Nk.prototype.l=function(a){a.preventDefault();a=this.a.$();var b=this.c?this.c:a.o.D();a.Ff(b)};function Ok(a){Gc.call(this);a=a?a:{};this.a=null;B(this,Ic(Pk),this.cm,this);this.Uf(void 0!==a.tracking?a.tracking:!1)}u(Ok,Gc);k=Ok.prototype;k.ra=function(){this.Uf(!1);Gc.prototype.ra.call(this)};
k.qo=function(a){if(null!==a.alpha){var b=Ba(a.alpha);this.set(Qk,b);"boolean"===typeof a.absolute&&a.absolute?this.set(Rk,b):"number"===typeof a.webkitCompassHeading&&-1!=a.webkitCompassAccuracy&&this.set(Rk,Ba(a.webkitCompassHeading))}null!==a.beta&&this.set(Sk,Ba(a.beta));null!==a.gamma&&this.set(Tk,Ba(a.gamma));this.s()};k.jk=function(){return this.get(Qk)};k.mk=function(){return this.get(Sk)};k.uk=function(){return this.get(Tk)};k.bm=function(){return this.get(Rk)};k.Fh=function(){return this.get(Pk)};
k.cm=function(){if(Nd){var a=this.Fh();a&&!this.a?this.a=B(window,"deviceorientation",this.qo,this):a||null===this.a||(rc(this.a),this.a=null)}};k.Uf=function(a){this.set(Pk,a)};var Qk="alpha",Sk="beta",Tk="gamma",Rk="heading",Pk="tracking";function Uk(a){this.g=a.opacity;this.o=a.rotateWithView;this.l=a.rotation;this.c=a.scale;this.v=a.snapToPixel}k=Uk.prototype;k.Pe=function(){return this.g};k.Qe=function(){return this.o};k.Re=function(){return this.l};k.Se=function(){return this.c};k.ve=function(){return this.v};k.rd=function(a){this.g=a};k.Te=function(a){this.l=a};k.sd=function(a){this.c=a};function Vk(a){this.A=this.I=this.i=null;this.Wa=void 0!==a.fill?a.fill:null;this.qa=[0,0];this.b=a.points;this.a=void 0!==a.radius?a.radius:a.radius1;this.f=void 0!==a.radius2?a.radius2:this.a;this.j=void 0!==a.angle?a.angle:0;this.Ya=void 0!==a.stroke?a.stroke:null;this.G=this.ta=this.C=null;this.u=a.atlasManager;Wk(this,this.u);Uk.call(this,{opacity:1,rotateWithView:void 0!==a.rotateWithView?a.rotateWithView:!1,rotation:void 0!==a.rotation?a.rotation:0,scale:1,snapToPixel:void 0!==a.snapToPixel?
a.snapToPixel:!0})}u(Vk,Uk);k=Vk.prototype;k.clone=function(){var a=new Vk({fill:this.Ca()?this.Ca().clone():void 0,points:this.f!==this.a?this.b/2:this.b,radius:this.a,radius2:this.f,angle:this.j,snapToPixel:this.v,stroke:this.Da()?this.Da().clone():void 0,rotation:this.l,rotateWithView:this.o,atlasManager:this.u});a.rd(this.g);a.sd(this.c);return a};k.Hc=function(){return this.C};k.ki=function(){return this.j};k.Ca=function(){return this.Wa};k.cg=function(){return this.A};k.Z=function(){return this.I};
k.ue=function(){return this.G};k.Oe=function(){return 2};k.Pc=function(){return this.qa};k.li=function(){return this.b};k.mi=function(){return this.a};k.sh=function(){return this.f};k.jc=function(){return this.ta};k.Da=function(){return this.Ya};k.zh=function(){};k.load=function(){};k.Yi=function(){};
function Wk(a,b){var c,d="",e="",f=0,g=null,h,l=0;a.Ya&&(h=Vc(a.Ya.a),l=a.Ya.c,void 0===l&&(l=1),g=a.Ya.f,Ld||(g=null),e=a.Ya.l,void 0===e&&(e="round"),d=a.Ya.i,void 0===d&&(d="round"),f=a.Ya.j,void 0===f&&(f=10));var m=2*(a.a+l)+1,d={strokeStyle:h,Vi:l,size:m,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};void 0===b?(e=Xc(m,m),a.I=e.canvas,c=m=a.I.width,a.ah(d,e,0,0),a.Wa?a.A=a.I:(e=Xc(d.size,d.size),a.A=e.canvas,a.$g(d,e,0,0))):(m=Math.round(m),(e=!a.Wa)&&(c=a.$g.bind(a,d)),a.Ya?(f=a.Ya,void 0===
f.b&&(f.b="s",f.b=f.a?"string"===typeof f.a?f.b+f.a:f.b+w(f.a).toString():f.b+"-",f.b+=","+(void 0!==f.i?f.i.toString():"-")+","+(f.f?f.f.toString():"-")+","+(void 0!==f.g?f.g:"-")+","+(void 0!==f.l?f.l:"-")+","+(void 0!==f.j?f.j.toString():"-")+","+(void 0!==f.c?f.c.toString():"-")),f=f.b):f="-",a.Wa?(g=a.Wa,void 0===g.a&&(g.a=g.b instanceof CanvasPattern||g.b instanceof CanvasGradient?w(g.b).toString():"f"+(g.b?Sc(g.b):"-")),g=g.a):g="-",a.i&&f==a.i[1]&&g==a.i[2]&&a.a==a.i[3]&&a.f==a.i[4]&&a.j==
a.i[5]&&a.b==a.i[6]||(a.i=["r"+f+g+(void 0!==a.a?a.a.toString():"-")+(void 0!==a.f?a.f.toString():"-")+(void 0!==a.j?a.j.toString():"-")+(void 0!==a.b?a.b.toString():"-"),f,g,a.a,a.f,a.j,a.b]),d=b.add(a.i[0],m,m,a.ah.bind(a,d),c),a.I=d.image,a.qa=[d.offsetX,d.offsetY],c=d.image.width,a.A=e?d.Fl:a.I);a.C=[m/2,m/2];a.ta=[m,m];a.G=[c,c]}
k.ah=function(a,b,c,d){var e;b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else for(this.f!==this.a&&(this.b*=2),c=0;c<=this.b;c++)d=2*c*Math.PI/this.b-Math.PI/2+this.j,e=c%2?this.f:this.a,b.lineTo(a.size/2+e*Math.cos(d),a.size/2+e*Math.sin(d));this.Wa&&(b.fillStyle=Vc(this.Wa.b),b.fill());this.Ya&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.Vi,a.lineDash&&b.setLineDash(a.lineDash),b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,
b.miterLimit=a.miterLimit,b.stroke());b.closePath()};
k.$g=function(a,b,c,d){b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else{this.f!==this.a&&(this.b*=2);var e;for(c=0;c<=this.b;c++)e=2*c*Math.PI/this.b-Math.PI/2+this.j,d=c%2?this.f:this.a,b.lineTo(a.size/2+d*Math.cos(e),a.size/2+d*Math.sin(e))}b.fillStyle=Mh;b.fill();this.Ya&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.Vi,a.lineDash&&b.setLineDash(a.lineDash),b.stroke());b.closePath()};function Xk(a){a=a||{};Vk.call(this,{points:Infinity,fill:a.fill,radius:a.radius,snapToPixel:a.snapToPixel,stroke:a.stroke,atlasManager:a.atlasManager})}u(Xk,Vk);Xk.prototype.clone=function(){var a=new Xk({fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,radius:this.a,snapToPixel:this.v,atlasManager:this.u});a.rd(this.g);a.sd(this.c);return a};Xk.prototype.Wc=function(a){this.a=a;Wk(this,this.u)};function Yk(a){a=a||{};this.b=void 0!==a.color?a.color:null;this.a=void 0}Yk.prototype.clone=function(){var a=this.b;return new Yk({color:a&&a.slice?a.slice():a||void 0})};Yk.prototype.f=function(){return this.b};Yk.prototype.c=function(a){this.b=a;this.a=void 0};function Zk(a){a=a||{};this.Gc=null;this.Ra=$k;void 0!==a.geometry&&this.Sa(a.geometry);this.Wa=void 0!==a.fill?a.fill:null;this.M=void 0!==a.image?a.image:null;this.Ya=void 0!==a.stroke?a.stroke:null;this.Fa=void 0!==a.text?a.text:null;this.kj=a.zIndex}k=Zk.prototype;
k.clone=function(){var a=this.U();a&&a.clone&&(a=a.clone());return new Zk({geometry:a,fill:this.Ca()?this.Ca().clone():void 0,image:this.Z()?this.Z().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,text:this.Pa()?this.Pa().clone():void 0,zIndex:this.za()})};k.U=function(){return this.Gc};k.vk=function(){return this.Ra};k.Ca=function(){return this.Wa};k.cf=function(a){this.Wa=a};k.Z=function(){return this.M};k.zg=function(a){this.M=a};k.Da=function(){return this.Ya};
k.df=function(a){this.Ya=a};k.Pa=function(){return this.Fa};k.ef=function(a){this.Fa=a};k.za=function(){return this.kj};k.Sa=function(a){"function"===typeof a?this.Ra=a:"string"===typeof a?this.Ra=function(b){return b.get(a)}:a?a&&(this.Ra=function(){return a}):this.Ra=$k;this.Gc=a};k.Wb=function(a){this.kj=a};function al(a){if("function"!==typeof a){var b;Array.isArray(a)?b=a:(qa(a instanceof Zk,41),b=[a]);a=function(){return b}}return a}var bl=null;
function cl(){if(!bl){var a=new Yk({color:"rgba(255,255,255,0.4)"}),b=new qj({color:"#3399CC",width:1.25});bl=[new Zk({image:new Xk({fill:a,stroke:b,radius:5}),fill:a,stroke:b})]}return bl}
function dl(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new Zk({fill:new Yk({color:[255,255,255,.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new Zk({stroke:new qj({color:b,width:5})}),new Zk({stroke:new qj({color:c,width:3})})];a.MultiLineString=a.LineString;a.Circle=a.Polygon.concat(a.LineString);a.Point=[new Zk({image:new Xk({radius:6,fill:new Yk({color:c}),stroke:new qj({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.LineString,
a.Point);return a}function $k(a){return a.U()};function H(a){Gc.call(this);this.a=void 0;this.c="geometry";this.g=null;this.l=void 0;this.i=null;B(this,Ic(this.c),this.ye,this);void 0!==a&&(a instanceof cf||!a?this.Sa(a):this.H(a))}u(H,Gc);k=H.prototype;k.clone=function(){var a=new H(this.N());a.Vc(this.c);var b=this.U();b&&a.Sa(b.clone());(b=this.g)&&a.Vf(b);return a};k.U=function(){return this.get(this.c)};k.dm=function(){return this.a};k.wk=function(){return this.c};k.em=function(){return this.g};k.Nc=function(){return this.l};k.gl=function(){this.s()};
k.ye=function(){this.i&&(rc(this.i),this.i=null);var a=this.U();a&&(this.i=B(a,"change",this.gl,this));this.s()};k.Sa=function(a){this.set(this.c,a)};k.Vf=function(a){this.l=(this.g=a)?el(a):void 0;this.s()};k.kc=function(a){this.a=a;this.s()};k.Vc=function(a){xc(this,Ic(this.c),this.ye,this);this.c=a;B(this,Ic(this.c),this.ye,this);this.ye()};
function el(a){var b;if("function"===typeof a)2==a.length?b=function(b){return a(this,b)}:b=a;else{var c;Array.isArray(a)?c=a:(qa(a instanceof Zk,41),c=[a]);b=function(){return c}}return b};var fl=document.implementation.createDocument("","",null);function hl(a,b){return fl.createElementNS(a,b)}function il(a,b){return jl(a,b,[]).join("")}function jl(a,b,c){if(a.nodeType==Node.CDATA_SECTION_NODE||a.nodeType==Node.TEXT_NODE)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;a;a=a.nextSibling)jl(a,b,c);return c}function kl(a){return a instanceof Document}function ll(a){return a instanceof Node}
function ml(a){return(new DOMParser).parseFromString(a,"application/xml")}function nl(a,b){return function(c,d){var e=a.call(b,c,d);void 0!==e&&ga(d[d.length-1],e)}}function pl(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&d[d.length-1].push(e)}}function ql(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&(d[d.length-1]=e)}}
function rl(a){return function(b,c){var d=a.call(this,b,c);if(void 0!==d){var e=c[c.length-1],f=b.localName,g;f in e?g=e[f]:g=e[f]=[];g.push(d)}}}function I(a,b){return function(c,d){var e=a.call(this,c,d);void 0!==e&&(d[d.length-1][void 0!==b?b:c.localName]=e)}}function J(a,b){return function(c,d,e){a.call(void 0!==b?b:this,c,d,e);e[e.length-1].node.appendChild(c)}}
function sl(a){var b,c;return function(d,e,f){if(!b){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=tl(d.localName)}ul(b,c,e,f)}}function tl(a,b){return function(c,d,e){c=d[d.length-1].node;d=a;void 0===d&&(d=e);e=b;void 0===b&&(e=c.namespaceURI);return hl(e,d)}}var vl=tl();function wl(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}function K(a,b,c){c=void 0!==c?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}
function xl(a,b,c,d){for(b=b.firstElementChild;b;b=b.nextElementSibling){var e=a[b.namespaceURI];void 0!==e&&(e=e[b.localName])&&e.call(d,b,c)}}function L(a,b,c,d,e){d.push(a);xl(b,c,d,e);return d.pop()}function ul(a,b,c,d,e,f){for(var g=(void 0!==e?e:c).length,h,l,m=0;m<g;++m)h=c[m],void 0!==h&&(l=b.call(f,h,d,void 0!==e?e[m]:void 0),void 0!==l&&a[l.namespaceURI][l.localName].call(f,l,h,d))}function yl(a,b,c,d,e,f,g){e.push(a);ul(b,c,d,e,f,g);e.pop()};function zl(a,b,c,d){return function(e,f,g){var h=new XMLHttpRequest;h.open("GET","function"===typeof a?a(e,f,g):a,!0);"arraybuffer"==b.T()&&(h.responseType="arraybuffer");h.onload=function(){if(!h.status||200<=h.status&&300>h.status){var a=b.T(),e;"json"==a||"text"==a?e=h.responseText:"xml"==a?(e=h.responseXML)||(e=ml(h.responseText)):"arraybuffer"==a&&(e=h.response);e?c.call(this,b.Qa(e,{featureProjection:g}),b.kb(e)):d.call(this)}else d.call(this)}.bind(this);h.send()}}
function Al(a,b){return zl(a,b,function(a){this.dd(a)},na)};function Bl(){this.g=this.defaultDataProjection=null}function Cl(a,b,c){var d;c&&(d={dataProjection:c.dataProjection?c.dataProjection:a.kb(b),featureProjection:c.featureProjection});return Dl(a,d)}function Dl(a,b){return pb({dataProjection:a.defaultDataProjection,featureProjection:a.g},b)}
function El(a,b,c){var d=c?Gb(c.featureProjection):null,e=c?Gb(c.dataProjection):null,f;d&&e&&!Tb(d,e)?a instanceof cf?f=(b?a.clone():a).tb(b?d:e,b?e:d):f=Xb(b?a.slice():a,b?d:e,b?e:d):f=a;if(b&&c&&c.decimals){var g=Math.pow(10,c.decimals);a=function(a){for(var b=0,c=a.length;b<c;++b)a[b]=Math.round(a[b]*g)/g;return a};Array.isArray(f)?a(f):f.Dc(a)}return f};function Fl(){Bl.call(this)}u(Fl,Bl);function Gl(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null}k=Fl.prototype;k.T=function(){return"json"};k.Ub=function(a,b){return this.Sc(Gl(a),Cl(this,a,b))};k.Qa=function(a,b){return this.kg(Gl(a),Cl(this,a,b))};k.Tc=function(a,b){return this.og(Gl(a),Cl(this,a,b))};k.kb=function(a){return this.rg(Gl(a))};k.yd=function(a,b){return JSON.stringify(this.ad(a,b))};k.Xb=function(a,b){return JSON.stringify(this.ce(a,b))};
k.bd=function(a,b){return JSON.stringify(this.ee(a,b))};function Hl(a,b,c,d,e,f){var g=NaN,h=NaN,l=(c-b)/d;if(1===l)g=a[b],h=a[b+1];else if(2==l)g=(1-e)*a[b]+e*a[b+d],h=(1-e)*a[b+1]+e*a[b+d+1];else if(l){var h=a[b],l=a[b+1],m=0,g=[0],p;for(p=b+d;p<c;p+=d){var n=a[p],q=a[p+1],m=m+Math.sqrt((n-h)*(n-h)+(q-l)*(q-l));g.push(m);h=n;l=q}c=e*m;l=0;m=g.length;for(p=!1;l<m;)e=l+(m-l>>1),h=+da(g[e],c),0>h?l=e+1:(m=e,p=!h);e=p?l:~l;0>e?(c=(c-g[-e-2])/(g[-e-1]-g[-e-2]),b+=(-e-2)*d,g=Da(a[b],a[b+d],c),h=Da(a[b+1],a[b+d+1],c)):(g=a[b+e*d],h=a[b+e*d+1])}return f?(f[0]=
g,f[1]=h,f):[g,h]}function Il(a,b,c,d,e,f){if(c==b)return null;if(e<a[b+d-1])return f?(c=a.slice(b,b+d),c[d-1]=e,c):null;if(a[c-1]<e)return f?(c=a.slice(c-d,c),c[d-1]=e,c):null;if(e==a[b+d-1])return a.slice(b,b+d);b/=d;for(c/=d;b<c;)f=b+c>>1,e<a[(f+1)*d-1]?c=f:b=f+1;c=a[b*d-1];if(e==c)return a.slice((b-1)*d,(b-1)*d+d);f=(e-c)/(a[(b+1)*d-1]-c);c=[];var g;for(g=0;g<d-1;++g)c.push(Da(a[(b-1)*d+g],a[b*d+g],f));c.push(e);return c}
function Jl(a,b,c,d,e,f){var g=0;if(f)return Il(a,g,b[b.length-1],c,d,e);if(d<a[c-1])return e?(a=a.slice(0,c),a[c-1]=d,a):null;if(a[a.length-1]<d)return e?(a=a.slice(a.length-c),a[c-1]=d,a):null;e=0;for(f=b.length;e<f;++e){var h=b[e];if(g!=h){if(d<a[g+c-1])break;else if(d<=a[h-1])return Il(a,g,h,c,d,!1);g=h}}return null};function M(a,b){ff.call(this);this.c=null;this.u=this.A=this.l=-1;this.pa(a,b)}u(M,ff);k=M.prototype;k.Tj=function(a){this.B?ga(this.B,a):this.B=a.slice();this.s()};k.clone=function(){var a=new M(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.u!=this.f&&(this.A=Math.sqrt(nf(this.B,0,this.B.length,this.a,0)),this.u=this.f);return pf(this.B,0,this.B.length,this.a,this.A,!1,a,b,c,d)};
k.gk=function(a,b){return Ef(this.B,0,this.B.length,this.a,a,b)};k.Im=function(a,b){return"XYM"!=this.ka&&"XYZM"!=this.ka?null:Il(this.B,0,this.B.length,this.a,a,void 0!==b?b:!1)};k.X=function(){return uf(this.B,0,this.B.length,this.a)};k.hh=function(a,b){return Hl(this.B,0,this.B.length,this.a,a,b)};k.Jm=function(){var a=this.B,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.B.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};
function Yh(a){a.l!=a.f&&(a.c=a.hh(.5,a.c),a.l=a.f);return a.c}k.kd=function(a){var b=[];b.length=wf(this.B,0,this.B.length,this.a,a,b,0);a=new M(null);a.ca("XY",b);return a};k.T=function(){return"LineString"};k.Xa=function(a){return Ff(this.B,0,this.B.length,this.a,a)};k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function N(a,b){ff.call(this);this.c=[];this.l=this.u=-1;this.pa(a,b)}u(N,ff);k=N.prototype;k.Uj=function(a){this.B?ga(this.B,a.ha().slice()):this.B=a.ha().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new N(null);a.ca(this.ka,this.B.slice(),this.c.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;this.l!=this.f&&(this.u=Math.sqrt(of(this.B,0,this.c,this.a,0)),this.l=this.f);return qf(this.B,0,this.c,this.a,this.u,!1,a,b,c,d)};
k.Lm=function(a,b,c){return"XYM"!=this.ka&&"XYZM"!=this.ka||!this.B.length?null:Jl(this.B,this.c,this.a,a,void 0!==b?b:!1,void 0!==c?c:!1)};k.X=function(){return vf(this.B,0,this.c,this.a)};k.Rb=function(){return this.c};k.Dk=function(a){if(0>a||this.c.length<=a)return null;var b=new M(null);b.ca(this.ka,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};
k.hd=function(){var a=this.B,b=this.c,c=this.ka,d=[],e=0,f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],l=new M(null);l.ca(c,a.slice(e,h));d.push(l);e=h}return d};function Zh(a){var b=[],c=a.B,d=0,e=a.c;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=Hl(c,d,h,a,.5);ga(b,d);d=h}return b}k.kd=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a,g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var p=e[l],h=wf(d,g,p,f,a,b,h);c.push(h);g=p}b.length=h;a=new N(null);a.ca("XY",b,c);return a};k.T=function(){return"MultiLineString"};
k.Xa=function(a){a:{var b=this.B,c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){if(Ff(b,e,c[f],d,a)){a=!0;break a}e=c[f]}a=!1}return a};k.pa=function(a,b){if(a){jf(this,b,a,2);this.B||(this.B=[]);var c=tf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){hf(this,a,b);this.c=c;this.s()};
function Kl(a,b){var c=a.ka,d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];f||(c=h.ka);ga(d,h.ha());e.push(d.length)}a.ca(c,d,e)};function O(a,b){ff.call(this);this.pa(a,b)}u(O,ff);k=O.prototype;k.Wj=function(a){this.B?ga(this.B,a.ha()):this.B=a.ha().slice();this.s()};k.clone=function(){var a=new O(null);a.ca(this.ka,this.B.slice());return a};k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;var e=this.B,f=this.a,g,h,l;g=0;for(h=e.length;g<h;g+=f)if(l=Aa(a,b,e[g],e[g+1]),l<d){d=l;for(l=0;l<f;++l)c[l]=e[g+l];c.length=f}return d};k.X=function(){return uf(this.B,0,this.B.length,this.a)};
k.Ok=function(a){var b=this.B?this.B.length/this.a:0;if(0>a||b<=a)return null;b=new E(null);b.ca(this.ka,this.B.slice(a*this.a,(a+1)*this.a));return b};k.Ie=function(){var a=this.B,b=this.ka,c=this.a,d=[],e,f;e=0;for(f=a.length;e<f;e+=c){var g=new E(null);g.ca(b,a.slice(e,e+c));d.push(g)}return d};k.T=function(){return"MultiPoint"};k.Xa=function(a){var b=this.B,c=this.a,d,e,f,g;d=0;for(e=b.length;d<e;d+=c)if(f=b[d],g=b[d+1],Sa(a,f,g))return!0;return!1};
k.pa=function(a,b){a?(jf(this,b,a,1),this.B||(this.B=[]),this.B.length=sf(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){hf(this,a,b);this.s()};function P(a,b){ff.call(this);this.c=[];this.u=-1;this.A=null;this.R=this.C=this.G=-1;this.l=null;this.pa(a,b)}u(P,ff);k=P.prototype;k.Xj=function(a){if(this.B){var b=this.B.length;ga(this.B,a.ha());a=a.Rb().slice();var c,d;c=0;for(d=a.length;c<d;++c)a[c]+=b}else this.B=a.ha().slice(),a=a.Rb().slice(),this.c.push();this.c.push(a);this.s()};k.clone=function(){for(var a=new P(null),b=this.c.length,c=Array(b),d=0;d<b;++d)c[d]=this.c[d].slice();Ll(a,this.ka,this.B.slice(),c);return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;if(this.C!=this.f){var e=this.c,f=0,g=0,h,l;h=0;for(l=e.length;h<l;++h)var m=e[h],g=of(this.B,f,m,this.a,g),f=m[m.length-1];this.G=Math.sqrt(g);this.C=this.f}e=$h(this);f=this.c;g=this.a;h=this.G;l=0;var m=[NaN,NaN],p,n;p=0;for(n=f.length;p<n;++p){var q=f[p];d=qf(e,l,q,g,h,!0,a,b,c,d,m);l=q[q.length-1]}return d};
k.Oc=function(a,b){var c;a:{c=$h(this);var d=this.c,e=0;if(d.length){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];if(Cf(c,e,h,this.a,a,b)){c=!0;break a}e=h[h.length-1]}}c=!1}return c};k.Mm=function(){var a=$h(this),b=this.c,c=0,d=0,e,f;e=0;for(f=b.length;e<f;++e)var g=b[e],d=d+lf(a,c,g,this.a),c=g[g.length-1];return d};
k.X=function(a){var b;void 0!==a?(b=$h(this).slice(),Kf(b,this.c,this.a,a)):b=this.B;a=b;b=this.c;var c=this.a,d=0,e=[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];e[f++]=vf(a,d,l,c,e[f]);d=l[l.length-1]}e.length=f;return e};
function ai(a){if(a.u!=a.f){var b=a.B,c=a.c,d=a.a,e=0,f=[],g,h;g=0;for(h=c.length;g<h;++g){var l=c[g],e=Xa(b,e,l[0],d);f.push((e[0]+e[2])/2,(e[1]+e[3])/2);e=l[l.length-1]}b=$h(a);c=a.c;d=a.a;g=0;h=[];l=0;for(e=c.length;l<e;++l){var m=c[l];h=Df(b,g,m,d,f,2*l,h);g=m[m.length-1]}a.A=h;a.u=a.f}return a.A}k.zk=function(){var a=new O(null);a.ca("XY",ai(this).slice());return a};
function $h(a){if(a.R!=a.f){var b=a.B,c;a:{c=a.c;var d,e;d=0;for(e=c.length;d<e;++d)if(!If(b,c[d],a.a,void 0)){c=!1;break a}c=!0}c?a.l=b:(a.l=b.slice(),a.l.length=Kf(a.l,a.c,a.a));a.R=a.f}return a.l}k.kd=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a;a=Math.sqrt(a);var g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var p=e[l],n=[],h=xf(d,g,p,f,a,b,h,n);c.push(n);g=p[p.length-1]}b.length=h;d=new P(null);Ll(d,"XY",b,c);return d};
k.Pk=function(a){if(0>a||this.c.length<=a)return null;var b;a?(b=this.c[a-1],b=b[b.length-1]):b=0;a=this.c[a].slice();var c=a[a.length-1];if(b){var d,e;d=0;for(e=a.length;d<e;++d)a[d]-=b}d=new F(null);d.ca(this.ka,this.B.slice(b,c),a);return d};k.Od=function(){var a=this.ka,b=this.B,c=this.c,d=[],e=0,f,g,h,l;f=0;for(g=c.length;f<g;++f){var m=c[f].slice(),p=m[m.length-1];if(e)for(h=0,l=m.length;h<l;++h)m[h]-=e;h=new F(null);h.ca(a,b.slice(e,p),m);d.push(h);e=p}return d};k.T=function(){return"MultiPolygon"};
k.Xa=function(a){a:{var b=$h(this),c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];if(Gf(b,e,h,d,a)){a=!0;break a}e=h[h.length-1]}a=!1}return a};k.pa=function(a,b){if(a){jf(this,b,a,3);this.B||(this.B=[]);var c=this.B,d=this.a,e=this.c,f=0,e=e?e:[],g=0,h,l;h=0;for(l=a.length;h<l;++h)f=tf(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;e.length?(c=e[e.length-1],this.B.length=c.length?c[c.length-1]:0):this.B.length=0;this.s()}else Ll(this,"XY",null,this.c)};
function Ll(a,b,c,d){hf(a,b,c);a.c=d;a.s()}function Ml(a,b){var c=a.ka,d=[],e=[],f,g,h;f=0;for(g=b.length;f<g;++f){var l=b[f];f||(c=l.ka);var m=d.length;h=l.Rb();var p,n;p=0;for(n=h.length;p<n;++p)h[p]+=m;ga(d,l.ha());e.push(h)}Ll(a,c,d,e)};function Nl(a){a=a?a:{};Bl.call(this);this.b=a.geometryName}u(Nl,Fl);
function Ol(a,b){if(!a)return null;var c;if("number"===typeof a.x&&"number"===typeof a.y)c="Point";else if(a.points)c="MultiPoint";else if(a.paths)c=1===a.paths.length?"LineString":"MultiLineString";else if(a.rings){var d=a.rings,e=Pl(a),f=[],g=[];c=[];var h,l;h=0;for(l=d.length;h<l;++h)f.length=0,sf(f,0,d[h],e.length),Hf(f,0,f.length,e.length)?g.push([d[h]]):c.push(d[h]);for(;c.length;){d=c.shift();e=!1;for(h=g.length-1;0<=h;h--)if(Ta((new yf(g[h][0])).D(),(new yf(d)).D())){g[h].push(d);e=!0;break}e||
g.push([d.reverse()])}a=pb({},a);1===g.length?(c="Polygon",a.rings=g[0]):(c="MultiPolygon",a.rings=g)}return El((0,Ql[c])(a),!1,b)}function Pl(a){var b="XY";!0===a.hasZ&&!0===a.hasM?b="XYZM":!0===a.hasZ?b="XYZ":!0===a.hasM&&(b="XYM");return b}function Rl(a){a=a.ka;return{hasZ:"XYZ"===a||"XYZM"===a,hasM:"XYM"===a||"XYZM"===a}}
var Ql={Point:function(a){return void 0!==a.m&&void 0!==a.z?new E([a.x,a.y,a.z,a.m],"XYZM"):void 0!==a.z?new E([a.x,a.y,a.z],"XYZ"):void 0!==a.m?new E([a.x,a.y,a.m],"XYM"):new E([a.x,a.y])},LineString:function(a){return new M(a.paths[0],Pl(a))},Polygon:function(a){return new F(a.rings,Pl(a))},MultiPoint:function(a){return new O(a.points,Pl(a))},MultiLineString:function(a){return new N(a.paths,Pl(a))},MultiPolygon:function(a){return new P(a.rings,Pl(a))}},Sl={Point:function(a){var b=a.X(),c;a=a.ka;
"XYZ"===a?c={x:b[0],y:b[1],z:b[2]}:"XYM"===a?c={x:b[0],y:b[1],m:b[2]}:"XYZM"===a?c={x:b[0],y:b[1],z:b[2],m:b[3]}:"XY"===a?c={x:b[0],y:b[1]}:qa(!1,34);return c},LineString:function(a){var b=Rl(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:[a.X()]}},Polygon:function(a){var b=Rl(a);return{hasZ:b.hasZ,hasM:b.hasM,rings:a.X(!1)}},MultiPoint:function(a){var b=Rl(a);return{hasZ:b.hasZ,hasM:b.hasM,points:a.X()}},MultiLineString:function(a){var b=Rl(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:a.X()}},MultiPolygon:function(a){var b=
Rl(a);a=a.X(!1);for(var c=[],d=0;d<a.length;d++)for(var e=a[d].length-1;0<=e;e--)c.push(a[d][e]);return{hasZ:b.hasZ,hasM:b.hasM,rings:c}}};k=Nl.prototype;k.Sc=function(a,b){var c=Ol(a.geometry,b),d=new H;this.b&&d.Vc(this.b);d.Sa(c);b&&b.Rf&&a.attributes[b.Rf]&&d.kc(a.attributes[b.Rf]);a.attributes&&d.H(a.attributes);return d};
k.kg=function(a,b){var c=b?b:{};if(a.features){var d=[],e=a.features,f,g;c.Rf=a.objectIdFieldName;f=0;for(g=e.length;f<g;++f)d.push(this.Sc(e[f],c));return d}return[this.Sc(a,c)]};k.og=function(a,b){return Ol(a,b)};k.rg=function(a){return a.spatialReference&&a.spatialReference.wkid?Gb("EPSG:"+a.spatialReference.wkid):null};function Tl(a,b){return(0,Sl[a.T()])(El(a,!0,b),b)}k.ee=function(a,b){return Tl(a,Dl(this,b))};
k.ad=function(a,b){b=Dl(this,b);var c={},d=a.U();d&&(c.geometry=Tl(d,b));d=a.N();delete d[a.c];c.attributes=sb(d)?{}:d;b&&b.featureProjection&&(c.spatialReference={wkid:Gb(b.featureProjection).nb.split(":").pop()});return c};k.ce=function(a,b){b=Dl(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.ad(a[d],b));return{features:c}};function Ul(a){this.Bc=a};function Vl(a,b){this.Bc=a;this.b=Array.prototype.slice.call(arguments,1);qa(2<=this.b.length,57)}u(Vl,Ul);function Wl(a){var b=["And"].concat(Array.prototype.slice.call(arguments));Vl.apply(this,b)}u(Wl,Vl);function Xl(a,b,c){this.Bc="BBOX";this.geometryName=a;this.extent=b;this.srsName=c}u(Xl,Ul);function Yl(a,b){this.Bc=a;this.b=b}u(Yl,Ul);function Zl(a,b,c,d){Yl.call(this,a,b);this.f=c;this.a=d}u(Zl,Yl);function $l(a,b,c){Zl.call(this,"PropertyIsEqualTo",a,b,c)}u($l,Zl);function am(a,b){Zl.call(this,"PropertyIsGreaterThan",a,b)}u(am,Zl);function bm(a,b){Zl.call(this,"PropertyIsGreaterThanOrEqualTo",a,b)}u(bm,Zl);function cm(a,b,c,d){this.Bc=a;this.geometryName=b||"the_geom";this.geometry=c;this.srsName=d}u(cm,Ul);function dm(a,b,c){cm.call(this,"Intersects",a,b,c)}u(dm,cm);function em(a,b,c){Yl.call(this,"PropertyIsBetween",a);this.a=b;this.f=c}u(em,Yl);function fm(a,b,c,d,e,f){Yl.call(this,"PropertyIsLike",a);this.c=b;this.g=void 0!==c?c:"*";this.i=void 0!==d?d:".";this.f=void 0!==e?e:"!";this.a=f}u(fm,Yl);function gm(a){Yl.call(this,"PropertyIsNull",a)}u(gm,Yl);function hm(a,b){Zl.call(this,"PropertyIsLessThan",a,b)}u(hm,Zl);function im(a,b){Zl.call(this,"PropertyIsLessThanOrEqualTo",a,b)}u(im,Zl);function jm(a){this.Bc="Not";this.condition=a}u(jm,Ul);function km(a,b,c){Zl.call(this,"PropertyIsNotEqualTo",a,b,c)}u(km,Zl);function lm(a){var b=["Or"].concat(Array.prototype.slice.call(arguments));Vl.apply(this,b)}u(lm,Vl);function mm(a,b,c){cm.call(this,"Within",a,b,c)}u(mm,cm);function nm(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(Wl,b))}function om(a,b,c){return new Xl(a,b,c)};function pm(a){cf.call(this);this.a=a?a:null;qm(this)}u(pm,cf);function rm(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].clone());return b}function sm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)xc(a.a[b],"change",a.s,a)}function qm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)B(a.a[b],"change",a.s,a)}k=pm.prototype;k.clone=function(){var a=new pm(null);a.Ji(this.a);return a};
k.Gb=function(a,b,c,d){if(d<Oa(this.D(),a,b))return d;var e=this.a,f,g;f=0;for(g=e.length;f<g;++f)d=e[f].Gb(a,b,c,d);return d};k.Oc=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].Oc(a,b))return!0;return!1};k.ne=function(a){Va(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c)$a(a,b[c].D());return a};k.If=function(){return rm(this.a)};
k.Qd=function(a){this.j!=this.f&&(qb(this.i),this.g=0,this.j=this.f);if(0>a||this.g&&a<this.g)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=[],d=this.a,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],l=h.Qd(a);c.push(l);l!==h&&(e=!0)}if(e)return a=new pm(null),sm(a),a.a=c,qm(a),a.s(),this.i[b]=a;this.g=a;return this};k.T=function(){return"GeometryCollection"};k.Xa=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c].Xa(a))return!0;return!1};
k.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.s()};k.scale=function(a,b,c){c||(c=jb(this.D()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.s()};k.Ji=function(a){a=rm(a);sm(this);this.a=a;qm(this);this.s()};k.Dc=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].Dc(a);this.s()};k.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.s()};k.ra=function(){sm(this);cf.prototype.ra.call(this)};function tm(a){a=a?a:{};Bl.call(this);this.defaultDataProjection=Gb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326");a.featureProjection&&(this.g=Gb(a.featureProjection));this.b=a.geometryName}u(tm,Fl);function um(a,b){return a?El((0,vm[a.type])(a),!1,b):null}function wm(a,b){return(0,xm[a.T()])(El(a,!0,b),b)}
var vm={Point:function(a){return new E(a.coordinates)},LineString:function(a){return new M(a.coordinates)},Polygon:function(a){return new F(a.coordinates)},MultiPoint:function(a){return new O(a.coordinates)},MultiLineString:function(a){return new N(a.coordinates)},MultiPolygon:function(a){return new P(a.coordinates)},GeometryCollection:function(a,b){var c=a.geometries.map(function(a){return um(a,b)});return new pm(c)}},xm={Point:function(a){return{type:"Point",coordinates:a.X()}},LineString:function(a){return{type:"LineString",
coordinates:a.X()}},Polygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"Polygon",coordinates:a.X(c)}},MultiPoint:function(a){return{type:"MultiPoint",coordinates:a.X()}},MultiLineString:function(a){return{type:"MultiLineString",coordinates:a.X()}},MultiPolygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"MultiPolygon",coordinates:a.X(c)}},GeometryCollection:function(a,b){return{type:"GeometryCollection",geometries:a.a.map(function(a){var c=pb({},b);delete c.featureProjection;return wm(a,
c)})}},Circle:function(){return{type:"GeometryCollection",geometries:[]}}};k=tm.prototype;k.Sc=function(a,b){var c;c="Feature"===a.type?a:{type:"Feature",geometry:a};var d=um(c.geometry,b),e=new H;this.b&&e.Vc(this.b);e.Sa(d);void 0!==c.id&&e.kc(c.id);c.properties&&e.H(c.properties);return e};k.kg=function(a,b){var c;if("FeatureCollection"===a.type){c=[];var d=a.features,e,f;e=0;for(f=d.length;e<f;++e)c.push(this.Sc(d[e],b))}else c=[this.Sc(a,b)];return c};k.og=function(a,b){return um(a,b)};
k.rg=function(a){a=a.crs;var b;a?"name"==a.type?b=Gb(a.properties.name):"EPSG"==a.type?b=Gb("EPSG:"+a.properties.code):qa(!1,36):b=this.defaultDataProjection;return b};k.ad=function(a,b){b=Dl(this,b);var c={type:"Feature"},d=a.a;void 0!==d&&(c.id=d);(d=a.U())?c.geometry=wm(d,b):c.geometry=null;d=a.N();delete d[a.c];sb(d)?c.properties=null:c.properties=d;return c};k.ce=function(a,b){b=Dl(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.ad(a[d],b));return{type:"FeatureCollection",features:c}};
k.ee=function(a,b){return wm(a,Dl(this,b))};function ym(){this.f=new XMLSerializer;Bl.call(this)}u(ym,Bl);k=ym.prototype;k.T=function(){return"xml"};k.Ub=function(a,b){if(kl(a))return zm(this,a,b);if(ll(a))return this.jg(a,b);if("string"===typeof a){var c=ml(a);return zm(this,c,b)}return null};function zm(a,b,c){a=Am(a,b,c);return 0<a.length?a[0]:null}k.jg=function(){return null};k.Qa=function(a,b){if(kl(a))return Am(this,a,b);if(ll(a))return this.yc(a,b);if("string"===typeof a){var c=ml(a);return Am(this,c,b)}return[]};
function Am(a,b,c){var d=[];for(b=b.firstChild;b;b=b.nextSibling)b.nodeType==Node.ELEMENT_NODE&&ga(d,a.yc(b,c));return d}k.Tc=function(a,b){if(kl(a))return null;if(ll(a))return this.vi(a,b);"string"===typeof a&&ml(a);return null};k.vi=function(){return null};k.kb=function(a){return kl(a)?this.qg(a):ll(a)?this.Ze(a):"string"===typeof a?(a=ml(a),this.qg(a)):null};k.qg=function(){return this.defaultDataProjection};k.Ze=function(){return this.defaultDataProjection};
k.yd=function(a,b){return this.f.serializeToString(this.Fg(a,b))};k.Fg=function(){return null};k.Xb=function(a,b){var c=this.Yb(a,b);return this.f.serializeToString(c)};k.Yb=function(){return null};k.bd=function(a,b){var c=this.de(a,b);return this.f.serializeToString(c)};k.de=function(){return null};function Bm(a){a=a?a:{};this.featureType=a.featureType;this.featureNS=a.featureNS;this.srsName=a.srsName;this.schemaLocation="";this.b={};this.b["http://www.opengis.net/gml"]={featureMember:ql(Bm.prototype.Xd),featureMembers:ql(Bm.prototype.Xd)};ym.call(this)}u(Bm,ym);var Cm=/^[\s\xa0]*$/;k=Bm.prototype;
k.Xd=function(a,b){var c=a.localName,d=null;if("FeatureCollection"==c)"http://www.opengis.net/wfs"===a.namespaceURI?d=L([],this.b,a,b,this):d=L(null,this.b,a,b,this);else if("featureMembers"==c||"featureMember"==c){var e=b[0],f=e.featureType,g=e.featureNS,h,l;if(!f&&a.childNodes){f=[];g={};h=0;for(l=a.childNodes.length;h<l;++h){var m=a.childNodes[h];if(1===m.nodeType){var p=m.nodeName.split(":").pop();if(-1===f.indexOf(p)){var n="",q=0,m=m.namespaceURI,r;for(r in g){if(g[r]===m){n=r;break}++q}n||
(n="p"+q,g[n]=m);f.push(n+":"+p)}}}"featureMember"!=c&&(e.featureType=f,e.featureNS=g)}"string"===typeof g&&(h=g,g={},g.p0=h);var e={},f=Array.isArray(f)?f:[f],v;for(v in g){p={};h=0;for(l=f.length;h<l;++h)(-1===f[h].indexOf(":")?"p0":f[h].split(":")[0])===v&&(p[f[h].split(":").pop()]="featureMembers"==c?pl(this.ig,this):ql(this.ig,this));e[g[v]]=p}"featureMember"==c?d=L(void 0,e,a,b):d=L([],e,a,b)}null===d&&(d=[]);return d};
k.We=function(a,b){var c=b[0];c.srsName=a.firstElementChild.getAttribute("srsName");var d=L(null,this.Jg,a,b,this);if(d)return El(d,!1,c)};
k.ig=function(a,b){var c,d;(d=a.getAttribute("fid"))||(d=a.getAttributeNS("http://www.opengis.net/gml","id")||"");var e={},f;for(c=a.firstElementChild;c;c=c.nextElementSibling){var g=c.localName;if(0===c.childNodes.length||1===c.childNodes.length&&(3===c.firstChild.nodeType||4===c.firstChild.nodeType)){var h=il(c,!1);Cm.test(h)&&(h=void 0);e[g]=h}else"boundedBy"!==g&&(f=g),e[g]=this.We(c,b)}c=new H(e);f&&c.Vc(f);d&&c.kc(d);return c};
k.Ai=function(a,b){var c=this.Ve(a,b);if(c){var d=new E(null);d.ca("XYZ",c);return d}};k.yi=function(a,b){var c=L([],this.sj,a,b,this);if(c)return new O(c)};k.xi=function(a,b){var c=L([],this.rj,a,b,this);if(c){var d=new N(null);Kl(d,c);return d}};k.zi=function(a,b){var c=L([],this.tj,a,b,this);if(c){var d=new P(null);Ml(d,c);return d}};k.ri=function(a,b){xl(this.wj,a,b,this)};k.yh=function(a,b){xl(this.pj,a,b,this)};k.si=function(a,b){xl(this.xj,a,b,this)};
k.Xe=function(a,b){var c=this.Ve(a,b);if(c){var d=new M(null);d.ca("XYZ",c);return d}};k.Lo=function(a,b){var c=L(null,this.fe,a,b,this);if(c)return c};k.wi=function(a,b){var c=this.Ve(a,b);if(c){var d=new yf(null);zf(d,"XYZ",c);return d}};k.Ye=function(a,b){var c=L([null],this.qf,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ga(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.Ve=function(a,b){return L(null,this.fe,a,b,this)};
k.sj={"http://www.opengis.net/gml":{pointMember:pl(Bm.prototype.ri),pointMembers:pl(Bm.prototype.ri)}};k.rj={"http://www.opengis.net/gml":{lineStringMember:pl(Bm.prototype.yh),lineStringMembers:pl(Bm.prototype.yh)}};k.tj={"http://www.opengis.net/gml":{polygonMember:pl(Bm.prototype.si),polygonMembers:pl(Bm.prototype.si)}};k.wj={"http://www.opengis.net/gml":{Point:pl(Bm.prototype.Ve)}};k.pj={"http://www.opengis.net/gml":{LineString:pl(Bm.prototype.Xe)}};k.xj={"http://www.opengis.net/gml":{Polygon:pl(Bm.prototype.Ye)}};
k.ge={"http://www.opengis.net/gml":{LinearRing:ql(Bm.prototype.Lo)}};k.vi=function(a,b){var c=this.We(a,[Cl(this,a,b?b:{})]);return c?c:null};k.yc=function(a,b){var c={featureType:this.featureType,featureNS:this.featureNS};b&&pb(c,Cl(this,a,b));return this.Xd(a,[c])||[]};k.Ze=function(a){return Gb(this.srsName?this.srsName:a.firstElementChild.getAttribute("srsName"))};function Dm(a){a=il(a,!1);return Em(a)}function Em(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0!==a[1]||!1}function Fm(a){a=il(a,!1);a=Date.parse(a);return isNaN(a)?void 0:a/1E3}function Gm(a){a=il(a,!1);return Hm(a)}function Hm(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function Im(a){a=il(a,!1);return Jm(a)}function Jm(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function Q(a){return il(a,!1).trim()}
function Km(a,b){Lm(a,b?"1":"0")}function Mm(a,b){a.appendChild(fl.createTextNode(b.toPrecision()))}function Nm(a,b){a.appendChild(fl.createTextNode(b.toString()))}function Lm(a,b){a.appendChild(fl.createTextNode(b))};function Om(a){a=a?a:{};Bm.call(this,a);this.o=void 0!==a.surface?a.surface:!1;this.i=void 0!==a.curve?a.curve:!1;this.l=void 0!==a.multiCurve?a.multiCurve:!0;this.j=void 0!==a.multiSurface?a.multiSurface:!0;this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}u(Om,Bm);k=Om.prototype;k.Po=function(a,b){var c=L([],this.qj,a,b,this);if(c){var d=new N(null);Kl(d,c);return d}};
k.Qo=function(a,b){var c=L([],this.uj,a,b,this);if(c){var d=new P(null);Ml(d,c);return d}};k.Zg=function(a,b){xl(this.mj,a,b,this)};k.Wi=function(a,b){xl(this.Bj,a,b,this)};k.To=function(a,b){return L([null],this.vj,a,b,this)};k.Wo=function(a,b){return L([null],this.Aj,a,b,this)};k.Uo=function(a,b){return L([null],this.qf,a,b,this)};k.Oo=function(a,b){return L([null],this.fe,a,b,this)};k.Jl=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&b[b.length-1].push(c)};
k.ck=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&(b[b.length-1][0]=c)};k.Bi=function(a,b){var c=L([null],this.Cj,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ga(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.ti=function(a,b){var c=L([null],this.nj,a,b,this);if(c){var d=new M(null);d.ca("XYZ",c);return d}};k.Ko=function(a,b){var c=L([null],this.oj,a,b,this);return Va(c[1][0],c[1][1],c[2][0],c[2][1])};
k.Mo=function(a,b){for(var c=il(a,!1),d=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,e=[],f;f=d.exec(c);)e.push(parseFloat(f[1])),c=c.substr(f[0].length);if(""===c){c=b[0].srsName;d="enu";c&&(d=Gb(c).b);if("neu"===d)for(c=0,d=e.length;c<d;c+=3)f=e[c],e[c]=e[c+1],e[c+1]=f;c=e.length;2==c&&e.push(0);if(c)return e}};
k.ng=function(a,b){var c=il(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e=a.parentNode.getAttribute("srsDimension"),f="enu";d&&(f=Gb(d).b);c=c.split(/\s+/);d=2;a.getAttribute("srsDimension")?d=Jm(a.getAttribute("srsDimension")):a.getAttribute("dimension")?d=Jm(a.getAttribute("dimension")):e&&(d=Jm(e));for(var g,h,l=[],m=0,p=c.length;m<p;m+=d)e=parseFloat(c[m]),g=parseFloat(c[m+1]),h=3===d?parseFloat(c[m+2]):0,"en"===f.substr(0,2)?l.push(e,g,h):l.push(g,e,h);return l};
k.fe={"http://www.opengis.net/gml":{pos:ql(Om.prototype.Mo),posList:ql(Om.prototype.ng)}};k.qf={"http://www.opengis.net/gml":{interior:Om.prototype.Jl,exterior:Om.prototype.ck}};
k.Jg={"http://www.opengis.net/gml":{Point:ql(Bm.prototype.Ai),MultiPoint:ql(Bm.prototype.yi),LineString:ql(Bm.prototype.Xe),MultiLineString:ql(Bm.prototype.xi),LinearRing:ql(Bm.prototype.wi),Polygon:ql(Bm.prototype.Ye),MultiPolygon:ql(Bm.prototype.zi),Surface:ql(Om.prototype.Bi),MultiSurface:ql(Om.prototype.Qo),Curve:ql(Om.prototype.ti),MultiCurve:ql(Om.prototype.Po),Envelope:ql(Om.prototype.Ko)}};k.qj={"http://www.opengis.net/gml":{curveMember:pl(Om.prototype.Zg),curveMembers:pl(Om.prototype.Zg)}};
k.uj={"http://www.opengis.net/gml":{surfaceMember:pl(Om.prototype.Wi),surfaceMembers:pl(Om.prototype.Wi)}};k.mj={"http://www.opengis.net/gml":{LineString:pl(Bm.prototype.Xe),Curve:pl(Om.prototype.ti)}};k.Bj={"http://www.opengis.net/gml":{Polygon:pl(Bm.prototype.Ye),Surface:pl(Om.prototype.Bi)}};k.Cj={"http://www.opengis.net/gml":{patches:ql(Om.prototype.To)}};k.nj={"http://www.opengis.net/gml":{segments:ql(Om.prototype.Wo)}};k.oj={"http://www.opengis.net/gml":{lowerCorner:pl(Om.prototype.ng),upperCorner:pl(Om.prototype.ng)}};
k.vj={"http://www.opengis.net/gml":{PolygonPatch:ql(Om.prototype.Uo)}};k.Aj={"http://www.opengis.net/gml":{LineStringSegment:ql(Om.prototype.Oo)}};function Pm(a,b,c){c=c[c.length-1].srsName;b=b.X();for(var d=b.length,e=Array(d),f,g=0;g<d;++g){f=b[g];var h=g,l="enu";c&&(l=Gb(c).b);e[h]="en"===l.substr(0,2)?f[0]+" "+f[1]:f[1]+" "+f[0]}Lm(a,e.join(" "))}
k.hj=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=hl(a.namespaceURI,"pos");a.appendChild(d);c=c[c.length-1].srsName;a="enu";c&&(a=Gb(c).b);b=b.X();Lm(d,"en"===a.substr(0,2)?b[0]+" "+b[1]:b[1]+" "+b[0])};var Qm={"http://www.opengis.net/gml":{lowerCorner:J(Lm),upperCorner:J(Lm)}};k=Om.prototype;k.Jp=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);yl({node:a},Qm,vl,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"],this)};
k.ej=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=hl(a.namespaceURI,"posList");a.appendChild(d);Pm(d,b,c)};k.zj=function(a,b){var c=b[b.length-1],d=c.node,e=c.exteriorWritten;void 0===e&&(c.exteriorWritten=!0);return hl(d.namespaceURI,void 0!==e?"interior":"exterior")};
k.nf=function(a,b,c){var d=c[c.length-1].srsName;"PolygonPatch"!==a.nodeName&&d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.jd(),yl({node:a,srsName:d},Rm,this.zj,b,c,void 0,this)):"Surface"===a.nodeName&&(d=hl(a.namespaceURI,"patches"),a.appendChild(d),a=hl(d.namespaceURI,"PolygonPatch"),d.appendChild(a),this.nf(a,b,c))};
k.mf=function(a,b,c){var d=c[c.length-1].srsName;"LineStringSegment"!==a.nodeName&&d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=hl(a.namespaceURI,"posList"),a.appendChild(d),Pm(d,b,c)):"Curve"===a.nodeName&&(d=hl(a.namespaceURI,"segments"),a.appendChild(d),a=hl(d.namespaceURI,"LineStringSegment"),d.appendChild(a),this.mf(a,b,c))};
k.gj=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.surface;e&&a.setAttribute("srsName",e);b=b.Od();yl({node:a,srsName:e,surface:d},Sm,this.c,b,c,void 0,this)};k.Kp=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);b=b.Ie();yl({node:a,srsName:d},Tm,tl("pointMember"),b,c,void 0,this)};k.fj=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.curve;e&&a.setAttribute("srsName",e);b=b.hd();yl({node:a,srsName:e,curve:d},Um,this.c,b,c,void 0,this)};
k.ij=function(a,b,c){var d=hl(a.namespaceURI,"LinearRing");a.appendChild(d);this.ej(d,b,c)};k.jj=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.nf(d,b,c))};k.Lp=function(a,b,c){var d=hl(a.namespaceURI,"Point");a.appendChild(d);this.hj(d,b,c)};k.dj=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.mf(d,b,c))};
k.zd=function(a,b,c){var d=c[c.length-1],e=pb({},d);e.node=a;var f;Array.isArray(b)?d.dataProjection?f=Xb(b,d.featureProjection,d.dataProjection):f=b:f=El(b,!0,d);yl(e,Vm,this.a,[f],c,void 0,this)};
k.cj=function(a,b,c){var d=b.a;d&&a.setAttribute("fid",d);var d=c[c.length-1],e=d.featureNS,f=b.c;d.Uc||(d.Uc={},d.Uc[e]={});var g=b.N();b=[];var h=[],l;for(l in g){var m=g[l];null!==m&&(b.push(l),h.push(m),l==f||m instanceof cf?l in d.Uc[e]||(d.Uc[e][l]=J(this.zd,this)):l in d.Uc[e]||(d.Uc[e][l]=J(Lm)))}l=pb({},d);l.node=a;yl(l,d.Uc,tl(void 0,e),h,c,b)};
var Sm={"http://www.opengis.net/gml":{surfaceMember:J(Om.prototype.jj),polygonMember:J(Om.prototype.jj)}},Tm={"http://www.opengis.net/gml":{pointMember:J(Om.prototype.Lp)}},Um={"http://www.opengis.net/gml":{lineStringMember:J(Om.prototype.dj),curveMember:J(Om.prototype.dj)}},Rm={"http://www.opengis.net/gml":{exterior:J(Om.prototype.ij),interior:J(Om.prototype.ij)}},Vm={"http://www.opengis.net/gml":{Curve:J(Om.prototype.mf),MultiCurve:J(Om.prototype.fj),Point:J(Om.prototype.hj),MultiPoint:J(Om.prototype.Kp),
LineString:J(Om.prototype.mf),MultiLineString:J(Om.prototype.fj),LinearRing:J(Om.prototype.ej),Polygon:J(Om.prototype.nf),MultiPolygon:J(Om.prototype.gj),Surface:J(Om.prototype.nf),MultiSurface:J(Om.prototype.gj),Envelope:J(Om.prototype.Jp)}},Wm={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};Om.prototype.c=function(a,b){return hl("http://www.opengis.net/gml",Wm[b[b.length-1].node.nodeName])};
Om.prototype.a=function(a,b){var c=b[b.length-1],d=c.multiSurface,e=c.surface,f=c.curve,c=c.multiCurve,g;Array.isArray(a)?g="Envelope":(g=a.T(),"MultiPolygon"===g&&!0===d?g="MultiSurface":"Polygon"===g&&!0===e?g="Surface":"LineString"===g&&!0===f?g="Curve":"MultiLineString"===g&&!0===c&&(g="MultiCurve"));return hl("http://www.opengis.net/gml",g)};
Om.prototype.de=function(a,b){b=Dl(this,b);var c=hl("http://www.opengis.net/gml","geom"),d={node:c,srsName:this.srsName,curve:this.i,surface:this.o,multiSurface:this.j,multiCurve:this.l};b&&pb(d,b);this.zd(c,a,[d]);return c};
Om.prototype.Yb=function(a,b){b=Dl(this,b);var c=hl("http://www.opengis.net/gml","featureMembers");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var d={srsName:this.srsName,curve:this.i,surface:this.o,multiSurface:this.j,multiCurve:this.l,featureNS:this.featureNS,featureType:this.featureType};b&&pb(d,b);var d=[d],e=d[d.length-1],f=e.featureType,g=e.featureNS,h={};h[g]={};h[g][f]=J(this.cj,this);e=pb({},e);e.node=c;yl(e,h,tl(f,g),a,d);return c};function Xm(a){a=a?a:{};Bm.call(this,a);this.b["http://www.opengis.net/gml"].featureMember=pl(Bm.prototype.Xd);this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}u(Xm,Bm);k=Xm.prototype;
k.ui=function(a,b){var c=il(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e=a.parentNode.getAttribute("srsDimension"),f="enu";d&&(d=Gb(d))&&(f=d.b);c=c.split(/[\s,]+/);d=2;a.getAttribute("srsDimension")?d=Jm(a.getAttribute("srsDimension")):a.getAttribute("dimension")?d=Jm(a.getAttribute("dimension")):e&&(d=Jm(e));for(var g,h,l=[],m=0,p=c.length;m<p;m+=d)e=parseFloat(c[m]),g=parseFloat(c[m+1]),h=3===d?parseFloat(c[m+2]):0,"en"===f.substr(0,2)?l.push(e,g,h):l.push(g,e,h);return l};
k.Io=function(a,b){var c=L([null],this.lj,a,b,this);return Va(c[1][0],c[1][1],c[1][3],c[1][4])};k.Hl=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&b[b.length-1].push(c)};k.ro=function(a,b){var c=L(void 0,this.ge,a,b,this);c&&(b[b.length-1][0]=c)};k.fe={"http://www.opengis.net/gml":{coordinates:ql(Xm.prototype.ui)}};k.qf={"http://www.opengis.net/gml":{innerBoundaryIs:Xm.prototype.Hl,outerBoundaryIs:Xm.prototype.ro}};k.lj={"http://www.opengis.net/gml":{coordinates:pl(Xm.prototype.ui)}};
k.Jg={"http://www.opengis.net/gml":{Point:ql(Bm.prototype.Ai),MultiPoint:ql(Bm.prototype.yi),LineString:ql(Bm.prototype.Xe),MultiLineString:ql(Bm.prototype.xi),LinearRing:ql(Bm.prototype.wi),Polygon:ql(Bm.prototype.Ye),MultiPolygon:ql(Bm.prototype.zi),Box:ql(Xm.prototype.Io)}};function Ym(a){a=a?a:{};ym.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.readExtensions}u(Ym,ym);var Zm=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function $m(a,b,c,d){a.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(a.push(d.ele),delete d.ele,b.hasZ=!0):a.push(0);"time"in d?(a.push(d.time),delete d.time,b.hasM=!0):a.push(0);return a}
function an(a,b,c){var d="XY",e=2;a.hasZ&&a.hasM?(d="XYZM",e=4):a.hasZ?(d="XYZ",e=3):a.hasM&&(d="XYM",e=3);if(4!==e){var f,g;f=0;for(g=b.length/4;f<g;f++)b[f*e]=b[4*f],b[f*e+1]=b[4*f+1],a.hasZ&&(b[f*e+2]=b[4*f+2]),a.hasM&&(b[f*e+2]=b[4*f+3]);b.length=b.length/4*e;if(c)for(f=0,g=c.length;f<g;f++)c[f]=c[f]/4*e}return d}function bn(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);xl(cn,a,b)}function dn(a,b){b[b.length-1].extensionsNode_=a}
function en(a,b){var c=b[0],d=L({flatCoordinates:[],layoutOptions:{}},fn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.layoutOptions;delete d.layoutOptions;var f=an(f,e),g=new M(null);g.ca(f,e);El(g,!1,c);c=new H(g);c.H(d);return c}}
function gn(a,b){var c=b[0],d=L({flatCoordinates:[],ends:[],layoutOptions:{}},hn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.ends;delete d.ends;var g=d.layoutOptions;delete d.layoutOptions;var g=an(g,e,f),h=new N(null);h.ca(g,e,f);El(h,!1,c);c=new H(h);c.H(d);return c}}function jn(a,b){var c=b[0],d=L({},kn,a,b);if(d){var e={},f=$m([],e,a,d),e=an(e,f),f=new E(f,e);El(f,!1,c);c=new H(f);c.H(d);return c}}
var ln={rte:en,trk:gn,wpt:jn},mn=K(Zm,{rte:pl(en),trk:pl(gn),wpt:pl(jn)}),cn=K(Zm,{text:I(Q,"linkText"),type:I(Q,"linkType")}),fn=K(Zm,{name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:bn,number:I(Im),extensions:dn,type:I(Q),rtept:function(a,b){var c=L({},nn,a,b);if(c){var d=b[b.length-1];$m(d.flatCoordinates,d.layoutOptions,a,c)}}}),nn=K(Zm,{ele:I(Gm),time:I(Fm)}),hn=K(Zm,{name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:bn,number:I(Im),type:I(Q),extensions:dn,trkseg:function(a,b){var c=b[b.length-1];xl(on,
a,b);c.ends.push(c.flatCoordinates.length)}}),on=K(Zm,{trkpt:function(a,b){var c=L({},pn,a,b);if(c){var d=b[b.length-1];$m(d.flatCoordinates,d.layoutOptions,a,c)}}}),pn=K(Zm,{ele:I(Gm),time:I(Fm)}),kn=K(Zm,{ele:I(Gm),time:I(Fm),magvar:I(Gm),geoidheight:I(Gm),name:I(Q),cmt:I(Q),desc:I(Q),src:I(Q),link:bn,sym:I(Q),type:I(Q),fix:I(Q),sat:I(Im),hdop:I(Gm),vdop:I(Gm),pdop:I(Gm),ageofdgpsdata:I(Gm),dgpsid:I(Im),extensions:dn});
function qn(a,b){b||(b=[]);for(var c=0,d=b.length;c<d;++c){var e=b[c];if(a.b){var f=e.get("extensionsNode_")||null;a.b(e,f)}e.set("extensionsNode_",void 0)}}Ym.prototype.jg=function(a,b){if(!ea(Zm,a.namespaceURI))return null;var c=ln[a.localName];if(!c)return null;c=c(a,[Cl(this,a,b)]);if(!c)return null;qn(this,[c]);return c};Ym.prototype.yc=function(a,b){if(!ea(Zm,a.namespaceURI))return[];if("gpx"==a.localName){var c=L([],mn,a,[Cl(this,a,b)]);if(c)return qn(this,c),c}return[]};
function rn(a,b,c){a.setAttribute("href",b);b=c[c.length-1].properties;yl({node:a},sn,vl,[b.linkText,b.linkType],c,tn)}function un(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=d.properties;a.setAttributeNS(null,"lat",b[1]);a.setAttributeNS(null,"lon",b[0]);switch(d.geometryLayout){case "XYZM":b[3]&&(f.time=b[3]);case "XYZ":b[2]&&(f.ele=b[2]);break;case "XYM":b[2]&&(f.time=b[2])}b="rtept"==a.nodeName?vn[e]:wn[e];d=wl(f,b);yl({node:a,properties:f},xn,vl,d,c,b)}
var tn=["text","type"],sn=K(Zm,{text:J(Lm),type:J(Lm)}),yn=K(Zm,"name cmt desc src link number type rtept".split(" ")),zn=K(Zm,{name:J(Lm),cmt:J(Lm),desc:J(Lm),src:J(Lm),link:J(rn),number:J(Nm),type:J(Lm),rtept:sl(J(un))}),vn=K(Zm,["ele","time"]),An=K(Zm,"name cmt desc src link number type trkseg".split(" ")),Dn=K(Zm,{name:J(Lm),cmt:J(Lm),desc:J(Lm),src:J(Lm),link:J(rn),number:J(Nm),type:J(Lm),trkseg:sl(J(function(a,b,c){yl({node:a,geometryLayout:b.ka,properties:{}},Bn,Cn,b.X(),c)}))}),Cn=tl("trkpt"),
Bn=K(Zm,{trkpt:J(un)}),wn=K(Zm,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),xn=K(Zm,{ele:J(Mm),time:J(function(a,b){var c=new Date(1E3*b);a.appendChild(fl.createTextNode(c.getUTCFullYear()+"-"+Oe(c.getUTCMonth()+1)+"-"+Oe(c.getUTCDate())+"T"+Oe(c.getUTCHours())+":"+Oe(c.getUTCMinutes())+":"+Oe(c.getUTCSeconds())+"Z"))}),magvar:J(Mm),geoidheight:J(Mm),name:J(Lm),cmt:J(Lm),desc:J(Lm),src:J(Lm),link:J(rn),sym:J(Lm),type:J(Lm),fix:J(Lm),
sat:J(Nm),hdop:J(Mm),vdop:J(Mm),pdop:J(Mm),ageofdgpsdata:J(Mm),dgpsid:J(Nm)}),En={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function Fn(a,b){var c=a.U();if(c&&(c=En[c.T()]))return hl(b[b.length-1].node.namespaceURI,c)}
var Gn=K(Zm,{rte:J(function(a,b,c){var d=c[0],e=b.N();a={node:a,properties:e};if(b=b.U())b=El(b,!0,d),a.geometryLayout=b.ka,e.rtept=b.X();d=yn[c[c.length-1].node.namespaceURI];e=wl(e,d);yl(a,zn,vl,e,c,d)}),trk:J(function(a,b,c){var d=c[0],e=b.N();a={node:a,properties:e};if(b=b.U())b=El(b,!0,d),e.trkseg=b.hd();d=An[c[c.length-1].node.namespaceURI];e=wl(e,d);yl(a,Dn,vl,e,c,d)}),wpt:J(function(a,b,c){var d=c[0],e=c[c.length-1];e.properties=b.N();if(b=b.U())b=El(b,!0,d),e.geometryLayout=b.ka,un(a,b.X(),
c)})});Ym.prototype.Yb=function(a,b){b=Dl(this,b);var c=hl("http://www.topografix.com/GPX/1/1","gpx");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");c.setAttribute("version","1.1");c.setAttribute("creator","OpenLayers");yl({node:c},Gn,Fn,a,[b]);return c};function Hn(){Bl.call(this)}u(Hn,Bl);function In(a){return"string"===typeof a?a:""}k=Hn.prototype;k.T=function(){return"text"};k.Ub=function(a,b){return this.Wd(In(a),Dl(this,b))};k.Qa=function(a,b){return this.lg(In(a),Dl(this,b))};k.Tc=function(a,b){return this.ud(In(a),Dl(this,b))};k.kb=function(){return this.defaultDataProjection};k.yd=function(a,b){return this.be(a,Dl(this,b))};k.Xb=function(a,b){return this.Gg(a,Dl(this,b))};k.bd=function(a,b){return this.Ad(a,Dl(this,b))};function Jn(a){a=a?a:{};Bl.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.altitudeMode?a.altitudeMode:"none"}u(Jn,Hn);var Kn=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,Ln=/^H.([A-Z]{3}).*?:(.*)/,Mn=/^HFDTE(\d{2})(\d{2})(\d{2})/,Nn=/\r\n|\r|\n/;k=Jn.prototype;
k.Wd=function(a,b){var c=this.b,d=a.split(Nn),e={},f=[],g=2E3,h=0,l=1,m=-1,p,n;p=0;for(n=d.length;p<n;++p){var q=d[p],r;if("B"==q.charAt(0)){if(r=Kn.exec(q)){var q=parseInt(r[1],10),v=parseInt(r[2],10),x=parseInt(r[3],10),y=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(y=-y);var z=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(z=-z);f.push(z,y);"none"!=c&&f.push("gps"==c?parseInt(r[11],10):"barometric"==c?parseInt(r[12],10):0);r=Date.UTC(g,h,l,q,v,x);r<m&&(r=Date.UTC(g,h,l+1,q,v,x));f.push(r/
1E3);m=r}}else"H"==q.charAt(0)&&((r=Mn.exec(q))?(l=parseInt(r[1],10),h=parseInt(r[2],10)-1,g=2E3+parseInt(r[3],10)):(r=Ln.exec(q))&&(e[r[1]]=r[2].trim()))}if(!f.length)return null;d=new M(null);d.ca("none"==c?"XYM":"XYZM",f);c=new H(El(d,!1,b));c.H(e);return c};k.lg=function(a,b){var c=this.Wd(a,b);return c?[c]:[]};k.be=function(){};k.Gg=function(){};k.Ad=function(){};k.ud=function(){};function On(a,b,c,d,e,f){Dc.call(this);this.l=null;this.M=a?a:new Image;null!==d&&(this.M.crossOrigin=d);this.c=f?document.createElement("CANVAS"):null;this.g=f;this.i=null;this.f=e;this.a=c;this.j=b;this.o=!1;2==this.f&&Pn(this)}u(On,Dc);function Pn(a){var b=Xc(1,1);try{b.drawImage(a.M,0,0),b.getImageData(0,0,1,1)}catch(c){a.o=!0}}On.prototype.v=function(){this.f=3;this.i.forEach(rc);this.i=null;this.b("change")};
On.prototype.I=function(){this.f=2;this.a&&(this.M.width=this.a[0],this.M.height=this.a[1]);this.a=[this.M.width,this.M.height];this.i.forEach(rc);this.i=null;Pn(this);if(!this.o&&null!==this.g){this.c.width=this.M.width;this.c.height=this.M.height;var a=this.c.getContext("2d");a.drawImage(this.M,0,0);for(var b=a.getImageData(0,0,this.M.width,this.M.height),c=b.data,d=this.g[0]/255,e=this.g[1]/255,f=this.g[2]/255,g=0,h=c.length;g<h;g+=4)c[g]*=d,c[g+1]*=e,c[g+2]*=f;a.putImageData(b,0,0)}this.b("change")};
On.prototype.Z=function(){return this.c?this.c:this.M};On.prototype.load=function(){if(0==this.f){this.f=1;this.i=[wc(this.M,"error",this.v,this),wc(this.M,"load",this.I,this)];try{this.M.src=this.j}catch(a){this.v()}}};function Qn(a){a=a||{};this.j=void 0!==a.anchor?a.anchor:[.5,.5];this.I=null;this.a=void 0!==a.anchorOrigin?a.anchorOrigin:"top-left";this.C=void 0!==a.anchorXUnits?a.anchorXUnits:"fraction";this.G=void 0!==a.anchorYUnits?a.anchorYUnits:"fraction";this.ta=void 0!==a.crossOrigin?a.crossOrigin:null;var b=void 0!==a.img?a.img:null,c=void 0!==a.imgSize?a.imgSize:null,d=a.src;qa(!(void 0!==d&&b),4);qa(!b||b&&c,5);void 0!==d&&d.length||!b||(d=b.src||w(b).toString());qa(void 0!==d&&0<d.length,6);var e=void 0!==
a.src?0:2;this.i=void 0!==a.color?Qc(a.color):null;var f=this.ta,g=this.i,h=th.get(d,f,g);h||(h=new On(b,d,c,f,e,g),th.set(d,f,g,h));this.b=h;this.qa=void 0!==a.offset?a.offset:[0,0];this.f=void 0!==a.offsetOrigin?a.offsetOrigin:"top-left";this.u=null;this.A=void 0!==a.size?a.size:null;Uk.call(this,{opacity:void 0!==a.opacity?a.opacity:1,rotation:void 0!==a.rotation?a.rotation:0,scale:void 0!==a.scale?a.scale:1,snapToPixel:void 0!==a.snapToPixel?a.snapToPixel:!0,rotateWithView:void 0!==a.rotateWithView?
a.rotateWithView:!1})}u(Qn,Uk);k=Qn.prototype;
k.clone=function(){var a=this.Z(1),b;if(2===this.b.f)if("IMG"===a.tagName.toUpperCase())b=a.cloneNode(!0);else{b=document.createElement("canvas");var c=b.getContext("2d");b.width=a.width;b.height=a.height;c.drawImage(a,0,0)}return new Qn({anchor:this.j.slice(),anchorOrigin:this.a,anchorXUnits:this.C,anchorYUnits:this.G,crossOrigin:this.ta,color:this.i&&this.i.slice?this.i.slice():this.i||void 0,img:b?b:void 0,imgSize:b?this.b.a.slice():void 0,src:b?void 0:this.b.j,offset:this.qa.slice(),offsetOrigin:this.f,
size:null!==this.A?this.A.slice():void 0,opacity:this.g,scale:this.c,snapToPixel:this.v,rotation:this.l,rotateWithView:this.o})};
k.Hc=function(){if(this.I)return this.I;var a=this.j,b=this.jc();if("fraction"==this.C||"fraction"==this.G){if(!b)return null;a=this.j.slice();"fraction"==this.C&&(a[0]*=b[0]);"fraction"==this.G&&(a[1]*=b[1])}if("top-left"!=this.a){if(!b)return null;a===this.j&&(a=this.j.slice());if("top-right"==this.a||"bottom-right"==this.a)a[0]=-a[0]+b[0];if("bottom-left"==this.a||"bottom-right"==this.a)a[1]=-a[1]+b[1]}return this.I=a};k.Zn=function(){return this.i};k.Z=function(a){return this.b.Z(a)};k.ue=function(){return this.b.a};
k.Oe=function(){return this.b.f};k.cg=function(){var a=this.b;if(!a.l)if(a.o){var b=a.a[0],c=a.a[1],d=Xc(b,c);d.fillRect(0,0,b,c);a.l=d.canvas}else a.l=a.M;return a.l};k.Pc=function(){if(this.u)return this.u;var a=this.qa;if("top-left"!=this.f){var b=this.jc(),c=this.b.a;if(!b||!c)return null;a=a.slice();if("top-right"==this.f||"bottom-right"==this.f)a[0]=c[0]-b[0]-a[0];if("bottom-left"==this.f||"bottom-right"==this.f)a[1]=c[1]-b[1]-a[1]}return this.u=a};k.$n=function(){return this.b.j};
k.jc=function(){return this.A?this.A:this.b.a};k.zh=function(a,b){return B(this.b,"change",a,b)};k.load=function(){this.b.load()};k.Yi=function(a,b){xc(this.b,"change",a,b)};function Rn(a){a=a||{};this.a=a.font;this.i=a.rotation;this.j=a.rotateWithView;this.b=a.scale;this.Fa=a.text;this.g=a.textAlign;this.l=a.textBaseline;this.Wa=void 0!==a.fill?a.fill:new Yk({color:"#333"});this.Ya=void 0!==a.stroke?a.stroke:null;this.f=void 0!==a.offsetX?a.offsetX:0;this.c=void 0!==a.offsetY?a.offsetY:0}k=Rn.prototype;
k.clone=function(){return new Rn({font:this.a,rotation:this.i,rotateWithView:this.j,scale:this.b,text:this.Pa(),textAlign:this.g,textBaseline:this.l,fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,offsetX:this.f,offsetY:this.c})};k.tk=function(){return this.a};k.Ik=function(){return this.f};k.Jk=function(){return this.c};k.Ca=function(){return this.Wa};k.fo=function(){return this.j};k.ho=function(){return this.i};k.io=function(){return this.b};k.Da=function(){return this.Ya};
k.Pa=function(){return this.Fa};k.Tk=function(){return this.g};k.Uk=function(){return this.l};k.Ii=function(a){this.a=a};k.Oi=function(a){this.f=a};k.Pi=function(a){this.c=a};k.cf=function(a){this.Wa=a};k.jo=function(a){this.i=a};k.ni=function(a){this.b=a};k.df=function(a){this.Ya=a};k.ef=function(a){this.Fa=a};k.Ri=function(a){this.g=a};k.up=function(a){this.l=a};function Sn(a){a=a?a:{};ym.call(this);Tn||(Un=[255,255,255,1],Vn=new Yk({color:Un}),Wn=[20,2],Xn=Yn="pixels",Zn=[64,64],$n="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",ao=.5,bo=new Qn({anchor:Wn,anchorOrigin:"bottom-left",anchorXUnits:Yn,anchorYUnits:Xn,crossOrigin:"anonymous",rotation:0,scale:ao,size:Zn,src:$n}),co="NO_IMAGE",eo=new qj({color:Un,width:1}),fo=new qj({color:[51,51,51,1],width:2}),go=new Rn({font:"bold 16px Helvetica",fill:Vn,stroke:fo,scale:.8}),ho=new Zk({fill:Vn,
image:bo,text:go,stroke:eo,zIndex:0}),Tn=[ho]);this.defaultDataProjection=Gb("EPSG:4326");this.a=a.defaultStyle?a.defaultStyle:Tn;this.c=void 0!==a.extractStyles?a.extractStyles:!0;this.l=void 0!==a.writeStyles?a.writeStyles:!0;this.b={};this.i=void 0!==a.showPointNames?a.showPointNames:!0}var Tn,Un,Vn,Wn,Yn,Xn,Zn,$n,ao,bo,co,eo,fo,go,ho;u(Sn,ym);
var io=["http://www.google.com/kml/ext/2.2"],jo=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],ko={fraction:"fraction",pixels:"pixels"};
function lo(a,b){var c,d=[0,0],e="start";a.Z()&&(c=a.Z().ue(),null===c&&(c=Zn),2==c.length&&(e=a.Z().c,d[0]=e*c[0]/2,d[1]=-e*c[1]/2,e="left"));if(null!==a.Pa()){var f=a.Pa();c=f.clone();c.Ii(f.a||go.a);c.ni(f.b||go.b);c.cf(f.Ca()||go.Ca());c.df(f.Da()||fo)}else c=go.clone();c.ef(b);c.Oi(d[0]);c.Pi(d[1]);c.Ri(e);return new Zk({text:c})}
function mo(a,b,c,d,e){return function(){var f=e,g="";f&&this.U()&&(f="Point"===this.U().T());f&&(g=this.get("name"),f=f&&g);if(a)return f?(f=lo(a[0],g),a.concat(f)):a;if(b){var h=no(b,c,d);return f?(f=lo(h[0],g),h.concat(f)):h}return f?(f=lo(c[0],g),c.concat(f)):c}}function no(a,b,c){return Array.isArray(a)?a:"string"===typeof a?(!(a in c)&&"#"+a in c&&(a="#"+a),no(c[a],b,c)):b}
function oo(a){a=il(a,!1);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}function po(a){a=il(a,!1);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);if(""===a)return b}
function qo(a){var b=il(a,!1).trim();return a.baseURI?(new URL(b,a.baseURI)).href:b}function ro(a){return Gm(a)}function so(a,b){return L(null,to,a,b)}function uo(a,b){var c=L({B:[],bj:[]},vo,a,b);if(c){var d=c.B,c=c.bj,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new M(null);c.ca("XYZM",d);return c}}function wo(a,b){var c=L({},xo,a,b),d=L(null,yo,a,b);if(d){var e=new M(null);e.ca("XYZ",d);e.H(c);return e}}
function zo(a,b){var c=L({},xo,a,b),d=L(null,yo,a,b);if(d){var e=new F(null);e.ca("XYZ",d,[d.length]);e.H(c);return e}}
function Ao(a,b){var c=L([],Bo,a,b);if(!c)return null;if(!c.length)return new pm(c);var d,e=!0,f=c[0].T(),g,h,l;h=1;for(l=c.length;h<l;++h)if(g=c[h],g.T()!=f){e=!1;break}if(e)if("Point"==f){d=c[0];e=d.ka;f=d.ha();h=1;for(l=c.length;h<l;++h)g=c[h],ga(f,g.ha());d=new O(null);d.ca(e,f);Co(d,c)}else"LineString"==f?(d=new N(null),Kl(d,c),Co(d,c)):"Polygon"==f?(d=new P(null),Ml(d,c),Co(d,c)):"GeometryCollection"==f?d=new pm(c):qa(!1,37);else d=new pm(c);return d}
function Do(a,b){var c=L({},xo,a,b),d=L(null,yo,a,b);if(d){var e=new E(null);e.ca("XYZ",d);e.H(c);return e}}function Eo(a,b){var c=L({},xo,a,b),d=L([null],Fo,a,b);if(d&&d[0]){var e=new F(null),f=d[0],g=[f.length],h,l;h=1;for(l=d.length;h<l;++h)ga(f,d[h]),g.push(f.length);e.ca("XYZ",f,g);e.H(c);return e}}
function Go(a,b){var c=L({},Ho,a,b);if(!c)return null;var d="fillStyle"in c?c.fillStyle:Vn,e=c.fill;void 0===e||e||(d=null);e="imageStyle"in c?c.imageStyle:bo;e==co&&(e=void 0);var f="textStyle"in c?c.textStyle:go,g="strokeStyle"in c?c.strokeStyle:eo,c=c.outline;void 0===c||c||(g=null);return[new Zk({fill:d,image:e,stroke:g,text:f,zIndex:void 0})]}
function Co(a,b){var c=b.length,d=Array(b.length),e=Array(b.length),f,g,h,l;h=l=!1;for(g=0;g<c;++g)f=b[g],d[g]=f.get("extrude"),e[g]=f.get("altitudeMode"),h=h||void 0!==d[g],l=l||e[g];h&&a.set("extrude",d);l&&a.set("altitudeMode",e)}function Io(a,b){xl(Jo,a,b)}function Ko(a,b){xl(Lo,a,b)}
var Mo=K(jo,{displayName:I(Q),value:I(Q)}),Jo=K(jo,{Data:function(a,b){var c=a.getAttribute("name");xl(Mo,a,b);var d=b[b.length-1];null!==c?d[c]=d.value:null!==d.displayName&&(d[d.displayName]=d.value)},SchemaData:function(a,b){xl(No,a,b)}}),Lo=K(jo,{LatLonAltBox:function(a,b){var c=L({},Oo,a,b);if(c){var d=b[b.length-1];d.extent=[parseFloat(c.west),parseFloat(c.south),parseFloat(c.east),parseFloat(c.north)];d.altitudeMode=c.altitudeMode;d.minAltitude=parseFloat(c.minAltitude);d.maxAltitude=parseFloat(c.maxAltitude)}},
Lod:function(a,b){var c=L({},Po,a,b);if(c){var d=b[b.length-1];d.minLodPixels=parseFloat(c.minLodPixels);d.maxLodPixels=parseFloat(c.maxLodPixels);d.minFadeExtent=parseFloat(c.minFadeExtent);d.maxFadeExtent=parseFloat(c.maxFadeExtent)}}}),Oo=K(jo,{altitudeMode:I(Q),minAltitude:I(Gm),maxAltitude:I(Gm),north:I(Gm),south:I(Gm),east:I(Gm),west:I(Gm)}),Po=K(jo,{minLodPixels:I(Gm),maxLodPixels:I(Gm),minFadeExtent:I(Gm),maxFadeExtent:I(Gm)}),xo=K(jo,{extrude:I(Dm),altitudeMode:I(Q)}),to=K(jo,{coordinates:ql(po)}),
Fo=K(jo,{innerBoundaryIs:function(a,b){var c=L(void 0,Qo,a,b);c&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=L(void 0,Ro,a,b);c&&(b[b.length-1][0]=c)}}),vo=K(jo,{when:function(a,b){var c=b[b.length-1].bj,d=il(a,!1),d=Date.parse(d);c.push(isNaN(d)?0:d)}},K(io,{coord:function(a,b){var c=b[b.length-1].B,d=il(a,!1);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?c.push(parseFloat(d[1]),parseFloat(d[2]),
parseFloat(d[3]),0):c.push(0,0,0,0)}})),yo=K(jo,{coordinates:ql(po)}),So=K(jo,{href:I(qo)},K(io,{x:I(Gm),y:I(Gm),w:I(Gm),h:I(Gm)})),To=K(jo,{Icon:I(function(a,b){var c=L({},So,a,b);return c?c:null}),heading:I(Gm),hotSpot:I(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),Hg:ko[b],y:parseFloat(a.getAttribute("y")),Ig:ko[c]}}),scale:I(ro)}),Qo=K(jo,{LinearRing:ql(so)}),Uo=K(jo,{color:I(oo),scale:I(ro)}),Vo=K(jo,{color:I(oo),width:I(Gm)}),
Bo=K(jo,{LineString:pl(wo),LinearRing:pl(zo),MultiGeometry:pl(Ao),Point:pl(Do),Polygon:pl(Eo)}),Wo=K(io,{Track:pl(uo)}),Yo=K(jo,{ExtendedData:Io,Region:Ko,Link:function(a,b){xl(Xo,a,b)},address:I(Q),description:I(Q),name:I(Q),open:I(Dm),phoneNumber:I(Q),visibility:I(Dm)}),Xo=K(jo,{href:I(qo)}),Ro=K(jo,{LinearRing:ql(so)}),Zo=K(jo,{Style:I(Go),key:I(Q),styleUrl:I(qo)}),ap=K(jo,{ExtendedData:Io,Region:Ko,MultiGeometry:I(Ao,"geometry"),LineString:I(wo,"geometry"),LinearRing:I(zo,"geometry"),Point:I(Do,
"geometry"),Polygon:I(Eo,"geometry"),Style:I(Go),StyleMap:function(a,b){var c=L(void 0,$o,a,b);if(c){var d=b[b.length-1];Array.isArray(c)?d.Style=c:"string"===typeof c?d.styleUrl=c:qa(!1,38)}},address:I(Q),description:I(Q),name:I(Q),open:I(Dm),phoneNumber:I(Q),styleUrl:I(qo),visibility:I(Dm)},K(io,{MultiTrack:I(function(a,b){var c=L([],Wo,a,b);if(c){var d=new N(null);Kl(d,c);return d}},"geometry"),Track:I(uo,"geometry")})),bp=K(jo,{color:I(oo),fill:I(Dm),outline:I(Dm)}),No=K(jo,{SimpleData:function(a,
b){var c=a.getAttribute("name");if(null!==c){var d=Q(a);b[b.length-1][c]=d}}}),Ho=K(jo,{IconStyle:function(a,b){var c=L({},To,a,b);if(c){var d=b[b.length-1],e="Icon"in c?c.Icon:{},f=!("Icon"in c)||0<Object.keys(e).length,g,h=e.href;h?g=h:f&&(g=$n);var l,m,p;(h=c.hotSpot)?(l=[h.x,h.y],m=h.Hg,p=h.Ig):g===$n?(l=Wn,m=Yn,p=Xn):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(l=[.5,0],p=m="fraction");var n,h=e.x,q=e.y;void 0!==h&&void 0!==q&&(n=[h,q]);var r,h=e.w,e=e.h;void 0!==h&&void 0!==e&&(r=[h,
e]);var v,e=c.heading;void 0!==e&&(v=Ba(e));c=c.scale;f?(g==$n&&(r=Zn,void 0===c&&(c=ao)),f=new Qn({anchor:l,anchorOrigin:"bottom-left",anchorXUnits:m,anchorYUnits:p,crossOrigin:"anonymous",offset:n,offsetOrigin:"bottom-left",rotation:v,scale:c,size:r,src:g}),d.imageStyle=f):d.imageStyle=co}},LabelStyle:function(a,b){var c=L({},Uo,a,b);c&&(b[b.length-1].textStyle=new Rn({fill:new Yk({color:"color"in c?c.color:Un}),scale:c.scale}))},LineStyle:function(a,b){var c=L({},Vo,a,b);c&&(b[b.length-1].strokeStyle=
new qj({color:"color"in c?c.color:Un,width:"width"in c?c.width:1}))},PolyStyle:function(a,b){var c=L({},bp,a,b);if(c){var d=b[b.length-1];d.fillStyle=new Yk({color:"color"in c?c.color:Un});var e=c.fill;void 0!==e&&(d.fill=e);c=c.outline;void 0!==c&&(d.outline=c)}}}),$o=K(jo,{Pair:function(a,b){var c=L({},Zo,a,b);if(c){var d=c.key;d&&"normal"==d&&((d=c.styleUrl)&&(b[b.length-1]=d),(c=c.Style)&&(b[b.length-1]=c))}}});k=Sn.prototype;
k.hg=function(a,b){var c=K(jo,{Document:nl(this.hg,this),Folder:nl(this.hg,this),Placemark:pl(this.pg,this),Style:this.Yo.bind(this),StyleMap:this.Xo.bind(this)});if(c=L([],c,a,b,this))return c};k.pg=function(a,b){var c=L({geometry:null},ap,a,b);if(c){var d=new H,e=a.getAttribute("id");null!==e&&d.kc(e);var e=b[0],f=c.geometry;f&&El(f,!1,e);d.Sa(f);delete c.geometry;this.c&&d.Vf(mo(c.Style,c.styleUrl,this.a,this.b,this.i));delete c.Style;d.H(c);return d}};
k.Yo=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=Go(a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.Xo=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=L(void 0,$o,a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.jg=function(a,b){if(!ea(jo,a.namespaceURI))return null;var c=this.pg(a,[Cl(this,a,b)]);return c?c:null};
k.yc=function(a,b){if(!ea(jo,a.namespaceURI))return[];var c;c=a.localName;if("Document"==c||"Folder"==c)return(c=this.hg(a,[Cl(this,a,b)]))?c:[];if("Placemark"==c)return(c=this.pg(a,[Cl(this,a,b)]))?[c]:[];if("kml"==c){c=[];var d;for(d=a.firstElementChild;d;d=d.nextElementSibling){var e=this.yc(d,b);e&&ga(c,e)}return c}return[]};k.Ro=function(a){if(kl(a))return cp(this,a);if(ll(a))return dp(this,a);if("string"===typeof a)return a=ml(a),cp(this,a)};
function cp(a,b){var c;for(c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE){var d=dp(a,c);if(d)return d}}function dp(a,b){var c;for(c=b.firstElementChild;c;c=c.nextElementSibling)if(ea(jo,c.namespaceURI)&&"name"==c.localName)return Q(c);for(c=b.firstElementChild;c;c=c.nextElementSibling){var d=c.localName;if(ea(jo,c.namespaceURI)&&("Document"==d||"Folder"==d||"Placemark"==d||"kml"==d)&&(d=dp(a,c)))return d}}
k.So=function(a){var b=[];kl(a)?ga(b,ep(this,a)):ll(a)?ga(b,fp(this,a)):"string"===typeof a&&(a=ml(a),ga(b,ep(this,a)));return b};function ep(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ga(d,fp(a,c));return d}
function fp(a,b){var c,d=[];for(c=b.firstElementChild;c;c=c.nextElementSibling)if(ea(jo,c.namespaceURI)&&"NetworkLink"==c.localName){var e=L({},Yo,c,[]);d.push(e)}for(c=b.firstElementChild;c;c=c.nextElementSibling)e=c.localName,!ea(jo,c.namespaceURI)||"Document"!=e&&"Folder"!=e&&"kml"!=e||ga(d,fp(a,c));return d}k.Vo=function(a){var b=[];kl(a)?ga(b,gp(this,a)):ll(a)?ga(b,this.$e(a)):"string"===typeof a&&(a=ml(a),ga(b,gp(this,a)));return b};
function gp(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ga(d,a.$e(c));return d}k.$e=function(a){var b,c=[];for(b=a.firstElementChild;b;b=b.nextElementSibling)if(ea(jo,b.namespaceURI)&&"Region"==b.localName){var d=L({},Lo,b,[]);c.push(d)}for(b=a.firstElementChild;b;b=b.nextElementSibling)a=b.localName,!ea(jo,b.namespaceURI)||"Document"!=a&&"Folder"!=a&&"kml"!=a||ga(c,this.$e(b));return c};
function hp(a,b){var c=Qc(b),c=[255*(4==c.length?c[3]:1),c[2],c[1],c[0]],d;for(d=0;4>d;++d){var e=parseInt(c[d],10).toString(16);c[d]=1==e.length?"0"+e:e}Lm(a,c.join(""))}function ip(a,b,c){a={node:a};var d=b.T(),e,f;"GeometryCollection"==d?(e=b.If(),f=jp):"MultiPoint"==d?(e=b.Ie(),f=kp):"MultiLineString"==d?(e=b.hd(),f=lp):"MultiPolygon"==d?(e=b.Od(),f=mp):qa(!1,39);yl(a,np,f,e,c)}function op(a,b,c){yl({node:a},pp,qp,[b],c)}
function rp(a,b,c){var d={node:a};b.a&&a.setAttribute("id",b.a);a=b.N();var e={address:1,description:1,name:1,open:1,phoneNumber:1,styleUrl:1,visibility:1};e[b.c]=1;var f=Object.keys(a||{}).sort().filter(function(a){return!e[a]});if(0<f.length){var g=wl(a,f);yl(d,sp,tp,[{names:f,values:g}],c)}if(f=b.Nc())if(f=f.call(b,0))f=Array.isArray(f)?f[0]:f,this.l&&(a.Style=f),(f=f.Pa())&&(a.name=f.Pa());f=up[c[c.length-1].node.namespaceURI];a=wl(a,f);yl(d,sp,vl,a,c,f);a=c[0];(b=b.U())&&(b=El(b,!0,a));yl(d,
sp,jp,[b],c)}function vp(a,b,c){var d=b.ha();a={node:a};a.layout=b.ka;a.stride=b.sa();yl(a,wp,xp,[d],c)}function yp(a,b,c){b=b.jd();var d=b.shift();a={node:a};yl(a,zp,Ap,b,c);yl(a,zp,Bp,[d],c)}function Cp(a,b){Mm(a,Math.round(1E6*b)/1E6)}
var Dp=K(jo,["Document","Placemark"]),Gp=K(jo,{Document:J(function(a,b,c){yl({node:a},Ep,Fp,b,c,void 0,this)}),Placemark:J(rp)}),Ep=K(jo,{Placemark:J(rp)}),Hp=K(jo,{Data:J(function(a,b,c){a.setAttribute("name",b.name);a={node:a};b=b.value;"object"==typeof b?(null!==b&&b.displayName&&yl(a,Hp,vl,[b.displayName],c,["displayName"]),null!==b&&b.value&&yl(a,Hp,vl,[b.value],c,["value"])):yl(a,Hp,vl,[b],c,["value"])}),value:J(function(a,b){Lm(a,b)}),displayName:J(function(a,b){a.appendChild(fl.createCDATASection(b))})}),
Ip={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry",GeometryCollection:"MultiGeometry"},Jp=K(jo,["href"],K(io,["x","y","w","h"])),Kp=K(jo,{href:J(Lm)},K(io,{x:J(Mm),y:J(Mm),w:J(Mm),h:J(Mm)})),Lp=K(jo,["scale","heading","Icon","hotSpot"]),Np=K(jo,{Icon:J(function(a,b,c){a={node:a};var d=Jp[c[c.length-1].node.namespaceURI],e=wl(b,d);yl(a,Kp,vl,e,c,d);d=Jp[io[0]];e=wl(b,d);yl(a,Kp,
Mp,e,c,d)}),heading:J(Mm),hotSpot:J(function(a,b){a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("xunits",b.Hg);a.setAttribute("yunits",b.Ig)}),scale:J(Cp)}),Op=K(jo,["color","scale"]),Pp=K(jo,{color:J(hp),scale:J(Cp)}),Qp=K(jo,["color","width"]),Rp=K(jo,{color:J(hp),width:J(Mm)}),pp=K(jo,{LinearRing:J(vp)}),np=K(jo,{LineString:J(vp),Point:J(vp),Polygon:J(yp),GeometryCollection:J(ip)}),up=K(jo,"name open visibility address phoneNumber description styleUrl Style".split(" ")),sp=K(jo,
{ExtendedData:J(function(a,b,c){a={node:a};var d=b.names;b=b.values;for(var e=d.length,f=0;f<e;f++)yl(a,Hp,Sp,[{name:d[f],value:b[f]}],c)}),MultiGeometry:J(ip),LineString:J(vp),LinearRing:J(vp),Point:J(vp),Polygon:J(yp),Style:J(function(a,b,c){a={node:a};var d={},e=b.Ca(),f=b.Da(),g=b.Z();b=b.Pa();g instanceof Qn&&(d.IconStyle=g);b&&(d.LabelStyle=b);f&&(d.LineStyle=f);e&&(d.PolyStyle=e);b=Tp[c[c.length-1].node.namespaceURI];d=wl(d,b);yl(a,Up,vl,d,c,b)}),address:J(Lm),description:J(Lm),name:J(Lm),
open:J(Km),phoneNumber:J(Lm),styleUrl:J(Lm),visibility:J(Km)}),wp=K(jo,{coordinates:J(function(a,b,c){c=c[c.length-1];var d=c.layout;c=c.stride;var e;"XY"==d||"XYM"==d?e=2:"XYZ"==d||"XYZM"==d?e=3:qa(!1,34);var f,g=b.length,h="";if(0<g){h+=b[0];for(d=1;d<e;++d)h+=","+b[d];for(f=c;f<g;f+=c)for(h+=" "+b[f],d=1;d<e;++d)h+=","+b[f+d]}Lm(a,h)})}),zp=K(jo,{outerBoundaryIs:J(op),innerBoundaryIs:J(op)}),Vp=K(jo,{color:J(hp)}),Tp=K(jo,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),Up=K(jo,{IconStyle:J(function(a,
b,c){a={node:a};var d={},e=b.jc(),f=b.ue(),g={href:b.b.j};if(e){g.w=e[0];g.h=e[1];var h=b.Hc(),l=b.Pc();l&&f&&l[0]&&l[1]!==e[1]&&(g.x=l[0],g.y=f[1]-(l[1]+e[1]));h&&h[0]&&h[1]!==e[1]&&(d.hotSpot={x:h[0],Hg:"pixels",y:e[1]-h[1],Ig:"pixels"})}d.Icon=g;e=b.c;1!==e&&(d.scale=e);(b=b.l)&&(d.heading=b);b=Lp[c[c.length-1].node.namespaceURI];d=wl(d,b);yl(a,Np,vl,d,c,b)}),LabelStyle:J(function(a,b,c){a={node:a};var d={},e=b.Ca();e&&(d.color=e.b);(b=b.b)&&1!==b&&(d.scale=b);b=Op[c[c.length-1].node.namespaceURI];
d=wl(d,b);yl(a,Pp,vl,d,c,b)}),LineStyle:J(function(a,b,c){a={node:a};var d=Qp[c[c.length-1].node.namespaceURI];b=wl({color:b.a,width:b.c},d);yl(a,Rp,vl,b,c,d)}),PolyStyle:J(function(a,b,c){yl({node:a},Vp,Wp,[b.b],c)})});function Mp(a,b,c){return hl(io[0],"gx:"+c)}function Fp(a,b){return hl(b[b.length-1].node.namespaceURI,"Placemark")}function jp(a,b){if(a)return hl(b[b.length-1].node.namespaceURI,Ip[a.T()])}
var Wp=tl("color"),xp=tl("coordinates"),Sp=tl("Data"),tp=tl("ExtendedData"),Ap=tl("innerBoundaryIs"),kp=tl("Point"),lp=tl("LineString"),qp=tl("LinearRing"),mp=tl("Polygon"),Bp=tl("outerBoundaryIs");
Sn.prototype.Yb=function(a,b){b=Dl(this,b);var c=hl(jo[4],"kml");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:gx",io[0]);c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var d={node:c},e={};1<a.length?e.Document=a:1==a.length&&(e.Placemark=a[0]);var f=Dp[c.namespaceURI],
e=wl(e,f);yl(d,Gp,vl,e,[b],f,this);return c};(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.aq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return require(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){f.read=function(a,b,d,e,f){var g;g=8*f-e-1;var h=(1<<g)-1,l=h>>1,m=-7;f=d?f-1:0;var p=d?-1:1,y=a[b+f];f+=p;d=y&(1<<-m)-1;y>>=-m;for(m+=g;0<m;d=256*d+a[b+f],f+=p,m-=8);g=d&(1<<-m)-1;d>>=-m;for(m+=e;0<m;g=256*g+a[b+f],f+=p,m-=8);if(0===d)d=1-l;else{if(d===h)return g?NaN:Infinity*(y?-1:1);g+=Math.pow(2,e);d-=l}return(y?-1:1)*g*Math.pow(2,d-
e)};f.write=function(a,b,d,e,f,n){var g,h=8*n-f-1,l=(1<<h)-1,m=l>>1,p=23===f?Math.pow(2,-24)-Math.pow(2,-77):0;n=e?0:n-1;var z=e?1:-1,A=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,e=l):(e=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-e))&&(e--,g*=2),b=1<=e+m?b+p/g:b+p*Math.pow(2,1-m),2<=b*g&&(e++,g/=2),e+m>=l?(b=0,e=l):1<=e+m?(b=(b*g-1)*Math.pow(2,f),e+=m):(b=b*Math.pow(2,m-1)*Math.pow(2,f),e=0));for(;8<=f;a[d+n]=b&255,n+=z,b/=256,f-=8);e=e<<f|b;for(h+=f;0<h;a[d+
n]=e&255,n+=z,e/=256,h-=8);a[d+n-z]|=128*A}},{}],2:[function(a,b){function d(a){this.lc=ArrayBuffer.isView&&ArrayBuffer.isView(a)?a:new Uint8Array(a||0);this.type=this.ga=0;this.length=this.lc.length}function e(a,b,d){var e=d.lc,f,g;g=e[d.ga++];f=(g&112)>>4;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<3;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<10;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<17;if(128>g)return h(a,f,b);g=e[d.ga++];f|=(g&127)<<24;if(128>g)return h(a,f,b);g=e[d.ga++];
if(128>g)return h(a,f|(g&1)<<31,b);throw Error("Expected varint not more than 10 bytes");}function h(a,b,d){return d?4294967296*b+(a>>>0):4294967296*(b>>>0)+(a>>>0)}b.ma=d;var l=a("ieee754");d.c=0;d.f=1;d.b=2;d.a=5;d.prototype={mg:function(a,b,d){for(d=d||this.length;this.ga<d;){var e=this.Ma(),f=e>>3,g=this.ga;this.type=e&7;a(f,b,this);this.ga===g&&this.zp(e)}return b},No:function(){var a=l.read(this.lc,this.ga,!0,23,4);this.ga+=4;return a},Jo:function(){var a=l.read(this.lc,this.ga,!0,52,8);this.ga+=
8;return a},Ma:function(a){var b=this.lc,d,f;f=b[this.ga++];d=f&127;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<7;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<14;if(128>f)return d;f=b[this.ga++];d|=(f&127)<<21;if(128>f)return d;f=b[this.ga];return e(d|(f&15)<<28,a,this)},Zo:function(){return this.Ma(!0)},Yd:function(){var a=this.Ma();return 1===a%2?(a+1)/-2:a/2},Ho:function(){return!!this.Ma()},sg:function(){for(var a=this.Ma()+this.ga,b=this.lc,d="",e=this.ga;e<a;){var f=b[e],g=null,h=239<f?4:223<
f?3:191<f?2:1;if(e+h>a)break;var l,z,A;if(1===h)128>f&&(g=f);else if(2===h)l=b[e+1],128===(l&192)&&(g=(f&31)<<6|l&63,127>=g&&(g=null));else if(3===h){if(l=b[e+1],z=b[e+2],128===(l&192)&&128===(z&192)&&(g=(f&15)<<12|(l&63)<<6|z&63,2047>=g||55296<=g&&57343>=g))g=null}else 4===h&&(l=b[e+1],z=b[e+2],A=b[e+3],128===(l&192)&&128===(z&192)&&128===(A&192)&&(g=(f&15)<<18|(l&63)<<12|(z&63)<<6|A&63,65535>=g||1114112<=g))&&(g=null);null===g?(g=65533,h=1):65535<g&&(g-=65536,d+=String.fromCharCode(g>>>10&1023|
55296),g=56320|g&1023);d+=String.fromCharCode(g);e+=h}this.ga=a;return d},zp:function(a){a&=7;if(a===d.c)for(;127<this.lc[this.ga++];);else if(a===d.b)this.ga=this.Ma()+this.ga;else if(a===d.a)this.ga+=4;else if(a===d.f)this.ga+=8;else throw Error("Unimplemented type: "+a);}}},{ieee754:1}]},{},[2])(2)});Aj=b.ma})();(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.eq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return require(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b){this.x=a;this.y=b}b.ma=d;d.prototype={clone:function(){return new d(this.x,this.y)},add:function(a){return this.clone().Ej(a)},rotate:function(a){return this.clone().Oj(a)},round:function(){return this.clone().Pj()},angle:function(){return Math.atan2(this.y,this.x)},Ej:function(a){this.x+=a.x;this.y+=a.y;return this},Oj:function(a){var b=
Math.cos(a);a=Math.sin(a);var d=a*this.x+b*this.y;this.x=b*this.x-a*this.y;this.y=d;return this},Pj:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};d.b=function(a){return a instanceof d?a:Array.isArray(a)?new d(a[0],a[1]):a}},{}],2:[function(a,b){b.ma.Dj=a("./lib/vectortile.js");b.ma.Yp=a("./lib/vectortilefeature.js");b.ma.Zp=a("./lib/vectortilelayer.js")},{"./lib/vectortile.js":3,"./lib/vectortilefeature.js":4,"./lib/vectortilelayer.js":5}],3:[function(a,b){function d(a,
b,d){3===a&&(a=new e(d,d.Ma()+d.ga),a.length&&(b[a.name]=a))}var e=a("./vectortilelayer");b.ma=function(a,b){this.layers=a.mg(d,{},b)}},{"./vectortilelayer":5}],4:[function(a,b){function d(a,b,d,f,g){this.properties={};this.extent=d;this.type=0;this.Cc=a;this.tf=-1;this.ie=f;this.ke=g;a.mg(e,this,b)}function e(a,b,d){if(1==a)b.id=d.Ma();else if(2==a)for(a=d.Ma()+d.ga;d.ga<a;){var e=b.ie[d.Ma()],f=b.ke[d.Ma()];b.properties[e]=f}else 3==a?b.type=d.Ma():4==a&&(b.tf=d.ga)}var h=a("point-geometry");b.ma=
d;d.b=["Unknown","Point","LineString","Polygon"];d.prototype.Ah=function(){var a=this.Cc;a.ga=this.tf;for(var b=a.Ma()+a.ga,d=1,e=0,f=0,g=0,v=[],x;a.ga<b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.Yd(),g+=a.Yd(),1===d&&(x&&v.push(x),x=[]),x.push(new h(f,g));else if(7===d)x&&x.push(x[0].clone());else throw Error("unknown command "+d);x&&v.push(x);return v};d.prototype.bbox=function(){var a=this.Cc;a.ga=this.tf;for(var b=a.Ma()+a.ga,d=1,e=0,f=0,g=0,h=Infinity,x=-Infinity,y=Infinity,z=-Infinity;a.ga<
b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.Yd(),g+=a.Yd(),f<h&&(h=f),f>x&&(x=f),g<y&&(y=g),g>z&&(z=g);else if(7!==d)throw Error("unknown command "+d);return[h,y,x,z]}},{"point-geometry":1}],5:[function(a,b){function d(a,b){this.version=1;this.name=null;this.extent=4096;this.length=0;this.Cc=a;this.ie=[];this.ke=[];this.he=[];a.mg(e,this,b);this.length=this.he.length}function e(a,b,d){15===a?b.version=d.Ma():1===a?b.name=d.sg():5===a?b.extent=d.Ma():2===a?b.he.push(d.ga):3===a?b.ie.push(d.sg()):
4===a&&b.ke.push(h(d))}function h(a){for(var b=null,d=a.Ma()+a.ga;a.ga<d;)b=a.Ma()>>3,b=1===b?a.sg():2===b?a.No():3===b?a.Jo():4===b?a.Zo():5===b?a.Ma():6===b?a.Yd():7===b?a.Ho():null;return b}var l=a("./vectortilefeature.js");b.ma=d;d.prototype.feature=function(a){if(0>a||a>=this.he.length)throw Error("feature index out of bounds");this.Cc.ga=this.he[a];a=this.Cc.Ma()+this.Cc.ga;return new l(this.Cc,a,this.extent,this.ie,this.ke)}},{"./vectortilefeature.js":4}]},{},[2])(2)});Bj=b.ma})();function Xp(a,b,c,d){this.f=a;this.b=b;this.i=c;this.c=d}k=Xp.prototype;k.get=function(a){return this.c[a]};k.Rb=function(){return this.i};k.D=function(){this.a||(this.a="Point"===this.f?Wa(this.b):Xa(this.b,0,this.b.length,2));return this.a};k.fc=function(){return this.b};k.ha=Xp.prototype.fc;k.U=function(){return this};k.mn=function(){return this.c};k.Qd=Xp.prototype.U;k.sa=function(){return 2};k.Nc=na;k.T=function(){return this.f};function Yp(a){Bl.call(this);a=a?a:{};this.defaultDataProjection=new yb({code:"",units:"tile-pixels"});this.b=a.featureClass?a.featureClass:Xp;this.f=a.geometryName;this.a=a.layerName?a.layerName:"layer";this.c=a.layers?a.layers:null}u(Yp,Bl);k=Yp.prototype;k.T=function(){return"arraybuffer"};
k.Qa=function(a,b){var c=this.c,d=new Aj(a),d=new Bj.Dj(d),e=[],f=this.b,g,h,l;for(l in d.layers)if(!c||-1!=c.indexOf(l)){g=d.layers[l];for(var m=0,p=g.length;m<p;++m){if(f===Xp){h=void 0;var n=g.feature(m),q=l,r=n.Ah(),v=[],x=[];Zp(r,x,v);var y=n.type;1===y?h=1===r.length?"Point":"MultiPoint":2===y?h=1===r.length?"LineString":"MultiLineString":3===y&&(h="Polygon");n=n.properties;n[this.a]=q;h=new this.b(h,x,v,n)}else{y=g.feature(m);n=l;x=b;h=new this.b;q=y.id;v=y.properties;v[this.a]=n;this.f&&h.Vc(this.f);
n=void 0;r=y.type;if(0===r)n=null;else{var y=y.Ah(),z=[],A=[];Zp(y,A,z);1===r?n=1===y.length?new E(null):new O(null):2===r?1===y.length?n=new M(null):n=new N(null):3===r&&(n=new F(null));n.ca("XY",A,z)}x=El(n,!1,Dl(this,x));h.Sa(x);h.kc(q);h.H(v)}e.push(h)}}return e};k.kb=function(){return this.defaultDataProjection};k.Hm=function(a){this.c=a};function Zp(a,b,c){for(var d=0,e=0,f=a.length;e<f;++e){var g=a[e],h,l;h=0;for(l=g.length;h<l;++h){var m=g[h];b.push(m.x,m.y)}d+=2*h;c.push(d)}}k.Ub=function(){};
k.Tc=function(){};k.yd=function(){};k.bd=function(){};k.Xb=function(){};function $p(){ym.call(this);this.defaultDataProjection=Gb("EPSG:4326")}u($p,ym);function aq(a,b){b[b.length-1].ae[a.getAttribute("k")]=a.getAttribute("v")}
var bq=[null],cq=K(bq,{nd:function(a,b){b[b.length-1].md.push(a.getAttribute("ref"))},tag:aq}),eq=K(bq,{node:function(a,b){var c=b[0],d=b[b.length-1],e=a.getAttribute("id"),f=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];d.Eh[e]=f;var g=L({ae:{}},dq,a,b);sb(g.ae)||(f=new E(f),El(f,!1,c),c=new H(f),c.kc(e),c.H(g.ae),d.features.push(c))},way:function(a,b){for(var c=b[0],d=a.getAttribute("id"),e=L({md:[],ae:{}},cq,a,b),f=b[b.length-1],g=[],h=0,l=e.md.length;h<l;h++)ga(g,f.Eh[e.md[h]]);
e.md[0]==e.md[e.md.length-1]?(h=new F(null),h.ca("XY",g,[g.length])):(h=new M(null),h.ca("XY",g));El(h,!1,c);c=new H(h);c.kc(d);c.H(e.ae);f.features.push(c)}}),dq=K(bq,{tag:aq});$p.prototype.yc=function(a,b){var c=Cl(this,a,b);return"osm"==a.localName&&(c=L({Eh:{},features:[]},eq,a,[c]),c.features)?c.features:[]};$p.prototype.Fg=function(){};$p.prototype.Yb=function(){};$p.prototype.de=function(){};function fq(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};function gq(){}gq.prototype.read=function(a){return kl(a)?this.a(a):ll(a)?this.b(a):"string"===typeof a?(a=ml(a),this.a(a)):null};function hq(){}u(hq,gq);hq.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};hq.prototype.b=function(a){return(a=L({},iq,a,[]))?a:null};
var jq=[null,"http://www.opengis.net/ows/1.1"],iq=K(jq,{ServiceIdentification:I(function(a,b){return L({},lq,a,b)}),ServiceProvider:I(function(a,b){return L({},mq,a,b)}),OperationsMetadata:I(function(a,b){return L({},nq,a,b)})}),oq=K(jq,{DeliveryPoint:I(Q),City:I(Q),AdministrativeArea:I(Q),PostalCode:I(Q),Country:I(Q),ElectronicMailAddress:I(Q)}),pq=K(jq,{Value:rl(function(a){return Q(a)})}),qq=K(jq,{AllowedValues:I(function(a,b){return L({},pq,a,b)})}),sq=K(jq,{Phone:I(function(a,b){return L({},
rq,a,b)}),Address:I(function(a,b){return L({},oq,a,b)})}),uq=K(jq,{HTTP:I(function(a,b){return L({},tq,a,b)})}),tq=K(jq,{Get:rl(function(a,b){var c=fq(a);if(c)return L({href:c},vq,a,b)}),Post:void 0}),wq=K(jq,{DCP:I(function(a,b){return L({},uq,a,b)})}),nq=K(jq,{Operation:function(a,b){var c=a.getAttribute("name"),d=L({},wq,a,b);d&&(b[b.length-1][c]=d)}}),rq=K(jq,{Voice:I(Q),Facsimile:I(Q)}),vq=K(jq,{Constraint:rl(function(a,b){var c=a.getAttribute("name");if(c)return L({name:c},qq,a,b)})}),xq=K(jq,
{IndividualName:I(Q),PositionName:I(Q),ContactInfo:I(function(a,b){return L({},sq,a,b)})}),lq=K(jq,{Title:I(Q),ServiceTypeVersion:I(Q),ServiceType:I(Q)}),mq=K(jq,{ProviderName:I(Q),ProviderSite:I(fq),ServiceContact:I(function(a,b){return L({},xq,a,b)})});function yq(a,b,c,d){var e;void 0!==d?e=d:e=[];for(var f=d=0;f<b;){var g=a[f++];e[d++]=a[f++];e[d++]=g;for(g=2;g<c;++g)e[d++]=a[f++]}e.length=d};function zq(a){a=a?a:{};Bl.call(this);this.defaultDataProjection=Gb("EPSG:4326");this.b=a.factor?a.factor:1E5;this.a=a.geometryLayout?a.geometryLayout:"XY"}u(zq,Hn);function Aq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;var f,g;f=0;for(g=a.length;f<g;)for(d=0;d<b;++d,++f){var h=a[f],l=h-e[d];e[d]=h;a[f]=l}return Bq(a,c?c:1E5)}function Cq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;a=Dq(a,c?c:1E5);var f;c=0;for(f=a.length;c<f;)for(d=0;d<b;++d,++c)e[d]+=a[c],a[c]=e[d];return a}
function Bq(a,b){var c=b?b:1E5,d,e;d=0;for(e=a.length;d<e;++d)a[d]=Math.round(a[d]*c);c=0;for(d=a.length;c<d;++c)e=a[c],a[c]=0>e?~(e<<1):e<<1;c="";d=0;for(e=a.length;d<e;++d){for(var f,g=a[d],h="";32<=g;)f=(32|g&31)+63,h+=String.fromCharCode(f),g>>=5;h+=String.fromCharCode(g+63);c+=h}return c}
function Dq(a,b){var c=b?b:1E5,d=[],e=0,f=0,g,h;g=0;for(h=a.length;g<h;++g){var l=a.charCodeAt(g)-63,e=e|(l&31)<<f;32>l?(d.push(e),f=e=0):f+=5}e=0;for(f=d.length;e<f;++e)g=d[e],d[e]=g&1?~(g>>1):g>>1;e=0;for(f=d.length;e<f;++e)d[e]/=c;return d}k=zq.prototype;k.Wd=function(a,b){var c=this.ud(a,b);return new H(c)};k.lg=function(a,b){return[this.Wd(a,b)]};k.ud=function(a,b){var c=gf(this.a),d=Cq(a,c,this.b);yq(d,d.length,c,d);c=uf(d,0,d.length,c);return El(new M(c,this.a),!1,Dl(this,b))};
k.be=function(a,b){var c=a.U();if(c)return this.Ad(c,b);qa(!1,40);return""};k.Gg=function(a,b){return this.be(a[0],b)};k.Ad=function(a,b){a=El(a,!0,Dl(this,b));var c=a.ha(),d=a.sa();yq(c,c.length,d,c);return Aq(c,d,this.b)};function Eq(a){a=a?a:{};Bl.call(this);this.defaultDataProjection=Gb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326")}u(Eq,Fl);function Fq(a,b){var c=[],d,e,f,g;f=0;for(g=a.length;f<g;++f)d=a[f],0<f&&c.pop(),0<=d?e=b[d]:e=b[~d].slice().reverse(),c.push.apply(c,e);d=0;for(e=c.length;d<e;++d)c[d]=c[d].slice();return c}function Gq(a,b,c,d,e){a=a.geometries;var f=[],g,h;g=0;for(h=a.length;g<h;++g)f[g]=Hq(a[g],b,c,d,e);return f}
function Hq(a,b,c,d,e){var f=a.type,g=Iq[f];b="Point"===f||"MultiPoint"===f?g(a,c,d):g(a,b);c=new H;c.Sa(El(b,!1,e));void 0!==a.id&&c.kc(a.id);a.properties&&c.H(a.properties);return c}
Eq.prototype.kg=function(a,b){if("Topology"==a.type){var c,d=null,e=null;a.transform&&(c=a.transform,d=c.scale,e=c.translate);var f=a.arcs;if(c){c=d;var g=e,h,l;h=0;for(l=f.length;h<l;++h){var m,p,n,q=f[h],r=c,v=g,x=0,y=0;p=0;for(m=q.length;p<m;++p)n=q[p],x+=n[0],y+=n[1],n[0]=x,n[1]=y,Jq(n,r,v)}}c=[];g=rb(a.objects);h=0;for(l=g.length;h<l;++h)"GeometryCollection"===g[h].type?(m=g[h],c.push.apply(c,Gq(m,f,d,e,b))):(m=g[h],c.push(Hq(m,f,d,e,b)));return c}return[]};
function Jq(a,b,c){a[0]=a[0]*b[0]+c[0];a[1]=a[1]*b[1]+c[1]}Eq.prototype.rg=function(){return this.defaultDataProjection};
var Iq={Point:function(a,b,c){a=a.coordinates;b&&c&&Jq(a,b,c);return new E(a)},LineString:function(a,b){var c=Fq(a.arcs,b);return new M(c)},Polygon:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Fq(a.arcs[d],b);return new F(c)},MultiPoint:function(a,b,c){a=a.coordinates;var d,e;if(b&&c)for(d=0,e=a.length;d<e;++d)Jq(a[d],b,c);return new O(a)},MultiLineString:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Fq(a.arcs[d],b);return new N(c)},MultiPolygon:function(a,b){var c=
[],d,e,f,g,h,l;h=0;for(l=a.arcs.length;h<l;++h){d=a.arcs[h];e=[];f=0;for(g=d.length;f<g;++f)e[f]=Fq(d[f],b);c[h]=e}return new P(c)}};k=Eq.prototype;k.ad=function(){};k.ce=function(){};k.ee=function(){};k.og=function(){};k.Sc=function(){};function Kq(a){a=a?a:{};this.i=a.featureType;this.a=a.featureNS;this.b=a.gmlFormat?a.gmlFormat:new Om;this.c=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";ym.call(this)}u(Kq,ym);Kq.prototype.yc=function(a,b){var c={featureType:this.i,featureNS:this.a};pb(c,Cl(this,a,b?b:{}));c=[c];this.b.b["http://www.opengis.net/gml"].featureMember=pl(Bm.prototype.Xd);(c=L([],this.b.b,a,c,this.b))||(c=[]);return c};
Kq.prototype.j=function(a){if(kl(a))return Lq(a);if(ll(a))return L({},Mq,a,[]);if("string"===typeof a)return a=ml(a),Lq(a)};Kq.prototype.l=function(a){if(kl(a))return Nq(this,a);if(ll(a))return Oq(this,a);if("string"===typeof a)return a=ml(a),Nq(this,a)};function Nq(a,b){for(var c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE)return Oq(a,c)}var Pq={"http://www.opengis.net/gml":{boundedBy:I(Bm.prototype.We,"bounds")}};
function Oq(a,b){var c={},d=Jm(b.getAttribute("numberOfFeatures"));c.numberOfFeatures=d;return L(c,Pq,b,[],a.b)}
var Qq={"http://www.opengis.net/wfs":{totalInserted:I(Im),totalUpdated:I(Im),totalDeleted:I(Im)}},Rq={"http://www.opengis.net/ogc":{FeatureId:pl(function(a){return a.getAttribute("fid")})}},Sq={"http://www.opengis.net/wfs":{Feature:function(a,b){xl(Rq,a,b)}}},Mq={"http://www.opengis.net/wfs":{TransactionSummary:I(function(a,b){return L({},Qq,a,b)},"transactionSummary"),InsertResults:I(function(a,b){return L([],Sq,a,b)},"insertIds")}};
function Lq(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return L({},Mq,a,[])}var Tq={"http://www.opengis.net/wfs":{PropertyName:J(Lm)}};function Uq(a,b){var c=hl("http://www.opengis.net/ogc","Filter"),d=hl("http://www.opengis.net/ogc","FeatureId");c.appendChild(d);d.setAttribute("fid",b);a.appendChild(c)}
var Vq={"http://www.opengis.net/wfs":{Insert:J(function(a,b,c){var d=c[c.length-1],d=hl(d.featureNS,d.featureType);a.appendChild(d);Om.prototype.cj(d,b,c)}),Update:J(function(a,b,c){var d=c[c.length-1];qa(void 0!==b.a,27);var e=d.featureType,f=d.featurePrefix,f=f?f:"feature",g=d.featureNS;a.setAttribute("typeName",f+":"+e);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+f,g);e=b.a;if(void 0!==e){for(var f=b.O(),g=[],h=0,l=f.length;h<l;h++){var m=b.get(f[h]);void 0!==m&&g.push({name:f[h],
value:m})}yl({node:a,srsName:d.srsName},Vq,tl("Property"),g,c);Uq(a,e)}}),Delete:J(function(a,b,c){var d=c[c.length-1];qa(void 0!==b.a,26);c=d.featureType;var e=d.featurePrefix,e=e?e:"feature",d=d.featureNS;a.setAttribute("typeName",e+":"+c);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,d);b=b.a;void 0!==b&&Uq(a,b)}),Property:J(function(a,b,c){var d=hl("http://www.opengis.net/wfs","Name");a.appendChild(d);Lm(d,b.name);void 0!==b.value&&null!==b.value&&(d=hl("http://www.opengis.net/wfs",
"Value"),a.appendChild(d),b.value instanceof cf?Om.prototype.zd(d,b.value,c):Lm(d,b.value))}),Native:J(function(a,b){b.Hp&&a.setAttribute("vendorId",b.Hp);void 0!==b.lp&&a.setAttribute("safeToIgnore",b.lp);void 0!==b.value&&Lm(a,b.value)})}};function Wq(a,b,c){var d={node:a};b.b.forEach(function(a){yl(d,Xq,tl(a.Bc),[a],c)})}function Yq(a,b){void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());Zq(a,b.b);$q(a,""+b.f)}
function ar(a,b,c){a=hl("http://www.opengis.net/ogc",a);Lm(a,c);b.appendChild(a)}function Zq(a,b){ar("PropertyName",a,b)}function $q(a,b){ar("Literal",a,b)}
var Xq={"http://www.opengis.net/wfs":{Query:J(function(a,b,c){var d=c[c.length-1],e=d.featurePrefix,f=d.featureNS,g=d.propertyNames,h=d.srsName;a.setAttribute("typeName",(e?e+":":"")+b);h&&a.setAttribute("srsName",h);f&&a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,f);b=pb({},d);b.node=a;yl(b,Tq,tl("PropertyName"),g,c);if(d=d.filter)g=hl("http://www.opengis.net/ogc","Filter"),a.appendChild(g),yl({node:g},Xq,tl(d.Bc),[d],c)})},"http://www.opengis.net/ogc":{And:J(Wq),Or:J(Wq),Not:J(function(a,
b,c){b=b.condition;yl({node:a},Xq,tl(b.Bc),[b],c)}),BBOX:J(function(a,b,c){c[c.length-1].srsName=b.srsName;Zq(a,b.geometryName);Om.prototype.zd(a,b.extent,c)}),Intersects:J(function(a,b,c){c[c.length-1].srsName=b.srsName;Zq(a,b.geometryName);Om.prototype.zd(a,b.geometry,c)}),Within:J(function(a,b,c){c[c.length-1].srsName=b.srsName;Zq(a,b.geometryName);Om.prototype.zd(a,b.geometry,c)}),PropertyIsEqualTo:J(Yq),PropertyIsNotEqualTo:J(Yq),PropertyIsLessThan:J(Yq),PropertyIsLessThanOrEqualTo:J(Yq),PropertyIsGreaterThan:J(Yq),
PropertyIsGreaterThanOrEqualTo:J(Yq),PropertyIsNull:J(function(a,b){Zq(a,b.b)}),PropertyIsBetween:J(function(a,b){Zq(a,b.b);var c=hl("http://www.opengis.net/ogc","LowerBoundary");a.appendChild(c);$q(c,""+b.a);c=hl("http://www.opengis.net/ogc","UpperBoundary");a.appendChild(c);$q(c,""+b.f)}),PropertyIsLike:J(function(a,b){a.setAttribute("wildCard",b.g);a.setAttribute("singleChar",b.i);a.setAttribute("escapeChar",b.f);void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());Zq(a,b.b);$q(a,""+b.c)})}};
Kq.prototype.o=function(a){var b=hl("http://www.opengis.net/wfs","GetFeature");b.setAttribute("service","WFS");b.setAttribute("version","1.1.0");var c;if(a&&(a.handle&&b.setAttribute("handle",a.handle),a.outputFormat&&b.setAttribute("outputFormat",a.outputFormat),void 0!==a.maxFeatures&&b.setAttribute("maxFeatures",a.maxFeatures),a.resultType&&b.setAttribute("resultType",a.resultType),void 0!==a.startIndex&&b.setAttribute("startIndex",a.startIndex),void 0!==a.count&&b.setAttribute("count",a.count),
c=a.filter,a.bbox)){qa(a.geometryName,12);var d=om(a.geometryName,a.bbox,a.srsName);c?c=nm(c,d):c=d}b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);c={node:b,srsName:a.srsName,featureNS:a.featureNS?a.featureNS:this.a,featurePrefix:a.featurePrefix,geometryName:a.geometryName,filter:c,propertyNames:a.propertyNames?a.propertyNames:[]};qa(Array.isArray(a.featureTypes),11);a=a.featureTypes;c=[c];d=pb({},c[c.length-1]);d.node=b;yl(d,Xq,tl("Query"),a,c);return b};
Kq.prototype.v=function(a,b,c,d){var e=[],f=hl("http://www.opengis.net/wfs","Transaction");f.setAttribute("service","WFS");f.setAttribute("version","1.1.0");var g,h;d&&(g=d.gmlOptions?d.gmlOptions:{},d.handle&&f.setAttribute("handle",d.handle));f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);a&&(h={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},pb(h,g),yl(h,Vq,tl("Insert"),a,e));b&&(h={node:f,featureNS:d.featureNS,
featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},pb(h,g),yl(h,Vq,tl("Update"),b,e));c&&yl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},Vq,tl("Delete"),c,e);d.nativeElements&&yl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,srsName:d.srsName},Vq,tl("Native"),d.nativeElements,e);return f};
Kq.prototype.qg=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.Ze(a);return null};Kq.prototype.Ze=function(a){if(a.firstElementChild&&a.firstElementChild.firstElementChild)for(a=a.firstElementChild.firstElementChild,a=a.firstElementChild;a;a=a.nextElementSibling)if(0!==a.childNodes.length&&(1!==a.childNodes.length||3!==a.firstChild.nodeType)){var b=[{}];this.b.We(a,b);return Gb(b.pop().srsName)}return null};function br(a){a=a?a:{};Bl.call(this);this.b=void 0!==a.splitCollection?a.splitCollection:!1}u(br,Hn);function cr(a){a=a.X();return a.length?a.join(" "):""}function dr(a){a=a.X();for(var b=[],c=0,d=a.length;c<d;++c)b.push(a[c].join(" "));return b.join(",")}function er(a){var b=[];a=a.jd();for(var c=0,d=a.length;c<d;++c)b.push("("+dr(a[c])+")");return b.join(",")}
function fr(a){var b=a.T(),c=(0,gr[b])(a),b=b.toUpperCase();if(a instanceof ff){a=a.ka;var d="";if("XYZ"===a||"XYZM"===a)d+="Z";if("XYM"===a||"XYZM"===a)d+="M";a=d;0<a.length&&(b+=" "+a)}return c.length?b+"("+c+")":b+" EMPTY"}
var gr={Point:cr,LineString:dr,Polygon:er,MultiPoint:function(a){var b=[];a=a.Ie();for(var c=0,d=a.length;c<d;++c)b.push("("+cr(a[c])+")");return b.join(",")},MultiLineString:function(a){var b=[];a=a.hd();for(var c=0,d=a.length;c<d;++c)b.push("("+dr(a[c])+")");return b.join(",")},MultiPolygon:function(a){var b=[];a=a.Od();for(var c=0,d=a.length;c<d;++c)b.push("("+er(a[c])+")");return b.join(",")},GeometryCollection:function(a){var b=[];a=a.If();for(var c=0,d=a.length;c<d;++c)b.push(fr(a[c]));return b.join(",")}};
k=br.prototype;k.Wd=function(a,b){var c=this.ud(a,b);if(c){var d=new H;d.Sa(c);return d}return null};k.lg=function(a,b){var c=[],d=this.ud(a,b);this.b&&"GeometryCollection"==d.T()?c=d.a:c=[d];for(var e=[],f=0,g=c.length;f<g;++f)d=new H,d.Sa(c[f]),e.push(d);return e};k.ud=function(a,b){var c;c=new hr(new ir(a));jr(c);return(c=kr(c))?El(c,!1,b):null};k.be=function(a,b){var c=a.U();return c?this.Ad(c,b):""};
k.Gg=function(a,b){if(1==a.length)return this.be(a[0],b);for(var c=[],d=0,e=a.length;d<e;++d)c.push(a[d].U());c=new pm(c);return this.Ad(c,b)};k.Ad=function(a,b){return fr(El(a,!0,b))};function ir(a){this.a=a;this.b=-1}
function lr(a){var b=a.a.charAt(++a.b),c={position:a.b,value:b};if("("==b)c.type=2;else if(","==b)c.type=5;else if(")"==b)c.type=3;else if("0"<=b&&"9">=b||"."==b||"-"==b){c.type=4;var d,b=a.b,e=!1,f=!1;do{if("."==d)e=!0;else if("e"==d||"E"==d)f=!0;d=a.a.charAt(++a.b)}while("0"<=d&&"9">=d||"."==d&&(void 0===e||!e)||!f&&("e"==d||"E"==d)||f&&("-"==d||"+"==d));a=parseFloat(a.a.substring(b,a.b--));c.value=a}else if("a"<=b&&"z">=b||"A"<=b&&"Z">=b){c.type=1;b=a.b;do d=a.a.charAt(++a.b);while("a"<=d&&"z">=
d||"A"<=d&&"Z">=d);a=a.a.substring(b,a.b--).toUpperCase();c.value=a}else{if(" "==b||"\t"==b||"\r"==b||"\n"==b)return lr(a);if(""===b)c.type=6;else throw Error("Unexpected character: "+b);}return c}function hr(a){this.f=a;this.a="XY"}function jr(a){a.b=lr(a.f)}function mr(a,b){var c=a.b.type==b;c&&jr(a);return c}
function kr(a){var b=a.b;if(mr(a,1)){var b=b.value,c="XY",d=a.b;1==a.b.type&&(d=d.value,"Z"===d?c="XYZ":"M"===d?c="XYM":"ZM"===d&&(c="XYZM"),"XY"!==c&&jr(a));a.a=c;if("GEOMETRYCOLLECTION"==b){a:{if(mr(a,2)){b=[];do b.push(kr(a));while(mr(a,5));if(mr(a,3)){a=b;break a}}else if(nr(a)){a=[];break a}throw Error(or(a));}return new pm(a)}d=pr[b];c=qr[b];if(!d||!c)throw Error("Invalid geometry type: "+b);b=d.call(a);return new c(b,a.a)}throw Error(or(a));}k=hr.prototype;
k.fg=function(){if(mr(this,2)){var a=rr(this);if(mr(this,3))return a}else if(nr(this))return null;throw Error(or(this));};k.eg=function(){if(mr(this,2)){var a=sr(this);if(mr(this,3))return a}else if(nr(this))return[];throw Error(or(this));};k.gg=function(){if(mr(this,2)){var a=tr(this);if(mr(this,3))return a}else if(nr(this))return[];throw Error(or(this));};
k.uo=function(){if(mr(this,2)){var a;if(2==this.b.type)for(a=[this.fg()];mr(this,5);)a.push(this.fg());else a=sr(this);if(mr(this,3))return a}else if(nr(this))return[];throw Error(or(this));};k.to=function(){if(mr(this,2)){var a=tr(this);if(mr(this,3))return a}else if(nr(this))return[];throw Error(or(this));};k.vo=function(){if(mr(this,2)){for(var a=[this.gg()];mr(this,5);)a.push(this.gg());if(mr(this,3))return a}else if(nr(this))return[];throw Error(or(this));};
function rr(a){for(var b=[],c=a.a.length,d=0;d<c;++d){var e=a.b;if(mr(a,4))b.push(e.value);else break}if(b.length==c)return b;throw Error(or(a));}function sr(a){for(var b=[rr(a)];mr(a,5);)b.push(rr(a));return b}function tr(a){for(var b=[a.eg()];mr(a,5);)b.push(a.eg());return b}function nr(a){var b=1==a.b.type&&"EMPTY"==a.b.value;b&&jr(a);return b}function or(a){return"Unexpected `"+a.b.value+"` at position "+a.b.position+" in `"+a.f.a+"`"}
var qr={POINT:E,LINESTRING:M,POLYGON:F,MULTIPOINT:O,MULTILINESTRING:N,MULTIPOLYGON:P},pr={POINT:hr.prototype.fg,LINESTRING:hr.prototype.eg,POLYGON:hr.prototype.gg,MULTIPOINT:hr.prototype.uo,MULTILINESTRING:hr.prototype.to,MULTIPOLYGON:hr.prototype.vo};function ur(){this.version=void 0}u(ur,gq);ur.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};ur.prototype.b=function(a){this.version=a.getAttribute("version").trim();return(a=L({version:this.version},vr,a,[]))?a:null};function wr(a,b){return L({},xr,a,b)}function yr(a,b){return L({},zr,a,b)}function Ar(a,b){var c=wr(a,b);if(c){var d=[Jm(a.getAttribute("width")),Jm(a.getAttribute("height"))];c.size=d;return c}}
function Br(a,b){return L([],Cr,a,b)}
var Dr=[null,"http://www.opengis.net/wms"],vr=K(Dr,{Service:I(function(a,b){return L({},Er,a,b)}),Capability:I(function(a,b){return L({},Fr,a,b)})}),Fr=K(Dr,{Request:I(function(a,b){return L({},Gr,a,b)}),Exception:I(function(a,b){return L([],Hr,a,b)}),Layer:I(function(a,b){return L({},Ir,a,b)})}),Er=K(Dr,{Name:I(Q),Title:I(Q),Abstract:I(Q),KeywordList:I(Br),OnlineResource:I(fq),ContactInformation:I(function(a,b){return L({},Jr,a,b)}),Fees:I(Q),AccessConstraints:I(Q),LayerLimit:I(Im),MaxWidth:I(Im),
MaxHeight:I(Im)}),Jr=K(Dr,{ContactPersonPrimary:I(function(a,b){return L({},Kr,a,b)}),ContactPosition:I(Q),ContactAddress:I(function(a,b){return L({},Lr,a,b)}),ContactVoiceTelephone:I(Q),ContactFacsimileTelephone:I(Q),ContactElectronicMailAddress:I(Q)}),Kr=K(Dr,{ContactPerson:I(Q),ContactOrganization:I(Q)}),Lr=K(Dr,{AddressType:I(Q),Address:I(Q),City:I(Q),StateOrProvince:I(Q),PostCode:I(Q),Country:I(Q)}),Hr=K(Dr,{Format:pl(Q)}),Ir=K(Dr,{Name:I(Q),Title:I(Q),Abstract:I(Q),KeywordList:I(Br),CRS:rl(Q),
EX_GeographicBoundingBox:I(function(a,b){var c=L({},Mr,a,b);if(c){var d=c.westBoundLongitude,e=c.southBoundLatitude,f=c.eastBoundLongitude,c=c.northBoundLatitude;if(void 0!==d&&void 0!==e&&void 0!==f&&void 0!==c)return[d,e,f,c]}}),BoundingBox:rl(function(a){var b=[Hm(a.getAttribute("minx")),Hm(a.getAttribute("miny")),Hm(a.getAttribute("maxx")),Hm(a.getAttribute("maxy"))],c=[Hm(a.getAttribute("resx")),Hm(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),extent:b,res:c}}),Dimension:rl(function(a){return{name:a.getAttribute("name"),
units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:Em(a.getAttribute("multipleValues")),nearestValue:Em(a.getAttribute("nearestValue")),current:Em(a.getAttribute("current")),values:Q(a)}}),Attribution:I(function(a,b){return L({},Nr,a,b)}),AuthorityURL:rl(function(a,b){var c=wr(a,b);if(c)return c.name=a.getAttribute("name"),c}),Identifier:rl(Q),MetadataURL:rl(function(a,b){var c=wr(a,b);if(c)return c.type=a.getAttribute("type"),
c}),DataURL:rl(wr),FeatureListURL:rl(wr),Style:rl(function(a,b){return L({},Or,a,b)}),MinScaleDenominator:I(Gm),MaxScaleDenominator:I(Gm),Layer:rl(function(a,b){var c=b[b.length-1],d=L({},Ir,a,b);if(d){var e=Em(a.getAttribute("queryable"));void 0===e&&(e=c.queryable);d.queryable=void 0!==e?e:!1;e=Jm(a.getAttribute("cascaded"));void 0===e&&(e=c.cascaded);d.cascaded=e;e=Em(a.getAttribute("opaque"));void 0===e&&(e=c.opaque);d.opaque=void 0!==e?e:!1;e=Em(a.getAttribute("noSubsets"));void 0===e&&(e=c.noSubsets);
d.noSubsets=void 0!==e?e:!1;(e=Hm(a.getAttribute("fixedWidth")))||(e=c.fixedWidth);d.fixedWidth=e;(e=Hm(a.getAttribute("fixedHeight")))||(e=c.fixedHeight);d.fixedHeight=e;["Style","CRS","AuthorityURL"].forEach(function(a){a in c&&(d[a]=(d[a]||[]).concat(c[a]))});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a){a in d||(d[a]=c[a])});return d}})}),Nr=K(Dr,{Title:I(Q),OnlineResource:I(fq),LogoURL:I(Ar)}),Mr=K(Dr,{westBoundLongitude:I(Gm),
eastBoundLongitude:I(Gm),southBoundLatitude:I(Gm),northBoundLatitude:I(Gm)}),Gr=K(Dr,{GetCapabilities:I(yr),GetMap:I(yr),GetFeatureInfo:I(yr)}),zr=K(Dr,{Format:rl(Q),DCPType:rl(function(a,b){return L({},Pr,a,b)})}),Pr=K(Dr,{HTTP:I(function(a,b){return L({},Qr,a,b)})}),Qr=K(Dr,{Get:I(wr),Post:I(wr)}),Or=K(Dr,{Name:I(Q),Title:I(Q),Abstract:I(Q),LegendURL:rl(Ar),StyleSheetURL:I(wr),StyleURL:I(wr)}),xr=K(Dr,{Format:I(Q),OnlineResource:I(fq)}),Cr=K(Dr,{Keyword:pl(Q)});function Rr(a){a=a?a:{};this.a="http://mapserver.gis.umn.edu/mapserver";this.b=new Xm;this.c=a.layers?a.layers:null;ym.call(this)}u(Rr,ym);
Rr.prototype.yc=function(a,b){var c={};b&&pb(c,Cl(this,a,b));var d=[c];a.setAttribute("namespaceURI",this.a);var e=a.localName,c=[];if(a.childNodes.length){if("msGMLOutput"==e)for(var f=0,g=a.childNodes.length;f<g;f++){var h=a.childNodes[f];if(h.nodeType===Node.ELEMENT_NODE){var l=d[0],m=h.localName.replace("_layer","");if(!this.c||ea(this.c,m)){m+="_feature";l.featureType=m;l.featureNS=this.a;var p={};p[m]=pl(this.b.ig,this.b);l=K([l.featureNS,null],p);h.setAttribute("namespaceURI",this.a);(h=L([],
l,h,d,this.b))&&ga(c,h)}}}"FeatureCollection"==e&&(d=L([],this.b.b,a,[{}],this.b))&&(c=d)}return c};Rr.prototype.Fg=function(){};Rr.prototype.Yb=function(){};Rr.prototype.de=function(){};function Sr(){this.f=new hq}u(Sr,gq);Sr.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};Sr.prototype.b=function(a){var b=a.getAttribute("version").trim(),c=this.f.b(a);if(!c)return null;c.version=b;return(c=L(c,Tr,a,[]))?c:null};function Ur(a){var b=Q(a).split(" ");if(b&&2==b.length&&(a=+b[0],b=+b[1],!isNaN(a)&&!isNaN(b)))return[a,b]}
var Vr=[null,"http://www.opengis.net/wmts/1.0"],Wr=[null,"http://www.opengis.net/ows/1.1"],Tr=K(Vr,{Contents:I(function(a,b){return L({},Xr,a,b)})}),Xr=K(Vr,{Layer:rl(function(a,b){return L({},Yr,a,b)}),TileMatrixSet:rl(function(a,b){return L({},Zr,a,b)})}),Yr=K(Vr,{Style:rl(function(a,b){var c=L({},$r,a,b);if(c){var d="true"===a.getAttribute("isDefault");c.isDefault=d;return c}}),Format:rl(Q),TileMatrixSetLink:rl(function(a,b){return L({},as,a,b)}),Dimension:rl(function(a,b){return L({},bs,a,b)}),
ResourceURL:rl(function(a){var b=a.getAttribute("format"),c=a.getAttribute("template");a=a.getAttribute("resourceType");var d={};b&&(d.format=b);c&&(d.template=c);a&&(d.resourceType=a);return d})},K(Wr,{Title:I(Q),Abstract:I(Q),WGS84BoundingBox:I(function(a,b){var c=L([],cs,a,b);if(2==c.length)return Ha(c)}),Identifier:I(Q)})),$r=K(Vr,{LegendURL:rl(function(a){var b={};b.format=a.getAttribute("format");b.href=fq(a);return b})},K(Wr,{Title:I(Q),Identifier:I(Q)})),as=K(Vr,{TileMatrixSet:I(Q),TileMatrixSetLimits:I(function(a,
b){return L([],ds,a,b)})}),ds=K(Vr,{TileMatrixLimits:pl(function(a,b){return L({},es,a,b)})}),es=K(Vr,{TileMatrix:I(Q),MinTileRow:I(Im),MaxTileRow:I(Im),MinTileCol:I(Im),MaxTileCol:I(Im)}),bs=K(Vr,{Default:I(Q),Value:rl(Q)},K(Wr,{Identifier:I(Q)})),cs=K(Wr,{LowerCorner:pl(Ur),UpperCorner:pl(Ur)}),Zr=K(Vr,{WellKnownScaleSet:I(Q),TileMatrix:rl(function(a,b){return L({},fs,a,b)})},K(Wr,{SupportedCRS:I(Q),Identifier:I(Q)})),fs=K(Vr,{TopLeftCorner:I(Ur),ScaleDenominator:I(Gm),TileWidth:I(Im),TileHeight:I(Im),
MatrixWidth:I(Im),MatrixHeight:I(Im)},K(Wr,{Identifier:I(Q)}));function gs(a){Gc.call(this);a=a||{};this.a=null;this.i=Vb;this.c=void 0;B(this,Ic("projection"),this.hm,this);B(this,Ic("tracking"),this.im,this);void 0!==a.projection&&this.Ih(Gb(a.projection));void 0!==a.trackingOptions&&this.Si(a.trackingOptions);this.Ee(void 0!==a.tracking?a.tracking:!1)}u(gs,Gc);k=gs.prototype;k.ra=function(){this.Ee(!1);Gc.prototype.ra.call(this)};k.hm=function(){var a=this.Gh();a&&(this.i=Fb(Gb("EPSG:4326"),a),this.a&&this.set("position",this.i(this.a)))};
k.im=function(){if(Od){var a=this.Hh();a&&void 0===this.c?this.c=navigator.geolocation.watchPosition(this.Co.bind(this),this.Do.bind(this),this.th()):a||void 0===this.c||(navigator.geolocation.clearWatch(this.c),this.c=void 0)}};
k.Co=function(a){a=a.coords;this.set("accuracy",a.accuracy);this.set("altitude",null===a.altitude?void 0:a.altitude);this.set("altitudeAccuracy",null===a.altitudeAccuracy?void 0:a.altitudeAccuracy);this.set("heading",null===a.heading?void 0:Ba(a.heading));this.a?(this.a[0]=a.longitude,this.a[1]=a.latitude):this.a=[a.longitude,a.latitude];var b=this.i(this.a);this.set("position",b);this.set("speed",null===a.speed?void 0:a.speed);a=Mf(kh,this.a,a.accuracy);a.Dc(this.i);this.set("accuracyGeometry",a);
this.s()};k.Do=function(a){a.type="error";this.Ee(!1);this.b(a)};k.hk=function(){return this.get("accuracy")};k.ik=function(){return this.get("accuracyGeometry")||null};k.kk=function(){return this.get("altitude")};k.lk=function(){return this.get("altitudeAccuracy")};k.fm=function(){return this.get("heading")};k.gm=function(){return this.get("position")};k.Gh=function(){return this.get("projection")};k.Rk=function(){return this.get("speed")};k.Hh=function(){return this.get("tracking")};k.th=function(){return this.get("trackingOptions")};
k.Ih=function(a){this.set("projection",a)};k.Ee=function(a){this.set("tracking",a)};k.Si=function(a){this.set("trackingOptions",a)};function hs(a,b,c){ff.call(this);this.yg(a,b?b:0,c)}u(hs,ff);k=hs.prototype;k.clone=function(){var a=new hs(null);hf(a,this.ka,this.B.slice());a.s();return a};k.Gb=function(a,b,c,d){var e=this.B;a-=e[0];var f=b-e[1];b=a*a+f*f;if(b<d){if(b)for(d=this.Vd()/Math.sqrt(b),c[0]=e[0]+d*a,c[1]=e[1]+d*f,d=2;d<this.a;++d)c[d]=e[d];else for(d=0;d<this.a;++d)c[d]=e[d];c.length=this.a;return b}return d};k.Oc=function(a,b){var c=this.B,d=a-c[0],c=b-c[1];return d*d+c*c<=is(this)};
k.Ba=function(){return this.B.slice(0,this.a)};k.ne=function(a){var b=this.B,c=b[this.a]-b[0];return Va(b[0]-c,b[1]-c,b[0]+c,b[1]+c,a)};k.Vd=function(){return Math.sqrt(is(this))};function is(a){var b=a.B[a.a]-a.B[0];a=a.B[a.a+1]-a.B[1];return b*b+a*a}k.T=function(){return"Circle"};k.Xa=function(a){var b=this.D();return mb(a,b)?(b=this.Ba(),a[0]<=b[0]&&a[2]>=b[0]||a[1]<=b[1]&&a[3]>=b[1]?!0:ab(a,this.sb,this)):!1};
k.wb=function(a){var b=this.a,c=a.slice();c[b]=c[0]+(this.B[b]-this.B[0]);var d;for(d=1;d<b;++d)c[b+d]=a[d];hf(this,this.ka,c);this.s()};k.yg=function(a,b,c){if(a){jf(this,c,a,0);this.B||(this.B=[]);c=this.B;a=rf(c,a);c[a++]=c[0]+b;var d;b=1;for(d=this.a;b<d;++b)c[a++]=c[b];c.length=a}else hf(this,"XY",null);this.s()};k.X=function(){};k.pa=function(){};k.Wc=function(a){this.B[this.a]=this.B[0]+a;this.s()};function js(a,b,c){for(var d=[],e=a(0),f=a(1),g=b(e),h=b(f),l=[f,e],m=[h,g],p=[1,0],n={},q=1E5,r,v,x,y,z;0<--q&&0<p.length;)x=p.pop(),e=l.pop(),g=m.pop(),f=x.toString(),f in n||(d.push(g[0],g[1]),n[f]=!0),y=p.pop(),f=l.pop(),h=m.pop(),z=(x+y)/2,r=a(z),v=b(r),za(v[0],v[1],g[0],g[1],h[0],h[1])<c?(d.push(h[0],h[1]),f=y.toString(),n[f]=!0):(p.push(y,z,z,x),m.push(h,v,v,g),l.push(f,r,r,e));return d}function ks(a,b,c,d,e){var f=Gb("EPSG:4326");return js(function(d){return[a,b+(c-b)*d]},Ub(f,d),e)}
function ls(a,b,c,d,e){var f=Gb("EPSG:4326");return js(function(d){return[b+(c-b)*d,a]},Ub(f,d),e)};function ms(a){a=a||{};this.i=this.j=null;this.f=this.g=Infinity;this.c=this.l=-Infinity;this.A=this.u=Infinity;this.G=this.C=-Infinity;this.R=void 0!==a.targetSize?a.targetSize:100;this.qa=void 0!==a.maxLines?a.maxLines:100;this.b=[];this.a=[];this.ta=void 0!==a.strokeStyle?a.strokeStyle:ns;this.I=this.o=void 0;this.v=null;this.setMap(void 0!==a.map?a.map:null)}var ns=new qj({color:"rgba(0,0,0,0.2)"}),os=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function ps(a,b,c,d,e,f,g){var h=g;b=ks(b,c,d,a.i,e);h=void 0!==a.b[h]?a.b[h]:new M(null);h.ca("XY",b);mb(h.D(),f)&&(a.b[g++]=h);return g}function qs(a,b,c,d,e){var f=e;b=ls(b,a.c,a.f,a.i,c);f=void 0!==a.a[f]?a.a[f]:new M(null);f.ca("XY",b);mb(f.D(),d)&&(a.a[e++]=f);return e}k=ms.prototype;k.jm=function(){return this.j};k.Gk=function(){return this.b};k.Nk=function(){return this.a};
k.wh=function(a){var b=a.vectorContext,c=a.frameState,d=c.extent;a=c.viewState;var e=a.center,f=a.projection,g=a.resolution;a=c.pixelRatio;a=g*g/(4*a*a);if(!this.i||!Tb(this.i,f)){var h=Gb("EPSG:4326"),l=f.D(),m=f.g,p=Xb(m,h,f),n=m[2],q=m[1],r=m[0],v=p[3],x=p[2],y=p[1],p=p[0];this.g=m[3];this.f=n;this.l=q;this.c=r;this.u=v;this.A=x;this.C=y;this.G=p;this.o=Ub(h,f);this.I=Ub(f,h);this.v=this.I(jb(l));this.i=f}f.a&&(f=f.D(),h=hb(f),c=c.focus[0],c<f[0]||c>f[2])&&(c=h*Math.ceil((f[0]-c)/h),d=[d[0]+c,
d[1],d[2]+c,d[3]]);c=this.v[0];f=this.v[1];h=-1;m=Math.pow(this.R*g,2);n=[];q=[];g=0;for(l=os.length;g<l;++g){r=os[g]/2;n[0]=c-r;n[1]=f-r;q[0]=c+r;q[1]=f+r;this.o(n,n);this.o(q,q);r=Math.pow(q[0]-n[0],2)+Math.pow(q[1]-n[1],2);if(r<=m)break;h=os[g]}g=h;if(-1==g)this.b.length=this.a.length=0;else{c=this.I(e);e=c[0];c=c[1];f=this.qa;h=[Math.max(d[0],this.G),Math.max(d[1],this.C),Math.min(d[2],this.A),Math.min(d[3],this.u)];h=Xb(h,this.i,"EPSG:4326");m=h[3];q=h[1];e=Math.floor(e/g)*g;n=wa(e,this.c,this.f);
l=ps(this,n,q,m,a,d,0);for(h=0;n!=this.c&&h++<f;)n=Math.max(n-g,this.c),l=ps(this,n,q,m,a,d,l);n=wa(e,this.c,this.f);for(h=0;n!=this.f&&h++<f;)n=Math.min(n+g,this.f),l=ps(this,n,q,m,a,d,l);this.b.length=l;c=Math.floor(c/g)*g;e=wa(c,this.l,this.g);l=qs(this,e,a,d,0);for(h=0;e!=this.l&&h++<f;)e=Math.max(e-g,this.l),l=qs(this,e,a,d,l);e=wa(c,this.l,this.g);for(h=0;e!=this.g&&h++<f;)e=Math.min(e+g,this.g),l=qs(this,e,a,d,l);this.a.length=l}b.Na(null,this.ta);a=0;for(e=this.b.length;a<e;++a)g=this.b[a],
b.Qb(g,null);a=0;for(e=this.a.length;a<e;++a)g=this.a[a],b.Qb(g,null)};k.setMap=function(a){this.j&&(this.j.K("postcompose",this.wh,this),this.j.render());a&&(a.J("postcompose",this.wh,this),a.render());this.j=a};function rs(a,b,c,d,e){Dc.call(this);this.i=e;this.extent=a;this.a=c;this.resolution=b;this.state=d}u(rs,Dc);rs.prototype.s=function(){this.b("change")};rs.prototype.D=function(){return this.extent};rs.prototype.V=function(){return this.state};function ss(a,b,c,d,e,f,g){rs.call(this,a,b,c,0,d);this.l=e;this.M=new Image;null!==f&&(this.M.crossOrigin=f);this.c={};this.f=null;this.state=0;this.g=g}u(ss,rs);k=ss.prototype;k.Z=function(a){if(void 0!==a){var b;a=w(a);if(a in this.c)return this.c[a];sb(this.c)?b=this.M:b=this.M.cloneNode(!1);return this.c[a]=b}return this.M};k.mm=function(){this.state=3;this.f.forEach(rc);this.f=null;this.s()};
k.nm=function(){void 0===this.resolution&&(this.resolution=ib(this.extent)/this.M.height);this.state=2;this.f.forEach(rc);this.f=null;this.s()};k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.f=[wc(this.M,"error",this.mm,this),wc(this.M,"load",this.nm,this)],this.g(this,this.l)};k.zg=function(a){this.M=a};function ts(a,b,c,d,e,f){this.c=f?f:null;rs.call(this,a,b,c,f?0:2,d);this.f=e}u(ts,rs);ts.prototype.g=function(a){this.state=a?3:2;this.s()};ts.prototype.load=function(){0==this.state&&(this.state=1,this.s(),this.c(this.g.bind(this)))};ts.prototype.Z=function(){return this.f};function us(a,b){Dc.call(this);this.Ga=a;this.state=b;this.a=null;this.key=""}u(us,Dc);us.prototype.s=function(){this.b("change")};us.prototype.ib=function(){return this.key+"/"+this.Ga};function vs(a){if(!a.a)return a;var b=a.a;do{if(2==b.V())return b;b=b.a}while(b);return a}us.prototype.i=function(){return this.Ga};us.prototype.V=function(){return this.state};function ws(a,b,c,d,e){us.call(this,a,b);this.g=c;this.M=new Image;null!==d&&(this.M.crossOrigin=d);this.c=null;this.j=e}u(ws,us);k=ws.prototype;k.ra=function(){1==this.state&&xs(this);this.a&&Ac(this.a);this.state=5;this.s();us.prototype.ra.call(this)};k.Z=function(){return this.M};k.ib=function(){return this.g};k.km=function(){this.state=3;xs(this);this.s()};k.lm=function(){this.state=this.M.naturalWidth&&this.M.naturalHeight?2:4;xs(this);this.s()};
k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.c=[wc(this.M,"error",this.km,this),wc(this.M,"load",this.lm,this)],this.j(this,this.g)};function xs(a){a.c.forEach(rc);a.c=null};function ys(a){a=a?a:{};$f.call(this,{handleEvent:af});this.g=a.formatConstructors?a.formatConstructors:[];this.j=a.projection?Gb(a.projection):null;this.a=null;this.target=a.target?a.target:null}u(ys,$f);function zs(a){a=a.dataTransfer.files;var b,c,d;b=0;for(c=a.length;b<c;++b){d=a.item(b);var e=new FileReader;e.addEventListener("load",this.l.bind(this,d));e.readAsText(d)}}function As(a){a.stopPropagation();a.preventDefault();a.dataTransfer.dropEffect="copy"}
ys.prototype.l=function(a,b){var c=b.target.result,d=this.v,e=this.j;e||(e=d.$().o);var d=this.g,f=[],g,h;g=0;for(h=d.length;g<h;++g){var l=new d[g];var m={featureProjection:e};try{f=l.Qa(c,m)}catch(p){f=null}if(f&&0<f.length)break}this.b(new Bs(Cs,a,f,e))};ys.prototype.setMap=function(a){this.a&&(this.a.forEach(rc),this.a=null);$f.prototype.setMap.call(this,a);a&&(a=this.target?this.target:a.c,this.a=[B(a,"drop",zs,this),B(a,"dragenter",As,this),B(a,"dragover",As,this),B(a,"drop",As,this)])};
var Cs="addfeatures";function Bs(a,b,c,d){Bc.call(this,a);this.features=c;this.file=b;this.projection=d}u(Bs,Bc);function Ds(a){a=a?a:{};og.call(this,{handleDownEvent:Es,handleDragEvent:Fs,handleUpEvent:Gs});this.o=a.condition?a.condition:kg;this.a=this.g=void 0;this.j=0;this.u=void 0!==a.duration?a.duration:400}u(Ds,og);function Fs(a){if(mg(a)){var b=a.map,c=b.Mb(),d=a.pixel;a=d[0]-c[0]/2;d=c[1]/2-d[1];c=Math.atan2(d,a);a=Math.sqrt(a*a+d*d);b=b.$();void 0!==this.g&&(d=c-this.g,ag(b,b.Va()-d));this.g=c;void 0!==this.a&&(c=this.a*(b.Ua()/a),cg(b,c));void 0!==this.a&&(this.j=this.a/a);this.a=a}}
function Gs(a){if(!mg(a))return!0;a=a.map.$();Rf(a,1,-1);var b=this.j-1,c=a.Va(),c=a.constrainRotation(c,0);ag(a,c,void 0,void 0);var c=a.Ua(),d=this.u,c=a.constrainResolution(c,0,b);cg(a,c,void 0,d);this.j=0;return!1}function Es(a){return mg(a)&&this.o(a)?(Rf(a.map.$(),1,1),this.a=this.g=void 0,!0):!1};function Hs(a,b,c,d){this.oa=a;this.Y=b;this.overlaps=d;this.c=0;this.resolution=c;this.R=this.ta=null;this.a=[];this.coordinates=[];this.eb=vh();this.b=[];this.qa=null;this.ia=vh();this.ea=vh()}u(Hs,Qh);
function Is(a,b,c,d,e,f,g){var h=a.coordinates.length,l=a.Gf();g&&(c+=e);g=[b[c],b[c+1]];var m=[NaN,NaN],p=!0,n,q,r;for(n=c+e;n<d;n+=e)m[0]=b[n],m[1]=b[n+1],r=Ua(l,m),r!==q?(p&&(a.coordinates[h++]=g[0],a.coordinates[h++]=g[1]),a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],p=!1):1===r?(a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],p=!1):p=!0,g[0]=m[0],g[1]=m[1],q=r;if(f&&p||n===c+e)a.coordinates[h++]=g[0],a.coordinates[h++]=g[1];return h}
function Js(a,b){a.ta=[0,b,0];a.a.push(a.ta);a.R=[0,b,0];a.b.push(a.R)}Hs.prototype.Wa=function(a,b){if(this.$a){var c=Ah(this.eb,this.$a.slice());a.translate(c[0],c[1]);a.rotate(b)}a.fill();this.$a&&a.setTransform.apply(a,this.ea)};
function Ks(a,b,c,d,e,f,g,h,l){var m;a.qa&&ia(d,a.eb)?m=a.qa:(a.qa||(a.qa=[]),m=df(a.coordinates,0,a.coordinates.length,2,d,a.qa),zh(a.eb,d));d=!sb(f);for(var p=0,n=g.length,q=0,r,v=a.ia,x=a.ea,y,z,A,V,Pa=0,ra=0,La=a.a!=g||a.overlaps?0:200;p<n;){var C=g[p],Ma,xb,Z,Ra;switch(C[0]){case 0:q=C[1];d&&f[w(q).toString()]||!q.U()?p=C[2]:void 0===l||mb(l,q.U().D())?++p:p=C[2]+1;break;case 1:Pa>La&&(a.Wa(b,e),Pa=0);ra>La&&(b.stroke(),ra=0);Pa||ra||(b.beginPath(),y=z=NaN);++p;break;case 2:q=C[1];r=m[q];C=m[q+
1];A=m[q+2]-r;q=m[q+3]-C;q=Math.sqrt(A*A+q*q);b.moveTo(r+q,C);b.arc(r,C,q,0,2*Math.PI,!0);++p;break;case 3:b.closePath();++p;break;case 4:q=C[1];r=C[2];Ma=C[3];xb=C[4]*c;Z=C[5]*c;var Cb=C[6],dc=C[7],$c=C[8],$d=C[9];Ra=C[10];A=C[11];V=C[12];var Je=C[13],ue=C[14];for(Ra&&(A+=e);q<r;q+=2){C=m[q]-xb;Ra=m[q+1]-Z;Je&&(C=Math.round(C),Ra=Math.round(Ra));if(1!=V||A){var Tc=C+xb,lh=Ra+Z;Eh(v,Tc,lh,V,V,A,-Tc,-lh);b.setTransform.apply(b,v)}Tc=b.globalAlpha;1!=dc&&(b.globalAlpha=Tc*dc);var lh=ue+$c>Ma.width?
Ma.width-$c:ue,kq=Cb+$d>Ma.height?Ma.height-$d:Cb;b.drawImage(Ma,$c,$d,lh,kq,C,Ra,lh*c,kq*c);1!=dc&&(b.globalAlpha=Tc);(1!=V||A)&&b.setTransform.apply(b,x)}++p;break;case 5:q=C[1];r=C[2];Z=C[3];Cb=C[4]*c;dc=C[5]*c;A=C[6];V=C[7]*c;Ma=C[8];xb=C[9];for((Ra=C[10])&&(A+=e);q<r;q+=2){C=m[q]+Cb;Ra=m[q+1]+dc;if(1!=V||A)Eh(v,C,Ra,V,V,A,-C,-Ra),b.setTransform.apply(b,v);$c=Z.split("\n");$d=$c.length;1<$d?(Je=Math.round(1.5*b.measureText("M").width),Ra-=($d-1)/2*Je):Je=0;for(ue=0;ue<$d;ue++)Tc=$c[ue],xb&&b.strokeText(Tc,
C,Ra),Ma&&b.fillText(Tc,C,Ra),Ra+=Je;(1!=V||A)&&b.setTransform.apply(b,x)}++p;break;case 6:if(h&&(q=C[1],q=h(q)))return q;++p;break;case 7:La?Pa++:a.Wa(b,e);++p;break;case 8:q=C[1];r=C[2];C=m[q];Ra=m[q+1];A=C+.5|0;V=Ra+.5|0;if(A!==y||V!==z)b.moveTo(C,Ra),y=A,z=V;for(q+=2;q<r;q+=2)if(C=m[q],Ra=m[q+1],A=C+.5|0,V=Ra+.5|0,q==r-2||A!==y||V!==z)b.lineTo(C,Ra),y=A,z=V;++p;break;case 9:a.$a=C[2];Pa&&(a.Wa(b,e),Pa=0,ra&&(b.stroke(),ra=0));b.fillStyle=C[1];++p;break;case 10:var q=void 0!==C[8]?C[8]:!0,gl=C[9];
r=C[2];ra&&(b.stroke(),ra=0);b.strokeStyle=C[1];b.lineWidth=q?r*c:r;b.lineCap=C[3];b.lineJoin=C[4];b.miterLimit=C[5];Ld&&(r=C[6],A=C[7],q&&c!==gl&&(r=r.map(function(a){return a*c/gl}),A*=c/gl,C[6]=r,C[7]=A,C[9]=c),b.lineDashOffset=A,b.setLineDash(r));++p;break;case 11:b.font=C[1];b.textAlign=C[2];b.textBaseline=C[3];++p;break;case 12:La?ra++:b.stroke();++p;break;default:++p}}Pa&&a.Wa(b,e);ra&&b.stroke()}Hs.prototype.i=function(a,b,c,d,e){Ks(this,a,b,c,d,e,this.a,void 0,void 0)};
function Ls(a){var b=a.b;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[2]=c;e=a.b;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function Ms(a,b){a.ta[2]=a.a.length;a.ta=null;a.R[2]=a.b.length;a.R=null;var c=[6,b];a.a.push(c);a.b.push(c)}Hs.prototype.Je=na;Hs.prototype.Gf=function(){return this.Y};function Ns(a,b,c,d){Hs.call(this,a,b,c,d);this.M=this.S=null;this.G=this.C=this.A=this.u=this.I=this.v=this.o=this.j=this.l=this.g=this.f=void 0}u(Ns,Hs);
Ns.prototype.qc=function(a,b){if(this.M){Js(this,b);var c=a.ha(),d=this.coordinates.length,c=Is(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.M,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);this.b.push([4,d,c,this.S,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);Ms(this,b)}};
Ns.prototype.oc=function(a,b){if(this.M){Js(this,b);var c=a.ha(),d=this.coordinates.length,c=Is(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.M,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);this.b.push([4,d,c,this.S,this.f,this.g,this.l,this.j,this.o,this.v,this.I,this.u,this.A,this.C,this.G]);Ms(this,b)}};Ns.prototype.Je=function(){Ls(this);this.g=this.f=void 0;this.M=this.S=null;this.G=this.C=this.u=this.I=this.v=this.o=this.j=this.A=this.l=void 0};
Ns.prototype.Vb=function(a){var b=a.Hc(),c=a.jc(),d=a.cg(1),e=a.Z(1),f=a.Pc();this.f=b[0];this.g=b[1];this.S=d;this.M=e;this.l=c[1];this.j=a.g;this.o=f[0];this.v=f[1];this.I=a.o;this.u=a.l;this.A=a.c;this.C=a.v;this.G=c[0]};function Os(a,b,c,d){Hs.call(this,a,b,c,d);this.g=null;this.f={Kd:void 0,Ed:void 0,Fd:null,Gd:void 0,Hd:void 0,Id:void 0,Jd:void 0,Sf:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Os,Hs);function Ps(a,b,c,d,e){var f=a.coordinates.length;b=Is(a,b,c,d,e,!1,!1);f=[8,f,b];a.a.push(f);a.b.push(f);return d}k=Os.prototype;k.Gf=function(){this.g||(this.g=Na(this.Y),0<this.c&&Ka(this.g,this.resolution*(this.c+1)/2,this.g));return this.g};
function Qs(a){var b=a.f,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineDashOffset,g=b.lineJoin,h=b.lineWidth,l=b.miterLimit;b.Kd==c&&b.Ed==d&&ia(b.Fd,e)&&b.Gd==f&&b.Hd==g&&b.Id==h&&b.Jd==l||(b.Sf!=a.coordinates.length&&(a.a.push([12]),b.Sf=a.coordinates.length),a.a.push([10,c,h,d,g,l,e,f,!0,1],[1]),b.Kd=c,b.Ed=d,b.Fd=e,b.Gd=f,b.Hd=g,b.Id=h,b.Jd=l)}
k.Qb=function(a,b){var c=this.f,d=c.lineWidth;void 0!==c.strokeStyle&&void 0!==d&&(Qs(this),Js(this,b),this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]),c=a.ha(),Ps(this,c,0,c.length,a.sa()),this.b.push([12]),Ms(this,b))};
k.nc=function(a,b){var c=this.f,d=c.lineWidth;if(void 0!==c.strokeStyle&&void 0!==d){Qs(this);Js(this,b);this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]);var c=a.Rb(),d=a.ha(),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Ps(this,d,f,c[g],e);this.b.push([12]);Ms(this,b)}};k.Je=function(){this.f.Sf!=this.coordinates.length&&this.a.push([12]);Ls(this);this.f=null};
k.Na=function(a,b){var c=b.a;this.f.strokeStyle=Vc(c?c:Oh);c=b.i;this.f.lineCap=void 0!==c?c:"round";c=b.f;this.f.lineDash=c?c:Nh;c=b.g;this.f.lineDashOffset=c?c:0;c=b.l;this.f.lineJoin=void 0!==c?c:"round";c=b.c;this.f.lineWidth=void 0!==c?c:1;c=b.j;this.f.miterLimit=void 0!==c?c:10;this.f.lineWidth>this.c&&(this.c=this.f.lineWidth,this.g=null)};function Rs(a,b,c,d){Hs.call(this,a,b,c,d);this.g=null;this.f={Yg:void 0,Kd:void 0,Ed:void 0,Fd:null,Gd:void 0,Hd:void 0,Id:void 0,Jd:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Rs,Hs);
function Ss(a,b,c,d,e){var f=a.f,g=void 0!==f.fillStyle,f=void 0!=f.strokeStyle,h=d.length,l=[1];a.a.push(l);a.b.push(l);for(l=0;l<h;++l){var m=d[l],p=a.coordinates.length;c=Is(a,b,c,m,e,!0,!f);c=[8,p,c];a.a.push(c);a.b.push(c);f&&(c=[3],a.a.push(c),a.b.push(c));c=m}b=[7];a.b.push(b);g&&a.a.push(b);f&&(g=[12],a.a.push(g),a.b.push(g));return c}k=Rs.prototype;
k.$b=function(a,b){var c=this.f,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Ts(this,a);Js(this,b);this.b.push([9,Sc(Mh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var e=a.ha(),d=this.coordinates.length;Is(this,e,0,e.length,a.sa(),!1,!1);e=[1];d=[2,d];this.a.push(e,d);this.b.push(e,d);d=[7];this.b.push(d);void 0!==c.fillStyle&&this.a.push(d);void 0!==c.strokeStyle&&(c=[12],this.a.push(c),this.b.push(c));
Ms(this,b)}};k.rc=function(a,b){var c=this.f;Ts(this,a);Js(this,b);this.b.push([9,Sc(Mh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.Rb(),d=a.fc();Ss(this,d,0,c,a.sa());Ms(this,b)};
k.pc=function(a,b){var c=this.f,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){Ts(this,a);Js(this,b);this.b.push([9,Sc(Mh)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.c,d=$h(a),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Ss(this,d,f,c[g],e);Ms(this,b)}};k.Je=function(){Ls(this);this.f=null;var a=this.oa;if(a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
k.Gf=function(){this.g||(this.g=Na(this.Y),0<this.c&&Ka(this.g,this.resolution*(this.c+1)/2,this.g));return this.g};
k.Na=function(a,b){var c=this.f;if(a){var d=a.b;c.fillStyle=Vc(d?d:Mh)}else c.fillStyle=void 0;b?(d=b.a,c.strokeStyle=Vc(d?d:Oh),d=b.i,c.lineCap=void 0!==d?d:"round",d=b.f,c.lineDash=d?d.slice():Nh,d=b.g,c.lineDashOffset=d?d:0,d=b.l,c.lineJoin=void 0!==d?d:"round",d=b.c,c.lineWidth=void 0!==d?d:1,d=b.j,c.miterLimit=void 0!==d?d:10,c.lineWidth>this.c&&(this.c=c.lineWidth,this.g=null)):(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineDashOffset=void 0,c.lineJoin=void 0,c.lineWidth=void 0,
c.miterLimit=void 0)};function Ts(a,b){var c=a.f,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineDashOffset,l=c.lineJoin,m=c.lineWidth,p=c.miterLimit;if(void 0!==d&&("string"!==typeof d||c.Yg!=d)){var n=[9,d];"string"!==typeof d&&(d=b.D(),n.push([d[0],d[3]]));a.a.push(n);c.Yg=c.fillStyle}void 0===e||c.Kd==e&&c.Ed==f&&ia(c.Fd,g)&&c.Gd==h&&c.Hd==l&&c.Id==m&&c.Jd==p||(a.a.push([10,e,m,f,l,p,g,h,!0,1]),c.Kd=e,c.Ed=f,c.Fd=g,c.Gd=h,c.Hd=l,c.Id=m,c.Jd=p)};function Us(a,b,c,d){Hs.call(this,a,b,c,d);this.G=this.C=this.A=null;this.Fa="";this.o=this.j=0;this.v=void 0;this.u=this.I=0;this.l=this.g=this.f=null}u(Us,Hs);
Us.prototype.xc=function(a,b,c,d,e,f){if(""!==this.Fa&&this.l&&(this.f||this.g)){if(this.f){e=this.f;var g=this.A;if(!g||g.fillStyle!=e.fillStyle){var h=[9,e.fillStyle];this.a.push(h);this.b.push(h);g?g.fillStyle=e.fillStyle:this.A={fillStyle:e.fillStyle}}}this.g&&(e=this.g,g=this.C,g&&g.lineCap==e.lineCap&&g.lineDash==e.lineDash&&g.lineDashOffset==e.lineDashOffset&&g.lineJoin==e.lineJoin&&g.lineWidth==e.lineWidth&&g.miterLimit==e.miterLimit&&g.strokeStyle==e.strokeStyle||(h=[10,e.strokeStyle,e.lineWidth,
e.lineCap,e.lineJoin,e.miterLimit,e.lineDash,e.lineDashOffset,!1,1],this.a.push(h),this.b.push(h),g?(g.lineCap=e.lineCap,g.lineDash=e.lineDash,g.lineDashOffset=e.lineDashOffset,g.lineJoin=e.lineJoin,g.lineWidth=e.lineWidth,g.miterLimit=e.miterLimit,g.strokeStyle=e.strokeStyle):this.C={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle}));e=this.l;g=this.G;g&&g.font==e.font&&g.textAlign==
e.textAlign&&g.textBaseline==e.textBaseline||(h=[11,e.font,e.textAlign,e.textBaseline],this.a.push(h),this.b.push(h),g?(g.font=e.font,g.textAlign=e.textAlign,g.textBaseline=e.textBaseline):this.G={font:e.font,textAlign:e.textAlign,textBaseline:e.textBaseline});Js(this,f);e=this.coordinates.length;a=Is(this,a,b,c,d,!1,!1);a=[5,e,a,this.Fa,this.j,this.o,this.I,this.u,!!this.f,!!this.g,this.v];this.a.push(a);this.b.push(a);Ms(this,f)}};
Us.prototype.Tb=function(a){if(a){var b=a.Ca();b?(b=b.b,b=Vc(b?b:Mh),this.f?this.f.fillStyle=b:this.f={fillStyle:b}):this.f=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.f,f=c.g,g=c.l,h=c.c,c=c.j,d=void 0!==d?d:"round",e=e?e.slice():Nh,f=void 0!==f?f:0,g=void 0!==g?g:"round",h=void 0!==h?h:1,c=void 0!==c?c:10,b=Vc(b?b:Oh);if(this.g){var l=this.g;l.lineCap=d;l.lineDash=e;l.lineDashOffset=f;l.lineJoin=g;l.lineWidth=h;l.miterLimit=c;l.strokeStyle=b}else this.g={lineCap:d,lineDash:e,lineDashOffset:f,lineJoin:g,
lineWidth:h,miterLimit:c,strokeStyle:b}}else this.g=null;var m=a.a,b=a.f,d=a.c,e=a.j,h=a.i,c=a.b,f=a.Pa(),g=a.g,l=a.l;a=void 0!==m?m:"10px sans-serif";g=void 0!==g?g:"center";l=void 0!==l?l:"middle";this.l?(m=this.l,m.font=a,m.textAlign=g,m.textBaseline=l):this.l={font:a,textAlign:g,textBaseline:l};this.Fa=void 0!==f?f:"";this.j=void 0!==b?b:0;this.o=void 0!==d?d:0;this.v=void 0!==e?e:!1;this.I=void 0!==h?h:0;this.u=void 0!==c?c:1}else this.Fa=""};function Vs(a,b,c,d,e){this.I=a;this.c=b;this.o=d;this.v=c;this.g=e;this.a={};this.l=Xc(1,1);this.j=vh()}u(Vs,ei);var Ws={0:[[!0]]};function Xs(a,b,c){var d,e=Math.floor(a.length/2);if(b>=e)for(d=e;d<b;d++)a[d][c]=!0;else if(b<e)for(d=b+1;d<e;d++)a[d][c]=!0}
function Ys(a){if(void 0!==Ws[a])return Ws[a];for(var b=2*a+1,c=Array(b),d=0;d<b;d++)c[d]=Array(b);for(var b=a,e=d=0;b>=d;)Xs(c,a+b,a+d),Xs(c,a+d,a+b),Xs(c,a-d,a+b),Xs(c,a-b,a+d),Xs(c,a-b,a-d),Xs(c,a-d,a-b),Xs(c,a+d,a-b),Xs(c,a+b,a-d),d++,e+=1+2*d,0<2*(e-b)+1&&(--b,e+=1-2*b);return Ws[a]=c}function Zs(a){for(var b in a.a){var c=a.a[b],d;for(d in c)c[d].Je()}}
Vs.prototype.Aa=function(a,b,c,d,e,f){d=Math.round(d);var g=2*d+1,h=Eh(this.j,d+.5,d+.5,1/b,-1/b,-c,-a[0],-a[1]),l=this.l;l.canvas.width!==g||l.canvas.height!==g?(l.canvas.width=g,l.canvas.height=g):l.clearRect(0,0,g,g);var m;void 0!==this.g&&(m=Ia(),Ja(m,a),Ka(m,b*(this.g+d),m));var p=Ys(d);return $s(this,l,h,c,e,function(a){for(var b=l.getImageData(0,0,g,g).data,c=0;c<g;c++)for(var d=0;d<g;d++)if(p[c][d]&&0<b[4*(d*g+c)+3]){if(a=f(a))return a;l.clearRect(0,0,g,g);return}},m)};
function at(a,b){var c=a.c,d=c[0],e=c[1],f=c[2],c=c[3],d=[d,e,d,c,f,c,f,e];df(d,0,8,2,b,d);return d}Vs.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new bt[b](this.I,this.c,this.v,this.o),d[b]=c);return c};Vs.prototype.f=function(){return sb(this.a)};
Vs.prototype.i=function(a,b,c,d,e,f){var g=Object.keys(this.a).map(Number);g.sort(da);var h=at(this,c);a.save();a.beginPath();a.moveTo(h[0],h[1]);a.lineTo(h[2],h[3]);a.lineTo(h[4],h[5]);a.lineTo(h[6],h[7]);a.clip();f=f?f:di;var l,m,p,n,q,h=0;for(l=g.length;h<l;++h)for(n=this.a[g[h].toString()],m=0,p=f.length;m<p;++m)q=n[f[m]],void 0!==q&&q.i(a,b,c,d,e);a.restore()};
function $s(a,b,c,d,e,f,g){var h=Object.keys(a.a).map(Number);h.sort(function(a,b){return b-a});var l,m,p,n,q;l=0;for(m=h.length;l<m;++l)for(n=a.a[h[l].toString()],p=di.length-1;0<=p;--p)if(q=n[di[p]],void 0!==q&&(q=Ks(q,b,1,c,d,e,q.b,f,g)))return q}var bt={Circle:Rs,Image:Ns,LineString:Os,Polygon:Rs,Text:Us};function ct(a){Fc.call(this);this.a=a}u(ct,Fc);ct.prototype.Aa=na;ct.prototype.Ke=bf;ct.prototype.Cf=function(a,b,c){return function(d,e){return dt(a,b,d,e,function(a){c[d]||(c[d]={});c[d][a.Ga.toString()]=a})}};ct.prototype.ea=function(a){2===a.target.V()&&et(this)};function ft(a,b){var c=b.V();2!=c&&3!=c&&B(b,"change",a.ea,a);0==c&&(b.load(),c=b.V());return 2==c}function et(a){var b=a.a;b.Kb()&&"ready"==b.Nf()&&a.s()}
function gt(a,b){b.fi()&&a.postRenderFunctions.push(function(a,b,e){b=w(a).toString();a.gd(e.viewState.projection,e.usedTiles[b])}.bind(null,b))}function ht(a,b){if(b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[w(c).toString()]=c}}function it(a,b){var c=b.R;void 0!==c&&("string"===typeof c?a.logos[c]="":c&&(qa("string"==typeof c.href,44),qa("string"==typeof c.src,45),a.logos[c.src]=c.href))}
function jt(a,b,c,d){b=w(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.da<a.da&&(a.da=d.da),d.ba>a.ba&&(a.ba=d.ba),d.fa<a.fa&&(a.fa=d.fa),d.ja>a.ja&&(a.ja=d.ja)):a[b][c]=d:(a[b]={},a[b][c]=d)}
function kt(a,b,c,d,e,f,g,h,l,m){var p=w(b).toString();p in a.wantedTiles||(a.wantedTiles[p]={});var n=a.wantedTiles[p];a=a.tileQueue;var q=c.minZoom,r,v,x,y,z,A;for(A=g;A>=q;--A)for(v=cc(c,f,A,v),x=c.La(A),y=v.da;y<=v.ba;++y)for(z=v.fa;z<=v.ja;++z)g-A<=h?(r=b.Lc(A,y,z,d,e),0==r.V()&&(n[r.ib()]=!0,r.ib()in a.a||a.i([r,p,ic(c,r.Ga),x])),l&&l.call(m,r)):b.Eg(A,y,z,e)};function lt(a){ct.call(this,a);this.ia=vh()}u(lt,ct);function mt(a,b,c){var d=b.pixelRatio,e=b.size[0]*d,f=b.size[1]*d,g=b.viewState.rotation,h=eb(c),l=db(c),m=cb(c);c=bb(c);Ah(b.coordinateToPixelTransform,h);Ah(b.coordinateToPixelTransform,l);Ah(b.coordinateToPixelTransform,m);Ah(b.coordinateToPixelTransform,c);a.save();Ph(a,-g,e/2,f/2);a.beginPath();a.moveTo(h[0]*d,h[1]*d);a.lineTo(l[0]*d,l[1]*d);a.lineTo(m[0]*d,m[1]*d);a.lineTo(c[0]*d,c[1]*d);a.clip();Ph(a,g,e/2,f/2)}
function nt(a,b,c,d,e){var f=a.a;if(Ec(f,b)){var g=d.size[0]*d.pixelRatio,h=d.size[1]*d.pixelRatio,l=d.viewState.rotation;Ph(c,-l,g/2,h/2);a=e?e:ot(a,d,0);f.b(new Lh(b,new Rh(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));Ph(c,l,g/2,h/2)}}lt.prototype.v=function(a,b,c,d){if(this.Aa(a,b,0,af,this))return c.call(d,this.a,null)};lt.prototype.Ue=function(a,b,c,d){nt(this,"postcompose",a,b,d)};
function ot(a,b,c){var d=b.viewState,e=b.pixelRatio,f=e/d.resolution;return Eh(a.ia,e*b.size[0]/2,e*b.size[1]/2,f,-f,-d.rotation,-d.center[0]+c,-d.center[1])};function pt(a,b){return w(a)-w(b)}function qt(a,b){var c=.5*a/b;return c*c}function rt(a,b,c,d,e,f){var g=!1,h,l;if(h=c.Z())l=h.Oe(),2==l||3==l?h.Yi(e,f):(0==l&&h.load(),h.zh(e,f),g=!0);if(e=(0,c.Ra)(b))d=e.Qd(d),(0,st[d.T()])(a,d,c,b);return g}
var st={Point:function(a,b,c,d){var e=c.Z();if(e){if(2!=e.Oe())return;var f=a.b(c.za(),"Image");f.Vb(e);f.qc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(b.ha(),0,2,2,b,d)},LineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.za(),"LineString");f.Na(null,e);f.Qb(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(Yh(b),0,2,2,b,d)},Polygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.za(),"Polygon");g.Na(e,f);g.rc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(Lf(b),
0,2,2,b,d)},MultiPoint:function(a,b,c,d){var e=c.Z();if(e){if(2!=e.Oe())return;var f=a.b(c.za(),"Image");f.Vb(e);f.oc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=b.ha(),a.xc(c,0,c.length,b.sa(),b,d)},MultiLineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.za(),"LineString");f.Na(null,e);f.nc(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=Zh(b),a.xc(c,0,c.length,2,b,d)},MultiPolygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(f||e){var g=a.b(c.za(),"Polygon");g.Na(e,f);g.pc(b,d)}if(e=
c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),c=ai(b),a.xc(c,0,c.length,2,b,d)},GeometryCollection:function(a,b,c,d){b=b.a;var e,f;e=0;for(f=b.length;e<f;++e)(0,st[b[e].T()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.za(),"Circle");g.Na(e,f);g.$b(b,d)}if(e=c.Pa())a=a.b(c.za(),"Text"),a.Tb(e),a.xc(b.Ba(),0,2,2,b,d)}};function tt(a){lt.call(this,a);this.c=!1;this.u=-1;this.o=NaN;this.l=Ia();this.i=this.j=null;this.g=Xc()}u(tt,lt);
tt.prototype.I=function(a,b,c){var d=a.extent,e=a.pixelRatio,f=b.De?a.skippedFeatureUids:{},g=a.viewState,h=g.projection,g=g.rotation,l=h.D(),m=this.a.la(),p=ot(this,a,0);nt(this,"precompose",c,a,p);var n=b.extent,q=void 0!==n;q&&mt(c,a,n);if((n=this.i)&&!n.f()){var r=0,v=0,x;if(Ec(this.a,"render")){x=c.canvas.width;var y=c.canvas.height;if(g){var z=Math.round(Math.sqrt(x*x+y*y)),r=(z-x)/2,v=(z-y)/2;x=y=z}this.g.canvas.width=x;this.g.canvas.height=y;x=this.g}else x=c;y=x.globalAlpha;x.globalAlpha=
b.opacity;x!=c&&x.translate(r,v);var z=a.size[0]*e,A=a.size[1]*e;Ph(x,-g,z/2,A/2);n.i(x,e,p,g,f);if(m.G&&h.a&&!Ta(l,d)){for(var h=d[0],m=hb(l),V=0;h<l[0];)--V,p=m*V,p=ot(this,a,p),n.i(x,e,p,g,f),h+=m;V=0;for(h=d[2];h>l[2];)++V,p=m*V,p=ot(this,a,p),n.i(x,e,p,g,f),h-=m;p=ot(this,a,0)}Ph(x,g,z/2,A/2);x!=c&&(nt(this,"render",x,a,p),c.drawImage(x.canvas,-r,-v),x.translate(-r,-v));x.globalAlpha=y}q&&c.restore();this.Ue(c,a,b,p)};
tt.prototype.Aa=function(a,b,c,d,e){if(this.i){var f=this.a,g={};return this.i.Aa(a,b.viewState.resolution,b.viewState.rotation,c,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};tt.prototype.A=function(){et(this)};
tt.prototype.qd=function(a){function b(a){var b,d=a.Nc();d?b=d.call(a,m):(d=c.i)&&(b=d(a,m));if(b){if(b){d=!1;if(Array.isArray(b))for(var e=0,f=b.length;e<f;++e)d=rt(q,a,b[e],qt(m,p),this.A,this)||d;else d=rt(q,a,b,qt(m,p),this.A,this)||d;a=d}else a=!1;this.c=this.c||a}}var c=this.a,d=c.la();ht(a.attributions,d.l);it(a,d);var e=a.viewHints[0],f=a.viewHints[1],g=c.ea,h=c.ia;if(!this.c&&!g&&e||!h&&f)return!0;var l=a.extent,h=a.viewState,e=h.projection,m=h.resolution,p=a.pixelRatio,f=c.f,n=c.c,g=c.get(ut);
void 0===g&&(g=pt);l=Ka(l,n*m);n=h.projection.D();d.G&&h.projection.a&&!Ta(n,a.extent)&&(a=Math.max(hb(l)/2,hb(n)),l[0]=n[0]-a,l[2]=n[2]+a);if(!this.c&&this.o==m&&this.u==f&&this.j==g&&Ta(this.l,l))return!0;this.i=null;this.c=!1;var q=new Vs(.5*m/p,l,m,d.Ha,c.c);d.Ud(l,m,e);if(g){var r=[];d.ac(l,function(a){r.push(a)},this);r.sort(g);r.forEach(b,this)}else d.ac(l,b,this);Zs(q);this.o=m;this.u=f;this.j=g;this.l=l;this.i=q;return!0};function vt(){this.b="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}u(vt,gi);var wt=new vt;function xt(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}u(xt,hi);var yt=new xt;
function zt(a,b){this.f=a.getUniformLocation(b,"f");this.c=a.getUniformLocation(b,"e");this.g=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"g");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function At(a,b){ct.call(this,b);this.c=a;this.Y=new xi([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.g=this.Fb=null;this.l=void 0;this.v=vh();this.u=vh();this.C=ni();this.I=null}u(At,ct);
function Bt(a,b,c){var d=a.c.f;if(void 0===a.l||a.l!=c){b.postRenderFunctions.push(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))}.bind(null,d,a.g,a.Fb));b=Ki(d,c,c);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.Fb=b;a.g=e;a.l=c}else d.bindFramebuffer(36160,a.g)}
At.prototype.ai=function(a,b,c){Ct(this,"precompose",c,a);qi(c,34962,this.Y);var d=c.b,e=Bi(c,wt,yt),f;this.I?f=this.I:this.I=f=new zt(d,e);c.Rc(e)&&(d.enableVertexAttribArray(f.b),d.vertexAttribPointer(f.b,2,5126,!1,16,0),d.enableVertexAttribArray(f.a),d.vertexAttribPointer(f.a,2,5126,!1,16,8),d.uniform1i(f.i,0));d.uniformMatrix4fv(f.g,!1,oi(this.C,this.v));d.uniformMatrix4fv(f.c,!1,oi(this.C,this.u));d.uniform1f(f.f,b.opacity);d.bindTexture(3553,this.Fb);d.drawArrays(5,0,4);Ct(this,"postcompose",
c,a)};function Ct(a,b,c,d){a=a.a;if(Ec(a,b)){var e=d.viewState;a.b(new Lh(b,new hk(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))}}At.prototype.$f=function(){this.g=this.Fb=null;this.l=void 0};function Dt(a,b){At.call(this,a,b);this.o=!1;this.S=-1;this.R=NaN;this.A=Ia();this.j=this.i=this.G=null}u(Dt,At);k=Dt.prototype;k.ai=function(a,b,c){this.j=b;var d=a.viewState,e=this.i,f=a.size,g=a.pixelRatio,h=this.c.f;e&&!e.f()&&(h.enable(h.SCISSOR_TEST),h.scissor(0,0,f[0]*g,f[1]*g),e.i(c,d.center,d.resolution,d.rotation,f,g,b.opacity,b.De?a.skippedFeatureUids:{}),h.disable(h.SCISSOR_TEST))};k.ra=function(){var a=this.i;a&&(bk(a,this.c.i)(),this.i=null);At.prototype.ra.call(this)};
k.Aa=function(a,b,c,d,e){if(this.i&&this.j){c=b.viewState;var f=this.a,g={};return this.i.Aa(a,this.c.i,c.center,c.resolution,c.rotation,b.size,b.pixelRatio,this.j.opacity,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};k.Ke=function(a,b){if(this.i&&this.j){var c=b.viewState;return gk(this.i,a,this.c.i,c.resolution,c.rotation,b.pixelRatio,this.j.opacity,b.skippedFeatureUids)}return!1};
k.Zf=function(a,b,c,d){a=Ah(b.pixelToCoordinateTransform,a.slice());if(this.Ke(a,b))return c.call(d,this.a,null)};k.bi=function(){et(this)};
k.ag=function(a,b,c){function d(a){var b,c=a.Nc();c?b=c.call(a,m):(c=e.i)&&(b=c(a,m));if(b){if(b){c=!1;if(Array.isArray(b))for(var d=b.length-1;0<=d;--d)c=rt(q,a,b[d],qt(m,p),this.bi,this)||c;else c=rt(q,a,b,qt(m,p),this.bi,this)||c;a=c}else a=!1;this.o=this.o||a}}var e=this.a;b=e.la();ht(a.attributions,b.l);it(a,b);var f=a.viewHints[0],g=a.viewHints[1],h=e.ea,l=e.ia;if(!this.o&&!h&&f||!l&&g)return!0;var g=a.extent,h=a.viewState,f=h.projection,m=h.resolution,p=a.pixelRatio,h=e.f,n=e.c,l=e.get(ut);
void 0===l&&(l=pt);g=Ka(g,n*m);if(!this.o&&this.R==m&&this.S==h&&this.G==l&&Ta(this.A,g))return!0;this.i&&a.postRenderFunctions.push(bk(this.i,c));this.o=!1;var q=new ak(.5*m/p,g,e.c);b.Ud(g,m,f);if(l){var r=[];b.ac(g,function(a){r.push(a)},this);r.sort(l);r.forEach(d,this)}else b.ac(g,d,this);ck(q,c);this.R=m;this.S=h;this.G=l;this.A=g;this.i=q;return!0};function R(a){a=a?a:{};var b=pb({},a);delete b.style;delete b.renderBuffer;delete b.updateWhileAnimating;delete b.updateWhileInteracting;qh.call(this,b);this.c=void 0!==a.renderBuffer?a.renderBuffer:100;this.A=null;this.i=void 0;this.g(a.style);this.ea=void 0!==a.updateWhileAnimating?a.updateWhileAnimating:!1;this.ia=void 0!==a.updateWhileInteracting?a.updateWhileInteracting:!1}u(R,qh);R.prototype.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new tt(this):"webgl"===c&&(b=new Dt(a,this));return b};
R.prototype.C=function(){return this.A};R.prototype.G=function(){return this.i};R.prototype.g=function(a){this.A=void 0!==a?a:cl;this.i=null===a?void 0:al(this.A);this.s()};var ut="renderOrder";function Et(){return[[-Infinity,-Infinity,Infinity,Infinity]]};function Ft(a){Gc.call(this);this.c=Gb(a.projection);this.l=Gt(a.attributions);this.R=a.logo;this.Ja=void 0!==a.state?a.state:"ready";this.G=void 0!==a.wrapX?a.wrapX:!1}u(Ft,Gc);function Gt(a){if("string"===typeof a)return[new nc({html:a})];if(a instanceof nc)return[a];if(Array.isArray(a)){for(var b=a.length,c=Array(b),d=0;d<b;d++){var e=a[d];c[d]="string"===typeof e?new nc({html:e}):e}return c}return null}k=Ft.prototype;k.Aa=na;k.xa=function(){return this.l};k.wa=function(){return this.R};k.ya=function(){return this.c};
k.V=function(){return this.Ja};k.va=function(){this.s()};k.ua=function(a){this.l=Gt(a);this.s()};function Ht(a,b){a.Ja=b;a.s()};function S(a){a=a||{};Ft.call(this,{attributions:a.attributions,logo:a.logo,projection:void 0,state:"ready",wrapX:void 0!==a.wrapX?a.wrapX:!0});this.Y=na;this.S=a.format;this.Ha=void 0==a.overlaps?!0:a.overlaps;this.ea=a.url;a.loader?this.Y=a.loader:void 0!==this.ea&&(qa(this.S,7),this.Y=Al(this.ea,this.S));this.Bd=a.strategy?a.strategy:Et;var b=void 0!==a.useSpatialIndex?a.useSpatialIndex:!0;this.a=b?new Dj:null;this.oa=new Dj;this.g={};this.j={};this.o={};this.v={};this.i=null;var c,d;a.features instanceof
D?(c=a.features,d=c.a):Array.isArray(a.features)&&(d=a.features);b||c||(c=new D(d));d&&It(this,d);c&&Jt(this,c)}u(S,Ft);k=S.prototype;k.zb=function(a){var b=w(a).toString();if(Kt(this,b,a)){Lt(this,b,a);var c=a.U();c?(b=c.D(),this.a&&this.a.Ea(b,a)):this.g[b]=a;this.b(new Mt("addfeature",a))}this.s()};function Lt(a,b,c){a.v[b]=[B(c,"change",a.ji,a),B(c,"propertychange",a.ji,a)]}
function Kt(a,b,c){var d=!0,e=c.a;void 0!==e?e.toString()in a.j?d=!1:a.j[e.toString()]=c:(qa(!(b in a.o),30),a.o[b]=c);return d}k.dd=function(a){It(this,a);this.s()};function It(a,b){var c,d,e,f,g=[],h=[],l=[];d=0;for(e=b.length;d<e;d++)f=b[d],c=w(f).toString(),Kt(a,c,f)&&h.push(f);d=0;for(e=h.length;d<e;d++){f=h[d];c=w(f).toString();Lt(a,c,f);var m=f.U();m?(c=m.D(),g.push(c),l.push(f)):a.g[c]=f}a.a&&a.a.load(g,l);d=0;for(e=h.length;d<e;d++)a.b(new Mt("addfeature",h[d]))}
function Jt(a,b){var c=!1;B(a,"addfeature",function(a){c||(c=!0,b.push(a.feature),c=!1)});B(a,"removefeature",function(a){c||(c=!0,b.remove(a.feature),c=!1)});B(b,"add",function(a){c||(c=!0,this.zb(a.element),c=!1)},a);B(b,"remove",function(a){c||(c=!0,this.Db(a.element),c=!1)},a);a.i=b}
k.clear=function(a){if(a){for(var b in this.v)this.v[b].forEach(rc);this.i||(this.v={},this.j={},this.o={})}else if(this.a){this.a.forEach(this.ug,this);for(var c in this.g)this.ug(this.g[c])}this.i&&this.i.clear();this.a&&this.a.clear();this.oa.clear();this.g={};this.b(new Mt("clear"));this.s()};k.bh=function(a,b){if(this.a)return this.a.forEach(a,b);if(this.i)return this.i.forEach(a,b)};function Nt(a,b,c){a.ac([b[0],b[1],b[0],b[1]],function(a){if(a.U().sb(b))return c.call(void 0,a)})}
k.ac=function(a,b,c){if(this.a)return Ij(this.a,a,b,c);if(this.i)return this.i.forEach(b,c)};k.dh=function(a,b,c){return this.ac(a,function(d){if(d.U().Xa(a)&&(d=b.call(c,d)))return d})};k.lh=function(){return this.i};k.Ne=function(){var a;this.i?a=this.i.a:this.a&&(a=Fj(this.a),sb(this.g)||ga(a,rb(this.g)));return a};k.kh=function(a){var b=[];Nt(this,a,function(a){b.push(a)});return b};k.Hf=function(a){return Gj(this.a,a)};
k.gh=function(a,b){var c=a[0],d=a[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity],l=b?b:af;Ij(this.a,h,function(a){if(l(a)){var b=a.U(),m=g;g=b.Gb(c,d,f,g);g<m&&(e=a,a=Math.sqrt(g),h[0]=c-a,h[1]=d-a,h[2]=c+a,h[3]=d+a)}});return e};k.D=function(){return this.a.D()};k.jh=function(a){a=this.j[a.toString()];return void 0!==a?a:null};k.hi=function(){return this.S};k.ii=function(){return this.ea};
k.ji=function(a){a=a.target;var b=w(a).toString(),c=a.U();c?(c=c.D(),b in this.g?(delete this.g[b],this.a&&this.a.Ea(c,a)):this.a&&Ej(this.a,c,a)):b in this.g||(this.a&&this.a.remove(a),this.g[b]=a);c=a.a;void 0!==c?(c=c.toString(),b in this.o?(delete this.o[b],this.j[c]=a):this.j[c]!==a&&(Ot(this,a),this.j[c]=a)):b in this.o||(Ot(this,a),this.o[b]=a);this.s();this.b(new Mt("changefeature",a))};
k.Ud=function(a,b,c){var d=this.oa;a=this.Bd(a,b);var e,f;e=0;for(f=a.length;e<f;++e){var g=a[e];Ij(d,g,function(a){return Ta(a.extent,g)})||(this.Y.call(this,g,b,c),d.Ea(g,{extent:g.slice()}))}};k.Db=function(a){var b=w(a).toString();b in this.g?delete this.g[b]:this.a&&this.a.remove(a);this.ug(a);this.s()};k.ug=function(a){var b=w(a).toString();this.v[b].forEach(rc);delete this.v[b];var c=a.a;void 0!==c?delete this.j[c.toString()]:delete this.o[b];this.b(new Mt("removefeature",a))};
function Ot(a,b){for(var c in a.j)if(a.j[c]===b){delete a.j[c];break}}function Mt(a,b){Bc.call(this,a);this.feature=b}u(Mt,Bc);function Pt(a){og.call(this,{handleDownEvent:Qt,handleEvent:Rt,handleUpEvent:St});this.ea=null;this.u=!1;this.lb=a.source?a.source:null;this.Ha=a.features?a.features:null;this.ak=a.snapTolerance?a.snapTolerance:12;this.S=a.type;this.g=Tt(this.S);this.Ja=a.minPoints?a.minPoints:this.g===Ut?3:2;this.oa=a.maxPoints?a.maxPoints:Infinity;this.Bd=a.finishCondition?a.finishCondition:af;var b=a.geometryFunction;if(!b)if("Circle"===this.S)b=function(a,b){var c=b?b:new hs([NaN,NaN]);c.yg(a[0],Math.sqrt(Xe(a[0],
a[1])));return c};else{var c,d=this.g;d===Vt?c=E:d===Wt?c=M:d===Ut&&(c=F);b=function(a,b){var e=b;e?d===Ut?e.pa([a[0].concat([a[0][0]])]):e.pa(a):e=new c(a);return e}}this.Ra=b;this.R=this.C=this.a=this.G=this.j=this.o=null;this.mb=a.clickTolerance?a.clickTolerance*a.clickTolerance:36;this.ia=new R({source:new S({useSpatialIndex:!1,wrapX:a.wrapX?a.wrapX:!1}),style:a.style?a.style:Xt()});this.Oa=a.geometryName;this.Yj=a.condition?a.condition:jg;this.rf=a.freehand?af:a.freehandCondition?a.freehandCondition:
kg;B(this,Ic("active"),this.aj,this)}u(Pt,og);function Xt(){var a=dl();return function(b){return a[b.U().T()]}}k=Pt.prototype;k.setMap=function(a){og.prototype.setMap.call(this,a);this.aj()};function Rt(a){this.u=this.g!==Vt&&this.rf(a);var b=!this.u;this.u&&"pointerdrag"===a.type&&null!==this.j?(Yt(this,a),b=!1):"pointermove"===a.type?b=Zt(this,a):"dblclick"===a.type&&(b=!1);return pg.call(this,a)&&b}
function Qt(a){return this.u?(this.ea=a.pixel,this.o||$t(this,a),!0):this.Yj(a)?(this.ea=a.pixel,!0):!1}function St(a){var b=this.ea,c=a.pixel,d=b[0]-c[0],b=b[1]-c[1],d=d*d+b*b,b=!0,c=this.g===au;(this.u?d>this.mb:d<=this.mb)?(Zt(this,a),this.o?this.u||c?this.Nd():bu(this,a)?this.Bd(a)&&this.Nd():Yt(this,a):($t(this,a),this.g===Vt&&this.Nd()),b=!1):c&&(this.o=null);return b}
function Zt(a,b){if(a.o){var c=b.coordinate,d=a.j.U(),e;a.g===Vt?e=a.a:a.g===Ut?(e=a.a[0],e=e[e.length-1],bu(a,b)&&(c=a.o.slice())):(e=a.a,e=e[e.length-1]);e[0]=c[0];e[1]=c[1];a.Ra(a.a,d);a.G&&a.G.U().pa(c);d instanceof F&&a.g!==Ut?(a.C||(a.C=new H(new M(null))),d=d.nh(0),c=a.C.U(),c.ca(d.ka,d.ha())):a.R&&(c=a.C.U(),c.pa(a.R));cu(a)}else c=b.coordinate.slice(),a.G?a.G.U().pa(c):(a.G=new H(new E(c)),cu(a));return!0}
function bu(a,b){var c=!1;if(a.j){var d=!1,e=[a.o];a.g===Wt?d=a.a.length>a.Ja:a.g===Ut&&(d=a.a[0].length>a.Ja,e=[a.a[0][0],a.a[0][a.a[0].length-2]]);if(d)for(var d=b.map,f=0,g=e.length;f<g;f++){var h=e[f],l=d.Ka(h),m=b.pixel,c=m[0]-l[0],l=m[1]-l[1];if(c=Math.sqrt(c*c+l*l)<=(a.u?1:a.ak)){a.o=h;break}}}return c}
function $t(a,b){var c=b.coordinate;a.o=c;a.g===Vt?a.a=c.slice():a.g===Ut?(a.a=[[c.slice(),c.slice()]],a.R=a.a[0]):(a.a=[c.slice(),c.slice()],a.g===au&&(a.R=a.a));a.R&&(a.C=new H(new M(a.R)));c=a.Ra(a.a);a.j=new H;a.Oa&&a.j.Vc(a.Oa);a.j.Sa(c);cu(a);a.b(new du("drawstart",a.j))}
function Yt(a,b){var c=b.coordinate,d=a.j.U(),e,f;a.g===Wt?(a.o=c.slice(),f=a.a,f.length>=a.oa&&(a.u?f.pop():e=!0),f.push(c.slice()),a.Ra(f,d)):a.g===Ut&&(f=a.a[0],f.length>=a.oa&&(a.u?f.pop():e=!0),f.push(c.slice()),e&&(a.o=f[0]),a.Ra(a.a,d));cu(a);e&&a.Nd()}k.cp=function(){var a=this.j.U(),b,c;this.g===Wt?(b=this.a,b.splice(-2,1),this.Ra(b,a)):this.g===Ut&&(b=this.a[0],b.splice(-2,1),c=this.C.U(),c.pa(b),this.Ra(this.a,a));0===b.length&&(this.o=null);cu(this)};
k.Nd=function(){var a=eu(this),b=this.a,c=a.U();this.g===Wt?(b.pop(),this.Ra(b,c)):this.g===Ut&&(b[0].pop(),this.Ra(b,c),b=c.X());"MultiPoint"===this.S?a.Sa(new O([b])):"MultiLineString"===this.S?a.Sa(new N([b])):"MultiPolygon"===this.S&&a.Sa(new P([b]));this.b(new du("drawend",a));this.Ha&&this.Ha.push(a);this.lb&&this.lb.zb(a)};function eu(a){a.o=null;var b=a.j;b&&(a.j=null,a.G=null,a.C=null,a.ia.la().clear(!0));return b}
k.Om=function(a){var b=a.U();this.j=a;this.a=b.X();a=this.a[this.a.length-1];this.o=a.slice();this.a.push(a.slice());cu(this);this.b(new du("drawstart",this.j))};k.Zc=bf;function cu(a){var b=[];a.j&&b.push(a.j);a.C&&b.push(a.C);a.G&&b.push(a.G);a=a.ia.la();a.clear(!0);a.dd(b)}k.aj=function(){var a=this.v,b=this.c();a&&b||eu(this);this.ia.setMap(b?a:null)};
function Tt(a){var b;"Point"===a||"MultiPoint"===a?b=Vt:"LineString"===a||"MultiLineString"===a?b=Wt:"Polygon"===a||"MultiPolygon"===a?b=Ut:"Circle"===a&&(b=au);return b}var Vt="Point",Wt="LineString",Ut="Polygon",au="Circle";function du(a,b){Bc.call(this,a);this.feature=b}u(du,Bc);function fu(a){this.a=this.j=null;this.C=!1;this.G=this.o=null;a||(a={});a.extent&&this.g(a.extent);og.call(this,{handleDownEvent:gu,handleDragEvent:hu,handleEvent:iu,handleUpEvent:ju});this.u=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.boxStyle?a.boxStyle:ku(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.R=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.pointerStyle?a.pointerStyle:lu(),updateWhileAnimating:!0,updateWhileInteracting:!0})}u(fu,og);
function iu(a){if(!(a instanceof Bd))return!0;if("pointermove"==a.type&&!this.A){var b=a.pixel,c=a.map,d=mu(this,b,c);d||(d=c.Za(b));nu(this,d)}pg.call(this,a);return!1}
function gu(a){function b(a){var b=null,c=null;a[0]==e[0]?b=e[2]:a[0]==e[2]&&(b=e[0]);a[1]==e[1]?c=e[3]:a[1]==e[3]&&(c=e[1]);return null!==b&&null!==c?[b,c]:null}var c=a.pixel,d=a.map,e=this.D();(a=mu(this,c,d))&&e?(c=a[0]==e[0]||a[0]==e[2]?a[0]:null,d=a[1]==e[1]||a[1]==e[3]?a[1]:null,null!==c&&null!==d?this.a=ou(b(a)):null!==c?this.a=pu(b([c,e[1]]),b([c,e[3]])):null!==d&&(this.a=pu(b([e[0],d]),b([e[2],d])))):(a=d.Za(c),this.g([a[0],a[1],a[0],a[1]]),this.a=ou(a));return!0}
function hu(a){this.a&&(a=a.coordinate,this.g(this.a(a)),nu(this,a));return!0}function ju(){this.a=null;var a=this.D();a&&fb(a)||this.g(null);return!1}function ku(){var a=dl();return function(){return a.Polygon}}function lu(){var a=dl();return function(){return a.Point}}function ou(a){return function(b){return Ha([a,b])}}function pu(a,b){return a[0]==b[0]?function(c){return Ha([a,[c[0],b[1]]])}:a[1]==b[1]?function(c){return Ha([a,[b[0],c[1]]])}:null}
function mu(a,b,c){function d(a,b){return Ze(e,a)-Ze(e,b)}var e=c.Za(b),f=a.D();if(f){f=[[[f[0],f[1]],[f[0],f[3]]],[[f[0],f[3]],[f[2],f[3]]],[[f[2],f[3]],[f[2],f[1]]],[[f[2],f[1]],[f[0],f[1]]]];f.sort(d);var f=f[0],g=Re(e,f),h=c.Ka(g);if(10>=Ye(b,h))return b=c.Ka(f[0]),c=c.Ka(f[1]),b=Xe(h,b),c=Xe(h,c),a.C=10>=Math.sqrt(Math.min(b,c)),a.C&&(g=b>c?f[1]:f[0]),g}return null}function nu(a,b){var c=a.G;c?c.U().pa(b):(c=new H(new E(b)),a.G=c,a.R.la().zb(c))}
fu.prototype.setMap=function(a){this.u.setMap(a);this.R.setMap(a);og.prototype.setMap.call(this,a)};fu.prototype.D=function(){return this.j};fu.prototype.g=function(a){this.j=a?a:null;var b=this.o;b?a?b.Sa(Nf(a)):b.Sa(void 0):(this.o=b=a?new H(Nf(a)):new H({}),this.u.la().zb(b));this.b(new qu(this.j))};function qu(a){Bc.call(this,ru);this.b=a}u(qu,Bc);var ru="extentchanged";function su(a){og.call(this,{handleDownEvent:tu,handleDragEvent:uu,handleEvent:vu,handleUpEvent:wu});this.mb=a.condition?a.condition:ng;this.Oa=function(a){return jg(a)&&ig(a)};this.lb=a.deleteCondition?a.deleteCondition:this.Oa;this.Ha=this.g=null;this.Ja=[0,0];this.C=this.R=!1;this.a=new Dj;this.ia=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.o=this.oa=!1;this.j=[];this.G=new R({source:new S({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.style?a.style:xu(),updateWhileAnimating:!0,updateWhileInteracting:!0});
this.ea={Point:this.Vm,LineString:this.Oh,LinearRing:this.Oh,Polygon:this.Wm,MultiPoint:this.Tm,MultiLineString:this.Sm,MultiPolygon:this.Um,Circle:this.Ip,GeometryCollection:this.Rm};this.u=a.features;this.u.forEach(this.Yf,this);B(this.u,"add",this.Pm,this);B(this.u,"remove",this.Qm,this);this.S=null}u(su,og);k=su.prototype;k.Yf=function(a){var b=a.U();b&&b.T()in this.ea&&this.ea[b.T()].call(this,a,b);(b=this.v)&&b.a&&this.c()&&yu(this,this.Ja,b);B(a,"change",this.Nh,this)};
function zu(a,b){a.C||(a.C=!0,a.b(new Au("modifystart",a.u,b)))}function Bu(a,b){Cu(a,b);a.g&&!a.u.ec()&&(a.G.la().Db(a.g),a.g=null);xc(b,"change",a.Nh,a)}function Cu(a,b){var c=a.a,d=[];c.forEach(function(a){b===a.feature&&d.push(a)});for(var e=d.length-1;0<=e;--e)c.remove(d[e])}k.Ia=function(a){this.g&&!a&&(this.G.la().Db(this.g),this.g=null);og.prototype.Ia.call(this,a)};k.setMap=function(a){this.G.setMap(a);og.prototype.setMap.call(this,a)};k.Pm=function(a){this.Yf(a.element)};
k.Nh=function(a){this.o||(a=a.target,Bu(this,a),this.Yf(a))};k.Qm=function(a){Bu(this,a.element)};k.Vm=function(a,b){var c=b.X(),c={feature:a,geometry:b,na:[c,c]};this.a.Ea(b.D(),c)};k.Tm=function(a,b){var c=b.X(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,geometry:b,depth:[e],index:e,na:[d,d]},this.a.Ea(b.D(),d)};k.Oh=function(a,b){var c=b.X(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,geometry:b,index:d,na:f},this.a.Ea(Ha(f),g)};
k.Sm=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,na:l},this.a.Ea(Ha(l),m)};k.Wm=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,na:l},this.a.Ea(Ha(l),m)};
k.Um=function(a,b){var c=b.X(),d,e,f,g,h,l,m,p,n,q;l=0;for(m=c.length;l<m;++l)for(p=c[l],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)n=d.slice(e,e+2),q={feature:a,geometry:b,depth:[g,l],index:e,na:n},this.a.Ea(Ha(n),q)};k.Ip=function(a,b){var c=b.Ba(),d={feature:a,geometry:b,index:0,na:[c,c]},e={feature:a,geometry:b,index:1,na:[c,c]};d.Ef=e.Ef=[d,e];this.a.Ea(Wa(c),d);this.a.Ea(b.D(),e)};k.Rm=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.ea[d[c].T()].call(this,a,d[c])};
function Du(a,b){var c=a.g;c?c.U().pa(b):(c=new H(new E(b)),a.g=c,a.G.la().zb(c))}function Eu(a,b){return a.index-b.index}
function tu(a){if(!this.mb(a))return!1;yu(this,a.pixel,a.map);this.j.length=0;this.C=!1;var b=this.g;if(b){var c=[],b=b.U().X(),d=Ha([b]),d=Gj(this.a,d),e={};d.sort(Eu);for(var f=0,g=d.length;f<g;++f){var h=d[f],l=h.na,m=w(h.feature),p=h.depth;p&&(m+="-"+p.join("-"));e[m]||(e[m]=Array(2));if("Circle"===h.geometry.T()&&1===h.index)l=Fu(b,h),Ue(l,b)&&!e[m][0]&&(this.j.push([h,0]),e[m][0]=h);else if(Ue(l[0],b)&&!e[m][0])this.j.push([h,0]),e[m][0]=h;else if(Ue(l[1],b)&&!e[m][1]){if("LineString"!==h.geometry.T()&&
"MultiLineString"!==h.geometry.T()||!e[m][0]||0!==e[m][0].index)this.j.push([h,1]),e[m][1]=h}else w(l)in this.Ha&&!e[m][0]&&!e[m][1]&&c.push([h,b])}c.length&&zu(this,a);for(a=c.length-1;0<=a;--a)this.Il.apply(this,c[a])}return!!this.g}
function uu(a){this.R=!1;zu(this,a);a=a.coordinate;for(var b=0,c=this.j.length;b<c;++b){for(var d=this.j[b],e=d[0],f=e.depth,g=e.geometry,h,l=e.na,d=d[1];a.length<g.sa();)a.push(l[d][a.length]);switch(g.T()){case "Point":h=a;l[0]=l[1]=a;break;case "MultiPoint":h=g.X();h[e.index]=a;l[0]=l[1]=a;break;case "LineString":h=g.X();h[e.index+d]=a;l[d]=a;break;case "MultiLineString":h=g.X();h[f[0]][e.index+d]=a;l[d]=a;break;case "Polygon":h=g.X();h[f[0]][e.index+d]=a;l[d]=a;break;case "MultiPolygon":h=g.X();
h[f[1]][f[0]][e.index+d]=a;l[d]=a;break;case "Circle":l[0]=l[1]=a,0===e.index?(this.o=!0,g.wb(a)):(this.o=!0,g.Wc(Ye(g.Ba(),a))),this.o=!1}h&&(e=g,f=h,this.o=!0,e.pa(f),this.o=!1)}Du(this,a)}function wu(a){for(var b,c,d=this.j.length-1;0<=d;--d)if(b=this.j[d][0],c=b.geometry,"Circle"===c.T()){var e=c.Ba(),f=b.Ef[0];b=b.Ef[1];f.na[0]=f.na[1]=e;b.na[0]=b.na[1]=e;Ej(this.a,Wa(e),f);Ej(this.a,c.D(),b)}else Ej(this.a,Ha(b.na),b);this.C&&(this.b(new Au("modifyend",this.u,a)),this.C=!1);return!1}
function vu(a){if(!(a instanceof Bd))return!0;this.S=a;var b;ld(a.map.$())[1]||"pointermove"!=a.type||this.A||(this.Ja=a.pixel,yu(this,a.pixel,a.map));this.g&&this.lb(a)&&(b="singleclick"==a.type&&this.R?!0:this.Ci());"singleclick"==a.type&&(this.R=!1);return pg.call(this,a)&&!b}
function yu(a,b,c){function d(a,b){return Gu(e,a)-Gu(e,b)}var e=c.Za(b),f=Ka(Wa(e),c.$().Ua()*a.ia),f=Gj(a.a,f);if(0<f.length){f.sort(d);var g=f[0],h=g.na,l=Fu(e,g),m=c.Ka(l),p=Ye(b,m);if(p<=a.ia){b={};if("Circle"===g.geometry.T()&&1===g.index)a.oa=!0,Du(a,l);else for(p=c.Ka(h[0]),g=c.Ka(h[1]),c=Xe(m,p),m=Xe(m,g),p=Math.sqrt(Math.min(c,m)),a.oa=p<=a.ia,a.oa&&(l=c>m?h[1]:h[0]),Du(a,l),m=1,c=f.length;m<c;++m)if(l=f[m].na,Ue(h[0],l[0])&&Ue(h[1],l[1])||Ue(h[0],l[1])&&Ue(h[1],l[0]))b[w(l)]=!0;else break;
b[w(h)]=!0;a.Ha=b;return}}a.g&&(a.G.la().Db(a.g),a.g=null)}function Gu(a,b){var c=b.geometry;if("Circle"===c.T()&&1===b.index){var d=Xe(c.Ba(),a),c=Math.sqrt(d)-c.Vd();return c*c}return Ze(a,b.na)}function Fu(a,b){var c=b.geometry;return"Circle"===c.T()&&1===b.index?c.Ab(a):Re(a,b.na)}
k.Il=function(a,b){for(var c=a.na,d=a.feature,e=a.geometry,f=a.depth,g=a.index,h;b.length<e.sa();)b.push(0);switch(e.T()){case "MultiLineString":h=e.X();h[f[0]].splice(g+1,0,b);break;case "Polygon":h=e.X();h[f[0]].splice(g+1,0,b);break;case "MultiPolygon":h=e.X();h[f[1]][f[0]].splice(g+1,0,b);break;case "LineString":h=e.X();h.splice(g+1,0,b);break;default:return}this.o=!0;e.pa(h);this.o=!1;h=this.a;h.remove(a);Hu(this,e,g,f,1);var l={na:[c[0],b],feature:d,geometry:e,depth:f,index:g};h.Ea(Ha(l.na),
l);this.j.push([l,1]);c={na:[b,c[1]],feature:d,geometry:e,depth:f,index:g+1};h.Ea(Ha(c.na),c);this.j.push([c,0]);this.R=!0};
k.Ci=function(){if(this.S&&"pointerdrag"!=this.S.type){var a=this.S;zu(this,a);var b=this.j,c={},d,e,f,g,h,l,m,p,n;for(h=b.length-1;0<=h;--h)g=b[h],p=g[0],n=w(p.feature),p.depth&&(n+="-"+p.depth.join("-")),n in c||(c[n]={}),0===g[1]?(c[n].right=p,c[n].index=p.index):1==g[1]&&(c[n].left=p,c[n].index=p.index+1);for(n in c){m=c[n].right;h=c[n].left;g=c[n].index;l=g-1;p=void 0!==h?h:m;0>l&&(l=0);b=p.geometry;e=f=b.X();d=!1;switch(b.T()){case "MultiLineString":2<f[p.depth[0]].length&&(f[p.depth[0]].splice(g,
1),d=!0);break;case "LineString":2<f.length&&(f.splice(g,1),d=!0);break;case "MultiPolygon":e=e[p.depth[1]];case "Polygon":e=e[p.depth[0]],4<e.length&&(g==e.length-1&&(g=0),e.splice(g,1),d=!0,0===g&&(e.pop(),e.push(e[0]),l=e.length-1))}d&&(d=b,this.o=!0,d.pa(f),this.o=!1,f=[],void 0!==h&&(this.a.remove(h),f.push(h.na[0])),void 0!==m&&(this.a.remove(m),f.push(m.na[1])),void 0!==h&&void 0!==m&&(h={depth:p.depth,feature:p.feature,geometry:p.geometry,index:l,na:f},this.a.Ea(Ha(h.na),h)),Hu(this,b,g,p.depth,
-1),this.g&&(this.G.la().Db(this.g),this.g=null))}this.b(new Au("modifyend",this.u,a));this.C=!1;return!0}return!1};function Hu(a,b,c,d,e){Ij(a.a,b.D(),function(a){a.geometry===b&&(void 0===d||void 0===a.depth||ia(a.depth,d))&&a.index>c&&(a.index+=e)})}function xu(){var a=dl();return function(){return a.Point}}function Au(a,b,c){Bc.call(this,a);this.features=b;this.mapBrowserEvent=c}u(Au,Bc);function Iu(a){$f.call(this,{handleEvent:Ju});a=a?a:{};this.C=a.condition?a.condition:ig;this.A=a.addCondition?a.addCondition:bf;this.G=a.removeCondition?a.removeCondition:bf;this.R=a.toggleCondition?a.toggleCondition:kg;this.o=a.multi?a.multi:!1;this.j=a.filter?a.filter:af;this.l=a.hitTolerance?a.hitTolerance:0;this.g=new R({source:new S({useSpatialIndex:!1,features:a.features,wrapX:a.wrapX}),style:a.style?a.style:Ku(),updateWhileAnimating:!0,updateWhileInteracting:!0});if(a.layers)if("function"===
typeof a.layers)a=a.layers;else{var b=a.layers;a=function(a){return ea(b,a)}}else a=af;this.u=a;this.a={};a=this.g.la().i;B(a,"add",this.Xm,this);B(a,"remove",this.an,this)}u(Iu,$f);k=Iu.prototype;k.Ym=function(){return this.g.la().i};k.Zm=function(){return this.l};k.$m=function(a){a=w(a);return this.a[a]};
function Ju(a){if(!this.C(a))return!0;var b=this.A(a),c=this.G(a),d=this.R(a),e=!b&&!c&&!d,f=a.map,g=this.g.la().i,h=[],l=[];if(e){qb(this.a);f.re(a.pixel,function(a,b){if(this.j(a,b)){l.push(a);var c=w(a);this.a[c]=b;return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.l});for(e=g.ec()-1;0<=e;--e){var f=g.item(e),m=l.indexOf(f);-1<m?l.splice(m,1):(g.remove(f),h.push(f))}l.length&&g.Tf(l)}else{f.re(a.pixel,function(a,e){if(this.j(a,e)){if(!b&&!d||ea(g.a,a))(c||d)&&ea(g.a,a)&&(h.push(a),
f=w(a),delete this.a[f]);else{l.push(a);var f=w(a);this.a[f]=e}return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.l});for(e=h.length-1;0<=e;--e)g.remove(h[e]);g.Tf(l)}(0<l.length||0<h.length)&&this.b(new Lu(Mu,l,h,a));return hg(a)}k.bn=function(a){this.l=a};k.setMap=function(a){var b=this.v,c=this.g.la().i;b&&c.forEach(b.Zi,b);$f.prototype.setMap.call(this,a);this.g.setMap(a);a&&c.forEach(a.Ti,a)};
function Ku(){var a=dl();ga(a.Polygon,a.LineString);ga(a.GeometryCollection,a.LineString);return function(b){return b.U()?a[b.U().T()]:null}}k.Xm=function(a){var b=this.v;b&&b.Ti(a.element)};k.an=function(a){var b=this.v;b&&b.Zi(a.element)};function Lu(a,b,c,d){Bc.call(this,a);this.selected=b;this.deselected=c;this.mapBrowserEvent=d}u(Lu,Bc);var Mu="select";function Nu(a){og.call(this,{handleEvent:Ou,handleDownEvent:af,handleUpEvent:Pu});a=a?a:{};this.o=a.source?a.source:null;this.ia=void 0!==a.vertex?a.vertex:!0;this.R=void 0!==a.edge?a.edge:!0;this.j=a.features?a.features:null;this.oa=[];this.C={};this.S={};this.u={};this.G=null;this.g=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.Ja=Qu.bind(this);this.a=new Dj;this.ea={Point:this.hn,LineString:this.Rh,LinearRing:this.Rh,Polygon:this.jn,MultiPoint:this.fn,MultiLineString:this.en,MultiPolygon:this.gn,
GeometryCollection:this.dn}}u(Nu,og);k=Nu.prototype;k.zb=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=a.U();if(e){var f=this.ea[e.T()];f&&(this.S[d]=e.D(Ia()),f.call(this,a,e))}c&&(this.C[d]=B(a,"change",this.cn,this))};k.ek=function(a){this.zb(a)};k.fk=function(a){this.Db(a)};k.Ph=function(a){var b;a instanceof Mt?b=a.feature:a instanceof Nc&&(b=a.element);this.zb(b)};k.Qh=function(a){var b;a instanceof Mt?b=a.feature:a instanceof Nc&&(b=a.element);this.Db(b)};
k.cn=function(a){a=a.target;if(this.A){var b=w(a);b in this.u||(this.u[b]=a)}else this.$i(a)};k.Db=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=this.S[d];if(e){var f=this.a,g=[];Ij(f,e,function(b){a===b.feature&&g.push(b)});for(e=g.length-1;0<=e;--e)f.remove(g[e])}c&&(rc(this.C[d]),delete this.C[d])};
k.setMap=function(a){var b=this.v,c=this.oa,d;this.j?d=this.j:this.o&&(d=this.o.Ne());b&&(c.forEach(rc),c.length=0,d.forEach(this.fk,this));og.prototype.setMap.call(this,a);a&&(this.j?c.push(B(this.j,"add",this.Ph,this),B(this.j,"remove",this.Qh,this)):this.o&&c.push(B(this.o,"addfeature",this.Ph,this),B(this.o,"removefeature",this.Qh,this)),d.forEach(this.ek,this))};k.Zc=bf;k.$i=function(a){this.Db(a,!1);this.zb(a,!1)};
k.dn=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.ea[d[c].T()].call(this,a,d[c])};k.Rh=function(a,b){var c=b.X(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,na:f},this.a.Ea(Ha(f),g)};k.en=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,na:l},this.a.Ea(Ha(l),m)};k.fn=function(a,b){var c=b.X(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,na:[d,d]},this.a.Ea(b.D(),d)};
k.gn=function(a,b){var c=b.X(),d,e,f,g,h,l,m,p,n,q;l=0;for(m=c.length;l<m;++l)for(p=c[l],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)n=d.slice(e,e+2),q={feature:a,na:n},this.a.Ea(Ha(n),q)};k.hn=function(a,b){var c=b.X(),c={feature:a,na:[c,c]};this.a.Ea(b.D(),c)};k.jn=function(a,b){var c=b.X(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,na:l},this.a.Ea(Ha(l),m)};
function Ou(a){var b,c,d=a.pixel,e=a.coordinate;b=a.map;var f=b.Za([d[0]-this.g,d[1]+this.g]);c=b.Za([d[0]+this.g,d[1]-this.g]);var f=Ha([f,c]),g=Gj(this.a,f),h,f=!1,l=null;c=null;if(0<g.length){this.G=e;g.sort(this.Ja);g=g[0].na;if(this.ia&&!this.R){if(e=b.Ka(g[0]),h=b.Ka(g[1]),e=Xe(d,e),d=Xe(d,h),h=Math.sqrt(Math.min(e,d)),h=h<=this.g)f=!0,l=e>d?g[1]:g[0],c=b.Ka(l)}else this.R&&(l=Re(e,g),c=b.Ka(l),Ye(d,c)<=this.g&&(f=!0,this.ia&&(e=b.Ka(g[0]),h=b.Ka(g[1]),e=Xe(c,e),d=Xe(c,h),h=Math.sqrt(Math.min(e,
d)),h=h<=this.g)))&&(l=e>d?g[1]:g[0],c=b.Ka(l));f&&(c=[Math.round(c[0]),Math.round(c[1])])}b=l;f&&(a.coordinate=b.slice(0,2),a.pixel=c);return pg.call(this,a)}function Pu(){var a=rb(this.u);a.length&&(a.forEach(this.$i,this),this.u={});return!1}function Qu(a,b){return Ze(this.G,a.na)-Ze(this.G,b.na)};function Ru(a){og.call(this,{handleDownEvent:Su,handleDragEvent:Tu,handleMoveEvent:Uu,handleUpEvent:Vu});a=a?a:{};this.g=void 0;this.a=null;this.o=void 0!==a.features?a.features:null;var b;if(a.layers)if("function"===typeof a.layers)b=a.layers;else{var c=a.layers;b=function(a){return ea(c,a)}}else b=af;this.C=b;this.u=a.hitTolerance?a.hitTolerance:0;this.j=null}u(Ru,og);
function Su(a){this.j=Wu(this,a.pixel,a.map);if(!this.a&&this.j){this.a=a.coordinate;Uu.call(this,a);var b=this.o||new D([this.j]);this.b(new Xu("translatestart",b,a.coordinate));return!0}return!1}function Vu(a){if(this.a){this.a=null;Uu.call(this,a);var b=this.o||new D([this.j]);this.b(new Xu("translateend",b,a.coordinate));return!0}return!1}
function Tu(a){if(this.a){a=a.coordinate;var b=a[0]-this.a[0],c=a[1]-this.a[1],d=this.o||new D([this.j]);d.forEach(function(a){var d=a.U();d.translate(b,c);a.Sa(d)});this.a=a;this.b(new Xu("translating",d,a))}}function Uu(a){var b=a.map.Kc();Wu(this,a.pixel,a.map)?(this.g=void 0!==this.g?this.g:b.style.cursor,b.style.cursor=this.a?"-webkit-grabbing":"-webkit-grab",b.style.cursor=this.a?"grabbing":"grab"):void 0!==this.g&&(b.style.cursor=this.g,this.g=void 0)}
function Wu(a,b,c){return c.re(b,function(a){if(!this.o||ea(this.o.a,a))return a}.bind(a),{layerFilter:a.C,hitTolerance:a.u})}Ru.prototype.G=function(){return this.u};Ru.prototype.R=function(a){this.u=a};function Xu(a,b,c){Bc.call(this,a);this.features=b;this.coordinate=c}u(Xu,Bc);function T(a){a=a?a:{};var b=pb({},a);delete b.gradient;delete b.radius;delete b.blur;delete b.shadow;delete b.weight;R.call(this,b);this.l=null;this.Y=void 0!==a.shadow?a.shadow:250;this.S=void 0;this.R=null;B(this,Ic(Yu),this.hl,this);this.Ki(a.gradient?a.gradient:Zu);this.Ei(void 0!==a.blur?a.blur:15);this.Wc(void 0!==a.radius?a.radius:8);B(this,Ic($u),this.Qf,this);B(this,Ic(av),this.Qf,this);this.Qf();var c=a.weight?a.weight:"weight",d;"string"===typeof c?d=function(a){return a.get(c)}:d=c;this.g(function(a){a=
d(a);a=void 0!==a?wa(a,0,1):1;var b=255*a|0,c=this.R[b];c||(c=[new Zk({image:new Qn({opacity:a,src:this.S})})],this.R[b]=c);return c}.bind(this));this.set(ut,null);B(this,"render",this.yl,this)}u(T,R);var Zu=["#00f","#0ff","#0f0","#ff0","#f00"];k=T.prototype;k.fh=function(){return this.get($u)};k.mh=function(){return this.get(Yu)};k.Th=function(){return this.get(av)};
k.hl=function(){for(var a=this.mh(),b=Xc(1,256),c=b.createLinearGradient(0,0,1,256),d=1/(a.length-1),e=0,f=a.length;e<f;++e)c.addColorStop(e*d,a[e]);b.fillStyle=c;b.fillRect(0,0,1,256);this.l=b.getImageData(0,0,1,256).data};k.Qf=function(){var a=this.Th(),b=this.fh(),c=a+b+1,d=2*c,d=Xc(d,d);d.shadowOffsetX=d.shadowOffsetY=this.Y;d.shadowBlur=b;d.shadowColor="#000";d.beginPath();b=c-this.Y;d.arc(b,b,a,0,2*Math.PI,!0);d.fill();this.S=d.canvas.toDataURL();this.R=Array(256);this.s()};
k.yl=function(a){a=a.context;var b=a.canvas,b=a.getImageData(0,0,b.width,b.height),c=b.data,d,e,f;d=0;for(e=c.length;d<e;d+=4)if(f=4*c[d+3])c[d]=this.l[f],c[d+1]=this.l[f+1],c[d+2]=this.l[f+2];a.putImageData(b,0,0)};k.Ei=function(a){this.set($u,a)};k.Ki=function(a){this.set(Yu,a)};k.Wc=function(a){this.set(av,a)};var $u="blur",Yu="gradient",av="radius";function bv(a){lt.call(this,a);this.o=vh();this.g=null}u(bv,lt);bv.prototype.I=function(a,b,c){nt(this,"precompose",c,a,void 0);var d=this.Z();if(d){var e=b.extent,f=void 0!==e;f&&mt(c,a,e);var e=this.A(),g=c.globalAlpha;c.globalAlpha=b.opacity;c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[4]),Math.round(e[5]),Math.round(d.width*e[0]),Math.round(d.height*e[3]));c.globalAlpha=g;f&&c.restore()}this.Ue(c,a,b)};
bv.prototype.Aa=function(a,b,c,d,e){var f=this.a;return f.la().Aa(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
bv.prototype.v=function(a,b,c,d){if(this.Z()){if(this.a.la().Aa!==na)return lt.prototype.v.apply(this,arguments);var e=Ah(this.o,a.slice());We(e,b.viewState.resolution/this.i);this.g||(this.g=Xc(1,1));this.g.clearRect(0,0,1,1);this.g.drawImage(this.Z(),e[0],e[1],1,1,0,0,1,1);e=this.g.getImageData(0,0,1,1).data;if(0<e[3])return c.call(d,this.a,e)}};function cv(a){bv.call(this,a);this.M=null;this.c=vh()}u(cv,bv);cv.prototype.Z=function(){return this.M?this.M.Z():null};cv.prototype.A=function(){return this.c};
cv.prototype.qd=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.center,g=e.resolution,h=this.a.la(),l=a.viewHints,m=a.extent;void 0!==b.extent&&(m=lb(m,b.extent));l[0]||l[1]||gb(m)||(e=h.Z(m,g,c,e.projection))&&ft(this,e)&&(this.M=e);if(this.M){var e=this.M,m=e.D(),p=e.resolution,l=e.a,n=c*p/(g*l),m=Eh(this.c,c*d[0]/2,c*d[1]/2,n,n,0,l*(m[0]-f[0])/p,l*(f[1]-m[3])/p);Eh(this.o,c*d[0]/2-m[4],c*d[1]/2-m[5],c/g,-c/g,0,-f[0],-f[1]);ht(a.attributions,e.i);it(a,h);this.i=g*c/l}return!!this.M};function dv(a,b,c,d){var e=Wb(c,b,a);c=Eb(b,d,c);b=b.sc();void 0!==b&&(c*=b);b=a.sc();void 0!==b&&(c/=b);a=Eb(a,c,e)/c;isFinite(a)&&0<a&&(c/=a);return c}function ev(a,b,c,d){a=c-a;b=d-b;var e=Math.sqrt(a*a+b*b);return[Math.round(c+a/e),Math.round(d+b/e)]}
function fv(a,b,c,d,e,f,g,h,l,m,p){var n=Xc(Math.round(c*a),Math.round(c*b));if(!l.length)return n.canvas;n.scale(c,c);var q=Ia();l.forEach(function(a){$a(q,a.extent)});var r=Xc(Math.round(c*hb(q)/d),Math.round(c*ib(q)/d)),v=c/d;l.forEach(function(a){r.drawImage(a.image,m,m,a.image.width-2*m,a.image.height-2*m,(a.extent[0]-q[0])*v,-(a.extent[3]-q[3])*v,hb(a.extent)*v,ib(a.extent)*v)});var x=eb(g);h.c.forEach(function(a){var b=a.source,e=a.target,g=b[1][0],h=b[1][1],l=b[2][0],m=b[2][1];a=(e[0][0]-
x[0])/f;var p=-(e[0][1]-x[1])/f,v=(e[1][0]-x[0])/f,y=-(e[1][1]-x[1])/f,Z=(e[2][0]-x[0])/f,Ra=-(e[2][1]-x[1])/f,e=b[0][0],b=b[0][1],g=g-e,h=h-b,l=l-e,m=m-b;a:{g=[[g,h,0,0,v-a],[l,m,0,0,Z-a],[0,0,g,h,y-p],[0,0,l,m,Ra-p]];h=g.length;for(l=0;l<h;l++){for(var m=l,Cb=Math.abs(g[l][l]),dc=l+1;dc<h;dc++){var $c=Math.abs(g[dc][l]);$c>Cb&&(Cb=$c,m=dc)}if(!Cb){g=null;break a}Cb=g[m];g[m]=g[l];g[l]=Cb;for(m=l+1;m<h;m++)for(Cb=-g[m][l]/g[l][l],dc=l;dc<h+1;dc++)g[m][dc]=l==dc?0:g[m][dc]+Cb*g[l][dc]}l=Array(h);
for(m=h-1;0<=m;m--)for(l[m]=g[m][h]/g[m][m],Cb=m-1;0<=Cb;Cb--)g[Cb][h]-=g[Cb][m]*l[m];g=l}g&&(n.save(),n.beginPath(),l=(a+v+Z)/3,m=(p+y+Ra)/3,h=ev(l,m,a,p),v=ev(l,m,v,y),Z=ev(l,m,Z,Ra),n.moveTo(v[0],v[1]),n.lineTo(h[0],h[1]),n.lineTo(Z[0],Z[1]),n.clip(),n.transform(g[0],g[2],g[1],g[3],a,p),n.translate(q[0]-e,q[3]-b),n.scale(d/c,-d/c),n.drawImage(r.canvas,0,0),n.restore())});p&&(n.save(),n.strokeStyle="black",n.lineWidth=1,h.c.forEach(function(a){var b=a.target;a=(b[0][0]-x[0])/f;var c=-(b[0][1]-x[1])/
f,d=(b[1][0]-x[0])/f,e=-(b[1][1]-x[1])/f,g=(b[2][0]-x[0])/f,b=-(b[2][1]-x[1])/f;n.beginPath();n.moveTo(d,e);n.lineTo(a,c);n.lineTo(g,b);n.closePath();n.stroke()}),n.restore());return n.canvas};function gv(a,b,c,d,e){this.f=a;this.i=b;var f={},g=Ub(this.i,this.f);this.a=function(a){var b=a[0]+"/"+a[1];f[b]||(f[b]=g(a));return f[b]};this.g=d;this.v=e*e;this.c=[];this.j=!1;this.o=this.f.a&&!!d&&!!this.f.D()&&hb(d)==hb(this.f.D());this.b=this.f.D()?hb(this.f.D()):null;this.l=this.i.D()?hb(this.i.D()):null;a=eb(c);b=db(c);d=cb(c);c=bb(c);e=this.a(a);var h=this.a(b),l=this.a(d),m=this.a(c);hv(this,a,b,d,c,e,h,l,m,10);if(this.j){var p=Infinity;this.c.forEach(function(a){p=Math.min(p,a.source[0][0],
a.source[1][0],a.source[2][0])});this.c.forEach(function(a){if(Math.max(a.source[0][0],a.source[1][0],a.source[2][0])-p>this.b/2){var b=[[a.source[0][0],a.source[0][1]],[a.source[1][0],a.source[1][1]],[a.source[2][0],a.source[2][1]]];b[0][0]-p>this.b/2&&(b[0][0]-=this.b);b[1][0]-p>this.b/2&&(b[1][0]-=this.b);b[2][0]-p>this.b/2&&(b[2][0]-=this.b);Math.max(b[0][0],b[1][0],b[2][0])-Math.min(b[0][0],b[1][0],b[2][0])<this.b/2&&(a.source=b)}},this)}f={}}
function hv(a,b,c,d,e,f,g,h,l,m){var p=Ha([f,g,h,l]),n=a.b?hb(p)/a.b:null,q=a.b,r=a.f.a&&.5<n&&1>n,v=!1;if(0<m){if(a.i.f&&a.l)var x=Ha([b,c,d,e]),v=v|.25<hb(x)/a.l;!r&&a.f.f&&n&&(v|=.25<n)}if(v||!a.g||mb(p,a.g)){if(!(v||isFinite(f[0])&&isFinite(f[1])&&isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(l[0])&&isFinite(l[1])))if(0<m)v=!0;else return;if(0<m&&(v||(p=a.a([(b[0]+d[0])/2,(b[1]+d[1])/2]),q=r?(Ca(f[0],q)+Ca(h[0],q))/2-Ca(p[0],q):(f[0]+h[0])/2-p[0],p=(f[1]+h[1])/2-p[1],
v=q*q+p*p>a.v),v)){Math.abs(b[0]-d[0])<=Math.abs(b[1]-d[1])?(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],q=a.a(r),p=[(e[0]+b[0])/2,(e[1]+b[1])/2],n=a.a(p),hv(a,b,c,r,p,f,g,q,n,m-1),hv(a,p,r,d,e,n,q,h,l,m-1)):(r=[(b[0]+c[0])/2,(b[1]+c[1])/2],q=a.a(r),p=[(d[0]+e[0])/2,(d[1]+e[1])/2],n=a.a(p),hv(a,b,r,p,e,f,q,n,l,m-1),hv(a,r,c,d,p,q,g,h,n,m-1));return}if(r){if(!a.o)return;a.j=!0}a.c.push({source:[f,h,l],target:[b,d,e]});a.c.push({source:[f,g,h],target:[b,c,d]})}}
function iv(a){var b=Ia();a.c.forEach(function(a){a=a.source;Ja(b,a[0]);Ja(b,a[1]);Ja(b,a[2])});return b};function jv(a,b,c,d,e,f){this.v=b;this.o=a.D();var g=b.D(),h=g?lb(c,g):c,g=dv(a,b,jb(h),d);this.l=new gv(a,b,h,this.o,.5*g);this.c=d;this.f=c;a=iv(this.l);this.j=(this.Eb=f(a,g,e))?this.Eb.a:1;this.$d=this.g=null;e=2;f=[];this.Eb&&(e=0,f=this.Eb.i);rs.call(this,c,d,this.j,e,f)}u(jv,rs);jv.prototype.ra=function(){1==this.state&&(rc(this.$d),this.$d=null);rs.prototype.ra.call(this)};jv.prototype.Z=function(){return this.g};
jv.prototype.Zd=function(){var a=this.Eb.V();2==a&&(this.g=fv(hb(this.f)/this.c,ib(this.f)/this.c,this.j,this.Eb.resolution,0,this.c,this.f,this.l,[{extent:this.Eb.D(),image:this.Eb.Z()}],0));this.state=a;this.s()};jv.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=this.Eb.V();2==a||3==a?this.Zd():(this.$d=B(this.Eb,"change",function(){var a=this.Eb.V();if(2==a||3==a)rc(this.$d),this.$d=null,this.Zd()},this),this.Eb.load())}};function kv(a){Ft.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.u=void 0!==a.resolutions?a.resolutions:null;this.a=null;this.ea=0}u(kv,Ft);function lv(a,b){a.u&&(b=a.u[fa(a.u,b,0)]);return b}
kv.prototype.Z=function(a,b,c,d){var e=this.c;if(e&&d&&!Tb(e,d)){if(this.a){if(this.ea==this.f&&Tb(this.a.v,d)&&this.a.resolution==b&&this.a.a==c&&Za(this.a.D(),a))return this.a;Ac(this.a);this.a=null}this.a=new jv(e,d,a,b,c,function(a,b,c){return this.Ic(a,b,c,e)}.bind(this));this.ea=this.f;return this.a}e&&(d=e);return this.Ic(a,b,c,d)};kv.prototype.j=function(a){a=a.target;switch(a.V()){case 1:this.b(new mv(nv,a));break;case 2:this.b(new mv(ov,a));break;case 3:this.b(new mv(pv,a))}};
function qv(a,b){a.Z().src=b}function mv(a,b){Bc.call(this,a);this.image=b}u(mv,Bc);var nv="imageloadstart",ov="imageloadend",pv="imageloaderror";function rv(a){kv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions,state:a.state});this.ia=a.canvasFunction;this.S=null;this.Y=0;this.oa=void 0!==a.ratio?a.ratio:1.5}u(rv,kv);rv.prototype.Ic=function(a,b,c,d){b=lv(this,b);var e=this.S;if(e&&this.Y==this.f&&e.resolution==b&&e.a==c&&Ta(e.D(),a))return e;a=a.slice();nb(a,this.oa);(d=this.ia(a,b,c,[hb(a)/b*c,ib(a)/b*c],d))&&(e=new ts(a,b,c,this.l,d));this.S=e;this.Y=this.f;return e};function sv(a){this.i=a.source;this.Oa=vh();this.g=Xc();this.o=[0,0];this.Ha=void 0==a.renderBuffer?100:a.renderBuffer;this.A=null;rv.call(this,{attributions:a.attributions,canvasFunction:this.Zj.bind(this),logo:a.logo,projection:a.projection,ratio:a.ratio,resolutions:a.resolutions,state:this.i.V()});this.C=null;this.v=void 0;this.ci(a.style);B(this.i,"change",this.Fn,this)}u(sv,rv);k=sv.prototype;
k.Zj=function(a,b,c,d,e){var f=new Vs(.5*b/c,a,b,this.i.Ha,this.Ha);this.i.Ud(a,b,e);var g=!1;this.i.ac(a,function(a){var d;if(!(d=g)){var e;(d=a.Nc())?e=d.call(a,b):this.v&&(e=this.v(a,b));if(e){var h,n=!1;Array.isArray(e)||(e=[e]);d=0;for(h=e.length;d<h;++d)n=rt(f,a,e[d],qt(b,c),this.En,this)||n;d=n}else d=!1}g=d},this);Zs(f);if(g)return null;this.o[0]!=d[0]||this.o[1]!=d[1]?(this.g.canvas.width=d[0],this.g.canvas.height=d[1],this.o[0]=d[0],this.o[1]=d[1]):this.g.clearRect(0,0,d[0],d[1]);a=tv(this,
jb(a),b,c,d);f.i(this.g,c,a,0,{});this.A=f;return this.g.canvas};k.Aa=function(a,b,c,d,e,f){if(this.A){var g={};return this.A.Aa(a,b,0,d,e,function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,f(a)})}};k.Bn=function(){return this.i};k.Cn=function(){return this.C};k.Dn=function(){return this.v};function tv(a,b,c,d,e){c=d/c;return Eh(a.Oa,e[0]/2,e[1]/2,c,-c,0,-b[0],-b[1])}k.En=function(){this.s()};k.Fn=function(){Ht(this,this.i.V())};
k.ci=function(a){this.C=void 0!==a?a:cl;this.v=a?al(this.C):void 0;this.s()};function uv(a,b){At.call(this,a,b);this.j=this.i=this.M=null}u(uv,At);function vv(a,b){var c=b.Z();return Ni(a.c.f,c)}uv.prototype.Aa=function(a,b,c,d,e){var f=this.a;return f.la().Aa(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
uv.prototype.ag=function(a,b){var c=this.c.f,d=a.pixelRatio,e=a.viewState,f=e.center,g=e.resolution,h=e.rotation,l=this.M,m=this.Fb,p=this.a.la(),n=a.viewHints,q=a.extent;void 0!==b.extent&&(q=lb(q,b.extent));n[0]||n[1]||gb(q)||(e=p.Z(q,g,d,e.projection))&&ft(this,e)&&(l=e,m=vv(this,e),this.Fb&&a.postRenderFunctions.push(function(a,b){a.isContextLost()||a.deleteTexture(b)}.bind(null,c,this.Fb)));l&&(c=this.c.i.l,wv(this,c.width,c.height,d,f,g,h,l.D()),this.j=null,d=this.v,wh(d),Ch(d,1,-1),Dh(d,0,
-1),this.M=l,this.Fb=m,ht(a.attributions,l.i),it(a,p));return!!l};function wv(a,b,c,d,e,f,g,h){b*=f;c*=f;a=a.u;wh(a);Ch(a,2*d/b,2*d/c);Bh(a,-g);Dh(a,h[0]-e[0],h[1]-e[1]);Ch(a,(h[2]-h[0])/2,(h[3]-h[1])/2);Dh(a,1,1)}uv.prototype.Ke=function(a,b){return void 0!==this.Aa(a,b,0,af,this)};
uv.prototype.Zf=function(a,b,c,d){if(this.M&&this.M.Z())if(this.a.la()instanceof sv){var e=Ah(b.pixelToCoordinateTransform,a.slice());if(this.Aa(e,b,0,af,this))return c.call(d,this.a,null)}else{e=[this.M.Z().width,this.M.Z().height];if(!this.j){var f=b.size;b=vh();Dh(b,-1,-1);Ch(b,2/f[0],2/f[1]);Dh(b,0,f[1]);Ch(b,1,-1);var f=Fh(this.u.slice()),g=vh();Dh(g,0,e[1]);Ch(g,1,-1);Ch(g,e[0]/2,e[1]/2);Dh(g,1,1);yh(g,f);yh(g,b);this.j=g}a=Ah(this.j,a.slice());if(!(0>a[0]||a[0]>e[0]||0>a[1]||a[1]>e[1])&&(this.i||
(this.i=Xc(1,1)),this.i.clearRect(0,0,1,1),this.i.drawImage(this.M.Z(),a[0],a[1],1,1,0,0,1,1),e=this.i.getImageData(0,0,1,1).data,0<e[3]))return c.call(d,this.a,e)}};function xv(a){qh.call(this,a?a:{})}u(xv,qh);xv.prototype.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new cv(this):"webgl"===c&&(b=new uv(a,this));return b};function yv(a){bv.call(this,a);this.u=Xc();this.l=null;this.c=[];this.j=Ia();this.Ja=new sa(0,0,0,0);this.C=vh();this.Y=0}u(yv,bv);function zv(a,b){var c=b.V(),d=a.a.Td();return 2==c||4==c||3==c&&!d}
yv.prototype.qd=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.projection,g=e.resolution,e=e.center,h=this.a,l=h.la(),m=l.f,p=l.Ib(f),n=p.Mc(g,this.Y),q=p.La(n),r=Math.round(g/q)||1,v=a.extent;void 0!==b.extent&&(v=lb(v,b.extent));if(gb(v))return!1;var x=gc(p,v,q),y;y=p.Qc(n);var z=p.La(n),A=Ga(p.fb(n),p.l);y=Va(y[0]+x.da*A[0]*z,y[1]+x.fa*A[1]*z,y[0]+(x.ba+1)*A[0]*z,y[1]+(x.ja+1)*A[1]*z,void 0);z=l.pb(c);A={};A[n]={};var V=this.Cf(l,f,A),Pa=this.j,ra=this.Ja,La=!1,C,Ma,xb;for(Ma=x.da;Ma<=
x.ba;++Ma)for(xb=x.fa;xb<=x.ja;++xb)C=l.Lc(n,Ma,xb,c,f),zv(this,C)||(C=vs(C)),zv(this,C)?2==C.V()&&(A[n][C.Ga.toString()]=C,La||-1!=this.c.indexOf(C)||(La=!0)):ec(p,C.Ga,V,ra,Pa)||(C=fc(p,C.Ga,ra,Pa))&&V(n+1,C);V=a.viewHints;if(!(this.i&&16<Date.now()-a.time&&(V[0]||V[1])||!La&&this.l&&Ta(this.l,v)&&this.af==m)||r!=this.R){La=l.Sd(n,c,f);Ma=Math.round((x.ba-x.da+1)*La[0]/r);C=Math.round((x.ja-x.fa+1)*La[0]/r);La=this.u;xb=La.canvas;V=l.Mf(f);xb.width!=Ma||xb.height!=C?(this.R=r,xb.width=Ma,xb.height=
C):(La.clearRect(0,0,Ma,C),r=this.R);this.c.length=0;ra=Object.keys(A).map(Number);ra.sort(da);var Z,Ra,Cb,dc,$c,$d,Je,ue;Cb=0;for(dc=ra.length;Cb<dc;++Cb){Ma=ra[Cb];Ra=l.Sd(Ma,c,f);C=p.La(Ma);Z=C/q;$c=z*l.Jf(f);$d=A[Ma];for(var Tc in $d)C=$d[Tc],xb=p.Ta(C.Ga,Pa),Ma=(xb[0]-y[0])/q*z/r,xb=(y[3]-xb[3])/q*z/r,Je=Ra[0]*Z/r,ue=Ra[1]*Z/r,V||La.clearRect(Ma,xb,Je,ue),this.Df(C,a,b,Ma,xb,Je,ue,$c),this.c.push(C)}this.af=m;this.i=q*c/z*r;this.l=y}Tc=this.i/g;Tc=Eh(this.C,c*d[0]/2,c*d[1]/2,Tc,Tc,0,(this.l[0]-
e[0])/this.i*c,(e[1]-this.l[3])/this.i*c);Eh(this.o,c*d[0]/2-Tc[4],c*d[1]/2-Tc[5],c/g,-c/g,0,-e[0],-e[1]);jt(a.usedTiles,l,n,x);kt(a,l,p,c,f,v,n,h.Pd());gt(a,l);it(a,l);return 0<this.c.length};yv.prototype.Df=function(a,b,c,d,e,f,g,h){(a=a.Z())&&this.u.drawImage(a,h,h,a.width-2*h,a.height-2*h,d,e,f,g)};yv.prototype.Z=function(){return this.u.canvas};yv.prototype.A=function(){return this.C};function Av(){this.b="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}u(Av,gi);var Bv=new Av;function Cv(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}u(Cv,hi);var Dv=new Cv;function Ev(a,b){this.f=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function Fv(a,b){At.call(this,a,b);this.R=Bv;this.ia=Dv;this.i=null;this.G=new xi([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.A=this.j=null;this.o=-1;this.S=[0,0]}u(Fv,At);k=Fv.prototype;k.ra=function(){Ai(this.c.i,this.G);At.prototype.ra.call(this)};k.Cf=function(a,b,c){var d=this.c;return function(e,f){return dt(a,b,e,f,function(a){var b=d.a.b.hasOwnProperty(a.ib());b&&(c[e]||(c[e]={}),c[e][a.Ga.toString()]=a);return b})}};k.$f=function(){At.prototype.$f.call(this);this.i=null};
k.ag=function(a,b,c){var d=this.c,e=c.b,f=a.viewState,g=f.projection,h=this.a,l=h.la(),m=l.Ib(g),p=m.Mc(f.resolution),n=m.La(p),q=l.Sd(p,a.pixelRatio,g),r=q[0]/Ga(m.fb(p),this.S)[0],v=n/r,x=l.pb(r)*l.Jf(g),y=f.center,z=a.extent,A=gc(m,z,n);if(this.j&&ua(this.j,A)&&this.o==l.f)v=this.A;else{var V=[A.ba-A.da+1,A.ja-A.fa+1],Pa=ya(Math.max(V[0]*q[0],V[1]*q[1])),V=v*Pa,ra=m.Qc(p),La=ra[0]+A.da*q[0]*v,v=ra[1]+A.fa*q[1]*v,v=[La,v,La+V,v+V];Bt(this,a,Pa);e.viewport(0,0,Pa,Pa);e.clearColor(0,0,0,0);e.clear(16384);
e.disable(3042);Pa=Bi(c,this.R,this.ia);c.Rc(Pa);this.i||(this.i=new Ev(e,Pa));qi(c,34962,this.G);e.enableVertexAttribArray(this.i.b);e.vertexAttribPointer(this.i.b,2,5126,!1,16,0);e.enableVertexAttribArray(this.i.a);e.vertexAttribPointer(this.i.a,2,5126,!1,16,8);e.uniform1i(this.i.f,0);c={};c[p]={};var C=this.Cf(l,g,c),Ma=h.Td(),Pa=!0,La=Ia(),xb=new sa(0,0,0,0),Z,Ra,Cb;for(Ra=A.da;Ra<=A.ba;++Ra)for(Cb=A.fa;Cb<=A.ja;++Cb){ra=l.Lc(p,Ra,Cb,r,g);if(void 0!==b.extent&&(Z=m.Ta(ra.Ga,La),!mb(Z,b.extent)))continue;
Z=ra.V();(Z=2==Z||4==Z||3==Z&&!Ma)||(ra=vs(ra));Z=ra.V();if(2==Z){if(d.a.b.hasOwnProperty(ra.ib())){c[p][ra.Ga.toString()]=ra;continue}}else if(4==Z||3==Z&&!Ma)continue;Pa=!1;Z=ec(m,ra.Ga,C,xb,La);Z||(ra=fc(m,ra.Ga,xb,La))&&C(p+1,ra)}b=Object.keys(c).map(Number);b.sort(da);for(var C=new Float32Array(4),dc,Ma=0,xb=b.length;Ma<xb;++Ma)for(dc in Ra=c[b[Ma]],Ra)ra=Ra[dc],Z=m.Ta(ra.Ga,La),C[0]=2*(Z[2]-Z[0])/V,C[1]=2*(Z[3]-Z[1])/V,C[2]=2*(Z[0]-v[0])/V-1,C[3]=2*(Z[1]-v[1])/V-1,e.uniform4fv(this.i.c,C),kk(d,
ra,q,x*r),e.drawArrays(5,0,4);Pa?(this.j=A,this.A=v,this.o=l.f):(this.A=this.j=null,this.o=-1,a.animate=!0)}jt(a.usedTiles,l,p,A);var $c=d.l;kt(a,l,m,r,g,z,p,h.Pd(),function(a){2!=a.V()||d.a.b.hasOwnProperty(a.ib())||a.ib()in $c.a||$c.i([a,ic(m,a.Ga),m.La(a.Ga[0]),q,x*r])},this);gt(a,l);it(a,l);e=this.v;wh(e);Dh(e,(Math.round(y[0]/n)*n-v[0])/(v[2]-v[0]),(Math.round(y[1]/n)*n-v[1])/(v[3]-v[1]));f.rotation&&Bh(e,f.rotation);Ch(e,a.size[0]*f.resolution/(v[2]-v[0]),a.size[1]*f.resolution/(v[3]-v[1]));
Dh(e,-.5,-.5);return!0};k.Zf=function(a,b,c,d){if(this.g){a=Ah(this.v,[a[0]/b.size[0],(b.size[1]-a[1])/b.size[1]].slice());a=[a[0]*this.l,a[1]*this.l];b=this.c.i.b;b.bindFramebuffer(b.FRAMEBUFFER,this.g);var e=new Uint8Array(4);b.readPixels(a[0],a[1],1,1,b.RGBA,b.UNSIGNED_BYTE,e);if(0<e[3])return c.call(d,this.a,e)}};function Gv(a){a=a?a:{};var b=pb({},a);delete b.preload;delete b.useInterimTilesOnError;qh.call(this,b);this.Uh(void 0!==a.preload?a.preload:0);this.Vh(void 0!==a.useInterimTilesOnError?a.useInterimTilesOnError:!0)}u(Gv,qh);k=Gv.prototype;k.Dd=function(a){var b=null,c=a.T();"canvas"===c?b=new yv(this):"webgl"===c&&(b=new Fv(a,this));return b};k.Pd=function(){return this.get("preload")};k.Uh=function(a){this.set("preload",a)};k.Td=function(){return this.get("useInterimTilesOnError")};
k.Vh=function(a){this.set("useInterimTilesOnError",a)};function Hv(a){yv.call(this,a);this.G=!1;this.S=vh();this.Y="vector"==a.v?1:0}u(Hv,yv);var Iv={image:di,hybrid:["Polygon","LineString"]},Jv={hybrid:["Image","Text"],vector:di};k=Hv.prototype;k.qd=function(a,b){var c=this.a.f;this.oa!=c&&(this.c.length=0);this.oa=c;return yv.prototype.qd.apply(this,arguments)};
function Kv(a,b,c){function d(a){var b,c=a.Nc();c?b=c.call(a,r):(c=e.i)&&(b=c(a,r));if(b){Array.isArray(b)||(b=[b]);var c=A,d=z;if(b){var f=!1;if(Array.isArray(b))for(var g=0,h=b.length;g<h;++g)f=rt(d,a,b[g],c,this.$h,this)||f;else f=rt(d,a,b,c,this.$h,this)||f;a=f}else a=!1;this.G=this.G||a;l.Ld=l.Ld||a}}var e=a.a,f=c.pixelRatio;c=c.viewState.projection;var g=e.f,h=e.get(ut)||null,l=b.f;if(l.Ld||l.af!=g||l.wg!=h){l.vd=null;l.Ld=!1;var m=e.la(),p=m.tileGrid,n=b.Ga,q=b.l,r=p.La(n[0]),v,x,y;"tile-pixels"==
q.Jb()?(v=y=m.pb(),p=Ga(p.fb(n[0])),v=[0,0,p[0]*v,p[1]*v]):(y=r,v=p.Ta(n),Tb(c,q)||(x=!0,b.Xf(c)));l.Ld=!1;var z=new Vs(0,v,y,m.g,e.c),A=qt(y,f);b=b.g;h&&h!==l.wg&&b.sort(h);m=0;for(y=b.length;m<y;++m)f=b[m],x&&f.U().tb(q,c),d.call(a,f);Zs(z);l.af=g;l.wg=h;l.vd=z;l.resolution=NaN}}
k.Df=function(a,b,c,d,e,f,g,h){var l=a;Kv(this,l,b);if("vector"!=this.a.v){var m=l,p=b,n=this.a,l=m.f,q=n.f,r=Iv[n.v];if(r&&l.xg!==q){l.xg=q;var v=m.Ga,x=m.Ga[0],q=p.pixelRatio,y=n.la(),z=y.tileGrid,A=y.pb(),n=wh(this.S);"tile-pixels"==m.l.Jb()?(v=q/A,Ch(n,v,v)):(A=q/z.La(x),v=z.Ta(v,this.j),Ch(n,A,-A),Dh(n,-v[0],-v[3]));m=m.c;p=y.Sd(x,q,p.viewState.projection);m.canvas.width=p[0];m.canvas.height=p[1];l.vd.i(m,q,n,0,{},r)}}yv.prototype.Df.apply(this,arguments)};
k.Aa=function(a,b,c,d,e){var f=b.viewState.resolution;b=b.viewState.rotation;c=void 0==c?0:c;var g=this.a,h={},l=this.c,m=g.la(),p=m.tileGrid,n,q,r,v,x,y;r=0;for(v=l.length;r<v;++r)y=l[r],q=y.Ga,x=m.tileGrid.Ta(q,this.j),Qa(Ka(x,c*f),a)&&("tile-pixels"===y.l.Jb()?(x=eb(x),f=m.pb(),q=p.La(q[0])/f,q=[(a[0]-x[0])/q,(x[1]-a[1])/q]):q=a,y=y.f.vd,n=n||y.Aa(q,f,b,c,{},function(a){var b=w(a).toString();if(!(b in h))return h[b]=!0,d.call(e,a,g)}));return n};k.$h=function(){et(this)};
k.Ue=function(a,b,c){var d=Jv[this.a.v];if(d)for(var e=b.pixelRatio,f=b.viewState.rotation,g=b.size,h=Math.round(e*g[0]/2),g=Math.round(e*g[1]/2),l=this.c,m=[],p=[],n=l.length-1;0<=n;--n){var q=l[n],r;var v=q;r=b;if("tile-pixels"==v.l.Jb()){var x=this.a.la(),y=x.tileGrid,z=v.Ga,x=y.La(z[0])/x.pb(),v=r.viewState,A=r.pixelRatio,V=v.resolution/A,z=y.Ta(z,this.j),y=v.center,z=eb(z);r=r.size;r=Eh(this.S,Math.round(A*r[0]/2),Math.round(A*r[1]/2),x/V,x/V,v.rotation,(z[0]-y[0])/x,(y[1]-z[1])/x)}else r=ot(this,
r,0);x=at(q.f.vd,r);v=q.Ga[0];a.save();a.globalAlpha=c.opacity;Ph(a,-f,h,g);A=0;for(V=m.length;A<V;++A)y=m[A],v<p[A]&&(a.beginPath(),a.moveTo(x[0],x[1]),a.lineTo(x[2],x[3]),a.lineTo(x[4],x[5]),a.lineTo(x[6],x[7]),a.moveTo(y[6],y[7]),a.lineTo(y[4],y[5]),a.lineTo(y[2],y[3]),a.lineTo(y[0],y[1]),a.clip());q.f.vd.i(a,e,r,f,{},d);a.restore();m.push(x);p.push(v)}yv.prototype.Ue.apply(this,arguments)};function U(a){a=a?a:{};var b=pb({},a);delete b.preload;delete b.useInterimTilesOnError;R.call(this,b);this.Wh(a.preload?a.preload:0);this.Xh(a.useInterimTilesOnError?a.useInterimTilesOnError:!0);qa(void 0==a.renderMode||"image"==a.renderMode||"hybrid"==a.renderMode||"vector"==a.renderMode,28);this.v=a.renderMode||"hybrid"}u(U,R);k=U.prototype;k.Dd=function(a){var b=null;"canvas"===a.T()&&(b=new Hv(this));return b};k.Pd=function(){return this.get(Lv)};k.Td=function(){return this.get(Mv)};
k.Wh=function(a){this.set("preload",a)};k.Xh=function(a){this.set("useInterimTilesOnError",a)};var Lv="preload",Mv="useInterimTilesOnError";function Nv(a,b,c,d){function e(){delete window[g];f.parentNode.removeChild(f)}var f=document.createElement("script"),g="olc_"+w(b);f.async=!0;f.src=a+(-1==a.indexOf("?")?"?":"&")+(d||"callback")+"="+g;var h=setTimeout(function(){e();c&&c()},1E4);window[g]=function(a){clearTimeout(h);e();b(a)};document.getElementsByTagName("head")[0].appendChild(f)};function Ov(a,b,c,d,e,f,g,h,l,m,p){us.call(this,e,0);this.C=void 0!==p?p:!1;this.A=g;this.u=h;this.I=null;this.c=b;this.j=d;this.o=f?f:e;this.f=[];this.wd=null;this.g=0;f=d.Ta(this.o);h=this.j.D();e=this.c.D();f=h?lb(f,h):f;if(fb(f))if((h=a.D())&&(e?e=lb(e,h):e=h),d=dv(a,c,jb(f),d.La(this.o[0])),!isFinite(d)||0>=d)this.state=4;else if(this.v=new gv(a,c,f,e,d*(void 0!==m?m:.5)),this.v.c.length)if(this.g=b.Mc(d),c=iv(this.v),e&&(a.a?(c[1]=wa(c[1],e[1],e[3]),c[3]=wa(c[3],e[1],e[3])):c=lb(c,e)),fb(c)){a=
cc(b,c,this.g);for(b=a.da;b<=a.ba;b++)for(c=a.fa;c<=a.ja;c++)(m=l(this.g,b,c,g))&&this.f.push(m);this.f.length||(this.state=4)}else this.state=4;else this.state=4;else this.state=4}u(Ov,us);Ov.prototype.ra=function(){1==this.state&&(this.wd.forEach(rc),this.wd=null);us.prototype.ra.call(this)};Ov.prototype.Z=function(){return this.I};
Ov.prototype.Zd=function(){var a=[];this.f.forEach(function(b){b&&2==b.V()&&a.push({extent:this.c.Ta(b.Ga),image:b.Z()})},this);this.f.length=0;if(a.length){var b=this.o[0],c=this.j.fb(b),d="number"===typeof c?c:c[0],c="number"===typeof c?c:c[1],b=this.j.La(b),e=this.c.La(this.g),f=this.j.Ta(this.o);this.I=fv(d,c,this.A,e,this.c.D(),b,f,this.v,a,this.u,this.C);this.state=2}else this.state=3;this.s()};
Ov.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=0;this.wd=[];this.f.forEach(function(b){var c=b.V();if(0==c||1==c){a++;var d;d=B(b,"change",function(){var c=b.V();if(2==c||3==c||4==c)rc(d),a--,a||(this.wd.forEach(rc),this.wd=null,this.Zd())},this);this.wd.push(d)}},this);this.f.forEach(function(a){0==a.V()&&a.load()});a||setTimeout(this.Zd.bind(this),0)}};function Pv(a,b){var c=/\{z\}/g,d=/\{x\}/g,e=/\{y\}/g,f=/\{-y\}/g;return function(g){if(g)return a.replace(c,g[0].toString()).replace(d,g[1].toString()).replace(e,function(){return(-g[2]-1).toString()}).replace(f,function(){var a=b.a?b.a[g[0]]:null;qa(a,55);return(a.ja-a.fa+1+g[2]).toString()})}}function Qv(a,b){for(var c=a.length,d=Array(c),e=0;e<c;++e)d[e]=Pv(a[e],b);return Rv(d)}function Rv(a){return 1===a.length?a[0]:function(b,c,d){if(b)return a[Ca((b[1]<<b[0])+b[2],a.length)](b,c,d)}}
function Sv(){}function Tv(a){var b=[],c=/\{([a-z])-([a-z])\}/.exec(a);if(c){var d=c[2].charCodeAt(0),e;for(e=c[1].charCodeAt(0);e<=d;++e)b.push(a.replace(c[0],String.fromCharCode(e)));return b}if(c=c=/\{(\d+)-(\d+)\}/.exec(a)){d=parseInt(c[2],10);for(e=parseInt(c[1],10);e<=d;e++)b.push(a.replace(c[0],e.toString()));return b}b.push(a);return b};function Uv(a){ik.call(this);this.i=void 0!==a?a:2048}u(Uv,ik);function Vv(a){return a.c>a.i}Uv.prototype.gd=function(a){for(var b,c;Vv(this);){b=this.a.$c;c=b.Ga[0].toString();var d;if(d=c in a)b=b.Ga,d=ta(a[c],b[1],b[2]);if(d)break;else Ac(this.pop())}};function Wv(a){Ft.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state,wrapX:a.wrapX});this.oa=void 0!==a.opaque?a.opaque:!1;this.Oa=void 0!==a.tilePixelRatio?a.tilePixelRatio:1;this.tileGrid=void 0!==a.tileGrid?a.tileGrid:null;this.a=new Uv(a.cacheSize);this.j=[0,0];this.tc=""}u(Wv,Ft);k=Wv.prototype;k.fi=function(){return Vv(this.a)};k.gd=function(a,b){var c=this.Rd(a);c&&c.gd(b)};
function dt(a,b,c,d,e){b=a.Rd(b);if(!b)return!1;for(var f=!0,g,h,l=d.da;l<=d.ba;++l)for(var m=d.fa;m<=d.ja;++m)g=a.Sb(c,l,m),h=!1,b.b.hasOwnProperty(g)&&(g=b.get(g),(h=2===g.V())&&(h=!1!==e(g))),h||(f=!1);return f}k.Jf=function(){return 0};function Xv(a,b){a.tc!==b&&(a.tc=b,a.s())}k.Sb=function(a,b,c){return a+"/"+b+"/"+c};k.Mf=function(){return this.oa};k.ab=function(){return this.tileGrid};k.Ib=function(a){return this.tileGrid?this.tileGrid:jc(a)};
k.Rd=function(a){var b=this.c;return b&&!Tb(b,a)?null:this.a};k.pb=function(){return this.Oa};k.Sd=function(a,b,c){c=this.Ib(c);b=this.pb(b);a=Ga(c.fb(a),this.j);return 1==b?a:Fa(a,b,this.j)};function Yv(a,b,c){var d=void 0!==c?c:a.c;c=a.Ib(d);if(a.G&&d.f){var e=b;b=e[0];a=ic(c,e);d=kc(d);Qa(d,a)?b=e:(e=hb(d),a[0]+=e*Math.ceil((d[0]-a[0])/e),b=c.Pf(a,b))}e=b[0];d=b[1];a=b[2];if(c.minZoom>e||e>c.maxZoom)c=!1;else{var f=c.D();c=(c=f?cc(c,f,e):c.a?c.a[e]:null)?ta(c,d,a):!0}return c?b:null}
k.va=function(){this.a.clear();this.s()};k.Eg=na;function Zv(a,b){Bc.call(this,a);this.tile=b}u(Zv,Bc);function $v(a){Wv.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tilePixelRatio:a.tilePixelRatio,wrapX:a.wrapX});this.tileLoadFunction=a.tileLoadFunction;this.tileUrlFunction=this.Fc?this.Fc.bind(this):Sv;this.urls=null;a.urls?this.cb(a.urls):a.url&&this.jb(a.url);a.tileUrlFunction&&this.bb(a.tileUrlFunction)}u($v,Wv);k=$v.prototype;k.ob=function(){return this.tileLoadFunction};
k.qb=function(){return this.tileUrlFunction};k.rb=function(){return this.urls};k.gi=function(a){a=a.target;switch(a.V()){case 1:this.b(new Zv("tileloadstart",a));break;case 2:this.b(new Zv("tileloadend",a));break;case 3:this.b(new Zv("tileloaderror",a))}};k.xb=function(a){this.a.clear();this.tileLoadFunction=a;this.s()};k.bb=function(a,b){this.tileUrlFunction=a;"undefined"!==typeof b?Xv(this,b):this.s()};
k.jb=function(a){var b=this.urls=Tv(a);this.bb(this.Fc?this.Fc.bind(this):Qv(b,this.tileGrid),a)};k.cb=function(a){this.urls=a;var b=a.join("\n");this.bb(this.Fc?this.Fc.bind(this):Qv(a,this.tileGrid),b)};k.Eg=function(a,b,c){a=this.Sb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function W(a){$v.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:aw,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,wrapX:a.wrapX});this.crossOrigin=void 0!==a.crossOrigin?a.crossOrigin:null;this.tileClass=a.tileClass?a.tileClass:ws;this.g={};this.v={};this.Ha=a.reprojectionErrorThreshold;this.C=
!1}u(W,$v);k=W.prototype;k.fi=function(){if(Vv(this.a))return!0;for(var a in this.g)if(Vv(this.g[a]))return!0;return!1};k.gd=function(a,b){var c=this.Rd(a);this.a.gd(this.a==c?b:{});for(var d in this.g){var e=this.g[d];e.gd(e==c?b:{})}};k.Jf=function(a){return this.c&&a&&!Tb(this.c,a)?0:this.Kf()};k.Kf=function(){return 0};k.Mf=function(a){return this.c&&a&&!Tb(this.c,a)?!1:$v.prototype.Mf.call(this,a)};
k.Ib=function(a){var b=this.c;return!this.tileGrid||b&&!Tb(b,a)?(b=w(a).toString(),b in this.v||(this.v[b]=jc(a)),this.v[b]):this.tileGrid};k.Rd=function(a){var b=this.c;if(!b||Tb(b,a))return this.a;a=w(a).toString();a in this.g||(this.g[a]=new Uv);return this.g[a]};function bw(a,b,c,d,e,f,g){b=[b,c,d];e=(c=Yv(a,b,f))?a.tileUrlFunction(c,e,f):void 0;e=new a.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",a.crossOrigin,a.tileLoadFunction);e.key=g;B(e,"change",a.gi,a);return e}
k.Lc=function(a,b,c,d,e){if(this.c&&e&&!Tb(this.c,e)){var f=this.Rd(e);c=[a,b,c];var g;a=this.Sb.apply(this,c);f.b.hasOwnProperty(a)&&(g=f.get(a));b=this.tc;if(g&&g.key==b)return g;var h=this.c,l=this.Ib(h),m=this.Ib(e),p=Yv(this,c,e);d=new Ov(h,l,e,m,c,p,this.pb(d),this.Kf(),function(a,b,c,d){return cw(this,a,b,c,d,h)}.bind(this),this.Ha,this.C);d.key=b;g?(d.a=g,f.replace(a,d)):f.set(a,d);return d}return cw(this,a,b,c,d,e)};
function cw(a,b,c,d,e,f){var g,h=a.Sb(b,c,d),l=a.tc;if(a.a.b.hasOwnProperty(h)){if(g=a.a.get(h),g.key!=l){var m=g;g=bw(a,b,c,d,e,f,l);0==m.V()?g.a=m.a:g.a=m;if(g.a){b=g.a;c=g;do{if(2==b.V()){b.a=null;break}else 1==b.V()?c=b:0==b.V()?c.a=b.a:c=b;b=c.a}while(b)}a.a.replace(h,g)}}else g=bw(a,b,c,d,e,f,l),a.a.set(h,g);return g}k.Nb=function(a){if(this.C!=a){this.C=a;for(var b in this.g)this.g[b].clear();this.s()}};k.Ob=function(a,b){var c=Gb(a);c&&(c=w(c).toString(),c in this.v||(this.v[c]=b))};
function aw(a,b){a.Z().src=b};function dw(a){this.A=void 0!==a.hidpi?a.hidpi:!1;W.call(this,{cacheSize:a.cacheSize,crossOrigin:"anonymous",opaque:!0,projection:Gb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,tilePixelRatio:this.A?2:1,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.S=void 0!==a.culture?a.culture:"en-us";this.u=void 0!==a.maxZoom?a.maxZoom:-1;this.i=a.key;this.o=a.imagerySet;Nv("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.o+"?uriScheme=https&include=ImageryProviders&key="+
this.i,this.ia.bind(this),void 0,"jsonp")}u(dw,W);var ew=new nc({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});dw.prototype.Y=function(){return this.i};dw.prototype.ea=function(){return this.o};
dw.prototype.ia=function(a){if(200!=a.statusCode||"OK"!=a.statusDescription||"ValidCredentials"!=a.authenticationResultCode||1!=a.resourceSets.length||1!=a.resourceSets[0].resources.length)Ht(this,"error");else{var b=a.brandLogoUri;-1==b.indexOf("https")&&(b=b.replace("http","https"));var c=a.resourceSets[0].resources[0],d=-1==this.u?c.zoomMax:this.u;a=kc(this.c);var e=mc({extent:a,minZoom:c.zoomMin,maxZoom:d,tileSize:(c.imageWidth==c.imageHeight?c.imageWidth:[c.imageWidth,c.imageHeight])/this.pb()});
this.tileGrid=e;var f=this.S,g=this.A;this.tileUrlFunction=Rv(c.imageUrlSubdomains.map(function(a){var b=[0,0,0],d=c.imageUrl.replace("{subdomain}",a).replace("{culture}",f);return function(a){if(a)return Yb(a[0],a[1],-a[2]-1,b),a=d,g&&(a+="&dpi=d1&device=mobile"),a.replace("{quadkey}",Zb(b))}}));if(c.imageryProviders){var h=Fb(Gb("EPSG:4326"),this.c);a=c.imageryProviders.map(function(a){var b=a.attribution,c={};a.coverageAreas.forEach(function(a){var b=a.zoomMin,f=Math.min(a.zoomMax,d);a=a.bbox;
a=ob([a[1],a[0],a[3],a[2]],h);var g,l;for(g=b;g<=f;++g)l=g.toString(),b=cc(e,a,g),l in c?c[l].push(b):c[l]=[b]});return new nc({html:b,tileRanges:c})});a.push(ew);this.ua(a)}this.R=b;Ht(this,"ready")}};function fw(a){a=a||{};var b=void 0!==a.projection?a.projection:"EPSG:3857",c=void 0!==a.tileGrid?a.tileGrid:mc({extent:kc(b),maxZoom:a.maxZoom,minZoom:a.minZoom,tileSize:a.tileSize});W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:a.opaque,projection:b,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:c,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,
wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(fw,W);function gw(a){this.u=a.account;this.A=a.map||"";this.i=a.config||{};this.o={};fw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,maxZoom:void 0!==a.maxZoom?a.maxZoom:18,minZoom:a.minZoom,projection:a.projection,state:"loading",wrapX:a.wrapX});hw(this)}u(gw,fw);k=gw.prototype;k.pk=function(){return this.i};k.Fp=function(a){pb(this.i,a);hw(this)};k.np=function(a){this.i=a||{};hw(this)};
function hw(a){var b=JSON.stringify(a.i);if(a.o[b])iw(a,a.o[b]);else{var c="https://"+a.u+".cartodb.com/api/v1/map";a.A&&(c+="/named/"+a.A);var d=new XMLHttpRequest;d.addEventListener("load",a.jl.bind(a,b));d.addEventListener("error",a.il.bind(a));d.open("POST",c);d.setRequestHeader("Content-type","application/json");d.send(JSON.stringify(a.i))}}
k.jl=function(a,b){var c=b.target;if(!c.status||200<=c.status&&300>c.status){var d;try{d=JSON.parse(c.responseText)}catch(e){Ht(this,"error");return}iw(this,d);this.o[a]=d;Ht(this,"ready")}else Ht(this,"error")};k.il=function(){Ht(this,"error")};function iw(a,b){a.jb("https://"+b.cdn_url.https+"/"+a.u+"/api/v1/map/"+b.layergroupid+"/{z}/{x}/{y}.png")};function X(a){S.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,wrapX:a.wrapX});this.C=void 0;this.ia=void 0!==a.distance?a.distance:20;this.A=[];this.Ra=a.geometryFunction||function(a){a=a.U();qa(a instanceof E,10);return a};this.u=a.source;this.u.J("change",X.prototype.Oa,this)}u(X,S);X.prototype.lb=function(){return this.u};X.prototype.Ud=function(a,b,c){this.u.Ud(a,b,c);b!==this.C&&(this.clear(),this.C=b,jw(this),this.dd(this.A))};
X.prototype.mb=function(a){this.ia=a;this.Oa()};X.prototype.Oa=function(){this.clear();jw(this);this.dd(this.A);this.s()};function jw(a){if(void 0!==a.C){a.A.length=0;for(var b=Ia(),c=a.ia*a.C,d=a.u.Ne(),e={},f=0,g=d.length;f<g;f++){var h=d[f];w(h).toString()in e||!(h=a.Ra(h))||(h=h.X(),Wa(h,b),Ka(b,c,b),h=a.u.Hf(b),h=h.filter(function(a){a=w(a).toString();return a in e?!1:e[a]=!0}),a.A.push(kw(a,h)))}}}
function kw(a,b){for(var c=[0,0],d=b.length-1;0<=d;--d){var e=a.Ra(b[d]);e?Qe(c,e.X()):b.splice(d,1)}We(c,1/b.length);c=new H(new E(c));c.set("features",b);return c};function lw(a,b){var c=[];Object.keys(b).forEach(function(a){null!==b[a]&&void 0!==b[a]&&c.push(a+"="+encodeURIComponent(b[a]))});var d=c.join("&");a=a.replace(/[?&]$/,"");a=-1===a.indexOf("?")?a+"?":a+"&";return a+d};function mw(a){a=a||{};kv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.S=void 0!==a.crossOrigin?a.crossOrigin:null;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.i=a.url;this.g=a.imageLoadFunction?a.imageLoadFunction:qv;this.v=a.params||{};this.M=null;this.o=[0,0];this.C=0;this.A=void 0!==a.ratio?a.ratio:1.5}u(mw,kv);k=mw.prototype;k.rn=function(){return this.v};
k.Ic=function(a,b,c,d){if(void 0===this.i)return null;b=lv(this,b);c=this.Y?c:1;var e=this.M;if(e&&this.C==this.f&&e.resolution==b&&e.a==c&&Ta(e.D(),a))return e;e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};pb(e,this.v);a=a.slice();var f=(a[0]+a[2])/2,g=(a[1]+a[3])/2;if(1!=this.A){var h=this.A*hb(a)/2,l=this.A*ib(a)/2;a[0]=f-h;a[1]=g-l;a[2]=f+h;a[3]=g+l}var h=b/c,l=Math.ceil(hb(a)/h),m=Math.ceil(ib(a)/h);a[0]=f-h*l/2;a[2]=f+h*l/2;a[1]=g-h*m/2;a[3]=g+h*m/2;this.o[0]=l;this.o[1]=m;f=a;g=this.o;h=c;d=
d.nb.split(":").pop();e.SIZE=g[0]+","+g[1];e.BBOX=f.join(",");e.BBOXSR=d;e.IMAGESR=d;e.DPI=Math.round(90*h);d=this.i;f=d.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");f==d&&qa(!1,50);e=lw(f,e);this.M=new ss(a,b,c,this.l,e,this.S,this.g);this.C=this.f;B(this.M,"change",this.j,this);return this.M};k.qn=function(){return this.g};k.sn=function(){return this.i};k.tn=function(a){this.M=null;this.g=a;this.s()};
k.vn=function(a){a!=this.i&&(this.i=a,this.M=null,this.s())};k.wn=function(a){pb(this.v,a);this.M=null;this.s()};function nw(a){kv.call(this,{projection:a.projection,resolutions:a.resolutions});this.S=void 0!==a.crossOrigin?a.crossOrigin:null;this.o=void 0!==a.displayDpi?a.displayDpi:96;this.g=a.params||{};this.C=a.url;this.i=a.imageLoadFunction?a.imageLoadFunction:qv;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.ia=void 0!==a.metersPerUnit?a.metersPerUnit:1;this.v=void 0!==a.ratio?a.ratio:1;this.oa=void 0!==a.useOverlay?a.useOverlay:!1;this.M=null;this.A=0}u(nw,kv);k=nw.prototype;k.yn=function(){return this.g};
k.Ic=function(a,b,c){b=lv(this,b);c=this.Y?c:1;var d=this.M;if(d&&this.A==this.f&&d.resolution==b&&d.a==c&&Ta(d.D(),a))return d;1!=this.v&&(a=a.slice(),nb(a,this.v));var e=[hb(a)/b*c,ib(a)/b*c];if(void 0!==this.C){var d=this.C,f=jb(a),g=this.ia,h=hb(a),l=ib(a),m=e[0],p=e[1],n=.0254/this.o,e={OPERATION:this.oa?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.o,SETDISPLAYWIDTH:Math.round(e[0]),SETDISPLAYHEIGHT:Math.round(e[1]),
SETVIEWSCALE:p*h>m*l?h*g/(m*n):l*g/(p*n),SETVIEWCENTERX:f[0],SETVIEWCENTERY:f[1]};pb(e,this.g);d=lw(d,e);d=new ss(a,b,c,this.l,d,this.S,this.i);B(d,"change",this.j,this)}else d=null;this.M=d;this.A=this.f;return d};k.xn=function(){return this.i};k.An=function(a){pb(this.g,a);this.s()};k.zn=function(a){this.M=null;this.i=a;this.s()};function ow(a){var b=a.imageExtent,c=void 0!==a.crossOrigin?a.crossOrigin:null,d=a.imageLoadFunction?a.imageLoadFunction:qv;kv.call(this,{attributions:a.attributions,logo:a.logo,projection:Gb(a.projection)});this.M=new ss(b,void 0,1,this.l,a.url,c,d);this.i=a.imageSize?a.imageSize:null;B(this.M,"change",this.j,this)}u(ow,kv);ow.prototype.Ic=function(a){return mb(a,this.M.D())?this.M:null};
ow.prototype.j=function(a){if(2==this.M.V()){var b=this.M.D(),c=this.M.Z(),d,e;this.i?(d=this.i[0],e=this.i[1]):(d=c.width,e=c.height);b=Math.ceil(hb(b)/(ib(b)/e));if(b!=d){var b=Xc(b,e),f=b.canvas;b.drawImage(c,0,0,d,e,0,0,f.width,f.height);this.M.zg(f)}}kv.prototype.j.call(this,a)};function pw(a){a=a||{};kv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.ia=void 0!==a.crossOrigin?a.crossOrigin:null;this.g=a.url;this.v=a.imageLoadFunction?a.imageLoadFunction:qv;this.i=a.params||{};this.o=!0;qw(this);this.Y=a.serverType;this.oa=void 0!==a.hidpi?a.hidpi:!0;this.M=null;this.A=[0,0];this.S=0;this.C=void 0!==a.ratio?a.ratio:1.5}u(pw,kv);var rw=[101,101];k=pw.prototype;
k.Gn=function(a,b,c,d){if(void 0!==this.g){var e=kb(a,b,0,rw),f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};pb(f,this.i,d);d=Math.floor((e[3]-a[1])/b);f[this.o?"I":"X"]=Math.floor((a[0]-e[0])/b);f[this.o?"J":"Y"]=d;return sw(this,e,rw,1,Gb(c),f)}};k.In=function(){return this.i};
k.Ic=function(a,b,c,d){if(void 0===this.g)return null;b=lv(this,b);1==c||this.oa&&void 0!==this.Y||(c=1);var e=b/c,f=jb(a),g=kb(f,b,0,[Math.ceil(hb(a)/e),Math.ceil(ib(a)/e)]);a=kb(f,b,0,[Math.ceil(this.C*hb(a)/e),Math.ceil(this.C*ib(a)/e)]);if((f=this.M)&&this.S==this.f&&f.resolution==b&&f.a==c&&Ta(f.D(),g))return f;g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};pb(g,this.i);this.A[0]=Math.round(hb(a)/e);this.A[1]=Math.round(ib(a)/e);d=sw(this,a,this.A,c,d,g);
this.M=new ss(a,b,c,this.l,d,this.ia,this.v);this.S=this.f;B(this.M,"change",this.j,this);return this.M};k.Hn=function(){return this.v};
function sw(a,b,c,d,e,f){qa(void 0!==a.g,9);f[a.o?"CRS":"SRS"]=e.nb;"STYLES"in a.i||(f.STYLES="");if(1!=d)switch(a.Y){case "geoserver":d=90*d+.5|0;f.FORMAT_OPTIONS="FORMAT_OPTIONS"in f?f.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":f.MAP_RESOLUTION=90*d;break;case "carmentaserver":case "qgis":f.DPI=90*d;break;default:qa(!1,8)}f.WIDTH=c[0];f.HEIGHT=c[1];c=e.b;var g;a.o&&"ne"==c.substr(0,2)?g=[b[1],b[0],b[3],b[2]]:g=b;f.BBOX=g.join(",");return lw(a.g,f)}k.Jn=function(){return this.g};
k.Kn=function(a){this.M=null;this.v=a;this.s()};k.Ln=function(a){a!=this.g&&(this.g=a,this.M=null,this.s())};k.Mn=function(a){pb(this.i,a);qw(this);this.M=null;this.s()};function qw(a){a.o=0<=Pe(a.i.VERSION||"1.3.0")};function tw(a){a=a||{};var b;void 0!==a.attributions?b=a.attributions:b=[uw];fw.call(this,{attributions:b,cacheSize:a.cacheSize,crossOrigin:void 0!==a.crossOrigin?a.crossOrigin:"anonymous",opaque:void 0!==a.opaque?a.opaque:!0,maxZoom:void 0!==a.maxZoom?a.maxZoom:19,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:a.wrapX})}u(tw,fw);var uw=new nc({html:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.bq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return require(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){a=a("./processor");f.yj=a},{"./processor":2}],2:[function(a,b){function d(a){var b=!0;try{new ImageData(10,10)}catch(q){b=!1}return function(d){var e=d.buffers,f=d.meta,g=d.width,h=d.height,l=e.length,m=e[0].byteLength;if(d.imageOps){m=Array(l);for(d=0;d<l;++d){var n=m,p=d,q;q=new Uint8ClampedArray(e[d]);var La=g,C=h;q=b?new ImageData(q,
La,C):{data:q,width:La,height:C};n[p]=q}g=a(m,f).data}else{g=new Uint8ClampedArray(m);h=Array(l);n=Array(l);for(d=0;d<l;++d)h[d]=new Uint8ClampedArray(e[d]),n[d]=[0,0,0,0];for(e=0;e<m;e+=4){for(d=0;d<l;++d)p=h[d],n[d][0]=p[e],n[d][1]=p[e+1],n[d][2]=p[e+2],n[d][3]=p[e+3];d=a(n,f);g[e]=d[0];g[e+1]=d[1];g[e+2]=d[2];g[e+3]=d[3]}}return g.buffer}}function e(a,b){var e=Object.keys(a.lib||{}).map(function(b){return"var "+b+" = "+a.lib[b].toString()+";"}).concat(["var __minion__ = ("+d.toString()+")(",a.operation.toString(),
");",'self.addEventListener("message", function(event) {',"  var buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),e=URL.createObjectURL(new Blob(e,{type:"text/javascript"})),e=new Worker(e);e.addEventListener("message",b);return e}function h(a,b){var e=d(a.operation);return{postMessage:function(a){setTimeout(function(){b({data:{buffer:e(a),meta:a.meta}})},0)}}}function l(a){this.uf=!!a.Gl;var b;0===a.threads?b=0:this.uf?b=1:b=a.threads||
1;var d=[];if(b)for(var f=0;f<b;++f)d[f]=e(a,this.Qg.bind(this,f));else d[0]=h(a,this.Qg.bind(this,0));this.le=d;this.Cd=[];this.Mj=a.Go||Infinity;this.je=0;this.cd={};this.vf=null}var m=a("./util").$l;l.prototype.Eo=function(a,b,d){this.Kj({inputs:a,Ch:b,fd:d});this.Ng()};l.prototype.Kj=function(a){for(this.Cd.push(a);this.Cd.length>this.Mj;)this.Cd.shift().fd(null,null)};l.prototype.Ng=function(){if(0===this.je&&0<this.Cd.length){var a=this.vf=this.Cd.shift(),b=a.inputs[0].width,d=a.inputs[0].height,
e=a.inputs.map(function(a){return a.data.buffer}),f=this.le.length;this.je=f;if(1===f)this.le[0].postMessage({buffers:e,meta:a.Ch,imageOps:this.uf,width:b,height:d},e);else for(var g=4*Math.ceil(a.inputs[0].data.length/4/f),h=0;h<f;++h){for(var l=h*g,m=[],V=0,Pa=e.length;V<Pa;++V)m.push(e[h].slice(l,l+g));this.le[h].postMessage({buffers:m,meta:a.Ch,imageOps:this.uf,width:b,height:d},m)}}};l.prototype.Qg=function(a,b){this.$p||(this.cd[a]=b.data,--this.je,0===this.je&&this.Nj())};l.prototype.Nj=function(){var a=
this.vf,b=this.le.length,d,e;if(1===b)d=new Uint8ClampedArray(this.cd[0].buffer),e=this.cd[0].meta;else{var f=a.inputs[0].data.length;d=new Uint8ClampedArray(f);e=Array(f);for(var f=4*Math.ceil(f/4/b),g=0;g<b;++g){var h=g*f;d.set(new Uint8ClampedArray(this.cd[g].buffer),h);e[g]=this.cd[g].meta}}this.vf=null;this.cd={};a.fd(null,m(d,a.inputs[0].width,a.inputs[0].height),e);this.Ng()};b.ma=l},{"./util":3}],3:[function(a,b,f){var d=!0;try{new ImageData(10,10)}catch(l){d=!1}var e=document.createElement("canvas").getContext("2d");
f.$l=function(a,b,f){if(d)return new ImageData(a,b,f);b=e.createImageData(b,f);b.data.set(a);return b}},{}]},{},[1])(1)});Cj=b.ma})();function vw(a){this.C=null;this.Ha=void 0!==a.operationType?a.operationType:"pixel";this.Oa=void 0!==a.threads?a.threads:1;this.i=ww(a.sources);for(var b=0,c=this.i.length;b<c;++b)B(this.i[b],"change",this.s,this);this.g=Xc();this.ia=new Fe(function(){return 1},this.s.bind(this));for(var b=xw(this.i),c={},d=0,e=b.length;d<e;++d)c[w(b[d].layer)]=b[d];this.o=this.v=null;this.Y={animate:!1,attributions:{},coordinateToPixelTransform:vh(),extent:null,focus:null,index:0,layerStates:c,layerStatesArray:b,
logos:{},pixelRatio:1,pixelToCoordinateTransform:vh(),postRenderFunctions:[],size:[0,0],skippedFeatureUids:{},tileQueue:this.ia,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{}};kv.call(this,{});a.operation&&this.A(a.operation,a.lib)}u(vw,kv);vw.prototype.A=function(a,b){this.C=new Cj.yj({operation:a,Gl:"image"===this.Ha,Go:1,lib:b,threads:this.Oa});this.s()};function yw(a,b,c){var d=a.v;return!d||a.f!==d.kp||c!==d.resolution||!Za(b,d.extent)}
vw.prototype.Z=function(a,b,c,d){c=!0;for(var e,f=0,g=this.i.length;f<g;++f)if(e=this.i[f].a.la(),"ready"!==e.V()){c=!1;break}if(!c)return null;a=a.slice();if(!yw(this,a,b))return this.o;c=this.g.canvas;e=Math.round(hb(a)/b);f=Math.round(ib(a)/b);if(e!==c.width||f!==c.height)c.width=e,c.height=f;e=pb({},this.Y);e.viewState=pb({},e.viewState);var f=jb(a),g=Math.round(hb(a)/b),h=Math.round(ib(a)/b);e.extent=a;e.focus=jb(a);e.size[0]=g;e.size[1]=h;g=e.viewState;g.center=f;g.projection=d;g.resolution=
b;this.o=d=new ts(a,b,1,this.l,c,this.S.bind(this,e));this.v={extent:a,resolution:b,kp:this.f};return d};
vw.prototype.S=function(a,b){for(var c=this.i.length,d=Array(c),e=0;e<c;++e){var f;f=this.i[e];var g=a,h=a.layerStatesArray[e];if(f.qd(g,h)){var l=g.size[0],m=g.size[1];if(zw){var p=zw.canvas;p.width!==l||p.height!==m?zw=Xc(l,m):zw.clearRect(0,0,l,m)}else zw=Xc(l,m);f.I(g,h,zw);f=zw.getImageData(0,0,l,m)}else f=null;if(f)d[e]=f;else{d=null;break}}d&&(c={},this.b(new Aw(Bw,a,c)),this.C.Eo(d,c,this.oa.bind(this,a,b)));Ge(a.tileQueue,16,16)};
vw.prototype.oa=function(a,b,c,d,e){c?b(c):d&&(this.b(new Aw(Cw,a,e)),yw(this,a.extent,a.viewState.resolution/a.pixelRatio)||this.g.putImageData(d,0,0),b(null))};var zw=null;function xw(a){return a.map(function(a){return dh(a.a)})}function ww(a){for(var b=a.length,c=Array(b),d=0;d<b;++d){var e=d,f=a[d],g=null;f instanceof Wv?(f=new Gv({source:f}),g=new yv(f)):f instanceof kv&&(f=new xv({source:f}),g=new cv(f));c[e]=g}return c}
function Aw(a,b,c){Bc.call(this,a);this.extent=b.extent;this.resolution=b.viewState.resolution/b.pixelRatio;this.data=c}u(Aw,Bc);vw.prototype.Ic=function(){return null};var Bw="beforeoperations",Cw="afteroperations";function Dw(a){var b=a.layer.indexOf("-"),b=Ew[-1==b?a.layer:a.layer.slice(0,b)],c=Fw[a.layer];fw.call(this,{attributions:Gw,cacheSize:a.cacheSize,crossOrigin:"anonymous",maxZoom:void 0!=a.maxZoom?a.maxZoom:b.maxZoom,minZoom:void 0!=a.minZoom?a.minZoom:b.minZoom,opaque:c.opaque,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+a.layer+"/{z}/{x}/{y}."+c.Hb})}u(Dw,fw);
var Gw=[new nc({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),uw],Fw={terrain:{Hb:"jpg",opaque:!0},"terrain-background":{Hb:"jpg",opaque:!0},"terrain-labels":{Hb:"png",opaque:!1},"terrain-lines":{Hb:"png",opaque:!1},"toner-background":{Hb:"png",opaque:!0},toner:{Hb:"png",opaque:!0},"toner-hybrid":{Hb:"png",opaque:!1},"toner-labels":{Hb:"png",opaque:!1},"toner-lines":{Hb:"png",opaque:!1},"toner-lite":{Hb:"png",
opaque:!0},watercolor:{Hb:"jpg",opaque:!0}},Ew={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:1,maxZoom:16}};function Hw(a){a=a||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.i=a.params||{};this.o=Ia();Xv(this,Iw(this))}u(Hw,W);function Iw(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}Hw.prototype.u=function(){return this.i};
Hw.prototype.pb=function(a){return a};
Hw.prototype.Fc=function(a,b,c){var d=this.tileGrid;d||(d=this.Ib(c));if(!(d.b.length<=a[0])){var e=d.Ta(a,this.o),f=Ga(d.fb(a[0]),this.j);1!=b&&(f=Fa(f,b,this.j));d={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};pb(d,this.i);var g=this.urls;g?(c=c.nb.split(":").pop(),d.SIZE=f[0]+","+f[1],d.BBOX=e.join(","),d.BBOXSR=c,d.IMAGESR=c,d.DPI=Math.round(d.DPI?d.DPI*b:90*b),a=(1==g.length?g[0]:g[Ca((a[1]<<a[0])+a[2],g.length)]).replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage"),
a=lw(a,d)):a=void 0;return a}};Hw.prototype.A=function(a){pb(this.i,a);Xv(this,Iw(this))};function Jw(a){Wv.call(this,{opaque:!1,projection:a.projection,tileGrid:a.tileGrid,wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(Jw,Wv);Jw.prototype.Lc=function(a,b,c){var d=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(d))return this.a.get(d);var e=Ga(this.tileGrid.fb(a));a=[a,b,c];b=(b=Yv(this,a))?Yv(this,b).toString():"";e=new Kw(a,e,b);this.a.set(d,e);return e};function Kw(a,b,c){us.call(this,a,2);this.c=b;this.Fa=c;this.f=null}u(Kw,us);
Kw.prototype.Z=function(){if(this.f)return this.f;var a=this.c,b=Xc(a[0],a[1]);b.strokeStyle="black";b.strokeRect(.5,.5,a[0]+.5,a[1]+.5);b.fillStyle="black";b.textAlign="center";b.textBaseline="middle";b.font="24px sans-serif";b.fillText(this.Fa,a[0]/2,a[1]/2);return this.f=b.canvas};Kw.prototype.load=function(){};function Lw(a){this.i=null;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,projection:Gb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,wrapX:void 0!==a.wrapX?a.wrapX:!0});if(a.jsonp)Nv(a.url,this.di.bind(this),this.Le.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.On.bind(this));b.addEventListener("error",this.Nn.bind(this));b.open("GET",a.url);b.send()}}
u(Lw,W);k=Lw.prototype;k.On=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Le();return}this.di(b)}else this.Le()};k.Nn=function(){this.Le()};k.Vk=function(){return this.i};
k.di=function(a){var b=Gb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Fb(b,c);d=ob(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=mc({extent:kc(c),maxZoom:e,minZoom:f});this.tileUrlFunction=Qv(a.tiles,c);if(void 0!==a.attribution&&!this.l){b=void 0!==d?d:b.D();d={};for(var g;f<=e;++f)g=f.toString(),d[g]=[cc(c,b,f)];this.ua([new nc({html:a.attribution,tileRanges:d})])}this.i=a;Ht(this,"ready")};k.Le=function(){Ht(this,"error")};function Mw(a){Wv.call(this,{projection:Gb("EPSG:3857"),state:"loading"});this.v=void 0!==a.preemptive?a.preemptive:!0;this.o=Sv;this.g=void 0;this.i=a.jsonp||!1;if(a.url)if(this.i)Nv(a.url,this.bg.bind(this),this.Me.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.Sn.bind(this));b.addEventListener("error",this.Rn.bind(this));b.open("GET",a.url);b.send()}else a.tileJSON?this.bg(a.tileJSON):qa(!1,51)}u(Mw,Wv);k=Mw.prototype;
k.Sn=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Me();return}this.bg(b)}else this.Me()};k.Rn=function(){this.Me()};k.Sk=function(){return this.g};k.dk=function(a,b,c,d,e){this.tileGrid?(b=this.tileGrid.we(a,b),Nw(this.Lc(b[0],b[1],b[2],1,this.c),a,c,d,e)):!0===e?setTimeout(function(){c.call(d,null)},0):c.call(d,null)};k.Me=function(){Ht(this,"error")};
k.bg=function(a){var b=Gb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Fb(b,c);d=ob(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=mc({extent:kc(c),maxZoom:e,minZoom:f});this.g=a.template;var g=a.grids;if(g){this.o=Qv(g,c);if(void 0!==a.attribution){b=void 0!==d?d:b.D();for(d={};f<=e;++f)g=f.toString(),d[g]=[cc(c,b,f)];this.ua([new nc({html:a.attribution,tileRanges:d})])}Ht(this,"ready")}else Ht(this,"error")};
k.Lc=function(a,b,c,d,e){var f=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];b=Yv(this,a,e);d=this.o(b,d,e);d=new Ow(a,void 0!==d?0:4,void 0!==d?d:"",this.tileGrid.Ta(a),this.v,this.i);this.a.set(f,d);return d};k.Eg=function(a,b,c){a=this.Sb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function Ow(a,b,c,d,e,f){us.call(this,a,b);this.o=c;this.f=d;this.I=e;this.c=this.j=this.g=null;this.v=f}u(Ow,us);k=Ow.prototype;k.Z=function(){return null};
k.getData=function(a){if(!this.g||!this.j)return null;var b=this.g[Math.floor((1-(a[1]-this.f[1])/(this.f[3]-this.f[1]))*this.g.length)];if("string"!==typeof b)return null;b=b.charCodeAt(Math.floor((a[0]-this.f[0])/(this.f[2]-this.f[0])*b.length));93<=b&&b--;35<=b&&b--;b-=32;a=null;b in this.j&&(b=this.j[b],this.c&&b in this.c?a=this.c[b]:a=b);return a};
function Nw(a,b,c,d,e){0==a.state&&!0===e?(wc(a,"change",function(){c.call(d,this.getData(b))},a),Pw(a)):!0===e?setTimeout(function(){c.call(d,this.getData(b))}.bind(a),0):c.call(d,a.getData(b))}k.ib=function(){return this.o};k.xe=function(){this.state=3;this.s()};k.ei=function(a){this.g=a.grid;this.j=a.keys;this.c=a.data;this.state=4;this.s()};
function Pw(a){if(0==a.state)if(a.state=1,a.v)Nv(a.o,a.ei.bind(a),a.xe.bind(a));else{var b=new XMLHttpRequest;b.addEventListener("load",a.Qn.bind(a));b.addEventListener("error",a.Pn.bind(a));b.open("GET",a.o);b.send()}}k.Qn=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.xe();return}this.ei(b)}else this.xe()};k.Pn=function(){this.xe()};k.load=function(){this.I&&Pw(this)};function Qw(a){a=a||{};var b=a.params||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:!("TRANSPARENT"in b?b.TRANSPARENT:1),projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.u=void 0!==a.gutter?a.gutter:0;this.i=b;this.o=!0;this.A=a.serverType;this.Y=void 0!==a.hidpi?a.hidpi:!0;this.S="";
Rw(this);this.ea=Ia();Sw(this);Xv(this,Tw(this))}u(Qw,W);k=Qw.prototype;
k.Tn=function(a,b,c,d){c=Gb(c);var e=this.tileGrid;e||(e=this.Ib(c));b=e.we(a,b);if(!(e.b.length<=b[0])){var f=e.La(b[0]),g=e.Ta(b,this.ea),e=Ga(e.fb(b[0]),this.j),h=this.u;h&&(e=Ea(e,h,this.j),g=Ka(g,f*h,g));h={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};pb(h,this.i,d);d=Math.floor((g[3]-a[1])/f);h[this.o?"I":"X"]=Math.floor((a[0]-g[0])/f);h[this.o?"J":"Y"]=d;return Uw(this,b,e,g,1,c,h)}};k.Kf=function(){return this.u};
k.Sb=function(a,b,c){return this.S+W.prototype.Sb.call(this,a,b,c)};k.Un=function(){return this.i};
function Uw(a,b,c,d,e,f,g){var h=a.urls;if(h){g.WIDTH=c[0];g.HEIGHT=c[1];g[a.o?"CRS":"SRS"]=f.nb;"STYLES"in a.i||(g.STYLES="");if(1!=e)switch(a.A){case "geoserver":c=90*e+.5|0;g.FORMAT_OPTIONS="FORMAT_OPTIONS"in g?g.FORMAT_OPTIONS+(";dpi:"+c):"dpi:"+c;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e;break;default:qa(!1,52)}f=f.b;a.o&&"ne"==f.substr(0,2)&&(a=d[0],d[0]=d[1],d[1]=a,a=d[2],d[2]=d[3],d[3]=a);g.BBOX=d.join(",");return lw(1==h.length?h[0]:h[Ca((b[1]<<
b[0])+b[2],h.length)],g)}}k.pb=function(a){return this.Y&&void 0!==this.A?a:1};function Rw(a){var b=0,c=[];if(a.urls){var d,e;d=0;for(e=a.urls.length;d<e;++d)c[b++]=a.urls[d]}a.S=c.join("#")}function Tw(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.Fc=function(a,b,c){var d=this.tileGrid;d||(d=this.Ib(c));if(!(d.b.length<=a[0])){1==b||this.Y&&void 0!==this.A||(b=1);var e=d.La(a[0]),f=d.Ta(a,this.ea),d=Ga(d.fb(a[0]),this.j),g=this.u;g&&(d=Ea(d,g,this.j),f=Ka(f,e*g,f));1!=b&&(d=Fa(d,b,this.j));e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};pb(e,this.i);return Uw(this,a,d,f,b,c,e)}};k.cb=function(a){W.prototype.cb.call(this,a);Rw(this)};k.Vn=function(a){pb(this.i,a);Rw(this);Sw(this);Xv(this,Tw(this))};
function Sw(a){a.o=0<=Pe(a.i.VERSION||"1.3.0")};function Vw(a,b,c,d,e){us.call(this,a,b);this.c=Xc();this.j=d;this.g=null;this.f={Ld:!1,wg:null,af:-1,xg:-1,vd:null};this.I=e;this.o=c}u(Vw,us);k=Vw.prototype;k.Z=function(){return-1==this.f.xg?null:this.c.canvas};k.rm=function(){return this.j};k.ib=function(){return this.o};k.load=function(){0==this.state&&(this.state=1,this.s(),this.I(this,this.o),this.v(null,NaN,null))};k.po=function(a,b){this.Xf(b);this.Hi(a)};k.oo=function(){this.state=3;this.s()};k.Hi=function(a){this.g=a;this.state=2;this.s()};
k.Xf=function(a){this.l=a};k.Mi=function(a){this.v=a};function Ww(a,b){a.Mi(zl(b,a.j,a.po.bind(a),a.oo.bind(a)))};function Xw(a){$v.call(this,{attributions:a.attributions,cacheSize:void 0!==a.cacheSize?a.cacheSize:128,extent:a.extent,logo:a.logo,opaque:!1,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:Ww,tileUrlFunction:a.tileUrlFunction,tilePixelRatio:a.tilePixelRatio,url:a.url,urls:a.urls,wrapX:void 0===a.wrapX?!0:a.wrapX});this.i=a.format?a.format:null;this.g=void 0==a.overlaps?!0:a.overlaps;this.tileClass=a.tileClass?a.tileClass:Vw}u(Xw,$v);
Xw.prototype.Lc=function(a,b,c,d,e){var f=this.Sb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];d=(b=Yv(this,a,e))?this.tileUrlFunction(b,d,e):void 0;d=new this.tileClass(a,void 0!==d?0:4,void 0!==d?d:"",this.i,this.tileLoadFunction);B(d,"change",this.gi,this);this.a.set(f,d);return d};Xw.prototype.pb=function(a){return void 0==a?$v.prototype.pb.call(this,a):a};Xw.prototype.Sd=function(a,b){var c=Ga(this.tileGrid.fb(a));return[Math.round(c[0]*b),Math.round(c[1]*b)]};function Yw(a){this.j=a.matrixIds;$b.call(this,{extent:a.extent,origin:a.origin,origins:a.origins,resolutions:a.resolutions,tileSize:a.tileSize,tileSizes:a.tileSizes,sizes:a.sizes})}u(Yw,$b);Yw.prototype.o=function(){return this.j};
function Zw(a,b,c){var d=[],e=[],f=[],g=[],h=[],l=void 0!==c?c:[];c=Gb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var m=c.sc(),p="ne"==c.b.substr(0,2);a.TileMatrix.sort(function(a,b){return b.ScaleDenominator-a.ScaleDenominator});a.TileMatrix.forEach(function(a){var b;0<l.length?b=ha(l,function(b){return a.Identifier==b.TileMatrix}):b=!0;if(b){e.push(a.Identifier);b=2.8E-4*a.ScaleDenominator/m;var c=a.TileWidth,n=a.TileHeight;p?f.push([a.TopLeftCorner[1],a.TopLeftCorner[0]]):
f.push(a.TopLeftCorner);d.push(b);g.push(c==n?c:[c,n]);h.push([a.MatrixWidth,-a.MatrixHeight])}});return new Yw({extent:b,origins:f,resolutions:d,matrixIds:e,tileSizes:g,sizes:h})};function Y(a){function b(a){a="KVP"==d?lw(a,f):a.replace(/\{(\w+?)\}/g,function(a,b){return b.toLowerCase()in f?f[b.toLowerCase()]:a});return function(b){if(b){var c={TileMatrix:e.j[b[0]],TileCol:b[1],TileRow:-b[2]-1};pb(c,g);b=a;return b="KVP"==d?lw(b,c):b.replace(/\{(\w+?)\}/g,function(a,b){return c[b]})}}}this.ea=void 0!==a.version?a.version:"1.0.0";this.u=void 0!==a.format?a.format:"image/jpeg";this.i=a.dimensions?a.dimensions:{};this.A=a.layer;this.o=a.matrixSet;this.S=a.style;var c=a.urls;void 0===
c&&void 0!==a.url&&(c=Tv(a.url));var d=this.Y=void 0!==a.requestEncoding?a.requestEncoding:"KVP",e=a.tileGrid,f={layer:this.A,style:this.S,tilematrixset:this.o};"KVP"==d&&pb(f,{Service:"WMTS",Request:"GetTile",Version:this.ea,Format:this.u});var g=this.i,h=c&&0<c.length?Rv(c.map(b)):Sv;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:a.tileClass,tileGrid:e,
tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:h,urls:c,wrapX:void 0!==a.wrapX?a.wrapX:!1});Xv(this,$w(this))}u(Y,W);k=Y.prototype;k.rk=function(){return this.i};k.Wn=function(){return this.u};k.Xn=function(){return this.A};k.Fk=function(){return this.o};k.Qk=function(){return this.Y};k.Yn=function(){return this.S};k.Xk=function(){return this.ea};function $w(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.Gp=function(a){pb(this.i,a);Xv(this,$w(this))};function ax(a){a=a||{};var b=a.size,c=b[0],d=b[1],e=[],f=256;switch(void 0!==a.tierSizeCalculation?a.tierSizeCalculation:bx){case bx:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),f+=f;break;case cx:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),c>>=1,d>>=1;break;default:qa(!1,53)}e.push([1,1]);e.reverse();for(var f=[1],g=[0],d=1,c=e.length;d<c;d++)f.push(1<<d),g.push(e[d-1][0]*e[d-1][1]+g[d-1]);f.reverse();b=[0,-b[1],b[0],0];b=new $b({extent:b,origin:eb(b),resolutions:f});(f=a.url)&&
-1==f.indexOf("{TileGroup}")&&(f+="{TileGroup}/{z}-{x}-{y}.jpg");f=Tv(f);f=Rv(f.map(function(a){return function(b){if(b){var c=b[0],d=b[1];b=-b[2]-1;var f={z:c,x:d,y:b,TileGroup:"TileGroup"+((d+b*e[c][0]+g[c])/256|0)};return a.replace(/\{(\w+?)\}/g,function(a,b){return f[b]})}}}));W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:dx,tileGrid:b,tileUrlFunction:f})}
u(ax,W);function dx(a,b,c,d,e){ws.call(this,a,b,c,d,e);this.f=null}u(dx,ws);dx.prototype.Z=function(){if(this.f)return this.f;var a=ws.prototype.Z.call(this);if(2==this.state){if(256==a.width&&256==a.height)return this.f=a;var b=Xc(256,256);b.drawImage(a,0,0);return this.f=b.canvas}return a};var bx="default",cx="truncated";function ex(a,b){this.b=b;this.a=[{x:0,y:0,width:a,height:a}];this.c={};this.f=Xc(a,a);this.i=this.f.canvas}ex.prototype.get=function(a){return this.c[a]||null};
ex.prototype.add=function(a,b,c,d,e){var f,g,h;g=0;for(h=this.a.length;g<h;++g)if(f=this.a[g],f.width>=b+this.b&&f.height>=c+this.b)return h={offsetX:f.x+this.b,offsetY:f.y+this.b,image:this.i},this.c[a]=h,d.call(e,this.f,f.x+this.b,f.y+this.b),a=g,b+=this.b,d=c+this.b,f.width-b>f.height-d?(c={x:f.x+b,y:f.y,width:f.width-b,height:f.height},b={x:f.x,y:f.y+d,width:b,height:f.height-d},fx(this,a,c,b)):(c={x:f.x+b,y:f.y,width:f.width-b,height:d},b={x:f.x,y:f.y+d,width:f.width,height:f.height-d},fx(this,
a,c,b)),h;return null};function fx(a,b,c,d){b=[b,1];0<c.width&&0<c.height&&b.push(c);0<d.width&&0<d.height&&b.push(d);a.a.splice.apply(a.a,b)};function gx(a){a=a||{};this.a=void 0!==a.initialSize?a.initialSize:256;this.f=void 0!==a.maxSize?a.maxSize:void 0!==ba?ba:2048;this.b=void 0!==a.space?a.space:1;this.i=[new ex(this.a,this.b)];this.c=this.a;this.g=[new ex(this.c,this.b)]}gx.prototype.add=function(a,b,c,d,e,f){if(b+this.b>this.f||c+this.b>this.f)return null;d=hx(this,!1,a,b,c,d,f);if(!d)return null;a=hx(this,!0,a,b,c,e?e:na,f);return{offsetX:d.offsetX,offsetY:d.offsetY,image:d.image,Fl:a.image}};
function hx(a,b,c,d,e,f,g){var h=b?a.g:a.i,l,m,p;m=0;for(p=h.length;m<p;++m){l=h[m];if(l=l.add(c,d,e,f,g))return l;l||m!==p-1||(b?(l=Math.min(2*a.c,a.f),a.c=l):(l=Math.min(2*a.a,a.f),a.a=l),l=new ex(l,a.b),h.push(l),++p)}return null};pa.prototype.code=pa.prototype.code;t("ol.Attribution",nc);nc.prototype.getHTML=nc.prototype.f;t("ol.Collection",D);D.prototype.clear=D.prototype.clear;D.prototype.extend=D.prototype.Tf;D.prototype.forEach=D.prototype.forEach;D.prototype.getArray=D.prototype.am;D.prototype.item=D.prototype.item;D.prototype.getLength=D.prototype.ec;D.prototype.insertAt=D.prototype.Be;D.prototype.pop=D.prototype.pop;D.prototype.push=D.prototype.push;D.prototype.remove=D.prototype.remove;D.prototype.removeAt=D.prototype.tg;
D.prototype.setAt=D.prototype.mp;Nc.prototype.element=Nc.prototype.element;t("ol.color.asArray",Qc);t("ol.color.asString",Sc);t("ol.colorlike.asColorLike",Vc);t("ol.control.defaults",nd);t("ol.coordinate.add",Qe);t("ol.coordinate.createStringXY",function(a){return function(b){return $e(b,a)}});t("ol.coordinate.format",Te);t("ol.coordinate.rotate",Ve);t("ol.coordinate.toStringHDMS",function(a,b){return a?Se(a[1],"NS",b)+" "+Se(a[0],"EW",b):""});t("ol.coordinate.toStringXY",$e);
t("ol.DeviceOrientation",Ok);Ok.prototype.getAlpha=Ok.prototype.jk;Ok.prototype.getBeta=Ok.prototype.mk;Ok.prototype.getGamma=Ok.prototype.uk;Ok.prototype.getHeading=Ok.prototype.bm;Ok.prototype.getTracking=Ok.prototype.Fh;Ok.prototype.setTracking=Ok.prototype.Uf;t("ol.easing.easeIn",ed);t("ol.easing.easeOut",fd);t("ol.easing.inAndOut",gd);t("ol.easing.linear",hd);t("ol.easing.upAndDown",function(a){return.5>a?gd(2*a):1-gd(2*(a-.5))});t("ol.extent.boundingExtent",Ha);t("ol.extent.buffer",Ka);
t("ol.extent.containsCoordinate",Qa);t("ol.extent.containsExtent",Ta);t("ol.extent.containsXY",Sa);t("ol.extent.createEmpty",Ia);t("ol.extent.equals",Za);t("ol.extent.extend",$a);t("ol.extent.getBottomLeft",bb);t("ol.extent.getBottomRight",cb);t("ol.extent.getCenter",jb);t("ol.extent.getHeight",ib);t("ol.extent.getIntersection",lb);t("ol.extent.getSize",function(a){return[a[2]-a[0],a[3]-a[1]]});t("ol.extent.getTopLeft",eb);t("ol.extent.getTopRight",db);t("ol.extent.getWidth",hb);
t("ol.extent.intersects",mb);t("ol.extent.isEmpty",gb);t("ol.extent.applyTransform",ob);t("ol.Feature",H);H.prototype.clone=H.prototype.clone;H.prototype.getGeometry=H.prototype.U;H.prototype.getId=H.prototype.dm;H.prototype.getGeometryName=H.prototype.wk;H.prototype.getStyle=H.prototype.em;H.prototype.getStyleFunction=H.prototype.Nc;H.prototype.setGeometry=H.prototype.Sa;H.prototype.setStyle=H.prototype.Vf;H.prototype.setId=H.prototype.kc;H.prototype.setGeometryName=H.prototype.Vc;
t("ol.featureloader.xhr",Al);t("ol.Geolocation",gs);gs.prototype.getAccuracy=gs.prototype.hk;gs.prototype.getAccuracyGeometry=gs.prototype.ik;gs.prototype.getAltitude=gs.prototype.kk;gs.prototype.getAltitudeAccuracy=gs.prototype.lk;gs.prototype.getHeading=gs.prototype.fm;gs.prototype.getPosition=gs.prototype.gm;gs.prototype.getProjection=gs.prototype.Gh;gs.prototype.getSpeed=gs.prototype.Rk;gs.prototype.getTracking=gs.prototype.Hh;gs.prototype.getTrackingOptions=gs.prototype.th;
gs.prototype.setProjection=gs.prototype.Ih;gs.prototype.setTracking=gs.prototype.Ee;gs.prototype.setTrackingOptions=gs.prototype.Si;t("ol.Graticule",ms);ms.prototype.getMap=ms.prototype.jm;ms.prototype.getMeridians=ms.prototype.Gk;ms.prototype.getParallels=ms.prototype.Nk;ms.prototype.setMap=ms.prototype.setMap;t("ol.has.DEVICE_PIXEL_RATIO",Kd);t("ol.has.CANVAS",Md);t("ol.has.DEVICE_ORIENTATION",Nd);t("ol.has.GEOLOCATION",Od);t("ol.has.TOUCH",Pd);t("ol.has.WEBGL",Ed);ss.prototype.getImage=ss.prototype.Z;
ss.prototype.load=ss.prototype.load;ws.prototype.getImage=ws.prototype.Z;t("ol.inherits",u);t("ol.interaction.defaults",bh);t("ol.Kinetic",Zf);t("ol.loadingstrategy.all",Et);t("ol.loadingstrategy.bbox",function(a){return[a]});t("ol.loadingstrategy.tile",function(a){return function(b,c){var d=a.Mc(c),e=cc(a,b,d),f=[],d=[d,0,0];for(d[1]=e.da;d[1]<=e.ba;++d[1])for(d[2]=e.fa;d[2]<=e.ja;++d[2])f.push(a.Ta(d));return f}});t("ol.Map",G);G.prototype.addControl=G.prototype.Rj;G.prototype.addInteraction=G.prototype.Sj;
G.prototype.addLayer=G.prototype.Sg;G.prototype.addOverlay=G.prototype.Tg;G.prototype.forEachFeatureAtPixel=G.prototype.re;G.prototype.forEachLayerAtPixel=G.prototype.pm;G.prototype.hasFeatureAtPixel=G.prototype.El;G.prototype.getEventCoordinate=G.prototype.sk;G.prototype.getEventPixel=G.prototype.te;G.prototype.getTarget=G.prototype.Of;G.prototype.getTargetElement=G.prototype.Kc;G.prototype.getCoordinateFromPixel=G.prototype.Za;G.prototype.getControls=G.prototype.qk;G.prototype.getOverlays=G.prototype.Lk;
G.prototype.getOverlayById=G.prototype.Kk;G.prototype.getInteractions=G.prototype.xk;G.prototype.getLayerGroup=G.prototype.Jc;G.prototype.getLayers=G.prototype.Jh;G.prototype.getPixelFromCoordinate=G.prototype.Ka;G.prototype.getSize=G.prototype.Mb;G.prototype.getView=G.prototype.$;G.prototype.getViewport=G.prototype.Yk;G.prototype.renderSync=G.prototype.ip;G.prototype.render=G.prototype.render;G.prototype.removeControl=G.prototype.ap;G.prototype.removeInteraction=G.prototype.bp;
G.prototype.removeLayer=G.prototype.ep;G.prototype.removeOverlay=G.prototype.fp;G.prototype.setLayerGroup=G.prototype.Li;G.prototype.setSize=G.prototype.Ag;G.prototype.setTarget=G.prototype.Fe;G.prototype.setView=G.prototype.vp;G.prototype.updateSize=G.prototype.xd;zd.prototype.originalEvent=zd.prototype.originalEvent;zd.prototype.pixel=zd.prototype.pixel;zd.prototype.coordinate=zd.prototype.coordinate;zd.prototype.dragging=zd.prototype.dragging;yd.prototype.map=yd.prototype.map;
yd.prototype.frameState=yd.prototype.frameState;t("ol.Object",Gc);Gc.prototype.get=Gc.prototype.get;Gc.prototype.getKeys=Gc.prototype.O;Gc.prototype.getProperties=Gc.prototype.N;Gc.prototype.set=Gc.prototype.set;Gc.prototype.setProperties=Gc.prototype.H;Gc.prototype.unset=Gc.prototype.P;Kc.prototype.key=Kc.prototype.key;Kc.prototype.oldValue=Kc.prototype.oldValue;t("ol.Observable",Fc);t("ol.Observable.unByKey",function(a){if(Array.isArray(a))for(var b=0,c=a.length;b<c;++b)rc(a[b]);else rc(a)});
Fc.prototype.changed=Fc.prototype.s;Fc.prototype.dispatchEvent=Fc.prototype.b;Fc.prototype.getRevision=Fc.prototype.L;Fc.prototype.on=Fc.prototype.J;Fc.prototype.once=Fc.prototype.once;Fc.prototype.un=Fc.prototype.K;t("ol.Overlay",pk);pk.prototype.getElement=pk.prototype.se;pk.prototype.getId=pk.prototype.qm;pk.prototype.getMap=pk.prototype.Ge;pk.prototype.getOffset=pk.prototype.qh;pk.prototype.getPosition=pk.prototype.Kh;pk.prototype.getPositioning=pk.prototype.rh;pk.prototype.setElement=pk.prototype.Gi;
pk.prototype.setMap=pk.prototype.setMap;pk.prototype.setOffset=pk.prototype.Ni;pk.prototype.setPosition=pk.prototype.Wf;pk.prototype.setPositioning=pk.prototype.Qi;t("ol.proj.METERS_PER_UNIT",vb);t("ol.proj.setProj4",function(a){wb=a});t("ol.proj.getPointResolution",Eb);t("ol.proj.addEquivalentProjections",Hb);t("ol.proj.addProjection",Pb);t("ol.proj.addCoordinateTransforms",Rb);t("ol.proj.fromLonLat",function(a,b){return Wb(a,"EPSG:4326",void 0!==b?b:"EPSG:3857")});
t("ol.proj.toLonLat",function(a,b){return Wb(a,void 0!==b?b:"EPSG:3857","EPSG:4326")});t("ol.proj.get",Gb);t("ol.proj.equivalent",Tb);t("ol.proj.getTransform",Ub);t("ol.proj.transform",Wb);t("ol.proj.transformExtent",Xb);t("ol.render.toContext",function(a,b){var c=a.canvas,d=b?b:{},e=d.pixelRatio||Kd;if(d=d.size)c.width=d[0]*e,c.height=d[1]*e,c.style.width=d[0]+"px",c.style.height=d[1]+"px";c=[0,0,c.width,c.height];d=Ch(vh(),e,e);return new Rh(a,e,c,d,0)});t("ol.size.toSize",Ga);t("ol.Sphere",tb);
tb.prototype.geodesicArea=tb.prototype.a;tb.prototype.haversineDistance=tb.prototype.b;us.prototype.getTileCoord=us.prototype.i;us.prototype.load=us.prototype.load;t("ol.tilegrid.createXYZ",mc);Vw.prototype.getFormat=Vw.prototype.rm;Vw.prototype.setFeatures=Vw.prototype.Hi;Vw.prototype.setProjection=Vw.prototype.Xf;Vw.prototype.setLoader=Vw.prototype.Mi;t("ol.View",Qf);Qf.prototype.animate=Qf.prototype.animate;Qf.prototype.constrainCenter=Qf.prototype.Ec;Qf.prototype.constrainResolution=Qf.prototype.constrainResolution;
Qf.prototype.constrainRotation=Qf.prototype.constrainRotation;Qf.prototype.getCenter=Qf.prototype.Ba;Qf.prototype.calculateExtent=Qf.prototype.ed;Qf.prototype.getMaxResolution=Qf.prototype.sm;Qf.prototype.getMinResolution=Qf.prototype.tm;Qf.prototype.getProjection=Qf.prototype.um;Qf.prototype.getResolution=Qf.prototype.Ua;Qf.prototype.getResolutions=Qf.prototype.vm;Qf.prototype.getRotation=Qf.prototype.Va;Qf.prototype.getZoom=Qf.prototype.$k;Qf.prototype.fit=Qf.prototype.Ff;
Qf.prototype.centerOn=Qf.prototype.$j;Qf.prototype.rotate=Qf.prototype.rotate;Qf.prototype.setCenter=Qf.prototype.wb;Qf.prototype.setResolution=Qf.prototype.Xc;Qf.prototype.setRotation=Qf.prototype.He;Qf.prototype.setZoom=Qf.prototype.yp;t("ol.xml.getAllTextContent",il);t("ol.xml.parse",ml);Ii.prototype.getGL=Ii.prototype.lo;Ii.prototype.useProgram=Ii.prototype.Rc;t("ol.tilegrid.TileGrid",$b);$b.prototype.forEachTileCoord=$b.prototype.eh;$b.prototype.getMaxZoom=$b.prototype.oh;
$b.prototype.getMinZoom=$b.prototype.ph;$b.prototype.getOrigin=$b.prototype.Qc;$b.prototype.getResolution=$b.prototype.La;$b.prototype.getResolutions=$b.prototype.oi;$b.prototype.getTileCoordExtent=$b.prototype.Ta;$b.prototype.getTileCoordForCoordAndResolution=$b.prototype.we;$b.prototype.getTileCoordForCoordAndZ=$b.prototype.Pf;$b.prototype.getTileSize=$b.prototype.fb;$b.prototype.getZForResolution=$b.prototype.Mc;t("ol.tilegrid.WMTS",Yw);Yw.prototype.getMatrixIds=Yw.prototype.o;
t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",Zw);t("ol.style.AtlasManager",gx);t("ol.style.Circle",Xk);Xk.prototype.setRadius=Xk.prototype.Wc;t("ol.style.Fill",Yk);Yk.prototype.clone=Yk.prototype.clone;Yk.prototype.getColor=Yk.prototype.f;Yk.prototype.setColor=Yk.prototype.c;t("ol.style.Icon",Qn);Qn.prototype.clone=Qn.prototype.clone;Qn.prototype.getAnchor=Qn.prototype.Hc;Qn.prototype.getColor=Qn.prototype.Zn;Qn.prototype.getImage=Qn.prototype.Z;Qn.prototype.getOrigin=Qn.prototype.Pc;
Qn.prototype.getSrc=Qn.prototype.$n;Qn.prototype.getSize=Qn.prototype.jc;Qn.prototype.load=Qn.prototype.load;t("ol.style.Image",Uk);Uk.prototype.getOpacity=Uk.prototype.Pe;Uk.prototype.getRotateWithView=Uk.prototype.Qe;Uk.prototype.getRotation=Uk.prototype.Re;Uk.prototype.getScale=Uk.prototype.Se;Uk.prototype.getSnapToPixel=Uk.prototype.ve;Uk.prototype.setOpacity=Uk.prototype.rd;Uk.prototype.setRotation=Uk.prototype.Te;Uk.prototype.setScale=Uk.prototype.sd;t("ol.style.RegularShape",Vk);
Vk.prototype.clone=Vk.prototype.clone;Vk.prototype.getAnchor=Vk.prototype.Hc;Vk.prototype.getAngle=Vk.prototype.ki;Vk.prototype.getFill=Vk.prototype.Ca;Vk.prototype.getImage=Vk.prototype.Z;Vk.prototype.getOrigin=Vk.prototype.Pc;Vk.prototype.getPoints=Vk.prototype.li;Vk.prototype.getRadius=Vk.prototype.mi;Vk.prototype.getRadius2=Vk.prototype.sh;Vk.prototype.getSize=Vk.prototype.jc;Vk.prototype.getStroke=Vk.prototype.Da;t("ol.style.Stroke",qj);qj.prototype.clone=qj.prototype.clone;
qj.prototype.getColor=qj.prototype.ao;qj.prototype.getLineCap=qj.prototype.Ak;qj.prototype.getLineDash=qj.prototype.bo;qj.prototype.getLineDashOffset=qj.prototype.Bk;qj.prototype.getLineJoin=qj.prototype.Ck;qj.prototype.getMiterLimit=qj.prototype.Hk;qj.prototype.getWidth=qj.prototype.co;qj.prototype.setColor=qj.prototype.eo;qj.prototype.setLineCap=qj.prototype.qp;qj.prototype.setLineDash=qj.prototype.setLineDash;qj.prototype.setLineDashOffset=qj.prototype.rp;qj.prototype.setLineJoin=qj.prototype.sp;
qj.prototype.setMiterLimit=qj.prototype.tp;qj.prototype.setWidth=qj.prototype.wp;t("ol.style.Style",Zk);Zk.prototype.clone=Zk.prototype.clone;Zk.prototype.getGeometry=Zk.prototype.U;Zk.prototype.getGeometryFunction=Zk.prototype.vk;Zk.prototype.getFill=Zk.prototype.Ca;Zk.prototype.setFill=Zk.prototype.cf;Zk.prototype.getImage=Zk.prototype.Z;Zk.prototype.setImage=Zk.prototype.zg;Zk.prototype.getStroke=Zk.prototype.Da;Zk.prototype.setStroke=Zk.prototype.df;Zk.prototype.getText=Zk.prototype.Pa;
Zk.prototype.setText=Zk.prototype.ef;Zk.prototype.getZIndex=Zk.prototype.za;Zk.prototype.setGeometry=Zk.prototype.Sa;Zk.prototype.setZIndex=Zk.prototype.Wb;t("ol.style.Text",Rn);Rn.prototype.clone=Rn.prototype.clone;Rn.prototype.getFont=Rn.prototype.tk;Rn.prototype.getOffsetX=Rn.prototype.Ik;Rn.prototype.getOffsetY=Rn.prototype.Jk;Rn.prototype.getFill=Rn.prototype.Ca;Rn.prototype.getRotateWithView=Rn.prototype.fo;Rn.prototype.getRotation=Rn.prototype.ho;Rn.prototype.getScale=Rn.prototype.io;
Rn.prototype.getStroke=Rn.prototype.Da;Rn.prototype.getText=Rn.prototype.Pa;Rn.prototype.getTextAlign=Rn.prototype.Tk;Rn.prototype.getTextBaseline=Rn.prototype.Uk;Rn.prototype.setFont=Rn.prototype.Ii;Rn.prototype.setOffsetX=Rn.prototype.Oi;Rn.prototype.setOffsetY=Rn.prototype.Pi;Rn.prototype.setFill=Rn.prototype.cf;Rn.prototype.setRotation=Rn.prototype.jo;Rn.prototype.setScale=Rn.prototype.ni;Rn.prototype.setStroke=Rn.prototype.df;Rn.prototype.setText=Rn.prototype.ef;Rn.prototype.setTextAlign=Rn.prototype.Ri;
Rn.prototype.setTextBaseline=Rn.prototype.up;t("ol.source.BingMaps",dw);t("ol.source.BingMaps.TOS_ATTRIBUTION",ew);dw.prototype.getApiKey=dw.prototype.Y;dw.prototype.getImagerySet=dw.prototype.ea;t("ol.source.CartoDB",gw);gw.prototype.getConfig=gw.prototype.pk;gw.prototype.updateConfig=gw.prototype.Fp;gw.prototype.setConfig=gw.prototype.np;t("ol.source.Cluster",X);X.prototype.getSource=X.prototype.lb;X.prototype.setDistance=X.prototype.mb;t("ol.source.Image",kv);mv.prototype.image=mv.prototype.image;
t("ol.source.ImageArcGISRest",mw);mw.prototype.getParams=mw.prototype.rn;mw.prototype.getImageLoadFunction=mw.prototype.qn;mw.prototype.getUrl=mw.prototype.sn;mw.prototype.setImageLoadFunction=mw.prototype.tn;mw.prototype.setUrl=mw.prototype.vn;mw.prototype.updateParams=mw.prototype.wn;t("ol.source.ImageCanvas",rv);t("ol.source.ImageMapGuide",nw);nw.prototype.getParams=nw.prototype.yn;nw.prototype.getImageLoadFunction=nw.prototype.xn;nw.prototype.updateParams=nw.prototype.An;
nw.prototype.setImageLoadFunction=nw.prototype.zn;t("ol.source.ImageStatic",ow);t("ol.source.ImageVector",sv);sv.prototype.getSource=sv.prototype.Bn;sv.prototype.getStyle=sv.prototype.Cn;sv.prototype.getStyleFunction=sv.prototype.Dn;sv.prototype.setStyle=sv.prototype.ci;t("ol.source.ImageWMS",pw);pw.prototype.getGetFeatureInfoUrl=pw.prototype.Gn;pw.prototype.getParams=pw.prototype.In;pw.prototype.getImageLoadFunction=pw.prototype.Hn;pw.prototype.getUrl=pw.prototype.Jn;
pw.prototype.setImageLoadFunction=pw.prototype.Kn;pw.prototype.setUrl=pw.prototype.Ln;pw.prototype.updateParams=pw.prototype.Mn;t("ol.source.OSM",tw);t("ol.source.OSM.ATTRIBUTION",uw);t("ol.source.Raster",vw);vw.prototype.setOperation=vw.prototype.A;Aw.prototype.extent=Aw.prototype.extent;Aw.prototype.resolution=Aw.prototype.resolution;Aw.prototype.data=Aw.prototype.data;t("ol.source.Source",Ft);Ft.prototype.getAttributions=Ft.prototype.xa;Ft.prototype.getLogo=Ft.prototype.wa;
Ft.prototype.getProjection=Ft.prototype.ya;Ft.prototype.getState=Ft.prototype.V;Ft.prototype.refresh=Ft.prototype.va;Ft.prototype.setAttributions=Ft.prototype.ua;t("ol.source.Stamen",Dw);t("ol.source.Tile",Wv);Wv.prototype.getTileGrid=Wv.prototype.ab;Zv.prototype.tile=Zv.prototype.tile;t("ol.source.TileArcGISRest",Hw);Hw.prototype.getParams=Hw.prototype.u;Hw.prototype.updateParams=Hw.prototype.A;t("ol.source.TileDebug",Jw);t("ol.source.TileImage",W);W.prototype.setRenderReprojectionEdges=W.prototype.Nb;
W.prototype.setTileGridForProjection=W.prototype.Ob;t("ol.source.TileJSON",Lw);Lw.prototype.getTileJSON=Lw.prototype.Vk;t("ol.source.TileUTFGrid",Mw);Mw.prototype.getTemplate=Mw.prototype.Sk;Mw.prototype.forDataAtCoordinateAndResolution=Mw.prototype.dk;t("ol.source.TileWMS",Qw);Qw.prototype.getGetFeatureInfoUrl=Qw.prototype.Tn;Qw.prototype.getParams=Qw.prototype.Un;Qw.prototype.updateParams=Qw.prototype.Vn;$v.prototype.getTileLoadFunction=$v.prototype.ob;$v.prototype.getTileUrlFunction=$v.prototype.qb;
$v.prototype.getUrls=$v.prototype.rb;$v.prototype.setTileLoadFunction=$v.prototype.xb;$v.prototype.setTileUrlFunction=$v.prototype.bb;$v.prototype.setUrl=$v.prototype.jb;$v.prototype.setUrls=$v.prototype.cb;t("ol.source.Vector",S);S.prototype.addFeature=S.prototype.zb;S.prototype.addFeatures=S.prototype.dd;S.prototype.clear=S.prototype.clear;S.prototype.forEachFeature=S.prototype.bh;S.prototype.forEachFeatureInExtent=S.prototype.ac;S.prototype.forEachFeatureIntersectingExtent=S.prototype.dh;
S.prototype.getFeaturesCollection=S.prototype.lh;S.prototype.getFeatures=S.prototype.Ne;S.prototype.getFeaturesAtCoordinate=S.prototype.kh;S.prototype.getFeaturesInExtent=S.prototype.Hf;S.prototype.getClosestFeatureToCoordinate=S.prototype.gh;S.prototype.getExtent=S.prototype.D;S.prototype.getFeatureById=S.prototype.jh;S.prototype.getFormat=S.prototype.hi;S.prototype.getUrl=S.prototype.ii;S.prototype.removeFeature=S.prototype.Db;Mt.prototype.feature=Mt.prototype.feature;t("ol.source.VectorTile",Xw);
t("ol.source.WMTS",Y);Y.prototype.getDimensions=Y.prototype.rk;Y.prototype.getFormat=Y.prototype.Wn;Y.prototype.getLayer=Y.prototype.Xn;Y.prototype.getMatrixSet=Y.prototype.Fk;Y.prototype.getRequestEncoding=Y.prototype.Qk;Y.prototype.getStyle=Y.prototype.Yn;Y.prototype.getVersion=Y.prototype.Xk;Y.prototype.updateDimensions=Y.prototype.Gp;
t("ol.source.WMTS.optionsFromCapabilities",function(a,b){var c=ha(a.Contents.Layer,function(a){return a.Identifier==b.layer}),d=a.Contents.TileMatrixSet,e,f,g;e=1<c.TileMatrixSetLink.length?"projection"in b?la(c.TileMatrixSetLink,function(a){var c=ha(d,function(b){return b.Identifier==a.TileMatrixSet}).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"),e=Gb(c),f=Gb(b.projection);return e&&f?Tb(e,f):c==b.projection}):la(c.TileMatrixSetLink,function(a){return a.TileMatrixSet==b.matrixSet}):
0;0>e&&(e=0);f=c.TileMatrixSetLink[e].TileMatrixSet;g=c.TileMatrixSetLink[e].TileMatrixSetLimits;var h=c.Format[0];"format"in b&&(h=b.format);e=la(c.Style,function(a){return"style"in b?a.Title==b.style:a.isDefault});0>e&&(e=0);e=c.Style[e].Identifier;var l={};"Dimension"in c&&c.Dimension.forEach(function(a){var b=a.Identifier,c=a.Default;void 0===c&&(c=a.Value[0]);l[b]=c});var m=ha(a.Contents.TileMatrixSet,function(a){return a.Identifier==f}),p;p="projection"in b?Gb(b.projection):Gb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,
"$1:$3"));var n=c.WGS84BoundingBox,q,r;void 0!==n&&(r=Gb("EPSG:4326").D(),r=n[0]==r[0]&&n[2]==r[2],q=Xb(n,"EPSG:4326",p),(n=p.D())&&(Ta(n,q)||(q=void 0)));g=Zw(m,q,g);var v=[],m=b.requestEncoding,m=void 0!==m?m:"";if("OperationsMetadata"in a&&"GetTile"in a.OperationsMetadata){q=a.OperationsMetadata.GetTile.DCP.HTTP.Get;for(var n=0,x=q.length;n<x;++n){var y=ha(q[n].Constraint,function(a){return"GetEncoding"==a.name}).AllowedValues.Value;""===m&&(m=y[0]);if("KVP"===m)ea(y,"KVP")&&v.push(q[n].href);
else break}}v.length||(m="REST",c.ResourceURL.forEach(function(a){"tile"===a.resourceType&&(h=a.format,v.push(a.template))}));return{urls:v,layer:b.layer,matrixSet:f,format:h,projection:p,requestEncoding:m,tileGrid:g,style:e,dimensions:l,wrapX:r}});t("ol.source.XYZ",fw);t("ol.source.Zoomify",ax);Lh.prototype.vectorContext=Lh.prototype.vectorContext;Lh.prototype.frameState=Lh.prototype.frameState;Lh.prototype.context=Lh.prototype.context;Lh.prototype.glContext=Lh.prototype.glContext;
Xp.prototype.get=Xp.prototype.get;Xp.prototype.getExtent=Xp.prototype.D;Xp.prototype.getGeometry=Xp.prototype.U;Xp.prototype.getProperties=Xp.prototype.mn;Xp.prototype.getType=Xp.prototype.T;t("ol.render.VectorContext",Qh);hk.prototype.setStyle=hk.prototype.pd;hk.prototype.drawGeometry=hk.prototype.mc;hk.prototype.drawFeature=hk.prototype.oe;Rh.prototype.drawCircle=Rh.prototype.$b;Rh.prototype.setStyle=Rh.prototype.pd;Rh.prototype.drawGeometry=Rh.prototype.mc;Rh.prototype.drawFeature=Rh.prototype.oe;
t("ol.proj.common.add",ph);t("ol.proj.Projection",yb);yb.prototype.getCode=yb.prototype.nk;yb.prototype.getExtent=yb.prototype.D;yb.prototype.getUnits=yb.prototype.Jb;yb.prototype.getMetersPerUnit=yb.prototype.sc;yb.prototype.getWorldExtent=yb.prototype.Zk;yb.prototype.isGlobal=yb.prototype.Kl;yb.prototype.setGlobal=yb.prototype.pp;yb.prototype.setExtent=yb.prototype.ln;yb.prototype.setWorldExtent=yb.prototype.xp;yb.prototype.setGetPointResolution=yb.prototype.op;
t("ol.proj.Units.METERS_PER_UNIT",vb);t("ol.layer.Base",ch);ch.prototype.getExtent=ch.prototype.D;ch.prototype.getMaxResolution=ch.prototype.gc;ch.prototype.getMinResolution=ch.prototype.hc;ch.prototype.getOpacity=ch.prototype.ic;ch.prototype.getVisible=ch.prototype.Kb;ch.prototype.getZIndex=ch.prototype.za;ch.prototype.setExtent=ch.prototype.uc;ch.prototype.setMaxResolution=ch.prototype.zc;ch.prototype.setMinResolution=ch.prototype.Ac;ch.prototype.setOpacity=ch.prototype.vc;
ch.prototype.setVisible=ch.prototype.wc;ch.prototype.setZIndex=ch.prototype.Wb;t("ol.layer.Group",eh);eh.prototype.getLayers=eh.prototype.od;eh.prototype.setLayers=eh.prototype.Sh;t("ol.layer.Heatmap",T);T.prototype.getBlur=T.prototype.fh;T.prototype.getGradient=T.prototype.mh;T.prototype.getRadius=T.prototype.Th;T.prototype.setBlur=T.prototype.Ei;T.prototype.setGradient=T.prototype.Ki;T.prototype.setRadius=T.prototype.Wc;t("ol.layer.Image",xv);xv.prototype.getSource=xv.prototype.la;
t("ol.layer.Layer",qh);qh.prototype.getSource=qh.prototype.la;qh.prototype.setMap=qh.prototype.setMap;qh.prototype.setSource=qh.prototype.Yc;t("ol.layer.Tile",Gv);Gv.prototype.getPreload=Gv.prototype.Pd;Gv.prototype.getSource=Gv.prototype.la;Gv.prototype.setPreload=Gv.prototype.Uh;Gv.prototype.getUseInterimTilesOnError=Gv.prototype.Td;Gv.prototype.setUseInterimTilesOnError=Gv.prototype.Vh;t("ol.layer.Vector",R);R.prototype.getSource=R.prototype.la;R.prototype.getStyle=R.prototype.C;
R.prototype.getStyleFunction=R.prototype.G;R.prototype.setStyle=R.prototype.g;t("ol.layer.VectorTile",U);U.prototype.getPreload=U.prototype.Pd;U.prototype.getUseInterimTilesOnError=U.prototype.Td;U.prototype.setPreload=U.prototype.Wh;U.prototype.setUseInterimTilesOnError=U.prototype.Xh;t("ol.interaction.DoubleClickZoom",dg);t("ol.interaction.DoubleClickZoom.handleEvent",eg);t("ol.interaction.DragAndDrop",ys);t("ol.interaction.DragAndDrop.handleEvent",af);Bs.prototype.features=Bs.prototype.features;
Bs.prototype.file=Bs.prototype.file;Bs.prototype.projection=Bs.prototype.projection;t("ol.interaction.DragBox",Cg);Cg.prototype.getGeometry=Cg.prototype.U;Hg.prototype.coordinate=Hg.prototype.coordinate;Hg.prototype.mapBrowserEvent=Hg.prototype.mapBrowserEvent;t("ol.interaction.DragPan",rg);t("ol.interaction.DragRotate",vg);t("ol.interaction.DragRotateAndZoom",Ds);t("ol.interaction.DragZoom",Lg);t("ol.interaction.Draw",Pt);t("ol.interaction.Draw.handleEvent",Rt);Pt.prototype.removeLastPoint=Pt.prototype.cp;
Pt.prototype.finishDrawing=Pt.prototype.Nd;Pt.prototype.extend=Pt.prototype.Om;t("ol.interaction.Draw.createRegularPolygon",function(a,b){return function(c,d){var e=c[0],f=c[1],g=Math.sqrt(Xe(e,f)),h=d?d:Of(new hs(e),a);Pf(h,e,g,b?b:Math.atan((f[1]-e[1])/(f[0]-e[0])));return h}});t("ol.interaction.Draw.createBox",function(){return function(a,b){var c=Ha(a),d=b||new F(null);d.pa([[bb(c),cb(c),db(c),eb(c),bb(c)]]);return d}});du.prototype.feature=du.prototype.feature;t("ol.interaction.Extent",fu);
fu.prototype.getExtent=fu.prototype.D;fu.prototype.setExtent=fu.prototype.g;qu.prototype.extent_=qu.prototype.b;t("ol.interaction.Interaction",$f);$f.prototype.getActive=$f.prototype.c;$f.prototype.getMap=$f.prototype.i;$f.prototype.setActive=$f.prototype.Ia;t("ol.interaction.KeyboardPan",Mg);t("ol.interaction.KeyboardPan.handleEvent",Ng);t("ol.interaction.KeyboardZoom",Og);t("ol.interaction.KeyboardZoom.handleEvent",Pg);t("ol.interaction.Modify",su);t("ol.interaction.Modify.handleEvent",vu);
su.prototype.removePoint=su.prototype.Ci;Au.prototype.features=Au.prototype.features;Au.prototype.mapBrowserEvent=Au.prototype.mapBrowserEvent;t("ol.interaction.MouseWheelZoom",Qg);t("ol.interaction.MouseWheelZoom.handleEvent",Rg);Qg.prototype.setMouseAnchor=Qg.prototype.S;t("ol.interaction.PinchRotate",Ug);t("ol.interaction.PinchZoom",Yg);t("ol.interaction.Pointer",og);t("ol.interaction.Pointer.handleEvent",pg);t("ol.interaction.Select",Iu);Iu.prototype.getFeatures=Iu.prototype.Ym;
Iu.prototype.getHitTolerance=Iu.prototype.Zm;Iu.prototype.getLayer=Iu.prototype.$m;t("ol.interaction.Select.handleEvent",Ju);Iu.prototype.setHitTolerance=Iu.prototype.bn;Iu.prototype.setMap=Iu.prototype.setMap;Lu.prototype.selected=Lu.prototype.selected;Lu.prototype.deselected=Lu.prototype.deselected;Lu.prototype.mapBrowserEvent=Lu.prototype.mapBrowserEvent;t("ol.interaction.Snap",Nu);Nu.prototype.addFeature=Nu.prototype.zb;Nu.prototype.removeFeature=Nu.prototype.Db;t("ol.interaction.Translate",Ru);
Ru.prototype.getHitTolerance=Ru.prototype.G;Ru.prototype.setHitTolerance=Ru.prototype.R;Xu.prototype.features=Xu.prototype.features;Xu.prototype.coordinate=Xu.prototype.coordinate;t("ol.geom.Circle",hs);hs.prototype.clone=hs.prototype.clone;hs.prototype.getCenter=hs.prototype.Ba;hs.prototype.getRadius=hs.prototype.Vd;hs.prototype.getType=hs.prototype.T;hs.prototype.intersectsExtent=hs.prototype.Xa;hs.prototype.setCenter=hs.prototype.wb;hs.prototype.setCenterAndRadius=hs.prototype.yg;
hs.prototype.setRadius=hs.prototype.Wc;hs.prototype.transform=hs.prototype.tb;t("ol.geom.Geometry",cf);cf.prototype.getClosestPoint=cf.prototype.Ab;cf.prototype.intersectsCoordinate=cf.prototype.sb;cf.prototype.getExtent=cf.prototype.D;cf.prototype.rotate=cf.prototype.rotate;cf.prototype.scale=cf.prototype.scale;cf.prototype.simplify=cf.prototype.Pb;cf.prototype.transform=cf.prototype.tb;t("ol.geom.GeometryCollection",pm);pm.prototype.clone=pm.prototype.clone;pm.prototype.getGeometries=pm.prototype.If;
pm.prototype.getType=pm.prototype.T;pm.prototype.intersectsExtent=pm.prototype.Xa;pm.prototype.setGeometries=pm.prototype.Ji;pm.prototype.applyTransform=pm.prototype.Dc;pm.prototype.translate=pm.prototype.translate;t("ol.geom.LinearRing",yf);yf.prototype.clone=yf.prototype.clone;yf.prototype.getArea=yf.prototype.Km;yf.prototype.getCoordinates=yf.prototype.X;yf.prototype.getType=yf.prototype.T;yf.prototype.setCoordinates=yf.prototype.pa;t("ol.geom.LineString",M);M.prototype.appendCoordinate=M.prototype.Tj;
M.prototype.clone=M.prototype.clone;M.prototype.forEachSegment=M.prototype.gk;M.prototype.getCoordinateAtM=M.prototype.Im;M.prototype.getCoordinates=M.prototype.X;M.prototype.getCoordinateAt=M.prototype.hh;M.prototype.getLength=M.prototype.Jm;M.prototype.getType=M.prototype.T;M.prototype.intersectsExtent=M.prototype.Xa;M.prototype.setCoordinates=M.prototype.pa;t("ol.geom.MultiLineString",N);N.prototype.appendLineString=N.prototype.Uj;N.prototype.clone=N.prototype.clone;
N.prototype.getCoordinateAtM=N.prototype.Lm;N.prototype.getCoordinates=N.prototype.X;N.prototype.getLineString=N.prototype.Dk;N.prototype.getLineStrings=N.prototype.hd;N.prototype.getType=N.prototype.T;N.prototype.intersectsExtent=N.prototype.Xa;N.prototype.setCoordinates=N.prototype.pa;t("ol.geom.MultiPoint",O);O.prototype.appendPoint=O.prototype.Wj;O.prototype.clone=O.prototype.clone;O.prototype.getCoordinates=O.prototype.X;O.prototype.getPoint=O.prototype.Ok;O.prototype.getPoints=O.prototype.Ie;
O.prototype.getType=O.prototype.T;O.prototype.intersectsExtent=O.prototype.Xa;O.prototype.setCoordinates=O.prototype.pa;t("ol.geom.MultiPolygon",P);P.prototype.appendPolygon=P.prototype.Xj;P.prototype.clone=P.prototype.clone;P.prototype.getArea=P.prototype.Mm;P.prototype.getCoordinates=P.prototype.X;P.prototype.getInteriorPoints=P.prototype.zk;P.prototype.getPolygon=P.prototype.Pk;P.prototype.getPolygons=P.prototype.Od;P.prototype.getType=P.prototype.T;P.prototype.intersectsExtent=P.prototype.Xa;
P.prototype.setCoordinates=P.prototype.pa;t("ol.geom.Point",E);E.prototype.clone=E.prototype.clone;E.prototype.getCoordinates=E.prototype.X;E.prototype.getType=E.prototype.T;E.prototype.intersectsExtent=E.prototype.Xa;E.prototype.setCoordinates=E.prototype.pa;t("ol.geom.Polygon",F);F.prototype.appendLinearRing=F.prototype.Vj;F.prototype.clone=F.prototype.clone;F.prototype.getArea=F.prototype.Nm;F.prototype.getCoordinates=F.prototype.X;F.prototype.getInteriorPoint=F.prototype.yk;
F.prototype.getLinearRingCount=F.prototype.Ek;F.prototype.getLinearRing=F.prototype.nh;F.prototype.getLinearRings=F.prototype.jd;F.prototype.getType=F.prototype.T;F.prototype.intersectsExtent=F.prototype.Xa;F.prototype.setCoordinates=F.prototype.pa;t("ol.geom.Polygon.circular",Mf);t("ol.geom.Polygon.fromExtent",Nf);t("ol.geom.Polygon.fromCircle",Of);t("ol.geom.SimpleGeometry",ff);ff.prototype.getFirstCoordinate=ff.prototype.bc;ff.prototype.getLastCoordinate=ff.prototype.cc;
ff.prototype.getLayout=ff.prototype.dc;ff.prototype.applyTransform=ff.prototype.Dc;ff.prototype.translate=ff.prototype.translate;t("ol.format.EsriJSON",Nl);Nl.prototype.readFeature=Nl.prototype.Ub;Nl.prototype.readFeatures=Nl.prototype.Qa;Nl.prototype.readGeometry=Nl.prototype.Tc;Nl.prototype.readProjection=Nl.prototype.kb;Nl.prototype.writeGeometry=Nl.prototype.bd;Nl.prototype.writeGeometryObject=Nl.prototype.ee;Nl.prototype.writeFeature=Nl.prototype.yd;Nl.prototype.writeFeatureObject=Nl.prototype.ad;
Nl.prototype.writeFeatures=Nl.prototype.Xb;Nl.prototype.writeFeaturesObject=Nl.prototype.ce;t("ol.format.Feature",Bl);t("ol.format.filter.and",nm);t("ol.format.filter.or",function(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(lm,b))});t("ol.format.filter.not",function(a){return new jm(a)});t("ol.format.filter.bbox",om);t("ol.format.filter.intersects",function(a,b,c){return new dm(a,b,c)});
t("ol.format.filter.within",function(a,b,c){return new mm(a,b,c)});t("ol.format.filter.equalTo",function(a,b,c){return new $l(a,b,c)});t("ol.format.filter.notEqualTo",function(a,b,c){return new km(a,b,c)});t("ol.format.filter.lessThan",function(a,b){return new hm(a,b)});t("ol.format.filter.lessThanOrEqualTo",function(a,b){return new im(a,b)});t("ol.format.filter.greaterThan",function(a,b){return new am(a,b)});t("ol.format.filter.greaterThanOrEqualTo",function(a,b){return new bm(a,b)});
t("ol.format.filter.isNull",function(a){return new gm(a)});t("ol.format.filter.between",function(a,b,c){return new em(a,b,c)});t("ol.format.filter.like",function(a,b,c,d,e,f){return new fm(a,b,c,d,e,f)});t("ol.format.GeoJSON",tm);tm.prototype.readFeature=tm.prototype.Ub;tm.prototype.readFeatures=tm.prototype.Qa;tm.prototype.readGeometry=tm.prototype.Tc;tm.prototype.readProjection=tm.prototype.kb;tm.prototype.writeFeature=tm.prototype.yd;tm.prototype.writeFeatureObject=tm.prototype.ad;
tm.prototype.writeFeatures=tm.prototype.Xb;tm.prototype.writeFeaturesObject=tm.prototype.ce;tm.prototype.writeGeometry=tm.prototype.bd;tm.prototype.writeGeometryObject=tm.prototype.ee;t("ol.format.GML",Om);Om.prototype.writeFeatures=Om.prototype.Xb;Om.prototype.writeFeaturesNode=Om.prototype.Yb;t("ol.format.GML2",Xm);t("ol.format.GML3",Om);Om.prototype.writeGeometryNode=Om.prototype.de;Om.prototype.writeFeatures=Om.prototype.Xb;Om.prototype.writeFeaturesNode=Om.prototype.Yb;
Bm.prototype.readFeatures=Bm.prototype.Qa;t("ol.format.GPX",Ym);Ym.prototype.readFeature=Ym.prototype.Ub;Ym.prototype.readFeatures=Ym.prototype.Qa;Ym.prototype.readProjection=Ym.prototype.kb;Ym.prototype.writeFeatures=Ym.prototype.Xb;Ym.prototype.writeFeaturesNode=Ym.prototype.Yb;t("ol.format.IGC",Jn);Jn.prototype.readFeature=Jn.prototype.Ub;Jn.prototype.readFeatures=Jn.prototype.Qa;Jn.prototype.readProjection=Jn.prototype.kb;t("ol.format.KML",Sn);Sn.prototype.readFeature=Sn.prototype.Ub;
Sn.prototype.readFeatures=Sn.prototype.Qa;Sn.prototype.readName=Sn.prototype.Ro;Sn.prototype.readNetworkLinks=Sn.prototype.So;Sn.prototype.readRegion=Sn.prototype.Vo;Sn.prototype.readRegionFromNode=Sn.prototype.$e;Sn.prototype.readProjection=Sn.prototype.kb;Sn.prototype.writeFeatures=Sn.prototype.Xb;Sn.prototype.writeFeaturesNode=Sn.prototype.Yb;t("ol.format.MVT",Yp);Yp.prototype.readFeatures=Yp.prototype.Qa;Yp.prototype.readProjection=Yp.prototype.kb;Yp.prototype.setLayers=Yp.prototype.Hm;
t("ol.format.OSMXML",$p);$p.prototype.readFeatures=$p.prototype.Qa;$p.prototype.readProjection=$p.prototype.kb;t("ol.format.Polyline",zq);t("ol.format.Polyline.encodeDeltas",Aq);t("ol.format.Polyline.decodeDeltas",Cq);t("ol.format.Polyline.encodeFloats",Bq);t("ol.format.Polyline.decodeFloats",Dq);zq.prototype.readFeature=zq.prototype.Ub;zq.prototype.readFeatures=zq.prototype.Qa;zq.prototype.readGeometry=zq.prototype.Tc;zq.prototype.readProjection=zq.prototype.kb;zq.prototype.writeGeometry=zq.prototype.bd;
t("ol.format.TopoJSON",Eq);Eq.prototype.readFeatures=Eq.prototype.Qa;Eq.prototype.readProjection=Eq.prototype.kb;t("ol.format.WFS",Kq);Kq.prototype.readFeatures=Kq.prototype.Qa;Kq.prototype.readTransactionResponse=Kq.prototype.j;Kq.prototype.readFeatureCollectionMetadata=Kq.prototype.l;Kq.prototype.writeGetFeature=Kq.prototype.o;Kq.prototype.writeTransaction=Kq.prototype.v;Kq.prototype.readProjection=Kq.prototype.kb;t("ol.format.WKT",br);br.prototype.readFeature=br.prototype.Ub;
br.prototype.readFeatures=br.prototype.Qa;br.prototype.readGeometry=br.prototype.Tc;br.prototype.writeFeature=br.prototype.yd;br.prototype.writeFeatures=br.prototype.Xb;br.prototype.writeGeometry=br.prototype.bd;t("ol.format.WMSCapabilities",ur);ur.prototype.read=ur.prototype.read;t("ol.format.WMSGetFeatureInfo",Rr);Rr.prototype.readFeatures=Rr.prototype.Qa;t("ol.format.WMTSCapabilities",Sr);Sr.prototype.read=Sr.prototype.read;t("ol.format.filter.And",Wl);t("ol.format.filter.Bbox",Xl);
t("ol.format.filter.Comparison",Yl);t("ol.format.filter.ComparisonBinary",Zl);t("ol.format.filter.EqualTo",$l);t("ol.format.filter.Filter",Ul);t("ol.format.filter.GreaterThan",am);t("ol.format.filter.GreaterThanOrEqualTo",bm);t("ol.format.filter.Intersects",dm);t("ol.format.filter.IsBetween",em);t("ol.format.filter.IsLike",fm);t("ol.format.filter.IsNull",gm);t("ol.format.filter.LessThan",hm);t("ol.format.filter.LessThanOrEqualTo",im);t("ol.format.filter.Not",jm);t("ol.format.filter.NotEqualTo",km);
t("ol.format.filter.Or",lm);t("ol.format.filter.Spatial",cm);t("ol.format.filter.Within",mm);t("ol.events.condition.altKeyOnly",function(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.altShiftKeysOnly",fg);t("ol.events.condition.always",af);t("ol.events.condition.click",function(a){return"click"==a.type});t("ol.events.condition.never",bf);t("ol.events.condition.pointerMove",hg);t("ol.events.condition.singleClick",ig);
t("ol.events.condition.doubleClick",function(a){return"dblclick"==a.type});t("ol.events.condition.noModifierKeys",jg);t("ol.events.condition.platformModifierKeyOnly",function(a){a=a.originalEvent;return!a.altKey&&(Jd?a.metaKey:a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.shiftKeyOnly",kg);t("ol.events.condition.targetNotEditable",lg);t("ol.events.condition.mouseOnly",mg);t("ol.events.condition.primaryAction",ng);Bc.prototype.type=Bc.prototype.type;Bc.prototype.target=Bc.prototype.target;
Bc.prototype.preventDefault=Bc.prototype.preventDefault;Bc.prototype.stopPropagation=Bc.prototype.stopPropagation;t("ol.control.Attribution",bd);t("ol.control.Attribution.render",cd);bd.prototype.getCollapsible=bd.prototype.xm;bd.prototype.setCollapsible=bd.prototype.Am;bd.prototype.setCollapsed=bd.prototype.zm;bd.prototype.getCollapsed=bd.prototype.wm;t("ol.control.Control",ad);ad.prototype.getMap=ad.prototype.g;ad.prototype.setMap=ad.prototype.setMap;ad.prototype.setTarget=ad.prototype.i;
t("ol.control.FullScreen",od);t("ol.control.MousePosition",td);t("ol.control.MousePosition.render",ud);td.prototype.getCoordinateFormat=td.prototype.ih;td.prototype.getProjection=td.prototype.Lh;td.prototype.setCoordinateFormat=td.prototype.Fi;td.prototype.setProjection=td.prototype.Mh;t("ol.control.OverviewMap",yk);t("ol.control.OverviewMap.render",zk);yk.prototype.getCollapsible=yk.prototype.Dm;yk.prototype.setCollapsible=yk.prototype.Gm;yk.prototype.setCollapsed=yk.prototype.Fm;
yk.prototype.getCollapsed=yk.prototype.Cm;yk.prototype.getOverviewMap=yk.prototype.Mk;t("ol.control.Rotate",id);t("ol.control.Rotate.render",jd);t("ol.control.ScaleLine",Dk);Dk.prototype.getUnits=Dk.prototype.Jb;t("ol.control.ScaleLine.render",Ek);Dk.prototype.setUnits=Dk.prototype.G;t("ol.control.Zoom",kd);t("ol.control.ZoomSlider",Ik);t("ol.control.ZoomSlider.render",Kk);t("ol.control.ZoomToExtent",Nk);Gc.prototype.changed=Gc.prototype.s;Gc.prototype.dispatchEvent=Gc.prototype.b;
Gc.prototype.getRevision=Gc.prototype.L;Gc.prototype.on=Gc.prototype.J;Gc.prototype.once=Gc.prototype.once;Gc.prototype.un=Gc.prototype.K;D.prototype.get=D.prototype.get;D.prototype.getKeys=D.prototype.O;D.prototype.getProperties=D.prototype.N;D.prototype.set=D.prototype.set;D.prototype.setProperties=D.prototype.H;D.prototype.unset=D.prototype.P;D.prototype.changed=D.prototype.s;D.prototype.dispatchEvent=D.prototype.b;D.prototype.getRevision=D.prototype.L;D.prototype.on=D.prototype.J;
D.prototype.once=D.prototype.once;D.prototype.un=D.prototype.K;Nc.prototype.type=Nc.prototype.type;Nc.prototype.target=Nc.prototype.target;Nc.prototype.preventDefault=Nc.prototype.preventDefault;Nc.prototype.stopPropagation=Nc.prototype.stopPropagation;Ok.prototype.get=Ok.prototype.get;Ok.prototype.getKeys=Ok.prototype.O;Ok.prototype.getProperties=Ok.prototype.N;Ok.prototype.set=Ok.prototype.set;Ok.prototype.setProperties=Ok.prototype.H;Ok.prototype.unset=Ok.prototype.P;Ok.prototype.changed=Ok.prototype.s;
Ok.prototype.dispatchEvent=Ok.prototype.b;Ok.prototype.getRevision=Ok.prototype.L;Ok.prototype.on=Ok.prototype.J;Ok.prototype.once=Ok.prototype.once;Ok.prototype.un=Ok.prototype.K;H.prototype.get=H.prototype.get;H.prototype.getKeys=H.prototype.O;H.prototype.getProperties=H.prototype.N;H.prototype.set=H.prototype.set;H.prototype.setProperties=H.prototype.H;H.prototype.unset=H.prototype.P;H.prototype.changed=H.prototype.s;H.prototype.dispatchEvent=H.prototype.b;H.prototype.getRevision=H.prototype.L;
H.prototype.on=H.prototype.J;H.prototype.once=H.prototype.once;H.prototype.un=H.prototype.K;gs.prototype.get=gs.prototype.get;gs.prototype.getKeys=gs.prototype.O;gs.prototype.getProperties=gs.prototype.N;gs.prototype.set=gs.prototype.set;gs.prototype.setProperties=gs.prototype.H;gs.prototype.unset=gs.prototype.P;gs.prototype.changed=gs.prototype.s;gs.prototype.dispatchEvent=gs.prototype.b;gs.prototype.getRevision=gs.prototype.L;gs.prototype.on=gs.prototype.J;gs.prototype.once=gs.prototype.once;
gs.prototype.un=gs.prototype.K;ws.prototype.getTileCoord=ws.prototype.i;ws.prototype.load=ws.prototype.load;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.O;G.prototype.getProperties=G.prototype.N;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.H;G.prototype.unset=G.prototype.P;G.prototype.changed=G.prototype.s;G.prototype.dispatchEvent=G.prototype.b;G.prototype.getRevision=G.prototype.L;G.prototype.on=G.prototype.J;G.prototype.once=G.prototype.once;
G.prototype.un=G.prototype.K;yd.prototype.type=yd.prototype.type;yd.prototype.target=yd.prototype.target;yd.prototype.preventDefault=yd.prototype.preventDefault;yd.prototype.stopPropagation=yd.prototype.stopPropagation;zd.prototype.map=zd.prototype.map;zd.prototype.frameState=zd.prototype.frameState;zd.prototype.type=zd.prototype.type;zd.prototype.target=zd.prototype.target;zd.prototype.preventDefault=zd.prototype.preventDefault;zd.prototype.stopPropagation=zd.prototype.stopPropagation;
Bd.prototype.originalEvent=Bd.prototype.originalEvent;Bd.prototype.pixel=Bd.prototype.pixel;Bd.prototype.coordinate=Bd.prototype.coordinate;Bd.prototype.dragging=Bd.prototype.dragging;Bd.prototype.preventDefault=Bd.prototype.preventDefault;Bd.prototype.stopPropagation=Bd.prototype.stopPropagation;Bd.prototype.map=Bd.prototype.map;Bd.prototype.frameState=Bd.prototype.frameState;Bd.prototype.type=Bd.prototype.type;Bd.prototype.target=Bd.prototype.target;Kc.prototype.type=Kc.prototype.type;
Kc.prototype.target=Kc.prototype.target;Kc.prototype.preventDefault=Kc.prototype.preventDefault;Kc.prototype.stopPropagation=Kc.prototype.stopPropagation;pk.prototype.get=pk.prototype.get;pk.prototype.getKeys=pk.prototype.O;pk.prototype.getProperties=pk.prototype.N;pk.prototype.set=pk.prototype.set;pk.prototype.setProperties=pk.prototype.H;pk.prototype.unset=pk.prototype.P;pk.prototype.changed=pk.prototype.s;pk.prototype.dispatchEvent=pk.prototype.b;pk.prototype.getRevision=pk.prototype.L;
pk.prototype.on=pk.prototype.J;pk.prototype.once=pk.prototype.once;pk.prototype.un=pk.prototype.K;Vw.prototype.getTileCoord=Vw.prototype.i;Vw.prototype.load=Vw.prototype.load;Qf.prototype.get=Qf.prototype.get;Qf.prototype.getKeys=Qf.prototype.O;Qf.prototype.getProperties=Qf.prototype.N;Qf.prototype.set=Qf.prototype.set;Qf.prototype.setProperties=Qf.prototype.H;Qf.prototype.unset=Qf.prototype.P;Qf.prototype.changed=Qf.prototype.s;Qf.prototype.dispatchEvent=Qf.prototype.b;Qf.prototype.getRevision=Qf.prototype.L;
Qf.prototype.on=Qf.prototype.J;Qf.prototype.once=Qf.prototype.once;Qf.prototype.un=Qf.prototype.K;Yw.prototype.forEachTileCoord=Yw.prototype.eh;Yw.prototype.getMaxZoom=Yw.prototype.oh;Yw.prototype.getMinZoom=Yw.prototype.ph;Yw.prototype.getOrigin=Yw.prototype.Qc;Yw.prototype.getResolution=Yw.prototype.La;Yw.prototype.getResolutions=Yw.prototype.oi;Yw.prototype.getTileCoordExtent=Yw.prototype.Ta;Yw.prototype.getTileCoordForCoordAndResolution=Yw.prototype.we;Yw.prototype.getTileCoordForCoordAndZ=Yw.prototype.Pf;
Yw.prototype.getTileSize=Yw.prototype.fb;Yw.prototype.getZForResolution=Yw.prototype.Mc;Vk.prototype.getOpacity=Vk.prototype.Pe;Vk.prototype.getRotateWithView=Vk.prototype.Qe;Vk.prototype.getRotation=Vk.prototype.Re;Vk.prototype.getScale=Vk.prototype.Se;Vk.prototype.getSnapToPixel=Vk.prototype.ve;Vk.prototype.setOpacity=Vk.prototype.rd;Vk.prototype.setRotation=Vk.prototype.Te;Vk.prototype.setScale=Vk.prototype.sd;Xk.prototype.clone=Xk.prototype.clone;Xk.prototype.getAngle=Xk.prototype.ki;
Xk.prototype.getFill=Xk.prototype.Ca;Xk.prototype.getPoints=Xk.prototype.li;Xk.prototype.getRadius=Xk.prototype.mi;Xk.prototype.getRadius2=Xk.prototype.sh;Xk.prototype.getStroke=Xk.prototype.Da;Xk.prototype.getOpacity=Xk.prototype.Pe;Xk.prototype.getRotateWithView=Xk.prototype.Qe;Xk.prototype.getRotation=Xk.prototype.Re;Xk.prototype.getScale=Xk.prototype.Se;Xk.prototype.getSnapToPixel=Xk.prototype.ve;Xk.prototype.setOpacity=Xk.prototype.rd;Xk.prototype.setRotation=Xk.prototype.Te;
Xk.prototype.setScale=Xk.prototype.sd;Qn.prototype.getOpacity=Qn.prototype.Pe;Qn.prototype.getRotateWithView=Qn.prototype.Qe;Qn.prototype.getRotation=Qn.prototype.Re;Qn.prototype.getScale=Qn.prototype.Se;Qn.prototype.getSnapToPixel=Qn.prototype.ve;Qn.prototype.setOpacity=Qn.prototype.rd;Qn.prototype.setRotation=Qn.prototype.Te;Qn.prototype.setScale=Qn.prototype.sd;Ft.prototype.get=Ft.prototype.get;Ft.prototype.getKeys=Ft.prototype.O;Ft.prototype.getProperties=Ft.prototype.N;Ft.prototype.set=Ft.prototype.set;
Ft.prototype.setProperties=Ft.prototype.H;Ft.prototype.unset=Ft.prototype.P;Ft.prototype.changed=Ft.prototype.s;Ft.prototype.dispatchEvent=Ft.prototype.b;Ft.prototype.getRevision=Ft.prototype.L;Ft.prototype.on=Ft.prototype.J;Ft.prototype.once=Ft.prototype.once;Ft.prototype.un=Ft.prototype.K;Wv.prototype.getAttributions=Wv.prototype.xa;Wv.prototype.getLogo=Wv.prototype.wa;Wv.prototype.getProjection=Wv.prototype.ya;Wv.prototype.getState=Wv.prototype.V;Wv.prototype.refresh=Wv.prototype.va;
Wv.prototype.setAttributions=Wv.prototype.ua;Wv.prototype.get=Wv.prototype.get;Wv.prototype.getKeys=Wv.prototype.O;Wv.prototype.getProperties=Wv.prototype.N;Wv.prototype.set=Wv.prototype.set;Wv.prototype.setProperties=Wv.prototype.H;Wv.prototype.unset=Wv.prototype.P;Wv.prototype.changed=Wv.prototype.s;Wv.prototype.dispatchEvent=Wv.prototype.b;Wv.prototype.getRevision=Wv.prototype.L;Wv.prototype.on=Wv.prototype.J;Wv.prototype.once=Wv.prototype.once;Wv.prototype.un=Wv.prototype.K;
$v.prototype.getTileGrid=$v.prototype.ab;$v.prototype.refresh=$v.prototype.va;$v.prototype.getAttributions=$v.prototype.xa;$v.prototype.getLogo=$v.prototype.wa;$v.prototype.getProjection=$v.prototype.ya;$v.prototype.getState=$v.prototype.V;$v.prototype.setAttributions=$v.prototype.ua;$v.prototype.get=$v.prototype.get;$v.prototype.getKeys=$v.prototype.O;$v.prototype.getProperties=$v.prototype.N;$v.prototype.set=$v.prototype.set;$v.prototype.setProperties=$v.prototype.H;$v.prototype.unset=$v.prototype.P;
$v.prototype.changed=$v.prototype.s;$v.prototype.dispatchEvent=$v.prototype.b;$v.prototype.getRevision=$v.prototype.L;$v.prototype.on=$v.prototype.J;$v.prototype.once=$v.prototype.once;$v.prototype.un=$v.prototype.K;W.prototype.getTileLoadFunction=W.prototype.ob;W.prototype.getTileUrlFunction=W.prototype.qb;W.prototype.getUrls=W.prototype.rb;W.prototype.setTileLoadFunction=W.prototype.xb;W.prototype.setTileUrlFunction=W.prototype.bb;W.prototype.setUrl=W.prototype.jb;W.prototype.setUrls=W.prototype.cb;
W.prototype.getTileGrid=W.prototype.ab;W.prototype.refresh=W.prototype.va;W.prototype.getAttributions=W.prototype.xa;W.prototype.getLogo=W.prototype.wa;W.prototype.getProjection=W.prototype.ya;W.prototype.getState=W.prototype.V;W.prototype.setAttributions=W.prototype.ua;W.prototype.get=W.prototype.get;W.prototype.getKeys=W.prototype.O;W.prototype.getProperties=W.prototype.N;W.prototype.set=W.prototype.set;W.prototype.setProperties=W.prototype.H;W.prototype.unset=W.prototype.P;
W.prototype.changed=W.prototype.s;W.prototype.dispatchEvent=W.prototype.b;W.prototype.getRevision=W.prototype.L;W.prototype.on=W.prototype.J;W.prototype.once=W.prototype.once;W.prototype.un=W.prototype.K;dw.prototype.setRenderReprojectionEdges=dw.prototype.Nb;dw.prototype.setTileGridForProjection=dw.prototype.Ob;dw.prototype.getTileLoadFunction=dw.prototype.ob;dw.prototype.getTileUrlFunction=dw.prototype.qb;dw.prototype.getUrls=dw.prototype.rb;dw.prototype.setTileLoadFunction=dw.prototype.xb;
dw.prototype.setTileUrlFunction=dw.prototype.bb;dw.prototype.setUrl=dw.prototype.jb;dw.prototype.setUrls=dw.prototype.cb;dw.prototype.getTileGrid=dw.prototype.ab;dw.prototype.refresh=dw.prototype.va;dw.prototype.getAttributions=dw.prototype.xa;dw.prototype.getLogo=dw.prototype.wa;dw.prototype.getProjection=dw.prototype.ya;dw.prototype.getState=dw.prototype.V;dw.prototype.setAttributions=dw.prototype.ua;dw.prototype.get=dw.prototype.get;dw.prototype.getKeys=dw.prototype.O;
dw.prototype.getProperties=dw.prototype.N;dw.prototype.set=dw.prototype.set;dw.prototype.setProperties=dw.prototype.H;dw.prototype.unset=dw.prototype.P;dw.prototype.changed=dw.prototype.s;dw.prototype.dispatchEvent=dw.prototype.b;dw.prototype.getRevision=dw.prototype.L;dw.prototype.on=dw.prototype.J;dw.prototype.once=dw.prototype.once;dw.prototype.un=dw.prototype.K;fw.prototype.setRenderReprojectionEdges=fw.prototype.Nb;fw.prototype.setTileGridForProjection=fw.prototype.Ob;
fw.prototype.getTileLoadFunction=fw.prototype.ob;fw.prototype.getTileUrlFunction=fw.prototype.qb;fw.prototype.getUrls=fw.prototype.rb;fw.prototype.setTileLoadFunction=fw.prototype.xb;fw.prototype.setTileUrlFunction=fw.prototype.bb;fw.prototype.setUrl=fw.prototype.jb;fw.prototype.setUrls=fw.prototype.cb;fw.prototype.getTileGrid=fw.prototype.ab;fw.prototype.refresh=fw.prototype.va;fw.prototype.getAttributions=fw.prototype.xa;fw.prototype.getLogo=fw.prototype.wa;fw.prototype.getProjection=fw.prototype.ya;
fw.prototype.getState=fw.prototype.V;fw.prototype.setAttributions=fw.prototype.ua;fw.prototype.get=fw.prototype.get;fw.prototype.getKeys=fw.prototype.O;fw.prototype.getProperties=fw.prototype.N;fw.prototype.set=fw.prototype.set;fw.prototype.setProperties=fw.prototype.H;fw.prototype.unset=fw.prototype.P;fw.prototype.changed=fw.prototype.s;fw.prototype.dispatchEvent=fw.prototype.b;fw.prototype.getRevision=fw.prototype.L;fw.prototype.on=fw.prototype.J;fw.prototype.once=fw.prototype.once;
fw.prototype.un=fw.prototype.K;gw.prototype.setRenderReprojectionEdges=gw.prototype.Nb;gw.prototype.setTileGridForProjection=gw.prototype.Ob;gw.prototype.getTileLoadFunction=gw.prototype.ob;gw.prototype.getTileUrlFunction=gw.prototype.qb;gw.prototype.getUrls=gw.prototype.rb;gw.prototype.setTileLoadFunction=gw.prototype.xb;gw.prototype.setTileUrlFunction=gw.prototype.bb;gw.prototype.setUrl=gw.prototype.jb;gw.prototype.setUrls=gw.prototype.cb;gw.prototype.getTileGrid=gw.prototype.ab;
gw.prototype.refresh=gw.prototype.va;gw.prototype.getAttributions=gw.prototype.xa;gw.prototype.getLogo=gw.prototype.wa;gw.prototype.getProjection=gw.prototype.ya;gw.prototype.getState=gw.prototype.V;gw.prototype.setAttributions=gw.prototype.ua;gw.prototype.get=gw.prototype.get;gw.prototype.getKeys=gw.prototype.O;gw.prototype.getProperties=gw.prototype.N;gw.prototype.set=gw.prototype.set;gw.prototype.setProperties=gw.prototype.H;gw.prototype.unset=gw.prototype.P;gw.prototype.changed=gw.prototype.s;
gw.prototype.dispatchEvent=gw.prototype.b;gw.prototype.getRevision=gw.prototype.L;gw.prototype.on=gw.prototype.J;gw.prototype.once=gw.prototype.once;gw.prototype.un=gw.prototype.K;S.prototype.getAttributions=S.prototype.xa;S.prototype.getLogo=S.prototype.wa;S.prototype.getProjection=S.prototype.ya;S.prototype.getState=S.prototype.V;S.prototype.refresh=S.prototype.va;S.prototype.setAttributions=S.prototype.ua;S.prototype.get=S.prototype.get;S.prototype.getKeys=S.prototype.O;
S.prototype.getProperties=S.prototype.N;S.prototype.set=S.prototype.set;S.prototype.setProperties=S.prototype.H;S.prototype.unset=S.prototype.P;S.prototype.changed=S.prototype.s;S.prototype.dispatchEvent=S.prototype.b;S.prototype.getRevision=S.prototype.L;S.prototype.on=S.prototype.J;S.prototype.once=S.prototype.once;S.prototype.un=S.prototype.K;X.prototype.addFeature=X.prototype.zb;X.prototype.addFeatures=X.prototype.dd;X.prototype.clear=X.prototype.clear;X.prototype.forEachFeature=X.prototype.bh;
X.prototype.forEachFeatureInExtent=X.prototype.ac;X.prototype.forEachFeatureIntersectingExtent=X.prototype.dh;X.prototype.getFeaturesCollection=X.prototype.lh;X.prototype.getFeatures=X.prototype.Ne;X.prototype.getFeaturesAtCoordinate=X.prototype.kh;X.prototype.getFeaturesInExtent=X.prototype.Hf;X.prototype.getClosestFeatureToCoordinate=X.prototype.gh;X.prototype.getExtent=X.prototype.D;X.prototype.getFeatureById=X.prototype.jh;X.prototype.getFormat=X.prototype.hi;X.prototype.getUrl=X.prototype.ii;
X.prototype.removeFeature=X.prototype.Db;X.prototype.getAttributions=X.prototype.xa;X.prototype.getLogo=X.prototype.wa;X.prototype.getProjection=X.prototype.ya;X.prototype.getState=X.prototype.V;X.prototype.refresh=X.prototype.va;X.prototype.setAttributions=X.prototype.ua;X.prototype.get=X.prototype.get;X.prototype.getKeys=X.prototype.O;X.prototype.getProperties=X.prototype.N;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.H;X.prototype.unset=X.prototype.P;
X.prototype.changed=X.prototype.s;X.prototype.dispatchEvent=X.prototype.b;X.prototype.getRevision=X.prototype.L;X.prototype.on=X.prototype.J;X.prototype.once=X.prototype.once;X.prototype.un=X.prototype.K;kv.prototype.getAttributions=kv.prototype.xa;kv.prototype.getLogo=kv.prototype.wa;kv.prototype.getProjection=kv.prototype.ya;kv.prototype.getState=kv.prototype.V;kv.prototype.refresh=kv.prototype.va;kv.prototype.setAttributions=kv.prototype.ua;kv.prototype.get=kv.prototype.get;
kv.prototype.getKeys=kv.prototype.O;kv.prototype.getProperties=kv.prototype.N;kv.prototype.set=kv.prototype.set;kv.prototype.setProperties=kv.prototype.H;kv.prototype.unset=kv.prototype.P;kv.prototype.changed=kv.prototype.s;kv.prototype.dispatchEvent=kv.prototype.b;kv.prototype.getRevision=kv.prototype.L;kv.prototype.on=kv.prototype.J;kv.prototype.once=kv.prototype.once;kv.prototype.un=kv.prototype.K;mv.prototype.type=mv.prototype.type;mv.prototype.target=mv.prototype.target;
mv.prototype.preventDefault=mv.prototype.preventDefault;mv.prototype.stopPropagation=mv.prototype.stopPropagation;mw.prototype.getAttributions=mw.prototype.xa;mw.prototype.getLogo=mw.prototype.wa;mw.prototype.getProjection=mw.prototype.ya;mw.prototype.getState=mw.prototype.V;mw.prototype.refresh=mw.prototype.va;mw.prototype.setAttributions=mw.prototype.ua;mw.prototype.get=mw.prototype.get;mw.prototype.getKeys=mw.prototype.O;mw.prototype.getProperties=mw.prototype.N;mw.prototype.set=mw.prototype.set;
mw.prototype.setProperties=mw.prototype.H;mw.prototype.unset=mw.prototype.P;mw.prototype.changed=mw.prototype.s;mw.prototype.dispatchEvent=mw.prototype.b;mw.prototype.getRevision=mw.prototype.L;mw.prototype.on=mw.prototype.J;mw.prototype.once=mw.prototype.once;mw.prototype.un=mw.prototype.K;rv.prototype.getAttributions=rv.prototype.xa;rv.prototype.getLogo=rv.prototype.wa;rv.prototype.getProjection=rv.prototype.ya;rv.prototype.getState=rv.prototype.V;rv.prototype.refresh=rv.prototype.va;
rv.prototype.setAttributions=rv.prototype.ua;rv.prototype.get=rv.prototype.get;rv.prototype.getKeys=rv.prototype.O;rv.prototype.getProperties=rv.prototype.N;rv.prototype.set=rv.prototype.set;rv.prototype.setProperties=rv.prototype.H;rv.prototype.unset=rv.prototype.P;rv.prototype.changed=rv.prototype.s;rv.prototype.dispatchEvent=rv.prototype.b;rv.prototype.getRevision=rv.prototype.L;rv.prototype.on=rv.prototype.J;rv.prototype.once=rv.prototype.once;rv.prototype.un=rv.prototype.K;
nw.prototype.getAttributions=nw.prototype.xa;nw.prototype.getLogo=nw.prototype.wa;nw.prototype.getProjection=nw.prototype.ya;nw.prototype.getState=nw.prototype.V;nw.prototype.refresh=nw.prototype.va;nw.prototype.setAttributions=nw.prototype.ua;nw.prototype.get=nw.prototype.get;nw.prototype.getKeys=nw.prototype.O;nw.prototype.getProperties=nw.prototype.N;nw.prototype.set=nw.prototype.set;nw.prototype.setProperties=nw.prototype.H;nw.prototype.unset=nw.prototype.P;nw.prototype.changed=nw.prototype.s;
nw.prototype.dispatchEvent=nw.prototype.b;nw.prototype.getRevision=nw.prototype.L;nw.prototype.on=nw.prototype.J;nw.prototype.once=nw.prototype.once;nw.prototype.un=nw.prototype.K;ow.prototype.getAttributions=ow.prototype.xa;ow.prototype.getLogo=ow.prototype.wa;ow.prototype.getProjection=ow.prototype.ya;ow.prototype.getState=ow.prototype.V;ow.prototype.refresh=ow.prototype.va;ow.prototype.setAttributions=ow.prototype.ua;ow.prototype.get=ow.prototype.get;ow.prototype.getKeys=ow.prototype.O;
ow.prototype.getProperties=ow.prototype.N;ow.prototype.set=ow.prototype.set;ow.prototype.setProperties=ow.prototype.H;ow.prototype.unset=ow.prototype.P;ow.prototype.changed=ow.prototype.s;ow.prototype.dispatchEvent=ow.prototype.b;ow.prototype.getRevision=ow.prototype.L;ow.prototype.on=ow.prototype.J;ow.prototype.once=ow.prototype.once;ow.prototype.un=ow.prototype.K;sv.prototype.getAttributions=sv.prototype.xa;sv.prototype.getLogo=sv.prototype.wa;sv.prototype.getProjection=sv.prototype.ya;
sv.prototype.getState=sv.prototype.V;sv.prototype.refresh=sv.prototype.va;sv.prototype.setAttributions=sv.prototype.ua;sv.prototype.get=sv.prototype.get;sv.prototype.getKeys=sv.prototype.O;sv.prototype.getProperties=sv.prototype.N;sv.prototype.set=sv.prototype.set;sv.prototype.setProperties=sv.prototype.H;sv.prototype.unset=sv.prototype.P;sv.prototype.changed=sv.prototype.s;sv.prototype.dispatchEvent=sv.prototype.b;sv.prototype.getRevision=sv.prototype.L;sv.prototype.on=sv.prototype.J;
sv.prototype.once=sv.prototype.once;sv.prototype.un=sv.prototype.K;pw.prototype.getAttributions=pw.prototype.xa;pw.prototype.getLogo=pw.prototype.wa;pw.prototype.getProjection=pw.prototype.ya;pw.prototype.getState=pw.prototype.V;pw.prototype.refresh=pw.prototype.va;pw.prototype.setAttributions=pw.prototype.ua;pw.prototype.get=pw.prototype.get;pw.prototype.getKeys=pw.prototype.O;pw.prototype.getProperties=pw.prototype.N;pw.prototype.set=pw.prototype.set;pw.prototype.setProperties=pw.prototype.H;
pw.prototype.unset=pw.prototype.P;pw.prototype.changed=pw.prototype.s;pw.prototype.dispatchEvent=pw.prototype.b;pw.prototype.getRevision=pw.prototype.L;pw.prototype.on=pw.prototype.J;pw.prototype.once=pw.prototype.once;pw.prototype.un=pw.prototype.K;tw.prototype.setRenderReprojectionEdges=tw.prototype.Nb;tw.prototype.setTileGridForProjection=tw.prototype.Ob;tw.prototype.getTileLoadFunction=tw.prototype.ob;tw.prototype.getTileUrlFunction=tw.prototype.qb;tw.prototype.getUrls=tw.prototype.rb;
tw.prototype.setTileLoadFunction=tw.prototype.xb;tw.prototype.setTileUrlFunction=tw.prototype.bb;tw.prototype.setUrl=tw.prototype.jb;tw.prototype.setUrls=tw.prototype.cb;tw.prototype.getTileGrid=tw.prototype.ab;tw.prototype.refresh=tw.prototype.va;tw.prototype.getAttributions=tw.prototype.xa;tw.prototype.getLogo=tw.prototype.wa;tw.prototype.getProjection=tw.prototype.ya;tw.prototype.getState=tw.prototype.V;tw.prototype.setAttributions=tw.prototype.ua;tw.prototype.get=tw.prototype.get;
tw.prototype.getKeys=tw.prototype.O;tw.prototype.getProperties=tw.prototype.N;tw.prototype.set=tw.prototype.set;tw.prototype.setProperties=tw.prototype.H;tw.prototype.unset=tw.prototype.P;tw.prototype.changed=tw.prototype.s;tw.prototype.dispatchEvent=tw.prototype.b;tw.prototype.getRevision=tw.prototype.L;tw.prototype.on=tw.prototype.J;tw.prototype.once=tw.prototype.once;tw.prototype.un=tw.prototype.K;vw.prototype.getAttributions=vw.prototype.xa;vw.prototype.getLogo=vw.prototype.wa;
vw.prototype.getProjection=vw.prototype.ya;vw.prototype.getState=vw.prototype.V;vw.prototype.refresh=vw.prototype.va;vw.prototype.setAttributions=vw.prototype.ua;vw.prototype.get=vw.prototype.get;vw.prototype.getKeys=vw.prototype.O;vw.prototype.getProperties=vw.prototype.N;vw.prototype.set=vw.prototype.set;vw.prototype.setProperties=vw.prototype.H;vw.prototype.unset=vw.prototype.P;vw.prototype.changed=vw.prototype.s;vw.prototype.dispatchEvent=vw.prototype.b;vw.prototype.getRevision=vw.prototype.L;
vw.prototype.on=vw.prototype.J;vw.prototype.once=vw.prototype.once;vw.prototype.un=vw.prototype.K;Aw.prototype.type=Aw.prototype.type;Aw.prototype.target=Aw.prototype.target;Aw.prototype.preventDefault=Aw.prototype.preventDefault;Aw.prototype.stopPropagation=Aw.prototype.stopPropagation;Dw.prototype.setRenderReprojectionEdges=Dw.prototype.Nb;Dw.prototype.setTileGridForProjection=Dw.prototype.Ob;Dw.prototype.getTileLoadFunction=Dw.prototype.ob;Dw.prototype.getTileUrlFunction=Dw.prototype.qb;
Dw.prototype.getUrls=Dw.prototype.rb;Dw.prototype.setTileLoadFunction=Dw.prototype.xb;Dw.prototype.setTileUrlFunction=Dw.prototype.bb;Dw.prototype.setUrl=Dw.prototype.jb;Dw.prototype.setUrls=Dw.prototype.cb;Dw.prototype.getTileGrid=Dw.prototype.ab;Dw.prototype.refresh=Dw.prototype.va;Dw.prototype.getAttributions=Dw.prototype.xa;Dw.prototype.getLogo=Dw.prototype.wa;Dw.prototype.getProjection=Dw.prototype.ya;Dw.prototype.getState=Dw.prototype.V;Dw.prototype.setAttributions=Dw.prototype.ua;
Dw.prototype.get=Dw.prototype.get;Dw.prototype.getKeys=Dw.prototype.O;Dw.prototype.getProperties=Dw.prototype.N;Dw.prototype.set=Dw.prototype.set;Dw.prototype.setProperties=Dw.prototype.H;Dw.prototype.unset=Dw.prototype.P;Dw.prototype.changed=Dw.prototype.s;Dw.prototype.dispatchEvent=Dw.prototype.b;Dw.prototype.getRevision=Dw.prototype.L;Dw.prototype.on=Dw.prototype.J;Dw.prototype.once=Dw.prototype.once;Dw.prototype.un=Dw.prototype.K;Zv.prototype.type=Zv.prototype.type;Zv.prototype.target=Zv.prototype.target;
Zv.prototype.preventDefault=Zv.prototype.preventDefault;Zv.prototype.stopPropagation=Zv.prototype.stopPropagation;Hw.prototype.setRenderReprojectionEdges=Hw.prototype.Nb;Hw.prototype.setTileGridForProjection=Hw.prototype.Ob;Hw.prototype.getTileLoadFunction=Hw.prototype.ob;Hw.prototype.getTileUrlFunction=Hw.prototype.qb;Hw.prototype.getUrls=Hw.prototype.rb;Hw.prototype.setTileLoadFunction=Hw.prototype.xb;Hw.prototype.setTileUrlFunction=Hw.prototype.bb;Hw.prototype.setUrl=Hw.prototype.jb;
Hw.prototype.setUrls=Hw.prototype.cb;Hw.prototype.getTileGrid=Hw.prototype.ab;Hw.prototype.refresh=Hw.prototype.va;Hw.prototype.getAttributions=Hw.prototype.xa;Hw.prototype.getLogo=Hw.prototype.wa;Hw.prototype.getProjection=Hw.prototype.ya;Hw.prototype.getState=Hw.prototype.V;Hw.prototype.setAttributions=Hw.prototype.ua;Hw.prototype.get=Hw.prototype.get;Hw.prototype.getKeys=Hw.prototype.O;Hw.prototype.getProperties=Hw.prototype.N;Hw.prototype.set=Hw.prototype.set;Hw.prototype.setProperties=Hw.prototype.H;
Hw.prototype.unset=Hw.prototype.P;Hw.prototype.changed=Hw.prototype.s;Hw.prototype.dispatchEvent=Hw.prototype.b;Hw.prototype.getRevision=Hw.prototype.L;Hw.prototype.on=Hw.prototype.J;Hw.prototype.once=Hw.prototype.once;Hw.prototype.un=Hw.prototype.K;Jw.prototype.getTileGrid=Jw.prototype.ab;Jw.prototype.refresh=Jw.prototype.va;Jw.prototype.getAttributions=Jw.prototype.xa;Jw.prototype.getLogo=Jw.prototype.wa;Jw.prototype.getProjection=Jw.prototype.ya;Jw.prototype.getState=Jw.prototype.V;
Jw.prototype.setAttributions=Jw.prototype.ua;Jw.prototype.get=Jw.prototype.get;Jw.prototype.getKeys=Jw.prototype.O;Jw.prototype.getProperties=Jw.prototype.N;Jw.prototype.set=Jw.prototype.set;Jw.prototype.setProperties=Jw.prototype.H;Jw.prototype.unset=Jw.prototype.P;Jw.prototype.changed=Jw.prototype.s;Jw.prototype.dispatchEvent=Jw.prototype.b;Jw.prototype.getRevision=Jw.prototype.L;Jw.prototype.on=Jw.prototype.J;Jw.prototype.once=Jw.prototype.once;Jw.prototype.un=Jw.prototype.K;
Lw.prototype.setRenderReprojectionEdges=Lw.prototype.Nb;Lw.prototype.setTileGridForProjection=Lw.prototype.Ob;Lw.prototype.getTileLoadFunction=Lw.prototype.ob;Lw.prototype.getTileUrlFunction=Lw.prototype.qb;Lw.prototype.getUrls=Lw.prototype.rb;Lw.prototype.setTileLoadFunction=Lw.prototype.xb;Lw.prototype.setTileUrlFunction=Lw.prototype.bb;Lw.prototype.setUrl=Lw.prototype.jb;Lw.prototype.setUrls=Lw.prototype.cb;Lw.prototype.getTileGrid=Lw.prototype.ab;Lw.prototype.refresh=Lw.prototype.va;
Lw.prototype.getAttributions=Lw.prototype.xa;Lw.prototype.getLogo=Lw.prototype.wa;Lw.prototype.getProjection=Lw.prototype.ya;Lw.prototype.getState=Lw.prototype.V;Lw.prototype.setAttributions=Lw.prototype.ua;Lw.prototype.get=Lw.prototype.get;Lw.prototype.getKeys=Lw.prototype.O;Lw.prototype.getProperties=Lw.prototype.N;Lw.prototype.set=Lw.prototype.set;Lw.prototype.setProperties=Lw.prototype.H;Lw.prototype.unset=Lw.prototype.P;Lw.prototype.changed=Lw.prototype.s;Lw.prototype.dispatchEvent=Lw.prototype.b;
Lw.prototype.getRevision=Lw.prototype.L;Lw.prototype.on=Lw.prototype.J;Lw.prototype.once=Lw.prototype.once;Lw.prototype.un=Lw.prototype.K;Mw.prototype.getTileGrid=Mw.prototype.ab;Mw.prototype.refresh=Mw.prototype.va;Mw.prototype.getAttributions=Mw.prototype.xa;Mw.prototype.getLogo=Mw.prototype.wa;Mw.prototype.getProjection=Mw.prototype.ya;Mw.prototype.getState=Mw.prototype.V;Mw.prototype.setAttributions=Mw.prototype.ua;Mw.prototype.get=Mw.prototype.get;Mw.prototype.getKeys=Mw.prototype.O;
Mw.prototype.getProperties=Mw.prototype.N;Mw.prototype.set=Mw.prototype.set;Mw.prototype.setProperties=Mw.prototype.H;Mw.prototype.unset=Mw.prototype.P;Mw.prototype.changed=Mw.prototype.s;Mw.prototype.dispatchEvent=Mw.prototype.b;Mw.prototype.getRevision=Mw.prototype.L;Mw.prototype.on=Mw.prototype.J;Mw.prototype.once=Mw.prototype.once;Mw.prototype.un=Mw.prototype.K;Qw.prototype.setRenderReprojectionEdges=Qw.prototype.Nb;Qw.prototype.setTileGridForProjection=Qw.prototype.Ob;
Qw.prototype.getTileLoadFunction=Qw.prototype.ob;Qw.prototype.getTileUrlFunction=Qw.prototype.qb;Qw.prototype.getUrls=Qw.prototype.rb;Qw.prototype.setTileLoadFunction=Qw.prototype.xb;Qw.prototype.setTileUrlFunction=Qw.prototype.bb;Qw.prototype.setUrl=Qw.prototype.jb;Qw.prototype.setUrls=Qw.prototype.cb;Qw.prototype.getTileGrid=Qw.prototype.ab;Qw.prototype.refresh=Qw.prototype.va;Qw.prototype.getAttributions=Qw.prototype.xa;Qw.prototype.getLogo=Qw.prototype.wa;Qw.prototype.getProjection=Qw.prototype.ya;
Qw.prototype.getState=Qw.prototype.V;Qw.prototype.setAttributions=Qw.prototype.ua;Qw.prototype.get=Qw.prototype.get;Qw.prototype.getKeys=Qw.prototype.O;Qw.prototype.getProperties=Qw.prototype.N;Qw.prototype.set=Qw.prototype.set;Qw.prototype.setProperties=Qw.prototype.H;Qw.prototype.unset=Qw.prototype.P;Qw.prototype.changed=Qw.prototype.s;Qw.prototype.dispatchEvent=Qw.prototype.b;Qw.prototype.getRevision=Qw.prototype.L;Qw.prototype.on=Qw.prototype.J;Qw.prototype.once=Qw.prototype.once;
Qw.prototype.un=Qw.prototype.K;Mt.prototype.type=Mt.prototype.type;Mt.prototype.target=Mt.prototype.target;Mt.prototype.preventDefault=Mt.prototype.preventDefault;Mt.prototype.stopPropagation=Mt.prototype.stopPropagation;Xw.prototype.getTileLoadFunction=Xw.prototype.ob;Xw.prototype.getTileUrlFunction=Xw.prototype.qb;Xw.prototype.getUrls=Xw.prototype.rb;Xw.prototype.setTileLoadFunction=Xw.prototype.xb;Xw.prototype.setTileUrlFunction=Xw.prototype.bb;Xw.prototype.setUrl=Xw.prototype.jb;
Xw.prototype.setUrls=Xw.prototype.cb;Xw.prototype.getTileGrid=Xw.prototype.ab;Xw.prototype.refresh=Xw.prototype.va;Xw.prototype.getAttributions=Xw.prototype.xa;Xw.prototype.getLogo=Xw.prototype.wa;Xw.prototype.getProjection=Xw.prototype.ya;Xw.prototype.getState=Xw.prototype.V;Xw.prototype.setAttributions=Xw.prototype.ua;Xw.prototype.get=Xw.prototype.get;Xw.prototype.getKeys=Xw.prototype.O;Xw.prototype.getProperties=Xw.prototype.N;Xw.prototype.set=Xw.prototype.set;Xw.prototype.setProperties=Xw.prototype.H;
Xw.prototype.unset=Xw.prototype.P;Xw.prototype.changed=Xw.prototype.s;Xw.prototype.dispatchEvent=Xw.prototype.b;Xw.prototype.getRevision=Xw.prototype.L;Xw.prototype.on=Xw.prototype.J;Xw.prototype.once=Xw.prototype.once;Xw.prototype.un=Xw.prototype.K;Y.prototype.setRenderReprojectionEdges=Y.prototype.Nb;Y.prototype.setTileGridForProjection=Y.prototype.Ob;Y.prototype.getTileLoadFunction=Y.prototype.ob;Y.prototype.getTileUrlFunction=Y.prototype.qb;Y.prototype.getUrls=Y.prototype.rb;
Y.prototype.setTileLoadFunction=Y.prototype.xb;Y.prototype.setTileUrlFunction=Y.prototype.bb;Y.prototype.setUrl=Y.prototype.jb;Y.prototype.setUrls=Y.prototype.cb;Y.prototype.getTileGrid=Y.prototype.ab;Y.prototype.refresh=Y.prototype.va;Y.prototype.getAttributions=Y.prototype.xa;Y.prototype.getLogo=Y.prototype.wa;Y.prototype.getProjection=Y.prototype.ya;Y.prototype.getState=Y.prototype.V;Y.prototype.setAttributions=Y.prototype.ua;Y.prototype.get=Y.prototype.get;Y.prototype.getKeys=Y.prototype.O;
Y.prototype.getProperties=Y.prototype.N;Y.prototype.set=Y.prototype.set;Y.prototype.setProperties=Y.prototype.H;Y.prototype.unset=Y.prototype.P;Y.prototype.changed=Y.prototype.s;Y.prototype.dispatchEvent=Y.prototype.b;Y.prototype.getRevision=Y.prototype.L;Y.prototype.on=Y.prototype.J;Y.prototype.once=Y.prototype.once;Y.prototype.un=Y.prototype.K;ax.prototype.setRenderReprojectionEdges=ax.prototype.Nb;ax.prototype.setTileGridForProjection=ax.prototype.Ob;ax.prototype.getTileLoadFunction=ax.prototype.ob;
ax.prototype.getTileUrlFunction=ax.prototype.qb;ax.prototype.getUrls=ax.prototype.rb;ax.prototype.setTileLoadFunction=ax.prototype.xb;ax.prototype.setTileUrlFunction=ax.prototype.bb;ax.prototype.setUrl=ax.prototype.jb;ax.prototype.setUrls=ax.prototype.cb;ax.prototype.getTileGrid=ax.prototype.ab;ax.prototype.refresh=ax.prototype.va;ax.prototype.getAttributions=ax.prototype.xa;ax.prototype.getLogo=ax.prototype.wa;ax.prototype.getProjection=ax.prototype.ya;ax.prototype.getState=ax.prototype.V;
ax.prototype.setAttributions=ax.prototype.ua;ax.prototype.get=ax.prototype.get;ax.prototype.getKeys=ax.prototype.O;ax.prototype.getProperties=ax.prototype.N;ax.prototype.set=ax.prototype.set;ax.prototype.setProperties=ax.prototype.H;ax.prototype.unset=ax.prototype.P;ax.prototype.changed=ax.prototype.s;ax.prototype.dispatchEvent=ax.prototype.b;ax.prototype.getRevision=ax.prototype.L;ax.prototype.on=ax.prototype.J;ax.prototype.once=ax.prototype.once;ax.prototype.un=ax.prototype.K;
Ov.prototype.getTileCoord=Ov.prototype.i;Ov.prototype.load=Ov.prototype.load;ct.prototype.changed=ct.prototype.s;ct.prototype.dispatchEvent=ct.prototype.b;ct.prototype.getRevision=ct.prototype.L;ct.prototype.on=ct.prototype.J;ct.prototype.once=ct.prototype.once;ct.prototype.un=ct.prototype.K;At.prototype.changed=At.prototype.s;At.prototype.dispatchEvent=At.prototype.b;At.prototype.getRevision=At.prototype.L;At.prototype.on=At.prototype.J;At.prototype.once=At.prototype.once;At.prototype.un=At.prototype.K;
uv.prototype.changed=uv.prototype.s;uv.prototype.dispatchEvent=uv.prototype.b;uv.prototype.getRevision=uv.prototype.L;uv.prototype.on=uv.prototype.J;uv.prototype.once=uv.prototype.once;uv.prototype.un=uv.prototype.K;Fv.prototype.changed=Fv.prototype.s;Fv.prototype.dispatchEvent=Fv.prototype.b;Fv.prototype.getRevision=Fv.prototype.L;Fv.prototype.on=Fv.prototype.J;Fv.prototype.once=Fv.prototype.once;Fv.prototype.un=Fv.prototype.K;Dt.prototype.changed=Dt.prototype.s;Dt.prototype.dispatchEvent=Dt.prototype.b;
Dt.prototype.getRevision=Dt.prototype.L;Dt.prototype.on=Dt.prototype.J;Dt.prototype.once=Dt.prototype.once;Dt.prototype.un=Dt.prototype.K;lt.prototype.changed=lt.prototype.s;lt.prototype.dispatchEvent=lt.prototype.b;lt.prototype.getRevision=lt.prototype.L;lt.prototype.on=lt.prototype.J;lt.prototype.once=lt.prototype.once;lt.prototype.un=lt.prototype.K;bv.prototype.changed=bv.prototype.s;bv.prototype.dispatchEvent=bv.prototype.b;bv.prototype.getRevision=bv.prototype.L;bv.prototype.on=bv.prototype.J;
bv.prototype.once=bv.prototype.once;bv.prototype.un=bv.prototype.K;cv.prototype.changed=cv.prototype.s;cv.prototype.dispatchEvent=cv.prototype.b;cv.prototype.getRevision=cv.prototype.L;cv.prototype.on=cv.prototype.J;cv.prototype.once=cv.prototype.once;cv.prototype.un=cv.prototype.K;yv.prototype.changed=yv.prototype.s;yv.prototype.dispatchEvent=yv.prototype.b;yv.prototype.getRevision=yv.prototype.L;yv.prototype.on=yv.prototype.J;yv.prototype.once=yv.prototype.once;yv.prototype.un=yv.prototype.K;
tt.prototype.changed=tt.prototype.s;tt.prototype.dispatchEvent=tt.prototype.b;tt.prototype.getRevision=tt.prototype.L;tt.prototype.on=tt.prototype.J;tt.prototype.once=tt.prototype.once;tt.prototype.un=tt.prototype.K;Hv.prototype.changed=Hv.prototype.s;Hv.prototype.dispatchEvent=Hv.prototype.b;Hv.prototype.getRevision=Hv.prototype.L;Hv.prototype.on=Hv.prototype.J;Hv.prototype.once=Hv.prototype.once;Hv.prototype.un=Hv.prototype.K;Lh.prototype.type=Lh.prototype.type;Lh.prototype.target=Lh.prototype.target;
Lh.prototype.preventDefault=Lh.prototype.preventDefault;Lh.prototype.stopPropagation=Lh.prototype.stopPropagation;ge.prototype.type=ge.prototype.type;ge.prototype.target=ge.prototype.target;ge.prototype.preventDefault=ge.prototype.preventDefault;ge.prototype.stopPropagation=ge.prototype.stopPropagation;ch.prototype.get=ch.prototype.get;ch.prototype.getKeys=ch.prototype.O;ch.prototype.getProperties=ch.prototype.N;ch.prototype.set=ch.prototype.set;ch.prototype.setProperties=ch.prototype.H;
ch.prototype.unset=ch.prototype.P;ch.prototype.changed=ch.prototype.s;ch.prototype.dispatchEvent=ch.prototype.b;ch.prototype.getRevision=ch.prototype.L;ch.prototype.on=ch.prototype.J;ch.prototype.once=ch.prototype.once;ch.prototype.un=ch.prototype.K;eh.prototype.getExtent=eh.prototype.D;eh.prototype.getMaxResolution=eh.prototype.gc;eh.prototype.getMinResolution=eh.prototype.hc;eh.prototype.getOpacity=eh.prototype.ic;eh.prototype.getVisible=eh.prototype.Kb;eh.prototype.getZIndex=eh.prototype.za;
eh.prototype.setExtent=eh.prototype.uc;eh.prototype.setMaxResolution=eh.prototype.zc;eh.prototype.setMinResolution=eh.prototype.Ac;eh.prototype.setOpacity=eh.prototype.vc;eh.prototype.setVisible=eh.prototype.wc;eh.prototype.setZIndex=eh.prototype.Wb;eh.prototype.get=eh.prototype.get;eh.prototype.getKeys=eh.prototype.O;eh.prototype.getProperties=eh.prototype.N;eh.prototype.set=eh.prototype.set;eh.prototype.setProperties=eh.prototype.H;eh.prototype.unset=eh.prototype.P;eh.prototype.changed=eh.prototype.s;
eh.prototype.dispatchEvent=eh.prototype.b;eh.prototype.getRevision=eh.prototype.L;eh.prototype.on=eh.prototype.J;eh.prototype.once=eh.prototype.once;eh.prototype.un=eh.prototype.K;qh.prototype.getExtent=qh.prototype.D;qh.prototype.getMaxResolution=qh.prototype.gc;qh.prototype.getMinResolution=qh.prototype.hc;qh.prototype.getOpacity=qh.prototype.ic;qh.prototype.getVisible=qh.prototype.Kb;qh.prototype.getZIndex=qh.prototype.za;qh.prototype.setExtent=qh.prototype.uc;qh.prototype.setMaxResolution=qh.prototype.zc;
qh.prototype.setMinResolution=qh.prototype.Ac;qh.prototype.setOpacity=qh.prototype.vc;qh.prototype.setVisible=qh.prototype.wc;qh.prototype.setZIndex=qh.prototype.Wb;qh.prototype.get=qh.prototype.get;qh.prototype.getKeys=qh.prototype.O;qh.prototype.getProperties=qh.prototype.N;qh.prototype.set=qh.prototype.set;qh.prototype.setProperties=qh.prototype.H;qh.prototype.unset=qh.prototype.P;qh.prototype.changed=qh.prototype.s;qh.prototype.dispatchEvent=qh.prototype.b;qh.prototype.getRevision=qh.prototype.L;
qh.prototype.on=qh.prototype.J;qh.prototype.once=qh.prototype.once;qh.prototype.un=qh.prototype.K;R.prototype.setMap=R.prototype.setMap;R.prototype.setSource=R.prototype.Yc;R.prototype.getExtent=R.prototype.D;R.prototype.getMaxResolution=R.prototype.gc;R.prototype.getMinResolution=R.prototype.hc;R.prototype.getOpacity=R.prototype.ic;R.prototype.getVisible=R.prototype.Kb;R.prototype.getZIndex=R.prototype.za;R.prototype.setExtent=R.prototype.uc;R.prototype.setMaxResolution=R.prototype.zc;
R.prototype.setMinResolution=R.prototype.Ac;R.prototype.setOpacity=R.prototype.vc;R.prototype.setVisible=R.prototype.wc;R.prototype.setZIndex=R.prototype.Wb;R.prototype.get=R.prototype.get;R.prototype.getKeys=R.prototype.O;R.prototype.getProperties=R.prototype.N;R.prototype.set=R.prototype.set;R.prototype.setProperties=R.prototype.H;R.prototype.unset=R.prototype.P;R.prototype.changed=R.prototype.s;R.prototype.dispatchEvent=R.prototype.b;R.prototype.getRevision=R.prototype.L;R.prototype.on=R.prototype.J;
R.prototype.once=R.prototype.once;R.prototype.un=R.prototype.K;T.prototype.getSource=T.prototype.la;T.prototype.getStyle=T.prototype.C;T.prototype.getStyleFunction=T.prototype.G;T.prototype.setStyle=T.prototype.g;T.prototype.setMap=T.prototype.setMap;T.prototype.setSource=T.prototype.Yc;T.prototype.getExtent=T.prototype.D;T.prototype.getMaxResolution=T.prototype.gc;T.prototype.getMinResolution=T.prototype.hc;T.prototype.getOpacity=T.prototype.ic;T.prototype.getVisible=T.prototype.Kb;
T.prototype.getZIndex=T.prototype.za;T.prototype.setExtent=T.prototype.uc;T.prototype.setMaxResolution=T.prototype.zc;T.prototype.setMinResolution=T.prototype.Ac;T.prototype.setOpacity=T.prototype.vc;T.prototype.setVisible=T.prototype.wc;T.prototype.setZIndex=T.prototype.Wb;T.prototype.get=T.prototype.get;T.prototype.getKeys=T.prototype.O;T.prototype.getProperties=T.prototype.N;T.prototype.set=T.prototype.set;T.prototype.setProperties=T.prototype.H;T.prototype.unset=T.prototype.P;
T.prototype.changed=T.prototype.s;T.prototype.dispatchEvent=T.prototype.b;T.prototype.getRevision=T.prototype.L;T.prototype.on=T.prototype.J;T.prototype.once=T.prototype.once;T.prototype.un=T.prototype.K;xv.prototype.setMap=xv.prototype.setMap;xv.prototype.setSource=xv.prototype.Yc;xv.prototype.getExtent=xv.prototype.D;xv.prototype.getMaxResolution=xv.prototype.gc;xv.prototype.getMinResolution=xv.prototype.hc;xv.prototype.getOpacity=xv.prototype.ic;xv.prototype.getVisible=xv.prototype.Kb;
xv.prototype.getZIndex=xv.prototype.za;xv.prototype.setExtent=xv.prototype.uc;xv.prototype.setMaxResolution=xv.prototype.zc;xv.prototype.setMinResolution=xv.prototype.Ac;xv.prototype.setOpacity=xv.prototype.vc;xv.prototype.setVisible=xv.prototype.wc;xv.prototype.setZIndex=xv.prototype.Wb;xv.prototype.get=xv.prototype.get;xv.prototype.getKeys=xv.prototype.O;xv.prototype.getProperties=xv.prototype.N;xv.prototype.set=xv.prototype.set;xv.prototype.setProperties=xv.prototype.H;xv.prototype.unset=xv.prototype.P;
xv.prototype.changed=xv.prototype.s;xv.prototype.dispatchEvent=xv.prototype.b;xv.prototype.getRevision=xv.prototype.L;xv.prototype.on=xv.prototype.J;xv.prototype.once=xv.prototype.once;xv.prototype.un=xv.prototype.K;Gv.prototype.setMap=Gv.prototype.setMap;Gv.prototype.setSource=Gv.prototype.Yc;Gv.prototype.getExtent=Gv.prototype.D;Gv.prototype.getMaxResolution=Gv.prototype.gc;Gv.prototype.getMinResolution=Gv.prototype.hc;Gv.prototype.getOpacity=Gv.prototype.ic;Gv.prototype.getVisible=Gv.prototype.Kb;
Gv.prototype.getZIndex=Gv.prototype.za;Gv.prototype.setExtent=Gv.prototype.uc;Gv.prototype.setMaxResolution=Gv.prototype.zc;Gv.prototype.setMinResolution=Gv.prototype.Ac;Gv.prototype.setOpacity=Gv.prototype.vc;Gv.prototype.setVisible=Gv.prototype.wc;Gv.prototype.setZIndex=Gv.prototype.Wb;Gv.prototype.get=Gv.prototype.get;Gv.prototype.getKeys=Gv.prototype.O;Gv.prototype.getProperties=Gv.prototype.N;Gv.prototype.set=Gv.prototype.set;Gv.prototype.setProperties=Gv.prototype.H;Gv.prototype.unset=Gv.prototype.P;
Gv.prototype.changed=Gv.prototype.s;Gv.prototype.dispatchEvent=Gv.prototype.b;Gv.prototype.getRevision=Gv.prototype.L;Gv.prototype.on=Gv.prototype.J;Gv.prototype.once=Gv.prototype.once;Gv.prototype.un=Gv.prototype.K;U.prototype.getSource=U.prototype.la;U.prototype.getStyle=U.prototype.C;U.prototype.getStyleFunction=U.prototype.G;U.prototype.setStyle=U.prototype.g;U.prototype.setMap=U.prototype.setMap;U.prototype.setSource=U.prototype.Yc;U.prototype.getExtent=U.prototype.D;
U.prototype.getMaxResolution=U.prototype.gc;U.prototype.getMinResolution=U.prototype.hc;U.prototype.getOpacity=U.prototype.ic;U.prototype.getVisible=U.prototype.Kb;U.prototype.getZIndex=U.prototype.za;U.prototype.setExtent=U.prototype.uc;U.prototype.setMaxResolution=U.prototype.zc;U.prototype.setMinResolution=U.prototype.Ac;U.prototype.setOpacity=U.prototype.vc;U.prototype.setVisible=U.prototype.wc;U.prototype.setZIndex=U.prototype.Wb;U.prototype.get=U.prototype.get;U.prototype.getKeys=U.prototype.O;
U.prototype.getProperties=U.prototype.N;U.prototype.set=U.prototype.set;U.prototype.setProperties=U.prototype.H;U.prototype.unset=U.prototype.P;U.prototype.changed=U.prototype.s;U.prototype.dispatchEvent=U.prototype.b;U.prototype.getRevision=U.prototype.L;U.prototype.on=U.prototype.J;U.prototype.once=U.prototype.once;U.prototype.un=U.prototype.K;$f.prototype.get=$f.prototype.get;$f.prototype.getKeys=$f.prototype.O;$f.prototype.getProperties=$f.prototype.N;$f.prototype.set=$f.prototype.set;
$f.prototype.setProperties=$f.prototype.H;$f.prototype.unset=$f.prototype.P;$f.prototype.changed=$f.prototype.s;$f.prototype.dispatchEvent=$f.prototype.b;$f.prototype.getRevision=$f.prototype.L;$f.prototype.on=$f.prototype.J;$f.prototype.once=$f.prototype.once;$f.prototype.un=$f.prototype.K;dg.prototype.getActive=dg.prototype.c;dg.prototype.getMap=dg.prototype.i;dg.prototype.setActive=dg.prototype.Ia;dg.prototype.get=dg.prototype.get;dg.prototype.getKeys=dg.prototype.O;
dg.prototype.getProperties=dg.prototype.N;dg.prototype.set=dg.prototype.set;dg.prototype.setProperties=dg.prototype.H;dg.prototype.unset=dg.prototype.P;dg.prototype.changed=dg.prototype.s;dg.prototype.dispatchEvent=dg.prototype.b;dg.prototype.getRevision=dg.prototype.L;dg.prototype.on=dg.prototype.J;dg.prototype.once=dg.prototype.once;dg.prototype.un=dg.prototype.K;ys.prototype.getActive=ys.prototype.c;ys.prototype.getMap=ys.prototype.i;ys.prototype.setActive=ys.prototype.Ia;ys.prototype.get=ys.prototype.get;
ys.prototype.getKeys=ys.prototype.O;ys.prototype.getProperties=ys.prototype.N;ys.prototype.set=ys.prototype.set;ys.prototype.setProperties=ys.prototype.H;ys.prototype.unset=ys.prototype.P;ys.prototype.changed=ys.prototype.s;ys.prototype.dispatchEvent=ys.prototype.b;ys.prototype.getRevision=ys.prototype.L;ys.prototype.on=ys.prototype.J;ys.prototype.once=ys.prototype.once;ys.prototype.un=ys.prototype.K;Bs.prototype.type=Bs.prototype.type;Bs.prototype.target=Bs.prototype.target;
Bs.prototype.preventDefault=Bs.prototype.preventDefault;Bs.prototype.stopPropagation=Bs.prototype.stopPropagation;og.prototype.getActive=og.prototype.c;og.prototype.getMap=og.prototype.i;og.prototype.setActive=og.prototype.Ia;og.prototype.get=og.prototype.get;og.prototype.getKeys=og.prototype.O;og.prototype.getProperties=og.prototype.N;og.prototype.set=og.prototype.set;og.prototype.setProperties=og.prototype.H;og.prototype.unset=og.prototype.P;og.prototype.changed=og.prototype.s;
og.prototype.dispatchEvent=og.prototype.b;og.prototype.getRevision=og.prototype.L;og.prototype.on=og.prototype.J;og.prototype.once=og.prototype.once;og.prototype.un=og.prototype.K;Cg.prototype.getActive=Cg.prototype.c;Cg.prototype.getMap=Cg.prototype.i;Cg.prototype.setActive=Cg.prototype.Ia;Cg.prototype.get=Cg.prototype.get;Cg.prototype.getKeys=Cg.prototype.O;Cg.prototype.getProperties=Cg.prototype.N;Cg.prototype.set=Cg.prototype.set;Cg.prototype.setProperties=Cg.prototype.H;Cg.prototype.unset=Cg.prototype.P;
Cg.prototype.changed=Cg.prototype.s;Cg.prototype.dispatchEvent=Cg.prototype.b;Cg.prototype.getRevision=Cg.prototype.L;Cg.prototype.on=Cg.prototype.J;Cg.prototype.once=Cg.prototype.once;Cg.prototype.un=Cg.prototype.K;Hg.prototype.type=Hg.prototype.type;Hg.prototype.target=Hg.prototype.target;Hg.prototype.preventDefault=Hg.prototype.preventDefault;Hg.prototype.stopPropagation=Hg.prototype.stopPropagation;rg.prototype.getActive=rg.prototype.c;rg.prototype.getMap=rg.prototype.i;
rg.prototype.setActive=rg.prototype.Ia;rg.prototype.get=rg.prototype.get;rg.prototype.getKeys=rg.prototype.O;rg.prototype.getProperties=rg.prototype.N;rg.prototype.set=rg.prototype.set;rg.prototype.setProperties=rg.prototype.H;rg.prototype.unset=rg.prototype.P;rg.prototype.changed=rg.prototype.s;rg.prototype.dispatchEvent=rg.prototype.b;rg.prototype.getRevision=rg.prototype.L;rg.prototype.on=rg.prototype.J;rg.prototype.once=rg.prototype.once;rg.prototype.un=rg.prototype.K;vg.prototype.getActive=vg.prototype.c;
vg.prototype.getMap=vg.prototype.i;vg.prototype.setActive=vg.prototype.Ia;vg.prototype.get=vg.prototype.get;vg.prototype.getKeys=vg.prototype.O;vg.prototype.getProperties=vg.prototype.N;vg.prototype.set=vg.prototype.set;vg.prototype.setProperties=vg.prototype.H;vg.prototype.unset=vg.prototype.P;vg.prototype.changed=vg.prototype.s;vg.prototype.dispatchEvent=vg.prototype.b;vg.prototype.getRevision=vg.prototype.L;vg.prototype.on=vg.prototype.J;vg.prototype.once=vg.prototype.once;vg.prototype.un=vg.prototype.K;
Ds.prototype.getActive=Ds.prototype.c;Ds.prototype.getMap=Ds.prototype.i;Ds.prototype.setActive=Ds.prototype.Ia;Ds.prototype.get=Ds.prototype.get;Ds.prototype.getKeys=Ds.prototype.O;Ds.prototype.getProperties=Ds.prototype.N;Ds.prototype.set=Ds.prototype.set;Ds.prototype.setProperties=Ds.prototype.H;Ds.prototype.unset=Ds.prototype.P;Ds.prototype.changed=Ds.prototype.s;Ds.prototype.dispatchEvent=Ds.prototype.b;Ds.prototype.getRevision=Ds.prototype.L;Ds.prototype.on=Ds.prototype.J;
Ds.prototype.once=Ds.prototype.once;Ds.prototype.un=Ds.prototype.K;Lg.prototype.getGeometry=Lg.prototype.U;Lg.prototype.getActive=Lg.prototype.c;Lg.prototype.getMap=Lg.prototype.i;Lg.prototype.setActive=Lg.prototype.Ia;Lg.prototype.get=Lg.prototype.get;Lg.prototype.getKeys=Lg.prototype.O;Lg.prototype.getProperties=Lg.prototype.N;Lg.prototype.set=Lg.prototype.set;Lg.prototype.setProperties=Lg.prototype.H;Lg.prototype.unset=Lg.prototype.P;Lg.prototype.changed=Lg.prototype.s;
Lg.prototype.dispatchEvent=Lg.prototype.b;Lg.prototype.getRevision=Lg.prototype.L;Lg.prototype.on=Lg.prototype.J;Lg.prototype.once=Lg.prototype.once;Lg.prototype.un=Lg.prototype.K;Pt.prototype.getActive=Pt.prototype.c;Pt.prototype.getMap=Pt.prototype.i;Pt.prototype.setActive=Pt.prototype.Ia;Pt.prototype.get=Pt.prototype.get;Pt.prototype.getKeys=Pt.prototype.O;Pt.prototype.getProperties=Pt.prototype.N;Pt.prototype.set=Pt.prototype.set;Pt.prototype.setProperties=Pt.prototype.H;Pt.prototype.unset=Pt.prototype.P;
Pt.prototype.changed=Pt.prototype.s;Pt.prototype.dispatchEvent=Pt.prototype.b;Pt.prototype.getRevision=Pt.prototype.L;Pt.prototype.on=Pt.prototype.J;Pt.prototype.once=Pt.prototype.once;Pt.prototype.un=Pt.prototype.K;du.prototype.type=du.prototype.type;du.prototype.target=du.prototype.target;du.prototype.preventDefault=du.prototype.preventDefault;du.prototype.stopPropagation=du.prototype.stopPropagation;fu.prototype.getActive=fu.prototype.c;fu.prototype.getMap=fu.prototype.i;
fu.prototype.setActive=fu.prototype.Ia;fu.prototype.get=fu.prototype.get;fu.prototype.getKeys=fu.prototype.O;fu.prototype.getProperties=fu.prototype.N;fu.prototype.set=fu.prototype.set;fu.prototype.setProperties=fu.prototype.H;fu.prototype.unset=fu.prototype.P;fu.prototype.changed=fu.prototype.s;fu.prototype.dispatchEvent=fu.prototype.b;fu.prototype.getRevision=fu.prototype.L;fu.prototype.on=fu.prototype.J;fu.prototype.once=fu.prototype.once;fu.prototype.un=fu.prototype.K;qu.prototype.type=qu.prototype.type;
qu.prototype.target=qu.prototype.target;qu.prototype.preventDefault=qu.prototype.preventDefault;qu.prototype.stopPropagation=qu.prototype.stopPropagation;Mg.prototype.getActive=Mg.prototype.c;Mg.prototype.getMap=Mg.prototype.i;Mg.prototype.setActive=Mg.prototype.Ia;Mg.prototype.get=Mg.prototype.get;Mg.prototype.getKeys=Mg.prototype.O;Mg.prototype.getProperties=Mg.prototype.N;Mg.prototype.set=Mg.prototype.set;Mg.prototype.setProperties=Mg.prototype.H;Mg.prototype.unset=Mg.prototype.P;
Mg.prototype.changed=Mg.prototype.s;Mg.prototype.dispatchEvent=Mg.prototype.b;Mg.prototype.getRevision=Mg.prototype.L;Mg.prototype.on=Mg.prototype.J;Mg.prototype.once=Mg.prototype.once;Mg.prototype.un=Mg.prototype.K;Og.prototype.getActive=Og.prototype.c;Og.prototype.getMap=Og.prototype.i;Og.prototype.setActive=Og.prototype.Ia;Og.prototype.get=Og.prototype.get;Og.prototype.getKeys=Og.prototype.O;Og.prototype.getProperties=Og.prototype.N;Og.prototype.set=Og.prototype.set;
Og.prototype.setProperties=Og.prototype.H;Og.prototype.unset=Og.prototype.P;Og.prototype.changed=Og.prototype.s;Og.prototype.dispatchEvent=Og.prototype.b;Og.prototype.getRevision=Og.prototype.L;Og.prototype.on=Og.prototype.J;Og.prototype.once=Og.prototype.once;Og.prototype.un=Og.prototype.K;su.prototype.getActive=su.prototype.c;su.prototype.getMap=su.prototype.i;su.prototype.setActive=su.prototype.Ia;su.prototype.get=su.prototype.get;su.prototype.getKeys=su.prototype.O;
su.prototype.getProperties=su.prototype.N;su.prototype.set=su.prototype.set;su.prototype.setProperties=su.prototype.H;su.prototype.unset=su.prototype.P;su.prototype.changed=su.prototype.s;su.prototype.dispatchEvent=su.prototype.b;su.prototype.getRevision=su.prototype.L;su.prototype.on=su.prototype.J;su.prototype.once=su.prototype.once;su.prototype.un=su.prototype.K;Au.prototype.type=Au.prototype.type;Au.prototype.target=Au.prototype.target;Au.prototype.preventDefault=Au.prototype.preventDefault;
Au.prototype.stopPropagation=Au.prototype.stopPropagation;Qg.prototype.getActive=Qg.prototype.c;Qg.prototype.getMap=Qg.prototype.i;Qg.prototype.setActive=Qg.prototype.Ia;Qg.prototype.get=Qg.prototype.get;Qg.prototype.getKeys=Qg.prototype.O;Qg.prototype.getProperties=Qg.prototype.N;Qg.prototype.set=Qg.prototype.set;Qg.prototype.setProperties=Qg.prototype.H;Qg.prototype.unset=Qg.prototype.P;Qg.prototype.changed=Qg.prototype.s;Qg.prototype.dispatchEvent=Qg.prototype.b;Qg.prototype.getRevision=Qg.prototype.L;
Qg.prototype.on=Qg.prototype.J;Qg.prototype.once=Qg.prototype.once;Qg.prototype.un=Qg.prototype.K;Ug.prototype.getActive=Ug.prototype.c;Ug.prototype.getMap=Ug.prototype.i;Ug.prototype.setActive=Ug.prototype.Ia;Ug.prototype.get=Ug.prototype.get;Ug.prototype.getKeys=Ug.prototype.O;Ug.prototype.getProperties=Ug.prototype.N;Ug.prototype.set=Ug.prototype.set;Ug.prototype.setProperties=Ug.prototype.H;Ug.prototype.unset=Ug.prototype.P;Ug.prototype.changed=Ug.prototype.s;Ug.prototype.dispatchEvent=Ug.prototype.b;
Ug.prototype.getRevision=Ug.prototype.L;Ug.prototype.on=Ug.prototype.J;Ug.prototype.once=Ug.prototype.once;Ug.prototype.un=Ug.prototype.K;Yg.prototype.getActive=Yg.prototype.c;Yg.prototype.getMap=Yg.prototype.i;Yg.prototype.setActive=Yg.prototype.Ia;Yg.prototype.get=Yg.prototype.get;Yg.prototype.getKeys=Yg.prototype.O;Yg.prototype.getProperties=Yg.prototype.N;Yg.prototype.set=Yg.prototype.set;Yg.prototype.setProperties=Yg.prototype.H;Yg.prototype.unset=Yg.prototype.P;Yg.prototype.changed=Yg.prototype.s;
Yg.prototype.dispatchEvent=Yg.prototype.b;Yg.prototype.getRevision=Yg.prototype.L;Yg.prototype.on=Yg.prototype.J;Yg.prototype.once=Yg.prototype.once;Yg.prototype.un=Yg.prototype.K;Iu.prototype.getActive=Iu.prototype.c;Iu.prototype.getMap=Iu.prototype.i;Iu.prototype.setActive=Iu.prototype.Ia;Iu.prototype.get=Iu.prototype.get;Iu.prototype.getKeys=Iu.prototype.O;Iu.prototype.getProperties=Iu.prototype.N;Iu.prototype.set=Iu.prototype.set;Iu.prototype.setProperties=Iu.prototype.H;Iu.prototype.unset=Iu.prototype.P;
Iu.prototype.changed=Iu.prototype.s;Iu.prototype.dispatchEvent=Iu.prototype.b;Iu.prototype.getRevision=Iu.prototype.L;Iu.prototype.on=Iu.prototype.J;Iu.prototype.once=Iu.prototype.once;Iu.prototype.un=Iu.prototype.K;Lu.prototype.type=Lu.prototype.type;Lu.prototype.target=Lu.prototype.target;Lu.prototype.preventDefault=Lu.prototype.preventDefault;Lu.prototype.stopPropagation=Lu.prototype.stopPropagation;Nu.prototype.getActive=Nu.prototype.c;Nu.prototype.getMap=Nu.prototype.i;
Nu.prototype.setActive=Nu.prototype.Ia;Nu.prototype.get=Nu.prototype.get;Nu.prototype.getKeys=Nu.prototype.O;Nu.prototype.getProperties=Nu.prototype.N;Nu.prototype.set=Nu.prototype.set;Nu.prototype.setProperties=Nu.prototype.H;Nu.prototype.unset=Nu.prototype.P;Nu.prototype.changed=Nu.prototype.s;Nu.prototype.dispatchEvent=Nu.prototype.b;Nu.prototype.getRevision=Nu.prototype.L;Nu.prototype.on=Nu.prototype.J;Nu.prototype.once=Nu.prototype.once;Nu.prototype.un=Nu.prototype.K;Ru.prototype.getActive=Ru.prototype.c;
Ru.prototype.getMap=Ru.prototype.i;Ru.prototype.setActive=Ru.prototype.Ia;Ru.prototype.get=Ru.prototype.get;Ru.prototype.getKeys=Ru.prototype.O;Ru.prototype.getProperties=Ru.prototype.N;Ru.prototype.set=Ru.prototype.set;Ru.prototype.setProperties=Ru.prototype.H;Ru.prototype.unset=Ru.prototype.P;Ru.prototype.changed=Ru.prototype.s;Ru.prototype.dispatchEvent=Ru.prototype.b;Ru.prototype.getRevision=Ru.prototype.L;Ru.prototype.on=Ru.prototype.J;Ru.prototype.once=Ru.prototype.once;Ru.prototype.un=Ru.prototype.K;
Xu.prototype.type=Xu.prototype.type;Xu.prototype.target=Xu.prototype.target;Xu.prototype.preventDefault=Xu.prototype.preventDefault;Xu.prototype.stopPropagation=Xu.prototype.stopPropagation;cf.prototype.get=cf.prototype.get;cf.prototype.getKeys=cf.prototype.O;cf.prototype.getProperties=cf.prototype.N;cf.prototype.set=cf.prototype.set;cf.prototype.setProperties=cf.prototype.H;cf.prototype.unset=cf.prototype.P;cf.prototype.changed=cf.prototype.s;cf.prototype.dispatchEvent=cf.prototype.b;
cf.prototype.getRevision=cf.prototype.L;cf.prototype.on=cf.prototype.J;cf.prototype.once=cf.prototype.once;cf.prototype.un=cf.prototype.K;ff.prototype.getClosestPoint=ff.prototype.Ab;ff.prototype.intersectsCoordinate=ff.prototype.sb;ff.prototype.getExtent=ff.prototype.D;ff.prototype.rotate=ff.prototype.rotate;ff.prototype.scale=ff.prototype.scale;ff.prototype.simplify=ff.prototype.Pb;ff.prototype.transform=ff.prototype.tb;ff.prototype.get=ff.prototype.get;ff.prototype.getKeys=ff.prototype.O;
ff.prototype.getProperties=ff.prototype.N;ff.prototype.set=ff.prototype.set;ff.prototype.setProperties=ff.prototype.H;ff.prototype.unset=ff.prototype.P;ff.prototype.changed=ff.prototype.s;ff.prototype.dispatchEvent=ff.prototype.b;ff.prototype.getRevision=ff.prototype.L;ff.prototype.on=ff.prototype.J;ff.prototype.once=ff.prototype.once;ff.prototype.un=ff.prototype.K;hs.prototype.getFirstCoordinate=hs.prototype.bc;hs.prototype.getLastCoordinate=hs.prototype.cc;hs.prototype.getLayout=hs.prototype.dc;
hs.prototype.rotate=hs.prototype.rotate;hs.prototype.scale=hs.prototype.scale;hs.prototype.getClosestPoint=hs.prototype.Ab;hs.prototype.intersectsCoordinate=hs.prototype.sb;hs.prototype.getExtent=hs.prototype.D;hs.prototype.simplify=hs.prototype.Pb;hs.prototype.get=hs.prototype.get;hs.prototype.getKeys=hs.prototype.O;hs.prototype.getProperties=hs.prototype.N;hs.prototype.set=hs.prototype.set;hs.prototype.setProperties=hs.prototype.H;hs.prototype.unset=hs.prototype.P;hs.prototype.changed=hs.prototype.s;
hs.prototype.dispatchEvent=hs.prototype.b;hs.prototype.getRevision=hs.prototype.L;hs.prototype.on=hs.prototype.J;hs.prototype.once=hs.prototype.once;hs.prototype.un=hs.prototype.K;pm.prototype.getClosestPoint=pm.prototype.Ab;pm.prototype.intersectsCoordinate=pm.prototype.sb;pm.prototype.getExtent=pm.prototype.D;pm.prototype.rotate=pm.prototype.rotate;pm.prototype.scale=pm.prototype.scale;pm.prototype.simplify=pm.prototype.Pb;pm.prototype.transform=pm.prototype.tb;pm.prototype.get=pm.prototype.get;
pm.prototype.getKeys=pm.prototype.O;pm.prototype.getProperties=pm.prototype.N;pm.prototype.set=pm.prototype.set;pm.prototype.setProperties=pm.prototype.H;pm.prototype.unset=pm.prototype.P;pm.prototype.changed=pm.prototype.s;pm.prototype.dispatchEvent=pm.prototype.b;pm.prototype.getRevision=pm.prototype.L;pm.prototype.on=pm.prototype.J;pm.prototype.once=pm.prototype.once;pm.prototype.un=pm.prototype.K;yf.prototype.getFirstCoordinate=yf.prototype.bc;yf.prototype.getLastCoordinate=yf.prototype.cc;
yf.prototype.getLayout=yf.prototype.dc;yf.prototype.rotate=yf.prototype.rotate;yf.prototype.scale=yf.prototype.scale;yf.prototype.getClosestPoint=yf.prototype.Ab;yf.prototype.intersectsCoordinate=yf.prototype.sb;yf.prototype.getExtent=yf.prototype.D;yf.prototype.simplify=yf.prototype.Pb;yf.prototype.transform=yf.prototype.tb;yf.prototype.get=yf.prototype.get;yf.prototype.getKeys=yf.prototype.O;yf.prototype.getProperties=yf.prototype.N;yf.prototype.set=yf.prototype.set;yf.prototype.setProperties=yf.prototype.H;
yf.prototype.unset=yf.prototype.P;yf.prototype.changed=yf.prototype.s;yf.prototype.dispatchEvent=yf.prototype.b;yf.prototype.getRevision=yf.prototype.L;yf.prototype.on=yf.prototype.J;yf.prototype.once=yf.prototype.once;yf.prototype.un=yf.prototype.K;M.prototype.getFirstCoordinate=M.prototype.bc;M.prototype.getLastCoordinate=M.prototype.cc;M.prototype.getLayout=M.prototype.dc;M.prototype.rotate=M.prototype.rotate;M.prototype.scale=M.prototype.scale;M.prototype.getClosestPoint=M.prototype.Ab;
M.prototype.intersectsCoordinate=M.prototype.sb;M.prototype.getExtent=M.prototype.D;M.prototype.simplify=M.prototype.Pb;M.prototype.transform=M.prototype.tb;M.prototype.get=M.prototype.get;M.prototype.getKeys=M.prototype.O;M.prototype.getProperties=M.prototype.N;M.prototype.set=M.prototype.set;M.prototype.setProperties=M.prototype.H;M.prototype.unset=M.prototype.P;M.prototype.changed=M.prototype.s;M.prototype.dispatchEvent=M.prototype.b;M.prototype.getRevision=M.prototype.L;M.prototype.on=M.prototype.J;
M.prototype.once=M.prototype.once;M.prototype.un=M.prototype.K;N.prototype.getFirstCoordinate=N.prototype.bc;N.prototype.getLastCoordinate=N.prototype.cc;N.prototype.getLayout=N.prototype.dc;N.prototype.rotate=N.prototype.rotate;N.prototype.scale=N.prototype.scale;N.prototype.getClosestPoint=N.prototype.Ab;N.prototype.intersectsCoordinate=N.prototype.sb;N.prototype.getExtent=N.prototype.D;N.prototype.simplify=N.prototype.Pb;N.prototype.transform=N.prototype.tb;N.prototype.get=N.prototype.get;
N.prototype.getKeys=N.prototype.O;N.prototype.getProperties=N.prototype.N;N.prototype.set=N.prototype.set;N.prototype.setProperties=N.prototype.H;N.prototype.unset=N.prototype.P;N.prototype.changed=N.prototype.s;N.prototype.dispatchEvent=N.prototype.b;N.prototype.getRevision=N.prototype.L;N.prototype.on=N.prototype.J;N.prototype.once=N.prototype.once;N.prototype.un=N.prototype.K;O.prototype.getFirstCoordinate=O.prototype.bc;O.prototype.getLastCoordinate=O.prototype.cc;O.prototype.getLayout=O.prototype.dc;
O.prototype.rotate=O.prototype.rotate;O.prototype.scale=O.prototype.scale;O.prototype.getClosestPoint=O.prototype.Ab;O.prototype.intersectsCoordinate=O.prototype.sb;O.prototype.getExtent=O.prototype.D;O.prototype.simplify=O.prototype.Pb;O.prototype.transform=O.prototype.tb;O.prototype.get=O.prototype.get;O.prototype.getKeys=O.prototype.O;O.prototype.getProperties=O.prototype.N;O.prototype.set=O.prototype.set;O.prototype.setProperties=O.prototype.H;O.prototype.unset=O.prototype.P;
O.prototype.changed=O.prototype.s;O.prototype.dispatchEvent=O.prototype.b;O.prototype.getRevision=O.prototype.L;O.prototype.on=O.prototype.J;O.prototype.once=O.prototype.once;O.prototype.un=O.prototype.K;P.prototype.getFirstCoordinate=P.prototype.bc;P.prototype.getLastCoordinate=P.prototype.cc;P.prototype.getLayout=P.prototype.dc;P.prototype.rotate=P.prototype.rotate;P.prototype.scale=P.prototype.scale;P.prototype.getClosestPoint=P.prototype.Ab;P.prototype.intersectsCoordinate=P.prototype.sb;
P.prototype.getExtent=P.prototype.D;P.prototype.simplify=P.prototype.Pb;P.prototype.transform=P.prototype.tb;P.prototype.get=P.prototype.get;P.prototype.getKeys=P.prototype.O;P.prototype.getProperties=P.prototype.N;P.prototype.set=P.prototype.set;P.prototype.setProperties=P.prototype.H;P.prototype.unset=P.prototype.P;P.prototype.changed=P.prototype.s;P.prototype.dispatchEvent=P.prototype.b;P.prototype.getRevision=P.prototype.L;P.prototype.on=P.prototype.J;P.prototype.once=P.prototype.once;
P.prototype.un=P.prototype.K;E.prototype.getFirstCoordinate=E.prototype.bc;E.prototype.getLastCoordinate=E.prototype.cc;E.prototype.getLayout=E.prototype.dc;E.prototype.rotate=E.prototype.rotate;E.prototype.scale=E.prototype.scale;E.prototype.getClosestPoint=E.prototype.Ab;E.prototype.intersectsCoordinate=E.prototype.sb;E.prototype.getExtent=E.prototype.D;E.prototype.simplify=E.prototype.Pb;E.prototype.transform=E.prototype.tb;E.prototype.get=E.prototype.get;E.prototype.getKeys=E.prototype.O;
E.prototype.getProperties=E.prototype.N;E.prototype.set=E.prototype.set;E.prototype.setProperties=E.prototype.H;E.prototype.unset=E.prototype.P;E.prototype.changed=E.prototype.s;E.prototype.dispatchEvent=E.prototype.b;E.prototype.getRevision=E.prototype.L;E.prototype.on=E.prototype.J;E.prototype.once=E.prototype.once;E.prototype.un=E.prototype.K;F.prototype.getFirstCoordinate=F.prototype.bc;F.prototype.getLastCoordinate=F.prototype.cc;F.prototype.getLayout=F.prototype.dc;F.prototype.rotate=F.prototype.rotate;
F.prototype.scale=F.prototype.scale;F.prototype.getClosestPoint=F.prototype.Ab;F.prototype.intersectsCoordinate=F.prototype.sb;F.prototype.getExtent=F.prototype.D;F.prototype.simplify=F.prototype.Pb;F.prototype.transform=F.prototype.tb;F.prototype.get=F.prototype.get;F.prototype.getKeys=F.prototype.O;F.prototype.getProperties=F.prototype.N;F.prototype.set=F.prototype.set;F.prototype.setProperties=F.prototype.H;F.prototype.unset=F.prototype.P;F.prototype.changed=F.prototype.s;
F.prototype.dispatchEvent=F.prototype.b;F.prototype.getRevision=F.prototype.L;F.prototype.on=F.prototype.J;F.prototype.once=F.prototype.once;F.prototype.un=F.prototype.K;Om.prototype.readFeatures=Om.prototype.Qa;Xm.prototype.readFeatures=Xm.prototype.Qa;Om.prototype.readFeatures=Om.prototype.Qa;ad.prototype.get=ad.prototype.get;ad.prototype.getKeys=ad.prototype.O;ad.prototype.getProperties=ad.prototype.N;ad.prototype.set=ad.prototype.set;ad.prototype.setProperties=ad.prototype.H;
ad.prototype.unset=ad.prototype.P;ad.prototype.changed=ad.prototype.s;ad.prototype.dispatchEvent=ad.prototype.b;ad.prototype.getRevision=ad.prototype.L;ad.prototype.on=ad.prototype.J;ad.prototype.once=ad.prototype.once;ad.prototype.un=ad.prototype.K;bd.prototype.getMap=bd.prototype.g;bd.prototype.setMap=bd.prototype.setMap;bd.prototype.setTarget=bd.prototype.i;bd.prototype.get=bd.prototype.get;bd.prototype.getKeys=bd.prototype.O;bd.prototype.getProperties=bd.prototype.N;bd.prototype.set=bd.prototype.set;
bd.prototype.setProperties=bd.prototype.H;bd.prototype.unset=bd.prototype.P;bd.prototype.changed=bd.prototype.s;bd.prototype.dispatchEvent=bd.prototype.b;bd.prototype.getRevision=bd.prototype.L;bd.prototype.on=bd.prototype.J;bd.prototype.once=bd.prototype.once;bd.prototype.un=bd.prototype.K;od.prototype.getMap=od.prototype.g;od.prototype.setMap=od.prototype.setMap;od.prototype.setTarget=od.prototype.i;od.prototype.get=od.prototype.get;od.prototype.getKeys=od.prototype.O;
od.prototype.getProperties=od.prototype.N;od.prototype.set=od.prototype.set;od.prototype.setProperties=od.prototype.H;od.prototype.unset=od.prototype.P;od.prototype.changed=od.prototype.s;od.prototype.dispatchEvent=od.prototype.b;od.prototype.getRevision=od.prototype.L;od.prototype.on=od.prototype.J;od.prototype.once=od.prototype.once;od.prototype.un=od.prototype.K;td.prototype.getMap=td.prototype.g;td.prototype.setMap=td.prototype.setMap;td.prototype.setTarget=td.prototype.i;td.prototype.get=td.prototype.get;
td.prototype.getKeys=td.prototype.O;td.prototype.getProperties=td.prototype.N;td.prototype.set=td.prototype.set;td.prototype.setProperties=td.prototype.H;td.prototype.unset=td.prototype.P;td.prototype.changed=td.prototype.s;td.prototype.dispatchEvent=td.prototype.b;td.prototype.getRevision=td.prototype.L;td.prototype.on=td.prototype.J;td.prototype.once=td.prototype.once;td.prototype.un=td.prototype.K;yk.prototype.getMap=yk.prototype.g;yk.prototype.setMap=yk.prototype.setMap;
yk.prototype.setTarget=yk.prototype.i;yk.prototype.get=yk.prototype.get;yk.prototype.getKeys=yk.prototype.O;yk.prototype.getProperties=yk.prototype.N;yk.prototype.set=yk.prototype.set;yk.prototype.setProperties=yk.prototype.H;yk.prototype.unset=yk.prototype.P;yk.prototype.changed=yk.prototype.s;yk.prototype.dispatchEvent=yk.prototype.b;yk.prototype.getRevision=yk.prototype.L;yk.prototype.on=yk.prototype.J;yk.prototype.once=yk.prototype.once;yk.prototype.un=yk.prototype.K;id.prototype.getMap=id.prototype.g;
id.prototype.setMap=id.prototype.setMap;id.prototype.setTarget=id.prototype.i;id.prototype.get=id.prototype.get;id.prototype.getKeys=id.prototype.O;id.prototype.getProperties=id.prototype.N;id.prototype.set=id.prototype.set;id.prototype.setProperties=id.prototype.H;id.prototype.unset=id.prototype.P;id.prototype.changed=id.prototype.s;id.prototype.dispatchEvent=id.prototype.b;id.prototype.getRevision=id.prototype.L;id.prototype.on=id.prototype.J;id.prototype.once=id.prototype.once;
id.prototype.un=id.prototype.K;Dk.prototype.getMap=Dk.prototype.g;Dk.prototype.setMap=Dk.prototype.setMap;Dk.prototype.setTarget=Dk.prototype.i;Dk.prototype.get=Dk.prototype.get;Dk.prototype.getKeys=Dk.prototype.O;Dk.prototype.getProperties=Dk.prototype.N;Dk.prototype.set=Dk.prototype.set;Dk.prototype.setProperties=Dk.prototype.H;Dk.prototype.unset=Dk.prototype.P;Dk.prototype.changed=Dk.prototype.s;Dk.prototype.dispatchEvent=Dk.prototype.b;Dk.prototype.getRevision=Dk.prototype.L;Dk.prototype.on=Dk.prototype.J;
Dk.prototype.once=Dk.prototype.once;Dk.prototype.un=Dk.prototype.K;kd.prototype.getMap=kd.prototype.g;kd.prototype.setMap=kd.prototype.setMap;kd.prototype.setTarget=kd.prototype.i;kd.prototype.get=kd.prototype.get;kd.prototype.getKeys=kd.prototype.O;kd.prototype.getProperties=kd.prototype.N;kd.prototype.set=kd.prototype.set;kd.prototype.setProperties=kd.prototype.H;kd.prototype.unset=kd.prototype.P;kd.prototype.changed=kd.prototype.s;kd.prototype.dispatchEvent=kd.prototype.b;
kd.prototype.getRevision=kd.prototype.L;kd.prototype.on=kd.prototype.J;kd.prototype.once=kd.prototype.once;kd.prototype.un=kd.prototype.K;Ik.prototype.getMap=Ik.prototype.g;Ik.prototype.setMap=Ik.prototype.setMap;Ik.prototype.setTarget=Ik.prototype.i;Ik.prototype.get=Ik.prototype.get;Ik.prototype.getKeys=Ik.prototype.O;Ik.prototype.getProperties=Ik.prototype.N;Ik.prototype.set=Ik.prototype.set;Ik.prototype.setProperties=Ik.prototype.H;Ik.prototype.unset=Ik.prototype.P;Ik.prototype.changed=Ik.prototype.s;
Ik.prototype.dispatchEvent=Ik.prototype.b;Ik.prototype.getRevision=Ik.prototype.L;Ik.prototype.on=Ik.prototype.J;Ik.prototype.once=Ik.prototype.once;Ik.prototype.un=Ik.prototype.K;Nk.prototype.getMap=Nk.prototype.g;Nk.prototype.setMap=Nk.prototype.setMap;Nk.prototype.setTarget=Nk.prototype.i;Nk.prototype.get=Nk.prototype.get;Nk.prototype.getKeys=Nk.prototype.O;Nk.prototype.getProperties=Nk.prototype.N;Nk.prototype.set=Nk.prototype.set;Nk.prototype.setProperties=Nk.prototype.H;Nk.prototype.unset=Nk.prototype.P;
Nk.prototype.changed=Nk.prototype.s;Nk.prototype.dispatchEvent=Nk.prototype.b;Nk.prototype.getRevision=Nk.prototype.L;Nk.prototype.on=Nk.prototype.J;Nk.prototype.once=Nk.prototype.once;Nk.prototype.un=Nk.prototype.K;
  return OPENLAYERS.ol;
}));


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var parseCode = __webpack_require__(49);
var extend = __webpack_require__(23);
var projections = __webpack_require__(50);
var deriveConstants = __webpack_require__(46);
var Datum = __webpack_require__(38);
var datum = __webpack_require__(43);


function Projection(srsCode,callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function(error){
    if(error){
      throw error;
    }
  };
  var json = parseCode(srsCode);
  if(typeof json !== 'object'){
    callback(srsCode);
    return;
  }
  var ourProj = Projection.projections.get(json.projName);
  if(!ourProj){
    callback(srsCode);
    return;
  }
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Datum[json.datumCode];
    if (datumDef) {
      json.datum_params = datumDef.towgs84 ? datumDef.towgs84.split(',') : null;
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  json.k0 = json.k0 || 1.0;
  json.axis = json.axis || 'enu';

  var sphere = deriveConstants.sphere(json.a, json.b, json.rf, json.ellps, json.sphere);
  var ecc = deriveConstants.eccentricity(sphere.a, sphere.b, sphere.rf, json.R_A);
  var datumObj = json.datum || datum(json.datumCode, json.datum_params, sphere.a, sphere.b, ecc.es, ecc.ep2);

  extend(this, json); // transfer everything over from the projection because we don't know what we'll need
  extend(this, ourProj); // transfer all the methods from the projection

  // copy the 4 things over we calulated in deriveConstants.sphere
  this.a = sphere.a;
  this.b = sphere.b;
  this.rf = sphere.rf;
  this.sphere = sphere.sphere;

  // copy the 3 things we calculated in deriveConstants.eccentricity
  this.es = ecc.es;
  this.e = ecc.e;
  this.ep2 = ecc.ep2;

  // add in the datum object
  this.datum = datumObj;

  // init the projection
  this.init();

  // legecy callback from back in the day when it went to spatialreference.org
  callback(null, this);

}
Projection.projections = projections;
Projection.projections.start();
module.exports = Projection;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
  }
  else {
    return (2 * sinphi);
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {




/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z

/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
exports.forward = function(ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
exports.inverse = function(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

exports.toPoint = function(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return (deg * (Math.PI / 180.0));
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return (180.0 * (rad / Math.PI));
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    }
    else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    }
    else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    }
    else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

  var UTMEasting = (k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0);

  var UTMNorthing = (k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0)));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  }
  else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if ((84 >= lat) && (lat >= 72)) {
    LetterDesignator = 'X';
  }
  else if ((72 > lat) && (lat >= 64)) {
    LetterDesignator = 'W';
  }
  else if ((64 > lat) && (lat >= 56)) {
    LetterDesignator = 'V';
  }
  else if ((56 > lat) && (lat >= 48)) {
    LetterDesignator = 'U';
  }
  else if ((48 > lat) && (lat >= 40)) {
    LetterDesignator = 'T';
  }
  else if ((40 > lat) && (lat >= 32)) {
    LetterDesignator = 'S';
  }
  else if ((32 > lat) && (lat >= 24)) {
    LetterDesignator = 'R';
  }
  else if ((24 > lat) && (lat >= 16)) {
    LetterDesignator = 'Q';
  }
  else if ((16 > lat) && (lat >= 8)) {
    LetterDesignator = 'P';
  }
  else if ((8 > lat) && (lat >= 0)) {
    LetterDesignator = 'N';
  }
  else if ((0 > lat) && (lat >= -8)) {
    LetterDesignator = 'M';
  }
  else if ((-8 > lat) && (lat >= -16)) {
    LetterDesignator = 'L';
  }
  else if ((-16 > lat) && (lat >= -24)) {
    LetterDesignator = 'K';
  }
  else if ((-24 > lat) && (lat >= -32)) {
    LetterDesignator = 'J';
  }
  else if ((-32 > lat) && (lat >= -40)) {
    LetterDesignator = 'H';
  }
  else if ((-40 > lat) && (lat >= -48)) {
    LetterDesignator = 'G';
  }
  else if ((-48 > lat) && (lat >= -56)) {
    LetterDesignator = 'F';
  }
  else if ((-56 > lat) && (lat >= -64)) {
    LetterDesignator = 'E';
  }
  else if ((-64 > lat) && (lat >= -72)) {
    LetterDesignator = 'D';
  }
  else if ((-72 > lat) && (lat >= -80)) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
    snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || (colOrigin < I && colInt > I) || ((colInt > I || colOrigin < I) && rollover)) {
    colInt++;
  }

  if (colInt === O || (colOrigin < O && colInt > O) || ((colInt > O || colOrigin < O) && rollover)) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  }
  else {
    rollover = false;
  }

  if (((rowInt === I) || ((rowOrigin < I) && (rowInt > I))) || (((rowInt > I) || (rowOrigin < I)) && rollover)) {
    rowInt++;
  }

  if (((rowInt === O) || ((rowOrigin < O) && (rowInt > O))) || (((rowInt > O) || (rowOrigin < O)) && rollover)) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw ("MGRSPoint coverting from nothing");
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!(/[A-Z]/).test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw ("MGRSPoint bad conversion from: " + mgrsString);
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw ("MGRSPoint bad conversion from: " + mgrsString);
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw ("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString);
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString);
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw ("Bad character: " + e);
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw ("MGRSPoint given invalid Northing " + n);
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) { // making sure that this loop ends
        throw ("Bad character: " + n);
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
  case 'C':
    northing = 1100000.0;
    break;
  case 'D':
    northing = 2000000.0;
    break;
  case 'E':
    northing = 2800000.0;
    break;
  case 'F':
    northing = 3700000.0;
    break;
  case 'G':
    northing = 4600000.0;
    break;
  case 'H':
    northing = 5500000.0;
    break;
  case 'J':
    northing = 6400000.0;
    break;
  case 'K':
    northing = 7300000.0;
    break;
  case 'L':
    northing = 8200000.0;
    break;
  case 'M':
    northing = 9100000.0;
    break;
  case 'N':
    northing = 0.0;
    break;
  case 'P':
    northing = 800000.0;
    break;
  case 'Q':
    northing = 1700000.0;
    break;
  case 'R':
    northing = 2600000.0;
    break;
  case 'S':
    northing = 3500000.0;
    break;
  case 'T':
    northing = 4400000.0;
    break;
  case 'U':
    northing = 5300000.0;
    break;
  case 'V':
    northing = 6200000.0;
    break;
  case 'W':
    northing = 7000000.0;
    break;
  case 'X':
    northing = 7900000.0;
    break;
  default:
    northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  }
  else {
    throw ("Invalid zone letter: " + zoneLetter);
  }

}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

module.exports = function(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pj_mlfn = __webpack_require__(16);
var EPSLN = 1.0e-10;
var MAX_ITER = 20;
module.exports = function(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER; i; --i) { /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < EPSLN) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (array){
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length>2) {
    out.z = array[2];
  }
  if (array.length>3) {
    out.m = array[3];
  }
  return out;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var globals = __webpack_require__(47);
var parseProj = __webpack_require__(24);
var wkt = __webpack_require__(27);

function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = parseProj(arguments[1]);
      }
      else {
        defs[name] = wkt(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  }
  else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function(v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        }
        else {
          defs(v);
        }
      });
    }
    else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    }
    else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    }
    else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    }
    else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    }
    else {
      console.log(name);
    }
    return;
  }


}
globals(defs);
module.exports = defs;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var PrimeMeridian = __webpack_require__(40);
var units = __webpack_require__(41);

module.exports = function(defData) {
  var self = {};
  var paramObj = defData.split('+').map(function(v) {
    return v.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(p, a) {
    var split = a.split('=');
    split.push(true);
    p[split[0].toLowerCase()] = split[1];
    return p;
  }, {});
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function(v) {
      self.lat0 = v * D2R;
    },
    lat_1: function(v) {
      self.lat1 = v * D2R;
    },
    lat_2: function(v) {
      self.lat2 = v * D2R;
    },
    lat_ts: function(v) {
      self.lat_ts = v * D2R;
    },
    lon_0: function(v) {
      self.long0 = v * D2R;
    },
    lon_1: function(v) {
      self.long1 = v * D2R;
    },
    lon_2: function(v) {
      self.long2 = v * D2R;
    },
    alpha: function(v) {
      self.alpha = parseFloat(v) * D2R;
    },
    lonc: function(v) {
      self.longc = v * D2R;
    },
    x_0: function(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function(v) {
      self.k0 = parseFloat(v);
    },
    k: function(v) {
      self.k0 = parseFloat(v);
    },
    a: function(v) {
      self.a = parseFloat(v);
    },
    b: function(v) {
      self.b = parseFloat(v);
    },
    r_a: function() {
      self.R_A = true;
    },
    zone: function(v) {
      self.zone = parseInt(v, 10);
    },
    south: function() {
      self.utmSouth = true;
    },
    towgs84: function(v) {
      self.datum_params = v.split(",").map(function(a) {
        return parseFloat(a);
      });
    },
    to_meter: function(v) {
      self.to_meter = parseFloat(v);
    },
    units: function(v) {
      self.units = v;
      if (units[v]) {
        self.to_meter = units[v].to_meter;
      }
    },
    from_greenwich: function(v) {
      self.from_greenwich = v * D2R;
    },
    pm: function(v) {
      self.from_greenwich = (PrimeMeridian[v] ? PrimeMeridian[v] : parseFloat(v)) * D2R;
    },
    nadgrids: function(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      }
      else {
        self.nadgrids = v;
      }
    },
    axis: function(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      }
      else {
        self[paramOutname] = paramVal;
      }
    }
    else {
      self[paramName] = paramVal;
    }
  }
  if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Heavily based on this tmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js

var pj_enfn = __webpack_require__(19);
var pj_mlfn = __webpack_require__(16);
var pj_inv_mlfn = __webpack_require__(20);
var adjust_lon = __webpack_require__(0);
var HALF_PI = Math.PI / 2;
var EPSLN = 1.0e-10;
var sign = __webpack_require__(4);

exports.init = function() {
  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  if (this.es) {
    this.en = pj_enfn(this.es);
    this.ml0 = pj_mlfn(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
  }
};

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (!this.es) {
    var b = cos_phi * Math.sin(delta_lon);

    if ((Math.abs(Math.abs(b) - 1)) < EPSLN) {
      return (93);
    }
    else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
      y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
      b = Math.abs(y);

      if (b >= 1) {
        if ((b - 1) > EPSLN) {
          return (93);
        }
        else {
          y = 0;
        }
      }
      else {
        y = Math.acos(y);
      }

      if (lat < 0) {
        y = -y;
      }

      y = this.a * this.k0 * (y - this.lat0) + this.y0;
    }
  }
  else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var cs = Math.pow(c, 2);
    var tq = Math.abs(cos_phi) > EPSLN ? Math.tan(lat) : 0;
    var t = Math.pow(tq, 2);
    var ts = Math.pow(t, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    al = al / Math.sqrt(con);
    var ml = pj_mlfn(lat, sin_phi, cos_phi, this.en);

    x = this.a * (this.k0 * al * (1 +
      als / 6 * (1 - t + c +
      als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c +
      als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) +
      this.x0;

    y = this.a * (this.k0 * (ml - this.ml0 +
      sin_phi * delta_lon * al / 2 * (1 +
      als / 12 * (5 - t + 9 * c + 4 * cs +
      als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c +
      als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) +
      this.y0;
  }

  p.x = x;
  p.y = y;

  return p;
};

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
exports.inverse = function(p) {
  var con, phi;
  var lat, lon;
  var x = (p.x - this.x0) * (1 / this.a);
  var y = (p.y - this.y0) * (1 / this.a);

  if (!this.es) {
    var f = Math.exp(x / this.k0);
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + y / this.k0;
    var h = Math.cos(temp);
    con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
    lat = Math.asin(con);

    if (y < 0) {
      lat = -lat;
    }

    if ((g === 0) && (h === 0)) {
      lon = 0;
    }
    else {
      lon = adjust_lon(Math.atan2(g, h) + this.long0);
    }
  }
  else { // ellipsoidal form
    con = this.ml0 + y / this.k0;
    phi = pj_inv_mlfn(con, this.es, this.en);

    if (Math.abs(phi) < HALF_PI) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.abs(cos_phi) > EPSLN ? Math.tan(phi) : 0;
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var d = x * Math.sqrt(con) / this.k0;
      var ds = Math.pow(d, 2);
      con = con * tan_phi;

      lat = phi - (con * ds / (1 - this.es)) * 0.5 * (1 -
        ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs -
        ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c -
        ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));

      lon = adjust_lon(this.long0 + (d * (1 -
        ds / 6 * (1 + 2 * t + c -
        ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c -
        ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi));
    }
    else {
      lat = HALF_PI * sign(y);
      lon = 0;
    }
  }

  p.x = lon;
  p.y = lat;

  return p;
};

exports.names = ["Transverse_Mercator", "Transverse Mercator", "tmerc"];


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var R2D = 57.29577951308232088;
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var datum_transform = __webpack_require__(45);
var adjust_axis = __webpack_require__(34);
var proj = __webpack_require__(13);
var toPoint = __webpack_require__(21);
function checkNotWGS(source, dest) {
  return ((source.datum.datum_type === PJD_3PARAM || source.datum.datum_type === PJD_7PARAM) && dest.datumCode !== 'WGS84') || ((dest.datum.datum_type === PJD_3PARAM || dest.datum.datum_type === PJD_7PARAM) && source.datumCode !== 'WGS84');
}
module.exports = function transform(source, dest, point) {
  var wgs84;
  if (Array.isArray(point)) {
    point = toPoint(point);
  }

  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && checkNotWGS(source, dest)) {
    wgs84 = new proj('WGS84');
    point = transform(source, wgs84, point);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (source.axis !== 'enu') {
    point = adjust_axis(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === 'longlat') {
    point = {
      x: point.x * D2R,
      y: point.y * D2R
    };
  }
  else {
    if (source.to_meter) {
      point = {
        x: point.x * source.to_meter,
        y: point.y * source.to_meter
      };
    }
    point = source.inverse(point); // Convert Cartesian to longlat
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = datum_transform(source.datum, dest.datum, point);

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point = {
      x: point.x - dest.grom_greenwich,
      y: point.y
    };
  }

  if (dest.projName === 'longlat') {
    // convert radians to decimal degrees
    point = {
      x: point.x * R2D,
      y: point.y * R2D
    };
  } else { // else project
    point = dest.forward(point);
    if (dest.to_meter) {
      point = {
        x: point.x / dest.to_meter,
        y: point.y / dest.to_meter
      };
    }
  }

  // DGR, 2010/11/12
  if (dest.axis !== 'enu') {
    return adjust_axis(dest, true, point);
  }

  return point;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var extend = __webpack_require__(23);

function mapit(obj, key, v) {
  obj[key] = v.map(function(aa) {
    var o = {};
    sExpr(aa, o);
    return o;
  }).reduce(function(a, b) {
    return extend(a, b);
  }, {});
}

function sExpr(v, obj) {
  var key;
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  }
  else {
    key = v.shift();
    if (key === 'PARAMETER') {
      key = v.shift();
    }
    if (v.length === 1) {
      if (Array.isArray(v[0])) {
        obj[key] = {};
        sExpr(v[0], obj[key]);
      }
      else {
        obj[key] = v[0];
      }
    }
    else if (!v.length) {
      obj[key] = true;
    }
    else if (key === 'TOWGS84') {
      obj[key] = v;
    }
    else {
      obj[key] = {};
      if (['UNIT', 'PRIMEM', 'VERT_DATUM'].indexOf(key) > -1) {
        obj[key] = {
          name: v[0].toLowerCase(),
          convert: v[1]
        };
        if (v.length === 3) {
          obj[key].auth = v[2];
        }
      }
      else if (key === 'SPHEROID') {
        obj[key] = {
          name: v[0],
          a: v[1],
          rf: v[2]
        };
        if (v.length === 4) {
          obj[key].auth = v[3];
        }
      }
      else if (['GEOGCS', 'GEOCCS', 'DATUM', 'VERT_CS', 'COMPD_CS', 'LOCAL_CS', 'FITTED_CS', 'LOCAL_DATUM'].indexOf(key) > -1) {
        v[0] = ['name', v[0]];
        mapit(obj, key, v);
      }
      else if (v.every(function(aa) {
        return Array.isArray(aa);
      })) {
        mapit(obj, key, v);
      }
      else {
        sExpr(v, obj[key]);
      }
    }
  }
}

function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && (inName in obj)) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  }
  else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  }
  else {
    if (typeof wkt.PROJECTION === "object") {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    }
    else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = parseFloat(wkt.UNIT.convert, 10)*wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = parseFloat(wkt.UNIT.convert, 10);
      }
    }
  }

  if (wkt.GEOGCS) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (wkt.GEOGCS.DATUM) {
      wkt.datumCode = wkt.GEOGCS.DATUM.name.toLowerCase();
    }
    else {
      wkt.datumCode = wkt.GEOGCS.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === "wgs_1984") {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, - 6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, - 8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = "rnb72";
    }
    if (wkt.GEOGCS.DATUM && wkt.GEOGCS.DATUM.SPHEROID) {
      wkt.ellps = wkt.GEOGCS.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === "international") {
        wkt.ellps = 'intl';
      }

      wkt.a = wkt.GEOGCS.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(wkt.GEOGCS.DATUM.SPHEROID.rf, 10);
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = "osgb36";
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return parseFloat(input, 10) * ratio;
  }
  var renamer = function(a) {
    return rename(wkt, a);
  };
  var list = [
    ['standard_parallel_1', 'Standard_Parallel_1'],
    ['standard_parallel_2', 'Standard_Parallel_2'],
    ['false_easting', 'False_Easting'],
    ['false_northing', 'False_Northing'],
    ['central_meridian', 'Central_Meridian'],
    ['latitude_of_origin', 'Latitude_Of_Origin'],
    ['latitude_of_origin', 'Central_Parallel'],
    ['scale_factor', 'Scale_Factor'],
    ['k0', 'scale_factor'],
    ['latitude_of_center', 'Latitude_of_center'],
    ['lat0', 'latitude_of_center', d2r],
    ['longitude_of_center', 'Longitude_Of_Center'],
    ['longc', 'longitude_of_center', d2r],
    ['x0', 'false_easting', toMeter],
    ['y0', 'false_northing', toMeter],
    ['long0', 'central_meridian', d2r],
    ['lat0', 'latitude_of_origin', d2r],
    ['lat0', 'standard_parallel_1', d2r],
    ['lat1', 'standard_parallel_1', d2r],
    ['lat2', 'standard_parallel_2', d2r],
    ['alpha', 'azimuth', d2r],
    ['srsCode', 'name']
  ];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === "Lambert_Azimuthal_Equal_Area")) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
module.exports = function(wkt, self) {
  var lisp = JSON.parse(("," + wkt).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g, ',"$1"]').replace(/,\["VERTCS".+/,''));
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  lisp.unshift('output');
  var obj = {};
  sExpr(lisp, obj);
  cleanWKT(obj.output);
  return extend(self, obj.output);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapConfig = exports.Feature = exports.Layer = undefined;

var _layer = __webpack_require__(31);

var _layer2 = _interopRequireDefault(_layer);

var _feature = __webpack_require__(30);

var _feature2 = _interopRequireDefault(_feature);

var _mapConfig = __webpack_require__(32);

var _mapConfig2 = _interopRequireDefault(_mapConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layer = exports.Layer = _layer2.default; /**
                                              * Created by FDD on 2017/2/22.
                                              * @desc 静态常量
                                              */

var Feature = exports.Feature = _feature2.default;
var MapConfig = exports.MapConfig = _mapConfig2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var proj4 = __webpack_require__(42);
proj4.defaultDatum = 'WGS84'; //default datum
proj4.Proj = __webpack_require__(13);
proj4.WGS84 = new proj4.Proj('WGS84');
proj4.Point = __webpack_require__(33);
proj4.toPoint = __webpack_require__(21);
proj4.defs = __webpack_require__(22);
proj4.transform = __webpack_require__(26);
proj4.mgrs = __webpack_require__(18);
proj4.version = __webpack_require__(75);
__webpack_require__(48)(proj4);
module.exports = proj4;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by FDD on 2017/2/22.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc 要素相关处理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _openlayers = __webpack_require__(12);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = function () {
  function Feature(map) {
    _classCallCheck(this, Feature);

    this.map = map;
    if (!this.map) {
      throw new Error('缺少地图对象！');
    }
  }

  /**
   * 通过id获取Feature
   * @param id
   * @returns {*}
   */


  _createClass(Feature, [{
    key: 'getFeatureById',
    value: function getFeatureById(id) {
      return this.map.getFeatureById(id);
    }
  }]);

  return Feature;
}();

exports.default = Feature;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _openlayers = __webpack_require__(12);

var _openlayers2 = _interopRequireDefault(_openlayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = function () {
  function Layer(map) {
    _classCallCheck(this, Layer);

    console.log(this);
    this.map = map || null;
    if (!this.map) {
      throw new Error('缺少地图对象！');
    }
  }

  /**
   * 通过layerName获取图层
   * @param layerName
   * @returns {*}
   */


  _createClass(Layer, [{
    key: 'getLayerByLayerName',
    value: function getLayerByLayerName(layerName) {
      try {
        var targetLayer = null;
        if (this.map) {
          var layers = this.map.getLayers();
          targetLayer = layers.filter(function (layer) {
            return layer.get('layerName') === layerName;
          });
        }
        return targetLayer;
      } catch (e) {
        console.log(e);
      }
    }

    /**
     * 通过要素获取图层
     * @param feature
     * @returns {*}
     */

  }, {
    key: 'getLayerByFeatuer',
    value: function getLayerByFeatuer(feature) {
      var tragetLayer = null;
      if (this.map) {
        if (feature instanceof _openlayers2.default.Feature) {
          var layers = this.map.getLayers();
          layers.forEach(function (layer) {
            var source = layer.getSource();
            if (source.getFeatures) {
              var features = source.getFeatures();
              features.forEach(function (feat) {
                if (feat == feature) {
                  tragetLayer = layer;
                }
              });
            }
          });
        } else {
          throw new Error('传入的不是要素!');
        }
      }
      return tragetLayer;
    }

    /**
     * 创建临时图层
     * @param layerName
     * @param params
     * @returns {*}
     */

  }, {
    key: 'creatVectorLayer',
    value: function creatVectorLayer(layerName, params) {
      try {
        if (this.map) {
          var vectorLayer = this.getLayerByLayerName(layerName);
          if (!(vectorLayer instanceof _openlayers2.default.layer.Vector)) {
            vectorLayer = null;
          }
          if (!vectorLayer) {
            if (params && params.create) {
              vectorLayer = new _openlayers2.default.layer.Vector({
                layerName: layerName,
                params: params,
                layerType: 'vector',
                source: new _openlayers2.default.source.Vector({
                  wrapX: false
                }),
                style: new _openlayers2.default.style.Style({
                  fill: new _openlayers2.default.style.Fill({
                    color: 'rgba(67, 110, 238, 0.4)'
                  }),
                  stroke: new _openlayers2.default.style.Stroke({
                    color: '#4781d9',
                    width: 2
                  }),
                  image: new _openlayers2.default.style.Circle({
                    radius: 7,
                    fill: new _openlayers2.default.style.Fill({
                      color: '#ffcc33'
                    })
                  })
                })
              });
            }
          }
          if (this.map && vectorLayer) {
            if (params && params.hasOwnProperty('selectable')) {
              vectorLayer.set("selectable", params.selectable);
            }
            this.map.addLayer(vectorLayer);
          }
          return vectorLayer;
        }
      } catch (e) {
        console.log(e);
      }
    }

    /**
     * 创建专题图层
     * @param layerName
     * @param params
     * @returns {*}
     */

  }, {
    key: 'creatTitleLayer',
    value: function creatTitleLayer(layerName, params) {
      var titleLayer = null;
      if (this.map) {
        var serviceUrl = params['serviceUrl'];
        if (!serviceUrl) return null;
        titleLayer = new _openlayers2.default.layer.Tile({
          layerName: layerName,
          layerType: 'title',
          source: new _openlayers2.default.source.TileArcGISRest({
            url: serviceUrl,
            params: params,
            wrapX: false
          }),
          wrapX: false
        });
        this.map.addLayer(titleLayer);
      }
      return titleLayer;
    }

    /**
     * 移除图层
     * @param layerName
     */

  }, {
    key: 'removeLayerByLayerName',
    value: function removeLayerByLayerName(layerName) {
      if (this.map) {
        var layer = this.getLayerByLayerName(layerName);
        if (layer && layer instanceof _openlayers2.default.layer.Vector && layer.getSource() && layer.getSource().clear) {
          layer.getSource().clear();
        }
      }
    }
  }]);

  return Layer;
}();

exports.default = Layer;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapConfig = {
  center: [109.15169990462329, 31.74108365827285],
  resolution: 0.05406145033589252,
  zoom: 5,
  projection: 'EPSG:102100',
  overViewMapVisible: false,
  scaleLineVisible: true,
  baseLayers: [{
    layerName: 'vector',
    isDefault: true,
    layerType: 'TileXYZ',
    opaque: true, //图层是否不透明
    layerUrl: 'http://10.254.123.75:8080/OneMapServer/rest/services/World2ChinaMapBG/MapServer',
    label: { //地图图层是否对应的有标注层
      layerName: 'vectorLabel',
      isDefault: true,
      layerType: 'TileXYZ',
      layerUrl: 'http://10.254.123.75:8080/OneMapServer/rest/services/World2ChinaMapLabel/MapServer'
    }
  }, {
    layerName: 'earth',
    layerType: 'TitleWMTS',
    layer: 'img',
    isDefault: false,
    layerUrl: 'http://t{0-6}.tianditu.cn/img_c/wmts',
    label: {
      layerName: 'TDTLabel',
      layerType: 'TitleWMTS',
      layer: 'cia',
      isDefault: false,
      layerUrl: 'http://t{0-6}.tianditu.cn/cia_c/wmts'
    }
  }, {
    layerName: 'panorama',
    layerType: 'TitleWMTS',
    layer: 'ter',
    isDefault: false,
    layerUrl: 'http://t{0-6}.tianditu.com/ter_c/wmts',
    label: {
      layerName: 'TDTLabel',
      layerType: 'TitleWMTS',
      layer: 'cia',
      isDefault: false,
      layerUrl: 'http://t{0-6}.tianditu.cn/cia_c/wmts'
    }
  }]
};

exports.default = mapConfig;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var mgrs = __webpack_require__(18);

function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if(typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function(mgrsStr) {
  return new Point(mgrs.toPoint(mgrsStr));
};
Point.prototype.toMGRS = function(accuracy) {
  return mgrs.forward([this.x, this.y], accuracy);
};
module.exports = Point;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function(crs, denorm, point) {
  var xin = point.x,
    yin = point.y,
    zin = point.z || 0.0;
  var v, t, i;
  var out = {};
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      t = 'x';
    }
    else if (i === 1) {
      v = yin;
      t = 'y';
    }
    else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
    case 'e':
      out[t] = v;
      break;
    case 'w':
      out[t] = -v;
      break;
    case 'n':
      out[t] = v;
      break;
    case 's':
      out[t] = -v;
      break;
    case 'u':
      if (point[t] !== undefined) {
        out.z = v;
      }
      break;
    case 'd':
      if (point[t] !== undefined) {
        out.z = -v;
      }
      break;
    default:
      //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
      return null;
    }
  }
  return out;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);

module.exports = function(zone, lon) {
  if (zone === undefined) {
    zone = Math.floor((adjust_lon(lon) + Math.PI) * 30 / Math.PI);

    if (zone < 0) {
      return 0;
    } else if (zone >= 60) {
      return 59;
    }
    return zone;
  } else {
    if (zone > 0 && zone <= 60) {
      return zone - 1;
    }
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;

module.exports = function(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return (-1 * HALF_PI);
    }
    else {
      return HALF_PI;
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(esinp, exp) {
  return (Math.pow((1 - esinp) / (1 + esinp), exp));
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
exports.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
exports.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
exports.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
exports.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
exports.potsdam = {
  towgs84: "606.0,23.0,413.0",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
exports.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
exports.hermannskogel = {
  towgs84: "653.0,-212.0,449.0",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
exports.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
exports.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
exports.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
exports.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
exports.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};
exports.beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};
exports.gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};
exports.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
exports.SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
exports.GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
exports.IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
exports.airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};
exports.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
exports.NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
exports.mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};
exports.andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
exports.aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
exports.GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};
exports.bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
exports.bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
exports.clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};
exports.clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
exports.clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
exports.CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
exports.delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
exports.engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
exports.evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
exports.evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
exports.evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
exports.evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
exports.evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
exports.fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
exports.fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
exports.fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
exports.helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
exports.hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};
exports.intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};
exports.kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
exports.lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
exports.mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};
exports.new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};
exports.plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};
exports.krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
exports.SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};
exports.walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};
exports.WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};
exports.WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};
exports.WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};
exports.WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
exports.sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.greenwich = 0.0; //"0dE",
exports.lisbon = -9.131906111111; //"9d07'54.862\"W",
exports.paris = 2.337229166667; //"2d20'14.025\"E",
exports.bogota = -74.080916666667; //"74d04'51.3\"W",
exports.madrid = -3.687938888889; //"3d41'16.58\"W",
exports.rome = 12.452333333333; //"12d27'8.4\"E",
exports.bern = 7.439583333333; //"7d26'22.5\"E",
exports.jakarta = 106.807719444444; //"106d48'27.79\"E",
exports.ferro = -17.666666666667; //"17d40'W",
exports.brussels = 4.367975; //"4d22'4.71\"E",
exports.stockholm = 18.058277777778; //"18d3'29.8\"E",
exports.athens = 23.7163375; //"23d42'58.815\"E",
exports.oslo = 10.722916666667; //"10d43'22.5\"E"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.ft = {to_meter: 0.3048};
exports['us-ft'] = {to_meter: 1200 / 3937};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var proj = __webpack_require__(13);
var transform = __webpack_require__(26);
var wgs84 = proj('WGS84');

function transformer(from, to, coords) {
  var transformedArray;
  if (Array.isArray(coords)) {
    transformedArray = transform(from, to, coords);
    if (coords.length === 3) {
      return [transformedArray.x, transformedArray.y, transformedArray.z];
    }
    else {
      return [transformedArray.x, transformedArray.y];
    }
  }
  else {
    return transform(from, to, coords);
  }
}

function checkProj(item) {
  if (item instanceof proj) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return proj(item);
}
function proj4(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  }
  else {
    obj = {
      forward: function(coords) {
        return transformer(fromProj, toProj, coords);
      },
      inverse: function(coords) {
        return transformer(toProj, fromProj, coords);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
module.exports = proj4;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;

function datum(datumCode, datum_params, a, b, es, ep2) {
  var out = {};
  out.datum_type = PJD_WGS84; //default setting
  if (datumCode && datumCode === 'none') {
    out.datum_type = PJD_NODATUM;
  }

  if (datum_params) {
    out.datum_params = datum_params.map(parseFloat);
    if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
      out.datum_type = PJD_3PARAM;
    }
    if (out.datum_params.length > 3) {
      if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
        out.datum_type = PJD_7PARAM;
        out.datum_params[3] *= SEC_TO_RAD;
        out.datum_params[4] *= SEC_TO_RAD;
        out.datum_params[5] *= SEC_TO_RAD;
        out.datum_params[6] = (out.datum_params[6] / 1000000.0) + 1.0;
      }
    }
  }


  out.a = a; //datum object also uses these values
  out.b = b;
  out.es = es;
  out.ep2 = ep2;
  return out;
}

module.exports = datum;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var HALF_PI = Math.PI/2;

exports.compareDatums = function(source, dest) {
  if (source.datum_type !== dest.datum_type) {
    return false; // false, datums are not equal
  } else if (source.a !== dest.a || Math.abs(this.es - dest.es) > 0.000000000050) {
    // the tolerence for es is to ensure that GRS80 and WGS84
    // are considered identical
    return false;
  } else if (source.datum_type === PJD_3PARAM) {
    return (this.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2]);
  } else if (source.datum_type === PJD_7PARAM) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6]);
  } else {
    return true; // datums are equal
  }
}; // cs_compare_datums()

/*
 * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
 * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
 * according to the current ellipsoid parameters.
 *
 *    Latitude  : Geodetic latitude in radians                     (input)
 *    Longitude : Geodetic longitude in radians                    (input)
 *    Height    : Geodetic height, in meters                       (input)
 *    X         : Calculated Geocentric X coordinate, in meters    (output)
 *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
 *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
 *
 */
exports.geodeticToGeocentric = function(p, es, a) {
  var Longitude = p.x;
  var Latitude = p.y;
  var Height = p.z ? p.z : 0; //Z value not always supplied

  var Rn; /*  Earth radius at location  */
  var Sin_Lat; /*  Math.sin(Latitude)  */
  var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
  var Cos_Lat; /*  Math.cos(Latitude)  */

  /*
   ** Don't blow up if Latitude is just a little out of the value
   ** range as it may just be a rounding issue.  Also removed longitude
   ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
   */
  if (Latitude < -HALF_PI && Latitude > -1.001 * HALF_PI) {
    Latitude = -HALF_PI;
  } else if (Latitude > HALF_PI && Latitude < 1.001 * HALF_PI) {
    Latitude = HALF_PI;
  } else if ((Latitude < -HALF_PI) || (Latitude > HALF_PI)) {
    /* Latitude out of range */
    //..reportError('geocent:lat out of range:' + Latitude);
    return null;
  }

  if (Longitude > Math.PI) {
    Longitude -= (2 * Math.PI);
  }
  Sin_Lat = Math.sin(Latitude);
  Cos_Lat = Math.cos(Latitude);
  Sin2_Lat = Sin_Lat * Sin_Lat;
  Rn = a / (Math.sqrt(1.0e0 - es * Sin2_Lat));
  return {
    x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
    y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
    z: ((Rn * (1 - es)) + Height) * Sin_Lat
  };
}; // cs_geodetic_to_geocentric()


exports.geocentricToGeodetic = function(p, es, a, b) {
  /* local defintions and variables */
  /* end-criterium of loop, accuracy of sin(Latitude) */
  var genau = 1e-12;
  var genau2 = (genau * genau);
  var maxiter = 30;

  var P; /* distance between semi-minor axis and location */
  var RR; /* distance between center and location */
  var CT; /* sin of geocentric latitude */
  var ST; /* cos of geocentric latitude */
  var RX;
  var RK;
  var RN; /* Earth radius at location */
  var CPHI0; /* cos of start or old geodetic latitude in iterations */
  var SPHI0; /* sin of start or old geodetic latitude in iterations */
  var CPHI; /* cos of searched geodetic latitude */
  var SPHI; /* sin of searched geodetic latitude */
  var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
  var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

  var X = p.x;
  var Y = p.y;
  var Z = p.z ? p.z : 0.0; //Z value not always supplied
  var Longitude;
  var Latitude;
  var Height;

  P = Math.sqrt(X * X + Y * Y);
  RR = Math.sqrt(X * X + Y * Y + Z * Z);

  /*      special cases for latitude and longitude */
  if (P / a < genau) {

    /*  special case, if P=0. (X=0., Y=0.) */
    Longitude = 0.0;

    /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
     *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
    if (RR / a < genau) {
      Latitude = HALF_PI;
      Height = -b;
      return {
        x: p.x,
        y: p.y,
        z: p.z
      };
    }
  } else {
    /*  ellipsoidal (geodetic) longitude
     *  interval: -PI < Longitude <= +PI */
    Longitude = Math.atan2(Y, X);
  }

  /* --------------------------------------------------------------
   * Following iterative algorithm was developped by
   * "Institut for Erdmessung", University of Hannover, July 1988.
   * Internet: www.ife.uni-hannover.de
   * Iterative computation of CPHI,SPHI and Height.
   * Iteration of CPHI and SPHI to 10**-12 radian resp.
   * 2*10**-7 arcsec.
   * --------------------------------------------------------------
   */
  CT = Z / RR;
  ST = P / RR;
  RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
  CPHI0 = ST * (1.0 - es) * RX;
  SPHI0 = CT * RX;
  iter = 0;

  /* loop to find sin(Latitude) resp. Latitude
   * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
  do {
    iter++;
    RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);

    /*  ellipsoidal (geodetic) height */
    Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);

    RK = es * RN / (RN + Height);
    RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
    CPHI = ST * (1.0 - RK) * RX;
    SPHI = CT * RX;
    SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
    CPHI0 = CPHI;
    SPHI0 = SPHI;
  }
  while (SDPHI * SDPHI > genau2 && iter < maxiter);

  /*      ellipsoidal (geodetic) latitude */
  Latitude = Math.atan(SPHI / Math.abs(CPHI));
  return {
    x: Longitude,
    y: Latitude,
    z: Height
  };
}; // cs_geocentric_to_geodetic()


/****************************************************************/
// pj_geocentic_to_wgs84( p )
//  p = point to transform in geocentric coordinates (x,y,z)


/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
exports.geocentricToWgs84 = function(p, datum_type, datum_params) {

  if (datum_type === PJD_3PARAM) {
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x + datum_params[0],
      y: p.y + datum_params[1],
      z: p.z + datum_params[2],
    };
  } else if (datum_type === PJD_7PARAM) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
      y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
      z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
    };
  }
}; // cs_geocentric_to_wgs84

/****************************************************************/
// pj_geocentic_from_wgs84()
//  coordinate system definition,
//  point to transform in geocentric coordinates (x,y,z)
exports.geocentricFromWgs84 = function(p, datum_type, datum_params) {

  if (datum_type === PJD_3PARAM) {
    //if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x - datum_params[0],
      y: p.y - datum_params[1],
      z: p.z - datum_params[2],
    };

  } else if (datum_type === PJD_7PARAM) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    var x_tmp = (p.x - Dx_BF) / M_BF;
    var y_tmp = (p.y - Dy_BF) / M_BF;
    var z_tmp = (p.z - Dz_BF) / M_BF;
    //if( x[io] === HUGE_VAL )
    //    continue;

    return {
      x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
      y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
      z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
    };
  } //cs_geocentric_from_wgs84()
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_NODATUM = 5; // WGS84 or equivalent
var datum = __webpack_require__(44);
function checkParams(type) {
  return (type === PJD_3PARAM || type === PJD_7PARAM);
}
module.exports = function(source, dest, point) {
  // Short cut if the datums are identical.
  if (datum.compareDatums(source, dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === PJD_NODATUM || dest.datum_type === PJD_NODATUM) {
    return point;
  }

  // If this datum requires grid shifts, then apply it to geodetic coordinates.

  // Do we need to go through geocentric coordinates?
  if (source.es === dest.es && source.a === dest.a && !checkParams(source.datum_type) &&  !checkParams(dest.datum_type)) {
    return point;
  }

  // Convert to geocentric coordinates.
  point = datum.geodeticToGeocentric(point, source.es, source.a);
  // Convert between datums
  if (checkParams(source.datum_type)) {
    point = datum.geocentricToWgs84(point, source.datum_type, source.datum_params);
  }
  if (checkParams(dest.datum_type)) {
    point = datum.geocentricFromWgs84(point, dest.datum_type, dest.datum_params);
  }
  return datum.geocentricToGeodetic(point, dest.es, dest.a, dest.b);

};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
var EPSLN = 1.0e-10;
var Ellipsoid = __webpack_require__(39);

exports.eccentricity = function(a, b, rf, R_A) {
  var a2 = a * a; // used in geocentric
  var b2 = b * b; // used in geocentric
  var es = (a2 - b2) / a2; // e ^ 2
  var e = 0;
  if (R_A) {
    a *= 1 - es * (SIXTH + es * (RA4 + es * RA6));
    a2 = a * a;
    es = 0;
  } else {
    e = Math.sqrt(es); // eccentricity
  }
  var ep2 = (a2 - b2) / b2; // used in geocentric
  return {
    es: es,
    e: e,
    ep2: ep2
  };
};
exports.sphere = function (a, b, rf, ellps, sphere) {
  if (!a) { // do we have an ellipsoid?
    var ellipse = Ellipsoid[ellps];
    if (!ellipse) {
      ellipse = Ellipsoid.WGS84;
    }
    a = ellipse.a;
    b = ellipse.b;
    rf = ellipse.rf;
  }

  if (rf && !b) {
    b = (1.0 - 1.0 / rf) * a;
  }
  if (rf === 0 || Math.abs(a - b) < EPSLN) {
    sphere = true;
    b = a;
  }
  return {
    a: a,
    b: b,
    rf: rf,
    sphere: sphere
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var projs = [
  __webpack_require__(25),
  __webpack_require__(73),
  __webpack_require__(72),
  __webpack_require__(71),
  __webpack_require__(70),
  __webpack_require__(67),
  __webpack_require__(61),
  __webpack_require__(59),
  __webpack_require__(53),
  __webpack_require__(60),
  __webpack_require__(51),
  __webpack_require__(58),
  __webpack_require__(54),
  __webpack_require__(55),
  __webpack_require__(68),
  __webpack_require__(66),
  __webpack_require__(64),
  __webpack_require__(69),
  __webpack_require__(65),
  __webpack_require__(56),
  __webpack_require__(74),
  __webpack_require__(52)
];
module.exports = function(proj4){
  projs.forEach(function(proj){
    proj4.Proj.projections.add(proj);
  });
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var defs = __webpack_require__(22);
var wkt = __webpack_require__(27);
var projStr = __webpack_require__(24);
function testObj(code){
  return typeof code === 'string';
}
function testDef(code){
  return code in defs;
}
var codeWords = ['GEOGCS','GEOCCS','PROJCS','LOCAL_CS'];

function testWKT(code){
  return codeWords.some(function (word) {
    return code.indexOf(word) > -1;
  });
}
function testProj(code){
  return code[0] === '+';
}
function parse(code){
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return defs[code];
    }
    if (testWKT(code)) {
      return wkt(code);
    }
    if (testProj(code)) {
      return projStr(code);
    }
  }else{
    return code;
  }
}

module.exports = parse;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var projs = [
  __webpack_require__(63),
  __webpack_require__(62)
];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function(n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}

exports.add = add;

exports.get = function(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
};
exports.start = function() {
  projs.forEach(add);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var EPSLN = 1.0e-10;
var msfnz = __webpack_require__(1);
var qsfnz = __webpack_require__(17);
var adjust_lon = __webpack_require__(0);
var asinz = __webpack_require__(3);
exports.init = function() {

  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs1 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs2 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = qsfnz(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  }
  else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
};

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = qsfnz(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * adjust_lon(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};


exports.inverse = function(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  }
  else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = adjust_lon(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
};

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
exports.phi1z = function(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = asinz(0.5 * qs);
  if (eccent < EPSLN) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
};
exports.names = ["Albers_Conic_Equal_Area", "Albers", "aea"];


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var mlfn = __webpack_require__(9);
var e0fn = __webpack_require__(5);
var e1fn = __webpack_require__(6);
var e2fn = __webpack_require__(7);
var e3fn = __webpack_require__(8);
var gN = __webpack_require__(14);
var asinz = __webpack_require__(3);
var imlfn = __webpack_require__(15);
exports.init = function() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
};

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = adjust_lon(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North Pole case
      p.x = this.x0 + this.a * (HALF_PI - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (HALF_PI - lat) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South Pole case
      p.x = this.x0 + this.a * (HALF_PI + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (HALF_PI + lat) * Math.cos(dlon);
      return p;
    }
    else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c / Math.sin(c);
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  }
  else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    }
    else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = gN(this.a, this.e, this.sin_p12);
      Nl = gN(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else if (Math.abs(Math.abs(Az) - Math.PI) <= EPSLN) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }


};

exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > (2 * HALF_PI * this.a)) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= EPSLN) {
      lat = this.lat0;
    }
    else {
      lat = asinz(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
      con = Math.abs(this.lat0) - HALF_PI;
      if (Math.abs(con) <= EPSLN) {
        if (this.lat0 >= 0) {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
        }
      }
      else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = gN(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = adjust_lon(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      lat = Math.atan((1 - this.es * F * this.sin_p12 / Math.sin(psi)) * Math.tan(psi) / (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }

};
exports.names = ["Azimuthal_Equidistant", "aeqd"];


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var mlfn = __webpack_require__(9);
var e0fn = __webpack_require__(5);
var e1fn = __webpack_require__(6);
var e2fn = __webpack_require__(7);
var e3fn = __webpack_require__(8);
var gN = __webpack_require__(14);
var adjust_lon = __webpack_require__(0);
var adjust_lat = __webpack_require__(2);
var imlfn = __webpack_require__(15);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
exports.init = function() {
  if (!this.sphere) {
    this.e0 = e0fn(this.es);
    this.e1 = e1fn(this.es);
    this.e2 = e2fn(this.es);
    this.e3 = e3fn(this.es);
    this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
};



/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  }
  else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = gN(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  }
  else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = imlfn(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - HALF_PI) <= EPSLN) {
      p.x = this.long0;
      p.y = HALF_PI;
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = gN(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

  }

  p.x = adjust_lon(lam + this.long0);
  p.y = adjust_lat(phi);
  return p;

};
exports.names = ["Cassini", "Cassini_Soldner", "cass"];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var qsfnz = __webpack_require__(17);
var msfnz = __webpack_require__(1);
var iqsfnz = __webpack_require__(36);
/*
  reference:  
    "Cartographic Projection Procedures for the UNIX Environment-
    A User's Manual" by Gerald I. Evenden,
    USGS Open File Report 90-284and Release 4 Interim Reports (2003)
*/
exports.init = function() {
  //no-op
  if (!this.sphere) {
    this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
};


/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  }
  else {
    var qs = qsfnz(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
};

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = adjust_lon(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
    lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
  }
  else {
    lat = iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
    lon = adjust_lon(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["cea"];


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var adjust_lat = __webpack_require__(2);
exports.init = function() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
};


// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = adjust_lon(lon - this.long0);
  var dlat = adjust_lat(lat - this.lat0);
  p.x = this.x0 + (this.a * dlon * this.rc);
  p.y = this.y0 + (this.a * dlat);
  return p;
};

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
exports.inverse = function(p) {

  var x = p.x;
  var y = p.y;

  p.x = adjust_lon(this.long0 + ((x - this.x0) / (this.a * this.rc)));
  p.y = adjust_lat(this.lat0 + ((y - this.y0) / (this.a)));
  return p;
};
exports.names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var e0fn = __webpack_require__(5);
var e1fn = __webpack_require__(6);
var e2fn = __webpack_require__(7);
var e3fn = __webpack_require__(8);
var msfnz = __webpack_require__(1);
var mlfn = __webpack_require__(9);
var adjust_lon = __webpack_require__(0);
var adjust_lat = __webpack_require__(2);
var imlfn = __webpack_require__(15);
var EPSLN = 1.0e-10;
exports.init = function() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = msfnz(this.e, this.sinphi, this.cosphi);
  this.ml1 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < EPSLN) {
    this.ns = this.sinphi;
  }
  else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = msfnz(this.e, this.sinphi, this.cosphi);
    this.ml2 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
};


/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  }
  else {
    var ml = mlfn(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = adjust_lon(this.long0 + theta / this.ns);
    lat = adjust_lat(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    var ml = this.g - rh1 / this.a;
    lat = imlfn(ml, this.e0, this.e1, this.e2, this.e3);
    lon = adjust_lon(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }

};
exports.names = ["Equidistant_Conic", "eqdc"];


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var FORTPI = Math.PI/4;
var srat = __webpack_require__(37);
var HALF_PI = Math.PI/2;
var MAX_ITER = 20;
exports.init = function() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + FORTPI), this.C) * srat(this.e * sphi, this.ratexp));
};

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + FORTPI), this.C) * srat(this.e * Math.sin(lat), this.ratexp)) - HALF_PI;
  p.x = this.C * lon;
  return p;
};

exports.inverse = function(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + FORTPI) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * srat(this.e * Math.sin(p.y), - 0.5 * this.e)) - HALF_PI;
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["gauss"];


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(3);

/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
exports.init = function() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
};


/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
exports.forward = function(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = adjust_lon(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= EPSLN)) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  }
  else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project 
    // to infinity, on a bearing 
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that 
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

  }
  p.x = x;
  p.y = y;
  return p;
};


exports.inverse = function(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = asinz(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = adjust_lon(this.long0 + lon);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["gnom"];


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
exports.init = function() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
};

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
exports.forward = function(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = adjust_lon(lon - this.long0);
  /* Transformation */
  gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return (p);
};

/* calculate lat/lon from xy */
exports.inverse = function(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return (p);
};
exports.names = ["Krovak", "krovak"];


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var FORTPI = Math.PI/4;
var EPSLN = 1.0e-10;
var qsfnz = __webpack_require__(17);
var adjust_lon = __webpack_require__(0);
/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

exports.S_POLE = 1;
exports.N_POLE = 2;
exports.EQUIT = 3;
exports.OBLIQ = 4;


/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
exports.init = function() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - HALF_PI) < EPSLN) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  }
  else if (Math.abs(t) < EPSLN) {
    this.mode = this.EQUIT;
  }
  else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = qsfnz(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = this.authset(this.es);
    switch (this.mode) {
    case this.N_POLE:
      this.dd = 1;
      break;
    case this.S_POLE:
      this.dd = 1;
      break;
    case this.EQUIT:
      this.rq = Math.sqrt(0.5 * this.qp);
      this.dd = 1 / this.rq;
      this.xmf = 1;
      this.ymf = 0.5 * this.qp;
      break;
    case this.OBLIQ:
      this.rq = Math.sqrt(0.5 * this.qp);
      sinphi = Math.sin(this.lat0);
      this.sinb1 = qsfnz(this.e, sinphi) / this.qp;
      this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
      this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
      this.ymf = (this.xmf = this.rq) / this.dd;
      this.xmf *= this.dd;
      break;
    }
  }
  else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
};

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= EPSLN) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.phi0) < EPSLN) {
        return null;
      }
      y = FORTPI - phi * 0.5;
      y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  }
  else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = qsfnz(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
    case this.OBLIQ:
      b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
      break;
    case this.EQUIT:
      b = 1 + cosb * coslam;
      break;
    case this.N_POLE:
      b = HALF_PI + phi;
      q = this.qp - q;
      break;
    case this.S_POLE:
      b = phi - HALF_PI;
      q = this.qp + q;
      break;
    }
    if (Math.abs(b) < EPSLN) {
      return null;
    }
    switch (this.mode) {
    case this.OBLIQ:
    case this.EQUIT:
      b = Math.sqrt(2 / b);
      if (this.mode === this.OBLIQ) {
        y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
      }
      else {
        y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
      }
      x = this.xmf * b * cosb * sinlam;
      break;
    case this.N_POLE:
    case this.S_POLE:
      if (q >= 0) {
        x = (b = Math.sqrt(q)) * sinlam;
        y = coslam * ((this.mode === this.S_POLE) ? b : -b);
      }
      else {
        x = y = 0;
      }
      break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;

  if (this.sphere) {
    var cosz = 0,
      rh, sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
    case this.EQUIT:
      phi = (Math.abs(rh) <= EPSLN) ? 0 : Math.asin(y * sinz / rh);
      x *= sinz;
      y = cosz * rh;
      break;
    case this.OBLIQ:
      phi = (Math.abs(rh) <= EPSLN) ? this.phi0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
      x *= sinz * this.cosph0;
      y = (cosz - Math.sin(phi) * this.sinph0) * rh;
      break;
    case this.N_POLE:
      y = -y;
      phi = HALF_PI - phi;
      break;
    case this.S_POLE:
      phi -= HALF_PI;
      break;
    }
    lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
  }
  else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < EPSLN) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= (sCe = Math.sin(sCe));
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      }
      else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = (x * x + y * y);
      if (!q) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = this.authlat(Math.asin(ab), this.apa);
  }


  p.x = adjust_lon(this.long0 + lam);
  p.y = phi;
  return p;
};

/* determine latitude from authalic latitude */
exports.P00 = 0.33333333333333333333;
exports.P01 = 0.17222222222222222222;
exports.P02 = 0.10257936507936507936;
exports.P10 = 0.06388888888888888888;
exports.P11 = 0.06640211640211640211;
exports.P20 = 0.01641501294219154443;

exports.authset = function(es) {
  var t;
  var APA = [];
  APA[0] = es * this.P00;
  t = es * es;
  APA[0] += t * this.P01;
  APA[1] = t * this.P10;
  t *= es;
  APA[0] += t * this.P02;
  APA[1] += t * this.P11;
  APA[2] = t * this.P20;
  return APA;
};

exports.authlat = function(beta, APA) {
  var t = beta + beta;
  return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
};
exports.names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var EPSLN = 1.0e-10;
var msfnz = __webpack_require__(1);
var tsfnz = __webpack_require__(11);
var HALF_PI = Math.PI/2;
var sign = __webpack_require__(4);
var adjust_lon = __webpack_require__(0);
var phi2z = __webpack_require__(10);
exports.init = function() {

  // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
  //double c_lat;                   /* center latitude                      */
  //double c_lon;                   /* center longitude                     */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = msfnz(this.e, sin1, cos1);
  var ts1 = tsfnz(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = msfnz(this.e, sin2, cos2);
  var ts2 = tsfnz(this.e, this.lat2, sin2);

  var ts0 = tsfnz(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  }
  else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
};


// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= EPSLN) {
    lat = sign(lat) * (HALF_PI - 2 * EPSLN);
  }

  var con = Math.abs(Math.abs(lat) - HALF_PI);
  var ts, rh1;
  if (con > EPSLN) {
    ts = tsfnz(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  }
  else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
};

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
exports.inverse = function(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = (this.rh - (p.y - this.y0) / this.k0);
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2((con * x), (con * y));
  }
  if ((rh1 !== 0) || (this.ns > 0)) {
    con = 1 / this.ns;
    ts = Math.pow((rh1 / (this.a * this.f0)), con);
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  else {
    lat = -HALF_PI;
  }
  lon = adjust_lon(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
};

exports.names = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"];


/***/ }),
/* 62 */
/***/ (function(module, exports) {

exports.init = function() {
  //no-op for longlat
};

function identity(pt) {
  return pt;
}
exports.forward = identity;
exports.inverse = identity;
exports.names = ["longlat", "identity"];


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var msfnz = __webpack_require__(1);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var R2D = 57.29577951308232088;
var adjust_lon = __webpack_require__(0);
var FORTPI = Math.PI/4;
var tsfnz = __webpack_require__(11);
var phi2z = __webpack_require__(10);
exports.init = function() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if(!('x0' in this)){
    this.x0 = 0;
  }
  if(!('y0' in this)){
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    }
    else {
      this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      }
      else {
        this.k0 = 1;
      }
    }
  }
};

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * R2D > 90 && lat * R2D < -90 && lon * R2D > 180 && lon * R2D < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
    return null;
  }
  else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + 0.5 * lat));
    }
    else {
      var sinphi = Math.sin(lat);
      var ts = tsfnz(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
};


/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
exports.inverse = function(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  }
  else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = adjust_lon(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
};

exports.names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */


/* Initialize the Miller Cylindrical projection
  -------------------------------------------*/
exports.init = function() {
  //no-op
};


/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

  p.x = x;
  p.y = y;
  return p;
};

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = adjust_lon(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Miller_Cylindrical", "mill"];


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var EPSLN = 1.0e-10;
exports.init = function() {};

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  for (var i = 0; true; i++) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < EPSLN) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < EPSLN) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};

exports.inverse = function(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = adjust_lon(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
  if (lon < (-Math.PI)) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Mollweide", "moll"];


/***/ }),
/* 66 */
/***/ (function(module, exports) {

var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
exports.iterations = 1;

exports.init = function() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
};

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
exports.forward = function(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / SEC_TO_RAD * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = (z_im * this.a) + this.x0;
  p.y = (z_re * this.a) + this.y0;

  return p;
};


/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
exports.inverse = function(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + (d_phi * SEC_TO_RAD * 1E5);
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
};
exports.names = ["New_Zealand_Map_Grid", "nzmg"];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var tsfnz = __webpack_require__(11);
var adjust_lon = __webpack_require__(0);
var phi2z = __webpack_require__(10);
var HALF_PI = Math.PI/2;
var FORTPI = Math.PI/4;
var EPSLN = 1.0e-10;

/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
exports.init = function() {
  this.no_off = this.no_off || false;
  this.no_rot = this.no_rot || false;

  if (isNaN(this.k0)) {
    this.k0 = 1;
  }
  var sinlat = Math.sin(this.lat0);
  var coslat = Math.cos(this.lat0);
  var con = this.e * sinlat;

  this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(coslat, 4));
  this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - con * con);
  var t0 = tsfnz(this.e, this.lat0, sinlat);
  var dl = this.bl / coslat * Math.sqrt((1 - this.es) / (1 - con * con));
  if (dl * dl < 1) {
    dl = 1;
  }
  var fl;
  var gl;
  if (!isNaN(this.longc)) {
    //Central point and azimuth method

    if (this.lat0 >= 0) {
      fl = dl + Math.sqrt(dl * dl - 1);
    }
    else {
      fl = dl - Math.sqrt(dl * dl - 1);
    }
    this.el = fl * Math.pow(t0, this.bl);
    gl = 0.5 * (fl - 1 / fl);
    this.gamma0 = Math.asin(Math.sin(this.alpha) / dl);
    this.long0 = this.longc - Math.asin(gl * Math.tan(this.gamma0)) / this.bl;

  }
  else {
    //2 points method
    var t1 = tsfnz(this.e, this.lat1, Math.sin(this.lat1));
    var t2 = tsfnz(this.e, this.lat2, Math.sin(this.lat2));
    if (this.lat0 >= 0) {
      this.el = (dl + Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    else {
      this.el = (dl - Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    var hl = Math.pow(t1, this.bl);
    var ll = Math.pow(t2, this.bl);
    fl = this.el / hl;
    gl = 0.5 * (fl - 1 / fl);
    var jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
    var pl = (ll - hl) / (ll + hl);
    var dlon12 = adjust_lon(this.long1 - this.long2);
    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(jl * Math.tan(0.5 * this.bl * (dlon12)) / pl) / this.bl;
    this.long0 = adjust_lon(this.long0);
    var dlon10 = adjust_lon(this.long1 - this.long0);
    this.gamma0 = Math.atan(Math.sin(this.bl * (dlon10)) / gl);
    this.alpha = Math.asin(dl * Math.sin(this.gamma0));
  }

  if (this.no_off) {
    this.uc = 0;
  }
  else {
    if (this.lat0 >= 0) {
      this.uc = this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
    else {
      this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
  }

};


/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var dlon = adjust_lon(lon - this.long0);
  var us, vs;
  var con;
  if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
    if (lat > 0) {
      con = -1;
    }
    else {
      con = 1;
    }
    vs = this.al / this.bl * Math.log(Math.tan(FORTPI + con * this.gamma0 * 0.5));
    us = -1 * con * HALF_PI * this.al / this.bl;
  }
  else {
    var t = tsfnz(this.e, lat, Math.sin(lat));
    var ql = this.el / Math.pow(t, this.bl);
    var sl = 0.5 * (ql - 1 / ql);
    var tl = 0.5 * (ql + 1 / ql);
    var vl = Math.sin(this.bl * (dlon));
    var ul = (sl * Math.sin(this.gamma0) - vl * Math.cos(this.gamma0)) / tl;
    if (Math.abs(Math.abs(ul) - 1) <= EPSLN) {
      vs = Number.POSITIVE_INFINITY;
    }
    else {
      vs = 0.5 * this.al * Math.log((1 - ul) / (1 + ul)) / this.bl;
    }
    if (Math.abs(Math.cos(this.bl * (dlon))) <= EPSLN) {
      us = this.al * this.bl * (dlon);
    }
    else {
      us = this.al * Math.atan2(sl * Math.cos(this.gamma0) + vl * Math.sin(this.gamma0), Math.cos(this.bl * dlon)) / this.bl;
    }
  }

  if (this.no_rot) {
    p.x = this.x0 + us;
    p.y = this.y0 + vs;
  }
  else {

    us -= this.uc;
    p.x = this.x0 + vs * Math.cos(this.alpha) + us * Math.sin(this.alpha);
    p.y = this.y0 + us * Math.cos(this.alpha) - vs * Math.sin(this.alpha);
  }
  return p;
};

exports.inverse = function(p) {
  var us, vs;
  if (this.no_rot) {
    vs = p.y - this.y0;
    us = p.x - this.x0;
  }
  else {
    vs = (p.x - this.x0) * Math.cos(this.alpha) - (p.y - this.y0) * Math.sin(this.alpha);
    us = (p.y - this.y0) * Math.cos(this.alpha) + (p.x - this.x0) * Math.sin(this.alpha);
    us += this.uc;
  }
  var qp = Math.exp(-1 * this.bl * vs / this.al);
  var sp = 0.5 * (qp - 1 / qp);
  var tp = 0.5 * (qp + 1 / qp);
  var vp = Math.sin(this.bl * us / this.al);
  var up = (vp * Math.cos(this.gamma0) + sp * Math.sin(this.gamma0)) / tp;
  var ts = Math.pow(this.el / Math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
  if (Math.abs(up - 1) < EPSLN) {
    p.x = this.long0;
    p.y = HALF_PI;
  }
  else if (Math.abs(up + 1) < EPSLN) {
    p.x = this.long0;
    p.y = -1 * HALF_PI;
  }
  else {
    p.y = phi2z(this.e, ts);
    p.x = adjust_lon(this.long0 - Math.atan2(sp * Math.cos(this.gamma0) - vp * Math.sin(this.gamma0), Math.cos(this.bl * us / this.al)) / this.bl);
  }
  return p;
};

exports.names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var e0fn = __webpack_require__(5);
var e1fn = __webpack_require__(6);
var e2fn = __webpack_require__(7);
var e3fn = __webpack_require__(8);
var adjust_lon = __webpack_require__(0);
var adjust_lat = __webpack_require__(2);
var mlfn = __webpack_require__(9);
var EPSLN = 1.0e-10;
var gN = __webpack_require__(14);
var MAX_ITER = 20;
exports.init = function() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);
  this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
};


/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = adjust_lon(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= EPSLN) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    }
    else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (adjust_lat(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  }
  else {
    if (Math.abs(lat) <= EPSLN) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    }
    else {
      var nl = gN(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }

  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};


/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= EPSLN) {
      lon = adjust_lon(x / this.a + this.long0);
      lat = 0;
    }
    else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= EPSLN) {
          lat = phi;
          break;
        }
      }
      lon = adjust_lon(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
    }
  }
  else {
    if (Math.abs(y + this.ml0) <= EPSLN) {
      lat = 0;
      lon = adjust_lon(this.long0 + x / this.a);
    }
    else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= EPSLN) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = adjust_lon(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Polyconic", "poly"];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var adjust_lat = __webpack_require__(2);
var pj_enfn = __webpack_require__(19);
var MAX_ITER = 20;
var pj_mlfn = __webpack_require__(16);
var pj_inv_mlfn = __webpack_require__(20);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(3);
exports.init = function() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/


  if (!this.sphere) {
    this.en = pj_enfn(this.es);
  }
  else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }

};

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
exports.forward = function(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = adjust_lon(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    }
    else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < EPSLN) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;

  }
  else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * pj_mlfn(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
};

exports.inverse = function(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = asinz((this.m * lat + Math.sin(lat)) / this.n);
    }
    else if (this.n !== 1) {
      lat = asinz(Math.sin(lat) / this.n);
    }
    lon = adjust_lon(lon + this.long0);
    lat = adjust_lat(lat);
  }
  else {
    lat = pj_inv_mlfn(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < HALF_PI) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = adjust_lon(temp);
    }
    else if ((s - EPSLN) < HALF_PI) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Sinusoidal", "sinu"];

/***/ }),
/* 70 */
/***/ (function(module, exports) {

/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */
exports.init = function() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
};


exports.forward = function(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
};

exports.inverse = function(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
};

exports.names = ["somerc"];


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var sign = __webpack_require__(4);
var msfnz = __webpack_require__(1);
var tsfnz = __webpack_require__(11);
var phi2z = __webpack_require__(10);
var adjust_lon = __webpack_require__(0);
exports.ssfn_ = function(phit, sinphi, eccen) {
  sinphi *= eccen;
  return (Math.tan(0.5 * (HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
};

exports.init = function() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
      this.k0 = 0.5 * (1 + sign(this.lat0) * Math.sin(this.lat_ts));
    }
  }
  else {
    if (Math.abs(this.coslat0) <= EPSLN) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      }
      else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
      this.k0 = 0.5 * this.cons * msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = msfnz(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI;
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
};

// Stereographic forward equations--mapping lat,long to x,y
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = adjust_lon(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= EPSLN && Math.abs(lat + this.lat0) <= EPSLN) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  }
  else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - HALF_PI;
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= EPSLN) {
      ts = tsfnz(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    }
    else if (Math.abs(this.sinlat0) < EPSLN) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    }
    else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
};


//* Stereographic inverse equations--mapping x,y to lat/long
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (0.5 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= EPSLN) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < EPSLN) {
      if (this.lat0 > 0) {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
      }
      else {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      }
    }
    else {
      lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    if (Math.abs(this.coslat0) <= EPSLN) {
      if (rh <= EPSLN) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * phi2z(this.e, ts);
      lon = this.con * adjust_lon(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
    }
    else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= EPSLN) {
        Chi = this.X0;
      }
      else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * phi2z(this.e, Math.tan(0.5 * (HALF_PI + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;

};
exports.names = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var gauss = __webpack_require__(57);
var adjust_lon = __webpack_require__(0);
exports.init = function() {
  gauss.init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
};

exports.forward = function(p) {
  var sinc, cosc, cosl, k;
  p.x = adjust_lon(p.x - this.long0);
  gauss.forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
};

exports.inverse = function(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  gauss.inverse.apply(this, [p]);
  p.x = adjust_lon(p.x + this.long0);
  return p;
};

exports.names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative"];


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_zone = __webpack_require__(35);
var tmerc = __webpack_require__(25);

exports.dependsOn = 'tmerc';

exports.init = function() {
  var zone = adjust_zone(this.zone, this.long0);
  if (zone === undefined) {
    throw new Error('unknown utm zone');
  }

  this.lat0 = 0;
  this.long0 = (zone + 0.5) * Math.PI / 30 - Math.PI;
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  tmerc.init.apply(this);
  this.forward = tmerc.forward;
  this.inverse = tmerc.inverse;
};

exports.names = ["Universal Transverse Mercator System", "utm"];


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(0);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(3);
/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
exports.init = function() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
};

exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= EPSLN) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = asinz(2 * Math.abs(lat / Math.PI));
  if ((Math.abs(dlon) <= EPSLN) || (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN)) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    }
    else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  }
  else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
};

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
exports.inverse = function(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = ((3 * d) / a1) / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    }
    else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }
  else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < EPSLN) {
    lon = this.long0;
  }
  else {
    lon = adjust_lon(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = '2.3.17';


/***/ }),
/* 76 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by FDD on 2017/2/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @desc 类库首文件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _constants = __webpack_require__(28);

var constants = _interopRequireWildcard(_constants);

var _proj = __webpack_require__(29);

var _proj2 = _interopRequireDefault(_proj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ol = __webpack_require__(12);

var HMap = function () {
  function HMap() {
    _classCallCheck(this, HMap);

    /**
     * 地图工具
     * @type {{addPoint: boolean, ljQuery: boolean, iQuery: boolean, drawPlot: boolean, toolsType: {addPoint: string, ljQuery: string, iQuery: string, drawPlot: string}}}
     */
    this.mapTools = {
      addPoint: false, ljQuery: false,
      iQuery: false, drawPlot: false,
      addTextArea: false,
      toolsType: {
        addPoint: 'addPoint',
        ljQuery: 'ljQuery',
        iQuery: 'iQuery',
        drawPlot: 'drawPlot',
        addTextArea: 'addTextArea'
      }
    };
    this.addPointHandlerClick = null;
    this.plotDraw = null; //标绘工具
    this.plotEdit = null;
    this._lastDrawInteractionGeometry = null;
    this.wgs84Sphere = new ol.Sphere(6378137);
    window.ObservableObj = new ol.Object();
    ol.proj.setProj4(_proj2.default);

    /**
     * 当前地图线要素
     * @type {Array}
     */
    this.currentMapLines = [];
    /**
     * 当前地图点要素
     * @type {Array}
     */
    this.currentMapPoints = [];
    /**
     * 当前地图面要素
     * @type {Array}
     */
    this.currentMapPolygon = [];
    /**
     * 当前地图线图层
     * @type {Array}
     */
    this.lineLayers = new Set();
    /**
     * 当前地图点图层
     * @type {Array}
     */
    this.pointLayers = new Set();
    /**
     * 当前地图面图层
     * @type {Array}
     */
    this.polygonLayers = new Set();
    /**
     * 周边搜索要素
     * @type {null}
     */
    this.circleSerachFeat = null;
    /**
     * 当前地图气泡
     * @type {null}
     */
    this.popupOverlay = null;
  }

  /**
   * 初始化当前地图
   * @param mapDiv
   * @param params
   */


  _createClass(HMap, [{
    key: 'initMap',
    value: function initMap(mapDiv, params) {
      var options = params || {};
      /**
       * 投影
       * @type {ol.proj.Projection}
       */
      this.projection = ol.proj.get(this._addProjection(options));
      /**
       * 显示范围
       */
      this.fullExtent = options['fullExtent'] ? options.fullExtent : [-180, -90, 180, 90];
      /**
       * 投影范围
       */
      this.projection.setExtent(this.fullExtent);
      /**
       * 瓦片原点
       * @desc 设置瓦片原点的目的是因为部分地图切图原点不是[0,0]
       * 为保证正确加载，所以必须设置瓦片原点。
       */
      this.origin = options.origin;
      /**
       * 瓦片大小
       * @desc 切片大小，典型值有256， 512.
       * 默认256
       */
      this.tileSize = options.tileSize;

      this.resolutions = options.resolutions;

      var _layers = this._getBaseLayerGroup(options['baseLayers']);

      var _interactions = this._addInteractions(options['interactions']);

      var _view = this._addView(options);

      /**
       * 当前地图对象
       * @type {ol.Map}
       */
      this.map = new ol.Map({
        target: mapDiv,
        loadTilesWhileAnimating: true,
        loadTilesWhileInteracting: true,
        interactions: _interactions,
        layers: [new ol.layer.Group({
          layers: _layers
        })],
        view: _view
      });

      this._addControls(options['controls']);
    }

    /**
     * 获取图层组
     * @returns {ol.layer.Group}
     */

  }, {
    key: '_getBaseLayerGroup',
    value: function _getBaseLayerGroup(layerConfig) {
      var _this = this;

      var layers = [],
          labelLayers = [],
          _layers = [],
          labelLayersConfig = [];

      if (layerConfig && Array.isArray(layerConfig) && layerConfig.length > 0) {
        layerConfig.forEach(function (config) {
          if (config['layerName'] && config['layerUrl'] && config['layerType']) {
            var layer = null;
            switch (config['layerType']) {
              case 'TileXYZ':
                layer = _this._getXYZLayer(config);
                break;
              case 'TitleWMTS':
                layer = _this._getWMTSLayer(config);
                break;
            }
            if (layer) layers.push(layer);
            if (config['label']) {
              labelLayersConfig.push(config['label']);
            }
          }
        });
      }
      labelLayers = this._getBaseLayerLabel(labelLayersConfig);
      _layers = layers.concat(labelLayers);
      return _layers;
      // try {
      //   let [ layers, labelLayers,  _layers ] = [ [], [], [] ];
      //   if (layerConfig && Array.isArray(layerConfig) && layerConfig.length > 0) {
      //     layerConfig.forEach(config => {
      //       if (config['layerName'] && config['layerUrl'] && config['layerType']) {
      //         let layer = null;
      //         switch (config['layerType']) {
      //           case 'TileXYZ':
      //             layer = this._getXYZLayer(config);
      //             break;
      //           case 'TitleWMTS':
      //             layer = this._getWMTSLayer(config);
      //             break;
      //         }
      //         if (layer) layers.push(layer);
      //         if (config['label'] && config['label']['layerName'] && config['label']['layerUrl'] && config['label']['layerType']) {
      //           let labelLayer = null;
      //           switch (config['label']['layerType']) {
      //             case 'TileXYZ':
      //               labelLayer = this._getXYZLayer(config['label']);
      //               break;
      //             case 'TitleWMTS':
      //               labelLayer = this._getWMTSLayer(config['label']);
      //               break;
      //           }
      //           if (labelLayer) labelLayers.push(labelLayer);
      //         }
      //       }
      //     })
      //   }
      //   _layers = layers.concat(labelLayers);
      //   return _layers;
      // } catch (e) {
      //   console.log(e)
      // } finally { // 如果错误了，返回osm图层，避免地图容器空白
      //   return [new ol.layer.Tile({
      //     source: new ol.source.OSM()
      //   })]
      // }
    }

    /**
     * 主要处理标注层
     * @param labelLayersConfig
     * @returns {null}
     * @private
     */

  }, {
    key: '_getBaseLayerLabel',
    value: function _getBaseLayerLabel(labelLayersConfig) {
      var _this2 = this;

      var labelLayers = [],
          _labelLayersLayerNames = new Set();

      if (labelLayersConfig && Array.isArray(labelLayersConfig) && labelLayersConfig.length > 0) {
        labelLayersConfig.forEach(function (config) {
          if (config['layerName'] && config['layerUrl'] && config['layerType']) {
            _labelLayersLayerNames.add(config['layerName']);
          }
        });
        [].concat(_toConsumableArray(_labelLayersLayerNames)).forEach(function (layerName) {
          labelLayersConfig.every(function (configM) {
            if (configM && configM['layerName'] === layerName) {
              var labelLayer = null;
              switch (configM['layerType']) {
                case 'TileXYZ':
                  labelLayer = _this2._getXYZLayer(configM);
                  break;
                case 'TitleWMTS':
                  labelLayer = _this2._getWMTSLayer(configM);
                  break;
              }
              if (labelLayer) labelLayers.push(labelLayer);
              return false;
            }
            return true;
          });
        });
      }
      return labelLayers;
    }

    /**
     * 获取标准XYZ图层
     * @param config
     * @returns {ol.layer.Tile}
     * @private
     */

  }, {
    key: '_getXYZLayer',
    value: function _getXYZLayer(config) {
      var tileUrl = config['layerUrl'];
      var tileGrid = new ol.tilegrid.TileGrid({
        tileSize: this.tileSize,
        origin: this.origin,
        extent: this.fullExtent,
        resolutions: this.resolutions
      });
      var tileArcGISXYZ = new ol.source.XYZ({
        wrapX: false,
        tileGrid: tileGrid,
        tileSize: this.tileSize,
        opaque: config['opaque'] === true ? true : false, // 图层是否不透明（主题相关）
        tilePixelRatio: 1, //todo 对于高分辨率设备，例如苹果等可能2、3（移动端开发需要注意）
        projection: this.projection,
        crossOrigin: 'Anonymous',
        tileUrlFunction: function tileUrlFunction(tileCoord) {
          var url = (tileUrl + '/tile/{z}/{y}/{x}').replace('{z}', tileCoord[0].toString()).replace('{x}', tileCoord[1].toString()).replace('{y}', (-tileCoord[2] - 1).toString());
          return url;
        }
      });
      var baseLayer = new ol.layer.Tile({
        isBaseLayer: true,
        isDefault: config['isDefault'] === true ? true : false,
        visible: config['isDefault'] === true ? true : false,
        layerName: config['layerName'] ? config.layerName : '',
        source: tileArcGISXYZ
      });
      return baseLayer;
    }

    /**
     * 获取标准WMTS图层
     * @param config
     * @returns {ol.layer.Tile}
     * @private
     */

  }, {
    key: '_getWMTSLayer',
    value: function _getWMTSLayer(config) {
      var projection = ol.proj.get('EPSG:4326');
      var size = ol.extent.getWidth(projection.getExtent()) / 256;
      var resolutions = new Array(19);
      var matrixIds = new Array(19);
      for (var z = 0; z < 19; ++z) {
        resolutions[z] = size / Math.pow(2, z);
        matrixIds[z] = z;
      }
      var layer = new ol.layer.Tile({
        isBaseLayer: true,
        isDefault: config['isDefault'] === true ? true : false,
        layerName: config['layerName'] ? config.layerName : '',
        visible: config['isDefault'] === true ? true : false,
        source: new ol.source.WMTS({
          url: config['layerUrl'],
          layer: config['layer'],
          matrixSet: 'c',
          format: 'tiles',
          crossOrigin: 'Anonymous',
          projection: projection,
          tileGrid: new ol.tilegrid.WMTS({
            origin: ol.extent.getTopLeft(this.projection.getExtent()),
            resolutions: resolutions,
            matrixIds: matrixIds
          }),
          style: 'default',
          wrapX: false
        })
      });
      return layer;
    }

    /**
     * 当前视图
     * @type {ol.View}
     */

  }, {
    key: '_addView',
    value: function _addView(options) {
      var view = new ol.View({
        center: ol.proj.fromLonLat(options['center'], this.projection),
        zoom: options['zoom'] ? options.zoom : 0
      });
      if (this.projection) {
        view.set('projection', this.projection);
      }
      if (options['maxResolution']) {
        view.set('maxResolution', options['maxResolution']);
      }
      if (options['minResolution']) {
        view.set('minResolution', options['minResolution']);
      }
      return view;
    }

    /**
     * 若传入了投影坐标系需要处理
     * @param options
     * @returns {*}
     * @private
     */

  }, {
    key: '_addProjection',
    value: function _addProjection(options) {
      var projection = '';
      if (options['projection']) {
        if (options['projection'].indexOf('EPSG') > 0) {
          projection = options['projection'];
        } else {
          projection = 'EPSG:' + options['projection'];
        }
      } else {
        projection = 'EPSG:3857';
      }
      return projection;
    }

    /**
     * 添加地图交互
     * @param interactions
     * @returns {*|{concatRepeatedArrays, mergeRepeatedObjects}|Object}
     * @private
     */

  }, {
    key: '_addInteractions',
    value: function _addInteractions(interactions) {
      var doubleClickZoom = interactions['doubleClickZoom'] === true || interactions['doubleClickZoom'] === false ? interactions['doubleClickZoom'] : true;
      var keyboard = interactions['keyboard'] === true || interactions['keyboard'] === false ? interactions['keyboard'] : false;
      var _interaction = ol.interaction.defaults({
        doubleClickZoom: doubleClickZoom,
        keyboard: keyboard
      });
      return _interaction;
    }

    /**
     * 添加地图控制器
     * @param controls
     * @returns {Array}
     * @private
     */

  }, {
    key: '_addControls',
    value: function _addControls(controls) {
      var _controls = [];
      if (controls['addScaleLine']) {
        _controls.push(new ol.control.ScaleLine({
          target: 'hdscalebar'
        }));
      }
      if (controls['addLoading']) {
        _controls.push(new ol.control.Loading());
      }
      if (this.map && _controls && _controls.length > 0) {
        this.map.addControl(_controls);
      }
    }

    /**
     * 获取当前地图对象
     * @returns {ol.Map}
     */

  }, {
    key: 'getMap',
    value: function getMap() {
      return this.map;
    }

    /**
     * 获取当前视图
     * @returns {*}
     */

  }, {
    key: 'getView',
    value: function getView() {
      return this.map.getView();
    }
  }]);

  return HMap;
}();

exports.default = HMap;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=HMap.js.map
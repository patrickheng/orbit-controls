!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){function r(e,t,n){var r=n.positions.map(function(e){var n=t.project(e);return n[1]=p.shape[1]-n[1],n}),o=Math.floor(n.cells.length/2);e.lineCap="round",e.lineJoin="round",e.lineWidth=1.5,e.beginPath(),e.strokeStyle=s[0],i(e,r,n.cells,0,o),e.stroke(),e.beginPath(),e.strokeStyle=s[1],i(e,r,n.cells,o),e.stroke()}var i=e("draw-triangles-2d"),o=e("canvas-loop"),s=["hsl(80, 50%, 50%)","hsl(180, 50%, 50%)"],a=document.querySelector(".canvas"),c=e("2d-context")({alpha:!1,canvas:a}),u=e("primitive-torus")({minorSegments:3,majorSegments:4}),l=e("perspective-camera")({fov:50*Math.PI/180,position:[0,0,5],near:.01,far:100}),f=e("../")({element:a,distanceBounds:[2,100],distance:l.position[2],rotationSpeed:1}),p=o(a).start();p.on("tick",function(){var e=p.shape[0],t=p.shape[1];f.update(l.position,l.direction,l.up);var n=[0,0,e,t];l.viewport=n,l.update(),c.save(),c.scale(p.scale,p.scale),c.fillStyle="#1B1B23",c.fillRect(0,0,e,t),r(c,l,u),c.restore()})},{"../":2,"2d-context":3,"canvas-loop":7,"draw-triangles-2d":17,"perspective-camera":35,"primitive-torus":55}],2:[function(e,t,n){function r(e){function t(){b.on("start",function(e,t){e.preventDefault(),m=!0,g=t}),b.on("end",function(){m=!1}),b.on("move",function(e,t){if(m){var r=t[0]-g[0],i=t[1]-g[1];n(r,i),g[0]=t[0],g[1]=t[1]}}),c(function(e,t){h[2]+=t*x.zoomSpeed},!0)}function n(e,t){var n,r,i=x.element||window;i===document||i===window||i===document.body?(n=window.innerWidth,r=window.innerHeight):(n=i.clientWidth,r=i.clientHeight);var o=2*Math.PI;h[0]-=o*e/n*x.rotateSpeed,h[1]-=o*t/r*x.rotateSpeed}function r(e,t,n){var r=n||p;u(w,r,p),l(y,w);var o=x.distance;f.subtract(d,e,x.target),f.transformQuat(d,d,w);var s=Math.atan2(d[0],d[2]),c=Math.atan2(Math.sqrt(d[0]*d[0]+d[2]*d[2]),d[1]);s+=h[0],c+=h[1],s=a(s,x.thetaBounds[0],x.thetaBounds[1]),c=a(c,x.phiBounds[0],x.phiBounds[1]),c=a(c,v,Math.PI-v),o+=h[2],o=a(o,x.distanceBounds[0],x.distanceBounds[1]);var g=Math.abs(o)<=v?v:o;d[0]=g*Math.sin(c)*Math.sin(s),d[1]=g*Math.cos(c),d[2]=g*Math.sin(c)*Math.cos(s),x.phi=c,x.theta=s,x.distance=o,f.transformQuat(d,d,y),f.add(e,x.target,d),i(t,r,e,x.target);for(var m="number"==typeof x.damping?x.damping:1,b=0;b<h.length;b++)h[b]*=1-m}e=e||{};var h=[0,0,0],d=[0,0,0],g=[0,0],m=!1,w=[0,0,0,1],y=w.slice(),x={update:r,target:e.target||[0,0,0],phi:e.phi||0,theta:e.theta||0,distance:s(e.distance,1),element:e.element,damping:s(e.damping,.25),rotateSpeed:s(e.rotateSpeed,.5),zoomSpeed:s(e.zoomSpeed,.01),phiBounds:e.phiBounds||[0,Math.PI],thetaBounds:e.thetaBounds||[-(1/0),1/0],distanceBounds:e.distanceBounds||[1,1/0]},b=o(window,{filtered:!0,target:x.element});return t(),x}function i(e,t,n,r){f.copy(e,r),f.subtract(e,e,n),f.normalize(e,e),f.cross(h,e,t),f.normalize(h,h)}var o=e("touches"),s=e("defined"),a=e("clamp"),c=e("mouse-wheel"),u=e("quat-from-unit-vec3"),l=e("gl-quat/invert"),f={add:e("gl-vec3/add"),subtract:e("gl-vec3/subtract"),transformQuat:e("gl-vec3/transformQuat"),copy:e("gl-vec3/copy"),normalize:e("gl-vec3/normalize"),cross:e("gl-vec3/cross")},p=[0,1,0],v=1e-10,h=[0,0,0];t.exports=r},{clamp:15,defined:16,"gl-quat/invert":18,"gl-vec3/add":21,"gl-vec3/copy":22,"gl-vec3/cross":23,"gl-vec3/normalize":25,"gl-vec3/subtract":30,"gl-vec3/transformQuat":31,"mouse-wheel":34,"quat-from-unit-vec3":56,touches:57}],3:[function(e,t,n){var r=e("get-canvas-context");t.exports=function(e){return r("2d",e)}},{"get-canvas-context":4}],4:[function(e,t,n){function r(e,t){if("string"!=typeof e)throw new TypeError("must specify type string");if("undefined"==typeof document)return null;t=t||{};var n=t.canvas||document.createElement("canvas");"number"==typeof t.width&&(n.width=t.width),"number"==typeof t.height&&(n.height=t.height);var r,i=t;try{var o=[e];0===e.indexOf("webgl")&&o.push("experimental-"+e);for(var s=0;s<o.length;s++)if(r=n.getContext(o[s],i))return r}catch(a){r=null}return r||null}t.exports=r},{}],5:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];n.apply(this,o)}else if(s(n)){for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];for(u=n.slice(),r=u.length,c=0;r>c;c++)u[c].apply(this,o)}return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned){var n;n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?i(e._events[t])?1:e._events[t].length:0}},{}],6:[function(e,t,n){function r(){l=!1,a.length?u=a.concat(u):f=-1,u.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=u.length;t;){for(a=u,u=[];++f<t;)a&&a[f].run();f=-1,t=u.length}a=null,l=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function s(){}var a,c=t.exports={},u=[],l=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new o(e,t)),1!==u.length||l||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],7:[function(e,t,n){var r=e("canvas-fit"),i=e("raf-loop");t.exports=function(e,t){function n(){o();var t=e.width,n=e.height;a[0]=t/o.scale,a[1]=n/o.scale}if(!e)throw new TypeError("must specify a canvas element");t=t||{};var o=r(e,t.parent,t.scale),s=i(),a=[0,0];return n(),window.addEventListener("resize",function(){n(),s.emit("resize")},!1),Object.defineProperties(s,{scale:{get:function(){return o.scale},set:function(e){o.scale=e}},shape:{get:function(){return a}},parent:{get:function(){return o.parent},set:function(e){o.parent=e}}}),s}},{"canvas-fit":8,"raf-loop":10}],8:[function(e,t,n){function r(e,t,n){function r(){var t=r.parent||e.parentNode;if("function"==typeof t)var n=t(o)||o,a=n[0],c=n[1];else if(t&&t!==document.body)var u=i(t),a=0|u[0],c=0|u[1];else var a=window.innerWidth,c=window.innerHeight;return s?(e.setAttribute("width",a*r.scale+"px"),e.setAttribute("height",c*r.scale+"px")):(e.width=a*r.scale,e.height=c*r.scale),e.style.width=a+"px",e.style.height=c+"px",r}var s="SVG"===e.nodeName.toUpperCase();return e.style.position=e.style.position||"absolute",e.style.top=0,e.style.left=0,r.scale=parseFloat(n||1),r.parent=t,r()}var i=e("element-size");t.exports=r;var o=new Float32Array(2)},{"element-size":9}],9:[function(e,t,n){function r(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var t=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),r=getComputedStyle(e),o=(0|n.height)+i(r.getPropertyValue("margin-top"))+i(r.getPropertyValue("margin-bottom")),s=(0|n.width)+i(r.getPropertyValue("margin-left"))+i(r.getPropertyValue("margin-right"));return t&&document.body.removeChild(e),[s,o]}function i(e){return parseFloat(e)||0}t.exports=r},{}],10:[function(e,t,n){function r(e){return this instanceof r?(this.running=!1,this.last=s(),this._frame=0,this._tick=this.tick.bind(this),void(e&&this.on("tick",e))):new r(e)}var i=e("inherits"),o=e("events").EventEmitter,s=e("right-now"),a=e("raf");t.exports=r,i(r,o),r.prototype.start=function(){return this.running?void 0:(this.running=!0,this.last=s(),this._frame=a(this._tick),this)},r.prototype.stop=function(){return this.running=!1,0!==this._frame&&a.cancel(this._frame),this._frame=0,this},r.prototype.tick=function(){this._frame=a(this._tick);var e=s(),t=e-this.last;this.emit("tick",t),this.last=e}},{events:5,inherits:11,raf:12,"right-now":14}],11:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],12:[function(e,t,n){for(var r=e("performance-now"),i="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],c=i["cancel"+s]||i["cancelRequest"+s],u=0;u<o.length&&!a;u++)a=i[o[u]+"Request"+s],c=i[o[u]+"Cancel"+s]||i[o[u]+"CancelRequest"+s];if(!a||!c){var l=0,f=0,p=[],v=1e3/60;a=function(e){if(0===p.length){var t=r(),n=Math.max(0,v-(t-l));l=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}t.exports=function(e){return a.call(i,e)},t.exports.cancel=function(){c.apply(i,arguments)}},{"performance-now":13}],13:[function(e,t,n){(function(e){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:6}],14:[function(e,t,n){(function(e){t.exports=e.performance&&e.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){function r(e,t,n){return n>t?t>e?t:e>n?n:e:n>e?n:e>t?t:e}t.exports=r},{}],16:[function(e,t,n){t.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},{}],17:[function(e,t,n){t.exports=function(e,t,n,r,i){var o=t;for(r=0|r,i="number"==typeof i?0|i:n.length;i>r&&r<n.length;r++){var s=n[r],a=o[s[0]],c=o[s[1]],u=o[s[2]];e.moveTo(a[0],a[1]),e.lineTo(c[0],c[1]),e.lineTo(u[0],u[1]),e.lineTo(a[0],a[1])}}},{}],18:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],s=n*n+r*r+i*i+o*o,a=s?1/s:0;return e[0]=-n*a,e[1]=-r*a,e[2]=-i*a,e[3]=o*a,e}t.exports=r},{}],19:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],s=n*n+r*r+i*i+o*o;return s>0&&(s=1/Math.sqrt(s),e[0]=n*s,e[1]=r*s,e[2]=i*s,e[3]=o*s),e}t.exports=r},{}],20:[function(e,t,n){t.exports=e("gl-vec4/normalize")},{"gl-vec4/normalize":19}],21:[function(e,t,n){function r(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}t.exports=r},{}],22:[function(e,t,n){function r(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}t.exports=r},{}],23:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=n[0],a=n[1],c=n[2];return e[0]=i*c-o*a,e[1]=o*s-r*c,e[2]=r*a-i*s,e}t.exports=r},{}],24:[function(e,t,n){function r(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}t.exports=r},{}],25:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o),e}t.exports=r},{}],26:[function(e,t,n){function r(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}t.exports=r},{}],27:[function(e,t,n){function r(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}t.exports=r},{}],28:[function(e,t,n){function r(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}t.exports=r},{}],29:[function(e,t,n){function r(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}t.exports=r},{}],30:[function(e,t,n){function r(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}t.exports=r},{}],31:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=n[0],a=n[1],c=n[2],u=n[3],l=u*r+a*o-c*i,f=u*i+c*r-s*o,p=u*o+s*i-a*r,v=-s*r-a*i-c*o;return e[0]=l*u+v*-s+f*-c-p*-a,e[1]=f*u+v*-a+p*-s-l*-c,e[2]=p*u+v*-c+l*-a-f*-s,e}t.exports=r},{}],32:[function(e,t,n){t.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},{}],33:[function(e,t,n){"use strict";function r(e,t){var n=s(getComputedStyle(e).getPropertyValue(t));return n[0]*o(n[1],e)}function i(e,t){var n=document.createElement("div");n.style["font-size"]="128"+e,t.appendChild(n);var i=r(n,"font-size")/128;return t.removeChild(n),i}function o(e,t){switch(t=t||document.body,e=(e||"px").trim().toLowerCase(),(t===window||t===document)&&(t=document.body),e){case"%":return t.clientHeight/100;case"ch":case"ex":return i(e,t);case"em":return r(t,"font-size");case"rem":return r(document.body,"font-size");case"vw":return window.innerWidth/100;case"vh":return window.innerHeight/100;case"vmin":return Math.min(window.innerWidth,window.innerHeight)/100;case"vmax":return Math.max(window.innerWidth,window.innerHeight)/100;case"in":return a;case"cm":return a/2.54;case"mm":return a/25.4;case"pt":return a/72;case"pc":return a/6}return 1}var s=e("parse-unit");t.exports=o;var a=96},{"parse-unit":32}],34:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e&&(n=!!t,t=e,e=window);var r=i("ex",e);e.addEventListener("wheel",function(e){n&&e.preventDefault();var i=e.deltaX||0,o=e.deltaY||0,s=e.deltaZ||0,a=e.deltaMode,c=1;switch(a){case 1:c=r;break;case 2:c=window.innerHeight}return i*=c,o*=c,s*=c,i||o||s?t(i,o,s):void 0})}var i=e("to-px");t.exports=r},{"to-px":33}],35:[function(e,t,n){t.exports=e("./lib/camera-perspective")},{"./lib/camera-perspective":38}],36:[function(e,t,n){var r=e("object-assign"),i=e("ray-3d"),o=e("camera-project"),s=e("camera-unproject"),a=e("./camera-look-at"),c=e("camera-picking-ray"),u=e("gl-vec3/add"),l=e("gl-mat4/multiply"),f=e("gl-mat4/invert"),p=e("gl-mat4/identity"),v=e("gl-vec3/set");t.exports=function(e){function t(){l(y.projView,y.projection,y.view);var e=f(y.invProjView,y.projView);if(!e)throw new Error("camera projection * view is non-invertible")}function n(e){return a(y.direction,y.up,y.position,e),y}function h(){return v(y.position,0,0,0),v(y.direction,0,0,-1),v(y.up,0,1,0),p(y.view),p(y.projection),p(y.projView),p(y.invProjView),y}function d(e){return u(y.position,y.position,e),y}function g(e){var t=new i;return c(t.origin,t.direction,e,y.viewport,y.invProjView),t}function m(e){return o([],e,y.viewport,y.projView)}function w(e){return s([],e,y.viewport,y.invProjView)}e=e||{};var y={projection:p([]),view:p([]),position:e.position||[0,0,0],direction:e.direction||[0,0,-1],up:e.up||[0,1,0],viewport:e.viewport||[-1,-1,1,1],projView:p([]),invProjView:p([])};return r(y,{translate:d,identity:h,lookAt:n,createPickingRay:g,update:t,project:m,unproject:w})}},{"./camera-look-at":37,"camera-picking-ray":39,"camera-project":40,"camera-unproject":43,"gl-mat4/identity":45,"gl-mat4/invert":46,"gl-mat4/multiply":48,"gl-vec3/add":21,"gl-vec3/set":28,"object-assign":50,"ray-3d":51}],37:[function(e,t,n){var r=e("gl-vec3/cross"),i=e("gl-vec3/subtract"),o=e("gl-vec3/normalize"),s=e("gl-vec3/copy"),a=e("gl-vec3/dot"),c=e("gl-vec3/scale"),u=[0,0,0],l=1e-9;t.exports=function(e,t,n,f){i(u,f,n),o(u,u);var p=0===u[0]&&0===u[1]&&0===u[2];if(!p){var v=a(u,t);Math.abs(v-1)<l?c(t,e,-1):Math.abs(v+1)<l&&s(t,e),s(e,u),r(u,e,t),o(u,u),r(t,u,e),o(t,t)}}},{"gl-vec3/copy":22,"gl-vec3/cross":23,"gl-vec3/dot":24,"gl-vec3/normalize":25,"gl-vec3/scale":26,"gl-vec3/subtract":30}],38:[function(e,t,n){var r=e("./camera-base"),i=e("object-assign"),o=e("defined"),s=e("gl-mat4/perspective"),a=e("gl-mat4/lookAt"),c=e("gl-vec3/add");t.exports=function(e){function t(){var e=n.viewport[2]/n.viewport[3];return s(n.projection,n.fov,e,Math.abs(n.near),Math.abs(n.far)),c(u,n.position,n.direction),a(n.view,n.position,u,n.up),l(),n}e=e||{};var n=r(e);n.fov=o(e.fov,Math.PI/4),n.near=o(e.near,1),n.far=o(e.far,100);var u=[0,0,0],l=n.update;return t(),i(n,{update:t})}},{"./camera-base":36,defined:16,"gl-mat4/lookAt":47,"gl-mat4/perspective":49,"gl-vec3/add":21,"object-assign":50}],39:[function(e,t,n){function r(e,t,n,r,c){o(e,n[0],n[1],0),o(t,n[0],n[1],1),i(e,e,r,c),i(t,t,r,c),s(t,t,e),a(t,t)}var i=e("camera-unproject"),o=e("gl-vec3/set"),s=e("gl-vec3/subtract"),a=e("gl-vec3/normalize");t.exports=r},{"camera-unproject":43,"gl-vec3/normalize":25,"gl-vec3/set":28,"gl-vec3/subtract":30}],40:[function(e,t,n){function r(e,t,n,r){var u=n[0],l=n[1],f=n[2],p=n[3],v=s,h=a;o(c,t[0],t[1],t[2],1),i(c,c,r);var d=c[3];return 0!==d&&(c[0]=c[0]/d,c[1]=c[1]/d,c[2]=c[2]/d),e[0]=u+f/2*c[0]+(0+f/2),e[1]=l+p/2*c[1]+(0+p/2),e[2]=(h-v)/2*c[2]+(h+v)/2,e[3]=0===d?0:1/d,e}var i=e("gl-vec4/transformMat4"),o=e("gl-vec4/set"),s=0,a=1,c=[0,0,0,0];t.exports=r},{"gl-vec4/set":41,"gl-vec4/transformMat4":42}],41:[function(e,t,n){function r(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}t.exports=r},{}],42:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*s,e[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*s,e[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*s,e[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*s,e}t.exports=r},{}],43:[function(e,t,n){function r(e,t,n,r){var o=n[0],s=n[1],a=n[2],c=n[3],u=t[0],l=t[1],f=t[2];return u-=o,l=c-l-1,l-=s,e[0]=2*u/a-1,e[1]=2*l/c-1,e[2]=2*f-1,i(e,e,r)}var i=e("./lib/projectMat4");t.exports=r},{"./lib/projectMat4":44}],44:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=n[0],a=n[1],c=n[2],u=n[3],l=n[4],f=n[5],p=n[6],v=n[7],h=n[8],d=n[9],g=n[10],m=n[11],w=n[12],y=n[13],x=n[14],b=n[15],_=1/(r*u+i*v+o*m+b);return e[0]=(r*s+i*l+o*h+w)*_,e[1]=(r*a+i*f+o*d+y)*_,e[2]=(r*c+i*p+o*g+x)*_,e}t.exports=r},{}],45:[function(e,t,n){function r(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}t.exports=r},{}],46:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],u=t[7],l=t[8],f=t[9],p=t[10],v=t[11],h=t[12],d=t[13],g=t[14],m=t[15],w=n*a-r*s,y=n*c-i*s,x=n*u-o*s,b=r*c-i*a,_=r*u-o*a,M=i*u-o*c,j=l*d-f*h,L=l*g-p*h,k=l*m-v*h,E=f*g-p*d,T=f*m-v*d,z=p*m-v*g,q=w*z-y*T+x*E+b*k-_*L+M*j;return q?(q=1/q,e[0]=(a*z-c*T+u*E)*q,e[1]=(i*T-r*z-o*E)*q,e[2]=(d*M-g*_+m*b)*q,e[3]=(p*_-f*M-v*b)*q,e[4]=(c*k-s*z-u*L)*q,e[5]=(n*z-i*k+o*L)*q,e[6]=(g*x-h*M-m*y)*q,e[7]=(l*M-p*x+v*y)*q,e[8]=(s*T-a*k+u*j)*q,e[9]=(r*k-n*T-o*j)*q,e[10]=(h*_-d*x+m*w)*q,e[11]=(f*x-l*_-v*w)*q,e[12]=(a*L-s*E-c*j)*q,e[13]=(n*E-r*L+i*j)*q,e[14]=(d*y-h*b-g*w)*q,e[15]=(l*b-f*y+p*w)*q,e):null}t.exports=r},{}],47:[function(e,t,n){function r(e,t,n,r){var o,s,a,c,u,l,f,p,v,h,d=t[0],g=t[1],m=t[2],w=r[0],y=r[1],x=r[2],b=n[0],_=n[1],M=n[2];return Math.abs(d-b)<1e-6&&Math.abs(g-_)<1e-6&&Math.abs(m-M)<1e-6?i(e):(f=d-b,p=g-_,v=m-M,h=1/Math.sqrt(f*f+p*p+v*v),f*=h,p*=h,v*=h,o=y*v-x*p,s=x*f-w*v,a=w*p-y*f,h=Math.sqrt(o*o+s*s+a*a),h?(h=1/h,o*=h,s*=h,a*=h):(o=0,s=0,a=0),c=p*a-v*s,u=v*o-f*a,l=f*s-p*o,h=Math.sqrt(c*c+u*u+l*l),h?(h=1/h,c*=h,u*=h,l*=h):(c=0,u=0,l=0),e[0]=o,e[1]=c,e[2]=f,e[3]=0,e[4]=s,e[5]=u,e[6]=p,e[7]=0,e[8]=a,e[9]=l,e[10]=v,e[11]=0,e[12]=-(o*d+s*g+a*m),e[13]=-(c*d+u*g+l*m),e[14]=-(f*d+p*g+v*m),e[15]=1,e)}var i=e("./identity");t.exports=r},{"./identity":45}],48:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],c=t[5],u=t[6],l=t[7],f=t[8],p=t[9],v=t[10],h=t[11],d=t[12],g=t[13],m=t[14],w=t[15],y=n[0],x=n[1],b=n[2],_=n[3];return e[0]=y*r+x*a+b*f+_*d,e[1]=y*i+x*c+b*p+_*g,e[2]=y*o+x*u+b*v+_*m,e[3]=y*s+x*l+b*h+_*w,y=n[4],x=n[5],b=n[6],_=n[7],e[4]=y*r+x*a+b*f+_*d,e[5]=y*i+x*c+b*p+_*g,e[6]=y*o+x*u+b*v+_*m,e[7]=y*s+x*l+b*h+_*w,y=n[8],x=n[9],b=n[10],_=n[11],e[8]=y*r+x*a+b*f+_*d,e[9]=y*i+x*c+b*p+_*g,e[10]=y*o+x*u+b*v+_*m,e[11]=y*s+x*l+b*h+_*w,y=n[12],x=n[13],b=n[14],_=n[15],e[12]=y*r+x*a+b*f+_*d,e[13]=y*i+x*c+b*p+_*g,e[14]=y*o+x*u+b*v+_*m,e[15]=y*s+x*l+b*h+_*w,e}t.exports=r},{}],49:[function(e,t,n){function r(e,t,n,r,i){var o=1/Math.tan(t/2),s=1/(r-i);return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*s,e[15]=0,e}t.exports=r},{}],50:[function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}t.exports=Object.assign||function(e,t){for(var n,i,o=r(e),s=1;s<arguments.length;s++){n=arguments[s],i=Object.keys(Object(n));for(var a=0;a<i.length;a++)o[i[a]]=n[i[a]]}return o}},{}],51:[function(e,t,n){function r(e,t){this.origin=e||[0,0,0],this.direction=t||[0,0,-1]}var i=e("ray-triangle-intersection"),o=e("ray-plane-intersection"),s=e("ray-sphere-intersection"),a=e("gl-vec3/copy"),c=[[0,0,0],[0,0,0],[0,0,0]],u=[0,0,0];t.exports=r,r.prototype.set=function(e,t){this.origin=e,this.direction=t},r.prototype.copy=function(e){a(this.origin,e.origin),a(this.direction,e.direction)},r.prototype.clone=function(){var e=new r;return e.copy(this),e},r.prototype.intersectsSphere=function(e,t){return s(u,this.origin,this.direction,e,t)},r.prototype.intersectsPlane=function(e,t){return o(u,this.origin,this.direction,e,t)},r.prototype.intersectsTriangle=function(e){return i(u,this.origin,this.direction,e)},r.prototype.intersectsTriangleCell=function(e,t){var n=e[0],r=e[1],i=e[2];return c[0]=t[n],c[1]=t[r],c[2]=t[i],this.intersectsTriangle(c)}},{"gl-vec3/copy":22,"ray-plane-intersection":52,"ray-sphere-intersection":53,"ray-triangle-intersection":54}],52:[function(e,t,n){function r(e,t,n,r,u){var l=i(n,r);if(0!==l){var f=-(i(t,r)+u)/l;return 0>f?null:(s(c,n,f),o(e,t,c))}return i(r,t)+u===0?a(e,t):null}var i=e("gl-vec3/dot"),o=e("gl-vec3/add"),s=e("gl-vec3/scale"),a=e("gl-vec3/copy");t.exports=r;var c=[0,0,0]},{"gl-vec3/add":21,"gl-vec3/copy":22,"gl-vec3/dot":24,"gl-vec3/scale":26}],53:[function(e,t,n){function r(e,t,n,r,f){s(l,r,t);var p=o(n,l);if(0>p)return null;a(l,t,n,p);var v=i(r,l),h=f*f;return v>h?null:(c(e,n,p-Math.sqrt(h-v)),u(e,e,t))}var i=e("gl-vec3/squaredDistance"),o=e("gl-vec3/dot"),s=e("gl-vec3/subtract"),a=e("gl-vec3/scaleAndAdd"),c=e("gl-vec3/scale"),u=e("gl-vec3/add"),l=[0,0,0];t.exports=r},{"gl-vec3/add":21,"gl-vec3/dot":24,"gl-vec3/scale":26,"gl-vec3/scaleAndAdd":27,"gl-vec3/squaredDistance":29,"gl-vec3/subtract":30}],54:[function(e,t,n){function r(e,t,n,r){s(c,r[1],r[0]),s(u,r[2],r[0]),i(f,n,u);var v=o(c,f);if(a>v)return null;s(l,t,r[0]);var h=o(l,f);if(0>h||h>v)return null;i(p,l,c);var d=o(n,p);if(0>d||h+d>v)return null;var g=o(u,p)/v;return e[0]=t[0]+g*n[0],e[1]=t[1]+g*n[1],e[2]=t[2]+g*n[2],e}var i=e("gl-vec3/cross"),o=e("gl-vec3/dot"),s=e("gl-vec3/subtract"),a=1e-6,c=[0,0,0],u=[0,0,0],l=[0,0,0],f=[0,0,0],p=[0,0,0];t.exports=r},{"gl-vec3/cross":23,"gl-vec3/dot":24,"gl-vec3/subtract":30}],55:[function(e,t,n){function r(e){e=e||{};for(var t=i(e.majorRadius,1),n=i(e.minorRadius,.25),r=i(e.minorSegments,32),a=i(e.majorSegments,64),c=i(e.arc,2*Math.PI),u=2*Math.PI,l=[0,0,0],f=[],p=[],v=[],h=[0,0,0],d=[],g=0;r>=g;g++)for(var m=0;a>=m;m++){var w=m/a*c,y=g/r*u;l[0]=t*Math.cos(w),l[1]=t*Math.sin(w);var x=[(t+n*Math.cos(y))*Math.cos(w),(t+n*Math.cos(y))*Math.sin(w),n*Math.sin(y)];p.push(x),o(h,x,l),s(h,h),d.push(h.slice()),f.push([m/a,g/r])}for(var g=1;r>=g;g++)for(var m=1;a>=m;m++){var b=(a+1)*g+m-1,_=(a+1)*(g-1)+m-1,M=(a+1)*(g-1)+m,j=(a+1)*g+m;v.push([b,_,j]),v.push([_,M,j])}return{uvs:f,cells:v,normals:d,positions:p}}var i=e("defined"),o=e("gl-vec3/subtract"),s=e("gl-vec3/normalize");t.exports=r},{defined:16,"gl-vec3/normalize":25,"gl-vec3/subtract":30}],56:[function(e,t,n){function r(e,t,n){var r=i(t,n)+1;return u>r?(r=0,Math.abs(t[0])>Math.abs(t[2])?o(c,-t[1],t[0],0):o(c,0,-t[2],t[1])):a(c,t,n),e[0]=c[0],e[1]=c[1],e[2]=c[2],e[3]=r,s(e,e),e}var i=e("gl-vec3/dot"),o=e("gl-vec3/set"),s=e("gl-quat/normalize"),a=e("gl-vec3/cross"),c=[0,0,0],u=1e-6;t.exports=r},{"gl-quat/normalize":20,"gl-vec3/cross":23,"gl-vec3/dot":24,"gl-vec3/set":28}],57:[function(e,t,n){function r(e,t){var n=e.clientX||0,r=e.clientY||0,i=c(t);return[n-i.left,r-i.top]}function i(e,t){return Array.prototype.slice.call(e).filter(function(e){return e.target===t})[0]||e[0]}function o(e,t){for(var n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return null}function s(e,t){return function(n){t?e.addEventListener(n.type,n.listener):e.removeEventListener(n.type,n.listener)}}function a(e){return e.replace(/^(touch|mouse)/,"").replace(/up$/,"end").replace(/down$/,"start")}function c(e){return e===window||e===document||e===document.body?f:e.getBoundingClientRect()}var u=e("events/"),l=["touchstart","touchmove","touchend","touchcancel","mousedown","mousemove","mouseup"],f={left:0,top:0};t.exports=function(e,t){function n(e,t){var n;return f&&/^touch(end|cancel)/.test(t)?(n=o(e.changedTouches,f.identifier||0),n&&(f=null)):!f&&/^touchstart/.test(t)?f=n=i(e.changedTouches,c.target):f&&(n=o(e.changedTouches,f.identifier||0)),n}t=t||{},e=e||window;var c=new u;c.target=t.target||e;var f=null,p=t.filtered,v=l;"string"==typeof t.type&&(v=l.filter(function(e){return 0===e.indexOf(t.type)}));var h=v.map(function(e){var o=a(e),s=function(s){var a=s;if(/^touch/.test(e)&&(/^touchend$/.test(e)&&t.preventSimulated!==!1&&s.preventDefault(),a=p?n(s,e):i(s.changedTouches,c.target)),a){var u=r(a,c.target);c.emit(o,s,u)}};return{type:e,listener:s}});return c.enable=function(){return h.forEach(s(e,!0)),c},c.disable=function(){return h.forEach(s(e,!1)),c},c.enable(),c}},{"events/":58}],58:[function(e,t,n){arguments[4][5][0].apply(n,arguments)},{dup:5}]},{},[1]);
webpackHotUpdate(0,{1060:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=function(e){var t=e.photo;e.handleClick;return a.a.createElement("span",{className:"media"},a.a.createElement("a",{target:"_blank",href:t.url},a.a.createElement("img",{className:"media-object",height:"99",width:"99",src:t.url}),a.a.createElement("div",{className:"tooltip"},a.a.createElement("span",{className:"caption"},"'placeholder'"))))},i=function(e){var t=e.photos,n=e.handleClick;return a.a.createElement("div",{className:"photo-strip row"},t.map((function(e,t){return a.a.createElement(c,{photo:e,key:e.id,handleClick:n})})))};n(1056);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=n(1059),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,r,o=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={currentPic:h[0]},t}return t=c,(n=[{key:"handleClick",value:function(e){this.setState({currentPic:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"module"},a.a.createElement("h2",null,"Photos"),a.a.createElement("div",{className:"grid"},a.a.createElement("div",{className:"thumbnail row"},a.a.createElement(i,{photos:h,handleClick:this.handleClick.bind(this)})),a.a.createElement("div",{className:"seeMore"},a.a.createElement("a",{className:"btn"},a.a.createElement("img",{src:"https://imdbpics.s3.us-east-2.amazonaws.com/grid+button.png",height:"13.5"})),a.a.createElement("a",{className:"link"},"See all 141 photos"),a.a.createElement("span",{className:"arrows"}," »"))))}}])&&u(t.prototype,n),r&&u(t,r),c}(a.a.Component);Object(o.render)(a.a.createElement(y,null),document.getElementById("container")),e.hot.accept()}});
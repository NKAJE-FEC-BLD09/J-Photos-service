webpackHotUpdate(0,{1060:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),o=function(e){var t=e.photo;e.handlePicClick;return c.a.createElement("span",{className:"media"},c.a.createElement("a",{target:"_blank",href:t.url},c.a.createElement("img",{className:"media-object",height:"99",width:"99",title:t.caption,src:t.url})))},i=function(e){var t=e.photos,n=e.handlePicClick;return c.a.createElement("div",{className:"photo-strip row"},t.map((function(e,t){return c.a.createElement(o,{photo:e,key:e.id,handlePicClick:n})})))};n(1056);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var c=h(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=n(3),d=n(5),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,e);var t,n,r,a=f(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).state={pics:y[5],currentPic:y[0],currentFlick:d[0]},t.handleFlickPick=t.handleFlickPick.bind(m(t)),t}return t=o,(n=[{key:"handlePicClick",value:function(e){this.setState({currentPic:e})}},{key:"handleFlickPick",value:function(e){this.setState({currentFlick:e}),y.filter((function(e){return d}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"module"},c.a.createElement("h2",null,"Photos"),c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"thumbnail row"},c.a.createElement(i,{photos:this.state.pics,handlePicClick:this.handlePicClick.bind(this)})),c.a.createElement("div",{className:"seeMore"},c.a.createElement("a",{className:"btn"},c.a.createElement("img",{src:"https://imdbpics.s3.us-east-2.amazonaws.com/grid+button.png",height:"13.5"})),c.a.createElement("a",{className:"link"},"See all 141 photos"),c.a.createElement("span",{className:"arrows"}," »"))))}}])&&u(t.prototype,n),r&&u(t,r),o}(c.a.Component);Object(a.render)(c.a.createElement(b,null),document.getElementById("container")),e.hot.accept()}});
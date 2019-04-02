/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\n    margin:0;\n}\n#game-canvas{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    margin: 0;\n}\n\n.modal {\n    display: flex; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n\n    font-size: 20px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    \n  }\n\n  h1 {\n    font-size: 100px;\n    font-family: 'Mr Dafoe', cursive;\n    margin-bottom: 0px;\n  }\n  p{\n      margin: 10px 0;\n  }\n\n  \n  /* Modal Content */\n  .modal-content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        background-color: #fefefe;\n        margin: auto;\n        padding: 20px;\n        /* border: 1px solid #888; */\n        width: 50%;\n        min-height: 30%;\n        border-radius: 10px;\n        box-shadow:0 5px 5px rgba(0, 0, 0, .3) ;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n  .menu{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n  }\n\n  #main-menu{\n  }\n\n  #over-menu{\n      display: none;\n  }\n\n  .btn{\n      padding: 8px 15px;\n      margin: 30px 0;\n      border-radius: 10px;\n      font-family: inherit;\n      font-size: 28px;\n      font-weight: 700;\n\n      width: 100%;\n\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _collision_sphere = __webpack_require__(/*! ./collision_sphere */ "./src/collision_sphere.js");

var _collision_sphere2 = _interopRequireDefault(_collision_sphere);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrowImage = new Image();
arrowImage.src = './assets/arrow.png';

var Arrow = function () {
    function Arrow(x, y, vect) {
        _classCallCheck(this, Arrow);

        this.x = x;
        this.y = y;
        this.dx = -(vect.vel / CONST.VEL_DIV) * Math.cos(vect.theta);
        this.dy = -(vect.vel / CONST.VEL_DIV) * Math.sin(vect.theta);
        this.arrow_length = 40;
        this.landed = false;
        this.hitValue = 0;
        this.hitBox = new _collision_sphere2.default(0, 0, 5);

        this.lastPoint = { x: x, y: y, ttl: CONST.ARROW_TRAIL_TTL };
        this.trailPoints = [];
    }

    _createClass(Arrow, [{
        key: 'update',
        value: function update(c, targets) {
            var _this = this;

            this.trailPoints.push({ x: this.x, y: this.y, ttl: CONST.ARROW_TRAIL_TTL });
            var hit = false;
            this.hitValue = 0;
            targets.forEach(function (target) {
                if (_this.targetHit(target)) {
                    hit = true;
                    _this.hitValue += target.value;
                }
            });

            var theta = Math.atan2(this.dy, this.dx);
            if (Math.abs(theta) < .45 && Math.round(this.y) >= CONST.FLOOR && this.dy > 0) {
                if (this.dy > 0) {
                    this.dy = -this.dy / 1.5;
                    if (this.dy < .1 && this.dy > -.1) {
                        this.dy = 0;
                    }
                }

                this.dx = this.dx / 1.2;
            } else if (this.y >= CONST.FLOOR || hit) {
                this.setLanded();
            } else {
                this.dx += this.dx > 0 ? -.01 : 0;
                this.dy += CONST.GRAVITY;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw(c);
            this.hitBox.update(c);
        }
    }, {
        key: 'setLanded',
        value: function setLanded() {
            if (this.landed === false) {

                this.landed = Math.atan2(this.dy, this.dx);
            }
            this.dy = 0;
            this.dx = 0;
        }
    }, {
        key: 'targetHit',
        value: function targetHit(target) {
            var arrowHB = this.hitBox;
            var targetHB = target.hitBox;

            var distX = Math.abs(arrowHB.x - targetHB.x - targetHB.w / 2);
            var distY = Math.abs(arrowHB.y - targetHB.y - targetHB.h / 2);

            if (distX > targetHB.w / 2 + arrowHB.r) {
                return false;
            }
            if (distY > targetHB.h / 2 + arrowHB.r) {
                return false;
            }

            if (distX <= targetHB.w / 2) {
                return true;
            }
            if (distY <= targetHB.h / 2) {
                return true;
            }

            var dx = distX - targetHB.w / 2;
            var dy = distY - targetHB.h / 2;
            return dx * dx + dy * dy <= arrowHB.r * arrowHB.r;
        }
    }, {
        key: 'draw',
        value: function draw(c) {
            var _this2 = this;

            var theta = void 0;
            var h = 9;
            var w = 69;

            if (this.landed === false) {
                theta = Math.atan2(this.dy, this.dx);
            } else {
                theta = this.landed;
            }

            c.beginPath();
            c.strokeStyle = "rgba(100,100,255,.3)";
            c.lineWidth = 2;
            var firstPoint = this.trailPoints[0];
            c.moveTo(firstPoint.x, firstPoint.y);
            this.trailPoints.forEach(function (point) {
                c.lineTo(point.x, point.y);
                point.ttl = point.ttl - 1;
                if (point.ttl <= 0) {
                    _this2.trailPoints.shift();
                }
            });
            c.lineTo(this.x, this.y);

            c.stroke();
            c.closePath();

            var x2 = this.x + w * Math.cos(theta);
            var y2 = this.y + w * Math.sin(theta);
            this.hitBox.x = x2;
            this.hitBox.y = y2;

            c.save();
            c.translate(this.x, this.y);
            c.rotate(theta);

            if (!this.landed) {
                c.drawImage(arrowImage, 0, 0, w, h, 0, -h / 2, w, h);
            } else {
                c.drawImage(arrowImage, 0, 0, w - 10, h, 0, -h / 2, w, h);
            }
            c.restore();
        }
    }]);

    return Arrow;
}();

module.exports = Arrow;

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import Cloud from './cloud';


var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _arrow = __webpack_require__(/*! ./arrow */ "./src/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

var _target = __webpack_require__(/*! ./target */ "./src/target.js");

var _target2 = _interopRequireDefault(_target);

var _sprite = __webpack_require__(/*! ./sprite */ "./src/sprite.js");

var _sprite2 = _interopRequireDefault(_sprite);

var _style = __webpack_require__(/*! ./style.css */ "./src/style.css");

var _style2 = _interopRequireDefault(_style);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Modal
// Get the modal
var modal = document.getElementById('myModal');

// Get Contents
var mainMenu = document.getElementById('main-menu');
var overMenu = document.getElementById('over-menu');

// Get the button that opens the modal
var mainMenuBtn = document.getElementById("mainMenuBtn");
var overMenuBtn = document.getElementById("overMenuBtn");

// Final Score
var finalScoreElement = document.getElementById("final-score");

// When the user clicks the button, open the modal 
mainMenuBtn.onclick = function () {
    modal.style.display = "none";
    showMenu = false;
};
overMenuBtn.onclick = function () {
    modal.style.display = "none";
    over = false;
    init();
};

var canvas = document.querySelector('#game-canvas');
var c = canvas.getContext('2d');

var translated = {
    x: 0,
    y: 0
};
var lastPos = {
    x: 0,
    y: 0
};
var numArrows = CONST.NUM_ARROWS;

var hudX = 0;
var waiting = false;
var mouseLock = false;
canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

var drag = {
    mousedown: false,
    max: CONST.VECTOR_LENGTH,
    x: 0,
    y: 0,
    vel: 0,
    theta: 0
};

// GLOBAL VARS
// Scenery
var trees = void 0;
// Session
var arrows = void 0;
var points = void 0;
var distance = 0.00;
var targets = void 0;
var ranges = void 0;
var arrow = void 0;

// Implementation
var dragLine = void 0;

// DOM
// Nothing here yet

var init = function init() {
    targets = [];
    arrows = [];
    points = 0;
    trees = [];
    resetHud();

    points = 0;
    arrows = [];
    numArrows = CONST.NUM_ARROWS;

    // Targets
    var rand = Math.random();
    ranges = [];
    for (var i = 1; i < 5; i++) {
        ranges.push(3000 * i + 3000 * rand);
    }
    targets.push(new _target2.default(ranges[0], 0, 100));
    targets.push(new _target2.default(ranges[1], 0, 500));
    targets.push(new _target2.default(ranges[2], 0, 1000));
    targets.push(new _target2.default(ranges[3], 0, 1000));

    // Scenery Sprites
    var path = './assets/foliage.png';
    var image = new Image();
    image.src = path;
    var treesOptions = [{
        sx: 2,
        sy: 101,
        sw: 61,
        sh: 139,
        x: 0,
        y: 0,
        w: 103,
        h: 236
    }, {
        sx: 70,
        sy: 107,
        sw: 57,
        sh: 133,
        x: 0,
        y: 0,
        w: 96,
        h: 226
    }, {
        sx: 135,
        sy: 132,
        sw: 48,
        sh: 106,
        x: 0,
        y: 0,
        w: 81,
        h: 180
    }];
    for (var _i = 0; _i < 10; _i++) {
        var index = Math.floor(Math.random() * treesOptions.length);
        var to = Object.assign({}, treesOptions[index]);
        to.x = Math.random() * CONST.WORLD_X / 2;
        to.y = CONST.FLOOR - to.h + 20;
        var tree = new _sprite2.default(image, to);
        trees.push(tree);
    }
};

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('mousedown', function (event) {
    if (showMenu || over) {
        // Do nothing

    } else if (!mouseLock) {
        arrow = null;
        c.translate(translated.x, translated.y);
        translated.x = 0;
        translated.y = 0;

        drag.mousedown = true;
        drag.x = event.clientX;
        drag.y = event.clientY;

        lastPos.x = innerWidth / 2;
        lastPos.y = CONST.FLOOR - 1;
    }
});

addEventListener('mouseup', function (event) {
    if (showMenu || over) {} else if (!mouseLock) {
        numArrows--;
        drag.mousedown = false;
        dragLine = drag;
        delete drag.mousedown;
        arrow = new _arrow2.default(innerWidth / 10, CONST.FLOOR - 160, dragLine);

        arrows.push(arrow);

        lastPos.x = innerWidth / 2;
        lastPos.y = CONST.FLOOR - 10;
        waiting = true;
        mouseLock = true;
    }
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

var myImage = new Image();
myImage.src = './assets/bow.png';
// myImage.onload = function() { drawBow();} I

function drawBow(x, y) {
    c.save();
    var mD = drag.mousedown ? 109 : 0;
    var sX = Math.floor(1119 * drag.vel / 100 / 109) * 109 + mD;
    var sY = sX > 545 ? 140 : 0;
    sX = sX % 654;
    c.translate(x + 109 / 2, y + 140 / 2);
    c.rotate(-drag.degs * Math.PI / 180);
    c.drawImage(myImage, sX, sY, 109, 140, -109 / 2, -140 / 2, 109, 140);
    c.restore();
}

var mouseDrag = function mouseDrag(c) {
    var x = mouse.x;
    var y = mouse.y;
    var dist = _utils2.default.distance(drag.x, drag.y, x, y);

    var theta = _utils2.default.angle(drag.x, drag.y, x, y);
    var degs = _utils2.default.angle(x, y, drag.x, drag.y);
    degs *= -180 / Math.PI;
    if (dist > drag.max) {
        // Math.pow(drag.max, 2)
        x = drag.x + drag.max * Math.cos(theta);
        y = drag.y + drag.max * Math.sin(theta);
        dist = drag.max;
    }
    var vel = dist / drag.max * 100;
    c.beginPath();
    c.moveTo(drag.x, drag.y);
    c.lineTo(x, y);
    c.strokeStyle = "black";
    c.stroke();
    c.closePath();
    c.fillStyle = "black";
    c.fillText(Math.round(100 * degs) / 100, drag.x, drag.y);
    c.fillText(Math.round(100 * vel) / 100, x, y);

    drag.degs = degs;
    drag.vel = vel;
    drag.theta = theta;
};

var Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);
    }

    _createClass(Menu, null, [{
        key: 'handleClick',
        value: function handleClick(x, y) {
            if (x > innerWidth / 2 - 150 && x < innerWidth / 2 - 150 + 300 && y >= innerHeight / 2 - 60 && y < innerHeight / 2) {

                setTimeout(function () {
                    if (showMenu) {
                        showMenu = false;
                    } else if (over) {
                        over = false;
                        init();
                    }
                }, 200);
            }
        }
    }, {
        key: 'over',
        value: function over(c) {
            finalScoreElement.innerHTML = points;
            mainMenu.style.display = "none";
            overMenu.style.display = "flex";
            modal.style.display = "flex";
        }
    }]);

    return Menu;
}();

var resetHud = function resetHud() {
    c.translate(translated.x, translated.y);
    translated.x = 0;
    translated.y = 0;
    hudX = innerWidth / 2;
    mouseLock = false;
};

var createMountainRange = function createMountainRange(mountainAmount, height, color) {
    for (var i = 0; i < mountainAmount; i++) {
        var mountainWidth = innerWidth / mountainAmount;
        var x = hudX - (1000 + hudX / (100 / (i + 1)));
        c.beginPath();
        c.moveTo(x + i * mountainWidth, CONST.FLOOR);
        c.lineTo(x + i * mountainWidth + mountainWidth, CONST.FLOOR);
        c.lineTo(x + i * mountainWidth + mountainWidth / 2, CONST.FLOOR - height);
        c.lineTo(x + i * mountainWidth, CONST.FLOOR);
        var backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight);
        backgroundGradient.addColorStop(1, color);
        backgroundGradient.addColorStop(0, 'rgba(255,255,255, 1)');
        c.fillStyle = backgroundGradient;
        // c.stroke();
        c.fill();
        c.closePath();
    }
};

var showMenu = true;
var over = false;
// Animation Loop
function animate() {
    c.clearRect(translated.x, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    // Sky
    c.beginPath();
    var backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight);
    backgroundGradient.addColorStop(0, 'rgba(115, 175, 246, .8)');
    backgroundGradient.addColorStop(1, 'rgba(255,255,255, .4)');
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, CONST.WORLD_X, CONST.FLOOR);
    // c.fill()
    c.closePath();

    // Mountains
    createMountainRange(1, 300, 'rgba(115, 175, 246, .2)');
    createMountainRange(2, 250, 'rgba(115, 175, 246, 1)');
    createMountainRange(3, 100, 'rgba(115, 175, 246, 1)');

    // Ground
    c.beginPath();
    c.rect(0, CONST.FLOOR, CONST.WORLD_X, 300);
    c.fillStyle = 'rgba(97, 51, 21, 1)';
    c.fill();
    c.closePath();

    // Foliage
    trees.forEach(function (tree) {
        return tree.draw(c);
    });

    // Ranges
    c.fillText('Target Ranges:', 50, 150);

    ranges.forEach(function (range, i) {
        var y = (i + 1) * 50 + 150;
        c.fillText(Math.round(range / 100) + ' M', 200, y);
    });

    if (over) {
        over = true;
        Menu.over(c);
    }

    var deltaX = 0;
    var deltaY = 0;
    if (arrow && arrow.x > innerWidth / 2 && arrow.landed === false) {

        deltaX = arrow.x - lastPos.x;
        deltaY = arrow.y - lastPos.y;
        translated.x += deltaX;
        lastPos.x = arrow.x;

        distance = arrow.x;
    } else if (arrow && arrow.landed !== false) {
        setTimeout(function () {
            resetHud();
            if (numArrows <= 0) over = true;
        }, 2000);

        hudX = arrow.x;
        waiting = false;
        arrow = null;
    }

    c.translate(-deltaX, 0);

    // HUD Text
    c.beginPath();
    c.fillStyle = "black";
    c.strokeStyle = 'rgba(0,0,0,1)';
    c.font = "30px Arial";

    // Scanning Text
    if (waiting) {
        hudX = arrow ? Math.max(arrow.x, innerWidth / 2) : innerWidth / 2;
    }
    // Distance
    c.fillText(Math.round(distance / 100) + ' M', hudX, 50);
    // Score
    c.fillText(points + ' Points', hudX + innerWidth / 4, 50);
    // Remaining arrows
    c.fillText(numArrows + ' Arrows', hudX - innerWidth / 4, 50);

    c.stroke();
    c.closePath();

    points = 0;
    targets.forEach(function (target) {
        target.update(c);
    });
    arrows.forEach(function (arrow) {
        points += arrow.hitValue;
        arrow.update(c, targets);
    });
    drawBow(innerWidth / 10, CONST.FLOOR - 200);

    if (drag.mousedown) {
        mouseDrag(c);
    }
}

init();
animate();

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collider = function () {
    function Collider(x, y) {
        _classCallCheck(this, Collider);

        this.x = x;
        this.y = y;
    }

    _createClass(Collider, [{
        key: "update",
        value: function update(ctx) {
            this.draw(ctx);
        }
    }]);

    return Collider;
}();

module.exports = Collider;

/***/ }),

/***/ "./src/collision_box.js":
/*!******************************!*\
  !*** ./src/collision_box.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collider = __webpack_require__(/*! ./collider */ "./src/collider.js");

var _collider2 = _interopRequireDefault(_collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollisionBox = function (_Collider) {
    _inherits(CollisionBox, _Collider);

    function CollisionBox(x, y, w, h) {
        _classCallCheck(this, CollisionBox);

        var _this = _possibleConstructorReturn(this, (CollisionBox.__proto__ || Object.getPrototypeOf(CollisionBox)).call(this, x, y));

        _this.w = w;
        _this.h = h;
        return _this;
    }

    _createClass(CollisionBox, [{
        key: 'draw',
        value: function draw(ctx) {

            // ctx.beginPath()
            // ctx.rect(this.x, this.y, this.w, this.h)
            // ctx.lineWidth = 1;
            // ctx.strokeStyle = 'red'
            // ctx.stroke();
            // ctx.closePath();
        }
    }]);

    return CollisionBox;
}(_collider2.default);

module.exports = CollisionBox;

/***/ }),

/***/ "./src/collision_sphere.js":
/*!*********************************!*\
  !*** ./src/collision_sphere.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collider = __webpack_require__(/*! ./collider */ "./src/collider.js");

var _collider2 = _interopRequireDefault(_collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollisionSphere = function (_Collider) {
    _inherits(CollisionSphere, _Collider);

    function CollisionSphere(x, y, r) {
        _classCallCheck(this, CollisionSphere);

        var _this = _possibleConstructorReturn(this, (CollisionSphere.__proto__ || Object.getPrototypeOf(CollisionSphere)).call(this, x, y));

        _this.r = r;
        return _this;
    }

    _createClass(CollisionSphere, [{
        key: 'draw',
        value: function draw(ctx) {

            // ctx.beginPath()
            // ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
            // ctx.lineWidth = 1;
            // ctx.strokeStyle = 'red'
            // ctx.stroke();
            // ctx.closePath();
        }
    }]);

    return CollisionSphere;
}(_collider2.default);

module.exports = CollisionSphere;

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WORLD_X = exports.WORLD_X = 100000;
var GROUND_LINE = exports.GROUND_LINE = innerHeight / 4;
var FLOOR = exports.FLOOR = innerHeight - GROUND_LINE;
var VECTOR_LENGTH = exports.VECTOR_LENGTH = 200;
var VEL_DIV = exports.VEL_DIV = 1.5;
var GRAVITY = exports.GRAVITY = .3;
var PARTICLE_LIFE = exports.PARTICLE_LIFE = 1000;
var NUM_ARROWS = exports.NUM_ARROWS = 10;
var ARROW_TRAIL_TTL = exports.ARROW_TRAIL_TTL = 15;

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
    function Sprite(image, options) {
        _classCallCheck(this, Sprite);

        this.options = options;
        this.image = image;
    }

    _createClass(Sprite, [{
        key: "draw",
        value: function draw(ctx) {
            var _options = this.options,
                sx = _options.sx,
                sy = _options.sy,
                sw = _options.sw,
                sh = _options.sh,
                x = _options.x,
                y = _options.y,
                w = _options.w,
                h = _options.h;

            ctx.drawImage(this.image, sx, sy, sw, sh, x, y, w, h);
        }
    }]);

    return Sprite;
}();

module.exports = Sprite;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collision_box = __webpack_require__(/*! ./collision_box */ "./src/collision_box.js");

var _collision_box2 = _interopRequireDefault(_collision_box);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Maybe changing hitbox to circle
// Offset hitbox? 

var Target = function () {
    function Target(x, y, value) {
        _classCallCheck(this, Target);

        this.x = x;
        this.y = CONST.FLOOR - 20 + y;
        this.w = 30;
        this.h = 80;
        this.hitBox = new _collision_box2.default(this.x, this.y, this.w, this.h);
        this.value = value;
        this.image = new Image();
        this.image.src = './assets/target.png';
    }

    _createClass(Target, [{
        key: 'update',
        value: function update(ctx) {
            this.changeY();
            this.draw(ctx);
            this.hitBox.update(ctx);
        }
    }, {
        key: 'changeY',
        value: function changeY() {
            var newY = CONST.FLOOR - 100 - 20;
            this.y = newY;
            this.hitBox.y = newY;
        }
    }, {
        key: 'draw',
        value: function draw(ctx) {

            ctx.drawImage(this.image, 282, 38, 548, 934, this.x - 40, this.y - 20, 109, 186);
            ctx.fillStyle = "white";
            ctx.fillText('' + Math.round(this.x / 100), this.x, this.y + 200);

            // ctx.beginPath()
            // ctx.rect(this.x, this.y, this.w, this.h);
            // ctx.stroke();
            // ctx.closePath();
        }
    }]);

    return Target;
}();

module.exports = Target;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    // if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance, angle: angle };

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
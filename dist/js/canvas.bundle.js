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
arrowImage.src = '../assets/arrow.png';

var Arrow = function () {
    function Arrow(x, y, vect) {
        _classCallCheck(this, Arrow);

        this.x = x;
        this.y = y;
        this.dx = -(vect.vel / CONST.VEL_DIV) * Math.cos(vect.theta);
        this.dy = -(vect.vel / CONST.VEL_DIV) * Math.sin(vect.theta);
        this.arrow_length = 40;
        this.landed = false;
        this.hitBox = new _collision_sphere2.default(0, 0, 5);
    }

    _createClass(Arrow, [{
        key: 'update',
        value: function update(ctx, targets) {
            var _this = this;

            var hit = false;
            targets.forEach(function (target) {
                if (_this.targetHit(target)) {
                    hit = true;
                }
            });
            var theta = Math.atan2(this.dy, this.dx);
            // if ()
            if (Math.abs(theta) < .30 && this.y > innerHeight - CONST.FLOOR) {
                this.dy = -this.dy / 1.5;
                this.dx = this.dx / 2;
                if (this.dy < .1 && this.dy > -.1) {
                    this.dy = 0;
                }
            } else if (this.y > innerHeight - CONST.FLOOR || hit) {

                this.setLanded();
            } else {

                this.dy += CONST.GRAVITY;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw(ctx);
            this.hitBox.update(ctx);
        }
    }, {
        key: 'setLanded',
        value: function setLanded() {
            if (!this.landed) {
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
        value: function draw(ctx) {
            var theta = void 0;
            var h = 9;
            var w = 69;

            if (!this.landed) {
                theta = Math.atan2(this.dy, this.dx);
            } else {
                theta = this.landed;
            }

            var x2 = this.x + w * Math.cos(theta);
            var y2 = this.y + w * Math.sin(theta);
            console.log(x2 + ' ' + this.x);
            this.hitBox.x = x2;
            this.hitBox.y = y2;

            ctx.save();
            ctx.translate(this.x + w / 2, this.y + h / 2);
            // console.log(drag.degs * Math.PI / 180)
            ctx.rotate(theta);
            // c.drawImage(myImage, sX,sY, w, h, -w/2, -h/2, w, h)
            ctx.drawImage(arrowImage, 0, 0, w, h, -w / 2, -h / 2, w, h);
            ctx.restore();

            // ctx.beginPath()
            // ctx.moveTo(this.x, this.y)
            // ctx.lineTo(x2, y2)
            // ctx.strokeStyle = "black"
            // ctx.lineWidth = 5
            // ctx.stroke()
            // ctx.closePath();
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


var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _arrow = __webpack_require__(/*! ./arrow */ "./src/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

var _target = __webpack_require__(/*! ./target */ "./src/target.js");

var _target2 = _interopRequireDefault(_target);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var translated = { x: 0, y: 0 };
var lastPos = { x: 0, y: 0 };
var arrows = [];
canvas.width = innerWidth;
canvas.height = innerHeight;

// c.scale(1,-1)
// c.translate(0,)
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2

    // Constants
};var FLOOR = CONST.FLOOR;
var VECTOR_LENGTH = CONST.VECTOR_LENGTH;

var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

var drag = {
    mousedown: false,
    max: VECTOR_LENGTH,
    x: 0,
    y: 0,
    vel: 0,
    theta: 0
};

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('mousedown', function (event) {
    c.translate(translated.x, translated.y);
    translated.x = 0;
    translated.y = 0;

    drag.mousedown = true;
    drag.x = event.clientX;
    drag.y = event.clientY;

    lastPos.x = innerWidth / 2;
    lastPos.y = innerHeight - FLOOR - 1;
    // arrow = new Arrow(0 ,0, 0, 0)

    // c.restore()
});

addEventListener('mouseup', function (event) {

    drag.mousedown = false;
    dragLine = drag;
    delete drag.mousedown;
    arrow = new _arrow2.default(innerWidth / 2, innerHeight - FLOOR - 160, dragLine);

    arrows.push(arrow);

    lastPos.x = innerWidth / 2;
    lastPos.y = innerHeight - FLOOR - 10;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// Objects
function Object(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

Object.prototype.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
};

Object.prototype.update = function () {
    this.draw();
};

// Implementation
var dragLine = void 0;
var arrow = void 0;
var targets = [];
targets.push(new _target2.default(1500, 0, 100));
targets.push(new _target2.default(3000, 0, 500));
targets.push(new _target2.default(2500, 0, 1000));

var myImage = new Image();
myImage.src = '../assets/bow.png';
// myImage.onload = function() { drawBow();} 

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
    c.fillText(Math.round(100 * degs) / 100, drag.x, drag.y);
    c.fillText(Math.round(100 * vel) / 100, x, y);

    drag.degs = degs;
    drag.vel = vel;
    drag.theta = theta;
};

// Animation Loop
function animate() {
    c.clearRect(translated.x, translated.y, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    var deltaX = 0;
    var deltaY = 0;

    if (arrow && !arrow.landed) {

        // arrow.update(c);
        deltaX = arrow.x - lastPos.x;
        deltaY = arrow.y - lastPos.y;
        translated.x += deltaX;
        translated.y += deltaY;
        lastPos.x = arrow.x;
        lastPos.y = arrow.y;
    }
    c.translate(-deltaX, -deltaY);
    targets.forEach(function (target) {
        return target.update(c);
    });
    arrows.forEach(function (arrow) {
        return arrow.update(c, targets);
    });
    drawBow(innerWidth / 2, innerHeight - FLOOR - 200);

    if (drag.mousedown) {
        mouseDrag(c);
    }
    // Line 
    c.beginPath();
    c.moveTo(0, innerHeight - FLOOR);
    c.lineTo(10000, innerHeight - FLOOR);
    c.strokeStyle = "black";
    c.lineWidth = 1;

    c.stroke();
    c.closePath();
}

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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collider = function () {
    function Collider(x, y) {
        _classCallCheck(this, Collider);

        this.x = x;
        this.y = y;
    }

    _createClass(Collider, [{
        key: 'update',
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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.closePath();
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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.closePath();
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
var FLOOR = exports.FLOOR = innerHeight / 2;
var VECTOR_LENGTH = exports.VECTOR_LENGTH = 200;
var VEL_DIV = exports.VEL_DIV = 2;
var GRAVITY = exports.GRAVITY = .5;

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _collision_box = __webpack_require__(/*! ./collision_box */ "./src/collision_box.js");

var _collision_box2 = _interopRequireDefault(_collision_box);

var _consts = __webpack_require__(/*! ./consts */ "./src/consts.js");

var CONST = _interopRequireWildcard(_consts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Target = function () {
    function Target(x, y, value) {
        _classCallCheck(this, Target);

        this.x = x;
        this.y = innerHeight - CONST.FLOOR - 20 + y;
        this.w = 20;
        this.h = 100;
        this.hitBox = new _collision_box2.default(this.x, this.y, this.w, this.h);
        this.value = value;
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
            var newY = innerHeight - CONST.FLOOR - 100 - 20;
            this.y = newY;
            this.hitBox.y = newY;
        }
    }, {
        key: 'draw',
        value: function draw(ctx) {

            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.stroke();
            ctx.closePath();
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
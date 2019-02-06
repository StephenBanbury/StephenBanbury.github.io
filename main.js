(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    font-size: large;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n  <fml-simple-game></fml-simple-game>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Follow My Leader';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fml-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _simple_game_simple_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-game/simple-game.component */ "./src/app/simple-game/simple-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _simple_game_simple_game_component__WEBPACK_IMPORTED_MODULE_3__["SimpleGameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/simple-game/simple-game.component.css":
/*!*******************************************************!*\
  !*** ./src/app/simple-game/simple-game.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\r\n    color: #337AB7\r\n}\r\n#container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -50px;\r\n}\r\n#card {\r\n  position: fixed;\r\n  width: 550px;\r\n  height: 550px;\r\n  top:50%;\r\n  left: 50%;\r\n  margin-top: -275px;\r\n  margin-left: -275px;\r\n  background: whitesmoke;\r\n  border: 3px solid red; \r\n}\r\n#target {\r\n  position: absolute;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-width: 2px;\r\n  border-color: black;\r\n  background-color: red;\r\n}\r\n.counter {\r\n    color: royalblue;\r\n}"

/***/ }),

/***/ "./src/app/simple-game/simple-game.component.html":
/*!********************************************************!*\
  !*** ./src/app/simple-game/simple-game.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" (document:keydown)=\"OnKeyEvent($event)\"> \n<!-- <div id=\"container\"> -->\n  <div id=\"card\" (click)=\"OnMouseEvent($event)\">\n    <div id=\"target\" \n      [ngStyle]=\"TargetStyle()\" \n      (mouseenter)=\"OnMouseEvent($event)\"\n      (mouseleave)=\"OnMouseEvent($event)\">\n    </div>\n  </div>\n  <h2 class=\"counter\">Found target: {{ foundTarget }}</h2>\n  <h2 class=\"counter\">Hits: {{ hit }}</h2>\n  <h2 class=\"counter\">Misses: {{ miss }}</h2>\n</div>"

/***/ }),

/***/ "./src/app/simple-game/simple-game.component.ts":
/*!******************************************************!*\
  !*** ./src/app/simple-game/simple-game.component.ts ***!
  \******************************************************/
/*! exports provided: SimpleGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGameComponent", function() { return SimpleGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleGameComponent = /** @class */ (function () {
    function SimpleGameComponent() {
        this._xMin = 2;
        this._yMin = 2;
        this._xMax = 515;
        this._yMax = 515;
        this._xInc = 0;
        this._yInc = 0;
        this._movementStarted = false;
        this._movementPaused = false;
        this._backgroundColor = 'red';
    }
    SimpleGameComponent.prototype.TargetStyle = function () {
        this._targetStyle = {
            "top": this._yPos + "px",
            "left": this._xPos + "px",
            "background": this._backgroundColor
        };
        return this._targetStyle;
    };
    SimpleGameComponent.prototype.OnMouseEvent = function ($event) {
        var childEvent = $event.path[0];
        if (childEvent.id == "card" && $event.type == "click") {
            this.miss += 1;
        }
        if (childEvent.id == "target") {
            this.TargetEvent($event.type);
        }
    };
    SimpleGameComponent.prototype.OnKeyEvent = function ($event) {
        var key = $event.key;
        switch (key) {
            case "4": {
                this._movementPaused = false;
                this._xInc += -0.2;
                break;
            }
            case "6": {
                this._movementPaused = false;
                this._xInc += 0.2;
                break;
            }
            case "2": {
                this._movementPaused = false;
                this._yInc += 0.2;
                break;
            }
            case "8": {
                this._movementPaused = false;
                this._yInc += -0.2;
                break;
            }
            case "5": {
                if (this._movementPaused) {
                    this._movementPaused = false;
                }
                else {
                    this._movementPaused = true;
                    if (this.hit < 5) {
                        this._xInc = 0;
                        this._yInc = 0;
                    }
                }
                break;
            }
        }
        if (!this._movementStarted) {
            this.StartMovement();
            this._movementStarted = true;
        }
    };
    SimpleGameComponent.prototype.TargetEvent = function (eventType) {
        switch (eventType) {
            case "click": {
                this.hit += 1;
                this.SetNewCoordinates();
                if (this.hit >= 5) {
                    this._movementPaused = false;
                    if (this._xInc == 0) {
                        this._xInc = 1;
                    }
                    if (this._yInc == 0) {
                        this._yInc = 1;
                    }
                    if (!this._movementStarted) {
                        this.StartMovement();
                        this._movementStarted = true;
                    }
                }
                break;
            }
            case "mouseenter": {
                this._backgroundColor = "blue";
                this.foundTarget += 1;
                break;
            }
            case "mouseleave": {
                this._backgroundColor = "red";
                break;
            }
        }
    };
    SimpleGameComponent.prototype.StartMovement = function () {
        var _this = this;
        setInterval(function () {
            _this.frame();
        }, 1 * 60);
    };
    SimpleGameComponent.prototype.frame = function () {
        if (!this._movementStarted || this._movementPaused) {
            return;
        }
        ;
        console.log('frame');
        if (this._xPos >= this._xMax || this._xPos <= this._xMin) {
            this._xInc = -this._xInc;
        }
        if (this._yPos >= this._yMax || this._yPos <= this._yMin) {
            this._yInc = -this._yInc;
        }
        this._xPos += this._xInc;
        this._yPos += this._yInc;
    };
    SimpleGameComponent.prototype.SetNewCoordinates = function () {
        this._yPos = this.GenerateRandomValue(1, this._xMax);
        this._xPos = this.GenerateRandomValue(1, this._xMax);
    };
    SimpleGameComponent.prototype.GenerateRandomValue = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
    SimpleGameComponent.prototype.ngOnInit = function () {
        this.SetNewCoordinates();
        this.foundTarget = 0;
        this.hit = 0;
        this.miss = 0;
    };
    SimpleGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fml-simple-game',
            template: __webpack_require__(/*! ./simple-game.component.html */ "./src/app/simple-game/simple-game.component.html"),
            styles: [__webpack_require__(/*! ./simple-game.component.css */ "./src/app/simple-game/simple-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleGameComponent);
    return SimpleGameComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Angular\follow-my-leader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
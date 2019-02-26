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

module.exports = ".row {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-align:center\r\n}\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n\r\n.left {\r\n  width: 25%;\r\n}\r\n\r\n.right {\r\n  width: 75%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div>\r\n    <h1>\r\n      {{ title }}\r\n    </h1>\r\n    <app-word-pong></app-word-pong>\r\n  </div>\r\n</div>"

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
        this.title = 'The Odd Word Out';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _word_pong_word_pong_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./word-pong/word-pong.component */ "./src/app/word-pong/word-pong.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _word_pong_word_pong_component__WEBPACK_IMPORTED_MODULE_4__["WordPongComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/word-service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/word-service.ts ***!
  \****************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordService = /** @class */ (function () {
    function WordService(http) {
        this.http = http;
        this.thesaurusApiUrl = "https://words.bighugelabs.com/api/2/f8618d6158a86a5d11cb0079f164a540/";
    }
    WordService.prototype.getThesaurus = function (seedWord) {
        this.thesaurusApiUrl += seedWord + "/json";
        return this.http.get(this.thesaurusApiUrl);
    };
    WordService.prototype.randomWord = function (numWords, avoidWord) {
        var words = ['feline', 'aqua', 'table', 'nose', 'cheek', 'boat', 'carpet', 'ceiling', 'run', 'think',
            'screen', 'consider', 'square', 'surround', 'border', 'think', 'jet', 'showdown', 'crossing', 'level', 'plane', 'compute',
            'button', 'rancour', 'wobble', 'stream', 'earth', 'embark', 'reach', 'search', 'lighten', 'shelve', 'key', 'board', 'bored',
            'shoe', 'wall', 'plant', 'fireplace', 'kitchen', 'utensil', 'application', 'window', 'dark', 'handle', 'step', 'tile', 'grass'];
        var response = new Array();
        var n = 1;
        do {
            var rand = Math.floor(Math.random() * (words.length));
            var word = words[rand];
            if (word != avoidWord) {
                response.push(word);
                n++;
            }
        } while (n <= numWords);
        return response;
    };
    WordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "./src/app/word-pong/game-object.model.ts":
/*!************************************************!*\
  !*** ./src/app/word-pong/game-object.model.ts ***!
  \************************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
var GameObject = /** @class */ (function () {
    function GameObject() {
    }
    return GameObject;
}());



/***/ }),

/***/ "./src/app/word-pong/word-pong.component.css":
/*!***************************************************!*\
  !*** ./src/app/word-pong/word-pong.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* thead {\r\n    color: #337AB7\r\n} */\r\n/* #container {\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -50px;\r\n} */\r\n#card {\r\n  width: 650px;\r\n  height: 650px;\r\n  border: 3px solid #73AD21;\r\n}\r\n#card h1 {\r\n  color: red;\r\n}\r\n.center {\r\n  margin: auto;\r\n  display: block;\r\n  position: fixed;\r\n  margin-top: -325px;\r\n  margin-left: -325px;\r\n  top:50%;\r\n  left: 50%;\r\n  padding: 10px;\r\n}\r\n.ball {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 3px solid #73AD21;\r\n  font-family: Arial, Helvetica, sans-serif\r\n\r\n}\r\n.obstacle {\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.flex-container {\r\n  display:flex;\r\n  align-items: center; /* Vertical center alignment */\r\n  justify-content: center; /* Horizontal center alignment */\r\n}"

/***/ }),

/***/ "./src/app/word-pong/word-pong.component.html":
/*!****************************************************!*\
  !*** ./src/app/word-pong/word-pong.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Find {{unrelatedWordNumber}} words unrelated to \"{{seedWord}}\". Avoid related words.</h2>\r\n<span id=\"container\" (document:keydown)=\"onKeyEvent($event)\">\r\n  <div id=\"card\" class=\"center\" [style.background-color]=\"cardColor\" (click)=\"onMouseEvent($event)\">\r\n    <h1>{{message}}</h1>\r\n    <div *ngFor=\"let gameObject of gameObjects\">\r\n        <div\r\n          id=\"{{gameObject.id}}\"\r\n          class=\"flex-container ball\"\r\n          [ngClass]=\"gameObject.className\"\r\n          [ngStyle]=\"objectStyle(gameObject.id)\"\r\n          (mouseenter)=\"onMouseEvent($event)\"\r\n          (mouseleave)=\"onMouseEvent($event)\"\r\n          [innerText]=\"gameObject.text\"\r\n        ></div>\r\n    </div>\r\n  </div>\r\n  <!-- <div *ngFor=\"let related of relatedWords\" [innerText]=related>    \r\n  </div>\r\n  <div *ngFor=\"let unrelated of unrelatedWords\" [innerText]=unrelated>    \r\n  </div> -->\r\n  <!-- <div>\r\n    <h2 class=\"counter\">Found target: {{ foundObject }}</h2>\r\n    <h2 class=\"counter\">Hits: {{ hit }}</h2>\r\n    <h2 class=\"counter\">Misses: {{ miss }}</h2>\r\n  </div> -->\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/word-pong/word-pong.component.ts":
/*!**************************************************!*\
  !*** ./src/app/word-pong/word-pong.component.ts ***!
  \**************************************************/
/*! exports provided: WordPongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordPongComponent", function() { return WordPongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_object_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-object.model */ "./src/app/word-pong/game-object.model.ts");
/* harmony import */ var _shared_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/word-service */ "./src/app/shared/word-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordPongComponent = /** @class */ (function () {
    function WordPongComponent(wordService) {
        //this.score = 0;
        // this.foundObject = 0;
        // this.hit = 0;
        // this.miss = 0;
        this.wordService = wordService;
        this.xMin = 2;
        this.yMin = 2;
        this.xMax = 617;
        this.yMax = 617;
        this.movementStarted = true;
        this.movementPaused = false;
        //public foundObject: number;
        //public hit: number;
        //public miss: number;
        //public score: number;
        this.cardColor = "lightyellow";
        this.gameObjects = Array();
        this.relatedWordNumber = 8;
        this.unrelatedWordNumber = 4;
        this.relatedWords = new Array();
        this.unrelatedWords = new Array();
        this.gameObjectNumber = 0;
        this.notRelatedNumber = 0;
        this.gameObjects = new Array();
    }
    WordPongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seedWord = this.wordService.randomWord(1, "")[0];
        var unrelatedWords = this.wordService.randomWord(this.unrelatedWordNumber, this.seedWord);
        this.wordService.getThesaurus(this.seedWord).subscribe(function (thesaurus) {
            _this.setUpGame(thesaurus, unrelatedWords);
        });
    };
    WordPongComponent.prototype.setUpGame = function (thesaurus, nonRelatedWords) {
        var _this = this;
        var nouns = thesaurus.noun.syn.slice(0, this.relatedWordNumber);
        console.log(nouns);
        this.newGameObject("ball", "lightgreen", this.seedWord, true, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), 0, 0);
        nouns.forEach(function (noun) {
            _this.newGameObject("obstacle", "lightblue", noun, true, _this.randomGenerator(1, _this.xMax), _this.randomGenerator(1, _this.yMax), _this.randomGenerator(-2, 2), _this.randomGenerator(-2, 2));
        });
        nonRelatedWords.forEach(function (word) {
            _this.newGameObject("obstacle", "lightblue", word, false, _this.randomGenerator(1, _this.xMax), _this.randomGenerator(1, _this.yMax), _this.randomGenerator(-2, 2), _this.randomGenerator(-2, 2));
        });
        // this.newGameObject("obstacle", "lightblue", "aqua", false, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), this.randomGenerator(-2, 2), this.randomGenerator(-2, 2));
        // this.newGameObject("obstacle", "lightblue", "feline", false, this.randomGenerator(1, this.xMax), this.randomGenerator(1, this.yMax), this.randomGenerator(-2, 2), this.randomGenerator(-2, 2));
        this.gameObjects.forEach(function (obj) { return !obj.isRelated ? _this.notRelatedNumber++ : false; });
        this.startMovement();
    };
    WordPongComponent.prototype.objectStyle = function (id) {
        var object = this.gameObjects[id];
        return {
            "top": object.yPos + "px",
            "left": object.xPos + "px",
            "background": "" + object.background,
        };
    };
    WordPongComponent.prototype.onMouseEvent = function ($event) {
        var childEvent = $event.path[0];
        // if(childEvent.id == "card" && $event.type == "click"){
        //   this.miss += 1;
        // }
        // TODO indexOf is not working for some reason!!
        //console.log(childEvent.classList.indexOf("ball"));
        if (childEvent.classList[1] == "ball" || childEvent.classList[1] == "obstacle") {
            //console.log('event type: ', $event.type);
            this.gameObjectEvent(childEvent.id, $event.type);
        }
    };
    WordPongComponent.prototype.onKeyEvent = function ($event) {
        var key = $event.key;
        switch (key) {
            case "ArrowLeft": {
                this.movementPaused = false;
                this.gameObjects[0].xInc += this.gameObjects[0].xInc < 25 ? -0.2 : 0;
                break;
            }
            case "ArrowRight": {
                this.movementPaused = false;
                this.gameObjects[0].xInc += this.gameObjects[0].xInc > -25 ? 0.2 : 0;
                break;
            }
            case "ArrowDown": {
                this.movementPaused = false;
                this.gameObjects[0].yInc += this.gameObjects[0].yInc < 25 ? 0.2 : 0;
                break;
            }
            case "ArrowUp": {
                this.movementPaused = false;
                this.gameObjects[0].yInc += this.gameObjects[0].yInc > -25 ? -0.2 : 0;
                break;
            }
            case " ": {
                if (this.movementPaused) {
                    this.movementPaused = false;
                }
                else {
                    this.movementPaused = true;
                }
                break;
            }
        }
    };
    WordPongComponent.prototype.newGameObject = function (className, background, text, isRelated, xPos, yPos, xInc, yInc) {
        var gameObject = new _game_object_model__WEBPACK_IMPORTED_MODULE_1__["GameObject"]();
        gameObject.id = this.gameObjectNumber;
        gameObject.className = className;
        gameObject.background = background;
        gameObject.text = text;
        gameObject.isRelated = isRelated;
        gameObject.xPos = xPos;
        gameObject.yPos = yPos;
        gameObject.xInc = xInc;
        gameObject.yInc = yInc;
        gameObject.isHit = false;
        this.gameObjects.push(gameObject);
        this.gameObjectNumber++;
    };
    WordPongComponent.prototype.gameObjectEvent = function (id, eventType) {
        switch (eventType) {
            // case "click": {
            //   this.hit += 1;
            //   break;
            // }
            case "mouseenter": {
                this.temporaryGameObject = Object.assign({}, this.gameObjects[id]);
                // The version below will ensure nested objects include. I'm not using it
                // at the moment because there may be a small performance hit.
                //this.temporaryGameObject = JSON.parse(JSON.stringify(this.gameObjects[id]));
                this.gameObjects[id].background = "cyan";
                //this.foundObject += 1;
                break;
            }
            case "mouseleave": {
                this.gameObjects[id].background = this.temporaryGameObject.background;
                break;
            }
        }
    };
    WordPongComponent.prototype.startMovement = function () {
        var _this = this;
        this.interval = setInterval(function () {
            var related = 0;
            var unrelated = 0;
            var relatedHits = 0;
            var unrelatedHits = 0;
            for (var i = 0; i < _this.gameObjects.length; i++) {
                var objectId = _this.gameObjects[i].id;
                _this.frame(objectId);
                if (objectId > 0) {
                    _this.testForCollision(_this.gameObjects[objectId]);
                    if (!_this.gameObjects[objectId].isRelated) {
                        unrelated++;
                        if (_this.gameObjects[objectId].isHit) {
                            unrelatedHits++;
                        }
                    }
                    else {
                        related++;
                        if (_this.gameObjects[objectId].isHit) {
                            relatedHits++;
                        }
                    }
                }
            }
            if (unrelated == unrelatedHits) {
                _this.nextLevel();
            }
            if (related == relatedHits) {
                _this.gameOver();
            }
        }, 0.5 * 60);
    };
    WordPongComponent.prototype.frame = function (objectId) {
        if (!this.movementStarted || this.movementPaused) {
            return;
        }
        ;
        if (this.gameObjects[objectId].xPos >= this.xMax || this.gameObjects[objectId].xPos <= this.xMin) {
            this.gameObjects[objectId].xInc = -this.gameObjects[objectId].xInc;
        }
        if (this.gameObjects[objectId].yPos >= this.yMax || this.gameObjects[objectId].yPos <= this.yMin) {
            this.gameObjects[objectId].yInc = -this.gameObjects[objectId].yInc;
        }
        this.gameObjects[objectId].xPos += this.gameObjects[objectId].xInc;
        this.gameObjects[objectId].yPos += this.gameObjects[objectId].yInc;
    };
    WordPongComponent.prototype.testForCollision = function (gameObject) {
        var myObject = this.gameObjects[0];
        this.cardColor = "lightyellow";
        if (gameObject.xPos <= myObject.xPos + 50 &&
            gameObject.xPos + 50 >= myObject.xPos &&
            gameObject.yPos <= myObject.yPos + 50 &&
            gameObject.yPos + 50 >= myObject.yPos) {
            gameObject.isHit = true;
            if (gameObject.isRelated) {
                gameObject.background = "orange";
                this.relatedWords.push(gameObject.text);
                //this.score += 1;        
            }
            else {
                //this.cardColor = "yellow";
                gameObject.background = "red";
                this.unrelatedWords.push(gameObject.text);
                //this.score -= 1;        
            }
            var xPosNew = this.randomGenerator(gameObject.xPos - 50, gameObject.xPos + 100);
            var yPosNew = this.randomGenerator(gameObject.yPos - 50, gameObject.yPos + 100);
            if (xPosNew >= this.xMax - 50) {
                xPosNew = this.xMax - 50;
            }
            ;
            if (yPosNew >= this.xMax - 50) {
                yPosNew = this.yMax - 50;
            }
            ;
            if (xPosNew < 0) {
                xPosNew = 0;
            }
            ;
            if (yPosNew < 0) {
                yPosNew = 0;
            }
            ;
            gameObject.xPos = xPosNew;
            gameObject.yPos = yPosNew;
            gameObject.xInc = -gameObject.xInc;
            gameObject.yInc = -gameObject.yInc;
        }
    };
    WordPongComponent.prototype.gameOver = function () {
        clearInterval(this.interval);
        this.message = "Game Over!";
    };
    WordPongComponent.prototype.nextLevel = function () {
        clearInterval(this.interval);
        this.message = "Congratulations!";
    };
    WordPongComponent.prototype.randomGenerator = function (min, max) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (rand == 0)
            rand = rand + 1;
        return rand;
    };
    WordPongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word-pong',
            template: __webpack_require__(/*! ./word-pong.component.html */ "./src/app/word-pong/word-pong.component.html"),
            styles: [__webpack_require__(/*! ./word-pong.component.css */ "./src/app/word-pong/word-pong.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"]])
    ], WordPongComponent);
    return WordPongComponent;
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

module.exports = __webpack_require__(/*! C:\Dev\Repositories\the-odd-word-out\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
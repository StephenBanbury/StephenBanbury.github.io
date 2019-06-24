(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<h2>My Location:</h2>\n<div class=\"row\">\n  <p>Latitude: {{ myLocation.latitude }}</p>\n  <p>Longitude: {{ myLocation.longitude }}</p>\n</div>\n\n<h3>Events</h3>\n<div class=\"row\" *ngFor=\"let event of events\">\n  {{ event.distance }} m <b *ngIf=\"event.distance <= 20\">... close!</b>\n</div>\n\n<div class=\"row\">\n  <agm-map #map (mapClick)=\"onSelectLocation($event)\"\n    [latitude]=\"myLocation.latitude\"\n    [longitude]=\"myLocation.longitude\"\n    [zoom]=\"zoom\">\n    <agm-marker\n      [latitude]=\"myLocation.latitude\"\n      [longitude]=\"myLocation.longitude\"\n      [label]=\"myMarkerLabelOptions\"\n      [iconUrl]=\"myMarkerIconOptions\">\n    </agm-marker>\n    <agm-marker *ngFor=\"let event of events\"\n      [latitude]=\"event.location.latitude\"\n      [longitude]=\"event.location.longitude\">\n    </agm-marker>\n  </agm-map>\n</div>\n\n<h2>{{ statusMessage }}</h2>\n<div class=\"row\">\n  <ul *ngFor=\"let imageJson of imageJsons\">\n    <li>\n      <h2><a target=\"_blank\" rel=\"noopener\"\n          href='{{ imageJson.urls.raw + \"&w=1500&dpi=2\" }}'>{{ imageJson.alt_description == null ? 'untitled' : imageJson.alt_description }}</a>\n      </h2>\n    </li>\n  </ul>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 600px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/location-object.model */ "./src/app/shared/location-object.model.ts");
/* harmony import */ var _shared_event_object_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/event-object.model */ "./src/app/shared/event-object.model.ts");
/* harmony import */ var _shared_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/location.service */ "./src/app/shared/location.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, locationService) {
        this.apiService = apiService;
        this.locationService = locationService;
        this.title = 'mudita-client';
        this.imageJsons = new Array();
        this.myLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        this.events = new Array();
        //this.eventLocations.push(new LocationObject());
        this.zoom = 17;
        this.myMarkerLabelOptions = {
            color: '#000',
            fontFamily: '',
            fontSize: '16px',
            fontWeight: 'bold',
            text: 'Me',
        };
        this.myMarkerIconOptions = {
            url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
            scaledSize: {
                width: 40,
                height: 40
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.trackMyLocation();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.stopTrackMyLocation;
    };
    // TODO this may be used to for something, so it's staying here for now
    AppComponent.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.frame();
        }, 30 * 60);
    };
    AppComponent.prototype.frame = function () {
    };
    AppComponent.prototype.onSelectLocation = function (event) {
        var newEvent = new _shared_event_object_model__WEBPACK_IMPORTED_MODULE_4__["EventObject"]();
        var newEventLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        newEventLocation.latitude = event.coords.lat;
        newEventLocation.longitude = event.coords.lng;
        newEvent.location = newEventLocation;
        newEvent.selected = true;
        this.events.push(newEvent);
        this.checkForLocalEvents();
    };
    AppComponent.prototype.trackMyLocation = function () {
        var _this = this;
        this.locationService.watchLocation().subscribe(function (newLocation) {
            _this.myLocation.latitude = newLocation.coords.latitude;
            _this.myLocation.longitude = newLocation.coords.longitude;
            _this.myLocation.accuracy = newLocation.coords.accuracy;
            _this.checkForLocalEvents();
        });
    };
    AppComponent.prototype.stopTrackMyLocation = function () {
        this.locationService.stopWatchLocation();
    };
    AppComponent.prototype.checkForLocalEvents = function () {
        var _this = this;
        if (this.events.length == 0) {
            this.statusMessage = 'No events nearby';
            return false;
        }
        this.events.forEach(function (e) { return e.distance = Math.round(_this.locationService.getDistanceFromLatLonInKm(_this.myLocation.latitude, _this.myLocation.longitude, e.location.latitude, e.location.longitude)); });
        this.events.sort(function (a, b) { return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0; });
        if (this.events[0].distance <= 20) {
            this.statusMessage = "There is an event close by! Here's a random image from Unsplash's API for you..";
            if (this.imageJsons.length == 0) {
                this.getImage();
            }
        }
        else {
            this.statusMessage = "No events nearby";
            this.imageJsons = new Array();
        }
    };
    AppComponent.prototype.getImage = function () {
        var _this = this;
        this.apiService.getImage()
            .subscribe(function (photo) {
            return _this.imageJsons.push(photo[0]);
        } //.urls.raw + '&w=1500&dpi=2') // width + dpi
        //console.log(photo[0].urls.raw + '&w=1500&dpi=2')
        );
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









//import { AngularFireAuthModule } from '@angular/fire/auth';

 // material animations
 // for example
// see https://material.angular.io/guide/getting-started
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCSXgPI_1LG_thKRrq92Mu-rfnnUskP9-w'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.imageApiUrl = "https://api.unsplash.com/photos/random?count=1&client_id=";
        this.imageApiKey = "f820c8f4a1e26ac5ed9c1489f3bf986caaaf3215eb863b62f3ec240a00003209";
        this.textApiUrl = "";
        this.textApiKey = "";
        this.soundApiUrl = "";
        this.soundApiKey = "";
    }
    ApiService.prototype.getImage = function () {
        var url = this.imageApiUrl + this.imageApiKey;
        return this.http.get(url);
    };
    ApiService.prototype.getText = function () {
    };
    ApiService.prototype.getSound = function () {
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/event-object.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/event-object.model.ts ***!
  \**********************************************/
/*! exports provided: EventObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventObject", function() { return EventObject; });
var EventObject = /** @class */ (function () {
    function EventObject() {
    }
    return EventObject;
}());



/***/ }),

/***/ "./src/app/shared/location-object.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/location-object.model.ts ***!
  \*************************************************/
/*! exports provided: LocationObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationObject", function() { return LocationObject; });
var LocationObject = /** @class */ (function () {
    function LocationObject() {
    }
    return LocationObject;
}());



/***/ }),

/***/ "./src/app/shared/location.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/location.service.ts ***!
  \********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.watchLocation = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (navigator.geolocation) {
                _this.watchId = navigator.geolocation.watchPosition(function (position) {
                    observer.next(position);
                    observer.complete;
                    //console.log('watchLocationObservable', position);
                }, function (error) { return console.log(error); }, { enableHighAccuracy: true });
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    };
    LocationService.prototype.stopWatchLocation = function () {
        navigator.geolocation.clearWatch(this.watchId);
    };
    LocationService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d * 1000; // in metres
    };
    LocationService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationService);
    return LocationService;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDNa6YL1mkT9LI7YxTVUnvb-geXRhrz1FU",
        authDomain: "bomber-defuser.firebaseapp.com",
        databaseURL: "https://bomber-defuser.firebaseio.com",
        projectId: "bomber-defuser",
        storageBucket: "bomber-defuser.appspot.com",
        messagingSenderId: "262462491753",
        appId: "1:262462491753:web:218b7cdf588124b1"
    }
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

module.exports = __webpack_require__(/*! C:\Dev\Repositories\mudita-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
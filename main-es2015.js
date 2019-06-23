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

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<h2>My Location:</h2>\n<div class=\"row\">\n  <p>Latitude: {{ locations[0].latitude }}</p>\n  <p>Longitude: {{ locations[0].longitude }}</p>\n</div>\n\n<div class=\"row\">\n  <h2>Map</h2>\n  <agm-map #map (mapClick)=\"onSelectLocation($event)\"\n    [latitude]=\"locations[0].latitude\"\n    [longitude]=\"locations[0].longitude\">\n    <div *ngFor=\"let location of locations\">\n      <p>{{ location }}</p>\n      <agm-marker\n        [latitude]=\"location.latitude\"\n        [longitude]=\"location.longitude\"\n        >\n      </agm-marker>\n    </div>\n  </agm-map>\n</div>\n\n<h2>Images:</h2>\n<div class=\"row\">\n  <ul *ngFor=\"let imageJson of imageJsons\">\n    <li>\n      <h2><a target=\"_blank\" rel=\"noopener\"\n          href='{{ imageJson.urls.raw + \"&w=1500&dpi=2\" }}'>{{ imageJson.alt_description == null ? 'untitled' : imageJson.alt_description }}</a>\n      </h2>\n    </li>\n  </ul>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/location.service */ "./src/app/shared/location.service.ts");
/* harmony import */ var _shared_location_object_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/location-object.model */ "./src/app/shared/location-object.model.ts");





let AppComponent = class AppComponent {
    constructor(apiService, locationService) {
        this.apiService = apiService;
        this.locationService = locationService;
        this.title = 'mudita-client';
        this.imageJsons = new Array();
        this.locationCount = 0;
        this.locations = new Array();
        this.locations.push(new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_4__["LocationObject"]());
    }
    ngOnInit() {
        this.watchMyLocation();
    }
    ngOnDestroy() {
        // TODO unsubscribe where necessary
    }
    // TODO this may be used to for something, so it's staying here for now
    start() {
        this.interval = setInterval(() => {
            this.frame();
        }, 30 * 60);
    }
    frame() {
    }
    onSelectLocation(event) {
        let location = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_4__["LocationObject"]();
        location.latitude = event.coords.lat;
        location.longitude = event.coords.lng;
        location.selected = true;
        this.locations.push(location);
        this.distanceFromMe = this.locationService.getDistanceFromLatLonInKm(this.locations[0].latitude, this.locations[0].longitude, location.latitude, location.longitude);
        console.log('distance from me', this.distanceFromMe);
        this.locationCount++;
    }
    watchMyLocation() {
        //this.locations[0] = this.locationService.watchLocation();
        this.locationService.watchLocationObservable().subscribe(newLocation => {
            this.locations[0].latitude = newLocation.coords.latitude;
            this.locations[0].longitude = newLocation.coords.longitude;
            this.locations[0].accuracy = newLocation.coords.accuracy;
            console.log('watchMyLocation', this.locations[0]);
        });
    }
    getImage() {
        this.apiService.getImage()
            .subscribe(photo => this.imageJsons.push(photo[0]) //.urls.raw + '&w=1500&dpi=2') // width + dpi
        //console.log(photo[0].urls.raw + '&w=1500&dpi=2')
        );
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









//import { AngularFireAuthModule } from '@angular/fire/auth';

 // material animations
 // for example
// see https://material.angular.io/guide/getting-started
let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.imageApiUrl = "https://api.unsplash.com/photos/random?count=1&client_id=";
        this.imageApiKey = "f820c8f4a1e26ac5ed9c1489f3bf986caaaf3215eb863b62f3ec240a00003209";
        this.textApiUrl = "";
        this.textApiKey = "";
        this.soundApiUrl = "";
        this.soundApiKey = "";
    }
    getImage() {
        const url = this.imageApiUrl + this.imageApiKey;
        return this.http.get(url);
    }
    getText() {
    }
    getSound() {
    }
};
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



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
class LocationObject {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _location_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-object.model */ "./src/app/shared/location-object.model.ts");




let LocationService = class LocationService {
    constructor() { }
    watchLocation() {
        let location = new _location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(position => {
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                location.accuracy = position.coords.accuracy;
            }, (error) => console.log(error), { enableHighAccuracy: true });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
        return location;
    }
    watchLocationObservable() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            if (navigator.geolocation) {
                //let location = new LocationObject();
                navigator.geolocation.watchPosition(position => {
                    observer.next(position);
                    observer.complete;
                    // location.latitude = position.coords.latitude;
                    // location.longitude = position.coords.longitude;
                    // location.accuracy = position.coords.accuracy;
                    console.log('watchLocationObservable', position);
                } //,
                // (error: PositionError) => console.log(error),
                // { enableHighAccuracy: true }
                );
                // } else {
                //   alert("Geolocation is not supported by this browser.");
                // }
                //}
            }
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        let dLon = this.deg2rad(lon2 - lon1);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocationService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map
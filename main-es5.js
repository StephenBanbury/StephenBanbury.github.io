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

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<div class=\"row\">\n  <div *ngFor=\"let event of events\" (click)=\"onSelectEvent(event)\">\n    <b>{{ event.title }}</b>\n  </div>\n\n  <h1 *ngIf=\"eventSelected\">Selected Event: {{ myEvent.title }}</h1>\n\n  <h2>{{ statusMessage }}</h2>\n\n  <div *ngIf=\"eventSelected\">\n    <h3>Events</h3>\n    <div class=\"row\" *ngFor=\"let fence of myEvent.fences\">\n      {{ fence.tag }} ({{ fence.distance }} m) <b *ngIf=\"fence.distance <= 20\">... close!</b>\n    </div>\n  </div>\n</div>\n<br><br>\n<div class=\"row\">\n  <agm-map #map (mapClick)=\"onSelectLocation($event)\"\n    [latitude]=\"myLocation.latitude\"\n    [longitude]=\"myLocation.longitude\"\n    [zoom]=\"zoom\">\n    <agm-marker\n      [latitude]=\"myLocation.latitude\"\n      [longitude]=\"myLocation.longitude\"\n      [label]=\"myMarkerLabelOptions\"\n      [iconUrl]=\"myMarkerIconOptions\">\n    </agm-marker>\n    <agm-marker *ngFor=\"let fence of myEvent.fences\"\n      [latitude]=\"fence.location.latitude\"\n      [longitude]=\"fence.location.longitude\">\n    </agm-marker>\n  </agm-map>\n</div>\n\n<div class=\"row\">\n  <ul *ngFor=\"let imageJson of imageJsons\">\n    <li>\n      <h2><a target=\"_blank\" rel=\"noopener\"\n          href='{{ imageJson.urls.raw + \"&w=1500&dpi=2\" }}'>{{ imageJson.alt_description == null ? 'untitled' : imageJson.alt_description }}</a>\n      </h2>\n    </li>\n  </ul>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _shared_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/location.service */ "./src/app/shared/location.service.ts");
/* harmony import */ var _shared_event_object_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/event-object.model */ "./src/app/shared/event-object.model.ts");
/* harmony import */ var _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/fence-object-model */ "./src/app/shared/fence-object-model.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, locationService) {
        this.apiService = apiService;
        this.locationService = locationService;
        this.title = 'Mudita';
        this.imageJsons = new Array();
        this.myEvent = new _shared_event_object_model__WEBPACK_IMPORTED_MODULE_5__["EventObject"]();
        this.myLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        this.events = new Array();
        this.zoom = 18;
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
        this.eventSelected = false;
        this.events = this.apiService.getEventBasicDetails();
        this.trackMyLocation();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.stopTrackMyLocation;
    };
    // TODO this may be used to for something, so it's staying here for now
    // start() {
    //   this.interval = setInterval(() => {
    //     this.frame();
    //   }, 30 * 60);
    // }
    // private frame() {
    // }
    AppComponent.prototype.onSelectEvent = function (event) {
        this.eventSelected = true;
        this.getEventDataFromApi(event.id);
        this.checkForLocalEventFences();
    };
    AppComponent.prototype.getEventDataFromApi = function (eventId) {
        var _this = this;
        var eventData = this.apiService.getEventDetails(eventId);
        this.myEvent.id = eventData.eventId;
        this.myEvent.title = eventData.title;
        this.myEvent.fences = new Array();
        eventData.fence.forEach(function (fence) {
            var newFence = new _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__["FenceObject"]();
            var newFenceLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
            newFenceLocation.latitude = fence.latitude;
            newFenceLocation.longitude = fence.longitude;
            newFence.location = newFenceLocation;
            newFence.text = fence.text;
            newFence.imageUrl = fence.imageUrl;
            newFence.tag = fence.tag;
            newFence.selected = true;
            _this.myEvent.fences.push(newFence);
        });
    };
    AppComponent.prototype.onSelectLocation = function (event) {
        var newFence = new _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__["FenceObject"]();
        var newFenceLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        // console.log('latitude', event.coords.lat);
        // console.log('longitude', event.coords.lng);
        newFenceLocation.latitude = event.coords.lat;
        newFenceLocation.longitude = event.coords.lng;
        newFence.location = newFenceLocation;
        newFence.selected = true;
        this.myEvent.fences.push(newFence);
        this.checkForLocalEventFences();
    };
    AppComponent.prototype.trackMyLocation = function () {
        var _this = this;
        this.locationService.watchLocation().subscribe(function (newLocation) {
            _this.myLocation.latitude = newLocation.coords.latitude;
            _this.myLocation.longitude = newLocation.coords.longitude;
            _this.myLocation.accuracy = newLocation.coords.accuracy;
            if (_this.eventSelected) {
                _this.checkForLocalEventFences();
            }
        });
    };
    AppComponent.prototype.stopTrackMyLocation = function () {
        this.locationService.stopWatchLocation();
    };
    AppComponent.prototype.checkForLocalEventFences = function () {
        var _this = this;
        if (this.myEvent.fences.length == 0) {
            this.statusMessage = 'No events nearby';
            return false;
        }
        this.myEvent.fences.forEach(function (e) { return e.distance = Math.round(_this.locationService.getDistanceFromLatLonInKm(_this.myLocation.latitude, _this.myLocation.longitude, e.location.latitude, e.location.longitude)); });
        this.myEvent.fences.sort(function (a, b) { return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0; });
        if (this.myEvent.fences[0].distance <= 20) {
            this.statusMessage = "There is an event close by!"; // Here's a random image from Unsplash's API for you..";
            // if(this.imageJsons.length == 0){
            //   this.getImage();
            // }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
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
/* harmony import */ var _shared_event_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/event-object.model */ "./src/app/shared/event-object.model.ts");
/* harmony import */ var _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mock-api */ "./src/app/shared/mock-api.ts");





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
    ApiService.prototype.getEventBasicDetails = function () {
        var _this = this;
        this.events = new Array();
        var eventsData = _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__["MuditaApi"];
        eventsData.event.forEach(function (event) {
            var newEvent = new _shared_event_object_model__WEBPACK_IMPORTED_MODULE_3__["EventObject"]();
            newEvent.id = event.eventId;
            newEvent.title = event.title;
            _this.events.push(newEvent);
        });
        return this.events;
    };
    ApiService.prototype.getEventDetails = function (eventId) {
        var event;
        event = _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__["MuditaApi"].event.filter(function (event) { return event.eventId == eventId; });
        return event[0];
    };
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

/***/ "./src/app/shared/fence-object-model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/fence-object-model.ts ***!
  \**********************************************/
/*! exports provided: FenceObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FenceObject", function() { return FenceObject; });
var FenceObject = /** @class */ (function () {
    function FenceObject() {
    }
    return FenceObject;
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

/***/ "./src/app/shared/mock-api.ts":
/*!************************************!*\
  !*** ./src/app/shared/mock-api.ts ***!
  \************************************/
/*! exports provided: MuditaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuditaApi", function() { return MuditaApi; });
var MuditaApi = {
    "event": [{
            "eventId": 1,
            "title": "City Pub Safari",
            "fence": [
                {
                    "fenceId": 1,
                    "tag": "Dog & Duck",
                    "latitude": 51.47131976320642,
                    "longitude": -3.1857964233481653,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla."
                },
                {
                    "fenceId": 2,
                    "tag": "Poet's Corner",
                    "latitude": 51.471600450847056,
                    "longitude": -3.185302896889425,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla.",
                    "imageUrl": "https://www.w3schools.com/howto/img_snow.jpg"
                },
                {
                    "fenceId": 3,
                    "tag": "The Grange",
                    "latitude": 51.47159376782806,
                    "longitude": -3.1853887275779016,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla.",
                    "imageUrl": "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
                }
            ],
        },
        {
            "eventId": 2,
            "title": "Spy Game",
            "fence": [
                {
                    "fenceId": 1,
                    "tag": "Dodgy Lane",
                    "latitude": 51.47151691303928,
                    "longitude": -3.1855603889548547,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla."
                },
                {
                    "fenceId": 2,
                    "tag": "Danger Alley",
                    "latitude": 51.47148015635539,
                    "longitude": -3.1856408552253015,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla."
                },
                {
                    "fenceId": 3,
                    "tag": "Cut-throat Way",
                    "latitude": 51.47124624949133,
                    "longitude": -3.1852975324713952,
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper nisl ac nibh dapibus, non lacinia ante mollis. Etiam et convallis eros, et semper ipsum. Maecenas quis euismod elit. Cras lacus eros, lobortis sed orci ac, posuere sagittis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis risus eget ex aliquet, at efficitur ligula imperdiet. Ut elementum accumsan rutrum. Suspendisse nec facilisis nulla. Curabitur sapien ipsum, vulputate cursus lectus eget, varius tempus metus. Suspendisse odio nulla, consequat sit amet faucibus ac, rhoncus id justo. Aenean a urna leo. Praesent nec est sem. Integer facilisis, tortor vitae finibus consequat, leo nisl feugiat libero, a consectetur ex urna in nulla.",
                    "imageUrl": "https://data1.ibtimes.co.in/cache-img-0-450/en/full/694772/1538412234_black-hole.png"
                }
            ],
        }],
};


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
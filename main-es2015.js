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
/* harmony import */ var _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/location-object.model */ "./src/app/shared/location-object.model.ts");
/* harmony import */ var _shared_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/location.service */ "./src/app/shared/location.service.ts");
/* harmony import */ var _shared_event_object_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/event-object.model */ "./src/app/shared/event-object.model.ts");
/* harmony import */ var _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/fence-object-model */ "./src/app/shared/fence-object-model.ts");







let AppComponent = class AppComponent {
    constructor(apiService, locationService) {
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
    ngOnInit() {
        this.eventSelected = false;
        this.events = this.apiService.getEventBasicDetails();
        this.trackMyLocation();
    }
    ngOnDestroy() {
        this.stopTrackMyLocation;
    }
    // TODO this may be used to for something, so it's staying here for now
    // start() {
    //   this.interval = setInterval(() => {
    //     this.frame();
    //   }, 30 * 60);
    // }
    // private frame() {
    // }
    onSelectEvent(event) {
        this.eventSelected = true;
        this.getEventDataFromApi(event.id);
        this.checkForLocalEventFences();
    }
    getEventDataFromApi(eventId) {
        const eventData = this.apiService.getEventDetails(eventId);
        this.myEvent.id = eventData.eventId;
        this.myEvent.title = eventData.title;
        this.myEvent.fences = new Array();
        eventData.fence.forEach(fence => {
            const newFence = new _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__["FenceObject"]();
            const newFenceLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
            newFenceLocation.latitude = fence.latitude;
            newFenceLocation.longitude = fence.longitude;
            newFence.location = newFenceLocation;
            newFence.text = fence.text;
            newFence.imageUrl = fence.imageUrl;
            newFence.tag = fence.tag;
            newFence.selected = true;
            this.myEvent.fences.push(newFence);
        });
    }
    onSelectLocation(event) {
        const newFence = new _shared_fence_object_model__WEBPACK_IMPORTED_MODULE_6__["FenceObject"]();
        const newFenceLocation = new _shared_location_object_model__WEBPACK_IMPORTED_MODULE_3__["LocationObject"]();
        // console.log('latitude', event.coords.lat);
        // console.log('longitude', event.coords.lng);
        newFenceLocation.latitude = event.coords.lat;
        newFenceLocation.longitude = event.coords.lng;
        newFence.location = newFenceLocation;
        newFence.selected = true;
        this.myEvent.fences.push(newFence);
        this.checkForLocalEventFences();
    }
    trackMyLocation() {
        this.locationService.watchLocation().subscribe(newLocation => {
            this.myLocation.latitude = newLocation.coords.latitude;
            this.myLocation.longitude = newLocation.coords.longitude;
            this.myLocation.accuracy = newLocation.coords.accuracy;
            if (this.eventSelected) {
                this.checkForLocalEventFences();
            }
        });
    }
    stopTrackMyLocation() {
        this.locationService.stopWatchLocation();
    }
    checkForLocalEventFences() {
        if (this.myEvent.fences.length == 0) {
            this.statusMessage = 'No events nearby';
            return false;
        }
        this.myEvent.fences.forEach(e => e.distance = Math.round(this.locationService.getDistanceFromLatLonInKm(this.myLocation.latitude, this.myLocation.longitude, e.location.latitude, e.location.longitude)));
        this.myEvent.fences.sort((a, b) => a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
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
/* harmony import */ var _shared_event_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/event-object.model */ "./src/app/shared/event-object.model.ts");
/* harmony import */ var _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mock-api */ "./src/app/shared/mock-api.ts");





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
    getEventBasicDetails() {
        this.events = new Array();
        const eventsData = _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__["MuditaApi"];
        eventsData.event.forEach(event => {
            let newEvent = new _shared_event_object_model__WEBPACK_IMPORTED_MODULE_3__["EventObject"]();
            newEvent.id = event.eventId;
            newEvent.title = event.title;
            this.events.push(newEvent);
        });
        return this.events;
    }
    getEventDetails(eventId) {
        let event;
        event = _shared_mock_api__WEBPACK_IMPORTED_MODULE_4__["MuditaApi"].event.filter(event => event.eventId == eventId);
        return event[0];
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

/***/ "./src/app/shared/event-object.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/event-object.model.ts ***!
  \**********************************************/
/*! exports provided: EventObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventObject", function() { return EventObject; });
class EventObject {
}


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
class FenceObject {
}


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



let LocationService = class LocationService {
    constructor() { }
    watchLocation() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            if (navigator.geolocation) {
                this.watchId = navigator.geolocation.watchPosition(position => {
                    observer.next(position);
                    observer.complete;
                    //console.log('watchLocationObservable', position);
                }, (error) => console.log(error), { enableHighAccuracy: true });
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        });
    }
    stopWatchLocation() {
        navigator.geolocation.clearWatch(this.watchId);
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
        return d * 1000; // in metres
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

/***/ "./src/app/shared/mock-api.ts":
/*!************************************!*\
  !*** ./src/app/shared/mock-api.ts ***!
  \************************************/
/*! exports provided: MuditaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuditaApi", function() { return MuditaApi; });
const MuditaApi = {
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
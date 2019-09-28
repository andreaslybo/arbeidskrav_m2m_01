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

module.exports = "body, html {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nnav {\r\n    width: 100%;\r\n    height: 70px;\r\n    background: #292929;\r\n    color: #FFF;\r\n}\r\n.inner-nav {\r\n    width: 80%;\r\n    max-width: 1366px;\r\n    height: 70px;\r\n    margin: auto;\r\n    line-height: 70px;\r\n}\r\n.inner-nav p {\r\n    margin: 0px;\r\n    font-weight: 400;\r\n    font-size: 2em;\r\n}\r\n.content {\r\n    padding: 20px 30px;\r\n    width: 100%;\r\n    max-width: 1366px;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxubmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI5MjkyOTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5pbm5lci1uYXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMTM2NnB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbn1cclxuLmlubmVyLW5hdiBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"inner-nav\">\n        <p>iFarm</p>\n    </div>\n</nav>\n<div class=\"content\">\n    <h1>Shed 1:</h1>\n    <div class=\"sensors\" *ngIf=\"this.sensor\">\n      <app-sensor [temp]=\"this.sensor.temperature\"\n        [humid]=\"this.sensor.humidity\">\n      </app-sensor>\n    </div>\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sensor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensor.model */ "./src/app/sensor.model.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'iFarm 1.0';
        this.updates = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        this.updates += 1;
        setInterval(function () {
            _this.getData();
            _this.updates += 1;
            console.log(_this.updates);
        }, 30000);
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        return this.http.get('https://api.thingspeak.com/channels/873228/feeds.json?api_key=CUJ82PBUCPDSSYDV&results=1')
            .subscribe(function (res) {
            var newSensor = new _sensor_model__WEBPACK_IMPORTED_MODULE_3__["Sensor"](res.feeds[0].field1, res.feeds[0].field2);
            console.log(newSensor);
            _this.sensor = newSensor;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sensor/sensor.component */ "./src/app/sensor/sensor.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_4__["SensorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sensor.model.ts":
/*!*********************************!*\
  !*** ./src/app/sensor.model.ts ***!
  \*********************************/
/*! exports provided: Sensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sensor", function() { return Sensor; });
var Sensor = /** @class */ (function () {
    function Sensor(temp, humid) {
        this.temperature = 0;
        this.humidity = 0;
        this.temperature = temp;
        this.humidity = humid;
    }
    return Sensor;
}());



/***/ }),

/***/ "./src/app/sensor/sensor.component.css":
/*!*********************************************!*\
  !*** ./src/app/sensor/sensor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sensor {\r\n    width: calc(50% - 60px - 50px);\r\n    min-width: 280px;\r\n    height: 250px;\r\n    padding: 15px 25px;\r\n    background: #4a90e2;\r\n    color: #FFF;\r\n    float: left;\r\n    /*margin-right: 50px;*/\r\n}\r\n.sensor-title {\r\n    min-width: 70%;\r\n    height: 200px;\r\n    float: left;\r\n    font-size: 2.5em;\r\n}\r\n.sensor-data {\r\n    min-width: 30%;\r\n    height: 200px;\r\n    float: left;\r\n    text-align: right;\r\n    font-size: 2em;\r\n}\r\n.sensor-unit {\r\n    height: 50px;\r\n    float: right;\r\n    text-align: right;\r\n    font-size: 2em;\r\n}\r\n.warning {\r\n    background: red;\r\n}\r\n.ml-50 {\r\n    margin-left: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZW5zb3Ivc2Vuc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwL3NlbnNvci9zZW5zb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW5zb3Ige1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNjBweCAtIDUwcHgpO1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGE5MGUyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiA1MHB4OyovXHJcbn1cclxuLnNlbnNvci10aXRsZSB7XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLnNlbnNvci1kYXRhIHtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4uc2Vuc29yLXVuaXQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4ud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLm1sLTUwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sensor/sensor.component.html":
/*!**********************************************!*\
  !*** ./src/app/sensor/sensor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sensor-container\">\n  <div class=\"sensor warning\" [ngClass]=\"{'warning': temp < 22}\">\n      <div class=\"sensor-title\">Temperature</div>\n      <div class=\"sensor-data\">{{ temp | number: '1.2-2'}}</div>\n      <div class=\"sensor-unit\">°C</div>\n  </div>\n\n  <div class=\"sensor ml-50\">\n      <div class=\"sensor-title\">Humidity</div>\n      <div class=\"sensor-data\">{{ humid | number: '1.2-2'}}</div>\n      <div class=\"sensor-unit\">%</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sensor/sensor.component.ts":
/*!********************************************!*\
  !*** ./src/app/sensor/sensor.component.ts ***!
  \********************************************/
/*! exports provided: SensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorComponent", function() { return SensorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SensorComponent = /** @class */ (function () {
    function SensorComponent() {
        this.humid = 0;
        this.temp = 0;
    }
    SensorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SensorComponent.prototype, "humid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SensorComponent.prototype, "temp", void 0);
    SensorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sensor',
            template: __webpack_require__(/*! ./sensor.component.html */ "./src/app/sensor/sensor.component.html"),
            styles: [__webpack_require__(/*! ./sensor.component.css */ "./src/app/sensor/sensor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SensorComponent);
    return SensorComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Andreas\Desktop\M2M\Arbeidskrav_1\arbeidskrav1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
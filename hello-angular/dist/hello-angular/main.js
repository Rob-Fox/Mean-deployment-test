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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-info/pet-info.component */ "./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/pets', pathMatch: 'full' },
    { path: 'pets', component: _task_task_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'pets/new', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_2__["NewPetComponent"] },
    { path: 'pets/:id', component: _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_4__["PetInfoComponent"] },
    { path: 'pets/:id/edit', component: _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_5__["EditInfoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_2__["NewPetComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>{{ title }}</h1>\n  <h3>{{ tag_line }}</h3>\n</div>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    // tag_line_home = 'These pets are looking for a home!';
    // pets = [];
    // pet = {};
    // // new_pet: any;
    // edit_pet: any;
    // // error_check: Boolean = false;
    // // error_arr = [];
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'Pet Shelter';
    }
    AppComponent.prototype.ngOnInit = function () {
        // // this.new_pet = { name: '', type: '', description: '' };
        // this.edit_pet = {Name: ''};
        // let pets_get = this._httpService.getPets();
        // pets_get.subscribe(data => {
        //   console.log('displaying pets', data);
        //   this.pets = data['data'];
        //   });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pet-info/pet-info.component */ "./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
                _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_8__["PetInfoComponent"],
                _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_9__["EditInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-info/edit-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-info/edit-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>{{ title }}</h1>\n    \n</div>\n<h3>{{ tag_line }}</h3>\n    <div *ngIf='error_check'>\n      <p *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</p>\n    </div>\n<div>\n  <form (submit)='edit_submit(edit_pet._id)'>\n    Name: <input type='text' name='e_name' [(ngModel)]='edit_pet.Name'><br>\n    Type: <input type='text' name='e_type' [(ngModel)]='edit_pet.type'><br>\n    Description: <input type='text' name='e_details' [(ngModel)]='edit_pet.description'><br>\n    Skill One: <input type='text' name='skill_one' [(ngModel)]='edit_pet.skill_1'><br>\n    Skill Two: <input type='text' name='skill_two' [(ngModel)]='edit_pet.skill_2'><br>\n    Skill Three: <input type='text' name='skill_three' [(ngModel)]='edit_pet.skill_3'><br>\n    <button (click)='cancel_click()'>Cancel</button> &nbsp;\n    <input type='submit' value='Edit Pet'>\n  </form>\n    <nav>\n        \n        <!-- <button (click)='change_pet(edit_pet._id)'>Edit Pet</button> -->\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/edit-info/edit-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.ts ***!
  \**************************************************/
/*! exports provided: EditInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfoComponent", function() { return EditInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditInfoComponent = /** @class */ (function () {
    function EditInfoComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'Edit Info';
        this.pets = [];
        this.error_check = false;
        this.error_arr = [];
    }
    EditInfoComponent.prototype.ngOnInit = function () {
        this.edit_pet = { _id: '', Name: '', type: '', details: '', skill_1: '', skill_2: '', skill_3: '' };
        this.id = this._route.snapshot.paramMap.get('id');
        console.log('ID gotten from parammap', this.id);
        this.get_pet(this.id);
    };
    EditInfoComponent.prototype.get_pet = function (ID) {
        var _this = this;
        var pet = this._httpService.findPets(ID);
        pet.subscribe(function (data) {
            console.log('Found pet data', data);
            _this.edit_pet = data['data'];
        });
    };
    EditInfoComponent.prototype.cancel_click = function () {
        this._router.navigateByUrl('/pets');
    };
    EditInfoComponent.prototype.edit_submit = function (ID) {
        var _this = this;
        console.log('Pet edited');
        var editable_pet = this._httpService.edit_pet(ID, this.edit_pet);
        editable_pet.subscribe(function (data) {
            console.log('got an editable pet');
            if (data['error'] !== undefined) {
                console.log('Adding a pet', data['error']);
                if (data['error']['errors'] !== undefined) {
                    console.log('there were errors');
                    if (data['error']['errors']['Name'] !== undefined) {
                        console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
                        // console.log('Error_arr', this.error_arr);
                    }
                    if (data['error']['errors']['type'] !== undefined) {
                        console.log('data["error"]["errors"]["type"]', data['error']['errors']['type']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['type']['message'] });
                        // console.log('Error_arr', this.error_arr);
                    }
                    if (data['error']['errors']['description'] !== undefined) {
                        console.log('data["error"]["errors"]["description"]', data['error']['errors']['description']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['description']['message'] });
                        console.log('Error_arr', _this.error_arr);
                    }
                }
            }
            else {
                console.log('no errors');
                _this._router.navigate(['/pets']);
            }
        });
        if (this.error_arr === []) {
            console.log('empty errors');
        }
        this.error_arr = [];
    };
    EditInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-info',
            template: __webpack_require__(/*! ./edit-info.component.html */ "./src/app/edit-info/edit-info.component.html"),
            styles: [__webpack_require__(/*! ./edit-info.component.css */ "./src/app/edit-info/edit-info.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditInfoComponent);
    return EditInfoComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.findPets = function (ID) {
        console.log('made it to service');
        return this._http.get('/pets/' + ID);
    };
    HttpService.prototype.deletePets = function (ID) {
        var tempObservable = this._http.delete('/pets/' + ID);
        tempObservable.subscribe(function (data) { return console.log('Deleted pet with id: ', data); });
        return this._http.get('/pets');
    };
    HttpService.prototype.add_pet = function (new_pet) {
        console.log('made it to service');
        console.log(new_pet);
        return this._http.post('/pets', new_pet);
    };
    HttpService.prototype.add_skills = function (new_skills) {
        console.log('made it to service');
        console.log(new_skills);
        return this._http.post('/pets', new_skills);
    };
    HttpService.prototype.edit_pet = function (ID, edit_pet) {
        console.log('Made it to edit_pet in SERVICE', ID, edit_pet);
        return this._http.put('/pets/' + ID, edit_pet);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-pet/new-pet.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.html":
/*!************************************************!*\
  !*** ./src/app/new-pet/new-pet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>{{ title }}</h1>\n    <h3>{{ tag_line }}</h3>\n</div>\n<div>\n    <h3> New Pet: </h3>\n    <div *ngIf='error_check'>\n        <p *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</p>\n    </div>\n    <form (submit)='on_submit()'>\n        <!-- <p> {{new_pet | json }} </p> -->\n        Name:\n        <input type='text' name='new_pet.Name' [(ngModel)]='new_pet.Name'>\n        <br> Type:\n        <input type='text' name='new_pet.type' [(ngModel)]='new_pet.type'>\n        <br> Description:\n        <input type='text' name='new_pet.description' [(ngModel)]='new_pet.description'>\n        <br> Skill One:\n        <input type='text' name='new_pet.skill_1' [(ngModel)]='new_pet.skill_1'>\n        <br> Skill Two:\n        <input type='text' name='new_pet.skill_2' [(ngModel)]='new_pet.skill_2'>\n        <br> Skill Three:\n        <input type='text' name='new_pet.skill_3' [(ngModel)]='new_pet.skill_3'>\n        <br>\n        <button (click)='cancel_click()'>Cancel</button> &nbsp;\n        <input type='submit' value='Create pet'>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.ts ***!
  \**********************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPetComponent = /** @class */ (function () {
    function NewPetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // title = 'Pet Shelter';
        this.tag_line = 'Know of a pet needing a home?';
        this.error_check = false;
        this.error_arr = [];
    }
    NewPetComponent.prototype.ngOnInit = function () {
        this.new_pet = { Name: '', type: '', description: '' };
    };
    NewPetComponent.prototype.on_submit = function () {
        var _this = this;
        console.log('form submitted');
        var add_pet = this._httpService.add_pet(this.new_pet);
        // console.log(add_task);
        add_pet.subscribe(function (data) {
            console.log('Adding a pet', data['error']);
            if (data['error'] !== undefined) {
                if (data['error']['errors']['Name'] !== undefined) {
                    console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
                    // console.log('Error_arr', this.error_arr);
                }
                else if (data['error']['errors']['type'] !== undefined) {
                    console.log('data["error"]["errors"]["type"]', data['error']['errors']['type']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['type']['message'] });
                    // console.log('Error_arr', this.error_arr);
                }
                else if (data['error']['errors']['description'] !== undefined) {
                    console.log('data["error"]["errors"]["description"]', data['error']['errors']['description']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['description']['message'] });
                    console.log('Error_arr', _this.error_arr);
                }
            }
            else {
                _this._router.navigate(['/pets']);
            }
        });
        this.new_pet = { Name: '', type: '', description: '', skill_1: '', skill_2: '', skill_3: '' };
        this.error_arr = [];
        // this._router.navigate(['/pets']);
    };
    NewPetComponent.prototype.cancel_click = function () {
        this._router.navigateByUrl('/pets');
    };
    NewPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-pet',
            template: __webpack_require__(/*! ./new-pet.component.html */ "./src/app/new-pet/new-pet.component.html"),
            styles: [__webpack_require__(/*! ./new-pet.component.css */ "./src/app/new-pet/new-pet.component.css")],
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewPetComponent);
    return NewPetComponent;
}());



/***/ }),

/***/ "./src/app/pet-info/pet-info.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home_link{\r\n    display: inline-block;\r\n    float: right;\r\n    vertical-align: top;\r\n    color: hotpink;\r\n\r\n}"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a id='home_link' [routerLink]=\"['/pets']\">Home</a>\n<div style=\"text-align:center\">\n    <h1>{{ title }}</h1>\n</div>\n<h3>{{ tag_line }}{{ edit_pet.Name }}</h3>\n<div>\n    <span class='header'>Pet Type: </span><span>{{ edit_pet.type }}</span><br>\n    <span class='header'>Description: </span><span>{{ edit_pet.description }}</span><br>\n    <span class='Header'>Likes: </span><span>{{ edit_pet.likes }}</span><br>\n    <span class='header'>Skills: </span>\n    <span class='skills' *ngIf='edit_pet.skill_1 !== \"\"'>{{ edit_pet.skill_1 }}</span><br>\n    <span class='skills' *ngIf='edit_pet.skill_2 !== \"\"'>{{ edit_pet.skill_2 }}</span><br>\n    <span class='skills' *ngIf='edit_pet.skill_3 !== \"\"'>{{ edit_pet.skill_3 }}</span><br>\n    \n    <nav>\n        <!-- <a [routerLink]=\"['/pets']\">Cancel</a> &nbsp; -->\n        <!-- <button (click)='cancel_click()'>Cancel</button> &nbsp; -->\n        <!-- <div *ngIf='like_button'> -->\n            <button *ngIf='like_button' (click)='like_click(edit_pet._id)'>Like</button> &nbsp;\n        <!-- </div> -->\n        <button (click)='remove_pet(edit_pet._id)'>Adopt</button>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.ts ***!
  \************************************************/
/*! exports provided: PetInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetInfoComponent", function() { return PetInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetInfoComponent = /** @class */ (function () {
    function PetInfoComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'Details about ';
        this.pets = [];
        this.like_button = true;
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        this.edit_pet = { _id: '', Name: '', type: '', details: '', skill_1: '', skill_2: '', skill_3: '', likes: '' };
        this.id = this._route.snapshot.paramMap.get('id');
        console.log('ID gotten from parammap', this.id);
        this.get_pet(this.id);
    };
    PetInfoComponent.prototype.get_pet = function (ID) {
        var _this = this;
        var pet = this._httpService.findPets(ID);
        pet.subscribe(function (data) {
            console.log('Found pet data', data);
            _this.edit_pet = data['data'];
        });
    };
    PetInfoComponent.prototype.remove_pet = function (ID) {
        var pet = this._httpService.deletePets(ID);
        pet.subscribe(function (data) {
            console.log('Component deleting pet');
        });
        this._router.navigateByUrl('/pets');
    };
    PetInfoComponent.prototype.cancel_click = function () {
        this._router.navigateByUrl('/pets');
    };
    PetInfoComponent.prototype.like_click = function (ID) {
        this.like_button = false;
        this.edit_pet.likes += 1;
        console.log(this.like_button);
        var pet = this._httpService.edit_pet(ID, this.edit_pet);
        pet.subscribe(function (data) {
            console.log('got an editable pet');
            // this._router.navigate(['/pets']);
        });
    };
    PetInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-info',
            template: __webpack_require__(/*! ./pet-info.component.html */ "./src/app/pet-info/pet-info.component.html"),
            styles: [__webpack_require__(/*! ./pet-info.component.css */ "./src/app/pet-info/pet-info.component.css")],
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PetInfoComponent);
    return PetInfoComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody:nth-child(odd) {background: #CCC}\r\ntbody:nth-child(even) {background: #FFF}\r\nthead{\r\n    background-color: #CCC;\r\n}"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>{{ title }}</h1>\n    <h3>{{ tag_line }}</h3>\n</div>\n<a [routerLink]=\"['/pets/new']\">Add a pet to the shelter</a>\n<div>\n    \n</div>\n<table>\n    <thead>\n        <td>Name</td>\n        <td>Type</td>\n        <td>Actions</td>\n    </thead>\n    <tbody *ngFor='let item of pets'>\n\n        <tr>\n            <td>{{item.Name}}</td>\n            <td>{{item.type}}</td>\n            <td>\n                <button (click)='showPet(item._id)' class='details_button'>Show Details</button>\n                <button (click)='on_edit(item._id)' class='edit_button'>Edit Pet</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<!-- <app-task *ngIf='pet' [petToShow]='pet'></app-task> -->\n<!-- <h2 *ngIf='task'>Task Details: </h2>\n<ul *ngIf='task'>\n  <li>ID: {{task._id}}</li>\n  <li>Completed?: {{task.completed}}</li>\n  <li>Title: {{task.title}}</li>\n  <li>Description: {{task.description}}</li>\n  </ul> -->\n<!-- <div>\n<h3> New Pet: </h3>\n<p *ngIf='error_check'>\n  <span *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</span>\n</p>\n<form (submit)='on_submit()'>\n  <p> {{new_pet | json }} </p>\n  Name: <input type='text' name='new_pet.name' [(ngModel)]='new_pet.name'><br>\n  Type: <input type='text' name='new_pet.type' [(ngModel)]='new_pet.type'><br>\n  Description: <input type='text' name='new_pet.description' [(ngModel)]='new_pet.description'><br>\n  Skill One: <input type='text' name='new_pet.skill_1' [(ngModel)]='new_pet.skill_1'><br>\n  SKill Two: <input type='text' name='new_pet.skill_2' [(ngModel)]='new_pet.skill_2'><br>\n  Skill Three: <input type='text' name='new_pet.skill_3' [(ngModel)]='new_pet.skill_3'><br>\n  <input type='submit' value='Create pet'>\n</form>\n</div>\n<div *ngIf='pet'>\n<h3> Edit Pet: </h3>\n<form (submit)='on_edit(author._id)'>\n  <p> {{ pet.name }}</p>\n  Name: <input type='text' name='edit_pet.name' [(ngModel)]='edit_pet.name' value={{pet.name}}><br>\n  <input type='submit' value='Edit pet'>\n</form>\n</div> -->\n<!-- <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n<button [routerLink]=\"['/beta']\">Load Beta</button> -->"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    // error_check: Boolean = false;
    // error_arr = [];
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // title = 'Pet Shelter';
        this.tag_line = 'These pets are looking for a home!';
        this.pets = [];
        this.pet = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.new_pet = { name: '', type: '', description: '' };
        this.edit_pet = { Name: '' };
        var pets_get = this._httpService.getPets();
        pets_get.subscribe(function (data) {
            console.log('displaying pets', data);
            _this.pets = data['data'];
        });
    };
    // on_submit() {
    //   console.log('form submitted');
    //   let add_pet = this._httpService.add_pet(this.new_pet);
    //   // console.log(add_task);
    //   add_pet.subscribe(data => {
    //     console.log('Adding a pet', data['error']);
    //     if ( data['error'] !==  '') {
    //       this.error_check = true;
    //       this.error_arr.push({'bullshit': data['error']['errors']['name']['message']});
    //       console.log(this.error_arr);
    //     }
    //   });
    //   this.new_pet = { name: '', type: '', description: '', skill_1: '', skill_2: '', skill_3: ''};
    //   this.error_arr = [];
    // }
    HomeComponent.prototype.getPets = function () {
        var _this = this;
        var observable_pets = this._httpService.getPets();
        observable_pets.subscribe(function (data) {
            console.log('Got all pets', data);
            _this.pets = data['data'];
            console.log('Hey', _this.pets);
        });
        // this._httpService.getTasks();
    };
    HomeComponent.prototype.showPet = function (ID) {
        var _this = this;
        console.log('attempting to show pet', ID);
        var show_pet_observable = this._httpService.findPets(ID);
        show_pet_observable.subscribe(function (data) {
            console.log('made it in to subscribe', data['data']);
            _this.pet = data['data'];
        });
        this._router.navigate(['/pets/' + ID]);
        // let observable_pet = this._httpService.findPets(ID);
        // observable_pet.subscribe(data => {
        //   console.log('Got specified pet', data);
        //   this.pet = data['data'];
        //   console.log('dude', this.pet);
        // });
    };
    HomeComponent.prototype.on_edit = function (ID) {
        // console.log('Pet edited');
        // let editable_pet = this._httpService.edit_pet(ID, this.edit_pet);
        // // let editable_task = this._httpService.findTasks(ID);
        // editable_pet.subscribe(data => {
        //   console.log('got an editable pet');
        // });
        this._router.navigate(['/pets/' + ID + '/edit']);
    };
    HomeComponent.prototype.delete_pet = function (ID) {
        var deletable_pets = this._httpService.deletePets(ID);
    };
    HomeComponent.prototype.go_new = function () {
        this._router.navigate(['/new']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rob\Documents\DojoAssignments\Mean\ANGULAR\Belt Exam\hello-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
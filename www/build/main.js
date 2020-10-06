webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ui__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var vm;
var HomePage = (function () {
    function HomePage(ffxi, ui) {
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        vm = this;
    }
    HomePage.prototype.load = function () {
    };
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    HomePage.prototype.ionViewWillEnter = function () {
        //load
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //if ('proximity' in navigator) {
        //	//alert('ProximitySensor');
        //	let proximity: any = navigator['proximity'],
        //		onSuccess = (state) => {
        //			//alert('Proximity state: ' + (state ? 'near' : 'far'));
        //			console.info(state);
        //		};
        //	proximity.enableSensor();
        //	setInterval(function () {
        //		proximity.getProximityState(onSuccess);
        //	}, 1000);
        //}
    };
    HomePage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\RareBear\Weakness\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle></button>\n\n        </ion-buttons>\n\n        <ion-title>FFXI PROC</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button click="timer()">{{ffxi.vanatime}}</button>\n\n        </ion-buttons>\n\n        <!--<span data-role="view-title" data-align="center"></span>-->\n\n        <!--<a data-role="button" data-align="right" data-click-on="down" href="#mvClockSettings" data-rel="modalview" data-bind="class: { active: modal }"><span data-bind="text: vanaTime">4:20</span></a>-->\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1>FFXI Weakness Triggers (PROC)</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>Notorious Monsters in Abyssea and Voidwatch and all in Dynamis have vulnerabilites that are procedural random occurances, or &ldquo;PROC&rdquo;s.</p>\n\n            <h2>Abyssea Notorious Monsters</h2>\n\n            <ul>\n\n                <li><img src="../assets/images/proc/red24.png" /> Weapon Skills:<br />Atmas and NM key items</li>\n\n                <li><img src="../assets/images/proc/yellow24.png" /> Magic Spells:<br />EX Empyrean armor upgrade items</li>\n\n                <li><img src="../assets/images/proc/blue24.png" /> Weapon Skills:<br />RA/EX weapons and armor</li>\n\n            </ul>\n\n            <h2>Dynamis (# of Time Extensions)</h2>\n\n            <ul>\n\n                <li><img src="../assets/images/proc/blue24.png" /> 3&times; TE:<br />single currency drop slot</li>\n\n                <li><img src="../assets/images/proc/yellow24.png" /> 4&times; TE:<br />additional currency drop slot</li>\n\n                <li><img src="../assets/images/proc/red24.png" /> 5&times; TE:<br />additional 100% drop slot</li>\n\n                <li><img src="../assets/images/proc/white24.png" /> No sub job (CoP areas):<br /> 100% hundred-piece drop slot</li>\n\n            </ul>\n\n            <p>Swipe right and select a category.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\RareBear\Weakness\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_ffxi__["a" /* FFXIService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ui__["a" /* UIService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(220);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ui__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_abyssea_abyssea__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dynamis_dynamis__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_voidwatch_voidwatch__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_abyssea_abyssea__["a" /* AbysseaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dynamis_dynamis__["a" /* DynamisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_voidwatch_voidwatch__["a" /* VoidwatchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    locationStrategy: 'path',
                    swipeBackEnabled: false
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], name: 'home', segment: '' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_abyssea_abyssea__["a" /* AbysseaPage */], name: 'abyssea', segment: 'abyssea/:type' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_dynamis_dynamis__["a" /* DynamisPage */], name: 'dynamis', segment: 'dynamis/:type' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_voidwatch_voidwatch__["a" /* VoidwatchPage */], name: 'voidwatch', segment: 'voidwatch/:type' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_abyssea_abyssea__["a" /* AbysseaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dynamis_dynamis__["a" /* DynamisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_voidwatch_voidwatch__["a" /* VoidwatchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__providers_ffxi__["a" /* FFXIService */],
                __WEBPACK_IMPORTED_MODULE_7__providers_ui__["a" /* UIService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ui__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, status, splash, ffxi, ui, mc) {
        var _this = this;
        this.platform = platform;
        this.status = status;
        this.splash = splash;
        this.ffxi = ffxi;
        this.ui = ui;
        this.mc = mc;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.json = __webpack_require__(273);
        this.menu = [
            {
                title: "Abyssea",
                items: [
                    { order: 1, title: "Weapon Skills", icon: "assets/images/proc/red16.png", name: "abyssea", type: "red" },
                    { order: 2, title: "Magic Spells", icon: "assets/images/proc/yellow16.png", name: "abyssea", type: "yellow" },
                    { order: 3, title: "6:00&ndash;13:59 Piercing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-piercing" },
                    { order: 4, title: "14:00&ndash;21:59 Slashing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-slashing" },
                    { order: 5, title: "22:00&ndash;5:59 Blunt", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-blunt" }
                ]
            }, {
                title: "Dynamis",
                items: [
                    { order: 1, title: "Beastmen", icon: "assets/images/type/beastmen.png", name: "dynamis", type: "beastmen" },
                    { order: 2, title: "O. Bronzepiece", icon: "assets/images/currency/ordelle.png", name: "dynamis", type: "ordelle" },
                    { order: 2, title: "T. Whiteshell", icon: "assets/images/currency/tukuku.png", name: "dynamis", type: "tukuku" },
                    { order: 4, title: "1 Byne Bill", icon: "assets/images/currency/byne.png", name: "dynamis", type: "byne" }
                ]
            }, {
                title: "Voidwatch",
                items: [
                    { order: 1, title: "Job Ability", icon: "assets/images/type/JA.png", name: "voidwatch", type: "job-ability" },
                    { order: 2, title: "Black Magic", icon: "assets/images/type/BLM.png", name: "voidwatch", type: "black-magic" },
                    { order: 3, title: "White Magic", icon: "assets/images/type/WHM.png", name: "voidwatch", type: "white-magic" },
                    { order: 4, title: "Ninjutsu", icon: "assets/images/type/NIN.png", name: "voidwatch", type: "ninjutsu" },
                    { order: 5, title: "Bard Songs", icon: "assets/images/type/BRD.png", name: "voidwatch", type: "bard-songs" },
                    { order: 6, title: "Blue Magic", icon: "assets/images/type/BLU.png", name: "voidwatch", type: "blue-magic" }
                ]
            },
            {
                title: "About",
                items: [
                    { order: 1, title: "FFXI PROC", icon: "assets/images/proc/white16.png", name: "home", type: "index" }
                ]
            }
        ];
        platform.ready().then(function () {
            console.log('platform ready');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            status.overlaysWebView(true);
            status.styleLightContent();
            splash.hide();
            //0x00000000
            //this.update(lc);
            platform.resume.subscribe(function (e) {
                console.log('resume');
                //this.update(lc);
            });
            platform.pause.subscribe(function (e) {
                console.log('pause');
            });
            //this.version = `Version ${this.json.version}`;
            _this.version = "Version 1.5.0";
            //process.env.npm_package_version
            //this.copyright = `&copy; ${new Date().getFullYear()} ${process.env.npm_package_author}`;
            _this.copyright = "&copy; " + new Date().getFullYear() + " RARE BEAR SOFTWARE LTD";
            ui.page = 'home';
        });
    }
    MyApp.prototype.timer = function () {
        console.debug('show timer modal');
        //this.ui.modal
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\RareBear\Weakness\src\app\app.html"*/'<ion-menu [content]="content" persistent="true" side="left" type="push">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Weakness</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <ng-container *ngFor="let group of menu">\n\n                <ion-list-header>{{group.title}}</ion-list-header>\n\n                <button ion-item menuClose *ngFor="let item of group.items" (click)="ui.swap(item.name, { type: item.type }, { animate: false })">\n\n                    <img [src]="item.icon" /><span [innerHTML]="item.title"></span>\n\n                </button>\n\n            </ng-container>\n\n        </ion-list>\n\n        <div class="version" [innerHTML]="version"></div>\n\n        <div class="copyright" [innerHTML]="copyright"></div>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\RareBear\Weakness\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ffxi__["a" /* FFXIService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ui__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = {"name":"Weakness","version":"1.5.0","author":"RARE BEAR SOFT LTD","homepage":"https://rarebearsoft.com","description":"PROC Triggers for FFXI","private":true,"scripts":{"web":"ionic-app-scripts serve -c","ios":"ionic-app-scripts serve -b -c -t ios","android":"ionic-app-scripts serve -b -c -t android","clean":"ionic-app-scripts clean","build":"ionic-app-scripts build --prod","lint":"ionic-app-scripts lint"},"dependencies":{"@angular/animations":"5.0.0","@angular/common":"5.0.0","@angular/compiler":"5.0.0","@angular/compiler-cli":"5.0.0","@angular/core":"5.0.0","@angular/forms":"5.0.0","@angular/http":"5.0.0","@angular/platform-browser":"5.0.0","@angular/platform-browser-dynamic":"5.0.0","@ionic-native/core":"4.20.0","@ionic-native/native-page-transitions":"4.20.0","@ionic-native/splash-screen":"4.20.0","@ionic-native/status-bar":"4.20.0","@ionic/storage":"2.1.3","cordova-android":"8.1.0","cordova-ios":"^5.1.1","cordova-plugin-androidx":"1.0.2","cordova-plugin-androidx-adapter":"1.1.0","cordova-plugin-ionic-webview":"2.5.3","cordova-plugin-splashscreen":"5.0.4","cordova-plugin-statusbar":"2.4.3","cordova-plugin-whitelist":"1.3.3","ionic-angular":"3.9.9","ionicons":"3.0.0","rxjs":"5.5.11","sw-toolbox":"3.6.0","underscore":"1.9.1","zone.js":"0.8.18"},"devDependencies":{"@ionic/app-scripts":"3.2.4","@types/node":"7.0.7","typescript":"2.4.2"},"cordova":{"plugins":{"cordova-plugin-ionic-webview":{},"cordova-plugin-splashscreen":{},"cordova-plugin-statusbar":{},"cordova-plugin-whitelist":{}},"platforms":["android","ios"]}}

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbysseaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var vm;
var AbysseaPage = (function () {
    function AbysseaPage(params, ffxi, ui) {
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.list = [];
        vm = this;
    }
    AbysseaPage.prototype.load = function () {
    };
    AbysseaPage.prototype.timer = function () {
    };
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    AbysseaPage.prototype.ionViewWillEnter = function () {
        //load
        vm.type = vm.params.data.type;
        vm.title = vm.type.replace(/-/g, ' ');
    };
    AbysseaPage.prototype.ionViewDidEnter = function () {
    };
    AbysseaPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    AbysseaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abyssea',template:/*ion-inline-start:"D:\RareBear\Weakness\src\pages\abyssea\abyssea.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle></button>\n\n        </ion-buttons>\n\n        <ion-title>Abyssea {{title}}</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button small (click)="timer()" [innerHTML]="ffxi.vanatime"></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngSwitch]="type">\n\n    <ng-container *ngSwitchCase="\'red\'">\n\n        <ion-list *ngFor="let group of ffxi.abyssea.red">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <img [src]="\'../assets/images/weapons/\' + item.weapon + \'.png\'" /><span [innerHTML]="item.weaponskill"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'yellow\'">\n\n        <ion-list *ngFor="let group of ffxi.abyssea.yellow">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <img [src]="\'../assets/images/type/\' + item.type + \'.png\'" /><span [innerHTML]="item.spell"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'blue-piercing\'">\n\n        <ion-list *ngFor="let group of ffxi.abyssea.blue.piercing">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <img [src]="\'../assets/images/weapons/\' + item.weapon + \'.png\'" /><span [innerHTML]="item.weaponskill"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'blue-slashing\'">\n\n        <ion-list *ngFor="let group of ffxi.abyssea.blue.slashing">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <img [src]="\'../assets/images/weapons/\' + item.weapon + \'.png\'" /><span [innerHTML]="item.weaponskill"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'blue-blunt\'">\n\n        <ion-list *ngFor="let group of ffxi.abyssea.blue.blunt">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <img [src]="\'../assets/images/weapons/\' + item.weapon + \'.png\'" /><span [innerHTML]="item.weaponskill"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n</ion-content>\n\n<ion-footer *ngIf="type && type.startsWith(\'blue\')">\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="type">\n\n            <ion-segment-button value="blue-piercing"><img src="../assets/images/time/piercing.png" /><span>Piercing</span></ion-segment-button>\n\n            <ion-segment-button value="blue-slashing"><img src="../assets/images/time/slashing.png" /><span>Slashing</span></ion-segment-button>\n\n            <ion-segment-button value="blue-blunt"><img src="../assets/images/time/blunt.png" /><span>Blunt</span></ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\RareBear\Weakness\src\pages\abyssea\abyssea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__["a" /* FFXIService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui__["a" /* UIService */]])
    ], AbysseaPage);
    return AbysseaPage;
}());

//# sourceMappingURL=abyssea.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var vm;
var DynamisPage = (function () {
    function DynamisPage(params, ffxi, ui) {
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.list = [];
        vm = this;
    }
    DynamisPage.prototype.load = function () {
    };
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    DynamisPage.prototype.ionViewWillEnter = function () {
        //load
        vm.type = vm.params.data.type;
    };
    DynamisPage.prototype.ionViewDidEnter = function () {
    };
    DynamisPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    DynamisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamis',template:/*ion-inline-start:"D:\RareBear\Weakness\src\pages\dynamis\dynamis.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle></button>\n\n        </ion-buttons>\n\n        <ion-title>Dynamis {{title}}</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button click="timer()">{{ffxi.vanatime}}</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngSwitch]="type">\n\n    <ng-container *ngSwitchCase="\'beastmen\'">\n\n        <ion-list *ngFor="let group of ffxi.dynamis.beastmen">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'ordelle\'">\n\n        <ion-list *ngFor="let group of ffxi.dynamis.ordelle">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item.zone"></span><ion-note item-end>{{item.mob}}</ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'tukuku\'">\n\n        <ion-list *ngFor="let group of ffxi.dynamis.tukuku">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item.zone"></span><ion-note item-end>{{item.mob}}</ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'byne\'">\n\n        <ion-list *ngFor="let group of ffxi.dynamis.byne">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item.zone"></span><ion-note item-end>{{item.mob}}</ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-segment [(ngModel)]="type">\n\n        <ion-segment-button value="beastmen">\n\n            <img src="../assets/images/type/beastmen.png" />\n\n            <ion-label>Beastmen</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="ordelle">\n\n            <img src="../assets/images/currency/ordelle.png" />\n\n            <ion-label>O. Bronzepiece</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="tukuku">\n\n            <img src="../assets/images/currency/tukuku.png" />\n\n            <ion-label>T. Whiteshell</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="byne">\n\n            <img src="../assets/images/currency/byne.png" />\n\n            <ion-label>1 Byne Bill</ion-label>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>'/*ion-inline-end:"D:\RareBear\Weakness\src\pages\dynamis\dynamis.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__["a" /* FFXIService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui__["a" /* UIService */]])
    ], DynamisPage);
    return DynamisPage;
}());

//# sourceMappingURL=dynamis.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoidwatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ui__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var vm;
var VoidwatchPage = (function () {
    function VoidwatchPage(params, ffxi, ui) {
        this.params = params;
        this.ffxi = ffxi;
        this.ui = ui;
        this.debug = false;
        this.orientation = 0;
        this.list = [];
        vm = this;
    }
    VoidwatchPage.prototype.load = function () {
    };
    //tips = _.debounce(() => {
    //	//let mv = vm.mo
    //	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
    //	vm.modal.onDidDismiss(() => {
    //		if (!vm.overlay) {
    //			vm.load();
    //		}
    //		if (!vm.seen) {
    //			vm.seen = true;
    //			vm.storage.create('settings').then((sso: SecureStorageObject) => {
    //				sso.set('seentips', 'true');
    //			});
    //		}
    //	});
    //	vm.modal.present();
    //}, 400, true);
    VoidwatchPage.prototype.ionViewWillEnter = function () {
        //load
        vm.type = vm.params.data.type;
        vm.title = vm.type.replace(/-/g, ' ');
    };
    VoidwatchPage.prototype.ionViewDidEnter = function () {
    };
    VoidwatchPage.prototype.ionViewWillLeave = function () {
        //if (window['DeviceOrientationEvent']) {
        //	window.removeEventListener('deviceorientation', vm.tilt);
        //}
    };
    VoidwatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voidwatch',template:/*ion-inline-start:"D:\RareBear\Weakness\src\pages\voidwatch\voidwatch.html"*/'<ion-header>\n\n    <ion-navbar [hideBackButton]="true">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle></button>\n\n        </ion-buttons>\n\n        <ion-title>Voidwatach {{title}}</ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button click="timer()">{{ffxi.vanatime}}</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content [ngSwitch]="type">\n\n    <ng-container *ngSwitchCase="\'job-ability\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.jobAbility">\n\n            <ion-list-header>\n\n                <span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'black-magic\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.blackMagic">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'white-magic\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.whiteMagic">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'ninjutsu\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.ninjutsu">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'bard-songs\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.bardSongs">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n    <ng-container *ngSwitchCase="\'blue-magic\'">\n\n        <ion-list *ngFor="let group of ffxi.voidwatch.blueMagic">\n\n            <ion-list-header>\n\n                <img [src]="\'../assets/images/elements/\' + group.title + \'.png\'" /><span [innerHTML]="group.title"></span>\n\n            </ion-list-header>\n\n            <ion-item *ngFor="let item of group.items">\n\n                <span [innerHTML]="item"></span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-segment [(ngModel)]="type">\n\n        <ion-segment-button value="job-ability">\n\n            <img src="../assets/images/type/JA.png" />\n\n            <ion-label>Abi</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="black-magic">\n\n            <img src="../assets/images/type/BLM.png" />\n\n            <ion-label>BLM</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="white-magic">\n\n            <img src="../assets/images/type/WHM.png" />\n\n            <ion-label>WHM</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="ninjutsu">\n\n            <img src="../assets/images/type/NIN.png" />\n\n            <ion-label>NIN</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bard-songs">\n\n            <img src="../assets/images/type/BRD.png" />\n\n            <ion-label>BRD</ion-label>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="blue-magic">\n\n            <img src="../assets/images/type/BLU.png" />\n\n            <ion-label>BLU</ion-label>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>'/*ion-inline-end:"D:\RareBear\Weakness\src\pages\voidwatch\voidwatch.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ffxi__["a" /* FFXIService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ui__["a" /* UIService */]])
    ], VoidwatchPage);
    return VoidwatchPage;
}());

//# sourceMappingURL=voidwatch.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FFXIService; });
/* unused harmony export VanaDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var self;
var FFXIService = (function () {
    function FFXIService(events) {
        this.events = events;
        this.weapons = [
            { id: "AXE", name: "Axe" },
            { id: "BOW", name: "Archery" },
            { id: "CLB", name: "Club" },
            { id: "DAG", name: "Dagger" },
            { id: "GAX", name: "Great Axe" },
            { id: "GKT", name: "Great Katana" },
            { id: "GSD", name: "Great Sword" },
            { id: "GUN", name: "Marksmanship" },
            { id: "HTH", name: "Hand-to-Hand" },
            { id: "KAT", name: "Katana" },
            { id: "PLM", name: "Polearm" },
            { id: "SCY", name: "Scythe" },
            { id: "STF", name: "Staff" },
            { id: "SWD", name: "Sword" }
        ];
        this.abyssea = {
            red: [
                {
                    title: 'darkness',
                    items: [
                        { weapon: "DAG", weaponskill: "Energy Drain" },
                        { weapon: "KAT", weaponskill: "Blade: Ei" },
                        { weapon: "SCY", weaponskill: "Shadow of Death" }
                    ]
                },
                {
                    title: "earth",
                    items: [
                        { weapon: "STF", weaponskill: "Earth Crusher" }
                    ]
                },
                {
                    title: "fire",
                    items: [
                        { weapon: "SWD", weaponskill: "Red Lotus Blade" }
                    ]
                },
                {
                    title: "ice",
                    items: [
                        { weapon: "GSD", weaponskill: "Freezebite" }
                    ]
                },
                {
                    title: 'light',
                    items: [
                        { weapon: "CLB", weaponskill: "Seraph Strike" },
                        { weapon: "GKT", weaponskill: "Tachi: Koki" },
                        { weapon: "STF", weaponskill: "Sunburst" },
                        { weapon: "SWD", weaponskill: "Seraph Blade" }
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        { weapon: "PLM", weaponskill: "Raiden Thrust" }
                    ]
                },
                {
                    title: "wind",
                    items: [
                        { weapon: "DAG", weaponskill: "Cyclone" },
                        { weapon: "GKT", weaponskill: "Tachi: Jinpu" }
                    ]
                },
            ],
            yellow: [
                {
                    title: "darkness",
                    items: [
                        { order: 1, type: "BLM", spell: "Aspir" },
                        { order: 2, type: "BLM", spell: "Drain" },
                        { order: 3, type: "BLM", spell: "Bio II" },
                        { order: 4, type: "BLM", spell: "Dispel" },
                        { order: 5, type: "BLU", spell: "Eyes On Me" },
                        { order: 6, type: "NIN", spell: "Kurayami: Ni" },
                        { order: 7, type: "BRD", spell: "Light Threnody" }
                    ]
                },
                {
                    title: "earth",
                    items: [
                        { order: 1, type: "BLM", spell: "Stone III" },
                        { order: 2, type: "BLM", spell: "Stone IV" },
                        { order: 3, type: "BLM", spell: "Stonega III" },
                        { order: 4, type: "BLM", spell: "Quake" },
                        { order: 5, type: "BLU", spell: "Magnetite Cloud" },
                        { order: 6, type: "NIN", spell: "Doton: Ni" },
                        { order: 7, type: "BRD", spell: "Lightning Threnody" }
                    ]
                },
                {
                    title: "fire",
                    items: [
                        { order: 1, type: "BLM", spell: "Fire III" },
                        { order: 2, type: "BLM", spell: "Fire IV" },
                        { order: 3, type: "BLM", spell: "Firaga III" },
                        { order: 4, type: "BLM", spell: "Flare" },
                        { order: 5, type: "BLU", spell: "Heat Breath" },
                        { order: 6, type: "NIN", spell: "Katon: Ni" },
                        { order: 7, type: "BRD", spell: "Ice Threnody" }
                    ]
                },
                {
                    title: "ice",
                    items: [
                        { order: 1, type: "BLM", spell: "Blizzard III" },
                        { order: 2, type: "BLM", spell: "Blizzard IV" },
                        { order: 3, type: "BLM", spell: "Blizzaga III" },
                        { order: 4, type: "BLM", spell: "Freeze" },
                        { order: 5, type: "BLU", spell: "Ice Break" },
                        { order: 6, type: "NIN", spell: "Hyoton: Ni" },
                        { order: 7, type: "BRD", spell: "Wind Threnody" }
                    ]
                },
                {
                    title: "light",
                    items: [
                        { order: 1, type: "WHM", spell: "Banish II" },
                        { order: 2, type: "WHM", spell: "Banish III" },
                        { order: 3, type: "WHM", spell: "Banishga II" },
                        { order: 4, type: "WHM", spell: "Holy" },
                        { order: 5, type: "WHM", spell: "Flash" },
                        { order: 6, type: "BLU", spell: "Radiant Breath" },
                        { order: 7, type: "BRD", spell: "Dark Threnody" }
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        { order: 1, type: "BLM", spell: "Thunder III" },
                        { order: 2, type: "BLM", spell: "Thunder IV" },
                        { order: 3, type: "BLM", spell: "Thundaga III" },
                        { order: 4, type: "BLM", spell: "Burst" },
                        { order: 5, type: "BLU", spell: "Mind Blast" },
                        { order: 6, type: "NIN", spell: "Raiton: Ni" },
                        { order: 7, type: "BRD", spell: "Water Threnody" }
                    ]
                },
                {
                    title: "water",
                    items: [
                        { order: 1, type: "BLM", spell: "Water III" },
                        { order: 2, type: "BLM", spell: "Water IV" },
                        { order: 3, type: "BLM", spell: "Waterga III" },
                        { order: 4, type: "BLM", spell: "Flood" },
                        { order: 5, type: "BLU", spell: "Maelstrom" },
                        { order: 6, type: "NIN", spell: "Suiton: Ni" },
                        { order: 7, type: "BRD", spell: "Fire Threnody" }
                    ]
                },
                {
                    title: "wind",
                    items: [
                        { order: 1, type: "BLM", spell: "Aero III" },
                        { order: 2, type: "BLM", spell: "Aero IV" },
                        { order: 3, type: "BLM", spell: "Aeroga III" },
                        { order: 4, type: "BLM", spell: "Tornado" },
                        { order: 5, type: "BLU", spell: "Mysterious Light" },
                        { order: 6, type: "NIN", spell: "Huton: Ni" },
                        { order: 7, type: "BRD", spell: "Earth Threnody" }
                    ]
                }
            ],
            blue: {
                piercing: [
                    {
                        title: 'Archery',
                        items: [
                            { weapon: "BOW", weaponskill: "Arching Arrow" },
                            { weapon: "BOW", weaponskill: "Blast Arrow" },
                            { weapon: "BOW", weaponskill: "Empyreal Arrow" },
                            { weapon: "BOW", weaponskill: "Sidewinder" }
                        ]
                    },
                    {
                        title: 'Dagger',
                        items: [
                            { weapon: "DAG", weaponskill: "Dancing Edge" },
                            { weapon: "DAG", weaponskill: "Evisceration" },
                            { weapon: "DAG", weaponskill: "Shadowstitch" },
                            { weapon: "DAG", weaponskill: "Shark Bite" }
                        ]
                    },
                    {
                        title: 'Marksmanship',
                        items: [
                            { weapon: "GUN", weaponskill: "Blash Shot" },
                            { weapon: "GUN", weaponskill: "Detonator" },
                            { weapon: "GUN", weaponskill: "Heavy Shot" },
                            { weapon: "GUN", weaponskill: "Slug Shot" }
                        ],
                    },
                    {
                        title: 'Polearm',
                        items: [
                            { weapon: "PLM", weaponskill: "Impulse Drive" },
                            { weapon: "PLM", weaponskill: "Skewer" },
                            { weapon: "PLM", weaponskill: "Wheeling Thrust" }
                        ]
                    }
                ],
                slashing: [
                    {
                        title: 'Axe',
                        items: [
                            { weapon: "AXE", weaponskill: "Decimation" },
                            { weapon: "AXE", weaponskill: "Mistral Axe" }
                        ]
                    },
                    {
                        title: 'Great Axe',
                        items: [
                            { weapon: "GAX", weaponskill: "Full Break" },
                            { weapon: "GAX", weaponskill: "Steel Cyclone" }
                        ]
                    },
                    {
                        title: 'Great Katana',
                        items: [
                            { weapon: "GKT", weaponskill: "Tachi: Gekko" },
                            { weapon: "GKT", weaponskill: "Tachi: Kasha" }
                        ]
                    },
                    {
                        title: 'Great Sword',
                        items: [
                            { weapon: "GSD", weaponskill: "Ground Strike" },
                            { weapon: "GSD", weaponskill: "Spinning Slash" }
                        ]
                    },
                    {
                        title: 'Katana',
                        items: [
                            { weapon: "KAT", weaponskill: "Blade: Ku" },
                            { weapon: "KAT", weaponskill: "Blade: Ten" }
                        ]
                    },
                    {
                        title: 'Scythe',
                        items: [
                            { weapon: "SCY", weaponskill: "Cross Reaper" },
                            { weapon: "SCY", weaponskill: "Spiral Hell" }
                        ]
                    },
                    {
                        title: 'Sword',
                        items: [
                            { weapon: "SWD", weaponskill: "Savage Blade" },
                            { weapon: "SWD", weaponskill: "Swift Blade" },
                            { weapon: "SWD", weaponskill: "Vorpal Blade" }
                        ]
                    }
                ],
                blunt: [
                    {
                        title: 'Club',
                        items: [
                            { weapon: "CLB", weaponskill: "Black Halo" },
                            { weapon: "CLB", weaponskill: "Hexa Strike" },
                            { weapon: "CLB", weaponskill: "Judgement" },
                            { weapon: "CLB", weaponskill: "Skullbreaker" },
                            { weapon: "CLB", weaponskill: "True Strike" }
                        ]
                    },
                    {
                        title: 'Hand-to-Hand',
                        items: [
                            { weapon: "HTH", weaponskill: "Asuran Fists" },
                            { weapon: "HTH", weaponskill: "Dragon Kick" },
                            { weapon: "HTH", weaponskill: "Howling Fist" },
                            { weapon: "HTH", weaponskill: "Raging Fists" },
                            { weapon: "HTH", weaponskill: "Spinning Attack" }
                        ]
                    },
                    {
                        title: 'Staff',
                        items: [
                            { weapon: "STF", weaponskill: "Full Swing" },
                            { weapon: "STF", weaponskill: "Heavy Swing" },
                            { weapon: "STF", weaponskill: "Retribution" },
                            { weapon: "STF", weaponskill: "Shell Crusher" },
                            { weapon: "STF", weaponskill: "Spirit Taker" }
                        ]
                    }
                ]
            }
        };
        this.dynamis = {
            beastmen: [
                {
                    title: "Weaponskill",
                    items: [
                        "DRG",
                        "DRK",
                        "PLD",
                        "SAM",
                        "WAR"
                    ]
                },
                {
                    title: "Job Ability",
                    items: [
                        "BST",
                        "MNK",
                        "NIN",
                        "RNG",
                        "THF"
                    ]
                },
                {
                    title: "Magic Spell",
                    items: [
                        "BLM",
                        "BRD",
                        "RDM",
                        "SMN",
                        "WHM"
                    ]
                }
            ],
            ordelle: [
                {
                    time: 0,
                    title: "Magic Spell",
                    items: [
                        { zone: "Buburimu", mob: "Bunny" },
                        { zone: "Buburimu", mob: "Eft" },
                        { zone: "Buburimu", mob: "Mandragora" },
                        { zone: "Valkurm", mob: "Hippogryph" },
                        { zone: "Valkurm", mob: "Sabotender" },
                        { zone: "Valkurm", mob: "Sheep" },
                        { zone: "Qufim", mob: "Snoll" },
                        { zone: "Qufim", mob: "Stirge" },
                        { zone: "Qufim", mob: "Weapon" },
                        { zone: "Tavnazia", mob: "Cluster" },
                        { zone: "Tavnazia", mob: "Makara" }
                    ]
                },
                {
                    time: 8,
                    title: "Job Ability",
                    items: [
                        { zone: "Buburimu", mob: "Bunny" },
                        { zone: "Buburimu", mob: "Eft" },
                        { zone: "Buburimu", mob: "Mandragora" },
                        { zone: "Valkurm", mob: "Hippogryph" },
                        { zone: "Valkurm", mob: "Sabotender" },
                        { zone: "Valkurm", mob: "Sheep" },
                        { zone: "Qufim", mob: "Snoll" },
                        { zone: "Qufim", mob: "Stirge" },
                        { zone: "Qufim", mob: "Weapon" },
                        { zone: "Tavnazia", mob: "Cluster" },
                        { zone: "Tavnazia", mob: "Makara" }
                    ]
                },
                {
                    time: 16,
                    title: "Weaponskill",
                    items: [
                        { zone: "Buburimu", mob: "Bunny" },
                        { zone: "Buburimu", mob: "Eft" },
                        { zone: "Buburimu", mob: "Mandragora" },
                        { zone: "Valkurm", mob: "Hippogryph" },
                        { zone: "Valkurm", mob: "Sabotender" },
                        { zone: "Valkurm", mob: "Sheep" },
                        { zone: "Qufim", mob: "Snoll" },
                        { zone: "Qufim", mob: "Stirge" },
                        { zone: "Qufim", mob: "Weapon" },
                        { zone: "Tavnazia", mob: "Cluster" },
                        { zone: "Tavnazia", mob: "Makara" }
                    ]
                }
            ],
            tukuku: [
                {
                    time: 0,
                    title: "Weaponskill",
                    items: [
                        { zone: "Buburimu", mob: "Crab" },
                        { zone: "Buburimu", mob: "Dhamel" },
                        { zone: "Buburimu", mob: "Scorpion" },
                        { zone: "Valkurm", mob: "Goobbue" },
                        { zone: "Valkurm", mob: "Manticore" },
                        { zone: "Valkurm", mob: "Treant" },
                        { zone: "Qufim", mob: "Diremite" },
                        { zone: "Qufim", mob: "Raptor" },
                        { zone: "Qufim", mob: "Tiger" },
                        { zone: "Tavnazia", mob: "Leech" },
                        { zone: "Tavnazia", mob: "Worm" }
                    ]
                },
                {
                    time: 8,
                    title: "Magic Spell",
                    items: [
                        { zone: "Buburimu", mob: "Crab" },
                        { zone: "Buburimu", mob: "Dhamel" },
                        { zone: "Buburimu", mob: "Scorpion" },
                        { zone: "Valkurm", mob: "Goobbue" },
                        { zone: "Valkurm", mob: "Manticore" },
                        { zone: "Valkurm", mob: "Treant" },
                        { zone: "Qufim", mob: "Diremite" },
                        { zone: "Qufim", mob: "Raptor" },
                        { zone: "Qufim", mob: "Tiger" },
                        { zone: "Tavnazia", mob: "Leech" },
                        { zone: "Tavnazia", mob: "Worm" }
                    ]
                },
                {
                    time: 16,
                    title: "Job Ability",
                    items: [
                        { zone: "Buburimu", mob: "Crab" },
                        { zone: "Buburimu", mob: "Dhamel" },
                        { zone: "Buburimu", mob: "Scorpion" },
                        { zone: "Valkurm", mob: "Goobbue" },
                        { zone: "Valkurm", mob: "Manticore" },
                        { zone: "Valkurm", mob: "Treant" },
                        { zone: "Qufim", mob: "Diremite" },
                        { zone: "Qufim", mob: "Raptor" },
                        { zone: "Qufim", mob: "Tiger" },
                        { zone: "Tavnazia", mob: "Leech" },
                        { zone: "Tavnazia", mob: "Worm" }
                    ]
                }
            ],
            byne: [
                {
                    time: 0,
                    title: "Job Ability",
                    items: [
                        { zone: "Buburimu", mob: "Crawler" },
                        { zone: "Buburimu", mob: "Raven" },
                        { zone: "Buburimu", mob: "Urganite" },
                        { zone: "Valkurm", mob: "Fly" },
                        { zone: "Valkurm", mob: "Flytrap" },
                        { zone: "Valkurm", mob: "Funguar" },
                        { zone: "Qufim", mob: "Gaylas" },
                        { zone: "Qufim", mob: "Kraken" },
                        { zone: "Qufim", mob: "Roc" },
                        { zone: "Tavnazia", mob: "Bugard" },
                        { zone: "Tavnazia", mob: "Hornet" }
                    ]
                },
                {
                    time: 8,
                    title: "Weaponskill",
                    items: [
                        { zone: "Buburimu", mob: "Crawler" },
                        { zone: "Buburimu", mob: "Raven" },
                        { zone: "Buburimu", mob: "Urganite" },
                        { zone: "Valkurm", mob: "Fly" },
                        { zone: "Valkurm", mob: "Flytrap" },
                        { zone: "Valkurm", mob: "Funguar" },
                        { zone: "Qufim", mob: "Gaylas" },
                        { zone: "Qufim", mob: "Kraken" },
                        { zone: "Qufim", mob: "Roc" },
                        { zone: "Tavnazia", mob: "Bugard" },
                        { zone: "Tavnazia", mob: "Hornet" }
                    ]
                },
                {
                    time: 16,
                    title: "Magic Spell",
                    items: [
                        { zone: "Buburimu", mob: "Crawler" },
                        { zone: "Buburimu", mob: "Raven" },
                        { zone: "Buburimu", mob: "Urganite" },
                        { zone: "Valkurm", mob: "Fly" },
                        { zone: "Valkurm", mob: "Flytrap" },
                        { zone: "Valkurm", mob: "Funguar" },
                        { zone: "Qufim", mob: "Gaylas" },
                        { zone: "Qufim", mob: "Kraken" },
                        { zone: "Qufim", mob: "Roc" },
                        { zone: "Tavnazia", mob: "Bugard" },
                        { zone: "Tavnazia", mob: "Hornet" }
                    ]
                }
            ]
        };
        this.voidwatch = {
            jobAbility: [
                {
                    title: 'Black Mage',
                    items: [
                        "Enmity Douse"
                    ]
                },
                {
                    title: 'Corsair',
                    items: [
                        "Fire Shot",
                        "Ice Shot",
                        "Wind Shot",
                        "Earth Shot",
                        "Thunder Shot",
                        "Water Shot"
                    ]
                },
                {
                    title: 'Dancer',
                    items: [
                        "Quickstep",
                        "Stutter Step",
                        "Box Step",
                        "Feather Step",
                        "Violent Fluorish",
                        "Animated Fluorish",
                        "Desperate Fluorish"
                    ]
                },
                {
                    title: 'Dark Knight',
                    items: [
                        "Weapon Bash"
                    ]
                },
                {
                    title: 'Dragoon',
                    items: [
                        "Jump",
                        "High Jump",
                        "Spirit Jump",
                        "Soul Jump"
                    ]
                },
                {
                    title: 'Monk',
                    items: [
                        "Chi Blast"
                    ]
                },
                {
                    title: 'Paladin',
                    items: [
                        "Shield Bash"
                    ]
                },
                {
                    title: 'Ranger',
                    items: [
                        "Shadowbind"
                    ]
                },
                {
                    title: 'Scholar',
                    items: [
                        "Libra"
                    ]
                },
                {
                    title: 'Summoner',
                    items: [
                        "Carbuncle&rsquo;s Holy Mist",
                        "Fenrir&rsquo;s Lunar Bay",
                        "Diabolos&rsquo;s Night Terror",
                        "Ifrit&rsquo;s Fire IV",
                        "Shiva&rsquo;s Blizzard IV",
                        "Garuda&rsquo;s Aero IV",
                        "Titan&rsquo;s Stone IV",
                        "Ramuh&rsquo;s Thunder IV",
                        "Leviathan&rsquo;s Water IV",
                    ]
                },
                {
                    title: 'Thief',
                    items: [
                        "Bully"
                    ]
                },
                {
                    title: 'Warrior',
                    items: [
                        "Provoke"
                    ]
                }
            ],
            blackMagic: [
                {
                    title: "light",
                    items: [
                        "Luminohelix"
                    ]
                },
                {
                    title: "darkness",
                    items: [
                        "Noctohelix",
                        "Drain",
                        "Drain II",
                        "Aspir",
                        "Aspir II",
                        "Absorb-STR",
                        "Absorb-DEX",
                        "Absorb-AGI",
                        "Absorb-VIT",
                        "Absorb-INT",
                        "Absorb-MND",
                        "Absorb-CHR",
                        "Absorb-TP",
                        "Absorb-ACC",
                        "Blind",
                        "Dispel",
                        "Bio II"
                    ]
                },
                {
                    title: "fire",
                    items: [
                        "Pyrohelix",
                        "Fire II",
                        "Fire III",
                        "Fire IV",
                        "Firaga",
                        "Firaga II",
                        "Firaga III",
                        "Firaja",
                        "Flare",
                        "Burn"
                    ]
                },
                {
                    title: "ice",
                    items: [
                        "Cryohelix",
                        "Blizzard II",
                        "Blizzard III",
                        "Blizzard IV",
                        "Blizzaga",
                        "Blizzaga II",
                        "Blizzaga III",
                        "Blizzaja",
                        "Freeze",
                        "Frost"
                    ]
                },
                {
                    title: "wind",
                    items: [
                        "Anemohelix",
                        "Aero II",
                        "Aero III",
                        "Aero IV",
                        "Aeroga",
                        "Aeroga II",
                        "Aeroga II",
                        "Aeroja",
                        "Tornado",
                        "Choke"
                    ]
                },
                {
                    title: "earth",
                    items: [
                        "Geohelix",
                        "Stone II",
                        "Stone III",
                        "Stone IV",
                        "Stonega",
                        "Stonega II",
                        "Stonega III",
                        "Stoneja",
                        "Quake",
                        "Rasp"
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        "Ionohelix",
                        "Thunder II",
                        "Thunder III",
                        "Thunder IV",
                        "Thundaga",
                        "Thundaga II",
                        "Thundaga III",
                        "Thundaja",
                        "Burst",
                        "Shock",
                        "Stun"
                    ]
                },
                {
                    title: "water",
                    items: [
                        "Hydrohelix",
                        "Water II",
                        "Water III",
                        "Water IV",
                        "Waterga",
                        "Waterga II",
                        "Waterga III",
                        "Waterja",
                        "Flood",
                        "Drown",
                        "Poison",
                        "Poison II",
                        "Poisonga"
                    ]
                }
            ],
            whiteMagic: [
                {
                    title: "light",
                    items: [
                        "Banish II",
                        "Banish III",
                        "Banishga",
                        "Banishga II",
                        "Holy",
                        "Flash",
                        "Dia II",
                        "Diaga"
                    ]
                },
                {
                    title: "fire",
                    items: [
                        "Addle"
                    ]
                },
                {
                    title: "ice",
                    items: [
                        "Paralyze"
                    ]
                },
                {
                    title: "earth",
                    items: [
                        "Slow"
                    ]
                }
            ],
            ninjutsu: [
                {
                    title: "darkness",
                    items: [
                        "Kurayami: Ichi",
                        "Kurayami: Ni",
                        "Yurin: Ichi"
                    ]
                },
                {
                    title: "fire",
                    items: [
                        "Katon: Ichi",
                        "Katon: Ni"
                    ]
                },
                {
                    title: "ice",
                    items: [
                        "Hyoton: Ichi",
                        "Hyoton: Ni",
                        "Jubaku: Ichi"
                    ]
                },
                {
                    title: "wind",
                    items: [
                        "Huton: Ichi",
                        "Huton: Ni"
                    ]
                },
                {
                    title: "earth",
                    items: [
                        "Doton: Ichi",
                        "Doton: Ni",
                        "Hojo: Ichi",
                        "Hojo: Ni"
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        "Raiton: Ichi",
                        "Raiton: Ni"
                    ]
                },
                {
                    title: "water",
                    items: [
                        "Suiton: Ichi",
                        "Suiton: Ni",
                        "Dokumori: Ichi",
                        "Aisha: Ichi"
                    ]
                }
            ],
            bardSongs: [
                {
                    title: "light",
                    items: [
                        "Dark Threnody",
                        "Magic Finale"
                    ]
                },
                {
                    title: "darkness",
                    items: [
                        "Light Threnody"
                    ]
                },
                {
                    title: "fire",
                    items: [
                        "Ice Threnody",
                        "Wind Threnody"
                    ]
                },
                {
                    title: "wind",
                    items: [
                        "Earth Threnody"
                    ]
                },
                {
                    title: "earth",
                    items: [
                        "Lightning Threnody",
                        "Battlefield Elegy",
                        "Carnage Elegy"
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        "Water Threnody"
                    ]
                },
                {
                    title: "water",
                    items: [
                        "Fire Threnody"
                    ]
                }
            ],
            blueMagic: [
                {
                    title: "light",
                    items: [
                        "Actinic Burst",
                        "Blank Gaze",
                        "Light of Pennance",
                        "Radiant Breath"
                    ]
                },
                {
                    title: "darkness",
                    items: [
                        "Death Ray",
                        "Eyes On Me",
                        "Sandspray"
                    ]
                },
                {
                    title: "fire",
                    items: [
                        "Blastbomb",
                        "Firespit",
                        "Heat Breath",
                        "Thermal Pulse"
                    ]
                },
                {
                    title: "ice",
                    items: [
                        "Cold Wave",
                        "Frost Breath",
                        "Ice Break",
                        "Infrasonics"
                    ]
                },
                {
                    title: "wind",
                    items: [
                        "Hetacomb Wave",
                        "Leafstorm",
                        "Mysterious Light",
                        "Reaving Wind"
                    ]
                },
                {
                    title: "earth",
                    items: [
                        "Bad Breath",
                        "Cimicine Discharge",
                        "Magnetite Cloud",
                        "Sandspin"
                    ]
                },
                {
                    title: "lightning",
                    items: [
                        "Blitzstrahl",
                        "Charged Whisker",
                        "Mind Blast",
                        "Temporal Shift"
                    ]
                },
                {
                    title: "water",
                    items: [
                        "Acrid Stream",
                        "Corrosive Ooze",
                        "Cursed Sphere",
                        "Maelstrom",
                        "Awful Eye"
                    ]
                }
            ]
        };
        self = this;
        // Create an FFXI object and put VanaDate class in the global scope
        //window.FFXI = new FFXI(window);
        //window.VanaDate = VanaDate;
        self.reset();
    }
    FFXIService.prototype.update = function () {
        try {
            var now = new VanaDate(), hour = now.hour, minute = now.minute < 10 ? "0" + now.minute : now.minute, vt = hour + ":" + minute;
            //console.debug('now:');
            //console.log(self.vanadate.time);
            console.log("update: " + vt);
            //console.log(now);
            //var dateTimeString = "{0}/{1}/{2} {3}:{4}.{5}".format(now.year, now.month, now.day, now.hour, now.minute, now.second);
            self.vanatime = vt;
            //filter dynamis triggers
            if (vt == "0:00" || vt == "8:00" || vt == "16:00") {
                self.events.publish('time', vt);
            }
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    FFXIService.prototype.clear = function () {
        try {
            clearInterval(self.timer);
        }
        catch (ex) {
            console.log(ex.mesage);
        }
    };
    FFXIService.prototype.reset = function () {
        try {
            if (self.timer)
                self.clear();
            //self.vanadate = new VanaDate();
            //self.vanadate.start();
            //self.vanadate = new VanaDate();
            //console.log(self.vanadate);
            self.timer = setInterval(self.update, 1000, true);
        }
        catch (ex) {
            console.log(ex.mesage);
            self.clear();
        }
    };
    FFXIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _a || Object])
    ], FFXIService);
    return FFXIService;
    var _a;
}());

/////////////////////////////////////////////////////////////////////
// VanaDate class
// Represents a fixed point in time.
// Constructor takes either a JavaScript Date representing Earth time,
// or a number of Vana'diel seconds since Year 0.
var VanaDate = (function () {
    function VanaDate(date) {
        ////////////////
        // Constants
        // Earth time : 2002/06/23 16:00 GMT
        // Vana'diel time : 0898/02/01 00:00
        this.VANA_BIRTH = new Date();
        this.VANA_SECS_SINCE_YEAR_0 = (((898 * 360) + 30) * 24 * 60 * 60);
        this.EARTH_TIME_YEAR_0 = new Date(this.VANA_BIRTH.getTime() - ((this.VANA_SECS_SINCE_YEAR_0 * 1000) / 25));
        this.VANA_SECS_PER_YEAR = 360 * 24 * 60 * 60; // 360 days per year
        this.VANA_SECS_PER_MONTH = 30 * 24 * 60 * 60; // 30 days per month
        this.VANA_SECS_PER_WEEK = 8 * 24 * 60 * 60; // Eight Days a Week
        this.VANA_SECS_PER_DAY = 24 * 60 * 60; // 24 hours per day
        this.VANA_SECS_PER_HOUR = 60 * 60; // 60 minutes per hour
        this.dayNames = ['Firesday', 'Earthsday', 'Watersday', 'Windsday', 'Iceday', 'Lightningday', 'Lightsday', 'Darksday'];
        this.moonPhases = ['New Moon', 'Waxing Crescent', 'First Quarter Moon', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter Moon', 'Waning Crescent'];
        // vTime is the number of Vana'diel seconds since 0000/01/01
        //console.debug('date:');
        //console.log(date);
        var eTime, vTime;
        if (date && typeof date == 'number') {
            console.log("date number: " + date);
            vTime = Math.round(date);
            eTime = new Date(this.EARTH_TIME_YEAR_0.getTime() + Math.round(vTime * 1000 / 25));
        }
        else {
            if (date && date instanceof Date) {
                console.log("date object: " + date);
                eTime = date;
            }
            else {
                console.log("date null");
                eTime = new Date();
            }
            var eMilliSinceVanaEpoch = eTime.getTime() - this.EARTH_TIME_YEAR_0.getTime();
            vTime = Math.round(eMilliSinceVanaEpoch / 1000 * 25);
        }
        //console.log(vTime, eTime);
        console.log(eTime.getTime());
        //console.log(vTime);
        // Calculate the individual parts of the date
        this.earthDate = eTime;
        this.time = vTime; // number of vana'diel seconds since midnight 0000/01/01
        this.year = Math.floor(vTime / this.VANA_SECS_PER_YEAR);
        this.month = Math.floor((vTime % this.VANA_SECS_PER_YEAR) / this.VANA_SECS_PER_MONTH);
        this.day = Math.floor((vTime % this.VANA_SECS_PER_MONTH) / this.VANA_SECS_PER_DAY);
        this.weekDay = Math.floor((vTime % this.VANA_SECS_PER_WEEK) / this.VANA_SECS_PER_DAY);
        this.hour = Math.floor((vTime % this.VANA_SECS_PER_DAY) / this.VANA_SECS_PER_HOUR);
        this.minute = Math.floor((vTime % this.VANA_SECS_PER_HOUR) / 60);
        this.second = Math.floor(vTime % 60);
        this.weekDayName = this.dayNames[this.weekDay];
        // Calculate phase of the moon.
        var daysPerCycle = 84;
        // This formula was borrowed from the MithraPride clock. I have no fucking clue what is going on here.
        // The value ranges from -100 (full) to 0 (new) to 100 (full again).
        var moonPercent = ((((Math.floor(vTime / this.VANA_SECS_PER_DAY) + 26) % daysPerCycle) - (daysPerCycle / 2)) / (daysPerCycle / 2)) * 100;
        var moonPhase;
        // There are gaps in the ranges here, but it still works because the moon phase only changes
        // at the beginning of a new day rather than continuously over time.
        if (moonPercent >= 7 && moonPercent <= 38) {
            moonPhase = 1; // Waxing Crescent
        }
        else if (moonPercent >= 40 && moonPercent <= 55) {
            moonPhase = 2; // First Quarter Moon
        }
        else if (moonPercent >= 57 && moonPercent <= 88) {
            moonPhase = 3; // Waxing Gibbous
        }
        else if (moonPercent >= 90 || moonPercent <= -95) {
            moonPhase = 4; // Full Moon
        }
        else if (moonPercent >= -93 && moonPercent <= -62) {
            moonPhase = 5; // Waning Gibbous
        }
        else if (moonPercent >= -60 && moonPercent <= -45) {
            moonPhase = 6; // Last Quarter Moon
        }
        else if (moonPercent >= -43 && moonPercent <= -12) {
            moonPhase = 7; // Waning Crescent
        }
        else {
            moonPhase = 0; // New Moon
        }
        this.moonPhase = moonPhase;
        this.moonPhaseName = this.moonPhases[moonPhase];
        this.moonPercent = Math.round(Math.abs(moonPercent));
        // Calculate when this day starts and ends in earth time
        var vSecSinceDayStart = (vTime % this.VANA_SECS_PER_DAY);
        var eMilliSinceDayStart = Math.floor(vSecSinceDayStart * 1000 / 25);
        this.dayStart = new Date(eTime.getTime() - eMilliSinceDayStart);
        var vSecUntilDayEnd = this.VANA_SECS_PER_DAY - (vTime % this.VANA_SECS_PER_DAY);
        var eMilliUntilDayEnd = Math.floor(vSecUntilDayEnd * 1000 / 25);
        this.dayEnd = new Date(eTime.getTime() + eMilliUntilDayEnd);
    }
    ////////////////////
    // Utility functions
    VanaDate.prototype.getSecs = function (hours, minutes) {
        return (hours * this.VANA_SECS_PER_HOUR) + (minutes * 60);
    };
    VanaDate.prototype.start = function () {
        var newVTime = this.time - (this.time % this.VANA_SECS_PER_DAY);
        return new VanaDate(newVTime);
    };
    VanaDate.prototype.next = function (days) {
        var numDays = days;
        if (typeof (numDays) != 'number') {
            numDays = 1;
        }
        var newVTime = this.time + (this.VANA_SECS_PER_DAY * numDays);
        return new VanaDate(newVTime);
    };
    VanaDate.prototype.prev = function (days) {
        var numDays = days;
        if (typeof (numDays) != 'number') {
            numDays = 1;
        }
        var newVTime = this.time - (this.VANA_SECS_PER_DAY * numDays);
        return new VanaDate(newVTime);
    };
    return VanaDate;
}());

//# sourceMappingURL=ffxi.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIService; });
/* unused harmony export PageFlip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Pro } from '@ionic/pro';

var self;
var UIService = (function () {
    //public viewDidEnter = null;
    //public options;
    //public tabBarElement: any;
    function UIService(app, platform, loadingCtrl, alertCtrl, menuCtrl, modalCtrl, toastCtrl, transitions) {
        this.app = app;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.transitions = transitions;
        this.progress = {
            download: 0,
            extract: 0
        };
        this.loading = {
            visible: false,
            element: null,
            content: null,
            ctrl: null,
            show: function (options) {
                if (self.loading.visible) {
                    if (!self.loading.element) {
                        var loading = document.getElementsByTagName('ion-loading');
                        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](loading, function (el) {
                            //console.log(el.attributes);
                            if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                                //console.log('loading element:');
                                //console.log(el);
                                self.loading.element = el;
                                var content = el.getElementsByClassName('loading-content');
                                if (content.length) {
                                    self.loading.content = content[0];
                                }
                                //console.log('loading content:');
                                //console.log(self.loading.content);
                            }
                        });
                        //self.loading.setSpinner('hide');
                        //console.log(self.loading);
                    }
                    if (options && options.text && self.loading.content) {
                        requestAnimationFrame(function () {
                            self.loading.content.innerHTML = options.text;
                        });
                    }
                    if (options && options.css) {
                        console.log('set css: ' + options.css);
                        self.loading.ctrl.setCssClass(options.css); //this fails to actually update the UI
                        self.loading.element.className += ' ' + options.css;
                    }
                    return Promise.resolve();
                }
                else {
                    self.loading.ctrl = self.loadingCtrl.create({
                        //spinner: 'custom',
                        spinner: 'dots',
                        content: options && options.text ? options.text : 'Loading&hellip;',
                        cssClass: options && options.css ? 'loading-container ' + options.css : 'loading-container'
                        //dismissOnPageChange: true //causes Uncaught (in promise): removeView was not found
                    });
                    self.loading.visible = true;
                    return self.loading.ctrl.present();
                }
            },
            hide: function () {
                self.loading.visible = false;
                self.loading.content = null;
                self.loading.element = null;
                return self.loading.ctrl.dismiss();
            }
        };
        this.options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: 1,
            //slidePixels: 20,
            iosdelay: 0,
            androiddelay: 0,
            winphonedelay: 250,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };
        //public loader: any = {
        //    ctrl: null,
        //    show: (opts?: LoadingOptions) => {
        //        self.loading.ctrl = self.loadingCtrl.create(_.extend({
        //            content: 'Loading&hellip;'
        //        }, opts));
        //        self.loading.ctrl.present();
        //    },
        //    hide: () => {
        //        self.loading.ctrl.dismiss();
        //    }
        //};
        this.confirm = {
            ctrl: null,
            show: function (options) {
                return new Promise(function (resolve, reject) {
                    self.confirm.ctrl = self.alertCtrl.create(options);
                    self.confirm.ctrl.onDidDismiss(resolve);
                    self.confirm.ctrl.present();
                });
            },
            hide: function () {
                self.confirm.ctrl.dismiss();
            }
        };
        this.modal = {
            ctrl: null,
            show: function (page, data, opts) {
                return new Promise(function (resolve, reject) {
                    self.modal.ctrl = self.modalCtrl.create(page, data, __WEBPACK_IMPORTED_MODULE_3_underscore__["extend"]({
                        enableBackdropDismiss: false
                    }, opts));
                    self.modal.ctrl.onDidDismiss(resolve);
                    self.modal.ctrl.present();
                });
            },
            hide: function () {
                self.modal.ctrl.dismiss();
            }
        };
        this.toast = {
            ctrl: null,
            show: function (opts) {
                opts.duration = 0;
                opts.showCloseButton = true;
                self.toast.ctrl = self.toastCtrl.create(opts);
                self.toast.ctrl.present();
            },
            hide: function () {
                self.toast.ctrl.dismiss();
            }
        };
        this.alert = {
            ctrl: null,
            show: function (options) {
                //console.log('AlertController:');
                //console.log(self.alertCtrl);
                if (!options.enableBackdropDismiss) {
                    options.enableBackdropDismiss = false;
                }
                self.alert.ctrl = self.alertCtrl.create(options);
                return self.alert.ctrl.present();
            },
            hide: function () {
                self.alert.ctrl.dismiss();
            }
        };
        this.menu = null;
        this.flip = __WEBPACK_IMPORTED_MODULE_3_underscore__["debounce"](function (page, params, opts) {
            self.options = __WEBPACK_IMPORTED_MODULE_3_underscore__["extend"](self.options, opts);
            self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
            self.animation = 'flip';
            //self.options.animate = false;
            //if (self.page == page) {
            //	return Promise.resolve({ message: 'same page' });
            //} else {
            self.page = page;
            var nav = self.app.getRootNavs()[0];
            console.log('flip', nav);
            if (self.options.direction === 'left') {
                console.info('nav.push');
                return nav.push(page, params, self.options);
            }
            else if (nav.canGoBack()) {
                console.info('nav.pop');
                //return nav.pop(self.options)
                return nav.push(page, params, self.options).then(function () {
                    var views = nav.getViews();
                    nav.remove(views.length - 3, 2);
                    console.log(views);
                });
            }
            else {
                console.info('nav.setRoot');
                return nav.setRoot(page, params, self.options);
            }
            //}
        }, 400, true);
        this.swap = __WEBPACK_IMPORTED_MODULE_3_underscore__["debounce"](function (page, params, opts) {
            self.options = __WEBPACK_IMPORTED_MODULE_3_underscore__["extend"](self.options, opts);
            self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
            opts.animate = false;
            //self.animation = 'flip';
            //self.options.animate = false;
            //if (self.page == page) {
            //	return Promise.resolve({ message: 'same page' });
            //} else {
            self.page = page;
            var nav = self.app.getRootNavs()[0];
            console.log('swap', nav);
            if (self.options.direction === 'left') {
                console.info('nav.push');
                return nav.push(page, params, self.options);
            }
            else if (nav.canGoBack()) {
                console.info('nav.pop');
                //return nav.pop(self.options)
                return nav.push(page, params, self.options).then(function () {
                    var views = nav.getViews();
                    nav.remove(views.length - 3, 2);
                    console.log(views);
                });
            }
            else {
                console.info('nav.setRoot');
                return nav.setRoot(page, params, self.options);
            }
            //}
        }, 400, true);
        self = this;
        self.app.viewWillEnter.subscribe(function () {
            //if (!!window['cordova']) {
            //    //console.info('viewWillEnter with ' + self.animation + ' transition');
            //} else {
            //console.info('viewWillEnter with ' + self.animation + ' transition');
            switch (self.animation) {
                case 'flip':
                    self.transitions.flip(self.options);
                    break;
                case 'slide':
                    self.transitions.slide(self.options);
                    break;
            }
            //}
            self.animation = null;
        });
        self.menu = menuCtrl;
    }
    //#region ionic deploy update
    UIService.prototype.download = function (progress) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.download) {
            self.progress.download = progress;
            self.loading.show({ text: 'Downloading update\r\n' + self.progress.download + '%' });
        }
    };
    UIService.prototype.extract = function (progress) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.extract) {
            self.progress.extract = progress;
        }
        self.loading.show({ text: 'Installing update\r\n' + self.progress.extract + '%' });
    };
    UIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], UIService);
    return UIService;
}());

var PageFlip = (function (_super) {
    __extends(PageFlip, _super);
    function PageFlip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageFlip.prototype.init = function () {
        _super.prototype.init.call(this);
        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);
        var plt = this.plt, leavingView = this.leavingView, enteringView = this.enteringView, opts = this.opts, backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Animation */](plt, enteringView.pageRef());
            if (backDirection) {
                //console.log('enteringView has backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-prev')
                    .afterRemoveClass('flip-enter-prev');
            }
            else {
                //console.log('enteringView not backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-next')
                    .afterRemoveClass('flip-enter-next');
            }
            enteringPage.beforeClearStyles(['opacity']);
            //if (enteringView.hasNavbar()) {
            //    let enteringPageEle = enteringView.pageRef().nativeElement,
            //        enteringNavbarEle = enteringPageEle.querySelector('ion-navbar'),
            //        enteringNavBar = new Animation(plt, enteringNavbarEle);
            //    this.add(enteringNavBar);
            //}
        }
        // setup leaving view
        if (leavingView) {
            var leavingPage = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Animation */](plt, leavingView.pageRef());
            if (backDirection) {
                //console.log('leavingView has backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-prev')
                    .afterRemoveClass('flip-leave-prev');
            }
            else {
                //console.log('leavingView not backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-next')
                    .afterRemoveClass('flip-leave-next');
            }
            ;
            leavingPage.afterStyles({ 'opacity': 0 });
            //if (leavingView.hasNavbar()) {
            //    let leavingPageEle = leavingView.pageRef().nativeElement,
            //        leavingNavbarEle = leavingPageEle.querySelector('ion-navbar'),
            //        leavingNavBar = new Animation(plt, leavingNavbarEle);
            //    this.add(leavingNavBar);
            //}
        }
        //this.onFinish(() => {
        //    let until = new Date().getTime(),
        //        total = until - since;
        //    console.log('pagefade finish: ' + until);
        //    console.warn('pagefade total: ' + total);
        //});
    };
    return PageFlip;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PageTransition */]));

//# sourceMappingURL=ui.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map
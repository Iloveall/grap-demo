function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/auth/sign-in',
      pathMatch: 'full'
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend-grab';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-layout/main-layout.module */
    "./src/app/main-layout/main-layout.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_7__["MainLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_7__["MainLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_7__["MainLayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-layout/components/header/header.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/main-layout/components/header/header.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppMainLayoutComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/components/search/search.component */
    "./src/app/shared/components/search/search.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "--is-open": a0
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.isOpenMenu = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.isOpenMenu = !this.isOpenMenu;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 62,
      vars: 3,
      consts: [["gdInline", "", "gdGap", "5px", "gdAlignColumns", "center", "gdAlignRows", "center", 1, "__logo"], [1, "__btn", "__btn--dashboard", "gbi-menu"], ["fxLayoutAlign", "center center", 1, "__btn-dropdown"], [1, "gbi-tr-left"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "__right"], ["fxLayoutAlign", "center center", 1, "__btns"], [1, "__btn", "gbi-bricks"], [1, "__btn", "__btn--notif", "gbi-notification"], ["fxLayoutAlign", "center center", 1, "__user"], [1, "__user-name"], ["fxLayoutAlign", "center center", 1, "__user-avatar"], [1, "__btn-arrow", "gbi-arrow-down", 3, "click"], [1, "__aside", 3, "ngClass"], [1, "__content"], [1, "__aside-item"], ["fxLayoutAlign", "space-between center", 1, "__aside-item-head"], [1, "__aside-item-btn", "gbi-arrow-down"], [1, "__aside-item-content", "--pdd"], ["src", "assets/images/cal.png", "alt", ""], [1, "__aside-item-content"], ["src", "assets/images/person.png", "alt", ""], ["gdGap", "20px", 1, "__aside-item-content"], ["href", "", 1, "__aside-item-link"], [1, "gbi-widget"], [1, "gbi-home"], [1, "__aside-foot"], [1, "__aside-foot-top"], [1, "__aside-foot-top-name"], ["fxLayoutAlign", "space-between center"], [1, "__aside-foot-top-text"], [1, "__aside-foot-top-desc"], ["fxLayoutAlign", "space-between center", 1, "__aside-foot-bottom"], ["routerLink", "/auth/sign-in", 1, "__aside-btn"], [1, "gbi-power"], [1, "__aside-btn"], [1, "gbi-settings"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " executive\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hi, Joe!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mark", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "J");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "BY DATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ACTIVE USERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "INFORMATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Widgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Joe Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ops Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Your last activity 5 hours ago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpenMenu));
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privateba"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatef"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatei"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: auto;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  height: 3.75rem;\n  background-color: var(--greyish-brown-two);\n  box-shadow: 0 1px 0 0 var(--cyan);\n}\n.__logo[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 0.625rem;\n  font-weight: 300;\n  line-height: 2.2;\n  letter-spacing: 0.5px;\n  color: var(--cyan-two);\n  text-align: center;\n}\n.__logo[_ngcontent-%COMP%]:before {\n  width: 4.375rem;\n  height: 1.5rem;\n  content: \"\";\n  background: url('pmy-logo-new-white@3x.png') no-repeat center center/contain;\n}\n.__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.625rem;\n  font-size: 1.1875rem;\n  color: var(--cl-white);\n  border: none;\n  background: none;\n}\n.__btn[_ngcontent-%COMP%]:hover {\n  color: var(--cyan-two);\n}\n.__btn--notif[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--cyan-two);\n}\n.__btn--notif[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  content: \"\";\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background-color: #ff151f;\n  transform: translate(-5px, 0);\n}\n.__btn--dashboard[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.__right[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: auto;\n}\n.__user[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: 0.625rem;\n  padding: 0 0.375rem 0 2.125rem;\n  font-size: 0.8125rem;\n  color: var(--cl-white);\n  box-shadow: -1px 0 0 0 rgba(255, 255, 255, 0.1);\n}\n.__user-avatar[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  margin-left: 1.125rem;\n  font-size: 1.0625rem;\n  font-weight: 700;\n  color: var(--cl-white);\n  border-radius: 0.75rem;\n  background-color: var(--cyan-three);\n  transform: translate(-2px, 0);\n}\n.__btn-arrow[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n  font-size: 0.5rem;\n  color: var(--cl-white);\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.__btn-arrow[_ngcontent-%COMP%]:hover {\n  color: var(--cyan-two);\n}\n.__btn-dropdown[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 1.75rem;\n  color: var(--cl-white);\n  border: none;\n  background: none;\n  box-shadow: -1px 0 0 0 rgba(255, 255, 255, 0.1), 1px 0 0 0 rgba(255, 255, 255, 0.1);\n}\n.__btn-dropdown[_ngcontent-%COMP%]   .gbi-tr-left[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-size: 0.625rem;\n  transform: rotate(-90deg);\n}\n.__aside[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 3.75rem;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  display: grid;\n  grid-template-rows: 1fr -webkit-max-content;\n  grid-template-rows: 1fr max-content;\n  width: 20.125rem;\n  background: rgba(58, 57, 57, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  transition: opacity 0.5s;\n}\n.__aside.--is-open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.__aside[_ngcontent-%COMP%]:not(.--is-open) {\n  opacity: 0;\n  visibility: hidden;\n}\n.__aside-foot[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.__aside-foot-top[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 2px solid #555454;\n}\n.__aside-foot-bottom[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n}\n.__aside-btn[_ngcontent-%COMP%] {\n  color: var(--cl-white);\n  border: none;\n  background: transparent;\n}\n.__aside-foot-top-name[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.37;\n  letter-spacing: normal;\n  text-align: left;\n  color: var(--cl-white);\n}\n.__aside-foot-top-text[_ngcontent-%COMP%] {\n  font-size: 11.9px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.84;\n  letter-spacing: 0.6px;\n  text-align: left;\n  color: var(--cyan-four);\n}\n.__aside-foot-top-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.73;\n  letter-spacing: normal;\n  text-align: left;\n  color: var(--cl-white);\n}\n.__aside-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.__aside-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #555454;\n}\n.__aside-item-head[_ngcontent-%COMP%] {\n  min-height: 1.875rem;\n  padding: 0 1.125rem;\n  font-size: 0.625rem;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 1.6px;\n  text-align: left;\n  color: var(--cl-white);\n  background-color: var(--black-two);\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.051);\n}\n.__aside-item-btn[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--cl-white);\n  border: none;\n  background: transparent;\n}\n.__aside-item-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.__aside-item-content.--pdd[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.__aside-item-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.__aside-item-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 0.9375rem;\n  line-height: 1;\n  font-size: 0.9375rem;\n}\n@media (max-width: 639px) {\n  .__btn-dropdown[_ngcontent-%COMP%], .__user-name[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .__user[_ngcontent-%COMP%] {\n    padding-left: 1.25rem;\n  }\n\n  .__user-avatar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media (min-width: 640px) {\n  .__btn--dashboard[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLWxheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NBLGdDQUFBO0FBT0EsZ0VBQUE7QUMxUEE7OztHQUFBO0FDakRBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLDBDQUFBO0VBQ0EsaUNBQUE7QUNFRjtBRENBO0VBQ0UsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBRUEsNEVBQUE7QUNESjtBREtBO0VBQ0Usb0JBQUE7RUFFQSxpQkFBQTtFQUVBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRE9FO0VBQ0Usc0JBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7RUFFQSxzQkFBQTtBQ1BKO0FEU0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFFQSx5QkFBQTtFQUVBLDZCQUFBO0FDWk47QURnQkU7RUFDRSxlQUFBO0FDZEo7QURrQkE7RUFDRSxZQUFBO0VBRUEsaUJBQUE7QUNoQkY7QURtQkE7RUFDRSxZQUFBO0VBRUEscUJBQUE7RUFDQSw4QkFBQTtFQUVBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSwrQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxzQkFBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7QUN4QkY7QUQyQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDM0JGO0FENkJFO0VBQ0Usc0JBQUE7QUMzQko7QUQrQkE7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1GQUFBO0FDL0JGO0FEaUNFO0VBQ0UsbUJBQUE7RUFFQSxtQkFBQTtFQUVBLHlCQUFBO0FDakNKO0FEcUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsMkNBQUE7RUFBQSxtQ0FBQTtFQUVBLGdCQUFBO0VBS0EsaUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBRUEsd0JBQUE7QUMxQ0Y7QUQ0Q0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUMxQ0o7QUQ2Q0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7QUQrQ0E7RUFFRSxxQ0FBQTtBQzdDRjtBRGdEQTtFQUNFLGFBQUE7RUFFQSxnQ0FBQTtBQzlDRjtBRGlEQTtFQUNFLHVCQUFBO0FDOUNGO0FEaURBO0VBQ0Usc0JBQUE7RUFFQSxZQUFBO0VBQ0EsdUJBQUE7QUMvQ0Y7QURrREE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUMvQ0Y7QURrREE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDL0NGO0FEa0RBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDL0NGO0FEa0RBO0VBQ0UsZ0JBQUE7QUMvQ0Y7QURpREU7RUFDRSxnQ0FBQTtBQy9DSjtBRG1EQTtFQUNFLG9CQUFBO0VBRUEsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0VBQ0EsNENBQUE7QUNuREY7QURzREE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0FDcERGO0FEdURBO0VBQ0UsYUFBQTtBQ3BERjtBRHNERTtFQUNFLFVBQUE7QUNwREo7QUR1REU7RUFDRSxxQkFBQTtFQUVBLDBCQUFBO0tBQUEsdUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDdERKO0FEMkRFO0VBQ0Usd0JBQUE7RUFFQSxjQUFBO0VBRUEsb0JBQUE7QUMxREo7QUgxTEk7RUV5UEY7SUFDRSx3QkFBQTtFQzNERjs7RUQ4REE7SUFDRSxxQkFBQTtFQzNERjs7RUQ4REE7SUFDRSxjQUFBO0VDM0RGO0FBQ0Y7QUhsTkk7RUVpUkY7SUFDRSx3QkFBQTtFQzVERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogcmVtKDYwKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5aXNoLWJyb3duLXR3byk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCB2YXIoLS1jeWFuKTtcbn1cblxuLl9fbG9nbyB7XG4gIHBhZGRpbmc6IHJlbSgxMik7XG5cbiAgZm9udC1zaXplOiByZW0oMTApO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1jeWFuLXR3byk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmOmJlZm9yZSB7XG4gICAgd2lkdGg6IHJlbSg3MCk7XG4gICAgaGVpZ2h0OiByZW0oMjQpO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kOiAkaW1nLWxvZ28tMiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvbnRhaW47XG4gIH1cbn1cblxuLl9fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgcGFkZGluZzogcmVtKDEwKTtcblxuICBmb250LXNpemU6IHJlbSgxOSk7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG5cbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jeWFuLXR3byk7XG4gIH1cblxuICAmLS1ub3RpZiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgY29sb3I6IHZhcigtLWN5YW4tdHdvKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgICB3aWR0aDogcmVtKDgpO1xuICAgICAgaGVpZ2h0OiByZW0oOCk7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTUxZjtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XG4gICAgfVxuICB9XG5cbiAgJi0tZGFzaGJvYXJkIHtcbiAgICBmb250LXNpemU6IHJlbSgxNik7XG4gIH1cbn1cblxuLl9fcmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5fX3VzZXIge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luLWxlZnQ6IHJlbSgxMCk7XG4gIHBhZGRpbmc6IDAgcmVtKDYpIDAgcmVtKDM0KTtcblxuICBmb250LXNpemU6IHJlbSgxMyk7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG5cbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCByZ2JhKCNmZmYsIC4xKTtcbn1cblxuLl9fdXNlci1hdmF0YXIge1xuICB3aWR0aDogcmVtKDM2KTtcbiAgaGVpZ2h0OiByZW0oMzYpO1xuXG4gIG1hcmdpbi1sZWZ0OiByZW0oMTgpO1xuXG4gIGZvbnQtc2l6ZTogcmVtKDE3KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHJlbSgxMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4tdGhyZWUpO1xuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDApO1xufVxuXG4uX19idG4tYXJyb3cge1xuICBwYWRkaW5nOiByZW0oMTApO1xuICBmb250LXNpemU6IHJlbSg4KTtcblxuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWN5YW4tdHdvKTtcbiAgfVxufVxuXG4uX19idG4tZHJvcGRvd24ge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgcGFkZGluZzogMCByZW0oMjgpO1xuXG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG5cbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHJnYmEoI2ZmZiwgLjEpLCAxcHggMCAwIDAgcmdiYSgjZmZmLCAuMSk7XG5cbiAgLmdiaS10ci1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogcmVtKDgpO1xuXG4gICAgZm9udC1zaXplOiByZW0oMTApO1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgfVxufVxuXG4uX19hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiByZW0oNjApO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHotaW5kZXg6IDEwMDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtYXgtY29udGVudDtcblxuICB3aWR0aDogcmVtKDMyMik7XG4gIC8vaGVpZ2h0OiDRgTEwMHZoO1xuXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stdHdvKTtcblxuICBiYWNrZ3JvdW5kOiByZ2JhKCMzYTM5MzksIC45KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG5cbiAgJi4tLWlzLW9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gICY6bm90KC4tLWlzLW9wZW4pIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4uX19hc2lkZS1mb290IHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuMzgpO1xufVxuXG4uX19hc2lkZS1mb290LXRvcCB7XG4gIHBhZGRpbmc6IHJlbSgxNik7XG5cbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NTU0NTQ7XG59XG5cbi5fX2FzaWRlLWZvb3QtYm90dG9tIHtcbiAgcGFkZGluZzogcmVtKDEyKSByZW0oMjQpO1xufVxuXG4uX19hc2lkZS1idG4ge1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5fX2FzaWRlLWZvb3QtdG9wLW5hbWUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xufVxuXG4uX19hc2lkZS1mb290LXRvcC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMS45cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjg0O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jeWFuLWZvdXIpO1xufVxuXG4uX19hc2lkZS1mb290LXRvcC1kZXNjIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbn1cblxuLl9fYXNpZGUtaXRlbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU1NTQ1NDtcbiAgfVxufVxuXG4uX19hc2lkZS1pdGVtLWhlYWQge1xuICBtaW4taGVpZ2h0OiByZW0oMzApO1xuXG4gIHBhZGRpbmc6IDAgcmVtKDE4KTtcblxuICBmb250LXNpemU6IHJlbSgxMCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stdHdvKTtcbiAgYm94LXNoYWRvdzogMCAxcHggN3B4IDAgcmdiYSgjMDAwLCAwLjA1MSk7XG59XG5cbi5fX2FzaWRlLWl0ZW0tYnRuIHtcbiAgZm9udC1zaXplOiByZW0oMTEpO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5fX2FzaWRlLWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IHJlbSgxNik7XG5cbiAgJi4tLXBkZCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxufVxuXG4uX19hc2lkZS1pdGVtLWxpbmsge1xuICBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiByZW0oMTUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICBmb250LXNpemU6IHJlbSgxNSk7XG4gIH1cbn1cblxuQGluY2x1ZGUgbWF4LXdpZGUocGhvbmVzTGcpIHtcbiAgLl9fYnRuLWRyb3Bkb3duLCAuX191c2VyLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5fX3VzZXIge1xuICAgIHBhZGRpbmctbGVmdDogcmVtKDIwKTtcbiAgfVxuXG4gIC5fX3VzZXItYXZhdGFyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG5AaW5jbHVkZSBtaW4td2lkZShwaG9uZXNMZykge1xuICAuX19idG4tLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbi8qIE1pY3Jvc29mdCBFZGdlIEJyb3dzZXIgMTItMTggKEFsbCB2ZXJzaW9ucyBiZWZvcmUgQ2hyb21pdW0pICovXG4vKipcbiAqIEl0IGlzIHVzZWQgdG8gc2V0IGEgc21vb3RoIHRyYW5zaXRpb24gb24gdGhlIGVkZ2VzIG9mIHRoZSBibG9jayB3aGVuIHNjcm9sbGluZy5cbiAqIEl0IGhhcyB0d28gb3JpZW50YXRpb25zIFwidmVydGljYWxcIiBhbmQgIFwiaG9yaXpvbnRhbFwiXG4gKiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogMy43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleWlzaC1icm93bi10d28pO1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgdmFyKC0tY3lhbik7XG59XG5cbi5fX2xvZ28ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1jeWFuLXR3byk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5fX2xvZ286YmVmb3JlIHtcbiAgd2lkdGg6IDQuMzc1cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvcG15LWxvZ28tbmV3LXdoaXRlQDN4LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb250YWluO1xufVxuXG4uX19idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uX19idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY3lhbi10d28pO1xufVxuLl9fYnRuLS1ub3RpZiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWN5YW4tdHdvKTtcbn1cbi5fX2J0bi0tbm90aWY6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE1MWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xufVxuLl9fYnRuLS1kYXNoYm9hcmQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5fX3JpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLl9fdXNlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuICBwYWRkaW5nOiAwIDAuMzc1cmVtIDAgMi4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLl9fdXNlci1hdmF0YXIge1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBtYXJnaW4tbGVmdDogMS4xMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLXRocmVlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMCk7XG59XG5cbi5fX2J0bi1hcnJvdyB7XG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uX19idG4tYXJyb3c6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY3lhbi10d28pO1xufVxuXG4uX19idG4tZHJvcGRvd24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMS43NXJlbTtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgMXB4IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5fX2J0bi1kcm9wZG93biAuZ2JpLXRyLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4uX19hc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzLjc1cmVtO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1heC1jb250ZW50O1xuICB3aWR0aDogMjAuMTI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU4LCA1NywgNTcsIDAuOSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4uX19hc2lkZS4tLWlzLW9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLl9fYXNpZGU6bm90KC4tLWlzLW9wZW4pIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uX19hc2lkZS1mb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLl9fYXNpZGUtZm9vdC10b3Age1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU1NTQ1NDtcbn1cblxuLl9fYXNpZGUtZm9vdC1ib3R0b20ge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbn1cblxuLl9fYXNpZGUtYnRuIHtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLl9fYXNpZGUtZm9vdC10b3AtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG59XG5cbi5fX2FzaWRlLWZvb3QtdG9wLXRleHQge1xuICBmb250LXNpemU6IDExLjlweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuODQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWN5YW4tZm91cik7XG59XG5cbi5fX2FzaWRlLWZvb3QtdG9wLWRlc2Mge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjczO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xufVxuXG4uX19hc2lkZS1pdGVtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5fX2FzaWRlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1NDU0O1xufVxuXG4uX19hc2lkZS1pdGVtLWhlYWQge1xuICBtaW4taGVpZ2h0OiAxLjg3NXJlbTtcbiAgcGFkZGluZzogMCAxLjEyNXJlbTtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stdHdvKTtcbiAgYm94LXNoYWRvdzogMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA1MSk7XG59XG5cbi5fX2FzaWRlLWl0ZW0tYnRuIHtcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5fX2FzaWRlLWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uX19hc2lkZS1pdGVtLWNvbnRlbnQuLS1wZGQge1xuICBwYWRkaW5nOiAwO1xufVxuLl9fYXNpZGUtaXRlbS1jb250ZW50IGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5fX2FzaWRlLWl0ZW0tbGluayBpIHtcbiAgcGFkZGluZy1yaWdodDogMC45Mzc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICAuX19idG4tZHJvcGRvd24sIC5fX3VzZXItbmFtZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLl9fdXNlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG5cbiAgLl9fdXNlci1hdmF0YXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLl9fYnRuLS1kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-layout/components/main-layout/main-layout.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/main-layout/components/main-layout/main-layout.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppMainLayoutComponentsMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/main-layout/components/header/header.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sidebar-left/sidebar-left.component */
    "./src/app/main-layout/components/sidebar-left/sidebar-left.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainLayoutComponent = /*#__PURE__*/function () {
      function MainLayoutComponent() {
        _classCallCheck(this, MainLayoutComponent);
      }

      _createClass(MainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)();
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      decls: 5,
      vars: 0,
      consts: [["fxLayout", "row"], ["fxFlex", ""]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_3__["SidebarLeftComponent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbGF5b3V0L2NvbXBvbmVudHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-layout',
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-layout/components/sidebar-left/sidebar-left.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/main-layout/components/sidebar-left/sidebar-left.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SidebarLeftComponent */

  /***/
  function srcAppMainLayoutComponentsSidebarLeftSidebarLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarLeftComponent", function () {
      return SidebarLeftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SidebarLeftComponent = /*#__PURE__*/function () {
      function SidebarLeftComponent() {
        _classCallCheck(this, SidebarLeftComponent);
      }

      _createClass(SidebarLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarLeftComponent;
    }();

    SidebarLeftComponent.ɵfac = function SidebarLeftComponent_Factory(t) {
      return new (t || SidebarLeftComponent)();
    };

    SidebarLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarLeftComponent,
      selectors: [["app-sidebar-left"]],
      decls: 15,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "__wrapper"], [1, "__menu"], [1, "__menu-item", "--active"], ["routerLink", "/dashboard", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "__menu-link"], [1, "gbi-speed"], [1, "__menu-item"], [1, "gbi-web"], [1, "gbi-globe"], [1, "gbi-settings"]],
      template: function SidebarLeftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".__wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  min-height: 100%;\n  background: #000000;\n}\n\n.__menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.__menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 64px;\n  color: var(--cyan);\n}\n\n.__menu-item.--active[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--cyan);\n  background-color: #020203;\n}\n\n.__menu-link[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvbWFpbi1sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyLWxlZnQvc2lkZWJhci1sZWZ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLWxheW91dC9jb21wb25lbnRzL3NpZGViYXItbGVmdC9zaWRlYmFyLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFFQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ0ZGOztBRElFO0VBQ0Usa0NBQUE7RUFFQSx5QkFBQTtBQ0hKOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9tYWluLWxheW91dC9jb21wb25lbnRzL3NpZGViYXItbGVmdC9zaWRlYmFyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuX193cmFwcGVyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuLl9fbWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5fX21lbnUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG5cbiAgY29sb3I6IHZhcigtLWN5YW4pO1xuXG4gICYuLS1hY3RpdmUge1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY3lhbik7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjAzO1xuICB9XG59XG5cbi5fX21lbnUtbGluayB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiIsIi5fX3dyYXBwZXIge1xuICB3aWR0aDogNjBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuLl9fbWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uX19tZW51LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBjb2xvcjogdmFyKC0tY3lhbik7XG59XG4uX19tZW51LWl0ZW0uLS1hY3RpdmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWN5YW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjAzO1xufVxuXG4uX19tZW51LWxpbmsge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-left',
          templateUrl: './sidebar-left.component.html',
          styleUrls: ['./sidebar-left.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-layout/main-layout.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/main-layout/main-layout.module.ts ***!
    \***************************************************/

  /*! exports provided: MainLayoutModule */

  /***/
  function srcAppMainLayoutMainLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutModule", function () {
      return MainLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main-layout/main-layout.component */
    "./src/app/main-layout/components/main-layout/main-layout.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/main-layout/components/header/header.component.ts");
    /* harmony import */


    var _components_sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sidebar-left/sidebar-left.component */
    "./src/app/main-layout/components/sidebar-left/sidebar-left.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var MainLayoutModule = function MainLayoutModule() {
      _classCallCheck(this, MainLayoutModule);
    };

    MainLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainLayoutModule
    });
    MainLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainLayoutModule_Factory(t) {
        return new (t || MainLayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["GridModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainLayoutModule, {
        declarations: [_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_4__["SidebarLeftComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["GridModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_4__["SidebarLeftComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["GridModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/button/button.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/button/button.component.ts ***!
    \**************************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppSharedComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.typeButton = 'submit';
        this.disabled = false;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)();
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["app-button"]],
      inputs: {
        typeButton: "typeButton",
        disabled: "disabled"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 2,
      consts: [[1, "__button", 3, "disabled"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.typeButton);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: var(--btn-wdh, 100%);\n  height: var(--btn-hgt, 2.0625rem);\n  outline: none;\n}\n.__button[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  padding: var(--btn-pdd, 0 1.875rem);\n  font-family: \"Roboto\", sans-serif;\n  font-size: var(--btn-font-size, 0.75rem);\n  font-weight: 500;\n  text-align: center;\n  color: var(--ugly-blue);\n  white-space: nowrap;\n  text-transform: uppercase;\n  border: none;\n  border-radius: var(--btn-rd, 0.25rem);\n  background: var(--btn-bg, var(--cyan));\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n@media (pointer: fine) {\n  .__button[_ngcontent-%COMP%] {\n    transition: background-color 0.3s ease-in-out, transform 0.3s cubic-bezier(0.17, 0.67, 0.82, 0.59), box-shadow 0.4s ease-in-out, color 0.2s ease-in-out;\n    will-change: transform;\n  }\n  .__button[_ngcontent-%COMP%]:hover {\n    color: var(--blue-grey);\n    background-color: var(--cyan-three);\n    box-shadow: none;\n  }\n  .__button[_ngcontent-%COMP%]:active {\n    transform: var(--btn-transform, translate(0, 2px));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NBLGdDQUFBO0FBT0EsZ0VBQUE7QUMxUEE7OztHQUFBO0FDMUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0FDSkY7QURPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBRUEsbUNBQUE7RUFFQSxpQ0UwRXNCO0VGekV0Qix3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDUkY7QUhpUEU7RUVyT0E7SUFDRSx1SkFwQ2dCO0lBcUNoQixzQkFBQTtFQ1JGO0VEVUU7SUFDRSx1QkEzQ3VCO0lBNEN2QixtQ0EzQzBCO0lBNEMxQixnQkFBQTtFQ1JKO0VEV0U7SUFDRSxrREFBQTtFQ1RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbi8vICogYnV0dG9uc1xuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yOiB2YXIoLS1ibHVlLWdyZXkpO1xuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1jeWFuLXRocmVlKTtcblxuJGJ1dHRvbi10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjgyLCAwLjU5KSxcbmJveC1zaGFkb3cgMC40cyBlYXNlLWluLW91dCwgY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB3aWR0aDogdmFyKC0tYnRuLXdkaCwgMTAwJSk7XG4gIGhlaWdodDogdmFyKC0tYnRuLWhndCwgcmVtKDMzKSk7XG5cbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLl9fYnV0dG9uIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcblxuICBwYWRkaW5nOiB2YXIoLS1idG4tcGRkLCAjezAgcmVtKDMwKX0pO1xuXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xuICBmb250LXNpemU6IHZhcigtLWJ0bi1mb250LXNpemUsIHJlbSgxMikpOztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdWdseS1ibHVlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ0bi1yZCwgJGVsZW1SYWRpdXNTbWFsbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1iZywgdmFyKC0tY3lhbikpO1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AaW5jbHVkZSBvbmx5LW1vdXNlIHtcbiAgLl9fYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiAkYnV0dG9uLXRyYW5zaXRpb247XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRidXR0b24tcHJpbWFyeS1ob3Zlci1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tcHJpbWFyeS1ob3Zlci1iZy1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB2YXIoLS1idG4tdHJhbnNmb3JtLCB0cmFuc2xhdGUoMCwgMnB4KSk7XG4gICAgfVxuICB9XG59XG5cbiIsIi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiB2YXIoLS1idG4td2RoLCAxMDAlKTtcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGd0LCAyLjA2MjVyZW0pO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uX19idXR0b24ge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiB2YXIoLS1idG4tcGRkLCAwIDEuODc1cmVtKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYnRuLWZvbnQtc2l6ZSwgMC43NXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXVnbHktYmx1ZSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnRuLXJkLCAwLjI1cmVtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWJnLCB2YXIoLS1jeWFuKSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLl9fYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjgyLCAwLjU5KSwgYm94LXNoYWRvdyAwLjRzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIH1cbiAgLl9fYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1ncmV5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuLXRocmVlKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5fX2J1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdmFyKC0tYnRuLXRyYW5zZm9ybSwgdHJhbnNsYXRlKDAsIDJweCkpO1xuICB9XG59IiwiLy8qIE1hcCBzaXplIGRldmljZXMgZm9yIG1lZGlhIHF1ZXJ5XG4kd2lkZVNjcmVlbnM6IChcbiAgcGhvbmVzU206IDM0MHB4LFxuICBwaG9uZXM6IDQ4MHB4LFxuICBwaG9uZXNMZzogNjQwcHgsXG4gIHRhYmxldDogNzY4cHgsXG4gIGxhcHRvcDogOTkycHgsXG4gIGRlc2t0b3BTbTogMTAyNHB4LFxuICBkZXNrdG9wTWQ6IDExNzBweCxcbiAgZGVza3RvcDogMTI4MHB4LFxuICBub3RlYm9vazogMTM2NnB4LFxuICBub3RlYm9va0xnOiAxNjAwcHgsXG4gIGZ1bGxIRDogMTgwMHB4LFxuICByZXRpbmE6IDIxMDBweCxcbiAgcmV0aW5hNGs6IDM2NTZweCxcbiAgcmV0aW5hNWs6IDUxMDBweCxcbiAgcmV0aW5hOGs6IDc2MDBweFxuKTtcblxuLy8qIE1haW4gY29udGVudCAmJiBlbGVtZW50cyBzaXplc1xuLy8kY29udGVudFdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbi8vJGNvbnRlbnRQYWRkaW5nOiB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xuXG4kZ3VpZGVzOiBmYWxzZTtcbiRndWlkZXNCb2R5OiBmYWxzZTtcbiRndWlkZXNDb250YWluZXI6IGZhbHNlO1xuJGd1aWRlc0NlbnRlcjogdHJ1ZTtcbiRndWlkZXMtY29sb3I6ICNmZjNlMjM7XG4kZ3VpZGVzLWNvbHVtbjogMTI7XG5cbiRjdXN0b21Db250YWluZXI6IHRydWU7XG4kY29udGVudEd1dHRlcjogcmVtKDE2KSAhZGVmYXVsdDtcbiRjb250ZW50R3V0dGVyWDI6IHJlbSgyNCkgIWRlZmF1bHQ7XG4kY29udGVudEd1dHRlclgzOiByZW0oNDgpICFkZWZhdWx0O1xuJGNvbnRlbnRHdXR0ZXJYNDogcmVtKDk2KSAhZGVmYXVsdDtcblxuJG11bHRpcGxpZXI6IDEuMjUgIWRlZmF1bHQ7XG5cbiRlbGVtUmFkaXVzOiByZW0oNDApICFkZWZhdWx0O1xuJGVsZW1SYWRpdXNOb3JtYWw6IHJlbSgxMCkgIWRlZmF1bHQ7XG4kZWxlbVJhZGl1c1NtYWxsOiByZW0oNCkgIWRlZmF1bHQ7XG5cbi8vKiB6LWluZGV4XG4kei1pbmRleC1zdGVwOiAxMCAhZGVmYXVsdDtcbiR6LWluZGV4OiAoXG4gIHN0YXJ0OiAxMCxcbiAgbWlkZGxlOiA1MCxcbiAgaGVhZGVyOiAxMDAsXG4gIG1vZGFsOiAxMDAwXG4pICFkZWZhdWx0O1xuXG4vLyAqIGNvbG9yc1xuJGNsLXByaW1hcnk6IHZhcigtLWN5YW4pICFkZWZhdWx0O1xuJGNsLXNlY29uZGFyeTogdmFyKC0tY2wtZ3JleSkgIWRlZmF1bHQ7XG5cbiRiYXNlLWZvbnQtY29sb3I6IHZhcigtLWNsLXdoaXRlKSAhZGVmYXVsdDtcbiRiYXNlLWZvbnQtc2l6ZS1jb2xvcjogMTZweCAhZGVmYXVsdDtcblxuJGNsLXJlZDogdmFyKC0tb3JhbmdleS1yZWQpO1xuXG4kY2wtYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuXG4vLyRjbC1wbGFjZWhvbGRlcjogdmFyKC0tY2wtZ3JleS02MCk7XG5cbi8vJGRpc2FibGVkLWNvbG9yOiB2YXIoLS1jbC1ncmV5LTYwKTtcbi8vJGRpc2FibGVkLWJnLWNvbG9yOiB2YXIoLS1jbC1ncmV5LTYwKTtcbi8vJGRpc2FibGVkLWJnLWNvbG9yLXNlY29uZDogI2U5ZTllYjtcbi8vJGRpc2FibGVkLW9wYWNpdHk6IDAuOTtcblxuLy8gKiBzaGFkb3dzXG4vLyRzaC1jYXJkOiAwIHJlbSgxMCkgcmVtKDE0KSByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuLy8kc2gtbWFpbjogMCByZW0oOCkgcmVtKDIxKSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuLy8kc2gtdXA6IDAgcmVtKC00KSByZW0oMjEpIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4vLyRzaC06IDtcbi8vJHNoLTogO1xuXG4vLyAqIGdyYWRpZW50c1xuLy8kZ3ItYnRuOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNjYzIyOWEgMCUsICNjYzIyOWEgMSUsICM5NDE4ODcgMTAwJSk7XG4kZ3ItbGlnaHQtaGlkZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAtMTAwJSwgd2hpdGUgOTYlLCB3aGl0ZSAxMCUpO1xuLy8kZ3ItcmFkaWFsOiByYWRpYWwtZ3JhZGllbnQoKTtcblxuLy8gKiBjbGlwLXBhdGhzIGFuZCBzdmcgYmdcbi8vJGNwLTogO1xuXG4vLyAqIGltYWdlcyBzb3VyY2VcbiRhc3NldHMtcGF0aDogJ3NyYy9hc3NldHMvaW1hZ2VzLycgIWRlZmF1bHQ7XG5cbiRpbWctbWFwOiB1cmwoJyN7JGFzc2V0cy1wYXRofW1hcC5qcGcnKTtcbiRpbWctbG9nbzogdXJsKCcjeyRhc3NldHMtcGF0aH1wbXktbG9nby1uZXctd2hpdGUuc3ZnJyk7XG4kaW1nLWxvZ28tMjogdXJsKCcjeyRhc3NldHMtcGF0aH1wbXktbG9nby1uZXctd2hpdGVAM3gucG5nJyk7XG4kaW1nLWxvZ2luOiB1cmwoJyN7JGFzc2V0cy1wYXRofWxvZ2luLWJnLnBuZycpO1xuJGltZy1sb2dpbi0yOiB1cmwoJyN7JGFzc2V0cy1wYXRofWxvZ2luLWJnLmpwZycpO1xuJGltZy1sb2dpbi1mbGFnOiB1cmwoJyN7JGFzc2V0cy1wYXRofXNpZ24tZmxhZy5wbmcnKTtcblxuXG4vLyAqIGZvbnRzXG4kZm9udC1wYXRoOiAnYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LXRlcnRpYXJ5OiAnTWFydGVsJywgc2VyaWY7XG5cbi8vKiBJY29uc1xuJGljb24tZm9udC1mYW1pbHk6ICdncmFiLWljb25zJyAhZGVmYXVsdDtcbiRpY29uLWZvbnQtcHJlZml4OiAnZ2JpJztcbiRpY29uLWZvbnQtcGF0aDogJGZvbnQtcGF0aCArICcvI3skaWNvbi1mb250LWZhbWlseX0nICFkZWZhdWx0O1xuXG4kZ2JpLXBvd2VyOiBcIlxcZTkxMlwiO1xuJGdiaS1kb3dubG9hZDogXCJcXGU5MTNcIjtcbiRnYmktdXBsb2FkOiBcIlxcZTkxNFwiO1xuJGdiaS1tZW51OiBcIlxcZTkxMVwiO1xuJGdiaS1hcnJvdy1kb3duOiBcIlxcZTkwOFwiO1xuJGdiaS1hcnJvdy1sZWZ0OiBcIlxcZTkwYVwiO1xuJGdiaS1hcnJvdy1saW5lLXVwOiBcIlxcZTkwYlwiO1xuJGdiaS1hcnJvdy1saW5lLWRvd246IFwiXFxlOTBjXCI7XG4kZ2JpLWFycm93LXJpZ2h0OiBcIlxcZTkwZFwiO1xuJGdiaS1hcnJvdy11cDogXCJcXGU5MGVcIjtcbiRnYmktY2hhcnQ6IFwiXFxlOTAwXCI7XG4kZ2JpLXNwZWVkOiBcIlxcZTkwMVwiO1xuJGdiaS1jcml0aWNhbDogXCJcXGU5MDJcIjtcbiRnYmktYnJpY2tzOiBcIlxcZTkwM1wiO1xuJGdiaS1nbG9iZTogXCJcXGU5MDRcIjtcbiRnYmktbm90aWZpY2F0aW9uOiBcIlxcZTkwNVwiO1xuJGdiaS1zZXR0aW5nczogXCJcXGU5MDZcIjtcbiRnYmktdXNlcnM6IFwiXFxlOTA3XCI7XG4kZ2JpLXRyLWxlZnQ6IFwiXFxlOTBmXCI7XG4kZ2JpLXRyLXJpZ2h0OiBcIlxcZTkxMFwiO1xuJGdiaS1zZWFyY2g6IFwiXFxlOTA5XCI7XG4kZ2JpLXdlYjogXCJcXGU5MTZcIjtcbiRnYmktaG9tZTogXCJcXGU5MTVcIjtcbiRnYmktd2lkZ2V0OiBcIlxcZTkxYVwiO1xuXG4kaWNvbnMtZm9udC1tYXA6IChcbiAgYXJyb3ctZG93bjogJGdiaS1hcnJvdy1kb3duLFxuICBhcnJvdy1sZWZ0OiAkZ2JpLWFycm93LWxlZnQsXG4gIGFycm93LWxpbmUtdXA6ICRnYmktYXJyb3ctbGluZS11cCxcbiAgYXJyb3ctbGluZS1kb3duOiAkZ2JpLWFycm93LWxpbmUtZG93bixcbiAgYXJyb3ctcmlnaHQ6ICRnYmktYXJyb3ctcmlnaHQsXG4gIGFycm93LXVwOiAkZ2JpLWFycm93LXVwLFxuICBjaGFydDogJGdiaS1jaGFydCxcbiAgc3BlZWQ6ICRnYmktc3BlZWQsXG4gIGNyaXRpY2FsOiAkZ2JpLWNyaXRpY2FsLFxuICBicmlja3M6ICRnYmktYnJpY2tzLFxuICBnbG9iZTogJGdiaS1nbG9iZSxcbiAgbm90aWZpY2F0aW9uOiAkZ2JpLW5vdGlmaWNhdGlvbixcbiAgc2V0dGluZ3M6ICRnYmktc2V0dGluZ3MsXG4gIHVzZXJzOiAkZ2JpLXVzZXJzLFxuICB0ci1sZWZ0OiAkZ2JpLXRyLWxlZnQsXG4gIHRyLXJpZ2h0OiAkZ2JpLXRyLXJpZ2h0LFxuICBzZWFyY2g6ICRnYmktc2VhcmNoLFxuICBtZW51OiRnYmktbWVudSxcbiAgcG93ZXI6ICRnYmktcG93ZXIsXG4gIGRvd25sb2FkOiAkZ2JpLWRvd25sb2FkLFxuICB1cGxvYWQ6ICRnYmktdXBsb2FkLFxuICB3ZWI6ICRnYmktd2ViLFxuICBob21lOiAkZ2JpLWhvbWUsXG4gIHdpZGdldDogJGdiaS13aWRnZXRcbik7XG5cbi8vIGxpbmtzXG5cbiRsaW5rLWNvbG9yOiBjdXJyZW50Q29sb3IgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogJGNsLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiB0cmFuc2l0aW9ucyAmJiBhbmltYXRpb25zXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiAwLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYm9yZGVyOiBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tZGVmYXVsdCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLXNoYWRvdzogYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1kZWZhdWx0ICFkZWZhdWx0O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-button',
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss']
        }]
      }], function () {
        return [];
      }, {
        typeButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/camera-preview/camera-preview.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/camera-preview/camera-preview.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CameraPreviewComponent */

  /***/
  function srcAppSharedComponentsCameraPreviewCameraPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPreviewComponent", function () {
      return CameraPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var CameraPreviewComponent = /*#__PURE__*/function () {
      function CameraPreviewComponent() {
        _classCallCheck(this, CameraPreviewComponent);
      }

      _createClass(CameraPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          window.open(this.link, '_blank');
        }
      }]);

      return CameraPreviewComponent;
    }();

    CameraPreviewComponent.ɵfac = function CameraPreviewComponent_Factory(t) {
      return new (t || CameraPreviewComponent)();
    };

    CameraPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CameraPreviewComponent,
      selectors: [["app-camera-preview"]],
      inputs: {
        imgUrl: "imgUrl",
        value: "value",
        link: "link"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "__background", 3, "ngStyle", "click"], [1, "__value"], [1, "__button"]],
      template: function CameraPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraPreviewComponent_Template_div_click_0_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.imgUrl + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.value, "%");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".__background[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 15rem;\n  height: 8.5rem;\n  border-radius: 1rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  cursor: pointer;\n}\n.__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.625rem;\n  left: 0.625rem;\n  z-index: 1;\n  font-size: 0.84375rem;\n  letter-spacing: 0.34px;\n  text-align: center;\n  color: #dcdcdc;\n}\n.__button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.625rem;\n  bottom: 0.625rem;\n  z-index: 1;\n  line-height: 1.375rem;\n  padding: 0 0.9375rem;\n  font-size: 0.625rem;\n  letter-spacing: 0.25px;\n  text-align: center;\n  color: var(--cl-white);\n  text-transform: uppercase;\n  border: none;\n  border-radius: 1.375rem;\n  background-color: #3e4e6c;\n}\n.__button[_ngcontent-%COMP%]:hover {\n  background-color: var(--teal-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FtZXJhLXByZXZpZXcvY2FtZXJhLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbWVyYS1wcmV2aWV3L2NhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNTQSxnQ0FBQTtBQU9BLGdFQUFBO0FDMVBBOzs7R0FBQTtBQzdDQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFFQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUVBLGVBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUVBLHFCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFVFO0VBQ0Usa0NBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbWVyYS1wcmV2aWV3L2NhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbjpob3N0IHtcblxufVxuXG4uX19iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG1pbi13aWR0aDogcmVtKDI0MCk7XG4gIGhlaWdodDogcmVtKDEzNik7XG5cbiAgYm9yZGVyLXJhZGl1czogcmVtKDE2KTtcblxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uX192YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiByZW0oMTApO1xuICBsZWZ0OiByZW0oMTApO1xuICB6LWluZGV4OiAxO1xuXG4gIGZvbnQtc2l6ZTogcmVtKDEzLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGNkY2RjO1xufVxuXG4uX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiByZW0oMTApO1xuICBib3R0b206IHJlbSgxMCk7XG4gIHotaW5kZXg6IDE7XG5cbiAgbGluZS1oZWlnaHQ6IHJlbSgyMik7XG4gIHBhZGRpbmc6IDAgcmVtKDE1KTtcblxuICBmb250LXNpemU6IHJlbSgxMCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHJlbSgyMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTRlNmM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRlYWwtYmx1ZSk7XG4gIH1cbn1cbiIsIi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbi5fX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIGhlaWdodDogOC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5fX3ZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNjI1cmVtO1xuICBsZWZ0OiAwLjYyNXJlbTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGNkY2RjO1xufVxuXG4uX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjYyNXJlbTtcbiAgYm90dG9tOiAwLjYyNXJlbTtcbiAgei1pbmRleDogMTtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1cmVtO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEuMzc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTZjO1xufVxuLl9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC1ibHVlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-camera-preview',
          templateUrl: './camera-preview.component.html',
          styleUrls: ['./camera-preview.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imgUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/chart-card/chart-card.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/chart-card/chart-card.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ChartCardComponent */

  /***/
  function srcAppSharedComponentsChartCardChartCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartCardComponent", function () {
      return ChartCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChartCardComponent = /*#__PURE__*/function () {
      function ChartCardComponent() {
        _classCallCheck(this, ChartCardComponent);
      }

      _createClass(ChartCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartCardComponent;
    }();

    ChartCardComponent.ɵfac = function ChartCardComponent_Factory(t) {
      return new (t || ChartCardComponent)();
    };

    ChartCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartCardComponent,
      selectors: [["app-chart-card"]],
      decls: 2,
      vars: 0,
      template: function ChartCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chart-card works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0LWNhcmQvY2hhcnQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart-card',
          templateUrl: './chart-card.component.html',
          styleUrls: ['./chart-card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/info-card/info-card.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/info-card/info-card.component.ts ***!
    \********************************************************************/

  /*! exports provided: InfoCardComponent */

  /***/
  function srcAppSharedComponentsInfoCardInfoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function () {
      return InfoCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoCardComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
      }
    }

    var _c0 = ["*"];

    var InfoCardComponent = /*#__PURE__*/function () {
      function InfoCardComponent() {
        _classCallCheck(this, InfoCardComponent);

        this.link = 'https://google.com';
      }

      _createClass(InfoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          window.open(this.link, '_blank');
        }
      }]);

      return InfoCardComponent;
    }();

    InfoCardComponent.ɵfac = function InfoCardComponent_Factory(t) {
      return new (t || InfoCardComponent)();
    };

    InfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoCardComponent,
      selectors: [["app-info-card"]],
      inputs: {
        title: "title",
        description: "description",
        link: "link"
      },
      ngContentSelectors: _c0,
      decls: 7,
      vars: 2,
      consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "__header", 3, "click"], ["class", "__description", 4, "ngIf"], [1, "__draggable", "gbi-menu"], [1, "__wrapper"], [1, "__description"]],
      template: function InfoCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoCardComponent_Template_div_click_0_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoCardComponent_span_3_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".__header[_ngcontent-%COMP%] {\n  height: 41px;\n  padding: 0.625rem;\n  background: #000000;\n  font-size: 15px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #ffffff;\n  cursor: pointer;\n}\n[_nghost-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n}\n.--cameras[_nghost-%COMP%] {\n  width: 100%;\n}\n.--cameras[_nghost-%COMP%]   .__draggable[_ngcontent-%COMP%] {\n  display: none;\n}\n.--cameras[_nghost-%COMP%]   .__wrapper[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: grid !important;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  grid-gap: 3rem;\n}\n.__header[_ngcontent-%COMP%] {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n.__wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  color: #ffffff;\n  background-image: linear-gradient(to top, #000, #223247), linear-gradient(to top, #ffffff, #fafbfc);\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n.__draggable[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.__description[_ngcontent-%COMP%] {\n  color: var(--cyan-two);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fY29yZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lsb3ZlYWxsL3d3dy9ncmFiL2Zyb250ZW5kLWdyYWIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lsb3ZlYWxsL3d3dy9ncmFiL2Zyb250ZW5kLWdyYWIvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0EsZ0NBQUE7QUFPQSxnRUFBQTtBQzFQQTs7O0dBQUE7QUM1Q0E7RUFDRSxZQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtBQ0pGO0FDakJBO0VBQ0UscUJBQUE7RUFFQSxnQkFBQTtBRG1CRjtBQ2pCRTtFQUNFLFdBQUE7QURtQko7QUNqQkk7RUFDRSxhQUFBO0FEbUJOO0FDaEJJO0VBQ0UsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQ2NZO0FGR2xCO0FDWkE7RUFHRSxrQ0FBQTtBRGFGO0FDVkE7RUFDRSxZQUFBO0VBRUEsY0FBQTtFQUVBLG1HQUFBO0VBRUEsa0NBQUE7QURVRjtBQ1BBO0VBQ0UsWUFBQTtBRFVGO0FDUEE7RUFDRSxzQkFBQTtBRFVGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5mby1jYXJkL2luZm8tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBjbGVhcmZpeCB7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbn1cblxuQG1peGluIHZlcnRpY2FsLWFsaWduIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gdGV4dC1kb3Qge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIHRleHQtZG90LXZlcnRpY2FsKCRjb3VudCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRjb3VudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLy8gVW5pdmVyc2FsIGJyZWFrcG9pbnRzIG1peGluc1xuQG1peGluIG1pbi13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAd2FybiBcIiRzaXplIGRvZXNuJ3QgZXhpc3QgaW4gJHdpZGVTY3JlZW5zLlwiO1xuICB9XG59XG5cbkBtaXhpbiBtYXgtd2lkZSgkc2l6ZSkge1xuICBAaWYgKG1hcC1oYXMta2V5KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJHdpZGVTY3JlZW5zLCAkc2l6ZSkgLSAxKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuLy96LWluZGV4XG5AbWl4aW4gei1pbmRleCgka2V5KSB7XG4gIHotaW5kZXg6IHotaW5kZXgoJGtleSk7XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gUmVtYWluaW5nIHdpZHRoIGJsb2NrXG5AbWl4aW4gcmVtYWluaW5nKCRzZWxlY3Rvck5hbWUsICRvcmllbnRhdGlvbiwgJHNpemUsICRpbmRlbnQpIHtcbiAgJiN7JHNlbGVjdG9yTmFtZX0ge1xuICAgICN7JG9yaWVudGF0aW9ufTogY2FsYygjeyRzaXplfSAtICN7JGluZGVudH0pICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVW5pZmljYXRpb24gbWl4aW4gZm9yIGhlbHBlcnMgd2lkdGhcbkBtaXhpbiB1bmlmeS1zaXplci1tb2RpZmllcigkc2VsZWN0b3JOYW1lLCAkcHJvcGVydHksICRzaXplKSB7XG4gICYtLSN7JHNlbGVjdG9yTmFtZX0ge1xuICAgICN7JHByb3BlcnR5fTogJHNpemUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBQc2V1ZG8gYm9yZGVyIHNoYWRvd1xuQG1peGluIGFydGlmaWNpYWwtdGhpY2tuZXNzKCR0aGljaywgJGNvbG9yKSB7XG4gICRtaW4tdGhpbms6IC0kdGhpY2s7XG4gIHRleHQtc2hhZG93OiAkbWluLXRoaW5rIDAgJGNvbG9yLCAwICR0aGljayAkY29sb3IsICR0aGljayAwICRjb2xvciwgMCAkbWluLXRoaW5rICRjb2xvcjtcbn1cblxuQGZ1bmN0aW9uIHNoYWRvd0JvbGQoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgQHJldHVybiAkbWluLXRoaW5rIDAgJGNvbG9yLCAwICR0aGljayAkY29sb3IsICR0aGljayAwICRjb2xvciwgMCAkbWluLXRoaW5rICRjb2xvcjtcbn1cblxuLy8gSW5zZXJ0IGljb24gaW4gcHNldWRvIGVsZW1lbnQgZnJvbSBpY29uLWZvbnRzXG5AbWl4aW4gcHNldWRvLWljb24oJGljb24tbmFtZSwgJHNpemUpIHtcbiAgY29udGVudDogdW5pY29kZSgkaWNvbi1uYW1lKTtcbiAgZm9udDoge1xuICAgIEBpZiB0eXBlLW9mKCRzaXplKSA9PSAnbnVtYmVyJyBhbmQgdW5pdGxlc3MoJHNpemUpIHtcbiAgICAgIHNpemU6IHJlbSgkc2l6ZSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBzaXplOiAkc2l6ZTtcbiAgICB9XG4gICAgZmFtaWx5OiAkaWNvbi1mb250LWZhbWlseTtcbiAgfVxuICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1peGluIHBzZXVkby1pY29uLWFmdGVyKCRzaXplSWNvbiwgJGFsaWduQ2VudGVySWNvbikge1xuICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpub3QoOmFmdGVyKTphZnRlciB7XG4gICAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgQGlmICRhbGlnbkNlbnRlckljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG5cbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICBAaWYgJHNpemVJY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNpemVJY29uO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbm8tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5AbWl4aW4gb3B0aW9uYWwtYXQtcm9vdCgkc2VsKSB7XG4gIEBhdC1yb290ICN7aWYobm90ICYsICRzZWwsIHNlbGVjdG9yLWFwcGVuZCgmLCAkc2VsKSl9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LW1vei1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LW1vei1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gU2Nyb2xscyBmaXhcbkBtaXhpbiBzY3JvbGwtZGlzYXBwZWFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5cbkBtaXhpbiBzY3JvbGwtYmVoYXZpb3Ige1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5AbWl4aW4gc2Nyb2xsLXN0eWxlKCRzaXplLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3I6IG1peCgkZm9yZWdyb3VuZC1jb2xvciwgd2hpdGUsIDUwJSkpIHtcbiAgLy8gRm9yIEdvb2dsZSBDaHJvbWVcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZm9yZWdyb3VuZC1jb2xvcjtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIGJvZHkge1xuICAgIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcbiAgICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBzY3JvbGwtb2Zmc2V0KCRzaXplKSB7XG4gIHBhZGRpbmctcmlnaHQ6ICRzaXplO1xuICBtYXJnaW4tcmlnaHQ6IC0kc2l6ZTtcbn1cblxuQG1peGluIGNoYW5nZS1hdXRvLWZpbGwge1xuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsOmhvdmVyJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsOmZvY3VzJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZ3JhZGllbnRBbmltYXRpb24oJHN0YXJ0LCAkZW5kLCAkdHJhbnNUaW1lLCAkei1pbmRleCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6ICR6LWluZGV4O1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydCwgJGVuZCk7XG5cbiAgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtJHotaW5kZXg7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRlbmQsICRzdGFydCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc1RpbWU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG9ubHktdG91Y2gge1xuICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LW1vdXNlIHtcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBob25lcy1maXQge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgLy8vKiBpT1MgMTEgKi9cbiAgICAvL3BhZGRpbmctbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC8vcGFkZGluZy1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcblxuICAgIC8qIGlPUyAxMS4yKyAqL1xuICAgIHBhZGRpbmctbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdC1tYXgtZXZuKCRtYXgpIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xuICAgIHBhZGRpbmctbGVmdDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgjeyRtYXh9LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG5AbWl4aW4gb25seS1pZSB7XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qIE1pY3Jvc29mdCBFZGdlIEJyb3dzZXIgMTItMTggKEFsbCB2ZXJzaW9ucyBiZWZvcmUgQ2hyb21pdW0pICovXG5AbWl4aW4gb25seS1lZGdlIHtcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gRmx1aWQgdHlwb2dyYXBoeVxuLy9AbWl4aW4gZmx1aWQtdHlwZSgkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLWZvbnQtc2l6ZSwgJG1heC1mb250LXNpemUpIHtcbi8vICAkdTE6IHVuaXQoJG1pbi12dyk7XG4vLyAgJHUyOiB1bml0KCRtYXgtdncpO1xuLy8gICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XG4vLyAgJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcbi8vXG4vLyAgQGlmICR1MSA9PSAkdTIgYW5kICR1MSA9PSAkdTMgYW5kICR1MSA9PSAkdTQge1xuLy8gICAgJiB7XG4vLyAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XG4vL1xuLy8gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XG4vLyAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XG4vLyAgICAgIH1cbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcbi8vICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgfVxuLy99XG4iLCIkc2Nyb2xsLXNpemU6IHJlbSg1KTtcbiRzY3JvbGwtdGh1bWItY29sb3I6ICNkMmQ0ZDc7XG4kc2Nyb2xsLXRyYWNrLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRzY3JvbGwtdHJhY2stbGluZTogaW5zZXQgMCAwIDAgMXB4ICRzY3JvbGwtdGh1bWItY29sb3I7XG5cbiVzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbiVzY3JvbGwtc21hbGwtb2Zmc2V0IHtcbiAgQGluY2x1ZGUgc2Nyb2xsLW9mZnNldCgkc2Nyb2xsLXNpemUpO1xufVxuXG5AbWl4aW4gc2Nyb2xsLXNtYWxsIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2Nyb2xsLXNpemU7XG4gICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdHJhY2stY29sb3I7XG4gICAgLy9ib3gtc2hhZG93OiAkc2Nyb2xsLXRyYWNrLWxpbmU7XG4gIH1cblxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xufVxuXG4vKipcbiAqIEl0IGlzIHVzZWQgdG8gc2V0IGEgc21vb3RoIHRyYW5zaXRpb24gb24gdGhlIGVkZ2VzIG9mIHRoZSBibG9jayB3aGVuIHNjcm9sbGluZy5cbiAqIEl0IGhhcyB0d28gb3JpZW50YXRpb25zIFwidmVydGljYWxcIiBhbmQgIFwiaG9yaXpvbnRhbFwiXG4gKiovXG5AbWl4aW4gYmxvY2stZ3JhZGllbnQtb24tc2Nyb2xsKCRvcmllbnQsICRzaXplLCAkY29sb3IsICRvZmZzZXQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgIGhlaWdodDogJHNpemU7XG5cbiAgICBjb250ZW50OiAnJztcblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoJGNvbG9yLCAwKSAwJSwgcmdiYSgkY29sb3IsIDAuOTQpIDUxJSk7XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAndmVydGljYWwnIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICB0b3A6ICRvZmZzZXQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBib3R0b206ICRvZmZzZXQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG5cbiAgQGlmICRvcmllbnQgPT0gJ2hvcml6b250YWwnIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAkb2Zmc2V0O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6ICRvZmZzZXQ7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdmdW5jdGlvbnMnO1xuQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdzY3JvbGxzJztcbi8vQGltcG9ydCAnZXh0ZW5kcy8nO1xuXG5cbiVjYXJkLWhlYWRlciB7XG4gIGhlaWdodDogNDFweDtcblxuICBwYWRkaW5nOiByZW0oMTApO1xuXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuLl9faGVhZGVyIHtcbiAgaGVpZ2h0OiA0MXB4O1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdC4tLWNhbWVyYXMge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0Li0tY2FtZXJhcyAuX19kcmFnZ2FibGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QuLS1jYW1lcmFzIC5fX3dyYXBwZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAzcmVtO1xufVxuXG4uX19oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xufVxuXG4uX193cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMCwgIzIyMzI0NyksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmZmZmYsICNmYWZiZmMpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMC4yNXJlbSAwLjI1cmVtO1xufVxuXG4uX19kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5fX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWN5YW4tdHdvKTtcbn0iLCJAaW1wb3J0IFwiY29yZVwiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICYuLS1jYW1lcmFzIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5fX2RyYWdnYWJsZXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLl9fd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiByZW0oOCk7XG5cbiAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICAgICAgZ3JpZC1nYXA6ICRjb250ZW50R3V0dGVyWDM7XG4gICAgfVxuICB9XG59XG5cbi5fX2hlYWRlciB7XG4gIEBleHRlbmQgJWNhcmQtaGVhZGVyO1xuXG4gIGJvcmRlci1yYWRpdXM6IHJlbSg0KSByZW0oNCkgMCAwO1xufVxuXG4uX193cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGNvbG9yOiAjZmZmZmZmO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAsICMyMjMyNDcpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmZmZmLCAjZmFmYmZjKTtcblxuICBib3JkZXItcmFkaXVzOiAwIDAgcmVtKDQpIHJlbSg0KTtcbn1cblxuLl9fZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jeWFuLXR3byk7XG59XG4iLCIvLyogTWFwIHNpemUgZGV2aWNlcyBmb3IgbWVkaWEgcXVlcnlcbiR3aWRlU2NyZWVuczogKFxuICBwaG9uZXNTbTogMzQwcHgsXG4gIHBob25lczogNDgwcHgsXG4gIHBob25lc0xnOiA2NDBweCxcbiAgdGFibGV0OiA3NjhweCxcbiAgbGFwdG9wOiA5OTJweCxcbiAgZGVza3RvcFNtOiAxMDI0cHgsXG4gIGRlc2t0b3BNZDogMTE3MHB4LFxuICBkZXNrdG9wOiAxMjgwcHgsXG4gIG5vdGVib29rOiAxMzY2cHgsXG4gIG5vdGVib29rTGc6IDE2MDBweCxcbiAgZnVsbEhEOiAxODAwcHgsXG4gIHJldGluYTogMjEwMHB4LFxuICByZXRpbmE0azogMzY1NnB4LFxuICByZXRpbmE1azogNTEwMHB4LFxuICByZXRpbmE4azogNzYwMHB4XG4pO1xuXG4vLyogTWFpbiBjb250ZW50ICYmIGVsZW1lbnRzIHNpemVzXG4vLyRjb250ZW50V2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xuLy8kY29udGVudFBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XG5cbiRndWlkZXM6IGZhbHNlO1xuJGd1aWRlc0JvZHk6IGZhbHNlO1xuJGd1aWRlc0NvbnRhaW5lcjogZmFsc2U7XG4kZ3VpZGVzQ2VudGVyOiB0cnVlO1xuJGd1aWRlcy1jb2xvcjogI2ZmM2UyMztcbiRndWlkZXMtY29sdW1uOiAxMjtcblxuJGN1c3RvbUNvbnRhaW5lcjogdHJ1ZTtcbiRjb250ZW50R3V0dGVyOiByZW0oMTYpICFkZWZhdWx0O1xuJGNvbnRlbnRHdXR0ZXJYMjogcmVtKDI0KSAhZGVmYXVsdDtcbiRjb250ZW50R3V0dGVyWDM6IHJlbSg0OCkgIWRlZmF1bHQ7XG4kY29udGVudEd1dHRlclg0OiByZW0oOTYpICFkZWZhdWx0O1xuXG4kbXVsdGlwbGllcjogMS4yNSAhZGVmYXVsdDtcblxuJGVsZW1SYWRpdXM6IHJlbSg0MCkgIWRlZmF1bHQ7XG4kZWxlbVJhZGl1c05vcm1hbDogcmVtKDEwKSAhZGVmYXVsdDtcbiRlbGVtUmFkaXVzU21hbGw6IHJlbSg0KSAhZGVmYXVsdDtcblxuLy8qIHotaW5kZXhcbiR6LWluZGV4LXN0ZXA6IDEwICFkZWZhdWx0O1xuJHotaW5kZXg6IChcbiAgc3RhcnQ6IDEwLFxuICBtaWRkbGU6IDUwLFxuICBoZWFkZXI6IDEwMCxcbiAgbW9kYWw6IDEwMDBcbikgIWRlZmF1bHQ7XG5cbi8vICogY29sb3JzXG4kY2wtcHJpbWFyeTogdmFyKC0tY3lhbikgIWRlZmF1bHQ7XG4kY2wtc2Vjb25kYXJ5OiB2YXIoLS1jbC1ncmV5KSAhZGVmYXVsdDtcblxuJGJhc2UtZm9udC1jb2xvcjogdmFyKC0tY2wtd2hpdGUpICFkZWZhdWx0O1xuJGJhc2UtZm9udC1zaXplLWNvbG9yOiAxNnB4ICFkZWZhdWx0O1xuXG4kY2wtcmVkOiB2YXIoLS1vcmFuZ2V5LXJlZCk7XG5cbiRjbC1iYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XG5cbi8vJGNsLXBsYWNlaG9sZGVyOiB2YXIoLS1jbC1ncmV5LTYwKTtcblxuLy8kZGlzYWJsZWQtY29sb3I6IHZhcigtLWNsLWdyZXktNjApO1xuLy8kZGlzYWJsZWQtYmctY29sb3I6IHZhcigtLWNsLWdyZXktNjApO1xuLy8kZGlzYWJsZWQtYmctY29sb3Itc2Vjb25kOiAjZTllOWViO1xuLy8kZGlzYWJsZWQtb3BhY2l0eTogMC45O1xuXG4vLyAqIHNoYWRvd3Ncbi8vJHNoLWNhcmQ6IDAgcmVtKDEwKSByZW0oMTQpIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4vLyRzaC1tYWluOiAwIHJlbSg4KSByZW0oMjEpIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4vLyRzaC11cDogMCByZW0oLTQpIHJlbSgyMSkgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vJHNoLTogO1xuLy8kc2gtOiA7XG5cbi8vICogZ3JhZGllbnRzXG4vLyRnci1idG46IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NjMjI5YSAwJSwgI2NjMjI5YSAxJSwgIzk0MTg4NyAxMDAlKTtcbiRnci1saWdodC1oaWRlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIC0xMDAlLCB3aGl0ZSA5NiUsIHdoaXRlIDEwJSk7XG4vLyRnci1yYWRpYWw6IHJhZGlhbC1ncmFkaWVudCgpO1xuXG4vLyAqIGNsaXAtcGF0aHMgYW5kIHN2ZyBiZ1xuLy8kY3AtOiA7XG5cbi8vICogaW1hZ2VzIHNvdXJjZVxuJGFzc2V0cy1wYXRoOiAnc3JjL2Fzc2V0cy9pbWFnZXMvJyAhZGVmYXVsdDtcblxuJGltZy1tYXA6IHVybCgnI3skYXNzZXRzLXBhdGh9bWFwLmpwZycpO1xuJGltZy1sb2dvOiB1cmwoJyN7JGFzc2V0cy1wYXRofXBteS1sb2dvLW5ldy13aGl0ZS5zdmcnKTtcbiRpbWctbG9nby0yOiB1cmwoJyN7JGFzc2V0cy1wYXRofXBteS1sb2dvLW5ldy13aGl0ZUAzeC5wbmcnKTtcbiRpbWctbG9naW46IHVybCgnI3skYXNzZXRzLXBhdGh9bG9naW4tYmcucG5nJyk7XG4kaW1nLWxvZ2luLTI6IHVybCgnI3skYXNzZXRzLXBhdGh9bG9naW4tYmcuanBnJyk7XG4kaW1nLWxvZ2luLWZsYWc6IHVybCgnI3skYXNzZXRzLXBhdGh9c2lnbi1mbGFnLnBuZycpO1xuXG5cbi8vICogZm9udHNcbiRmb250LXBhdGg6ICdhc3NldHMvZm9udHMnICFkZWZhdWx0O1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuLy8kZm9udC1mYW1pbHktdGVydGlhcnk6ICdNYXJ0ZWwnLCBzZXJpZjtcblxuLy8qIEljb25zXG4kaWNvbi1mb250LWZhbWlseTogJ2dyYWItaWNvbnMnICFkZWZhdWx0O1xuJGljb24tZm9udC1wcmVmaXg6ICdnYmknO1xuJGljb24tZm9udC1wYXRoOiAkZm9udC1wYXRoICsgJy8jeyRpY29uLWZvbnQtZmFtaWx5fScgIWRlZmF1bHQ7XG5cbiRnYmktcG93ZXI6IFwiXFxlOTEyXCI7XG4kZ2JpLWRvd25sb2FkOiBcIlxcZTkxM1wiO1xuJGdiaS11cGxvYWQ6IFwiXFxlOTE0XCI7XG4kZ2JpLW1lbnU6IFwiXFxlOTExXCI7XG4kZ2JpLWFycm93LWRvd246IFwiXFxlOTA4XCI7XG4kZ2JpLWFycm93LWxlZnQ6IFwiXFxlOTBhXCI7XG4kZ2JpLWFycm93LWxpbmUtdXA6IFwiXFxlOTBiXCI7XG4kZ2JpLWFycm93LWxpbmUtZG93bjogXCJcXGU5MGNcIjtcbiRnYmktYXJyb3ctcmlnaHQ6IFwiXFxlOTBkXCI7XG4kZ2JpLWFycm93LXVwOiBcIlxcZTkwZVwiO1xuJGdiaS1jaGFydDogXCJcXGU5MDBcIjtcbiRnYmktc3BlZWQ6IFwiXFxlOTAxXCI7XG4kZ2JpLWNyaXRpY2FsOiBcIlxcZTkwMlwiO1xuJGdiaS1icmlja3M6IFwiXFxlOTAzXCI7XG4kZ2JpLWdsb2JlOiBcIlxcZTkwNFwiO1xuJGdiaS1ub3RpZmljYXRpb246IFwiXFxlOTA1XCI7XG4kZ2JpLXNldHRpbmdzOiBcIlxcZTkwNlwiO1xuJGdiaS11c2VyczogXCJcXGU5MDdcIjtcbiRnYmktdHItbGVmdDogXCJcXGU5MGZcIjtcbiRnYmktdHItcmlnaHQ6IFwiXFxlOTEwXCI7XG4kZ2JpLXNlYXJjaDogXCJcXGU5MDlcIjtcbiRnYmktd2ViOiBcIlxcZTkxNlwiO1xuJGdiaS1ob21lOiBcIlxcZTkxNVwiO1xuJGdiaS13aWRnZXQ6IFwiXFxlOTFhXCI7XG5cbiRpY29ucy1mb250LW1hcDogKFxuICBhcnJvdy1kb3duOiAkZ2JpLWFycm93LWRvd24sXG4gIGFycm93LWxlZnQ6ICRnYmktYXJyb3ctbGVmdCxcbiAgYXJyb3ctbGluZS11cDogJGdiaS1hcnJvdy1saW5lLXVwLFxuICBhcnJvdy1saW5lLWRvd246ICRnYmktYXJyb3ctbGluZS1kb3duLFxuICBhcnJvdy1yaWdodDogJGdiaS1hcnJvdy1yaWdodCxcbiAgYXJyb3ctdXA6ICRnYmktYXJyb3ctdXAsXG4gIGNoYXJ0OiAkZ2JpLWNoYXJ0LFxuICBzcGVlZDogJGdiaS1zcGVlZCxcbiAgY3JpdGljYWw6ICRnYmktY3JpdGljYWwsXG4gIGJyaWNrczogJGdiaS1icmlja3MsXG4gIGdsb2JlOiAkZ2JpLWdsb2JlLFxuICBub3RpZmljYXRpb246ICRnYmktbm90aWZpY2F0aW9uLFxuICBzZXR0aW5nczogJGdiaS1zZXR0aW5ncyxcbiAgdXNlcnM6ICRnYmktdXNlcnMsXG4gIHRyLWxlZnQ6ICRnYmktdHItbGVmdCxcbiAgdHItcmlnaHQ6ICRnYmktdHItcmlnaHQsXG4gIHNlYXJjaDogJGdiaS1zZWFyY2gsXG4gIG1lbnU6JGdiaS1tZW51LFxuICBwb3dlcjogJGdiaS1wb3dlcixcbiAgZG93bmxvYWQ6ICRnYmktZG93bmxvYWQsXG4gIHVwbG9hZDogJGdiaS11cGxvYWQsXG4gIHdlYjogJGdiaS13ZWIsXG4gIGhvbWU6ICRnYmktaG9tZSxcbiAgd2lkZ2V0OiAkZ2JpLXdpZGdldFxuKTtcblxuLy8gbGlua3NcblxuJGxpbmstY29sb3I6IGN1cnJlbnRDb2xvciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAkY2wtcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8qIHRyYW5zaXRpb25zICYmIGFuaW1hdGlvbnNcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IDAuM3MgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1ib3JkZXI6IGJvcmRlci1jb2xvciAkdHJhbnNpdGlvbi1kZWZhdWx0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tc2hhZG93OiBib3gtc2hhZG93ICR0cmFuc2l0aW9uLWRlZmF1bHQgIWRlZmF1bHQ7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-card',
          templateUrl: './info-card.component.html',
          styleUrls: ['./info-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/input/element-base.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/components/input/element-base.ts ***!
    \*********************************************************/

  /*! exports provided: ElementBase */

  /***/
  function srcAppSharedComponentsInputElementBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementBase", function () {
      return ElementBase;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

    var ElementBase = /*#__PURE__*/function () {
      function ElementBase() {
        _classCallCheck(this, ElementBase);

        this.triggerBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ElementBase, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.propagateChange(value);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "propagateChange",
        value: function propagateChange(_) {}
      }, {
        key: "validate",
        value: function validate(formControl) {
          this.formControl = formControl;
        }
      }, {
        key: "onFocus",
        value: function onFocus(event) {
          this.isFocused = true;
          this.triggerFocus.emit(event);
        }
      }, {
        key: "onBlur",
        value: function onBlur(event) {
          this.isFocused = false;
          this.triggerBlur.emit(event);
        }
      }, {
        key: "isError",
        get: function get() {
          return this.formControl && this.formControl.invalid && (this.formControl.dirty || this.formControl.touched || this.submitted);
        }
      }, {
        key: "error",
        get: function get() {
          var error = {};

          if (!this.formControl) {
            return error;
          }

          Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forIn"])(this.formControl.errors, function (value, key) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forIn"])(value, function (val, k) {
              error[k] = val;
            });
            error.key = key;
          });
          return error;
        }
      }]);

      return ElementBase;
    }();

    ElementBase.ɵfac = function ElementBase_Factory(t) {
      return new (t || ElementBase)();
    };

    ElementBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ElementBase,
      inputs: {
        placeholder: "placeholder",
        submitted: "submitted",
        label: "label",
        value: "value",
        disabled: "disabled",
        validationLabel: "validationLabel",
        validationLabelPrefix: "validationLabelPrefix"
      },
      outputs: {
        triggerBlur: "triggerBlur",
        triggerFocus: "triggerFocus",
        valueChange: "valueChange"
      }
    });
    /***/
  },

  /***/
  "./src/app/shared/components/input/input.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/input/input.component.ts ***!
    \************************************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppSharedComponentsInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _element_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./element-base */
    "./src/app/shared/components/input/element-base.ts");

    var InputComponent = /*#__PURE__*/function (_element_base__WEBPAC) {
      _inherits(InputComponent, _element_base__WEBPAC);

      var _super = _createSuper(InputComponent);

      function InputComponent() {
        var _this;

        _classCallCheck(this, InputComponent);

        _this = _super.call(this);
        _this.placeholder = 'Enter text';
        _this.type = 'text';
        _this.vMaskPrefix = '';
        return _this;
      }

      _createClass(InputComponent, [{
        key: "onChange",
        value: function onChange(event) {
          this.valueChange.emit(this.value);
          this.propagateChange(this.value);
        }
      }, {
        key: "onFocus",
        value: function onFocus(event) {
          if (this.removeZeroOnFocus && +this.value === 0) {
            this.cachedValue = this.value;
            this.value = null;
          }

          this.isFocused = true;
          this.triggerFocus.emit(event);
        }
      }, {
        key: "onBlur",
        value: function onBlur(event) {
          if (this.removeZeroOnFocus && !this.value) {
            this.value = 0;
          }

          this.isFocused = false;
          this.triggerBlur.emit(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputComponent;
    }(_element_base__WEBPACK_IMPORTED_MODULE_2__["ElementBase"]);

    InputComponent.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)();
    };

    InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["app-input"]],
      inputs: {
        placeholder: "placeholder",
        submitted: "submitted",
        value: "value",
        type: "type",
        hint: "hint",
        vMask: "vMask",
        vMaskPrefix: "vMaskPrefix",
        inputMode: "inputMode",
        removeZeroOnFocus: "removeZeroOnFocus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return InputComponent;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return InputComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 5,
      consts: [[1, "__label"], [1, "__input", 3, "disabled", "ngModel", "change", "keyup", "focus", "blur", "ngModelChange"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputComponent_Template_input_change_2_listener($event) {
            return ctx.onChange($event);
          })("keyup", function InputComponent_Template_input_keyup_2_listener($event) {
            return ctx.onChange($event);
          })("focus", function InputComponent_Template_input_focus_2_listener($event) {
            return ctx.onFocus($event);
          })("blur", function InputComponent_Template_input_blur_2_listener($event) {
            return ctx.onBlur($event);
          })("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener($event) {
            return (ctx.value == null ? null : ctx.value.address) || (ctx.value = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", (ctx.value == null ? null : ctx.value.address) || ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.type)("placeholder", ctx.placeholder);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-gap: 0.5625rem;\n}\n.__label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.0625rem;\n  font-weight: 300;\n  text-align: left;\n  color: var(--cl-white);\n}\n.__input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2rem;\n  padding: 0.5625rem;\n  font-family: \"Heebo\", sans-serif;\n  font-size: 0.75rem;\n  text-align: left;\n  color: var(--cl-white);\n  border: none;\n  border-radius: 0.25rem;\n  background-color: var(--greyish-brown-two);\n  transition: 0.3s ease-in-out;\n}\n.__input[_ngcontent-%COMP%]:hover, .__input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 1px #00f2ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lsb3ZlYWxsL3d3dy9ncmFiL2Zyb250ZW5kLWdyYWIvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0EsZ0NBQUE7QUFPQSxnRUFBQTtBQzFQQTs7O0dBQUE7QUNqREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNLRjtBREZBO0VBQ0UsaUNFMkZzQjtFRjFGdEIsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNLRjtBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGdDRTZFb0I7RUY1RXBCLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxzQkVhZ0I7RUZaaEIsMENBQUE7RUFFQSw0QkV1SW1CO0FEdElyQjtBRENFO0VBQ0UsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IHJlbSg5KTtcbn1cblxuLl9fbGFiZWwge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcbiAgZm9udC1zaXplOiByZW0oMTcpO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xufVxuXG4uX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHJlbSgzMik7XG5cbiAgcGFkZGluZzogcmVtKDkpO1xuXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcHJpbWFyeTtcbiAgZm9udC1zaXplOiByZW0oMTIpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJGVsZW1SYWRpdXNTbWFsbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleWlzaC1icm93bi10d28pO1xuXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMGYyZmY7XG4gIH1cbn1cbiIsIi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNTYyNXJlbTtcbn1cblxuLl9fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG59XG5cbi5fX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMC41NjI1cmVtO1xuICBmb250LWZhbWlseTogXCJIZWVib1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleWlzaC1icm93bi10d28pO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLl9faW5wdXQ6aG92ZXIsIC5fX2lucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMGYyZmY7XG59IiwiLy8qIE1hcCBzaXplIGRldmljZXMgZm9yIG1lZGlhIHF1ZXJ5XG4kd2lkZVNjcmVlbnM6IChcbiAgcGhvbmVzU206IDM0MHB4LFxuICBwaG9uZXM6IDQ4MHB4LFxuICBwaG9uZXNMZzogNjQwcHgsXG4gIHRhYmxldDogNzY4cHgsXG4gIGxhcHRvcDogOTkycHgsXG4gIGRlc2t0b3BTbTogMTAyNHB4LFxuICBkZXNrdG9wTWQ6IDExNzBweCxcbiAgZGVza3RvcDogMTI4MHB4LFxuICBub3RlYm9vazogMTM2NnB4LFxuICBub3RlYm9va0xnOiAxNjAwcHgsXG4gIGZ1bGxIRDogMTgwMHB4LFxuICByZXRpbmE6IDIxMDBweCxcbiAgcmV0aW5hNGs6IDM2NTZweCxcbiAgcmV0aW5hNWs6IDUxMDBweCxcbiAgcmV0aW5hOGs6IDc2MDBweFxuKTtcblxuLy8qIE1haW4gY29udGVudCAmJiBlbGVtZW50cyBzaXplc1xuLy8kY29udGVudFdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbi8vJGNvbnRlbnRQYWRkaW5nOiB2YXIoLS1jb250ZW50LXBhZGRpbmcpO1xuXG4kZ3VpZGVzOiBmYWxzZTtcbiRndWlkZXNCb2R5OiBmYWxzZTtcbiRndWlkZXNDb250YWluZXI6IGZhbHNlO1xuJGd1aWRlc0NlbnRlcjogdHJ1ZTtcbiRndWlkZXMtY29sb3I6ICNmZjNlMjM7XG4kZ3VpZGVzLWNvbHVtbjogMTI7XG5cbiRjdXN0b21Db250YWluZXI6IHRydWU7XG4kY29udGVudEd1dHRlcjogcmVtKDE2KSAhZGVmYXVsdDtcbiRjb250ZW50R3V0dGVyWDI6IHJlbSgyNCkgIWRlZmF1bHQ7XG4kY29udGVudEd1dHRlclgzOiByZW0oNDgpICFkZWZhdWx0O1xuJGNvbnRlbnRHdXR0ZXJYNDogcmVtKDk2KSAhZGVmYXVsdDtcblxuJG11bHRpcGxpZXI6IDEuMjUgIWRlZmF1bHQ7XG5cbiRlbGVtUmFkaXVzOiByZW0oNDApICFkZWZhdWx0O1xuJGVsZW1SYWRpdXNOb3JtYWw6IHJlbSgxMCkgIWRlZmF1bHQ7XG4kZWxlbVJhZGl1c1NtYWxsOiByZW0oNCkgIWRlZmF1bHQ7XG5cbi8vKiB6LWluZGV4XG4kei1pbmRleC1zdGVwOiAxMCAhZGVmYXVsdDtcbiR6LWluZGV4OiAoXG4gIHN0YXJ0OiAxMCxcbiAgbWlkZGxlOiA1MCxcbiAgaGVhZGVyOiAxMDAsXG4gIG1vZGFsOiAxMDAwXG4pICFkZWZhdWx0O1xuXG4vLyAqIGNvbG9yc1xuJGNsLXByaW1hcnk6IHZhcigtLWN5YW4pICFkZWZhdWx0O1xuJGNsLXNlY29uZGFyeTogdmFyKC0tY2wtZ3JleSkgIWRlZmF1bHQ7XG5cbiRiYXNlLWZvbnQtY29sb3I6IHZhcigtLWNsLXdoaXRlKSAhZGVmYXVsdDtcbiRiYXNlLWZvbnQtc2l6ZS1jb2xvcjogMTZweCAhZGVmYXVsdDtcblxuJGNsLXJlZDogdmFyKC0tb3JhbmdleS1yZWQpO1xuXG4kY2wtYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuXG4vLyRjbC1wbGFjZWhvbGRlcjogdmFyKC0tY2wtZ3JleS02MCk7XG5cbi8vJGRpc2FibGVkLWNvbG9yOiB2YXIoLS1jbC1ncmV5LTYwKTtcbi8vJGRpc2FibGVkLWJnLWNvbG9yOiB2YXIoLS1jbC1ncmV5LTYwKTtcbi8vJGRpc2FibGVkLWJnLWNvbG9yLXNlY29uZDogI2U5ZTllYjtcbi8vJGRpc2FibGVkLW9wYWNpdHk6IDAuOTtcblxuLy8gKiBzaGFkb3dzXG4vLyRzaC1jYXJkOiAwIHJlbSgxMCkgcmVtKDE0KSByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuLy8kc2gtbWFpbjogMCByZW0oOCkgcmVtKDIxKSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuLy8kc2gtdXA6IDAgcmVtKC00KSByZW0oMjEpIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4vLyRzaC06IDtcbi8vJHNoLTogO1xuXG4vLyAqIGdyYWRpZW50c1xuLy8kZ3ItYnRuOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNjYzIyOWEgMCUsICNjYzIyOWEgMSUsICM5NDE4ODcgMTAwJSk7XG4kZ3ItbGlnaHQtaGlkZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAtMTAwJSwgd2hpdGUgOTYlLCB3aGl0ZSAxMCUpO1xuLy8kZ3ItcmFkaWFsOiByYWRpYWwtZ3JhZGllbnQoKTtcblxuLy8gKiBjbGlwLXBhdGhzIGFuZCBzdmcgYmdcbi8vJGNwLTogO1xuXG4vLyAqIGltYWdlcyBzb3VyY2VcbiRhc3NldHMtcGF0aDogJ3NyYy9hc3NldHMvaW1hZ2VzLycgIWRlZmF1bHQ7XG5cbiRpbWctbWFwOiB1cmwoJyN7JGFzc2V0cy1wYXRofW1hcC5qcGcnKTtcbiRpbWctbG9nbzogdXJsKCcjeyRhc3NldHMtcGF0aH1wbXktbG9nby1uZXctd2hpdGUuc3ZnJyk7XG4kaW1nLWxvZ28tMjogdXJsKCcjeyRhc3NldHMtcGF0aH1wbXktbG9nby1uZXctd2hpdGVAM3gucG5nJyk7XG4kaW1nLWxvZ2luOiB1cmwoJyN7JGFzc2V0cy1wYXRofWxvZ2luLWJnLnBuZycpO1xuJGltZy1sb2dpbi0yOiB1cmwoJyN7JGFzc2V0cy1wYXRofWxvZ2luLWJnLmpwZycpO1xuJGltZy1sb2dpbi1mbGFnOiB1cmwoJyN7JGFzc2V0cy1wYXRofXNpZ24tZmxhZy5wbmcnKTtcblxuXG4vLyAqIGZvbnRzXG4kZm9udC1wYXRoOiAnYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LXRlcnRpYXJ5OiAnTWFydGVsJywgc2VyaWY7XG5cbi8vKiBJY29uc1xuJGljb24tZm9udC1mYW1pbHk6ICdncmFiLWljb25zJyAhZGVmYXVsdDtcbiRpY29uLWZvbnQtcHJlZml4OiAnZ2JpJztcbiRpY29uLWZvbnQtcGF0aDogJGZvbnQtcGF0aCArICcvI3skaWNvbi1mb250LWZhbWlseX0nICFkZWZhdWx0O1xuXG4kZ2JpLXBvd2VyOiBcIlxcZTkxMlwiO1xuJGdiaS1kb3dubG9hZDogXCJcXGU5MTNcIjtcbiRnYmktdXBsb2FkOiBcIlxcZTkxNFwiO1xuJGdiaS1tZW51OiBcIlxcZTkxMVwiO1xuJGdiaS1hcnJvdy1kb3duOiBcIlxcZTkwOFwiO1xuJGdiaS1hcnJvdy1sZWZ0OiBcIlxcZTkwYVwiO1xuJGdiaS1hcnJvdy1saW5lLXVwOiBcIlxcZTkwYlwiO1xuJGdiaS1hcnJvdy1saW5lLWRvd246IFwiXFxlOTBjXCI7XG4kZ2JpLWFycm93LXJpZ2h0OiBcIlxcZTkwZFwiO1xuJGdiaS1hcnJvdy11cDogXCJcXGU5MGVcIjtcbiRnYmktY2hhcnQ6IFwiXFxlOTAwXCI7XG4kZ2JpLXNwZWVkOiBcIlxcZTkwMVwiO1xuJGdiaS1jcml0aWNhbDogXCJcXGU5MDJcIjtcbiRnYmktYnJpY2tzOiBcIlxcZTkwM1wiO1xuJGdiaS1nbG9iZTogXCJcXGU5MDRcIjtcbiRnYmktbm90aWZpY2F0aW9uOiBcIlxcZTkwNVwiO1xuJGdiaS1zZXR0aW5nczogXCJcXGU5MDZcIjtcbiRnYmktdXNlcnM6IFwiXFxlOTA3XCI7XG4kZ2JpLXRyLWxlZnQ6IFwiXFxlOTBmXCI7XG4kZ2JpLXRyLXJpZ2h0OiBcIlxcZTkxMFwiO1xuJGdiaS1zZWFyY2g6IFwiXFxlOTA5XCI7XG4kZ2JpLXdlYjogXCJcXGU5MTZcIjtcbiRnYmktaG9tZTogXCJcXGU5MTVcIjtcbiRnYmktd2lkZ2V0OiBcIlxcZTkxYVwiO1xuXG4kaWNvbnMtZm9udC1tYXA6IChcbiAgYXJyb3ctZG93bjogJGdiaS1hcnJvdy1kb3duLFxuICBhcnJvdy1sZWZ0OiAkZ2JpLWFycm93LWxlZnQsXG4gIGFycm93LWxpbmUtdXA6ICRnYmktYXJyb3ctbGluZS11cCxcbiAgYXJyb3ctbGluZS1kb3duOiAkZ2JpLWFycm93LWxpbmUtZG93bixcbiAgYXJyb3ctcmlnaHQ6ICRnYmktYXJyb3ctcmlnaHQsXG4gIGFycm93LXVwOiAkZ2JpLWFycm93LXVwLFxuICBjaGFydDogJGdiaS1jaGFydCxcbiAgc3BlZWQ6ICRnYmktc3BlZWQsXG4gIGNyaXRpY2FsOiAkZ2JpLWNyaXRpY2FsLFxuICBicmlja3M6ICRnYmktYnJpY2tzLFxuICBnbG9iZTogJGdiaS1nbG9iZSxcbiAgbm90aWZpY2F0aW9uOiAkZ2JpLW5vdGlmaWNhdGlvbixcbiAgc2V0dGluZ3M6ICRnYmktc2V0dGluZ3MsXG4gIHVzZXJzOiAkZ2JpLXVzZXJzLFxuICB0ci1sZWZ0OiAkZ2JpLXRyLWxlZnQsXG4gIHRyLXJpZ2h0OiAkZ2JpLXRyLXJpZ2h0LFxuICBzZWFyY2g6ICRnYmktc2VhcmNoLFxuICBtZW51OiRnYmktbWVudSxcbiAgcG93ZXI6ICRnYmktcG93ZXIsXG4gIGRvd25sb2FkOiAkZ2JpLWRvd25sb2FkLFxuICB1cGxvYWQ6ICRnYmktdXBsb2FkLFxuICB3ZWI6ICRnYmktd2ViLFxuICBob21lOiAkZ2JpLWhvbWUsXG4gIHdpZGdldDogJGdiaS13aWRnZXRcbik7XG5cbi8vIGxpbmtzXG5cbiRsaW5rLWNvbG9yOiBjdXJyZW50Q29sb3IgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogJGNsLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiB0cmFuc2l0aW9ucyAmJiBhbmltYXRpb25zXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiAwLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYm9yZGVyOiBib3JkZXItY29sb3IgJHRyYW5zaXRpb24tZGVmYXVsdCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLXNoYWRvdzogYm94LXNoYWRvdyAkdHJhbnNpdGlvbi1kZWZhdWx0ICFkZWZhdWx0O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input',
          templateUrl: './input.component.html',
          styleUrls: ['./input.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return InputComponent;
            }),
            multi: true
          }, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return InputComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [];
      }, {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vMask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vMaskPrefix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeZeroOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/search/search.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/search/search.component.ts ***!
    \**************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSharedComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 2,
      vars: 0,
      consts: [["type", "button", 1, "__btn", "gbi-search"], ["type", "text", "placeholder", "Type to search\u2026", 1, "__input"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  grid-gap: 0.9375rem;\n  padding: 0 1.875rem;\n}\n.__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.1875rem;\n  color: var(--cl-white);\n  border: none;\n  background: none;\n}\n.__btn[_ngcontent-%COMP%]:hover {\n  color: var(--cyan-two);\n}\n.__input[_ngcontent-%COMP%] {\n  width: 9.375rem;\n  font-size: 0.9375rem;\n  line-height: 1.47;\n  font-weight: 600;\n  text-align: left;\n  color: var(--cl-white);\n  border: none;\n  background: transparent;\n}\n.__input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 0.4;\n}\n.__input[_ngcontent-%COMP%]:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 0.4;\n}\n.__input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 0.4;\n}\n.__input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 0.4;\n}\n.__input[_ngcontent-%COMP%], .__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n@media (max-width: 639px) {\n  [_nghost-%COMP%] {\n    padding: 0 1rem;\n  }\n\n  .__input[_ngcontent-%COMP%] {\n    width: auto;\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0EsZ0NBQUE7QUFPQSxnRUFBQTtBQzFQQTs7O0dBQUE7QUNqREE7RUFDRSxvQkFBQTtFQUNBLDhEQUFBO0VBQUEsOENBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUNJRjtBRERBO0VBQ0Usb0JBQUE7RUFFQSxvQkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FDRUY7QURBRTtFQUNFLHNCQUFBO0FDRUo7QURFQTtFQUNFLGVBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0FDREY7QUhpSFc7RUU3R1AsK0JBQUE7RUFFQSxZQUFBO0FDRko7QUg2R1c7RUU3R1AsK0JBQUE7RUFFQSxZQUFBO0FDR0o7QUh3R1c7RUU3R1AsK0JBQUE7RUFFQSxZQUFBO0FDUUo7QUhtR1c7RUU3R1AsK0JBQUE7RUFFQSxZQUFBO0FDYUo7QURWRTtFQUNFLGFBQUE7QUNhSjtBSFhJO0VFSUY7SUFDRSxlQUFBO0VDV0Y7O0VEUkE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ1dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiByZW0oMTUpO1xuXG4gIHBhZGRpbmc6IDAgcmVtKDMwKTtcbn1cblxuLl9fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgZm9udC1zaXplOiByZW0oMTkpO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY3lhbi10d28pO1xuICB9XG59XG5cbi5fX2lucHV0IHtcbiAgd2lkdGg6IHJlbSgxNTApO1xuXG4gIGZvbnQtc2l6ZTogcmVtKDE1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNDc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG5cbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuXG4gICYsICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuXG5AaW5jbHVkZSBtYXgtd2lkZShwaG9uZXNMZykge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMCByZW0oMTYpO1xuICB9XG5cbiAgLl9faW5wdXQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAwLjkzNzVyZW07XG4gIHBhZGRpbmc6IDAgMS44NzVyZW07XG59XG5cbi5fX2J0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDEuMTg3NXJlbTtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLl9fYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWN5YW4tdHdvKTtcbn1cblxuLl9faW5wdXQge1xuICB3aWR0aDogOS4zNzVyZW07XG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICBsaW5lLWhlaWdodDogMS40NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWNsLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5fX2lucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uX19pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uX19pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLl9faW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uX19pbnB1dCwgLl9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuXG4gIC5fX2lucHV0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/stats-alarms/stats-alarms.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/stats-alarms/stats-alarms.component.ts ***!
    \**************************************************************************/

  /*! exports provided: StatsAlarmsComponent */

  /***/
  function srcAppSharedComponentsStatsAlarmsStatsAlarmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsAlarmsComponent", function () {
      return StatsAlarmsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var StatsAlarmsComponent = /*#__PURE__*/function () {
      function StatsAlarmsComponent() {
        _classCallCheck(this, StatsAlarmsComponent);
      }

      _createClass(StatsAlarmsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatsAlarmsComponent;
    }();

    StatsAlarmsComponent.ɵfac = function StatsAlarmsComponent_Factory(t) {
      return new (t || StatsAlarmsComponent)();
    };

    StatsAlarmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsAlarmsComponent,
      selectors: [["app-stats-alarms"]],
      decls: 21,
      vars: 0,
      consts: [[1, "__title"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "__item"], [1, "gbi-critical", "--critical"], [1, "__value"], [1, "__status"], [1, "gbi-critical", "--major"], [1, "gbi-critical", "--minor"]],
      template: function StatsAlarmsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alarms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Major");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Minor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  background-color: #000;\n}\n.__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n.__item[_ngcontent-%COMP%] {\n  margin: 0 0.3125rem;\n}\n.--critical[_ngcontent-%COMP%] {\n  color: var(--orangey-red);\n}\n.--major[_ngcontent-%COMP%] {\n  color: #fd7b1f;\n}\n.--minor[_ngcontent-%COMP%] {\n  color: #faca00;\n}\n.__status[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtYWxhcm1zL3N0YXRzLWFsYXJtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtYWxhcm1zL3N0YXRzLWFsYXJtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0EsZ0NBQUE7QUFPQSxnRUFBQTtBQzFQQTs7O0dBQUE7QUNqREE7RUFDRSxxQkFBQTtFQUVBLHNCQUFBO0FDSUY7QUREQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lGO0FEREE7RUFDRSxtQkFBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtBQ0lGO0FEREE7RUFDRSxjQUFBO0FDSUY7QUREQTtFQUNFLGNBQUE7QUNJRjtBRERBO0VBQ0UsbUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXRzLWFsYXJtcy9zdGF0cy1hbGFybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY2xlYXJmaXgge1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG59XG5cbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIHRleHQtZG90IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiB0ZXh0LWRvdC12ZXJ0aWNhbCgkY291bnQpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkY291bnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8vIFVuaXZlcnNhbCBicmVha3BvaW50cyBtaXhpbnNcbkBtaXhpbiBtaW4td2lkZSgkc2l6ZSkge1xuICBAaWYgKG1hcC1oYXMta2V5KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG5AbWl4aW4gbWF4LXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpIC0gMSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAd2FybiBcIiRzaXplIGRvZXNuJ3QgZXhpc3QgaW4gJHdpZGVTY3JlZW5zLlwiO1xuICB9XG59XG5cbi8vei1pbmRleFxuQG1peGluIHotaW5kZXgoJGtleSkge1xuICB6LWluZGV4OiB6LWluZGV4KCRrZXkpO1xufVxuXG4vLyBQc2V1ZG8gYm9yZGVyIHNoYWRvd1xuQG1peGluIGtleWZyYW1lcygkbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFJlbWFpbmluZyB3aWR0aCBibG9ja1xuQG1peGluIHJlbWFpbmluZygkc2VsZWN0b3JOYW1lLCAkb3JpZW50YXRpb24sICRzaXplLCAkaW5kZW50KSB7XG4gICYjeyRzZWxlY3Rvck5hbWV9IHtcbiAgICAjeyRvcmllbnRhdGlvbn06IGNhbGMoI3skc2l6ZX0gLSAjeyRpbmRlbnR9KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVuaWZpY2F0aW9uIG1peGluIGZvciBoZWxwZXJzIHdpZHRoXG5AbWl4aW4gdW5pZnktc2l6ZXItbW9kaWZpZXIoJHNlbGVjdG9yTmFtZSwgJHByb3BlcnR5LCAkc2l6ZSkge1xuICAmLS0jeyRzZWxlY3Rvck5hbWV9IHtcbiAgICAjeyRwcm9wZXJ0eX06ICRzaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBhcnRpZmljaWFsLXRoaWNrbmVzcygkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICB0ZXh0LXNoYWRvdzogJG1pbi10aGluayAwICRjb2xvciwgMCAkdGhpY2sgJGNvbG9yLCAkdGhpY2sgMCAkY29sb3IsIDAgJG1pbi10aGluayAkY29sb3I7XG59XG5cbkBmdW5jdGlvbiBzaGFkb3dCb2xkKCR0aGljaywgJGNvbG9yKSB7XG4gICRtaW4tdGhpbms6IC0kdGhpY2s7XG4gIEByZXR1cm4gJG1pbi10aGluayAwICRjb2xvciwgMCAkdGhpY2sgJGNvbG9yLCAkdGhpY2sgMCAkY29sb3IsIDAgJG1pbi10aGluayAkY29sb3I7XG59XG5cbi8vIEluc2VydCBpY29uIGluIHBzZXVkbyBlbGVtZW50IGZyb20gaWNvbi1mb250c1xuQG1peGluIHBzZXVkby1pY29uKCRpY29uLW5hbWUsICRzaXplKSB7XG4gIGNvbnRlbnQ6IHVuaWNvZGUoJGljb24tbmFtZSk7XG4gIGZvbnQ6IHtcbiAgICBAaWYgdHlwZS1vZigkc2l6ZSkgPT0gJ251bWJlcicgYW5kIHVuaXRsZXNzKCRzaXplKSB7XG4gICAgICBzaXplOiByZW0oJHNpemUpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgc2l6ZTogJHNpemU7XG4gICAgfVxuICAgIGZhbWlseTogJGljb24tZm9udC1mYW1pbHk7XG4gIH1cbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbkBtaXhpbiBwc2V1ZG8taWNvbi1hZnRlcigkc2l6ZUljb24sICRhbGlnbkNlbnRlckljb24pIHtcbiAgQGlmICRhbGlnbkNlbnRlckljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICY6bm90KDphZnRlcik6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgQGlmICRzaXplSWNvbiB7XG4gICAgICBmb250LXNpemU6ICRzaXplSWNvbjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5vLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuQG1peGluIG9wdGlvbmFsLWF0LXJvb3QoJHNlbCkge1xuICBAYXQtcm9vdCAje2lmKG5vdCAmLCAkc2VsLCBzZWxlY3Rvci1hcHBlbmQoJiwgJHNlbCkpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tb3otcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6Oi1tb3otcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFNjcm9sbHMgZml4XG5AbWl4aW4gc2Nyb2xsLWRpc2FwcGVhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG5AbWl4aW4gc2Nyb2xsLWJlaGF2aW9yIHtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuQG1peGluIHNjcm9sbC1zdHlsZSgkc2l6ZSwgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yOiBtaXgoJGZvcmVncm91bmQtY29sb3IsIHdoaXRlLCA1MCUpKSB7XG4gIC8vIEZvciBHb29nbGUgQ2hyb21lXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZvcmVncm91bmQtY29sb3I7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBib2R5IHtcbiAgICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XG4gICAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gc2Nyb2xsLW9mZnNldCgkc2l6ZSkge1xuICBwYWRkaW5nLXJpZ2h0OiAkc2l6ZTtcbiAgbWFyZ2luLXJpZ2h0OiAtJHNpemU7XG59XG5cbkBtaXhpbiBjaGFuZ2UtYXV0by1maWxsIHtcbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbCcpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcicpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cycpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgJjotd2Via2l0LWF1dG9maWxsLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50QW5pbWF0aW9uKCRzdGFydCwgJGVuZCwgJHRyYW5zVGltZSwgJHotaW5kZXgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAkei1pbmRleDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQsICRlbmQpO1xuXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLSR6LWluZGV4O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBjb250ZW50OiAnJztcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZW5kLCAkc3RhcnQpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdHJhbnNUaW1lO1xuICB9XG4gICY6aG92ZXIge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBvbmx5LXRvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1tb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0IHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xuICAgIC8vLyogaU9TIDExICovXG4gICAgLy9wYWRkaW5nLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAvL3BhZGRpbmctcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG5cbiAgICAvKiBpT1MgMTEuMisgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgcGFkZGluZy1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuQG1peGluIHBob25lcy1maXQtbWF4LWV2bigkbWF4KSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IG1heCgjeyRtYXh9LCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xuICB9XG59XG5cbi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQG1peGluIG9ubHktaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuQG1peGluIG9ubHktZWRnZSB7XG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEZsdWlkIHR5cG9ncmFwaHlcbi8vQG1peGluIGZsdWlkLXR5cGUoJG1pbi12dywgJG1heC12dywgJG1pbi1mb250LXNpemUsICRtYXgtZm9udC1zaXplKSB7XG4vLyAgJHUxOiB1bml0KCRtaW4tdncpO1xuLy8gICR1MjogdW5pdCgkbWF4LXZ3KTtcbi8vICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xuLy8gICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XG4vL1xuLy8gIEBpZiAkdTEgPT0gJHUyIGFuZCAkdTEgPT0gJHUzIGFuZCAkdTEgPT0gJHU0IHtcbi8vICAgICYge1xuLy8gICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xuLy8gICAgICB9XG4vL1xuLy8gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XG4vLyAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vfVxuIiwiJHNjcm9sbC1zaXplOiByZW0oNSk7XG4kc2Nyb2xsLXRodW1iLWNvbG9yOiAjZDJkNGQ3O1xuJHNjcm9sbC10cmFjay1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kc2Nyb2xsLXRyYWNrLWxpbmU6IGluc2V0IDAgMCAwIDFweCAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuXG4lc2Nyb2xsLXNtYWxsIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2Nyb2xsLXNpemU7XG4gICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdHJhY2stY29sb3I7XG4gICAgLy9ib3gtc2hhZG93OiAkc2Nyb2xsLXRyYWNrLWxpbmU7XG4gIH1cblxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xufVxuXG4lc2Nyb2xsLXNtYWxsLW9mZnNldCB7XG4gIEBpbmNsdWRlIHNjcm9sbC1vZmZzZXQoJHNjcm9sbC1zaXplKTtcbn1cblxuQG1peGluIHNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuQG1peGluIGJsb2NrLWdyYWRpZW50LW9uLXNjcm9sbCgkb3JpZW50LCAkc2l6ZSwgJGNvbG9yLCAkb2Zmc2V0KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBoZWlnaHQ6ICRzaXplO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKCRjb2xvciwgMCkgMCUsIHJnYmEoJGNvbG9yLCAwLjk0KSA1MSUpO1xuICB9XG5cbiAgQGlmICRvcmllbnQgPT0gJ3ZlcnRpY2FsJyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdG9wOiAkb2Zmc2V0O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAkb2Zmc2V0O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICdob3Jpem9udGFsJyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogJG9mZnNldDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAkb2Zmc2V0O1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcImNvcmVcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLl9fdGl0bGUge1xuICBmb250LXNpemU6IHJlbSgxMik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLl9faXRlbSB7XG4gIG1hcmdpbjogMCByZW0oNSk7XG59XG5cbi4tLWNyaXRpY2FsIHtcbiAgY29sb3I6IHZhcigtLW9yYW5nZXktcmVkKTtcbn1cblxuLi0tbWFqb3Ige1xuICBjb2xvcjogI2ZkN2IxZjtcbn1cblxuLi0tbWlub3Ige1xuICBjb2xvcjogI2ZhY2EwMDtcbn1cblxuLl9fc3RhdHVzIHtcbiAgZm9udC1zaXplOiByZW0oMTApO1xufVxuIiwiLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5fX2l0ZW0ge1xuICBtYXJnaW46IDAgMC4zMTI1cmVtO1xufVxuXG4uLS1jcml0aWNhbCB7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2V5LXJlZCk7XG59XG5cbi4tLW1ham9yIHtcbiAgY29sb3I6ICNmZDdiMWY7XG59XG5cbi4tLW1pbm9yIHtcbiAgY29sb3I6ICNmYWNhMDA7XG59XG5cbi5fX3N0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsAlarmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats-alarms',
          templateUrl: './stats-alarms.component.html',
          styleUrls: ['./stats-alarms.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/stats-list/stats-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/stats-list/stats-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: StatsListComponent */

  /***/
  function srcAppSharedComponentsStatsListStatsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsListComponent", function () {
      return StatsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StatsListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r1.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.icon)("classList", item_r1.styleClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
      }
    }

    var ITEMS = [{
      name: 'Wi-Fi',
      icon: 'gbi-critical',
      color: '#ff3728'
    }, {
      name: 'Ethernet',
      icon: 'gbi-critical',
      color: '#54ff00'
    }, {
      name: 'DHCP',
      icon: 'gbi-critical',
      color: '#54ff00'
    }, {
      name: 'Gateway',
      icon: 'gbi-critical',
      color: '#54ff00'
    }, {
      name: 'DNS',
      icon: 'gbi-critical',
      color: '#54ff00'
    }, {
      name: 'Captive Portal',
      icon: 'gbi-critical',
      color: '#54ff00'
    }, {
      name: 'Network Gateway',
      icon: 'gbi-critical',
      color: '#54ff00'
    }];

    var StatsListComponent = /*#__PURE__*/function () {
      function StatsListComponent() {
        _classCallCheck(this, StatsListComponent);

        this.items = ITEMS;
      }

      _createClass(StatsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatsListComponent;
    }();

    StatsListComponent.ɵfac = function StatsListComponent_Factory(t) {
      return new (t || StatsListComponent)();
    };

    StatsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsListComponent,
      selectors: [["app-stats-list"]],
      inputs: {
        items: "items"
      },
      decls: 2,
      vars: 1,
      consts: [["gdGap", "10px", 1, "__list"], ["class", "__item", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center", 1, "__item"], [3, "ngClass", "classList"], [1, "__name"]],
      template: function StatsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsListComponent_li_1_Template, 4, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privateba"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.875rem 1.125rem 1.125rem;\n  list-style-type: none;\n}\n.__item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  letter-spacing: 0.35px;\n  line-height: 1;\n}\n.__name[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 1.625rem;\n}\n.__warning[_ngcontent-%COMP%] {\n  color: red;\n}\n.__success[_ngcontent-%COMP%] {\n  color: var(--bright-lime-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtbGlzdC9zdGF0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGF0cy1saXN0L3N0YXRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NBLGdDQUFBO0FBT0EsZ0VBQUE7QUMxUEE7OztHQUFBO0FDakRBO0VBQ0UsU0FBQTtFQUNBLG1DQUFBO0VBRUEscUJBQUE7QUNJRjtBRERBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0UscUJBQUE7RUFFQSxxQkFBQTtBQ0dGO0FEQUE7RUFDRSxVQUFBO0FDR0Y7QURBQTtFQUNFLCtCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGF0cy1saXN0L3N0YXRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY2xlYXJmaXgge1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG59XG5cbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIHRleHQtZG90IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiB0ZXh0LWRvdC12ZXJ0aWNhbCgkY291bnQpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkY291bnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8vIFVuaXZlcnNhbCBicmVha3BvaW50cyBtaXhpbnNcbkBtaXhpbiBtaW4td2lkZSgkc2l6ZSkge1xuICBAaWYgKG1hcC1oYXMta2V5KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG5AbWl4aW4gbWF4LXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpIC0gMSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAd2FybiBcIiRzaXplIGRvZXNuJ3QgZXhpc3QgaW4gJHdpZGVTY3JlZW5zLlwiO1xuICB9XG59XG5cbi8vei1pbmRleFxuQG1peGluIHotaW5kZXgoJGtleSkge1xuICB6LWluZGV4OiB6LWluZGV4KCRrZXkpO1xufVxuXG4vLyBQc2V1ZG8gYm9yZGVyIHNoYWRvd1xuQG1peGluIGtleWZyYW1lcygkbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFJlbWFpbmluZyB3aWR0aCBibG9ja1xuQG1peGluIHJlbWFpbmluZygkc2VsZWN0b3JOYW1lLCAkb3JpZW50YXRpb24sICRzaXplLCAkaW5kZW50KSB7XG4gICYjeyRzZWxlY3Rvck5hbWV9IHtcbiAgICAjeyRvcmllbnRhdGlvbn06IGNhbGMoI3skc2l6ZX0gLSAjeyRpbmRlbnR9KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVuaWZpY2F0aW9uIG1peGluIGZvciBoZWxwZXJzIHdpZHRoXG5AbWl4aW4gdW5pZnktc2l6ZXItbW9kaWZpZXIoJHNlbGVjdG9yTmFtZSwgJHByb3BlcnR5LCAkc2l6ZSkge1xuICAmLS0jeyRzZWxlY3Rvck5hbWV9IHtcbiAgICAjeyRwcm9wZXJ0eX06ICRzaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBhcnRpZmljaWFsLXRoaWNrbmVzcygkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICB0ZXh0LXNoYWRvdzogJG1pbi10aGluayAwICRjb2xvciwgMCAkdGhpY2sgJGNvbG9yLCAkdGhpY2sgMCAkY29sb3IsIDAgJG1pbi10aGluayAkY29sb3I7XG59XG5cbkBmdW5jdGlvbiBzaGFkb3dCb2xkKCR0aGljaywgJGNvbG9yKSB7XG4gICRtaW4tdGhpbms6IC0kdGhpY2s7XG4gIEByZXR1cm4gJG1pbi10aGluayAwICRjb2xvciwgMCAkdGhpY2sgJGNvbG9yLCAkdGhpY2sgMCAkY29sb3IsIDAgJG1pbi10aGluayAkY29sb3I7XG59XG5cbi8vIEluc2VydCBpY29uIGluIHBzZXVkbyBlbGVtZW50IGZyb20gaWNvbi1mb250c1xuQG1peGluIHBzZXVkby1pY29uKCRpY29uLW5hbWUsICRzaXplKSB7XG4gIGNvbnRlbnQ6IHVuaWNvZGUoJGljb24tbmFtZSk7XG4gIGZvbnQ6IHtcbiAgICBAaWYgdHlwZS1vZigkc2l6ZSkgPT0gJ251bWJlcicgYW5kIHVuaXRsZXNzKCRzaXplKSB7XG4gICAgICBzaXplOiByZW0oJHNpemUpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgc2l6ZTogJHNpemU7XG4gICAgfVxuICAgIGZhbWlseTogJGljb24tZm9udC1mYW1pbHk7XG4gIH1cbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbkBtaXhpbiBwc2V1ZG8taWNvbi1hZnRlcigkc2l6ZUljb24sICRhbGlnbkNlbnRlckljb24pIHtcbiAgQGlmICRhbGlnbkNlbnRlckljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICY6bm90KDphZnRlcik6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgQGlmICRzaXplSWNvbiB7XG4gICAgICBmb250LXNpemU6ICRzaXplSWNvbjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5vLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuQG1peGluIG9wdGlvbmFsLWF0LXJvb3QoJHNlbCkge1xuICBAYXQtcm9vdCAje2lmKG5vdCAmLCAkc2VsLCBzZWxlY3Rvci1hcHBlbmQoJiwgJHNlbCkpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tb3otcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6Oi1tb3otcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFNjcm9sbHMgZml4XG5AbWl4aW4gc2Nyb2xsLWRpc2FwcGVhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG5AbWl4aW4gc2Nyb2xsLWJlaGF2aW9yIHtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuQG1peGluIHNjcm9sbC1zdHlsZSgkc2l6ZSwgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yOiBtaXgoJGZvcmVncm91bmQtY29sb3IsIHdoaXRlLCA1MCUpKSB7XG4gIC8vIEZvciBHb29nbGUgQ2hyb21lXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZvcmVncm91bmQtY29sb3I7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBib2R5IHtcbiAgICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XG4gICAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gc2Nyb2xsLW9mZnNldCgkc2l6ZSkge1xuICBwYWRkaW5nLXJpZ2h0OiAkc2l6ZTtcbiAgbWFyZ2luLXJpZ2h0OiAtJHNpemU7XG59XG5cbkBtaXhpbiBjaGFuZ2UtYXV0by1maWxsIHtcbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbCcpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcicpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgLy9AaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cycpIHtcbiAgLy8gIEBjb250ZW50O1xuICAvL31cbiAgJjotd2Via2l0LWF1dG9maWxsLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50QW5pbWF0aW9uKCRzdGFydCwgJGVuZCwgJHRyYW5zVGltZSwgJHotaW5kZXgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAkei1pbmRleDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQsICRlbmQpO1xuXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLSR6LWluZGV4O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBjb250ZW50OiAnJztcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZW5kLCAkc3RhcnQpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdHJhbnNUaW1lO1xuICB9XG4gICY6aG92ZXIge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBvbmx5LXRvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gb25seS1tb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0IHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xuICAgIC8vLyogaU9TIDExICovXG4gICAgLy9wYWRkaW5nLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAvL3BhZGRpbmctcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG5cbiAgICAvKiBpT1MgMTEuMisgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgcGFkZGluZy1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuQG1peGluIHBob25lcy1maXQtbWF4LWV2bigkbWF4KSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IG1heCgjeyRtYXh9LCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xuICB9XG59XG5cbi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQG1peGluIG9ubHktaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuQG1peGluIG9ubHktZWRnZSB7XG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEZsdWlkIHR5cG9ncmFwaHlcbi8vQG1peGluIGZsdWlkLXR5cGUoJG1pbi12dywgJG1heC12dywgJG1pbi1mb250LXNpemUsICRtYXgtZm9udC1zaXplKSB7XG4vLyAgJHUxOiB1bml0KCRtaW4tdncpO1xuLy8gICR1MjogdW5pdCgkbWF4LXZ3KTtcbi8vICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xuLy8gICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XG4vL1xuLy8gIEBpZiAkdTEgPT0gJHUyIGFuZCAkdTEgPT0gJHUzIGFuZCAkdTEgPT0gJHU0IHtcbi8vICAgICYge1xuLy8gICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xuLy8gICAgICB9XG4vL1xuLy8gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XG4vLyAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vfVxuIiwiJHNjcm9sbC1zaXplOiByZW0oNSk7XG4kc2Nyb2xsLXRodW1iLWNvbG9yOiAjZDJkNGQ3O1xuJHNjcm9sbC10cmFjay1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kc2Nyb2xsLXRyYWNrLWxpbmU6IGluc2V0IDAgMCAwIDFweCAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuXG4lc2Nyb2xsLXNtYWxsIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2Nyb2xsLXNpemU7XG4gICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdHJhY2stY29sb3I7XG4gICAgLy9ib3gtc2hhZG93OiAkc2Nyb2xsLXRyYWNrLWxpbmU7XG4gIH1cblxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xufVxuXG4lc2Nyb2xsLXNtYWxsLW9mZnNldCB7XG4gIEBpbmNsdWRlIHNjcm9sbC1vZmZzZXQoJHNjcm9sbC1zaXplKTtcbn1cblxuQG1peGluIHNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuQG1peGluIGJsb2NrLWdyYWRpZW50LW9uLXNjcm9sbCgkb3JpZW50LCAkc2l6ZSwgJGNvbG9yLCAkb2Zmc2V0KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBoZWlnaHQ6ICRzaXplO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKCRjb2xvciwgMCkgMCUsIHJnYmEoJGNvbG9yLCAwLjk0KSA1MSUpO1xuICB9XG5cbiAgQGlmICRvcmllbnQgPT0gJ3ZlcnRpY2FsJyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdG9wOiAkb2Zmc2V0O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAkb2Zmc2V0O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICdob3Jpem9udGFsJyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogJG9mZnNldDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAkb2Zmc2V0O1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcImNvcmVcIjtcblxuLl9fbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogcmVtKDMwKSByZW0oMTgpIHJlbSgxOCk7XG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uX19pdGVtIHtcbiAgZm9udC1zaXplOiByZW0oMTQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLl9fbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBtYXJnaW4tbGVmdDogcmVtKDI2KTtcbn1cblxuLl9fd2FybmluZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5fX3N1Y2Nlc3Mge1xuICBjb2xvcjogdmFyKC0tYnJpZ2h0LWxpbWUtZ3JlZW4pO1xufVxuIiwiLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuLl9fbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMS44NzVyZW0gMS4xMjVyZW0gMS4xMjVyZW07XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLl9faXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uX19uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMS42MjVyZW07XG59XG5cbi5fX3dhcm5pbmcge1xuICBjb2xvcjogcmVkO1xufVxuXG4uX19zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLWJyaWdodC1saW1lLWdyZWVuKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats-list',
          templateUrl: './stats-list.component.html',
          styleUrls: ['./stats-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/stats-progress-bar-list/stats-progress-bar-list.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/components/stats-progress-bar-list/stats-progress-bar-list.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: StatsProgressBarListComponent */

  /***/
  function srcAppSharedComponentsStatsProgressBarListStatsProgressBarListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsProgressBarListComponent", function () {
      return StatsProgressBarListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var StatsProgressBarListComponent = /*#__PURE__*/function () {
      function StatsProgressBarListComponent() {
        _classCallCheck(this, StatsProgressBarListComponent);
      }

      _createClass(StatsProgressBarListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatsProgressBarListComponent;
    }();

    StatsProgressBarListComponent.ɵfac = function StatsProgressBarListComponent_Factory(t) {
      return new (t || StatsProgressBarListComponent)();
    };

    StatsProgressBarListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsProgressBarListComponent,
      selectors: [["app-stats-progress-bar-list"]],
      decls: 33,
      vars: 4,
      consts: [["fxLayout", "column", 1, "__wrapper"], [1, "__item"], ["fxLayout", "row", "fxLayoutAlign", "space-around", 1, "__info"], ["fxFlex", ""], ["type", "info", "height", "6px", 1, "__progress-bar", 3, "value"]],
      template: function StatsProgressBarListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Return visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-progressbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Net new visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngb-progressbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1423");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngb-progressbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1670");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total visits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ngb-progressbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 80);
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]],
      styles: [".__wrapper[_ngcontent-%COMP%] {\n  padding: 1.875rem;\n}\n.__info[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.__item[_ngcontent-%COMP%] {\n  margin: 0.625rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtcHJvZ3Jlc3MtYmFyLWxpc3Qvc3RhdHMtcHJvZ3Jlc3MtYmFyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXRzLXByb2dyZXNzLWJhci1saXN0L3N0YXRzLXByb2dyZXNzLWJhci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNTQSxnQ0FBQTtBQU9BLGdFQUFBO0FDMVBBOzs7R0FBQTtBQ2pEQTtFQUNFLGlCQUFBO0FDS0Y7QURGQTtFQUNFLGtCQUFBO0FDS0Y7QURGQTtFQUNFLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGF0cy1wcm9ncmVzcy1iYXItbGlzdC9zdGF0cy1wcm9ncmVzcy1iYXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBjbGVhcmZpeCB7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbn1cblxuQG1peGluIHZlcnRpY2FsLWFsaWduIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gdGV4dC1kb3Qge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIHRleHQtZG90LXZlcnRpY2FsKCRjb3VudCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRjb3VudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLy8gVW5pdmVyc2FsIGJyZWFrcG9pbnRzIG1peGluc1xuQG1peGluIG1pbi13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAd2FybiBcIiRzaXplIGRvZXNuJ3QgZXhpc3QgaW4gJHdpZGVTY3JlZW5zLlwiO1xuICB9XG59XG5cbkBtaXhpbiBtYXgtd2lkZSgkc2l6ZSkge1xuICBAaWYgKG1hcC1oYXMta2V5KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJHdpZGVTY3JlZW5zLCAkc2l6ZSkgLSAxKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuLy96LWluZGV4XG5AbWl4aW4gei1pbmRleCgka2V5KSB7XG4gIHotaW5kZXg6IHotaW5kZXgoJGtleSk7XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4ga2V5ZnJhbWVzKCRuYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRuYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gUmVtYWluaW5nIHdpZHRoIGJsb2NrXG5AbWl4aW4gcmVtYWluaW5nKCRzZWxlY3Rvck5hbWUsICRvcmllbnRhdGlvbiwgJHNpemUsICRpbmRlbnQpIHtcbiAgJiN7JHNlbGVjdG9yTmFtZX0ge1xuICAgICN7JG9yaWVudGF0aW9ufTogY2FsYygjeyRzaXplfSAtICN7JGluZGVudH0pICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVW5pZmljYXRpb24gbWl4aW4gZm9yIGhlbHBlcnMgd2lkdGhcbkBtaXhpbiB1bmlmeS1zaXplci1tb2RpZmllcigkc2VsZWN0b3JOYW1lLCAkcHJvcGVydHksICRzaXplKSB7XG4gICYtLSN7JHNlbGVjdG9yTmFtZX0ge1xuICAgICN7JHByb3BlcnR5fTogJHNpemUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBQc2V1ZG8gYm9yZGVyIHNoYWRvd1xuQG1peGluIGFydGlmaWNpYWwtdGhpY2tuZXNzKCR0aGljaywgJGNvbG9yKSB7XG4gICRtaW4tdGhpbms6IC0kdGhpY2s7XG4gIHRleHQtc2hhZG93OiAkbWluLXRoaW5rIDAgJGNvbG9yLCAwICR0aGljayAkY29sb3IsICR0aGljayAwICRjb2xvciwgMCAkbWluLXRoaW5rICRjb2xvcjtcbn1cblxuQGZ1bmN0aW9uIHNoYWRvd0JvbGQoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgQHJldHVybiAkbWluLXRoaW5rIDAgJGNvbG9yLCAwICR0aGljayAkY29sb3IsICR0aGljayAwICRjb2xvciwgMCAkbWluLXRoaW5rICRjb2xvcjtcbn1cblxuLy8gSW5zZXJ0IGljb24gaW4gcHNldWRvIGVsZW1lbnQgZnJvbSBpY29uLWZvbnRzXG5AbWl4aW4gcHNldWRvLWljb24oJGljb24tbmFtZSwgJHNpemUpIHtcbiAgY29udGVudDogdW5pY29kZSgkaWNvbi1uYW1lKTtcbiAgZm9udDoge1xuICAgIEBpZiB0eXBlLW9mKCRzaXplKSA9PSAnbnVtYmVyJyBhbmQgdW5pdGxlc3MoJHNpemUpIHtcbiAgICAgIHNpemU6IHJlbSgkc2l6ZSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBzaXplOiAkc2l6ZTtcbiAgICB9XG4gICAgZmFtaWx5OiAkaWNvbi1mb250LWZhbWlseTtcbiAgfVxuICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1peGluIHBzZXVkby1pY29uLWFmdGVyKCRzaXplSWNvbiwgJGFsaWduQ2VudGVySWNvbikge1xuICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpub3QoOmFmdGVyKTphZnRlciB7XG4gICAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgQGlmICRhbGlnbkNlbnRlckljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG5cbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICBAaWYgJHNpemVJY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNpemVJY29uO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbm8tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5AbWl4aW4gb3B0aW9uYWwtYXQtcm9vdCgkc2VsKSB7XG4gIEBhdC1yb290ICN7aWYobm90ICYsICRzZWwsIHNlbGVjdG9yLWFwcGVuZCgmLCAkc2VsKSl9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBvcHRpb25hbC1hdC1yb290KCc6LW1vei1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LW1vei1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gU2Nyb2xscyBmaXhcbkBtaXhpbiBzY3JvbGwtZGlzYXBwZWFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5cbkBtaXhpbiBzY3JvbGwtYmVoYXZpb3Ige1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5AbWl4aW4gc2Nyb2xsLXN0eWxlKCRzaXplLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3I6IG1peCgkZm9yZWdyb3VuZC1jb2xvciwgd2hpdGUsIDUwJSkpIHtcbiAgLy8gRm9yIEdvb2dsZSBDaHJvbWVcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZm9yZWdyb3VuZC1jb2xvcjtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIGJvZHkge1xuICAgIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcbiAgICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBzY3JvbGwtb2Zmc2V0KCRzaXplKSB7XG4gIHBhZGRpbmctcmlnaHQ6ICRzaXplO1xuICBtYXJnaW4tcmlnaHQ6IC0kc2l6ZTtcbn1cblxuQG1peGluIGNoYW5nZS1hdXRvLWZpbGwge1xuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsOmhvdmVyJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAvL0BpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotd2Via2l0LWF1dG9maWxsOmZvY3VzJykge1xuICAvLyAgQGNvbnRlbnQ7XG4gIC8vfVxuICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZ3JhZGllbnRBbmltYXRpb24oJHN0YXJ0LCAkZW5kLCAkdHJhbnNUaW1lLCAkei1pbmRleCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6ICR6LWluZGV4O1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydCwgJGVuZCk7XG5cbiAgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtJHotaW5kZXg7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRlbmQsICRzdGFydCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc1RpbWU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG9ubHktdG91Y2gge1xuICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBvbmx5LW1vdXNlIHtcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHBob25lcy1maXQge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgLy8vKiBpT1MgMTEgKi9cbiAgICAvL3BhZGRpbmctbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC8vcGFkZGluZy1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcblxuICAgIC8qIGlPUyAxMS4yKyAqL1xuICAgIHBhZGRpbmctbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdC1tYXgtZXZuKCRtYXgpIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xuICAgIHBhZGRpbmctbGVmdDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgjeyRtYXh9LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG5AbWl4aW4gb25seS1pZSB7XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qIE1pY3Jvc29mdCBFZGdlIEJyb3dzZXIgMTItMTggKEFsbCB2ZXJzaW9ucyBiZWZvcmUgQ2hyb21pdW0pICovXG5AbWl4aW4gb25seS1lZGdlIHtcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gRmx1aWQgdHlwb2dyYXBoeVxuLy9AbWl4aW4gZmx1aWQtdHlwZSgkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLWZvbnQtc2l6ZSwgJG1heC1mb250LXNpemUpIHtcbi8vICAkdTE6IHVuaXQoJG1pbi12dyk7XG4vLyAgJHUyOiB1bml0KCRtYXgtdncpO1xuLy8gICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XG4vLyAgJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcbi8vXG4vLyAgQGlmICR1MSA9PSAkdTIgYW5kICR1MSA9PSAkdTMgYW5kICR1MSA9PSAkdTQge1xuLy8gICAgJiB7XG4vLyAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XG4vL1xuLy8gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XG4vLyAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XG4vLyAgICAgIH1cbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcbi8vICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgfVxuLy99XG4iLCIkc2Nyb2xsLXNpemU6IHJlbSg1KTtcbiRzY3JvbGwtdGh1bWItY29sb3I6ICNkMmQ0ZDc7XG4kc2Nyb2xsLXRyYWNrLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRzY3JvbGwtdHJhY2stbGluZTogaW5zZXQgMCAwIDAgMXB4ICRzY3JvbGwtdGh1bWItY29sb3I7XG5cbiVzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbiVzY3JvbGwtc21hbGwtb2Zmc2V0IHtcbiAgQGluY2x1ZGUgc2Nyb2xsLW9mZnNldCgkc2Nyb2xsLXNpemUpO1xufVxuXG5AbWl4aW4gc2Nyb2xsLXNtYWxsIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2Nyb2xsLXNpemU7XG4gICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDYpO1xuICAgIGJhY2tncm91bmQ6ICRzY3JvbGwtdHJhY2stY29sb3I7XG4gICAgLy9ib3gtc2hhZG93OiAkc2Nyb2xsLXRyYWNrLWxpbmU7XG4gIH1cblxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xufVxuXG4vKipcbiAqIEl0IGlzIHVzZWQgdG8gc2V0IGEgc21vb3RoIHRyYW5zaXRpb24gb24gdGhlIGVkZ2VzIG9mIHRoZSBibG9jayB3aGVuIHNjcm9sbGluZy5cbiAqIEl0IGhhcyB0d28gb3JpZW50YXRpb25zIFwidmVydGljYWxcIiBhbmQgIFwiaG9yaXpvbnRhbFwiXG4gKiovXG5AbWl4aW4gYmxvY2stZ3JhZGllbnQtb24tc2Nyb2xsKCRvcmllbnQsICRzaXplLCAkY29sb3IsICRvZmZzZXQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcblxuICAgIGhlaWdodDogJHNpemU7XG5cbiAgICBjb250ZW50OiAnJztcblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoJGNvbG9yLCAwKSAwJSwgcmdiYSgkY29sb3IsIDAuOTQpIDUxJSk7XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAndmVydGljYWwnIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICB0b3A6ICRvZmZzZXQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBib3R0b206ICRvZmZzZXQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG5cbiAgQGlmICRvcmllbnQgPT0gJ2hvcml6b250YWwnIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAkb2Zmc2V0O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6ICRvZmZzZXQ7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiY29yZVwiO1xuXG4uX193cmFwcGVyIHtcbiAgcGFkZGluZzogcmVtKDMwKTtcbn1cblxuLl9faW5mbyB7XG4gIGZvbnQtc2l6ZTogcmVtKDEyKTtcbn1cblxuLl9faXRlbSB7XG4gIG1hcmdpbjogcmVtKDEwKSAwO1xufVxuIiwiLyogTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyICovXG4vKiBNaWNyb3NvZnQgRWRnZSBCcm93c2VyIDEyLTE4IChBbGwgdmVyc2lvbnMgYmVmb3JlIENocm9taXVtKSAqL1xuLyoqXG4gKiBJdCBpcyB1c2VkIHRvIHNldCBhIHNtb290aCB0cmFuc2l0aW9uIG9uIHRoZSBlZGdlcyBvZiB0aGUgYmxvY2sgd2hlbiBzY3JvbGxpbmcuXG4gKiBJdCBoYXMgdHdvIG9yaWVudGF0aW9ucyBcInZlcnRpY2FsXCIgYW5kICBcImhvcml6b250YWxcIlxuICoqL1xuLl9fd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEuODc1cmVtO1xufVxuXG4uX19pbmZvIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uX19pdGVtIHtcbiAgbWFyZ2luOiAwLjYyNXJlbSAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsProgressBarListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats-progress-bar-list',
          templateUrl: './stats-progress-bar-list.component.html',
          styleUrls: ['./stats-progress-bar-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/stats-progress-bar/stats-progress-bar.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/stats-progress-bar/stats-progress-bar.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: StatsProgressBarComponent */

  /***/
  function srcAppSharedComponentsStatsProgressBarStatsProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsProgressBarComponent", function () {
      return StatsProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "gbi-arrow-line-up": a0,
        "gbi-arrow-line-down": a1,
        "--down": a2
      };
    };

    var StatsProgressBarComponent = /*#__PURE__*/function () {
      function StatsProgressBarComponent() {
        _classCallCheck(this, StatsProgressBarComponent);

        this.value = 0;
      }

      _createClass(StatsProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatsProgressBarComponent;
    }();

    StatsProgressBarComponent.ɵfac = function StatsProgressBarComponent_Factory(t) {
      return new (t || StatsProgressBarComponent)();
    };

    StatsProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsProgressBarComponent,
      selectors: [["app-stats-progress-bar"]],
      inputs: {
        amount: "amount",
        caption: "caption",
        value: "value",
        growingUp: "growingUp",
        icon: "icon"
      },
      decls: 14,
      vars: 10,
      consts: [["fxLayout", "row", 1, "__wrapper"], ["fxLayoutAlign", "center center", 1, "__amount"], [1, "__container"], ["gdColumns", "max-content 1fr", "gdGap", "7px", "gdAlignColumns", "center", 1, "__top"], [1, "__main-icon", 3, "ngClass"], [1, "__caption"], [1, "__progress"], ["type", "info", "height", "6px", 1, "__progress-bar", "--sean", 3, "value"], [1, "__arrow-icon", 3, "ngClass"], [1, "__value"]],
      template: function StatsProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngb-progressbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.amount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.caption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.growingUp, !ctx.growingUp, !ctx.growingUp));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.value, "% than APR 20");
        }
      },
      directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatex"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privateba"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbar"]],
      styles: ["[_nghost-%COMP%] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  min-height: 3.75rem;\n  white-space: nowrap;\n}\n.__wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #000;\n  border-radius: 0.25rem;\n}\n.__caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.55;\n  letter-spacing: 0.83px;\n  text-align: left;\n  text-transform: uppercase;\n  color: #fff;\n}\n.__amount[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 5.1875rem;\n  min-height: 100%;\n  padding: 0 1.5rem;\n  background: #1d2b3d;\n  border-radius: 0.25rem;\n  font-size: 1.375rem;\n  font-weight: 300;\n  letter-spacing: 0.55px;\n  text-align: left;\n  color: #fff;\n}\n.__container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.3125rem;\n}\n.__progress[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.4375rem 0;\n}\n.__main-icon[_ngcontent-%COMP%] {\n  color: var(--blue-grey);\n  margin-right: 0.4375rem;\n}\n.__value[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-size: 0.6875rem;\n  color: var(--cl-white);\n}\n.__arrow-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--green);\n}\n.__arrow-icon.--down[_ngcontent-%COMP%] {\n  color: var(--orangey-red);\n}\n@media (max-width: 479px) {\n  .__amount[_ngcontent-%COMP%] {\n    min-width: 6.25rem;\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvaWxvdmVhbGwvd3d3L2dyYWIvZnJvbnRlbmQtZ3JhYi9zcmMvYXNzZXRzL3Njc3MvX3Njcm9sbHMuc2NzcyIsIi9Vc2Vycy9pbG92ZWFsbC93d3cvZ3JhYi9mcm9udGVuZC1ncmFiL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtcHJvZ3Jlc3MtYmFyL3N0YXRzLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHMtcHJvZ3Jlc3MtYmFyL3N0YXRzLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0EsZ0NBQUE7QUFPQSxnRUFBQTtBQzFQQTs7O0dBQUE7QUNqREE7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0FDSUY7QUREQTtFQUNFLGdCQUFBO0VBRUEsZ0JBQUE7RUFFQSxzQkFBQTtBQ0VGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRUY7QURDQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUVBLG1CQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLFdBQUE7RUFFQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSx1QkFBQTtFQUVBLHVCQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRE9FO0VBQ0UseUJBQUE7QUNMSjtBSHpCSTtFRW1DRjtJQUNFLGtCQUFBO0lBRUEsZUFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGF0cy1wcm9ncmVzcy1iYXIvc3RhdHMtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiB0ZXh0LWRvdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gdGV4dC1kb3QtdmVydGljYWwoJGNvdW50KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGNvdW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vLyBVbml2ZXJzYWwgYnJlYWtwb2ludHMgbWl4aW5zXG5AbWl4aW4gbWluLXdpZGUoJHNpemUpIHtcbiAgQGlmIChtYXAtaGFzLWtleSgkd2lkZVNjcmVlbnMsICRzaXplKSkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCR3aWRlU2NyZWVucywgJHNpemUpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiJHNpemUgZG9lc24ndCBleGlzdCBpbiAkd2lkZVNjcmVlbnMuXCI7XG4gIH1cbn1cblxuQG1peGluIG1heC13aWRlKCRzaXplKSB7XG4gIEBpZiAobWFwLWhhcy1rZXkoJHdpZGVTY3JlZW5zLCAkc2l6ZSkpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkd2lkZVNjcmVlbnMsICRzaXplKSAtIDEpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCIkc2l6ZSBkb2Vzbid0IGV4aXN0IGluICR3aWRlU2NyZWVucy5cIjtcbiAgfVxufVxuXG4vL3otaW5kZXhcbkBtaXhpbiB6LWluZGV4KCRrZXkpIHtcbiAgei1pbmRleDogei1pbmRleCgka2V5KTtcbn1cblxuLy8gUHNldWRvIGJvcmRlciBzaGFkb3dcbkBtaXhpbiBrZXlmcmFtZXMoJG5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBSZW1haW5pbmcgd2lkdGggYmxvY2tcbkBtaXhpbiByZW1haW5pbmcoJHNlbGVjdG9yTmFtZSwgJG9yaWVudGF0aW9uLCAkc2l6ZSwgJGluZGVudCkge1xuICAmI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skb3JpZW50YXRpb259OiBjYWxjKCN7JHNpemV9IC0gI3skaW5kZW50fSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVbmlmaWNhdGlvbiBtaXhpbiBmb3IgaGVscGVycyB3aWR0aFxuQG1peGluIHVuaWZ5LXNpemVyLW1vZGlmaWVyKCRzZWxlY3Rvck5hbWUsICRwcm9wZXJ0eSwgJHNpemUpIHtcbiAgJi0tI3skc2VsZWN0b3JOYW1lfSB7XG4gICAgI3skcHJvcGVydHl9OiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFBzZXVkbyBib3JkZXIgc2hhZG93XG5AbWl4aW4gYXJ0aWZpY2lhbC10aGlja25lc3MoJHRoaWNrLCAkY29sb3IpIHtcbiAgJG1pbi10aGluazogLSR0aGljaztcbiAgdGV4dC1zaGFkb3c6ICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG5AZnVuY3Rpb24gc2hhZG93Qm9sZCgkdGhpY2ssICRjb2xvcikge1xuICAkbWluLXRoaW5rOiAtJHRoaWNrO1xuICBAcmV0dXJuICRtaW4tdGhpbmsgMCAkY29sb3IsIDAgJHRoaWNrICRjb2xvciwgJHRoaWNrIDAgJGNvbG9yLCAwICRtaW4tdGhpbmsgJGNvbG9yO1xufVxuXG4vLyBJbnNlcnQgaWNvbiBpbiBwc2V1ZG8gZWxlbWVudCBmcm9tIGljb24tZm9udHNcbkBtaXhpbiBwc2V1ZG8taWNvbigkaWNvbi1uYW1lLCAkc2l6ZSkge1xuICBjb250ZW50OiB1bmljb2RlKCRpY29uLW5hbWUpO1xuICBmb250OiB7XG4gICAgQGlmIHR5cGUtb2YoJHNpemUpID09ICdudW1iZXInIGFuZCB1bml0bGVzcygkc2l6ZSkge1xuICAgICAgc2l6ZTogcmVtKCRzaXplKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIHNpemU6ICRzaXplO1xuICAgIH1cbiAgICBmYW1pbHk6ICRpY29uLWZvbnQtZmFtaWx5O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWl4aW4gcHNldWRvLWljb24tYWZ0ZXIoJHNpemVJY29uLCAkYWxpZ25DZW50ZXJJY29uKSB7XG4gIEBpZiAkYWxpZ25DZW50ZXJJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOm5vdCg6YWZ0ZXIpOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBAaWYgJGFsaWduQ2VudGVySWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgIEBpZiAkc2l6ZUljb24ge1xuICAgICAgZm9udC1zaXplOiAkc2l6ZUljb247XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbkBtaXhpbiBvcHRpb25hbC1hdC1yb290KCRzZWwpIHtcbiAgQGF0LXJvb3QgI3tpZihub3QgJiwgJHNlbCwgc2VsZWN0b3ItYXBwZW5kKCYsICRzZWwpKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG9wdGlvbmFsLWF0LXJvb3QoJzotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOjotbW96LXBsYWNlaG9sZGVyJykge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcicpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBTY3JvbGxzIGZpeFxuQG1peGluIHNjcm9sbC1kaXNhcHBlYXIge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1iZWhhdmlvciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHNpemUsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcjogbWl4KCRmb3JlZ3JvdW5kLWNvbG9yLCB3aGl0ZSwgNTAlKSkge1xuICAvLyBGb3IgR29vZ2xlIENocm9tZVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cblxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgYm9keSB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHNjcm9sbC1vZmZzZXQoJHNpemUpIHtcbiAgcGFkZGluZy1yaWdodDogJHNpemU7XG4gIG1hcmdpbi1yaWdodDogLSRzaXplO1xufVxuXG5AbWl4aW4gY2hhbmdlLWF1dG8tZmlsbCB7XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGwnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXInKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gIC8vQGluY2x1ZGUgb3B0aW9uYWwtYXQtcm9vdCgnOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMnKSB7XG4gIC8vICBAY29udGVudDtcbiAgLy99XG4gICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudEFuaW1hdGlvbigkc3RhcnQsICRlbmQsICR0cmFuc1RpbWUsICR6LWluZGV4KSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LCAkZW5kKTtcblxuICAmOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0kei1pbmRleDtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgY29udGVudDogJyc7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGVuZCwgJHN0YXJ0KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRyYW5zVGltZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gb25seS10b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG9ubHktbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gcGhvbmVzLWZpdCB7XG4gIEBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcbiAgICAvLy8qIGlPUyAxMSAqL1xuICAgIC8vcGFkZGluZy1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuXG4gICAgLyogaU9TIDExLjIrICovXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBwaG9uZXMtZml0LW1heC1ldm4oJG1heCkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoI3skbWF4fSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgcGFkZGluZy1yaWdodDogbWF4KCN7JG1heH0sIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgfVxufVxuXG4vKiBNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkBtaXhpbiBvbmx5LWllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbkBtaXhpbiBvbmx5LWVkZ2Uge1xuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBGbHVpZCB0eXBvZ3JhcGh5XG4vL0BtaXhpbiBmbHVpZC10eXBlKCRtaW4tdncsICRtYXgtdncsICRtaW4tZm9udC1zaXplLCAkbWF4LWZvbnQtc2l6ZSkge1xuLy8gICR1MTogdW5pdCgkbWluLXZ3KTtcbi8vICAkdTI6IHVuaXQoJG1heC12dyk7XG4vLyAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcbi8vICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xuLy9cbi8vICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XG4vLyAgICAmIHtcbi8vICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcbi8vXG4vLyAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcbi8vICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcbi8vICAgICAgfVxuLy9cbi8vICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xuLy8gICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL31cbiIsIiRzY3JvbGwtc2l6ZTogcmVtKDUpO1xuJHNjcm9sbC10aHVtYi1jb2xvcjogI2QyZDRkNztcbiRzY3JvbGwtdHJhY2stY29sb3I6IHRyYW5zcGFyZW50O1xuJHNjcm9sbC10cmFjay1saW5lOiBpbnNldCAwIDAgMCAxcHggJHNjcm9sbC10aHVtYi1jb2xvcjtcblxuJXNjcm9sbC1zbWFsbCB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgIGhlaWdodDogJHNjcm9sbC1zaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg2KTtcbiAgICBiYWNrZ3JvdW5kOiAkc2Nyb2xsLXRyYWNrLWNvbG9yO1xuICAgIC8vYm94LXNoYWRvdzogJHNjcm9sbC10cmFjay1saW5lO1xuICB9XG5cbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRzY3JvbGwtdGh1bWItY29sb3I7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJHNjcm9sbC10cmFjay1jb2xvcjtcbn1cblxuJXNjcm9sbC1zbWFsbC1vZmZzZXQge1xuICBAaW5jbHVkZSBzY3JvbGwtb2Zmc2V0KCRzY3JvbGwtc2l6ZSk7XG59XG5cbkBtaXhpbiBzY3JvbGwtc21hbGwge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzY3JvbGwtc2l6ZTtcbiAgICBoZWlnaHQ6ICRzY3JvbGwtc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10aHVtYi1jb2xvcjtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiByZW0oNik7XG4gICAgYmFja2dyb3VuZDogJHNjcm9sbC10cmFjay1jb2xvcjtcbiAgICAvL2JveC1zaGFkb3c6ICRzY3JvbGwtdHJhY2stbGluZTtcbiAgfVxuXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkc2Nyb2xsLXRodW1iLWNvbG9yO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRzY3JvbGwtdHJhY2stY29sb3I7XG59XG5cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbkBtaXhpbiBibG9jay1ncmFkaWVudC1vbi1zY3JvbGwoJG9yaWVudCwgJHNpemUsICRjb2xvciwgJG9mZnNldCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaGVpZ2h0OiAkc2l6ZTtcblxuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgkY29sb3IsIDApIDAlLCByZ2JhKCRjb2xvciwgMC45NCkgNTElKTtcbiAgfVxuXG4gIEBpZiAkb3JpZW50ID09ICd2ZXJ0aWNhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGJvdHRvbTogJG9mZnNldDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICBAaWYgJG9yaWVudCA9PSAnaG9yaXpvbnRhbCcge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6ICRvZmZzZXQ7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogJG9mZnNldDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJjb3JlXCI7XG5cbjpob3N0IHtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLWhlaWdodDogcmVtKDYwKTtcblxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uX193cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kOiAjMDAwO1xuXG4gIGJvcmRlci1yYWRpdXM6IHJlbSg0KTtcbn1cblxuLl9fY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjgzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uX19hbW91bnQge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogcmVtKDgzKTtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICBwYWRkaW5nOiAwICRjb250ZW50R3V0dGVyWDI7XG5cbiAgYmFja2dyb3VuZDogIzFkMmIzZDtcblxuICBib3JkZXItcmFkaXVzOiByZW0oNCk7XG5cbiAgZm9udC1zaXplOiByZW0oMjIpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41NXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLl9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHJlbSg1KTtcbn1cblxuLl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nOiByZW0oNykgMDtcbn1cblxuLl9fbWFpbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUtZ3JleSk7XG5cbiAgbWFyZ2luLXJpZ2h0OiByZW0oNyk7XG59XG5cbi5fX3ZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IHJlbSg4KTtcblxuICBmb250LXNpemU6IHJlbSgxMSk7XG4gIGNvbG9yOiB2YXIoLS1jbC13aGl0ZSk7XG59XG5cbi5fX2Fycm93LWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbik7XG5cbiAgJi4tLWRvd24ge1xuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2V5LXJlZCk7XG4gIH1cbn1cblxuQGluY2x1ZGUgbWF4LXdpZGUocGhvbmVzKSB7XG4gIC5fX2Ftb3VudCB7XG4gICAgbWluLXdpZHRoOiByZW0oMTAwKTtcblxuICAgIHBhZGRpbmc6IDAgJGNvbnRlbnRHdXR0ZXI7XG4gIH1cbn1cbiIsIi8qIE1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlciAqL1xuLyogTWljcm9zb2Z0IEVkZ2UgQnJvd3NlciAxMi0xOCAoQWxsIHZlcnNpb25zIGJlZm9yZSBDaHJvbWl1bSkgKi9cbi8qKlxuICogSXQgaXMgdXNlZCB0byBzZXQgYSBzbW9vdGggdHJhbnNpdGlvbiBvbiB0aGUgZWRnZXMgb2YgdGhlIGJsb2NrIHdoZW4gc2Nyb2xsaW5nLlxuICogSXQgaGFzIHR3byBvcmllbnRhdGlvbnMgXCJ2ZXJ0aWNhbFwiIGFuZCAgXCJob3Jpem9udGFsXCJcbiAqKi9cbjpob3N0IHtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLWhlaWdodDogMy43NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLl9fd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5fX2NhcHRpb24ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBsZXR0ZXItc3BhY2luZzogMC44M3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLl9fYW1vdW50IHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtaW4td2lkdGg6IDUuMTg3NXJlbTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGJhY2tncm91bmQ6ICMxZDJiM2Q7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zMTI1cmVtO1xufVxuXG4uX19wcm9ncmVzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjQzNzVyZW0gMDtcbn1cblxuLl9fbWFpbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUtZ3JleSk7XG4gIG1hcmdpbi1yaWdodDogMC40Mzc1cmVtO1xufVxuXG4uX192YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICBjb2xvcjogdmFyKC0tY2wtd2hpdGUpO1xufVxuXG4uX19hcnJvdy1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLl9fYXJyb3ctaWNvbi4tLWRvd24ge1xuICBjb2xvcjogdmFyKC0tb3JhbmdleS1yZWQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLl9fYW1vdW50IHtcbiAgICBtaW4td2lkdGg6IDYuMjVyZW07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats-progress-bar',
          templateUrl: './stats-progress-bar.component.html',
          styleUrls: ['./stats-progress-bar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        amount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        caption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        growingUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_stats_progress_bar_stats_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/stats-progress-bar/stats-progress-bar.component */
    "./src/app/shared/components/stats-progress-bar/stats-progress-bar.component.ts");
    /* harmony import */


    var _components_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/chart-card/chart-card.component */
    "./src/app/shared/components/chart-card/chart-card.component.ts");
    /* harmony import */


    var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/info-card/info-card.component */
    "./src/app/shared/components/info-card/info-card.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/camera-preview/camera-preview.component */
    "./src/app/shared/components/camera-preview/camera-preview.component.ts");
    /* harmony import */


    var _components_stats_list_stats_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/stats-list/stats-list.component */
    "./src/app/shared/components/stats-list/stats-list.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/button/button.component */
    "./src/app/shared/components/button/button.component.ts");
    /* harmony import */


    var _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/input/input.component */
    "./src/app/shared/components/input/input.component.ts");
    /* harmony import */


    var _components_stats_alarms_stats_alarms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/stats-alarms/stats-alarms.component */
    "./src/app/shared/components/stats-alarms/stats-alarms.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_stats_progress_bar_list_stats_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/stats-progress-bar-list/stats-progress-bar-list.component */
    "./src/app/shared/components/stats-progress-bar-list/stats-progress-bar-list.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/shared/components/search/search.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["GridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_stats_progress_bar_stats_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarComponent"], _components_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"], _components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_6__["CameraPreviewComponent"], _components_stats_list_stats_list_component__WEBPACK_IMPORTED_MODULE_7__["StatsListComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _components_stats_alarms_stats_alarms_component__WEBPACK_IMPORTED_MODULE_11__["StatsAlarmsComponent"], _components_stats_progress_bar_list_stats_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_13__["StatsProgressBarListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["GridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
        exports: [_components_stats_progress_bar_stats_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarComponent"], _components_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"], _components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_6__["CameraPreviewComponent"], _components_stats_list_stats_list_component__WEBPACK_IMPORTED_MODULE_7__["StatsListComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _components_stats_alarms_stats_alarms_component__WEBPACK_IMPORTED_MODULE_11__["StatsAlarmsComponent"], _components_stats_progress_bar_list_stats_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_13__["StatsProgressBarListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_stats_progress_bar_stats_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarComponent"], _components_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"], _components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_6__["CameraPreviewComponent"], _components_stats_list_stats_list_component__WEBPACK_IMPORTED_MODULE_7__["StatsListComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _components_stats_alarms_stats_alarms_component__WEBPACK_IMPORTED_MODULE_11__["StatsAlarmsComponent"], _components_stats_progress_bar_list_stats_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_13__["StatsProgressBarListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["GridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
          exports: [_components_stats_progress_bar_stats_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarComponent"], _components_chart_card_chart_card_component__WEBPACK_IMPORTED_MODULE_3__["ChartCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"], _components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_6__["CameraPreviewComponent"], _components_stats_list_stats_list_component__WEBPACK_IMPORTED_MODULE_7__["StatsListComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _components_stats_alarms_stats_alarms_component__WEBPACK_IMPORTED_MODULE_11__["StatsAlarmsComponent"], _components_stats_progress_bar_list_stats_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_13__["StatsProgressBarListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/iloveall/www/grab/frontend-grab/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
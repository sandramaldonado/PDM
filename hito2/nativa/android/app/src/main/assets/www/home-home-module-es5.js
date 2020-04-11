function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-logo/cv-logo.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-logo/cv-logo.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCvLogoCvLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src={{link}}>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-screen/cv-screen.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-screen/cv-screen.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCvScreenCvScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-cv-logo link= \"https://www.cdc.gov/coronavirus/2019-ncov/images/2019-coronavirus.png\"></app-cv-logo>\n<app-cvciudad title=\"cochabamba\"></app-cvciudad>\n<app-cvciudad title=\"santa Cruz\"></app-cvciudad>\n<app-cvciudad title=\"Oruro\"></app-cvciudad>\n<input \nclass=\"buscar\"\ntype=\"text\"  \nname= \"buscar\" \n[(ngModel)]= \"buscar\" \nclass=\"alineamiento\" \nplaceholder=\"Ingrese Busqueda\">\n\n<ion-row style=\"text-align: center;\">\n  \n  <ion-col>\n    \n  </ion-col>\n  <ion-col>\n    <ion-button expand=\"block\" (click)=\"calcularMayor()\">Calcular</ion-button>\n  </ion-col>\n</ion-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvcasos/cvcasos.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvcasos/cvcasos.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCvcasosCvcasosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-row style=\"text-align: center;\">\n  <ion-col>\n    <h1>casos confirmados</h1>\n    <input type=\"text\" id= {{departament}} class=\"alineamiento\" >\n  </ion-col>\n</ion-row>\n<ion-row style=\"text-align: center;\">\n  <ion-col>\n    <h1>casos sospechosos</h1>\n    <input type=\"text\" id= {{departament}} class=\"alineamiento\" >\n  </ion-col>\n</ion-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvciudad/cvciudad.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvciudad/cvciudad.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCvciudadCvciudadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"ciudad\">\n<h1>{{title}}</h1>\n\n<app-cvcasos departament={{title}}></app-cvcasos>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding >\n\n  \n<app-cv-screen></app-cv-screen>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/components/cv-logo/cv-logo.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/cv-logo/cv-logo.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCvLogoCvLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3YtbG9nby9jdi1sb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/cv-logo/cv-logo.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/cv-logo/cv-logo.component.ts ***!
    \*********************************************************/

  /*! exports provided: CvLogoComponent */

  /***/
  function srcAppComponentsCvLogoCvLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvLogoComponent", function () {
      return CvLogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CvLogoComponent = /*#__PURE__*/function () {
      function CvLogoComponent() {
        _classCallCheck(this, CvLogoComponent);
      }

      _createClass(CvLogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvLogoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('link'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CvLogoComponent.prototype, "link", void 0);
    CvLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cv-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cv-logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-logo/cv-logo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cv-logo.component.scss */
      "./src/app/components/cv-logo/cv-logo.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CvLogoComponent);
    /***/
  },

  /***/
  "./src/app/components/cv-screen/cv-screen.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/cv-screen/cv-screen.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCvScreenCvScreenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alineamiento {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdi1zY3JlZW4vQzpcXFVzZXJzXFw1OTE3MC5ERVNLVE9QLU9BSEgzSTZcXERvY3VtZW50c1xcUERNXFxEZWZlbnNhSGl0bzIgLVNhbmRyYSBNYWxkb25hZG8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGN2LXNjcmVlblxcY3Ytc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2N2LXNjcmVlbi9jdi1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdi1zY3JlZW4vY3Ytc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaW5lYW1pZW50b3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59IiwiLmFsaW5lYW1pZW50byB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/cv-screen/cv-screen.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/cv-screen/cv-screen.component.ts ***!
    \*************************************************************/

  /*! exports provided: CvScreenComponent */

  /***/
  function srcAppComponentsCvScreenCvScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvScreenComponent", function () {
      return CvScreenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CvScreenComponent = /*#__PURE__*/function () {
      function CvScreenComponent() {
        _classCallCheck(this, CvScreenComponent);

        this.departaments = {};
      }

      _createClass(CvScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calcularMayor",
        value: function calcularMayor() {
          this.buscar = this.buscar;
          console.log(this.buscar);

          if (this.buscar == 'sospechosos') {
            var nodeItems = Array.from(document.getElementsByClassName('ciudad'));

            for (var _i = 0, _nodeItems = nodeItems; _i < _nodeItems.length; _i++) {
              var c = _nodeItems[_i];
              var ciudad = c.getElementsByTagName('app-cvcasos')[0].getElementsByTagName('ion-row');
              var casosConfirmados = ciudad[0].getElementsByTagName('input');
              var casosSospechosos = ciudad[1].getElementsByTagName('input');
              var departamento = casosConfirmados[0].getAttribute('id');
              var numeroDeCasosConfirmados = casosConfirmados[0].value;
              var numeroDeCasosSospechosos = casosSospechosos[0].value;
              console.log(departamento);
              var numSospechosos = [];
              numSospechosos.push(casosSospechosos[0].value);
              console.log(numeroDeCasosConfirmados);
              console.log(numeroDeCasosSospechosos);
            }

            Math.max.apply(Math, numSospechosos);
            console.log(num);
            console.log("el mayor es " + num);
          } else this.buscar == "confirmados";

          {
            var _nodeItems2 = Array.from(document.getElementsByClassName('ciudad'));

            for (var _i2 = 0, _nodeItems3 = _nodeItems2; _i2 < _nodeItems3.length; _i2++) {
              var _c = _nodeItems3[_i2];

              var _ciudad = _c.getElementsByTagName('app-cvcasos')[0].getElementsByTagName('ion-row');

              var _casosConfirmados = _ciudad[0].getElementsByTagName('input');

              var _casosSospechosos = _ciudad[1].getElementsByTagName('input');

              var _departamento = _casosConfirmados[0].getAttribute('id');

              var _numeroDeCasosConfirmados = _casosConfirmados[0].value;
              var _numeroDeCasosSospechosos = _casosSospechosos[0].value;
              console.log(_departamento);
              var num = [];
              num.push(_casosConfirmados[0].value);
              console.log(_numeroDeCasosConfirmados);
              console.log(_numeroDeCasosSospechosos);
            }

            Math.max.apply(Math, num);
            console.log(num);
            console.log("el mayor es " + num);
          }
        }
      }]);

      return CvScreenComponent;
    }();

    CvScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cv-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cv-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cv-screen/cv-screen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cv-screen.component.scss */
      "./src/app/components/cv-screen/cv-screen.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CvScreenComponent);
    /***/
  },

  /***/
  "./src/app/components/cvcasos/cvcasos.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/cvcasos/cvcasos.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCvcasosCvcasosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alineamiento {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdmNhc29zL0M6XFxVc2Vyc1xcNTkxNzAuREVTS1RPUC1PQUhIM0k2XFxEb2N1bWVudHNcXFBETVxcRGVmZW5zYUhpdG8yIC1TYW5kcmEgTWFsZG9uYWRvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjdmNhc29zXFxjdmNhc29zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2N2Y2Fzb3MvY3ZjYXNvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N2Y2Fzb3MvY3ZjYXNvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGluZWFtaWVudG97XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufSIsIi5hbGluZWFtaWVudG8ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/cvcasos/cvcasos.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/cvcasos/cvcasos.component.ts ***!
    \*********************************************************/

  /*! exports provided: CvcasosComponent */

  /***/
  function srcAppComponentsCvcasosCvcasosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvcasosComponent", function () {
      return CvcasosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CvcasosComponent = /*#__PURE__*/function () {
      function CvcasosComponent() {
        _classCallCheck(this, CvcasosComponent);
      }

      _createClass(CvcasosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvcasosComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('departament'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CvcasosComponent.prototype, "departament", void 0);
    CvcasosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cvcasos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cvcasos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvcasos/cvcasos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cvcasos.component.scss */
      "./src/app/components/cvcasos/cvcasos.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CvcasosComponent);
    /***/
  },

  /***/
  "./src/app/components/cvciudad/cvciudad.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/cvciudad/cvciudad.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCvciudadCvciudadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdmNpdWRhZC9DOlxcVXNlcnNcXDU5MTcwLkRFU0tUT1AtT0FISDNJNlxcRG9jdW1lbnRzXFxQRE1cXERlZmVuc2FIaXRvMiAtU2FuZHJhIE1hbGRvbmFkby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3ZjaXVkYWRcXGN2Y2l1ZGFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2N2Y2l1ZGFkL2N2Y2l1ZGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3ZjaXVkYWQvY3ZjaXVkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/cvciudad/cvciudad.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/cvciudad/cvciudad.component.ts ***!
    \***********************************************************/

  /*! exports provided: CvciudadComponent */

  /***/
  function srcAppComponentsCvciudadCvciudadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvciudadComponent", function () {
      return CvciudadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CvciudadComponent = /*#__PURE__*/function () {
      function CvciudadComponent() {
        _classCallCheck(this, CvciudadComponent);
      }

      _createClass(CvciudadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvciudadComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CvciudadComponent.prototype, "title", void 0);
    CvciudadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cvciudad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cvciudad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cvciudad/cvciudad.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cvciudad.component.scss */
      "./src/app/components/cvciudad/cvciudad.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CvciudadComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_cv_logo_cv_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/cv-logo/cv-logo.component */
    "./src/app/components/cv-logo/cv-logo.component.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _components_cvcasos_cvcasos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/cvcasos/cvcasos.component */
    "./src/app/components/cvcasos/cvcasos.component.ts");
    /* harmony import */


    var _components_cvciudad_cvciudad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/cvciudad/cvciudad.component */
    "./src/app/components/cvciudad/cvciudad.component.ts");
    /* harmony import */


    var _components_cv_screen_cv_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/cv-screen/cv-screen.component */
    "./src/app/components/cv-screen/cv-screen.component.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"], _components_cv_logo_cv_logo_component__WEBPACK_IMPORTED_MODULE_6__["CvLogoComponent"], _components_cvcasos_cvcasos_component__WEBPACK_IMPORTED_MODULE_8__["CvcasosComponent"], _components_cvciudad_cvciudad_component__WEBPACK_IMPORTED_MODULE_9__["CvciudadComponent"], _components_cv_screen_cv_screen_component__WEBPACK_IMPORTED_MODULE_10__["CvScreenComponent"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXDU5MTcwLkRFU0tUT1AtT0FISDNJNlxcRG9jdW1lbnRzXFxQRE1cXERlZmVuc2FIaXRvMiAtU2FuZHJhIE1hbGRvbmFkby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePage = function HomePage() {
      _classCallCheck(this, HomePage);
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map
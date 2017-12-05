"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
require("reflect-metadata");
//const TOKEN = "123";
//const TOKEN = new InjectionToken<MyInterface>("dxiojdoijd");
// interface MyInterface {
//     run();
// }
var MyInterface = /** @class */ (function () {
    function MyInterface() {
    }
    return MyInterface;
}());
var A = /** @class */ (function () {
    function A() {
        console.log("A.ctor");
        this.id = 123;
    }
    A.prototype.run = function () {
    };
    return A;
}());
var C = /** @class */ (function () {
    function C() {
        console.log("C.ctor");
    }
    C.prototype.run = function () {
    };
    return C;
}());
var B = /** @class */ (function () {
    function B(a) {
        console.log("B.ctor");
    }
    B = tslib_1.__decorate([
        Blabla(),
        tslib_1.__metadata("design:paramtypes", [MyInterface])
    ], B);
    return B;
}());
function Blabla() {
    return function (target) {
    };
}
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: MyInterface, useClass: A },
    { provide: MyInterface, useClass: C },
    B,
]);
var b1 = injector.get(B);
//const a2 = injector.get(A);
// console.log(a1);
//
// console.log(a1 == a2);
var X = /** @class */ (function () {
    function X() {
    }
    X.prototype.run = function () {
    };
    return X;
}());
//# sourceMappingURL=main.js.map
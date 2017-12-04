var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//@Component()
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.run = function (num) {
        console.log("run");
    };
    __decorate([
        Profile()
    ], MyClass.prototype, "run", null);
    return MyClass;
}());
function Component() {
    return function (target) {
        console.log("Component", target);
    };
}
function Profile() {
    return function (target, methodName, desc) {
        var originalMethod = target[methodName];
        target[methodName] = function () {
            console.log("xxx", arguments);
            originalMethod.apply(this, arguments);
            console.log("xxx");
        };
        console.log("Profile", target);
        return target;
    };
}
var obj = new MyClass();
obj.run(10);
//# sourceMappingURL=main.js.map
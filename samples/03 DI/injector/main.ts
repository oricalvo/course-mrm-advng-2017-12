import {Inject, InjectionToken, ReflectiveInjector} from "@angular/core";
import "reflect-metadata";

const jQuery = {};

//const TOKEN = "123";

//const TOKEN = new InjectionToken<MyInterface>("dxiojdoijd");

// interface MyInterface {
//     run();
// }

abstract class MyInterface {
    abstract run();
}

class A implements MyInterface {
    private id: number;

    constructor() {
        console.log("A.ctor");
        this.id = 123;
    }

    run() {

    }
}

class C implements MyInterface {
    constructor() {
        console.log("C.ctor");
    }

    run() {

    }
}

@Blabla()
class B {
    constructor(a: MyInterface){
        console.log("B.ctor");
    }
}

function Blabla(){
    return function(target){

    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: MyInterface, useClass: A},
    {provide: MyInterface, useClass: C},
    {provide: "$", useValue: jQuery},
    B,
]);

const b1 = injector.get(B);
//const a2 = injector.get(A);

// console.log(a1);
//
// console.log(a1 == a2);

class X implements MyInterface {
    run(){

    }
}
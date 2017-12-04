//@Component()
class MyClass {
    @Profile()
    run(num){
        console.log("run");
    }
}

function Component(){
    return function(target){
        console.log("Component", target);
    }
}

function Profile(){
    return function(target, methodName, desc){
        const originalMethod = target[methodName];
        target[methodName] = function() {
            console.log("xxx", arguments);
            originalMethod.apply(this, arguments);
            console.log("xxx");
        }

        console.log("Profile", target);

        return target;
    }
}

const obj = new MyClass();
obj.run(10);

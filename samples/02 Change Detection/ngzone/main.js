function doSomething(){
    setTimeout(function(){
        console.log("doSomething 1")

        setTimeout(function () {
            console.log("doSomething 2")

        }, 1500)
    },2000);
}

function run(){
    const spec = {
      name: "xxx",
      onHasTask: function(a,b,c,hasTaskState){
          //console.log(hasTaskState);

          if(hasTaskState.change == "macroTask" && !hasTaskState.macroTask){
              console.log("DONE");
          }
      }
    };

    const zone = Zone.current.fork(spec);
    zone.run(doSomething);

    // console.log("before");
    //
    // doSomething();
    //
    // console.log("after");
}

run();

function g() {
    console.log("before");

    setTimeout(function(){
        console.log("timeout 1");
    }, 0);

    setTimeout(function(){
        console.log("timeout 2");
    }, 0);

    Promise.resolve().then(function(){
        console.log("resolve");
    });

    console.log("after");
}

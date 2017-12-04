import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  counter: number = 0;

  constructor(private ngZone: NgZone){
    // this.contacts = [
    // ];
    //
    // const c = [
    //   {id:1, name: "Ori"},
    //   {id:2, name: "Roni"},
    // ];
    //
    // for(let i=0; i<5000; i++){
    //   for(let j=0; j<2; j++) {
    //     this.contacts.push({
    //       ... c[j],
    //     });
    //   }
    // }
  }

  ngOnInit(){
    this.appState.counter = 10;

    this.ngZone.runOutsideAngular(()=>{
      mapLib(()=>{
        //this.ngZone.runGuarded(()=>{
          console.log("click");

          this.counter = 123;
        //})
      });
    });
  }

  ngAfterViewChecked(){
    ++this.counter;
  }

  run(){
    this.counter = 777;

    setTimeout(function(){
      console.log("timeout")
    }, 0);
  }

  // get counter(){
  //   this.contacts.filter(c=>c.name == "Ori");
  //
  //   return 10;
  // }
}

interface Contact {
  id: number;
  name: string;
}

function mapLib(callback){
  const map = document.getElementById("map");
  map.addEventListener("mousemove", function(){
  });

  const button = map.querySelector("button");
  button.addEventListener("click", callback);

}

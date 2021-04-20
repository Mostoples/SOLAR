import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  bgm : any; 

  constructor() {
    this.bgm = new Audio('assets/bg.mp3');
  }


  public play(){
    this.bgm.play();
    this.bgm.loop = true;
  }

  public volume(value){
    this.bgm.volume = value;
  }





  
   

}

import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  klik : any;
  constructor(private screenOrientation: ScreenOrientation) {
    this.klik = new Audio('../../assets/click.wav');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

 





  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }

  ngOnInit() {
  }

}

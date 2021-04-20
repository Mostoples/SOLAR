import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-sun',
  templateUrl: './sun.page.html',
  styleUrls: ['./sun.page.scss'],
})
export class SunPage implements OnInit {

    constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  ngOnInit() {
  }

}

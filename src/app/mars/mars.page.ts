import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.page.html',
  styleUrls: ['./mars.page.scss'],
})
export class MarsPage implements OnInit {

    constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  ngOnInit() {
  }

}

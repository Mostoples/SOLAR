import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.page.html',
  styleUrls: ['./asteroid.page.scss'],
})
export class AsteroidPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  ngOnInit() {
  }

}

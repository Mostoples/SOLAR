import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  klik : any;
  data : any;

  constructor(private screenOrientation: ScreenOrientation, public storage : Storage, private nativeStorage: NativeStorage) {
    this.data = 
    this.klik = new Audio('../../assets/click.wav');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }




  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }


  username : any;
  fullname : any;
  password : any; 

  logout(){
    this.nativeStorage.clear();
    this.nativeStorage.remove('userlogin')
    this.storage.clear();
    console.log('masuk');

  }

  ngOnInit(){
    this.storage.get('username').then((val) => {
      this.username = val;
    });

    this.storage.get('fullname').then((val) => {
      this.fullname = val;
    });

    this.storage.get('password').then((val) => {
      this.password = val;
    });

  }

  ionViewWillEnter(){
    this.nativeStorage.getItem('userlogin')
          .then(
            data => this.data = data,
            error => console.error(error)
    );

    this.storage.get('username').then((val) => {
      this.username = val;
    });

    this.storage.get('fullname').then((val) => {
      this.fullname = val;
    });

    this.storage.get('password').then((val) => {
      this.password = val;
    });
  }
}

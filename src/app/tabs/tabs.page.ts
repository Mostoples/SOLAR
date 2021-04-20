import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  klik : any;
  data : any;
  constructor(private screenOrientation: ScreenOrientation, private nativeStorage: NativeStorage, private androidPermissions: AndroidPermissions, private camera: Camera, private router : Router, public storage : Storage, public platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.nativeStorage.getItem('userlogin')
    .then(
      data => this.data = data,
      error => console.error(error)
    );

    

    this.klik = new Audio('../../assets/click.wav');

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }




  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }

  redirect(error){
    console.error('gak dapet data gara2 : ', error);
    this.router.navigateByUrl('/login');
  }

  storedata(data){
    console.log('dapet data ', data);
    this.data = data;
  }

  ionViewWillEnter(){
    this.data = undefined;
    this.nativeStorage.getItem('userlogin')
    .then(
      data => this.storedata(data),
      error => this.redirect(error)
    );

  }


}

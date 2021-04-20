import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-verif',
  templateUrl: './verif.page.html',
  styleUrls: ['./verif.page.scss'],
})
export class VerifPage implements OnInit {
  klik : any;
  constructor(public navCtrl: NavController, public storage: Storage, private screenOrientation: ScreenOrientation) {
    this.klik = new Audio('../../assets/click.wav');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

 





  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }


  otpInput : string;

  username : any;
  fullname : any;
  password : any;
  is_activated : any;

  activation_number : any;

  countpromtise : any;

  number_input : any;

  ionViewDidLoad(){
    console.log('ionViewDidLoad VerifyPage');
    this.storage.get('fullname').then((val) => {
      this.fullname = val;
    });
    this.storage.get('username').then((val) => {
      this.username = val;
    });
    this.storage.get('password').then((val) => {
      this.password = val;
    });
    this.storage.get('is_activated').then((val) => {
      this.is_activated = val;
    });
    this.storage.get('activation_number').then((val) => {
      this.activation_number = val;
    });
  }

  callback(){
                    var xmlHttp = new XMLHttpRequest();
                    var url = 'https://solar.tohudancovid.xyz/index.php/activate';
                    var params = 'username='+this.username;
                    xmlHttp.open('POST', url, true);
                    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xmlHttp.onreadystatechange = ()=> {
                      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        var tempjson = JSON.parse(xmlHttp.responseText);
                        console.log(tempjson);
                        if(tempjson.is_activated == 1){
                          this.navCtrl.navigateRoot('/tabs/tab1');
                        }
                      }
                        
                    }
                    xmlHttp.send(params);


    // }
  }

  activate(){
                    this.countpromtise = 0;
                    var https = new XMLHttpRequest();
                    var url = 'https://solar.tohudancovid.xyz/index.php/activate';
                    var params = 'username='+this.username;
                    https.open('POST', url, true);
                    https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    https.onreadystatechange = ()=> {
                      if(https.readyState == 4 && https.status == 200){
                        this.callback();
                      }
                    }
                    https.send(params);
                    
  }

  
  ngOnInit() {

  
  }



}

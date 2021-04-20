import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  
  username_input : any;
  password_input : any;

  klik : any;

  data : any;




  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, private storage:Storage, private nativeStorage: NativeStorage, public router : Router) { 
    
    this.klik = new Audio('../../assets/click.wav');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }


  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }

  redirect(error){
    console.error('gak dapet data gara2 : ', error);
    
  }

  storedata(data){
    console.log('dapet data ', data);
    this.data = data;
    this.router.navigateByUrl('/tabs/tab1');
  }

  ionViewWillEnter(){
    this.data = undefined;
    this.nativeStorage.getItem('userlogin')
    .then(
      data => this.storedata(data),
      error => this.redirect(error)
    );

  }

  callback(temp){
 
 

    if(temp.length == 2){
      console.log(temp);
      console.log("Akun tidak ada");
    }else{
     
      let halosa = JSON.parse(temp)[0];
      
      
      
      if(halosa.username == this.username_input && halosa.password == this.password_input && halosa.is_activated == 0){
        console.log("sampe sini juga");
        this.storage.set('fullname', halosa.fullname);
        this.storage.set('username', halosa.username);
        this.storage.set('password', halosa.password);

        this.storage.set('activation_number', halosa.activation_number);
        this.storage.set('is_activated', halosa.is_activated);

        

        this.nativeStorage.setItem('userlogin', {fullname: halosa.fullname, username: halosa.username, password: halosa.password, activation_number: halosa.activation_number, is_activated: halosa.is_activated, nilai : halosa.nilai, gender : halosa.gender, tanggal_lahir : halosa.tanggal_lahir, alamat : halosa.alamat, foto : halosa.foto})
        .then(
          () => this.nativeStorage.getItem('userlogin')
          .then(
            data => console.log(data),
            error => console.error(error)
          ),
          error => console.error('Error storing item', error)
        );



        this.navCtrl.navigateRoot('/verif');

      }else if(halosa.username == this.username_input && halosa.password == this.password_input && halosa.is_activated == 1){
        
        this.storage.set('fullname', halosa.fullname);
        this.storage.set('username', halosa.username);
        this.storage.set('password', halosa.password);

        this.storage.set('activation_number', halosa.activation_number);
        this.storage.set('is_activated', halosa.is_activated);

        this.nativeStorage.setItem('userlogin', {fullname: halosa.fullname, username: halosa.username, password: halosa.password, activation_number: halosa.activation_number, is_activated: halosa.is_activated, nilai : halosa.nilai, gender : halosa.gender, tanggal_lahir : halosa.tanggal_lahir, alamat : halosa.alamat, foto : halosa.foto})
        .then(
          () => this.nativeStorage.getItem('userlogin')
          .then(
            data => console.log(data),
            error => console.error(error)
          ),
          error => console.error('Error storing item', error)
        );

        this.navCtrl.navigateRoot('/tabs/tab1');

      }
    }
  
  }

  guest(){
    this.nativeStorage.setItem('userlogin', {fullname: 'Guest', username: 'Guest', password: 'Guest', activation_number: null, is_activated: null, nilai : 0, gender : 1, tanggal_lahir : 0, alamat : '', foto : ''})
    .then(
      () => this.nativeStorage.getItem('userlogin')
      .then(
        data => console.log(data),
        error => console.error(error)
      ),
      error => console.error('Error storing item', error)
    );

    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  login(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => { 
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            this.callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", "https://solar.tohudancovid.xyz/index.php/register?username="+this.username_input, true); // true for asynchronous 
    xmlHttp.send(null);
  }



  

  ngOnInit() {

  
  }





 

}

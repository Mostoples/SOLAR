import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  data : any; 


  

  constructor(private screenOrientation: ScreenOrientation, public element: ElementRef, private nativeStorage: NativeStorage) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
      error => console.log('eror')
    );

  }

  elem : any;
  elem2 : any;
  elem3 : any;
  revealBox : any;
  skor : any;
  skorBox : any;
  benar1 : any;
  benar2 : any;
  benar3 : any;
  benar4 : any;
  benar5 : any;

  count : any;

  pilihana1 : any;
  pilihanb1 : any;
  pilihanc1 : any;
  pilihand1 : any; 
  soal1 : any;
  danger1 : any;
  bloksoal1 : any;

  pilihana2 : any;
  pilihanb2 : any;
  pilihanc2 : any;
  pilihand2 : any; 
  soal2 : any;
  danger2 : any;
  bloksoal2 : any;

  pilihana3 : any;
  pilihanb3 : any;
  pilihanc3 : any;
  pilihand3 : any; 
  soal3 : any;
  danger3 : any;
  bloksoal3 : any;

  pilihana4 : any;
  pilihanb4 : any;
  pilihanc4 : any;
  pilihand4 : any; 
  soal4 : any;
  danger4 : any;
  bloksoal4 : any;

  pilihana5 : any;
  pilihanb5 : any;
  pilihanc5 : any;
  pilihand5 : any; 
  soal5 : any;
  danger5 : any;
  bloksoal5 : any;

 

  elem4 : any;
  i : any;

  soals : Array<any>;
  bloksoals : Array<any>;
  dangers : Array<any>;

  evalBtn : any;
  elem5 : any;
  
  
  ngAfterViewInit() {
	  
	this.initiate();
  
	

  }

  ngOnInit() {
  }

  evaluate(){
    this.count = 0;

    if(this.benar1.checked){
      this.count = this.count + 10;
      this.soals[0] = 'true';

    }
    if(this.benar2.checked){
      this.count = this.count + 10;
      this.soals[1] = 'true';

    }
    if(this.benar3.checked){
      this.count = this.count + 10;
      this.soals[2] = 'true';

    }
    if(this.benar4.checked){
      this.count = this.count + 10;
      this.soals[3] = 'true';
    }
    if(this.benar5.checked){
      this.count = this.count + 10;
      this.soals[4] = 'true';
    }
   
    
    
    this.skor.innerHTML = this.count;

    this.nativeStorage.setItem('userlogin', {fullname: this.data.fullname, username: this.data.username, password: this.data.password, activation_number: this.data.activation_number, is_activated: this.data.is_activated, nilai : this.count, gender : this.data.gender, tanggal_lahir : this.data.tanggal_lahir, alamat : this.data.alamat, foto : this.data.foto})
    .then(
      () => this.nativeStorage.getItem('userlogin')
      .then(
        data => console.log(data),
        error => console.error(error)
      ),
      error => console.error('Error storing item', error)
    );
    
  }

  reveal(){
    
    if(this.revealBox.style.display != 'none'){
      this.revealBox.style.display = 'none';
      this.skorBox.style.display = 'none';

      
      this.unmarkGreen();
      this.unmarkRed();
      
      
    }else if(this.revealBox.style.display == 'none'){
      this.revealBox.style.display = 'inline';
      this.skorBox.style.display = 'inline';
      this.evaluate();
      this.markGreen();
      this.markRed();
      this.lock();
      this.evalBtn.style.display = 'none';
    }
  }

  markGreen(){
    for(this.i = 0; this.i < 5; this.i++){
      this.elem4[this.i].style.background = 'green';
     
    }
  }
  
  markRed(){
    for(this.i = 0; this.i < 5; this.i++){
      if(this.soals[this.i] != 'true'){
        this.bloksoals[this.i].style.background = 'rgba(255,0,0,0.5)';
        this.dangers[this.i].style.display = 'inline-block';
      }
    }
  }

  unmarkGreen(){
    for(this.i = 0; this.i < 5; this.i++){
      this.elem4[this.i].style.background = 'rgba(0,0,0,0)';
     
    }
  }
  
  unmarkRed(){
    for(this.i = 0; this.i < 5; this.i++){
      if(this.soals[this.i] != 'true'){
        this.bloksoals[this.i].style.background = 'rgba(255,0,0,0)';
        this.dangers[this.i].style.display = 'none';
      }
    }
  }

  initMargin(){
    for(this.i = 0; this.i < this.elem2.length; this.i++){
      this.elem2[this.i].style.marginTop = '2vw';
    }
  }

  lock(){
    for(this.i = 0; this.i < this.elem2.length; this.i++){
        this.elem2[this.i].disabled = true;
        console.log(this.elem2[this.i].disabled);
    }
  }
  
  
  
  initiate(){
	  this.elem = this.element.nativeElement as HTMLElement;
    this.elem = this.elem.getElementsByTagName('div');
    
    this.elem2 = this.element.nativeElement as HTMLElement;
    this.elem2 = this.elem2.getElementsByTagName('input');
    
    this.elem3 = this.element.nativeElement as HTMLElement;
    this.elem3 = this.elem3.getElementsByTagName('p');
    
    this.elem4 = this.element.nativeElement as HTMLElement;
    this.elem4 = this.elem4.getElementsByClassName('benar');
    
    this.elem5 = this.element.nativeElement as HTMLElement;
    this.elem5 = this.elem5.getElementsByTagName('ion-col');
    
    this.skor = this.elem3.namedItem('skor');
    this.revealBox = this.elem.namedItem('reveal');
    this.skorBox = this.elem.namedItem('skorBox');
    this.benar1 = this.elem2.namedItem('benar1');
    this.benar2 = this.elem2.namedItem('benar2');
    this.benar3 = this.elem2.namedItem('benar3');
    this.benar4 = this.elem2.namedItem('benar4');
    this.benar5 = this.elem2.namedItem('benar5');


    this.bloksoal1 = this.elem.namedItem('soal1');
    this.bloksoal2 = this.elem.namedItem('soal2');
    this.bloksoal3 = this.elem.namedItem('soal3');
    this.bloksoal4 = this.elem.namedItem('soal4');
    this.bloksoal5 = this.elem.namedItem('soal5');
  

    this.danger1 = this.elem.namedItem('danger1');
    this.danger2 = this.elem.namedItem('danger2');
    this.danger3 = this.elem.namedItem('danger3');
    this.danger4 = this.elem.namedItem('danger4');
    this.danger5 = this.elem.namedItem('danger5');

    this.evalBtn = this.elem5.namedItem('evalButton');
   

    this.initMargin();

    
    this.soals = [this.soal1,this.soal2,this.soal3,this.soal4,this.soal5];
	  this.bloksoals = [this.bloksoal1,this.bloksoal2,this.bloksoal3,this.bloksoal4,this.bloksoal5];
    this.dangers = [this.danger1,this.danger2,this.danger3,this.danger4,this.danger5];
  }

 

}

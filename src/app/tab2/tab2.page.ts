import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  posY : any = 0;
  entity : any;
  posYMaba : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  posYKambing : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  state : boolean = false;
  

  @ViewChild('content') content;
  @ViewChild('content2') content2;
  
  @ViewChild('maba1') maba1; 
  @ViewChild('kambing1') kambing1;
 
  
  pdmPos : any[] = [this.posYMaba, this.posYKambing];

  tinggi : any = 0;

  
  assignVal(){
    for(let i = 0; i < 60; i++){
      this.posYMaba[i] = this.maba1.nativeElement.getBoundingClientRect().height * i;
      this.posYKambing[i] = this.kambing1.nativeElement.getBoundingClientRect().height * i;
      
    }
    
    
  }

  firstUse(){
    if(this.state === false){
      //this.tinggi = this.maba2.nativeElement.getBoundingClientRect().y;
      this.assignVal();
      this.pdmPos = [this.posYMaba, this.posYKambing];
      this.state = true;

    }

    console.log(this.pdmPos);
  }

  ScrollToPoint(choosein : number, chooseent : number){
    choosein = choosein - 1;
	if(chooseent === 0){
		this.content.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);
	}else {
		this.content2.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);
	}
    
  }
  
 


  @ViewChild('slides') slider: IonSlides;
  segment = 0;
  
  

  choice: number = 1;
  menua: any;

  klik : any;



  constructor(private screenOrientation: ScreenOrientation, private menu: MenuController) { 
    this.menua = menu;
    this.klik = new Audio('../../assets/click.wav');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }

  
  ngAfterViewInit() {
    this.slider.lockSwipes(true);
  }

  async segmentChanged() {
	this.slider.lockSwipes(false);
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
	this.slider.lockSwipes(true);
	if(this.segment == 0){
		this.choice = 1;
	}else{
		this.choice = 2;
	}
  }

  ngOnInit() {
  }

  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 1;
    } else if (pilihan === 2) {
      this.choice = 2;
    }

  }

  toggleMenu() {
    this.menua.toggle('right');
  }

  
  

}

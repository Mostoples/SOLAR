import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  elem : any;
  klik : any;

  matahari : any;
  merkurius : any;
  venus : any;
  bumi : any;
  mars : any;
  jupiter : any;
  saturnus : any;
  uranus : any;
  neptunus : any;
  asteroid : any;
  komet : any;
  bulan : any;

  sliderValue : any; 



  constructor(private screenOrientation: ScreenOrientation, private router: Router, public menuCtrl: MenuController, public element: ElementRef, public appo : AppComponent) {
    appo.play();
    this.klik = new Audio('../../assets/click.wav');
    this.elem = this.element.nativeElement as HTMLElement;
    this.elem = this.elem.getElementsByTagName('div');

    this.matahari = this.elem.namedItem('sun');
    this.merkurius = this.elem.namedItem('mercury');
    this.venus = this.elem.namedItem('venus');
    this.bumi = this.elem.namedItem('earth');
    this.mars = this.elem.namedItem('mars');
    this.jupiter = this.elem.namedItem('jupiter');
    this.saturnus = this.elem.namedItem('saturn');
    this.uranus = this.elem.namedItem('uranus');
    this.neptunus = this.elem.namedItem('neptune');
    this.asteroid = this.elem.namedItem('asteroid');
    this.komet = this.elem.namedItem('komet');
    this.bulan = this.elem.namedItem('moon');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    
  }


  bgmChange(){
    this.appo.volume((this.sliderValue/100));
  }

  

  play(){
    this.klik.pause();
    this.klik.currentTime = 0;
    this.klik.play();
  }

  detect(value){
    if(value == 'matahari'){
      if(this.matahari.style.animationName == 'rotate'){
        this.matahari.style.animationName = '';
      }else{
        this.matahari.style.animationName = 'rotate';
      }
    }else if(value == 'merkurius'){
      if(this.merkurius.style.animationName == 'rotate'){
        this.merkurius.style.animationName = '';
      }else{
        this.merkurius.style.animationName = 'rotate';
      }
    }else if(value == 'venus'){
      if(this.venus.style.animationName == 'rotate'){
        this.venus.style.animationName = '';
      }else{
        this.venus.style.animationName = 'rotate';
      }
    }else if(value == 'bumi'){
      if(this.bumi.style.animationName == 'rotate'){
        this.bumi.style.animationName = '';
      }else{
        this.bumi.style.animationName = 'rotate';
      }
    }else if(value == 'mars'){
      if(this.mars.style.animationName == 'rotate'){
        this.mars.style.animationName = '';
      }else{
        this.mars.style.animationName = 'rotate';
      }
    }else if(value == 'jupiter'){
      if(this.jupiter.style.animationName == 'rotate'){
        this.jupiter.style.animationName = '';
      }else{
        this.jupiter.style.animationName = 'rotate';
      }
    }else if(value == 'saturnus'){
      if(this.saturnus.style.animationName == 'rotate'){
        this.saturnus.style.animationName = '';
      }else{
        this.saturnus.style.animationName = 'rotate';
      }
    }else if(value == 'uranus'){
      if(this.uranus.style.animationName == 'rotate'){
        this.uranus.style.animationName = '';
      }else{
        this.uranus.style.animationName = 'rotate';
      }
    }else if(value == 'neptunus'){
      if(this.neptunus.style.animationName == 'rotate'){
        this.neptunus.style.animationName = '';
      }else{
        this.neptunus.style.animationName = 'rotate';
      }
    }else if(value == 'asteroid'){
      if(this.asteroid.style.animationName == 'mubeng'){
        this.asteroid.style.animationName = '';
      }else{
        this.asteroid.style.animationName = 'mubeng';
      }
    }else if(value == 'komet'){
      if(this.komet.style.animationName == 'bright'){
        this.komet.style.animationName = '';
      }else{
        this.komet.style.animationName = 'bright';
      }
    }else if(value == 'bulan'){
      if(this.bulan.style.animationName == 'rotate'){
        this.bulan.style.animationName = '';
      }else{
        this.bulan.style.animationName = 'rotate';
      }
    }
  }

  openMenu() {
    this.menuCtrl.open();
  }

  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  user = '';
  img: any;
  newAgenda: any;
  ads: any;

  slideOpt = {
    spaceBetween: -15,
    centeredSlides: true,
    slidesPreview: 1.6,
    loop: true,
    autoplay: true,
    updateOnImageReady: true,
  };

  ngOnInit(){
    
    this.play();
    this.matahari = this.elem.namedItem('sun');
    this.merkurius = this.elem.namedItem('mercury');
    this.venus = this.elem.namedItem('venus');
    this.bumi = this.elem.namedItem('earth');
    this.mars = this.elem.namedItem('mars');
    this.jupiter = this.elem.namedItem('jupiter');
    this.saturnus = this.elem.namedItem('saturn');
    this.uranus = this.elem.namedItem('uranus');
    this.neptunus = this.elem.namedItem('neptune');
    this.asteroid = this.elem.namedItem('asteroid');
    this.komet = this.elem.namedItem('komet');
    this.bulan = this.elem.namedItem('moon');
  }


  swiped(event) {
    this.slideOpt.autoplay = true;
    this.slideOpt.loop = true;
    this.slides.startAutoplay();
  }

  

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeadlinePage } from '../headline/headline';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
btn(cat){
  this.navCtrl.setRoot(HeadlinePage, {category:cat})
}
}

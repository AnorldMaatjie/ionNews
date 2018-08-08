import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news'
/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {
  newsarr = [];
  headline;
  news = [];
  category =  this.navParams.get("category");
  constructor(public navCtrl: NavController, public navParams: NavParams,private NewsProvider:NewsProvider) {
    this.NewsProvider.getMessages('health').then((data:any)=>{

      console.log(data);

      for (let index = 0; index < 5; index++) {
       
        this.newsarr.push(data.articles[index]);
        
      }
      



    })}
  
  
  }

 



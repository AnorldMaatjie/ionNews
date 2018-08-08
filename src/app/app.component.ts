import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HeadlinePage } from '../pages/headline/headline';
import { HealthPage } from '../pages/health/health';
import { TechnologyPage } from '../pages/technology/technology';
import { CelebrityPage } from '../pages/celebrity/celebrity';
import { SciencePage } from '../pages/science/science';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // { title: 'List', component: ListPage },
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'Headline', component: HeadlinePage },
      { title: 'Health', component: HealthPage },
      { title: 'Celebrity', component: CelebrityPage},
      { title: 'Technology', component: TechnologyPage },
      { title: 'Sports', component: SciencePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

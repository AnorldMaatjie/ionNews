import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {HeadlinePage} from '../pages/headline/headline';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { TechnologyPage } from '../pages/technology/technology';
import { HealthPage } from '../pages/health/health';
import { CelebrityPage } from '../pages/celebrity/celebrity';
import { SciencePage } from '../pages/science/science';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HeadlinePage,
    TechnologyPage,
    SciencePage,
    HealthPage,
    CelebrityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HeadlinePage,
    TechnologyPage,
    SciencePage,
    HealthPage,
    CelebrityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}

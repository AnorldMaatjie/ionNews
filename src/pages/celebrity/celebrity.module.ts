import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebrityPage } from './celebrity';

@NgModule({
  declarations: [
    CelebrityPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebrityPage),
  ],
})
export class CelebrityPageModule {}

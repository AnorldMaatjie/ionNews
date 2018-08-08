import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadlinePage } from './headline';

@NgModule({
  declarations: [
    HeadlinePage,
  ],
  imports: [
    IonicPageModule.forChild(HeadlinePage),
  ],
})
export class HeadlinePageModule {}

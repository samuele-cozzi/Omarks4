import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Search } from '../../services/search.service';
import { SearchComponent } from './search.component';
import { SplitPipe } from '../../pipes/split.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    SplitPipe
   ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    SearchComponent
  ],
  providers:[
    Search
  ],
  entryComponents:[
    SearchComponent
  ]
})
export class SearchComponentModule {}
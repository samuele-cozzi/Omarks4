import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Search } from '../../services/search.service';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
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
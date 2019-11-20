import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponentModule } from '../../components/footer/footer.module';
import { AppsComponentModule } from '../../components/apps/apps.module';
import { SearchComponentModule } from '../../components/search/search.module';
import { Search } from '../../services/search.service';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    AppsComponentModule,
    SearchComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[
    Search
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

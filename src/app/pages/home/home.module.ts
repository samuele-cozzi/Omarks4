import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponentModule } from '../../components/footer/footer.module';
import { AppsComponentModule } from '../../components/apps/apps.module'
import { SettingsService} from '../../services/settings.service';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    AppsComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[
    SettingsService
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

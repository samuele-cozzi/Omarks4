import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NewsService} from '../../services/news.service';
import { SettingsService } from '../../services/settings.service';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [
    NewsComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    NewsComponent
  ],
  providers:[
    NewsService,
    SettingsService
  ],
  entryComponents:[
    NewsComponent
  ]
})
export class NewsComponentModule {}
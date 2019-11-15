import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { SettingsService} from '../../services/settings.service';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
   ],
  imports: [
    IonicModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    FooterComponent
  ],
  providers:[
    SettingsService
  ],
  entryComponents:[
    FooterComponent
  ]
})
export class FooterComponentModule {}
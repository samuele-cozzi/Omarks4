import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
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
  entryComponents:[
    FooterComponent
  ]
})
export class FooterComponentModule {}
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { Search} from '../../services/search.service';
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
    Search
  ],
  entryComponents:[
    FooterComponent,
    
  ]
})
export class FooterComponentModule {}
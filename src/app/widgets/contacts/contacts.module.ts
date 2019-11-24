import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { ContactsComponent } from './contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    ContactsComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    ContactsComponent
  ]
})
export class ContactsComponentModule {}
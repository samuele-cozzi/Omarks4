import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { AppsComponent } from './apps.component';

@NgModule({
  declarations: [
    AppsComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    AppsComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    AppsComponent
  ]
})
export class AppsComponentModule {}
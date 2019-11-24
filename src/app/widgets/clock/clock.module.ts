import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [
    ClockComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    ClockComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    ClockComponent
  ]
})
export class ClockComponentModule {}
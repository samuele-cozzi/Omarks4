import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { AgendaComponent } from './agenda.component';

@NgModule({
  declarations: [
    AgendaComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    AgendaComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    AgendaComponent
  ]
})
export class AgendaComponentModule {}
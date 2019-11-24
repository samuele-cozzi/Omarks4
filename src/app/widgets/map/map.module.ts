import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    MapComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    MapComponent
  ]
})
export class MapComponentModule {}
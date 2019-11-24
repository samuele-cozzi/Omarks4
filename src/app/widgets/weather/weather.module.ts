import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { DashboardService} from '../../services/dashboard.service';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
   ],
  imports: [
    IonicModule,
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    WeatherComponent
  ],
  providers:[
    DashboardService
  ],
  entryComponents:[
    WeatherComponent
  ]
})
export class WeatherComponentModule {}
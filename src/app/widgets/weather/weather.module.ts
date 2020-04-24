import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { WeatherService} from '../../services/weather.service';
import { SettingsService } from '../../services/settings.service';
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
    WeatherService,
    SettingsService
  ],
  entryComponents:[
    WeatherComponent
  ]
})
export class WeatherComponentModule {}
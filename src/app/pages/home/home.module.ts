import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponentModule } from '../../components/footer/footer.module';
import { AppsComponentModule } from '../../components/apps/apps.module';
import { SearchComponentModule } from '../../components/search/search.module';
import{ WeatherComponentModule } from '../../widgets/weather/weather.module';
import { ClockComponentModule } from '../../widgets/clock/clock.module';
import { NewsComponentModule } from '../../widgets/news/news.module';
import { ContactsComponentModule } from '../../widgets/contacts/contacts.module';
import { AgendaComponentModule } from '../../widgets/agenda/agenda.module';
import { MapComponentModule } from '../../widgets/map/map.module';
import { Search } from '../../services/search.service';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    AppsComponentModule,
    SearchComponentModule,
    WeatherComponentModule,
    ClockComponentModule,
    ContactsComponentModule,
    AgendaComponentModule,
    MapComponentModule,
    NewsComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[
    Search
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

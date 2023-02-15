import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { DistrictpagesComponent } from './pages/districtpages/districtpages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SinglepagesComponent } from './pages/singlepages/singlepages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    DistrictpagesComponent,
    ContactpagesComponent,
    SignuppagesComponent,
    NavbarComponent,
    FooterComponent,
    SinglepagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { DistrictpagesComponent } from './pages/districtpages/districtpages.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';

const routes: Routes = [
  {
    path:'Home',component:HomepagesComponent
  },

  {
    path:'contact',component:ContactpagesComponent
  },

  {
    path:'district',component:DistrictpagesComponent
  },

  {
    path:'signuppages',component:SignuppagesComponent
  },

  {
    path:'singlepages',component:SignuppagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

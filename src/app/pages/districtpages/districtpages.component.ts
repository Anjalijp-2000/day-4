import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-districtpages',
  templateUrl: './districtpages.component.html',
  styleUrls: ['./districtpages.component.css']
})
export class DistrictpagesComponent {
  
  constructor(private hero :HeroService ,private Router:Router ){}
  district= this.hero.getData()

  gotohere(id:any){
    localStorage.setItem('id',id)
    this.Router.navigate(['/single'])
  }

}

import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlepages',
  templateUrl: './singlepages.component.html',
  styleUrls: ['./singlepages.component.css']
})
export class SinglepagesComponent {
  single:any
  constructor(private hero:HeroService){}
  ngoninit():void{
    let pageid=localStorage.getItem('id');
    let num=Number(pageid)
    let singleDataArray=this.hero.getData();
    this.single=singleDataArray.filter(e=>e.id===num)
    console.log(this.single )
  }

}

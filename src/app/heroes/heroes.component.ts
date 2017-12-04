import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes }from '../mock-hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  hero : Hero = {
    id:1,
    name : 'sachin bajaj'
  };
  constructor(private heroService : HeroServiceService) { }
  ngOnInit() {
    this.getEquipmentData();
  }
  getEquipmentData ()
  {
    this.heroService.getData()
                    .subscribe(heroes => {
                      console.log(heroes.result.Equipemnts);
                      this.heroes = heroes.result.Equipemnts
                    })
  }
}


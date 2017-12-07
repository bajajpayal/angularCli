import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  hero1 : Hero;
  birthday = new Date(1993,27,6);

  constructor(private heroService : HeroServiceService) { }
  
  ngOnInit() {
    this.getEquipmentData();
  }
  onSelect(hero){
    console.log(hero,"heroeoreoreoreooreo")
    this.hero1 = hero

  }
  getEquipmentData ()
  {
  //   this.heroService.getData()
  //                   .subscribe(heroes => {
  //                     console.log(heroes.result.Equipemnts);
  //                     this.heroes = heroes.result.Equipemnts
  //                   })
   }
}


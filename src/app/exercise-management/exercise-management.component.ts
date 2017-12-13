import { Component, OnInit } from '@angular/core';
import { HeroServiceService} from '../hero-service.service';

@Component({
  selector: 'app-exercise-management',
  templateUrl: './exercise-management.component.html',
  styleUrls: ['./exercise-management.component.css']
})
export class ExerciseManagementComponent implements OnInit {

  public data;
  constructor(private heroService : HeroServiceService) { 
    console.log("hello ")
    this.heroService.getExerciseData()
    .subscribe((res=>
    {
      console.log(res.result,"resultltltl")
      if(res.statusCode == 200)
      {
        console.log(res.statusCode)
        this.data=  res.result.exercises;
        console.log(this.data);
      }
      
    }))
  }

  ngOnInit() {
  }

}

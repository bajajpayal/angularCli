import { Component, OnInit } from '@angular/core';
import { HeroServiceService} from '../hero-service.service';
import { trigger,state,transition,style,animate} from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[
    trigger('myAwesomeAnimation',[
      state ('small',style({
        transform :'scale(1)'
      })),
      state('large',style({
        transform: 'scale(2)'
      })),
      transition('small=>large',animate('100ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {
public data;
state : String = 'small';
clickme()
{
  this.state= (this.state ==='small' ? 'large' : 'small')
}

  constructor(private heroService : HeroServiceService) { 
    console.log("hello ")
    this.heroService.getWorkoutData()
    .subscribe((res=>
    {
      console.log(res,"resultltltl")
      if(res.statusCode == 200)
      {
        console.log(res.statusCode)
        this.data=  res.result.workouts;
      }
      
    }))
  }

  ngOnInit() {
    
  }

}

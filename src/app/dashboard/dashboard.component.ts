import { Component, OnInit } from '@angular/core';
import { HeroServiceService} from '../hero-service.service';
import { trigger,state,transition,style,animate, keyframes} from '@angular/animations';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
      transition('small<=>large',animate('100ms ease-in',keyframes([
        style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(70px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
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

  constructor(private heroService : HeroServiceService, public http : HttpClient) {

      var data = {};

    this.http.post<UserResponse>('http://localhost:8020/v1/boostAdmin/Workout/viewAllWorkouts',data)
    .subscribe(res=>
    {
      if(res.statusCode == 200)
      {
        this.data=  res.result.workouts;
      }

    })
  }

  ngOnInit() {

  }

}
interface UserResponse {
  statusCode: number;
  message: string;
  result: {
    workouts: object
  }
  }

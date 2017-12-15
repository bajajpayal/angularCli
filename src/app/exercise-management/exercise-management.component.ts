import { Component, OnInit } from '@angular/core';
import { HeroServiceService} from '../hero-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-exercise-management',
  templateUrl: './exercise-management.component.html',
  styleUrls: ['./exercise-management.component.css']
})
export class ExerciseManagementComponent implements OnInit {

  public data;
  constructor(private heroService : HeroServiceService, public http : HttpClient) {

      var data = {};

    this.http.post<UserResponse>('http://localhost:8020/v1/boostAdmin/exercise/getAllExercises',data)
    .subscribe(res=>
    {
      if(res.statusCode == 200)
      {
        this.data =  res.result.exercises;
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
    exercises : object
  }
  }

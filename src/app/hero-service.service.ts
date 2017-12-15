import { Injectable } from '@angular/core';

import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';
import { CommonServiceService} from './Service/commonService/common-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeroServiceService {
  baseURL :String;

  constructor(  private service: CommonServiceService) {
    this.baseURL = 'http://localhost:8020/v1/boostAdmin/';
  }

  // login (value)
  // {
  //  var body =  {role : 1}
  //  Object.assign(body,value)
  //   console.log(body,'bodyyyyyyy');
  //   var header ={};
  //   return this.service.post(this.baseURL+'login',body,header);
  // }

   forgetPassword (value)
   {
    return this.service.post(this.baseURL+'forgotpassword',value,{});
   }

   getWorkoutData()
   {

     var h = localStorage.getItem('token');

     var header = new HttpHeaders({
      'x-logintoken': h
     });

      var option = {headers: header};

      var data = {};
     return this.service.post(this.baseURL+'Workout/viewAllWorkouts',data,option);
   }

   getExerciseData ()
   {
    console.log("hello i am hererer")
     var header = new HttpHeaders();
      var h = localStorage.getItem('token');
      header.append('x-logintoken',h);
      var option = {headers: header};
      var data = {};
     return this.service.post(this.baseURL+'exercise/getAllExercises',data,option);
   }
}

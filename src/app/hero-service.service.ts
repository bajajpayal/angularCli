import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';
@Injectable()
export class HeroServiceService {

  constructor(public http : Http) { }

  login (value)
  {
   var body =  {role : 1}
   Object.assign(body,value)
    console.log(body,"bodyyyyyyy")
    return this.http.post('http://localhost:8020/v1/boostAdmin/login',body)
    .map((res: Response)=> res.json())
    .catch((error:any)=> {
      try{
        return(Observable.throw(error.json()));
      }catch(jsonError)
      {
        console.log(jsonError,"jsonerrorrorroo")
        return(jsonError);
      }
    })
  };
   forgetPassword (value)
   {
     return this.http.put('http://localhost:8020/v1/boostAdmin/forgotpassword',value)
      .map((res: Response)=> res.json())
      .catch((error:any)=>{
        try{
          return (Observable.throw(error.json()));
        }catch(jsonError)
        {
          console.log(jsonError,"jsonerrorrorroo")
          return(jsonError);
        }
      })
   }
   getWorkoutData()
   {
     console.log("hello i am hererer")
     var header = new Headers();
     header.append('x-logintoken','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xMV82KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjMuMC4zMjM5Ljg0IFNhZmFyaS81MzcuMzYiLCJlbWFpbCI6ImJvb3N0YWRtaW5AeW9wbWFpbC5jb20iLCJyZW1vdGVBZGRyZXNzIjoiMTI3LjAuMC4xIiwicm9sZSI6MSwiaWQiOiI1OWMzNjM0MWJhY2U4MzE0ODg4YmNhNDkiLCJpYXQiOjE1MTMwNTk0NjcsImV4cCI6MTUxNTY1MTQ2N30.iELC8YXeCHr3ZCXLmhzgcgHjCVQELZbLMN5M24dJGSCAbHnV79HRKrc341woQRpHvlsS_zn5HCIM2j3ezxUMag');

     return this.http.post('http://localhost:8020/v1/boostAdmin/Workout/viewAllWorkouts',{},{headers: header})
     .map((res: Response)=> res.json())
     .catch((error:any)=> {
       try{
         return(Observable.throw(error.json()));
       }catch(jsonError)
       {
         console.log(jsonError,"jsonerrorrorroo")
         return(jsonError);
       }
     })
   }
   getExerciseData ()
   {
    console.log("hello i am hererer")
    var header = new Headers();
    header.append('x-logintoken','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xMV82KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjMuMC4zMjM5Ljg0IFNhZmFyaS81MzcuMzYiLCJlbWFpbCI6ImJvb3N0YWRtaW5AeW9wbWFpbC5jb20iLCJyZW1vdGVBZGRyZXNzIjoiMTI3LjAuMC4xIiwicm9sZSI6MSwiaWQiOiI1OWMzNjM0MWJhY2U4MzE0ODg4YmNhNDkiLCJpYXQiOjE1MTMwNTk0NjcsImV4cCI6MTUxNTY1MTQ2N30.iELC8YXeCHr3ZCXLmhzgcgHjCVQELZbLMN5M24dJGSCAbHnV79HRKrc341woQRpHvlsS_zn5HCIM2j3ezxUMag');

    return this.http.post('http://localhost:8020/v1/boostAdmin/exercise/getAllExercises',{},{headers: header})
    .map((res: Response)=> res.json())
    .catch((error:any)=> {
      try{
        return(Observable.throw(error.json()));
      }catch(jsonError)
      {
        console.log(jsonError,"jsonerrorrorroo")
        return(jsonError);
      }
    })
   }
}

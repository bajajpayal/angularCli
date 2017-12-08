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
}

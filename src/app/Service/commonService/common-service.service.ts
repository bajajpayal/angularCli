import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonServiceService {

  constructor(public http : HttpClient) {
   }

  post (url,body,header)
  {
    console.log(url,body,header,"url,body,header")
    return this.http.post<any>(url,body,header)
   // .map(res => res.json())
    // .catch((error:any)=> {
    //   try{
    //     return(Observable.throw(error.json()));
    //   }catch(jsonError)
    //   {
    //     console.log(jsonError,"jsonerrorrorroo")
    //     return(jsonError);
    //   }
    // })
  }

  get (url)
  {
    return this.http.get<any>(url)
    // .map((res: Response)=> res.json())
    // .catch((error:any)=> {
    //   try{
    //     return(Observable.throw(error.json()));
    //   }catch(jsonError)
    //   {
    //     console.log(jsonError,"jsonerrorrorroo")
    //     return(jsonError);
    //   }
    // })
  }

  delete (url,body)
  {
    return this.http.delete<any>(url,body)
    // .map((res: Response)=> res.json())
    // .catch((error:any)=> {
    //   try{
    //     return(Observable.throw(error.json()));
    //   }catch(jsonError)
    //   {
    //     console.log(jsonError,"jsonerrorrorroo")
    //     return(jsonError);
    //   }
    // })
  }

  put (url,body)
  {
    return this.http.put<any>(url,body)
    // .map((res: Response)=> res.json())
    // .catch((error:any)=>{
    //   try{
    //     return (Observable.throw(error.json()));
    //   }catch(jsonError)
    //   {
    //     console.log(jsonError,"jsonerrorrorroo")
    //     return(jsonError);
    //   }
    // })
  }
}


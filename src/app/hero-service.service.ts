import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class HeroServiceService {

  constructor(public http : Http) { }

  getData ()
  {
    let data ={
      'x-logintoken' :'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZneW1AeW9wbWFpbC5jb20iLCJyb2xlIjoyLCJpZCI6IjVhMDE1NmU1Mjc1OGM4MTA5N2NiYjdlMyIsImlhdCI6MTUxMjA0NjgwMCwiZXhwIjoxNTE0NjM4ODAwfQ.XLMh01JuPSfkHLyUeXmUF8It5bn7Gha_TBFiMGC9H43wazk5I47zbxArHQ6s1Jgp1NG6OljVMftKZq9EW_vEZg'
    }
    var header = new Headers();
    header.append('x-logintoken' ,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZneW1AeW9wbWFpbC5jb20iLCJyb2xlIjoyLCJpZCI6IjVhMDE1NmU1Mjc1OGM4MTA5N2NiYjdlMyIsImlhdCI6MTUxMjA0NjgwMCwiZXhwIjoxNTE0NjM4ODAwfQ.XLMh01JuPSfkHLyUeXmUF8It5bn7Gha_TBFiMGC9H43wazk5I47zbxArHQ6s1Jgp1NG6OljVMftKZq9EW_vEZg')
    return this.http.post('http://boostdev.ignivastaging.com:8050/v1/openApi/getEquipmentsData',{},{headers : header})
    .map((res: Response)=> res.json())
    .catch((error:any)=> {
      try{
        return(Observable.throw(error.json()));
      }catch(jsonError)
      {
        return(jsonError);
      }
    })
  }
}

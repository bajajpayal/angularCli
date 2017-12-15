import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup } from '@angular/forms';
import { HeroServiceService } from '../hero-service.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http : HttpClient,private builder: FormBuilder, private heroService : HeroServiceService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token'))
    {
      this.router.navigate(['/header']);
    }
  }
  email = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ])
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(8)
  ])
  loginForm : FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });


  login(value)
  {
    console.log(value);
    var body =  {role : 1}
    Object.assign(body,value)
     console.log(body,'bodyyyyyyy');
    this.http.post<UserResponse>('http://localhost:8020/v1/boostAdmin/login',body)
    .subscribe(res=>
    {
      this.router.navigate(['/header']);
      if(res.statusCode == 200)
      {
        alert(JSON.stringify(res.message));
        localStorage.setItem('token', res.result.token);
        this.router.navigate(['/header']);
      }
      else{
        alert(res.message);
      }
    })
  }
}
interface UserResponse {
  statusCode: number;
  message: string;
  result: {
    token: string
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup } from '@angular/forms';
import { HeroServiceService } from '../hero-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder : FormBuilder, private heroService : HeroServiceService, private router: Router) { }

  ngOnInit() {
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
    this.heroService.login(value)
    .subscribe(res=>
    {
      console.log(res);
      if(res.statusCode == 200)
      {
        alert(res.message);
        this.router.navigate(['/dashboard']);
      }
      else{
        alert(res.message);
      }
    })
  }
}

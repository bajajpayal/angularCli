import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { HeroServiceService} from '../hero-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor( private builder: FormBuilder, private heroService : HeroServiceService , private router: Router) {  }

  ngOnInit() {
  }
  email = new FormControl('',[
    Validators.required
  ]);
  forgetForm: FormGroup = this.builder.group({
    email: this.email
  })
  forget(value)
  {
    console.log(value);
    this.heroService.forgetPassword(value)
      .subscribe(res=>
      {
        console.log(res);
        this.forgetForm.value.email = '';
        alert(res.message);
        this.router.navigate(['/login']);
      })
  }
}

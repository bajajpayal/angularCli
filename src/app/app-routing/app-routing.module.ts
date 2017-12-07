import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Component } from '@angular/core/src/metadata/directives';
import { LoginComponent } from '../login/login.component';
import { ForgetpasswordComponent }  from '../forgetpassword/forgetpassword.component';

const routes : Routes =[
  { path:'hero',component: HeroesComponent},
  { path : 'login', component : LoginComponent},
  { path : 'forget', component : ForgetpasswordComponent},
  { path : '', redirectTo:'/login',pathMatch:'full'}
]
@NgModule({
  exports :[RouterModule],
  imports :[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

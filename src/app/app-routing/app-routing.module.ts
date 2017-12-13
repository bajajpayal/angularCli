import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Component } from '@angular/core/src/metadata/directives';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ForgetpasswordComponent }  from '../forgetpassword/forgetpassword.component';
import { HeaderComponent, headerChildRoutes} from '../header/header.component';
import { ExerciseManagementComponent} from '../exercise-management/exercise-management.component';
import { AuthService } from '../Service/auth/auth.service';

const routes : Routes =[
  { path:'hero',component: HeroesComponent},
  { path : 'login', component : LoginComponent},
  { path : 'forget', component : ForgetpasswordComponent},
  { path : 'header', component : HeaderComponent, canActivate: [AuthService],
    children: headerChildRoutes  
},
  { path : '', redirectTo:'/login',pathMatch:'full'}
]
@NgModule({
  exports :[RouterModule],
  imports :[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

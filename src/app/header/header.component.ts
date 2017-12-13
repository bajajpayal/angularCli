import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExerciseManagementComponent } from '../exercise-management/exercise-management.component';
import { AuthService } from '../Service/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit {
   
  constructor( private router : Router) { }

  ngOnInit() {
  }
  
}

export const headerChildRoutes : Routes= [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate: [AuthService]
  },
  {
    path :'exercise',
    component: ExerciseManagementComponent,
    canActivate: [AuthService]
  }
]

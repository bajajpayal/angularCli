import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroServiceService} from './hero-service.service';
import { HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseManagementComponent } from './exercise-management/exercise-management.component';
import { DataTableModule } from "angular2-datatable";
import { HeaderComponent } from './header/header.component';
import { AuthService} from './Service/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LoginComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    ExerciseManagementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [HeroServiceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

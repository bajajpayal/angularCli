import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Component } from '@angular/core/src/metadata/directives';
import { MessagesComponent} from '../messages/messages.component';

const routes : Routes =[
  { path:'hero/:id',component: HeroesComponent},
  { path : 'messages', component : MessagesComponent}
]
@NgModule({
  exports :[RouterModule],
  imports :[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

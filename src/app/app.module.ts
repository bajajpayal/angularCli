import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroServiceService} from './hero-service.service';
import { HttpModule} from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroServiceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

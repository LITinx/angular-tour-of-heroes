import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

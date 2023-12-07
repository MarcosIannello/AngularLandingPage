import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MoviesHomeDetailsComponent } from './Components/movies-home-details/movies-home-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MoviesDetailsPageComponent } from './pages/movies-details-page/movies-details-page.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterLink, 
    RouterLinkActive,
    CommonModule,
    NavbarComponent,
    AppComponent,
    MoviesHomeDetailsComponent,
    FormsModule,
    BrowserModule
  ]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { MoviesDetailsPageComponent } from './pages/movies-details-page/movies-details-page.component';
import { Component } from '@angular/core';
import { WatchlistComponent } from './Components/watchlist/watchlist.component';

export const routes: Routes = [
    {path: 'MoviesDetails', component: MoviesDetailsPageComponent},
    {path:'Watchlist', component: WatchlistComponent }
];

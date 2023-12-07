import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { __values } from 'tslib';
import { MovieModel } from '../../models/movieModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-home-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies-home-details.component.html',
  styleUrl: './movies-home-details.component.css'
})

export class MoviesHomeDetailsComponent {
  
  movie : MovieModel ={
    title: "",
    description: "",
    rating: 0,
    duration: "",
    genre: "",
    realeasedDate:"",
    trailerLink:"",
    movieImage:""
  }

  constructor(private store: StoreService){}

  ngAfterViewInit(): void {
    this.store.viewDetails$.subscribe((value)=>{
      if(value){
        const movieData = localStorage.getItem("movie");
          if (movieData !== null) {
            this.movie = JSON.parse(movieData);
            // console.log(this.movie);
          }
      }
    })
  }





}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieModel } from '../../models/movieModel';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';
import { Avengers,Tenet,Guardians,Spiderman,Knives_out } from '../../models/listOfMovies';
import { timer } from 'rxjs';

@Component({
  selector: 'app-movies-details-page',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './movies-details-page.component.html',
  styleUrl: './movies-details-page.component.css'
})

export class MoviesDetailsPageComponent {

  public movie: MovieModel = {
    title: "",
    description: "",
    rating: 0,
    duration: "",
    genre: "",
    realeasedDate: "",
    trailerLink: "",
    movieImage: ""
  }

  lWatchList: MovieModel[] = [];
  
  
  public movieName = localStorage.getItem("movieTitle");
  public inWatchList = false;
  
  constructor(private store: StoreService) { }
  
  imgdiv: Element = document.getElementById("Movieimg")!;

  ngOnInit(): void {
    this.lWatchList = JSON.parse(localStorage.getItem("WatchList") || "[]");
    // console.log(this.lWatchList)
    this.store.setShowThumbnails(false);
    this.store.movie$.subscribe((value) => {
      if (value == null) {
        const movieData = localStorage.getItem("movie");
        if (movieData) {
          this.movie = JSON.parse(movieData);
        }
      } else {
        this.movie = value;
      }

      if(this.lWatchList.find(m=>m.title == this.movie.title)){
        this.inWatchList = true;
      }

    });
  }

  addToWatchList(movie: MovieModel){
    if(this.lWatchList.find(m=>m.title == movie.title)){
      alert("Movie already in WatchList");
      return;
    }
    this.lWatchList.push(movie);
    localStorage.setItem("WatchList", JSON.stringify(this.lWatchList));
    alert(`The movie ${movie.title} was added to WatchList`);
  }

  message(){
    alert("To manage your WatchList, please go to WatchList page");
  }
}

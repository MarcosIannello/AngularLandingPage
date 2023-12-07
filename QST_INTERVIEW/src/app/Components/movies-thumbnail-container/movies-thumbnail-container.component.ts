import { Component,OnInit, ElementRef} from '@angular/core';
import { Avengers, Spiderman, Tenet, Guardians, Knives_out } from '../../models/listOfMovies';
import { MovieModel } from '../../models/movieModel';
import { StoreService } from '../../services/store.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-movies-thumbnail-container',
  standalone: true,
  imports: [],
  templateUrl: './movies-thumbnail-container.component.html',
  styleUrl: './movies-thumbnail-container.component.css'
})

export class MoviesThumbnailContainerComponent {
  
  public lmovies: MovieModel[] = [Spiderman, Avengers,Tenet,Guardians,Knives_out];
  

  constructor(private store: StoreService, private router: Router){}


  public sendMovieDetails(movieTitle: string) {
    // console.log(this.lmovies);
    let movie = this.lmovies.find((m) => m.title === movieTitle)
    localStorage.setItem("movie", JSON.stringify(movie));
    this.store.setViewDetails(true);
    console.log(localStorage.getItem("movie"));
  }
  
  public goToMoviePage(movieTitle: string){
    // localStorage.setItem("movieTitle", movieTitle);
    let movie = this.lmovies.find((m) => m.title === movieTitle)
    this.store.setMovieForPage(movie);
    this.router.navigate(['/MoviesDetails']);
    this.store.setShowThumbnails(false);
    this.hideDetails();
  }

  hideDetails(){
    this.store.setViewDetails(false);
  }
}

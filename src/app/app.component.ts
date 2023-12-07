import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { MoviesThumbnailContainerComponent } from "./Components/movies-thumbnail-container/movies-thumbnail-container.component";
import { MoviesHomeDetailsComponent } from "./Components/movies-home-details/movies-home-details.component";
import { StoreService } from './services/store.service';
import { MoviesDetailsPageComponent } from './pages/movies-details-page/movies-details-page.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, MoviesThumbnailContainerComponent, MoviesHomeDetailsComponent, MoviesDetailsPageComponent,RouterOutlet]
})

export class AppComponent {
  title = 'QST_INTERVIEW';

  public viewMovieDetails: boolean = false;
  public visible: boolean = true;


  constructor(private store: StoreService, private router:Router){
  }

  ngOnInit(): void {
    // this.store.setShowThumbnails(true);
    this.store.viewDetails$.subscribe((value)=>{
      this.viewMovieDetails = value;
      // console.log(this.viewMovieDetails);
    })

    this.store.showThumbnails$.subscribe((value)=>{
      this.visible = value;
    })
  }

  ngAfterViewInit(): void {
        
  }

}



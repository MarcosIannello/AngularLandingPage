import { ChangeDetectorRef, Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CommonModule,NgFor } from '@angular/common';
import { MovieModel } from '../../models/movieModel';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {

  constructor(private store:StoreService, private cdr: ChangeDetectorRef){}
  
  public WatchList: MovieModel[] = [];

  ngOnInit(): void {
    this.WatchList = JSON.parse(localStorage.getItem("WatchList") || "[]"); 
    console.log(this.WatchList);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  deleteFromWatchlist(movie:MovieModel){
    let index = this.WatchList.indexOf(movie);
    this.WatchList.splice(index,1);
    localStorage.setItem("WatchList",JSON.stringify(this.WatchList));
    alert("Movie Deleted from Watchlist");
    this.cdr.detectChanges();
  }
}

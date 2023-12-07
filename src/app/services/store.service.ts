import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer,delay,take, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  
  private viewDetails =  new BehaviorSubject<boolean>(false);
  public viewDetails$ = this.viewDetails.asObservable();
  private showThumbnails =  new BehaviorSubject<boolean>(true);
  public showThumbnails$ = this.showThumbnails.asObservable();
  private movie = new BehaviorSubject<any>(null);
  public movie$ = this.movie.asObservable();

  constructor() { }

  public setViewDetails(value:boolean){
    this.viewDetails.next(value);
    // timer(3000)
    //   .pipe(
    //     take(1), 
    //     delay(0) 
    //   )
    //   .subscribe(() => {
    //     if(value == true){
    //       this.viewDetails.next(false);
    //     }//else{
    //     //   this.viewDetails.next(true);
    //     // }
    //   });
  }

  public setShowThumbnails(value:boolean){
    this.showThumbnails.next(value);
  }

  public setMovieForPage(movie: any){
    this.movie.next(movie);
  }


}

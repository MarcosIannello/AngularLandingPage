import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private router: Router, private store: StoreService) { }

  goToGITRepository(){
    window.open("https://github.com/MarcosIannello/QST_Angular_Interview");
  }
  
  goToHome(){
    this.router.navigate(['/']);
    this.store.setShowThumbnails(true);
  }

  goToWatchlist(){
    this.router.navigate(['/Watchlist']);
    this.store.setShowThumbnails(false);
  }

}

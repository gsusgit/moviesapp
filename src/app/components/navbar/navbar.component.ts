import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  searchMovie(text: string): any {
    if (text.trim().length === 0) {
      return;
    } else {
      let searchOK = this.router.navigate(['/search', text]);
      if (!searchOK) {
        return;
      }
    }
  }

}

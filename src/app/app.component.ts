import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'moviesapp';
  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router
  ) {
    gtmService.addGtmToDom();
  }
  ngOnInit(): void {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}

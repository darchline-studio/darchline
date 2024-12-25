import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading = false;

  constructor(private router: Router) {}

  /**
   * Subscribes to router events to show/hide the loader based on navigation start/end events.
   * Optional delay of 500ms is added to hide the loader for a smoother transition.
   */
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => (this.isLoading = false), 1000); // Optional delay for smooth transition
      }
    });
  }
}

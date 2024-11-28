import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./features/home/landing/landing.component";

@Component({
  selector: 'app-root',
  imports: [LandingComponent],
  template: `
    <app-landing />
  `
})
export class AppComponent {
  title = 'api-formativa';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  template: `

    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class App {
  protected readonly title = signal('Test');
}

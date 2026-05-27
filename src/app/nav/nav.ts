import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>  
    `,
})
export class Nav {}

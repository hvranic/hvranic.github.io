import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <button mat-button [routerLink]="['/home']">Home</button>
      <button mat-button [routerLink]="['/user']">User</button>  
      <span class="example-spacer"></span>
      <button mat-button [routerLink]="['/login']">Logout</button>
    </mat-toolbar>
    `,
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
  `,
})
export class Nav {}

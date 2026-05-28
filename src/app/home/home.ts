import { Component, inject } from '@angular/core';
import { CarService } from '../carservice';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  template: ` 
  <app-nav></app-nav>
  <p>Car Listing: {{ display }}</p> 
  <p><mat-form-field class="example-full-width">
      <mat-label>First name</mat-label>
      <input matInput>
    </mat-form-field></p> `,
    imports: [MatFormFieldModule, MatInputModule, Nav],
})
export class Home {
    carService = inject(CarService);
    display = this.carService.getCars().join(' ⭐️ ');
}

/*
      <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
*/
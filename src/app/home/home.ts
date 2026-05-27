import { Component, inject } from '@angular/core';
import { CarService } from '../carservice';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  template: ` 
      <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
  <p>Car Listing: {{ display }}</p> 
  <p><mat-form-field class="example-full-width">
      <mat-label>First name</mat-label>
      <input matInput>
    </mat-form-field></p> `,
    imports: [MatFormFieldModule, MatInputModule, RouterLink],
})
export class Home {
    carService = inject(CarService);
    display = this.carService.getCars().join(' ⭐️ ');
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { CardService } from '../../services/card.service';
import { Car } from '../../class/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.renderCars();
  }

  protected renderCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  navigateToUpdateForm(car: Car) {
    this.router.navigate(['/update-car', car.carId]);
  }
}

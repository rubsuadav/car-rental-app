import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

// local imports
import { CardService } from '../../services/card.service';
import { Car } from '../../class/car';

@Component({
  selector: 'app-update-car',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css',
})
export class UpdateCarComponent {
  car: Car = new Car();
  errors: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) {
    this.activateRoute.params.subscribe((params: any) => {
      this.car.carId = params.carId;
    });
  }

  protected onUpdateCar() {
    this.cardService.updateCar(this.car).subscribe({
      next: () => {
        Swal.fire({
          title: 'Success!',
          text: 'Car updated successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          this.router.navigate(['/cars']);
        });
      },
      error: (error) => {
        this.errors = error.error;
      },
    });
  }

  protected clearError(field: string) {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }
}

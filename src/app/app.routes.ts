import { Routes } from '@angular/router';

// local imports
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarFormComponent } from './pages/car-form/car-form.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';

export const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'update-car/:carId', component: UpdateCarComponent },
  { path: 'add-car', component: CarFormComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
];

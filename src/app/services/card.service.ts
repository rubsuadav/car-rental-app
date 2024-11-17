import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//local imports
import { API_URL } from '../../config';
import { Car } from '../class/car';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get(`${API_URL}/GetCars`);
  }

  createCar(car: Car): Observable<any> {
    return this.http.post(`${API_URL}/CreateNewCar`, car);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(`${API_URL}/UpdateCar`, this.mapToBackendCar(car));
  }

  deleteCar(carId: number): Observable<any> {
    return this.http.delete(`${API_URL}/DeleteCarbyCarId/${carId}`);
  }

  private mapToBackendCar(car: Car) {
    return {
      CarId: car.carId,
      Brand: car.brand,
      model: car.model,
      year: car.year,
      color: car.color,
      dailyRate: car.dailyRate,
      carImage: car.carImage,
      regNo: car.regNo,
    };
  }
}

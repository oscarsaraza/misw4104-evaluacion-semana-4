import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Vehiculo } from './vehiculo/vehiculo';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VehiculosService {
  private dataUrl = environment.dataUrl;

  constructor(private http: HttpClient) {}

  getVehiculos() {
    return this.http.get<Vehiculo[]>(this.dataUrl);
  }
}

import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo/vehiculo';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-lista-vehiculos',
  imports: [CommonModule],
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css',
})
export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculosService.getVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculos = vehiculos;
      },
    });
  }
}

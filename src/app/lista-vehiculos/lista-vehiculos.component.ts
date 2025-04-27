import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo/vehiculo';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../vehiculos.service';

type ConteoPorMarca = {
  marca: string;
  total: number;
};

@Component({
  selector: 'app-lista-vehiculos',
  imports: [CommonModule],
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css',
})
export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [];
  vehiculoSeleccionado: Vehiculo | null = null;
  conteoPorMarca: ConteoPorMarca[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculosService.getVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculos = vehiculos;
        this.calcularConteoPorMarca();
      },
    });
  }

  calcularConteoPorMarca() {
    this.conteoPorMarca = this.vehiculos.reduce((totales, vehiculo) => {
      const marcaExistente = totales.find((c) => c.marca === vehiculo.marca);
      if (marcaExistente) marcaExistente.total++;
      else totales.push({ marca: vehiculo.marca, total: 1 });
      return totales;
    }, [] as ConteoPorMarca[]);
  }

  verDetalle(vehiculoId: number) {
    this.vehiculoSeleccionado =
      this.vehiculos.find((vehiculo) => vehiculo.id === vehiculoId) || null;
  }
}

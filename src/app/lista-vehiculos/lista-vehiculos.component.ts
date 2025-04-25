import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo/vehiculo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-vehiculos',
  imports: [CommonModule],
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css',
})
export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [
    {
      id: 1,
      marca: 'Renault',
      linea: 'Kangoo',
      referencia: 'VU Express',
      modelo: 2017,
      kilometraje: 93272,
      color: 'Blanco',
      imagen:
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg',
    },
    {
      id: 2,
      marca: 'Chevrolet',
      linea: 'Spark',
      referencia: 'Life',
      modelo: 2018,
      kilometraje: 55926,
      color: 'Plata',
      imagen:
        'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg',
    },
    {
      id: 3,
      marca: 'Chevrolet',
      linea: 'Sail',
      referencia: 'LT Sedan',
      modelo: 2016,
      kilometraje: 94321,
      color: 'Rojo',
      imagen:
        'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png',
    },
  ];
}

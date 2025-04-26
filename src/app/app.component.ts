import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaVehiculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TuSegundazo.com';
  textoFooter =
    'Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo';
}

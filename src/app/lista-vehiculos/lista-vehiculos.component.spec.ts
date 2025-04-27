import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ListaVehiculosComponent } from './lista-vehiculos.component';

describe('ListaVehiculosComponent', () => {
  let component: ListaVehiculosComponent;
  let fixture: ComponentFixture<ListaVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVehiculosComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVehiculosComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      {
        id: 1,
        marca: 'Renault',
        linea: 'Kangoo',
        referencia: 'Kangoo 1.6',
        modelo: 2020,
        kilometraje: 20000,
        color: 'Blanco',
        imagen: '',
      },
      {
        id: 1,
        marca: 'Toyota',
        linea: 'Corolla',
        referencia: 'Corolla 1.8',
        modelo: 2020,
        kilometraje: 20000,
        color: 'Rojo',
        imagen: '',
      },
      {
        id: 1,
        marca: 'Chevrolet',
        linea: 'Onix',
        referencia: 'Onix 1.0',
        modelo: 2020,
        kilometraje: 20000,
        color: 'Azul',
        imagen: '',
      },
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('La tabla se crea con tres filas y el encabezado', () => {
    // 1 fila de encabezado + 3 filas de vehiculos
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });
});

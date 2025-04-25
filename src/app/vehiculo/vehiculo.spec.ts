import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    expect(
      new Vehiculo(
        1,
        'Renault',
        'Kangoo',
        'VU Express',
        2017,
        93272,
        'Blanco',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      )
    ).toBeTruthy();
  });
});

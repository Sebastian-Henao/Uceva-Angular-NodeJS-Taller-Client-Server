import { Midlaner } from '../interfaces/midlaner.interface';

/** Fixtures estáticos para pruebas; la página obtiene los datos desde la API. */
export const MIDLANERS_MOCK: Midlaner[] = [
  {
    id: 1,
    nombre: 'Ahri',
    titulo: 'La Raposa de Nueve Colas',
    clase: 'Mago',
    region: 'Jonia',
    dificultad: 'Moderada',
    winrate: 52.3,
    pickrate: 12.1,
    banrate: 5.4,
  },
  {
    id: 20,
    nombre: 'Zed',
    titulo: 'El Maestro de las Sombras',
    clase: 'Asesino',
    region: 'Jonia',
    dificultad: 'Alta',
    winrate: 49.8,
    pickrate: 9.6,
    banrate: 18.2,
  },
];
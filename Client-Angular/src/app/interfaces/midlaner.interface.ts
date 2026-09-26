/**
 * Datos de un campeón de la línea central recibidos desde la API.
 * Los nombres y tipos corresponden al modelo Midlaner del servidor.
 */
export interface Midlaner {
  /** Identificador único del campeón. */
  id: number;

  /** Nombre del campeón. */
  nombre: string;

  /** Título oficial del campeón. */
  titulo: string;

  /** Clase o rol principal del campeón. */
  clase: string;

  /** Región del campeón en Runaterra. */
  region: string;

  /** Nivel de dificultad del campeón. */
  dificultad: string;

  /** Porcentaje de victorias generado dinámicamente. */
  winrate: number;

  /** Porcentaje de selección generado dinámicamente. */
  pickrate: number;

  /** Porcentaje de bloqueos generado dinámicamente. */
  banrate: number;
}

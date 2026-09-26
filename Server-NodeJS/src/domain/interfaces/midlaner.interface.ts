export interface Midlaner {
    /** Identificador único del campeón */
    id: number;

    /** Nombre del campeón */
    nombre: string;

    /** Título oficial del campeón */
    titulo: string;

    /** Clase o rol principal en el juego (ej. Mago, Asesino) */
    clase: string;

    /** Región a la que pertenece en el lore de Runaterra */
    region: string;

    /** Dificultad de uso (Baja, Moderada, Alta) */
    dificultad: string;

    /** Porcentaje de victorias (Dato variable simulado) */
    winrate: number;

    /** Porcentaje de selección (Dato variable simulado) */
    pickrate: number;

    /** Porcentaje de bloqueos (Dato variable simulado) */
    banrate: number;
}

/** 
 * Base de datos estática con los 20 campeones midlaners reales.
 * Estos datos no variarán, solo las estadísticas (winrate, etc.) se generarán con faker.
 */
export const MIDLANERS_BASE_DATA: Omit<Midlaner, 'winrate' | 'pickrate' | 'banrate'>[] = [
    { id: 1,  nombre: 'Ahri', titulo: 'La Raposa de Nueve Colas', clase: 'Mago', region: 'Jonia', dificultad: 'Moderada' },
    { id: 2,  nombre: 'Akali', titulo: 'La Asesina Furtiva', clase: 'Asesino', region: 'Jonia', dificultad: 'Alta' },
    { id: 3,  nombre: 'Anivia', titulo: 'La Criofénix', clase: 'Mago', region: 'Freljord', dificultad: 'Alta' },
    { id: 4,  nombre: 'Annie', titulo: 'La Hija de la Oscuridad', clase: 'Mago', region: 'Noxus', dificultad: 'Baja' },
    { id: 5,  nombre: 'Aurelion Sol', titulo: 'El Forjador de Estrellas', clase: 'Mago', region: 'Targon', dificultad: 'Moderada' },
    { id: 6,  nombre: 'Azir', titulo: 'El Emperador de las Arenas', clase: 'Mago', region: 'Shurima', dificultad: 'Alta' },
    { id: 7,  nombre: 'Cassiopeia', titulo: 'El Abrazo de la Serpiente', clase: 'Mago', region: 'Noxus', dificultad: 'Alta' },
    { id: 8,  nombre: 'Ekko', titulo: 'El Joven que Despedazó el Tiempo', clase: 'Asesino', region: 'Zaun', dificultad: 'Moderada' },
    { id: 9,  nombre: 'Fizz', titulo: 'El Gamberro de las Mareas', clase: 'Asesino', region: 'Aguasturbias', dificultad: 'Moderada' },
    { id: 10, nombre: 'Galio', titulo: 'El Coloso', clase: 'Tanque', region: 'Demacia', dificultad: 'Moderada' },
    { id: 11, nombre: 'Heimerdinger', titulo: 'El Inventor Venerado', clase: 'Mago', region: 'Piltover', dificultad: 'Alta' },
    { id: 12, nombre: 'Irelia', titulo: 'La Cuchilla Danzante', clase: 'Luchador', region: 'Jonia', dificultad: 'Alta' },
    { id: 13, nombre: 'Katarina', titulo: 'La Daga Siniestra', clase: 'Asesino', region: 'Noxus', dificultad: 'Alta' },
    { id: 14, nombre: 'LeBlanc', titulo: 'La Maquiavélica', clase: 'Asesino', region: 'Noxus', dificultad: 'Alta' },
    { id: 15, nombre: 'Lissandra', titulo: 'La Bruja de Hielo', clase: 'Mago', region: 'Freljord', dificultad: 'Moderada' },
    { id: 16, nombre: 'Lux', titulo: 'La Dama Luminosa', clase: 'Mago', region: 'Demacia', dificultad: 'Moderada' },
    { id: 17, nombre: 'Malzahar', titulo: 'El Profeta del Vacío', clase: 'Mago', region: 'El Vacío', dificultad: 'Baja' },
    { id: 18, nombre: 'Orianna', titulo: 'La Doncella Mecánica', clase: 'Mago', region: 'Piltover', dificultad: 'Alta' },
    { id: 19, nombre: 'Syndra', titulo: 'La Soberana Oscura', clase: 'Mago', region: 'Jonia', dificultad: 'Moderada' },
    { id: 20, nombre: 'Zed', titulo: 'El Maestro de las Sombras', clase: 'Asesino', region: 'Jonia', dificultad: 'Alta' }
];

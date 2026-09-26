import { faker } from "@faker-js/faker";
import { Midlaner, MIDLANERS_BASE_DATA } from "../../../domain/interfaces/midlaner.interface";

/**
 * Servicio encargado de gestionar los midlaners de League of Legends.
 * 
 * @remarks
 * Combina datos estáticos reales de los campeones con estadísticas
 * dinámicas (winrate, pickrate, banrate) generadas a través de faker.js
 */
export class MidlanersService {

    /**
     * Obtiene el listado completo de los 20 midlaners con sus estadísticas generadas.
     * 
     * @returns Promesa que resuelve un arreglo de midlaners
     */
    public async getAllMidlaners(): Promise<Midlaner[]> {
        const midlaners: Midlaner[] = MIDLANERS_BASE_DATA.map(baseData => {
            return {
                ...baseData,
                // Generamos porcentajes aleatorios realistas con faker
                // Winrate suele estar entre 45% y 55%
                winrate: faker.number.float({ min: 45, max: 55, fractionDigits: 1 }),
                // Pickrate suele estar entre 1% y 20%
                pickrate: faker.number.float({ min: 1, max: 20, fractionDigits: 1 }),
                // Banrate puede variar desde muy poco hasta más del 30%
                banrate: faker.number.float({ min: 0.5, max: 30, fractionDigits: 1 })
            };
        });

        return Promise.resolve(midlaners);
    }
}

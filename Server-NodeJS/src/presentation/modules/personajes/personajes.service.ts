import { faker } from "@faker-js/faker";
import { Personaje, RolCategoria } from "../../../domain/interfaces/personaje.interface";

/**
 * Servicio encargado de la generacion y gestion de personajes.
 * 
 * @remarks
 * Este servicio utiliza la libreria 'faker' para generar personajes
 * ficticios, principalmente con fines de prueba y demostracion
 */
export class PersonajesService {

    /**
     * Categorias de roles disponibles para los personajes
     * 
     * @remarks
     * Se utilizan para signar aleatoriamente una categoria a cada
     * personaje generado
     */
    private roles: RolCategoria[] = [
        'Explorador',
        'Ilusionista',
        'Jefe',
        'Ladron',
        'Vanguardia'
    ];

    /**
     * Obtiene un listado de personajes generados dinamicamente
     * 
     * @param countPersonajes Cantidad de personajes a generar
     * @returns Promsera que resuleve un arreglo de personajes
     */
    public async getAllPersonajes(countPersonajes: number): Promise<Personaje[]> {
        const personajes: Promise<Personaje>[] = [];

        for(let i = 1; i <= countPersonajes; i++){
            personajes.push(this.generatePersonaje(i));
        }

        return Promise.all(personajes);
    }

    /**
     * Genera un personaje ficticio
     * 
     * @param id Identificador unico del personaje
     * @returns Ppromersa que resuelve un personaje generado
     */
    private generatePersonaje(id: number): Promise<Personaje>{
        return Promise.resolve({
            id,
            nombre: faker.person.fullName(),
            alias: faker.word.noun(),
            juego: faker.company.name(),
            habilidad: faker.commerce.productName(),
            rol: faker.helpers.arrayElement(this.roles),
        });
    }
}
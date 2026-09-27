/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Personaje:
 *       type: object
 *       description: Representa un personaje del sistema
 *       required:
 *         - id
 *         - nombre
 *         - alias
 *         - juego
 *         - habilidad
 *         - rol
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Aiko
 *         alias:
 *           type: string
 *           example: La sombra
 *         juego:
 *           type: string
 *           example: Cyber Realm
 *         habilidad:
 *           type: string
 *           example: Teletransportación
 *         rol:
 *           type: string
 *           enum:
 *             - Vanguardia
 *             - Ladron
 *             - Jefe
 *             - Ilusionista
 *             - Explorador
 *           example: Vanguardia
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Midlaner:
 *       type: object
 *       description: Representa un personaje de carril central (Midlaner) de League of Legends
 *       required:
 *         - id
 *         - nombre
 *         - titulo
 *         - clase
 *         - region
 *         - dificultad
 *         - winrate
 *         - pickrate
 *         - banrate
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Ahri
 *         titulo:
 *           type: string
 *           example: La Raposa de Nueve Colas
 *         clase:
 *           type: string
 *           example: Mago
 *         region:
 *           type: string
 *           example: Jonia
 *         dificultad:
 *           type: string
 *           example: Moderada
 *         winrate:
 *           type: number
 *           format: float
 *           example: 52.3
 *         pickrate:
 *           type: number
 *           format: float
 *           example: 12.1
 *         banrate:
 *           type: number
 *           format: float
 *           example: 5.4
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Appointment:
 *       type: object
 *       description: Representa una cita médica del sistema
 *       required:
 *         - id
 *         - patientName
 *         - doctorName
 *         - specialty
 *         - scheduledAt
 *         - status
 *         - reason
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         patientName:
 *           type: string
 *           example: Ana Gómez
 *         doctorName:
 *           type: string
 *           example: Carlos Pérez
 *         specialty:
 *           type: string
 *           example: Cardiología
 *         scheduledAt:
 *           type: string
 *           format: date-time
 *           example: 2026-10-15T09:30:00.000Z
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Confirmada
 *             - Cancelada
 *           example: Confirmada
 *         reason:
 *           type: string
 *           example: Control preventivo
 */

export {};
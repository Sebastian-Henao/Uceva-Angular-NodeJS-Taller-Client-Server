# Documentación técnica del backend

## Arquitectura

El backend está organizado por responsabilidades:

```text
src/
├── app.ts                         # Punto de entrada de la aplicación
├── config/                        # Variables de entorno y Swagger
├── domain/
│   ├── erros/                     # Errores HTTP y manejo centralizado
│   └── interfaces/                # Contratos de los datos
└── presentation/
    ├── routes.ts                  # Registro de rutas principales
    ├── server.ts                  # Configuración del servidor HTTP
    └── modules/                   # Módulos por funcionalidad
        ├── appointments/
        ├── personajes/
        ├── products/
        └── users/
```

Cada módulo separa sus responsabilidades en servicio, controlador y rutas:

- El servicio genera o procesa los datos.
- El controlador recibe la petición y construye la respuesta HTTP.
- Las rutas registran endpoints y contienen la documentación OpenAPI.

## Ejecución

Desde esta carpeta:

```powershell
npm install
npm run start
```

El servidor queda disponible en `http://localhost:3000`.

## APIs disponibles

| Módulo | Método | Endpoint |
| --- | --- | --- |
| Usuarios | GET | `/api/users/:countUsers` |
| Productos | GET | `/api/products/:countProducts` |
| Personajes | GET | `/api/personajes/:countPersonajes` |
| Citas | GET | `/api/appointments/:countAppointments` |

El endpoint de citas acepta cantidades enteras entre 1 y 50. Ejemplo:

```text
GET http://localhost:3000/api/appointments/10
```

Los datos se generan bajo demanda con `@faker-js/faker`; no se utiliza una base de datos persistente en este taller.

## Swagger

La documentación interactiva está disponible en:

```text
http://localhost:3000/api/docs
```

Los esquemas de respuesta se encuentran en `src/config/swagger.schemas.ts` y la documentación de cada endpoint en sus respectivos archivos `*.routes.ts`.

## Manejo de errores

Los controladores delegan el tratamiento de errores en `HandleError`. Los parámetros inválidos producen una respuesta `400` y los errores no controlados producen una respuesta `500` con un formato JSON uniforme.

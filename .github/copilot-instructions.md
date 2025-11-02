## Resumen rápido

Este repositorio es una aplicación Angular (CLI v20.x) llamada "tienda". Código fuente en `src/`, assets en `public/`. Build/tests están en `package.json` y `angular.json`.

Principales puntos que un agente debe conocer para ser productivo:

- Proyecto: aplicación Angular standalone (prefijo `app`) generada por Angular CLI.
- Entradas relevantes: `src/main.ts`, `src/app/app.ts`, `src/app/app.config.ts`, `src/app/app.routes.ts`.
- Scripts útiles (desde la raíz):
  - `npm start` → `ng serve` (dev server en http://localhost:4200)
  - `npm run build` → `ng build` (salida en `dist/`)
  - `npm run watch` → build en modo watch
  - `npm test` → `ng test` (Karma)

## Arquitectura y decisiones importantes

- Single app: `angular.json` declara un solo proyecto `tienda` con `sourceRoot: src`.
- Enrutamiento: `src/app/app.routes.ts` exporta `routes: Routes = []`. El router se proporciona en `src/app/app.config.ts` con `provideRouter(routes)`. Cuando añadas rutas, actualiza `app.routes.ts` y considera lazy-loading con `loadComponent` o módulos separados.
- Standalone components: `src/app/app.ts` usa el nuevo patrón standalone (la propiedad `imports` en el decorator). Cuando crees componentes, preferir el estilo standalone para mantener consistencia.
- Señales y change detection: el proyecto usa `signal()` en `App` y `provideZoneChangeDetection({ eventCoalescing: true })` en `app.config.ts`. Ten cuidado al hacer cambios que dependan del ciclo de detección de Angular — la configuración de coalescencia puede agrupar eventos.
- Assets: `angular.json` incluye `public/` como `assets`. Coloca imágenes y archivos públicos en `public/` para que estén incluidos en builds.

## Patrones y convenciones del proyecto (extraíbles del código)

- Templates y estilos externos: componentes suelen usar `templateUrl` y `styleUrl` (ej. `src/app/app.ts` referencia `./app.html` y `./app.css`).
- CSS global: `src/styles.css` es el lugar para estilos globales.
- TypeScript y Angular versions: ver `package.json` (Angular ~20.3.x, TypeScript ~5.9.x). Evita dependencias incompatibles.

## Ejemplos rápidos y recomendaciones prácticas

- Añadir una ruta básica:
  - Edita `src/app/app.routes.ts` y exporta: `export const routes: Routes = [{ path: 'prod', loadComponent: () => import('./product.component').then(m => m.Product) }];`
  - Asegúrate que el componente `Product` sea standalone (decorador con `standalone: true` o `imports` correcto).

- Cambios que afectan al bundle/activos:
  - Para incluir archivos estáticos, ponlos en `public/` (no en `src/`).
  - Revisa `angular.json` si necesitas cambiar `tsConfig` o `assets`.

## Flujo de desarrollo y debugging

- Desarrollo local: `npm start` y abrir `http://localhost:4200`.
- Tests: `npm test` ejecuta Karma; revisa `tsconfig.spec.json` si hay problemas de typings.
- Debugging: usa Angular DevTools y Chrome DevTools. Para errores globales, `app.config.ts` ya habilita listeners con `provideBrowserGlobalErrorListeners()`.

## Archivos clave a revisar

- `src/app/app.ts` — componente raíz (ejemplo de standalone, Signal).
- `src/app/app.config.ts` — providers globales (router, change detection, error listeners).
- `src/app/app.routes.ts` — declaración de rutas (vacía ahora).
- `angular.json` — targets de build/serve/test (ver `defaultConfiguration`).
- `package.json` — scripts y dependencias.
- `public/` — assets incluidos en build.

Si alguna sección está poco clara o quieres que incluya más ejemplos concretos (por ejemplo: cómo añadir un servicio, o cómo estructurar módulos lazy-loaded), dime qué quieres y lo actualizo.

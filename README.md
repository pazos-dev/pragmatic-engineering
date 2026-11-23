# Pragmatic Engineering v3.0
Estándar personal para agentes de programación. Las instrucciones están en inglés y las pruebas en español.

## Instalación
Copia AGENTS.md y skills/ a la raíz de tu proyecto; fusiona instrucciones existentes. Registra la carpeta de la skill según tu agente. Las plantillas en config/ son opcionales: adapta y fusiona dependencias y configuraciones antes de instalar con pnpm.
Para Node ESM usa type: module y un tsconfig.json que extienda tsconfig.base.json. NodeNext requiere extensiones .js en imports relativos emitidos. Para Vite adapta moduleResolution.
Ejecuta pnpm exec vitest related --run src/ruta.ts y añade pruebas de integración afectadas explícitamente. No se garantiza detectar vínculos dinámicos.
La revisión semántica es obligatoria: lint no detecta toda sobreingeniería. Las configuraciones son plantillas y no han sido ejecutadas contra un proyecto real.

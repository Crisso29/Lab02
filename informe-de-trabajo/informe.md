# Informe de Revisión Estática — Laboratorio 02
## IS-489 Pruebas y Aseguramiento de Calidad de Software

---

## Datos del equipo

| Campo | Valor |
|-------|-------|
| Integrante | Crisólogo Aguilar Flores |
| Docente | Ing. Lizbeth Jaico Quispe |
| Fecha | 09/05/2026 |
| Módulo revisado | src/products.js |
| Repositorio | https://github.com/Crisso29/Lab02 |
| URL SonarCloud | https://sonarcloud.io/summary/overall?id=Crisso29_Lab02 |

---

## Herramientas utilizadas

- ESLint 10.x con reglas: eqeqeq, no-var, no-unused-vars, prefer-const
- SonarCloud — análisis automático conectado con GitHub
- Checklist manual (7 criterios)

---

## Flujo de trabajo
---

## Análisis ESLint — ANTES

❌ 8 problemas (4 errores, 4 advertencias)

![ESLint ANTES](../evidencias/eslint-ANTES.png)

---

## Análisis ESLint — DESPUÉS

✅ 0 problemas

![ESLint DESPUÉS](../evidencias/eslint-DESPUES.png)

---

## Análisis SonarCloud — ANTES

❌ 4 issues de Maintainability (High)

![SonarCloud ANTES](../evidencias/sonarcloud-ANTES.png)

---

## Análisis SonarCloud — DESPUÉS

✅ 0 issues

![SonarCloud DESPUÉS](../evidencias/sonarcloud-DESPUES.png)

---

## Issues reportados en GitHub

| # | Título | Severidad | Estado |
|---|--------|-----------|--------|
| #1 | Comparación == en lugar de === | Alta | ✅ Cerrado |
| #3 | Uso de var en lugar de const/let | Media | ✅ Cerrado |
| #4 | Precios negativos y nulos | Alta | ✅ Cerrado |
| #5 | calculateDiscount sin validación | Alta | ✅ Cerrado |

![Issues cerrados](../evidencias/issues-github.png)

---

## Checklist de Calidad Manual

| # | Criterio | Herramienta | Hallazgo | Severidad | Estado |
|---|----------|-------------|----------|-----------|--------|
| 01 | Comparaciones estrictas === | ESLint | Línea 14: usa == | Alta | ✅ |
| 02 | Variables con const/let | ESLint | Líneas 3,11,12,24: usa var | Media | ✅ |
| 03 | Precio nunca negativo | Manual | ID 3 tiene price: -50 | Alta | ✅ |
| 04 | Precio nunca null ni undefined | Manual | IDs 2 y 4 precio inválido | Alta | ✅ |
| 05 | calculateDiscount valida nulos | Manual | Sin validación — lanzaría NaN | Alta | ✅ |
| 06 | Documentación JSDoc | Sonar | Sin documentación | Baja | ✅ |
| 07 | Suite de pruebas .test.js | Manual | No existe archivo de pruebas | Media | ⏳ |

---

## PR mergeado

![PR mergeado](../evidencias/pr-mergeado.png)

---

## Propuesta de mejora

1. Validación en calculateDiscount para precios nulos o negativos ✅
2. Migrar var → const/let en todo el módulo ✅
3. Agregar JSDoc a todas las funciones ✅
4. Crear products.test.js en el siguiente Sprint ⏳

---

## Informe monográfico completo

📄 [Ver documento Word en Google Drive](ENLACE_AQUI)

---

## Conclusión

ESLint detectó errores de sintaxis y estilo como el uso de `==` en lugar
de `===` y el uso de `var` en lugar de `const/let`, siendo la primera
línea de defensa antes del commit. SonarCloud confirmó los mismos code
smells y proporcionó métricas más completas. Sin embargo, ninguna
herramienta detectó los defectos de lógica de negocio como precios
negativos, nulos o indefinidos, los cuales solo fueron detectados
mediante la revisión manual con checklist.
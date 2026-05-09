# Resultado QA — Análisis ESLint
## Información
| Campo | Valor |
|-------|-------|
| Fecha | 09/05/2026 |
| Rama analizada | DevCrisso |
| Archivo | src/products.js |
| QA Engineer | Crisólogo Aguilar Flores |
| Herramienta | ESLint 10.x |

---

## Resultado ESLint — ANTES de corregir

❌ 8 problemas encontrados (4 errores, 4 advertencias)

```
C:\Users\Intel\Desktop\LAB-QA\Lab02\src\products.js
   3:1   warning  Unexpected var, use let or const instead   no-var
  11:1   warning  Unexpected var, use let or const instead   no-var
  12:6   warning  Unexpected var, use let or const instead   no-var
  13:1   error    'console' is not defined                   no-undef
  14:20  error    Expected '===' and instead saw '=='        eqeqeq
  21:1   error    'console' is not defined                   no-undef
  24:1   warning  Unexpected var, use let or const instead   no-var
  28:1   error    'console' is not defined                   no-undef

✖ 8 problems (4 errors, 4 warnings)
  0 errors and 4 warnings potentially fixable with the --fix option.
```
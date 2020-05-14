/**
 * exhaustMap(() => observable$)
 * 
 * => Proyecta cada valor de origen en un Observable que se fusiona en el Observable 
 *    de salida solo si el Observable proyectado anterior se ha completado
 * 
 * Diagrama de canicas:
 * 
 * observable$ -(a)--------(x)--------(r)--------------------->
 *               |          |          |
 *             ---exhaustMap(() => interval$.pipe(take(3)))---
 *               |          |          |
 *               |          |           --(0)---(2)----------->
 *               |       ignorado
 *                -(0)---(1)---(2)--|------------------------->
 * 
 *    salida   ----(0)---(1)---(2)--|-----(0)---(2)----------->
 */
import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
)
    .subscribe(console.log);
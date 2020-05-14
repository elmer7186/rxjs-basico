/**
 * mergeMap()
 * 
 * => Permite mapear un observable a otros y emitir la salida de cada observable generado
 * 
 * Diagrama de canicas:
 * 
 * observable$ ---(a)----(x)-----------(r)-------------------
 *                 |      |             |
 *             -------mergeMap((val)=>interval(1000))--------
 *                 |      |             |
 *                 |      |              ------(r)-|---------
 *                 |       -----(a)---(b)------------(c)--|--
 *                  ----(0)---(1)---(2)-----(3)------------|-
 * 
 *   salida    ---------(0)---(1)a)-(2)b)---(3)(r)---(c)---|-
 */
import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3),
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// })

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
    .subscribe(console.log);
/**
 * auditTime(tiempo: number)
 * 
 * => Ignora los valores emitidos durante el 'tiempo' especificado para luego emitir el valor mas reciente
 *    esto se repite cada vez que se emite un nuevo valor
 * => El primer valor emitido dispara el auditTime, cuando audit time emite se suspende hasta que 
 *    el observable emita un nuevo valor
 * 
 * Diagrama de canicas:
 * 
 * --(a)--(b)---(c)---------(f)----------------->
 * 
 * ------------auditTime(2000)-----------------
 * 
 * ------------------(c)---------------------(f)
 *    |    2000 ms    |      |     2000 ms    |
 */
import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x }) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000),
).subscribe(console.log);
/**
 * sampleTime(tiempo: number)
 * 
 * => Emite el último valor emitido por un observable dentro de los intervalos de 'tiempo' especificado
 * 
 * Diagrama de canicas:
 * 
 * --(a)(b)--(c)------------------(h)----------->
 * 
 * -----------------sampleTime(2000)------------
 * 
 * -------------(c)-------------------------(h)-
 * |   2000 ms   |   2000 ms   |   2000 ms   |
 */
import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y })),
).subscribe(console.log);
/**
 * observable1$.pipe(
 *      sample(observable2$)
 * ).subscribe...
 * 
 * => Emite el último valor emitido por el 'observable1$' cuando el 'observable2$' emite valores
 * 
 * Diagrama de canicas:
 * 
 * observable1$ ---(a)(b)--(c)---------(h)---------->
 * 
 * observable2$ ---------------(x)-(y)-------(z)---->
 * 
 *              --------sample(observable2$)---------
 * 
 *    salida    ---------------(c)-----------(h)-----
 */
import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(500);

const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$),
).subscribe(console.log);
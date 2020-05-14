/**
 * throttleTime(tiempo: number)
 * 
 * => Emite un valor emitido por el Observable, luego ignora los valores de origen posteriores 
 *    durante los milisegundos especificados en 'tiempo', luego se repite este proceso
 * 
 * Diagrama de canicas:
 * 
 * --(a)(b)--(c)--------(x)-------------->
 * 
 * --------throttleTime(2000)------------
 * 
 * --(a)----------------(x)--------------
 *    |   2000 ms   |    |   2000 ms   |
 */
import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
    .subscribe(console.log);
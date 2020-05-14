/**
 * debounceTime(tiempo: number)
 * 
 * => Emite un valor de un observable solo después de que haya transcurrido un período de 'tiempo' particular 
 *    sin otra emision
 * 
 * Diagrama de canicas:
 * 
 * -(a)--(b)---(c)-----------------(f)(h)----------->
 * 
 * ---------------debounceTime(1000)-----------------
 * 
 * --------------------------(c)--------------------(h)
 *              |   1000 ms   |        |   1000 ms   |
 */
import { fromEvent } from "rxjs";
import { debounceTime, filter, map, pluck, distinct, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
);
//.subscribe(console.log);

// EJemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
    .subscribe(console.log);
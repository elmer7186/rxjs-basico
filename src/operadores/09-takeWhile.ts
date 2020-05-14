/**
 * takeWhile(funcion, incluye_ultimo?: boolean)
 * 
 * => Emite los valores emitidos por un observable mientras se cumpla la condición de la función
 * => 'incluye_ultimo' indica si se toma o no el valor cuando se deja de cumplir la condición
 */
import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({ y }) => y <= 150), //without include inclusive value
    takeWhile(({ y }) => y <= 150, true)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete'),
    })
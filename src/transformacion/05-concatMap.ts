/**
 * concatMap(() => observable$)
 * 
 * => Operador de aplanamiento que sirve para concatenar los observables
 *    resultantes que pueden fluir atraves de ese operador
 * => Encola los observables proyectados para operarse uno a la vez
 * 
 * Diagrama de canicas:
 * 
 * observable$ --(a)---(x)------(r)------------------------->
 *                |     |        |
 *             ---concatMap(()=>interval$.pipe(take(3)))---->
 *                |     |        |
 *                |     |         --------(x)(y)(z)--------->
 *                |      ------(a)(b)(c)-|
 *                 -(1)(2)(3)-|----------------------------->
 * 
 *    salida   -----(1)(2)(3)--(a)(b)(c)--(x)(y)(z)--------->
 */
import { interval, fromEvent } from "rxjs";
import { take, concatMap } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap(() => interval$)
)
    .subscribe(console.log);
/**
 * range(inicio?: number = 0, cuantas_veces?: number, regulador?: SchedulerLike = undefined)
 * 
 * => Creación de observables para crear una lista de elementos apartir de un rango dado
 * => Es una forma más sencilla de crear un observable
 * 
 * Diagrama de canicas:
 * 
 * ------------range(10,5)-------------
 * 
 * -------(10)(11)(12)(13)(14)(15)-----
 */
import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
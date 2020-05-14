/**
 * of(...elementos: any)
 * 
 * => Creación de observables apartir de elementos de cualquier tipo 
 *    (cada elemento separado por las comas (,) es tomado como un elemento)
 * => Es una forma más sencilla de crear un observable
 * 
 * Diagrama de canicas:
 * 
 * -------------of(1,2,3)----------------
 * 
 * -------------(1)(2)(3)----------------
 */
import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5)
// const obs$ = of([1, 2],{a:1,b:2},function(){},true,Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe(
    next => console.log('next ', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del obs$');
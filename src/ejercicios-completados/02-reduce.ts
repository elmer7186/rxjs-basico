import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() => {

    const datos: Array<any> = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    from(datos).pipe(
        filter(dato => !isNaN(dato)),
        reduce((acumulado, actual) => acumulado + actual),
    ).subscribe(console.log) // La salida debe de ser 32

})();

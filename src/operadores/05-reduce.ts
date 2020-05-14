/**
 * reduce((acumulado, actual_actual) => acumulado + valor_actual, inicial)
 * 
 * => Permite realizar una acumalación de los valores arrojados por el observable
 *    y retornar el resultado cuando se complete
 */
import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

interval(1000).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('Complete')
    })
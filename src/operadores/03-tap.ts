/**
 * tap(value => )
 * tap({next: ... , error: ... , complete ...})
 * 
 * => Realiza un efecto secundario para cada fuente de emisión en el observable, 
 *    pero devuelve un observable identico a la fuente
 */
import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => {
        console.log('antes', x)
        return 100;
    }),
    map(val => val * 10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se terminó todo')
    })
).subscribe(val => console.log('subs', val));
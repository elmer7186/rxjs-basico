/**
 * filter(funcion)
 * 
 * => filtra datos por medio de una función que evalua cada valor arrojado por el observable
 * => Si el resultado es <<true>> entonces el valor es emitido
 */
import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log);

range(20, 30).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

from(personajes).pipe(
    filter(personaje => personaje.tipo !== 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter'),
)

keyup$.subscribe(console.log);
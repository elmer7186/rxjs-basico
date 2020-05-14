/**
 * distinctUntilKeyChange(clave: any)
 * 
 * => Permite emitir los valores que emite un observable y cuyo valor sea diferente 
 *    al anterior comparando por medio de un argumento ('clave')
 */
import { of, from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);
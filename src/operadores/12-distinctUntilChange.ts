/**
 * distinctUntilChange()
 * distinctUntilChange((anterior, actual) => anterior.nombre === actual.nombre)
 * 
 * => Permite emitir los valores emitidos por un observable cuyo valor 
 *    sea diferente al valor anterior
 * => Tambien se puede hacer uso de una función de diferenciación
 */
import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numeros$.pipe(
    distinctUntilChanged() // distinct use ===
)
    .subscribe(console.log);

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
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);
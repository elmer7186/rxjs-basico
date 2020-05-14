/**
 * map(funcion)
 * 
 * => Convierte una entrada en una salida especifica por medio de una función de mapeo
 * 
 * pluck(...propiedades: string[])
 * 
 * => Extrae valores de un objeto por medio del nombre de la propiedad
 * 
 * mapTo(valor: any)
 * 
 * => Convierte una entrada a un valor constante
 */
import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5).pipe(
//     map<number, string>(val => (val * 10).toString())
// )
//     .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));
/**
 * fromEvent(elemento_dom: FromEventTarget, nombre_evento: string)
 * 
 * => Creación de observables asociados a eventos del DOM
 * => Es una forma más sencilla de crear un observable
 * 
 * Digrama de canicas:
 * 
 * -----------fromEvent(document, 'click')------------
 * 
 * ---------------(click)-----------------(click)----
 */
import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe(({ x, y }) => {
    console.log(x, y);
});

src2$.subscribe(evento => {
    console.log(evento.key)
});
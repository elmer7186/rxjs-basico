import { Observable, Observer } from 'rxjs';

/**
 * Ejercicio 1: Observables básico
 * 
 * => Declarar y suscribir observable -> Ejemplo básico: Hola Mundo
 */

/** declarar observable en una constante */
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completador [obs]')
};

/** crear observable forma 1 */
//const observable$ = Observable.create();

/** crear observable con new */
const obs$ = new Observable<string>(subs => {

    /** llamar al subscribe.next */
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    /** forzar un error*/
    // const a = undefined;
    // a.nombre = 'Fernando';

    /** invocar al subcribe.complite para completar la suscripción */
    subs.complete();

    /** no debe imprimirse esto porque finalizó la subcripción */
    subs.next('Hola');
    subs.next('Mundo');

});

/** suscribir observable forma 1 */
obs$.subscribe(observer);

/** suscribir observable forma 2 */
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.error('error: ', error),
//     () => console.info('Completado')
// );
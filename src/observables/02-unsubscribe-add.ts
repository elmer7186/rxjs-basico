import { Observable, Observer } from 'rxjs';

/**
 * Ejercicio 2:
 * 
 * => Suscribir y desuscribir observables
 * => Encadenar suscripciones
 * => Destruir intervalo cuando se complete el observable
 */

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    /** crear un contador, 1,2,3,4,5,.... */
    let count = 0;

    /** función de intervalo javascript */
    const interval = setInterval(() => {
        /** se ejecuta cada segundo */
        count++;
        subscriber.next(count)
        console.log(count);
    }, 1000)

    /** completar suscripción a los 2.5 segundos */
    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    /** destruir intervalo al finalizar la suscripción */
    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido')
    }
})

/** suscribir varias veces el mismo observable */
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

/** encadenar suscripciones */
subs1.add(subs2)
    .add(subs3);

/** desuscribir suscripciones a los 6 segundos */
setTimeout(() => {
    subs1.unsubscribe()
    /** cuando no se encadenan las suscripciones es necesario desuscribir una por una */
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout')
}, 6000)
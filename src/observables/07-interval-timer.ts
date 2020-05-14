/**
 * interval(periodo?: number = 0, regulador?: SchedulerLike = async)
 * 
 * => Creación de observables con secuencia de números en un periodo de tiempo
 * => Empieza lanzando desde 0
 * => Es una forma más sencilla de crear un observable
 * 
 * timer(inicio: number, periodo: number)
 * 
 * => Creación de obsevables con la caracteristicas de time pero que empieza a
 *    ejecutarse desde un 'inicio' especificado
 * 
 * Diagrama de canicas
 */
import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(1000);

// const timer$ = timer(2000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
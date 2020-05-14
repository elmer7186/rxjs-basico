/**
 * ajax(url: string)
 * ajax(request: AjaxRequest)
 * 
 * => Permite crear un observable para realizar una petición REST
 */
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// const url = 'https://api.github.com/userXXXs?per_page=5';
const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en usuarios', err))

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
)
    .subscribe(users => console.log('Usuarios:', users));
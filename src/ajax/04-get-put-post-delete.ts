/**
 * => Con ajax se pueden hacer peticiones REST con los diferentes métodos
 */
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.put(url, {
//     id: 1,
//     nombre: 'Elmer'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Elmer'
    }
}).subscribe(console.log);
/**
 * Laboratorio ejemplo para map
 * 
 * => Progress-bar en la página conforme se hace scroll
 */
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim augue, posuere eu ante condimentum, dignissim molestie nisl. Donec vulputate rhoncus massa at pretium. Cras ultrices suscipit porttitor. Morbi a eros dignissim, pretium ante id, lobortis risus. Aliquam vitae volutpat metus. Sed cursus mauris id urna cursus elementum. Etiam id metus id orci venenatis congue. Duis pretium efficitur commodo. Curabitur feugiat nibh a tellus dignissim maximus. Donec ultrices ultricies tristique. Etiam sodales metus ut ligula aliquam, vitae placerat velit vulputate. Fusce feugiat vel ante at imperdiet. Aliquam et dolor ut velit viverra scelerisque vitae at magna.
<br/><br/>
Aliquam dapibus dui ut erat ultricies bibendum lobortis et mauris. Donec iaculis tristique venenatis. Aliquam ac cursus orci, eget fermentum massa. Duis vestibulum consectetur congue. Ut accumsan ligula non dolor sodales facilisis. Ut ut urna mollis, volutpat felis quis, ultrices quam. In ultricies, justo pulvinar molestie bibendum, massa lacus auctor libero, ac vestibulum lorem quam ac leo. Sed sem mi, tristique nec enim vel, malesuada iaculis libero. Nulla maximus luctus nisl, placerat efficitur odio congue sit amet. Cras interdum tincidunt augue id pharetra. Suspendisse tristique aliquet turpis, sit amet mollis ex varius vitae. Quisque ultricies id libero a tempor.
<br/><br/>
Nullam vitae placerat diam. Nulla vitae neque sem. Vivamus mattis rhoncus mi sed scelerisque. Cras dui velit, pretium ut est id, placerat cursus justo. Sed massa purus, pretium et vehicula vel, eleifend non sem. Aenean elementum quis erat vitae tristique. Suspendisse potenti. Vivamus scelerisque lobortis erat eget aliquet. Nulla lobortis lorem nulla, eu tempor dui maximus sed. Maecenas et enim et ex auctor convallis eu a nulla. Fusce a sem lorem.
<br/><br/>
Ut mollis egestas lorem nec lacinia. Etiam ligula erat, lacinia vitae ex et, vehicula dapibus tortor. Donec erat nulla, posuere vel augue sed, sollicitudin fringilla leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in efficitur neque. Fusce ullamcorper metus id mi iaculis fermentum. In sagittis, tellus nec ornare dapibus, mauris dolor tincidunt lorem, a luctus orci sem vel dolor. Ut vulputate ipsum vel sem dictum, vel tempus ex viverra.
<br/><br/>
Maecenas sed tortor mauris. Sed dignissim ante nibh, in sodales orci cursus nec. Quisque sit amet laoreet mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam bibendum tristique velit. In ut gravida felis. Duis nunc nibh, iaculis a metus et, vestibulum convallis mauris. Nunc nulla velit, ultrices mattis ornare lacinia, sollicitudin non erat. 
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
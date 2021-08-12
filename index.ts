import { Observable } from "rxjs";


const source$ = new Observable(subscriber => {
  setTimeout(() => subscriber.next('A'), 2000);
  setTimeout(() => subscriber.next('B'), 5000);
});
console.log('App started');
source$.subscribe(value => console.log(value));
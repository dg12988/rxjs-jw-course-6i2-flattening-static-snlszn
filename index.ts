import { Observable, of } from "rxjs";
import { concatMap } from "rxjs/operators";


const source$ = new Observable(subscriber => {
  setTimeout(() => subscriber.next('A'), 2000);
  setTimeout(() => subscriber.next('B'), 5000);
});

//use flattening operator to create new Observable, reaches next and concatMap is run
console.log('App started');
source$.pipe(
  concatMap(value => of(1, 2))
).subscribe(value => console.log(value));


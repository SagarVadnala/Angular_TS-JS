import { Component } from '@angular/core';
import { count, filter, map, Observable, retry, skip, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-sample',
  imports: [],
  templateUrl: './observable-sample.html',
  styleUrl: './observable-sample.css',
})
export class ObservableSample {

  observableData!: Observable<string>;
  subscription!: Subscription;

  constructor(){
  }

  create() {
    this.observableData = new Observable<string>(ob => {
      ob.next('test1');
      ob.next('test2');
      ob.next('test3');
      setInterval(() => {
        ob.next('test' + Math.random());
      }, 1000);
      setTimeout(() => {
        ob.error('Oops sorry');
      }, 5000);
    })
  }

  fetch() {
    this.subscription = this.observableData.subscribe({
      next: (resp) => {
        console.log('Data=' + resp);
      },
      error: (err) => {
        console.log('Error', err);
      },
      complete: () => {
        console.log('No more data');
      }
    })
  }

  operate() {
    this.observableData = this.observableData.pipe(
      map(d => d.toUpperCase())
      , skip(2)
      , retry({ count: 2, delay: 2000 })

    )
  }

  destroy(){
    this.subscription.unsubscribe();
    console.log('Subscription ended');
  }
}

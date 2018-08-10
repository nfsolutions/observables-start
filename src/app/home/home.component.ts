import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private numbersSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumbers = interval(1000);
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000),
        setTimeout(() => {
          observer.next('second package');
        }, 4000),
        setTimeout(() => {
          // observer.error('This does not work');
          observer.complete();
        }, 5000),
        setTimeout(() => {
          observer.next('third package');
        }, 6000);
    });
    this.customSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}

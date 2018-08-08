import { Component, OnInit } from '@angular/core';
import {Observable, interval} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

}

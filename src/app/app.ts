import { Component, Injectable, signal } from '@angular/core';
import { StudentCard } from './student-card/student-card';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-root',
  imports: [StudentCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
  export class App {
    protected readonly title = signal('Lec6-An');

    public count = signal(0);

    constructor() {
      console.log('The count is: ' + this.count());
      this.count.set(3)
      console.log('The count is: ' + this.count() );
  }
}

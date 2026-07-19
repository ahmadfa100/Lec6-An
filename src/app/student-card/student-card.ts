import { Component, signal, input, output } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  id = input.required<number>();
  name = input.required<string>();
  age = input<number>();
  major = input.required<string>();
}

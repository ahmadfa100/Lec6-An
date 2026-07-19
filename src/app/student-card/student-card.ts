import { Component, input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  id = input.required<number>();
  name = input.required<string>();
  age = input.required<number>();
  major = input.required<string>();
}

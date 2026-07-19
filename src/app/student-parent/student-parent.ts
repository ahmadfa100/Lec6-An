import { Component } from '@angular/core';
import { StudentCard } from '../student-card/student-card';

@Component({
  selector: 'app-student-parent',
  standalone: true,
  imports: [StudentCard],
  templateUrl: './student-parent.html',
  styleUrl: './student-parent.css',
})
export class StudentParent {}
  
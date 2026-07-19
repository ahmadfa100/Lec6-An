import { Component, Injectable, signal } from '@angular/core';
import { StudentCard } from './student-card/student-card';
import { StudentParent } from "./student-parent/student-parent";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  imports: [StudentCard, StudentParent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

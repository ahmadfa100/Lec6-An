import { Component, Injectable, signal } from '@angular/core';
import { StudentParent } from './student-parent/student-parent';
import { MessageParent } from "./message-parent/message-parent";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  imports: [StudentParent, MessageParent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

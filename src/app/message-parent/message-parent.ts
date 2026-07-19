import { Component } from '@angular/core';
import { MessageChild } from '../message-child/message-child';

@Component({
  selector: 'app-message-parent',
  imports: [MessageChild],
  templateUrl: './message-parent.html',
  styleUrl: './message-parent.css',
})
export class MessageParent {

  message = ""

  showMessage(){
    this.message = "the child button was clicked"
  }




  
}

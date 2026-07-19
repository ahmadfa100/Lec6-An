import { Component ,output} from '@angular/core';

@Component({
  selector: 'app-message-child',
  imports: [],
  templateUrl: './message-child.html',
  styleUrl: './message-child.css',
})
export class MessageChild {

  buttonClicked = output()

  sendSignal(){
    this.buttonClicked.emit();
  }
}

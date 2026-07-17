import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  //properties
  name: string = 'Ali';
  age = 30;
  major = "Doctor"
  image = "Nature.jpg"
  salary:number|undefined // NAN => if the user entered a value that is not a number
  isActive = false
  skills = ["HTML" , "CSS" , "JS" , "C++"]

  //methods
  changeAge(){
    this.age +=   20
  }

  setSalary(event : Event){

    const input = event.target as HTMLInputElement

    const enteredSalary = input.value


    if(Number.isNaN(enteredSalary) ){
      this.salary = undefined
    }
    else{
      this.salary = +enteredSalary
    }
  }
// !true = false, ,, !false = true
  showStudent( ){
    this.isActive = !this.isActive

  }


}

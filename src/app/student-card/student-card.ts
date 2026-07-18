import { Component, signal , computed, effect} from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  name: string = 'Ali';
  age = signal(30);
  major = "Doctor"
  isAdultVaribale = computed(() => this.age() >=18)

  changeAge(){
    // this.age.set(20)

    this.age.update(x => x +20)
  }

  effectAge = effect(()=>{
    console.log("effect is running")
    console.log("Current Age :" + this.age())
  })

  
}

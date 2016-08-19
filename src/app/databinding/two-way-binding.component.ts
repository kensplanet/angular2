import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.age">
  `,
  styles: []
})
export class TwoWayBindingComponent{

  person = {
    name: 'Ken',
    age: 28
  }

}

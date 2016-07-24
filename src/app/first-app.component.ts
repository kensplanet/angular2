import {Component} from '@angular/core';
import {OtherComponent, AnotherComponent} from './other';

@Component({
    moduleId: module.id,
    selector: 'first-app-app',
    template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <fa-another></fa-another>
   `,
    styles: [`
      h1 {
        color: red;
      }
    `],
    directives: [OtherComponent, AnotherComponent]
})
export class FirstAppAppComponent {
    title = 'Does this show up?';
}

import {Component} from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
    moduleId: module.id,
    selector: 'first-app-app',
    template: `
    <h1>Inline Template</h1>   
     <app-databinding></app-databinding>
   `,
    directives:[DatabindingComponent]
})
export class FirstAppAppComponent {
    title = 'Does this show up?';
}

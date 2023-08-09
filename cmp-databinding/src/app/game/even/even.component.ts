import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [
    `p { background: green; color: white; padding: 5px 10px }`
  ]
})
export class EvenComponent {
  @Input() roundNum!: string;
}

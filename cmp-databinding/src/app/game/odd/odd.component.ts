import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`p { background: blue; color: white; padding: 5px 10px }`]
})
export class OddComponent {
  @Input() roundNum!: string;
}

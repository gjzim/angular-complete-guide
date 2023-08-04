import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-excercise',
  templateUrl: './directives-excercise.component.html',
  styles: [
    `
      p.white-text {
        color: white !important;
      }
    `,
  ],
})
export class DirectivesExcerciseComponent {
  showDetails = false;
  clickCount = 0;
  clicks = [];

  onToggleDetails() {
    this.clickCount += 1;
    this.showDetails = !this.showDetails;
    this.clicks.push({
      serial: this.clickCount,
      time: new Date().toISOString(),
      showDetails: this.showDetails,
    });
  }
}

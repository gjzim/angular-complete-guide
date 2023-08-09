import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html'
})
export class GameControllerComponent {
  roundNumber = 0;
  intervalRef: number | undefined;

  @Output() gameStarted = new EventEmitter<number>();

  onGameStart() {
    this.intervalRef = setInterval(() => {
      this.roundNumber += 1;
      this.gameStarted.emit(this.roundNumber);
    }, 1000);
  }

  onGameStop() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = undefined;
    }
  }
}

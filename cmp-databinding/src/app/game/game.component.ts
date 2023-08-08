import {Component} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [
    'game.component.css'
  ]
})
export class GameComponent {
  components: { type: "odd" | "even"; roundNum: number }[] = [];

  onGameStarted(roundNum: number) {
    this.components.push({
      type: roundNum % 2 === 0 ? "even" : "odd",
      roundNum: roundNum
    })
  }
}

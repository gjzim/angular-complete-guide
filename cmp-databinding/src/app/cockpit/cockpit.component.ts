import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: serverNameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value,
    });
  }
}

import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };

  @ContentChild('contentParagraph', { static: true }) paragraph!: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit{
  errorMessage = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data) => {
      this.errorMessage = data['message'];
    })
  }
}

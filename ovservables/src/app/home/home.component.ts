import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, map, filter } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // if (count == 2) {
        //   observer.complete();
        // }
        if (count > 10) {
          observer.error(new Error("Count is greater than 3"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => data % 2 === 0),
        map((data) => `Round #${data + 1}`)
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          console.log("completed");
        },
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}

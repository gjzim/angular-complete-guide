import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  a2iCount = 0;
  i2aCount = 0;

  increaseA2ICounter() {
    this.a2iCount += 1;
    console.log("New Active -> Inactive count: " + this.a2iCount);
  }

  increaseI2ACounter() {
    this.i2aCount += 1;
    console.log("New Inactive -> Active count: " + this.i2aCount);
  }
}

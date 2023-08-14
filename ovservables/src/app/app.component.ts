import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./user/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  isUserActivated = false;
  private userActivationSubscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userActivationSubscription =
      this.userService.activatedEmitter.subscribe(
        (didActivate) => (this.isUserActivated = didActivate)
      );
  }

  ngOnDestroy(): void {
    this.userActivationSubscription.unsubscribe();
  }
}

import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    })
    // this.server = this.serversService.getServer(
    //   +this.route.snapshot.params["id"]
    // )!;
    //
    // this.route.params.subscribe((params) => {
    //   this.server = this.serversService.getServer(+params["id"])!;
    // });
  }

  onGoToEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    })
    // this.router.navigate(["/servers", this.server.id, "edit"]);
  }
}

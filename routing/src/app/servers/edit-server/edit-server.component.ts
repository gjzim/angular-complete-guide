import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.fragment.subscribe();
    this.route.queryParams.subscribe((qp: Params) => {
      this.allowEdit = qp['allowEdit'] === '1';
    })
    this.route.params.subscribe((p: Params) => {
      this.server = this.serversService.getServer(+p['id'])!;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  isServerInfoModified() {
    return this.serverName !== this.server.name || this.serverStatus !== this.server.status;
  }

  canDeactivate() {
    if(this.allowEdit && this.isServerInfoModified() && !this.changesSaved) {
      return confirm('Do you want to discard the changes?')
    }

    return true;
  }
}

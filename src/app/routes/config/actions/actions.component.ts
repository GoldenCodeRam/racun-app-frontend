import { Component, OnInit } from "@angular/core";
import { ActionApiService } from "src/app/services/api/actions/actions-api.service";

@Component({
    selector: "app-actions",
    templateUrl: "./actions.component.html",
    styleUrls: ["./actions.component.sass"],
})
export class ActionsComponent implements OnInit {
    constructor(public actionsApiService: ActionApiService) {}

    ngOnInit(): void {}
}

import { Component, HostBinding, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Zone } from "src/app/models/zone";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-zones-form",
    templateUrl: "./zones-form.component.html",
    styleUrls: ["./zones-form.component.css"],
})
export class ZonesFormComponent implements OnInit {
    @HostBinding("class") classes = "row";

    edit: boolean = false;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private activedRoute: ActivatedRoute
    ) {}

    //Se traen los datos de la zona a actualizar desde el API con el metodo getZone
    //
    ngOnInit(): void {
        const params = this.activedRoute.snapshot.params;
        if (params["id"]) {
        }
    }

    saveNewZone() {
    }

    updateGame() {
    }
}

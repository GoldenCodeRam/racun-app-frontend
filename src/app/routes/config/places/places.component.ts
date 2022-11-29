import { Component } from "@angular/core";
import { PlacesApiService } from "src/app/services/api/places/places-api.service";

@Component({
    selector: "app-places",
    templateUrl: "./places.component.html",
    styleUrls: ["./places.component.sass"],
})
export class PlacesComponent {
    constructor(public placesApiService: PlacesApiService) {}
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Place } from "src/app/models/place";
import { PlacesApiService } from "src/app/services/api/places/places-api.service";

@Component({
    selector: "app-show-place",
    templateUrl: "./show-place.component.html",
    styleUrls: ["./show-place.component.sass"],
})
export class ShowPlaceComponent implements OnInit {
    public place!: Place;

    constructor(
        private route: ActivatedRoute,
        private placesApiService: PlacesApiService
    ) {}

    async ngOnInit() {
        const result = await this.placesApiService.getPlace(
            this.route.snapshot.params["placeId"]
        );

        if (result.ok) {
            this.place = result.val;
        }
    }
}

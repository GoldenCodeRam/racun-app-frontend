import { Component, OnInit } from "@angular/core";
import { ZonesApiService } from "src/app/services/api/zones/zones-api.service";

@Component({
  selector: "app-zones",
  templateUrl: "./zones.component.html",
  styleUrls: ["./zones.component.css"],
})
export class ZonesComponent implements OnInit {
  zones: any = [];

  constructor(public zonesApiService: ZonesApiService) { }

  ngOnInit(): void { }

  getZones() { }

  deleteZone(id: number) { }
}

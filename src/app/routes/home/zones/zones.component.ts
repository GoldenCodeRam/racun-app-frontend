import { Component, Injectable, OnInit } from "@angular/core";
import { Zone } from "src/app/models/zone";
import { SearchResult } from "src/app/services/api/apiTypes";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Injectable()
class SearchFunction extends SearchFunctionService<Zone> {
    public async search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Zone>> {
        return this.getZones(userSearch, currentSearchPage, searchLimit);
    }
}

@Component({
    selector: "app-zones",
    templateUrl: "./zones.component.html",
    providers: [
        {
            provide: SearchFunctionService<Zone>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./zones.component.css"],
})
export class ZonesComponent implements OnInit {
    zones: any = [];

    /*zonesList=[
      {
        id:1,
        name:"San Cayetano",
        code:10101001,
        placeId:2,
        equipos:["TP-Link Nuevo","TP-Link Prestado"],
        url:""
      },
      {
        id:2,
        name:"La Quitaz",
        code:10101001,
        placeId:1,
        equipos:["TP-Link Nuevo","TP-Link Prestado"],
        url:""
      },
      {
        id:3,
        name:"Florian",
        code:10101001,
        placeId:3,
        equipos:["TP-Link Nuevo","TP-Link Prestado"],
        url:"http://www.colombiaturismoweb.com/DEPARTAMENTOS/SANTANDER/MUNICIPIOS/FLORIAN/imagenes/panoramica_florian.jpg"
      },
      {
        id:2,
        name:"La Quitaz",
        code:10101001,
        placeId:1,
        equipos:["TP-Link Nuevo","TP-Link Prestado"],
        url:""
      }
    ]*/

    constructor(public searchFunctionService: SearchFunctionService<Zone>) {}

    ngOnInit(): void {}

    getZones() {}

    deleteZone(id: number) {}
}

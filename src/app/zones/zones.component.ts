import { Component, HostBinding, OnInit } from '@angular/core';
import { ZoneService } from './zone.service';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {


  //zones : any = [];

    zonesList=[
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
    ]

  constructor(private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.getZones();
  }

  getZones(){
    /*this.zoneService.getZones().subscribe(
      res => {
        this.zones = res;
      },
      err => console.error(err)
    );*/
  }

  deleteZone(id:number){
    this.zoneService.deleteZone(id).subscribe(
      res =>{
        console.log(res);
        this.getZones();
      },
      err => console.log(err)
    )
  }
}

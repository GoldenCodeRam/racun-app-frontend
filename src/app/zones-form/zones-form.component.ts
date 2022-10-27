import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from '../models/Zone';
import { ZoneService } from '../zones/zone.service';

@Component({
  selector: 'app-zones-form',
  templateUrl: './zones-form.component.html',
  styleUrls: ['./zones-form.component.css']
})
export class ZonesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  zone: Zone = {
    id: 0,
    name: '',
    code:0,
    placeId:0,
    equipos:[],
    url:''
  }

  edit: boolean = false;

  constructor(private zoneService: ZoneService, private router: Router, private activedRoute: ActivatedRoute) { }

  //Se traen los datos de la zona a actualizar desde el API con el metodo getZone
  //
  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params['id']){
      this.zoneService.getZone(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.zone = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  //Se elimina el id porque la base de datos lo genera autoincremental

  saveNewZone(){
    delete this.zone.id;
    this.zoneService.saveZone(this.zone)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/zones'])
        },
        err => console.error(err)
        )
  }

  updateGame(){
    this.zoneService.updateZone(this.zone.id! ,this.zone)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/zones']);
        },
        err => console.error(err)

      )
  }
}

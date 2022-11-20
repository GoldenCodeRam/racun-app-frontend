import { Component, inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditServiceModalComponent } from 'src/app/components/modals/services/edit-service-modal/edit-service-modal.component';
import { Client } from 'src/app/models/client';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { ServiceApiService } from 'src/app/services/api/services/service-api.service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.sass']
})
export class ShowServiceComponent implements OnInit {
    public service!: Service;

  constructor(
    private route: ActivatedRoute,
    private servicesApiService: ServiceApiService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    this.service = await this.servicesApiService.getService(
        this.route.snapshot.params["serviceId"]
    )
  }

  public openEditServiceModal(){
    this.modalService.open(EditServiceModalComponent, {
        centered: true,

        injector: Injector.create({
            providers: [{ provide: Service, useValue: this.service}]
        })
    })
  }

  public openDeleteServiceModal(){

}

}

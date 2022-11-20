import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateServiceModalComponent } from 'src/app/components/modals/services/create-service-modal/create-service-modal.component';
import { ServiceApiService } from 'src/app/services/api/services/service-api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent {
    services: any = []


  constructor(
    public servicesApiService: ServiceApiService,

    private modalService: NgbModal
  ) { }

  public openCreateServiceModal(){
    this.modalService.open(CreateServiceModalComponent, {
        centered: true,
    })
  }

}

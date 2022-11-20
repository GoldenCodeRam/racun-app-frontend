import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/models/role';
import { Service } from 'src/app/models/service';
import { ServiceApiService } from 'src/app/services/api/services/service-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-edit-service-modal',
  templateUrl: './edit-service-modal.component.html',
  styleUrls: ['./edit-service-modal.component.sass']
})
export class EditServiceModalComponent {
    public serviceForm = new FormGroup({
        name: new FormControl<string>(this.service.name, [
            Validators.required,
        ]),
        description: new FormControl<string>(this.service.description, [
            Validators.required,
        ]),
    });

  constructor(
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,

    private servicesApiService: ServiceApiService,
    private service: Service,
    private loaderService: MainLoaderService,
    private toastService: ToastGeneratorService
  ) { }

  public async editService() {
    await this.loaderService.doWithLoadingScreen(async () => {
        await this.servicesApiService.updateService({
            id: this.service.id,
            name: this.serviceForm.value!.name as string,
            description: this.serviceForm.value!.description as string,
        });

        this.toastService.show(
            "Servicio editado",
            "Se ha editado el servicio correctamente."
        );
    });

    this.activeModal.close();
}

}

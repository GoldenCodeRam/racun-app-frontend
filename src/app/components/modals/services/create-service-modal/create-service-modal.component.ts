import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceApiService } from 'src/app/services/api/services/service-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-create-service-modal',
  templateUrl: './create-service-modal.component.html',
  styleUrls: ['./create-service-modal.component.sass']
})
export class CreateServiceModalComponent {
    public serviceForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        description: new FormControl<string>("", [Validators.required]),
    })

  constructor(
    public activeModal: NgbActiveModal,

    private loaderService: MainLoaderService,
    private serviceApiService: ServiceApiService,
    private toastService: ToastGeneratorService
  ) { }

  public async createService() {
    await this.loaderService.doWithLoadingScreen(async () => {
        await this.serviceApiService.createService({
            name: this.serviceForm.value!.name as string,
            description: this.serviceForm.value!.description as string,
        });

        this.toastService.show(
            "Usuario creado",
            "Se ha creado el usuario correctamente."
        );
    });

    this.activeModal.close();
}
}

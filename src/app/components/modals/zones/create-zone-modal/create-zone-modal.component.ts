import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ZonesApiService } from 'src/app/services/api/zones/zones-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-create-zone-modal',
  templateUrl: './create-zone-modal.component.html',
  styleUrls: ['./create-zone-modal.component.sass']
})
export class CreateZoneModalComponent{

    public zoneForm = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        code: new FormControl<string>("", [Validators.required]),
    })

  constructor(
    public activeModal: NgbActiveModal,

    private loaderService: MainLoaderService,
    private zoneApiService: ZonesApiService,
    private toastService: ToastGeneratorService
  ) { }

  public async createZone() {
    await this.loaderService.doWithLoadingScreen(async () => {
        await this.zoneApiService.createZone({
            name: this.zoneForm.value!.name as string,
            code: this.zoneForm.value!.code as string,
        });

        this.toastService.show(
            "Usuario creado",
            "Se ha creado el usuario correctamente."
        );
    });

    this.activeModal.close();
}



}

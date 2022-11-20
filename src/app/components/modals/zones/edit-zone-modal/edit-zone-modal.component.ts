import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Zone } from 'src/app/models/zone';
import { ZonesApiService } from 'src/app/services/api/zones/zones-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-edit-zone-modal',
  templateUrl: './edit-zone-modal.component.html',
  styleUrls: ['./edit-zone-modal.component.sass']
})
export class EditZoneModalComponent{
    public zoneForm = new FormGroup({
        name: new FormControl<string>(this.zone.name, [
            Validators.required,
        ]),
        code: new FormControl<number>(this.zone.code, [
            Validators.required,
        ]),
    });
  constructor(
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,

    private zone: Zone,
    private zonesApiService: ZonesApiService,
    private loaderService: MainLoaderService,
    private toastService: ToastGeneratorService
  ) { }

  public async editZone() {
    await this.loaderService.doWithLoadingScreen(async () => {
        await this.zonesApiService.updateZone({
            id: this.zone.id,
            name: this.zoneForm.value!.name as string,
            code: this.zoneForm.value!.code as number,
        });

        this.toastService.show(
            "Zona editada",
            "Se ha editado la zona correctamente."
        );
    });

    this.activeModal.close();
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { ClientsApiService } from 'src/app/services/api/clients/clients-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-edit-client-modal',
  templateUrl: './edit-client-modal.component.html',
  styleUrls: ['./edit-client-modal.component.sass']
})
export class EditClientModalComponent{
    public clientForm = new FormGroup({
        firstName: new FormControl<string>(this.client.firstName, [Validators.required]),
        lastName: new FormControl<string>(this.client.lastName, [Validators.required]),
        document: new FormControl<string>(this.client.document, [Validators.required]),
        phone: new FormControl<string>(this.client.phone, [Validators.required]),
        address: new FormControl<string>(this.client.address, [Validators.required]),
        email: new FormControl<string | null>(null, [Validators.email]),
    })

  constructor(
    public activeModal: NgbActiveModal,

    private client: Client,
    private loaderService: MainLoaderService,
    private clientApiService: ClientsApiService,
    private toastService: ToastGeneratorService
  ) { }

  public async editClient(){
    await this.loaderService.doWithLoadingScreen(async () => {
        await this.clientApiService.updateClient({
            id: this.client.id,
            firstName: this.clientForm.value!.firstName as string,
            lastName: this.clientForm.value!.lastName as string,
            document: this.clientForm.value!.document as string,
            phone: this.clientForm.value!.phone as string,
            address: this.clientForm.value!.address as string,
            email: this.clientForm.value!.email as string,
        });

        this.toastService.show(
            "Cliente editado",
            "Se ha editado el cliente correctamente"
        );
    });

    this.activeModal.close();
  }

}

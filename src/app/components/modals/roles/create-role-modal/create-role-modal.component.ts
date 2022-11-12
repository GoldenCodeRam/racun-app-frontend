import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RolesApiService } from "src/app/services/api/users/roles-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";

@Component({
    selector: "app-create-role-modal",
    templateUrl: "./create-role-modal.component.html",
    styleUrls: ["./create-role-modal.component.css"],
})
export class CreateRoleModalComponent {
    public roleForm = new FormGroup({
        name: new FormControl<string>("Nuevo rol", [Validators.required]),
    });

    constructor(
        public activeModal: NgbActiveModal,

        private rolesApiService: RolesApiService,
        private mainLoaderService: MainLoaderService,
        private toastGeneratorService: ToastGeneratorService
    ) {}

    public async createRole() {
        if (this.roleForm.valid) {
            await this.mainLoaderService.doWithLoadingScreen(async () => {
                await this.rolesApiService.createRole(this.roleForm.value.name!);
                this.toastGeneratorService.show("Rol creado", "Rol creado correctamente");
            });

            this.activeModal.close();
        }
    }

    public openModal() {}
}

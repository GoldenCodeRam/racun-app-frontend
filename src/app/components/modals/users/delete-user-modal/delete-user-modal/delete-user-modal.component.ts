import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "src/app/models/user";
import { UsersApiService } from "src/app/services/api/users/users-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";

@Component({
    selector: "app-delete-user-modal",
    templateUrl: "./delete-user-modal.component.html",
    styleUrls: ["./delete-user-modal.component.sass"],
})
export class DeleteUserModalComponent {
    constructor(
        private usersApiService: UsersApiService,
        private loaderService: MainLoaderService,
        private user: User,
        private toastService: ToastGeneratorService,
        public activeModal: NgbActiveModal
    ) {}

    public async deleteUser() {
        await this.loaderService.doWithLoadingScreen(async () => {
            await this.usersApiService.deleteUser(this.user.id);

            this.toastService.show(
                "Usuario Eliminado",
                "Se ha eliminado el usuario correctamente."
            );
        });

        this.activeModal.close();
    }
}

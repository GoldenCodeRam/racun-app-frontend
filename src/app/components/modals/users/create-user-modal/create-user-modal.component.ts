import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "src/app/models/role";
import { User } from "src/app/models/user";
import { UsersApiService } from "src/app/services/api/users/users-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";
import { SelectRoleModalComponent } from "../../roles/select-role-modal/select-role-modal.component";

@Component({
    selector: "app-create-user-modal",
    templateUrl: "./create-user-modal.component.html",
    styleUrls: ["./create-user-modal.component.sass"],
})
export class CreateUserModalComponent {
    public userForm = new FormGroup({
        firstName: new FormControl<string>("", [Validators.required]),
        lastName: new FormControl<string>("", [Validators.required]),
        email: new FormControl<string>("", [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl<string>("", [
            Validators.required,
            Validators.minLength(6),
        ]),
        role: new FormControl<Role | null>(null, {
            validators: [Validators.required],
        }),
    });

    constructor(
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,

        private usersApiService: UsersApiService,
        private loaderService: MainLoaderService,
        private toastService: ToastGeneratorService
    ) {}

    public openSelectRole() {
        this.modalService
            .open(SelectRoleModalComponent, {
                centered: true,
                size: "lg",
            })
            .result.then(
                (role: Role) => {
                    if (role) {
                        this.userForm.patchValue({
                            role,
                        });
                    }
                },
                (reason: any) => {}
            );
    }

    public async createUser() {
        await this.loaderService.doWithLoadingScreen(async () => {
            await this.usersApiService.createUser({
                firstName: this.userForm.value!.firstName as string,
                lastName: this.userForm.value!.lastName as string,
                email: this.userForm.value!.email as string,
                password: this.userForm.value!.password as string,
                role: this.userForm.value!.role as Role,
            });

            this.toastService.show(
                "Usuario creado",
                "Se ha creado el usuario correctamente."
            );
        });

        this.activeModal.close();
    }
}

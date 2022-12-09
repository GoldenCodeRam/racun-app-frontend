import { Component, Injector, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject } from "rxjs";
import { DeleteHardwareOnClientModalComponent } from "src/app/components/modals/hardware/delete-hardware-on-client-modal/delete-hardware-on-client-modal.component";
import { SelectHardwareModalComponent } from "src/app/components/modals/hardware/select-hardware-modal/select-hardware-modal.component";
import { ClientAccount } from "src/app/models/clientAccount";
import { Hardware, HardwareOnClient } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok, Result } from "ts-results";

@Component({
    selector: "app-show-user-hardware",
    templateUrl: "./show-user-hardware.component.html",
    styleUrls: ["./show-user-hardware.component.sass"],
})
export class ShowUserHardwareComponent implements OnInit {
    @Input("clientAccount")
    public clientAccount!: ClientAccount;

    public loader = new BehaviorSubject(true);

    public hardwareOnClient: HardwareOnClient[] = [];

    constructor(
        private hardwareApiService: HardwareApiService,
        private modalService: NgbModal,
        private loaderService: MainLoaderService
    ) {}

    public async ngOnInit() {
        await this.loadHardwareOnClient();
    }

    public async loadHardwareOnClient() {
        this.loader.next(true);
        this.hardwareOnClient =
            await this.hardwareApiService.getHardwareOnClientsByClientAccountId(
                this.clientAccount.id
            );
        this.loader.next(false);
    }

    public openAssignHardware() {
        const modal = this.modalService.open(SelectHardwareModalComponent, {
            size: "xl",
            centered: true,
        });

        modal.result.then(
            async (hardware: Result<Hardware, undefined>) => {
                if (hardware.ok) {
                    await this.loaderService.doWithLoadingScreen(async () => {
                        try {
                            await this.hardwareApiService.createHardwareOnClients(
                                {
                                    hardwareId: hardware.val.id,
                                    clientAccountId: this.clientAccount.id,
                                }
                            );
                            return Ok({
                                header: "Equipo asignado",
                                body: "El equipo se ha asignado al cliente correctamente.",
                            });
                        } catch (error: any) {
                            return Err(error);
                        }
                    });

                    await this.loadHardwareOnClient();
                }
            },
            (_) => {}
        );
    }

    public openDeleteHardwareOnClientModal(hardwareOnClient: HardwareOnClient) {
        const modal = this.modalService.open(
            DeleteHardwareOnClientModalComponent,
            {
                centered: true,
                injector: Injector.create({
                    providers: [
                        {
                            provide: HardwareOnClient,
                            useValue: hardwareOnClient,
                        },
                    ],
                }),
            }
        );

        modal.result.then((_) => {
            this.loadHardwareOnClient();
        });
    }
}

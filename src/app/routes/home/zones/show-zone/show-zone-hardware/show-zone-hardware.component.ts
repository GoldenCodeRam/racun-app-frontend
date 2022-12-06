import { Component, Injector, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject } from "rxjs";
import { DeleteHardwareOnZoneModalComponent } from "src/app/components/modals/hardware/delete-hardware-on-zone-modal/delete-hardware-on-zone-modal.component";
import { SelectHardwareModalComponent } from "src/app/components/modals/hardware/select-hardware-modal/select-hardware-modal.component";
import { Hardware, HardwareOnZone } from "src/app/models/hardware";
import { Zone } from "src/app/models/zone";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok, Result } from "ts-results";

@Component({
    selector: "app-show-zone-hardware",
    templateUrl: "./show-zone-hardware.component.html",
    styleUrls: ["./show-zone-hardware.component.sass"],
})
export class ShowZoneHardwareComponent implements OnInit {
    @Input("zone")
    public zone!: Zone;

    public loader = new BehaviorSubject(true);

    public hardwareOnZone: HardwareOnZone[] = [];

    constructor(
        private hardwareApiService: HardwareApiService,
        private modalService: NgbModal,
        private loaderService: MainLoaderService
    ) {}

    public async ngOnInit() {
        this.hardwareOnZone =
            await this.hardwareApiService.getHardwareOnZonesByZoneId(
                this.zone.id
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
                            await this.hardwareApiService.createHardwareOnZones(
                                {
                                    hardwareId: hardware.val.id,
                                    zoneId: this.zone.id,
                                }
                            );
                            return Ok({
                                header: "Equipo asignado",
                                body: "El equipo se ha asignado a la zona correctamente.",
                            });
                        } catch (error: any) {
                            return Err(error);
                        }
                    });
                }
            },
            (_) => {}
        );
    }

    public openDeleteHardwareOnZoneModal(hardwareOnZone: HardwareOnZone) {
        this.modalService.open(DeleteHardwareOnZoneModalComponent, {
            centered: true,
            injector: Injector.create({
                providers: [
                    { provide: HardwareOnZone, useValue: hardwareOnZone },
                ],
            }),
        });
    }
}

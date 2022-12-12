import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeleteHardwareModalComponent } from "src/app/components/modals/hardware/delete-hardware-modal/delete-hardware-modal.component";
import { EditHardwareModalComponent } from "src/app/components/modals/hardware/edit-hardware-modal/edit-hardware-modal.component";
import { Hardware } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";

@Component({
    selector: "app-show-hardware",
    templateUrl: "./show-hardware.component.html",
    styleUrls: ["./show-hardware.component.sass"],
})
export class ShowHardwareComponent implements OnInit {
    public hardware!: Hardware;

    constructor(
        private route: ActivatedRoute,
        private hardwareApiService: HardwareApiService,
        private modalService: NgbModal,
        private mainLoaderService: MainLoaderService
    ) {}

    async ngOnInit() {
        this.mainLoaderService.doWithLoadingScreen(async () => {
            const result = await this.hardwareApiService.getHardwareById(
                this.route.snapshot.params["hardwareId"]
            );
            if (result.ok) {
                this.hardware = result.val;
            }
        });
    }

    public openEditHardwareModal() {
        this.modalService.open(EditHardwareModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Hardware, useValue: this.hardware }],
            }),
        });
    }

    public openDeleteHardwareModal() {
        this.modalService.open(DeleteHardwareModalComponent, {
            centered: true,

            injector: Injector.create({
                providers: [{ provide: Hardware, useValue: this.hardware }],
            }),
        });
    }
}

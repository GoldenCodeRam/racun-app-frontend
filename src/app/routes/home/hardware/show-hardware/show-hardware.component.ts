import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeleteHardwareModalComponent } from "src/app/components/modals/hardware/delete-hardware-modal/delete-hardware-modal.component";
import { EditHardwareModalComponent } from "src/app/components/modals/hardware/edit-hardware-modal/edit-hardware-modal.component";
import { Hardware } from "src/app/models/hardware";
import { HardwareApiService } from "src/app/services/api/hardware/hardware-api.service";

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
        private modalService: NgbModal
    ) {}

    async ngOnInit() {
        this.hardware = await this.hardwareApiService.getHardwareById(
            this.route.snapshot.params["hardwareId"]
        );
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

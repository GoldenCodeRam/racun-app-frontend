import { Component, Injector, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject } from "rxjs";
import { CreateContractModalComponent } from "src/app/components/modals/contracts/create-contract-modal/create-contract-modal.component";
import { CreateInvoiceModalComponent } from "src/app/components/modals/invoices/create-invoice-modal/create-invoice-modal.component";
import { Client } from "src/app/models/client";
import { Contract } from "src/app/models/contract";
import { ClientAccount } from "src/app/models/clientAccount";
import { ContractsApiService } from "src/app/services/api/contracts/contracts-api.service";

@Component({
    selector: "app-create-contract",
    templateUrl: "./create-contract.component.html",
    styleUrls: ["./create-contract.component.sass"],
})
export class CreateContractComponent implements OnInit {
    @Input("client")
    public client!: Client;

    public clientContracts: Contract[] = [];

    public loading = new BehaviorSubject<boolean>(true);

    constructor(
        private modalService: NgbModal,
        private contractsApiService: ContractsApiService
    ) {}

    async ngOnInit() {
        if (this.client.clientAccount) {
            this.clientContracts =
                await this.contractsApiService.getContractsByClientAccount(
                    this.client.clientAccount.id
                );
            this.loading.next(false);
        }
    }

    generateInvoice(contractId: number) {
        this.modalService.open(CreateInvoiceModalComponent, {
            centered: true,
            injector: Injector.create({
                providers: [
                    {
                        provide: "contractId",
                        useValue: contractId,
                    },
                    {
                        provide: ClientAccount,
                        useValue: this.client.clientAccount,
                    },
                ],
            }),
        });
    }

    openCreateContractModal() {
        this.modalService.open(CreateContractModalComponent, {
            fullscreen: true,
            scrollable: true,
            injector: Injector.create({
                providers: [
                    {
                        provide: Client,
                        useValue: this.client,
                    },
                ],
            }),
        });
    }
}

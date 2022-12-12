import { Component, Injector, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "src/app/components/modals/confirm-modal/confirm-modal.component";
import { CreateContractModalComponent } from "src/app/components/modals/contracts/create-contract-modal/create-contract-modal.component";
import { CreateInvoiceModalComponent } from "src/app/components/modals/invoices/create-invoice-modal/create-invoice-modal.component";
import { Client } from "src/app/models/client";
import { ClientAccount } from "src/app/models/clientAccount";
import {
    ContractDto,
    ContractsApiService,
} from "src/app/services/api/contracts/contracts-api.service";
import { InvoiceDto } from "src/app/services/api/invoices/invoices-api.service";
import { MainLoaderService } from "src/app/services/components/loaders/main-loader.service";
import { Err, Ok } from "ts-results";

@Component({
    selector: "app-create-contract",
    templateUrl: "./create-contract.component.html",
    styleUrls: ["./create-contract.component.sass"],
})
export class CreateContractComponent implements OnInit {
    @Input("client")
    public client!: Client;

    public clientContract?: ContractDto & {
        invoices: InvoiceDto[];
    };

    constructor(
        private modalService: NgbModal,
        private contractsApiService: ContractsApiService,
        private mainLoaderService: MainLoaderService
    ) {}

    async ngOnInit() {
        this.load();
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

    endContract(id: number) {
        this.modalService
            .open(ConfirmModalComponent, {
                centered: true,
                injector: Injector.create({
                    providers: [
                        {
                            provide: String,
                            useValue:
                                "¿Estás seguro de que deseas terminar el contrato? Recuerda que si el contrato tiene facturas pendientes por pagar, no se podrá terminar.",
                        },
                    ],
                }),
            })
            .result.then(async (result) => {
                if (result) {
                    await this.mainLoaderService.doWithLoadingScreen(
                        async () => {
                            const result =
                                await this.contractsApiService.terminateContract(
                                    id
                                );

                            if (result.ok) {
                                return Ok({
                                    header: "Contrato terminado",
                                    body: "Se ha terminado el contrato correctamente.",
                                });
                            } else {
                                return Err({
                                    header: "Contrato no terminado",
                                    body: "No se ha podido terminar el contrato, por favor revisa las facturas pendientes.",
                                });
                            }
                        }
                    );

                    this.load();
                }
            });
    }

    openCreateContractModal() {
        this.modalService
            .open(CreateContractModalComponent, {
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
            })
            .result.then(() => {
                this.load();
            });
    }

    private load() {
        this.clientContract = undefined;

        this.mainLoaderService.doWithLoadingScreen(async () => {
            if (this.client.clientAccount) {
                const result =
                    await this.contractsApiService.getContractsByClientAccount(
                        this.client.clientAccount.id
                    );

                if (result.ok) {
                    this.clientContract = result.val;
                }
            }
        });
    }
}

import { Component, Injectable, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Client } from "src/app/models/client";
import { Hardware } from "src/app/models/hardware";
import { SearchResult } from "src/app/services/api/apiTypes";
import { SearchFunctionService } from "src/app/services/components/search/search-list/search-function.service";

@Injectable()
class SearchFunction extends SearchFunctionService<Client> {
    public async search(
        userSearch: string,
        currentSearchPage: number,
        searchLimit: number
    ): Promise<SearchResult<Client>> {
        return this.getClients(userSearch, currentSearchPage, searchLimit);
    }
}

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    providers: [
        {
            provide: SearchFunctionService<Client>,
            useClass: SearchFunction,
        },
    ],
    styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
    // This constant is used to determine the amount of clients searched.
    readonly CLIENT_SEARCH_LIMIT = 5;

    public userSearch: string = "";

    public clients: Client[] = [];

    public currentPage: number = 0;
    public paginationCount: number = 0;

    hardware: Hardware[] = [
        {
            id: "123123123",
            model: "TP-Link Archer C6.",
            name: "TP-Link 2022",
            details: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            model: "TP-Link Archer C6.",
            name: "TP-Link 2022",
            details: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            model: "TP-Link Archer C6.",
            name: "TP-Link 2022",
            details: "Cambiar el otro mes",
        },
    ];

    constructor(public searchFunctionService: SearchFunctionService<Client>) {}

    formClient = new FormGroup({
        first_name: new FormControl("", Validators.required),
        last_name: new FormControl("", Validators.required),
        type_document: new FormControl("", Validators.required),
        document: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
    });

    async ngOnInit() {}

    initForm() {
        this.formClient = new FormGroup({
            first_name: new FormControl("", Validators.required),
            last_name: new FormControl("", Validators.required),
            type_document: new FormControl("", Validators.required),
            document: new FormControl("", Validators.required),
            phone: new FormControl("", Validators.required),
            email: new FormControl("", Validators.required),
            address: new FormControl("", Validators.required),
        });
    }

    //Trae la informacion del usuario seleccionado (Documento lo trae cc-123312 y lo separa )
    getInfo(client: Client) {
        console.log(client);
        this.formClient.setValue({
            first_name: client.firstName || "",
            last_name: client.lastName || "",
            address: client.address,
            document: client.document.split("-")[1],
            email: client.email || "",
            phone: client.phone,
            type_document: client.document.split("-")[0],
        });
    }
    clearForm() {
        this.initForm();
    }

    addClient() {
        var client: Client = {
            id: 0,
            firstName: "" + this.formClient.get("first_name")?.value,
            lastName: "" + this.formClient.get("last_name")?.value,
            address: "" + this.formClient.get("address")?.value,
            document:
                "" +
                this.formClient.get("type_doc")?.value +
                "-" +
                this.formClient.get("document")?.value,
            phone: "" + this.formClient.get("phone")?.value,
            email: "" + this.formClient.get("email")?.value,
        };
    }
}

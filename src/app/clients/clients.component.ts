import cli from "@angular/cli";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Client, Hadware, Type_document } from "../models/Client";
import { ClientsService } from "./clients.service";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
    clients: Client[] = [
        {
            id: 123123,
            firstName: "Prueba 1",
            lastName: "Prueba Apellido",
            document: "CC-1099218039",
            phone: "321328212",
            address: "Cra 4 # 12 asdasd",
            email: "rpq@gmail.com"
        },
        {
            id: 123123,
            firstName: "Prueba 2",
            lastName: "Prueba Apellido",
            document: "CC-1099218039",
            phone: "321328212",
            address: "Cra 4 # 12 asdasd",
            email: "rpq@gmail.com"
        }, {
            id: 123123,
            firstName: "Prueba 1",
            lastName: "Prueba Apellido",
            document: "CC-1099218039",
            phone: "321328212",
            address: "Cra 4 # 12 asdasd",
            email: "rpq@gmail.com"
        }, {
            id: 123123,
            firstName: "Prueba 1",
            lastName: "Prueba Apellido",
            document: "CC-1099218039",
            phone: "321328212",
            address: "Cra 4 # 12 asdasd",
            email: "rpq@gmail.com"
        }

    ];

    hardware: Hadware[] = [
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
        }
    ];

    type_doc: Type_document[] = [

    ]

    constructor(private clientService: ClientsService) { }

    formClient = new FormGroup({
        first_name: new FormControl("", Validators.required),
        last_name: new FormControl("", Validators.required),
        type_document: new FormControl("", Validators.required),
        document: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),

    })



    ngOnInit(): void {
        this.clientService.getClients().subscribe({
            next: (clients: Client[]) => (this.clients = clients),
            error: (err) => console.log(err),
        });
        this.clientService.getTypeDocs().subscribe({
            next: (type_document: Type_document[]) => (this.type_doc = type_document),
            error: (err) => console.log(err),
        })
    }

    initForm(){
        this.formClient=new FormGroup({
            first_name: new FormControl("", Validators.required),
            last_name: new FormControl("", Validators.required),
            type_document: new FormControl("", Validators.required),
            document: new FormControl("", Validators.required),
            phone: new FormControl("", Validators.required),
            email: new FormControl("", Validators.required),
            address: new FormControl("", Validators.required),
    
        })
    }

    //Trae la informacion del usuario seleccionado (Documento lo trae cc-123312 y lo separa )
    getInfo(client: Client) {
        this.clientService.gethadwareByClient("" + client.id).subscribe({
            next: (hardware: Hadware[]) => (this.hardware = hardware),
            error: (err) => console.log(err),
        });
        console.log(client);
        this.formClient.setValue({
            first_name: client.firstName || '',
            last_name: client.lastName || '',
            address: client.address,
            document: client.document.split('-')[1],
            email: client.email || '',
            phone: client.phone,
            type_document: client.document.split('-')[0]
        }
        )
    }
    clearForm(){
        this.initForm();
    }

    addClient() {
        var client:Client = {
            id:0,
            firstName: ""+this.formClient.get('first_name')?.value,
            lastName:''+this.formClient.get('last_name')?.value,
            address:''+this.formClient.get('address')?.value,
            document:''+this.formClient.get('type_doc')?.value+'-'+this.formClient.get('document')?.value,
            phone:''+this.formClient.get('phone')?.value,
            email:''+this.formClient.get('email')?.value,
        }
        this.clientService.saveClient(client).subscribe({
            error: (err) => console.log(err),
        });

    }
}

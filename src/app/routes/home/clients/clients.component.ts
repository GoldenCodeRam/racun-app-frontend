import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/models/client";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
    public clients: Client[] = [];

    Equipos = [
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link 2022",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "3123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link Nuevo",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link Prestado",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link ll23323",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link EE122212",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link LLL223233",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link PPWWE112",
            detalles: "Cambiar el otro mes",
        },
        {
            id: "123123123",
            modelo: "TP-Link Archer C6.",
            nombre: "TP-Link PP232232",
            detalles: "Cambiar el otro mes",
        },
    ];

    constructor(private apiService: ApiService) {}

    async ngOnInit() {
        const clients = await this.apiService.getClients();
        this.clients = clients;
    }

    traerInfoClientes(id: any) {
        return id;
    }
}

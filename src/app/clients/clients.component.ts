import { Component, OnInit } from "@angular/core";
import { Client } from "../models/Client";
import { ClientsService } from "./clients.service";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
    clients: Client[] = [];

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

    constructor(private clientService: ClientsService) {}

    ngOnInit(): void {
        this.clientService.getClients().subscribe({
            next: (clients: Client[]) => (this.clients = clients),
            error: (err) => console.log(err),
        });
    }

    traerInfoClientes(id: any) {
        return id;
    }
}

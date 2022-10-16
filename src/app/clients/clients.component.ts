import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  // clients = [];

  
  clients = [
    { 
      document:10999218039,
      first_name:"Ronald Johan",
      last_name:"Pineda Quitian",
      address:"Centro Hotel La Turra",
      service:" 25MB OPTICA",
      status:0,
    },{ 
      document:109912338039,
      first_name:"Johan Andres",
      last_name:"Quitian Gonzales",
      address:"31443644",
      service:" 25MB OPTICA",
      status:1,
    },
    { 
      document:10999218039,
      first_name:"Jon",
      last_name:"Quitian",
      address:"3144369116",
      service:" 25MB OPTICA",
      status:2,
    },
    { 
      document:10999218039,
      first_name:"Ronald Johan",
      last_name:"Pineda Quitian",
      address:"3144369116",
      service:" 25MB OPTICA",
      status:3,
    },
  ]

  Equipos=[
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link 2022",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"3123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link Nuevo",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link Prestado",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link ll23323",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link EE122212",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link LLL223233",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link PPWWE112",
      detalles:"Cambiar el otro mes"
    },
    {
      id:"123123123",
      modelo:"TP-Link Archer C6.",
      nombre:"TP-Link PP232232",
      detalles:"Cambiar el otro mes"
    },

  ]


  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      res => {

      },
      err => console.log(err)

    )
  }


  traerInfoClientes(id: any){
    return id;
  }
}

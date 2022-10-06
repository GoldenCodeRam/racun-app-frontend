import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = [];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      res => {

      },
      err => console.log(err)

    )
  }
}

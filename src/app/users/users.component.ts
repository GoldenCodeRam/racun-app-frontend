import { Component, OnInit } from '@angular/core';
import { Client } from '../models/Client';
import { UsersService } from "./users.service";
import { Rol, User } from '../models/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users: User[]) => (this.users = users),
      error: (err) => console.log(err),
  });
  }

  users: User[] = [
    {
      id:"Prueba 2",
      first_name: "Ronald Johan",
      last_name:"Pineda Quitian",
      password:"Prueba 2",
      email: "ronald.pineda01@uptc.edu.co",
    },
    {
      id:"Prueba 2",
      first_name: "Carlos Andres",
      last_name:"Garcia Ariza",
      password:"Prueba 2",
      email: "Prueba 2",
    },
    {
      id:"Prueba 2",
      first_name: "Prueba 2",
      last_name:"Prueba 2",
      password:"Prueba 2",
      email: "Prueba 2",
    },
    {
      id:"Prueba 2",
      first_name: "Prueba 2",
      last_name:"Prueba 2",
      password:"Prueba 2",
      email: "Prueba 2",
    },

  ];

  roles: Rol[]=[
    {
      name:"Admin",
      value:"Adm",
    },
    {
      name:"Vendedor",
      value:"Vnd",
    },
    {
      name:"Usuario",
      value:"user",
    }
  ]

  rolSelected!: Rol;


  filterByRol(rol:any){
    console.log(this.rolSelected);
    
    this.usersService.getUsersByRols(rol.value).subscribe({
      next: (users: User[]) => (this.users = users),
      error: (err) => console.log(err),
  });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client} from '../models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = '';

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.API_URI}/clients`);
  }

  getClient(id: string){
    return this.http.get(`${this.API_URI}/clients/${id}`)
  }

  saveClient(client:Client){
    return this.http.post(`${this.API_URI}/clients`, client)
  }

  updateClient(id:string, updateClient:Client): Observable<Client>{
    return this.http.put(`${this.API_URI}/clients/${id}`, updateClient);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Zone } from '../models/Zone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  API_URI = '';

  constructor(private http: HttpClient) { }

  getZones(){
    return this.http.get(`${this.API_URI}/zones`);
  }

  getZone(id: string){
    return this.http.get(`${this.API_URI}/zones/${id}`)
  }

  saveZone(zone:Zone){
    return this.http.post(`${this.API_URI}/zones`, zone)
  }

  updateZone(id: string|number, updateZone:Zone): Observable<Zone>{
    return this.http.put(`${this.API_URI}/zones/${id}`, updateZone);
  }

  deleteZone(id: number) {
    return this.http.delete(`${this.API_URI}/zones/${id}`);
  }

}

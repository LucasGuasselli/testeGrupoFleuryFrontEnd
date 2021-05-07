import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> 
  {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/api/cliente/`);
  }

}

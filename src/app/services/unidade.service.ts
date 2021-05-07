import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Unidade } from '../models/unidade.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Unidade[]> 
  {
    return this.http.get<Unidade[]>(`${API_CONFIG.baseUrl}/api/unidade/`);
  }

}

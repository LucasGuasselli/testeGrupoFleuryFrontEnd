import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ficha } from '../models/ficha.model';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FichaService {
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ficha[]> 
  {
    return this.http.get<Ficha[]>(`${API_CONFIG.baseUrl}/api/ficha/`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { StoredProcedure } from '../models/storedProcedure';

@Injectable({
  providedIn: 'root'
})
export class StoredProcedureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StoredProcedure[]> 
  {
    return this.http.get<StoredProcedure[]>(`${API_CONFIG.baseUrl}/api/storedProcedure/`);
  }
}

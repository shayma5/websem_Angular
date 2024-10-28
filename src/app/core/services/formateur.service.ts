// formateur.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from '../models/formateur.model'; // Import your Formateur model

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private apiUrl = 'http://localhost:8080/formateurs'; // Update with your API URL

  constructor(private http: HttpClient) { }

  createFormateur(formateur: Formateur): Observable<any> {
    return this.http.post(this.apiUrl, formateur, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.apiUrl);
  }

  getFormateur(nom: string): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiUrl}/${nom}`);
  }

  updateFormateur(oldName: string, updatedFormateur: Formateur): Observable<any> {
    return this.http.put(`${this.apiUrl}/${oldName}`, updatedFormateur, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteFormateur(nom: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${nom}`);
  }
}

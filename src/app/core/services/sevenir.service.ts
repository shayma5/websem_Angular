import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Souvenir } from '../models/souvenir.model'; // Make sure to create this model

@Injectable({
  providedIn: 'root'
})
export class SouvenirService {
  private baseUrl = 'http://localhost:8080/souvenir'; // Adjust the URL as necessary

  constructor(private http: HttpClient) { }

  getAllSouvenirs(): Observable<Souvenir[]> {
    return this.http.get<Souvenir[]>(this.baseUrl);
  }

  getSouvenir(nom: string): Observable<Souvenir> {
    return this.http.get<Souvenir>(`${this.baseUrl}/${nom}`);
  }

  createSouvenir(souvenir: Souvenir): Observable<any> {
    return this.http.post(this.baseUrl, souvenir, { headers: this.getHeaders() });
  }

  updateSouvenir(oldName: string, souvenir: Souvenir): Observable<any> {
    return this.http.put(`${this.baseUrl}/${oldName}`, souvenir, { headers: this.getHeaders() });
  }

  deleteSouvenir(nom: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${nom}`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN' // Adjust if needed
    });
  }
}

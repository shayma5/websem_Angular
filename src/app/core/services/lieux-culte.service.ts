import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LieuCulte } from '../models/lieu-culte.model'; // Import the model you will create

@Injectable({
  providedIn: 'root'
})
export class LieuxCulteService {
  private apiUrl = 'http://localhost:8080/lieuCulte'; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  getAllLieuxCultes(): Observable<LieuCulte[]> {
    return this.http.get<LieuCulte[]>(this.apiUrl);
  }

  createLieuCulte(lieuCulte: LieuCulte): Observable<LieuCulte> {
    return this.http.post<LieuCulte>(this.apiUrl, lieuCulte, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateLieuCulte(nom: string, lieuCulte: LieuCulte): Observable<LieuCulte> {
    return this.http.put<LieuCulte>(`${this.apiUrl}/${nom}`, lieuCulte, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteLieuCulte(nom: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${nom}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LieuTouristique } from '../models/lieu-touristique.model'; // Import the model

@Injectable({
  providedIn: 'root'
})
export class LieuxTouristiqueService {
  private apiUrl = 'http://localhost:8080/lieuTouristique'; // Adjust the URL based on your server configuration

  constructor(private http: HttpClient) {}

  createLieuTouristique(lieu: LieuTouristique): Observable<any> {
    return this.http.post<any>(this.apiUrl, lieu);
  }

  getAllLieuxTouristiques(): Observable<LieuTouristique[]> {
    return this.http.get<LieuTouristique[]>(this.apiUrl);
  }

  getLieuTouristique(nom: string): Observable<LieuTouristique> {
    return this.http.get<LieuTouristique>(`${this.apiUrl}/${nom}`);
  }

  updateLieuTouristique(nom: string, updatedLieu: LieuTouristique): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${nom}`, updatedLieu);
  }

  deleteLieuTouristique(nom: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${nom}`);
  }
}

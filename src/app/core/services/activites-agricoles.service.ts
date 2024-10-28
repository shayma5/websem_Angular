import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiviteAgricole } from '../models/activite-agricole.model';

@Injectable({
  providedIn: 'root'
})
export class ActiviteAgricoleService {
  private apiUrl = 'http://localhost:8080/activiteAgricole'; // Update this with your server URL if needed

  constructor(private http: HttpClient) {}

  // Get all activities
  getActivitesAgricoles(): Observable<ActiviteAgricole[]> {
    return this.http.get<ActiviteAgricole[]>(this.apiUrl);
  }

  // Optionally, add methods for create, update, and delete if needed
}

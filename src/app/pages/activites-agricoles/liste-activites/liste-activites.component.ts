import { Component, OnInit } from '@angular/core';
import { ActiviteAgricole } from 'src/app/core/models/activite-agricole.model';
import { ActiviteAgricoleService } from '../../../core/services/activites-agricoles.service'; // Import the service

@Component({
  selector: 'app-liste-activites',
  templateUrl: './liste-activites.component.html',
  styleUrls: ['./liste-activites.component.scss']
})
export class ListeActivitesComponent implements OnInit {
  activites: ActiviteAgricole[] = []; // Initialize as an empty array

  constructor(private activiteAgricoleService: ActiviteAgricoleService) { }

  ngOnInit(): void {
    this.fetchActivites(); // Fetch activities on component initialization
  }

  // Method to get activities from the service
  fetchActivites(): void {
    this.activiteAgricoleService.getActivitesAgricoles().subscribe(
      (data: ActiviteAgricole[]) => {
        this.activites = data; // Assign fetched data to activites array
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching activities:', error);
      }
    );
  }
}

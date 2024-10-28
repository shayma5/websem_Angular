import { Component, OnInit } from '@angular/core';
import { LieuxTouristiqueService } from '../../core/services/lieux-touristique.service';
import { LieuTouristique } from '../../core/models/lieu-touristique.model';

@Component({
  selector: 'app-lieux-touristique',
  templateUrl: './lieux-touristique.component.html',
  styleUrls: ['./lieux-touristique.component.scss']
})
export class LieuxTouristiqueComponent implements OnInit {
  lieuxTouristiques: LieuTouristique[] = [];
  newLieu: LieuTouristique = { nom: '', localisation: '', capaciteDAccueil: 0 }; // For creating new Lieu

  constructor(private lieuxTouristiqueService: LieuxTouristiqueService) {}

  ngOnInit(): void {
    this.fetchLieuxTouristiques();
  }

  fetchLieuxTouristiques(): void {
    this.lieuxTouristiqueService.getAllLieuxTouristiques().subscribe(
      (data) => {
        this.lieuxTouristiques = data;
      },
      (error) => {
        console.error('Error fetching lieux touristiques:', error);
      }
    );
  }

  addLieu(): void {
    this.lieuxTouristiqueService.createLieuTouristique(this.newLieu).subscribe(
      (response) => {
        console.log('Lieu created:', response);
        this.fetchLieuxTouristiques(); // Refresh the list after adding
        this.newLieu = { nom: '', localisation: '', capaciteDAccueil: 0 }; // Reset form
      },
      (error) => {
        console.error('Error creating lieu:', error);
      }
    );
  }

  updateLieu(lieu: LieuTouristique): void {
    const updatedLieu = { ...lieu }; // Make any changes here as needed
    this.lieuxTouristiqueService.updateLieuTouristique(lieu.nom, updatedLieu).subscribe(
      (response) => {
        console.log('Lieu updated:', response);
        this.fetchLieuxTouristiques(); // Refresh the list after updating
      },
      (error) => {
        console.error('Error updating lieu:', error);
      }
    );
  }

  deleteLieu(nom: string): void {
    this.lieuxTouristiqueService.deleteLieuTouristique(nom).subscribe(
      (response) => {
        console.log('Lieu deleted:', response);
        this.fetchLieuxTouristiques(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting lieu:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { SouvenirService } from '../../core/services/sevenir.service';
import { Souvenir } from '../../core/models/souvenir.model'; // Ensure this path is correct

@Component({
  selector: 'app-souvenirs',
  templateUrl: './souvenirs.component.html',
  styleUrls: ['./souvenirs.component.scss']
})
export class SouvenirsComponent implements OnInit {
  souvenirs: Souvenir[] = [];
  newSouvenir: Souvenir = { nom: '', description: '', stock: 0, prix: 0 }; // Initialize the new souvenir

  constructor(private souvenirService: SouvenirService) {}

  ngOnInit(): void {
    this.loadSouvenirs();
  }

  loadSouvenirs(): void {
    this.souvenirService.getAllSouvenirs().subscribe(data => {
      this.souvenirs = data;
    });
  }

  addSouvenir(): void {
    this.souvenirService.createSouvenir(this.newSouvenir).subscribe(() => {
      this.loadSouvenirs(); // Reload the list after adding
      this.newSouvenir = { nom: '', description: '', stock: 0, prix: 0 }; // Reset the form
    });
  }

  deleteSouvenir(nom: string): void {
    this.souvenirService.deleteSouvenir(nom).subscribe(() => {
      this.loadSouvenirs(); // Reload the list after deletion
    });
  }
}

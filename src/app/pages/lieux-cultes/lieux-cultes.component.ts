import { Component, OnInit } from '@angular/core';
import { LieuxCulteService } from '../../core/services/lieux-culte.service';
import { LieuCulte } from '../../core/models/lieu-culte.model';

@Component({
  selector: 'app-lieux-cultes',
  templateUrl: './lieux-cultes.component.html',
  styleUrls: ['./lieux-cultes.component.scss']
})
export class LieuxCultesComponent implements OnInit {
  activites: LieuCulte[] = []; // Update variable name to match the context

  constructor(private lieuxCulteService: LieuxCulteService) {}

  ngOnInit(): void {
    this.loadLieuxCultes();
  }

  loadLieuxCultes(): void {
    this.lieuxCulteService.getAllLieuxCultes().subscribe(
      (data: LieuCulte[]) => {
        this.activites = data;
      },
      (error) => {
        console.error('Error fetching lieux cultes:', error);
      }
    );
  }

  // Add methods for creating, updating, and deleting if needed
}

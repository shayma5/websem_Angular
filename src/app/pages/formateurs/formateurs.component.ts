import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/core/models/formateur.model';
import { FormateurService } from 'src/app/core/services/formateur.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  formateurs: Formateur[] = [];

  constructor(private formateurService: FormateurService) { }

  ngOnInit(): void {
      this.getAllFormateurs();
  }

  getAllFormateurs(): void {
      this.formateurService.getAllFormateurs().subscribe(
          (data: Formateur[]) => {
              this.formateurs = data;
          },
          (error) => {
              console.error('Error fetching formateurs:', error);
          }
      );
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carriere',
  templateUrl: './carriere.component.html',
  styleUrls: ['./carriere.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
]
})
export class CarriereComponent {
  public emplois = [
    {
      nom: ' Stagiaire Développeur Full-Stack',
      description: 'la startup Tyllt, offre un service innovant de dépôt de caution en ligne. L\'application web associée à ce service repose sur une architecture avec un back-end développé en Symfony et un front-end en Angular. La principale mission confiée durant ce stage était de concevoir, maintenir et optimiser de nouvelles fonctionnalités, ainsi que de corriger celles existantes.',
      descriptionCourte: 'Stage de fin de deuxième année de BUT Informatique',
      competences: ['Symfony', 'Angular', 'Scrum', 'Git', 'Travail d\'équipe'],
      photo: 'assets/img/tyllt.png',
      dates: 'Avril 2024 - Juin 2024 (2 mois)',
      rapport: '/assets/pdf/victor-bernard-rapport-tyllt.pdf'
    },
    {
      nom: 'Alternant Développeur Full-Stack',
      description: 'Emploi actuel',
      descriptionCourte: 'Alternance de 3ème année de BUT Informatique',
      competences: ['Angular', 'Java', 'Méthodes Agiles', 'Git', 'Travail d\'équipe'],
      photo: 'assets/img/logo-agirc-arrco.jpg',
      dates: 'septembre 2024 - septembre 2025 (1 an)',
      rapport: '/carriere'
    }
  ];

  constructor() { }

}

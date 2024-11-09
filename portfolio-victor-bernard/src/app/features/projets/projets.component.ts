import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule]
})
export class ProjetsComponent implements OnInit {
  projets = [
    {
      nom: 'NiceFilms',
      description: 'L\'objectif du projet était de développer une plateforme en ligne pour suivre les séries, partager son avis et sa progression. Travaillant en équipe de six, nous avons utilisé la méthodologie Scrum sur une période de deux semaines avec trois itérations.',
      descriptionCourte: 'Suivi et évaluation de séries',
      competences: ['Symfony', 'CSS', 'Git', 'JavaScript', 'SQL', 'Méthodes agiles', 'Travail d\'équipe'],
      photo: 'assets/img/symfony2.png',
      categorie: 'Web',
      pdf: 'assets/pdf/retour%20d\'experience%20site%20web%20Victor%20BERNARD.pdf' 
    },
    {
      nom: 'Biosphere 7',
      description: 'Le projet Biosphère 7 a été divisé en deux phases : la première consistait à coder les actions d\'un jeu selon les niveaux, comme planter ou couper des plantes. La deuxième phase était de développer une IA capable de jouer en fonction de ces actions.',
      descriptionCourte: 'Jeu de plateau et IA',
      competences: ['Java', 'IA', 'Git ', 'Netbeans'],
      photo: 'assets/img/Biosphere7.png',
      categorie: 'Java',
      pdf: 'assets/pdf/retour%20d\'experience%20Biosphere%20Victor%20BERNARD.pdf' 
    },
    {
      nom: 'Hyperstellar',
      description: 'Ce projet consistait à développer une application en C# avec une interface graphique, répondant aux besoins d\'un client. Il s\'agit d\'un jeu de plateau, se déroulant dans l\'espace, avec diverses extensions. Les étapes comprenaient l\’analyse des besoins, la conception, l\'implémentation et les tests.',
      descriptionCourte: 'Jeu de plateau',
      competences: ['C#', 'Tests unitaires', 'VSCode', 'Git', 'Trello', 'Travail d\'équipe'],
      photo: 'assets/img/plateauJeuIHM.png',
      categorie: 'C#',
      pdf: 'assets/pdf/retour%20d\'experience%20Hyperstellar%20Victor%20BERNARD.pdf'
    },
    {
      nom: 'Odomo',
      description: 'L\'objectif du projet Odomo était de créer une station météorologique, divisée en trois sections : météo, chauffage et jardin. J\'ai participé à ce projet en implémentant des matrices pour afficher les données relatives à la pluviométrie et au système de chauffage.',
      descriptionCourte: 'Station météorologique',
      competences: ['Java', 'Tests unitaires', 'Git', 'NetBeans'],
      photo: 'assets/img/Odomo.png',
      categorie: 'Java',
      pdf: 'assets/pdf/retour%20d\'experience%20Odomo%20Victor%20BERNARD.pdf'
    },
    {
      nom: 'Machines virtuelles',
      description: 'Dans ce projet en binôme, nous avons configuré un environnement Nextcloud dans un réseau virtuel et rédigé un tutoriel pour guider toute personne dans l\'installation.',
      descriptionCourte: 'Configuration réseau',
      competences: ['Linux', 'Markdown', 'Anglais', 'Travail d\'équipe'],
      photo: 'assets/img/Reseau1.png',
      categorie: 'Réseau',
      pdf: 'assets/pdf/retour%20d\'experience%20SAEReseau%20Victor%20BERNARD.pdf'
    }
      
  ];

  filtres = ['Web', 'C#', 'Java', 'Réseau'];
  categorieFiltree: string = '';

  constructor() {}

  ngOnInit() {}

  // Appliquer ou désélectionner un filtre
  appliquerFiltre(filtre: string) {
    this.categorieFiltree = (this.categorieFiltree === filtre) ? '' : filtre;
  }

  // Retourner les projets filtrés
  getProjetsFiltres() {
    if (this.categorieFiltree === '') {
      return this.projets;
    }
    return this.projets.filter(
      (projet) => projet.categorie === this.categorieFiltree
    );
  }

  // Fonction pour récupérer la couleur de la catégorie
  getCategoryColor(categorie: string): string {
    const couleurs: { [key: string]: string } = {
      'Web': '#42a5f5',
      'Réseau': '#66bb6a',
      'Java': '#ff7043',
      'C#': '#ab47bc',
    };
    return couleurs[categorie] || '#9e9e9e'; // Couleur par défaut si non définie
  }
}

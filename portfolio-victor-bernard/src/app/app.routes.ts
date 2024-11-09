import { Routes } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { ProjetsComponent } from './features/projets/projets.component';
import { CarriereComponent } from './features/carriere/carriere.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'carriere', component: CarriereComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent },
];

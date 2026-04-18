import { SalutationComponent } from './salutation/salutation'; 
import { ProfilComponent } from './profil/profil';  
import { Component } from '@angular/core';
  
@Component({ 
  selector: 'app-root', 
  standalone: true, 
  imports: [SalutationComponent,ProfilComponent],  
  templateUrl: './app.html', 
  styleUrls: ['./app.css'] 
}) 

export class AppComponent { 
  titre       = 'Mon Application Angular 20'; 
  description = 'Ma première application Angular !'; 
  annee       = 2025; 
  version     = 'Angular v20'; 
} 
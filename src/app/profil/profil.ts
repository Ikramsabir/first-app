import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class ProfilComponent {
  nom : string = "Sabir";
  prenom : string = "Ikram";
  email : string = "ikramsabir@gmail.com";
  niveau : number = 1; 
}

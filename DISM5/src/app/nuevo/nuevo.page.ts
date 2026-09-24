import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonInput]
})
export class NuevoPage implements OnInit {
  UsuarioData: Usuario = {
    id: 0,
    nombre: '',
    edad: '',
    email: ''
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit() {
  }

  newUsuario() {
    this.apiService.createItem(this.UsuarioData).subscribe({
      next: () => {
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.error('Error al crear usuario:', err);
      }
    });
  }
}
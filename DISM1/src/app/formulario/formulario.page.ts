import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToggle, IonToolbar, IonList, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonList, IonToolbar, CommonModule, FormsModule, IonToggle, IonItem]
})
export class FormularioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

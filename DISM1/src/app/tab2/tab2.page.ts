import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonLabel, IonList, IonItem]
})
export class Tab2Page {
  lista = [
    {name: 'Sandia'},
    {name: 'Naranja'},
    {name: 'Fresa'},
    {name: 'Melón'},
    {name: 'Manzana'}
  ];
  constructor() {}

}

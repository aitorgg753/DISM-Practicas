import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList,
  IonLabel, IonItem, IonBadge } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { IonListHeader } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonBadge],
})
export class HomePage {
  latitud: any;
  longitud: any;
  direccionGeorreferenciada: any;
  urlNominatim: any;

  constructor(public http: HttpClient) {}

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;
    console.log('Current position:', coordinates);

    this.urlNominatim =
      'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + this.latitud + '&lon=' + this.longitud + '&addressdetails=1';
    this.http.get(this.urlNominatim).subscribe((data: any) => {
      this.direccionGeorreferenciada = data.display_name;
      console.log('Address Data:', this.direccionGeorreferenciada);
    });
  }
}
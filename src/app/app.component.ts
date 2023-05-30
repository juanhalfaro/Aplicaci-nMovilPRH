import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
   { title: 'Tramites', url: './tramites', icon: 'document' },
    { title: 'Asistencia', url: './asistencia', icon: 'calendar' },
    { title: 'Buzón', url: './buzon', icon: 'mail' },
    { title: 'Inicio de Sesión', url: './iniciosesion', icon: 'people' },
    { title: 'Registro', url: './registro', icon: 'person' },
    { title: 'Cerrar Sesión', url: './folder', icon: 'log-out'},
  ];
     
}






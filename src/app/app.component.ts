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
    { title: 'Buzón de Quejas', url: './buzon', icon: 'mail' },
    { title: 'Contacto', url: './contacto', icon: 'call' },
    { title: 'Ajustes', url: './ajustes', icon: 'cog' },
    { title: 'Cerrar Sesión', url: '/folder/Logout', icon: 'log-out'},
  ];
    
}






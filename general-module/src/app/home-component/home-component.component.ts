import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  public mivar: string = 'general-module';
  public mensajeHome: string = 'Mensaje Home';
  public mensajeHomespan: string = 'Principal';
}

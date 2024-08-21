import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {

  public inicioSesion: string = 'Iniciar sesión';
  public idioma: string = 'Idioma';
  public servicios: string = 'Popayán Servicios';

  public optionOne: string = 'Inicio'
  public optionTwo: string = 'Devs'
  public optionThree: string = 'Servicios'
  public optionFour: string = 'Blog'
  public optionFive: string = 'Contactanos'
  public optionSix: string = 'Idioma'

  changeName(): void {
    this.idioma = 'S Idioma';
  }

  public changeNamee = () => {
    this.idioma = 'I Idioma';
  }

}

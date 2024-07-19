import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  options: any[];
  selectedOption: any;

  constructor() {
    this.options = [
      { label: 'Iniciar Sesión', value: '1' },
      { label: 'Registrarse', value: '2' }
    ];
    this.selectedOption = this.options[0].value;
  }
 
  // Método para asegurar que siempre haya una opción seleccionada
  onSelectionChange() {
    if (!this.selectedOption) {
      this.selectedOption = this.options[0].value;
    }
  }
}
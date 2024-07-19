import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rutValidator, formatRut } from './rut-validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      socialname: ['', [Validators.required]],
      rut: ['', [Validators.required, rutValidator()]],
      emailregister: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onRutInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const rutControl = this.registerForm.get('rut');
    if (rutControl) {
      const cursorPosition = inputElement.selectionStart || 0;
      const formattedRut = formatRut(rutControl.value);
      rutControl.setValue(formattedRut, { emitEvent: false });
      setTimeout(() => inputElement.setSelectionRange(cursorPosition, cursorPosition));
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Handle the form submission
      console.log('Form Submitted', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

// src/app/rut-validation.ts
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rutValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const rut = control.value;
    if (!rut) {
      return null;
    }

    const isValid = validateRut(rut);
    return isValid ? null : { 'invalidRut': { value: control.value } };
  };
}

export function formatRut(rut: string): string {
  let cleanRut = rut.replace(/[^0-9kK]/g, '').toUpperCase();

  if (cleanRut.length <= 1) {
    return cleanRut;
  }

  let body = cleanRut.slice(0, -1);
  const verifier = cleanRut.slice(-1);

  // Add dots for every three digits from the end of the string
  body = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${body}-${verifier}`;
}

function validateRut(rut: string): boolean {
  const cleanRut = rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();

  if (!/^[0-9]+[0-9K]$/.test(cleanRut)) {
    return false;
  }

  const t = parseInt(cleanRut.slice(0, -1), 10);
  let m = 0;
  let s = 1;
  let c = t;

  for (; c; c = Math.floor(c / 10)) {
    s = (s + (c % 10) * (9 - (m++ % 6))) % 11;
  }

  const v = s > 0 ? '' + (s - 1) : 'K';
  return v === cleanRut.slice(-1);
}

import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static add(A:string, B:string, C:string) {
    return (form: AbstractControl) => {
      const partA = form.value[A];
      const partB = form.value[B];
      const answer = form.value[C];

      if (partA + partB === parseInt(answer)) {
        return null;
      }

      return { addError: true }
    }
  }

  static sub(A:string, B:string, C:string) {
    return (form: AbstractControl) => {
      const partA = form.value[A];
      const partB = form.value[B];
      const answer = form.value[C];

      if (partA - partB === parseInt(answer)) {
        return null;
      }

      return { subError: true }
    }
  }
}

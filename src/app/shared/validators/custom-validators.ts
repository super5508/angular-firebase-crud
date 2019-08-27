import { FormControl } from '@angular/forms';

export class CustomValidators {
  public static passwordsMatch(password: string, confirmedPassword: string) {
    return (control: FormControl): { [s: string]: boolean } => {
      console.log(password, confirmedPassword);
      if (password !== confirmedPassword) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }
}

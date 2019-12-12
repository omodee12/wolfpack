import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{

    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {
        if (control.value === 'tobi')
            return { shouldBeUnique: true};
        return null;
    }
}
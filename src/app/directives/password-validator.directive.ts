import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { passwordValidator } from '../validators/Validators';

@Directive({
  selector: '[password]',
  providers:[{provide:NG_VALIDATORS,useValue:passwordValidator,multi:true}]
})
export class PasswordValidatorDirective {

  constructor() { }

}

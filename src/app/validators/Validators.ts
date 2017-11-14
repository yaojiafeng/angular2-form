import {FormControl,FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export function mobileValidator(mobile: FormControl): any {
    let value = (mobile.value || '') + '';
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreq.test(value);
    console.log('mobile是否校验通过：' + valid);
    return valid ? null : { mobile: true };
  }
  export function mobileAsyncValidator(mobile: FormControl): any {
    let value = (mobile.value || '') + '';
    var myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreq.test(value);
    console.log('mobile是否校验通过：' + valid);
    return Observable.of(valid ? null :{mobile:true}).delay(5000);
  }
  export function passwordValidator(info: FormGroup) {
    let password: FormControl = info.get('password') as FormControl;
    let passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
    if(password!=null && passwordConfirm !=null){
    let valid: boolean = password.value === passwordConfirm.value;
    console.log('password是否校验通过：' + valid);
    return valid ? null : { password: {description:'密码和确认密码不匹配'} };
  }
  return null;
}

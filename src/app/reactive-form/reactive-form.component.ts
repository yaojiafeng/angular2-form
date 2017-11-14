import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { mobileValidator, passwordValidator,mobileAsyncValidator } from '../validators/Validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  private formModel: FormGroup;
  private fb: FormBuilder = new FormBuilder();
  
  constructor() {
    /*  this.formModel = new FormGroup({
        nickname: new FormControl(),
        emails: new FormArray([
          new FormControl(),
        ]),
        mobile: new FormControl(),
        passwordInfo: new FormGroup({
          password: new FormControl(),
          passwordConfirm: new FormControl()
        })
      })*/
    this.formModel = this.fb.group({
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      emails: this.fb.array([
        ['']
      ]),
      mobile: ['', mobileValidator,mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['',Validators.required],
        passwordConfirm: ['']
      }, { validator: passwordValidator }
      )
    })

  }

  createUser() {
    let nicknameValid: boolean = this.formModel.get('nickname').valid;
    console.log('nickname是否校验通过：' + nicknameValid);
    let nicknameErrors: any = this.formModel.get('nickname').errors;
    console.log('nickname的校验信息：' + JSON.stringify(nicknameErrors));
    if(this.formModel.valid) {
    console.log(this.formModel.value);
    }
  }
  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());

  }

  ngOnInit() {
  }

}

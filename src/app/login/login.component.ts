import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 /* user = {username: '', password: '', remember: false};*public dialogRef: MatDialogRef<LoginComponent>*/
 myForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<LoginComponent>,private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  /*onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }*/

}

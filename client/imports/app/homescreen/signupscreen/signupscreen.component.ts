import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { DBUsers } from '../../../../../both/collections/dbusers.collection';
/*
Import styles
*/
import template from './signupscreen.component.html';
// import style from './loginscreen.component.scss';

/*
Import styles
*/
import style from './signupscreen.component.scss';

@Component({
  selector: 'signupscreen',
  template,
  styles: [style]

})
export class SignupscreenComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  addDBUser(event){
    //console.log(event);
    console.log(this.addForm.value);
    // if(this.addForm.valid) {
    //   DBUsers.insert(this.addForm.value);
    //   this.addForm.reset();
    //   usernam = this.addForm.control.username.value
    //   console.log("You have successfully added user: " + usernam);
    // }
  }
}

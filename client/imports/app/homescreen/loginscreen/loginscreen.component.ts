
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/*
Import styles
*/
import template from './loginscreen.component.html';
// import style from './loginscreen.component.scss';

/*
Import styles
*/
@Component({
  selector: 'loginscreen',
  template
})
export class LoginscreenComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: [],
      password: []
    });
  }


}
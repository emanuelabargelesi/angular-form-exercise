import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  namesurname: string;
  constructor() {
    this.namesurname = ''
  }

  ngOnInit(): void {}

  onSubmit(values: Object) {
    console.log(values);
  }
}

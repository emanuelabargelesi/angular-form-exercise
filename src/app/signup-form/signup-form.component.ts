import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  namesurname: string = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.namesurname = params['namesurname'] || '';
    });
  }

  ngOnInit(): void {}

  onSubmit(values: Object) {
    console.log(values);
  }
}

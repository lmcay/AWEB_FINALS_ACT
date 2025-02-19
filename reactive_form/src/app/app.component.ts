import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive_form';
  userData: any = {};

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(""),
    password: new FormControl("")
  });

  onClickSubmit(data: any) {
    this.userData = data;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted: boolean;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: [Validators.required],
      password: [Validators.required]
    });
  }

  private signIn(): void {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }

    this.signIn();
  }

}

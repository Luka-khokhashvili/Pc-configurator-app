import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  signInForm: FormGroup;

  formElements: string[] = ['name', 'surname', 'email', 'password'];

  constructor(private fb: FormBuilder) {
    if (!fb) {
      throw new Error('FormBuilder is null. Unable to create form.');
    }

    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  determineInputType(fieldName: string): string {
    switch (fieldName) {
      case 'email':
        return 'email';
      case 'password':
        return 'password';
      default:
        return 'text';
    }
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.getRawValue());
      this.signInForm.reset();
    }
  }
}

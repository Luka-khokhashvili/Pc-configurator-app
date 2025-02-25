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

  /**
   * @constructor
   * @param {FormBuilder} fb - Angular form builder service, used to create reactive form controls.
   */
  constructor(private fb: FormBuilder) {
    if (!fb) {
      throw new Error('FormBuilder is null. Unable to create form.');
    }

    /**
     * Creates a reactive form with the following controls:
     *  - name: text input with length of 3 or more characters
     *  - surname: text input with length of 3 or more characters
     *  - email: email input with a valid email address
     *  - password: password input with length of 8 or more characters
     */
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  /**
   * Determines the input type for a given form field.
   *
   * @param {string} fieldName - The name of the form field.
   * @returns {string} The input type for the specified field.
   */
  determineInputType(fieldName: string): string {
    switch (fieldName) {
      case 'email':
        // Return 'email' for email fields
        return 'email';
      case 'password':
        // Return 'password' for password fields
        return 'password';
      default:
        // Return 'text' for all other fields
        return 'text';
    }
  }

  /**
   * Handles the form submission.
   * Logs the form values if the form is valid, then resets the form.
   */
  onSubmit() {
    // Check if the form is valid
    if (this.signInForm.valid) {
      // Log the form values to the console
      console.log(this.signInForm.getRawValue());
      // Reset the form to its initial state
      this.signInForm.reset();
    }
  }
}

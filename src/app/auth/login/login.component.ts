import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, route: ActivatedRoute, router: Router) {
    route.params.subscribe(val => {
      router.navigate(['/results']); // for ngZorro input load bug

      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    });
  }

  ngOnInit(): void {
  }


}

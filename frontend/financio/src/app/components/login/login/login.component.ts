import { Component, Renderer2, OnInit, OnDestroy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  constructor(private renderer: Renderer2) {}

  form!: FormGroup;
  


  ngOnInit(): void {
    this.renderer.addClass(document.body, 'index-bg');
    this.renderer.addClass(document.body, 'flex');

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });


  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'index-bg');
    this.renderer.removeClass(document.body, 'flex');
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Login data:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}

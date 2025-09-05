import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  styles:[`
    section{padding:60px 0}
    h2{text-align:center;margin:0;font-weight:900}
    form{max-width:740px;margin:0 auto;display:grid;gap:18px;margin-top:16px}
    .field{display:grid;gap:8px}
    label{font-weight:700}
    input,textarea{padding:14px 16px;border-radius:12px;border:1px solid #ddd;outline:none}
    small{color:#c00}
    .actions{text-align:center}
  `],
  template: `
  <section class="container">
    <h2>CONTACT ME</h2>
    <div class="divider"><i class="fa fa-star"></i></div>

    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="field">
        <label>Full name</label>
        <input formControlName="name" type="text" placeholder="Your name"/>
        @if (form.controls.name.touched && form.controls.name.invalid) {
          <small>A name is required.</small>
        }
      </div>

      <div class="field">
        <label>Email address</label>
        <input formControlName="email" type="email" placeholder="you@example.com"/>
        @if (form.controls.email.touched && form.controls.email.invalid) {
          <small>Email is not valid.</small>
        }
      </div>

      <div class="field">
        <label>Phone number</label>
        <input formControlName="phone" type="tel" placeholder="+20 ..."/>
        @if (form.controls.phone.touched && form.controls.phone.invalid) {
          <small>A phone number is required.</small>
        }
      </div>

      <div class="field">
        <label>Message</label>
        <textarea formControlName="message" rows="6" placeholder="Say hi..."></textarea>
        @if (form.controls.message.touched && form.controls.message.invalid) {
          <small>A message is required.</small>
        }
      </div>

      <div class="actions">
        <button class="btn btn-primary" [disabled]="form.invalid">Send</button>
      </div>
    </form>
  </section>
  `
})
export class ContactComponent {
  
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

  submit() {
    if (this.form.valid) {
      alert('Form submission successful!');
      this.form.reset();
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports:[RouterLink],
  styles:[`section{padding:80px 0;text-align:center}`],
  template: `
    <section class="container">
      <h2>404 - Not Found</h2>
      <p><a class="btn btn-primary" routerLink="/">Back to Home</a></p>
    </section>
  `
})
export class NotFoundComponent{}

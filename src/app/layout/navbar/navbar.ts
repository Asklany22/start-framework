import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styles: [`
    nav{position:sticky;top:0;z-index:50;background:var(--dark);color:#fff}
    .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 0}
    .brand{font-weight:900;letter-spacing:.5px}
    ul{list-style:none;display:flex;gap:16px;margin:0;padding:0}
    a{color:#fff;opacity:.85}
    a.active,a:hover{opacity:1}
    .menu-btn{display:none}
    @media (max-width:768px){
      .menu-btn{display:inline-flex;gap:8px;align-items:center}
      .links{display:none}
      .links.open{display:flex;flex-direction:column;gap:10px;background:var(--dark);padding:12px;border-radius:12px;margin-top:10px}
      .wrap{flex-wrap:wrap}
    }
  `],
  template: `
  <nav>
    <div class="container wrap">
      <a routerLink="/" class="brand">Start Framework</a>
      <button class="menu-btn btn btn-primary" (click)="open.set(!open())"><i class="fa fa-bars"></i> Menu</button>
      <ul class="links" [class.open]="open()">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
        <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class NavbarComponent{
  open = signal(false);
}

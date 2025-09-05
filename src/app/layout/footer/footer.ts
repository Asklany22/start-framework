import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  styles:[`
    footer{background:var(--dark);color:#fff;margin-top:40px}
    .top{padding:48px 0;display:grid;gap:24px}
    @media (min-width:900px){.top{grid-template-columns: repeat(3,1fr)}}
    .col h4{margin:0 0 12px;font-weight:900}
    .social{display:flex;gap:10px;flex-wrap:wrap}
    .social a{width:40px;height:40px;border-radius:50%;border:1px solid #fff;display:flex;align-items:center;justify-content:center}
    .bottom{background:#1a252f;text-align:center;padding:16px 0}
  `],
  template: `
  <footer>
    <div class="container top">
      <div class="col">
        <h4>LOCATION</h4>
        <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
      </div>
      <div class="col">
        <h4>AROUND THE WEB</h4>
        <div class="social">
          <a href="#" aria-label="facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="linkedin"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="dribbble"><i class="fab fa-dribbble"></i></a>
        </div>
      </div>
      <div class="col">
        <h4>ABOUT FREELANCER</h4>
        <p>Freelancer is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
      </div>
    </div>
    <div class="bottom">Copyright © Your Website 2025</div>
  </footer>
  `
})
export class FooterComponent{}

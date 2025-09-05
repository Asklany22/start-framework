import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  styles:[`
    .hero{background:var(--primary);color:#fff;padding:80px 0;text-align:center}
    .avatar{width:200px;height:200px;border-radius:50%;display:block;margin:0 auto 20px;background:#fff url('https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg') center/90% no-repeat}
    h1{font-size:44px;letter-spacing:1px;margin:12px 0 6px;font-weight:900}
    p{opacity:.9}
  `],
  template: `
    <header class="hero invert">
      <div class="container">
        <div class="avatar"></div>
        <h1>START FRAMEWORK</h1>
        <div class="divider"><i class="fa fa-star"></i></div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  `
})
export class HomeComponent {}

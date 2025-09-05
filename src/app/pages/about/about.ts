import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  styles:[`
    section{background:var(--primary);color:#fff;padding:60px 0}
    h2{text-align:center;margin:0;font-weight:900}
    .cols{display:grid;gap:20px;margin-top:16px}
    @media (min-width:900px){.cols{grid-template-columns:1fr 1fr}}
    .btns{display:flex;justify-content:center;margin-top:16px}
  `],
  template: `
  <section class="invert">
    <div class="container">
      <h2>ABOUT</h2>
      <div class="divider"><i class="fa fa-star"></i></div>
      <div class="cols">
        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
      <div class="btns"><a class="btn btn-outline-light" href="#"><i class="fa fa-download"></i>&nbsp; Free Download!</a></div>
    </div>
  </section>
  `
})
export class AboutComponent {}

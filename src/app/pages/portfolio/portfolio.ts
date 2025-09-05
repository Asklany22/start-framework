import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

type Item = { title:string; src:string; };

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports:[NgClass, NgStyle],
  styles:[`
    section{padding:60px 0}
    h2{text-align:center;font-weight:900;margin:0}
    .card{position:relative;cursor:pointer;border-radius:16px;overflow:hidden;background:#eee}
    .card img{width:100%;display:block}
    .overlay{
      position:absolute;inset:0;background:rgba(26,188,156,.9);color:#fff;
      display:flex;align-items:center;justify-content:center;opacity:0;transition:.2s
    }
    .card:hover .overlay{opacity:1}
    /* Modal */
    .modal{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:20px;z-index:90}
    .dialog{background:#fff;border-radius:16px;max-width:900px;width:100%;overflow:hidden}
    .dialog img{width:100%;display:block}
    .dialog .hd{padding:16px 20px;font-weight:900;border-bottom:1px solid #eee}
    .dialog .ft{padding:16px 20px;text-align:right;border-top:1px solid #eee}
    .close{border:0;background:var(--primary);color:#fff;border-radius:10px;padding:10px 14px;cursor:pointer}
  `],
  template: `
  <section class="container">
    <h2>PORTFOLIO</h2>
    <div class="divider"><i class="fa fa-star"></i></div>

    <div class="grid">
      @for (item of items; track item.src) {
        <div class="card" (click)="open(item)">
          <img [src]="item.src" [alt]="item.title">
          <div class="overlay"><i class="fa fa-plus fa-3x"></i></div>
        </div>
      }
    </div>
  </section>

  @if (selected()) {
    <div class="modal" (click)="selected.set(null)">
      <div class="dialog" (click)="$event.stopPropagation()">
        <div class="hd">{{selected()?.title}}</div>
        <img [src]="selected()?.src" [alt]="selected()?.title">
        <div class="ft"><button class="close" (click)="selected.set(null)">Close Window</button></div>
      </div>
    </div>
  }
  `
})
export class PortfolioComponent{
  items: Item[] = [
    { title:'Log Cabin',  src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png' },
    { title:'Tasty Cake', src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png' },
    { title:'Circus Tent',src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png' },
    { title:'Controller',  src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png' },
    { title:'Locked Safe', src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png' },
    { title:'Submarine',   src:'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png' },
  ];
  selected = signal<Item|null>(null);
  open(it:Item){ this.selected.set(it); }
}

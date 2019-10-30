import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100px',
        width:'40%',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '300px',
        width:'50%',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
  
})
export class AnimationComponent implements OnInit {
 isOpen = false;
  constructor() { }

  ngOnInit() {
  }
 

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

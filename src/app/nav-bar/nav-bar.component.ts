import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
 // templateUrl: './nav-bar.component.html',
 template:`<h2>Maadevaa</h2>`,
 styles:[`h2
 {color:green;
  font-size:35px
}
 `]
})
export class NavBarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

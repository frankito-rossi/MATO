import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  state='#';

  constructor(location: Location) { }

  ngOnInit(): void {
    this.state = location.hash;
    if(this.state == "")
      this.state = '#'
  }

  setActiveNav(value: string){
    this.state = value;
  }

}

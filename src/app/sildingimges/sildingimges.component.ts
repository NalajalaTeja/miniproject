import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sildingimges',
  templateUrl: './sildingimges.component.html',
  styleUrls: ['./sildingimges.component.scss']
})
export class SildingimgesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {'image': "/assets/images/t8.png"}, 
    {'image': "/assets/images/t3.jpg"},
    {'image': "/assets/images/T10.png"}, 
  ];
}

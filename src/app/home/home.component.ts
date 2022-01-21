import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  arrays: any[]=[
    {
      image:"assets/images/9.png",
      link:"/home/PulmonologistComponent"
    },
    {
      image:"assets/images/8.png",
      link:"/home/physiotherapy"
    },
    {
      image:"assets/images/7.jpg",
      link:"/home/PaediatricComponent"
    },
    {
      image:"assets/images/6.jpg",
      link:"/home/OrthopaedicComponent"
    },
    {
      image:"assets/images/5.jpg",
      link:"/home/OphthalmologyComponent"
    },
    {
      image:"assets/images/4.png",
      link:"/home/CovidComponent"
    },
    {
      image:"assets/images/3.jpg",
      link:"/home/EntComponent"
    },
    {
      image:"assets/images/2.png",
      link:"/home/DermatologyComponent"
    },
    {
       image:"assets/images/1.jpg",
       link:"/home/DentistComponent"
    }
  ]
 // images=["assets/images/9.png","assets/images/8.png","assets/images/7.jpg","assets/images/6.jpg","assets/images/5.jpg","assets/images/4.jpg","assets/images/3.jpg","assets/images/2.png","assets/images/1.jpg"];
 // links=["/home/PulmonologistComponent","/home/physiotherapy","home/PaediatricComponent","home/OrthopaedicComponent","home/OphthalmologyComponent","home/CovidComponent","home/EntComponent","home/DermatologyComponent","home/DentistComponent"]
  
}

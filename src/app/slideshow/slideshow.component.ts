import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images= ['key.jpg', 'laptop.jpg', 'startup.jpg'];
  headlines =[
    'Open the door to the success . . .',
    'Work hard . . .',
    'Never ending Way to become the best Developer !'
  ];

  currentImage = 0;
  showImage = true;


  
  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval( () => {
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000)
  }
}

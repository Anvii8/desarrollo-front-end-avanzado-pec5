import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('400ms' ,[
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))
          
        ]), {optional: true})
      ])
    ])
  ]
})
export class ImagesComponent implements OnInit {
  isLoading: boolean = false;
  showcard: boolean = false;
  showtable: boolean = true;
  images: Image[] = [];
  constructor(private imagesServices: ImagesService){}

  ngOnInit(): void {
    this.getImages();
  }

  getImages():void {
    this.isLoading = true;
    this.imagesServices.getAllImages().subscribe((images) => {    
      this.images = images;
      setTimeout(() => {
        this.isLoading = false; 
      }, 1000);
    });
  }

  showCards(): void {
    this.showcard = true;
    this.showtable = false;
    this.getImages();
  }

  showTable(): void {
    this.showcard = false;
    this.showtable = true;
    this.getImages();
  }
}

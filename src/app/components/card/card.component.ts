import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image!: Image;

}

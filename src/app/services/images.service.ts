import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  accessKey: string;

  constructor(private http: HttpClient) { 
    this.accessKey = "?client_id=Vy8kHagLbG9YD7CwgFZbq_OPfNah-dbNOWnikN5CUzA";
  }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://api.unsplash.com/photos'+ this.accessKey);
  }

  getImageById(id: String): Observable<Image> {
    return this.http.get<Image>('https://api.unsplash.com/photos/' + id + this.accessKey);
  }
}

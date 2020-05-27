import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { KEYS } from '../../KEYS';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {
  BASE_URL: 'https://api.unsplash.com/';
  USE_URL: 'photos/random';

  constructor(private http: HttpClient) { }

  onFetchPhotoService() {
    return this.http
      .get<Photo>(`https://api.unsplash.com/photos/?client_id=${KEYS.ACCESS_KEY}`);
  }
}

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

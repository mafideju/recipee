import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../services/photo-fetch.service';


@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.scss']
})
export class PhotoboxComponent implements OnInit {
  photoFetched: any;
  constructor(private photoService: PhotoFetchService) {}

  ngOnInit(): void {
  }

  onFetchPhoto() {
    return this.photoService
      .onFetchPhotoService()
      .subscribe(resp => {
        console.log('resp', resp);
        this.photoFetched = resp;
      });
  }
}

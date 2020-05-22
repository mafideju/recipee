import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  classics = [
    { artist: 'Mingus', image: 'assets/images/mingus.jpg' },
    { artist: 'Weather Report', image: 'assets/images/weather.jpg' },
    { artist: 'Joni Mitchell', image: 'assets/images/mitchell.jpg' },
    { artist: 'John Coltrane', image: 'assets/images/coltrane.jpg' },
  ];

  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}

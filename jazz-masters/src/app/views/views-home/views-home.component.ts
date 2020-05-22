import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 57, label: 'Davis' },
    { value: 39, label: 'Coltrane' },
    { value: 21, label: 'Mingus' },
    { value: 32, label: 'Parker' },
    { value: 49, label: 'Weather' }
  ];

  items = [
    { image: 'assets/images/davis.jpg', title: 'Davis', text: 'Kind of Blue', place: 'Columbia', tech: '1959' },
    { image: 'assets/images/coltrane.jpg', title: 'Coltrane', text: 'Blue Train', place: 'Blue Note', tech: '1961' },
    { image: 'assets/images/mingus.jpg', title: 'Mingus', text: 'Ah Um', place: 'Columbia', tech: '1959' },
    { image: 'assets/images/parker.jpg', title: 'Parker', text: 'Bird and Diz', place: 'Mercury', tech: '1957' },
    { image: 'assets/images/weather.jpg', title: 'Weather', text: 'Black Market', place: 'Mc Machen', tech: '1976' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  musicians = [
    { name: 'Miles Davis', instrument: 'Trumpet', masterpiece: 'Kind of Blue' },
    { name: 'Wayne Shorter', instrument: 'Saxophone', masterpiece: 'Speak No Evil' },
    { name: 'Paul Chambers', instrument: 'Bass', masterpiece: '1st Bassman' },
    { name: 'Art Blakey', instrument: 'Drums', masterpiece: 'The Jazz Messangers' },
    { name: 'Josef Zawinul', instrument: 'Piano', masterpiece: 'Zawinul' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'instrument', label: 'Instrument' },
    { key: 'masterpiece', label: 'Master Piece' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

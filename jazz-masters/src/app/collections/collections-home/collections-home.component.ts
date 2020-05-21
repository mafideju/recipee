import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  musicians = [
    { name: 'Coltrane', instrument: 'Sax', masterpiece: 'Love Supreme' },
    { name: 'Davis', instrument: 'Trumpet', masterpiece: 'Kind of Blue' },
    { name: 'Mingus', instrument: 'Bass', masterpiece: 'Ah Um' },
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

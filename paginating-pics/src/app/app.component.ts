import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageEvent: PageEvent;
  length = 2;
  pageSize = 1;
  pageSizeOptions: number[] = [1, 2, 3, 4];
  currentPage = 0;

    objects = [
      { instrument: 'Trumpet', title: 'Louis Armstrong', image: 'assets/images/armstrong.jpg' },
      { instrument: 'Bass Guitar', title: 'Jaco Pastorius', image: 'assets/images/pastorius.jpg' },
      { instrument: 'Trumpet', title: 'Winston Marsalis', image: 'assets/images/marsalis.jpg' },
      { instrument: 'Tenor Saxophone', title: 'John Coltrane', image: 'assets/images/coltrane.jpg' },
      { instrument: 'Trumpet', title: 'Miles Davis', image: 'assets/images/davis.jpg' },
    ];


    ngOnInit() {
      console.log('pageEvent', this.pageEvent);
      // this.objects.paginator = this.paginator;
    }

    ngOnChanges() {
      console.log('pageEvent', this.pageEvent);
    }
}

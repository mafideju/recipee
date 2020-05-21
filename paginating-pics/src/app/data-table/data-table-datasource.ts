import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  title: string;
  artist: string;
  coverImage: string;
}

// // TODO: replace this with real data from your application
// const EXAMPLE_DATA: DataTableItem[] = [
//       { instrument: 'Trumpet', title: 'Louis Armstrong', image: 'assets/images/armstrong.jpg' },
//       { instrument: 'Bass Guitar', title: 'Jaco Pastorius', image: 'assets/images/pastorius.jpg' },
//       { instrument: 'Trumpet', title: 'Winston Marsalis', image: 'assets/images/marsalis.jpg' },
//       { instrument: 'Tenor Saxophone', title: 'John Coltrane', image: 'assets/images/coltrane.jpg' },
//       { instrument: 'DrumKit', title: 'Art Blakey', image: 'assets/images/blakey.jpg' },
//       { instrument: 'Bass', title: 'Charles Mingus', image: 'assets/images/mingus.jpg' },
//       { instrument: 'Singer/Song Writer', title: 'Joni Mitchell', image: 'assets/images/mitchell.jpg' },
//       { instrument: 'Tenor Saxophone', title: 'Wayne Shorter', image: 'assets/images/shorter.jpg' },
//       { instrument: 'Piano/Synths', title: 'Joe Zawinul', image: 'assets/images/zawinul.jpg' },
// ];

const EXAMPLE_DATA: DataTableItem[]  = [
  { title: 'Hejira', artist: 'Joni Mitchell', coverImage: 'assets/images/mitchell.jpg' },
  { title: 'Kind of Blue', artist: 'Miles Davis', coverImage: 'assets/images/davis.jpg' },
  { title: 'Black Market', artist: 'Weather Report', coverImage: 'assets/images/weather.jpg' },
  { title: 'Blue Train', artist: 'John Coltrane', coverImage: 'assets/images/coltrane.jpg' },
  { title: 'Mingus Ah Um', artist: 'Charles Mingus', coverImage: 'assets/images/mingus.jpg' },
  { title: 'Maria Fumaça', artist: 'Banda Black Rio', coverImage: 'assets/images/blackrio.jpg' },
  { title: 'Bird and Diz', artist: 'Charlie Parker & Dizzy Gillespie', coverImage: 'assets/images/parker.jpg' },
  { title: 'Buena Vista Social Club', artist: 'Buena Vista Social Club', coverImage: 'assets/images/buenavista.jpg' },
  { title: 'Art Blakey and The Jazz Messengers', artist: 'Art Blakey and The Jazz Messengers', coverImage: 'assets/images/blakey.jpg' },
  { title: 'Jaco Pastorius', artist: 'Jaco Pastorius', coverImage: 'assets/images/jaco.jpg' },
  { title: 'King of Prussia', artist: 'Frank Zappa', coverImage: 'assets/images/zappa.jpg' }
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'artist': return compare(a.artist, b.artist, isAsc);
        case 'coverImage': return compare(a.coverImage, b.coverImage, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

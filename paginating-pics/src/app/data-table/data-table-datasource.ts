import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  instrument: string;
  title: string;
  image: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
      { instrument: 'Trumpet', title: 'Louis Armstrong', image: 'assets/images/armstrong.jpg' },
      { instrument: 'Bass Guitar', title: 'Jaco Pastorius', image: 'assets/images/pastorius.jpg' },
      { instrument: 'Trumpet', title: 'Winston Marsalis', image: 'assets/images/marsalis.jpg' },
      { instrument: 'Tenor Saxophone', title: 'John Coltrane', image: 'assets/images/coltrane.jpg' },
      { instrument: 'DrumKit', title: 'Art Blakey', image: 'assets/images/blakey.jpg' },
      { instrument: 'Bass', title: 'Charles Mingus', image: 'assets/images/mingus.jpg' },
      { instrument: 'Singer/Song Writer', title: 'Joni Mitchell', image: 'assets/images/mitchell.jpg' },
      { instrument: 'Tenor Saxophone', title: 'Wayne Shorter', image: 'assets/images/shorter.jpg' },
      { instrument: 'Piano/Synths', title: 'Joe Zawinul', image: 'assets/images/zawinul.jpg' },
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
        case 'instrument': return compare(a.instrument, b.instrument, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'image': return compare(a.image, b.image, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResults = [];
  constructor(private wiki: WikiService) {}

  onSubmitForm(searchTerm: string) {
    this.wiki
      .onFormSubmitService(searchTerm)
      .subscribe((response: any) => {
        this.searchResults = response.query.search;
      });
  }
}

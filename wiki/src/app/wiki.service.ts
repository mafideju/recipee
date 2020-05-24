import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  onFormSubmitService(searchTerm: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        utf8: '3',
        srsearch: searchTerm,
        origin: '*'
      }
    });
  }

}

// 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&utf=3&srsearch=Nelson'

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Jazz Bass',
      subtitle: 'Music Man',
      image: 'assets/bass.jpg',
      content: 'Lorem, tur adipisicing elit. Ullam laboriosam velit nihil atque, nesciunt voluptates laudantium omnis obcaecati quam praesentium animi in eius explicabo consequuntur fuga odit neque! Explicabo possimus ex fugit facilis esse accusantium reiciendis voluptatem porro asperiores ratione.'
    },
    {
      title: 'Saxofone',
      subtitle: 'Helmer Paris',
      image: 'assets/sax.jpg',
      content: 'Lorem, ipsum dolor sit amelit. Ullam laboriosam praesentium animi in eius explicabo consequuntur fuga odit neque! Explicabo possimus ex fugit facilis esse accusantium reiciendis voluptatem porro asperiores ratione.'
    },
    {
      title: 'Statocaster',
      subtitle: 'Fender',
      image: 'assets/guitar.jpg',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laboriosam velit nihil atque, nesciunt voluptates laudantium omnis obcaecati quam praesentium animi in eius explicabo consequuntur fuga odit neque! Explicabo possimus ex fugit facilis esse accusantium reiciendis voluptatem porro asperiores ratione.'
    },
  ];
}

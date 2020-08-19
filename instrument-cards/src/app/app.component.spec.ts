import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have mocked data'`, () => {
    const mockposts = [
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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.posts).toEqual(mockposts);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cards & Instruments');
  });


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    component.title = 'title';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-title').innerText).toEqual('title');
  });

  it('should show subtitle', () => {
    component.subtitle = 'subtitle';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-subtitle').innerText).toEqual('subtitle');
  });

  it('should show an image', () => {
    component.image = 'img/src';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toBeTruthy();
  });

  it('should have content', () => {
    component.content = 'content';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-content').innerText).toEqual('content');
  });
});

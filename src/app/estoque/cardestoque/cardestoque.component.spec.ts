import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstoqueComponent } from './cardestoque.component';

describe('CardEstoqueComponent', () => {
  let component: CardEstoqueComponent;
  let fixture: ComponentFixture<CardEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

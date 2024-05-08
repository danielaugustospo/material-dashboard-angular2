import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCatalogoComponent } from './cadastro-catalogo.component';

describe('CadastroCatalogoComponent', () => {
  let component: CadastroCatalogoComponent;
  let fixture: ComponentFixture<CadastroCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

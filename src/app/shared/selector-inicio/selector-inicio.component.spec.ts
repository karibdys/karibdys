import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorInicioComponent } from './selector-inicio.component';

describe('SelectorInicioComponent', () => {
  let component: SelectorInicioComponent;
  let fixture: ComponentFixture<SelectorInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

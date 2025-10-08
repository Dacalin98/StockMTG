import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDescripcionComponent } from './carta-descripcion.component';

describe('CartaDescripcionComponent', () => {
  let component: CartaDescripcionComponent;
  let fixture: ComponentFixture<CartaDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

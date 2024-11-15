import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCardsComponent } from './usuarios-cards.component';

describe('UsuariosCardsComponent', () => {
  let component: UsuariosCardsComponent;
  let fixture: ComponentFixture<UsuariosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

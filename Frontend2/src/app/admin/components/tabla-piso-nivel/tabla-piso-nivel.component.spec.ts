import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPisoNivelComponent } from './tabla-piso-nivel.component';

describe('TablaPisoNivelComponent', () => {
  let component: TablaPisoNivelComponent;
  let fixture: ComponentFixture<TablaPisoNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPisoNivelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPisoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

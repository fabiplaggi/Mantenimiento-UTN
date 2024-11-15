import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActivoDetallesComponent } from './tabla-activo-detalles.component';

describe('TablaActivoDetallesComponent', () => {
  let component: TablaActivoDetallesComponent;
  let fixture: ComponentFixture<TablaActivoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaActivoDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaActivoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

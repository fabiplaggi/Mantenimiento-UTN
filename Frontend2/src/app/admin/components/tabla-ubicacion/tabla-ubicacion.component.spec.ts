import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUbicacionComponent } from './tabla-ubicacion.component';

describe('TablaUbicacionComponent', () => {
  let component: TablaUbicacionComponent;
  let fixture: ComponentFixture<TablaUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaUbicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

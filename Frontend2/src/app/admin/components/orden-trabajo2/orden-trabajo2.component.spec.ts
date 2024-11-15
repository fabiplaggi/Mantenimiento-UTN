import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajo2Component } from './orden-trabajo2.component';

describe('OrdenTrabajo2Component', () => {
  let component: OrdenTrabajo2Component;
  let fixture: ComponentFixture<OrdenTrabajo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenTrabajo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenTrabajo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

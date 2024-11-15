import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActivoComponent } from './tabla-activo.component';

describe('TablaActivoComponent', () => {
  let component: TablaActivoComponent;
  let fixture: ComponentFixture<TablaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaActivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionAdminComponent } from './ubicacion-admin.component';

describe('UbicacionAdminComponent', () => {
  let component: UbicacionAdminComponent;
  let fixture: ComponentFixture<UbicacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

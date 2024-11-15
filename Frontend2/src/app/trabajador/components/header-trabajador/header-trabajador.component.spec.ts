import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTrabajadorComponent } from './header-trabajador.component';

describe('HeaderTrabajadorComponent', () => {
  let component: HeaderTrabajadorComponent;
  let fixture: ComponentFixture<HeaderTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTrabajadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

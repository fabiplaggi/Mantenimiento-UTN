import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTrabajadorComponent } from './inicio-trabajador.component';

describe('InicioTrabajadorComponent', () => {
  let component: InicioTrabajadorComponent;
  let fixture: ComponentFixture<InicioTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioTrabajadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

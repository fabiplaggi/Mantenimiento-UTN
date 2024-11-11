import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbardWorkerComponent } from './dashbard-worker.component';

describe('DashbardWorkerComponent', () => {
  let component: DashbardWorkerComponent;
  let fixture: ComponentFixture<DashbardWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbardWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbardWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

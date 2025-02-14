import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditComponent } from './task-details.component';

describe('TaskDetailsComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

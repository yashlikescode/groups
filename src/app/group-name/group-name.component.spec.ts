import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNameComponent } from './group-name.component';

describe('GroupNameComponent', () => {
  let component: GroupNameComponent;
  let fixture: ComponentFixture<GroupNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

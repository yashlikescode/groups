import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTemplatesComponent } from './group-templates.component';

describe('GroupTemplatesComponent', () => {
  let component: GroupTemplatesComponent;
  let fixture: ComponentFixture<GroupTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

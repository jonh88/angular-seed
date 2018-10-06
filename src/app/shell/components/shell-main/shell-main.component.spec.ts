import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMainComponent } from './shell-main.component';

describe('ShellMainComponent', () => {
  let component: ShellMainComponent;
  let fixture: ComponentFixture<ShellMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerComponentComponent } from './explorer-component.component';

describe('ExplorerComponentComponent', () => {
  let component: ExplorerComponentComponent;
  let fixture: ComponentFixture<ExplorerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

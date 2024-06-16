import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePropComponent } from './image-prop.component';

describe('ImagePropComponent', () => {
  let component: ImagePropComponent;
  let fixture: ComponentFixture<ImagePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagePropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

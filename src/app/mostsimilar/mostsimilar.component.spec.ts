import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostsimilarComponent } from './mostsimilar.component';

describe('MostsimilarComponent', () => {
  let component: MostsimilarComponent;
  let fixture: ComponentFixture<MostsimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostsimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostsimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

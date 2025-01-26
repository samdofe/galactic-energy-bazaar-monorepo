import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FedsCdkRotatingImgComponent } from './feds-cdk-rotating-img.component';

describe('FedsCdkRotatingImgComponent', () => {
  let component: FedsCdkRotatingImgComponent;
  let fixture: ComponentFixture<FedsCdkRotatingImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FedsCdkRotatingImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FedsCdkRotatingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

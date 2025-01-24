import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FedsCdkSideNavComponent } from './feds-cdk-side-nav.component';

describe('FedsCdkSideNavComponent', () => {
  let component: FedsCdkSideNavComponent;
  let fixture: ComponentFixture<FedsCdkSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FedsCdkSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FedsCdkSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

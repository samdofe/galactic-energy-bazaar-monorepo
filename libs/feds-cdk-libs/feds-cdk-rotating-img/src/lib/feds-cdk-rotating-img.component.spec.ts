import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { FedsCdkRotatingImgComponent } from "./feds-cdk-rotating-img.component"
import { FedsCdkRotatingImgSkeletonComponent } from "./feds-cdk-rotating-img-skeleton.component"
import { Component } from "@angular/core"
import { By } from "@angular/platform-browser"

// Test host component
@Component({
  template: `
    <feds-cdk-rotating-img
      [dayUrl]="dayUrl"
      [nightUrl]="nightUrl"
      [cloudsUrl]="cloudsUrl"
      [size]="size"
      [shadowColor]="shadowColor"
    ></feds-cdk-rotating-img>
  `,
  standalone: true,
  imports: [FedsCdkRotatingImgComponent],
})
class TestHostComponent {
  dayUrl = "https://example.com/day.jpg"
  nightUrl = "https://example.com/night.jpg"
  cloudsUrl = "https://example.com/clouds.jpg"
  size = "100px"
  shadowColor = "#000000"
}

describe("FedsCdkRotatingImgComponent", () => {
  let component: TestHostComponent
  let fixture: ComponentFixture<TestHostComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, FedsCdkRotatingImgComponent, FedsCdkRotatingImgSkeletonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should show skeleton while images are loading", () => {
    fixture.detectChanges()
    const skeleton = fixture.debugElement.query(By.directive(FedsCdkRotatingImgSkeletonComponent))
    expect(skeleton).toBeTruthy()
  })
})


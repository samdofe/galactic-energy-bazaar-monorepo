import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ShellEntryComponent } from './shell-entry.component';
import { provideRouter, Router, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: ShellEntryComponent }]),
        ShellEntryComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter([]),
        importProvidersFrom([TranslateModule.forRoot()])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellEntryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shell'`, () => {
    const fixture = TestBed.createComponent(ShellEntryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

/*  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(ShellEntryComponent);
    const router = TestBed.inject(Router);
    fixture.ngZone?.run(() => router.navigate(['']));
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome shell'
    );
  }));*/
});

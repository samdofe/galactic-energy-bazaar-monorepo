import { TestBed } from '@angular/core/testing';
import { RemoteEntryComponent } from './entry.component'; // Update the import path if needed
import { NxWelcomeComponent } from './nx-welcome.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('RemoteEntryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteEntryComponent, NxWelcomeComponent], // Standalone components imported here
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(RemoteEntryComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the NxWelcomeComponent', () => {
    const fixture = TestBed.createComponent(RemoteEntryComponent);
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-nx-welcome')).not.toBeNull();
  });
});

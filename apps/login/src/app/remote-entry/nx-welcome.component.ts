import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nx-welcome',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  template: `
    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button disabled>Disabled</button>
        <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
            <mat-icon>more_vert</mat-icon>
          </button>
          <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-fab aria-label="Example icon button with a delete icon">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab disabled aria-label="Example icon button with a heart icon">
              <mat-icon>favorite</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Mini FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-mini-fab aria-label="Example icon button with a menu icon">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
              <mat-icon>home</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="example-label">Extended Fab</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-fab extended>
              <mat-icon>favorite</mat-icon>
              Basic
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab extended disabled>
              <mat-icon>favorite</mat-icon>
              Disabled
            </button>
          </div>
          <div class="example-button-container">
            <a mat-fab extended routerLink=".">
              <mat-icon>favorite</mat-icon>
              Link
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
  section {
  display: table;
}

.example-label {
  display: table-cell;
  font-size: 14px;
  margin-left: 8px;
  min-width: 120px;
}

.example-button-row {
  display: table-cell;
  max-width: 600px;
}

.example-button-row .mat-mdc-button-base {
  margin: 8px 8px 8px 0;
}

.example-flex-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.example-button-container {
  display: flex;
  justify-content: center;
  width: 140px;
}

  `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

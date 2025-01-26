import { Component, effect, inject, type OnInit, signal } from '@angular/core';
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { FedsCoreAuthStore } from "@feds/core/auth"
import { toSignal } from "@angular/core/rxjs-interop"

@Component({
  selector: "login-page",
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./login.page.html",
  styleUrl: "./login.page.scss",
})
export class LoginPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  protected authStore = inject(FedsCoreAuthStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  redirectUrl = signal("/dashboard");
  queryParams = toSignal(this.route.queryParams);

  constructor() {
    // Observe token changes using an effect
    effect(() => {
      const token = this.authStore.token;
      if (token()) {
        this.router.navigate([this.redirectUrl()]);
      }
    });
  }

  ngOnInit() {
    this.redirectUrl.set(this.queryParams()?.["redirectTo"] || "/dashboard")
  }

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  })

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName)
    return field ? field.invalid && (field.dirty || field.touched) : false
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        this.authStore.login(this.loginForm.value);
      } catch (error) {
        console.error("Login failed:", error)
      }
    } else {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key)
        if (control) {
          control.markAsTouched()
        }
      })
    }
  }
}


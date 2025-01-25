import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedsCoreAuthStore } from '@feds/core/auth';

@Component({
  selector: 'login-page',
  imports: [CommonModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPageComponent implements OnInit {
  authStore = inject(FedsCoreAuthStore);
  ngOnInit() {
    this.authStore.login({
      "email": "council.draconis@galaxy.com",
      "password": "Icouncil2025"
    })
  }
}

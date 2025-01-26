import { inject } from "@angular/core"
import { type CanActivateFn, Router } from "@angular/router"
import { FedsCoreAuthStore } from "../feds-core-auth.store"

export const fedsCoreAuthGuard: CanActivateFn = async (route, state) => {
  const authStore = inject(FedsCoreAuthStore)
  const router = inject(Router)

  // First check the store's token
  let token = authStore.token()

  // If no token in store, check localStorage
  if (!token) {
    console.log(`feds-core-auth.guard :: Don't have token, so I look up for one from store`);
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      authStore.updateToken(storedToken)
      // Wait for getMe to complete
      try {
        authStore.getMe()
        token = authStore.token() // Refresh token value
      } catch (error) {
        console.error("Failed to get user info:", error)
        localStorage.removeItem("token") // Clear invalid token
      }
    }
  }

  if (token) {
    console.log(`feds-core-auth.guard :: have token so I navigate`);
    return true
  }

  const redirectTo = state.url
  console.log(`feds-core-auth.guard :: gonna redirect to login with redirectTo : ${redirectTo}`);
  await router.navigate(["/login"], { queryParams: { redirectTo } })
  console.log(`feds-core-auth.guard :: return false : ${redirectTo}`);
  return false
}


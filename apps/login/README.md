# Login Application

## Description
The **Login** application handles user authentication and access control. It is responsible for:
- Managing user login and session authentication.
- Implementing role-based access for **traders, admins, and councils**.
- Providing a standalone authentication module within the micro-frontend architecture.

---

## Structure
The Login application is structured as follows:

- **`src/index.html`**: The main HTML file where the application is bootstrapped.
- **`src/main.ts`**: The entry point that initializes the Angular application.
- **`src/bootstrap.ts`**: Bootstraps the Angular app with Module Federation.
- **`src/environments/`**: Configuration files for different environments.
- **`src/styles.scss`**: Global styles for the login page.
- **`src/app/`**: Contains the core application logic, including:
    - **`app.routes.ts`**: Defines the main routes for login functionality.
    - **`app.config.ts`**: Configures providers and authentication settings.
    - **`remote-entry/`**: Defines the entry point for Module Federation.
    - **`pages/login/`**: Implements the login page.
        - **`login.page.ts`**: The main component handling authentication logic.
        - **`login.page.html`**: The UI template for user authentication.
        - **`login.page.scss`**: Styling for the login page.

---

## Module Federation
Module Federation is configured in:
- **`module-federation.config.ts`**: Declares the Login application as a remote module.
- **`webpack.config.ts` & `webpack.prod.config.ts`**: Configures how the Login app integrates with the Shell.

---

## Scripts
Run the following commands from the project root:

- **Start the Login application in development mode**:
  ```bash
  pnpm serve:login
  ```

- **Build the Login application**:
  ```bash
  nx build login
  ```
  
- **Run tests for login project** :
  ```bash
  PROJECT=login pnpm test:project
  ```
  
- **Run tests with the Vitest UI** :
  ```bash
  PROJECT=login pnpm test:project:ui
  ```

  #### **With Nx Console**:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-nx-console.gif)

  #### **With the terminal**:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-terminal.gif)

  #### **Vitest UI**

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-dashboard.gif)

---

## Authentication
The Login application handles authentication via:
- **Role-based Access Control**: Ensures only authorized users can access certain parts of the system.
- **Session Management**: Stores user session details securely.
- **Integration with `feds/core/auth`**: Handles login state using NgRx Signals.

---

## Notes
1. Ensure the backend authentication service is running before testing login functionality.
2. Use **`nx graph`** to visualize dependencies between the Login app and other micro-frontends.

![Nx console](../../readme-helpers/assets/images/nx-use.gif)

---
For more information, consult the general documentation in the root README.
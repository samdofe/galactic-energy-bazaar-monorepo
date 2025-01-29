
# Custom Tools

## Description
The **tools/** folder contains custom scripts developed with **Nx** to facilitate common tasks and improve productivity in the monorepo.

---

## Available Scripts

### 1. **build-libs**
- **Description**: Clears the Nx cache and builds all the libraries in the Design System.
- **Command**:
  ```bash
  pnpm build:libs
  ```

### 4. **test-all**
- **Description**: Runs unit tests for all applications and libraries in the workspace.
- **Command**:
  ```bash
  pnpm test:all
  ```

### 5. **new-lib**
- **Description**: Creates a new standard library with the predefined structure.
- **Command**:
  ```bash
  HUB=feds-cdk NAME=cdk-datepicker pnpm g:library
  ```

### 6. **new-HUB-lib**
- **Description**: Creates a new library for the specified HUB with the predefined structure.
- **Command**:
  ```bash
  NAME=utils pnpm g:library:hub
  ```

---

## Notes
1. The scripts are configured to work with **Nx** capabilities, such as smart caching and optimized dependencies.
2. All scripts can be executed from the root directory of the project.

---

For more information about the general configuration of the project, refer to the root README.

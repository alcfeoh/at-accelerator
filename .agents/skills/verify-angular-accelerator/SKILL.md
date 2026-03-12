---
name: verify-angular-accelerator
description: Verify Angular Accelerator Exercises
---

# Verify Angular Accelerator Exercises

This skill describes how to verify the exercise branches for the Angular Accelerator Program against their specifications.

## Knowledge Base
- **Course URL**: `https://courses.angulartraining.com/course/angular-accelerator-program`
- **Credentials**: Prompt the user for such credentials.
- **Branches**: The exercises are available on remote branches named `origin/alain-chautard-ex01`, `origin/alain-chautard-ex02`, up to `origin/alain-chautard-ex08`.
- **Repository Path**: `/Users/alainchautard/code-repos/at-accelerator`
- **Guidelines**: 
  - Unit tests can be completely ignored.
  - The focus is on verifying functionality and the use of modern Angular features (e.g., Signals, standalone components, new control flow, lazy-loading).

## Verification Steps

1. Checkout the specific exercise branch and reset it to match the remote:
   ```bash
   git checkout alain-chautard-ex<NUM> && git reset --hard origin/alain-chautard-ex<NUM>
   ```

2. Install dependencies and run the build:
   ```bash
   npm install && npm run build
   ```

3. Launch the `browser_subagent` to navigate to the course URL. Ensure the agent logs into the platform, finds the corresponding Exercise (e.g. Exercise <NUM>), expands all sections of the exercise instructions, and returns the full spec criteria.

4. Inspect the application code iteratively (using `grep_search` and `view_file`) to check if the new components, services, and directives fulfill the exercise requirements.

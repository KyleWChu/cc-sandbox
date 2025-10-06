---
description: Create a UI Component in /components
argument-hint: Component name | Component summary
---

# UI Component Generator

Create a single, well-structured UI component based on the provided specifications.

## Arguments and Context

Parse $ARGUMENTS to get the following values:

- `component_name`: The name of the primary component to create from $ARGUMENTS
- `component_summary`: A brief description of what the component should do from $ARGUMENTS

## Instructions

1. **Primary Component**: Create the main component as specified by `component_name` in an appropriate file structure according to the `component_summary` (e.g., `ComponentName/index.tsx`)

2. **Helper Components Allowed**: While this command creates ONE primary component, you are explicitly allowed and encouraged to create helper/sub-components in the same folder when it improves code organization. For example:
MyComponent/
├── index.tsx (exports MyComponent)
├── SubComponentA.tsx
└── SubComponentB.tsx
   The primary component can import and use these helpers.

3. **Component Quality**:
   - Use TypeScript with proper typing
   - Follow React best practices
   - Make components reusable and well-encapsulated
   - Include proper props interfaces/types
   - Add brief JSDoc comments for the main component

4. **Styling**: Use appropriate styling approach (CSS modules, Tailwind, styled-components, etc.) based on the project context

5. **File Organization**: 
   - Primary component should be the default export from index.tsx if it has helper components. If not, it can be `PrimaryComponent.tsx`
   - Helper components should be in separate files within the same folder
   - Use clear, descriptive names for all components

## Output
Create all necessary files for the component, ensuring the primary component matches `component_name` and fulfills the `component_summary` requirements.

## Review the Work
   - **Invoke the ui-ux-reviewer subagent** to review your work and implement suggestions where needed
   - Iterate on the review processes when needed
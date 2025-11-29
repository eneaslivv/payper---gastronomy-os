# AI Assistant Rules for PAYPER - Gastronomy OS

This document outlines the technical stack and guidelines for developing and modifying the PAYPER application.

## Tech Stack Overview

*   **Frontend Framework:** React (version 19.x)
*   **Language:** TypeScript (version 5.x)
*   **Build Tool:** Vite (version 6.x)
*   **Styling:** Tailwind CSS for all styling.
*   **UI Component Libraries:** shadcn/ui and Radix UI (pre-installed and preferred).
*   **Icons:** Lucide React.
*   **Routing:** React Router (if routing is required, routes should be kept in `src/App.tsx`).
*   **State Management:** React's built-in `useState` and `useContext` for local and global state respectively.
*   **Responsive Design:** All components and layouts must be responsive.

## Library Usage Rules

1.  **Styling:**
    *   **Always** use Tailwind CSS classes for all styling. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic, computed values.
    *   Ensure designs are responsive across different screen sizes.

2.  **UI Components:**
    *   **Prioritize** using pre-built components from `shadcn/ui` and `Radix UI`. These are already installed and configured.
    *   If a specific component is not available in `shadcn/ui` or `Radix UI`, or requires significant customization that would involve modifying the pre-built component files, create a new custom component in `src/components/`.
    *   **Never** modify the source files of `shadcn/ui` or `Radix UI` components directly.

3.  **Icons:**
    *   Use icons exclusively from the `lucide-react` library.

4.  **Routing:**
    *   If navigation between different views/pages is required, use `react-router-dom`.
    *   Keep the main routing configuration within `src/App.tsx`.

5.  **File Structure:**
    *   Place main application views in `src/pages/`.
    *   Place reusable UI components in `src/components/`.
    *   Place utility functions in `src/utils/`.
    *   **Always** create a new, dedicated file for every new component or hook, no matter how small. Avoid adding new components to existing files.

6.  **Code Quality & Principles:**
    *   Keep solutions simple and elegant. Avoid over-engineering or introducing new complex libraries unless explicitly requested and justified by the user's needs.
    *   Ensure all generated code is complete, syntactically correct, and follows existing project conventions.
    *   Do not implement `try/catch` blocks for error handling unless specifically requested by the user, to allow errors to bubble up for easier debugging.
    *   Use toast notifications (e.g., `react-hot-toast` if installed, or a custom solution) to inform the user about important events.
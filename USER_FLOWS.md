# User Flows

This document describes the main user journeys supported by the portfolio website.

## 1. Homepage discovery

**Goal:** The visitor wants to learn about the developer and explore the portfolio.

1. The visitor opens `/hu` or `/en`.
2. The homepage displays the hero section.
3. The visitor can navigate to Projects, About, and Contact.
4. The visitor can switch between Hungarian and English.
5. The visitor can scroll through the portfolio sections.

**Expected result:** The visitor can access the main portfolio information and navigate between sections.

## 2. Project filtering

**Goal:** The visitor wants to find projects matching a specific technology or category.

1. The visitor navigates to the Projects section.
2. All four projects are displayed by default.
3. The visitor selects a category:
   - AI
   - Backend
   - Mobile
   - Web
4. The project list updates according to the selected category.
5. The active category is visually highlighted and exposed through `aria-pressed`.
6. The visitor selects All Projects to reset the filter.

**Expected result:** Only matching projects are displayed. Projects belonging to multiple categories appear in each matching filter.

**State management:** Zustand stores the currently selected project category.

## 3. Project details

**Goal:** The visitor wants to learn more about a specific project.

1. The visitor opens the Projects section.
2. The visitor selects a project name.
3. The application navigates to the corresponding localized project route.
4. The visitor can read the project description and technology stack.
5. The visitor can open the GitHub repository.
6. If a live demo is available, the visitor can open it.
7. The visitor can return to the project section.

**Expected result:** The visitor can inspect project details and access relevant external resources.

## 4. Language switching

**Goal:** The visitor wants to use the website in another language.

1. The visitor opens the website in Hungarian or English.
2. The visitor selects HU or EN in the header.
3. The application navigates to the corresponding locale homepage.
4. The page content is displayed in the selected language.

**Expected result:** The visitor can access the portfolio in either supported language.

## 5. Contact

**Goal:** The visitor wants to contact the developer.

1. The visitor navigates to the Contact section.
2. The visitor selects the displayed email address.
3. The browser opens the configured email application through a `mailto:` link.

**Expected result:** The visitor can start composing an email.

## 6. CV access and printing

**Goal:** The visitor wants to view or print the developer's CV.

1. The visitor selects the CV link.
2. The application opens the localized CV route.
3. The visitor reviews the CV.
4. The visitor can use the available print action.

**Expected result:** The visitor can access the CV and initiate printing through the browser.

## Error and edge cases

| Scenario                           | Expected behavior                              |
| ---------------------------------- | ---------------------------------------------- |
| Unsupported locale                 | The application displays a not-found response. |
| Unknown project slug               | The application displays a not-found response. |
| Category with no matching projects | The list displays no project cards.            |
| Project without a live demo        | The live demo link is not displayed.           |
| Project with multiple categories   | It appears in every matching category.         |

## Automated coverage

The Playwright test suite covers:

- Homepage rendering in Hungarian and English
- Language switching
- Default project listing
- Category filtering and filter reset
- Projects assigned to multiple categories
- Project detail navigation
- Return navigation
- Unknown project routes
- Contact email link

CV printing is a planned additional automated test once its exact button implementation is verified.

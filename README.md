# Mansa technical test

This project is a technical test for Mansa company.

It is built with Typescript, NextJS, Redux, RTK Query and Chakra UI, and tested with Cypress.  
CI is handled by GitHub Actions and includes conventional-commits, prettier, eslint and cypress.  
CD is handled by Vercel.

## Design choices

The page is divided into main components. Each API call is delegated to its consumer component to avoid prop drilling and useless rerendering, and display each information as soon as it is available.

Each component displays a skeleton version of itself during its loading state, and an error message in case of server error.

Accounts are displayed responsively with the help of css grids.

## Tests

Since there is no interactivity with the app, the Cypress tests only test API calls and the presence of the elements on the page.  
Test utils (selectors, actions utils) allow tests to be organized in a way to reduce boilerplate and improve readability and scalability.

## Next steps

Next steps could be :

- Add the AXE plugin and associated tests on cypress to check app accessibility
- Split components logic and views to be able to easily use snapshot librairies
- Add Storybook, nay Chromatic, to compare visual snapshots across PRs

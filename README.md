<p align="center"><a href="https://github.com/MansaGroup/kanedama" target="blank"><img src="../.github/assets/logo.png" width="80" alt="Mansa's Logo" /></a></p>
<h1 align="center">Mansa's Kanedama</h1>
<p align="center">Take home test to <b>join us</b> 💜</p>

## The Mission

Your mission, should you accept it, is to create a dashboard-like UI, where we can find:

- User's personal information
  - First & Last name
- User's business information
  - SIRET number
  - Creation date
  - Address (example: 10 Rue Gabriel Peri 92120, Montrouge)
- User's financial information
  - Accounts (TRANSACTION / SAVINGS)
  - Current balance

### Design

Global design to follow can be found below (feel free to improve and/or add your personnal touch - you won't be penalized if not)

|                        User page                        |
| :-----------------------------------------------------: |
| ![Design wireframe](../.github/assets/frontend/frontend-wireframe.png) |

### Scope

The view should only be for **one** single user.

You will need to leverage an open API for business data to fill in the details and functionality as described below.

## Delivery

A clone or fork of this repositery containing:

- An integration of the wireframe above, with the data flow described in this brief
- A README file at the root of your repo explaining your approach, design choices, improvements and next steps

Bonus:

- Tests
- Deployed app
- Atomic, reusable and stateless base components
- Components positionned by the container (parent)

Our stack consists of TypeScript, React, [Next.js](https://nextjs.org/), CSS-in-JS with [styled-component](https://styled-components.com/), and we test with Jest and Cypress.

If you're comfortable with it, we encourage you to complete the test in the stack described above. You're also free to use a component library to get you started and any other package that you might think necessary.

We expect you to test your code: unit and end-to-end tests are a big plus. From our experience React Testing Library and Cypress work very well for React application testing, but you're free to pick your favourite.

### What We Care About

We're interested in your method and how you approach the problem just as much as we're interested in the end result.

Here's what you should strive for:

- A consistent architecture, focused on the simplicity of the project (**keep it simple!**), pragmatism, no over-engineering
- Extensible code
- Clear data flow (with at least one custom hook for data fetching)
- Fluid layout that would fit on main viewports (from mobile to desktop)
- Concise and clear commit messages
- Complete user information (Profil picture, phone number, etc ...) with
  another API like [randomuser](https://randomuser.me)

## The APIs

### French government API

For business information, you'll have to use the French SIRENE public API,
you can find the documentation about it [here](https://entreprise.data.gouv.fr/api_doc/sirene).

You can retrieve the information about a business by using the following URL:
`https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/:siren`

> The `unites_legales` object contains all the necessary information.

For example, [here is the API link](https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890)
that gives you the SIRENE profile of MansaGroup:

You can choose any SIREN (legal id) you want for your test.

### Kanedama API

For financial information, you'll use a custom API:

| Method  | Endpoint  | Description                                |
| ------- | --------- | ------------------------------------------ |
| **GET** | /accounts | Fetch all bank accounts from a _test user_ |

**Root endpoint is: https://kata.getmansa.tech/**

You can see our [Backend test README](../backend/README.md) if you want more information about this endpoint.

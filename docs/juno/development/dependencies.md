# Dependencies

Overall we have a lot of dependencies, but we try to keep them as minimal as possible. We use the following tools:

Frontend:

1. [React](https://reactjs.org/)
2. [Redux Toolkit](https://redux-toolkit.js.org/)
3. [Radix UI](https://www.radix-ui.com/)
4. [Emotion](https://emotion.sh/docs/introduction)
5. [React Router](https://reactrouter.com/)
6. [Cypress](https://www.cypress.io/)

Backend:

1. [Express](https://expressjs.com/)
2. [Node](https://nodejs.org/en/)
3. [Google API](https://developers.google.com/gmail/api)

## When to add a dependency

A dependency should only be added if the solved use-case is too complex and error-prone to implement ourselves. We should also consider the following:

1. Is the dependency actively maintained?
2. Is the dependency well documented?
3. Is the dependency well tested?
4. Is the dependency well supported?
5. Is the dependency well supported by the community?

## When not adding a dependency

When you decide to not add a dependency, you should add it to the utils folder. This folder contains all the code that is not a dependency, but is used in multiple places. This code should be well tested and documented.

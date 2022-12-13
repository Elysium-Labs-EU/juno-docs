# Routes (wip)

All the routes are defined in the `routes.json` file. Each route is hooked up to a component via the `Routes.tsx` file.

## Protected routes

Routes that are only accessible when the user is logged in are defined with a `ProtectedRouteTemplate` wrapper function. This wrapper function will check if the user is logged in, if the user is logged in, the route will be rendered - or base loader will be shown. If the user is not logged in, the user will be redirected to the login page.

## Route splitting

Currently the codebase does not split the routes, this is something that can be implemented in the future. The initial implementation caused some issues, which is why it was removed.

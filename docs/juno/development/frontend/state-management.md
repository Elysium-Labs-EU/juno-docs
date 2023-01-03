# State management

State management is done via two ways, via:

1. Redux Toolkit (via [Redux Toolkit](https://redux-toolkit.js.org/))
2. React State (via [React](https://reactjs.org/docs/hooks-state.html))

We are using Redux for global state management, and React State for local state management.

## Redux Toolkit

The Redux store is located in `src/store/store.ts`. The store is created using Redux Toolkit, which is a wrapper around Redux that makes it easier to use.

The store is wrapped in a `Provider` component in `src/main.tsx`, which makes the store available to all components in the app.

The store is split into seven slices, which are located in `src/store/`. Each slice has a reducer, actions, thunks, and selectors. The reducer is the function that is called when an action is dispatched. The actions are functions that are called to dispatch an action to the reducer. The thunks are used to orchestrate advanced actions that either require Redux state, will dispatch other actions, or use an API. The selectors are functions that are used to get data from the store.

### Usage

We are using Redux for global state management. This means that the state is available to all components in the app. This is useful for state that is used in multiple components, or state that is used in multiple places in the app. Additionally the state is maintained whenever the user navigates to a different page.

We are using Redux for the following state:

- [Base](state-management#base)
- [Contacts](state-management#contacts)
- [Drafts](state-management#drafts)
- [EmailDetail](state-management#email-detail)
- [EmailList](state-management#email-list)
- [Labels](state-management#labels)
- [Router](state-management#router)
- [Utils](state-management#utils)

#### Base

The base is used to fetch the user's profile, which includes the user's email address and he users's signature.

#### Contacts

The contacts are used to fetch the user's contacts - the users to which the user can send an email, which includes the user's contacts' email addresses. This does not include the users of whom the user has received an email per se.

The contacts are initially not populated, they are populated when the user searches for contacts during composing an email. The Redux store is used to store the contacts, so that the user does not have to search, and request the Gmail, for the contacts again when composing a new email.

#### Drafts

The Redux slice for drafts is used to only store a list of meta data of the drafts, which is only loaded upon navigating to the draft page, to interact with this list, and to interact with the API to create, update, and delete drafts.

#### Email Detail

The Email Detail slice is used to control the state of the email detail that is being shown.

Key ones:

- [_coreStatus_](email-detail#core-status) dictates whether the email detail component is used in a certain context.
- [_viewIndex_ ](email-detail#actions-on-mount) is used to pick the email from the activeEmailList state that is being shown in the email detail. This is used to navigate between emails in the email detail.
- [_isReplying / isFowarding_](email-detail#isfocusedisreplying) a flag to control the state of the composer that is displayed within the email detail view.

#### Email List

This is the leading Redux state within the application. here are all the emails loaded, managed, and stored.

By default all the allowed inboxes are created as empty objects, within an object the label, email threads, and a possible next page token are stored.
On first hydration of an email list object the threads do not contain the HTML content of the email, this is only loaded when the user navigates to the email detail view. This is done to reduce the amount of data that is loaded initially, and to reduce the amount of data that is stored in the Redux store.

When interacting with an email, e.g. archivving, deleting, or starring, the email is updated in the Redux store, and the API is called to update the email on the Gmail server.

The search component uses the searchList object in the emailList state to store the search results. The search results are only stored whenever the user opens a search entry. The search list is cleared upon clearing the search modal.

The user can select multiple emails, and perform actions on these emails. The selected emails are stored in the selectedEmails object in the emailList state.

#### Labels

Labels are used to store the labels that are available to the user, and to detect what is the current active label. The labels are fetched from the Gmail API, and stored in the Redux store.

The current active label is used to determine which email list is being shown.

#### Router

The router is used to store the current route, and to determine whether the user is currently navigating to a different route. This is managed via an external library [Redux First History](https://www.npmjs.com/package/redux-first-history).

By using this, we do not need to pass around a navigation hook or function through the components, but can use the Redux store to determine the current route. Including the possibility to check on the route within a Redux Thunk.

#### Utils

All the general label are listed here, such as user settings, loading state, notifications, and which modal is active.

##### navigateNextMail & navigatePreviousMail

Two functions to navigate the email detail view to the next or previous email in the email list.

```ts
export const navigateNextMail =
  (blockViewIndexUpdate?: boolean, forceNavigateBack?: boolean): AppThunk =>
  (dispatch, getState) => {
    // Rest of the function
  };
```

The function takes two optional parameters:
`blockViewIndexUpdate` and `forceNavigateBack`. The first one is used to prevent the view index from being updated, which is used when the user is navigating between emails in the email detail view. The second one is used to force the user to navigate back to the email list, which is used when the user is navigating to the email detail view from the search list.

## React state

React state is used for local state management. This state is destroyed whenever a component is unmounted.

### Usage

Due to the fact that React state is destroyed whenever a component is unmounted, we are using React state for temporary state.

# Data flow (wip)

# Introduction

Data flow is very much tied into the [state management](frontend/state-management.md) section. It is important to understand how data flows through the application to understand how to use state management.

## Data flow in React

On initial load, the application is rendered with the initial state. Whenever the user has succesfylly signed in, the application will start fetching the data from the backend. The data is stored in the state and the application is re-rendered. Whenever the user changes the state, the application is re-rendered.

These are the main steps in the data flow:

1. Initial load
2. Base is fetched via the `checkBase` function inside`baseSlice`, it will load the user's personal data and the user's email labels.
   - In case the required labels aren't found in the Gmail account, the system will create them.
   - The system will store the labels in the Redux store.
   - The system will setup the emailList objects with the labels.
   - The system will check the user's email settings and will update the Redux state accordingly.
   - After all actions have been dispatched, the system will mark the base as loaded.
3. The user is redirected to the Email List overview page, which will activate the setting of the active label `useSetCurrentLabel()` and the fetching of the emails `useFetchEmailsDrafts()`.
   - The system will fetch the email meta data from the backend and store them in the Redux store. The meta data is stored in the `emailList` object, and is used to display the email list items.
   - The system will mark the inbox as loaded.
4. The user can now navigate to the email detail page, which will activate the fetching of the email `useFetchEmailDetail()`.
   - The system will fetch the email from the backend and store it in the Redux store, by updating the existing email object.

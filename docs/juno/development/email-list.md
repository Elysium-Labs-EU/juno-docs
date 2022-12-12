# Email List

The email list component is responsible for displaying the list of emails in the email detail component. It will render emails based on the active label.

The active label is set via custom hook, `useSetCurrentLabel`, that is triggered on the parent component, this hook dispatches a Redux Thunk which will update the active label in the Redux store based on the storaged labels and the active path.

## Composition

The email list component is composed of the following components:

1. LabeledInbox
2. LoadingState

The header for this component is generated via the [Header](/docs/juno/development/header) component.

### LabeledInbox

Based on the active label, the LabeledInbox component will display the list of emails for that label. If there are no emails to display, an empty state will be shown. If there is no active label, the LoadingState component will be displayed.

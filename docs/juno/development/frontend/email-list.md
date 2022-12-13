# Email List

The email list component is responsible for displaying the list of emails in the email detail component. It will render emails based on the active label.

The active label is set via custom hook, `useSetCurrentLabel`, that is triggered on the parent component, this hook dispatches a Redux Thunk which will update the active label in the Redux store based on the storaged labels and the active path.

## Composition

The email list component is composed of the following components:

1. LabeledInbox
2. SelectedOptions
3. LoadingState

The header for this component is generated via the [Header](header.md) component.

### LabeledInbox

Based on the active label, the LabeledInbox component will display the list of emails for that label. If there are no emails to display, an empty state will be shown. If there is no active label, the LoadingState component will be displayed.

### SelectedOptions

Selected options is a component that is used to display the selected options in the email list. This component is only displayed when the user has selected one or more emails in the email list.

The selected options component is composed of the following components:

1. Button to select all emails in the email list
2. Button to deselect all emails in the email list
3. Button to discard all selected emails
4. Button to archive all selected emails
5. Button to show more options, which will open up the Command Palette

## Actions on mount

The email list will execute two functions on mount:

1. A clean up function to restore the emailDetail state in Redux to the default state. This is used to ensure that when the user is navigating back-and-forth between the email detail and the email list, the email detail state is set with the correct values.
2. A function that sets the `activeEmailListIndex` in the Redux store to the index of the email list object that is currently being displayed in the email list component.

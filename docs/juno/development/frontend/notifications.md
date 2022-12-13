# Notifications

Notifications are a way to inform the user about something that happened in the system. They are displayed in the top right corner of the screen and disappear after a few seconds.

## Usage

Notifications are created by dispatching a `setSystemStatusUpdate` Redux function from the `utilsSlice`. It takes two arguments: the message to display and the type of the notification.

```ts
type TUpdateType = "success" | "info" | "warning" | "error";

interface ISystemStatusUpdate {
  message: string;
  type: TUpdateType;
}
```

The component `SnackbarOrchestrator` is responsible for displaying the notifications. It is located in `src/components/SnackbarOrchestrator`. It will listen to the `systemStatusUpdate` state and display the notification if it is not empty. Upon displaying the notification, it will clear the state, or display the next notification if there is one.

A notification can be dismissed by clicking on it.

Notifications are used to inform the user about the result of an action. For example, when a user clicks on the "Save" button, a notification will be displayed to inform the user about the positive result of the action, or if it has failed.

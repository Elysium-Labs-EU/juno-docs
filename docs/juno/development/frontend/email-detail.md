# Email Detail

The email detail component is used to display, and interact with, an email. The email detail component is responsible for displaying the email, and the composer whenever directly replying or forwarding to a message of the email.

## Composition

The email detail component is composed of the following components:

1. Email Detail Header
2. Messages overview
3. Files overview

## Actions on mount

The email detail component is mounted when the user navigates to the email detail page. The email detail component is mounted with the following actions:

1. Setting the `currentEmail` value in Redux state to the email that is being shown.
2. Setting the `viewIndex` value in Redux state to the index of the email that is being shown.
3. Execute the `useFetchEmailDetail` hook to fetch the email from the Gmail API, only if the action hasn't run before for this email.
4. Execute the `useFetchDraftList` hook to fetch the draft list of the email from the Gmail API, only if the thread has a draft message.
5. Set the `activeEmailList` value in local state to the email list that is being shown in the email list component. This is used to allow modifications on the email list, and to be traversed during navigation via the viewIndex.

## Core Status

Based on the core status, the email detail component is used in a certain context. The core status is set in the Redux state, and is used to determine the context in which the email detail component is used.

The core status can be one of the following:

1. isFocused
2. isSearching
3. isSorting

### isFocused

A state triggered via the Todo sort function. This state is used to hide the email navigation buttons, show the total email list count, and upon each interaction with the email automatically navigate to the next email in the list.

isSorting is the same, only uses a different email list and header.

### isSearching

A state triggered via the Search Function. This will ensure that the system uses the `searchList` from the Redux state to set as the `activeEmailList` in local state.

Additionally to a regular detail view, this shows the search query in the header.

### isSorting

A state triggered via the Inbox sort function. This state is used to hide the email navigation buttons, show the total email list count, and upon each interaction with the email automatically navigate to the next email in the list.

isFocused is the same, only uses a different email list and header.

## isFocused/isReplying

A value that is controlled via the Redux store. This value is used to determine whether the email detail component is in a replying state. This value is set to true when the user clicks on the reply button in the email detail options or via an emailListItem inline action.

When this value is true, the email detail component will show the composer component next to the email detail.

### forwarding

When the user is forwarding, the subject and body of the email will be pre-filled with the subject and body of the email that is being forwarded.

### replying

When the user is replying, the recipient(s) and subject of the email will be pre-filled with the relevant data of the email that is being replied to.

## Email Detail Header

This component is responsible for displaying the header of the email detail component. The header is composed of the following components:

1. Email Detail Header Title
2. Tab options for messages and files
3. Back button
4. Email navigation options (if not isFocused/isSorting)
5. Email position (if isFocused/isSorting)
6. Search query (if isSearching)

The header is responsible for the following actions:

1. Setting the correct header title based on the core status, or label or search query.
2. Loading the next page of emails when then user reaches the end of the email list in Redux.

### Edge loading next page

A function that is triggered whenever the current `viewIndex` is either within a range of 4 or equal to the length of the `activeEmailList`. This function will load the next page of emails from the Gmail API, and add them to relevant `emailList` in the Redux state, which in turn will update the activeEmailList in local state. The loaded emails will not include an HTML body on the message object, but will do so when the user reaches the email in the email list.

The loading will be done silently, and will not trigger a loading state. This is done to ensure that the user does not experience any loading states when scrolling through the email list.

## Messages overview

Displays all the messages of the email. The messages overview is composed of the following components:

1. MappedMessages
2. EmailDetailOptions
3. ReplyComposer
4. ForwardingComposer

And it will run a hook `useMarkEmailAsRead` to mark the email as read when the user opens the email detail component.

### MappedMessages

Shows all the messages of the email. The messages are mapped to either the DraftMessage component or ReadUnreadMessage component.

The draft message component has an additional header that indicates it is a draft and action to allow the user to delete the draft message. Upon clicking the delete draft button, the draft message will be deleted from the Gmail API. When the draft message is deleted, the draft message will be removed from the Redux state, and the email detail component will be re-mounted.

When the user clicks on the draft message, the draft message will be loaded into the composer component, and the composer component will be shown. The selected draft message will be hidden from the email detail component.

_optional_ the draft message and readunreadmessage topic can be expanded.

### EmailDetailOptions

This component holds all the options that are available to the user when viewing an email. The options are:

1. Reply
2. _Reply All (coming soon!)_
3. Forward
4. Mark as To do (only not in Todo list)
5. Delete and Archive (shown as stacked options)
6. Skip (only shown when isFocused/isSorting)
7. Unsubscribe (only whenever there is an unsubscribe link in the email)

All the options are their own component, and are mapped to the EmailDetailOptions component. Logic for the options is mostly handled via a Redux Thunk.

## Files overview

Shows all the files from all the messages related to the viewed email. The files overview is composed of the following components:
1. MappedFiles
2. Placeholder for when there are no files


### MappedFiles

Per message it will show all the files that are attached to the message. The files are mapped to the EmailAttachmentBubble component.
The user can click on the attachment bubble to download the file. The file will be downloaded to the user's downloads folder. Or the user can select to download all the files from the email at once, or per message.
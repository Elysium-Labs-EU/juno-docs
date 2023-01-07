# History

## Handle History Object

This code defines a function `handleHistoryObject` that takes in an array of Gmail history objects and an array of label objects and returns an array of feed models. Each feed model represents a feed in the application (e.g. Inbox, To Do, Sent, Drafts, and Archive). The function processes the history objects and populates the threads array in each feed model with the relevant Gmail messages based on the labels associated with each message in the history object. The function also sets the `nextPageToken` property in each feed model to the constant `HISTORY_NEXT_PAGETOKEN`.

An example of how to use this function:

```ts
import { handleHistoryObject } from './handleHistoryObject'

const history = [{...}, {...}, {...}] // An array of Gmail history objects
const storageLabels = [{id: 'label1', name: 'Label 1'}, {id: 'label2', name: 'Label 2'}] // An array of label objects

const feeds = handleHistoryObject({history, storageLabels})
```

The `feeds` variable will now contain an array of feed models with the `threads` property populated with the relevant Gmail messages and the `nextPageToken` property set to `HISTORY_NEXT_PAGETOKEN`.

## List History

This code defines an API route that fetches history data from a Gmail account. The history data includes information about changes to the labels, messages, and drafts in the Gmail account. The API route uses the `authMiddleware` function to authenticate the request and the `gmail.users.history.list` method from the Google Gmail API to retrieve the history data. The history data is returned in a response object. To use this API route, a request with a valid `startHistoryId` and `storageLabels` in the request body must be sent to the API endpoint. The `startHistoryId` parameter specifies the starting point for the history data to be retrieved, and the `storageLabels` parameter is an array of label objects that are available in the system.

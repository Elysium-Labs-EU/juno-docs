# Hooks

Hooks are a way to extend the functionality of the frontend. They are used to add keyboard shortcuts, and to add custom functionality to the frontend, which can be reused in multiple components.

A subselection of the current hooks:

- [useKeyboardShortcut](#usekeyboardshortcut)
- [useDebounce](#usedebounce)
- [useFetchEmailDetail](#usefetchemaildetail)
- [useFetchDraftList](#usefetchdraftlist)
- [useFetchEmailsDrafts](#usefetchemailsdrafts)
- [useFetchEmailsSimple](#usefetchemailssimple)

## useKeyboardShortcut

See [Keyboard Shortcuts](./keyboard-shortcuts.md) for more information.

## useDebounce

Used to debounce an input, mostly used to delay the throughput of a user's input.

```ts
useDebounce(value: any, delay: number)
```

## useFetchEmailDetail

Used to fetch the details of an email. It requires four parameters.
The hook may fire to update the emaildetail, whenever no thread has a body element, or whenever the composer closes (forceRefresh).

```ts
useFetchEmailDetail({
  activeEmailList,
  forceRefresh,
  setShouldRefreshDetail,
  threadId,
}: {
  activeEmailList: IEmailListObject | undefined
  forceRefresh: boolean
  setShouldRefreshDetail: Dispatch<SetStateAction<boolean>>
  threadId: string | undefined
})
```

## useFetchDraftList

Used to fetch the list of drafts. It requires one parameter.

```ts
useFetchDraftList({
  shouldFetchDrafts,
}: {
  shouldFetchDrafts: boolean
})
```

## useFetchEmailsDrafts

Used to fetch the list of emails which can include a list of drafts as well depending on the parameters passed.

The hook has two parameters and is called as follows:

```ts
useFetchEmailsDrafts(
  labelIds: Array<string>,
  firedTimeStamp: number
)
```

## useFetchEmailsSimple

Used to fetch the list of emails, without the details. This is used to fetch the list of emails in the inbox.
The function is currently only used by the InboxSortOption - to populate the inbox. The `timestampLastFired` variable is to throttle the number of requests made. The results are stored in the `emailList` variable in the Redux Store.

```ts
useFetchEmailsSimple();
```

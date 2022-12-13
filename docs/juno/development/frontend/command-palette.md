# Command Palette

The command palette is a modal that allows users to quickly access commands and actions. It is accessible from the header, and can be opened by pressing `cmd + k` or `ctrl + k`.

## Composition

The command palette is composed of multiple parts:

1. [Input](#input)
2. [Context bar](#context-bar)
3. [Search results](#search-results)
4. [Command suggestions](#command-suggestions)

### Input

The input is a text input that allows users to type in a command. It is also possible to use the arrow keys to navigate through the search results.

The input can be cleared via a button or by pressing `esc`.

### Context bar

Contextbar is active whenever there are emails selected prior to opening the command palette. It displays individual senders, upon which the command suggestions are based.

### Search results

Search results are fetched from the backend via the Gmail API and displayed in a list. The search results are initially stored in the local React State, after the user selects a search result, the search results are stored in the Redux store.

Clearing the search will clear the search results from the Redux store and local React State.

### Command suggestions

Command suggestions are based on the context bar. If there are more than three senders selected, the command suggestions will be more generic. If there are less than three senders selected, the command suggestions will be more specific.

## Keyboard navigation

The command palette has a few keyboard shortcuts that allow users to navigate through the command palette.
Up, down, escape and enter are used to navigate through the search results or command suggestions.

The keyboard shortcuts do **not** use the `useKeyboardShortcut` hook, because the keyboard shortcuts are hooked into the input field.
# Keyboard shortcuts

Keyboard shortcuts are a great way to speed up your workflow. They allow you to perform actions without having to use your mouse.

The keyboard shortcuts are enabled via the `useKeyboardShortcut` hook. This hook is used in every component that has a keyboard shortcut, that means that keyboard shortcuts are locally scoped.

The keyboard combination will override the default browser behavior. For example, the `cmd + k` shortcut will override the default browser behavior of opening the browser search.

## Usage

The `useKeyboardShortcut` hook takes two default arguments, and two optional arguments.

```ts
useKeyboardShortcut({
  actionKeys,
  handleEvent,
  isDisabled = false,
  refreshOnDeps = undefined,
}: {
  actionKeys: Array<string>
  handleEvent: () => void
  isDisabled?: boolean
  refreshOnDeps?: Array<any>
})
```

### actionKeys

Action keys are defined on a per component basis. They are used to define which keys trigger the keyboard shortcut. For example, the `cmd + k` shortcut is defined as `[setModifierKey, keyConstants.KEY_LETTERS.k]`.

#### setModifierKey

If the `setModifierKey` is set to `true`, the `cmd` key will be used on Mac, and the `ctrl` key will be used on Windows. This is useful when you want to use the same shortcut on both Mac and Windows. The modifier key based on the user agent of the os.

#### keyConstants

The key constants are defined in the `keyConstants` file. They are used to define the key that triggers the keyboard shortcut. For example, the `cmd + k` shortcut is defined as `[setModifierKey, keyConstants.KEY_LETTERS.k]`. The file is made up of four sections:

1. `KEY_LETTERS`
2. `KEY_NUMBERS`
3. `KEY_SPECIAL`
4. `KEY_ARROW`

A keyConstant is imported as follows:

```ts
import * as keyConstant from "constants/keyConstants";
```

### handleEvent

The function that is called when the keyboard shortcut is triggered. This function is passed to the `useKeyboardShortcut` hook from the component that uses the keyboard shortcut.

### isDisabled

The optional flag `isDisabled` is used to disable keyboard shortcuts. This is useful when you want to disable keyboard shortcuts in a specific component. For example, when you are typing in an input field, you don't want to trigger a keyboard shortcut.

### refreshOnDeps

An optional parameter that ensures that the hook is in sync with the parent component's state. This is useful when you want to update the keyboard shortcut based on a state change. For example, when you want to disable a keyboard shortcut when a modal is open.

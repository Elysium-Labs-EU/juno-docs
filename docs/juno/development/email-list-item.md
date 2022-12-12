# Email List Item

The email list component is responsible for displaying the email as a list item.

## Composition

The email list item component is composed of the following components:

1. ThreadBase wrapper
2. ThreadRow wrapper
3. Checkbox
4. Unread indicator
5. Avatar + Sender (or Recipient in case of Draft)
6. Email label
7. Message count
8. Email subject
9. Email snippet
10. Attachment indicator
11. Email date
12. Inline email actions (or draft actions)

## ThreadBase

Will render the email list item as a `div` element. And it will have a bold font weight if the email is unread. It is considered unread if the unread label is found on the email.

## ThreadRow

Will render the email list item as a `div` element. Based on `isFocused` status, it will have a different background color and border color. Based on the `showLabel` flag it will render a different grid layout.

## Checkbox

A checkbox component that will be used to select the email. It will be rendered if the `showCheckbox` flag is set to true. The onChange handler will dispatch a Redux action to update the selected emails in the Redux store. The checkbox will be checked if the email is found in the selected emails array.

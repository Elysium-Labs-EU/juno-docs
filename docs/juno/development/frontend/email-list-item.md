# Email List Item

The email list component is responsible for displaying the email as a list item.

## Composition

The email list item component is composed of the following components:

1. [ThreadBase wrapper](#threadbase)
2. [ThreadRow wrapper](#threadrow)
3. [Checkbox](#checkbox)
4. [Unread indicator](#unread-indicator)
5. [Avatar + Sender (or Recipient in case of Draft)](#avatar--sender-or-recipient-in-case-of-draft)
6. [Email label](#email-label)
7. [Message count](#message-count)
8. [Email subject](#email-subject)
9. [Email snippet](#email-snippet)
10. [Attachment indicator](#attachment-indicator)
11. [Email date](#email-date)
12. [Inline email actions (or draft actions)](#inline-email-actions-or-draft-actions)

## ThreadBase

Will render the email list item as a `div` element. And it will have a bold font weight if the email is unread. It is considered unread if the unread label is found on the email.

## ThreadRow

Will render the email list item as a `div` element. Based on `isFocused` status, it will have a different background color and border color. Based on the `showLabel` flag it will render a different grid layout.

## Checkbox

A checkbox component that will be used to select the email. It will be rendered if the `showCheckbox` flag is set to true. The onChange handler will dispatch a Redux action to update the selected emails in the Redux store. The checkbox will be checked if the email is found in the selected emails array.

## Unread indicator

The unread indicator is a span element that will be rendered whenever the email contains a message with a label named `unread`.

## Avatar + Sender (or Recipient in case of Draft)

Based on the sender or recipient (draft) user initials will be generated. These user initials will be used to generate the avatar. The avatar will be rendered if the `showAvatar` flag is set to true.

### Contact card

A contact card is rendered when the user hovers over the avatar. The contact card will display the user name, email address and the user avatar.

## Email label

The labels of the email will be shown if the `showLabel` flag is set to true. The labels will be rendered as a list of `span` elements. Only labels that are useful for Juno will be rendered, the function `onlyLegalLabelObjects` will filter out the labels that are not useful.

## Message count

A component that takes in all the messages from the email and renders the count of messages that are regular messages and drafts separatly.

## Email subject

The email subject is a plain render from the Redux store. The subject will be rendered as a `span` element. In case of a draft, the subject will be rendered with an additional `Draft` label as `span`.

## Email snippet

The email snippet is a plain render from the Redux store. The subject will be rendered as a `span` element.

## Attachment indicator

Shows an attachment indicator if the email contains an attachment. An email contains an attachment if the length of the `files` array is greater than 0.

## Email date

Based on the relative date, a diffent format will be used to display the date.

## Inline email actions (or draft actions)

Based on the Redux variable `labelIds` either the regular inline thread actions component is rendered, or the draft actions component is rendered.

The inline thread actions component will render components, which use the same functions as the email detail functions.

### Reply (email only)

When selecting to reply via the overview, it will dispatch a location change including a state object. That state object can be `{isReplying: true}`, the emailDetail page looks for that state, and if there is will act accordingly.

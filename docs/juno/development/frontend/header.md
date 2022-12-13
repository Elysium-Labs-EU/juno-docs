# Header

## Composition

The header component is composed of the following components:

1. Command Palette modal
2. Feedback modal
3. Keyboard combos modal
4. [No mobile version overlay](#no-mobile-version-overlay)
5. [SetHeader](#setheader)
6. Settings modal
7. Introduction modal

## No mobile version overlay

:::info

The mobile version of the app is not yet available. Please use a desktop browser to access the app.

:::

We show this overlay when the user is on a mobile device or small screen size. We do this by checking window width.

## SetHeader

A function that will check the location pathname, based on this it will render a different header.

Each header can have a different set of buttons, and a different title.

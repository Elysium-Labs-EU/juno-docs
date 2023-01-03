# Styling

Styling in the project is done via:

1. Styled components (via [Emotion](https://emotion.sh/docs/introduction))
2. Radix UI (via [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction))
3. Global CSS
4. Material UI / MUI (via [Material UI](https://mui.com/))

The goal is to use styled components as much as possible, but if you need to use a component from Radix UI or MUI, you can do so. We are phasing MUI out as much as possible, but there are still some components that are not yet available in Radix UI.

We use Storybook for showcasing our styled components, [see this page](storybook.md).

## Styled components

via [Emotion](https://emotion.sh/docs/introduction)

For each React component that requires styling, we create a styled component. This is done by creating a file with the same name as the component, but with the extension `*Styles.tsx`. For example, if you have a component called `Button.tsx`, you would create a file called `ButtonStyles.ts`. This file should contain all the styling for the component. For example:

```ts
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-black);
  color: var(--color-neutral-300);
`;
```

The styled component should be imported into the component file and used like this:

```tsx
import * as S from "./ButtonStyles";

export const Button = () => {
  return <S.Wrapper>Button</S.Wrapper>;
};
```

We are leveraging the wildcard import `* as S from "./ButtonStyles"` to make it easier to import multiple styled components from the same file, and to indicate that the imported variable is a styled component.

### Using props in styled components

When using styled components, you can pass props to the styled component. For example:

```ts
import styled from "@emotion/styled";

interface IWrapper {
  color: string;
}

export const Wrapper = styled.div<IWrapper>`
  background-color: var(--color-black);
  color: ${({ color }) => color};
`;
```

```tsx
import * as S from "./ButtonStyles";

const color = "red";

export const Button = () => {
  return <S.Wrapper color={color}>Button</S.Wrapper>;
};
```

## Radix UI

via [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)

The components for elements such as modal, menu, tabs, etc. are provided by Radix UI. These components are imported from the `@radix-ui/react-*` packages.

## Global CSS

To standardize the colors, fonts, and other styling, we use global CSS. This is done by importing the `GlobalStyles` component from `src/components/GlobalStyles.tsx` and wrapping the app in it. This component is imported in `src/App.tsx` and wrapped around the `Router` component.

The global variables are used inside a React component, styled component, Radix UI component or MUI component. For example to use a color that is defined in the global variables, you can do this:

```ts
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: var(--color-black);
  color: var(--color-neutral-300);
  border-radius: var(--radius-m);
`;
```

This ensures that the styling is consistent across the app.
For each color there can be multiple colors available, the darkest hue of the color is defined with the highest number indicator, the lightest hue with the lower number.

## MUI

via [Material UI](https://mui.com/)

We are currently phasing out the usage of MUI, the main component that is still using MUI to function is the autocomplete function, which is mainly used in the Email Composer, `src/components/Compose/ComposeFields/Generic/EmailInput/EmailInput.tsx` .

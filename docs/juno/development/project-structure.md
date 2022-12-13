# Project Structure

The project is based on two code repositories:

1. [juno-core](#juno-core) - the frontend code [this repository](https://github.com/elysium-labs-eu/juno-core)
2. [juno-backend-service](#juno-backend-service) - the backend code [this repository](https://github.com/elysium-labs-eu/juno-backend-service)

## Juno Core

The juno core is the repository for the frontend. The main folder for the frontend is `src`. The `src` folder contains the following folders:

```ts
src
├── components
├── constants
├── data
├── hooks
├── images
├── store
├── styles
└── utils
```

Folder names are with small letters, and files are with capital letters.

### Components

The components folder contains all the components used in the frontend. The components are split into folders based on their functionality, such as `EmailList`, `EmailDetail`, `Compose`, `Settings`, etc.

Within each folder, there are mostly always a minium of two files. The first file is the `[functionalityName].tsx` file, which contains the main component. The second file is the `[functionalityName]Styles.ts` file, which contains the styling for the component.

```ts
src
├── components
│   ├── EmailList
│   │   ├── EmailList.tsx
│   │   └── EmailListStyles.ts
```

#### Elements

The folder Elements is used to store all the components which are used in multiple components. The elements are split into folders based on their functionality, such as `Avatar`, `Buttons`, `ContactCard`, etc.

```ts
src
├── components
│   ├── Elements
│   │   ├── Avatar
│   │   │   ├── Avatar.tsx
│   │   │   └── AvatarStyles.ts
```

### Constants

All the constant values are stored in the `constants` folder. The constants are split into files based on their functionality, such as `baseConstants`, `keycomboConstants`, and `globalConstants`.

```ts
src
├── constants
│   ├── baseConstants.ts
```

### Data

All the API related code is stored in the `data` folder. The data folder contains files regarding every aspect of the API, such as `threadApi`, `draftApi`, `labelApi`, `settingsApi`, etc.

```ts
src
├── data
│   ├── api.ts
│   ├── draftApi.ts
```

### Hooks

Contains all the custom hooks used in the frontend. The hooks are split into files based on their functionality, such as `useFetchEmailDetail`, `useFetchEmailsDrafts`, `useFetchDraftList`, etc. See [Hooks](frontend/hooks.md) for more information.

```ts
src
├── hooks
│   ├── useFetchEmailDetail.ts
```

### Images

The folder contains all the images used in the frontend. It has the Juno logo, and a folder `svgIcons` containing all the svg icons used in the frontend.

```ts
src
├── images
│   ├── svgIcons
│   │   ├── quillIcons.tsx
```

### Store

The store folder contains all the Redux related code. The store folder contains the following folders:

```ts
src
├── store
│   ├── storeTypes
│   ├── baseSlice.ts
│   ├── store.ts
```

### Styles

The styles folder contains all the global styling for the frontend. The styles folder contains the following folders:

```ts
src
├── styles
│   ├── globalStyles.ts
```

Within the `globalStyles.ts` file, there are is one main object. The name of the object is `GlobalStyle`, which contains the styling for the global components. It creates a global style for the `body` and `html` tags.

### Utils

All the utility functions are stored in the `utils` folder. A function is considered a utility function if it is used in multiple places in the frontend. The utils folder is built up of subfolders or files, which are split based on their functionality, such as `cookie`, `assertNonNullish`, etc.

```ts
src
├── utils
│   ├── cookie
│   │   ├── getCookie.ts
│   │   ├── removeCookie.ts
│   │   └── setCookie.ts
│   ├── assertNonNullish.ts
```

## Juno Backend Service

The juno backend service is the repository for the backend. The main folder for the backend is `src`. The `src` folder contains the following folders:

```ts
src
├── api
├── constants
├── data
├── doc
├── google
├── middleware
├── routes
├── types
└── utils
```

Folder names are with small letters, and files are with capital letters.

### Api

Mirorring the frontend, the api folder contains all the API related code. The api folder contains the following folders:

```ts
src
├── api
│   ├── Contacts
│   ├── Drafts
│   ├── History
│   ├── Labels
│   ├── Message
│   ├── Threads
│   └── Users
```

For each possible action a type of request can be made, there is a file. For example, the `GET` request for the `Threads` API is stored in the `fetchFullThreads.ts` file.

### Constants

This folder contains all the constant values used in the backend. The current only file availbe is`globalConstants`.

### Data

The connector to the Redis data storage is stored in the `data` folder. The current only file availbe is`redis.ts`.

### Doc

All the Swagger documentation is stored in the `doc` folder. The current only file availbe is`definitions.yaml`.

### Google

The folder contains all the Google related code. The google folder contains the following folders:

```ts
src
├── google
│   ├── index.ts
│   ├── localRoute.ts
│   └── sessionRoute.ts
```

The `index.ts` file contains the main Google code. The `localRoute.ts` file contains the code for the local Google authentication. The `sessionRoute.ts` file contains the code for the session Google authentication.

### Middleware
All the possible middleware is stored in the `middleware` folder. The current only file availbe is`authMiddleware.ts`.

### Routes
The folder contains the main routing code. The routes folder contains the following folders:

```ts
src
├── routes
│   ├── app.ts
│   └── index.ts
```

#### App
On the app file we initialize the express app. We also initialize the middlewares and the `indexRoute`.

#### Index
The index file contains the main routing code. All the possible API routes are stored in the `index.ts` file and linked with the corresponding API file.

### Types
Custom types that are used in the backend are stored in the `types` folder. The current only file availbe is`emailAttachmentTypes.ts`.

### Utils
All the utility functions are stored in the `utils` folder. A function is considered a utility function if it is used in multiple places in the backend.
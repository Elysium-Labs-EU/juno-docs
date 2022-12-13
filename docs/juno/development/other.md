# Other

Various other options for development.

## ESLint

For both projects there are ESLint rules implemented, which will run on every commit. The rules are defined in the `.eslintrc.json` file. The rules are based on the [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/).

## Prettier

Prettier is implemented via `dprint`. The configuration is defined in the `dprint.json` file. The configuration is based on the [Prettier configuration](https://prettier.io/docs/en/options.html).

## Husky

Husky is implemented via `husky`. The configuration is defined in the `package.json` file. The configuration is based on the [Husky configuration](https://typicode.github.io/husky/#/?id=configuration). The configuration is used to run the ESLint rules on every commit.

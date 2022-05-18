# ui

## Initialisation

```shell
npm ci
```

## Development

```shell
npm run dev --workspace @utofun/ui
```

## Testing

```shell
npm run test --workspace @utofun/ui
```

## Publish to npm

1. update the version number in `package.json`

```shell
npm version <patch|minor|major>
```

2. push the commit and tag to remote

```shell
git push --tags
```

3. publish to npm and check the package version on [npm](https://www.npmjs.com/package/@utofun/ui).

```shell
npm publish --workspace @utofun/ui --access public
```

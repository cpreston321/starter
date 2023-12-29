# 🪄 CP's Starter Templates

Quickly get started with a starter template curated by [CP](https://github.com/cpreston321).

## Usage

You can use [`giget`](https://github.com/unjs/giget#giget) CLI to clone latest template to an empty directory:

```sh-session
npx giget@latest --registry="https://raw.githubusercontent.com/cpreston/starter/main/templates" [template-name]
```

**Example:** Clone `nuxt` to `my-app` directory:

```sh-session
npx giget@latest --registry="https://raw.githubusercontent.com/cpreston/starter/main/templates" nuxt my-app
```

## Templates

Name | Description | Local     | Online |
-----|-------------|-----------|--------|
[Nuxt 3 Starter](https://github.com/cpreston321/starter/tree/nuxt) | [Nuxt 3](https://github.com/nuxt/nuxt) | `npx giget@latest nuxt my-app` | [Stackblitz](https://stackblitz.com/github/cpreston321/starter/tree/nuxt) / [CodeSandbox](https://codesandbox.io/p/github/cpreston321/starter/nuxt) |

## Contribution

Each template is maintained in a branch (see [all branches](https://github.com/cpreston321/starter/branches)).
For improvements, please open a Pull Request to each individual branch.

**Note:** Please avoid commiting lock-files such as `yarn.lock`, `package-lock.json`, `bun.lockb` and `pnpm-lock.yaml` to template branches!

## Credits & Inspiration

- [nuxt/starter](https://github.com/nuxt/starter/tree/templates) - Repo structure & README
- [unjs/giget](https://github.com/unjs/giget#giget) - CLI to clone templates

## License

[MIT](./LICENSE)

# portfolio

Personal portfolio site — [jarza.cc](https://jarza.cc).

Built with [Next.js](https://nextjs.org) (App Router, static export), [Panda CSS](https://panda-css.com),
[Framer Motion](https://www.framer.com/motion/) and TypeScript. Linted and formatted with
[Biome](https://biomejs.dev).

## Developing

```sh
yarn install   # also runs `panda codegen` via the prepare script
yarn dev       # start the dev server
```

## Building

The site is a fully static export (`output: 'export'`), emitted to `out/`:

```sh
yarn build     # panda codegen + next build
yarn preview   # serve the static export locally
```

## Quality

```sh
yarn check     # type-check (tsc --noEmit)
yarn lint      # biome check
yarn format    # biome format --write
```

## Deploying

The `Dockerfile` builds the static export and serves `out/` with [`serve`](https://github.com/vercel/serve);
`compose.yml` runs it behind Traefik on a VPS.

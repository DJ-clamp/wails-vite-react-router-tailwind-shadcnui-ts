# README

## About

This template comes with Vite, React, reat-router, TypeScript, TailwindCSS and shadcn/ui.

Built with `Wails v2.10.1` and [shadcn's CLI](https://ui.shadcn.com/docs/cli)

### Using the Template
```console
wails init -n project-name -t https://github.com/DJ-clamp/wails-vite-react-router-tailwind-shadcnui-ts
```

### Installing Components
To install components, use shadcn's CLI tool to install

More info here: https://ui.shadcn.com/docs/cli#add

Example:
```console
cd frontend
```
```console
npx shadcn-ui@latest add [component]
```

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.
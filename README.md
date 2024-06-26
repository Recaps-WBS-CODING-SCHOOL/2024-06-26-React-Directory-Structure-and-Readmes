# Name of the project

A readme file is written in Markdown and can be displayed on GitHub. It's helpful to quickly understand, contribute and use your project.

## Tech stack

- React 19
- JavaScript
- tasty Vanilla CSS
- Some awesome Library!

## Setup

> [!TIP]
> Tell people how to install. Maybe there are some quirky things, contributors need to know about.

```bash
git clone git@github.com:yourAccount/your-repo.git
cd your-repo
bun install
bun run dev
```

> [!NOTE]
> This repo is using bun as runtime and package manager. Please install [bun](https://bun.sh/docs/installation) first. (For instance)

> [!TIP]
> You can use links, code snippets and [highlighted quotes](https://github.com/orgs/community/discussions/16925) in Github Markdown!

```html
<p>You need three backticks, followed by a code for your language for a snippet</p>
```

> [!WARNING]
> You can use all sorts of language codes - bash, html, css, js...

```css
.my-awesome-class {
  --css-is-awesome: 100%;
}
```

## Available scripts

> [!TIP]
> Tell people what scripts can be used in your project.

- `dev`: Starts development server
- `build`: Bundles for production
- `start`: Starts production server based of contents of latest build
- `test`: Runs tests with Vitest
- `lint`: ES lint

## Directory structure

> [!TIP]
> Display and describe the directory structure of your proect. Which files should go where? What can be found where?
> (There are tools to create a tree like the one below - [Win](https://marketplace.visualstudio.com/items?itemName=jmkrivocapich.drawfolderstructure), [Linux](https://gist.github.com/whoisryosuke/813186b07e6c9e4d23593041827a6530))

```bash
.
├── public
│   └── assets
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── utils
│   ├── main.jsx
│   ├── App.jsx
│   └── index.css
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.json
├── README.md
├── __tests__
│   ├── components
│   ├── hooks
│   └── utils
└── vite.config.js
```

- `public`: Storing public assets, like images. No html, js or css in this project here.
- `src`:
  - `components`: Custom components from a root `index` file from files grouped by concern, e.g. components under `src/components/clock/` for components related to `clock`.
  - `hooks`: Your self-made React hooks, like useNavigation, useLocalStorage, useFetch
  - `pages`: Page components navigable by a Router library
  - `services`: Modules needed for communicating with external services, like supabase, cloudinary, mapbox, contentful...
  - `utils`: Normal JAvaScript utility function, for e.g capitalizing titles, sorting arrays, and other common tasks needed throuought the project.
  - `main.jsx`: The connection between React and the DOM
  - `App.jsx`: Usually the place for your Router, or your Homepage
- `.eslintrc.cjs`: Linter configuration. Touch it, if you know, that you need to.
- `.gitignore`: Don't forget to include your .env and the node_modules.
- `index.html`: THe entry point to your project. Usually you leave it untouched. Sometimes you need to add meta data, but that's also coming to React.
- `package.json`: Write your scripts in here, check your dependencies (installed packages), andjust their version...
- `package-lock.json`: Don't touch it. (same goes for pnpm-lock.yaml, bun.lockb or similar)
- `README.md`: This is to give context about your project!
- `__tests__`: Everybody loves writing tests.
- `vite.config.js`: Vite workspace config. Sometimes you need to touch it for deployment, or project wide settings.

## General guidelines and other notes

> [!NOTE]
> Additional things people should know about.

- When importing, make sure `node_modules` imports are at the top, then custom files!
- Import everything in alphabetical order!
- Have fun!

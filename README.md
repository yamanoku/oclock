# O'clock app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

## Screenshot

| `prefers-color-scheme: light` | `prefers-color-scheme: dark` |
| ----------------------------- | ---------------------------- |
| ![Screen Shot prefers-color-scheme: light](https://user-images.githubusercontent.com/1996642/114294426-7f583500-9ad9-11eb-945a-7a11c35c53ff.png) | ![Screen Shot prefers-color-scheme: dark](https://user-images.githubusercontent.com/1996642/114294425-7c5d4480-9ad9-11eb-9238-99944a28e569.png) |

## Get started

Install the dependencies...

```bash
npm ci
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## License

MIT © [Okuto Oyama](https://yamanoku.net/)

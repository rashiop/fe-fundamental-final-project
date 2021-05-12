# Cocktail 101

---

### Run development

1. Installing the depedencies

```
yarn
```

2. Run the apps

```
yarn start-dev
```

### Build for production

1. build

```
yarn build
```

### Folder Structure

```
├── config                            # webpack configuration
|   ├── webpack.common.js             # common configuration
|   ├── webpack.dev.js                # additional config for development
|   |__ webpack.prod.js               # additional config for production
├── dist                              # build output
├── src
|   ├── scripts
|   |   ├── component
|   |   |   ├── cocktail-item.js
|   |   |   ├── cocktail-list.js
|   |   |   ├── search-bar.js
|   |   |   ├── navbar.js
|   |   |   ├── footer.js
|   |   |   |__ index.js
|   |   ├── data
|   |   |   ├── cocktail-datasource.js
|   |   |   |__ index.js
|   ├── styles
|   ├── views
|   |   |__ main.js
|   ├── app.js
|   ├── template.html                 # template for html bundle
|   ├── .gitignore                    # ignore dists, node_modules
|   ├── package.json                  # node package manager, maintain versioning & depedencies
|   |── yarn.lock                     # deterministic package depedency resolution
|   |── .eslintrc.js                  # eslint config
|   |__ prettier.config.js            # prettier config

```

### MVP:

- [x] webpack config
- [ ] webcomponent
- [ ] es6
- [ ] fetch

### for extra point

- [ ] responsive
- [ ] color scheme (https://colorhunt.co/palette/206889)
- [x] using npm (tailwind haha)
- [x] eslint, prettier
- [ ] webpack exploration (loader: dynamic module, minimizing, split chunk)

### Dev depedencies

1. **loader**: @babel/core, @babel/preset-env, babel-loader, css-loader style-loader
2. **code-style & formatter**: eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier prettier
3. **bundler**: webpack, webpack-cli, webpack-dev-server, webpack-merge, html-webpack-plugin

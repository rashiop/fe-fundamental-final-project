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
|   ├── images
|   |   ├── content
|   |   ├── design
|   ├── scripts
|   |   ├── component
|   |   |   ├── cocktail-item.js
|   |   |   ├── cocktail-list.js
|   |   |   ├── footer-menu.js
|   |   |   ├── footer-bar.js
|   |   |   |__ hero-landing.js
|   |   |__ data
|   |       |__ cocktail-datasource.js
|   ├── styles
|   |   |__ style.css
|   ├── views
|   |   |__ main.js
|   ├── app.js
|   ├── site.webmanifest
|   ├── template.html                 # template for html bundle
|   ├── .gitignore                    # ignore dists, node_modules
|   ├── package.json                  # node package manager, maintain versioning & depedencies
|   |── yarn.lock                     # deterministic package depedency resolution
|   |── .eslintrc.js                  # eslint config
|   |── postcss.config.js             # postcss config
|   |── tailwind.config.js            # tailwind config
|   |__ prettier.config.js            # prettier config

```

### MVP:

- [x] webpack config
- [x] webcomponent
- [x] es6
- [x] fetch

### for extra point

- [x] responsive
- [x] color scheme (https://colorhunt.co/palette/206889)
- [x] using npm (tailwind haha)
- [x] eslint, prettier
- [ ] webpack exploration (loader: dynamic module, minimizing, split chunk)

### Dev depedencies

1. **loader**: @babel/core, @babel/preset-env, babel-loader, css-loader style-loader
2. **code-style & formatter**: eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier prettier
3. **bundler**: webpack, webpack-cli, webpack-dev-server, webpack-merge, html-webpack-plugin

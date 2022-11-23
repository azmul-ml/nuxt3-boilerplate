# MLBD - Nuxt 3 Boilerplate

### How to Install and Run the Project

#### Step 1:
Make a ```.env``` file in the root directory. Put the below line:

```bash
API_BASE_URL=https://reqres.in
```
#### Step 2:
Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Run in Development Server

```bash
npm run dev
```
Start the development server on http://localhost:3000

### How to Prepare the Project for Production Build
Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


### List of Contents Included
1. Routing example
2. How to components create and declare.
3. Custom Single Fetch instance using useFecth hook and how to handle GET, POST, PUT, PATCH operations
4. Composables example
5. Pages Layouts declaration and hide/show layout according to route change
6. Route Middleware example
7. Typescript support
8. Internationalization Support (using @nuxtjs/i18n)
9. Theming support (using @nuxtjs/color-mode)
10. State management (Pinia using @pinia/nuxt)
11. SSR, SSG, CSR, SWR page example
12. Basic example of custom directive and plugin
13. Sass Support
14. Basic Error handling
15. Charjs example using vue components. (using vue-chartjs and chart.js)
16. Reactiviy and ref example with form component.
17. Form component validation (using @vuelidate/core)
18. Integrated eslint, prettier, commitlint, husky and lint staged


Look at more the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.


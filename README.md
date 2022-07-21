# Create single page React application backed by Cloudflare workers

* React Frontend deployed to Cloudflare Pages
* Backend deployed to Cloudflare Workers
* Shared module written in Typescript
* Debuggable using VS Code
* Testing for everything
* Live reloading for frontend and backend
* Environment variable and secret support
* Continuous Deployment via GitHub Actions

# How to use

* Use template to create your own repository
* Sign up for [Cloudflare](http://cloudflare.com/sign-up)
* Create an [API Token](https://developers.cloudflare.com/api/tokens/create/)
* Create a GitHub Secret called `CLOUDFLARE_API_TOKEN` with this value
* Create a GitHub Secret called `CLOUDFLARE_ACCOUNT_ID` with your Cloudflare account id
* Update the name of your application in [wrangler.toml](/backend/wrangler.toml)

# Details

## Backend

Typescript backend deployed to [Cloudflare Workers](https://workers.cloudflare.com)

### Dev

Runs locally with live reloading

```bash
cd backend
yarn
yarn dev
```

### Test

```bash
cd backend
yarn
yarn test
```

### Prod

Produces a `backend/dist/` containing assets to be deployed

```bash
cd backend
yarn
yarn build
```

## Frontend

Single page application using React, deployed to [Cloudflare Pages](https://pages.cloudflare.com)

### Dev

Runs locally with live reloading

```bash
cd shared
yarn
yarn link
yarn start # required for live reloading of shared module
cd ../frontend
yarn
yarn link @app/shared # required for live reloading of shared module
yarn start
```

### Test

```bash
cd backend
yarn
yarn test
```

### Prod

Produces a `frontend/dist/` containing assets to be deployed

```bash
cd shared
yarn
yarn build
cd ../frontend
yarn
yarn build
```

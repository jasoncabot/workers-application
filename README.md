# Workers Application

* React Frontend deployed to Cloudflare Pages
* Backend deployed to Cloudflare Workers
* Shared module written in Typescript
* Debuggable using VS Code
* Testing for everything
* Live reloading for frontend and backend
* Environment variable and secret support

# Backend

## Dev

Runs locally with live reloading

```bash
cd backend
yarn
yarn dev
```

## Test

```bash
cd backend
yarn
yarn test
```

## Prod

Produces a `backend/dist/` containing assets to be deployed

```bash
cd backend
yarn
yarn build
```

# Frontend

## Dev

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

## Test

```bash
cd backend
yarn
yarn test
```

## Prod

Produces a `frontend/dist/` containing assets to be deployed

```bash
cd shared
yarn
yarn build
cd ../frontend
yarn
yarn build
```

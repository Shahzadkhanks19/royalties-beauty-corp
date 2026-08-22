# Royalties Beauty Corp

Modern MERN corporate platform for Royalties Beauty Corp and its group companies.

## Stack

- React 19 + Vite 8
- JSX
- Tailwind CSS 4
- Motion for React (Framer Motion)
- React Router 7
- Node.js + Express 5
- MongoDB + Mongoose
- Vercel deployment

## Group companies

- Beyonist
- RB Service Connect
- RB Finance
- Royalties Charity
- Royalties Buffet

## Local development

1. Copy `.env.example` to `.env`.
2. Add your MongoDB connection string to `MONGODB_URI`.
3. Run `npm install`.
4. Run `npm run dev`.

Vite runs on `http://localhost:5173` and proxies `/api` requests to the local Express server on port `5000`.

## Quality checks

```bash
npm run check
```

This runs ESLint and then creates a production Vite build.

## Vercel

Import this GitHub repository into Vercel. The included `vercel.json` uses `npm run build`, serves the Vite `dist` output, keeps client-side routes working on refresh, and forwards `/api/*` to the Express serverless entry.

Configure these environment variables in Vercel:

- `MONGODB_URI`
- `CLIENT_ORIGIN` — production site origin, for example `https://your-domain.com`
- `NODE_ENV=production`

Do not commit `.env` files or database credentials.

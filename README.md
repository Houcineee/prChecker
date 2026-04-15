# prChecker

A small Node.js/Express webhook service for pull request events. It receives a GitHub PR webhook payload, fetches the PR diff, asks Gemini to review the diff, and posts that review as a PR comment.

## Project structure

```text
src/
  routes/       # Maps URLs to controller functions
  controllers/  # Handles req/res and HTTP status codes
  services/     # Business logic (GitHub + AI integrations)
  app.js        # Express app initialization and middleware
index.js        # Server startup
```

## Requirements

- Node.js
- A GitHub Personal Access Token with permission to post PR comments
- A Gemini API key

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Fill your `.env` values:

```env
GITHUB_PAT=your_github_personal_access_token
GEMINI_API_KEY=your_gemini_api_key
```

## Run

Production mode:

```bash
npm start
```

Development mode (nodemon):

```bash
npm run dev
```

By default, the server runs on port `8080` (`PORT` can be overridden via env).

## Webhook endpoint

- `POST /`

Send GitHub pull request webhook payloads to this endpoint.

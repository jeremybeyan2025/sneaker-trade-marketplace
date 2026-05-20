# Sneaker Trade Marketplace MVP

A premium sneaker marketplace starter app for **buying, selling, and trading authenticated sneakers**.

The concept is not a StockX/GOAT clone. The wedge is:

1. **Authenticated buy/sell marketplace**
2. **Two-sided trade escrow**
3. **TikTok-style drop/reveal experience**
4. **Closet-based social commerce**

## Core MVP

- Public marketplace homepage
- Sneaker listing cards
- Buy/sell/trade flows
- Trade offer builder
- Authentication admin queue
- Supabase-ready database schema
- Stripe Connect architecture notes
- Shipping/authentication state machine

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Supabase Auth/Postgres/Storage
- Stripe Connect for marketplace payments
- EasyPost/Shippo-ready shipping abstraction

## Local Setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example`.

## Suggested GitHub Repo Name

`sneaker-trade-marketplace`

## Critical Marketplace Rule

Do **not** launch paid randomized mystery boxes until gaming, sweepstakes, consumer protection, and state-law compliance are reviewed. Start with deterministic listings, authenticated trades, and scheduled drops.

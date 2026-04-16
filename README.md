# Shiven Paudyal (Neo) — Portfolio

Full-stack ML Engineer portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Supabase, Resend, and the Claude AI API.

## Features

- **Animated Hero** — Typewriter effect + particle canvas background
- **Projects Grid** — Hover glow cards with tech stack badges
- **Skill Bars** — Animated progress bars across 4 categories
- **Experience Timeline** — Vertical timeline with entrance animations
- **Book a Call** — Form notifies via Resend + redirects to Cal.com
- **Contact Form** — Stores in Supabase + sends email via Resend
- **AI Chat Widget** — Floating Claude-powered assistant that knows your background, logs to Supabase
- **Dark/Light mode** — System-aware toggle with next-themes
- **SEO optimized** — OpenGraph, Twitter cards, meta tags
- **Mobile responsive** — Fully responsive across all breakpoints

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Animations | Framer Motion |
| Backend | Next.js API Routes (serverless) |
| Database | Supabase (Postgres) |
| Email | Resend API |
| AI | Anthropic Claude API (`claude-sonnet-4-20250514`) |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, ThemeProvider, Toaster
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global styles + Tailwind
│   └── api/
│       ├── contact/route.ts    # POST /api/contact
│       ├── booking/route.ts    # POST /api/booking
│       └── chat/route.ts       # POST /api/chat (Claude)
├── components/
│   ├── Navigation.tsx      # Sticky nav with mobile menu + theme toggle
│   ├── Hero.tsx            # Typewriter + particle canvas + CTAs
│   ├── About.tsx           # Bio, stats, highlights
│   ├── Projects.tsx        # Card grid with glow hover
│   ├── Skills.tsx          # Animated skill bars by category
│   ├── Experience.tsx      # Vertical timeline
│   ├── BookCall.tsx        # Booking form + Cal.com redirect
│   ├── Contact.tsx         # Contact form + socials
│   └── ChatWidget.tsx      # Floating Claude AI chat bubble
├── lib/
│   ├── data.ts             # All static content (projects, skills, exp, system prompt)
│   ├── supabase.ts         # Supabase client + types
│   └── types.ts            # Shared TypeScript interfaces
├── public/
│   └── resume.pdf          # YOUR RESUME — place it here
├── supabase/
│   └── migrations/
│       └── 001_initial.sql # Supabase schema (bookings, messages, ai_chats)
├── .env.example            # Environment variable template
└── README.md
```

---

## Step-by-Step Deployment

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) account (free tier works)
- A [Resend](https://resend.com) account (free tier: 3,000 emails/month)
- An [Anthropic API key](https://console.anthropic.com)
- A [Cal.com](https://cal.com) account
- A [Vercel](https://vercel.com) account

---

### Step 1 — Clone & Install

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

---

### Step 2 — Set Up Supabase

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Choose a name, password, and region closest to you
3. Once created, go to **SQL Editor** → **New query**
4. Paste the entire contents of `supabase/migrations/001_initial.sql`
5. Click **Run** — this creates `bookings`, `messages`, and `ai_chats` tables
6. Go to **Settings → API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

### Step 3 — Set Up Resend

1. Go to [resend.com](https://resend.com) → Sign up
2. Go to **API Keys** → **Create API Key**
3. Copy the key → `RESEND_API_KEY`
4. Set `NOTIFICATION_EMAIL` to your Gmail address
5. **Optional but recommended:** Add and verify your own domain in Resend (Settings → Domains) for production. Until then, emails come from `onboarding@resend.dev` (works fine for testing).

> **Note:** To send to your Gmail from a custom `from` address, you must verify your domain in Resend.

---

### Step 4 — Get Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. **API Keys** → **Create Key**
3. Copy → `ANTHROPIC_API_KEY`

---

### Step 5 — Set Up Cal.com

1. Go to [cal.com](https://cal.com) → Sign up
2. Create an event type (e.g., "30-min intro call")
3. Copy your booking link (e.g., `https://cal.com/yourname/30min`)
4. Set → `NEXT_PUBLIC_CALCOM_LINK`

---

### Step 6 — Add Your Resume

Place your resume PDF at:

```
public/resume.pdf
```

It will be downloadable from the **Resume** button in the nav.

---

### Step 7 — Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=your@gmail.com
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
NEXT_PUBLIC_CALCOM_LINK=https://cal.com/yourname
```

---

### Step 8 — Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see the portfolio with all sections and a working chat widget.

---

### Step 9 — Deploy to Vercel

#### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. When it asks about environment variables, add them one by one.

#### Option B — GitHub + Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. In **Environment Variables**, add all 6 variables from your `.env.local`

4. Click **Deploy** — Vercel auto-detects Next.js and builds correctly

5. Your site will be live at `https://your-project.vercel.app`

---

### Step 10 — Custom Domain (Optional)

1. In Vercel dashboard → **Settings → Domains**
2. Add your domain (e.g., `shivenpaudyal.dev`)
3. Update DNS records as instructed by Vercel
4. Update the `url` in `app/layout.tsx` metadata to match

---

## Customization Guide

### Update Your Content

All static content lives in `lib/data.ts`:
- **Projects** → Edit the `projects` array
- **Skills** → Edit the `skills` array (level is 0–100)
- **Experience** → Edit the `experiences` array
- **AI System Prompt** → Edit `SYSTEM_PROMPT` to update what the AI knows about you

### Update Social Links

In `components/Contact.tsx`, update the `socials` array with your actual URLs.

### Update Navigation Links

In `components/Navigation.tsx`, update the email in socials if needed.

### Change Colors

The brand color is defined in `tailwind.config.ts` under `colors.brand`. The default is a purple gradient. Change the hex values to update the entire site's accent color.

---

## Database Tables Reference

| Table | Purpose | Columns |
|-------|---------|---------|
| `bookings` | Call booking intents | id, name, email, message, created_at |
| `messages` | Contact form submissions | id, name, email, message, created_at |
| `ai_chats` | AI conversation logs | id, visitor_message, agent_response, created_at |

View your data in the Supabase dashboard under **Table Editor**.

---

## Common Issues

**Chat widget not responding?**
- Check `ANTHROPIC_API_KEY` is set in Vercel env vars
- The model `claude-sonnet-4-20250514` requires an active Anthropic API subscription

**Emails not sending?**
- Verify `RESEND_API_KEY` is correct
- On free Resend tier, `from` must be `onboarding@resend.dev` until you verify a domain
- Check Resend logs at resend.com/emails

**Supabase inserts failing?**
- Confirm the migration SQL ran successfully
- Check that RLS policies are enabled (they allow anon inserts)
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct

**Build errors on Vercel?**
- Ensure all env vars are added in Vercel dashboard
- Run `npm run build` locally first to catch TypeScript errors

---

## License

MIT — Feel free to use as a template, but please swap out personal info!

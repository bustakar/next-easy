# Next Easy 🚀

A production-ready Next.js starter template with authentication, database, payments, and beautiful UI components. Build your SaaS faster with batteries included.

## Features ✨

- ⚡ **Next.js 15** - App Router, Server Components, and Turbopack
- 🔐 **Better Auth** - Modern authentication with magic links, OAuth, and sessions
- 🗄️ **Drizzle ORM + PostgreSQL** - Type-safe database with migrations
- 💳 **Stripe Integration** - Subscriptions and payment handling ready
- 🎨 **shadcn/ui** - Beautiful, accessible components built with Radix UI
- 📧 **Resend** - Transactional emails with React Email templates
- 🎭 **Motion** - Smooth animations and transitions
- 🌗 **Dark Mode** - Built-in theme support
- 📱 **Responsive** - Mobile-first design
- 🔒 **Type-Safe** - Full TypeScript coverage

## Tech Stack 🛠️

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** Better Auth
- **Payments:** Stripe
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Email:** Resend + React Email
- **Animations:** Motion (Framer Motion)

## Quick Start 🏃

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd next-easy
npm install
```

### 2. Environment Setup

Create a `.env` file:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
RESEND_API_KEY="re_..."
EMAIL_FROM="Your App <noreply@yourdomain.com>"
```

### 3. Database Setup

```bash
# Push schema to database
npm run db:push

# Or generate and run migrations
npm run db:generate
npm run db:migrate

# Open Drizzle Studio to view your data
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure 📁

```
next-easy/
├── src/
│   ├── app/                      # Next.js app router
│   │   ├── components/           # Landing page components
│   │   ├── dashboard/            # Dashboard pages
│   │   ├── api/                  # API routes
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   └── email/                # Email templates
│   ├── db/
│   │   ├── schema.ts             # Drizzle schema
│   │   └── migrate.ts            # Migration runner
│   ├── lib/
│   │   ├── db.ts                 # Database client
│   │   ├── auth.ts               # Auth configuration
│   │   ├── auth-client.ts        # Client-side auth
│   │   ├── email.ts              # Email utilities
│   │   └── utils.ts              # Helper functions
│   └── hooks/                    # Custom React hooks
├── drizzle/                      # Generated migrations
├── drizzle.config.ts             # Drizzle configuration
└── DATABASE.md                   # Database documentation
```

## Documentation 📚

- **[Database Setup](./DATABASE.md)** - Drizzle ORM setup and usage
- **[Email System](./EMAIL.md)** - Email configuration with Resend

## Available Scripts 📝

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate migration files
npm run db:migrate       # Run migrations
npm run db:push          # Push schema (dev only)
npm run db:studio        # Open Drizzle Studio
```

## Features in Detail 🔍

### Authentication

- Magic link (passwordless) authentication
- Secure session management

### Database

- Type-safe queries with Drizzle ORM
- PostgreSQL with full schema
- Automatic migrations
- User, session, and subscription tables
- Visual database browser (Drizzle Studio)

### Payments

- Stripe integration ready
- Subscription management tables
- Payment history tracking
- Webhook endpoint structure

### UI Components

- Pre-built landing page
- Dashboard layout with sidebar
- Responsive navigation
- Animated components
- Form components
- Card layouts
- Buttons, inputs, and more

### Email

- Magic link emails
- React-based templates
- Resend integration
- Easy to customize

## Deployment 🚀

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Database Hosting

Recommended PostgreSQL providers:

- [Neon](https://neon.tech) - Serverless Postgres
- [Supabase](https://supabase.com) - Open-source Firebase alternative
- [Railway](https://railway.app) - Simple deployment platform
- [Vercel Postgres](https://vercel.com/storage/postgres) - Integrated with Vercel

## Customization 🎨

### Branding

Update the logo and branding in:

- `src/app/components/logo.tsx`
- `src/app/layout.tsx` (metadata)
- Email templates

### Styling

- Tailwind config: `tailwind.config.js`
- Global styles: `src/app/globals.css`
- Theme colors: Update CSS variables

### Landing Page

Edit components in `src/app/components/`:

- `hero-section.tsx` - Hero with CTA
- `features-1.tsx` - Feature showcase
- `pricing.tsx` - Pricing tiers
- `call-to-action.tsx` - Final CTA
- `footer.tsx` - Footer with links

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

MIT License - feel free to use this template for your projects!

## Support 💬

- [Documentation](./DATABASE.md)
- [Issues](https://github.com/your-repo/issues)
- [Discussions](https://github.com/your-repo/discussions)

---

Built with ❤️ using Next.js and modern web technologies.

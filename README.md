# 🇨🇳 ChinaEdu Admissions Platform

A mobile-first, responsive, and high-trust website architecture for an international student admissions agency helping students study in China. 

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

---

## 🚀 Key Features

* 📱 **Mobile-First Responsive Design**: Scales fluidly from compact mobile displays (375px+) to large desktop viewports (1024px+).
* 🎓 **Interactive University Finder**: Dynamic university search page with instant client-side filtering by City, Language Medium (English/Chinese), and Scholarship types.
* 📋 **3-Step Qualification Wizard**: Multi-step inquiry form that validates student contact details, GPA qualifications, and program preferences, pre-populating targets from search routes.
* 🛠️ **Supabase Integration**: Server-side inquiry storage with public insert policies (Row Level Security) and built-in development fallback mocks to prevent runtime crashes.
* 💫 **Premium Aesthetics**: Soft, trustworthy light-themed layout featuring custom glassmorphism components and fluid micro-animations powered by `framer-motion`.
* 📝 **Student Guides Feed**: Placeholders for resource guides (e.g. visa processing, bank setup, scholarship applications) to optimize student readiness.

---

## 📂 Folder Structure

```
├── app/
│   ├── api/inquiries/route.ts  # Validation and Supabase inquiry insertion
│   ├── blog/                   # Helpful resources feed for students
│   ├── inquiry/                # 3-Step lead capture qualification form
│   ├── services/               # Detailed breakdown of housing/visa support
│   ├── universities/           # Filterable partner universities search
│   ├── globals.css             # Premium style tokens and theme variables
│   ├── layout.tsx              # Google Fonts (Outfit & Inter) configuration
│   └── page.tsx                # Homepage layout (Hero, Stats, Process)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navigation bar with mobile sliding drawer
│   │   └── Footer.tsx          # Multi-column footer with ICEF trust seals
│   └── home/
│       ├── Hero.tsx            # Trust-building hero section
│       ├── Stats.tsx           # Success metrics showcase
│       ├── ServicesGrid.tsx    # Responsive service teaser cards
│       ├── Programs.tsx        # Interactive degree tabs & eligibility details
│       ├── Process.tsx         # 5-step application timeline
│       └── Testimonials.tsx    # Success stories horizontal slider / carousel
├── lib/
│   └── supabase.ts             # Supabase client instantiation with fallback mock client
├── public/
│   └── images/                 # Custom generated photorealistic image assets
└── supabase_schema.sql         # SQL schema defining the inquiries table and RLS policies
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) and **npm** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Sadev-Academy/China-Education.git
cd China-Education
npm install
```

### 3. Environment Variables
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```
Add your Supabase Project credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```
*Note: If left blank or unconfigured, the application runs in **Mock Development Mode**, printing form submissions to the server console and simulating database insertion without throwing errors.*

### 4. Database Setup
Execute the SQL statements inside [`supabase_schema.sql`](./supabase_schema.sql) in your Supabase SQL Editor. This sets up the `inquiries` table and enables secure Row Level Security (RLS) policies allowing public insertions while locking reads to authenticated staff.

### 5. Running the App
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Compilation Verification
Ensure everything compiles cleanly before deployment:
```bash
npm run build
```
This pre-renders all static pages and outputs an optimized production build.

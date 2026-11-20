# Timeflow — Time Tracking & Productivity Landing Page

A pixel-perfect, responsive React landing page for **Timeflow**, recreated from the Figma reference design with meticulous attention to typography, spacing, colors, and layout.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts variable font: weights 100–900)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
timeapp/
├── index.html                   # HTML entry point with Inter font preconnect
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration with React & Tailwind plugins
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root component rendering all sections in sequence
│   ├── index.css                # Tailwind CSS v4 @theme, Inter font, and root styles
│   └── components/
│       ├── Navbar.jsx           # Fixed top navigation with dropdowns and mobile menu
│       ├── Hero.jsx             # Split header headline, paragraph, CTAs & badge
│       ├── DashboardPreview.jsx # macOS-style hero app window with live timer & charts
│       ├── Stats.jsx            # Trusted partner logos and 3 key metric counters
│       ├── Features.jsx         # 12-column Bento Grid (4 feature cards with live widgets)
│       ├── Steps.jsx            # 3-step workflow (Timer, Work, Progress)
│       ├── Dashboard.jsx        # Dark navy section with full white mockup & callouts
│       ├── Benefits.jsx         # Timesheet table widget & 6 checkmarked key benefits
│       ├── Testimonials.jsx     # Social proof customer quote cards
│       ├── CTA.jsx              # Indigo gradient conversion banner
│       └── Footer.jsx           # Multi-column footer with links and legal notice
```

---

## 🎨 Design System & Colors

- **Primary Colors**:
  - `primary-50`: `#eef2ff`
  - `primary-100`: `#e0e7ff`
  - `primary-200`: `#c7d2fe`
  - `primary-500`: `#6366f1`
  - `primary-600`: `#4f46e5` (Primary brand purple)
  - `primary-700`: `#4338ca`
- **Dark Navy / Slate Accents**:
  - Deep Dark Section: `#192854` / `#0D183B`
  - Primary Text: `#192852`
  - Muted Text: `#64748b` / `#94a3b8`
- **Backgrounds**:
  - Light Lavender Tint: `#eeecff`
  - Soft Slate Tint: `#edf2f8` / `#f7f9fc`
  - Pure White: `#ffffff`
- **Typography**:
  - Font Family: `'Inter', sans-serif`
  - Variable font weights: Regular (`400`), Medium (`500`), Semi-bold (`600`), Bold (`700`), Extra-bold (`800`)

---

## 🧩 Sections Breakdown

1. **Navbar** (`Navbar.jsx`):
   - Fixed header with blur backdrop.
   - Logo, product links (`Product ⌄`, `Solutions ⌄`, `Features`, `Pricing`, `Resources ⌄`, `Blog`).
   - `Log in` text link and `Start free trial` button.
   - Responsive mobile navigation drawer.

2. **Hero & Dashboard Preview** (`Hero.jsx`, `DashboardPreview.jsx`):
   - `NEW • A clearer view of your workday` badge.
   - Large headline (`Make every hour count.`) with complementary split copy and CTAs.
   - Interactive macOS-style window mockup with live running timer, weekly bar chart, category breakdown, recent timesheet entries, team status, and Jira/Slack sync badge.

3. **Stats & Logos** (`Stats.jsx`):
   - Brand logos: Layers, Quotient, circolles, Sisyphus, Catalog.
   - 3 large metric counters: `10,000+ Professionals`, `500,000+ Hours tracked`, `2,500+ Projects managed`.

4. **Features Bento Grid** (`Features.jsx`):
   - `01 / Smart Time Tracking` (7 cols, `#eeecff` background, interactive timer).
   - `02 / Project Management` (5 cols, white card, sprint budget progress bar).
   - `03 / Team Management` (5 cols, white card, member capacity bars).
   - `04 / Actionable Insights` (7 cols, `#edf2f8` background, billable hours & sparklines).

5. **3-Step Workflow** (`Steps.jsx`):
   - `01 Start Your Timer` (active purple badge + live timer widget).
   - `02 Manage Your Work` (milestones & task progress widget).
   - `03 Understand Your Progress` (invoice ready-to-send widget).

6. **The Big Picture Dashboard** (`Dashboard.jsx`):
   - Deep navy background (`#192854`).
   - Tab toggles (`Overview`, `Timesheets`, `Reports`).
   - Full light-themed dashboard mockup card with bottom tab bar (`Summary`, `Detailed`, `Weekly`, `Reports`, `Billing`).
   - 3 bottom feature highlights with checkmarks.

7. **Benefits & Timesheet** (`Benefits.jsx`):
   - Left: `A week well spent.` timesheet table with hours per project across Mon–Fri and `32h 40m` summary.
   - Right: 6 core benefits in a 2-column grid.

8. **Testimonials** (`Testimonials.jsx`):
   - Real-world quotes from founders, operations leads, and designers.
   - Highlighted first testimonial with lavender background.

9. **CTA Banner** (`CTA.jsx`):
   - Vibrant gradient card with primary (`Get started for free`) and secondary (`Explore Pricing ↗`) actions.

10. **Footer** (`Footer.jsx`):
    - Company branding, mission tagline, and contact email.
    - 4 organized link categories (`Product`, `Solutions`, `Resources`, `Company`).
    - Copyright and legal terms.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd timeapp

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

```bash
# Build the application
npm run build

# Preview the production build locally
npm run preview
```

---

## 📄 License

This project is licensed under the MIT License.

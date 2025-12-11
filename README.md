# 🎯 Events & Activities Platform - Frontend

<div align="center">

![Events & Activities](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Connect. Participate. Experience Together.**

A modern social platform that connects people through shared interests and local events. Never miss out on activities just because you don't have someone to go with.

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

The **Events & Activities Platform** bridges the gap between online discovery and offline participation. Whether it's a concert, hiking trip, board game night, or tech meetup, our platform helps you find like-minded people to share experiences with.

### Why This Platform?

- 🤝 **No More Solo Events** - Find companions for any activity
- 🌍 **Local Community** - Connect with people in your area
- 🎨 **Diverse Activities** - From sports to arts, gaming to networking
- 💳 **Secure Payments** - Safe and easy event registration
- ⭐ **Trust System** - Reviews and ratings for hosts and participants

---

## ✨ Key Features

### For Participants
- 🔍 **Advanced Search** - Filter events by category, date, location
- 👤 **Profile Management** - Showcase interests and activity history
- 💬 **Event Discovery** - Browse upcoming events with detailed information
- 💳 **Secure Payments** - Easy checkout for paid events
- ⭐ **Review System** - Rate and review hosts after events

### For Event Hosts
- 📅 **Event Creation** - Easy-to-use event management dashboard
- 👥 **Participant Management** - Track RSVPs and attendees
- 💰 **Revenue Tracking** - Monitor earnings from paid events
- 📊 **Analytics** - View event performance metrics
- 🖼️ **Media Upload** - Add attractive images to events

### For Administrators
- 🛡️ **User Management** - Moderate users and hosts
- 📊 **Platform Overview** - Comprehensive dashboard analytics
- ⚙️ **Content Moderation** - Review and manage events
- 🔒 **Security Controls** - Monitor platform security

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework** - [Next.js 15](https://nextjs.org/) (App Router)
- **Language** - [TypeScript](https://www.typescriptlang.org/)
- **Styling** - [Tailwind CSS](https://tailwindcss.com/)
- **State Management** - React Context / Zustand
- **Forms** - React Hook Form + Zod
- **HTTP Client** - Axios / Fetch API

### UI Components & Libraries
- **Component Library** - shadcn/ui
- **Icons** - Lucide React / React Icons
- **Date Picker** - React DatePicker
- **Image Upload** - Cloudinary / ImgBB
- **Notifications** - React Hot Toast / Sonner
- **Maps** - Leaflet / Google Maps (Optional)

### Authentication & Security
- **Auth** - NextAuth.js / JWT
- **Protected Routes** - Middleware-based authentication
- **API Security** - Token-based authorization

### Payment Integration
- **Payment Gateway** - Stripe / SSLCommerz / AmarPay
- **Checkout** - Secure payment processing

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

```bash
node >= 18.0.0
npm >= 9.0.0
# or
yarn >= 1.22.0
# or
pnpm >= 8.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/events-activities-frontend.git
cd events-activities-frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
```
http://localhost:3000
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Image Upload
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-preset

# Payment Gateway
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
# or for SSLCommerz
NEXT_PUBLIC_SSLCOMMERZ_STORE_ID=your-store-id

# Optional: Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
```

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (main)/
│   │   ├── events/
│   │   │   ├── page.tsx              # Event listing
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx          # Event details
│   │   │   └── create/
│   │   │       └── page.tsx          # Create event
│   │   ├── profile/
│   │   │   └── [id]/
│   │   │       └── page.tsx          # User profile
│   │   └── dashboard/
│   │       └── page.tsx              # User dashboard
│   ├── admin/
│   │   └── dashboard/
│   │       └── page.tsx              # Admin panel
│   ├── layout.tsx
│   ├── page.tsx                      # Home page
│   └── globals.css
├── components/
│   ├── ui/                           # shadcn/ui components
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingSpinner.tsx
│   ├── events/
│   │   ├── EventCard.tsx
│   │   ├── EventFilters.tsx
│   │   └── EventForm.tsx
│   ├── profile/
│   │   ├── ProfileHeader.tsx
│   │   └── InterestTags.tsx
│   └── auth/
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── lib/
│   ├── axios.ts                      # API client config
│   ├── utils.ts                      # Utility functions
│   └── validations.ts                # Zod schemas
├── hooks/
│   ├── useAuth.ts
│   ├── useEvents.ts
│   └── useProfile.ts
├── context/
│   └── AuthContext.tsx
├── types/
│   ├── user.ts
│   ├── event.ts
│   └── index.ts
├── public/
│   ├── images/
│   └── icons/
├── .env.local
├── .eslintrc.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript compiler check |
| `npm run format` | Format code with Prettier |

---

## 📖 Usage Guide

### For Participants

1. **Create Account**
   - Navigate to `/register`
   - Fill in your details and interests
   - Verify email (if enabled)

2. **Discover Events**
   - Browse `/events` for available activities
   - Use filters to find events matching your interests
   - View event details and host information

3. **Join Events**
   - Click "Join Event" on any event page
   - Complete payment if required
   - Receive confirmation

4. **Manage Your Events**
   - View joined events in `/dashboard`
   - Cancel participation if needed
   - Leave reviews after attending

### For Event Hosts

1. **Become a Host**
   - Request host status from your profile
   - Wait for admin approval

2. **Create Events**
   - Navigate to `/events/create`
   - Fill in event details
   - Upload attractive images
   - Set participant limits and fees

3. **Manage Participants**
   - View RSVPs in your dashboard
   - Track payments
   - Communicate with participants

### For Administrators

1. **Access Admin Panel**
   - Navigate to `/admin/dashboard`
   - View platform statistics

2. **Manage Users**
   - Approve/reject host requests
   - Moderate user accounts
   - Handle reports

3. **Moderate Content**
   - Review and approve events
   - Remove inappropriate content
   - Monitor platform activity

---

## 🎨 Customization

### Theme Configuration

Edit `tailwind.config.ts` to customize colors:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

### Component Styling

All components use Tailwind CSS classes. Modify components in `/components` directory to customize appearance.

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow TypeScript best practices
- Use ESLint and Prettier for consistent code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features

---

## 🐛 Known Issues

- [ ] Issue with event filtering on Safari
- [ ] Mobile responsiveness on older iOS devices
- [ ] Calendar view performance with 100+ events

See [open issues](https://github.com/yourusername/events-activities-frontend/issues) for a full list.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

**Project Maintainer** - [@yourname](https://twitter.com/yourname) - email@example.com

**Project Link** - [https://github.com/yourusername/events-activities-frontend](https://github.com/yourusername/events-activities-frontend)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel](https://vercel.com) for hosting

---

<div align="center">

**Made with ❤️ by Your Team**

⭐ Star this repo if you find it helpful!

</div>
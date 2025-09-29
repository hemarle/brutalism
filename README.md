# ✉️ Brutalism - Modern Dashboard Platform

A comprehensive, responsive dashboard platform built with **Next.js 15.5.4**, featuring mock data visualization, email management,  with accessibility-first principles.

##  Key Features

###  Email Management System
- **Smart Pagination**: Server-side pagination with 15 emails per page for optimal performance
- **Advanced Filtering**: Filter by status (read/unread), labels (inbox, starred, sent, drafts), and search functionality
- **Mobile-Optimized**: Dedicated mobile layout with drawer navigation patterns

###  Interactive Marketing Dashboard  
- **Dynamic Data Generation**: Faker.js integration for realistic marketing metrics
- **Timeline-Based Filtering**: 7-day, 14-day, and 1-month period filtering with context management
- **Traffic Analytics**: Multi-source traffic tracking (Google, Facebook, Email, Referral)
- **Budget Visualization**: Interactive charts showing platform-wise spending with real-time updates
- **Acquisition Metrics**: Customer acquisition cost tracking and optimization
- **Revenue Analytics**: Performance indicators with trend analysis and comparative insights
- **Reusable Components**: Modular stats cards and chart components for easy extension

###  UI/UX Excellence
- **Brutalist Design**: Clean, functional aesthetics focusing on usability and clarity
- **Responsive Layout**: Mobile-first approach with conditional component rendering  
- **Interactive Charts**: Recharts integration for data visualization with hover states
- **Accessibility Focus**: WCAG 2.1 AA compliance with ARIA labels, keyboard navigation, and screen reader support
- **Component Architecture**: Reusable UI components with TypeScript prop interfaces

###  Performance & Developer Experience
- **Server-Side Rendering**: Next.js App Router with React Server Components for optimal performance
- **Smart Caching**: HTTP caching strategies with 60-second revalidation for fresh data
- **Debounced Search**: 1-second delay prevents excessive API calls and improves UX
- **Turbopack Build**: Lightning-fast development and production builds
- **TypeScript Integration**: Full type safety with comprehensive interfaces and type definitions
- **Modular Architecture**: Context providers, constants extraction, and reusable components

##  Architecture Decisions

#### 1. Server-Side Pagination Strategy
**Why**: Better performance and user experience for large datasets
- ✅ **Memory Efficiency**: Only loads currently needed data (15 emails per page vs potentially thousands)
- ✅ **Network Optimization**: Reduces initial bundle size and API payload
- ✅ **Better UX**: Faster initial page loads, especially with large datasets
- ✅ **Scalability**: Handles datasets of any size without performance degradation
- ✅ **SEO-Friendly**: Each page can be indexed separately
- ✅ **Mobile Performance**: Critical for mobile devices with limited memory/bandwidth



#### 2. Authentication Strategy
**JWT tokens stored in HTTP-only cookies** for security:
- ✅ **XSS Protection**: Tokens inaccessible to JavaScript
- ✅ **CSRF Mitigation**: SameSite cookie policies
- ✅ **Automatic Management**: Cookies handled by browser

#### 3. Mobile-First Responsive Design
**Breakpoint strategy**: `<768px` mobile, `≥768px` desktop
- **Mobile**: Hamburger menu with slide-out drawer sidebar
- **Desktop**: Fixed sidebar with main content area
- **Component**: Conditional rendering based on screen size

#### 4. State Management Architecture
**Context-based approach** for global state with local component state:
- **Timeline Context**: Global timeline period state for marketing dashboard

## Tech Stack

### Core Framework
- **Next.js 15.5.4**: React framework with App Router, Turbopack, and Server Components
- **React 19.1.0**: Latest React 
- **TypeScript 5**: Full type safety 

### Data & State Management
- **Faker.js 10.0.0**: Realistic data generation for development and testing
- **Context API**: Global state management for timeline filtering and user preferences
- **Server Actions**: Type-safe server-side data fetching and mutations

### Styling & UI Components
- **Tailwind CSS 4**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible, unstyled UI primitives for complex interactions
- **Lucide React**: Beautiful, customizable SVG icons with consistent design
- **React Icons**: Additional icon library for some platform-specific branding

### Charts & Visualization
- **Recharts 3.2.1**: Responsive chart library built on D3.js for data visualization
- **Progress Components**: Custom progress bars and loading states with animations

### Development Tools
- **ESLint 9**: Code linting with Next.js optimized rules and custom configurations
- **PostCSS**: CSS processing with Tailwind integration and optimization

## �🚀 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **pnpm** (recommended) or npm for package management
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/hemarle/brutalism.git
cd brutalism

# Install dependencies with pnpm (recommended)
pnpm install

# Or with npm
npm install

# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```


### Development Workflow
1. **Start the development server**: `pnpm dev`
2. **Open your browser**: Navigate to `http://localhost:3000`
3. **Login credentials**: The credentials is autopopulated on the login form already
4. **Hot reloading**: Changes are reflected instantly with Turbopack

## 📁 Project Structure

```
brutalism/
├── app/                          # Next.js App Router (v13+)
│   ├── (root)/                   # Route groups for authenticated pages
│   │   ├── layout.tsx            # Responsive layout with sidebar
│   │   ├── page.tsx              # Dashboard home (redirects to marketing)
│   │   ├── marketing/page.tsx    # Marketing analytics dashboard
│   │   └── apps/email/page.tsx   # Email management interface
│   ├── login/page.tsx            # Authentication page
│   ├── not-found.tsx             # Custom 404 page 
│   ├── layout.tsx                # Root layout with providers
│   ├── globals.css               # Global styles and CSS variables
│   └── favicon.ico               # Application favicon
├── components/                   # Reusable UI components
│   ├── layout/                   # Layout-specific components
│   │   ├── MobileLayout.tsx      # Mobile hamburger menu
│   │   ├── sidebar.tsx           # Desktop sidebar navigation
│   │   ├── navbar.tsx            # Top navigation bar
│   │   └── sidebar/              # Sidebar sub-components
│   │       ├── logo.tsx          # Brand logo component
│   │       ├── navlinks.tsx      # Navigation links with accessibility
│   │       └── upgrade-to-pro-card.tsx # Upgrade prompts
│   ├── apps/email/               # Email-specific components
│   │   ├── email-list.tsx        # Paginated email list with filtering
│   │   ├── compose-email.tsx     # Email composition interface (not completed yet)
│   │   ├── options.tsx           # Email action buttons
│   │   ├── profile.tsx           # User profile in email context
│   │   ├── sidebar.tsx           # Email filters and categories
│   │   └── MobileEmailLayout.tsx # Mobile email navigation
│   ├── marketing/                # Marketing dashboard components
│   │   ├── stats-card.tsx        # Reusable statistics card
│   │   ├── statistics.tsx        # Stats data management
│   │   ├── timeline-tab.tsx      # Timeline filter controls
│   │   ├── traffic-source.tsx    # Traffic analytics visualization
│   │   ├── acquisition-cost.tsx  # Customer acquisition metrics
│   │   └── budget-platform.tsx   # Platform budget breakdown
│   ├── auth/                     # Authentication components
│   │   ├── LoginForm.tsx         # Login form with validation
│   │   └── UserDropdown.tsx      # User menu dropdown
│   └── ui/                       # Base UI components
│       ├── button.tsx            # Button variants with CVA
│       ├── card.tsx              # Card component with variants
│       └── progress.tsx          # Progress bar component
├── contexts/                     # React Context providers
│   └── TimelineContext.tsx       # Global timeline state management
├── lib/                          # Utility libraries and configurations
│   ├── constants/                # Application constants
│   │   └── navigation.ts         # Navigation paths and menu items
│   ├── data/                     # Data generation and management
│   │   └── marketing-data.ts     # Faker.js marketing data generation
│   ├── auth-utils.ts             # Authentication helper functions
│   └── utils.ts                  # General utility functions (cn, etc.)
├── actions/                      # Server Actions for data fetching
│   ├── auth.ts                   # Authentication server actions
│   └── apps/email/               # Email-specific server actions
│       └── get-email.ts          # Email fetching with pagination
├── hooks/                        # Custom React hooks
│   └── useDebounce.ts           # Debounced input hook for search
├── public/                       # Static assets
│   ├── assets/icons/             # Platform icons (Facebook, Google, etc.)
│   └── *.svg                     # Application icons and logos
├── middleware.ts                 # Next.js middleware for route protection
├── next.config.ts                # Next.js configuration with Turbopack
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
└── package.json                  # Dependencies and scripts
```

## 🔧 Key Features Deep Dive

### 📊 Timeline-Based Data Filtering
**Context-Driven Architecture**: Global timeline state management affects all dashboard components

```typescript
// Timeline Context Implementation
const TimelineContext = createContext<TimelineContextType>();

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
};

// Usage in components
const { period, setPeriod } = useTimeline();
const chartData = generateChartData(period); // Data updates based on timeline
```

### 🎯 Accessible Navigation System
**WCAG 2.1 AA Compliant**: Comprehensive accessibility with keyboard navigation and screen reader support

```typescript
// Navigation with full accessibility features
export const MENU_ITEMS: MenuItem[] = [
  { 
    icon: BarChart3, 
    label: "Marketing", 
    href: "/marketing",
    hasSubmenu: false
  },
  {
    icon: MessageSquare,
    label: "Content",
    href: "/content",
    hasSubmenu: true,
    submenuItems: [
      { id: "content-blog", label: "Blog Posts", href: "/content/blog" },
      // ... additional submenu items
    ],
  },
];
```

**Accessibility Features**:
- **ARIA Labels**: Screen reader descriptions for all interactive elements
- **Keyboard Navigation**: Full Tab, Enter, Space, and Arrow key support
- **Focus Management**: Visible focus indicators and logical tab order
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Color Contrast**: WCAG AA compliant color ratios (4.5:1 minimum)

### 🚀 Reusable Component Architecture
**Props-Based Design**: Components accept data through props for maximum reusability

```typescript
// StatsCard component with flexible props
interface StatsCardProps {
  title: string;
  value: string;
  previousValue: string;
  change: number;
  icon: React.ReactNode;
  id: string;
}

export default function StatsCard({ title, value, previousValue, change, icon, id }: StatsCardProps) {
  // Component renders based on props, making it reusable
}

### ⚡ Smart Data Generation
**Faker.js Integration**: Realistic data generation with period-based scaling

```typescript
```

## 🎯 Performance Optimizations

### 1. Debounced Search Implementation
**1000ms delay** prevents excessive API calls while maintaining responsiveness:

```typescript
// Custom debounce hook
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage in search components
const debouncedSearchTerm = useDebounce(searchTerm, 1000);
```

### 2. Optimized Mobile Strategy
**Conditional Component Rendering** instead of CSS-only responsive design:

```typescript
// Mobile-specific components for better performance
const MobileLayout = () => (
  <div className="block md:hidden">
    {/* Mobile-optimized drawer navigation */}
  </div>
);

const DesktopSidebar = () => (
  <div className="hidden md:flex">
    {/* Desktop sidebar with full features */}
  </div>
);
```

### 3. Smart Caching Strategy
**Server-side background caching** with automatic revalidation:

```typescript
// Server action with caching
export async function getEmails(filter: FilterOptions) {
  const response = await fetch(apiUrl, {
    cache: 'force-cache',
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  
  return response.json();
}
```

## ⚖️ Technical Decisions & Tradeoffs

### 1. Server-Side vs Client-Side Rendering
**Chosen**: Hybrid approach with React Server Components and selective client-side interactivity
- ✅ **SEO Benefits**: Server-rendered content for better search engine indexing
- ✅ **Performance**: Faster initial page loads with selective hydration
- ✅ **Caching**: Server-side HTTP caching reduces API calls
- ❌ **Complexity**: Managing server/client boundary requires careful state management
- ❌ **Learning Curve**: New paradigms require developer education

### 2. Authentication Architecture
**Chosen**: JWT tokens in HTTP-only cookies vs localStorage
- ✅ **Security**: Protection against XSS attacks with HTTP-only cookies
- ✅ **Automatic Handling**: Browser manages cookie lifecycle automatically
- ✅ **CSRF Protection**: SameSite cookie policies prevent cross-site attacks
- ❌ **Limited Access**: Client-side JavaScript cannot read tokens for debugging
- ❌ **Complexity**: Requires careful middleware setup for protected routes

### 3. State Management Strategy
**Chosen**: React Context + Local State vs External Libraries (Redux, Zustand)
- ✅ **Simplicity**: No additional dependencies or learning curve
- ✅ **Performance**: Fine-grained control over re-renders with context
- ✅ **Bundle Size**: Zero additional JavaScript overhead
- ❌ **Scalability**: May become unwieldy with complex cross-component state
- ❌ **DevTools**: Limited debugging compared to Redux DevTools

### 4. Mobile Strategy
**Chosen**: Separate Mobile Components vs CSS-Only Responsive Design
- ✅ **Performance**: No unnecessary DOM elements rendered on mobile
- ✅ **UX**: Native mobile patterns (drawers, touch gestures, hamburger menus)
- ✅ **Maintainability**: Clear separation between mobile and desktop logic
- ❌ **Code Duplication**: Similar functionality implemented twice
- ❌ **Maintenance Overhead**: Two component sets to maintain and test


### 5. Data Generation Strategy
**Chosen**: Faker.js for Development vs Real API Integration
- ✅ **Development Speed**: Immediate realistic data without backend dependencies
- ✅ **Testing**: Consistent, predictable data for automated testing
- ✅ **Prototyping**: Quick iteration on UI components with varied data
- ✅ **Offline Development**: Full functionality without internet connection
- ❌ **Production Transition**: Additional work to integrate real APIs
- ❌ **Data Accuracy**: Generated data may not reflect real-world patterns


### Bundle Optimization Strategies
```typescript
// Tree shaking with selective imports
import { BarChart3, Users } from "lucide-react"; // Instead of entire library

// Dynamic imports for large components
const ChartComponent = lazy(() => import('./ChartComponent'));

// Next.js automatic code splitting
export default function Page() {
  return <div>Automatically split by route</div>;
}
```

### Caching Implementation
```typescript
// Server-side HTTP caching
const response = await fetch(apiUrl, {
  cache: 'force-cache',
  next: { 
    revalidate: 60,  // Revalidate every 60 seconds
    tags: ['marketing-data'] // Cache invalidation tags
  }
});

// Client-side memory optimization
const MemoizedStatsCard = memo(StatsCard, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value && prevProps.change === nextProps.change;
});
```



##  Tasks remaining
1. Setup Unit & Integration test



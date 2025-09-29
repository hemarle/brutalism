# Habari - Marketing Dashboard & Email Management Platform

A modern, full-stack marketing dashboard and email management system built with Next.js 15, featuring JWT authentication, server-side pagination, mobile-responsive design, and performance-optimized components.

## 🚀 Features

- **📊 Marketing Dashboard**: Real-time metrics, charts, and KPI tracking
- **🔐 JWT Authentication**: Secure login with HTTP-only cookies
- **📧 Email Management**: Server-side paginated email list with search functionality
- **📱 Mobile-First Design**: Responsive layouts with hamburger menu and drawer navigation
- **⚡ Performance Optimized**: Debounced search, optimized re-renders, and efficient state management
- **🎨 Modern UI**: Tailwind CSS with Lucide icons and custom components

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0 with latest features
- **TypeScript**: Full type safety
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React & React Icons
- **Charts**: Recharts for data visualization
- **Build Tool**: Turbopack (--turbopack flag)

### Key Architectural Decisions

#### 1. Server-Side Pagination vs Client-Side
**Decision**: Server-side pagination implemented in email management
**Why this is better**:
- ✅ **Memory Efficiency**: Only loads currently needed data (15 emails per page vs potentially thousands)
- ✅ **Network Optimization**: Reduces initial bundle size and API payload
- ✅ **Better UX**: Faster initial page loads, especially with large datasets
- ✅ **Scalability**: Handles datasets of any size without performance degradation
- ✅ **SEO-Friendly**: Each page can be indexed separately
- ✅ **Mobile Performance**: Critical for mobile devices with limited memory/bandwidth

**Implementation**: 
```typescript
// Server action with pagination parameters
export async function getEmails(filter: FilterOptions): Promise<EmailApiResponse> {
  const { page = 1, limit = 15, view, label, search } = filter;
  // API call with pagination params
}
```

#### 2. Authentication Strategy
**JWT tokens stored in HTTP-only cookies** for security:
- ✅ **XSS Protection**: Tokens inaccessible to JavaScript
- ✅ **CSRF Mitigation**: SameSite cookie policies
- ✅ **Automatic Management**: Cookies handled by browser
- 🔒 **24-hour expiry** for security balance

#### 3. Mobile-First Responsive Design
**Breakpoint strategy**: `<768px` mobile, `≥768px` desktop
- **Mobile**: Hamburger menu with slide-out drawer sidebar
- **Desktop**: Fixed sidebar with main content area
- **Component**: Conditional rendering based on screen size

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd habari

# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm run dev

# Build for production
pnpm run build

# Start production server
npm start
```

### Environment Setup
The application connects to:
- **Auth API**: `http://email-list-api-3.onrender.com/api/auth/login`
- **Email API**: `http://email-list-api-3.onrender.com/api/emails`

## 📁 Project Structure

```
habari/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Authenticated routes group
│   │   ├── layout.tsx            # Responsive layout wrapper
│   │   ├── marketing/page.tsx    # Marketing dashboard
│   │   └── apps/email/page.tsx   # Email management
│   ├── (dashboard)/page.tsx      # Home redirect logic
│   ├── login/page.tsx            # Authentication page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── layout/
│   │   ├── MobileLayout.tsx      # Mobile hamburger menu
│   │   ├── sidebar.tsx           # Desktop sidebar
│   │   └── navbar.tsx            # Top navigation
│   ├── apps/email/
│   │   ├── email-list.tsx        # Paginated email list
│   │   ├── MobileEmailLayout.tsx # Mobile email navigation
│   │   └── sidebar.tsx           # Email filters/options
│   ├── marketing/                # Dashboard components
│   ├── auth/                     # Authentication forms
│   └── ui/                       # Reusable UI components
├── actions/                      # Server Actions
│   ├── auth.ts                   # Authentication logic
│   └── apps/email/get-email.ts   # Email data fetching
├── hooks/
│   └── useDebounce.ts           # Custom debounce hook
├── lib/
│   ├── auth-utils.ts            # Authentication utilities
│   └── utils.ts                 # General utilities
└── middleware.ts                # Route protection
```

## 🎯 Performance Optimizations

### 1. React Re-render Prevention
**Problem**: Email component was re-rendering 8 times, calling API unnecessarily
**Solutions**:
```typescript
// Function-based state initialization
const [filter, setFilter] = useState(() => ({
  page: 1, limit: 15, view: 'inbox', label: '', search: ''
}));

// Conditional state updates to prevent unnecessary re-renders
setFilter(prev => {
  if (prev.search === debouncedSearchTerm) return prev;
  return { ...prev, search: debouncedSearchTerm };
});

// Stable dependencies with destructuring
const { page, limit, view, label, search } = filter;
useEffect(() => { /* fetch data */ }, [page, limit, view, label, search]);
```

### 2. Debounced Search
**Implementation**: 1000ms delay prevents excessive API calls
```typescript
const debouncedSearchTerm = useDebounce(searchTerm, 1000);
```

### 3. Optimized Mobile Layouts
- **Conditional rendering** instead of CSS-only responsive design
- **Separate mobile components** for better performance
- **Drawer patterns** for mobile navigation

## ⚖️ Tradeoffs & Design Decisions

### 1. Server-Side vs Client-Side Rendering
**Chosen**: Hybrid approach with server components and client interactivity
- ✅ **SEO benefits** from server rendering
- ✅ **Performance** with selective hydration
- ❌ **Complexity** in state management across server/client boundary

### 2. Authentication Architecture
**Chosen**: JWT in HTTP-only cookies vs localStorage
- ✅ **Security** against XSS attacks
- ✅ **Automatic handling** by browser
- ❌ **Limited client-side access** to token data

### 3. Mobile Strategy
**Chosen**: Separate mobile components vs CSS-only responsive
- ✅ **Performance** - no unnecessary DOM elements on mobile
- ✅ **UX** - native mobile patterns (drawers, hamburger menu)
- ❌ **Code duplication** between mobile/desktop components
- ❌ **Maintenance overhead** for two component sets

### 4. State Management
**Chosen**: React useState vs external state management (Redux, Zustand)
- ✅ **Simplicity** for current scope
- ✅ **Performance** with local component state
- ✅ **Bundle size** - no additional dependencies
- ❌ **Scalability** concerns for complex state sharing

### 5. TypeScript Integration
**Chosen**: Full TypeScript adoption
- ✅ **Developer experience** with autocompletion and error catching
- ✅ **Code quality** with compile-time type checking
- ✅ **Refactoring safety** with IDE support
- ❌ **Build complexity** and learning curve

## 🔧 Key Assumptions

1. **User Base**: Primarily mobile-first users requiring responsive design
2. **Data Volume**: Email lists can be large (thousands of emails), justifying server-side pagination
3. **Security Requirements**: Enterprise-level security needed for authentication
4. **Performance Priority**: Fast initial load times prioritized over rich client-side features
5. **Browser Support**: Modern browsers with ES6+ support
6. **Network Conditions**: Variable network speeds requiring optimized API calls
7. **Device Constraints**: Mobile devices with limited memory/processing power

## 🚦 Performance Considerations

### Bundle Size Optimizations
- **Tree shaking** enabled with ES modules
- **Selective imports** from large libraries (e.g., `lucide-react`)
- **Code splitting** with Next.js automatic chunking

### Runtime Optimizations
- **Debounced search** prevents API spam
- **Memoized components** prevent unnecessary re-renders  
- **Efficient pagination** reduces memory usage
- **Optimized images** with Next.js Image component

### Network Optimizations
- **Server-side caching** with `cache: 'force-cache'` and revalidates every 60 seconds 
- **Authenticated fetch wrapper** for consistent API calls
- **Error boundaries** for graceful failure handling

## 📱 Mobile Responsive Features

### Breakpoint Strategy
```css
/* Mobile-first approach */
.block.md:hidden  /* Mobile only */
.hidden.md:flex   /* Desktop only */
```

### Mobile-Specific Components
- **MobileLayout**: Hamburger menu with slide-out sidebar
- **MobileEmailLayout**: Email-specific mobile navigation
- **Touch-optimized**: Button sizes and spacing for mobile interaction

## 🔐 Security Features

- **HTTP-only cookies** for token storage
- **SameSite cookie policies** for CSRF protection
- **Route protection middleware** for authentication
- **Server-side validation** for all user inputs
- **Secure headers** in Next.js configuration

## 🚀 Future Enhancements

1. **Email Composition**: Rich text editor for creating emails
2. **Real-time Updates**: WebSocket integration for live notifications
3. **Advanced Filtering**: Date ranges, attachment types, sender filters
4. **Email Threading**: Conversation view for related emails
5. **Offline Support**: Service worker for offline email reading
6. **Push Notifications**: Real-time email alerts
7. **Bulk Operations**: Select multiple emails for batch actions
8. **Email Templates**: Pre-built templates for common responses

## 📊 Analytics & Monitoring

The marketing dashboard includes:
- **Traffic Sources**: Google, Facebook, Email, Referral tracking
- **Budget Allocation**: Platform-wise spending visualization
- **Acquisition Costs**: Customer acquisition metrics
- **Revenue Tracking**: Performance indicators and trends

Built with ❤️ using Next.js 15 and modern web technologies.

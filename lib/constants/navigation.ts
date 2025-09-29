import {
  BarChart3,
  TrendingUp,
  Building2,
  FolderOpen,
  Users,
  Smartphone,
  Globe,
  FileText,
  MessageSquare,
  User,
  Clapperboard,
  LucideIcon,
} from "lucide-react"

// Navigation path constants
export const PATHS = {
  MARKETING: "/marketing",
  ANALYTICS: "/analytics",
  BUSINESS: "/business",
  PROJECT: "/project",
  HRM: "/hrm",
  MOBILE_APP: "/mobile-app",
  LANDING_PAGE: "/landing-page",
  CONTENT: {
    ROOT: "/content",
    BLOG: "/content/blog",
    LANDING_PAGES: "/content/landing-pages",
    EMAIL_TEMPLATES: "/content/email-templates",
    SOCIAL_POSTS: "/content/social-posts",
    MEDIA: "/content/media",
    SEO: "/content/seo",
  },
  USERS: {
    ROOT: "/users",
    ALL: "/users/all",
    ADMINISTRATORS: "/users/administrators",
    MODERATORS: "/users/moderators",
    SUBSCRIBERS: "/users/subscribers",
    GROUPS: "/users/groups",
    PERMISSIONS: "/users/permissions",
  },
  APPS: {
    ROOT: "/apps",
    EMAIL: "/apps/email",
    PERMISSIONS: "/apps/permissions",
  },
  DOCUMENTATION: "/documentation",
} as const

// Types for better TypeScript support
export interface SubMenuItem {
  id: string
  label: string
  href: string
}

export interface MenuItem {
  icon: LucideIcon
  label: string
  href: string
  active?: boolean
  hasSubmenu?: boolean
  submenuItems?: SubMenuItem[]
}

// Menu items configuration
export const MENU_ITEMS: MenuItem[] = [
  { 
    icon: BarChart3, 
    label: "Marketing", 
    active: true, 
    href: PATHS.MARKETING 
  },
  { 
    icon: TrendingUp, 
    label: "Analytics", 
    href: PATHS.ANALYTICS 
  },
  { 
    icon: Building2, 
    label: "Business", 
    href: PATHS.BUSINESS 
  },
  { 
    icon: FolderOpen, 
    label: "Project", 
    href: PATHS.PROJECT 
  },
  { 
    icon: Users, 
    label: "HRM", 
    href: PATHS.HRM 
  },
  { 
    icon: Smartphone, 
    label: "Mobile App", 
    href: PATHS.MOBILE_APP 
  },
  { 
    icon: Globe, 
    label: "Landing page", 
    href: PATHS.LANDING_PAGE 
  },
  {
    icon: MessageSquare,
    label: "Content",
    href: PATHS.CONTENT.ROOT,
    hasSubmenu: true,
    submenuItems: [
      { id: "content-blog", label: "Blog Posts", href: PATHS.CONTENT.BLOG },
      { id: "content-landing", label: "Landing Pages", href: PATHS.CONTENT.LANDING_PAGES },
      { id: "content-email", label: "Email Templates", href: PATHS.CONTENT.EMAIL_TEMPLATES },
      { id: "content-social", label: "Social Posts", href: PATHS.CONTENT.SOCIAL_POSTS },
      { id: "content-media", label: "Media Library", href: PATHS.CONTENT.MEDIA },
      { id: "content-seo", label: "SEO Tools", href: PATHS.CONTENT.SEO },
    ],
  },
  {
    icon: User,
    label: "Users",
    hasSubmenu: true,
    href: PATHS.USERS.ROOT,
    submenuItems: [
      { id: "users-all", label: "All Users", href: PATHS.USERS.ALL },
      { id: "users-admin", label: "Administrators", href: PATHS.USERS.ADMINISTRATORS },
      { id: "users-moderators", label: "Moderators", href: PATHS.USERS.MODERATORS },
      { id: "users-subscribers", label: "Subscribers", href: PATHS.USERS.SUBSCRIBERS },
      { id: "users-groups", label: "User Groups", href: PATHS.USERS.GROUPS },
      { id: "users-permissions", label: "Permissions", href: PATHS.USERS.PERMISSIONS },
    ],
  },
  {
    icon: Clapperboard,
    label: "Apps",
    hasSubmenu: true,
    href: PATHS.APPS.ROOT,
    submenuItems: [
      { id: "apps-all", label: "Email", href: PATHS.APPS.EMAIL },
      { id: "apps-permissions", label: "Permissions", href: PATHS.APPS.PERMISSIONS },
    ],
  },
  { 
    icon: FileText, 
    label: "Documentation", 
    href: PATHS.DOCUMENTATION 
  },
]

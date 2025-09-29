// "use server";

import { authenticatedFetch } from '@/lib/auth-utils';

// Email attachment interface
export interface EmailAttachment {
  id: string;
  email_id: string;
  filename: string;
  size: number;
  type: string;
  url: string;
  created_at: string;
}

// Email interface
export interface Email {
  id: string;
  userId: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
  hasAttachments: boolean;
  attachments: EmailAttachment[];
  labels: string[];
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

// Pagination interface
export interface EmailPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// API Response interface
export interface EmailApiResponse {
  success: boolean;
  data: Email[];
  pagination: EmailPagination;
}

export type ViewFilter = 'inbox' | 'sent' | 'drafts' | 'spam';

export interface FilterOptions {
  page?: number;
  limit?: number;
  view?: ViewFilter;
  label?: string; // e.g., 'work', 'personal', etc.
  search?: string;
}
// Server action to fetch emails
export async function getEmails(filter: FilterOptions): Promise<EmailApiResponse> {
  const { page = 1, limit = 15, view, label, search } = filter;
  try {
    let url = `https://email-list-api-3.onrender.com/api/emails?page=${page}&limit=${limit}`;
    if (view) url += `&view=${view}`;
    if (label) url += `&labels=${label}`;
    if (search) url += `&search=${encodeURIComponent(search)}`;


    const response = await authenticatedFetch(url, {
      method: 'GET',
      cache: 'force-cache',
     next: { revalidate: 60 }
    });

    if (!response.ok) {
        console.log('Response not ok:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: EmailApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching emails:', error);
    // Return empty response structure in case of error
    return {
      success: false,
      data: [],
      pagination: {
        page: 1,
        limit: 15,
        total: 0,
        totalPages: 0,
      },
    };
  }
}


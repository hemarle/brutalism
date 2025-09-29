import { getAuthToken } from '@/actions/auth';

// Utility function to make authenticated API calls
export async function authenticatedFetch(url: string, options: RequestInit = {}) {
  const token = await getAuthToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

// Type for API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
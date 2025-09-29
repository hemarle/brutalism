"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Auth interfaces
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
  };
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

// Auth state interface
export interface AuthState {
  error: string;
  success: boolean;
}

// Login server action
export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return {
      error: 'Email and password are required',
      success: false
    };
  }

  try {
    const response = await fetch('http://email-list-api-3.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData.message || 'Login failed',
        success: false
      };
    }

    const data: LoginResponse = await response.json();

    if (data.success && data.data.token) {
      // Store token in HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set('auth-token', data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      // Store user data in a separate cookie (not HTTP-only so we can access it client-side if needed)
      cookieStore.set('user-data', JSON.stringify(data.data.user), {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      // Redirect to dashboard
      redirect('/marketing');
    }

    return {
      error: 'Login failed',
      success: false
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      error: 'Network error. Please try again.',
      success: false
    };
  }
}

// Logout server action
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
  cookieStore.delete('user-data');
  redirect('/login');
}

// Get current user
export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user-data');
    
    if (!userCookie?.value) {
      return null;
    }

    return JSON.parse(userCookie.value) as User;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Get auth token for API calls
export async function getAuthToken(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get('auth-token');
    return tokenCookie?.value || null;
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  return !!token;
}
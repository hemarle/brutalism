'use client';

import { useActionState } from 'react';
import { loginAction } from '@/actions/auth';

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    error: '',
    success: false
  });

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue="sarah.johnson@techcorp.com"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            defaultValue="SecurePass123!"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {state?.error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{state.error}</div>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Signing in...' : 'Sign in'}
        </button>
      </div>

      <div className="text-sm text-center text-gray-600">
        <p>Demo credentials:</p>
        <p>Email: sarah.johnson@techcorp.com</p>
        <p>Password: SecurePass123!</p>
      </div>
    </form>
  );
}
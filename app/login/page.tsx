import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/actions/auth';
import LoginForm from '@/components/auth/LoginForm';

export default async function LoginPage() {
  // Redirect if already authenticated
  const authenticated = await isAuthenticated();
  if (authenticated) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center" role="img" aria-label="Brutalism logo">
            <span className="text-white font-bold text-xl">B</span>
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Brutalism
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your marketing dashboard
        </p>
      </div>

      <main className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
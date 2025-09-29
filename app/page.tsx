
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/actions/auth';
// import Dashboard from '@/components/Dashboard';

export default async function Home() {
  // Check if user is authenticated
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect('/login');
  }

  return redirect('/marketing');
}

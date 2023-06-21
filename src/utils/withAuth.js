import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();

    // Check authentication status
    const session = getSession();
    if (session) {
      router.push('/dashboard');
      return null;
    }

    // Render the wrapped component if not authenticated
    return <WrappedComponent {...props} />;
  };
}

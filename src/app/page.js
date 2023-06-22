import BlogsPage from './dashboard/blogs/page';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/api/auth/login');

  return (
    <>
      <BlogsPage />
    </>
  );
};

export default Home;

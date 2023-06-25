import { redirect } from 'next/navigation';

const Home = async () => {
  redirect('/dashboard');

  return <></>;
};

export default Home;

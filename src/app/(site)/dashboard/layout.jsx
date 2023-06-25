import DashboardHeader from '@/components/DashboardHeader';

export const metadata = {
  title: 'Dashboard',
  description: 'IT Insights blogs',
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <DashboardHeader />

      <div className='pt-16'>{children}</div>
    </section>
  );
}

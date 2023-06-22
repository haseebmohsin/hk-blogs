import Header from '@/components/Header';

export const metadata = {
  title: 'Dashboard',
  description: 'IT Insights blogs',
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Header />

      {children}
    </section>
  );
}

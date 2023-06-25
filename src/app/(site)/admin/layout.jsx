import AdminHeader from '@/components/AdminHeader';

export const metadata = {
  title: 'Admin Panel',
  description: 'IT Insights blogs Admin Panel',
};

export default async function AdminLayout({ children }) {
  return (
    <section>
      <AdminHeader />

      {children}
    </section>
  );
}

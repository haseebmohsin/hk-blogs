import Header from '@/components/Header';

export const metadata = {
  title: 'Authentication',
  description: 'IT Insights',
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <section>{children}</section>;
}

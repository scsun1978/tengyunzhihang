import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { CompanyIntro } from './components/CompanyIntro';
import { Timeline } from './components/Timeline';

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader 
        title="关于我们"
        description="了解腾云智航的发展历程"
        image="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&q=80"
      />
      <CompanyIntro />
      <Timeline />
    </Layout>
  );
}
import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export default function ContactPage() {
  return (
    <Layout>
      <PageHeader 
        title="联系我们"
        description="期待与您沟通交流"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ContactInfo />
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}
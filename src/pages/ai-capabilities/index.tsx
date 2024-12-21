import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { AICapabilityCard } from './components/AICapabilityCard';
import { capabilities } from './data/capabilities';

export default function AICapabilitiesPage() {
  return (
    <Layout>
      <PageHeader 
        title="AI 技术能力"
        description="驱动智慧机场的核心技术引擎"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {capabilities.map((capability, index) => (
            <AICapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { SolutionDetail } from './components/SolutionDetail';
import { solutions } from './data/solutions';

export default function SolutionsPage() {
  return (
    <Layout>
      <PageHeader 
        title="行业解决方案"
        description="专注交通行业，提供全方位智能化解决方案"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
      />
      
      <div className="bg-gray-50">
        {solutions.map((solution) => (
          <SolutionDetail key={solution.id} solution={solution} />
        ))}
      </div>
    </Layout>
  );
}
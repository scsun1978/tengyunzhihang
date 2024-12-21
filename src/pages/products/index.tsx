import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProductLineSection } from './components/ProductLineSection';
import { products, productLines } from './data/products';

export default function ProductsPage() {
  return (
    <Layout>
      <PageHeader
        title="产品服务"
        description="专业的航空信息化产品体系"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      />

      <div className="bg-gray-50">
        {productLines.map((productLine) => (
          <ProductLineSection
            key={productLine.id}
            productLine={productLine}
            products={products}
          />
        ))}
      </div>
    </Layout>
  );
}
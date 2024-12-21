import { Layout } from '@/components/layout';
import { Hero, Solutions, Products, AISolution } from '@/components/sections';
import { Stats } from '@/components/sections/home/Stats';
import { CaseStudies } from '@/components/sections/home/CaseStudies';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Solutions />
      <Products />
      <CaseStudies />
      <AISolution />
    </Layout>
  );
}
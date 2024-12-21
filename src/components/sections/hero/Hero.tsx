import { Suspense } from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroBackground />
      </Suspense>
      <HeroContent />
    </div>
  );
}
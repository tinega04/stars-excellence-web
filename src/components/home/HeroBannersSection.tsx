
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHeroBanners } from '@/services/supabase/fetchHeroBanners';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HeroBannersSection: React.FC = () => {
  const { data: heroBanners, isLoading, error } = useQuery({
    queryKey: ['hero-banners'],
    queryFn: fetchHeroBanners,
  });

  if (error) {
    console.error('Error loading hero banners:', error);
    return null;
  }

  if (isLoading) {
    return (
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-white/20 rounded mb-4"></div>
            <div className="h-6 bg-white/20 rounded mb-8"></div>
            <div className="h-12 w-32 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!heroBanners || heroBanners.length === 0) {
    return (
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our Educational Portal
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empowering students, teachers, and parents with comprehensive educational tools and resources.
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </div>
    );
  }

  const primaryBanner = heroBanners[0];

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            {primaryBanner.title || 'Welcome to Our Educational Portal'}
          </h1>
          {primaryBanner.subtitle && (
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {primaryBanner.subtitle}
            </p>
          )}
          {primaryBanner.cta_text && (
            <Button size="lg" variant="secondary">
              {primaryBanner.cta_text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBannersSection;

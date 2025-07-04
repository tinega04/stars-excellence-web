
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchHeroBanners } from '@/services/supabase/fetchHeroBanners';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBannersSection = () => {
  const { data: banners, isLoading, error } = useQuery({
    queryKey: ['hero-banners'],
    queryFn: fetchHeroBanners,
  });

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Hero banners are temporarily unavailable. Please check back soon.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  if (!banners || banners.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our School</h1>
          <p className="text-xl mb-8">Nurturing excellence in education since 1985</p>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
      {banners.map((banner, index) => (
        <div key={banner.id} className="relative w-full h-full">
          {banner.image_url && (
            <OptimizedImage
              src={banner.image_url}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
              {banner.subtitle && (
                <p className="text-xl md:text-2xl mb-8">{banner.subtitle}</p>
              )}
              {banner.cta_text && banner.cta_link && (
                <Button size="lg" asChild>
                  <a href={banner.cta_link}>{banner.cta_text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBannersSection;

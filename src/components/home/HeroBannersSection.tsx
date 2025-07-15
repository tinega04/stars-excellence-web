
import React, { useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchHeroBanners } from '@/services/supabase/fetchHeroBanners';
import { LoadingState } from '@/components/ui/LoadingState';
import { EmptyState } from '@/components/ui/EmptyState';

const HeroBannersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    autoplay: true,
    autoplayDelay: 5000
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { data: banners, isLoading, error } = useQuery({
    queryKey: ['hero-banners'],
    queryFn: fetchHeroBanners,
  });

  if (isLoading) {
    return <LoadingState message="Loading hero banners..." />;
  }

  if (error) {
    console.error('Error loading hero banners:', error);
    return null;
  }

  if (!banners || banners.length === 0) {
    return <EmptyState message="No hero banners available" />;
  }

  return (
    <section className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {banners.map((banner, index) => (
            <div key={banner.id} className="embla__slide flex-[0_0_100%] min-w-0">
              <Card className="border-0 rounded-none">
                <CardContent className="p-0">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    {banner.image_url && (
                      <img
                        src={banner.image_url}
                        alt={banner.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                          {banner.title}
                        </h1>
                        {banner.subtitle && (
                          <p className="text-xl md:text-2xl mb-8 opacity-90">
                            {banner.subtitle}
                          </p>
                        )}
                        {banner.cta_text && banner.cta_link && (
                          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            {banner.cta_text}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {banners.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </section>
  );
};

export default HeroBannersSection;

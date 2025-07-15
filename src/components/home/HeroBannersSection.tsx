
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchHeroBanners, type HeroBanner } from '@/services/supabase/fetchHeroBanners';
import Autoplay from 'embla-carousel-autoplay';
import LoadingState from '@/components/ui/LoadingState';
import EmptyState from '@/components/ui/EmptyState';

const HeroBannersSection = () => {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
  });

  useEffect(() => {
    const loadBanners = async () => {
      try {
        setLoading(true);
        const data = await fetchHeroBanners();
        setBanners(data);
      } catch (err) {
        console.error('Error loading hero banners:', err);
        setError('Failed to load banners');
      } finally {
        setLoading(false);
      }
    };

    loadBanners();
  }, []);

  if (loading) {
    return <LoadingState message="Loading banners..." />;
  }

  if (error || banners.length === 0) {
    return <EmptyState message="No banners available" />;
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100">
      <Carousel
        className="w-full"
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative min-h-[400px] md:min-h-[500px] flex items-center">
                {banner.image_url && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner.image_url})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                )}
                
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl text-center mx-auto text-white">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                      {banner.title}
                    </h1>
                    
                    {banner.subtitle && (
                      <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                        {banner.subtitle}
                      </p>
                    )}
                    
                    {banner.cta_text && banner.cta_link && (
                      <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <a href={banner.cta_link}>
                          {banner.cta_text}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroBannersSection;

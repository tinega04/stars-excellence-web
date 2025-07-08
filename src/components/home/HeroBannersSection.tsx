
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { fetchHeroBanners, type HeroBanner } from '@/services/supabase/fetchHeroBanners';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroBannersSection = () => {
  const [heroBanners, setHeroBanners] = useState<HeroBanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback hero slides for when there's no data
  const fallbackSlides = [
    {
      title: "Nurturing Excellence From The Start",
      subtitle: "",
      description: "Empowering young minds through holistic education tailored for tomorrow's leaders.",
      primaryCTA: { text: "Explore Our Programs", link: "/academics" },
      backgroundImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Clean classroom environment for student learning"
    },
    {
      title: "A Foundation for Lifelong Success",
      subtitle: "",
      description: "We prepare learners to think critically, act ethically, and grow confidently.",
      primaryCTA: { text: "Learn More", link: "/about" },
      backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Students engaged in academic activities"
    },
    {
      title: "Tech Meets Tradition",
      subtitle: "",
      description: "We blend modern skills like coding and debate with strong academic values.",
      primaryCTA: { text: "See Our Vision", link: "/about" },
      backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Children using laptops and learning together with technology"
    }
  ];

  useEffect(() => {
    const loadHeroBanners = async () => {
      try {
        setLoading(true);
        const data = await fetchHeroBanners();
        setHeroBanners(data);
      } catch (err) {
        setError('Failed to load hero banners');
        console.error('Hero banners error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHeroBanners();
  }, []);

  if (loading) {
    return (
      <section className="relative h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto" />
            <Skeleton className="h-10 w-32 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  // Use hero banners from database if available, otherwise use fallback
  const slidesToRender = heroBanners.length > 0 ? heroBanners : fallbackSlides;

  return (
    <section className="relative" aria-label="Hero carousel">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slidesToRender.map((slide, index) => (
            <CarouselItem key={index}>
              <article className="relative h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <OptimizedImage 
                    src={heroBanners.length > 0 ? (slide as HeroBanner).image_url || fallbackSlides[0].backgroundImage : (slide as any).backgroundImage}
                    alt={heroBanners.length > 0 ? (slide as HeroBanner).title : (slide as any).alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    width={1600}
                    height={900}
                  />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 mb-4 max-w-4xl leading-tight">
                    {heroBanners.length > 0 ? (slide as HeroBanner).title : (slide as any).title}
                  </h1>
                  {heroBanners.length > 0 && (slide as HeroBanner).subtitle && (
                    <h2 className="text-xl md:text-2xl text-blue-700 mb-4 max-w-3xl">
                      {(slide as HeroBanner).subtitle}
                    </h2>
                  )}
                  <p className="text-gray-700 mb-8 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
                    {heroBanners.length > 0 ? 
                      `Learn more about ${(slide as HeroBanner).title}` : 
                      (slide as any).description
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                      <Link 
                        to={heroBanners.length > 0 ? 
                          (slide as HeroBanner).cta_link || "/about" : 
                          (slide as any).primaryCTA.link
                        }
                        aria-label={`${heroBanners.length > 0 ? 
                          (slide as HeroBanner).cta_text || "Learn More" : 
                          (slide as any).primaryCTA.text
                        } - Learn more about our programs`}
                      >
                        {heroBanners.length > 0 ? 
                          (slide as HeroBanner).cta_text || "Learn More" : 
                          (slide as any).primaryCTA.text
                        }
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8" aria-label="Previous slide" />
        <CarouselNext className="right-4 md:right-8" aria-label="Next slide" />
      </Carousel>
    </section>
  );
};

export default HeroBannersSection;

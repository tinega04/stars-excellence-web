
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { fetchTestimonials, type Testimonial } from '@/services/supabase/fetchTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        setTestimonials(data.slice(0, 3)); // Show only latest 3
      } catch (err) {
        setError('Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6">
                <Skeleton className="h-16 w-16 rounded-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2 mb-4" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-8">
            What Our Community Says
          </h2>
          <p className="text-gray-600">No testimonials available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
          What Our Community Says
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-blue-50 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-4">
                {testimonial.photo_url ? (
                  <img 
                    src={testimonial.photo_url} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-blue-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.message}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

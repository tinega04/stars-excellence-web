
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { fetchTestimonials, type Testimonial } from '@/services/supabase/fetchTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const TestimonialsGrid = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-8 text-center">
          Community Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-6">
              <Skeleton className="h-16 w-16 rounded-full mb-4" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-1/2 mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-8 text-center">
        Community Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
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
    </section>
  );
};

export default TestimonialsGrid;

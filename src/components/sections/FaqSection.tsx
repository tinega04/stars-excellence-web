
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { fetchFaqs, type FAQ } from '@/services/supabase/fetchFaqs';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const FaqSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFaqs();
        setFaqs(data);
      } catch (err) {
        setError('Failed to load FAQs');
        console.error('Error loading FAQs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadFaqs();
  }, []);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)))];
  
  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our school, programs, and admissions process.
          </p>
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500">No FAQs available.</p>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md border overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.has(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.has(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 whitespace-pre-wrap">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

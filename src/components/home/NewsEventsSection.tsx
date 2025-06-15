
import { useState, useEffect } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { fetchNewsUpdates, type NewsUpdate } from '@/services/supabase/fetchNewsUpdates';
import { fetchAnnouncements, type Announcement } from '@/services/supabase/fetchAnnouncements';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsEventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
  type: 'news' | 'announcement';
}

const NewsEventsSection = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback news/events for when there's no data
  const fallbackNewsEvents: NewsEventItem[] = [
    {
      id: 'fallback-1',
      title: "Annual Sports Day 2025",
      date: "June 15, 2025",
      description: "Join us for our annual sports day celebration featuring competitions, performances, and fun activities for all grade levels.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Students participating in annual sports day activities",
      type: 'announcement'
    },
    {
      id: 'fallback-2',
      title: "CBC Parent Workshop",
      date: "June 8, 2025",
      description: "Parents are invited to learn about CBC implementation and discover effective strategies to support their children's learning journey at home.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Parents attending educational workshop about CBC curriculum",
      type: 'announcement'
    },
    {
      id: 'fallback-3',
      title: "New Science Lab Opening",
      date: "May 28, 2025",
      description: "We're excited to unveil our new state-of-the-art science laboratory at our Nairobi campus, enhancing hands-on learning experiences.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Modern science laboratory with advanced equipment for student experiments",
      type: 'news'
    }
  ];

  useEffect(() => {
    const loadNewsAndEvents = async () => {
      try {
        setLoading(true);
        
        // Fetch both news updates and announcements concurrently
        const [newsData, announcementsData] = await Promise.allSettled([
          fetchNewsUpdates(3),
          fetchAnnouncements(3)
        ]);

        const combinedData: NewsEventItem[] = [];

        // Process news updates
        if (newsData.status === 'fulfilled' && newsData.value) {
          const newsItems: NewsEventItem[] = newsData.value.map((news: NewsUpdate) => ({
            id: news.id,
            title: news.title,
            description: news.body.length > 150 ? `${news.body.substring(0, 150)}...` : news.body,
            date: new Date(news.created_at).toLocaleDateString(),
            image: news.image_url || "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80",
            alt: `News: ${news.title}`,
            type: 'news' as const
          }));
          combinedData.push(...newsItems);
        }

        // Process announcements
        if (announcementsData.status === 'fulfilled' && announcementsData.value) {
          const announcementItems: NewsEventItem[] = announcementsData.value.map((announcement: Announcement) => ({
            id: announcement.id,
            title: announcement.title,
            description: announcement.body.length > 150 ? `${announcement.body.substring(0, 150)}...` : announcement.body,
            date: new Date(announcement.date).toLocaleDateString(),
            image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80",
            alt: `Announcement: ${announcement.title}`,
            type: 'announcement' as const
          }));
          combinedData.push(...announcementItems);
        }

        // Sort by date (newest first) and limit to 3 items
        const sortedData = combinedData
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);

        setNewsEvents(sortedData);
      } catch (err) {
        setError('Failed to load news and events');
        console.error('News and events error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNewsAndEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
            Latest News & Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <Skeleton className="h-40 md:h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Use fetched data if available, otherwise use fallback
  const itemsToRender = newsEvents.length > 0 ? newsEvents : fallbackNewsEvents;

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
          Latest News & Events
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {itemsToRender.map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 md:h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <time>{item.date}</time>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group text-sm">
                  Read More 
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;

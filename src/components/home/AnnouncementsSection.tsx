
import { useState, useEffect } from 'react';
import { Calendar, AlertCircle, Info, Star } from 'lucide-react';
import { fetchAnnouncements, type Announcement } from '@/services/supabase/fetchAnnouncements';
import { Skeleton } from '@/components/ui/skeleton';

const AnnouncementsSection = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        setLoading(true);
        const data = await fetchAnnouncements();
        setAnnouncements(data.slice(0, 3)); // Show only latest 3
      } catch (err) {
        setError('Failed to load announcements');
      } finally {
        setLoading(false);
      }
    };

    loadAnnouncements();
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'event':
        return <Star className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-green-500" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (type) {
      case 'important':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'event':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-green-100 text-green-800`;
    }
  };

  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
            Latest Announcements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-8">
            Latest Announcements
          </h2>
          <p className="text-gray-600">Unable to load announcements at this time.</p>
        </div>
      </section>
    );
  }

  if (announcements.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-8">
            Latest Announcements
          </h2>
          <p className="text-gray-600">No announcements available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">
          Latest Announcements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {announcements.map((announcement) => (
            <article key={announcement.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(announcement.type)}
                    <span className={getTypeBadge(announcement.type)}>
                      {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <time>{new Date(announcement.date).toLocaleDateString()}</time>
                  </div>
                </div>
                
                <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">
                  {announcement.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {announcement.body.length > 150 
                    ? `${announcement.body.substring(0, 150)}...` 
                    : announcement.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;

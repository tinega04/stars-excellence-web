
import React from 'react';
import { Link } from 'react-router-dom';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail, Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/guardian', icon: LayoutDashboard },
  { name: 'Progress', href: '/portal/guardian/progress', icon: TrendingUp },
  { name: 'Achievements', href: '/portal/guardian/achievements', icon: Award },
  { name: 'Payments', href: '/portal/guardian/payments', icon: Receipt },
  { name: 'Newsletters', href: '/portal/guardian/newsletters', icon: Mail },
  { name: 'Blog', href: '/portal/guardian/blog', icon: BookOpen },
];

const GuardianBlog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'supporting-your-child-academic-success',
      title: 'Supporting Your Child\'s Academic Success at Home',
      excerpt: 'Practical tips and strategies for parents to create a supportive learning environment and help their children excel academically.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-07-02',
      category: 'Academic Support',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=300',
      featured: true
    },
    {
      id: 2,
      slug: 'building-strong-parent-teacher-relationships',
      title: 'Building Strong Parent-Teacher Relationships',
      excerpt: 'How effective communication and collaboration between parents and teachers can enhance your child\'s educational experience.',
      author: 'Mr. James Wilson',
      date: '2024-06-28',
      category: 'Communication',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&h=300',
      featured: false
    },
    {
      id: 3,
      slug: 'nurturing-emotional-intelligence-children',
      title: 'Nurturing Emotional Intelligence in Children',
      excerpt: 'Understanding the importance of emotional intelligence and practical ways to help your child develop these crucial life skills.',
      author: 'Ms. Emily Davis',
      date: '2024-06-25',
      category: 'Child Development',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=600&h=300',
      featured: true
    },
    {
      id: 4,
      slug: 'technology-balance-modern-parenting',
      title: 'Finding the Right Technology Balance in Modern Parenting',
      excerpt: 'Guidelines for managing screen time and helping children develop a healthy relationship with technology.',
      author: 'Dr. Michael Brown',
      date: '2024-06-20',
      category: 'Technology',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=300',
      featured: false
    },
    {
      id: 5,
      slug: 'preparing-children-future-careers',
      title: 'Preparing Children for Future Careers',
      excerpt: 'How to help your child develop 21st-century skills and explore their interests to prepare for future career opportunities.',
      author: 'Prof. Lisa Anderson',
      date: '2024-06-15',
      category: 'Career Guidance',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=300',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic Support': return 'bg-blue-100 text-blue-800';
      case 'Communication': return 'bg-green-100 text-green-800';
      case 'Child Development': return 'bg-purple-100 text-purple-800';
      case 'Technology': return 'bg-orange-100 text-orange-800';
      case 'Career Guidance': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Parenting & Education Blog</h2>
          <p className="text-muted-foreground">
            Expert advice, tips, and insights to support your child's educational journey
          </p>
        </div>

        {/* Featured Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Featured Articles</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      to={`/portal/guardian/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Articles</h3>
          <div className="space-y-4">
            {regularPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-32 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                      <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Calendar className="h-4 w-4 ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Link 
                          to={`/portal/guardian/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Browse by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['Academic Support', 'Communication', 'Child Development', 'Technology', 'Career Guidance'].map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-muted"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default GuardianBlog;

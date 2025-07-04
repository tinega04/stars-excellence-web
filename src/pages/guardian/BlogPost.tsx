
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail, Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/guardian', icon: LayoutDashboard },
  { name: 'Progress', href: '/portal/guardian/progress', icon: TrendingUp },
  { name: 'Achievements', href: '/portal/guardian/achievements', icon: Award },
  { name: 'Payments', href: '/portal/guardian/payments', icon: Receipt },
  { name: 'Newsletters', href: '/portal/guardian/newsletters', icon: Mail },
  { name: 'Blog', href: '/portal/guardian/blog', icon: BookOpen },
];

const GuardianBlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would be fetched based on the slug
  const blogPost = {
    title: 'Supporting Your Child\'s Academic Success at Home',
    author: 'Dr. Sarah Mitchell',
    date: '2024-07-02',
    category: 'Academic Support',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=400',
    content: `
      <p>As parents, we all want our children to succeed academically. While schools provide the foundation for learning, the support system at home plays an equally crucial role in shaping a child's educational journey. Creating an environment that fosters learning and growth requires intentional effort and understanding of your child's unique needs.</p>

      <h3>Creating a Conducive Learning Environment</h3>
      <p>The physical space where your child studies can significantly impact their ability to focus and learn effectively. Consider these essential elements:</p>
      
      <ul>
        <li><strong>Dedicated Study Space:</strong> Set up a quiet, well-lit area specifically for homework and study time. This doesn't have to be elaborate – even a corner of the dining table can work if it's consistently used for this purpose.</li>
        <li><strong>Minimize Distractions:</strong> Keep the study area free from toys, games, and electronic devices that might divert attention from learning tasks.</li>
        <li><strong>Organize Supplies:</strong> Ensure all necessary materials like pencils, erasers, calculators, and reference books are easily accessible.</li>
      </ul>

      <h3>Establishing Effective Study Routines</h3>
      <p>Consistency is key when it comes to academic success. Help your child develop a routine that works for your family's schedule:</p>
      
      <ul>
        <li><strong>Set Regular Study Times:</strong> Establish specific times for homework and study sessions. This helps create a habit and ensures academic work doesn't get pushed aside.</li>
        <li><strong>Break Tasks into Manageable Chunks:</strong> Help your child learn to divide larger assignments into smaller, more manageable tasks to avoid feeling overwhelmed.</li>
        <li><strong>Include Breaks:</strong> Regular short breaks during study sessions can help maintain focus and prevent burnout.</li>
      </ul>

      <h3>Active Involvement in Learning</h3>
      <p>Your engagement in your child's education shows them that learning is valued and important:</p>
      
      <ul>
        <li><strong>Review Homework Together:</strong> Take time to go through assignments, not to do the work for them, but to ensure they understand the concepts.</li>
        <li><strong>Ask About Their Day:</strong> Show genuine interest in what they're learning at school. Ask specific questions about subjects, projects, and challenges.</li>
        <li><strong>Connect Learning to Real Life:</strong> Help your child see how their studies relate to everyday situations and future goals.</li>
      </ul>

      <h3>Communication with Teachers</h3>
      <p>Maintaining open lines of communication with your child's teachers is essential for academic success:</p>
      
      <ul>
        <li><strong>Attend Parent-Teacher Conferences:</strong> These meetings provide valuable insights into your child's progress and areas that need attention.</li>
        <li><strong>Stay Informed:</strong> Keep up with school announcements, curriculum changes, and important deadlines.</li>
        <li><strong>Address Concerns Early:</strong> If you notice your child struggling with a particular subject, reach out to the teacher promptly.</li>
      </ul>

      <h3>Encouraging a Growth Mindset</h3>
      <p>Help your child develop resilience and a positive attitude toward learning:</p>
      
      <ul>
        <li><strong>Praise Effort Over Results:</strong> Focus on the hard work and strategies your child uses rather than just the grades they achieve.</li>
        <li><strong>Normalize Mistakes:</strong> Help your child understand that mistakes are part of the learning process and opportunities for growth.</li>
        <li><strong>Set Realistic Goals:</strong> Work with your child to set achievable academic goals and celebrate progress along the way.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Supporting your child's academic success at home is about creating the right environment, establishing good habits, and maintaining open communication with both your child and their teachers. Remember that every child is unique, and what works for one may need to be adjusted for another. Be patient, stay involved, and celebrate the small victories along the way.</p>

      <p>Your consistent support and encouragement will not only help your child succeed academically but also instill a lifelong love of learning that will serve them well beyond their school years.</p>
    `
  };

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

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        {/* Back to Blog */}
        <Link 
          to="/portal/guardian/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className={getCategoryColor(blogPost.category)}>
              {blogPost.category}
            </Badge>
            <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{blogPost.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={blogPost.imageUrl} 
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/portal/guardian/blog/building-strong-parent-teacher-relationships" className="block p-4 border rounded-lg hover:bg-muted/50">
                <h4 className="font-medium mb-2">Building Strong Parent-Teacher Relationships</h4>
                <p className="text-sm text-muted-foreground">How effective communication and collaboration can enhance your child's educational experience.</p>
              </Link>
              <Link to="/portal/guardian/blog/nurturing-emotional-intelligence-children" className="block p-4 border rounded-lg hover:bg-muted/50">
                <h4 className="font-medium mb-2">Nurturing Emotional Intelligence in Children</h4>
                <p className="text-sm text-muted-foreground">Understanding the importance of emotional intelligence and practical development strategies.</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default GuardianBlogPost;

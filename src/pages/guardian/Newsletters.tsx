
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const GuardianNewsletters = () => {
  const newsletters = [
    {
      id: 1,
      title: 'Excellence Academy Newsletter - July 2024',
      date: '2024-07-01',
      excerpt: 'Updates on upcoming events, academic achievements, and important announcements for the new term.',
      category: 'Monthly Newsletter',
      isNew: true,
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference Reminder',
      date: '2024-06-28',
      excerpt: 'Important information about the upcoming parent-teacher conferences scheduled for next week.',
      category: 'Important Notice',
      isNew: true,
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Sports Day 2024 Results & Photos',
      date: '2024-06-25',
      excerpt: 'Celebrating our students athletic achievements and memorable moments from Sports Day 2024.',
      category: 'Event Update',
      isNew: false,
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Academic Calendar Updates - Term 3',
      date: '2024-06-20',
      excerpt: 'Updated academic calendar with important dates, holidays, and examination schedules.',
      category: 'Academic Notice',
      isNew: false,
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Excellence Academy Newsletter - June 2024',
      date: '2024-06-01',
      excerpt: 'Monthly highlights including student achievements, upcoming events, and school improvements.',
      category: 'Monthly Newsletter',
      isNew: false,
      downloadUrl: '#'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Monthly Newsletter': return 'bg-blue-100 text-blue-800';
      case 'Important Notice': return 'bg-red-100 text-red-800';
      case 'Event Update': return 'bg-green-100 text-green-800';
      case 'Academic Notice': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">School Newsletters</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest school news, events, and important announcements
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Newsletters</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2</div>
              <p className="text-xs text-muted-foreground">Unread this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Newsletters</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">24</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">July 1</div>
              <p className="text-xs text-muted-foreground">Latest newsletter</p>
            </CardContent>
          </Card>
        </div>

        {/* Newsletters List */}
        <div className="space-y-4">
          {newsletters.map((newsletter) => (
            <Card key={newsletter.id} className={newsletter.isNew ? 'border-blue-200 bg-blue-50/30' : ''}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{newsletter.title}</h3>
                      {newsletter.isNew && (
                        <Badge className="bg-blue-100 text-blue-800">New</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{newsletter.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{newsletter.date}</span>
                      </div>
                      <Badge className={getCategoryColor(newsletter.category)}>
                        {newsletter.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      Read Online
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive newsletters via email</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">SMS Alerts</h4>
                  <p className="text-sm text-muted-foreground">Get urgent notices via SMS</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default GuardianNewsletters;

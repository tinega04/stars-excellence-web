
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail, Trophy, Star, Medal } from 'lucide-react';
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

const GuardianAchievements = () => {
  const achievements = [
    {
      student: 'Sarah Johnson',
      achievements: [
        {
          title: 'Mathematics Excellence Award',
          description: 'Top performer in Grade 8 Mathematics',
          date: '2024-06-15',
          type: 'academic',
          icon: Trophy
        },
        {
          title: 'Perfect Attendance',
          description: 'No absences for the entire semester',
          date: '2024-06-01',
          type: 'attendance',
          icon: Star
        },
        {
          title: 'Science Fair Winner',
          description: 'First place in school science fair',
          date: '2024-05-20',
          type: 'competition',
          icon: Medal
        }
      ]
    },
    {
      student: 'Michael Johnson',
      achievements: [
        {
          title: 'Art Competition Winner',
          description: 'Won regional art competition',
          date: '2024-06-10',
          type: 'competition',
          icon: Trophy
        },
        {
          title: 'Reading Champion',
          description: 'Read 50+ books this year',
          date: '2024-05-30',
          type: 'academic',
          icon: Star
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'attendance': return 'bg-green-100 text-green-800';
      case 'competition': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Achievements & Awards</h2>
          <p className="text-muted-foreground">
            Celebrate your children's accomplishments and milestones
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Awards</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Academic Excellence</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">5</div>
              <p className="text-xs text-muted-foreground">Subject awards</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competitions Won</CardTitle>
              <Medal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">3</div>
              <p className="text-xs text-muted-foreground">Various competitions</p>
            </CardContent>
          </Card>
        </div>

        {achievements.map((studentData, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                {studentData.student}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.achievements.map((achievement, achIndex) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={achIndex} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                          </div>
                          <Badge className={getTypeColor(achievement.type)}>
                            {achievement.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PortalLayout>
  );
};

export default GuardianAchievements;

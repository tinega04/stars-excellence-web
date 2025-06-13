
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Calendar, ClipboardList, Award, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Attendance', href: '/portal/learner/attendance', icon: Calendar },
  { name: 'Assignments', href: '/portal/learner/assignments', icon: ClipboardList },
  { name: 'Exam Results', href: '/portal/learner/results', icon: Award },
  { name: 'Announcements', href: '/portal/learner/announcements', icon: Bell },
];

const LearnerResults = () => {
  const examResults = {
    'Grade 4': {
      'Term 1': [
        { subject: 'Mathematics', score: 85, grade: 'A-' },
        { subject: 'English', score: 78, grade: 'B+' },
        { subject: 'Science', score: 82, grade: 'B+' },
      ],
      'Term 2': [
        { subject: 'Mathematics', score: 89, grade: 'A-' },
        { subject: 'English', score: 75, grade: 'B+' },
        { subject: 'Science', score: 82, grade: 'B+' },
        { subject: 'Social Studies', score: 78, grade: 'B' },
        { subject: 'Kiswahili', score: 85, grade: 'A-' },
      ]
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Exam Results</h2>
          <p className="text-muted-foreground">
            View your academic performance by grade and term
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(examResults).map(([grade, terms]) => (
            <Card key={grade}>
              <CardHeader>
                <CardTitle>{grade}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(terms).map(([term, results]) => (
                  <Collapsible key={term}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted rounded-lg hover:bg-muted/80">
                      <span className="font-medium">{term}</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead>Grade</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {results.map((result, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{result.subject}</TableCell>
                              <TableCell>{result.score}%</TableCell>
                              <TableCell className={`font-semibold ${getGradeColor(result.grade)}`}>
                                {result.grade}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
};

export default LearnerResults;

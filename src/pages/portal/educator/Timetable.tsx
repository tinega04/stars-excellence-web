
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  Calendar,
  FileText,
  MessageSquare,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'My Subjects', href: '/portal/educator/subjects', icon: BookOpen },
  { name: 'Results Submission', href: '/portal/educator/results', icon: ClipboardList },
  { name: 'Learning Materials', href: '/portal/educator/materials', icon: FileText },
  { name: 'Teaching Resources', href: '/portal/educator/resources', icon: BookOpen },
  { name: 'Timetable', href: '/portal/educator/timetable', icon: Calendar },
  { name: 'System Messages', href: '/portal/educator/messages', icon: MessageSquare },
  { name: 'Document Center', href: '/portal/educator/documents', icon: FileText },
];

const Timetable = () => {
  const schedule = {
    'Monday': [
      { time: '8:00 - 8:45', subject: 'Mathematics', class: 'Grade 7A', room: 'Room 15' },
      { time: '9:00 - 9:45', subject: 'Science', class: 'Grade 6B', room: 'Lab 2' },
      { time: '11:00 - 11:45', subject: 'English', class: 'Grade 8A', room: 'Room 12' },
      { time: '2:00 - 2:45', subject: 'History', class: 'Grade 9A', room: 'Room 18' },
    ],
    'Tuesday': [
      { time: '8:00 - 8:45', subject: 'Mathematics', class: 'Grade 6A', room: 'Room 15' },
      { time: '10:00 - 10:45', subject: 'Science', class: 'Grade 8A', room: 'Lab 2' },
      { time: '1:00 - 1:45', subject: 'English', class: 'Grade 9A', room: 'Room 12' },
    ],
    'Wednesday': [
      { time: '8:00 - 8:45', subject: 'Mathematics', class: 'Grade 7B', room: 'Room 15' },
      { time: '9:00 - 9:45', subject: 'History', class: 'Grade 9A', room: 'Room 18' },
      { time: '11:00 - 11:45', subject: 'Science', class: 'Grade 6B', room: 'Lab 2' },
    ],
    'Thursday': [
      { time: '8:00 - 8:45', subject: 'English', class: 'Grade 8A', room: 'Room 12' },
      { time: '10:00 - 10:45', subject: 'Mathematics', class: 'Grade 7A', room: 'Room 15' },
      { time: '2:00 - 2:45', subject: 'Science', class: 'Grade 8A', room: 'Lab 2' },
    ],
    'Friday': [
      { time: '8:00 - 8:45', subject: 'History', class: 'Grade 9A', room: 'Room 18' },
      { time: '9:00 - 9:45', subject: 'Mathematics', class: 'Grade 6A', room: 'Room 15' },
      { time: '11:00 - 11:45', subject: 'English', class: 'Grade 9A', room: 'Room 12' },
    ],
  };

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Timetable</h2>
          <p className="text-muted-foreground">
            Weekly schedule for your assigned classes
          </p>
        </div>

        <div className="grid gap-6">
          {Object.entries(schedule).map(([day, classes]) => (
            <Card key={day}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classes.map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {class_.time}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{class_.subject}</h4>
                          <p className="text-xs text-muted-foreground">{class_.class}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{class_.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
};

export default Timetable;

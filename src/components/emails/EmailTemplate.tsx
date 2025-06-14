
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EmailTemplateProps {
  subject: string;
  recipient: string;
  content: React.ReactNode;
  type: 'learner' | 'guardian' | 'educator';
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  subject,
  recipient,
  content,
  type
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'learner': return 'bg-blue-100 text-blue-800';
      case 'guardian': return 'bg-green-100 text-green-800';
      case 'educator': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Email Preview</CardTitle>
          <Badge className={getTypeColor(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
        <div className="space-y-2 text-sm">
          <div><strong>To:</strong> {recipient}</div>
          <div><strong>Subject:</strong> {subject}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg p-6 bg-white">
          <div className="prose max-w-none">
            {content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

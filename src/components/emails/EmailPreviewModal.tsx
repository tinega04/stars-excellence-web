
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmailTemplate } from './EmailTemplate';
import { LearnerWelcomeEmail } from './templates/LearnerWelcomeEmail';
import { GuardianWelcomeEmail } from './templates/GuardianWelcomeEmail';
import { EducatorWelcomeEmail } from './templates/EducatorWelcomeEmail';
import { Mail, X } from 'lucide-react';

interface EmailPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'learner' | 'educator' | 'guardian';
  userData: {
    // Learner data
    firstName?: string;
    lastName?: string;
    grade?: string;
    admissionNumber?: string;
    learnerEmail?: string;
    
    // Guardian data
    guardianFullName?: string;
    guardianEmail?: string;
    guardianPhone?: string;
    guardianRelationship?: string;
    
    // Educator data
    fullName?: string;
    email?: string;
    subject?: string;
  };
}

export const EmailPreviewModal: React.FC<EmailPreviewModalProps> = ({
  isOpen,
  onClose,
  userType,
  userData
}) => {
  const getEmailsToShow = () => {
    const emails = [];

    if (userType === 'learner') {
      // Show guardian email if guardian info provided
      if (userData.guardianFullName && userData.guardianEmail) {
        emails.push({
          id: 'guardian',
          label: 'Guardian Email',
          type: 'guardian' as const
        });
      }
      
      // Show learner email if learner email provided
      if (userData.learnerEmail) {
        emails.push({
          id: 'learner',
          label: 'Learner Email',
          type: 'learner' as const
        });
      }
    } else if (userType === 'educator' && userData.email) {
      emails.push({
        id: 'educator',
        label: 'Educator Email',
        type: 'educator' as const
      });
    } else if (userType === 'guardian' && userData.email) {
      emails.push({
        id: 'guardian-standalone',
        label: 'Guardian Email',
        type: 'guardian' as const
      });
    }

    return emails;
  };

  const emails = getEmailsToShow();

  if (!emails.length) {
    return null;
  }

  const learnerName = userData.firstName && userData.lastName 
    ? `${userData.firstName} ${userData.lastName}`
    : 'Student Name';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <DialogTitle>Onboarding Email Preview</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4">
          {emails.length === 1 ? (
            <div>
              {emails[0].type === 'learner' && userData.learnerEmail && (
                <EmailTemplate
                  subject="Welcome to Stevens Integrated Schools – Your Portal Login Info"
                  recipient={userData.learnerEmail}
                  type="learner"
                  content={
                    <LearnerWelcomeEmail
                      learnerName={learnerName}
                      grade={userData.grade || 'Your Grade'}
                      admissionNumber={userData.admissionNumber || 'ADM001'}
                      loginEmail={userData.learnerEmail}
                    />
                  }
                />
              )}

              {emails[0].type === 'guardian' && (
                <EmailTemplate
                  subject={userType === 'learner' 
                    ? "Welcome to Stevens Integrated Schools – Guardian Access Details"
                    : "Your Stevens Integrated Schools Guardian Portal is Ready"
                  }
                  recipient={userData.guardianEmail || userData.email || 'guardian@example.com'}
                  type="guardian"
                  content={
                    <GuardianWelcomeEmail
                      guardianName={userData.guardianFullName || userData.fullName || 'Guardian Name'}
                      learnerName={userType === 'learner' ? learnerName : undefined}
                      learnerGrade={userData.grade}
                      loginPhone={userData.guardianPhone || '+254 700 000 000'}
                      loginEmail={userData.guardianEmail || userData.email}
                      relationship={userData.guardianRelationship}
                      isStandalone={userType === 'guardian'}
                    />
                  }
                />
              )}

              {emails[0].type === 'educator' && userData.email && (
                <EmailTemplate
                  subject="Welcome to Stevens Integrated Schools – Educator Access Setup"
                  recipient={userData.email}
                  type="educator"
                  content={
                    <EducatorWelcomeEmail
                      educatorName={userData.fullName || 'Educator Name'}
                      subject={userData.subject}
                      loginEmail={userData.email}
                    />
                  }
                />
              )}
            </div>
          ) : (
            <Tabs defaultValue={emails[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                {emails.map((email) => (
                  <TabsTrigger key={email.id} value={email.id}>
                    {email.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {emails.map((email) => (
                <TabsContent key={email.id} value={email.id} className="mt-4">
                  {email.type === 'learner' && userData.learnerEmail && (
                    <EmailTemplate
                      subject="Welcome to Stevens Integrated Schools – Your Portal Login Info"
                      recipient={userData.learnerEmail}
                      type="learner"
                      content={
                        <LearnerWelcomeEmail
                          learnerName={learnerName}
                          grade={userData.grade || 'Your Grade'}
                          admissionNumber={userData.admissionNumber || 'ADM001'}
                          loginEmail={userData.learnerEmail}
                        />
                      }
                    />
                  )}

                  {email.type === 'guardian' && (
                    <EmailTemplate
                      subject="Welcome to Stevens Integrated Schools – Guardian Access Details"
                      recipient={userData.guardianEmail || 'guardian@example.com'}
                      type="guardian"
                      content={
                        <GuardianWelcomeEmail
                          guardianName={userData.guardianFullName || 'Guardian Name'}
                          learnerName={learnerName}
                          learnerGrade={userData.grade}
                          loginPhone={userData.guardianPhone || '+254 700 000 000'}
                          loginEmail={userData.guardianEmail}
                          relationship={userData.guardianRelationship}
                        />
                      }
                    />
                  )}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

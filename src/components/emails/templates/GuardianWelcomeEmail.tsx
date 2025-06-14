
import React from 'react';

interface GuardianWelcomeEmailProps {
  guardianName: string;
  learnerName?: string;
  learnerGrade?: string;
  loginPhone: string;
  loginEmail?: string;
  relationship?: string;
  isStandalone?: boolean;
}

export const GuardianWelcomeEmail: React.FC<GuardianWelcomeEmailProps> = ({
  guardianName,
  learnerName,
  learnerGrade,
  loginPhone,
  loginEmail,
  relationship,
  isStandalone = false
}) => {
  const subject = isStandalone 
    ? "Your Stevens Integrated Schools Guardian Portal is Ready"
    : "Welcome to Stevens Integrated Schools – Guardian Access Details";

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <img src="/placeholder.svg" alt="Stevens Integrated Schools" className="mx-auto h-16 mb-4" />
        <h1 className="text-2xl font-bold text-green-800">Guardian Portal Access</h1>
      </div>

      <p>Dear {guardianName},</p>

      {!isStandalone && learnerName && (
        <p>
          Welcome to Stevens Integrated Schools! Your {relationship || 'child'}, <strong>{learnerName}</strong>, 
          has been enrolled in <strong>{learnerGrade}</strong>. We're excited to have your family join our community.
        </p>
      )}

      {isStandalone && (
        <p>
          Your Guardian Portal account for Stevens Integrated Schools is now ready! 
          You can now access your account to monitor your child's progress.
        </p>
      )}

      <div className="bg-green-50 p-4 rounded-lg my-4">
        <h3 className="font-semibold text-green-800 mb-2">Your Login Details:</h3>
        <ul className="space-y-1 text-sm">
          <li><strong>Login Phone:</strong> {loginPhone}</li>
          {loginEmail && <li><strong>Login Email:</strong> {loginEmail}</li>}
          <li><strong>Portal Access:</strong> <a href="{{GUARDIAN_PORTAL_LINK}}" className="text-green-600 underline">Guardian Portal</a></li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Guardian Portal Features:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>View your child's academic performance and grades</li>
          <li>Monitor attendance and behavior reports</li>
          <li>Receive important school announcements</li>
          <li>Access fee statements and payment history</li>
          <li>Communicate with teachers and school administrators</li>
          <li>View upcoming events and parent meetings</li>
        </ul>
      </div>

      <p>
        We encourage you to log in regularly to stay updated on your child's progress. 
        Your involvement is crucial to their academic success.
      </p>

      <div className="border-t pt-4 mt-6">
        <p className="text-sm text-gray-600">
          <strong>Stevens Integrated Schools</strong><br />
          Email: support@stevens.edu<br />
          Phone: +254 700 000 000<br />
          Guardian Support: guardian-support@stevens.edu
        </p>
      </div>
    </div>
  );
};

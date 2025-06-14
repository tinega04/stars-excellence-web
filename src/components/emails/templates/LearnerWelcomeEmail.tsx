
import React from 'react';

interface LearnerWelcomeEmailProps {
  learnerName: string;
  grade: string;
  admissionNumber: string;
  loginEmail?: string;
}

export const LearnerWelcomeEmail: React.FC<LearnerWelcomeEmailProps> = ({
  learnerName,
  grade,
  admissionNumber,
  loginEmail
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <img src="/placeholder.svg" alt="Stevens Integrated Schools" className="mx-auto h-16 mb-4" />
        <h1 className="text-2xl font-bold text-blue-800">Welcome to Stevens Integrated Schools!</h1>
      </div>

      <p>Dear {learnerName},</p>

      <p>
        Welcome to Stevens Integrated Schools! We are excited to have you join our learning community 
        in <strong>{grade}</strong>.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg my-4">
        <h3 className="font-semibold text-blue-800 mb-2">Your Account Details:</h3>
        <ul className="space-y-1 text-sm">
          <li><strong>Admission Number:</strong> {admissionNumber}</li>
          {loginEmail && <li><strong>Login Email:</strong> {loginEmail}</li>}
          <li><strong>Portal Access:</strong> <a href="{{LEARNER_PORTAL_LINK}}" className="text-blue-600 underline">Student Portal</a></li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">What you can do in your portal:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>View your class schedule and timetable</li>
          <li>Access learning materials and resources</li>
          <li>Check your assignment submissions</li>
          <li>View your academic results and progress</li>
          <li>Read important announcements</li>
        </ul>
      </div>

      <p>
        If you need any assistance accessing your portal or have questions about your studies, 
        please don't hesitate to contact our support team.
      </p>

      <div className="border-t pt-4 mt-6">
        <p className="text-sm text-gray-600">
          <strong>Stevens Integrated Schools</strong><br />
          Email: support@stevens.edu<br />
          Phone: +254 700 000 000
        </p>
      </div>
    </div>
  );
};

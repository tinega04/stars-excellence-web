
import React from 'react';

interface EducatorWelcomeEmailProps {
  educatorName: string;
  subject?: string;
  loginEmail: string;
}

export const EducatorWelcomeEmail: React.FC<EducatorWelcomeEmailProps> = ({
  educatorName,
  subject,
  loginEmail
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <img src="/placeholder.svg" alt="Stevens Integrated Schools" className="mx-auto h-16 mb-4" />
        <h1 className="text-2xl font-bold text-purple-800">Welcome to Our Teaching Team!</h1>
      </div>

      <p>Dear {educatorName},</p>

      <p>
        Welcome to Stevens Integrated Schools! We are delighted to have you join our dedicated team of educators.
        {subject && ` Your expertise in ${subject} will be a valuable addition to our academic community.`}
      </p>

      <div className="bg-purple-50 p-4 rounded-lg my-4">
        <h3 className="font-semibold text-purple-800 mb-2">Your Account Details:</h3>
        <ul className="space-y-1 text-sm">
          <li><strong>Login Email:</strong> {loginEmail}</li>
          <li><strong>Portal Access:</strong> <a href="{{EDUCATOR_PORTAL_LINK}}" className="text-purple-600 underline">Educator Portal</a></li>
          <li><strong>Password:</strong> You will receive your temporary password separately</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Educator Portal Features:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Manage your class schedules and timetables</li>
          <li>Upload and organize learning materials</li>
          <li>Create and manage assignments</li>
          <li>Input and track student grades and performance</li>
          <li>Access student attendance records</li>
          <li>Communicate with students and parents</li>
          <li>Generate progress reports</li>
          <li>Access teaching resources and curriculum guides</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg my-4">
        <h3 className="font-semibold text-blue-800 mb-2">Getting Started:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Log into your educator portal using the credentials provided</li>
          <li>Complete your profile and update your personal information</li>
          <li>Review your assigned classes and subjects</li>
          <li>Explore the learning materials library</li>
          <li>Attend the new educator orientation session</li>
        </ol>
      </div>

      <p>
        Our IT support team and academic coordinators are here to help you get settled. 
        Don't hesitate to reach out if you need any assistance with the platform or have questions 
        about our teaching methodologies.
      </p>

      <div className="border-t pt-4 mt-6">
        <p className="text-sm text-gray-600">
          <strong>Stevens Integrated Schools</strong><br />
          Email: support@stevens.edu<br />
          Phone: +254 700 000 000<br />
          Educator Support: teachers@stevens.edu
        </p>
      </div>
    </div>
  );
};

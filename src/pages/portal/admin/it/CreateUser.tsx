
import React, { useState } from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database, UserPlus, UsersIcon, UserCog, Calendar as CalendarIcon, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { EmailPreviewModal } from '@/components/emails/EmailPreviewModal';

const CreateUser = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState('');
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [previewEmails, setPreviewEmails] = useState(true);
  const [formData, setFormData] = useState({
    // Basic user fields
    fullName: '',
    email: '',
    role: '',
    phoneNumber: '',
    address: '',
    classAssigned: '',
    subject: '',
    
    // Learner specific fields
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: undefined as Date | undefined,
    admissionNumber: '',
    grade: '',
    stream: '',
    enrollmentDate: undefined as Date | undefined,
    branch: '',
    learnerPhone: '',
    learnerEmail: '',
    generateCredentials: true,
    
    // Guardian fields
    guardianFullName: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianRelationship: '',
    guardianRelationshipOther: '', // New field for "Other (Specify)"
  });

  const navigation = [
    { name: 'Dashboard', href: '/portal/admin/it', icon: Server },
    { 
      name: 'User Management', 
      href: '/portal/admin/it/users', 
      icon: Users,
      subItems: [
        { name: 'Create New User', href: '/portal/admin/it/users/create', icon: UserPlus },
        { name: 'User Directory', href: '/portal/admin/it/users/directory', icon: UsersIcon },
        { name: 'Manage Accounts', href: '/portal/admin/it/users/manage', icon: UserCog },
      ]
    },
    { name: 'System Settings', href: '/portal/admin/it/settings', icon: Settings },
    { name: 'System Logs', href: '/portal/admin/it/logs', icon: Activity },
    { name: 'Security', href: '/portal/admin/it/security', icon: Shield },
    { name: 'Database', href: '/portal/admin/it/database', icon: Database },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userType === 'learner') {
      // Validate learner form
      if (!formData.firstName || !formData.lastName || !formData.admissionNumber || !formData.grade) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required learner fields.",
          variant: "destructive"
        });
        return;
      }

      // Validate guardian info if provided
      if (formData.guardianFullName && !formData.guardianPhone) {
        toast({
          title: "Validation Error",
          description: "Guardian phone number is required when adding guardian information.",
          variant: "destructive"
        });
        return;
      }

      // Simulate learner and guardian creation
      const learnerName = `${formData.firstName} ${formData.middleName ? formData.middleName + ' ' : ''}${formData.lastName}`;
      
      toast({
        title: "Learner Created Successfully",
        description: `${learnerName} (${formData.admissionNumber}) has been enrolled in ${formData.grade}.${formData.guardianFullName ? ` Guardian account created for ${formData.guardianFullName}.` : ''}`,
      });

      // Show email preview if emails would be sent
      if (previewEmails && (formData.learnerEmail || (formData.guardianFullName && formData.guardianEmail))) {
        setShowEmailPreview(true);
      }
    } else {
      // Regular user creation validation
      if (!formData.fullName || !formData.email || !formData.role) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "User Created Successfully",
        description: `${formData.fullName} has been created as a ${formData.role}.`,
      });

      // Show email preview if emails would be sent
      if (previewEmails && formData.email) {
        setShowEmailPreview(true);
      }
    }

    // Don't reset form immediately if showing email preview
    if (!previewEmails || (userType === 'learner' && !formData.learnerEmail && (!formData.guardianFullName || !formData.guardianEmail))) {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      role: '',
      phoneNumber: '',
      address: '',
      classAssigned: '',
      subject: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dateOfBirth: undefined,
      admissionNumber: '',
      grade: '',
      stream: '',
      enrollmentDate: undefined,
      branch: '',
      learnerPhone: '',
      learnerEmail: '',
      generateCredentials: true,
      guardianFullName: '',
      guardianPhone: '',
      guardianEmail: '',
      guardianRelationship: '',
      guardianRelationshipOther: '', // Reset the new field
    });
    setUserType('');
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleChange = (value: string) => {
    setUserType(value);
    handleInputChange('role', value);
  };

  const generateUsername = () => {
    if (formData.firstName && formData.lastName) {
      const username = `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@stevens.edu`;
      handleInputChange('learnerEmail', username);
    }
  };

  const handleEmailPreviewClose = () => {
    setShowEmailPreview(false);
    resetForm();
  };

  return (
    <AdminLayout role="it" navigation={navigation} roleTitle="IT Administrator">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <UserPlus className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Create New User</h2>
            <p className="text-muted-foreground">
              Add new users to the Stevens Integrated Schools portal
            </p>
          </div>
        </div>

        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle>User Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">User Type *</Label>
                <Select value={userType} onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="educator">Educator</SelectItem>
                    <SelectItem value="guardian">Guardian Only</SelectItem>
                    <SelectItem value="learner">Learner (with Guardian)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email Preview Toggle */}
              {userType && (
                <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg">
                  <Checkbox 
                    id="previewEmails" 
                    checked={previewEmails}
                    onCheckedChange={(checked) => {
                      if (checked !== "indeterminate") {
                        setPreviewEmails(checked);
                      }
                    }}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="previewEmails"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Preview onboarding emails
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Show email preview after user creation (no emails will be sent)
                    </p>
                  </div>
                  <Mail className="h-4 w-4 text-blue-600 ml-2" />
                </div>
              )}

              {/* Learner Registration Form */}
              {userType === 'learner' && (
                <div className="space-y-6">
                  {/* Learner Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">1️⃣ Learner Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="middleName">Middle Name</Label>
                        <Input
                          id="middleName"
                          placeholder="Enter middle name"
                          value={formData.middleName}
                          onChange={(e) => handleInputChange('middleName', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Date of Birth *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.dateOfBirth && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : "Select date of birth"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.dateOfBirth}
                              onSelect={(date) => handleInputChange('dateOfBirth', date)}
                              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="admissionNumber">Admission Number *</Label>
                        <Input
                          id="admissionNumber"
                          placeholder="e.g., SIS/2024/001"
                          value={formData.admissionNumber}
                          onChange={(e) => handleInputChange('admissionNumber', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade/Class *</Label>
                        <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grade-1">Grade 1</SelectItem>
                            <SelectItem value="grade-2">Grade 2</SelectItem>
                            <SelectItem value="grade-3">Grade 3</SelectItem>
                            <SelectItem value="grade-4">Grade 4</SelectItem>
                            <SelectItem value="grade-5">Grade 5</SelectItem>
                            <SelectItem value="grade-6">Grade 6</SelectItem>
                            <SelectItem value="grade-7">Grade 7</SelectItem>
                            <SelectItem value="grade-8">Grade 8</SelectItem>
                            <SelectItem value="form-1">Form 1</SelectItem>
                            <SelectItem value="form-2">Form 2</SelectItem>
                            <SelectItem value="form-3">Form 3</SelectItem>
                            <SelectItem value="form-4">Form 4</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="stream">Stream/Section</Label>
                        <Input
                          id="stream"
                          placeholder="e.g., A, B, Science, Arts"
                          value={formData.stream}
                          onChange={(e) => handleInputChange('stream', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="branch">Branch *</Label>
                        <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="main">Main Branch</SelectItem>
                            <SelectItem value="annex">Annex</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Enrollment Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.enrollmentDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.enrollmentDate ? format(formData.enrollmentDate, "PPP") : "Select enrollment date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.enrollmentDate}
                            onSelect={(date) => handleInputChange('enrollmentDate', date)}
                            disabled={(date) => date > new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="learnerPhone">Phone Number</Label>
                        <Input
                          id="learnerPhone"
                          placeholder="+254 700 000 000"
                          value={formData.learnerPhone}
                          onChange={(e) => handleInputChange('learnerPhone', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="learnerEmail">Email</Label>
                        <div className="flex gap-2">
                          <Input
                            id="learnerEmail"
                            placeholder="learner@stevens.edu"
                            value={formData.learnerEmail}
                            onChange={(e) => handleInputChange('learnerEmail', e.target.value)}
                          />
                          <Button type="button" variant="outline" onClick={generateUsername}>
                            Generate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Guardian Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">2️⃣ Guardian Information (Auto-Link on Creation)</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianFullName">Guardian Full Name</Label>
                        <Input
                          id="guardianFullName"
                          placeholder="Enter guardian's full name"
                          value={formData.guardianFullName}
                          onChange={(e) => handleInputChange('guardianFullName', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian Phone Number *</Label>
                        <Input
                          id="guardianPhone"
                          placeholder="+254 700 000 000"
                          value={formData.guardianPhone}
                          onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">Used as guardian login credential</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianEmail">Guardian Email</Label>
                        <Input
                          id="guardianEmail"
                          placeholder="guardian@example.com"
                          value={formData.guardianEmail}
                          onChange={(e) => handleInputChange('guardianEmail', e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">Used as guardian username (auto-generated if empty)</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guardianRelationship">Relationship to Learner</Label>
                        <Select value={formData.guardianRelationship} onValueChange={(value) => handleInputChange('guardianRelationship', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="sibling">Sibling</SelectItem>
                            <SelectItem value="other">Other (Specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Conditional "Other (Specify)" input field */}
                    {formData.guardianRelationship === 'other' && (
                      <div className="space-y-2">
                        <Label htmlFor="guardianRelationshipOther">Please specify relationship</Label>
                        <Input
                          id="guardianRelationshipOther"
                          placeholder="e.g., Uncle, Aunt, Grandparent"
                          value={formData.guardianRelationshipOther}
                          onChange={(e) => handleInputChange('guardianRelationshipOther', e.target.value)}
                        />
                      </div>
                    )}

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Upon submission, both learner and guardian accounts will be created automatically. 
                        If a guardian account already exists for the provided phone/email, it will be linked instead of duplicated.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Standard User Forms */}
              {(userType === 'educator' || userType === 'guardian') && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="user@stevens.edu"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        placeholder="+254 700 000 000"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="Enter address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>
                  </div>

                  {userType === 'educator' && (
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject/Department</Label>
                      <Input
                        id="subject"
                        placeholder="e.g., Mathematics, English, Science"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      />
                    </div>
                  )}

                  {userType === 'guardian' && (
                    <div className="space-y-2">
                      <Label htmlFor="classAssigned">Child's Class/Grade</Label>
                      <Select value={formData.classAssigned} onValueChange={(value) => handleInputChange('classAssigned', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade-1">Grade 1</SelectItem>
                          <SelectItem value="grade-2">Grade 2</SelectItem>
                          <SelectItem value="grade-3">Grade 3</SelectItem>
                          <SelectItem value="grade-4">Grade 4</SelectItem>
                          <SelectItem value="grade-5">Grade 5</SelectItem>
                          <SelectItem value="grade-6">Grade 6</SelectItem>
                          <SelectItem value="grade-7">Grade 7</SelectItem>
                          <SelectItem value="grade-8">Grade 8</SelectItem>
                          <SelectItem value="form-1">Form 1</SelectItem>
                          <SelectItem value="form-2">Form 2</SelectItem>
                          <SelectItem value="form-3">Form 3</SelectItem>
                          <SelectItem value="form-4">Form 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              )}

              {/* Form Actions */}
              {userType && (
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    {userType === 'learner' ? 'Create Learner & Guardian Accounts' : `Create ${userType.charAt(0).toUpperCase() + userType.slice(1)} Account`}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Clear Form
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Email Preview Modal */}
        <EmailPreviewModal
          isOpen={showEmailPreview}
          onClose={handleEmailPreviewClose}
          userType={userType as 'learner' | 'educator' | 'guardian'}
          userData={formData}
        />
      </div>
    </AdminLayout>
  );
};

export default CreateUser;


import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { submitAdmissionsApplication, uploadAdmissionsDocument, type ContactInfo } from "@/services/supabase/submitAdmissionsApplication";

const admissionsFormSchema = z.object({
  applicant_name: z.string().min(2, "Applicant name must be at least 2 characters"),
  parent_name: z.string().min(2, "Parent/Guardian name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().optional(),
  grade_applied_for: z.string().min(1, "Please select a grade"),
  message: z.string().optional(),
  document: z.any().optional(),
});

type AdmissionsFormData = z.infer<typeof admissionsFormSchema>;

const gradeOptions = [
  "Nursery",
  "Pre-K",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8"
];

const AdmissionsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<AdmissionsFormData>({
    resolver: zodResolver(admissionsFormSchema),
    defaultValues: {
      applicant_name: "",
      parent_name: "",
      email: "",
      phone: "",
      address: "",
      grade_applied_for: "",
      message: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: AdmissionsFormData) => {
    setIsSubmitting(true);
    try {
      const contact_info: ContactInfo = {
        email: data.email,
        phone: data.phone,
        address: data.address,
      };

      const applicationData = {
        applicant_name: data.applicant_name,
        parent_name: data.parent_name,
        contact_info,
        grade_applied_for: data.grade_applied_for,
        message: data.message,
      };

      // Submit application first
      await submitAdmissionsApplication(applicationData);

      // Upload document if provided
      if (selectedFile) {
        try {
          const applicationId = crypto.randomUUID();
          await uploadAdmissionsDocument(selectedFile, applicationId);
        } catch (uploadError) {
          console.error('Document upload failed:', uploadError);
          // Application was still submitted successfully
        }
      }

      toast.success("Application submitted successfully! We'll contact you soon.");
      form.reset();
      setSelectedFile(null);
    } catch (error) {
      console.error('Admissions form submission error:', error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Admissions Application</CardTitle>
        <CardDescription>
          Apply for admission to Stevens Integrated Schools. Fill out all required fields.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="applicant_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Applicant's Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Student's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parent_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent/Guardian Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Parent or guardian's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+234 xxx xxx xxxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade_applied_for"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade Applied For</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {gradeOptions.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional information or questions..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">Supporting Documents (Optional)</label>
              <Input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              {selectedFile && (
                <p className="text-sm text-gray-600">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AdmissionsForm;

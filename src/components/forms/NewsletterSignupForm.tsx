
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { submitNewsletterSignup, type NewsletterSignupData } from '@/services/supabase/submitNewsletterSignup';

const NewsletterSignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterSignupData>();

  const onSubmit = async (data: NewsletterSignupData) => {
    setIsLoading(true);
    
    try {
      await submitNewsletterSignup(data);
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      reset();
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      // Handle duplicate email error
      if (error?.code === '23505' || error?.message?.includes('duplicate')) {
        errorMessage = "This email is already subscribed to our newsletter.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <Alert variant="destructive">
            <AlertDescription>{errors.email.message}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </Button>
    </form>
  );
};

export default NewsletterSignupForm;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { submitTourRequest, type TourRequestData } from '@/services/supabase/submitTourRequest';

const TourBookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TourRequestData>();

  const onSubmit = async (data: TourRequestData) => {
    setIsLoading(true);
    
    try {
      await submitTourRequest(data);
      
      toast({
        title: "Tour Request Submitted!",
        description: "Thank you for your interest. We'll contact you soon to schedule your tour.",
      });
      
      reset();
    } catch (error: any) {
      console.error('Tour request error:', error);
      
      let errorMessage = "Failed to submit tour request. Please try again.";
      
      // Handle specific validation errors
      if (error?.message?.includes('violates check constraint')) {
        errorMessage = "Please check your input and try again.";
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...register('name', {
              required: 'Full name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <Alert variant="destructive">
              <AlertDescription>{errors.name.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone', {
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <Alert variant="destructive">
              <AlertDescription>{errors.phone.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferred_date">Preferred Date (optional)</Label>
          <Input
            id="preferred_date"
            type="date"
            {...register('preferred_date')}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your specific interests or any questions you have..."
          rows={4}
          {...register('message', {
            maxLength: {
              value: 500,
              message: 'Message must be less than 500 characters'
            }
          })}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <Alert variant="destructive">
            <AlertDescription>{errors.message.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full"
        size="lg"
      >
        {isLoading ? 'Submitting Request...' : 'Request Tour'}
      </Button>
    </form>
  );
};

export default TourBookingForm;

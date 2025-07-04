
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface DatePickerWithRangeProps {
  date: any;
  setDate: (date: any) => void;
  className?: string;
}

export const DatePickerWithRange: React.FC<DatePickerWithRangeProps> = ({ 
  date, 
  setDate, 
  className 
}) => {
  return (
    <Button variant="outline" className={className}>
      <Calendar className="mr-2 h-4 w-4" />
      Select Date Range
    </Button>
  );
};

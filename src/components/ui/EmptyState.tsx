
import { FileX } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  icon?: React.ReactNode;
}

const EmptyState = ({ 
  message = "No data available", 
  icon 
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      {icon || <FileX className="h-12 w-12 text-gray-400" />}
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  );
};

export default EmptyState;

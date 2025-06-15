
import React, { useState, useEffect } from 'react';
import { Mail, User } from 'lucide-react';
import { fetchStaffProfiles, type StaffProfile } from '@/services/supabase/fetchStaffProfiles';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import OptimizedImage from '@/components/ui/OptimizedImage';

const StaffDirectory = () => {
  const [staff, setStaff] = useState<StaffProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  useEffect(() => {
    const loadStaff = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStaffProfiles();
        setStaff(data);
      } catch (err) {
        setError('Failed to load staff profiles');
        console.error('Error loading staff profiles:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadStaff();
  }, []);

  const departments = ['all', ...Array.from(new Set(staff.map(member => member.department).filter(Boolean)))];
  
  const filteredStaff = selectedDepartment === 'all' 
    ? staff 
    : staff.filter(member => member.department === selectedDepartment);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators and staff committed to providing excellence in education.
          </p>
        </div>

        {departments.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === department
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
              >
                {department === 'all' ? 'All Departments' : department}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredStaff.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No staff profiles available.
            </div>
          ) : (
            filteredStaff.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {member.photo_url ? (
                    <OptimizedImage
                      src={member.photo_url}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  ) : (
                    <User className="h-20 w-20 text-gray-400" />
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-blue-700 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.title}
                  </p>
                  {member.department && (
                    <p className="text-sm text-gray-500 mb-3">
                      {member.department}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StaffDirectory;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. We will get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | Stevens Integrated Schools</title>
        <meta name="description" content="Get in touch with Stevens Integrated Schools. Contact our admissions team or visit our Nairobi and Kitengela campuses." />
      </Helmet>

      <div className="bg-blue-900 py-16 md:py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Contact Us</h1>
          <p className="text-blue-100 mt-4 text-center md:text-left max-w-2xl">
            We'd love to hear from you. Get in touch with any questions about admissions, our curriculum, or campus visits.
          </p>
        </div>
      </div>
      
      <main className="container py-8 md:py-12 flex-grow">
        <div className="flex justify-center mb-6 md:mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-serif text-blue-800">Get in Touch</CardTitle>
              <CardDescription>We'd love to hear from you and answer any questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Branch Contacts</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-800">Nairobi Branch:</p>
                      <a 
                        href="tel:+254712345678"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        +254 712 345 678
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Kitengela Branch:</p>
                      <a 
                        href="tel:+254798765432"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        +254 798 765 432
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:stevensintegratedschools@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    stevensintegratedschools@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Our Campuses</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-gray-800">Nairobi Campus</p>
                      <p className="text-gray-600">Imara Daima, Nairobi</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Kitengela Campus</p>
                      <p className="text-gray-600">Airview, Kitengela</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-serif text-blue-800">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What is this regarding?"
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[120px] w-full rounded-md border resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-md px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;

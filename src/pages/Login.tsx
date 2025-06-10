
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Login | Stevens Integrated Schools</title>
        <meta name="description" content="Login to access your Stevens Integrated Schools portal." />
      </Helmet>

      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl">Welcome Back</CardTitle>
              <CardDescription>Login to access your portal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full">Login</Button>
              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot your password?
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact Support</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;

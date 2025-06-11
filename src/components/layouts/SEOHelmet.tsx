
import { Helmet } from "react-helmet-async";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHelmet = ({ 
  title = "Stevens Integrated Schools | Stars of Excellence",
  description = "Stevens Integrated Schools - Nurturing excellence in education through CBC curriculum across our Nairobi and Kitengela campuses. Quality education for kindergarten through junior school.",
  keywords = "Stevens Integrated Schools, CBC curriculum, quality education Kenya, Nairobi schools, Kitengela schools, private schools Kenya",
  image = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&h=630&q=80",
  url = "https://stevensschools.com"
}: SEOHelmetProps) => {
  const fullTitle = title.includes("Stevens Integrated Schools") ? title : `${title} | Stevens Integrated Schools`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph tags for social media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Stevens Integrated Schools" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional meta tags */}
      <meta name="author" content="Stevens Integrated Schools" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data for search engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Stevens Integrated Schools",
          "alternateName": "Stars of Excellence",
          "description": description,
          "url": url,
          "logo": "https://stevensschools.com/logo.png",
          "address": [
            {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressRegion": "Nairobi County",
              "addressCountry": "Kenya",
              "streetAddress": "Imara Daima"
            },
            {
              "@type": "PostalAddress", 
              "addressLocality": "Kitengela",
              "addressRegion": "Kajiado County",
              "addressCountry": "Kenya",
              "streetAddress": "Airview"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254-123-456-789",
            "email": "stevensintegratedschools@gmail.com",
            "contactType": "admissions"
          },
          "sameAs": [
            "https://facebook.com/stevensschools",
            "https://instagram.com/stevensschools"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;

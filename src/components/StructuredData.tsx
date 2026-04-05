const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MBR Vastukalp",
        "alternateName": "MBR Construction Services",
        "url": "https://mbrvastukalp.com",
        "logo": "https://mbrvastukalp.com/logo.png",
        "description": "Expert construction, renovation, and maintenance services in Mumbai with 30+ years of experience",
        "email": "mbrvastukalp@gmail.com",
        "telephone": ["+91-982128-2719", "+91-86198-63180"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.0760",
            "longitude": "72.8777"
        },
        "sameAs": [
            "https://www.instagram.com/mbr_vastukalp",
            "https://www.linkedin.com/in/mbr-vastukalp-436b213a6"
        ],
        "founder": [
            {
                "@type": "Person",
                "name": "Mahendra Rajak",
                "jobTitle": "Founder & CEO"
            },

            {
                "@type": "Person",
                "name": "Er. Vikas Kumar",
                "jobTitle": "Co-Founder & Technical Director"
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "MBR Vastukalp",
        "image": "https://mbrvastukalp.com/logo.png",
        "@id": "https://mbrvastukalp.com",
        "url": "https://mbrvastukalp.com",
        "telephone": "+91-982128-2719",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0760,
            "longitude": 72.8777
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3000"
        }
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Construction and Renovation Services",
        "provider": {
            "@type": "Organization",
            "name": "MBR Vastukalp"
        },
        "areaServed": {
            "@type": "City",
            "name": "Mumbai"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Civil Structure Repairing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Demolition Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Electrical Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Plumbing Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Painting Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "HVAC Services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Carpentry Services"
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
        </>
    );
};

export default StructuredData;


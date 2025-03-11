import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      price: "Custom Quote",
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure for your enterprise",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      price: "Starting at $999/mo",
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security measures",
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0",
      price: "Starting at $1,499/mo",
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: "Starting at $799/mo",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Link href="/contact">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your business goals
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

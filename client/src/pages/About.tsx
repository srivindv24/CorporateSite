import { Card, CardContent } from "@/components/ui/card";
import { Users2, Target, Building2 } from "lucide-react";

export default function About() {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      name: "Emily Brown",
      role: "COO",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              To empower businesses through innovative technology solutions that drive growth,
              efficiency, and success in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Users2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize our clients' success above all else
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to deliver cutting-edge solutions
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  Operating with transparency and ethical principles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <Card key={leader.name}>
                <CardContent className="pt-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-muted-foreground">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

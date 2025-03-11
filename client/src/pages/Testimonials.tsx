import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote } from "lucide-react";

function TestimonialSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              See what our clients say about working with us
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <p>Error loading testimonials</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials?.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-lg mb-6">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

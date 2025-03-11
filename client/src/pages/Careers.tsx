import { useQuery } from "@tanstack/react-query";
import { type Career } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

function CareerSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="h-8 w-2/3 mb-4" />
        <Skeleton className="h-4 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}

export default function Careers() {
  const { data: careers, isLoading, error } = useQuery<Career[]>({
    queryKey: ["/api/careers"],
  });

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-muted-foreground">
              Join our team and help shape the future of technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid gap-8">
              {[...Array(3)].map((_, i) => (
                <CareerSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <p>Error loading career opportunities</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {careers?.map((career) => (
                <Card key={career.id}>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{career.title}</h2>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>{career.department}</span>
                      <span>•</span>
                      <span>{career.location}</span>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {career.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {career.requirements}
                        </p>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button>Apply Now</Button>
                    </Link>
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

import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

function BlogPostSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Latest insights and updates from our team
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid gap-8">
              {[...Array(3)].map((_, i) => (
                <BlogPostSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <p>Error loading blog posts</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts?.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      By {post.author} on{" "}
                      {format(new Date(post.createdAt), "MMMM d, yyyy")}
                    </p>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {post.content}
                    </p>
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

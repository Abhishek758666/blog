import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    tags: string[];
    likes: number;
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${blog.slug}`} className="hover:underline">
            {blog.title}
          </Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground">{blog.date}</div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{blog.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Heart className="h-4 w-4" />
          <span>{blog.likes}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

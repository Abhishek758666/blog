import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for related posts
const RELATED_POSTS = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    date: "April 25, 2023",
    tags: ["React", "JavaScript", "Web Development"],
    slug: "getting-started-with-react",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns to improve your code quality.",
    date: "May 12, 2023",
    tags: ["TypeScript", "Programming", "Advanced"],
    slug: "advanced-typescript-patterns",
  },
  {
    id: 3,
    title: "CSS Grid Layout Mastery",
    excerpt: "Master CSS Grid Layout and create complex layouts with ease.",
    date: "June 15, 2023",
    tags: ["CSS", "Web Development", "Design"],
    slug: "css-grid-layout-mastery",
  },
]

interface RelatedPostsProps {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  // Filter out the current post
  const filteredPosts = RELATED_POSTS.filter((post) => post.slug !== currentSlug)

  return (
    <div className="grid gap-6 pt-6 md:grid-cols-3">
      {filteredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <Link href={`/blogs/${post.slug}`} className="hover:underline">
              <h3 className="font-bold text-lg line-clamp-2">{post.title}</h3>
            </Link>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{post.tags.length - 2} more
              </Badge>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

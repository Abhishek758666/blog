import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for related articles
const RELATED_ARTICLES = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next After React?",
    excerpt:
      "Explore the emerging technologies and frameworks that might replace or complement React in the coming years.",
    date: "Apr 25",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=200&width=300",
    slug: "future-of-web-development",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns You Should Know",
    excerpt:
      "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code.",
    date: "May 12",
    readTime: "6 min read",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=200&width=300",
    slug: "advanced-typescript-patterns",
  },
  {
    id: 3,
    title: "CSS Grid Layout: A Comprehensive Guide",
    excerpt:
      "Master CSS Grid Layout with this comprehensive guide covering everything from basics to advanced techniques.",
    date: "Jun 15",
    readTime: "7 min read",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=200&width=300",
    slug: "css-grid-layout-guide",
  },
];

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  // Filter out the current article
  const filteredArticles = RELATED_ARTICLES.filter(
    (article) => article.slug !== currentSlug
  );

  return (
    <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredArticles.map((article) => (
        <div key={article.id} className="space-y-3">
          <Link
            href={`/blogs/${article.slug}`}
            className="block overflow-hidden rounded-lg"
          >
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
              />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>
          <Link href={`/blogs/${article.slug}`} className="hover:underline">
            <h3 className="font-serif text-lg font-bold line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{article.date}</span>
            <span className="mx-1">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { FeaturedArticle } from "@/components/featured-article";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

// Mock data for articles
const ARTICLES = [
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
    tags: ["Programming", "Web Development", "React"],
    slug: "future-of-web-development",
    image: "/placeholder.svg?height=200&width=300",
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
    tags: ["TypeScript", "Programming", "Advanced"],
    slug: "advanced-typescript-patterns",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Building a Blog with Next.js and Tailwind CSS",
    excerpt:
      "A step-by-step guide to creating a modern blog using Next.js and styling it with Tailwind CSS.",
    date: "Jun 3",
    readTime: "10 min read",
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Next.js", "React", "Tailwind CSS"],
    slug: "building-a-blog-with-nextjs",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "CSS Grid Layout: A Comprehensive Guide",
    excerpt:
      "Master CSS Grid Layout with this comprehensive guide covering everything from basics to advanced techniques.",
    date: "Jun 15",
    readTime: "7 min read",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["CSS", "Web Development", "Design"],
    slug: "css-grid-layout-guide",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Introduction to GraphQL: A Better Way to API",
    excerpt:
      "Learn why GraphQL is becoming the preferred choice for building APIs and how it differs from REST.",
    date: "Jul 2",
    readTime: "8 min read",
    author: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["GraphQL", "API", "Web Development"],
    slug: "introduction-to-graphql",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "The Complete Guide to State Management in React Applications",
    excerpt:
      "Explore different state management solutions for React applications, from Context API to Redux and beyond.",
    date: "Jul 18",
    readTime: "12 min read",
    author: {
      name: "Alex Turner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["React", "State Management", "JavaScript"],
    slug: "state-management-in-react",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// Get all unique tags
const ALL_TAGS = Array.from(
  new Set(ARTICLES.flatMap((article) => article.tags))
);

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");

  // Filter articles based on search query and selected tags
  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => article.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  // Sort articles based on sortBy value
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "a-z") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Articles
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="a-z">A-Z</SelectItem>
                  <SelectItem value="z-a">Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer rounded-full"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Badge
                  variant="outline"
                  className="cursor-pointer rounded-full"
                  onClick={() => setSelectedTags([])}
                >
                  Clear all
                </Badge>
              )}
            </div>
            <Separator />
            <div className="space-y-12">
              {sortedArticles.map((article) => (
                <FeaturedArticle
                  key={article.id}
                  author={article.author}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  readTime={article.readTime}
                  image={article.image}
                  tags={article.tags}
                  slug={article.slug}
                />
              ))}
              {sortedArticles.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-lg font-medium">No articles found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

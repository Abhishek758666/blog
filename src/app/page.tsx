"use client";

import { useState } from "react";
import { FeaturedArticle } from "@/components/featured-article";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { PopularTags } from "@/components/popular-tags";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Pagination } from "@/components/pagination";
import Link from "next/link";

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
  {
    id: 7,
    title: "Mastering CSS Animations and Transitions",
    excerpt:
      "Learn how to create smooth, performant animations and transitions using CSS to enhance your web applications.",
    date: "Aug 5",
    readTime: "9 min read",
    author: {
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["CSS", "Animation", "Web Development"],
    slug: "mastering-css-animations",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Understanding Web Accessibility: A Comprehensive Guide",
    excerpt:
      "Discover how to make your websites accessible to everyone, including people with disabilities.",
    date: "Aug 20",
    readTime: "11 min read",
    author: {
      name: "Robert Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Accessibility", "Web Development", "HTML"],
    slug: "understanding-web-accessibility",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    title: "The Power of Server Components in Next.js",
    excerpt:
      "Explore how Server Components in Next.js can improve performance and developer experience.",
    date: "Sep 10",
    readTime: "10 min read",
    author: {
      name: "Thomas Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Next.js", "React", "Server Components"],
    slug: "power-of-server-components",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(ARTICLES.length / ITEMS_PER_PAGE);

  // Get current articles
  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = ARTICLES.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto max-w-[1200px] px-4 py-10 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                  Latest Articles
                </h1>
                <p className="text-xl text-muted-foreground">
                  Discover stories, thinking, and expertise from writers on any
                  topic.
                </p>
              </div>
              <div className="space-y-12">
                {currentArticles.map((article) => (
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
              </div>
              <div className="py-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
                  <h3 className="font-serif text-xl font-bold">
                    Discover more of what matters to you
                  </h3>
                  <div className="mt-4">
                    <PopularTags />
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/tags"
                      className="text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      See more topics
                    </Link>
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
                  <h3 className="font-serif text-xl font-bold">
                    Stay up to date
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Get the latest articles and insights delivered to your
                    inbox.
                  </p>
                  <div className="mt-4">
                    <NewsletterSignup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

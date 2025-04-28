"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { RelatedArticles } from "@/components/related-articles";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommentsSection } from "@/components/comments-section";
import { useParams } from "next/navigation";

const ARTICLE = {
  title: "Building a Blog with Next.js",
  excerpt:
    "A step-by-step guide to building a blog with Next.js and Tailwind CSS.",
  date: "Jun 3, 2023",
  readTime: "10 min read",
  author: {
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Full-stack developer specializing in React and Next.js. Writing about web development, JavaScript, and UI/UX design.",
  },
  tags: ["Next.js", "React", "Tailwind CSS"],
  content: `
    <p>Next.js has become one of the most popular React frameworks for building modern web applications. Its server-side rendering capabilities, file-based routing, and built-in optimizations make it an excellent choice for building blogs and content-heavy websites.</p>
    
    <h2>Why Next.js for Blogs?</h2>
    
    <p>There are several reasons why Next.js is a great choice for building a blog:</p>
    
    <ul>
      <li><strong>SEO-friendly</strong>: Server-side rendering ensures that search engines can crawl and index your content.</li>
      <li><strong>Performance</strong>: Automatic code splitting, image optimization, and other built-in optimizations ensure fast loading times.</li>
      <li><strong>Developer Experience</strong>: The file-based routing system and the ability to mix server and client components make development a breeze.</li>
    </ul>
    
    <h2>Getting Started</h2>
    
    <p>To get started with Next.js, you need to have Node.js installed on your machine. Then, you can create a new Next.js project using the following command:</p>
    
    <pre><code>npx create-next-app my-blog</code></pre>
    
    <p>This will create a new Next.js project with all the necessary files and dependencies. You can then navigate to the project directory and start the development server:</p>
    
    <pre><code>cd my-blog
npm run dev</code></pre>
    
    <h2>Adding Tailwind CSS</h2>
    
    <p>Tailwind CSS is a utility-first CSS framework that makes it easy to build beautiful and responsive user interfaces. To add Tailwind CSS to your Next.js project, you can use the following command:</p>
    
    <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
    
    <p>This will install Tailwind CSS and its dependencies, and create the necessary configuration files. You then need to configure Tailwind CSS to scan your project files for classes:</p>
    
    <pre><code>// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
    
    <p>Finally, you need to add the Tailwind CSS directives to your CSS file:</p>
    
    <pre><code>/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
    
    <h2>Creating Blog Posts</h2>
    
    <p>With Next.js, you can create blog posts using Markdown files or by fetching data from a CMS. For simplicity, let's use Markdown files. First, you need to install the necessary dependencies:</p>
    
    <pre><code>npm install gray-matter remark remark-html</code></pre>
    
    <p>Then, you can create a <code>posts</code> directory in the root of your project and add your Markdown files there. Each Markdown file should have a frontmatter section with metadata about the post:</p>
    
    <pre><code>---
title: 'Building a Blog with Next.js'
excerpt: 'A step-by-step guide to building a blog with Next.js and Tailwind CSS.'
date: '2023-06-03'
author: 'Emily Rodriguez'
tags: ['Next.js', 'React', 'Tailwind CSS']
---

Next.js has become one of the most popular React frameworks for building modern web applications...</code></pre>
    
    <h2>Conclusion</h2>
    
    <p>Building a blog with Next.js and Tailwind CSS is a great way to create a fast, SEO-friendly, and beautiful website. With the file-based routing system and the ability to mix server and client components, you can create a blog that is both easy to develop and maintain.</p>
  `,
};

const formatContent = (html: string) => {
  // 1. Basic HTML sanitization (allow only specific tags)
  const sanitized = html
    // Remove disallowed tags while keeping their content
    .replace(
      /<\/?(?!h1|h2|h3|p|pre|code|ul|ol|li|strong|em|a|br)([a-z][a-z0-9]*)[^>]*?>/gi,
      ""
    )
    // Secure anchor tags
    .replace(
      /<a\s+(?:[^>]*?\s+)?href=("(?!javascript:)[^"]*"|'(?!javascript:)[^']*'|[^"'>\s]+)/gi,
      "<a $1>"
    );

  // 2. Add code block classes
  return (
    sanitized
      .replace(/<pre(\s*?)>/g, (_, space) => `<pre${space} class="code-block">`)
      .replace(
        /<code(\s*?)>/g,
        (_, space) => `<code${space}class="inline-code">`
      )
      // Clean up any unwanted attributes
      .replace(/<(\w+)(?:\s+[^>]*?)?>/g, (match, tag) => {
        const allowedAttributes: Record<string, string[]> = {
          a: ["href"],
          pre: ["class"],
          code: ["class"],
          img: ["src", "alt"],
        };

        const attributes = match
          .slice(tag.length + 1, -1)
          .split(/\s+/)
          .filter((attr) => {
            const [name] = attr.split("=");
            return allowedAttributes[tag]?.includes(name.toLowerCase());
          })
          .join(" ");

        return `<${tag}${attributes ? " " + attributes : ""}>`;
      })
  );
};

export default function BlogPage() {
  const { slug } = useParams();
  const processedContent = formatContent(ARTICLE.content);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/articles"
              className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 size-4" />
              All articles
            </Link>
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {ARTICLE.title}
              </h1>
              <p className="text-xl text-muted-foreground">{ARTICLE.excerpt}</p>
              <div className="flex items-center space-x-4">
                <Avatar className="size-12">
                  <AvatarImage
                    src={ARTICLE.author.avatar || "/placeholder.svg"}
                    alt={ARTICLE.author.name}
                  />
                  <AvatarFallback>
                    {ARTICLE.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{ARTICLE.author.name}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{ARTICLE.date}</span>
                    <span className="mx-1">·</span>
                    <span>{ARTICLE.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {ARTICLE.tags.map((tag) => (
                  <Link key={tag} href={`/articles?tag=${tag}`}>
                    <Badge variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative my-8 h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=1000"
                alt="Article cover"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: processedContent }}
              // dangerouslySetInnerHTML={{ __html: ARTICLE.content }}
            />
            <Separator className="my-12" />
            <div className="flex items-center space-x-4">
              <Avatar className="size-16">
                <AvatarImage
                  src={ARTICLE.author.avatar || "/placeholder.svg"}
                  alt={ARTICLE.author.name}
                />
                <AvatarFallback>{ARTICLE.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-serif text-xl font-bold">
                  Written by {ARTICLE.author.name}
                </div>
                <p className="text-muted-foreground">{ARTICLE.author.bio}</p>
              </div>
            </div>

            {/* Add the comments section here */}
            <div className="my-12">
              <CommentsSection articleSlug={slug as string} />
            </div>

            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h2 className="font-serif text-2xl font-bold">
                Subscribe to our newsletter
              </h2>
              <p className="mt-2 text-muted-foreground">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="mt-4">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </article>
        <section className="border-t bg-muted/40 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-serif text-2xl font-bold">
                More articles like this
              </h2>
              <RelatedArticles currentSlug={slug as string} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

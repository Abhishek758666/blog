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
  content: `<h1>The Most Important Design Pattern in React: The Container-Presenter Pattern</h1><h1><br></h1><p>When you're building React apps,&nbsp;<strong>organizing your components well</strong>&nbsp;can make a huge difference. One design pattern that stands out, especially in larger applications, is the&nbsp;<strong>Container-Presenter Pattern</strong>&nbsp;(sometimes called Smart-Dumb Components). Let's dive into what it is, why it matters, and how you can use it.</p><p><br></p><h2>What is the Container-Presenter Pattern?</h2><p><br></p><p><br></p><pre class="ql-syntax" spellcheck="false">import React from 'react';

interface UserProfileProps {
name: string;
email: string;
}

const UserProfile: React.FC&lt;UserProfileProps&gt; = ({ name, email }) =&gt; {
return (
&lt;div className="p-4 border rounded-md shadow-md"&gt;
&lt;h2 className="text-xl font-bold"&gt;{name}&lt;/h2&gt;
&lt;p className="text-gray-600"&gt;{email}&lt;/p&gt;
&lt;/div&gt;
);
};
export default UserProfile;
</pre><p><br></p><p><br></p>
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
              <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-4xl">
                {ARTICLE.title}
              </h1>
              <p className="text-muted-foreground">{ARTICLE.excerpt}</p>
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
                  <Link key={tag} href={`/blogs?tag=${tag}`}>
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
              className="raw prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
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

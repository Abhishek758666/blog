"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { blogData } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Get recent blogs (latest 5)
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Get all unique tags
  const allTags = Array.from(new Set(blogData.flatMap((blog) => blog.tags)));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-8 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-0 top-0 h-10 rounded-l-none"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentBlogs.map((blog) => (
              <li key={blog.id}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="block hover:underline"
                >
                  <div className="font-medium">{blog.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {blog.date}
                  </div>
                </Link>
                {blog !== recentBlogs[recentBlogs.length - 1] && (
                  <Separator className="mt-2" />
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

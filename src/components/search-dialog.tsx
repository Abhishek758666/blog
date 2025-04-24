"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { blogData } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function SearchDialog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof blogData>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredResults = blogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.content.toLowerCase().includes(query.toLowerCase()) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filteredResults);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for posts..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {searchResults.length > 0 ? (
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {searchResults.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="block p-2 hover:bg-accent rounded-md"
                >
                  <div className="font-medium">{blog.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {blog.excerpt}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-4 text-muted-foreground">
              No results found for &quote;{searchQuery}&quote;
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

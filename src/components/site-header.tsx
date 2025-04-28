"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blogs?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {!searchOpen ? (
          <>
            <Link href="/" className="font-serif text-2xl font-bold">
              Writewise
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="size-5" />
                <span className="sr-only">Search</span>
              </Button>
              <div className="hidden md:block relative w-64">
                <form onSubmit={handleSearch}>
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                </form>
              </div>
              <ModeToggle />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Get started
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex w-full items-center gap-2">
            <form onSubmit={handleSearch} className="flex-1">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(false)}
            >
              <X className="size-5" />
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

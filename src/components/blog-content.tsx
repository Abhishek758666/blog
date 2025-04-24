"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "../../lib/utils";

interface BlogContentProps {
  blog: {
    id: string;
    title: string;
    date: string;
    content: string;
    tags: string[];
    likes: number;
    image?: string;
  };
}

export function BlogContent({ blog }: BlogContentProps) {
  const [likes, setLikes] = useState(blog.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <h1 className="text-4xl font-bold">{blog.title}</h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
        </div>

        {blog.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose dark:prose-invert max-w-none">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`flex items-center gap-1 ${
              hasLiked ? "text-red-500" : ""
            }`}
            onClick={handleLike}
          >
            <Heart
              className="h-4 w-4"
              fill={hasLiked ? "currentColor" : "none"}
            />
            <span>{likes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

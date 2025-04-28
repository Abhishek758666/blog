"use client";

import { useState } from "react";
import { CommentForm } from "@/components/comment-form";
import { CommentList } from "@/components/comment-list";
import type { CommentType } from "@/components/comment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock data for comments
const MOCK_COMMENTS: CommentType[] = [
  {
    id: "1",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "This is a fantastic article! I've been using Next.js for a while now, and I completely agree with your points about its server-side rendering capabilities. It's made a huge difference in the performance of my applications.",
    createdAt: "2023-06-05T12:30:00Z",
    likes: 24,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Maria Garcia",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I agree! Have you tried using the new App Router? It's been a game-changer for how I structure my applications.",
        createdAt: "2023-06-05T13:45:00Z",
        likes: 8,
        isLiked: true,
        replies: [
          {
            id: "1-1-1",
            author: {
              name: "Alex Johnson",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            content:
              "Yes, I've been migrating my projects to the App Router. The nested layouts and server components are amazing!",
            createdAt: "2023-06-05T14:20:00Z",
            likes: 4,
            isLiked: false,
          },
        ],
      },
      {
        id: "1-2",
        author: {
          name: "James Wilson",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "Do you have any resources you'd recommend for someone just getting started with Next.js?",
        createdAt: "2023-06-05T15:10:00Z",
        likes: 3,
        isLiked: false,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Sophia Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "I found your section on adding Tailwind CSS particularly helpful. The step-by-step instructions made it easy to follow along. I was able to set it up in my project in minutes!",
    createdAt: "2023-06-06T09:15:00Z",
    likes: 17,
    isLiked: true,
  },
  {
    id: "3",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "One thing I'd add is that using a CMS like Contentful or Sanity with Next.js can make managing blog content even easier. Have you tried any headless CMS solutions with your Next.js blogs?",
    createdAt: "2023-06-07T11:05:00Z",
    likes: 9,
    isLiked: false,
    replies: [
      {
        id: "3-1",
        author: {
          name: "Emily Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I've been using Sanity with Next.js and it's been a great experience. The GROQ query language is powerful once you get used to it.",
        createdAt: "2023-06-07T12:30:00Z",
        likes: 6,
        isLiked: false,
      },
    ],
  },
];

interface CommentsSectionProps {
  articleSlug: string;
}

export function CommentsSection({ articleSlug }: CommentsSectionProps) {
  const [comments] = useState(MOCK_COMMENTS);
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="space-y-6">
      <Separator />
      <h2 className="font-serif text-2xl font-bold">Discussion</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="comments">
            Comments ({comments.length})
          </TabsTrigger>
          <TabsTrigger value="write">Write a comment</TabsTrigger>
        </TabsList>
        <TabsContent value="comments" className="mt-6">
          <CommentList comments={comments} articleSlug={articleSlug} />
        </TabsContent>
        <TabsContent value="write" className="mt-6">
          <CommentForm
            articleSlug={articleSlug}
            onSuccess={() => setActiveTab("comments")}
            placeholder="Share your thoughts on this article..."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

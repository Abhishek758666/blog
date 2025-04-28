"use client"

import { useState } from "react"
import { Comment, type CommentType } from "@/components/comment"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CommentListProps {
  comments: CommentType[]
  articleSlug: string
}

export function CommentList({ comments, articleSlug }: CommentListProps) {
  const [sortBy, setSortBy] = useState("newest")

  // Sort comments based on sortBy value
  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    } else {
      // Most liked
      return b.likes - a.likes
    }
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-bold">{comments.length} Comments</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
            <SelectItem value="liked">Most liked</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <Comment key={comment.id} comment={comment} articleSlug={articleSlug} />
        ))}
      </div>
    </div>
  )
}

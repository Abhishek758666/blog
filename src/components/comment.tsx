"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, MoreHorizontal } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { CommentForm } from "@/components/comment-form"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export interface CommentType {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  likes: number
  isLiked?: boolean
  replies?: CommentType[]
}

interface CommentProps {
  comment: CommentType
  articleSlug: string
  level?: number
}

export function Comment({ comment, articleSlug, level = 0 }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [isLiked, setIsLiked] = useState(comment.isLiked || false)
  const [likesCount, setLikesCount] = useState(comment.likes)
  const [showReplies, setShowReplies] = useState(level < 2) // Auto-expand first two levels

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1)
    } else {
      setLikesCount((prev) => prev + 1)
    }
    setIsLiked(!isLiked)
  }

  const hasReplies = comment.replies && comment.replies.length > 0

  return (
    <div className="group">
      <div className="flex gap-3">
        <Avatar className="size-8">
          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8 opacity-0 group-hover:opacity-100">
                  <MoreHorizontal className="size-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-sm">{comment.content}</div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 px-2 ${isLiked ? "text-emerald-600" : ""}`}
              onClick={handleLike}
            >
              <Heart className={`mr-1 size-4 ${isLiked ? "fill-emerald-600" : ""}`} />
              {likesCount > 0 && likesCount}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => setIsReplying(!isReplying)}>
              <MessageSquare className="mr-1 size-4" />
              Reply
            </Button>
          </div>

          {isReplying && (
            <div className="mt-4">
              <CommentForm
                articleSlug={articleSlug}
                parentId={comment.id}
                onSuccess={() => setIsReplying(false)}
                onCancel={() => setIsReplying(false)}
                placeholder="Write a reply..."
                isReply
              />
            </div>
          )}

          {hasReplies && (
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="mb-2 size-7 px-2 text-xs"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies
                  ? `Hide ${comment.replies!.length} ${comment.replies!.length === 1 ? "reply" : "replies"}`
                  : `Show ${comment.replies!.length} ${comment.replies!.length === 1 ? "reply" : "replies"}`}
              </Button>

              {showReplies && (
                <div className="space-y-4 border-l-2 border-muted pl-4">
                  {comment.replies!.map((reply) => (
                    <Comment key={reply.id} comment={reply} articleSlug={articleSlug} level={level + 1} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

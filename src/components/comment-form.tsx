"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useToast } from "@/hooks/use-toast"

interface CommentFormProps {
  articleSlug: string;
  parentId?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  placeholder?: string;
  isReply?: boolean;
}

export function CommentForm({
  articleSlug,
  parentId,
  onSuccess,
  onCancel,
  placeholder = "What are your thoughts?",
  isReply = false,
}: CommentFormProps) {
  console.log(articleSlug, parentId);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  // Mock user data - in a real app, this would come from authentication
  const currentUser = {
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setComment("");
      // toast({
      //   title: isReply ? "Reply added" : "Comment added",
      //   description: "Your comment has been published successfully.",
      // });
      if (onSuccess) onSuccess();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <Avatar className="size-8">
          <AvatarImage
            src={currentUser.avatar || "/placeholder.svg"}
            alt={currentUser.name}
          />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder={placeholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        {isReply && onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={!comment.trim() || isSubmitting}>
          {isSubmitting ? "Publishing..." : isReply ? "Reply" : "Publish"}
        </Button>
      </div>
    </form>
  );
}

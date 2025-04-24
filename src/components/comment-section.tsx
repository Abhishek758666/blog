"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { commentsData } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "../../lib/utils";

interface Comment {
  id: string;
  blogId: string;
  parentId: string | null;
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  blogId: string;
}

export function CommentSection({ blogId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(
    commentsData.filter((comment) => comment.blogId === blogId)
  );
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      blogId,
      parentId: null,
      author: "You",
      content: newComment,
      date: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleAddReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: `comment-${Date.now()}`,
      blogId,
      parentId,
      author: "You",
      content: replyContent,
      date: new Date().toISOString(),
    };

    setComments([...comments, reply]);
    setReplyTo(null);
    setReplyContent("");
  };

  // Get top-level comments
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  // Get replies for a comment
  const getReplies = (commentId: string) => {
    return comments.filter((comment) => comment.parentId === commentId);
  };

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-2xl font-bold">Comments</h2>
      <Separator />

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Add a comment</h3>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddComment}>Post Comment</Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {topLevelComments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Avatar>
                  <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="font-semibold">{comment.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(comment.date)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{comment.content}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setReplyTo(replyTo === comment.id ? null : comment.id)
                  }
                >
                  Reply
                </Button>
              </CardFooter>

              {replyTo === comment.id && (
                <CardFooter className="pt-0">
                  <div className="w-full space-y-2">
                    <Textarea
                      placeholder="Write your reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setReplyTo(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleAddReply(comment.id)}
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              )}
            </Card>

            {/* Render replies */}
            <div className="ml-12 space-y-4">
              {getReplies(comment.id).map((reply) => (
                <Card key={reply.id}>
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <Avatar>
                      <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="font-semibold">{reply.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(reply.date)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{reply.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

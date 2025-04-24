"use client";
import { notFound, useParams } from "next/navigation";
import { BlogContent } from "@/components/blog-content";
import { CommentSection } from "@/components/comment-section";
import { blogData } from "@/lib/data";

export default function BlogPage() {
  const { slug } = useParams();
  console.log(slug);
  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <BlogContent blog={blog} />
      <CommentSection blogId={blog.id} />
    </div>
  );
}

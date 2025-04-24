import { Pagination } from "@/components/pagination";
import { BlogCard } from "@/components/blog-card";
import { blogData } from "@/lib/data";

export default function Home() {
  const blogsPerPage = 10;
  const blogs = blogData.slice(0, blogsPerPage);

  return (
    <div className="w-full">
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination totalPages={Math.ceil(blogData.length / blogsPerPage)} />
      </div>
    </div>
  );
}

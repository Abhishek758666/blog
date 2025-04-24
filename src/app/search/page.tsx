// "use client";

// import type React from "react";

// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { BlogCard } from "@/components/blog-card";
// import { Sidebar } from "@/components/sidebar";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
// import { blogData } from "@/lib/data";

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const initialQuery = searchParams.get("q") || "";
//   const [searchQuery, setSearchQuery] = useState(initialQuery);
//   const [searchResults, setSearchResults] = useState<typeof blogData>([]);

//   useEffect(() => {
//     handleSearch(initialQuery);
//   }, [initialQuery]);

//   const handleSearch = (query: string) => {
//     if (!query.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     const filteredResults = blogData.filter(
//       (blog) =>
//         blog.title.toLowerCase().includes(query.toLowerCase()) ||
//         blog.content.toLowerCase().includes(query.toLowerCase()) ||
//         blog.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
//     );

//     setSearchResults(filteredResults);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleSearch(searchQuery);
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8">Search</h1>

//         <form onSubmit={handleSubmit} className="mb-8">
//           <div className="relative max-w-2xl">
//             <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search for posts..."
//               className="pl-10 h-12"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Button
//               type="submit"
//               className="absolute right-0 top-0 h-12 rounded-l-none"
//             >
//               Search
//             </Button>
//           </div>
//         </form>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             {searchResults.length > 0 ? (
//               <div className="space-y-8">
//                 <p className="text-muted-foreground">
//                   Found {searchResults.length} result
//                   {searchResults.length !== 1 ? "s" : ""} for &quote;
//                   {initialQuery}
//                   &quote;
//                 </p>
//                 {searchResults.map((blog) => (
//                   <BlogCard key={blog.id} blog={blog} />
//                 ))}
//               </div>
//             ) : initialQuery ? (
//               <div className="text-center py-12">
//                 <h2 className="text-2xl font-semibold mb-2">
//                   No results found
//                 </h2>
//                 <p className="text-muted-foreground">
//                   We couldn&paos;t find any posts matching &quote;
//                   {initialQuery} &quote;
//                 </p>
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <h2 className="text-2xl font-semibold mb-2">
//                   Enter a search term
//                 </h2>
//                 <p className="text-muted-foreground">
//                   Search for posts by title, content, or tags
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="mt-8 md:mt-0">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     </Suspense>
//   );
// }

import React from "react";

const page = () => {
  return <div>this is search page</div>;
};

export default page;

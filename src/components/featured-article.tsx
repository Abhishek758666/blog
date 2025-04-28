import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FeaturedArticleProps {
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
}

export function FeaturedArticle({
  author,
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
  slug,
}: FeaturedArticleProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
            />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <Link href={`/blogs/${slug}`} className="hover:underline">
          <h3 className="font-serif text-xl font-bold md:text-2xl">{title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 md:line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{date}</span>
          <span className="mx-1">·</span>
          <span>{readTime}</span>
          <span className="mx-1">·</span>
          <Link href={`/blogs?tag=${tags[0]}`} className="hover:underline">
            {tags[0]}
          </Link>
        </div>
      </div>
      <div className="order-first md:order-last">
        <Link
          href={`/blogs/${slug}`}
          className="block overflow-hidden rounded-lg"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
}

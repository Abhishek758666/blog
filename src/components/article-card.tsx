import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleCardProps {
  number: string;
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export function ArticleCard({
  number,
  author,
  title,
  date,
  readTime,
  tags,
  slug,
}: ArticleCardProps) {
  console.log(tags);
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl font-bold text-muted-foreground">{number}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
            />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <Link href={`/articles/${slug}`} className="hover:underline">
          <h3 className="font-serif text-lg font-bold line-clamp-2">{title}</h3>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{date}</span>
          <span className="mx-1">·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
}

export function BlogCard({ title, excerpt, date, tags, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src="/placeholder.svg?height=200&width=400" alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <Link href={`/blogs/${slug}`} className="hover:underline">
            <h3 className="font-bold text-xl line-clamp-2">{title}</h3>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link key={tag} href={`/blogs?tag=${tag}`}>
            <Badge variant="secondary">{tag}</Badge>
          </Link>
        ))}
      </CardFooter>
    </Card>
  )
}

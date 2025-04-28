import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function FeaturedPost() {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-60 w-full">
        <Image src="/placeholder.svg?height=240&width=500" alt="Featured post" fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">Featured</Badge>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <Link href="/blogs/building-a-blog-with-nextjs" className="hover:underline">
            <h3 className="font-bold text-2xl">Building a Blog with Next.js</h3>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <time dateTime="2023-06-03">June 3, 2023</time>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground">
          A step-by-step guide to building a blog with Next.js and Tailwind CSS. Learn how to create a fast,
          SEO-friendly, and beautiful blog.
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
        </div>
        <Link href="/blogs/building-a-blog-with-nextjs">
          <Button variant="ghost" size="sm" className="gap-1">
            Read more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

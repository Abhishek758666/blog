import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Mock data for tags
const TAGS = [
  { name: "React", count: 12 },
  { name: "JavaScript", count: 18 },
  { name: "TypeScript", count: 9 },
  { name: "Next.js", count: 7 },
  { name: "CSS", count: 14 },
  { name: "Tailwind CSS", count: 6 },
  { name: "Web Development", count: 22 },
  { name: "Programming", count: 15 },
  { name: "Design", count: 8 },
  { name: "API", count: 5 },
  { name: "GraphQL", count: 3 },
  { name: "Redux", count: 4 },
]

export function TagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <Link key={tag.name} href={`/blogs?tag=${tag.name}`}>
          <Badge variant="outline" className="hover:bg-muted cursor-pointer">
            {tag.name} <span className="ml-1 text-muted-foreground">({tag.count})</span>
          </Badge>
        </Link>
      ))}
    </div>
  )
}

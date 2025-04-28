import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Mock data for tags
const TAGS = [
  "Programming",
  "Web Development",
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "CSS",
  "Design",
  "API",
  "GraphQL",
]

export function PopularTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <Link key={tag} href={`/articles?tag=${tag}`}>
          <Badge variant="outline" className="rounded-full hover:bg-muted cursor-pointer">
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  )
}

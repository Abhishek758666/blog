import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold">
              Writewise
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Where good ideas find you.</p>
          </div>
          <div>
            <h3 className="font-medium">Content</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-foreground">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-muted-foreground hover:text-foreground">
                  Topics
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-muted-foreground hover:text-foreground">
                  Authors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Writewise. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

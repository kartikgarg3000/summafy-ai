import { Github, Linkedin, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode
}

function SocialLink({ children, className, ...props }: SocialLinkProps) {
  return (
    <a 
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/50 hover:bg-accent hover:text-accent-foreground transition-colors",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <SocialLink href="https://x.com/Kartik_sui">
        <X className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </SocialLink>
      <SocialLink href="https://github.com/kartikgarg3000">
        <Github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </SocialLink>
    
      <SocialLink href="https://www.linkedin.com/in/kartik-garg-a01027231/">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </SocialLink>
    </div>
  )
}
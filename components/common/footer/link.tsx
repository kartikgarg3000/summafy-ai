import { cn } from "@/lib/utils"

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode
}

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a 
      className={cn(
        "transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )} 
      {...props}
    >
      {children}
    </a>
  )
}
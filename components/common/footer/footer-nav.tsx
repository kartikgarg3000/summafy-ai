import { Link } from "./link"

interface FooterNavProps {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export function FooterNav({ title, links }: FooterNavProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link 
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
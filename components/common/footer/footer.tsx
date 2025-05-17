import { SocialLinks } from "./social-links"
import { Logo } from "./logo"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-card/40 to-card/80 border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Brand section */}
          <div className="space-y-4 mb-8">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Made with 💚 in Next.js!
            </p>
            <SocialLinks />
          </div>

          {/* Bottom section */}
          <div className="w-full pt-6 border-t border-border/60">
            <div className="flex justify-center items-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Kartik Garg. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { Facebook, Instagram, Twitter, Send, MessageCircle, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display font-bold text-lg">
            <span className="text-gradient-neon">GM</span> Reaz<span className="text-neon">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Web Developer & Digital Marketer crafting fast, beautiful, conversion-driven experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-neon">About</Link></li>
            <li><Link to="/projects" className="hover:text-neon">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-neon">Skills</Link></li>
            <li><Link to="/blog" className="hover:text-neon">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://facebook.com/gmreazahmed" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/gmreazahmed" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/gmreazahmed" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://wa.me/8801400837307" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="https://t.me/gmreazahmed" target="_blank" rel="noreferrer" aria-label="Telegram" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <Send size={18} />
            </a>
            <a href="mailto:gmreazahmed@gmail.com" aria-label="Email" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} GM Reaz Ahmed. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}

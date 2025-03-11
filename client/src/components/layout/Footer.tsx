import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">TechCorp</h3>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-primary">Testimonials</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary">Services</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal#privacy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/legal#terms" className="text-sm hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/legal#compliance" className="text-sm hover:text-primary">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
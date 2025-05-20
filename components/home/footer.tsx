/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ynQX3damd46
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <footer id="contact-section" className="bg-[#000] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm">&copy; 2024 IEEE Student branch of USJ. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white hover:text-foreground"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-foreground"
              prefetch={false}
            >
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-foreground"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-foreground"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-medium text-white">Sitemap</h4>
          <nav className="grid grid-cols-2 gap-4">
            <Link
              href="#"
              className="text-sm text-white hover:text-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#about-section"
              className="text-sm text-white hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#contact-section"
              className="text-sm text-white hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#event-plan"
              className="text-sm text-white hover:text-foreground"
              prefetch={false}
            >
              Event plan
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-medium text-white">Contact</h4>
          <address className="not-italic">
            <p className="text-sm text-white">
            University of Sri Jayewardenepura<br/>
            Gangodawila, Nugegoda, Sri Lanka.
            </p>
            <br />
            <p className="text-sm text-white">
              <Link href="tel: +94 901 2156" className="hover:text-foreground" prefetch={false}>
                +94 901 2156 - Lavindu
              </Link>
            </p>
            <p className="text-sm text-white">
              <Link href="mailto:ieee@sjp.ac.lk" className="hover:text-foreground" prefetch={false}>
                ieee@sjp.ac.lk
              </Link>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

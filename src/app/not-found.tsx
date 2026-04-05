import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-9xl font-extrabold text-primary opacity-20">404</h1>
        <div className="relative -mt-20">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Oops! Page not found</h2>
          <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button variant="hero" size="lg" className="rounded-full px-10">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

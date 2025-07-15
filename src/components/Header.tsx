import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logos/IEEE_WHITE.png"
              alt="IEEE Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-blue-400 font-medium">
              Home
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              News
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Events
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Documents
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Section Organizational Units
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Newsletter
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Conferences
            </Link>
            <Link
              to="#"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white">
            Join IEEE
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6">
                <div className="flex flex-col space-y-4 pt-8">
                  <SheetClose asChild>
                    <Link to="/" className="text-blue-600 font-medium text-lg">
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      About Us
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      News
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Events
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Gallery
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Documents
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Section Organizational Units
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Newsletter
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Conferences
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="#"
                      className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="mt-4">Join IEEE</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function Header() {
  const navigationItems = [
    { to: "/", label: "Home", isActive: true },
    { to: "#", label: "About Us" },
    { to: "#", label: "News" },
    { to: "#", label: "Events" },
    { to: "#", label: "Gallery" },
    { to: "#", label: "Documents" },
    { to: "#", label: "Section Organizational Units" },
    { to: "#", label: "Newsletter" },
    { to: "#", label: "Conferences" },
    { to: "#", label: "Contact" },
  ]

  return (
    <header className="bg-slate-800 text-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" aria-label="IEEE Sri Lanka Section Home">
            <img
              src="/logos/IEEE_WHITE.png"
              alt="IEEE Logo"
              width={100} 
              height={56} 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`transition-colors ${
                  item.isActive ? "text-blue-400 font-medium" : "text-slate-300 hover:text-blue-400"
                }`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white" type="button">
            Join IEEE
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
                  <MenuIcon className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6 bg-white text-slate-800">
                <div className="flex flex-col space-y-4 pt-8">
                  {navigationItems.map((item) => (
                    <SheetClose key={item.label} asChild>
                      <Link
                        to={item.to}
                        className={`text-lg transition-colors ${
                          item.isActive ? "text-blue-600 font-medium" : "text-slate-800 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white" type="button">
                      Join IEEE
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

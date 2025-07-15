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
    <header className="bg-slate-800 text-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logos/IEEE_WHITE.png"
              alt="IEEE Logo"
              width={50}
              height={50}
              className="h-14 w-auto object-contain"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`transition-colors whitespace-nowrap ${
                  item.isActive
                    ? "text-blue-400 font-medium"
                    : "text-slate-300 hover:text-blue-400"
                }`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Join Button */}
          <div className="hidden lg:flex">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Join IEEE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <MenuIcon className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white text-slate-800 p-6">
                <div className="flex flex-col space-y-4 pt-6">
                  {navigationItems.map((item) => (
                    <SheetClose key={item.label} asChild>
                      <Link
                        to={item.to}
                        className={`text-lg font-medium transition-colors ${
                          item.isActive ? "text-blue-600" : "hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full">
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

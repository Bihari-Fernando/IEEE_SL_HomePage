import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { title: "About Us", to: "#" },
  { title: "Membership", to: "#" },
  { title: "Events", to: "#" },
  { title: "Gallery", to: "#" },
];

const resources = [
  { title: "Documents", to: "#" },
  { title: "Newsletter", to: "#" },
  { title: "Conferences", to: "#" },
  { title: "Contact", to: "#" },
];

const socialLinks = [
  { icon: Facebook, to: "#", hoverColor: "hover:bg-blue-600" },
  { icon: Twitter, to: "#", hoverColor: "hover:bg-blue-400" },
  { icon: Linkedin, to: "#", hoverColor: "hover:bg-blue-700" },
  { icon: Youtube, to: "#", hoverColor: "hover:bg-red-600" },
  { icon: Instagram, to: "#", hoverColor: "hover:bg-pink-600" },
];

const footerLinks = [
  { title: "Privacy Policy", to: "#" },
  { title: "Terms of Service", to: "#" },
  { title: "Accessibility", to: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logos/IEEE_WHITE.png"
                alt="IEEE Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Advancing technology for humanity through innovation,
              collaboration, and professional excellence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    to={social.to}
                    className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center ${social.hoverColor} transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 IEEE Sri Lanka Section. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

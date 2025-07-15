import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Carousel from "./Carousel";

const heroSlidesData = [
  {
    id: 1,
    image: "/images/bannerAID.jpg",
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center text-white m-6">
        <div className="space-y-8 m-6">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="text-white border-orange-200 bg-orange-600/20 backdrop-blur-sm"
            >
              AI-Driven Sri Lanka
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Empowering Through AI
              <span className="text-orange-400 block">
                IEEE Young Professionals
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-orange-100">
              A transformative initiative focused on leveraging artificial
              intelligence to drive innovation, collaboration, and community
              impact across Sri Lanka.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Join the Mission
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    image: "/images/innovation.jpg",
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center text-white m-6">
        <div className="space-y-8 m-6">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="text-white border-purple-200 bg-purple-600/20 backdrop-blur-sm"
            >
              IEEE Innovation Nation
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Igniting Innovation in Sri Lanka
              <span className="text-purple-400 block">2023 Highlights</span>
            </h1>
            <p className="text-xl leading-relaxed text-purple-100">
              Showcasing young minds, breakthrough ideas, and entrepreneurial
              energy through Sri Lanka’s largest innovation challenge platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              View Highlights
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Pitch Your Idea
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/StudPro.jpg",
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center text-white m-6">
        <div className="space-y-8 m-6">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="text-white border-cyan-200 bg-cyan-600/20 backdrop-blur-sm"
            >
              StudPro 6.0
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Step Into Your Career
              <span className="text-orange-400 block">
                IEEE Young Professionals
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-cyan-100">
              Helping students and recent graduates build their professional
              profiles, explore career opportunities, and network with top
              industry leaders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-cyan-600 hover:bg-orange-700">
              Discover StudPro
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    image: "/images/techverse.jpg",
    content: (
      <div className="grid lg:grid-cols-2 gap-12 items-center text-white m-6">
        <div className="space-y-8 m-6">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="text-white border-blue-200 bg-blue-600/20 backdrop-blur-sm"
            >
              TechVerse
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Explore the World of Tech
              <span className="text-red-400 block">IEEE TechVerse 2025</span>
            </h1>
            <p className="text-xl leading-relaxed text-blue-100">
              A premier technology summit bringing together students,
              professionals, and thought leaders to explore future-ready
              solutions and emerging technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Explore Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <Carousel slides={heroSlidesData} />
    </section>
  );
}

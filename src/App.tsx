import { Header } from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import CoreValuesSection from "./components/CoreValuesSection";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import EventsNewsSection from "./components/EventsNewsSection";
import PartnerOrganizations from "./components/PartnerOrganizations";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-slate-100">
      <Header />
      <HeroSection />
      <CoreValuesSection />
      <AboutSection />
      <AchievementsSection />
      <EventsNewsSection />
      <PartnerOrganizations />
      <Footer />
    </div>
  );
}

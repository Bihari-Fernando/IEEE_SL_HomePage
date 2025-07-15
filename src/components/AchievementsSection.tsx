import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface AchievementCardProps {
  year: string;
  title: string;
  description: string;
  awardType: "gold" | "silver";
}

const achievements: AchievementCardProps[] = [
  {
    year: "2019",
    title: "Outstanding Section",
    description: "Membership Recruitment Performance",
    awardType: "silver",
  },
  {
    year: "2020",
    title: "Exemplary Performance",
    description: "Volunteer Engagement Excellence",
    awardType: "silver",
  },
  {
    year: "2021",
    title: "Outstanding Section",
    description: "Membership Recruitment and Retention",
    awardType: "gold",
  },
  {
    year: "2022",
    title: "Leadership Award",
    description: "For Exceptional Leadership Development",
    awardType: "gold",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "For Innovative Projects & Community Impact",
    awardType: "silver",
  },
];

function AchievementCard({
  year,
  title,
  description,
  awardType,
}: AchievementCardProps) {
  const imageSrc =
    awardType === "gold" ? "/logos/gold.jpg" : "/logos/silver.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="text-center border-0 shadow-lg w-[280px] h-[320px] mx-auto flex flex-col">
        <CardHeader className="pb-4 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4">
            <img
              src={imageSrc}
              alt={`${awardType} badge`}
              className="w-full h-full object-contain"
            />
          </div>
          <CardTitle className="text-slate-800 text-lg font-semibold">
            {year} {title}
          </CardTitle>
          <CardDescription className="text-sm text-slate-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>
    </motion.div>
  );
}

export function AchievementsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const autoplay = setInterval(() => emblaApi?.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Our Recent Achievements
          </h2>
          <p className="text-xl text-slate-600">
            Recognition for excellence in membership and community service
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {achievements.map((achievement, index) => (
                <div key={index} className="min-w-full md:min-w-[50%]">
                  <AchievementCard {...achievement} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-6 top-1/2 -translate-y-1/2">
            <Button
              onClick={scrollPrev}
              variant="ghost"
              size="icon"
              className="bg-transparent hover:bg-white hover:text-black text-gray-500"
            >
              <GoChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute -right-6 top-1/2 -translate-y-1/2">
            <Button
              onClick={scrollNext}
              variant="ghost"
              size="icon"
              className="bg-transparent hover:bg-white hover:text-black text-gray-500"
            >
              <GoChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

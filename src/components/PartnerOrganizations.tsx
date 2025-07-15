import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });

type Partner = {
  name: string;
  src: string;
};

export default function PartnerOrganizations() {
  const partners: Partner[] = [
    { name: "IEEE PES", src: "/partners/ieee-pes.jpg" },
    { name: "IEEE RAS", src: "/partners/ieee-ras.jpg" },
    { name: "Computer Society", src: "/partners/ieee-cs.jpg" },
    { name: "Women in Engineering", src: "/partners/ieee-wie.jpg" },
    { name: "IEEE MTT-S", src: "/partners/ieee-mtt-s.jpg" },
    { name: "Young Professionals SL", src: "/partners/ieee-yp-sl.jpg" },
    { name: "robotics", src: "/partners/ieee-robotics.jpg" },
    { name: "IEEE IAS", src: "/partners/ieee-ias.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-12">
          Our Partner Organizations
        </h2>
        <Carousel className="w-full" plugins={[autoplayPlugin]}>
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div>
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

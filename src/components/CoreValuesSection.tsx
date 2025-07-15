import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Landmark, Users, HandHeart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pioneering breakthrough technologies and creative solutions for tomorrow's challenges.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    titleColor: "text-blue-700",
  },
  {
    icon: Landmark,
    title: "Tradition",
    description:
      "Building upon decades of engineering excellence and professional heritage.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    titleColor: "text-green-700",
  },
  {
    icon: Users,
    title: "Humanity",
    description:
      "Developing technology that serves people and improves quality of life globally.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    titleColor: "text-purple-700",
  },
  {
    icon: HandHeart,
    title: "Life",
    description:
      "Enhancing lives through meaningful technological advancement and community impact.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    titleColor: "text-red-700",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Guided by principles that drive technological advancement and human
            progress
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="relative text-center bg-gray-100 border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="relative z-10 p-6">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 ${value.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <CardTitle className={value.titleColor}>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{value.description}</p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

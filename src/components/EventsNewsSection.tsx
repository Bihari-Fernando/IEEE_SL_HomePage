import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Users, Award, Globe } from "lucide-react";

const events = [
  {
    title: "IEEE SL SYW Congress 2025",
    date: "September 26-27, 2025",
    description: "Annual Student and Young Professional Congress",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Technical Workshop Series",
    date: "Monthly Events",
    description: "Professional development workshops for members",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const quickLinks = [
  { title: "Membership", icon: Users, color: "text-blue-600" },
  { title: "Events", icon: Calendar, color: "text-green-600" },
  { title: "Awards", icon: Award, color: "text-purple-600" },
  { title: "Resources", icon: Globe, color: "text-red-600" },
];

export default function EventsNewsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Latest Events
            </h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-100 to-purple-50 "
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Calendar className={`w-6 h-6 ${event.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-2">
                          {event.date}
                        </p>
                        <p className="text-slate-600">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="mt-6 bg-transparent">
              View All Events
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className={`w-8 h-8 ${link.color} mx-auto mb-3`} />
                      <h3 className="font-semibold text-slate-800">
                        {link.title}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

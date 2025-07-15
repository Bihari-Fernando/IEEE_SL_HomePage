import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Users, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-200 mb-4"
              >
                Established November 14, 2003
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                About IEEE Sri Lanka Section
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Formed as a member of IEEE Region 10, our section has grown
                exponentially since 2003, achieving remarkable success through
                passionate volunteers and dedicated professionals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our vibrant community comprises university academics, industry
                professionals, and students across Sri Lanka, working together
                to foster technological innovation and excellence for humanity's
                benefit and technical professionalism advancement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
              <Button variant="outline">View Our History</Button>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-blue-100 to-purple-50 border-0">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Outstanding Performance
                    </h3>
                    <p className="text-sm text-slate-600">
                      Multiple IEEE awards and recognitions
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Growing Community
                    </h3>
                    <p className="text-sm text-slate-600">
                      Expanding membership year by year
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Global Platform
                    </h3>
                    <p className="text-sm text-slate-600">
                      Connecting local talent to worldwide opportunities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

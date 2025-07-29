import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Lead Data Scientist</CardTitle>
                  <CardDescription>
                    GDSC JKUAT Chapter • September 2022 - Present
                  </CardDescription>
                </div>
                <Badge>Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Coordinated weekly Data Science track meetups reaching 15+
                  students
                </li>
                <li>
                  • Organized multiple hackathons focused on Data Science and AI
                </li>
                <li>
                  • Conducted instructional sessions on machine learning and
                  data science
                </li>
                <li>
                  • Substantially elevated club engagement through innovative
                  programming
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Chatbot Developer</CardTitle>
                  <CardDescription>
                    Palladium • April 2023 - May 2023
                  </CardDescription>
                </div>
                <Badge variant="secondary">2nd Runner-up</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Developed AI-powered chatbot for people living with AIDS on
                  Nishauri platform
                </li>
                <li>
                  • Successfully deployed across WhatsApp, Telegram, and web
                  applications
                </li>
                <li>
                  • Implemented advanced NLU capabilities for healthcare
                  interactions
                </li>
                <li>
                  • Achieved second runner-up position in competitive assessment
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technical Writer</CardTitle>
              <CardDescription>
                Medium & Stackademic • February 2024 - Present
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Authored 5 comprehensive technical articles on AI, ML, and
                  software development
                </li>
                <li>
                  • Featured in Stackademic, a prominent technical publication
                  platform
                </li>
                <li>
                  • Garnered 73+ total engagements across published content
                </li>
                <li>
                  • Bridged theory and real-world implementation for global
                  developer audience
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

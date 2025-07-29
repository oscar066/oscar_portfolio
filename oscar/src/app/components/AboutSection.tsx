import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm an innovative Software Engineer and Data Scientist with
              demonstrated expertise in developing scalable solutions across AI,
              machine learning, and full-stack development. My passion lies in
              leveraging technology to solve complex problems and create
              meaningful impact.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a proven track record in Python development, data
              visualization, and system implementation across diverse sectors
              including healthcare, social platforms, and enterprise
              applications, I bring both technical excellence and
              entrepreneurial mindset to every project.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Critical Thinking</Badge>
              <Badge variant="secondary">Cross-cultural Collaboration</Badge>
              <Badge variant="secondary">Technical Communication</Badge>
              <Badge variant="secondary">Entrepreneurial Mindset</Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">5+</h3>
                <p className="text-sm text-gray-600">Awards Won</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">5</h3>
                <p className="text-sm text-gray-600">Articles Published</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">10+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">15+</h3>
                <p className="text-sm text-gray-600">Students Mentored</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

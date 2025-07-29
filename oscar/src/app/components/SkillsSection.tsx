import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Brain, Database, Globe } from "lucide-react";

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-600" />
                Programming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>JavaScript</Badge>
                <Badge>R</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-600" />
                Machine Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>TensorFlow</Badge>
                <Badge>Keras</Badge>
                <Badge>PyTorch</Badge>
                <Badge>Transformers</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                Data & AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Tableau</Badge>
                <Badge>Power BI</Badge>
                <Badge>NLTK</Badge>
                <Badge>spaCy</Badge>
                <Badge>RAG Models</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Django</Badge>
                <Badge>FastAPI</Badge>
                <Badge>React Native</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

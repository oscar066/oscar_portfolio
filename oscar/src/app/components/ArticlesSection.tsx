import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Published Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Deploying ML Model on Mobile Application
              </CardTitle>
              <CardDescription>February 2024 • Medium</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive guide on bringing intelligence to mobile
                applications through ML model deployment.
              </p>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Compute in the Clouds: Top IDEs for Data Scientists
              </CardTitle>
              <CardDescription>November 2024 • Stackademic</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Exploring the best cloud-based development environments for ML
                wizards and data scientists.
              </p>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Publishing A Python Package to PyPI
              </CardTitle>
              <CardDescription>August 2024 • Medium</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Step-by-step guide to publishing and maintaining Python packages
                on the Python Package Index.
              </p>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                OpenSource Local RAG Model
              </CardTitle>
              <CardDescription>August 2024 • Medium</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Building and deploying local RAG models without downloading
                models locally - innovative approach to AI deployment.
              </p>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

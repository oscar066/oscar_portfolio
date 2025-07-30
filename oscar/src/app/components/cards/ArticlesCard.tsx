import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Article } from "@/lib/articlesData";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{article.title}</CardTitle>
        <CardDescription>
          {article.date} • {article.publication}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <Button asChild variant="outline" size="sm">
          <Link href={article.link} target="_blank" rel="noopener noreferrer">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Article
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
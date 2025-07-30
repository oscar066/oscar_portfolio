import { articles } from "@/lib/articlesData"; 
import ArticleCard from "./cards/ArticlesCard";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Published Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

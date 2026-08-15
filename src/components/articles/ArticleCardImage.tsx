import Image from "next/image";
import type { Article } from "@/lib/data/articles/types";

type ArticleCardImageProps = {
  article: Article;
  priority?: boolean;
  className?: string;
};

export function ArticleCardImage({ article, priority = false, className = "" }: ArticleCardImageProps) {
  return (
    <div className={`aspect-video bg-sage relative overflow-hidden ${className}`}>
      <Image
        src={article.image.src}
        alt={article.image.alt}
        width={article.image.width}
        height={article.image.height}
        priority={priority}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      />
    </div>
  );
}

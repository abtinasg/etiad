export type ArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text?: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  lastReviewed?: string;
  author: string;
  medicalReviewer?: string;
  relatedServiceSlug?: string;
  relatedArticleSlugs?: string[];
  image: ArticleImage;
  blocks: ArticleBlock[];
  references: string[];
};

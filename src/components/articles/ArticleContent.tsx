import type { ArticleBlock } from "@/lib/data/articles/types";
import { slugifyHeading } from "@/components/articles/ArticleExtras";

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="prose-medical">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2 key={index} id={slugifyHeading(block.text)}>
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={index}>
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index}>
                <FormattedText text={block.text} />
              </p>
            );
          case "list":
            return (
              <ul key={index} className="list-disc pr-6 space-y-2 mb-6 text-text-secondary">
                {block.items.map((item) => (
                  <li key={item}>
                    <FormattedText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="bg-sage-light border border-border rounded-[16px] p-6 my-8 not-prose"
              >
                <h3 className="font-bold text-primary mb-2">{block.title}</h3>
                {block.text && (
                  <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                    {block.text}
                  </p>
                )}
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

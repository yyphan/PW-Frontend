import { MarkdownComponents } from "@/components/markdown/markdownComponents";
import { getPost } from "@/lib/api";
import { getLangDict, Locale } from "@/lib/constants";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkUnwrapImages from "remark-unwrap-images";

type Params = {
  lang: string;
  topic: string;
  seriesSlug: string;
  postSlug?: string[];
};

type Props = {
  params: Promise<Params>;
}

export default async function PostPage({ params }: Props) {
  const { lang, topic, seriesSlug, postSlug } = await params;
  let finalPostSlug;

  // if only one post in series, the postSlug in URL is optional and if specified, should be 'index'
  if (!postSlug || postSlug.length === 0) {
    finalPostSlug = "index";
  } else {
    finalPostSlug = postSlug[0];
  }

  const post = await getPost(lang, seriesSlug, finalPostSlug);

  return (
    <article className="max-w-[800px] mx-auto px-6 pb-20">

      <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8 pt-6 border-b border-dashed border-ide-border pb-4">
        <span>~/</span>
        <Link href={`/${lang}/${topic}`} className="hover:text-ide-keyword transition-colors">
          {topic}
        </Link>
        <span>/</span>
        <Link href={`/${lang}/${topic}/${seriesSlug}`} className="hover:text-ide-keyword transition-colors">
          {seriesSlug}
        </Link>
        <span>/</span>
        <span className="text-ide-string">{finalPostSlug}.md</span>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
          {post.title}
        </h1>

        <div className="font-mono text-sm text-ide-comment flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span>{getLangDict(lang as Locale).lastUpdatedStrInPost}: {post.updatedAt}</span>
        </div>
      </header>

      <div className="min-h-[200px]">
        <MDXRemote
          source={post.markdownContent}
          components={MarkdownComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkUnwrapImages], // remove <p> if <figure> is the only child
            },
          }}
        />
      </div>
    </article>
  );
}
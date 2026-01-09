import { MarkdownComponents } from "@/components/markdown/markdownComponents";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkUnwrapImages from "remark-unwrap-images";
import fs from "fs";
import path from "path";

export default async function DebugPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const topic = "debug";
    const seriesSlug = "preview";
    const postSlug = "Preview";

    // Read local file directly
    const filePath = path.join(process.cwd(), "src/lib/mdRepo/Preview.md");
    let markdownContent = "";
    try {
        markdownContent = fs.readFileSync(filePath, "utf-8");
    } catch (e) {
        markdownContent = `# Error Reading File\n\nCould not read file at ${filePath}\n\n${e}`;
    }

    const post = {
        title: "Preview Mode",
        updatedAt: new Date().toISOString().split("T")[0],
        markdownContent: markdownContent
    };

    return (
        <article className="max-w-[800px] mx-auto px-6 pb-20">

            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8 pt-6 border-b border-dashed border-ide-border pb-4">
                <span>~/</span>
                <span className="hover:text-ide-keyword transition-colors">
                    {topic}
                </span>
                <span>/</span>
                <span className="hover:text-ide-keyword transition-colors">
                    {seriesSlug}
                </span>
                <span>/</span>
                <span className="text-ide-string">{postSlug}.md</span>
            </div>

            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                    {post.title}
                </h1>

                <div className="font-mono text-sm text-ide-comment flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span>Debug Mode ({lang}): {post.updatedAt}</span>
                </div>
            </header>

            <div className="min-h-[200px]">
                <MDXRemote
                    source={post.markdownContent}
                    components={MarkdownComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkUnwrapImages],
                        },
                    }}
                />
            </div>
        </article>
    );
}

import Link from "next/link";
import Image from "next/image";
import TechieTitle from "./title-variants/TechieTitle";
import ReaderTitle from "./title-variants/ReaderTitle";

type Props = {
    index: number;
    backgroundImgUrl: string;
    seriesSlug: string;
    title: string;
    description: string;
    topic: string;
}

const TitleRenderers: Record<string, React.FC<{ title: string }>> = {
    techie: TechieTitle,
    reader: ReaderTitle,
};

export default function SeriesCard({ index, backgroundImgUrl, seriesSlug, title, description, topic }: Props) {
    const FeaturedTitle = TitleRenderers[topic] || TechieTitle;
    console.log(`url: ${backgroundImgUrl}`);

    return (
        <Link href="#" className="code-block">
            <div className="line-numbers">{index * 3 + 1}<br />{index * 3 + 2}<br />{index * 3 + 3}</div>
            <div className="code-content">
                <div className="doc-comment text-ide-comment font-mono text-sm">
                    {description
                        .split(/\\n|\n/)
                        .map((line, index) => (
                            <div key={index} className="flex">
                                <span className="opacity-50 select-none mr-2 shrink-0">//</span>
                                <span>{line.trim()}</span>
                            </div>
                        ))}
                </div>

                <FeaturedTitle title={title} />
            </div>
            <div className="preview-window">
                <Image src={backgroundImgUrl} alt="Cover" width={500} height={500} />
            </div>
        </Link>
    );
}

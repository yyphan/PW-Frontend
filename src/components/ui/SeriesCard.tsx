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
    lang: string;
}

const TitleRenderers: Record<string, React.FC<{ title: string }>> = {
    techie: TechieTitle,
    reader: ReaderTitle,
};

export default function SeriesCard({ index, backgroundImgUrl, seriesSlug, title, description, topic, lang }: Props) {
    const FeaturedTitle = TitleRenderers[topic] || TechieTitle;
    const postLink = `/${lang}/${topic}/${seriesSlug}`;

    return (
        <Link href={postLink} className="code-block" style={{ height: "200px" }}>
            <div className="line-numbers">{index * 3 + 1}<br />{index * 3 + 2}<br />{index * 3 + 3}</div>
            <div className="code-content">
                <div className="doc-comment text-ide-comment font-mono" style={{ marginTop: "calc(0.8rem * 1.5 * 2)" }}>
                    {description
                        .split(/\\n|\n/)
                        .map((line, index) => (
                            <div key={index} className="flex">
                                <span className="opacity-50 select-none mr-2 shrink-0">//</span>
                                <span>{line.trim()}</span>
                            </div>
                        ))}
                </div>

                <div className="mt-2">
                    <FeaturedTitle title={title} />
                </div>
            </div>
            <div className="preview-window">
                <Image src={backgroundImgUrl} alt="Cover" fill className="object-contain" style={{ objectFit: "contain" }} />
            </div>
        </Link>
    );
}

import SeriesCard from "@/components/ui/SeriesCard";
import { getSeriesList } from "@/lib/api";

type Params = {
  lang: string;
  topic: string;
}

export default async function Home({ params }: { params: Promise<Params> }) {
  const { lang, topic } = await params;

  const seriesList = (await getSeriesList(lang, topic)).series;

  return (
    <div>
      {seriesList && seriesList.map((series, i) => (
        <SeriesCard
          key={i}
          index={i}
          backgroundImgUrl={series.bgUrl}
          seriesSlug={series.seriesSlug}
          title={series.title}
          description={series.description}
          topic={topic}
          lang={lang}
        />
      ))}
    </div>
  );
}
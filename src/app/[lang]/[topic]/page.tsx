import SeriesCard from "@/components/ui/SeriesCard";

type Params = {
  topic: string;
}

export default async function Home({params}: {params: Promise<Params>}) {
  const { topic } = await params;
  return (
    <div className="">
      <SeriesCard
        backgroundImgUrl=""
        seriesSlug="atomic-habits"
        title="Atomic Habits"
        description={`This is my book notes on \n Atomic Habits by James Clear`}
        topic = {topic}
      />
      
      <SeriesCard
        backgroundImgUrl=""
        seriesSlug="light-band"
        title="Light Band in Unity"
        description={`Here are a few ways to create a light band in Unity`}
        topic = {topic}
      />
    </div>
  );
}
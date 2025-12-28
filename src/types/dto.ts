export type SeriesListResponse = {
    topic: string;
    lang: string;
    series: SeriesCardDto[];
}

export type SeriesCardDto = {
    seriesSlug: string;
    bgUrl: string;
    title: string;
    description: string;
}

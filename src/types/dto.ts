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
    postSlugs: string[];
}

export type PostDto = {
    title: string;
    updatedAt: string;
    markdownContent: string;
}

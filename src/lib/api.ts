import matter from "gray-matter";
import { PostDto } from "@/types/dto";
import { SeriesListResponse } from "@/types/dto";

const API_BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:8080/api";

async function fetchFromBackend<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const res = await fetch(url, {
        next: { revalidate: 60 },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`fetchFromBackend Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function getSeriesList(lang: string, topic: string): Promise<SeriesListResponse> {
    return fetchFromBackend(`/series?topic=${topic}&lang=${lang}`);
}

export async function getPost(lang: string, seriesSlug: string, postSlug: string): Promise<PostDto> {
    const placeHolderPost: PostDto = {
        title: "Not found",
        updatedAt: "1999-11-19",
        markdownContent: "This Post was not found"
    }

    try {
        const postData: PostDto = await fetchFromBackend(`/post?languageCode=${lang}&seriesSlug=${seriesSlug}&postSlug=${postSlug}`);
        return postData;
    } catch (error) {
        console.log(`Error fetching post with languageCode: ${lang}, seriesSlug: ${seriesSlug}, postSlug: ${postSlug}`, error);
        return placeHolderPost;
    }
}

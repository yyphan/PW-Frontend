import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/model";
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

export async function getPost(): Promise<Post> {
    const placeHolderPost: Post = {
        metadata: {
            title: "Not found",
            updatedAt: "1999-11-19"
        },
        content: "This Post was not found"
    }

    const filePath = path.join(
        process.cwd(),
        "src/lib/mockMarkdown.md"
    );

    try {
        const fileContent = fs.readFileSync(filePath, "utf8");

        const { data, content } = matter(fileContent);

        return {
            metadata: data as Post["metadata"],
            content: content,
        };
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return placeHolderPost;
    }
}

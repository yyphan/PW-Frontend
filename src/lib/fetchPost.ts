import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { metadata } from "@/app/[lang]/layout";

export interface Post {
    metadata: {
        title: string;
        updatedAt: string;
    };

    content: string;
}

const placeHolderPost = {
    metadata: {
        title: "Not found",
        updatedAt: "1999-11-19"
    },
    content: "This Post was not found"
}

export async function getPost(): Promise<Post> {
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

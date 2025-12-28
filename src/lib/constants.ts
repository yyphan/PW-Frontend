import { PostDto } from "@/types/dto";

export type Locale = "en" | "cn";

export type LangDict = {
    topic: {
        techie: string;
        reader: string;
    };
    placeHolderPost: PostDto;
    lastUpdatedStrInPost: string;
};

const langDictRecord: Record<Locale, LangDict> = {
    en: {
        topic: { techie: "Techie", reader: "Reader" },
        placeHolderPost: {
            title: "Not found",
            updatedAt: "1999-11-19",
            markdownContent: "This post was not found, will you navigate to the home page?"
        },
        lastUpdatedStrInPost: "Last Updated"
    },
    cn: {
        topic: { techie: "开发", reader: "读者" },
        placeHolderPost: {
            title: "不存在",
            updatedAt: "1999-11-19",
            markdownContent: "这一篇好像还没被写出来，要不去首页看看？"
        },
        lastUpdatedStrInPost: "更新于"
    }
};

export const getLangDict = (lang: "en" | "cn") => {
    return langDictRecord[lang] || langDictRecord.en;
};

export type Locale = "en" | "cn";

export type LangDict = {
    topic: {
        techie: string;
        reader: string;
    };
    langToggle: {
        en: string;
        cn: string;
    };
};

const langDictRecord: Record<Locale, LangDict> = {
    en: {
        topic: { techie: "Techie", reader: "Reader" },
        langToggle: { en: "EN", cn: "CN" }
    },
    cn: {
        topic: { techie: "开发", reader: "读者" },
        langToggle: { en: "英文", cn: "中文" }
    }
};
  
export const getLangDict = (lang: "en" | "cn") => {
    return langDictRecord[lang] || langDictRecord.en;
};

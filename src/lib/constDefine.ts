export type Locale = "en" | "cn";

export type LangDict = {
    topic: {
        techie: string;
        reader: string;
    };
};

const langDictRecord: Record<Locale, LangDict> = {
    en: {
        topic: { techie: "Techie", reader: "Reader" }
    },
    cn: {
        topic: { techie: "开发", reader: "读者" }
    }
};
  
export const getLangDict = (lang: "en" | "cn") => {
    return langDictRecord[lang] || langDictRecord.en;
};

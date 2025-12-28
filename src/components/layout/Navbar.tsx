"use client";

import { usePathname, useRouter } from "next/navigation";
import VarButton from "@/components/ui/VarButton";
import Link from "next/link";
import { getLangDict } from "@/lib/constants"
import { useParams } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const currentLang = params.lang as "en" | "cn" || "en";
  const langDict = getLangDict(currentLang);
  const NavLinks = [
    {
      label: `"${langDict.topic.techie}"`,
      href: `/${currentLang}/techie`
    },
    {
      label: `"${langDict.topic.reader}"`,
      href: `/${currentLang}/reader`
    }
  ];

  const switchLang = (newLang: string) => {
    if (newLang === currentLang) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-ide-bg border-b border-ide-border z-50 font-mono text-sm sm:text-base">
      <div className="w-full h-full px-6 flex items-center justify-between">

        <div className="flex items-center gap-2 sm:gap-3 text-3xl">
          <span className="text-ide-keyword">var</span>
          <Link
            href="/"
            className="text-ide-var font-bold cursor-pointer"
          >
            YaoYifan
          </Link>
          <span className="text-ide-fg">=</span>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {NavLinks.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">

                <VarButton
                  label={item.label}
                  href={item.href}
                  isActive={pathname.includes(item.href)}
                  overrideClassName="text-2xl"
                />

                {index < NavLinks.length - 1 && (
                  <span className="text-ide-keyword text-bold text-2xl">|</span>
                )}

                {index === NavLinks.length - 1 && (
                  <div className="w-[0.4em] h-[1em] bg-ide-keyword animate-soft-blink translate-y-[1px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Language Toggle */}
        <div className="text-ide-fg flex items-center gap-1 text-xs sm:text-sm">
          <span className="text-zinc-500">[</span>

          <VarButton
            label="'EN'"
            isActive={currentLang === "en"}
            onClick={() => switchLang("en")}
            overrideClassName="text-sm"
          />

          <span className="text-zinc-600">,</span>

          <VarButton
            label="'中文'"
            isActive={currentLang === "cn"}
            onClick={() => switchLang("cn")}
            overrideClassName="text-sm"
          />

          <span className="text-zinc-500">]</span>
        </div>

      </div>
    </header>
  );
}